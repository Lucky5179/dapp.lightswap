const __vite__fileDeps = [
    "assets/index-POi8GhpC.js",
    "assets/index-CWjS2nv2.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  cn as l,
  cA as t,
  cv as e,
  cJ as r,
  cz as M,
  cM as ne,
  cV as S,
  dC as Be,
  O as Ye,
  cY as $e,
  cE as Ue,
  eR as Ve,
  L as v,
  F as re,
  eS as Oe,
  eT as ze,
  cR as We,
  cI as He,
  cy as q,
  cL as Y,
  cG as Ge,
  cP as N,
  eU as Fe,
  eV as Je,
  dd as de,
  dt as Ke,
  dl as Xe,
  df as Qe,
  dm as oe,
  eB as le,
  dp as ce,
  eE as ue,
  dr as $,
  dq as U,
  eW as pe,
  dJ as V,
  cH as me,
  _ as F,
  cB as Ze,
  dM as J,
  eA as k,
  dG as he,
  ef as es,
  cT as ss,
  eX as ts,
  __tla as is,
} from "./assets/index-POi8GhpC.js";
import { G as as } from "./BwAMgJ-H.js";
import { I as O } from "./L2srWHi_.js";
import { A as ns } from "./B1amshOq.js";
import { P as y, L } from "./zJSzH3N0.js";
import { L as rs } from "./BN4zOmK_.js";
import { C as ge, __tla as ds } from "./Bujnyu6O.js";
import { P as os } from "./C2Mbex37.js";
import { V as ls } from "./BNG_iicX.js";
import { u as cs } from "./D-iJCSbt.js";
import {
  u as us,
  a as ps,
  b as ms,
  A as hs,
  P as gs,
  __tla as ys,
} from "./DE1swuVP.js";
import { u as xs } from "./Bcp9QaNf.js";
import { v as ye } from "./Bb0RDO2T.js";
import { u as As, g as xe } from "./DdtGuP0z.js";
import "./C8rAcL73.js";
import "./CJGo2KxJ.js";
import "./vSRfwVQ4.js";
import "./BNvyzkU_.js";
import "./CZ5SrGDV.js";
import "./C6gN5CZK.js";
import "./DLie8hhL.js";
import "./CYwjOChi.js";
import "./DtctggWu.js";
import "./BIRMHJJ4.js";
import "./C3OMHbbi.js";
import "./CGri0DVm.js";
import "./CNj6CspX.js";
import "./CNwSF2cA.js";
import { __tla as fs } from "./Bm7XAPj_.js";
let Ae,
  js = Promise.all([
    (() => {
      try {
        return is;
      } catch {}
    })(),
    (() => {
      try {
        return ds;
      } catch {}
    })(),
    (() => {
      try {
        return ys;
      } catch {}
    })(),
    (() => {
      try {
        return fs;
      } catch {}
    })(),
  ]).then(async () => {
    (function () {
      try {
        var s =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          i = new s.Error().stack;
        i &&
          ((s._sentryDebugIds = s._sentryDebugIds || {}),
          (s._sentryDebugIds[i] = "d9828d26-45fd-4ad2-a9d6-87876ff09415"),
          (s._sentryDebugIdIdentifier =
            "sentry-dbid-d9828d26-45fd-4ad2-a9d6-87876ff09415"));
      } catch {}
    })();
    let K, X, Q, Z, ee;
    (K = l.memo(
      ({
        asset: s,
        assetShare: i,
        contentRef: d,
        lastAddedDate: h,
        maxHeightStyle: A,
        poolShare: p,
        runeShare: f,
        shareType: a,
        runePending: g,
        assetPending: c,
        tickerPending: j,
      }) => {
        const o = l.useMemo(() => {
            const u = [
              {
                label: t("views.liquidity.poolShare"),
                value: p === "0 %" ? "~0 %" : p,
              },
            ];
            return (
              g.gt(0) &&
                u.push({
                  label: t("views.liquidity.runePending"),
                  value: g.toSignificant(6),
                }),
              c.gt(0) &&
                u.push({
                  label: t("views.liquidity.assetPending"),
                  value: c.toSignificant(6),
                }),
              [y.SYM, y.ASSET_ASYM].includes(a) &&
                u.unshift({
                  label: `${s.ticker} ${t("views.liquidity.share")}`,
                  value: e.jsxs(r, {
                    center: !0,
                    className: "gap-2",
                    children: [
                      e.jsx(M, {
                        children: `${i.toSignificant(6)} ${s.ticker}`,
                      }),
                      e.jsx(ne, { asset: s, size: 24 }),
                    ],
                  }),
                }),
              [y.SYM, y.RUNE_ASYM].includes(a) &&
                u.unshift({
                  label: `${S.symbol} ${t("views.liquidity.share")}`,
                  value: e.jsxs(r, {
                    center: !0,
                    className: "gap-2",
                    children: [
                      e.jsx(M, {
                        children: `${f.toSignificant(4)} ${S.symbol}`,
                      }),
                      e.jsx(ne, { asset: S, size: 24 }),
                    ],
                  }),
                }),
              u.push({ label: t("views.liquidity.lastAdded"), value: h }),
              u
            );
          }, [s, i, h, p, f, a, g, c]),
          n = l.useMemo(() => {
            switch (a) {
              case y.SYM:
                return `RUNE + ${s.ticker} LP`;
              case y.ASSET_ASYM:
                return `${s.ticker} LP`;
              case y.RUNE_ASYM:
                return "RUNE LP";
              default:
                return;
            }
          }, [s.ticker, a]);
        return e.jsxs(r, {
          col: !0,
          className: "overflow-hidden ease-in-out transition-all",
          ref: d,
          style: A,
          children: [
            !!j &&
              e.jsx(M, {
                className: "brightness-90",
                textStyle: "caption",
                variant: "yellow",
                children: t("pendingLiquidity.content", { asset: j }),
              }),
            e.jsxs(r, {
              col: !0,
              className: "self-stretch pt-1 pb-2",
              children: [
                e.jsx(r, {
                  alignCenter: !0,
                  row: !0,
                  justify: "between",
                  children: e.jsx(M, {
                    className: "px-1.5",
                    textStyle: "caption",
                    variant: "cyan",
                    children: n,
                  }),
                }),
                e.jsx(O, { horizontalInset: !0, items: o, size: "sm" }),
              ],
            }),
          ],
        });
      }
    )),
      (X = ({
        assetPending: s,
        dateLastAdded: i,
        poolDetail: { asset: d, runeDepth: h, assetDepth: A, units: p },
        runePending: f,
        shareType: a,
        sharedUnits: g,
        withFooter: c,
      }) => {
        const j = Be(),
          o = Ye.fromStringSync(d),
          { isActive: n, contentRef: u, toggle: E, maxHeightStyle: D } = $e(),
          { isMdActive: I } = Ue(),
          b = l.useMemo(() => Ve(new v(g).div(p).getValue("string")), [p, g]),
          [_, x] = l.useMemo(() => {
            const m = a === y.ASSET_ASYM,
              B = a === y.RUNE_ASYM,
              T = {
                liquidityUnits: g,
                poolUnits: p,
                assetDepth: A,
                runeDepth: h,
              };
            if (!(m || B))
              return [
                v.fromBigInt(BigInt(T.runeDepth), re.THOR).mul(g).div(p),
                v.fromBigInt(BigInt(T.assetDepth), re.THOR).mul(g).div(p),
              ];
            const z = Oe(T).getValue("string"),
              W = ze(T).getValue("string");
            return B ? [new v(W), new v(0)] : [new v(0), new v(z)];
          }, [p, g, h, A, a]),
          w = l.useMemo(() => !!(Number(f) || Number(s)), [f, s]),
          C = (w && (Number(f) > 0 ? o.ticker : S.ticker)) || "",
          R = l.useMemo(() => {
            switch (a) {
              case y.SYM:
                return `RUNE + ${o.ticker} LP`;
              case y.ASSET_ASYM:
                return `${o.ticker} LP`;
              case y.RUNE_ASYM:
                return "RUNE LP";
              default:
                return;
            }
          }, [o.ticker, a]);
        return e.jsx(r, {
          col: !0,
          justifyCenter: !0,
          className: "self-stretch",
          children: e.jsxs(We, {
            className: "!rounded-2xl p-2 !gap-1",
            type: w ? "warn" : "primary",
            children: [
              e.jsxs(r, {
                alignCenter: !0,
                className: "cursor-pointer",
                justify: "between",
                onClick: E,
                children: [
                  e.jsxs(r, {
                    center: !0,
                    children: [
                      w &&
                        e.jsx(He, {
                          content: t("pendingLiquidity.pendingLiquidity"),
                          children: e.jsx(q, {
                            className: "mr-3",
                            color: "yellow",
                            name: "warn",
                            size: 24,
                          }),
                        }),
                      e.jsx(r, {
                        col: !0,
                        children: e.jsx(ns, {
                          inline: !0,
                          asset1: o,
                          asset2: S,
                          size: n && I ? 40 : 32,
                        }),
                      }),
                      e.jsx(M, {
                        className: Y(
                          "mx-1 md:mx-3 !transition-all",
                          n ? "text-body md:!text-subtitle1" : "!text-body"
                        ),
                        fontWeight: "semibold",
                        children: R,
                      }),
                    ],
                  }),
                  e.jsxs(r, {
                    center: !0,
                    className: "gap-2",
                    children: [
                      e.jsxs(r, {
                        col: !0,
                        align: "end",
                        children: [
                          e.jsx(M, {
                            className: Y(
                              "!transition-all",
                              n ? "!text-body" : "!text-caption"
                            ),
                            fontWeight: "normal",
                            children: ` ${t("views.liquidity.poolShare")}`,
                          }),
                          e.jsx(M, {
                            className: Y(
                              "!transition-all",
                              n ? "!text-subtitle1" : "!text-body"
                            ),
                            fontWeight: "bold",
                            children: b === "0 %" ? "~0 %" : b,
                          }),
                        ],
                      }),
                      e.jsx(q, {
                        className: Y("transform duration-300 ease", {
                          "-rotate-180": n,
                        }),
                        color: "secondary",
                        name: "chevronDown",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(K, {
                asset: o,
                assetPending: v.fromBigInt(BigInt(s), 8),
                assetShare: x,
                contentRef: u,
                lastAddedDate: Ge.unix(Number(i)).format("YYYY-MM-DD"),
                maxHeightStyle: D,
                poolShare: b,
                runePending: v.fromBigInt(BigInt(f), 8),
                runeShare: _,
                shareType: a,
                tickerPending: C,
              }),
              c &&
                e.jsxs(r, {
                  justifyCenter: !0,
                  className: "space-x-6 md:pr-0",
                  children: [
                    e.jsx(N, {
                      stretch: !0,
                      className: "px-8 md:px-12",
                      onClick: () => j(Fe(o)),
                      variant: "primary",
                      children: w
                        ? t("views.liquidity.completeButton")
                        : t("views.liquidity.addButton"),
                    }),
                    e.jsx(N, {
                      stretch: !0,
                      className: "px-8 md:px-12",
                      onClick: () => j(Je(o)),
                      variant: "secondary",
                      children: t("common.withdraw"),
                    }),
                  ],
                }),
            ],
          }),
        });
      }),
      (Q = ({
        poolAssetValue: s,
        runeAssetValue: i,
        poolAddress: d,
        assetAddress: h,
        runeAddress: A,
        symmetric: p,
        isOpened: f,
        onClose: a,
      }) => {
        const { isWalletLoading: g, getWallet: c } = de(),
          { setIsConnectModalOpen: j } = Ke(),
          o = Xe(),
          [n, u] = l.useState(i ? "addRune" : "addAsset"),
          E = l.useCallback(async () => {
            if (n === "completed") return a();
            const { thorchain: x } = await (
              await Qe(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (m) => (await m.__tla, m))
                    .then((m) => m.hc),
                __vite__mapDeps([0, 1])
              )
            ).getSwapKitClient();
            if (!x) throw new Error("SwapKit client not found");
            const w = p || !!(i && s),
              C = ye(),
              R = ye();
            if (n === "addRune" && i) {
              u("pendingRune"),
                o(
                  oe({
                    id: C,
                    type: le.TC_LP_ADD,
                    inChain: i.chain,
                    label: t("txManager.addAmountAsset", {
                      asset: i.ticker,
                      amount: i.toSignificant(6),
                    }),
                  })
                );
              try {
                const m = await x.addLiquidityPart({
                  address: h,
                  assetValue: i,
                  poolAddress: d,
                  symmetric: w,
                });
                m
                  ? (o(ce({ id: C, txid: m, status: "pending" })),
                    u(w ? "addAsset" : "completed"),
                    ue(
                      t("txManager.addLiquidity"),
                      t("txManager.addedAmountAsset", {
                        asset: i.ticker,
                        amount: i.toSignificant(6),
                      })
                    ))
                  : (u("addRune"),
                    $(t("txManager.addLiquidity"), t("txManager.failed")),
                    o(U({ id: C, status: "error" })));
              } catch (m) {
                u("addRune"),
                  $(
                    t("txManager.addLiquidity"),
                    t("txManager.failed"),
                    void 0,
                    m
                  ),
                  o(U({ id: C, status: "error" }));
              }
            }
            if (n === "addAsset" && s) {
              u("pendingAsset"),
                o(
                  oe({
                    id: R,
                    type: le.TC_LP_ADD,
                    inChain: s.chain,
                    label: t("txManager.addAmountAsset", {
                      asset: s.ticker,
                      amount: s.toSignificant(6),
                    }),
                  })
                );
              try {
                const m = await x.addLiquidityPart({
                  address: A,
                  assetValue: s,
                  poolAddress: d,
                  symmetric: w,
                });
                m
                  ? (u("completed"),
                    o(ce({ id: R, txid: m, status: "pending" })),
                    ue(
                      t("txManager.addLiquidity"),
                      t("txManager.addedAmountAsset", {
                        asset: s.ticker,
                        amount: s.toSignificant(6),
                      })
                    ))
                  : (u("addAsset"),
                    $(t("txManager.addLiquidity"), t("txManager.failed")),
                    o(U({ id: R, status: "error" })));
              } catch (m) {
                u("addAsset"),
                  $(
                    t("txManager.addLiquidity"),
                    t("txManager.failed"),
                    void 0,
                    m
                  ),
                  o(U({ id: R, status: "error" }));
              }
            }
          }, [n, a, p, i, s, o, h, d, A]),
          D = l.useMemo(() => {
            const x = [];
            return (
              i &&
                x.push({
                  label: e.jsxs(r, {
                    center: !0,
                    children: [
                      e.jsx(r, {
                        className: "mr-2",
                        children:
                          n === "pendingRune"
                            ? e.jsx(pe, {})
                            : n === "addRune"
                            ? e.jsx(q, { color: "yellow", name: "inIcon" })
                            : e.jsx(q, {
                                color: "green",
                                name: "checkBoxChecked",
                              }),
                      }),
                      e.jsx(M, {
                        children: t("views.addLiquidity.addAssetStatusLabel", {
                          asset: i.ticker,
                        }),
                      }),
                    ],
                  }),
                  value: `${i.toSignificant(6)} ${i.ticker}`,
                }),
              s &&
                x.push({
                  label: e.jsxs(r, {
                    center: !0,
                    children: [
                      e.jsx(r, {
                        className: "mr-2",
                        children:
                          n === "completed"
                            ? e.jsx(q, {
                                color: "green",
                                name: "checkBoxChecked",
                              })
                            : n === "pendingAsset"
                            ? e.jsx(pe, {})
                            : e.jsx(q, { color: "yellow", name: "inIcon" }),
                      }),
                      e.jsx(M, {
                        children: t("views.addLiquidity.addAssetStatusLabel", {
                          asset: s.ticker,
                        }),
                      }),
                    ],
                  }),
                  value: `${s.toSignificant(6)} ${s.ticker}`,
                }),
              x
            );
          }, [s, i, n]),
          I = l.useMemo(() => {
            switch (n) {
              case "addRune":
                return t("views.addLiquidity.addAssetLabel", {
                  asset: i == null ? void 0 : i.ticker,
                });
              case "addAsset":
                return t("views.addLiquidity.addAssetLabel", {
                  asset: s == null ? void 0 : s.ticker,
                });
              case "pendingAsset":
                return t("views.addLiquidity.pendingAssetLabel", {
                  asset: s == null ? void 0 : s.ticker,
                });
              case "pendingRune":
                return t("views.addLiquidity.pendingAssetLabel", {
                  asset: i == null ? void 0 : i.ticker,
                });
              case "completed":
                return t("common.close");
              default:
                return;
            }
          }, [s, i, n]),
          b = l.useMemo(() => {
            var x, w;
            switch (n) {
              case "addRune":
              case "pendingRune":
                return ((x = c(F.THORChain)) == null
                  ? void 0
                  : x.walletType) === V.LEDGER
                  ? t("views.addLiquidity.openLedgerWallet", {
                      chain: me(F.THORChain),
                      asset: S.ticker,
                      wallet: V.LEDGER,
                    })
                  : void 0;
              case "addAsset":
              case "pendingAsset":
                return s &&
                  ((w = c(s.chain)) == null ? void 0 : w.walletType) ===
                    V.LEDGER
                  ? t("views.addLiquidity.openLedgerWallet", {
                      chain: me(s.chain),
                      asset: s.ticker,
                      wallet: V.LEDGER,
                    })
                  : void 0;
              case "completed":
                return;
              default:
                return;
            }
          }, [c, s, n]),
          _ = l.useMemo(() => n === "completed", [n]);
        return e.jsx(Ze, {
          isOpened: f,
          onClose: a,
          title: t("views.addLiquidity.lpProgressModalTitle"),
          children: e.jsxs(r, {
            col: !0,
            children: [
              e.jsx(O, { items: D }),
              e.jsx(r, {
                className: "py-4",
                children: e.jsx(J, {
                  content: t("views.addLiquidity.lpProgressModalDescription"),
                  type: "info",
                }),
              }),
              b &&
                e.jsx(r, {
                  className: "py-4",
                  children: e.jsx(J, { content: b, type: "warn" }),
                }),
              e.jsxs(r, {
                row: !0,
                className: "pt-4",
                justify: _ ? "around" : "between",
                children: [
                  !_ &&
                    e.jsx(N, {
                      onClick: () => j(!0),
                      size: "md",
                      variant: "outlineSecondary",
                      children: t("common.changeWallet"),
                    }),
                  e.jsx(N, {
                    loading: g || ["pendingAsset", "pendingRune"].includes(n),
                    onClick: E,
                    size: _ ? "lg" : "md",
                    variant: "fancy",
                    children: I,
                  }),
                ],
              }),
            ],
          }),
        });
      }),
      (Z = ({ poolAsset: s }) => {
        const { getMaxBalance: i, isWalletAssetConnected: d } = As(),
          { wallet: h } = de(),
          [A, p] = l.useState(s == null ? void 0 : s.set(0)),
          [f, a] = l.useState(S.set(0)),
          g = l.useMemo(
            () =>
              h[(s == null ? void 0 : s.chain) || k.chain]
                ? xe(s || k, h)
                : (s || k).set(10 ** 9),
            [s, h]
          );
        l.useEffect(() => {
          s &&
            i(s).then((j) => {
              p(j || he);
            });
        }, [s, i]),
          l.useEffect(() => {
            i(S).then((j) => a(j || he));
          }, [i]);
        const c = l.useMemo(
          () => (h[F.THORChain] ? xe(S, h) : S.set(10 ** 9)),
          [h]
        );
        return {
          isWalletAssetConnected: d,
          poolAssetBalance: A,
          maxPoolAssetBalance: g,
          runeBalance: f,
          maxRuneBalance: c,
        };
      }),
      (ee = (s) =>
        s === L.ASSET ? y.ASSET_ASYM : s === L.RUNE ? y.RUNE_ASYM : y.SYM),
      (Ae = () => {
        const { liquidityType: s, setLiquidityType: i } = us(),
          { poolAsset: d, handleSelectPoolAsset: h } = ps(),
          { pools: A, allPoolAssets: p } = xs(),
          f = Z({ poolAsset: d }),
          a = es(),
          g = cs(),
          c = l.useMemo(
            () =>
              A.find((P) => P.asset === (d || k).toString().toUpperCase()) ||
              A[0],
            [A, d]
          ),
          j = l.useMemo(
            () =>
              p
                .map(
                  (P) =>
                    g.find((G) => G.asset.eqAsset(P)) || {
                      asset: P,
                      balance: void 0,
                    }
                )
                .sort(
                  (P, G) =>
                    +(G.asset.type === "Native") - +(P.asset.type === "Native")
                ),
            [g, p]
          ),
          {
            addLiquiditySlip: o,
            approveConfirmInfo: n,
            assetAddress: u,
            asymmTipVisible: E,
            btnLabel: D,
            confirmInfo: I,
            depositAssets: b,
            feeInUSD: _,
            symmetric: x,
            handleAddLiquidity: w,
            handleApprove: C,
            handleChangeAssetAmount: R,
            handleChangeRuneAmount: m,
            handleConfirmProgressModal: B,
            handleConfirmApprove: T,
            handleSelectLiquidityType: z,
            isApproveRequired: W,
            isAssetApproveLoading: fe,
            isAssetPending: je,
            isDepositAvailable: we,
            isRunePending: Se,
            isValidDeposit: se,
            isWalletConnected: ve,
            lpMemberData: H,
            lpProgressModal: te,
            poolAddress: Me,
            poolAssetInput: ie,
            poolAssetValue: Le,
            poolShareEst: be,
            rate: Ce,
            runeAddress: Re,
            runeAssetInput: ae,
            runeAssetValue: qe,
            setAsymmTipVisible: ke,
            setIsConnectModalOpen: _e,
            setLpProgressModal: Ne,
            setVisibleApproveModal: Te,
            setVisibleConfirmModal: Pe,
            visibleApproveModal: Ee,
            visibleConfirmModal: De,
          } = ms({
            depositAssetsBalance: f,
            liquidityType: s,
            poolAsset: d || k,
            poolData: c,
            setLiquidityType: i,
          }),
          Ie = l.useMemo(() => !!Object.keys(H || {}).length, [H]);
        return e.jsxs(os, {
          description: t("views.addLiquidity.description"),
          header: e.jsx(ls, {
            actionsComponent: e.jsx(as, { transactionMode: !0 }),
            title: `${t("common.addLiquidity")} - ${
              d == null ? void 0 : d.ticker
            }${
              (c == null ? void 0 : c.status) === "staged" ? " (Staged)" : ""
            }`,
          }),
          keywords: "LP, Liquidity provider, LIGHTSwap AI, THORChain, DEFI, DEX",
          title: t("views.addLiquidity.title"),
          children: [
            e.jsx(rs, {
              onChange: z,
              options:
                (c == null ? void 0 : c.status) === "staged"
                  ? [L.SYMMETRICAL]
                  : [L.ASSET, L.SYMMETRICAL, L.RUNE],
              poolAsset: d || k,
              selected: s,
            }),
            e.jsx(hs, {
              isAssetPending: je,
              isRunePending: Se,
              liquidityType: s,
              onAssetAmountChange: R,
              onPoolChange: h,
              onRuneAmountChange: m,
              poolAsset: ie,
              poolAssetList: j,
              runeAsset: ae,
            }),
            e.jsx(gs, {
              fee: _,
              poolShare: be,
              poolTicker: ie.asset.ticker,
              rate: new v(Ce).toSignificant(6) || null,
              runeTicker: ae.asset.ticker,
              slippage: o,
            }),
            Ie && c && e.jsx(X, { ...H, poolDetail: c, shareType: ee(s) }),
            [L.ASSET, L.RUNE].includes(s) &&
              E &&
              e.jsx(J, {
                content: e.jsxs(e.Fragment, {
                  children: [
                    `${t("views.addLiquidity.asymmetricPoolNotice0", {
                      depositAsset: s === L.ASSET ? (d || k).ticker : S,
                      asset: (d || k).ticker,
                    })} `,
                    e.jsx(ss, {
                      className: "text-twitter-blue",
                      to: ts,
                      children: t("common.learnMore"),
                    }),
                  ],
                }),
                onClose: () => ke(!1),
                title: t("views.addLiquidity.asymmetricPoolTip"),
                type: "warn",
              }),
            W &&
              e.jsx(r, {
                className: "w-full pt-5",
                children: e.jsx(N, {
                  stretch: !0,
                  disabled: a,
                  error: a,
                  loading: fe,
                  onClick: C,
                  rightIcon: a
                    ? e.jsx(q, { name: "infoCircle", size: 20 })
                    : void 0,
                  size: "lg",
                  tooltip: a
                    ? t("views.liquidity.hardCapReachedTooltip")
                    : void 0,
                  variant: "fancy",
                  children: t("common.approve"),
                }),
              }),
            we &&
              e.jsx(r, {
                className: "w-full pt-5",
                children: e.jsx(N, {
                  stretch: !0,
                  disabled: !se.valid || a,
                  error: !se.valid || a,
                  onClick: w,
                  rightIcon: a
                    ? e.jsx(q, { name: "infoCircle", size: 20 })
                    : void 0,
                  size: "lg",
                  tooltip: a
                    ? t("views.liquidity.hardCapReachedTooltip")
                    : void 0,
                  variant: "fancy",
                  children: D,
                }),
              }),
            !ve &&
              e.jsx(r, {
                className: "w-full pt-5",
                children: e.jsx(N, {
                  stretch: !0,
                  onClick: () => _e(!0),
                  size: "lg",
                  variant: "fancy",
                  children: t("common.connectWallet"),
                }),
              }),
            e.jsx(ge, {
              inputAssets: b,
              isOpened: De,
              onClose: () => Pe(!1),
              onConfirm: B,
              children: e.jsx(O, { items: I }),
            }),
            d &&
              e.jsx(ge, {
                inputAssets: [d],
                isOpened: Ee,
                onClose: () => Te(!1),
                onConfirm: T,
                children: e.jsx(O, { items: n }),
              }),
            te &&
              e.jsx(Q, {
                assetAddress: u,
                isOpened: te,
                onClose: () => Ne(!1),
                poolAddress: Me,
                poolAssetValue: Le,
                runeAddress: Re,
                runeAssetValue: qe,
                symmetric: x,
              }),
          ],
        });
      });
  });
export { js as __tla, Ae as default };
