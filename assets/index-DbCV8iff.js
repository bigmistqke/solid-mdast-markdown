(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Hn=(t,e)=>t===e,bt=Symbol("solid-proxy"),We=Symbol("solid-track"),xe={equals:Hn};let Vn=Jn;const It=1,we=2,Un={owned:null,cleanups:null,context:null,owner:null};var U=null;let De=null,Yi=null,Q=null,lt=null,wt=null,Ee=0;function ee(t,e){const n=Q,i=U,r=t.length===0,a=e===void 0?i:e,l=r?Un:{owned:null,cleanups:null,context:a?a.context:null,owner:a},o=r?t:()=>t(()=>ct(()=>Le(l)));U=l,Q=null;try{return zt(o,!0)}finally{Q=n,U=i}}function Et(t,e){e=e?Object.assign({},xe,e):xe;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),Yn(n,r));return[Kn.bind(n),i]}function at(t,e,n){const i=Fe(t,e,!1,It);Wt(i)}function rn(t,e,n){Vn=nr;const i=Fe(t,e,!1,It);i.user=!0,wt?wt.push(i):Wt(i)}function Z(t,e,n){n=n?Object.assign({},xe,n):xe;const i=Fe(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Wt(i),Kn.bind(i)}function Ji(t,e=Hn,n){const i=new Map,r=Fe(a=>{const l=t();for(const[o,s]of i.entries())if(e(o,l)!==e(o,a))for(const u of s.values())u.state=It,u.pure?lt.push(u):wt.push(u);return l},void 0,!0,It);return Wt(r),a=>{const l=Q;if(l){let o;(o=i.get(a))?o.add(l):i.set(a,o=new Set([l])),_e(()=>{o.delete(l),!o.size&&i.delete(a)})}return e(a,r.value)}}function Wn(t){return zt(t,!1)}function ct(t){if(Q===null)return t();const e=Q;Q=null;try{return t()}finally{Q=e}}function ln(t,e,n){const i=Array.isArray(t);let r,a=n&&n.defer;return l=>{let o;if(i){o=Array(t.length);for(let u=0;u<t.length;u++)o[u]=t[u]()}else o=t();if(a)return a=!1,l;const s=ct(()=>e(o,r,l));return r=o,s}}function Xi(t){rn(()=>ct(t))}function _e(t){return U===null||(U.cleanups===null?U.cleanups=[t]:U.cleanups.push(t)),t}function Qe(){return Q}function Qn(){return U}function Gn(t,e){const n=U,i=Q;U=t,Q=null;try{return zt(e,!0)}catch(r){on(r)}finally{U=n,Q=i}}function Zi(t){const e=Q,n=U;return Promise.resolve().then(()=>{Q=e,U=n;let i;return zt(t,!1),Q=U=null,i?i.done:void 0})}function se(t,e){const n=Symbol("context");return{id:n,Provider:rr(n),defaultValue:t}}function ue(t){return U&&U.context&&U.context[t.id]!==void 0?U.context[t.id]:t.defaultValue}function an(t){const e=Z(t),n=Z(()=>Ge(e()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function Kn(){if(this.sources&&this.state)if(this.state===It)Wt(this);else{const t=lt;lt=null,zt(()=>ye(this),!1),lt=t}if(Q){const t=this.observers?this.observers.length:0;Q.sources?(Q.sources.push(this),Q.sourceSlots.push(t)):(Q.sources=[this],Q.sourceSlots=[t]),this.observers?(this.observers.push(Q),this.observerSlots.push(Q.sources.length-1)):(this.observers=[Q],this.observerSlots=[Q.sources.length-1])}return this.value}function Yn(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&zt(()=>{for(let r=0;r<t.observers.length;r+=1){const a=t.observers[r],l=De&&De.running;l&&De.disposed.has(a),(l?!a.tState:!a.state)&&(a.pure?lt.push(a):wt.push(a),a.observers&&Xn(a)),l||(a.state=It)}if(lt.length>1e6)throw lt=[],new Error},!1)),e}function Wt(t){if(!t.fn)return;Le(t);const e=Ee;tr(t,t.value,e)}function tr(t,e,n){let i;const r=U,a=Q;Q=U=t;try{i=t.fn(e)}catch(l){return t.pure&&(t.state=It,t.owned&&t.owned.forEach(Le),t.owned=null),t.updatedAt=n+1,on(l)}finally{Q=a,U=r}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Yn(t,i):t.value=i,t.updatedAt=n)}function Fe(t,e,n,i=It,r){const a={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:U,context:U?U.context:null,pure:n};return U===null||U!==Un&&(U.owned?U.owned.push(a):U.owned=[a]),a}function Ie(t){if(t.state===0)return;if(t.state===we)return ye(t);if(t.suspense&&ct(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Ee);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===It)Wt(t);else if(t.state===we){const i=lt;lt=null,zt(()=>ye(t,e[0]),!1),lt=i}}function zt(t,e){if(lt)return t();let n=!1;e||(lt=[]),wt?n=!0:wt=[],Ee++;try{const i=t();return er(n),i}catch(i){n||(wt=null),lt=null,on(i)}}function er(t){if(lt&&(Jn(lt),lt=null),t)return;const e=wt;wt=null,e.length&&zt(()=>Vn(e),!1)}function Jn(t){for(let e=0;e<t.length;e++)Ie(t[e])}function nr(t){let e,n=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[n++]=i:Ie(i)}for(e=0;e<n;e++)Ie(t[e])}function ye(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const r=i.state;r===It?i!==e&&(!i.updatedAt||i.updatedAt<Ee)&&Ie(i):r===we&&ye(i,e)}}}function Xn(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=we,n.pure?lt.push(n):wt.push(n),n.observers&&Xn(n))}}function Le(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),r=n.observers;if(r&&r.length){const a=r.pop(),l=n.observerSlots.pop();i<r.length&&(a.sourceSlots[l]=i,r[i]=a,n.observerSlots[i]=l)}}if(t.owned){for(e=t.owned.length-1;e>=0;e--)Le(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function ir(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function on(t,e=U){throw ir(t)}function Ge(t){if(typeof t=="function"&&!t.length)return Ge(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const i=Ge(t[n]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function rr(t,e){return function(i){let r;return at(()=>r=ct(()=>(U.context={...U.context,[t]:i.value},an(()=>i.children))),void 0),r}}const lr=Symbol("fallback");function fn(t){for(let e=0;e<t.length;e++)t[e]()}function ar(t,e,n={}){let i=[],r=[],a=[],l=0,o=e.length>1?[]:null;return _e(()=>fn(a)),()=>{let s=t()||[],u,c;return s[We],ct(()=>{let m=s.length,d,g,I,S,w,C,y,P,z;if(m===0)l!==0&&(fn(a),a=[],i=[],r=[],l=0,o&&(o=[])),n.fallback&&(i=[lr],r[0]=ee(b=>(a[0]=b,n.fallback())),l=1);else if(l===0){for(r=new Array(m),c=0;c<m;c++)i[c]=s[c],r[c]=ee(h);l=m}else{for(I=new Array(m),S=new Array(m),o&&(w=new Array(m)),C=0,y=Math.min(l,m);C<y&&i[C]===s[C];C++);for(y=l-1,P=m-1;y>=C&&P>=C&&i[y]===s[P];y--,P--)I[P]=r[y],S[P]=a[y],o&&(w[P]=o[y]);for(d=new Map,g=new Array(P+1),c=P;c>=C;c--)z=s[c],u=d.get(z),g[c]=u===void 0?-1:u,d.set(z,c);for(u=C;u<=y;u++)z=i[u],c=d.get(z),c!==void 0&&c!==-1?(I[c]=r[u],S[c]=a[u],o&&(w[c]=o[u]),c=g[c],d.set(z,c)):a[u]();for(c=C;c<m;c++)c in I?(r[c]=I[c],a[c]=S[c],o&&(o[c]=w[c],o[c](c))):r[c]=ee(h);r=r.slice(0,l=m),i=s.slice(0)}return r});function h(m){if(a[c]=m,o){const[d,g]=Et(c);return o[c]=g,e(s[c],d)}return e(s[c])}}}function L(t,e){return ct(()=>t(e||{}))}function me(){return!0}const Ke={get(t,e,n){return e===bt?n:t.get(e)},has(t,e){return e===bt?!0:t.has(e)},set:me,deleteProperty:me,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:me,deleteProperty:me}},ownKeys(t){return t.keys()}};function Me(t){return(t=typeof t=="function"?t():t)?t:{}}function or(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function Zn(...t){let e=!1;for(let l=0;l<t.length;l++){const o=t[l];e=e||!!o&&bt in o,t[l]=typeof o=="function"?(e=!0,Z(o)):o}if(e)return new Proxy({get(l){for(let o=t.length-1;o>=0;o--){const s=Me(t[o])[l];if(s!==void 0)return s}},has(l){for(let o=t.length-1;o>=0;o--)if(l in Me(t[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<t.length;o++)l.push(...Object.keys(Me(t[o])));return[...new Set(l)]}},Ke);const n={},i=Object.create(null);for(let l=t.length-1;l>=0;l--){const o=t[l];if(!o)continue;const s=Object.getOwnPropertyNames(o);for(let u=s.length-1;u>=0;u--){const c=s[u];if(c==="__proto__"||c==="constructor")continue;const h=Object.getOwnPropertyDescriptor(o,c);if(!i[c])i[c]=h.get?{enumerable:!0,configurable:!0,get:or.bind(n[c]=[h.get.bind(o)])}:h.value!==void 0?h:void 0;else{const m=n[c];m&&(h.get?m.push(h.get.bind(o)):h.value!==void 0&&m.push(()=>h.value))}}}const r={},a=Object.keys(i);for(let l=a.length-1;l>=0;l--){const o=a[l],s=i[o];s&&s.get?Object.defineProperty(r,o,s):r[o]=s?s.value:void 0}return r}function ti(t,...e){if(bt in t){const r=new Set(e.length>1?e.flat():e[0]),a=e.map(l=>new Proxy({get(o){return l.includes(o)?t[o]:void 0},has(o){return l.includes(o)&&o in t},keys(){return l.filter(o=>o in t)}},Ke));return a.push(new Proxy({get(l){return r.has(l)?void 0:t[l]},has(l){return r.has(l)?!1:l in t},keys(){return Object.keys(t).filter(l=>!r.has(l))}},Ke)),a}const n={},i=e.map(()=>({}));for(const r of Object.getOwnPropertyNames(t)){const a=Object.getOwnPropertyDescriptor(t,r),l=!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable;let o=!1,s=0;for(const u of e)u.includes(r)&&(o=!0,l?i[s][r]=a.value:Object.defineProperty(i[s],r,a)),++s;o||(l?n[r]=a.value:Object.defineProperty(n,r,a))}return[...i,n]}const sr=t=>`Stale read from <${t}>.`;function ne(t){const e="fallback"in t&&{fallback:()=>t.fallback};return Z(ar(()=>t.each,t.children,e||void 0))}function _t(t){const e=t.keyed,n=Z(()=>t.when,void 0,{equals:(i,r)=>e?i===r:!i==!r});return Z(()=>{const i=n();if(i){const r=t.children;return typeof r=="function"&&r.length>0?ct(()=>r(e?i:()=>{if(!ct(n))throw sr("Show");return t.when})):r}return t.fallback},void 0,void 0)}const ur=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],hr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ur]),cr=new Set(["innerHTML","textContent","innerText","children"]),dr=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),pr=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function mr(t,e){const n=pr[t];return typeof n=="object"?n[e]?n.$:void 0:n}const fr=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),gr=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),kr={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function br(t,e,n){let i=n.length,r=e.length,a=i,l=0,o=0,s=e[r-1].nextSibling,u=null;for(;l<r||o<a;){if(e[l]===n[o]){l++,o++;continue}for(;e[r-1]===n[a-1];)r--,a--;if(r===l){const c=a<i?o?n[o-1].nextSibling:n[a-o]:s;for(;o<a;)t.insertBefore(n[o++],c)}else if(a===o)for(;l<r;)(!u||!u.has(e[l]))&&e[l].remove(),l++;else if(e[l]===n[a-1]&&n[o]===e[r-1]){const c=e[--r].nextSibling;t.insertBefore(n[o++],e[l++].nextSibling),t.insertBefore(n[--a],c),e[r]=n[a]}else{if(!u){u=new Map;let h=o;for(;h<a;)u.set(n[h],h++)}const c=u.get(e[l]);if(c!=null)if(o<c&&c<a){let h=l,m=1,d;for(;++h<r&&h<a&&!((d=u.get(e[h]))==null||d!==c+m);)m++;if(m>c-o){const g=e[l];for(;o<c;)t.insertBefore(n[o++],g)}else t.replaceChild(n[o++],e[l++])}else l++;else e[l++].remove()}}}const gn="_$DX_DELEGATE";function xr(t,e,n,i={}){let r;return ee(a=>{r=a,e===document?t():H(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{r(),e.textContent=""}}function X(t,e,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=t,l.content.firstChild},a=()=>(i||(i=r())).cloneNode(!0);return a.cloneNode=a,a}function ei(t,e=window.document){const n=e[gn]||(e[gn]=new Set);for(let i=0,r=t.length;i<r;i++){const a=t[i];n.has(a)||(n.add(a),e.addEventListener(a,Pr))}}function Nt(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function wr(t,e,n,i){i==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,i)}function it(t,e){e==null?t.removeAttribute("class"):t.className=e}function Ir(t,e,n,i){if(i)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const r=n[0];t.addEventListener(e,n[0]=a=>r.call(t,n[1],a))}else t.addEventListener(e,n)}function yr(t,e,n={}){const i=Object.keys(e||{}),r=Object.keys(n);let a,l;for(a=0,l=r.length;a<l;a++){const o=r[a];!o||o==="undefined"||e[o]||(kn(t,o,!1),delete n[o])}for(a=0,l=i.length;a<l;a++){const o=i[a],s=!!e[o];!o||o==="undefined"||n[o]===s||!s||(kn(t,o,!0),n[o]=s)}return n}function Sr(t,e,n){if(!e)return n?Nt(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let r,a;for(a in n)e[a]==null&&i.removeProperty(a),delete n[a];for(a in e)r=e[a],r!==n[a]&&(i.setProperty(a,r),n[a]=r);return n}function Tr(t,e={},n,i){const r={};return at(()=>r.children=le(t,e.children,r.children)),at(()=>typeof e.ref=="function"?ni(e.ref,t):e.ref=t),at(()=>Cr(t,e,n,!0,r,!0)),r}function ni(t,e,n){return ct(()=>t(e,n))}function H(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return le(t,e,i,n);at(r=>le(t,e(),r,n),i)}function Cr(t,e,n,i,r={},a=!1){e||(e={});for(const l in r)if(!(l in e)){if(l==="children")continue;r[l]=bn(t,l,null,r[l],n,a)}for(const l in e){if(l==="children")continue;const o=e[l];r[l]=bn(t,l,o,r[l],n,a)}}function Ar(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function kn(t,e,n){const i=e.trim().split(/\s+/);for(let r=0,a=i.length;r<a;r++)t.classList.toggle(i[r],n)}function bn(t,e,n,i,r,a){let l,o,s,u,c;if(e==="style")return Sr(t,n,i);if(e==="classList")return yr(t,n,i);if(n===i)return i;if(e==="ref")a||n(t);else if(e.slice(0,3)==="on:"){const h=e.slice(3);i&&t.removeEventListener(h,i),n&&t.addEventListener(h,n)}else if(e.slice(0,10)==="oncapture:"){const h=e.slice(10);i&&t.removeEventListener(h,i,!0),n&&t.addEventListener(h,n,!0)}else if(e.slice(0,2)==="on"){const h=e.slice(2).toLowerCase(),m=fr.has(h);if(!m&&i){const d=Array.isArray(i)?i[0]:i;t.removeEventListener(h,d)}(m||n)&&(Ir(t,h,n,m),m&&ei([h]))}else if(e.slice(0,5)==="attr:")Nt(t,e.slice(5),n);else if((c=e.slice(0,5)==="prop:")||(s=cr.has(e))||!r&&((u=mr(e,t.tagName))||(o=hr.has(e)))||(l=t.nodeName.includes("-")))c&&(e=e.slice(5),o=!0),e==="class"||e==="className"?it(t,n):l&&!o&&!s?t[Ar(e)]=n:t[u||e]=n;else{const h=r&&e.indexOf(":")>-1&&kr[e.split(":")[0]];h?wr(t,h,e,n):Nt(t,dr[e]||e,n)}return n}function Pr(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[e];if(i&&!n.disabled){const r=n[`${e}Data`];if(r!==void 0?i.call(n,r,t):i.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function le(t,e,n,i,r){for(;typeof n=="function";)n=n();if(e===n)return n;const a=typeof e,l=i!==void 0;if(t=l&&n[0]&&n[0].parentNode||t,a==="string"||a==="number")if(a==="number"&&(e=e.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==e&&(o.data=e):o=document.createTextNode(e),n=qt(t,n,i,o)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e;else if(e==null||a==="boolean")n=qt(t,n,i);else{if(a==="function")return at(()=>{let o=e();for(;typeof o=="function";)o=o();n=le(t,o,n,i)}),()=>n;if(Array.isArray(e)){const o=[],s=n&&Array.isArray(n);if(Ye(o,e,n,r))return at(()=>n=le(t,o,n,i,!0)),()=>n;if(o.length===0){if(n=qt(t,n,i),l)return n}else s?n.length===0?xn(t,o,i):br(t,n,o):(n&&qt(t),xn(t,o));n=o}else if(e.nodeType){if(Array.isArray(n)){if(l)return n=qt(t,n,i,e);qt(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function Ye(t,e,n,i){let r=!1;for(let a=0,l=e.length;a<l;a++){let o=e[a],s=n&&n[t.length],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)t.push(o);else if(Array.isArray(o))r=Ye(t,o,s)||r;else if(u==="function")if(i){for(;typeof o=="function";)o=o();r=Ye(t,Array.isArray(o)?o:[o],Array.isArray(s)?s:[s])||r}else t.push(o),r=!0;else{const c=String(o);s&&s.nodeType===3&&s.data===c?t.push(s):t.push(document.createTextNode(c))}}return r}function xn(t,e,n=null){for(let i=0,r=e.length;i<r;i++)t.insertBefore(e[i],n)}function qt(t,e,n,i){if(n===void 0)return t.textContent="";const r=i||document.createTextNode("");if(e.length){let a=!1;for(let l=e.length-1;l>=0;l--){const o=e[l];if(r!==o){const s=o.parentNode===t;!a&&!l?s?t.replaceChild(r,o):t.insertBefore(r,n):s&&o.remove()}else a=!0}}else t.insertBefore(r,n);return[r]}const Er=!1,_r="http://www.w3.org/2000/svg";function Fr(t,e=!1){return e?document.createElementNS(_r,t):document.createElement(t)}function $e(t){const[e,n]=ti(t,["component"]),i=Z(()=>e.component);return Z(()=>{const r=i();switch(typeof r){case"function":return ct(()=>r(n));case"string":const a=gr.has(r),l=Fr(r,a);return Tr(l,n,a),l}})}function ii(){let t=new Set;function e(r){return t.add(r),()=>t.delete(r)}let n=!1;function i(r,a){if(n)return!(n=!1);const l={to:r,options:a,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of t)o.listener({...l,from:o.location,retry:s=>{s&&(n=!0),o.navigate(r,{...a,resolve:!1})}});return!l.defaultPrevented}return{subscribe:e,confirm:i}}let Je;function sn(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Je=window.history.state._depth}sn();function Lr(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function vr(t,e){let n=!1;return()=>{const i=Je;sn();const r=i==null?null:Je-i;if(n){n=!1;return}r&&e(r)?(n=!0,window.history.go(-r)):t()}}const zr=/^(?:[a-z0-9]+:)?\/\//i,Or=/^\/+|(\/)\/+$/g,ri="http://sr";function ie(t,e=!1){const n=t.replace(Or,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function ge(t,e,n){if(zr.test(e))return;const i=ie(t),r=n&&ie(n);let a="";return!r||e.startsWith("/")?a=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?a=i+r:a=r,(a||"/")+ie(e,!a)}function Dr(t,e){if(t==null)throw new Error(e);return t}function Mr(t,e){return ie(t).replace(/\/*(\*.*)?$/g,"")+ie(e)}function li(t){const e={};return t.searchParams.forEach((n,i)=>{i in e?Array.isArray(e[i])?e[i].push(n):e[i]=[e[i],n]:e[i]=n}),e}function $r(t,e,n){const[i,r]=t.split("/*",2),a=i.split("/").filter(Boolean),l=a.length;return o=>{const s=o.split("/").filter(Boolean),u=s.length-l;if(u<0||u>0&&r===void 0&&!e)return null;const c={path:l?"":"/",params:{}},h=m=>n===void 0?void 0:n[m];for(let m=0;m<l;m++){const d=a[m],g=d[0]===":",I=g?s[m]:s[m].toLowerCase(),S=g?d.slice(1):d.toLowerCase();if(g&&Re(I,h(S)))c.params[S]=I;else if(g||!Re(I,S))return null;c.path+=`/${I}`}if(r){const m=u?s.slice(-u).join("/"):"";if(Re(m,h(r)))c.params[r]=m;else return null}return c}}function Re(t,e){const n=i=>i===t;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function Rr(t){const[e,n]=t.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((r,a)=>r+(a.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function ai(t){const e=new Map,n=Qn();return new Proxy({},{get(i,r){return e.has(r)||Gn(n,()=>e.set(r,Z(()=>t()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())},has(i,r){return r in t()}})}function Nr(t,e){const n=new URLSearchParams(t);Object.entries(e).forEach(([r,a])=>{a==null||a===""||a instanceof Array&&!a.length?n.delete(r):a instanceof Array?(n.delete(r),a.forEach(l=>{n.append(r,String(l))})):n.set(r,String(a))});const i=n.toString();return i?`?${i}`:""}function oi(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),i=t.slice(e.index+e[0].length);const r=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=e[1]),i=i.slice(e[0].length);return oi(i).reduce((a,l)=>[...a,...r.map(o=>o+l)],[])}const Br=100,si=se(),ui=se(),hi=()=>Dr(ue(si),"<A> and 'use' router primitives can be only used inside a Route."),jr=()=>hi().navigatorFactory(),qr=()=>hi().location,Hr=()=>{const t=qr(),e=jr(),n=(i,r)=>{const a=ct(()=>Nr(t.search,i)+t.hash);e(a,{scroll:!1,resolve:!1,...r})};return[t.query,n]};function Vr(t,e=""){const{component:n,preload:i,load:r,children:a,info:l}=t,o=!a||Array.isArray(a)&&!a.length,s={key:t,component:n,preload:i||r,info:l};return ci(t.path).reduce((u,c)=>{for(const h of oi(c)){const m=Mr(e,h);let d=o?m:m.split("/*",1)[0];d=d.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),u.push({...s,originalPath:c,pattern:d,matcher:$r(d,!o,t.matchFilters)})}return u},[])}function Ur(t,e=0){return{routes:t,score:Rr(t[t.length-1])*1e4-e,matcher(n){const i=[];for(let r=t.length-1;r>=0;r--){const a=t[r],l=a.matcher(n);if(!l)return null;i.unshift({...l,route:a})}return i}}}function ci(t){return Array.isArray(t)?t:[t]}function di(t,e="",n=[],i=[]){const r=ci(t);for(let a=0,l=r.length;a<l;a++){const o=r[a];if(o&&typeof o=="object"){o.hasOwnProperty("path")||(o.path="");const s=Vr(o,e);for(const u of s){n.push(u);const c=Array.isArray(o.children)&&o.children.length===0;if(o.children&&!c)di(o.children,u.pattern,n,i);else{const h=Ur([...n],i.length);i.push(h)}n.pop()}}}return n.length?i:i.sort((a,l)=>l.score-a.score)}function Ne(t,e){for(let n=0,i=t.length;n<i;n++){const r=t[n].matcher(e);if(r)return r}return[]}function Wr(t,e,n){const i=new URL(ri),r=Z(c=>{const h=t();try{return new URL(h,i)}catch{return console.error(`Invalid path ${h}`),c}},i,{equals:(c,h)=>c.href===h.href}),a=Z(()=>r().pathname),l=Z(()=>r().search,!0),o=Z(()=>r().hash),s=()=>"",u=ln(l,()=>li(r()));return{get pathname(){return a()},get search(){return l()},get hash(){return o()},get state(){return e()},get key(){return s()},query:n?n(u):ai(u)}}let Rt;function Qr(){return Rt}function Gr(t,e,n,i={}){const{signal:[r,a],utils:l={}}=t,o=l.parsePath||(F=>F),s=l.renderPath||(F=>F),u=l.beforeLeave||ii(),c=ge("",i.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&a({value:c,replace:!0,scroll:!1});const[h,m]=Et(!1);let d;const g=(F,E)=>{E.value===I()&&E.state===w()||(d===void 0&&m(!0),Rt=F,d=E,Zi(()=>{d===E&&(S(d.value),C(d.state),z[1](B=>B.filter(G=>G.pending)))}).finally(()=>{d===E&&Wn(()=>{Rt=void 0,F==="navigate"&&A(d),m(!1),d=void 0})}))},[I,S]=Et(r().value),[w,C]=Et(r().state),y=Wr(I,w,l.queryWrapper),P=[],z=Et([]),b=Z(()=>typeof i.transformUrl=="function"?Ne(e(),i.transformUrl(y.pathname)):Ne(e(),y.pathname)),M=()=>{const F=b(),E={};for(let B=0;B<F.length;B++)Object.assign(E,F[B].params);return E},q=l.paramsWrapper?l.paramsWrapper(M,e):ai(M),R={pattern:c,path:()=>c,outlet:()=>null,resolvePath(F){return ge(c,F)}};return at(ln(r,F=>g("native",F),{defer:!0})),{base:R,location:y,params:q,isRouting:h,renderPath:s,parsePath:o,navigatorFactory:_,matches:b,beforeLeave:u,preloadRoute:V,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:z};function k(F,E,B){ct(()=>{if(typeof E=="number"){E&&(l.go?l.go(E):console.warn("Router integration does not support relative routing"));return}const G=!E||E[0]==="?",{replace:W,resolve:et,scroll:p,state:D}={replace:!1,resolve:!G,scroll:!0,...B},K=et?F.resolvePath(E):ge(G&&y.pathname||"",E);if(K===void 0)throw new Error(`Path '${E}' is not a routable path`);if(P.length>=Br)throw new Error("Too many redirects");const f=I();(K!==f||D!==w())&&(Er||u.confirm(K,B)&&(P.push({value:f,replace:W,scroll:p,state:w()}),g("navigate",{value:K,state:D})))})}function _(F){return F=F||ue(ui)||R,(E,B)=>k(F,E,B)}function A(F){const E=P[0];E&&(a({...F,replace:E.replace,scroll:E.scroll}),P.length=0)}function V(F,E){const B=Ne(e(),F.pathname),G=Rt;Rt="preload";for(let W in B){const{route:et,params:p}=B[W];et.component&&et.component.preload&&et.component.preload();const{preload:D}=et;E&&D&&Gn(n(),()=>D({params:p,location:{pathname:F.pathname,search:F.search,hash:F.hash,query:li(F),state:null,key:""},intent:"preload"}))}Rt=G}}function Kr(t,e,n,i){const{base:r,location:a,params:l}=t,{pattern:o,component:s,preload:u}=i().route,c=Z(()=>i().path);s&&s.preload&&s.preload();const h=u?u({params:l,location:a,intent:Rt||"initial"}):void 0;return{parent:e,pattern:o,path:c,outlet:()=>s?L(s,{params:l,location:a,data:h,get children(){return n()}}):n(),resolvePath(d){return ge(r.path(),d,c())}}}const Yr=t=>e=>{const{base:n}=e,i=an(()=>e.children),r=Z(()=>di(i(),e.base||""));let a;const l=Gr(t,r,()=>a,{base:n,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return t.create&&t.create(l),L(si.Provider,{value:l,get children(){return L(Jr,{routerState:l,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[Z(()=>(a=Qn())&&null),L(Xr,{routerState:l,get branches(){return r()}})]}})}})};function Jr(t){const e=t.routerState.location,n=t.routerState.params,i=Z(()=>t.preload&&ct(()=>{t.preload({params:n,location:e,intent:Qr()||"initial"})}));return L(_t,{get when(){return t.root},keyed:!0,get fallback(){return t.children},children:r=>L(r,{params:n,location:e,get data(){return i()},get children(){return t.children}})})}function Xr(t){const e=[];let n;const i=Z(ln(t.routerState.matches,(r,a,l)=>{let o=a&&r.length===a.length;const s=[];for(let u=0,c=r.length;u<c;u++){const h=a&&a[u],m=r[u];l&&h&&m.route.key===h.route.key?s[u]=l[u]:(o=!1,e[u]&&e[u](),ee(d=>{e[u]=d,s[u]=Kr(t.routerState,s[u-1]||t.routerState.base,wn(()=>i()[u+1]),()=>{const g=t.routerState.matches();return g[u]??g[0]})}))}return e.splice(r.length).forEach(u=>u()),l&&o?l:(n=s[0],s)}));return wn(()=>i()&&n)()}const wn=t=>()=>L(_t,{get when(){return t()},keyed:!0,children:e=>L(ui.Provider,{value:e,get children(){return e.outlet()}})}),Zr=t=>{const e=an(()=>t.children);return Zn(t,{get children(){return e()}})};function tl([t,e],n,i){return[t,i?r=>e(i(r)):e]}function el(t){let e=!1;const n=r=>typeof r=="string"?{value:r}:r,i=tl(Et(n(t.get()),{equals:(r,a)=>r.value===a.value&&r.state===a.state}),void 0,r=>(!e&&t.set(r),r));return t.init&&_e(t.init((r=t.get())=>{e=!0,i[1](n(r)),e=!1})),Yr({signal:i,create:t.create,utils:t.utils})}function nl(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function il(t,e){const n=t&&document.getElementById(t);n?n.scrollIntoView():e&&window.scrollTo(0,0)}const rl=new Map;function ll(t=!0,e=!1,n="/_server",i){return r=>{const a=r.base.path(),l=r.navigatorFactory(r.base);let o,s;function u(I){return I.namespaceURI==="http://www.w3.org/2000/svg"}function c(I){if(I.defaultPrevented||I.button!==0||I.metaKey||I.altKey||I.ctrlKey||I.shiftKey)return;const S=I.composedPath().find(b=>b instanceof Node&&b.nodeName.toUpperCase()==="A");if(!S||e&&!S.hasAttribute("link"))return;const w=u(S),C=w?S.href.baseVal:S.href;if((w?S.target.baseVal:S.target)||!C&&!S.hasAttribute("state"))return;const P=(S.getAttribute("rel")||"").split(/\s+/);if(S.hasAttribute("download")||P&&P.includes("external"))return;const z=w?new URL(C,document.baseURI):new URL(C);if(!(z.origin!==window.location.origin||a&&z.pathname&&!z.pathname.toLowerCase().startsWith(a.toLowerCase())))return[S,z]}function h(I){const S=c(I);if(!S)return;const[w,C]=S,y=r.parsePath(C.pathname+C.search+C.hash),P=w.getAttribute("state");I.preventDefault(),l(y,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:P?JSON.parse(P):void 0})}function m(I){const S=c(I);if(!S)return;const[w,C]=S;i&&(C.pathname=i(C.pathname)),r.preloadRoute(C,w.getAttribute("preload")!=="false")}function d(I){clearTimeout(o);const S=c(I);if(!S)return s=null;const[w,C]=S;s!==w&&(i&&(C.pathname=i(C.pathname)),o=setTimeout(()=>{r.preloadRoute(C,w.getAttribute("preload")!=="false"),s=w},20))}function g(I){if(I.defaultPrevented)return;let S=I.submitter&&I.submitter.hasAttribute("formaction")?I.submitter.getAttribute("formaction"):I.target.getAttribute("action");if(!S)return;if(!S.startsWith("https://action/")){const C=new URL(S,ri);if(S=r.parsePath(C.pathname+C.search),!S.startsWith(n))return}if(I.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=rl.get(S);if(w){I.preventDefault();const C=new FormData(I.target,I.submitter);w.call({r,f:I.target},I.target.enctype==="multipart/form-data"?C:new URLSearchParams(C))}}ei(["click","submit"]),document.addEventListener("click",h),t&&(document.addEventListener("mousemove",d,{passive:!0}),document.addEventListener("focusin",m,{passive:!0}),document.addEventListener("touchstart",m,{passive:!0})),document.addEventListener("submit",g),_e(()=>{document.removeEventListener("click",h),t&&(document.removeEventListener("mousemove",d),document.removeEventListener("focusin",m),document.removeEventListener("touchstart",m)),document.removeEventListener("submit",g)})}}function al(t){const e=()=>{const i=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:i+window.location.hash,state:r}},n=ii();return el({get:e,set({value:i,replace:r,scroll:a,state:l}){r?window.history.replaceState(Lr(l),"",i):window.history.pushState(l,"",i),il(decodeURIComponent(window.location.hash.slice(1)),a),sn()},init:i=>nl(window,"popstate",vr(i,r=>{if(r)return!n.confirm(r);{const a=e();return!n.confirm(a.value,{state:a.state})}})),create:ll(t.preload,t.explicitLinks,t.actionBase,t.transformUrl),utils:{go:i=>window.history.go(i),beforeLeave:n}})(t)}const Xe=Symbol("store-raw"),Ut=Symbol("store-node"),Pt=Symbol("store-has"),pi=Symbol("store-self");function mi(t){let e=t[bt];if(!e&&(Object.defineProperty(t,bt,{value:e=new Proxy(t,ul)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let r=0,a=n.length;r<a;r++){const l=n[r];i[l].get&&Object.defineProperty(t,l,{enumerable:i[l].enumerable,get:i[l].get.bind(e)})}}return e}function Se(t){let e;return t!=null&&typeof t=="object"&&(t[bt]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function ae(t,e=new Set){let n,i,r,a;if(n=t!=null&&t[Xe])return n;if(!Se(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let l=0,o=t.length;l<o;l++)r=t[l],(i=ae(r,e))!==r&&(t[l]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const l=Object.keys(t),o=Object.getOwnPropertyDescriptors(t);for(let s=0,u=l.length;s<u;s++)a=l[s],!o[a].get&&(r=t[a],(i=ae(r,e))!==r&&(t[a]=i))}return t}function Te(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function oe(t,e,n){if(t[e])return t[e];const[i,r]=Et(n,{equals:!1,internal:!0});return i.$=r,t[e]=i}function ol(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===bt||e===Ut||(delete n.value,delete n.writable,n.get=()=>t[bt][e]),n}function fi(t){Qe()&&oe(Te(t,Ut),pi)()}function sl(t){return fi(t),Reflect.ownKeys(t)}const ul={get(t,e,n){if(e===Xe)return t;if(e===bt)return n;if(e===We)return fi(t),n;const i=Te(t,Ut),r=i[e];let a=r?r():t[e];if(e===Ut||e===Pt||e==="__proto__")return a;if(!r){const l=Object.getOwnPropertyDescriptor(t,e);Qe()&&(typeof a!="function"||t.hasOwnProperty(e))&&!(l&&l.get)&&(a=oe(i,e,a)())}return Se(a)?mi(a):a},has(t,e){return e===Xe||e===bt||e===We||e===Ut||e===Pt||e==="__proto__"?!0:(Qe()&&oe(Te(t,Pt),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:sl,getOwnPropertyDescriptor:ol};function Ce(t,e,n,i=!1){if(!i&&t[e]===n)return;const r=t[e],a=t.length;n===void 0?(delete t[e],t[Pt]&&t[Pt][e]&&r!==void 0&&t[Pt][e].$()):(t[e]=n,t[Pt]&&t[Pt][e]&&r===void 0&&t[Pt][e].$());let l=Te(t,Ut),o;if((o=oe(l,e,r))&&o.$(()=>n),Array.isArray(t)&&t.length!==a){for(let s=t.length;s<a;s++)(o=l[s])&&o.$();(o=oe(l,"length",a))&&o.$(t.length)}(o=l[pi])&&o.$()}function gi(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const r=n[i];Ce(t,r,e[r])}}function hl(t,e){if(typeof e=="function"&&(e=e(t)),e=ae(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const r=e[n];t[n]!==r&&Ce(t,n,r)}Ce(t,"length",i)}else gi(t,e)}function te(t,e,n=[]){let i,r=t;if(e.length>1){i=e.shift();const l=typeof i,o=Array.isArray(t);if(Array.isArray(i)){for(let s=0;s<i.length;s++)te(t,[i[s]].concat(e),n);return}else if(o&&l==="function"){for(let s=0;s<t.length;s++)i(t[s],s)&&te(t,[s].concat(e),n);return}else if(o&&l==="object"){const{from:s=0,to:u=t.length-1,by:c=1}=i;for(let h=s;h<=u;h+=c)te(t,[h].concat(e),n);return}else if(e.length>1){te(t[i],e,[i].concat(n));return}r=t[i],n=[i].concat(n)}let a=e[0];typeof a=="function"&&(a=a(r,n),a===r)||i===void 0&&a==null||(a=ae(a),i===void 0||Se(r)&&Se(a)&&!Array.isArray(a)?gi(r,a):Ce(t,i,a))}function cl(...[t,e]){const n=ae(t||{}),i=Array.isArray(n),r=mi(n);function a(...l){Wn(()=>{i&&l.length===1?hl(n,l[0]):te(n,l)})}return[r,a]}function ki(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=ki(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function In(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=ki(t))&&(i&&(i+=" "),i+=e);return i}const dl={"renders heading 1 with 1 asterisk prefix":{input:"# Heading 1",output:'<h1 data-hk="0-0-0-0-0-0-0-0-0" >Heading 1</h1>'},"renders heading 2 with 2 asterisks prefix":{input:"## Heading 2",output:'<h2 data-hk="0-0-0-0-0-0-0-0-0" >Heading 2</h2>'},"renders heading 3 with 3 asterisks prefix":{input:"### Heading 3",output:'<h3 data-hk="0-0-0-0-0-0-0-0-0" >Heading 3</h3>'},"renders heading 4 with 4 asterisks prefix":{input:"#### Heading 4",output:'<h4 data-hk="0-0-0-0-0-0-0-0-0" >Heading 4</h4>'},"renders heading 5 with 5 asterisks prefix":{input:"##### Heading 5",output:'<h5 data-hk="0-0-0-0-0-0-0-0-0" >Heading 5</h5>'},"renders heading 6 with 6 asterisks prefix":{input:"###### Heading 6",output:'<h6 data-hk="0-0-0-0-0-0-0-0-0" >Heading 6</h6>'},"renders heading 1 with = underline":{input:`Heading 1
=========`,output:'<h1 data-hk="0-0-0-0-0-0-0-0-0" >Heading 1</h1>'},"renders heading 2 with - underline":{input:`Heading 2
---------`,output:'<h2 data-hk="0-0-0-0-0-0-0-0-0" >Heading 2</h2>'},"renders a simple paragraph":{input:"This is a paragraph.",output:"<p>This is a paragraph.</p>"},"renders multiple paragraphs":{input:`First paragraph.

Second paragraph.`,output:"<p>First paragraph.</p><p>Second paragraph.</p>"},"renders italic text with asterisks":{input:"*italic*",output:"<p><em>italic</em></p>"},"renders italic text with underscores":{input:"_italic_",output:"<p><em>italic</em></p>"},"renders bold text with double asterisks":{input:"**bold**",output:"<p><strong>bold</strong></p>"},"renders bold text with double underscores":{input:"__bold__",output:"<p><strong>bold</strong></p>"},"renders emphasis within paragraph":{input:"This is *italic* and **bold** text.",output:"<p>This is <em>italic</em> and <strong>bold</strong> text.</p>"},"renders bullet list with dashes":{input:`- Item 1
- Item 2
- Item 3`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'},"renders bullet list with asterisks":{input:`* Item 1
* Item 2
* Item 3`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'},"renders bullet list with plus signs":{input:`+ Item 1
+ Item 2
+ Item 3`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'},"renders ordered list":{input:`1. First item
2. Second item
3. Third item`,output:'<ol data-hk="0-0-0-0-0-0-0-0-0" ><li>First item</li><li>Second item</li><li>Third item</li></ol>'},"renders ordered list with different starting numbers":{input:`5. Fifth item
6. Sixth item
7. Seventh item`,output:'<ol data-hk="0-0-0-0-0-0-0-0-0" ><li>Fifth item</li><li>Sixth item</li><li>Seventh item</li></ol>'},"renders inline code":{input:"`code`",output:"<p><code>code</code></p>"},"renders inline code within paragraph":{input:"Use `console.log()` to debug.",output:"<p>Use <code>console.log()</code> to debug.</p>"},"renders fenced code block":{input:"```\nconst x = 1;\nconsole.log(x);\n```",output:`<pre><code>const x = 1;
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
> 3. Third item`,output:'<blockquote><p>This blockquote contains a list:</p><ol data-hk="0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" ><li>First item</li><li>Second item</li><li>Third item</li></ol></blockquote>'},"renders horizontal rule with dashes":{input:"---",output:"<hr>"},"renders horizontal rule with asterisks":{input:"***",output:"<hr>"},"renders horizontal rule with underscores":{input:"___",output:"<hr>"},"handles backslash escapes":{input:"\\*not italic\\*",output:"<p>*not italic*</p>"},"handles escaped characters":{input:"\\# Not a header",output:"<p># Not a header</p>"},"handles HTML entities":{input:"&amp; &lt; &gt;",output:"<p>&amp; &lt; ></p>"},"handles special entities":{input:"&copy; &trade;",output:"<p>© ™</p>"},"handles soft line breaks":{input:`Line one
Line two`,output:`<p>Line one
Line two</p>`},"handles hard line breaks":{input:`Line one  
Line two`,output:"<p>Line one<br>Line two</p>"},"handles complex nested markdown":{input:`# Header

This is a **bold** paragraph with *italic* text and \`code\`.

- List item with [link](https://example.com)
- Another item

> Blockquote with **emphasis**`,output:'<h1 data-hk="0-0-0-0-0-0-0-0-0" >Header</h1><p>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code>code</code>.</p><ul data-hk="0-0-0-2-0-0-0-0-0" ><li>List item with <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a></li><li>Another item</li></ul><blockquote><p>Blockquote with <strong>emphasis</strong></p></blockquote>'},"renders deeply nested unordered lists":{input:`- Level 1
  - Level 2
    - Level 3
      - Level 4`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li>Level 1<ul data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>Level 2<ul data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>Level 3<ul data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>Level 4</li></ul></li></ul></li></ul></li></ul>'},"renders mixed nested lists (ordered and unordered)":{input:`1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`,output:'<ol data-hk="0-0-0-0-0-0-0-0-0" ><li>First ordered item<ul data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>Nested unordered item</li><li>Another nested item</li></ul></li><li>Second ordered item<ol data-hk="0-0-0-0-0-0-0-0-1-0-1-0-0-0-1-0-0-0-0-0-0" ><li>Nested ordered item</li><li>Another nested ordered item</li></ol></li></ol>'},"renders lists with multiple paragraphs in items":{input:`1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``,output:`<ol data-hk="0-0-0-0-0-0-0-0-0" ><li><p>First item with multiple paragraphs.</p><p>This is the second paragraph of the first item.</p></li><li><p>Second item with code:</p><pre><code>console.log('Hello from list');</code></pre></li></ol>`},"renders bold within italic":{input:"*This is italic with **bold** inside*",output:"<p><em>This is italic with <strong>bold</strong> inside</em></p>"},"renders italic within bold":{input:"**This is bold with *italic* inside**",output:"<p><strong>This is bold with <em>italic</em> inside</strong></p>"},"renders links with emphasis":{input:"[**Bold link**](https://example.com) and [*italic link*](https://test.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><strong>Bold link</strong></a> and <a href="https://test.com" target="_blank" rel="noopener noreferrer"><em>italic link</em></a></p>'},"renders images within links":{input:"[![Alt text](image.jpg)](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><img src="image.jpg" alt="Alt text"></a></p>'},"renders links in lists":{input:`- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Link 1</a></li><li>Visit <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a> for search</li><li>Multiple <a href="https://a.com" target="_blank" rel="noopener noreferrer">links</a> in <a href="https://b.com" target="_blank" rel="noopener noreferrer">one</a> item</li></ul>'},"renders code within links":{input:"[Check out `console.log()`](https://developer.mozilla.org)",output:'<p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Check out <code>console.log()</code></a></p>'},"renders inline code with emphasis markers that should not be processed":{input:"`const **bold** = 'not bold';`",output:"<p><code>const **bold** = 'not bold';</code></p>"},"renders code blocks in lists":{input:"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n2. Run the application:\n   ```javascript\n   npm start\n   ```",output:'<ol data-hk="0-0-0-0-0-0-0-0-0" ><li>Install dependencies:<pre><code>npm install</code></pre></li><li>Run the application:<pre><code>npm start</code></pre></li></ol>'},"renders code blocks in nested lists":{input:"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n   1. Run the application:\n      ```javascript\n      npm start\n      ```",output:'<ol data-hk="0-0-0-0-0-0-0-0-0" ><li><p>Install dependencies:</p><pre><code>npm install</code></pre><ol data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-1-0-0-0-0-0" ><li>Run the application:<pre><code>npm start</code></pre></li></ol></li></ol>'},"renders code blocks in blockquotes":{input:`> Here's an example:
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

And this autolink: <https://automatic.link>`,output:`<h1 data-hk="0-0-0-0-0-0-0-0-0" >Main Title</h1><p>This is a <strong>complex document</strong> with <em>various</em> elements.</p><h2 data-hk="0-0-0-2-0-0-0-0-0" >Features</h2><ol data-hk="0-0-0-3-0-0-0-0-0" ><li><strong>Lists</strong> with nested items:<ul data-hk="0-0-0-3-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>Unordered nested list</li><li>Another item with <code>inline code</code></li></ul></li><li><strong>Code blocks</strong> with different languages:<pre><code>function example() {
  return "Hello World";
}</code></pre></li><li><strong>Tables</strong> with complex content</li></ol><h2 data-hk="0-0-0-4-0-0-0-0-0" >Quotes and More</h2><blockquote><p>This is a blockquote with <strong>emphasis</strong> and a <a href="https://test.com" target="_blank" rel="noopener noreferrer">link</a>.</p><blockquote><p>Nested quote with <code>code</code></p></blockquote></blockquote><hr><h3 data-hk="0-0-0-7-0-0-0-0-0" >Final Notes</h3><p>Check out this image: <img src="test.jpg" alt="Example"></p><p>And this autolink: <a href="https://automatic.link" target="_blank" rel="noopener noreferrer">https://automatic.link</a></p>`},"renders edge case with consecutive emphasis":{input:"This has **bold** and **more bold** and *italic* and *more italic* text.",output:"<p>This has <strong>bold</strong> and <strong>more bold</strong> and <em>italic</em> and <em>more italic</em> text.</p>"},"renders emphasis across line breaks":{input:`This is **bold text that
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
   \`\`\``,output:'<h2 data-hk="0-0-0-0-0-0-0-0-0" >Mixed Lists</h2><ol data-hk="0-0-0-1-0-0-0-0-0" ><li>Ordered item one<ul data-hk="0-0-0-1-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>Nested unordered</li><li>Another nested<ol data-hk="0-0-0-1-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-1-0-0-0-1-0-0-0-0-0-0" ><li>Deep nested ordered</li><li>Another deep ordered</li></ol></li></ul></li><li>Ordered item two<blockquote><p>With a blockquote</p><p>And <strong>emphasis</strong></p></blockquote></li><li>Ordered item three with code:<pre><code>print("Hello from Python")</code></pre></li></ol>'},"handles unbalanced emphasis markers":{input:"This has **unbalanced bold and *mixed emphasis**",output:"<p>This has *<em>unbalanced bold and <em>mixed emphasis</em></em></p>"},"handles empty code blocks":{input:"```\n```",output:"<pre><code></code></pre>"},"handles code blocks without closing":{input:"```javascript\nconst x = 1;",output:"<pre><code>const x = 1;</code></pre>"},"handles consecutive same emphasis types correctly":{input:"**This is** nested **bold**",output:"<p><strong>This is</strong> nested <strong>bold</strong></p>"},"handles consecutive italic emphasis correctly":{input:"*This is* nested *italic*",output:"<p><em>This is</em> nested <em>italic</em></p>"},"handles triple asterisk emphasis correctly":{input:"***This is*** nested ***bold italic***",output:"<p><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></p>"},"handles proper separated emphasis correctly":{input:"**this** is **bold**",output:"<p><strong>this</strong> is <strong>bold</strong></p>"},"handles links without URLs":{input:"[Link text]()",output:'<p><a href="" target="_blank" rel="noopener noreferrer">Link text</a></p>'},"handles images without src":{input:"![Alt text]()",output:'<p><img src="" alt="Alt text"></p>'},"renders task lists with checkboxes":{input:`- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li>[x] Completed task</li><li>[ ] Incomplete task</li><li>[x] Another completed task</li></ul>'},"renders nested task lists":{input:`- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`,output:'<ul data-hk="0-0-0-0-0-0-0-0-0" ><li>[x] Main task<ul data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-0" ><li>[x] Subtask 1</li><li>[ ] Subtask 2<ul data-hk="0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-0-0-0-0-0-1-0-1-0-0-0-1-0-0-0-0-0-0" ><li>[x] Sub-subtask</li></ul></li></ul></li></ul>'},"handles large documents efficiently":{input:`## Section 1

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
`,output:'<h2 data-hk="0-0-0-0-0-0-0-0-0" >Section 1</h2><p>This is paragraph 1 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-2-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-3-0-0-0-0-0" >Section 2</h2><p>This is paragraph 2 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-5-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-6-0-0-0-0-0" >Section 3</h2><p>This is paragraph 3 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-8-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-9-0-0-0-0-0" >Section 4</h2><p>This is paragraph 4 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-11-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-12-0-0-0-0-0" >Section 5</h2><p>This is paragraph 5 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-14-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-15-0-0-0-0-0" >Section 6</h2><p>This is paragraph 6 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-17-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-18-0-0-0-0-0" >Section 7</h2><p>This is paragraph 7 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-20-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-21-0-0-0-0-0" >Section 8</h2><p>This is paragraph 8 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-23-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-24-0-0-0-0-0" >Section 9</h2><p>This is paragraph 9 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-26-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-27-0-0-0-0-0" >Section 10</h2><p>This is paragraph 10 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-29-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-30-0-0-0-0-0" >Section 11</h2><p>This is paragraph 11 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-32-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-33-0-0-0-0-0" >Section 12</h2><p>This is paragraph 12 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-35-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-36-0-0-0-0-0" >Section 13</h2><p>This is paragraph 13 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-38-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-39-0-0-0-0-0" >Section 14</h2><p>This is paragraph 14 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-41-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-42-0-0-0-0-0" >Section 15</h2><p>This is paragraph 15 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-44-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-45-0-0-0-0-0" >Section 16</h2><p>This is paragraph 16 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-47-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-48-0-0-0-0-0" >Section 17</h2><p>This is paragraph 17 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-50-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-51-0-0-0-0-0" >Section 18</h2><p>This is paragraph 18 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-53-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-54-0-0-0-0-0" >Section 19</h2><p>This is paragraph 19 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-56-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-57-0-0-0-0-0" >Section 20</h2><p>This is paragraph 20 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-59-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-60-0-0-0-0-0" >Section 21</h2><p>This is paragraph 21 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-62-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-63-0-0-0-0-0" >Section 22</h2><p>This is paragraph 22 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-65-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-66-0-0-0-0-0" >Section 23</h2><p>This is paragraph 23 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-68-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-69-0-0-0-0-0" >Section 24</h2><p>This is paragraph 24 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-71-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-72-0-0-0-0-0" >Section 25</h2><p>This is paragraph 25 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-74-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-75-0-0-0-0-0" >Section 26</h2><p>This is paragraph 26 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-77-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-78-0-0-0-0-0" >Section 27</h2><p>This is paragraph 27 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-80-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-81-0-0-0-0-0" >Section 28</h2><p>This is paragraph 28 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-83-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-84-0-0-0-0-0" >Section 29</h2><p>This is paragraph 29 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-86-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-87-0-0-0-0-0" >Section 30</h2><p>This is paragraph 30 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-89-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-90-0-0-0-0-0" >Section 31</h2><p>This is paragraph 31 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-92-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-93-0-0-0-0-0" >Section 32</h2><p>This is paragraph 32 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-95-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-96-0-0-0-0-0" >Section 33</h2><p>This is paragraph 33 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-98-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-99-0-0-0-0-0" >Section 34</h2><p>This is paragraph 34 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-101-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-102-0-0-0-0-0" >Section 35</h2><p>This is paragraph 35 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-104-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-105-0-0-0-0-0" >Section 36</h2><p>This is paragraph 36 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-107-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-108-0-0-0-0-0" >Section 37</h2><p>This is paragraph 37 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-110-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-111-0-0-0-0-0" >Section 38</h2><p>This is paragraph 38 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-113-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-114-0-0-0-0-0" >Section 39</h2><p>This is paragraph 39 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-116-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-117-0-0-0-0-0" >Section 40</h2><p>This is paragraph 40 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-119-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-120-0-0-0-0-0" >Section 41</h2><p>This is paragraph 41 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-122-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-123-0-0-0-0-0" >Section 42</h2><p>This is paragraph 42 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-125-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-126-0-0-0-0-0" >Section 43</h2><p>This is paragraph 43 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-128-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-129-0-0-0-0-0" >Section 44</h2><p>This is paragraph 44 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-131-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-132-0-0-0-0-0" >Section 45</h2><p>This is paragraph 45 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-134-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-135-0-0-0-0-0" >Section 46</h2><p>This is paragraph 46 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-137-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-138-0-0-0-0-0" >Section 47</h2><p>This is paragraph 47 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-140-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-141-0-0-0-0-0" >Section 48</h2><p>This is paragraph 48 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-143-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-144-0-0-0-0-0" >Section 49</h2><p>This is paragraph 49 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-146-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-147-0-0-0-0-0" >Section 50</h2><p>This is paragraph 50 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-149-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-150-0-0-0-0-0" >Section 51</h2><p>This is paragraph 51 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-152-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-153-0-0-0-0-0" >Section 52</h2><p>This is paragraph 52 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-155-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-156-0-0-0-0-0" >Section 53</h2><p>This is paragraph 53 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-158-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-159-0-0-0-0-0" >Section 54</h2><p>This is paragraph 54 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-161-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-162-0-0-0-0-0" >Section 55</h2><p>This is paragraph 55 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-164-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-165-0-0-0-0-0" >Section 56</h2><p>This is paragraph 56 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-167-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-168-0-0-0-0-0" >Section 57</h2><p>This is paragraph 57 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-170-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-171-0-0-0-0-0" >Section 58</h2><p>This is paragraph 58 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-173-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-174-0-0-0-0-0" >Section 59</h2><p>This is paragraph 59 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-176-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-177-0-0-0-0-0" >Section 60</h2><p>This is paragraph 60 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-179-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-180-0-0-0-0-0" >Section 61</h2><p>This is paragraph 61 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-182-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-183-0-0-0-0-0" >Section 62</h2><p>This is paragraph 62 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-185-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-186-0-0-0-0-0" >Section 63</h2><p>This is paragraph 63 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-188-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-189-0-0-0-0-0" >Section 64</h2><p>This is paragraph 64 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-191-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-192-0-0-0-0-0" >Section 65</h2><p>This is paragraph 65 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-194-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-195-0-0-0-0-0" >Section 66</h2><p>This is paragraph 66 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-197-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-198-0-0-0-0-0" >Section 67</h2><p>This is paragraph 67 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-200-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-201-0-0-0-0-0" >Section 68</h2><p>This is paragraph 68 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-203-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-204-0-0-0-0-0" >Section 69</h2><p>This is paragraph 69 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-206-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-207-0-0-0-0-0" >Section 70</h2><p>This is paragraph 70 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-209-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-210-0-0-0-0-0" >Section 71</h2><p>This is paragraph 71 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-212-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-213-0-0-0-0-0" >Section 72</h2><p>This is paragraph 72 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-215-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-216-0-0-0-0-0" >Section 73</h2><p>This is paragraph 73 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-218-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-219-0-0-0-0-0" >Section 74</h2><p>This is paragraph 74 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-221-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-222-0-0-0-0-0" >Section 75</h2><p>This is paragraph 75 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-224-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-225-0-0-0-0-0" >Section 76</h2><p>This is paragraph 76 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-227-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-228-0-0-0-0-0" >Section 77</h2><p>This is paragraph 77 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-230-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-231-0-0-0-0-0" >Section 78</h2><p>This is paragraph 78 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-233-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-234-0-0-0-0-0" >Section 79</h2><p>This is paragraph 79 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-236-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-237-0-0-0-0-0" >Section 80</h2><p>This is paragraph 80 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-239-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-240-0-0-0-0-0" >Section 81</h2><p>This is paragraph 81 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-242-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-243-0-0-0-0-0" >Section 82</h2><p>This is paragraph 82 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-245-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-246-0-0-0-0-0" >Section 83</h2><p>This is paragraph 83 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-248-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-249-0-0-0-0-0" >Section 84</h2><p>This is paragraph 84 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-251-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-252-0-0-0-0-0" >Section 85</h2><p>This is paragraph 85 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-254-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-255-0-0-0-0-0" >Section 86</h2><p>This is paragraph 86 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-257-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-258-0-0-0-0-0" >Section 87</h2><p>This is paragraph 87 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-260-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-261-0-0-0-0-0" >Section 88</h2><p>This is paragraph 88 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-263-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-264-0-0-0-0-0" >Section 89</h2><p>This is paragraph 89 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-266-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-267-0-0-0-0-0" >Section 90</h2><p>This is paragraph 90 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-269-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-270-0-0-0-0-0" >Section 91</h2><p>This is paragraph 91 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-272-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-273-0-0-0-0-0" >Section 92</h2><p>This is paragraph 92 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-275-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-276-0-0-0-0-0" >Section 93</h2><p>This is paragraph 93 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-278-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-279-0-0-0-0-0" >Section 94</h2><p>This is paragraph 94 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-281-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-282-0-0-0-0-0" >Section 95</h2><p>This is paragraph 95 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-284-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-285-0-0-0-0-0" >Section 96</h2><p>This is paragraph 96 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-287-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-288-0-0-0-0-0" >Section 97</h2><p>This is paragraph 97 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-290-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-291-0-0-0-0-0" >Section 98</h2><p>This is paragraph 98 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-293-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-294-0-0-0-0-0" >Section 99</h2><p>This is paragraph 99 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-296-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 data-hk="0-0-0-297-0-0-0-0-0" >Section 100</h2><p>This is paragraph 100 with <strong>bold</strong> and <em>italic</em> text.</p><ul data-hk="0-0-0-299-0-0-0-0-0" ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'},"allows custom paragraph renderer":{input:"Test paragraph",output:"<p>Test paragraph</p>"},"falls back to default renderer when custom not provided":{input:"# Header",output:'<h1 data-hk="0-0-0-0-0-0-0-0-0" >Header</h1>'},"allows custom emphasis renderer":{input:"This is *custom italic* text",output:"<p>This is <em>custom italic</em> text</p>"},"allows custom link renderer with additional attributes":{input:"[Original Link](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Original Link</a></p>'},"allows chaining of custom renderers":{input:"**Bold** and *italic* text",output:"<p><strong>Bold</strong> and <em>italic</em> text</p>"},"renders tables with emphasis and links":{input:`| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`,output:'<table><thead><tr><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0" >Name</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" >Description</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0" >Link</th></tr></thead><tbody><tr><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0" ><strong>Bold Name</strong></td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0-0-0" ><em>Italic description</em></td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-2-0-0-0-0-0" ><a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a></td></tr><tr><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-0-0-0-0-0-0" ><del>Deprecated</del></td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-1-0-0-0-0-0" ><code>code example</code></td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-2-0-0-0-0-0" ><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders tables with images":{input:`| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`,output:'<table><thead><tr><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0" >Icon</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" >Name</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0" >Description</th></tr></thead><tbody><tr><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0" ><img src="icon.png" alt="Icon"></td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0-0-0" >Project</td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-2-0-0-0-0-0" >Main project</td></tr><tr><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-0-0-0-0-0-0" ><img src="logo.svg" alt="Logo"></td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-1-0-0-0-0-0" >Brand</td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-2-0-0-0-0-0" >Company brand</td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"handles empty table cells":{input:`| Col1 | Col2 | Col3 |
|------|------|------|
| Data || More |
||Data ||`,output:'<table><thead><tr><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0" >Col1</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" >Col2</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0" >Col3</th></tr></thead><tbody><tr><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0" >Data</td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0-0-0" ></td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-2-0-0-0-0-0" >More</td></tr><tr><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-0-0-0-0-0-0" ></td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-1-0-0-0-0-0" >Data</td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-2-0-0-0-0-0" ></td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders simple table":{input:`| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`,output:'<table><thead><tr><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0" >Name</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" >Age</th></tr></thead><tbody><tr><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0" >John</td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0-0-0" >30</td></tr><tr><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-0-0-0-0-0-0" >Jane</td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-1-0-0-0-0-0" >25</td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders table with alignment":{input:`| Left | Center | Right |
|:-----|:------:|------:|
| L1   |   C1   |    R1 |`,output:'<table><thead><tr><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0" >Left</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" >Center</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0-0-0-0" >Right</th></tr></thead><tbody><tr><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0" >L1</td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0-0-0" >C1</td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-2-0-0-0-0-0" >R1</td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders standalone table correctly":{input:`| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`,output:'<table><thead><tr><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0" >Name</th><th data-hk="0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0" >Age</th></tr></thead><tbody><tr><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0" >John</td><td data-hk="0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0-0-0" >30</td></tr><tr><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-0-0-0-0-0-0" >Jane</td><td data-hk="0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-1-0-0-0-0-0" >25</td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough text":{input:"~~strikethrough~~",output:"<p><del>strikethrough</del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough within paragraph":{input:"This is ~~deleted~~ text.",output:"<p>This is <del>deleted</del> text.</p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough with nested emphasis":{input:"~~This is deleted with **bold** and *italic* text~~",output:"<p><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders complex nested emphasis combinations":{input:"***This is bold and italic*** with ~~strikethrough **and bold**~~",output:"<p><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]}};function yn(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(e);for(;r!==-1;)i++,r=n.indexOf(e,r+e.length);return i}const ot=Ot(/[A-Za-z]/),ht=Ot(/[\dA-Za-z]/),pl=Ot(/[#-'*+\--9=?A-Z^-~]/);function Ae(t){return t!==null&&(t<32||t===127)}const Ze=Ot(/\d/),ml=Ot(/[\dA-Fa-f]/),fl=Ot(/[!-/:-@[-`{-~]/);function v(t){return t!==null&&t<-2}function J(t){return t!==null&&(t<0||t===32)}function $(t){return t===-2||t===-1||t===32}const ve=Ot(/\p{P}|\p{S}/u),Bt=Ot(/\s/);function Ot(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function gl(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const un=function(t){if(t==null)return wl;if(typeof t=="function")return ze(t);if(typeof t=="object")return Array.isArray(t)?kl(t):bl(t);if(typeof t=="string")return xl(t);throw new Error("Expected function, string, or object as test")};function kl(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=un(t[n]);return ze(i);function i(...r){let a=-1;for(;++a<e.length;)if(e[a].apply(this,r))return!0;return!1}}function bl(t){const e=t;return ze(n);function n(i){const r=i;let a;for(a in t)if(r[a]!==e[a])return!1;return!0}}function xl(t){return ze(e);function e(n){return n&&n.type===t}}function ze(t){return e;function e(n,i,r){return!!(Il(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function wl(){return!0}function Il(t){return t!==null&&typeof t=="object"&&"type"in t}const bi=[],yl=!0,Sn=!1,Sl="skip";function Tl(t,e,n,i){let r;r=e;const a=un(r),l=1;o(t,void 0,[])();function o(s,u,c){const h=s&&typeof s=="object"?s:{};if(typeof h.type=="string"){const d=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(d?"<"+d+">":""))+")"})}return m;function m(){let d=bi,g,I,S;if(a(s,u,c[c.length-1]||void 0)&&(d=Cl(n(s,c)),d[0]===Sn))return d;if("children"in s&&s.children){const w=s;if(w.children&&d[0]!==Sl)for(I=-1+l,S=c.concat(w);I>-1&&I<w.children.length;){const C=w.children[I];if(g=o(C,I,S)(),g[0]===Sn)return g;I=typeof g[1]=="number"?g[1]:I+l}}return d}}}function Cl(t){return Array.isArray(t)?t:typeof t=="number"?[yl,t]:t==null?bi:[t]}function Al(t,e,n){const r=un((n||{}).ignore||[]),a=Pl(e);let l=-1;for(;++l<a.length;)Tl(t,"text",o);function o(u,c){let h=-1,m;for(;++h<c.length;){const d=c[h],g=m?m.children:void 0;if(r(d,g?g.indexOf(d):void 0,m))return;m=d}if(m)return s(u,c)}function s(u,c){const h=c[c.length-1],m=a[l][0],d=a[l][1];let g=0;const S=h.children.indexOf(u);let w=!1,C=[];m.lastIndex=0;let y=m.exec(u.value);for(;y;){const P=y.index,z={index:y.index,input:y.input,stack:[...c,u]};let b=d(...y,z);if(typeof b=="string"&&(b=b.length>0?{type:"text",value:b}:void 0),b===!1?m.lastIndex=P+1:(g!==P&&C.push({type:"text",value:u.value.slice(g,P)}),Array.isArray(b)?C.push(...b):b&&C.push(b),g=P+y[0].length,w=!0),!m.global)break;y=m.exec(u.value)}return w?(g<u.value.length&&C.push({type:"text",value:u.value.slice(g)}),h.children.splice(S,1,...C)):C=[u],S+C.length}}function Pl(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let i=-1;for(;++i<n.length;){const r=n[i];e.push([El(r[0]),_l(r[1])])}return e}function El(t){return typeof t=="string"?new RegExp(gl(t),"g"):t}function _l(t){return typeof t=="function"?t:function(){return t}}function Fl(){return{transforms:[Ml],enter:{literalAutolink:Ll,literalAutolinkEmail:Be,literalAutolinkHttp:Be,literalAutolinkWww:Be},exit:{literalAutolink:Dl,literalAutolinkEmail:Ol,literalAutolinkHttp:vl,literalAutolinkWww:zl}}}function Ll(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Be(t){this.config.enter.autolinkProtocol.call(this,t)}function vl(t){this.config.exit.autolinkProtocol.call(this,t)}function zl(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function Ol(t){this.config.exit.autolinkEmail.call(this,t)}function Dl(t){this.exit(t)}function Ml(t){Al(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$l],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Rl]],{ignore:["link","linkReference"]})}function $l(t,e,n,i,r){let a="";if(!xi(r)||(/^w/i.test(e)&&(n=e+n,e="",a="http://"),!Nl(n)))return!1;const l=Bl(n+i);if(!l[0])return!1;const o={type:"link",title:null,url:a+e+l[0],children:[{type:"text",value:e+l[0]}]};return l[1]?[o,{type:"text",value:l[1]}]:o}function Rl(t,e,n,i){return!xi(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function Nl(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function Bl(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],i=n.indexOf(")");const r=yn(t,"(");let a=yn(t,")");for(;i!==-1&&r>a;)t+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),a++;return[t,n]}function xi(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||Bt(n)||ve(n))&&(!e||n!==47)}function kt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function jl(){this.buffer()}function ql(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Hl(){this.buffer()}function Vl(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function Ul(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=kt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function Wl(t){this.exit(t)}function Ql(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=kt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function Gl(t){this.exit(t)}function Kl(){return{enter:{gfmFootnoteCallString:jl,gfmFootnoteCall:ql,gfmFootnoteDefinitionLabelString:Hl,gfmFootnoteDefinition:Vl},exit:{gfmFootnoteCallString:Ul,gfmFootnoteCall:Wl,gfmFootnoteDefinitionLabelString:Ql,gfmFootnoteDefinition:Gl}}}function Yl(){return{canContainEols:["delete"],enter:{strikethrough:Jl},exit:{strikethrough:Xl}}}function Jl(t){this.enter({type:"delete",children:[]},t)}function Xl(t){this.exit(t)}function Pe(t){if(t===null||J(t)||Bt(t))return 1;if(ve(t))return 2}const Zl={};function ta(t,e){const n=Zl,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return wi(t,i,r)}function wi(t,e,n){if(ea(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Tn(t.children,e,n)}return Array.isArray(t)?Tn(t,e,n):""}function Tn(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=wi(t[r],e,n);return i.join("")}function ea(t){return!!(t&&typeof t=="object")}const Cn=document.createElement("i");function hn(t){const e="&"+t+";";Cn.innerHTML=e;const n=Cn.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Ii(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}const na=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ia(t){return t.replace(na,ra)}function ra(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),a=r===120||r===88;return Ii(n.slice(a?2:1),a?16:10)}return hn(n)||t}function la(){return{enter:{table:aa,tableData:An,tableHeader:An,tableRow:sa},exit:{codeText:ua,table:oa,tableData:je,tableHeader:je,tableRow:je}}}function aa(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function oa(t){this.exit(t),this.data.inTable=void 0}function sa(t){this.enter({type:"tableRow",children:[]},t)}function je(t){this.exit(t)}function An(t){this.enter({type:"tableCell",children:[]},t)}function ua(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,ha));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function ha(t,e){return e==="|"?e:t}function ca(){return{exit:{taskListCheckValueChecked:Pn,taskListCheckValueUnchecked:Pn,paragraph:da}}}function Pn(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function da(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=e.children;let a=-1,l;for(;++a<r.length;){const o=r[a];if(o.type==="paragraph"){l=o;break}}l===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(t)}function pa(){return[Fl(),Kl(),Yl(),la(),ca()]}function pt(t,e,n,i){const r=t.length;let a=0,l;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)l=Array.from(i),l.unshift(e,n),t.splice(...l);else for(n&&t.splice(e,n);a<i.length;)l=i.slice(a,a+1e4),l.unshift(e,0),t.splice(...l),a+=1e4,e+=1e4}function mt(t,e){return t.length>0?(pt(t,t.length,0,e),t):e}const En={}.hasOwnProperty;function yi(t){const e={};let n=-1;for(;++n<t.length;)ma(e,t[n]);return e}function ma(t,e){let n;for(n in e){const r=(En.call(t,n)?t[n]:void 0)||(t[n]={}),a=e[n];let l;if(a)for(l in a){En.call(r,l)||(r[l]=[]);const o=a[l];fa(r[l],Array.isArray(o)?o:o?[o]:[])}}}function fa(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);pt(t,0,0,i)}const ga={tokenize:ya,partial:!0},Si={tokenize:Sa,partial:!0},Ti={tokenize:Ta,partial:!0},Ci={tokenize:Ca,partial:!0},ka={tokenize:Aa,partial:!0},Ai={name:"wwwAutolink",tokenize:wa,previous:Ei},Pi={name:"protocolAutolink",tokenize:Ia,previous:_i},Ft={name:"emailAutolink",tokenize:xa,previous:Fi},yt={};function ba(){return{text:yt}}let $t=48;for(;$t<123;)yt[$t]=Ft,$t++,$t===58?$t=65:$t===91&&($t=97);yt[43]=Ft;yt[45]=Ft;yt[46]=Ft;yt[95]=Ft;yt[72]=[Ft,Pi];yt[104]=[Ft,Pi];yt[87]=[Ft,Ai];yt[119]=[Ft,Ai];function xa(t,e,n){const i=this;let r,a;return l;function l(h){return!tn(h)||!Fi.call(i,i.previous)||cn(i.events)?n(h):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),o(h))}function o(h){return tn(h)?(t.consume(h),o):h===64?(t.consume(h),s):n(h)}function s(h){return h===46?t.check(ka,c,u)(h):h===45||h===95||ht(h)?(a=!0,t.consume(h),s):c(h)}function u(h){return t.consume(h),r=!0,s}function c(h){return a&&r&&ot(i.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(h)):n(h)}}function wa(t,e,n){const i=this;return r;function r(l){return l!==87&&l!==119||!Ei.call(i,i.previous)||cn(i.events)?n(l):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(ga,t.attempt(Si,t.attempt(Ti,a),n),n)(l))}function a(l){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(l)}}function Ia(t,e,n){const i=this;let r="",a=!1;return l;function l(h){return(h===72||h===104)&&_i.call(i,i.previous)&&!cn(i.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),r+=String.fromCodePoint(h),t.consume(h),o):n(h)}function o(h){if(ot(h)&&r.length<5)return r+=String.fromCodePoint(h),t.consume(h),o;if(h===58){const m=r.toLowerCase();if(m==="http"||m==="https")return t.consume(h),s}return n(h)}function s(h){return h===47?(t.consume(h),a?u:(a=!0,s)):n(h)}function u(h){return h===null||Ae(h)||J(h)||Bt(h)||ve(h)?n(h):t.attempt(Si,t.attempt(Ti,c),n)(h)}function c(h){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(h)}}function ya(t,e,n){let i=0;return r;function r(l){return(l===87||l===119)&&i<3?(i++,t.consume(l),r):l===46&&i===3?(t.consume(l),a):n(l)}function a(l){return l===null?n(l):e(l)}}function Sa(t,e,n){let i,r,a;return l;function l(u){return u===46||u===95?t.check(Ci,s,o)(u):u===null||J(u)||Bt(u)||u!==45&&ve(u)?s(u):(a=!0,t.consume(u),l)}function o(u){return u===95?i=!0:(r=i,i=void 0),t.consume(u),l}function s(u){return r||i||!a?n(u):e(u)}}function Ta(t,e){let n=0,i=0;return r;function r(l){return l===40?(n++,t.consume(l),r):l===41&&i<n?a(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?t.check(Ci,e,a)(l):l===null||J(l)||Bt(l)?e(l):(t.consume(l),r)}function a(l){return l===41&&i++,t.consume(l),r}}function Ca(t,e,n){return i;function i(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(t.consume(o),i):o===38?(t.consume(o),a):o===93?(t.consume(o),r):o===60||o===null||J(o)||Bt(o)?e(o):n(o)}function r(o){return o===null||o===40||o===91||J(o)||Bt(o)?e(o):i(o)}function a(o){return ot(o)?l(o):n(o)}function l(o){return o===59?(t.consume(o),i):ot(o)?(t.consume(o),l):n(o)}}function Aa(t,e,n){return i;function i(a){return t.consume(a),r}function r(a){return ht(a)?n(a):e(a)}}function Ei(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||J(t)}function _i(t){return!ot(t)}function Fi(t){return!(t===47||tn(t))}function tn(t){return t===43||t===45||t===46||t===95||ht(t)}function cn(t){let e=t.length,n=!1;for(;e--;){const i=t[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}function Oe(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const a=t[r].resolveAll;a&&!i.includes(a)&&(e=a(e,n),i.push(a))}return e}const en={name:"attention",resolveAll:Pa,tokenize:Ea};function Pa(t,e){let n=-1,i,r,a,l,o,s,u,c;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;s=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const h={...t[i][1].end},m={...t[n][1].start};_n(h,-s),_n(m,s),l={type:s>1?"strongSequence":"emphasisSequence",start:h,end:{...t[i][1].end}},o={type:s>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:m},a={type:s>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:s>1?"strong":"emphasis",start:{...l.start},end:{...o.end}},t[i][1].end={...l.start},t[n][1].start={...o.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=mt(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=mt(u,[["enter",r,e],["enter",l,e],["exit",l,e],["enter",a,e]]),u=mt(u,Oe(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=mt(u,[["exit",a,e],["enter",o,e],["exit",o,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(c=2,u=mt(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):c=0,pt(t,i-1,n-i+3,u),n=i+u.length-c-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function Ea(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Pe(i);let a;return l;function l(s){return a=s,t.enter("attentionSequence"),o(s)}function o(s){if(s===a)return t.consume(s),o;const u=t.exit("attentionSequence"),c=Pe(s),h=!c||c===2&&r||n.includes(s),m=!r||r===2&&c||n.includes(i);return u._open=!!(a===42?h:h&&(r||!m)),u._close=!!(a===42?m:m&&(c||!h)),e(s)}}function _n(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const _a={name:"autolink",tokenize:Fa};function Fa(t,e,n){let i=0;return r;function r(d){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(d),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(d){return ot(d)?(t.consume(d),l):d===64?n(d):u(d)}function l(d){return d===43||d===45||d===46||ht(d)?(i=1,o(d)):u(d)}function o(d){return d===58?(t.consume(d),i=0,s):(d===43||d===45||d===46||ht(d))&&i++<32?(t.consume(d),o):(i=0,u(d))}function s(d){return d===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(d),t.exit("autolinkMarker"),t.exit("autolink"),e):d===null||d===32||d===60||Ae(d)?n(d):(t.consume(d),s)}function u(d){return d===64?(t.consume(d),c):pl(d)?(t.consume(d),u):n(d)}function c(d){return ht(d)?h(d):n(d)}function h(d){return d===46?(t.consume(d),i=0,c):d===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(d),t.exit("autolinkMarker"),t.exit("autolink"),e):m(d)}function m(d){if((d===45||ht(d))&&i++<63){const g=d===45?m:h;return t.consume(d),g}return n(d)}}function j(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let a=0;return l;function l(s){return $(s)?(t.enter(n),o(s)):e(s)}function o(s){return $(s)&&a++<r?(t.consume(s),o):(t.exit(n),e(s))}}const he={partial:!0,tokenize:La};function La(t,e,n){return i;function i(a){return $(a)?j(t,r,"linePrefix")(a):r(a)}function r(a){return a===null||v(a)?e(a):n(a)}}const Li={continuation:{tokenize:za},exit:Oa,name:"blockQuote",tokenize:va};function va(t,e,n){const i=this;return r;function r(l){if(l===62){const o=i.containerState;return o.open||(t.enter("blockQuote",{_container:!0}),o.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),a}return n(l)}function a(l){return $(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(l))}}function za(t,e,n){const i=this;return r;function r(l){return $(l)?j(t,a,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):a(l)}function a(l){return t.attempt(Li,e,n)(l)}}function Oa(t){t.exit("blockQuote")}const vi={name:"characterEscape",tokenize:Da};function Da(t,e,n){return i;function i(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),r}function r(a){return fl(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(a)}}const zi={name:"characterReference",tokenize:Ma};function Ma(t,e,n){const i=this;let r=0,a,l;return o;function o(h){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),s}function s(h){return h===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(h),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),a=31,l=ht,c(h))}function u(h){return h===88||h===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(h),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,l=ml,c):(t.enter("characterReferenceValue"),a=7,l=Ze,c(h))}function c(h){if(h===59&&r){const m=t.exit("characterReferenceValue");return l===ht&&!hn(i.sliceSerialize(m))?n(h):(t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return l(h)&&r++<a?(t.consume(h),c):n(h)}}const Fn={partial:!0,tokenize:Ra},Ln={concrete:!0,name:"codeFenced",tokenize:$a};function $a(t,e,n){const i=this,r={partial:!0,tokenize:z};let a=0,l=0,o;return s;function s(b){return u(b)}function u(b){const M=i.events[i.events.length-1];return a=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,o=b,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),c(b)}function c(b){return b===o?(l++,t.consume(b),c):l<3?n(b):(t.exit("codeFencedFenceSequence"),$(b)?j(t,h,"whitespace")(b):h(b))}function h(b){return b===null||v(b)?(t.exit("codeFencedFence"),i.interrupt?e(b):t.check(Fn,I,P)(b)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),m(b))}function m(b){return b===null||v(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),h(b)):$(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),j(t,d,"whitespace")(b)):b===96&&b===o?n(b):(t.consume(b),m)}function d(b){return b===null||v(b)?h(b):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||v(b)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),h(b)):b===96&&b===o?n(b):(t.consume(b),g)}function I(b){return t.attempt(r,P,S)(b)}function S(b){return t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),w}function w(b){return a>0&&$(b)?j(t,C,"linePrefix",a+1)(b):C(b)}function C(b){return b===null||v(b)?t.check(Fn,I,P)(b):(t.enter("codeFlowValue"),y(b))}function y(b){return b===null||v(b)?(t.exit("codeFlowValue"),C(b)):(t.consume(b),y)}function P(b){return t.exit("codeFenced"),e(b)}function z(b,M,q){let R=0;return k;function k(E){return b.enter("lineEnding"),b.consume(E),b.exit("lineEnding"),_}function _(E){return b.enter("codeFencedFence"),$(E)?j(b,A,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):A(E)}function A(E){return E===o?(b.enter("codeFencedFenceSequence"),V(E)):q(E)}function V(E){return E===o?(R++,b.consume(E),V):R>=l?(b.exit("codeFencedFenceSequence"),$(E)?j(b,F,"whitespace")(E):F(E)):q(E)}function F(E){return E===null||v(E)?(b.exit("codeFencedFence"),M(E)):q(E)}}}function Ra(t,e,n){const i=this;return r;function r(l){return l===null?n(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a)}function a(l){return i.parser.lazy[i.now().line]?n(l):e(l)}}const qe={name:"codeIndented",tokenize:Ba},Na={partial:!0,tokenize:ja};function Ba(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),j(t,a,"linePrefix",5)(u)}function a(u){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):v(u)?t.attempt(Na,l,s)(u):(t.enter("codeFlowValue"),o(u))}function o(u){return u===null||v(u)?(t.exit("codeFlowValue"),l(u)):(t.consume(u),o)}function s(u){return t.exit("codeIndented"),e(u)}}function ja(t,e,n){const i=this;return r;function r(l){return i.parser.lazy[i.now().line]?n(l):v(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),r):j(t,a,"linePrefix",5)(l)}function a(l){const o=i.events[i.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?e(l):v(l)?r(l):n(l)}}const qa={name:"codeText",previous:Va,resolve:Ha,tokenize:Ua};function Ha(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function Va(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ua(t,e,n){let i=0,r,a;return l;function l(h){return t.enter("codeText"),t.enter("codeTextSequence"),o(h)}function o(h){return h===96?(t.consume(h),i++,o):(t.exit("codeTextSequence"),s(h))}function s(h){return h===null?n(h):h===32?(t.enter("space"),t.consume(h),t.exit("space"),s):h===96?(a=t.enter("codeTextSequence"),r=0,c(h)):v(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),s):(t.enter("codeTextData"),u(h))}function u(h){return h===null||h===32||h===96||v(h)?(t.exit("codeTextData"),s(h)):(t.consume(h),u)}function c(h){return h===96?(t.consume(h),r++,c):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(h)):(a.type="codeTextData",u(h))}}class Wa{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const a=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Zt(this.left,i),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Zt(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Zt(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);Zt(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Zt(this.left,n.reverse())}}}function Zt(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function Oi(t){const e={};let n=-1,i,r,a,l,o,s,u;const c=new Wa(t);for(;++n<c.length;){for(;n in e;)n=e[n];if(i=c.get(n),n&&i[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=i[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,Qa(c,n)),n=e[n],u=!0);else if(i[1]._container){for(a=n,r=void 0;a--;)if(l=c.get(a),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(r&&(c.get(r)[1].type="lineEndingBlank"),l[1].type="lineEnding",r=a);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;r&&(i[1].end={...c.get(r)[1].start},o=c.slice(r,n),o.unshift(i),c.splice(r,n-r+1,o))}}return pt(t,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function Qa(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const a=[];let l=n._tokenizer;l||(l=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const o=l.events,s=[],u={};let c,h,m=-1,d=n,g=0,I=0;const S=[I];for(;d;){for(;t.get(++r)[1]!==d;);a.push(r),d._tokenizer||(c=i.sliceStream(d),d.next||c.push(null),h&&l.defineSkip(d.start),d._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(c),d._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),h=d,d=d.next}for(d=n;++m<o.length;)o[m][0]==="exit"&&o[m-1][0]==="enter"&&o[m][1].type===o[m-1][1].type&&o[m][1].start.line!==o[m][1].end.line&&(I=m+1,S.push(I),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(l.events=[],d?(d._tokenizer=void 0,d.previous=void 0):S.pop(),m=S.length;m--;){const w=o.slice(S[m],S[m+1]),C=a.pop();s.push([C,C+w.length-1]),t.splice(C,2,w)}for(s.reverse(),m=-1;++m<s.length;)u[g+s[m][0]]=g+s[m][1],g+=s[m][1]-s[m][0]-1;return u}const Ga={resolve:Ya,tokenize:Ja},Ka={partial:!0,tokenize:Xa};function Ya(t){return Oi(t),t}function Ja(t,e){let n;return i;function i(o){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(o)}function r(o){return o===null?a(o):v(o)?t.check(Ka,l,a)(o):(t.consume(o),r)}function a(o){return t.exit("chunkContent"),t.exit("content"),e(o)}function l(o){return t.consume(o),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function Xa(t,e,n){const i=this;return r;function r(l){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),j(t,a,"linePrefix")}function a(l){if(l===null||v(l))return n(l);const o=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?e(l):t.interrupt(i.parser.constructs.flow,n,e)(l)}}function Di(t,e,n,i,r,a,l,o,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return h;function h(w){return w===60?(t.enter(i),t.enter(r),t.enter(a),t.consume(w),t.exit(a),m):w===null||w===32||w===41||Ae(w)?n(w):(t.enter(i),t.enter(l),t.enter(o),t.enter("chunkString",{contentType:"string"}),I(w))}function m(w){return w===62?(t.enter(a),t.consume(w),t.exit(a),t.exit(r),t.exit(i),e):(t.enter(o),t.enter("chunkString",{contentType:"string"}),d(w))}function d(w){return w===62?(t.exit("chunkString"),t.exit(o),m(w)):w===null||w===60||v(w)?n(w):(t.consume(w),w===92?g:d)}function g(w){return w===60||w===62||w===92?(t.consume(w),d):d(w)}function I(w){return!c&&(w===null||w===41||J(w))?(t.exit("chunkString"),t.exit(o),t.exit(l),t.exit(i),e(w)):c<u&&w===40?(t.consume(w),c++,I):w===41?(t.consume(w),c--,I):w===null||w===32||w===40||Ae(w)?n(w):(t.consume(w),w===92?S:I)}function S(w){return w===40||w===41||w===92?(t.consume(w),I):I(w)}}function Mi(t,e,n,i,r,a){const l=this;let o=0,s;return u;function u(d){return t.enter(i),t.enter(r),t.consume(d),t.exit(r),t.enter(a),c}function c(d){return o>999||d===null||d===91||d===93&&!s||d===94&&!o&&"_hiddenFootnoteSupport"in l.parser.constructs?n(d):d===93?(t.exit(a),t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):v(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),c):(t.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===null||d===91||d===93||v(d)||o++>999?(t.exit("chunkString"),c(d)):(t.consume(d),s||(s=!$(d)),d===92?m:h)}function m(d){return d===91||d===92||d===93?(t.consume(d),o++,h):h(d)}}function $i(t,e,n,i,r,a){let l;return o;function o(m){return m===34||m===39||m===40?(t.enter(i),t.enter(r),t.consume(m),t.exit(r),l=m===40?41:m,s):n(m)}function s(m){return m===l?(t.enter(r),t.consume(m),t.exit(r),t.exit(i),e):(t.enter(a),u(m))}function u(m){return m===l?(t.exit(a),s(l)):m===null?n(m):v(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),j(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),c(m))}function c(m){return m===l||m===null||v(m)?(t.exit("chunkString"),u(m)):(t.consume(m),m===92?h:c)}function h(m){return m===l||m===92?(t.consume(m),c):c(m)}}function re(t,e){let n;return i;function i(r){return v(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):$(r)?j(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const Za={name:"definition",tokenize:eo},to={partial:!0,tokenize:no};function eo(t,e,n){const i=this;let r;return a;function a(d){return t.enter("definition"),l(d)}function l(d){return Mi.call(i,t,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function o(d){return r=kt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),d===58?(t.enter("definitionMarker"),t.consume(d),t.exit("definitionMarker"),s):n(d)}function s(d){return J(d)?re(t,u)(d):u(d)}function u(d){return Di(t,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function c(d){return t.attempt(to,h,h)(d)}function h(d){return $(d)?j(t,m,"whitespace")(d):m(d)}function m(d){return d===null||v(d)?(t.exit("definition"),i.parser.defined.push(r),e(d)):n(d)}}function no(t,e,n){return i;function i(o){return J(o)?re(t,r)(o):n(o)}function r(o){return $i(t,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function a(o){return $(o)?j(t,l,"whitespace")(o):l(o)}function l(o){return o===null||v(o)?e(o):n(o)}}const io={name:"hardBreakEscape",tokenize:ro};function ro(t,e,n){return i;function i(a){return t.enter("hardBreakEscape"),t.consume(a),r}function r(a){return v(a)?(t.exit("hardBreakEscape"),e(a)):n(a)}}const lo={name:"headingAtx",resolve:ao,tokenize:oo};function ao(t,e){let n=t.length-2,i=3,r,a;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},a={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},pt(t,i,n-i+1,[["enter",r,e],["enter",a,e],["exit",a,e],["exit",r,e]])),t}function oo(t,e,n){let i=0;return r;function r(c){return t.enter("atxHeading"),a(c)}function a(c){return t.enter("atxHeadingSequence"),l(c)}function l(c){return c===35&&i++<6?(t.consume(c),l):c===null||J(c)?(t.exit("atxHeadingSequence"),o(c)):n(c)}function o(c){return c===35?(t.enter("atxHeadingSequence"),s(c)):c===null||v(c)?(t.exit("atxHeading"),e(c)):$(c)?j(t,o,"whitespace")(c):(t.enter("atxHeadingText"),u(c))}function s(c){return c===35?(t.consume(c),s):(t.exit("atxHeadingSequence"),o(c))}function u(c){return c===null||c===35||J(c)?(t.exit("atxHeadingText"),o(c)):(t.consume(c),u)}}const so=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],vn=["pre","script","style","textarea"],uo={concrete:!0,name:"htmlFlow",resolveTo:po,tokenize:mo},ho={partial:!0,tokenize:go},co={partial:!0,tokenize:fo};function po(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function mo(t,e,n){const i=this;let r,a,l,o,s;return u;function u(f){return c(f)}function c(f){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(f),h}function h(f){return f===33?(t.consume(f),m):f===47?(t.consume(f),a=!0,I):f===63?(t.consume(f),r=3,i.interrupt?e:p):ot(f)?(t.consume(f),l=String.fromCharCode(f),S):n(f)}function m(f){return f===45?(t.consume(f),r=2,d):f===91?(t.consume(f),r=5,o=0,g):ot(f)?(t.consume(f),r=4,i.interrupt?e:p):n(f)}function d(f){return f===45?(t.consume(f),i.interrupt?e:p):n(f)}function g(f){const st="CDATA[";return f===st.charCodeAt(o++)?(t.consume(f),o===st.length?i.interrupt?e:A:g):n(f)}function I(f){return ot(f)?(t.consume(f),l=String.fromCharCode(f),S):n(f)}function S(f){if(f===null||f===47||f===62||J(f)){const st=f===47,xt=l.toLowerCase();return!st&&!a&&vn.includes(xt)?(r=1,i.interrupt?e(f):A(f)):so.includes(l.toLowerCase())?(r=6,st?(t.consume(f),w):i.interrupt?e(f):A(f)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(f):a?C(f):y(f))}return f===45||ht(f)?(t.consume(f),l+=String.fromCharCode(f),S):n(f)}function w(f){return f===62?(t.consume(f),i.interrupt?e:A):n(f)}function C(f){return $(f)?(t.consume(f),C):k(f)}function y(f){return f===47?(t.consume(f),k):f===58||f===95||ot(f)?(t.consume(f),P):$(f)?(t.consume(f),y):k(f)}function P(f){return f===45||f===46||f===58||f===95||ht(f)?(t.consume(f),P):z(f)}function z(f){return f===61?(t.consume(f),b):$(f)?(t.consume(f),z):y(f)}function b(f){return f===null||f===60||f===61||f===62||f===96?n(f):f===34||f===39?(t.consume(f),s=f,M):$(f)?(t.consume(f),b):q(f)}function M(f){return f===s?(t.consume(f),s=null,R):f===null||v(f)?n(f):(t.consume(f),M)}function q(f){return f===null||f===34||f===39||f===47||f===60||f===61||f===62||f===96||J(f)?z(f):(t.consume(f),q)}function R(f){return f===47||f===62||$(f)?y(f):n(f)}function k(f){return f===62?(t.consume(f),_):n(f)}function _(f){return f===null||v(f)?A(f):$(f)?(t.consume(f),_):n(f)}function A(f){return f===45&&r===2?(t.consume(f),B):f===60&&r===1?(t.consume(f),G):f===62&&r===4?(t.consume(f),D):f===63&&r===3?(t.consume(f),p):f===93&&r===5?(t.consume(f),et):v(f)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(ho,K,V)(f)):f===null||v(f)?(t.exit("htmlFlowData"),V(f)):(t.consume(f),A)}function V(f){return t.check(co,F,K)(f)}function F(f){return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),E}function E(f){return f===null||v(f)?V(f):(t.enter("htmlFlowData"),A(f))}function B(f){return f===45?(t.consume(f),p):A(f)}function G(f){return f===47?(t.consume(f),l="",W):A(f)}function W(f){if(f===62){const st=l.toLowerCase();return vn.includes(st)?(t.consume(f),D):A(f)}return ot(f)&&l.length<8?(t.consume(f),l+=String.fromCharCode(f),W):A(f)}function et(f){return f===93?(t.consume(f),p):A(f)}function p(f){return f===62?(t.consume(f),D):f===45&&r===2?(t.consume(f),p):A(f)}function D(f){return f===null||v(f)?(t.exit("htmlFlowData"),K(f)):(t.consume(f),D)}function K(f){return t.exit("htmlFlow"),e(f)}}function fo(t,e,n){const i=this;return r;function r(l){return v(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),a):n(l)}function a(l){return i.parser.lazy[i.now().line]?n(l):e(l)}}function go(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(he,e,n)}}const ko={name:"htmlText",tokenize:bo};function bo(t,e,n){const i=this;let r,a,l;return o;function o(p){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(p),s}function s(p){return p===33?(t.consume(p),u):p===47?(t.consume(p),z):p===63?(t.consume(p),y):ot(p)?(t.consume(p),q):n(p)}function u(p){return p===45?(t.consume(p),c):p===91?(t.consume(p),a=0,g):ot(p)?(t.consume(p),C):n(p)}function c(p){return p===45?(t.consume(p),d):n(p)}function h(p){return p===null?n(p):p===45?(t.consume(p),m):v(p)?(l=h,G(p)):(t.consume(p),h)}function m(p){return p===45?(t.consume(p),d):h(p)}function d(p){return p===62?B(p):p===45?m(p):h(p)}function g(p){const D="CDATA[";return p===D.charCodeAt(a++)?(t.consume(p),a===D.length?I:g):n(p)}function I(p){return p===null?n(p):p===93?(t.consume(p),S):v(p)?(l=I,G(p)):(t.consume(p),I)}function S(p){return p===93?(t.consume(p),w):I(p)}function w(p){return p===62?B(p):p===93?(t.consume(p),w):I(p)}function C(p){return p===null||p===62?B(p):v(p)?(l=C,G(p)):(t.consume(p),C)}function y(p){return p===null?n(p):p===63?(t.consume(p),P):v(p)?(l=y,G(p)):(t.consume(p),y)}function P(p){return p===62?B(p):y(p)}function z(p){return ot(p)?(t.consume(p),b):n(p)}function b(p){return p===45||ht(p)?(t.consume(p),b):M(p)}function M(p){return v(p)?(l=M,G(p)):$(p)?(t.consume(p),M):B(p)}function q(p){return p===45||ht(p)?(t.consume(p),q):p===47||p===62||J(p)?R(p):n(p)}function R(p){return p===47?(t.consume(p),B):p===58||p===95||ot(p)?(t.consume(p),k):v(p)?(l=R,G(p)):$(p)?(t.consume(p),R):B(p)}function k(p){return p===45||p===46||p===58||p===95||ht(p)?(t.consume(p),k):_(p)}function _(p){return p===61?(t.consume(p),A):v(p)?(l=_,G(p)):$(p)?(t.consume(p),_):R(p)}function A(p){return p===null||p===60||p===61||p===62||p===96?n(p):p===34||p===39?(t.consume(p),r=p,V):v(p)?(l=A,G(p)):$(p)?(t.consume(p),A):(t.consume(p),F)}function V(p){return p===r?(t.consume(p),r=void 0,E):p===null?n(p):v(p)?(l=V,G(p)):(t.consume(p),V)}function F(p){return p===null||p===34||p===39||p===60||p===61||p===96?n(p):p===47||p===62||J(p)?R(p):(t.consume(p),F)}function E(p){return p===47||p===62||J(p)?R(p):n(p)}function B(p){return p===62?(t.consume(p),t.exit("htmlTextData"),t.exit("htmlText"),e):n(p)}function G(p){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),W}function W(p){return $(p)?j(t,et,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):et(p)}function et(p){return t.enter("htmlTextData"),l(p)}}const dn={name:"labelEnd",resolveAll:yo,resolveTo:So,tokenize:To},xo={tokenize:Co},wo={tokenize:Ao},Io={tokenize:Po};function yo(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&pt(t,0,t.length,n),t}function So(t,e){let n=t.length,i=0,r,a,l,o;for(;n--;)if(r=t[n][1],a){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(l){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(a=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(l=n);const s={type:t[a][1].type==="labelLink"?"link":"image",start:{...t[a][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[a][1].start},end:{...t[l][1].end}},c={type:"labelText",start:{...t[a+i+2][1].end},end:{...t[l-2][1].start}};return o=[["enter",s,e],["enter",u,e]],o=mt(o,t.slice(a+1,a+i+3)),o=mt(o,[["enter",c,e]]),o=mt(o,Oe(e.parser.constructs.insideSpan.null,t.slice(a+i+4,l-3),e)),o=mt(o,[["exit",c,e],t[l-2],t[l-1],["exit",u,e]]),o=mt(o,t.slice(l+1)),o=mt(o,[["exit",s,e]]),pt(t,a,t.length,o),t}function To(t,e,n){const i=this;let r=i.events.length,a,l;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){a=i.events[r][1];break}return o;function o(m){return a?a._inactive?h(m):(l=i.parser.defined.includes(kt(i.sliceSerialize({start:a.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelEnd"),s):n(m)}function s(m){return m===40?t.attempt(xo,c,l?c:h)(m):m===91?t.attempt(wo,c,l?u:h)(m):l?c(m):h(m)}function u(m){return t.attempt(Io,c,h)(m)}function c(m){return e(m)}function h(m){return a._balanced=!0,n(m)}}function Co(t,e,n){return i;function i(h){return t.enter("resource"),t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),r}function r(h){return J(h)?re(t,a)(h):a(h)}function a(h){return h===41?c(h):Di(t,l,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function l(h){return J(h)?re(t,s)(h):c(h)}function o(h){return n(h)}function s(h){return h===34||h===39||h===40?$i(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):c(h)}function u(h){return J(h)?re(t,c)(h):c(h)}function c(h){return h===41?(t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),t.exit("resource"),e):n(h)}}function Ao(t,e,n){const i=this;return r;function r(o){return Mi.call(i,t,a,l,"reference","referenceMarker","referenceString")(o)}function a(o){return i.parser.defined.includes(kt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(o):n(o)}function l(o){return n(o)}}function Po(t,e,n){return i;function i(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),r}function r(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),e):n(a)}}const Eo={name:"labelStartImage",resolveAll:dn.resolveAll,tokenize:_o};function _o(t,e,n){const i=this;return r;function r(o){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(o),t.exit("labelImageMarker"),a}function a(o){return o===91?(t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelImage"),l):n(o)}function l(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(o):e(o)}}const Fo={name:"labelStartLink",resolveAll:dn.resolveAll,tokenize:Lo};function Lo(t,e,n){const i=this;return r;function r(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(l):e(l)}}const He={name:"lineEnding",tokenize:vo};function vo(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),j(t,e,"linePrefix")}}const ke={name:"thematicBreak",tokenize:zo};function zo(t,e,n){let i=0,r;return a;function a(u){return t.enter("thematicBreak"),l(u)}function l(u){return r=u,o(u)}function o(u){return u===r?(t.enter("thematicBreakSequence"),s(u)):i>=3&&(u===null||v(u))?(t.exit("thematicBreak"),e(u)):n(u)}function s(u){return u===r?(t.consume(u),i++,s):(t.exit("thematicBreakSequence"),$(u)?j(t,o,"whitespace")(u):o(u))}}const ut={continuation:{tokenize:$o},exit:No,name:"list",tokenize:Mo},Oo={partial:!0,tokenize:Bo},Do={partial:!0,tokenize:Ro};function Mo(t,e,n){const i=this,r=i.events[i.events.length-1];let a=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,l=0;return o;function o(d){const g=i.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||d===i.containerState.marker:Ze(d)){if(i.containerState.type||(i.containerState.type=g,t.enter(g,{_container:!0})),g==="listUnordered")return t.enter("listItemPrefix"),d===42||d===45?t.check(ke,n,u)(d):u(d);if(!i.interrupt||d===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),s(d)}return n(d)}function s(d){return Ze(d)&&++l<10?(t.consume(d),s):(!i.interrupt||l<2)&&(i.containerState.marker?d===i.containerState.marker:d===41||d===46)?(t.exit("listItemValue"),u(d)):n(d)}function u(d){return t.enter("listItemMarker"),t.consume(d),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||d,t.check(he,i.interrupt?n:c,t.attempt(Oo,m,h))}function c(d){return i.containerState.initialBlankLine=!0,a++,m(d)}function h(d){return $(d)?(t.enter("listItemPrefixWhitespace"),t.consume(d),t.exit("listItemPrefixWhitespace"),m):n(d)}function m(d){return i.containerState.size=a+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(d)}}function $o(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(he,r,a);function r(o){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,j(t,e,"listItemIndent",i.containerState.size+1)(o)}function a(o){return i.containerState.furtherBlankLines||!$(o)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,l(o)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(Do,e,l)(o))}function l(o){return i.containerState._closeFlow=!0,i.interrupt=void 0,j(t,t.attempt(ut,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function Ro(t,e,n){const i=this;return j(t,r,"listItemIndent",i.containerState.size+1);function r(a){const l=i.events[i.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===i.containerState.size?e(a):n(a)}}function No(t){t.exit(this.containerState.type)}function Bo(t,e,n){const i=this;return j(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(a){const l=i.events[i.events.length-1];return!$(a)&&l&&l[1].type==="listItemPrefixWhitespace"?e(a):n(a)}}const zn={name:"setextUnderline",resolveTo:jo,tokenize:qo};function jo(t,e){let n=t.length,i,r,a;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!a&&t[n][1].type==="definition"&&(a=n);const l={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",a?(t.splice(r,0,["enter",l,e]),t.splice(a+1,0,["exit",t[i][1],e]),t[i][1].end={...t[a][1].end}):t[i][1]=l,t.push(["exit",l,e]),t}function qo(t,e,n){const i=this;let r;return a;function a(u){let c=i.events.length,h;for(;c--;)if(i.events[c][1].type!=="lineEnding"&&i.events[c][1].type!=="linePrefix"&&i.events[c][1].type!=="content"){h=i.events[c][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||h)?(t.enter("setextHeadingLine"),r=u,l(u)):n(u)}function l(u){return t.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===r?(t.consume(u),o):(t.exit("setextHeadingLineSequence"),$(u)?j(t,s,"lineSuffix")(u):s(u))}function s(u){return u===null||v(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const Ho={tokenize:Jo,partial:!0};function Vo(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Go,continuation:{tokenize:Ko},exit:Yo}},text:{91:{name:"gfmFootnoteCall",tokenize:Qo},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Uo,resolveTo:Wo}}}}function Uo(t,e,n){const i=this;let r=i.events.length;const a=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l;for(;r--;){const s=i.events[r][1];if(s.type==="labelImage"){l=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return o;function o(s){if(!l||!l._balanced)return n(s);const u=kt(i.sliceSerialize({start:l.end,end:i.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?n(s):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),e(s))}}function Wo(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},o=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",r,e],["exit",r,e],["enter",a,e],["enter",l,e],["exit",l,e],["exit",a,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...o),t}function Qo(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a=0,l;return o;function o(h){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),s}function s(h){return h!==94?n(h):(t.enter("gfmFootnoteCallMarker"),t.consume(h),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",u)}function u(h){if(a>999||h===93&&!l||h===null||h===91||J(h))return n(h);if(h===93){t.exit("chunkString");const m=t.exit("gfmFootnoteCallString");return r.includes(kt(i.sliceSerialize(m)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(h)}return J(h)||(l=!0),a++,t.consume(h),h===92?c:u}function c(h){return h===91||h===92||h===93?(t.consume(h),a++,u):u(h)}}function Go(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a,l=0,o;return s;function s(g){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",c):n(g)}function c(g){if(l>999||g===93&&!o||g===null||g===91||J(g))return n(g);if(g===93){t.exit("chunkString");const I=t.exit("gfmFootnoteDefinitionLabelString");return a=kt(i.sliceSerialize(I)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),m}return J(g)||(o=!0),l++,t.consume(g),g===92?h:c}function h(g){return g===91||g===92||g===93?(t.consume(g),l++,c):c(g)}function m(g){return g===58?(t.enter("definitionMarker"),t.consume(g),t.exit("definitionMarker"),r.includes(a)||r.push(a),j(t,d,"gfmFootnoteDefinitionWhitespace")):n(g)}function d(g){return e(g)}}function Ko(t,e,n){return t.check(he,e,t.attempt(Ho,e,n))}function Yo(t){t.exit("gfmFootnoteDefinition")}function Jo(t,e,n){const i=this;return j(t,r,"gfmFootnoteDefinitionIndent",5);function r(a){const l=i.events[i.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?e(a):n(a)}}function Xo(t){let n=(t||{}).singleTilde;const i={name:"strikethrough",tokenize:a,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(l,o){let s=-1;for(;++s<l.length;)if(l[s][0]==="enter"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._close){let u=s;for(;u--;)if(l[u][0]==="exit"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._open&&l[s][1].end.offset-l[s][1].start.offset===l[u][1].end.offset-l[u][1].start.offset){l[s][1].type="strikethroughSequence",l[u][1].type="strikethroughSequence";const c={type:"strikethrough",start:Object.assign({},l[u][1].start),end:Object.assign({},l[s][1].end)},h={type:"strikethroughText",start:Object.assign({},l[u][1].end),end:Object.assign({},l[s][1].start)},m=[["enter",c,o],["enter",l[u][1],o],["exit",l[u][1],o],["enter",h,o]],d=o.parser.constructs.insideSpan.null;d&&pt(m,m.length,0,Oe(d,l.slice(u+1,s),o)),pt(m,m.length,0,[["exit",h,o],["enter",l[s][1],o],["exit",l[s][1],o],["exit",c,o]]),pt(l,u-1,s-u+3,m),s=u+m.length-2;break}}for(s=-1;++s<l.length;)l[s][1].type==="strikethroughSequenceTemporary"&&(l[s][1].type="data");return l}function a(l,o,s){const u=this.previous,c=this.events;let h=0;return m;function m(g){return u===126&&c[c.length-1][1].type!=="characterEscape"?s(g):(l.enter("strikethroughSequenceTemporary"),d(g))}function d(g){const I=Pe(u);if(g===126)return h>1?s(g):(l.consume(g),h++,d);if(h<2&&!n)return s(g);const S=l.exit("strikethroughSequenceTemporary"),w=Pe(g);return S._open=!w||w===2&&!!I,S._close=!I||I===2&&!!w,o(g)}}}class Zo{constructor(){this.map=[]}add(e,n,i){ts(this,e,n,i)}consume(e){if(this.map.sort(function(a,l){return a[0]-l[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];i.push(e.slice()),e.length=0;let r=i.pop();for(;r;){for(const a of r)e.push(a);r=i.pop()}this.map.length=0}}function ts(t,e,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<t.map.length;){if(t.map[r][0]===e){t.map[r][1]+=n,t.map[r][2].push(...i);return}r+=1}t.map.push([e,n,i])}}function es(t,e){let n=!1;const i=[];for(;e<t.length;){const r=t[e];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const a=i.length-1;i[a]=i[a]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return i}function ns(){return{flow:{null:{name:"table",tokenize:is,resolveAll:rs}}}}function is(t,e,n){const i=this;let r=0,a=0,l;return o;function o(k){let _=i.events.length-1;for(;_>-1;){const F=i.events[_][1].type;if(F==="lineEnding"||F==="linePrefix")_--;else break}const A=_>-1?i.events[_][1].type:null,V=A==="tableHead"||A==="tableRow"?b:s;return V===b&&i.parser.lazy[i.now().line]?n(k):V(k)}function s(k){return t.enter("tableHead"),t.enter("tableRow"),u(k)}function u(k){return k===124||(l=!0,a+=1),c(k)}function c(k){return k===null?n(k):v(k)?a>1?(a=0,i.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(k),t.exit("lineEnding"),d):n(k):$(k)?j(t,c,"whitespace")(k):(a+=1,l&&(l=!1,r+=1),k===124?(t.enter("tableCellDivider"),t.consume(k),t.exit("tableCellDivider"),l=!0,c):(t.enter("data"),h(k)))}function h(k){return k===null||k===124||J(k)?(t.exit("data"),c(k)):(t.consume(k),k===92?m:h)}function m(k){return k===92||k===124?(t.consume(k),h):h(k)}function d(k){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(k):(t.enter("tableDelimiterRow"),l=!1,$(k)?j(t,g,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):g(k))}function g(k){return k===45||k===58?S(k):k===124?(l=!0,t.enter("tableCellDivider"),t.consume(k),t.exit("tableCellDivider"),I):z(k)}function I(k){return $(k)?j(t,S,"whitespace")(k):S(k)}function S(k){return k===58?(a+=1,l=!0,t.enter("tableDelimiterMarker"),t.consume(k),t.exit("tableDelimiterMarker"),w):k===45?(a+=1,w(k)):k===null||v(k)?P(k):z(k)}function w(k){return k===45?(t.enter("tableDelimiterFiller"),C(k)):z(k)}function C(k){return k===45?(t.consume(k),C):k===58?(l=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(k),t.exit("tableDelimiterMarker"),y):(t.exit("tableDelimiterFiller"),y(k))}function y(k){return $(k)?j(t,P,"whitespace")(k):P(k)}function P(k){return k===124?g(k):k===null||v(k)?!l||r!==a?z(k):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(k)):z(k)}function z(k){return n(k)}function b(k){return t.enter("tableRow"),M(k)}function M(k){return k===124?(t.enter("tableCellDivider"),t.consume(k),t.exit("tableCellDivider"),M):k===null||v(k)?(t.exit("tableRow"),e(k)):$(k)?j(t,M,"whitespace")(k):(t.enter("data"),q(k))}function q(k){return k===null||k===124||J(k)?(t.exit("data"),M(k)):(t.consume(k),k===92?R:q)}function R(k){return k===92||k===124?(t.consume(k),q):q(k)}}function rs(t,e){let n=-1,i=!0,r=0,a=[0,0,0,0],l=[0,0,0,0],o=!1,s=0,u,c,h;const m=new Zo;for(;++n<t.length;){const d=t[n],g=d[1];d[0]==="enter"?g.type==="tableHead"?(o=!1,s!==0&&(On(m,e,s,u,c),c=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},m.add(n,0,[["enter",u,e]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(i=!0,h=void 0,a=[0,0,0,0],l=[0,n+1,0,0],o&&(o=!1,c={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},m.add(n,0,[["enter",c,e]])),r=g.type==="tableDelimiterRow"?2:c?3:1):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(i=!1,l[2]===0&&(a[1]!==0&&(l[0]=l[1],h=fe(m,e,a,r,void 0,h),a=[0,0,0,0]),l[2]=n)):g.type==="tableCellDivider"&&(i?i=!1:(a[1]!==0&&(l[0]=l[1],h=fe(m,e,a,r,void 0,h)),a=l,l=[a[1],n,0,0])):g.type==="tableHead"?(o=!0,s=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=n,a[1]!==0?(l[0]=l[1],h=fe(m,e,a,r,n,h)):l[1]!==0&&(h=fe(m,e,l,r,n,h)),r=0):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(l[3]=n)}for(s!==0&&On(m,e,s,u,c),m.consume(e.events),n=-1;++n<e.events.length;){const d=e.events[n];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=es(e.events,n))}return t}function fe(t,e,n,i,r,a){const l=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(a.end=Object.assign({},Vt(e.events,n[0])),t.add(n[0],0,[["exit",a,e]]));const s=Vt(e.events,n[1]);if(a={type:l,start:Object.assign({},s),end:Object.assign({},s)},t.add(n[1],0,[["enter",a,e]]),n[2]!==0){const u=Vt(e.events,n[2]),c=Vt(e.events,n[3]),h={type:o,start:Object.assign({},u),end:Object.assign({},c)};if(t.add(n[2],0,[["enter",h,e]]),i!==2){const m=e.events[n[2]],d=e.events[n[3]];if(m[1].end=Object.assign({},d[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,I=n[3]-n[2]-1;t.add(g,I,[])}}t.add(n[3]+1,0,[["exit",h,e]])}return r!==void 0&&(a.end=Object.assign({},Vt(e.events,r)),t.add(r,0,[["exit",a,e]]),a=void 0),a}function On(t,e,n,i,r){const a=[],l=Vt(e.events,n);r&&(r.end=Object.assign({},l),a.push(["exit",r,e])),i.end=Object.assign({},l),a.push(["exit",i,e]),t.add(n+1,0,a)}function Vt(t,e){const n=t[e],i=n[0]==="enter"?"start":"end";return n[1][i]}const ls={name:"tasklistCheck",tokenize:os};function as(){return{text:{91:ls}}}function os(t,e,n){const i=this;return r;function r(s){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(s):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),a)}function a(s){return J(s)?(t.enter("taskListCheckValueUnchecked"),t.consume(s),t.exit("taskListCheckValueUnchecked"),l):s===88||s===120?(t.enter("taskListCheckValueChecked"),t.consume(s),t.exit("taskListCheckValueChecked"),l):n(s)}function l(s){return s===93?(t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),o):n(s)}function o(s){return v(s)?e(s):$(s)?t.check({tokenize:ss},e,n)(s):n(s)}}function ss(t,e,n){return j(t,i,"whitespace");function i(r){return r===null?n(r):e(r)}}function us(t){return yi([ba(),Vo(),Xo(t),ns(),as()])}const hs={gfm:us},cs={gfmFromMarkdown:pa},ds={tokenize:ps};function ps(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),j(t,e,"linePrefix")}function r(o){return t.enter("paragraph"),a(o)}function a(o){const s=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(o)}function l(o){if(o===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(o);return}return v(o)?(t.consume(o),t.exit("chunkText"),a):(t.consume(o),l)}}const ms={tokenize:fs},Dn={tokenize:gs};function fs(t){const e=this,n=[];let i=0,r,a,l;return o;function o(y){if(i<n.length){const P=n[i];return e.containerState=P[1],t.attempt(P[0].continuation,s,u)(y)}return u(y)}function s(y){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&C();const P=e.events.length;let z=P,b;for(;z--;)if(e.events[z][0]==="exit"&&e.events[z][1].type==="chunkFlow"){b=e.events[z][1].end;break}w(i);let M=P;for(;M<e.events.length;)e.events[M][1].end={...b},M++;return pt(e.events,z+1,0,e.events.slice(P)),e.events.length=M,u(y)}return o(y)}function u(y){if(i===n.length){if(!r)return m(y);if(r.currentConstruct&&r.currentConstruct.concrete)return g(y);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Dn,c,h)(y)}function c(y){return r&&C(),w(i),m(y)}function h(y){return e.parser.lazy[e.now().line]=i!==n.length,l=e.now().offset,g(y)}function m(y){return e.containerState={},t.attempt(Dn,d,g)(y)}function d(y){return i++,n.push([e.currentConstruct,e.containerState]),m(y)}function g(y){if(y===null){r&&C(),w(0),t.consume(y);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:a}),I(y)}function I(y){if(y===null){S(t.exit("chunkFlow"),!0),w(0),t.consume(y);return}return v(y)?(t.consume(y),S(t.exit("chunkFlow")),i=0,e.interrupt=void 0,o):(t.consume(y),I)}function S(y,P){const z=e.sliceStream(y);if(P&&z.push(null),y.previous=a,a&&(a.next=y),a=y,r.defineSkip(y.start),r.write(z),e.parser.lazy[y.start.line]){let b=r.events.length;for(;b--;)if(r.events[b][1].start.offset<l&&(!r.events[b][1].end||r.events[b][1].end.offset>l))return;const M=e.events.length;let q=M,R,k;for(;q--;)if(e.events[q][0]==="exit"&&e.events[q][1].type==="chunkFlow"){if(R){k=e.events[q][1].end;break}R=!0}for(w(i),b=M;b<e.events.length;)e.events[b][1].end={...k},b++;pt(e.events,q+1,0,e.events.slice(M)),e.events.length=b}}function w(y){let P=n.length;for(;P-- >y;){const z=n[P];e.containerState=z[1],z[0].exit.call(e,t)}n.length=y}function C(){r.write([null]),a=void 0,r=void 0,e.containerState._closeFlow=void 0}}function gs(t,e,n){return j(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const ks={tokenize:bs};function bs(t){const e=this,n=t.attempt(he,i,t.attempt(this.parser.constructs.flowInitial,r,j(t,t.attempt(this.parser.constructs.flow,r,t.attempt(Ga,r)),"linePrefix")));return n;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const xs={resolveAll:Ni()},ws=Ri("string"),Is=Ri("text");function Ri(t){return{resolveAll:Ni(t==="text"?ys:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],a=n.attempt(r,l,o);return l;function l(c){return u(c)?a(c):o(c)}function o(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),a(c)):(n.consume(c),s)}function u(c){if(c===null)return!0;const h=r[c];let m=-1;if(h)for(;++m<h.length;){const d=h[m];if(!d.previous||d.previous.call(i,i.previous))return!0}return!1}}}function Ni(t){return e;function e(n,i){let r=-1,a;for(;++r<=n.length;)a===void 0?n[r]&&n[r][1].type==="data"&&(a=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==a+2&&(n[a][1].end=n[r-1][1].end,n.splice(a+2,r-a-2),r=a+2),a=void 0);return t?t(n,i):n}}function ys(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let a=r.length,l=-1,o=0,s;for(;a--;){const u=r[a];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)o++,l--;if(l)break;l=-1}else if(u===-2)s=!0,o++;else if(u!==-1){a++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(o=0),o){const u={type:n===t.length||s||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?l:i.start._bufferIndex+l,_index:i.start._index+a,line:i.end.line,column:i.end.column-o,offset:i.end.offset-o},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const Ss={42:ut,43:ut,45:ut,48:ut,49:ut,50:ut,51:ut,52:ut,53:ut,54:ut,55:ut,56:ut,57:ut,62:Li},Ts={91:Za},Cs={[-2]:qe,[-1]:qe,32:qe},As={35:lo,42:ke,45:[zn,ke],60:uo,61:zn,95:ke,96:Ln,126:Ln},Ps={38:zi,92:vi},Es={[-5]:He,[-4]:He,[-3]:He,33:Eo,38:zi,42:en,60:[_a,ko],91:Fo,92:[io,vi],93:dn,95:en,96:qa},_s={null:[en,xs]},Fs={null:[42,95]},Ls={null:[]},vs=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Fs,contentInitial:Ts,disable:Ls,document:Ss,flow:As,flowInitial:Cs,insideSpan:_s,string:Ps,text:Es},Symbol.toStringTag,{value:"Module"}));function zs(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},a=[];let l=[],o=[];const s={attempt:M(z),check:M(b),consume:C,enter:y,exit:P,interrupt:M(b,{interrupt:!0})},u={code:null,containerState:{},defineSkip:I,events:[],now:g,parser:t,previous:null,sliceSerialize:m,sliceStream:d,write:h};let c=e.tokenize.call(u,s);return e.resolveAll&&a.push(e),u;function h(_){return l=mt(l,_),S(),l[l.length-1]!==null?[]:(q(e,0),u.events=Oe(a,u.events,u),u.events)}function m(_,A){return Ds(d(_),A)}function d(_){return Os(l,_)}function g(){const{_bufferIndex:_,_index:A,line:V,column:F,offset:E}=i;return{_bufferIndex:_,_index:A,line:V,column:F,offset:E}}function I(_){r[_.line]=_.column,k()}function S(){let _;for(;i._index<l.length;){const A=l[i._index];if(typeof A=="string")for(_=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===_&&i._bufferIndex<A.length;)w(A.charCodeAt(i._bufferIndex));else w(A)}}function w(_){c=c(_)}function C(_){v(_)?(i.line++,i.column=1,i.offset+=_===-3?2:1,k()):_!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===l[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=_}function y(_,A){const V=A||{};return V.type=_,V.start=g(),u.events.push(["enter",V,u]),o.push(V),V}function P(_){const A=o.pop();return A.end=g(),u.events.push(["exit",A,u]),A}function z(_,A){q(_,A.from)}function b(_,A){A.restore()}function M(_,A){return V;function V(F,E,B){let G,W,et,p;return Array.isArray(F)?K(F):"tokenize"in F?K([F]):D(F);function D(tt){return Lt;function Lt(ft){const St=ft!==null&&tt[ft],Tt=ft!==null&&tt.null,Dt=[...Array.isArray(St)?St:St?[St]:[],...Array.isArray(Tt)?Tt:Tt?[Tt]:[]];return K(Dt)(ft)}}function K(tt){return G=tt,W=0,tt.length===0?B:f(tt[W])}function f(tt){return Lt;function Lt(ft){return p=R(),et=tt,tt.partial||(u.currentConstruct=tt),tt.name&&u.parser.constructs.disable.null.includes(tt.name)?xt():tt.tokenize.call(A?Object.assign(Object.create(u),A):u,s,st,xt)(ft)}}function st(tt){return _(et,p),E}function xt(tt){return p.restore(),++W<G.length?f(G[W]):B}}}function q(_,A){_.resolveAll&&!a.includes(_)&&a.push(_),_.resolve&&pt(u.events,A,u.events.length-A,_.resolve(u.events.slice(A),u)),_.resolveTo&&(u.events=_.resolveTo(u.events,u))}function R(){const _=g(),A=u.previous,V=u.currentConstruct,F=u.events.length,E=Array.from(o);return{from:F,restore:B};function B(){i=_,u.previous=A,u.currentConstruct=V,u.events.length=F,o=E,k()}}function k(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function Os(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,a=e.end._bufferIndex;let l;if(n===r)l=[t[n].slice(i,a)];else{if(l=t.slice(n,r),i>-1){const o=l[0];typeof o=="string"?l[0]=o.slice(i):l.shift()}a>0&&l.push(t[r].slice(0,a))}return l}function Ds(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const a=t[n];let l;if(typeof a=="string")l=a;else switch(a){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=e?" ":"	";break}case-1:{if(!e&&r)continue;l=" ";break}default:l=String.fromCharCode(a)}r=a===-2,i.push(l)}return i.join("")}function Ms(t){const i={constructs:yi([vs,...(t||{}).extensions||[]]),content:r(ds),defined:[],document:r(ms),flow:r(ks),lazy:{},string:r(ws),text:r(Is)};return i;function r(a){return l;function l(o){return zs(i,a,o)}}}function $s(t){for(;!Oi(t););return t}const Mn=/[\0\t\n\r]/g;function Rs(){let t=1,e="",n=!0,i;return r;function r(a,l,o){const s=[];let u,c,h,m,d;for(a=e+(typeof a=="string"?a.toString():new TextDecoder(l||void 0).decode(a)),h=0,e="",n&&(a.charCodeAt(0)===65279&&h++,n=void 0);h<a.length;){if(Mn.lastIndex=h,u=Mn.exec(a),m=u&&u.index!==void 0?u.index:a.length,d=a.charCodeAt(m),!u){e=a.slice(h);break}if(d===10&&h===m&&i)s.push(-3),i=void 0;else switch(i&&(s.push(-5),i=void 0),h<m&&(s.push(a.slice(h,m)),t+=m-h),d){case 0:{s.push(65533),t++;break}case 9:{for(c=Math.ceil(t/4)*4,s.push(-2);t++<c;)s.push(-1);break}case 10:{s.push(-4),t=1;break}default:i=!0,t=1}h=m+1}return o&&(i&&s.push(-5),e&&s.push(e),s.push(null)),s}}function be(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?$n(t.position):"start"in t||"end"in t?$n(t):"line"in t||"column"in t?nn(t):""}function nn(t){return Rn(t&&t.line)+":"+Rn(t&&t.column)}function $n(t){return nn(t&&t.start)+"-"+nn(t&&t.end)}function Rn(t){return t&&typeof t=="number"?t:1}const Bi={}.hasOwnProperty;function Ns(t,e,n){return typeof e!="string"&&(n=e,e=void 0),Bs(n)($s(Ms(n).document().write(Rs()(t,e,!0))))}function Bs(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(pn),autolinkProtocol:R,autolinkEmail:R,atxHeading:a(Qt),blockQuote:a(Tt),characterEscape:R,characterReference:R,codeFenced:a(Dt),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:a(Dt,l),codeText:a(ce,l),codeTextData:R,data:R,codeFlowValue:R,definition:a(de),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:a(pe),hardBreakEscape:a(Gt),hardBreakTrailing:a(Gt),htmlFlow:a(Kt,l),htmlFlowData:R,htmlText:a(Kt,l),htmlTextData:R,image:a(Yt),label:l,link:a(pn),listItem:a(Ui),listItemValue:m,listOrdered:a(mn,h),listUnordered:a(mn),paragraph:a(Wi),reference:f,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:a(Qt),strong:a(Qi),thematicBreak:a(Ki)},exit:{atxHeading:s(),atxHeadingSequence:z,autolink:s(),autolinkEmail:St,autolinkProtocol:ft,blockQuote:s(),characterEscapeValue:k,characterReferenceMarkerHexadecimal:xt,characterReferenceMarkerNumeric:xt,characterReferenceValue:tt,characterReference:Lt,codeFenced:s(S),codeFencedFence:I,codeFencedFenceInfo:d,codeFencedFenceMeta:g,codeFlowValue:k,codeIndented:s(w),codeText:s(E),codeTextData:k,data:k,definition:s(),definitionDestinationString:P,definitionLabelString:C,definitionTitleString:y,emphasis:s(),hardBreakEscape:s(A),hardBreakTrailing:s(A),htmlFlow:s(V),htmlFlowData:k,htmlText:s(F),htmlTextData:k,image:s(G),label:et,labelText:W,lineEnding:_,link:s(B),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:st,resourceDestinationString:p,resourceTitleString:D,resource:K,setextHeading:s(q),setextHeadingLineSequence:M,setextHeadingText:b,strong:s(),thematicBreak:s()}};ji(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(x){let T={type:"root",children:[]};const O={stack:[T],tokenStack:[],config:e,enter:o,exit:u,buffer:l,resume:c,data:n},N=[];let Y=-1;for(;++Y<x.length;)if(x[Y][1].type==="listOrdered"||x[Y][1].type==="listUnordered")if(x[Y][0]==="enter")N.push(Y);else{const gt=N.pop();Y=r(x,gt,Y)}for(Y=-1;++Y<x.length;){const gt=e[x[Y][0]];Bi.call(gt,x[Y][1].type)&&gt[x[Y][1].type].call(Object.assign({sliceSerialize:x[Y][2].sliceSerialize},O),x[Y][1])}if(O.tokenStack.length>0){const gt=O.tokenStack[O.tokenStack.length-1];(gt[1]||Nn).call(O,void 0,gt[0])}for(T.position={start:vt(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:vt(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<e.transforms.length;)T=e.transforms[Y](T)||T;return T}function r(x,T,O){let N=T-1,Y=-1,gt=!1,Mt,Ct,Jt,Xt;for(;++N<=O;){const dt=x[N];switch(dt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{dt[0]==="enter"?Y++:Y--,Xt=void 0;break}case"lineEndingBlank":{dt[0]==="enter"&&(Mt&&!Xt&&!Y&&!Jt&&(Jt=N),Xt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Xt=void 0}if(!Y&&dt[0]==="enter"&&dt[1].type==="listItemPrefix"||Y===-1&&dt[0]==="exit"&&(dt[1].type==="listUnordered"||dt[1].type==="listOrdered")){if(Mt){let jt=N;for(Ct=void 0;jt--;){const At=x[jt];if(At[1].type==="lineEnding"||At[1].type==="lineEndingBlank"){if(At[0]==="exit")continue;Ct&&(x[Ct][1].type="lineEndingBlank",gt=!0),At[1].type="lineEnding",Ct=jt}else if(!(At[1].type==="linePrefix"||At[1].type==="blockQuotePrefix"||At[1].type==="blockQuotePrefixWhitespace"||At[1].type==="blockQuoteMarker"||At[1].type==="listItemIndent"))break}Jt&&(!Ct||Jt<Ct)&&(Mt._spread=!0),Mt.end=Object.assign({},Ct?x[Ct][1].start:dt[1].end),x.splice(Ct||N,0,["exit",Mt,dt[2]]),N++,O++}if(dt[1].type==="listItemPrefix"){const jt={type:"listItem",_spread:!1,start:Object.assign({},dt[1].start),end:void 0};Mt=jt,x.splice(N,0,["enter",jt,dt[2]]),N++,O++,Jt=void 0,Xt=!0}}}return x[T][1]._spread=gt,O}function a(x,T){return O;function O(N){o.call(this,x(N),N),T&&T.call(this,N)}}function l(){this.stack.push({type:"fragment",children:[]})}function o(x,T,O){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([T,O||void 0]),x.position={start:vt(T.start),end:void 0}}function s(x){return T;function T(O){x&&x.call(this,O),u.call(this,O)}}function u(x,T){const O=this.stack.pop(),N=this.tokenStack.pop();if(N)N[0].type!==x.type&&(T?T.call(this,x,N[0]):(N[1]||Nn).call(this,x,N[0]));else throw new Error("Cannot close `"+x.type+"` ("+be({start:x.start,end:x.end})+"): it’s not open");O.position.end=vt(x.end)}function c(){return ta(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function m(x){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function d(){const x=this.resume(),T=this.stack[this.stack.length-1];T.lang=x}function g(){const x=this.resume(),T=this.stack[this.stack.length-1];T.meta=x}function I(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const x=this.resume(),T=this.stack[this.stack.length-1];T.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const x=this.resume(),T=this.stack[this.stack.length-1];T.value=x.replace(/(\r?\n|\r)$/g,"")}function C(x){const T=this.resume(),O=this.stack[this.stack.length-1];O.label=T,O.identifier=kt(this.sliceSerialize(x)).toLowerCase()}function y(){const x=this.resume(),T=this.stack[this.stack.length-1];T.title=x}function P(){const x=this.resume(),T=this.stack[this.stack.length-1];T.url=x}function z(x){const T=this.stack[this.stack.length-1];if(!T.depth){const O=this.sliceSerialize(x).length;T.depth=O}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function M(x){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function R(x){const O=this.stack[this.stack.length-1].children;let N=O[O.length-1];(!N||N.type!=="text")&&(N=Gi(),N.position={start:vt(x.start),end:void 0},O.push(N)),this.stack.push(N)}function k(x){const T=this.stack.pop();T.value+=this.sliceSerialize(x),T.position.end=vt(x.end)}function _(x){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const O=T.children[T.children.length-1];O.position.end=vt(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(T.type)&&(R.call(this,x),k.call(this,x))}function A(){this.data.atHardBreak=!0}function V(){const x=this.resume(),T=this.stack[this.stack.length-1];T.value=x}function F(){const x=this.resume(),T=this.stack[this.stack.length-1];T.value=x}function E(){const x=this.resume(),T=this.stack[this.stack.length-1];T.value=x}function B(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=T,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function G(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=T,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function W(x){const T=this.sliceSerialize(x),O=this.stack[this.stack.length-2];O.label=ia(T),O.identifier=kt(T).toLowerCase()}function et(){const x=this.stack[this.stack.length-1],T=this.resume(),O=this.stack[this.stack.length-1];if(this.data.inReference=!0,O.type==="link"){const N=x.children;O.children=N}else O.alt=T}function p(){const x=this.resume(),T=this.stack[this.stack.length-1];T.url=x}function D(){const x=this.resume(),T=this.stack[this.stack.length-1];T.title=x}function K(){this.data.inReference=void 0}function f(){this.data.referenceType="collapsed"}function st(x){const T=this.resume(),O=this.stack[this.stack.length-1];O.label=T,O.identifier=kt(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function xt(x){this.data.characterReferenceType=x.type}function tt(x){const T=this.sliceSerialize(x),O=this.data.characterReferenceType;let N;O?(N=Ii(T,O==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):N=hn(T);const Y=this.stack[this.stack.length-1];Y.value+=N}function Lt(x){const T=this.stack.pop();T.position.end=vt(x.end)}function ft(x){k.call(this,x);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(x)}function St(x){k.call(this,x);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(x)}function Tt(){return{type:"blockquote",children:[]}}function Dt(){return{type:"code",lang:null,meta:null,value:""}}function ce(){return{type:"inlineCode",value:""}}function de(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pe(){return{type:"emphasis",children:[]}}function Qt(){return{type:"heading",depth:0,children:[]}}function Gt(){return{type:"break"}}function Kt(){return{type:"html",value:""}}function Yt(){return{type:"image",title:null,url:"",alt:null}}function pn(){return{type:"link",title:null,url:"",children:[]}}function mn(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[]}}function Ui(x){return{type:"listItem",spread:x._spread,checked:null,children:[]}}function Wi(){return{type:"paragraph",children:[]}}function Qi(){return{type:"strong",children:[]}}function Gi(){return{type:"text",value:""}}function Ki(){return{type:"thematicBreak"}}}function vt(t){return{line:t.line,column:t.column,offset:t.offset}}function ji(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?ji(t,i):js(t,i)}}function js(t,e){let n;for(n in e)if(Bi.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Nn(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+be({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+be({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+be({start:e.start,end:e.end})+") is still open")}function qs(t,e){return function(n,i,r){}}function Bn(t){const e=[];for(let n=0;n<t.style.length;n++){const i=t.style.item(n),r=t.style.getPropertyValue(i);e.push(`${i}: ${r}`)}return e.sort().join("; ")}function qi(t,e,n=""){if(t.nodeType!==e.nodeType)throw new Error(`Node type mismatch at ${n}. Received: '${t.nodeType}', Expected: '${e.nodeType}'`);if(t.nodeName!==e.nodeName)throw new Error(`Node name mismatch at ${n}. Received: '${t.nodeName}', Expected: '${e.nodeName}'`);if(t instanceof HTMLElement&&e instanceof HTMLElement){const i=Bn(t),r=Bn(e);if(i!==r)throw new Error(`Style mismatch at ${n}. Received ${i}, expected ${r}`)}if(t instanceof Element&&e instanceof Element){const i=Array.from(t.attributes).sort((a,l)=>a.name.localeCompare(l.name)).filter(a=>a.name!=="data-hk"),r=Array.from(e.attributes).sort((a,l)=>a.name.localeCompare(l.name)).filter(a=>a.name!=="data-hk");if(i.length!==r.length)throw new Error(`Attribute count mismatch at ${n}. Received: ${i.length}, Expected: ${r.length}`);for(let a=0;a<i.length;a++){const l=i[a],o=r[a];if(l.name!==o.name)throw new Error(`Attribute name mismatch at ${n}. Found '${l.name}', expected '${o.name}'`);if(l.name!=="style"&&l.value!==o.value)throw new Error(`Attribute value mismatch for '${l.name}' at ${n}. Received: '${l.value}', Expected: '${o.value}'`)}}if(t.childNodes.length!==e.childNodes.length)throw new Error(`Child element count mismatch at ${n}. Received: ${t.childNodes.length}, Expected: ${e.childNodes.length}`);for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i],a=e.childNodes[i],l=`${n} > ${r instanceof HTMLElement?r.tagName:"TextNode"}:nth-child(${i+1})`;if(r instanceof HTMLElement&&!(a instanceof HTMLElement)||!(r instanceof HTMLElement)&&a instanceof HTMLElement)throw new Error(`Child type mismatch at ${n}. Received: ${r}, Expected: ${a}`);if(r instanceof HTMLElement&&a instanceof HTMLElement)qi(r,a,l);else if(r.textContent!==a.textContent)throw new Error(`Text content mismatch at ${n}. Received: '${t.textContent}', Expected: '${e.textContent}'`)}}var Hs=X("<blockquote>"),Vs=X("<br>"),Us=X("<pre><code>"),Ws=X("<del>"),Qs=X("<em>"),Gs=X("<div>"),Ks=X("<img>"),Ys=X("<code>"),Js=X('<a target=_blank rel="noopener noreferrer">'),Xs=X("<li>"),Zs=X("<p>"),tu=X("<strong>"),eu=X("<thead>"),nu=X("<tbody>"),iu=X("<table>"),ru=X("<tr>"),lu=X("<hr>");const au=qs(),Hi=se(),Vi=se([]),Ve=se();function ou(){return ue(Vi)}function su(){const t=ue(Hi);if(!t)throw new Error("Use useMarkdownProps in a descendant of MdastRenderer");return t}const Ht=t=>{throw new Error(`Did not implement node type yet: ${t.node.type}`)},uu={definition:Ht,footnoteDefinition:Ht,footnoteReference:Ht,imageReference:Ht,linkReference:Ht,yaml:Ht,blockquote(t){return(()=>{var e=Hs();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},break:()=>Vs(),code(t){return(()=>{var e=Us(),n=e.firstChild;return H(n,()=>t.node.value),e})()},delete(t){return(()=>{var e=Ws();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},emphasis(t){return(()=>{var e=Qs();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},heading(t){return L($e,{get component(){return`h${t.node.depth}`},get children(){return L(rt.Children,{get node(){return t.node}})}})},html(t){return(()=>{var e=Gs();return at(()=>e.innerHTML=t.node.value),e})()},image(t){return(()=>{var e=Ks();return at(n=>{var i=t.node.url,r=t.node.alt??"";return i!==n.e&&Nt(e,"src",n.e=i),r!==n.t&&Nt(e,"alt",n.t=r),n},{e:void 0,t:void 0}),e})()},inlineCode(t){return(()=>{var e=Ys();return H(e,()=>t.node.value),e})()},link(t){return(()=>{var e=Js();return H(e,L(ne,{get each(){return t.node.children},children:n=>L(rt.Node,{node:n})})),at(()=>Nt(e,"href",t.node.url)),e})()},list(t){return L($e,{get component(){return t.node.ordered?"ol":"ul"},get children(){return L(rt.Children,{get node(){return t.node}})}})},listItem(t){return(()=>{var e=Xs();return H(e,L(_t,{get when(){return t.node.spread},get fallback(){return L(rt.Children,{get node(){return t.node.children[0]}})},get children(){return L(rt.Node,{get node(){return t.node.children[0]}})}}),null),H(e,L(ne,{get each(){return t.node.children.slice(1)},children:n=>L(rt.Node,{node:n})}),null),e})()},paragraph(t){return(()=>{var e=Zs();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},strong(t){return(()=>{var e=tu();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},text(t){return Z(()=>t.node.value)},table(t){return(()=>{var e=iu();return H(e,L(Ve.Provider,{value:"head",get children(){var n=eu();return H(n,L(rt.Node,{get node(){return t.node.children[0]}})),n}}),null),H(e,L(Ve.Provider,{value:"body",get children(){var n=nu();return H(n,L(ne,{get each(){return t.node.children.slice(1)},children:i=>L(rt.Node,{node:i})})),n}}),null),e})()},tableCell(t){const e=ue(Ve);return L($e,{component:e==="head"?"th":"td",get children(){return L(rt.Children,{get node(){return t.node}})}})},tableRow(t){return(()=>{var e=ru();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},thematicBreak(){return lu()}},rt={Children(t){return L(ne,{get each(){return"children"in t.node&&Array.isArray(t.node.children)?t.node.children:[]},children:e=>L(rt.Node,{node:e})})},Node(t){const e=su();au("DefaultNode processing:",t.node);const n=()=>e.renderers?.[t.node.type]??uu[t.node.type];return rn(()=>{if(!n())throw new Error(`No Renderer For ${t.node.type}`)}),L(Vi.Provider,{get value(){return[t.node,...ou()]},get children(){return L(_t,{get when(){return n()},keyed:!0,children:i=>L(i,{get node(){return t.node}})})}})}};function Ue(t){const[,e]=ti(t,["markdown","renderers"]),n=Z(()=>Ns(t.markdown,e));return L(Hi.Provider,{value:t,get children(){return L(rt.Children,{get node(){return n()}})}})}const hu="_App_1ufb8_1",cu="_logo_1ufb8_5",du="_header_1ufb8_11",pu="_link_1ufb8_22",mu="_markdown_1ufb8_35",fu="_container_1ufb8_100",gu="_result_1ufb8_108",ku="_title_1ufb8_117",bu="_subtitle_1ufb8_121",nt={App:hu,logo:cu,"logo-spin":"_logo-spin_1ufb8_1",header:du,link:pu,markdown:mu,container:fu,result:gu,title:ku,subtitle:bu};var xu=X("<div>No snapshot found"),wu=X("<div><div>✅ MATCH</div><div>HTML matches snapshot"),Iu=X("<div><div><div><h3><a>🔗</a> </h3></div><div></div></div><div><div><div>A: Markdown Source</div><pre></pre></div><div><div>B: CSR Markdown</div><div><div>Raw HTML:</div><pre></pre></div><div><div>Rendered:</div><div></div></div></div><div><div>C: SSR Snapshot</div><div><div>Raw HTML:</div><pre></pre></div><div><div>Rendered:</div><div></div></div></div><div><div>D: Comparison</div><div>"),yu=X("<div>Extensions: "),jn=X("<div>"),Su=X("<div>Mdast Extensions: "),Tu=X("<div><div>❌ MISMATCH</div><div>"),Cu=X("<div><h1>Solid Mdast Markdown Test Viewer</h1><div><h3>Test Statistics</h3><div><span>Total: </span><span>Passed: </span><span>Failed: </span></div></div><div>");const qn=new DOMParser;function Au(t){let e=null;const[n,i]=Et(),[r,a]=Et();return Xi(()=>{a(e.innerHTML);try{qi(qn.parseFromString(e.innerHTML,"text/html").querySelector("body"),qn.parseFromString(t.output,"text/html").querySelector("body")),i({success:!0})}catch(l){i({success:!1,error:l instanceof Error?l.message:`${l}`})}}),rn(()=>{const l=n();l&&t.onResult(l)}),(()=>{var l=Iu(),o=l.firstChild,s=o.firstChild,u=s.firstChild,c=u.firstChild;c.nextSibling;var h=s.nextSibling,m=o.nextSibling,d=m.firstChild,g=d.firstChild,I=g.nextSibling,S=d.nextSibling,w=S.firstChild,C=w.nextSibling,y=C.firstChild,P=y.nextSibling,z=C.nextSibling,b=z.firstChild,M=b.nextSibling,q=S.nextSibling,R=q.firstChild,k=R.nextSibling,_=k.firstChild,A=_.nextSibling,V=k.nextSibling,F=V.firstChild,E=F.nextSibling,B=q.nextSibling,G=B.firstChild,W=G.nextSibling;o.style.setProperty("padding","12px 16px"),o.style.setProperty("border-bottom","1px solid #ddd"),o.style.setProperty("display","flex"),o.style.setProperty("justify-content","space-between"),o.style.setProperty("align-items","center"),H(u,()=>t.title,null),h.style.setProperty("padding","4px 12px"),h.style.setProperty("border-radius","16px"),h.style.setProperty("color","white"),h.style.setProperty("font-weight","bold"),h.style.setProperty("font-size","12px"),H(h,()=>n()?.success?"PASS":"FAIL"),m.style.setProperty("display","grid"),m.style.setProperty("grid-template-columns","1fr 2fr 2fr 1fr"),m.style.setProperty("min-height","200px"),d.style.setProperty("padding","16px"),d.style.setProperty("border-right","1px solid #eee"),d.style.setProperty("overflow-x","hidden"),I.style.setProperty("margin","0"),I.style.setProperty("padding","8px"),I.style.setProperty("background","#f8f8f8"),I.style.setProperty("border-radius","4px"),I.style.setProperty("font-size","12px"),I.style.setProperty("white-space","pre-wrap"),I.style.setProperty("word-wrap","break-word"),I.style.setProperty("border","1px solid #e0e0e0"),I.style.setProperty("max-height","160px"),I.style.setProperty("overflow","auto"),H(I,()=>t.input),H(d,L(_t,{get when(){return t.extensions},children:p=>[(()=>{var D=yu();return at(()=>it(D,nt.subtitle)),D})(),(()=>{var D=jn();return H(D,L(Ue,{get markdown(){return p().map(K=>`- \`${K}\``).join(`
`)}})),at(()=>it(D,nt.markdown)),D})()]}),null),H(d,L(_t,{get when(){return t.mdastExtensions},children:p=>[(()=>{var D=Su();return at(()=>it(D,nt.subtitle)),D})(),(()=>{var D=jn();return H(D,L(Ue,{get markdown(){return p().map(K=>`- \`${K}\``).join(`
`)}})),at(()=>it(D,nt.markdown)),D})()]}),null),S.style.setProperty("padding","16px"),S.style.setProperty("border-right","1px solid #eee"),S.style.setProperty("overflow-x","hidden"),C.style.setProperty("margin-bottom","8px"),P.style.setProperty("margin","0"),P.style.setProperty("padding","6px"),P.style.setProperty("border-radius","3px"),P.style.setProperty("font-size","10px"),P.style.setProperty("word-wrap","break-word"),P.style.setProperty("border","1px solid #e0e0e0"),P.style.setProperty("max-height","60px"),P.style.setProperty("overflow","auto"),H(P,r);var et=e;return typeof et=="function"?ni(et,M):e=M,H(M,L(Ue,{get markdown(){return t.input},get extensions(){return t.extensions?.map(p=>hs[p]())},get mdastExtensions(){return t.mdastExtensions?.map(p=>cs[p]())}})),q.style.setProperty("padding","16px"),q.style.setProperty("border-right","1px solid #eee"),q.style.setProperty("overflow-x","hidden"),k.style.setProperty("margin-bottom","8px"),A.style.setProperty("margin","0"),A.style.setProperty("padding","6px"),A.style.setProperty("border-radius","3px"),A.style.setProperty("font-size","10px"),A.style.setProperty("word-wrap","break-word"),A.style.setProperty("border","1px solid #e0e0e0"),A.style.setProperty("max-height","60px"),A.style.setProperty("overflow","auto"),H(A,()=>t.output),H(V,L(_t,{get when(){return t.output==="No snapshot found"},get children(){var p=xu();return p.style.setProperty("color","#999"),p.style.setProperty("font-style","italic"),p.style.setProperty("text-align","center"),p}}),null),B.style.setProperty("padding","16px"),B.style.setProperty("overflow-x","hidden"),W.style.setProperty("padding","8px"),W.style.setProperty("border-radius","4px"),W.style.setProperty("min-height","40px"),W.style.setProperty("border","1px solid #e0e0e0"),W.style.setProperty("text-align","center"),W.style.setProperty("display","flex"),W.style.setProperty("align-items","center"),W.style.setProperty("justify-content","center"),W.style.setProperty("flex-direction","column"),W.style.setProperty("gap","8px"),H(W,L(_t,{get when(){return n()?.success},get fallback(){return(()=>{var p=Tu(),D=p.firstChild,K=D.nextSibling;return p.style.setProperty("color","#d32f2f"),D.style.setProperty("font-weight","bold"),D.style.setProperty("margin-bottom","4px"),K.style.setProperty("font-size","12px"),H(K,()=>n()?.error??"Oopsie"),p})()},get children(){var p=wu(),D=p.firstChild,K=D.nextSibling;return p.style.setProperty("color","#2e7d32"),D.style.setProperty("font-weight","bold"),D.style.setProperty("margin-bottom","4px"),K.style.setProperty("font-size","12px"),p}})),at(p=>{var D=nt.result,K=n()?.success?"1px solid #ddd":"2px solid #ff6b6b",f=n()?.success?"#e8f5e8":"#ffe6e6",st=nt.title,xt=`./?t=${t.title}`,tt=n()?.success?"#4caf50":"#f44336",Lt=nt.subtitle,ft=nt.subtitle,St=nt.subtitle,Tt=nt.subtitle,Dt=In(nt.container,nt.markdown),ce=nt.subtitle,de=nt.subtitle,pe=nt.subtitle,Qt=In(nt.container,nt.markdown),Gt=t.output!=="No snapshot found"?t.output:"",Kt=nt.subtitle,Yt=n()?.success?"#e8f5e8":"#ffe6e6";return D!==p.e&&it(l,p.e=D),K!==p.t&&((p.t=K)!=null?l.style.setProperty("border",K):l.style.removeProperty("border")),f!==p.a&&((p.a=f)!=null?o.style.setProperty("background",f):o.style.removeProperty("background")),st!==p.o&&it(u,p.o=st),xt!==p.i&&Nt(c,"href",p.i=xt),tt!==p.n&&((p.n=tt)!=null?h.style.setProperty("background",tt):h.style.removeProperty("background")),Lt!==p.s&&it(g,p.s=Lt),ft!==p.h&&it(w,p.h=ft),St!==p.r&&it(y,p.r=St),Tt!==p.d&&it(b,p.d=Tt),Dt!==p.l&&it(M,p.l=Dt),ce!==p.u&&it(R,p.u=ce),de!==p.c&&it(_,p.c=de),pe!==p.w&&it(F,p.w=pe),Qt!==p.m&&it(E,p.m=Qt),Gt!==p.f&&(E.innerHTML=p.f=Gt),Kt!==p.y&&it(G,p.y=Kt),Yt!==p.g&&((p.g=Yt)!=null?W.style.setProperty("background",Yt):W.style.removeProperty("background")),p},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),l})()}function Pu(){const[t]=Hr(),[e,n]=cl({}),i=Z(()=>{const a=Object.values(e),l=a.length,o=a.filter(u=>u.success).length,s=l-o;return{total:l,passed:o,failed:s}}),r=Ji(()=>t.t,(a,l)=>l===void 0?!0:Array.isArray(l)?!!a.includes(l[0]??""):a.includes(l));return(()=>{var a=Cu(),l=a.firstChild,o=l.nextSibling,s=o.firstChild,u=s.nextSibling,c=u.firstChild;c.firstChild;var h=c.nextSibling;h.firstChild;var m=h.nextSibling;m.firstChild;var d=o.nextSibling;return a.style.setProperty("padding","20px"),a.style.setProperty("font-family","system-ui, -apple-system, sans-serif"),a.style.setProperty("max-width","1400px"),a.style.setProperty("margin","0 auto"),o.style.setProperty("margin-bottom","20px"),o.style.setProperty("padding","16px"),o.style.setProperty("background","#f5f5f5"),o.style.setProperty("border-radius","8px"),s.style.setProperty("margin","0 0 10px 0"),u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),H(c,()=>i().total,null),h.style.setProperty("color","green"),H(h,()=>i().passed,null),m.style.setProperty("color","red"),H(m,()=>i().failed,null),d.style.setProperty("display","grid"),d.style.setProperty("gap","20px"),H(d,L(ne,{get each(){return Object.entries(dl)},children:([g,I])=>L(_t,{get when(){return r(g)},get children(){return L(Au,Zn(I,{title:g,onResult:S=>n(g,S)}))}})})),a})()}function Eu(){return L(al,{get base(){return"solid-mdast-renderer"},get children(){return L(Zr,{path:"/",component:Pu})}})}xr(()=>L(Eu,{}),document.getElementById("root"));
