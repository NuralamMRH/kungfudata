import { t as e } from "./rolldown-runtime.D1deASqF.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  S as ee,
  T as te,
  c,
  g as l,
  j as ne,
  k as re,
  l as u,
  o as d,
  w as f,
  y as ie,
  z as p,
} from "./react.DJ7UgqC4.mjs";
import {
  I as ae,
  N as m,
  R as oe,
  S as h,
  U as se,
  a as g,
  h as _,
  r as ce,
  t as v,
} from "./motion.D2KMUwms.mjs";
import {
  A as y,
  At as le,
  Ct as ue,
  D as b,
  Dt as x,
  Et as de,
  G as S,
  I as C,
  K as w,
  L as fe,
  M as pe,
  N as me,
  Ot as T,
  Q as E,
  T as D,
  Tt as O,
  U as k,
  _ as A,
  a as j,
  h as M,
  ht as he,
  k as N,
  mt as P,
  o as F,
  pt as I,
  s as L,
  ut as ge,
  vt as R,
  yt as z,
} from "./framer.BLOKjrOc.mjs";
import { n as _e, t as ve } from "./BvyOYDKED.DPX9IITB.mjs";
import {
  _ as ye,
  a as B,
  c as V,
  d as be,
  f as xe,
  g as Se,
  h as H,
  i as Ce,
  l as we,
  m as Te,
  n as Ee,
  o as De,
  p as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
  v as Ne,
} from "./Grain.CFBfvn0b.mjs";
import { i as Pe, r as Fe } from "./shared-lib.CFi5o8rJ.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./gd6AWaps9.Cl5NzHfB.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./oFAZmwcVJ.B4UofNI3.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./zgy6bak25.DLRokvtf.mjs";
import { i as Je, n as Ye, r as U, t as Xe } from "./QVvVvmpct.BpWsKYxp.mjs";
import { n as Ze, t as Qe } from "./q5ePSxRPK.Cgx9HqdK.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./fN1_sGlJp.BdGA3VX5.mjs";
import { i as rt, n as it, r as at, t as ot } from "./HLpRTFhim.BDD5ComK.mjs";
import { i as st, n as ct, r as lt, t as ut } from "./nCOD2Sdie.DJuT2m3E.mjs";
import {
  a as dt,
  c as ft,
  i as pt,
  n as mt,
  o as ht,
  r as gt,
  s as _t,
  t as vt,
} from "./LyKOtaXoC.BuJu181l.mjs";
import { i as yt, n as bt, r as xt, t as St } from "./wf_7zBsvo.Bzf-AdVb.mjs";
import { n as Ct, r as wt } from "./Tykwfmrh9.D9hrs9Ym.mjs";
var Tt = e(() => {
    De();
  }),
  Et = e(() => {
    (De(), Tt());
  }),
  W,
  Dt = e(() => {
    ((W = {}),
      Object.defineProperty(W, `__esModule`, { value: !0 }),
      (W.warning = function () {}),
      (W.invariant = function () {}),
      W.__esModule,
      W.warning,
      W.invariant);
  }),
  Ot = e(() => {});
function kt(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var At = e(() => {}),
  jt = e(() => {
    De();
  });
function Mt(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Nt(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Mt(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              be(n) ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : tn[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Pt(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Ft({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = G.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Pt(e, n);
        },
      });
    });
}
function It(e) {
  e.forEach(Ft);
}
function Lt() {
  typeof ResizeObserver < `u` && (K = new ResizeObserver(It));
}
function Rt(e, t) {
  K || Lt();
  let n = Mt(e);
  return (
    n.forEach((e) => {
      let n = G.get(e);
      (n || ((n = new Set()), G.set(e, n)), n.add(t), K?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = G.get(e);
        (n?.delete(t), (n != null && n.size) || K == null || K.unobserve(e));
      });
    }
  );
}
function zt() {
  ((J = () => {
    let e = { width: p.innerWidth, height: p.innerHeight },
      t = { target: p, size: e, contentSize: e };
    q.forEach((e) => e(t));
  }),
    p.addEventListener(`resize`, J));
}
function Bt(e) {
  return (
    q.add(e),
    J || zt(),
    () => {
      (q.delete(e), !q.size && J && (J = void 0));
    }
  );
}
function Vt(e, t) {
  return be(e) ? Bt(e) : Rt(e, t);
}
function Ht(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function Ut(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  G,
  K,
  q,
  J,
  nn,
  rn,
  an,
  on = e(() => {
    for (let e in (r(),
    Et(),
    Dt(),
    Ot(),
    De(),
    At(),
    jt(),
    (Wt = [``, `X`, `Y`, `Z`]),
    (Gt = [`translate`, `scale`, `rotate`, `skew`]),
    (Kt = {
      syntax: `<angle>`,
      initialValue: `0deg`,
      toDefaultUnit: (e) => e + `deg`,
    }),
    (qt = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: Kt,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: H },
      skew: Kt,
    }),
    (Jt = new Map()),
    (Yt = (e) => `--motion-${e}`),
    (Xt = [`x`, `y`, `z`]),
    Gt.forEach((e) => {
      Wt.forEach((t) => {
        (Xt.push(e + t), Jt.set(Yt(e + t), qt[e]));
      });
    }),
    new Set(Xt),
    (Zt = (e, t) => document.createElement(`div`).animate(e, t)),
    (Qt = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          Zt({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!Zt({ opacity: [0, 1] }, { duration: 0.001 }).finished,
      linearEasing: () => {
        try {
          Zt({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      },
    }),
    ($t = {}),
    (en = {}),
    Qt))
      en[e] = () => ($t[e] === void 0 && ($t[e] = Qt[e]()), $t[e]);
    ((tn = { any: 0, all: 1 }),
      (G = new WeakMap()),
      (q = new Set()),
      (nn = {
        isActive: (e) => !!e.inView,
        subscribe: (
          e,
          { enable: t, disable: n },
          { inViewOptions: r = {} },
        ) => {
          let { once: i } = r;
          return Nt(
            e,
            (r) => {
              if ((t(), Ut(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), Ut(e, `viewleave`, t));
                };
            },
            kt(r, [`once`]),
          );
        },
      }),
      (rn = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Ht(e, t, r));
      }),
      (an = {
        inView: nn,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = rn(e, `hoverstart`, t),
              i = rn(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(),
                  Ht(e, `pressend`, t),
                  p.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(),
                  Ht(e, `pressstart`, n),
                  p.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i),
                  p.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(an)]);
  });
function sn(e) {
  let {
      slots: t = [],
      gap: r,
      padding: s,
      paddingPerSide: l,
      paddingTop: d,
      paddingRight: f,
      paddingBottom: ie,
      paddingLeft: p,
      speed: g,
      hoverFactor: v,
      direction: y,
      alignment: le,
      sizingOptions: ue,
      fadeOptions: x,
      style: de,
    } = e,
    {
      fadeContent: S,
      overflow: C,
      fadeWidth: w,
      fadeInset: fe,
      fadeAlpha: pe,
    } = x,
    { widthType: me, heightType: T } = ue,
    E = l ? `${d}px ${f}px ${ie}px ${p}px` : `${s}px`,
    D = b.current(),
    O = D === b.canvas || D === b.export,
    k = t.filter(Boolean),
    A = te.count(k),
    j = A > 0;
  y === !0 && (y = `left`);
  let M = y === `left` || y === `right`,
    he = ae(0),
    N = ln[y];
  se(he, N);
  let P = o(null),
    F = ne(() => [{ current: null }, { current: null }], []),
    [I, L] = n({ parent: null, children: null }),
    ge = null,
    R = [],
    z = 0,
    _e = 0;
  (O && ((z = A ? Math.floor(10 / A) : 0), (_e = 1)),
    !O &&
      j &&
      I.parent &&
      ((z = Math.round((I.parent / I.children) * 2) + 1),
      (z = Math.min(z, cn)),
      (_e = 1)));
  let ve = i(() => {
      if (j && P.current) {
        let e = M ? P.current.offsetWidth : P.current.offsetHeight,
          t = F[0].current
            ? M
              ? F[0].current.offsetLeft
              : F[0].current.offsetTop
            : 0;
        L({
          parent: e,
          children:
            (F[1].current
              ? M
                ? F[1].current.offsetLeft + F[1].current.offsetWidth
                : F[1].current.offsetTop + F[1].current.offsetHeight
              : 0) -
            t +
            r,
        });
      }
    }, []),
    ye = O ? { contentVisibility: `auto` } : {};
  if (j) {
    if (!O) {
      let e = o(!0);
      ee(
        () => (
          _.read(ve, !1, !0),
          Vt(P.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && _.read(ve, !1, !0),
              (e.current = !1));
          })
        ),
        [],
      );
    }
    ge = te.map(k, (e, t) => {
      let n;
      (t === 0 && (n = F[0]), t === k.length - 1 && (n = F[1]));
      let r = {
        width: me ? e.props?.width : `100%`,
        height: T ? e.props?.height : `100%`,
      };
      return c(ce, {
        inherit: `id`,
        children: c(`li`, {
          ref: n,
          style: r,
          children: re(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...ye },
              layoutId: e.props.layoutId
                ? e.props.layoutId + `-original-` + t
                : void 0,
            },
            e.props?.children,
          ),
        }),
      });
    });
  }
  let B = O ? !0 : m(P);
  if (!O)
    for (let e = 0; e < z; e++)
      R = R.concat(
        te.map(k, (t, n) =>
          c(
            ce,
            {
              inherit: `id`,
              children: c(
                `li`,
                {
                  style: {
                    width: me ? t.props?.width : `100%`,
                    height: T ? t.props?.height : `100%`,
                    willChange: B ? `transform` : void 0,
                  },
                  "aria-hidden": !0,
                  children: re(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: me ? t.props?.width : `100%`,
                        height: T ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...ye,
                      },
                      layoutId: t.props.layoutId
                        ? t.props.layoutId + `-dupe-` + e
                        : void 0,
                    },
                    t.props?.children,
                  ),
                },
                e + `li` + n,
              ),
            },
            e + `lg` + n,
          ),
        ),
      );
  let V = I.children + I.children * Math.round(I.parent / I.children);
  (o(null), o(null), o(0));
  let be = o(!1),
    xe = oe(),
    Se = o(null),
    H = o(null);
  if (!O) {
    a(() => {
      if (!(xe || !V || !g))
        return (
          (H.current = Se.current.animate(
            { transform: [N(0), N(V)] },
            {
              duration: (Math.abs(V) / g) * 1e3,
              iterations: 1 / 0,
              easing: `linear`,
            },
          )),
          () => H.current.cancel()
        );
    }, [v, V, g]);
    let e = i(() => {
      if (!H.current) return;
      let e = document.hidden;
      B && !e && H.current.playState === `paused`
        ? H.current.play()
        : (!B || e) && H.current.playState === `running` && H.current.pause();
    }, [B]);
    (a(() => {
      e();
    }, [B, v, V, g]),
      a(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e],
      ));
  }
  let Ce = M ? `to right` : `to bottom`,
    we = w / 2,
    Te = 100 - w / 2,
    Ee = `linear-gradient(${Ce}, rgba(0, 0, 0, ${pe}) ${hn(fe, 0, we)}%, rgba(0, 0, 0, 1) ${we}%, rgba(0, 0, 0, 1) ${Te}%, rgba(0, 0, 0, ${pe}) ${100 - fe}%)`;
  return j
    ? c(`section`, {
        style: {
          ...un,
          opacity: _e,
          WebkitMaskImage: S ? Ee : void 0,
          maskImage: S ? Ee : void 0,
          overflow: C ? `visible` : `hidden`,
          padding: E,
        },
        ref: P,
        children: u(h.ul, {
          ref: Se,
          style: {
            ...un,
            gap: r,
            top: y === `bottom` && gn(V) ? -V : void 0,
            left: y === `right` && gn(V) ? -V : void 0,
            placeItems: le,
            position: `relative`,
            flexDirection: M ? `row` : `column`,
            ...de,
            willChange: O || !B ? `auto` : `transform`,
            transform: N(0),
          },
          onMouseEnter: () => {
            ((be.current = !0), H.current && (H.current.playbackRate = v));
          },
          onMouseLeave: () => {
            ((be.current = !1), H.current && (H.current.playbackRate = 1));
          },
          children: [ge, R],
        }),
      })
    : u(`section`, {
        style: dn,
        children: [
          c(`div`, { style: fn, children: `✨` }),
          c(`p`, { style: pn, children: `Connect to Content` }),
          c(`p`, {
            style: mn,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n = e(() => {
    (d(),
      f(),
      E(),
      v(),
      on(),
      (cn = 100),
      (ln = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (sn.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: {
          fadeContent: !0,
          overflow: !1,
          fadeWidth: 25,
          fadeAlpha: 0,
          fadeInset: 0,
        },
        direction: !0,
      }),
      me(sn, {
        slots: {
          type: L.Array,
          title: `Children`,
          control: { type: L.ComponentInstance },
        },
        speed: {
          type: L.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: L.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: L.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: L.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: L.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: L.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: L.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: L.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: L.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: L.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: L.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: L.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: L.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: L.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: L.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (un = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (dn = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (fn = { fontSize: 32, marginBottom: 10 }),
      (pn = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`,
      }),
      (mn = {
        margin: 0,
        opacity: 0.7,
        maxWidth: 150,
        lineHeight: 1.5,
        textAlign: `center`,
      }),
      (hn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (gn = (e) => typeof e == `number` && !isNaN(e)));
  }),
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Y,
  Tn,
  En = e(() => {
    (d(),
      E(),
      v(),
      f(),
      (vn = `framer-oFNEt`),
      (yn = { sOcfW8Afc: `framer-v-1ku8kgp` }),
      (bn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xn = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = ne(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(g.Provider, { value: a, children: n });
      }),
      (Sn = h.create(s)),
      (Cn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (wn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = x(
        l(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ie(),
            { activeLocale: a, setLocale: s } = R();
          ge();
          let {
              style: ee,
              className: te,
              layoutId: l,
              variant: ne,
              ...re
            } = Cn(e),
            {
              baseVariant: u,
              classNames: d,
              clearLoadingGesture: f,
              gestureHandlers: p,
              gestureVariant: ae,
              isLoading: m,
              setGestureState: oe,
              setVariant: se,
              variants: g,
            } = de({
              defaultVariant: `sOcfW8Afc`,
              ref: r,
              variant: ne,
              variantClassNames: yn,
            }),
            _ = wn(e, g),
            v = C(vn);
          return c(ce, {
            id: l ?? i,
            children: c(Sn, {
              animate: g,
              initial: !1,
              children: c(xn, {
                value: bn,
                children: c(h.div, {
                  ...re,
                  ...p,
                  className: C(v, `framer-1ku8kgp`, te, d),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: _,
                  layoutId: `sOcfW8Afc`,
                  ref: r,
                  style: { ...ee },
                  children: c(y, {
                    className: `framer-1pptfs4`,
                    "data-framer-name": `Star Rating`,
                    layout: `position`,
                    layoutDependency: _,
                    layoutId: `teusMbag_`,
                    opacity: 1,
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 12"><path d="M 5.087 2.049 C 5.439 1.259 6.561 1.259 6.913 2.049 L 7.423 3.192 C 7.568 3.518 7.876 3.742 8.231 3.779 L 9.475 3.91 C 10.336 4.001 10.683 5.068 10.04 5.648 L 9.11 6.485 C 8.845 6.724 8.728 7.086 8.802 7.436 L 9.061 8.66 C 9.241 9.506 8.333 10.166 7.583 9.733 L 6.5 9.108 C 6.19 8.93 5.81 8.93 5.5 9.108 L 4.417 9.733 C 3.667 10.166 2.759 9.506 2.939 8.66 L 3.198 7.436 C 3.272 7.086 3.155 6.724 2.89 6.485 L 1.96 5.648 C 1.317 5.068 1.664 4.001 2.525 3.91 L 3.769 3.779 C 4.124 3.742 4.432 3.518 4.577 3.192 Z" fill="rgb(251,152,38)"></path><path d="M 16.087 2.049 C 16.439 1.259 17.561 1.259 17.913 2.049 L 18.423 3.192 C 18.568 3.518 18.876 3.742 19.231 3.779 L 20.475 3.91 C 21.336 4.001 21.683 5.068 21.04 5.648 L 20.11 6.485 C 19.845 6.724 19.728 7.086 19.802 7.436 L 20.061 8.66 C 20.241 9.506 19.333 10.166 18.583 9.733 L 17.5 9.108 C 17.19 8.93 16.81 8.93 16.5 9.108 L 15.417 9.733 C 14.667 10.166 13.759 9.506 13.939 8.66 L 14.198 7.436 C 14.272 7.086 14.155 6.724 13.89 6.485 L 12.96 5.648 C 12.317 5.068 12.664 4.001 13.525 3.91 L 14.769 3.779 C 15.124 3.742 15.432 3.518 15.577 3.192 Z" fill="rgb(251,152,38)"></path><path d="M 27.087 2.049 C 27.439 1.259 28.561 1.259 28.913 2.049 L 29.423 3.192 C 29.568 3.518 29.876 3.742 30.231 3.779 L 31.475 3.91 C 32.336 4.001 32.683 5.068 32.04 5.648 L 31.11 6.485 C 30.845 6.724 30.728 7.086 30.802 7.436 L 31.061 8.66 C 31.241 9.506 30.333 10.166 29.583 9.733 L 28.5 9.108 C 28.19 8.93 27.81 8.93 27.5 9.108 L 26.417 9.733 C 25.667 10.166 24.759 9.506 24.939 8.66 L 25.198 7.436 C 25.272 7.086 25.155 6.724 24.89 6.485 L 23.96 5.648 C 23.317 5.068 23.664 4.001 24.525 3.91 L 25.769 3.779 C 26.124 3.742 26.432 3.518 26.577 3.192 Z" fill="rgb(251,152,38)"></path><path d="M 38.087 2.049 C 38.439 1.259 39.561 1.259 39.913 2.049 L 40.423 3.192 C 40.568 3.518 40.876 3.742 41.231 3.779 L 42.475 3.91 C 43.336 4.001 43.683 5.068 43.04 5.648 L 42.11 6.485 C 41.845 6.724 41.728 7.086 41.802 7.436 L 42.061 8.66 C 42.241 9.506 41.333 10.166 40.583 9.733 L 39.5 9.108 C 39.19 8.93 38.81 8.93 38.5 9.108 L 37.417 9.733 C 36.667 10.166 35.759 9.506 35.939 8.66 L 36.198 7.436 C 36.272 7.086 36.155 6.724 35.89 6.485 L 34.96 5.648 C 34.317 5.068 34.664 4.001 35.525 3.91 L 36.769 3.779 C 37.124 3.742 37.432 3.518 37.577 3.192 Z" fill="rgb(251,152,38)"></path><path d="M 49.087 2.049 C 49.439 1.259 50.561 1.259 50.913 2.049 L 51.423 3.192 C 51.568 3.518 51.876 3.742 52.231 3.779 L 53.475 3.91 C 54.336 4.001 54.683 5.068 54.04 5.648 L 53.11 6.485 C 52.845 6.724 52.728 7.086 52.802 7.436 L 53.061 8.66 C 53.241 9.506 52.333 10.166 51.583 9.733 L 50.5 9.108 C 50.19 8.93 49.81 8.93 49.5 9.108 L 48.417 9.733 C 47.667 10.166 46.759 9.506 46.939 8.66 L 47.198 7.436 C 47.272 7.086 47.155 6.724 46.89 6.485 L 45.96 5.648 C 45.317 5.068 45.664 4.001 46.525 3.91 L 47.769 3.779 C 48.124 3.742 48.432 3.518 48.577 3.192 Z" fill="rgb(251,152,38)"></path></svg>`,
                    svgContentId: 10693373749,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-oFNEt.framer-1vkcmat, .framer-oFNEt .framer-1vkcmat { display: block; }`,
          `.framer-oFNEt.framer-1ku8kgp { height: 12px; overflow: hidden; position: relative; width: 56px; }`,
          `.framer-oFNEt .framer-1pptfs4 { flex: none; height: 12px; left: calc(50.00000000000002% - 56px / 2); position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 56px; }`,
        ],
        `framer-oFNEt`,
      )),
      (Tn = Y),
      (Y.displayName = `Rating stars`),
      (Y.defaultProps = { height: 12, width: 56 }),
      pe(Y, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  Dn,
  On,
  kn,
  An = e(() => {
    (E(),
      fe.loadFonts([
        `Inter-Medium`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-MediumItalic`,
      ]),
      (Dn = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (On = [
        `.framer-ofTFr .framer-styles-preset-2s58fc:not(.rich-text-wrapper), .framer-ofTFr .framer-styles-preset-2s58fc.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #090909; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-ofTFr .framer-styles-preset-2s58fc:not(.rich-text-wrapper), .framer-ofTFr .framer-styles-preset-2s58fc.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #090909; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-ofTFr .framer-styles-preset-2s58fc:not(.rich-text-wrapper), .framer-ofTFr .framer-styles-preset-2s58fc.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #090909; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (kn = `framer-ofTFr`));
  }),
  jn,
  X,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Z,
  Zn,
  Q,
  Qn,
  $n,
  $,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr;
e(() => {
  (d(),
    E(),
    v(),
    f(),
    _n(),
    Ee(),
    Pe(),
    _e(),
    En(),
    Je(),
    Qe(),
    Ye(),
    $e(),
    Ie(),
    ft(),
    rt(),
    pt(),
    st(),
    Be(),
    An(),
    yt(),
    We(),
    Ct(),
    (jn = k(Xe)),
    (X = T(h.div)),
    (Mn = le(h.div)),
    (Nn = T(N)),
    (Pn = T(A)),
    (Fn = k(sn)),
    (In = k(Tn)),
    (Ln = k(ve)),
    (Rn = k(je)),
    (zn = k(U)),
    (Bn = T(F)),
    (Vn = k(Ze)),
    (Hn = k(Fe)),
    (Un = {
      HreCASfWI: `(max-width: 809.98px)`,
      P9BY2bKka: `(min-width: 810px) and (max-width: 1199.98px)`,
      V0hrGEjzR: `(min-width: 1200px)`,
    }),
    (Wn = `framer-kLrnJ`),
    (Gn = {
      HreCASfWI: `framer-v-29cvvh`,
      P9BY2bKka: `framer-v-18u01ma`,
      V0hrGEjzR: `framer-v-vi8wzu`,
    }),
    (Kn = (e, t, n) => (e && t ? `position` : n)),
    (qn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 27,
        delay: 0.8,
        mass: 0.3,
        stiffness: 121,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    (Jn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (Yn = {
      effect: {
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      repeat: !1,
      startDelay: 0,
      threshold: 0,
      tokenization: `word`,
      transition: {
        delay: 0.03,
        duration: 0.9,
        ease: [0.44, 0, 0.13, 0.96],
        type: `tween`,
      },
      trigger: `onInView`,
      type: `appear`,
    }),
    (Xn = {
      effect: {
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      },
      repeat: !1,
      startDelay: 0,
      threshold: 0,
      tokenization: `word`,
      transition: {
        delay: 0.02,
        duration: 0.9,
        ease: [0.44, 0, 0.13, 0.96],
        type: `tween`,
      },
      trigger: `onInView`,
      type: `appear`,
    }),
    (Z = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Zn = { bounce: 0.1, delay: 0.2, duration: 1.2, type: `spring` }),
    (Q = { bounce: 0.1, delay: 0.3, duration: 1.2, type: `spring` }),
    (Qn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 27,
        delay: 0.72,
        mass: 0.3,
        stiffness: 121,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    ($n = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 170,
    }),
    ($ = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (er = { bounce: 0.1, delay: 0.1, duration: 1.2, type: `spring` }),
    (tr = { bounce: 0.1, delay: 0.4, duration: 1.2, type: `spring` }),
    (nr = ({ value: e }) =>
      he()
        ? null
        : c(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (rr = { Desktop: `V0hrGEjzR`, Phone: `HreCASfWI`, Tablet: `P9BY2bKka` }),
    (ir = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: rr[r.variant] ?? r.variant ?? `V0hrGEjzR`,
    })),
    (ar = x(
      l(function (e, n) {
        let r = o(null),
          i = n ?? r,
          a = ie(),
          { activeLocale: ee, setLocale: te } = R(),
          l = ge(),
          { style: re, className: d, layoutId: f, variant: p, ...ae } = ir(e);
        z(ne(() => wt({}, ee), [ee]));
        let [m, oe] = P(p, Un, !1),
          se = C(Wn, dt, ut, nt, ot, qe, ze, vt, St, Ue, kn),
          _ = t(M)?.isLayoutTemplate,
          v = Kn(_, !!t(g)?.transition?.layout),
          le = ue(`cdVK2NtsZ`),
          b = o(null),
          x = ue(`xIwgNt6sV`),
          de = O();
        return (
          I({}),
          c(M.Provider, {
            value: { primaryVariantId: `V0hrGEjzR`, variantClassNames: Gn },
            children: u(ce, {
              id: f ?? a,
              children: [
                c(nr, {
                  value: `html body { background: rgb(255, 255, 255); }`,
                }),
                u(h.div, {
                  ...ae,
                  className: C(se, `framer-vi8wzu`, d),
                  ref: i,
                  style: { ...re },
                  children: [
                    u(h.main, {
                      className: `framer-r64ktw`,
                      "data-framer-name": `Main`,
                      layout: v,
                      children: [
                        u(`section`, {
                          className: `framer-1fvpdiu`,
                          "data-framer-name": `Hero`,
                          id: le,
                          ref: b,
                          children: [
                            c(D, {
                              breakpoint: m,
                              overrides: {
                                HreCASfWI: {
                                  __framer__styleTransformEffectEnabled: void 0,
                                },
                              },
                              children: c(X, {
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: b,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: -50,
                                      rotateY: 0,
                                      scale: 0.95,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 180,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScrollTarget`,
                                __framer__transformViewportThreshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1oiefzv`,
                                "data-framer-name": `First screen`,
                                children: u(`div`, {
                                  className: `framer-lqn7yg`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-1ql8g35`,
                                      "data-framer-name": `Content`,
                                      children: c(`div`, {
                                        className: `framer-1jcyo7z`,
                                        "data-framer-name": `Top`,
                                        children: u(`div`, {
                                          className: `framer-aaitt3`,
                                          "data-framer-name": `Company`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-1sh00pt`,
                                              "data-framer-name": `Title`,
                                              children: c(`div`, {
                                                className: `framer-1wmng9p`,
                                                "data-framer-name": `Container`,
                                                children: c(D, {
                                                  breakpoint: m,
                                                  overrides: {
                                                    HreCASfWI: {
                                                      children: c(s, {
                                                        children: c(`h2`, {
                                                          style: {
                                                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                            "--framer-font-size": `48px`,
                                                            "--framer-font-weight": `600`,
                                                            "--framer-letter-spacing": `-0.06em`,
                                                            "--framer-line-height": `92%`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                          },
                                                          children: `The most misunderstood market in the world – also one of the most profitable.`,
                                                        }),
                                                      }),
                                                      fonts: [`Inter-SemiBold`],
                                                    },
                                                  },
                                                  children: c(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(s, {
                                                      children: c(`h2`, {
                                                        className: `framer-styles-preset-1yvd34u`,
                                                        "data-styles-preset": `GKtOymhXV`,
                                                        style: {
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                        },
                                                        children: `The most misunderstood market in the world – also one of the most profitable.`,
                                                      }),
                                                    }),
                                                    className: `framer-1ybzg1h`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-iut6wr`,
                                              "data-framer-name": `ArrowDown`,
                                              children: [
                                                c(D, {
                                                  breakpoint: m,
                                                  overrides: {
                                                    HreCASfWI: {
                                                      y:
                                                        (l?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        54 +
                                                        748.84 +
                                                        0 +
                                                        0 +
                                                        76.16 +
                                                        0 +
                                                        0,
                                                    },
                                                  },
                                                  children: c(j, {
                                                    height: 53,
                                                    width: `31px`,
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      90 +
                                                      680.68 +
                                                      0 +
                                                      0 +
                                                      120.32 +
                                                      0 +
                                                      0,
                                                    children: c(F, {
                                                      className: `framer-g1jp4l-container`,
                                                      nodeId: `C0PSIkYqy`,
                                                      scopeId: `Tykwfmrh9`,
                                                      children: c(Xe, {
                                                        height: `100%`,
                                                        id: `C0PSIkYqy`,
                                                        layoutId: `C0PSIkYqy`,
                                                        style: {
                                                          height: `100%`,
                                                          width: `100%`,
                                                        },
                                                        variant: `CkVBn1fSW`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      style: {
                                                        "--framer-font-size": `10px`,
                                                        "--framer-line-height": `100%`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Scroll down to explore`,
                                                    }),
                                                  }),
                                                  className: `framer-1ieimu9`,
                                                  "data-framer-name": `Swipe down`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `center`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    u(`div`, {
                                      className: `framer-17avexy`,
                                      "data-framer-name": `BG`,
                                      children: [
                                        c(D, {
                                          breakpoint: m,
                                          overrides: {
                                            HreCASfWI: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: w(
                                                  (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 1e3,
                                                pixelWidth: 1500,
                                                positionX: `59.4%`,
                                                positionY: `49.6%`,
                                                sizes: l?.width || `100vw`,
                                                src: `https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?width=1500&height=1000`,
                                                srcSet: `https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?scale-down-to=512&width=1500&height=1000 512w,https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?scale-down-to=1024&width=1500&height=1000 1024w,https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?width=1500&height=1000 1500w`,
                                              },
                                            },
                                          },
                                          children: c(A, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: w(
                                                (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 1e3,
                                              pixelWidth: 1500,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: l?.width || `100vw`,
                                              src: `https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?width=1500&height=1000`,
                                              srcSet: `https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?scale-down-to=512&width=1500&height=1000 512w,https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?scale-down-to=1024&width=1500&height=1000 1024w,https://framerusercontent.com/images/aaA7CDdzQWyzrLnklqOxC5dmbw.jpg?width=1500&height=1000 1500w`,
                                            },
                                            className: `framer-fczfoj`,
                                            "data-framer-name": `Plain image variant`,
                                          }),
                                        }),
                                        c(`div`, {
                                          className: `framer-1fiu94w`,
                                          "data-framer-name": `Darken`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            c(D, {
                              breakpoint: m,
                              overrides: {
                                HreCASfWI: {
                                  __framer__styleTransformEffectEnabled: void 0,
                                },
                                P9BY2bKka: {
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0.95,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -250,
                                      },
                                    },
                                    {
                                      ref: b,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                },
                              },
                              children: c(X, {
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.95,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -290,
                                    },
                                  },
                                  {
                                    ref: b,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScrollTarget`,
                                __framer__transformViewportThreshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-3lxjig`,
                                "data-framer-name": `Text`,
                                id: x,
                                ref: de(x),
                                children: c(`div`, {
                                  className: `framer-f9ik20`,
                                  "data-framer-name": `Container`,
                                  children: c(D, {
                                    breakpoint: m,
                                    overrides: {
                                      HreCASfWI: {
                                        animate: qn,
                                        initial: Jn,
                                        optimized: !0,
                                      },
                                    },
                                    children: u(Mn, {
                                      className: `framer-1ps35tk`,
                                      "data-framer-appear-id": `1ps35tk`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-wadix0`,
                                          "data-framer-name": `2`,
                                          children: u(`div`, {
                                            className: `framer-1xkjjme`,
                                            "data-framer-name": `Text`,
                                            children: [
                                              c(y, {
                                                className: `framer-ws6kem`,
                                                "data-framer-name": `icon-park-outline:quote`,
                                                fill: `rgba(0,0,0,1)`,
                                                intrinsicHeight: 48,
                                                intrinsicWidth: 48,
                                                svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8532 9.11595C11.3232 13.9519 7.13984 19.5809 6.30317 26.0029C5.00017 35.9999 13.9402 40.893 18.4702 36.497C23.0002 32.101 20.2852 26.5199 17.0052 24.9939C13.7252 23.4679 11.7192 23.9999 12.0692 21.9609C12.4192 19.9219 17.0852 14.2709 21.1852 11.6389C21.3303 11.5153 21.4228 11.341 21.444 11.1515C21.4651 10.962 21.4134 10.7716 21.2992 10.6189L20.2852 9.29995C19.8452 8.72795 19.4232 8.74995 18.8532 9.11495M38.6792 9.11595C31.1492 13.9519 26.9658 19.5809 26.1292 26.0029C24.8252 35.9999 33.7652 40.893 38.2952 36.497C42.8252 32.101 40.1102 26.5199 36.8292 24.9939C33.5482 23.4679 31.5432 23.9999 31.8932 21.9609C32.2432 19.9219 36.9102 14.2709 41.0102 11.6389C41.1551 11.5151 41.2475 11.3408 41.2684 11.1513C41.2894 10.9618 41.2375 10.7715 41.1232 10.6189L40.1102 9.29995C39.6702 8.72795 39.2482 8.74995 38.6792 9.11495" fill="black"/>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                              c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: u(`h2`, {
                                                    className: `framer-styles-preset-4vuy4n`,
                                                    "data-styles-preset": `nCOD2Sdie`,
                                                    children: [
                                                      `Most brands lose money in China.\u2028\u2028`,
                                                      c(`span`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                        },
                                                        children: `Not because the market is broken`,
                                                      }),
                                                      ` `,
                                                      c(`span`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                        },
                                                        children: `– because their model is.`,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-111ussm`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        c(`div`, {
                                          className: `framer-1odt7u5`,
                                          "data-framer-name": `1`,
                                          children: c(N, {
                                            __fromCanvasComponent: !0,
                                            children: c(s, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1hin0ji`,
                                                "data-styles-preset": `fN1_sGlJp`,
                                                style: {
                                                  "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                },
                                                children: `China is the world’s second-largets consumer market. It’s fast, complex and unforgiving – but also massively rewarding when done right. The opportunity is real, but only if you have the right partner, model and execution on the ground.`,
                                              }),
                                            }),
                                            className: `framer-3jxcy6`,
                                            effect: Yn,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        c(`section`, {
                          className: `framer-1tbu556`,
                          "data-framer-name": `Advantages`,
                          children: c(`div`, {
                            className: `framer-1t14es9`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-e4aze6`,
                              "data-framer-name": `Content`,
                              children: u(`div`, {
                                className: `framer-1ax05h0`,
                                "data-framer-name": `Items`,
                                children: [
                                  u(`div`, {
                                    className: `framer-1s2okdc`,
                                    "data-framer-name": `Heading`,
                                    children: [
                                      c(D, {
                                        breakpoint: m,
                                        overrides: {
                                          HreCASfWI: { effect: void 0 },
                                        },
                                        children: c(N, {
                                          __fromCanvasComponent: !0,
                                          children: c(s, {
                                            children: u(`h2`, {
                                              className: `framer-styles-preset-4vuy4n`,
                                              "data-styles-preset": `nCOD2Sdie`,
                                              children: [
                                                c(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                  },
                                                  children: `What the`,
                                                }),
                                                ` Market `,
                                                c(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(0, 0, 0)`,
                                                  },
                                                  children: `Says.`,
                                                }),
                                              ],
                                            }),
                                          }),
                                          className: `framer-1a6y6hx`,
                                          "data-framer-name": `Title`,
                                          effect: Xn,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      c(Nn, {
                                        __framer__animate: { transition: Zn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: c(s, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-1oueo73`,
                                            "data-styles-preset": `HLpRTFhim`,
                                            style: {
                                              "--framer-text-color": `rgba(10, 10, 10, 0.6)`,
                                            },
                                            children: `Sources: McKinsey, Euromonitor, BCG, Alibaba Group`,
                                          }),
                                        }),
                                        className: `framer-ngz2lu`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  u(`div`, {
                                    className: `framer-qok6oq`,
                                    "data-framer-name": `Cards`,
                                    children: [
                                      u(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-w067iy`,
                                        "data-framer-name": `List Card`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-w7n5j5`,
                                            "data-framer-name": `Top`,
                                            children: c(`div`, {
                                              className: `framer-ocw01f`,
                                              "data-framer-name": `Number`,
                                              children: c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-hik9eh`,
                                                    "data-styles-preset": `zgy6bak25`,
                                                    children: `1.4 billion`,
                                                  }),
                                                }),
                                                className: `framer-ak278n`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          c(`div`, {
                                            className: `framer-1sfqxsf`,
                                            "data-framer-name": `Bottom`,
                                            children: c(`div`, {
                                              className: `framer-1n5vbqr`,
                                              children: c(`div`, {
                                                className: `framer-d7xuqm`,
                                                "data-framer-name": `Text`,
                                                children: c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1n1wh7h`,
                                                      "data-styles-preset": `gd6AWaps9`,
                                                      style: {
                                                        "--framer-text-alignment": `right`,
                                                      },
                                                      children: `Consumers in China — more than the US + EU combined.`,
                                                    }),
                                                  }),
                                                  className: `framer-l2bg92`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      u(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-4bnbkh`,
                                        "data-framer-name": `List Card`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-ua0g69`,
                                            "data-framer-name": `Bottom`,
                                            children: c(`div`, {
                                              className: `framer-1708d8m`,
                                              children: c(`div`, {
                                                className: `framer-1c4oimu`,
                                                "data-framer-name": `Text`,
                                                children: c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1n1wh7h`,
                                                      "data-styles-preset": `gd6AWaps9`,
                                                      style: {
                                                        "--framer-text-alignment": `right`,
                                                      },
                                                      children: `Of global e-commerce transactions happen in China.`,
                                                    }),
                                                  }),
                                                  className: `framer-1f5eqt9`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                          c(`div`, {
                                            className: `framer-zpv0xv`,
                                            "data-framer-name": `Top`,
                                            children: c(`div`, {
                                              className: `framer-4banr5`,
                                              "data-framer-name": `Number`,
                                              children: c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-hik9eh`,
                                                    "data-styles-preset": `zgy6bak25`,
                                                    children: `50%+`,
                                                  }),
                                                }),
                                                className: `framer-b2hw0u`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      u(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-389tcg`,
                                        "data-framer-name": `List Card`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-lppser`,
                                            "data-framer-name": `Top`,
                                            children: c(`div`, {
                                              className: `framer-1lcbz86`,
                                              "data-framer-name": `Number`,
                                              children: c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-hik9eh`,
                                                    "data-styles-preset": `zgy6bak25`,
                                                    children: `#1`,
                                                  }),
                                                }),
                                                className: `framer-lie60a`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          c(`div`, {
                                            className: `framer-1nh45a3`,
                                            "data-framer-name": `Bottom`,
                                            children: c(`div`, {
                                              className: `framer-wylvyn`,
                                              children: c(`div`, {
                                                className: `framer-1xku5x5`,
                                                "data-framer-name": `Text`,
                                                children: c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1n1wh7h`,
                                                      "data-styles-preset": `gd6AWaps9`,
                                                      style: {
                                                        "--framer-text-alignment": `right`,
                                                      },
                                                      children: `Market for fashion, performance, lifestyle brands`,
                                                    }),
                                                  }),
                                                  className: `framer-wej3pm`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      u(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-9dd4av`,
                                        "data-framer-name": `List Card`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-1cm8aoa`,
                                            "data-framer-name": `Bottom`,
                                            children: c(`div`, {
                                              className: `framer-1kii7zq`,
                                              children: c(`div`, {
                                                className: `framer-gky7o9`,
                                                "data-framer-name": `Text`,
                                                children: c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1n1wh7h`,
                                                      "data-styles-preset": `gd6AWaps9`,
                                                      style: {
                                                        "--framer-text-alignment": `right`,
                                                      },
                                                      children: `of China’s urban middle class now buys directly from digital-first platforms`,
                                                    }),
                                                  }),
                                                  className: `framer-15dnw70`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                          }),
                                          c(`div`, {
                                            className: `framer-1rytmsm`,
                                            "data-framer-name": `Top`,
                                            children: c(`div`, {
                                              className: `framer-u06q2w`,
                                              "data-framer-name": `Number`,
                                              children: c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-hik9eh`,
                                                    "data-styles-preset": `zgy6bak25`,
                                                    children: `90%`,
                                                  }),
                                                }),
                                                className: `framer-r7t8yw`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        c(`section`, {
                          className: `framer-17jrnr`,
                          "data-framer-name": `Why`,
                          children: c(`div`, {
                            className: `framer-mou9do`,
                            "data-framer-name": `Container`,
                            children: u(`div`, {
                              className: `framer-v7nhx2`,
                              "data-framer-name": `Cards`,
                              children: [
                                u(X, {
                                  __framer__animate: { transition: Zn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-13vn86j`,
                                  "data-framer-name": `Image container`,
                                  children: [
                                    c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: {
                                          background: {
                                            alt: `people walking and standing at the streets of the city during night`,
                                            fit: `fill`,
                                            intrinsicHeight: 825,
                                            intrinsicWidth: 1137,
                                            loading: w(
                                              (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2535.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 1244,
                                            pixelWidth: 829,
                                            sizes: `min(max(${l?.width || `100vw`} - 40px, 1px), 1520px)`,
                                            src: `https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?width=829&height=1244`,
                                            srcSet: `https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?scale-down-to=1024&width=829&height=1244 682w,https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?width=829&height=1244 829w`,
                                          },
                                        },
                                        P9BY2bKka: {
                                          background: {
                                            alt: `people walking and standing at the streets of the city during night`,
                                            fit: `fill`,
                                            intrinsicHeight: 825,
                                            intrinsicWidth: 1137,
                                            loading: w(
                                              (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                2120.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 1244,
                                            pixelWidth: 829,
                                            sizes: `min(max(${l?.width || `100vw`} - 60px, 1px), 1520px)`,
                                            src: `https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?width=829&height=1244`,
                                            srcSet: `https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?scale-down-to=1024&width=829&height=1244 682w,https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?width=829&height=1244 829w`,
                                          },
                                        },
                                      },
                                      children: c(Pn, {
                                        __framer__styleTransformEffectEnabled:
                                          !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 20,
                                              rotateY: 0,
                                              scale: 1.2,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: -220,
                                            },
                                          },
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onInView`,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `people walking and standing at the streets of the city during night`,
                                          fit: `fill`,
                                          intrinsicHeight: 825,
                                          intrinsicWidth: 1137,
                                          loading: w(
                                            (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1851.5 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 1244,
                                          pixelWidth: 829,
                                          sizes: `max(min(max(${l?.width || `100vw`} - 72px, 1px), 1520px) * 0.3998 - 8px, 1px)`,
                                          src: `https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?width=829&height=1244`,
                                          srcSet: `https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?scale-down-to=1024&width=829&height=1244 682w,https://framerusercontent.com/images/Ke3SvkcSWIbpSWcOUdRCuudLA6Q.jpg?width=829&height=1244 829w`,
                                        },
                                        className: `framer-1edynp9`,
                                        "data-framer-name": `Image`,
                                        style: { transformPerspective: 1200 },
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-mspldt`,
                                      "data-framer-name": `Darken`,
                                    }),
                                    c(`div`, {
                                      className: `framer-163yihr`,
                                      "data-framer-name": `Text`,
                                      children: c(N, {
                                        __fromCanvasComponent: !0,
                                        children: c(s, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-xgn84q`,
                                            "data-styles-preset": `LyKOtaXoC`,
                                            style: {
                                              "--framer-text-alignment": `right`,
                                              "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                            },
                                            children: `But Here’s the Catch`,
                                          }),
                                        }),
                                        className: `framer-11dtqki`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-13awkiz`,
                                      "data-framer-name": `Text`,
                                      children: c(N, {
                                        __fromCanvasComponent: !0,
                                        children: c(s, {
                                          children: c(`h2`, {
                                            className: `framer-styles-preset-4vuy4n`,
                                            "data-styles-preset": `nCOD2Sdie`,
                                            style: {
                                              "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                            },
                                            children: `China is not just another channel. It’s a parallel universe.`,
                                          }),
                                        }),
                                        className: `framer-1tn840l`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                u(`div`, {
                                  className: `framer-1ih2txw`,
                                  "data-framer-name": `Right`,
                                  children: [
                                    u(`div`, {
                                      className: `framer-nwxpf1`,
                                      children: [
                                        u(`div`, {
                                          className: `framer-1fjvxqc`,
                                          children: [
                                            u(`div`, {
                                              className: `framer-26dsmx`,
                                              "data-border": !0,
                                              "data-framer-name": `Point card`,
                                              children: [
                                                c(`div`, {
                                                  className: `framer-1093fml`,
                                                  "data-framer-name": `Bottom`,
                                                  children: c(`div`, {
                                                    className: `framer-kyuypc`,
                                                    "data-framer-name": `Text`,
                                                    children: c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-xgn84q`,
                                                          "data-styles-preset": `LyKOtaXoC`,
                                                          children: `Platforms you’ve never used`,
                                                        }),
                                                      }),
                                                      className: `framer-1ydhr2h`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                                c(j, {
                                                  children: c(F, {
                                                    className: `framer-1oexzpu-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `d3U4lG9AF`,
                                                    scopeId: `Tykwfmrh9`,
                                                    children: c(sn, {
                                                      alignment: `center`,
                                                      direction: `left`,
                                                      fadeOptions: {
                                                        fadeAlpha: 0,
                                                        fadeContent: !0,
                                                        fadeInset: 0,
                                                        fadeWidth: 25,
                                                        overflow: !1,
                                                      },
                                                      gap: 10,
                                                      height: `100%`,
                                                      hoverFactor: 1,
                                                      id: `d3U4lG9AF`,
                                                      layoutId: `d3U4lG9AF`,
                                                      padding: 10,
                                                      paddingBottom: 10,
                                                      paddingLeft: 10,
                                                      paddingPerSide: !1,
                                                      paddingRight: 10,
                                                      paddingTop: 10,
                                                      sizingOptions: {
                                                        heightType: !0,
                                                        widthType: !0,
                                                      },
                                                      slots: [
                                                        u(h.div, {
                                                          className: `framer-56u1vg`,
                                                          children: [
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `stretch`,
                                                                pixelHeight: 280,
                                                                pixelWidth: 256,
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                                sizes: `63px`,
                                                                src: `https://framerusercontent.com/images/9rw9g4xJjNU0JcoWUu3DbPBH8.png?width=256&height=280`,
                                                              },
                                                              className: `framer-iwk4rv`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `stretch`,
                                                                pixelHeight: 248,
                                                                pixelWidth: 252,
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                                sizes: `63px`,
                                                                src: `https://framerusercontent.com/images/xgaWWKokIxBLji08akWkwLBRp7c.png?width=252&height=248`,
                                                              },
                                                              className: `framer-ujjb3o`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 225,
                                                                pixelWidth: 225,
                                                                sizes: `62px`,
                                                                src: `https://framerusercontent.com/images/BMUe6otjGIKJjc3xdtUSxF1EWc.png?width=225&height=225`,
                                                              },
                                                              className: `framer-1uh05l0`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 360,
                                                                pixelWidth: 360,
                                                                sizes: `62px`,
                                                                src: `https://framerusercontent.com/images/bBy41EXH52LZX6uhAy064sQOJo.jpg?width=360&height=360`,
                                                              },
                                                              className: `framer-14ej4uv`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 419,
                                                                pixelWidth: 461,
                                                                sizes: `62px`,
                                                                src: `https://framerusercontent.com/images/hGgL6JMAUqR06AHYwOOuejgOv6E.jpg?width=461&height=419`,
                                                              },
                                                              className: `framer-13f983i`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 1001,
                                                                pixelWidth: 1080,
                                                                sizes: `62px`,
                                                                src: `https://framerusercontent.com/images/SrhrbqPIlvdB7OCJrGjriLUo7MI.jpg?width=1080&height=1001`,
                                                                srcSet: `https://framerusercontent.com/images/SrhrbqPIlvdB7OCJrGjriLUo7MI.jpg?scale-down-to=512&width=1080&height=1001 512w,https://framerusercontent.com/images/SrhrbqPIlvdB7OCJrGjriLUo7MI.jpg?scale-down-to=1024&width=1080&height=1001 1024w,https://framerusercontent.com/images/SrhrbqPIlvdB7OCJrGjriLUo7MI.jpg?width=1080&height=1001 1080w`,
                                                              },
                                                              className: `framer-1d2zhxg`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 600,
                                                                pixelWidth: 600,
                                                                sizes: `62px`,
                                                                src: `https://framerusercontent.com/images/j32kZHDl7uJbqMZyyaGWCgjB4Tc.png?width=600&height=600`,
                                                                srcSet: `https://framerusercontent.com/images/j32kZHDl7uJbqMZyyaGWCgjB4Tc.png?scale-down-to=512&width=600&height=600 512w,https://framerusercontent.com/images/j32kZHDl7uJbqMZyyaGWCgjB4Tc.png?width=600&height=600 600w`,
                                                              },
                                                              className: `framer-udytv2`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                            c(A, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 225,
                                                                pixelWidth: 225,
                                                                sizes: `62px`,
                                                                src: `https://framerusercontent.com/images/ZQYJDv7XCGXTKTRaDMMBvuZPZ2M.png?width=225&height=225`,
                                                              },
                                                              className: `framer-17llu0f`,
                                                              "data-framer-name": `images`,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                      speed: 50,
                                                      style: {
                                                        height: `100%`,
                                                        width: `100%`,
                                                      },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            u(`div`, {
                                              className: `framer-yltehs`,
                                              "data-border": !0,
                                              "data-framer-name": `Point card`,
                                              children: [
                                                c(`div`, {
                                                  className: `framer-1u5qf98`,
                                                  "data-framer-name": `Bottom`,
                                                  children: c(`div`, {
                                                    className: `framer-10j3pjx`,
                                                    "data-framer-name": `Text`,
                                                    children: c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-xgn84q`,
                                                          "data-styles-preset": `LyKOtaXoC`,
                                                          children: `Payment systems you’ve never touched`,
                                                        }),
                                                      }),
                                                      className: `framer-1yfqg8i`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                                c(`div`, {
                                                  className: `framer-db1rel`,
                                                  "data-framer-name": `Bottom`,
                                                  children: u(`div`, {
                                                    className: `framer-14z4wzf`,
                                                    children: [
                                                      c(D, {
                                                        breakpoint: m,
                                                        overrides: {
                                                          HreCASfWI: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: w(
                                                                (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  2535.5 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  438 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  266.5377 +
                                                                  10 +
                                                                  160.5377 +
                                                                  20 +
                                                                  0 +
                                                                  2,
                                                              ),
                                                              pixelHeight: 646,
                                                              pixelWidth: 2560,
                                                              sizes: `135px`,
                                                              src: `https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?width=2560&height=646`,
                                                              srcSet: `https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=512&width=2560&height=646 512w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=1024&width=2560&height=646 1024w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=2048&width=2560&height=646 2048w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?width=2560&height=646 2560w`,
                                                            },
                                                          },
                                                          P9BY2bKka: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: w(
                                                                (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  2120.5 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  558 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  326.5 +
                                                                  10 +
                                                                  232.5 +
                                                                  14 +
                                                                  0 +
                                                                  2,
                                                              ),
                                                              pixelHeight: 646,
                                                              pixelWidth: 2560,
                                                              sizes: `135px`,
                                                              src: `https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?width=2560&height=646`,
                                                              srcSet: `https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=512&width=2560&height=646 512w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=1024&width=2560&height=646 1024w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=2048&width=2560&height=646 2048w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?width=2560&height=646 2560w`,
                                                            },
                                                          },
                                                        },
                                                        children: c(A, {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: w(
                                                              (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                1851.5 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                429 +
                                                                10 +
                                                                323 +
                                                                20 +
                                                                0 +
                                                                2,
                                                            ),
                                                            pixelHeight: 646,
                                                            pixelWidth: 2560,
                                                            sizes: `135px`,
                                                            src: `https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?width=2560&height=646`,
                                                            srcSet: `https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=512&width=2560&height=646 512w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=1024&width=2560&height=646 1024w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?scale-down-to=2048&width=2560&height=646 2048w,https://framerusercontent.com/images/VnTUXkIXUBtFMtEjFmKl08EBxhg.png?width=2560&height=646 2560w`,
                                                          },
                                                          className: `framer-1ihwgdf`,
                                                          "data-framer-name": `images`,
                                                        }),
                                                      }),
                                                      c(D, {
                                                        breakpoint: m,
                                                        overrides: {
                                                          HreCASfWI: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: w(
                                                                (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  2535.5 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  438 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  266.5377 +
                                                                  10 +
                                                                  160.5377 +
                                                                  20 +
                                                                  0 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 251,
                                                              pixelWidth: 820,
                                                              sizes: `124px`,
                                                              src: `https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?width=820&height=251`,
                                                              srcSet: `https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?scale-down-to=512&width=820&height=251 512w,https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?width=820&height=251 820w`,
                                                            },
                                                          },
                                                          P9BY2bKka: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: w(
                                                                (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  2120.5 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  558 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  326.5 +
                                                                  10 +
                                                                  232.5 +
                                                                  14 +
                                                                  0 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 251,
                                                              pixelWidth: 820,
                                                              sizes: `124px`,
                                                              src: `https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?width=820&height=251`,
                                                              srcSet: `https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?scale-down-to=512&width=820&height=251 512w,https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?width=820&height=251 820w`,
                                                            },
                                                          },
                                                        },
                                                        children: c(A, {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: w(
                                                              (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                1851.5 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                429 +
                                                                10 +
                                                                323 +
                                                                20 +
                                                                0 +
                                                                0,
                                                            ),
                                                            pixelHeight: 251,
                                                            pixelWidth: 820,
                                                            sizes: `124px`,
                                                            src: `https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?width=820&height=251`,
                                                            srcSet: `https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?scale-down-to=512&width=820&height=251 512w,https://framerusercontent.com/images/15YZLMXjInEU97zDhed9ND89d7U.png?width=820&height=251 820w`,
                                                          },
                                                          className: `framer-1jknmxh`,
                                                          "data-framer-name": `images`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        u(`div`, {
                                          className: `framer-12g9i4f`,
                                          "data-border": !0,
                                          "data-framer-name": `Point card`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-ewnyw8`,
                                              "data-framer-name": `Bottom`,
                                              children: c(`div`, {
                                                className: `framer-1dp0gk8`,
                                                "data-framer-name": `Text`,
                                                children: c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-hik9eh`,
                                                      "data-styles-preset": `zgy6bak25`,
                                                      children: `A cultural playbook that shifts quarterly`,
                                                    }),
                                                  }),
                                                  className: `framer-vff8er`,
                                                  "data-framer-name": `Title`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            c(`div`, {
                                              className: `framer-y0clms`,
                                              "data-framer-name": `Bottom`,
                                              children: c(D, {
                                                breakpoint: m,
                                                overrides: {
                                                  HreCASfWI: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `stretch`,
                                                      loading: w(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2535.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          438 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          533.0754 +
                                                          10 +
                                                          90.25 +
                                                          20 +
                                                          0,
                                                      ),
                                                      pixelHeight: 820,
                                                      pixelWidth: 960,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `240px`,
                                                      src: `https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?width=960&height=820`,
                                                      srcSet: `https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?scale-down-to=512&width=960&height=820 512w,https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?width=960&height=820 960w`,
                                                    },
                                                  },
                                                  P9BY2bKka: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `stretch`,
                                                      loading: w(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2120.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          558 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          143.25 +
                                                          14 +
                                                          0,
                                                      ),
                                                      pixelHeight: 820,
                                                      pixelWidth: 960,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `240px`,
                                                      src: `https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?width=960&height=820`,
                                                      srcSet: `https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?scale-down-to=512&width=960&height=820 512w,https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?width=960&height=820 960w`,
                                                    },
                                                  },
                                                },
                                                children: c(A, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `stretch`,
                                                    loading: w(
                                                      (l?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        1851.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        10 +
                                                        239.75 +
                                                        20 +
                                                        0,
                                                    ),
                                                    pixelHeight: 820,
                                                    pixelWidth: 960,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `240px`,
                                                    src: `https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?width=960&height=820`,
                                                    srcSet: `https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?scale-down-to=512&width=960&height=820 512w,https://framerusercontent.com/images/KowyHAYooZkB877BtfegYm4d6k.webp?width=960&height=820 960w`,
                                                  },
                                                  className: `framer-3sh2hi`,
                                                  "data-framer-name": `vzf4MRT8paiVVXVJn5iwRD0Ok.webp`,
                                                }),
                                              }),
                                            }),
                                            c(`div`, {
                                              className: `framer-1x0v07z`,
                                              "data-framer-name": `Bottom`,
                                              children: u(`div`, {
                                                className: `framer-r5oufi`,
                                                "data-framer-name": `Text`,
                                                children: [
                                                  c(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(s, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-xgn84q`,
                                                        "data-styles-preset": `LyKOtaXoC`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                        },
                                                        children: `Most foreign brands enter with the wrong model`,
                                                      }),
                                                    }),
                                                    className: `framer-17wcw3a`,
                                                    "data-framer-name": `Title`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  c(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(s, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1qnjizk`,
                                                        "data-styles-preset": `wf_7zBsvo`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                        },
                                                        children: `Too many layers. Too much spend. Not enough control.`,
                                                      }),
                                                    }),
                                                    className: `framer-1k2m2vi`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-f2ytd8`,
                                      children: u(`div`, {
                                        className: `framer-1hhfqby`,
                                        "data-border": !0,
                                        "data-framer-name": `Point card`,
                                        children: [
                                          u(`div`, {
                                            className: `framer-60c1wr`,
                                            "data-framer-name": `Bottom`,
                                            children: [
                                              c(`div`, {
                                                className: `framer-1tfyzeq`,
                                                "data-framer-name": `Text`,
                                                children: c(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(s, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-hik9eh`,
                                                      "data-styles-preset": `zgy6bak25`,
                                                      children: `What Works Instead`,
                                                    }),
                                                  }),
                                                  className: `framer-2u4vfo`,
                                                  "data-framer-name": `Title`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              c(D, {
                                                breakpoint: m,
                                                overrides: {
                                                  HreCASfWI: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: w(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2535.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          438 +
                                                          0 +
                                                          1092.0754 +
                                                          0 +
                                                          0 +
                                                          10 +
                                                          0 +
                                                          20 +
                                                          234,
                                                      ),
                                                      pixelHeight: 3360,
                                                      pixelWidth: 5040,
                                                      sizes: `180px`,
                                                      src: `https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?width=5040&height=3360`,
                                                      srcSet: `https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=512&width=5040&height=3360 512w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=1024&width=5040&height=3360 1024w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=2048&width=5040&height=3360 2048w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=4096&width=5040&height=3360 4096w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?width=5040&height=3360 5040w`,
                                                    },
                                                  },
                                                  P9BY2bKka: {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: w(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2120.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          558 +
                                                          0 +
                                                          653 +
                                                          0 +
                                                          10 +
                                                          0 +
                                                          14,
                                                      ),
                                                      pixelHeight: 3360,
                                                      pixelWidth: 5040,
                                                      sizes: `180px`,
                                                      src: `https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?width=5040&height=3360`,
                                                      srcSet: `https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=512&width=5040&height=3360 512w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=1024&width=5040&height=3360 1024w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=2048&width=5040&height=3360 2048w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=4096&width=5040&height=3360 4096w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?width=5040&height=3360 5040w`,
                                                    },
                                                  },
                                                },
                                                children: c(A, {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    loading: w(
                                                      (l?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        1851.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        858 +
                                                        0 +
                                                        10 +
                                                        0 +
                                                        20,
                                                    ),
                                                    pixelHeight: 3360,
                                                    pixelWidth: 5040,
                                                    sizes: `180px`,
                                                    src: `https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?width=5040&height=3360`,
                                                    srcSet: `https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=512&width=5040&height=3360 512w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=1024&width=5040&height=3360 1024w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=2048&width=5040&height=3360 2048w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?scale-down-to=4096&width=5040&height=3360 4096w,https://framerusercontent.com/images/gJEDKnLxNdKQe0PqtYD0OIj0Kc.jpg?width=5040&height=3360 5040w`,
                                                  },
                                                  className: `framer-edawgt`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          c(`div`, {
                                            className: `framer-ccuktn`,
                                            "data-framer-name": `Bottom`,
                                            children: u(`div`, {
                                              className: `framer-1ls5qzi`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                u(`div`, {
                                                  className: `framer-e02ynd`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-1nb4rr`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#0A0A0A"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-1oueo73`,
                                                          "data-styles-preset": `HLpRTFhim`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `A partner who buys inventory up front`,
                                                        }),
                                                      }),
                                                      className: `framer-1xte7z7`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-2lyuqi`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-erlnp6`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#0A0A0A"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-1oueo73`,
                                                          "data-styles-preset": `HLpRTFhim`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `A local team that executes everything end-to-end`,
                                                        }),
                                                      }),
                                                      className: `framer-8c6okx`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-1ux5hus`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-1xel9xn`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#0A0A0A"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-1oueo73`,
                                                          "data-styles-preset": `HLpRTFhim`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `A model where you retain brand control, and the operator takes on the risk`,
                                                        }),
                                                      }),
                                                      className: `framer-qhac3v`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-ku375j`,
                                      children: u(X, {
                                        __framer__animate: { transition: Zn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-tj1p14`,
                                        "data-framer-name": `Testimonial`,
                                        children: [
                                          u(`div`, {
                                            className: `framer-1276yml`,
                                            "data-framer-name": `Bottom`,
                                            children: [
                                              u(`div`, {
                                                className: `framer-ito6ab`,
                                                children: [
                                                  c(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(s, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1hin0ji`,
                                                        "data-styles-preset": `fN1_sGlJp`,
                                                        children: `This is how our brand partners around the world succeed in China.`,
                                                      }),
                                                    }),
                                                    className: `framer-saza2j`,
                                                    "data-framer-name": `Collaboration Text`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  c(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(s, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1hin0ji`,
                                                        "data-styles-preset": `fN1_sGlJp`,
                                                        style: {
                                                          "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                        },
                                                        children: `“We were able to rebuild our China business without having to invest in an onsite team, WFOE, and still have local experts with an entrepreneurial mindset ‘on the ground’. Kung Fu Data always provides immediate support and direct honest feedback.”`,
                                                      }),
                                                    }),
                                                    className: `framer-yxfetu`,
                                                    "data-framer-name": `Collaboration Text`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              u(`div`, {
                                                className: `framer-1dc2d3f`,
                                                "data-framer-name": `Top`,
                                                children: [
                                                  c(D, {
                                                    breakpoint: m,
                                                    overrides: {
                                                      HreCASfWI: {
                                                        y:
                                                          (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2535.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          438 +
                                                          0 +
                                                          1960.0754 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          24 +
                                                          355 +
                                                          0,
                                                      },
                                                      P9BY2bKka: {
                                                        y:
                                                          (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2120.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          558 +
                                                          0 +
                                                          1045 +
                                                          -149.5 +
                                                          0 +
                                                          0 +
                                                          30 +
                                                          355 +
                                                          0,
                                                      },
                                                    },
                                                    children: c(j, {
                                                      height: 12,
                                                      width: `56px`,
                                                      y:
                                                        (l?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        1851.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        1303 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        30 +
                                                        355 +
                                                        0,
                                                      children: c(F, {
                                                        className: `framer-1yxglbq-container`,
                                                        nodeId: `Xaef_hYl1`,
                                                        scopeId: `Tykwfmrh9`,
                                                        children: c(Tn, {
                                                          height: `100%`,
                                                          id: `Xaef_hYl1`,
                                                          layoutId: `Xaef_hYl1`,
                                                          style: {
                                                            height: `100%`,
                                                            width: `100%`,
                                                          },
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  c(D, {
                                                    breakpoint: m,
                                                    overrides: {
                                                      HreCASfWI: {
                                                        y:
                                                          (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2535.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          438 +
                                                          0 +
                                                          1960.0754 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          24 +
                                                          355 +
                                                          0,
                                                      },
                                                      P9BY2bKka: {
                                                        y:
                                                          (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          2120.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          558 +
                                                          0 +
                                                          1045 +
                                                          -149.5 +
                                                          0 +
                                                          0 +
                                                          30 +
                                                          355 +
                                                          0,
                                                      },
                                                    },
                                                    children: c(j, {
                                                      height: 16,
                                                      width: `16px`,
                                                      y:
                                                        (l?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        1851.5 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        1303 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        30 +
                                                        355 +
                                                        0,
                                                      children: c(F, {
                                                        className: `framer-1xj0icl-container`,
                                                        nodeId: `Q7BxCH9mF`,
                                                        scopeId: `Tykwfmrh9`,
                                                        children: c(ve, {
                                                          gUDzlhgLq: !0,
                                                          height: `100%`,
                                                          id: `Q7BxCH9mF`,
                                                          layoutId: `Q7BxCH9mF`,
                                                          Rl_qLe3MC: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          style: {
                                                            height: `100%`,
                                                            width: `100%`,
                                                          },
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          c(`div`, {
                                            className: `framer-1r7ai21`,
                                            "data-framer-name": `Top`,
                                            children: u(`div`, {
                                              className: `framer-1k50b5f`,
                                              "data-framer-name": `User Info Container`,
                                              children: [
                                                c(D, {
                                                  breakpoint: m,
                                                  overrides: {
                                                    HreCASfWI: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: w(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            2535.5 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            438 +
                                                            0 +
                                                            1960.0754 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            423 +
                                                            24 +
                                                            0 +
                                                            70.5,
                                                        ),
                                                        pixelHeight: 320,
                                                        pixelWidth: 320,
                                                        sizes: `46px`,
                                                        src: `https://framerusercontent.com/images/FenVUiFz5oRTFUOz4KvluZnDIY.png?width=320&height=320`,
                                                      },
                                                    },
                                                    P9BY2bKka: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: w(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            2120.5 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            558 +
                                                            0 +
                                                            1045 +
                                                            -149.5 +
                                                            0 +
                                                            435 +
                                                            30 +
                                                            0 +
                                                            70.5,
                                                        ),
                                                        pixelHeight: 320,
                                                        pixelWidth: 320,
                                                        sizes: `46px`,
                                                        src: `https://framerusercontent.com/images/FenVUiFz5oRTFUOz4KvluZnDIY.png?width=320&height=320`,
                                                      },
                                                    },
                                                  },
                                                  children: c(A, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      loading: w(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1851.5 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1303 +
                                                          0 +
                                                          0 +
                                                          435 +
                                                          30 +
                                                          0 +
                                                          70.5,
                                                      ),
                                                      pixelHeight: 320,
                                                      pixelWidth: 320,
                                                      sizes: `46px`,
                                                      src: `https://framerusercontent.com/images/FenVUiFz5oRTFUOz4KvluZnDIY.png?width=320&height=320`,
                                                    },
                                                    className: `framer-17zxak0`,
                                                    "data-framer-name": `User Image`,
                                                  }),
                                                }),
                                                u(`div`, {
                                                  className: `framer-1ocop92`,
                                                  "data-framer-name": `User Info`,
                                                  children: [
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `Chief Commercial Officer`,
                                                        }),
                                                      }),
                                                      className: `framer-1un1dzc`,
                                                      "data-framer-name": `Join Us Title`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-2s58fc`,
                                                          "data-styles-preset": `svYtzYwMA`,
                                                          children: `2XU`,
                                                        }),
                                                      }),
                                                      className: `framer-25due9`,
                                                      "data-framer-name": `Join Us Description`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        c(`section`, {
                          className: `framer-5uw7qe`,
                          "data-framer-name": `Statistics`,
                          children: u(Mn, {
                            animate: Qn,
                            className: `framer-q9l9n9`,
                            "data-framer-appear-id": `q9l9n9`,
                            "data-framer-name": `Image`,
                            initial: $n,
                            optimized: !0,
                            children: [
                              c(`div`, { className: `framer-s3b482` }),
                              c(D, {
                                breakpoint: m,
                                overrides: {
                                  HreCASfWI: {
                                    __framer__styleTransformEffectEnabled:
                                      void 0,
                                    background: {
                                      alt: `woman holding bag beside mural painting`,
                                      fit: `fill`,
                                      intrinsicHeight: 1373,
                                      intrinsicWidth: 2277,
                                      loading: w(
                                        (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5712.5754 +
                                          0 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 1171,
                                      pixelWidth: 937,
                                      positionX: `48.4%`,
                                      positionY: `72.8%`,
                                      sizes: `max(${l?.width || `100vw`} - 40px, 1px)`,
                                      src: `https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?width=937&height=1171`,
                                      srcSet: `https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?scale-down-to=1024&width=937&height=1171 819w,https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?width=937&height=1171 937w`,
                                    },
                                    style: {},
                                  },
                                  P9BY2bKka: {
                                    background: {
                                      alt: `woman holding bag beside mural painting`,
                                      fit: `fill`,
                                      intrinsicHeight: 1373,
                                      intrinsicWidth: 2277,
                                      loading: w(
                                        (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          4227.5 +
                                          0 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 1171,
                                      pixelWidth: 937,
                                      positionX: `48.4%`,
                                      positionY: `72.8%`,
                                      sizes: `max(${l?.width || `100vw`} - 60px, 1px)`,
                                      src: `https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?width=937&height=1171`,
                                      srcSet: `https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?scale-down-to=1024&width=937&height=1171 819w,https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?width=937&height=1171 937w`,
                                    },
                                  },
                                },
                                children: c(Pn, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 20,
                                        rotateY: 0,
                                        scale: 1.2,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -220,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: `woman holding bag beside mural painting`,
                                    fit: `fill`,
                                    intrinsicHeight: 1373,
                                    intrinsicWidth: 2277,
                                    loading: w(
                                      (l?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        3957.5 +
                                        0 +
                                        0 +
                                        0,
                                    ),
                                    pixelHeight: 1171,
                                    pixelWidth: 937,
                                    positionX: `48.4%`,
                                    positionY: `72.8%`,
                                    sizes: `max(${l?.width || `100vw`} - 72px, 1px)`,
                                    src: `https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?width=937&height=1171`,
                                    srcSet: `https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?scale-down-to=1024&width=937&height=1171 819w,https://framerusercontent.com/images/VKsarRFFSQU1Gj87T42V7Ivs3KA.jpg?width=937&height=1171 937w`,
                                  },
                                  className: `framer-1yo7ged`,
                                  "data-framer-name": `Your image here`,
                                  style: { transformPerspective: 1200 },
                                  children: c(j, {
                                    children: c(F, {
                                      className: `framer-a6s76c-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `Jqsupf8BG`,
                                      scopeId: `Tykwfmrh9`,
                                      children: c(je, {
                                        height: `100%`,
                                        id: `Jqsupf8BG`,
                                        layoutId: `Jqsupf8BG`,
                                        opacity: 0.05,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        c(`section`, {
                          className: `framer-w10hl1`,
                          "data-framer-name": `Advantages`,
                          children: c(`div`, {
                            className: `framer-pin9g5`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-1373c6i`,
                              "data-framer-name": `Content`,
                              children: u(`div`, {
                                className: `framer-tsguh4`,
                                "data-framer-name": `Items`,
                                children: [
                                  c(`div`, {
                                    className: `framer-uwun66`,
                                    "data-framer-name": `Heading`,
                                    children: c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: { effect: void 0 },
                                      },
                                      children: c(N, {
                                        __fromCanvasComponent: !0,
                                        children: c(s, {
                                          children: u(`h2`, {
                                            className: `framer-styles-preset-4vuy4n`,
                                            "data-styles-preset": `nCOD2Sdie`,
                                            style: {
                                              "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                            },
                                            children: [
                                              c(`span`, {
                                                style: {
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                },
                                                children: `When to `,
                                              }),
                                              `Enter China?`,
                                            ],
                                          }),
                                        }),
                                        className: `framer-1a2ojdo`,
                                        "data-framer-name": `Title`,
                                        effect: Xn,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  u(`div`, {
                                    className: `framer-s4nwwd`,
                                    "data-framer-name": `Cards`,
                                    children: [
                                      u(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1sxmkj6`,
                                        "data-framer-name": `List Card`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-miwh5i`,
                                            "data-framer-name": `Top`,
                                            children: c(`div`, {
                                              className: `framer-n69zry`,
                                              "data-framer-name": `Number`,
                                              children: c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-hik9eh`,
                                                    "data-styles-preset": `zgy6bak25`,
                                                    children: `Enter If...`,
                                                  }),
                                                }),
                                                className: `framer-1cuz2mf`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          c(`div`, {
                                            className: `framer-d8fkus`,
                                            "data-framer-name": `Bottom`,
                                            children: u(`div`, {
                                              className: `framer-9qt3r9`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                u(`div`, {
                                                  className: `framer-1so9i6g`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-1msb4p4`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#3AC200"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `Your brand is proven in home markets`,
                                                        }),
                                                      }),
                                                      className: `framer-irlb42`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-7d9zf4`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-crdbj4`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#3AC200"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `You want to expand into Asia`,
                                                        }),
                                                      }),
                                                      className: `framer-14x77iq`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-vcsbbm`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-k3jjq4`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#3AC200"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `You have modest budget, but strong conviction`,
                                                        }),
                                                      }),
                                                      className: `framer-1byvvrc`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-12a4lnj`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-19tc7iq`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM15.6907 20.8533L22.3573 12.8533L20.3093 11.1467L14.576 18.0253L11.6093 15.0573L9.724 16.9427L13.724 20.9427L14.756 21.9747L15.6907 20.8533Z" fill="#3AC200"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `You’re willing to partner, not just outsource`,
                                                        }),
                                                      }),
                                                      className: `framer-1cr4usx`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      u(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-apoi0c`,
                                        "data-framer-name": `List Card`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-42xm76`,
                                            "data-framer-name": `Top`,
                                            children: c(`div`, {
                                              className: `framer-1w8fn9c`,
                                              "data-framer-name": `Number`,
                                              children: c(N, {
                                                __fromCanvasComponent: !0,
                                                children: c(s, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-hik9eh`,
                                                    "data-styles-preset": `zgy6bak25`,
                                                    children: `Avoid If...`,
                                                  }),
                                                }),
                                                className: `framer-uiv4re`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          c(`div`, {
                                            className: `framer-6zlc8y`,
                                            "data-framer-name": `Bottom`,
                                            children: u(`div`, {
                                              className: `framer-54v7r3`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                u(`div`, {
                                                  className: `framer-1540u8`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-14u3fu1`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.875 4C9.25893 4 4 9.25893 4 15.875C4 22.4911 9.25893 27.75 15.875 27.75C22.4911 27.75 27.75 22.4911 27.75 15.875C27.75 9.25893 22.4911 4 15.875 4ZM20.4554 21.8125L15.875 17.2321L11.2946 21.8125L9.9375 20.4554L14.5179 15.875L9.9375 11.2946L11.2946 9.9375L15.875 14.5179L20.4554 9.9375L21.8125 11.2946L17.2321 15.875L21.8125 20.4554L20.4554 21.8125Z" fill="#FF0000"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `Your unit economics don’t work`,
                                                        }),
                                                      }),
                                                      className: `framer-l6o7ij`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-1dzkhq9`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-vk9zxi`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.875 4C9.25893 4 4 9.25893 4 15.875C4 22.4911 9.25893 27.75 15.875 27.75C22.4911 27.75 27.75 22.4911 27.75 15.875C27.75 9.25893 22.4911 4 15.875 4ZM20.4554 21.8125L15.875 17.2321L11.2946 21.8125L9.9375 20.4554L14.5179 15.875L9.9375 11.2946L11.2946 9.9375L15.875 14.5179L20.4554 9.9375L21.8125 11.2946L17.2321 15.875L21.8125 20.4554L20.4554 21.8125Z" fill="#FF0000"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `You expect overnight success`,
                                                        }),
                                                      }),
                                                      className: `framer-81a26f`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-w4ehph`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-1q3ed41`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.875 4C9.25893 4 4 9.25893 4 15.875C4 22.4911 9.25893 27.75 15.875 27.75C22.4911 27.75 27.75 22.4911 27.75 15.875C27.75 9.25893 22.4911 4 15.875 4ZM20.4554 21.8125L15.875 17.2321L11.2946 21.8125L9.9375 20.4554L14.5179 15.875L9.9375 11.2946L11.2946 9.9375L15.875 14.5179L20.4554 9.9375L21.8125 11.2946L17.2321 15.875L21.8125 20.4554L20.4554 21.8125Z" fill="#FF0000"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `You want control without involvement`,
                                                        }),
                                                      }),
                                                      className: `framer-7fzkp8`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                u(`div`, {
                                                  className: `framer-3pdeli`,
                                                  "data-framer-name": `Frame`,
                                                  children: [
                                                    c(y, {
                                                      className: `framer-1xyybzv`,
                                                      "data-framer-name": `lets-icons:check-fill`,
                                                      fill: `rgba(0,0,0,1)`,
                                                      intrinsicHeight: 32,
                                                      intrinsicWidth: 32,
                                                      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.875 4C9.25893 4 4 9.25893 4 15.875C4 22.4911 9.25893 27.75 15.875 27.75C22.4911 27.75 27.75 22.4911 27.75 15.875C27.75 9.25893 22.4911 4 15.875 4ZM20.4554 21.8125L15.875 17.2321L11.2946 21.8125L9.9375 20.4554L14.5179 15.875L9.9375 11.2946L11.2946 9.9375L15.875 14.5179L20.4554 9.9375L21.8125 11.2946L17.2321 15.875L21.8125 20.4554L20.4554 21.8125Z" fill="#FF0000"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(s, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-9v8dhs`,
                                                          "data-styles-preset": `oFAZmwcVJ`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                          },
                                                          children: `You’re only testing the waters`,
                                                        }),
                                                      }),
                                                      className: `framer-1nds4mp`,
                                                      "data-framer-name": `Bottom → Lauren 
Thompson`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `center`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        c(X, {
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-115dacl`,
                          "data-framer-name": `How it works`,
                          children: u(`div`, {
                            className: `framer-u21vw2`,
                            "data-framer-name": `Container`,
                            children: [
                              c(`div`, {
                                className: `framer-1lzg5c`,
                                "data-framer-name": `Top`,
                                children: c(`div`, {
                                  className: `framer-zcl6v0`,
                                  "data-framer-name": `Heading`,
                                  children: c(`div`, {
                                    className: `framer-1uifmtr`,
                                    "data-framer-name": `Text`,
                                    children: c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: { effect: void 0 },
                                      },
                                      children: c(N, {
                                        __fromCanvasComponent: !0,
                                        children: c(s, {
                                          children: u(`h2`, {
                                            className: `framer-styles-preset-4vuy4n`,
                                            "data-styles-preset": `nCOD2Sdie`,
                                            children: [
                                              c(`span`, {
                                                style: {
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                },
                                                children: `Why Our Brand Partners `,
                                              }),
                                              `Choose China.`,
                                            ],
                                          }),
                                        }),
                                        className: `framer-10onxlv`,
                                        "data-framer-name": `Section Description`,
                                        effect: Xn,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              c(`div`, {
                                className: `framer-mk0vmu`,
                                "data-framer-name": `Showreel`,
                                children: u(`div`, {
                                  className: `framer-5s7xn2`,
                                  "data-framer-name": `Steps`,
                                  children: [
                                    c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: {
                                          height: 12,
                                          width: `calc(min(${l?.width || `100vw`}, 1520px) - 40px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            8428.5754 +
                                            0 +
                                            0 +
                                            36 +
                                            102 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        P9BY2bKka: {
                                          width: `max((min(${l?.width || `100vw`}, 1520px) - 64px) / 2, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            5597.5 +
                                            0 +
                                            0 +
                                            64 +
                                            126 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: c(j, {
                                        height: 204,
                                        width: `max((max((min(${l?.width || `100vw`}, 1520px) - 72px) * 0.7 - 48px, 1px) - 4px) / 2, 50px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5312.5 +
                                          0 +
                                          0 +
                                          36 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                        children: c(Bn, {
                                          __framer__animate: { transition: Q },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-7rln2k-container`,
                                          nodeId: `dTwMuWFWo`,
                                          rendersWithMotion: !0,
                                          scopeId: `Tykwfmrh9`,
                                          children: c(D, {
                                            breakpoint: m,
                                            overrides: {
                                              HreCASfWI: {
                                                variant: `dMBhyPibC`,
                                              },
                                            },
                                            children: c(U, {
                                              a7clh1msh: `YbnbRhkd0`,
                                              height: `100%`,
                                              id: `dTwMuWFWo`,
                                              layoutId: `dTwMuWFWo`,
                                              NG6SmHHt4: $(
                                                {
                                                  pixelHeight: 77,
                                                  pixelWidth: 77,
                                                  src: `https://framerusercontent.com/images/8qCqC2OsD0HTVtpCDKLzJGcjwUo.jpg?width=77&height=77`,
                                                },
                                                `Team members in an office setting having a discussion, representing clear communication throughout the project process.`,
                                              ),
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              Tjhdk4XA_: `01`,
                                              uO2WV476E: `Demand is real`,
                                              variant: `luvDC_l88`,
                                              width: `100%`,
                                              WPRhcRwE0: `Chinese consumers love Western brands—but only the ones that show up correctly.`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: {
                                          height: 12,
                                          width: `calc(min(${l?.width || `100vw`}, 1520px) - 40px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            8428.5754 +
                                            0 +
                                            0 +
                                            36 +
                                            102 +
                                            0 +
                                            0 +
                                            0 +
                                            16,
                                        },
                                        P9BY2bKka: {
                                          width: `max((min(${l?.width || `100vw`}, 1520px) - 64px) / 2, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            5597.5 +
                                            0 +
                                            0 +
                                            64 +
                                            126 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: c(j, {
                                        height: 204,
                                        width: `max((max((min(${l?.width || `100vw`}, 1520px) - 72px) * 0.7 - 48px, 1px) - 4px) / 2, 50px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5312.5 +
                                          0 +
                                          0 +
                                          36 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                        children: c(Bn, {
                                          __framer__animate: { transition: er },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-16i3i73-container`,
                                          nodeId: `NjD20Jyt4`,
                                          rendersWithMotion: !0,
                                          scopeId: `Tykwfmrh9`,
                                          children: c(D, {
                                            breakpoint: m,
                                            overrides: {
                                              HreCASfWI: {
                                                variant: `dMBhyPibC`,
                                              },
                                            },
                                            children: c(U, {
                                              a7clh1msh: `LM4PtgQYZ`,
                                              height: `100%`,
                                              id: `NjD20Jyt4`,
                                              layoutId: `NjD20Jyt4`,
                                              NG6SmHHt4: $(
                                                {
                                                  pixelHeight: 77,
                                                  pixelWidth: 77,
                                                  src: `https://framerusercontent.com/images/je5LkQxtlpMk3QwDVyGCYFiOugM.jpg?width=77&height=77`,
                                                },
                                                `Documents and planning materials on a desk, representing customized solutions tailored to client needs.`,
                                              ),
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              Tjhdk4XA_: `02`,
                                              uO2WV476E: `Category fit`,
                                              variant: `luvDC_l88`,
                                              width: `100%`,
                                              WPRhcRwE0: `Fashion, lifestyle and performance are high-growth categories in digital commerce.`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: {
                                          height: 12,
                                          width: `calc(min(${l?.width || `100vw`}, 1520px) - 40px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            8428.5754 +
                                            0 +
                                            0 +
                                            36 +
                                            102 +
                                            0 +
                                            0 +
                                            0 +
                                            32,
                                        },
                                        P9BY2bKka: {
                                          width: `max((min(${l?.width || `100vw`}, 1520px) - 64px) / 2, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            5597.5 +
                                            0 +
                                            0 +
                                            64 +
                                            126 +
                                            0 +
                                            0 +
                                            0 +
                                            208,
                                        },
                                      },
                                      children: c(j, {
                                        height: 204,
                                        width: `max((max((min(${l?.width || `100vw`}, 1520px) - 72px) * 0.7 - 48px, 1px) - 4px) / 2, 50px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5312.5 +
                                          0 +
                                          0 +
                                          36 +
                                          0 +
                                          0 +
                                          0 +
                                          208,
                                        children: c(Bn, {
                                          __framer__animate: { transition: Zn },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1o0sc9w-container`,
                                          nodeId: `kM9qT9qEB`,
                                          rendersWithMotion: !0,
                                          scopeId: `Tykwfmrh9`,
                                          children: c(D, {
                                            breakpoint: m,
                                            overrides: {
                                              HreCASfWI: {
                                                variant: `dMBhyPibC`,
                                              },
                                            },
                                            children: c(U, {
                                              a7clh1msh: `MXYbsQBHm`,
                                              height: `100%`,
                                              id: `kM9qT9qEB`,
                                              layoutId: `kM9qT9qEB`,
                                              NG6SmHHt4: $(
                                                {
                                                  pixelHeight: 77,
                                                  pixelWidth: 77,
                                                  src: `https://framerusercontent.com/images/lEZwltTi9mwoiWVW7KioGvSAOLk.jpg?width=77&height=77`,
                                                },
                                                `Chart or graph showing pricing information, representing transparent pricing with no hidden fees.`,
                                              ),
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              Tjhdk4XA_: `03`,
                                              uO2WV476E: `The platform game`,
                                              variant: `luvDC_l88`,
                                              width: `100%`,
                                              WPRhcRwE0: `Platforms offer scale, data, and conversion unmatched anywhere in the West.`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(D, {
                                      breakpoint: m,
                                      overrides: {
                                        HreCASfWI: {
                                          height: 12,
                                          width: `calc(min(${l?.width || `100vw`}, 1520px) - 40px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            8428.5754 +
                                            0 +
                                            0 +
                                            36 +
                                            102 +
                                            0 +
                                            0 +
                                            0 +
                                            48,
                                        },
                                        P9BY2bKka: {
                                          width: `max((min(${l?.width || `100vw`}, 1520px) - 64px) / 2, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            5597.5 +
                                            0 +
                                            0 +
                                            64 +
                                            126 +
                                            0 +
                                            0 +
                                            0 +
                                            208,
                                        },
                                      },
                                      children: c(j, {
                                        height: 204,
                                        width: `max((max((min(${l?.width || `100vw`}, 1520px) - 72px) * 0.7 - 48px, 1px) - 4px) / 2, 50px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5312.5 +
                                          0 +
                                          0 +
                                          36 +
                                          0 +
                                          0 +
                                          0 +
                                          208,
                                        children: c(Bn, {
                                          __framer__animate: { transition: tr },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-wqpv8s-container`,
                                          nodeId: `XZcNlWawl`,
                                          rendersWithMotion: !0,
                                          scopeId: `Tykwfmrh9`,
                                          children: c(D, {
                                            breakpoint: m,
                                            overrides: {
                                              HreCASfWI: {
                                                variant: `dMBhyPibC`,
                                              },
                                            },
                                            children: c(U, {
                                              a7clh1msh: `O0HuyVtD_`,
                                              height: `100%`,
                                              id: `XZcNlWawl`,
                                              layoutId: `XZcNlWawl`,
                                              NG6SmHHt4: $(
                                                {
                                                  pixelHeight: 77,
                                                  pixelWidth: 77,
                                                  src: `https://framerusercontent.com/images/xcjrZRfVBa6b3ruwbNh8aIRdak.jpg?width=77&height=77`,
                                                },
                                                `Hands working on a device or document, representing professional results delivered to clients.`,
                                              ),
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              Tjhdk4XA_: `04`,
                                              uO2WV476E: `It compounds`,
                                              variant: `luvDC_l88`,
                                              width: `100%`,
                                              WPRhcRwE0: `With the right operator, your China business becomes an engine for long-term profitability.`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        c(D, {
                          breakpoint: m,
                          overrides: {
                            HreCASfWI: {
                              y: (l?.y || 0) + 0 + 0 + 0 + 8698.5754,
                            },
                            P9BY2bKka: { y: (l?.y || 0) + 0 + 0 + 0 + 6319.5 },
                          },
                          children: c(j, {
                            height: 733,
                            width: l?.width || `100vw`,
                            y: (l?.y || 0) + 0 + 0 + 0 + 5880.5,
                            children: c(F, {
                              className: `framer-1tgxuhj-container`,
                              nodeId: `uHRNutsHR`,
                              scopeId: `Tykwfmrh9`,
                              children: c(D, {
                                breakpoint: m,
                                overrides: {
                                  HreCASfWI: { variant: `XGTRK4uxq` },
                                  P9BY2bKka: { variant: `mIxVoKe0g` },
                                },
                                children: c(Ze, {
                                  cnmC5Fcv3: ``,
                                  height: `100%`,
                                  id: `uHRNutsHR`,
                                  layoutId: `uHRNutsHR`,
                                  ozwymgRRr: `Curious What It Could Look Like for You?`,
                                  RdjxmeNva: !1,
                                  style: { width: `100%` },
                                  variant: `yF5sJ1EZX`,
                                  wFZKLluPy: !0,
                                  width: `100%`,
                                  X9lKcP8kK: $(
                                    {
                                      pixelHeight: 853,
                                      pixelWidth: 1280,
                                      src: `https://framerusercontent.com/images/RJpBrVrDikwjeoNE7IYyJubPZOo.jpg?width=1280&height=853`,
                                      srcSet: `https://framerusercontent.com/images/RJpBrVrDikwjeoNE7IYyJubPZOo.jpg?scale-down-to=512&width=1280&height=853 512w,https://framerusercontent.com/images/RJpBrVrDikwjeoNE7IYyJubPZOo.jpg?scale-down-to=1024&width=1280&height=853 1024w,https://framerusercontent.com/images/RJpBrVrDikwjeoNE7IYyJubPZOo.jpg?width=1280&height=853 1280w`,
                                    },
                                    ``,
                                  ),
                                  ygqFj7LXe: `Let’s Talk`,
                                  ZYcVIgbyh: !0,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(j, {
                      children: c(F, {
                        className: `framer-i6orcp-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: v,
                        nodeId: `qsoRbvv_K`,
                        scopeId: `Tykwfmrh9`,
                        children: c(Fe, {
                          height: `100%`,
                          id: `qsoRbvv_K`,
                          intensity: 10,
                          layoutId: `qsoRbvv_K`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kLrnJ.framer-1o19pzx, .framer-kLrnJ .framer-1o19pzx { display: block; }`,
        `.framer-kLrnJ.framer-vi8wzu { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-kLrnJ .framer-r64ktw { align-content: center; align-items: center; background-color: var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, #f5f5f5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1fvpdiu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 110px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1oiefzv { align-content: center; align-items: center; background-color: #f5f5f5; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-kLrnJ .framer-lqn7yg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1ql8g35 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 90px 36px 36px 36px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-kLrnJ .framer-1jcyo7z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-aaitt3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1sh00pt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1wmng9p { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1ybzg1h { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 1120px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-kLrnJ .framer-iut6wr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kLrnJ .framer-g1jp4l-container { flex: none; height: 53px; position: relative; width: 31px; }`,
        `.framer-kLrnJ .framer-1ieimu9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-kLrnJ .framer-17avexy { align-content: center; align-items: center; background-color: var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, #0a0a0a); bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-kLrnJ .framer-fczfoj { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-kLrnJ .framer-1fiu94w { background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgb(13, 13, 13) 100%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-kLrnJ .framer-3lxjig, .framer-kLrnJ .framer-115dacl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-f9ik20, .framer-kLrnJ .framer-u21vw2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 36px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1ps35tk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-wadix0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1xkjjme { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-ws6kem { flex: none; height: 48px; position: relative; width: 48px; }`,
        `.framer-kLrnJ .framer-111ussm, .framer-kLrnJ .framer-3jxcy6, .framer-kLrnJ .framer-1a6y6hx, .framer-kLrnJ .framer-ngz2lu, .framer-kLrnJ .framer-1a2ojdo, .framer-kLrnJ .framer-10onxlv { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kLrnJ .framer-1odt7u5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1tbu556, .framer-kLrnJ .framer-5uw7qe, .framer-kLrnJ .framer-w10hl1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1t14es9, .framer-kLrnJ .framer-pin9g5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-e4aze6, .framer-kLrnJ .framer-1373c6i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1ax05h0, .framer-kLrnJ .framer-tsguh4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1s2okdc, .framer-kLrnJ .framer-uwun66 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 30%; }`,
        `.framer-kLrnJ .framer-qok6oq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 316px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-w067iy, .framer-kLrnJ .framer-4bnbkh, .framer-kLrnJ .framer-389tcg, .framer-kLrnJ .framer-9dd4av, .framer-kLrnJ .framer-1sxmkj6, .framer-kLrnJ .framer-apoi0c { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-w7n5j5, .framer-kLrnJ .framer-zpv0xv, .framer-kLrnJ .framer-lppser, .framer-kLrnJ .framer-1rytmsm, .framer-kLrnJ .framer-miwh5i, .framer-kLrnJ .framer-42xm76 { align-content: flex-start; align-items: flex-start; background-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 30px 20px 30px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kLrnJ .framer-ocw01f, .framer-kLrnJ .framer-4banr5, .framer-kLrnJ .framer-1lcbz86, .framer-kLrnJ .framer-u06q2w, .framer-kLrnJ .framer-n69zry, .framer-kLrnJ .framer-1w8fn9c { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-ak278n, .framer-kLrnJ .framer-l2bg92, .framer-kLrnJ .framer-1f5eqt9, .framer-kLrnJ .framer-b2hw0u, .framer-kLrnJ .framer-lie60a, .framer-kLrnJ .framer-wej3pm, .framer-kLrnJ .framer-15dnw70, .framer-kLrnJ .framer-r7t8yw, .framer-kLrnJ .framer-1xte7z7, .framer-kLrnJ .framer-8c6okx, .framer-kLrnJ .framer-qhac3v, .framer-kLrnJ .framer-1cuz2mf, .framer-kLrnJ .framer-irlb42, .framer-kLrnJ .framer-14x77iq, .framer-kLrnJ .framer-1byvvrc, .framer-kLrnJ .framer-1cr4usx, .framer-kLrnJ .framer-uiv4re, .framer-kLrnJ .framer-l6o7ij, .framer-kLrnJ .framer-81a26f, .framer-kLrnJ .framer-7fzkp8, .framer-kLrnJ .framer-1nds4mp { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kLrnJ .framer-1sfqxsf, .framer-kLrnJ .framer-ua0g69, .framer-kLrnJ .framer-1nh45a3, .framer-kLrnJ .framer-1cm8aoa, .framer-kLrnJ .framer-d8fkus, .framer-kLrnJ .framer-6zlc8y { align-content: flex-start; align-items: flex-start; background-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 60px 20px 60px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kLrnJ .framer-1n5vbqr, .framer-kLrnJ .framer-1708d8m, .framer-kLrnJ .framer-wylvyn, .framer-kLrnJ .framer-1kii7zq, .framer-kLrnJ .framer-ito6ab { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-d7xuqm, .framer-kLrnJ .framer-1c4oimu, .framer-kLrnJ .framer-1xku5x5, .framer-kLrnJ .framer-gky7o9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-17jrnr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-mou9do { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: flex-start; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-v7nhx2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-13vn86j { align-content: flex-end; align-items: flex-end; background-color: var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, #0a0a0a); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 85vh; justify-content: space-between; overflow: hidden; padding: 30px 0px 60px 0px; position: sticky; top: 70px; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-kLrnJ .framer-1edynp9 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-kLrnJ .framer-mspldt { background: linear-gradient(180deg, rgba(97, 97, 97, 0) 0%, rgb(13, 13, 13) 100%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-kLrnJ .framer-163yihr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 30px; transform: translateX(-50%); width: 86%; z-index: 1; }`,
        `.framer-kLrnJ .framer-11dtqki, .framer-kLrnJ .framer-1tn840l { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-13awkiz { align-content: center; align-items: center; bottom: 73px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; transform: translateX(-50%); width: 86%; z-index: 1; }`,
        `.framer-kLrnJ .framer-1ih2txw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 60%; }`,
        `.framer-kLrnJ .framer-nwxpf1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 85vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1fjvxqc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-26dsmx, .framer-kLrnJ .framer-yltehs { --border-bottom-width: 1px; --border-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; padding: 10px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1093fml, .framer-kLrnJ .framer-1u5qf98, .framer-kLrnJ .framer-db1rel, .framer-kLrnJ .framer-ewnyw8, .framer-kLrnJ .framer-y0clms, .framer-kLrnJ .framer-1x0v07z, .framer-kLrnJ .framer-ccuktn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-kyuypc, .framer-kLrnJ .framer-10j3pjx, .framer-kLrnJ .framer-1dp0gk8, .framer-kLrnJ .framer-r5oufi, .framer-kLrnJ .framer-1ls5qzi, .framer-kLrnJ .framer-9qt3r9, .framer-kLrnJ .framer-54v7r3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1ydhr2h, .framer-kLrnJ .framer-1yfqg8i, .framer-kLrnJ .framer-vff8er, .framer-kLrnJ .framer-17wcw3a, .framer-kLrnJ .framer-2u4vfo { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1oexzpu-container { flex: none; height: 104px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-56u1vg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kLrnJ .framer-iwk4rv { aspect-ratio: 0.9030611310686384 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 63px; }`,
        `.framer-kLrnJ .framer-ujjb3o { aspect-ratio: 1.008368153725901 / 1; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: var(--framer-aspect-ratio-supported, 62px); position: relative; width: 63px; }`,
        `.framer-kLrnJ .framer-1uh05l0, .framer-kLrnJ .framer-14ej4uv, .framer-kLrnJ .framer-13f983i, .framer-kLrnJ .framer-1d2zhxg, .framer-kLrnJ .framer-udytv2, .framer-kLrnJ .framer-17llu0f { aspect-ratio: 1 / 1; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: var(--framer-aspect-ratio-supported, 62px); position: relative; width: 62px; }`,
        `.framer-kLrnJ .framer-14z4wzf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kLrnJ .framer-1ihwgdf { aspect-ratio: 3.9628484389361214 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); position: relative; width: 135px; }`,
        `.framer-kLrnJ .framer-1jknmxh { aspect-ratio: 3.266932437294408 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); position: relative; width: 124px; }`,
        `.framer-kLrnJ .framer-12g9i4f, .framer-kLrnJ .framer-1hhfqby { --border-bottom-width: 1px; --border-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; padding: 10px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-3sh2hi { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; gap: 0px; height: 205px; overflow: hidden; position: relative; width: 240px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kLrnJ .framer-1k2m2vi { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; opacity: 0.6; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-f2ytd8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 437px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-60c1wr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1tfyzeq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 243px; }`,
        `.framer-kLrnJ .framer-edawgt { aspect-ratio: 1 / 1; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 180px); position: relative; width: 180px; }`,
        `.framer-kLrnJ .framer-e02ynd, .framer-kLrnJ .framer-2lyuqi, .framer-kLrnJ .framer-1so9i6g, .framer-kLrnJ .framer-7d9zf4, .framer-kLrnJ .framer-vcsbbm, .framer-kLrnJ .framer-12a4lnj, .framer-kLrnJ .framer-1540u8, .framer-kLrnJ .framer-1dzkhq9, .framer-kLrnJ .framer-w4ehph, .framer-kLrnJ .framer-3pdeli { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1nb4rr, .framer-kLrnJ .framer-erlnp6, .framer-kLrnJ .framer-1xel9xn, .framer-kLrnJ .framer-1msb4p4, .framer-kLrnJ .framer-crdbj4, .framer-kLrnJ .framer-k3jjq4, .framer-kLrnJ .framer-19tc7iq, .framer-kLrnJ .framer-14u3fu1, .framer-kLrnJ .framer-vk9zxi, .framer-kLrnJ .framer-1q3ed41, .framer-kLrnJ .framer-1xyybzv { flex: none; height: 32px; position: relative; width: 32px; }`,
        `.framer-kLrnJ .framer-1ux5hus { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-ku375j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-tj1p14, .framer-kLrnJ .framer-mk0vmu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1276yml { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-saza2j, .framer-kLrnJ .framer-yxfetu, .framer-kLrnJ .framer-1un1dzc { --framer-paragraph-spacing: 0px; cursor: text; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kLrnJ .framer-1dc2d3f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1yxglbq-container { flex: none; height: 12px; position: relative; width: 56px; }`,
        `.framer-kLrnJ .framer-1xj0icl-container { flex: none; height: 16px; opacity: 0.3; position: relative; width: 16px; }`,
        `.framer-kLrnJ .framer-1r7ai21 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1k50b5f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-17zxak0 { aspect-ratio: 1 / 1; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; flex: none; height: var(--framer-aspect-ratio-supported, 46px); position: relative; width: 46px; }`,
        `.framer-kLrnJ .framer-1ocop92 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-25due9 { --framer-paragraph-spacing: 0px; cursor: text; flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kLrnJ .framer-q9l9n9 { align-content: center; align-items: center; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kLrnJ .framer-s3b482 { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-kLrnJ .framer-1yo7ged { aspect-ratio: 1.6584122359796067 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 680px); overflow: visible; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-a6s76c-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 2; }`,
        `.framer-kLrnJ .framer-s4nwwd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 435px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1lzg5c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 30%; }`,
        `.framer-kLrnJ .framer-zcl6v0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kLrnJ .framer-1uifmtr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-5s7xn2 { display: grid; flex: none; gap: 4px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-7rln2k-container, .framer-kLrnJ .framer-16i3i73-container, .framer-kLrnJ .framer-1o0sc9w-container, .framer-kLrnJ .framer-wqpv8s-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-1tgxuhj-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kLrnJ .framer-i6orcp-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...ht,
        ...ct,
        ...et,
        ...it,
        ...Ge,
        ...Le,
        ...mt,
        ...bt,
        ...Ve,
        ...On,
        `.framer-kLrnJ[data-border="true"]::after, .framer-kLrnJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-kLrnJ.framer-vi8wzu { width: 810px; } .framer-kLrnJ .framer-1fvpdiu { gap: 100px; } .framer-kLrnJ .framer-1jcyo7z { gap: 20px; } .framer-kLrnJ .framer-f9ik20, .framer-kLrnJ .framer-u21vw2 { flex-direction: column; gap: 60px; padding: 64px 30px 0px 30px; } .framer-kLrnJ .framer-1ps35tk, .framer-kLrnJ .framer-qok6oq, .framer-kLrnJ .framer-mk0vmu { flex: none; width: 100%; } .framer-kLrnJ .framer-1odt7u5 { gap: 40px; } .framer-kLrnJ .framer-1tbu556, .framer-kLrnJ .framer-17jrnr, .framer-kLrnJ .framer-5uw7qe, .framer-kLrnJ .framer-w10hl1 { padding: 0px 30px 0px 30px; } .framer-kLrnJ .framer-1t14es9, .framer-kLrnJ .framer-e4aze6, .framer-kLrnJ .framer-mou9do, .framer-kLrnJ .framer-pin9g5, .framer-kLrnJ .framer-1373c6i { gap: 60px; } .framer-kLrnJ .framer-1ax05h0, .framer-kLrnJ .framer-v7nhx2, .framer-kLrnJ .framer-tsguh4 { flex-direction: column; } .framer-kLrnJ .framer-1s2okdc, .framer-kLrnJ .framer-uwun66 { gap: 21px; width: 100%; } .framer-kLrnJ .framer-w7n5j5, .framer-kLrnJ .framer-1sfqxsf, .framer-kLrnJ .framer-ua0g69, .framer-kLrnJ .framer-zpv0xv, .framer-kLrnJ .framer-lppser, .framer-kLrnJ .framer-1nh45a3, .framer-kLrnJ .framer-1cm8aoa, .framer-kLrnJ .framer-1rytmsm, .framer-kLrnJ .framer-miwh5i, .framer-kLrnJ .framer-d8fkus, .framer-kLrnJ .framer-42xm76, .framer-kLrnJ .framer-6zlc8y { padding: 24px; } .framer-kLrnJ .framer-13vn86j { flex: none; height: 550px; padding: 24px 0px 40px 0px; position: relative; top: unset; width: 100%; } .framer-kLrnJ .framer-1ih2txw, .framer-kLrnJ .framer-1lzg5c { width: 100%; } .framer-kLrnJ .framer-nwxpf1 { height: 645px; } .framer-kLrnJ .framer-1093fml, .framer-kLrnJ .framer-1u5qf98, .framer-kLrnJ .framer-db1rel, .framer-kLrnJ .framer-ewnyw8, .framer-kLrnJ .framer-y0clms, .framer-kLrnJ .framer-1x0v07z, .framer-kLrnJ .framer-60c1wr, .framer-kLrnJ .framer-ccuktn { padding: 14px; } .framer-kLrnJ .framer-f2ytd8, .framer-kLrnJ .framer-ku375j { height: 384px; } .framer-kLrnJ .framer-1ux5hus { align-content: center; align-items: center; } .framer-kLrnJ .framer-1276yml, .framer-kLrnJ .framer-ito6ab { order: 0; } .framer-kLrnJ .framer-1dc2d3f, .framer-kLrnJ .framer-1r7ai21 { order: 1; } .framer-kLrnJ .framer-1yo7ged { height: var(--framer-aspect-ratio-supported, 452px); } .framer-kLrnJ .framer-s4nwwd { flex: none; height: 352px; width: 100%; } .framer-kLrnJ .framer-zcl6v0 { gap: 21px; } .framer-kLrnJ .framer-10onxlv { max-width: 550px; }}`,
        `@media (max-width: 809.98px) { .framer-kLrnJ.framer-vi8wzu { width: 390px; } .framer-kLrnJ .framer-1fvpdiu { gap: 50px; } .framer-kLrnJ .framer-1ql8g35 { padding: 54px 20px 48px 20px; } .framer-kLrnJ .framer-f9ik20, .framer-kLrnJ .framer-u21vw2 { flex-direction: column; gap: 36px; padding: 36px 20px 0px 20px; } .framer-kLrnJ .framer-1ps35tk { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 42px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); } .framer-kLrnJ .framer-wadix0 { flex: none; justify-content: flex-start; width: 100%; } .framer-kLrnJ .framer-111ussm { --framer-text-wrap-override: balance; } .framer-kLrnJ .framer-1odt7u5 { flex: none; gap: 40px; width: 100%; } .framer-kLrnJ .framer-1tbu556, .framer-kLrnJ .framer-17jrnr, .framer-kLrnJ .framer-5uw7qe, .framer-kLrnJ .framer-w10hl1 { padding: 0px 20px 0px 20px; } .framer-kLrnJ .framer-1t14es9, .framer-kLrnJ .framer-pin9g5 { gap: 36px; } .framer-kLrnJ .framer-e4aze6, .framer-kLrnJ .framer-1373c6i { flex-direction: column; gap: 40px; } .framer-kLrnJ .framer-1ax05h0, .framer-kLrnJ .framer-tsguh4 { flex: none; flex-direction: column; order: 0; width: 100%; } .framer-kLrnJ .framer-1s2okdc, .framer-kLrnJ .framer-uwun66 { align-content: flex-end; align-items: flex-end; gap: 14px; width: 100%; } .framer-kLrnJ .framer-1a6y6hx, .framer-kLrnJ .framer-1a2ojdo { order: 0; } .framer-kLrnJ .framer-ngz2lu { order: 1; } .framer-kLrnJ .framer-qok6oq, .framer-kLrnJ .framer-s4nwwd { flex: none; flex-direction: column; height: min-content; width: 100%; } .framer-kLrnJ .framer-w067iy, .framer-kLrnJ .framer-4bnbkh, .framer-kLrnJ .framer-389tcg, .framer-kLrnJ .framer-9dd4av { flex: none; flex-direction: row; height: min-content; width: 100%; } .framer-kLrnJ .framer-w7n5j5, .framer-kLrnJ .framer-zpv0xv, .framer-kLrnJ .framer-lppser, .framer-kLrnJ .framer-1rytmsm { align-content: center; align-items: center; align-self: stretch; height: auto; padding: 24px; width: 38%; } .framer-kLrnJ .framer-1sfqxsf, .framer-kLrnJ .framer-ua0g69, .framer-kLrnJ .framer-1nh45a3, .framer-kLrnJ .framer-1cm8aoa { height: min-content; padding: 24px; width: 1px; } .framer-kLrnJ .framer-mou9do { gap: 40px; } .framer-kLrnJ .framer-v7nhx2, .framer-kLrnJ .framer-ku375j { flex-direction: column; } .framer-kLrnJ .framer-13vn86j { flex: none; height: 430px; padding: 30px 0px 30px 0px; position: relative; top: unset; width: 100%; } .framer-kLrnJ .framer-1ih2txw { width: 100%; } .framer-kLrnJ .framer-nwxpf1, .framer-kLrnJ .framer-f2ytd8 { flex-direction: column; height: min-content; } .framer-kLrnJ .framer-1fjvxqc, .framer-kLrnJ .framer-1sxmkj6, .framer-kLrnJ .framer-apoi0c { flex: none; height: min-content; width: 100%; } .framer-kLrnJ .framer-26dsmx, .framer-kLrnJ .framer-yltehs { flex: none; height: 259px; } .framer-kLrnJ .framer-12g9i4f { flex: none; height: 551px; width: 100%; } .framer-kLrnJ .framer-1hhfqby { flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; } .framer-kLrnJ .framer-60c1wr { flex-direction: column; gap: 25px; justify-content: flex-start; } .framer-kLrnJ .framer-ccuktn { padding: 20px 0px 20px 0px; } .framer-kLrnJ .framer-e02ynd, .framer-kLrnJ .framer-2lyuqi { align-content: flex-start; align-items: flex-start; } .framer-kLrnJ .framer-tj1p14 { flex: none; width: 100%; } .framer-kLrnJ .framer-1276yml { order: 0; padding: 24px; } .framer-kLrnJ .framer-1r7ai21 { order: 1; padding: 24px; } .framer-kLrnJ .framer-q9l9n9 { border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; } .framer-kLrnJ .framer-1yo7ged { aspect-ratio: unset; height: 80vh; } .framer-kLrnJ .framer-miwh5i, .framer-kLrnJ .framer-42xm76 { align-content: center; align-items: center; padding: 24px; } .framer-kLrnJ .framer-d8fkus, .framer-kLrnJ .framer-6zlc8y { flex: none; height: min-content; padding: 32px 20px 32px 20px; } .framer-kLrnJ .framer-1lzg5c { flex-direction: column; gap: 16px; width: 100%; } .framer-kLrnJ .framer-zcl6v0 { flex: none; gap: 26px; order: 0; width: 100%; } .framer-kLrnJ .framer-1uifmtr { gap: 18px; order: 0; } .framer-kLrnJ .framer-mk0vmu { flex: none; gap: 20px; width: 100%; } .framer-kLrnJ .framer-5s7xn2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; } .framer-kLrnJ .framer-7rln2k-container, .framer-kLrnJ .framer-16i3i73-container, .framer-kLrnJ .framer-1o0sc9w-container, .framer-kLrnJ .framer-wqpv8s-container { align-self: unset; }}`,
      ],
      `framer-kLrnJ`,
    )),
    (or = ar),
    (ar.displayName = `Home`),
    (ar.defaultProps = { height: 6955, width: 1200 }),
    pe(
      ar,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
              weight: `600`,
            },
          ],
        },
        ...jn,
        ...Fn,
        ...In,
        ...Ln,
        ...Rn,
        ...zn,
        ...Vn,
        ...Hn,
        ...S(_t),
        ...S(lt),
        ...S(tt),
        ...S(at),
        ...S(Ke),
        ...S(Re),
        ...S(gt),
        ...S(xt),
        ...S(He),
        ...S(Dn),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (sr = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerTykwfmrh9`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"P9BY2bKka":{"layout":["fixed","auto"]},"HreCASfWI":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `6955`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"cdVK2NtsZ":{"pattern":":cdVK2NtsZ","name":"hero"},"xIwgNt6sV":{"pattern":":xIwgNt6sV","name":"narration"}}`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { sr as __FramerMetadata__, or as default };
//# sourceMappingURL=ScACVNdGwy8TIip6mAZBfcspvAW8d9jwhfR_YElDSxE.BIOqJAc3.mjs.map
