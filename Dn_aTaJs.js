const __vite__fileDeps = [
    "assets/index-POi8GhpC.js",
    "assets/index-CWjS2nv2.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  cn as t,
  cV as x,
  cv as s,
  cJ as y,
  cz as F,
  cA as o,
  cZ as Ne,
  dI as De,
  dl as Oe,
  dm as Ve,
  dk as ee,
  df as se,
  dp as Pe,
  ds as Re,
  dq as He,
  dr as te,
  dC as Le,
  dF as We,
  dB as ze,
  dd as Ue,
  dt as Be,
  e6 as Ze,
  _ as M,
  L as qe,
  e9 as Ge,
  cI as ae,
  cy as ne,
  db as Je,
  dM as oe,
  cH as Ke,
  fd as Xe,
  cP as ie,
  O as Qe,
  __tla as Ye,
} from "./assets/index-POi8GhpC.js";
import { A as ce } from "./BNvyzkU_.js";
import { G as es } from "./BwAMgJ-H.js";
import { I as re } from "./L2srWHi_.js";
import { C as ss, __tla as ts } from "./Bujnyu6O.js";
import { P as V } from "./ClP-vrwx.js";
import { P as as } from "./C2Mbex37.js";
import { V as ns } from "./BNG_iicX.js";
import { u as os } from "./8CFpYboC.js";
import { u as is } from "./BIRMHJJ4.js";
import { u as cs } from "./DdtGuP0z.js";
import { u as rs } from "./CNj6CspX.js";
import { A as ls } from "./C6gN5CZK.js";
import { u as ms } from "./Bcp9QaNf.js";
import { v as ds } from "./Bb0RDO2T.js";
import "./CZ5SrGDV.js";
import "./CYwjOChi.js";
import "./DtctggWu.js";
import "./DLie8hhL.js";
import "./C8rAcL73.js";
import "./CiJOrYqO.js";
import "./vSRfwVQ4.js";
import "./CJGo2KxJ.js";
let le,
  us = Promise.all([
    (() => {
      try {
        return Ye;
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
        var n =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          i = new n.Error().stack;
        i &&
          ((n._sentryDebugIds = n._sentryDebugIds || {}),
          (n._sentryDebugIds[i] = "3d65cc15-1521-4a54-8043-02d9c902c085"),
          (n._sentryDebugIdIdentifier =
            "sentry-dbid-3d65cc15-1521-4a54-8043-02d9c902c085"));
      } catch {}
    })();
    let P, R, H, L, W, z;
    (P = ({ memo: n, setMemo: i }) => {
      const { poolAssets: f } = ms(),
        [e] = t.useState("deposit"),
        [d, p] = t.useState(x),
        h = t.useMemo(() => f.map((r) => ({ asset: r })), [f]),
        u = t.useCallback(
          ({ target: { value: r } }) => {
            i(r);
          },
          [i]
        );
      return s.jsxs(y, {
        col: !0,
        className: "self-stretch gap-1",
        flex: 1,
        children: [
          s.jsx(y, {
            className: "self-stretch px-1.5",
            children: s.jsx(F, { children: o("common.msgDeposit") }),
          }),
          e === "swap" &&
            s.jsxs(y, {
              alignCenter: !0,
              className: "px-1.5",
              justify: "between",
              children: [
                s.jsxs(F, {
                  textStyle: "caption",
                  children: [o("views.send.outputAsset"), ":"],
                }),
                s.jsx(ls, { assets: h, onSelect: p, selected: d }),
              ],
            }),
          s.jsx(V, { onChange: u, title: o("common.memo"), value: n }),
        ],
      });
    }),
      (R = ""),
      (H = () => {
        const { customSendVisible: n } = Ne(),
          [i, f] = t.useState(""),
          [e, d] = t.useState(!1),
          { data: p } = De([x]),
          h = t.useMemo(() => {
            var r;
            return ((r = p[x.ticker]) == null ? void 0 : r.price_usd) || 0;
          }, [p]);
        t.useEffect(() => {
          n || d(!1);
        }, [n]);
        const u = [
          {
            label: o("views.send.toggleCustomTxForm"),
            status: e,
            onClick: () => d((r) => !r),
          },
        ];
        return {
          customRecipient: R,
          customMemo: i,
          setCustomMemo: f,
          customTxEnabled: e,
          switchCustomTxEnabledMenu: u,
          showCustomTxToggle: n,
          customFeeRune: `0.02 ${x.symbol}`,
          customFeeUsd: (h * 0.02).toFixed(2),
        };
      }),
      (L = ({
        sendAsset: n,
        recipientAddress: i,
        memo: f,
        setIsOpenConfirmModal: e,
        from: d,
        customTxEnabled: p = !1,
      }) => {
        const h = Oe();
        return t.useCallback(async () => {
          var u;
          if ((e(!1), n && (p || n.getValue("bigint") > 0))) {
            const r = ds(),
              w = `${o("txManager.send")} ${n.toSignificant(6)} ${
                n.isSynthetic ? "Synth " : ""
              }${n.ticker}`;
            h(
              Ve({
                id: r,
                from: i,
                inChain: n.chain,
                type: p ? ee.TC_DEPOSIT : ee.TC_SEND,
                label: w,
              })
            );
            const { thorchain: E, getWallet: C } = await (
              await se(
                () =>
                  import("./assets/index-POi8GhpC.js")
                    .then(async (c) => (await c.__tla, c))
                    .then((c) => c.hc),
                __vite__mapDeps([0, 1])
              )
            ).getSwapKitClient();
            try {
              if (!E) throw new Error("THORChain Provider not found");
              const c = p
                ? await E.deposit({
                    assetValue: n,
                    recipient: i,
                    memo: f,
                    from: d,
                  })
                : await ((u = C(n.chain)) == null
                    ? void 0
                    : u.transfer({
                        assetValue: n,
                        recipient: i,
                        memo: f,
                        from: d,
                      }));
              c && h(Pe({ id: r, txid: c }));
            } catch (c) {
              Re(c),
                h(He({ id: r, status: "error" })),
                te(
                  o("notification.sendTxFailed"),
                  c == null ? void 0 : c.toString(),
                  void 0,
                  c
                );
            }
          }
        }, [e, n, h, i, f, d, p]);
      }),
      (W = "0xe9495f24fF1E8DD8E803B6717Fb9264683CdD7bC"),
      (z = () => {
        const n = Le(),
          { assetParam: i } = We(),
          [f] = ze(),
          [e, d] = t.useState(x),
          p = t.useCallback((a) => {
            d((m) => m.set(a));
          }, []),
          h = t.useMemo(() => e.getValue("string"), [e]),
          [u, r] = t.useState(e.set(0)),
          [w, E] = t.useState(""),
          [C, c] = t.useState(f.get("recipient") || ""),
          [I, U] = t.useState(""),
          [me, N] = t.useState(!1),
          { wallet: j, getWallet: B, getWalletAddress: de } = Ue(),
          { setIsConnectModalOpen: ue } = Be(),
          { getMaxBalance: k } = cs(),
          {
            inputAssetUSDPrice: Z,
            inputFee: q,
            feeInUSD: pe,
            isLoading: G,
          } = rs({ type: "transfer", inputAsset: e }),
          {
            customMemo: J,
            customRecipient: he,
            setCustomMemo: fe,
            customTxEnabled: l,
            switchCustomTxEnabledMenu: xe,
            showCustomTxToggle: ge,
            customFeeRune: Ce,
            customFeeUsd: be,
          } = H(),
          v = l ? he : C,
          D = l ? J : w,
          A = l ? be : pe,
          $ = l ? Ce : `${q.getValue("string")} ${q.ticker}`,
          ye = L({
            setIsOpenConfirmModal: N,
            sendAsset: e,
            recipientAddress: v,
            memo: D,
            from: j ? de(e.chain) : void 0,
            customTxEnabled: l,
          });
        t.useEffect(() => {
          r(void 0), k(e).then((a) => r(a));
        }, [k, e]);
        const { loading: we, TNS: g } = os(C),
          _ = t.useMemo(() => {
            var a;
            return g != null && g.entries
              ? (a = g.entries.find(({ chain: m }) => m === e.chain)) == null
                ? void 0
                : a.address
              : "";
          }, [g, e.chain]);
        t.useEffect(() => {
          g && _ && (U(g.thorname), c(_));
        }, [g, _]),
          t.useEffect(() => {
            (() => {
              if (l) return d(x);
              if (i) {
                const [a, m, b] = i.split("."),
                  O =
                    [M.THORChain, M.Maya].includes(a) && b
                      ? `${a}.${m}/${b}`
                      : i,
                  Ie = Qe.from({ asset: O });
                d(Ie || x);
              } else d(x);
            })();
          }, [i, l]);
        const S = t.useMemo(() => e && !!B(e.chain), [e, B]),
          K = t.useMemo(() => {
            const a = [];
            if (!j) return a;
            for (const m of Object.keys(j)) {
              const b = j[m];
              if (b != null && b.balance) for (const O of b.balance) a.push(O);
            }
            return a;
          }, [j]),
          [je, ve] = t.useState([]),
          { assetInputProps: X, assets: _e } = is(je);
        t.useEffect(() => {
          Promise.all(
            K.map((a) => k(a, !0).then((m) => ({ asset: a, balance: m })))
          ).then((a) => {
            ve(a);
          });
        }, [k, K]);
        const Se = t.useCallback(
            (a) => {
              c(""), n(Ze(a));
            },
            [n]
          ),
          Q = t.useMemo(
            () =>
              e.chain === M.Ethereum &&
              C.toLocaleLowerCase() === W.toLocaleLowerCase(),
            [e, C]
          ),
          Y = t.useCallback(
            (a) => {
              p(
                S && u && a.gt(u) ? u.getValue("string") : a.getValue("string")
              );
            },
            [S, u, p]
          ),
          Te = t.useCallback(({ target: { value: a } }) => {
            c(a), U("");
          }, []),
          Me = t.useCallback(({ target: { value: a } }) => {
            E(a);
          }, []),
          Ee = t.useCallback(() => {
            N(!1);
          }, []),
          ke = t.useCallback(async () => {
            const { getAddressValidator: a } = await se(
              () =>
                import("./assets/index-POi8GhpC.js")
                  .then(async (m) => (await m.__tla, m))
                  .then((m) => m.hb),
              __vite__mapDeps([0, 1])
            );
            l ||
            (await a())({ chain: e.chain, address: v }) ||
            e.chain === M.Radix
              ? N(!0)
              : te(o("notification.invalidChainAddy", { chain: e.chain }));
          }, [l, e.chain, v]),
          T = t.useMemo(
            () => ({
              asset: e,
              value: new qe({ value: h, decimal: e.decimal }),
              balance: S ? u : void 0,
              usdPrice: Number.parseFloat(h) * Z,
            }),
            [Z, S, u, h, e]
          ),
          Ae = t.useMemo(
            () => [
              {
                label: o("common.transactionFee"),
                value: G
                  ? s.jsx(Ge, {})
                  : s.jsxs(y, {
                      center: !0,
                      className: "gap-2",
                      children: [
                        s.jsx(F, {
                          textStyle: "caption",
                          children: `${$} (${A})`,
                        }),
                        s.jsx(ae, {
                          content: o("views.send.txFeeTooltip"),
                          children: s.jsx(ne, {
                            color: "secondary",
                            name: "infoCircle",
                            size: 20,
                          }),
                        }),
                      ],
                    }),
              },
            ],
            [G, $, A]
          ),
          $e = t.useMemo(
            () => [
              {
                label: o("common.send"),
                value: `${e == null ? void 0 : e.toSignificant(6)} ${e.ticker}`,
              },
              {
                label: o("common.recipient"),
                value: l ? o("common.msgDeposit") : Je(v, 6),
              },
              { label: o("common.memo"), value: D },
              {
                label: o("common.transactionFee"),
                value: s.jsxs(y, {
                  center: !0,
                  className: "gap-2",
                  children: [
                    s.jsx(F, { variant: "caption", children: `${$} (${A})` }),
                    s.jsx(ae, {
                      content: o("views.send.txFeeTooltip"),
                      children: s.jsx(ne, {
                        color: "secondary",
                        name: "infoCircle",
                        size: 20,
                      }),
                    }),
                  ],
                }),
              },
            ],
            [e, l, v, D, $, A]
          ),
          Fe = t.useMemo(
            () =>
              `${o("common.recipientAddress")}${
                _ && I ? ` - ${I}.${e.chain}` : ""
              }`,
            [_, e.chain, I]
          );
        return s.jsxs(as, {
          description: o("views.send.description"),
          header: s.jsx(ns, {
            actionsComponent: s.jsx(es, {}),
            title: o("common.send"),
          }),
          keywords: "Wallet, Tokens, LIGHTSwap AI, THORChain, DEFI, DEX",
          title: o("views.send.title"),
          children: [
            s.jsx("div", {
              className: "relative self-stretch md:w-full",
              children: l
                ? s.jsx(ce, {
                    ...X,
                    hideZeroPrice: !0,
                    singleAsset: !0,
                    onValueChange: Y,
                    selectedAsset: T,
                  })
                : s.jsx(ce, {
                    ...X,
                    hideZeroPrice: !0,
                    assets: _e,
                    onAssetChange: Se,
                    onValueChange: Y,
                    selectedAsset: T,
                  }),
            }),
            !l &&
              s.jsxs(s.Fragment, {
                children: [
                  Q &&
                    s.jsx(oe, {
                      className: "m-auto !pt-2 !pb-1 !px-2",
                      content:
                        "Sending funds to this address will likely result in a loss of funds. Users should deposit using the 'depositWithExpiry' method on Etherscan.",
                      contentClassName: "py-0",
                      title: "Warning",
                      type: "warn",
                    }),
                  s.jsx(V, {
                    loading: we,
                    onChange: Te,
                    placeholder: `THORName / ${
                      T.asset.isSynthetic || T.asset.chain === M.THORChain
                        ? x.chain
                        : Ke(T.asset.chain)
                    } ${o("common.address")}`,
                    title: Fe,
                    value: C,
                  }),
                  w &&
                    s.jsx(oe, {
                      className: "m-auto !pt-2 !pb-1 !px-2",
                      content:
                        "Sending funds to an address with a custom memo is offered as a convenience tool and should only be used by advanced users knowing precisely what they are doing. LIGHTSwap AI is not responsible for any loss of funds using this functionality.",
                      contentClassName: "py-0",
                      title: "Warning",
                      type: "warn",
                    }),
                  s.jsx(V, {
                    collapsible: !0,
                    onChange: Me,
                    title: o("common.memo"),
                    value: w,
                  }),
                ],
              }),
            ge &&
              s.jsx(y, {
                className: "self-stretch",
                flex: 1,
                children: s.jsx(Xe, { className: "mx-0.5", items: xe }),
              }),
            l && s.jsx(P, { memo: J, setMemo: fe }),
            s.jsx(re, { horizontalInset: !0, items: Ae }),
            s.jsx(y, {
              center: !0,
              className: "w-full pt-5",
              children: S
                ? s.jsx(ie, {
                    stretch: !0,
                    disabled: Q,
                    onClick: ke,
                    size: "lg",
                    variant: "fancy",
                    children: o("common.send"),
                  })
                : s.jsx(ie, {
                    stretch: !0,
                    onClick: () => ue(!0),
                    size: "lg",
                    variant: "fancy",
                    children: o("common.connectWallet"),
                  }),
            }),
            s.jsx(ss, {
              inputAssets: [e],
              isOpened: me,
              onClose: Ee,
              onConfirm: ye,
              children: s.jsx(re, { items: $e }),
            }),
          ],
        });
      }),
      (le = z);
  });
export { us as __tla, le as default };
