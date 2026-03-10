import { t as e } from "./rolldown-runtime.D1deASqF.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  j as o,
  l as s,
  o as c,
  s as ee,
  w as l,
  y as u,
} from "./react.DJ7UgqC4.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.D2KMUwms.mjs";
import {
  A as h,
  At as g,
  Dt as _,
  Et as v,
  G as y,
  I as b,
  K as x,
  L as S,
  M as C,
  N as w,
  O as T,
  Ot as E,
  Q as D,
  St as O,
  T as k,
  U as A,
  _ as j,
  a as M,
  at as N,
  b as te,
  gt as ne,
  h as re,
  ht as P,
  j as ie,
  k as F,
  kt as I,
  mt as ae,
  n as oe,
  o as L,
  pt as se,
  s as R,
  ut as z,
  vt as B,
  w as ce,
  wt as le,
  yt as ue,
} from "./framer.BLOKjrOc.mjs";
import { i as de, r as fe } from "./shared-lib.CFi5o8rJ.mjs";
import {
  a as pe,
  i as me,
  n as he,
  o as ge,
  r as V,
  t as _e,
} from "./r23DRHX7m.-Xi0yJj9.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./gd6AWaps9.Cl5NzHfB.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./zgy6bak25.DLRokvtf.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./oFAZmwcVJ.5ar1Q0fv.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./fN1_sGlJp.CHV48JVL.mjs";
import { n as Pe, t as Fe } from "./zdCt3kT_M.BdETTeu5.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./fN1_sGlJp.BdGA3VX5.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./HLpRTFhim.BDD5ComK.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./mxo_rwZbG.BEIDHbqO.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./nCOD2Sdie.DJuT2m3E.mjs";
import {
  a as Qe,
  c as $e,
  i as et,
  n as tt,
  o as nt,
  r as rt,
  s as it,
  t as at,
} from "./LyKOtaXoC.BuJu181l.mjs";
import { n as ot, t as st } from "./BvyOYDKED.CfRCggGZ.mjs";
import { i as ct, n as lt, r as ut, t as dt } from "./pAxoS1kOX.BumLURN3.mjs";
import { n as ft, r as pt } from "./dVT1LJUTV.DnYIZd7c.mjs";
function mt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  H,
  Dt,
  Ot = e(() => {
    (c(),
      D(),
      m(),
      l(),
      (ht = { VMnT_oIqC: { hover: !0 } }),
      (gt = [`VMnT_oIqC`, `KSgQQNr4r`]),
      (_t = `framer-2SmJL`),
      (vt = { KSgQQNr4r: `framer-v-1ijknvv`, VMnT_oIqC: `framer-v-rbw179` }),
      (yt = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (bt = { bounce: 0.35, delay: 0, duration: 0.39, type: `spring` }),
      (xt = (e, t) => `translateX(-50%) ${t}`),
      (St = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (Ct = d.create(r)),
      (wt = { Default: `VMnT_oIqC`, Phone: `KSgQQNr4r` }),
      (Tt = ({
        bG: e,
        color: t,
        height: n,
        hoverBG: r,
        hoverColor: i,
        id: a,
        link: o,
        padding: s,
        title: c,
        width: ee,
        ...l
      }) => ({
        ...l,
        iyuXB1N8q:
          t ??
          l.iyuXB1N8q ??
          `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
        R8iwJ2h7U:
          i ??
          l.R8iwJ2h7U ??
          `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
        SnWMJ5xn7: r ?? l.SnWMJ5xn7 ?? `rgb(0, 0, 0)`,
        tulsc_W5A:
          e ??
          l.tulsc_W5A ??
          `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
        variant: wt[l.variant] ?? l.variant ?? `VMnT_oIqC`,
        X9Xju9FBn: c ?? l.X9Xju9FBn ?? `Submit`,
        XooFhyn6y: o ?? l.XooFhyn6y,
        xSaAhnG8s: s ?? l.xSaAhnG8s ?? `18px 30px 18px 30px`,
      })),
      (Et = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (H = _(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = u(),
            { activeLocale: ee, setLocale: l } = B();
          z();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: g,
              X9Xju9FBn: _,
              XooFhyn6y: y,
              iyuXB1N8q: x,
              tulsc_W5A: S,
              R8iwJ2h7U: C,
              SnWMJ5xn7: w,
              xSaAhnG8s: T,
              ...E
            } = Tt(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: N,
              setVariant: ne,
              variants: re,
            } = v({
              cycleOrder: gt,
              defaultVariant: `VMnT_oIqC`,
              enabledGestures: ht,
              ref: o,
              variant: g,
              variantClassNames: vt,
            }),
            P = Et(e, re),
            ie = b(_t);
          return i(p, {
            id: h ?? c,
            children: i(Ct, {
              animate: re,
              initial: !1,
              children: i(St, {
                value: bt,
                children: i(te, {
                  href: y,
                  motionChild: !0,
                  nodeId: `VMnT_oIqC`,
                  scopeId: `eDUVCTTXq`,
                  children: s(d.a, {
                    ...E,
                    ...A,
                    className: `${b(ie, `framer-rbw179`, m, O)} framer-1qniyoc`,
                    "data-framer-name": `Default`,
                    "data-reset": `button`,
                    layoutDependency: P,
                    layoutId: `VMnT_oIqC`,
                    ref: o,
                    style: {
                      "--1lyxbg6": yt(T),
                      backgroundColor: S,
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                      ...f,
                    },
                    variants: { "VMnT_oIqC-hover": { backgroundColor: w } },
                    ...mt(
                      {
                        "VMnT_oIqC-hover": { "data-framer-name": void 0 },
                        KSgQQNr4r: { "data-framer-name": `Phone` },
                      },
                      D,
                      j,
                    ),
                    children: [
                      i(F, {
                        __fromCanvasComponent: !0,
                        children: i(r, {
                          children: i(d.p, {
                            style: {
                              "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                              "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `600`,
                              "--framer-letter-spacing": `-0.04em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-iyuXB1N8q-eDUVCTTXq))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-1mhfyus`,
                        "data-framer-name": `Submit 1`,
                        fonts: [`Inter-SemiBold`],
                        layoutDependency: P,
                        layoutId: `kyftlWjnv`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-iyuXB1N8q-eDUVCTTXq)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-iyuXB1N8q-eDUVCTTXq": x,
                          "--variable-reference-R8iwJ2h7U-eDUVCTTXq": C,
                          opacity: 0,
                        },
                        text: _,
                        transformTemplate: xt,
                        variants: {
                          "VMnT_oIqC-hover": {
                            "--extracted-r6o4lv": `var(--variable-reference-R8iwJ2h7U-eDUVCTTXq)`,
                            "--variable-reference-R8iwJ2h7U-eDUVCTTXq": C,
                            opacity: 1,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...mt(
                          {
                            "VMnT_oIqC-hover": {
                              children: i(r, {
                                children: i(d.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-R8iwJ2h7U-eDUVCTTXq))`,
                                  },
                                  children: `Submit`,
                                }),
                              }),
                              transformTemplate: void 0,
                            },
                          },
                          D,
                          j,
                        ),
                      }),
                      i(F, {
                        __fromCanvasComponent: !0,
                        children: i(r, {
                          children: i(d.p, {
                            style: {
                              "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                              "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `600`,
                              "--framer-letter-spacing": `-0.04em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-iyuXB1N8q-eDUVCTTXq))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-meoha7`,
                        "data-framer-name": `Submit 2`,
                        fonts: [`Inter-SemiBold`],
                        layoutDependency: P,
                        layoutId: `u0YJuuI3F`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-iyuXB1N8q-eDUVCTTXq)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-iyuXB1N8q-eDUVCTTXq": x,
                          "--variable-reference-R8iwJ2h7U-eDUVCTTXq": C,
                          opacity: 1,
                        },
                        text: _,
                        variants: {
                          "VMnT_oIqC-hover": {
                            "--extracted-r6o4lv": `var(--variable-reference-R8iwJ2h7U-eDUVCTTXq)`,
                            "--variable-reference-R8iwJ2h7U-eDUVCTTXq": C,
                            opacity: 0,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...mt(
                          {
                            "VMnT_oIqC-hover": {
                              children: i(r, {
                                children: i(d.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-R8iwJ2h7U-eDUVCTTXq))`,
                                  },
                                  children: `Submit`,
                                }),
                              }),
                              transformTemplate: xt,
                            },
                          },
                          D,
                          j,
                        ),
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
          `.framer-2SmJL.framer-1qniyoc, .framer-2SmJL .framer-1qniyoc { display: block; }`,
          `.framer-2SmJL.framer-rbw179 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 58px; justify-content: center; overflow: hidden; padding: var(--1lyxbg6); position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2SmJL .framer-1mhfyus { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: -22px; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-2SmJL .framer-meoha7 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-2SmJL.framer-v-1ijknvv.framer-rbw179 { cursor: unset; }`,
          `.framer-2SmJL.framer-v-rbw179.hover .framer-1mhfyus { left: unset; position: relative; top: unset; }`,
          `.framer-2SmJL.framer-v-rbw179.hover .framer-meoha7 { left: 50%; position: absolute; top: 58px; z-index: 1; }`,
        ],
        `framer-2SmJL`,
      )),
      (Dt = H),
      (H.displayName = `Large button`),
      (H.defaultProps = { height: 58, width: 117 }),
      w(H, {
        variant: {
          options: [`VMnT_oIqC`, `KSgQQNr4r`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: R.Enum,
        },
        X9Xju9FBn: {
          defaultValue: `Submit`,
          displayTextArea: !1,
          title: `Title`,
          type: R.String,
        },
        XooFhyn6y: { title: `Link`, type: R.Link },
        iyuXB1N8q: {
          defaultValue: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Color`,
          type: R.Color,
        },
        tulsc_W5A: {
          defaultValue: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
          title: `BG`,
          type: R.Color,
        },
        R8iwJ2h7U: {
          defaultValue: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Hover color`,
          type: R.Color,
        },
        SnWMJ5xn7: {
          defaultValue: `rgb(0, 0, 0)`,
          title: `Hover BG`,
          type: R.Color,
        },
        xSaAhnG8s: {
          defaultValue: `18px 30px 18px 30px`,
          title: `Padding`,
          type: R.Padding,
        },
      }),
      C(
        H,
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
  }),
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  U,
  Wt,
  Gt = e(() => {
    (c(),
      D(),
      m(),
      l(),
      (kt = E(d.div)),
      (At = [`PNXx24aK0`, `Pdr9VkE8H`]),
      (jt = `framer-Pinev`),
      (Mt = { Pdr9VkE8H: `framer-v-jzxgxw`, PNXx24aK0: `framer-v-gl9p1k` }),
      (Nt = { duration: 0, type: `tween` }),
      (Pt = {
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
      (Ft = {
        delay: 0,
        duration: 0.3,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (It = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ft,
        x: 0,
        y: 0,
      }),
      (Lt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Rt = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (zt = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (Bt = d.create(r)),
      (Vt = { Hidden: `Pdr9VkE8H`, Loading: `PNXx24aK0` }),
      (Ht = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Vt[r.variant] ?? r.variant ?? `PNXx24aK0`,
      })),
      (Ut = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (U = _(
        a(function (e, t) {
          let r = n(null),
            a = t ?? r,
            o = u(),
            { activeLocale: s, setLocale: c } = B();
          z();
          let {
              style: ee,
              className: l,
              layoutId: f,
              variant: m,
              ...h
            } = Ht(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = v({
              cycleOrder: At,
              defaultVariant: `PNXx24aK0`,
              ref: a,
              variant: m,
              variantClassNames: Mt,
            }),
            D = Ut(e, E),
            O = [],
            k = () => g !== `Pdr9VkE8H`,
            A = b(jt, ...O);
          return i(p, {
            id: f ?? o,
            children: i(Bt, {
              animate: E,
              initial: !1,
              children:
                k() &&
                i(zt, {
                  value: Nt,
                  children: i(d.div, {
                    ...h,
                    ...x,
                    className: b(A, `framer-gl9p1k`, l, _),
                    "data-framer-name": `Loading`,
                    layoutDependency: D,
                    layoutId: `PNXx24aK0`,
                    ref: a,
                    style: { ...ee },
                    children: i(kt, {
                      __framer__animate: { transition: Ft },
                      __framer__animateOnce: !1,
                      __framer__enter: Pt,
                      __framer__exit: It,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-l5c3jz`,
                      "data-framer-name": `Spinner`,
                      layoutDependency: D,
                      layoutId: `nCTw4r0Hu`,
                      style: {
                        mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                      },
                      children: i(kt, {
                        __framer__loop: Rt,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: Lt,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-py1yk1`,
                        "data-framer-name": `Conic`,
                        layoutDependency: D,
                        layoutId: `kZNCHCV8q`,
                        style: {
                          background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg)`,
                        },
                        children: i(d.div, {
                          className: `framer-fe51e7`,
                          "data-framer-name": `Round`,
                          layoutDependency: D,
                          layoutId: `ZBctiPb2V`,
                          style: {
                            backgroundColor: `rgb(153, 153, 153)`,
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                        }),
                      }),
                    }),
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Pinev.framer-1iqqwnz, .framer-Pinev .framer-1iqqwnz { display: block; }`,
          `.framer-Pinev.framer-gl9p1k { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-Pinev .framer-l5c3jz { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-Pinev .framer-py1yk1 { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-Pinev .framer-fe51e7 { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
        ],
        `framer-Pinev`,
      )),
      (Wt = U),
      (U.displayName = `Spinner`),
      (U.defaultProps = { height: 40, width: 40 }),
      w(U, {
        variant: {
          options: [`PNXx24aK0`, `Pdr9VkE8H`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      C(U, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  Kt,
  qt,
  Jt,
  Yt = e(() => {
    (D(),
      S.loadFonts([
        `Inter-Medium`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-MediumItalic`,
      ]),
      (Kt = [
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
      (qt = [
        `.framer-ofTFr .framer-styles-preset-2s58fc:not(.rich-text-wrapper), .framer-ofTFr .framer-styles-preset-2s58fc.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #090909; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-ofTFr .framer-styles-preset-2s58fc:not(.rich-text-wrapper), .framer-ofTFr .framer-styles-preset-2s58fc.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #090909; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-ofTFr .framer-styles-preset-2s58fc:not(.rich-text-wrapper), .framer-ofTFr .framer-styles-preset-2s58fc.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #090909; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Jt = `framer-ofTFr`));
  }),
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  W,
  rn,
  an = e(() => {
    (c(),
      D(),
      m(),
      l(),
      (Xt = `framer-oFNEt`),
      (Zt = { sOcfW8Afc: `framer-v-1ku8kgp` }),
      (Qt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($t = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (en = d.create(r)),
      (tn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (nn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (W = _(
        a(function (e, t) {
          let r = n(null),
            a = t ?? r,
            o = u(),
            { activeLocale: s, setLocale: c } = B();
          z();
          let {
              style: ee,
              className: l,
              layoutId: f,
              variant: m,
              ...g
            } = tn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = v({
              defaultVariant: `sOcfW8Afc`,
              ref: a,
              variant: m,
              variantClassNames: Zt,
            }),
            O = nn(e, D),
            k = b(Xt);
          return i(p, {
            id: f ?? o,
            children: i(en, {
              animate: D,
              initial: !1,
              children: i($t, {
                value: Qt,
                children: i(d.div, {
                  ...g,
                  ...S,
                  className: b(k, `framer-1ku8kgp`, l, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `sOcfW8Afc`,
                  ref: a,
                  style: { ...ee },
                  children: i(h, {
                    className: `framer-1pptfs4`,
                    "data-framer-name": `Star Rating`,
                    layout: `position`,
                    layoutDependency: O,
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
      (rn = W),
      (W.displayName = `Rating stars`),
      (W.defaultProps = { height: 12, width: 56 }),
      C(W, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function on(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  G,
  mn,
  hn,
  gn,
  _n,
  vn,
  K,
  q,
  yn = e(() => {
    (c(),
      D(),
      m(),
      l(),
      Ae(),
      Ee(),
      Yt(),
      ot(),
      an(),
      (sn = A(rn)),
      (cn = A(st)),
      (ln = { aUwTuNsVb: { hover: !0 }, isAPdhbEi: { hover: !0 } }),
      (un = [`isAPdhbEi`, `aUwTuNsVb`, `rHtk7mxj3`]),
      (dn = `framer-nNSZt`),
      (fn = {
        aUwTuNsVb: `framer-v-1hfzc71`,
        isAPdhbEi: `framer-v-1xa06lp`,
        rHtk7mxj3: `framer-v-hfi02n`,
      }),
      (pn = {
        delay: 0,
        duration: 0.45,
        ease: [0.82, 0.11, 0.37, 0.82],
        type: `tween`,
      }),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (mn = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (hn = d.create(r)),
      (gn = {
        "Desktop reversed": `aUwTuNsVb`,
        Desktop: `isAPdhbEi`,
        Phone: `rHtk7mxj3`,
      }),
      (_n = ({
        height: e,
        id: t,
        image: n,
        name1: r,
        subtitle: i,
        testimomnial1: a,
        testimomnial2: o,
        width: s,
        ...c
      }) => ({
        ...c,
        CNR_PIjaw: n ??
          c.CNR_PIjaw ?? {
            alt: ``,
            pixelHeight: 400,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/v2v5H7JyNs32xnkaBSwUWhCt8.jpg`,
          },
        gmWSXR53y: r ?? c.gmWSXR53y ?? `Name`,
        IUuoDhO3z: i ?? c.IUuoDhO3z ?? `Subtitle`,
        nlzPEiiXn: o ?? c.nlzPEiiXn ?? `Testimomnial`,
        variant: gn[c.variant] ?? c.variant ?? `isAPdhbEi`,
        xKE54n4Ed: a ?? c.xKE54n4Ed ?? `Testimomnial`,
      })),
      (vn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (K = _(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = u(),
            { activeLocale: ee, setLocale: l } = B(),
            f = z(),
            {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              gmWSXR53y: y,
              IUuoDhO3z: S,
              CNR_PIjaw: C,
              xKE54n4Ed: w,
              nlzPEiiXn: T,
              ...E
            } = _n(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: N,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: P,
            } = v({
              cycleOrder: un,
              defaultVariant: `isAPdhbEi`,
              enabledGestures: ln,
              ref: o,
              variant: _,
              variantClassNames: fn,
            }),
            I = vn(e, P),
            ae = b(dn, ke, Jt, Ne);
          return i(p, {
            id: g ?? c,
            children: i(hn, {
              animate: P,
              initial: !1,
              children: i(mn, {
                value: pn,
                children: s(d.div, {
                  ...E,
                  ...A,
                  className: b(ae, `framer-1xa06lp`, h, O),
                  "data-framer-name": `Desktop`,
                  layoutDependency: I,
                  layoutId: `isAPdhbEi`,
                  ref: o,
                  style: { ...m },
                  ...on(
                    {
                      "aUwTuNsVb-hover": { "data-framer-name": void 0 },
                      "isAPdhbEi-hover": { "data-framer-name": void 0 },
                      aUwTuNsVb: { "data-framer-name": `Desktop reversed` },
                      rHtk7mxj3: { "data-framer-name": `Phone` },
                    },
                    D,
                    N,
                  ),
                  children: [
                    i(d.div, {
                      className: `framer-1nedhuv`,
                      "data-framer-name": `Top`,
                      layoutDependency: I,
                      layoutId: `BjTKylqsP`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 18,
                        borderBottomRightRadius: 18,
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                      },
                      variants: {
                        "aUwTuNsVb-hover": {
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                        "isAPdhbEi-hover": {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        },
                      },
                      children: s(d.div, {
                        className: `framer-d927ns`,
                        "data-framer-name": `User Info Container`,
                        layoutDependency: I,
                        layoutId: `i8RLZ97bk`,
                        children: [
                          i(j, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: x(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 642) -
                                    0 -
                                    (248 +
                                      Math.max(
                                        0,
                                        ((f?.height || 642) - 0 - 252) / 1,
                                      ) *
                                        1 +
                                      4)) /
                                    2 +
                                    0 +
                                    0) +
                                  30 +
                                  0 +
                                  70.5,
                              ),
                              sizes: `46px`,
                              ...G(C),
                            },
                            className: `framer-1ibhtdp`,
                            "data-framer-name": `User Image`,
                            layoutDependency: I,
                            layoutId: `C4PhoRQh_`,
                            style: {
                              borderBottomLeftRadius: 7,
                              borderBottomRightRadius: 7,
                              borderTopLeftRadius: 7,
                              borderTopRightRadius: 7,
                            },
                            ...on(
                              {
                                "aUwTuNsVb-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: x(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 646) -
                                          0 -
                                          (Math.max(
                                            0,
                                            ((f?.height || 646) - 0 - 248) / 1,
                                          ) *
                                            1 +
                                            248 +
                                            0)) /
                                          2 +
                                          Math.max(
                                            0,
                                            ((f?.height || 646) - 0 - 248) / 1,
                                          ) *
                                            1 +
                                          0) +
                                        30 +
                                        0 +
                                        70.5,
                                    ),
                                    sizes: `46px`,
                                    ...G(C),
                                  },
                                },
                                "isAPdhbEi-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: x(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 646) -
                                          0 -
                                          (248 +
                                            Math.max(
                                              0,
                                              ((f?.height || 646) - 0 - 248) /
                                                1,
                                            ) *
                                              1 +
                                            0)) /
                                          2 +
                                          0 +
                                          0) +
                                        30 +
                                        0 +
                                        70.5,
                                    ),
                                    sizes: `46px`,
                                    ...G(C),
                                  },
                                },
                                aUwTuNsVb: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: x(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 642) -
                                          0 -
                                          (Math.max(
                                            0,
                                            ((f?.height || 642) - 0 - 252) / 1,
                                          ) *
                                            1 +
                                            248 +
                                            4)) /
                                          2 +
                                          Math.max(
                                            0,
                                            ((f?.height || 642) - 0 - 252) / 1,
                                          ) *
                                            1 +
                                          4) +
                                        30 +
                                        0 +
                                        70.5,
                                    ),
                                    sizes: `46px`,
                                    ...G(C),
                                  },
                                },
                                rHtk7mxj3: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: x(
                                      (f?.y || 0) +
                                        0 +
                                        (((f?.height || 400) -
                                          0 -
                                          (Math.max(
                                            0,
                                            ((f?.height || 400) - 0 - 240) / 1,
                                          ) *
                                            1 +
                                            236 +
                                            4)) /
                                          2 +
                                          Math.max(
                                            0,
                                            ((f?.height || 400) - 0 - 240) / 1,
                                          ) *
                                            1 +
                                          4) +
                                        24 +
                                        0 +
                                        70.5,
                                    ),
                                    sizes: `46px`,
                                    ...G(C),
                                  },
                                },
                              },
                              D,
                              N,
                            ),
                          }),
                          s(d.div, {
                            className: `framer-oibkzm`,
                            "data-framer-name": `User Info`,
                            layoutDependency: I,
                            layoutId: `K4O8UKhji`,
                            children: [
                              i(F, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(d.p, {
                                    className: `framer-styles-preset-9v8dhs`,
                                    "data-styles-preset": `oFAZmwcVJ`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))`,
                                    },
                                    children: `Name`,
                                  }),
                                }),
                                className: `framer-oyhvcg`,
                                "data-framer-name": `Join Us Title`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `Wnaj6J5iw`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                text: y,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(F, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(d.p, {
                                    className: `framer-styles-preset-2s58fc`,
                                    "data-styles-preset": `svYtzYwMA`,
                                    children: `Subtitle`,
                                  }),
                                }),
                                className: `framer-1wuq2o9`,
                                "data-framer-name": `Join Us Description`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `S5Aynt694`,
                                style: {
                                  "--framer-paragraph-spacing": `0px`,
                                  opacity: 0.6,
                                },
                                text: S,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    s(d.div, {
                      className: `framer-1flz52s`,
                      "data-framer-name": `Bottom`,
                      layoutDependency: I,
                      layoutId: `eZTZ_5lvB`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 18,
                        borderBottomRightRadius: 18,
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                      },
                      variants: {
                        "aUwTuNsVb-hover": {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        },
                        "isAPdhbEi-hover": {
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                      },
                      children: [
                        s(d.div, {
                          className: `framer-jx6g4t`,
                          "data-framer-name": `Top`,
                          layoutDependency: I,
                          layoutId: `nyPhRk8yI`,
                          children: [
                            i(M, {
                              height: 12,
                              width: `56px`,
                              y:
                                (f?.y || 0) +
                                0 +
                                (((f?.height || 642) -
                                  0 -
                                  (248 +
                                    Math.max(
                                      0,
                                      ((f?.height || 642) - 0 - 252) / 1,
                                    ) *
                                      1 +
                                    4)) /
                                  2 +
                                  248 +
                                  4) +
                                30 +
                                (0 +
                                  ((Math.max(
                                    0,
                                    ((f?.height || 642) - 0 - 252) / 1,
                                  ) *
                                    1 -
                                    60 -
                                    317) /
                                    1) *
                                    0) +
                                0,
                              ...on(
                                {
                                  "aUwTuNsVb-hover": {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 646) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((f?.height || 646) - 0 - 248) / 1,
                                        ) *
                                          1 +
                                          248 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      30 +
                                      (301 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 646) - 0 - 248) / 1,
                                        ) *
                                          1 -
                                          60 -
                                          317) /
                                          1) *
                                          1) +
                                      0,
                                  },
                                  "isAPdhbEi-hover": {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 646) -
                                        0 -
                                        (248 +
                                          Math.max(
                                            0,
                                            ((f?.height || 646) - 0 - 248) / 1,
                                          ) *
                                            1 +
                                          0)) /
                                        2 +
                                        248 +
                                        0) +
                                      30 +
                                      (0 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 646) - 0 - 248) / 1,
                                        ) *
                                          1 -
                                          60 -
                                          317) /
                                          1) *
                                          0) +
                                      0,
                                  },
                                  aUwTuNsVb: {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 642) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((f?.height || 642) - 0 - 252) / 1,
                                        ) *
                                          1 +
                                          248 +
                                          4)) /
                                        2 +
                                        0 +
                                        0) +
                                      30 +
                                      (301 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 642) - 0 - 252) / 1,
                                        ) *
                                          1 -
                                          60 -
                                          317) /
                                          1) *
                                          1) +
                                      0,
                                  },
                                  rHtk7mxj3: {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 400) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((f?.height || 400) - 0 - 240) / 1,
                                        ) *
                                          1 +
                                          236 +
                                          4)) /
                                        2 +
                                        0 +
                                        0) +
                                      24 +
                                      (0 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 400) - 0 - 240) / 1,
                                        ) *
                                          1 -
                                          48 -
                                          317) /
                                          1) *
                                          0) +
                                      0,
                                  },
                                },
                                D,
                                N,
                              ),
                              children: i(ie, {
                                className: `framer-1efuek3-container`,
                                layoutDependency: I,
                                layoutId: `daMvPQsNb-container`,
                                nodeId: `daMvPQsNb`,
                                rendersWithMotion: !0,
                                scopeId: `fTmrIoq5f`,
                                children: i(rn, {
                                  height: `100%`,
                                  id: `daMvPQsNb`,
                                  layoutId: `daMvPQsNb`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            i(M, {
                              height: 16,
                              width: `16px`,
                              y:
                                (f?.y || 0) +
                                0 +
                                (((f?.height || 642) -
                                  0 -
                                  (248 +
                                    Math.max(
                                      0,
                                      ((f?.height || 642) - 0 - 252) / 1,
                                    ) *
                                      1 +
                                    4)) /
                                  2 +
                                  248 +
                                  4) +
                                30 +
                                (0 +
                                  ((Math.max(
                                    0,
                                    ((f?.height || 642) - 0 - 252) / 1,
                                  ) *
                                    1 -
                                    60 -
                                    317) /
                                    1) *
                                    0) +
                                0,
                              ...on(
                                {
                                  "aUwTuNsVb-hover": {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 646) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((f?.height || 646) - 0 - 248) / 1,
                                        ) *
                                          1 +
                                          248 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      30 +
                                      (301 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 646) - 0 - 248) / 1,
                                        ) *
                                          1 -
                                          60 -
                                          317) /
                                          1) *
                                          1) +
                                      0,
                                  },
                                  "isAPdhbEi-hover": {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 646) -
                                        0 -
                                        (248 +
                                          Math.max(
                                            0,
                                            ((f?.height || 646) - 0 - 248) / 1,
                                          ) *
                                            1 +
                                          0)) /
                                        2 +
                                        248 +
                                        0) +
                                      30 +
                                      (0 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 646) - 0 - 248) / 1,
                                        ) *
                                          1 -
                                          60 -
                                          317) /
                                          1) *
                                          0) +
                                      0,
                                  },
                                  aUwTuNsVb: {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 642) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((f?.height || 642) - 0 - 252) / 1,
                                        ) *
                                          1 +
                                          248 +
                                          4)) /
                                        2 +
                                        0 +
                                        0) +
                                      30 +
                                      (301 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 642) - 0 - 252) / 1,
                                        ) *
                                          1 -
                                          60 -
                                          317) /
                                          1) *
                                          1) +
                                      0,
                                  },
                                  rHtk7mxj3: {
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 400) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((f?.height || 400) - 0 - 240) / 1,
                                        ) *
                                          1 +
                                          236 +
                                          4)) /
                                        2 +
                                        0 +
                                        0) +
                                      24 +
                                      (0 +
                                        ((Math.max(
                                          0,
                                          ((f?.height || 400) - 0 - 240) / 1,
                                        ) *
                                          1 -
                                          48 -
                                          317) /
                                          1) *
                                          0) +
                                      0,
                                  },
                                },
                                D,
                                N,
                              ),
                              children: i(ie, {
                                className: `framer-jhnbua-container`,
                                layoutDependency: I,
                                layoutId: `rxVUdbIcR-container`,
                                nodeId: `rxVUdbIcR`,
                                rendersWithMotion: !0,
                                scopeId: `fTmrIoq5f`,
                                style: { opacity: 0.3, rotate: 0 },
                                variants: {
                                  "aUwTuNsVb-hover": { rotate: 90 },
                                  "isAPdhbEi-hover": { rotate: 90 },
                                },
                                children: i(st, {
                                  gUDzlhgLq: !0,
                                  height: `100%`,
                                  id: `rxVUdbIcR`,
                                  layoutId: `rxVUdbIcR`,
                                  Rl_qLe3MC: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        s(d.div, {
                          className: `framer-mw7b3q`,
                          layoutDependency: I,
                          layoutId: `lguWw2gP2`,
                          children: [
                            i(F, {
                              __fromCanvasComponent: !0,
                              children: i(r, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-1hin0ji`,
                                  "data-styles-preset": `fN1_sGlJp`,
                                  children: `Testimomnial`,
                                }),
                              }),
                              className: `framer-j1a15y`,
                              "data-framer-name": `Collaboration Text`,
                              fonts: [`Inter`],
                              layoutDependency: I,
                              layoutId: `R1iVZ5uFl`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: w,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            i(F, {
                              __fromCanvasComponent: !0,
                              children: i(r, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-1hin0ji`,
                                  "data-styles-preset": `fN1_sGlJp`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))`,
                                  },
                                  children: `Testimomnial`,
                                }),
                              }),
                              className: `framer-12e89u9`,
                              "data-framer-name": `Collaboration Text`,
                              fonts: [`Inter`],
                              layoutDependency: I,
                              layoutId: `b8DA8eXSb`,
                              style: {
                                "--extracted-r6o4lv": `rgba(0, 0, 0, 0.6)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: T,
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
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nNSZt.framer-1155hn2, .framer-nNSZt .framer-1155hn2 { display: block; }`,
          `.framer-nNSZt.framer-1xa06lp { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 642px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 279px; }`,
          `.framer-nNSZt .framer-1nedhuv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
          `.framer-nNSZt .framer-d927ns { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-nNSZt .framer-1ibhtdp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 46px); position: relative; width: 46px; }`,
          `.framer-nNSZt .framer-oibkzm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-nNSZt .framer-oyhvcg, .framer-nNSZt .framer-1wuq2o9 { cursor: text; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-nNSZt .framer-1flz52s { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
          `.framer-nNSZt .framer-jx6g4t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-nNSZt .framer-1efuek3-container { flex: none; height: 12px; position: relative; width: 56px; }`,
          `.framer-nNSZt .framer-jhnbua-container { flex: none; height: 16px; position: relative; width: 16px; }`,
          `.framer-nNSZt .framer-mw7b3q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-nNSZt .framer-j1a15y, .framer-nNSZt .framer-12e89u9 { cursor: text; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 219px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-nNSZt.framer-v-1hfzc71 .framer-1nedhuv, .framer-nNSZt.framer-v-1hfzc71 .framer-jx6g4t { order: 1; }`,
          `.framer-nNSZt.framer-v-1hfzc71 .framer-1flz52s, .framer-nNSZt.framer-v-1hfzc71 .framer-mw7b3q { order: 0; }`,
          `.framer-nNSZt.framer-v-hfi02n.framer-1xa06lp { height: 400px; }`,
          `.framer-nNSZt.framer-v-hfi02n .framer-1nedhuv { order: 1; padding: 24px; }`,
          `.framer-nNSZt.framer-v-hfi02n .framer-1flz52s { order: 0; padding: 24px; }`,
          `.framer-nNSZt.framer-v-1xa06lp.hover.framer-1xa06lp, .framer-nNSZt.framer-v-1hfzc71.hover.framer-1xa06lp { gap: 0px; height: 646px; }`,
          ...De,
          ...qt,
          ...je,
        ],
        `framer-nNSZt`,
      )),
      (q = K),
      (K.displayName = `Testimonial`),
      (K.defaultProps = { height: 642, width: 279 }),
      w(K, {
        variant: {
          options: [`isAPdhbEi`, `aUwTuNsVb`, `rHtk7mxj3`],
          optionTitles: [`Desktop`, `Desktop reversed`, `Phone`],
          title: `Variant`,
          type: R.Enum,
        },
        gmWSXR53y: {
          defaultValue: `Name`,
          displayTextArea: !1,
          title: `Name`,
          type: R.String,
        },
        IUuoDhO3z: {
          defaultValue: `Subtitle`,
          displayTextArea: !1,
          title: `Subtitle`,
          type: R.String,
        },
        CNR_PIjaw: {
          __defaultAssetReference: `data:framer/asset-reference,v2v5H7JyNs32xnkaBSwUWhCt8.jpg?originalFilename=User+Image.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,v2v5H7JyNs32xnkaBSwUWhCt8.jpg?originalFilename=User+Image.jpg&preferredSize=auto`,
          },
          title: `Image`,
          type: R.ResponsiveImage,
        },
        xKE54n4Ed: {
          defaultValue: `Testimomnial`,
          displayTextArea: !0,
          title: `Testimomnial 1`,
          type: R.String,
        },
        nlzPEiiXn: {
          defaultValue: `Testimomnial`,
          displayTextArea: !0,
          title: `Testimomnial 2`,
          type: R.String,
        },
      }),
      C(
        K,
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
          ...sn,
          ...cn,
          ...y(Oe),
          ...y(Kt),
          ...y(Me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  J,
  En,
  Dn,
  Y,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  X,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Z,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Q,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  $,
  rr,
  ir;
e(() => {
  (c(),
    D(),
    m(),
    l(),
    de(),
    ge(),
    me(),
    Ot(),
    Gt(),
    yn(),
    Fe(),
    _e(),
    Ie(),
    ve(),
    $e(),
    Be(),
    et(),
    We(),
    Je(),
    ct(),
    Se(),
    ft(),
    (bn = A(fe)),
    (xn = A(Pe)),
    (Sn = g(E(d.div))),
    (Cn = A(V)),
    (wn = g(L)),
    (Tn = A(pe)),
    (J = E(L)),
    (En = A(Wt)),
    (Dn = I(L)),
    (Y = E(d.div)),
    (On = A(Dt)),
    (kn = A(q)),
    (An = g(d.div)),
    (jn = {
      h4tK19YuT: `(min-width: 810px) and (max-width: 1199.98px)`,
      NHT_rtOCX: `(max-width: 809.98px)`,
      vTrLRU75c: `(min-width: 1200px)`,
    }),
    (Mn = `framer-pZbnz`),
    (Nn = {
      h4tK19YuT: `framer-v-1x441wn`,
      NHT_rtOCX: `framer-v-uqw079`,
      vTrLRU75c: `framer-v-18i9pdl`,
    }),
    (Pn = (e, t, n) => (e && t ? `position` : n)),
    (Fn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 27,
        delay: 0.87,
        mass: 0.3,
        stiffness: 121,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    (In = {
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
    (Ln = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.6, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Rn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (X = {
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
    (zn = { bounce: 0.1, delay: 0.2, duration: 1.2, type: `spring` }),
    (Bn = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Vn = (e, t, n) =>
      e.currentPage >= e.totalPages
        ? (t.disabled ?? n)
        : e.isLoading
          ? (t.loading ?? n)
          : n),
    (Hn = () => ({
      from: { alias: `stq9hTUAa`, data: he, type: `Collection` },
      select: [
        { collection: `stq9hTUAa`, name: `ZcgiEK3O1`, type: `Identifier` },
        { collection: `stq9hTUAa`, name: `kZItiPruc`, type: `Identifier` },
        { collection: `stq9hTUAa`, name: `id`, type: `Identifier` },
      ],
    })),
    (Un = ({ query: e, pageSize: t, children: n }) => {
      let {
        paginatedQuery: r,
        paginationInfo: i,
        loadMore: a,
      } = ne(e, t, `stq9hTUAa`);
      return n(O(r), i, a);
    }),
    (Wn = { bounce: 0.1, delay: 0.5, duration: 1.2, type: `spring` }),
    (Z = { bounce: 0.1, delay: 0.3, duration: 1.2, type: `spring` }),
    (Gn = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Kn = { bounce: 0.1, delay: 0.4, duration: 1.2, type: `spring` }),
    (qn = {
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (Jn = {
      delay: 0.02,
      duration: 0.9,
      ease: [0.44, 0, 0.13, 0.96],
      type: `tween`,
    }),
    (Yn = {
      effect: qn,
      repeat: !1,
      startDelay: 0,
      threshold: 0,
      tokenization: `word`,
      transition: Jn,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Q = {
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
      transition: Jn,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Xn = { damping: 35, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
    (Zn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Xn,
      x: 0,
      y: 0,
    }),
    (Qn = { damping: 35, delay: 0.2, mass: 1, stiffness: 200, type: `spring` }),
    ($n = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Qn,
      x: 0,
      y: 0,
    }),
    (er = ({ value: e }) =>
      P()
        ? null
        : i(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (tr = { Desktop: `vTrLRU75c`, Phone: `NHT_rtOCX`, Tablet: `h4tK19YuT` }),
    (nr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: tr[r.variant] ?? r.variant ?? `vTrLRU75c`,
    })),
    ($ = _(
      a(function (e, a) {
        let c = n(null),
          l = a ?? c,
          m = u(),
          { activeLocale: h, setLocale: g } = B(),
          _ = z(),
          { style: v, className: y, layoutId: S, variant: C, ...w } = nr(e);
        ue(o(() => pt({}, h), [h]));
        let [E, D] = ae(C, jn, !1),
          O = b(Mn, qe, ze, Ze, dt, Ue, at, Te, xe, Qe),
          A = t(re)?.isLayoutTemplate,
          N = Pn(A, !!t(f)?.transition?.layout);
        le();
        let te = n(null);
        return (
          se({}),
          i(re.Provider, {
            value: { primaryVariantId: `vTrLRU75c`, variantClassNames: Nn },
            children: s(p, {
              id: S ?? m,
              children: [
                i(er, {
                  value: `html body { background: rgb(255, 255, 255); }`,
                }),
                s(d.div, {
                  ...w,
                  className: b(O, `framer-18i9pdl`, y),
                  ref: l,
                  style: { ...v },
                  children: [
                    i(M, {
                      children: i(L, {
                        className: `framer-rojbls-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: N,
                        nodeId: `Rw5c0kUvh`,
                        scopeId: `dVT1LJUTV`,
                        children: i(fe, {
                          height: `100%`,
                          id: `Rw5c0kUvh`,
                          intensity: 10,
                          layoutId: `Rw5c0kUvh`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    s(d.main, {
                      className: `framer-ihtdja`,
                      "data-framer-name": `Main`,
                      layout: N,
                      children: [
                        i(`section`, {
                          className: `framer-1wijj2h`,
                          "data-framer-name": `Intro`,
                          children: i(`div`, {
                            className: `framer-s2ely1`,
                            "data-framer-name": `Container`,
                            children: i(k, {
                              breakpoint: E,
                              overrides: {
                                NHT_rtOCX: {
                                  __framer__parallaxTransformEnabled: void 0,
                                  animate: void 0,
                                  initial: void 0,
                                  optimized: void 0,
                                },
                              },
                              children: s(Sn, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 80,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: Fn,
                                className: `framer-17hwu4z`,
                                "data-framer-appear-id": `17hwu4z`,
                                "data-framer-name": `Top`,
                                initial: In,
                                optimized: !0,
                                children: [
                                  i(`div`, {
                                    className: `framer-1fuwn1i`,
                                    "data-framer-name": `Heading`,
                                    children: i(F, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: s(`h1`, {
                                          className: `framer-styles-preset-1qappj3`,
                                          "data-styles-preset": `mxo_rwZbG`,
                                          children: [
                                            `Trusted By `,
                                            i(`span`, {
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `Global Leading Brands.`,
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-1pno71j`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-10aaqvz`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-1tw9vli`,
                                        "data-framer-name": `Description`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-1hin0ji`,
                                              "data-styles-preset": `fN1_sGlJp`,
                                              children: `We’re not for everyone. But for the right brands, we deliver serious growth in China`,
                                            }),
                                          }),
                                          className: `framer-1jd9fks`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      i(T, {
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
                                        ],
                                        children: (e) =>
                                          i(k, {
                                            breakpoint: E,
                                            overrides: {
                                              h4tK19YuT: {
                                                width: `min(min(max(${_?.width || `100vw`} - 60px, 1px), 1520px), 447px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  195.5,
                                              },
                                              NHT_rtOCX: {
                                                width: `min(min(max(${_?.width || `100vw`} - 40px, 1px), 1520px), 447px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  128 +
                                                  0 +
                                                  173.5,
                                              },
                                            },
                                            children: i(M, {
                                              height: 58,
                                              width: `min(max(min(max(${_?.width || `100vw`} - 72px, 1px), 1520px) * 0.4 - 4px, 1px), 447px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                179.5,
                                              children: i(L, {
                                                className: `framer-ekfa2v-container`,
                                                nodeId: `zAeYEEdem`,
                                                scopeId: `dVT1LJUTV`,
                                                children: i(k, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    h4tK19YuT: {
                                                      XooFhyn6y: e[1],
                                                    },
                                                    NHT_rtOCX: {
                                                      variant: `J4w9vHV11`,
                                                      XooFhyn6y: e[2],
                                                    },
                                                  },
                                                  children: i(Pe, {
                                                    height: `100%`,
                                                    id: `zAeYEEdem`,
                                                    layoutId: `zAeYEEdem`,
                                                    style: {
                                                      height: `100%`,
                                                      maxWidth: `100%`,
                                                      width: `100%`,
                                                    },
                                                    variant: `tTn4pW4jh`,
                                                    width: `100%`,
                                                    X9Xju9FBn: `Let's Talk`,
                                                    XooFhyn6y: e[0],
                                                    xSaAhnG8s: `18px 30px 18px 30px`,
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
                            }),
                          }),
                        }),
                        i(`div`, {
                          className: `framer-1ocs847`,
                          "data-framer-name": `Brands`,
                          children: s(`div`, {
                            className: `framer-nfplpo`,
                            "data-framer-name": `Container`,
                            children: [
                              s(`div`, {
                                className: `framer-1khk88o`,
                                "data-framer-name": `Top`,
                                children: [
                                  i(k, {
                                    breakpoint: E,
                                    overrides: {
                                      h4tK19YuT: {
                                        width: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 12px) / 4, 50px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          160 +
                                          473.5 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      NHT_rtOCX: {
                                        width: void 0,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          140 +
                                          423.5 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: i(M, {
                                      height: 22,
                                      width: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 12px) / 4, 50px)`,
                                      y:
                                        (_?.y || 0) +
                                        0 +
                                        200 +
                                        160 +
                                        357.5 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      children: i(wn, {
                                        animate: Ln,
                                        className: `framer-1fjncdt-container`,
                                        "data-framer-appear-id": `1fjncdt`,
                                        initial: Rn,
                                        nodeId: `jAbnBPogL`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `dVT1LJUTV`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            NHT_rtOCX: { variant: `Cmy0WdTav` },
                                          },
                                          children: i(V, {
                                            height: `100%`,
                                            id: `jAbnBPogL`,
                                            k3Z3ztoi4: `Our brands`,
                                            layoutId: `jAbnBPogL`,
                                            RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                            TmIm48vq7: `rgb(255, 255, 255)`,
                                            variant: `VaDzezBN8`,
                                            width: `100%`,
                                            ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(`div`, {
                                    className: `framer-1aeyev1`,
                                    "data-framer-name": `Content`,
                                  }),
                                ],
                              }),
                              i(`div`, {
                                className: `framer-1ue8095`,
                                children: i(oe, {
                                  children: i(k, {
                                    breakpoint: E,
                                    overrides: {
                                      h4tK19YuT: { pageSize: 12, query: Hn() },
                                    },
                                    children: i(Un, {
                                      pageSize: 16,
                                      query: Hn(),
                                      children: (e, t, n) =>
                                        s(ee, {
                                          children: [
                                            e?.map(
                                              (
                                                {
                                                  id: e,
                                                  kZItiPruc: t,
                                                  ZcgiEK3O1: n,
                                                },
                                                r,
                                              ) => (
                                                (t ??= ``),
                                                i(
                                                  p,
                                                  {
                                                    id: `stq9hTUAa-${e}`,
                                                    children: i(ce.Provider, {
                                                      value: { kZItiPruc: t },
                                                      children: i(`div`, {
                                                        className: `framer-1ddqfe7`,
                                                        children: i(k, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            h4tK19YuT: {
                                                              width: `max(max((min(${_?.width || `100vw`} - 60px, 1520px) - 20px) / 6, 50px), 1px)`,
                                                              y:
                                                                (_?.y || 0) +
                                                                0 +
                                                                200 +
                                                                160 +
                                                                473.5 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                82 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                            NHT_rtOCX: {
                                                              height: 100,
                                                              width: `max(max((min(${_?.width || `100vw`} - 40px, 1520px) - 8px) / 3, 50px), 1px)`,
                                                              y:
                                                                (_?.y || 0) +
                                                                0 +
                                                                200 +
                                                                140 +
                                                                423.5 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                52 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: i(M, {
                                                            height: 136,
                                                            width: `max(max((min(${_?.width || `100vw`} - 72px, 1520px) - 28px) / 8, 50px), 1px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              0 +
                                                              200 +
                                                              160 +
                                                              357.5 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              92 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: i(J, {
                                                              __framer__animate:
                                                                {
                                                                  transition:
                                                                    zn,
                                                                },
                                                              __framer__animateOnce:
                                                                !0,
                                                              __framer__enter:
                                                                X,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0.5,
                                                              __perspectiveFX:
                                                                !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-uj0890-container`,
                                                              nodeId: `MX9OeRWEt`,
                                                              rendersWithMotion:
                                                                !0,
                                                              scopeId: `dVT1LJUTV`,
                                                              children: i(k, {
                                                                breakpoint: E,
                                                                overrides: {
                                                                  NHT_rtOCX: {
                                                                    variant: `PNXJSb_ER`,
                                                                  },
                                                                },
                                                                children: i(
                                                                  pe,
                                                                  {
                                                                    height: `100%`,
                                                                    id: `MX9OeRWEt`,
                                                                    layoutId: `MX9OeRWEt`,
                                                                    PiOn2dwG9:
                                                                      Bn(n),
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    variant: `r3GmlGDnb`,
                                                                    width: `100%`,
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  e,
                                                )
                                              ),
                                            ),
                                            i(k, {
                                              breakpoint: E,
                                              overrides: {
                                                h4tK19YuT: {
                                                  width: `calc(max((min(${_?.width || `100vw`} - 60px, 1520px) - 20px) / 6, 50px) * 6 + 20px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    160 +
                                                    473.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    82 +
                                                    0 +
                                                    140,
                                                },
                                                NHT_rtOCX: {
                                                  width: `calc(max((min(${_?.width || `100vw`} - 40px, 1520px) - 8px) / 3, 50px) * 3 + 8px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    140 +
                                                    423.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    52 +
                                                    0 +
                                                    104,
                                                },
                                              },
                                              children: i(M, {
                                                height: 96,
                                                width: `calc(max((min(${_?.width || `100vw`} - 72px, 1520px) - 28px) / 8, 50px) * 8 + 28px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  357.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  280,
                                                children: i(Dn, {
                                                  __loadMore: n,
                                                  __paginationInfo: t,
                                                  className: `framer-fzxq0s-container`,
                                                  nodeId: `EyItWOi4G`,
                                                  ref: te,
                                                  scopeId: `dVT1LJUTV`,
                                                  children: i(Wt, {
                                                    height: `100%`,
                                                    id: `EyItWOi4G`,
                                                    layoutId: `EyItWOi4G`,
                                                    style: {
                                                      height: `100%`,
                                                      width: `100%`,
                                                    },
                                                    variant: Vn(
                                                      t,
                                                      {
                                                        disabled: `Pdr9VkE8H`,
                                                        loading: `PNXx24aK0`,
                                                      },
                                                      `PNXx24aK0`,
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
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
                        }),
                        i(`section`, {
                          className: `framer-t6q39t`,
                          "data-framer-name": `Testimonials`,
                          children: s(`div`, {
                            className: `framer-k9rl18`,
                            "data-framer-name": `Container`,
                            children: [
                              i(`div`, {
                                className: `framer-159u5vo`,
                                "data-framer-name": `Top`,
                                children: s(Y, {
                                  __framer__animate: { transition: zn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1wq1ski`,
                                  "data-framer-name": `Heading`,
                                  children: [
                                    i(F, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: s(`h2`, {
                                          className: `framer-styles-preset-4vuy4n`,
                                          "data-styles-preset": `nCOD2Sdie`,
                                          children: [
                                            i(`span`, {
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `What Our`,
                                            }),
                                            ` Brand Partners `,
                                            i(`span`, {
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `Say.`,
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-1rb7c9d`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    i(F, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-1rii1wr`,
                                          "data-styles-preset": `pAxoS1kOX`,
                                          children: `Real feedback from the top`,
                                        }),
                                      }),
                                      className: `framer-a3v3oo`,
                                      "data-framer-name": `2025`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              s(`div`, {
                                className: `framer-a9fr8f`,
                                "data-framer-name": `Testimonials`,
                                children: [
                                  s(Y, {
                                    __framer__animate: { transition: Wn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1125vfk`,
                                    "data-framer-name": `Intro`,
                                    children: [
                                      i(k, {
                                        breakpoint: E,
                                        overrides: {
                                          h4tK19YuT: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: x(
                                                (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  951.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  327 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 5401,
                                              pixelWidth: 3601,
                                              sizes: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 4px) / 2, 50px)`,
                                              src: `https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?width=3601&height=5401`,
                                              srcSet: `https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=1024&width=3601&height=5401 682w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=2048&width=3601&height=5401 1365w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=4096&width=3601&height=5401 2730w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?width=3601&height=5401 3601w`,
                                            },
                                          },
                                          NHT_rtOCX: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: x(
                                                (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  140 +
                                                  743.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  290 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 5401,
                                              pixelWidth: 3601,
                                              sizes: `min(${_?.width || `100vw`} - 40px, 1520px)`,
                                              src: `https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?width=3601&height=5401`,
                                              srcSet: `https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=1024&width=3601&height=5401 682w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=2048&width=3601&height=5401 1365w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=4096&width=3601&height=5401 2730w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?width=3601&height=5401 3601w`,
                                            },
                                          },
                                        },
                                        children: i(j, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: x(
                                              (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                985.5 +
                                                0 +
                                                0 +
                                                0 +
                                                328 +
                                                0 +
                                                0 +
                                                0,
                                            ),
                                            pixelHeight: 5401,
                                            pixelWidth: 3601,
                                            sizes: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 12px) / 4, 50px)`,
                                            src: `https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?width=3601&height=5401`,
                                            srcSet: `https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=1024&width=3601&height=5401 682w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=2048&width=3601&height=5401 1365w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?scale-down-to=4096&width=3601&height=5401 2730w,https://framerusercontent.com/images/gNK34t9Il50rWe8YW4xQ8RuduU.jpg?width=3601&height=5401 3601w`,
                                          },
                                          className: `framer-10iculi`,
                                          "data-framer-name": `Intro`,
                                          children: i(`div`, {
                                            className: `framer-rwtde6`,
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-15o9029`,
                                        "data-framer-name": `Top`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-1oueo73`,
                                              "data-styles-preset": `HLpRTFhim`,
                                              style: {
                                                "--framer-text-color": `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                              },
                                              children: `Global brands trust us to deliver real revenue and growth in China - no fluff, just results.`,
                                            }),
                                          }),
                                          className: `framer-98vc4j`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      s(`div`, {
                                        className: `framer-iih9kf`,
                                        "data-framer-name": `Bottom`,
                                        children: [
                                          i(`div`, {
                                            className: `framer-o26sy9`,
                                            "data-framer-name": `Trusted`,
                                          }),
                                          i(T, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: `hAlvrhFMj`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `hAlvrhFMj`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: `hAlvrhFMj`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  h4tK19YuT: {
                                                    width: `calc(max((min(${_?.width || `100vw`} - 60px, 1520px) - 4px) / 2, 50px) - 60px)`,
                                                    y:
                                                      (_?.y || 0) +
                                                      0 +
                                                      200 +
                                                      160 +
                                                      951.5 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      327 +
                                                      0 +
                                                      0 +
                                                      30 +
                                                      332 +
                                                      0 +
                                                      40,
                                                  },
                                                  NHT_rtOCX: {
                                                    width: `calc(min(${_?.width || `100vw`} - 40px, 1520px) - 48px)`,
                                                    y:
                                                      (_?.y || 0) +
                                                      0 +
                                                      200 +
                                                      140 +
                                                      743.5 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      290 +
                                                      0 +
                                                      0 +
                                                      24 +
                                                      222 +
                                                      0 +
                                                      30,
                                                  },
                                                },
                                                children: i(M, {
                                                  height: 58,
                                                  width: `calc(max((min(${_?.width || `100vw`} - 72px, 1520px) - 12px) / 4, 50px) - 60px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    160 +
                                                    985.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    328 +
                                                    0 +
                                                    0 +
                                                    30 +
                                                    332 +
                                                    0 +
                                                    40,
                                                  children: i(L, {
                                                    className: `framer-1f33rnt-container`,
                                                    nodeId: `IggA4XVZI`,
                                                    scopeId: `dVT1LJUTV`,
                                                    children: i(k, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        h4tK19YuT: {
                                                          XooFhyn6y: e[1],
                                                        },
                                                        NHT_rtOCX: {
                                                          XooFhyn6y: e[2],
                                                        },
                                                      },
                                                      children: i(Dt, {
                                                        height: `100%`,
                                                        id: `IggA4XVZI`,
                                                        iyuXB1N8q: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                        layoutId: `IggA4XVZI`,
                                                        R8iwJ2h7U: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                        SnWMJ5xn7: `var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, rgb(245, 245, 245))`,
                                                        style: {
                                                          height: `100%`,
                                                          width: `100%`,
                                                        },
                                                        tulsc_W5A: `var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))`,
                                                        variant: `VMnT_oIqC`,
                                                        width: `100%`,
                                                        X9Xju9FBn: `Let's Talk`,
                                                        XooFhyn6y: e[0],
                                                        xSaAhnG8s: `18px 30px 18px 30px`,
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
                                  i(k, {
                                    breakpoint: E,
                                    overrides: {
                                      h4tK19YuT: {
                                        width: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 4px) / 2, 50px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          160 +
                                          951.5 +
                                          0 +
                                          0 +
                                          0 +
                                          327 +
                                          0 +
                                          0,
                                      },
                                      NHT_rtOCX: {
                                        width: `min(${_?.width || `100vw`} - 40px, 1520px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          140 +
                                          743.5 +
                                          0 +
                                          0 +
                                          0 +
                                          290 +
                                          0 +
                                          362,
                                      },
                                    },
                                    children: i(M, {
                                      height: 642,
                                      width: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 12px) / 4, 50px)`,
                                      y:
                                        (_?.y || 0) +
                                        0 +
                                        200 +
                                        160 +
                                        985.5 +
                                        0 +
                                        0 +
                                        0 +
                                        328 +
                                        0 +
                                        0,
                                      children: i(J, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1uwyr64-container`,
                                        nodeId: `H5EBgvY6_`,
                                        rendersWithMotion: !0,
                                        scopeId: `dVT1LJUTV`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            NHT_rtOCX: {
                                              style: { width: `100%` },
                                              variant: `rHtk7mxj3`,
                                            },
                                          },
                                          children: i(q, {
                                            CNR_PIjaw: Gn(
                                              {
                                                pixelHeight: 661,
                                                pixelWidth: 800,
                                                src: `https://framerusercontent.com/images/vnFWWnzQ9GjZYMBHqJsFcVPys.png?width=800&height=661`,
                                                srcSet: `https://framerusercontent.com/images/vnFWWnzQ9GjZYMBHqJsFcVPys.png?scale-down-to=512&width=800&height=661 512w,https://framerusercontent.com/images/vnFWWnzQ9GjZYMBHqJsFcVPys.png?width=800&height=661 800w`,
                                              },
                                              ``,
                                            ),
                                            gmWSXR53y: `Head of Strategy, G-STAR`,
                                            height: `100%`,
                                            id: `H5EBgvY6_`,
                                            IUuoDhO3z: ``,
                                            layoutId: `H5EBgvY6_`,
                                            nlzPEiiXn: `not just paying lip service to them, but truly using data to drive every decision they make.`,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            variant: `isAPdhbEi`,
                                            width: `100%`,
                                            xKE54n4Ed: `KFD is a highly professional,data-driven team that puts facts first — `,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(k, {
                                    breakpoint: E,
                                    overrides: {
                                      h4tK19YuT: {
                                        width: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 4px) / 2, 50px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          160 +
                                          951.5 +
                                          0 +
                                          0 +
                                          0 +
                                          327 +
                                          0 +
                                          646,
                                      },
                                      NHT_rtOCX: {
                                        width: `min(${_?.width || `100vw`} - 40px, 1520px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          140 +
                                          743.5 +
                                          0 +
                                          0 +
                                          0 +
                                          290 +
                                          0 +
                                          1008,
                                      },
                                    },
                                    children: i(M, {
                                      height: 642,
                                      width: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 12px) / 4, 50px)`,
                                      y:
                                        (_?.y || 0) +
                                        0 +
                                        200 +
                                        160 +
                                        985.5 +
                                        0 +
                                        0 +
                                        0 +
                                        328 +
                                        0 +
                                        0,
                                      children: i(J, {
                                        __framer__animate: { transition: zn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-16b5mus-container`,
                                        nodeId: `SlptKKJLr`,
                                        rendersWithMotion: !0,
                                        scopeId: `dVT1LJUTV`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            NHT_rtOCX: {
                                              style: { width: `100%` },
                                              variant: `rHtk7mxj3`,
                                            },
                                          },
                                          children: i(q, {
                                            CNR_PIjaw: Gn(
                                              {
                                                pixelHeight: 320,
                                                pixelWidth: 320,
                                                src: `https://framerusercontent.com/images/FenVUiFz5oRTFUOz4KvluZnDIY.png?width=320&height=320`,
                                              },
                                              ``,
                                            ),
                                            gmWSXR53y: `CEO, 2XU`,
                                            height: `100%`,
                                            id: `SlptKKJLr`,
                                            IUuoDhO3z: ``,
                                            layoutId: `SlptKKJLr`,
                                            nlzPEiiXn: `an onsite team, WOFE, and still have local experts with an entrepreneurial mindset on the ground.`,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            variant: `aUwTuNsVb`,
                                            width: `100%`,
                                            xKE54n4Ed: `We were able to rebuild our China business without having to invest in`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(k, {
                                    breakpoint: E,
                                    overrides: {
                                      h4tK19YuT: {
                                        width: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 4px) / 2, 50px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          160 +
                                          951.5 +
                                          0 +
                                          0 +
                                          0 +
                                          327 +
                                          0 +
                                          646,
                                      },
                                      NHT_rtOCX: {
                                        width: `min(${_?.width || `100vw`} - 40px, 1520px)`,
                                        y:
                                          (_?.y || 0) +
                                          0 +
                                          200 +
                                          140 +
                                          743.5 +
                                          0 +
                                          0 +
                                          0 +
                                          290 +
                                          0 +
                                          1654,
                                      },
                                    },
                                    children: i(M, {
                                      height: 642,
                                      width: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 12px) / 4, 50px)`,
                                      y:
                                        (_?.y || 0) +
                                        0 +
                                        200 +
                                        160 +
                                        985.5 +
                                        0 +
                                        0 +
                                        0 +
                                        328 +
                                        0 +
                                        0,
                                      children: i(J, {
                                        __framer__animate: { transition: Kn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-66hfft-container`,
                                        nodeId: `pdBrt5ZWZ`,
                                        rendersWithMotion: !0,
                                        scopeId: `dVT1LJUTV`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            NHT_rtOCX: {
                                              style: { width: `100%` },
                                              variant: `rHtk7mxj3`,
                                            },
                                          },
                                          children: i(q, {
                                            CNR_PIjaw: Gn(
                                              {
                                                pixelHeight: 225,
                                                pixelWidth: 225,
                                                src: `https://framerusercontent.com/images/jhwGeInLQIHDBwJxtNzXot72oL8.png?width=225&height=225`,
                                              },
                                              ``,
                                            ),
                                            gmWSXR53y: `APAC Sales Director, CEP`,
                                            height: `100%`,
                                            id: `pdBrt5ZWZ`,
                                            IUuoDhO3z: ``,
                                            layoutId: `pdBrt5ZWZ`,
                                            nlzPEiiXn: `They always made sure we are in good hands.`,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            variant: `isAPdhbEi`,
                                            width: `100%`,
                                            xKE54n4Ed: `With KFD we experienced the build-up of a brand from zero into a relevant market for us globally.`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-1tai3ri`,
                          "data-framer-name": `Projects`,
                          children: s(`div`, {
                            className: `framer-1hexw4w`,
                            "data-framer-name": `Container`,
                            children: [
                              s(`div`, {
                                className: `framer-1humzuc`,
                                "data-framer-name": `Top`,
                                children: [
                                  i(`div`, {
                                    className: `framer-12atgxu`,
                                    "data-framer-name": `Heading`,
                                    children: i(k, {
                                      breakpoint: E,
                                      overrides: {
                                        NHT_rtOCX: { effect: void 0 },
                                      },
                                      children: i(F, {
                                        __fromCanvasComponent: !0,
                                        children: i(r, {
                                          children: s(`h2`, {
                                            className: `framer-styles-preset-4vuy4n`,
                                            "data-styles-preset": `nCOD2Sdie`,
                                            children: [
                                              `Real Results from `,
                                              i(`br`, {}),
                                              i(`span`, {
                                                style: {
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                                },
                                                children: `Brands Like Yours.`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-1c0zfw6`,
                                        "data-framer-name": `Title`,
                                        effect: Yn,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  i(`div`, {
                                    className: `framer-1oea86d`,
                                    "data-framer-name": `Description`,
                                    children: i(F, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-1hin0ji`,
                                          "data-styles-preset": `fN1_sGlJp`,
                                          children: `Expanding into China is notoriously complex. But for the brands we work with, it doesn’t have to be.`,
                                        }),
                                      }),
                                      className: `framer-13l3uv4`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1dynnhj`,
                                "data-framer-name": `CaseStudy`,
                                children: [
                                  s(`div`, {
                                    className: `framer-636d25`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-khfhb6`,
                                        "data-framer-name": `Description`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-xgn84q`,
                                              "data-styles-preset": `LyKOtaXoC`,
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `Case study 1:`,
                                            }),
                                          }),
                                          className: `framer-10yng0q`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-swagf4`,
                                        "data-framer-name": `Heading`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            NHT_rtOCX: { effect: void 0 },
                                          },
                                          children: i(F, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
                                              children: i(`h2`, {
                                                className: `framer-styles-preset-4vuy4n`,
                                                "data-styles-preset": `nCOD2Sdie`,
                                                children: `G-STAR`,
                                              }),
                                            }),
                                            className: `framer-vqegeq`,
                                            "data-framer-name": `Title`,
                                            effect: Yn,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-9a65di`,
                                    "data-framer-name": `Text`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-1gqqozj`,
                                        "data-framer-name": `Left`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                2686.5 +
                                                0 +
                                                0 +
                                                0 +
                                                261.5 +
                                                48 +
                                                369.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            NHT_rtOCX: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                3393.5 +
                                                0 +
                                                0 +
                                                0 +
                                                261.5 +
                                                48 +
                                                329.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(M, {
                                            height: 22,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              200 +
                                              160 +
                                              2075.5 +
                                              0 +
                                              0 +
                                              0 +
                                              209.5 +
                                              48 +
                                              317.5 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(L, {
                                              className: `framer-y7zoqt-container`,
                                              nodeId: `DRS_D8WOS`,
                                              scopeId: `dVT1LJUTV`,
                                              children: i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  NHT_rtOCX: {
                                                    variant: `Cmy0WdTav`,
                                                  },
                                                },
                                                children: i(V, {
                                                  height: `100%`,
                                                  id: `DRS_D8WOS`,
                                                  k3Z3ztoi4: `Challenges`,
                                                  layoutId: `DRS_D8WOS`,
                                                  RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  TmIm48vq7: `rgb(255, 255, 255)`,
                                                  variant: `VaDzezBN8`,
                                                  width: `100%`,
                                                  ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-tjlvfm`,
                                        "data-framer-name": `Right`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1rii1wr`,
                                              "data-styles-preset": `pAxoS1kOX`,
                                              style: {
                                                "--framer-text-color": `rgba(10, 10, 10, 0.6)`,
                                              },
                                              children: [
                                                i(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(10, 10, 10)`,
                                                  },
                                                  children: `G-STAR’s presence on Tmall and JD was underperforming,`,
                                                }),
                                                ` with the brand struggling to maintain a premium position while facing discounting pressure from unauthorized resellers.`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-1mzvfk4`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-u3rils`,
                                    "data-framer-name": `Images`,
                                    children: [
                                      i(Y, {
                                        __framer__animate: { transition: Xn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Zn,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1nnzcj8`,
                                        "data-framer-name": `Photo item`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    160 +
                                                    2686.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    261.5 +
                                                    48 +
                                                    609.5 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 491,
                                                pixelWidth: 728,
                                                sizes: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 52px) / 2, 1px)`,
                                                src: `https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?width=728&height=491`,
                                                srcSet: `https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?scale-down-to=512&width=728&height=491 512w,https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?width=728&height=491 728w`,
                                              },
                                            },
                                            NHT_rtOCX: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    140 +
                                                    3393.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    261.5 +
                                                    48 +
                                                    615.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 491,
                                                pixelWidth: 728,
                                                sizes: `calc(min(${_?.width || `100vw`} - 40px, 1520px) - 48px)`,
                                                src: `https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?width=728&height=491`,
                                                srcSet: `https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?scale-down-to=512&width=728&height=491 512w,https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?width=728&height=491 728w`,
                                              },
                                            },
                                          },
                                          children: i(j, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 810,
                                              intrinsicWidth: 1125,
                                              loading: x(
                                                (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  2075.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  209.5 +
                                                  48 +
                                                  557.5 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 491,
                                              pixelWidth: 728,
                                              sizes: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 52px) / 2, 1px)`,
                                              src: `https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?width=728&height=491`,
                                              srcSet: `https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?scale-down-to=512&width=728&height=491 512w,https://framerusercontent.com/images/aDZctjLzFjxgHUicQ63z6Y7EJvs.png?width=728&height=491 728w`,
                                            },
                                            className: `framer-ldjcob`,
                                            "data-framer-name": `Image-2`,
                                          }),
                                        }),
                                      }),
                                      i(Y, {
                                        __framer__animate: { transition: Qn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: $n,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-23rqkp`,
                                        "data-framer-name": `Photo item`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    160 +
                                                    2686.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    261.5 +
                                                    48 +
                                                    609.5 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 960,
                                                pixelWidth: 960,
                                                positionX: `center`,
                                                positionY: `top`,
                                                sizes: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 52px) / 2, 1px)`,
                                                src: `https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?width=960&height=960`,
                                                srcSet: `https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?scale-down-to=512&width=960&height=960 512w,https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?width=960&height=960 960w`,
                                              },
                                            },
                                            NHT_rtOCX: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    140 +
                                                    3393.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    261.5 +
                                                    48 +
                                                    615.5 +
                                                    0 +
                                                    821 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 960,
                                                pixelWidth: 960,
                                                positionX: `center`,
                                                positionY: `top`,
                                                sizes: `calc(min(${_?.width || `100vw`} - 40px, 1520px) - 48px)`,
                                                src: `https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?width=960&height=960`,
                                                srcSet: `https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?scale-down-to=512&width=960&height=960 512w,https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?width=960&height=960 960w`,
                                              },
                                            },
                                          },
                                          children: i(j, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 810,
                                              intrinsicWidth: 1125,
                                              loading: x(
                                                (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  2075.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  209.5 +
                                                  48 +
                                                  557.5 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 960,
                                              pixelWidth: 960,
                                              positionX: `center`,
                                              positionY: `top`,
                                              sizes: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 52px) / 2, 1px)`,
                                              src: `https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?width=960&height=960`,
                                              srcSet: `https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?scale-down-to=512&width=960&height=960 512w,https://framerusercontent.com/images/LWuM8F75E6SFVVwaMkhBry94.png?width=960&height=960 960w`,
                                            },
                                            className: `framer-16xdrl8`,
                                            "data-framer-name": `Image-2`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-9cvprn`,
                                    "data-framer-name": `Text`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-177fh55`,
                                        "data-framer-name": `Left`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                2686.5 +
                                                0 +
                                                0 +
                                                0 +
                                                261.5 +
                                                48 +
                                                1482.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            NHT_rtOCX: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                3393.5 +
                                                0 +
                                                0 +
                                                0 +
                                                261.5 +
                                                48 +
                                                2309.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(M, {
                                            height: 22,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              200 +
                                              160 +
                                              2075.5 +
                                              0 +
                                              0 +
                                              0 +
                                              209.5 +
                                              48 +
                                              1430.5 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(L, {
                                              className: `framer-ffzgam-container`,
                                              nodeId: `O6E1RWWsJ`,
                                              scopeId: `dVT1LJUTV`,
                                              children: i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  NHT_rtOCX: {
                                                    variant: `Cmy0WdTav`,
                                                  },
                                                },
                                                children: i(V, {
                                                  height: `100%`,
                                                  id: `O6E1RWWsJ`,
                                                  k3Z3ztoi4: `Solution`,
                                                  layoutId: `O6E1RWWsJ`,
                                                  RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  TmIm48vq7: `rgb(255, 255, 255)`,
                                                  variant: `VaDzezBN8`,
                                                  width: `100%`,
                                                  ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-1x56cc0`,
                                        "data-framer-name": `Right`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1rii1wr`,
                                              "data-styles-preset": `pAxoS1kOX`,
                                              style: {
                                                "--framer-text-color": `rgba(10, 10, 10, 0.6)`,
                                              },
                                              children: [
                                                i(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(10, 10, 10)`,
                                                  },
                                                  children: `KFD took over G-STAR’s full China e-commerce operation in 2021, `,
                                                }),
                                                `optimizing store operations, re-aligning brand messaging, and introducing exclusive products.`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-6ppc6c`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-s7jn4c`,
                                    "data-framer-name": `Statistics`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-2hahd2`,
                                        "data-framer-name": `Left`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                2686.5 +
                                                0 +
                                                0 +
                                                0 +
                                                261.5 +
                                                48 +
                                                1722.5 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            NHT_rtOCX: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                3393.5 +
                                                0 +
                                                0 +
                                                0 +
                                                261.5 +
                                                48 +
                                                2595.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(M, {
                                            height: 22,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              200 +
                                              160 +
                                              2075.5 +
                                              0 +
                                              0 +
                                              0 +
                                              209.5 +
                                              48 +
                                              1670.5 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(L, {
                                              className: `framer-1w4gsxv-container`,
                                              nodeId: `SvL4El7JS`,
                                              scopeId: `dVT1LJUTV`,
                                              children: i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  NHT_rtOCX: {
                                                    variant: `Cmy0WdTav`,
                                                  },
                                                },
                                                children: i(V, {
                                                  height: `100%`,
                                                  id: `SvL4El7JS`,
                                                  k3Z3ztoi4: `Results`,
                                                  layoutId: `SvL4El7JS`,
                                                  RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  TmIm48vq7: `rgb(255, 255, 255)`,
                                                  variant: `VaDzezBN8`,
                                                  width: `100%`,
                                                  ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      s(`div`, {
                                        className: `framer-1w83ucg`,
                                        "data-framer-name": `Cards`,
                                        children: [
                                          s(Y, {
                                            __framer__animate: {
                                              transition: Z,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-pbyngy`,
                                            "data-framer-name": `List Card`,
                                            children: [
                                              i(`div`, {
                                                className: `framer-1jhor5j`,
                                                "data-framer-name": `Top`,
                                                children: i(`div`, {
                                                  className: `framer-16zvyqn`,
                                                  "data-framer-name": `Number`,
                                                  children: i(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(r, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-hik9eh`,
                                                        "data-styles-preset": `zgy6bak25`,
                                                        children: `388%`,
                                                      }),
                                                    }),
                                                    className: `framer-1uv2kku`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              i(`div`, {
                                                className: `framer-5fvwcn`,
                                                "data-framer-name": `Bottom`,
                                                children: i(`div`, {
                                                  className: `framer-a6cfb7`,
                                                  children: i(`div`, {
                                                    className: `framer-o0ihc5`,
                                                    "data-framer-name": `Text`,
                                                    children: i(F, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-1n1wh7h`,
                                                          "data-styles-preset": `gd6AWaps9`,
                                                          style: {
                                                            "--framer-text-alignment": `right`,
                                                          },
                                                          children: `388% improvement in service score on Tmall within 4 months`,
                                                        }),
                                                      }),
                                                      className: `framer-1kkjypa`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          s(Y, {
                                            __framer__animate: {
                                              transition: Z,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1o7328g`,
                                            "data-framer-name": `List Card`,
                                            children: [
                                              i(`div`, {
                                                className: `framer-1vhk89u`,
                                                "data-framer-name": `Top`,
                                                children: i(`div`, {
                                                  className: `framer-tmr4vf`,
                                                  "data-framer-name": `Number`,
                                                  children: i(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(r, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-hik9eh`,
                                                        "data-styles-preset": `zgy6bak25`,
                                                        children: `4.9`,
                                                      }),
                                                    }),
                                                    className: `framer-qisi1z`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              i(`div`, {
                                                className: `framer-wm9dwp`,
                                                "data-framer-name": `Bottom`,
                                                children: i(`div`, {
                                                  className: `framer-o36j0p`,
                                                  children: i(`div`, {
                                                    className: `framer-joj36i`,
                                                    "data-framer-name": `Text`,
                                                    children: i(F, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-1n1wh7h`,
                                                          "data-styles-preset": `gd6AWaps9`,
                                                          style: {
                                                            "--framer-text-alignment": `right`,
                                                          },
                                                          children: `Star rating went from 3.5 to 4.9 out of 5, leading to a higher customer satisfaction rate and improved search rankings`,
                                                        }),
                                                      }),
                                                      className: `framer-10hdf0c`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          s(Y, {
                                            __framer__animate: {
                                              transition: Z,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-stn0v4`,
                                            "data-framer-name": `List Card`,
                                            children: [
                                              i(`div`, {
                                                className: `framer-wfpvd4`,
                                                "data-framer-name": `Top`,
                                                children: i(`div`, {
                                                  className: `framer-1fodev2`,
                                                  "data-framer-name": `Number`,
                                                  children: i(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(r, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-hik9eh`,
                                                        "data-styles-preset": `zgy6bak25`,
                                                        children: `30%`,
                                                      }),
                                                    }),
                                                    className: `framer-xwovft`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              i(`div`, {
                                                className: `framer-6r58gl`,
                                                "data-framer-name": `Bottom`,
                                                children: i(`div`, {
                                                  className: `framer-16s2aqw`,
                                                  children: i(`div`, {
                                                    className: `framer-13sjurp`,
                                                    "data-framer-name": `Text`,
                                                    children: i(F, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-1n1wh7h`,
                                                          "data-styles-preset": `gd6AWaps9`,
                                                          style: {
                                                            "--framer-text-alignment": `right`,
                                                          },
                                                          children: `Revenue growth of 30% in the first 6 months of KFD’s takeover `,
                                                        }),
                                                      }),
                                                      className: `framer-tv5wzo`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
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
                                ],
                              }),
                              s(`div`, {
                                className: `framer-2s5av5`,
                                "data-framer-name": `CaseStudy`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1kd1qs`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-5xxmpd`,
                                        "data-framer-name": `Description`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-xgn84q`,
                                              "data-styles-preset": `LyKOtaXoC`,
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `Case study 2:`,
                                            }),
                                          }),
                                          className: `framer-tg2n0x`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-u4uun6`,
                                        "data-framer-name": `Heading`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            NHT_rtOCX: { effect: void 0 },
                                          },
                                          children: i(F, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
                                              children: i(`h2`, {
                                                className: `framer-styles-preset-4vuy4n`,
                                                "data-styles-preset": `nCOD2Sdie`,
                                                children: `2XU`,
                                              }),
                                            }),
                                            className: `framer-r8ioj5`,
                                            "data-framer-name": `Title`,
                                            effect: Yn,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-diklz7`,
                                    "data-framer-name": `Text`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-1hnktgh`,
                                        "data-framer-name": `Left`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                2686.5 +
                                                0 +
                                                0 +
                                                0 +
                                                2456 +
                                                48 +
                                                369.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            NHT_rtOCX: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                3393.5 +
                                                0 +
                                                0 +
                                                0 +
                                                3517 +
                                                48 +
                                                329.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(M, {
                                            height: 22,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              200 +
                                              160 +
                                              2075.5 +
                                              0 +
                                              0 +
                                              0 +
                                              2352 +
                                              48 +
                                              317.5 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(L, {
                                              className: `framer-6blc6l-container`,
                                              nodeId: `YGEV7ioH4`,
                                              scopeId: `dVT1LJUTV`,
                                              children: i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  NHT_rtOCX: {
                                                    variant: `Cmy0WdTav`,
                                                  },
                                                },
                                                children: i(V, {
                                                  height: `100%`,
                                                  id: `YGEV7ioH4`,
                                                  k3Z3ztoi4: `Challenges`,
                                                  layoutId: `YGEV7ioH4`,
                                                  RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  TmIm48vq7: `rgb(255, 255, 255)`,
                                                  variant: `VaDzezBN8`,
                                                  width: `100%`,
                                                  ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-eiuqkk`,
                                        "data-framer-name": `Right`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1rii1wr`,
                                              "data-styles-preset": `pAxoS1kOX`,
                                              style: {
                                                "--framer-text-color": `rgba(10, 10, 10, 0.6)`,
                                              },
                                              children: [
                                                i(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(10, 10, 10)`,
                                                  },
                                                  children: `2XU, a global leader in performance sportswear, `,
                                                }),
                                                `struggled to expand its presence in China without incurring large overhead and inventory risk.`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-lapqnr`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-k0dxru`,
                                    "data-framer-name": `Images`,
                                    children: [
                                      i(Y, {
                                        __framer__animate: { transition: Xn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Zn,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-a66c49`,
                                        "data-framer-name": `Photo item`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    160 +
                                                    2686.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2456 +
                                                    48 +
                                                    609.5 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 676,
                                                pixelWidth: 656,
                                                positionX: `51.5%`,
                                                positionY: `31%`,
                                                sizes: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 52px) / 2, 1px)`,
                                                src: `https://framerusercontent.com/images/ZtzwIFuJBNpmkFM89Ey8kSBIw.png?width=656&height=676`,
                                                srcSet: `https://framerusercontent.com/images/ZtzwIFuJBNpmkFM89Ey8kSBIw.png?width=656&height=676 656w`,
                                              },
                                            },
                                            NHT_rtOCX: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    140 +
                                                    3393.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3517 +
                                                    48 +
                                                    615.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 676,
                                                pixelWidth: 656,
                                                positionX: `51.5%`,
                                                positionY: `31%`,
                                                sizes: `calc(min(${_?.width || `100vw`} - 40px, 1520px) - 48px)`,
                                                src: `https://framerusercontent.com/images/ZtzwIFuJBNpmkFM89Ey8kSBIw.png?width=656&height=676`,
                                                srcSet: `https://framerusercontent.com/images/ZtzwIFuJBNpmkFM89Ey8kSBIw.png?width=656&height=676 656w`,
                                              },
                                            },
                                          },
                                          children: i(j, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 810,
                                              intrinsicWidth: 1125,
                                              loading: x(
                                                (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  2075.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2352 +
                                                  48 +
                                                  557.5 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 676,
                                              pixelWidth: 656,
                                              positionX: `51.5%`,
                                              positionY: `31%`,
                                              sizes: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 52px) / 2, 1px)`,
                                              src: `https://framerusercontent.com/images/ZtzwIFuJBNpmkFM89Ey8kSBIw.png?width=656&height=676`,
                                              srcSet: `https://framerusercontent.com/images/ZtzwIFuJBNpmkFM89Ey8kSBIw.png?width=656&height=676 656w`,
                                            },
                                            className: `framer-23fxh9`,
                                            "data-framer-name": `Image-2`,
                                          }),
                                        }),
                                      }),
                                      i(Y, {
                                        __framer__animate: { transition: Qn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: $n,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-13knaz8`,
                                        "data-framer-name": `Photo item`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    160 +
                                                    2686.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2456 +
                                                    48 +
                                                    609.5 +
                                                    0 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 547,
                                                pixelWidth: 809,
                                                sizes: `max((min(${_?.width || `100vw`} - 60px, 1520px) - 52px) / 2, 1px)`,
                                                src: `https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?width=809&height=547`,
                                                srcSet: `https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?scale-down-to=512&width=809&height=547 512w,https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?width=809&height=547 809w`,
                                              },
                                            },
                                            NHT_rtOCX: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 810,
                                                intrinsicWidth: 1125,
                                                loading: x(
                                                  (_?.y || 0) +
                                                    0 +
                                                    200 +
                                                    140 +
                                                    3393.5 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3517 +
                                                    48 +
                                                    615.5 +
                                                    0 +
                                                    821 +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 547,
                                                pixelWidth: 809,
                                                sizes: `calc(min(${_?.width || `100vw`} - 40px, 1520px) - 48px)`,
                                                src: `https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?width=809&height=547`,
                                                srcSet: `https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?scale-down-to=512&width=809&height=547 512w,https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?width=809&height=547 809w`,
                                              },
                                            },
                                          },
                                          children: i(j, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 810,
                                              intrinsicWidth: 1125,
                                              loading: x(
                                                (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  2075.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2352 +
                                                  48 +
                                                  557.5 +
                                                  0 +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 547,
                                              pixelWidth: 809,
                                              sizes: `max((min(${_?.width || `100vw`} - 72px, 1520px) - 52px) / 2, 1px)`,
                                              src: `https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?width=809&height=547`,
                                              srcSet: `https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?scale-down-to=512&width=809&height=547 512w,https://framerusercontent.com/images/3VbzjXsWty7KEtYLeILZtxFXWQ.png?width=809&height=547 809w`,
                                            },
                                            className: `framer-1ep97d3`,
                                            "data-framer-name": `Image-2`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-1txrn36`,
                                    "data-framer-name": `Text`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-kj5r5k`,
                                        "data-framer-name": `Left`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                2686.5 +
                                                0 +
                                                0 +
                                                0 +
                                                2456 +
                                                48 +
                                                1482.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            NHT_rtOCX: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                3393.5 +
                                                0 +
                                                0 +
                                                0 +
                                                3517 +
                                                48 +
                                                2309.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(M, {
                                            height: 22,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              200 +
                                              160 +
                                              2075.5 +
                                              0 +
                                              0 +
                                              0 +
                                              2352 +
                                              48 +
                                              1430.5 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(L, {
                                              className: `framer-r6qp02-container`,
                                              nodeId: `sqSvSzFAK`,
                                              scopeId: `dVT1LJUTV`,
                                              children: i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  NHT_rtOCX: {
                                                    variant: `Cmy0WdTav`,
                                                  },
                                                },
                                                children: i(V, {
                                                  height: `100%`,
                                                  id: `sqSvSzFAK`,
                                                  k3Z3ztoi4: `Solution`,
                                                  layoutId: `sqSvSzFAK`,
                                                  RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  TmIm48vq7: `rgb(255, 255, 255)`,
                                                  variant: `VaDzezBN8`,
                                                  width: `100%`,
                                                  ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-wmpft5`,
                                        "data-framer-name": `Right`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1rii1wr`,
                                              "data-styles-preset": `pAxoS1kOX`,
                                              style: {
                                                "--framer-text-color": `rgba(10, 10, 10, 0.6)`,
                                              },
                                              children: [
                                                i(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(10, 10, 10)`,
                                                  },
                                                  children: `KFD relaunched 2XU in 2020, taking over all digital channels, marketing, and logistics `,
                                                }),
                                                `with a focus on high-conversion strategies and leveraging local influencers to build community engagement.`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-8503al`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-1o4k2wj`,
                                    "data-framer-name": `Statistics`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-lcaahj`,
                                        "data-framer-name": `Left`,
                                        children: i(k, {
                                          breakpoint: E,
                                          overrides: {
                                            h4tK19YuT: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                2686.5 +
                                                0 +
                                                0 +
                                                0 +
                                                2456 +
                                                48 +
                                                1722.5 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            NHT_rtOCX: {
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                3393.5 +
                                                0 +
                                                0 +
                                                0 +
                                                3517 +
                                                48 +
                                                2595.5 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(M, {
                                            height: 22,
                                            y:
                                              (_?.y || 0) +
                                              0 +
                                              200 +
                                              160 +
                                              2075.5 +
                                              0 +
                                              0 +
                                              0 +
                                              2352 +
                                              48 +
                                              1670.5 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(L, {
                                              className: `framer-i9cjqe-container`,
                                              nodeId: `Au2drKFZ9`,
                                              scopeId: `dVT1LJUTV`,
                                              children: i(k, {
                                                breakpoint: E,
                                                overrides: {
                                                  NHT_rtOCX: {
                                                    variant: `Cmy0WdTav`,
                                                  },
                                                },
                                                children: i(V, {
                                                  height: `100%`,
                                                  id: `Au2drKFZ9`,
                                                  k3Z3ztoi4: `Results`,
                                                  layoutId: `Au2drKFZ9`,
                                                  RaZgbjWXH: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                  TmIm48vq7: `rgb(255, 255, 255)`,
                                                  variant: `VaDzezBN8`,
                                                  width: `100%`,
                                                  ws4vDxEZM: `var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      s(`div`, {
                                        className: `framer-c57rd7`,
                                        "data-framer-name": `Cards`,
                                        children: [
                                          s(Y, {
                                            __framer__animate: {
                                              transition: Z,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-b3r29q`,
                                            "data-framer-name": `List Card`,
                                            children: [
                                              i(`div`, {
                                                className: `framer-14nykhs`,
                                                "data-framer-name": `Top`,
                                                children: i(`div`, {
                                                  className: `framer-1if4i9j`,
                                                  "data-framer-name": `Number`,
                                                  children: i(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(r, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-hik9eh`,
                                                        "data-styles-preset": `zgy6bak25`,
                                                        children: `40%`,
                                                      }),
                                                    }),
                                                    className: `framer-p3ryqp`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              i(`div`, {
                                                className: `framer-yx00ix`,
                                                "data-framer-name": `Bottom`,
                                                children: i(`div`, {
                                                  className: `framer-1uv1auh`,
                                                  children: i(`div`, {
                                                    className: `framer-158hkb5`,
                                                    "data-framer-name": `Text`,
                                                    children: i(F, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-1n1wh7h`,
                                                          "data-styles-preset": `gd6AWaps9`,
                                                          style: {
                                                            "--framer-text-alignment": `right`,
                                                          },
                                                          children: `Increased online sales by 40% within the first year of partnership`,
                                                        }),
                                                      }),
                                                      className: `framer-24fnel`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          s(Y, {
                                            __framer__animate: {
                                              transition: Z,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-pf2d6f`,
                                            "data-framer-name": `List Card`,
                                            children: [
                                              i(`div`, {
                                                className: `framer-4qsrnh`,
                                                "data-framer-name": `Top`,
                                                children: i(`div`, {
                                                  className: `framer-ha66hg`,
                                                  "data-framer-name": `Number`,
                                                  children: i(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(r, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-hik9eh`,
                                                        "data-styles-preset": `zgy6bak25`,
                                                        children: `79%`,
                                                      }),
                                                    }),
                                                    className: `framer-1m6mtaz`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              i(`div`, {
                                                className: `framer-fe3fq6`,
                                                "data-framer-name": `Bottom`,
                                                children: i(`div`, {
                                                  className: `framer-uztn34`,
                                                  children: i(`div`, {
                                                    className: `framer-c6et64`,
                                                    "data-framer-name": `Text`,
                                                    children: i(F, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-1n1wh7h`,
                                                          "data-styles-preset": `gd6AWaps9`,
                                                          style: {
                                                            "--framer-text-alignment": `right`,
                                                          },
                                                          children: `Achieved a 79% increase in inventory turnover, fueled by a 97% uplift in fresh stock`,
                                                        }),
                                                      }),
                                                      className: `framer-j22ott`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          s(Y, {
                                            __framer__animate: {
                                              transition: Z,
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled:
                                              !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1t9g1il`,
                                            "data-framer-name": `List Card`,
                                            children: [
                                              i(`div`, {
                                                className: `framer-1663e4s`,
                                                "data-framer-name": `Top`,
                                                children: i(`div`, {
                                                  className: `framer-jqid4z`,
                                                  "data-framer-name": `Number`,
                                                  children: i(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(r, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-hik9eh`,
                                                        "data-styles-preset": `zgy6bak25`,
                                                        children: `189%`,
                                                      }),
                                                    }),
                                                    className: `framer-1i3vbvi`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                              i(`div`, {
                                                className: `framer-1ge3nhj`,
                                                "data-framer-name": `Bottom`,
                                                children: i(`div`, {
                                                  className: `framer-1vpqag9`,
                                                  children: i(`div`, {
                                                    className: `framer-10fww5g`,
                                                    "data-framer-name": `Text`,
                                                    children: i(F, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-1n1wh7h`,
                                                          "data-styles-preset": `gd6AWaps9`,
                                                          style: {
                                                            "--framer-text-alignment": `right`,
                                                          },
                                                          children: `189% YoY growth on Douyin in FY25, far exceeding category growth`,
                                                        }),
                                                      }),
                                                      className: `framer-1qveq2w`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
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
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-1bg1149`,
                          "data-framer-name": `CTA`,
                          children: i(`div`, {
                            className: `framer-1c0k8y5`,
                            "data-framer-name": `Container`,
                            children: i(k, {
                              breakpoint: E,
                              overrides: {
                                NHT_rtOCX: {
                                  animate: void 0,
                                  initial: void 0,
                                  optimized: void 0,
                                },
                              },
                              children: s(An, {
                                animate: Fn,
                                className: `framer-gxkddg`,
                                "data-framer-appear-id": `gxkddg`,
                                "data-framer-name": `Top`,
                                initial: In,
                                optimized: !0,
                                children: [
                                  i(`div`, {
                                    className: `framer-8iyt4f`,
                                    "data-framer-name": `Heading`,
                                    children: i(F, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: s(`h2`, {
                                          className: `framer-styles-preset-1yvd34u`,
                                          "data-styles-preset": `GKtOymhXV`,
                                          children: [
                                            `Your Brand`,
                                            i(`br`, {}),
                                            i(`span`, {
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `Could Be Next.`,
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-93v27`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-tjz98h`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-1nb0y8g`,
                                        "data-framer-name": `Description`,
                                        children: i(F, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-1hin0ji`,
                                              "data-styles-preset": `fN1_sGlJp`,
                                              children: `We don’t take on clients—we take on missions. If you’re serious about scaling in China, let’s talk.`,
                                            }),
                                          }),
                                          className: `framer-ona1e1`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      i(T, {
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
                                        ],
                                        children: (e) =>
                                          i(k, {
                                            breakpoint: E,
                                            overrides: {
                                              h4tK19YuT: {
                                                width: `min(min(max(${_?.width || `100vw`} - 60px, 1px), 1520px), 447px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  160 +
                                                  7397 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  92.32 +
                                                  0 +
                                                  195.5,
                                              },
                                              NHT_rtOCX: {
                                                width: `min(min(max(${_?.width || `100vw`} - 40px, 1px), 1520px), 447px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  200 +
                                                  140 +
                                                  10200 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  120.32 +
                                                  0 +
                                                  173.5,
                                              },
                                            },
                                            children: i(M, {
                                              height: 58,
                                              width: `min(max(min(max(${_?.width || `100vw`} - 72px, 1px), 1520px) * 0.4 - 4px, 1px), 447px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                200 +
                                                160 +
                                                6630 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                179.5,
                                              children: i(L, {
                                                className: `framer-utoyhm-container`,
                                                nodeId: `hvtE8ge4l`,
                                                scopeId: `dVT1LJUTV`,
                                                children: i(k, {
                                                  breakpoint: E,
                                                  overrides: {
                                                    h4tK19YuT: {
                                                      XooFhyn6y: e[1],
                                                    },
                                                    NHT_rtOCX: {
                                                      variant: `J4w9vHV11`,
                                                      XooFhyn6y: e[2],
                                                    },
                                                  },
                                                  children: i(Pe, {
                                                    height: `100%`,
                                                    id: `hvtE8ge4l`,
                                                    layoutId: `hvtE8ge4l`,
                                                    style: {
                                                      height: `100%`,
                                                      maxWidth: `100%`,
                                                      width: `100%`,
                                                    },
                                                    variant: `tTn4pW4jh`,
                                                    width: `100%`,
                                                    X9Xju9FBn: `Let's Talk`,
                                                    XooFhyn6y: e[0],
                                                    xSaAhnG8s: `18px 30px 18px 30px`,
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
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-pZbnz.framer-9un7m1, .framer-pZbnz .framer-9un7m1 { display: block; }`,
        `.framer-pZbnz.framer-18i9pdl { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-pZbnz .framer-rojbls-container, .framer-pZbnz .framer-y7zoqt-container, .framer-pZbnz .framer-ffzgam-container, .framer-pZbnz .framer-1w4gsxv-container, .framer-pZbnz .framer-6blc6l-container, .framer-pZbnz .framer-r6qp02-container, .framer-pZbnz .framer-i9cjqe-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-pZbnz .framer-ihtdja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 160px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1wijj2h, .framer-pZbnz .framer-1bg1149 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-s2ely1, .framer-pZbnz .framer-1c0k8y5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-17hwu4z, .framer-pZbnz .framer-gxkddg { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-pZbnz .framer-1fuwn1i, .framer-pZbnz .framer-8iyt4f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 60%; }`,
        `.framer-pZbnz .framer-1pno71j, .framer-pZbnz .framer-1rb7c9d, .framer-pZbnz .framer-a3v3oo, .framer-pZbnz .framer-1c0zfw6, .framer-pZbnz .framer-vqegeq, .framer-pZbnz .framer-r8ioj5, .framer-pZbnz .framer-93v27 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pZbnz .framer-10aaqvz, .framer-pZbnz .framer-tjz98h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-1tw9vli, .framer-pZbnz .framer-1nb0y8g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1jd9fks, .framer-pZbnz .framer-1mzvfk4, .framer-pZbnz .framer-6ppc6c, .framer-pZbnz .framer-lapqnr, .framer-pZbnz .framer-8503al, .framer-pZbnz .framer-ona1e1 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-ekfa2v-container, .framer-pZbnz .framer-utoyhm-container { flex: none; height: 58px; max-width: 447px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1ocs847 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-nfplpo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; max-width: 1520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1khk88o, .framer-pZbnz .framer-a9fr8f { display: grid; flex: none; gap: 4px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1fjncdt-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-pZbnz .framer-1aeyev1 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; grid-column: span 3; height: min-content; justify-content: center; justify-self: start; min-height: 22px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1ue8095 { display: grid; flex: none; gap: 4px 4px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(8, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1ddqfe7 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-uj0890-container { aspect-ratio: 1.3602941176470589 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 101px); position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-fzxq0s-container { align-self: start; flex: none; grid-column: span 8; height: 96px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-t6q39t, .framer-pZbnz .framer-1tai3ri { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-k9rl18, .framer-pZbnz .framer-1hexw4w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-159u5vo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1wq1ski { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-1125vfk { align-content: flex-start; align-items: flex-start; align-self: start; background-color: #ffffff; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-pZbnz .framer-10iculi { bottom: 0px; flex: none; gap: 0px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
        `.framer-pZbnz .framer-rwtde6 { background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }`,
        `.framer-pZbnz .framer-15o9029 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-98vc4j { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 240px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pZbnz .framer-iih9kf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-o26sy9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; min-height: 160px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1f33rnt-container { flex: none; height: 58px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1uwyr64-container, .framer-pZbnz .framer-16b5mus-container, .framer-pZbnz .framer-66hfft-container { align-self: start; flex: none; height: 642px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1humzuc { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-12atgxu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-1oea86d { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-13l3uv4, .framer-pZbnz .framer-10yng0q, .framer-pZbnz .framer-tg2n0x { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-1dynnhj, .framer-pZbnz .framer-2s5av5 { align-content: center; align-items: center; background-color: var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, #ffffff); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 48px 24px 48px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-pZbnz .framer-636d25, .framer-pZbnz .framer-1kd1qs { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-khfhb6, .framer-pZbnz .framer-u3rils, .framer-pZbnz .framer-5xxmpd, .framer-pZbnz .framer-k0dxru { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-swagf4, .framer-pZbnz .framer-u4uun6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-9a65di, .framer-pZbnz .framer-9cvprn, .framer-pZbnz .framer-diklz7, .framer-pZbnz .framer-1txrn36 { display: grid; flex: none; gap: 4px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1gqqozj, .framer-pZbnz .framer-177fh55, .framer-pZbnz .framer-1hnktgh, .framer-pZbnz .framer-kj5r5k { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-tjlvfm, .framer-pZbnz .framer-1x56cc0, .framer-pZbnz .framer-eiuqkk, .framer-pZbnz .framer-wmpft5 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-1nnzcj8, .framer-pZbnz .framer-23rqkp, .framer-pZbnz .framer-a66c49, .framer-pZbnz .framer-13knaz8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-ldjcob, .framer-pZbnz .framer-16xdrl8, .framer-pZbnz .framer-23fxh9, .framer-pZbnz .framer-1ep97d3 { aspect-ratio: 1.3888888888888888 / 1; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: var(--framer-aspect-ratio-supported, 388px); overflow: visible; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-s7jn4c, .framer-pZbnz .framer-1o4k2wj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-2hahd2, .framer-pZbnz .framer-lcaahj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 20%; }`,
        `.framer-pZbnz .framer-1w83ucg, .framer-pZbnz .framer-c57rd7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 316px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-pbyngy, .framer-pZbnz .framer-1o7328g, .framer-pZbnz .framer-stn0v4, .framer-pZbnz .framer-b3r29q, .framer-pZbnz .framer-pf2d6f, .framer-pZbnz .framer-1t9g1il { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-1jhor5j, .framer-pZbnz .framer-1vhk89u, .framer-pZbnz .framer-wfpvd4, .framer-pZbnz .framer-14nykhs, .framer-pZbnz .framer-4qsrnh, .framer-pZbnz .framer-1663e4s { align-content: flex-start; align-items: flex-start; background-color: var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, #f5f5f5); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 30px 20px 30px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-pZbnz .framer-16zvyqn, .framer-pZbnz .framer-tmr4vf, .framer-pZbnz .framer-1fodev2, .framer-pZbnz .framer-1if4i9j, .framer-pZbnz .framer-ha66hg, .framer-pZbnz .framer-jqid4z { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pZbnz .framer-1uv2kku, .framer-pZbnz .framer-1kkjypa, .framer-pZbnz .framer-qisi1z, .framer-pZbnz .framer-10hdf0c, .framer-pZbnz .framer-xwovft, .framer-pZbnz .framer-tv5wzo, .framer-pZbnz .framer-p3ryqp, .framer-pZbnz .framer-24fnel, .framer-pZbnz .framer-1m6mtaz, .framer-pZbnz .framer-j22ott, .framer-pZbnz .framer-1i3vbvi, .framer-pZbnz .framer-1qveq2w { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pZbnz .framer-5fvwcn, .framer-pZbnz .framer-wm9dwp, .framer-pZbnz .framer-6r58gl, .framer-pZbnz .framer-yx00ix, .framer-pZbnz .framer-fe3fq6, .framer-pZbnz .framer-1ge3nhj { align-content: flex-start; align-items: flex-start; background-color: var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, #f5f5f5); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 60px 20px 60px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-pZbnz .framer-a6cfb7, .framer-pZbnz .framer-o36j0p, .framer-pZbnz .framer-16s2aqw, .framer-pZbnz .framer-1uv1auh, .framer-pZbnz .framer-uztn34, .framer-pZbnz .framer-1vpqag9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pZbnz .framer-o0ihc5, .framer-pZbnz .framer-joj36i, .framer-pZbnz .framer-13sjurp, .framer-pZbnz .framer-158hkb5, .framer-pZbnz .framer-c6et64, .framer-pZbnz .framer-10fww5g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...Ge,
        ...Le,
        ...Ye,
        ...lt,
        ...Ve,
        ...tt,
        ...Ce,
        ...ye,
        ...nt,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-pZbnz.framer-18i9pdl { width: 810px; } .framer-pZbnz .framer-1wijj2h, .framer-pZbnz .framer-1ocs847, .framer-pZbnz .framer-t6q39t, .framer-pZbnz .framer-1tai3ri, .framer-pZbnz .framer-1bg1149 { padding: 0px 30px 0px 30px; } .framer-pZbnz .framer-s2ely1, .framer-pZbnz .framer-1c0k8y5 { gap: 80px; } .framer-pZbnz .framer-17hwu4z, .framer-pZbnz .framer-gxkddg { flex-direction: column; } .framer-pZbnz .framer-1fuwn1i, .framer-pZbnz .framer-8iyt4f { gap: 21px; width: 100%; } .framer-pZbnz .framer-10aaqvz, .framer-pZbnz .framer-tjz98h { flex: none; gap: 24px; width: 100%; } .framer-pZbnz .framer-1tw9vli, .framer-pZbnz .framer-1nb0y8g { padding: 22px 0px 0px 0px; } .framer-pZbnz .framer-nfplpo, .framer-pZbnz .framer-1aeyev1 { gap: 60px; } .framer-pZbnz .framer-1ue8095 { grid-template-columns: repeat(6, minmax(50px, 1fr)); } .framer-pZbnz .framer-uj0890-container { height: var(--framer-aspect-ratio-supported, 90px); } .framer-pZbnz .framer-fzxq0s-container { grid-column: span 6; } .framer-pZbnz .framer-1wq1ski, .framer-pZbnz .framer-swagf4, .framer-pZbnz .framer-u4uun6 { gap: 21px; } .framer-pZbnz .framer-a9fr8f { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-pZbnz .framer-1humzuc { gap: 24px; } .framer-pZbnz .framer-12atgxu { flex: none; gap: 21px; width: 55%; } .framer-pZbnz .framer-1oea86d, .framer-pZbnz .framer-khfhb6, .framer-pZbnz .framer-5xxmpd { padding: 52px 0px 0px 0px; } .framer-pZbnz .framer-tjlvfm, .framer-pZbnz .framer-1x56cc0, .framer-pZbnz .framer-eiuqkk, .framer-pZbnz .framer-wmpft5 { gap: 30px; } .framer-pZbnz .framer-ldjcob, .framer-pZbnz .framer-16xdrl8, .framer-pZbnz .framer-23fxh9, .framer-pZbnz .framer-1ep97d3 { height: var(--framer-aspect-ratio-supported, 252px); } .framer-pZbnz .framer-1jhor5j, .framer-pZbnz .framer-5fvwcn, .framer-pZbnz .framer-1vhk89u, .framer-pZbnz .framer-wm9dwp, .framer-pZbnz .framer-wfpvd4, .framer-pZbnz .framer-6r58gl, .framer-pZbnz .framer-14nykhs, .framer-pZbnz .framer-yx00ix, .framer-pZbnz .framer-4qsrnh, .framer-pZbnz .framer-fe3fq6, .framer-pZbnz .framer-1663e4s, .framer-pZbnz .framer-1ge3nhj { padding: 24px; }}`,
        `@media (max-width: 809.98px) { .framer-pZbnz.framer-18i9pdl { width: 390px; } .framer-pZbnz .framer-ihtdja { gap: 64px; padding: 140px 0px 0px 0px; } .framer-pZbnz .framer-1wijj2h, .framer-pZbnz .framer-1ocs847, .framer-pZbnz .framer-t6q39t, .framer-pZbnz .framer-1tai3ri, .framer-pZbnz .framer-1bg1149 { padding: 0px 20px 0px 20px; } .framer-pZbnz .framer-s2ely1, .framer-pZbnz .framer-nfplpo, .framer-pZbnz .framer-k9rl18, .framer-pZbnz .framer-iih9kf, .framer-pZbnz .framer-1hexw4w, .framer-pZbnz .framer-1c0k8y5 { gap: 30px; } .framer-pZbnz .framer-17hwu4z, .framer-pZbnz .framer-gxkddg { flex-direction: column; gap: 32px; will-change: unset; } .framer-pZbnz .framer-1fuwn1i, .framer-pZbnz .framer-8iyt4f { align-content: flex-end; align-items: flex-end; gap: 14px; order: 0; width: 100%; } .framer-pZbnz .framer-1pno71j, .framer-pZbnz .framer-1rb7c9d, .framer-pZbnz .framer-1c0zfw6, .framer-pZbnz .framer-vqegeq, .framer-pZbnz .framer-r8ioj5, .framer-pZbnz .framer-93v27 { order: 0; } .framer-pZbnz .framer-10aaqvz, .framer-pZbnz .framer-tjz98h { flex: none; gap: 24px; order: 1; width: 100%; } .framer-pZbnz .framer-1khk88o { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; justify-content: flex-start; } .framer-pZbnz .framer-1fjncdt-container { align-self: unset; order: 0; width: auto; } .framer-pZbnz .framer-1aeyev1 { align-content: flex-end; align-items: flex-end; align-self: unset; gap: 30px; min-width: 260px; order: 1; width: min-content; } .framer-pZbnz .framer-1ue8095 { grid-template-columns: repeat(3, minmax(50px, 1fr)); } .framer-pZbnz .framer-uj0890-container { aspect-ratio: 1.14 / 1; height: var(--framer-aspect-ratio-supported, 175px); } .framer-pZbnz .framer-fzxq0s-container { grid-column: span 3; } .framer-pZbnz .framer-159u5vo, .framer-pZbnz .framer-1humzuc { flex-direction: column; gap: 16px; } .framer-pZbnz .framer-1wq1ski, .framer-pZbnz .framer-12atgxu { align-content: flex-end; align-items: flex-end; flex: none; gap: 14px; order: 0; width: 100%; } .framer-pZbnz .framer-a3v3oo, .framer-pZbnz .framer-khfhb6, .framer-pZbnz .framer-5xxmpd { order: 1; } .framer-pZbnz .framer-a9fr8f { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; } .framer-pZbnz .framer-1125vfk { align-self: unset; gap: 90px; padding: 24px; } .framer-pZbnz .framer-15o9029 { flex-direction: column; gap: 14px; } .framer-pZbnz .framer-98vc4j { flex: none; width: 100%; } .framer-pZbnz .framer-1uwyr64-container, .framer-pZbnz .framer-16b5mus-container, .framer-pZbnz .framer-66hfft-container { align-self: unset; height: auto; } .framer-pZbnz .framer-1oea86d { flex: none; order: 1; width: 100%; } .framer-pZbnz .framer-636d25, .framer-pZbnz .framer-1kd1qs { gap: 16px; } .framer-pZbnz .framer-swagf4, .framer-pZbnz .framer-u4uun6 { align-content: flex-end; align-items: flex-end; gap: 14px; order: 0; } .framer-pZbnz .framer-9a65di, .framer-pZbnz .framer-9cvprn, .framer-pZbnz .framer-diklz7, .framer-pZbnz .framer-1txrn36 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; justify-content: flex-start; } .framer-pZbnz .framer-1gqqozj, .framer-pZbnz .framer-177fh55, .framer-pZbnz .framer-1hnktgh, .framer-pZbnz .framer-kj5r5k { align-self: unset; gap: 14px; } .framer-pZbnz .framer-tjlvfm, .framer-pZbnz .framer-1x56cc0, .framer-pZbnz .framer-eiuqkk, .framer-pZbnz .framer-wmpft5 { align-self: unset; gap: 20px; } .framer-pZbnz .framer-1mzvfk4, .framer-pZbnz .framer-6ppc6c, .framer-pZbnz .framer-lapqnr, .framer-pZbnz .framer-8503al { --framer-text-wrap-override: none; } .framer-pZbnz .framer-u3rils, .framer-pZbnz .framer-k0dxru { flex-direction: column; gap: 8px; justify-content: flex-start; } .framer-pZbnz .framer-1nnzcj8, .framer-pZbnz .framer-23rqkp, .framer-pZbnz .framer-a66c49, .framer-pZbnz .framer-13knaz8 { flex: none; gap: 18px; width: 100%; } .framer-pZbnz .framer-ldjcob, .framer-pZbnz .framer-16xdrl8, .framer-pZbnz .framer-23fxh9, .framer-pZbnz .framer-1ep97d3 { border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; height: var(--framer-aspect-ratio-supported, 144px); order: 0; } .framer-pZbnz .framer-s7jn4c, .framer-pZbnz .framer-1o4k2wj { flex-direction: column; gap: 24px; } .framer-pZbnz .framer-2hahd2, .framer-pZbnz .framer-lcaahj { gap: 14px; width: 100%; } .framer-pZbnz .framer-1w83ucg, .framer-pZbnz .framer-c57rd7 { flex: none; flex-direction: column; height: min-content; width: 100%; } .framer-pZbnz .framer-pbyngy, .framer-pZbnz .framer-1o7328g, .framer-pZbnz .framer-stn0v4, .framer-pZbnz .framer-b3r29q, .framer-pZbnz .framer-pf2d6f, .framer-pZbnz .framer-1t9g1il { flex: none; flex-direction: row; height: min-content; width: 100%; } .framer-pZbnz .framer-1jhor5j, .framer-pZbnz .framer-1vhk89u, .framer-pZbnz .framer-wfpvd4 { align-content: center; align-items: center; align-self: stretch; height: auto; padding: 24px; width: 40%; } .framer-pZbnz .framer-5fvwcn, .framer-pZbnz .framer-wm9dwp, .framer-pZbnz .framer-6r58gl, .framer-pZbnz .framer-yx00ix, .framer-pZbnz .framer-fe3fq6, .framer-pZbnz .framer-1ge3nhj { height: min-content; padding: 24px; width: 1px; } .framer-pZbnz .framer-14nykhs, .framer-pZbnz .framer-4qsrnh, .framer-pZbnz .framer-1663e4s { align-content: center; align-items: center; align-self: stretch; height: auto; padding: 24px; width: 38%; }}`,
      ],
      `framer-pZbnz`,
    )),
    (rr = $),
    ($.displayName = `Our Model`),
    ($.defaultProps = { height: 6207.5, width: 1200 }),
    C(
      $,
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
          ],
        },
        ...bn,
        ...xn,
        ...Cn,
        ...Tn,
        ...En,
        ...On,
        ...kn,
        ...y(Ke),
        ...y(Re),
        ...y(Xe),
        ...y(ut),
        ...y(He),
        ...y(rt),
        ...y(we),
        ...y(be),
        ...y(it),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => Promise.allSettled([N.get(Hn(), t.locale).preload()]),
    }),
    (ir = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerdVT1LJUTV`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `6207.5`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"h4tK19YuT":{"layout":["fixed","fixed"]},"NHT_rtOCX":{"layout":["fixed","fixed"]}}}`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ir as __FramerMetadata__, rr as default };
//# sourceMappingURL=QBiJEczUy8qESlLbccY9jvzF45WzW2fGq2tj6FPFrNE.Bq7vWFS7.mjs.map
