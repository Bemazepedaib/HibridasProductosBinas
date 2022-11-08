"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3269],{3269:(G,A,_)=>{_.r(A),_.d(A,{startInputShims:()=>Y});var w=_(5861),b=_(6642),v=_(5730);const y=new WeakMap,L=(t,n,e,o=0)=>{y.has(t)!==e&&(e?C(t,n,o):M(t,n))},I=t=>t===t.getRootNode().activeElement,C=(t,n,e)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),y.set(t,r);const s="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${e}px,0) scale(0)`},M=(t,n)=>{const e=y.get(t);e&&(y.delete(t),e.remove()),t.style.pointerEvents="",n.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",F=function(){var t=(0,w.Z)(function*(n,e,o,r,i){if(!o&&!r)return;const s=((t,n,e)=>{var o;return((t,n,e,o)=>{const r=t.top,i=t.bottom,s=n.top,a=s+15,f=.75*Math.min(n.bottom,o-e)-i,S=a-r,u=Math.round(f<0?-f:S>0?-S:0),c=Math.min(u,r-s),h=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,h)),scrollPadding:e,inputSafeY:4-(r-a)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),n.getBoundingClientRect(),e,t.ownerDocument.defaultView.innerHeight)})(n,o||r,i);if(o&&Math.abs(s.scrollAmount)<4)e.focus();else if(L(n,e,!0,s.inputSafeY),e.focus(),(0,v.r)(()=>n.click()),"undefined"!=typeof window){let d;const a=function(){var f=(0,w.Z)(function*(){void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",a),o&&(yield(0,b.c)(o,0,s.scrollAmount,s.scrollDuration)),L(n,e,!1,s.inputSafeY),e.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",a)};if(o){const f=yield(0,b.g)(o);if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===e.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",a),void(d=setTimeout(a,1e3))}a()}});return function(e,o,r,i,s){return t.apply(this,arguments)}}(),T="$ionPaddingTimer",P=(t,n)=>{var e,o;if("INPUT"!==t.tagName||t.parentElement&&"ION-INPUT"===t.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(e=t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,b.f)(t);if(null===r)return;const i=r[T];i&&clearTimeout(i),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[T]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},Y=t=>{const n=document,e=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),r=t.getBoolean("hideCaretOnScroll",!0),i=t.getBoolean("inputBlurring",!0),s=t.getBoolean("scrollPadding",!0),d=Array.from(n.querySelectorAll("ion-input, ion-textarea")),a=new WeakMap,l=new WeakMap,f=function(){var u=(0,w.Z)(function*(c){yield new Promise(g=>(0,v.c)(c,g));const D=c.shadowRoot||c,h=D.querySelector("input")||D.querySelector("textarea"),m=(0,b.f)(c),B=m?null:c.closest("ion-footer");if(h){if(m&&r&&!a.has(c)){const g=((t,n,e)=>{if(!e||!n)return()=>{};const o=d=>{I(n)&&L(t,n,d)},r=()=>L(t,n,!1),i=()=>o(!0),s=()=>o(!1);return(0,v.a)(e,"ionScrollStart",i),(0,v.a)(e,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(e,"ionScrollStart",i),(0,v.b)(e,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(c,h,m);a.set(c,g)}if("date"!==h.type&&"datetime-local"!==h.type&&(m||B)&&o&&!l.has(c)){const g=((t,n,e,o,r)=>{let i;const s=a=>{i=(0,v.p)(a)},d=a=>{if(!i)return;const l=(0,v.p)(a);!((t,n,e)=>{if(n&&e){const o=n.x-e.x,r=n.y-e.y;return o*o+r*r>t*t}return!1})(6,i,l)&&!I(n)&&F(t,n,e,o,r)};return t.addEventListener("touchstart",s,{capture:!0,passive:!0}),t.addEventListener("touchend",d,!0),()=>{t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",d,!0)}})(c,h,m,B,e);l.set(c,g)}}});return function(D){return u.apply(this,arguments)}}();i&&(()=>{let t=!0,n=!1;const e=document;(0,v.a)(e,"ionScrollStart",()=>{n=!0}),e.addEventListener("focusin",()=>{t=!0},!0),e.addEventListener("touchend",s=>{if(n)return void(n=!1);const d=e.activeElement;if(!d||d.matches(p))return;const a=s.target;a!==d&&(a.matches(p)||a.closest(p)||(t=!1,setTimeout(()=>{t||d.blur()},50)))},!1)})(),s&&(t=>{const n=document;n.addEventListener("focusin",r=>{P(r.target,t)}),n.addEventListener("focusout",r=>{P(r.target,0)})})(e);for(const u of d)f(u);n.addEventListener("ionInputDidLoad",u=>{f(u.detail)}),n.addEventListener("ionInputDidUnload",u=>{(u=>{if(r){const c=a.get(u);c&&c(),a.delete(u)}if(o){const c=l.get(u);c&&c(),l.delete(u)}})(u.detail)})}}}]);