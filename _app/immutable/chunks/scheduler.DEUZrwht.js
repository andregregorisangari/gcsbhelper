function C(){}const rt=t=>t;function L(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function st(){return Object.create(null)}function T(t){t.forEach(M)}function W(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function B(t,...e){if(t==null){for(const i of e)i(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t,e,n){t.$$.on_destroy.push(B(e,n))}function ut(t,e,n,i){if(t){const r=j(t,e,n,i);return t[0](r)}}function j(t,e,n,i){return t[1]&&i?L(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function ft(t,e,n,i,r,o){if(r){const s=j(e,n,i,o);t.p(s,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function dt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ht(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function mt(t){return t&&W(t.destroy)?t.destroy:C}function pt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let y=!1;function yt(){y=!0}function bt(){y=!1}function I(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:I(1,r,P=>e[n[P]].claim_order,u))-1;i[c]=n[a]+1;const k=a+1;n[k]=c,r=Math.max(k,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(s[c],a)}}function O(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=w("style");return e.textContent="/* empty */",H(F(t),e),e.sheet}function H(t,e){return O(t.head||t,e),e.sheet}function R(t,e){if(y){for(q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xt(t,e,n){y&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function vt(){return v(" ")}function kt(){return v("")}function E(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Et(t){return function(e){e.target===this&&t.call(this,e)}}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const G=["width","height"];function J(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&G.indexOf(i)===-1?t[i]=e[i]:S(t,i,e[i])}function K(t,e){Object.keys(e).forEach(n=>{Q(t,n,e[n])})}function Q(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:S(t,e,n)}function Nt(t){return/-/.test(t)?K:J}function At(t){return t.dataset.svelteH}function Ct(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){V(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function X(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function jt(t,e,n){return X(t,e,n,w)}function Y(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Ot(t){return Y(t," ")}function St(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function zt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let m;function Z(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function Pt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=w("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Z();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=E(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=E(i.contentWindow,"resize",e),e()}),O(t,i),()=>{(r||o&&i.contentWindow)&&o(),U(i)}}function Lt(t,e,n){t.classList.toggle(e,!!n)}function $(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Mt(t,e){return new t(e)}let p;function b(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){d().$$.on_mount.push(t)}function Wt(t){d().$$.after_update.push(t)}function Bt(t){d().$$.on_destroy.push(t)}function It(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=$(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,e){return d().$$.context.set(t,e),e}function Ft(t){return d().$$.context.get(t)}const h=[],N=[];let _=[];const A=[],z=Promise.resolve();let x=!1;function tt(){x||(x=!0,z.then(nt))}function Ht(){return tt(),z}function et(t){_.push(t)}const g=new Set;let f=0;function nt(){if(f!==0)return;const t=p;do{try{for(;f<h.length;){const e=h[f];f++,b(e),it(e.$$)}}catch(e){throw h.length=0,f=0,e}for(b(null),h.length=0,f=0;N.length;)N.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(h.length);for(;A.length;)A.pop()();x=!1,g.clear(),b(t)}function it(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}function Rt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{E as $,et as A,$ as B,rt as C,st as D,nt as E,ot as F,Rt as G,p as H,b as I,M as J,h as K,tt as L,yt as M,bt as N,ht as O,It as P,Bt as Q,L as R,dt as S,Nt as T,ut as U,ft as V,_t as W,at as X,At as Y,mt as Z,Pt as _,vt as a,pt as a0,Et as a1,Ft as a2,wt as a3,Lt as a4,Dt as a5,qt as a6,Ct as b,jt as c,Y as d,w as e,U as f,Ot as g,R as h,xt as i,St as j,lt as k,kt as l,Wt as m,C as n,Tt as o,S as p,zt as q,N as r,ct as s,v as t,Mt as u,Ht as v,F as w,gt as x,T as y,W as z};
