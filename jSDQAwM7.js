const __vite__fileDeps=["assets/index-POi8GhpC.js","assets/index-CWjS2nv2.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{cn as s,O as y,L as r,fm as ye,cv as e,cx as H,cz as g,dd as te,_ as D,ee as je,ej as Re,F as c,cG as Ne,gC as Ie,cE as Be,dt as Te,dl as _e,cA as o,gD as Ce,gE as He,df as Ae,dm as Oe,cV as j,dk as se,dq as ae,ds as Ee,dI as Pe,di as M,dG as ke,cJ as d,ei as k,cy as $,dM as le,cT as Se,cR as Ue,cM as ie,cL as re,cP as ne,ec as De,__tla as Me}from"./assets/index-POi8GhpC.js";import{A as $e}from"./BNvyzkU_.js";import{I as z}from"./L2srWHi_.js";import{C as ze,__tla as We}from"./Bujnyu6O.js";import{P as Ve}from"./vR8dScX-.js";import{T as Le}from"./CJGo2KxJ.js";import{b as Fe}from"./CGri0DVm.js";import{u as qe}from"./DdtGuP0z.js";import{U as oe}from"./Dm4mEk3Z.js";import{v as Ge}from"./Bb0RDO2T.js";import"./CZ5SrGDV.js";import"./C6gN5CZK.js";import"./DLie8hhL.js";import"./C8rAcL73.js";import"./CYwjOChi.js";import"./DtctggWu.js";import"./CNj6CspX.js";let ce,Ke=Promise.all([(()=>{try{return Me}catch{}})(),(()=>{try{return We}catch{}})()]).then(async()=>{(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new t.Error().stack;l&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[l]="066dbc5d-65bc-4674-9d05-6e2aa0a437d8",t._sentryDebugIdIdentifier="sentry-dbid-066dbc5d-65bc-4674-9d05-6e2aa0a437d8")}catch{}})();const de=(t,l)=>{const p=s.useRef(()=>{});s.useEffect(()=>{p.current=t}),s.useEffect(()=>{if(l!==null){const n=setInterval(()=>p.current(),l||0);return()=>clearInterval(n)}},[l])},W=async()=>{const t=await oe.getRunePoolInfo();return{pol:{runeDeposited:r.fromBigInt(BigInt(t.pol.rune_deposited),c.THOR),runeWithdrawn:r.fromBigInt(BigInt(t.pol.rune_withdrawn),c.THOR),value:r.fromBigInt(BigInt(t.pol.value),c.THOR),pnl:r.fromBigInt(BigInt(t.pol.pnl),c.THOR),currentDeposit:r.fromBigInt(BigInt(t.pol.current_deposit),c.THOR)},providers:{units:r.fromBigInt(BigInt(t.providers.units),c.THOR),pendingUnits:t.providers.pending_units,pendingRune:t.providers.pending_rune,value:r.fromBigInt(BigInt(t.providers.value),c.THOR),pnl:r.fromBigInt(BigInt(t.providers.pnl),c.THOR),currentDeposit:r.fromBigInt(BigInt(t.providers.current_deposit),c.THOR)},reserve:{units:r.fromBigInt(BigInt(t.reserve.units),c.THOR),value:r.fromBigInt(BigInt(t.reserve.value),c.THOR),pnl:r.fromBigInt(BigInt(t.reserve.pnl),c.THOR),currentDeposit:r.fromBigInt(BigInt(t.reserve.current_deposit),c.THOR)}}},ue=async t=>{const l=await oe.getRunePoolProviderInfo({thorAddress:t});return{address:t,asset:y.from({asset:"THOR.RUNE"}),units:r.fromBigInt(BigInt(l.units),c.THOR),value:r.fromBigInt(BigInt(l.value),c.THOR),pnl:r.fromBigInt(BigInt(l.pnl),c.THOR),depositAmount:r.fromBigInt(BigInt(l.deposit_amount),c.THOR),withdrawAmount:r.fromBigInt(BigInt(l.withdraw_amount),c.THOR),lastDepositHeight:l.last_deposit_height,lastWithdrawHeight:l.last_withdraw_height}},V={asset:y.from({asset:"THOR.RUNE"}),address:"",units:new r({value:0,decimal:8}),value:new r({value:0,decimal:8}),pnl:new r({value:0,decimal:8}),depositAmount:new r({value:0,decimal:8}),withdrawAmount:new r({value:0,decimal:8}),lastDepositHeight:0,lastWithdrawHeight:0},me=()=>{const[t,l]=s.useState([]),p=s.useCallback(async()=>{const n=await(await ye(async()=>await W(),1e3,{leading:!0,trailing:!1}))(),f=[{label:"Users",value:`${n.providers.value.toCurrency("")} RUNE`}],h=[{label:"Users",value:`${n.providers.pnl.toCurrency("")} RUNE`}],N=[{label:"Total Rune in Pool",value:n?`${y.from({asset:"THOR.RUNE",value:n.providers.value}).toCurrency("")} RUNE`:"-",tooltip:e.jsxs(H,{className:"flex flex-col",children:[e.jsx(g,{fontSize:"10px",variant:"primary",children:"Breakdown of Rune in Pool by source."}),e.jsx(z,{items:f})]})},{label:"Total RUNEPool PnL",value:n?`${y.from({asset:"THOR.RUNE",value:n.providers.pnl}).toCurrency("")} RUNE`:"-",tooltip:e.jsxs(H,{className:"flex flex-col",children:[e.jsx(g,{fontSize:"10px",variant:"primary",children:"Breakdown of RUNEPool PnL by source."}),e.jsx(z,{items:h})]})}];l(N)},[]);return{stats:t,refreshStats:p}},L=()=>{const{wallet:t,isWalletLoading:l}=te(),[p,n]=s.useState(V);return s.useEffect(()=>{if(l)return;const f=t[D.THORChain];if(!f){n(V);return}ue(f.address).then(n)},[t,l]),{position:p}},pe=()=>{const{runePoolDepositMaturityBlocks:t,runePoolMaxReserveBackstop:l,isRunePoolHalted:p,polMaxNetworkDeposit:n}=je(),{data:f}=Re(),{position:h}=L(),[N,A]=s.useState({depositAvailability:!1,withdrawalAvailability:!1}),C=s.useMemo(()=>{var w;return(w=f==null?void 0:f[0])==null?void 0:w.thorchain},[f]),O=s.useCallback(async()=>{const w=await W(),I=!0;let B=!0;if(p){A({depositAvailability:!1,withdrawalAvailability:!1});return}B=((h==null?void 0:h.lastDepositHeight)??0)+t<=C,w.reserve.value.gte(l.add(n))&&(B=!1),A({depositAvailability:I,withdrawalAvailability:B})},[p,C,n,h==null?void 0:h.lastDepositHeight,t,l]);return{availability:N,refreshAvailability:O}};var R=(t=>(t.Deposit="deposit",t.Withdraw="withdraw",t))(R||{});Ne.extend(Ie.duration),ce=()=>{var X,Y;const{isLgActive:t}=Be(),[l,p]=s.useState(R.Deposit),[n,f]=s.useState(new r({decimal:2,value:0})),{getMaxBalance:h}=qe(),{getWalletAddress:N}=te(),{setIsConnectModalOpen:A}=Te(),{availability:{depositAvailability:C,withdrawalAvailability:O},refreshAvailability:w}=pe(),I=_e(),{stats:B,refreshStats:F}=me(),[m,S]=s.useState(new r({value:0,decimal:8})),{position:a}=L(),[q,G]=s.useState(),[K,U]=s.useState(!1),fe=s.useMemo(()=>[{label:o("common.deposit"),value:R.Deposit},{label:o("common.withdraw"),value:R.Withdraw}],[]),E=s.useMemo(()=>N(D.THORChain),[N]),he=s.useCallback(i=>{S(m.set(0)),p(i)},[]),ge=s.useCallback(i=>{f(i)},[]);s.useEffect(()=>{E?h(y.from({asset:"THOR.RUNE"})).then(i=>G(i)):G(void 0)},[h,E]);const u=s.useMemo(()=>l===R.Deposit,[l]),J=s.useMemo(()=>u?Ce():He({basisPoints:n.mul(100).getValue("number"),affiliateAddress:"t",affiliateBasisPoints:200}),[n,u]),xe=s.useCallback(async()=>{const{thorchain:i,getExplorerTxUrl:x}=(await Ae(()=>import("./assets/index-POi8GhpC.js").then(async v=>(await v.__tla,v)).then(v=>v.hc),__vite__mapDeps([0,1]))).getSwapKitClient();if(!i)throw new Error("SwapKit client not found");U(!1);const _=Ge();I(Oe({id:_,label:o(u?"txManager.addAmountAsset":"txManager.withdrawAmountAsset",{asset:j.ticker,amount:u?m.getValue("string"):n.mul(a==null?void 0:a.value).div(100).toSignificant(6)}),type:u?se.TC_RUNEPOOL_ADD:se.TC_RUNEPOOL_WITHDRAW,inChain:j.chain}));try{const v={memo:J,assetValue:u?j.set(m.getValue("string")):j},ee=await i.deposit({...v,recipient:""});ee&&I(ae({id:_,status:"mined",txUrl:x({chain:D.THORChain,txHash:ee})}))}catch(v){Ee(v),I(ae({id:_,status:"error"}))}finally{S(new r({value:0,decimal:8}))}},[m,I,u,J,n]);de(()=>{F(),w()},3e4),s.useEffect(()=>{F(),w()},[a.address,E]);const{data:b}=Pe([a.asset]),T=s.useCallback(i=>{var x;return`$${(((x=b==null?void 0:b[a.asset.toString()])==null?void 0:x.price_usd)*i.getValue("number")||0*i.getValue("number")).toFixed(2)}`},[b,a.asset]),ve=s.useMemo(()=>{var i,x;return[{label:"Amount Deposited",value:e.jsx(M,{icon:"usdCircle",tooltip:T(a.depositAmount),value:`${a.depositAmount.getValue("string")} ${a.asset.ticker}`})},{label:"Amount Redeemable",value:e.jsx(M,{icon:"usdCircle",tooltip:T(a.value),value:`${(i=a==null?void 0:a.value)==null?void 0:i.getValue("string")} ${a.asset.ticker}`})},{label:"Total Earned",value:e.jsx(M,{icon:"usdCircle",tooltip:T(a.pnl||ke),value:`${(x=a==null?void 0:a.pnl)==null?void 0:x.getValue("string")} ${a.asset.ticker}`})}]},[T,a]),P=s.useMemo(()=>{var i;return{amount:m,value:m,balance:q,asset:j,usdPrice:(((i=b==null?void 0:b[j.toString()])==null?void 0:i.price_usd)||0)*m.getValue("number")}},[m,q,T]),we=[{label:o("common.action"),value:o(`common.${u?"deposit":"withdraw"}`)},{label:o("common.asset"),value:a.asset.ticker,icon:a.asset},{label:o("views.wallet.estimatedTime"),value:`${Fe.THOR} seconds`},{label:o("views.wallet.networkFee"),value:`0.02 ${P.asset.ticker}`},{label:o("common.amount"),value:`${m.gt(0)?m.toSignificant(6):(X=a.value)==null?void 0:X.mul(n).div(100).toSignificant(6)} ${P.asset.ticker}`}],Z=s.useMemo(()=>u&&m.eqValue(0)||!u&&n.eq(0),[m,n,u]),be=()=>{Z||U(!0)},Q=s.useMemo(()=>u?!C:!O,[C,O,u]);return e.jsxs(d,{col:!0,className:"w-full max-w-[880px] flex self-center gap-3 mt-2",children:[e.jsx("div",{className:"grid grid-cols-2 gap-4",children:B?B.map(i=>e.jsxs(k,{className:"!rounded-2xl p-4 flex flex-col gap-2",children:[e.jsx(g,{fontSize:"20px",variant:"primary",children:i.label}),e.jsx(H,{className:"flex-row gap-1 my-auto",children:e.jsx(g,{fontSize:"14px",variant:"secondary",children:i.value})})]},i.label)):e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"!rounded-2xl p-4 flex flex-col gap-2",children:e.jsx("div",{className:"flex w-full p-6",children:e.jsx($,{spin:!0,color:"primary",name:"loader",size:16})})},1),e.jsx(k,{className:"!rounded-2xl p-4 flex flex-col gap-2",children:e.jsx("div",{className:"flex w-full p-6",children:e.jsx($,{spin:!0,color:"primary",name:"loader",size:16})})},1)]})}),e.jsx("div",{className:"w-full my-2 border-0 border-b-2 border-solid !border-opacity-25 dark:border-dark-border-primary"}),e.jsxs(d,{className:"flex flex-col w-full",children:[e.jsx(le,{className:"m-auto !pt-2 !pb-1 !px-2 w-full items-start",content:o("views.runePool.warningContent"),contentClassName:"py-0",title:o("views.runePool.warningTitle"),type:"warn"}),e.jsx(d,{alignCenter:!0,className:"mt-4",children:e.jsxs(g,{className:"ml-3 mr-2",textStyle:"h3",children:[o("common.pool")," RUNE"]})}),e.jsxs(d,{alignCenter:!0,className:"px-3",justify:"start",children:[e.jsx(g,{fontWeight:"medium",textStyle:"caption",variant:"secondary",children:o("views.runePool.description",{asset:"RUNE"})}),e.jsx(Se,{to:"https://docs.thorswap.finance/thorswap/thorswap/runepool",children:e.jsx($,{className:"ml-1 my-auto",color:"primaryBtn",name:"infoCircle",size:18})})]})]}),e.jsxs(d,{row:!0,className:"w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-5 mt-2",children:[e.jsx(d,{col:!0,className:"self-stretch",children:e.jsxs(Ue,{className:"!rounded-2xl pt-2 !pb-0 !gap-0",type:"primary",children:[e.jsx(d,{alignCenter:!0,className:"cursor-pointer",justify:"between",children:e.jsxs(d,{alignCenter:!0,flex:1,justify:"between",children:[e.jsxs(d,{center:!0,children:[e.jsx(d,{col:!0,children:e.jsx(ie,{asset:y.from({asset:"THOR.RUNE"}),size:32})}),e.jsx(g,{className:re("mx-1 md:mx-3 !transition-all"),fontWeight:"semibold",children:a.asset.ticker})]}),e.jsxs(H,{children:[e.jsxs(g,{fontWeight:"bold",children:[(Y=a.value)==null?void 0:Y.toSignificant(8)," ",a.asset.ticker]}),e.jsx(g,{children:"\xA0"}),e.jsx(g,{fontWeight:"light",children:`(${T(a.value)})`})]})]})}),e.jsx(d,{className:"gap-2",children:e.jsx(z,{horizontalInset:!0,className:"my-3",items:ve,size:"sm"})})]})}),e.jsxs(d,{col:!0,className:re("flex h-full",t&&"w-full"),children:[e.jsx(k,{stretch:!0,className:"!rounded-2xl md:!rounded-3xl !p-4 flex-col items-center self-stretch space-y-1 shadow-lg md:w-full md:h-auto",size:"lg",children:e.jsxs(d,{col:!0,className:"self-stretch gap-2",children:[e.jsx(Le,{onChange:i=>he(i),tabs:fe,value:l}),l===R.Withdraw?e.jsx(Ve,{onChange:ge,percent:n,title:o("common.withdrawPercent")}):e.jsx($e,{hideZeroPrice:!0,noFilters:!0,singleAsset:!0,assets:[{asset:y.from({asset:"THOR.RUNE"})}],className:"flex-1",onAssetChange:()=>!1,onValueChange:S,poolAsset:P,selectedAsset:P}),e.jsx(d,{className:"self-stretch pt-5",children:E?e.jsx(d,{className:"w-full",children:e.jsx(ne,{stretch:!0,disabled:Q,error:Q,onClick:()=>be(),size:"lg",tooltipClasses:"text-center mx-[-2px]",variant:"fancy",children:u?o("common.deposit"):o("common.withdraw")})}):e.jsx(ne,{stretch:!0,onClick:()=>A(!0),size:"lg",variant:"fancy",children:o("common.connectWallet")})})]})}),K&&e.jsx(ze,{buttonDisabled:Z,inputAssets:[j],isOpened:K,onClose:()=>U(!1),onConfirm:()=>xe(),children:e.jsxs(d,{col:!0,className:"mb-5 gap-2",children:[e.jsx(H,{className:"flex flex-col",children:we.map(({label:i,value:x,icon:_})=>e.jsx(De,{label:i,value:e.jsxs(d,{center:!0,className:"gap-1",children:[e.jsx(g,{textStyle:"caption",children:x}),_&&e.jsx(ie,{asset:_,size:22})]})},i))}),e.jsx(le,{className:"m-auto !pt-2 !pb-1 !px-2 w-full",content:o("views.runePool.confirmModalInfoContent"),contentClassName:"py-0",title:o("views.runePool.confirmModalInfoTitle"),type:"warn"})]})})]})]})]})}});export{Ke as __tla,ce as default};