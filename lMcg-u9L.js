import{ge as st,gf as ot}from"./assets/index-POi8GhpC.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new s.Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="ca8d87a7-0af9-4250-baa1-c204d4a39c47",s._sentryDebugIdIdentifier="sentry-dbid-ca8d87a7-0af9-4250-baa1-c204d4a39c47")}catch{}})();var a={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.add5L=r.add5H=r.add4H=r.add4L=r.add3H=r.add3L=r.add=r.rotlBL=r.rotlBH=r.rotlSL=r.rotlSH=r.rotr32L=r.rotr32H=r.rotrBL=r.rotrBH=r.rotrSL=r.rotrSH=r.shrSL=r.shrSH=r.toBig=r.split=r.fromBig=void 0;const H=BigInt(2**32-1),y=BigInt(32);function w(s,t=!1){return t?{h:Number(s&H),l:Number(s>>y&H)}:{h:Number(s>>y&H)|0,l:Number(s&H)|0}}r.fromBig=w;function I(s,t=!1){let o=new Uint32Array(s.length),e=new Uint32Array(s.length);for(let n=0;n<s.length;n++){const{h,l:i}=w(s[n],t);[o[n],e[n]]=[h,i]}return[o,e]}r.split=I;const _=(s,t)=>BigInt(s>>>0)<<y|BigInt(t>>>0);r.toBig=_;const S=(s,t,o)=>s>>>o;r.shrSH=S;const O=(s,t,o)=>s<<32-o|t>>>o;r.shrSL=O;const m=(s,t,o)=>s>>>o|t<<32-o;r.rotrSH=m;const x=(s,t,o)=>s<<32-o|t>>>o;r.rotrSL=x;const v=(s,t,o)=>s<<64-o|t>>>o-32;r.rotrBH=v;const A=(s,t,o)=>s>>>o-32|t<<64-o;r.rotrBL=A;const E=(s,t)=>t;r.rotr32H=E;const F=(s,t)=>s;r.rotr32L=F;const U=(s,t,o)=>s<<o|t>>>32-o;r.rotlSH=U;const X=(s,t,o)=>t<<o|s>>>32-o;r.rotlSL=X;const D=(s,t,o)=>t<<o-32|s>>>64-o;r.rotlBH=D;const M=(s,t,o)=>s<<o-32|t>>>64-o;r.rotlBL=M;function N(s,t,o,e){const n=(t>>>0)+(e>>>0);return{h:s+o+(n/2**32|0)|0,l:n|0}}r.add=N;const P=(s,t,o)=>(s>>>0)+(t>>>0)+(o>>>0);r.add3L=P;const j=(s,t,o,e)=>t+o+e+(s/2**32|0)|0;r.add3H=j;const C=(s,t,o,e)=>(s>>>0)+(t>>>0)+(o>>>0)+(e>>>0);r.add4L=C;const K=(s,t,o,e,n)=>t+o+e+n+(s/2**32|0)|0;r.add4H=K;const W=(s,t,o,e,n)=>(s>>>0)+(t>>>0)+(o>>>0)+(e>>>0)+(n>>>0);r.add5L=W;const q=(s,t,o,e,n,h)=>t+o+e+n+h+(s/2**32|0)|0;r.add5H=q;const rt={fromBig:w,split:I,toBig:_,shrSH:S,shrSL:O,rotrSH:m,rotrSL:x,rotrBH:v,rotrBL:A,rotr32H:E,rotr32L:F,rotlSH:U,rotlSL:X,rotlBH:D,rotlBL:M,add:N,add3L:P,add3H:j,add4L:C,add4H:K,add5H:q,add5L:W};r.default=rt,Object.defineProperty(a,"__esModule",{value:!0}),a.shake256=a.shake128=Y=a.keccak_512=a.keccak_384=V=a.keccak_256=a.keccak_224=a.sha3_512=a.sha3_384=a.sha3_256=a.sha3_224=a.Keccak=a.keccakP=void 0;const f=st,k=r,d=ot,z=[],G=[],J=[],et=BigInt(0),p=BigInt(1),nt=BigInt(2),it=BigInt(7),at=BigInt(256),ht=BigInt(113);for(let s=0,t=p,o=1,e=0;s<24;s++){[o,e]=[e,(2*o+3*e)%5],z.push(2*(5*e+o)),G.push((s+1)*(s+2)/2%64);let n=et;for(let h=0;h<7;h++)t=(t<<p^(t>>it)*ht)%at,t&nt&&(n^=p<<(p<<BigInt(h))-p);J.push(n)}const[ct,dt]=(0,k.split)(J,!0),Q=(s,t,o)=>o>32?(0,k.rotlBH)(s,t,o):(0,k.rotlSH)(s,t,o),R=(s,t,o)=>o>32?(0,k.rotlBL)(s,t,o):(0,k.rotlSL)(s,t,o);function T(s,t=24){const o=new Uint32Array(10);for(let e=24-t;e<24;e++){for(let i=0;i<10;i++)o[i]=s[i]^s[i+10]^s[i+20]^s[i+30]^s[i+40];for(let i=0;i<10;i+=2){const c=(i+8)%10,g=(i+2)%10,b=o[g],u=o[g+1],$=Q(b,u,1)^o[c],tt=R(b,u,1)^o[c+1];for(let B=0;B<50;B+=10)s[i+B]^=$,s[i+B+1]^=tt}let n=s[2],h=s[3];for(let i=0;i<24;i++){const c=G[i],g=Q(n,h,c),b=R(n,h,c),u=z[i];n=s[u],h=s[u+1],s[u]=g,s[u+1]=b}for(let i=0;i<50;i+=10){for(let c=0;c<10;c++)o[c]=s[i+c];for(let c=0;c<10;c++)s[i+c]^=~o[(c+2)%10]&o[(c+4)%10]}s[0]^=ct[e],s[1]^=dt[e]}o.fill(0)}a.keccakP=T;class L extends d.Hash{constructor(t,o,e,n=!1,h=24){if(super(),this.blockLen=t,this.suffix=o,this.outputLen=e,this.enableXOF=n,this.rounds=h,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,f.number)(e),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,d.u32)(this.state)}keccak(){d.isLE||(0,d.byteSwap32)(this.state32),T(this.state32,this.rounds),d.isLE||(0,d.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(t){(0,f.exists)(this);const{blockLen:o,state:e}=this;t=(0,d.toBytes)(t);const n=t.length;for(let h=0;h<n;){const i=Math.min(o-this.pos,n-h);for(let c=0;c<i;c++)e[this.pos++]^=t[h++];this.pos===o&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:o,pos:e,blockLen:n}=this;t[e]^=o,o&128&&e===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){(0,f.exists)(this,!1),(0,f.bytes)(t),this.finish();const o=this.state,{blockLen:e}=this;for(let n=0,h=t.length;n<h;){this.posOut>=e&&this.keccak();const i=Math.min(e-this.posOut,h-n);t.set(o.subarray(this.posOut,this.posOut+i),n),this.posOut+=i,n+=i}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,f.number)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,f.output)(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:o,suffix:e,outputLen:n,rounds:h,enableXOF:i}=this;return t||(t=new L(o,e,n,i,h)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=h,t.suffix=e,t.outputLen=n,t.enableXOF=i,t.destroyed=this.destroyed,t}}a.Keccak=L;const l=(s,t,o)=>(0,d.wrapConstructor)(()=>new L(t,s,o));a.sha3_224=l(6,144,224/8),a.sha3_256=l(6,136,256/8),a.sha3_384=l(6,104,384/8),a.sha3_512=l(6,72,512/8),a.keccak_224=l(1,144,224/8);var V=a.keccak_256=l(1,136,256/8);a.keccak_384=l(1,104,384/8);var Y=a.keccak_512=l(1,72,512/8);const Z=(s,t,o)=>(0,d.wrapXOFConstructorWithOpts)((e={})=>new L(t,s,e.dkLen===void 0?o:e.dkLen,!0));a.shake128=Z(31,168,128/8),a.shake256=Z(31,136,256/8);export{Y as a,V as k,a as s};