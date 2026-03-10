/**
 * Ported Framer Runtime for React Integration
 * This file contains the logic for animations, nested links, and parameter preservation
 * extracted from kungfudata.html.
 */

// --- Animator Physics & Utilities ---

export const animator = (() => {
  const clamp = (min: number, max: number, v: number) =>
    v > max ? max : v < min ? min : v;

  function memoize<T>(fn: () => T): () => T {
    let result: T | undefined;
    return () => (result === undefined ? (result = fn()) : result);
  }

  const identity = <T>(v: T) => v;
  const toMs = (v: number) => v * 1000;
  const fromMs = (v: number) => v / 1000;

  function velocityPerMs(v: number, duration: number) {
    return duration ? v * (1000 / duration) : 0;
  }

  const isKeyframes = (v: any): v is number[] =>
    Array.isArray(v) && typeof v[0] === "number";

  const generateLinearEasing = (
    easingFn: (t: number) => number,
    duration: number,
    step = 10,
  ) => {
    let points = "";
    let numPoints = Math.max(Math.round(duration / step), 2);
    for (let i = 0; i < numPoints; i++) {
      points +=
        Math.round(easingFn(i / (numPoints - 1)) * 10000) / 10000 + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
  };

  function findDuration(animation: {
    next: (t: number) => { done: boolean; value: number };
  }) {
    let t = 0;
    const step = 50;
    let res = animation.next(t);
    while (!res.done && t < 20000) {
      t += step;
      res = animation.next(t);
    }
    return t >= 20000 ? Infinity : t;
  }

  function keyframesToEase(easeConfig: any, maxVal = 100, animFn: any) {
    const anim = animFn({ ...easeConfig, keyframes: [0, maxVal] });
    const durationMs = Math.min(findDuration(anim), 20000);
    return {
      type: "keyframes",
      ease: (t: number) => anim.next(durationMs * t).value / maxVal,
      duration: fromMs(durationMs),
    };
  }

  const SPRING_PRECISION = 5;
  function getVelocity(easeFn: (t: number) => number, t: number, val: number) {
    const prevT = Math.max(t - SPRING_PRECISION, 0);
    return velocityPerMs(val - easeFn(prevT), t - prevT);
  }

  const DEFAULT_SPRING = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  };

  const BOUNCE_EPSILON = 0.001;

  function calcSpring({
    duration = DEFAULT_SPRING.duration,
    bounce = DEFAULT_SPRING.bounce,
    velocity = DEFAULT_SPRING.velocity,
    mass = DEFAULT_SPRING.mass,
  }) {
    let s: (m: number) => number, n: (m: number) => number;
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(
      DEFAULT_SPRING.minDamping,
      DEFAULT_SPRING.maxDamping,
      dampingRatio,
    );
    let durSec = clamp(
      DEFAULT_SPRING.minDuration,
      DEFAULT_SPRING.maxDuration,
      fromMs(duration),
    );

    if (dampingRatio < 1) {
      s = (m) => {
        const p = m * dampingRatio;
        const c = p * durSec;
        const l = p - velocity;
        const x = m * Math.sqrt(1 - dampingRatio * dampingRatio);
        const exp = Math.exp(-c);
        return BOUNCE_EPSILON - (l / x) * exp;
      };
      n = (m) => {
        const c = m * dampingRatio * durSec;
        const l = c * velocity + velocity;
        const x = dampingRatio * dampingRatio * m * m * durSec;
        const exp = Math.exp(-c);
        const y = Math.sqrt(1 - dampingRatio * dampingRatio) * m * m;
        return ((-s(m) + BOUNCE_EPSILON > 0 ? -1 : 1) * ((l - x) * exp)) / y;
      };
    } else {
      s = (m) => {
        const p = Math.exp(-m * durSec);
        const c = (m - velocity) * durSec + 1;
        return -BOUNCE_EPSILON + p * c;
      };
      n = (m) => {
        const p = Math.exp(-m * durSec);
        const c = (velocity - m) * (durSec * durSec);
        return p * c;
      };
    }

    const startFreq = 5 / durSec;
    const freq = solveFreq(s, n, startFreq);
    duration = toMs(durSec);
    if (isNaN(freq)) {
      return {
        stiffness: DEFAULT_SPRING.stiffness,
        damping: DEFAULT_SPRING.damping,
        duration,
      };
    } else {
      const stiffness = Math.pow(freq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration,
      };
    }
  }

  const SOLVE_ITERATIONS = 12;
  function solveFreq(
    s: (m: number) => number,
    n: (m: number) => number,
    t: number,
  ) {
    let res = t;
    for (let i = 1; i < SOLVE_ITERATIONS; i++) res = res - s(res) / n(res);
    return res;
  }

  const SPRING_KEYS_DURATION = ["duration", "bounce"];
  const SPRING_KEYS_PHYSICS = ["stiffness", "damping", "mass"];

  function hasKey(obj: any, keys: string[]) {
    return keys.some((k) => obj[k] !== undefined);
  }

  function resolveSpring(config: any) {
    let res = {
      velocity: DEFAULT_SPRING.velocity,
      stiffness: DEFAULT_SPRING.stiffness,
      damping: DEFAULT_SPRING.damping,
      mass: DEFAULT_SPRING.mass,
      isResolvedFromDuration: false,
      ...config,
    };
    if (
      !hasKey(config, SPRING_KEYS_PHYSICS) &&
      hasKey(config, SPRING_KEYS_DURATION)
    ) {
      res.velocity = 0;
      if (config.visualDuration) {
        const vd = config.visualDuration;
        const freq = (2 * Math.PI) / (vd * 1.2);
        const stiffness = freq * freq;
        const damping =
          2 * clamp(0.05, 1, 1 - (config.bounce || 0)) * Math.sqrt(stiffness);
        res = { ...res, mass: DEFAULT_SPRING.mass, stiffness, damping };
      } else {
        const resolved = calcSpring({ ...config, velocity: 0 });
        res = { ...res, ...resolved, mass: DEFAULT_SPRING.mass };
        res.isResolvedFromDuration = true;
      }
    }
    return res;
  }

  // Shim for sinh/cosh if not exists
  const math = Math as any;
  if (!math.framer_sinh) {
    math.framer_sinh = (x: number) => (Math.exp(x) - Math.exp(-x)) / 2;
    math.framer_cosh = (x: number) => (Math.exp(x) + Math.exp(-x)) / 2;
  }

  function createSpring(
    config: any = DEFAULT_SPRING.visualDuration,
    bounce = DEFAULT_SPRING.bounce,
  ) {
    const opts =
      typeof config !== "object"
        ? { visualDuration: config, keyframes: [0, 1], bounce }
        : config;
    let { restSpeed, restDelta } = opts;
    const start = opts.keyframes[0];
    const end = opts.keyframes[opts.keyframes.length - 1];
    const state = { done: false, value: start };
    const {
      stiffness,
      damping,
      mass,
      duration,
      velocity,
      isResolvedFromDuration,
    } = resolveSpring({
      ...opts,
      velocity: -fromMs(opts.velocity || 0),
    });
    const initVelocity = velocity || 0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const distance = end - start;
    const angularFreq = fromMs(Math.sqrt(stiffness / mass));
    const useGranular = Math.abs(distance) < 5;

    restSpeed ||= useGranular
      ? DEFAULT_SPRING.restSpeed.granular
      : DEFAULT_SPRING.restSpeed.default;
    restDelta ||= useGranular
      ? DEFAULT_SPRING.restDelta.granular
      : DEFAULT_SPRING.restDelta.default;

    let resolveValue: (t: number) => number;
    if (dampingRatio < 1) {
      const freq = angularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
      resolveValue = (t) => {
        const envelope = Math.exp(-dampingRatio * angularFreq * t);
        return (
          end -
          envelope *
            (((initVelocity + dampingRatio * angularFreq * distance) / freq) *
              Math.sin(freq * t) +
              distance * Math.cos(freq * t))
        );
      };
    } else if (dampingRatio === 1) {
      resolveValue = (t) =>
        end -
        Math.exp(-angularFreq * t) *
          (distance + (initVelocity + angularFreq * distance) * t);
    } else {
      const freq = angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveValue = (t) => {
        const envelope = Math.exp(-dampingRatio * angularFreq * t);
        const freqT = Math.min(freq * t, 300);
        return (
          end -
          (envelope *
            ((initVelocity + dampingRatio * angularFreq * distance) *
              math.framer_sinh(freqT) +
              freq * distance * math.framer_cosh(freqT))) /
            freq
        );
      };
    }

    const spring: any = {
      calculatedDuration: (isResolvedFromDuration && duration) || null,
      next: (t: number) => {
        const val = resolveValue(t);
        if (isResolvedFromDuration) state.done = t >= duration;
        else {
          const vel =
            t === 0
              ? initVelocity
              : dampingRatio < 1
                ? t === 0
                  ? toMs(initVelocity)
                  : getVelocity(resolveValue, t, val)
                : 0;
          const isAtRest = Math.abs(vel) <= restSpeed;
          const isAtTarget = Math.abs(end - val) <= restDelta;
          state.done = isAtRest && isAtTarget;
        }
        state.value = state.done ? end : val;
        return state;
      },
      toString: () => {
        const dur = Math.min(findDuration(spring), 20000);
        const easing = generateLinearEasing(
          (t) => spring.next(dur * t).value,
          dur,
          30,
        );
        return dur + "ms " + easing;
      },
      toTransition: () => {},
    };
    return spring;
  }

  createSpring.applyToOptions = (config: any) => {
    const ease = keyframesToEase(config, 100, createSpring);
    config.ease = ease.ease;
    config.duration = toMs(ease.duration);
    config.type = "keyframes";
    return config;
  };

  const TRANSFORM_PROPS = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ];
  const TRANSFORM_SET = new Set(TRANSFORM_PROPS);

  const supportsLinearEasing = memoize(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return false;
    }
    return true;
  });

  const cubicBezier = ([e, r, t, o]: number[]) =>
    `cubic-bezier(${e}, ${r}, ${t}, ${o})`;
  const EASE_MAP: Record<string, any> = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezier([0, 0.65, 0.55, 1]),
    circOut: cubicBezier([0.55, 0, 1, 0.45]),
    backIn: cubicBezier([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezier([0.33, 1.53, 0.69, 0.99]),
  };

  function getEasing(ease: any, duration: number): any {
    if (!ease) return undefined;
    if (typeof ease === "function")
      return supportsLinearEasing()
        ? generateLinearEasing(ease, duration)
        : "ease-out";
    if (isKeyframes(ease)) return cubicBezier(ease as any);
    if (Array.isArray(ease))
      return ease.map((e) => getEasing(e, duration) || EASE_MAP.easeOut);
    return EASE_MAP[ease as string];
  }

  function animate(
    el: HTMLElement,
    property: string,
    keyframes: any,
    {
      delay = 0,
      duration = 300,
      repeat = 0,
      repeatType = "loop",
      ease = "easeOut",
      times,
    }: any = {},
    pseudo?: string,
  ) {
    const props = { [property]: keyframes } as any;
    if (times) props.offset = times;
    const easing = getEasing(ease, duration);
    if (Array.isArray(easing)) props.easing = easing;

    const options: any = {
      delay,
      duration,
      easing: Array.isArray(easing) ? "linear" : easing,
      fill: "both",
      iterations: repeat + 1,
      direction: repeatType === "reverse" ? "alternate" : "normal",
    };
    if (pseudo) options.pseudoElement = pseudo;

    return el.animate(props, options);
  }

  const APPEAR_ID = "framerAppearId";

  const animationStore = new Map();
  const completionStore = new Map();

  const getPropKey = (id: string, prop: string) => {
    const p = TRANSFORM_SET.has(prop) ? "transform" : prop;
    return `${id}: ${p}`;
  };

  function handoffAnimation(id: string, prop: string, el: HTMLElement) {
    const key = getPropKey(id, prop);
    const stored = animationStore.get(key);
    if (!stored) return null;
    const { animation, startTime } = stored;
    const finish = () => {
      (window as any).MotionCancelOptimisedAnimation?.(id, prop, el);
    };
    animation.onfinish = finish;
    if (startTime === null || (window as any).MotionHandoffIsComplete?.(id)) {
      finish();
      return null;
    }
    return startTime;
  }

  let startTimeGlobal: number | undefined;
  let rootAnimation: any;
  const pendingAnimations = new Set<any>();

  function triggerPending() {
    pendingAnimations.forEach((a) => {
      a.animation.play();
      a.animation.startTime = a.startTime;
    });
    pendingAnimations.clear();
  }

  function startOptimizedAppearAnimation(
    el: HTMLElement,
    prop: string,
    keyframes: any,
    options: any,
    onStart?: (a: any) => void,
  ) {
    if ((window as any).MotionIsMounted) return;
    const id = el.dataset[APPEAR_ID];
    if (!id) return;
    (window as any).MotionHandoffAnimation = handoffAnimation;
    const key = getPropKey(id, prop);

    if (!rootAnimation) {
      rootAnimation = el.animate(
        { [prop]: [keyframes[0], keyframes[0]] },
        { duration: 10000, easing: "linear" },
      );
      animationStore.set(key, { animation: rootAnimation, startTime: null });
      (window as any).MotionHandoffAnimation = handoffAnimation;
      (window as any).MotionHasOptimisedAnimation = (
        aid: string,
        pname: string,
      ) => {
        if (!aid) return false;
        if (!pname) return completionStore.has(aid);
        return !!animationStore.get(getPropKey(aid, pname));
      };
      (window as any).MotionHandoffMarkAsComplete = (aid: string) => {
        if (completionStore.has(aid)) completionStore.set(aid, true);
      };
      (window as any).MotionHandoffIsComplete = (aid: string) =>
        completionStore.get(aid) === true;
      (window as any).MotionCancelOptimisedAnimation = (
        aid: string,
        pname: string,
        p: any,
        c: any,
      ) => {
        const k = getPropKey(aid, pname);
        const s = animationStore.get(k);
        if (s) {
          if (p && c === undefined) {
            p.postRender(() => p.postRender(() => s.animation.cancel()));
          } else {
            s.animation.cancel();
          }
          if (p && c) {
            pendingAnimations.add(s);
            p.render(triggerPending);
          } else {
            animationStore.delete(k);
            if (!animationStore.size)
              (window as any).MotionCancelOptimisedAnimation = undefined;
          }
        }
      };
    }

    const run = () => {
      rootAnimation.cancel();
      const anim = animate(el, prop, keyframes, options);
      if (startTimeGlobal === undefined) startTimeGlobal = performance.now();
      anim.startTime = startTimeGlobal;
      animationStore.set(key, { animation: anim, startTime: startTimeGlobal });
      onStart?.(anim);
    };

    completionStore.set(id, false);
    if (rootAnimation.ready) rootAnimation.ready.then(run).catch(identity);
    else run();
  }

  const TRANSFORM_ALIASES: Record<string, string> = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  };
  const TRANSFORM_UNITS: Record<string, string> = {
    translateX: "px",
    translateY: "px",
    translateZ: "px",
    x: "px",
    y: "px",
    z: "px",
    perspective: "px",
    transformPerspective: "px",
    rotate: "deg",
    rotateX: "deg",
    rotateY: "deg",
  };

  function withUnit(prop: string, val: any) {
    const unit = TRANSFORM_UNITS[prop];
    return !unit || (typeof val === "string" && val.endsWith(unit))
      ? val
      : `${val}${unit}`;
  }

  function isTransform(prop: string) {
    return TRANSFORM_SET.has(prop);
  }
  const sortTransform = (a: string, b: string) =>
    TRANSFORM_PROPS.indexOf(a) - TRANSFORM_PROPS.indexOf(b);

  function buildTransform({ transform, transformKeys }: any, template?: any) {
    let res = "";
    let isIdentity = true;
    const final: any = {};
    transformKeys.sort(sortTransform);
    for (const k of transformKeys) {
      const val = transform[k];
      let atDefault = true;
      if (typeof val === "number")
        atDefault = val === (k.startsWith("scale") ? 1 : 0);
      else atDefault = parseFloat(val) === 0;
      if (!atDefault) {
        isIdentity = false;
        res += `${TRANSFORM_ALIASES[k] || k}(${transform[k]}) `;
      }
      if (template) final[k] = transform[k];
    }
    res = res.trim();
    if (template) res = template(final, res);
    else if (isIdentity) res = "none";
    return res;
  }

  function getCombinedKeys(a: any, b: any) {
    const set = new Set(Object.keys(a));
    for (const k in b) set.add(k);
    return Array.from(set);
  }

  function padKeyframes(arr: any[], length: number) {
    const diff = length - arr.length;
    if (diff <= 0) return arr;
    return arr.concat(new Array(diff).fill(arr[arr.length - 1]));
  }

  const DEFAULT_PROPS: any = {
    opacity: 1,
    scale: 1,
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
  };

  const Me = new Map();
  const Se = 10;
  function He(e: any, r: any, t: any) {
    const easeConfig = ve(t)
      ? `${e}-${r}-${t.duration}-${t.bounce}`
      : `${e}-${r}-${t.damping}-${t.stiffness}-${t.mass}`;
    let s = Me.get(easeConfig);
    if (s) return s;
    const n = [e, r];
    const i = createSpring({ ...Ye(t), keyframes: n });
    let f = { done: false, value: n[0] };
    const a = [];
    let m = 0;
    while (!f.done && m < B(10)) {
      f = i.next(m);
      a.push(f.value);
      m += Se;
    }
    const duration = m - Se;
    s = { keyframes: a, duration, ease: "linear" };
    Me.set(easeConfig, s);
    return s;
  }

  function ve(e: any) {
    return !("stiffness" in e || "damping" in e || "mass" in e);
  }

  function Ye(e: any) {
    return ve(e) ? { ...e, duration: B(e.duration) } : e;
  }

  function buildTransformKeyframes(data: any, template: any) {
    const frames: string[] = [];
    const firstVal = Object.values(data)[0];
    const length = firstVal ? (firstVal as any[]).length : 0;
    if (!length) return;
    const keys = Object.keys(data);
    for (let i = 0; i < length; i++) {
      const t: any = {};
      for (const [k, v] of Object.entries(data)) {
        const val = (v as any[])[i];
        if (val !== undefined) t[k] = withUnit(k, val);
      }
      frames.push(
        buildTransform({ transform: t, transformKeys: keys }, template),
      );
    }
    return frames;
  }

  const springEffect = (
    initial: any,
    animate: any,
    transition: any,
    template: any,
    isFinished: boolean,
  ) => {
    const results: any = {};
    let maxDur = 0,
      maxLength = 0;
    const keys = getCombinedKeys(initial, animate);

    for (const k of keys) {
      const start = initial[k] ?? DEFAULT_PROPS[k];
      const end = animate[k] ?? DEFAULT_PROPS[k];
      if (
        start === undefined ||
        end === undefined ||
        (k !== "transformPerspective" &&
          start === end &&
          start === DEFAULT_PROPS[k])
      )
        continue;

      if (k === "transformPerspective") {
        results[k] = [start, end];
        continue;
      }

      const res = He(start, end, transition);
      if (res.duration > maxDur) {
        maxDur = res.duration;
        maxLength = res.keyframes.length;
      }
      results[k] = res.keyframes;
    }

    if (!maxLength) return results;

    const common = {
      ease: "linear",
      duration: maxDur,
      delay: transition.delay,
    };
    const springOpts = isFinished ? { duration: 0.001 } : common;
    const transforms: any = {};
    const final: any = {};

    for (const [k, v] of Object.entries(results)) {
      if (isTransform(k)) transforms[k] = padKeyframes(v as any[], maxLength);
      else
        final[k] = {
          keyframes: padKeyframes(v as any[], maxLength),
          options: k === "opacity" ? common : springOpts,
        };
    }

    const transformKeyframes = buildTransformKeyframes(transforms, template);
    if (transformKeyframes)
      final.transform = { keyframes: transformKeyframes, options: springOpts };

    return final;
  };

  const tweenEffect = (
    initial: any,
    animate: any,
    transition: any,
    template: any,
    isFinished: boolean,
  ) => {
    const opts = { ...transition, duration: toMs(transition.duration) };
    const final: any = {};
    const tweenOpts = isFinished ? { duration: 0.001 } : opts;
    const transforms: any = {};

    for (const k of getCombinedKeys(initial, animate)) {
      const start = initial[k] ?? DEFAULT_PROPS[k];
      const end = animate[k] ?? DEFAULT_PROPS[k];
      if (
        start === undefined ||
        end === undefined ||
        (k !== "transformPerspective" && start === end)
      )
        continue;

      if (isTransform(k)) transforms[k] = [start, end];
      else
        final[k] = {
          keyframes: [start, end],
          options: k === "opacity" ? opts : tweenOpts,
        };
    }

    const transformKeyframes = buildTransformKeyframes(transforms, template);
    if (transformKeyframes)
      final.transform = { keyframes: transformKeyframes, options: tweenOpts };

    return final;
  };

  function animateEffect(
    initial: any,
    animate: any,
    transition: any,
    template: any,
    isFinished: boolean,
  ) {
    if (transition.delay) transition.delay = toMs(transition.delay);
    return transition.type === "spring"
      ? springEffect(initial, animate, transition, template, isFinished)
      : tweenEffect(initial, animate, transition, template, isFinished);
  }

  function B(e: number) {
    return e * 1000;
  }

  function animateAppearEffects(
    config: any,
    apply: (selector: string, keyframes: any, options: any) => void,
    dataAttr: string,
    templatePlaceholder: string,
    isFinished: boolean,
    activeHash?: string,
  ) {
    for (const [id, variants] of Object.entries(config)) {
      const variant: any = activeHash
        ? (variants as any)[activeHash]
        : undefined;
      if (variant === null || (!variant && (variants as any).default === null))
        continue;
      const data = variant ?? (variants as any).default;
      if (!data) continue;

      const { initial, animate: animProps, transformTemplate } = data;
      if (!initial || !animProps) continue;

      const { transition, ...props } = animProps;
      const effects = animateEffect(
        initial,
        props,
        transition,
        generateTemplateFunc(transformTemplate, templatePlaceholder),
        isFinished,
      );
      if (!effects) continue;

      const keyframes: any = {};
      const options: any = {};
      for (const [k, v] of Object.entries(effects)) {
        keyframes[k] = (v as any).keyframes;
        options[k] = (v as any).options;
      }
      const selectorPrefix = activeHash ? `:not(.hidden-${activeHash}) ` : "";
      apply(`${selectorPrefix}[${dataAttr}="${id}"]`, keyframes, options);
    }
  }

  function generateTemplateFunc(template: string, placeholder: string) {
    if (!template || !placeholder) return undefined;
    return (_props: any, base: string) => template.replace(placeholder, base);
  }

  function getActiveVariantHash(breakpoints: any[]) {
    return breakpoints?.find((b) =>
      b.mediaQuery ? window.matchMedia(b.mediaQuery).matches : false,
    )?.hash;
  }

  return {
    animateAppearEffects,
    getActiveVariantHash,
    startOptimizedAppearAnimation,
  };
})();

// --- Navigation & Link Utilities ---

export function initNestedLinks() {
  function navigate(href: string, rel: string, target: string) {
    const a = document.createElement("a");
    a.href = href;
    a.target = target;
    a.rel = rel;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function handleClick(this: HTMLElement, e: MouseEvent) {
    if (this.dataset.hydrated) {
      this.removeEventListener("click", handleClick);
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const href = this.getAttribute("href");
    if (!href) return;
    const isSpecialClick = /Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)
      ? e.metaKey
      : e.ctrlKey;
    if (isSpecialClick) return navigate(href, "", "_blank");
    navigate(
      href,
      this.getAttribute("rel") || "",
      this.getAttribute("target") || "",
    );
  }

  document.querySelectorAll("[data-nested-link]").forEach((el) => {
    if (el instanceof HTMLElement) {
      el.addEventListener("click", handleClick);
    }
  });
}

export function initParamPreservation() {
  const PARAM_KEY = "framer_variant";
  function updateUrl(search: string, href: string) {
    const hashIdx = href.indexOf("#");
    const urlBase = hashIdx === -1 ? href : href.substring(0, hashIdx);
    const hash = hashIdx === -1 ? "" : href.substring(hashIdx);
    const qIdx = urlBase.indexOf("?");
    const path = qIdx === -1 ? urlBase : urlBase.substring(0, qIdx);
    const query = qIdx === -1 ? "" : urlBase.substring(qIdx);
    const params = new URLSearchParams(query);
    const globalParams = new URLSearchParams(search);
    for (const [k, v] of globalParams) {
      if (!params.has(k) && k !== PARAM_KEY) params.append(k, v);
    }
    const finalQuery = params.toString();
    return finalQuery === "" ? path + hash : path + "?" + finalQuery + hash;
  }

  if (window.location.search && !navigator.webdriver) {
    const selector =
      'div#main a[href^="#"], div#main a[href^="/"], div#main a[href^="."], div#main a[data-framer-preserve-params]';
    document.querySelectorAll(selector).forEach((el) => {
      const href = el.getAttribute("href");
      if (href)
        el.setAttribute("href", updateUrl(window.location.search, href));
    });
  }
}
