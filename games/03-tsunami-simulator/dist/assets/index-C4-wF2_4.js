var Wv=Object.defineProperty;var Xv=(t,e,n)=>e in t?Wv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $e=(t,e,n)=>Xv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},Hl={},Hm={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),Yv=Symbol.for("react.portal"),qv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),Md=Symbol.iterator;function i0(t){return t===null||typeof t!="object"?null:(t=Md&&t[Md]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Wm={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Vm}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=Bs.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Vm}var nf=tf.prototype=new Xm;nf.constructor=tf;Gm(nf,Bs.prototype);nf.isPureReactComponent=!0;var Ed=Array.isArray,jm=Object.prototype.hasOwnProperty,rf={current:null},Ym={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jm.call(e,i)&&!Ym.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wo,type:t,key:s,ref:o,props:r,_owner:rf.current}}function r0(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function s0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Td=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?s0(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case Yv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hu(o,0):i,Ed(r)?(n="",t!=null&&(n=t.replace(Td,"$&/")+"/"),ja(r,e,n,"",function(u){return u})):r!=null&&(sf(r)&&(r=r0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Td,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ed(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hu(s,a);o+=ja(s,e,n,l,r)}else if(l=i0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hu(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function o0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Ya={transition:null},a0={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:rf};function $m(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Bs;ke.Fragment=qv;ke.Profiler=Kv;ke.PureComponent=tf;ke.StrictMode=$v;ke.Suspense=e0;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;ke.act=$m;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jm.call(e,l)&&!Ym.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Wo,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:Jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zv,_context:t},t.Consumer=t};ke.createElement=qm;ke.createFactory=function(t){var e=qm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Qv,render:t}};ke.isValidElement=sf;ke.lazy=function(t){return{$$typeof:n0,_payload:{_status:-1,_result:t},_init:o0}};ke.memo=function(t,e){return{$$typeof:t0,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ke.unstable_act=$m;ke.useCallback=function(t,e){return Jt.current.useCallback(t,e)};ke.useContext=function(t){return Jt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Jt.current.useEffect(t,e)};ke.useId=function(){return Jt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Jt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};ke.useRef=function(t){return Jt.current.useRef(t)};ke.useState=function(t){return Jt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Jt.current.useTransition()};ke.version="18.3.1";Hm.exports=ke;var sn=Hm.exports;const l0=jv(sn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=sn,c0=Symbol.for("react.element"),h0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,d0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p0={key:!0,ref:!0,__self:!0,__source:!0};function Km(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)f0.call(e,i)&&!p0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:c0,type:t,key:s,ref:o,props:r,_owner:d0.current}}Hl.Fragment=h0;Hl.jsx=Km;Hl.jsxs=Km;Bm.exports=Hl;var Te=Bm.exports,Sc={},Zm={exports:{}},Tn={},Jm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var K=L.length;L.push(q);e:for(;0<K;){var re=K-1>>>1,we=L[re];if(0<r(we,q))L[re]=q,L[K]=we,K=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],K=L.pop();if(K!==q){L[0]=K;e:for(var re=0,we=L.length,Be=we>>>1;re<Be;){var G=2*(re+1)-1,te=L[G],he=G+1,ae=L[he];if(0>r(te,K))he<we&&0>r(ae,te)?(L[re]=ae,L[he]=K,re=he):(L[re]=te,L[G]=K,re=G);else if(he<we&&0>r(ae,K))L[re]=ae,L[he]=K,re=he;else break e}}return q}function r(L,q){var K=L.sortIndex-q.sortIndex;return K!==0?K:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=L)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function S(L){if(x=!1,_(L),!v)if(n(l)!==null)v=!0,H(R);else{var q=n(u);q!==null&&Z(S,q.startTime-L)}}function R(L,q){v=!1,x&&(x=!1,c(P),P=-1),p=!0;var K=d;try{for(_(q),f=n(l);f!==null&&(!(f.expirationTime>q)||L&&!T());){var re=f.callback;if(typeof re=="function"){f.callback=null,d=f.priorityLevel;var we=re(f.expirationTime<=q);q=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),_(q)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var G=n(u);G!==null&&Z(S,G.startTime-q),Be=!1}return Be}finally{f=null,d=K,p=!1}}var A=!1,w=null,P=-1,Y=5,y=-1;function T(){return!(t.unstable_now()-y<Y)}function V(){if(w!==null){var L=t.unstable_now();y=L;var q=!0;try{q=w(!0,L)}finally{q?k():(A=!1,w=null)}}else A=!1}var k;if(typeof g=="function")k=function(){g(V)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,J=j.port2;j.port1.onmessage=V,k=function(){J.postMessage(null)}}else k=function(){m(V,0)};function H(L){w=L,A||(A=!0,k())}function Z(L,q){P=m(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,H(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var K=d;d=q;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return q()}finally{d=K}},t.unstable_scheduleCallback=function(L,q,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=K+we,L={id:h++,callback:q,priorityLevel:L,startTime:K,expirationTime:we,sortIndex:-1},K>re?(L.sortIndex=K,e(u,L),n(l)===null&&L===n(u)&&(x?(c(P),P=-1):x=!0,Z(S,K-re))):(L.sortIndex=we,e(l,L),v||p||(v=!0,H(R))),L},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(L){var q=d;return function(){var K=d;d=q;try{return L.apply(this,arguments)}finally{d=K}}}})(Qm);Jm.exports=Qm;var m0=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=sn,En=m0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eg=new Set,Ao={};function Fr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Ao[t]=e,t=0;t<e.length;t++)eg.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,_0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wd={},Ad={};function v0(t){return Mc.call(Ad,t)?!0:Mc.call(wd,t)?!1:_0.test(t)?Ad[t]=!0:(wd[t]=!0,!1)}function x0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y0(t,e,n,i){if(e===null||typeof e>"u"||x0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,af);kt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,af);kt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,af);kt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y0(e,n,r,i)&&(n=null),i||r===null?v0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),tg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),ig=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,fu;function oo(t){if(fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fu=e&&e[1]||""}return`
`+fu+t}var du=!1;function pu(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function S0(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function Ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case Ec:return"Profiler";case uf:return"StrictMode";case Tc:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ng:return(t.displayName||"Context")+".Consumer";case tg:return(t._context.displayName||"Context")+".Provider";case cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:Ac(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Ac(t(e))}catch{}}return null}function M0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ac(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E0(t){var e=rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ia(t){t._valueTracker||(t._valueTracker=E0(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cc(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function Rc(t,e){og(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pc(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ao(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function ag(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ra,ug=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){T0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w0=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(t,e){if(e){if(w0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Nc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uc=null,vs=null,xs=null;function Dd(t){if(t=Yo(t)){if(typeof Uc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=jl(e),Uc(t.stateNode,t.type,e))}}function fg(t){vs?xs?xs.push(t):xs=[t]:vs=t}function dg(){if(vs){var t=vs,e=xs;if(xs=vs=null,Dd(t),e)for(t=0;t<e.length;t++)Dd(e[t])}}function pg(t,e){return t(e)}function mg(){}var mu=!1;function gg(t,e,n){if(mu)return t(e,n);mu=!0;try{return pg(t,e,n)}finally{mu=!1,(vs!==null||xs!==null)&&(mg(),dg())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var i=jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Fc=!1;if(Si)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Fc=!1}function A0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var fo=!1,dl=null,pl=!1,Oc=null,C0={onError:function(t){fo=!0,dl=t}};function R0(t,e,n,i,r,s,o,a,l){fo=!1,dl=null,A0.apply(C0,arguments)}function P0(t,e,n,i,r,s,o,a,l){if(R0.apply(this,arguments),fo){if(fo){var u=dl;fo=!1,dl=null}else throw Error(ee(198));pl||(pl=!0,Oc=u)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nd(t){if(Or(t)!==t)throw Error(ee(188))}function b0(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nd(r),t;if(s===i)return Nd(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function vg(t){return t=b0(t),t!==null?xg(t):null}function xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xg(t);if(e!==null)return e;t=t.sibling}return null}var yg=En.unstable_scheduleCallback,Id=En.unstable_cancelCallback,L0=En.unstable_shouldYield,D0=En.unstable_requestPaint,St=En.unstable_now,N0=En.unstable_getCurrentPriorityLevel,df=En.unstable_ImmediatePriority,Sg=En.unstable_UserBlockingPriority,ml=En.unstable_NormalPriority,I0=En.unstable_LowPriority,Mg=En.unstable_IdlePriority,Vl=null,ni=null;function U0(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:z0,F0=Math.log,O0=Math.LN2;function z0(t){return t>>>=0,t===0?32:31-(F0(t)/O0|0)|0}var sa=64,oa=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=lo(a):(s&=o,s!==0&&(i=lo(s)))}else o=n&~r,o!==0?i=lo(o):s!==0&&(i=lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function k0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=k0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function H0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wg,mf,Ag,Cg,Rg,kc=!1,aa=[],Wi=null,Xi=null,ji=null,Po=new Map,bo=new Map,ki=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function G0(t,e,n,i,r){switch(e){case"focusin":return Wi=js(Wi,t,e,n,i,r),!0;case"dragenter":return Xi=js(Xi,t,e,n,i,r),!0;case"mouseover":return ji=js(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Po.set(s,js(Po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,js(bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Pg(t){var e=yr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=_g(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){Ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ic=i,n.target.dispatchEvent(i),Ic=null}else return e=Yo(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fd(t,e,n){qa(t)&&n.delete(e)}function W0(){kc=!1,Wi!==null&&qa(Wi)&&(Wi=null),Xi!==null&&qa(Xi)&&(Xi=null),ji!==null&&qa(ji)&&(ji=null),Po.forEach(Fd),bo.forEach(Fd)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,W0)))}function Lo(t){function e(r){return Ys(r,t)}if(0<aa.length){Ys(aa[0],t);for(var n=1;n<aa.length;n++){var i=aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&Ys(Wi,t),Xi!==null&&Ys(Xi,t),ji!==null&&Ys(ji,t),Po.forEach(e),bo.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&ki.shift()}var ys=Ai.ReactCurrentBatchConfig,_l=!0;function X0(t,e,n,i){var r=tt,s=ys.transition;ys.transition=null;try{tt=1,gf(t,e,n,i)}finally{tt=r,ys.transition=s}}function j0(t,e,n,i){var r=tt,s=ys.transition;ys.transition=null;try{tt=4,gf(t,e,n,i)}finally{tt=r,ys.transition=s}}function gf(t,e,n,i){if(_l){var r=Bc(t,e,n,i);if(r===null)Au(t,e,i,vl,n),Ud(t,i);else if(G0(r,t,e,n,i))i.stopPropagation();else if(Ud(t,i),e&4&&-1<V0.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&wg(s),s=Bc(t,e,n,i),s===null&&Au(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Au(t,e,i,null,n)}}var vl=null;function Bc(t,e,n,i){if(vl=null,t=ff(i),t=yr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case df:return 1;case Sg:return 4;case ml:case I0:return 16;case Mg:return 536870912;default:return 16}default:return 16}}var Vi=null,_f=null,$a=null;function Lg(){if($a)return $a;var t,e=_f,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $a=r.slice(t,1<i?1-i:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Od(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:Od,this.isPropagationStopped=Od,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=wn(Hs),jo=gt({},Hs,{view:0,detail:0}),Y0=wn(jo),_u,vu,qs,Gl=gt({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(_u=t.screenX-qs.screenX,vu=t.screenY-qs.screenY):vu=_u=0,qs=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),zd=wn(Gl),q0=gt({},Gl,{dataTransfer:0}),$0=wn(q0),K0=gt({},jo,{relatedTarget:0}),xu=wn(K0),Z0=gt({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=wn(Z0),Q0=gt({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ex=wn(Q0),tx=gt({},Hs,{data:0}),kd=wn(tx),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rx[t])?!!e[t]:!1}function xf(){return sx}var ox=gt({},jo,{key:function(t){if(t.key){var e=nx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ax=wn(ox),lx=gt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=wn(lx),ux=gt({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),cx=wn(ux),hx=gt({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=wn(hx),dx=gt({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),px=wn(dx),mx=[9,13,27,32],yf=Si&&"CompositionEvent"in window,po=null;Si&&"documentMode"in document&&(po=document.documentMode);var gx=Si&&"TextEvent"in window&&!po,Dg=Si&&(!yf||po&&8<po&&11>=po),Hd=" ",Vd=!1;function Ng(t,e){switch(t){case"keyup":return mx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function _x(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(Vd=!0,Hd);case"textInput":return t=e.data,t===Hd&&Vd?null:t;default:return null}}function vx(t,e){if(ss)return t==="compositionend"||!yf&&Ng(t,e)?(t=Lg(),$a=_f=Vi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dg&&e.locale!=="ko"?null:e.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xx[t.type]:e==="textarea"}function Ug(t,e,n,i){fg(i),e=xl(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var mo=null,Do=null;function yx(t){jg(t,0)}function Wl(t){var e=ls(t);if(sg(e))return t}function Sx(t,e){if(t==="change")return e}var Fg=!1;if(Si){var yu;if(Si){var Su="oninput"in document;if(!Su){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Su=typeof Wd.oninput=="function"}yu=Su}else yu=!1;Fg=yu&&(!document.documentMode||9<document.documentMode)}function Xd(){mo&&(mo.detachEvent("onpropertychange",Og),Do=mo=null)}function Og(t){if(t.propertyName==="value"&&Wl(Do)){var e=[];Ug(e,Do,t,ff(t)),gg(yx,e)}}function Mx(t,e,n){t==="focusin"?(Xd(),mo=e,Do=n,mo.attachEvent("onpropertychange",Og)):t==="focusout"&&Xd()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Do)}function Tx(t,e){if(t==="click")return Wl(e)}function wx(t,e){if(t==="input"||t==="change")return Wl(e)}function Ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Ax;function No(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mc.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,e){var n=jd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jd(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cx(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(i!==null&&Sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yd(n,s);var o=Yd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rx=Si&&"documentMode"in document&&11>=document.documentMode,os=null,Hc=null,go=null,Vc=!1;function qd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vc||os==null||os!==fl(i)||(i=os,"selectionStart"in i&&Sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&No(go,i)||(go=i,i=xl(Hc,"onSelect"),0<i.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Mu={},Bg={};Si&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Xl(t){if(Mu[t])return Mu[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return Mu[t]=e[n];return t}var Hg=Xl("animationend"),Vg=Xl("animationiteration"),Gg=Xl("animationstart"),Wg=Xl("transitionend"),Xg=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Xg.set(t,e),Fr(e,[t])}for(var Eu=0;Eu<$d.length;Eu++){var Tu=$d[Eu],Px=Tu.toLowerCase(),bx=Tu[0].toUpperCase()+Tu.slice(1);rr(Px,"on"+bx)}rr(Hg,"onAnimationEnd");rr(Vg,"onAnimationIteration");rr(Gg,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Wg,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Kd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,P0(i,e,void 0,t),t.currentTarget=null}function jg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kd(r,a,u),s=l}}}if(pl)throw t=Oc,pl=!1,Oc=null,t}function ct(t,e){var n=e[Yc];n===void 0&&(n=e[Yc]=new Set);var i=t+"__bubble";n.has(i)||(Yg(e,t,2,!1),n.add(i))}function wu(t,e,n){var i=0;e&&(i|=4),Yg(n,t,i,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[ca]){t[ca]=!0,eg.forEach(function(n){n!=="selectionchange"&&(Lx.has(n)||wu(n,!1,t),wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,wu("selectionchange",!1,e))}}function Yg(t,e,n,i){switch(bg(e)){case 1:var r=X0;break;case 4:r=j0;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!Fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gg(function(){var u=s,h=ff(n),f=[];e:{var d=Xg.get(t);if(d!==void 0){var p=vf,v=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":p=ax;break;case"focusin":v="focus",p=xu;break;case"focusout":v="blur",p=xu;break;case"beforeblur":case"afterblur":p=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cx;break;case Hg:case Vg:case Gg:p=J0;break;case Wg:p=fx;break;case"scroll":p=Y0;break;case"wheel":p=px;break;case"copy":case"cut":case"paste":p=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bd}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,c!==null&&(S=Ro(g,c),S!=null&&x.push(Uo(g,S,_)))),m)break;g=g.return}0<x.length&&(d=new p(d,v,null,n,h),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ic&&(v=n.relatedTarget||n.fromElement)&&(yr(v)||v[Mi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?yr(v):null,v!==null&&(m=Or(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=zd,S="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Bd,S="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?d:ls(p),_=v==null?d:ls(v),d=new x(S,g+"leave",p,n,h),d.target=m,d.relatedTarget=_,S=null,yr(h)===u&&(x=new x(c,g+"enter",v,n,h),x.target=_,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,c=v,g=0,_=x;_;_=Hr(_))g++;for(_=0,S=c;S;S=Hr(S))_++;for(;0<g-_;)x=Hr(x),g--;for(;0<_-g;)c=Hr(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Hr(x),c=Hr(c)}x=null}else x=null;p!==null&&Zd(f,d,p,x,!1),v!==null&&m!==null&&Zd(f,m,v,x,!0)}}e:{if(d=u?ls(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Sx;else if(Gd(d))if(Fg)R=wx;else{R=Ex;var A=Mx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Tx);if(R&&(R=R(t,u))){Ug(f,R,n,h);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Pc(d,"number",d.value)}switch(A=u?ls(u):window,t){case"focusin":(Gd(A)||A.contentEditable==="true")&&(os=A,Hc=u,go=null);break;case"focusout":go=Hc=os=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,qd(f,n,h);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":qd(f,n,h)}var w;if(yf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ss?Ng(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Dg&&n.locale!=="ko"&&(ss||P!=="onCompositionStart"?P==="onCompositionEnd"&&ss&&(w=Lg()):(Vi=h,_f="value"in Vi?Vi.value:Vi.textContent,ss=!0)),A=xl(u,P),0<A.length&&(P=new kd(P,t,null,n,h),f.push({event:P,listeners:A}),w?P.data=w:(w=Ig(n),w!==null&&(P.data=w)))),(w=gx?_x(t,n):vx(t,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(h=new kd("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=w))}jg(f,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ro(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=Ro(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ro(n,s),l!=null&&o.unshift(Uo(n,l,a))):r||(l=Ro(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Nx,"")}function ha(t,e,n){if(e=Jd(e),Jd(t)!==e&&n)throw Error(ee(425))}function yl(){}var Gc=null,Wc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(t){return Qd.resolve(null).then(t).catch(Fx)}:jc;function Fx(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Lo(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Vs,Fo="__reactProps$"+Vs,Mi="__reactContainer$"+Vs,Yc="__reactEvents$"+Vs,Ox="__reactListeners$"+Vs,zx="__reactHandles$"+Vs;function yr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[Qn])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Qn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function jl(t){return t[Fo]||null}var qc=[],us=-1;function sr(t){return{current:t}}function ft(t){0>us||(t.current=qc[us],qc[us]=null,us--)}function ot(t,e){us++,qc[us]=t.current,t.current=e}var tr={},Yt=sr(tr),un=sr(!1),Cr=tr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Sl(){ft(un),ft(Yt)}function tp(t,e,n){if(Yt.current!==tr)throw Error(ee(168));ot(Yt,e),ot(un,n)}function qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,M0(t)||"Unknown",r));return gt({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=Yt.current,ot(Yt,t),ot(un,un.current),!0}function np(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=qg(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,ft(un),ft(Yt),ot(Yt,t)):ft(un),ot(un,n)}var gi=null,Yl=!1,Ru=!1;function $g(t){gi===null?gi=[t]:gi.push(t)}function kx(t){Yl=!0,$g(t)}function or(){if(!Ru&&gi!==null){Ru=!0;var t=0,e=tt;try{var n=gi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Yl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),yg(df,or),r}finally{tt=e,Ru=!1}}return null}var cs=[],hs=0,El=null,Tl=0,Rn=[],Pn=0,Rr=null,_i=1,vi="";function mr(t,e){cs[hs++]=Tl,cs[hs++]=El,El=t,Tl=e}function Kg(t,e,n){Rn[Pn++]=_i,Rn[Pn++]=vi,Rn[Pn++]=Rr,Rr=t;var i=_i;t=vi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-jn(e)+r|n<<r|i,vi=s+t}else _i=1<<s|n<<r|i,vi=t}function Mf(t){t.return!==null&&(mr(t,1),Kg(t,1,0))}function Ef(t){for(;t===El;)El=cs[--hs],cs[hs]=null,Tl=cs[--hs],cs[hs]=null;for(;t===Rr;)Rr=Rn[--Pn],Rn[Pn]=null,vi=Rn[--Pn],Rn[Pn]=null,_i=Rn[--Pn],Rn[Pn]=null}var Mn=null,yn=null,dt=!1,Vn=null;function Zg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,yn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,yn=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(dt){var e=yn;if(e){var n=e;if(!ip(t,e)){if($c(t))throw Error(ee(418));e=Yi(n.nextSibling);var i=Mn;e&&ip(t,e)?Zg(i,n):(t.flags=t.flags&-4097|2,dt=!1,Mn=t)}}else{if($c(t))throw Error(ee(418));t.flags=t.flags&-4097|2,dt=!1,Mn=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function fa(t){if(t!==Mn)return!1;if(!dt)return rp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=yn)){if($c(t))throw Jg(),Error(ee(418));for(;e;)Zg(t,e),e=Yi(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Mn?Yi(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=yn;t;)t=Yi(t.nextSibling)}function Ps(){yn=Mn=null,dt=!1}function Tf(t){Vn===null?Vn=[t]:Vn.push(t)}var Bx=Ai.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function da(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function Qg(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Zi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,S){return g===null||g.tag!==6?(g=Uu(_,c.mode,S),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,S){var R=_.type;return R===rs?h(c,g,_.props.children,S,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&sp(R)===g.type)?(S=r(g,_.props),S.ref=$s(c,g,_),S.return=c,S):(S=il(_.type,_.key,_.props,null,c.mode,S),S.ref=$s(c,g,_),S.return=c,S)}function u(c,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Fu(_,c.mode,S),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function h(c,g,_,S,R){return g===null||g.tag!==7?(g=Ar(_,c.mode,S,R),g.return=c,g):(g=r(g,_),g.return=c,g)}function f(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Uu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case na:return _=il(g.type,g.key,g.props,null,c.mode,_),_.ref=$s(c,null,g),_.return=c,_;case is:return g=Fu(g,c.mode,_),g.return=c,g;case Fi:var S=g._init;return f(c,S(g._payload),_)}if(ao(g)||Ws(g))return g=Ar(g,c.mode,_,null),g.return=c,g;da(c,g)}return null}function d(c,g,_,S){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(c,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case na:return _.key===R?l(c,g,_,S):null;case is:return _.key===R?u(c,g,_,S):null;case Fi:return R=_._init,d(c,g,R(_._payload),S)}if(ao(_)||Ws(_))return R!==null?null:h(c,g,_,S,null);da(c,_)}return null}function p(c,g,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(_)||null,a(g,c,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case na:return c=c.get(S.key===null?_:S.key)||null,l(g,c,S,R);case is:return c=c.get(S.key===null?_:S.key)||null,u(g,c,S,R);case Fi:var A=S._init;return p(c,g,_,A(S._payload),R)}if(ao(S)||Ws(S))return c=c.get(_)||null,h(g,c,S,R,null);da(g,S)}return null}function v(c,g,_,S){for(var R=null,A=null,w=g,P=g=0,Y=null;w!==null&&P<_.length;P++){w.index>P?(Y=w,w=null):Y=w.sibling;var y=d(c,w,_[P],S);if(y===null){w===null&&(w=Y);break}t&&w&&y.alternate===null&&e(c,w),g=s(y,g,P),A===null?R=y:A.sibling=y,A=y,w=Y}if(P===_.length)return n(c,w),dt&&mr(c,P),R;if(w===null){for(;P<_.length;P++)w=f(c,_[P],S),w!==null&&(g=s(w,g,P),A===null?R=w:A.sibling=w,A=w);return dt&&mr(c,P),R}for(w=i(c,w);P<_.length;P++)Y=p(w,c,P,_[P],S),Y!==null&&(t&&Y.alternate!==null&&w.delete(Y.key===null?P:Y.key),g=s(Y,g,P),A===null?R=Y:A.sibling=Y,A=Y);return t&&w.forEach(function(T){return e(c,T)}),dt&&mr(c,P),R}function x(c,g,_,S){var R=Ws(_);if(typeof R!="function")throw Error(ee(150));if(_=R.call(_),_==null)throw Error(ee(151));for(var A=R=null,w=g,P=g=0,Y=null,y=_.next();w!==null&&!y.done;P++,y=_.next()){w.index>P?(Y=w,w=null):Y=w.sibling;var T=d(c,w,y.value,S);if(T===null){w===null&&(w=Y);break}t&&w&&T.alternate===null&&e(c,w),g=s(T,g,P),A===null?R=T:A.sibling=T,A=T,w=Y}if(y.done)return n(c,w),dt&&mr(c,P),R;if(w===null){for(;!y.done;P++,y=_.next())y=f(c,y.value,S),y!==null&&(g=s(y,g,P),A===null?R=y:A.sibling=y,A=y);return dt&&mr(c,P),R}for(w=i(c,w);!y.done;P++,y=_.next())y=p(w,c,P,y.value,S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?P:y.key),g=s(y,g,P),A===null?R=y:A.sibling=y,A=y);return t&&w.forEach(function(V){return e(c,V)}),dt&&mr(c,P),R}function m(c,g,_,S){if(typeof _=="object"&&_!==null&&_.type===rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case na:e:{for(var R=_.key,A=g;A!==null;){if(A.key===R){if(R=_.type,R===rs){if(A.tag===7){n(c,A.sibling),g=r(A,_.props.children),g.return=c,c=g;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&sp(R)===A.type){n(c,A.sibling),g=r(A,_.props),g.ref=$s(c,A,_),g.return=c,c=g;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===rs?(g=Ar(_.props.children,c.mode,S,_.key),g.return=c,c=g):(S=il(_.type,_.key,_.props,null,c.mode,S),S.ref=$s(c,g,_),S.return=c,c=S)}return o(c);case is:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Fu(_,c.mode,S),g.return=c,c=g}return o(c);case Fi:return A=_._init,m(c,g,A(_._payload),S)}if(ao(_))return v(c,g,_,S);if(Ws(_))return x(c,g,_,S);da(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Uu(_,c.mode,S),g.return=c,c=g),o(c)):n(c,g)}return m}var bs=Qg(!0),e_=Qg(!1),wl=sr(null),Al=null,fs=null,wf=null;function Af(){wf=fs=Al=null}function Cf(t){var e=wl.current;ft(wl),t._currentValue=e}function Zc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Al=t,wf=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(Al===null)throw Error(ee(308));fs=t,Al.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var Sr=null;function Rf(t){Sr===null?Sr=[t]:Sr.push(t)}function t_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=gt({},f,d);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=f}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var qo={},ii=sr(qo),Oo=sr(qo),zo=sr(qo);function Mr(t){if(t===qo)throw Error(ee(174));return t}function bf(t,e){switch(ot(zo,e),ot(Oo,t),ot(ii,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lc(e,t)}ft(ii),ot(ii,e)}function Ls(){ft(ii),ft(Oo),ft(zo)}function i_(t){Mr(zo.current);var e=Mr(ii.current),n=Lc(e,t.type);e!==n&&(ot(Oo,t),ot(ii,n))}function Lf(t){Oo.current===t&&(ft(ii),ft(Oo))}var pt=sr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pu=[];function Df(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Ja=Ai.ReactCurrentDispatcher,bu=Ai.ReactCurrentBatchConfig,Pr=0,mt=null,At=null,Dt=null,Pl=!1,_o=!1,ko=0,Hx=0;function Bt(){throw Error(ee(321))}function Nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function If(t,e,n,i,r,s){if(Pr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?Xx:jx,t=n(i,r),_o){s=0;do{if(_o=!1,ko=0,25<=s)throw Error(ee(301));s+=1,Dt=At=null,e.updateQueue=null,Ja.current=Yx,t=n(i,r)}while(_o)}if(Ja.current=bl,e=At!==null&&At.next!==null,Pr=0,Dt=At=mt=null,Pl=!1,e)throw Error(ee(300));return t}function Uf(){var t=ko!==0;return ko=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function In(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Bo(t,e){return typeof e=="function"?e(t):e}function Lu(t){var e=In(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Pr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,mt.lanes|=h,br|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Du(t){var e=In(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function r_(){}function s_(t,e){var n=mt,i=In(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,Ff(l_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Ho(9,a_.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ee(349));Pr&30||o_(n,e,r)}return r}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,i){e.value=n,e.getSnapshot=i,u_(e)&&c_(t)}function l_(t,e,n){return n(function(){u_(e)&&c_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function c_(t){var e=Ei(t,1);e!==null&&Yn(e,t,1,-1)}function lp(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=Wx.bind(null,mt,t),[e.memoizedState,t]}function Ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function h_(){return In().memoizedState}function Qa(t,e,n,i){var r=Kn();mt.flags|=t,r.memoizedState=Ho(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Nf(i,o.deps)){r.memoizedState=Ho(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ho(1|e,n,s,i)}function up(t,e){return Qa(8390656,8,t,e)}function Ff(t,e){return ql(2048,8,t,e)}function f_(t,e){return ql(4,2,t,e)}function d_(t,e){return ql(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,p_.bind(null,e,t),n)}function Of(){}function g_(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function __(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function v_(t,e,n){return Pr&21?(qn(n,e)||(n=Eg(),mt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function Vx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{tt=n,bu.transition=i}}function x_(){return In().memoizedState}function Gx(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))S_(e,n);else if(n=t_(t,e,n,i),n!==null){var r=Kt();Yn(n,t,i,r),M_(n,e,i)}}function Wx(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))S_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=t_(t,e,r,i),n!==null&&(r=Kt(),Yn(n,t,i,r),M_(n,e,i))}}function y_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function S_(t,e){_o=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var bl={readContext:Nn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Xx={readContext:Nn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:Of,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=Vx.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Kn();if(dt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),It===null)throw Error(ee(349));Pr&30||o_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(l_.bind(null,i,s,t),[t]),i.flags|=2048,Ho(9,a_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=It.identifierPrefix;if(dt){var n=vi,i=_i;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jx={readContext:Nn,useCallback:g_,useContext:Nn,useEffect:Ff,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:__,useReducer:Lu,useRef:h_,useState:function(){return Lu(Bo)},useDebugValue:Of,useDeferredValue:function(t){var e=In();return v_(e,At.memoizedState,t)},useTransition:function(){var t=Lu(Bo)[0],e=In().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1},Yx={readContext:Nn,useCallback:g_,useContext:Nn,useEffect:Ff,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:__,useReducer:Du,useRef:h_,useState:function(){return Du(Bo)},useDebugValue:Of,useDeferredValue:function(t){var e=In();return At===null?e.memoizedState=t:v_(e,At.memoizedState,t)},useTransition:function(){var t=Du(Bo)[0],e=In().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Ki(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Yn(e,t,r,i),Za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Ki(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Yn(e,t,r,i),Za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Ki(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Yn(e,t,i,n),Za(e,t,i))}};function cp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,i)||!No(r,s):!0}function E_(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=cn(e)?Cr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=cn(e)?Cr:Yt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=S0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function T_(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,ch=i),eh(t,e)},n}function w_(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){eh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eh(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ly.bind(null,t,e,n),e.then(t,t))}function dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var $x=Ai.ReactCurrentOwner,an=!1;function $t(t,e,n,i){e.child=t===null?e_(e,null,n,i):bs(e,t.child,n,i)}function mp(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=If(t,e,n,i,s,r),n=Uf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&n&&Mf(e),e.flags|=1,$t(t,e,i,r),e.child)}function gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(No(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return th(t,e,n,i,r)}function C_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ps,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ps,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(ps,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(ps,vn),vn|=i;return $t(t,e,r,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function th(t,e,n,i,r){var s=cn(n)?Cr:Yt.current;return s=Rs(e,s),Ss(e,r),n=If(t,e,n,i,s,r),i=Uf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&i&&Mf(e),e.flags|=1,$t(t,e,n,r),e.child)}function _p(t,e,n,i,r){if(cn(n)){var s=!0;Ml(e)}else s=!1;if(Ss(e,r),e.stateNode===null)el(t,e),E_(e,n,i),Qc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=cn(n)?Cr:Yt.current,u=Rs(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&hp(e,o,i,u),Oi=!1;var d=e.memoizedState;o.state=d,Cl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Oi?(typeof h=="function"&&(Jc(e,n,h,i),l=e.memoizedState),(a=Oi||cp(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,n_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=cn(n)?Cr:Yt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&hp(e,o,i,l),Oi=!1,d=e.memoizedState,o.state=d,Cl(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||un.current||Oi?(typeof p=="function"&&(Jc(e,n,p,i),v=e.memoizedState),(u=Oi||cp(e,n,u,i,d,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return nh(t,e,n,i,s,r)}function nh(t,e,n,i,r,s){R_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&np(e,n,!1),Ti(t,e,s);i=e.stateNode,$x.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&np(e,n,!0),e.child}function P_(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),bf(t,e.containerInfo)}function vp(t,e,n,i,r){return Ps(),Tf(r),e.flags|=256,$t(t,e,n,i),e.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function b_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rh(n),e.memoizedState=ih,t):zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Kx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ih,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zf(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,i){return i!==null&&Tf(i),bs(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Nu(Error(ee(422))),pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=rh(o),e.memoizedState=ih,s);if(!(e.mode&1))return pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Nu(s,i,void 0),pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Yn(i,t,r,-1))}return Wf(),i=Nu(Error(ee(421))),pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Yi(r.nextSibling),Mn=e,dt=!0,Vn=null,t!==null&&(Rn[Pn++]=_i,Rn[Pn++]=vi,Rn[Pn++]=Rr,_i=t.id,vi=t.overflow,Rr=e),e=zf(e,i.children),e.flags|=4096,e)}function xp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zc(t.return,e,n)}function Iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,n,e);else if(t.tag===19)xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Iu(e,!0,n,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zx(t,e,n){switch(e.tag){case 3:P_(e),Ps();break;case 5:i_(e);break;case 1:cn(e.type)&&Ml(e);break;case 4:bf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?b_(t,e,n):(ot(pt,pt.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return Ti(t,e,n)}var D_,sh,N_,I_;D_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sh=function(){};N_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ii.current);var s=null;switch(n){case"input":r=Cc(t,r),i=Cc(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=bc(t,r),i=bc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}Dc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jx(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return cn(e.type)&&Sl(),Ht(e),null;case 3:return i=e.stateNode,Ls(),ft(un),ft(Yt),Df(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(dh(Vn),Vn=null))),sh(t,e),Ht(e),null;case 5:Lf(e);var r=Mr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ht(e),null}if(t=Mr(ii.current),fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)ct(uo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Rd(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":bd(i,s),ct("invalid",i)}Dc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":ia(i),Pd(i,s,!0);break;case"textarea":ia(i),Ld(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Fo]=i,D_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nc(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<uo.length;r++)ct(uo[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Rd(t,i),r=Cc(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":bd(t,i),r=bc(t,i),ct("invalid",t);break;default:r=i}Dc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&lf(t,s,l,o))}switch(n){case"input":ia(t),Pd(t,i,!1);break;case"textarea":ia(t),Ld(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Mr(zo.current),Mr(ii.current),fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Ht(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&yn!==null&&e.mode&1&&!(e.flags&128))Jg(),Ps(),e.flags|=98560,s=!1;else if(s=fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Qn]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Vn!==null&&(dh(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ls(),sh(t,e),t===null&&Io(e.stateNode.containerInfo),Ht(e),null;case 10:return Cf(e.type._context),Ht(e),null;case 17:return cn(e.type)&&Sl(),Ht(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ks(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ns&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Ht(e),null}else 2*St()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Qx(t,e){switch(Ef(e),e.tag){case 1:return cn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),ft(un),ft(Yt),Df(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Ls(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var ma=!1,Wt=!1,ey=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function oh(t,e,n){try{n()}catch(i){vt(t,e,i)}}var yp=!1;function ty(t,e){if(Gc=_l,t=kg(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wc={focusedElem:t,selectionRange:n},_l=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Bn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=yp,yp=!1,v}function vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&oh(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Fo],delete e[Yc],delete e[Ox],delete e[zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var Ot=null,Hn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Wt||ds(n,e);case 6:var i=Ot,r=Hn;Ot=null,Ri(t,e,n),Ot=i,Hn=r,Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),Lo(t)):Cu(Ot,n.stateNode));break;case 4:i=Ot,r=Hn,Ot=n.stateNode.containerInfo,Hn=!0,Ri(t,e,n),Ot=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&oh(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Wt&&(ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ri(t,e,n),Wt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ey),e.forEach(function(i){var r=cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Hn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ot===null)throw Error(ee(160));O_(s,o,r),Ot=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z_(e,t),e=e.sibling}function z_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),$n(t),i&4){try{vo(3,t,t.return),Kl(3,t)}catch(x){vt(t,t.return,x)}try{vo(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:Fn(e,t),$n(t),i&512&&n!==null&&ds(n,n.return);break;case 5:if(Fn(e,t),$n(t),i&512&&n!==null&&ds(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(x){vt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&og(r,s),Nc(a,o);var u=Nc(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?hg(r,f):h==="dangerouslySetInnerHTML"?ug(r,f):h==="children"?Co(r,f):lf(r,h,f,u)}switch(a){case"input":Rc(r,s);break;case"textarea":ag(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_s(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(Fn(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(Fn(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:Fn(e,t),$n(t);break;case 13:Fn(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hf=St())),i&4&&Mp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||h,Fn(e,t),Wt=u):Fn(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(pe=t,h=t.child;h!==null;){for(f=pe=h;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:vo(4,d,d.return);break;case 1:ds(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){vt(i,n,x)}}break;case 5:ds(d,d.return);break;case 22:if(d.memoizedState!==null){Tp(f);continue}}p!==null?(p.return=d,pe=p):Tp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(x){vt(t,t.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){vt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),$n(t),i&4&&Mp(t);break;case 21:break;default:Fn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=Sp(t);uh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sp(t);lh(t,a,o);break;default:throw Error(ee(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ny(t,e,n){pe=t,k_(t)}function k_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ma;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=ma;var u=Wt;if(ma=o,(Wt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?wp(r):l!==null?(l.return=o,pe=l):wp(r);for(;s!==null;)pe=s,k_(s),s=s.sibling;pe=r,ma=a,Wt=u}Ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Ep(t)}}function Ep(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Wt||e.flags&512&&ah(e)}catch(d){vt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Tp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function wp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{ah(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{ah(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var iy=Math.ceil,Ll=Ai.ReactCurrentDispatcher,kf=Ai.ReactCurrentOwner,Dn=Ai.ReactCurrentBatchConfig,je=0,It=null,Tt=null,zt=0,vn=0,ps=sr(0),Rt=0,Vo=null,br=0,Zl=0,Bf=0,xo=null,on=null,Hf=0,Ns=1/0,mi=null,Dl=!1,ch=null,$i=null,ga=!1,Gi=null,Nl=0,yo=0,hh=null,tl=-1,nl=0;function Kt(){return je&6?St():tl!==-1?tl:tl=St()}function Ki(t){return t.mode&1?je&2&&zt!==0?zt&-zt:Bx.transition!==null?(nl===0&&(nl=Eg()),nl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function Yn(t,e,n,i){if(50<yo)throw yo=0,hh=null,Error(ee(185));Xo(t,n,i),(!(je&2)||t!==It)&&(t===It&&(!(je&2)&&(Zl|=n),Rt===4&&Bi(t,zt)),hn(t,i),n===1&&je===0&&!(e.mode&1)&&(Ns=St()+500,Yl&&or()))}function hn(t,e){var n=t.callbackNode;B0(t,e);var i=gl(t,t===It?zt:0);if(i===0)n!==null&&Id(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Id(n),e===1)t.tag===0?kx(Ap.bind(null,t)):$g(Ap.bind(null,t)),Ux(function(){!(je&6)&&or()}),n=null;else{switch(Tg(i)){case 1:n=df;break;case 4:n=Sg;break;case 16:n=ml;break;case 536870912:n=Mg;break;default:n=ml}n=Y_(n,B_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B_(t,e){if(tl=-1,nl=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=gl(t,t===It?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=je;je|=2;var s=V_();(It!==t||zt!==e)&&(mi=null,Ns=St()+500,wr(t,e));do try{oy();break}catch(a){H_(t,a)}while(!0);Af(),Ll.current=s,je=r,Tt!==null?e=0:(It=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=zc(t),r!==0&&(i=r,e=fh(t,r))),e===1)throw n=Vo,wr(t,0),Bi(t,i),hn(t,St()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ry(r)&&(e=Il(t,i),e===2&&(s=zc(t),s!==0&&(i=s,e=fh(t,s))),e===1))throw n=Vo,wr(t,0),Bi(t,i),hn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:gr(t,on,mi);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=Hf+500-St(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jc(gr.bind(null,t,on,mi),e);break}gr(t,on,mi);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iy(i/1960))-i,10<i){t.timeoutHandle=jc(gr.bind(null,t,on,mi),i);break}gr(t,on,mi);break;case 5:gr(t,on,mi);break;default:throw Error(ee(329))}}}return hn(t,St()),t.callbackNode===n?B_.bind(null,t):null}function fh(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=on,on=n,e!==null&&dh(e)),t}function dh(t){on===null?on=t:on.push.apply(on,t)}function ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~Bf,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Ap(t){if(je&6)throw Error(ee(327));Ms();var e=gl(t,0);if(!(e&1))return hn(t,St()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=zc(t);i!==0&&(e=i,n=fh(t,i))}if(n===1)throw n=Vo,wr(t,0),Bi(t,e),hn(t,St()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,on,mi),hn(t,St()),null}function Vf(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ns=St()+500,Yl&&or())}}function Lr(t){Gi!==null&&Gi.tag===0&&!(je&6)&&Ms();var e=je;je|=1;var n=Dn.transition,i=tt;try{if(Dn.transition=null,tt=1,t)return t()}finally{tt=i,Dn.transition=n,je=e,!(je&6)&&or()}}function Gf(){vn=ps.current,ft(ps)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ix(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:Ls(),ft(un),ft(Yt),Df();break;case 5:Lf(i);break;case 4:Ls();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:Cf(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(It=t,Tt=t=Zi(t.current,null),zt=vn=e,Rt=0,Vo=null,Bf=Zl=br=0,on=xo=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function H_(t,e){do{var n=Tt;try{if(Af(),Ja.current=bl,Pl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Pr=0,Dt=At=mt=null,_o=!1,ko=0,kf.current=null,n===null||n.return===null){Rt=1,Vo=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=dp(o);if(p!==null){p.flags&=-257,pp(p,o,a,s,e),p.mode&1&&fp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){fp(s,u,e),Wf();break e}l=Error(ee(426))}}else if(dt&&a.mode&1){var m=dp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),pp(m,o,a,s,e),Tf(Ds(l,a));break e}}s=l=Ds(l,a),Rt!==4&&(Rt=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=T_(s,l,e);op(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&($i===null||!$i.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=w_(s,a,e);op(s,S);break e}}s=s.return}while(s!==null)}W_(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function V_(){var t=Ll.current;return Ll.current=bl,t===null?bl:t}function Wf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(br&268435455)&&!(Zl&268435455)||Bi(It,zt)}function Il(t,e){var n=je;je|=2;var i=V_();(It!==t||zt!==e)&&(mi=null,wr(t,e));do try{sy();break}catch(r){H_(t,r)}while(!0);if(Af(),je=n,Ll.current=i,Tt!==null)throw Error(ee(261));return It=null,zt=0,Rt}function sy(){for(;Tt!==null;)G_(Tt)}function oy(){for(;Tt!==null&&!L0();)G_(Tt)}function G_(t){var e=j_(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?W_(t):Tt=e,kf.current=null}function W_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qx(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=Jx(n,e,vn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function gr(t,e,n){var i=tt,r=Dn.transition;try{Dn.transition=null,tt=1,ay(t,e,n,i)}finally{Dn.transition=r,tt=i}return null}function ay(t,e,n,i){do Ms();while(Gi!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H0(t,s),t===It&&(Tt=It=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,Y_(ml,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=tt;tt=1;var a=je;je|=4,kf.current=null,ty(t,n),z_(n,t),Cx(Wc),_l=!!Gc,Wc=Gc=null,t.current=n,ny(n),D0(),je=a,tt=o,Dn.transition=s}else t.current=n;if(ga&&(ga=!1,Gi=t,Nl=r),s=t.pendingLanes,s===0&&($i=null),U0(n.stateNode),hn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=ch,ch=null,t;return Nl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===hh?yo++:(yo=0,hh=t):yo=0,or(),null}function Ms(){if(Gi!==null){var t=Tg(Nl),e=Dn.transition,n=tt;try{if(Dn.transition=null,tt=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,Nl=0,je&6)throw Error(ee(331));var r=je;for(je|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var h=pe;switch(h.tag){case 0:case 11:case 15:vo(8,h,s)}var f=h.child;if(f!==null)f.return=h,pe=f;else for(;pe!==null;){h=pe;var d=h.sibling,p=h.return;if(U_(h),h===u){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,pe=c;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kl(9,a)}}catch(R){vt(a,a.return,R)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(je=r,or(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{tt=n,Dn.transition=e}}return!1}function Cp(t,e,n){e=Ds(n,e),e=T_(t,e,1),t=qi(t,e,1),e=Kt(),t!==null&&(Xo(t,1,e),hn(t,e))}function vt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=Ds(n,t),t=w_(e,t,1),e=qi(e,t,1),t=Kt(),e!==null&&(Xo(e,1,t),hn(e,t));break}}e=e.return}}function ly(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>St()-Hf?wr(t,0):Bf|=n),hn(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=Kt();t=Ei(t,e),t!==null&&(Xo(t,e,n),hn(t,n))}function uy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),X_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Zx(t,e,n);an=!!(t.flags&131072)}else an=!1,dt&&e.flags&1048576&&Kg(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Rs(e,Yt.current);Ss(e,n),r=If(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,Qc(e,i,t,n),e=nh(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Mf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fy(i),t=Bn(i,t),r){case 0:e=th(null,e,i,t,n);break e;case 1:e=_p(null,e,i,t,n);break e;case 11:e=mp(null,e,i,t,n);break e;case 14:e=gp(null,e,i,Bn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),th(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),_p(t,e,i,r,n);case 3:e:{if(P_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,n_(t,e),Cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(ee(423)),e),e=vp(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(ee(424)),e),e=vp(t,e,i,n,r);break e}else for(yn=Yi(e.stateNode.containerInfo.firstChild),Mn=e,dt=!0,Vn=null,n=e_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=Ti(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return i_(e),t===null&&Kc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xc(i,r)?o=null:s!==null&&Xc(i,s)&&(e.flags|=32),R_(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return b_(t,e,n);case 4:return bf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),mp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(wl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!un.current){e=Ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=Nn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),gp(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),el(t,e),e.tag=1,cn(i)?(t=!0,Ml(e)):t=!1,Ss(e,n),E_(e,i,r),Qc(e,i,r,n),nh(null,e,i,!0,t,n);case 19:return L_(t,e,n);case 22:return C_(t,e,n)}throw Error(ee(156,e.tag))};function Y_(t,e){return yg(t,e)}function hy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new hy(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fy(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cf)return 11;if(t===hf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ar(n.children,r,s,e);case uf:o=8,r|=8;break;case Ec:return t=Ln(12,n,e,r|2),t.elementType=Ec,t.lanes=s,t;case Tc:return t=Ln(13,n,e,r),t.elementType=Tc,t.lanes=s,t;case wc:return t=Ln(19,n,e,r),t.elementType=wc,t.lanes=s,t;case ig:return Jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tg:o=10;break e;case ng:o=9;break e;case cf:o=11;break e;case hf:o=14;break e;case Fi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Jl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=ig,t.lanes=n,t.stateNode={isHidden:!1},t}function Uu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jf(t,e,n,i,r,s,o,a,l){return t=new dy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return tr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(cn(n))return qg(t,n,e)}return e}function $_(t,e,n,i,r,s,o,a,l){return t=jf(n,i,!0,t,r,s,o,a,l),t.context=q_(null),n=t.current,i=Kt(),r=Ki(n),s=yi(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,Xo(t,r,i),hn(t,i),t}function Ql(t,e,n,i){var r=e.current,s=Kt(),o=Ki(r);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(Yn(t,r,o,s),Za(t,r,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function my(){return null}var K_=typeof reportError=="function"?reportError:function(t){console.error(t)};function qf(t){this._internalRoot=t}eu.prototype.render=qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Ql(t,e,null,null)};eu.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){Ql(null,t,null,null)}),e[Mi]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&Pg(t)}};function $f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function gy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(o);s.call(u)}}var o=$_(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=o,t[Mi]=o.current,Io(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ul(l);a.call(u)}}var l=jf(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Mi]=l.current,Io(t.nodeType===8?t.parentNode:t),Lr(function(){Ql(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ul(o);a.call(l)}}Ql(e,o,t,r)}else o=gy(n,e,t,r,i);return Ul(o)}wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(pf(e,n|1),hn(e,St()),!(je&6)&&(Ns=St()+500,or()))}break;case 13:Lr(function(){var i=Ei(t,1);if(i!==null){var r=Kt();Yn(i,t,1,r)}}),Yf(t,1)}};mf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Kt();Yn(e,t,134217728,n)}Yf(t,134217728)}};Ag=function(t){if(t.tag===13){var e=Ki(t),n=Ei(t,e);if(n!==null){var i=Kt();Yn(n,t,e,i)}Yf(t,e)}};Cg=function(){return tt};Rg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Uc=function(t,e,n){switch(e){case"input":if(Rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=jl(i);if(!r)throw Error(ee(90));sg(i),Rc(i,r)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};pg=Vf;mg=Lr;var _y={usingClientEntryPoint:!1,Events:[Yo,ls,jl,fg,dg,Vf]},Zs={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{Vl=_a.inject(vy),ni=_a}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_y;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(ee(200));return py(t,e,null,n)};Tn.createRoot=function(t,e){if(!$f(t))throw Error(ee(299));var n=!1,i="",r=K_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jf(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Io(t.nodeType===8?t.parentNode:t),new qf(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Lr(t)};Tn.hydrate=function(t,e,n){if(!tu(e))throw Error(ee(200));return nu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!$f(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=K_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,r,!1,s,o),t[Mi]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};Tn.render=function(t,e,n){if(!tu(e))throw Error(ee(200));return nu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(ee(40));return t._reactRootContainer?(Lr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Tn.unstable_batchedUpdates=Vf;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return nu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z_)}catch(t){console.error(t)}}Z_(),Zm.exports=Tn;var xy=Zm.exports,bp=xy;Sc.createRoot=bp.createRoot,Sc.hydrateRoot=bp.hydrateRoot;const me=128,xn=4,yy=me*xn,Ct=yy/2,Sy=9.81,Ou=0,va=26,J_=22,My=.1,Lp=9,Ey=.05,ze=(t,e,n)=>t<e?e:t>n?n:t,st=(t,e)=>e*me+t,So=t=>(t+.5)*xn-Ct,Mo=t=>(t+.5)*xn-Ct,Xt=t=>ze(Math.round((t+Ct)/xn-.5),0,me-1);function Ty(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Dp(t,e){const n=new Float32Array(t*t);for(let i=0;i<n.length;i++)n[i]=e();return n}function Np(t,e,n,i){const r=Math.floor(n),s=Math.floor(i);let o=n-r,a=i-s;o=o*o*(3-2*o),a=a*a*(3-2*a);const l=(p,v)=>t[(v%e+e)%e*e+(p%e+e)%e],u=l(r,s),h=l(r+1,s),f=l(r,s+1),d=l(r+1,s+1);return(u*(1-o)+h*o)*(1-a)+(f*(1-o)+d*o)*a}const Pi=(t,e,n)=>Math.exp(-((t-e)*(t-e))/(2*n*n)),Q_=[42,66],ev=[28,52,76,100];function Ip(t,e){let n=1e9;for(const i of Q_)e>=14&&e<=118?n=Math.min(n,Math.abs(t-i)):n=Math.min(n,Math.hypot(t-i,e<14?14-e:e-118));for(const i of ev)t>=40&&t<=124?n=Math.min(n,Math.abs(e-i)):n=Math.min(n,Math.hypot(t<40?40-t:t-124,e-i));return n}function wy(){const t=Ty(20260827),e=Dp(33,t),n=Dp(65,t),i=(h,f)=>Np(e,33,h*32/(me-1),f*32/(me-1))*.65+Np(n,65,h*64/(me-1),f*64/(me-1))*.35,r=new Float32Array(me*me),s=new Uint8Array(me*me),o=new Uint8Array(me*me);for(let h=0;h<me;h++)for(let f=0;f<me;f++){const d=st(f,h);let p;if(f<va)p=-.6-(va-f)*.28+(i(f,h)-.5)*.5;else{const x=f-va;p=15.5*(1-Math.exp(-x/34)),p+=11.5*Pi(f,103,22)*Pi(h,42,20),p+=7*Pi(f,114,15)*Pi(h,106,16),p-=4.8*Pi(f,55,13)*Pi(h,96,14),p-=2.4*Pi(f,46,9)*Pi(h,20,11),p+=(i(f,h)-.5)*3.4,p=Math.max(.12,p)}Ip(f,h)<=1.5&&(o[d]=1,p=Math.max(f<va?p:.1,p-.8)),r[d]=p,s[d]=p>=0?1:0}const a=[];for(let h=46;h<=118;h+=6)for(let f=16;f<=116;f+=7){if(Ip(h,f)<2.9||t()<.24)continue;const d=r[st(h,f)];if(d<.9||d>15)continue;const p=14+t()*7,v=14+t()*7;let x=6+t()*8;h<62&&(x+=(62-h)*.75),a.push({x:So(h)+(t()-.5)*3,z:Mo(f)+(t()-.5)*3,w:p,d:v,h:x,ci:h,cj:f,tone:.6+t()*.4,flooded:!1})}const l=[];for(const h of Q_)for(let f=18;f<=114&&l.length<18;f+=9){if(t()<.45)continue;const d=t()<.5?-2.4:2.4,p=So(h)+d,v=Mo(f)+(t()-.5)*6;r[st(Xt(p),Xt(v))]<.2||l.push({x:p,z:v,rot:d<0?0:Math.PI})}for(const h of ev)for(let f=47;f<=121&&l.length<18;f+=10){if(t()<.45)continue;const d=t()<.5?-2.4:2.4,p=So(f)+(t()-.5)*6,v=Mo(h)+d;l.push({x:p,z:v,rot:d<0?Math.PI/2:-Math.PI/2})}const u=[];for(const h of a){if(u.length>=44)break;if(t()<.45)continue;const f=t()*Math.PI*2,d=Math.max(h.w,h.d)/2+2+t()*4,p=ze(h.x+Math.cos(f)*d,-248,248),v=ze(h.z+Math.sin(f)*d,-248,248);u.push({x:p,z:v,warnT:.5+t()*6})}return{elev:r,isLand:s,road:o,buildings:a,carSpawns:l,peopleSpawns:u}}const Ay=J_+4;class Cy{constructor(e){$e(this,"world");$e(this,"depth");$e(this,"velX");$e(this,"velZ");$e(this,"fp");$e(this,"fm");$e(this,"fq");$e(this,"fs");$e(this,"running",!1);$e(this,"time",0);$e(this,"waveHeight",8);this.world=e;const n=me*me;this.depth=new Float32Array(n),this.velX=new Float32Array(n),this.velZ=new Float32Array(n),this.fp=new Float32Array(n),this.fm=new Float32Array(n),this.fq=new Float32Array(n),this.fs=new Float32Array(n),this.reset()}start(){this.running=!0}reset(){this.running=!1,this.time=0,this.depth.fill(0),this.velX.fill(0),this.velZ.fill(0),this.fp.fill(0),this.fm.fill(0),this.fq.fill(0),this.fs.fill(0);const{elev:e}=this.world;for(let n=0;n<me;n++)for(let i=0;i<Ay;i++){const r=st(i,n);e[r]<Ou&&(this.depth[r]=Ou-e[r])}}sourceElev(){const e=this.time,n=1-Math.exp(-e/6),i=.5*this.waveHeight*Math.exp(-Math.pow((e-9)/7,2));return ze((this.waveHeight*.75+i)*n,0,this.waveHeight*1.6)}step(e){if(!this.running)return;this.time+=e;const n=this.world.elev,i=this.depth,{fp:r,fm:s,fq:o,fs:a,velX:l,velZ:u}=this,h=Ou+this.sourceElev();for(let p=0;p<me;p++){const v=p*me;for(let x=0;x<J_;x++){const m=v+x;i[m]=Math.max(0,h-n[m])}}const f=Sy*e/xn;for(let p=1;p<me-1;p++){const v=p*me;for(let x=1;x<me-1;x++){const m=v+x,c=n[m]+i[m];let g=Math.max(0,r[m]+f*(c-(n[m+1]+i[m+1]))),_=Math.max(0,s[m]+f*(c-(n[m-1]+i[m-1]))),S=Math.max(0,o[m]+f*(c-(n[m+me]+i[m+me]))),R=Math.max(0,a[m]+f*(c-(n[m-me]+i[m-me])));const A=(g+_+S+R)*e,w=i[m]*xn;if(A>w&&A>0){const P=w/A;g*=P,_*=P,S*=P,R*=P}r[m]=g,s[m]=_,o[m]=S,a[m]=R}}const d=e/xn;for(let p=1;p<me-1;p++){const v=p*me;for(let x=1;x<me-1;x++){const m=v+x,c=r[m-1]+s[m+1]+o[m-me]+a[m+me]-(r[m]+s[m]+o[m]+a[m]);let g=i[m]+d*c;isFinite(g)||(g=0),i[m]=ze(g,0,80)}}for(let p=0;p<me;p++){const v=p*me;for(let x=0;x<me;x++){const m=v+x,c=i[m];if(c>.02){const g=Math.max(c,.12);l[m]=ze((r[m]-s[m])/g,-14,14),u[m]=ze((o[m]-a[m])/g,-14,14)}else l[m]=0,u[m]=0}}}sample(e,n){const i=ze((e+Ct)/xn-.5,0,me-1.001),r=ze((n+Ct)/xn-.5,0,me-1.001),s=Math.floor(i),o=Math.floor(r),a=i-s,l=r-o,u=st(s,o),h=f=>f[u]*(1-a)*(1-l)+f[u+1]*a*(1-l)+f[u+me]*(1-a)*l+f[u+me+1]*a*l;return{d:h(this.depth),vx:h(this.velX),vz:h(this.velZ)}}sampleCell(e,n){const i=st(ze(e,0,me-1),ze(n,0,me-1));return{d:this.depth[i],vx:this.velX[i],vz:this.velZ[i]}}}function Ry(t){return t.carSpawns.map((e,n)=>({x:e.x,z:e.z,y:0,rot:e.rot,av:0,vx:0,vz:0,tilt:0,spawnX:e.x,spawnZ:e.z,displaced:!1,hue:n*.37%1}))}function Py(t){const e=(n,i)=>t.elev[st(Xt(n),Xt(i))];return t.peopleSpawns.map(n=>({x:n.x,z:n.z,y:e(n.x,n.z),dirX:0,dirZ:0,warnT:n.warnT,state:"idle"}))}const by=1025,Ly=1.15,Dy=2.4,Ny=1500,zu=14;function Iy(t,e,n,i){const r=n.sample(t.x,t.z),s=i.elev[st(Xt(t.x),Xt(t.z))],o=r.vx-t.vx,a=r.vz-t.vz,l=Math.hypot(o,a),u=ze((r.d-.35)/.7,0,1);let h=0;if(r.d>.25&&l>.001){const x=ze(r.d/1.1,0,1),m=.5*by*Ly*Dy*l/Ny*x;t.vx+=m*o*e,t.vz+=m*a*e,h=m*l;const c=Math.sin(t.rot),g=Math.cos(t.rot),_=-o*c+a*g;t.av+=_*.02*u*e*(t.hue>.5?1:-1)*8}const f=r.d<.45?4.5*(1-u):.15,d=Math.max(0,1-f*e);t.vx*=d,t.vz*=d,t.av*=Math.max(0,1-(2.5-2*u)*e);const p=Math.hypot(t.vx,t.vz);p>zu&&(t.vx=t.vx/p*zu,t.vz=t.vz/p*zu),t.x+=t.vx*e,t.z+=t.vz*e,t.rot+=t.av*e;for(const x of i.buildings){const m=x.w/2+1.7,c=x.d/2+1.7,g=t.x-x.x,_=t.z-x.z;if(Math.abs(g)<m&&Math.abs(_)<c){const S=m-Math.abs(g),R=c-Math.abs(_);S<R?(t.x=x.x+Math.sign(g||1)*m,t.vx*=-.25):(t.z=x.z+Math.sign(_||1)*c,t.vz*=-.25),t.av=t.av*.5+(_*t.vx-g*t.vz)*.002}}t.x=ze(t.x,-Ct+6,Ct-6),t.z=ze(t.z,-Ct+6,Ct-6);const v=ze(h*.05,0,.55)*u*Math.sin(t.av*3+t.tilt);t.tilt+=(v-t.tilt)*ze(e*2.5,0,1),t.y=s+Math.max(0,r.d-.5)*.35,!t.displaced&&Math.hypot(t.x-t.spawnX,t.z-t.spawnZ)>3&&(t.displaced=!0)}function Uy(t,e,n,i){const r=Xt(t.x),s=Xt(t.z),o=i.elev[st(r,s)],a=n.sampleCell(r,s);switch(a.d>.9&&(t.state="swept"),t.state){case"idle":n.running&&n.time>t.warnT&&o<Lp&&(t.state="flee");break;case"flee":{const l=i.elev[st(ze(r+2,0,me-1),s)]-i.elev[st(ze(r-2,0,me-1),s)],u=i.elev[st(r,ze(s+2,0,me-1))]-i.elev[st(r,ze(s-2,0,me-1))],h=Math.hypot(l,u);h>.05?(t.dirX=l/h,t.dirZ=u/h):t.dirX===0&&t.dirZ===0&&(t.dirX=1);const f=1.8;t.x=ze(t.x+t.dirX*f*e,-Ct+6,Ct-6),t.z=ze(t.z+t.dirZ*f*e,-Ct+6,Ct-6),t.y=i.elev[st(Xt(t.x),Xt(t.z))],t.y>=Lp&&(t.state="safe");break}case"swept":{const l=Math.max(a.d,.3);t.x=ze(t.x+a.vx*Math.min(1,l)*.85*e,-Ct,Ct),t.z=ze(t.z+a.vz*Math.min(1,l)*.85*e,-Ct,Ct),t.y=i.elev[st(Xt(t.x),Xt(t.z))]+Math.min(a.d,2)*.5;break}}}const Up=(t,e,n)=>t.elev[st(Xt(e),Xt(n))];class Fy{constructor(){$e(this,"world");$e(this,"water");$e(this,"cars");$e(this,"people");$e(this,"speed",1);$e(this,"paused",!1);$e(this,"landCells",0);$e(this,"stats",{running:!1,elapsed:0,floodedPct:0,maxDepth:0,floodedBuildings:0,totalBuildings:0,displacedCars:0,totalCars:0,sweptPeople:0,safePeople:0,totalPeople:0,phase:"Pre-wave calm"});this.world=wy(),this.water=new Cy(this.world),this.cars=Ry(this.world),this.people=Py(this.world);for(let e=0;e<me*me;e++)this.world.isLand[e]&&this.landCells++;this.recomputeStats()}start(){this.water.start()}setWaveHeight(e){this.water.waveHeight=Math.max(1,Math.min(20,e))}reset(){this.water.reset(),this.cars.forEach((e,n)=>{const i=this.world.carSpawns[n];e.x=e.spawnX,e.z=e.spawnZ,e.rot=i?i.rot:e.rot,e.av=0,e.vx=0,e.vz=0,e.tilt=0,e.displaced=!1,e.y=Up(this.world,e.x,e.z)}),this.people.forEach((e,n)=>{const i=this.world.peopleSpawns[n];i&&(e.x=i.x,e.z=i.z),e.dirX=0,e.dirZ=0,e.state="idle",e.y=Up(this.world,e.x,e.z)});for(const e of this.world.buildings)e.flooded=!1;this.paused=!1,this.recomputeStats()}update(e){if(!this.water.running||this.paused)return;const n=Math.min(e,.05)*this.speed,i=ze(Math.ceil(n/Ey),1,10),r=n/i;for(let s=0;s<i;s++){this.water.step(r);for(const o of this.cars)Iy(o,r,this.water,this.world);for(const o of this.people)Uy(o,r,this.water,this.world)}this.recomputeStats()}recomputeStats(){const{depth:e,isLand:n}={elev:this.world.elev,depth:this.water.depth,isLand:this.world.isLand};let i=0,r=0;for(let f=0;f<me*me;f++){if(!n[f])continue;const d=e[f];d>My&&i++,d>r&&(r=d)}let s=0;for(const f of this.world.buildings){const d=e[st(Xt(f.x),Xt(f.z))];f.flooded=d>.3,f.flooded&&s++}let o=0;for(const f of this.cars)f.displaced&&o++;let a=0,l=0;for(const f of this.people)f.state==="swept"?a++:f.state==="safe"&&l++;const u=this.water.time,h=this.stats;h.running=this.water.running,h.elapsed=u,h.floodedPct=this.landCells>0?i/this.landCells*100:0,h.maxDepth=r,h.floodedBuildings=s,h.totalBuildings=this.world.buildings.length,h.displacedCars=o,h.totalCars=this.cars.length,h.sweptPeople=a,h.safePeople=l,h.totalPeople=this.people.length,h.phase=this.water.running?u<10?"Wave approaching the coast":u<40?"Inundation spreading inland":"Flow slowing / water settling":"Pre-wave calm"}getStats(){return{...this.stats}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="169",Es={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oy=0,Fp=1,zy=2,tv=1,nv=2,pi=3,nr=0,fn=1,ei=2,Ji=0,Ts=1,Op=2,zp=3,kp=4,ky=5,vr=100,By=101,Hy=102,Vy=103,Gy=104,Wy=200,Xy=201,jy=202,Yy=203,ph=204,mh=205,qy=206,$y=207,Ky=208,Zy=209,Jy=210,Qy=211,eS=212,tS=213,nS=214,gh=0,_h=1,vh=2,Is=3,xh=4,yh=5,Sh=6,Mh=7,iv=0,iS=1,rS=2,Qi=0,sS=1,oS=2,aS=3,lS=4,uS=5,cS=6,hS=7,rv=300,Us=301,Fs=302,Eh=303,Th=304,iu=306,wh=1e3,Er=1001,Ah=1002,ln=1003,fS=1004,xa=1005,Gn=1006,ku=1007,Tr=1008,wi=1009,sv=1010,ov=1011,Go=1012,Zf=1013,Dr=1014,ti=1015,$o=1016,Jf=1017,Qf=1018,Os=1020,av=35902,lv=1021,uv=1022,Xn=1023,cv=1024,hv=1025,ws=1026,zs=1027,ed=1028,td=1029,fv=1030,nd=1031,id=1033,rl=33776,sl=33777,ol=33778,al=33779,Ch=35840,Rh=35841,Ph=35842,bh=35843,Lh=36196,Dh=37492,Nh=37496,Ih=37808,Uh=37809,Fh=37810,Oh=37811,zh=37812,kh=37813,Bh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,Xh=37819,jh=37820,Yh=37821,ll=36492,qh=36494,$h=36495,dv=36283,Kh=36284,Zh=36285,Jh=36286,dS=3200,pS=3201,pv=0,mS=1,Hi="",Zn="srgb",ar="srgb-linear",rd="display-p3",ru="display-p3-linear",Fl="linear",ht="srgb",Ol="rec709",zl="p3",Vr=7680,Bp=519,gS=512,_S=513,vS=514,mv=515,xS=516,yS=517,SS=518,MS=519,Hp=35044,Vp="300 es",xi=2e3,kl=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Qh=180/Math.PI;function Ko(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function ES(t,e){return(t%e+e)%e}function Bu(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const TS={DEG2RAD:ul};class ce{constructor(e=0,n=0){ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],f=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],c=r[6],g=r[1],_=r[4],S=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*m+a*_+l*A,s[6]=o*c+a*S+l*w,s[1]=u*x+h*g+f*R,s[4]=u*m+h*_+f*A,s[7]=u*c+h*S+f*w,s[2]=d*x+p*g+v*R,s[5]=d*m+p*_+v*A,s[8]=d*c+p*S+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=h*o-a*u,d=a*l-h*s,p=u*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*u-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hu.makeScale(e,n)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hu=new Fe;function gv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wS(){const t=Bl("canvas");return t.style.display="block",t}const Gp={};function cl(t){t in Gp||(Gp[t]=!0,console.warn(t))}function AS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function CS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function RS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[ar]:{transfer:Fl,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:ht,primaries:Ol,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ru]:{transfer:Fl,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(Wp)},[rd]:{transfer:ht,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(Wp).convertLinearToSRGB()}},PS=new Set([ar,ru]),Qe={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!PS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qs[e].toReference,r=Qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qs[t].primaries},getTransfer:function(t){return t===Hi?Fl:Qs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qs[e].luminanceCoefficients)}};function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class bS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Bl("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class _v{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gu(r[o].image)):s.push(Gu(r[o]))}else s=Gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DS=0;class Zt extends zr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Er,r=Er,s=Gn,o=Tr,a=Xn,l=wi,u=Zt.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ko(),this.name="",this.source=new _v(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=rv;Zt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,S=(p+1)/2,R=(c+1)/2,A=(h+d)/4,w=(f+x)/4,P=(v+m)/4;return _>S&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-x)/g,this.z=(d-h)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NS extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new _v(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends NS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vv extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==d||u!==p||h!==v){let m=1-a;const c=l*d+u*p+h*v+f*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,c*g);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*g;if(l=l*m+d*S,u=u*m+p*S,h=h*m+v*S,f=f*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=R,u*=R,h*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+h*f+l*p-u*d,e[n+1]=l*v+h*d+u*f-a*p,e[n+2]=u*v+h*p+a*d-l*f,e[n+3]=h*v-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*f+u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f+d*p*v;break;case"YZX":this._x=d*h*f+u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f-d*p*v;break;case"XZY":this._x=d*h*f-u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),f=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*h,this.y=i+l*h+a*u-s*f,this.z=r+l*f+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new I,jp=new Ir;class kr{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Sa.subVectors(this.max,eo),Wr.subVectors(e.a,eo),Xr.subVectors(e.b,eo),jr.subVectors(e.c,eo),bi.subVectors(Xr,Wr),Li.subVectors(jr,Xr),ur.subVectors(Wr,jr);let n=[0,-bi.z,bi.y,0,-Li.z,Li.y,0,-ur.z,ur.y,bi.z,0,-bi.x,Li.z,0,-Li.x,ur.z,0,-ur.x,-bi.y,bi.x,0,-Li.y,Li.x,0,-ur.y,ur.x,0];return!Xu(n,Wr,Xr,jr,Sa)||(n=[1,0,0,0,1,0,0,0,1],!Xu(n,Wr,Xr,jr,Sa))?!1:(Ma.crossVectors(bi,Li),n=[Ma.x,Ma.y,Ma.z],Xu(n,Wr,Xr,jr,Sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,ya=new kr,Wr=new I,Xr=new I,jr=new I,bi=new I,Li=new I,ur=new I,eo=new I,Sa=new I,Ma=new I,cr=new I;function Xu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){cr.fromArray(t,s);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const US=new kr,to=new I,ju=new I;class Zo{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):US.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const n=to.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(ju)),this.expandByPoint(to.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new I,Yu=new I,Ea=new I,Di=new I,qu=new I,Ta=new I,$u=new I;class xv{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yu.copy(e).add(n).multiplyScalar(.5),Ea.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Yu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ea),a=Di.dot(this.direction),l=-Di.dot(Ea),u=Di.lengthSq(),h=Math.abs(1-o*o);let f,d,p,v;if(h>0)if(f=o*l-a,d=o*a-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yu).addScaledVector(Ea,d),p}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){qu.subVectors(n,e),Ta.subVectors(i,e),$u.crossVectors(qu,Ta);let o=this.direction.dot($u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Ta.crossVectors(Di,Ta));if(l<0)return null;const u=a*this.direction.dot(qu.cross(Di));if(u<0||l+u>o)return null;const h=-a*Di.dot($u);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,n,i,r,s,o,a,l,u,h,f,d,p,v,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,f,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,h,f,d,p,v,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=h,c[10]=f,c[14]=d,c[3]=p,c[7]=v,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,v=a*h,x=a*f;n[0]=l*h,n[4]=-l*f,n[8]=u,n[1]=p+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,v=u*h,x=u*f;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,v=u*h,x=u*f;n[0]=d-x*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,v=a*h,x=a*f;n[0]=l*h,n[4]=v*u-p,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=x-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=p*f+v,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=-f,n[8]=u*h,n[1]=d*f+x,n[5]=o*h,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*h,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,OS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ni.crossVectors(i,gn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ni.crossVectors(i,gn)),Ni.normalize(),wa.crossVectors(gn,Ni),r[0]=Ni.x,r[4]=wa.x,r[8]=gn.x,r[1]=Ni.y,r[5]=wa.y,r[9]=gn.y,r[2]=Ni.z,r[6]=wa.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],f=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],c=i[14],g=i[3],_=i[7],S=i[11],R=i[15],A=r[0],w=r[4],P=r[8],Y=r[12],y=r[1],T=r[5],V=r[9],k=r[13],j=r[2],J=r[6],H=r[10],Z=r[14],L=r[3],q=r[7],K=r[11],re=r[15];return s[0]=o*A+a*y+l*j+u*L,s[4]=o*w+a*T+l*J+u*q,s[8]=o*P+a*V+l*H+u*K,s[12]=o*Y+a*k+l*Z+u*re,s[1]=h*A+f*y+d*j+p*L,s[5]=h*w+f*T+d*J+p*q,s[9]=h*P+f*V+d*H+p*K,s[13]=h*Y+f*k+d*Z+p*re,s[2]=v*A+x*y+m*j+c*L,s[6]=v*w+x*T+m*J+c*q,s[10]=v*P+x*V+m*H+c*K,s[14]=v*Y+x*k+m*Z+c*re,s[3]=g*A+_*y+S*j+R*L,s[7]=g*w+_*T+S*J+R*q,s[11]=g*P+_*V+S*H+R*K,s[15]=g*Y+_*k+S*Z+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],c=e[15];return v*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*h-s*l*h)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*h-i*u*h)+c*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],c=e[15],g=f*m*u-x*d*u+x*l*p-a*m*p-f*l*c+a*d*c,_=v*d*u-h*m*u-v*l*p+o*m*p+h*l*c-o*d*c,S=h*x*u-v*f*u+v*a*p-o*x*p-h*a*c+o*f*c,R=v*f*l-h*x*l-v*a*d+o*x*d+h*a*m-o*f*m,A=n*g+i*_+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*c-i*d*c)*w,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(h*m*s-v*d*s+v*r*p-n*m*p-h*r*c+n*d*c)*w,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*c-n*l*c)*w,e[7]=(o*d*s-h*l*s+h*r*u-n*d*u-o*r*p+n*l*p)*w,e[8]=S*w,e[9]=(v*f*s-h*x*s-v*i*p+n*x*p+h*i*c-n*f*c)*w,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*w,e[11]=(h*a*s-o*f*s-h*i*u+n*f*u+o*i*p-n*a*p)*w,e[12]=R*w,e[13]=(h*x*r-v*f*r+v*i*d-n*x*d-h*i*m+n*f*m)*w,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,f=a+a,d=s*u,p=s*h,v=s*f,x=o*h,m=o*f,c=a*f,g=l*u,_=l*h,S=l*f,R=i.x,A=i.y,w=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+S)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+c))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*w,r[9]=(m-g)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,h=1/o,f=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=xi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===xi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===kl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi){const l=this.elements,u=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*h;let v,x;if(a===xi)v=(o+s)*f,x=-2*f;else if(a===kl)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new I,zn=new at,FS=new I(0,0,0),OS=new I(1,1,1),Ni=new I,wa=new I,gn=new I,Yp=new at,qp=new Ir;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zS=0;const $p=new I,qr=new Ir,hi=new at,Aa=new I,no=new I,kS=new I,BS=new Ir,Kp=new I(1,0,0),Zp=new I(0,1,0),Jp=new I(0,0,1),Qp={type:"added"},HS={type:"removed"},$r={type:"childadded",child:null},Ku={type:"childremoved",child:null};class Ut extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,n=new si,i=new Ir,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(no,Aa,this.up):hi.lookAt(Aa,no,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(hi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HS),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,kS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new I,fi=new I,Zu=new I,di=new I,Kr=new I,Zr=new I,em=new I,Ju=new I,Qu=new I,ec=new I,tc=new xt,nc=new xt,ic=new xt;class Wn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),fi.subVectors(i,n),Zu.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(fi),l=kn.dot(Zu),u=fi.dot(fi),h=fi.dot(Zu),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return tc.setScalar(0),nc.setScalar(0),ic.setScalar(0),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,i),ic.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tc,s.x),o.addScaledVector(nc,s.y),o.addScaledVector(ic,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),fi.subVectors(e,n),kn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Zr.subVectors(s,i),Ju.subVectors(e,i);const l=Kr.dot(Ju),u=Zr.dot(Ju);if(l<=0&&u<=0)return n.copy(i);Qu.subVectors(e,r);const h=Kr.dot(Qu),f=Zr.dot(Qu);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Kr,o);ec.subVectors(e,s);const p=Kr.dot(ec),v=Zr.dot(ec);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Zr,a);const m=h*v-p*f;if(m<=0&&f-h>=0&&p-v>=0)return em.subVectors(s,r),a=(f-h)/(f-h+(p-v)),n.copy(r).addScaledVector(em,a);const c=1/(m+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=ES(e,1),n=Nt(n,0,1),i=Nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rc(o,s,e+1/3),this.g=rc(o,s,e),this.b=rc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=Sv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Vu(e.r),this.g=Vu(e.g),this.b=Vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Nt(Gt.r*255,0,255))*65536+Math.round(Nt(Gt.g*255,0,255))*256+Math.round(Nt(Gt.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Zn){Qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Ca);const i=Bu(Ii.h,Ca.h,n),r=Bu(Ii.s,Ca.s,n),s=Bu(Ii.l,Ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Oe;Oe.NAMES=Sv;let VS=0;class Jo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Ts,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sd extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Ra=new ce;class jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hp,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(e),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class Mv extends jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ev extends jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const Cn=new at,sc=new Ut,Jr=new I,_n=new kr,io=new kr,Lt=new I;class oi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Ev:Mv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(_n.min,io.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,io.max),_n.expandByPoint(Lt)):(_n.expandByPoint(io.min),_n.expandByPoint(io.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Lt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),Lt.add(Jr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const u=new I,h=new I,f=new I,d=new ce,p=new ce,v=new ce,x=new I,m=new I;function c(P,Y,y){u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,Y),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,Y),v.fromBufferAttribute(s,y),h.sub(u),f.sub(u),p.sub(d),v.sub(d);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(T),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(T),a[P].add(x),a[Y].add(x),a[y].add(x),l[P].add(m),l[Y].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,Y=g.length;P<Y;++P){const y=g[P],T=y.start,V=y.count;for(let k=T,j=T+V;k<j;k+=3)c(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new I,S=new I,R=new I,A=new I;function w(P){R.fromBufferAttribute(r,P),A.copy(R);const Y=a[P];_.copy(Y),_.sub(R.multiplyScalar(R.dot(Y))).normalize(),S.crossVectors(A,Y);const T=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,T)}for(let P=0,Y=g.length;P<Y;++P){const y=g[P],T=y.start,V=y.count;for(let k=T,j=T+V;k<j;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,h=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let c=0;c<h;c++)d[v++]=u[p++]}return new jt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tm=new at,hr=new xv,Pa=new Zo,nm=new I,ba=new I,La=new I,Da=new I,oc=new I,Na=new I,im=new I,Ia=new I;class Sn extends Ut{constructor(e=new oi,n=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Na.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],f=s[l];h!==0&&(oc.fromBufferAttribute(f,e),o?Na.addScaledVector(oc,h):Na.addScaledVector(oc.sub(n),h))}n.add(Na)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Pa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Pa,nm)===null||hr.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(s).invert(),hr.copy(e.ray).applyMatrix4(tm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=_;S<R;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=Ua(this,c,e,i,u,h,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Ua(this,o,e,i,u,h,f,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=_;S<R;S+=3){const A=S,w=S+1,P=S+2;r=Ua(this,c,e,i,u,h,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const g=m,_=m+1,S=m+2;r=Ua(this,o,e,i,u,h,f,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function WS(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ia);return u<n.near||u>n.far?null:{distance:u,point:Ia.clone(),object:t}}function Ua(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ba),t.getVertexPosition(l,La),t.getVertexPosition(u,Da);const h=WS(t,e,n,i,ba,La,Da,im);if(h){const f=new I;Wn.getBarycoord(im,ba,La,Da,f),r&&(h.uv=Wn.getInterpolatedAttribute(r,a,l,u,f,new ce)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,a,l,u,f,new ce)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,u,f,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new I,materialIndex:0};Wn.getNormal(ba,La,Da,d.normal),h.face=d,h.barycoord=f}return h}class Ur extends oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(u,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(f,2));function v(x,m,c,g,_,S,R,A,w,P,Y){const y=S/w,T=R/P,V=S/2,k=R/2,j=A/2,J=w+1,H=P+1;let Z=0,L=0;const q=new I;for(let K=0;K<H;K++){const re=K*T-k;for(let we=0;we<J;we++){const Be=we*y-V;q[x]=Be*g,q[m]=re*_,q[c]=j,u.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[c]=A>0?1:-1,h.push(q.x,q.y,q.z),f.push(we/w),f.push(1-K/P),Z+=1}}for(let K=0;K<P;K++)for(let re=0;re<w;re++){const we=d+re+J*K,Be=d+re+J*(K+1),G=d+(re+1)+J*(K+1),te=d+(re+1)+J*K;l.push(we,Be,te),l.push(Be,G,te),L+=6}a.addGroup(p,L,Y),p+=L,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function XS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const jS={clone:ks,merge:qt};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=XS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wv extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new I,rm=new ce,sm=new ce;class bn extends wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,rm,sm),n.subVectors(sm,rm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,es=1;class $S extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Qr,es,e,n);r.layers=this.layers,this.add(r);const s=new bn(Qr,es,e,n);s.layers=this.layers,this.add(s);const o=new bn(Qr,es,e,n);o.layers=this.layers,this.add(o);const a=new bn(Qr,es,e,n);a.layers=this.layers,this.add(a);const l=new bn(Qr,es,e,n);l.layers=this.layers,this.add(l);const u=new bn(Qr,es,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Av extends Zt{constructor(e,n,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Av(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ur(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ji});s.uniforms.tEquirect.value=n;const o=new Sn(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Gn),new $S(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ac=new I,ZS=new I,JS=new Fe;class zi{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ac.subVectors(i,n).cross(ZS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ac),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JS.getNormalMatrix(e),r=this.coplanarPoint(ac).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Zo,Fa=new I;class od{constructor(e=new zi,n=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],c=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-c).normalize(),i[1].setComponents(l+s,d+u,m+p,S+c).normalize(),i[2].setComponents(l+o,d+h,m+v,S+g).normalize(),i[3].setComponents(l-o,d-h,m-v,S-g).normalize(),i[4].setComponents(l-a,d-f,m-x,S-_).normalize(),n===xi)i[5].setComponents(l+a,d+f,m+x,S+_).normalize();else if(n===kl)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QS(t){const e=new WeakMap;function n(a,l){const u=a.array,h=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const h=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,h);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];t.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class su extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,f=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let c=0;c<h;c++){const g=c*d-o;for(let _=0;_<u;_++){const S=_*f-s;v.push(S,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,S=g+u*(c+1),R=g+1+u*(c+1),A=g+1+u*c;p.push(_,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new ri(v,3)),this.setAttribute("normal",new ri(x,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:aM,batching_pars_vertex:lM,batching_vertex:uM,begin_vertex:cM,beginnormal_vertex:hM,bsdfs:fM,iridescence_fragment:dM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:wM,displacementmap_pars_vertex:AM,displacementmap_vertex:CM,emissivemap_fragment:RM,emissivemap_pars_fragment:PM,colorspace_fragment:bM,colorspace_pars_fragment:LM,envmap_fragment:DM,envmap_common_pars_fragment:NM,envmap_pars_fragment:IM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:jM,envmap_vertex:FM,fog_vertex:OM,fog_pars_vertex:zM,fog_fragment:kM,fog_pars_fragment:BM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:VM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:YM,lights_toon_pars_fragment:qM,lights_phong_fragment:$M,lights_phong_pars_fragment:KM,lights_physical_fragment:ZM,lights_physical_pars_fragment:JM,lights_fragment_begin:QM,lights_fragment_maps:eE,lights_fragment_end:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:aE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:hE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:AE,opaque_fragment:CE,packing:RE,premultiplied_alpha_fragment:PE,project_vertex:bE,dithering_fragment:LE,dithering_pars_fragment:DE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:FE,shadowmap_vertex:OE,shadowmask_pars_fragment:zE,skinbase_vertex:kE,skinning_pars_vertex:BE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:GE,specularmap_pars_fragment:WE,tonemapping_fragment:XE,tonemapping_pars_fragment:jE,transmission_fragment:YE,transmission_pars_fragment:qE,uv_pars_fragment:$E,uv_pars_vertex:KE,uv_vertex:ZE,worldpos_vertex:JE,background_vert:QE,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:o1,distanceRGBA_vert:a1,distanceRGBA_frag:l1,equirect_vert:u1,equirect_frag:c1,linedashed_vert:h1,linedashed_frag:f1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:S1,meshphong_frag:M1,meshphysical_vert:E1,meshphysical_frag:T1,meshtoon_vert:w1,meshtoon_frag:A1,points_vert:C1,points_frag:R1,shadow_vert:P1,shadow_frag:b1,sprite_vert:L1,sprite_frag:D1},se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:qt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:qt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:qt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:qt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:qt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:qt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:qt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:qt([se.lights,se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Jn.physical={uniforms:qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Oa={r:0,b:0,g:0},dr=new si,N1=new at;function I1(t,e,n,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,u,h,f=null,d=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const S=v(g);S===null?c(a,l):S&&S.isColor&&(c(S,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===iu)?(h===void 0&&(h=new Sn(new Ur(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:ks(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),dr.copy(_.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(dr)),h.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ht,(f!==S||d!==S.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Sn(new su(2,2),new ir({name:"BackgroundMaterial",uniforms:ks(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(Oa,Tv(t)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:m}}function U1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,T,V,k,j){let J=!1;const H=f(k,V,T);s!==H&&(s=H,u(s.object)),J=p(y,k,V,j),J&&v(y,k,V,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(y,T,V,k),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function h(y){return t.deleteVertexArray(y)}function f(y,T,V){const k=V.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let J=j[T.id];J===void 0&&(J={},j[T.id]=J);let H=J[k];return H===void 0&&(H=d(l()),J[k]=H),H}function d(y){const T=[],V=[],k=[];for(let j=0;j<n;j++)T[j]=0,V[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,T,V,k){const j=s.attributes,J=T.attributes;let H=0;const Z=V.getAttributes();for(const L in Z)if(Z[L].location>=0){const K=j[L];let re=J[L];if(re===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function v(y,T,V,k){const j={},J=T.attributes;let H=0;const Z=V.getAttributes();for(const L in Z)if(Z[L].location>=0){let K=J[L];K===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),j[L]=re,H++}s.attributes=j,s.attributesNum=H,s.index=k}function x(){const y=s.newAttributes;for(let T=0,V=y.length;T<V;T++)y[T]=0}function m(y){c(y,0)}function c(y,T){const V=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;V[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),j[y]!==T&&(t.vertexAttribDivisor(y,T),j[y]=T)}function g(){const y=s.newAttributes,T=s.enabledAttributes;for(let V=0,k=T.length;V<k;V++)T[V]!==y[V]&&(t.disableVertexAttribArray(V),T[V]=0)}function _(y,T,V,k,j,J,H){H===!0?t.vertexAttribIPointer(y,T,V,j,J):t.vertexAttribPointer(y,T,V,k,j,J)}function S(y,T,V,k){x();const j=k.attributes,J=V.getAttributes(),H=T.defaultAttributeValues;for(const Z in J){const L=J[Z];if(L.location>=0){let q=j[Z];if(q===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const K=q.normalized,re=q.itemSize,we=e.get(q);if(we===void 0)continue;const Be=we.buffer,G=we.type,te=we.bytesPerElement,he=G===t.INT||G===t.UNSIGNED_INT||q.gpuType===Zf;if(q.isInterleavedBufferAttribute){const ae=q.data,Ne=ae.stride,Ce=q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ge=0;Ge<L.locationSize;Ge++)c(L.location+Ge,ae.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ge=0;Ge<L.locationSize;Ge++)m(L.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Ge=0;Ge<L.locationSize;Ge++)_(L.location+Ge,re/L.locationSize,G,K,Ne*te,(Ce+re/L.locationSize*Ge)*te,he)}else{if(q.isInstancedBufferAttribute){for(let ae=0;ae<L.locationSize;ae++)c(L.location+ae,q.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ae=0;ae<L.locationSize;ae++)m(L.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ae=0;ae<L.locationSize;ae++)_(L.location+ae,re/L.locationSize,G,K,re*te,re/L.locationSize*ae*te,he)}}else if(H!==void 0){const K=H[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}g()}function R(){P();for(const y in i){const T=i[y];for(const V in T){const k=T[V];for(const j in k)h(k[j].object),delete k[j];delete T[V]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const V in T){const k=T[V];for(const j in k)h(k[j].object),delete k[j];delete T[V]}delete i[y.id]}function w(y){for(const T in i){const V=i[T];if(V[y.id]===void 0)continue;const k=V[y.id];for(const j in k)h(k[j].object),delete k[j];delete V[y.id]}}function P(){Y(),o=!0,s!==r&&(s=r,u(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:Y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function F1(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function o(u,h,f){f!==0&&(t.drawArraysInstanced(i,u,h,f),n.update(h,i,f))}function a(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=h[v];n.update(p,i,1)}function l(u,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,h,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=h[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function O1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Xn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==wi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ti&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function z1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new zi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,c=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):u();else{const g=s?0:i,_=g*4;let S=c.clippingState||null;l.value=S,S=h(v,d,_,p);for(let R=0;R!==_;++R)S[R]=n[R];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const c=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,S=p;_!==x;++_,S+=4)o.copy(f[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function k1(t){let e=new WeakMap;function n(o,a){return a===Eh?o.mapping=Us:a===Th&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eh||a===Th)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new KS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rv extends wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,om=[.125,.215,.35,.446,.526,.582],xr=20,lc=new Rv,am=new Oe;let uc=null,cc=0,hc=0,fc=!1;const _r=(1+Math.sqrt(5))/2,ts=1/_r,lm=[new I(-_r,ts,0),new I(_r,ts,0),new I(-ts,0,_r),new I(ts,0,_r),new I(0,_r,-ts),new I(0,_r,ts),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,cc,hc),this._renderer.xr.enabled=fc,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:$o,format:Xn,colorSpace:ar,depthBuffer:!1},r=cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B1(s)),this._blurMaterial=H1(s,e,n)}return r}_compileMaterial(e){const n=new Sn(this._lodPlanes[0],e);this._renderer.compile(n,lc)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(am),h.toneMapping=Qi,h.autoClear=!1;const p=new sd({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new Sn(new Ur,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(am),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;za(r,g*_,c>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lm[(r-s-1)%lm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Sn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const c=[];let g=0;for(let w=0;w<xr;++w){const P=w/x,Y=Math.exp(-P*P/2);c.push(Y),w===0?g+=Y:w<m&&(g+=2*Y)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const S=this._sizeLods[r],R=3*S*(r>_-gs?r-_+gs:0),A=4*(this._cubeSize-S);za(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(f,lc)}}function B1(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+om.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=om[o-t+gs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,x=3,m=2,c=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),S=new Float32Array(c*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,Y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(Y,x*v*A),_.set(d,m*v*A);const y=[A,A,A,A,A,A];S.set(y,c*v*A)}const R=new oi;R.setAttribute("position",new jt(g,x)),R.setAttribute("uv",new jt(_,m)),R.setAttribute("faceIndex",new jt(S,c)),e.push(R),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function H1(t,e,n){const i=new Float32Array(xr),r=new I(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function hm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function fm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Eh||l===Th,h=l===Us||l===Fs;if(u||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new um(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new um(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function G1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&cl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W1(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,S=g.length;_<S;_+=3){const R=g[_+0],A=g[_+1],w=g[_+2];d.push(R,A,A,w,w,R)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const R=_+0,A=_+1,w=_+2;d.push(R,A,A,w,w,R)}}else return;const m=new(gv(d)?Ev:Mv)(d,1);m.version=x;const c=s.get(f);c&&e.remove(c),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function X1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function h(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}function f(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let c=0;for(let g=0;g<v;g++)c+=p[g];for(let g=0;g<x.length;g++)n.update(c,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function j1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Y1(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*f),P=new vv(w,R,A,f);P.type=ti,P.needsUpdate=!0;const Y=S*4;for(let T=0;T<f;T++){const V=c[T],k=g[T],j=_[T],J=R*A*4*T;for(let H=0;H<V.count;H++){const Z=H*Y;v===!0&&(r.fromBufferAttribute(V,H),w[J+Z+0]=r.x,w[J+Z+1]=r.y,w[J+Z+2]=r.z,w[J+Z+3]=0),x===!0&&(r.fromBufferAttribute(k,H),w[J+Z+4]=r.x,w[J+Z+5]=r.y,w[J+Z+6]=r.z,w[J+Z+7]=0),m===!0&&(r.fromBufferAttribute(j,H),w[J+Z+8]=r.x,w[J+Z+9]=r.y,w[J+Z+10]=r.z,w[J+Z+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new ce(R,A)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function q1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Pv extends Zt{constructor(e,n,i,r,s,o,a,l,u,h=ws){if(h!==ws&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ws&&(i=Dr),i===void 0&&h===zs&&(i=Os),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const bv=new Zt,dm=new Pv(1,1),Lv=new vv,Dv=new IS,Nv=new Av,pm=[],mm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ou(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Pt(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),bt(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Pt(n,i))return;_m.set(i),t.uniformMatrix3fv(this.addr,!1,_m),bt(n,i)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Pt(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),bt(n,i)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(dm.compareFunction=mv,s=dm):s=bv,n.setTexture2D(e||s,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dv,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nv,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lv,r)}function pT(t){switch(t){case 5126:return $1;case 35664:return K1;case 35665:return Z1;case 35666:return J1;case 35674:return Q1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return dT}}function mT(t,e){t.uniform1fv(this.addr,e)}function gT(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function _T(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function vT(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function xT(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yT(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ST(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MT(t,e){t.uniform1iv(this.addr,e)}function ET(t,e){t.uniform2iv(this.addr,e)}function TT(t,e){t.uniform3iv(this.addr,e)}function wT(t,e){t.uniform4iv(this.addr,e)}function AT(t,e){t.uniform1uiv(this.addr,e)}function CT(t,e){t.uniform2uiv(this.addr,e)}function RT(t,e){t.uniform3uiv(this.addr,e)}function PT(t,e){t.uniform4uiv(this.addr,e)}function bT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||bv,s[o])}function LT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dv,s[o])}function DT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Nv,s[o])}function NT(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lv,s[o])}function IT(t){switch(t){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return wT;case 5125:return AT;case 36294:return CT;case 36295:return RT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return NT}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pT(n.type)}}class FT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IT(n.type)}}class OT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function xm(t,e){t.seq.push(e),t.map[e.id]=e}function zT(t,e,n){const i=t.name,r=i.length;for(dc.lastIndex=0;;){const s=dc.exec(i),o=dc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){xm(n,u===void 0?new UT(a,t,e):new FT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new OT(a),xm(n,f)),n=f}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);zT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let BT=0;function HT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function VT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case ar:case ru:return[i,"LinearTransferOETF"];case Zn:case rd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+HT(t.getShaderSource(e),o)}else return r}function GT(t,e){const n=VT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function WT(t,e){let n;switch(e){case sS:n="Linear";break;case oS:n="Reinhard";break;case aS:n="Cineon";break;case lS:n="ACESFilmic";break;case cS:n="AgX";break;case hS:n="Neutral";break;case uS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ka=new I;function XT(){Qe.getLuminanceCoefficients(ka);const t=ka.x.toFixed(4),e=ka.y.toFixed(4),n=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function YT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function co(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(t){return t.replace($T,ZT)}const KT=new Map;function ZT(t,e){let n=Ue[e];if(n===void 0){const i=KT.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ef(n)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(t){return t.replace(JT,QT)}function QT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ew(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function tw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Fs:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function iw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case iv:e="ENVMAP_BLENDING_MULTIPLY";break;case iS:e="ENVMAP_BLENDING_MIX";break;case rS:e="ENVMAP_BLENDING_ADD";break}return e}function rw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ew(n),u=tw(n),h=nw(n),f=iw(n),d=rw(n),p=jT(n),v=YT(s),x=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(co).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(co).join(`
`),c.length>0&&(c+=`
`)):(m=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),c=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Qi?WT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,GT("linearToOutputTexel",n.outputColorSpace),XT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(co).join(`
`)),o=ef(o),o=Mm(o,n),o=Em(o,n),a=ef(a),a=Mm(a,n),a=Em(a,n),o=Tm(o),a=Tm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+o,S=g+c+a,R=ym(r,r.VERTEX_SHADER,_),A=ym(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(T){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(A).trim();let J=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const Z=Sm(r,R,"vertex"),L=Sm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+Z+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||j==="")&&(H=!1);H&&(T.diagnostics={runnable:J,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:c}})}r.deleteShader(R),r.deleteShader(A),P=new hl(r,x),Y=qT(r,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let Y;this.getAttributes=function(){return Y===void 0&&w(this),Y};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,kT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let ow=0;class aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lw(e),n.set(e,i)),i}}class lw{constructor(e){this.id=ow++,this.code=e,this.usedTimes=0}}function uw(t,e,n,i,r,s,o){const a=new yv,l=new aw,u=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function c(y,T,V,k,j){const J=k.fog,H=j.geometry,Z=y.isMeshStandardMaterial?k.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),q=L&&L.mapping===iu?L.image.height:null,K=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=re!==void 0?re.length:0;let Be=0;H.morphAttributes.position!==void 0&&(Be=1),H.morphAttributes.normal!==void 0&&(Be=2),H.morphAttributes.color!==void 0&&(Be=3);let G,te,he,ae;if(K){const tn=Jn[K];G=tn.vertexShader,te=tn.fragmentShader}else G=y.vertexShader,te=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),Ce=j.isInstancedMesh===!0,Ge=j.isBatchedMesh===!0,nt=!!y.map,We=!!y.matcap,b=!!L,dn=!!y.aoMap,He=!!y.lightMap,Ye=!!y.bumpMap,Pe=!!y.normalMap,lt=!!y.displacementMap,De=!!y.emissiveMap,C=!!y.metalnessMap,M=!!y.roughnessMap,F=y.anisotropy>0,X=y.clearcoat>0,Q=y.dispersion>0,W=y.iridescence>0,Se=y.sheen>0,oe=y.transmission>0,ge=F&&!!y.anisotropyMap,qe=X&&!!y.clearcoatMap,ne=X&&!!y.clearcoatNormalMap,_e=X&&!!y.clearcoatRoughnessMap,be=W&&!!y.iridescenceMap,Le=W&&!!y.iridescenceThicknessMap,ve=Se&&!!y.sheenColorMap,Ve=Se&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,rt=!!y.specularColorMap,D=!!y.specularIntensityMap,fe=oe&&!!y.transmissionMap,B=oe&&!!y.thicknessMap,$=!!y.gradientMap,le=!!y.alphaMap,de=y.alphaTest>0,Xe=!!y.alphaHash,Mt=!!y.extensions;let en=Qi;y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(en=t.toneMapping);const Ke={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:te,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Ge,batchingColor:Ge&&j._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&j.instanceColor!==null,instancingMorph:Ce&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:ar,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:We,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:q,aoMap:dn,lightMap:He,bumpMap:Ye,normalMap:Pe,displacementMap:p&&lt,emissiveMap:De,normalMapObjectSpace:Pe&&y.normalMapType===mS,normalMapTangentSpace:Pe&&y.normalMapType===pv,metalnessMap:C,roughnessMap:M,anisotropy:F,anisotropyMap:ge,clearcoat:X,clearcoatMap:qe,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:Q,iridescence:W,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:rt,specularIntensityMap:D,transmission:oe,transmissionMap:fe,thicknessMap:B,gradientMap:$,opaque:y.transparent===!1&&y.blending===Ts&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Xe,combine:y.combine,mapUv:nt&&m(y.map.channel),aoMapUv:dn&&m(y.aoMap.channel),lightMapUv:He&&m(y.lightMap.channel),bumpMapUv:Ye&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:lt&&m(y.displacementMap.channel),emissiveMapUv:De&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:qe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(y.sheenRoughnessMap.channel),specularMapUv:Ie&&m(y.specularMap.channel),specularColorMapUv:rt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:B&&m(y.thicknessMap.channel),alphaMapUv:le&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pe||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(nt||le),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:en,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function g(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(_(T,y),S(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const T=x[y.type];let V;if(T){const k=Jn[T];V=jS.clone(k.uniforms)}else V=y.uniforms;return V}function A(y,T){let V;for(let k=0,j=h.length;k<j;k++){const J=h[k];if(J.cacheKey===T){V=J,++V.usedTimes;break}}return V===void 0&&(V=new sw(t,T,y,s),h.push(V)),V}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:c,getProgramCacheKey:g,getUniforms:R,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:Y}}function cw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,x,m){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=c):(c.id=f.id,c.object=f,c.geometry=d,c.material=p,c.groupOrder=v,c.renderOrder=f.renderOrder,c.z=x,c.group=m),e++,c}function a(f,d,p,v,x,m){const c=o(f,d,p,v,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(f,d,p,v,x,m){const c=o(f,d,p,v,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,d){n.length>1&&n.sort(f||hw),i.length>1&&i.sort(d||Am),r.length>1&&r.sort(d||Am)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function fw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Cm,t.set(i,[o])):r>=s.length?(o=new Cm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function dw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Oe};break;case"SpotLight":n={position:new I,direction:new I,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mw=0;function gw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _w(t){const e=new dw,n=pw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new at,o=new at;function a(u){let h=0,f=0,d=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,v=0,x=0,m=0,c=0,g=0,_=0,S=0,R=0,A=0,w=0;u.sort(gw);for(let Y=0,y=u.length;Y<y;Y++){const T=u[Y],V=T.color,k=T.intensity,j=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=V.r*k,f+=V.g*k,d+=V.b*k;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],k);w++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Z=T.shadow,L=n.get(T);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=T.shadow.matrix,g++}i.directional[p]=H,p++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(V).multiplyScalar(k),H.distance=j,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[x]=H;const Z=T.shadow;if(T.map&&(i.spotLightMap[R]=T.map,R++,Z.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[x]=Z.matrix,T.castShadow){const L=n.get(T);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=J,S++}x++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(V).multiplyScalar(k),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=H,m++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const Z=T.shadow,L=n.get(T);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=T.shadow.matrix,_++}i.point[v]=H,v++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(k),H.groundColor.copy(T.groundColor).multiplyScalar(k),i.hemi[c]=H,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==c||P.numDirectionalShadows!==g||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=v,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=c,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=w,i.version=mw++)}function l(u,h){let f=0,d=0,p=0,v=0,x=0;const m=h.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Rm(t){const e=new _w(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rm(t),e.set(r,[a])):s>=o.length?(a=new Rm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class xw extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yw extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ew(t,e,n){let i=new od;const r=new ce,s=new ce,o=new xt,a=new xw({depthPacking:pS}),l=new yw,u={},h=n.maxTextureSize,f={[nr]:fn,[fn]:nr,[ei]:ei},d=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Sw,fragmentShader:Mw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new oi;v.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Sn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let c=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const Y=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ji),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=c!==pi&&this.type===pi,j=c===pi&&this.type!==pi;for(let J=0,H=A.length;J<H;J++){const Z=A[J],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||k===!0||j===!0){const re=this.type!==pi?{minFilter:ln,magFilter:ln}:{};L.map!==null&&L.map.dispose(),L.map=new Nr(r.x,r.y,re),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let re=0;re<K;re++){const we=L.getViewport(re);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),V.viewport(o),L.updateMatrices(Z,re),i=L.getFrustum(),S(w,P,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===pi&&g(L,P),L.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(Y,y,T)};function g(A,w){const P=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,x,null)}function _(A,w,P,Y){let y=null;const T=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=y.uuid,k=w.uuid;let j=u[V];j===void 0&&(j={},u[V]=j);let J=j[k];J===void 0&&(J=y.clone(),j[k]=J,w.addEventListener("dispose",R)),y=J}if(y.visible=w.visible,y.wireframe=w.wireframe,Y===pi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=P}return y}function S(A,w,P,Y,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=e.update(A),j=A.material;if(Array.isArray(j)){const J=k.groups;for(let H=0,Z=J.length;H<Z;H++){const L=J[H],q=j[L.materialIndex];if(q&&q.visible){const K=_(A,q,Y,y);A.onBeforeShadow(t,A,w,P,k,K,L),t.renderBufferDirect(P,null,k,K,A,L),A.onAfterShadow(t,A,w,P,k,K,L)}}}else if(j.visible){const J=_(A,j,Y,y);A.onBeforeShadow(t,A,w,P,k,J,null),t.renderBufferDirect(P,null,k,J,A,null),A.onAfterShadow(t,A,w,P,k,J,null)}}const V=A.children;for(let k=0,j=V.length;k<j;k++)S(V[k],w,P,Y,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in u){const Y=u[P],y=A.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}const Tw={[gh]:_h,[vh]:Sh,[xh]:Mh,[Is]:yh,[_h]:gh,[Sh]:vh,[Mh]:xh,[yh]:Is};function ww(t){function e(){let D=!1;const fe=new xt;let B=null;const $=new xt(0,0,0,0);return{setMask:function(le){B!==le&&!D&&(t.colorMask(le,le,le,le),B=le)},setLocked:function(le){D=le},setClear:function(le,de,Xe,Mt,en){en===!0&&(le*=Mt,de*=Mt,Xe*=Mt),fe.set(le,de,Xe,Mt),$.equals(fe)===!1&&(t.clearColor(le,de,Xe,Mt),$.copy(fe))},reset:function(){D=!1,B=null,$.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,B=null,$=null,le=null;return{setReversed:function(de){fe=de},setTest:function(de){de?he(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){B!==de&&!D&&(t.depthMask(de),B=de)},setFunc:function(de){if(fe&&(de=Tw[de]),$!==de){switch(de){case gh:t.depthFunc(t.NEVER);break;case _h:t.depthFunc(t.ALWAYS);break;case vh:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case xh:t.depthFunc(t.EQUAL);break;case yh:t.depthFunc(t.GEQUAL);break;case Sh:t.depthFunc(t.GREATER);break;case Mh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=de}},setLocked:function(de){D=de},setClear:function(de){le!==de&&(t.clearDepth(de),le=de)},reset:function(){D=!1,B=null,$=null,le=null}}}function i(){let D=!1,fe=null,B=null,$=null,le=null,de=null,Xe=null,Mt=null,en=null;return{setTest:function(Ke){D||(Ke?he(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ke){fe!==Ke&&!D&&(t.stencilMask(Ke),fe=Ke)},setFunc:function(Ke,tn,li){(B!==Ke||$!==tn||le!==li)&&(t.stencilFunc(Ke,tn,li),B=Ke,$=tn,le=li)},setOp:function(Ke,tn,li){(de!==Ke||Xe!==tn||Mt!==li)&&(t.stencilOp(Ke,tn,li),de=Ke,Xe=tn,Mt=li)},setLocked:function(Ke){D=Ke},setClear:function(Ke){en!==Ke&&(t.clearStencil(Ke),en=Ke)},reset:function(){D=!1,fe=null,B=null,$=null,le=null,de=null,Xe=null,Mt=null,en=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,v=!1,x=null,m=null,c=null,g=null,_=null,S=null,R=null,A=new Oe(0,0,0),w=0,P=!1,Y=null,y=null,T=null,V=null,k=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=H>=2);let L=null,q={};const K=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),we=new xt().fromArray(K),Be=new xt().fromArray(re);function G(D,fe,B,$){const le=new Uint8Array(4),de=t.createTexture();t.bindTexture(D,de),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<B;Xe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(fe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return de}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Is),He(!1),Ye(Fp),he(t.CULL_FACE),b(Ji);function he(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ae(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ne(D,fe){return h[D]!==fe?(t.bindFramebuffer(D,fe),h[D]=fe,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(D,fe){let B=d,$=!1;if(D){B=f.get(fe),B===void 0&&(B=[],f.set(fe,B));const le=D.textures;if(B.length!==le.length||B[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Xe=le.length;de<Xe;de++)B[de]=t.COLOR_ATTACHMENT0+de;B.length=le.length,$=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,$=!0);$&&t.drawBuffers(B)}function Ge(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const nt={[vr]:t.FUNC_ADD,[By]:t.FUNC_SUBTRACT,[Hy]:t.FUNC_REVERSE_SUBTRACT};nt[Vy]=t.MIN,nt[Gy]=t.MAX;const We={[Wy]:t.ZERO,[Xy]:t.ONE,[jy]:t.SRC_COLOR,[ph]:t.SRC_ALPHA,[Jy]:t.SRC_ALPHA_SATURATE,[Ky]:t.DST_COLOR,[qy]:t.DST_ALPHA,[Yy]:t.ONE_MINUS_SRC_COLOR,[mh]:t.ONE_MINUS_SRC_ALPHA,[Zy]:t.ONE_MINUS_DST_COLOR,[$y]:t.ONE_MINUS_DST_ALPHA,[Qy]:t.CONSTANT_COLOR,[eS]:t.ONE_MINUS_CONSTANT_COLOR,[tS]:t.CONSTANT_ALPHA,[nS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,fe,B,$,le,de,Xe,Mt,en,Ke){if(D===Ji){v===!0&&(ae(t.BLEND),v=!1);return}if(v===!1&&(he(t.BLEND),v=!0),D!==ky){if(D!==x||Ke!==P){if((m!==vr||_!==vr)&&(t.blendEquation(t.FUNC_ADD),m=vr,_=vr),Ke)switch(D){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Op:t.blendFunc(t.ONE,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Op:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}c=null,g=null,S=null,R=null,A.set(0,0,0),w=0,x=D,P=Ke}return}le=le||fe,de=de||B,Xe=Xe||$,(fe!==m||le!==_)&&(t.blendEquationSeparate(nt[fe],nt[le]),m=fe,_=le),(B!==c||$!==g||de!==S||Xe!==R)&&(t.blendFuncSeparate(We[B],We[$],We[de],We[Xe]),c=B,g=$,S=de,R=Xe),(Mt.equals(A)===!1||en!==w)&&(t.blendColor(Mt.r,Mt.g,Mt.b,en),A.copy(Mt),w=en),x=D,P=!1}function dn(D,fe){D.side===ei?ae(t.CULL_FACE):he(t.CULL_FACE);let B=D.side===fn;fe&&(B=!B),He(B),D.blending===Ts&&D.transparent===!1?b(Ji):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){Y!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),Y=D)}function Ye(D){D!==Oy?(he(t.CULL_FACE),D!==y&&(D===Fp?t.cullFace(t.BACK):D===zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),y=D}function Pe(D){D!==T&&(J&&t.lineWidth(D),T=D)}function lt(D,fe,B){D?(he(t.POLYGON_OFFSET_FILL),(V!==fe||k!==B)&&(t.polygonOffset(fe,B),V=fe,k=B)):ae(t.POLYGON_OFFSET_FILL)}function De(D){D?he(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+j-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,fe,B){B===void 0&&(L===null?B=t.TEXTURE0+j-1:B=L);let $=q[B];$===void 0&&($={type:void 0,texture:void 0},q[B]=$),($.type!==D||$.texture!==fe)&&(L!==B&&(t.activeTexture(B),L=B),t.bindTexture(D,fe||te[D]),$.type=D,$.texture=fe)}function F(){const D=q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){we.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function ve(D){Be.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Be.copy(D))}function Ve(D,fe){let B=l.get(fe);B===void 0&&(B=new WeakMap,l.set(fe,B));let $=B.get(D);$===void 0&&($=t.getUniformBlockIndex(fe,D.name),B.set(D,$))}function Ie(D,fe){const $=l.get(fe).get(D);a.get(fe)!==$&&(t.uniformBlockBinding(fe,$,D.__bindingPointIndex),a.set(fe,$))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,q={},h={},f=new WeakMap,d=[],p=null,v=!1,x=null,m=null,c=null,g=null,_=null,S=null,R=null,A=new Oe(0,0,0),w=0,P=!1,Y=null,y=null,T=null,V=null,k=null,we.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:ae,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:Ge,setBlending:b,setMaterial:dn,setFlipSided:He,setCullFace:Ye,setLineWidth:Pe,setPolygonOffset:lt,setScissorTest:De,activeTexture:C,bindTexture:M,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:_e,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:qe,texStorage3D:ne,texSubImage2D:W,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:Le,viewport:ve,reset:rt}}function Pm(t,e,n,i){const r=Aw(i);switch(n){case lv:return t*e;case cv:return t*e;case hv:return t*e*2;case ed:return t*e/r.components*r.byteLength;case td:return t*e/r.components*r.byteLength;case fv:return t*e*2/r.components*r.byteLength;case nd:return t*e*2/r.components*r.byteLength;case uv:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case id:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:case bh:return Math.max(t,16)*Math.max(e,8)/4;case Ch:case Ph:return Math.max(t,8)*Math.max(e,8)/2;case Lh:case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case qh:case $h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dv:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zh:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Aw(t){switch(t){case wi:case sv:return{byteLength:1,components:1};case Go:case ov:case $o:return{byteLength:2,components:1};case Jf:case Qf:return{byteLength:2,components:4};case Dr:case Zf:case ti:return{byteLength:4,components:1};case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Cw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ce,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):Bl("canvas")}function x(C,M,F){let X=1;const Q=De(C);if((Q.width>F||Q.height>F)&&(X=F/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const W=Math.floor(X*Q.width),Se=Math.floor(X*Q.height);f===void 0&&(f=v(W,Se));const oe=M?v(W,Se):f;return oe.width=W,oe.height=Se,oe.getContext("2d").drawImage(C,0,0,W,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Se+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ln&&C.minFilter!==Gn}function c(C){t.generateMipmap(C)}function g(C,M,F,X,Q=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=M;if(M===t.RED&&(F===t.FLOAT&&(W=t.R32F),F===t.HALF_FLOAT&&(W=t.R16F),F===t.UNSIGNED_BYTE&&(W=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(W=t.R8UI),F===t.UNSIGNED_SHORT&&(W=t.R16UI),F===t.UNSIGNED_INT&&(W=t.R32UI),F===t.BYTE&&(W=t.R8I),F===t.SHORT&&(W=t.R16I),F===t.INT&&(W=t.R32I)),M===t.RG&&(F===t.FLOAT&&(W=t.RG32F),F===t.HALF_FLOAT&&(W=t.RG16F),F===t.UNSIGNED_BYTE&&(W=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(W=t.RG8UI),F===t.UNSIGNED_SHORT&&(W=t.RG16UI),F===t.UNSIGNED_INT&&(W=t.RG32UI),F===t.BYTE&&(W=t.RG8I),F===t.SHORT&&(W=t.RG16I),F===t.INT&&(W=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(W=t.RGB8UI),F===t.UNSIGNED_SHORT&&(W=t.RGB16UI),F===t.UNSIGNED_INT&&(W=t.RGB32UI),F===t.BYTE&&(W=t.RGB8I),F===t.SHORT&&(W=t.RGB16I),F===t.INT&&(W=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),F===t.UNSIGNED_INT&&(W=t.RGBA32UI),F===t.BYTE&&(W=t.RGBA8I),F===t.SHORT&&(W=t.RGBA16I),F===t.INT&&(W=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),M===t.RGBA){const Se=Q?Fl:Qe.getTransfer(X);F===t.FLOAT&&(W=t.RGBA32F),F===t.HALF_FLOAT&&(W=t.RGBA16F),F===t.UNSIGNED_BYTE&&(W=Se===ht?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function _(C,M){let F;return C?M===null||M===Dr||M===Os?F=t.DEPTH24_STENCIL8:M===ti?F=t.DEPTH32F_STENCIL8:M===Go&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dr||M===Os?F=t.DEPTH_COMPONENT24:M===ti?F=t.DEPTH_COMPONENT32F:M===Go&&(F=t.DEPTH_COMPONENT16),F}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),w(M),M.isVideoTexture&&h.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),Y(M)}function w(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,X=d.get(F);if(X){const Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(X).length===0&&d.delete(F)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const F=C.source,X=d.get(F);delete X[M.__cacheKey],o.memory.textures--}function Y(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)t.deleteFramebuffer(M.__webglFramebuffer[X]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let X=0,Q=F.length;X<Q;X++){const W=i.get(F[X]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(C)}let y=0;function T(){y=0}function V(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){const F=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(F,C,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function J(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Be(F,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function H(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Be(F,C,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function Z(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){G(F,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const L={[wh]:t.REPEAT,[Er]:t.CLAMP_TO_EDGE,[Ah]:t.MIRRORED_REPEAT},q={[ln]:t.NEAREST,[fS]:t.NEAREST_MIPMAP_NEAREST,[xa]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[ku]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},K={[gS]:t.NEVER,[MS]:t.ALWAYS,[_S]:t.LESS,[mv]:t.LEQUAL,[vS]:t.EQUAL,[SS]:t.GEQUAL,[xS]:t.GREATER,[yS]:t.NOTEQUAL};function re(C,M){if(M.type===ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===ku||M.magFilter===xa||M.magFilter===Tr||M.minFilter===Gn||M.minFilter===ku||M.minFilter===xa||M.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==xa&&M.minFilter!==Tr||M.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function we(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const X=M.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const W=k(M);if(W!==C.__cacheKey){Q[W]===void 0&&(Q[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[W].usedTimes++;const Se=Q[C.__cacheKey];Se!==void 0&&(Q[C.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),C.__cacheKey=W,C.__webglTexture=Q[W].texture}return F}function Be(C,M,F){let X=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=t.TEXTURE_3D);const Q=we(C,M),W=M.source;n.bindTexture(X,C.__webglTexture,t.TEXTURE0+F);const Se=i.get(W);if(W.version!==Se.__version||Q===!0){n.activeTexture(t.TEXTURE0+F);const oe=Qe.getPrimaries(Qe.workingColorSpace),ge=M.colorSpace===Hi?null:Qe.getPrimaries(M.colorSpace),qe=M.colorSpace===Hi||oe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ne=x(M.image,!1,r.maxTextureSize);ne=lt(M,ne);const _e=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Le=g(M.internalFormat,_e,be,M.colorSpace,M.isVideoTexture);re(X,M);let ve;const Ve=M.mipmaps,Ie=M.isVideoTexture!==!0,rt=Se.__version===void 0||Q===!0,D=W.dataReady,fe=S(M,ne);if(M.isDepthTexture)Le=_(M.format===zs,M.type),rt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Le,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Le,ne.width,ne.height,0,_e,be,null));else if(M.isDataTexture)if(Ve.length>0){Ie&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,Ve[0].width,Ve[0].height);for(let B=0,$=Ve.length;B<$;B++)ve=Ve[B],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,B,Le,ve.width,ve.height,0,_e,be,ve.data);M.generateMipmaps=!1}else Ie?(rt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,ne.width,ne.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,_e,be,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ne.width,ne.height,0,_e,be,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,Ve[0].width,Ve[0].height,ne.depth);for(let B=0,$=Ve.length;B<$;B++)if(ve=Ve[B],M.format!==Xn)if(_e!==null)if(Ie){if(D)if(M.layerUpdates.size>0){const le=Pm(ve.width,ve.height,M.format,M.type);for(const de of M.layerUpdates){const Xe=ve.data.subarray(de*le/ve.data.BYTES_PER_ELEMENT,(de+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,de,ve.width,ve.height,1,_e,Xe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,ne.depth,_e,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Le,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,ne.depth,_e,be,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,Le,ve.width,ve.height,ne.depth,0,_e,be,ve.data)}else{Ie&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,Ve[0].width,Ve[0].height);for(let B=0,$=Ve.length;B<$;B++)ve=Ve[B],M.format!==Xn?_e!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,B,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,B,Le,ve.width,ve.height,0,_e,be,ve.data)}else if(M.isDataArrayTexture)if(Ie){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,ne.width,ne.height,ne.depth),D)if(M.layerUpdates.size>0){const B=Pm(ne.width,ne.height,M.format,M.type);for(const $ of M.layerUpdates){const le=ne.data.subarray($*B/ne.data.BYTES_PER_ELEMENT,($+1)*B/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,_e,be,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,_e,be,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,_e,be,ne.data);else if(M.isData3DTexture)Ie?(rt&&n.texStorage3D(t.TEXTURE_3D,fe,Le,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,_e,be,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,_e,be,ne.data);else if(M.isFramebufferTexture){if(rt)if(Ie)n.texStorage2D(t.TEXTURE_2D,fe,Le,ne.width,ne.height);else{let B=ne.width,$=ne.height;for(let le=0;le<fe;le++)n.texImage2D(t.TEXTURE_2D,le,Le,B,$,0,_e,be,null),B>>=1,$>>=1}}else if(Ve.length>0){if(Ie&&rt){const B=De(Ve[0]);n.texStorage2D(t.TEXTURE_2D,fe,Le,B.width,B.height)}for(let B=0,$=Ve.length;B<$;B++)ve=Ve[B],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,_e,be,ve):n.texImage2D(t.TEXTURE_2D,B,Le,_e,be,ve);M.generateMipmaps=!1}else if(Ie){if(rt){const B=De(ne);n.texStorage2D(t.TEXTURE_2D,fe,Le,B.width,B.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,be,ne)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,be,ne);m(M)&&c(X),Se.__version=W.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,F){if(M.image.length!==6)return;const X=we(C,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const W=i.get(Q);if(Q.version!==W.__version||X===!0){n.activeTexture(t.TEXTURE0+F);const Se=Qe.getPrimaries(Qe.workingColorSpace),oe=M.colorSpace===Hi?null:Qe.getPrimaries(M.colorSpace),ge=M.colorSpace===Hi||Se===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let $=0;$<6;$++)!qe&&!ne?_e[$]=x(M.image[$],!0,r.maxCubemapSize):_e[$]=ne?M.image[$].image:M.image[$],_e[$]=lt(M,_e[$]);const be=_e[0],Le=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Ve=g(M.internalFormat,Le,ve,M.colorSpace),Ie=M.isVideoTexture!==!0,rt=W.__version===void 0||X===!0,D=Q.dataReady;let fe=S(M,be);re(t.TEXTURE_CUBE_MAP,M);let B;if(qe){Ie&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ve,be.width,be.height);for(let $=0;$<6;$++){B=_e[$].mipmaps;for(let le=0;le<B.length;le++){const de=B[le];M.format!==Xn?Le!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,de.width,de.height,Le,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Ve,de.width,de.height,0,Le,ve,de.data)}}}else{if(B=M.mipmaps,Ie&&rt){B.length>0&&fe++;const $=De(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e[$].width,_e[$].height,Le,ve,_e[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,_e[$].width,_e[$].height,0,Le,ve,_e[$].data);for(let le=0;le<B.length;le++){const Xe=B[le].image[$].image;Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Xe.width,Xe.height,Le,ve,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Ve,Xe.width,Xe.height,0,Le,ve,Xe.data)}}else{Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,ve,_e[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,Le,ve,_e[$]);for(let le=0;le<B.length;le++){const de=B[le];Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Le,ve,de.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Ve,Le,ve,de.image[$])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),W.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function te(C,M,F,X,Q,W){const Se=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),ge=g(F.internalFormat,Se,oe,F.colorSpace);if(!i.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>W),_e=Math.max(1,M.height>>W);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,W,ge,ne,_e,M.depth,0,Se,oe,null):n.texImage2D(Q,W,ge,ne,_e,0,Se,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,i.get(F).__webglTexture,0,He(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,i.get(F).__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(C,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,W=_(M.stencilBuffer,Q),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=He(M);Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,W,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,W,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,W,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,C)}else{const X=M.textures;for(let Q=0;Q<X.length;Q++){const W=X[Q],Se=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),ge=g(W.internalFormat,Se,oe,W.colorSpace),qe=He(M);F&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,ge,M.width,M.height):Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const X=i.get(M.depthTexture).__webglTexture,Q=He(M);if(M.depthTexture.format===ws)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(M.depthTexture.format===zs)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=t.createRenderbuffer(),he(M.__webglDepthbuffer[X],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,W)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(C,M,F){const X=i.get(C);M!==void 0&&te(X.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ne(C)}function Ge(C){const M=C.texture,F=i.get(C),X=i.get(M);C.addEventListener("dispose",A);const Q=C.textures,W=C.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=M.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)F.__webglFramebuffer[oe][ge]=t.createFramebuffer()}else F.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)F.__webglFramebuffer[oe]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Se)for(let oe=0,ge=Q.length;oe<ge;oe++){const qe=i.get(Q[oe]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ye(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const ge=Q[oe];F.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const qe=s.convert(ge.format,ge.colorSpace),ne=s.convert(ge.type),_e=g(ge.internalFormat,qe,ne,ge.colorSpace,C.isXRRenderTarget===!0),be=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),he(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),re(t.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)te(F.__webglFramebuffer[oe][ge],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge);else te(F.__webglFramebuffer[oe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let oe=0,ge=Q.length;oe<ge;oe++){const qe=Q[oe],ne=i.get(qe);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),re(t.TEXTURE_2D,qe),te(F.__webglFramebuffer,C,qe,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(qe)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,X.__webglTexture),re(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)te(F.__webglFramebuffer[ge],C,M,t.COLOR_ATTACHMENT0,oe,ge);else te(F.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,oe,0);m(M)&&c(oe),n.unbindTexture()}C.depthBuffer&&Ne(C)}function nt(C){const M=C.textures;for(let F=0,X=M.length;F<X;F++){const Q=M[F];if(m(Q)){const W=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(Q).__webglTexture;n.bindTexture(W,Se),c(W),n.unbindTexture()}}}const We=[],b=[];function dn(C){if(C.samples>0){if(Ye(C)===!1){const M=C.textures,F=C.width,X=C.height;let Q=t.COLOR_BUFFER_BIT;const W=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(C),oe=M.length>1;if(oe)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const qe=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,F,X,0,0,F,X,Q,t.NEAREST),l===!0&&(We.length=0,b.length=0,We.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push(W),b.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const qe=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(C){return Math.min(r.maxSamples,C.samples)}function Ye(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function lt(C,M){const F=C.colorSpace,X=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==ar&&F!==Hi&&(Qe.getTransfer(F)===ht?(X!==Xn||Q!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=T,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=Ce,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ye}function Rw(t,e){function n(i,r=Hi){let s;const o=Qe.getTransfer(r);if(i===wi)return t.UNSIGNED_BYTE;if(i===Jf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===av)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sv)return t.BYTE;if(i===ov)return t.SHORT;if(i===Go)return t.UNSIGNED_SHORT;if(i===Zf)return t.INT;if(i===Dr)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===$o)return t.HALF_FLOAT;if(i===lv)return t.ALPHA;if(i===uv)return t.RGB;if(i===Xn)return t.RGBA;if(i===cv)return t.LUMINANCE;if(i===hv)return t.LUMINANCE_ALPHA;if(i===ws)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===ed)return t.RED;if(i===td)return t.RED_INTEGER;if(i===fv)return t.RG;if(i===nd)return t.RG_INTEGER;if(i===id)return t.RGBA_INTEGER;if(i===rl||i===sl||i===ol||i===al)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ch||i===Rh||i===Ph||i===bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lh||i===Dh||i===Nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lh||i===Dh)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Uh||i===Fh||i===Oh||i===zh||i===kh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ih)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===qh||i===$h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dv||i===Kh||i===Zh||i===Jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Pw extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:Lw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new su(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iw extends zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,v=null;const x=new Nw,m=n.getContextAttributes();let c=null,g=null;const _=[],S=[],R=new ce;let A=null;const w=new bn;w.layers.enable(1),w.viewport=new xt;const P=new bn;P.layers.enable(2),P.viewport=new xt;const Y=[w,P],y=new Pw;y.layers.enable(1),y.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=_[G];return te===void 0&&(te=new pc,_[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=_[G];return te===void 0&&(te=new pc,_[G]=te),te.getGripSpace()},this.getHand=function(G){let te=_[G];return te===void 0&&(te=new pc,_[G]=te),te.getHandSpace()};function k(G){const te=S.indexOf(G.inputSource);if(te===-1)return;const he=_[te];he!==void 0&&(he.update(G.inputSource,G.frame,u||o),he.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let G=0;G<_.length;G++){const te=S[G];te!==null&&(S[G]=null,_[G].disconnect(te))}T=null,V=null,x.reset(),e.setRenderTarget(c),p=null,d=null,f=null,r=null,g=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Nr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,he=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?zs:ws,he=m.stencil?Os:Dr);const Ne={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Nr(d.textureWidth,d.textureHeight,{format:Xn,type:wi,depthTexture:new Pv(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(G){for(let te=0;te<G.removed.length;te++){const he=G.removed[te],ae=S.indexOf(he);ae>=0&&(S[ae]=null,_[ae].disconnect(he))}for(let te=0;te<G.added.length;te++){const he=G.added[te];let ae=S.indexOf(he);if(ae===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=S.length){S.push(he),ae=Ce;break}else if(S[Ce]===null){S[Ce]=he,ae=Ce;break}if(ae===-1)break}const Ne=_[ae];Ne&&Ne.connect(he)}}const H=new I,Z=new I;function L(G,te,he){H.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(he.matrixWorld);const ae=H.distanceTo(Z),Ne=te.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Ge=Ne[14]/(Ne[10]-1),nt=Ne[14]/(Ne[10]+1),We=(Ne[9]+1)/Ne[5],b=(Ne[9]-1)/Ne[5],dn=(Ne[8]-1)/Ne[0],He=(Ce[8]+1)/Ce[0],Ye=Ge*dn,Pe=Ge*He,lt=ae/(-dn+He),De=lt*-dn;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ne[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=Ge+lt,M=nt+lt,F=Ye-De,X=Pe+(ae-De),Q=We*nt/M*C,W=b*nt/M*C;G.projectionMatrix.makePerspective(F,X,Q,W,C,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,he=G.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(he=x.depthFar)),y.near=P.near=w.near=te,y.far=P.far=w.far=he,(T!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,V=y.far);const ae=G.parent,Ne=y.cameras;q(y,ae);for(let Ce=0;Ce<Ne.length;Ce++)q(Ne[Ce],ae);Ne.length===2?L(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),K(G,y,ae)};function K(G,te,he){he===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let re=null;function we(G,te){if(h=te.getViewerPose(u||o),v=te,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ae=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ce=0;Ce<he.length;Ce++){const Ge=he[Ce];let nt=null;if(p!==null)nt=p.getViewport(Ge);else{const b=f.getViewSubImage(d,Ge);nt=b.viewport,Ce===0&&(e.setRenderTargetTextures(g,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(g))}let We=Y[Ce];We===void 0&&(We=new bn,We.layers.enable(Ce),We.viewport=new xt,Y[Ce]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),Ce===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(We)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ce=f.getDepthInformation(he[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let he=0;he<_.length;he++){const ae=S[he],Ne=_[he];ae!==null&&Ne!==void 0&&Ne.update(ae,te,u||o)}re&&re(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Be=new Cv;Be.setAnimationLoop(we),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}}const pr=new si,Uw=new at;function Fw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Tv(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),f(m,c)):c.isMeshPhongMaterial?(s(m,c),h(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),v(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===fn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===fn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,pr.copy(S),pr.x*=-1,pr.y*=-1,pr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(Uw.makeRotationFromEuler(pr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function h(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===fn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ow(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function u(g,_){let S=r[g.id];S===void 0&&(v(g),S=h(g),r[g.id]=S,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function h(g){const _=f();g.__bindingPointIndex=_;const S=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let Y=0,y=P.length;Y<y;Y++){const T=P[Y];if(p(T,A,Y,R)===!0){const V=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let j=0;for(let J=0;J<k.length;J++){const H=k[J],Z=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+j,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,R){const A=g.value,w=_+"_"+S;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(g){const _=g.uniforms;let S=0;const R=16;for(let w=0,P=_.length;w<P;w++){const Y=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,T=Y.length;y<T;y++){const V=Y[y],k=Array.isArray(V.value)?V.value:[V.value];for(let j=0,J=k.length;j<J;j++){const H=k[j],Z=x(H),L=S%R,q=L%Z.boundary,K=L+q;S+=q,K!==0&&R-K<Z.storage&&(S+=R-K),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=Z.storage}}}const A=S%R;return A>0&&(S+=R-A),g.__size=S,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class zw{constructor(e={}){const{canvas:n=wS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Qi,this.toneMappingExposure=1;const _=this;let S=!1,R=0,A=0,w=null,P=-1,Y=null;const y=new xt,T=new xt;let V=null;const k=new Oe(0);let j=0,J=n.width,H=n.height,Z=1,L=null,q=null;const K=new xt(0,0,J,H),re=new xt(0,0,J,H);let we=!1;const Be=new od;let G=!1,te=!1;const he=new at,ae=new at,Ne=new I,Ce=new xt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function We(){return w===null?Z:1}let b=i;function dn(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",de,!1),b===null){const N="webgl2";if(b=dn(N,E),b===null)throw dn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,Ye,Pe,lt,De,C,M,F,X,Q,W,Se,oe,ge,qe,ne,_e,be,Le,ve,Ve,Ie,rt,D;function fe(){He=new G1(b),He.init(),Ie=new Rw(b,He),Ye=new O1(b,He,e,Ie),Pe=new ww(b),Ye.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),lt=new j1(b),De=new cw,C=new Cw(b,He,Pe,De,Ye,Ie,lt),M=new k1(_),F=new V1(_),X=new QS(b),rt=new U1(b,X),Q=new W1(b,X,lt,rt),W=new q1(b,Q,X,lt),Le=new Y1(b,Ye,C),ne=new z1(De),Se=new uw(_,M,F,He,Ye,rt,ne),oe=new Fw(_,De),ge=new fw,qe=new vw(He),be=new I1(_,M,F,Pe,W,d,l),_e=new Ew(_,W,Ye),D=new Ow(b,lt,Ye,Pe),ve=new F1(b,He,lt),Ve=new X1(b,He,lt),lt.programs=Se.programs,_.capabilities=Ye,_.extensions=He,_.properties=De,_.renderLists=ge,_.shadowMap=_e,_.state=Pe,_.info=lt}fe();const B=new Iw(_,b);this.xr=B,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(J,H,!1))},this.getSize=function(E){return E.set(J,H)},this.setSize=function(E,N,O=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,H=N,n.width=Math.floor(E*Z),n.height=Math.floor(N*Z),O===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(J*Z,H*Z).floor()},this.setDrawingBufferSize=function(E,N,O){J=E,H=N,Z=O,n.width=Math.floor(E*O),n.height=Math.floor(N*O),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,N,O,z){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,N,O,z),Pe.viewport(y.copy(K).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,N,O,z){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,N,O,z),Pe.scissor(T.copy(re).multiplyScalar(Z).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){Pe.setScissorTest(we=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(E=!0,N=!0,O=!0){let z=0;if(E){let U=!1;if(w!==null){const ie=w.texture.format;U=ie===id||ie===nd||ie===td}if(U){const ie=w.texture.type,ue=ie===wi||ie===Dr||ie===Go||ie===Os||ie===Jf||ie===Qf,xe=be.getClearColor(),ye=be.getClearAlpha(),Ae=xe.r,Re=xe.g,Me=xe.b;ue?(p[0]=Ae,p[1]=Re,p[2]=Me,p[3]=ye,b.clearBufferuiv(b.COLOR,0,p)):(v[0]=Ae,v[1]=Re,v[2]=Me,v[3]=ye,b.clearBufferiv(b.COLOR,0,v))}else z|=b.COLOR_BUFFER_BIT}N&&(z|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),qe.dispose(),De.dispose(),M.dispose(),F.dispose(),W.dispose(),rt.dispose(),D.dispose(),Se.dispose(),B.dispose(),B.removeEventListener("sessionstart",pd),B.removeEventListener("sessionend",md),lr.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=lt.autoReset,N=_e.enabled,O=_e.autoUpdate,z=_e.needsUpdate,U=_e.type;fe(),lt.autoReset=E,_e.enabled=N,_e.autoUpdate=O,_e.needsUpdate=z,_e.type=U}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const N=E.target;N.removeEventListener("dispose",Xe),Mt(N)}function Mt(E){en(E),De.remove(E)}function en(E){const N=De.get(E).programs;N!==void 0&&(N.forEach(function(O){Se.releaseProgram(O)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,O,z,U,ie){N===null&&(N=Ge);const ue=U.isMesh&&U.matrixWorld.determinant()<0,xe=Bv(E,N,O,z,U);Pe.setMaterial(z,ue);let ye=O.index,Ae=1;if(z.wireframe===!0){if(ye=Q.getWireframeAttribute(O),ye===void 0)return;Ae=2}const Re=O.drawRange,Me=O.attributes.position;let et=Re.start*Ae,ut=(Re.start+Re.count)*Ae;ie!==null&&(et=Math.max(et,ie.start*Ae),ut=Math.min(ut,(ie.start+ie.count)*Ae)),ye!==null?(et=Math.max(et,0),ut=Math.min(ut,ye.count)):Me!=null&&(et=Math.max(et,0),ut=Math.min(ut,Me.count));const _t=ut-et;if(_t<0||_t===1/0)return;rt.setup(U,z,xe,O,ye);let pn,Ze=ve;if(ye!==null&&(pn=X.get(ye),Ze=Ve,Ze.setIndex(pn)),U.isMesh)z.wireframe===!0?(Pe.setLineWidth(z.wireframeLinewidth*We()),Ze.setMode(b.LINES)):Ze.setMode(b.TRIANGLES);else if(U.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),Pe.setLineWidth(Ee*We()),U.isLineSegments?Ze.setMode(b.LINES):U.isLineLoop?Ze.setMode(b.LINE_LOOP):Ze.setMode(b.LINE_STRIP)}else U.isPoints?Ze.setMode(b.POINTS):U.isSprite&&Ze.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Ft=U._multiDrawCounts,Je=U._multiDrawCount,Un=ye?X.get(ye).bytesPerElement:1,Br=De.get(z).currentProgram.getUniforms();for(let mn=0;mn<Je;mn++)Br.setValue(b,"_gl_DrawID",mn),Ze.render(Ee[mn]/Un,Ft[mn])}else if(U.isInstancedMesh)Ze.renderInstances(et,_t,U.count);else if(O.isInstancedBufferGeometry){const Ee=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ft=Math.min(O.instanceCount,Ee);Ze.renderInstances(et,_t,Ft)}else Ze.render(et,_t)};function Ke(E,N,O){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,ea(E,N,O),E.side=nr,E.needsUpdate=!0,ea(E,N,O),E.side=ei):ea(E,N,O)}this.compile=function(E,N,O=null){O===null&&(O=E),m=qe.get(O),m.init(N),g.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const xe=ie[ue];Ke(xe,O,U),z.add(xe)}else Ke(ie,O,U),z.add(ie)}),g.pop(),m=null,z},this.compileAsync=function(E,N,O=null){const z=this.compile(E,N,O);return new Promise(U=>{function ie(){if(z.forEach(function(ue){De.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){U(E);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let tn=null;function li(E){tn&&tn(E)}function pd(){lr.stop()}function md(){lr.start()}const lr=new Cv;lr.setAnimationLoop(li),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(E){tn=E,B.setAnimationLoop(E),E===null?lr.stop():lr.start()},B.addEventListener("sessionstart",pd),B.addEventListener("sessionend",md),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(N),N=B.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,w),m=qe.get(E,g.length),m.init(N),g.push(m),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Be.setFromProjectionMatrix(ae),te=this.localClippingEnabled,G=ne.init(this.clippingPlanes,te),x=ge.get(E,c.length),x.init(),c.push(x),B.enabled===!0&&B.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&au(ie,N,-1/0,_.sortObjects)}au(E,N,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(L,q),nt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,nt&&be.addToRenderList(x,E),this.info.render.frame++,G===!0&&ne.beginShadows();const O=m.state.shadowsArray;_e.render(O,E,N),G===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,U=x.transmissive;if(m.setupLights(),N.isArrayCamera){const ie=N.cameras;if(U.length>0)for(let ue=0,xe=ie.length;ue<xe;ue++){const ye=ie[ue];_d(z,U,E,ye)}nt&&be.render(E);for(let ue=0,xe=ie.length;ue<xe;ue++){const ye=ie[ue];gd(x,E,ye,ye.viewport)}}else U.length>0&&_d(z,U,E,N),nt&&be.render(E),gd(x,E,N);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,N),rt.resetDefaultState(),P=-1,Y=null,g.pop(),g.length>0?(m=g[g.length-1],G===!0&&ne.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function au(E,N,O,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){z&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const ue=W.update(E),xe=E.material;xe.visible&&x.push(E,ue,xe,O,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const ue=W.update(E),xe=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ce.copy(ue.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(xe)){const ye=ue.groups;for(let Ae=0,Re=ye.length;Ae<Re;Ae++){const Me=ye[Ae],et=xe[Me.materialIndex];et&&et.visible&&x.push(E,ue,et,O,Ce.z,Me)}}else xe.visible&&x.push(E,ue,xe,O,Ce.z,null)}}const ie=E.children;for(let ue=0,xe=ie.length;ue<xe;ue++)au(ie[ue],N,O,z)}function gd(E,N,O,z){const U=E.opaque,ie=E.transmissive,ue=E.transparent;m.setupLightsView(O),G===!0&&ne.setGlobalState(_.clippingPlanes,O),z&&Pe.viewport(y.copy(z)),U.length>0&&Qo(U,N,O),ie.length>0&&Qo(ie,N,O),ue.length>0&&Qo(ue,N,O),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function _d(E,N,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Nr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?$o:wi,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=m.state.transmissionRenderTarget[z.id],ue=z.viewport||y;ie.setSize(ue.z,ue.w);const xe=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(k),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),nt&&be.render(O);const ye=_.toneMapping;_.toneMapping=Qi;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),G===!0&&ne.setGlobalState(_.clippingPlanes,z),Qo(E,O,z),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,et=N.length;Me<et;Me++){const ut=N[Me],_t=ut.object,pn=ut.geometry,Ze=ut.material,Ee=ut.group;if(Ze.side===ei&&_t.layers.test(z.layers)){const Ft=Ze.side;Ze.side=fn,Ze.needsUpdate=!0,vd(_t,O,z,pn,Ze,Ee),Ze.side=Ft,Ze.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}_.setRenderTarget(xe),_.setClearColor(k,j),Ae!==void 0&&(z.viewport=Ae),_.toneMapping=ye}function Qo(E,N,O){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ie=E.length;U<ie;U++){const ue=E[U],xe=ue.object,ye=ue.geometry,Ae=z===null?ue.material:z,Re=ue.group;xe.layers.test(O.layers)&&vd(xe,N,O,ye,Ae,Re)}}function vd(E,N,O,z,U,ie){E.onBeforeRender(_,N,O,z,U,ie),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,N,O,z,E,ie),U.transparent===!0&&U.side===ei&&U.forceSinglePass===!1?(U.side=fn,U.needsUpdate=!0,_.renderBufferDirect(O,N,z,U,E,ie),U.side=nr,U.needsUpdate=!0,_.renderBufferDirect(O,N,z,U,E,ie),U.side=ei):_.renderBufferDirect(O,N,z,U,E,ie),E.onAfterRender(_,N,O,z,U,ie)}function ea(E,N,O){N.isScene!==!0&&(N=Ge);const z=De.get(E),U=m.state.lights,ie=m.state.shadowsArray,ue=U.state.version,xe=Se.getParameters(E,U.state,ie,N,O),ye=Se.getProgramCacheKey(xe);let Ae=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Xe),Ae=new Map,z.programs=Ae);let Re=Ae.get(ye);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===ue)return yd(E,xe),Re}else xe.uniforms=Se.getUniforms(E),E.onBeforeCompile(xe,_),Re=Se.acquireProgram(xe,ye),Ae.set(ye,Re),z.uniforms=xe.uniforms;const Me=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ne.uniform),yd(E,xe),z.needsLights=Vv(E),z.lightsStateVersion=ue,z.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function xd(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=hl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function yd(E,N){const O=De.get(E);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.batchingColor=N.batchingColor,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function Bv(E,N,O,z,U){N.isScene!==!0&&(N=Ge),C.resetTextureUnits();const ie=N.fog,ue=z.isMeshStandardMaterial?N.environment:null,xe=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ar,ye=(z.isMeshStandardMaterial?F:M).get(z.envMap||ue),Ae=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!O.morphAttributes.position,et=!!O.morphAttributes.normal,ut=!!O.morphAttributes.color;let _t=Qi;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=_.toneMapping);const pn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ze=pn!==void 0?pn.length:0,Ee=De.get(z),Ft=m.state.lights;if(G===!0&&(te===!0||E!==Y)){const An=E===Y&&z.id===P;ne.setState(z,E,An)}let Je=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ft.state.version||Ee.outputColorSpace!==xe||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==ye||z.fog===!0&&Ee.fog!==ie||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Me||Ee.morphNormals!==et||Ee.morphColors!==ut||Ee.toneMapping!==_t||Ee.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ee.__version=z.version);let Un=Ee.currentProgram;Je===!0&&(Un=ea(z,N,U));let Br=!1,mn=!1,lu=!1;const yt=Un.getUniforms(),Ci=Ee.uniforms;if(Pe.useProgram(Un.program)&&(Br=!0,mn=!0,lu=!0),z.id!==P&&(P=z.id,mn=!0),Br||Y!==E){Ye.reverseDepthBuffer?(he.copy(E.projectionMatrix),CS(he),RS(he),yt.setValue(b,"projectionMatrix",he)):yt.setValue(b,"projectionMatrix",E.projectionMatrix),yt.setValue(b,"viewMatrix",E.matrixWorldInverse);const An=yt.map.cameraPosition;An!==void 0&&An.setValue(b,Ne.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&yt.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,mn=!0,lu=!0)}if(U.isSkinnedMesh){yt.setOptional(b,U,"bindMatrix"),yt.setOptional(b,U,"bindMatrixInverse");const An=U.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),yt.setValue(b,"boneTexture",An.boneTexture,C))}U.isBatchedMesh&&(yt.setOptional(b,U,"batchingTexture"),yt.setValue(b,"batchingTexture",U._matricesTexture,C),yt.setOptional(b,U,"batchingIdTexture"),yt.setValue(b,"batchingIdTexture",U._indirectTexture,C),yt.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&yt.setValue(b,"batchingColorTexture",U._colorsTexture,C));const uu=O.morphAttributes;if((uu.position!==void 0||uu.normal!==void 0||uu.color!==void 0)&&Le.update(U,O,Un),(mn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,yt.setValue(b,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ci.envMap.value=ye,Ci.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Ci.envMapIntensity.value=N.environmentIntensity),mn&&(yt.setValue(b,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&Hv(Ci,lu),ie&&z.fog===!0&&oe.refreshFogUniforms(Ci,ie),oe.refreshMaterialUniforms(Ci,z,Z,H,m.state.transmissionRenderTarget[E.id]),hl.upload(b,xd(Ee),Ci,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(hl.upload(b,xd(Ee),Ci,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(b,"center",U.center),yt.setValue(b,"modelViewMatrix",U.modelViewMatrix),yt.setValue(b,"normalMatrix",U.normalMatrix),yt.setValue(b,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const An=z.uniformsGroups;for(let cu=0,Gv=An.length;cu<Gv;cu++){const Sd=An[cu];D.update(Sd,Un),D.bind(Sd,Un)}}return Un}function Hv(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Vv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,O){De.get(E.texture).__webglTexture=N,De.get(E.depthTexture).__webglTexture=O;const z=De.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const O=De.get(E);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,O=0){w=E,R=N,A=O;let z=!0,U=null,ie=!1,ue=!1;if(E){const ye=De.get(E);if(ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(ye.__hasExternalTextures)C.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&De.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Re=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?U=Re[N][O]:U=Re[N],ie=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?U=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[O]:U=Re,y.copy(E.viewport),T.copy(E.scissor),V=E.scissorTest}else y.copy(K).multiplyScalar(Z).floor(),T.copy(re).multiplyScalar(Z).floor(),V=we;if(Pe.bindFramebuffer(b.FRAMEBUFFER,U)&&z&&Pe.drawBuffers(E,U),Pe.viewport(y),Pe.scissor(T),Pe.setScissorTest(V),ie){const ye=De.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,O)}else if(ue){const ye=De.get(E.texture),Ae=N||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Ae)}P=-1},this.readRenderTargetPixels=function(E,N,O,z,U,ie,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Pe.bindFramebuffer(b.FRAMEBUFFER,xe);try{const ye=E.texture,Ae=ye.format,Re=ye.type;if(!Ye.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&O>=0&&O<=E.height-U&&b.readPixels(N,O,z,U,Ie.convert(Ae),Ie.convert(Re),ie)}finally{const ye=w!==null?De.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(b.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,N,O,z,U,ie,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){const ye=E.texture,Ae=ye.format,Re=ye.type;if(!Ye.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-z&&O>=0&&O<=E.height-U){Pe.bindFramebuffer(b.FRAMEBUFFER,xe);const Me=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Me),b.bufferData(b.PIXEL_PACK_BUFFER,ie.byteLength,b.STREAM_READ),b.readPixels(N,O,z,U,Ie.convert(Ae),Ie.convert(Re),0);const et=w!==null?De.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(b.FRAMEBUFFER,et);const ut=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await AS(b,ut,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Me),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ie),b.deleteBuffer(Me),b.deleteSync(ut),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,O=0){E.isTexture!==!0&&(cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-O),U=Math.floor(E.image.width*z),ie=Math.floor(E.image.height*z),ue=N!==null?N.x:0,xe=N!==null?N.y:0;C.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,ue,xe,U,ie),Pe.unbindTexture()},this.copyTextureToTexture=function(E,N,O=null,z=null,U=0){E.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,O=null);let ie,ue,xe,ye,Ae,Re;O!==null?(ie=O.max.x-O.min.x,ue=O.max.y-O.min.y,xe=O.min.x,ye=O.min.y):(ie=E.image.width,ue=E.image.height,xe=0,ye=0),z!==null?(Ae=z.x,Re=z.y):(Ae=0,Re=0);const Me=Ie.convert(N.format),et=Ie.convert(N.type);C.setTexture2D(N,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const ut=b.getParameter(b.UNPACK_ROW_LENGTH),_t=b.getParameter(b.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ze=b.getParameter(b.UNPACK_SKIP_ROWS),Ee=b.getParameter(b.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[U]:E.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ft.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ft.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,ye),E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,U,Ae,Re,ie,ue,Me,et,Ft.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,U,Ae,Re,Ft.width,Ft.height,Me,Ft.data):b.texSubImage2D(b.TEXTURE_2D,U,Ae,Re,ie,ue,Me,et,Ft),b.pixelStorei(b.UNPACK_ROW_LENGTH,ut),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,_t),b.pixelStorei(b.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ze),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ee),U===0&&N.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,O=null,z=null,U=0){E.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0);let ie,ue,xe,ye,Ae,Re,Me,et,ut;const _t=E.isCompressedTexture?E.mipmaps[U]:E.image;O!==null?(ie=O.max.x-O.min.x,ue=O.max.y-O.min.y,xe=O.max.z-O.min.z,ye=O.min.x,Ae=O.min.y,Re=O.min.z):(ie=_t.width,ue=_t.height,xe=_t.depth,ye=0,Ae=0,Re=0),z!==null?(Me=z.x,et=z.y,ut=z.z):(Me=0,et=0,ut=0);const pn=Ie.convert(N.format),Ze=Ie.convert(N.type);let Ee;if(N.isData3DTexture)C.setTexture3D(N,0),Ee=b.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Ee=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const Ft=b.getParameter(b.UNPACK_ROW_LENGTH),Je=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Un=b.getParameter(b.UNPACK_SKIP_PIXELS),Br=b.getParameter(b.UNPACK_SKIP_ROWS),mn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,_t.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,_t.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ye),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Re),E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Ee,U,Me,et,ut,ie,ue,xe,pn,Ze,_t.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(Ee,U,Me,et,ut,ie,ue,xe,pn,_t.data):b.texSubImage3D(Ee,U,Me,et,ut,ie,ue,xe,pn,Ze,_t),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ft),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Je),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Un),b.pixelStorei(b.UNPACK_SKIP_ROWS,Br),b.pixelStorei(b.UNPACK_SKIP_IMAGES,mn),U===0&&N.generateMipmaps&&b.generateMipmap(Ee),Pe.unbindTexture()},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Pe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===ru?"display-p3":"srgb"}}class ld{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=n,this.far=i}clone(){return new ld(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kw extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Bw extends Zt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=ln,h=ln,f,d){super(null,o,a,l,u,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bm extends jt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new at,Lm=new at,Ha=[],Dm=new kr,Hw=new at,ro=new Sn,so=new Zo;class mc extends Sn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new bm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Hw)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ns),Dm.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Dm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ns),so.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(so)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ns),Lm.multiplyMatrices(i,ns),ro.matrixWorld=Lm,ro.raycast(e,Ha);for(let o=0,a=Ha.length;o<a;o++){const l=Ha[o];l.instanceId=s,l.object=this,n.push(l)}Ha.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new bm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bw(new Float32Array(r*this.count),r,this.count,ed,ti));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ce:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new at;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new I)}s[0]=new I,o[0]=new I;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=u&&(u=h,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Nt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ud extends ai{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ce){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*h-p*f+this.aX,u=d*f+p*h+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vw extends ud{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,f){let d=(o-s)/u-(a-s)/(u+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Va=new I,gc=new cd,_c=new cd,vc=new cd;class Gw extends ai{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=r[(a-1)%s]:(Va.subVectors(r[0],r[1]).add(r[0]),u=Va);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Va.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Va),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),gc.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,v,x,m),_c.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,v,x,m),vc.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),_c.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),vc.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return i.set(gc.calc(l),_c.calc(l),vc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Ww(t,e){const n=1-t;return n*n*e}function Xw(t,e){return 2*(1-t)*t*e}function jw(t,e){return t*t*e}function Eo(t,e,n,i){return Ww(t,e)+Xw(t,n)+jw(t,i)}function Yw(t,e){const n=1-t;return n*n*n*e}function qw(t,e){const n=1-t;return 3*n*n*t*e}function $w(t,e){return 3*(1-t)*t*t*e}function Kw(t,e){return t*t*t*e}function To(t,e,n,i,r){return Yw(t,e)+qw(t,n)+$w(t,i)+Kw(t,r)}class Iv extends ai{constructor(e=new ce,n=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zw extends ai{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y),To(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uv extends ai{constructor(e=new ce,n=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ce){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ce){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jw extends ai{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fv extends ai{constructor(e=new ce,n=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qw extends ai{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y),Eo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ov extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ce){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Nm(a,l.x,u.x,h.x,f.x),Nm(a,l.y,u.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ce().fromArray(r))}return this}}var Im=Object.freeze({__proto__:null,ArcCurve:Vw,CatmullRomCurve3:Gw,CubicBezierCurve:Iv,CubicBezierCurve3:Zw,EllipseCurve:ud,LineCurve:Uv,LineCurve3:Jw,QuadraticBezierCurve:Fv,QuadraticBezierCurve3:Qw,SplineCurve:Ov});class eA extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Im[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Im[r.type]().fromJSON(r))}return this}}class tA extends eA{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Uv(this.currentPoint.clone(),new ce(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Fv(this.currentPoint.clone(),new ce(e,n),new ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Iv(this.currentPoint.clone(),new ce(e,n),new ce(i,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Ov(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new ud(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hd extends oi{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Nt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],u=[],h=1/n,f=new I,d=new ce,p=new I,v=new I,x=new I;let m=0,c=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,c=e[g+1].y-e[g].y,p.x=c*1,p.y=-m,p.z=c*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[g+1].x-e[g].x,c=e[g+1].y-e[g].y,p.x=c*1,p.y=-m,p.z=c*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let g=0;g<=n;g++){const _=i+g*h*r,S=Math.sin(_),R=Math.cos(_);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*S,f.y=e[A].y,f.z=e[A].x*R,o.push(f.x,f.y,f.z),d.x=g/n,d.y=A/(e.length-1),a.push(d.x,d.y);const w=l[3*A+0]*S,P=l[3*A+1],Y=l[3*A+0]*R;u.push(w,P,Y)}}for(let g=0;g<n;g++)for(let _=0;_<e.length-1;_++){const S=_+g*e.length,R=S,A=S+e.length,w=S+e.length+1,P=S+1;s.push(R,A,P),s.push(w,P,A)}this.setIndex(s),this.setAttribute("position",new ri(o,3)),this.setAttribute("uv",new ri(a,2)),this.setAttribute("normal",new ri(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.points,e.segments,e.phiStart,e.phiLength)}}class fd extends hd{constructor(e=1,n=1,i=4,r=8){const s=new tA;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new fd(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ga extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pv,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zv extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class nA extends zv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const xc=new at,Um=new I,Fm=new I;class iA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new od,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),n.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rA extends iA{constructor(){super(new Rv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sA extends zv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new rA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Om{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oA extends zr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);const zm={type:"change"},dd={type:"start"},kv={type:"end"},Wa=new xv,km=new zi,aA=Math.cos(70*TS.DEG2RAD),wt=new I,rn=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yc=1e-6;class lA extends oA{constructor(e,n=null){super(e,n),this.state=it.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ir,this._lastTargetPosition=new I,this._quat=new Ir().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Om,this._sphericalDelta=new Om,this._scale=1,this._panOffset=new I,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new I,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cA.bind(this),this._onPointerDown=uA.bind(this),this._onPointerUp=hA.bind(this),this._onContextMenu=vA.bind(this),this._onMouseWheel=pA.bind(this),this._onKeyDown=mA.bind(this),this._onTouchStart=gA.bind(this),this._onTouchMove=_A.bind(this),this._onMouseDown=fA.bind(this),this._onMouseMove=dA.bind(this),this._interceptControlDown=xA.bind(this),this._interceptControlUp=yA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zm),this.update(),this.state=it.NONE}update(e=null){const n=this.object.position;wt.copy(n).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new I(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<aA?this.object.lookAt(this.target):(km.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(km,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yc||this._lastTargetPosition.distanceToSquared(this.target)>yc?(this.dispatchEvent(zm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wt.setFromMatrixColumn(n,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,n){this.screenSpacePanning===!0?wt.setFromMatrixColumn(n,1):(wt.setFromMatrixColumn(n,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function cA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function hA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=it.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function fA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=it.DOLLY;break;case Es.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}break;case Es.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(dd)}function dA(t){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function pA(t){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(t.preventDefault(),this.dispatchEvent(dd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(kv))}function mA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function gA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=it.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=it.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(dd)}function _A(t){switch(this._trackPointer(t),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=it.NONE}}function vA(t){this.enabled!==!1&&t.preventDefault()}function xA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wo=me*me;function SA(t,e){const n=new oi,i=new Float32Array(wo*3);for(let o=0;o<me;o++)for(let a=0;a<me;a++){const l=st(a,o);i[l*3]=So(a),i[l*3+1]=t[l],i[l*3+2]=Mo(o)}const r=new Uint32Array((me-1)*(me-1)*6);let s=0;for(let o=0;o<me-1;o++)for(let a=0;a<me-1;a++){const l=st(a,o),u=l+1,h=l+me,f=h+1;r[s++]=l,r[s++]=h,r[s++]=u,r[s++]=u,r[s++]=h,r[s++]=f}return n.setAttribute("position",new jt(i,3)),n.setAttribute("color",new jt(new Float32Array(wo*e),e)),n.setIndex(new jt(r,1)),n.computeVertexNormals(),n}const Xa=new I(.45,.8,.32).normalize();class MA{constructor(e,n,i,r){$e(this,"renderer");$e(this,"scene");$e(this,"camera");$e(this,"controls");$e(this,"terrainGeo");$e(this,"waterGeo");$e(this,"buildings");$e(this,"carMesh");$e(this,"personMesh");$e(this,"dummy",new Ut);$e(this,"world");$e(this,"overlay",!1);this.world=n,this.renderer=new zw({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nv,this.scene=new kw,this.scene.background=new Oe(9417935),this.scene.fog=new ld(9417935,600,1900),this.camera=new bn(52,1,1,4e3),this.camera.position.set(-360,240,220),this.controls=new lA(this.camera,e),this.controls.target.set(20,10,0),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.05,this.controls.minDistance=40,this.controls.maxDistance=1200,this.controls.update();const s=new nA(12441327,4478266,.85);this.scene.add(s);const o=new sA(16773852,1.6);o.position.copy(Xa).multiplyScalar(700),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-330,o.shadow.camera.right=330,o.shadow.camera.top=330,o.shadow.camera.bottom=-330,o.shadow.camera.near=100,o.shadow.camera.far=1600,o.shadow.bias=-6e-4,this.scene.add(o),this.terrainGeo=SA(n.elev,3);const a=new Ga({vertexColors:!0,roughness:.95,metalness:0}),l=new Sn(this.terrainGeo,a);l.receiveShadow=!0,this.scene.add(l),this.paintTerrain(),this.waterGeo=new oi;const u=new Float32Array(wo*3);for(let x=0;x<me;x++)for(let m=0;m<me;m++){const c=st(m,x);u[c*3]=So(m),u[c*3+1]=0,u[c*3+2]=Mo(x)}this.waterGeo.setAttribute("position",new jt(u,3)),this.waterGeo.setAttribute("color",new jt(new Float32Array(wo*4),4)),this.waterGeo.setIndex(this.terrainGeo.getIndex().clone());const h=new sd({vertexColors:!0,transparent:!0,depthWrite:!1,side:ei}),f=new Sn(this.waterGeo,h);f.renderOrder=2,this.scene.add(f);const d=n.buildings,p=new Ur(1,1,1);this.buildings=new mc(p,new Ga({vertexColors:!1,roughness:.8}),Math.max(1,d.length)),this.buildings.castShadow=!0,this.buildings.receiveShadow=!0,d.forEach((x,m)=>{this.dummy.position.set(x.x,x.h/2+Math.max(0,EA(n,x.x,x.z))-.3,x.z),this.dummy.rotation.set(0,(m*37%9-4)*.012,0),this.dummy.scale.set(x.w,x.h,x.d),this.dummy.updateMatrix(),this.buildings.setMatrixAt(m,this.dummy.matrix),this.buildings.setColorAt(m,new Oe().setHSL(.08+m%5*.02,.06,.42+x.tone*.28))}),this.buildings.instanceMatrix.needsUpdate=!0,this.buildings.instanceColor&&(this.buildings.instanceColor.needsUpdate=!0),this.scene.add(this.buildings);const v=new Ur(4.2,1.5,2.1);this.carMesh=new mc(v,new Ga({roughness:.4,metalness:.35}),Math.max(1,i)),this.carMesh.castShadow=!0,this.scene.add(this.carMesh),this.personMesh=new mc(new fd(.35,.9,3,8),new Ga({roughness:.9}),Math.max(1,r)),this.personMesh.castShadow=!1,this.scene.add(this.personMesh)}setOverlay(e){this.overlay=e,this.paintTerrain()}paintTerrain(){const{elev:e,road:n}=this.world,i=this.terrainGeo.getAttribute("color"),r=i.array;for(let s=0;s<me;s++)for(let o=0;o<me;o++){const a=st(o,s),l=e[a],u=e[st(Math.max(0,o-1),s)],h=e[st(Math.min(me-1,o+1),s)],f=e[st(o,Math.max(0,s-1))],d=e[st(o,Math.min(me-1,s+1))],p=-(h-u)/(2*xn),v=-(d-f)/(2*xn),x=Math.sqrt(p*p+v*v+1),m=ze(.55+.85*((p*Xa.x+v*Xa.z+Xa.y)/x),.15,1.45);let c=.4,g=.5,_=.3;if(this.overlay){const S=ze((l+8)/30,0,1),R=TA(S);c=R[0],g=R[1],_=R[2],l>=0&&l%2<.14&&(c*=.45,g*=.45,_*=.45)}else if(l<0){const S=ze(-l/8,0,1);c=.15-.12*S,g=.4-.3*S,_=.55-.32*S}else if(n[a])c=.24,g=.24,_=.26;else if(l<1.2)c=.78,g=.7,_=.5;else if(l<7){const S=ze((l-1.2)/5.8,0,1);c=.78-.43*S,g=.7-.16*S,_=.5-.21*S}else if(l<12.5)c=.24,g=.42,_=.22;else{const S=ze((l-12.5)/10,0,1);c=.5+.32*S,g=.48+.34*S,_=.45+.37*S}r[a*3]=c*m,r[a*3+1]=g*m,r[a*3+2]=_*m}i.needsUpdate=!0}updateWater(e,n){const i=this.waterGeo.getAttribute("position"),r=this.waterGeo.getAttribute("color"),s=i.array,o=r.array,{elev:a}=this.world,{depth:l,velX:u,velZ:h}=e,f=Math.max(2.5,e.waveHeight*.8);for(let d=0;d<wo;d++){const p=a[d],v=l[d];let x=p+v;v>.05&&p>0&&(x+=Math.sin(d*.61+n*2.2)*.06*Math.min(1,v)),s[d*3+1]=x;let m,c,g,_;if(v<.015)m=0,c=.4,g=.75,_=.9;else{const S=ze(v/f,0,1);c=.3-.27*S,g=.72-.55*S,_=.92-.42*S,m=ze(.3+v*.5,0,.88);const R=Math.hypot(u[d],h[d]);if(v<1.1&&R>.8){const A=ze((R-.8)/2.5,0,1)*ze(1.1-v,0,1);c+=(.96-c)*A,g+=(.98-g)*A,_+=(.99-_)*A,m=Math.max(m,.55+.4*A)}}o[d*4]=c,o[d*4+1]=g,o[d*4+2]=_,o[d*4+3]=m}i.needsUpdate=!0,r.needsUpdate=!0}updateBuildings(){const e=new Oe;this.world.buildings.forEach((n,i)=>{n.flooded?e.setRGB(.3,.36,.45):e.setHSL(.08+i%5*.02,.06,.42+n.tone*.28),this.buildings.setColorAt(i,e)}),this.buildings.instanceColor&&(this.buildings.instanceColor.needsUpdate=!0)}updateCars(e){const n=new Oe;e.forEach((i,r)=>{this.dummy.position.set(i.x,i.y+.75,i.z),this.dummy.rotation.set(i.tilt*.4,i.rot,i.tilt),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.carMesh.setMatrixAt(r,this.dummy.matrix),n.setHSL(i.hue,.65,.5),this.carMesh.setColorAt(r,n)}),this.carMesh.instanceMatrix.needsUpdate=!0,this.carMesh.instanceColor&&(this.carMesh.instanceColor.needsUpdate=!0)}updatePeople(e){const n=new Oe;e.forEach((i,r)=>{this.dummy.position.set(i.x,i.y+.8,i.z);const s=i.state==="swept";this.dummy.rotation.set(s?1.35:0,0,0),this.dummy.scale.set(1,s?.55:1,1),this.dummy.updateMatrix(),this.personMesh.setMatrixAt(r,this.dummy.matrix),i.state==="swept"?n.setRGB(.75,.12,.1):i.state==="safe"?n.setRGB(.15,.7,.25):n.setRGB(.95,.85,.45),this.personMesh.setColorAt(r,n)}),this.personMesh.instanceMatrix.needsUpdate=!0,this.personMesh.instanceColor&&(this.personMesh.instanceColor.needsUpdate=!0)}resize(e,n){this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}dispose(){this.controls.dispose(),this.scene.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>r.dispose())}),this.renderer.dispose()}}function EA(t,e,n){const i=ze(Math.round((e+Ct)/xn-.5),0,me-1),r=ze(Math.round((n+Ct)/xn-.5),0,me-1);return Math.max(0,t.elev[st(i,r)])}function TA(t){const e=[[0,[.1,.2,.6]],[.28,[.2,.6,.3]],[.55,[.9,.85,.3]],[.8,[.85,.3,.15]],[1,[1,1,1]]];for(let n=0;n<e.length-1;n++){const[i,r]=e[n],[s,o]=e[n+1];if(t<=s){const a=(t-i)/(s-i);return[r[0]+(o[0]-r[0])*a,r[1]+(o[1]-r[1])*a,r[2]+(o[2]-r[2])*a]}}return[1,1,1]}const wA={running:!1,elapsed:0,floodedPct:0,maxDepth:0,floodedBuildings:0,totalBuildings:0,displacedCars:0,totalCars:0,sweptPeople:0,safePeople:0,totalPeople:0,phase:"Pre-wave calm"};function AA(){const t=sn.useRef(null),e=sn.useRef(null),n=sn.useRef(null),i=sn.useRef(null),[r,s]=sn.useState(8),[o,a]=sn.useState(!1),[l,u]=sn.useState(!1),[h,f]=sn.useState(2),[d,p]=sn.useState(!1),[v,x]=sn.useState(wA);sn.useEffect(()=>{const g=t.current,_=e.current,S=new Fy;S.speed=2;const R=new MA(g,S.world,S.cars.length,S.people.length);n.current=S,i.current=R;const A=()=>R.resize(_.clientWidth,_.clientHeight);A(),window.addEventListener("resize",A);let w=0,P=performance.now();const Y=T=>{const V=(T-P)/1e3;P=T,S.update(V),R.updateWater(S.water,S.water.time+T/1e3),R.updateBuildings(),R.updateCars(S.cars),R.updatePeople(S.people),R.render(),w=requestAnimationFrame(Y)};w=requestAnimationFrame(Y);const y=window.setInterval(()=>{x(S.getStats()),a(S.water.running),u(S.paused)},200);return()=>{cancelAnimationFrame(w),clearInterval(y),window.removeEventListener("resize",A),R.dispose()}},[]);const m=()=>{var g,_;(g=n.current)==null||g.setWaveHeight(r),(_=n.current)==null||_.start()},c=()=>{const g=n.current;g&&(g.reset(),x(g.getStats()),a(!1),u(!1))};return Te.jsxs("div",{className:"app",ref:e,children:[Te.jsx("canvas",{ref:t,className:"scene"}),Te.jsxs("div",{className:"panel controls",children:[Te.jsx("h1",{children:"Tsunami Simulator"}),Te.jsxs("div",{className:"row",children:[Te.jsxs("label",{children:["Wave height: ",Te.jsxs("b",{children:[r," m"]})]}),Te.jsx("input",{type:"range",min:1,max:20,step:.5,value:r,onChange:g=>{var S;const _=Number(g.target.value);s(_),(S=n.current)==null||S.setWaveHeight(_)}})]}),Te.jsx("button",{className:"start",onClick:m,disabled:o,children:o?"TSUNAMI ACTIVE":"START TSUNAMI"}),Te.jsxs("div",{className:"btnrow",children:[Te.jsx("button",{onClick:c,children:"RESET"}),Te.jsx("button",{disabled:!o,onClick:()=>{const g=n.current;g&&(g.paused=!g.paused,u(g.paused))},children:l?"RESUME":"PAUSE"})]}),Te.jsxs("div",{className:"row",children:[Te.jsx("label",{children:"Speed"}),Te.jsx("div",{className:"btnrow speeds",children:[1,2,4,8].map(g=>Te.jsxs("button",{className:h===g?"on":"",onClick:()=>{f(g),n.current&&(n.current.speed=g)},children:[g,"×"]},g))})]}),Te.jsxs("label",{className:"check",children:[Te.jsx("input",{type:"checkbox",checked:d,onChange:g=>{var _;p(g.target.checked),(_=i.current)==null||_.setOverlay(g.target.checked)}}),"Elevation overlay (contours)"]}),Te.jsx("p",{className:"hint",children:"Drag to orbit · scroll to zoom · right-drag to pan"})]}),Te.jsxs("div",{className:"panel stats",children:[Te.jsxs("div",{className:"big",children:["Flooded Area: ",Te.jsxs("span",{children:[v.floodedPct.toFixed(1),"%"]})]}),Te.jsxs("div",{className:"grid",children:[Te.jsx("div",{children:"Max water depth"}),Te.jsxs("div",{children:[v.maxDepth.toFixed(2)," m"]}),Te.jsx("div",{children:"Elapsed sim time"}),Te.jsxs("div",{children:[v.elapsed.toFixed(0)," s"]}),Te.jsx("div",{children:"Flooded buildings"}),Te.jsxs("div",{children:[v.floodedBuildings," / ",v.totalBuildings]}),Te.jsx("div",{children:"Displaced vehicles"}),Te.jsxs("div",{children:[v.displacedCars," / ",v.totalCars]}),Te.jsx("div",{children:"People swept away"}),Te.jsxs("div",{children:[v.sweptPeople," / ",v.totalPeople]}),Te.jsx("div",{children:"People on high ground"}),Te.jsx("div",{children:v.safePeople})]}),Te.jsx("div",{className:"phase",children:v.phase})]}),Te.jsxs("div",{className:"panel legend",children:[Te.jsx("div",{className:"lgtitle",children:"Elevation (m)"}),Te.jsx("div",{className:"ramp elev"}),Te.jsxs("div",{className:"lgs",children:[Te.jsx("span",{children:"0"}),Te.jsx("span",{children:"8"}),Te.jsx("span",{children:"16"}),Te.jsx("span",{children:"24"})]}),Te.jsx("div",{className:"lgtitle",children:"Water depth (m)"}),Te.jsx("div",{className:"ramp depth"}),Te.jsxs("div",{className:"lgs",children:[Te.jsx("span",{children:"0"}),Te.jsx("span",{children:"2"}),Te.jsx("span",{children:"4"}),Te.jsx("span",{children:"8+"})]})]})]})}Sc.createRoot(document.getElementById("root")).render(Te.jsx(l0.StrictMode,{children:Te.jsx(AA,{})}));
