import{cn as m,cu as w,cv as r,cJ as n,cz as j,cL as d,cP as k}from"./assets/index-POi8GhpC.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1526eaa9-ab29-414a-b0d2-2b28f1118ece",e._sentryDebugIdIdentifier="sentry-dbid-1526eaa9-ab29-414a-b0d2-2b28f1118ece")}catch{}})();const v=m.memo(({title:e,titleWidth:t,tabs:c,tabWidth:a,value:i,onChange:h,buttonStyle:y,enabledTabs:l})=>{const b=w();return r.jsxs(n,{alignCenter:!0,flex:1,children:[!!e&&r.jsx(n,{style:t?{width:t}:{},children:r.jsx(j,{className:"px-2",textStyle:"caption",variant:"secondary",children:e})}),r.jsx(n,{alignCenter:!0,row:!0,className:d("border-light-gray-light dark:border-dark-gray-light hover:border-light-border-primary dark:hover:border-dark-gray-primary","px-1 py-1 rounded-2xl border border-solid transition"),flex:1,children:r.jsx(n,{className:d("flex-wrap self-stretch",{"gap-0":!a}),flex:1,justify:"between",children:c.map(({value:s,label:g,tooltip:p,chain:o},x,f)=>{const u=x===f.length-1;return r.jsx(k,{_dark:{bgColor:(o===i||s===i)&&`${b.colors.brand.btnPrimary}80`},_light:{color:b.colors.brand.light.textPrimary},alignSelf:"stretch",disabled:l&&!(l!=null&&l.includes(s)),flex:a?"initial":1,onClick:()=>h(o||s),style:a?{width:a}:{},sx:y,textTransform:"none",tooltip:p,tooltipWrapperClasses:d("w-[17%]",u?"mr-[63%]":"mr-0"),variant:o===i?"primary":"borderlessTint",width:"100%",children:g},s)})})})]})});export{v as T};