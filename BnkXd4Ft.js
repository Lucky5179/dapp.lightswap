import{cm as D,cn as d,eD as Ee,cv as h,cw as _,cr as V,ey as je,dR as Pe,co as Ce,cp as xt,cq as qt,cs as Me,ct as $e,cu as Te,cx as L,cz as G,eC as I,L as _e,cI as gt,cy as Ie,cX as Ne,cP as Xt}from"./assets/index-POi8GhpC.js";import{I as Ae}from"./L2srWHi_.js";import{C as Re}from"./Bujnyu6O.js";import{u as ze}from"./C3OMHbbi.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b7a7f380-5271-4c50-aa26-7a9e1d7d7760",t._sentryDebugIdIdentifier="sentry-dbid-b7a7f380-5271-4c50-aa26-7a9e1d7d7760")}catch{}})();const Kt=1/60*1e3,De=typeof performance<"u"?()=>performance.now():()=>Date.now(),Jt=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(De()),Kt);function Ve(t){let e=[],n=[],r=0,i=!1,c=!1;const o=new WeakSet,p={schedule:(a,l=!1,f=!1)=>{const u=f&&i,v=u?e:n;return l&&o.add(a),v.indexOf(a)===-1&&(v.push(a),u&&i&&(r=e.length)),a},cancel:a=>{const l=n.indexOf(a);l!==-1&&n.splice(l,1),o.delete(a)},process:a=>{if(i){c=!0;return}if(i=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let l=0;l<r;l++){const f=e[l];f(a),o.has(f)&&(p.schedule(f),t())}i=!1,c&&(c=!1,p.process(a))}};return p}const Le=40;let yt=!0,X=!1,wt=!1;const W={delta:0,timestamp:0},K=["read","update","preRender","render","postRender"],tt=K.reduce((t,e)=>(t[e]=Ve(()=>X=!0),t),{}),We=K.reduce((t,e)=>{const n=tt[e];return t[e]=(r,i=!1,c=!1)=>(X||Oe(),n.schedule(r,i,c)),t},{}),Be=K.reduce((t,e)=>(t[e]=tt[e].cancel,t),{});K.reduce((t,e)=>(t[e]=()=>tt[e].process(W),t),{});const Fe=t=>tt[t].process(W),Qt=t=>{X=!1,W.delta=yt?Kt:Math.max(Math.min(t-W.timestamp,Le),1),W.timestamp=t,wt=!0,K.forEach(Fe),wt=!1,X&&(yt=!1,Jt(Qt))},Oe=()=>{X=!0,yt=!0,wt||Jt(Qt)},Zt=()=>W;function Gt(t){const{value:e,defaultValue:n,onChange:r,shouldUpdate:i=(v,b)=>v!==b}=t,c=D(r),o=D(i),[p,a]=d.useState(n),l=e!==void 0,f=l?e:p,u=D(v=>{const b=typeof v=="function"?v(f):v;o(f,b)&&(l||a(b),c(b))},[l,c,f,o]);return[f,u]}function Ue(t){const e=parseFloat(t);return typeof e!="number"||Number.isNaN(e)?0:e}function He(t,e){let n=Ue(t);const r=10**(e??10);return n=Math.round(n*r)/r,e?n.toFixed(e):n.toString()}function Ye(t){if(!Number.isFinite(t))return 0;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n+=1;return n}function St(t,e,n){return(t-e)*100/(n-e)}function te(t,e,n){return(n-e)*t+e}function kt(t,e,n){const r=Math.round((t-e)/n)*n+e,i=Ye(n);return He(r,i)}function et(t,e,n){return t==null?t:(n<e&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(t,e),n))}function qe(t,e){return Array.isArray(t)?t.map(n=>n===null?null:e(n)):Ee(t)?Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{}):t!=null?e(t):null}var ee=t=>h.jsx(_.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});ee.displayName="StackItem";function Xe(t){const{spacing:e,direction:n}=t,r={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":qe(n,i=>r[i])}}var Et=V((t,e)=>{const{isInline:n,direction:r,align:i,justify:c,spacing:o="0.5rem",wrap:p,children:a,divider:l,className:f,shouldWrapChildren:u,...v}=t,b=n?"row":r??"column",A=d.useMemo(()=>Xe({spacing:o,direction:b}),[o,b]),x=!!l,S=!u&&!x,R=d.useMemo(()=>{const z=je(a);return S?z:z.map(($,Q)=>{const O=typeof $.key<"u"?$.key:Q,U=Q+1===z.length,E=u?h.jsx(ee,{children:$},O):$;if(!x)return E;const H=d.cloneElement(l,{__css:A}),w=U?null:H;return h.jsxs(d.Fragment,{children:[E,w]},O)})},[l,A,x,S,u,a]),F=Pe("chakra-stack",f);return h.jsx(_.div,{ref:e,display:"flex",alignItems:i,justifyContent:c,flexDirection:b,flexWrap:p,gap:x?void 0:o,className:F,...v,children:R})});Et.displayName="Stack";var N=t=>t?"":void 0,nt=t=>t?!0:void 0,B=(...t)=>t.filter(Boolean).join(" ");function rt(...t){return function(e){t.some(n=>(n==null||n(e),e==null?void 0:e.defaultPrevented))}}function Ke(t){return{root:`slider-root-${t}`,getThumb:e=>`slider-thumb-${t}-${e}`,getInput:e=>`slider-input-${t}-${e}`,track:`slider-track-${t}`,innerTrack:`slider-filled-track-${t}`,getMarker:e=>`slider-marker-${t}-${e}`,output:`slider-output-${t}`}}function J(t){const{orientation:e,vertical:n,horizontal:r}=t;return e==="vertical"?n:r}var st={width:0,height:0},it=t=>t||st;function ne(t){const{orientation:e,thumbPercents:n,thumbRects:r,isReversed:i}=t,c=x=>{var S;const R=(S=r[x])!=null?S:st;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...J({orientation:e,vertical:{bottom:`calc(${n[x]}% - ${R.height/2}px)`},horizontal:{left:`calc(${n[x]}% - ${R.width/2}px)`}})}},o=e==="vertical"?r.reduce((x,S)=>it(x).height>it(S).height?x:S,st):r.reduce((x,S)=>it(x).width>it(S).width?x:S,st),p={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...J({orientation:e,vertical:o?{paddingLeft:o.width/2,paddingRight:o.width/2}:{},horizontal:o?{paddingTop:o.height/2,paddingBottom:o.height/2}:{}})},a={position:"absolute",...J({orientation:e,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},l=n.length===1,f=[0,i?100-n[0]:n[0]],u=l?f:n;let v=u[0];!l&&i&&(v=100-v);const b=Math.abs(u[u.length-1]-u[0]),A={...a,...J({orientation:e,vertical:i?{height:`${b}%`,top:`${v}%`}:{height:`${b}%`,bottom:`${v}%`},horizontal:i?{width:`${b}%`,right:`${v}%`}:{width:`${b}%`,left:`${v}%`}})};return{trackStyle:a,innerTrackStyle:A,rootStyle:p,getThumbStyle:c}}function re(t){const{isReversed:e,direction:n,orientation:r}=t;return n==="ltr"||r==="vertical"?e:!e}function Je(t,e,n,r){return t.addEventListener(e,n,r),()=>{t.removeEventListener(e,n,r)}}function Qe(t){const e=Ge(t);return typeof e.PointerEvent<"u"&&t instanceof e.PointerEvent?t.pointerType==="mouse":t instanceof e.MouseEvent}function se(t){return!!t.touches}function Ze(t){return se(t)&&t.touches.length>1}function Ge(t){var e;return(e=t.view)!=null?e:window}function tn(t,e="page"){const n=t.touches[0]||t.changedTouches[0];return{x:n[`${e}X`],y:n[`${e}Y`]}}function en(t,e="page"){return{x:t[`${e}X`],y:t[`${e}Y`]}}function ie(t,e="page"){return se(t)?tn(t,e):en(t,e)}function nn(t){return e=>{const n=Qe(e);(!n||n&&e.button===0)&&t(e)}}function rn(t,e=!1){function n(r){t(r,{point:ie(r)})}return e?nn(n):n}function at(t,e,n,r){return Je(t,e,rn(n,e==="pointerdown"),r)}var sn=Object.defineProperty,an=(t,e,n)=>e in t?sn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e,n)=>(an(t,typeof e!="symbol"?e+"":e,n),n),on=class{constructor(t,e,n){k(this,"history",[]),k(this,"startEvent",null),k(this,"lastEvent",null),k(this,"lastEventInfo",null),k(this,"handlers",{}),k(this,"removeListeners",()=>{}),k(this,"threshold",3),k(this,"win"),k(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const p=jt(this.lastEventInfo,this.history),a=this.startEvent!==null,l=dn(p.offset,{x:0,y:0})>=this.threshold;if(!a&&!l)return;const{timestamp:f}=Zt();this.history.push({...p.point,timestamp:f});const{onStart:u,onMove:v}=this.handlers;a||(u==null||u(this.lastEvent,p),this.startEvent=this.lastEvent),v==null||v(this.lastEvent,p)}),k(this,"onPointerMove",(p,a)=>{this.lastEvent=p,this.lastEventInfo=a,We.update(this.updatePoint,!0)}),k(this,"onPointerUp",(p,a)=>{const l=jt(a,this.history),{onEnd:f,onSessionEnd:u}=this.handlers;u==null||u(p,l),this.end(),!(!f||!this.startEvent)&&(f==null||f(p,l))});var r;if(this.win=(r=t.view)!=null?r:window,Ze(t))return;this.handlers=e,n&&(this.threshold=n),t.stopPropagation(),t.preventDefault();const i={point:ie(t)},{timestamp:c}=Zt();this.history=[{...i.point,timestamp:c}];const{onSessionStart:o}=e;o==null||o(t,jt(i,this.history)),this.removeListeners=cn(at(this.win,"pointermove",this.onPointerMove),at(this.win,"pointerup",this.onPointerUp),at(this.win,"pointercancel",this.onPointerUp))}updateHandlers(t){this.handlers=t}end(){var t;(t=this.removeListeners)==null||t.call(this),Be.update(this.updatePoint)}};function ae(t,e){return{x:t.x-e.x,y:t.y-e.y}}function jt(t,e){return{point:t.point,delta:ae(t.point,e[e.length-1]),offset:ae(t.point,e[0]),velocity:un(e,.1)}}var ln=t=>t*1e3;function un(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=t[t.length-1];for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>ln(e)));)n--;if(!r)return{x:0,y:0};const c=(i.timestamp-r.timestamp)/1e3;if(c===0)return{x:0,y:0};const o={x:(i.x-r.x)/c,y:(i.y-r.y)/c};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function cn(...t){return e=>t.reduce((n,r)=>r(n),e)}function Pt(t,e){return Math.abs(t-e)}function oe(t){return"x"in t&&"y"in t}function dn(t,e){if(typeof t=="number"&&typeof e=="number")return Pt(t,e);if(oe(t)&&oe(e)){const n=Pt(t.x,e.x),r=Pt(t.y,e.y);return Math.sqrt(n**2+r**2)}return 0}function le(t){const e=d.useRef(null);return e.current=t,e}function ue(t,e){const{onPan:n,onPanStart:r,onPanEnd:i,onPanSessionStart:c,onPanSessionEnd:o,threshold:p}=e,a=!!(n||r||i||c||o),l=d.useRef(null),f=le({onSessionStart:c,onSessionEnd:o,onStart:r,onMove:n,onEnd(u,v){l.current=null,i==null||i(u,v)}});d.useEffect(()=>{var u;(u=l.current)==null||u.updateHandlers(f.current)}),d.useEffect(()=>{const u=t.current;if(!u||!a)return;function v(b){l.current=new on(b,f.current,p)}return at(u,"pointerdown",v)},[t,a,f,p]),d.useEffect(()=>()=>{var u;(u=l.current)==null||u.end(),l.current=null},[])}function hn(t,e){if(!t){e(void 0);return}e({width:t.offsetWidth,height:t.offsetHeight});const n=t.ownerDocument.defaultView??window,r=new n.ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const[c]=i;let o,p;if("borderBoxSize"in c){const a=c.borderBoxSize,l=Array.isArray(a)?a[0]:a;o=l.inlineSize,p=l.blockSize}else o=t.offsetWidth,p=t.offsetHeight;e({width:o,height:p})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}var pn=globalThis!=null&&globalThis.document?d.useLayoutEffect:d.useEffect;function mn(t,e){var n,r;if(!t||!t.parentElement)return;const i=(r=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?r:window,c=new i.MutationObserver(()=>{e()});return c.observe(t.parentElement,{childList:!0}),()=>{c.disconnect()}}function ce({getNodes:t,observeMutation:e=!0}){const[n,r]=d.useState([]),[i,c]=d.useState(0);return pn(()=>{const o=t(),p=o.map((a,l)=>hn(a,f=>{r(u=>[...u.slice(0,l),f,...u.slice(l+1)])}));if(e){const a=o[0];p.push(mn(a,()=>{c(l=>l+1)}))}return()=>{p.forEach(a=>{a==null||a()})}},[i]),n}function fn(t){return typeof t=="object"&&t!==null&&"current"in t}function vn(t){const[e]=ce({observeMutation:!1,getNodes(){return[fn(t)?t.current:t]}});return e}function bn(t){var e;const{min:n=0,max:r=100,onChange:i,value:c,defaultValue:o,isReversed:p,direction:a="ltr",orientation:l="horizontal",id:f,isDisabled:u,isReadOnly:v,onChangeStart:b,onChangeEnd:A,step:x=1,getAriaValueText:S,"aria-valuetext":R,"aria-label":F,"aria-labelledby":z,name:$,focusThumbOnChange:Q=!0,...O}=t,U=D(b),E=D(A),H=D(S),w=re({isReversed:p,direction:a,orientation:l}),[de,ut]=Gt({value:c,defaultValue:o??gn(n,r),onChange:i}),[ct,_t]=d.useState(!1),[dt,It]=d.useState(!1),ht=!(u||v),pt=(r-n)/10,Y=x||(r-n)/100,g=et(de,n,r),he=r-g+n,Nt=St(w?he:g,n,r),Z=l==="vertical",y=le({min:n,max:r,step:x,isDisabled:u,value:g,isInteractive:ht,isReversed:w,isVertical:Z,eventSource:null,focusThumbOnChange:Q,orientation:l}),mt=d.useRef(null),ft=d.useRef(null),At=d.useRef(null),pe=d.useId(),Rt=f??pe,[zt,Dt]=[`slider-thumb-${Rt}`,`slider-track-${Rt}`],me=d.useCallback(s=>{var m,T;if(!mt.current)return;const j=y.current;j.eventSource="pointer";const P=mt.current.getBoundingClientRect(),{clientX:vt,clientY:we}=(T=(m=s.touches)==null?void 0:m[0])!=null?T:s,Se=Z?P.bottom-we:vt-P.left,ke=Z?P.height:P.width;let bt=Se/ke;w&&(bt=1-bt);let q=te(bt,j.min,j.max);return j.step&&(q=parseFloat(kt(q,j.min,j.step))),q=et(q,j.min,j.max),q},[Z,w,y]),C=d.useCallback(s=>{const m=y.current;m.isInteractive&&(s=parseFloat(kt(s,m.min,Y)),s=et(s,m.min,m.max),ut(s))},[Y,ut,y]),M=d.useMemo(()=>({stepUp(s=Y){const m=w?g-s:g+s;C(m)},stepDown(s=Y){const m=w?g+s:g-s;C(m)},reset(){C(o||0)},stepTo(s){C(s)}}),[C,w,g,Y,o]),Vt=d.useCallback(s=>{const m=y.current,T={ArrowRight:()=>M.stepUp(),ArrowUp:()=>M.stepUp(),ArrowLeft:()=>M.stepDown(),ArrowDown:()=>M.stepDown(),PageUp:()=>M.stepUp(pt),PageDown:()=>M.stepDown(pt),Home:()=>C(m.min),End:()=>C(m.max)}[s.key];T&&(s.preventDefault(),s.stopPropagation(),T(s),m.eventSource="keyboard")},[M,C,pt,y]),Lt=(e=H==null?void 0:H(g))!=null?e:R,Wt=vn(ft),{getThumbStyle:Bt,rootStyle:Ft,trackStyle:Ot,innerTrackStyle:Ut}=d.useMemo(()=>{const s=y.current,m=Wt??{width:0,height:0};return ne({isReversed:w,orientation:s.orientation,thumbRects:[m],thumbPercents:[Nt]})},[w,Wt,Nt,y]),Ht=d.useCallback(()=>{y.current.focusThumbOnChange&&setTimeout(()=>{var s;return(s=ft.current)==null?void 0:s.focus()})},[y]);Ce(()=>{const s=y.current;Ht(),s.eventSource==="keyboard"&&(E==null||E(s.value))},[g,E]);function Yt(s){const m=me(s);m!=null&&m!==y.current.value&&ut(m)}ue(At,{onPanSessionStart(s){const m=y.current;m.isInteractive&&(_t(!0),Ht(),Yt(s),U==null||U(m.value))},onPanSessionEnd(){const s=y.current;s.isInteractive&&(_t(!1),E==null||E(s.value))},onPan(s){y.current.isInteractive&&Yt(s)}});const fe=d.useCallback((s={},m=null)=>({...s,...O,ref:xt(m,At),tabIndex:-1,"aria-disabled":nt(u),"data-focused":N(dt),style:{...s.style,...Ft}}),[O,u,dt,Ft]),ve=d.useCallback((s={},m=null)=>({...s,ref:xt(m,mt),id:Dt,"data-disabled":N(u),style:{...s.style,...Ot}}),[u,Dt,Ot]),be=d.useCallback((s={},m=null)=>({...s,ref:m,style:{...s.style,...Ut}}),[Ut]),xe=d.useCallback((s={},m=null)=>({...s,ref:xt(m,ft),role:"slider",tabIndex:ht?0:void 0,id:zt,"data-active":N(ct),"aria-valuetext":Lt,"aria-valuemin":n,"aria-valuemax":r,"aria-valuenow":g,"aria-orientation":l,"aria-disabled":nt(u),"aria-readonly":nt(v),"aria-label":F,"aria-labelledby":F?void 0:z,style:{...s.style,...Bt(0)},onKeyDown:rt(s.onKeyDown,Vt),onFocus:rt(s.onFocus,()=>It(!0)),onBlur:rt(s.onBlur,()=>It(!1))}),[ht,zt,ct,Lt,n,r,g,l,u,v,F,z,Bt,Vt]),ge=d.useCallback((s,m=null)=>{const T=!(s.value<n||s.value>r),j=g>=s.value,P=St(s.value,n,r),vt={position:"absolute",pointerEvents:"none",...xn({orientation:l,vertical:{bottom:w?`${100-P}%`:`${P}%`},horizontal:{left:w?`${100-P}%`:`${P}%`}})};return{...s,ref:m,role:"presentation","aria-hidden":!0,"data-disabled":N(u),"data-invalid":N(!T),"data-highlighted":N(j),style:{...s.style,...vt}}},[u,w,r,n,l,g]),ye=d.useCallback((s={},m=null)=>({...s,ref:m,type:"hidden",value:g,name:$}),[$,g]);return{state:{value:g,isFocused:dt,isDragging:ct},actions:M,getRootProps:fe,getTrackProps:ve,getInnerTrackProps:be,getThumbProps:xe,getMarkerProps:ge,getInputProps:ye}}function xn(t){const{orientation:e,vertical:n,horizontal:r}=t;return e==="vertical"?n:r}function gn(t,e){return e<t?t:t+(e-t)/2}var[yn,ot]=qt({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[wn,lt]=qt({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),Ct=V((t,e)=>{var n;const r={...t,orientation:(n=t==null?void 0:t.orientation)!=null?n:"horizontal"},i=Me("Slider",r),c=$e(r),{direction:o}=Te();c.direction=o;const{getInputProps:p,getRootProps:a,...l}=bn(c),f=a(),u=p({},e);return h.jsx(yn,{value:l,children:h.jsx(wn,{value:i,children:h.jsxs(_.div,{...f,className:B("chakra-slider",r.className),__css:i.container,children:[r.children,h.jsx("input",{...u})]})})})});Ct.displayName="Slider";var Mt=V((t,e)=>{const{getThumbProps:n}=ot(),r=lt(),i=n(t,e);return h.jsx(_.div,{...i,className:B("chakra-slider__thumb",t.className),__css:r.thumb})});Mt.displayName="SliderThumb";var $t=V((t,e)=>{const{getTrackProps:n}=ot(),r=lt(),i=n(t,e);return h.jsx(_.div,{...i,className:B("chakra-slider__track",t.className),__css:r.track})});$t.displayName="SliderTrack";var Tt=V((t,e)=>{const{getInnerTrackProps:n}=ot(),r=lt(),i=n(t,e);return h.jsx(_.div,{...i,className:B("chakra-slider__filled-track",t.className),__css:r.filledTrack})});Tt.displayName="SliderFilledTrack";var Sn=V((t,e)=>{const{getMarkerProps:n}=ot(),r=lt(),i=n(t,e);return h.jsx(_.div,{...i,className:B("chakra-slider__marker",t.className),__css:r.mark})});Sn.displayName="SliderMark";const kn=({balance:t,setApproveAmount:e})=>{const[n,r]=d.useState(!1),[i,c]=d.useState(!1),o=t==null?void 0:t.mul(3).add(1),p=10**Math.round(Math.log10(t==null?void 0:t.div(100).getValue("number"))),[a,l]=d.useState(t),f=t.lte(a),u=f&&a.lt(o)?"brand.btnPrimary":"brand.orange";return d.useEffect(()=>{e(o!=null&&o.eqValue(a)?void 0:a.getValue("string"))},[o,e,a]),h.jsxs(h.Fragment,{children:[h.jsxs(L,{direction:"row",flex:1,mb:2,mt:1,children:[h.jsxs(G,{mb:3,children:[I("views.swap.amountToApprove"),":"," ",a===o?"Infinite":new _e(a).toSignificant()," ",t.ticker]}),h.jsx(gt,{content:I("views.swap.amountToApproveExplanation"),place:"top",children:h.jsx(Ie,{className:"ml-1",color:"secondary",name:"infoCircle",size:18})})]}),h.jsx(L,{mx:2,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:h.jsxs(Ct,{max:o.getValue("number"),onChange:v=>l(t.set(v)),onChangeEnd:()=>r(!1),onChangeStart:()=>r(!0),size:"lg",step:p,value:a.getValue("number"),children:[h.jsx($t,{bg:"textSecondary",boxSize:2,children:h.jsx(Tt,{bg:u,boxSize:2,width:"50%"})}),h.jsx(Ne,{hasArrow:!0,bg:"bgPrimary",isOpen:i||n,label:h.jsxs(Et,{p:1,children:[h.jsxs(L,{children:[h.jsx(G,{textStyle:"caption-xs",variant:"secondary",children:"Amount to approve: \xA0"}),h.jsxs(G,{color:"textPrimary",textStyle:"caption-xs",children:[a.eqValue(o)?"Infinite":a.getValue("string")," ",t.ticker]})]}),!f&&h.jsx(G,{color:"textPrimary",textStyle:"caption-xs",children:I("views.swap.approveLessThanBalance")})]}),placement:"top",children:h.jsx(Mt,{bgColor:u,boxSize:4})}),h.jsx(L,{onClick:()=>{},sx:{w:4,h:4,borderRadius:"50%",bg:u,position:"absolute",top:"50%",transform:"translateY(-50%)",left:"-8px"}}),h.jsx(L,{onClick:()=>{},sx:{w:4,h:4,borderRadius:"50%",bg:"textSecondary",position:"absolute",top:"50%",transform:"translateY(-50%)",right:"-8px"}})]})}),h.jsxs(L,{flex:1,justify:"end",mt:2,mx:-2,children:[h.jsx(gt,{content:I("views.swap.approveDefaultExplanation"),children:h.jsx(Xt,{mr:2,onClick:()=>l(t),size:"xs",variant:"tint",children:I("common.default")})}),h.jsx(gt,{content:I("views.swap.approveInfiniteExplanation"),children:h.jsx(Xt,{onClick:()=>l(o),size:"xs",textColor:"brand.orange",variant:"tint",children:I("views.swap.infinite")})})]})]})},En=d.memo(({balance:t,inputAsset:e,handleApprove:n,setVisible:r,totalFee:i,visible:c})=>{const[o,p]=d.useState(),a=d.useCallback(()=>{r(!1),n(o)},[o,n,r]),l=ze({assetName:e.ticker,assetValue:e.toString(),fee:i});return h.jsxs(Re,{inputAssets:[e],isOpened:c,onClose:()=>r(!1),onConfirm:a,children:[h.jsx(Ae,{items:l}),t!=null&&t.getValue("number")?h.jsx(kn,{balance:t,setApproveAmount:p}):null]})});export{En as A,Et as S,ce as a,ue as b,et as c,nt as d,N as e,rt as f,ne as g,re as h,Ke as i,B as j,Ct as k,$t as l,Tt as m,Mt as n,J as o,te as p,kt as r,Gt as u,St as v};