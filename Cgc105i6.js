const __vite__fileDeps = [
    "assets/index-POi8GhpC.js",
    "assets/index-CWjS2nv2.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  cn as t,
  L as _,
  cv as e,
  cx as c,
  cW as it,
  c_ as de,
  cz as m,
  cA as s,
  cI as te,
  d1 as Ut,
  cy as I,
  cK as je,
  d3 as Bt,
  ej as Vt,
  cJ as A,
  cL as ue,
  cM as se,
  ea as Ht,
  eb as Qt,
  ec as G,
  dM as be,
  cT as Ie,
  d8 as rt,
  ek as qt,
  O as ae,
  dd as ne,
  el as Gt,
  dI as ze,
  em as Kt,
  cP as Y,
  dl as lt,
  df as Ee,
  dm as ot,
  dk as ve,
  dp as ct,
  ds as dt,
  dr as Le,
  dq as mt,
  en as Jt,
  dt as Re,
  cC as Zt,
  _ as Xt,
  eo as Yt,
  ee as pt,
  cZ as es,
  dH as ts,
  dK as ss,
  cG as as,
  di as ns,
  eg as is,
  ep as rs,
  eq as ls,
  er as os,
  ei as cs,
  es as ds,
  __tla as ms,
} from "./assets/index-POi8GhpC.js";
import { A as ut } from "./BNvyzkU_.js";
import { S as ps } from "./C8rAcL73.js";
import { G as us } from "./BwAMgJ-H.js";
import { I as xs } from "./L2srWHi_.js";
import { u as xt } from "./DLie8hhL.js";
import { u as gs } from "./BIRMHJJ4.js";
import { u as $e } from "./DdtGuP0z.js";
import {
  g as hs,
  a as fs,
  u as ys,
  T as ws,
  b as js,
  c as gt,
  d as bs,
  e as ht,
  __tla as vs,
} from "./BVZCGQLB.js";
import { u as Ss, A as Cs, a as As } from "./C6gN5CZK.js";
import { C as ft, __tla as Ns } from "./Bujnyu6O.js";
import { u as Os, C as Ms, __tla as ks } from "./B6G2Z8wq.js";
import { u as Ds } from "./PxwVcihW.js";
import { R as _s } from "./DS3fE0e3.js";
import { I as Ts } from "./CYwjOChi.js";
import { P as Ps } from "./vR8dScX-.js";
import { u as Is } from "./D-iJCSbt.js";
import { u as Fe } from "./vSRfwVQ4.js";
import { v as yt } from "./Bb0RDO2T.js";
import { A as zs } from "./BnkXd4Ft.js";
import { u as Es, __tla as Ls } from "./Bm7XAPj_.js";
import "./CZ5SrGDV.js";
import "./CNj6CspX.js";
import "./CJGo2KxJ.js";
import "./ClP-vrwx.js";
import "./CiJOrYqO.js";
import "./8CFpYboC.js";
import { __tla as Rs } from "./CeesTFZ8.js";
import "./Bcp9QaNf.js";
import "./DtctggWu.js";
import "./C3OMHbbi.js";
let wt,
  $s = Promise.all([
    (() => {
      try {
        return ms;
      } catch {}
    })(),
    (() => {
      try {
        return vs;
      } catch {}
    })(),
    (() => {
      try {
        return Ns;
      } catch {}
    })(),
    (() => {
      try {
        return ks;
      } catch {}
    })(),
    (() => {
      try {
        return Ls;
      } catch {}
    })(),
    (() => {
      try {
        return Rs;
      } catch {}
    })(),
  ]).then(async () => {
    (function () {
      try {
        var a =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          u = new a.Error().stack;
        u &&
          ((a._sentryDebugIds = a._sentryDebugIds || {}),
          (a._sentryDebugIds[u] = "c009ec88-2cfa-4cde-a0d5-2788ce884b60"),
          (a._sentryDebugIdIdentifier =
            "sentry-dbid-c009ec88-2cfa-4cde-a0d5-2788ce884b60"));
      } catch {}
    })();
    const We = ({
        stream: a,
        toggleStream: u,
        canStream: o,
        outputAsset: i,
        quote: l,
        invertedPriceDiff: p,
        title: g,
      }) => {
        var x, w, j, y;
        const f = ((l == null ? void 0 : l.estimatedTime) || 0) * 1e3,
          n =
            (((x = l == null ? void 0 : l.streamingSwap) == null
              ? void 0
              : x.estimatedTime) || 0) * 1e3,
          b = n && f ? n - f : 0,
          O =
            (w = l == null ? void 0 : l.streamingSwap) != null &&
            w.expectedOutputUSD
              ? Number(l.streamingSwap.expectedOutputUSD) -
                Number(l.expectedOutputUSD)
              : 0,
          N =
            (j = l == null ? void 0 : l.streamingSwap) != null &&
            j.expectedOutputUSD
              ? Number(l.expectedOutputUSD) -
                Number(l.streamingSwap.expectedOutputUSD)
              : 0,
          M = p ? N : O,
          C = t.useMemo(
            () =>
              new _({
                value: (l == null ? void 0 : l.expectedOutput) || "0",
                decimal: (i == null ? void 0 : i.decimal) || 0,
              }),
            [
              i == null ? void 0 : i.decimal,
              l == null ? void 0 : l.expectedOutput,
            ]
          ),
          r = t.useMemo(() => {
            var d;
            return new _({
              value:
                ((d = l == null ? void 0 : l.streamingSwap) == null
                  ? void 0
                  : d.expectedOutput) || "0",
              decimal: (i == null ? void 0 : i.decimal) || 0,
            });
          }, [
            i == null ? void 0 : i.decimal,
            (y = l == null ? void 0 : l.streamingSwap) == null
              ? void 0
              : y.expectedOutput,
          ]),
          h = xt();
        return e.jsx(c, {
          animateOpacity: !0,
          as: it,
          in: o,
          w: "100%",
          children: e.jsxs(de, {
            gap: 2,
            p: 3,
            sx: { w: "full", borderRadius: 16 },
            variant: "filledContainerTertiary",
            children: [
              e.jsxs(c, {
                children: [
                  e.jsx(m, {
                    color: "textSecondary",
                    fontWeight: "semibold",
                    ml: 2,
                    textStyle: "caption",
                    children: g || s("views.swap.priceOptimizationAvailable"),
                  }),
                  e.jsx(te, {
                    content: s("views.swap.priceOptimizationInfo"),
                    onClick: () => Ut(Bt),
                    place: "bottom",
                    children: e.jsx(I, {
                      className: "ml-1",
                      color: "secondary",
                      name: "infoCircle",
                      size: 18,
                    }),
                  }),
                ],
              }),
              e.jsxs(c, {
                gap: 1,
                children: [
                  e.jsx(de, {
                    borderColor: a ? "brand.btnPrimary" : void 0,
                    flex: 1,
                    onClick: () => u(!0),
                    px: 2,
                    py: 1,
                    sx: { cursor: "pointer" },
                    variant: "filledTertiary",
                    children: e.jsxs(c, {
                      direction: "column",
                      children: [
                        e.jsxs(c, {
                          align: "center",
                          gap: 1,
                          justify: "space-between",
                          children: [
                            e.jsx(m, {
                              textStyle: "caption-xs",
                              children: s("views.swap.priceOptimized"),
                            }),
                            e.jsx(I, {
                              color: "yellow",
                              name: "coin",
                              size: 20,
                            }),
                          ],
                        }),
                        e.jsx(c, {
                          gap: 1,
                          children: e.jsxs(c, {
                            direction: "column",
                            mt: 0.5,
                            children: [
                              e.jsx(c, {
                                gap: 1,
                                children: e.jsx(m, {
                                  fontWeight: "normal",
                                  opacity: n ? 1 : 0.5,
                                  textStyle: "caption-xs",
                                  children: n
                                    ? je(n, { approx: !0 })
                                    : "Time: N/A",
                                }),
                              }),
                              e.jsxs(c, {
                                gap: 1,
                                children: [
                                  e.jsxs(m, {
                                    textStyle: "caption-xs",
                                    children: [
                                      r.toSignificant(6),
                                      " ",
                                      (i == null ? void 0 : i.ticker) || "",
                                    ],
                                  }),
                                  e.jsxs(m, {
                                    color: "brand.green",
                                    fontWeight: "normal",
                                    textStyle: "caption-xs",
                                    children: ["(+", h(M), ")"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  e.jsx(de, {
                    borderColor: a ? void 0 : "brand.alpha.btnPrimary",
                    flex: 1,
                    onClick: () => u(!1),
                    px: 2,
                    py: 1,
                    sx: { cursor: "pointer" },
                    variant: "filledTertiary",
                    children: e.jsxs(c, {
                      direction: "column",
                      children: [
                        e.jsxs(c, {
                          align: "center",
                          gap: 1,
                          justify: "space-between",
                          children: [
                            e.jsx(m, {
                              textStyle: "caption-xs",
                              children: s("views.swap.timeOptimized"),
                            }),
                            e.jsx(I, {
                              color: "secondaryBtn",
                              name: "timer",
                              size: 22,
                            }),
                          ],
                        }),
                        e.jsx(c, {
                          gap: 1,
                          children: e.jsxs(c, {
                            direction: "column",
                            mt: 0.5,
                            children: [
                              e.jsxs(c, {
                                gap: 1,
                                children: [
                                  e.jsx(m, {
                                    fontWeight: "normal",
                                    opacity: f ? 1 : 0.5,
                                    textStyle: "caption-xs",
                                    children: f
                                      ? je(f, { approx: !0 })
                                      : "Time: N/A",
                                  }),
                                  !!b &&
                                    e.jsxs(m, {
                                      color: "brand.green",
                                      fontWeight: "normal",
                                      textStyle: "caption-xs",
                                      children: [
                                        "(",
                                        je(b, { approx: !0 }),
                                        " faster)",
                                      ],
                                    }),
                                ],
                              }),
                              e.jsxs(m, {
                                textStyle: "caption-xs",
                                children: [
                                  C.toSignificant(6),
                                  " ",
                                  (i == null ? void 0 : i.ticker) || "",
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
        });
      },
      Ue = 6e3;
    function Be() {
      var l;
      const { data: a } = Vt(),
        u = (l = a == null ? void 0 : a[0]) == null ? void 0 : l.thorchain,
        o = t.useCallback((p) => (p - (u || 0)) * Ue, [u]),
        i = t.useCallback((p) => p * Ue, []);
      return { getBlockTimeDifference: o, estimateTimeFromBlocks: i };
    }
    const jt = t.memo(
        ({
          asset: a,
          logoURI: u,
          select: o,
          extraInfo: i,
          isSelected: l,
          balance: p,
          filled: g,
        }) => {
          const f = Number(g) >= 100,
            n = i ? ((100 / Number(i)) * 100).toFixed(2) : "-";
          return e.jsx(A, {
            alignCenter: !0,
            className: ue(
              "dark:bg-dark-dark-gray bg-btn-light-tint z-0 lig rounded-3xl p-2 hover:duration-150 transition dark:hover:bg-dark-border-primary hover:bg-btn-light-tint-active border border-transparent",
              {
                "brightness-90 dark:brightness-110 dark:!bg-dark-border-primary !bg-btn-light-tint-active border-btn-primary":
                  l,
              },
              f ? "cursor-not-allowed" : "cursor-pointer"
            ),
            onClick: () => {
              !f && o(a);
            },
            children: e.jsxs(A, {
              className: "gap-x-3 pl-2",
              flex: 1,
              children: [
                e.jsx(A, {
                  center: !0,
                  className: "gap-x-2",
                  children: e.jsx(se, { asset: a, logoURI: u, size: 34 }),
                }),
                e.jsxs(A, {
                  col: !0,
                  flex: 1,
                  children: [
                    e.jsx(A, {
                      alignCenter: !0,
                      justify: "between",
                      children: e.jsx(m, {
                        fontWeight: "medium",
                        textStyle: "body",
                        children: a == null ? void 0 : a.ticker,
                      }),
                    }),
                    e.jsx(A, {
                      row: !0,
                      className: "gap-x-2 justify-between pr-2",
                      children: e.jsx(te, {
                        content: n ? s("views.lending.crRatio", { cr: n }) : "",
                        children: e.jsxs(A, {
                          center: !0,
                          className: "gap-1",
                          children: [
                            e.jsx(m, {
                              fontWeight: "light",
                              textStyle: "caption",
                              textTransform: "uppercase",
                              variant: "secondary",
                              children: "LTV",
                            }),
                            e.jsx(m, {
                              textStyle: "caption",
                              variant: "primaryBtn",
                              children: i ? `${i}%` : "N/A",
                            }),
                            e.jsx(I, {
                              color: "secondary",
                              name: "infoCircle",
                              size: 14,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                e.jsx(A, {
                  center: !0,
                  className: "gap-2",
                  children:
                    !!p &&
                    e.jsx(m, {
                      fontWeight: "medium",
                      textStyle: "caption-xs",
                      variant: "secondary",
                      children: p.toSignificant(6),
                    }),
                }),
                f &&
                  e.jsx(A, {
                    center: !0,
                    children: e.jsx(m, {
                      color: "brand.red",
                      textStyle: "caption-xs",
                      children: s("views.lending.capReached"),
                    }),
                  }),
                typeof g < "u" &&
                  e.jsx(te, {
                    content: `${s("common.filled")}: ${hs(g) || "N/A"}`,
                    children: e.jsxs(c, {
                      position: "relative",
                      children: [
                        e.jsx(Ht, {
                          color: f ? "brand.red" : "brand.btnPrimary",
                          size: "35px",
                          trackColor: "borderPrimary",
                          value: g,
                        }),
                        e.jsx(c, {
                          alignItems: "center",
                          bottom: 0,
                          justifyContent: "center",
                          left: 0,
                          position: "absolute",
                          right: 0,
                          top: 0,
                          children: e.jsxs(m, {
                            className: ue("text-[10px]", {
                              "text-[9px]": g >= 100,
                            }),
                            fontWeight: "semibold",
                            textStyle: "caption-xs",
                            variant: "secondary",
                            children: [Math.floor(g), "%"],
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        }
      ),
      bt = ({
        assets: a,
        onSelect: u,
        onClose: o,
        isLoading: i,
        setQuery: l,
        selectedAsset: p,
      }) => {
        const { filteredAssets: g, select: f } = Ss({
            assets: a,
            onSelect: u,
            onClose: o,
          }),
          n = t.useCallback(
            (b) => {
              f(b), setTimeout(() => (l == null ? void 0 : l("")), 500);
            },
            [f, l]
          );
        return e.jsxs(A, {
          col: !0,
          className: ue(
            "rounded-box-lg justify-center items-start w-2/5 py-5 px-6",
            Qt.secondary
          ),
          flex: 1,
          children: [
            e.jsx(m, {
              fontWeight: "medium",
              mb: 2,
              ml: 2,
              textStyle: "caption",
              textTransform: "none",
              variant: "secondary",
              children: s("views.lending.selectCollateralAsset"),
            }),
            g.length
              ? e.jsx(A, {
                  className:
                    "!overflow-x-clip flex-col overflow-y-auto gap-1.5 w-full h-full",
                  children: g.map((b) =>
                    t.createElement(jt, {
                      ...b,
                      isSelected: p == null ? void 0 : p.eqAsset(b.asset),
                      key: `${b.asset.symbol}${b.asset.type}`,
                      select: n,
                    })
                  ),
                })
              : e.jsx(A, {
                  justifyCenter: !0,
                  className: "pt-4",
                  flex: 1,
                  children: i
                    ? e.jsx(I, { spin: !0, name: "loader", size: 24 })
                    : e.jsx(m, {
                        children: s("components.assetSelect.noResultsFound"),
                      }),
                }),
          ],
        });
      },
      K = 1,
      vt = "https://twitter.com/THORChain/status/1693423215580958884",
      St = ({
        isOpened: a,
        onClose: u,
        onConfirm: o,
        asset: i,
        amount: l,
        estimatedTime: p,
        expectedOutputAmount: g,
        collateralAmount: f,
        collateralAsset: n,
        networkFee: b,
        expectedDebtInfo: O,
        slippagePercent: N,
      }) => {
        const [M, C] = t.useState(!1),
          r = N > K,
          h = t.useMemo(() => {
            if (!p) return;
            const x = Math.floor(p / 60),
              w = Math.floor(x / 60),
              j = w > 0 ? `${w}h ` : "",
              y = x > 0 ? `${x % 60}m ` : "",
              d = p % 60 > 0 ? ` ${p % 60}s` : "";
            return `${j}${y}${d}`;
          }, [p]);
        return e.jsxs(ft, {
          buttonDisabled: r && !M,
          inputAssets: [i],
          isOpened: a,
          onClose: u,
          onConfirm: () => o((g == null ? void 0 : g.toSignificant(6)) || "0"),
          children: [
            e.jsxs(A, {
              col: !0,
              className: "mb-5",
              children: [
                e.jsx(G, {
                  label: e.jsxs(c, {
                    align: "center",
                    alignContent: "center",
                    gap: 1,
                    children: [
                      e.jsx(m, {
                        color: "textSecondary",
                        mr: 1,
                        textStyle: "caption",
                        textTransform: "capitalize",
                        children: s("views.views.lending.borrow"),
                      }),
                      e.jsxs(c, {
                        align: "center",
                        gap: 0.5,
                        children: [
                          e.jsx(m, {
                            textStyle: "caption",
                            children: i.ticker,
                          }),
                          e.jsx(se, { asset: i, size: 22 }),
                        ],
                      }),
                      e.jsxs(c, {
                        align: "center",
                        gap: 0.5,
                        children: [
                          e.jsx(m, {
                            fontWeight: "light",
                            mx: 1,
                            children: "for",
                          }),
                          e.jsx(m, {
                            textStyle: "caption",
                            children: n.ticker,
                          }),
                          e.jsx(se, { asset: n, size: 22 }),
                        ],
                      }),
                    ],
                  }),
                  value: void 0,
                }),
                e.jsx(G, {
                  className: "min-h-[38px]",
                  label: s("views.lending.collateral"),
                  showBorder: !1,
                  value: e.jsxs(c, {
                    align: "center",
                    gap: 0.5,
                    children: [
                      e.jsxs(m, {
                        textStyle: "caption",
                        children: [l.toSignificant(6), " ", n.ticker],
                      }),
                      e.jsx(se, { asset: n, size: 22 }),
                    ],
                  }),
                }),
                e.jsx(G, {
                  className: "min-h-[38px]",
                  label: s("views.lending.collateralAfterSlippage"),
                  value: e.jsxs(m, {
                    textStyle: "caption",
                    children: [f.toSignificant(6), " ", n.ticker],
                  }),
                }),
                e.jsx(G, {
                  className: "min-h-[38px]",
                  label: s("views.lending.borrow"),
                  showBorder: !1,
                  value: e.jsxs(c, {
                    align: "center",
                    gap: 1,
                    children: [
                      e.jsx(m, {
                        textStyle: "caption",
                        children: g
                          ? `${g.toSignificant(6)} ${i.ticker}`
                          : b != null && b.gte(l)
                          ? s("views.savings.notEnoughForOutboundFee")
                          : e.jsx(I, {
                              spin: !0,
                              color: "primary",
                              name: "loader",
                              size: 24,
                            }),
                      }),
                      e.jsx(se, { asset: i, size: 22 }),
                    ],
                  }),
                }),
                e.jsx(G, {
                  className: "min-h-[36px]",
                  label: s("views.lending.expectedDebt"),
                  showBorder: !1,
                  value: e.jsx(c, {
                    align: "center",
                    gap: 1,
                    children: e.jsx(m, {
                      textStyle: "caption",
                      children:
                        O ||
                        e.jsx(I, {
                          spin: !0,
                          color: "primary",
                          name: "loader",
                          size: 24,
                        }),
                    }),
                  }),
                }),
                e.jsx(G, {
                  className: "min-h-[36px]",
                  label: s("common.slippage"),
                  value: e.jsxs(m, {
                    color: N > K ? "brand.red" : "textPrimary",
                    textStyle: "caption",
                    children: [N.toFixed(1), "%"],
                  }),
                }),
                e.jsx(G, {
                  className: "min-h-[38px]",
                  label: s("views.wallet.estimatedTime"),
                  showBorder: !1,
                  value: e.jsx(m, {
                    textStyle: "caption",
                    children: h || "N/A",
                  }),
                }),
                e.jsx(be, {
                  className: "mt-4",
                  title: e.jsxs(m, {
                    mx: 2,
                    children: [
                      s("views.lending.experimentalDisclaimer"),
                      " ",
                      e.jsx(Ie, {
                        className: "text-twitter-blue cursor-pointer",
                        to: vt,
                        children: e.jsxs(m, {
                          fontWeight: "medium",
                          noOfLines: 1,
                          variant: "blue",
                          children: [
                            s("views.lending.riskDisclaimer"),
                            " \u2192",
                          ],
                        }),
                      }),
                    ],
                  }),
                  type: "warn",
                }),
              ],
            }),
            r &&
              e.jsx(rt, {
                className: "pt-4 pb-2",
                label: e.jsx(A, {
                  alignCenter: !0,
                  children: e.jsx(m, {
                    children: s("views.swap.slippageConfirmationWarning"),
                  }),
                }),
                onValueChange: C,
                value: M,
              }),
          ],
        });
      },
      Ct = ({ depth: a, totalFeeUsd: u, slippagePercent: o }) => {
        const i = At(Number(a), o);
        return e.jsx(te, {
          content: i.tooltip,
          children: e.jsxs(c, {
            alignItems: "center",
            gap: 2,
            children: [
              e.jsx(m, {
                color: i.color,
                textStyle: "caption",
                children: (u == null ? void 0 : u.toCurrency()) || "0",
              }),
              e.jsx(I, { color: "secondary", name: "infoCircle", size: 20 }),
            ],
          }),
        });
      };
    function At(a, u) {
      return a
        ? a > 85 && u < K
          ? { color: "brand.green", tooltip: s("views.lending.slippage.low") }
          : a > 70 && u < K
          ? {
              color: "brand.yellow",
              tooltip: s("views.lending.slippage.medium"),
            }
          : { color: "brand.red", tooltip: s("views.lending.slippage.high") }
        : { color: "", tooltip: "" };
    }
    function Nt() {
      const { data: a } = qt(),
        { getMaxBalance: u, isWalletConnected: o } = $e(),
        [i, l] = t.useState([]);
      return (
        t.useEffect(() => {
          a &&
            Promise.all(
              a.map(async (p) => {
                const g = ae.from({ asset: p.asset });
                return {
                  ...p,
                  asset: g,
                  derivedDepthPercentage: Number(p.derivedDepthPercentage),
                  balance: o(g.chain) ? await u(g) : void 0,
                  extraInfo:
                    p.ltvPercentage &&
                    p.ltvPercentage !== "NaN" &&
                    p.ltvPercentage !== "Infinity"
                      ? p.ltvPercentage
                      : void 0,
                  filled: p.filledPercentage
                    ? Number(p.filledPercentage)
                    : void 0,
                  lendingAvailable: p.lendingAvailable,
                  ltvPercentage:
                    Number.isNaN(Number(p.ltvPercentage)) ||
                    p.ltvPercentage === "Infinity"
                      ? ""
                      : p.ltvPercentage,
                };
              })
            ).then((p) => l(p.filter((g) => g.lendingAvailable)));
        }, [a, u, o]),
        i
      );
    }
    const Ot = () => {
        const { getWalletAddress: a, isWalletLoading: u } = ne(),
          [o, i] = t.useState(null),
          [l] = Gt(),
          [p, g] = t.useState(!1),
          f = t.useMemo(
            () => (o == null ? void 0 : o.map((r) => r.asset)) || [],
            [o]
          ),
          { isLoading: n, data: b } = ze(f),
          O = t.useMemo(
            () =>
              n
                ? new _(0)
                : o == null
                ? void 0
                : o.reduce((r, { asset: h, collateralCurrent: x }) => {
                    var y;
                    const w =
                        ((y = b[h.toString()]) == null
                          ? void 0
                          : y.price_usd) || 0,
                      j = Number(x.toFixed(2)) || 0;
                    return r.add(new _(w).mul(j));
                  }, new _(0)),
            [o, b, n]
          ),
          N = t.useCallback(
            async (r) => {
              const h = a(r.chain);
              if (h) {
                const { data: x } = await l({
                    asset: `${r.chain}.${r.ticker}`,
                    address: h,
                  }),
                  w = ae.fromStringSync(
                    r.toString(),
                    (x == null ? void 0 : x.collateralDeposited) || "0"
                  ),
                  j = ae.fromStringSync(
                    r.toString(),
                    (x == null ? void 0 : x.collateralWithdrawn) || "0"
                  ),
                  y = ae.fromStringSync(
                    r.toString(),
                    (x == null ? void 0 : x.collateralCurrent) || "0"
                  ),
                  d = new _({
                    value: (x == null ? void 0 : x.debtIssued) || "0",
                    decimal: 8,
                  }),
                  k = new _({
                    value: (x == null ? void 0 : x.debtRepaid) || "0",
                    decimal: 8,
                  }),
                  $ = new _({
                    value: (x == null ? void 0 : x.debtCurrent) || "0",
                    decimal: 8,
                  });
                return Number.parseFloat(
                  (x == null ? void 0 : x.debtCurrent) || "0"
                )
                  ? {
                      asset: r,
                      collateralCurrent: y,
                      collateralDeposited: w,
                      collateralWithdrawn: j,
                      debtCurrent: $,
                      debtIssued: d,
                      debtRepaid: k,
                      lastOpenHeight:
                        (x == null ? void 0 : x.lastOpenHeight) || 0,
                      ltvPercentage: x == null ? void 0 : x.ltvPercentage,
                    }
                  : null;
              }
              return null;
            },
            [l, a]
          ),
          M = t.useCallback(async () => {
            if (u) return;
            g(!0);
            const r = Kt.map(N),
              h = (await Promise.allSettled(r)).reduce(
                (x, w) =>
                  "value" in w && w.value !== null ? [...x, w.value] : x,
                []
              );
            i(h), g(!1);
          }, [N, u]),
          C =
            o == null
              ? void 0
              : o.reduce((r, h) => r.add(h.debtCurrent), _.fromBigInt(0n, 8));
        return {
          refreshLoans: M,
          loans: o,
          totalCollateral: O,
          totalBorrowed: C,
          loansData: o || [],
          isLoading: p,
        };
      },
      Mt = t.memo(
        ({
          loading: a,
          label: u,
          disabled: o,
          handleSubmit: i,
          address: l,
          setIsConnectModalOpen: p,
          hasError: g,
        }) =>
          e.jsx(A, {
            className: "self-stretch pt-5",
            children: l
              ? e.jsx(A, {
                  className: "w-full",
                  children: e.jsx(Y, {
                    stretch: !0,
                    disabled: o,
                    error: g,
                    loading: a,
                    onClick: i,
                    size: "lg",
                    variant: "fancy",
                    children: u,
                  }),
                })
              : e.jsx(Y, {
                  stretch: !0,
                  loading: a,
                  onClick: () => p(!0),
                  size: "lg",
                  variant: "fancy",
                  children: s("common.connectWallet"),
                }),
          })
      ),
      kt = ({ header: a, value: u, tooltipText: o }) =>
        e.jsxs(de, {
          flex: 1,
          gap: 4,
          height: "full",
          px: 4,
          variant: "filledContainerSecondary",
          children: [
            e.jsxs(c, {
              justify: "space-between",
              w: "full",
              children: [
                e.jsx(m, { textStyle: "subtitle1", children: a }),
                o &&
                  e.jsx(te, {
                    content: o,
                    place: "bottom",
                    children: e.jsx(I, {
                      color: "primaryBtn",
                      name: "infoCircle",
                      size: 24,
                    }),
                  }),
              ],
            }),
            e.jsx(m, { textStyle: "h2", children: u }),
          ],
        }),
      Dt = "https://twitter.com/THORChain/status/1693423215580958884",
      _t = ({
        isOpened: a,
        onClose: u,
        onConfirm: o,
        asset: i,
        amount: l,
        tabLabel: p,
        estimatedTime: g,
        expectedOutputAmount: f,
        expectedOutputMaxSlippage: n,
        collateralAmount: b,
        collateralAsset: O,
        networkFee: N,
        expectedDebtInfo: M,
        slippagePercent: C,
        inputAmount: r,
      }) => {
        const [h, x] = t.useState(!1),
          w = C > K,
          j = t.useMemo(() => {
            if (!g) return;
            const v = Math.floor(g / 60),
              P = Math.floor(v / 60),
              T = P > 0 ? `${P}h ` : "",
              E = v > 0 ? `${v % 60}m ` : "",
              S = g % 60 > 0 ? ` ${g % 60}s` : "";
            return `${T}${E}${S}`;
          }, [g]),
          y = t.useMemo(
            () => [
              { label: s("common.action"), value: p },
              { label: s("common.asset"), value: `${i.ticker}`, icon: i },
            ],
            [i, p]
          ),
          d = t.useMemo(
            () => [
              { label: s("views.wallet.estimatedTime"), value: j || "N/A" },
              {
                label: s("views.lending.sendAmount"),
                value: f
                  ? `${f.toSignificant(6)} ${i.ticker}`
                  : N != null && N.gte(l)
                  ? s("views.savings.notEnoughForOutboundFee")
                  : e.jsx(I, {
                      spin: !0,
                      color: "primary",
                      name: "loader",
                      size: 24,
                    }),
              },
              {
                label: s("views.lending.repayDebt"),
                value:
                  `${r == null ? void 0 : r.toSignificant(6)} ${i.ticker}` ||
                  "N/A",
              },
              {
                label: s("common.slippage"),
                value: e.jsxs(m, {
                  color: C > K ? "brand.red" : "textPrimary",
                  textStyle: "caption",
                  children: [C.toFixed(1), "%"],
                }),
              },
            ],
            [l, i.ticker, f, r, N, C, j]
          ),
          k = t.useMemo(
            () => [
              {
                label: s("views.lending.collateral"),
                value: `${O == null ? void 0 : O.ticker}`,
                icon: O,
              },
              { label: s("views.wallet.estimatedTime"), value: j || "N/A" },
              {
                label: p,
                value: f
                  ? `${f.toSignificant(6)} ${i.ticker}`
                  : N != null && N.gte(l)
                  ? s("views.savings.notEnoughForOutboundFee")
                  : e.jsx(I, {
                      spin: !0,
                      color: "primary",
                      name: "loader",
                      size: 24,
                    }),
              },
              {
                label: s("common.minReceived"),
                value: n
                  ? `${n == null ? void 0 : n.toSignificant(6)} ${i.ticker}`
                  : e.jsx(I, {
                      spin: !0,
                      color: "primary",
                      name: "loader",
                      size: 24,
                    }),
              },
              {
                label: s("views.lending.collateralValue"),
                value:
                  b && O
                    ? `${b.toSignificant(6)} ${O.ticker}`
                    : e.jsx(I, {
                        spin: !0,
                        color: "primary",
                        name: "loader",
                        size: 24,
                      }),
              },
              {
                label: s("views.lending.expectedDebt"),
                value:
                  M ||
                  e.jsx(I, {
                    spin: !0,
                    color: "primary",
                    name: "loader",
                    size: 24,
                  }),
              },
            ],
            [l, i, b, O, M, f, n, N, p, j]
          ),
          $ = t.useMemo(() => (M ? y.concat(k) : y.concat(d)), [k, M, d, y]);
        return e.jsx(ft, {
          buttonDisabled: w && !h,
          inputAssets: [i],
          isOpened: a,
          onClose: u,
          onConfirm: () => o((f == null ? void 0 : f.toSignificant(6)) || "0"),
          children: e.jsxs(A, {
            col: !0,
            className: "mb-5",
            children: [
              $.map(({ label: v, value: P, icon: T }) =>
                e.jsx(
                  G,
                  {
                    label: v,
                    value: e.jsxs(A, {
                      center: !0,
                      className: "gap-1",
                      children: [
                        e.jsx(m, { textStyle: "caption", children: P }),
                        T && e.jsx(se, { asset: T, size: 22 }),
                      ],
                    }),
                  },
                  v
                )
              ),
              e.jsx(be, {
                className: "mt-4",
                title: e.jsxs(m, {
                  mx: 2,
                  children: [
                    s("views.lending.experimentalDisclaimer"),
                    " ",
                    e.jsx(Ie, {
                      className: "text-twitter-blue cursor-pointer",
                      to: Dt,
                      children: e.jsxs(m, {
                        fontWeight: "medium",
                        noOfLines: 1,
                        variant: "blue",
                        children: [
                          s("views.lending.riskDisclaimer"),
                          " \u2192",
                        ],
                      }),
                    }),
                  ],
                }),
                type: "warn",
              }),
              w &&
                e.jsx(rt, {
                  className: "pt-4 pb-2",
                  label: e.jsx(A, {
                    alignCenter: !0,
                    children: e.jsx(m, {
                      children: s("views.swap.slippageConfirmationWarning"),
                    }),
                  }),
                  onValueChange: x,
                  value: h,
                }),
            ],
          }),
        });
      };
    function Se({ children: a }) {
      return e.jsx(c, {
        align: "start",
        direction: "column",
        flex: 1,
        gap: 2,
        justify: "center",
        children: a,
      });
    }
    function Tt({
      repayAsset: a,
      collateralAsset: u,
      amount: o,
      onSuccess: i,
      repayQuote: l,
      stream: p,
    }) {
      const [g, f] = t.useState(!1),
        n = lt(),
        { getWalletAddress: b } = ne(),
        O = t.useMemo(() => b(u.chain), [b, u.chain]),
        N = t.useCallback(
          async (r) => {
            var w;
            const { thorchain: h } = await (
              await Ee(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (j) => (await j.__tla, j))
                    .then((j) => j.hc),
                __vite__mapDeps([0, 1])
              )
            ).getSwapKitClient();
            if (!h) throw new Error("SwapKit client not found");
            f(!1);
            const x = yt();
            n(
              ot({
                id: x,
                label: s("txManager.closeLoan", { asset: a.ticker, amount: r }),
                type: ve.TC_LENDING_CLOSE,
                inChain: a.chain,
              })
            );
            try {
              const j = await h.loan({
                type: "close",
                memo: p
                  ? (w = l == null ? void 0 : l.streamingSwap) == null
                    ? void 0
                    : w.memo
                  : l == null
                  ? void 0
                  : l.memo,
                assetValue: a.add(o),
                minAmount: a.set(r),
              });
              i == null || i(),
                j &&
                  n(
                    ct({
                      id: x,
                      txid: j,
                      timestamp: new Date(),
                      advancedTracker: !0,
                      initialPayload: l
                        ? { isLending: !0, ...l, fromAddress: O }
                        : void 0,
                      type: ve.TC_LENDING_CLOSE,
                    })
                  );
            } catch (j) {
              dt(j),
                Le(s("txManager.failed"), void 0, void 0, j),
                n(mt({ id: x, status: "error" }));
            }
          },
          [n, a, p, l, o, i, O]
        ),
        M = t.useCallback(() => {
          f(!0);
        }, []),
        C = t.useCallback(() => {
          f(!1);
        }, []);
      return {
        handleRepay: N,
        isConfirmOpen: g,
        openRepayConfirm: M,
        closeRepayConfirm: C,
      };
    }
    const Ve = (a) => {
        const [u, o] = t.useState(!1),
          i = t.useMemo(() => !!a, [a]),
          l = t.useCallback((p) => o(p && !!i), [i]);
        return (
          t.useEffect(() => {
            l(i);
          }, [i, l]),
          { toggleStream: l, stream: u, canStream: i }
        );
      },
      Pt = ({ asset: a, collateralAsset: u, percentage: o }) => {
        var y, d, k, $;
        const { getWalletAddress: i } = ne(),
          [l, p] = t.useState(new _({ value: 0, decimal: 8 })),
          g = t.useMemo(() => i(u.chain), [i, u.chain]),
          f = t.useMemo(() => i(a.chain), [i, a.chain]),
          {
            data: n,
            isFetching: b,
            error: O,
          } = Jt(
            {
              senderAddress: f,
              collateralAddress: g,
              amountPercentage: o.toFixed(),
              collateralAsset: u.toString(),
              repayAsset: a.toString(),
            },
            { skip: !o.toFixed() }
          ),
          {
            canStream: N,
            toggleStream: M,
            stream: C,
          } = Ve(
            (y = n == null ? void 0 : n.streamingSwap) == null ? void 0 : y.memo
          ),
          r = t.useMemo(
            () => (C && n != null && n.streamingSwap ? n.streamingSwap : n),
            [n, C]
          );
        t.useEffect(() => {
          (() => {
            if (!r || O) return p(new _({ value: 0, decimal: 8 }));
            const v = new _({ value: r.repayAssetAmount, decimal: a.decimal });
            p(v);
          })();
        }, [a, r, O]);
        const h = t.useMemo(() => {
            var v, P, T;
            return {
              estimatedTime: n == null ? void 0 : n.estimatedTime,
              expectedOutput: (n == null ? void 0 : n.repayAssetAmount) || "",
              expectedOutputUSD:
                (n == null ? void 0 : n.repayAssetAmount) || "",
              streamingSwap: {
                estimatedTime:
                  (v = n == null ? void 0 : n.streamingSwap) == null
                    ? void 0
                    : v.estimatedTime,
                expectedOutput:
                  ((P = n == null ? void 0 : n.streamingSwap) == null
                    ? void 0
                    : P.repayAssetAmount) || "",
                expectedOutputUSD:
                  ((T = n == null ? void 0 : n.streamingSwap) == null
                    ? void 0
                    : T.repayAssetAmountUSD) || "",
              },
            };
          }, [
            n == null ? void 0 : n.estimatedTime,
            n == null ? void 0 : n.repayAssetAmount,
            (d = n == null ? void 0 : n.streamingSwap) == null
              ? void 0
              : d.estimatedTime,
            (k = n == null ? void 0 : n.streamingSwap) == null
              ? void 0
              : k.repayAssetAmount,
            ($ = n == null ? void 0 : n.streamingSwap) == null
              ? void 0
              : $.repayAssetAmountUSD,
          ]),
          x = t.useMemo(
            () =>
              new _({
                value: (r == null ? void 0 : r.expectedDebtRepaid) || 0,
                decimal: 8,
              }),
            [r]
          ),
          w = t.useMemo(() => {
            if (!r) return 0;
            const { expectedDebtRepaid: v, repayAssetAmountUSD: P } = r,
              T = Number(v);
            return ((Number(P) - T) / T) * 100;
          }, [r]),
          j = t.useMemo(() => {
            var T;
            const v =
                (T = r == null ? void 0 : r.fees.THOR) == null
                  ? void 0
                  : T.find((E) => E.type === "outbound"),
              P =
                ((v == null ? void 0 : v.totalFeeUSD) || 0) -
                ((v == null ? void 0 : v.affiliateFeeUSD) || 0);
            return new _({ value: P, decimal: 8 });
          }, [r == null ? void 0 : r.fees.THOR]);
        return {
          isLoading: b,
          repayAssetAmount: l,
          repayQuote: n,
          canStream: N,
          stream: C,
          toggleStream: M,
          repayOptimizeQuoteDetails: h,
          repaySlippage: w,
          repayDebtAmount: x,
          totalFeeUsd: j,
        };
      },
      It = ({
        loan: {
          collateralCurrent: a,
          debtCurrent: u,
          asset: o,
          lastOpenHeight: i,
        },
        setBorrowTab: l,
        setCollateralAsset: p,
      }) => {
        var ye;
        const [g, f] = t.useState(!1),
          [n, b] = t.useState(!1),
          [O, N] = t.useState(new _({ decimal: 2, value: 0 })),
          [M, C] = t.useState(),
          [r, h] = t.useState(
            ae.from({
              asset: "ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            })
          ),
          { getBlockTimeDifference: x } = Be(),
          { getMaxBalance: w } = $e(),
          { setIsConnectModalOpen: j } = Re(),
          { getWalletAddress: y } = ne(),
          d = Is({ includeRune: !0 }),
          { data: k } = ze([o, r]),
          $ = t.useCallback((F) => {
            F.stopPropagation(), f((U) => !U);
          }, []),
          v = Fe(O, 500),
          P = x(i + Ae),
          T = t.useMemo(() => y(r.chain), [y, r.chain]),
          E = P <= 0,
          {
            repayAssetAmount: S,
            isLoading: ie,
            repayQuote: W,
            stream: re,
            canStream: le,
            toggleStream: oe,
            repayOptimizeQuoteDetails: z,
            repaySlippage: R,
            repayDebtAmount: B,
            totalFeeUsd: me,
          } = Pt({
            asset: r,
            collateralAsset: o,
            percentage: v,
            totalAmount: u,
            hasLoanMatured: E,
          }),
          { isApproved: ce, isLoading: pe } = Es({
            assetValue: r.set(S.getValue("string")),
            force: !0,
          }),
          Oe = fs({ asset: r }),
          Me = t.useMemo(() => {
            var U;
            const F =
              ((U = k[o.toString()]) == null ? void 0 : U.price_usd) || 0;
            return a.mul(F).toCurrency("$");
          }, [o, a, k]),
          ge = t.useMemo(() => r.toString(), [r]),
          he = t.useMemo(() => {
            var U;
            const F = ((U = k[ge]) == null ? void 0 : U.price_usd) || 0;
            return S.mul(F).getValue("number");
          }, [S, ge, k]);
        t.useEffect(() => {
          T ? w(r).then((F) => C(F)) : C(void 0);
        }, [T, r, w]);
        const J = t.useMemo(
            () => ({ asset: r, value: S, balance: M, usdPrice: he }),
            [r, S, M, he]
          ),
          fe = t.useMemo(
            () => !(!E || S.lte(0) || (M != null && M.lt(S))),
            [S, M, E]
          ),
          V = t.useCallback(() => {
            N(new _({ decimal: 2, value: 0 }));
          }, []),
          {
            openRepayConfirm: ee,
            handleRepay: H,
            isConfirmOpen: Q,
            closeRepayConfirm: ke,
          } = Tt({
            repayAsset: r,
            collateralAsset: o,
            amount: S,
            onSuccess: V,
            repayQuote: W,
            stream: re,
          });
        t.useEffect(() => {
          !E && v.gt(0) && Le(s("views.lending.maturityError"));
        }, [v, E]);
        const L = je(P, { approx: !0 });
        return e.jsxs(
          c,
          {
            alignSelf: "stretch",
            direction: "column",
            justify: "center",
            w: "full",
            children: [
              e.jsxs(de, {
                className: "!rounded-3xl flex-col flex !gap-0 !px-3 !py-3",
                variant: "filledContainerSecondary",
                children: [
                  e.jsxs(c, {
                    direction: { base: "column", lg: "row" },
                    flex: 4,
                    gap: 2,
                    children: [
                      e.jsxs(c, {
                        flex: 5,
                        children: [
                          e.jsx(Se, {
                            children: e.jsxs(c, {
                              gap: 1,
                              children: [
                                e.jsx(c, {
                                  align: "center",
                                  children: e.jsx(se, { asset: o, size: 36 }),
                                }),
                                e.jsxs(c, {
                                  direction: "column",
                                  children: [
                                    e.jsx(m, {
                                      children: `${a.toSignificant(4)} ${
                                        o.symbol
                                      }`,
                                    }),
                                    e.jsx(m, { children: Me }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx(Se, {
                            children: e.jsx(m, {
                              textAlign: "end",
                              children: `$${u.toFixed(2)}`,
                            }),
                          }),
                          e.jsx(Se, {
                            children: e.jsx(m, {
                              variant: E ? "green" : "primary",
                              children: E
                                ? s("views.lending.repayAvailable")
                                : L,
                            }),
                          }),
                        ],
                      }),
                      e.jsxs(c, {
                        align: "center",
                        direction: "row",
                        flex: { md: 2, lg: 3, xl: 3 },
                        gap: 2,
                        justify: "end",
                        mt: { base: 2, md: 0 },
                        pl: { md: 4, lg: 8 },
                        children: [
                          e.jsx(Y, {
                            flex: 1,
                            onClick: (F) => {
                              F.stopPropagation(), l(), p(o);
                            },
                            variant: "outlinePrimary",
                            children: s("views.lending.borrow"),
                          }),
                          e.jsx(Y, {
                            flex: 1,
                            onClick: $,
                            rightIcon: e.jsx(I, {
                              className: ue({ "-rotate-180": g }),
                              name: "chevronDown",
                              size: 14,
                            }),
                            variant: "outlineSecondary",
                            children: s("views.lending.repay"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(it, {
                    in: g,
                    children: e.jsx(c, {
                      align: "center",
                      flex: 1,
                      justify: "center",
                      w: "full",
                      children: e.jsx(de, {
                        bg: "borderPrimary",
                        borderRadius: "3xl",
                        mt: { base: 2, md: 4 },
                        variant: "filledContainerPrimary",
                        w: "full",
                        children: e.jsxs(c, {
                          align: "center",
                          direction: "column",
                          display: "flex",
                          flex: 1,
                          justify: "center",
                          children: [
                            e.jsxs(c, {
                              alignSelf: "stretch",
                              direction: { base: "column", lg: "row" },
                              flex: 1,
                              gap: { base: 4, lg: 8 },
                              children: [
                                e.jsxs(c, {
                                  direction: "column",
                                  flex: 1,
                                  children: [
                                    e.jsxs(c, {
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      children: [
                                        e.jsxs(m, {
                                          textStyle: "caption",
                                          children: [
                                            s("views.lending.repayAsset"),
                                            ":",
                                          ],
                                        }),
                                        e.jsx(Cs, {
                                          showAssetType: !0,
                                          assets: d,
                                          onSelect: h,
                                          selected: J.asset,
                                        }),
                                      ],
                                    }),
                                    e.jsx(Ps, {
                                      highlightDisabled: !0,
                                      className: "!p-0",
                                      onChange: N,
                                      percent: O,
                                      slideClassName: "!pb-0",
                                      title: s("views.lending.repayPercent"),
                                    }),
                                    e.jsx(We, {
                                      canStream: le,
                                      outputAsset: J.asset,
                                      quote: z,
                                      stream: re,
                                      title: s("views.lending.txOptimizeTitle"),
                                      toggleStream: oe,
                                    }),
                                  ],
                                }),
                                e.jsxs(c, {
                                  direction: "column",
                                  flex: 1,
                                  children: [
                                    e.jsx(c, {
                                      alignItems: "center",
                                      minH: "40px",
                                      children: e.jsxs(m, {
                                        textStyle: "caption",
                                        children: [
                                          s("views.lending.repayAmount"),
                                          ":",
                                        ],
                                      }),
                                    }),
                                    e.jsxs(c, {
                                      children: [
                                        e.jsx(c, {
                                          flex: 1,
                                          justifyContent: "space-between",
                                          children: ie
                                            ? e.jsx(c, {
                                                alignItems: "center",
                                                minH: "44px",
                                                children: e.jsx(I, {
                                                  spin: !0,
                                                  color: "primary",
                                                  name: "loader",
                                                  size: 22,
                                                }),
                                              })
                                            : e.jsx(Ts, {
                                                disabled: !0,
                                                amountValue: S,
                                                className:
                                                  "!text-2xl  pt-[1.5px] md:!w-full",
                                              }),
                                        }),
                                        e.jsx(As, {
                                          showAssetType: !0,
                                          className: "cursor-default p-2",
                                          selected: J.asset,
                                        }),
                                      ],
                                    }),
                                    e.jsx(c, {
                                      mt: 3,
                                      children: e.jsxs(c, {
                                        flex: 1,
                                        justifyContent: "space-between",
                                        children: [
                                          ie
                                            ? e.jsx(c, {
                                                alignItems: "center",
                                                minH: "21px",
                                                children: e.jsx(I, {
                                                  spin: !0,
                                                  color: "secondary",
                                                  name: "loader",
                                                  size: 16,
                                                }),
                                              })
                                            : e.jsx(m, {
                                                variant: "secondary",
                                                children: J.usdPrice.toFixed(2),
                                              }),
                                          e.jsx(c, {
                                            mr: 4,
                                            children: e.jsxs(m, {
                                              variant: "secondary",
                                              children: [
                                                s("common.balance"),
                                                ":",
                                                " ",
                                                ((ye = J.balance) == null
                                                  ? void 0
                                                  : ye.toSignificant(6)) || "0",
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    !!W &&
                                      e.jsxs(c, {
                                        direction: "column",
                                        children: [
                                          e.jsx(c, {
                                            className:
                                              "border-0 border-t border-solid border-bottom border-light-typo-gray dark:border-dark-typo-gray !border-opacity-20 mt-3 mb-1",
                                          }),
                                          e.jsx(G, {
                                            label: "Repay Slippage",
                                            showBorder: !1,
                                            size: "sm",
                                            value: me.toCurrency(),
                                          }),
                                        ],
                                      }),
                                    R > K &&
                                      e.jsx(c, {
                                        mt: 3,
                                        children: e.jsx(be, {
                                          title: e.jsx(m, {
                                            color: "brand.yellow",
                                            mx: 2,
                                            textStyle: "caption",
                                            children: s(
                                              "views.lending.slippageRepayWarning"
                                            ),
                                          }),
                                          type: "warn",
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            S.getValue("number") > 0 && (!ce || pe)
                              ? e.jsx(Y, {
                                  stretch: !0,
                                  disabled: pe,
                                  loading: pe,
                                  mt: 6,
                                  onClick: () => b(!0),
                                  size: "md",
                                  variant: "fancy",
                                  children: s("common.approve"),
                                })
                              : e.jsx(Y, {
                                  stretch: !0,
                                  disabled: !fe,
                                  error: !fe,
                                  mt: 6,
                                  onClick: (F) => {
                                    if ((F.stopPropagation(), !T)) {
                                      j(!0);
                                      return;
                                    }
                                    ee();
                                  },
                                  size: "md",
                                  variant: "fancy",
                                  children: T
                                    ? s("views.lending.repay")
                                    : s("common.connectWallet"),
                                }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              e.jsx(zs, {
                handleApprove: Oe,
                inputAsset: r,
                setVisible: b,
                visible: n,
              }),
              e.jsx(_t, {
                amount: S,
                asset: r,
                expectedOutputAmount: S,
                inputAmount: B,
                isOpened: Q,
                onClose: ke,
                onConfirm: H,
                slippagePercent: R,
                tabLabel: s("views.lending.repay"),
              }),
            ],
          },
          `${o.symbol} + ${o.symbol}`
        );
      };
    var xe = ((a) => ((a.Borrow = "borrow"), (a.Repay = "repay"), a))(xe || {}),
      Ce = ((a) => (
        (a[(a.Borrow = 0)] = "Borrow"), (a[(a.Positions = 1)] = "Positions"), a
      ))(Ce || {});
    let He, Qe, qe, Ge, Ae, Ne, Ke, Je;
    (He = ({
      setTab: a,
      setViewTab: u,
      setCollateralAsset: o,
      refreshLoans: i,
      totalBorrowed: l,
      totalCollateral: p,
      loans: g,
      isLoading: f,
    }) => {
      const n = xt(),
        { setIsConnectModalOpen: b } = Re(),
        { hasWallet: O } = ne(),
        N = () => {
          a(xe.Borrow), u(Ce.Borrow);
        },
        M = t.useMemo(
          () => [
            {
              header: s("views.lending.totalCollateralValue"),
              value: p != null && p.gt(0) ? n(p.toFixed(2)) : "-",
              tooltipText:
                "Fair market value of the assets used to secure a loan",
            },
            {
              header: s("views.lending.totalDebtValue"),
              value: l != null && l.gt(0) ? n(l) : "-",
              tooltipText: "Value of borrowed assets",
            },
          ],
          [n, l, p]
        );
      return (
        t.useEffect(() => {
          i();
        }, [i]),
        e.jsx(Zt, {
          alignSelf: "stretch",
          w: "full",
          children: O
            ? e.jsxs(c, {
                direction: "column",
                gap: 3,
                mt: 6,
                children: [
                  e.jsx(c, {
                    flex: 2,
                    justifyContent: "space-between",
                    w: "full",
                    children: e.jsxs(c, {
                      alignItems: "center",
                      flex: 1,
                      justifyContent: "space-between",
                      children: [
                        e.jsx(m, {
                          ml: 3,
                          mr: 2,
                          textStyle: "h3",
                          children: s("views.lending.myLoans"),
                        }),
                        e.jsx(_s, { loading: f, onLoad: i, size: 16 }),
                      ],
                    }),
                  }),
                  e.jsx(c, {
                    direction: { base: "column", md: "row" },
                    flex: 2,
                    gap: 8,
                    justifyContent: "space-between",
                    mt: 4,
                    w: "full",
                    children: M.map((C) =>
                      e.jsx(
                        kt,
                        {
                          header: C.header,
                          tooltipText: C.tooltipText,
                          value: C.value,
                        },
                        C.header
                      )
                    ),
                  }),
                  e.jsxs(c, {
                    direction: "column",
                    gap: 2,
                    justify: "center",
                    mt: 6,
                    children: [
                      !!g.length &&
                        e.jsx(c, {
                          direction: "row",
                          px: "12px",
                          children: e.jsxs(c, {
                            direction: "row",
                            flex: 1,
                            gap: 2,
                            children: [
                              e.jsxs(c, {
                                flex: 5,
                                children: [
                                  e.jsx(c, {
                                    flex: 1,
                                    children: e.jsx(m, {
                                      color: "secondary",
                                      ml: 3,
                                      textStyle: "caption",
                                      children: s("views.lending.collateral"),
                                    }),
                                  }),
                                  e.jsx(c, {
                                    flex: 1,
                                    children: e.jsx(m, {
                                      color: "secondary",
                                      textStyle: "caption",
                                      children: s("views.lending.debt"),
                                    }),
                                  }),
                                  e.jsx(c, {
                                    flex: 1,
                                    children: e.jsx(te, {
                                      content: s(
                                        "views.lending.unlockDescription"
                                      ),
                                      children: e.jsxs(c, {
                                        align: "center",
                                        flex: 1,
                                        gap: 1,
                                        children: [
                                          e.jsx(m, {
                                            color: "secondary",
                                            textStyle: "caption",
                                            children: s("views.lending.unlock"),
                                          }),
                                          e.jsx(I, {
                                            color: "secondary",
                                            name: "infoCircle",
                                            size: 14,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx(c, {
                                display: { lg: "flex", base: "none" },
                                flex: 3,
                                pl: "32px",
                                children: e.jsx(m, {
                                  color: "secondary",
                                  textStyle: "caption",
                                  children: s("views.lending.actions"),
                                }),
                              }),
                            ],
                          }),
                        }),
                      g.length
                        ? g.map((C) =>
                            e.jsx(
                              It,
                              {
                                loan: C,
                                setBorrowTab: N,
                                setCollateralAsset: o,
                              },
                              C.asset.ticker
                            )
                          )
                        : e.jsx(c, {
                            justify: "center",
                            w: "full",
                            children: f
                              ? e.jsx(I, { spin: !0, name: "loader", size: 32 })
                              : e.jsx(m, {
                                  children: "No open loans to display",
                                }),
                          }),
                    ],
                  }),
                ],
              })
            : e.jsx(c, {
                alignItems: "center",
                alignSelf: "stretch",
                justifyContent: "center",
                w: "full",
                children: e.jsx(Y, {
                  stretch: !0,
                  alignSelf: "center",
                  maxW: "460px",
                  mt: 3,
                  onClick: () => b(!0),
                  size: "lg",
                  variant: "fancy",
                  children: s("common.connectWallet"),
                }),
              }),
        })
      );
    }),
      (Qe = ({
        recipientAddress: a,
        senderAddress: u,
        assetIn: o,
        assetOut: i,
        amount: l,
        slippage: p,
        estimatedLoanSizeUsd: g,
      }) => {
        var le, oe;
        const f = l.gte(0) ? l.toSignificant(8) : "0",
          n = Fe(f),
          b = Fe(p),
          { getWalletAddress: O } = ne(),
          N = t.useMemo(() => O(Xt.Ethereum), [O]),
          M = Os(N),
          C = t.useMemo(() => qe({ VTHORBalance: M, loanSizeUsd: g }), [M, g]),
          {
            currentData: r,
            error: h,
            isFetching: x,
          } = Yt(
            {
              affiliateBasisPoints: C,
              assetIn: o.toString(),
              assetOut: i.toString(),
              amount: n,
              slippage: b.toString(),
              senderAddress: u,
              recipientAddress: a,
            },
            { skip: l.lte(0), refetchOnMountOrArgChange: !0 }
          ),
          {
            canStream: w,
            toggleStream: j,
            stream: y,
          } = Ve(
            ((le = r == null ? void 0 : r.streamingSwap) == null
              ? void 0
              : le.memo) ||
              ((oe = r == null ? void 0 : r.calldata) == null
                ? void 0
                : oe.memo)
          ),
          d = t.useMemo(
            () => (y && r != null && r.streamingSwap ? r.streamingSwap : r),
            [r, y]
          ),
          k = t.useMemo(
            () =>
              new _({
                value: (d == null ? void 0 : d.expectedOutput) || 0,
                decimal: i.decimal,
              }),
            [i.decimal, d == null ? void 0 : d.expectedOutput]
          ),
          $ = t.useMemo(
            () =>
              ae.fromStringSync(
                i.toString(),
                d == null ? void 0 : d.expectedOutput
              ),
            [i, d == null ? void 0 : d.expectedOutput]
          ),
          v = t.useMemo(
            () =>
              new _({
                value: (d == null ? void 0 : d.expectedOutputMaxSlippage) || 0,
                decimal: i.decimal,
              }),
            [i.decimal, d == null ? void 0 : d.expectedOutputMaxSlippage]
          ),
          P = t.useMemo(
            () =>
              new _({
                value: (d == null ? void 0 : d.expectedDebtIssued) || 0,
                decimal: 8,
              }),
            [d == null ? void 0 : d.expectedDebtIssued]
          ),
          T = t.useMemo(() => k.sub(v), [k, v]),
          E = t.useMemo(
            () =>
              new _({
                value: (d == null ? void 0 : d.expectedOutputUSD) || 0,
                decimal: 8,
              }).sub(
                new _({
                  value:
                    (d == null ? void 0 : d.expectedOutputMaxSlippageUSD) || 0,
                  decimal: 8,
                })
              ),
            [
              d == null ? void 0 : d.expectedOutputMaxSlippageUSD,
              d == null ? void 0 : d.expectedOutputUSD,
            ]
          ),
          S = t.useMemo(
            () =>
              new _({
                value:
                  (d == null ? void 0 : d.expectedCollateralDeposited) || 0,
                decimal: o.decimal,
              }),
            [o.decimal, d == null ? void 0 : d.expectedCollateralDeposited]
          ),
          ie = t.useMemo(() => {
            var B;
            const z =
                (B = d == null ? void 0 : d.fees.THOR) == null
                  ? void 0
                  : B.find((me) => me.type === "outbound"),
              R =
                ((z == null ? void 0 : z.totalFeeUSD) || 0) -
                ((z == null ? void 0 : z.affiliateFeeUSD) || 0);
            return new _({ value: R, decimal: 8 });
          }, [d == null ? void 0 : d.fees.THOR]),
          W = t.useMemo(() => {
            var R;
            const z =
              (R = d == null ? void 0 : d.fees.THOR) == null
                ? void 0
                : R.find((B) => B.type === "outbound");
            return new _({
              value: (z == null ? void 0 : z.affiliateFeeUSD) || 0,
              decimal: 8,
            });
          }, [d == null ? void 0 : d.fees.THOR]);
        t.useEffect(() => {
          j(!!o.toString() && !!(r != null && r.streamingSwap));
        }, [o, r == null ? void 0 : r.streamingSwap, j]);
        const re = t.useMemo(() => {
          if (!r) return 0;
          const z = P.getValue("number"),
            R = k.getValue("number");
          return ((z - R - W.getValue("number")) / R) * 100;
        }, [r, W, P, k]);
        return {
          collateralAmount: S,
          expectedDebt: P,
          expectedOutput: k,
          expectedOutputMaxSlippage: v,
          hasError: !!h,
          borrowQuote: r,
          slippageAmount: T,
          slippageAmountUsd: E,
          totalFeeUsd: ie,
          isFetching: x,
          toggleStream: j,
          stream: y,
          canStream: w,
          expectedOutputAssetValue: $,
          borrowSlippage: re,
          exchangeFeeUsd: W,
        };
      }),
      (qe = ({ VTHORBalance: a, loanSizeUsd: u }) => {
        if (u < 100 || a.gte(5e5)) return "0";
        let o = 100;
        return (
          u > 25e3 && (o -= 20),
          u > 1e5 && (o -= 30),
          u > 25e4 && (o -= 40),
          u > 5e5 && (o -= 50),
          a.gte(1e3) && (o -= 20),
          a.gte(1e4) && (o -= 30),
          a.gte(1e5) && (o -= 40),
          `${Math.floor(o)}`
        );
      }),
      (Ge = "https://docs.thorchain.org/thorchain-finance/lending"),
      (Ae = 432e3),
      (Ne = !1),
      (Ke = [
        { value: 1, text: "1%" },
        { value: 3, text: "3%" },
        { value: 5, text: "5%" },
        { value: 10, text: "10%" },
      ]),
      (Je = () => {
        const a = lt(),
          u = Nt(),
          { getMaxBalance: o } = $e(),
          { isChainHalted: i } = pt(),
          { setIsConnectModalOpen: l } = Re(),
          { getWalletAddress: p } = ne(),
          { customRecipientMode: g, setCustomRecipientMode: f } = es(),
          { isLendingPaused: n } = pt(),
          { tokens: b } = ts(),
          O = Ds(b, !0),
          { assetInputProps: N, assets: M } = gs(O, { thorchainPriority: !0 }),
          [C, r] = t.useState(10),
          {
            asset: h,
            setAsset: x,
            amount: w,
            setAmount: j,
          } = ys(ss.Lending, ds),
          [y, d] = t.useState(
            ae.from({
              asset: "ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            })
          ),
          [k, $] = t.useState(""),
          [v, P] = t.useState(),
          [T, E] = t.useState(),
          S = t.useMemo(() => u.find((D) => D.asset.eqAsset(h)), [h, u]),
          [ie, W] = t.useState(!1),
          [re, le] = t.useState(xe.Borrow),
          [oe, z] = t.useState(Ce.Borrow),
          { data: R } = ze([h, y]),
          [B, me] = t.useState(!0),
          ce = t.useMemo(() => {
            var D;
            return (
              (((D = R[h.toString()]) == null ? void 0 : D.price_usd) || 0) *
              w.getValue("number")
            );
          }, [w, h, R]),
          {
            refreshLoans: pe,
            totalBorrowed: Oe,
            totalCollateral: Me,
            loansData: ge,
            isLoading: he,
          } = Ot(),
          { estimateTimeFromBlocks: J } = Be(),
          fe = t.useMemo(
            () => (Number(S == null ? void 0 : S.ltvPercentage) * ce) / 100,
            [S == null ? void 0 : S.ltvPercentage, ce]
          ),
          V = t.useMemo(() => p(h.chain), [p, h.chain]),
          ee = t.useMemo(() => p(y.chain), [p, y.chain]);
        t.useEffect(() => {
          $(ee || "");
        }, [ee]);
        const {
            expectedDebt: H,
            expectedOutput: Q,
            hasError: ke,
            borrowQuote: L,
            collateralAmount: ye,
            isFetching: F,
            totalFeeUsd: U,
            stream: De,
            canStream: zt,
            toggleStream: Et,
            expectedOutputAssetValue: Ze,
            borrowSlippage: we,
            exchangeFeeUsd: _e,
          } = Qe({
            slippage: C,
            senderAddress: V,
            recipientAddress: k,
            amount: w,
            assetIn: h,
            assetOut: y,
            estimatedLoanSizeUsd: fe,
          }),
          Xe = t.useMemo(() => {
            var D;
            return (
              (((D = R[y.toString()]) == null ? void 0 : D.price_usd) || 0) *
                Number(Q.toFixed(2)) || 0
            );
          }, [y, Q, R]);
        t.useEffect(() => {
          V ? o(h).then((D) => P(D)) : P(void 0);
        }, [V, h, o]),
          t.useEffect(() => {
            ee ? o(y).then((D) => E(D)) : E(void 0);
          }, [ee, y, o]);
        const Te = t.useMemo(
            () =>
              H != null && H.gt(0)
                ? H == null
                  ? void 0
                  : H.toCurrency()
                : "-",
            [H]
          ),
          Ye = t.useCallback(async () => {
            var at, nt;
            const { getAddressValidator: D } = await Ee(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (q) => (await q.__tla, q))
                    .then((q) => q.hb),
                __vite__mapDeps([0, 1])
              ),
              { thorchain: Z } = await (
                await Ee(
                  () =>
                    import("./assets/index-POi8GhpC.js")
                      .then(async (q) => (await q.__tla, q))
                      .then((q) => q.hc),
                  __vite__mapDeps([0, 1])
                )
              ).getSwapKitClient();
            if (!Z) throw new Error("SwapKit client not found");
            const X = (await D())({ chain: y.chain, address: k });
            if (typeof X == "boolean" && !X)
              throw new Error("Invalid recipient address");
            if (!L) throw new Error("Invalid lending quote");
            return Z.loan({
              type: "open",
              assetValue: h.add(w),
              minAmount: y.add(Q),
              memo: De
                ? ((at = L.streamingSwap) == null ? void 0 : at.memo) ||
                  ((nt = L.calldata) == null ? void 0 : nt.memoStreamingSwap)
                : L.memo,
            });
          }, [w, y, L, h, Q, k, De]),
          Lt = t.useCallback(
            async (D) => {
              W(!1);
              const Z = yt();
              a(
                ot({
                  id: Z,
                  label: s("txManager.openLoan", {
                    asset: h.ticker,
                    amount: D,
                  }),
                  type: ve.TC_LENDING_OPEN,
                  inChain: h.chain,
                })
              );
              try {
                const X = await Ye();
                j(new _({ value: 0, decimal: h.decimal })),
                  X &&
                    a(
                      ct({
                        id: Z,
                        txid: X,
                        timestamp: new Date(),
                        advancedTracker: !0,
                        initialPayload: L
                          ? { isLending: !0, ...L, fromAddress: V }
                          : void 0,
                        type: ve.TC_LENDING,
                      })
                    );
              } catch (X) {
                dt(X),
                  Le(s("txManager.failed"), void 0, void 0, X),
                  a(mt({ id: Z, status: "error" }));
              }
            },
            [a, L, V, h.chain, h.decimal, h.ticker, Ye, j]
          ),
          Rt = t.useMemo(
            () =>
              !(k && B) || n || Ne || w.lte(0) || (v && w.gt(v)) || i[h.chain],
            [k, n, w, h.chain, v, i, B]
          ),
          et = re === xe.Borrow ? s("common.borrow") : s("common.repay"),
          tt = t.useMemo(
            () => ({ asset: h, value: w, balance: v, usdPrice: ce }),
            [h, w, v, ce]
          ),
          st = t.useMemo(
            () => ({ asset: Ze || y, value: Q, balance: T, usdPrice: Xe }),
            [Ze, y, Q, T, Xe]
          ),
          $t = t.useMemo(
            () =>
              k
                ? L
                  ? et
                  : s("views.swap.noValidQuote")
                : s("views.swap.connectOrFillRecipient"),
            [L, k, et]
          ),
          Pe = t.useMemo(() => as.duration(J(Ae)).asDays(), [J]),
          Ft = t.useMemo(
            () => [
              { label: s("views.lending.expectedDebt"), value: `${Te}` },
              {
                label: s("views.lending.borrowSlippage"),
                value: e.jsx(Ct, {
                  depth: (S == null ? void 0 : S.derivedDepthPercentage) || 0,
                  slippagePercent: we,
                  totalFeeUsd: U,
                }),
              },
              {
                label: s("views.lending.repayMaturity"),
                value: e.jsx(A, {
                  center: !0,
                  children: e.jsx(ns, {
                    tooltip: s("views.lending.maturityDescription", {
                      days: Pe,
                    }),
                    value: e.jsxs(m, {
                      textStyle: "caption",
                      children: [Pe, " ", s("views.savings.days")],
                    }),
                  }),
                }),
              },
              {
                label: s("views.lending.exchangeFee"),
                value: _e.gt(0)
                  ? e.jsx(m, {
                      textStyle: "caption",
                      children: _e.toCurrency(),
                    })
                  : e.jsx(m, {
                      textStyle: "caption",
                      variant: "green",
                      children: "FREE",
                    }),
              },
            ],
            [we, S == null ? void 0 : S.derivedDepthPercentage, Te, _e, Pe, U]
          ),
          Wt = t.useCallback(
            (D) => {
              j(D);
            },
            [j]
          );
        return e.jsxs(A, {
          col: !0,
          className: "w-full max-w-[880px] flex self-center gap-3 mt-2",
          children: [
            e.jsx(is, {
              content: "Deposit and borrow native assets with LIGHTSwap AI LENDING",
              keywords: "Borrow, Lending, LIGHTSwap AI, APY, Native assets",
              title: s("views.lending.borrow"),
            }),
            (n || Ne) &&
              e.jsx(rs, {
                announcement: {
                  type: ls.Error,
                  message: s("views.lending.lendingPaused"),
                },
                showClose: !1,
              }),
            e.jsxs(ws, {
              index: oe,
              onChange: z,
              children: [
                e.jsxs(js, {
                  children: [
                    e.jsx(gt, { children: s("views.lending.borrow") }),
                    e.jsx(gt, { children: s("views.lending.myLoans") }),
                  ],
                }),
                e.jsxs(bs, {
                  children: [
                    e.jsx(ht, {
                      children: e.jsxs(c, {
                        direction: "column",
                        gap: 3,
                        maxWidth: "480px",
                        mx: "auto",
                        children: [
                          e.jsx(A, {
                            className: "flex w-full justify-between",
                            children: e.jsx(A, {
                              alignCenter: !0,
                              children: e.jsx(m, {
                                className: "ml-3 mr-2",
                                textStyle: "h3",
                                children: s("views.lending.header", {
                                  asset: y.ticker,
                                }),
                              }),
                            }),
                          }),
                          e.jsxs(c, {
                            direction: "row",
                            justify: "space-between",
                            children: [
                              e.jsxs(c, {
                                alignItems: "center",
                                direction: "row",
                                flexWrap: "wrap",
                                gap: 1,
                                px: 3,
                                children: [
                                  e.jsx(m, {
                                    fontWeight: "medium",
                                    noOfLines: 1,
                                    textStyle: "body",
                                    variant: "primary",
                                    children: s(
                                      "views.lending.liquidationDisclaimer",
                                      { asset: h.ticker, borrowAsset: y.ticker }
                                    ),
                                  }),
                                  e.jsx(Ie, {
                                    className:
                                      "text-twitter-blue cursor-pointer",
                                    to: Ge,
                                    children: e.jsx(m, {
                                      fontWeight: "medium",
                                      noOfLines: 1,
                                      textStyle: "caption",
                                      variant: "blue",
                                      children: `${s(
                                        "common.learnMore"
                                      )} \u2192`,
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs(us, {
                                children: [
                                  e.jsx(A, {
                                    children: e.jsx(m, {
                                      textStyle: "caption",
                                      children: s(
                                        "views.swap.transactionSettings"
                                      ),
                                    }),
                                  }),
                                  e.jsx(A, {
                                    className: "space-x-2",
                                    children: e.jsx(m, {
                                      textStyle: "caption-xs",
                                      variant: "secondary",
                                      children: s(
                                        "views.swap.slippageTolerance"
                                      ),
                                    }),
                                  }),
                                  e.jsxs(A, {
                                    alignCenter: !0,
                                    className: "w-full space-x-2",
                                    children: [
                                      e.jsx(os, {
                                        stretch: !0,
                                        border: "rounded",
                                        className: "text-right",
                                        containerClassName:
                                          "bg-light-gray-light dark:bg-dark-gray-light bg-opacity-40",
                                        onChange: (D) =>
                                          r(Number(D.target.value)),
                                        placeholder: s("common.percentage"),
                                        symbol: "%",
                                        type: "number",
                                        value: C,
                                      }),
                                      Ke.map(({ value: D, text: Z }) =>
                                        e.jsx(
                                          Y,
                                          {
                                            onClick: () => r(D),
                                            size: "sm",
                                            variant:
                                              C === D
                                                ? "primary"
                                                : "outlineTint",
                                            children: e.jsx(m, {
                                              textStyle: "caption-xs",
                                              children: Z,
                                            }),
                                          },
                                          D
                                        )
                                      ),
                                    ],
                                  }),
                                  e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx(A, {
                                        children: e.jsx(m, {
                                          textStyle: "caption",
                                          children: s(
                                            "views.setting.transactionMode"
                                          ),
                                        }),
                                      }),
                                      e.jsxs(A, {
                                        alignCenter: !0,
                                        justify: "between",
                                        children: [
                                          e.jsxs(A, {
                                            alignCenter: !0,
                                            className: "space-x-2",
                                            children: [
                                              e.jsx(m, {
                                                textStyle: "caption-xs",
                                                variant: "secondary",
                                                children: s(
                                                  "views.setting.customRecipientMode"
                                                ),
                                              }),
                                              e.jsx(te, {
                                                content: s(
                                                  "common.customRecipientTooltip"
                                                ),
                                                place: "top",
                                                children: e.jsx(I, {
                                                  color: "secondary",
                                                  name: "questionCircle",
                                                  size: 16,
                                                }),
                                              }),
                                            ],
                                          }),
                                          e.jsx(ps, {
                                            checked: g,
                                            onChange: () => f(!g),
                                            selectedText: "ON",
                                            unselectedText: "OFF",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(A, {
                            row: !0,
                            className: "justify-center gap-5",
                            children: e.jsxs(A, {
                              col: !0,
                              className: ue("flex h-full"),
                              children: [
                                e.jsx(cs, {
                                  className:
                                    "!rounded-2xl md:!rounded-3xl !p-4 flex-col items-center self-stretch mt-2 space-y-1 shadow-lg md:w-full md:h-auto max-w-[480px]",
                                  size: "lg",
                                  children: e.jsxs(c, {
                                    direction: "column",
                                    gap: 2,
                                    children: [
                                      e.jsxs(c, {
                                        direction: "column",
                                        children: [
                                          e.jsx(c, {
                                            alignItems: "center",
                                            direction: "row",
                                            justifyContent: "space-between",
                                            mr: 2,
                                            children: e.jsx(m, {
                                              mb: 1,
                                              ml: 5,
                                              textStyle: "caption",
                                              children: s(
                                                "views.lending.collateral"
                                              ),
                                            }),
                                          }),
                                          e.jsx(ut, {
                                            noFilters: !0,
                                            hideZeroPrice: !0,
                                            AssetListComponent: bt,
                                            assets: u,
                                            className: "flex-1 !py-1",
                                            displayAssetTypeComponent: e.jsxs(
                                              A,
                                              {
                                                center: !0,
                                                className: "gap-1",
                                                children: [
                                                  e.jsx(m, {
                                                    fontWeight: "light",
                                                    textStyle: "caption",
                                                    textTransform: "uppercase",
                                                    variant: "secondary",
                                                    children: "LTV",
                                                  }),
                                                  e.jsx(m, {
                                                    textStyle: "caption",
                                                    variant: "primaryBtn",
                                                    children:
                                                      S != null &&
                                                      S.ltvPercentage
                                                        ? `${S.ltvPercentage}%`
                                                        : "N/A",
                                                  }),
                                                ],
                                              }
                                            ),
                                            onAssetChange: x,
                                            onValueChange: Wt,
                                            poolAsset: tt,
                                            selectedAsset: tt,
                                          }),
                                        ],
                                      }),
                                      e.jsxs(c, {
                                        direction: "column",
                                        mb: 2,
                                        children: [
                                          e.jsx(m, {
                                            mb: 1,
                                            ml: 5,
                                            textStyle: "caption",
                                            children: s("views.lending.borrow"),
                                          }),
                                          e.jsx(ut, {
                                            hideZeroPrice: !0,
                                            ...N,
                                            disabled: !0,
                                            assets: M.filter(
                                              (D) => D.asset.type !== "Synth"
                                            ),
                                            className: "flex-1 !py-1",
                                            onAssetChange: d,
                                            poolAsset: st,
                                            selectedAsset: st,
                                          }),
                                          !!V &&
                                            e.jsx(c, {
                                              alignContent: "stretch",
                                              flex: 1,
                                              mt: 1,
                                              children: e.jsx(Ms, {
                                                isOutputWalletConnected: !!ee,
                                                outputAssetChain: y.chain,
                                                recipient: k,
                                                setIsValidRecipient: me,
                                                setRecipient: $,
                                              }),
                                            }),
                                        ],
                                      }),
                                      e.jsx(We, {
                                        canStream: zt,
                                        outputAsset: y,
                                        quote: L,
                                        stream: De,
                                        title: s(
                                          "views.lending.txOptimizeTitle"
                                        ),
                                        toggleStream: Et,
                                      }),
                                      e.jsx(xs, {
                                        horizontalInset: !0,
                                        items: Ft,
                                        size: "sm",
                                      }),
                                      we > K &&
                                        e.jsx(c, {
                                          mt: 3,
                                          children: e.jsx(be, {
                                            title: e.jsx(m, {
                                              color: "brand.yellow",
                                              mx: 2,
                                              textStyle: "caption",
                                              children: s(
                                                "views.lending.slippageBorrowWarning"
                                              ),
                                            }),
                                            type: "warn",
                                          }),
                                        }),
                                      e.jsx(Mt, {
                                        address: V,
                                        disabled: Rt,
                                        handleSubmit: () => W(!0),
                                        hasError: !w || ke || n,
                                        label: $t,
                                        loading: F,
                                        setIsConnectModalOpen: l,
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx(St, {
                                  amount: w,
                                  asset: y,
                                  collateralAmount: ye,
                                  collateralAsset: h,
                                  estimatedTime:
                                    L == null ? void 0 : L.estimatedTime,
                                  expectedDebtInfo: Te,
                                  expectedOutputAmount: Q,
                                  isOpened: ie,
                                  onClose: () => W(!1),
                                  onConfirm: Lt,
                                  slippagePercent: we,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    e.jsx(ht, {
                      children: e.jsx(He, {
                        isLoading: he,
                        loans: ge,
                        refreshLoans: pe,
                        setCollateralAsset: x,
                        setTab: le,
                        setViewTab: z,
                        totalBorrowed: Oe,
                        totalCollateral: Me,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }),
      (wt = Je);
  });
export { $s as __tla, wt as default };
