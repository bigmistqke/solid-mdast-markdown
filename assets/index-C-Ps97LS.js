(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const qn=(t,e)=>t===e,xt=Symbol("solid-proxy"),We=Symbol("solid-track"),we={equals:qn};let Hn=Yn;const kt=1,ye=2,Vn={owned:null,cleanups:null,context:null,owner:null};var H=null;let Me=null,Qi=null,Q=null,nt=null,yt=null,Fe=0;function ne(t,e){const n=Q,i=H,r=t.length===0,o=e===void 0?i:e,l=r?Vn:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=r?t:()=>t(()=>at(()=>ve(l)));H=l,Q=null;try{return vt(a,!0)}finally{Q=n,H=i}}function wt(t,e){e=e?Object.assign({},we,e):we;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),Kn(n,r));return[Gn.bind(n),i]}function mt(t,e,n){const i=_e(t,e,!1,kt);Qt(i)}function ln(t,e,n){Hn=Zi;const i=_e(t,e,!1,kt);i.user=!0,yt?yt.push(i):Qt(i)}function X(t,e,n){n=n?Object.assign({},we,n):we;const i=_e(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Qt(i),Gn.bind(i)}function Gi(t,e=qn,n){const i=new Map,r=_e(o=>{const l=t();for(const[a,s]of i.entries())if(e(a,l)!==e(a,o))for(const u of s.values())u.state=kt,u.pure?nt.push(u):yt.push(u);return l},void 0,!0,kt);return Qt(r),o=>{const l=Q;if(l){let a;(a=i.get(o))?a.add(l):i.set(o,a=new Set([l])),Le(()=>{a.delete(l),!a.size&&i.delete(o)})}return e(o,r.value)}}function Un(t){return vt(t,!1)}function at(t){if(Q===null)return t();const e=Q;Q=null;try{return t()}finally{Q=e}}function on(t,e,n){const i=Array.isArray(t);let r,o=n&&n.defer;return l=>{let a;if(i){a=Array(t.length);for(let u=0;u<t.length;u++)a[u]=t[u]()}else a=t();if(o)return o=!1,l;const s=at(()=>e(a,r,l));return r=a,s}}function Ki(t){ln(()=>at(t))}function Le(t){return H===null||(H.cleanups===null?H.cleanups=[t]:H.cleanups.push(t)),t}function Qe(){return Q}function Wn(){return H}function Qn(t,e){const n=H,i=Q;H=t,Q=null;try{return vt(e,!0)}catch(r){sn(r)}finally{H=n,Q=i}}function Yi(t){const e=Q,n=H;return Promise.resolve().then(()=>{Q=e,H=n;let i;return vt(t,!1),Q=H=null,i?i.done:void 0})}function ue(t,e){const n=Symbol("context");return{id:n,Provider:er(n),defaultValue:t}}function ce(t){return H&&H.context&&H.context[t.id]!==void 0?H.context[t.id]:t.defaultValue}function an(t){const e=X(t),n=X(()=>Ge(e()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function Gn(){if(this.sources&&this.state)if(this.state===kt)Qt(this);else{const t=nt;nt=null,vt(()=>Se(this),!1),nt=t}if(Q){const t=this.observers?this.observers.length:0;Q.sources?(Q.sources.push(this),Q.sourceSlots.push(t)):(Q.sources=[this],Q.sourceSlots=[t]),this.observers?(this.observers.push(Q),this.observerSlots.push(Q.sources.length-1)):(this.observers=[Q],this.observerSlots=[Q.sources.length-1])}return this.value}function Kn(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&vt(()=>{for(let r=0;r<t.observers.length;r+=1){const o=t.observers[r],l=Me&&Me.running;l&&Me.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?nt.push(o):yt.push(o),o.observers&&Jn(o)),l||(o.state=kt)}if(nt.length>1e6)throw nt=[],new Error},!1)),e}function Qt(t){if(!t.fn)return;ve(t);const e=Fe;Ji(t,t.value,e)}function Ji(t,e,n){let i;const r=H,o=Q;Q=H=t;try{i=t.fn(e)}catch(l){return t.pure&&(t.state=kt,t.owned&&t.owned.forEach(ve),t.owned=null),t.updatedAt=n+1,sn(l)}finally{Q=o,H=r}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Kn(t,i):t.value=i,t.updatedAt=n)}function _e(t,e,n,i=kt,r){const o={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:H,context:H?H.context:null,pure:n};return H===null||H!==Vn&&(H.owned?H.owned.push(o):H.owned=[o]),o}function ke(t){if(t.state===0)return;if(t.state===ye)return Se(t);if(t.suspense&&at(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Fe);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===kt)Qt(t);else if(t.state===ye){const i=nt;nt=null,vt(()=>Se(t,e[0]),!1),nt=i}}function vt(t,e){if(nt)return t();let n=!1;e||(nt=[]),yt?n=!0:yt=[],Fe++;try{const i=t();return Xi(n),i}catch(i){n||(yt=null),nt=null,sn(i)}}function Xi(t){if(nt&&(Yn(nt),nt=null),t)return;const e=yt;yt=null,e.length&&vt(()=>Hn(e),!1)}function Yn(t){for(let e=0;e<t.length;e++)ke(t[e])}function Zi(t){let e,n=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[n++]=i:ke(i)}for(e=0;e<n;e++)ke(t[e])}function Se(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const r=i.state;r===kt?i!==e&&(!i.updatedAt||i.updatedAt<Fe)&&ke(i):r===ye&&Se(i,e)}}}function Jn(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=ye,n.pure?nt.push(n):yt.push(n),n.observers&&Jn(n))}}function ve(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();i<r.length&&(o.sourceSlots[l]=i,r[i]=o,n.observerSlots[i]=l)}}if(t.owned){for(e=t.owned.length-1;e>=0;e--)ve(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function tr(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function sn(t,e=H){throw tr(t)}function Ge(t){if(typeof t=="function"&&!t.length)return Ge(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const i=Ge(t[n]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function er(t,e){return function(i){let r;return mt(()=>r=at(()=>(H.context={...H.context,[t]:i.value},an(()=>i.children))),void 0),r}}const nr=Symbol("fallback");function gn(t){for(let e=0;e<t.length;e++)t[e]()}function ir(t,e,n={}){let i=[],r=[],o=[],l=0,a=e.length>1?[]:null;return Le(()=>gn(o)),()=>{let s=t()||[],u,h;return s[We],at(()=>{let d=s.length,p,g,y,S,w,A,k,P,v;if(d===0)l!==0&&(gn(o),o=[],i=[],r=[],l=0,a&&(a=[])),n.fallback&&(i=[nr],r[0]=ne(x=>(o[0]=x,n.fallback())),l=1);else if(l===0){for(r=new Array(d),h=0;h<d;h++)i[h]=s[h],r[h]=ne(c);l=d}else{for(y=new Array(d),S=new Array(d),a&&(w=new Array(d)),A=0,k=Math.min(l,d);A<k&&i[A]===s[A];A++);for(k=l-1,P=d-1;k>=A&&P>=A&&i[k]===s[P];k--,P--)y[P]=r[k],S[P]=o[k],a&&(w[P]=a[k]);for(p=new Map,g=new Array(P+1),h=P;h>=A;h--)v=s[h],u=p.get(v),g[h]=u===void 0?-1:u,p.set(v,h);for(u=A;u<=k;u++)v=i[u],h=p.get(v),h!==void 0&&h!==-1?(y[h]=r[u],S[h]=o[u],a&&(w[h]=a[u]),h=g[h],p.set(v,h)):o[u]();for(h=A;h<d;h++)h in y?(r[h]=y[h],o[h]=S[h],a&&(a[h]=w[h],a[h](h))):r[h]=ne(c);r=r.slice(0,l=d),i=s.slice(0)}return r});function c(d){if(o[h]=d,a){const[p,g]=wt(h);return a[h]=g,e(s[h],p)}return e(s[h])}}}function z(t,e){return at(()=>t(e||{}))}function fe(){return!0}const Ke={get(t,e,n){return e===xt?n:t.get(e)},has(t,e){return e===xt?!0:t.has(e)},set:fe,deleteProperty:fe,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:fe,deleteProperty:fe}},ownKeys(t){return t.keys()}};function Re(t){return(t=typeof t=="function"?t():t)?t:{}}function rr(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function Xn(...t){let e=!1;for(let l=0;l<t.length;l++){const a=t[l];e=e||!!a&&xt in a,t[l]=typeof a=="function"?(e=!0,X(a)):a}if(e)return new Proxy({get(l){for(let a=t.length-1;a>=0;a--){const s=Re(t[a])[l];if(s!==void 0)return s}},has(l){for(let a=t.length-1;a>=0;a--)if(l in Re(t[a]))return!0;return!1},keys(){const l=[];for(let a=0;a<t.length;a++)l.push(...Object.keys(Re(t[a])));return[...new Set(l)]}},Ke);const n={},i=Object.create(null);for(let l=t.length-1;l>=0;l--){const a=t[l];if(!a)continue;const s=Object.getOwnPropertyNames(a);for(let u=s.length-1;u>=0;u--){const h=s[u];if(h==="__proto__"||h==="constructor")continue;const c=Object.getOwnPropertyDescriptor(a,h);if(!i[h])i[h]=c.get?{enumerable:!0,configurable:!0,get:rr.bind(n[h]=[c.get.bind(a)])}:c.value!==void 0?c:void 0;else{const d=n[h];d&&(c.get?d.push(c.get.bind(a)):c.value!==void 0&&d.push(()=>c.value))}}}const r={},o=Object.keys(i);for(let l=o.length-1;l>=0;l--){const a=o[l],s=i[a];s&&s.get?Object.defineProperty(r,a,s):r[a]=s?s.value:void 0}return r}function lr(t,...e){if(xt in t){const r=new Set(e.length>1?e.flat():e[0]),o=e.map(l=>new Proxy({get(a){return l.includes(a)?t[a]:void 0},has(a){return l.includes(a)&&a in t},keys(){return l.filter(a=>a in t)}},Ke));return o.push(new Proxy({get(l){return r.has(l)?void 0:t[l]},has(l){return r.has(l)?!1:l in t},keys(){return Object.keys(t).filter(l=>!r.has(l))}},Ke)),o}const n={},i=e.map(()=>({}));for(const r of Object.getOwnPropertyNames(t)){const o=Object.getOwnPropertyDescriptor(t,r),l=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let a=!1,s=0;for(const u of e)u.includes(r)&&(a=!0,l?i[s][r]=o.value:Object.defineProperty(i[s],r,o)),++s;a||(l?n[r]=o.value:Object.defineProperty(n,r,o))}return[...i,n]}const or=t=>`Stale read from <${t}>.`;function ie(t){const e="fallback"in t&&{fallback:()=>t.fallback};return X(ir(()=>t.each,t.children,e||void 0))}function Nt(t){const e=t.keyed,n=X(()=>t.when,void 0,{equals:(i,r)=>e?i===r:!i==!r});return X(()=>{const i=n();if(i){const r=t.children;return typeof r=="function"&&r.length>0?at(()=>r(e?i:()=>{if(!at(n))throw or("Show");return t.when})):r}return t.fallback},void 0,void 0)}const ar=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],sr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ar]),ur=new Set(["innerHTML","textContent","innerText","children"]),cr=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),hr=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function pr(t,e){const n=hr[t];return typeof n=="object"?n[e]?n.$:void 0:n}const mr=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),dr=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),fr={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function gr(t,e,n){let i=n.length,r=e.length,o=i,l=0,a=0,s=e[r-1].nextSibling,u=null;for(;l<r||a<o;){if(e[l]===n[a]){l++,a++;continue}for(;e[r-1]===n[o-1];)r--,o--;if(r===l){const h=o<i?a?n[a-1].nextSibling:n[o-a]:s;for(;a<o;)t.insertBefore(n[a++],h)}else if(o===a)for(;l<r;)(!u||!u.has(e[l]))&&e[l].remove(),l++;else if(e[l]===n[o-1]&&n[a]===e[r-1]){const h=e[--r].nextSibling;t.insertBefore(n[a++],e[l++].nextSibling),t.insertBefore(n[--o],h),e[r]=n[o]}else{if(!u){u=new Map;let c=a;for(;c<o;)u.set(n[c],c++)}const h=u.get(e[l]);if(h!=null)if(a<h&&h<o){let c=l,d=1,p;for(;++c<r&&c<o&&!((p=u.get(e[c]))==null||p!==h+d);)d++;if(d>h-a){const g=e[l];for(;a<h;)t.insertBefore(n[a++],g)}else t.replaceChild(n[a++],e[l++])}else l++;else e[l++].remove()}}}const bn="_$DX_DELEGATE";function br(t,e,n,i={}){let r;return ne(o=>{r=o,e===document?t():U(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{r(),e.textContent=""}}function Z(t,e,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=t,l.content.firstChild},o=()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function Zn(t,e=window.document){const n=e[bn]||(e[bn]=new Set);for(let i=0,r=t.length;i<r;i++){const o=t[i];n.has(o)||(n.add(o),e.addEventListener(o,Ar))}}function $t(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function xr(t,e,n,i){i==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,i)}function ut(t,e){e==null?t.removeAttribute("class"):t.className=e}function Ir(t,e,n,i){if(i)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const r=n[0];t.addEventListener(e,n[0]=o=>r.call(t,n[1],o))}else t.addEventListener(e,n)}function wr(t,e,n={}){const i=Object.keys(e||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const a=r[o];!a||a==="undefined"||e[a]||(xn(t,a,!1),delete n[a])}for(o=0,l=i.length;o<l;o++){const a=i[o],s=!!e[a];!a||a==="undefined"||n[a]===s||!s||(xn(t,a,!0),n[a]=s)}return n}function yr(t,e,n){if(!e)return n?$t(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let r,o;for(o in n)e[o]==null&&i.removeProperty(o),delete n[o];for(o in e)r=e[o],r!==n[o]&&(i.setProperty(o,r),n[o]=r);return n}function kr(t,e={},n,i){const r={};return mt(()=>r.children=oe(t,e.children,r.children)),mt(()=>typeof e.ref=="function"?ti(e.ref,t):e.ref=t),mt(()=>Sr(t,e,n,!0,r,!0)),r}function ti(t,e,n){return at(()=>t(e,n))}function U(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return oe(t,e,i,n);mt(r=>oe(t,e(),r,n),i)}function Sr(t,e,n,i,r={},o=!1){e||(e={});for(const l in r)if(!(l in e)){if(l==="children")continue;r[l]=In(t,l,null,r[l],n,o)}for(const l in e){if(l==="children")continue;const a=e[l];r[l]=In(t,l,a,r[l],n,o)}}function Tr(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function xn(t,e,n){const i=e.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)t.classList.toggle(i[r],n)}function In(t,e,n,i,r,o){let l,a,s,u,h;if(e==="style")return yr(t,n,i);if(e==="classList")return wr(t,n,i);if(n===i)return i;if(e==="ref")o||n(t);else if(e.slice(0,3)==="on:"){const c=e.slice(3);i&&t.removeEventListener(c,i),n&&t.addEventListener(c,n)}else if(e.slice(0,10)==="oncapture:"){const c=e.slice(10);i&&t.removeEventListener(c,i,!0),n&&t.addEventListener(c,n,!0)}else if(e.slice(0,2)==="on"){const c=e.slice(2).toLowerCase(),d=mr.has(c);if(!d&&i){const p=Array.isArray(i)?i[0]:i;t.removeEventListener(c,p)}(d||n)&&(Ir(t,c,n,d),d&&Zn([c]))}else if(e.slice(0,5)==="attr:")$t(t,e.slice(5),n);else if((h=e.slice(0,5)==="prop:")||(s=ur.has(e))||!r&&((u=pr(e,t.tagName))||(a=sr.has(e)))||(l=t.nodeName.includes("-")))h&&(e=e.slice(5),a=!0),e==="class"||e==="className"?ut(t,n):l&&!a&&!s?t[Tr(e)]=n:t[u||e]=n;else{const c=r&&e.indexOf(":")>-1&&fr[e.split(":")[0]];c?xr(t,c,e,n):$t(t,cr[e]||e,n)}return n}function Ar(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[e];if(i&&!n.disabled){const r=n[`${e}Data`];if(r!==void 0?i.call(n,r,t):i.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function oe(t,e,n,i,r){for(;typeof n=="function";)n=n();if(e===n)return n;const o=typeof e,l=i!==void 0;if(t=l&&n[0]&&n[0].parentNode||t,o==="string"||o==="number")if(o==="number"&&(e=e.toString()),l){let a=n[0];a&&a.nodeType===3?a.data!==e&&(a.data=e):a=document.createTextNode(e),n=qt(t,n,i,a)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e;else if(e==null||o==="boolean")n=qt(t,n,i);else{if(o==="function")return mt(()=>{let a=e();for(;typeof a=="function";)a=a();n=oe(t,a,n,i)}),()=>n;if(Array.isArray(e)){const a=[],s=n&&Array.isArray(n);if(Ye(a,e,n,r))return mt(()=>n=oe(t,a,n,i,!0)),()=>n;if(a.length===0){if(n=qt(t,n,i),l)return n}else s?n.length===0?wn(t,a,i):gr(t,n,a):(n&&qt(t),wn(t,a));n=a}else if(e.nodeType){if(Array.isArray(n)){if(l)return n=qt(t,n,i,e);qt(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function Ye(t,e,n,i){let r=!1;for(let o=0,l=e.length;o<l;o++){let a=e[o],s=n&&n[t.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))r=Ye(t,a,s)||r;else if(u==="function")if(i){for(;typeof a=="function";)a=a();r=Ye(t,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||r}else t.push(a),r=!0;else{const h=String(a);s&&s.nodeType===3&&s.data===h?t.push(s):t.push(document.createTextNode(h))}}return r}function wn(t,e,n=null){for(let i=0,r=e.length;i<r;i++)t.insertBefore(e[i],n)}function qt(t,e,n,i){if(n===void 0)return t.textContent="";const r=i||document.createTextNode("");if(e.length){let o=!1;for(let l=e.length-1;l>=0;l--){const a=e[l];if(r!==a){const s=a.parentNode===t;!o&&!l?s?t.replaceChild(r,a):t.insertBefore(r,n):s&&a.remove()}else o=!0}}else t.insertBefore(r,n);return[r]}const Cr=!1,Pr="http://www.w3.org/2000/svg";function Er(t,e=!1){return e?document.createElementNS(Pr,t):document.createElement(t)}function $e(t){const[e,n]=lr(t,["component"]),i=X(()=>e.component);return X(()=>{const r=i();switch(typeof r){case"function":return at(()=>r(n));case"string":const o=dr.has(r),l=Er(r,o);return kr(l,n,o),l}})}function ei(){let t=new Set;function e(r){return t.add(r),()=>t.delete(r)}let n=!1;function i(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const a of t)a.listener({...l,from:a.location,retry:s=>{s&&(n=!0),a.navigate(r,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:e,confirm:i}}let Je;function un(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Je=window.history.state._depth}un();function Fr(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function Lr(t,e){let n=!1;return()=>{const i=Je;un();const r=i==null?null:Je-i;if(n){n=!1;return}r&&e(r)?(n=!0,window.history.go(-r)):t()}}const _r=/^(?:[a-z0-9]+:)?\/\//i,vr=/^\/+|(\/)\/+$/g,ni="http://sr";function re(t,e=!1){const n=t.replace(vr,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function be(t,e,n){if(_r.test(e))return;const i=re(t),r=n&&re(n);let o="";return!r||e.startsWith("/")?o=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?o=i+r:o=r,(o||"/")+re(e,!o)}function zr(t,e){if(t==null)throw new Error(e);return t}function Or(t,e){return re(t).replace(/\/*(\*.*)?$/g,"")+re(e)}function ii(t){const e={};return t.searchParams.forEach((n,i)=>{i in e?Array.isArray(e[i])?e[i].push(n):e[i]=[e[i],n]:e[i]=n}),e}function Dr(t,e,n){const[i,r]=t.split("/*",2),o=i.split("/").filter(Boolean),l=o.length;return a=>{const s=a.split("/").filter(Boolean),u=s.length-l;if(u<0||u>0&&r===void 0&&!e)return null;const h={path:l?"":"/",params:{}},c=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const p=o[d],g=p[0]===":",y=g?s[d]:s[d].toLowerCase(),S=g?p.slice(1):p.toLowerCase();if(g&&Ne(y,c(S)))h.params[S]=y;else if(g||!Ne(y,S))return null;h.path+=`/${y}`}if(r){const d=u?s.slice(-u).join("/"):"";if(Ne(d,c(r)))h.params[r]=d;else return null}return h}}function Ne(t,e){const n=i=>i===t;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function Mr(t){const[e,n]=t.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((r,o)=>r+(o.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function ri(t){const e=new Map,n=Wn();return new Proxy({},{get(i,r){return e.has(r)||Qn(n,()=>e.set(r,X(()=>t()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())},has(i,r){return r in t()}})}function Rr(t,e){const n=new URLSearchParams(t);Object.entries(e).forEach(([r,o])=>{o==null||o===""||o instanceof Array&&!o.length?n.delete(r):o instanceof Array?(n.delete(r),o.forEach(l=>{n.append(r,String(l))})):n.set(r,String(o))});const i=n.toString();return i?`?${i}`:""}function li(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),i=t.slice(e.index+e[0].length);const r=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=e[1]),i=i.slice(e[0].length);return li(i).reduce((o,l)=>[...o,...r.map(a=>a+l)],[])}const $r=100,oi=ue(),ai=ue(),si=()=>zr(ce(oi),"<A> and 'use' router primitives can be only used inside a Route."),Nr=()=>si().navigatorFactory(),Br=()=>si().location,jr=()=>{const t=Br(),e=Nr(),n=(i,r)=>{const o=at(()=>Rr(t.search,i)+t.hash);e(o,{scroll:!1,resolve:!1,...r})};return[t.query,n]};function qr(t,e=""){const{component:n,preload:i,load:r,children:o,info:l}=t,a=!o||Array.isArray(o)&&!o.length,s={key:t,component:n,preload:i||r,info:l};return ui(t.path).reduce((u,h)=>{for(const c of li(h)){const d=Or(e,c);let p=a?d:d.split("/*",1)[0];p=p.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),u.push({...s,originalPath:h,pattern:p,matcher:Dr(p,!a,t.matchFilters)})}return u},[])}function Hr(t,e=0){return{routes:t,score:Mr(t[t.length-1])*1e4-e,matcher(n){const i=[];for(let r=t.length-1;r>=0;r--){const o=t[r],l=o.matcher(n);if(!l)return null;i.unshift({...l,route:o})}return i}}}function ui(t){return Array.isArray(t)?t:[t]}function ci(t,e="",n=[],i=[]){const r=ui(t);for(let o=0,l=r.length;o<l;o++){const a=r[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const s=qr(a,e);for(const u of s){n.push(u);const h=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!h)ci(a.children,u.pattern,n,i);else{const c=Hr([...n],i.length);i.push(c)}n.pop()}}}return n.length?i:i.sort((o,l)=>l.score-o.score)}function Be(t,e){for(let n=0,i=t.length;n<i;n++){const r=t[n].matcher(e);if(r)return r}return[]}function Vr(t,e,n){const i=new URL(ni),r=X(h=>{const c=t();try{return new URL(c,i)}catch{return console.error(`Invalid path ${c}`),h}},i,{equals:(h,c)=>h.href===c.href}),o=X(()=>r().pathname),l=X(()=>r().search,!0),a=X(()=>r().hash),s=()=>"",u=on(l,()=>ii(r()));return{get pathname(){return o()},get search(){return l()},get hash(){return a()},get state(){return e()},get key(){return s()},query:n?n(u):ri(u)}}let Rt;function Ur(){return Rt}function Wr(t,e,n,i={}){const{signal:[r,o],utils:l={}}=t,a=l.parsePath||(L=>L),s=l.renderPath||(L=>L),u=l.beforeLeave||ei(),h=be("",i.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&o({value:h,replace:!0,scroll:!1});const[c,d]=wt(!1);let p;const g=(L,E)=>{E.value===y()&&E.state===w()||(p===void 0&&d(!0),Rt=L,p=E,Yi(()=>{p===E&&(S(p.value),A(p.state),v[1](N=>N.filter(G=>G.pending)))}).finally(()=>{p===E&&Un(()=>{Rt=void 0,L==="navigate"&&C(p),d(!1),p=void 0})}))},[y,S]=wt(r().value),[w,A]=wt(r().state),k=Vr(y,w,l.queryWrapper),P=[],v=wt([]),x=X(()=>typeof i.transformUrl=="function"?Be(e(),i.transformUrl(k.pathname)):Be(e(),k.pathname)),D=()=>{const L=x(),E={};for(let N=0;N<L.length;N++)Object.assign(E,L[N].params);return E},j=l.paramsWrapper?l.paramsWrapper(D,e):ri(D),R={pattern:h,path:()=>h,outlet:()=>null,resolvePath(L){return be(h,L)}};return mt(on(r,L=>g("native",L),{defer:!0})),{base:R,location:k,params:j,isRouting:c,renderPath:s,parsePath:a,navigatorFactory:F,matches:x,beforeLeave:u,preloadRoute:q,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:v};function b(L,E,N){at(()=>{if(typeof E=="number"){E&&(l.go?l.go(E):console.warn("Router integration does not support relative routing"));return}const G=!E||E[0]==="?",{replace:V,resolve:et,scroll:m,state:W}={replace:!1,resolve:!G,scroll:!0,...N},J=et?L.resolvePath(E):be(G&&k.pathname||"",E);if(J===void 0)throw new Error(`Path '${E}' is not a routable path`);if(P.length>=$r)throw new Error("Too many redirects");const f=y();(J!==f||W!==w())&&(Cr||u.confirm(J,N)&&(P.push({value:f,replace:V,scroll:m,state:w()}),g("navigate",{value:J,state:W})))})}function F(L){return L=L||ce(ai)||R,(E,N)=>b(L,E,N)}function C(L){const E=P[0];E&&(o({...L,replace:E.replace,scroll:E.scroll}),P.length=0)}function q(L,E){const N=Be(e(),L.pathname),G=Rt;Rt="preload";for(let V in N){const{route:et,params:m}=N[V];et.component&&et.component.preload&&et.component.preload();const{preload:W}=et;E&&W&&Qn(n(),()=>W({params:m,location:{pathname:L.pathname,search:L.search,hash:L.hash,query:ii(L),state:null,key:""},intent:"preload"}))}Rt=G}}function Qr(t,e,n,i){const{base:r,location:o,params:l}=t,{pattern:a,component:s,preload:u}=i().route,h=X(()=>i().path);s&&s.preload&&s.preload();const c=u?u({params:l,location:o,intent:Rt||"initial"}):void 0;return{parent:e,pattern:a,path:h,outlet:()=>s?z(s,{params:l,location:o,data:c,get children(){return n()}}):n(),resolvePath(p){return be(r.path(),p,h())}}}const Gr=t=>e=>{const{base:n}=e,i=an(()=>e.children),r=X(()=>ci(i(),e.base||""));let o;const l=Wr(t,r,()=>o,{base:n,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return t.create&&t.create(l),z(oi.Provider,{value:l,get children(){return z(Kr,{routerState:l,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[X(()=>(o=Wn())&&null),z(Yr,{routerState:l,get branches(){return r()}})]}})}})};function Kr(t){const e=t.routerState.location,n=t.routerState.params,i=X(()=>t.preload&&at(()=>{t.preload({params:n,location:e,intent:Ur()||"initial"})}));return z(Nt,{get when(){return t.root},keyed:!0,get fallback(){return t.children},children:r=>z(r,{params:n,location:e,get data(){return i()},get children(){return t.children}})})}function Yr(t){const e=[];let n;const i=X(on(t.routerState.matches,(r,o,l)=>{let a=o&&r.length===o.length;const s=[];for(let u=0,h=r.length;u<h;u++){const c=o&&o[u],d=r[u];l&&c&&d.route.key===c.route.key?s[u]=l[u]:(a=!1,e[u]&&e[u](),ne(p=>{e[u]=p,s[u]=Qr(t.routerState,s[u-1]||t.routerState.base,yn(()=>i()[u+1]),()=>{const g=t.routerState.matches();return g[u]??g[0]})}))}return e.splice(r.length).forEach(u=>u()),l&&a?l:(n=s[0],s)}));return yn(()=>i()&&n)()}const yn=t=>()=>z(Nt,{get when(){return t()},keyed:!0,children:e=>z(ai.Provider,{value:e,get children(){return e.outlet()}})}),Jr=t=>{const e=an(()=>t.children);return Xn(t,{get children(){return e()}})};function Xr([t,e],n,i){return[t,i?r=>e(i(r)):e]}function Zr(t){let e=!1;const n=r=>typeof r=="string"?{value:r}:r,i=Xr(wt(n(t.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!e&&t.set(r),r));return t.init&&Le(t.init((r=t.get())=>{e=!0,i[1](n(r)),e=!1})),Gr({signal:i,create:t.create,utils:t.utils})}function tl(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function el(t,e){const n=t&&document.getElementById(t);n?n.scrollIntoView():e&&window.scrollTo(0,0)}const nl=new Map;function il(t=!0,e=!1,n="/_server",i){return r=>{const o=r.base.path(),l=r.navigatorFactory(r.base);let a,s;function u(y){return y.namespaceURI==="http://www.w3.org/2000/svg"}function h(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const S=y.composedPath().find(x=>x instanceof Node&&x.nodeName.toUpperCase()==="A");if(!S||e&&!S.hasAttribute("link"))return;const w=u(S),A=w?S.href.baseVal:S.href;if((w?S.target.baseVal:S.target)||!A&&!S.hasAttribute("state"))return;const P=(S.getAttribute("rel")||"").split(/\s+/);if(S.hasAttribute("download")||P&&P.includes("external"))return;const v=w?new URL(A,document.baseURI):new URL(A);if(!(v.origin!==window.location.origin||o&&v.pathname&&!v.pathname.toLowerCase().startsWith(o.toLowerCase())))return[S,v]}function c(y){const S=h(y);if(!S)return;const[w,A]=S,k=r.parsePath(A.pathname+A.search+A.hash),P=w.getAttribute("state");y.preventDefault(),l(k,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:P?JSON.parse(P):void 0})}function d(y){const S=h(y);if(!S)return;const[w,A]=S;i&&(A.pathname=i(A.pathname)),r.preloadRoute(A,w.getAttribute("preload")!=="false")}function p(y){clearTimeout(a);const S=h(y);if(!S)return s=null;const[w,A]=S;s!==w&&(i&&(A.pathname=i(A.pathname)),a=setTimeout(()=>{r.preloadRoute(A,w.getAttribute("preload")!=="false"),s=w},20))}function g(y){if(y.defaultPrevented)return;let S=y.submitter&&y.submitter.hasAttribute("formaction")?y.submitter.getAttribute("formaction"):y.target.getAttribute("action");if(!S)return;if(!S.startsWith("https://action/")){const A=new URL(S,ni);if(S=r.parsePath(A.pathname+A.search),!S.startsWith(n))return}if(y.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=nl.get(S);if(w){y.preventDefault();const A=new FormData(y.target,y.submitter);w.call({r,f:y.target},y.target.enctype==="multipart/form-data"?A:new URLSearchParams(A))}}Zn(["click","submit"]),document.addEventListener("click",c),t&&(document.addEventListener("mousemove",p,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",g),Le(()=>{document.removeEventListener("click",c),t&&(document.removeEventListener("mousemove",p),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",g)})}}function rl(t){const e=()=>{const i=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:i+window.location.hash,state:r}},n=ei();return Zr({get:e,set({value:i,replace:r,scroll:o,state:l}){r?window.history.replaceState(Fr(l),"",i):window.history.pushState(l,"",i),el(decodeURIComponent(window.location.hash.slice(1)),o),un()},init:i=>tl(window,"popstate",Lr(i,r=>{if(r)return!n.confirm(r);{const o=e();return!n.confirm(o.value,{state:o.state})}})),create:il(t.preload,t.explicitLinks,t.actionBase,t.transformUrl),utils:{go:i=>window.history.go(i),beforeLeave:n}})(t)}const Xe=Symbol("store-raw"),Wt=Symbol("store-node"),Et=Symbol("store-has"),hi=Symbol("store-self");function pi(t){let e=t[xt];if(!e&&(Object.defineProperty(t,xt,{value:e=new Proxy(t,al)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let r=0,o=n.length;r<o;r++){const l=n[r];i[l].get&&Object.defineProperty(t,l,{enumerable:i[l].enumerable,get:i[l].get.bind(e)})}}return e}function Te(t){let e;return t!=null&&typeof t=="object"&&(t[xt]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function ae(t,e=new Set){let n,i,r,o;if(n=t!=null&&t[Xe])return n;if(!Te(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let l=0,a=t.length;l<a;l++)r=t[l],(i=ae(r,e))!==r&&(t[l]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const l=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let s=0,u=l.length;s<u;s++)o=l[s],!a[o].get&&(r=t[o],(i=ae(r,e))!==r&&(t[o]=i))}return t}function Ae(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function se(t,e,n){if(t[e])return t[e];const[i,r]=wt(n,{equals:!1,internal:!0});return i.$=r,t[e]=i}function ll(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===xt||e===Wt||(delete n.value,delete n.writable,n.get=()=>t[xt][e]),n}function mi(t){Qe()&&se(Ae(t,Wt),hi)()}function ol(t){return mi(t),Reflect.ownKeys(t)}const al={get(t,e,n){if(e===Xe)return t;if(e===xt)return n;if(e===We)return mi(t),n;const i=Ae(t,Wt),r=i[e];let o=r?r():t[e];if(e===Wt||e===Et||e==="__proto__")return o;if(!r){const l=Object.getOwnPropertyDescriptor(t,e);Qe()&&(typeof o!="function"||t.hasOwnProperty(e))&&!(l&&l.get)&&(o=se(i,e,o)())}return Te(o)?pi(o):o},has(t,e){return e===Xe||e===xt||e===We||e===Wt||e===Et||e==="__proto__"?!0:(Qe()&&se(Ae(t,Et),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:ol,getOwnPropertyDescriptor:ll};function Ce(t,e,n,i=!1){if(!i&&t[e]===n)return;const r=t[e],o=t.length;n===void 0?(delete t[e],t[Et]&&t[Et][e]&&r!==void 0&&t[Et][e].$()):(t[e]=n,t[Et]&&t[Et][e]&&r===void 0&&t[Et][e].$());let l=Ae(t,Wt),a;if((a=se(l,e,r))&&a.$(()=>n),Array.isArray(t)&&t.length!==o){for(let s=t.length;s<o;s++)(a=l[s])&&a.$();(a=se(l,"length",o))&&a.$(t.length)}(a=l[hi])&&a.$()}function di(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const r=n[i];Ce(t,r,e[r])}}function sl(t,e){if(typeof e=="function"&&(e=e(t)),e=ae(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const r=e[n];t[n]!==r&&Ce(t,n,r)}Ce(t,"length",i)}else di(t,e)}function ee(t,e,n=[]){let i,r=t;if(e.length>1){i=e.shift();const l=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let s=0;s<i.length;s++)ee(t,[i[s]].concat(e),n);return}else if(a&&l==="function"){for(let s=0;s<t.length;s++)i(t[s],s)&&ee(t,[s].concat(e),n);return}else if(a&&l==="object"){const{from:s=0,to:u=t.length-1,by:h=1}=i;for(let c=s;c<=u;c+=h)ee(t,[c].concat(e),n);return}else if(e.length>1){ee(t[i],e,[i].concat(n));return}r=t[i],n=[i].concat(n)}let o=e[0];typeof o=="function"&&(o=o(r,n),o===r)||i===void 0&&o==null||(o=ae(o),i===void 0||Te(r)&&Te(o)&&!Array.isArray(o)?di(r,o):Ce(t,i,o))}function ul(...[t,e]){const n=ae(t||{}),i=Array.isArray(n),r=pi(n);function o(...l){Un(()=>{i&&l.length===1?sl(n,l[0]):ee(n,l)})}return[r,o]}const cl={"renders heading 1 with 1 asterisk prefix":{input:"# Heading 1",output:"<h1 >Heading 1</h1>"},"renders heading 2 with 2 asterisks prefix":{input:"## Heading 2",output:"<h2 >Heading 2</h2>"},"renders heading 3 with 3 asterisks prefix":{input:"### Heading 3",output:"<h3 >Heading 3</h3>"},"renders heading 4 with 4 asterisks prefix":{input:"#### Heading 4",output:"<h4 >Heading 4</h4>"},"renders heading 5 with 5 asterisks prefix":{input:"##### Heading 5",output:"<h5 >Heading 5</h5>"},"renders heading 6 with 6 asterisks prefix":{input:"###### Heading 6",output:"<h6 >Heading 6</h6>"},"renders heading 1 with = underline":{input:`Heading 1
=========`,output:"<h1 >Heading 1</h1>"},"renders heading 2 with - underline":{input:`Heading 2
---------`,output:"<h2 >Heading 2</h2>"},"renders a simple paragraph":{input:"This is a paragraph.",output:"<p>This is a paragraph.</p>"},"renders multiple paragraphs":{input:`First paragraph.

Second paragraph.`,output:"<p>First paragraph.</p><p>Second paragraph.</p>"},"renders italic text with asterisks":{input:"*italic*",output:"<p><em>italic</em></p>"},"renders italic text with underscores":{input:"_italic_",output:"<p><em>italic</em></p>"},"renders bold text with double asterisks":{input:"**bold**",output:"<p><strong>bold</strong></p>"},"renders bold text with double underscores":{input:"__bold__",output:"<p><strong>bold</strong></p>"},"renders emphasis within paragraph":{input:"This is *italic* and **bold** text.",output:"<p>This is <em>italic</em> and <strong>bold</strong> text.</p>"},"renders bullet list with dashes":{input:`- Item 1
- Item 2
- Item 3`,output:"<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"renders bullet list with asterisks":{input:`* Item 1
* Item 2
* Item 3`,output:"<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"renders bullet list with plus signs":{input:`+ Item 1
+ Item 2
+ Item 3`,output:"<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"renders ordered list":{input:`1. First item
2. Second item
3. Third item`,output:"<ol ><li>First item</li><li>Second item</li><li>Third item</li></ol>"},"renders ordered list with different starting numbers":{input:`5. Fifth item
6. Sixth item
7. Seventh item`,output:"<ol ><li>Fifth item</li><li>Sixth item</li><li>Seventh item</li></ol>"},"renders inline code":{input:"`code`",output:"<p><code>code</code></p>"},"renders inline code within paragraph":{input:"Use `console.log()` to debug.",output:"<p>Use <code>console.log()</code> to debug.</p>"},"renders fenced code block":{input:"```\nconst x = 1;\nconsole.log(x);\n```",output:`<pre><code>const x = 1;
console.log(x);</code></pre>`},"renders fenced code block with language":{input:"```javascript\nconst x = 1;\nconsole.log(x);\n```",output:`<pre><code>const x = 1;
console.log(x);</code></pre>`},"renders indented code block":{input:`    const x = 1;
    console.log(x);`,output:`<pre><code>const x = 1;
console.log(x);</code></pre>`},"renders indented code block break":{input:`    const x = 1;
console.log(x);`,output:"<pre><code>const x = 1;</code></pre><p>console.log(x);</p>"},"renders inline link":{input:"[Example.com](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Example.com</a></p>'},"renders autolink":{input:"<https://example.com>",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></p>'},"renders image":{input:"![Alt text](image.jpg)",output:'<p><img src="image.jpg" alt="Alt text"></p>'},"renders blockquote":{input:"> This is a blockquote.",output:"<blockquote><p>This is a blockquote.</p></blockquote>"},"renders multi-line blockquote":{input:`> First line
> Second line`,output:`<blockquote><p>First line
Second line</p></blockquote>`},"renders multi-line blockquote with empty line":{input:`> First line
>
> Second line`,output:"<blockquote><p>First line</p><p>Second line</p></blockquote>"},"renders nested blockquotes":{input:`> This is a blockquote
> 
> > This is a nested blockquote
> > 
> > > And this is triple nested`,output:"<blockquote><p>This is a blockquote</p><blockquote><p>This is a nested blockquote</p><blockquote><p>And this is triple nested</p></blockquote></blockquote></blockquote>"},"renders blockquotes with emphasis and links":{input:`> This is a **bold** statement with [a link](https://example.com)
> 
> And this is *italic* text in the same blockquote`,output:'<blockquote><p>This is a <strong>bold</strong> statement with <a href="https://example.com" target="_blank" rel="noopener noreferrer">a link</a></p><p>And this is <em>italic</em> text in the same blockquote</p></blockquote>'},"renders blockquotes with lists":{input:`> This blockquote contains a list:
> 
> 1. First item
> 2. Second item
> 3. Third item`,output:"<blockquote><p>This blockquote contains a list:</p><ol ><li>First item</li><li>Second item</li><li>Third item</li></ol></blockquote>"},"renders horizontal rule with dashes":{input:"---",output:"<hr>"},"renders horizontal rule with asterisks":{input:"***",output:"<hr>"},"renders horizontal rule with underscores":{input:"___",output:"<hr>"},"handles backslash escapes":{input:"\\*not italic\\*",output:"<p>*not italic*</p>"},"handles escaped characters":{input:"\\# Not a header",output:"<p># Not a header</p>"},"handles HTML entities":{input:"&amp; &lt; &gt;",output:"<p>&amp; &lt; ></p>"},"handles special entities":{input:"&copy; &trade;",output:"<p>© ™</p>"},"handles soft line breaks":{input:`Line one
Line two`,output:`<p>Line one
Line two</p>`},"handles hard line breaks":{input:`Line one  
Line two`,output:"<p>Line one<br>Line two</p>"},"handles complex nested markdown":{input:`# Header

This is a **bold** paragraph with *italic* text and \`code\`.

- List item with [link](https://example.com)
- Another item

> Blockquote with **emphasis**`,output:'<h1 >Header</h1><p>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code>code</code>.</p><ul ><li>List item with <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a></li><li>Another item</li></ul><blockquote><p>Blockquote with <strong>emphasis</strong></p></blockquote>'},"renders deeply nested unordered lists":{input:`- Level 1
  - Level 2
    - Level 3
      - Level 4`,output:"<ul ><li>Level 1<ul ><li>Level 2<ul ><li>Level 3<ul ><li>Level 4</li></ul></li></ul></li></ul></li></ul>"},"renders mixed nested lists (ordered and unordered)":{input:`1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`,output:"<ol ><li>First ordered item<ul ><li>Nested unordered item</li><li>Another nested item</li></ul></li><li>Second ordered item<ol ><li>Nested ordered item</li><li>Another nested ordered item</li></ol></li></ol>"},"renders lists with multiple paragraphs in items":{input:`1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``,output:"<ol ><li><p>First item with multiple paragraphs.</p><p>This is the second paragraph of the first item.</p></li><li><p>Second item with code:</p><pre><code>console.log('Hello from list');</code></pre></li></ol>"},"renders bold within italic":{input:"*This is italic with **bold** inside*",output:"<p><em>This is italic with <strong>bold</strong> inside</em></p>"},"renders italic within bold":{input:"**This is bold with *italic* inside**",output:"<p><strong>This is bold with <em>italic</em> inside</strong></p>"},"renders links with emphasis":{input:"[**Bold link**](https://example.com) and [*italic link*](https://test.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><strong>Bold link</strong></a> and <a href="https://test.com" target="_blank" rel="noopener noreferrer"><em>italic link</em></a></p>'},"renders images within links":{input:"[![Alt text](image.jpg)](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><img src="image.jpg" alt="Alt text"></a></p>'},"renders links in lists":{input:`- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`,output:'<ul ><li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Link 1</a></li><li>Visit <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a> for search</li><li>Multiple <a href="https://a.com" target="_blank" rel="noopener noreferrer">links</a> in <a href="https://b.com" target="_blank" rel="noopener noreferrer">one</a> item</li></ul>'},"renders code within links":{input:"[Check out `console.log()`](https://developer.mozilla.org)",output:'<p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Check out <code>console.log()</code></a></p>'},"renders inline code with emphasis markers that should not be processed":{input:"`const **bold** = 'not bold';`",output:"<p><code>const **bold** = 'not bold';</code></p>"},"renders code blocks in lists":{input:"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n2. Run the application:\n   ```javascript\n   npm start\n   ```",output:"<ol ><li>Install dependencies:<pre><code>npm install</code></pre></li><li>Run the application:<pre><code>npm start</code></pre></li></ol>"},"renders code blocks in nested lists":{input:"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n   1. Run the application:\n      ```javascript\n      npm start\n      ```",output:"<ol ><li><p>Install dependencies:</p><pre><code>npm install</code></pre><ol ><li>Run the application:<pre><code>npm start</code></pre></li></ol></li></ol>"},"renders code blocks in blockquotes":{input:`> Here's an example:
> 
> \`\`\`javascript
> function hello() {
>   return "world";
> }
> \`\`\``,output:`<blockquote><p>Here's an example:</p><pre><code>function hello() {
  return "world";
}</code></pre></blockquote>`},"renders complex document with all features":{input:`# Main Title

This is a **complex document** with *various* elements.

## Features

1. **Lists** with nested items:
   - Unordered nested list
   - Another item with \`inline code\`

2. **Code blocks** with different languages:
   \`\`\`javascript
   function example() {
     return "Hello World";
   }
   \`\`\`

3. **Tables** with complex content

## Quotes and More

> This is a blockquote with **emphasis** and a [link](https://test.com).
> 
> > Nested quote with \`code\`

---

### Final Notes

Check out this image: ![Example](test.jpg)

And this autolink: <https://automatic.link>`,output:`<h1 >Main Title</h1><p>This is a <strong>complex document</strong> with <em>various</em> elements.</p><h2 >Features</h2><ol ><li><strong>Lists</strong> with nested items:<ul ><li>Unordered nested list</li><li>Another item with <code>inline code</code></li></ul></li><li><strong>Code blocks</strong> with different languages:<pre><code>function example() {
  return "Hello World";
}</code></pre></li><li><strong>Tables</strong> with complex content</li></ol><h2 >Quotes and More</h2><blockquote><p>This is a blockquote with <strong>emphasis</strong> and a <a href="https://test.com" target="_blank" rel="noopener noreferrer">link</a>.</p><blockquote><p>Nested quote with <code>code</code></p></blockquote></blockquote><hr><h3 >Final Notes</h3><p>Check out this image: <img src="test.jpg" alt="Example"></p><p>And this autolink: <a href="https://automatic.link" target="_blank" rel="noopener noreferrer">https://automatic.link</a></p>`},"renders edge case with consecutive emphasis":{input:"This has **bold** and **more bold** and *italic* and *more italic* text.",output:"<p>This has <strong>bold</strong> and <strong>more bold</strong> and <em>italic</em> and <em>more italic</em> text.</p>"},"renders emphasis across line breaks":{input:`This is **bold text that
continues on the next line**`,output:`<p>This is <strong>bold text that
continues on the next line</strong></p>`},"renders mixed list types in complex document":{input:`## Mixed Lists

1. Ordered item one
   - Nested unordered
   - Another nested
     1. Deep nested ordered
     2. Another deep ordered

2. Ordered item two
   > With a blockquote
   > 
   > And **emphasis**

3. Ordered item three with code:
   \`\`\`python
   print("Hello from Python")
   \`\`\``,output:'<h2 >Mixed Lists</h2><ol ><li>Ordered item one<ul ><li>Nested unordered</li><li>Another nested<ol ><li>Deep nested ordered</li><li>Another deep ordered</li></ol></li></ul></li><li>Ordered item two<blockquote><p>With a blockquote</p><p>And <strong>emphasis</strong></p></blockquote></li><li>Ordered item three with code:<pre><code>print("Hello from Python")</code></pre></li></ol>'},"handles unbalanced emphasis markers":{input:"This has **unbalanced bold and *mixed emphasis**",output:"<p>This has *<em>unbalanced bold and <em>mixed emphasis</em></em></p>"},"handles empty code blocks":{input:"```\n```",output:"<pre><code></code></pre>"},"handles code blocks without closing":{input:"```javascript\nconst x = 1;",output:"<pre><code>const x = 1;</code></pre>"},"handles consecutive same emphasis types correctly":{input:"**This is** nested **bold**",output:"<p><strong>This is</strong> nested <strong>bold</strong></p>"},"handles consecutive italic emphasis correctly":{input:"*This is* nested *italic*",output:"<p><em>This is</em> nested <em>italic</em></p>"},"handles triple asterisk emphasis correctly":{input:"***This is*** nested ***bold italic***",output:"<p><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></p>"},"handles proper separated emphasis correctly":{input:"**this** is **bold**",output:"<p><strong>this</strong> is <strong>bold</strong></p>"},"handles links without URLs":{input:"[Link text]()",output:'<p><a href="" target="_blank" rel="noopener noreferrer">Link text</a></p>'},"handles images without src":{input:"![Alt text]()",output:'<p><img src="" alt="Alt text"></p>'},"renders task lists with checkboxes":{input:`- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`,output:"<ul ><li>[x] Completed task</li><li>[ ] Incomplete task</li><li>[x] Another completed task</li></ul>"},"renders nested task lists":{input:`- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`,output:"<ul ><li>[x] Main task<ul ><li>[x] Subtask 1</li><li>[ ] Subtask 2<ul ><li>[x] Sub-subtask</li></ul></li></ul></li></ul>"},"handles large documents efficiently":{input:`## Section 1

This is paragraph 1 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 2

This is paragraph 2 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 3

This is paragraph 3 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 4

This is paragraph 4 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 5

This is paragraph 5 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 6

This is paragraph 6 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 7

This is paragraph 7 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 8

This is paragraph 8 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 9

This is paragraph 9 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 10

This is paragraph 10 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 11

This is paragraph 11 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 12

This is paragraph 12 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 13

This is paragraph 13 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 14

This is paragraph 14 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 15

This is paragraph 15 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 16

This is paragraph 16 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 17

This is paragraph 17 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 18

This is paragraph 18 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 19

This is paragraph 19 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 20

This is paragraph 20 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 21

This is paragraph 21 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 22

This is paragraph 22 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 23

This is paragraph 23 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 24

This is paragraph 24 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 25

This is paragraph 25 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 26

This is paragraph 26 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 27

This is paragraph 27 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 28

This is paragraph 28 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 29

This is paragraph 29 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 30

This is paragraph 30 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 31

This is paragraph 31 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 32

This is paragraph 32 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 33

This is paragraph 33 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 34

This is paragraph 34 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 35

This is paragraph 35 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 36

This is paragraph 36 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 37

This is paragraph 37 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 38

This is paragraph 38 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 39

This is paragraph 39 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 40

This is paragraph 40 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 41

This is paragraph 41 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 42

This is paragraph 42 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 43

This is paragraph 43 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 44

This is paragraph 44 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 45

This is paragraph 45 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 46

This is paragraph 46 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 47

This is paragraph 47 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 48

This is paragraph 48 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 49

This is paragraph 49 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 50

This is paragraph 50 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 51

This is paragraph 51 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 52

This is paragraph 52 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 53

This is paragraph 53 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 54

This is paragraph 54 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 55

This is paragraph 55 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 56

This is paragraph 56 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 57

This is paragraph 57 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 58

This is paragraph 58 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 59

This is paragraph 59 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 60

This is paragraph 60 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 61

This is paragraph 61 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 62

This is paragraph 62 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 63

This is paragraph 63 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 64

This is paragraph 64 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 65

This is paragraph 65 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 66

This is paragraph 66 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 67

This is paragraph 67 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 68

This is paragraph 68 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 69

This is paragraph 69 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 70

This is paragraph 70 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 71

This is paragraph 71 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 72

This is paragraph 72 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 73

This is paragraph 73 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 74

This is paragraph 74 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 75

This is paragraph 75 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 76

This is paragraph 76 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 77

This is paragraph 77 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 78

This is paragraph 78 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 79

This is paragraph 79 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 80

This is paragraph 80 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 81

This is paragraph 81 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 82

This is paragraph 82 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 83

This is paragraph 83 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 84

This is paragraph 84 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 85

This is paragraph 85 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 86

This is paragraph 86 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 87

This is paragraph 87 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 88

This is paragraph 88 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 89

This is paragraph 89 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 90

This is paragraph 90 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 91

This is paragraph 91 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 92

This is paragraph 92 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 93

This is paragraph 93 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 94

This is paragraph 94 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 95

This is paragraph 95 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 96

This is paragraph 96 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 97

This is paragraph 97 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 98

This is paragraph 98 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 99

This is paragraph 99 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 100

This is paragraph 100 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3
`,output:"<h2 >Section 1</h2><p>This is paragraph 1 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 2</h2><p>This is paragraph 2 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 3</h2><p>This is paragraph 3 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 4</h2><p>This is paragraph 4 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 5</h2><p>This is paragraph 5 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 6</h2><p>This is paragraph 6 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 7</h2><p>This is paragraph 7 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 8</h2><p>This is paragraph 8 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 9</h2><p>This is paragraph 9 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 10</h2><p>This is paragraph 10 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 11</h2><p>This is paragraph 11 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 12</h2><p>This is paragraph 12 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 13</h2><p>This is paragraph 13 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 14</h2><p>This is paragraph 14 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 15</h2><p>This is paragraph 15 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 16</h2><p>This is paragraph 16 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 17</h2><p>This is paragraph 17 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 18</h2><p>This is paragraph 18 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 19</h2><p>This is paragraph 19 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 20</h2><p>This is paragraph 20 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 21</h2><p>This is paragraph 21 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 22</h2><p>This is paragraph 22 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 23</h2><p>This is paragraph 23 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 24</h2><p>This is paragraph 24 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 25</h2><p>This is paragraph 25 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 26</h2><p>This is paragraph 26 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 27</h2><p>This is paragraph 27 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 28</h2><p>This is paragraph 28 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 29</h2><p>This is paragraph 29 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 30</h2><p>This is paragraph 30 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 31</h2><p>This is paragraph 31 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 32</h2><p>This is paragraph 32 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 33</h2><p>This is paragraph 33 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 34</h2><p>This is paragraph 34 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 35</h2><p>This is paragraph 35 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 36</h2><p>This is paragraph 36 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 37</h2><p>This is paragraph 37 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 38</h2><p>This is paragraph 38 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 39</h2><p>This is paragraph 39 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 40</h2><p>This is paragraph 40 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 41</h2><p>This is paragraph 41 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 42</h2><p>This is paragraph 42 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 43</h2><p>This is paragraph 43 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 44</h2><p>This is paragraph 44 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 45</h2><p>This is paragraph 45 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 46</h2><p>This is paragraph 46 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 47</h2><p>This is paragraph 47 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 48</h2><p>This is paragraph 48 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 49</h2><p>This is paragraph 49 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 50</h2><p>This is paragraph 50 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 51</h2><p>This is paragraph 51 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 52</h2><p>This is paragraph 52 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 53</h2><p>This is paragraph 53 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 54</h2><p>This is paragraph 54 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 55</h2><p>This is paragraph 55 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 56</h2><p>This is paragraph 56 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 57</h2><p>This is paragraph 57 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 58</h2><p>This is paragraph 58 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 59</h2><p>This is paragraph 59 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 60</h2><p>This is paragraph 60 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 61</h2><p>This is paragraph 61 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 62</h2><p>This is paragraph 62 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 63</h2><p>This is paragraph 63 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 64</h2><p>This is paragraph 64 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 65</h2><p>This is paragraph 65 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 66</h2><p>This is paragraph 66 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 67</h2><p>This is paragraph 67 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 68</h2><p>This is paragraph 68 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 69</h2><p>This is paragraph 69 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 70</h2><p>This is paragraph 70 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 71</h2><p>This is paragraph 71 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 72</h2><p>This is paragraph 72 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 73</h2><p>This is paragraph 73 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 74</h2><p>This is paragraph 74 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 75</h2><p>This is paragraph 75 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 76</h2><p>This is paragraph 76 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 77</h2><p>This is paragraph 77 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 78</h2><p>This is paragraph 78 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 79</h2><p>This is paragraph 79 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 80</h2><p>This is paragraph 80 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 81</h2><p>This is paragraph 81 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 82</h2><p>This is paragraph 82 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 83</h2><p>This is paragraph 83 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 84</h2><p>This is paragraph 84 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 85</h2><p>This is paragraph 85 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 86</h2><p>This is paragraph 86 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 87</h2><p>This is paragraph 87 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 88</h2><p>This is paragraph 88 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 89</h2><p>This is paragraph 89 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 90</h2><p>This is paragraph 90 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 91</h2><p>This is paragraph 91 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 92</h2><p>This is paragraph 92 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 93</h2><p>This is paragraph 93 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 94</h2><p>This is paragraph 94 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 95</h2><p>This is paragraph 95 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 96</h2><p>This is paragraph 96 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 97</h2><p>This is paragraph 97 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 98</h2><p>This is paragraph 98 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 99</h2><p>This is paragraph 99 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 100</h2><p>This is paragraph 100 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"allows custom paragraph renderer":{input:"Test paragraph",output:"<p>Test paragraph</p>"},"falls back to default renderer when custom not provided":{input:"# Header",output:"<h1 >Header</h1>"},"allows custom emphasis renderer":{input:"This is *custom italic* text",output:"<p>This is <em>custom italic</em> text</p>"},"allows custom link renderer with additional attributes":{input:"[Original Link](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Original Link</a></p>'},"allows chaining of custom renderers":{input:"**Bold** and *italic* text",output:"<p><strong>Bold</strong> and <em>italic</em> text</p>"},"renders tables with emphasis and links":{input:`| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`,output:'<table><thead><tr><th >Name</th><th >Description</th><th >Link</th></tr></thead><tbody><tr><td ><strong>Bold Name</strong></td><td ><em>Italic description</em></td><td ><a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a></td></tr><tr><td ><del>Deprecated</del></td><td ><code>code example</code></td><td ><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders tables with images":{input:`| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`,output:'<table><thead><tr><th >Icon</th><th >Name</th><th >Description</th></tr></thead><tbody><tr><td ><img src="icon.png" alt="Icon"></td><td >Project</td><td >Main project</td></tr><tr><td ><img src="logo.svg" alt="Logo"></td><td >Brand</td><td >Company brand</td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"handles empty table cells":{input:`| Col1 | Col2 | Col3 |
|------|------|------|
| Data || More |
||Data ||`,output:"<table><thead><tr><th >Col1</th><th >Col2</th><th >Col3</th></tr></thead><tbody><tr><td >Data</td><td ></td><td >More</td></tr><tr><td ></td><td >Data</td><td ></td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders simple table":{input:`| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`,output:"<table><thead><tr><th >Name</th><th >Age</th></tr></thead><tbody><tr><td >John</td><td >30</td></tr><tr><td >Jane</td><td >25</td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders table with alignment":{input:`| Left | Center | Right |
|:-----|:------:|------:|
| L1   |   C1   |    R1 |`,output:"<table><thead><tr><th >Left</th><th >Center</th><th >Right</th></tr></thead><tbody><tr><td >L1</td><td >C1</td><td >R1</td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders standalone table correctly":{input:`| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`,output:"<table><thead><tr><th >Name</th><th >Age</th></tr></thead><tbody><tr><td >John</td><td >30</td></tr><tr><td >Jane</td><td >25</td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough text":{input:"~~strikethrough~~",output:"<p><del>strikethrough</del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough within paragraph":{input:"This is ~~deleted~~ text.",output:"<p>This is <del>deleted</del> text.</p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough with nested emphasis":{input:"~~This is deleted with **bold** and *italic* text~~",output:"<p><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders complex nested emphasis combinations":{input:"***This is bold and italic*** with ~~strikethrough **and bold**~~",output:"<p><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]}};function kn(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(e);for(;r!==-1;)i++,r=n.indexOf(e,r+e.length);return i}const it=zt(/[A-Za-z]/),ot=zt(/[\dA-Za-z]/),hl=zt(/[#-'*+\--9=?A-Z^-~]/);function Pe(t){return t!==null&&(t<32||t===127)}const Ze=zt(/\d/),pl=zt(/[\dA-Fa-f]/),ml=zt(/[!-/:-@[-`{-~]/);function _(t){return t!==null&&t<-2}function Y(t){return t!==null&&(t<0||t===32)}function M(t){return t===-2||t===-1||t===32}const ze=zt(/\p{P}|\p{S}/u),Bt=zt(/\s/);function zt(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function dl(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const cn=function(t){if(t==null)return xl;if(typeof t=="function")return Oe(t);if(typeof t=="object")return Array.isArray(t)?fl(t):gl(t);if(typeof t=="string")return bl(t);throw new Error("Expected function, string, or object as test")};function fl(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=cn(t[n]);return Oe(i);function i(...r){let o=-1;for(;++o<e.length;)if(e[o].apply(this,r))return!0;return!1}}function gl(t){const e=t;return Oe(n);function n(i){const r=i;let o;for(o in t)if(r[o]!==e[o])return!1;return!0}}function bl(t){return Oe(e);function e(n){return n&&n.type===t}}function Oe(t){return e;function e(n,i,r){return!!(Il(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function xl(){return!0}function Il(t){return t!==null&&typeof t=="object"&&"type"in t}const fi=[],wl=!0,Sn=!1,yl="skip";function kl(t,e,n,i){let r;r=e;const o=cn(r),l=1;a(t,void 0,[])();function a(s,u,h){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=fi,g,y,S;if(o(s,u,h[h.length-1]||void 0)&&(p=Sl(n(s,h)),p[0]===Sn))return p;if("children"in s&&s.children){const w=s;if(w.children&&p[0]!==yl)for(y=-1+l,S=h.concat(w);y>-1&&y<w.children.length;){const A=w.children[y];if(g=a(A,y,S)(),g[0]===Sn)return g;y=typeof g[1]=="number"?g[1]:y+l}}return p}}}function Sl(t){return Array.isArray(t)?t:typeof t=="number"?[wl,t]:t==null?fi:[t]}function Tl(t,e,n){const r=cn((n||{}).ignore||[]),o=Al(e);let l=-1;for(;++l<o.length;)kl(t,"text",a);function a(u,h){let c=-1,d;for(;++c<h.length;){const p=h[c],g=d?d.children:void 0;if(r(p,g?g.indexOf(p):void 0,d))return;d=p}if(d)return s(u,h)}function s(u,h){const c=h[h.length-1],d=o[l][0],p=o[l][1];let g=0;const S=c.children.indexOf(u);let w=!1,A=[];d.lastIndex=0;let k=d.exec(u.value);for(;k;){const P=k.index,v={index:k.index,input:k.input,stack:[...h,u]};let x=p(...k,v);if(typeof x=="string"&&(x=x.length>0?{type:"text",value:x}:void 0),x===!1?d.lastIndex=P+1:(g!==P&&A.push({type:"text",value:u.value.slice(g,P)}),Array.isArray(x)?A.push(...x):x&&A.push(x),g=P+k[0].length,w=!0),!d.global)break;k=d.exec(u.value)}return w?(g<u.value.length&&A.push({type:"text",value:u.value.slice(g)}),c.children.splice(S,1,...A)):A=[u],S+A.length}}function Al(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let i=-1;for(;++i<n.length;){const r=n[i];e.push([Cl(r[0]),Pl(r[1])])}return e}function Cl(t){return typeof t=="string"?new RegExp(dl(t),"g"):t}function Pl(t){return typeof t=="function"?t:function(){return t}}function El(){return{transforms:[Ol],enter:{literalAutolink:Fl,literalAutolinkEmail:je,literalAutolinkHttp:je,literalAutolinkWww:je},exit:{literalAutolink:zl,literalAutolinkEmail:vl,literalAutolinkHttp:Ll,literalAutolinkWww:_l}}}function Fl(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function je(t){this.config.enter.autolinkProtocol.call(this,t)}function Ll(t){this.config.exit.autolinkProtocol.call(this,t)}function _l(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function vl(t){this.config.exit.autolinkEmail.call(this,t)}function zl(t){this.exit(t)}function Ol(t){Tl(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Dl],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Ml]],{ignore:["link","linkReference"]})}function Dl(t,e,n,i,r){let o="";if(!gi(r)||(/^w/i.test(e)&&(n=e+n,e="",o="http://"),!Rl(n)))return!1;const l=$l(n+i);if(!l[0])return!1;const a={type:"link",title:null,url:o+e+l[0],children:[{type:"text",value:e+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function Ml(t,e,n,i){return!gi(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function Rl(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function $l(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],i=n.indexOf(")");const r=kn(t,"(");let o=kn(t,")");for(;i!==-1&&r>o;)t+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),o++;return[t,n]}function gi(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||Bt(n)||ze(n))&&(!e||n!==47)}function bt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Nl(){this.buffer()}function Bl(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function jl(){this.buffer()}function ql(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function Hl(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=bt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function Vl(t){this.exit(t)}function Ul(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=bt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function Wl(t){this.exit(t)}function Ql(){return{enter:{gfmFootnoteCallString:Nl,gfmFootnoteCall:Bl,gfmFootnoteDefinitionLabelString:jl,gfmFootnoteDefinition:ql},exit:{gfmFootnoteCallString:Hl,gfmFootnoteCall:Vl,gfmFootnoteDefinitionLabelString:Ul,gfmFootnoteDefinition:Wl}}}function Gl(){return{canContainEols:["delete"],enter:{strikethrough:Kl},exit:{strikethrough:Yl}}}function Kl(t){this.enter({type:"delete",children:[]},t)}function Yl(t){this.exit(t)}function Ee(t){if(t===null||Y(t)||Bt(t))return 1;if(ze(t))return 2}const Jl={};function Xl(t,e){const n=Jl,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return bi(t,i,r)}function bi(t,e,n){if(Zl(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Tn(t.children,e,n)}return Array.isArray(t)?Tn(t,e,n):""}function Tn(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=bi(t[r],e,n);return i.join("")}function Zl(t){return!!(t&&typeof t=="object")}const An=document.createElement("i");function hn(t){const e="&"+t+";";An.innerHTML=e;const n=An.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function xi(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}const to=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function eo(t){return t.replace(to,no)}function no(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return xi(n.slice(o?2:1),o?16:10)}return hn(n)||t}function io(){return{enter:{table:ro,tableData:Cn,tableHeader:Cn,tableRow:oo},exit:{codeText:ao,table:lo,tableData:qe,tableHeader:qe,tableRow:qe}}}function ro(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function lo(t){this.exit(t),this.data.inTable=void 0}function oo(t){this.enter({type:"tableRow",children:[]},t)}function qe(t){this.exit(t)}function Cn(t){this.enter({type:"tableCell",children:[]},t)}function ao(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,so));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function so(t,e){return e==="|"?e:t}function uo(){return{exit:{taskListCheckValueChecked:Pn,taskListCheckValueUnchecked:Pn,paragraph:co}}}function Pn(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function co(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=e.children;let o=-1,l;for(;++o<r.length;){const a=r[o];if(a.type==="paragraph"){l=a;break}}l===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(t)}function ho(){return[El(),Ql(),Gl(),io(),uo()]}function ct(t,e,n,i){const r=t.length;let o=0,l;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)l=Array.from(i),l.unshift(e,n),t.splice(...l);else for(n&&t.splice(e,n);o<i.length;)l=i.slice(o,o+1e4),l.unshift(e,0),t.splice(...l),o+=1e4,e+=1e4}function pt(t,e){return t.length>0?(ct(t,t.length,0,e),t):e}const En={}.hasOwnProperty;function Ii(t){const e={};let n=-1;for(;++n<t.length;)po(e,t[n]);return e}function po(t,e){let n;for(n in e){const r=(En.call(t,n)?t[n]:void 0)||(t[n]={}),o=e[n];let l;if(o)for(l in o){En.call(r,l)||(r[l]=[]);const a=o[l];mo(r[l],Array.isArray(a)?a:a?[a]:[])}}}function mo(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);ct(t,0,0,i)}const fo={tokenize:yo,partial:!0},wi={tokenize:ko,partial:!0},yi={tokenize:So,partial:!0},ki={tokenize:To,partial:!0},go={tokenize:Ao,partial:!0},Si={name:"wwwAutolink",tokenize:Io,previous:Ai},Ti={name:"protocolAutolink",tokenize:wo,previous:Ci},Ft={name:"emailAutolink",tokenize:xo,previous:Pi},St={};function bo(){return{text:St}}let Mt=48;for(;Mt<123;)St[Mt]=Ft,Mt++,Mt===58?Mt=65:Mt===91&&(Mt=97);St[43]=Ft;St[45]=Ft;St[46]=Ft;St[95]=Ft;St[72]=[Ft,Ti];St[104]=[Ft,Ti];St[87]=[Ft,Si];St[119]=[Ft,Si];function xo(t,e,n){const i=this;let r,o;return l;function l(c){return!tn(c)||!Pi.call(i,i.previous)||pn(i.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),a(c))}function a(c){return tn(c)?(t.consume(c),a):c===64?(t.consume(c),s):n(c)}function s(c){return c===46?t.check(go,h,u)(c):c===45||c===95||ot(c)?(o=!0,t.consume(c),s):h(c)}function u(c){return t.consume(c),r=!0,s}function h(c){return o&&r&&it(i.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function Io(t,e,n){const i=this;return r;function r(l){return l!==87&&l!==119||!Ai.call(i,i.previous)||pn(i.events)?n(l):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(fo,t.attempt(wi,t.attempt(yi,o),n),n)(l))}function o(l){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(l)}}function wo(t,e,n){const i=this;let r="",o=!1;return l;function l(c){return(c===72||c===104)&&Ci.call(i,i.previous)&&!pn(i.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),r+=String.fromCodePoint(c),t.consume(c),a):n(c)}function a(c){if(it(c)&&r.length<5)return r+=String.fromCodePoint(c),t.consume(c),a;if(c===58){const d=r.toLowerCase();if(d==="http"||d==="https")return t.consume(c),s}return n(c)}function s(c){return c===47?(t.consume(c),o?u:(o=!0,s)):n(c)}function u(c){return c===null||Pe(c)||Y(c)||Bt(c)||ze(c)?n(c):t.attempt(wi,t.attempt(yi,h),n)(c)}function h(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function yo(t,e,n){let i=0;return r;function r(l){return(l===87||l===119)&&i<3?(i++,t.consume(l),r):l===46&&i===3?(t.consume(l),o):n(l)}function o(l){return l===null?n(l):e(l)}}function ko(t,e,n){let i,r,o;return l;function l(u){return u===46||u===95?t.check(ki,s,a)(u):u===null||Y(u)||Bt(u)||u!==45&&ze(u)?s(u):(o=!0,t.consume(u),l)}function a(u){return u===95?i=!0:(r=i,i=void 0),t.consume(u),l}function s(u){return r||i||!o?n(u):e(u)}}function So(t,e){let n=0,i=0;return r;function r(l){return l===40?(n++,t.consume(l),r):l===41&&i<n?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?t.check(ki,e,o)(l):l===null||Y(l)||Bt(l)?e(l):(t.consume(l),r)}function o(l){return l===41&&i++,t.consume(l),r}}function To(t,e,n){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(t.consume(a),i):a===38?(t.consume(a),o):a===93?(t.consume(a),r):a===60||a===null||Y(a)||Bt(a)?e(a):n(a)}function r(a){return a===null||a===40||a===91||Y(a)||Bt(a)?e(a):i(a)}function o(a){return it(a)?l(a):n(a)}function l(a){return a===59?(t.consume(a),i):it(a)?(t.consume(a),l):n(a)}}function Ao(t,e,n){return i;function i(o){return t.consume(o),r}function r(o){return ot(o)?n(o):e(o)}}function Ai(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Y(t)}function Ci(t){return!it(t)}function Pi(t){return!(t===47||tn(t))}function tn(t){return t===43||t===45||t===46||t===95||ot(t)}function pn(t){let e=t.length,n=!1;for(;e--;){const i=t[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}function De(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const o=t[r].resolveAll;o&&!i.includes(o)&&(e=o(e,n),i.push(o))}return e}const en={name:"attention",resolveAll:Co,tokenize:Po};function Co(t,e){let n=-1,i,r,o,l,a,s,u,h;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;s=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const c={...t[i][1].end},d={...t[n][1].start};Fn(c,-s),Fn(d,s),l={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...t[i][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:d},o={type:s>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:s>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},t[i][1].end={...l.start},t[n][1].start={...a.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=pt(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=pt(u,[["enter",r,e],["enter",l,e],["exit",l,e],["enter",o,e]]),u=pt(u,De(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=pt(u,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(h=2,u=pt(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):h=0,ct(t,i-1,n-i+3,u),n=i+u.length-h-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function Po(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Ee(i);let o;return l;function l(s){return o=s,t.enter("attentionSequence"),a(s)}function a(s){if(s===o)return t.consume(s),a;const u=t.exit("attentionSequence"),h=Ee(s),c=!h||h===2&&r||n.includes(s),d=!r||r===2&&h||n.includes(i);return u._open=!!(o===42?c:c&&(r||!d)),u._close=!!(o===42?d:d&&(h||!c)),e(s)}}function Fn(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const Eo={name:"autolink",tokenize:Fo};function Fo(t,e,n){let i=0;return r;function r(p){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),o}function o(p){return it(p)?(t.consume(p),l):p===64?n(p):u(p)}function l(p){return p===43||p===45||p===46||ot(p)?(i=1,a(p)):u(p)}function a(p){return p===58?(t.consume(p),i=0,s):(p===43||p===45||p===46||ot(p))&&i++<32?(t.consume(p),a):(i=0,u(p))}function s(p){return p===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):p===null||p===32||p===60||Pe(p)?n(p):(t.consume(p),s)}function u(p){return p===64?(t.consume(p),h):hl(p)?(t.consume(p),u):n(p)}function h(p){return ot(p)?c(p):n(p)}function c(p){return p===46?(t.consume(p),i=0,h):p===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):d(p)}function d(p){if((p===45||ot(p))&&i++<63){const g=p===45?d:c;return t.consume(p),g}return n(p)}}function B(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(s){return M(s)?(t.enter(n),a(s)):e(s)}function a(s){return M(s)&&o++<r?(t.consume(s),a):(t.exit(n),e(s))}}const he={partial:!0,tokenize:Lo};function Lo(t,e,n){return i;function i(o){return M(o)?B(t,r,"linePrefix")(o):r(o)}function r(o){return o===null||_(o)?e(o):n(o)}}const Ei={continuation:{tokenize:vo},exit:zo,name:"blockQuote",tokenize:_o};function _o(t,e,n){const i=this;return r;function r(l){if(l===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),o}return n(l)}function o(l){return M(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(l))}}function vo(t,e,n){const i=this;return r;function r(l){return M(l)?B(t,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return t.attempt(Ei,e,n)(l)}}function zo(t){t.exit("blockQuote")}const Fi={name:"characterEscape",tokenize:Oo};function Oo(t,e,n){return i;function i(o){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(o),t.exit("escapeMarker"),r}function r(o){return ml(o)?(t.enter("characterEscapeValue"),t.consume(o),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(o)}}const Li={name:"characterReference",tokenize:Do};function Do(t,e,n){const i=this;let r=0,o,l;return a;function a(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),s}function s(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),o=31,l=ot,h(c))}function u(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),o=6,l=pl,h):(t.enter("characterReferenceValue"),o=7,l=Ze,h(c))}function h(c){if(c===59&&r){const d=t.exit("characterReferenceValue");return l===ot&&!hn(i.sliceSerialize(d))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return l(c)&&r++<o?(t.consume(c),h):n(c)}}const Ln={partial:!0,tokenize:Ro},_n={concrete:!0,name:"codeFenced",tokenize:Mo};function Mo(t,e,n){const i=this,r={partial:!0,tokenize:v};let o=0,l=0,a;return s;function s(x){return u(x)}function u(x){const D=i.events[i.events.length-1];return o=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,a=x,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),h(x)}function h(x){return x===a?(l++,t.consume(x),h):l<3?n(x):(t.exit("codeFencedFenceSequence"),M(x)?B(t,c,"whitespace")(x):c(x))}function c(x){return x===null||_(x)?(t.exit("codeFencedFence"),i.interrupt?e(x):t.check(Ln,y,P)(x)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),d(x))}function d(x){return x===null||_(x)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(x)):M(x)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),B(t,p,"whitespace")(x)):x===96&&x===a?n(x):(t.consume(x),d)}function p(x){return x===null||_(x)?c(x):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||_(x)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(x)):x===96&&x===a?n(x):(t.consume(x),g)}function y(x){return t.attempt(r,P,S)(x)}function S(x){return t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),w}function w(x){return o>0&&M(x)?B(t,A,"linePrefix",o+1)(x):A(x)}function A(x){return x===null||_(x)?t.check(Ln,y,P)(x):(t.enter("codeFlowValue"),k(x))}function k(x){return x===null||_(x)?(t.exit("codeFlowValue"),A(x)):(t.consume(x),k)}function P(x){return t.exit("codeFenced"),e(x)}function v(x,D,j){let R=0;return b;function b(E){return x.enter("lineEnding"),x.consume(E),x.exit("lineEnding"),F}function F(E){return x.enter("codeFencedFence"),M(E)?B(x,C,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):C(E)}function C(E){return E===a?(x.enter("codeFencedFenceSequence"),q(E)):j(E)}function q(E){return E===a?(R++,x.consume(E),q):R>=l?(x.exit("codeFencedFenceSequence"),M(E)?B(x,L,"whitespace")(E):L(E)):j(E)}function L(E){return E===null||_(E)?(x.exit("codeFencedFence"),D(E)):j(E)}}}function Ro(t,e,n){const i=this;return r;function r(l){return l===null?n(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),o)}function o(l){return i.parser.lazy[i.now().line]?n(l):e(l)}}const He={name:"codeIndented",tokenize:No},$o={partial:!0,tokenize:Bo};function No(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),B(t,o,"linePrefix",5)(u)}function o(u){const h=i.events[i.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):_(u)?t.attempt($o,l,s)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||_(u)?(t.exit("codeFlowValue"),l(u)):(t.consume(u),a)}function s(u){return t.exit("codeIndented"),e(u)}}function Bo(t,e,n){const i=this;return r;function r(l){return i.parser.lazy[i.now().line]?n(l):_(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),r):B(t,o,"linePrefix",5)(l)}function o(l){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):_(l)?r(l):n(l)}}const jo={name:"codeText",previous:Ho,resolve:qo,tokenize:Vo};function qo(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function Ho(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Vo(t,e,n){let i=0,r,o;return l;function l(c){return t.enter("codeText"),t.enter("codeTextSequence"),a(c)}function a(c){return c===96?(t.consume(c),i++,a):(t.exit("codeTextSequence"),s(c))}function s(c){return c===null?n(c):c===32?(t.enter("space"),t.consume(c),t.exit("space"),s):c===96?(o=t.enter("codeTextSequence"),r=0,h(c)):_(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s):(t.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||_(c)?(t.exit("codeTextData"),s(c)):(t.consume(c),u)}function h(c){return c===96?(t.consume(c),r++,h):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(c)):(o.type="codeTextData",u(c))}}class Uo{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&te(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),te(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),te(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);te(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);te(this.left,n.reverse())}}}function te(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function _i(t){const e={};let n=-1,i,r,o,l,a,s,u;const h=new Uo(t);for(;++n<h.length;){for(;n in e;)n=e[n];if(i=h.get(n),n&&i[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(s=i[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,Wo(h,n)),n=e[n],u=!0);else if(i[1]._container){for(o=n,r=void 0;o--;)if(l=h.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(r&&(h.get(r)[1].type="lineEndingBlank"),l[1].type="lineEnding",r=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;r&&(i[1].end={...h.get(r)[1].start},a=h.slice(r,n),a.unshift(i),h.splice(r,n-r+1,a))}}return ct(t,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function Wo(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const o=[];let l=n._tokenizer;l||(l=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,s=[],u={};let h,c,d=-1,p=n,g=0,y=0;const S=[y];for(;p;){for(;t.get(++r)[1]!==p;);o.push(r),p._tokenizer||(h=i.sliceStream(p),p.next||h.push(null),c&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(y=d+1,S.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),d=S.length;d--;){const w=a.slice(S[d],S[d+1]),A=o.pop();s.push([A,A+w.length-1]),t.splice(A,2,w)}for(s.reverse(),d=-1;++d<s.length;)u[g+s[d][0]]=g+s[d][1],g+=s[d][1]-s[d][0]-1;return u}const Qo={resolve:Ko,tokenize:Yo},Go={partial:!0,tokenize:Jo};function Ko(t){return _i(t),t}function Yo(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):_(a)?t.check(Go,l,o)(a):(t.consume(a),r)}function o(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function l(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function Jo(t,e,n){const i=this;return r;function r(l){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),B(t,o,"linePrefix")}function o(l){if(l===null||_(l))return n(l);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):t.interrupt(i.parser.constructs.flow,n,e)(l)}}function vi(t,e,n,i,r,o,l,a,s){const u=s||Number.POSITIVE_INFINITY;let h=0;return c;function c(w){return w===60?(t.enter(i),t.enter(r),t.enter(o),t.consume(w),t.exit(o),d):w===null||w===32||w===41||Pe(w)?n(w):(t.enter(i),t.enter(l),t.enter(a),t.enter("chunkString",{contentType:"string"}),y(w))}function d(w){return w===62?(t.enter(o),t.consume(w),t.exit(o),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===62?(t.exit("chunkString"),t.exit(a),d(w)):w===null||w===60||_(w)?n(w):(t.consume(w),w===92?g:p)}function g(w){return w===60||w===62||w===92?(t.consume(w),p):p(w)}function y(w){return!h&&(w===null||w===41||Y(w))?(t.exit("chunkString"),t.exit(a),t.exit(l),t.exit(i),e(w)):h<u&&w===40?(t.consume(w),h++,y):w===41?(t.consume(w),h--,y):w===null||w===32||w===40||Pe(w)?n(w):(t.consume(w),w===92?S:y)}function S(w){return w===40||w===41||w===92?(t.consume(w),y):y(w)}}function zi(t,e,n,i,r,o){const l=this;let a=0,s;return u;function u(p){return t.enter(i),t.enter(r),t.consume(p),t.exit(r),t.enter(o),h}function h(p){return a>999||p===null||p===91||p===93&&!s||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(t.exit(o),t.enter(r),t.consume(p),t.exit(r),t.exit(i),e):_(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),h):(t.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||_(p)||a++>999?(t.exit("chunkString"),h(p)):(t.consume(p),s||(s=!M(p)),p===92?d:c)}function d(p){return p===91||p===92||p===93?(t.consume(p),a++,c):c(p)}}function Oi(t,e,n,i,r,o){let l;return a;function a(d){return d===34||d===39||d===40?(t.enter(i),t.enter(r),t.consume(d),t.exit(r),l=d===40?41:d,s):n(d)}function s(d){return d===l?(t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):(t.enter(o),u(d))}function u(d){return d===l?(t.exit(o),s(l)):d===null?n(d):_(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),B(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===l||d===null||_(d)?(t.exit("chunkString"),u(d)):(t.consume(d),d===92?c:h)}function c(d){return d===l||d===92?(t.consume(d),h):h(d)}}function le(t,e){let n;return i;function i(r){return _(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):M(r)?B(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const Xo={name:"definition",tokenize:ta},Zo={partial:!0,tokenize:ea};function ta(t,e,n){const i=this;let r;return o;function o(p){return t.enter("definition"),l(p)}function l(p){return zi.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=bt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(t.enter("definitionMarker"),t.consume(p),t.exit("definitionMarker"),s):n(p)}function s(p){return Y(p)?le(t,u)(p):u(p)}function u(p){return vi(t,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return t.attempt(Zo,c,c)(p)}function c(p){return M(p)?B(t,d,"whitespace")(p):d(p)}function d(p){return p===null||_(p)?(t.exit("definition"),i.parser.defined.push(r),e(p)):n(p)}}function ea(t,e,n){return i;function i(a){return Y(a)?le(t,r)(a):n(a)}function r(a){return Oi(t,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return M(a)?B(t,l,"whitespace")(a):l(a)}function l(a){return a===null||_(a)?e(a):n(a)}}const na={name:"hardBreakEscape",tokenize:ia};function ia(t,e,n){return i;function i(o){return t.enter("hardBreakEscape"),t.consume(o),r}function r(o){return _(o)?(t.exit("hardBreakEscape"),e(o)):n(o)}}const ra={name:"headingAtx",resolve:la,tokenize:oa};function la(t,e){let n=t.length-2,i=3,r,o;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},o={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},ct(t,i,n-i+1,[["enter",r,e],["enter",o,e],["exit",o,e],["exit",r,e]])),t}function oa(t,e,n){let i=0;return r;function r(h){return t.enter("atxHeading"),o(h)}function o(h){return t.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&i++<6?(t.consume(h),l):h===null||Y(h)?(t.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(t.enter("atxHeadingSequence"),s(h)):h===null||_(h)?(t.exit("atxHeading"),e(h)):M(h)?B(t,a,"whitespace")(h):(t.enter("atxHeadingText"),u(h))}function s(h){return h===35?(t.consume(h),s):(t.exit("atxHeadingSequence"),a(h))}function u(h){return h===null||h===35||Y(h)?(t.exit("atxHeadingText"),a(h)):(t.consume(h),u)}}const aa=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],vn=["pre","script","style","textarea"],sa={concrete:!0,name:"htmlFlow",resolveTo:ha,tokenize:pa},ua={partial:!0,tokenize:da},ca={partial:!0,tokenize:ma};function ha(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function pa(t,e,n){const i=this;let r,o,l,a,s;return u;function u(f){return h(f)}function h(f){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(f),c}function c(f){return f===33?(t.consume(f),d):f===47?(t.consume(f),o=!0,y):f===63?(t.consume(f),r=3,i.interrupt?e:m):it(f)?(t.consume(f),l=String.fromCharCode(f),S):n(f)}function d(f){return f===45?(t.consume(f),r=2,p):f===91?(t.consume(f),r=5,a=0,g):it(f)?(t.consume(f),r=4,i.interrupt?e:m):n(f)}function p(f){return f===45?(t.consume(f),i.interrupt?e:m):n(f)}function g(f){const rt="CDATA[";return f===rt.charCodeAt(a++)?(t.consume(f),a===rt.length?i.interrupt?e:C:g):n(f)}function y(f){return it(f)?(t.consume(f),l=String.fromCharCode(f),S):n(f)}function S(f){if(f===null||f===47||f===62||Y(f)){const rt=f===47,It=l.toLowerCase();return!rt&&!o&&vn.includes(It)?(r=1,i.interrupt?e(f):C(f)):aa.includes(l.toLowerCase())?(r=6,rt?(t.consume(f),w):i.interrupt?e(f):C(f)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(f):o?A(f):k(f))}return f===45||ot(f)?(t.consume(f),l+=String.fromCharCode(f),S):n(f)}function w(f){return f===62?(t.consume(f),i.interrupt?e:C):n(f)}function A(f){return M(f)?(t.consume(f),A):b(f)}function k(f){return f===47?(t.consume(f),b):f===58||f===95||it(f)?(t.consume(f),P):M(f)?(t.consume(f),k):b(f)}function P(f){return f===45||f===46||f===58||f===95||ot(f)?(t.consume(f),P):v(f)}function v(f){return f===61?(t.consume(f),x):M(f)?(t.consume(f),v):k(f)}function x(f){return f===null||f===60||f===61||f===62||f===96?n(f):f===34||f===39?(t.consume(f),s=f,D):M(f)?(t.consume(f),x):j(f)}function D(f){return f===s?(t.consume(f),s=null,R):f===null||_(f)?n(f):(t.consume(f),D)}function j(f){return f===null||f===34||f===39||f===47||f===60||f===61||f===62||f===96||Y(f)?v(f):(t.consume(f),j)}function R(f){return f===47||f===62||M(f)?k(f):n(f)}function b(f){return f===62?(t.consume(f),F):n(f)}function F(f){return f===null||_(f)?C(f):M(f)?(t.consume(f),F):n(f)}function C(f){return f===45&&r===2?(t.consume(f),N):f===60&&r===1?(t.consume(f),G):f===62&&r===4?(t.consume(f),W):f===63&&r===3?(t.consume(f),m):f===93&&r===5?(t.consume(f),et):_(f)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(ua,J,q)(f)):f===null||_(f)?(t.exit("htmlFlowData"),q(f)):(t.consume(f),C)}function q(f){return t.check(ca,L,J)(f)}function L(f){return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),E}function E(f){return f===null||_(f)?q(f):(t.enter("htmlFlowData"),C(f))}function N(f){return f===45?(t.consume(f),m):C(f)}function G(f){return f===47?(t.consume(f),l="",V):C(f)}function V(f){if(f===62){const rt=l.toLowerCase();return vn.includes(rt)?(t.consume(f),W):C(f)}return it(f)&&l.length<8?(t.consume(f),l+=String.fromCharCode(f),V):C(f)}function et(f){return f===93?(t.consume(f),m):C(f)}function m(f){return f===62?(t.consume(f),W):f===45&&r===2?(t.consume(f),m):C(f)}function W(f){return f===null||_(f)?(t.exit("htmlFlowData"),J(f)):(t.consume(f),W)}function J(f){return t.exit("htmlFlow"),e(f)}}function ma(t,e,n){const i=this;return r;function r(l){return _(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),o):n(l)}function o(l){return i.parser.lazy[i.now().line]?n(l):e(l)}}function da(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(he,e,n)}}const fa={name:"htmlText",tokenize:ga};function ga(t,e,n){const i=this;let r,o,l;return a;function a(m){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(m),s}function s(m){return m===33?(t.consume(m),u):m===47?(t.consume(m),v):m===63?(t.consume(m),k):it(m)?(t.consume(m),j):n(m)}function u(m){return m===45?(t.consume(m),h):m===91?(t.consume(m),o=0,g):it(m)?(t.consume(m),A):n(m)}function h(m){return m===45?(t.consume(m),p):n(m)}function c(m){return m===null?n(m):m===45?(t.consume(m),d):_(m)?(l=c,G(m)):(t.consume(m),c)}function d(m){return m===45?(t.consume(m),p):c(m)}function p(m){return m===62?N(m):m===45?d(m):c(m)}function g(m){const W="CDATA[";return m===W.charCodeAt(o++)?(t.consume(m),o===W.length?y:g):n(m)}function y(m){return m===null?n(m):m===93?(t.consume(m),S):_(m)?(l=y,G(m)):(t.consume(m),y)}function S(m){return m===93?(t.consume(m),w):y(m)}function w(m){return m===62?N(m):m===93?(t.consume(m),w):y(m)}function A(m){return m===null||m===62?N(m):_(m)?(l=A,G(m)):(t.consume(m),A)}function k(m){return m===null?n(m):m===63?(t.consume(m),P):_(m)?(l=k,G(m)):(t.consume(m),k)}function P(m){return m===62?N(m):k(m)}function v(m){return it(m)?(t.consume(m),x):n(m)}function x(m){return m===45||ot(m)?(t.consume(m),x):D(m)}function D(m){return _(m)?(l=D,G(m)):M(m)?(t.consume(m),D):N(m)}function j(m){return m===45||ot(m)?(t.consume(m),j):m===47||m===62||Y(m)?R(m):n(m)}function R(m){return m===47?(t.consume(m),N):m===58||m===95||it(m)?(t.consume(m),b):_(m)?(l=R,G(m)):M(m)?(t.consume(m),R):N(m)}function b(m){return m===45||m===46||m===58||m===95||ot(m)?(t.consume(m),b):F(m)}function F(m){return m===61?(t.consume(m),C):_(m)?(l=F,G(m)):M(m)?(t.consume(m),F):R(m)}function C(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(t.consume(m),r=m,q):_(m)?(l=C,G(m)):M(m)?(t.consume(m),C):(t.consume(m),L)}function q(m){return m===r?(t.consume(m),r=void 0,E):m===null?n(m):_(m)?(l=q,G(m)):(t.consume(m),q)}function L(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||Y(m)?R(m):(t.consume(m),L)}function E(m){return m===47||m===62||Y(m)?R(m):n(m)}function N(m){return m===62?(t.consume(m),t.exit("htmlTextData"),t.exit("htmlText"),e):n(m)}function G(m){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),V}function V(m){return M(m)?B(t,et,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):et(m)}function et(m){return t.enter("htmlTextData"),l(m)}}const mn={name:"labelEnd",resolveAll:wa,resolveTo:ya,tokenize:ka},ba={tokenize:Sa},xa={tokenize:Ta},Ia={tokenize:Aa};function wa(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&ct(t,0,t.length,n),t}function ya(t,e){let n=t.length,i=0,r,o,l,a;for(;n--;)if(r=t[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(l){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(l=n);const s={type:t[o][1].type==="labelLink"?"link":"image",start:{...t[o][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[o][1].start},end:{...t[l][1].end}},h={type:"labelText",start:{...t[o+i+2][1].end},end:{...t[l-2][1].start}};return a=[["enter",s,e],["enter",u,e]],a=pt(a,t.slice(o+1,o+i+3)),a=pt(a,[["enter",h,e]]),a=pt(a,De(e.parser.constructs.insideSpan.null,t.slice(o+i+4,l-3),e)),a=pt(a,[["exit",h,e],t[l-2],t[l-1],["exit",u,e]]),a=pt(a,t.slice(l+1)),a=pt(a,[["exit",s,e]]),ct(t,o,t.length,a),t}function ka(t,e,n){const i=this;let r=i.events.length,o,l;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(d){return o?o._inactive?c(d):(l=i.parser.defined.includes(bt(i.sliceSerialize({start:o.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelEnd"),s):n(d)}function s(d){return d===40?t.attempt(ba,h,l?h:c)(d):d===91?t.attempt(xa,h,l?u:c)(d):l?h(d):c(d)}function u(d){return t.attempt(Ia,h,c)(d)}function h(d){return e(d)}function c(d){return o._balanced=!0,n(d)}}function Sa(t,e,n){return i;function i(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),r}function r(c){return Y(c)?le(t,o)(c):o(c)}function o(c){return c===41?h(c):vi(t,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return Y(c)?le(t,s)(c):h(c)}function a(c){return n(c)}function s(c){return c===34||c===39||c===40?Oi(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):h(c)}function u(c){return Y(c)?le(t,h)(c):h(c)}function h(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function Ta(t,e,n){const i=this;return r;function r(a){return zi.call(i,t,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(bt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function l(a){return n(a)}}function Aa(t,e,n){return i;function i(o){return t.enter("reference"),t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),r}function r(o){return o===93?(t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),t.exit("reference"),e):n(o)}}const Ca={name:"labelStartImage",resolveAll:mn.resolveAll,tokenize:Pa};function Pa(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),o}function o(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const Ea={name:"labelStartLink",resolveAll:mn.resolveAll,tokenize:Fa};function Fa(t,e,n){const i=this;return r;function r(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(l):e(l)}}const Ve={name:"lineEnding",tokenize:La};function La(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),B(t,e,"linePrefix")}}const xe={name:"thematicBreak",tokenize:_a};function _a(t,e,n){let i=0,r;return o;function o(u){return t.enter("thematicBreak"),l(u)}function l(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),s(u)):i>=3&&(u===null||_(u))?(t.exit("thematicBreak"),e(u)):n(u)}function s(u){return u===r?(t.consume(u),i++,s):(t.exit("thematicBreakSequence"),M(u)?B(t,a,"whitespace")(u):a(u))}}const lt={continuation:{tokenize:Da},exit:Ra,name:"list",tokenize:Oa},va={partial:!0,tokenize:$a},za={partial:!0,tokenize:Ma};function Oa(t,e,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,l=0;return a;function a(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:Ze(p)){if(i.containerState.type||(i.containerState.type=g,t.enter(g,{_container:!0})),g==="listUnordered")return t.enter("listItemPrefix"),p===42||p===45?t.check(xe,n,u)(p):u(p);if(!i.interrupt||p===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),s(p)}return n(p)}function s(p){return Ze(p)&&++l<10?(t.consume(p),s):(!i.interrupt||l<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(t.exit("listItemValue"),u(p)):n(p)}function u(p){return t.enter("listItemMarker"),t.consume(p),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,t.check(he,i.interrupt?n:h,t.attempt(va,d,c))}function h(p){return i.containerState.initialBlankLine=!0,o++,d(p)}function c(p){return M(p)?(t.enter("listItemPrefixWhitespace"),t.consume(p),t.exit("listItemPrefixWhitespace"),d):n(p)}function d(p){return i.containerState.size=o+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(p)}}function Da(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(he,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,B(t,e,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!M(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,l(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(za,e,l)(a))}function l(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,B(t,t.attempt(lt,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Ma(t,e,n){const i=this;return B(t,r,"listItemIndent",i.containerState.size+1);function r(o){const l=i.events[i.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===i.containerState.size?e(o):n(o)}}function Ra(t){t.exit(this.containerState.type)}function $a(t,e,n){const i=this;return B(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const l=i.events[i.events.length-1];return!M(o)&&l&&l[1].type==="listItemPrefixWhitespace"?e(o):n(o)}}const zn={name:"setextUnderline",resolveTo:Na,tokenize:Ba};function Na(t,e){let n=t.length,i,r,o;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!o&&t[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",o?(t.splice(r,0,["enter",l,e]),t.splice(o+1,0,["exit",t[i][1],e]),t[i][1].end={...t[o][1].end}):t[i][1]=l,t.push(["exit",l,e]),t}function Ba(t,e,n){const i=this;let r;return o;function o(u){let h=i.events.length,c;for(;h--;)if(i.events[h][1].type!=="lineEnding"&&i.events[h][1].type!=="linePrefix"&&i.events[h][1].type!=="content"){c=i.events[h][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(t.enter("setextHeadingLine"),r=u,l(u)):n(u)}function l(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),M(u)?B(t,s,"lineSuffix")(u):s(u))}function s(u){return u===null||_(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const ja={tokenize:Ka,partial:!0};function qa(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Wa,continuation:{tokenize:Qa},exit:Ga}},text:{91:{name:"gfmFootnoteCall",tokenize:Ua},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ha,resolveTo:Va}}}}function Ha(t,e,n){const i=this;let r=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l;for(;r--;){const s=i.events[r][1];if(s.type==="labelImage"){l=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!l||!l._balanced)return n(s);const u=bt(i.sliceSerialize({start:l.end,end:i.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),e(s))}}function Va(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",r,e],["exit",r,e],["enter",o,e],["enter",l,e],["exit",l,e],["exit",o,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...a),t}function Ua(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!l||c===null||c===91||Y(c))return n(c);if(c===93){t.exit("chunkString");const d=t.exit("gfmFootnoteCallString");return r.includes(bt(i.sliceSerialize(d)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return Y(c)||(l=!0),o++,t.consume(c),c===92?h:u}function h(c){return c===91||c===92||c===93?(t.consume(c),o++,u):u(c)}}function Wa(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,l=0,a;return s;function s(g){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",h):n(g)}function h(g){if(l>999||g===93&&!a||g===null||g===91||Y(g))return n(g);if(g===93){t.exit("chunkString");const y=t.exit("gfmFootnoteDefinitionLabelString");return o=bt(i.sliceSerialize(y)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),d}return Y(g)||(a=!0),l++,t.consume(g),g===92?c:h}function c(g){return g===91||g===92||g===93?(t.consume(g),l++,h):h(g)}function d(g){return g===58?(t.enter("definitionMarker"),t.consume(g),t.exit("definitionMarker"),r.includes(o)||r.push(o),B(t,p,"gfmFootnoteDefinitionWhitespace")):n(g)}function p(g){return e(g)}}function Qa(t,e,n){return t.check(he,e,t.attempt(ja,e,n))}function Ga(t){t.exit("gfmFootnoteDefinition")}function Ka(t,e,n){const i=this;return B(t,r,"gfmFootnoteDefinitionIndent",5);function r(o){const l=i.events[i.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?e(o):n(o)}}function Ya(t){let n=(t||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(l,a){let s=-1;for(;++s<l.length;)if(l[s][0]==="enter"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._close){let u=s;for(;u--;)if(l[u][0]==="exit"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._open&&l[s][1].end.offset-l[s][1].start.offset===l[u][1].end.offset-l[u][1].start.offset){l[s][1].type="strikethroughSequence",l[u][1].type="strikethroughSequence";const h={type:"strikethrough",start:Object.assign({},l[u][1].start),end:Object.assign({},l[s][1].end)},c={type:"strikethroughText",start:Object.assign({},l[u][1].end),end:Object.assign({},l[s][1].start)},d=[["enter",h,a],["enter",l[u][1],a],["exit",l[u][1],a],["enter",c,a]],p=a.parser.constructs.insideSpan.null;p&&ct(d,d.length,0,De(p,l.slice(u+1,s),a)),ct(d,d.length,0,[["exit",c,a],["enter",l[s][1],a],["exit",l[s][1],a],["exit",h,a]]),ct(l,u-1,s-u+3,d),s=u+d.length-2;break}}for(s=-1;++s<l.length;)l[s][1].type==="strikethroughSequenceTemporary"&&(l[s][1].type="data");return l}function o(l,a,s){const u=this.previous,h=this.events;let c=0;return d;function d(g){return u===126&&h[h.length-1][1].type!=="characterEscape"?s(g):(l.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const y=Ee(u);if(g===126)return c>1?s(g):(l.consume(g),c++,p);if(c<2&&!n)return s(g);const S=l.exit("strikethroughSequenceTemporary"),w=Ee(g);return S._open=!w||w===2&&!!y,S._close=!y||y===2&&!!w,a(g)}}}class Ja{constructor(){this.map=[]}add(e,n,i){Xa(this,e,n,i)}consume(e){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];i.push(e.slice()),e.length=0;let r=i.pop();for(;r;){for(const o of r)e.push(o);r=i.pop()}this.map.length=0}}function Xa(t,e,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<t.map.length;){if(t.map[r][0]===e){t.map[r][1]+=n,t.map[r][2].push(...i);return}r+=1}t.map.push([e,n,i])}}function Za(t,e){let n=!1;const i=[];for(;e<t.length;){const r=t[e];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return i}function ts(){return{flow:{null:{name:"table",tokenize:es,resolveAll:ns}}}}function es(t,e,n){const i=this;let r=0,o=0,l;return a;function a(b){let F=i.events.length-1;for(;F>-1;){const L=i.events[F][1].type;if(L==="lineEnding"||L==="linePrefix")F--;else break}const C=F>-1?i.events[F][1].type:null,q=C==="tableHead"||C==="tableRow"?x:s;return q===x&&i.parser.lazy[i.now().line]?n(b):q(b)}function s(b){return t.enter("tableHead"),t.enter("tableRow"),u(b)}function u(b){return b===124||(l=!0,o+=1),h(b)}function h(b){return b===null?n(b):_(b)?o>1?(o=0,i.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),p):n(b):M(b)?B(t,h,"whitespace")(b):(o+=1,l&&(l=!1,r+=1),b===124?(t.enter("tableCellDivider"),t.consume(b),t.exit("tableCellDivider"),l=!0,h):(t.enter("data"),c(b)))}function c(b){return b===null||b===124||Y(b)?(t.exit("data"),h(b)):(t.consume(b),b===92?d:c)}function d(b){return b===92||b===124?(t.consume(b),c):c(b)}function p(b){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(b):(t.enter("tableDelimiterRow"),l=!1,M(b)?B(t,g,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):g(b))}function g(b){return b===45||b===58?S(b):b===124?(l=!0,t.enter("tableCellDivider"),t.consume(b),t.exit("tableCellDivider"),y):v(b)}function y(b){return M(b)?B(t,S,"whitespace")(b):S(b)}function S(b){return b===58?(o+=1,l=!0,t.enter("tableDelimiterMarker"),t.consume(b),t.exit("tableDelimiterMarker"),w):b===45?(o+=1,w(b)):b===null||_(b)?P(b):v(b)}function w(b){return b===45?(t.enter("tableDelimiterFiller"),A(b)):v(b)}function A(b){return b===45?(t.consume(b),A):b===58?(l=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(b),t.exit("tableDelimiterMarker"),k):(t.exit("tableDelimiterFiller"),k(b))}function k(b){return M(b)?B(t,P,"whitespace")(b):P(b)}function P(b){return b===124?g(b):b===null||_(b)?!l||r!==o?v(b):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(b)):v(b)}function v(b){return n(b)}function x(b){return t.enter("tableRow"),D(b)}function D(b){return b===124?(t.enter("tableCellDivider"),t.consume(b),t.exit("tableCellDivider"),D):b===null||_(b)?(t.exit("tableRow"),e(b)):M(b)?B(t,D,"whitespace")(b):(t.enter("data"),j(b))}function j(b){return b===null||b===124||Y(b)?(t.exit("data"),D(b)):(t.consume(b),b===92?R:j)}function R(b){return b===92||b===124?(t.consume(b),j):j(b)}}function ns(t,e){let n=-1,i=!0,r=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,s=0,u,h,c;const d=new Ja;for(;++n<t.length;){const p=t[n],g=p[1];p[0]==="enter"?g.type==="tableHead"?(a=!1,s!==0&&(On(d,e,s,u,h),h=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",u,e]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(i=!0,c=void 0,o=[0,0,0,0],l=[0,n+1,0,0],a&&(a=!1,h={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",h,e]])),r=g.type==="tableDelimiterRow"?2:h?3:1):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(i=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=ge(d,e,o,r,void 0,c),o=[0,0,0,0]),l[2]=n)):g.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(l[0]=l[1],c=ge(d,e,o,r,void 0,c)),o=l,l=[o[1],n,0,0])):g.type==="tableHead"?(a=!0,s=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=n,o[1]!==0?(l[0]=l[1],c=ge(d,e,o,r,n,c)):l[1]!==0&&(c=ge(d,e,l,r,n,c)),r=0):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(l[3]=n)}for(s!==0&&On(d,e,s,u,h),d.consume(e.events),n=-1;++n<e.events.length;){const p=e.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=Za(e.events,n))}return t}function ge(t,e,n,i,r,o){const l=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},Vt(e.events,n[0])),t.add(n[0],0,[["exit",o,e]]));const s=Vt(e.events,n[1]);if(o={type:l,start:Object.assign({},s),end:Object.assign({},s)},t.add(n[1],0,[["enter",o,e]]),n[2]!==0){const u=Vt(e.events,n[2]),h=Vt(e.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},h)};if(t.add(n[2],0,[["enter",c,e]]),i!==2){const d=e.events[n[2]],p=e.events[n[3]];if(d[1].end=Object.assign({},p[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,y=n[3]-n[2]-1;t.add(g,y,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return r!==void 0&&(o.end=Object.assign({},Vt(e.events,r)),t.add(r,0,[["exit",o,e]]),o=void 0),o}function On(t,e,n,i,r){const o=[],l=Vt(e.events,n);r&&(r.end=Object.assign({},l),o.push(["exit",r,e])),i.end=Object.assign({},l),o.push(["exit",i,e]),t.add(n+1,0,o)}function Vt(t,e){const n=t[e],i=n[0]==="enter"?"start":"end";return n[1][i]}const is={name:"tasklistCheck",tokenize:ls};function rs(){return{text:{91:is}}}function ls(t,e,n){const i=this;return r;function r(s){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(s):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),o)}function o(s){return Y(s)?(t.enter("taskListCheckValueUnchecked"),t.consume(s),t.exit("taskListCheckValueUnchecked"),l):s===88||s===120?(t.enter("taskListCheckValueChecked"),t.consume(s),t.exit("taskListCheckValueChecked"),l):n(s)}function l(s){return s===93?(t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),a):n(s)}function a(s){return _(s)?e(s):M(s)?t.check({tokenize:os},e,n)(s):n(s)}}function os(t,e,n){return B(t,i,"whitespace");function i(r){return r===null?n(r):e(r)}}function as(t){return Ii([bo(),qa(),Ya(t),ts(),rs()])}const ss={gfm:as},us={gfmFromMarkdown:ho},cs={tokenize:hs};function hs(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),B(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),o(a)}function o(a){const s=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(a)}function l(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return _(a)?(t.consume(a),t.exit("chunkText"),o):(t.consume(a),l)}}const ps={tokenize:ms},Dn={tokenize:ds};function ms(t){const e=this,n=[];let i=0,r,o,l;return a;function a(k){if(i<n.length){const P=n[i];return e.containerState=P[1],t.attempt(P[0].continuation,s,u)(k)}return u(k)}function s(k){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&A();const P=e.events.length;let v=P,x;for(;v--;)if(e.events[v][0]==="exit"&&e.events[v][1].type==="chunkFlow"){x=e.events[v][1].end;break}w(i);let D=P;for(;D<e.events.length;)e.events[D][1].end={...x},D++;return ct(e.events,v+1,0,e.events.slice(P)),e.events.length=D,u(k)}return a(k)}function u(k){if(i===n.length){if(!r)return d(k);if(r.currentConstruct&&r.currentConstruct.concrete)return g(k);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Dn,h,c)(k)}function h(k){return r&&A(),w(i),d(k)}function c(k){return e.parser.lazy[e.now().line]=i!==n.length,l=e.now().offset,g(k)}function d(k){return e.containerState={},t.attempt(Dn,p,g)(k)}function p(k){return i++,n.push([e.currentConstruct,e.containerState]),d(k)}function g(k){if(k===null){r&&A(),w(0),t.consume(k);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),y(k)}function y(k){if(k===null){S(t.exit("chunkFlow"),!0),w(0),t.consume(k);return}return _(k)?(t.consume(k),S(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(k),y)}function S(k,P){const v=e.sliceStream(k);if(P&&v.push(null),k.previous=o,o&&(o.next=k),o=k,r.defineSkip(k.start),r.write(v),e.parser.lazy[k.start.line]){let x=r.events.length;for(;x--;)if(r.events[x][1].start.offset<l&&(!r.events[x][1].end||r.events[x][1].end.offset>l))return;const D=e.events.length;let j=D,R,b;for(;j--;)if(e.events[j][0]==="exit"&&e.events[j][1].type==="chunkFlow"){if(R){b=e.events[j][1].end;break}R=!0}for(w(i),x=D;x<e.events.length;)e.events[x][1].end={...b},x++;ct(e.events,j+1,0,e.events.slice(D)),e.events.length=x}}function w(k){let P=n.length;for(;P-- >k;){const v=n[P];e.containerState=v[1],v[0].exit.call(e,t)}n.length=k}function A(){r.write([null]),o=void 0,r=void 0,e.containerState._closeFlow=void 0}}function ds(t,e,n){return B(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const fs={tokenize:gs};function gs(t){const e=this,n=t.attempt(he,i,t.attempt(this.parser.constructs.flowInitial,r,B(t,t.attempt(this.parser.constructs.flow,r,t.attempt(Qo,r)),"linePrefix")));return n;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEndingBlank"),t.consume(o),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const bs={resolveAll:Mi()},xs=Di("string"),Is=Di("text");function Di(t){return{resolveAll:Mi(t==="text"?ws:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],o=n.attempt(r,l,a);return l;function l(h){return u(h)?o(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),s}function s(h){return u(h)?(n.exit("data"),o(h)):(n.consume(h),s)}function u(h){if(h===null)return!0;const c=r[h];let d=-1;if(c)for(;++d<c.length;){const p=c[d];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function Mi(t){return e;function e(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return t?t(n,i):n}}function ws(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let o=r.length,l=-1,a=0,s;for(;o--;){const u=r[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)s=!0,a++;else if(u!==-1){o++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(a=0),a){const u={type:n===t.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:i.start._bufferIndex+l,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const ys={42:lt,43:lt,45:lt,48:lt,49:lt,50:lt,51:lt,52:lt,53:lt,54:lt,55:lt,56:lt,57:lt,62:Ei},ks={91:Xo},Ss={[-2]:He,[-1]:He,32:He},Ts={35:ra,42:xe,45:[zn,xe],60:sa,61:zn,95:xe,96:_n,126:_n},As={38:Li,92:Fi},Cs={[-5]:Ve,[-4]:Ve,[-3]:Ve,33:Ca,38:Li,42:en,60:[Eo,fa],91:Ea,92:[na,Fi],93:mn,95:en,96:jo},Ps={null:[en,bs]},Es={null:[42,95]},Fs={null:[]},Ls=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Es,contentInitial:ks,disable:Fs,document:ys,flow:Ts,flowInitial:Ss,insideSpan:Ps,string:As,text:Cs},Symbol.toStringTag,{value:"Module"}));function _s(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let l=[],a=[];const s={attempt:D(v),check:D(x),consume:A,enter:k,exit:P,interrupt:D(x,{interrupt:!0})},u={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:t,previous:null,sliceSerialize:d,sliceStream:p,write:c};let h=e.tokenize.call(u,s);return e.resolveAll&&o.push(e),u;function c(F){return l=pt(l,F),S(),l[l.length-1]!==null?[]:(j(e,0),u.events=De(o,u.events,u),u.events)}function d(F,C){return zs(p(F),C)}function p(F){return vs(l,F)}function g(){const{_bufferIndex:F,_index:C,line:q,column:L,offset:E}=i;return{_bufferIndex:F,_index:C,line:q,column:L,offset:E}}function y(F){r[F.line]=F.column,b()}function S(){let F;for(;i._index<l.length;){const C=l[i._index];if(typeof C=="string")for(F=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===F&&i._bufferIndex<C.length;)w(C.charCodeAt(i._bufferIndex));else w(C)}}function w(F){h=h(F)}function A(F){_(F)?(i.line++,i.column=1,i.offset+=F===-3?2:1,b()):F!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===l[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=F}function k(F,C){const q=C||{};return q.type=F,q.start=g(),u.events.push(["enter",q,u]),a.push(q),q}function P(F){const C=a.pop();return C.end=g(),u.events.push(["exit",C,u]),C}function v(F,C){j(F,C.from)}function x(F,C){C.restore()}function D(F,C){return q;function q(L,E,N){let G,V,et,m;return Array.isArray(L)?J(L):"tokenize"in L?J([L]):W(L);function W(tt){return Lt;function Lt(dt){const Tt=dt!==null&&tt[dt],At=dt!==null&&tt.null,Ot=[...Array.isArray(Tt)?Tt:Tt?[Tt]:[],...Array.isArray(At)?At:At?[At]:[]];return J(Ot)(dt)}}function J(tt){return G=tt,V=0,tt.length===0?N:f(tt[V])}function f(tt){return Lt;function Lt(dt){return m=R(),et=tt,tt.partial||(u.currentConstruct=tt),tt.name&&u.parser.constructs.disable.null.includes(tt.name)?It():tt.tokenize.call(C?Object.assign(Object.create(u),C):u,s,rt,It)(dt)}}function rt(tt){return F(et,m),E}function It(tt){return m.restore(),++V<G.length?f(G[V]):N}}}function j(F,C){F.resolveAll&&!o.includes(F)&&o.push(F),F.resolve&&ct(u.events,C,u.events.length-C,F.resolve(u.events.slice(C),u)),F.resolveTo&&(u.events=F.resolveTo(u.events,u))}function R(){const F=g(),C=u.previous,q=u.currentConstruct,L=u.events.length,E=Array.from(a);return{from:L,restore:N};function N(){i=F,u.previous=C,u.currentConstruct=q,u.events.length=L,a=E,b()}}function b(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function vs(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,o=e.end._bufferIndex;let l;if(n===r)l=[t[n].slice(i,o)];else{if(l=t.slice(n,r),i>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(i):l.shift()}o>0&&l.push(t[r].slice(0,o))}return l}function zs(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const o=t[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=e?" ":"	";break}case-1:{if(!e&&r)continue;l=" ";break}default:l=String.fromCharCode(o)}r=o===-2,i.push(l)}return i.join("")}function Os(t){const i={constructs:Ii([Ls,...(t||{}).extensions||[]]),content:r(cs),defined:[],document:r(ps),flow:r(fs),lazy:{},string:r(xs),text:r(Is)};return i;function r(o){return l;function l(a){return _s(i,o,a)}}}function Ds(t){for(;!_i(t););return t}const Mn=/[\0\t\n\r]/g;function Ms(){let t=1,e="",n=!0,i;return r;function r(o,l,a){const s=[];let u,h,c,d,p;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,e="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(Mn.lastIndex=c,u=Mn.exec(o),d=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(d),!u){e=o.slice(c);break}if(p===10&&c===d&&i)s.push(-3),i=void 0;else switch(i&&(s.push(-5),i=void 0),c<d&&(s.push(o.slice(c,d)),t+=d-c),p){case 0:{s.push(65533),t++;break}case 9:{for(h=Math.ceil(t/4)*4,s.push(-2);t++<h;)s.push(-1);break}case 10:{s.push(-4),t=1;break}default:i=!0,t=1}c=d+1}return a&&(i&&s.push(-5),e&&s.push(e),s.push(null)),s}}function Ie(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Rn(t.position):"start"in t||"end"in t?Rn(t):"line"in t||"column"in t?nn(t):""}function nn(t){return $n(t&&t.line)+":"+$n(t&&t.column)}function Rn(t){return nn(t&&t.start)+"-"+nn(t&&t.end)}function $n(t){return t&&typeof t=="number"?t:1}const Ri={}.hasOwnProperty;function Rs(t,e,n){return typeof e!="string"&&(n=e,e=void 0),$s(n)(Ds(Os(n).document().write(Ms()(t,e,!0))))}function $s(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(dn),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(Gt),blockQuote:o(At),characterEscape:R,characterReference:R,codeFenced:o(Ot),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Ot,l),codeText:o(pe,l),codeTextData:R,data:R,codeFlowValue:R,definition:o(me),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(de),hardBreakEscape:o(Kt),hardBreakTrailing:o(Kt),htmlFlow:o(Yt,l),htmlFlowData:R,htmlText:o(Yt,l),htmlTextData:R,image:o(Jt),label:l,link:o(dn),listItem:o(qi),listItemValue:d,listOrdered:o(fn,c),listUnordered:o(fn),paragraph:o(Hi),reference:f,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(Gt),strong:o(Vi),thematicBreak:o(Wi)},exit:{atxHeading:s(),atxHeadingSequence:v,autolink:s(),autolinkEmail:Tt,autolinkProtocol:dt,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:It,characterReferenceMarkerNumeric:It,characterReferenceValue:tt,characterReference:Lt,codeFenced:s(S),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:b,codeIndented:s(w),codeText:s(E),codeTextData:b,data:b,definition:s(),definitionDestinationString:P,definitionLabelString:A,definitionTitleString:k,emphasis:s(),hardBreakEscape:s(C),hardBreakTrailing:s(C),htmlFlow:s(q),htmlFlowData:b,htmlText:s(L),htmlTextData:b,image:s(G),label:et,labelText:V,lineEnding:F,link:s(N),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:rt,resourceDestinationString:m,resourceTitleString:W,resource:J,setextHeading:s(j),setextHeadingLineSequence:D,setextHeadingText:x,strong:s(),thematicBreak:s()}};$i(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(I){let T={type:"root",children:[]};const O={stack:[T],tokenStack:[],config:e,enter:a,exit:u,buffer:l,resume:h,data:n},$=[];let K=-1;for(;++K<I.length;)if(I[K][1].type==="listOrdered"||I[K][1].type==="listUnordered")if(I[K][0]==="enter")$.push(K);else{const ft=$.pop();K=r(I,ft,K)}for(K=-1;++K<I.length;){const ft=e[I[K][0]];Ri.call(ft,I[K][1].type)&&ft[I[K][1].type].call(Object.assign({sliceSerialize:I[K][2].sliceSerialize},O),I[K][1])}if(O.tokenStack.length>0){const ft=O.tokenStack[O.tokenStack.length-1];(ft[1]||Nn).call(O,void 0,ft[0])}for(T.position={start:_t(I.length>0?I[0][1].start:{line:1,column:1,offset:0}),end:_t(I.length>0?I[I.length-2][1].end:{line:1,column:1,offset:0})},K=-1;++K<e.transforms.length;)T=e.transforms[K](T)||T;return T}function r(I,T,O){let $=T-1,K=-1,ft=!1,Dt,Ct,Xt,Zt;for(;++$<=O;){const st=I[$];switch(st[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{st[0]==="enter"?K++:K--,Zt=void 0;break}case"lineEndingBlank":{st[0]==="enter"&&(Dt&&!Zt&&!K&&!Xt&&(Xt=$),Zt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Zt=void 0}if(!K&&st[0]==="enter"&&st[1].type==="listItemPrefix"||K===-1&&st[0]==="exit"&&(st[1].type==="listUnordered"||st[1].type==="listOrdered")){if(Dt){let jt=$;for(Ct=void 0;jt--;){const Pt=I[jt];if(Pt[1].type==="lineEnding"||Pt[1].type==="lineEndingBlank"){if(Pt[0]==="exit")continue;Ct&&(I[Ct][1].type="lineEndingBlank",ft=!0),Pt[1].type="lineEnding",Ct=jt}else if(!(Pt[1].type==="linePrefix"||Pt[1].type==="blockQuotePrefix"||Pt[1].type==="blockQuotePrefixWhitespace"||Pt[1].type==="blockQuoteMarker"||Pt[1].type==="listItemIndent"))break}Xt&&(!Ct||Xt<Ct)&&(Dt._spread=!0),Dt.end=Object.assign({},Ct?I[Ct][1].start:st[1].end),I.splice(Ct||$,0,["exit",Dt,st[2]]),$++,O++}if(st[1].type==="listItemPrefix"){const jt={type:"listItem",_spread:!1,start:Object.assign({},st[1].start),end:void 0};Dt=jt,I.splice($,0,["enter",jt,st[2]]),$++,O++,Xt=void 0,Zt=!0}}}return I[T][1]._spread=ft,O}function o(I,T){return O;function O($){a.call(this,I($),$),T&&T.call(this,$)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(I,T,O){this.stack[this.stack.length-1].children.push(I),this.stack.push(I),this.tokenStack.push([T,O||void 0]),I.position={start:_t(T.start),end:void 0}}function s(I){return T;function T(O){I&&I.call(this,O),u.call(this,O)}}function u(I,T){const O=this.stack.pop(),$=this.tokenStack.pop();if($)$[0].type!==I.type&&(T?T.call(this,I,$[0]):($[1]||Nn).call(this,I,$[0]));else throw new Error("Cannot close `"+I.type+"` ("+Ie({start:I.start,end:I.end})+"): it’s not open");O.position.end=_t(I.end)}function h(){return Xl(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(I){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(I),10),this.data.expectingFirstListItemValue=void 0}}function p(){const I=this.resume(),T=this.stack[this.stack.length-1];T.lang=I}function g(){const I=this.resume(),T=this.stack[this.stack.length-1];T.meta=I}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const I=this.resume(),T=this.stack[this.stack.length-1];T.value=I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const I=this.resume(),T=this.stack[this.stack.length-1];T.value=I.replace(/(\r?\n|\r)$/g,"")}function A(I){const T=this.resume(),O=this.stack[this.stack.length-1];O.label=T,O.identifier=bt(this.sliceSerialize(I)).toLowerCase()}function k(){const I=this.resume(),T=this.stack[this.stack.length-1];T.title=I}function P(){const I=this.resume(),T=this.stack[this.stack.length-1];T.url=I}function v(I){const T=this.stack[this.stack.length-1];if(!T.depth){const O=this.sliceSerialize(I).length;T.depth=O}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function D(I){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(I).codePointAt(0)===61?1:2}function j(){this.data.setextHeadingSlurpLineEnding=void 0}function R(I){const O=this.stack[this.stack.length-1].children;let $=O[O.length-1];(!$||$.type!=="text")&&($=Ui(),$.position={start:_t(I.start),end:void 0},O.push($)),this.stack.push($)}function b(I){const T=this.stack.pop();T.value+=this.sliceSerialize(I),T.position.end=_t(I.end)}function F(I){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const O=T.children[T.children.length-1];O.position.end=_t(I.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(T.type)&&(R.call(this,I),b.call(this,I))}function C(){this.data.atHardBreak=!0}function q(){const I=this.resume(),T=this.stack[this.stack.length-1];T.value=I}function L(){const I=this.resume(),T=this.stack[this.stack.length-1];T.value=I}function E(){const I=this.resume(),T=this.stack[this.stack.length-1];T.value=I}function N(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=T,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function G(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=T,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function V(I){const T=this.sliceSerialize(I),O=this.stack[this.stack.length-2];O.label=eo(T),O.identifier=bt(T).toLowerCase()}function et(){const I=this.stack[this.stack.length-1],T=this.resume(),O=this.stack[this.stack.length-1];if(this.data.inReference=!0,O.type==="link"){const $=I.children;O.children=$}else O.alt=T}function m(){const I=this.resume(),T=this.stack[this.stack.length-1];T.url=I}function W(){const I=this.resume(),T=this.stack[this.stack.length-1];T.title=I}function J(){this.data.inReference=void 0}function f(){this.data.referenceType="collapsed"}function rt(I){const T=this.resume(),O=this.stack[this.stack.length-1];O.label=T,O.identifier=bt(this.sliceSerialize(I)).toLowerCase(),this.data.referenceType="full"}function It(I){this.data.characterReferenceType=I.type}function tt(I){const T=this.sliceSerialize(I),O=this.data.characterReferenceType;let $;O?($=xi(T,O==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):$=hn(T);const K=this.stack[this.stack.length-1];K.value+=$}function Lt(I){const T=this.stack.pop();T.position.end=_t(I.end)}function dt(I){b.call(this,I);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(I)}function Tt(I){b.call(this,I);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(I)}function At(){return{type:"blockquote",children:[]}}function Ot(){return{type:"code",lang:null,meta:null,value:""}}function pe(){return{type:"inlineCode",value:""}}function me(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function de(){return{type:"emphasis",children:[]}}function Gt(){return{type:"heading",depth:0,children:[]}}function Kt(){return{type:"break"}}function Yt(){return{type:"html",value:""}}function Jt(){return{type:"image",title:null,url:"",alt:null}}function dn(){return{type:"link",title:null,url:"",children:[]}}function fn(I){return{type:"list",ordered:I.type==="listOrdered",start:null,spread:I._spread,children:[]}}function qi(I){return{type:"listItem",spread:I._spread,checked:null,children:[]}}function Hi(){return{type:"paragraph",children:[]}}function Vi(){return{type:"strong",children:[]}}function Ui(){return{type:"text",value:""}}function Wi(){return{type:"thematicBreak"}}}function _t(t){return{line:t.line,column:t.column,offset:t.offset}}function $i(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?$i(t,i):Ns(t,i)}}function Ns(t,e){let n;for(n in e)if(Ri.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Nn(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Ie({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Ie({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Ie({start:e.start,end:e.end})+") is still open")}function Bs(t,e){return function(n,i,r){}}function Bn(t){const e=[];for(let n=0;n<t.style.length;n++){const i=t.style.item(n),r=t.style.getPropertyValue(i);e.push(`${i}: ${r}`)}return e.sort().join("; ")}function Ni(t,e,n=""){if(t.nodeType!==e.nodeType)throw new Error(`Node type mismatch at ${n}. Received: '${t.nodeType}', Expected: '${e.nodeType}'`);if(t.nodeName!==e.nodeName)throw new Error(`Node name mismatch at ${n}. Received: '${t.nodeName}', Expected: '${e.nodeName}'`);if(t instanceof HTMLElement&&e instanceof HTMLElement){const i=Bn(t),r=Bn(e);if(i!==r)throw new Error(`Style mismatch at ${n}. Received ${i}, expected ${r}`)}if(t instanceof Element&&e instanceof Element){const i=Array.from(t.attributes).sort((o,l)=>o.name.localeCompare(l.name)),r=Array.from(e.attributes).sort((o,l)=>o.name.localeCompare(l.name));if(i.length!==r.length)throw new Error(`Attribute count mismatch at ${n}. Received: ${i.length}, Expected: ${r.length}`);for(let o=0;o<i.length;o++){const l=i[o],a=r[o];if(l.name!==a.name)throw new Error(`Attribute name mismatch at ${n}. Found '${l.name}', expected '${a.name}'`);if(l.name!=="style"&&l.value!==a.value)throw new Error(`Attribute value mismatch for '${l.name}' at ${n}. Received: '${l.value}', Expected: '${a.value}'`)}}if(t.childNodes.length!==e.childNodes.length)throw new Error(`Child element count mismatch at ${n}. Received: ${t.childNodes.length}, Expected: ${e.childNodes.length}`);for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i],o=e.childNodes[i],l=`${n} > ${r instanceof HTMLElement?r.tagName:"TextNode"}:nth-child(${i+1})`;if(r instanceof HTMLElement&&!(o instanceof HTMLElement)||!(r instanceof HTMLElement)&&o instanceof HTMLElement)throw new Error(`Child type mismatch at ${n}. Received: ${r}, Expected: ${o}`);if(r instanceof HTMLElement&&o instanceof HTMLElement)Ni(r,o,l);else if(r.textContent!==o.textContent)throw new Error(`Text content mismatch at ${n}. Received: '${t.textContent}', Expected: '${e.textContent}'`)}}var js=Z("<blockquote>"),qs=Z("<br>"),Hs=Z("<pre><code>"),Vs=Z("<del>"),Us=Z("<em>"),Ws=Z("<div>"),Qs=Z("<img>"),Gs=Z("<code>"),Ks=Z('<a target=_blank rel="noopener noreferrer">'),Ys=Z("<li>"),Js=Z("<p>"),Xs=Z("<strong>"),Zs=Z("<tr>"),tu=Z("<thead>"),eu=Z("<tbody>"),nu=Z("<table>"),iu=Z("<hr>");const ru=Bs(),Bi=ue(),ji=ue([]),Ue=ue();function lu(){return ce(ji)}function ou(){const t=ce(Bi);if(!t)throw new Error("Use useMdastRendererProps in a descendant of MdastRenderer");return t}const Ht=t=>{throw new Error(`Did not implement node type yet: ${t.node.type}`)},au={linkReference:Ht,definition:Ht,footnoteDefinition:Ht,footnoteReference:Ht,imageReference:Ht,yaml:Ht,blockquote(t){return(()=>{var e=js();return U(e,z(gt,{get node(){return t.node}})),e})()},break:()=>qs(),code(t){return(()=>{var e=Hs(),n=e.firstChild;return U(n,()=>t.node.value),e})()},delete(t){return(()=>{var e=Vs();return U(e,z(gt,{get node(){return t.node}})),e})()},emphasis(t){return(()=>{var e=Us();return U(e,z(gt,{get node(){return t.node}})),e})()},heading(t){return z($e,{get component(){return`h${t.node.depth}`},get children(){return z(gt,{get node(){return t.node}})}})},html(t){return(()=>{var e=Ws();return mt(()=>e.innerHTML=t.node.value),e})()},image(t){return(()=>{var e=Qs();return mt(n=>{var i=t.node.url,r=t.node.alt??"";return i!==n.e&&$t(e,"src",n.e=i),r!==n.t&&$t(e,"alt",n.t=r),n},{e:void 0,t:void 0}),e})()},inlineCode(t){return(()=>{var e=Gs();return U(e,()=>t.node.value),e})()},link(t){return(()=>{var e=Ks();return U(e,z(ie,{get each(){return t.node.children},children:n=>z(Ut,{node:n})})),mt(()=>$t(e,"href",t.node.url)),e})()},list(t){return z($e,{get component(){return t.node.ordered?"ol":"ul"},get children(){return z(gt,{get node(){return t.node}})}})},listItem(t){return(()=>{var e=Ys();return U(e,z(Nt,{get when(){return t.node.spread},get fallback(){return z(gt,{get node(){return t.node.children[0]}})},get children(){return z(Ut,{get node(){return t.node.children[0]}})}}),null),U(e,z(ie,{get each(){return t.node.children.slice(1)},children:n=>z(Ut,{node:n})}),null),e})()},paragraph(t){return(()=>{var e=Js();return U(e,z(gt,{get node(){return t.node}})),e})()},strong(t){return(()=>{var e=Xs();return U(e,z(gt,{get node(){return t.node}})),e})()},text(t){return X(()=>t.node.value)},tableRow(t){return(()=>{var e=Zs();return U(e,z(gt,{get node(){return t.node}})),e})()},tableCell(t){const e=ce(Ue);return z($e,{component:e==="head"?"th":"td",get children(){return z(gt,{get node(){return t.node}})}})},table(t){return(()=>{var e=nu();return U(e,z(Ue.Provider,{value:"head",get children(){var n=tu();return U(n,z(Ut,{get node(){return t.node.children[0]}})),n}}),null),U(e,z(Ue.Provider,{value:"body",get children(){var n=eu();return U(n,z(ie,{get each(){return t.node.children.slice(1)},children:i=>z(Ut,{node:i})})),n}}),null),e})()},thematicBreak(){return iu()}};function gt(t){return z(ie,{get each(){return"children"in t.node&&Array.isArray(t.node.children)?t.node.children:[]},children:e=>z(Ut,{node:e})})}function Ut(t){const e=ou();ru("DefaultNode processing:",t.node);const n=()=>e.renderers?.[t.node.type]??au[t.node.type];return ln(()=>{if(!n())throw new Error(`No Renderer For ${t.node.type}`)}),z(ji.Provider,{get value(){return[t.node,...lu()]},get children(){return z(Nt,{get when(){return n()},keyed:!0,children:i=>z(i,{get node(){return t.node}})})}})}function su(t){const e=X(()=>Rs(t.content,{extensions:t.extensions,mdastExtensions:t.mdastExtensions}));return z(Bi.Provider,{value:t,get children(){return z(gt,{get node(){return e()}})}})}const uu="_container_13ddy_1",cu="_result_13ddy_72",hu="_title_13ddy_81",pu="_subtitle_13ddy_85",ht={container:uu,result:cu,title:hu,subtitle:pu};var mu=Z("<div>No snapshot found"),du=Z("<div><div>✅ MATCH</div><div>HTML matches snapshot"),fu=Z("<div><div><div><h3><a>🔗</a> </h3></div><div></div></div><div><div><div>A: Markdown Source</div><pre></pre></div><div><div>B: Actual Result (CSR)</div><div><div>Raw HTML:</div><pre></pre></div><div><div>Rendered:</div><div></div></div></div><div><div>C: Expected (SSR Snapshot)</div><div><div>Raw HTML:</div><pre></pre></div><div><div>Rendered:</div><div></div></div></div><div><div>D: Comparison</div><div>"),gu=Z("<div><div>❌ MISMATCH</div><div>"),bu=Z("<div><h1>Solid Mdast Markdown Test Viewer</h1><div><h3>Test Statistics</h3><div><span>Total: </span><span>Passed: </span><span>Failed: </span></div></div><div>");const jn=new DOMParser;function xu(t){let e=null;const[n,i]=wt(),[r,o]=wt();return Ki(()=>{console.log(e.innerHTML),o(e.innerHTML);try{Ni(jn.parseFromString(e.innerHTML,"text/html").querySelector("body"),jn.parseFromString(t.output,"text/html").querySelector("body")),i({success:!0})}catch(l){i({success:!1,error:l instanceof Error?l.message:`${l}`})}}),(()=>{var l=fu(),a=l.firstChild,s=a.firstChild,u=s.firstChild,h=u.firstChild;h.nextSibling;var c=s.nextSibling,d=a.nextSibling,p=d.firstChild,g=p.firstChild,y=g.nextSibling,S=p.nextSibling,w=S.firstChild,A=w.nextSibling,k=A.firstChild,P=k.nextSibling,v=A.nextSibling,x=v.firstChild,D=x.nextSibling,j=S.nextSibling,R=j.firstChild,b=R.nextSibling,F=b.firstChild,C=F.nextSibling,q=b.nextSibling,L=q.firstChild,E=L.nextSibling,N=j.nextSibling,G=N.firstChild,V=G.nextSibling;a.style.setProperty("padding","12px 16px"),a.style.setProperty("border-bottom","1px solid #ddd"),a.style.setProperty("display","flex"),a.style.setProperty("justify-content","space-between"),a.style.setProperty("align-items","center"),U(u,()=>t.title,null),c.style.setProperty("padding","4px 12px"),c.style.setProperty("border-radius","16px"),c.style.setProperty("color","white"),c.style.setProperty("font-weight","bold"),c.style.setProperty("font-size","12px"),U(c,()=>n()?.success?"PASS":"FAIL"),d.style.setProperty("display","grid"),d.style.setProperty("grid-template-columns","1fr 2fr 2fr 1fr"),d.style.setProperty("min-height","200px"),p.style.setProperty("padding","16px"),p.style.setProperty("border-right","1px solid #eee"),p.style.setProperty("overflow-x","hidden"),y.style.setProperty("margin","0"),y.style.setProperty("padding","8px"),y.style.setProperty("background","#f8f8f8"),y.style.setProperty("border-radius","4px"),y.style.setProperty("font-size","12px"),y.style.setProperty("white-space","pre-wrap"),y.style.setProperty("word-wrap","break-word"),y.style.setProperty("border","1px solid #e0e0e0"),y.style.setProperty("max-height","160px"),y.style.setProperty("overflow","auto"),U(y,()=>t.input),S.style.setProperty("padding","16px"),S.style.setProperty("border-right","1px solid #eee"),S.style.setProperty("overflow-x","hidden"),A.style.setProperty("margin-bottom","8px"),P.style.setProperty("margin","0"),P.style.setProperty("padding","6px"),P.style.setProperty("border-radius","3px"),P.style.setProperty("font-size","10px"),P.style.setProperty("word-wrap","break-word"),P.style.setProperty("border","1px solid #e0e0e0"),P.style.setProperty("max-height","60px"),P.style.setProperty("overflow","auto"),U(P,r);var et=e;return typeof et=="function"?ti(et,D):e=D,U(D,z(su,{get content(){return t.input},get extensions(){return t.extensions?.map(m=>ss[m]())},get mdastExtensions(){return t.mdastExtensions?.map(m=>us[m]())}})),j.style.setProperty("padding","16px"),j.style.setProperty("border-right","1px solid #eee"),j.style.setProperty("overflow-x","hidden"),b.style.setProperty("margin-bottom","8px"),C.style.setProperty("margin","0"),C.style.setProperty("padding","6px"),C.style.setProperty("border-radius","3px"),C.style.setProperty("font-size","10px"),C.style.setProperty("word-wrap","break-word"),C.style.setProperty("border","1px solid #e0e0e0"),C.style.setProperty("max-height","60px"),C.style.setProperty("overflow","auto"),U(C,()=>t.output),U(q,z(Nt,{get when(){return t.output==="No snapshot found"},get children(){var m=mu();return m.style.setProperty("color","#999"),m.style.setProperty("font-style","italic"),m.style.setProperty("text-align","center"),m}}),null),N.style.setProperty("padding","16px"),N.style.setProperty("overflow-x","hidden"),V.style.setProperty("padding","8px"),V.style.setProperty("border-radius","4px"),V.style.setProperty("min-height","40px"),V.style.setProperty("border","1px solid #e0e0e0"),V.style.setProperty("text-align","center"),V.style.setProperty("display","flex"),V.style.setProperty("align-items","center"),V.style.setProperty("justify-content","center"),V.style.setProperty("flex-direction","column"),V.style.setProperty("gap","8px"),U(V,z(Nt,{get when(){return n()?.success},get fallback(){return(()=>{var m=gu(),W=m.firstChild,J=W.nextSibling;return m.style.setProperty("color","#d32f2f"),W.style.setProperty("font-weight","bold"),W.style.setProperty("margin-bottom","4px"),J.style.setProperty("font-size","12px"),U(J,()=>n()?.error??"Oopsie"),m})()},get children(){var m=du(),W=m.firstChild,J=W.nextSibling;return m.style.setProperty("color","#2e7d32"),W.style.setProperty("font-weight","bold"),W.style.setProperty("margin-bottom","4px"),J.style.setProperty("font-size","12px"),m}})),mt(m=>{var W=ht.result,J=n()?.success?"1px solid #ddd":"2px solid #ff6b6b",f=n()?.success?"#e8f5e8":"#ffe6e6",rt=ht.title,It=`/?t=${t.title}`,tt=n()?.success?"#4caf50":"#f44336",Lt=ht.subtitle,dt=ht.subtitle,Tt=ht.subtitle,At=ht.subtitle,Ot=ht.container,pe=ht.subtitle,me=ht.subtitle,de=ht.subtitle,Gt=ht.container,Kt=t.output!=="No snapshot found"?t.output:"",Yt=ht.subtitle,Jt=n()?.success?"#e8f5e8":"#ffe6e6";return W!==m.e&&ut(l,m.e=W),J!==m.t&&((m.t=J)!=null?l.style.setProperty("border",J):l.style.removeProperty("border")),f!==m.a&&((m.a=f)!=null?a.style.setProperty("background",f):a.style.removeProperty("background")),rt!==m.o&&ut(u,m.o=rt),It!==m.i&&$t(h,"href",m.i=It),tt!==m.n&&((m.n=tt)!=null?c.style.setProperty("background",tt):c.style.removeProperty("background")),Lt!==m.s&&ut(g,m.s=Lt),dt!==m.h&&ut(w,m.h=dt),Tt!==m.r&&ut(k,m.r=Tt),At!==m.d&&ut(x,m.d=At),Ot!==m.l&&ut(D,m.l=Ot),pe!==m.u&&ut(R,m.u=pe),me!==m.c&&ut(F,m.c=me),de!==m.w&&ut(L,m.w=de),Gt!==m.m&&ut(E,m.m=Gt),Kt!==m.f&&(E.innerHTML=m.f=Kt),Yt!==m.y&&ut(G,m.y=Yt),Jt!==m.g&&((m.g=Jt)!=null?V.style.setProperty("background",Jt):V.style.removeProperty("background")),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),l})()}function Iu(){const[t]=jr(),[e,n]=ul({}),i=X(()=>{const o=Object.values(e),l=o.length,a=o.filter(u=>u.success).length,s=l-a;return{total:l,passed:a,failed:s}}),r=Gi(()=>t.t,(o,l)=>l===void 0?!0:Array.isArray(l)?!!o.includes(l[0]??""):o.includes(l));return(()=>{var o=bu(),l=o.firstChild,a=l.nextSibling,s=a.firstChild,u=s.nextSibling,h=u.firstChild;h.firstChild;var c=h.nextSibling;c.firstChild;var d=c.nextSibling;d.firstChild;var p=a.nextSibling;return o.style.setProperty("padding","20px"),o.style.setProperty("font-family","system-ui, -apple-system, sans-serif"),o.style.setProperty("max-width","1400px"),o.style.setProperty("margin","0 auto"),a.style.setProperty("margin-bottom","20px"),a.style.setProperty("padding","16px"),a.style.setProperty("background","#f5f5f5"),a.style.setProperty("border-radius","8px"),s.style.setProperty("margin","0 0 10px 0"),u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),U(h,()=>i().total,null),c.style.setProperty("color","green"),U(c,()=>i().passed,null),d.style.setProperty("color","red"),U(d,()=>i().failed,null),p.style.setProperty("display","grid"),p.style.setProperty("gap","20px"),U(p,z(ie,{get each(){return Object.entries(cl)},children:([g,y])=>z(Nt,{get when(){return r(g)},get children(){return z(xu,Xn(y,{title:g,onResult:S=>n(g,S)}))}})})),o})()}const[rn,wu]=wt(".");window.setBase=wu;window.base=rn;const yu=()=>(ln(()=>console.log("import.meta.env.BASE_URL is whyyyyy","./",rn())),z(rl,{get base(){return rn()},get children(){return z(Jr,{path:"/",component:Iu})}}));br(()=>z(yu,{}),document.getElementById("root"));
