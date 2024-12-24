const __vite__fileDeps = [
    "assets/index-POi8GhpC.js",
    "assets/index-CWjS2nv2.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  cn as s,
  cv as e,
  cJ as o,
  cL as H,
  cM as Z,
  cz as j,
  cA as r,
  e9 as st,
  cI as X,
  cx as B,
  ea as at,
  eb as nt,
  cy as P,
  ec as it,
  d8 as rt,
  dI as ne,
  ed as E,
  di as U,
  dG as ee,
  cR as we,
  cP as V,
  dd as G,
  dt as ye,
  ee as Ce,
  L as k,
  F as Se,
  O as lt,
  dl as ot,
  ef as ct,
  dK as dt,
  cE as mt,
  df as ut,
  dm as pt,
  dk as ke,
  dp as ht,
  ds as xt,
  dq as gt,
  eg as ft,
  cT as bt,
  eh as vt,
  ei as jt,
  __tla as wt,
} from "./assets/index-POi8GhpC.js";
import { A as yt } from "./BNvyzkU_.js";
import { I as Ae } from "./L2srWHi_.js";
import { P as Ct } from "./vR8dScX-.js";
import { T as St } from "./CJGo2KxJ.js";
import { u as kt } from "./DLie8hhL.js";
import { u as At } from "./D-iJCSbt.js";
import { u as Nt } from "./DdtGuP0z.js";
import {
  g as Ne,
  u as _t,
  a as It,
  T as $t,
  b as Bt,
  c as _e,
  d as Tt,
  e as Ie,
  __tla as Et,
} from "./BVZCGQLB.js";
import { u as Mt } from "./C6gN5CZK.js";
import { C as Dt, __tla as Pt } from "./Bujnyu6O.js";
import { S as $e, C as Wt, s as Ft } from "./DdNi1zY5.js";
import {
  D as Rt,
  S as Vt,
  a as Ot,
  b as Lt,
  c as zt,
  d as qt,
  e as Ht,
  f as Ut,
  g as Gt,
} from "./DPMYbftn.js";
import { R as Kt } from "./DS3fE0e3.js";
import { u as Be } from "./Bcp9QaNf.js";
import { u as Te } from "./vSRfwVQ4.js";
import { u as Qt } from "./CNj6CspX.js";
import { g as Yt, a as Jt, b as Zt } from "./CNwSF2cA.js";
import { A as Xt } from "./BnkXd4Ft.js";
import { u as es, __tla as ts } from "./Bm7XAPj_.js";
import { v as ss } from "./Bb0RDO2T.js";
import "./CZ5SrGDV.js";
import "./CYwjOChi.js";
import "./DtctggWu.js";
import "./C8rAcL73.js";
import "./C3OMHbbi.js";
let Ee,
  as = Promise.all([
    (() => {
      try {
        return wt;
      } catch {}
    })(),
    (() => {
      try {
        return Et;
      } catch {}
    })(),
    (() => {
      try {
        return Pt;
      } catch {}
    })(),
    (() => {
      try {
        return ts;
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
          t = new a.Error().stack;
        t &&
          ((a._sentryDebugIds = a._sentryDebugIds || {}),
          (a._sentryDebugIds[t] = "f8fb69a1-4acb-4b95-893c-861850097354"),
          (a._sentryDebugIdIdentifier =
            "sentry-dbid-f8fb69a1-4acb-4b95-893c-861850097354"));
      } catch {}
    })();
    const Me = s.memo(
        ({
          asset: a,
          logoURI: t,
          select: u,
          apr: m,
          filled: c,
          isSelected: d,
          balance: g,
        }) =>
          e.jsx(o, {
            alignCenter: !0,
            className: H(
              "dark:bg-dark-dark-gray bg-btn-light-tint z-0 lig rounded-3xl p-2 hover:duration-150 transition cursor-pointer  dark:hover:bg-dark-border-primary hover:bg-btn-light-tint-active border border-transparent",
              {
                "brightness-90 dark:brightness-110 dark:!bg-dark-border-primary !bg-btn-light-tint-active border-btn-primary":
                  d,
              }
            ),
            onClick: () => u(a),
            children: e.jsxs(o, {
              className: "gap-x-3 pl-2",
              flex: 1,
              children: [
                e.jsx(o, {
                  center: !0,
                  className: "gap-x-2",
                  children: e.jsx(Z, { asset: a, logoURI: t, size: 34 }),
                }),
                e.jsxs(o, {
                  col: !0,
                  flex: 1,
                  children: [
                    e.jsx(o, {
                      alignCenter: !0,
                      justify: "between",
                      children: e.jsx(j, {
                        fontWeight: "medium",
                        textStyle: "body",
                        children: a == null ? void 0 : a.ticker,
                      }),
                    }),
                    e.jsx(o, {
                      row: !0,
                      className: "gap-x-2 justify-between pr-2",
                      children: e.jsxs(o, {
                        center: !0,
                        className: "gap-1",
                        children: [
                          e.jsx(j, {
                            fontWeight: "light",
                            textStyle: "caption",
                            textTransform: "uppercase",
                            variant: "secondary",
                            children: r("common.APR"),
                          }),
                          typeof m < "u"
                            ? e.jsx(j, {
                                textStyle: "caption",
                                variant: "primaryBtn",
                                children: m || "N/A",
                              })
                            : e.jsx(st, { size: "xs" }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs(o, {
                  center: !0,
                  className: "gap-2",
                  children: [
                    !!g &&
                      e.jsx(j, {
                        fontWeight: "medium",
                        textStyle: "caption-xs",
                        variant: "secondary",
                        children: g.toSignificant(6),
                      }),
                    typeof c < "u" &&
                      e.jsx(X, {
                        content: `${r("common.filled")}: ${Ne(c) || "N/A"}`,
                        children: e.jsxs(B, {
                          position: "relative",
                          children: [
                            e.jsx(at, {
                              color: "brand.btnPrimary",
                              size: "35px",
                              trackColor: "borderPrimary",
                              value: c,
                            }),
                            e.jsx(B, {
                              alignItems: "center",
                              bottom: 0,
                              justifyContent: "center",
                              left: 0,
                              position: "absolute",
                              right: 0,
                              top: 0,
                              children: e.jsxs(j, {
                                className: H("text-[10px]", {
                                  "text-[9px]": c >= 100,
                                }),
                                fontWeight: "semibold",
                                textStyle: "caption-xs",
                                variant: "secondary",
                                children: [Math.floor(c), "%"],
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          })
      ),
      ie = ({
        assets: a,
        onSelect: t,
        onClose: u,
        isLoading: m,
        setQuery: c,
        selectedAsset: d,
      }) => {
        const { filteredAssets: g, select: v } = Mt({
            assets: a,
            onSelect: t,
            onClose: u,
          }),
          w = s.useCallback(
            (f) => {
              v(f), setTimeout(() => (c == null ? void 0 : c("")), 500);
            },
            [v, c]
          );
        return e.jsxs(o, {
          col: !0,
          className: H(
            "rounded-box-lg justify-center items-start w-2/5 py-5 px-6",
            nt.secondary
          ),
          flex: 1,
          children: [
            e.jsx(o, {
              className: "w-full -mt-2 mb-2 pr-3.5",
              flex: 1,
              justify: "end",
              children: e.jsx(X, {
                content: r("views.savings.aprTooltip"),
                place: "bottom",
                children: e.jsx(P, {
                  className: "ml-1",
                  color: "primaryBtn",
                  name: "infoCircle",
                  size: 24,
                }),
              }),
            }),
            g.length
              ? e.jsx(o, {
                  className:
                    "!overflow-x-clip flex-col overflow-y-auto gap-1.5 w-full h-full",
                  children: g.map((f) =>
                    s.createElement(Me, {
                      ...f,
                      isSelected: d == null ? void 0 : d.eqAsset(f.asset),
                      key: f.asset.toString(),
                      select: w,
                    })
                  ),
                })
              : e.jsx(o, {
                  justifyCenter: !0,
                  className: "pt-4",
                  flex: 1,
                  children: m
                    ? e.jsx(P, { spin: !0, name: "loader", size: 24 })
                    : e.jsx(j, {
                        children: r("components.assetSelect.noResultsFound"),
                      }),
                }),
          ],
        });
      },
      De = ({
        isOpened: a,
        onClose: t,
        onConfirm: u,
        asset: m,
        amount: c,
        tabLabel: d,
        outboundDelay: g,
        expectedAmountOut: v,
        slippage: w,
        expectedOutputAmount: f,
        networkFee: y,
        outboundFee: C,
        timeToBreakEvenInfo: n,
      }) => {
        const [A, l] = s.useState(!1),
          i = s.useMemo(() => {
            if (!g) return;
            const h = Math.floor(g / 60),
              b = Math.floor(h / 60),
              S = b > 0 ? `${b}h ` : "",
              N = h > 0 ? `${h % 60}m ` : "",
              M = g % 60 > 0 ? ` ${g % 60}s` : "";
            return `${S}${N}${M}`;
          }, [g]),
          p = [
            { label: r("common.action"), value: d },
            { label: r("common.asset"), value: `${m.ticker}`, icon: m },
            { label: r("views.wallet.estimatedTime"), value: i || "N/A" },
            {
              label: r("views.wallet.networkFee"),
              value: `${y.toSignificant(6)} ${y.ticker}`,
            },
            {
              label: `${r("common.outbound")} ${r("common.fee")}`,
              value: `${C.toSignificant(6)} ${m.ticker}`,
            },
            {
              label: r("common.totalFees"),
              value: `${(w == null ? void 0 : w.toSignificant(6)) || 0} ${
                m.ticker
              }`,
            },
            {
              label: d,
              value: f
                ? `${f.toSignificant(6)} ${m.ticker}`
                : y.gte(c)
                ? r("views.savings.notEnoughForOutboundFee")
                : e.jsx(P, {
                    spin: !0,
                    color: "primary",
                    name: "loader",
                    size: 24,
                  }),
            },
            { label: r("views.savings.timeToBrakeEven"), value: n },
          ];
        return e.jsxs(Dt, {
          buttonDisabled: !(Number.parseInt(v || "0") && A),
          inputAssets: [m],
          isOpened: a,
          onClose: t,
          onConfirm: () => u((f == null ? void 0 : f.toSignificant(6)) || "0"),
          children: [
            e.jsx(o, {
              col: !0,
              className: "mb-5",
              children: p.map(({ label: h, value: b, icon: S }) =>
                e.jsx(
                  it,
                  {
                    label: h,
                    value: e.jsxs(o, {
                      center: !0,
                      className: "gap-1",
                      children: [
                        e.jsx(j, { textStyle: "caption", children: b }),
                        S && e.jsx(Z, { asset: S, size: 22 }),
                      ],
                    }),
                  },
                  h
                )
              ),
            }),
            e.jsx(rt, {
              className: "py-1",
              label: e.jsx(o, {
                alignCenter: !0,
                children: e.jsx(j, {
                  children: r("views.savings.highOutboundFee"),
                }),
              }),
              onValueChange: l,
              value: A,
            }),
          ],
        });
      },
      re = [Vt, Ot, Lt, zt, qt, Ht, Ut, Gt],
      Pe = ({
        data: a,
        unit: t = "$",
        chartIndexes: u,
        selectChart: m,
        selectedIndex: c,
        title: d,
      }) => {
        const g = s.useRef(null),
          [v, w] = s.useState(null),
          f = s.useMemo(() => a.map(({ asset: i }) => i), [a]),
          { data: y } = ne(f),
          C = c === $e.Earned,
          n = s.useCallback((i) => {
            var h, b, S, N;
            const p = i === null ? [] : [{ datasetIndex: 0, index: i }];
            (b = (h = g.current) == null ? void 0 : h.tooltip) == null ||
              b.setActiveElements(p, { x: 0, y: 0 }),
              (S = g.current) == null || S.setActiveElements(p),
              (N = g.current) == null || N.update();
          }, []),
          A = s.useMemo(
            () => ({
              cutout: "70%",
              padding: 0,
              responsive: !0,
              plugins: {
                legend: { display: !1 },
                tooltip: {
                  displayColors: !1,
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  bodyFont: { size: 12 },
                  cornerRadius: 16,
                  padding: 14,
                  titleFont: { size: 14 },
                  titleSpacing: 8,
                  callbacks: { label: (i) => `${i.formattedValue} ${t}` },
                },
              },
              onHover: (i, p) => {
                var h, b;
                ((h = p[0]) == null ? void 0 : h.index) !== v &&
                  w((b = p[0]) == null ? void 0 : b.index);
              },
            }),
            [v, t]
          ),
          l = s.useMemo(() => {
            const i = a.map(({ asset: p, amount: h, earnedAmount: b }) => {
              var N;
              const S = C
                ? (b == null ? void 0 : b.getValue("number")) || 0
                : h.getValue("number");
              return (
                (((N = y[p.toString()]) == null ? void 0 : N.price_usd) || 0) *
                S
              );
            });
            return {
              labels: a.map((p) => p.asset.ticker),
              datasets: [
                {
                  label: C ? "Earned" : "Total",
                  data: i,
                  backgroundColor: re.map((p) => `${p}50`),
                  borderColor: re,
                  borderWidth: 1,
                },
              ],
            };
          }, [a, C, y]);
        return e.jsxs(B, {
          direction: "column",
          p: 2,
          w: "full",
          children: [
            e.jsxs(B, {
              justify: "space-between",
              pb: 4,
              children: [
                e.jsx(j, { textStyle: "subtitle2", children: d }),
                e.jsx(Wt, {
                  chartTypeIndexes: u,
                  selectChartTypeIndex: m,
                  selectedChartTypeIndex: c,
                }),
              ],
            }),
            e.jsxs(B, {
              align: "center",
              justify: "space-between",
              children: [
                e.jsx(B, {
                  height: 150,
                  width: 40,
                  children: e.jsx(Rt, {
                    data: l,
                    id: "myChart",
                    options: A,
                    ref: g,
                  }),
                }),
                e.jsx(B, {
                  direction: "column",
                  gap: 1,
                  h: "full",
                  pl: 2,
                  w: "full",
                  children: a.map((i, p) => {
                    var S;
                    const h = C ? i.earnedAmount : i.amount,
                      b = v === p;
                    return e.jsxs(
                      B,
                      {
                        _dark: {
                          bgColor: b ? E.gray : E.bgDarkGray,
                          _hover: { bgColor: E.gray },
                        },
                        _hover: {
                          border: `1px solid ${E.btnPrimary}`,
                          bgColor: E.bgBtnLightTintActive,
                        },
                        align: "center",
                        bgColor: b ? E.bgBtnLightTintActive : E.bgLightGray,
                        border: b
                          ? `1px solid ${E.btnPrimary}`
                          : "1px solid transparent",
                        borderRadius: "3xl",
                        display: "flex",
                        gap: 2,
                        justify: "space-between",
                        onMouseEnter: () => n(a.indexOf(i)),
                        onMouseLeave: () => n(null),
                        p: 1,
                        pl: 3,
                        children: [
                          e.jsxs(B, {
                            gap: 1,
                            children: [
                              e.jsx(j, {
                                children:
                                  h == null ? void 0 : h.toSignificant(6),
                              }),
                              e.jsx(j, { children: i.asset.ticker }),
                            ],
                          }),
                          e.jsx(Z, { asset: i.asset, size: 28 }),
                        ],
                      },
                      `${i.amount.getValue("string")}-${
                        (S = i.earnedAmount) == null
                          ? void 0
                          : S.getValue("string")
                      }`
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      },
      We = ({ assetPriceUSD: a, position: t, withdraw: u, deposit: m }) => {
        var g;
        const c = s.useCallback(
            (v) => `$${(a * v.getValue("number")).toFixed(2)}`,
            [a]
          ),
          d = s.useMemo(() => {
            var v, w;
            return [
              {
                label: "Amount Deposited",
                value: e.jsx(U, {
                  icon: "usdCircle",
                  tooltip: c(t.depositAmount),
                  value: `${t.depositAmount.toSignificant(6)} ${
                    t.asset.ticker
                  }`,
                }),
              },
              {
                label: "Amount Redeemable",
                value: e.jsx(U, {
                  icon: "usdCircle",
                  tooltip: c(t.amount),
                  value: `${
                    (v = t == null ? void 0 : t.amount) == null
                      ? void 0
                      : v.toSignificant(6)
                  } ${t.asset.ticker}`,
                }),
              },
              {
                label: "Total Earned",
                value: e.jsx(U, {
                  icon: "usdCircle",
                  tooltip: c(t.earnedAmount || ee),
                  value: `${
                    (w = t == null ? void 0 : t.earnedAmount) == null
                      ? void 0
                      : w.toSignificant(6)
                  } ${t.asset.ticker}`,
                }),
              },
            ];
          }, [c, t]);
        return e.jsx(
          o,
          {
            col: !0,
            justifyCenter: !0,
            className: "self-stretch",
            children: e.jsxs(we, {
              className: "!rounded-2xl pt-2 !pb-0 !gap-0",
              type: "primary",
              children: [
                e.jsx(o, {
                  alignCenter: !0,
                  className: "cursor-pointer",
                  justify: "between",
                  children: e.jsxs(o, {
                    alignCenter: !0,
                    flex: 1,
                    justify: "between",
                    children: [
                      e.jsxs(o, {
                        center: !0,
                        children: [
                          e.jsx(o, {
                            col: !0,
                            children: e.jsx(Z, { asset: t.asset, size: 32 }),
                          }),
                          e.jsx(j, {
                            className: H("mx-1 md:mx-3 !transition-all"),
                            fontWeight: "semibold",
                            children: t.asset.ticker,
                          }),
                        ],
                      }),
                      e.jsxs(B, {
                        children: [
                          e.jsxs(j, {
                            fontWeight: "bold",
                            children: [
                              (g = t.amount) == null
                                ? void 0
                                : g.toSignificant(6),
                              " ",
                              t.asset.ticker,
                            ],
                          }),
                          e.jsx(j, { children: "\xA0" }),
                          e.jsx(j, {
                            fontWeight: "light",
                            children: `(${c(t.amount)})`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs(o, {
                  className: "gap-2",
                  children: [
                    e.jsx(Ae, {
                      horizontalInset: !0,
                      className: "my-3",
                      items: d,
                      size: "sm",
                    }),
                    e.jsxs(o, {
                      col: !0,
                      justifyCenter: !0,
                      className: "gap-1",
                      children: [
                        e.jsx(V, {
                          stretch: !0,
                          className: "!h-[32px]",
                          onClick: () => m(t.asset),
                          variant: "primary",
                          children: r("views.liquidity.addButton"),
                        }),
                        e.jsx(V, {
                          stretch: !0,
                          className: "md:min-w-[100px] !h-[32px]",
                          onClick: () => u(t.asset),
                          variant: "outlineSecondary",
                          children: r("common.withdraw"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          t.asset.toString()
        );
      },
      Fe = ({
        positions: a,
        refresh: t,
        withdrawAsset: u,
        depositAsset: m,
      }) => {
        const [c, d] = s.useState(!1),
          [g, v] = s.useState($e.Earned),
          { isWalletLoading: w } = G(),
          f = s.useCallback(() => {
            d(!0), t(), setTimeout(() => d(!1), 500);
          }, [t]),
          { data: y } = ne(a.map((C) => C.asset));
        return e.jsx(o, {
          center: !0,
          col: !0,
          className: "w-full",
          children: e.jsxs(o, {
            col: !0,
            className: "max-w-[480px] w-full gap-1",
            children: [
              !!a.length &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs(o, {
                      className: "gap-x-2 mb-1 w-full",
                      justify: "between",
                      children: [
                        e.jsx(o, {}),
                        e.jsx(Kt, { loading: c, onLoad: f, size: 16 }),
                      ],
                    }),
                    e.jsx(we, {
                      children: e.jsx(Pe, {
                        chartIndexes: Ft,
                        data: a,
                        selectChart: v,
                        selectedIndex: g,
                        title: "Earn positions",
                      }),
                    }),
                  ],
                }),
              a.length
                ? a.map((C) => {
                    var n;
                    return e.jsx(
                      We,
                      {
                        assetPriceUSD:
                          ((n = y == null ? void 0 : y[C.asset.toString()]) ==
                          null
                            ? void 0
                            : n.price_usd) || 0,
                        deposit: m,
                        position: C,
                        withdraw: u,
                      },
                      C.asset.toString()
                    );
                  })
                : e.jsxs(o, {
                    center: !0,
                    className: "gap-2",
                    flex: 1,
                    children: [
                      e.jsx(j, {
                        textStyle: "subtitle2",
                        variant: "primary",
                        children: w
                          ? r("common.loading")
                          : r("views.wallet.noDataToShow"),
                      }),
                      w && e.jsx(P, { spin: !0, name: "loader", size: 32 }),
                    ],
                  }),
            ],
          }),
        });
      },
      Re = ({
        onWithdraw: a,
        onDeposit: t,
        positions: u,
        refreshPositions: m,
      }) => {
        const { setIsConnectModalOpen: c } = ye(),
          { hasWallet: d } = G();
        return e.jsx(o, {
          className: "w-full self-stretch",
          children: d
            ? e.jsx(Fe, {
                depositAsset: t,
                positions: u,
                refresh: m,
                withdrawAsset: a,
              })
            : e.jsx(o, {
                center: !0,
                className: "self-stretch w-full",
                children: e.jsx(V, {
                  stretch: !0,
                  className: "mt-3 max-w-[460px] self-center",
                  onClick: () => c(!0),
                  size: "lg",
                  variant: "fancy",
                  children: r("common.connectWallet"),
                }),
              }),
        });
      },
      Ve = () => {
        const { pools: a } = Be("7d"),
          { synthCap: t } = Ce();
        return s.useMemo(
          () =>
            a
              .filter((u) => u.saversDepth !== "0" && u.saversUnits !== "0")
              .map((u) => {
                const m = Number(u.saversAPR || 0) * 100,
                  c = k.fromBigInt(BigInt(u.assetDepth), 8).mul(t),
                  d = k.fromBigInt(BigInt(u.synthSupply), 8),
                  g = c.gt(0) ? Number(d.div(c).mul(100).toFixed(2)) : 0;
                return {
                  apr: Ne(m),
                  aprRaw: m / 100,
                  asset: u.asset,
                  filled: Math.min(100, Number(g)),
                };
              })
              .sort((u, m) => m.filled - u.filled),
          [t, a]
        );
      },
      Oe = ({
        isDeposit: a,
        asset: t,
        withdrawPercent: u,
        amount: m,
        apr: c,
      }) => {
        var b, S;
        const [d, g] = s.useState(),
          { getWalletAddress: v } = G(),
          w = s.useMemo(
            () => new k({ value: m.getValue("number"), decimal: t.decimal }),
            [m, t.decimal]
          ),
          f = Te(w),
          y = Te(u),
          C = s.useMemo(() => v(t.chain), [v, t.chain]),
          n = s.useCallback(async () => {
            if (!(t.decimal && f != null && f.gt(0))) return;
            const N = k
                .shiftDecimals({ value: f, from: t.decimal, to: 8 })
                .getBaseValue("string"),
              M = `${Number.parseInt(
                (y == null ? void 0 : y.mul(100).getValue("string")) || "10000"
              )}`,
              O = await Yt({
                ...(a
                  ? { type: "deposit", amount: N }
                  : { address: C, type: "withdraw", withdraw_bps: M }),
                asset: t.toString().toLowerCase(),
              });
            g(O);
          }, [f, a, C, y, t]);
        s.useEffect(() => {
          n();
        }, [n]);
        const A = s.useMemo(
            () =>
              k.fromBigInt(
                BigInt((d == null ? void 0 : d.expected_amount_out) || 0),
                8
              ),
            [d == null ? void 0 : d.expected_amount_out]
          ),
          l = k.fromBigInt(
            BigInt(
              ((b = d == null ? void 0 : d.fees) == null ? void 0 : b.total) ||
                "0"
            ),
            Se.THOR
          ),
          i = k.fromBigInt(
            BigInt(
              ((S = d == null ? void 0 : d.fees) == null
                ? void 0
                : S.outbound) || "0"
            ),
            Se.THOR
          ),
          { inputFee: p } = Qt({ inputAsset: t, outputAsset: t }),
          h = s.useMemo(() => {
            const N = A.mul(c || 0).mul(0.0027397260273972603),
              M = l.add(p),
              O = N.gt(0) ? M.div(N) : 0;
            return Math.round(Number(O.toFixed(2)));
          }, [c, A, p, l]);
        return {
          slippage: l,
          outboundFee: i,
          getConfirmData: n,
          saverQuote: d,
          expectedOutputAmount: A,
          networkFee: p,
          daysToBreakEven: h,
        };
      },
      Le = s.memo(
        ({
          loading: a,
          hardCapReached: t,
          label: u,
          disabled: m,
          handleSubmit: c,
          address: d,
          setIsConnectModalOpen: g,
        }) =>
          e.jsx(o, {
            className: "self-stretch pt-5",
            children: d
              ? e.jsx(o, {
                  className: "w-full",
                  children: e.jsx(V, {
                    stretch: !0,
                    disabled: m || t,
                    error: t,
                    loading: a,
                    onClick: c,
                    rightIcon: t
                      ? e.jsx(P, { name: "infoCircle", size: 20 })
                      : void 0,
                    size: "lg",
                    tooltip: t
                      ? r("views.liquidity.hardCapReachedTooltip")
                      : void 0,
                    tooltipClasses: "text-center mx-[-2px]",
                    variant: "fancy",
                    children: u,
                  }),
                })
              : e.jsx(V, {
                  stretch: !0,
                  onClick: () => g(!0),
                  size: "lg",
                  variant: "fancy",
                  children: r("common.connectWallet"),
                }),
          })
      );
    var T = ((a) => ((a.Deposit = "deposit"), (a.Withdraw = "withdraw"), a))(
        T || {}
      ),
      te = ((a) => (
        (a[(a.Earn = 0)] = "Earn"), (a[(a.Positions = 1)] = "Positions"), a
      ))(te || {});
    let le, oe;
    (le = () => {
      const { getWalletAddress: a, isWalletLoading: t } = G(),
        [u, m] = s.useState([]),
        { pools: c } = Be(),
        [d, g] = s.useState(),
        [v, w] = s.useState([]),
        f = s.useMemo(
          () =>
            v.length
              ? u.map((l) => {
                  const i = v.find(
                    ({ asset: S }) => S === l.asset.toString().toUpperCase()
                  );
                  if (!i) return l;
                  const p = k.fromBigInt(BigInt(i.savers_depth), 8),
                    h = k.fromBigInt(BigInt(i.savers_units), 8),
                    b = l.units.div(h).mul(p);
                  return {
                    ...l,
                    saverPool: i,
                    amount: b,
                    earnedAmount:
                      l.depositAmount && b.gt(l.depositAmount)
                        ? b.sub(l.depositAmount)
                        : null,
                  };
                })
              : u,
          [u, v]
        ),
        y = s.useCallback(
          async (l) => {
            const i = a(l.chain);
            if (i) {
              const p = await Jt({ asset: l.toString(), address: i }),
                h = k.fromBigInt(BigInt(p.units), 8),
                b = k.fromBigInt(BigInt(p.asset_deposit_value), 8);
              return h.gt(0)
                ? {
                    asset: l,
                    units: h,
                    provider: p,
                    amount: h,
                    depositAmount: b,
                  }
                : null;
            }
          },
          [a]
        ),
        C = s.useCallback(async () => {
          if (t) return;
          const l = (
              (c == null
                ? void 0
                : c
                    .filter((p) => p.saversDepth !== "0")
                    .map((p) => lt.from({ asset: p.asset }))) || []
            ).map(y),
            i = await Promise.all(l);
          m(i.filter(Boolean));
        }, [t, c, v]),
        n = s.useCallback((l) => f.find((i) => i.asset.eqAsset(l)), [f]),
        A = s.useCallback(async () => {
          const l = await Zt();
          w(l);
          const i =
            l == null
              ? void 0
              : l.reduce((p, h) => ((p[h.asset] = h.synth_mint_paused), p), {});
          g(i);
        }, []);
      return (
        s.useEffect(() => {
          A();
        }, [A]),
        {
          getPosition: n,
          getSaverPosition: y,
          positions: f,
          refreshPositions: C,
          synthAvailability: d,
        }
      );
    }),
      (oe = () => {
        const a = ot(),
          t = Ve(),
          u = At(),
          m = ct(),
          { getMaxBalance: c } = Nt(),
          { isChainHalted: d } = Ce(),
          {
            positions: g,
            refreshPositions: v,
            getPosition: w,
            synthAvailability: f,
          } = le(),
          { setIsConnectModalOpen: y } = ye(),
          { getWalletAddress: C } = G(),
          { asset: n, setAsset: A, amount: l, setAmount: i } = _t(dt.Earn),
          [p, h] = s.useState(!1),
          [b, S] = s.useState(!1),
          [N, M] = s.useState(T.Deposit),
          [O, ce] = s.useState(te.Earn),
          [K, ze] = s.useState(new k({ decimal: 2, value: 0 })),
          [de, qe] = s.useState(ee),
          [L, me] = s.useState(),
          He = kt(),
          Q = s.useMemo(
            () =>
              u.map((x) => ({
                ...t.find(
                  ({ asset: $ }) =>
                    x.asset.toString().toLowerCase() === $.toLowerCase()
                ),
                ...x,
              })),
            [t, u]
          ),
          I = N === T.Deposit,
          { data: ue } = ne([n]),
          { isApproved: Ue, isLoading: pe } = es({
            assetValue: n.set(l.getValue("string")),
            force: !0,
          }),
          Ge = It({ asset: n }),
          _ = s.useMemo(
            () => Q.find((x) => x.asset.toString() === n.toString()),
            [n, Q]
          ),
          {
            slippage: D,
            outboundFee: Ke,
            saverQuote: W,
            expectedOutputAmount: Y,
            networkFee: Qe,
            daysToBreakEven: F,
          } = Oe({
            isDeposit: I,
            asset: n,
            withdrawPercent: K,
            amount: l,
            apr: _ == null ? void 0 : _.aprRaw,
          }),
          se = s.useCallback(
            (x) => {
              var $;
              return (
                ((($ = ue[n.toString()]) == null ? void 0 : $.price_usd) || 0) *
                x.getValue("number")
              );
            },
            [n, ue]
          ),
          { isLgActive: he } = mt(),
          z = s.useMemo(() => C(n.chain), [C, n.chain]);
        s.useEffect(() => {
          z ? c(n).then((x) => me(x)) : me(void 0);
        }, [n, c, z]);
        const Ye = s.useMemo(
            () => [
              { label: r("common.deposit"), value: T.Deposit },
              { label: r("common.withdraw"), value: T.Withdraw },
            ],
            []
          ),
          q = s.useCallback(
            (x) => {
              ce(te.Earn), M(x), i(new k({ value: 0, decimal: n.decimal }));
            },
            [n.decimal, i]
          ),
          Je = s.useCallback(
            (x) => {
              q(T.Deposit), A(x), i(new k({ value: 0, decimal: x.decimal }));
            },
            [i, A, q]
          ),
          Ze = s.useCallback(
            (x) => {
              q(T.Withdraw), A(x), i(new k({ value: 0, decimal: x.decimal }));
            },
            [i, A, q]
          ),
          Xe = s.useCallback(
            (x) => {
              ze(x), z && i(de.mul(x.div(100)));
            },
            [z, de, i]
          );
        s.useEffect(() => {
          const x = w(n);
          qe(
            (x == null ? void 0 : x.amount) || new k({ value: 0, decimal: 8 })
          );
        }, [n, w, g]),
          s.useEffect(() => {
            v();
          }, [v]);
        const xe = s.useCallback(
            (x) => {
              A(x), i(new k({ value: 0, decimal: x.decimal }));
            },
            [A, i]
          ),
          ge = s.useCallback(async () => {
            const { thorchain: x } = await (
              await ut(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (J) => (await J.__tla, J))
                    .then((J) => J.hc),
                __vite__mapDeps([0, 1])
              )
            ).getSwapKitClient();
            if (!x) throw new Error("SwapKit client not found");
            const $ = K.getValue("number"),
              R = I
                ? {
                    memo: `+:${n.chain}/${n.symbol}`,
                    assetValue: n.set(l.getValue("string")),
                    type: "add",
                  }
                : { assetValue: n, type: "withdraw", percent: $ };
            return x.savings(R);
          }, [l, n, I, K]),
          et = s.useCallback(
            async (x) => {
              h(!1);
              const $ = ss();
              a(
                pt({
                  id: $,
                  label: r(
                    I
                      ? "txManager.addAmountAsset"
                      : "txManager.withdrawAmountAsset",
                    { asset: n.ticker, amount: x }
                  ),
                  type: I ? ke.TC_SAVINGS_ADD : ke.TC_SAVINGS_WITHDRAW,
                  inChain: n.chain,
                })
              );
              try {
                const R = await ge();
                i(new k({ value: 0, decimal: 8 })),
                  R && a(ht({ id: $, txid: R }));
              } catch (R) {
                xt(R), a(gt({ id: $, status: "error" }));
              }
            },
            [a, n.chain, n.ticker, ge, I, i]
          ),
          fe = s.useMemo(
            () =>
              !(f != null && f[n.toString()]) &&
              ((_ == null ? void 0 : _.filled) || 0) < 99.5,
            [n, _ == null ? void 0 : _.filled, f]
          ),
          be = s.useMemo(
            () =>
              l.lte(new k({ value: 0, decimal: 8 })) ||
              (I && ((L && l.gt(L)) || !fe)) ||
              d[n.chain],
            [l, n.chain, L, d, I, fe]
          ),
          ve = I ? r("common.deposit") : r("common.withdraw"),
          je = s.useMemo(
            () => ({
              asset: n,
              value: I ? l : Y,
              balance: L,
              usdPrice: se(I ? l : Y),
            }),
            [I, l, n, Y, L, se]
          ),
          ae = s.useMemo(
            () =>
              e.jsx(o, {
                center: !0,
                children: e.jsx(j, {
                  textStyle: "caption",
                  children: e.jsx(U, {
                    tooltip: r("views.savings.timeToBrakeEvenTip"),
                    value: e.jsxs(j, {
                      variant: F > 20 ? "red" : F > 10 ? "orange" : "primary",
                      textStyle: "caption",
                      textTransform: "uppercase",
                      children: [
                        " ",
                        `${Number.isFinite(F) ? F : 0} ${
                          F === 1
                            ? r("views.savings.day")
                            : r("views.savings.days")
                        }`,
                      ],
                    }),
                  }),
                }),
              }),
            [F]
          ),
          tt = s.useMemo(
            () => [
              {
                label: r("common.fee"),
                value: e.jsx(o, {
                  center: !0,
                  children: e.jsx(j, {
                    textStyle: "caption",
                    children: e.jsx(U, {
                      tooltip: r("views.savings.feeTooltipDescription"),
                      value: e.jsx(j, {
                        variant: D.eqValue(ee) ? "primary" : "red",
                        textStyle: "caption",
                        textTransform: "uppercase",
                        children: `${
                          D ? (D == null ? void 0 : D.toSignificant(6)) : 0
                        } ${n.ticker}`,
                      }),
                    }),
                  }),
                }),
              },
              { label: r("views.savings.timeToBrakeEven"), value: ae },
            ],
            [D, n.ticker, ae]
          );
        return e.jsxs(o, {
          col: !0,
          className: "w-full max-w-[880px] flex self-center gap-3 mt-2",
          children: [
            e.jsx(ft, {
              content: "Earn APY on native assets with LIGHTSwap AI EARN",
              keywords: "Earn, Savings, LIGHTSwap AI, APY, Native assets",
              title: r("views.savings.earn"),
            }),
            e.jsxs($t, {
              index: O,
              onChange: ce,
              children: [
                e.jsxs(Bt, {
                  children: [
                    e.jsx(_e, { children: r("views.savings.earn") }),
                    e.jsx(_e, { children: r("views.savings.myPositions") }),
                  ],
                }),
                e.jsxs(Tt, {
                  children: [
                    e.jsx(Ie, {
                      children: e.jsxs(o, {
                        col: !0,
                        className: "gap-3",
                        children: [
                          e.jsx(o, {
                            className: "flex w-full justify-between",
                            children: e.jsxs(o, {
                              alignCenter: !0,
                              children: [
                                e.jsxs(j, {
                                  className: "ml-3 mr-2",
                                  textStyle: "h3",
                                  children: [
                                    r("views.savings.earn"),
                                    " ",
                                    n.ticker,
                                  ],
                                }),
                                e.jsx(j, {
                                  textStyle: "h3",
                                  variant: "primaryBtn",
                                  children:
                                    _ != null && _.apr
                                      ? `${_ == null ? void 0 : _.apr} ${r(
                                          "common.apr"
                                        ).toUpperCase()}`
                                      : "",
                                }),
                                e.jsx(X, {
                                  content: r("views.savings.aprTooltip", {
                                    asset: n.ticker,
                                  }),
                                  place: "bottom",
                                  children: e.jsx(P, {
                                    className: "ml-1",
                                    color: "primaryBtn",
                                    name: "infoCircle",
                                    size: 24,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e.jsxs(o, {
                            alignCenter: !0,
                            className: "px-3",
                            justify: "between",
                            children: [
                              e.jsxs(j, {
                                fontWeight: "medium",
                                textStyle: "caption",
                                variant: "secondary",
                                children: [
                                  r("views.savings.description", {
                                    asset: n.ticker,
                                  }),
                                  e.jsx(bt, {
                                    className:
                                      "text-twitter-blue cursor-pointer",
                                    to: vt,
                                    children: e.jsx(j, {
                                      fontWeight: "medium",
                                      textStyle: "caption",
                                      variant: "blue",
                                      children: `${r(
                                        "common.learnMore"
                                      )} \u2192`,
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx(X, {
                                content: r("views.savings.tooltipDescription", {
                                  asset: n.ticker,
                                }),
                                place: "bottom",
                                children: e.jsx(P, {
                                  color: "primaryBtn",
                                  name: "infoCircle",
                                  size: 24,
                                }),
                              }),
                            ],
                          }),
                          e.jsxs(o, {
                            row: !0,
                            className: "w-full justify-center gap-5",
                            children: [
                              he &&
                                e.jsx(o, {
                                  className: "w-9/12",
                                  children: e.jsx(ie, {
                                    assets: Q,
                                    onSelect: xe,
                                    selectedAsset: n,
                                  }),
                                }),
                              e.jsxs(o, {
                                col: !0,
                                className: H("flex h-full", he && "w-full"),
                                children: [
                                  e.jsx(jt, {
                                    stretch: !0,
                                    className:
                                      "!rounded-2xl md:!rounded-3xl !p-4 flex-col items-center self-stretch mt-2 space-y-1 shadow-lg md:w-full md:h-auto",
                                    size: "lg",
                                    children: e.jsxs(o, {
                                      col: !0,
                                      className: "self-stretch gap-2",
                                      children: [
                                        e.jsx(St, {
                                          onChange: (x) => q(x),
                                          tabs: Ye,
                                          value: N,
                                        }),
                                        N === T.Withdraw &&
                                          e.jsx(Ct, {
                                            onChange: Xe,
                                            percent: K,
                                            title: r("common.withdrawPercent"),
                                            subTitle: l.eqValue(ee)
                                              ? void 0
                                              : `${l.toSignificant(6)} ${
                                                  n.ticker
                                                } (${He(se(l))})`,
                                          }),
                                        e.jsx(yt, {
                                          noFilters: !0,
                                          hideZeroPrice: !0,
                                          AssetListComponent: ie,
                                          assets: Q,
                                          className: "flex-1",
                                          disabled: N === T.Withdraw,
                                          onAssetChange: xe,
                                          onValueChange: i,
                                          poolAsset: je,
                                          selectedAsset: je,
                                        }),
                                        e.jsx(Ae, {
                                          horizontalInset: !0,
                                          items: tt,
                                        }),
                                        !be && (!Ue || pe) && I
                                          ? e.jsx(o, {
                                              className: "w-full pt-5",
                                              children: e.jsx(V, {
                                                stretch: !0,
                                                disabled: m,
                                                error: m,
                                                loading: pe,
                                                onClick: () => S(!0),
                                                size: "lg",
                                                tooltip: m
                                                  ? r(
                                                      "views.liquidity.hardCapReachedTooltip"
                                                    )
                                                  : void 0,
                                                variant: "fancy",
                                                children: r("common.approve"),
                                              }),
                                            })
                                          : e.jsx(Le, {
                                              address: z,
                                              disabled: be,
                                              handleSubmit: () => h(!0),
                                              hardCapReached: I && m,
                                              label: ve,
                                              setIsConnectModalOpen: y,
                                            }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(Xt, {
                                    handleApprove: Ge,
                                    inputAsset: n,
                                    setVisible: S,
                                    visible: b,
                                  }),
                                  e.jsx(De, {
                                    amount: l,
                                    asset: n,
                                    expectedAmountOut:
                                      W == null
                                        ? void 0
                                        : W.expected_amount_out,
                                    expectedOutputAmount: Y,
                                    isOpened: p,
                                    networkFee: Qe,
                                    onClose: () => h(!1),
                                    onConfirm: et,
                                    outboundDelay:
                                      (W == null
                                        ? void 0
                                        : W.outbound_delay_seconds) || 0,
                                    slippage: D,
                                    outboundFee: Ke,
                                    tabLabel: ve,
                                    timeToBreakEvenInfo: ae,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsx(Ie, {
                      children: e.jsx(Re, {
                        onDeposit: Je,
                        onWithdraw: Ze,
                        positions: g,
                        refreshPositions: v,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }),
      (Ee = oe);
  });
export { as as __tla, Ee as default };
