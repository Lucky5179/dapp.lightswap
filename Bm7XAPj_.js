const __vite__fileDeps=["assets/index-POi8GhpC.js","assets/index-CWjS2nv2.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{dd as A,dv as v,cn as n,df as h,fm as m,__tla as V}from"./assets/index-POi8GhpC.js";let u,y,I=Promise.all([(()=>{try{return V}catch{}})()]).then(async()=>{(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="97251c42-9f3e-4670-8b0e-b391a16ad7f6",e._sentryDebugIdIdentifier="sentry-dbid-97251c42-9f3e-4670-8b0e-b391a16ad7f6")}catch{}})(),u=async({contract:e,assetValue:t})=>{const{isAssetValueApproved:a}=await(await h(()=>import("./assets/index-POi8GhpC.js").then(async s=>(await s.__tla,s)).then(s=>s.hc),__vite__mapDeps([0,1]))).getSwapKitClient();return await a(t,e||"thorchain")};let d=0,f;f=({isWalletConnected:e,numberOfPendingApprovals:t,assetValue:a,contract:s,skip:r})=>{const[i,o]=n.useState(!1),[l,c]=n.useState(!i),p=n.useRef({assetValue:a,contract:s});p.current={assetValue:a,contract:s};const _=m(async()=>await u(p.current),500,{leading:!0,trailing:!1}),b=n.useMemo(()=>a.getValue("string"),[a]),g=n.useCallback(async()=>{try{o(await _())}finally{d=t,c(!1)}},[s,t]);return n.useEffect(()=>{if(r||!e)o(!r);else{c(!0);const w=d>t?1e4:0;setTimeout(()=>g(),w)}},[b,g,e,t,r]),{isApproved:i,isLoading:l}},y=({force:e,contract:t,assetValue:a})=>{const{getWalletAddress:s}=A(),{numberOfPendingApprovals:r}=v(),i=s(a.chain),o=n.useMemo(()=>!a.isGasAsset,[a]),{isApproved:l,isLoading:c}=f({isWalletConnected:!!i,numberOfPendingApprovals:r,skip:typeof e=="boolean"?!e:!1,assetValue:a,contract:o?t:void 0});return{isApproved:l||!i||!o,isWalletConnected:!!i,isLoading:c||r>0}}});export{I as __tla,u as c,y as u};