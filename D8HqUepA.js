const __vite__fileDeps = [
    "assets/index-POi8GhpC.js",
    "assets/index-CWjS2nv2.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  cn as m,
  dd as q,
  _ as pe,
  fe as ge,
  fM as ye,
  cv as e,
  cJ as i,
  cP as w,
  cy as b,
  cA as x,
  dJ as J,
  df as ue,
  dw as je,
  eC as we,
  cz as p,
  cH as Q,
  cL as f,
  fN as y,
  dC as Y,
  cE as fe,
  cM as T,
  f2 as S,
  e6 as G,
  cU as U,
  O as N,
  f6 as X,
  d$ as Z,
  ei as ee,
  eF as ae,
  cY as be,
  d0 as Ce,
  e7 as ve,
  cZ as se,
  e8 as ke,
  er as Se,
  d2 as Ne,
  eg as _e,
  __tla as Ie,
} from "./assets/index-POi8GhpC.js";
import {
  W as Ae,
  P as Te,
  b as We,
  S as ne,
  c as le,
  u as re,
  C as ie,
  a as te,
  __tla as Re,
} from "./CoohYyhv.js";
import { T as De } from "./DlFdII4L.js";
import { u as W } from "./DLie8hhL.js";
import { C as Le } from "./CDEB0yzb.js";
import "./CwT0bMyZ.js";
import "./CqjHhAGf.js";
import "./Dkq95DWd.js";
import "./DPMYbftn.js";
import "./iCHHcf-3.js";
let oe,
  ze = Promise.all([
    (() => {
      try {
        return Ie;
      } catch {}
    })(),
    (() => {
      try {
        return Re;
      } catch {}
    })(),
  ]).then(async () => {
    (function () {
      try {
        var n =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          a = new n.Error().stack;
        a &&
          ((n._sentryDebugIds = n._sentryDebugIds || {}),
          (n._sentryDebugIds[a] = "74510aec-f447-416f-9f9e-5c331abe2b1a"),
          (n._sentryDebugIdIdentifier =
            "sentry-dbid-74510aec-f447-416f-9f9e-5c331abe2b1a"));
      } catch {}
    })();
    let R, _, I, A, D, L, z, k, M, O, H, P, V;
    (R = () => {
      const n = m.useRef(!1),
        [a, r] = m.useState(null),
        { getWalletAddress: o } = q(),
        l = o(pe.THORChain),
        [d] = ge(),
        { data: s } = ye(l, { skip: !l }),
        t = m.useCallback(async () => {
          if (!(!(s && l) || n.current)) {
            n.current = !0;
            try {
              const c = await Promise.all(
                s.map(async (h) => {
                  const { data: u } = await d(h);
                  return Array.isArray(u) || typeof u == "boolean"
                    ? { thorname: h }
                    : { ...(u || {}), thorname: h };
                })
              );
              r(c);
            } finally {
              n.current = !1;
            }
          }
        }, [d, l, s]);
      return (
        m.useEffect(() => {
          l ? t() : !l && a && r(null);
        }, [l]),
        m.useEffect(() => {
          t();
        }, [t]),
        a
      );
    }),
      (_ = ({
        isLoading: n,
        isConnected: a,
        handleRefreshChain: r,
        toggleConnect: o,
      }) =>
        e.jsx(i, {
          className: "gap-2",
          children: a
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(w, {
                    className: "px-3",
                    leftIcon: e.jsx(b, {
                      color: "primaryBtn",
                      name: "refresh",
                      size: 16,
                      spin: n,
                    }),
                    onClick: r,
                    tooltip: x("common.refresh"),
                    variant: "outlinePrimary",
                  }),
                  e.jsx(w, {
                    className: "px-3",
                    leftIcon: e.jsx(b, {
                      color: "orange",
                      name: "disconnect",
                      size: 16,
                    }),
                    onClick: o,
                    tooltip: x("common.disconnect"),
                    variant: "outlineWarn",
                  }),
                ],
              })
            : e.jsx(w, {
                disabled: n,
                onClick: o,
                variant: a ? "outlinePrimary" : "primary",
                children: e.jsx(i, {
                  center: !0,
                  className: "gap-x-2",
                  children: x("common.connect"),
                }),
              }),
        })),
      (I = ({ chain: n, chainWallet: a, balance: r }) => {
        const [o, l] = m.useState(!1),
          d = () => {
            l(!1);
          },
          s = m.useCallback(async () => {
            (a == null ? void 0 : a.walletType) === J.KEYSTORE && l(!0);
            const { getAddress: t } = await (
              await ue(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (c) => (await c.__tla, c))
                    .then((c) => c.hc),
                __vite__mapDeps([0, 1])
              )
            ).getSwapKitClient();
            (a == null ? void 0 : a.walletType) === J.LEDGER &&
              je(we("notification.verifyLedgerAddy"), t(n), {
                duration: 20 * 1e3,
              });
          }, [a == null ? void 0 : a.walletType, n]);
        return e.jsxs(i, {
          center: !0,
          className: "space-x-1",
          children: [
            !!a &&
              e.jsx(Ae, {
                onClick: s,
                size: 16,
                walletType: a == null ? void 0 : a.walletType,
              }),
            e.jsx(p, { children: Q(n, !0) }),
            !!a &&
              e.jsx(p, {
                fontWeight: "semibold",
                variant: "primaryBtn",
                children: r,
              }),
            e.jsx(Te, { isOpen: o, onCancel: d }),
          ],
        });
      }),
      (A = m.memo(({ asset: n, mode: a, sparkline: r }) => {
        const { label: o, values: l } = We(n, r);
        return e.jsx(i, {
          center: !0,
          className: f("opacity-0 w-[99%] transition-opacity duration-500", {
            "!opacity-100": l.length > 0,
            "!-my-[20px] lg:w-[100px] xl:w-[320px]": a === y.LIST,
          }),
          style: { height: a === y.CARD ? 100 : 80 },
          children:
            l.length > 0 &&
            e.jsx(Le, { hideLabel: !0, labels: [o], values: l }),
        });
      })),
      (D = (n, a, r) => {
        const o = W(),
          l = Y(),
          { isLgActive: d } = fe();
        return m.useMemo(
          () => [
            {
              id: "asset",
              Header: () => x("common.asset"),
              disableSortBy: !0,
              accessor: (s) => s,
              Cell: ({ cell: { value: s } }) =>
                e.jsx(T, { asset: s, hasChainIcon: !1, size: 40 }),
            },
            {
              id: "name",
              Header: () => "",
              disableSortBy: !0,
              minScreenSize: S.md,
              accessor: (s) => s,
              Cell: ({ cell: { value: s } }) =>
                e.jsxs(i, {
                  col: !0,
                  className: "pl-4",
                  justify: "between",
                  children: [
                    e.jsx(p, { children: s.ticker }),
                    e.jsx(p, { variant: "secondary", children: s.type }),
                  ],
                }),
            },
            {
              id: "amount",
              Header: () => x("common.amount"),
              align: "right",
              accessor: (s) => s.toFixed(2),
              Cell: ({ cell: { value: s } }) =>
                e.jsx(p, { fontWeight: "bold", children: n ? s : "-" }),
            },
            {
              id: "price",
              Header: () => x("common.usdPrice"),
              align: "right",
              minScreenSize: S.md,
              accessor: (s) => {
                var t;
                return (
                  ((t = r[s.toString()]) == null ? void 0 : t.price_usd) || 0
                );
              },
              Cell: ({ cell: { value: s } }) =>
                e.jsx(p, { fontWeight: "bold", children: o(s) }),
              sortType: "basic",
            },
            {
              id: "price24h",
              Header: () => "24h%",
              align: "right",
              accessor: (s) => {
                var t, c;
                return (
                  ((c = (t = r[s.toString()]) == null ? void 0 : t.cg) == null
                    ? void 0
                    : c.price_change_percentage_24h_usd) || 0
                );
              },
              minScreenSize: S.md,
              Cell: ({ cell: { value: s } }) =>
                e.jsxs(p, {
                  fontWeight: "bold",
                  variant: s >= 0 ? "green" : "red",
                  children: [s.toFixed(2), "%"],
                }),
              sortType: "basic",
            },
            {
              id: "chart",
              Header: () => x("views.wallet.chart7d"),
              minScreenSize: S.lg,
              align: "center",
              disableSortBy: !0,
              accessor: (s) => s,
              Cell: ({ cell: { value: s } }) => {
                var t, c;
                return e.jsx(A, {
                  asset: s,
                  mode: y.LIST,
                  sparkline:
                    (c = (t = r[s.toString()]) == null ? void 0 : t.cg) == null
                      ? void 0
                      : c.sparkline_in_7d,
                });
              },
            },
            {
              accessor: (s) => s,
              id: "actions",
              Header: () => "",
              align: "right",
              disableSortBy: !0,
              Cell: ({ cell: { value: s } }) =>
                e.jsxs(i, {
                  row: !0,
                  className: "gap-2",
                  justify: "end",
                  children: [
                    e.jsx(w, {
                      leftIcon: e.jsx(b, {
                        className:
                          "rotate-180 group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                        color: "secondary",
                        name: "receive",
                        size: 20,
                      }),
                      onClick: () => l(G(s)),
                      variant: "tint",
                      children: d ? x("common.send") : null,
                    }),
                    e.jsx(ne, {
                      address: n,
                      chain: a,
                      openComponent: e.jsx(w, {
                        disabled: !n,
                        leftIcon: e.jsx(b, {
                          className:
                            "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                          color: "secondary",
                          name: "receive",
                          size: 20,
                        }),
                        tooltip: n
                          ? x("views.wallet.showQRCode")
                          : x("views.walletModal.notConnected"),
                        variant: "tint",
                        children: d ? x("common.receive") : null,
                      }),
                    }),
                    e.jsx(w, {
                      leftIcon: e.jsx(b, {
                        className:
                          "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                        color: "secondary",
                        name: "swap",
                        size: 20,
                      }),
                      onClick: () => l(U(s)),
                      variant: "tint",
                      children: d ? x("common.swap") : null,
                    }),
                  ],
                }),
            },
          ],
          [n, r, o, d, a, l]
        );
      }),
      (L = m.memo(
        ({ priceData: n, chainInfo: a, chain: r, chainAddress: o }) => {
          const [l, d] = m.useState(!1),
            s = N.fromChainOrSignature(r),
            t = a.filter((j) => !j.eqAsset(s)),
            c =
              a.find((j) => j.eqAsset(s)) || N.fromChainOrSignature(s.chain, 0),
            h = m.useCallback(() => {
              d((j) => !j);
            }, []),
            u = D(o, r, n),
            g = l ? [c, ...t] : [c];
          return e.jsxs(i, {
            col: !0,
            className: "transition-all",
            children: [
              e.jsx(De, {
                columns: u,
                data: g,
                hasShadow: !1,
                sortable: g.length > 1,
              }),
              !!t.length &&
                e.jsx(w, {
                  leftIcon: e.jsx(X, { isActive: l }),
                  onClick: h,
                  variant: "tint",
                  children: l
                    ? x("views.wallet.hideTokens")
                    : x("views.wallet.showAllTokens"),
                }),
            ],
          });
        }
      )),
      (z = m.memo(({ thornames: n, chain: a }) => {
        const r = Z(),
          {
            chainWalletLoading: o,
            accountBalance: l,
            chainAddress: d,
            chainInfo: s,
            priceData: t,
            setIsConnectModalOpen: c,
            chainWallet: h,
          } = le(a),
          { handleRefreshChain: u } = re(a),
          g = m.useCallback(() => {
            d ? r({ type: "disconnectByChain", payload: a }) : c(!0);
          }, [a, d, c, r]);
        return e.jsx(ee, {
          className: f("overflow-hidden", ae),
          children: e.jsxs(i, {
            col: !0,
            className: "w-full min-w-fit",
            flex: 1,
            children: [
              e.jsxs(i, {
                alignCenter: !0,
                row: !0,
                className:
                  "pb-2 border-0 border-b border-solid border-light-gray-light dark:border-dark-border-primary",
                justify: "between",
                children: [
                  e.jsxs(i, {
                    className: "flex-wrap flex-1 gap-3",
                    justify: "between",
                    children: [
                      e.jsx(I, { balance: l, chain: a, chainWallet: h }),
                      d &&
                        e.jsxs(i, {
                          alignCenter: !0,
                          className: "!mr-4",
                          children: [
                            n.map((j) =>
                              e.jsx(ie, { address: j, type: "full" }, j)
                            ),
                            e.jsx(te, { address: d, chain: a }),
                          ],
                        }),
                    ],
                  }),
                  e.jsx(_, {
                    handleRefreshChain: u,
                    isConnected: !!d,
                    isLoading: o,
                    toggleConnect: g,
                  }),
                ],
              }),
              e.jsx(L, {
                chain: a,
                chainAddress: d,
                chainInfo: s,
                priceData: t,
              }),
            ],
          }),
        });
      })),
      (k = m.memo(
        ({
          className: n,
          label: a,
          onClick: r,
          icon: o,
          disabled: l,
          tooltip: d,
        }) =>
          e.jsxs(i, {
            center: !0,
            col: !0,
            className: "group gap-y-2",
            children: [
              e.jsx(w, {
                className: "!w-12 px-0",
                disabled: l,
                leftIcon: e.jsx(b, {
                  className: f(
                    "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary min-w-[20px]",
                    n
                  ),
                  color: "secondary",
                  name: o,
                  size: 20,
                }),
                onClick: r,
                size: "md",
                tooltip: d,
                variant: "tint",
              }),
              e.jsx(p, {
                className:
                  "group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",
                fontWeight: "medium",
                textStyle: "caption",
                variant: "secondary",
                children: a,
              }),
            ],
          })
      )),
      (M = m.memo(({ assetValue: n, priceData: a }) => {
        const r = W(2, ""),
          { currentPrice: o, priceChangePercentage24h: l } = m.useMemo(() => {
            const { price_usd: t, cg: c } =
              (a == null ? void 0 : a[n.toString()]) || {};
            return {
              currentPrice: t || 0,
              priceChangePercentage24h:
                (c == null ? void 0 : c.price_change_percentage_24h_usd) || 0,
            };
          }, [n, a]),
          d = n.getValue("number"),
          s = `${n.toSignificant(6)} (${r(d * o)})`;
        return e.jsxs(i, {
          className:
            "px-3 py-2 border-0 border-b border-solid border-light-gray-light dark:border-dark-border-primary",
          justify: "between",
          children: [
            e.jsxs(i, {
              children: [
                e.jsx(T, { asset: n, hasChainIcon: !1 }),
                e.jsxs(i, {
                  col: !0,
                  className: "pl-2",
                  children: [
                    e.jsx(p, { children: n.ticker }),
                    e.jsx(p, {
                      fontWeight: "semibold",
                      textStyle: "caption",
                      variant: "secondary",
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(i, {
              col: !0,
              align: "end",
              children: [
                e.jsx(p, { children: r(o) }),
                e.jsxs(p, {
                  fontWeight: "semibold",
                  textStyle: "caption",
                  variant: l >= 0 ? "green" : "red",
                  children: [l == null ? void 0 : l.toFixed(2), "%"],
                }),
              ],
            }),
          ],
        });
      })),
      (O = m.memo(({ thornames: n, chain: a }) => {
        var B, F, $, K;
        const {
            isActive: r,
            contentRef: o,
            toggle: l,
            maxHeightStyle: d,
          } = be(),
          s = W(),
          t = Y(),
          c = Z(),
          {
            sigAssetPriceInfo: h,
            accountBalance: u,
            chainAddress: g,
            chainInfo: j,
            priceData: ce,
            setIsConnectModalOpen: E,
            chainWallet: de,
            chainWalletLoading: he,
          } = le(a),
          { handleRefreshChain: me } = re(a),
          C = N.from({ chain: a }),
          xe = m.useCallback(() => {
            g ? c({ type: "disconnectByChain", payload: a }) : E(!0);
          }, [a, g, E, c]);
        return e.jsx(ee, {
          className: f("overflow-hidden", ae),
          children: e.jsxs(i, {
            col: !0,
            className: "w-full",
            children: [
              e.jsxs(i, {
                row: !0,
                className:
                  "pb-4 border-0 border-b-2 border-solid border-light-gray-light dark:border-dark-border-primary",
                justify: "between",
                children: [
                  e.jsx(I, { balance: u, chain: a, chainWallet: de }),
                  e.jsx(_, {
                    handleRefreshChain: me,
                    isConnected: !!g,
                    isLoading: !!he,
                    toggleConnect: xe,
                  }),
                ],
              }),
              e.jsxs(i, {
                alignCenter: !0,
                className: "mt-3",
                justify: "between",
                children: [
                  e.jsxs(i, {
                    children: [
                      e.jsx(T, { hasShadow: !0, asset: C, size: 40 }),
                      e.jsxs(i, {
                        col: !0,
                        className: "ml-2",
                        children: [
                          e.jsx(p, { children: C.ticker }),
                          e.jsx(p, {
                            fontWeight: "medium",
                            textStyle: "caption-xs",
                            variant: "secondary",
                            children: C.type,
                          }),
                        ],
                      }),
                    ],
                  }),
                  g &&
                    e.jsxs(i, {
                      alignCenter: !0,
                      children: [
                        e.jsxs(i, {
                          col: !0,
                          children: [
                            e.jsx(i, {
                              alignCenter: !0,
                              row: !0,
                              children:
                                n.length > 0 &&
                                e.jsx(i, {
                                  onClick: l,
                                  children: e.jsx(X, { isActive: r }),
                                }),
                            }),
                            e.jsx("div", {
                              className: Ce,
                              ref: o,
                              style: d,
                              children: e.jsx(i, {
                                col: !0,
                                align: "start",
                                children: n.map((v) =>
                                  e.jsx(ie, { address: v, type: "full" }, v)
                                ),
                              }),
                            }),
                          ],
                        }),
                        e.jsx(te, { address: g, chain: a }),
                      ],
                    }),
                ],
              }),
              e.jsxs(i, {
                center: !0,
                col: !0,
                className: "mt-2",
                children: [
                  e.jsx(i, {
                    alignCenter: !0,
                    flex: 1,
                    justify: "between",
                    children: e.jsx(p, {
                      fontWeight: "semibold",
                      textStyle: "h3",
                      children: s(h == null ? void 0 : h.price_usd),
                    }),
                  }),
                  e.jsxs(p, {
                    fontWeight: "semibold",
                    textStyle: "caption",
                    variant:
                      (((B = h == null ? void 0 : h.cg) == null
                        ? void 0
                        : B.price_change_percentage_24h_usd) || 0) >= 0
                        ? "green"
                        : "red",
                    children: [
                      ($ =
                        (F = h == null ? void 0 : h.cg) == null
                          ? void 0
                          : F.price_change_percentage_24h_usd) == null
                        ? void 0
                        : $.toFixed(2),
                      "%",
                    ],
                  }),
                ],
              }),
              e.jsx(A, {
                asset: C,
                mode: y.CARD,
                sparkline:
                  (K = h == null ? void 0 : h.cg) == null
                    ? void 0
                    : K.sparkline_in_7d,
              }),
              e.jsxs(i, {
                center: !0,
                className:
                  "pb-4 border-0 border-b-2 border-solid gap-x-6 border-light-gray-light dark:border-dark-border-primary",
                children: [
                  e.jsx(k, {
                    className: "rotate-180",
                    icon: "receive",
                    label: x("common.send"),
                    onClick: () => t(G(C)),
                  }),
                  e.jsx(ne, {
                    address: g,
                    chain: a,
                    openComponent: e.jsx(k, {
                      disabled: !g,
                      icon: "receive",
                      label: x("common.receive"),
                      tooltip: g
                        ? x("views.wallet.showQRCode")
                        : x("views.walletModal.notConnected"),
                    }),
                  }),
                  e.jsx(k, {
                    icon: "swap",
                    label: x("common.swap"),
                    onClick: () => t(U(C)),
                  }),
                ],
              }),
              e.jsx(i, {
                className: "h-24 md:h-36",
                children:
                  j.length > 0
                    ? e.jsx(i, {
                        col: !0,
                        className: "!-mb-6",
                        flex: 1,
                        children: e.jsx(ve, {
                          children: j.map((v) =>
                            e.jsx(M, { assetValue: v, priceData: ce }, v.ticker)
                          ),
                        }),
                      })
                    : e.jsx(i, {
                        center: !0,
                        flex: 1,
                        children: e.jsx(p, {
                          textStyle: "subtitle2",
                          variant: "secondary",
                          children: x("views.wallet.noDataToShow"),
                        }),
                      }),
              }),
            ],
          }),
        });
      })),
      (H = m.memo(({ onlyConnected: n, keyword: a }) => {
        const { getWalletAddress: r } = q(),
          { walletViewMode: o } = se(),
          l = R(),
          d = m.useMemo(
            () =>
              ke.filter((t) => {
                const c = N.fromChainOrSignature(t),
                  h = a.toLowerCase();
                return (
                  [
                    c.chain.toLowerCase(),
                    c.symbol.toLowerCase(),
                    Q(t, !0).toLowerCase(),
                  ].some((u) => u.includes(h)) && (n ? !!r(t) : !0)
                );
              }),
            [r, a, n]
          ),
          s = m.useCallback(
            (t) => {
              const c = r(t);
              return l && c
                ? l.reduce(
                    (h, { entries: u = [], thorname: g }) => (
                      u.find((j) => j.address === c) &&
                        h.push(`${g}.${t.toLowerCase()}`),
                      h
                    ),
                    []
                  )
                : [];
            },
            [r, l]
          );
        return e.jsx(i, {
          col: !0,
          className: f({
            "gap-1.5 flex-1": o === y.LIST,
            "grid w-full grid-cols-1 gap-2.5 lg:grid-cols-2 xl:grid-cols-3 md:flex-row":
              o === y.CARD,
          }),
          children: d.map((t) =>
            o === y.CARD
              ? e.jsx(O, { chain: t, thornames: s(t) }, t)
              : e.jsx(z, { chain: t, thornames: s(t) }, t)
          ),
        });
      })),
      (P = m.memo(
        ({
          setOnlyConnected: n,
          onlyConnected: a,
          walletViewMode: r,
          setWalletViewMode: o,
          keyword: l,
          setKeyword: d,
        }) =>
          e.jsxs(i, {
            alignCenter: !0,
            className: "w-full px-1.5 flex-wrap gap-2",
            justify: "between",
            children: [
              e.jsx(Se, {
                border: "rounded",
                icon: "search",
                onChange: (s) => d(s.target.value),
                placeholder: x("views.wallet.search"),
                value: l,
              }),
              e.jsxs(i, {
                alignCenter: !0,
                className: "space-x-6",
                children: [
                  e.jsxs(i, {
                    center: !0,
                    className: "gap-x-2 rounded-2xl",
                    children: [
                      e.jsx(p, {
                        textStyle: "caption",
                        children: x("views.wallet.showOnlyConnectedChains"),
                      }),
                      e.jsx(Ne, { checked: a, onChange: n }),
                    ],
                  }),
                  e.jsxs(i, {
                    center: !0,
                    children: [
                      e.jsx(w, {
                        className: f("pl-3 pr-3 !rounded-r-none", {
                          "!bg-opacity-90 dark:!bg-opacity-50": r === y.CARD,
                        }),
                        leftIcon: e.jsx(b, {
                          className: f({
                            "!text-white !stroke-white": r === y.CARD,
                          }),
                          name: "grid",
                          size: 20,
                        }),
                        onClick: () => o(y.CARD),
                        tooltip: x("views.wallet.gridView"),
                        variant: r === y.CARD ? "primary" : "outlineTint",
                      }),
                      e.jsx(w, {
                        className: f("pl-2 pr-3 !rounded-l-none", {
                          "!bg-opacity-90 dark:!bg-opacity-50": r === y.LIST,
                        }),
                        leftIcon: e.jsx(b, {
                          className: f({
                            "!text-white !stroke-white": r === y.LIST,
                          }),
                          name: "list",
                          size: 20,
                        }),
                        onClick: () => o(y.LIST),
                        tooltip: x("views.wallet.listView"),
                        variant: r === y.LIST ? "primary" : "outlineTint",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
      )),
      (V = () => {
        const { walletViewMode: n, setWalletViewMode: a } = se(),
          [r, o] = m.useState(""),
          [l, d] = m.useState(!1);
        return e.jsxs(i, {
          col: !0,
          className: "w-full",
          children: [
            e.jsx(_e, {
              content: "Manage you tokens in your custodial wallet on LIGHTSwap AI",
              keywords: "Wallet, Tokens, LIGHTSwap AI, THORChain, DEFI, DEX",
              title: x("views.wallet.wallet"),
            }),
            e.jsx(P, {
              keyword: r,
              onlyConnected: l,
              setKeyword: o,
              setOnlyConnected: d,
              setWalletViewMode: a,
              walletViewMode: n,
            }),
            e.jsx(i, {
              className: "w-full mt-4",
              children: e.jsx(H, { keyword: r, onlyConnected: l }),
            }),
          ],
        });
      }),
      (oe = V);
  });
export { ze as __tla, oe as default };
