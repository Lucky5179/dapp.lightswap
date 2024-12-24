import {
  cn as o,
  gF as J,
  cA as t,
  cV as C,
  cv as e,
  cJ as i,
  cz as S,
  cM as $,
  dC as E,
  cY as K,
  cE as X,
  gG as Q,
  O as Z,
  eT as ee,
  eS as se,
  L as q,
  F as U,
  eR as te,
  cR as ae,
  cI as ie,
  cy as T,
  cL as R,
  cG as ne,
  cP as N,
  eU as W,
  eV as le,
  gH as re,
  ec as oe,
  cH as de,
  cT as ce,
  dt as me,
  dd as ue,
  ef as he,
  eY as pe,
  gI as O,
  dM as xe,
  dK as ge,
  cB as ye,
  _ as je,
  er as fe,
} from "./assets/index-POi8GhpC.js";
import { P as be } from "./C2Mbex37.js";
import { R as we } from "./DS3fE0e3.js";
import { V as ve } from "./BNG_iicX.js";
import { P as h } from "./zJSzH3N0.js";
import { A as Se } from "./B1amshOq.js";
import { I as Ne } from "./L2srWHi_.js";
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
      s = new a.Error().stack;
    s &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[s] = "8bf91b63-54c4-4176-aab0-6c1b48d7cef1"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-8bf91b63-54c4-4176-aab0-6c1b48d7cef1"));
  } catch {}
})();
const Ce = o.memo(
    ({
      asset: a,
      lpName: s,
      assetShare: p,
      contentRef: x,
      lastAddedDate: l,
      maxHeightStyle: g,
      poolShare: j,
      runeShare: d,
      shareType: c,
      runeWithdrawn: y,
      assetWithdrawn: f,
      runePending: m,
      assetPending: v,
      pendingTicker: b,
    }) => {
      const n = o.useCallback((A) => J(A, { toFixed: 6 }), []),
        I = o.useMemo(
          () => [
            ...(m !== "0"
              ? [{ label: t("views.liquidity.runePending"), value: n(m) }]
              : []),
            ...(v !== "0"
              ? [{ label: t("views.liquidity.assetPending"), value: n(v) }]
              : []),
            ...([h.SYM, h.RUNE_ASYM].includes(c)
              ? [
                  {
                    label: `${C.symbol} ${t("views.liquidity.share")}`,
                    value: e.jsxs(i, {
                      center: !0,
                      className: "gap-2",
                      children: [
                        e.jsx(S, { children: `${d} ${C.symbol}` }),
                        e.jsx($, { asset: C, size: 24 }),
                      ],
                    }),
                  },
                ]
              : []),
            ...([h.SYM, h.ASSET_ASYM].includes(c)
              ? [
                  {
                    label: `${a.ticker} ${t("views.liquidity.share")}`,
                    value: e.jsxs(i, {
                      center: !0,
                      className: "gap-2",
                      children: [
                        e.jsx(S, { children: `${p} ${a.ticker}` }),
                        e.jsx($, { asset: a, size: 24 }),
                      ],
                    }),
                  },
                ]
              : []),
            { label: t("views.liquidity.poolShare"), value: j },
            ...(y !== "0"
              ? [{ label: t("views.liquidity.runeWithdrawn"), value: n(y) }]
              : []),
            ...(f !== "0"
              ? [{ label: t("views.liquidity.assetWithdrawn"), value: n(f) }]
              : []),
            { label: t("views.liquidity.lastAdded"), value: l },
          ],
          [m, n, v, c, d, a, p, j, y, f, l]
        );
      return e.jsxs(i, {
        col: !0,
        className: "overflow-hidden ease-in-out transition-all",
        ref: x,
        style: g,
        children: [
          !!b &&
            e.jsx(S, {
              className: "brightness-90",
              textStyle: "caption",
              variant: "yellow",
              children: t("pendingLiquidity.content", { asset: b }),
            }),
          e.jsxs(i, {
            col: !0,
            className: "self-stretch pt-1 pb-2",
            children: [
              e.jsx(i, {
                alignCenter: !0,
                row: !0,
                justify: "between",
                children: e.jsx(S, {
                  className: "px-1.5",
                  textStyle: "caption",
                  variant: "cyan",
                  children: s,
                }),
              }),
              e.jsx(Ne, { horizontalInset: !0, items: I, size: "sm" }),
            ],
          }),
        ],
      });
    }
  ),
  Me = ({ poolUnits: a, liquidityUnits: s }) => {
    const p = q.fromBigInt(BigInt(a), 8);
    return q.fromBigInt(BigInt(s)).div(p).getValue("number");
  },
  qe = ({
    dateLastAdded: a,
    shareType: s,
    withFooter: p,
    pool: x,
    poolUnits: l = "0",
    sharedUnits: g,
    runePending: j,
    hardCapReached: d,
    assetPending: c,
    assetWithdrawn: y,
    runeWithdrawn: f,
    poolAssetDepth: m = "0",
    poolRuneDepth: v = "0",
  }) => {
    const b = E(),
      { isActive: n, contentRef: I, toggle: A, maxHeightStyle: Y } = K(),
      { isMdActive: z } = X(),
      r = o.useMemo(() => Q(x), [x]),
      u = o.useMemo(() => Z.fromStringSync(x), [x]),
      w = o.useMemo(() => {
        if (Number(j) > 0) return r;
        if (Number(c) > 0) return C.ticker;
      }, [c, r, j]),
      D = o.useMemo(
        () =>
          `${(s === h.SYM
            ? [C.ticker, r]
            : s === h.ASSET_ASYM
            ? [r]
            : [C.ticker]
          ).join(" + ")} LP`,
        [r, s]
      ),
      {
        runeShare: B,
        assetShare: _,
        poolShare: P,
      } = o.useMemo(() => {
        const M = {
            liquidityUnits: g,
            poolUnits: l,
            runeDepth: v,
            assetDepth: m,
          },
          k = Number.parseInt(l) > 0,
          F = k ? ee(M).getValue("string") : "0",
          H = k ? se(M).getValue("string") : "0",
          V =
            s === h.SYM && k
              ? q
                  .fromBigInt(BigInt(M.runeDepth), U.THOR)
                  .mul(M.liquidityUnits)
                  .div(l)
                  .getValue("string")
              : F,
          G =
            s === h.SYM && k
              ? q
                  .fromBigInt(BigInt(M.assetDepth), U.THOR)
                  .mul(M.liquidityUnits)
                  .div(l)
                  .getValue("string")
              : H,
          L = k ? Me({ liquidityUnits: g, poolUnits: l }) : 0;
        return {
          runeShare: new q(V).toSignificant(6),
          assetShare: new q(G).toSignificant(6),
          poolShare: L > 1e-4 ? `${te(L, 5)}` : "~0%",
        };
      }, [m, v, l, s, g]);
    return e.jsx(i, {
      col: !0,
      justifyCenter: !0,
      className: "self-stretch",
      children: e.jsxs(ae, {
        className: "!rounded-2xl p-2 !gap-1",
        type: w ? "warn" : "primary",
        children: [
          e.jsxs(i, {
            alignCenter: !0,
            className: "cursor-pointer",
            justify: "between",
            onClick: A,
            children: [
              e.jsxs(i, {
                center: !0,
                children: [
                  w &&
                    e.jsx(ie, {
                      content: t("pendingLiquidity.pendingLiquidity"),
                      children: e.jsx(T, {
                        className: "mr-3",
                        color: "yellow",
                        name: "warn",
                        size: 24,
                      }),
                    }),
                  e.jsx(i, {
                    col: !0,
                    children: e.jsx(Se, {
                      inline: !0,
                      asset1: u,
                      asset2: C,
                      size: n && z ? 40 : 32,
                    }),
                  }),
                  e.jsx(S, {
                    className: R(
                      "mx-1 md:mx-3 !transition-all",
                      n ? "text-body md:!text-subtitle1" : "!text-body"
                    ),
                    fontWeight: "semibold",
                    children: D,
                  }),
                ],
              }),
              e.jsxs(i, {
                center: !0,
                className: "gap-2",
                children: [
                  e.jsxs(i, {
                    col: !0,
                    align: "end",
                    children: [
                      e.jsx(S, {
                        className: R(
                          "!transition-all",
                          n ? "!text-body" : "!text-caption"
                        ),
                        fontWeight: "normal",
                        children: ` ${t("views.liquidity.poolShare")}`,
                      }),
                      e.jsx(S, {
                        className: R(
                          "!transition-all",
                          n ? "!text-subtitle1" : "!text-body"
                        ),
                        fontWeight: "bold",
                        children: P,
                      }),
                    ],
                  }),
                  e.jsx(T, {
                    className: R("transform duration-300 ease", {
                      "-rotate-180": n,
                    }),
                    color: "secondary",
                    name: "chevronDown",
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Ce, {
            asset: u,
            assetPending: c,
            assetShare: _,
            assetWithdrawn: y,
            contentRef: I,
            lastAddedDate: ne.unix(Number(a)).format("YYYY-MM-DD"),
            lpName: D,
            maxHeightStyle: Y,
            pendingTicker: w,
            poolShare: P,
            runePending: j,
            runeShare: B,
            runeWithdrawn: f,
            shareType: s,
          }),
          p &&
            e.jsxs(i, {
              justifyCenter: !0,
              className: "space-x-6 md:pr-0",
              children: [
                e.jsx(i, {
                  className: "w-full",
                  children: e.jsx(N, {
                    stretch: !0,
                    className: "px-8 md:px-12",
                    disabled: d,
                    onClick: () => b(W(u)),
                    rightIcon: d
                      ? e.jsx(T, { name: "infoCircle", size: 20 })
                      : void 0,
                    tooltip: d
                      ? t("views.liquidity.hardCapReachedTooltip")
                      : void 0,
                    tooltipClasses: "text-center mx-[-2px]",
                    variant: d ? "fancyError" : "primary",
                    children: w
                      ? t("views.liquidity.completeButton")
                      : t("views.liquidity.addButton"),
                  }),
                }),
                e.jsx(i, {
                  className: "w-full",
                  children: e.jsx(N, {
                    stretch: !0,
                    className: "px-8 md:px-12",
                    onClick: () => b(le(u)),
                    variant: "secondary",
                    children: t("common.withdraw"),
                  }),
                }),
              ],
            }),
        ],
      }),
    });
  },
  Ie = ({ chain: a, data: s, hardCapReached: p }) => {
    const x = o.useCallback(
        ({ assetAddress: d, runeAddress: c }) =>
          d && c ? h.SYM : d ? h.ASSET_ASYM : c ? h.RUNE_ASYM : h.SYM,
        []
      ),
      [l, g] = o.useMemo(() => {
        var y, f;
        const d =
            (y = s == null ? void 0 : s.find(({ assetAddress: m }) => m)) ==
            null
              ? void 0
              : y.assetAddress,
          c =
            (f = s == null ? void 0 : s.find(({ runeAddress: m }) => m)) == null
              ? void 0
              : f.runeAddress;
        return [d, c];
      }, [s]),
      j = o.useMemo(
        () => `${re()}?${g || l ? `${a.toLowerCase()}=${g || l}` : ""}`,
        [l, a, g]
      );
    return e.jsxs(i, {
      col: !0,
      className: "gap-1",
      children: [
        e.jsx(oe, {
          className: "!mx-1.5 pl-1.5",
          label: e.jsx(S, { children: de(a, !0) }),
          size: "sm",
          value: e.jsx(i, {
            className: "gap-x-2 mb-1",
            children: e.jsx(ce, {
              external: !0,
              to: j,
              children: e.jsx(N, {
                className: "px-2.5",
                leftIcon: e.jsx(T, { name: "chart", size: 16 }),
                tooltip: t("common.viewOnThoryield"),
                variant: "borderlessTint",
              }),
            }),
          }),
        }),
        s.map((d) =>
          o.createElement(qe, {
            ...d,
            withFooter: !0,
            hardCapReached: p,
            key: d.pool,
            shareType: x(d),
          })
        ),
      ],
    });
  },
  Ae = () => {
    const a = E(),
      { setIsConnectModalOpen: s } = me(),
      { walletAddresses: p, isWalletLoading: x } = ue(),
      l = he(),
      [g, j] = o.useState(!0),
      [d, c] = o.useState(!1),
      [y, f] = o.useState({}),
      [m, v] = o.useState({}),
      b = o.useMemo(
        () => (Object.values(m).length > 0 ? Object.values(m) : p),
        [p, m]
      ),
      {
        data: n,
        isFetching: I,
        refetch: A,
      } = pe(b, { skip: b.length === 0 || x }),
      Y = o.useMemo(
        () =>
          n == null
            ? void 0
            : n.some(
                ({ assetPending: r, runePending: u }) =>
                  Number.parseInt(r) > 0 || Number.parseInt(u) > 0
              ),
        [n]
      ),
      z = o.useMemo(
        () =>
          (n == null
            ? void 0
            : n.reduce((r, u) => {
                const [w] = u.pool.split(".");
                return (r[w] = [...(r[w] || []), u]), r;
              }, {})) ?? {},
        [n]
      );
    return e.jsxs(be, {
      description: t("views.liquidity.description"),
      header: e.jsx(ve, {
        actionsComponent: e.jsxs(e.Fragment, {
          children: [
            O &&
              e.jsx(N, {
                className: "mr-4",
                onClick: () => c(!0),
                size: "sm",
                variant: "fancy",
                children: "Test Modal",
              }),
            e.jsx(we, { loading: x || I, onLoad: A }),
          ],
        }),
        title: t("common.liquidityPosition"),
      }),
      keywords: "LP, Liquidity provider, LIGHTSwap AI, THORChain, DEFI, DEX",
      title: t("views.liquidity.title"),
      children: [
        e.jsxs(i, {
          col: !0,
          className: "gap-3 self-stretch",
          children: [
            Y &&
              g &&
              e.jsx(xe, {
                className: "mt-0 mb-4",
                content: t("pendingLiquidity.pendingInfoGeneral"),
                onClose: () => j(!1),
                title: t("pendingLiquidity.pendingInfoTitle"),
                type: "warn",
              }),
            e.jsx(i, {
              className: "w-full gap-x-8",
              justify: "between",
              children:
                b.length > 0
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(i, {
                          className: "w-full",
                          children: e.jsx(N, {
                            stretch: !0,
                            disabled: l,
                            onClick: () => a(W()),
                            rightIcon: l
                              ? e.jsx(T, { name: "infoCircle", size: 20 })
                              : void 0,
                            size: "lg",
                            tooltip: l
                              ? t("views.liquidity.hardCapReachedTooltip")
                              : void 0,
                            tooltipClasses: "text-center mx-[-2px]",
                            variant: l ? "fancyError" : "primary",
                            children: t("common.deposit"),
                          }),
                        }),
                        e.jsx(i, {
                          className: "w-full",
                          children: e.jsx(N, {
                            stretch: !0,
                            onClick: () => a(ge.CreateLiquidity),
                            size: "lg",
                            children: t("common.create"),
                          }),
                        }),
                      ],
                    })
                  : e.jsx(N, {
                      stretch: !0,
                      onClick: () => s(!0),
                      size: "lg",
                      variant: "fancy",
                      children: t("common.connectWallet"),
                    }),
            }),
            Object.entries(z).map(([r, u]) =>
              e.jsx(Ie, { chain: r, data: u, hardCapReached: l }, r)
            ),
          ],
        }),
        O &&
          e.jsx(ye, {
            isOpened: d,
            onClose: () => c(!1),
            title: "Type in address to show it's LP positions",
            children: e.jsxs(i, {
              col: !0,
              className: "gap-2",
              flex: 1,
              children: [
                Object.keys(je).map((r) =>
                  e.jsx(
                    fe,
                    {
                      stretch: !0,
                      border: "rounded",
                      className: "!text-md p-1.5 flex-1 border",
                      containerClassName:
                        "bg-light-gray-light dark:bg-dark-gray-light !bg-opacity-80",
                      onChange: (u) =>
                        f((w) => ({ ...w, [r]: u.target.value })),
                      placeholder: r,
                      value: y[r] ?? "",
                    },
                    r
                  )
                ),
                e.jsx(N, {
                  stretch: !0,
                  className: "mt-4",
                  onClick: () => {
                    v(y), c(!1);
                  },
                  size: "lg",
                  variant: "fancy",
                  children: "Save",
                }),
              ],
            }),
          }),
      ],
    });
  };
export { Ae as default };
