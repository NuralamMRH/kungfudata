import { t as e } from "./rolldown-runtime.D1deASqF.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  l as _,
  n as v,
  o as y,
  r as b,
  t as x,
  u as S,
  w as C,
  y as ee,
  z as w,
} from "./react.DJ7UgqC4.mjs";
import { S as T, a as E, r as te, t as D } from "./motion.D2KMUwms.mjs";
import {
  $ as O,
  C as ne,
  D as k,
  Dt as A,
  Et as re,
  G as j,
  I as M,
  K as N,
  L as P,
  M as F,
  Mt as ie,
  N as I,
  Nt as ae,
  O as L,
  Ot as oe,
  Q as R,
  S as se,
  T as z,
  Tt as ce,
  U as B,
  X as le,
  Z as ue,
  _ as V,
  a as H,
  b as U,
  ct as de,
  et as W,
  ft as fe,
  g as pe,
  h as me,
  ht as he,
  it as ge,
  j as G,
  jt as _e,
  k as K,
  lt as ve,
  mt as ye,
  nt as be,
  o as q,
  ot as xe,
  pt as Se,
  q as Ce,
  s as J,
  u as we,
  ut as Te,
  v as Ee,
  vt as Y,
  wt as De,
  y as Oe,
} from "./framer.BLOKjrOc.mjs";
import { n as ke, t as Ae } from "./BvyOYDKED.DPX9IITB.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./fDRzSjw63.BYT-T-5s.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./ypR5VEWEl.DLYPVSQ5.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./fDRzSjw63.DrDgtLRP.mjs";
import { i as Ue, n as We, r as Ge, t as Ke } from "./ypR5VEWEl.BoRLEnJo.mjs";
function qe({ blur: e, borderRadius: t, direction: n, transition: r }) {
  return f(`div`, {
    style: { position: `absolute`, inset: 0, overflow: `hidden` },
    children: g(
      () => [
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
        },
        {
          blur: `${e / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
        },
        {
          blur: `${e / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
        },
        {
          blur: `${e / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
        {
          blur: `${e}px`,
          gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
      ],
      [e],
    ).map((e, i) =>
      f(
        T.div,
        {
          transition: r,
          initial: { backdropFilter: `blur(${e.blur})` },
          animate: { backdropFilter: `blur(${e.blur})` },
          style: {
            opacity: 1,
            position: `absolute`,
            inset: 0,
            zIndex: i + 1,
            maskImage: `linear-gradient(${n}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${n}, ${e.gradient})`,
            borderRadius: t,
            pointerEvents: `none`,
          },
        },
        i,
      ),
    ),
  });
}
var Je,
  Ye = e(() => {
    (y(),
      C(),
      D(),
      R(),
      (qe.defaultProps = {
        blur: 10,
        borderRadius: `0px`,
        direction: `toBottom`,
        transition: { duration: 0.3 },
      }),
      I(qe, {
        blur: {
          title: `Blur`,
          type: J.Number,
          defaultValue: 10,
          min: 0,
          max: 100,
          step: 1,
          description: `Large blur values (10<) can impact performance.`,
        },
        borderRadius: {
          title: `Radius`,
          type: J.BorderRadius,
          defaultValue: `0px`,
          description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
        },
        direction: {
          title: `Direction`,
          type: J.SegmentedEnum,
          options: [`to bottom`, `to top`, `to left`, `to right`],
          optionTitles: [`↓`, `↑`, `←`, `→`],
          defaultValue: `to bottom`,
        },
        transition: {
          type: J.Transition,
          defaultValue: { duration: 0.3 },
          title: `Transition`,
          description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (qe.displayName = `Blur Gradient`),
      (Je = qe));
  }),
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    (R(),
      P.loadFonts([]),
      (Xe = [{ explicitInter: !0, fonts: [] }]),
      (Ze = [
        `.framer-m9VkI .framer-styles-preset-1wi7vce:not(.rich-text-wrapper), .framer-m9VkI .framer-styles-preset-1wi7vce.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: rgba(10, 10, 10, 0.8); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, #0a0a0a); --framer-link-text-decoration: none; transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1) 0s; }`,
      ]),
      (Qe = `framer-m9VkI`));
  });
function et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft = e(() => {
    (y(),
      R(),
      D(),
      C(),
      (tt = [`qlBMBxhJm`, `ZgplB38uO`]),
      (nt = `framer-d16yv`),
      (rt = { qlBMBxhJm: `framer-v-1qd80pl`, ZgplB38uO: `framer-v-4fzt3a` }),
      (it = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (at = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (ot = T.create(s)),
      (st = { Closed: `qlBMBxhJm`, Open: `ZgplB38uO` }),
      (ct = ({ click: e, fill: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        a5fwr9Mpw: e ?? a.a5fwr9Mpw,
        variant: st[a.variant] ?? a.variant ?? `qlBMBxhJm`,
        vbuH9vt2H:
          t ??
          a.vbuH9vt2H ??
          `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
      })),
      (lt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ut = A(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = Y();
          Te();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              a5fwr9Mpw: p,
              vbuH9vt2H: m,
              ...h
            } = ct(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = re({
              cycleOrder: tt,
              defaultVariant: `qlBMBxhJm`,
              ref: r,
              variant: d,
              variantClassNames: rt,
            }),
            D = lt(e, E),
            { activeVariantCallback: O, delay: ne } = ve(g),
            k = O(async (...e) => {
              if ((C({ isPressed: !1 }), p && (await p(...e)) === !1))
                return !1;
            }),
            A = M(nt);
          return f(te, {
            id: u ?? i,
            children: f(ot, {
              animate: E,
              initial: !1,
              children: f(at, {
                value: it,
                children: _(T.div, {
                  ...h,
                  ...b,
                  className: M(A, `framer-1qd80pl`, l, v),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `qlBMBxhJm`,
                  onTap: k,
                  ref: r,
                  style: { ...c },
                  ...et({ ZgplB38uO: { "data-framer-name": `Open` } }, g, x),
                  children: [
                    f(T.div, {
                      className: `framer-1jxc6iw`,
                      layoutDependency: D,
                      layoutId: `Rk56ZTEje`,
                      style: { backgroundColor: m, rotate: 0 },
                      variants: { ZgplB38uO: { rotate: 10 } },
                    }),
                    f(T.div, {
                      className: `framer-qxejnu`,
                      layoutDependency: D,
                      layoutId: `UJhjTMNAx`,
                      style: { backgroundColor: m, rotate: 0 },
                      variants: { ZgplB38uO: { rotate: -10 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-d16yv.framer-spcvwu, .framer-d16yv .framer-spcvwu { display: block; }`,
          `.framer-d16yv.framer-1qd80pl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-d16yv .framer-1jxc6iw, .framer-d16yv .framer-qxejnu { flex: none; height: 2px; overflow: hidden; position: relative; width: 59px; }`,
          `.framer-d16yv.framer-v-4fzt3a.framer-1qd80pl { min-height: 12px; min-width: 59px; }`,
          `.framer-d16yv.framer-v-4fzt3a .framer-1jxc6iw, .framer-d16yv.framer-v-4fzt3a .framer-qxejnu { left: 0px; position: absolute; right: 0px; top: calc(50.00000000000002% - 2px / 2); width: unset; z-index: 1; }`,
        ],
        `framer-d16yv`,
      )),
      (dt = ut),
      (ut.displayName = `Hamburger`),
      (ut.defaultProps = { height: 12, width: 59 }),
      I(ut, {
        variant: {
          options: [`qlBMBxhJm`, `ZgplB38uO`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: J.Enum,
        },
        a5fwr9Mpw: { title: `Click`, type: J.EventHandler },
        vbuH9vt2H: {
          defaultValue: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
          title: `Fill`,
          type: J.Color,
        },
      }),
      F(ut, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St = e(() => {
    (y(),
      R(),
      D(),
      C(),
      (pt = `framer-p35K2`),
      (mt = { QlYLpH2Pm: `framer-v-7g0p1o` }),
      (ht = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gt = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (_t = T.create(s)),
      (vt = ({
        color: e,
        height: t,
        id: n,
        link: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        OKr5AJd5k: r ?? o.OKr5AJd5k,
        wSDtEcD_o: i ?? o.wSDtEcD_o ?? `Title`,
        YcbtSTF5J: e ?? o.YcbtSTF5J ?? `rgb(9, 9, 9)`,
      })),
      (yt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (bt = A(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: c } = Y();
          Te();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              wSDtEcD_o: m,
              OKr5AJd5k: h,
              YcbtSTF5J: g,
              ..._
            } = vt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: E,
              variants: D,
            } = re({
              defaultVariant: `QlYLpH2Pm`,
              ref: r,
              variant: p,
              variantClassNames: mt,
            }),
            O = yt(e, D),
            ne = M(pt);
          return f(te, {
            id: d ?? i,
            children: f(_t, {
              animate: D,
              initial: !1,
              children: f(gt, {
                value: ht,
                children: f(U, {
                  href: h,
                  motionChild: !0,
                  nodeId: `QlYLpH2Pm`,
                  scopeId: `ebExugia5`,
                  smoothScroll: !1,
                  children: f(T.a, {
                    ..._,
                    ...x,
                    className: `${M(ne, `framer-7g0p1o`, u, y)} framer-1ljdjoh`,
                    "data-framer-name": `Default`,
                    layoutDependency: O,
                    layoutId: `QlYLpH2Pm`,
                    ref: r,
                    style: { ...l },
                    children: f(K, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(T.p, {
                          style: {
                            "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                            "--framer-font-weight": `600`,
                            "--framer-letter-spacing": `-0.04em`,
                            "--framer-line-height": `110%`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-YcbtSTF5J-ebExugia5))`,
                          },
                          children: `Title`,
                        }),
                      }),
                      className: `framer-xu6ifz`,
                      fonts: [`Inter-SemiBold`],
                      layoutDependency: O,
                      layoutId: `Kfo0arB2u`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-YcbtSTF5J-ebExugia5)`,
                        "--framer-paragraph-spacing": `0px`,
                        "--variable-reference-YcbtSTF5J-ebExugia5": g,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-p35K2.framer-1ljdjoh, .framer-p35K2 .framer-1ljdjoh { display: block; }`,
          `.framer-p35K2.framer-7g0p1o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-p35K2 .framer-xu6ifz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-p35K2`,
      )),
      (xt = bt),
      (bt.displayName = `Menu item`),
      (bt.defaultProps = { height: 18, width: 31 }),
      I(bt, {
        wSDtEcD_o: {
          defaultValue: `Title`,
          displayTextArea: !1,
          title: `Title`,
          type: J.String,
        },
        OKr5AJd5k: { title: `Link`, type: J.Link },
        YcbtSTF5J: {
          defaultValue: `rgb(9, 9, 9)`,
          title: `Color`,
          type: J.Color,
        },
      }),
      F(
        bt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It = e(() => {
    (y(),
      R(),
      D(),
      C(),
      (wt = { Ejf5a8hFM: { hover: !0 } }),
      (Tt = [`Ejf5a8hFM`, `a6v_JP5sV`, `sUHgiwMqj`]),
      (Et = `framer-UA3k2`),
      (Dt = {
        a6v_JP5sV: `framer-v-1cjh3ku`,
        Ejf5a8hFM: `framer-v-14ac7s4`,
        sUHgiwMqj: `framer-v-1h77cpm`,
      }),
      (Ot = { bounce: 0.35, delay: 0, duration: 0.39, type: `spring` }),
      (kt = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (At = T.create(s)),
      (jt = { Desktop: `Ejf5a8hFM`, Phone: `sUHgiwMqj`, Tablet: `a6v_JP5sV` }),
      (Mt = ({
        click: e,
        color: t,
        height: n,
        id: r,
        link: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        bylJ3Zujd:
          t ??
          s.bylJ3Zujd ??
          `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
        LIy6SD5oa: e ?? s.LIy6SD5oa,
        RLreA9jcP: a ?? s.RLreA9jcP ?? `Title`,
        sEL51lU82: i ?? s.sEL51lU82,
        variant: jt[s.variant] ?? s.variant ?? `Ejf5a8hFM`,
      })),
      (Nt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Pt = A(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: c } = Y();
          Te();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              RLreA9jcP: m,
              sEL51lU82: h,
              LIy6SD5oa: g,
              bylJ3Zujd: v,
              ...y
            } = Mt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: ne,
            } = re({
              cycleOrder: Tt,
              defaultVariant: `Ejf5a8hFM`,
              enabledGestures: wt,
              ref: r,
              variant: p,
              variantClassNames: Dt,
            }),
            k = Nt(e, ne),
            { activeVariantCallback: A, delay: j } = ve(b),
            N = A(async (...e) => {
              if ((D({ isPressed: !1 }), g && (await g(...e)) === !1))
                return !1;
            }),
            P = M(Et),
            F = () => ![`a6v_JP5sV`, `sUHgiwMqj`].includes(b);
          return f(te, {
            id: d ?? i,
            children: f(At, {
              animate: ne,
              initial: !1,
              children: f(kt, {
                value: Ot,
                children: f(U, {
                  href: h,
                  motionChild: !0,
                  nodeId: `Ejf5a8hFM`,
                  scopeId: `k3VRpAwZb`,
                  smoothScroll: !0,
                  children: _(T.a, {
                    ...y,
                    ...C,
                    className: `${M(P, `framer-14ac7s4`, u, x)} framer-1435c2t`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `Ejf5a8hFM`,
                    onTap: N,
                    ref: r,
                    style: { ...l },
                    ...Ct(
                      {
                        "Ejf5a8hFM-hover": { "data-framer-name": void 0 },
                        a6v_JP5sV: { "data-framer-name": `Tablet` },
                        sUHgiwMqj: { "data-framer-name": `Phone` },
                      },
                      b,
                      w,
                    ),
                    children: [
                      f(K, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(T.p, {
                            style: {
                              "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                              "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                              "--framer-font-size": `60px`,
                              "--framer-font-weight": `600`,
                              "--framer-letter-spacing": `-0.06em`,
                              "--framer-line-height": `120%`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-bylJ3Zujd-k3VRpAwZb))`,
                            },
                            children: `Title`,
                          }),
                        }),
                        className: `framer-ggkluq`,
                        fonts: [`Inter-SemiBold`],
                        layoutDependency: k,
                        layoutId: `IxsOzOSNq`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-bylJ3Zujd-k3VRpAwZb)`,
                          "--framer-paragraph-spacing": `0px`,
                          "--variable-reference-bylJ3Zujd-k3VRpAwZb": v,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ct(
                          {
                            a6v_JP5sV: {
                              children: f(s, {
                                children: f(T.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `42px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.06em`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-bylJ3Zujd-k3VRpAwZb))`,
                                  },
                                  children: `Title`,
                                }),
                              }),
                            },
                            sUHgiwMqj: {
                              children: f(s, {
                                children: f(T.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `32px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.06em`,
                                    "--framer-line-height": `120%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-bylJ3Zujd-k3VRpAwZb))`,
                                  },
                                  children: `Title`,
                                }),
                              }),
                            },
                          },
                          b,
                          w,
                        ),
                      }),
                      F() &&
                        f(K, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(T.p, {
                              style: {
                                "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                "--framer-font-size": `60px`,
                                "--framer-font-weight": `600`,
                                "--framer-letter-spacing": `-0.06em`,
                                "--framer-line-height": `120%`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-bylJ3Zujd-k3VRpAwZb))`,
                              },
                              children: `Title`,
                            }),
                          }),
                          className: `framer-8k52a7`,
                          fonts: [`Inter-SemiBold`],
                          layoutDependency: k,
                          layoutId: `z1SjKvY6D`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-bylJ3Zujd-k3VRpAwZb)`,
                            "--framer-paragraph-spacing": `0px`,
                            "--variable-reference-bylJ3Zujd-k3VRpAwZb": v,
                          },
                          text: m,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-UA3k2.framer-1435c2t, .framer-UA3k2 .framer-1435c2t { display: block; }`,
          `.framer-UA3k2.framer-14ac7s4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 3px 0px 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-UA3k2 .framer-ggkluq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-UA3k2 .framer-8k52a7 { bottom: -90px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-UA3k2.framer-v-14ac7s4.hover .framer-ggkluq { left: 0px; position: absolute; top: -90px; z-index: 1; }`,
          `.framer-UA3k2.framer-v-14ac7s4.hover .framer-8k52a7 { bottom: unset; left: unset; position: relative; }`,
        ],
        `framer-UA3k2`,
      )),
      (Ft = Pt),
      (Pt.displayName = `Menu item large`),
      (Pt.defaultProps = { height: 72, width: 113 }),
      I(Pt, {
        variant: {
          options: [`Ejf5a8hFM`, `a6v_JP5sV`, `sUHgiwMqj`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: J.Enum,
        },
        RLreA9jcP: {
          defaultValue: `Title`,
          displayTextArea: !1,
          title: `Title`,
          type: J.String,
        },
        sEL51lU82: { title: `Link`, type: J.Link },
        LIy6SD5oa: { title: `Click`, type: J.EventHandler },
        bylJ3Zujd: {
          defaultValue: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
          title: `Color`,
          type: J.Color,
        },
      }),
      F(
        Pt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Lt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt = e(() => {
    (y(),
      R(),
      D(),
      C(),
      (Rt = [`evMN1mTNM`, `ZPM_PrHzb`, `wNhkD5cob`]),
      (zt = `framer-0ZjEy`),
      (Bt = {
        evMN1mTNM: `framer-v-1ppeyn8`,
        wNhkD5cob: `framer-v-1igudlo`,
        ZPM_PrHzb: `framer-v-ki7hw0`,
      }),
      (Vt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ht = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ut = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Wt = T.create(s)),
      (Gt = { Desktop: `evMN1mTNM`, Phone: `wNhkD5cob`, Tablet: `ZPM_PrHzb` }),
      (Kt = ({ height: e, id: t, image: n, width: r, ...i }) => ({
        ...i,
        THl67z0kb: n ??
          i.THl67z0kb ?? {
            alt: ``,
            pixelHeight: 158,
            pixelWidth: 358,
            src: `https://framerusercontent.com/images/ZpYfL4MEpsJY8qCyBYLNejouUI.png`,
          },
        variant: Gt[i.variant] ?? i.variant ?? `evMN1mTNM`,
      })),
      (qt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Jt = A(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: s } = Y(),
            c = Te(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              THl67z0kb: m,
              ...h
            } = Kt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = re({
              cycleOrder: Rt,
              defaultVariant: `evMN1mTNM`,
              ref: r,
              variant: p,
              variantClassNames: Bt,
            }),
            T = qt(e, w),
            E = M(zt);
          return f(te, {
            id: d ?? i,
            children: f(Wt, {
              animate: w,
              initial: !1,
              children: f(Ut, {
                value: Ht,
                children: f(V, {
                  ...h,
                  ...y,
                  background: {
                    alt: ``,
                    fit: `fit`,
                    loading: N(c?.y || 0),
                    pixelHeight: 158,
                    pixelWidth: 358,
                    sizes: c?.width || `100vw`,
                    ...Vt(m),
                    positionX: `center`,
                    positionY: `center`,
                  },
                  className: M(E, `framer-1ppeyn8`, u, _),
                  "data-framer-name": `Desktop`,
                  layoutDependency: T,
                  layoutId: `evMN1mTNM`,
                  ref: r,
                  style: { ...l },
                  ...Lt(
                    {
                      wNhkD5cob: { "data-framer-name": `Phone` },
                      ZPM_PrHzb: { "data-framer-name": `Tablet` },
                    },
                    g,
                    b,
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0ZjEy.framer-aa2ccv, .framer-0ZjEy .framer-aa2ccv { display: block; }`,
          `.framer-0ZjEy.framer-1ppeyn8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 55px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 97px; }`,
          `.framer-0ZjEy.framer-v-ki7hw0.framer-1ppeyn8 { height: min-content; min-height: 21px; min-width: 75px; width: min-content; }`,
          `.framer-0ZjEy.framer-v-1igudlo.framer-1ppeyn8 { height: min-content; min-height: 20px; min-width: 71px; width: min-content; }`,
        ],
        `framer-0ZjEy`,
      )),
      (Yt = Jt),
      (Jt.displayName = `Logo`),
      (Jt.defaultProps = { height: 55, width: 97 }),
      I(Jt, {
        variant: {
          options: [`evMN1mTNM`, `ZPM_PrHzb`, `wNhkD5cob`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: J.Enum,
        },
        THl67z0kb: {
          __defaultAssetReference: `data:framer/asset-reference,ZpYfL4MEpsJY8qCyBYLNejouUI.png?originalFilename=logo.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,ZpYfL4MEpsJY8qCyBYLNejouUI.png?originalFilename=logo.png&preferredSize=auto`,
          },
          title: `Image`,
          type: J.ResponsiveImage,
        },
      }),
      F(Jt, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn = e(() => {
    (y(),
      R(),
      D(),
      C(),
      je(),
      $e(),
      Fe(),
      ft(),
      St(),
      It(),
      Xt(),
      (Zt = B(Yt)),
      (Qt = B(xt)),
      ($t = B(dt)),
      (en = B(Ft)),
      (tn = oe(T.div)),
      (nn = [
        `nQMAqLr57`,
        `dBl3NGC5f`,
        `cwXBBDoAv`,
        `L3kUgDLAO`,
        `f0ZG9nWNx`,
        `gNqyhurpQ`,
        `Y4nVfJ2L4`,
        `IfBJpYU3A`,
        `koDxrtEXx`,
        `gKutwTn3I`,
        `WTf6Mzfwx`,
        `kaCRkbtrv`,
      ]),
      (rn = `framer-wfyqv`),
      (an = {
        cwXBBDoAv: `framer-v-znzu7p`,
        dBl3NGC5f: `framer-v-v89dtt`,
        f0ZG9nWNx: `framer-v-1sabfjt`,
        gKutwTn3I: `framer-v-12w42s8`,
        gNqyhurpQ: `framer-v-14j3axz`,
        IfBJpYU3A: `framer-v-1eq9ob3`,
        kaCRkbtrv: `framer-v-de4tad`,
        koDxrtEXx: `framer-v-1dcusg4`,
        L3kUgDLAO: `framer-v-1lqqdz1`,
        nQMAqLr57: `framer-v-bzu5mb`,
        WTf6Mzfwx: `framer-v-y29wox`,
        Y4nVfJ2L4: `framer-v-aegdrn`,
      }),
      (on = {
        delay: 0,
        duration: 0.5,
        ease: [0.96, -0.02, 0.38, 1.01],
        type: `tween`,
      }),
      (sn = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (cn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -40,
      }),
      (ln = { damping: 30, delay: 0, mass: 1, stiffness: 210, type: `spring` }),
      (un = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ln,
        x: 0,
        y: -40,
      }),
      (dn = {
        damping: 30,
        delay: 0.06,
        mass: 1,
        stiffness: 210,
        type: `spring`,
      }),
      (fn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: dn,
        x: 0,
        y: -40,
      }),
      (pn = {
        damping: 30,
        delay: 0.12,
        mass: 1,
        stiffness: 210,
        type: `spring`,
      }),
      (mn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: pn,
        x: 0,
        y: -40,
      }),
      (hn = {
        damping: 30,
        delay: 0.18,
        mass: 1,
        stiffness: 210,
        type: `spring`,
      }),
      (gn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: hn,
        x: 0,
        y: -40,
      }),
      (_n = {
        damping: 30,
        delay: 0.24,
        mass: 1,
        stiffness: 210,
        type: `spring`,
      }),
      (vn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: _n,
        x: 0,
        y: -40,
      }),
      (yn = (e, t) => `translateX(-50%) ${t}`),
      (bn = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (xn = T.create(s)),
      (Sn = {
        "Desktop open": `nQMAqLr57`,
        "Desktop-Dark open": `cwXBBDoAv`,
        "Desktop-Dark": `L3kUgDLAO`,
        "Phone open": `koDxrtEXx`,
        "Phone-Dark open": `WTf6Mzfwx`,
        "Phone-Dark": `kaCRkbtrv`,
        "Tablet open": `f0ZG9nWNx`,
        "Tablet-Dark open": `Y4nVfJ2L4`,
        "Tablet-Dark": `IfBJpYU3A`,
        Desktop: `dBl3NGC5f`,
        Phone: `gKutwTn3I`,
        Tablet: `gNqyhurpQ`,
      }),
      (Cn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Sn[r.variant] ?? r.variant ?? `nQMAqLr57`,
      })),
      (wn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Tn = A(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: c } = Y(),
            l = Te(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = Cn(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = re({
              cycleOrder: nn,
              defaultVariant: `nQMAqLr57`,
              ref: r,
              variant: m,
              variantClassNames: an,
            }),
            D = wn(e, E),
            { activeVariantCallback: O, delay: ne } = ve(g),
            k = O(async (...e) => {
              w(`dBl3NGC5f`);
            }),
            A = O(async (...e) => {
              w(`L3kUgDLAO`);
            }),
            j = O(async (...e) => {
              w(`gNqyhurpQ`);
            }),
            N = O(async (...e) => {
              w(`IfBJpYU3A`);
            }),
            P = O(async (...e) => {
              w(`gKutwTn3I`);
            }),
            F = O(async (...e) => {
              w(`kaCRkbtrv`);
            }),
            ie = O(async (...e) => {
              w(`nQMAqLr57`);
            }),
            I = O(async (...e) => {
              w(`cwXBBDoAv`);
            }),
            ae = O(async (...e) => {
              w(`f0ZG9nWNx`);
            }),
            oe = O(async (...e) => {
              w(`Y4nVfJ2L4`);
            }),
            R = O(async (...e) => {
              w(`koDxrtEXx`);
            }),
            se = O(async (...e) => {
              w(`WTf6Mzfwx`);
            }),
            z = O(async (...e) => {
              w(`dBl3NGC5f`);
            }),
            ce = O(async (...e) => {
              w(`L3kUgDLAO`);
            }),
            B = O(async (...e) => {
              w(`gNqyhurpQ`);
            }),
            le = O(async (...e) => {
              w(`IfBJpYU3A`);
            }),
            ue = O(async (...e) => {
              w(`gKutwTn3I`);
            }),
            V = O(async (...e) => {
              w(`kaCRkbtrv`);
            }),
            de = M(rn, Re, Qe, Pe),
            W = () => !![`dBl3NGC5f`, `L3kUgDLAO`].includes(g),
            fe = () =>
              ![
                `f0ZG9nWNx`,
                `gNqyhurpQ`,
                `Y4nVfJ2L4`,
                `IfBJpYU3A`,
                `koDxrtEXx`,
                `gKutwTn3I`,
                `WTf6Mzfwx`,
                `kaCRkbtrv`,
              ].includes(g);
          return (
            De(),
            f(te, {
              id: p ?? i,
              children: f(xn, {
                animate: E,
                initial: !1,
                children: f(bn, {
                  value: on,
                  children: _(T.header, {
                    ...h,
                    ...b,
                    className: M(de, `framer-bzu5mb`, d, v),
                    "data-framer-name": `Desktop open`,
                    layoutDependency: D,
                    layoutId: `nQMAqLr57`,
                    ref: r,
                    style: {
                      backdropFilter: `none`,
                      backgroundColor: `rgb(255, 255, 255)`,
                      boxShadow: `0px 1px 24px 6px rgba(0, 0, 0, 0.1)`,
                      WebkitBackdropFilter: `none`,
                      ...u,
                    },
                    variants: {
                      cwXBBDoAv: {
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      dBl3NGC5f: {
                        backdropFilter: `blur(7px)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `blur(7px)`,
                      },
                      f0ZG9nWNx: {
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      gKutwTn3I: {
                        backdropFilter: `blur(7px)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `blur(7px)`,
                      },
                      gNqyhurpQ: {
                        backdropFilter: `blur(7px)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `blur(7px)`,
                      },
                      IfBJpYU3A: {
                        backdropFilter: `blur(7px)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `blur(7px)`,
                      },
                      kaCRkbtrv: {
                        backdropFilter: `blur(7px)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `blur(7px)`,
                      },
                      koDxrtEXx: {
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      L3kUgDLAO: {
                        backdropFilter: `blur(7px)`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `blur(7px)`,
                      },
                      WTf6Mzfwx: {
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                      Y4nVfJ2L4: {
                        backdropFilter: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                    },
                    ...X(
                      {
                        cwXBBDoAv: { "data-framer-name": `Desktop-Dark open` },
                        dBl3NGC5f: { "data-framer-name": `Desktop` },
                        f0ZG9nWNx: { "data-framer-name": `Tablet open` },
                        gKutwTn3I: { "data-framer-name": `Phone` },
                        gNqyhurpQ: { "data-framer-name": `Tablet` },
                        IfBJpYU3A: { "data-framer-name": `Tablet-Dark` },
                        kaCRkbtrv: { "data-framer-name": `Phone-Dark` },
                        koDxrtEXx: { "data-framer-name": `Phone open` },
                        L3kUgDLAO: { "data-framer-name": `Desktop-Dark` },
                        WTf6Mzfwx: { "data-framer-name": `Phone-Dark open` },
                        Y4nVfJ2L4: { "data-framer-name": `Tablet-Dark open` },
                      },
                      g,
                      x,
                    ),
                    children: [
                      _(T.nav, {
                        className: `framer-120hnkq`,
                        "data-framer-name": `Top`,
                        layoutDependency: D,
                        layoutId: `AB7kPYq7F`,
                        children: [
                          _(T.div, {
                            className: `framer-305coq`,
                            layoutDependency: D,
                            layoutId: `lewOSdaK5`,
                            children: [
                              f(U, {
                                href: { webPageId: `dh9XiRY81` },
                                motionChild: !0,
                                nodeId: `XeBkzUx83`,
                                openInNewTab: !1,
                                scopeId: `MH9m4cXzT`,
                                children: f(T.a, {
                                  className: `framer-iogiyt framer-1a90gm8`,
                                  "data-framer-name": `Link`,
                                  "data-highlight": !0,
                                  layoutDependency: D,
                                  layoutId: `XeBkzUx83`,
                                  onTap: k,
                                  ...X(
                                    {
                                      cwXBBDoAv: { onTap: A },
                                      dBl3NGC5f: {
                                        "data-highlight": void 0,
                                        onTap: void 0,
                                      },
                                      f0ZG9nWNx: { onTap: j },
                                      gKutwTn3I: {
                                        "data-highlight": void 0,
                                        onTap: void 0,
                                      },
                                      gNqyhurpQ: {
                                        "data-highlight": void 0,
                                        onTap: void 0,
                                      },
                                      IfBJpYU3A: {
                                        "data-highlight": void 0,
                                        onTap: void 0,
                                      },
                                      kaCRkbtrv: {
                                        "data-highlight": void 0,
                                        onTap: void 0,
                                      },
                                      koDxrtEXx: { onTap: P },
                                      L3kUgDLAO: {
                                        "data-highlight": void 0,
                                        onTap: void 0,
                                      },
                                      WTf6Mzfwx: { onTap: F },
                                      Y4nVfJ2L4: { onTap: N },
                                    },
                                    g,
                                    x,
                                  ),
                                  children: f(H, {
                                    height: 28,
                                    width: `70px`,
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (0 +
                                        (((l?.height || 713) - 55 - 658.2) /
                                          1) *
                                          0) +
                                      6 +
                                      0 +
                                      0,
                                    ...X(
                                      {
                                        dBl3NGC5f: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (((l?.height || 78) - 38 - 40) / 2 +
                                              0 +
                                              0) +
                                            2 +
                                            4 +
                                            0,
                                        },
                                        f0ZG9nWNx: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 677) -
                                                55 -
                                                730.2) /
                                                1) *
                                                0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        gKutwTn3I: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (((l?.height || 78) - 38 - 40) / 2 +
                                              0 +
                                              0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        gNqyhurpQ: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (((l?.height || 78) - 38 - 40) / 2 +
                                              0 +
                                              0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        IfBJpYU3A: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (((l?.height || 78) - 38 - 40) / 2 +
                                              0 +
                                              0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        kaCRkbtrv: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (((l?.height || 78) - 38 - 40) / 2 +
                                              0 +
                                              0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        koDxrtEXx: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 555) -
                                                59 -
                                                664.2) /
                                                1) *
                                                0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        L3kUgDLAO: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (((l?.height || 78) - 38 - 40) / 2 +
                                              0 +
                                              0) +
                                            2 +
                                            4 +
                                            0,
                                        },
                                        WTf6Mzfwx: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 555) -
                                                59 -
                                                664.2) /
                                                1) *
                                                0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                        Y4nVfJ2L4: {
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 677) -
                                                55 -
                                                730.2) /
                                                1) *
                                                0) +
                                            6 +
                                            0 +
                                            0,
                                        },
                                      },
                                      g,
                                      x,
                                    ),
                                    children: f(G, {
                                      className: `framer-kxb2zt-container`,
                                      layoutDependency: D,
                                      layoutId: `LEnasTN5x-container`,
                                      nodeId: `LEnasTN5x`,
                                      rendersWithMotion: !0,
                                      scopeId: `MH9m4cXzT`,
                                      children: f(Yt, {
                                        height: `100%`,
                                        id: `LEnasTN5x`,
                                        layoutId: `LEnasTN5x`,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        variant: `evMN1mTNM`,
                                        width: `100%`,
                                        ...X(
                                          {
                                            f0ZG9nWNx: { variant: `ZPM_PrHzb` },
                                            gKutwTn3I: { variant: `wNhkD5cob` },
                                            gNqyhurpQ: { variant: `ZPM_PrHzb` },
                                            IfBJpYU3A: {
                                              THl67z0kb: sn(
                                                {
                                                  pixelHeight: 823,
                                                  pixelWidth: 1901,
                                                  src: `https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png`,
                                                  srcSet: `https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=512 512w,https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png 1901w`,
                                                },
                                                ``,
                                              ),
                                              variant: `ZPM_PrHzb`,
                                            },
                                            kaCRkbtrv: {
                                              THl67z0kb: sn(
                                                {
                                                  pixelHeight: 823,
                                                  pixelWidth: 1901,
                                                  src: `https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png`,
                                                  srcSet: `https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=512 512w,https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png 1901w`,
                                                },
                                                ``,
                                              ),
                                              variant: `wNhkD5cob`,
                                            },
                                            koDxrtEXx: { variant: `wNhkD5cob` },
                                            L3kUgDLAO: {
                                              THl67z0kb: sn(
                                                {
                                                  pixelHeight: 823,
                                                  pixelWidth: 1901,
                                                  src: `https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png`,
                                                  srcSet: `https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=512 512w,https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png 1901w`,
                                                },
                                                ``,
                                              ),
                                            },
                                            WTf6Mzfwx: { variant: `wNhkD5cob` },
                                            Y4nVfJ2L4: { variant: `ZPM_PrHzb` },
                                          },
                                          g,
                                          x,
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              W() &&
                                f(T.div, {
                                  className: `framer-1omgnrp`,
                                  layoutDependency: D,
                                  layoutId: `CE8P83FVo`,
                                  style: {
                                    backgroundColor: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                  },
                                  variants: {
                                    L3kUgDLAO: {
                                      backgroundColor: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                    },
                                  },
                                }),
                              fe() &&
                                _(T.div, {
                                  className: `framer-1fls40a`,
                                  layoutDependency: D,
                                  layoutId: `zlEBOdhkq`,
                                  children: [
                                    f(L, {
                                      links: [
                                        {
                                          href: { webPageId: `Frboi95B5` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Frboi95B5` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Frboi95B5` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Frboi95B5` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        f(H, {
                                          height: 18,
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 713) -
                                                55 -
                                                658.2) /
                                                1) *
                                                0) +
                                            6 +
                                            5 +
                                            0,
                                          ...X(
                                            {
                                              dBl3NGC5f: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                              L3kUgDLAO: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                          children: f(G, {
                                            className: `framer-1ubnatg-container`,
                                            layoutDependency: D,
                                            layoutId: `d3f60GtmK-container`,
                                            nodeId: `d3f60GtmK`,
                                            rendersWithMotion: !0,
                                            scopeId: `MH9m4cXzT`,
                                            style: { opacity: 0 },
                                            variants: {
                                              dBl3NGC5f: { opacity: 1 },
                                              L3kUgDLAO: { opacity: 1 },
                                            },
                                            children: f(xt, {
                                              height: `100%`,
                                              id: `d3f60GtmK`,
                                              layoutId: `d3f60GtmK`,
                                              OKr5AJd5k: e[0],
                                              width: `100%`,
                                              wSDtEcD_o: `Our Model`,
                                              YcbtSTF5J: `rgb(9, 9, 9)`,
                                              ...X(
                                                {
                                                  cwXBBDoAv: {
                                                    OKr5AJd5k: e[2],
                                                  },
                                                  dBl3NGC5f: {
                                                    OKr5AJd5k: e[1],
                                                  },
                                                  L3kUgDLAO: {
                                                    OKr5AJd5k: e[3],
                                                    YcbtSTF5J: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                  },
                                                },
                                                g,
                                                x,
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    f(L, {
                                      links: [
                                        {
                                          href: { webPageId: `dVT1LJUTV` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `dVT1LJUTV` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `dVT1LJUTV` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `dVT1LJUTV` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        f(H, {
                                          height: 18,
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 713) -
                                                55 -
                                                658.2) /
                                                1) *
                                                0) +
                                            6 +
                                            5 +
                                            0,
                                          ...X(
                                            {
                                              dBl3NGC5f: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                              L3kUgDLAO: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                          children: f(G, {
                                            className: `framer-1phpovz-container`,
                                            layoutDependency: D,
                                            layoutId: `d8gbtMIsi-container`,
                                            nodeId: `d8gbtMIsi`,
                                            rendersWithMotion: !0,
                                            scopeId: `MH9m4cXzT`,
                                            style: { opacity: 0 },
                                            variants: {
                                              dBl3NGC5f: { opacity: 1 },
                                              L3kUgDLAO: { opacity: 1 },
                                            },
                                            children: f(xt, {
                                              height: `100%`,
                                              id: `d8gbtMIsi`,
                                              layoutId: `d8gbtMIsi`,
                                              OKr5AJd5k: e[0],
                                              width: `100%`,
                                              wSDtEcD_o: `Brands`,
                                              YcbtSTF5J: `rgb(9, 9, 9)`,
                                              ...X(
                                                {
                                                  cwXBBDoAv: {
                                                    OKr5AJd5k: e[2],
                                                  },
                                                  dBl3NGC5f: {
                                                    OKr5AJd5k: e[1],
                                                  },
                                                  L3kUgDLAO: {
                                                    OKr5AJd5k: e[3],
                                                    YcbtSTF5J: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                  },
                                                },
                                                g,
                                                x,
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    f(L, {
                                      links: [
                                        {
                                          href: { webPageId: `Tykwfmrh9` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Tykwfmrh9` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Tykwfmrh9` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Tykwfmrh9` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        f(H, {
                                          height: 18,
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 713) -
                                                55 -
                                                658.2) /
                                                1) *
                                                0) +
                                            6 +
                                            5 +
                                            0,
                                          ...X(
                                            {
                                              dBl3NGC5f: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                              L3kUgDLAO: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                          children: f(G, {
                                            className: `framer-1q78hcd-container`,
                                            layoutDependency: D,
                                            layoutId: `t0QYUCRQM-container`,
                                            nodeId: `t0QYUCRQM`,
                                            rendersWithMotion: !0,
                                            scopeId: `MH9m4cXzT`,
                                            style: { opacity: 0 },
                                            variants: {
                                              dBl3NGC5f: { opacity: 1 },
                                              L3kUgDLAO: { opacity: 1 },
                                            },
                                            children: f(xt, {
                                              height: `100%`,
                                              id: `t0QYUCRQM`,
                                              layoutId: `t0QYUCRQM`,
                                              OKr5AJd5k: e[0],
                                              width: `100%`,
                                              wSDtEcD_o: `Why China`,
                                              YcbtSTF5J: `rgb(9, 9, 9)`,
                                              ...X(
                                                {
                                                  cwXBBDoAv: {
                                                    OKr5AJd5k: e[2],
                                                  },
                                                  dBl3NGC5f: {
                                                    OKr5AJd5k: e[1],
                                                  },
                                                  L3kUgDLAO: {
                                                    OKr5AJd5k: e[3],
                                                    YcbtSTF5J: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                  },
                                                },
                                                g,
                                                x,
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    f(L, {
                                      links: [
                                        {
                                          href: { webPageId: `p3zwtzFek` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `p3zwtzFek` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `p3zwtzFek` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `p3zwtzFek` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        f(H, {
                                          height: 18,
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 713) -
                                                55 -
                                                658.2) /
                                                1) *
                                                0) +
                                            6 +
                                            5 +
                                            0,
                                          ...X(
                                            {
                                              dBl3NGC5f: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                              L3kUgDLAO: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                          children: f(G, {
                                            className: `framer-13ph7yy-container`,
                                            layoutDependency: D,
                                            layoutId: `sFY5U6ltn-container`,
                                            nodeId: `sFY5U6ltn`,
                                            rendersWithMotion: !0,
                                            scopeId: `MH9m4cXzT`,
                                            style: { opacity: 0 },
                                            variants: {
                                              dBl3NGC5f: { opacity: 1 },
                                              L3kUgDLAO: { opacity: 1 },
                                            },
                                            children: f(xt, {
                                              height: `100%`,
                                              id: `sFY5U6ltn`,
                                              layoutId: `sFY5U6ltn`,
                                              OKr5AJd5k: e[0],
                                              width: `100%`,
                                              wSDtEcD_o: `Resources`,
                                              YcbtSTF5J: `rgb(9, 9, 9)`,
                                              ...X(
                                                {
                                                  cwXBBDoAv: {
                                                    OKr5AJd5k: e[2],
                                                  },
                                                  dBl3NGC5f: {
                                                    OKr5AJd5k: e[1],
                                                  },
                                                  L3kUgDLAO: {
                                                    OKr5AJd5k: e[3],
                                                    YcbtSTF5J: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                  },
                                                },
                                                g,
                                                x,
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    f(L, {
                                      links: [
                                        {
                                          href: { webPageId: `hAlvrhFMj` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `hAlvrhFMj` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `hAlvrhFMj` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `hAlvrhFMj` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        f(H, {
                                          height: 18,
                                          y:
                                            (l?.y || 0) +
                                            19 +
                                            (0 +
                                              (((l?.height || 713) -
                                                55 -
                                                658.2) /
                                                1) *
                                                0) +
                                            6 +
                                            5 +
                                            0,
                                          ...X(
                                            {
                                              dBl3NGC5f: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                              L3kUgDLAO: {
                                                y:
                                                  (l?.y || 0) +
                                                  19 +
                                                  (((l?.height || 78) -
                                                    38 -
                                                    40) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  2 +
                                                  9 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                          children: f(G, {
                                            className: `framer-jspa9w-container`,
                                            layoutDependency: D,
                                            layoutId: `LbuvcewGj-container`,
                                            nodeId: `LbuvcewGj`,
                                            rendersWithMotion: !0,
                                            scopeId: `MH9m4cXzT`,
                                            style: { opacity: 0 },
                                            variants: {
                                              dBl3NGC5f: { opacity: 1 },
                                              L3kUgDLAO: { opacity: 1 },
                                            },
                                            children: f(xt, {
                                              height: `100%`,
                                              id: `LbuvcewGj`,
                                              layoutId: `LbuvcewGj`,
                                              OKr5AJd5k: e[0],
                                              width: `100%`,
                                              wSDtEcD_o: `Contact`,
                                              YcbtSTF5J: `rgb(9, 9, 9)`,
                                              ...X(
                                                {
                                                  cwXBBDoAv: {
                                                    OKr5AJd5k: e[2],
                                                  },
                                                  dBl3NGC5f: {
                                                    OKr5AJd5k: e[1],
                                                  },
                                                  L3kUgDLAO: {
                                                    OKr5AJd5k: e[3],
                                                    YcbtSTF5J: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                  },
                                                },
                                                g,
                                                x,
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          f(T.div, {
                            className: `framer-ednsow`,
                            "data-framer-name": `Button container`,
                            "data-highlight": !0,
                            layoutDependency: D,
                            layoutId: `NgnQirJGf`,
                            onTap: k,
                            ...X(
                              {
                                cwXBBDoAv: { onTap: A },
                                dBl3NGC5f: { onTap: ie },
                                f0ZG9nWNx: { onTap: j },
                                gKutwTn3I: { onTap: R },
                                gNqyhurpQ: { onTap: ae },
                                IfBJpYU3A: { onTap: oe },
                                kaCRkbtrv: { onTap: se },
                                koDxrtEXx: { onTap: P },
                                L3kUgDLAO: { onTap: I },
                                WTf6Mzfwx: { onTap: F },
                                Y4nVfJ2L4: { onTap: N },
                              },
                              g,
                              x,
                            ),
                            children: f(H, {
                              height: 12,
                              y:
                                (l?.y || 0) +
                                19 +
                                (0 +
                                  (((l?.height || 713) - 55 - 658.2) / 1) * 0) +
                                0 +
                                14,
                              ...X(
                                {
                                  dBl3NGC5f: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (((l?.height || 78) - 38 - 40) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      14,
                                  },
                                  f0ZG9nWNx: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (0 +
                                        (((l?.height || 677) - 55 - 730.2) /
                                          1) *
                                          0) +
                                      0 +
                                      14,
                                  },
                                  gKutwTn3I: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (((l?.height || 78) - 38 - 40) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      14,
                                  },
                                  gNqyhurpQ: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (((l?.height || 78) - 38 - 40) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      14,
                                  },
                                  IfBJpYU3A: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (((l?.height || 78) - 38 - 40) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      14,
                                  },
                                  kaCRkbtrv: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (((l?.height || 78) - 38 - 40) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      14,
                                  },
                                  koDxrtEXx: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (0 +
                                        (((l?.height || 555) - 59 - 664.2) /
                                          1) *
                                          0) +
                                      0 +
                                      14,
                                  },
                                  L3kUgDLAO: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (((l?.height || 78) - 38 - 40) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      14,
                                  },
                                  WTf6Mzfwx: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (0 +
                                        (((l?.height || 555) - 59 - 664.2) /
                                          1) *
                                          0) +
                                      0 +
                                      14,
                                  },
                                  Y4nVfJ2L4: {
                                    y:
                                      (l?.y || 0) +
                                      19 +
                                      (0 +
                                        (((l?.height || 677) - 55 - 730.2) /
                                          1) *
                                          0) +
                                      0 +
                                      14,
                                  },
                                },
                                g,
                                x,
                              ),
                              children: f(G, {
                                className: `framer-eda3z9-container`,
                                layoutDependency: D,
                                layoutId: `zA8NPGRkM-container`,
                                nodeId: `zA8NPGRkM`,
                                rendersWithMotion: !0,
                                scopeId: `MH9m4cXzT`,
                                children: f(dt, {
                                  height: `100%`,
                                  id: `zA8NPGRkM`,
                                  layoutId: `zA8NPGRkM`,
                                  variant: `ZgplB38uO`,
                                  vbuH9vt2H: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                  width: `100%`,
                                  ...X(
                                    {
                                      dBl3NGC5f: { variant: `qlBMBxhJm` },
                                      gKutwTn3I: { variant: `qlBMBxhJm` },
                                      gNqyhurpQ: { variant: `qlBMBxhJm` },
                                      IfBJpYU3A: {
                                        variant: `qlBMBxhJm`,
                                        vbuH9vt2H: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                      },
                                      kaCRkbtrv: {
                                        variant: `qlBMBxhJm`,
                                        vbuH9vt2H: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                      },
                                      L3kUgDLAO: {
                                        variant: `qlBMBxhJm`,
                                        vbuH9vt2H: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                      },
                                    },
                                    g,
                                    x,
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      _(T.div, {
                        className: `framer-1rfamfy`,
                        "data-framer-name": `Body`,
                        layoutDependency: D,
                        layoutId: `LQHh6xDgU`,
                        style: { opacity: 1 },
                        variants: {
                          cwXBBDoAv: { opacity: 1 },
                          dBl3NGC5f: { opacity: 0 },
                          f0ZG9nWNx: { opacity: 1 },
                          gKutwTn3I: { opacity: 0 },
                          gNqyhurpQ: { opacity: 0 },
                          IfBJpYU3A: { opacity: 0 },
                          kaCRkbtrv: { opacity: 0 },
                          koDxrtEXx: { opacity: 1 },
                          L3kUgDLAO: { opacity: 0 },
                          WTf6Mzfwx: { opacity: 1 },
                          Y4nVfJ2L4: { opacity: 1 },
                        },
                        children: [
                          _(T.nav, {
                            className: `framer-ugu5i9`,
                            "data-framer-name": `Navigation`,
                            layoutDependency: D,
                            layoutId: `HB8tCGdyD`,
                            children: [
                              f(tn, {
                                __framer__animate: { transition: ln },
                                __framer__animateOnce: !1,
                                __framer__enter: cn,
                                __framer__exit: un,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-6z5t2m`,
                                "data-framer-name": `Item container`,
                                layoutDependency: D,
                                layoutId: `kOHhaRgyd`,
                                children: f(L, {
                                  links: [
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Frboi95B5` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 72,
                                      y:
                                        (l?.y || 0) +
                                        19 +
                                        (40 +
                                          (((l?.height || 713) - 55 - 658.2) /
                                            1) *
                                            1) +
                                        120 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      ...X(
                                        {
                                          dBl3NGC5f: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          f0ZG9nWNx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          gKutwTn3I: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          gNqyhurpQ: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          IfBJpYU3A: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          kaCRkbtrv: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          koDxrtEXx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          L3kUgDLAO: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          WTf6Mzfwx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          Y4nVfJ2L4: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        g,
                                        x,
                                      ),
                                      children: f(G, {
                                        className: `framer-1l0v3f0-container`,
                                        layoutDependency: D,
                                        layoutId: `M5EhK1MnW-container`,
                                        nodeId: `M5EhK1MnW`,
                                        rendersWithMotion: !0,
                                        scopeId: `MH9m4cXzT`,
                                        children: f(Ft, {
                                          bylJ3Zujd: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                          height: `100%`,
                                          id: `M5EhK1MnW`,
                                          layoutId: `M5EhK1MnW`,
                                          LIy6SD5oa: z,
                                          RLreA9jcP: `Our Model`,
                                          sEL51lU82: e[0],
                                          variant: `Ejf5a8hFM`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              cwXBBDoAv: {
                                                LIy6SD5oa: ce,
                                                sEL51lU82: e[2],
                                              },
                                              dBl3NGC5f: { sEL51lU82: e[1] },
                                              f0ZG9nWNx: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[4],
                                                variant: `a6v_JP5sV`,
                                              },
                                              gKutwTn3I: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[9],
                                                variant: `sUHgiwMqj`,
                                              },
                                              gNqyhurpQ: {
                                                sEL51lU82: e[5],
                                                variant: `a6v_JP5sV`,
                                              },
                                              IfBJpYU3A: {
                                                sEL51lU82: e[7],
                                                variant: `a6v_JP5sV`,
                                              },
                                              kaCRkbtrv: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[11],
                                                variant: `sUHgiwMqj`,
                                              },
                                              koDxrtEXx: {
                                                LIy6SD5oa: ue,
                                                sEL51lU82: e[8],
                                                variant: `sUHgiwMqj`,
                                              },
                                              L3kUgDLAO: { sEL51lU82: e[3] },
                                              WTf6Mzfwx: {
                                                LIy6SD5oa: V,
                                                sEL51lU82: e[10],
                                                variant: `sUHgiwMqj`,
                                              },
                                              Y4nVfJ2L4: {
                                                LIy6SD5oa: le,
                                                sEL51lU82: e[6],
                                                variant: `a6v_JP5sV`,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              f(tn, {
                                __framer__animate: { transition: dn },
                                __framer__animateOnce: !1,
                                __framer__enter: cn,
                                __framer__exit: fn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-f7i6o0`,
                                "data-framer-name": `Item container`,
                                layoutDependency: D,
                                layoutId: `bCxRE40yu`,
                                children: f(L, {
                                  links: [
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dVT1LJUTV` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 72,
                                      y:
                                        (l?.y || 0) +
                                        19 +
                                        (40 +
                                          (((l?.height || 713) - 55 - 658.2) /
                                            1) *
                                            1) +
                                        120 +
                                        0 +
                                        0 +
                                        72 +
                                        0,
                                      ...X(
                                        {
                                          dBl3NGC5f: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              72 +
                                              0,
                                          },
                                          f0ZG9nWNx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              72 +
                                              0,
                                          },
                                          gKutwTn3I: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              76 +
                                              0,
                                          },
                                          gNqyhurpQ: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              72 +
                                              0,
                                          },
                                          IfBJpYU3A: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              72 +
                                              0,
                                          },
                                          kaCRkbtrv: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              76 +
                                              0,
                                          },
                                          koDxrtEXx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              76 +
                                              0,
                                          },
                                          L3kUgDLAO: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              72 +
                                              0,
                                          },
                                          WTf6Mzfwx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              76 +
                                              0,
                                          },
                                          Y4nVfJ2L4: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              72 +
                                              0,
                                          },
                                        },
                                        g,
                                        x,
                                      ),
                                      children: f(G, {
                                        className: `framer-qy8ut1-container`,
                                        layoutDependency: D,
                                        layoutId: `L8mkiprKd-container`,
                                        nodeId: `L8mkiprKd`,
                                        rendersWithMotion: !0,
                                        scopeId: `MH9m4cXzT`,
                                        children: f(Ft, {
                                          bylJ3Zujd: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                          height: `100%`,
                                          id: `L8mkiprKd`,
                                          layoutId: `L8mkiprKd`,
                                          LIy6SD5oa: z,
                                          RLreA9jcP: `Brands`,
                                          sEL51lU82: e[0],
                                          variant: `Ejf5a8hFM`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              cwXBBDoAv: {
                                                LIy6SD5oa: ce,
                                                sEL51lU82: e[2],
                                              },
                                              dBl3NGC5f: { sEL51lU82: e[1] },
                                              f0ZG9nWNx: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[4],
                                                variant: `a6v_JP5sV`,
                                              },
                                              gKutwTn3I: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[9],
                                                variant: `sUHgiwMqj`,
                                              },
                                              gNqyhurpQ: {
                                                sEL51lU82: e[5],
                                                variant: `a6v_JP5sV`,
                                              },
                                              IfBJpYU3A: {
                                                sEL51lU82: e[7],
                                                variant: `a6v_JP5sV`,
                                              },
                                              kaCRkbtrv: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[11],
                                                variant: `sUHgiwMqj`,
                                              },
                                              koDxrtEXx: {
                                                LIy6SD5oa: ue,
                                                sEL51lU82: e[8],
                                                variant: `sUHgiwMqj`,
                                              },
                                              L3kUgDLAO: { sEL51lU82: e[3] },
                                              WTf6Mzfwx: {
                                                LIy6SD5oa: V,
                                                sEL51lU82: e[10],
                                                variant: `sUHgiwMqj`,
                                              },
                                              Y4nVfJ2L4: {
                                                LIy6SD5oa: le,
                                                sEL51lU82: e[6],
                                                variant: `a6v_JP5sV`,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              f(tn, {
                                __framer__animate: { transition: pn },
                                __framer__animateOnce: !1,
                                __framer__enter: cn,
                                __framer__exit: mn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-9p1fl7`,
                                "data-framer-name": `Item container`,
                                layoutDependency: D,
                                layoutId: `nEwoNmAc2`,
                                children: f(L, {
                                  links: [
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Tykwfmrh9` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 72,
                                      y:
                                        (l?.y || 0) +
                                        19 +
                                        (40 +
                                          (((l?.height || 713) - 55 - 658.2) /
                                            1) *
                                            1) +
                                        120 +
                                        0 +
                                        0 +
                                        144 +
                                        0,
                                      ...X(
                                        {
                                          dBl3NGC5f: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              144 +
                                              0,
                                          },
                                          f0ZG9nWNx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              144 +
                                              0,
                                          },
                                          gKutwTn3I: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              152 +
                                              0,
                                          },
                                          gNqyhurpQ: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              144 +
                                              0,
                                          },
                                          IfBJpYU3A: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              144 +
                                              0,
                                          },
                                          kaCRkbtrv: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              152 +
                                              0,
                                          },
                                          koDxrtEXx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              152 +
                                              0,
                                          },
                                          L3kUgDLAO: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              144 +
                                              0,
                                          },
                                          WTf6Mzfwx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              152 +
                                              0,
                                          },
                                          Y4nVfJ2L4: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              144 +
                                              0,
                                          },
                                        },
                                        g,
                                        x,
                                      ),
                                      children: f(G, {
                                        className: `framer-1cb9u8q-container`,
                                        layoutDependency: D,
                                        layoutId: `pQ8K83k7J-container`,
                                        nodeId: `pQ8K83k7J`,
                                        rendersWithMotion: !0,
                                        scopeId: `MH9m4cXzT`,
                                        children: f(Ft, {
                                          bylJ3Zujd: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                          height: `100%`,
                                          id: `pQ8K83k7J`,
                                          layoutId: `pQ8K83k7J`,
                                          LIy6SD5oa: z,
                                          RLreA9jcP: `Why China`,
                                          sEL51lU82: e[0],
                                          variant: `Ejf5a8hFM`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              cwXBBDoAv: {
                                                LIy6SD5oa: ce,
                                                sEL51lU82: e[2],
                                              },
                                              dBl3NGC5f: { sEL51lU82: e[1] },
                                              f0ZG9nWNx: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[4],
                                                variant: `a6v_JP5sV`,
                                              },
                                              gKutwTn3I: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[9],
                                                variant: `sUHgiwMqj`,
                                              },
                                              gNqyhurpQ: {
                                                sEL51lU82: e[5],
                                                variant: `a6v_JP5sV`,
                                              },
                                              IfBJpYU3A: {
                                                sEL51lU82: e[7],
                                                variant: `a6v_JP5sV`,
                                              },
                                              kaCRkbtrv: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[11],
                                                variant: `sUHgiwMqj`,
                                              },
                                              koDxrtEXx: {
                                                LIy6SD5oa: ue,
                                                sEL51lU82: e[8],
                                                variant: `sUHgiwMqj`,
                                              },
                                              L3kUgDLAO: { sEL51lU82: e[3] },
                                              WTf6Mzfwx: {
                                                LIy6SD5oa: V,
                                                sEL51lU82: e[10],
                                                variant: `sUHgiwMqj`,
                                              },
                                              Y4nVfJ2L4: {
                                                LIy6SD5oa: le,
                                                sEL51lU82: e[6],
                                                variant: `a6v_JP5sV`,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              f(tn, {
                                __framer__animate: { transition: hn },
                                __framer__animateOnce: !1,
                                __framer__enter: cn,
                                __framer__exit: gn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-15pwy5`,
                                "data-framer-name": `Item container`,
                                layoutDependency: D,
                                layoutId: `ggKdkY3Dp`,
                                children: f(L, {
                                  links: [
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `p3zwtzFek` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 72,
                                      y:
                                        (l?.y || 0) +
                                        19 +
                                        (40 +
                                          (((l?.height || 713) - 55 - 658.2) /
                                            1) *
                                            1) +
                                        120 +
                                        0 +
                                        0 +
                                        216 +
                                        0,
                                      ...X(
                                        {
                                          dBl3NGC5f: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              216 +
                                              0,
                                          },
                                          f0ZG9nWNx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              216 +
                                              0,
                                          },
                                          gKutwTn3I: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              228 +
                                              0,
                                          },
                                          gNqyhurpQ: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              216 +
                                              0,
                                          },
                                          IfBJpYU3A: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              216 +
                                              0,
                                          },
                                          kaCRkbtrv: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              228 +
                                              0,
                                          },
                                          koDxrtEXx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              228 +
                                              0,
                                          },
                                          L3kUgDLAO: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              216 +
                                              0,
                                          },
                                          WTf6Mzfwx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              228 +
                                              0,
                                          },
                                          Y4nVfJ2L4: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              216 +
                                              0,
                                          },
                                        },
                                        g,
                                        x,
                                      ),
                                      children: f(G, {
                                        className: `framer-dn12q8-container`,
                                        layoutDependency: D,
                                        layoutId: `YFVAighm9-container`,
                                        nodeId: `YFVAighm9`,
                                        rendersWithMotion: !0,
                                        scopeId: `MH9m4cXzT`,
                                        children: f(Ft, {
                                          bylJ3Zujd: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                          height: `100%`,
                                          id: `YFVAighm9`,
                                          layoutId: `YFVAighm9`,
                                          LIy6SD5oa: z,
                                          RLreA9jcP: `Resources`,
                                          sEL51lU82: e[0],
                                          variant: `Ejf5a8hFM`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              cwXBBDoAv: {
                                                LIy6SD5oa: ce,
                                                sEL51lU82: e[2],
                                              },
                                              dBl3NGC5f: { sEL51lU82: e[1] },
                                              f0ZG9nWNx: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[4],
                                                variant: `a6v_JP5sV`,
                                              },
                                              gKutwTn3I: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[9],
                                                variant: `sUHgiwMqj`,
                                              },
                                              gNqyhurpQ: {
                                                sEL51lU82: e[5],
                                                variant: `a6v_JP5sV`,
                                              },
                                              IfBJpYU3A: {
                                                sEL51lU82: e[7],
                                                variant: `a6v_JP5sV`,
                                              },
                                              kaCRkbtrv: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[11],
                                                variant: `sUHgiwMqj`,
                                              },
                                              koDxrtEXx: {
                                                LIy6SD5oa: ue,
                                                sEL51lU82: e[8],
                                                variant: `sUHgiwMqj`,
                                              },
                                              L3kUgDLAO: { sEL51lU82: e[3] },
                                              WTf6Mzfwx: {
                                                LIy6SD5oa: V,
                                                sEL51lU82: e[10],
                                                variant: `sUHgiwMqj`,
                                              },
                                              Y4nVfJ2L4: {
                                                LIy6SD5oa: le,
                                                sEL51lU82: e[6],
                                                variant: `a6v_JP5sV`,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              f(tn, {
                                __framer__animate: { transition: _n },
                                __framer__animateOnce: !1,
                                __framer__enter: cn,
                                __framer__exit: vn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-pem6zj`,
                                "data-framer-name": `Item container`,
                                layoutDependency: D,
                                layoutId: `Vg4hCmwbq`,
                                children: f(L, {
                                  links: [
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hAlvrhFMj` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 72,
                                      y:
                                        (l?.y || 0) +
                                        19 +
                                        (40 +
                                          (((l?.height || 713) - 55 - 658.2) /
                                            1) *
                                            1) +
                                        120 +
                                        0 +
                                        0 +
                                        288 +
                                        0,
                                      ...X(
                                        {
                                          dBl3NGC5f: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              288 +
                                              0,
                                          },
                                          f0ZG9nWNx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              288 +
                                              0,
                                          },
                                          gKutwTn3I: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              304 +
                                              0,
                                          },
                                          gNqyhurpQ: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              288 +
                                              0,
                                          },
                                          IfBJpYU3A: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              130 +
                                              0 +
                                              0 +
                                              288 +
                                              0,
                                          },
                                          kaCRkbtrv: {
                                            y:
                                              (l?.y || 0) +
                                              -604 +
                                              80 +
                                              0 +
                                              0 +
                                              304 +
                                              0,
                                          },
                                          koDxrtEXx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              304 +
                                              0,
                                          },
                                          L3kUgDLAO: {
                                            y:
                                              (l?.y || 0) +
                                              -750 +
                                              120 +
                                              0 +
                                              0 +
                                              288 +
                                              0,
                                          },
                                          WTf6Mzfwx: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 555) -
                                                  59 -
                                                  664.2) /
                                                  1) *
                                                  1) +
                                              70 +
                                              0 +
                                              0 +
                                              304 +
                                              0,
                                          },
                                          Y4nVfJ2L4: {
                                            y:
                                              (l?.y || 0) +
                                              19 +
                                              (40 +
                                                (((l?.height || 677) -
                                                  55 -
                                                  730.2) /
                                                  1) *
                                                  1) +
                                              110 +
                                              0 +
                                              0 +
                                              288 +
                                              0,
                                          },
                                        },
                                        g,
                                        x,
                                      ),
                                      children: f(G, {
                                        className: `framer-i0l900-container`,
                                        layoutDependency: D,
                                        layoutId: `bIPYo48U0-container`,
                                        nodeId: `bIPYo48U0`,
                                        rendersWithMotion: !0,
                                        scopeId: `MH9m4cXzT`,
                                        children: f(Ft, {
                                          bylJ3Zujd: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                          height: `100%`,
                                          id: `bIPYo48U0`,
                                          layoutId: `bIPYo48U0`,
                                          LIy6SD5oa: z,
                                          RLreA9jcP: `Contact`,
                                          sEL51lU82: e[0],
                                          variant: `Ejf5a8hFM`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              cwXBBDoAv: {
                                                LIy6SD5oa: ce,
                                                sEL51lU82: e[2],
                                              },
                                              dBl3NGC5f: { sEL51lU82: e[1] },
                                              f0ZG9nWNx: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[4],
                                                variant: `a6v_JP5sV`,
                                              },
                                              gKutwTn3I: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[9],
                                                variant: `sUHgiwMqj`,
                                              },
                                              gNqyhurpQ: {
                                                sEL51lU82: e[5],
                                                variant: `a6v_JP5sV`,
                                              },
                                              IfBJpYU3A: {
                                                sEL51lU82: e[7],
                                                variant: `a6v_JP5sV`,
                                              },
                                              kaCRkbtrv: {
                                                LIy6SD5oa: B,
                                                sEL51lU82: e[11],
                                                variant: `sUHgiwMqj`,
                                              },
                                              koDxrtEXx: {
                                                LIy6SD5oa: ue,
                                                sEL51lU82: e[8],
                                                variant: `sUHgiwMqj`,
                                              },
                                              L3kUgDLAO: { sEL51lU82: e[3] },
                                              WTf6Mzfwx: {
                                                LIy6SD5oa: V,
                                                sEL51lU82: e[10],
                                                variant: `sUHgiwMqj`,
                                              },
                                              Y4nVfJ2L4: {
                                                LIy6SD5oa: le,
                                                sEL51lU82: e[6],
                                                variant: `a6v_JP5sV`,
                                              },
                                            },
                                            g,
                                            x,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                          _(T.div, {
                            className: `framer-17uvimj`,
                            "data-framer-name": `Bottom`,
                            layoutDependency: D,
                            layoutId: `D_GoueKQm`,
                            children: [
                              _(T.div, {
                                className: `framer-zauiq7`,
                                "data-framer-name": `Legal`,
                                layoutDependency: D,
                                layoutId: `bIPOBNddb`,
                                transformTemplate: yn,
                                ...X(
                                  {
                                    f0ZG9nWNx: { transformTemplate: void 0 },
                                    gKutwTn3I: { transformTemplate: void 0 },
                                    gNqyhurpQ: { transformTemplate: void 0 },
                                    IfBJpYU3A: { transformTemplate: void 0 },
                                    kaCRkbtrv: { transformTemplate: void 0 },
                                    koDxrtEXx: { transformTemplate: void 0 },
                                    WTf6Mzfwx: { transformTemplate: void 0 },
                                    Y4nVfJ2L4: { transformTemplate: void 0 },
                                  },
                                  g,
                                  x,
                                ),
                                children: [
                                  f(K, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-1mf8d9g`,
                                        "data-styles-preset": `ypR5VEWEl`,
                                        children: f(U, {
                                          href: {
                                            pathVariables: {
                                              TMEoQtt6b: `privacy-policy`,
                                            },
                                            unresolvedPathSlugs: {
                                              TMEoQtt6b: {
                                                collectionId: `op7RHXBeI`,
                                                collectionItemId: `EnwiwcuRN`,
                                              },
                                            },
                                            webPageId: `CmPsU4Vle`,
                                          },
                                          motionChild: !0,
                                          nodeId: `r14yfj4Zp`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `MH9m4cXzT`,
                                          smoothScroll: !1,
                                          children: f(T.a, {
                                            className: `framer-styles-preset-1wi7vce`,
                                            "data-styles-preset": `nCQNaN8LD`,
                                            children: `Privacy Policy`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-cn0hy8`,
                                    "data-highlight": !0,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `r14yfj4Zp`,
                                    onTap: k,
                                    style: {
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...X(
                                      {
                                        cwXBBDoAv: { onTap: A },
                                        f0ZG9nWNx: { onTap: j },
                                        koDxrtEXx: { onTap: P },
                                        WTf6Mzfwx: { onTap: F },
                                        Y4nVfJ2L4: { onTap: N },
                                      },
                                      g,
                                      x,
                                    ),
                                  }),
                                  f(K, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-1mf8d9g`,
                                        "data-styles-preset": `ypR5VEWEl`,
                                        children: f(U, {
                                          href: {
                                            pathVariables: {
                                              TMEoQtt6b: `terms-of-service`,
                                            },
                                            unresolvedPathSlugs: {
                                              TMEoQtt6b: {
                                                collectionId: `op7RHXBeI`,
                                                collectionItemId: `SYN_Cviyw`,
                                              },
                                            },
                                            webPageId: `CmPsU4Vle`,
                                          },
                                          motionChild: !0,
                                          nodeId: `FuvfJAvEi`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `MH9m4cXzT`,
                                          smoothScroll: !1,
                                          children: f(T.a, {
                                            className: `framer-styles-preset-1wi7vce`,
                                            "data-styles-preset": `nCQNaN8LD`,
                                            children: `Terms of Service`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1dkccqr`,
                                    "data-highlight": !0,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `FuvfJAvEi`,
                                    onTap: k,
                                    style: {
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...X(
                                      {
                                        cwXBBDoAv: { onTap: A },
                                        f0ZG9nWNx: { onTap: j },
                                        koDxrtEXx: { onTap: P },
                                        WTf6Mzfwx: { onTap: F },
                                        Y4nVfJ2L4: { onTap: N },
                                      },
                                      g,
                                      x,
                                    ),
                                  }),
                                ],
                              }),
                              f(K, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(T.p, {
                                    className: `framer-styles-preset-txwsq6`,
                                    "data-styles-preset": `fDRzSjw63`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))`,
                                    },
                                    children: `© 2025 KFD`,
                                  }),
                                }),
                                className: `framer-1gif4l1`,
                                "data-framer-name": `Copyright Text`,
                                fonts: [`Inter`],
                                layoutDependency: D,
                                layoutId: `keQ0NTShk`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                  "--framer-paragraph-spacing": `0px`,
                                  opacity: 0.6,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-wfyqv.framer-1a90gm8, .framer-wfyqv .framer-1a90gm8 { display: block; }`,
          `.framer-wfyqv.framer-bzu5mb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 19px 36px 36px 36px; position: relative; width: 1200px; }`,
          `.framer-wfyqv .framer-120hnkq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-wfyqv .framer-305coq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-wfyqv .framer-iogiyt { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-wfyqv .framer-kxb2zt-container { aspect-ratio: 1.7636363636363637 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 70px; }`,
          `.framer-wfyqv .framer-1omgnrp { flex: none; height: 36px; overflow: hidden; position: relative; width: 2px; }`,
          `.framer-wfyqv .framer-1fls40a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-wfyqv .framer-1ubnatg-container, .framer-wfyqv .framer-1phpovz-container, .framer-wfyqv .framer-1q78hcd-container, .framer-wfyqv .framer-13ph7yy-container, .framer-wfyqv .framer-jspa9w-container, .framer-wfyqv .framer-eda3z9-container, .framer-wfyqv .framer-1l0v3f0-container, .framer-wfyqv .framer-qy8ut1-container, .framer-wfyqv .framer-1cb9u8q-container, .framer-wfyqv .framer-dn12q8-container, .framer-wfyqv .framer-i0l900-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-wfyqv .framer-ednsow { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-wfyqv .framer-1rfamfy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: visible; padding: 120px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-wfyqv .framer-ugu5i9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wfyqv .framer-6z5t2m, .framer-wfyqv .framer-f7i6o0, .framer-wfyqv .framer-9p1fl7, .framer-wfyqv .framer-15pwy5, .framer-wfyqv .framer-pem6zj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-wfyqv .framer-17uvimj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wfyqv .framer-zauiq7 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
          `.framer-wfyqv .framer-cn0hy8, .framer-wfyqv .framer-1dkccqr { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wfyqv .framer-1gif4l1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wfyqv.framer-v-v89dtt.framer-bzu5mb, .framer-wfyqv.framer-v-1lqqdz1.framer-bzu5mb { gap: 0px; justify-content: center; padding: 19px 36px 19px 36px; }`,
          `.framer-wfyqv.framer-v-v89dtt .framer-kxb2zt-container, .framer-wfyqv.framer-v-1lqqdz1 .framer-kxb2zt-container { aspect-ratio: 1.7586206896551724 / 1; }`,
          `.framer-wfyqv.framer-v-v89dtt .framer-1rfamfy, .framer-wfyqv.framer-v-1lqqdz1 .framer-1rfamfy { left: 36px; position: absolute; right: 36px; top: -750px; width: unset; }`,
          `.framer-wfyqv.framer-v-1sabfjt.framer-bzu5mb, .framer-wfyqv.framer-v-aegdrn.framer-bzu5mb { padding: 19px 32px 36px 32px; width: 810px; }`,
          `.framer-wfyqv.framer-v-1sabfjt .framer-kxb2zt-container, .framer-wfyqv.framer-v-aegdrn .framer-kxb2zt-container { aspect-ratio: 1.7777777777777777 / 1; }`,
          `.framer-wfyqv.framer-v-1sabfjt .framer-1rfamfy, .framer-wfyqv.framer-v-aegdrn .framer-1rfamfy { gap: 110px; padding: 110px 0px 0px 0px; }`,
          `.framer-wfyqv.framer-v-1sabfjt .framer-17uvimj, .framer-wfyqv.framer-v-14j3axz .framer-17uvimj, .framer-wfyqv.framer-v-aegdrn .framer-17uvimj, .framer-wfyqv.framer-v-1eq9ob3 .framer-17uvimj, .framer-wfyqv.framer-v-12w42s8 .framer-17uvimj, .framer-wfyqv.framer-v-de4tad .framer-17uvimj { align-content: center; align-items: center; flex-direction: column; gap: 40px; justify-content: flex-start; }`,
          `.framer-wfyqv.framer-v-1sabfjt .framer-zauiq7, .framer-wfyqv.framer-v-14j3axz .framer-zauiq7, .framer-wfyqv.framer-v-aegdrn .framer-zauiq7, .framer-wfyqv.framer-v-1eq9ob3 .framer-zauiq7 { bottom: unset; flex-direction: column; gap: 10px; left: unset; position: relative; }`,
          `.framer-wfyqv.framer-v-14j3axz.framer-bzu5mb, .framer-wfyqv.framer-v-1eq9ob3.framer-bzu5mb { gap: 0px; justify-content: center; padding: 19px 32px 19px 32px; width: 810px; }`,
          `.framer-wfyqv.framer-v-14j3axz .framer-kxb2zt-container, .framer-wfyqv.framer-v-1eq9ob3 .framer-kxb2zt-container { aspect-ratio: 1.7857142857142858 / 1; }`,
          `.framer-wfyqv.framer-v-14j3axz .framer-1rfamfy, .framer-wfyqv.framer-v-1eq9ob3 .framer-1rfamfy { left: 32px; padding: 130px 0px 0px 0px; position: absolute; right: 32px; top: -750px; width: unset; }`,
          `.framer-wfyqv.framer-v-1dcusg4.framer-bzu5mb, .framer-wfyqv.framer-v-y29wox.framer-bzu5mb { padding: 19px 20px 40px 20px; width: 390px; }`,
          `.framer-wfyqv.framer-v-1dcusg4 .framer-1rfamfy, .framer-wfyqv.framer-v-y29wox .framer-1rfamfy { gap: 70px; padding: 70px 0px 0px 0px; }`,
          `.framer-wfyqv.framer-v-1dcusg4 .framer-ugu5i9, .framer-wfyqv.framer-v-12w42s8 .framer-ugu5i9, .framer-wfyqv.framer-v-y29wox .framer-ugu5i9, .framer-wfyqv.framer-v-de4tad .framer-ugu5i9 { gap: 4px; }`,
          `.framer-wfyqv.framer-v-1dcusg4 .framer-17uvimj, .framer-wfyqv.framer-v-y29wox .framer-17uvimj { align-content: center; align-items: center; flex-direction: column; gap: 36px; justify-content: flex-start; }`,
          `.framer-wfyqv.framer-v-1dcusg4 .framer-zauiq7, .framer-wfyqv.framer-v-12w42s8 .framer-zauiq7, .framer-wfyqv.framer-v-y29wox .framer-zauiq7, .framer-wfyqv.framer-v-de4tad .framer-zauiq7 { bottom: unset; flex-direction: column; gap: 12px; left: unset; position: relative; }`,
          `.framer-wfyqv.framer-v-12w42s8.framer-bzu5mb, .framer-wfyqv.framer-v-de4tad.framer-bzu5mb { gap: 0px; justify-content: center; padding: 19px 20px 19px 20px; width: 390px; }`,
          `.framer-wfyqv.framer-v-12w42s8 .framer-1rfamfy, .framer-wfyqv.framer-v-de4tad .framer-1rfamfy { gap: 80px; left: 24px; padding: 80px 0px 0px 0px; position: absolute; right: 24px; top: -604px; width: unset; }`,
          ...Ie,
          ...Ze,
          ...Me,
        ],
        `framer-wfyqv`,
      )),
      (En = Tn),
      (Tn.displayName = `Navbar`),
      (Tn.defaultProps = { height: 713, width: 1200 }),
      I(Tn, {
        variant: {
          options: [
            `nQMAqLr57`,
            `dBl3NGC5f`,
            `cwXBBDoAv`,
            `L3kUgDLAO`,
            `f0ZG9nWNx`,
            `gNqyhurpQ`,
            `Y4nVfJ2L4`,
            `IfBJpYU3A`,
            `koDxrtEXx`,
            `gKutwTn3I`,
            `WTf6Mzfwx`,
            `kaCRkbtrv`,
          ],
          optionTitles: [
            `Desktop open`,
            `Desktop`,
            `Desktop-Dark open`,
            `Desktop-Dark`,
            `Tablet open`,
            `Tablet`,
            `Tablet-Dark open`,
            `Tablet-Dark`,
            `Phone open`,
            `Phone`,
            `Phone-Dark open`,
            `Phone-Dark`,
          ],
          title: `Variant`,
          type: J.Enum,
        },
      }),
      F(
        Tn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Zt,
          ...Qt,
          ...$t,
          ...en,
          ...j(Le),
          ...j(Xe),
          ...j(Ne),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  On,
  kn,
  An,
  jn = e(() => {
    (R(),
      P.loadFonts([
        `Inter-Medium`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-MediumItalic`,
      ]),
      (On = [
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
      (kn = [
        `.framer-prBCU .framer-styles-preset-1oueo73:not(.rich-text-wrapper), .framer-prBCU .framer-styles-preset-1oueo73.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-prBCU .framer-styles-preset-1oueo73:not(.rich-text-wrapper), .framer-prBCU .framer-styles-preset-1oueo73.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-prBCU .framer-styles-preset-1oueo73:not(.rich-text-wrapper), .framer-prBCU .framer-styles-preset-1oueo73.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (An = `framer-prBCU`));
  });
function Mn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Nn,
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
  Z,
  Gn = e(() => {
    (y(),
      R(),
      D(),
      C(),
      jn(),
      (Nn = { KfhxUcSMW: { hover: !0 } }),
      (Pn = [`KfhxUcSMW`, `HX8rO0e7D`]),
      (Fn = `framer-hsU2i`),
      (In = { HX8rO0e7D: `framer-v-la8boq`, KfhxUcSMW: `framer-v-1ik74v` }),
      (Ln = { bounce: 0.35, delay: 0, duration: 0.39, type: `spring` }),
      (Rn = (e, t) => `translateY(-50%) ${t}`),
      (zn = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Bn = T.create(s)),
      (Vn = { Desktop: `KfhxUcSMW`, Phone: `HX8rO0e7D` }),
      (Hn = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        qvejIqk1P: r ?? a.qvejIqk1P ?? `Home`,
        sWMIKqa4R: n ?? a.sWMIKqa4R,
        variant: Vn[a.variant] ?? a.variant ?? `KfhxUcSMW`,
      })),
      (Un = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Wn = A(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: c } = Y();
          Te();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              qvejIqk1P: m,
              sWMIKqa4R: h,
              ...g
            } = Hn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: E,
              variants: D,
            } = re({
              cycleOrder: Pn,
              defaultVariant: `KfhxUcSMW`,
              enabledGestures: Nn,
              ref: r,
              variant: p,
              variantClassNames: In,
            }),
            O = Un(e, D),
            ne = M(Fn, An),
            k = () => v !== `HX8rO0e7D`;
          return f(te, {
            id: d ?? i,
            children: f(Bn, {
              animate: D,
              initial: !1,
              children: f(zn, {
                value: Ln,
                children: f(U, {
                  href: h,
                  motionChild: !0,
                  nodeId: `KfhxUcSMW`,
                  scopeId: `RfhQK9Aec`,
                  children: _(T.a, {
                    ...g,
                    ...x,
                    className: `${M(ne, `framer-1ik74v`, u, y)} framer-9085i4`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: O,
                    layoutId: `KfhxUcSMW`,
                    ref: r,
                    style: { ...l },
                    ...Mn(
                      {
                        "KfhxUcSMW-hover": { "data-framer-name": void 0 },
                        HX8rO0e7D: { "data-framer-name": `Phone` },
                      },
                      v,
                      S,
                    ),
                    children: [
                      k() &&
                        f(T.div, {
                          className: `framer-mdcx06`,
                          "data-framer-name": `Dot`,
                          layoutDependency: O,
                          layoutId: `YgtFDRkHU`,
                          style: {
                            backgroundColor: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                            opacity: 0,
                          },
                          transformTemplate: Rn,
                          variants: { "KfhxUcSMW-hover": { opacity: 0.25 } },
                          ...Mn(
                            {
                              "KfhxUcSMW-hover": { transformTemplate: void 0 },
                            },
                            v,
                            S,
                          ),
                        }),
                      f(K, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(T.p, {
                            className: `framer-styles-preset-1oueo73`,
                            "data-styles-preset": `HLpRTFhim`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))`,
                            },
                            children: `Home`,
                          }),
                        }),
                        className: `framer-1pcds7y`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `VbdXMy7OT`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hsU2i.framer-9085i4, .framer-hsU2i .framer-9085i4 { display: block; }`,
          `.framer-hsU2i.framer-1ik74v { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-hsU2i .framer-mdcx06 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: -12px; overflow: visible; position: absolute; top: 50%; width: 8px; z-index: 1; }`,
          `.framer-hsU2i .framer-1pcds7y { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hsU2i.framer-1ik74v { gap: 0px; } .framer-hsU2i.framer-1ik74v > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-hsU2i.framer-1ik74v > :first-child { margin-left: 0px; } .framer-hsU2i.framer-1ik74v > :last-child { margin-right: 0px; } }`,
          `.framer-hsU2i.framer-v-la8boq.framer-1ik74v { cursor: unset; }`,
          `.framer-hsU2i.framer-v-1ik74v.hover.framer-1ik74v { gap: 7px; }`,
          `.framer-hsU2i.framer-v-1ik74v.hover .framer-mdcx06 { left: unset; position: relative; top: unset; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hsU2i.framer-v-1ik74v.hover.framer-1ik74v { gap: 0px; } .framer-hsU2i.framer-v-1ik74v.hover.framer-1ik74v > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-hsU2i.framer-v-1ik74v.hover.framer-1ik74v > :first-child { margin-left: 0px; } .framer-hsU2i.framer-v-1ik74v.hover.framer-1ik74v > :last-child { margin-right: 0px; } }`,
          ...kn,
        ],
        `framer-hsU2i`,
      )),
      (Z = Wn),
      (Wn.displayName = `Link`),
      (Wn.defaultProps = { height: 26, width: 59 }),
      I(Wn, {
        variant: {
          options: [`KfhxUcSMW`, `HX8rO0e7D`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: J.Enum,
        },
        qvejIqk1P: {
          defaultValue: `Home`,
          displayTextArea: !1,
          title: `Title`,
          type: J.String,
        },
        sWMIKqa4R: { title: `Link`, type: J.Link },
      }),
      F(
        Wn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...j(On),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Kn,
  qn,
  Jn,
  Yn = e(() => {
    (R(),
      P.loadFonts([]),
      (Kn = [{ explicitInter: !0, fonts: [] }]),
      (qn = [
        `.framer-EP1im .framer-styles-preset-t6j6v0:not(.rich-text-wrapper), .framer-EP1im .framer-styles-preset-t6j6v0.rich-text-wrapper a { --framer-link-current-text-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); --framer-link-current-text-decoration: none; --framer-link-hover-text-color: rgba(255, 255, 255, 0.8); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); --framer-link-text-decoration: none; transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1) 0s; }`,
      ]),
      (Jn = `framer-EP1im`));
  }),
  Xn,
  Zn,
  Qn,
  $n,
  er,
  Q,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr = e(() => {
    (y(),
      R(),
      D(),
      C(),
      Ye(),
      ke(),
      Dn(),
      Gn(),
      ze(),
      Yn(),
      Ue(),
      (Xn = B(En)),
      (Zn = ie(En)),
      (Qn = B(Je)),
      ($n = B(Ae)),
      (er = B(Z)),
      (Q = Ce(En)),
      (tr = {
        IQm4fRAed: `(min-width: 810px) and (max-width: 1199px)`,
        rdYNz1Azs: `(max-width: 809px)`,
        yGczc_Ni4: `(min-width: 1200px)`,
      }),
      (nr = () => typeof document < `u`),
      (rr = `framer-cZwbQ`),
      (ir = {
        IQm4fRAed: `framer-v-1l0aw67`,
        rdYNz1Azs: `framer-v-xwr0r7`,
        yGczc_Ni4: `framer-v-128kipa`,
      }),
      (ar = (e, t) => `translateX(-50%) ${t}`),
      (or = {
        IQm4fRAed: [
          `.framer-cZwbQ .framer-f2k1ef-container { height: 200px; }`,
          `.framer-cZwbQ .framer-trcty { gap: 70px; padding: 60px 30px 100px 30px; }`,
          `.framer-cZwbQ .framer-146t41l { gap: 70px; padding: 0px 30px 0px 0px; }`,
          `.framer-cZwbQ .framer-6549yk { gap: 90px; }`,
          `.framer-cZwbQ .framer-h5wdmc { gap: 70px; }`,
          `.framer-cZwbQ .framer-zgp5ko { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-cZwbQ .framer-pbcowa { flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 102px); width: 1px; }`,
          `.framer-cZwbQ .framer-tlsn55 { padding: 42px 30px 42px 30px; }`,
          `.framer-cZwbQ .framer-1hjmsu8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 13px; }`,
          `.framer-cZwbQ .framer-1yvxvsb { align-self: stretch; gap: 30px; width: auto; }`,
        ],
        rdYNz1Azs: [
          `.framer-cZwbQ .framer-trcty { gap: 40px; padding: 50px 20px 50px 20px; }`,
          `.framer-cZwbQ .framer-a68ss { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; }`,
          `.framer-cZwbQ .framer-146t41l { align-self: unset; gap: 40px; padding: 0px; }`,
          `.framer-cZwbQ .framer-6549yk { align-self: unset; gap: 40px; }`,
          `.framer-cZwbQ .framer-h5wdmc { gap: 40px; }`,
          `.framer-cZwbQ .framer-pbcowa { flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 95px); width: 1px; }`,
          `.framer-cZwbQ .framer-tlsn55 { padding: 40px 24px 40px 24px; }`,
          `.framer-cZwbQ .framer-755gr8 { flex-direction: column; gap: 28px; justify-content: flex-start; }`,
          `.framer-cZwbQ .framer-1oh64os { align-self: unset; flex: none; height: min-content; order: 0; width: 100%; }`,
          `.framer-cZwbQ .framer-1hjmsu8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 28px; order: 1; }`,
          `.framer-cZwbQ .framer-1yvxvsb { align-content: flex-start; align-items: flex-start; align-self: stretch; flex-direction: column; gap: 14px; width: auto; }`,
        ],
      }),
      (sr = Object.keys(or)),
      (cr = {
        IQm4fRAed: `.framer-1l0aw67-override`,
        rdYNz1Azs: `.framer-xwr0r7-override`,
      }),
      (lr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-cZwbQ.framer-440t1j, .framer-cZwbQ .framer-440t1j { display: block; }`,
        `.framer-cZwbQ.framer-128kipa { --selection-background-color: #383838; --selection-color: #ffffff; align-content: center; align-items: center; background-color: var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-gdzxqr-container { flex: none; height: auto; left: 50%; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 9; }`,
        `.framer-cZwbQ .framer-f2k1ef-container { -webkit-user-select: none; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: calc(min(var(--framer-viewport-height, 100%), 100%) * 0.2); left: 0px; pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); right: 0px; user-select: none; z-index: 3; }`,
        `.framer-cZwbQ .framer-1kvak31 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-cZwbQ .framer-11bxfef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 1003; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-trcty { align-content: center; align-items: center; background-color: var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, #f5f5f5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 36px 100px 36px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-cZwbQ .framer-a68ss { display: grid; flex: none; gap: 4px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-146t41l { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px 80px 0px 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-1t47cau-container, .framer-cZwbQ .framer-w8igi8-container { flex: none; height: 16px; opacity: 0.3; position: relative; width: 16px; }`,
        `.framer-cZwbQ .framer-1oygp0e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-16mmfv6, .framer-cZwbQ .framer-1li9ifv, .framer-cZwbQ .framer-bz1z0l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-1ujx51u, .framer-cZwbQ .framer-197omvh, .framer-cZwbQ .framer-mwo3dv { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-cZwbQ .framer-16fx2me, .framer-cZwbQ .framer-1eev122, .framer-cZwbQ .framer-1gkpl6h { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-cZwbQ .framer-6549yk { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-lkc2p3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-h5wdmc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-cZwbQ .framer-9t3m4q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-zgp5ko { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre; width: auto; }`,
        `.framer-cZwbQ .framer-1gzggrh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cZwbQ .framer-q4ckir-container, .framer-cZwbQ .framer-78d6om-container, .framer-cZwbQ .framer-xznuws-container, .framer-cZwbQ .framer-1t37ueh-container, .framer-cZwbQ .framer-l0niii-container, .framer-cZwbQ .framer-bgn76m-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-cZwbQ .framer-pbcowa { align-content: flex-start; align-items: flex-start; aspect-ratio: 1.8194444444444444 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: var(--framer-aspect-ratio-supported, 108px); justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 35%; }`,
        `.framer-cZwbQ .framer-tlsn55 { align-content: center; align-items: center; background: linear-gradient(90deg, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, #0a0a0a) 0%, rgb(5, 5, 5) 85%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 42px 36px 42px 36px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-cZwbQ .framer-755gr8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; max-width: 1520px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-cZwbQ .framer-1oh64os { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-cZwbQ .framer-1cgv8u3 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-cZwbQ .framer-1hjmsu8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-cZwbQ .framer-1yvxvsb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-cZwbQ .framer-i71esd, .framer-cZwbQ .framer-9pr46i { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...Be,
        ...We,
        ...qn,
        `.framer-cZwbQ[data-selection="true"] * ::selection, .framer-cZwbQ [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (ur = {
        IQm4fRAed: `(min-width: 810px) and (max-width: 1199px)`,
        rdYNz1Azs: `(max-width: 809px)`,
        yGczc_Ni4: `(min-width: 1200px)`,
      }),
      (dr = ({ value: e }) =>
        he()
          ? null
          : f(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (fr = {
        "Desktop open": `nQMAqLr57`,
        "Desktop-Dark open": `cwXBBDoAv`,
        "Desktop-Dark": `L3kUgDLAO`,
        "Phone open": `koDxrtEXx`,
        "Phone-Dark open": `WTf6Mzfwx`,
        "Phone-Dark": `kaCRkbtrv`,
        "Tablet open": `f0ZG9nWNx`,
        "Tablet-Dark open": `Y4nVfJ2L4`,
        "Tablet-Dark": `IfBJpYU3A`,
        Desktop: `dBl3NGC5f`,
        Phone: `gKutwTn3I`,
        Tablet: `gNqyhurpQ`,
      }),
      (pr = { Desktop: `yGczc_Ni4`, Phone: `rdYNz1Azs`, Tablet: `IQm4fRAed` }),
      (mr = ({
        height: e,
        id: t,
        navDesktop: n,
        navMobile: r,
        navSwap: i,
        navTablet: a,
        width: o,
        ...s
      }) => ({
        ...s,
        d6DsEI3bi: fr[n] ?? n ?? s.d6DsEI3bi ?? `L3kUgDLAO`,
        qzuOeWl0L: fr[r] ?? r ?? s.qzuOeWl0L ?? `kaCRkbtrv`,
        sbwM6fk9L: fr[a] ?? a ?? s.sbwM6fk9L ?? `IfBJpYU3A`,
        SKaXIGg8p: i ?? s.SKaXIGg8p,
        variant: pr[s.variant] ?? s.variant ?? `yGczc_Ni4`,
      })),
      (hr = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = ee(),
          { activeLocale: a, setLocale: c } = Y(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            SKaXIGg8p: m,
            d6DsEI3bi: h,
            sbwM6fk9L: g,
            qzuOeWl0L: v,
            children: y,
            ...b
          } = mr(e),
          [x, S] = ye(p, tr, !1),
          C = M(rr, He, Ke, Jn),
          w = () => (nr() ? x !== `rdYNz1Azs` : !0);
        return (
          De(),
          Se({}),
          f(me.Provider, {
            value: {
              isLayoutTemplate: !0,
              primaryVariantId: `yGczc_Ni4`,
              variantClassNames: ir,
            },
            children: _(te, {
              id: d ?? i,
              children: [
                f(dr, {
                  value: `:root body { background: var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, rgb(245, 245, 245)); }`,
                }),
                _(T.div, {
                  ...b,
                  className: M(C, `framer-128kipa`, u),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: r,
                  style: { ...l },
                  children: [
                    f(H, {
                      height: 713,
                      width: `100vw`,
                      y: 0,
                      children: f(q, {
                        className: `framer-gdzxqr-container`,
                        "data-framer-layout-hint-center-x": !0,
                        layoutScroll: !0,
                        nodeId: `TtrWoIp_O`,
                        rendersWithMotion: !0,
                        scopeId: `wJ61fwN0M`,
                        transformTemplate: ar,
                        children: f(z, {
                          breakpoint: x,
                          overrides: {
                            IQm4fRAed: {
                              __framer__targets: [
                                { ref: m, target: `gNqyhurpQ` },
                              ],
                              variant: g,
                            },
                            rdYNz1Azs: {
                              __framer__targets: [
                                { ref: m, target: `gKutwTn3I` },
                              ],
                              variant: v,
                            },
                          },
                          children: f(Zn, {
                            __framer__animateOnce: !1,
                            __framer__targets: [
                              { ref: m, target: `dBl3NGC5f` },
                            ],
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            height: `100%`,
                            id: `TtrWoIp_O`,
                            layoutId: `TtrWoIp_O`,
                            style: { width: `100%` },
                            variant: h,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    w() &&
                      f(H, {
                        children: f(q, {
                          className: `framer-f2k1ef-container hidden-xwr0r7`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutScroll: !0,
                          nodeId: `vze1ECE7U`,
                          scopeId: `wJ61fwN0M`,
                          children: f(Je, {
                            blur: 7,
                            borderRadius: `0px`,
                            direction: `to bottom`,
                            height: `100%`,
                            id: `vze1ECE7U`,
                            layoutId: `vze1ECE7U`,
                            style: { height: `100%`, width: `100%` },
                            transition: {
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                    y,
                    f(`div`, { className: `framer-1kvak31` }),
                    _(`footer`, {
                      className: `framer-11bxfef`,
                      "data-framer-name": `Footer`,
                      children: [
                        f(`div`, {
                          className: `framer-trcty`,
                          "data-framer-name": `Top`,
                          children: _(`div`, {
                            className: `framer-a68ss`,
                            "data-framer-name": `Links`,
                            children: [
                              _(`div`, {
                                className: `framer-146t41l`,
                                "data-framer-name": `1`,
                                children: [
                                  f(z, {
                                    breakpoint: x,
                                    overrides: { rdYNz1Azs: { y: 1050 } },
                                    children: f(H, {
                                      height: 16,
                                      width: `16px`,
                                      y: 1060,
                                      children: f(q, {
                                        className: `framer-1t47cau-container`,
                                        nodeId: `ObPAKRgKg`,
                                        scopeId: `wJ61fwN0M`,
                                        children: f(Ae, {
                                          gUDzlhgLq: !0,
                                          height: `100%`,
                                          id: `ObPAKRgKg`,
                                          layoutId: `ObPAKRgKg`,
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
                                  _(`div`, {
                                    className: `framer-1oygp0e`,
                                    children: [
                                      _(`div`, {
                                        className: `framer-16mmfv6`,
                                        "data-framer-name": `Contact`,
                                        children: [
                                          f(K, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-0.04em`,
                                                  "--framer-line-height": `130%`,
                                                  "--framer-text-color": `rgb(9, 9, 9)`,
                                                },
                                                children: `KFD Beijing: `,
                                              }),
                                            }),
                                            className: `framer-1ujx51u`,
                                            fonts: [`Inter-Medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(K, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-txwsq6`,
                                                "data-styles-preset": `fDRzSjw63`,
                                                style: {
                                                  "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                },
                                                children: `Xinhua Science & Technology Bldg., No. 8 Tuofangying South Road, Chaoyang District, Beijing`,
                                              }),
                                            }),
                                            className: `framer-16fx2me`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      _(`div`, {
                                        className: `framer-1li9ifv`,
                                        "data-framer-name": `Contact`,
                                        children: [
                                          f(K, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-0.04em`,
                                                  "--framer-line-height": `130%`,
                                                  "--framer-text-color": `rgb(9, 9, 9)`,
                                                },
                                                children: `KFD Shanghai: `,
                                              }),
                                            }),
                                            className: `framer-197omvh`,
                                            fonts: [`Inter-Medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(K, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-txwsq6`,
                                                "data-styles-preset": `fDRzSjw63`,
                                                style: {
                                                  "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                },
                                                children: `JK1933A, No. 1040 North Suzhou Road, Beizhan Street, Jing'an District, Shanghai`,
                                              }),
                                            }),
                                            className: `framer-1eev122`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      _(`div`, {
                                        className: `framer-bz1z0l`,
                                        "data-framer-name": `Contact`,
                                        children: [
                                          f(K, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-0.04em`,
                                                  "--framer-line-height": `130%`,
                                                  "--framer-text-color": `rgb(9, 9, 9)`,
                                                },
                                                children: `KFD Singapore: `,
                                              }),
                                            }),
                                            className: `framer-mwo3dv`,
                                            fonts: [`Inter-Medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(K, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-txwsq6`,
                                                "data-styles-preset": `fDRzSjw63`,
                                                style: {
                                                  "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                },
                                                children: `10 Anson Road, #22-02 International Plaza, Singapore`,
                                              }),
                                            }),
                                            className: `framer-1gkpl6h`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              f(`div`, {
                                className: `framer-6549yk`,
                                "data-framer-name": `2`,
                                children: _(`div`, {
                                  className: `framer-lkc2p3`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    _(`div`, {
                                      className: `framer-h5wdmc`,
                                      "data-framer-name": `Nav`,
                                      children: [
                                        f(z, {
                                          breakpoint: x,
                                          overrides: { rdYNz1Azs: { y: 1854 } },
                                          children: f(H, {
                                            height: 16,
                                            width: `16px`,
                                            y: 1060,
                                            children: f(q, {
                                              className: `framer-w8igi8-container`,
                                              nodeId: `LiKewrAVb`,
                                              scopeId: `wJ61fwN0M`,
                                              children: f(Ae, {
                                                gUDzlhgLq: !0,
                                                height: `100%`,
                                                id: `LiKewrAVb`,
                                                layoutId: `LiKewrAVb`,
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
                                        _(`div`, {
                                          className: `framer-9t3m4q`,
                                          "data-framer-name": `Container`,
                                          children: [
                                            f(K, {
                                              __fromCanvasComponent: !0,
                                              children: f(s, {
                                                children: f(`p`, {
                                                  className: `framer-styles-preset-txwsq6`,
                                                  "data-styles-preset": `fDRzSjw63`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  },
                                                  children: `Navigation`,
                                                }),
                                              }),
                                              className: `framer-zgp5ko`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            _(`div`, {
                                              className: `framer-1gzggrh`,
                                              "data-framer-name": `Links`,
                                              children: [
                                                f(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        webPageId: `dh9XiRY81`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `dh9XiRY81`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `dh9XiRY81`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(z, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        IQm4fRAed: { y: 1253 },
                                                        rdYNz1Azs: {
                                                          y: 1944.2,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        height: 26,
                                                        y: 1190.2,
                                                        children: f(q, {
                                                          className: `framer-q4ckir-container`,
                                                          nodeId: `bX7HctO92`,
                                                          scopeId: `wJ61fwN0M`,
                                                          children: f(z, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              IQm4fRAed: {
                                                                sWMIKqa4R: e[1],
                                                              },
                                                              rdYNz1Azs: {
                                                                sWMIKqa4R: e[2],
                                                                variant: `HX8rO0e7D`,
                                                              },
                                                            },
                                                            children: f(Z, {
                                                              height: `100%`,
                                                              id: `bX7HctO92`,
                                                              layoutId: `bX7HctO92`,
                                                              qvejIqk1P: `Home`,
                                                              sWMIKqa4R: e[0],
                                                              variant: `KfhxUcSMW`,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                                f(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        webPageId: `Frboi95B5`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `Frboi95B5`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `Frboi95B5`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(z, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        IQm4fRAed: { y: 1289 },
                                                        rdYNz1Azs: {
                                                          y: 1980.2,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        height: 26,
                                                        y: 1226.2,
                                                        children: f(q, {
                                                          className: `framer-78d6om-container`,
                                                          nodeId: `BsRgqLObO`,
                                                          scopeId: `wJ61fwN0M`,
                                                          children: f(z, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              IQm4fRAed: {
                                                                sWMIKqa4R: e[1],
                                                              },
                                                              rdYNz1Azs: {
                                                                sWMIKqa4R: e[2],
                                                                variant: `HX8rO0e7D`,
                                                              },
                                                            },
                                                            children: f(Z, {
                                                              height: `100%`,
                                                              id: `BsRgqLObO`,
                                                              layoutId: `BsRgqLObO`,
                                                              qvejIqk1P: `Our Model`,
                                                              sWMIKqa4R: e[0],
                                                              variant: `KfhxUcSMW`,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                                f(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        webPageId: `dVT1LJUTV`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `dVT1LJUTV`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `dVT1LJUTV`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(z, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        IQm4fRAed: { y: 1325 },
                                                        rdYNz1Azs: {
                                                          y: 2016.2,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        height: 26,
                                                        y: 1262.2,
                                                        children: f(q, {
                                                          className: `framer-xznuws-container`,
                                                          nodeId: `NRorYW1EF`,
                                                          scopeId: `wJ61fwN0M`,
                                                          children: f(z, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              IQm4fRAed: {
                                                                sWMIKqa4R: e[1],
                                                              },
                                                              rdYNz1Azs: {
                                                                sWMIKqa4R: e[2],
                                                                variant: `HX8rO0e7D`,
                                                              },
                                                            },
                                                            children: f(Z, {
                                                              height: `100%`,
                                                              id: `NRorYW1EF`,
                                                              layoutId: `NRorYW1EF`,
                                                              qvejIqk1P: `Brands`,
                                                              sWMIKqa4R: e[0],
                                                              variant: `KfhxUcSMW`,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                                f(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        webPageId: `Tykwfmrh9`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `Tykwfmrh9`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `Tykwfmrh9`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(z, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        IQm4fRAed: { y: 1361 },
                                                        rdYNz1Azs: {
                                                          y: 2052.2,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        height: 26,
                                                        y: 1298.2,
                                                        children: f(q, {
                                                          className: `framer-1t37ueh-container`,
                                                          nodeId: `XDhO7nQ3D`,
                                                          scopeId: `wJ61fwN0M`,
                                                          children: f(z, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              IQm4fRAed: {
                                                                sWMIKqa4R: e[1],
                                                              },
                                                              rdYNz1Azs: {
                                                                sWMIKqa4R: e[2],
                                                                variant: `HX8rO0e7D`,
                                                              },
                                                            },
                                                            children: f(Z, {
                                                              height: `100%`,
                                                              id: `XDhO7nQ3D`,
                                                              layoutId: `XDhO7nQ3D`,
                                                              qvejIqk1P: `Why China`,
                                                              sWMIKqa4R: e[0],
                                                              variant: `KfhxUcSMW`,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                                f(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        webPageId: `p3zwtzFek`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `p3zwtzFek`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `p3zwtzFek`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(z, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        IQm4fRAed: { y: 1397 },
                                                        rdYNz1Azs: {
                                                          y: 2088.2,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        height: 26,
                                                        y: 1334.2,
                                                        children: f(q, {
                                                          className: `framer-l0niii-container`,
                                                          nodeId: `OJPW5CJFm`,
                                                          scopeId: `wJ61fwN0M`,
                                                          children: f(z, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              IQm4fRAed: {
                                                                sWMIKqa4R: e[1],
                                                              },
                                                              rdYNz1Azs: {
                                                                sWMIKqa4R: e[2],
                                                                variant: `HX8rO0e7D`,
                                                              },
                                                            },
                                                            children: f(Z, {
                                                              height: `100%`,
                                                              id: `OJPW5CJFm`,
                                                              layoutId: `OJPW5CJFm`,
                                                              qvejIqk1P: `Resources`,
                                                              sWMIKqa4R: e[0],
                                                              variant: `KfhxUcSMW`,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                                f(L, {
                                                  links: [
                                                    {
                                                      href: {
                                                        webPageId: `hAlvrhFMj`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `hAlvrhFMj`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                    {
                                                      href: {
                                                        webPageId: `hAlvrhFMj`,
                                                      },
                                                      implicitPathVariables:
                                                        void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(z, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        IQm4fRAed: { y: 1433 },
                                                        rdYNz1Azs: {
                                                          y: 2124.2,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        height: 26,
                                                        y: 1370.2,
                                                        children: f(q, {
                                                          className: `framer-bgn76m-container`,
                                                          nodeId: `rQ4Ql5L6n`,
                                                          scopeId: `wJ61fwN0M`,
                                                          children: f(z, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              IQm4fRAed: {
                                                                sWMIKqa4R: e[1],
                                                              },
                                                              rdYNz1Azs: {
                                                                sWMIKqa4R: e[2],
                                                                variant: `HX8rO0e7D`,
                                                              },
                                                            },
                                                            children: f(Z, {
                                                              height: `100%`,
                                                              id: `rQ4Ql5L6n`,
                                                              layoutId: `rQ4Ql5L6n`,
                                                              qvejIqk1P: `Contact`,
                                                              sWMIKqa4R: e[0],
                                                              variant: `KfhxUcSMW`,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    f(z, {
                                      breakpoint: x,
                                      overrides: {
                                        IQm4fRAed: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: N(1243),
                                            pixelHeight: 225,
                                            pixelWidth: 370,
                                            src: `https://framerusercontent.com/images/Cgi25Fy0vtCO5TsV0pE1bOlg4A.png`,
                                          },
                                        },
                                        rdYNz1Azs: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: N(1934.2),
                                            pixelHeight: 225,
                                            pixelWidth: 370,
                                            src: `https://framerusercontent.com/images/Cgi25Fy0vtCO5TsV0pE1bOlg4A.png`,
                                          },
                                        },
                                      },
                                      children: f(V, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: N(1180.2),
                                          pixelHeight: 225,
                                          pixelWidth: 370,
                                          src: `https://framerusercontent.com/images/Cgi25Fy0vtCO5TsV0pE1bOlg4A.png`,
                                        },
                                        className: `framer-pbcowa`,
                                        "data-framer-name": `Logo`,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        f(`div`, {
                          className: `framer-tlsn55`,
                          "data-framer-name": `Bottom`,
                          children: _(`div`, {
                            className: `framer-755gr8`,
                            "data-framer-name": `Container`,
                            children: [
                              f(`div`, {
                                className: `framer-1oh64os`,
                                "data-framer-name": `1`,
                                children: f(K, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      className: `framer-styles-preset-txwsq6`,
                                      "data-styles-preset": `fDRzSjw63`,
                                      children: `© 2025 KFD. All rights reserved.`,
                                    }),
                                  }),
                                  className: `framer-1cgv8u3`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              f(`div`, {
                                className: `framer-1hjmsu8`,
                                "data-framer-name": `2`,
                                children: _(`div`, {
                                  className: `framer-1yvxvsb`,
                                  "data-framer-name": `Links`,
                                  children: [
                                    f(K, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          className: `framer-styles-preset-1mf8d9g`,
                                          "data-styles-preset": `ypR5VEWEl`,
                                          style: {
                                            "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                          },
                                          children: f(U, {
                                            href: {
                                              pathVariables: {
                                                TMEoQtt6b: `privacy-policy`,
                                              },
                                              unresolvedPathSlugs: {
                                                TMEoQtt6b: {
                                                  collectionId: `op7RHXBeI`,
                                                  collectionItemId: `EnwiwcuRN`,
                                                },
                                              },
                                              webPageId: `CmPsU4Vle`,
                                            },
                                            motionChild: !0,
                                            nodeId: `PWVh4pfN3`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `wJ61fwN0M`,
                                            smoothScroll: !1,
                                            children: f(T.a, {
                                              className: `framer-styles-preset-t6j6v0`,
                                              "data-styles-preset": `XvoIJb93z`,
                                              children: `Privacy Policy`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-i71esd`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(K, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          className: `framer-styles-preset-1mf8d9g`,
                                          "data-styles-preset": `ypR5VEWEl`,
                                          style: {
                                            "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                          },
                                          children: f(U, {
                                            href: {
                                              pathVariables: {
                                                TMEoQtt6b: `terms-of-service`,
                                              },
                                              unresolvedPathSlugs: {
                                                TMEoQtt6b: {
                                                  collectionId: `op7RHXBeI`,
                                                  collectionItemId: `SYN_Cviyw`,
                                                },
                                              },
                                              webPageId: `CmPsU4Vle`,
                                            },
                                            motionChild: !0,
                                            nodeId: `Oj8nIsHQU`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `wJ61fwN0M`,
                                            smoothScroll: !1,
                                            children: f(T.a, {
                                              className: `framer-styles-preset-t6j6v0`,
                                              "data-styles-preset": `XvoIJb93z`,
                                              children: `Terms of Service`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-9pr46i`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
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
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (gr = (e) =>
        e === k.canvas || e === k.export
          ? [
              ...lr,
              ...sr.flatMap((e) => {
                let t = cr[e];
                return or[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [
              ...lr,
              ...sr.map((e) => `@media ${ur[e]} { ${or[e].join(` `)} }`),
            ]),
      (_r = A(hr, gr, `framer-cZwbQ`)),
      (vr = _r),
      (_r.displayName = `Main`),
      (_r.defaultProps = { height: 2474, width: 1200 }),
      I(_r, {
        SKaXIGg8p: { title: `Nav Swap`, type: J.ScrollSectionRef },
        d6DsEI3bi: Q?.variant && {
          ...Q.variant,
          defaultValue: `L3kUgDLAO`,
          description: void 0,
          hidden: void 0,
          title: `Nav Desktop`,
        },
        sbwM6fk9L: Q?.variant && {
          ...Q.variant,
          defaultValue: `IfBJpYU3A`,
          description: void 0,
          hidden: void 0,
          title: `Nav Tablet`,
        },
        qzuOeWl0L: Q?.variant && {
          ...Q.variant,
          defaultValue: `kaCRkbtrv`,
          description: void 0,
          hidden: void 0,
          title: `Nav Mobile`,
        },
      }),
      F(
        _r,
        [
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
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Xn,
          ...Qn,
          ...$n,
          ...er,
          ...j(Ve),
          ...j(Ge),
          ...j(Kn),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function br({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      d6DsEI3bi: `L3kUgDLAO`,
      qzuOeWl0L: `kaCRkbtrv`,
      sbwM6fk9L: `IfBJpYU3A`,
      SKaXIGg8p: {
        href: { hash: `:RcA4rO5Lj`, webPageId: `dh9XiRY81` },
        refKey: !0,
      },
    },
    a = {
      ...i,
      SKaXIGg8p: {
        href: { hash: `:xIwgNt6sV`, webPageId: `Tykwfmrh9` },
        refKey: !0,
      },
    },
    o = {
      ...i,
      d6DsEI3bi: `dBl3NGC5f`,
      qzuOeWl0L: `gKutwTn3I`,
      sbwM6fk9L: `gNqyhurpQ`,
      SKaXIGg8p: void 0,
    },
    s = ce(),
    c =
      {
        CmPsU4Vle: o,
        dh9XiRY81: i,
        dVT1LJUTV: o,
        Frboi95B5: o,
        hAlvrhFMj: o,
        Jhh0APa44: o,
        KWF5sRdmJ: o,
        NpmHBkeaX: o,
        p3zwtzFek: o,
        tR95VGg86: o,
        Tykwfmrh9: a,
      }[e] ?? {};
  switch (e) {
    case `dh9XiRY81`:
    case `Tykwfmrh9`:
    case `tR95VGg86`:
    case `NpmHBkeaX`:
    case `Jhh0APa44`:
    case `Frboi95B5`:
    case `dVT1LJUTV`:
    case `p3zwtzFek`:
    case `hAlvrhFMj`:
    case `KWF5sRdmJ`:
    case `CmPsU4Vle`:
      return S(L, { links: [c.SKaXIGg8p] }, (e) =>
        S(vr, { ...c, key: `Main`, SKaXIGg8p: s(e[0]), style: n }, t(!0)),
      );
    default:
      return t(!1);
  }
}
function xr(e) {
  switch (e) {
    case `dh9XiRY81`:
    case `Tykwfmrh9`:
    case `tR95VGg86`:
    case `NpmHBkeaX`:
    case `Jhh0APa44`:
    case `Frboi95B5`:
    case `dVT1LJUTV`:
    case `p3zwtzFek`:
    case `hAlvrhFMj`:
    case `KWF5sRdmJ`:
    case `CmPsU4Vle`:
      return [
        { hash: `128kipa`, mediaQuery: `(min-width: 1200px)` },
        {
          hash: `1l0aw67`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
        },
        { hash: `xwr0r7`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Sr({
  routeId: e,
  pathVariables: t,
  localeId: r,
  collectionItemId: c,
}) {
  let u = $[e].page.preload(),
    d = S(se, {
      children: S(pe, {
        children: S(Oe, {
          children: S(ne, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: $,
            collectionUtils: Er,
            framerSiteId: Dr,
            notFoundPage: W(
              () =>
                import(
                  `./Yo0aHylnXZIcxxC27puZA-NvnZbhAWN5qoX65qSySJ4.BwVlP6jJ.mjs`
                ),
            ),
            isReducedMotion: void 0,
            localeId: r,
            locales: Tr,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://kungfudata.com`,
            EditorBar:
              w === void 0
                ? void 0
                : (() => {
                    if (kr) {
                      console.log(
                        `[Framer On-Page Editing] Unavailable because navigator is bot`,
                      );
                      return;
                    }
                    return W(async () => {
                      w.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: {
                          useCurrentRoute: fe,
                          useLocaleInfo: Y,
                          useRouter: De,
                        },
                        react: {
                          createElement: S,
                          Fragment: s,
                          memo: m,
                          useCallback: i,
                          useEffect: a,
                          useRef: o,
                          useState: n,
                          useLayoutEffect: l,
                        },
                        "react-dom": { createPortal: h },
                      };
                      let { createEditorBar: e } = await import(
                        `https://framer.com/edit/init.mjs`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !1,
            LayoutTemplate: br,
            loadSnippetsModule: new Ee(
              () =>
                import(
                  `./gb8GNoUl_BDFcQZ_O8RCH3yK7NbCK1ujlnmAmr-eOvA.Rx_GK8G4.mjs`
                ),
            ),
            initialCollectionItemId: c,
          }),
          value: {
            autobahnNavigation: !0,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            mask: { angle: 270, type: `wipe`, width: `1%` },
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0.55,
              duration: 0.55,
              ease: [0.96, -0.02, 0.38, 1.01],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0%`,
            y: `0%`,
          },
          exit: {
            mask: { angle: 270, type: `wipe`, width: `1%` },
            opacity: 0.1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.55,
              ease: [0.96, -0.02, 0.38, 1.01],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `-30%`,
          },
        },
        routes: {},
      },
    });
  return (await u, d);
}
function Cr() {
  Or && w.__framer_events.push(arguments);
}
async function wr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || w.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    Cr(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = ge($, r)));
    else {
      ge($, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = le($, decodeURIComponent(location.pathname), !0, Tr);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = Sr({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    w !== void 0 &&
      (async () => {
        let e = $[r],
          t = Tr.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Er) {
          let r = await Er[e.collectionId]?.(),
            [i] = Object.values(a);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          w.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Dr ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: w.location.href,
              hostname: w.location.hostname || null,
              pathname: w.location.pathname || null,
              hash: w.location.hash || null,
              search: w.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await ae({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            }),
          ));
      })();
    let l = await c;
    e
      ? (_e(`framer-rewrite-breakpoints`, () => {
          (xe(o), w.__framer_onRewriteBreakpoints?.(o));
        }),
        (kr ? (e) => e() : u)(() => {
          (be(), de(), x(t, l, { onRecoverableError: n }));
        }))
      : b(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var $, Tr, Er, Dr, Or, kr;
e(() => {
  if (
    (r(),
    R(),
    C(),
    d(),
    v(),
    yr(),
    ($ = {
      dh9XiRY81: {
        elements: {
          LtVklMkWE: `hero`,
          qrzhDywBi: `whychina`,
          RcA4rO5Lj: `howitworks`,
        },
        page: W(
          () =>
            import(
              `./qc681ydU9sW8y55dBm32tCKv5bbyitIyFTMaje3UMUM.BzVCdypr.mjs`
            ),
        ),
        path: `/`,
      },
      Tykwfmrh9: {
        elements: { cdVK2NtsZ: `hero`, xIwgNt6sV: `narration` },
        page: W(
          () =>
            import(
              `./ScACVNdGwy8TIip6mAZBfcspvAW8d9jwhfR_YElDSxE.BIOqJAc3.mjs`
            ),
        ),
        path: `/why-china`,
      },
      tR95VGg86: {
        elements: {},
        page: W(
          () =>
            import(
              `./Yo0aHylnXZIcxxC27puZA-NvnZbhAWN5qoX65qSySJ4.BwVlP6jJ.mjs`
            ),
        ),
        path: `/404`,
      },
      NpmHBkeaX: {
        elements: {},
        page: W(
          () =>
            import(
              `./BbLQsMDfmyu3I1n22YPDrdOsObBDhvs8tn3HySvOWBI.BXRcy52Y.mjs`
            ),
        ),
        path: `/confirmed`,
      },
      Jhh0APa44: {
        elements: {},
        page: W(
          () =>
            import(
              `./4qr0OBDWo1ROCugXYYElgDqnmXXzBZbhU01qRWjKjCQ.BDfZYYKR.mjs`
            ),
        ),
        path: `/thankyou`,
      },
      Frboi95B5: {
        elements: {},
        page: W(
          () =>
            import(
              `./G16j_Gz-8M8cvISyanv2m5krb1dXyFX_esQMEKEUrvI.BiQ2LPQU.mjs`
            ),
        ),
        path: `/our-model`,
      },
      dVT1LJUTV: {
        elements: {},
        page: W(
          () =>
            import(
              `./QBiJEczUy8qESlLbccY9jvzF45WzW2fGq2tj6FPFrNE.Bq7vWFS7.mjs`
            ),
        ),
        path: `/brands`,
      },
      p3zwtzFek: {
        elements: {},
        page: W(
          () =>
            import(
              `./p7TYfvDj8_R6Yhahg7jZJAuWCRPwWt-nxqNwvP1PsWo.BDSwWAso.mjs`
            ),
        ),
        path: `/resources`,
      },
      hAlvrhFMj: {
        elements: {},
        page: W(
          () =>
            import(
              `./TmS4QFpRv5ATPG8klURAS6_SO75u3sjYwMU6boatSAE.BbI3VtS2.mjs`
            ),
        ),
        path: `/contact`,
      },
      KWF5sRdmJ: {
        collectionId: `bcXKTrupt`,
        elements: {},
        page: W(
          () =>
            import(
              `./K1P3RSsyjQac_xeASTwrDVH3aBznM9pTKRb2P38Lm8Y.DkijFPHl.mjs`
            ),
        ),
        path: `/resources/:uHjluscqB`,
      },
      CmPsU4Vle: {
        collectionId: `op7RHXBeI`,
        elements: {},
        page: W(
          () =>
            import(
              `./7EZs_6A5BwOnIbEqH84NPJozKd4tM_fLf8IqElWw1KY.DpLUll_K.mjs`
            ),
        ),
        path: `/legal/:TMEoQtt6b`,
      },
    }),
    (Tr = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    (Er = {
      bcXKTrupt: async () =>
        (
          await import(
            `./g4HDCRMww9Hn5D2l7_t5wOyIpySkMUKJJwUGe2zS9ss.BeIBn_f8.mjs`
          )
        )?.utils,
      op7RHXBeI: async () =>
        (
          await import(
            `./yYg6WGmT22N0YV-Lire-E06xtJ6HQmV-i3BwuGKjtwQ.BRKNetBf.mjs`
          )
        )?.utils,
    }),
    (Dr = `28d626ac4ef7a482e95e0770de31a88397849192fcd9daf8f6adce4c8dcf233e`),
    (Or = typeof document < `u`),
    (kr =
      Or &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        c.userAgent,
      )),
    Or)
  ) {
    ((w.__framer_importFromPackage = (e, t) => () =>
      S(we, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (w.__framer_events = w.__framer_events || []),
      ue(),
      O());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? wr(!0, e) : wr(!1, e);
  }
})();
export { xr as getLayoutTemplateBreakpoints, Sr as getPageRoot };
//# sourceMappingURL=script_main.CnpS4C0Y.mjs.map
