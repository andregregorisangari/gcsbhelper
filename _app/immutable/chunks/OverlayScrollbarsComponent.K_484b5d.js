import{s as Kn,l as On,i as rn,f as Jt,w as An,x as Xo,y as Jo,m as Qo,z as Be,A as Go,e as Yn,c as Xn,b as Jn,B as En,r as kn,C as Qn,p as ts,D as Gn,E as to,F as eo}from"./scheduler.k_uFLuA3.js";import{S as es,i as ns,a as Qt,t as Gt,g as os,c as ss}from"./index.B4TnfWmM.js";function cs(t,e){const n={},s={},o={$$scope:1};let c=t.length;for(;c--;){const r=t[c],u=e[c];if(u){for(const i in r)i in u||(s[i]=1);for(const i in u)o[i]||(n[i]=u[i],o[i]=1);t[c]=u}else for(const i in r)o[i]=1}for(const r in s)r in n||(n[r]=void 0);return n}/*!
 * OverlayScrollbars
 * Version: 2.9.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const ut=(t,e)=>{const{o:n,i:s,u:o}=t;let c=n,r;const u=(l,a)=>{const v=c,_=l,p=a||(s?!s(v,_):v!==_);return(p||o)&&(c=_,r=v),[c,p,r]};return[e?l=>u(e(c,r),l):u,l=>[c,!!l,r]]},rs=typeof window<"u"&&typeof HTMLElement<"u"&&!!window.document,at=rs?window:{},no=Math.max,ls=Math.min,qe=Math.round,be=Math.abs,Dn=Math.sign,oo=at.cancelAnimationFrame,ln=at.requestAnimationFrame,we=at.setTimeout,We=at.clearTimeout,Ee=t=>typeof at[t]<"u"?at[t]:void 0,is=Ee("MutationObserver"),Hn=Ee("IntersectionObserver"),Se=Ee("ResizeObserver"),ye=Ee("ScrollTimeline"),an=t=>t===void 0,ke=t=>t===null,_t=t=>typeof t=="number",oe=t=>typeof t=="string",un=t=>typeof t=="boolean",ht=t=>typeof t=="function",Ct=t=>Array.isArray(t),_e=t=>typeof t=="object"&&!Ct(t)&&!ke(t),dn=t=>{const e=!!t&&t.length,n=_t(e)&&e>-1&&e%1==0;return Ct(t)||!ht(t)&&n?e>0&&_e(t)?e-1 in t:!0:!1},Ce=t=>!!t&&t.constructor===Object,xe=t=>t instanceof HTMLElement,De=t=>t instanceof Element;function X(t,e){if(dn(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&X(Object.keys(t),n=>e(t[n],n,t));return t}const so=(t,e)=>t.indexOf(e)>=0,te=(t,e)=>t.concat(e),nt=(t,e,n)=>(!oe(e)&&dn(e)?Array.prototype.push.apply(t,e):t.push(e),t),Mt=t=>Array.from(t||[]),fn=t=>Ct(t)?t:!oe(t)&&dn(t)?Mt(t):[t],Ze=t=>!!t&&!t.length,Ke=t=>Mt(new Set(t)),pt=(t,e,n)=>{X(t,o=>o&&o.apply(void 0,e||[])),!n&&(t.length=0)},co="paddingTop",ro="paddingRight",lo="paddingLeft",io="paddingBottom",ao="marginLeft",uo="marginRight",fo="marginBottom",po="overflowX",mo="overflowY",He="width",Te="height",Tt="visible",Rt="hidden",jt="scroll",as=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},Ie=(t,e,n,s)=>{if(t&&e){let o=!0;return X(n,c=>{const r=t[c],u=e[c];r!==u&&(o=!1)}),o}return!1},yo=(t,e)=>Ie(t,e,["w","h"]),he=(t,e)=>Ie(t,e,["x","y"]),us=(t,e)=>Ie(t,e,["t","r","b","l"]),Pt=()=>{},I=(t,...e)=>t.bind(0,...e),Ft=t=>{let e;const n=t?we:ln,s=t?We:oo;return[o=>{s(e),e=n(()=>o(),ht(t)?t():t)},()=>s(e)]},Ye=(t,e)=>{const{_:n,v:s,p:o,S:c}=e||{};let r,u,i,d,l=Pt;const a=function(M){l(),We(r),d=r=u=void 0,l=Pt,t.apply(this,M)},v=C=>c&&u?c(u,C):C,_=()=>{l!==Pt&&a(v(i)||i)},p=function(){const M=Mt(arguments),E=ht(n)?n():n;if(_t(E)&&E>=0){const N=ht(s)?s():s,w=_t(N)&&N>=0,k=E>0?we:ln,H=E>0?We:oo,P=v(M)||M,b=a.bind(0,P);let m;l(),o&&!d?(b(),d=!0,m=k(()=>d=void 0,E)):(m=k(b,E),w&&!r&&(r=we(_,N))),l=()=>H(m),u=i=P}else a(M)};return p.m=_,p},ho=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),vt=t=>t?Object.keys(t):[],B=(t,e,n,s,o,c,r)=>{const u=[e,n,s,o,c,r];return(typeof t!="object"||ke(t))&&!ht(t)&&(t={}),X(u,i=>{X(i,(d,l)=>{const a=i[l];if(t===a)return!0;const v=Ct(a);if(a&&Ce(a)){const _=t[l];let p=_;v&&!Ct(_)?p=[]:!v&&!Ce(_)&&(p={}),t[l]=B(p,a)}else t[l]=v?a.slice():a})}),t},go=(t,e)=>X(B({},t),(n,s,o)=>{n===void 0?delete o[s]:n&&Ce(n)&&(o[s]=go(n))}),pn=t=>!vt(t).length,vo=(t,e,n)=>no(t,ls(e,n)),Lt=t=>Ke((Ct(t)?t:(t||"").split(" ")).filter(e=>e)),mn=(t,e)=>t&&t.getAttribute(e),Tn=(t,e)=>t&&t.hasAttribute(e),Ot=(t,e,n)=>{X(Lt(e),s=>{t&&t.setAttribute(s,String(n||""))})},wt=(t,e)=>{X(Lt(e),n=>t&&t.removeAttribute(n))},Me=(t,e)=>{const n=Lt(mn(t,e)),s=I(Ot,t,e),o=(c,r)=>{const u=new Set(n);return X(Lt(c),i=>{u[r](i)}),Mt(u).join(" ")};return{O:c=>s(o(c,"delete")),$:c=>s(o(c,"add")),C:c=>{const r=Lt(c);return r.reduce((u,i)=>u&&n.includes(i),r.length>0)}}},bo=(t,e,n)=>(Me(t,e).O(n),I(yn,t,e,n)),yn=(t,e,n)=>(Me(t,e).$(n),I(bo,t,e,n)),Oe=(t,e,n,s)=>(s?yn:bo)(t,e,n),hn=(t,e,n)=>Me(t,e).C(n),wo=t=>Me(t,"class"),So=(t,e)=>{wo(t).O(e)},gn=(t,e)=>(wo(t).$(e),I(So,t,e)),_o=(t,e)=>{const n=e?De(e)&&e:document;return n?Mt(n.querySelectorAll(t)):[]},ds=(t,e)=>{const n=e?De(e)&&e:document;return n&&n.querySelector(t)},Xe=(t,e)=>De(t)&&t.matches(e),Co=t=>Xe(t,"body"),Je=t=>t?Mt(t.childNodes):[],ee=t=>t&&t.parentElement,Nt=(t,e)=>De(t)&&t.closest(e),Qe=t=>document.activeElement,fs=(t,e,n)=>{const s=Nt(t,e),o=t&&ds(n,s),c=Nt(o,e)===s;return s&&o?s===t||o===t||c&&Nt(Nt(t,n),e)!==s:!1},Bt=t=>{X(fn(t),e=>{const n=ee(e);e&&n&&n.removeChild(e)})},dt=(t,e)=>I(Bt,t&&e&&X(fn(e),n=>{n&&t.appendChild(n)})),Vt=t=>{const e=document.createElement("div");return Ot(e,"class",t),e},xo=t=>{const e=Vt();return e.innerHTML=t.trim(),X(Je(e),n=>Bt(n))},In=(t,e)=>t.getPropertyValue(e)||t[e]||"",Oo=t=>{const e=t||0;return isFinite(e)?e:0},pe=t=>Oo(parseFloat(t||"")),Ge=t=>Math.round(t*1e4)/1e4,Ao=t=>`${Ge(Oo(t))}px`;function ne(t,e){t&&e&&X(e,(n,s)=>{try{const o=t.style,c=ke(n)||un(n)?"":_t(n)?Ao(n):n;s.indexOf("--")===0?o.setProperty(s,c):o[s]=c}catch{}})}function kt(t,e,n){const s=oe(e);let o=s?"":{};if(t){const c=at.getComputedStyle(t,n)||t.style;o=s?In(c,e):Mt(e).reduce((r,u)=>(r[u]=In(c,u),r),o)}return o}const Mn=(t,e,n)=>{const s=e?`${e}-`:"",o=n?`-${n}`:"",c=`${s}top${o}`,r=`${s}right${o}`,u=`${s}bottom${o}`,i=`${s}left${o}`,d=kt(t,[c,r,u,i]);return{t:pe(d[c]),r:pe(d[r]),b:pe(d[u]),l:pe(d[i])}},ps=(t,e)=>`translate${_e(t)?`(${t.x},${t.y})`:`Y(${t})`}`,ms=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),ys={w:0,h:0},ze=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:ys,hs=t=>ze("inner",t||at),Ut=I(ze,"offset"),Eo=I(ze,"client"),Ae=I(ze,"scroll"),vn=t=>{const e=parseFloat(kt(t,He))||0,n=parseFloat(kt(t,Te))||0;return{w:e-qe(e),h:n-qe(n)}},Ne=t=>t.getBoundingClientRect(),gs=t=>!!t&&ms(t),tn=t=>!!(t&&(t[Te]||t[He])),ko=(t,e)=>{const n=tn(t);return!tn(e)&&n},zn=(t,e,n,s)=>{X(Lt(e),o=>{t&&t.removeEventListener(o,n,s)})},Q=(t,e,n,s)=>{var o;const c=(o=s&&s.H)!=null?o:!0,r=s&&s.I||!1,u=s&&s.A||!1,i={passive:c,capture:r};return I(pt,Lt(e).map(d=>{const l=u?a=>{zn(t,d,l,r),n&&n(a)}:n;return t&&t.addEventListener(d,l,i),I(zn,t,d,l,r)}))},Do=t=>t.stopPropagation(),en=t=>t.preventDefault(),Ho=t=>Do(t)||en(t),St=(t,e)=>{const{x:n,y:s}=_t(e)?{x:e,y:e}:e||{};_t(n)&&(t.scrollLeft=n),_t(s)&&(t.scrollTop=s)},ft=t=>({x:t.scrollLeft,y:t.scrollTop}),To=()=>({D:{x:0,y:0},T:{x:0,y:0}}),vs=(t,e)=>{const{D:n,T:s}=t,{w:o,h:c}=e,r=(a,v,_)=>{let p=Dn(a)*_,C=Dn(v)*_;if(p===C){const M=be(a),E=be(v);C=M>E?0:C,p=M<E?0:p}return p=p===C?0:p,[p+0,C+0]},[u,i]=r(n.x,s.x,o),[d,l]=r(n.y,s.y,c);return{D:{x:u,y:d},T:{x:i,y:l}}},Rn=({D:t,T:e})=>{const n=(s,o)=>s===0&&s<=o;return{x:n(t.x,e.x),y:n(t.y,e.y)}},Pn=({D:t,T:e},n)=>{const s=(o,c,r)=>vo(0,1,(o-r)/(o-c)||0);return{x:s(t.x,e.x,n.x),y:s(t.y,e.y,n.y)}},nn=t=>{t&&t.focus&&t.focus({preventScroll:!0})},Ln=(t,e)=>{X(fn(e),t)},on=t=>{const e=new Map,n=(c,r)=>{if(c){const u=e.get(c);Ln(i=>{u&&u[i?"delete":"clear"](i)},r)}else e.forEach(u=>{u.clear()}),e.clear()},s=(c,r)=>{if(oe(c)){const d=e.get(c)||new Set;return e.set(c,d),Ln(l=>{ht(l)&&d.add(l)},r),I(n,c,r)}un(r)&&r&&n();const u=vt(c),i=[];return X(u,d=>{const l=c[d];l&&nt(i,s(d,l))}),I(pt,i)},o=(c,r)=>{X(Mt(e.get(c)),u=>{r&&!Ze(r)?u.apply(0,r):u()})};return s(t||{}),[s,n,o]},$n=t=>JSON.stringify(t,(e,n)=>{if(ht(n))throw 0;return n}),Fn=(t,e)=>t?`${e}`.split(".").reduce((n,s)=>n&&ho(n,s)?n[s]:void 0,t):void 0,bs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Io=(t,e)=>{const n={},s=te(vt(e),vt(t));return X(s,o=>{const c=t[o],r=e[o];if(_e(c)&&_e(r))B(n[o]={},Io(c,r)),pn(n[o])&&delete n[o];else if(ho(e,o)&&r!==c){let u=!0;if(Ct(c)||Ct(r))try{$n(c)===$n(r)&&(u=!1)}catch{}u&&(n[o]=r)}}),n},Nn=(t,e,n)=>s=>[Fn(t,s),n||Fn(e,s)!==void 0],Wt="data-overlayscrollbars",ge="os-environment",me=`${ge}-scrollbar-hidden`,Ve=`${Wt}-initialize`,ve="noClipping",Vn=`${Wt}-body`,It=Wt,ws="host",At=`${Wt}-viewport`,Ss=po,_s=mo,Cs="arrange",Mo="measuring",xs="scrolling",zo="scrollbarHidden",Os="noContent",sn=`${Wt}-padding`,Un=`${Wt}-content`,bn="os-size-observer",As=`${bn}-appear`,Es=`${bn}-listener`,ks="os-trinsic-observer",Ds="os-theme-none",mt="os-scrollbar",Hs=`${mt}-rtl`,Ts=`${mt}-horizontal`,Is=`${mt}-vertical`,Ro=`${mt}-track`,wn=`${mt}-handle`,Ms=`${mt}-visible`,zs=`${mt}-cornerless`,jn=`${mt}-interaction`,Bn=`${mt}-unusable`,cn=`${mt}-auto-hide`,qn=`${cn}-hidden`,Wn=`${mt}-wheel`,Rs=`${Ro}-interactive`,Ps=`${wn}-interactive`;let Po;const Ls=()=>Po,$s=t=>{Po=t};let Ue;const Fs=()=>{const t=(w,k,H)=>{dt(document.body,w),dt(document.body,w);const z=Eo(w),P=Ut(w),b=vn(k);return H&&Bt(w),{x:P.h-z.h+b.h,y:P.w-z.w+b.w}},e=w=>{let k=!1;const H=gn(w,me);try{k=kt(w,"scrollbar-width")==="none"||kt(w,"display","::-webkit-scrollbar")==="none"}catch{}return H(),k},n=`.${ge}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${ge} div{width:200%;height:200%;margin:10px 0}.${me}{scrollbar-width:none!important}.${me}::-webkit-scrollbar,.${me}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`,o=xo(`<div class="${ge}"><div></div><style>${n}</style></div>`)[0],c=o.firstChild,r=o.lastChild,u=Ls();u&&(r.nonce=u);const[i,,d]=on(),[l,a]=ut({o:t(o,c),i:he},I(t,o,c,!0)),[v]=a(),_=e(o),p={x:v.x===0,y:v.y===0},C={elements:{host:null,padding:!_,viewport:w=>_&&Co(w)&&w,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},M=B({},bs),E=I(B,{},M),$=I(B,{},C),N={k:v,M:p,R:_,V:!!ye,L:I(i,"r"),U:$,P:w=>B(C,w)&&$(),N:E,q:w=>B(M,w)&&E(),B:B({},C),F:B({},M)};if(wt(o,"style"),Bt(o),Q(at,"resize",()=>{d("r",[])}),ht(at.matchMedia)&&!_&&(!p.x||!p.y)){const w=k=>{const H=at.matchMedia(`(resolution: ${at.devicePixelRatio}dppx)`);Q(H,"change",()=>{k(),w(k)},{A:!0})};w(()=>{const[k,H]=l();B(N.k,k),d("r",[H])})}return N},xt=()=>(Ue||(Ue=Fs()),Ue),Lo=(t,e)=>ht(e)?e.apply(0,t):e,Ns=(t,e,n,s)=>{const o=an(s)?n:s;return Lo(t,o)||e.apply(0,t)},$o=(t,e,n,s)=>{const o=an(s)?n:s,c=Lo(t,o);return!!c&&(xe(c)?c:e.apply(0,t))},Vs=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:s}=e||{},{M:o,R:c,U:r}=xt(),{nativeScrollbarsOverlaid:u,body:i}=r().cancel,d=n??u,l=an(s)?i:s,a=(o.x||o.y)&&d,v=t&&(ke(l)?!c:l);return!!a||!!v},Sn=new WeakMap,Us=(t,e)=>{Sn.set(t,e)},js=t=>{Sn.delete(t)},Fo=t=>Sn.get(t),Bs=(t,e,n)=>{let s=!1;const o=n?new WeakMap:!1,c=()=>{s=!0},r=u=>{if(o&&n){const i=n.map(d=>{const[l,a]=d||[];return[a&&l?(u||_o)(l,t):[],a]});X(i,d=>X(d[0],l=>{const a=d[1],v=o.get(l)||[];if(t.contains(l)&&a){const p=Q(l,a,C=>{s?(p(),o.delete(l)):e(C)});o.set(l,nt(v,p))}else pt(v),o.delete(l)}))}};return r(),[c,r]},Zn=(t,e,n,s)=>{let o=!1;const{j:c,X:r,Y:u,W:i,J:d,G:l}=s||{},a=Ye(()=>o&&n(!0),{_:33,v:99}),[v,_]=Bs(t,a,u),p=c||[],C=r||[],M=te(p,C),E=(N,w)=>{if(!Ze(w)){const k=d||Pt,H=l||Pt,z=[],P=[];let b=!1,m=!1;if(X(w,y=>{const{attributeName:T,target:R,type:V,oldValue:j,addedNodes:U,removedNodes:Z}=y,Y=V==="attributes",q=V==="childList",tt=t===R,h=Y&&T,g=h&&mn(R,T||""),S=oe(g)?g:null,x=h&&j!==S,f=so(C,T)&&x;if(e&&(q||!tt)){const A=Y&&x,O=A&&i&&Xe(R,i),F=(O?!k(R,T,j,S):!Y||A)&&!H(y,!!O,t,s);X(U,J=>nt(z,J)),X(Z,J=>nt(z,J)),m=m||F}!e&&tt&&x&&!k(R,T,j,S)&&(nt(P,T),b=b||f)}),_(y=>Ke(z).reduce((T,R)=>(nt(T,_o(y,R)),Xe(R,y)?nt(T,R):T),[])),e)return!N&&m&&n(!1),[!1];if(!Ze(P)||b){const y=[Ke(P),b];return!N&&n.apply(0,y),y}}},$=new is(I(E,!1));return[()=>($.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:M,subtree:e,childList:e,characterData:e}),o=!0,()=>{o&&(v(),$.disconnect(),o=!1)}),()=>{if(o)return a.m(),E(!0,$.takeRecords())}]},No={},Vo={},qs=t=>{X(t,e=>X(e,(n,s)=>{No[s]=e[s]}))},Uo=(t,e,n)=>vt(t).map(s=>{const{static:o,instance:c}=t[s],[r,u,i]=n||[],d=n?c:o;if(d){const l=n?d(r,u,e):d(e);return(i||Vo)[s]=l}}),se=t=>Vo[t],Ws="__osOptionsValidationPlugin",Zs="__osSizeObserverPlugin",Ks=(t,e)=>{const{M:n}=e,[s,o]=t("showNativeOverlaidScrollbars");return[s&&n.x&&n.y,o]},qt=t=>t.indexOf(Tt)===0,Ys=(t,e)=>{const n=(o,c,r,u)=>{const i=o===Tt?Rt:o.replace(`${Tt}-`,""),d=qt(o),l=qt(r);return!c&&!u?Rt:d&&l?Tt:d?c&&u?i:c?Tt:Rt:c?i:l&&u?Tt:Rt},s={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{K:s,Z:{x:s.x===jt,y:s.y===jt}}},jo="__osScrollbarsHidingPlugin",Xs="__osClickScrollPlugin",Bo=(t,e,n)=>{const{dt:s}=n||{},o=se(Zs),[c]=ut({o:!1,u:!0});return()=>{const r=[],i=xo(`<div class="${bn}"><div class="${Es}"></div></div>`)[0],d=i.firstChild,l=a=>{const v=a instanceof ResizeObserverEntry;let _=!1,p=!1;if(v){const[C,,M]=c(a.contentRect),E=tn(C);p=ko(C,M),_=!p&&!E}else p=a===!0;_||e({ft:!0,dt:p})};if(Se){const a=new Se(v=>l(v.pop()));a.observe(d),nt(r,()=>{a.disconnect()})}else if(o){const[a,v]=o(d,l,s);nt(r,te([gn(i,As),Q(i,"animationstart",a)],v))}else return Pt;return I(pt,nt(r,dt(t,i)))}},Js=(t,e)=>{let n;const s=i=>i.h===0||i.isIntersecting||i.intersectionRatio>0,o=Vt(ks),[c]=ut({o:!1}),r=(i,d)=>{if(i){const l=c(s(i)),[,a]=l;return a&&!d&&e(l)&&[l]}},u=(i,d)=>r(d.pop(),i);return[()=>{const i=[];if(Hn)n=new Hn(I(u,!1),{root:t}),n.observe(o),nt(i,()=>{n.disconnect()});else{const d=()=>{const l=Ut(o);r(l)};nt(i,Bo(o,d)()),d()}return I(pt,nt(i,dt(t,o)))},()=>n&&u(!0,n.takeRecords())]},Qs=(t,e,n,s)=>{let o,c,r,u,i,d;const l=`[${It}]`,a=`[${At}]`,v=["id","class","style","open","wrap","cols","rows"],{vt:_,gt:p,ot:C,ht:M,bt:E,nt:$,wt:N,yt:w,St:k,Ot:H}=t,z=f=>kt(f,"direction")==="rtl",P={$t:!1,ct:z(_)},b=xt(),m=se(jo),[y]=ut({i:yo,o:{w:0,h:0}},()=>{const f=m&&m.tt(t,e,P,b,n).ut,O=!(N&&$)&&hn(p,It,ve),D=!$&&w(Cs),F=D&&ft(M),J=F&&H(),ot=k(Mo,O),G=D&&f&&f()[0],rt=Ae(C),L=vn(C);return G&&G(),St(M,F),J&&J(),O&&ot(),{w:rt.w+L.w,h:rt.h+L.h}}),T=Ye(s,{_:()=>o,v:()=>c,S(f,A){const[O]=f,[D]=A;return[te(vt(O),vt(D)).reduce((F,J)=>(F[J]=O[J]||D[J],F),{})]}}),R=f=>{const A=z(_);B(f,{Ct:d!==A}),B(P,{ct:A}),d=A},V=(f,A)=>{const[O,D]=f,F={xt:D};return B(P,{$t:O}),!A&&s(F),F},j=({ft:f,dt:A})=>{const D=!(f&&!A)&&b.R?T:s,F={ft:f||A,dt:A};R(F),D(F)},U=(f,A)=>{const[,O]=y(),D={Ht:O};return R(D),O&&!A&&(f?s:T)(D),D},Z=(f,A,O)=>{const D={Et:A};return R(D),A&&!O&&T(D),D},[Y,q]=E?Js(p,V):[],tt=!$&&Bo(p,j,{dt:!0}),[h,g]=Zn(p,!1,Z,{X:v,j:v}),S=$&&Se&&new Se(f=>{const A=f[f.length-1].contentRect;j({ft:!0,dt:ko(A,i)}),i=A}),x=Ye(()=>{const[,f]=y();s({Ht:f})},{_:222,p:!0});return[()=>{S&&S.observe(p);const f=tt&&tt(),A=Y&&Y(),O=h(),D=b.L(F=>{F?T({zt:F}):x()});return()=>{S&&S.disconnect(),f&&f(),A&&A(),u&&u(),O(),D()}},({It:f,At:A,Dt:O})=>{const D={},[F]=f("update.ignoreMutation"),[J,ot]=f("update.attributes"),[G,rt]=f("update.elementEvents"),[L,st]=f("update.debounce"),it=rt||ot,ct=A||O,lt=et=>ht(F)&&F(et);if(it){r&&r(),u&&u();const[et,K]=Zn(E||C,!0,U,{j:te(v,J||[]),Y:G,W:l,G:(W,yt)=>{const{target:gt,attributeName:Dt}=W;return(!yt&&Dt&&!$?fs(gt,l,a):!1)||!!Nt(gt,`.${mt}`)||!!lt(W)}});u=et(),r=K}if(st)if(T.m(),Ct(L)){const et=L[0],K=L[1];o=_t(et)&&et,c=_t(K)&&K}else _t(L)?(o=L,c=!1):(o=!1,c=!1);if(ct){const et=g(),K=q&&q(),W=r&&r();et&&B(D,Z(et[0],et[1],ct)),K&&B(D,V(K[0],ct)),W&&B(D,U(W[0],ct))}return R(D),D},P]},Gs=(t,e,n,s)=>{const o="--os-viewport-percent",c="--os-scroll-percent",r="--os-scroll-direction",{U:u}=xt(),{scrollbars:i}=u(),{slot:d}=i,{vt:l,gt:a,ot:v,Tt:_,ht:p,wt:C,nt:M}=e,{scrollbars:E}=_?{}:t,{slot:$}=E||{},N=[],w=[],k=[],H=$o([l,a,v],()=>M&&C?l:a,d,$),z=h=>{if(ye){const g=new ye({source:p,axis:h});return{Mt:x=>{const f=x.kt.animate({clear:["left"],[c]:[0,1]},{timeline:g});return()=>f.cancel()}}}},P={x:z("x"),y:z("y")},b=()=>{const{Rt:h,Vt:g}=n,S=(x,f)=>vo(0,1,x/(x+f)||0);return{x:S(g.x,h.x),y:S(g.y,h.y)}},m=(h,g,S)=>{const x=S?gn:So;X(h,f=>{x(f.kt,g)})},y=(h,g)=>{X(h,S=>{const[x,f]=g(S);ne(x,f)})},T=(h,g,S)=>{const x=un(S),f=x?S:!0,A=x?!S:!0;f&&m(w,h,g),A&&m(k,h,g)},R=()=>{const h=b(),g=S=>x=>[x.kt,{[o]:Ge(S)+""}];y(w,g(h.x)),y(k,g(h.y))},V=()=>{if(!ye){const{Lt:h}=n,g=Pn(h,ft(p)),S=x=>f=>[f.kt,{[c]:Ge(x)+""}];y(w,S(g.x)),y(k,S(g.y))}},j=()=>{const{Lt:h}=n,g=Rn(h),S=x=>f=>[f.kt,{[r]:x?"0":"1"}];y(w,S(g.x)),y(k,S(g.y))},U=()=>{if(M&&!C){const{Rt:h,Lt:g}=n,S=Rn(g),x=Pn(g,ft(p)),f=A=>{const{kt:O}=A,D=ee(O)===v&&O,F=(J,ot,G)=>{const rt=ot*J;return Ao(G?rt:-rt)};return[D,D&&{transform:ps({x:F(x.x,h.x,S.x),y:F(x.y,h.y,S.y)})}]};y(w,f),y(k,f)}},Z=h=>{const g=h?"x":"y",x=Vt(`${mt} ${h?Ts:Is}`),f=Vt(Ro),A=Vt(wn),O={kt:x,Ut:f,Pt:A},D=P[g];return nt(h?w:k,O),nt(N,[dt(x,f),dt(f,A),I(Bt,x),D&&D.Mt(O),s(O,T,h)]),O},Y=I(Z,!0),q=I(Z,!1),tt=()=>(dt(H,w[0].kt),dt(H,k[0].kt),I(pt,N));return Y(),q(),[{Nt:R,qt:V,Bt:j,Ft:U,jt:T,Xt:{Yt:w,Wt:Y,Jt:I(y,w)},Gt:{Yt:k,Wt:q,Jt:I(y,k)}},tt]},tc=(t,e,n,s)=>(o,c,r)=>{const{gt:u,ot:i,nt:d,ht:l,Kt:a,Ot:v}=e,{kt:_,Ut:p,Pt:C}=o,[M,E]=Ft(333),[$,N]=Ft(444),w=z=>{ht(l.scrollBy)&&l.scrollBy({behavior:"smooth",left:z.x,top:z.y})},k=()=>{const z="pointerup pointercancel lostpointercapture",P=`client${r?"X":"Y"}`,b=r?He:Te,m=r?"left":"top",y=r?"w":"h",T=r?"x":"y",R=(j,U)=>Z=>{const{Rt:Y}=n,q=Ut(p)[y]-Ut(C)[y],h=U*Z/q*Y[T];St(l,{[T]:j+h})},V=[];return Q(p,"pointerdown",j=>{const U=Nt(j.target,`.${wn}`)===C,Z=U?C:p,Y=t.scrollbars,{button:q,isPrimary:tt,pointerType:h}=j,{pointers:g}=Y;if(q===0&&tt&&Y[U?"dragScroll":"clickScroll"]&&(g||[]).includes(h)){pt(V),N();const x=!U&&j.shiftKey,f=I(Ne,C),A=I(Ne,p),O=(K,W)=>(K||f())[m]-(W||A())[m],D=qe(Ne(l)[b])/Ut(l)[y]||1,F=R(ft(l)[T],1/D),J=j[P],ot=f(),G=A(),rt=ot[b],L=O(ot,G)+rt/2,st=J-G[m],it=U?0:st-L,ct=K=>{pt(et),Z.releasePointerCapture(K.pointerId)},lt=v(),et=[()=>{const K=ft(l);lt();const W=ft(l),yt={x:W.x-K.x,y:W.y-K.y};(be(yt.x)>3||be(yt.y)>3)&&(v(),St(l,K),w(yt),$(lt))},Q(a,z,ct),Q(a,"selectstart",K=>en(K),{H:!1}),Q(p,z,ct),Q(p,"pointermove",K=>{const W=K[P]-J;(U||x)&&F(it+W)})];if(Z.setPointerCapture(j.pointerId),x)F(it);else if(!U){const K=se(Xs);if(K){const W=K(F,O,it,rt,st);nt(et,I(W)),nt(V,I(W,!0))}}}})};let H=!0;return I(pt,[Q(C,"pointermove pointerleave",s),Q(_,"pointerenter",()=>{c(jn,!0)}),Q(_,"pointerleave pointercancel",()=>{c(jn,!1)}),!d&&Q(_,"mousedown",()=>{const z=Qe();(Tn(z,At)||Tn(z,It)||z===document.body)&&we(I(nn,i),25)}),Q(_,"wheel",z=>{const{deltaX:P,deltaY:b,deltaMode:m}=z;H&&m===0&&ee(_)===u&&w({x:P,y:b}),H=!1,c(Wn,!0),M(()=>{H=!0,c(Wn)}),en(z)},{H:!1,I:!0}),Q(_,"pointerdown",I(Q,a,"click",Ho,{A:!0,I:!0,H:!1}),{I:!0}),k(),E,N])},ec=(t,e,n,s,o,c)=>{let r,u,i,d,l,a=Pt,v=0;const _=h=>h.pointerType==="mouse",[p,C]=Ft(),[M,E]=Ft(100),[$,N]=Ft(100),[w,k]=Ft(()=>v),[H,z]=Gs(t,o,s,tc(e,o,s,h=>_(h)&&Z())),{gt:P,Qt:b,wt:m}=o,{jt:y,Nt:T,qt:R,Bt:V,Ft:j}=H,U=(h,g)=>{if(k(),h)y(qn);else{const S=I(y,qn,!0);v>0&&!g?w(S):S()}},Z=()=>{(i?!r:!d)&&(U(!0),M(()=>{U(!1)}))},Y=h=>{y(cn,h,!0),y(cn,h,!1)},q=h=>{_(h)&&(r=i,i&&U(!0))},tt=[k,E,N,C,()=>a(),Q(P,"pointerover",q,{A:!0}),Q(P,"pointerenter",q),Q(P,"pointerleave",h=>{_(h)&&(r=!1,i&&U(!1))}),Q(P,"pointermove",h=>{_(h)&&u&&Z()}),Q(b,"scroll",h=>{p(()=>{R(),Z()}),c(h),j()})];return[()=>I(pt,nt(tt,z())),({It:h,Dt:g,Zt:S,tn:x})=>{const{nn:f,sn:A,en:O,cn:D}=x||{},{Ct:F,dt:J}=S||{},{ct:ot}=n,{M:G}=xt(),{K:rt,rn:L}=s,[st,it]=h("showNativeOverlaidScrollbars"),[ct,lt]=h("scrollbars.theme"),[et,K]=h("scrollbars.visibility"),[W,yt]=h("scrollbars.autoHide"),[gt,Dt]=h("scrollbars.autoHideSuspend"),[Zt]=h("scrollbars.autoHideDelay"),[ce,re]=h("scrollbars.dragScroll"),[le,zt]=h("scrollbars.clickScroll"),[$t,Re]=h("overflow"),Pe=J&&!g,Le=L.x||L.y,$e=f||A||D||F||g,bt=O||K||Re,Fe=st&&G.x&&G.y,Kt=(Yt,Ht,ie)=>{const Xt=Yt.includes(jt)&&(et===Tt||et==="auto"&&Ht===jt);return y(Ms,Xt,ie),Xt};if(v=Zt,Pe&&(gt&&Le?(Y(!1),a(),$(()=>{a=Q(b,"scroll",I(Y,!0),{A:!0})})):Y(!0)),it&&y(Ds,Fe),lt&&(y(l),y(ct,!0),l=ct),Dt&&!gt&&Y(!0),yt&&(u=W==="move",i=W==="leave",d=W==="never",U(d,!0)),re&&y(Ps,ce),zt&&y(Rs,le),bt){const Yt=Kt($t.x,rt.x,!0),Ht=Kt($t.y,rt.y,!1);y(zs,!(Yt&&Ht))}$e&&(R(),T(),j(),D&&V(),y(Bn,!L.x,!0),y(Bn,!L.y,!1),y(Hs,ot&&!m))},{},H]},nc=t=>{const e=xt(),{U:n,R:s}=e,{elements:o}=n(),{padding:c,viewport:r,content:u}=o,i=xe(t),d=i?{}:t,{elements:l}=d,{padding:a,viewport:v,content:_}=l||{},p=i?t:d.target,C=Co(p),M=p.ownerDocument,E=M.documentElement,$=()=>M.defaultView||at,N=I(Ns,[p]),w=I($o,[p]),k=I(Vt,""),H=I(N,k,r),z=I(w,k,u),P=L=>{const st=Ut(L),it=Ae(L),ct=kt(L,po),lt=kt(L,mo);return it.w-st.w>0&&!qt(ct)||it.h-st.h>0&&!qt(lt)},b=H(v),m=b===p,y=m&&C,T=!m&&z(_),R=!m&&b===T,V=y?E:b,j=y?V:p,U=!m&&w(k,c,a),Z=!R&&T,Y=[Z,V,U,j].map(L=>xe(L)&&!ee(L)&&L),q=L=>L&&so(Y,L),tt=!q(V)&&P(V)?V:p,h=y?E:V,S={vt:p,gt:j,ot:V,ln:U,bt:Z,ht:h,Qt:y?M:V,an:C?E:tt,Kt:M,wt:C,Tt:i,nt:m,un:$,yt:L=>hn(V,At,L),St:(L,st)=>Oe(V,At,L,st),Ot:()=>Oe(h,At,xs,!0)},{vt:x,gt:f,ln:A,ot:O,bt:D}=S,F=[()=>{wt(f,[It,Ve]),wt(x,Ve),C&&wt(E,[Ve,It])}];let J=Je([D,O,A,f,x].find(L=>L&&!q(L)));const ot=y?x:D||O,G=I(pt,F);return[S,()=>{const L=$(),st=Qe(),it=W=>{dt(ee(W),Je(W)),Bt(W)},ct=W=>Q(W,"focusin focusout focus blur",Ho,{I:!0,H:!1}),lt="tabindex",et=mn(O,lt),K=ct(st);return Ot(f,It,m?"":ws),Ot(A,sn,""),Ot(O,At,""),Ot(D,Un,""),m||(Ot(O,lt,et||"-1"),C&&Ot(E,Vn,"")),dt(ot,J),dt(f,A),dt(A||f,!m&&O),dt(O,D),nt(F,[K,()=>{const W=Qe(),yt=q(O),gt=yt&&W===O?x:W,Dt=ct(gt);wt(A,sn),wt(D,Un),wt(O,At),C&&wt(E,Vn),et?Ot(O,lt,et):wt(O,lt),q(D)&&it(D),yt&&it(O),q(A)&&it(A),nn(gt),Dt()}]),s&&!m&&(yn(O,At,zo),nt(F,I(wt,O,At))),nn(!m&&C&&st===x&&L.top===L?O:st),K(),J=0,G},G]},oc=({bt:t})=>({Zt:e,_n:n,Dt:s})=>{const{xt:o}=e||{},{$t:c}=n;t&&(o||s)&&ne(t,{[Te]:c&&"100%"})},sc=({gt:t,ln:e,ot:n,nt:s},o)=>{const[c,r]=ut({i:us,o:Mn()},I(Mn,t,"padding",""));return({It:u,Zt:i,_n:d,Dt:l})=>{let[a,v]=r(l);const{R:_}=xt(),{ft:p,Ht:C,Ct:M}=i||{},{ct:E}=d,[$,N]=u("paddingAbsolute");(p||v||(l||C))&&([a,v]=c(l));const k=!s&&(N||M||v);if(k){const H=!$||!e&&!_,z=a.r+a.l,P=a.t+a.b,b={[uo]:H&&!E?-z:0,[fo]:H?-P:0,[ao]:H&&E?-z:0,top:H?-a.t:0,right:H?E?-a.r:"auto":0,left:H?E?"auto":-a.l:0,[He]:H&&`calc(100% + ${z}px)`},m={[co]:H?a.t:0,[ro]:H?a.r:0,[io]:H?a.b:0,[lo]:H?a.l:0};ne(e||n,b),ne(n,m),B(o,{ln:a,dn:!H,rt:e?m:B({},b,m)})}return{fn:k}}},cc=(t,e)=>{const n=xt(),{gt:s,ln:o,ot:c,nt:r,Qt:u,ht:i,wt:d,St:l,un:a}=t,{R:v}=n,_=d&&r,p=I(no,0),C={display:()=>!1,direction:g=>g!=="ltr",flexDirection:g=>g.endsWith("-reverse"),writingMode:g=>g!=="horizontal-tb"},M=vt(C),E={i:yo,o:{w:0,h:0}},$={i:he,o:{}},N=g=>{l(Mo,!_&&g)},w=g=>{if(!M.some(ot=>{const G=g[ot];return G&&C[ot](G)}))return{D:{x:0,y:0},T:{x:1,y:1}};N(!0);const x=ft(i),f=l(Os,!0),A=Q(u,jt,ot=>{const G=ft(i);ot.isTrusted&&G.x===x.x&&G.y===x.y&&Do(ot)},{I:!0,A:!0});St(i,{x:0,y:0}),f();const O=ft(i),D=Ae(i);St(i,{x:D.w,y:D.h});const F=ft(i);St(i,{x:F.x-O.x<1&&-D.w,y:F.y-O.y<1&&-D.h});const J=ft(i);return St(i,x),ln(()=>A()),{D:O,T:J}},k=(g,S)=>{const x=at.devicePixelRatio%1!==0?1:0,f={w:p(g.w-S.w),h:p(g.h-S.h)};return{w:f.w>x?f.w:0,h:f.h>x?f.h:0}},[H,z]=ut(E,I(vn,c)),[P,b]=ut(E,I(Ae,c)),[m,y]=ut(E),[T]=ut($),[R,V]=ut(E),[j]=ut($),[U]=ut({i:(g,S)=>Ie(g,S,M),o:{}},()=>gs(c)?kt(c,M):{}),[Z,Y]=ut({i:(g,S)=>he(g.D,S.D)&&he(g.T,S.T),o:To()}),q=se(jo),tt=(g,S)=>`${S?Ss:_s}${as(g)}`,h=g=>{const S=f=>[Tt,Rt,jt].map(A=>tt(A,f)),x=S(!0).concat(S()).join(" ");l(x),l(vt(g).map(f=>tt(g[f],f==="x")).join(" "),!0)};return({It:g,Zt:S,_n:x,Dt:f},{fn:A})=>{const{ft:O,Ht:D,Ct:F,dt:J,zt:ot}=S||{},G=q&&q.tt(t,e,x,n,g),{it:rt,ut:L,_t:st}=G||{},[it,ct]=Ks(g,n),[lt,et]=g("overflow"),K=qt(lt.x),W=qt(lt.y),yt=!0;let gt=z(f),Dt=b(f),Zt=y(f),ce=V(f);ct&&v&&l(zo,!it);{hn(s,It,ve)&&N(!0);const[Cn]=L?L():[],[ae]=gt=H(f),[ue]=Dt=P(f),de=Eo(c),fe=_&&hs(a()),Yo={w:p(ue.w+ae.w),h:p(ue.h+ae.h)},xn={w:p((fe?fe.w:de.w+p(de.w-ue.w))+ae.w),h:p((fe?fe.h:de.h+p(de.h-ue.h))+ae.h)};Cn&&Cn(),ce=R(xn),Zt=m(k(Yo,xn),f)}const[re,le]=ce,[zt,$t]=Zt,[Re,Pe]=Dt,[Le,$e]=gt,[bt,Fe]=T({x:zt.w>0,y:zt.h>0}),Kt=K&&W&&(bt.x||bt.y)||K&&bt.x&&!bt.y||W&&bt.y&&!bt.x,Yt=A||F||ot||$e||Pe||le||$t||et||ct||yt,Ht=Ys(bt,lt),[ie,Xt]=j(Ht.K),[qo,Wo]=U(f),_n=F||J||Wo||Fe||f,[Zo,Ko]=_n?Z(w(qo),f):Y();return Yt&&(Xt&&h(Ht.K),st&&rt&&ne(c,st(Ht,x,rt(Ht,Re,Le)))),N(!1),Oe(s,It,ve,Kt),Oe(o,sn,ve,Kt),B(e,{K:ie,Vt:{x:re.w,y:re.h},Rt:{x:zt.w,y:zt.h},rn:bt,Lt:vs(Zo,zt)}),{en:Xt,nn:le,sn:$t,cn:Ko||$t,vn:_n}}},rc=t=>{const[e,n,s]=nc(t),o={ln:{t:0,r:0,b:0,l:0},dn:!1,rt:{[uo]:0,[fo]:0,[ao]:0,[co]:0,[ro]:0,[io]:0,[lo]:0},Vt:{x:0,y:0},Rt:{x:0,y:0},K:{x:Rt,y:Rt},rn:{x:!1,y:!1},Lt:To()},{vt:c,ht:r,nt:u,Ot:i}=e,{R:d,M:l}=xt(),a=!d&&(l.x||l.y),v=[oc(e),sc(e,o),cc(e,o)];return[n,_=>{const p={},M=a&&ft(r),E=M&&i();return X(v,$=>{B(p,$(_,p)||{})}),St(r,M),E&&E(),!u&&St(c,0),p},o,e,s]},lc=(t,e,n,s,o)=>{let c=!1;const r=Nn(e,{}),[u,i,d,l,a]=rc(t),[v,_,p]=Qs(l,d,r,w=>{N({},w)}),[C,M,,E]=ec(t,e,p,d,l,o),$=w=>vt(w).some(k=>!!w[k]),N=(w,k)=>{if(n())return!1;const{pn:H,Dt:z,At:P,gn:b}=w,m=H||{},y=!!z||!c,T={It:Nn(e,m,y),pn:m,Dt:y};if(b)return M(T),!1;const R=k||_(B({},T,{At:P})),V=i(B({},T,{_n:p,Zt:R}));M(B({},T,{Zt:R,tn:V}));const j=$(R),U=$(V),Z=j||U||!pn(m)||y;return c=!0,Z&&s(w,{Zt:R,tn:V}),Z};return[()=>{const{an:w,ht:k,Ot:H}=l,z=ft(w),P=[v(),u(),C()],b=H();return St(k,z),b(),I(pt,P)},N,()=>({hn:p,bn:d}),{wn:l,yn:E},a]},Et=(t,e,n)=>{const{N:s}=xt(),o=xe(t),c=o?t:t.target,r=Fo(c);if(e&&!r){let u=!1;const i=[],d={},l=m=>{const y=go(m),T=se(Ws);return T?T(y,!0):y},a=B({},s(),l(e)),[v,_,p]=on(),[C,M,E]=on(n),$=(m,y)=>{E(m,y),p(m,y)},[N,w,k,H,z]=lc(t,a,()=>u,({pn:m,Dt:y},{Zt:T,tn:R})=>{const{ft:V,Ct:j,xt:U,Ht:Z,Et:Y,dt:q}=T,{nn:tt,sn:h,en:g,cn:S}=R;$("updated",[b,{updateHints:{sizeChanged:!!V,directionChanged:!!j,heightIntrinsicChanged:!!U,overflowEdgeChanged:!!tt,overflowAmountChanged:!!h,overflowStyleChanged:!!g,scrollCoordinatesChanged:!!S,contentMutation:!!Z,hostMutation:!!Y,appear:!!q},changedOptions:m||{},force:!!y}])},m=>$("scroll",[b,m])),P=m=>{js(c),pt(i),u=!0,$("destroyed",[b,m]),_(),M()},b={options(m,y){if(m){const T=y?s():{},R=Io(a,B(T,l(m)));pn(R)||(B(a,R),w({pn:R}))}return B({},a)},on:C,off:(m,y)=>{m&&y&&M(m,y)},state(){const{hn:m,bn:y}=k(),{ct:T}=m,{Vt:R,Rt:V,K:j,rn:U,ln:Z,dn:Y,Lt:q}=y;return B({},{overflowEdge:R,overflowAmount:V,overflowStyle:j,hasOverflow:U,scrollCoordinates:{start:q.D,end:q.T},padding:Z,paddingAbsolute:Y,directionRTL:T,destroyed:u})},elements(){const{vt:m,gt:y,ln:T,ot:R,bt:V,ht:j,Qt:U}=H.wn,{Xt:Z,Gt:Y}=H.yn,q=h=>{const{Pt:g,Ut:S,kt:x}=h;return{scrollbar:x,track:S,handle:g}},tt=h=>{const{Yt:g,Wt:S}=h,x=q(g[0]);return B({},x,{clone:()=>{const f=q(S());return w({gn:!0}),f}})};return B({},{target:m,host:y,padding:T||R,viewport:R,content:V||R,scrollOffsetElement:j,scrollEventElement:U,scrollbarHorizontal:tt(Z),scrollbarVertical:tt(Y)})},update:m=>w({Dt:m,At:!0}),destroy:I(P,!1),plugin:m=>d[vt(m)[0]]};return nt(i,[z]),Us(c,b),Uo(No,Et,[b,v,d]),Vs(H.wn.wt,!o&&t.cancel)?(P(!0),b):(nt(i,N()),$("initialized",[b]),b.update(),b)}return r};Et.plugin=t=>{const e=Ct(t),n=e?t:[t],s=n.map(o=>Uo(o,Et)[0]);return qs(n),e?s:s[0]};Et.valid=t=>{const e=t&&t.elements,n=ht(e)&&e();return Ce(n)&&!!Fo(n.target)};Et.env=()=>{const{k:t,M:e,R:n,V:s,B:o,F:c,U:r,P:u,N:i,q:d}=xt();return B({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:s,staticDefaultInitialization:o,staticDefaultOptions:c,getDefaultInitialization:r,setDefaultInitialization:u,getDefaultOptions:i,setDefaultOptions:d})};Et.nonce=$s;const ic=()=>{if(typeof window>"u"){const d=()=>{};return[d,d]}let t,e;const n=window,s=typeof n.requestIdleCallback=="function",o=n.requestAnimationFrame,c=n.cancelAnimationFrame,r=s?n.requestIdleCallback:o,u=s?n.cancelIdleCallback:c,i=()=>{u(t),c(e)};return[(d,l)=>{i(),t=r(s?()=>{i(),e=o(d)}:d,typeof l=="object"?l:{timeout:2233})},i]};function ac(t){let e,n;const s=t[12].default,o=Qn(s,t,t[11],null);return{c(){e=Yn("div"),o&&o.c(),this.h()},l(c){e=Xn(c,"DIV",{"data-overlayscrollbars-contents":!0});var r=Jn(e);o&&o.l(r),r.forEach(Jt),this.h()},h(){ts(e,"data-overlayscrollbars-contents","")},m(c,r){rn(c,e,r),o&&o.m(e,null),t[13](e),n=!0},p(c,r){o&&o.p&&(!n||r&2048)&&Gn(o,s,c,c[11],n?eo(s,c[11],r,null):to(c[11]),null)},i(c){n||(Qt(o,c),n=!0)},o(c){Gt(o,c),n=!1},d(c){c&&Jt(e),o&&o.d(c),t[13](null)}}}function uc(t){let e;const n=t[12].default,s=Qn(n,t,t[11],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,c){s&&s.m(o,c),e=!0},p(o,c){s&&s.p&&(!e||c&2048)&&Gn(s,n,o,o[11],e?eo(n,o[11],c,null):to(o[11]),null)},i(o){e||(Qt(s,o),e=!0)},o(o){Gt(s,o),e=!1},d(o){s&&s.d(o)}}}function je(t){let e,n,s,o;const c=[uc,ac],r=[];function u(l,a){return l[0]==="body"?0:1}n=u(t),s=r[n]=c[n](t);let i=[{"data-overlayscrollbars-initialize":""},t[3]],d={};for(let l=0;l<i.length;l+=1)d=Be(d,i[l]);return{c(){e=Yn(t[0]),s.c(),this.h()},l(l){e=Xn(l,(t[0]||"null").toUpperCase(),{"data-overlayscrollbars-initialize":!0});var a=Jn(e);s.l(a),a.forEach(Jt),this.h()},h(){En(t[0])(e,d)},m(l,a){rn(l,e,a),r[n].m(e,null),t[14](e),o=!0},p(l,a){let v=n;n=u(l),n===v?r[n].p(l,a):(os(),Gt(r[v],1,1,()=>{r[v]=null}),ss(),s=r[n],s?s.p(l,a):(s=r[n]=c[n](l),s.c()),Qt(s,1),s.m(e,null)),En(l[0])(e,d=cs(i,[{"data-overlayscrollbars-initialize":""},a&8&&l[3]]))},i(l){o||(Qt(s),o=!0)},o(l){Gt(s),o=!1},d(l){l&&Jt(e),r[n].d(),t[14](null)}}}function dc(t){let e=t[0],n,s,o=t[0]&&je(t);return{c(){o&&o.c(),n=On()},l(c){o&&o.l(c),n=On()},m(c,r){o&&o.m(c,r),rn(c,n,r),s=!0},p(c,[r]){c[0]?e?Kn(e,c[0])?(o.d(1),o=je(c),e=c[0],o.c(),o.m(n.parentNode,n)):o.p(c,r):(o=je(c),e=c[0],o.c(),o.m(n.parentNode,n)):e&&(o.d(1),o=null,e=c[0])},i(c){s||(Qt(o,c),s=!0)},o(c){Gt(o,c),s=!1},d(c){c&&Jt(n),o&&o.d(c)}}}function fc(t,e,n){const s=["element","options","events","defer","osInstance","getElement"];let o=An(e,s),{$$slots:c={},$$scope:r}=e,{element:u="div"}=e,{options:i=void 0}=e,{events:d=void 0}=e,{defer:l=void 0}=e,a=null,v=null,_=null,p,C;const[M,E]=ic(),$=()=>{const b=()=>{const m=v;m&&(a==null||a.destroy(),n(9,a=Et(u==="body"?{target:m,cancel:{body:null}}:{target:m,elements:{viewport:_,content:_}},i||{},p||{})))};l?M(b,l):b(),C=u},N={initialized:"osInitialized",updated:"osUpdated",destroyed:"osDestroyed",scroll:"osScroll"},w=Xo(),k=()=>a,H=()=>v;Jo(()=>{E(),a==null||a.destroy()}),Qo(()=>{C!==u&&$()});function z(b){kn[b?"unshift":"push"](()=>{_=b,n(2,_)})}function P(b){kn[b?"unshift":"push"](()=>{v=b,n(1,v)})}return t.$$set=b=>{e=Be(Be({},e),Go(b)),n(3,o=An(e,s)),"element"in b&&n(0,u=b.element),"options"in b&&n(4,i=b.options),"events"in b&&n(5,d=b.events),"defer"in b&&n(6,l=b.defer),"$$scope"in b&&n(11,r=b.$$scope)},t.$$.update=()=>{if(t.$$.dirty&32){const b=d||{};n(10,p=Object.keys(N).reduce((m,y)=>{const T=b[y];return m[y]=[(...R)=>w(N[y],R),...(Array.isArray(T)?T:[T]).filter(Boolean)],m},{}))}t.$$.dirty&528&&Et.valid(a)&&a.options(i||{},!0),t.$$.dirty&1536&&Et.valid(a)&&a.on(p||{},!0)},[u,v,_,o,i,d,l,k,H,a,p,r,c,z,P]}class yc extends es{constructor(e){super(),ns(this,e,fc,dc,Kn,{element:0,options:4,events:5,defer:6,osInstance:7,getElement:8})}get osInstance(){return this.$$.ctx[7]}get getElement(){return this.$$.ctx[8]}}export{yc as O};
