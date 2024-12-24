import {
  e$ as k,
  f0 as D,
  f1 as I,
  cn as c,
  L as p,
  ee as L,
  eR as w,
  cA as t,
  cZ as R,
  cv as a,
  cJ as i,
  cz as b,
  dC as q,
  cM as H,
  O as y,
  f2 as j,
  cy as u,
  cI as S,
  f3 as C,
  f4 as N,
  cP as P,
  cU as V,
  _ as z,
  eU as E,
  f5 as $,
  cE as B,
  er as _,
  eg as M,
} from "./assets/index-POi8GhpC.js";
import {
  u as A,
  a as U,
  p as Y,
  S as O,
  s as F,
  g as h,
  G,
} from "./DTumzE8u.js";
import { S as J } from "./B5uxAM4_.js";
import { u as W } from "./Bcp9QaNf.js";
import { T as X } from "./DlFdII4L.js";
import "./DPMYbftn.js";
import "./DdNi1zY5.js";
import "./DLie8hhL.js";
import "./CTyLih9z.js";
import "./iCHHcf-3.js";
(function () {
  try {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      s = new o.Error().stack;
    s &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[s] = "04deae71-5fbc-41ae-9c5e-0c9921f53ad1"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-04deae71-5fbc-41ae-9c5e-0c9921f53ad1"));
  } catch {}
})();
const Z = () => {
    const o = A(),
      {
        tvlInRune: s,
        totalActiveBond: r,
        liquidityAPYLabel: e,
        totalVolume: l,
      } = U(),
      { data: n } = k(),
      { data: m } = D({ interval: "day", count: 1 }),
      { data: g } = I({ count: 1, interval: "day" }),
      v = c.useMemo(() => {
        if (!(m && g)) return "$0";
        const { totalVolumeUsd: f } = m.intervals[0],
          T = Y(f);
        return `$${new p(T).toAbbreviation()}`;
      }, [g, m]),
      { totalPooledRune: d } = L(),
      x = w(n == null ? void 0 : n.bondingAPY);
    return c.useMemo(
      () => [
        {
          iconName: "lockFill",
          color: "yellow",
          label: "TVL",
          value: o(s.getValue("string")),
          tooltip: t("views.stats.tvlTooltip"),
        },
        {
          iconName: "chartArea",
          color: "purple",
          label: t("views.stats.totalLiq"),
          value: o(
            `${
              (Number.parseInt(
                (n == null ? void 0 : n.totalPooledRune) || "0"
              ) /
                1e8) *
              2
            }`
          ),
          tooltip: t("views.stats.totalLiqTooltip"),
        },
        {
          iconName: "chartCandle",
          color: "pink",
          label: t("views.stats.totalBond"),
          value: o(r.getValue("string")),
          tooltip: t("views.stats.totalBondTooltip"),
        },
        {
          iconName: "barchart",
          color: "blueLight",
          label: t("views.stats.totalVolume"),
          value: `$${new p(l).toAbbreviation()}`,
          tooltip: t("views.stats.totalVolumeTooltip"),
        },
        {
          iconName: "history",
          color: "yellow",
          label: t("views.stats.24Volume"),
          value: v,
          tooltip: t("views.stats.24VolumeTooltip"),
        },
        {
          iconName: "percent",
          color: "purple",
          label: t("views.stats.liqAPY"),
          value: e,
          tooltip: t("views.stats.liqAPYTooltip"),
        },
        {
          iconName: "chartArea2",
          color: "pink",
          label: t("views.stats.totalRUNE"),
          value: `${d.toAbbreviation(1)} / ${r.toAbbreviation(1)}`,
          tooltip: t("views.stats.totalRUNETooltip"),
        },
        {
          iconName: "percent",
          color: "blueLight",
          label: t("views.stats.bondAPY"),
          value: x,
        },
      ],
      [v, e, l, r, d, n, s, x, o]
    );
  },
  K = () => {
    const { hideStats: o } = R(),
      s = Z();
    return o
      ? null
      : a.jsxs(i, {
          col: !0,
          children: [
            a.jsx(i, {
              alignCenter: !0,
              className: "gap-x-2 rounded-2xl",
              children: a.jsx(b, {
                textStyle: "h3",
                children: "THORChain Stats",
              }),
            }),
            a.jsx(O, { scrollable: !0, itemWidth: 230, list: s }),
          ],
        });
  },
  Q = c.memo(K),
  ee = ["1h", "24h", "7d", "30d", "90d", "100d", "180d", "365d"],
  ae = [
    "1 Hour",
    "24 Hours",
    "7 Days",
    "30 Days",
    "90 Days",
    "100 Days",
    "180 Days",
    "365 Days",
  ],
  te = ({ poolsLoading: o }) => {
    const s = q(),
      r = A();
    return c.useMemo(
      () => [
        {
          id: "pool",
          Header: () => t("common.pool"),
          accessor: (e) => e,
          sortType: F,
          Cell: ({ cell: { value: e } }) => {
            var l;
            return a.jsxs("div", {
              className: "flex flex-row items-center",
              children: [
                a.jsx(H, { asset: y.fromStringSync(e.asset), size: 40 }),
                a.jsxs(b, {
                  className: "hidden pl-4 h4 md:block",
                  children: [
                    e.status === "staged"
                      ? `(Staged)
`
                      : "",
                    (l = y.fromStringSync(e.asset)) == null ? void 0 : l.ticker,
                  ],
                }),
              ],
            });
          },
        },
        {
          id: "price",
          Header: () => t("common.usdPrice"),
          accessor: (e) => e.assetPriceUSD,
          align: "right",
          Cell: ({ cell: { value: e } }) => new p(e).toCurrency(),
          sortType: h("price"),
        },
        {
          id: "liquidity",
          Header: () => t("common.liquidity"),
          accessor: (e) => p.fromBigInt(BigInt(e.runeDepth), 8).mul(2),
          align: "right",
          Cell: ({ cell: { value: e } }) => r(e.getValue("string")),
          sortType: h("liquidity"),
        },
        {
          id: "volume24h",
          Header: () => t("common.24Volume"),
          accessor: (e) => p.fromBigInt(BigInt(e.volume24h), 8),
          align: "right",
          Cell: ({ cell: { value: e } }) => r(e.getValue("string")),
          minScreenSize: j.lg,
          sortType: h("volume24h"),
        },
        {
          id: "saversApr",
          Header: () => t("common.saversApr"),
          accessor: (e) => e.saversAPR,
          align: "right",
          Cell: ({ cell: { value: e } }) =>
            o || !e
              ? a.jsx(i, {
                  justify: "end",
                  children: a.jsx(u, { spin: !0, name: "loader", size: 16 }),
                })
              : e === "0"
              ? "N/A"
              : w(e),
          sortType: h("saversApr"),
          toolTip: a.jsx(S, {
            content: t("views.home.aprExplanation"),
            place: "bottom",
            children: a.jsx(C, {
              href: N,
              onClick: (e) => e.stopPropagation(),
              target: "_blank",
              zIndex: 1,
              children: a.jsx(u, {
                className:
                  "p-1 absolute top-1.5 text-xs rounded-lg transform mx-1 hover:bg-btn-primary fill-btn-primary hover:fill-white",
                name: "question",
                size: 16,
              }),
            }),
          }),
        },
        {
          id: "apr",
          Header: () => t("common.APR"),
          accessor: (e) => w(e.annualPercentageRate),
          align: "right",
          Cell: ({ cell: { value: e } }) =>
            o || !e
              ? a.jsx(i, {
                  justify: "end",
                  children: a.jsx(u, { spin: !0, name: "loader", size: 16 }),
                })
              : e,
          sortType: h("apr"),
          toolTip: a.jsx(S, {
            content: t("views.home.aprExplanation"),
            place: "bottom",
            children: a.jsx(C, {
              href: N,
              onClick: (e) => e.stopPropagation(),
              target: "_blank",
              zIndex: 1,
              children: a.jsx(u, {
                className:
                  "p-1 absolute top-1.5 text-xs rounded-lg transform mx-1 hover:bg-btn-primary fill-btn-primary hover:fill-white",
                name: "question",
                size: 16,
              }),
            }),
          }),
        },
        {
          id: "action",
          Header: () => t("common.action"),
          accessor: (e) => y.fromStringSync(e.asset),
          Cell: ({ cell: { value: e } }) =>
            a.jsxs(i, {
              row: !0,
              className: "gap-2",
              justify: "end",
              children: [
                a.jsx(P, {
                  onClick: (l) => {
                    l.stopPropagation(), s(V(y.from({ chain: z.Ethereum }), e));
                  },
                  variant: "outlineSecondary",
                  children: t("common.swap"),
                }),
                a.jsx(P, {
                  onClick: (l) => {
                    l.stopPropagation(), s(E(e));
                  },
                  variant: "outlinePrimary",
                  children: t("common.addLiquidity"),
                }),
              ],
            }),
          disableSortBy: !0,
          minScreenSize: j.md,
        },
      ],
      [s, r, o]
    );
  },
  oe = [{ id: "liquidity", desc: !0 }],
  se = ({ data: o, poolsLoading: s }) => {
    const r = c.useCallback(({ original: l }) => {
        $(l.asset);
      }, []),
      e = te({ poolsLoading: s });
    return a.jsx(i, {
      col: !0,
      center: !o.length,
      children: o.length
        ? a.jsx(X, {
            sortable: !0,
            columns: e,
            data: o,
            initialSort: oe,
            onRowClick: r,
          })
        : a.jsx(u, { spin: !0, name: "loader", size: 32 }),
    });
  },
  le = c.memo(() => {
    const [o, s] = c.useState(""),
      [r, e] = c.useState(3),
      { isMdActive: l } = B(),
      { pools: n, poolsLoading: m } = W(ee[r]),
      g = c.useMemo(
        () =>
          o
            ? n.filter(({ asset: d }) => {
                const x = d.toString().toLowerCase(),
                  f = o.toLowerCase();
                return x.includes(f);
              })
            : n,
        [n, o]
      ),
      v = c.useCallback((d) => {
        s(d.target.value);
      }, []);
    return a.jsx(i, {
      col: !0,
      children:
        l &&
        a.jsxs(i, {
          col: !0,
          className: "gap-8",
          children: [
            a.jsx(b, { textStyle: "h3", children: t("common.pools") }),
            a.jsxs(i, {
              alignCenter: !0,
              className: "flex-wrap gap-2 lg:flex-row",
              justify: "between",
              children: [
                a.jsx(i, {
                  className: "w-fit gap-2",
                  children: a.jsx(_, {
                    border: "rounded",
                    icon: "search",
                    onChange: v,
                    placeholder: "Search",
                    value: o,
                  }),
                }),
                a.jsxs(i, {
                  className: "w-fit gap-2",
                  children: [
                    a.jsx(b, {
                      className: "pt-2",
                      textStyle: "p",
                      children: t("views.home.aprPeriodRange"),
                    }),
                    a.jsx(J, {
                      forceDropdown: !0,
                      activeIndex: r,
                      disableDropdown: !1,
                      dropdownPlacement: "start-start",
                      onChange: e,
                      options: ae,
                    }),
                  ],
                }),
              ],
            }),
            a.jsx(se, { data: g, poolsLoading: m }),
          ],
        }),
    });
  }),
  ie = () =>
    a.jsxs(i, {
      col: !0,
      children: [
        a.jsx(M, {
          content: t("views.home.description"),
          keywords: "Liquidity, Pools, THORChain, LIGHTSwap AI, DEFI, DEX",
          title: t("views.home.title"),
        }),
        a.jsxs(i, {
          col: !0,
          className: "pt-2",
          children: [
            a.jsx("div", { className: "pb-4", children: a.jsx(Q, {}) }),
            a.jsx(G, {}),
            a.jsx(le, {}),
          ],
        }),
      ],
    }),
  re = ie;
export { re as default };
