const __vite__fileDeps = [
    "assets/index-POi8GhpC.js",
    "assets/index-CWjS2nv2.css",
    "h7Lgs3KS.js",
    "BY6RoX_X.js",
    "lMcg-u9L.js",
    "H9tVwpdi.js",
    "tucexuMp.js",
    "CFx-A9aU.js",
    "F3DlGjgW.js",
    "DphM753v.js",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
var mr = (I, D, L) => {
  if (!D.has(I)) throw TypeError("Cannot " + L);
};
var w = (I, D, L) => (
    mr(I, D, "read from private field"), L ? L.call(I) : D.get(I)
  ),
  V = (I, D, L) => {
    if (D.has(I))
      throw TypeError("Cannot add the same private member more than once");
    D instanceof WeakSet ? D.add(I) : D.set(I, L);
  },
  z = (I, D, L, ze) => (
    mr(I, D, "write to private field"), ze ? ze.call(I, L) : D.set(I, L), L
  );
var W = (I, D, L) => (mr(I, D, "access private method"), L);
import {
  ft as jt,
  fu as Ve,
  fv as fn,
  fw as gn,
  fx as Nt,
  fy as bn,
  fz as kt,
  cn as m,
  cv as i,
  fb as me,
  fA as yn,
  _,
  dv as vn,
  dl as Ot,
  dd as Ne,
  df as ke,
  fB as xn,
  O as $,
  dm as At,
  eB as Et,
  eE as Ge,
  z as P,
  cA as C,
  cJ as N,
  er as We,
  cP as se,
  fC as wn,
  fD as Cn,
  ej as jn,
  cz as K,
  e7 as Nn,
  cR as kn,
  cS as On,
  cO as Rt,
  cI as Ke,
  fE as Be,
  db as St,
  dM as An,
  ec as le,
  e8 as En,
  cH as _t,
  eM as Rn,
  fF as Sn,
  fG as _n,
  cy as Oe,
  cM as Mt,
  fH as Mn,
  et as Tn,
  dh as Pn,
  dt as In,
  dE as Vn,
  __tla as zn,
} from "./assets/index-POi8GhpC.js";
import { g as pr, s as hr, a as Dn, u as Qe, C as pe } from "./CwT0bMyZ.js";
import { I as fr } from "./L2srWHi_.js";
import { C as gr, __tla as $n } from "./Bujnyu6O.js";
import { P as Fn } from "./C2Mbex37.js";
import { V as Hn } from "./BNG_iicX.js";
import { A as Ln } from "./C6gN5CZK.js";
import { F as br } from "./CnZUQvP9.js";
import { g as Un, T as qn } from "./DdtGuP0z.js";
import { u as Gn } from "./D-iJCSbt.js";
import {
  Q as Tt,
  u as Wn,
  a as Kn,
  e as Bn,
  b as Qn,
  c as Yn,
  s as Pt,
  f as It,
  w as Xn,
  g as Zn,
  n as Jn,
  d as ea,
  h as ra,
  i as Vt,
  j as ta,
  k as zt,
} from "./O10yLqW6.js";
import { v as Dt } from "./Bb0RDO2T.js";
import { d as $t, i as sa } from "./CNwSF2cA.js";
import { U as Ft } from "./Dm4mEk3Z.js";
import "./CJGo2KxJ.js";
import "./DLie8hhL.js";
import "./C8rAcL73.js";
import "./CiJOrYqO.js";
import "./CNj6CspX.js";
import "./vSRfwVQ4.js";
import "./Bcp9QaNf.js";
let Ht,
  na = Promise.all([
    (() => {
      try {
        return zn;
      } catch {}
    })(),
    (() => {
      try {
        return $n;
      } catch {}
    })(),
  ]).then(async () => {
    var ce,
      B,
      xe,
      q,
      de,
      Se,
      _e,
      Ue,
      Lt,
      Me,
      yr,
      Te,
      vr,
      Pe,
      xr,
      wt,
      oe,
      ie,
      U,
      re,
      we,
      Ye,
      Ie,
      wr,
      Ct;
    (function () {
      try {
        var e =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          r = new e.Error().stack;
        r &&
          ((e._sentryDebugIds = e._sentryDebugIds || {}),
          (e._sentryDebugIds[r] = "870db681-f51a-4980-9d19-106c95de821e"),
          (e._sentryDebugIdIdentifier =
            "sentry-dbid-870db681-f51a-4980-9d19-106c95de821e"));
      } catch {}
    })();
    function I(e, r) {
      return e.filter((t) => !r.includes(t));
    }
    function D(e, r, t) {
      const s = e.slice(0);
      return (s[r] = t), s;
    }
    var L =
        ((wt = class extends jt {
          constructor(r, t, s) {
            super();
            V(this, Ue);
            V(this, Me);
            V(this, Te);
            V(this, Pe);
            V(this, ce, void 0);
            V(this, B, void 0);
            V(this, xe, void 0);
            V(this, q, void 0);
            V(this, de, void 0);
            V(this, Se, void 0);
            V(this, _e, void 0);
            z(this, ce, r),
              z(this, xe, []),
              z(this, q, []),
              z(this, B, []),
              this.setQueries(t);
          }
          onSubscribe() {
            this.listeners.size === 1 &&
              w(this, q).forEach((r) => {
                r.subscribe((t) => {
                  W(this, Te, vr).call(this, r, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              w(this, q).forEach((r) => {
                r.destroy();
              });
          }
          setQueries(r, t, s) {
            z(this, xe, r),
              Ve.batch(() => {
                const n = w(this, q),
                  a = W(this, Me, yr).call(this, w(this, xe));
                a.forEach((c) =>
                  c.observer.setOptions(c.defaultedQueryOptions, s)
                );
                const o = a.map((c) => c.observer),
                  l = o.map((c) => c.getCurrentResult()),
                  p = o.some((c, u) => c !== n[u]);
                (n.length === o.length && !p) ||
                  (z(this, q, o),
                  z(this, B, l),
                  this.hasListeners() &&
                    (I(n, o).forEach((c) => {
                      c.destroy();
                    }),
                    I(o, n).forEach((c) => {
                      c.subscribe((u) => {
                        W(this, Te, vr).call(this, c, u);
                      });
                    }),
                    W(this, Pe, xr).call(this)));
              });
          }
          getCurrentResult() {
            return w(this, B);
          }
          getQueries() {
            return w(this, q).map((r) => r.getCurrentQuery());
          }
          getObservers() {
            return w(this, q);
          }
          getOptimisticResult(r, t) {
            const s = W(this, Me, yr).call(this, r),
              n = s.map((a) =>
                a.observer.getOptimisticResult(a.defaultedQueryOptions)
              );
            return [
              n,
              (a) => W(this, Ue, Lt).call(this, a ?? n, t),
              () =>
                s.map((a, o) => {
                  const l = n[o];
                  return a.defaultedQueryOptions.notifyOnChangeProps
                    ? l
                    : a.observer.trackResult(l, (p) => {
                        s.forEach((c) => {
                          c.observer.trackProp(p);
                        });
                      });
                }),
            ];
          }
        }),
        (ce = new WeakMap()),
        (B = new WeakMap()),
        (xe = new WeakMap()),
        (q = new WeakMap()),
        (de = new WeakMap()),
        (Se = new WeakMap()),
        (_e = new WeakMap()),
        (Ue = new WeakSet()),
        (Lt = function (r, t) {
          return t
            ? ((!w(this, de) ||
                w(this, B) !== w(this, _e) ||
                t !== w(this, Se)) &&
                (z(this, Se, t),
                z(this, _e, w(this, B)),
                z(this, de, fn(w(this, de), t(r)))),
              w(this, de))
            : r;
        }),
        (Me = new WeakSet()),
        (yr = function (r) {
          const t = w(this, q),
            s = new Map(t.map((d) => [d.options.queryHash, d])),
            n = r.map((d) => w(this, ce).defaultQueryOptions(d)),
            a = n.flatMap((d) => {
              const h = s.get(d.queryHash);
              return h != null
                ? [{ defaultedQueryOptions: d, observer: h }]
                : [];
            }),
            o = new Set(a.map((d) => d.defaultedQueryOptions.queryHash)),
            l = n.filter((d) => !o.has(d.queryHash)),
            p = (d) => {
              const h = w(this, ce).defaultQueryOptions(d);
              return (
                w(this, q).find((b) => b.options.queryHash === h.queryHash) ??
                new Tt(w(this, ce), h)
              );
            },
            c = l.map((d) => ({ defaultedQueryOptions: d, observer: p(d) })),
            u = (d, h) =>
              n.indexOf(d.defaultedQueryOptions) -
              n.indexOf(h.defaultedQueryOptions);
          return a.concat(c).sort(u);
        }),
        (Te = new WeakSet()),
        (vr = function (r, t) {
          const s = w(this, q).indexOf(r);
          s !== -1 &&
            (z(this, B, D(w(this, B), s, t)), W(this, Pe, xr).call(this));
        }),
        (Pe = new WeakSet()),
        (xr = function () {
          Ve.batch(() => {
            this.listeners.forEach((r) => {
              r(w(this, B));
            });
          });
        }),
        wt),
      ze =
        ((Ct = class extends jt {
          constructor(r, t) {
            super();
            V(this, we);
            V(this, Ie);
            V(this, oe, void 0);
            V(this, ie, void 0);
            V(this, U, void 0);
            V(this, re, void 0);
            z(this, oe, r),
              this.setOptions(t),
              this.bindMethods(),
              W(this, we, Ye).call(this);
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(r) {
            var s;
            const t = this.options;
            (this.options = w(this, oe).defaultMutationOptions(r)),
              gn(this.options, t) ||
                w(this, oe)
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: w(this, U),
                    observer: this,
                  }),
              t != null &&
              t.mutationKey &&
              this.options.mutationKey &&
              Nt(t.mutationKey) !== Nt(this.options.mutationKey)
                ? this.reset()
                : ((s = w(this, U)) == null ? void 0 : s.state.status) ===
                    "pending" && w(this, U).setOptions(this.options);
          }
          onUnsubscribe() {
            var r;
            this.hasListeners() ||
              (r = w(this, U)) == null ||
              r.removeObserver(this);
          }
          onMutationUpdate(r) {
            W(this, we, Ye).call(this), W(this, Ie, wr).call(this, r);
          }
          getCurrentResult() {
            return w(this, ie);
          }
          reset() {
            var r;
            (r = w(this, U)) == null || r.removeObserver(this),
              z(this, U, void 0),
              W(this, we, Ye).call(this),
              W(this, Ie, wr).call(this);
          }
          mutate(r, t) {
            var s;
            return (
              z(this, re, t),
              (s = w(this, U)) == null || s.removeObserver(this),
              z(
                this,
                U,
                w(this, oe).getMutationCache().build(w(this, oe), this.options)
              ),
              w(this, U).addObserver(this),
              w(this, U).execute(r)
            );
          }
        }),
        (oe = new WeakMap()),
        (ie = new WeakMap()),
        (U = new WeakMap()),
        (re = new WeakMap()),
        (we = new WeakSet()),
        (Ye = function () {
          var t;
          const r = ((t = w(this, U)) == null ? void 0 : t.state) ?? bn();
          z(this, ie, {
            ...r,
            isPending: r.status === "pending",
            isSuccess: r.status === "success",
            isError: r.status === "error",
            isIdle: r.status === "idle",
            mutate: this.mutate,
            reset: this.reset,
          });
        }),
        (Ie = new WeakSet()),
        (wr = function (r) {
          Ve.batch(() => {
            var t, s, n, a, o, l, p, c;
            if (w(this, re) && this.hasListeners()) {
              const u = w(this, ie).variables,
                d = w(this, ie).context;
              (r == null ? void 0 : r.type) === "success"
                ? ((s = (t = w(this, re)).onSuccess) == null ||
                    s.call(t, r.data, u, d),
                  (a = (n = w(this, re)).onSettled) == null ||
                    a.call(n, r.data, null, u, d))
                : (r == null ? void 0 : r.type) === "error" &&
                  ((l = (o = w(this, re)).onError) == null ||
                    l.call(o, r.error, u, d),
                  (c = (p = w(this, re)).onSettled) == null ||
                    c.call(p, void 0, r.error, u, d));
            }
            this.listeners.forEach((u) => {
              u(w(this, ie));
            });
          });
        }),
        Ct);
    function Ut({ queries: e, ...r }, t) {
      const s = kt(t),
        n = Wn(),
        a = Kn(),
        o = m.useMemo(
          () =>
            e.map((b) => {
              const f = s.defaultQueryOptions(b);
              return (
                (f._optimisticResults = n ? "isRestoring" : "optimistic"), f
              );
            }),
          [e, s, n]
        );
      o.forEach((b) => {
        Bn(b), Qn(b, a);
      }),
        Yn(a);
      const [l] = m.useState(() => new L(s, o, r)),
        [p, c, u] = l.getOptimisticResult(o, r.combine);
      m.useSyncExternalStore(
        m.useCallback(
          (b) => (n ? () => {} : l.subscribe(Ve.batchCalls(b))),
          [l, n]
        ),
        () => l.getCurrentResult(),
        () => l.getCurrentResult()
      ),
        m.useEffect(() => {
          l.setQueries(o, r, { listeners: !1 });
        }, [o, r, l]);
      const d = p.some((b, f) => Pt(o[f], b))
        ? p.flatMap((b, f) => {
            const y = o[f];
            if (y) {
              const g = new Tt(s, y);
              if (Pt(y, b)) return It(y, g, a);
              Xn(b, n) && It(y, g, a);
            }
            return [];
          })
        : [];
      if (d.length > 0) throw Promise.all(d);
      const h = p.find((b, f) => {
        const y = o[f];
        return (
          y &&
          Zn({
            result: b,
            errorResetBoundary: a,
            throwOnError: y.throwOnError,
            query: s.getQueryCache().get(y.queryHash),
          })
        );
      });
      if (h != null && h.error) throw h.error;
      return c(u());
    }
    function Cr(e, r) {
      const t = kt(r),
        [s] = m.useState(() => new ze(t, e));
      m.useEffect(() => {
        s.setOptions(e);
      }, [s, e]);
      const n = m.useSyncExternalStore(
          m.useCallback((o) => s.subscribe(Ve.batchCalls(o)), [s]),
          () => s.getCurrentResult(),
          () => s.getCurrentResult()
        ),
        a = m.useCallback(
          (o, l) => {
            s.mutate(o, l).catch(Jn);
          },
          [s]
        );
      if (n.error && ea(s.options.throwOnError, [n.error])) throw n.error;
      return { ...n, mutate: a, mutateAsync: n.mutate };
    }
    function J(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
      return function (s) {
        if ((e == null || e(s), t === !1 || !s.defaultPrevented))
          return r == null ? void 0 : r(s);
      };
    }
    function qt(e, r = []) {
      let t = [];
      function s(a, o) {
        const l = m.createContext(o),
          p = t.length;
        t = [...t, o];
        const c = (d) => {
          var v;
          const { scope: h, children: b, ...f } = d,
            y = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[p]) || l,
            g = m.useMemo(() => f, Object.values(f));
          return i.jsx(y.Provider, { value: g, children: b });
        };
        c.displayName = a + "Provider";
        function u(d, h) {
          var y;
          const b =
              ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[p]) || l,
            f = m.useContext(b);
          if (f) return f;
          if (o !== void 0) return o;
          throw new Error(`\`${d}\` must be used within \`${a}\``);
        }
        return [c, u];
      }
      const n = () => {
        const a = t.map((o) => m.createContext(o));
        return function (o) {
          const l = (o == null ? void 0 : o[e]) || a;
          return m.useMemo(
            () => ({ [`__scope${e}`]: { ...o, [e]: l } }),
            [o, l]
          );
        };
      };
      return (n.scopeName = e), [s, Gt(n, ...r)];
    }
    function Gt(...e) {
      const r = e[0];
      if (e.length === 1) return r;
      const t = () => {
        const s = e.map((n) => ({ useScope: n(), scopeName: n.scopeName }));
        return function (n) {
          const a = s.reduce((o, { useScope: l, scopeName: p }) => {
            const c = l(n)[`__scope${p}`];
            return { ...o, ...c };
          }, {});
          return m.useMemo(() => ({ [`__scope${r.scopeName}`]: a }), [a]);
        };
      };
      return (t.scopeName = r.scopeName), t;
    }
    function Wt(e, r = []) {
      let t = [];
      function s(a, o) {
        const l = m.createContext(o),
          p = t.length;
        t = [...t, o];
        function c(d) {
          const { scope: h, children: b, ...f } = d,
            y = (h == null ? void 0 : h[e][p]) || l,
            g = m.useMemo(() => f, Object.values(f));
          return i.jsx(y.Provider, { value: g, children: b });
        }
        function u(d, h) {
          const b = (h == null ? void 0 : h[e][p]) || l,
            f = m.useContext(b);
          if (f) return f;
          if (o !== void 0) return o;
          throw new Error(`\`${d}\` must be used within \`${a}\``);
        }
        return (c.displayName = a + "Provider"), [c, u];
      }
      const n = () => {
        const a = t.map((o) => m.createContext(o));
        return function (o) {
          const l = (o == null ? void 0 : o[e]) || a;
          return m.useMemo(
            () => ({ [`__scope${e}`]: { ...o, [e]: l } }),
            [o, l]
          );
        };
      };
      return (n.scopeName = e), [s, Kt(n, ...r)];
    }
    function Kt(...e) {
      const r = e[0];
      if (e.length === 1) return r;
      const t = () => {
        const s = e.map((n) => ({ useScope: n(), scopeName: n.scopeName }));
        return function (n) {
          const a = s.reduce((o, { useScope: l, scopeName: p }) => {
            const c = l(n)[`__scope${p}`];
            return { ...o, ...c };
          }, {});
          return m.useMemo(() => ({ [`__scope${r.scopeName}`]: a }), [a]);
        };
      };
      return (t.scopeName = r.scopeName), t;
    }
    function Bt(e, r) {
      typeof e == "function" ? e(r) : e != null && (e.current = r);
    }
    function jr(...e) {
      return (r) => e.forEach((t) => Bt(t, r));
    }
    function De(...e) {
      return m.useCallback(jr(...e), e);
    }
    var $e = m.forwardRef((e, r) => {
      const { children: t, ...s } = e,
        n = m.Children.toArray(t),
        a = n.find(Yt);
      if (a) {
        const o = a.props.children,
          l = n.map((p) =>
            p === a
              ? m.Children.count(o) > 1
                ? m.Children.only(null)
                : m.isValidElement(o)
                ? o.props.children
                : null
              : p
          );
        return i.jsx(Xe, {
          ...s,
          ref: r,
          children: m.isValidElement(o) ? m.cloneElement(o, void 0, l) : null,
        });
      }
      return i.jsx(Xe, { ...s, ref: r, children: t });
    });
    $e.displayName = "Slot";
    var Xe = m.forwardRef((e, r) => {
      const { children: t, ...s } = e;
      if (m.isValidElement(t)) {
        const n = Zt(t);
        return m.cloneElement(t, { ...Xt(s, t.props), ref: r ? jr(r, n) : n });
      }
      return m.Children.count(t) > 1 ? m.Children.only(null) : null;
    });
    Xe.displayName = "SlotClone";
    var Qt = ({ children: e }) => i.jsx(i.Fragment, { children: e });
    function Yt(e) {
      return m.isValidElement(e) && e.type === Qt;
    }
    function Xt(e, r) {
      const t = { ...r };
      for (const s in r) {
        const n = e[s],
          a = r[s];
        /^on[A-Z]/.test(s)
          ? n && a
            ? (t[s] = (...o) => {
                a(...o), n(...o);
              })
            : n && (t[s] = n)
          : s === "style"
          ? (t[s] = { ...n, ...a })
          : s === "className" && (t[s] = [n, a].filter(Boolean).join(" "));
      }
      return { ...e, ...t };
    }
    function Zt(e) {
      var s, n;
      let r =
          (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
            ? void 0
            : s.get,
        t = r && "isReactWarning" in r && r.isReactWarning;
      return t
        ? e.ref
        : ((r =
            (n = Object.getOwnPropertyDescriptor(e, "ref")) == null
              ? void 0
              : n.get),
          (t = r && "isReactWarning" in r && r.isReactWarning),
          t ? e.props.ref : e.props.ref || e.ref);
    }
    function Jt(e) {
      const r = e + "CollectionProvider",
        [t, s] = Wt(r),
        [n, a] = t(r, { collectionRef: { current: null }, itemMap: new Map() }),
        o = (b) => {
          const { scope: f, children: y } = b,
            g = me.useRef(null),
            v = me.useRef(new Map()).current;
          return i.jsx(n, {
            scope: f,
            itemMap: v,
            collectionRef: g,
            children: y,
          });
        };
      o.displayName = r;
      const l = e + "CollectionSlot",
        p = me.forwardRef((b, f) => {
          const { scope: y, children: g } = b,
            v = a(l, y),
            x = De(f, v.collectionRef);
          return i.jsx($e, { ref: x, children: g });
        });
      p.displayName = l;
      const c = e + "CollectionItemSlot",
        u = "data-radix-collection-item",
        d = me.forwardRef((b, f) => {
          const { scope: y, children: g, ...v } = b,
            x = me.useRef(null),
            A = De(f, x),
            O = a(c, y);
          return (
            me.useEffect(
              () => (
                O.itemMap.set(x, { ref: x, ...v }),
                () => void O.itemMap.delete(x)
              )
            ),
            i.jsx($e, { [u]: "", ref: A, children: g })
          );
        });
      d.displayName = c;
      function h(b) {
        const f = a(e + "CollectionConsumer", b);
        return me.useCallback(() => {
          const y = f.collectionRef.current;
          if (!y) return [];
          const g = Array.from(y.querySelectorAll(`[${u}]`));
          return Array.from(f.itemMap.values()).sort(
            (v, x) => g.indexOf(v.ref.current) - g.indexOf(x.ref.current)
          );
        }, [f.collectionRef, f.itemMap]);
      }
      return [{ Provider: o, Slot: p, ItemSlot: d }, h, s];
    }
    function es(e, r = []) {
      let t = [];
      function s(a, o) {
        const l = m.createContext(o),
          p = t.length;
        t = [...t, o];
        function c(d) {
          const { scope: h, children: b, ...f } = d,
            y = (h == null ? void 0 : h[e][p]) || l,
            g = m.useMemo(() => f, Object.values(f));
          return i.jsx(y.Provider, { value: g, children: b });
        }
        function u(d, h) {
          const b = (h == null ? void 0 : h[e][p]) || l,
            f = m.useContext(b);
          if (f) return f;
          if (o !== void 0) return o;
          throw new Error(`\`${d}\` must be used within \`${a}\``);
        }
        return (c.displayName = a + "Provider"), [c, u];
      }
      const n = () => {
        const a = t.map((o) => m.createContext(o));
        return function (o) {
          const l = (o == null ? void 0 : o[e]) || a;
          return m.useMemo(
            () => ({ [`__scope${e}`]: { ...o, [e]: l } }),
            [o, l]
          );
        };
      };
      return (n.scopeName = e), [s, rs(n, ...r)];
    }
    function rs(...e) {
      const r = e[0];
      if (e.length === 1) return r;
      const t = () => {
        const s = e.map((n) => ({ useScope: n(), scopeName: n.scopeName }));
        return function (n) {
          const a = s.reduce((o, { useScope: l, scopeName: p }) => {
            const c = l(n)[`__scope${p}`];
            return { ...o, ...c };
          }, {});
          return m.useMemo(() => ({ [`__scope${r.scopeName}`]: a }), [a]);
        };
      };
      return (t.scopeName = r.scopeName), t;
    }
    var Ze =
        globalThis != null && globalThis.document
          ? m.useLayoutEffect
          : () => {},
      ts = yn.useId || (() => {}),
      ss = 0;
    function Nr(e) {
      const [r, t] = m.useState(ts());
      return (
        Ze(() => {
          e || t((s) => s ?? String(ss++));
        }, [e]),
        e || (r ? `radix-${r}` : "")
      );
    }
    var ns = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ],
      he = ns.reduce((e, r) => {
        const t = m.forwardRef((s, n) => {
          const { asChild: a, ...o } = s,
            l = a ? $e : r;
          return (
            typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
            i.jsx(l, { ...o, ref: n })
          );
        });
        return (t.displayName = `Primitive.${r}`), { ...e, [r]: t };
      }, {});
    function Je(e) {
      const r = m.useRef(e);
      return (
        m.useEffect(() => {
          r.current = e;
        }),
        m.useMemo(
          () =>
            (...t) => {
              var s;
              return (s = r.current) == null ? void 0 : s.call(r, ...t);
            },
          []
        )
      );
    }
    function kr({ prop: e, defaultProp: r, onChange: t = () => {} }) {
      const [s, n] = as({ defaultProp: r, onChange: t }),
        a = e !== void 0,
        o = a ? e : s,
        l = Je(t),
        p = m.useCallback(
          (c) => {
            if (a) {
              const u = typeof c == "function" ? c(e) : c;
              u !== e && l(u);
            } else n(c);
          },
          [a, e, n, l]
        );
      return [o, p];
    }
    function as({ defaultProp: e, onChange: r }) {
      const t = m.useState(e),
        [s] = t,
        n = m.useRef(s),
        a = Je(r);
      return (
        m.useEffect(() => {
          n.current !== s && (a(s), (n.current = s));
        }, [s, n, a]),
        t
      );
    }
    var os = m.createContext(void 0);
    function Or(e) {
      const r = m.useContext(os);
      return e || r || "ltr";
    }
    var er = "rovingFocusGroup.onEntryFocus",
      is = { bubbles: !1, cancelable: !0 },
      Fe = "RovingFocusGroup",
      [rr, Ar, ls] = Jt(Fe),
      [cs, Er] = es(Fe, [ls]),
      [ds, us] = cs(Fe),
      Rr = m.forwardRef((e, r) =>
        i.jsx(rr.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: i.jsx(rr.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: i.jsx(ms, { ...e, ref: r }),
          }),
        })
      );
    Rr.displayName = Fe;
    var ms = m.forwardRef((e, r) => {
        const {
            __scopeRovingFocusGroup: t,
            orientation: s,
            loop: n = !1,
            dir: a,
            currentTabStopId: o,
            defaultCurrentTabStopId: l,
            onCurrentTabStopIdChange: p,
            onEntryFocus: c,
            preventScrollOnEntryFocus: u = !1,
            ...d
          } = e,
          h = m.useRef(null),
          b = De(r, h),
          f = Or(a),
          [y = null, g] = kr({ prop: o, defaultProp: l, onChange: p }),
          [v, x] = m.useState(!1),
          A = Je(c),
          O = Ar(t),
          M = m.useRef(!1),
          [T, Q] = m.useState(0);
        return (
          m.useEffect(() => {
            const R = h.current;
            if (R)
              return (
                R.addEventListener(er, A), () => R.removeEventListener(er, A)
              );
          }, [A]),
          i.jsx(ds, {
            scope: t,
            orientation: s,
            dir: f,
            loop: n,
            currentTabStopId: y,
            onItemFocus: m.useCallback((R) => g(R), [g]),
            onItemShiftTab: m.useCallback(() => x(!0), []),
            onFocusableItemAdd: m.useCallback(() => Q((R) => R + 1), []),
            onFocusableItemRemove: m.useCallback(() => Q((R) => R - 1), []),
            children: i.jsx(he.div, {
              tabIndex: v || T === 0 ? -1 : 0,
              "data-orientation": s,
              ...d,
              ref: b,
              style: { outline: "none", ...e.style },
              onMouseDown: J(e.onMouseDown, () => {
                M.current = !0;
              }),
              onFocus: J(e.onFocus, (R) => {
                const te = !M.current;
                if (R.target === R.currentTarget && te && !v) {
                  const F = new CustomEvent(er, is);
                  if ((R.currentTarget.dispatchEvent(F), !F.defaultPrevented)) {
                    const Z = O().filter((G) => G.focusable),
                      k = Z.find((G) => G.active),
                      Ce = Z.find((G) => G.id === y),
                      Y = [k, Ce, ...Z]
                        .filter(Boolean)
                        .map((G) => G.ref.current);
                    Mr(Y, u);
                  }
                }
                M.current = !1;
              }),
              onBlur: J(e.onBlur, () => x(!1)),
            }),
          })
        );
      }),
      Sr = "RovingFocusGroupItem",
      _r = m.forwardRef((e, r) => {
        const {
            __scopeRovingFocusGroup: t,
            focusable: s = !0,
            active: n = !1,
            tabStopId: a,
            ...o
          } = e,
          l = Nr(),
          p = a || l,
          c = us(Sr, t),
          u = c.currentTabStopId === p,
          d = Ar(t),
          { onFocusableItemAdd: h, onFocusableItemRemove: b } = c;
        return (
          m.useEffect(() => {
            if (s) return h(), () => b();
          }, [s, h, b]),
          i.jsx(rr.ItemSlot, {
            scope: t,
            id: p,
            focusable: s,
            active: n,
            children: i.jsx(he.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...o,
              ref: r,
              onMouseDown: J(e.onMouseDown, (f) => {
                s ? c.onItemFocus(p) : f.preventDefault();
              }),
              onFocus: J(e.onFocus, () => c.onItemFocus(p)),
              onKeyDown: J(e.onKeyDown, (f) => {
                if (f.key === "Tab" && f.shiftKey) {
                  c.onItemShiftTab();
                  return;
                }
                if (f.target !== f.currentTarget) return;
                const y = fs(f, c.orientation, c.dir);
                if (y !== void 0) {
                  if (f.metaKey || f.ctrlKey || f.altKey || f.shiftKey) return;
                  f.preventDefault();
                  let g = d()
                    .filter((v) => v.focusable)
                    .map((v) => v.ref.current);
                  if (y === "last") g.reverse();
                  else if (y === "prev" || y === "next") {
                    y === "prev" && g.reverse();
                    const v = g.indexOf(f.currentTarget);
                    g = c.loop ? gs(g, v + 1) : g.slice(v + 1);
                  }
                  setTimeout(() => Mr(g));
                }
              }),
            }),
          })
        );
      });
    _r.displayName = Sr;
    var ps = {
      ArrowLeft: "prev",
      ArrowUp: "prev",
      ArrowRight: "next",
      ArrowDown: "next",
      PageUp: "first",
      Home: "first",
      PageDown: "last",
      End: "last",
    };
    function hs(e, r) {
      return r !== "rtl"
        ? e
        : e === "ArrowLeft"
        ? "ArrowRight"
        : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
    }
    function fs(e, r, t) {
      const s = hs(e.key, t);
      if (
        !(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) &&
        !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s))
      )
        return ps[s];
    }
    function Mr(e, r = !1) {
      const t = document.activeElement;
      for (const s of e)
        if (
          s === t ||
          (s.focus({ preventScroll: r }), document.activeElement !== t)
        )
          return;
    }
    function gs(e, r) {
      return e.map((t, s) => e[(r + s) % e.length]);
    }
    var bs = Rr,
      ys = _r;
    function vs(e, r) {
      return m.useReducer((t, s) => r[t][s] ?? t, e);
    }
    var Tr = (e) => {
      const { present: r, children: t } = e,
        s = xs(r),
        n =
          typeof t == "function"
            ? t({ present: s.isPresent })
            : m.Children.only(t),
        a = De(s.ref, ws(n));
      return typeof t == "function" || s.isPresent
        ? m.cloneElement(n, { ref: a })
        : null;
    };
    Tr.displayName = "Presence";
    function xs(e) {
      const [r, t] = m.useState(),
        s = m.useRef({}),
        n = m.useRef(e),
        a = m.useRef("none"),
        o = e ? "mounted" : "unmounted",
        [l, p] = vs(o, {
          mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
          unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
          unmounted: { MOUNT: "mounted" },
        });
      return (
        m.useEffect(() => {
          const c = He(s.current);
          a.current = l === "mounted" ? c : "none";
        }, [l]),
        Ze(() => {
          const c = s.current,
            u = n.current;
          if (u !== e) {
            const d = a.current,
              h = He(c);
            e
              ? p("MOUNT")
              : h === "none" || (c == null ? void 0 : c.display) === "none"
              ? p("UNMOUNT")
              : p(u && d !== h ? "ANIMATION_OUT" : "UNMOUNT"),
              (n.current = e);
          }
        }, [e, p]),
        Ze(() => {
          if (r) {
            let c;
            const u = r.ownerDocument.defaultView ?? window,
              d = (b) => {
                const f = He(s.current).includes(b.animationName);
                if (b.target === r && f && (p("ANIMATION_END"), !n.current)) {
                  const y = r.style.animationFillMode;
                  (r.style.animationFillMode = "forwards"),
                    (c = u.setTimeout(() => {
                      r.style.animationFillMode === "forwards" &&
                        (r.style.animationFillMode = y);
                    }));
                }
              },
              h = (b) => {
                b.target === r && (a.current = He(s.current));
              };
            return (
              r.addEventListener("animationstart", h),
              r.addEventListener("animationcancel", d),
              r.addEventListener("animationend", d),
              () => {
                u.clearTimeout(c),
                  r.removeEventListener("animationstart", h),
                  r.removeEventListener("animationcancel", d),
                  r.removeEventListener("animationend", d);
              }
            );
          } else p("ANIMATION_END");
        }, [r, p]),
        {
          isPresent: ["mounted", "unmountSuspended"].includes(l),
          ref: m.useCallback((c) => {
            c && (s.current = getComputedStyle(c)), t(c);
          }, []),
        }
      );
    }
    function He(e) {
      return (e == null ? void 0 : e.animationName) || "none";
    }
    function ws(e) {
      var s, n;
      let r =
          (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
            ? void 0
            : s.get,
        t = r && "isReactWarning" in r && r.isReactWarning;
      return t
        ? e.ref
        : ((r =
            (n = Object.getOwnPropertyDescriptor(e, "ref")) == null
              ? void 0
              : n.get),
          (t = r && "isReactWarning" in r && r.isReactWarning),
          t ? e.props.ref : e.props.ref || e.ref);
    }
    var tr = "Tabs",
      [Cs, aa] = qt(tr, [Er]),
      Pr = Er(),
      [js, sr] = Cs(tr),
      Ir = m.forwardRef((e, r) => {
        const {
            __scopeTabs: t,
            value: s,
            onValueChange: n,
            defaultValue: a,
            orientation: o = "horizontal",
            dir: l,
            activationMode: p = "automatic",
            ...c
          } = e,
          u = Or(l),
          [d, h] = kr({ prop: s, onChange: n, defaultProp: a });
        return i.jsx(js, {
          scope: t,
          baseId: Nr(),
          value: d,
          onValueChange: h,
          orientation: o,
          dir: u,
          activationMode: p,
          children: i.jsx(he.div, {
            dir: u,
            "data-orientation": o,
            ...c,
            ref: r,
          }),
        });
      });
    Ir.displayName = tr;
    var Vr = "TabsList",
      zr = m.forwardRef((e, r) => {
        const { __scopeTabs: t, loop: s = !0, ...n } = e,
          a = sr(Vr, t),
          o = Pr(t);
        return i.jsx(bs, {
          asChild: !0,
          ...o,
          orientation: a.orientation,
          dir: a.dir,
          loop: s,
          children: i.jsx(he.div, {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...n,
            ref: r,
          }),
        });
      });
    zr.displayName = Vr;
    var Dr = "TabsTrigger",
      $r = m.forwardRef((e, r) => {
        const { __scopeTabs: t, value: s, disabled: n = !1, ...a } = e,
          o = sr(Dr, t),
          l = Pr(t),
          p = Lr(o.baseId, s),
          c = Ur(o.baseId, s),
          u = s === o.value;
        return i.jsx(ys, {
          asChild: !0,
          ...l,
          focusable: !n,
          active: u,
          children: i.jsx(he.button, {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": c,
            "data-state": u ? "active" : "inactive",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            id: p,
            ...a,
            ref: r,
            onMouseDown: J(e.onMouseDown, (d) => {
              !n && d.button === 0 && d.ctrlKey === !1
                ? o.onValueChange(s)
                : d.preventDefault();
            }),
            onKeyDown: J(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && o.onValueChange(s);
            }),
            onFocus: J(e.onFocus, () => {
              const d = o.activationMode !== "manual";
              !u && !n && d && o.onValueChange(s);
            }),
          }),
        });
      });
    $r.displayName = Dr;
    var Fr = "TabsContent",
      Hr = m.forwardRef((e, r) => {
        const {
            __scopeTabs: t,
            value: s,
            forceMount: n,
            children: a,
            ...o
          } = e,
          l = sr(Fr, t),
          p = Lr(l.baseId, s),
          c = Ur(l.baseId, s),
          u = s === l.value,
          d = m.useRef(u);
        return (
          m.useEffect(() => {
            const h = requestAnimationFrame(() => (d.current = !1));
            return () => cancelAnimationFrame(h);
          }, []),
          i.jsx(Tr, {
            present: n || u,
            children: ({ present: h }) =>
              i.jsx(he.div, {
                "data-state": u ? "active" : "inactive",
                "data-orientation": l.orientation,
                role: "tabpanel",
                "aria-labelledby": p,
                hidden: !h,
                id: c,
                tabIndex: 0,
                ...o,
                ref: r,
                style: {
                  ...e.style,
                  animationDuration: d.current ? "0s" : void 0,
                },
                children: h && a,
              }),
          })
        );
      });
    Hr.displayName = Fr;
    function Lr(e, r) {
      return `${e}-trigger-${r}`;
    }
    function Ur(e, r) {
      return `${e}-content-${r}`;
    }
    var Ns = Ir,
      qr = zr,
      Gr = $r,
      Wr = Hr;
    function Kr(e) {
      var r,
        t,
        s = "";
      if (typeof e == "string" || typeof e == "number") s += e;
      else if (typeof e == "object")
        if (Array.isArray(e)) {
          var n = e.length;
          for (r = 0; r < n; r++)
            e[r] && (t = Kr(e[r])) && (s && (s += " "), (s += t));
        } else for (t in e) e[t] && (s && (s += " "), (s += t));
      return s;
    }
    function ks() {
      for (var e, r, t = 0, s = "", n = arguments.length; t < n; t++)
        (e = arguments[t]) && (r = Kr(e)) && (s && (s += " "), (s += r));
      return s;
    }
    const nr = "-",
      Os = (e) => {
        const r = Es(e),
          { conflictingClassGroups: t, conflictingClassGroupModifiers: s } = e;
        return {
          getClassGroupId: (n) => {
            const a = n.split(nr);
            return (
              a[0] === "" && a.length !== 1 && a.shift(), Br(a, r) || As(n)
            );
          },
          getConflictingClassGroupIds: (n, a) => {
            const o = t[n] || [];
            return a && s[n] ? [...o, ...s[n]] : o;
          },
        };
      },
      Br = (e, r) => {
        var o;
        if (e.length === 0) return r.classGroupId;
        const t = e[0],
          s = r.nextPart.get(t),
          n = s ? Br(e.slice(1), s) : void 0;
        if (n) return n;
        if (r.validators.length === 0) return;
        const a = e.join(nr);
        return (o = r.validators.find(({ validator: l }) => l(a))) == null
          ? void 0
          : o.classGroupId;
      },
      Qr = /^\[(.+)\]$/,
      As = (e) => {
        if (Qr.test(e)) {
          const r = Qr.exec(e)[1],
            t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
          if (t) return "arbitrary.." + t;
        }
      },
      Es = (e) => {
        const { theme: r, prefix: t } = e,
          s = { nextPart: new Map(), validators: [] };
        return (
          Ss(Object.entries(e.classGroups), t).forEach(([n, a]) => {
            ar(a, s, n, r);
          }),
          s
        );
      },
      ar = (e, r, t, s) => {
        e.forEach((n) => {
          if (typeof n == "string") {
            const a = n === "" ? r : Yr(r, n);
            a.classGroupId = t;
            return;
          }
          if (typeof n == "function") {
            if (Rs(n)) {
              ar(n(s), r, t, s);
              return;
            }
            r.validators.push({ validator: n, classGroupId: t });
            return;
          }
          Object.entries(n).forEach(([a, o]) => {
            ar(o, Yr(r, a), t, s);
          });
        });
      },
      Yr = (e, r) => {
        let t = e;
        return (
          r.split(nr).forEach((s) => {
            t.nextPart.has(s) ||
              t.nextPart.set(s, { nextPart: new Map(), validators: [] }),
              (t = t.nextPart.get(s));
          }),
          t
        );
      },
      Rs = (e) => e.isThemeGetter,
      Ss = (e, r) =>
        r
          ? e.map(([t, s]) => {
              const n = s.map((a) =>
                typeof a == "string"
                  ? r + a
                  : typeof a == "object"
                  ? Object.fromEntries(
                      Object.entries(a).map(([o, l]) => [r + o, l])
                    )
                  : a
              );
              return [t, n];
            })
          : e,
      _s = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let r = 0,
          t = new Map(),
          s = new Map();
        const n = (a, o) => {
          t.set(a, o), r++, r > e && ((r = 0), (s = t), (t = new Map()));
        };
        return {
          get(a) {
            let o = t.get(a);
            if (o !== void 0) return o;
            if ((o = s.get(a)) !== void 0) return n(a, o), o;
          },
          set(a, o) {
            t.has(a) ? t.set(a, o) : n(a, o);
          },
        };
      },
      Xr = "!",
      Ms = (e) => {
        const { separator: r, experimentalParseClassName: t } = e,
          s = r.length === 1,
          n = r[0],
          a = r.length,
          o = (l) => {
            const p = [];
            let c = 0,
              u = 0,
              d;
            for (let g = 0; g < l.length; g++) {
              let v = l[g];
              if (c === 0) {
                if (v === n && (s || l.slice(g, g + a) === r)) {
                  p.push(l.slice(u, g)), (u = g + a);
                  continue;
                }
                if (v === "/") {
                  d = g;
                  continue;
                }
              }
              v === "[" ? c++ : v === "]" && c--;
            }
            const h = p.length === 0 ? l : l.substring(u),
              b = h.startsWith(Xr),
              f = b ? h.substring(1) : h,
              y = d && d > u ? d - u : void 0;
            return {
              modifiers: p,
              hasImportantModifier: b,
              baseClassName: f,
              maybePostfixModifierPosition: y,
            };
          };
        return t ? (l) => t({ className: l, parseClassName: o }) : o;
      },
      Ts = (e) => {
        if (e.length <= 1) return e;
        const r = [];
        let t = [];
        return (
          e.forEach((s) => {
            s[0] === "[" ? (r.push(...t.sort(), s), (t = [])) : t.push(s);
          }),
          r.push(...t.sort()),
          r
        );
      },
      Ps = (e) => ({ cache: _s(e.cacheSize), parseClassName: Ms(e), ...Os(e) }),
      Is = /\s+/,
      Vs = (e, r) => {
        const {
            parseClassName: t,
            getClassGroupId: s,
            getConflictingClassGroupIds: n,
          } = r,
          a = [],
          o = e.trim().split(Is);
        let l = "";
        for (let p = o.length - 1; p >= 0; p -= 1) {
          const c = o[p],
            {
              modifiers: u,
              hasImportantModifier: d,
              baseClassName: h,
              maybePostfixModifierPosition: b,
            } = t(c);
          let f = !!b,
            y = s(f ? h.substring(0, b) : h);
          if (!y) {
            if (!f) {
              l = c + (l.length > 0 ? " " + l : l);
              continue;
            }
            if (((y = s(h)), !y)) {
              l = c + (l.length > 0 ? " " + l : l);
              continue;
            }
            f = !1;
          }
          const g = Ts(u).join(":"),
            v = d ? g + Xr : g,
            x = v + y;
          if (a.includes(x)) continue;
          a.push(x);
          const A = n(y, f);
          for (let O = 0; O < A.length; ++O) {
            const M = A[O];
            a.push(v + M);
          }
          l = c + (l.length > 0 ? " " + l : l);
        }
        return l;
      };
    function zs() {
      let e = 0,
        r,
        t,
        s = "";
      for (; e < arguments.length; )
        (r = arguments[e++]) && (t = Zr(r)) && (s && (s += " "), (s += t));
      return s;
    }
    const Zr = (e) => {
      if (typeof e == "string") return e;
      let r,
        t = "";
      for (let s = 0; s < e.length; s++)
        e[s] && (r = Zr(e[s])) && (t && (t += " "), (t += r));
      return t;
    };
    function Ds(e, ...r) {
      let t,
        s,
        n,
        a = o;
      function o(p) {
        const c = r.reduce((u, d) => d(u), e());
        return (t = Ps(c)), (s = t.cache.get), (n = t.cache.set), (a = l), l(p);
      }
      function l(p) {
        const c = s(p);
        if (c) return c;
        const u = Vs(p, t);
        return n(p, u), u;
      }
      return function () {
        return a(zs.apply(null, arguments));
      };
    }
    const E = (e) => {
        const r = (t) => t[e] || [];
        return (r.isThemeGetter = !0), r;
      },
      Jr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
      $s = /^\d+\/\d+$/,
      Fs = new Set(["px", "full", "screen"]),
      Hs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      Ls =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      Us = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
      qs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      Gs =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      ee = (e) => fe(e) || Fs.has(e) || $s.test(e),
      ne = (e) => ge(e, "length", Js),
      fe = (e) => !!e && !Number.isNaN(Number(e)),
      or = (e) => ge(e, "number", fe),
      Ae = (e) => !!e && Number.isInteger(Number(e)),
      Ws = (e) => e.endsWith("%") && fe(e.slice(0, -1)),
      j = (e) => Jr.test(e),
      ae = (e) => Hs.test(e),
      Ks = new Set(["length", "size", "percentage"]),
      Bs = (e) => ge(e, Ks, et),
      Qs = (e) => ge(e, "position", et),
      Ys = new Set(["image", "url"]),
      Xs = (e) => ge(e, Ys, rn),
      Zs = (e) => ge(e, "", en),
      Ee = () => !0,
      ge = (e, r, t) => {
        const s = Jr.exec(e);
        return s
          ? s[1]
            ? typeof r == "string"
              ? s[1] === r
              : r.has(s[1])
            : t(s[2])
          : !1;
      },
      Js = (e) => Ls.test(e) && !Us.test(e),
      et = () => !1,
      en = (e) => qs.test(e),
      rn = (e) => Gs.test(e),
      tn = () => {
        const e = E("colors"),
          r = E("spacing"),
          t = E("blur"),
          s = E("brightness"),
          n = E("borderColor"),
          a = E("borderRadius"),
          o = E("borderSpacing"),
          l = E("borderWidth"),
          p = E("contrast"),
          c = E("grayscale"),
          u = E("hueRotate"),
          d = E("invert"),
          h = E("gap"),
          b = E("gradientColorStops"),
          f = E("gradientColorStopPositions"),
          y = E("inset"),
          g = E("margin"),
          v = E("opacity"),
          x = E("padding"),
          A = E("saturate"),
          O = E("scale"),
          M = E("sepia"),
          T = E("skew"),
          Q = E("space"),
          R = E("translate"),
          te = () => ["auto", "contain", "none"],
          F = () => ["auto", "hidden", "clip", "visible", "scroll"],
          Z = () => ["auto", j, r],
          k = () => [j, r],
          Ce = () => ["", ee, ne],
          Y = () => ["auto", fe, j],
          G = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          je = () => ["solid", "dashed", "dotted", "double", "none"],
          qe = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          S = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          H = () => ["", "0", j],
          ue = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          X = () => [fe, j];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [Ee],
            spacing: [ee, ne],
            blur: ["none", "", ae, j],
            brightness: X(),
            borderColor: [e],
            borderRadius: ["none", "", "full", ae, j],
            borderSpacing: k(),
            borderWidth: Ce(),
            contrast: X(),
            grayscale: H(),
            hueRotate: X(),
            invert: H(),
            gap: k(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Ws, ne],
            inset: Z(),
            margin: Z(),
            opacity: X(),
            padding: k(),
            saturate: X(),
            scale: X(),
            sepia: H(),
            skew: X(),
            space: k(),
            translate: k(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", j] }],
            container: ["container"],
            columns: [{ columns: [ae] }],
            "break-after": [{ "break-after": ue() }],
            "break-before": [{ "break-before": ue() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...G(), j] }],
            overflow: [{ overflow: F() }],
            "overflow-x": [{ "overflow-x": F() }],
            "overflow-y": [{ "overflow-y": F() }],
            overscroll: [{ overscroll: te() }],
            "overscroll-x": [{ "overscroll-x": te() }],
            "overscroll-y": [{ "overscroll-y": te() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [y] }],
            "inset-x": [{ "inset-x": [y] }],
            "inset-y": [{ "inset-y": [y] }],
            start: [{ start: [y] }],
            end: [{ end: [y] }],
            top: [{ top: [y] }],
            right: [{ right: [y] }],
            bottom: [{ bottom: [y] }],
            left: [{ left: [y] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", Ae, j] }],
            basis: [{ basis: Z() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", j] }],
            grow: [{ grow: H() }],
            shrink: [{ shrink: H() }],
            order: [{ order: ["first", "last", "none", Ae, j] }],
            "grid-cols": [{ "grid-cols": [Ee] }],
            "col-start-end": [{ col: ["auto", { span: ["full", Ae, j] }, j] }],
            "col-start": [{ "col-start": Y() }],
            "col-end": [{ "col-end": Y() }],
            "grid-rows": [{ "grid-rows": [Ee] }],
            "row-start-end": [{ row: ["auto", { span: [Ae, j] }, j] }],
            "row-start": [{ "row-start": Y() }],
            "row-end": [{ "row-end": Y() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
            gap: [{ gap: [h] }],
            "gap-x": [{ "gap-x": [h] }],
            "gap-y": [{ "gap-y": [h] }],
            "justify-content": [{ justify: ["normal", ...S()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...S(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...S(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [x] }],
            px: [{ px: [x] }],
            py: [{ py: [x] }],
            ps: [{ ps: [x] }],
            pe: [{ pe: [x] }],
            pt: [{ pt: [x] }],
            pr: [{ pr: [x] }],
            pb: [{ pb: [x] }],
            pl: [{ pl: [x] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [Q] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [Q] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", j, r] },
            ],
            "min-w": [{ "min-w": [j, r, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  j,
                  r,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [ae] },
                  ae,
                ],
              },
            ],
            h: [
              { h: [j, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [j, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [j, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [j, r, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", ae, ne] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  or,
                ],
              },
            ],
            "font-family": [{ font: [Ee] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  j,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", fe, or] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  ee,
                  j,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", j] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [v] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [v] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...je(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", ee, ne] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", ee, j] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: k() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  j,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", j] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [v] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...G(), Qs] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", Bs] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  Xs,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [f] }],
            "gradient-via-pos": [{ via: [f] }],
            "gradient-to-pos": [{ to: [f] }],
            "gradient-from": [{ from: [b] }],
            "gradient-via": [{ via: [b] }],
            "gradient-to": [{ to: [b] }],
            rounded: [{ rounded: [a] }],
            "rounded-s": [{ "rounded-s": [a] }],
            "rounded-e": [{ "rounded-e": [a] }],
            "rounded-t": [{ "rounded-t": [a] }],
            "rounded-r": [{ "rounded-r": [a] }],
            "rounded-b": [{ "rounded-b": [a] }],
            "rounded-l": [{ "rounded-l": [a] }],
            "rounded-ss": [{ "rounded-ss": [a] }],
            "rounded-se": [{ "rounded-se": [a] }],
            "rounded-ee": [{ "rounded-ee": [a] }],
            "rounded-es": [{ "rounded-es": [a] }],
            "rounded-tl": [{ "rounded-tl": [a] }],
            "rounded-tr": [{ "rounded-tr": [a] }],
            "rounded-br": [{ "rounded-br": [a] }],
            "rounded-bl": [{ "rounded-bl": [a] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [v] }],
            "border-style": [{ border: [...je(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [v] }],
            "divide-style": [{ divide: je() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-s": [{ "border-s": [n] }],
            "border-color-e": [{ "border-e": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...je()] }],
            "outline-offset": [{ "outline-offset": [ee, j] }],
            "outline-w": [{ outline: [ee, ne] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: Ce() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [v] }],
            "ring-offset-w": [{ "ring-offset": [ee, ne] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", ae, Zs] }],
            "shadow-color": [{ shadow: [Ee] }],
            opacity: [{ opacity: [v] }],
            "mix-blend": [
              { "mix-blend": [...qe(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": qe() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [s] }],
            contrast: [{ contrast: [p] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", ae, j] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [A] }],
            sepia: [{ sepia: [M] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [t] }],
            "backdrop-brightness": [{ "backdrop-brightness": [s] }],
            "backdrop-contrast": [{ "backdrop-contrast": [p] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [v] }],
            "backdrop-saturate": [{ "backdrop-saturate": [A] }],
            "backdrop-sepia": [{ "backdrop-sepia": [M] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  j,
                ],
              },
            ],
            duration: [{ duration: X() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
            delay: [{ delay: X() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", j] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [O] }],
            "scale-x": [{ "scale-x": [O] }],
            "scale-y": [{ "scale-y": [O] }],
            rotate: [{ rotate: [Ae, j] }],
            "translate-x": [{ "translate-x": [R] }],
            "translate-y": [{ "translate-y": [R] }],
            "skew-x": [{ "skew-x": [T] }],
            "skew-y": [{ "skew-y": [T] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  j,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  j,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": k() }],
            "scroll-mx": [{ "scroll-mx": k() }],
            "scroll-my": [{ "scroll-my": k() }],
            "scroll-ms": [{ "scroll-ms": k() }],
            "scroll-me": [{ "scroll-me": k() }],
            "scroll-mt": [{ "scroll-mt": k() }],
            "scroll-mr": [{ "scroll-mr": k() }],
            "scroll-mb": [{ "scroll-mb": k() }],
            "scroll-ml": [{ "scroll-ml": k() }],
            "scroll-p": [{ "scroll-p": k() }],
            "scroll-px": [{ "scroll-px": k() }],
            "scroll-py": [{ "scroll-py": k() }],
            "scroll-ps": [{ "scroll-ps": k() }],
            "scroll-pe": [{ "scroll-pe": k() }],
            "scroll-pt": [{ "scroll-pt": k() }],
            "scroll-pr": [{ "scroll-pr": k() }],
            "scroll-pb": [{ "scroll-pb": k() }],
            "scroll-pl": [{ "scroll-pl": k() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", j] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [ee, ne, or] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      },
      sn = Ds(tn);
    function ir(...e) {
      return sn(ks(e));
    }
    const rt = Ns,
      lr = m.forwardRef(({ className: e, ...r }, t) =>
        i.jsx(qr, {
          className: ir(
            "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
            e
          ),
          ref: t,
          ...r,
        })
      );
    lr.displayName = qr.displayName;
    const be = m.forwardRef(({ className: e, ...r }, t) =>
      i.jsx(Gr, {
        className: ir(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
          e
        ),
        ref: t,
        ...r,
      })
    );
    be.displayName = Gr.displayName;
    const ye = m.forwardRef(({ className: e, ...r }, t) =>
      i.jsx(Wr, {
        className: ir(
          "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          e
        ),
        ref: t,
        ...r,
      })
    );
    ye.displayName = Wr.displayName;
    const tt = (e, r, t) => {
        if (e && "reportValidity" in e) {
          const s = pr(t, r);
          e.setCustomValidity((s && s.message) || ""), e.reportValidity();
        }
      },
      st = (e, r) => {
        for (const t in r.fields) {
          const s = r.fields[t];
          s && s.ref && "reportValidity" in s.ref
            ? tt(s.ref, t, e)
            : s.refs && s.refs.forEach((n) => tt(n, t, e));
        }
      },
      nn = (e, r) => {
        r.shouldUseNativeValidation && st(e, r);
        const t = {};
        for (const s in e) {
          const n = pr(r.fields, s),
            a = Object.assign(e[s] || {}, { ref: n && n.ref });
          if (an(r.names || Object.keys(e), s)) {
            const o = Object.assign({}, pr(t, s));
            hr(o, "root", a), hr(t, s, o);
          } else hr(t, s, a);
        }
        return t;
      },
      an = (e, r) => e.some((t) => t.startsWith(r + "."));
    var on = function (e, r) {
        for (var t = {}; e.length; ) {
          var s = e[0],
            n = s.code,
            a = s.message,
            o = s.path.join(".");
          if (!t[o])
            if ("unionErrors" in s) {
              var l = s.unionErrors[0].errors[0];
              t[o] = { message: l.message, type: l.code };
            } else t[o] = { message: a, type: n };
          if (
            ("unionErrors" in s &&
              s.unionErrors.forEach(function (u) {
                return u.errors.forEach(function (d) {
                  return e.push(d);
                });
              }),
            r)
          ) {
            var p = t[o].types,
              c = p && p[s.code];
            t[o] = Dn(o, r, t, n, c ? [].concat(c, s.message) : s.message);
          }
          e.shift();
        }
        return t;
      },
      Le = function (e, r, t) {
        return (
          t === void 0 && (t = {}),
          function (s, n, a) {
            try {
              return Promise.resolve(
                (function (o, l) {
                  try {
                    var p = Promise.resolve(
                      e[t.mode === "sync" ? "parse" : "parseAsync"](s, r)
                    ).then(function (c) {
                      return (
                        a.shouldUseNativeValidation && st({}, a),
                        { errors: {}, values: t.raw ? s : c }
                      );
                    });
                  } catch (c) {
                    return l(c);
                  }
                  return p && p.then ? p.then(void 0, l) : p;
                })(0, function (o) {
                  if (
                    (function (l) {
                      return Array.isArray(l == null ? void 0 : l.errors);
                    })(o)
                  )
                    return {
                      values: {},
                      errors: nn(
                        on(
                          o.errors,
                          !a.shouldUseNativeValidation &&
                            a.criteriaMode === "all"
                        ),
                        a
                      ),
                    };
                  throw o;
                })
              );
            } catch (o) {
              return Promise.reject(o);
            }
          }
        );
      };
    const Re = { [_.THORChain]: "THORName", [_.Maya]: "MAYAName" },
      ln = { [_.Maya]: 0.2, [_.THORChain]: 0.02 },
      nt = ({ txHash: e, onSuccess: r }) => {
        const { transactions: t } = vn(),
          s = m.useRef(r),
          n = m.useMemo(() => {
            if (e) return t.find((a) => a.hash === e);
          }, [e, t]);
        return (
          m.useEffect(() => {
            var a, o;
            ((n == null ? void 0 : n.status) === "mined" ||
              ((a = n == null ? void 0 : n.details) == null
                ? void 0
                : a.status) === "success") &&
              ((o = s.current) == null || o.call(s, n));
          }, [n]),
          {
            tx: n,
            status: n == null ? void 0 : n.status,
            isPending:
              (n == null ? void 0 : n.status) === "pending" ||
              (n == null ? void 0 : n.status) === "notStarted",
            isFinished:
              (n == null ? void 0 : n.status) === "mined" ||
              (n == null ? void 0 : n.status) === "refund" ||
              (n == null ? void 0 : n.status) === "error",
            hasError: (n == null ? void 0 : n.status) === "error",
          }
        );
      },
      cn = ({ nsChain: e, onSuccess: r }) => {
        const t = Ot(),
          { getWalletAddress: s } = Ne(),
          {
            mutate: n,
            isPending: a,
            data: o,
          } = Cr({
            onError: (p) => {
              console.error("Save preferred asset error", p);
            },
            mutationFn: async ({
              name: p,
              chain: c,
              assetValue: u,
              payoutAddress: d,
            }) => {
              const {
                mayachain: h,
                thorchain: b,
                getAddress: f,
              } = await (
                await ke(
                  () =>
                    import("./assets/index-POi8GhpC.js")
                      .then(async (v) => (await v.__tla, v))
                      .then((v) => v.hc),
                  __vite__mapDeps([0, 1])
                )
              ).getSwapKitClient();
              if (!(u && d)) return;
              const y = xn({
                  name: p,
                  chain: u.chain,
                  payout: d,
                  asset: u.toString(),
                  owner: f(c),
                }),
                g = await (c === _.Maya ? h.deposit : b.deposit)({
                  assetValue: $.from({ chain: e }),
                  recipient: "",
                  memo: y,
                });
              return (
                t(
                  At({
                    txid: g,
                    id: Dt(),
                    from: s(u.chain),
                    inChain: e,
                    type: Et.TC_DEPOSIT,
                    label: `Set preferred asset - ${
                      u == null ? void 0 : u.ticker
                    }`,
                    timestamp: new Date(),
                  })
                ),
                g
              );
            },
          }),
          { isPending: l } = nt({
            txHash: o,
            onSuccess: () => {
              r == null || r(), Ge("Preferred asset saved.");
            },
          });
        return { savePreferredAsset: n, isPending: l || a };
      },
      dn = P.object({
        payoutAddress: P.string().min(1, {
          message: "Payout address is required",
        }),
        chain: P.enum([_.Maya, _.THORChain]),
        preferredAsset: P.instanceof($).nullable(),
      }),
      un = ({ nsName: e, nsChain: r = _.THORChain }) => {
        var A;
        const { getWalletAddress: t, wallet: s } = Ne(),
          { data: n, refetch: a, isPending: o } = ra({ name: e, chain: r }),
          l = Gn(),
          { savePreferredAsset: p, isPending: c } = cn({
            nsChain: r,
            onSuccess: a,
          }),
          u = n == null ? void 0 : n.preferredAsset,
          d = $.from({ chain: r, value: ln[r] }),
          h = (A = Un($.from({ chain: r }), s)) == null ? void 0 : A.lt(d),
          b = m.useCallback(
            (O) => {
              var M, T;
              return (
                ((T =
                  (M = n == null ? void 0 : n.aliases) == null
                    ? void 0
                    : M.find((Q) => Q.chain === O)) == null
                  ? void 0
                  : T.address) || ""
              );
            },
            [n]
          ),
          f = Qe({
            mode: "onChange",
            reValidateMode: "onChange",
            resolver: Le(dn),
            defaultValues: {
              chain: r,
              preferredAsset: $.from({ chain: r }),
              payoutAddress: t(r) || "",
            },
          }),
          y = f.watch("payoutAddress"),
          g = f.watch("preferredAsset"),
          v = !!u && g.eq(u) && y === b(g == null ? void 0 : g.chain),
          x = f.handleSubmit(
            async ({ preferredAsset: O, chain: M, payoutAddress: T }) => {
              const { getAddressValidator: Q } = await ke(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (R) => (await R.__tla, R))
                    .then((R) => R.hb),
                __vite__mapDeps([0, 1])
              );
              if (!(await Q())({ chain: O.chain, address: T })) {
                f.setError("payoutAddress", {
                  message: C("views.thorname.invalidAddress"),
                });
                return;
              }
              p({ name: e, assetValue: O, chain: M, payoutAddress: T });
            }
          );
        return (
          m.useEffect(() => {
            u &&
              (f.setValue("preferredAsset", u),
              f.setValue("payoutAddress", b(u.chain)));
          }, [u, f, b]),
          i.jsxs(N, {
            col: !0,
            className: "gap-4",
            children: [
              i.jsxs(N, {
                col: !0,
                children: [
                  i.jsx(br, { label: "Payout address" }),
                  i.jsxs(N, {
                    row: !0,
                    className: "w-full gap-x-4",
                    children: [
                      i.jsx(pe, {
                        control: f.control,
                        name: "payoutAddress",
                        render: ({
                          field: { onChange: O, value: M },
                          fieldState: { error: T },
                        }) =>
                          i.jsx(We, {
                            autoFocus: !0,
                            stretch: !0,
                            border: "rounded",
                            className: "!text-md !p-1.5 border pt-5",
                            containerClassName:
                              "bg-light-gray-light dark:bg-dark-gray-light !bg-opacity-80",
                            error: T == null ? void 0 : T.message,
                            onChange: O,
                            placeholder: "Recipient address",
                            value: M,
                          }),
                      }),
                      i.jsx(pe, {
                        control: f.control,
                        name: "preferredAsset",
                        render: ({ field: { onChange: O, value: M } }) =>
                          i.jsx(Ln, {
                            showAssetType: !0,
                            assets: l,
                            className: "mt-0.5",
                            onSelect: O,
                            selected: M,
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx(se, {
                stretch: !0,
                disabled: c || h || v,
                loading: c || o,
                onClick: x,
                size: "sm",
                variant: "secondary",
                children: "Save",
              }),
            ],
          })
        );
      },
      at = { entries: [], expire: "0", owner: "" },
      ot = async (e, r) => {
        if (e === _.THORChain) {
          const t = await Ft.getTHORNameDetails(r);
          return { name: r, details: t || at };
        }
        if (e === _.Maya)
          try {
            const t = await Ft.mayachainMidgard.getNameDetails(r);
            return { name: r, details: t || at };
          } catch (t) {
            throw (console.error(t), t);
          }
        throw new Error("Unsupported chain");
      },
      it = ({ name: e, chain: r }) =>
        Vt({
          queryKey: ["ns", "details", r, e],
          queryFn: e ? async () => ot(r, e) : wn,
          placeholderData: e ? Cn : void 0,
        }),
      mn = ({ names: e, chain: r }) =>
        Ut({
          queries: e.map((t) => ({
            queryKey: ["ns", "details", r, t],
            queryFn: async () => ot(r, t),
            enabled: !!t,
          })),
          combine: (t) => ({ data: t.map((s) => s.data).filter((s) => !!s) }),
        }),
      pn = ({ editName: e, nsChain: r }) => {
        const { data: t } = ta({ chain: r }),
          { data: s } = jn(),
          { data: n } = mn({ names: t || [], chain: r });
        return t != null && t.length
          ? i.jsxs(N, {
              col: !0,
              className: "pt-8 w-full",
              children: [
                i.jsx(K, {
                  className: "pb-4",
                  textStyle: "h5",
                  children: "Registered names",
                }),
                i.jsx(Nn, {
                  secondary: !0,
                  maxHeight: "60vh",
                  scrollClassName: "!mr-2",
                  children: n.map(
                    ({
                      name: a,
                      details: { expire: o, owner: l, entries: p },
                    }) => {
                      var c;
                      return i.jsx(
                        kn,
                        {
                          className: "!p-0 m-2",
                          children: i.jsx(On, {
                            className: "!py-1",
                            shadow: !1,
                            title: i.jsxs(N, {
                              alignCenter: !0,
                              row: !0,
                              className: "gap-2",
                              flex: 1,
                              justify: "between",
                              children: [
                                i.jsx(K, { children: a }),
                                i.jsx(Rt, {
                                  iconName: "edit",
                                  onClick: () => e(a),
                                  size: 16,
                                }),
                              ],
                            }),
                            children: i.jsx(fr, {
                              items: [
                                {
                                  label: C("views.thorname.expire"),
                                  value: i.jsxs(N, {
                                    center: !0,
                                    className: "gap-x-2",
                                    children: [
                                      i.jsx(Ke, {
                                        content: C(
                                          "views.thorname.expirationNote",
                                          { block: o }
                                        ),
                                        iconName: "infoCircle",
                                      }),
                                      i.jsx(K, {
                                        children: $t({
                                          expire: o || "0",
                                          lastThorchainBlock:
                                            (c = s == null ? void 0 : s[0]) ==
                                            null
                                              ? void 0
                                              : c.thorchain,
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                { label: C("views.thorname.owner"), value: l },
                                ...p.map(({ address: u, chain: d }) => ({
                                  label: i.jsx(Be, {
                                    withoutBackground: !0,
                                    chain: d,
                                    size: 24,
                                  }),
                                  value: St(u, 15),
                                })),
                              ],
                            }),
                          }),
                        },
                        `${a}`
                      );
                    }
                  ),
                }),
              ],
            })
          : null;
      },
      cr = ({ nsChain: e, onSuccess: r }) => {
        const t = Re[e],
          { getWalletAddress: s } = Ne(),
          n = Ot(),
          {
            mutate: a,
            isPending: o,
            data: l,
          } = Cr({
            mutationFn: async (c) => {
              const u = await (
                await ke(
                  () =>
                    import("./assets/index-POi8GhpC.js")
                      .then(async (y) => (await y.__tla, y))
                      .then((y) => y.hc),
                  __vite__mapDeps([0, 1])
                )
              ).getSwapKitClient();
              if (!u) return;
              const d =
                  c.assetValue.chain === _.Maya
                    ? u == null
                      ? void 0
                      : u.mayachain.registerMAYAName
                    : u == null
                    ? void 0
                    : u.thorchain.registerTHORName,
                { label: h, params: b } = hn(c),
                f = await d(b);
              return (
                n(
                  At({
                    txid: f,
                    id: Dt(),
                    from: s(e),
                    inChain: e,
                    type: Et.TC_DEPOSIT,
                    label: `${h} ${t} - ${c.name}`,
                    timestamp: new Date(),
                  })
                ),
                f
              );
            },
          }),
          { isPending: p } = nt({
            txHash: l,
            onSuccess: () => {
              r == null || r();
            },
          });
        return { registerOrUpdate: a, isPending: o || p };
      };
    function hn(e) {
      if (e.aliasAddress && e.aliasChain) {
        const { name: s, assetValue: n, aliasAddress: a, aliasChain: o } = e;
        return {
          type: "update",
          label: "Update",
          params: { name: s, assetValue: n, chain: o, address: a },
        };
      }
      const { name: r, assetValue: t } = e;
      return e.owner && t.eqValue(0)
        ? {
            type: "transfer",
            label: "Transfer",
            params: {
              name: r,
              assetValue: t,
              chain: t.chain,
              address: e.owner,
              owner: e.owner,
            },
          }
        : {
            type: "register",
            label: "Register",
            params: {
              name: r,
              assetValue: t,
              chain: t.chain,
              address: e.owner,
            },
          };
    }
    let lt, ct, dt, ut, ve, mt, pt, ht, dr, ft, gt, bt, yt, vt, ur, xt;
    (lt = P.object({
      name: P.string(),
      years: P.number(),
      chain: P.nativeEnum(_),
      address: P.string(),
    })),
      (ct = ({ name: e, nsChain: r }) => {
        const t = zt({ chain: r }),
          { registerOrUpdate: s, isPending: n } = cr({
            nsChain: r,
            onSuccess: () => {
              Ge(C("Name transferred.")), t();
            },
          }),
          a = Qe({
            mode: "onChange",
            reValidateMode: "onChange",
            resolver: Le(lt),
            defaultValues: { name: e, years: 0, chain: r, address: "" },
          }),
          o = a.handleSubmit((d) => {
            s({
              assetValue: $.from({ chain: r }),
              name: d.name,
              owner: d.address,
            });
          }),
          l = async () => {
            const { cosmosValidateAddress: d } = await ke(
              () => import("./h7Lgs3KS.js"),
              __vite__mapDeps([2, 0, 1, 3, 4, 5, 6, 7, 8, 9])
            );
            if (
              !d({
                chain: a.getValues("chain"),
                address: a.getValues("address"),
              })
            ) {
              a.setError("address", {
                message: C("views.thorname.invalidTransferAddress"),
              });
              return;
            }
            c(!0);
          },
          [p, c] = m.useState(!1),
          u = a.watch("address");
        return i.jsxs(N, {
          col: !0,
          className: "gap-4",
          children: [
            i.jsxs(N, {
              col: !0,
              children: [
                i.jsx(br, { label: C("views.thorname.transferTHORName") }),
                i.jsx(N, {
                  row: !0,
                  className: "w-full gap-x-4",
                  children: i.jsx(pe, {
                    control: a.control,
                    name: "address",
                    render: ({ field: d }) => {
                      var h;
                      return i.jsx(We, {
                        autoFocus: !0,
                        stretch: !0,
                        border: "rounded",
                        className: "!text-md !p-1.5 border pt-5",
                        containerClassName:
                          "bg-light-gray-light dark:bg-dark-gray-light !bg-opacity-80",
                        error:
                          (h = a.formState.errors.address) == null
                            ? void 0
                            : h.message,
                        onChange: ({ target: b }) => d.onChange(b.value),
                        placeholder: `${_.THORChain} ${C("common.address")}`,
                        value: d.value,
                      });
                    },
                  }),
                }),
              ],
            }),
            i.jsx(An, {
              className: "m-auto !pt-2 !pb-1 !px-2",
              content: `Transferring a ${Re[r]} will reset all previously set aliases.`,
              contentClassName: "py-0",
              type: "warn",
            }),
            i.jsx(se, {
              stretch: !0,
              error: !!a.formState.errors.address,
              isLoading: n,
              onClick: l,
              size: "sm",
              variant: "secondary",
              children: C("common.transfer"),
            }),
            i.jsx(gr, {
              inputAssets: [$.from({ chain: r })],
              isOpened: p,
              onClose: () => c(!1),
              onConfirm: () => {
                o(), c(!1);
              },
              children: i.jsxs(N, {
                col: !0,
                children: [
                  i.jsx(le, { label: Re[r], value: e }),
                  i.jsx(le, {
                    capitalizeLabel: !0,
                    label: C("common.transferAddress"),
                    value: St(u, 6, 8),
                  }),
                ],
              }),
            }),
          ],
        });
      }),
      (dt = En.filter((e) => !qn.includes(e)).map((e) => ({
        value: e,
        Component: i.jsxs(N, {
          alignCenter: !0,
          className: "gap-x-2",
          children: [
            i.jsx(Be, { withoutBackground: !0, chain: e, size: 24 }),
            i.jsx(K, { children: _t(e, !0) }),
          ],
        }),
      }))),
      (ut = ({ chain: e, onChange: r, exclude: t }) =>
        i.jsx(Rn, {
          buttonClassName: "!w-[120px]",
          className: "!w-[120px] mr-2",
          menuItems: dt.filter((s) => !(t != null && t.includes(s.value))),
          onChange: r,
          openComponent: i.jsxs(N, {
            alignCenter: !0,
            className: "gap-x-2",
            children: [
              i.jsx(Be, { withoutBackground: !0, chain: e, size: 24 }),
              i.jsx(K, { children: _t(e) }),
            ],
          }),
          value: e,
        })),
      (ve = ({ nsChain: e, years: r, type: t }) =>
        r < 1
          ? 0
          : t === "update"
          ? e === _.THORChain
            ? r * 1
            : Math.round(r * 1.0512 * 1e10) / 1e10
          : e === _.THORChain
          ? Sn(r)
          : _n(r)),
      (mt = P.object({
        name: P.string(),
        years: P.number(),
        aliasChain: P.nativeEnum(_),
        aliasAddress: P.string(),
      })),
      (pt = ({ name: e, nsChain: r }) => {
        var g;
        const { getWalletAddress: t } = Ne(),
          s = zt({ chain: r }),
          { data: n } = it({ name: e, chain: r }),
          [a, o] = m.useState(!1),
          { registerOrUpdate: l, isPending: p } = cr({
            nsChain: r,
            onSuccess: () => {
              Ge(C("Name updated.")), s();
            },
          }),
          c = (v) => {
            var O, M;
            const x =
                (M =
                  (O = n == null ? void 0 : n.details) == null
                    ? void 0
                    : O.entries.find((T) => T.chain === v)) == null
                  ? void 0
                  : M.address,
              A = t(v);
            return x || A || "";
          },
          u = Qe({
            mode: "onChange",
            reValidateMode: "onChange",
            resolver: Le(mt),
            defaultValues: {
              name: e,
              years: 0,
              chain: r,
              aliasAddress: c(r),
              aliasChain: r,
            },
          }),
          d = (v) => {
            u.setValue("aliasAddress", c(v));
          },
          h = u.handleSubmit((v) => {
            l({
              owner: t(r),
              assetValue: $.from({
                chain: r,
                amount: ve({
                  nsChain: r,
                  years: u.watch("years"),
                  type: "update",
                }),
              }),
              name: v.name,
              aliasAddress: v.aliasAddress,
              aliasChain: v.aliasChain,
            });
          }),
          b = async () => {
            const { getAddressValidator: v } = await ke(
              () =>
                import("./assets/index-POi8GhpC.js")
                  .then(async (x) => (await x.__tla, x))
                  .then((x) => x.hb),
              __vite__mapDeps([0, 1])
            );
            if (
              !(await v())({
                chain: u.getValues("aliasChain"),
                address: u.getValues("aliasAddress"),
              })
            ) {
              u.setError("aliasAddress", {
                message: C("views.thorname.invalidAddress"),
              });
              return;
            }
            o(!0);
          },
          f = ve({ nsChain: r, years: u.watch("years"), type: "update" }),
          y = $.from({ chain: r }).symbol;
        return i.jsxs(N, {
          col: !0,
          className: "gap-4",
          children: [
            i.jsxs(N, {
              col: !0,
              children: [
                i.jsx(fr, {
                  horizontalInset: !0,
                  items: [
                    {
                      label: C("views.thorname.extend"),
                      value: i.jsx(pe, {
                        control: u.control,
                        name: "years",
                        render: ({ field: { onChange: v, value: x } }) =>
                          i.jsxs(N, {
                            alignCenter: !0,
                            className: "gap-x-2",
                            justify: "between",
                            children: [
                              i.jsx(se, {
                                className: "px-1.5 group",
                                leftIcon: i.jsx(Oe, {
                                  className:
                                    "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                                  color: "secondary",
                                  name: "minusCircle",
                                }),
                                onClick: () => v(Math.max(0, x - 1)),
                                variant: "borderlessTint",
                              }),
                              i.jsx(N, {
                                center: !0,
                                className: "w-3",
                                children: i.jsx("span", { children: x }),
                              }),
                              i.jsx(se, {
                                className: "px-1.5 group",
                                leftIcon: i.jsx(Oe, {
                                  className:
                                    "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                                  color: "secondary",
                                  name: "plusCircle",
                                }),
                                onClick: () => v(x + 1),
                                variant: "borderlessTint",
                              }),
                            ],
                          }),
                      }),
                    },
                    {
                      label: C("views.thorname.updateFee"),
                      value: i.jsxs(N, {
                        center: !0,
                        className: "gap-x-2",
                        children: [
                          i.jsxs("span", {
                            className: "text-xs",
                            children: [f, " ", y],
                          }),
                          i.jsx(Mt, {
                            asset: $.from({ chain: r }),
                            size: "tiny",
                          }),
                        ],
                      }),
                    },
                    ...(
                      ((g = n == null ? void 0 : n.details) == null
                        ? void 0
                        : g.entries) || []
                    ).map(({ address: v, chain: x }) => ({
                      key: x,
                      label: i.jsx(Be, {
                        withoutBackground: !0,
                        chain: x,
                        size: 24,
                      }),
                      value: i.jsx("span", {
                        className: "text-xs",
                        children: v,
                      }),
                    })),
                  ],
                }),
                i.jsxs(N, {
                  col: !0,
                  className: "mt-4",
                  children: [
                    i.jsx(br, { label: C("views.thorname.updateAlias") }),
                    i.jsxs(N, {
                      row: !0,
                      className: "w-full pb-4",
                      children: [
                        i.jsx(pe, {
                          control: u.control,
                          name: "aliasChain",
                          render: ({ field: { onChange: v, value: x } }) =>
                            i.jsx(ut, {
                              chain: x,
                              exclude: [_.Solana, _.Radix],
                              onChange: (A) => {
                                v(A), d(A);
                              },
                            }),
                        }),
                        i.jsx(pe, {
                          control: u.control,
                          name: "aliasAddress",
                          render: ({ field: { onChange: v, value: x } }) => {
                            var A;
                            return i.jsx(We, {
                              autoFocus: !0,
                              stretch: !0,
                              border: "rounded",
                              className: "!text-xs !p-1.5 border",
                              containerClassName:
                                "bg-light-gray-light dark:bg-dark-gray-light !bg-opacity-80",
                              error:
                                (A = u.formState.errors.aliasAddress) == null
                                  ? void 0
                                  : A.message,
                              onChange: ({ target: O }) => v(O.value),
                              placeholder: `${u.watch("aliasChain")} ${C(
                                "common.address"
                              )}`,
                              value: x,
                            });
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx(se, {
              stretch: !0,
              error: !!u.formState.errors.aliasAddress,
              isLoading: p,
              onClick: b,
              size: "sm",
              variant: "secondary",
              children: C("common.update"),
            }),
            i.jsx(gr, {
              inputAssets: [$.from({ chain: r })],
              isOpened: a,
              onClose: () => o(!1),
              onConfirm: () => {
                h(), o(!1);
              },
              children: i.jsx(N, {
                col: !0,
                children: i.jsxs(N, {
                  col: !0,
                  children: [
                    i.jsx(le, { label: "THORName", value: e }),
                    i.jsx(le, {
                      capitalizeLabel: !0,
                      label: C("view.thorname.cost"),
                      value: `${f} ${y}`,
                    }),
                    u.getValues("years") > 0 &&
                      i.jsx(le, {
                        capitalizeLabel: !0,
                        label: C("view.thorname.duration"),
                        value: `${u.getValues("years")} ${
                          u.getValues("years") > 1
                            ? C("view.thorname.years")
                            : C("view.thorname.year")
                        }`,
                      }),
                  ],
                }),
              }),
            }),
          ],
        });
      }),
      (ht = (e) => (e === _.THORChain ? "thorchain" : "mayachain")),
      (dr = (e) =>
        Vt({
          queryKey: ["lastBlock", e],
          queryFn: () => Mn.getLastBlock({ type: ht(e) }),
          select: (r) =>
            r.length
              ? "thorchain" in r[0]
                ? r[0].thorchain
                : r[0].mayachain
              : 0,
        })),
      (ft = ({ nsChain: e, name: r }) => {
        var u, d, h;
        const { getWalletAddress: t } = Ne(),
          s = t(e),
          { data: n } = dr(e),
          { data: a, isFetching: o } = it({ name: r, chain: e }),
          l =
            !!((u = a == null ? void 0 : a.details) != null && u.expire) &&
            sa({ expire: a.details.expire, lastThorchainBlock: n || 0 }),
          p =
            l ||
            (!((d = a == null ? void 0 : a.details) != null && d.owner) &&
              !!(a != null && a.name)),
          c =
            !p &&
            ((h = a == null ? void 0 : a.details) == null
              ? void 0
              : h.owner) === s;
        return {
          isAvailable: p,
          isExpired: l,
          isOwner: c,
          isLoading: o,
          nsData: a,
        };
      }),
      (gt = (e) => ({
        handleCopyValue: m.useCallback(() => {
          Tn(e), Ge(C("common.copied"));
        }, [e]),
      })),
      (bt = ({ type: e = "icon", value: r }) => {
        const { handleCopyValue: t } = gt(r);
        return e === "icon"
          ? i.jsx(Rt, {
              iconName: "copy",
              onClick: t,
              size: 16,
              tooltip: C("common.copy"),
            })
          : i.jsx(Ke, {
              content: C("common.copy"),
              children: i.jsx(N, {
                onClick: t,
                children: i.jsx(K, {
                  className: Pn,
                  fontWeight: "semibold",
                  textStyle: "caption",
                  children: r,
                }),
              }),
            });
      }),
      (yt = ({
        thorname: e,
        details: r,
        isAvailable: t,
        years: s,
        setYears: n,
        isExpired: a,
        isOwner: o,
        nsChain: l,
      }) => {
        const { data: p } = dr(l),
          c = ve({ nsChain: l, years: s, type: "registration" }),
          u = $.from({ chain: l }).symbol,
          d = m.useMemo(
            () => [
              {
                label: C("views.thorname.duration"),
                value: i.jsxs(N, {
                  alignCenter: !0,
                  className: "gap-x-2",
                  justify: "between",
                  children: [
                    i.jsx(se, {
                      className: "px-1.5 group",
                      leftIcon: i.jsx(Oe, {
                        className:
                          "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                        color: "secondary",
                        name: "minusCircle",
                      }),
                      onClick: () => n(s - 1),
                      variant: "borderlessTint",
                    }),
                    i.jsx(N, {
                      center: !0,
                      className: "w-3",
                      children: i.jsx(K, { children: s }),
                    }),
                    i.jsx(se, {
                      className: "px-1.5 group",
                      leftIcon: i.jsx(Oe, {
                        className:
                          "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                        color: "secondary",
                        name: "plusCircle",
                      }),
                      onClick: () => n(s + 1),
                      variant: "borderlessTint",
                    }),
                  ],
                }),
              },
              {
                label: C("views.thorname.registrationFee"),
                value: i.jsxs(N, {
                  center: !0,
                  className: "gap-x-2",
                  children: [
                    i.jsx(Mt, { asset: $.from({ chain: l }), size: "tiny" }),
                    i.jsxs(K, { children: [c, " ", u] }),
                  ],
                }),
              },
            ],
            [l, n, s]
          ),
          h = m.useMemo(
            () => [
              {
                label: C("components.sidebar.thorname"),
                value: i.jsxs("div", {
                  className: "flex",
                  children: [e, " ", i.jsx(bt, { type: "icon", value: e })],
                }),
              },
              {
                label: C("views.thorname.status"),
                value: i.jsx(K, {
                  variant: t || o ? "green" : "red",
                  children: C(
                    `views.thorname.${
                      o ? "ownedByYou" : t ? "available" : "unavailable"
                    }`
                  ),
                }),
              },
              ...(t ? [...d] : []),
            ],
            [t, o, d, e]
          ),
          b = m.useMemo(
            () =>
              r
                ? [
                    {
                      label: a
                        ? C("views.thorname.expired")
                        : C("views.thorname.expire"),
                      value: i.jsxs(N, {
                        center: !0,
                        className: "gap-x-2",
                        children: [
                          i.jsx(Ke, {
                            content: C("views.thorname.expirationNote", {
                              block: r.expire,
                            }),
                            iconName: "infoCircle",
                          }),
                          i.jsx(K, {
                            children: $t({
                              expire: r.expire,
                              lastThorchainBlock: p || 0,
                            }),
                          }),
                        ],
                      }),
                    },
                    {
                      label: C("views.thorname.owner"),
                      value: i.jsx(K, {
                        className: "!text-xs",
                        children: r.owner,
                      }),
                    },
                  ]
                : [],
            [r, p, a]
          ),
          f = m.useMemo(() => [...h, ...b].filter(Boolean), [h, b]);
        return { ownerColumns: b, data: r || t ? f : [], registerColumns: d };
      }),
      (vt = P.object({
        name: P.string()
          .min(1, { message: "Name is required" })
          .max(30, { message: "Max allowed length is 30 characters" })
          .regex(/^[a-zA-Z0-9+_-]+$/, {
            message: "Invalid characters in name",
          }),
        years: P.number().int().min(0),
        aliasChain: P.nativeEnum(_),
        aliasAddress: P.string(),
      })),
      (ur = ({ nsChain: e }) => {
        const { setIsConnectModalOpen: r } = In(),
          { isWalletLoading: t, getWalletAddress: s } = Ne(),
          { signingRequired: n } = Vn(),
          [a, o] = m.useState(""),
          {
            isAvailable: l,
            isExpired: p,
            isOwner: c,
            isLoading: u,
            nsData: d,
          } = ft({ nsChain: e, name: a }),
          { registerOrUpdate: h, isPending: b } = cr({ nsChain: e }),
          f = (d == null ? void 0 : d.name) || "",
          y = (d == null ? void 0 : d.details) || null,
          g = Qe({
            mode: "onChange",
            reValidateMode: "onChange",
            resolver: Le(vt),
            defaultValues: { name: "", years: 1, chain: e, address: "" },
          }),
          v = g.watch("years"),
          x = g.watch("chain"),
          A = g.watch("address"),
          O = ve({ nsChain: e, years: v, type: "registration" }),
          M = $.from({ chain: e }).symbol,
          [T, Q] = m.useState(!1),
          [R, te] = m.useState(!1),
          F = s(x),
          Z = [$.from({ chain: e })],
          k = n(Z),
          { data: Ce } = yt({
            years: v,
            setYears: (S) =>
              g.setValue("years", Math.max(0, S), { shouldValidate: !0 }),
            thorname: (d == null ? void 0 : d.name) || "",
            details: y,
            isAvailable: l,
            isOwner: c,
            isExpired: p,
            nsChain: e,
          }),
          Y = async () => {
            const S = await g.trigger("name"),
              H = g.getValues("name");
            (S || !H) && o(H);
          },
          G = m.useCallback(
            ({ confirmed: S } = {}) => {
              F && T ? k && !S && te(!0) : r(!0);
              const H = ve({ nsChain: e, years: v, type: "registration" });
              h({
                name: g.getValues("name"),
                assetValue: $.from({ chain: e, value: H }),
                owner: F,
              });
            },
            [F, g, k, e, h, r, T, v]
          ),
          je = (S) => {
            S.key === "Enter" && Y();
          },
          qe = (S) => {
            g.setValue("name", S), Y();
          };
        return (
          m.useEffect(() => {
            g.setValue("years", c ? 0 : 1);
          }, [c, g]),
          m.useEffect(() => {
            F
              ? g.setValue("address", F)
              : F === void 0 && g.setValue("address", "");
          }, [F, x, g]),
          m.useEffect(() => {
            A &&
              x &&
              ke(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (S) => (await S.__tla, S))
                    .then((S) => S.hb),
                __vite__mapDeps([0, 1])
              ).then(({ getAddressValidator: S }) => {
                S().then((H) => {
                  const ue = H({ chain: x, address: A });
                  Q(ue);
                });
              });
          }, [A, x]),
          i.jsxs(Fn, {
            description: C("views.thorname.description"),
            header: i.jsxs(N, {
              col: !0,
              children: [
                i.jsx(Hn, { title: Re[e] }),
                i.jsxs(N, {
                  className: "px-2.5 pt-1",
                  justify: "between",
                  children: [
                    i.jsx(K, {
                      fontWeight: "medium",
                      textStyle: "caption",
                      variant: "secondary",
                      children: C("views.thorname.thornameSubtitle"),
                    }),
                    i.jsx(Ke, {
                      content:
                        e === _.THORChain
                          ? C("views.thorname.thornameInfo")
                          : C("views.thorname.mayanameInfo"),
                      place: "bottom",
                      children: i.jsx(Oe, {
                        color: "primaryBtn",
                        name: "infoCircle",
                        size: 24,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            keywords: "THORName, LIGHTSwap AI, THORChain, DEFI, DEX",
            title: C("views.thorname.title"),
            children: [
              i.jsxs(N, {
                className: "flex-1 w-full gap-2",
                children: [
                  i.jsx(pe, {
                    control: g.control,
                    name: "name",
                    render: ({ field: { onChange: S, value: H } }) => {
                      var ue;
                      return i.jsx(We, {
                        autoFocus: !0,
                        stretch: !0,
                        border: "rounded",
                        className: "!text-md p-1.5 flex-1 border w-full",
                        containerClassName:
                          "bg-light-gray-light dark:bg-dark-gray-light !bg-opacity-80",
                        error: H
                          ? (ue = g.formState.errors.name) == null
                            ? void 0
                            : ue.message
                          : void 0,
                        onChange: (X) => S(X.target.value),
                        onKeyDown: je,
                        placeholder: C("views.thorname.checkNameAvailability"),
                        suffix:
                          a &&
                          i.jsx(Oe, {
                            color: "secondary",
                            name: "close",
                            onClick: () => {
                              S(""), Y();
                            },
                          }),
                        value: H,
                      });
                    },
                  }),
                  i.jsx(se, {
                    stretch: !0,
                    className: "flex !w-[120px] !rounded-2xl",
                    loading: t || u,
                    onClick: Y,
                    size: "md",
                    variant: "fancy",
                    children: "Search",
                  }),
                ],
              }),
              i.jsx(fr, { horizontalInset: !0, items: Ce, size: "lg" }),
              l &&
                i.jsx(N, {
                  className: "w-full pt-6",
                  children: i.jsx(se, {
                    stretch: !0,
                    error: !!y && !!F && !T,
                    loading: t || u || b,
                    onClick: () => G(),
                    size: "lg",
                    variant: "fancy",
                    children: "Purchase",
                  }),
                }),
              c &&
                (d == null ? void 0 : d.name) &&
                i.jsx(N, {
                  col: !0,
                  className: "w-full pt-4",
                  children: i.jsxs(rt, {
                    className: "w-full pt-2",
                    defaultValue: "addresses",
                    children: [
                      i.jsxs(lr, {
                        className: "grid w-full grid-cols-3 mb-4",
                        children: [
                          i.jsx(be, {
                            value: "addresses",
                            children: "Settings",
                          }),
                          i.jsx(be, {
                            value: "transfer",
                            children: "Transfer",
                          }),
                          i.jsx(be, {
                            value: "asset",
                            children: "Preferred asset",
                          }),
                        ],
                      }),
                      i.jsx(ye, {
                        className: "mb-4",
                        value: "addresses",
                        children: i.jsx(pt, {
                          name: (d == null ? void 0 : d.name) || "",
                          nsChain: e,
                        }),
                      }),
                      i.jsx(ye, {
                        value: "transfer",
                        children:
                          !!d.name &&
                          i.jsx(ct, {
                            name: (d == null ? void 0 : d.name) || "",
                            nsChain: e,
                          }),
                      }),
                      i.jsx(ye, {
                        value: "asset",
                        children: i.jsx(un, {
                          nsChain: e,
                          nsName: (d == null ? void 0 : d.name) || "",
                        }),
                      }),
                    ],
                  }),
                }),
              !y && i.jsx(pn, { editName: qe, nsChain: e }),
              i.jsx(gr, {
                inputAssets: Z,
                isOpened: R,
                onClose: () => te(!1),
                onConfirm: () => {
                  G({ confirmed: !0 }), te(!1);
                },
                children: i.jsxs(N, {
                  col: !0,
                  children: [
                    i.jsx(le, { label: Re[e], value: f }),
                    i.jsx(le, {
                      capitalizeLabel: !0,
                      label: C("view.thorname.cost"),
                      value: `${O} ${M}`,
                    }),
                    i.jsx(le, {
                      capitalizeLabel: !0,
                      label: C("view.thorname.duration"),
                      value: `${v} ${
                        v > 1
                          ? C("view.thorname.years")
                          : C("view.thorname.year")
                      }`,
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }),
      (xt = () =>
        i.jsxs(rt, {
          className: "w-full pt-2",
          defaultValue: "thorname",
          children: [
            i.jsxs(lr, {
              className:
                "flex justify-start w-full  mb-6 bg-transparent border-b-2 rounded-none h-14",
              children: [
                i.jsx(be, {
                  className:
                    "data-[state=active]:bg-muted  text-base font-semibold py-2 px-4",
                  value: "thorname",
                  children: "THORName",
                }),
                i.jsx(be, {
                  className:
                    "data-[state=active]:bg-muted  text-base font-semibold py-2 px-4",
                  value: "mayaname",
                  children: "MAYAName",
                }),
              ],
            }),
            i.jsx(ye, {
              className: "mb-4",
              value: "thorname",
              children: i.jsx(ur, { nsChain: _.THORChain }),
            }),
            i.jsx(ye, {
              value: "mayaname",
              children: i.jsx(ur, { nsChain: _.Maya }),
            }),
          ],
        })),
      (Ht = xt);
  });
export { na as __tla, Ht as default };
