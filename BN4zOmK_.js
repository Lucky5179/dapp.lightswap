import{cn as r,cv as n,cJ as h,cV as c}from"./assets/index-POi8GhpC.js";import{T as p}from"./CJGo2KxJ.js";import{L as a}from"./zJSzH3N0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1a4fba7f-31b8-4e2e-8dc8-f1d899ff2676",e._sentryDebugIdIdentifier="sentry-dbid-1a4fba7f-31b8-4e2e-8dc8-f1d899ff2676")}catch{}})();const y=({poolAsset:e,onChange:t,selected:s,options:l,title:i,tabsCount:u})=>{const o=r.useMemo(()=>g(l,e),[l,e]),f=`${Math.floor(100/Math.max(o.length,u||3))}%`,d=r.useCallback(b=>{t(b)},[t]);return n.jsx(h,{className:"self-stretch",children:n.jsx(p,{onChange:d,tabWidth:f,tabs:o,title:i,titleWidth:"25%",value:s})})},g=(e,t)=>{const s=[];return e.includes(a.ASSET)&&s.push({value:a.ASSET,label:t.ticker}),e.includes(a.SYMMETRICAL)&&s.push({value:a.SYMMETRICAL,label:`${t.ticker}+${c.ticker}`}),e.includes(a.RUNE)&&s.push({value:a.RUNE,label:c.ticker}),s};export{y as L};