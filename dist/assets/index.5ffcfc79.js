function bv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var P={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=Symbol.for("react.element"),Uv=Symbol.for("react.portal"),zv=Symbol.for("react.fragment"),Bv=Symbol.for("react.strict_mode"),Wv=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),$v=Symbol.for("react.forward_ref"),Vv=Symbol.for("react.suspense"),Gv=Symbol.for("react.memo"),Kv=Symbol.for("react.lazy"),Hd=Symbol.iterator;function Qv(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mp=Object.assign,gp={};function Ur(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||pp}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ur.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _p(){}_p.prototype=Ur.prototype;function Vu(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||pp}var Gu=Vu.prototype=new _p;Gu.constructor=Vu;mp(Gu,Ur.prototype);Gu.isPureReactComponent=!0;var $d=Array.isArray,vp=Object.prototype.hasOwnProperty,Ku={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function wp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vp.call(e,r)&&!yp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ns,type:t,key:s,ref:o,props:i,_owner:Ku.current}}function qv(t,e){return{$$typeof:ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ns}function Yv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vd=/\/+/g;function Ll(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yv(""+t.key):e.toString(36)}function zs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ns:case Uv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ll(o,0):r,$d(i)?(n="",t!=null&&(n=t.replace(Vd,"$&/")+"/"),zs(i,e,n,"",function(u){return u})):i!=null&&(Qu(i)&&(i=qv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$d(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ll(s,l);o+=zs(s,e,n,a,i)}else if(a=Qv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ll(s,l++),o+=zs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ys(t,e,n){if(t==null)return t;var r=[],i=0;return zs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Bs={transition:null},Jv={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:Ku};B.Children={map:ys,forEach:function(t,e,n){ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ys(t,function(){e++}),e},toArray:function(t){return ys(t,function(e){return e})||[]},only:function(t){if(!Qu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Ur;B.Fragment=zv;B.Profiler=Wv;B.PureComponent=Vu;B.StrictMode=Bv;B.Suspense=Vv;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ku.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)vp.call(e,a)&&!yp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ns,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jv,_context:t},t.Consumer=t};B.createElement=wp;B.createFactory=function(t){var e=wp.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:$v,render:t}};B.isValidElement=Qu;B.lazy=function(t){return{$$typeof:Kv,_payload:{_status:-1,_result:t},_init:Xv}};B.memo=function(t,e){return{$$typeof:Gv,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Bs.transition;Bs.transition={};try{t()}finally{Bs.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Pe.current.useCallback(t,e)};B.useContext=function(t){return Pe.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};B.useEffect=function(t,e){return Pe.current.useEffect(t,e)};B.useId=function(){return Pe.current.useId()};B.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Pe.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};B.useRef=function(t){return Pe.current.useRef(t)};B.useState=function(t){return Pe.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Pe.current.useTransition()};B.version="18.2.0";(function(t){t.exports=B})(P);const Ep=Fv(P.exports),Ca=bv({__proto__:null,default:Ep},[P.exports]);var Ia={},Sp={exports:{}},$e={},Cp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var L=k.length;k.push(D);e:for(;0<L;){var se=L-1>>>1,ce=k[se];if(0<i(ce,D))k[se]=D,k[L]=ce,L=se;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],L=k.pop();if(L!==D){k[0]=L;e:for(var se=0,ce=k.length,_s=ce>>>1;se<_s;){var vn=2*(se+1)-1,Ml=k[vn],yn=vn+1,vs=k[yn];if(0>i(Ml,L))yn<ce&&0>i(vs,Ml)?(k[se]=vs,k[yn]=L,se=yn):(k[se]=Ml,k[vn]=L,se=vn);else if(yn<ce&&0>i(vs,L))k[se]=vs,k[yn]=L,se=yn;else break e}}return D}function i(k,D){var L=k.sortIndex-D.sortIndex;return L!==0?L:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,p=!1,_=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=k)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(k){if(y=!1,g(k),!_)if(n(a)!==null)_=!0,Al(C);else{var D=n(u);D!==null&&Dl(w,D.startTime-k)}}function C(k,D){_=!1,y&&(y=!1,m(x),x=-1),p=!0;var L=h;try{for(g(D),c=n(a);c!==null&&(!(c.expirationTime>D)||k&&!et());){var se=c.callback;if(typeof se=="function"){c.callback=null,h=c.priorityLevel;var ce=se(c.expirationTime<=D);D=t.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(a)&&r(a),g(D)}else r(a);c=n(a)}if(c!==null)var _s=!0;else{var vn=n(u);vn!==null&&Dl(w,vn.startTime-D),_s=!1}return _s}finally{c=null,h=L,p=!1}}var T=!1,N=null,x=-1,q=5,F=-1;function et(){return!(t.unstable_now()-F<q)}function Kr(){if(N!==null){var k=t.unstable_now();F=k;var D=!0;try{D=N(!0,k)}finally{D?Qr():(T=!1,N=null)}}else T=!1}var Qr;if(typeof f=="function")Qr=function(){f(Kr)};else if(typeof MessageChannel<"u"){var jd=new MessageChannel,Lv=jd.port2;jd.port1.onmessage=Kr,Qr=function(){Lv.postMessage(null)}}else Qr=function(){R(Kr,0)};function Al(k){N=k,T||(T=!0,Qr())}function Dl(k,D){x=R(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Al(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return k()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var L=h;h=k;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(k,D,L){var se=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?se+L:se):L=se,k){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,k={id:d++,callback:D,priorityLevel:k,startTime:L,expirationTime:ce,sortIndex:-1},L>se?(k.sortIndex=L,e(u,k),n(a)===null&&k===n(u)&&(y?(m(x),x=-1):y=!0,Dl(w,L-se))):(k.sortIndex=ce,e(a,k),_||p||(_=!0,Al(C))),k},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(k){var D=h;return function(){var L=h;h=D;try{return k.apply(this,arguments)}finally{h=L}}}})(Ip);(function(t){t.exports=Ip})(Cp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=P.exports,He=Cp.exports;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,ki={};function Kn(t,e){Ir(t,e),Ir(t+"Capture",e)}function Ir(t,e){for(ki[t]=e,t=0;t<e.length;t++)Tp.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gd={},Kd={};function ey(t){return ka.call(Kd,t)?!0:ka.call(Gd,t)?!1:Zv.test(t)?Kd[t]=!0:(Gd[t]=!0,!1)}function ty(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ny(t,e,n,r){if(e===null||typeof e>"u"||ty(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var qu=/[\-:]([a-z])/g;function Yu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qu,Yu);Ee[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qu,Yu);Ee[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qu,Yu);Ee[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xu(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ny(e,n,i,r)&&(n=null),r||i===null?ey(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ws=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),ec=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),xp=Symbol.for("react.offscreen"),Qd=Symbol.iterator;function qr(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,bl;function li(t){if(bl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bl=e&&e[1]||""}return`
`+bl+t}var Fl=!1;function Ul(t,e){if(!t||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?li(t):""}function ry(t){switch(t.tag){case 5:return li(t.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return t=Ul(t.type,!1),t;case 11:return t=Ul(t.type.render,!1),t;case 1:return t=Ul(t.type,!0),t;default:return""}}function xa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case er:return"Fragment";case Zn:return"Portal";case Ta:return"Profiler";case Ju:return"StrictMode";case Na:return"Suspense";case Ra:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rp:return(t.displayName||"Context")+".Consumer";case Np:return(t._context.displayName||"Context")+".Provider";case Zu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ec:return e=t.displayName||null,e!==null?e:xa(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return xa(t(e))}catch{}}return null}function iy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(e);case 8:return e===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sy(t){var e=Pp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Es(t){t._valueTracker||(t._valueTracker=sy(t))}function Op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function no(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pa(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ap(t,e){e=e.checked,e!=null&&Xu(t,"checked",e,!1)}function Oa(t,e){Ap(t,e);var n=cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Aa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Aa(t,e.type,cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Aa(t,e,n){(e!=="number"||no(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ai=Array.isArray;function hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Da(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ai(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cn(n)}}function Dp(t,e){var n=cn(e.value),r=cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ss,Lp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ss=Ss||document.createElement("div"),Ss.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ss.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ti(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(t){oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),di[e]=di[t]})});function bp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||di.hasOwnProperty(t)&&di[t]?(""+e).trim():e+"px"}function Fp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ly=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(t,e){if(e){if(ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function ba(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,fr=null,pr=null;function Zd(t){if(t=ss(t)){if(typeof Ua!="function")throw Error(E(280));var e=t.stateNode;e&&(e=el(e),Ua(t.stateNode,t.type,e))}}function Up(t){fr?pr?pr.push(t):pr=[t]:fr=t}function zp(){if(fr){var t=fr,e=pr;if(pr=fr=null,Zd(t),e)for(t=0;t<e.length;t++)Zd(e[t])}}function Bp(t,e){return t(e)}function Wp(){}var zl=!1;function jp(t,e,n){if(zl)return t(e,n);zl=!0;try{return Bp(t,e,n)}finally{zl=!1,(fr!==null||pr!==null)&&(Wp(),zp())}}function Ni(t,e){var n=t.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var za=!1;if(Pt)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){za=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{za=!1}function ay(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var hi=!1,ro=null,io=!1,Ba=null,uy={onError:function(t){hi=!0,ro=t}};function cy(t,e,n,r,i,s,o,l,a){hi=!1,ro=null,ay.apply(uy,arguments)}function dy(t,e,n,r,i,s,o,l,a){if(cy.apply(this,arguments),hi){if(hi){var u=ro;hi=!1,ro=null}else throw Error(E(198));io||(io=!0,Ba=u)}}function Qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(Qn(t)!==t)throw Error(E(188))}function hy(t){var e=t.alternate;if(!e){if(e=Qn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return eh(i),t;if(s===r)return eh(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function $p(t){return t=hy(t),t!==null?Vp(t):null}function Vp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vp(t);if(e!==null)return e;t=t.sibling}return null}var Gp=He.unstable_scheduleCallback,th=He.unstable_cancelCallback,fy=He.unstable_shouldYield,py=He.unstable_requestPaint,oe=He.unstable_now,my=He.unstable_getCurrentPriorityLevel,nc=He.unstable_ImmediatePriority,Kp=He.unstable_UserBlockingPriority,so=He.unstable_NormalPriority,gy=He.unstable_LowPriority,Qp=He.unstable_IdlePriority,Yo=null,pt=null;function _y(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Yo,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:wy,vy=Math.log,yy=Math.LN2;function wy(t){return t>>>=0,t===0?32:31-(vy(t)/yy|0)|0}var Cs=64,Is=4194304;function ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ui(l):(s&=o,s!==0&&(r=ui(s)))}else o=n&~i,o!==0?r=ui(o):s!==0&&(r=ui(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ey(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=Ey(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Wa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qp(){var t=Cs;return Cs<<=1,(Cs&4194240)===0&&(Cs=64),t}function Bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function Cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function Yp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Xp,ic,Jp,Zp,em,ja=!1,ks=[],Xt=null,Jt=null,Zt=null,Ri=new Map,xi=new Map,Ht=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Ri.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(e.pointerId)}}function Xr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ss(e),e!==null&&ic(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ky(t,e,n,r,i){switch(e){case"focusin":return Xt=Xr(Xt,t,e,n,r,i),!0;case"dragenter":return Jt=Xr(Jt,t,e,n,r,i),!0;case"mouseover":return Zt=Xr(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ri.set(s,Xr(Ri.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xi.set(s,Xr(xi.get(s)||null,t,e,n,r,i)),!0}return!1}function tm(t){var e=In(t.target);if(e!==null){var n=Qn(e);if(n!==null){if(e=n.tag,e===13){if(e=Hp(n),e!==null){t.blockedOn=e,em(t.priority,function(){Jp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ws(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ha(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return e=ss(n),e!==null&&ic(e),t.blockedOn=n,!1;e.shift()}return!0}function rh(t,e,n){Ws(t)&&n.delete(e)}function Ty(){ja=!1,Xt!==null&&Ws(Xt)&&(Xt=null),Jt!==null&&Ws(Jt)&&(Jt=null),Zt!==null&&Ws(Zt)&&(Zt=null),Ri.forEach(rh),xi.forEach(rh)}function Jr(t,e){t.blockedOn===e&&(t.blockedOn=null,ja||(ja=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Ty)))}function Pi(t){function e(i){return Jr(i,t)}if(0<ks.length){Jr(ks[0],t);for(var n=1;n<ks.length;n++){var r=ks[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Jr(Xt,t),Jt!==null&&Jr(Jt,t),Zt!==null&&Jr(Zt,t),Ri.forEach(e),xi.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)tm(n),n.blockedOn===null&&Ht.shift()}var mr=Ft.ReactCurrentBatchConfig,lo=!0;function Ny(t,e,n,r){var i=H,s=mr.transition;mr.transition=null;try{H=1,sc(t,e,n,r)}finally{H=i,mr.transition=s}}function Ry(t,e,n,r){var i=H,s=mr.transition;mr.transition=null;try{H=4,sc(t,e,n,r)}finally{H=i,mr.transition=s}}function sc(t,e,n,r){if(lo){var i=Ha(t,e,n,r);if(i===null)Yl(t,e,r,ao,n),nh(t,r);else if(ky(i,t,e,n,r))r.stopPropagation();else if(nh(t,r),e&4&&-1<Iy.indexOf(t)){for(;i!==null;){var s=ss(i);if(s!==null&&Xp(s),s=Ha(t,e,n,r),s===null&&Yl(t,e,r,ao,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yl(t,e,r,null,n)}}var ao=null;function Ha(t,e,n,r){if(ao=null,t=tc(r),t=In(t),t!==null)if(e=Qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ao=t,null}function nm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(my()){case nc:return 1;case Kp:return 4;case so:case gy:return 16;case Qp:return 536870912;default:return 16}default:return 16}}var Qt=null,oc=null,js=null;function rm(){if(js)return js;var t,e=oc,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return js=i.slice(t,1<r?1-r:void 0)}function Hs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ts(){return!0}function ih(){return!1}function Ve(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ts:ih,this.isPropagationStopped=ih,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),e}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Ve(zr),is=te({},zr,{view:0,detail:0}),xy=Ve(is),Wl,jl,Zr,Xo=te({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(Wl=t.screenX-Zr.screenX,jl=t.screenY-Zr.screenY):jl=Wl=0,Zr=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),sh=Ve(Xo),Py=te({},Xo,{dataTransfer:0}),Oy=Ve(Py),Ay=te({},is,{relatedTarget:0}),Hl=Ve(Ay),Dy=te({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Ve(Dy),Ly=te({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),by=Ve(Ly),Fy=te({},zr,{data:0}),oh=Ve(Fy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=By[t])?!!e[t]:!1}function ac(){return Wy}var jy=te({},is,{key:function(t){if(t.key){var e=Uy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?Hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=Ve(jy),$y=te({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Ve($y),Vy=te({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Gy=Ve(Vy),Ky=te({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=Ve(Ky),qy=te({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Ve(qy),Xy=[9,13,27,32],uc=Pt&&"CompositionEvent"in window,fi=null;Pt&&"documentMode"in document&&(fi=document.documentMode);var Jy=Pt&&"TextEvent"in window&&!fi,im=Pt&&(!uc||fi&&8<fi&&11>=fi),ah=String.fromCharCode(32),uh=!1;function sm(t,e){switch(t){case"keyup":return Xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function Zy(t,e){switch(t){case"compositionend":return om(e);case"keypress":return e.which!==32?null:(uh=!0,ah);case"textInput":return t=e.data,t===ah&&uh?null:t;default:return null}}function e0(t,e){if(tr)return t==="compositionend"||!uc&&sm(t,e)?(t=rm(),js=oc=Qt=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return im&&e.locale!=="ko"?null:e.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t0[t.type]:e==="textarea"}function lm(t,e,n,r){Up(r),e=uo(e,"onChange"),0<e.length&&(n=new lc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pi=null,Oi=null;function n0(t){vm(t,0)}function Jo(t){var e=ir(t);if(Op(e))return t}function r0(t,e){if(t==="change")return e}var am=!1;if(Pt){var $l;if(Pt){var Vl="oninput"in document;if(!Vl){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Vl=typeof dh.oninput=="function"}$l=Vl}else $l=!1;am=$l&&(!document.documentMode||9<document.documentMode)}function hh(){pi&&(pi.detachEvent("onpropertychange",um),Oi=pi=null)}function um(t){if(t.propertyName==="value"&&Jo(Oi)){var e=[];lm(e,Oi,t,tc(t)),jp(n0,e)}}function i0(t,e,n){t==="focusin"?(hh(),pi=e,Oi=n,pi.attachEvent("onpropertychange",um)):t==="focusout"&&hh()}function s0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(Oi)}function o0(t,e){if(t==="click")return Jo(e)}function l0(t,e){if(t==="input"||t==="change")return Jo(e)}function a0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:a0;function Ai(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ka.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=fh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fh(n)}}function cm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dm(){for(var t=window,e=no();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=no(t.document)}return e}function cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u0(t){var e=dm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cm(n.ownerDocument.documentElement,n)){if(r!==null&&cc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ph(n,s);var o=ph(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c0=Pt&&"documentMode"in document&&11>=document.documentMode,nr=null,$a=null,mi=null,Va=!1;function mh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Va||nr==null||nr!==no(r)||(r=nr,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ai(mi,r)||(mi=r,r=uo($a,"onSelect"),0<r.length&&(e=new lc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=nr)))}function Ns(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionend:Ns("Transition","TransitionEnd")},Gl={},hm={};Pt&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Zo(t){if(Gl[t])return Gl[t];if(!rr[t])return t;var e=rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hm)return Gl[t]=e[n];return t}var fm=Zo("animationend"),pm=Zo("animationiteration"),mm=Zo("animationstart"),gm=Zo("transitionend"),_m=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(t,e){_m.set(t,e),Kn(e,[t])}for(var Kl=0;Kl<gh.length;Kl++){var Ql=gh[Kl],d0=Ql.toLowerCase(),h0=Ql[0].toUpperCase()+Ql.slice(1);pn(d0,"on"+h0)}pn(fm,"onAnimationEnd");pn(pm,"onAnimationIteration");pn(mm,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(gm,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function _h(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dy(r,e,void 0,t),t.currentTarget=null}function vm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;_h(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;_h(i,l,u),s=a}}}if(io)throw t=Ba,io=!1,Ba=null,t}function Y(t,e){var n=e[Ya];n===void 0&&(n=e[Ya]=new Set);var r=t+"__bubble";n.has(r)||(ym(e,t,2,!1),n.add(r))}function ql(t,e,n){var r=0;e&&(r|=4),ym(n,t,r,e)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[Rs]){t[Rs]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||ql(n,!1,t),ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rs]||(e[Rs]=!0,ql("selectionchange",!1,e))}}function ym(t,e,n,r){switch(nm(e)){case 1:var i=Ny;break;case 4:i=Ry;break;default:i=sc}n=i.bind(null,e,n,t),i=void 0,!za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yl(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=In(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}jp(function(){var u=s,d=tc(n),c=[];e:{var h=_m.get(t);if(h!==void 0){var p=lc,_=t;switch(t){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":p=Hy;break;case"focusin":_="focus",p=Hl;break;case"focusout":_="blur",p=Hl;break;case"beforeblur":case"afterblur":p=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Gy;break;case fm:case pm:case mm:p=My;break;case gm:p=Qy;break;case"scroll":p=xy;break;case"wheel":p=Yy;break;case"copy":case"cut":case"paste":p=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lh}var y=(e&4)!==0,R=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ni(f,m),w!=null&&y.push(Mi(f,w,g)))),R)break;f=f.return}0<y.length&&(h=new p(h,_,null,n,d),c.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Fa&&(_=n.relatedTarget||n.fromElement)&&(In(_)||_[Ot]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?In(_):null,_!==null&&(R=Qn(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=sh,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=lh,w="onPointerLeave",m="onPointerEnter",f="pointer"),R=p==null?h:ir(p),g=_==null?h:ir(_),h=new y(w,f+"leave",p,n,d),h.target=R,h.relatedTarget=g,w=null,In(d)===u&&(y=new y(m,f+"enter",_,n,d),y.target=g,y.relatedTarget=R,w=y),R=w,p&&_)t:{for(y=p,m=_,f=0,g=y;g;g=Xn(g))f++;for(g=0,w=m;w;w=Xn(w))g++;for(;0<f-g;)y=Xn(y),f--;for(;0<g-f;)m=Xn(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Xn(y),m=Xn(m)}y=null}else y=null;p!==null&&vh(c,h,p,y,!1),_!==null&&R!==null&&vh(c,R,_,y,!0)}}e:{if(h=u?ir(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=r0;else if(ch(h))if(am)C=l0;else{C=s0;var T=i0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=o0);if(C&&(C=C(t,u))){lm(c,C,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Aa(h,"number",h.value)}switch(T=u?ir(u):window,t){case"focusin":(ch(T)||T.contentEditable==="true")&&(nr=T,$a=u,mi=null);break;case"focusout":mi=$a=nr=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,mh(c,n,d);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":mh(c,n,d)}var N;if(uc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else tr?sm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(im&&n.locale!=="ko"&&(tr||x!=="onCompositionStart"?x==="onCompositionEnd"&&tr&&(N=rm()):(Qt=d,oc="value"in Qt?Qt.value:Qt.textContent,tr=!0)),T=uo(u,x),0<T.length&&(x=new oh(x,t,null,n,d),c.push({event:x,listeners:T}),N?x.data=N:(N=om(n),N!==null&&(x.data=N)))),(N=Jy?Zy(t,n):e0(t,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(d=new oh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}vm(c,e)})}function Mi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ni(t,n),s!=null&&r.unshift(Mi(t,s,i)),s=Ni(t,e),s!=null&&r.push(Mi(t,s,i))),t=t.return}return r}function Xn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ni(n,s),a!=null&&o.unshift(Mi(n,a,l))):i||(a=Ni(n,s),a!=null&&o.push(Mi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var p0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function yh(t){return(typeof t=="string"?t:""+t).replace(p0,`
`).replace(m0,"")}function xs(t,e,n){if(e=yh(e),yh(t)!==e&&n)throw Error(E(425))}function co(){}var Ga=null,Ka=null;function Qa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,_0=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(t){return wh.resolve(null).then(t).catch(v0)}:qa;function v0(t){setTimeout(function(){throw t})}function Xl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Eh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),ft="__reactFiber$"+Br,Li="__reactProps$"+Br,Ot="__reactContainer$"+Br,Ya="__reactEvents$"+Br,y0="__reactListeners$"+Br,w0="__reactHandles$"+Br;function In(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Eh(t);t!==null;){if(n=t[ft])return n;t=Eh(t)}return e}t=n,n=t.parentNode}return null}function ss(t){return t=t[ft]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function el(t){return t[Li]||null}var Xa=[],sr=-1;function mn(t){return{current:t}}function X(t){0>sr||(t.current=Xa[sr],Xa[sr]=null,sr--)}function Q(t,e){sr++,Xa[sr]=t.current,t.current=e}var dn={},Te=mn(dn),be=mn(!1),Ln=dn;function kr(t,e){var n=t.type.contextTypes;if(!n)return dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function ho(){X(be),X(Te)}function Sh(t,e,n){if(Te.current!==dn)throw Error(E(168));Q(Te,e),Q(be,n)}function wm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,iy(t)||"Unknown",i));return te({},n,r)}function fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dn,Ln=Te.current,Q(Te,t),Q(be,be.current),!0}function Ch(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=wm(t,e,Ln),r.__reactInternalMemoizedMergedChildContext=t,X(be),X(Te),Q(Te,t)):X(be),Q(be,n)}var Et=null,tl=!1,Jl=!1;function Em(t){Et===null?Et=[t]:Et.push(t)}function E0(t){tl=!0,Em(t)}function gn(){if(!Jl&&Et!==null){Jl=!0;var t=0,e=H;try{var n=Et;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,tl=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),Gp(nc,gn),i}finally{H=e,Jl=!1}}return null}var or=[],lr=0,po=null,mo=0,Ge=[],Ke=0,bn=null,Ct=1,It="";function wn(t,e){or[lr++]=mo,or[lr++]=po,po=t,mo=e}function Sm(t,e,n){Ge[Ke++]=Ct,Ge[Ke++]=It,Ge[Ke++]=bn,bn=t;var r=Ct;t=It;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-lt(e)+i|n<<i|r,It=s+t}else Ct=1<<s|n<<i|r,It=t}function dc(t){t.return!==null&&(wn(t,1),Sm(t,1,0))}function hc(t){for(;t===po;)po=or[--lr],or[lr]=null,mo=or[--lr],or[lr]=null;for(;t===bn;)bn=Ge[--Ke],Ge[Ke]=null,It=Ge[--Ke],Ge[Ke]=null,Ct=Ge[--Ke],Ge[Ke]=null}var je=null,We=null,J=!1,it=null;function Cm(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ih(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,je=t,We=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,je=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bn!==null?{id:Ct,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,je=t,We=null,!0):!1;default:return!1}}function Ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Za(t){if(J){var e=We;if(e){var n=e;if(!Ih(t,e)){if(Ja(t))throw Error(E(418));e=en(n.nextSibling);var r=je;e&&Ih(t,e)?Cm(r,n):(t.flags=t.flags&-4097|2,J=!1,je=t)}}else{if(Ja(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,je=t}}}function kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;je=t}function Ps(t){if(t!==je)return!1;if(!J)return kh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qa(t.type,t.memoizedProps)),e&&(e=We)){if(Ja(t))throw Im(),Error(E(418));for(;e;)Cm(t,e),e=en(e.nextSibling)}if(kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=je?en(t.stateNode.nextSibling):null;return!0}function Im(){for(var t=We;t;)t=en(t.nextSibling)}function Tr(){We=je=null,J=!1}function fc(t){it===null?it=[t]:it.push(t)}var S0=Ft.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var go=mn(null),_o=null,ar=null,pc=null;function mc(){pc=ar=_o=null}function gc(t){var e=go.current;X(go),t._currentValue=e}function eu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gr(t,e){_o=t,pc=ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(De=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:e,next:null},ar===null){if(_o===null)throw Error(E(308));ar=t,_o.dependencies={lanes:0,firstContext:t}}else ar=ar.next=t;return e}var kn=null;function _c(t){kn===null?kn=[t]:kn.push(t)}function km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_c(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jt=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(W&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,_c(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function $s(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rc(t,n)}}function Th(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vo(t,e,n,r){var i=t.updateQueue;jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,p=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(p,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,c,h):_,h==null)break e;c=te({},c,h);break e;case 2:jt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,a=c):d=d.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Un|=o,t.lanes=o,t.memoizedState=c}}function Nh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Nm=new kp.Component().refs;function tu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nl={isMounted:function(t){return(t=t._reactInternals)?Qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=rn(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(at(e,t,i,r),$s(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=rn(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(at(e,t,i,r),$s(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=rn(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(at(e,t,r,n),$s(e,t,r))}};function Rh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,s):!0}function Rm(t,e,n){var r=!1,i=dn,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=Fe(e)?Ln:Te.current,r=e.contextTypes,s=(r=r!=null)?kr(t,i):dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nl.enqueueReplaceState(e,e.state,null)}function nu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Nm,vc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=Fe(e)?Ln:Te.current,i.context=kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nl.enqueueReplaceState(i,i.state,null),vo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Nm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Os(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ph(t){var e=t._init;return e(t._payload)}function xm(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=sn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,w){return f===null||f.tag!==6?(f=sa(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,w){var C=g.type;return C===er?d(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wt&&Ph(C)===f.type)?(w=i(f,g.props),w.ref=ei(m,f,g),w.return=m,w):(w=Ys(g.type,g.key,g.props,null,m.mode,w),w.ref=ei(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=oa(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function d(m,f,g,w,C){return f===null||f.tag!==7?(f=On(g,m.mode,w,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function c(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sa(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ws:return g=Ys(f.type,f.key,f.props,null,m.mode,g),g.ref=ei(m,null,f),g.return=m,g;case Zn:return f=oa(f,m.mode,g),f.return=m,f;case Wt:var w=f._init;return c(m,w(f._payload),g)}if(ai(f)||qr(f))return f=On(f,m.mode,g,null),f.return=m,f;Os(m,f)}return null}function h(m,f,g,w){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ws:return g.key===C?a(m,f,g,w):null;case Zn:return g.key===C?u(m,f,g,w):null;case Wt:return C=g._init,h(m,f,C(g._payload),w)}if(ai(g)||qr(g))return C!==null?null:d(m,f,g,w,null);Os(m,g)}return null}function p(m,f,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(f,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ws:return m=m.get(w.key===null?g:w.key)||null,a(f,m,w,C);case Zn:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,C);case Wt:var T=w._init;return p(m,f,g,T(w._payload),C)}if(ai(w)||qr(w))return m=m.get(g)||null,d(f,m,w,C,null);Os(f,w)}return null}function _(m,f,g,w){for(var C=null,T=null,N=f,x=f=0,q=null;N!==null&&x<g.length;x++){N.index>x?(q=N,N=null):q=N.sibling;var F=h(m,N,g[x],w);if(F===null){N===null&&(N=q);break}t&&N&&F.alternate===null&&e(m,N),f=s(F,f,x),T===null?C=F:T.sibling=F,T=F,N=q}if(x===g.length)return n(m,N),J&&wn(m,x),C;if(N===null){for(;x<g.length;x++)N=c(m,g[x],w),N!==null&&(f=s(N,f,x),T===null?C=N:T.sibling=N,T=N);return J&&wn(m,x),C}for(N=r(m,N);x<g.length;x++)q=p(N,m,x,g[x],w),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?x:q.key),f=s(q,f,x),T===null?C=q:T.sibling=q,T=q);return t&&N.forEach(function(et){return e(m,et)}),J&&wn(m,x),C}function y(m,f,g,w){var C=qr(g);if(typeof C!="function")throw Error(E(150));if(g=C.call(g),g==null)throw Error(E(151));for(var T=C=null,N=f,x=f=0,q=null,F=g.next();N!==null&&!F.done;x++,F=g.next()){N.index>x?(q=N,N=null):q=N.sibling;var et=h(m,N,F.value,w);if(et===null){N===null&&(N=q);break}t&&N&&et.alternate===null&&e(m,N),f=s(et,f,x),T===null?C=et:T.sibling=et,T=et,N=q}if(F.done)return n(m,N),J&&wn(m,x),C;if(N===null){for(;!F.done;x++,F=g.next())F=c(m,F.value,w),F!==null&&(f=s(F,f,x),T===null?C=F:T.sibling=F,T=F);return J&&wn(m,x),C}for(N=r(m,N);!F.done;x++,F=g.next())F=p(N,m,x,F.value,w),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?x:F.key),f=s(F,f,x),T===null?C=F:T.sibling=F,T=F);return t&&N.forEach(function(Kr){return e(m,Kr)}),J&&wn(m,x),C}function R(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===er&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ws:e:{for(var C=g.key,T=f;T!==null;){if(T.key===C){if(C=g.type,C===er){if(T.tag===7){n(m,T.sibling),f=i(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wt&&Ph(C)===T.type){n(m,T.sibling),f=i(T,g.props),f.ref=ei(m,T,g),f.return=m,m=f;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===er?(f=On(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=Ys(g.type,g.key,g.props,null,m.mode,w),w.ref=ei(m,f,g),w.return=m,m=w)}return o(m);case Zn:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=oa(g,m.mode,w),f.return=m,m=f}return o(m);case Wt:return T=g._init,R(m,f,T(g._payload),w)}if(ai(g))return _(m,f,g,w);if(qr(g))return y(m,f,g,w);Os(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=sa(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return R}var Nr=xm(!0),Pm=xm(!1),os={},mt=mn(os),bi=mn(os),Fi=mn(os);function Tn(t){if(t===os)throw Error(E(174));return t}function yc(t,e){switch(Q(Fi,e),Q(bi,t),Q(mt,os),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ma(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ma(e,t)}X(mt),Q(mt,e)}function Rr(){X(mt),X(bi),X(Fi)}function Om(t){Tn(Fi.current);var e=Tn(mt.current),n=Ma(e,t.type);e!==n&&(Q(bi,t),Q(mt,n))}function wc(t){bi.current===t&&(X(mt),X(bi))}var Z=mn(0);function yo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function Ec(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var Vs=Ft.ReactCurrentDispatcher,ea=Ft.ReactCurrentBatchConfig,Fn=0,ee=null,ae=null,he=null,wo=!1,gi=!1,Ui=0,C0=0;function Ce(){throw Error(E(321))}function Sc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function Cc(t,e,n,r,i,s){if(Fn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vs.current=t===null||t.memoizedState===null?N0:R0,t=n(r,i),gi){s=0;do{if(gi=!1,Ui=0,25<=s)throw Error(E(301));s+=1,he=ae=null,e.updateQueue=null,Vs.current=x0,t=n(r,i)}while(gi)}if(Vs.current=Eo,e=ae!==null&&ae.next!==null,Fn=0,he=ae=ee=null,wo=!1,e)throw Error(E(300));return t}function Ic(){var t=Ui!==0;return Ui=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=t:he=he.next=t,he}function Je(){if(ae===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=he===null?ee.memoizedState:he.next;if(e!==null)he=e,ae=t;else{if(t===null)throw Error(E(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},he===null?ee.memoizedState=he=t:he=he.next=t}return he}function zi(t,e){return typeof e=="function"?e(t):e}function ta(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Fn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ee.lanes|=d,Un|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ct(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Un|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function na(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Am(){}function Dm(t,e){var n=ee,r=Je(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,kc(bm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Bi(9,Lm.bind(null,n,r,i,e),void 0,null),me===null)throw Error(E(349));(Fn&30)!==0||Mm(n,e,i)}return i}function Mm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lm(t,e,n,r){e.value=n,e.getSnapshot=r,Fm(e)&&Um(t)}function bm(t,e,n){return n(function(){Fm(e)&&Um(t)})}function Fm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function Um(t){var e=At(t,1);e!==null&&at(e,t,1,-1)}function Oh(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},e.queue=t,t=t.dispatch=T0.bind(null,ee,t),[e.memoizedState,t]}function Bi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zm(){return Je().memoizedState}function Gs(t,e,n,r){var i=ht();ee.flags|=t,i.memoizedState=Bi(1|e,n,void 0,r===void 0?null:r)}function rl(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Sc(r,o.deps)){i.memoizedState=Bi(e,n,s,r);return}}ee.flags|=t,i.memoizedState=Bi(1|e,n,s,r)}function Ah(t,e){return Gs(8390656,8,t,e)}function kc(t,e){return rl(2048,8,t,e)}function Bm(t,e){return rl(4,2,t,e)}function Wm(t,e){return rl(4,4,t,e)}function jm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hm(t,e,n){return n=n!=null?n.concat([t]):null,rl(4,4,jm.bind(null,e,t),n)}function Tc(){}function $m(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Vm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gm(t,e,n){return(Fn&21)===0?(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n):(ct(n,e)||(n=qp(),ee.lanes|=n,Un|=n,t.baseState=!0),e)}function I0(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=ea.transition;ea.transition={};try{t(!1),e()}finally{H=n,ea.transition=r}}function Km(){return Je().memoizedState}function k0(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qm(t))qm(e,n);else if(n=km(t,e,n,r),n!==null){var i=xe();at(n,t,r,i),Ym(n,e,r)}}function T0(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qm(t))qm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,o)){var a=e.interleaved;a===null?(i.next=i,_c(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=km(t,e,i,r),n!==null&&(i=xe(),at(n,t,r,i),Ym(n,e,r))}}function Qm(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function qm(t,e){gi=wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ym(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rc(t,n)}}var Eo={readContext:Xe,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},N0={readContext:Xe,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:Ah,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gs(4194308,4,jm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gs(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=k0.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:Tc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=I0.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=ht();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),me===null)throw Error(E(349));(Fn&30)!==0||Mm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ah(bm.bind(null,r,s,t),[t]),r.flags|=2048,Bi(9,Lm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=me.identifierPrefix;if(J){var n=It,r=Ct;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ui++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=C0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R0={readContext:Xe,useCallback:$m,useContext:Xe,useEffect:kc,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Wm,useMemo:Vm,useReducer:ta,useRef:zm,useState:function(){return ta(zi)},useDebugValue:Tc,useDeferredValue:function(t){var e=Je();return Gm(e,ae.memoizedState,t)},useTransition:function(){var t=ta(zi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Am,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1},x0={readContext:Xe,useCallback:$m,useContext:Xe,useEffect:kc,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Wm,useMemo:Vm,useReducer:na,useRef:zm,useState:function(){return na(zi)},useDebugValue:Tc,useDeferredValue:function(t){var e=Je();return ae===null?e.memoizedState=t:Gm(e,ae.memoizedState,t)},useTransition:function(){var t=na(zi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Am,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1};function xr(t,e){try{var n="",r=e;do n+=ry(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ra(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ru(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Xm(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Co||(Co=!0,fu=r),ru(t,e)},n}function Jm(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ru(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ru(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new P0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$0.bind(null,t,e,n),e.then(t,t))}function Mh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lh(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var O0=Ft.ReactCurrentOwner,De=!1;function Re(t,e,n,r){e.child=t===null?Pm(e,null,n,r):Nr(e,t.child,n,r)}function bh(t,e,n,r,i){n=n.render;var s=e.ref;return gr(e,i),r=Cc(t,e,n,r,s,i),n=Ic(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(J&&n&&dc(e),e.flags|=1,Re(t,e,r,i),e.child)}function Fh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zm(t,e,s,r,i)):(t=Ys(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ai(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(De=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return iu(t,e,n,r,i)}function eg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(cr,Be),Be|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(cr,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(cr,Be),Be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(cr,Be),Be|=r;return Re(t,e,i,n),e.child}function tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function iu(t,e,n,r,i){var s=Fe(n)?Ln:Te.current;return s=kr(e,s),gr(e,i),n=Cc(t,e,n,r,s,i),r=Ic(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(J&&r&&dc(e),e.flags|=1,Re(t,e,n,i),e.child)}function Uh(t,e,n,r,i){if(Fe(n)){var s=!0;fo(e)}else s=!1;if(gr(e,i),e.stateNode===null)Ks(t,e),Rm(e,n,r),nu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Fe(n)?Ln:Te.current,u=kr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&xh(e,o,r,u),jt=!1;var h=e.memoizedState;o.state=h,vo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||be.current||jt?(typeof d=="function"&&(tu(e,n,d,r),a=e.memoizedState),(l=jt||Rh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Fe(n)?Ln:Te.current,a=kr(e,a));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&xh(e,o,r,a),jt=!1,h=e.memoizedState,o.state=h,vo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||be.current||jt?(typeof p=="function"&&(tu(e,n,p,r),_=e.memoizedState),(u=jt||Rh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return su(t,e,n,r,s,i)}function su(t,e,n,r,i,s){tg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ch(e,n,!1),Dt(t,e,s);r=e.stateNode,O0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Nr(e,t.child,null,s),e.child=Nr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&Ch(e,n,!0),e.child}function ng(t){var e=t.stateNode;e.pendingContext?Sh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sh(t,e.context,!1),yc(t,e.containerInfo)}function zh(t,e,n,r,i){return Tr(),fc(i),e.flags|=256,Re(t,e,n,r),e.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function rg(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(Z,i&1),t===null)return Za(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ol(o,r,0,null),t=On(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lu(n),e.memoizedState=ou,t):Nc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return A0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sn(l,s):(s=On(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ou,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nc(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function As(t,e,n,r){return r!==null&&fc(r),Nr(e,t.child,null,n),t=Nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function A0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ra(Error(E(422))),As(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ol({mode:"visible",children:r.children},i,0,null),s=On(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Nr(e,t.child,null,o),e.child.memoizedState=lu(o),e.memoizedState=ou,s);if((e.mode&1)===0)return As(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=ra(s,r,void 0),As(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),at(r,t,i,-1))}return Dc(),r=ra(Error(E(421))),As(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=V0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=en(i.nextSibling),je=e,J=!0,it=null,t!==null&&(Ge[Ke++]=Ct,Ge[Ke++]=It,Ge[Ke++]=bn,Ct=t.id,It=t.overflow,bn=e),e=Nc(e,r.children),e.flags|=4096,e)}function Bh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eu(t.return,e,n)}function ia(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ig(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=Z.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,n,e);else if(t.tag===19)Bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(Z,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ia(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ia(e,!0,n,null,s);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ks(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Un|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function D0(t,e,n){switch(e.tag){case 3:ng(e),Tr();break;case 5:Om(e);break;case 1:Fe(e.type)&&fo(e);break;case 4:yc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(go,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(Z,Z.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?rg(t,e,n):(Q(Z,Z.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);Q(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return ig(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,eg(t,e,n)}return Dt(t,e,n)}var sg,au,og,lg;sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};au=function(){};og=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(mt.current);var s=null;switch(n){case"input":i=Pa(t,i),r=Pa(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Da(t,i),r=Da(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=co)}La(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ki.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ki.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ti(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function M0(t,e,n){var r=e.pendingProps;switch(hc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Fe(e.type)&&ho(),Ie(e),null;case 3:return r=e.stateNode,Rr(),X(be),X(Te),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ps(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,it!==null&&(gu(it),it=null))),au(t,e),Ie(e),null;case 5:wc(e);var i=Tn(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)og(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ie(e),null}if(t=Tn(mt.current),Ps(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Li]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)Y(ci[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":qd(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Xd(r,s),Y("invalid",r)}La(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",""+l]):ki.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Es(r),Yd(r,s,!0);break;case"textarea":Es(r),Jd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=co)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Li]=r,sg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ba(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)Y(ci[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":qd(t,r),i=Pa(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Y("invalid",t);break;case"textarea":Xd(t,r),i=Da(t,r),Y("invalid",t);break;default:i=r}La(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Fp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ti(t,a):typeof a=="number"&&Ti(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ki.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&Xu(t,s,a,o))}switch(n){case"input":Es(t),Yd(t,r,!1);break;case"textarea":Es(t),Jd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)lg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Tn(Fi.current),Tn(mt.current),Ps(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=je,t!==null))switch(t.tag){case 3:xs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return Ie(e),null;case 13:if(X(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&We!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Im(),Tr(),e.flags|=98560,s=!1;else if(s=Ps(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ft]=e}else Tr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else it!==null&&(gu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Z.current&1)!==0?ue===0&&(ue=3):Dc())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Rr(),au(t,e),t===null&&Di(e.stateNode.containerInfo),Ie(e),null;case 10:return gc(e.type._context),Ie(e),null;case 17:return Fe(e.type)&&ho(),Ie(e),null;case 19:if(X(Z),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ti(s,!1);else{if(ue!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=yo(t),o!==null){for(e.flags|=128,ti(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Pr&&(e.flags|=128,r=!0,ti(s,!1),e.lanes=4194304)}else{if(!r)if(t=yo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ie(e),null}else 2*oe()-s.renderingStartTime>Pr&&n!==1073741824&&(e.flags|=128,r=!0,ti(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=Z.current,Q(Z,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Ac(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Be&1073741824)!==0&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function L0(t,e){switch(hc(e),e.tag){case 1:return Fe(e.type)&&ho(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rr(),X(be),X(Te),Ec(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return wc(e),null;case 13:if(X(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Tr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Z),null;case 4:return Rr(),null;case 10:return gc(e.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Ds=!1,ke=!1,b0=typeof WeakSet=="function"?WeakSet:Set,I=null;function ur(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function uu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Wh=!1;function F0(t,e){if(Ga=lo,t=dm(),cc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)h=c,c=p;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(p=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:t,selectionRange:n},lo=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,R=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:nt(e.type,y),R);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=Wh,Wh=!1,_}function _i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uu(e,n,s)}i=i.next}while(i!==r)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ag(t){var e=t.alternate;e!==null&&(t.alternate=null,ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Li],delete e[Ya],delete e[y0],delete e[w0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ug(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=co));else if(r!==4&&(t=t.child,t!==null))for(du(t,e,n),t=t.sibling;t!==null;)du(t,e,n),t=t.sibling}function hu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hu(t,e,n),t=t.sibling;t!==null;)hu(t,e,n),t=t.sibling}var ge=null,rt=!1;function zt(t,e,n){for(n=n.child;n!==null;)cg(t,e,n),n=n.sibling}function cg(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:ke||ur(n,e);case 6:var r=ge,i=rt;ge=null,zt(t,e,n),ge=r,rt=i,ge!==null&&(rt?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(rt?(t=ge,n=n.stateNode,t.nodeType===8?Xl(t.parentNode,n):t.nodeType===1&&Xl(t,n),Pi(t)):Xl(ge,n.stateNode));break;case 4:r=ge,i=rt,ge=n.stateNode.containerInfo,rt=!0,zt(t,e,n),ge=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&uu(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!ke&&(ur(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,zt(t,e,n),ke=r):zt(t,e,n);break;default:zt(t,e,n)}}function Hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b0),e.forEach(function(r){var i=G0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,rt=!1;break e;case 3:ge=l.stateNode.containerInfo,rt=!0;break e;case 4:ge=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ge===null)throw Error(E(160));cg(s,o,i),ge=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dg(e,t),e=e.sibling}function dg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),dt(t),r&4){try{_i(3,t,t.return),il(3,t)}catch(y){ne(t,t.return,y)}try{_i(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:tt(e,t),dt(t),r&512&&n!==null&&ur(n,n.return);break;case 5:if(tt(e,t),dt(t),r&512&&n!==null&&ur(n,n.return),t.flags&32){var i=t.stateNode;try{Ti(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ap(i,s),ba(l,o);var u=ba(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Fp(i,c):d==="dangerouslySetInnerHTML"?Lp(i,c):d==="children"?Ti(i,c):Xu(i,d,c,u)}switch(l){case"input":Oa(i,s);break;case"textarea":Dp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hr(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?hr(i,!!s.multiple,s.defaultValue,!0):hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Li]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(tt(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(tt(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:tt(e,t),dt(t);break;case 13:tt(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pc=oe())),r&4&&Hh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||d,tt(e,t),ke=u):tt(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(I=t,d=t.child;d!==null;){for(c=I=d;I!==null;){switch(h=I,p=h.child,h.tag){case 0:case 11:case 14:case 15:_i(4,h,h.return);break;case 1:ur(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:ur(h,h.return);break;case 22:if(h.memoizedState!==null){Vh(c);continue}}p!==null?(p.return=h,I=p):Vh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=bp("display",o))}catch(y){ne(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ne(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:tt(e,t),dt(t),r&4&&Hh(t);break;case 21:break;default:tt(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ug(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var s=jh(t);hu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=jh(t);du(t,l,o);break;default:throw Error(E(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U0(t,e,n){I=t,hg(t)}function hg(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ds;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=Ds;var u=ke;if(Ds=o,(ke=a)&&!u)for(I=i;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?Gh(i):a!==null?(a.return=o,I=a):Gh(i);for(;s!==null;)I=s,hg(s),s=s.sibling;I=i,Ds=l,ke=u}$h(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):$h(t)}}function $h(t){for(;I!==null;){var e=I;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ke||il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Pi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ke||e.flags&512&&cu(e)}catch(h){ne(e,e.return,h)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Vh(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Gh(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{cu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{cu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var z0=Math.ceil,So=Ft.ReactCurrentDispatcher,Rc=Ft.ReactCurrentOwner,Ye=Ft.ReactCurrentBatchConfig,W=0,me=null,le=null,ye=0,Be=0,cr=mn(0),ue=0,Wi=null,Un=0,sl=0,xc=0,vi=null,Ae=null,Pc=0,Pr=1/0,wt=null,Co=!1,fu=null,nn=null,Ms=!1,qt=null,Io=0,yi=0,pu=null,Qs=-1,qs=0;function xe(){return(W&6)!==0?oe():Qs!==-1?Qs:Qs=oe()}function rn(t){return(t.mode&1)===0?1:(W&2)!==0&&ye!==0?ye&-ye:S0.transition!==null?(qs===0&&(qs=qp()),qs):(t=H,t!==0||(t=window.event,t=t===void 0?16:nm(t.type)),t)}function at(t,e,n,r){if(50<yi)throw yi=0,pu=null,Error(E(185));rs(t,n,r),((W&2)===0||t!==me)&&(t===me&&((W&2)===0&&(sl|=n),ue===4&&$t(t,ye)),Ue(t,r),n===1&&W===0&&(e.mode&1)===0&&(Pr=oe()+500,tl&&gn()))}function Ue(t,e){var n=t.callbackNode;Sy(t,e);var r=oo(t,t===me?ye:0);if(r===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?E0(Kh.bind(null,t)):Em(Kh.bind(null,t)),_0(function(){(W&6)===0&&gn()}),n=null;else{switch(Yp(r)){case 1:n=nc;break;case 4:n=Kp;break;case 16:n=so;break;case 536870912:n=Qp;break;default:n=so}n=wg(n,fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fg(t,e){if(Qs=-1,qs=0,(W&6)!==0)throw Error(E(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=oo(t,t===me?ye:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ko(t,r);else{e=r;var i=W;W|=2;var s=mg();(me!==t||ye!==e)&&(wt=null,Pr=oe()+500,Pn(t,e));do try{j0();break}catch(l){pg(t,l)}while(1);mc(),So.current=s,W=i,le!==null?e=0:(me=null,ye=0,e=ue)}if(e!==0){if(e===2&&(i=Wa(t),i!==0&&(r=i,e=mu(t,i))),e===1)throw n=Wi,Pn(t,0),$t(t,r),Ue(t,oe()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,(r&30)===0&&!B0(i)&&(e=ko(t,r),e===2&&(s=Wa(t),s!==0&&(r=s,e=mu(t,s))),e===1))throw n=Wi,Pn(t,0),$t(t,r),Ue(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:En(t,Ae,wt);break;case 3:if($t(t,r),(r&130023424)===r&&(e=Pc+500-oe(),10<e)){if(oo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qa(En.bind(null,t,Ae,wt),e);break}En(t,Ae,wt);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z0(r/1960))-r,10<r){t.timeoutHandle=qa(En.bind(null,t,Ae,wt),r);break}En(t,Ae,wt);break;case 5:En(t,Ae,wt);break;default:throw Error(E(329))}}}return Ue(t,oe()),t.callbackNode===n?fg.bind(null,t):null}function mu(t,e){var n=vi;return t.current.memoizedState.isDehydrated&&(Pn(t,e).flags|=256),t=ko(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&gu(e)),t}function gu(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function B0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~xc,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function Kh(t){if((W&6)!==0)throw Error(E(327));_r();var e=oo(t,0);if((e&1)===0)return Ue(t,oe()),null;var n=ko(t,e);if(t.tag!==0&&n===2){var r=Wa(t);r!==0&&(e=r,n=mu(t,r))}if(n===1)throw n=Wi,Pn(t,0),$t(t,e),Ue(t,oe()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,En(t,Ae,wt),Ue(t,oe()),null}function Oc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Pr=oe()+500,tl&&gn())}}function zn(t){qt!==null&&qt.tag===0&&(W&6)===0&&_r();var e=W;W|=1;var n=Ye.transition,r=H;try{if(Ye.transition=null,H=1,t)return t()}finally{H=r,Ye.transition=n,W=e,(W&6)===0&&gn()}}function Ac(){Be=cr.current,X(cr)}function Pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(hc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:Rr(),X(be),X(Te),Ec();break;case 5:wc(r);break;case 4:Rr();break;case 13:X(Z);break;case 19:X(Z);break;case 10:gc(r.type._context);break;case 22:case 23:Ac()}n=n.return}if(me=t,le=t=sn(t.current,null),ye=Be=e,ue=0,Wi=null,xc=sl=Un=0,Ae=vi=null,kn!==null){for(e=0;e<kn.length;e++)if(n=kn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}kn=null}return t}function pg(t,e){do{var n=le;try{if(mc(),Vs.current=Eo,wo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wo=!1}if(Fn=0,he=ae=ee=null,gi=!1,Ui=0,Rc.current=null,n===null||n.return===null){ue=1,Wi=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Mh(o);if(p!==null){p.flags&=-257,Lh(p,o,l,s,e),p.mode&1&&Dh(s,u,e),e=p,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if((e&1)===0){Dh(s,u,e),Dc();break e}a=Error(E(426))}}else if(J&&l.mode&1){var R=Mh(o);if(R!==null){(R.flags&65536)===0&&(R.flags|=256),Lh(R,o,l,s,e),fc(xr(a,l));break e}}s=a=xr(a,l),ue!==4&&(ue=2),vi===null?vi=[s]:vi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Xm(s,a,e);Th(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Jm(s,l,e);Th(s,w);break e}}s=s.return}while(s!==null)}_g(n)}catch(C){e=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function mg(){var t=So.current;return So.current=Eo,t===null?Eo:t}function Dc(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||(Un&268435455)===0&&(sl&268435455)===0||$t(me,ye)}function ko(t,e){var n=W;W|=2;var r=mg();(me!==t||ye!==e)&&(wt=null,Pn(t,e));do try{W0();break}catch(i){pg(t,i)}while(1);if(mc(),W=n,So.current=r,le!==null)throw Error(E(261));return me=null,ye=0,ue}function W0(){for(;le!==null;)gg(le)}function j0(){for(;le!==null&&!fy();)gg(le)}function gg(t){var e=yg(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?_g(t):le=e,Rc.current=null}function _g(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=M0(n,e,Be),n!==null){le=n;return}}else{if(n=L0(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,le=null;return}}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);ue===0&&(ue=5)}function En(t,e,n){var r=H,i=Ye.transition;try{Ye.transition=null,H=1,H0(t,e,n,r)}finally{Ye.transition=i,H=r}return null}function H0(t,e,n,r){do _r();while(qt!==null);if((W&6)!==0)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cy(t,s),t===me&&(le=me=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ms||(Ms=!0,wg(so,function(){return _r(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ye.transition,Ye.transition=null;var o=H;H=1;var l=W;W|=4,Rc.current=null,F0(t,n),dg(n,t),u0(Ka),lo=!!Ga,Ka=Ga=null,t.current=n,U0(n),py(),W=l,H=o,Ye.transition=s}else t.current=n;if(Ms&&(Ms=!1,qt=t,Io=i),s=t.pendingLanes,s===0&&(nn=null),_y(n.stateNode),Ue(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Co)throw Co=!1,t=fu,fu=null,t;return(Io&1)!==0&&t.tag!==0&&_r(),s=t.pendingLanes,(s&1)!==0?t===pu?yi++:(yi=0,pu=t):yi=0,gn(),null}function _r(){if(qt!==null){var t=Yp(Io),e=Ye.transition,n=H;try{if(Ye.transition=null,H=16>t?16:t,qt===null)var r=!1;else{if(t=qt,qt=null,Io=0,(W&6)!==0)throw Error(E(331));var i=W;for(W|=4,I=t.current;I!==null;){var s=I,o=s.child;if((I.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:_i(8,d,s)}var c=d.child;if(c!==null)c.return=d,I=c;else for(;I!==null;){d=I;var h=d.sibling,p=d.return;if(ag(d),d===u){I=null;break}if(h!==null){h.return=p,I=h;break}I=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:_i(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,I=m;break e}I=s.return}}var f=t.current;for(I=f;I!==null;){o=I;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,I=g;else e:for(o=f;I!==null;){if(l=I,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(C){ne(l,l.return,C)}if(l===o){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(W=i,gn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Yo,t)}catch{}r=!0}return r}finally{H=n,Ye.transition=e}}return!1}function Qh(t,e,n){e=xr(n,e),e=Xm(t,e,1),t=tn(t,e,1),e=xe(),t!==null&&(rs(t,1,e),Ue(t,e))}function ne(t,e,n){if(t.tag===3)Qh(t,t,n);else for(;e!==null;){if(e.tag===3){Qh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=xr(n,t),t=Jm(e,t,1),e=tn(e,t,1),t=xe(),e!==null&&(rs(e,1,t),Ue(e,t));break}}e=e.return}}function $0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>oe()-Pc?Pn(t,0):xc|=n),Ue(t,e)}function vg(t,e){e===0&&((t.mode&1)===0?e=1:(e=Is,Is<<=1,(Is&130023424)===0&&(Is=4194304)));var n=xe();t=At(t,e),t!==null&&(rs(t,e,n),Ue(t,n))}function V0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vg(t,n)}function G0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),vg(t,n)}var yg;yg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)De=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return De=!1,D0(t,e,n);De=(t.flags&131072)!==0}else De=!1,J&&(e.flags&1048576)!==0&&Sm(e,mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ks(t,e),t=e.pendingProps;var i=kr(e,Te.current);gr(e,n),i=Cc(null,e,r,t,i,n);var s=Ic();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,fo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vc(e),i.updater=nl,e.stateNode=i,i._reactInternals=e,nu(e,r,t,n),e=su(null,e,r,!0,s,n)):(e.tag=0,J&&s&&dc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ks(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Q0(r),t=nt(r,t),i){case 0:e=iu(null,e,r,t,n);break e;case 1:e=Uh(null,e,r,t,n);break e;case 11:e=bh(null,e,r,t,n);break e;case 14:e=Fh(null,e,r,nt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),iu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Uh(t,e,r,i,n);case 3:e:{if(ng(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Tm(t,e),vo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xr(Error(E(423)),e),e=zh(t,e,r,n,i);break e}else if(r!==i){i=xr(Error(E(424)),e),e=zh(t,e,r,n,i);break e}else for(We=en(e.stateNode.containerInfo.firstChild),je=e,J=!0,it=null,n=Pm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){e=Dt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Om(e),t===null&&Za(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qa(r,i)?o=null:s!==null&&Qa(r,s)&&(e.flags|=32),tg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Za(e),null;case 13:return rg(t,e,n);case 4:return yc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Nr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),bh(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(go,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!be.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),eu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gr(e,n),i=Xe(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),Fh(t,e,r,i,n);case 15:return Zm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Ks(t,e),e.tag=1,Fe(r)?(t=!0,fo(e)):t=!1,gr(e,n),Rm(e,r,i),nu(e,r,i,n),su(null,e,r,!0,t,n);case 19:return ig(t,e,n);case 22:return eg(t,e,n)}throw Error(E(156,e.tag))};function wg(t,e){return Gp(t,e)}function K0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new K0(t,e,n,r)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Q0(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zu)return 11;if(t===ec)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ys(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case er:return On(n.children,i,s,e);case Ju:o=8,i|=8;break;case Ta:return t=Qe(12,n,e,i|2),t.elementType=Ta,t.lanes=s,t;case Na:return t=Qe(13,n,e,i),t.elementType=Na,t.lanes=s,t;case Ra:return t=Qe(19,n,e,i),t.elementType=Ra,t.lanes=s,t;case xp:return ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Np:o=10;break e;case Rp:o=9;break e;case Zu:o=11;break e;case ec:o=14;break e;case Wt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function On(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function ol(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=xp,t.lanes=n,t.stateNode={isHidden:!1},t}function sa(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function q0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lc(t,e,n,r,i,s,o,l,a){return t=new q0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(s),t}function Y0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Eg(t){if(!t)return dn;t=t._reactInternals;e:{if(Qn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Fe(n))return wm(t,n,e)}return e}function Sg(t,e,n,r,i,s,o,l,a){return t=Lc(n,r,!0,t,i,s,o,l,a),t.context=Eg(null),n=t.current,r=xe(),i=rn(n),s=Rt(r,i),s.callback=e!=null?e:null,tn(n,s,i),t.current.lanes=i,rs(t,i,r),Ue(t,r),t}function ll(t,e,n,r){var i=e.current,s=xe(),o=rn(i);return n=Eg(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(at(t,i,o,s),$s(t,i,o)),o}function To(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bc(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function X0(){return null}var Cg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fc(t){this._internalRoot=t}al.prototype.render=Fc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ll(t,e,null,null)};al.prototype.unmount=Fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zn(function(){ll(null,t,null,null)}),e[Ot]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&tm(t)}};function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function J0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=To(o);s.call(u)}}var o=Sg(e,r,t,0,null,!1,!1,"",Yh);return t._reactRootContainer=o,t[Ot]=o.current,Di(t.nodeType===8?t.parentNode:t),zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=To(a);l.call(u)}}var a=Lc(t,0,!1,null,null,!1,!1,"",Yh);return t._reactRootContainer=a,t[Ot]=a.current,Di(t.nodeType===8?t.parentNode:t),zn(function(){ll(e,a,n,r)}),a}function cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=To(o);l.call(a)}}ll(e,o,t,i)}else o=J0(n,e,t,i,r);return To(o)}Xp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ui(e.pendingLanes);n!==0&&(rc(e,n|1),Ue(e,oe()),(W&6)===0&&(Pr=oe()+500,gn()))}break;case 13:zn(function(){var r=At(t,1);if(r!==null){var i=xe();at(r,t,1,i)}}),bc(t,1)}};ic=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=xe();at(e,t,134217728,n)}bc(t,134217728)}};Jp=function(t){if(t.tag===13){var e=rn(t),n=At(t,e);if(n!==null){var r=xe();at(n,t,e,r)}bc(t,e)}};Zp=function(){return H};em=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Ua=function(t,e,n){switch(e){case"input":if(Oa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=el(r);if(!i)throw Error(E(90));Op(r),Oa(r,i)}}}break;case"textarea":Dp(t,n);break;case"select":e=n.value,e!=null&&hr(t,!!n.multiple,e,!1)}};Bp=Oc;Wp=zn;var Z0={usingClientEntryPoint:!1,Events:[ss,ir,el,Up,zp,Oc]},ni={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ew={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$p(t),t===null?null:t.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Yo=Ls.inject(ew),pt=Ls}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uc(e))throw Error(E(200));return Y0(t,e,null,n)};$e.createRoot=function(t,e){if(!Uc(t))throw Error(E(299));var n=!1,r="",i=Cg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lc(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Di(t.nodeType===8?t.parentNode:t),new Fc(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=$p(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return zn(t)};$e.hydrate=function(t,e,n){if(!ul(e))throw Error(E(200));return cl(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!Uc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sg(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Ot]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new al(e)};$e.render=function(t,e,n){if(!ul(e))throw Error(E(200));return cl(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!ul(t))throw Error(E(40));return t._reactRootContainer?(zn(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};$e.unstable_batchedUpdates=Oc;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ul(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return cl(t,e,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$e})(Sp);var Xh=Sp.exports;Ia.createRoot=Xh.createRoot,Ia.hydrateRoot=Xh.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ji.apply(this,arguments)}var Yt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yt||(Yt={}));const Jh="popstate";function tw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return _u("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zc(i)}return iw(e,n,null,t)}function nw(){return Math.random().toString(36).substr(2,8)}function Zh(t){return{usr:t.state,key:t.key}}function _u(t,e,n,r){return n===void 0&&(n=null),ji({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wr(e):e,{state:n,key:e&&e.key||r||nw()})}function zc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rw(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:zc(t);return new URL(n,e)}function iw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Yt.Pop,a=null;function u(){l=Yt.Pop,a&&a({action:l,location:h.location})}function d(p,_){l=Yt.Push;let y=_u(h.location,p,_);n&&n(y,p);let R=Zh(y),m=h.createHref(y);try{o.pushState(R,"",m)}catch{i.location.assign(m)}s&&a&&a({action:l,location:h.location})}function c(p,_){l=Yt.Replace;let y=_u(h.location,p,_);n&&n(y,p);let R=Zh(y),m=h.createHref(y);o.replaceState(R,"",m),s&&a&&a({action:l,location:h.location})}let h={get action(){return l},get location(){return t(i,o)},listen(p){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Jh,u),a=p,()=>{i.removeEventListener(Jh,u),a=null}},createHref(p){return e(i,p)},encodeLocation(p){let _=rw(zc(p));return ji({},p,{pathname:_.pathname,search:_.search,hash:_.hash})},push:d,replace:c,go(p){return o.go(p)}};return h}var ef;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ef||(ef={}));function sw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Wr(e):e,i=kg(r.pathname||"/",n);if(i==null)return null;let s=Ig(t);ow(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=mw(s[l],vw(i));return o}function Ig(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(we(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=An([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(we(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Ig(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:fw(l,i.index),routesMeta:a})}),e}function ow(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lw=/^:\w+$/,aw=3,uw=2,cw=1,dw=10,hw=-2,tf=t=>t==="*";function fw(t,e){let n=t.split("/"),r=n.length;return n.some(tf)&&(r+=hw),e&&(r+=uw),n.filter(i=>!tf(i)).reduce((i,s)=>i+(lw.test(s)?aw:s===""?cw:dw),r)}function pw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=gw({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:An([i,d.pathname]),pathnameBase:Iw(An([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=An([i,d.pathnameBase]))}return s}function gw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_w(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=yw(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function _w(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vw(t){try{return decodeURI(t)}catch(e){return Bc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yw(t,e){try{return decodeURIComponent(t)}catch(n){return Bc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function kg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ww(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Wr(t):t;return{pathname:n?n.startsWith("/")?n:Ew(n,e):e,search:kw(r),hash:Tw(i)}}function Ew(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function la(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Wr(t):(i=ji({},t),we(!i.pathname||!i.pathname.includes("?"),la("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),la("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),la("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=ww(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const An=t=>t.join("/").replace(/\/\/+/g,"/"),Iw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Tw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Nw{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function Rw(t){return t instanceof Nw}const xw=new Set(["POST","PUT","PATCH","DELETE"]);[...xw];var dl={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pw=P.exports,Ow=Symbol.for("react.element"),Aw=Symbol.for("react.fragment"),Dw=Object.prototype.hasOwnProperty,Mw=Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lw={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Dw.call(e,r)&&!Lw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ow,type:t,key:s,ref:o,props:i,_owner:Mw.current}}hl.Fragment=Aw;hl.jsx=Tg;hl.jsxs=Tg;(function(t){t.exports=hl})(dl);const Wc=dl.exports.Fragment,v=dl.exports.jsx,M=dl.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vu.apply(this,arguments)}function bw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Fw=typeof Object.is=="function"?Object.is:bw,{useState:Uw,useEffect:zw,useLayoutEffect:Bw,useDebugValue:Ww}=Ca;function jw(t,e,n){const r=e(),[{inst:i},s]=Uw({inst:{value:r,getSnapshot:e}});return Bw(()=>{i.value=r,i.getSnapshot=e,aa(i)&&s({inst:i})},[t,r,e]),zw(()=>(aa(i)&&s({inst:i}),t(()=>{aa(i)&&s({inst:i})})),[t]),Ww(r),r}function aa(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Fw(n,r)}catch{return!0}}function Hw(t,e,n){return e()}const $w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vw=!$w,Gw=Vw?Hw:jw;"useSyncExternalStore"in Ca&&(t=>t.useSyncExternalStore)(Ca);const Kw=P.exports.createContext(null),Qw=P.exports.createContext(null),Ng=P.exports.createContext(null),Rg=P.exports.createContext(null),fl=P.exports.createContext(null),ls=P.exports.createContext({outlet:null,matches:[]}),xg=P.exports.createContext(null);function pl(){return P.exports.useContext(fl)!=null}function Pg(){return pl()||we(!1),P.exports.useContext(fl).location}function ml(){pl()||we(!1);let{basename:t,navigator:e}=P.exports.useContext(Rg),{matches:n}=P.exports.useContext(ls),{pathname:r}=Pg(),i=JSON.stringify(Sw(n).map(l=>l.pathnameBase)),s=P.exports.useRef(!1);return P.exports.useEffect(()=>{s.current=!0}),P.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=Cw(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:An([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function Og(){let{matches:t}=P.exports.useContext(ls),e=t[t.length-1];return e?e.params:{}}function qw(t,e){pl()||we(!1);let n=P.exports.useContext(Ng),{matches:r}=P.exports.useContext(ls),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=Pg(),a;if(e){var u;let _=typeof e=="string"?Wr(e):e;o==="/"||((u=_.pathname)==null?void 0:u.startsWith(o))||we(!1),a=_}else a=l;let d=a.pathname||"/",c=o==="/"?d:d.slice(o.length)||"/",h=sw(t,{pathname:c}),p=Zw(h&&h.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:An([o,_.pathname]),pathnameBase:_.pathnameBase==="/"?o:An([o,_.pathnameBase])})),r,n||void 0);return e&&p?v(fl.Provider,{value:{location:vu({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:Yt.Pop},children:p}):p}function Yw(){let t=tE(),e=Rw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return M(Wc,{children:[v("h2",{children:"Unhandled Thrown Error!"}),v("h3",{style:{fontStyle:"italic"},children:e}),n?v("pre",{style:i,children:n}):null,v("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),M("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",v("code",{style:s,children:"errorElement"})," props on\xA0",v("code",{style:s,children:"<Route>"})]})]})}class Xw extends P.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?v(xg.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Jw(t){let{routeContext:e,match:n,children:r}=t,i=P.exports.useContext(Kw);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),v(ls.Provider,{value:e,children:r})}function Zw(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||we(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||v(Yw,{}):null,d=()=>v(Jw,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?v(Xw,{location:n.location,component:u,error:a,children:d()}):d()},null)}var nf;(function(t){t.UseRevalidator="useRevalidator"})(nf||(nf={}));var yu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(yu||(yu={}));function eE(t){let e=P.exports.useContext(Ng);return e||we(!1),e}function tE(){var t;let e=P.exports.useContext(xg),n=eE(yu.UseRouteError),r=P.exports.useContext(ls),i=r.matches[r.matches.length-1];return e||(r||we(!1),i.route.id||we(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Xs(t){we(!1)}function nE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:s,static:o=!1}=t;pl()&&we(!1);let l=e.replace(/^\/*/,"/"),a=P.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:p="default"}=r,_=P.exports.useMemo(()=>{let y=kg(u,l);return y==null?null:{pathname:y,search:d,hash:c,state:h,key:p}},[l,u,d,c,h,p]);return _==null?null:v(Rg.Provider,{value:a,children:v(fl.Provider,{children:n,value:{location:_,navigationType:i}})})}function rE(t){let{children:e,location:n}=t,r=P.exports.useContext(Qw),i=r&&!e?r.router.routes:wu(e);return qw(i,n)}var rf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(rf||(rf={}));new Promise(()=>{});function wu(t,e){e===void 0&&(e=[]);let n=[];return P.exports.Children.forEach(t,(r,i)=>{if(!P.exports.isValidElement(r))return;if(r.type===P.exports.Fragment){n.push.apply(n,wu(r.props.children,e));return}r.type!==Xs&&we(!1),!r.props.index||!r.props.children||we(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=wu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iE(t){let{basename:e,children:n,window:r}=t,i=P.exports.useRef();i.current==null&&(i.current=tw({window:r,v5Compat:!0}));let s=i.current,[o,l]=P.exports.useState({action:s.action,location:s.location});return P.exports.useLayoutEffect(()=>s.listen(l),[s]),v(nE,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var sf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(sf||(sf={}));var of;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(of||(of={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw jr(e)},jr=function(t){return new Error("Firebase Database ("+Ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(h=64)),r.push(n[d],n[c],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const p=l<<4&240|u>>2;if(r.push(p),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Mg=function(t){const e=Dg(t);return jc.encodeByteArray(e,!0)},No=function(t){return Mg(t).replace(/\./g,"")},Ro=function(t){try{return jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t){return Lg(void 0,t)}function Lg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lE(n)||(t[n]=Lg(t[n],e[n]));return t}function lE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function aE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uE(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fg(){return Ag.NODE_ADMIN===!0}function cE(){return typeof indexedDB=="object"}function dE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function hE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=()=>hE().__FIREBASE_DEFAULTS__,pE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ro(t[1]);return e&&JSON.parse(e)},$c=()=>{try{return fE()||pE()||mE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ug=t=>{var e,n;return(n=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gE=t=>{const e=Ug(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_E=()=>{var t;return(t=$c())===null||t===void 0?void 0:t.config},zg=t=>{var e;return(e=$c())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[No(JSON.stringify(n)),No(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yE,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,r)}}function wE(t,e){return t.replace(EE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Hi(Ro(s[0])||""),n=Hi(Ro(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},SE=function(t){const e=Bg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CE=function(t){const e=Bg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Or(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Eu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lf(s)&&lf(o)){if(!Po(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kE(t,e){const n=new TE(t,e);return n.subscribe.bind(n)}class TE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}function Vc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_l=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OE(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PE(t){return t===Sn?void 0:t}function OE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const DE={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ME=V.INFO,LE={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},bE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=ME,this._logHandler=bE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const FE=(t,e)=>e.some(n=>t instanceof n);let af,uf;function UE(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,Su=new WeakMap,jg=new WeakMap,ca=new WeakMap,Kc=new WeakMap;function BE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wg.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function WE(t){if(Su.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Su.set(t,e)}let Cu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jE(t){Cu=t(Cu)}function HE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(da(this),e,...n);return jg.set(r,e.sort?e.sort():[e]),on(r)}:zE().includes(t)?function(...e){return t.apply(da(this),e),on(Wg.get(this))}:function(...e){return on(t.apply(da(this),e))}}function $E(t){return typeof t=="function"?HE(t):(t instanceof IDBTransaction&&WE(t),FE(t,UE())?new Proxy(t,Cu):t)}function on(t){if(t instanceof IDBRequest)return BE(t);if(ca.has(t))return ca.get(t);const e=$E(t);return e!==t&&(ca.set(t,e),Kc.set(e,t)),e}const da=t=>Kc.get(t);function VE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=on(o);return r&&o.addEventListener("upgradeneeded",a=>{r(on(o.result),a.oldVersion,a.newVersion,on(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const GE=["get","getKey","getAll","getAllKeys","count"],KE=["put","add","delete","clear"],ha=new Map;function cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ha.get(e))return ha.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ha.set(e,s),s}jE(t=>({...t,get:(e,n,r)=>cf(e,n)||t.get(e,n,r),has:(e,n)=>!!cf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Iu="@firebase/app",df="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Gc("@firebase/app"),YE="@firebase/app-compat",XE="@firebase/analytics-compat",JE="@firebase/analytics",ZE="@firebase/app-check-compat",eS="@firebase/app-check",tS="@firebase/auth",nS="@firebase/auth-compat",rS="@firebase/database",iS="@firebase/database-compat",sS="@firebase/functions",oS="@firebase/functions-compat",lS="@firebase/installations",aS="@firebase/installations-compat",uS="@firebase/messaging",cS="@firebase/messaging-compat",dS="@firebase/performance",hS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",_S="@firebase/firestore",vS="@firebase/firestore-compat",yS="firebase",wS="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="[DEFAULT]",ES={[Iu]:"fire-core",[YE]:"fire-core-compat",[JE]:"fire-analytics",[XE]:"fire-analytics-compat",[eS]:"fire-app-check",[ZE]:"fire-app-check-compat",[tS]:"fire-auth",[nS]:"fire-auth-compat",[rS]:"fire-rtdb",[iS]:"fire-rtdb-compat",[sS]:"fire-fn",[oS]:"fire-fn-compat",[lS]:"fire-iid",[aS]:"fire-iid-compat",[uS]:"fire-fcm",[cS]:"fire-fcm-compat",[dS]:"fire-perf",[hS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[_S]:"fire-fst",[vS]:"fire-fst-compat","fire-js":"fire-js",[yS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,Tu=new Map;function SS(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ar(t){const e=t.name;if(Tu.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Tu.set(e,t);for(const n of Oo.values())SS(n,t);return!0}function Qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new as("app","Firebase",CS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=wS;function Hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ku,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=_E()),!n)throw ln.create("no-options");const s=Oo.get(i);if(s){if(Po(n,s.options)&&Po(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new AE(i);for(const a of Tu.values())o.addComponent(a);const l=new IS(n,r,o);return Oo.set(i,l),l}function $g(t=ku){const e=Oo.get(t);if(!e&&t===ku)return Hg();if(!e)throw ln.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=ES[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}Ar(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebase-heartbeat-database",TS=1,$i="firebase-heartbeat-store";let fa=null;function Vg(){return fa||(fa=VE(kS,TS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),fa}async function NS(t){var e;try{return(await Vg()).transaction($i).objectStore($i).get(Gg(t))}catch(n){if(n instanceof _n)Wn.warn(n.message);else{const r=ln.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Wn.warn(r.message)}}}async function hf(t,e){var n;try{const i=(await Vg()).transaction($i,"readwrite");return await i.objectStore($i).put(e,Gg(t)),i.done}catch(r){if(r instanceof _n)Wn.warn(r.message);else{const i=ln.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Wn.warn(i.message)}}}function Gg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=1024,xS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=xS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ff(),{heartbeatsToSend:n,unsentEntries:r}=OS(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ff(){return new Date().toISOString().substring(0,10)}function OS(t,e=RS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cE()?dE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pf(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){Ar(new Bn("platform-logger",e=>new QE(e),"PRIVATE")),Ar(new Bn("heartbeat",e=>new PS(e),"PRIVATE")),an(Iu,df,t),an(Iu,df,"esm2017"),an("fire-js","")}DS("");var MS="firebase",LS="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(MS,LS,"app");const mf="@firebase/database",gf="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg="";function bS(t){Kg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FS(e)}}catch{}return new US},Nn=Qg("localStorage"),Nu=Qg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Gc("@firebase/database"),zS=function(){let t=1;return function(){return t++}}(),qg=function(t){const e=RE(t),n=new IE;n.update(e);const r=n.digest();return jc.encodeByteArray(r)},cs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=cs.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Dn=null,_f=!0;const BS=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vr.logLevel=V.VERBOSE,Dn=vr.log.bind(vr),e&&Nu.set("logging_enabled",!0)):typeof t=="function"?Dn=t:(Dn=null,Nu.remove("logging_enabled"))},_e=function(...t){if(_f===!0&&(_f=!1,Dn===null&&Nu.get("logging_enabled")===!0&&BS(!0)),Dn){const e=cs.apply(null,t);Dn(e)}},ds=function(t){return function(...e){_e(t,...e)}},Ru=function(...t){const e="FIREBASE INTERNAL ERROR: "+cs(...t);vr.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${cs(...t)}`;throw vr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+cs(...t);vr.warn(e)},WS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dr="[MIN_NAME]",jn="[MAX_NAME]",qn=function(t,e){if(t===e)return 0;if(t===Dr||e===jn)return-1;if(e===Dr||t===jn)return 1;{const n=vf(t),r=vf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},HS=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Yc=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=Yc(t[e[r]]);return n+="}",n},Yg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xg=function(t){S(!qc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},$S=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function GS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const KS=new RegExp("^-?(0*)\\d{1,10}$"),QS=-2147483648,qS=2147483647,vf=function(t){if(KS.test(t)){const e=Number(t);if(e>=QS&&e<=qS)return e}return null},$r=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},YS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="5",Jg="v",Zg="s",e_="r",t_="f",n_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,r_="ls",i_="p",xu="ac",s_="websocket",o_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ZS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function a_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===s_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===o_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ZS(t)&&(n.ns=t.namespace);const i=[];return Se(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={},ma={};function Jc(t){const e=t.toString();return pa[e]||(pa[e]=new eC),pa[e]}function tC(t,e){const n=t.toString();return ma[n]||(ma[n]=e()),ma[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$r(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="start",rC="close",iC="pLPCommand",sC="pRTLPCB",u_="id",c_="pw",d_="ser",oC="cb",lC="seg",aC="ts",uC="d",cC="dframe",h_=1870,f_=30,dC=h_-f_,hC=25e3,fC=3e4;class dr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ds(e),this.stats_=Jc(n),this.urlFn=a=>(this.appCheckToken&&(a[xu]=this.appCheckToken),a_(n,o_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fC)),jS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yf)this.id=l,this.password=a;else if(o===rC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[yf]="t",r[d_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[oC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jg]=Xc,this.transportSessionId&&(r[Zg]=this.transportSessionId),this.lastSessionId&&(r[r_]=this.lastSessionId),this.applicationId&&(r[i_]=this.applicationId),this.appCheckToken&&(r[xu]=this.appCheckToken),typeof location<"u"&&location.hostname&&n_.test(location.hostname)&&(r[e_]=t_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dr.forceAllow_=!0}static forceDisallow(){dr.forceDisallow_=!0}static isAvailable(){return dr.forceAllow_?!0:!dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$S()&&!VS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mg(n),i=Yg(r,dC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cC]="t",r[u_]=e,r[c_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zS(),window[iC+this.uniqueCallbackIdentifier]=e,window[sC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_e("frame writing exception"),l.stack&&_e(l.stack),_e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_e("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u_]=this.myID,e[c_]=this.myPW,e[d_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+f_+r.length<=h_;){const o=this.pendingSegs.shift();r=r+"&"+lC+i+"="+o.seg+"&"+aC+i+"="+o.ts+"&"+uC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(hC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=16384,mC=45e3;let Ao=null;typeof MozWebSocket<"u"?Ao=MozWebSocket:typeof WebSocket<"u"&&(Ao=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ds(this.connId),this.stats_=Jc(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jg]=Xc,typeof location<"u"&&location.hostname&&n_.test(location.hostname)&&(o[e_]=t_),n&&(o[Zg]=n),r&&(o[r_]=r),i&&(o[xu]=i),s&&(o[i_]=s),a_(e,s_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Nn.set("previous_websocket_failure",!0);try{let r;Fg(),this.mySock=new Ao(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ao!==null&&!st.forceDisallow_}static previouslyFailed(){return Nn.isInMemoryStorage||Nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yg(n,pC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of Vi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=6e4,_C=5e3,vC=10*1024,yC=100*1024,ga="t",wf="d",wC="s",Ef="r",EC="e",Sf="o",Cf="a",If="n",kf="p",SC="h";class CC{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ds("c:"+this.id+":"),this.transportManager_=new Vi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const n=e[ga];n===Cf?this.upgradeIfSecondaryHealthy_():n===Ef?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),r=ri("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:If,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),r=ri("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(ga,e);if(wf in e){const r=e[wf];if(n===SC)this.onHandshake_(r);else if(n===If){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wC?this.onConnectionShutdown_(r):n===Ef?this.onReset_(r):n===EC?Ru("Server Error: "+r):n===Sf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ru("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xc!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_C))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends m_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Do}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=32,Nf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new $("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function ed(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function g_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Me(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kC(t,e){const n=Gi(t,0),r=Gi(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=qn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function td(t,e){if(hn(t)!==hn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(hn(t)>hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class TC{constructor(e,n){this.errorPrefix_=n,this.parts_=Gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_l(this.parts_[r]);__(this)}}function NC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_l(e),__(t)}function RC(t){const e=t.parts_.pop();t.byteLength_-=_l(e),t.parts_.length>0&&(t.byteLength_-=1)}function __(t){if(t.byteLength_>Nf)throw new Error(t.errorPrefix_+"has a key path longer than "+Nf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tf+") or object contains a cycle "+Cn(t))}function Cn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends m_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new nd}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=1e3,xC=60*5*1e3,Rf=30*1e3,PC=1.3,OC=3e4,AC="server_kill",xf=3;class xt extends p_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ii,this.maxReconnectDelay_=xC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Fg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Do.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new gl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const r=Or(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ru("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OC&&(this.reconnectDelay_=ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?_e("getToken() completed but was canceled"):(_e("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new CC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(AC)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ze(c),a())}}}interrupt(e){_e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eu(this.interruptReasons_)&&(this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Yc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){_e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xf&&(this.reconnectDelay_=Rf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Kg.replace(/\./g,"-")]=1,Hc()?e["framework.cordova"]=1:bg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Do.getInstance().currentlyOnline();return Eu(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(Dr,e),i=new b(Dr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs;class v_ extends vl{static get __EMPTY_NODE(){return bs}static set __EMPTY_NODE(e){bs=e}compare(e,n){return qn(e.name,n.name)}isDefinedOn(e){throw jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(jn,bs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,bs)}toString(){return".key"}}const wr=new v_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:fe.RED,this.left=i!=null?i:Le.EMPTY_NODE,this.right=s!=null?s:Le.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class DC{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new DC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e){return qn(t.name,e.name)}function rd(t,e){return qn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;function LC(t){Pu=t}const y_=function(t){return typeof t=="number"?"number:"+Xg(t):"string:"+t},w_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else S(t===Pu||t.isEmpty(),"priority of unexpected type.");S(t===Pu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),w_(this.priorityNode_)}static set __childrenNodeConstructor(e){Pf=e}static get __childrenNodeConstructor(){return Pf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+y_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xg(this.value_):e+=this.value_,this.lazyHash_=qg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E_,S_;function bC(t){E_=t}function FC(t){S_=t}class UC extends vl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?qn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(jn,new de("[PRIORITY-POST]",S_))}makePost(e,n){const r=E_(e);return new b(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new UC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=Math.log(2);class BC{constructor(e){const n=s=>parseInt(Math.log(s)/zC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new fe(h,c.node,fe.BLACK,null,null);{const p=parseInt(d/2,10)+a,_=i(a,p),y=i(p+1,u);return c=t[p],h=n?n(c):c,new fe(h,c.node,fe.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const R=c-_,m=c;c-=_;const f=i(R+1,m),g=t[R],w=n?n(g):g;p(new fe(w,g.node,y,null,f))},p=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),R=Math.pow(2,a.count-(_+1));y?h(R,fe.BLACK):(h(R,fe.BLACK),h(R,fe.RED))}return d},o=new BC(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;const Jn={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Jn&&ie,"ChildrenNode.ts has not been loaded"),_a=_a||new kt({".priority":Jn},{".priority":ie}),_a}get(e){const n=Or(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Mo(r,e.getCompare()):l=Jn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new kt(d,u)}addToIndexes(e,n){const r=xo(this.indexes_,(i,s)=>{const o=Or(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Jn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Mo(l,o.getCompare())}else return Jn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=xo(this.indexes_,i=>{if(i===Jn)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new kt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&w_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return si||(si=new O(new Le(rd),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?si:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?si:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+y_(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hs?-1:0}withIndex(e){if(e===wr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WC extends O{constructor(){super(new Le(rd),O.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const hs=new WC;Object.defineProperties(b,{MIN:{value:new b(Dr,O.EMPTY_NODE)},MAX:{value:new b(jn,hs)}});v_.__EMPTY_NODE=O.EMPTY_NODE;de.__childrenNodeConstructor=O;LC(hs);FC(hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=!0;function ve(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ve(e))}if(!(t instanceof Array)&&jC){const n=[];let r=!1;if(Se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Mo(n,MC,o=>o.name,rd);if(r){const o=Mo(n,ie.getCompare());return new O(s,ve(e),new kt({".priority":o},{".priority":ie}))}else return new O(s,ve(e),kt.Default)}else{let n=O.EMPTY_NODE;return Se(t,(r,i)=>{if(yt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}bC(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC extends vl{constructor(e){super(),this.indexPath_=e,S(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?qn(e.name,n.name):s}makePost(e,n){const r=ve(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,hs);return new b(jn,e)}toString(){return Gi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C extends vl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=ve(e);return new b(n,r)}toString(){return".value"}}const VC=new $C;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){return{type:"value",snapshotNode:t}}function Mr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ki(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function GC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ki(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mr(n,r)):o.trackChildChange(Qi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ki(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Qi(i,s,o))}else r.trackChildChange(Mr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.indexedFilter_=new id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qi.getStartPost_(e),this.endPost_=qi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.rangedFilter_=new qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const c=this.index_.getCompare();l=(h,p)=>c(p,h)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,d=!1;for(;a.hasNext();){const c=a.getNext();!d&&l(s,c)<=0&&(d=!0),d&&u<this.limit_&&l(c,o)<=0?u++:i=i.updateImmediateChild(c.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,p)=>c(p,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,a);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Qi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ki(n,c));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Mr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ki(u.name,u.node)),s.trackChildChange(Mr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QC(t){return t.loadsAllData()?new id(t.getIndex()):t.hasLimit()?new KC(t):new qi(t)}function Of(t){const e={};if(t.isDefault())return e;let n;return t.index_===ie?n="$priority":t.index_===VC?n="$value":t.index_===wr?n="$key":(S(t.index_ instanceof HC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_&&(e.startAt=pe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+pe(t.indexStartName_))),t.endSet_&&(e.endAt=pe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+pe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Af(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends p_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ds("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Of(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Or(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Lo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Of(e._queryParams),r=e._path.toString(),i=new gl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Hi(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){return{value:null,children:new Map}}function I_(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,bo());const i=t.children.get(r);e=K(e),I_(i,e,n)}}function Ou(t,e,n){t.value!==null?n(e,t.value):YC(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Ou(i,s,n)})}function YC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=10*1e3,JC=30*1e3,ZC=5*60*1e3;class e1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XC(e);const r=Df+(JC-Df)*Math.random();wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Se(e,(i,s)=>{s>0&&yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function od(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ad(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ot.ACK_USER_WRITE,this.source=od()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Fo(j(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new Fo(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Yi(this.source,j()):new Yi(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ot.OVERWRITE}operationForChild(e){return z(this.path)?new Hn(this.source,j(),this.snap.getImmediateChild(e)):new Hn(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ot.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Hn(this.source,j(),n.value):new Lr(this.source,j(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lr(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function n1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(GC(o.childName,o.snapshotNode))}),oi(t,i,"child_removed",e,r,n),oi(t,i,"child_added",e,r,n),oi(t,i,"child_moved",s,r,n),oi(t,i,"child_changed",e,r,n),oi(t,i,"value",e,r,n),i}function oi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>i1(t,l,a)),o.forEach(l=>{const a=r1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function r1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function i1(t,e,n){if(e.childName==null||n.childName==null)throw jr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t,e){return{eventCache:t,serverCache:e}}function Ei(t,e,n,r){return yl(new $n(e,n,r),t.serverCache)}function k_(t,e,n,r){return yl(t.eventCache,new $n(e,n,r))}function Au(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;const s1=()=>(va||(va=new Le(HS)),va);class G{constructor(e,n=s1()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return Se(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(z(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:re(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new G(null)}}set(e,n){if(z(e))return new G(n,this.children);{const r=U(e),s=(this.children.get(r)||new G(null)).set(K(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(z(e))return n;{const r=U(e),s=(this.children.get(r)||new G(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(K(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),re(n,i),r):new G(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new G(null))}}function Si(t,e,n){if(z(e))return new ut(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new ut(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new ut(s)}}}function Du(t,e,n){let r=t;return Se(n,(i,s)=>{r=Si(r,re(e,i),s)}),r}function Mf(t,e){if(z(e))return ut.empty();{const n=t.writeTree_.setTree(e,new G(null));return new ut(n)}}function Mu(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Lf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function un(t,e){if(z(e))return t;{const n=Yn(t,e);return n!=null?new ut(new G(n)):new ut(t.writeTree_.subtree(e))}}function Lu(t){return t.writeTree_.isEmpty()}function br(t,e){return T_(j(),t.writeTree_,e)}function T_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=T_(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){return P_(e,t)}function o1(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Si(t.visibleWrites,e,n)),t.lastWriteId=r}function l1(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Du(t.visibleWrites,e,n),t.lastWriteId=r}function a1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function u1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&c1(l,r.path)?i=!1:qe(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return d1(t),!0;if(r.snap)t.visibleWrites=Mf(t.visibleWrites,r.path);else{const l=r.children;Se(l,a=>{t.visibleWrites=Mf(t.visibleWrites,re(r.path,a))})}return!0}else return!1}function c1(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(re(t.path,n),e))return!0;return!1}function d1(t){t.visibleWrites=N_(t.allWrites,h1,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function h1(t){return t.visible}function N_(t,e,n){let r=ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)qe(n,o)?(l=Me(n,o),r=Si(r,l,s.snap)):qe(o,n)&&(l=Me(o,n),r=Si(r,j(),s.snap.getChild(l)));else if(s.children){if(qe(n,o))l=Me(n,o),r=Du(r,l,s.children);else if(qe(o,n))if(l=Me(o,n),z(l))r=Du(r,j(),s.children);else{const a=Or(s.children,U(l));if(a){const u=a.getChild(K(l));r=Si(r,j(),u)}}}else throw jr("WriteRecord should have .snap or .children")}}return r}function R_(t,e,n,r,i){if(!r&&!i){const s=Yn(t.visibleWrites,e);if(s!=null)return s;{const o=un(t.visibleWrites,e);if(Lu(o))return n;if(n==null&&!Mu(o,j()))return null;{const l=n||O.EMPTY_NODE;return br(o,l)}}}else{const s=un(t.visibleWrites,e);if(!i&&Lu(s))return n;if(!i&&n==null&&!Mu(s,j()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qe(u.path,e)||qe(e,u.path))},l=N_(t.allWrites,o,e),a=n||O.EMPTY_NODE;return br(l,a)}}}function f1(t,e,n){let r=O.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=un(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=br(un(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Lf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=un(t.visibleWrites,e);return Lf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function p1(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(Mu(t.visibleWrites,s))return null;{const o=un(t.visibleWrites,s);return Lu(o)?i.getChild(n):br(o,i.getChild(n))}}function m1(t,e,n,r){const i=re(e,n),s=Yn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return br(o,r.getNode().getImmediateChild(n))}else return null}function g1(t,e){return Yn(t.visibleWrites,e)}function _1(t,e,n,r,i,s,o){let l;const a=un(t.visibleWrites,e),u=Yn(a,j());if(u!=null)l=u;else if(n!=null)l=br(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=h.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=h.getNext();return d}else return[]}function v1(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Uo(t,e,n,r){return R_(t.writeTree,t.treePath,e,n,r)}function cd(t,e){return f1(t.writeTree,t.treePath,e)}function bf(t,e,n,r){return p1(t.writeTree,t.treePath,e,n,r)}function zo(t,e){return g1(t.writeTree,re(t.treePath,e))}function y1(t,e,n,r,i,s){return _1(t.writeTree,t.treePath,e,n,r,i,s)}function dd(t,e,n){return m1(t.writeTree,t.treePath,e,n)}function x_(t,e){return P_(re(t.treePath,e),t.writeTree)}function P_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Qi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ki(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Mr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Qi(r,e.snapshotNode,i.oldSnap));else throw jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const O_=new E1;class hd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vn(this.viewCache_),s=y1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t){return{filter:t}}function C1(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function I1(t,e,n,r,i){const s=new w1;let o,l;if(n.type===ot.OVERWRITE){const u=n;u.source.fromUser?o=bu(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Bo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ot.MERGE){const u=n;u.source.fromUser?o=T1(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Fu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ot.ACK_USER_WRITE){const u=n;u.revert?o=x1(t,e,u.path,r,i,s):o=N1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ot.LISTEN_COMPLETE)o=R1(t,e,n.path,r,s);else throw jr("Unknown operation type: "+n.type);const a=s.getChanges();return k1(e,o,a),{viewCache:o,changes:a}}function k1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Au(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(C_(Au(e)))}}function A_(t,e,n,r,i,s){const o=e.eventCache;if(zo(r,n)!=null)return e;{let l,a;if(z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Vn(e),d=u instanceof O?u:O.EMPTY_NODE,c=cd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Uo(r,Vn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){S(hn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=bf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=bf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=dd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ei(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Bo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),p,null)}else{const p=U(n);if(!a.isCompleteForPath(n)&&hn(n)>1)return e;const _=K(n),R=a.getNode().getImmediateChild(p).updateChild(_,r);p===".priority"?u=d.updatePriority(a.getNode(),R):u=d.updateChild(a.getNode(),p,R,_,O_,null)}const c=k_(e,u,a.isFullyInitialized()||z(n),d.filtersNodes()),h=new hd(i,c,s);return A_(t,c,n,i,h,l)}function bu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new hd(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ei(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ei(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),p=l.getNode().getImmediateChild(c);let _;if(z(h))_=r;else{const y=d.getCompleteChild(c);y!=null?ed(h)===".priority"&&y.getChild(g_(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=O.EMPTY_NODE}if(p.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ei(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ff(t,e){return t.eventCache.isCompleteForChild(e)}function T1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=re(n,a);Ff(e,U(d))&&(l=bu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=re(n,a);Ff(e,U(d))||(l=bu(t,l,d,u,i,s,o))}),l}function Uf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Fu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new G(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),_=Uf(t,p,h);a=Bo(t,a,new $(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const p=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!p){const _=e.serverCache.getNode().getImmediateChild(c),y=Uf(t,_,h);a=Bo(t,a,new $(c),y,i,s,o,l)}}),a}function N1(t,e,n,r,i,s,o){if(zo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Bo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new G(null);return a.getNode().forEachChild(wr,(d,c)=>{u=u.set(new $(d),c)}),Fu(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((d,c)=>{const h=re(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Fu(t,e,n,u,i,s,l,o)}}function R1(t,e,n,r,i){const s=e.serverCache,o=k_(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return A_(t,o,n,r,O_,i)}function x1(t,e,n,r,i,s){let o;if(zo(r,n)!=null)return e;{const l=new hd(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Uo(r,Vn(e));else{const c=e.serverCache.getNode();S(c instanceof O,"serverChildren would be complete if leaf node"),d=cd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=dd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,K(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,O.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Uo(r,Vn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||zo(r,j())!=null,Ei(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new id(r.getIndex()),s=QC(r);this.processor_=S1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),d=new $n(a,o.isFullyInitialized(),i.filtersNodes()),c=new $n(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=yl(c,d),this.eventGenerator_=new t1(this.query_)}get query(){return this.query_}}function O1(t){return t.viewCache_.serverCache.getNode()}function A1(t,e){const n=Vn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function zf(t){return t.eventRegistrations_.length===0}function D1(t,e){t.eventRegistrations_.push(e)}function Bf(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wf(t,e,n,r){e.type===ot.MERGE&&e.source.queryId!==null&&(S(Vn(t.viewCache_),"We should always have a full cache before handling merges"),S(Au(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=I1(t.processor_,i,e,n,r);return C1(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,D_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function M1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Mr(s,o))}),n.isFullyInitialized()&&r.push(C_(n.getNode())),D_(t,r,n.getNode(),e)}function D_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return n1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class L1{constructor(){this.views=new Map}}function b1(t){S(!Wo,"__referenceConstructor has already been defined"),Wo=t}function F1(){return S(Wo,"Reference.ts has not been loaded"),Wo}function U1(t){return t.views.size===0}function fd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Wf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wf(o,e,n,r));return s}}function z1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Uo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=cd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=yl(new $n(l,a,!1),new $n(r,i,!1));return new P1(e,u)}return o}function B1(t,e,n,r,i,s){const o=z1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),D1(o,n),M1(o,n)}function W1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Bf(u,n,r)),zf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Bf(a,n,r)),zf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!fn(t)&&s.push(new(F1())(e._repo,e._path)),{removed:s,events:o}}function M_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Er(t,e){let n=null;for(const r of t.views.values())n=n||A1(r,e);return n}function L_(t,e){if(e._queryParams.loadsAllData())return wl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function b_(t,e){return L_(t,e)!=null}function fn(t){return wl(t)!=null}function wl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;function j1(t){S(!jo,"__referenceConstructor has already been defined"),jo=t}function H1(){return S(jo,"Reference.ts has not been loaded"),jo}let $1=1;class jf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=v1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function V1(t,e,n,r,i){return o1(t.pendingWriteTree_,e,n,r,i),i?Vr(t,new Hn(od(),e,n)):[]}function G1(t,e,n,r){l1(t.pendingWriteTree_,e,n,r);const i=G.fromObject(n);return Vr(t,new Lr(od(),e,i))}function Rn(t,e,n=!1){const r=a1(t.pendingWriteTree_,e);if(u1(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(j(),!0):Se(r.children,o=>{s=s.set(new $(o),!0)}),Vr(t,new Fo(r.path,s,n))}else return[]}function El(t,e,n){return Vr(t,new Hn(ld(),e,n))}function K1(t,e,n){const r=G.fromObject(n);return Vr(t,new Lr(ld(),e,r))}function Q1(t,e){return Vr(t,new Yi(ld(),e))}function q1(t,e,n){const r=pd(t,n);if(r){const i=md(r),s=i.path,o=i.queryId,l=Me(s,e),a=new Yi(ad(o),l);return gd(t,s,a)}else return[]}function Uu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||b_(o,e))){const a=W1(o,e,n,r);U1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,p)=>fn(p));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=J1(h);for(let _=0;_<p.length;++_){const y=p[_],R=y.query,m=B_(t,y);t.listenProvider_.startListening(Ci(R),Ho(t,R),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ci(e),null):u.forEach(h=>{const p=t.queryToTagMap.get(Sl(h));t.listenProvider_.stopListening(Ci(h),p)}))}Z1(t,u)}return l}function Y1(t,e,n,r){const i=pd(t,r);if(i!=null){const s=md(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Hn(ad(l),a,n);return gd(t,o,u)}else return[]}function X1(t,e,n,r){const i=pd(t,r);if(i){const s=md(i),o=s.path,l=s.queryId,a=Me(o,e),u=G.fromObject(n),d=new Lr(ad(l),a,u);return gd(t,o,d)}else return[]}function Hf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const _=Me(h,i);s=s||Er(p,_),o=o||fn(p)});let l=t.syncPointTree_.get(i);l?(o=o||fn(l),s=s||Er(l,j())):(l=new L1,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const y=Er(_,j());y&&(s=s.updateImmediateChild(p,y))}));const u=b_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Sl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=eI();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const d=ud(t.pendingWriteTree_,i);let c=B1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=L_(l,e);c=c.concat(tI(t,e,h))}return c}function F_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Er(l,a);if(u)return u});return R_(i,e,s,n,!0)}function Vr(t,e){return U_(e,t.syncPointTree_,null,ud(t.pendingWriteTree_,j()))}function U_(t,e,n,r){if(z(t.path))return z_(t,e,n,r);{const i=e.get(j());n==null&&i!=null&&(n=Er(i,j()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=x_(r,o);s=s.concat(U_(l,a,u,d))}return i&&(s=s.concat(fd(i,t,r,n))),s}}function z_(t,e,n,r){const i=e.get(j());n==null&&i!=null&&(n=Er(i,j()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=x_(r,o),d=t.operationForChild(o);d&&(s=s.concat(z_(d,l,a,u)))}),i&&(s=s.concat(fd(i,t,r,n))),s}function B_(t,e){const n=e.query,r=Ho(t,n);return{hashFn:()=>(O1(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?q1(t,n._path,r):Q1(t,n._path);{const s=GS(i,n);return Uu(t,n,null,s)}}}}function Ho(t,e){const n=Sl(e);return t.queryToTagMap.get(n)}function Sl(t){return t._path.toString()+"$"+t._queryIdentifier}function pd(t,e){return t.tagToQueryMap.get(e)}function md(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function gd(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=ud(t.pendingWriteTree_,e);return fd(r,n,i,null)}function J1(t){return t.fold((e,n,r)=>{if(n&&fn(n))return[wl(n)];{let i=[];return n&&(i=M_(n)),Se(r,(s,o)=>{i=i.concat(o)}),i}})}function Ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(H1())(t._repo,t._path):t}function Z1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Sl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function eI(){return $1++}function tI(t,e,n){const r=e._path,i=Ho(t,e),s=B_(t,n),o=t.listenProvider_.startListening(Ci(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!z(u)&&d&&fn(d))return[wl(d).query];{let h=[];return d&&(h=h.concat(M_(d).map(p=>p.query))),Se(c,(p,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ci(d),Ho(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _d(n)}node(){return this.node_}}class vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new vd(this.syncTree_,n)}node(){return F_(this.syncTree_,this.path_)}}const nI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$f=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iI(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},iI=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},W_=function(t,e,n,r){return yd(e,new vd(n,t),r)},sI=function(t,e,n){return yd(t,new _d(e),n)};function yd(t,e,n){const r=t.getPriority().val(),i=$f(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=$f(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ie,(l,a)=>{const u=yd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ed(t,e){let n=e instanceof $?e:new $(e),r=t,i=U(n);for(;i!==null;){const s=Or(r.node.children,i)||{children:{},childCount:0};r=new wd(i,r,s),n=K(n),i=U(n)}return r}function Gr(t){return t.node.value}function j_(t,e){t.node.value=e,zu(t)}function H_(t){return t.node.childCount>0}function oI(t){return Gr(t)===void 0&&!H_(t)}function Cl(t,e){Se(t.node.children,(n,r)=>{e(new wd(n,t,r))})}function $_(t,e,n,r){n&&!r&&e(t),Cl(t,i=>{$_(i,e,!0,r)}),n&&r&&e(t)}function lI(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fs(t){return new $(t.parent===null?t.name:fs(t.parent)+"/"+t.name)}function zu(t){t.parent!==null&&aI(t.parent,t.name,t)}function aI(t,e,n){const r=oI(n),i=yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/[\[\].#$\/\u0000-\u001F\u007F]/,cI=/[\[\].#$\u0000-\u001F\u007F]/,ya=10*1024*1024,Sd=function(t){return typeof t=="string"&&t.length!==0&&!uI.test(t)},V_=function(t){return typeof t=="string"&&t.length!==0&&!cI.test(t)},dI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),V_(t)},hI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qc(t)||t&&typeof t=="object"&&yt(t,".sv")},Cd=function(t,e,n){const r=n instanceof $?new TC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Cn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Cn(r)+" with contents = "+e.toString());if(qc(e))throw new Error(t+"contains "+e.toString()+" "+Cn(r));if(typeof e=="string"&&e.length>ya/3&&_l(e)>ya)throw new Error(t+"contains a string greater than "+ya+" utf8 bytes "+Cn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Se(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Cn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NC(r,o),Cd(t,l,r),RC(r)}),i&&s)throw new Error(t+' contains ".value" child '+Cn(r)+" in addition to actual children.")}},fI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Gi(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Sd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(kC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&qe(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},pI=function(t,e,n,r){if(r&&e===void 0)return;const i=Vc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Se(e,(o,l)=>{const a=new $(o);if(Cd(i,l,re(n,a)),ed(a)===".priority"&&!hI(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),fI(i,s)},G_=function(t,e,n,r){if(!(r&&n===void 0)&&!V_(n))throw new Error(Vc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),G_(t,e,n,r)},gI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!dI(n))throw new Error(Vc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Id(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!td(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function K_(t,e,n){Id(t,n),Q_(t,r=>td(r,e))}function Lt(t,e,n){Id(t,n),Q_(t,r=>qe(r,e)||qe(e,r))}function Q_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(vI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Dn&&_e("event: "+n.toString()),$r(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="repo_interrupt",wI=25;class EI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _I,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bo(),this.transactionQueueTree_=new wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SI(t,e,n){if(t.stats_=Jc(t.repoInfo_),t.forceRestClient_||YS())t.server_=new Lo(t.repoInfo_,(r,i,s,o)=>{Vf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{Vf(t,r,i,s,o)},r=>{Gf(t,r)},r=>{II(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=tC(t.repoInfo_,()=>new e1(t.stats_,t.server_)),t.infoData_=new qC,t.infoSyncTree_=new jf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=El(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Td(t,"connected",!1),t.serverSyncTree_=new jf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function CI(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kd(t){return nI({timestamp:CI(t)})}function Vf(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=xo(n,u=>ve(u));o=X1(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=Y1(t.serverSyncTree_,s,a,i)}else if(r){const a=xo(n,u=>ve(u));o=K1(t.serverSyncTree_,s,a)}else{const a=ve(n);o=El(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Xi(t,s)),Lt(t.eventQueue_,l,o)}function Gf(t,e){Td(t,"connected",e),e===!1&&TI(t)}function II(t,e){Se(e,(n,r)=>{Td(t,n,r)})}function Td(t,e,n){const r=new $("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=El(t.infoSyncTree_,r,i);Lt(t.eventQueue_,r,s)}function q_(t){return t.nextWriteId_++}function kI(t,e,n,r){Nd(t,"update",{path:e.toString(),value:n});let i=!0;const s=kd(t),o={};if(Se(n,(l,a)=>{i=!1,o[l]=W_(re(e,l),ve(a),t.serverSyncTree_,s)}),i)_e("update() called with empty data.  Don't do anything."),Qf(t,r,"ok",void 0);else{const l=q_(t),a=G1(t.serverSyncTree_,e,o,l);Id(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||ze("update at "+e+" failed: "+u);const h=Rn(t.serverSyncTree_,l,!c),p=h.length>0?Xi(t,e):e;Lt(t.eventQueue_,p,h),Qf(t,r,u,d)}),Se(n,u=>{const d=ev(t,re(e,u));Xi(t,d)}),Lt(t.eventQueue_,e,[])}}function TI(t){Nd(t,"onDisconnectEvents");const e=kd(t),n=bo();Ou(t.onDisconnect_,j(),(i,s)=>{const o=W_(i,s,t.serverSyncTree_,e);I_(n,i,o)});let r=[];Ou(n,j(),(i,s)=>{r=r.concat(El(t.serverSyncTree_,i,s));const o=ev(t,i);Xi(t,o)}),t.onDisconnect_=bo(),Lt(t.eventQueue_,j(),r)}function NI(t,e,n){let r;U(e._path)===".info"?r=Hf(t.infoSyncTree_,e,n):r=Hf(t.serverSyncTree_,e,n),K_(t.eventQueue_,e._path,r)}function Kf(t,e,n){let r;U(e._path)===".info"?r=Uu(t.infoSyncTree_,e,n):r=Uu(t.serverSyncTree_,e,n),K_(t.eventQueue_,e._path,r)}function RI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yI)}function Nd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_e(n,...e)}function Qf(t,e,n,r){e&&$r(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Y_(t,e,n){return F_(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Rd(t,e=t.transactionQueueTree_){if(e||Il(t,e),Gr(e)){const n=J_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xI(t,fs(e),n)}else H_(e)&&Cl(e,n=>{Rd(t,n)})}function xI(t,e,n){const r=n.map(u=>u.currentWriteId),i=Y_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Me(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Nd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Rn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Il(t,Ed(t.transactionQueueTree_,e)),Rd(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)$r(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Xi(t,e)}},o)}function Xi(t,e){const n=X_(t,e),r=fs(n),i=J_(t,n);return PI(t,i,r),r}function PI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,c;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=wI)d=!0,c="maxretry",i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Y_(t,a.path,o);a.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){Cd("transaction failed: Data returned ",p,a.path);let _=ve(p);typeof p=="object"&&p!=null&&yt(p,".priority")||(_=_.updatePriority(h.getPriority()));const R=a.currentWriteId,m=kd(t),f=sI(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=q_(t),o.splice(o.indexOf(R),1),i=i.concat(V1(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Rn(t.serverSyncTree_,R,!0))}else d=!0,c="nodata",i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Il(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)$r(r[l]);Rd(t,t.transactionQueueTree_)}function X_(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Gr(r)===void 0;)r=Ed(r,n),e=K(e),n=U(e);return r}function J_(t,e){const n=[];return Z_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Z_(t,e,n){const r=Gr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Cl(e,i=>{Z_(t,i,n)})}function Il(t,e){const n=Gr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,j_(e,n.length>0?n:void 0)}Cl(e,r=>{Il(t,r)})}function ev(t,e){const n=fs(X_(t,e)),r=Ed(t.transactionQueueTree_,e);return lI(r,i=>{wa(t,i)}),wa(t,r),$_(r,i=>{wa(t,i)}),n}function wa(t,e){const n=Gr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?j_(e,void 0):n.length=s+1,Lt(t.eventQueue_,fs(e),i);for(let o=0;o<r.length;o++)$r(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const qf=function(t,e){const n=DI(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||WS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new l_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},DI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=OI(t.substring(d,c)));const h=AI(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class nv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:ed(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=Af(this._queryParams),n=Yc(e);return n==="{}"?"default":n}get _queryObject(){return Af(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof xd))return!1;const n=this._repo===e._repo,r=td(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IC(this._path)}}class Ut extends xd{constructor(e,n){super(e,n,new sd,!1)}get parent(){const e=g_(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ji{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=$o(this.ref,e);return new Ji(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ji(i,$o(this.ref,r),ie)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rv(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?$o(t._root,e):t._root}function $o(t,e){return t=Ze(t),U(t._path)===null?mI("child","path",e,!1):G_("child","path",e,!1),new Ut(t._repo,re(t._path,e))}function LI(t,e){pI("update",e,t._path,!1);const n=new gl;return kI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Pd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new tv("value",this,new Ji(e.snapshotNode,new Ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nv(this,e,n):null}matches(e){return e instanceof Pd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Od{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nv(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=$o(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new tv(e.type,this,new Ji(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Od?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function bI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Kf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new MI(n,s||void 0),l=e==="value"?new Pd(o):new Od(e,o);return NI(t._repo,t,l),()=>Kf(t._repo,t,l)}function FI(t,e,n,r){return bI(t,"value",e,n,r)}b1(Ut);j1(Ut);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="FIREBASE_DATABASE_EMULATOR_HOST",Bu={};let zI=!1;function BI(t,e,n,r){t.repoInfo_=new l_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function WI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_e("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[UI]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=qf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new yr(yr.OWNER):new JS(t.name,t.options,e);gI("Invalid Firebase Database URL",o),z(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=HI(l,t,d,new XS(t.name,n));return new $I(c,t)}function jI(t,e){const n=Bu[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RI(t),delete n[t.key]}function HI(t,e,n,r){let i=Bu[e.name];i||(i={},Bu[e.name]=i);let s=i[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new EI(t,zI,n,r),i[t.toURLString()]=s,s}class $I{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function VI(t=$g(),e){const n=Qc(t,"database").getImmediate({identifier:e}),r=gE("database");return r&&GI(n,...r),n}function GI(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new yr(yr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:vE(r.mockUserToken,t.app.options.projectId);s=new yr(o)}BI(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){bS(us),Ar(new Bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return WI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),an(mf,gf,t),an(mf,gf,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KI();function Ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QI=iv,sv=new as("auth","Firebase",iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Gc("@firebase/auth");function Js(t,...e){Yf.logLevel<=V.ERROR&&Yf.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw Dd(t,...e)}function gt(t,...e){return Dd(t,...e)}function ov(t,e,n){const r=Object.assign(Object.assign({},QI()),{[e]:n});return new as("auth","Firebase",r).create(e,{appName:t.name})}function qI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(t,"argument-error"),ov(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sv.create(t,...e)}function A(t,e,...n){if(!t)throw Dd(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Js(e),new Error(e)}function bt(t,e){t||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Map;function Nt(t){bt(t instanceof Function,"Expected a class definition");let e=Xf.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){const n=Qc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Po(s,e!=null?e:{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function XI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JI(){return Jf()==="http:"||Jf()==="https:"}function Jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JI()||aE()||"connection"in navigator)?navigator.onLine:!0}function ek(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hc()||bg()}get(){return ZI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new ps(3e4,6e4);function rk(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kl(t,e,n,r,i={}){return av(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),lv.fetch()(uv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function av(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tk),e);try{const i=new sk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Us(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Us(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Us(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Us(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ov(t,d,u);vt(t,d)}}catch(i){if(i instanceof _n)throw i;vt(t,"network-request-failed")}}async function ik(t,e,n,r,i={}){const s=await kl(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Md(t.config,i):`${t.config.apiScheme}://${i}`}class sk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),nk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Us(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e){return kl(t,"POST","/v1/accounts:delete",e)}async function lk(t,e){return kl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ak(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=Ld(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ii(Ea(i.auth_time)),issuedAtTime:Ii(Ea(i.iat)),expirationTime:Ii(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ea(t){return Number(t)*1e3}function Ld(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Js("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ro(r);return s?JSON.parse(s):(Js("Failed to decode base64 JWT payload"),null)}catch(s){return Js("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function uk(t){const e=Ld(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&ck(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ck({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zi(t,lk(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pk(s.providerUserInfo):[],l=fk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function hk(t){const e=Ze(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pk(t){return t.map(e=>{var{providerId:n}=e,r=Ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){const n=await av(t,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new es;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ak(this,e)}reload(){return hk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zi(this,ok(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:C,providerData:T,stsTokenManager:N}=n;A(g&&N,e,"internal-error");const x=es.fromJSON(this.name,N);A(typeof g=="string",e,"internal-error"),Bt(c,e.name),Bt(h,e.name),A(typeof w=="boolean",e,"internal-error"),A(typeof C=="boolean",e,"internal-error"),Bt(p,e.name),Bt(_,e.name),Bt(y,e.name),Bt(R,e.name),Bt(m,e.name),Bt(f,e.name);const q=new Mn({uid:g,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:C,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:x,createdAt:m,lastLoginAt:f});return T&&Array.isArray(T)&&(q.providerData=T.map(F=>Object.assign({},F))),R&&(q._redirectEventId=R),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dv.type="NONE";const Zf=dv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Sr(Nt(Zf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(Zf);const o=Zs(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Mn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Sr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Sr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(_v(e))return"Webos";if(bd(e))return"Safari";if((e.includes("chrome/")||fv(e))&&!e.includes("edge/"))return"Chrome";if(mv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hv(t=Ne()){return/firefox\//i.test(t)}function bd(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fv(t=Ne()){return/crios\//i.test(t)}function pv(t=Ne()){return/iemobile/i.test(t)}function mv(t=Ne()){return/android/i.test(t)}function gv(t=Ne()){return/blackberry/i.test(t)}function _v(t=Ne()){return/webos/i.test(t)}function Tl(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gk(t=Ne()){var e;return Tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _k(){return uE()&&document.documentMode===10}function vv(t=Ne()){return Tl(t)||mv(t)||_v(t)||gv(t)||/windows phone/i.test(t)||pv(t)}function vk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e=[]){let n;switch(t){case"Browser":n=ep(Ne());break;case"Worker":n=`${ep(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tp(this),this.idTokenSubscription=new tp(this),this.beforeStateQueue=new yk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vo(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ek()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Nl(t){return Ze(t)}class tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=kE(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ek(t,e,n){const r=Nl(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wv(e),{host:o,port:l}=Sk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ck()}function wv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sk(t){const e=wv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:np(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:np(o)}}}function np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t,e){return ik(t,"POST","/v1/accounts:signInWithIdp",rk(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="http://localhost";class Gn extends Ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:Ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends ms{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ms{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ms{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=rp(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rp(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends _n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Go(e,n,r,i)}}function Sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,s,e,r):s})}async function kk(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Zi(t,Sv(i,s,e,t),n);A(o.idToken,i,"internal-error");const l=Ld(o.idToken);A(l,i,"internal-error");const{sub:a}=l;return A(t.uid===a,i,"user-mismatch"),Fr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&vt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e,n=!1){const r="signIn",i=await Sv(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Rk(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function xk(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function Pk(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function Ok(t){return Ze(t).signOut()}const Ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(){const t=Ne();return bd(t)||Tl(t)}const Dk=1e3,Mk=10;class Iv extends Cv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ak()&&vk(),this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_k()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iv.type="LOCAL";const Lk=Iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Cv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kv.type="SESSION";const Tv=kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await bk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ud("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function Uk(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function zk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wk(){return Nv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebaseLocalStorageDb",jk=1,Qo="firebaseLocalStorage",xv="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function Hk(){const t=indexedDB.deleteDatabase(Rv);return new gs(t).toPromise()}function ju(){const t=indexedDB.open(Rv,jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:xv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await Hk(),e(await ju()))})})}async function ip(t,e,n){const r=xl(t,!0).put({[xv]:e,value:n});return new gs(r).toPromise()}async function $k(t,e){const n=xl(t,!1).get(e),r=await new gs(n).toPromise();return r===void 0?null:r.value}function sp(t,e){const n=xl(t,!0).delete(e);return new gs(n).toPromise()}const Vk=800,Gk=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(Wk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zk(),!this.activeServiceWorker)return;this.sender=new Fk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await ip(e,Ko,"1"),await sp(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$k(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const Kk=Pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})}function Yk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e){return e?Nt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xk(t){return Nk(t.auth,new zd(t),t.bypassAuthState)}function Jk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Tk(n,new zd(t),t.bypassAuthState)}async function Zk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),kk(n,new zd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Jk;default:vt(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new ps(2e3,1e4);async function tT(t,e,n){const r=Nl(t);qI(t,e,Fd);const i=Ov(r,n);return new xn(r,"signInViaPopup",e,i).executeNotNull()}class xn extends Av{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eT.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="pendingRedirect",eo=new Map;class rT extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=eo.get(this.auth._key());if(!e){try{const r=await iT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}eo.set(this.auth._key(),e)}return this.bypassAuthState||eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iT(t,e){const n=lT(e),r=oT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sT(t,e){eo.set(t._key(),e)}function oT(t){return Nt(t._redirectPersistence)}function lT(t){return Zs(nT,t.config.apiKey,t.name)}async function aT(t,e,n=!1){const r=Nl(t),i=Ov(r,e),o=await new rT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=10*60*1e3;class cT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uT&&this.cachedEventUids.clear(),this.cachedEventUids.has(op(e))}saveEventToCache(e){this.cachedEventUids.add(op(e)),this.lastProcessedEventTime=Date.now()}}function op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(t,e={}){return kl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pT=/^https?/;async function mT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hT(t);for(const n of e)try{if(gT(n))return}catch{}vt(t,"unauthorized-domain")}function gT(t){const e=Wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pT.test(n))return!1;if(fT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new ps(3e4,6e4);function lp(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vT(t){return new Promise((e,n)=>{var r,i,s;function o(){lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lp(),n(gt(t,"network-request-failed"))},timeout:_T.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const l=Yk("iframefcb");return _t()[l]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},qk(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw to=null,e})}let to=null;function yT(t){return to=to||vT(t),to}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new ps(5e3,15e3),ET="__/auth/iframe",ST="emulator/auth/iframe",CT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Md(e,ST):`https://${t.config.authDomain}/${ET}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=IT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function TT(t){const e=await yT(t),n=_t().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:kT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=_t().setTimeout(()=>{s(o)},wT.get());function a(){_t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RT=500,xT=600,PT="_blank",OT="http://localhost";class ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AT(t,e,n,r=RT,i=xT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},NT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(l=fv(u)?PT:n),hv(u)&&(e=e||OT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(gk(u)&&l!=="_self")return DT(e||"",l),new ap(null);const c=window.open(e||"",l,d);A(c,t,"popup-blocked");try{c.focus()}catch{}return new ap(c)}function DT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="__/auth/handler",LT="emulator/auth/handler";function up(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Eu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof ms){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${bT(t)}?${Hr(l).slice(1)}`}function bT({config:t}){return t.emulator?Md(t,LT):`https://${t.authDomain}/${MT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="webStorageSupport";class FT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tv,this._completeRedirectFn=aT,this._overrideRedirectResult=sT}async _openPopup(e,n,r,i){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=up(e,n,r,Wu(),i);return AT(e,o,Ud())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Uk(up(e,n,r,Wu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TT(e),r=new cT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sa];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vv()||bd()||Tl()}}const UT=FT;var cp="@firebase/auth",dp="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WT(t){Ar(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yv(t)},d=new wk(l,a,u);return XI(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Bn("auth-internal",e=>{const n=Nl(e.getProvider("auth").getImmediate());return(r=>new zT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(cp,dp,BT(t)),an(cp,dp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=5*60,HT=zg("authIdTokenMaxAge")||jT;let hp=null;const $T=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HT)return;const i=n==null?void 0:n.token;hp!==i&&(hp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bd(t=$g()){const e=Qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YI(t,{popupRedirectResolver:UT,persistence:[Kk,Lk,Tv]}),r=zg("authTokenSyncURL");if(r){const s=$T(r);xk(n,s,()=>s(n.currentUser)),Rk(n,o=>s(o))}const i=Ug("auth");return i&&Ek(n,`http://${i}`),n}WT("Browser");const VT={apiKey:"AIzaSyAx6U3QpsxZRhnHaBHrnEmlluo93fYtwzc",authDomain:"byopartyy.firebaseapp.com",projectId:"byopartyy",storageBucket:"byopartyy.appspot.com",messagingSenderId:"317256846459",appId:"1:317256846459:web:d98c15be89bebbfcbca6de"},Pl=Hg(VT),Hu=VI(Pl),qo=t=>{const[e,n]=P.exports.useState(),[r,i]=P.exports.useState(null);return P.exports.useEffect(()=>FI(rv(Hu,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},fp=t=>{const e=Date.now(),n=(t==null?void 0:t.message)||`Updated: ${new Date(e).toLocaleString()}`;return{timestamp:e,error:t,message:n}},ts=t=>{const[e,n]=P.exports.useState();return[P.exports.useCallback(i=>{LI(rv(Hu,t),i).then(()=>n(fp())).catch(s=>n(fp(s)))},[Hu,t]),e]},GT=()=>{tT(Bd(Pl),new St)},KT=()=>Ok(Bd(Pl)),Ol=()=>{const[t,e]=P.exports.useState();return P.exports.useEffect(()=>Pk(Bd(Pl),e)),[t]},QT=()=>v("button",{className:"ms-auto btn btn-primary",onClick:GT,children:M("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-box-arrow-in-right",viewBox:"0 0 16 16",children:[v("path",{fillRule:"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),v("path",{fillRule:"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]})}),qT=()=>v("button",{className:"ms-auto btn btn-primary",onClick:KT,children:M("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-box-arrow-left",viewBox:"0 0 16 16",children:[v("path",{fillRule:"evenodd",d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}),v("path",{fillRule:"evenodd",d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"})]})}),YT=()=>v("button",{className:"ms-auto btn btn-primary",children:v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-house",viewBox:"0 0 16 16",children:v("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"})})}),XT=({user:t})=>t?v(qT,{}):v(QT,{}),JT=({user:t})=>M("div",{className:"header-wrapper",children:[v("div",{children:v("h1",{children:"BYOParty!"})}),M("nav",{className:"d-flex",children:[v(XT,{user:t}),v("a",{href:"/",children:v(YT,{})})]})]});const $u=({children:t,open:e,close:n})=>v("div",{className:`modal ${e?"modal-show":""}`,tabIndex:"-1",role:"dialog",onClick:r=>{r.target===r.currentTarget&&n()},children:v("div",{className:"modal-dialog",role:"document",children:M("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:v("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:n})}),v("div",{className:"modal-body",children:t})]})})});function ZT(){const[t]=Ol(),e=ml(),[n,r]=ts("/events/"),i=t!=null&&t.uid?t.uid:"1",[s,o]=ts(`/users/${i}/eventsAttended`),l=(a,u,d,c)=>{a.preventDefault();let h=document.getElementById("eventTitle").value,p=document.getElementById("eventHost").value,_=document.getElementById("eventTime").value,y=("000"+Math.random()*9999).slice(-4);console.log(y);var R={[y]:{details:{host:p,time:_,title:h,hostId:c.uid}}};u(R);var R={[y]:!0};s(R),d(`host/${y}/`)};return M("form",{children:[v("h1",{children:"Add Event"}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventTitle",children:"Title"}),v("input",{type:"text",className:"form-control",id:"eventTitle",placeholder:"Enter title"})]}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventHost",children:"Host"}),v("input",{type:"text",className:"form-control",id:"eventHost",placeholder:"Enter host"})]}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventTime",children:"Time"}),v("input",{type:"datetime-local",className:"form-control",id:"eventTime",placeholder:"Enter time"})]}),v("button",{className:"btn btn-primary",onClick:a=>l(a,n,e,t),children:"Submit"})]})}const eN=(t,e,n)=>{t.preventDefault();var r={[document.getElementById("eventId").value]:!0};n(r),e(`/join/${document.getElementById("eventId").value}/`)},tN=({events:t,setEvents:e})=>{const[n]=Ol(),r=n!=null&&n.uid?n.uid:"1",i=ml(),[s,o]=ts(`/users/${r}/eventsAttended`);return M("form",{children:[v("h1",{children:"Join Event"}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventId",children:"Invitation Code"}),v("input",{className:"form-control",type:"text",id:"eventId",placeholder:"XXXX"})]}),v("button",{type:"submit",className:"btn btn-primary",onClick:l=>eN(l,i,s),children:"Submit"})]})};const Wd=({details:t,eventId:e,needed:n,home:r})=>{const[i]=Ol(),s=i!=null&&i.uid?i.uid:"1",[o,l]=P.exports.useState(!1),a=({setOpenModal:d,details:c})=>{const h=ml(),[p,_]=ts(`/events/${e}`);i!=null&&i.uid&&i.uid;const y=(R,m,f,g,w)=>{R.preventDefault();let C=document.getElementById("eventTitle").value,T=document.getElementById("eventHost").value,N=document.getElementById("eventTime").value;var x={details:{host:T,time:N,title:C,hostId:g.uid}};m(x),d(!1)};return M("form",{children:[v("h1",{children:"Edit Event"}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventTitle",children:"Title"}),v("input",{type:"text",className:"form-control",id:"eventTitle",placeholder:c.title})]}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventHost",children:"Host"}),v("input",{type:"text",className:"form-control",id:"eventHost",placeholder:c.host})]}),M("div",{className:"form-group",children:[v("label",{htmlFor:"eventTime",children:"Time"}),v("input",{type:"datetime-local",className:"form-control",id:"eventTime",placeholder:c.time})]}),v("button",{className:"btn btn-primary",onClick:R=>y(R,p,h,i),children:"Submit"})]})};let u=new Date(t.time);return u=new Date(u.toISOString()),M("div",{children:[M("div",{className:t.hostId==s?"event-wrapper-host":"event-wrapper",children:[M("div",{className:"event-info",children:[v("h2",{children:t.title}),t.hostId==s?v("h3",{children:"Hosted by you"}):M("h3",{children:["Hosted by ",t.host]}),M("p",{children:[u.toLocaleDateString()," at ",u.getHours()>12?u.getHours()-12:u.getHours(),":",(u.getMinutes()<10?"0":"")+u.getMinutes()," ",u.getHours()>=12&&u.getHours()!=24?"PM":"AM"]})]}),!r&&t.hostId==s?v("button",{className:"btn btn-primary",onClick:()=>l(!0),children:"Edit"}):v(Wc,{})]}),v($u,{open:o,close:()=>l(!1),children:v(a,{setOpenModal:l,details:t})})]})},nN=({uid:t,userData:e,data:n})=>{const r=ml();return v("div",{children:e.eventsAttended?Object.entries(e.eventsAttended).map(([i,s])=>v("nav",{children:v("div",{onClick:()=>{let o=n[i].details.hostId==t?`/host/${i}`:`/join/${i}`;r(o)},children:v(Wd,{details:n[i].details,home:!0})})})):v(Wc,{})})};const rN=({user:t})=>{const[e,n]=P.exports.useState(!1),r=()=>n(!0),i=()=>n(!1),[s,o]=P.exports.useState(!1),l=t!=null&&t.uid?t.uid:null,[a,u]=qo(`/users/${l}`),[d,c]=qo("/events/");return u?M("h1",{children:["Error loading data: ",c.toString()]}):a===void 0?v("h1",{children:"Loading data..."}):c?M("h1",{children:["Error loading data: ",c.toString()]}):d===void 0?v("h1",{children:"Loading data..."}):d?(console.log(a),M("div",{className:"home-wrapper",children:[v("h3",{children:" Get ready for some fun :)"}),M("div",{className:"button-wrapper",children:[v("button",{className:"btn btn-add",onClick:r,children:"Add Event"}),v("button",{className:"btn btn-join",onClick:()=>o(!0),children:"Join Event"})]}),v($u,{open:e,close:i,children:v(ZT,{})}),v($u,{open:s,close:()=>o(!1),children:v(tN,{events:[],setEvents:()=>0})}),a?v(nN,{uid:l,userData:a,data:d}):""]})):v("h1",{children:"No data found"})};const iN=({name:t,data:e,setSelect:n,id:r,user:i})=>v("button",{className:e.selected===i.uid?"item-card-selected":"item-card",onClick:()=>n(r),children:M("p",{children:[t," x ",e.quantity," ",e.units==null?e.units:null]})}),sN=({initItems:t,user:e})=>{const[n,r]=P.exports.useState(t),[i,s]=P.exports.useState(n),o=d=>{const c=Object.fromEntries(Object.entries(n).map(([h,p],_)=>_==d?[h,{...p,selected:p.selected==!1?e.uid:!1}]:[h,p]));r(c),l(c)},l=d=>{if(document.getElementById("my-list").checked){const c=Object.fromEntries(Object.entries(d).filter(([h,p])=>p.selected===e.uid));s(c)}else s(d)},a=()=>Object.keys(i).length>0?Object.entries(i).map(([d,c],h)=>v(iN,{name:d,id:h,data:c,setSelect:o,user:e})):v("div",{className:"no-items",children:v("h3",{children:"You haven't selected any items"})}),u=()=>{const d=Object.fromEntries(Object.entries(n).filter(([c,h])=>h.selected===e.uid));Object.entries(d).map(([c,h],p)=>console.log(c)),console.log(n),console.log(e.uid)};return M("div",{className:"item-wrapper",children:[M("div",{className:"checkbox-div",children:[M("div",{className:"round",children:[v("input",{type:"checkbox",id:"my-list",name:"my-list",onClick:()=>l(n)}),v("label",{for:"my-list"})]}),v("h5",{children:"Only Show What I'm Bringing"})]}),v("div",{className:"item-list",children:v(a,{})}),v("button",{className:"save-button",onClick:()=>u(),children:"Save Selections"})]})};const Mv=({eventId:t})=>{const[e,n]=ts(`/events/${t}/needed`),[r,i]=P.exports.useState(""),[s,o]=P.exports.useState(1),[l,a]=P.exports.useState("");return M("div",{className:"add-items-form",children:[v("h1",{children:"Add Items"}),M("form",{className:"form",children:[v("div",{className:"form-group",children:v("input",{type:"text",className:"form-control",id:"Item name",onChange:p=>{i(p.target.value)},placeholder:"Enter item name"})}),v("div",{className:"form-group",children:v("input",{type:"text",className:"form-control",id:"Unit",onChange:p=>{a(p.target.value)},placeholder:"Enter unit"})}),v("div",{className:"form-group",children:v("input",{type:"number",className:"form-control",id:"Quantity",onChange:p=>{o(p.target.value)},placeholder:"Enter quantity"})}),v("button",{type:"submit",className:"btn btn-primary",onClick:p=>{p.preventDefault();var _={[r]:{quantity:s,units:l,selected:!1}};e(_),location.reload()},children:"Submit"})]})]})};const oN=({eventId:t,user:e})=>{if(!e)return v("h3",{children:"Please sign in!"});let n=e.uid;const[r,i]=qo("/events/"+t);return i?M("h1",{children:["Error loading data: ",i.toString()]}):r===void 0?v("h1",{children:"Loading data..."}):r?M("div",{children:[v(Wd,{details:r.details,home:!1}),v(sN,{user:e,initItems:r.needed}),r.details.hostId.toString()===n?v(Mv,{eventId:t}):null]}):v("h1",{children:"No data found"})},lN=({name:t,data:e,setSelect:n,id:r,user:i})=>v("button",{className:e.selected===i.uid?"item-card-selected ":"item-card",onClick:()=>n(r),children:v("div",{className:"d-inline-flex align-items-center",children:M("p",{children:[t," x ",e.quantity," ",e.units==null?e.units:null," ",v("button",{className:"btn btn-link-dark text-decoration-none p-0",children:"X"})," "]})})}),aN=({initItems:t,user:e})=>{const[n,r]=P.exports.useState(t);P.exports.useState(n);const i=s=>{const o=Object.fromEntries(Object.entries(n).map(([l,a],u)=>u==s?[l,{...a,selected:a.selected==!1?e.uid:!1}]:[l,a]));r(o)};return v("div",{className:"item-wrapper",children:v("div",{className:"item-list",children:Object.entries(n).map(([s,o],l)=>v(lN,{name:s,id:l,data:o,setSelect:i,user:e}))})})},uN=({eventId:t,user:e})=>{if(!e)return v("h3",{children:"Please sign in!"});let n=e.uid;const[r,i]=qo("/events/"+t);return i?M("h3",{children:["Error loading data: ",i.toString()]}):r===void 0?v("h3",{children:"Loading data..."}):r?r.details.hostId.toString()===n?M("div",{children:[v(Wd,{details:r.details,eventId:t,needed:r.needed,home:!1}),r.needed?v(aN,{user:e,initItems:r.needed}):null,v(Mv,{eventId:t})]}):v("h3",{children:"Sorry! You're not the host of this event!"}):v("h3",{children:"No data found"})},cN=({user:t})=>{const{id:e}=Og();return v(oN,{eventId:e,user:t})},dN=({user:t})=>{const{id:e}=Og();return v(uN,{eventId:e,user:t})},hN=({user:t})=>v(iE,{children:M(rE,{children:[v(Xs,{path:"/",element:v(rN,{user:t})}),v(Xs,{path:"join/:id/",element:v(cN,{user:t})}),v(Xs,{path:"host/:id/",element:v(dN,{user:t})})]})});const fN=()=>v("div",{className:"footer-wrapper"}),pN=()=>{const[t]=Ol();return P.exports.useState("1234"),M("div",{className:"App",children:[v(JT,{user:t}),v(hN,{user:t}),v(fN,{})]})},mN=Ia.createRoot(document.getElementById("root"));mN.render(v(Ep.StrictMode,{children:v(pN,{})}));
