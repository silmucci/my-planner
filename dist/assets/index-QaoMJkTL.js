(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function NT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var om={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function rb(){if(Ev)return kl;Ev=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return kl.Fragment=t,kl.jsx=n,kl.jsxs=n,kl}var Tv;function sb(){return Tv||(Tv=1,om.exports=rb()),om.exports}var it=sb(),lm={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function ab(){if(wv)return St;wv=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,st={};function et(D,$,P){this.props=D,this.context=$,this.refs=st,this.updater=P||H}et.prototype.isReactComponent={},et.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},et.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Et(){}Et.prototype=et.prototype;function gt(D,$,P){this.props=D,this.context=$,this.refs=st,this.updater=P||H}var ut=gt.prototype=new Et;ut.constructor=gt,J(ut,et.prototype),ut.isPureReactComponent=!0;var Dt=Array.isArray,Tt={H:null,A:null,T:null,S:null,V:null},zt=Object.prototype.hasOwnProperty;function V(D,$,P,K,Z,tt){return P=tt.ref,{$$typeof:i,type:D,key:$,ref:P!==void 0?P:null,props:tt}}function A(D,$){return V(D.type,$,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function N(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(P){return $[P]})}var M=/\/+/g;function x(D,$){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):$.toString(36)}function I(){}function re(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ee(D,$,P,K,Z){var tt=typeof D;(tt==="undefined"||tt==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(tt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case i:case t:dt=!0;break;case T:return dt=D._init,ee(dt(D._payload),$,P,K,Z)}}if(dt)return Z=Z(D),dt=K===""?"."+x(D,0):K,Dt(Z)?(P="",dt!=null&&(P=dt.replace(M,"$&/")+"/"),ee(Z,$,P,"",function(ze){return ze})):Z!=null&&(R(Z)&&(Z=A(Z,P+(Z.key==null||D&&D.key===Z.key?"":(""+Z.key).replace(M,"$&/")+"/")+dt)),$.push(Z)),1;dt=0;var Jt=K===""?".":K+":";if(Dt(D))for(var Ot=0;Ot<D.length;Ot++)K=D[Ot],tt=Jt+x(K,Ot),dt+=ee(K,$,P,tt,Z);else if(Ot=C(D),typeof Ot=="function")for(D=Ot.call(D),Ot=0;!(K=D.next()).done;)K=K.value,tt=Jt+x(K,Ot++),dt+=ee(K,$,P,tt,Z);else if(tt==="object"){if(typeof D.then=="function")return ee(re(D),$,P,K,Z);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function F(D,$,P){if(D==null)return D;var K=[],Z=0;return ee(D,K,"","",function(tt){return $.call(P,tt,Z++)}),K}function rt(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(P){(D._status===0||D._status===-1)&&(D._status=1,D._result=P)},function(P){(D._status===0||D._status===-1)&&(D._status=2,D._result=P)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Pt(){}return St.Children={map:F,forEach:function(D,$,P){F(D,function(){$.apply(this,arguments)},P)},count:function(D){var $=0;return F(D,function(){$++}),$},toArray:function(D){return F(D,function($){return $})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=et,St.Fragment=n,St.Profiler=o,St.PureComponent=gt,St.StrictMode=s,St.Suspense=y,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return Tt.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,$,P){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var K=J({},D.props),Z=D.key,tt=void 0;if($!=null)for(dt in $.ref!==void 0&&(tt=void 0),$.key!==void 0&&(Z=""+$.key),$)!zt.call($,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&$.ref===void 0||(K[dt]=$[dt]);var dt=arguments.length-2;if(dt===1)K.children=P;else if(1<dt){for(var Jt=Array(dt),Ot=0;Ot<dt;Ot++)Jt[Ot]=arguments[Ot+2];K.children=Jt}return V(D.type,Z,void 0,void 0,tt,K)},St.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},St.createElement=function(D,$,P){var K,Z={},tt=null;if($!=null)for(K in $.key!==void 0&&(tt=""+$.key),$)zt.call($,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(Z[K]=$[K]);var dt=arguments.length-2;if(dt===1)Z.children=P;else if(1<dt){for(var Jt=Array(dt),Ot=0;Ot<dt;Ot++)Jt[Ot]=arguments[Ot+2];Z.children=Jt}if(D&&D.defaultProps)for(K in dt=D.defaultProps,dt)Z[K]===void 0&&(Z[K]=dt[K]);return V(D,tt,void 0,void 0,null,Z)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:m,render:D}},St.isValidElement=R,St.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:rt}},St.memo=function(D,$){return{$$typeof:p,type:D,compare:$===void 0?null:$}},St.startTransition=function(D){var $=Tt.T,P={};Tt.T=P;try{var K=D(),Z=Tt.S;Z!==null&&Z(P,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Pt,ct)}catch(tt){ct(tt)}finally{Tt.T=$}},St.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()},St.use=function(D){return Tt.H.use(D)},St.useActionState=function(D,$,P){return Tt.H.useActionState(D,$,P)},St.useCallback=function(D,$){return Tt.H.useCallback(D,$)},St.useContext=function(D){return Tt.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,$){return Tt.H.useDeferredValue(D,$)},St.useEffect=function(D,$,P){var K=Tt.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(D,$)},St.useId=function(){return Tt.H.useId()},St.useImperativeHandle=function(D,$,P){return Tt.H.useImperativeHandle(D,$,P)},St.useInsertionEffect=function(D,$){return Tt.H.useInsertionEffect(D,$)},St.useLayoutEffect=function(D,$){return Tt.H.useLayoutEffect(D,$)},St.useMemo=function(D,$){return Tt.H.useMemo(D,$)},St.useOptimistic=function(D,$){return Tt.H.useOptimistic(D,$)},St.useReducer=function(D,$,P){return Tt.H.useReducer(D,$,P)},St.useRef=function(D){return Tt.H.useRef(D)},St.useState=function(D){return Tt.H.useState(D)},St.useSyncExternalStore=function(D,$,P){return Tt.H.useSyncExternalStore(D,$,P)},St.useTransition=function(){return Tt.H.useTransition()},St.version="19.1.1",St}var Av;function ag(){return Av||(Av=1,lm.exports=ab()),lm.exports}var le=ag();const ob=NT(le);var um={exports:{}},xl={},cm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function lb(){return Sv||(Sv=1,(function(i){function t(F,rt){var ct=F.length;F.push(rt);t:for(;0<ct;){var Pt=ct-1>>>1,D=F[Pt];if(0<o(D,rt))F[Pt]=rt,F[ct]=D,ct=Pt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var rt=F[0],ct=F.pop();if(ct!==rt){F[0]=ct;t:for(var Pt=0,D=F.length,$=D>>>1;Pt<$;){var P=2*(Pt+1)-1,K=F[P],Z=P+1,tt=F[Z];if(0>o(K,ct))Z<D&&0>o(tt,K)?(F[Pt]=tt,F[Z]=ct,Pt=Z):(F[Pt]=K,F[P]=ct,Pt=P);else if(Z<D&&0>o(tt,ct))F[Pt]=tt,F[Z]=ct,Pt=Z;else break t}}return rt}function o(F,rt){var ct=F.sortIndex-rt.sortIndex;return ct!==0?ct:F.id-rt.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var y=[],p=[],T=1,S=null,C=3,H=!1,J=!1,st=!1,et=!1,Et=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;function Dt(F){for(var rt=n(p);rt!==null;){if(rt.callback===null)s(p);else if(rt.startTime<=F)s(p),rt.sortIndex=rt.expirationTime,t(y,rt);else break;rt=n(p)}}function Tt(F){if(st=!1,Dt(F),!J)if(n(y)!==null)J=!0,zt||(zt=!0,x());else{var rt=n(p);rt!==null&&ee(Tt,rt.startTime-F)}}var zt=!1,V=-1,A=5,R=-1;function N(){return et?!0:!(i.unstable_now()-R<A)}function M(){if(et=!1,zt){var F=i.unstable_now();R=F;var rt=!0;try{t:{J=!1,st&&(st=!1,gt(V),V=-1),H=!0;var ct=C;try{e:{for(Dt(F),S=n(y);S!==null&&!(S.expirationTime>F&&N());){var Pt=S.callback;if(typeof Pt=="function"){S.callback=null,C=S.priorityLevel;var D=Pt(S.expirationTime<=F);if(F=i.unstable_now(),typeof D=="function"){S.callback=D,Dt(F),rt=!0;break e}S===n(y)&&s(y),Dt(F)}else s(y);S=n(y)}if(S!==null)rt=!0;else{var $=n(p);$!==null&&ee(Tt,$.startTime-F),rt=!1}}break t}finally{S=null,C=ct,H=!1}rt=void 0}}finally{rt?x():zt=!1}}}var x;if(typeof ut=="function")x=function(){ut(M)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,re=I.port2;I.port1.onmessage=M,x=function(){re.postMessage(null)}}else x=function(){Et(M,0)};function ee(F,rt){V=Et(function(){F(i.unstable_now())},rt)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(F){switch(C){case 1:case 2:case 3:var rt=3;break;default:rt=C}var ct=C;C=rt;try{return F()}finally{C=ct}},i.unstable_requestPaint=function(){et=!0},i.unstable_runWithPriority=function(F,rt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ct=C;C=F;try{return rt()}finally{C=ct}},i.unstable_scheduleCallback=function(F,rt,ct){var Pt=i.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?Pt+ct:Pt):ct=Pt,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ct+D,F={id:T++,callback:rt,priorityLevel:F,startTime:ct,expirationTime:D,sortIndex:-1},ct>Pt?(F.sortIndex=ct,t(p,F),n(y)===null&&F===n(p)&&(st?(gt(V),V=-1):st=!0,ee(Tt,ct-Pt))):(F.sortIndex=D,t(y,F),J||H||(J=!0,zt||(zt=!0,x()))),F},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(F){var rt=C;return function(){var ct=C;C=rt;try{return F.apply(this,arguments)}finally{C=ct}}}})(hm)),hm}var bv;function ub(){return bv||(bv=1,cm.exports=lb()),cm.exports}var fm={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function cb(){if(Rv)return $e;Rv=1;var i=ag();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:y,containerInfo:p,implementation:T}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$e.createPortal=function(y,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,T)},$e.flushSync=function(y){var p=f.T,T=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=T,s.d.f()}},$e.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},$e.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},$e.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var T=p.as,S=m(T,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:H}):T==="script"&&s.d.X(y,{crossOrigin:S,integrity:C,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},$e.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},$e.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,S=m(T,p.crossOrigin);s.d.L(y,T,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},$e.preloadModule=function(y,p){if(typeof y=="string")if(p){var T=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},$e.requestFormReset=function(y){s.d.r(y)},$e.unstable_batchedUpdates=function(y,p){return y(p)},$e.useFormState=function(y,p,T){return f.H.useFormState(y,p,T)},$e.useFormStatus=function(){return f.H.useHostTransitionStatus()},$e.version="19.1.1",$e}var Iv;function hb(){if(Iv)return fm.exports;Iv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),fm.exports=cb(),fm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function fb(){if(Cv)return xl;Cv=1;var i=ub(),t=ag(),n=hb();function s(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,a=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(a=r.return),e=r.return;while(e)}return r.tag===3?a:null}function f(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function y(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(s(188));return r!==e?null:e}for(var a=e,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:r}function p(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=p(e),r!==null)return r;e=e.sibling}return null}var T=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),Et=Symbol.for("react.provider"),gt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Dt=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function x(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case et:return"Profiler";case st:return"StrictMode";case Tt:return"Suspense";case zt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ut:return(e.displayName||"Context")+".Provider";case gt:return(e._context.displayName||"Context")+".Consumer";case Dt:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return r=e.displayName||null,r!==null?r:re(e.type)||"Memo";case A:r=e._payload,e=e._init;try{return re(e(r))}catch{}}return null}var ee=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},Pt=[],D=-1;function $(e){return{current:e}}function P(e){0>D||(e.current=Pt[D],Pt[D]=null,D--)}function K(e,r){D++,Pt[D]=e.current,e.current=r}var Z=$(null),tt=$(null),dt=$(null),Jt=$(null);function Ot(e,r){switch(K(dt,r),K(tt,e),K(Z,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?Q_(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=Q_(r),e=X_(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(Z),K(Z,e)}function ze(){P(Z),P(tt),P(dt)}function _e(e){e.memoizedState!==null&&K(Jt,e);var r=Z.current,a=X_(r,e.type);r!==a&&(K(tt,e),K(Z,a))}function on(e){tt.current===e&&(P(Z),P(tt)),Jt.current===e&&(P(Jt),Ol._currentValue=ct)}var ls=Object.prototype.hasOwnProperty,us=i.unstable_scheduleCallback,cs=i.unstable_cancelCallback,Io=i.unstable_shouldYield,vu=i.unstable_requestPaint,On=i.unstable_now,of=i.unstable_getCurrentPriorityLevel,Co=i.unstable_ImmediatePriority,la=i.unstable_UserBlockingPriority,hs=i.unstable_NormalPriority,lf=i.unstable_LowPriority,ua=i.unstable_IdlePriority,Do=i.log,Eu=i.unstable_setDisableYieldValue,ce=null,Ft=null;function gn(e){if(typeof Do=="function"&&Eu(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(ce,e)}catch{}}var Qe=Math.clz32?Math.clz32:fs,Tu=Math.log,uf=Math.LN2;function fs(e){return e>>>=0,e===0?32:31-(Tu(e)/uf|0)|0}var ds=256,ms=4194304;function Kn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ca(e,r,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Kn(l):(v&=E,v!==0?h=Kn(v):a||(a=E&~e,a!==0&&(h=Kn(a))))):(E=l&~d,E!==0?h=Kn(E):v!==0?h=Kn(v):a||(a=l&~e,a!==0&&(h=Kn(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function gs(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function Oo(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var e=ds;return ds<<=1,(ds&4194048)===0&&(ds=256),e}function Mo(){var e=ms;return ms<<=1,(ms&62914560)===0&&(ms=4194304),e}function Oi(e){for(var r=[],a=0;31>a;a++)r.push(e);return r}function Ni(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vo(e,r,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,b=e.expirationTimes,z=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Qe(a),Q=1<<G;E[G]=0,b[G]=-1;var B=z[G];if(B!==null)for(z[G]=null,G=0;G<B.length;G++){var q=B[G];q!==null&&(q.lane&=-536870913)}a&=~Q}l!==0&&ni(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~r))}function ni(e,r,a){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-Qe(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Po(e,r){var a=e.entangledLanes|=r;for(e=e.entanglements;a;){var l=31-Qe(a),h=1<<l;h&r|e[l]&r&&(e[l]|=r),a&=~h}}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ha(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dr(){var e=rt.p;return e!==0?e:(e=window.event,e===void 0?32:mv(e.type))}function wu(e,r){var a=rt.p;try{return rt.p=e,r()}finally{rt.p=a}}var se=Math.random().toString(36).slice(2),Re="__reactFiber$"+se,ve="__reactProps$"+se,Nn="__reactContainer$"+se,ko="__reactEvents$"+se,cf="__reactListeners$"+se,mr="__reactHandles$"+se,Au="__reactResources$"+se,ps="__reactMarker$"+se;function gr(e){delete e[Re],delete e[ve],delete e[ko],delete e[cf],delete e[mr]}function Mi(e){var r=e[Re];if(r)return r;for(var a=e.parentNode;a;){if(r=a[Nn]||a[Re]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(e=J_(e);e!==null;){if(a=e[Re])return a;e=J_(e)}return r}e=a,a=e.parentNode}return null}function ii(e){if(e=e[Re]||e[Nn]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function ri(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(s(33))}function nn(e){var r=e[Au];return r||(r=e[Au]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function de(e){e[ps]=!0}var xo=new Set,fa={};function Qn(e,r){Vi(e,r),Vi(e+"Capture",r)}function Vi(e,r){for(fa[e]=r,e=0;e<r.length;e++)xo.add(r[e])}var Su=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bu={},ys={};function Ru(e){return ls.call(ys,e)?!0:ls.call(bu,e)?!1:Su.test(e)?ys[e]=!0:(bu[e]=!0,!1)}function pr(e,r,a){if(Ru(r))if(a===null)e.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+a)}}function si(e,r,a){if(a===null)e.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+a)}}function Be(e,r,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(r,a,""+l)}}var _s,Iu;function Pi(e){if(_s===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);_s=r&&r[1]||"",Iu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+e+Iu}var da=!1;function ma(e,r){if(!e||da)return"";da=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(q){var B=q}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(q){B=q}e.call(Q.prototype)}}else{try{throw Error()}catch(q){B=q}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var b=v.split(`
`),z=E.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===z.length)for(l=b.length-1,h=z.length-1;1<=l&&0<=h&&b[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==z[h]){var G=`
`+b[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{da=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Pi(a):""}function Lo(e){switch(e.tag){case 26:case 27:case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 15:return ma(e.type,!1);case 11:return ma(e.type.render,!1);case 1:return ma(e.type,!0);case 31:return Pi("Activity");default:return""}}function ga(e){try{var r="";do r+=Lo(e),e=e.return;while(e);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uo(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function hf(e){var r=Uo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function pa(e){e._valueTracker||(e._valueTracker=hf(e))}function zo(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return e&&(l=Uo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(r.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ff=/[\n"\\]/g;function Ee(e){return e.replace(ff,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function pn(e,r,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),r!=null?v==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+rn(r)):e.value!==""+rn(r)&&(e.value=""+rn(r)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),r!=null?yr(e,v,rn(r)):a!=null?yr(e,v,rn(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+rn(E):e.removeAttribute("name")}function Es(e,r,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+rn(a):"",r=r!=null?""+rn(r):a,E||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function yr(e,r,a){r==="number"&&vs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ki(e,r,a,l){if(e=e.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=r.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+rn(a),r=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Qt(e,r,a){if(r!=null&&(r=""+rn(r),r!==e.value&&(e.value=r),a==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=a!=null?""+rn(a):""}function Ts(e,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(ee(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=rn(r),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Mn(e,r){if(r){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=r;return}}e.textContent=r}var ws=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cu(e,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,a):typeof a!="number"||a===0||ws.has(r)?r==="float"?e.cssFloat=a:e[r]=(""+a).trim():e[r]=a+"px"}function Bo(e,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&Cu(e,h,l)}else for(var d in r)r.hasOwnProperty(d)&&Cu(e,d,r[d])}function qo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ya(e){return mf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xi=null;function Vn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,Ui=null;function jo(e){var r=ii(e);if(r&&(e=r.stateNode)){var a=e[ve]||null;t:switch(e=r.stateNode,r.type){case"input":if(pn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==e&&l.form===e.form){var h=l[ve]||null;if(!h)throw Error(s(90));pn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===e.form&&zo(l)}break t;case"textarea":Qt(e,a.value,a.defaultValue);break t;case"select":r=a.value,r!=null&&ki(e,!!a.multiple,r,!1)}}}var ai=!1;function Du(e,r,a){if(ai)return e(r,a);ai=!0;try{var l=e(r);return l}finally{if(ai=!1,(Li!==null||Ui!==null)&&(wc(),Li&&(r=Li,e=Ui,Ui=Li=null,jo(r),e)))for(r=0;r<e.length;r++)jo(e[r])}}function As(e,r){var a=e.stateNode;if(a===null)return null;var l=a[ve]||null;if(l===null)return null;a=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(Xn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Pn=!1}var oi=null,_r=null,zi=null;function Ho(){if(zi)return zi;var e,r=_r,a=r.length,l,h="value"in oi?oi.value:oi.textContent,d=h.length;for(e=0;e<a&&r[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&r[a-l]===h[d-l];l++);return zi=h.slice(e,1<l?1-l:void 0)}function li(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Fo(){return!1}function Ve(e){function r(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ui:Fo,this.isPropagationStopped=Fo,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),r}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=Ve(jt),bs=T({},jt,{view:0,detail:0}),Ou=Ve(bs),va,Ea,ci,Rs=T({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(va=e.screenX-ci.screenX,Ea=e.screenY-ci.screenY):Ea=va=0,ci=e),va)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),kn=Ve(Rs),Nu=T({},Rs,{dataTransfer:0}),gf=Ve(Nu),Is=T({},bs,{relatedTarget:0}),Ta=Ve(Is),Go=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),wa=Ve(Go),Mu=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Aa=Ve(Mu),pf=T({},jt,{data:0}),Yo=Ve(pf),Cs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ko(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Pu[e])?!!r[e]:!1}function Ds(){return Ko}var ku=T({},bs,{key:function(e){if(e.key){var r=Cs[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sa=Ve(ku),xu=T({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=Ve(xu),Bi=T({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),Lu=Ve(Bi),Uu=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zu=Ve(Uu),Bu=T({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ba=Ve(Bu),sn=T({},jt,{newState:0,oldState:0}),qu=Ve(sn),ju=[9,13,27,32],hi=Xn&&"CompositionEvent"in window,c=null;Xn&&"documentMode"in document&&(c=document.documentMode);var g=Xn&&"TextEvent"in window&&!c,_=Xn&&(!hi||c&&8<c&&11>=c),w=" ",L=!1;function j(e,r){switch(e){case"keyup":return ju.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Ie(e,r){switch(e){case"compositionend":return nt(r);case"keypress":return r.which!==32?null:(L=!0,w);case"textInput":return e=r.data,e===w&&L?null:e;default:return null}}function xt(e,r){if(kt)return e==="compositionend"||!hi&&j(e,r)?(e=Ho(),zi=_r=oi=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _&&r.locale!=="ko"?null:r.data;default:return null}}var Pe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ce(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Pe[e.type]:r==="textarea"}function qi(e,r,a,l){Li?Ui?Ui.push(l):Ui=[l]:Li=l,r=Cc(r,"onChange"),0<r.length&&(a=new _a("onChange","change",null,a,l),e.push({event:a,listeners:r}))}var qe=null,fi=null;function Xo(e){H_(e,0)}function Hu(e){var r=ri(e);if(zo(r))return e}function cp(e,r){if(e==="change")return r}var hp=!1;if(Xn){var yf;if(Xn){var _f="oninput"in document;if(!_f){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),_f=typeof fp.oninput=="function"}yf=_f}else yf=!1;hp=yf&&(!document.documentMode||9<document.documentMode)}function dp(){qe&&(qe.detachEvent("onpropertychange",mp),fi=qe=null)}function mp(e){if(e.propertyName==="value"&&Hu(fi)){var r=[];qi(r,fi,e,Vn(e)),Du(Xo,r)}}function PA(e,r,a){e==="focusin"?(dp(),qe=r,fi=a,qe.attachEvent("onpropertychange",mp)):e==="focusout"&&dp()}function kA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hu(fi)}function xA(e,r){if(e==="click")return Hu(r)}function LA(e,r){if(e==="input"||e==="change")return Hu(r)}function UA(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var yn=typeof Object.is=="function"?Object.is:UA;function $o(e,r){if(yn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var a=Object.keys(e),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ls.call(r,h)||!yn(e[h],r[h]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,r){var a=gp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=r&&l>=r)return{node:a,offset:r-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function yp(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?yp(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function _p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=vs(e.document);r instanceof e.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)e=r.contentWindow;else break;r=vs(e.document)}return r}function vf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var zA=Xn&&"documentMode"in document&&11>=document.documentMode,Ra=null,Ef=null,Wo=null,Tf=!1;function vp(e,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tf||Ra==null||Ra!==vs(l)||(l=Ra,"selectionStart"in l&&vf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&$o(Wo,l)||(Wo=l,l=Cc(Ef,"onSelect"),0<l.length&&(r=new _a("onSelect","select",null,r,a),e.push({event:r,listeners:l}),r.target=Ra)))}function Os(e,r){var a={};return a[e.toLowerCase()]=r.toLowerCase(),a["Webkit"+e]="webkit"+r,a["Moz"+e]="moz"+r,a}var Ia={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},wf={},Ep={};Xn&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Ns(e){if(wf[e])return wf[e];if(!Ia[e])return e;var r=Ia[e],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ep)return wf[e]=r[a];return e}var Tp=Ns("animationend"),wp=Ns("animationiteration"),Ap=Ns("animationstart"),BA=Ns("transitionrun"),qA=Ns("transitionstart"),jA=Ns("transitioncancel"),Sp=Ns("transitionend"),bp=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function $n(e,r){bp.set(e,r),Qn(r,[e])}var Rp=new WeakMap;function xn(e,r){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(r={value:e,source:r,stack:ga(r)},Rp.set(e,r),r)}return{value:e,source:r,stack:ga(r)}}var Ln=[],Ca=0,Sf=0;function Fu(){for(var e=Ca,r=Sf=Ca=0;r<e;){var a=Ln[r];Ln[r++]=null;var l=Ln[r];Ln[r++]=null;var h=Ln[r];Ln[r++]=null;var d=Ln[r];if(Ln[r++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Ip(a,h,d)}}function Gu(e,r,a,l){Ln[Ca++]=e,Ln[Ca++]=r,Ln[Ca++]=a,Ln[Ca++]=l,Sf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bf(e,r,a,l){return Gu(e,r,a,l),Yu(e)}function Da(e,r){return Gu(e,null,null,r),Yu(e)}function Ip(e,r,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&r!==null&&(h=31-Qe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function Yu(e){if(50<wl)throw wl=0,Nd=null,Error(s(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var Oa={};function HA(e,r,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,r,a,l){return new HA(e,r,a,l)}function Rf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,r){var a=e.alternate;return a===null?(a=_n(e.tag,r,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=r,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,r=e.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cp(e,r){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,r=a.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Ku(e,r,a,l,h,d){var v=0;if(l=e,typeof e=="function")Rf(e)&&(v=1);else if(typeof e=="string")v=GS(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=_n(31,a,r,h),e.elementType=R,e.lanes=d,e;case J:return Ms(a.children,h,d,r);case st:v=8,h|=24;break;case et:return e=_n(12,a,r,h|2),e.elementType=et,e.lanes=d,e;case Tt:return e=_n(13,a,r,h),e.elementType=Tt,e.lanes=d,e;case zt:return e=_n(19,a,r,h),e.elementType=zt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:case ut:v=10;break t;case gt:v=9;break t;case Dt:v=11;break t;case V:v=14;break t;case A:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return r=_n(v,a,r,h),r.elementType=e,r.type=l,r.lanes=d,r}function Ms(e,r,a,l){return e=_n(7,e,l,r),e.lanes=a,e}function If(e,r,a){return e=_n(6,e,null,r),e.lanes=a,e}function Cf(e,r,a){return r=_n(4,e.children!==null?e.children:[],e.key,r),r.lanes=a,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Na=[],Ma=0,Qu=null,Xu=0,Un=[],zn=0,Vs=null,Hi=1,Fi="";function Ps(e,r){Na[Ma++]=Xu,Na[Ma++]=Qu,Qu=e,Xu=r}function Dp(e,r,a){Un[zn++]=Hi,Un[zn++]=Fi,Un[zn++]=Vs,Vs=e;var l=Hi;e=Fi;var h=32-Qe(l)-1;l&=~(1<<h),a+=1;var d=32-Qe(r)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Hi=1<<32-Qe(r)+h|a<<h|l,Fi=d+e}else Hi=1<<d|a<<h|l,Fi=e}function Df(e){e.return!==null&&(Ps(e,1),Dp(e,1,0))}function Of(e){for(;e===Qu;)Qu=Na[--Ma],Na[Ma]=null,Xu=Na[--Ma],Na[Ma]=null;for(;e===Vs;)Vs=Un[--zn],Un[zn]=null,Fi=Un[--zn],Un[zn]=null,Hi=Un[--zn],Un[zn]=null}var an=null,he=null,qt=!1,ks=null,di=!1,Nf=Error(s(519));function xs(e){var r=Error(s(418,""));throw tl(xn(r,e)),Nf}function Op(e){var r=e.stateNode,a=e.type,l=e.memoizedProps;switch(r[Re]=e,r[ve]=l,a){case"dialog":Ct("cancel",r),Ct("close",r);break;case"iframe":case"object":case"embed":Ct("load",r);break;case"video":case"audio":for(a=0;a<Sl.length;a++)Ct(Sl[a],r);break;case"source":Ct("error",r);break;case"img":case"image":case"link":Ct("error",r),Ct("load",r);break;case"details":Ct("toggle",r);break;case"input":Ct("invalid",r),Es(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pa(r);break;case"select":Ct("invalid",r);break;case"textarea":Ct("invalid",r),Ts(r,l.value,l.defaultValue,l.children),pa(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||K_(r.textContent,a)?(l.popover!=null&&(Ct("beforetoggle",r),Ct("toggle",r)),l.onScroll!=null&&Ct("scroll",r),l.onScrollEnd!=null&&Ct("scrollend",r),l.onClick!=null&&(r.onclick=Dc),r=!0):r=!1,r||xs(e)}function Np(e){for(an=e.return;an;)switch(an.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:an=an.return}}function Zo(e){if(e!==an)return!1;if(!qt)return Np(e),qt=!0,!1;var r=e.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kd(e.type,e.memoizedProps)),a=!a),a&&he&&xs(e),Np(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(r===0){he=Zn(e.nextSibling);break t}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;e=e.nextSibling}he=null}}else r===27?(r=he,Pr(e.type)?(e=Wd,Wd=null,he=e):he=r):he=an?Zn(e.stateNode.nextSibling):null;return!0}function Jo(){he=an=null,qt=!1}function Mp(){var e=ks;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),ks=null),e}function tl(e){ks===null?ks=[e]:ks.push(e)}var Mf=$(null),Ls=null,Gi=null;function vr(e,r,a){K(Mf,r._currentValue),r._currentValue=a}function Yi(e){e._currentValue=Mf.current,P(Mf)}function Vf(e,r,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===a)break;e=e.return}}function Pf(e,r,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var b=0;b<r.length;b++)if(E.context===r[b]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Vf(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Vf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function el(e,r,a,l){e=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;yn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Jt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}h=h.return}e!==null&&Pf(r,e,a,l),r.flags|=262144}function $u(e){for(e=e.firstContext;e!==null;){if(!yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ls=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Vp(Ls,e)}function Wu(e,r){return Ls===null&&Us(e),Vp(e,r)}function Vp(e,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else Gi=Gi.next=r;return a}var FA=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(a){return a()})}},GA=i.unstable_scheduleCallback,YA=i.unstable_NormalPriority,De={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kf(){return{controller:new FA,data:new Map,refCount:0}}function nl(e){e.refCount--,e.refCount===0&&GA(YA,function(){e.controller.abort()})}var il=null,xf=0,Va=0,Pa=null;function KA(e,r){if(il===null){var a=il=[];xf=0,Va=Ud(),Pa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return xf++,r.then(Pp,Pp),r}function Pp(){if(--xf===0&&il!==null){Pa!==null&&(Pa.status="fulfilled");var e=il;il=null,Va=0,Pa=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function QA(e,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var kp=F.S;F.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&KA(e,r),kp!==null&&kp(e,r)};var zs=$(null);function Lf(){var e=zs.current;return e!==null?e:te.pooledCache}function Zu(e,r){r===null?K(zs,zs.current):K(zs,r.pool)}function xp(){var e=Lf();return e===null?null:{parent:De._currentValue,pool:e}}var rl=Error(s(460)),Lp=Error(s(474)),Ju=Error(s(542)),Uf={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tc(){}function zp(e,r,a){switch(a=e[a],a===void 0?e.push(r):a!==r&&(r.then(tc,tc),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,qp(e),e;default:if(typeof r.status=="string")r.then(tc,tc);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,qp(e),e}throw sl=r,rl}}var sl=null;function Bp(){if(sl===null)throw Error(s(459));var e=sl;return sl=null,e}function qp(e){if(e===rl||e===Ju)throw Error(s(483))}var Er=!1;function zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wr(e,r,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Yu(e),Ip(e,null,a),r}return Gu(e,l,r,a),Yu(e)}function al(e,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,a|=l,r.lanes=a,Po(e,a)}}function qf(e,r){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=r:e.next=r,a.lastBaseUpdate=r}var jf=!1;function ol(){if(jf){var e=Pa;if(e!==null)throw e}}function ll(e,r,a,l){jf=!1;var h=e.updateQueue;Er=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var b=E,z=b.next;b.next=null,v===null?d=z:v.next=z,v=b;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==v&&(E===null?G.firstBaseUpdate=z:E.next=z,G.lastBaseUpdate=b))}if(d!==null){var Q=h.baseState;v=0,G=z=b=null,E=d;do{var B=E.lane&-536870913,q=B!==E.lane;if(q?(Lt&B)===B:(l&B)===B){B!==0&&B===Va&&(jf=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var vt=e,mt=E;B=r;var Wt=a;switch(mt.tag){case 1:if(vt=mt.payload,typeof vt=="function"){Q=vt.call(Wt,Q,B);break t}Q=vt;break t;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=mt.payload,B=typeof vt=="function"?vt.call(Wt,Q,B):vt,B==null)break t;Q=T({},Q,B);break t;case 2:Er=!0}}B=E.callback,B!==null&&(e.flags|=64,q&&(e.flags|=8192),q=h.callbacks,q===null?h.callbacks=[B]:q.push(B))}else q={lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(z=G=q,b=Q):G=G.next=q,v|=B;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;q=E,E=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);G===null&&(b=Q),h.baseState=b,h.firstBaseUpdate=z,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Or|=v,e.lanes=v,e.memoizedState=Q}}function jp(e,r){if(typeof e!="function")throw Error(s(191,e));e.call(r)}function Hp(e,r){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],r)}var ka=$(null),ec=$(0);function Fp(e,r){e=Ji,K(ec,e),K(ka,r),Ji=e|r.baseLanes}function Hf(){K(ec,Ji),K(ka,ka.current)}function Ff(){Ji=ec.current,P(ka),P(ec)}var Ar=0,bt=null,Xt=null,Te=null,nc=!1,xa=!1,Bs=!1,ic=0,ul=0,La=null,XA=0;function me(){throw Error(s(321))}function Gf(e,r){if(r===null)return!1;for(var a=0;a<r.length&&a<e.length;a++)if(!yn(e[a],r[a]))return!1;return!0}function Yf(e,r,a,l,h,d){return Ar=d,bt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,F.H=e===null||e.memoizedState===null?Iy:Cy,Bs=!1,d=a(l,h),Bs=!1,xa&&(d=Yp(r,a,l,h)),Gp(e),d}function Gp(e){F.H=uc;var r=Xt!==null&&Xt.next!==null;if(Ar=0,Te=Xt=bt=null,nc=!1,ul=0,La=null,r)throw Error(s(300));e===null||ke||(e=e.dependencies,e!==null&&$u(e)&&(ke=!0))}function Yp(e,r,a,l){bt=e;var h=0;do{if(xa&&(La=null),ul=0,xa=!1,25<=h)throw Error(s(301));if(h+=1,Te=Xt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=nS,d=r(a,l)}while(xa);return d}function $A(){var e=F.H,r=e.useState()[0];return r=typeof r.then=="function"?cl(r):r,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(bt.flags|=1024),r}function Kf(){var e=ic!==0;return ic=0,e}function Qf(e,r,a){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a}function Xf(e){if(nc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}nc=!1}Ar=0,Te=Xt=bt=null,xa=!1,ul=ic=0,La=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?bt.memoizedState=Te=e:Te=Te.next=e,Te}function we(){if(Xt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var r=Te===null?bt.memoizedState:Te.next;if(r!==null)Te=r,Xt=e;else{if(e===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Te===null?bt.memoizedState=Te=e:Te=Te.next=e}return Te}function $f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(e){var r=ul;return ul+=1,La===null&&(La=[]),e=zp(La,e,r),r=bt,(Te===null?r.memoizedState:Te.next)===null&&(r=r.alternate,F.H=r===null||r.memoizedState===null?Iy:Cy),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cl(e);if(e.$$typeof===ut)return Xe(e)}throw Error(s(438,String(e)))}function Wf(e){var r=null,a=bt.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=$f(),bt.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(e),l=0;l<e;l++)a[l]=N;return r.index++,a}function Ki(e,r){return typeof r=="function"?r(e):r}function sc(e){var r=we();return Zf(r,Xt,e)}function Zf(e,r,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}r.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{r=h.next;var E=v=null,b=null,z=r,G=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Lt&Q)===Q:(Ar&Q)===Q){var B=z.revertLane;if(B===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Va&&(G=!0);else if((Ar&B)===B){z=z.next,B===Va&&(G=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},b===null?(E=b=Q,v=d):b=b.next=Q,bt.lanes|=B,Or|=B;Q=z.action,Bs&&a(d,Q),d=z.hasEagerState?z.eagerState:a(d,Q)}else B={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},b===null?(E=b=B,v=d):b=b.next=B,bt.lanes|=Q,Or|=Q;z=z.next}while(z!==null&&z!==r);if(b===null?v=d:b.next=E,!yn(d,e.memoizedState)&&(ke=!0,G&&(a=Pa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Jf(e){var r=we(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);yn(d,r.memoizedState)||(ke=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function Kp(e,r,a){var l=bt,h=we(),d=qt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!yn((Xt||h).memoizedState,a);v&&(h.memoizedState=a,ke=!0),h=h.queue;var E=$p.bind(null,l,h,e);if(hl(2048,8,E,[e]),h.getSnapshot!==r||v||Te!==null&&Te.memoizedState.tag&1){if(l.flags|=2048,Ua(9,ac(),Xp.bind(null,l,h,a,r),null),te===null)throw Error(s(349));d||(Ar&124)!==0||Qp(l,r,a)}return a}function Qp(e,r,a){e.flags|=16384,e={getSnapshot:r,value:a},r=bt.updateQueue,r===null?(r=$f(),bt.updateQueue=r,r.stores=[e]):(a=r.stores,a===null?r.stores=[e]:a.push(e))}function Xp(e,r,a,l){r.value=a,r.getSnapshot=l,Wp(r)&&Zp(e)}function $p(e,r,a){return a(function(){Wp(r)&&Zp(e)})}function Wp(e){var r=e.getSnapshot;e=e.value;try{var a=r();return!yn(e,a)}catch{return!0}}function Zp(e){var r=Da(e,2);r!==null&&An(r,e,2)}function td(e){var r=ln();if(typeof e=="function"){var a=e;if(e=a(),Bs){gn(!0);try{a()}finally{gn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},r}function Jp(e,r,a,l){return e.baseState=a,Zf(e,Xt,typeof l=="function"?l:Ki)}function WA(e,r,a,l,h){if(lc(e))throw Error(s(485));if(e=r.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,ty(r,d)):(d.next=a.next,r.pending=a.next=d)}}function ty(e,r){var a=r.action,l=r.payload,h=e.state;if(r.isTransition){var d=F.T,v={};F.T=v;try{var E=a(h,l),b=F.S;b!==null&&b(v,E),ey(e,r,E)}catch(z){ed(e,r,z)}finally{F.T=d}}else try{d=a(h,l),ey(e,r,d)}catch(z){ed(e,r,z)}}function ey(e,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ny(e,r,l)},function(l){return ed(e,r,l)}):ny(e,r,a)}function ny(e,r,a){r.status="fulfilled",r.value=a,iy(r),e.state=a,r=e.pending,r!==null&&(a=r.next,a===r?e.pending=null:(a=a.next,r.next=a,ty(e,a)))}function ed(e,r,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,iy(r),r=r.next;while(r!==l)}e.action=null}function iy(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function ry(e,r){return r}function sy(e,r){if(qt){var a=te.formState;if(a!==null){t:{var l=bt;if(qt){if(he){e:{for(var h=he,d=di;h.nodeType!==8;){if(!d){h=null;break e}if(h=Zn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){he=Zn(h.nextSibling),l=h.data==="F!";break t}}xs(l)}l=!1}l&&(r=a[0])}}return a=ln(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ry,lastRenderedState:r},a.queue=l,a=Sy.bind(null,bt,l),l.dispatch=a,l=td(!1),d=ad.bind(null,bt,!1,l.queue),l=ln(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,a=WA.bind(null,bt,h,d,a),h.dispatch=a,l.memoizedState=e,[r,a,!1]}function ay(e){var r=we();return oy(r,Xt,e)}function oy(e,r,a){if(r=Zf(e,r,ry)[0],e=sc(Ki)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=cl(r)}catch(v){throw v===rl?Ju:v}else l=r;r=we();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(bt.flags|=2048,Ua(9,ac(),ZA.bind(null,h,a),null)),[l,d,e]}function ZA(e,r){e.action=r}function ly(e){var r=we(),a=Xt;if(a!==null)return oy(r,a,e);we(),r=r.memoizedState,a=we();var l=a.queue.dispatch;return a.memoizedState=e,[r,l,!1]}function Ua(e,r,a,l){return e={tag:e,create:a,deps:l,inst:r,next:null},r=bt.updateQueue,r===null&&(r=$f(),bt.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,r.lastEffect=e),e}function ac(){return{destroy:void 0,resource:void 0}}function uy(){return we().memoizedState}function oc(e,r,a,l){var h=ln();l=l===void 0?null:l,bt.flags|=e,h.memoizedState=Ua(1|r,ac(),a,l)}function hl(e,r,a,l){var h=we();l=l===void 0?null:l;var d=h.memoizedState.inst;Xt!==null&&l!==null&&Gf(l,Xt.memoizedState.deps)?h.memoizedState=Ua(r,d,a,l):(bt.flags|=e,h.memoizedState=Ua(1|r,d,a,l))}function cy(e,r){oc(8390656,8,e,r)}function hy(e,r){hl(2048,8,e,r)}function fy(e,r){return hl(4,2,e,r)}function dy(e,r){return hl(4,4,e,r)}function my(e,r){if(typeof r=="function"){e=e();var a=r(e);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function gy(e,r,a){a=a!=null?a.concat([e]):null,hl(4,4,my.bind(null,r,e),a)}function nd(){}function py(e,r){var a=we();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Gf(r,l[1])?l[0]:(a.memoizedState=[e,r],e)}function yy(e,r){var a=we();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Gf(r,l[1]))return l[0];if(l=e(),Bs){gn(!0);try{e()}finally{gn(!1)}}return a.memoizedState=[l,r],l}function id(e,r,a){return a===void 0||(Ar&1073741824)!==0?e.memoizedState=r:(e.memoizedState=a,e=E_(),bt.lanes|=e,Or|=e,a)}function _y(e,r,a,l){return yn(a,r)?a:ka.current!==null?(e=id(e,a,l),yn(e,r)||(ke=!0),e):(Ar&42)===0?(ke=!0,e.memoizedState=a):(e=E_(),bt.lanes|=e,Or|=e,r)}function vy(e,r,a,l,h){var d=rt.p;rt.p=d!==0&&8>d?d:8;var v=F.T,E={};F.T=E,ad(e,!1,r,a);try{var b=h(),z=F.S;if(z!==null&&z(E,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var G=QA(b,l);fl(e,r,G,wn(e))}else fl(e,r,l,wn(e))}catch(Q){fl(e,r,{then:function(){},status:"rejected",reason:Q},wn())}finally{rt.p=d,F.T=v}}function JA(){}function rd(e,r,a,l){if(e.tag!==5)throw Error(s(476));var h=Ey(e).queue;vy(e,h,r,ct,a===null?JA:function(){return Ty(e),a(l)})}function Ey(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ct},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function Ty(e){var r=Ey(e).next.queue;fl(e,r,{},wn())}function sd(){return Xe(Ol)}function wy(){return we().memoizedState}function Ay(){return we().memoizedState}function tS(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var a=wn();e=Tr(a);var l=wr(r,e,a);l!==null&&(An(l,r,a),al(l,r,a)),r={cache:kf()},e.payload=r;return}r=r.return}}function eS(e,r,a){var l=wn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},lc(e)?by(r,a):(a=bf(e,r,a,l),a!==null&&(An(a,e,l),Ry(a,r,l)))}function Sy(e,r,a){var l=wn();fl(e,r,a,l)}function fl(e,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(e))by(r,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,yn(E,v))return Gu(e,r,h,0),te===null&&Fu(),!1}catch{}finally{}if(a=bf(e,r,h,l),a!==null)return An(a,e,l),Ry(a,r,l),!0}return!1}function ad(e,r,a,l){if(l={lane:2,revertLane:Ud(),action:l,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(r)throw Error(s(479))}else r=bf(e,a,l,2),r!==null&&An(r,e,2)}function lc(e){var r=e.alternate;return e===bt||r!==null&&r===bt}function by(e,r){xa=nc=!0;var a=e.pending;a===null?r.next=r:(r.next=a.next,a.next=r),e.pending=r}function Ry(e,r,a){if((a&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,a|=l,r.lanes=a,Po(e,a)}}var uc={readContext:Xe,use:rc,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me},Iy={readContext:Xe,use:rc,useCallback:function(e,r){return ln().memoizedState=[e,r===void 0?null:r],e},useContext:Xe,useEffect:cy,useImperativeHandle:function(e,r,a){a=a!=null?a.concat([e]):null,oc(4194308,4,my.bind(null,r,e),a)},useLayoutEffect:function(e,r){return oc(4194308,4,e,r)},useInsertionEffect:function(e,r){oc(4,2,e,r)},useMemo:function(e,r){var a=ln();r=r===void 0?null:r;var l=e();if(Bs){gn(!0);try{e()}finally{gn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(e,r,a){var l=ln();if(a!==void 0){var h=a(r);if(Bs){gn(!0);try{a(r)}finally{gn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=eS.bind(null,bt,e),[l.memoizedState,e]},useRef:function(e){var r=ln();return e={current:e},r.memoizedState=e},useState:function(e){e=td(e);var r=e.queue,a=Sy.bind(null,bt,r);return r.dispatch=a,[e.memoizedState,a]},useDebugValue:nd,useDeferredValue:function(e,r){var a=ln();return id(a,e,r)},useTransition:function(){var e=td(!1);return e=vy.bind(null,bt,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,a){var l=bt,h=ln();if(qt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),te===null)throw Error(s(349));(Lt&124)!==0||Qp(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,cy($p.bind(null,l,d,e),[e]),l.flags|=2048,Ua(9,ac(),Xp.bind(null,l,d,a,r),null),a},useId:function(){var e=ln(),r=te.identifierPrefix;if(qt){var a=Fi,l=Hi;a=(l&~(1<<32-Qe(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=ic++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=XA++,r="«"+r+"r"+a.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:sd,useFormState:sy,useActionState:sy,useOptimistic:function(e){var r=ln();r.memoizedState=r.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=ad.bind(null,bt,!0,a),a.dispatch=r,[e,r]},useMemoCache:Wf,useCacheRefresh:function(){return ln().memoizedState=tS.bind(null,bt)}},Cy={readContext:Xe,use:rc,useCallback:py,useContext:Xe,useEffect:hy,useImperativeHandle:gy,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:yy,useReducer:sc,useRef:uy,useState:function(){return sc(Ki)},useDebugValue:nd,useDeferredValue:function(e,r){var a=we();return _y(a,Xt.memoizedState,e,r)},useTransition:function(){var e=sc(Ki)[0],r=we().memoizedState;return[typeof e=="boolean"?e:cl(e),r]},useSyncExternalStore:Kp,useId:wy,useHostTransitionStatus:sd,useFormState:ay,useActionState:ay,useOptimistic:function(e,r){var a=we();return Jp(a,Xt,e,r)},useMemoCache:Wf,useCacheRefresh:Ay},nS={readContext:Xe,use:rc,useCallback:py,useContext:Xe,useEffect:hy,useImperativeHandle:gy,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:yy,useReducer:Jf,useRef:uy,useState:function(){return Jf(Ki)},useDebugValue:nd,useDeferredValue:function(e,r){var a=we();return Xt===null?id(a,e,r):_y(a,Xt.memoizedState,e,r)},useTransition:function(){var e=Jf(Ki)[0],r=we().memoizedState;return[typeof e=="boolean"?e:cl(e),r]},useSyncExternalStore:Kp,useId:wy,useHostTransitionStatus:sd,useFormState:ly,useActionState:ly,useOptimistic:function(e,r){var a=we();return Xt!==null?Jp(a,Xt,e,r):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wf,useCacheRefresh:Ay},za=null,dl=0;function cc(e){var r=dl;return dl+=1,za===null&&(za=[]),zp(za,e,r)}function ml(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function hc(e,r){throw r.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(r),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function Dy(e){var r=e._init;return r(e._payload)}function Oy(e){function r(k,O){if(e){var U=k.deletions;U===null?(k.deletions=[O],k.flags|=16):U.push(O)}}function a(k,O){if(!e)return null;for(;O!==null;)r(k,O),O=O.sibling;return null}function l(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function h(k,O){return k=ji(k,O),k.index=0,k.sibling=null,k}function d(k,O,U){return k.index=U,e?(U=k.alternate,U!==null?(U=U.index,U<O?(k.flags|=67108866,O):U):(k.flags|=67108866,O)):(k.flags|=1048576,O)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function E(k,O,U,Y){return O===null||O.tag!==6?(O=If(U,k.mode,Y),O.return=k,O):(O=h(O,U),O.return=k,O)}function b(k,O,U,Y){var ot=U.type;return ot===J?G(k,O,U.props.children,Y,U.key):O!==null&&(O.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===A&&Dy(ot)===O.type)?(O=h(O,U.props),ml(O,U),O.return=k,O):(O=Ku(U.type,U.key,U.props,null,k.mode,Y),ml(O,U),O.return=k,O)}function z(k,O,U,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Cf(U,k.mode,Y),O.return=k,O):(O=h(O,U.children||[]),O.return=k,O)}function G(k,O,U,Y,ot){return O===null||O.tag!==7?(O=Ms(U,k.mode,Y,ot),O.return=k,O):(O=h(O,U),O.return=k,O)}function Q(k,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=If(""+O,k.mode,U),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=Ku(O.type,O.key,O.props,null,k.mode,U),ml(U,O),U.return=k,U;case H:return O=Cf(O,k.mode,U),O.return=k,O;case A:var Y=O._init;return O=Y(O._payload),Q(k,O,U)}if(ee(O)||x(O))return O=Ms(O,k.mode,U,null),O.return=k,O;if(typeof O.then=="function")return Q(k,cc(O),U);if(O.$$typeof===ut)return Q(k,Wu(k,O),U);hc(k,O)}return null}function B(k,O,U,Y){var ot=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ot!==null?null:E(k,O,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===ot?b(k,O,U,Y):null;case H:return U.key===ot?z(k,O,U,Y):null;case A:return ot=U._init,U=ot(U._payload),B(k,O,U,Y)}if(ee(U)||x(U))return ot!==null?null:G(k,O,U,Y,null);if(typeof U.then=="function")return B(k,O,cc(U),Y);if(U.$$typeof===ut)return B(k,O,Wu(k,U),Y);hc(k,U)}return null}function q(k,O,U,Y,ot){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return k=k.get(U)||null,E(O,k,""+Y,ot);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case C:return k=k.get(Y.key===null?U:Y.key)||null,b(O,k,Y,ot);case H:return k=k.get(Y.key===null?U:Y.key)||null,z(O,k,Y,ot);case A:var Rt=Y._init;return Y=Rt(Y._payload),q(k,O,U,Y,ot)}if(ee(Y)||x(Y))return k=k.get(U)||null,G(O,k,Y,ot,null);if(typeof Y.then=="function")return q(k,O,U,cc(Y),ot);if(Y.$$typeof===ut)return q(k,O,U,Wu(O,Y),ot);hc(O,Y)}return null}function vt(k,O,U,Y){for(var ot=null,Rt=null,ht=O,pt=O=0,Le=null;ht!==null&&pt<U.length;pt++){ht.index>pt?(Le=ht,ht=null):Le=ht.sibling;var Bt=B(k,ht,U[pt],Y);if(Bt===null){ht===null&&(ht=Le);break}e&&ht&&Bt.alternate===null&&r(k,ht),O=d(Bt,O,pt),Rt===null?ot=Bt:Rt.sibling=Bt,Rt=Bt,ht=Le}if(pt===U.length)return a(k,ht),qt&&Ps(k,pt),ot;if(ht===null){for(;pt<U.length;pt++)ht=Q(k,U[pt],Y),ht!==null&&(O=d(ht,O,pt),Rt===null?ot=ht:Rt.sibling=ht,Rt=ht);return qt&&Ps(k,pt),ot}for(ht=l(ht);pt<U.length;pt++)Le=q(ht,k,pt,U[pt],Y),Le!==null&&(e&&Le.alternate!==null&&ht.delete(Le.key===null?pt:Le.key),O=d(Le,O,pt),Rt===null?ot=Le:Rt.sibling=Le,Rt=Le);return e&&ht.forEach(function(zr){return r(k,zr)}),qt&&Ps(k,pt),ot}function mt(k,O,U,Y){if(U==null)throw Error(s(151));for(var ot=null,Rt=null,ht=O,pt=O=0,Le=null,Bt=U.next();ht!==null&&!Bt.done;pt++,Bt=U.next()){ht.index>pt?(Le=ht,ht=null):Le=ht.sibling;var zr=B(k,ht,Bt.value,Y);if(zr===null){ht===null&&(ht=Le);break}e&&ht&&zr.alternate===null&&r(k,ht),O=d(zr,O,pt),Rt===null?ot=zr:Rt.sibling=zr,Rt=zr,ht=Le}if(Bt.done)return a(k,ht),qt&&Ps(k,pt),ot;if(ht===null){for(;!Bt.done;pt++,Bt=U.next())Bt=Q(k,Bt.value,Y),Bt!==null&&(O=d(Bt,O,pt),Rt===null?ot=Bt:Rt.sibling=Bt,Rt=Bt);return qt&&Ps(k,pt),ot}for(ht=l(ht);!Bt.done;pt++,Bt=U.next())Bt=q(ht,k,pt,Bt.value,Y),Bt!==null&&(e&&Bt.alternate!==null&&ht.delete(Bt.key===null?pt:Bt.key),O=d(Bt,O,pt),Rt===null?ot=Bt:Rt.sibling=Bt,Rt=Bt);return e&&ht.forEach(function(ib){return r(k,ib)}),qt&&Ps(k,pt),ot}function Wt(k,O,U,Y){if(typeof U=="object"&&U!==null&&U.type===J&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var ot=U.key;O!==null;){if(O.key===ot){if(ot=U.type,ot===J){if(O.tag===7){a(k,O.sibling),Y=h(O,U.props.children),Y.return=k,k=Y;break t}}else if(O.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===A&&Dy(ot)===O.type){a(k,O.sibling),Y=h(O,U.props),ml(Y,U),Y.return=k,k=Y;break t}a(k,O);break}else r(k,O);O=O.sibling}U.type===J?(Y=Ms(U.props.children,k.mode,Y,U.key),Y.return=k,k=Y):(Y=Ku(U.type,U.key,U.props,null,k.mode,Y),ml(Y,U),Y.return=k,k=Y)}return v(k);case H:t:{for(ot=U.key;O!==null;){if(O.key===ot)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(k,O.sibling),Y=h(O,U.children||[]),Y.return=k,k=Y;break t}else{a(k,O);break}else r(k,O);O=O.sibling}Y=Cf(U,k.mode,Y),Y.return=k,k=Y}return v(k);case A:return ot=U._init,U=ot(U._payload),Wt(k,O,U,Y)}if(ee(U))return vt(k,O,U,Y);if(x(U)){if(ot=x(U),typeof ot!="function")throw Error(s(150));return U=ot.call(U),mt(k,O,U,Y)}if(typeof U.then=="function")return Wt(k,O,cc(U),Y);if(U.$$typeof===ut)return Wt(k,O,Wu(k,U),Y);hc(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(k,O.sibling),Y=h(O,U),Y.return=k,k=Y):(a(k,O),Y=If(U,k.mode,Y),Y.return=k,k=Y),v(k)):a(k,O)}return function(k,O,U,Y){try{dl=0;var ot=Wt(k,O,U,Y);return za=null,ot}catch(ht){if(ht===rl||ht===Ju)throw ht;var Rt=_n(29,ht,null,k.mode);return Rt.lanes=Y,Rt.return=k,Rt}finally{}}}var Ba=Oy(!0),Ny=Oy(!1),Bn=$(null),mi=null;function Sr(e){var r=e.alternate;K(Oe,Oe.current&1),K(Bn,e),mi===null&&(r===null||ka.current!==null||r.memoizedState!==null)&&(mi=e)}function My(e){if(e.tag===22){if(K(Oe,Oe.current),K(Bn,e),mi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(mi=e)}}else br()}function br(){K(Oe,Oe.current),K(Bn,Bn.current)}function Qi(e){P(Bn),mi===e&&(mi=null),P(Oe)}var Oe=$(0);function fc(e){for(var r=e;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||$d(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function od(e,r,a,l){r=e.memoizedState,a=a(l,r),a=a==null?r:T({},r,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ld={enqueueSetState:function(e,r,a){e=e._reactInternals;var l=wn(),h=Tr(l);h.payload=r,a!=null&&(h.callback=a),r=wr(e,h,l),r!==null&&(An(r,e,l),al(r,e,l))},enqueueReplaceState:function(e,r,a){e=e._reactInternals;var l=wn(),h=Tr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=wr(e,h,l),r!==null&&(An(r,e,l),al(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var a=wn(),l=Tr(a);l.tag=2,r!=null&&(l.callback=r),r=wr(e,l,a),r!==null&&(An(r,e,a),al(r,e,a))}};function Vy(e,r,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!$o(a,l)||!$o(h,d):!0}function Py(e,r,a,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==e&&ld.enqueueReplaceState(r,r.state,null)}function qs(e,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(e=e.defaultProps){a===r&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ky(e){dc(e)}function xy(e){console.error(e)}function Ly(e){dc(e)}function mc(e,r){try{var a=e.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Uy(e,r,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ud(e,r,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){mc(e,r)},a}function zy(e){return e=Tr(e),e.tag=3,e}function By(e,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Uy(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Uy(r,a,l),typeof h!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function iS(e,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&el(r,a,h,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return mi===null?Vd():a.alternate===null&&fe===0&&(fe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Uf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),kd(e,l,h)),!1;case 22:return a.flags|=65536,l===Uf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),kd(e,l,h)),!1}throw Error(s(435,a.tag))}return kd(e,l,h),Vd(),!1}if(qt)return r=Bn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Nf&&(e=Error(s(422),{cause:l}),tl(xn(e,a)))):(l!==Nf&&(r=Error(s(423),{cause:l}),tl(xn(r,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=xn(l,a),h=ud(e.stateNode,l,h),qf(e,h),fe!==4&&(fe=2)),!1;var d=Error(s(520),{cause:l});if(d=xn(d,a),Tl===null?Tl=[d]:Tl.push(d),fe!==4&&(fe=2),r===null)return!0;l=xn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=ud(a.stateNode,l,e),qf(a,e),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nr===null||!Nr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=zy(h),By(h,e,a,l),qf(a,h),!1}a=a.return}while(a!==null);return!1}var qy=Error(s(461)),ke=!1;function je(e,r,a,l){r.child=e===null?Ny(r,null,a,l):Ba(r,e.child,a,l)}function jy(e,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Us(r),l=Yf(e,r,a,v,d,h),E=Kf(),e!==null&&!ke?(Qf(e,r,h),Xi(e,r,h)):(qt&&E&&Df(r),r.flags|=1,je(e,r,l,h),r.child)}function Hy(e,r,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Rf(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,Fy(e,r,d,l,h)):(e=Ku(a.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(d=e.child,!yd(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(v,l)&&e.ref===r.ref)return Xi(e,r,h)}return r.flags|=1,e=ji(d,l),e.ref=r.ref,e.return=r,r.child=e}function Fy(e,r,a,l,h){if(e!==null){var d=e.memoizedProps;if($o(d,l)&&e.ref===r.ref)if(ke=!1,r.pendingProps=l=d,yd(e,h))(e.flags&131072)!==0&&(ke=!0);else return r.lanes=e.lanes,Xi(e,r,h)}return cd(e,r,a,l,h)}function Gy(e,r,a){var l=r.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=r.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return Yy(e,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zu(r,d!==null?d.cachePool:null),d!==null?Fp(r,d):Hf(),My(r);else return r.lanes=r.childLanes=536870912,Yy(e,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(Zu(r,d.cachePool),Fp(r,d),br(),r.memoizedState=null):(e!==null&&Zu(r,null),Hf(),br());return je(e,r,h,a),r.child}function Yy(e,r,a,l){var h=Lf();return h=h===null?null:{parent:De._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},e!==null&&Zu(r,null),Hf(),My(r),e!==null&&el(e,r,l,!0),null}function gc(e,r){var a=r.ref;if(a===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(r.flags|=4194816)}}function cd(e,r,a,l,h){return Us(r),a=Yf(e,r,a,l,void 0,h),l=Kf(),e!==null&&!ke?(Qf(e,r,h),Xi(e,r,h)):(qt&&l&&Df(r),r.flags|=1,je(e,r,a,h),r.child)}function Ky(e,r,a,l,h,d){return Us(r),r.updateQueue=null,a=Yp(r,l,a,h),Gp(e),l=Kf(),e!==null&&!ke?(Qf(e,r,d),Xi(e,r,d)):(qt&&l&&Df(r),r.flags|=1,je(e,r,a,d),r.child)}function Qy(e,r,a,l,h){if(Us(r),r.stateNode===null){var d=Oa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Xe(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ld,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},zf(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?Xe(v):Oa,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(od(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ld.enqueueReplaceState(d,d.state,null),ll(r,l,d,h),ol(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){d=r.stateNode;var E=r.memoizedProps,b=qs(a,E);d.props=b;var z=d.context,G=a.contextType;v=Oa,typeof G=="object"&&G!==null&&(v=Xe(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=r.pendingProps!==E,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||z!==v)&&Py(r,d,l,v),Er=!1;var B=r.memoizedState;d.state=B,ll(r,l,d,h),ol(),z=r.memoizedState,E||B!==z||Er?(typeof Q=="function"&&(od(r,a,Q,l),z=r.memoizedState),(b=Er||Vy(r,a,b,l,B,z,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=z),d.props=l,d.state=z,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Bf(e,r),v=r.memoizedProps,G=qs(a,v),d.props=G,Q=r.pendingProps,B=d.context,z=a.contextType,b=Oa,typeof z=="object"&&z!==null&&(b=Xe(z)),E=a.getDerivedStateFromProps,(z=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||B!==b)&&Py(r,d,l,b),Er=!1,B=r.memoizedState,d.state=B,ll(r,l,d,h),ol();var q=r.memoizedState;v!==Q||B!==q||Er||e!==null&&e.dependencies!==null&&$u(e.dependencies)?(typeof E=="function"&&(od(r,a,E,l),q=r.memoizedState),(G=Er||Vy(r,a,G,l,B,q,b)||e!==null&&e.dependencies!==null&&$u(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,b)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=q),d.props=l,d.state=q,d.context=b,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(r.flags|=1024),l=!1)}return d=l,gc(e,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,e!==null&&l?(r.child=Ba(r,e.child,null,h),r.child=Ba(r,null,a,h)):je(e,r,a,h),r.memoizedState=d.state,e=r.child):e=Xi(e,r,h),e}function Xy(e,r,a,l){return Jo(),r.flags|=256,je(e,r,a,l),r.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fd(e){return{baseLanes:e,cachePool:xp()}}function dd(e,r,a){return e=e!==null?e.childLanes&~a:0,r&&(e|=qn),e}function $y(e,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),v&&(h=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,e===null){if(qt){if(h?Sr(r):br(),qt){var E=he,b;if(b=E){t:{for(b=E,E=di;b.nodeType!==8;){if(!E){E=null;break t}if(b=Zn(b.nextSibling),b===null){E=null;break t}}E=b}E!==null?(r.memoizedState={dehydrated:E,treeContext:Vs!==null?{id:Hi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},b=_n(18,null,null,0),b.stateNode=E,b.return=r,r.child=b,an=r,he=null,b=!0):b=!1}b||xs(r)}if(E=r.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return $d(E)?r.lanes=32:r.lanes=536870912,null;Qi(r)}return E=l.children,l=l.fallback,h?(br(),h=r.mode,E=pc({mode:"hidden",children:E},h),l=Ms(l,h,a,null),E.return=r,l.return=r,E.sibling=l,r.child=E,h=r.child,h.memoizedState=fd(a),h.childLanes=dd(e,v,a),r.memoizedState=hd,l):(Sr(r),md(r,E))}if(b=e.memoizedState,b!==null&&(E=b.dehydrated,E!==null)){if(d)r.flags&256?(Sr(r),r.flags&=-257,r=gd(e,r,a)):r.memoizedState!==null?(br(),r.child=e.child,r.flags|=128,r=null):(br(),h=l.fallback,E=r.mode,l=pc({mode:"visible",children:l.children},E),h=Ms(h,E,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ba(r,e.child,null,a),l=r.child,l.memoizedState=fd(a),l.childLanes=dd(e,v,a),r.memoizedState=hd,r=h);else if(Sr(r),$d(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var z=v.dgst;v=z,l=Error(s(419)),l.stack="",l.digest=v,tl({value:l,source:null,stack:null}),r=gd(e,r,a)}else if(ke||el(e,r,a,!1),v=(a&e.childLanes)!==0,ke||v){if(v=te,v!==null&&(l=a&-a,l=(l&42)!==0?1:fr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,Da(e,l),An(v,e,l),qy;E.data==="$?"||Vd(),r=gd(e,r,a)}else E.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=b.treeContext,he=Zn(E.nextSibling),an=r,qt=!0,ks=null,di=!1,e!==null&&(Un[zn++]=Hi,Un[zn++]=Fi,Un[zn++]=Vs,Hi=e.id,Fi=e.overflow,Vs=r),r=md(r,l.children),r.flags|=4096);return r}return h?(br(),h=l.fallback,E=r.mode,b=e.child,z=b.sibling,l=ji(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,z!==null?h=ji(z,h):(h=Ms(h,E,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,E=e.child.memoizedState,E===null?E=fd(a):(b=E.cachePool,b!==null?(z=De._currentValue,b=b.parent!==z?{parent:z,pool:z}:b):b=xp(),E={baseLanes:E.baseLanes|a,cachePool:b}),h.memoizedState=E,h.childLanes=dd(e,v,a),r.memoizedState=hd,l):(Sr(r),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,e!==null&&(v=r.deletions,v===null?(r.deletions=[e],r.flags|=16):v.push(e)),r.child=a,r.memoizedState=null,a)}function md(e,r){return r=pc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function pc(e,r){return e=_n(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gd(e,r,a){return Ba(r,e.child,null,a),e=md(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Wy(e,r,a){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Vf(e.return,r,a)}function pd(e,r,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Zy(e,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(je(e,r,l.children,a),l=Oe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wy(e,a,r);else if(e.tag===19)Wy(e,a,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(K(Oe,l),h){case"forwards":for(a=r.child,h=null;a!==null;)e=a.alternate,e!==null&&fc(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),pd(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&fc(e)===null){r.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}pd(r,!0,a,null,d);break;case"together":pd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xi(e,r,a){if(e!==null&&(r.dependencies=e.dependencies),Or|=r.lanes,(a&r.childLanes)===0)if(e!==null){if(el(e,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(s(153));if(r.child!==null){for(e=r.child,a=ji(e,e.pendingProps),r.child=a,a.return=r;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=r;a.sibling=null}return r.child}function yd(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&$u(e)))}function rS(e,r,a){switch(r.tag){case 3:Ot(r,r.stateNode.containerInfo),vr(r,De,e.memoizedState.cache),Jo();break;case 27:case 5:_e(r);break;case 4:Ot(r,r.stateNode.containerInfo);break;case 10:vr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Sr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?$y(e,r,a):(Sr(r),e=Xi(e,r,a),e!==null?e.sibling:null);Sr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(el(e,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return Zy(e,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),K(Oe,Oe.current),l)break;return null;case 22:case 23:return r.lanes=0,Gy(e,r,a);case 24:vr(r,De,e.memoizedState.cache)}return Xi(e,r,a)}function Jy(e,r,a){if(e!==null)if(e.memoizedProps!==r.pendingProps)ke=!0;else{if(!yd(e,a)&&(r.flags&128)===0)return ke=!1,rS(e,r,a);ke=(e.flags&131072)!==0}else ke=!1,qt&&(r.flags&1048576)!==0&&Dp(r,Xu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Rf(l)?(e=qs(l,e),r.tag=1,r=Qy(null,r,l,e,a)):(r.tag=0,r=cd(null,r,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Dt){r.tag=11,r=jy(null,r,l,e,a);break t}else if(h===V){r.tag=14,r=Hy(null,r,l,e,a);break t}}throw r=re(l)||l,Error(s(306,r,""))}}return r;case 0:return cd(e,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=qs(l,r.pendingProps),Qy(e,r,l,h,a);case 3:t:{if(Ot(r,r.stateNode.containerInfo),e===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,Bf(e,r),ll(r,l,null,a);var v=r.memoizedState;if(l=v.cache,vr(r,De,l),l!==d.cache&&Pf(r,[De],a,!0),ol(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Xy(e,r,l,a);break t}else if(l!==h){h=xn(Error(s(424)),r),tl(h),r=Xy(e,r,l,a);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(he=Zn(e.firstChild),an=r,qt=!0,ks=null,di=!0,a=Ny(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jo(),l===h){r=Xi(e,r,a);break t}je(e,r,l,a)}r=r.child}return r;case 26:return gc(e,r),e===null?(a=iv(r.type,null,r.pendingProps,null))?r.memoizedState=a:qt||(a=r.type,e=r.pendingProps,l=Oc(dt.current).createElement(a),l[Re]=r,l[ve]=e,Fe(l,a,e),de(l),r.stateNode=l):r.memoizedState=iv(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return _e(r),e===null&&qt&&(l=r.stateNode=tv(r.type,r.pendingProps,dt.current),an=r,di=!0,h=he,Pr(r.type)?(Wd=h,he=Zn(l.firstChild)):he=h),je(e,r,r.pendingProps.children,a),gc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&qt&&((h=l=he)&&(l=MS(l,r.type,r.pendingProps,di),l!==null?(r.stateNode=l,an=r,he=Zn(l.firstChild),di=!1,h=!0):h=!1),h||xs(r)),_e(r),h=r.type,d=r.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Kd(h,d)?l=null:v!==null&&Kd(h,v)&&(r.flags|=32),r.memoizedState!==null&&(h=Yf(e,r,$A,null,null,a),Ol._currentValue=h),gc(e,r),je(e,r,l,a),r.child;case 6:return e===null&&qt&&((e=a=he)&&(a=VS(a,r.pendingProps,di),a!==null?(r.stateNode=a,an=r,he=null,e=!0):e=!1),e||xs(r)),null;case 13:return $y(e,r,a);case 4:return Ot(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Ba(r,null,l,a):je(e,r,l,a),r.child;case 11:return jy(e,r,r.type,r.pendingProps,a);case 7:return je(e,r,r.pendingProps,a),r.child;case 8:return je(e,r,r.pendingProps.children,a),r.child;case 12:return je(e,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,vr(r,r.type,l.value),je(e,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Us(r),h=Xe(h),l=l(h),r.flags|=1,je(e,r,l,a),r.child;case 14:return Hy(e,r,r.type,r.pendingProps,a);case 15:return Fy(e,r,r.type,r.pendingProps,a);case 19:return Zy(e,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},e===null?(a=pc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=ji(e.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return Gy(e,r,a);case 24:return Us(r),l=Xe(De),e===null?(h=Lf(),h===null&&(h=te,d=kf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},zf(r),vr(r,De,h)):((e.lanes&a)!==0&&(Bf(e,r),ll(r,null,null,a),ol()),h=e.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),vr(r,De,l)):(l=d.cache,vr(r,De,l),l!==h.cache&&Pf(r,[De],a,!0))),je(e,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function $i(e){e.flags|=4}function t_(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lv(r)){if(r=Bn.current,r!==null&&((Lt&4194048)===Lt?mi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||r!==mi))throw sl=Uf,Lp;e.flags|=8192}}function yc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?Mo():536870912,e.lanes|=r,Fa|=r)}function gl(e,r){if(!qt)switch(e.tailMode){case"hidden":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function oe(e){var r=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(r)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,r}function sS(e,r,a){var l=r.pendingProps;switch(Of(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(r),null;case 1:return oe(r),null;case 3:return a=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Yi(De),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zo(r)?$i(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mp())),oe(r),null;case 26:return a=r.memoizedState,e===null?($i(r),a!==null?(oe(r),t_(r,a)):(oe(r),r.flags&=-16777217)):a?a!==e.memoizedState?($i(r),oe(r),t_(r,a)):(oe(r),r.flags&=-16777217):(e.memoizedProps!==l&&$i(r),oe(r),r.flags&=-16777217),null;case 27:on(r),a=dt.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&$i(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return oe(r),null}e=Z.current,Zo(r)?Op(r):(e=tv(h,l,a),r.stateNode=e,$i(r))}return oe(r),null;case 5:if(on(r),a=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&$i(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return oe(r),null}if(e=Z.current,Zo(r))Op(r);else{switch(h=Oc(dt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Re]=r,e[ve]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Fe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$i(r)}}return oe(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&$i(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(e=dt.current,Zo(r)){if(e=r.stateNode,a=r.memoizedProps,l=null,h=an,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Re]=r,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||K_(e.nodeValue,a)),e||xs(r)}else e=Oc(e).createTextNode(l),e[Re]=r,r.stateNode=e}return oe(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Zo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Re]=r}else Jo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;oe(r),h=!1}else h=Mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Qi(r),r):(Qi(r),null)}if(Qi(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(r.child.flags|=8192),yc(r,r.updateQueue),oe(r),null;case 4:return ze(),e===null&&jd(r.stateNode.containerInfo),oe(r),null;case 10:return Yi(r.type),oe(r),null;case 19:if(P(Oe),h=r.memoizedState,h===null)return oe(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)gl(h,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=fc(e),d!==null){for(r.flags|=128,gl(h,!1),e=d.updateQueue,r.updateQueue=e,yc(r,e),r.subtreeFlags=0,e=a,a=r.child;a!==null;)Cp(a,e),a=a.sibling;return K(Oe,Oe.current&1|2),r.child}e=e.sibling}h.tail!==null&&On()>Ec&&(r.flags|=128,l=!0,gl(h,!1),r.lanes=4194304)}else{if(!l)if(e=fc(d),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,yc(r,e),gl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qt)return oe(r),null}else 2*On()-h.renderingStartTime>Ec&&a!==536870912&&(r.flags|=128,l=!0,gl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(e=h.last,e!==null?e.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=On(),r.sibling=null,e=Oe.current,K(Oe,l?e&1|2:e&1),r):(oe(r),null);case 22:case 23:return Qi(r),Ff(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(oe(r),r.subtreeFlags&6&&(r.flags|=8192)):oe(r),a=r.updateQueue,a!==null&&yc(r,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),e!==null&&P(zs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Yi(De),oe(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function aS(e,r){switch(Of(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Yi(De),ze(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return on(r),null;case 13:if(Qi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Jo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return P(Oe),null;case 4:return ze(),null;case 10:return Yi(r.type),null;case 22:case 23:return Qi(r),Ff(),e!==null&&P(zs),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Yi(De),null;case 25:return null;default:return null}}function e_(e,r){switch(Of(r),r.tag){case 3:Yi(De),ze();break;case 26:case 27:case 5:on(r);break;case 4:ze();break;case 13:Qi(r);break;case 19:P(Oe);break;case 10:Yi(r.type);break;case 22:case 23:Qi(r),Ff(),e!==null&&P(zs);break;case 24:Yi(De)}}function pl(e,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Zt(r,r.return,E)}}function Rr(e,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=r;var b=a,z=E;try{z()}catch(G){Zt(h,b,G)}}}l=l.next}while(l!==d)}}catch(G){Zt(r,r.return,G)}}function n_(e){var r=e.updateQueue;if(r!==null){var a=e.stateNode;try{Hp(r,a)}catch(l){Zt(e,e.return,l)}}}function i_(e,r,a){a.props=qs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Zt(e,r,l)}}function yl(e,r){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Zt(e,r,h)}}function gi(e,r){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Zt(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Zt(e,r,h)}else a.current=null}function r_(e){var r=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Zt(e,e.return,h)}}function _d(e,r,a){try{var l=e.stateNode;IS(l,e.type,a,r),l[ve]=r}catch(h){Zt(e,e.return,h)}}function s_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pr(e.type)||e.tag===4}function vd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||s_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ed(e,r,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(e),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Dc));else if(l!==4&&(l===27&&Pr(e.type)&&(a=e.stateNode,r=null),e=e.child,e!==null))for(Ed(e,r,a),e=e.sibling;e!==null;)Ed(e,r,a),e=e.sibling}function _c(e,r,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?a.insertBefore(e,r):a.appendChild(e);else if(l!==4&&(l===27&&Pr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_c(e,r,a),e=e.sibling;e!==null;)_c(e,r,a),e=e.sibling}function a_(e){var r=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Fe(r,l,a),r[Re]=e,r[ve]=a}catch(d){Zt(e,e.return,d)}}var Wi=!1,ge=!1,Td=!1,o_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function oS(e,r){if(e=e.containerInfo,Gd=xc,e=_p(e),vf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,b=-1,z=0,G=0,Q=e,B=null;e:for(;;){for(var q;Q!==a||h!==0&&Q.nodeType!==3||(E=v+h),Q!==d||l!==0&&Q.nodeType!==3||(b=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(q=Q.firstChild)!==null;)B=Q,Q=q;for(;;){if(Q===e)break e;if(B===a&&++z===h&&(E=v),B===d&&++G===l&&(b=v),(q=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=q}a=E===-1||b===-1?null:{start:E,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yd={focusedElem:e,selectionRange:a},xc=!1,xe=r;xe!==null;)if(r=xe,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,xe=e;else for(;xe!==null;){switch(r=xe,d=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var vt=qs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(vt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(mt){Zt(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,a=e.nodeType,a===9)Xd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=r.sibling,e!==null){e.return=r.return,xe=e;break}xe=r.return}}function l_(e,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ir(e,a),l&4&&pl(5,a);break;case 1:if(Ir(e,a),l&4)if(e=a.stateNode,r===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var h=qs(a.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}l&64&&n_(a),l&512&&yl(a,a.return);break;case 3:if(Ir(e,a),l&64&&(e=a.updateQueue,e!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{Hp(e,r)}catch(v){Zt(a,a.return,v)}}break;case 27:r===null&&l&4&&a_(a);case 26:case 5:Ir(e,a),r===null&&l&4&&r_(a),l&512&&yl(a,a.return);break;case 12:Ir(e,a);break;case 13:Ir(e,a),l&4&&h_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pS.bind(null,a),PS(e,a))));break;case 22:if(l=a.memoizedState!==null||Wi,!l){r=r!==null&&r.memoizedState!==null||ge,h=Wi;var d=ge;Wi=l,(ge=r)&&!d?Cr(e,a,(a.subtreeFlags&8772)!==0):Ir(e,a),Wi=h,ge=d}break;case 30:break;default:Ir(e,a)}}function u_(e){var r=e.alternate;r!==null&&(e.alternate=null,u_(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&gr(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ae=null,un=!1;function Zi(e,r,a){for(a=a.child;a!==null;)c_(e,r,a),a=a.sibling}function c_(e,r,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:ge||gi(a,r),Zi(e,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ge||gi(a,r);var l=ae,h=un;Pr(a.type)&&(ae=a.stateNode,un=!1),Zi(e,r,a),Rl(a.stateNode),ae=l,un=h;break;case 5:ge||gi(a,r);case 6:if(l=ae,h=un,ae=null,Zi(e,r,a),ae=l,un=h,ae!==null)if(un)try{(ae.nodeType===9?ae.body:ae.nodeName==="HTML"?ae.ownerDocument.body:ae).removeChild(a.stateNode)}catch(d){Zt(a,r,d)}else try{ae.removeChild(a.stateNode)}catch(d){Zt(a,r,d)}break;case 18:ae!==null&&(un?(e=ae,Z_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Pl(e)):Z_(ae,a.stateNode));break;case 4:l=ae,h=un,ae=a.stateNode.containerInfo,un=!0,Zi(e,r,a),ae=l,un=h;break;case 0:case 11:case 14:case 15:ge||Rr(2,a,r),ge||Rr(4,a,r),Zi(e,r,a);break;case 1:ge||(gi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&i_(a,r,l)),Zi(e,r,a);break;case 21:Zi(e,r,a);break;case 22:ge=(l=ge)||a.memoizedState!==null,Zi(e,r,a),ge=l;break;default:Zi(e,r,a)}}function h_(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pl(e)}catch(a){Zt(r,r.return,a)}}function lS(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new o_),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new o_),r;default:throw Error(s(435,e.tag))}}function wd(e,r){var a=lS(e);r.forEach(function(l){var h=yS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function vn(e,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=r,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Pr(E.type)){ae=E.stateNode,un=!1;break t}break;case 5:ae=E.stateNode,un=!1;break t;case 3:case 4:ae=E.stateNode.containerInfo,un=!0;break t}E=E.return}if(ae===null)throw Error(s(160));c_(d,v,h),ae=null,un=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)f_(r,e),r=r.sibling}var Wn=null;function f_(e,r){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(r,e),En(e),l&4&&(Rr(3,e,e.return),pl(3,e),Rr(5,e,e.return));break;case 1:vn(r,e),En(e),l&512&&(ge||a===null||gi(a,a.return)),l&64&&Wi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Wn;if(vn(r,e),En(e),l&512&&(ge||a===null||gi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ps]||d[Re]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Fe(d,l,a),d[Re]=e,de(d),l=d;break t;case"link":var v=av("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),Fe(d,l,a),h.head.appendChild(d);break;case"meta":if(v=av("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),Fe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Re]=e,de(d),l=d}e.stateNode=l}else ov(h,e.type,e.stateNode);else e.stateNode=sv(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?ov(h,e.type,e.stateNode):sv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&_d(e,e.memoizedProps,a.memoizedProps)}break;case 27:vn(r,e),En(e),l&512&&(ge||a===null||gi(a,a.return)),a!==null&&l&4&&_d(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vn(r,e),En(e),l&512&&(ge||a===null||gi(a,a.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(q){Zt(e,e.return,q)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,_d(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Td=!0);break;case 6:if(vn(r,e),En(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(q){Zt(e,e.return,q)}}break;case 3:if(Vc=null,h=Wn,Wn=Nc(r.containerInfo),vn(r,e),Wn=h,En(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Pl(r.containerInfo)}catch(q){Zt(e,e.return,q)}Td&&(Td=!1,d_(e));break;case 4:l=Wn,Wn=Nc(e.stateNode.containerInfo),vn(r,e),En(e),Wn=l;break;case 12:vn(r,e),En(e);break;case 13:vn(r,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cd=On()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wd(e,l)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,z=Wi,G=ge;if(Wi=z||h,ge=G||b,vn(r,e),ge=G,Wi=z,En(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||b||Wi||ge||js(e)),a=null,r=e;;){if(r.tag===5||r.tag===26){if(a===null){b=a=r;try{if(d=b.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=b.stateNode;var Q=b.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){Zt(b,b.return,q)}}}else if(r.tag===6){if(a===null){b=r;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(q){Zt(b,b.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,wd(e,a))));break;case 19:vn(r,e),En(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wd(e,l)));break;case 30:break;case 21:break;default:vn(r,e),En(e)}}function En(e){var r=e.flags;if(r&2){try{for(var a,l=e.return;l!==null;){if(s_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=vd(e);_c(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Mn(v,""),a.flags&=-33);var E=vd(e);_c(e,E,v);break;case 3:case 4:var b=a.stateNode.containerInfo,z=vd(e);Ed(e,z,b);break;default:throw Error(s(161))}}catch(G){Zt(e,e.return,G)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function d_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;d_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Ir(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)l_(e,r.alternate,r),r=r.sibling}function js(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Rr(4,r,r.return),js(r);break;case 1:gi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&i_(r,r.return,a),js(r);break;case 27:Rl(r.stateNode);case 26:case 5:gi(r,r.return),js(r);break;case 22:r.memoizedState===null&&js(r);break;case 30:js(r);break;default:js(r)}e=e.sibling}}function Cr(e,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:Cr(h,d,a),pl(4,d);break;case 1:if(Cr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Zt(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)jp(b[h],E)}catch(z){Zt(l,l.return,z)}}a&&v&64&&n_(d),yl(d,d.return);break;case 27:a_(d);case 26:case 5:Cr(h,d,a),a&&l===null&&v&4&&r_(d),yl(d,d.return);break;case 12:Cr(h,d,a);break;case 13:Cr(h,d,a),a&&v&4&&h_(h,d);break;case 22:d.memoizedState===null&&Cr(h,d,a),yl(d,d.return);break;case 30:break;default:Cr(h,d,a)}r=r.sibling}}function Ad(e,r){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&nl(a))}function Sd(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&nl(e))}function pi(e,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)m_(e,r,a,l),r=r.sibling}function m_(e,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:pi(e,r,a,l),h&2048&&pl(9,r);break;case 1:pi(e,r,a,l);break;case 3:pi(e,r,a,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&nl(e)));break;case 12:if(h&2048){pi(e,r,a,l),e=r.stateNode;try{var d=r.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Zt(r,r.return,b)}}else pi(e,r,a,l);break;case 13:pi(e,r,a,l);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?pi(e,r,a,l):_l(e,r):d._visibility&2?pi(e,r,a,l):(d._visibility|=2,qa(e,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&Ad(v,r);break;case 24:pi(e,r,a,l),h&2048&&Sd(r.alternate,r);break;default:pi(e,r,a,l)}}function qa(e,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=e,v=r,E=a,b=l,z=v.flags;switch(v.tag){case 0:case 11:case 15:qa(d,v,E,b,h),pl(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?qa(d,v,E,b,h):_l(d,v):(G._visibility|=2,qa(d,v,E,b,h)),h&&z&2048&&Ad(v.alternate,v);break;case 24:qa(d,v,E,b,h),h&&z&2048&&Sd(v.alternate,v);break;default:qa(d,v,E,b,h)}r=r.sibling}}function _l(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=e,l=r,h=l.flags;switch(l.tag){case 22:_l(a,l),h&2048&&Ad(l.alternate,l);break;case 24:_l(a,l),h&2048&&Sd(l.alternate,l);break;default:_l(a,l)}r=r.sibling}}var vl=8192;function ja(e){if(e.subtreeFlags&vl)for(e=e.child;e!==null;)g_(e),e=e.sibling}function g_(e){switch(e.tag){case 26:ja(e),e.flags&vl&&e.memoizedState!==null&&KS(Wn,e.memoizedState,e.memoizedProps);break;case 5:ja(e);break;case 3:case 4:var r=Wn;Wn=Nc(e.stateNode.containerInfo),ja(e),Wn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=vl,vl=16777216,ja(e),vl=r):ja(e));break;default:ja(e)}}function p_(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function El(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];xe=l,__(l,e)}p_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y_(e),e=e.sibling}function y_(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Rr(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,vc(e)):El(e);break;default:El(e)}}function vc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];xe=l,__(l,e)}p_(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Rr(8,r,r.return),vc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,vc(r));break;default:vc(r)}e=e.sibling}}function __(e,r){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:Rr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else t:for(a=e;xe!==null;){l=xe;var h=l.sibling,d=l.return;if(u_(l),l===a){xe=null;break t}if(h!==null){h.return=d,xe=h;break t}xe=d}}}var uS={getCacheForType:function(e){var r=Xe(De),a=r.data.get(e);return a===void 0&&(a=e(),r.data.set(e,a)),a}},cS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,te=null,It=null,Lt=0,Yt=0,Tn=null,Dr=!1,Ha=!1,bd=!1,Ji=0,fe=0,Or=0,Hs=0,Rd=0,qn=0,Fa=0,Tl=null,cn=null,Id=!1,Cd=0,Ec=1/0,Tc=null,Nr=null,He=0,Mr=null,Ga=null,Ya=0,Dd=0,Od=null,v_=null,wl=0,Nd=null;function wn(){if((Gt&2)!==0&&Lt!==0)return Lt&-Lt;if(F.T!==null){var e=Va;return e!==0?e:Ud()}return dr()}function E_(){qn===0&&(qn=(Lt&536870912)===0||qt?No():536870912);var e=Bn.current;return e!==null&&(e.flags|=32),qn}function An(e,r,a){(e===te&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),Vr(e,Lt,qn,!1)),Ni(e,a),((Gt&2)===0||e!==te)&&(e===te&&((Gt&2)===0&&(Hs|=a),fe===4&&Vr(e,Lt,qn,!1)),yi(e))}function T_(e,r,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&e.expiredLanes)===0||gs(e,r),h=l?dS(e,r):Pd(e,r,!0),d=l;do{if(h===0){Ha&&!l&&Vr(e,r,0,!1);break}else{if(a=e.current.alternate,d&&!hS(a)){h=Pd(e,r,!1),d=!1;continue}if(h===2){if(d=r,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;t:{var E=e;h=Tl;var b=E.current.memoizedState.isDehydrated;if(b&&(Ka(E,v).flags|=256),v=Pd(E,v,!1),v!==2){if(bd&&!b){E.errorRecoveryDisabledLanes|=d,Hs|=d,h=4;break t}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ka(e,0),Vr(e,r,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Vr(l,r,qn,!Dr);break t;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=Cd+300-On(),10<h)){if(Vr(l,r,qn,!Dr),ca(l,0,!0)!==0)break t;l.timeoutHandle=$_(w_.bind(null,l,a,cn,Tc,Id,r,qn,Hs,Fa,Dr,d,2,-0,0),h);break t}w_(l,a,cn,Tc,Id,r,qn,Hs,Fa,Dr,d,0,-0,0)}}break}while(!0);yi(e)}function w_(e,r,a,l,h,d,v,E,b,z,G,Q,B,q){if(e.timeoutHandle=-1,Q=r.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Dl={stylesheets:null,count:0,unsuspend:YS},g_(r),Q=QS(),Q!==null)){e.cancelPendingCommit=Q(D_.bind(null,e,r,d,a,l,h,v,E,b,G,1,B,q)),Vr(e,d,v,!z);return}D_(e,r,d,a,l,h,v,E,b)}function hS(e){for(var r=e;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!yn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(e,r,a,l){r&=~Rd,r&=~Hs,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var d=31-Qe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&ni(e,a,r)}function wc(){return(Gt&6)===0?(Al(0),!1):!0}function Md(){if(It!==null){if(Yt===0)var e=It.return;else e=It,Gi=Ls=null,Xf(e),za=null,dl=0,e=It;for(;e!==null;)e_(e.alternate,e),e=e.return;It=null}}function Ka(e,r){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,DS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Md(),te=e,It=a=ji(e.current,null),Lt=r,Yt=0,Tn=null,Dr=!1,Ha=gs(e,r),bd=!1,Fa=qn=Rd=Hs=Or=fe=0,cn=Tl=null,Id=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-Qe(l),d=1<<h;r|=e[h],l&=~d}return Ji=r,Fu(),a}function A_(e,r){bt=null,F.H=uc,r===rl||r===Ju?(r=Bp(),Yt=3):r===Lp?(r=Bp(),Yt=4):Yt=r===qy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Tn=r,It===null&&(fe=1,mc(e,xn(r,e.current)))}function S_(){var e=F.H;return F.H=uc,e===null?uc:e}function b_(){var e=F.A;return F.A=uS,e}function Vd(){fe=4,Dr||(Lt&4194048)!==Lt&&Bn.current!==null||(Ha=!0),(Or&134217727)===0&&(Hs&134217727)===0||te===null||Vr(te,Lt,qn,!1)}function Pd(e,r,a){var l=Gt;Gt|=2;var h=S_(),d=b_();(te!==e||Lt!==r)&&(Tc=null,Ka(e,r)),r=!1;var v=fe;t:do try{if(Yt!==0&&It!==null){var E=It,b=Tn;switch(Yt){case 8:Md(),v=6;break t;case 3:case 2:case 9:case 6:Bn.current===null&&(r=!0);var z=Yt;if(Yt=0,Tn=null,Qa(e,E,b,z),a&&Ha){v=0;break t}break;default:z=Yt,Yt=0,Tn=null,Qa(e,E,b,z)}}fS(),v=fe;break}catch(G){A_(e,G)}while(!0);return r&&e.shellSuspendCounter++,Gi=Ls=null,Gt=l,F.H=h,F.A=d,It===null&&(te=null,Lt=0,Fu()),v}function fS(){for(;It!==null;)R_(It)}function dS(e,r){var a=Gt;Gt|=2;var l=S_(),h=b_();te!==e||Lt!==r?(Tc=null,Ec=On()+500,Ka(e,r)):Ha=gs(e,r);t:do try{if(Yt!==0&&It!==null){r=It;var d=Tn;e:switch(Yt){case 1:Yt=0,Tn=null,Qa(e,r,d,1);break;case 2:case 9:if(Up(d)){Yt=0,Tn=null,I_(r);break}r=function(){Yt!==2&&Yt!==9||te!==e||(Yt=7),yi(e)},d.then(r,r);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:Up(d)?(Yt=0,Tn=null,I_(r)):(Yt=0,Tn=null,Qa(e,r,d,7));break;case 5:var v=null;switch(It.tag){case 26:v=It.memoizedState;case 5:case 27:var E=It;if(!v||lv(v)){Yt=0,Tn=null;var b=E.sibling;if(b!==null)It=b;else{var z=E.return;z!==null?(It=z,Ac(z)):It=null}break e}}Yt=0,Tn=null,Qa(e,r,d,5);break;case 6:Yt=0,Tn=null,Qa(e,r,d,6);break;case 8:Md(),fe=6;break t;default:throw Error(s(462))}}mS();break}catch(G){A_(e,G)}while(!0);return Gi=Ls=null,F.H=l,F.A=h,Gt=a,It!==null?0:(te=null,Lt=0,Fu(),fe)}function mS(){for(;It!==null&&!Io();)R_(It)}function R_(e){var r=Jy(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,r===null?Ac(e):It=r}function I_(e){var r=e,a=r.alternate;switch(r.tag){case 15:case 0:r=Ky(a,r,r.pendingProps,r.type,void 0,Lt);break;case 11:r=Ky(a,r,r.pendingProps,r.type.render,r.ref,Lt);break;case 5:Xf(r);default:e_(a,r),r=It=Cp(r,Ji),r=Jy(a,r,Ji)}e.memoizedProps=e.pendingProps,r===null?Ac(e):It=r}function Qa(e,r,a,l){Gi=Ls=null,Xf(r),za=null,dl=0;var h=r.return;try{if(iS(e,h,r,a,Lt)){fe=1,mc(e,xn(a,e.current)),It=null;return}}catch(d){if(h!==null)throw It=h,d;fe=1,mc(e,xn(a,e.current)),It=null;return}r.flags&32768?(qt||l===1?e=!0:Ha||(Lt&536870912)!==0?e=!1:(Dr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),C_(r,e)):Ac(r)}function Ac(e){var r=e;do{if((r.flags&32768)!==0){C_(r,Dr);return}e=r.return;var a=sS(r.alternate,r,Ji);if(a!==null){It=a;return}if(r=r.sibling,r!==null){It=r;return}It=r=e}while(r!==null);fe===0&&(fe=5)}function C_(e,r){do{var a=aS(e.alternate,e);if(a!==null){a.flags&=32767,It=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(e=e.sibling,e!==null)){It=e;return}It=e=a}while(e!==null);fe=6,It=null}function D_(e,r,a,l,h,d,v,E,b){e.cancelPendingCommit=null;do Sc();while(He!==0);if((Gt&6)!==0)throw Error(s(327));if(r!==null){if(r===e.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Sf,Vo(e,a,d,v,E,b),e===te&&(It=te=null,Lt=0),Ga=r,Mr=e,Ya=a,Dd=d,Od=h,v_=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_S(hs,function(){return P_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=rt.p,rt.p=2,v=Gt,Gt|=4;try{oS(e,r,a)}finally{Gt=v,rt.p=h,F.T=l}}He=1,O_(),N_(),M_()}}function O_(){if(He===1){He=0;var e=Mr,r=Ga,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=rt.p;rt.p=2;var h=Gt;Gt|=4;try{f_(r,e);var d=Yd,v=_p(e.containerInfo),E=d.focusedElem,b=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&yp(E.ownerDocument.documentElement,E)){if(b!==null&&vf(E)){var z=b.start,G=b.end;if(G===void 0&&(G=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(G,E.value.length);else{var Q=E.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var q=B.getSelection(),vt=E.textContent.length,mt=Math.min(b.start,vt),Wt=b.end===void 0?mt:Math.min(b.end,vt);!q.extend&&mt>Wt&&(v=Wt,Wt=mt,mt=v);var k=pp(E,mt),O=pp(E,Wt);if(k&&O&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(k.node,k.offset),q.removeAllRanges(),mt>Wt?(q.addRange(U),q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),q.addRange(U))}}}}for(Q=[],q=E;q=q.parentNode;)q.nodeType===1&&Q.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var Y=Q[E];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}xc=!!Gd,Yd=Gd=null}finally{Gt=h,rt.p=l,F.T=a}}e.current=r,He=2}}function N_(){if(He===2){He=0;var e=Mr,r=Ga,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=rt.p;rt.p=2;var h=Gt;Gt|=4;try{l_(e,r.alternate,r)}finally{Gt=h,rt.p=l,F.T=a}}He=3}}function M_(){if(He===4||He===3){He=0,vu();var e=Mr,r=Ga,a=Ya,l=v_;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?He=5:(He=0,Ga=Mr=null,V_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Nr=null),ha(a),r=r.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ce,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=F.T,h=rt.p,rt.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{F.T=r,rt.p=h}}(Ya&3)!==0&&Sc(),yi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Nd?wl++:(wl=0,Nd=e):wl=0,Al(0)}}function V_(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,nl(r)))}function Sc(e){return O_(),N_(),M_(),P_()}function P_(){if(He!==5)return!1;var e=Mr,r=Dd;Dd=0;var a=ha(Ya),l=F.T,h=rt.p;try{rt.p=32>a?32:a,F.T=null,a=Od,Od=null;var d=Mr,v=Ya;if(He=0,Ga=Mr=null,Ya=0,(Gt&6)!==0)throw Error(s(331));var E=Gt;if(Gt|=4,y_(d.current),m_(d,d.current,v,a),Gt=E,Al(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ce,d)}catch{}return!0}finally{rt.p=h,F.T=l,V_(e,r)}}function k_(e,r,a){r=xn(a,r),r=ud(e.stateNode,r,2),e=wr(e,r,2),e!==null&&(Ni(e,2),yi(e))}function Zt(e,r,a){if(e.tag===3)k_(e,e,a);else for(;r!==null;){if(r.tag===3){k_(r,e,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nr===null||!Nr.has(l))){e=xn(a,e),a=zy(2),l=wr(r,a,2),l!==null&&(By(a,l,r,e),Ni(l,2),yi(l));break}}r=r.return}}function kd(e,r,a){var l=e.pingCache;if(l===null){l=e.pingCache=new cS;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(bd=!0,h.add(a),e=gS.bind(null,e,r,a),r.then(e,e))}function gS(e,r,a){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(Lt&a)===a&&(fe===4||fe===3&&(Lt&62914560)===Lt&&300>On()-Cd?(Gt&2)===0&&Ka(e,0):Rd|=a,Fa===Lt&&(Fa=0)),yi(e)}function x_(e,r){r===0&&(r=Mo()),e=Da(e,r),e!==null&&(Ni(e,r),yi(e))}function pS(e){var r=e.memoizedState,a=0;r!==null&&(a=r.retryLane),x_(e,a)}function yS(e,r){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),x_(e,a)}function _S(e,r){return us(e,r)}var bc=null,Xa=null,xd=!1,Rc=!1,Ld=!1,Fs=0;function yi(e){e!==Xa&&e.next===null&&(Xa===null?bc=Xa=e:Xa=Xa.next=e),Rc=!0,xd||(xd=!0,ES())}function Al(e,r){if(!Ld&&Rc){Ld=!0;do for(var a=!1,l=bc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Qe(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,B_(l,d))}else d=Lt,d=ca(l,l===te?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||gs(l,d)||(a=!0,B_(l,d));l=l.next}while(a);Ld=!1}}function vS(){L_()}function L_(){Rc=xd=!1;var e=0;Fs!==0&&(CS()&&(e=Fs),Fs=0);for(var r=On(),a=null,l=bc;l!==null;){var h=l.next,d=U_(l,r);d===0?(l.next=null,a===null?bc=h:a.next=h,h===null&&(Xa=a)):(a=l,(e!==0||(d&3)!==0)&&(Rc=!0)),l=h}Al(e)}function U_(e,r){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Qe(d),E=1<<v,b=h[v];b===-1?((E&a)===0||(E&l)!==0)&&(h[v]=Oo(E,r)):b<=r&&(e.expiredLanes|=E),d&=~E}if(r=te,a=Lt,a=ca(e,e===r?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===r&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&cs(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||gs(e,a)){if(r=a&-a,r===e.callbackPriority)return r;switch(l!==null&&cs(l),ha(a)){case 2:case 8:a=la;break;case 32:a=hs;break;case 268435456:a=ua;break;default:a=hs}return l=z_.bind(null,e),a=us(a,l),e.callbackPriority=r,e.callbackNode=a,r}return l!==null&&l!==null&&cs(l),e.callbackPriority=2,e.callbackNode=null,2}function z_(e,r){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sc()&&e.callbackNode!==a)return null;var l=Lt;return l=ca(e,e===te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(T_(e,l,r),U_(e,On()),e.callbackNode!=null&&e.callbackNode===a?z_.bind(null,e):null)}function B_(e,r){if(Sc())return null;T_(e,r,!0)}function ES(){OS(function(){(Gt&6)!==0?us(Co,vS):L_()})}function Ud(){return Fs===0&&(Fs=No()),Fs}function q_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ya(""+e)}function j_(e,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,e.id&&a.setAttribute("form",e.id),r.parentNode.insertBefore(a,r),e=new FormData(e),a.parentNode.removeChild(a),e}function TS(e,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=q_((h[ve]||null).action),v=l.submitter;v&&(r=(r=v[ve]||null)?q_(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var E=new _a("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fs!==0){var b=v?j_(h,v):new FormData(h);rd(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(E.preventDefault(),b=v?j_(h,v):new FormData(h),rd(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var zd=0;zd<Af.length;zd++){var Bd=Af[zd],wS=Bd.toLowerCase(),AS=Bd[0].toUpperCase()+Bd.slice(1);$n(wS,"on"+AS)}$n(Tp,"onAnimationEnd"),$n(wp,"onAnimationIteration"),$n(Ap,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(BA,"onTransitionRun"),$n(qA,"onTransitionStart"),$n(jA,"onTransitionCancel"),$n(Sp,"onTransitionEnd"),Vi("onMouseEnter",["mouseout","mouseover"]),Vi("onMouseLeave",["mouseout","mouseover"]),Vi("onPointerEnter",["pointerout","pointerover"]),Vi("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function H_(e,r){r=(r&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var E=l[v],b=E.instance,z=E.currentTarget;if(E=E.listener,b!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=z;try{d(h)}catch(G){dc(G)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(E=l[v],b=E.instance,z=E.currentTarget,E=E.listener,b!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=z;try{d(h)}catch(G){dc(G)}h.currentTarget=null,d=b}}}}function Ct(e,r){var a=r[ko];a===void 0&&(a=r[ko]=new Set);var l=e+"__bubble";a.has(l)||(F_(r,e,2,!1),a.add(l))}function qd(e,r,a){var l=0;r&&(l|=4),F_(a,e,l,r)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function jd(e){if(!e[Ic]){e[Ic]=!0,xo.forEach(function(a){a!=="selectionchange"&&(SS.has(a)||qd(a,!1,e),qd(a,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ic]||(r[Ic]=!0,qd("selectionchange",!1,r))}}function F_(e,r,a,l){switch(mv(r)){case 2:var h=WS;break;case 8:h=ZS;break;default:h=nm}a=h.bind(null,r,a,e),h=void 0,!Pn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,a,{capture:!0,passive:h}):e.addEventListener(r,a,!0):h!==void 0?e.addEventListener(r,a,{passive:h}):e.addEventListener(r,a,!1)}function Hd(e,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Mi(E),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue t}E=E.parentNode}}l=l.return}Du(function(){var z=d,G=Vn(a),Q=[];t:{var B=bp.get(e);if(B!==void 0){var q=_a,vt=e;switch(e){case"keypress":if(li(a)===0)break t;case"keydown":case"keyup":q=Sa;break;case"focusin":vt="focus",q=Ta;break;case"focusout":vt="blur",q=Ta;break;case"beforeblur":case"afterblur":q=Ta;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Lu;break;case Tp:case wp:case Ap:q=wa;break;case Sp:q=zu;break;case"scroll":case"scrollend":q=Ou;break;case"wheel":q=ba;break;case"copy":case"cut":case"paste":q=Aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Qo;break;case"toggle":case"beforetoggle":q=qu}var mt=(r&4)!==0,Wt=!mt&&(e==="scroll"||e==="scrollend"),k=mt?B!==null?B+"Capture":null:B;mt=[];for(var O=z,U;O!==null;){var Y=O;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||k===null||(Y=As(O,k),Y!=null&&mt.push(bl(O,Y,U))),Wt)break;O=O.return}0<mt.length&&(B=new q(B,vt,null,a,G),Q.push({event:B,listeners:mt}))}}if((r&7)===0){t:{if(B=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",B&&a!==xi&&(vt=a.relatedTarget||a.fromElement)&&(Mi(vt)||vt[Nn]))break t;if((q||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,q?(vt=a.relatedTarget||a.toElement,q=z,vt=vt?Mi(vt):null,vt!==null&&(Wt=u(vt),mt=vt.tag,vt!==Wt||mt!==5&&mt!==27&&mt!==6)&&(vt=null)):(q=null,vt=z),q!==vt)){if(mt=kn,Y="onMouseLeave",k="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(mt=Qo,Y="onPointerLeave",k="onPointerEnter",O="pointer"),Wt=q==null?B:ri(q),U=vt==null?B:ri(vt),B=new mt(Y,O+"leave",q,a,G),B.target=Wt,B.relatedTarget=U,Y=null,Mi(G)===z&&(mt=new mt(k,O+"enter",vt,a,G),mt.target=U,mt.relatedTarget=Wt,Y=mt),Wt=Y,q&&vt)e:{for(mt=q,k=vt,O=0,U=mt;U;U=$a(U))O++;for(U=0,Y=k;Y;Y=$a(Y))U++;for(;0<O-U;)mt=$a(mt),O--;for(;0<U-O;)k=$a(k),U--;for(;O--;){if(mt===k||k!==null&&mt===k.alternate)break e;mt=$a(mt),k=$a(k)}mt=null}else mt=null;q!==null&&G_(Q,B,q,mt,!1),vt!==null&&Wt!==null&&G_(Q,Wt,vt,mt,!0)}}t:{if(B=z?ri(z):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var ot=cp;else if(Ce(B))if(hp)ot=LA;else{ot=kA;var Rt=PA}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&qo(z.elementType)&&(ot=cp):ot=xA;if(ot&&(ot=ot(e,z))){qi(Q,ot,a,G);break t}Rt&&Rt(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&yr(B,"number",B.value)}switch(Rt=z?ri(z):window,e){case"focusin":(Ce(Rt)||Rt.contentEditable==="true")&&(Ra=Rt,Ef=z,Wo=null);break;case"focusout":Wo=Ef=Ra=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,vp(Q,a,G);break;case"selectionchange":if(zA)break;case"keydown":case"keyup":vp(Q,a,G)}var ht;if(hi)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else kt?j(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(_&&a.locale!=="ko"&&(kt||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&kt&&(ht=Ho()):(oi=G,_r="value"in oi?oi.value:oi.textContent,kt=!0)),Rt=Cc(z,pt),0<Rt.length&&(pt=new Yo(pt,e,null,a,G),Q.push({event:pt,listeners:Rt}),ht?pt.data=ht:(ht=nt(a),ht!==null&&(pt.data=ht)))),(ht=g?Ie(e,a):xt(e,a))&&(pt=Cc(z,"onBeforeInput"),0<pt.length&&(Rt=new Yo("onBeforeInput","beforeinput",null,a,G),Q.push({event:Rt,listeners:pt}),Rt.data=ht)),TS(Q,e,z,a,G)}H_(Q,r)})}function bl(e,r,a){return{instance:e,listener:r,currentTarget:a}}function Cc(e,r){for(var a=r+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=As(e,a),h!=null&&l.unshift(bl(e,h,d)),h=As(e,r),h!=null&&l.push(bl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function $a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G_(e,r,a,l,h){for(var d=r._reactName,v=[];a!==null&&a!==l;){var E=a,b=E.alternate,z=E.stateNode;if(E=E.tag,b!==null&&b===l)break;E!==5&&E!==26&&E!==27||z===null||(b=z,h?(z=As(a,d),z!=null&&v.unshift(bl(a,z,b))):h||(z=As(a,d),z!=null&&v.push(bl(a,z,b)))),a=a.return}v.length!==0&&e.push({event:r,listeners:v})}var bS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function Y_(e){return(typeof e=="string"?e:""+e).replace(bS,`
`).replace(RS,"")}function K_(e,r){return r=Y_(r),Y_(e)===r}function Dc(){}function $t(e,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Mn(e,""+l);break;case"className":si(e,"class",l);break;case"tabIndex":si(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,a,l);break;case"style":Bo(e,l,d);break;case"data":if(r!=="object"){si(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ya(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&$t(e,r,"name",h.name,h,null),$t(e,r,"formEncType",h.formEncType,h,null),$t(e,r,"formMethod",h.formMethod,h,null),$t(e,r,"formTarget",h.formTarget,h,null)):($t(e,r,"encType",h.encType,h,null),$t(e,r,"method",h.method,h,null),$t(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ya(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Dc);break;case"onScroll":l!=null&&Ct("scroll",e);break;case"onScrollEnd":l!=null&&Ct("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ya(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),pr(e,"popover",l);break;case"xlinkActuate":Be(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Be(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Be(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Be(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Be(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Be(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Be(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=df.get(a)||a,pr(e,a,l))}}function Fd(e,r,a,l,h,d){switch(a){case"style":Bo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&Ct("scroll",e);break;case"onScrollEnd":l!=null&&Ct("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fa.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=e[ve]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(r,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):pr(e,a,l)}}}function Fe(e,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:$t(e,r,d,v,a,null)}}h&&$t(e,r,"srcSet",a.srcSet,a,null),l&&$t(e,r,"src",a.src,a,null);return;case"input":Ct("invalid",e);var E=d=v=h=null,b=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":b=G;break;case"defaultChecked":z=G;break;case"value":d=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:$t(e,r,l,G,a,null)}}Es(e,d,E,b,z,v,h,!1),pa(e);return;case"select":Ct("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:$t(e,r,h,E,a,null)}r=d,a=v,e.multiple=!!l,r!=null?ki(e,!!l,r,!1):a!=null&&ki(e,!!l,a,!0);return;case"textarea":Ct("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:$t(e,r,v,E,a,null)}Ts(e,l,h,d),pa(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,r,b,l,a,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(l=0;l<Sl.length;l++)Ct(Sl[l],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:$t(e,r,z,l,a,null)}return;default:if(qo(r)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Fd(e,r,G,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&$t(e,r,E,l,a,null))}function IS(e,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,b=null,z=null,G=null;for(q in a){var Q=a[q];if(a.hasOwnProperty(q)&&Q!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":b=Q;default:l.hasOwnProperty(q)||$t(e,r,q,null,l,Q)}}for(var B in l){var q=l[B];if(Q=a[B],l.hasOwnProperty(B)&&(q!=null||Q!=null))switch(B){case"type":d=q;break;case"name":h=q;break;case"checked":z=q;break;case"defaultChecked":G=q;break;case"value":v=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==Q&&$t(e,r,B,q,l,Q)}}pn(e,v,E,b,z,G,d,h);return;case"select":q=v=E=B=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":q=b;default:l.hasOwnProperty(d)||$t(e,r,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":B=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==b&&$t(e,r,h,d,l,b)}r=E,a=v,l=q,B!=null?ki(e,!!a,B,!1):!!l!=!!a&&(r!=null?ki(e,!!a,r,!0):ki(e,!!a,a?[]:"",!1));return;case"textarea":q=B=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$t(e,r,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":B=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,r,v,h,l,d)}Qt(e,B,q);return;case"option":for(var vt in a)if(B=a[vt],a.hasOwnProperty(vt)&&B!=null&&!l.hasOwnProperty(vt))switch(vt){case"selected":e.selected=!1;break;default:$t(e,r,vt,null,l,B)}for(b in l)if(B=l[b],q=a[b],l.hasOwnProperty(b)&&B!==q&&(B!=null||q!=null))switch(b){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:$t(e,r,b,B,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)B=a[mt],a.hasOwnProperty(mt)&&B!=null&&!l.hasOwnProperty(mt)&&$t(e,r,mt,null,l,B);for(z in l)if(B=l[z],q=a[z],l.hasOwnProperty(z)&&B!==q&&(B!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:$t(e,r,z,B,l,q)}return;default:if(qo(r)){for(var Wt in a)B=a[Wt],a.hasOwnProperty(Wt)&&B!==void 0&&!l.hasOwnProperty(Wt)&&Fd(e,r,Wt,void 0,l,B);for(G in l)B=l[G],q=a[G],!l.hasOwnProperty(G)||B===q||B===void 0&&q===void 0||Fd(e,r,G,B,l,q);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!l.hasOwnProperty(k)&&$t(e,r,k,null,l,B);for(Q in l)B=l[Q],q=a[Q],!l.hasOwnProperty(Q)||B===q||B==null&&q==null||$t(e,r,Q,B,l,q)}var Gd=null,Yd=null;function Oc(e){return e.nodeType===9?e:e.ownerDocument}function Q_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X_(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Kd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qd=null;function CS(){var e=window.event;return e&&e.type==="popstate"?e===Qd?!1:(Qd=e,!0):(Qd=null,!1)}var $_=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,W_=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof W_<"u"?function(e){return W_.resolve(null).then(e).catch(NS)}:$_;function NS(e){setTimeout(function(){throw e})}function Pr(e){return e==="head"}function Z_(e,r){var a=r,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&Rl(v.documentElement),a&2&&Rl(v.body),a&4)for(a=v.head,Rl(a),v=a.firstChild;v;){var E=v.nextSibling,b=v.nodeName;v[ps]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),Pl(r);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Pl(r)}function Xd(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xd(a),gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function MS(e,r,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ps])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Zn(e.nextSibling),e===null)break}return null}function VS(e,r,a){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zn(e.nextSibling),e===null))return null;return e}function $d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function PS(e,r){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Zn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var Wd=null;function J_(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return e;r--}else a==="/$"&&r++}e=e.previousSibling}return null}function tv(e,r,a){switch(r=Oc(a),e){case"html":if(e=r.documentElement,!e)throw Error(s(452));return e;case"head":if(e=r.head,!e)throw Error(s(453));return e;case"body":if(e=r.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Rl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);gr(e)}var jn=new Map,ev=new Set;function Nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tr=rt.d;rt.d={f:kS,r:xS,D:LS,C:US,L:zS,m:BS,X:jS,S:qS,M:HS};function kS(){var e=tr.f(),r=wc();return e||r}function xS(e){var r=ii(e);r!==null&&r.tag===5&&r.type==="form"?Ty(r):tr.r(e)}var Wa=typeof document>"u"?null:document;function nv(e,r,a){var l=Wa;if(l&&typeof r=="string"&&r){var h=Ee(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),ev.has(h)||(ev.add(h),e={rel:e,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Fe(r,"link",e),de(r),l.head.appendChild(r)))}}function LS(e){tr.D(e),nv("dns-prefetch",e,null)}function US(e,r){tr.C(e,r),nv("preconnect",e,r)}function zS(e,r,a){tr.L(e,r,a);var l=Wa;if(l&&e&&r){var h='link[rel="preload"][as="'+Ee(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Ee(a.imageSizes)+'"]')):h+='[href="'+Ee(e)+'"]';var d=h;switch(r){case"style":d=Za(e);break;case"script":d=Ja(e)}jn.has(d)||(e=T({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:e,as:r},a),jn.set(d,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(Il(d))||r==="script"&&l.querySelector(Cl(d))||(r=l.createElement("link"),Fe(r,"link",e),de(r),l.head.appendChild(r)))}}function BS(e,r){tr.m(e,r);var a=Wa;if(a&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ja(e)}if(!jn.has(d)&&(e=T({rel:"modulepreload",href:e},r),jn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(d)))return}l=a.createElement("link"),Fe(l,"link",e),de(l),a.head.appendChild(l)}}}function qS(e,r,a){tr.S(e,r,a);var l=Wa;if(l&&e){var h=nn(l).hoistableStyles,d=Za(e);r=r||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(Il(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":r},a),(a=jn.get(d))&&Zd(e,a);var b=v=l.createElement("link");de(b),Fe(b,"link",e),b._p=new Promise(function(z,G){b.onload=z,b.onerror=G}),b.addEventListener("load",function(){E.loading|=1}),b.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Mc(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function jS(e,r){tr.X(e,r);var a=Wa;if(a&&e){var l=nn(a).hoistableScripts,h=Ja(e),d=l.get(h);d||(d=a.querySelector(Cl(h)),d||(e=T({src:e,async:!0},r),(r=jn.get(h))&&Jd(e,r),d=a.createElement("script"),de(d),Fe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function HS(e,r){tr.M(e,r);var a=Wa;if(a&&e){var l=nn(a).hoistableScripts,h=Ja(e),d=l.get(h);d||(d=a.querySelector(Cl(h)),d||(e=T({src:e,async:!0,type:"module"},r),(r=jn.get(h))&&Jd(e,r),d=a.createElement("script"),de(d),Fe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function iv(e,r,a,l){var h=(h=dt.current)?Nc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Za(a.href),a=nn(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Za(a.href);var d=nn(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(Il(e)))&&!d._p&&(v.instance=d,v.state.loading=5),jn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jn.set(e,a),d||FS(h,e,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ja(a),a=nn(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Za(e){return'href="'+Ee(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function rv(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function FS(e,r,a,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Fe(r,"link",a),de(r),e.head.appendChild(r))}function Ja(e){return'[src="'+Ee(e)+'"]'}function Cl(e){return"script[async]"+e}function sv(e,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(l)return r.instance=l,de(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),de(l),Fe(l,"style",h),Mc(l,a.precedence,e),r.instance=l;case"stylesheet":h=Za(a.href);var d=e.querySelector(Il(h));if(d)return r.state.loading|=4,r.instance=d,de(d),d;l=rv(a),(h=jn.get(h))&&Zd(l,h),d=(e.ownerDocument||e).createElement("link"),de(d);var v=d;return v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),Fe(d,"link",l),r.state.loading|=4,Mc(d,a.precedence,e),r.instance=d;case"script":return d=Ja(a.src),(h=e.querySelector(Cl(d)))?(r.instance=h,de(h),h):(l=a,(h=jn.get(d))&&(l=T({},a),Jd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),de(h),Fe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Mc(l,a.precedence,e));return r.instance}function Mc(e,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===r)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(e,r.firstChild))}function Zd(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function Jd(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Vc=null;function av(e,r,a){if(Vc===null){var l=new Map,h=Vc=new Map;h.set(a,l)}else h=Vc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ps]||d[Re]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function ov(e,r,a){e=e.ownerDocument||e,e.head.insertBefore(a,r==="title"?e.querySelector("head > title"):null)}function GS(e,r,a){if(a===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function lv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Dl=null;function YS(){}function KS(e,r,a){if(Dl===null)throw Error(s(475));var l=Dl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Za(a.href),d=e.querySelector(Il(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Pc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=d,de(d);return}d=e.ownerDocument||e,a=rv(a),(h=jn.get(h))&&Zd(a,h),d=d.createElement("link"),de(d);var v=d;v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),Fe(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Pc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function QS(){if(Dl===null)throw Error(s(475));var e=Dl;return e.stylesheets&&e.count===0&&tm(e,e.stylesheets),0<e.count?function(r){var a=setTimeout(function(){if(e.stylesheets&&tm(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Pc(){if(this.count--,this.count===0){if(this.stylesheets)tm(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kc=null;function tm(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kc=new Map,r.forEach(XS,e),kc=null,Pc.call(e))}function XS(e,r){if(!(r.state.loading&4)){var a=kc.get(e);if(a)var l=a.get(null);else{a=new Map,kc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=r.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Pc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var Ol={$$typeof:ut,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function $S(e,r,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.hiddenUpdates=Oi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function uv(e,r,a,l,h,d,v,E,b,z,G,Q){return e=new $S(e,r,a,v,E,b,z,Q),r=1,d===!0&&(r|=24),d=_n(3,null,null,r),e.current=d,d.stateNode=e,r=kf(),r.refCount++,e.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},zf(d),e}function cv(e){return e?(e=Oa,e):Oa}function hv(e,r,a,l,h,d){h=cv(h),l.context===null?l.context=h:l.pendingContext=h,l=Tr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=wr(e,l,r),a!==null&&(An(a,e,r),al(a,e,r))}function fv(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<r?a:r}}function em(e,r){fv(e,r),(e=e.alternate)&&fv(e,r)}function dv(e){if(e.tag===13){var r=Da(e,67108864);r!==null&&An(r,e,67108864),em(e,67108864)}}var xc=!0;function WS(e,r,a,l){var h=F.T;F.T=null;var d=rt.p;try{rt.p=2,nm(e,r,a,l)}finally{rt.p=d,F.T=h}}function ZS(e,r,a,l){var h=F.T;F.T=null;var d=rt.p;try{rt.p=8,nm(e,r,a,l)}finally{rt.p=d,F.T=h}}function nm(e,r,a,l){if(xc){var h=im(l);if(h===null)Hd(e,r,l,Lc,a),gv(e,l);else if(tb(h,e,r,a,l))l.stopPropagation();else if(gv(e,l),r&4&&-1<JS.indexOf(e)){for(;h!==null;){var d=ii(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Kn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var b=1<<31-Qe(v);E.entanglements[1]|=b,v&=~b}yi(d),(Gt&6)===0&&(Ec=On()+500,Al(0))}}break;case 13:E=Da(d,2),E!==null&&An(E,d,2),wc(),em(d,2)}if(d=im(l),d===null&&Hd(e,r,l,Lc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Hd(e,r,l,null,a)}}function im(e){return e=Vn(e),rm(e)}var Lc=null;function rm(e){if(Lc=null,e=Mi(e),e!==null){var r=u(e);if(r===null)e=null;else{var a=r.tag;if(a===13){if(e=f(r),e!==null)return e;e=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Lc=e,null}function mv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(of()){case Co:return 2;case la:return 8;case hs:case lf:return 32;case ua:return 268435456;default:return 32}default:return 32}}var sm=!1,kr=null,xr=null,Lr=null,Nl=new Map,Ml=new Map,Ur=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gv(e,r){switch(e){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Nl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(r.pointerId)}}function Vl(e,r,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ii(r),r!==null&&dv(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function tb(e,r,a,l,h){switch(r){case"focusin":return kr=Vl(kr,e,r,a,l,h),!0;case"dragenter":return xr=Vl(xr,e,r,a,l,h),!0;case"mouseover":return Lr=Vl(Lr,e,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return Nl.set(d,Vl(Nl.get(d)||null,e,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Ml.set(d,Vl(Ml.get(d)||null,e,r,a,l,h)),!0}return!1}function pv(e){var r=Mi(e.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){e.blockedOn=r,wu(e.priority,function(){if(a.tag===13){var l=wn();l=fr(l);var h=Da(a,l);h!==null&&An(h,a,l),em(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var a=im(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);xi=l,a.target.dispatchEvent(l),xi=null}else return r=ii(a),r!==null&&dv(r),e.blockedOn=a,!1;r.shift()}return!0}function yv(e,r,a){Uc(e)&&a.delete(r)}function eb(){sm=!1,kr!==null&&Uc(kr)&&(kr=null),xr!==null&&Uc(xr)&&(xr=null),Lr!==null&&Uc(Lr)&&(Lr=null),Nl.forEach(yv),Ml.forEach(yv)}function zc(e,r){e.blockedOn===r&&(e.blockedOn=null,sm||(sm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,eb)))}var Bc=null;function _v(e){Bc!==e&&(Bc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Bc===e&&(Bc=null);for(var r=0;r<e.length;r+=3){var a=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(rm(l||a)===null)continue;break}var d=ii(a);d!==null&&(e.splice(r,3),r-=3,rd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Pl(e){function r(b){return zc(b,e)}kr!==null&&zc(kr,e),xr!==null&&zc(xr,e),Lr!==null&&zc(Lr,e),Nl.forEach(r),Ml.forEach(r);for(var a=0;a<Ur.length;a++){var l=Ur[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ur.length&&(a=Ur[0],a.blockedOn===null);)pv(a),a.blockedOn===null&&Ur.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[ve]||null;if(typeof d=="function")v||_v(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ve]||null)E=v.formAction;else if(rm(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),_v(a)}}}function am(e){this._internalRoot=e}qc.prototype.render=am.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=wn();hv(a,l,e,r,null,null)},qc.prototype.unmount=am.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;hv(e.current,2,null,e,null,null),wc(),r[Nn]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var r=dr();e={blockedOn:null,target:e,priority:r};for(var a=0;a<Ur.length&&r!==0&&r<Ur[a].priority;a++);Ur.splice(a,0,e),a===0&&pv(e)}};var vv=t.version;if(vv!=="19.1.1")throw Error(s(527,vv,"19.1.1"));rt.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(r),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var nb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{ce=jc.inject(nb),Ft=jc}catch{}}return xl.createRoot=function(e,r){if(!o(e))throw Error(s(299));var a=!1,l="",h=ky,d=xy,v=Ly,E=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(E=r.unstable_transitionCallbacks)),r=uv(e,1,!1,null,null,a,l,h,d,v,E,null),e[Nn]=r.current,jd(e),new am(r)},xl.hydrateRoot=function(e,r,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=ky,v=xy,E=Ly,b=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),r=uv(e,1,!0,r,a??null,l,h,d,v,E,b,z),r.context=cv(null),a=r.current,l=wn(),l=fr(l),h=Tr(l),h.callback=null,wr(a,h,l),a=l,r.current.lanes=a,Ni(r,a),yi(r),e[Nn]=r.current,jd(e),new qc(r)},xl.version="19.1.1",xl}var Dv;function db(){if(Dv)return um.exports;Dv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),um.exports=fb(),um.exports}var mb=db();const gb=NT(mb),pb=()=>{};var Ov={};/**
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
 */const MT=function(i){const t=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},yb=function(i){const t=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],f=i[n++],m=i[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[n++],f=i[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},VT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,y=o+2<i.length,p=y?i[o+2]:0,T=u>>2,S=(u&3)<<4|m>>4;let C=(m&15)<<2|p>>6,H=p&63;y||(H=64,f||(C=64)),s.push(n[T],n[S],n[C],n[H])}return s.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(MT(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):yb(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const p=o<i.length?n[i.charAt(o)]:64;++o;const S=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||p==null||S==null)throw new _b;const C=u<<2|m>>4;if(s.push(C),p!==64){const H=m<<4&240|p>>2;if(s.push(H),S!==64){const J=p<<6&192|S;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class _b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vb=function(i){const t=MT(i);return VT.encodeByteArray(t,!0)},lh=function(i){return vb(i).replace(/\./g,"")},PT=function(i){try{return VT.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tb=()=>Eb().__FIREBASE_DEFAULTS__,wb=()=>{if(typeof process>"u"||typeof Ov>"u")return;const i=Ov.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ab=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&PT(i[1]);return t&&JSON.parse(t)},Vh=()=>{try{return pb()||Tb()||wb()||Ab()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},kT=i=>Vh()?.emulatorHosts?.[i],Sb=i=>{const t=kT(i);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},xT=()=>Vh()?.config,LT=i=>Vh()?.[`_${i}`];/**
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
 */class bb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function UT(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Rb(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[lh(JSON.stringify(n)),lh(JSON.stringify(f)),""].join(".")}const Hl={};function Ib(){const i={prod:[],emulator:[]};for(const t of Object.keys(Hl))Hl[t]?i.emulator.push(t):i.prod.push(t);return i}function Cb(i){let t=document.getElementById(i),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",i),n=!0),{created:n,element:t}}let Nv=!1;function zT(i,t){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Hl[i]===t||Hl[i]||Nv)return;Hl[i]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Ib().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,H){C.setAttribute("width","24"),C.setAttribute("id",H),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function p(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Nv=!0,f()},C}function T(C,H){C.setAttribute("id",H),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=Cb(s),H=n("text"),J=document.getElementById(H)||document.createElement("span"),st=n("learnmore"),et=document.getElementById(st)||document.createElement("a"),Et=n("preprendIcon"),gt=document.getElementById(Et)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ut=C.element;m(ut),T(et,st);const Dt=p();y(gt,Et),ut.append(gt,J,et,Dt),document.body.appendChild(ut)}u?(J.innerText="Preview backend disconnected.",gt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(gt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Db(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function Ob(){const i=Vh()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function og(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Mb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vb(){const i=tn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Pb(){return!Ob()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lg(){try{return typeof indexedDB=="object"}catch{return!1}}function ug(){return new Promise((i,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function BT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const kb="FirebaseError";class ei extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=kb,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?xb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new ei(o,m,s)}}function xb(i,t){return i.replace(Lb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Lb=/\{\$([^}]+)}/g;function Ub(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function $r(i,t){if(i===t)return!0;const n=Object.keys(i),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=i[o],f=t[o];if(Mv(u)&&Mv(f)){if(!$r(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Mv(i){return i!==null&&typeof i=="object"}/**
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
 */function ou(i){const t=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ll(i){const t={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Ul(i){const t=i.indexOf("?");if(!t)return"";const n=i.indexOf("#",t);return i.substring(t,n>0?n:void 0)}function zb(i,t){const n=new Bb(i,t);return n.subscribe.bind(n)}class Bb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=dm),o.error===void 0&&(o.error=dm),o.complete===void 0&&(o.complete=dm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qb(i,t){if(typeof i!="object"||i===null)return!1;for(const n of t)if(n in i&&typeof i[n]=="function")return!0;return!1}function dm(){}/**
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
 */const jb=1e3,Hb=2,Fb=14400*1e3,Gb=.5;function Vv(i,t=jb,n=Hb){const s=t*Math.pow(n,i),o=Math.round(Gb*s*(Math.random()-.5)*2);return Math.min(Fb,s+o)}/**
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
 */function be(i){return i&&i._delegate?i._delegate:i}class Cn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gs="[DEFAULT]";/**
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
 */class Yb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new bb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qb(t))try{this.getOrInitializeService({instanceIdentifier:Gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Gs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gs){return this.instances.has(t)}getOptions(t=Gs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Gs){return this.component?this.component.multipleInstances?t:Gs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kb(i){return i===Gs?void 0:i}function Qb(i){return i.instantiationMode==="EAGER"}/**
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
 */class Xb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Nt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Nt||(Nt={}));const $b={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},Wb=Nt.INFO,Zb={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},Jb=(i,t,...n)=>{if(t<i.logLevel)return;const s=new Date().toISOString(),o=Zb[t];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ph{constructor(t){this.name=t,this._logLevel=Wb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...t),this._logHandler(this,Nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...t),this._logHandler(this,Nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...t),this._logHandler(this,Nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...t),this._logHandler(this,Nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...t),this._logHandler(this,Nt.ERROR,...t)}}const t1=(i,t)=>t.some(n=>i instanceof n);let Pv,kv;function e1(){return Pv||(Pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n1(){return kv||(kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qT=new WeakMap,Vm=new WeakMap,jT=new WeakMap,mm=new WeakMap,cg=new WeakMap;function i1(i){const t=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{n(rr(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&qT.set(n,i)}).catch(()=>{}),cg.set(t,i),t}function r1(i){if(Vm.has(i))return;const t=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});Vm.set(i,t)}let Pm={get(i,t,n){if(i instanceof IDBTransaction){if(t==="done")return Vm.get(i);if(t==="objectStoreNames")return i.objectStoreNames||jT.get(i);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(i[t])},set(i,t,n){return i[t]=n,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function s1(i){Pm=i(Pm)}function a1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=i.call(gm(this),t,...n);return jT.set(s,t.sort?t.sort():[t]),rr(s)}:n1().includes(i)?function(...t){return i.apply(gm(this),t),rr(qT.get(this))}:function(...t){return rr(i.apply(gm(this),t))}}function o1(i){return typeof i=="function"?a1(i):(i instanceof IDBTransaction&&r1(i),t1(i,e1())?new Proxy(i,Pm):i)}function rr(i){if(i instanceof IDBRequest)return i1(i);if(mm.has(i))return mm.get(i);const t=o1(i);return t!==i&&(mm.set(i,t),cg.set(t,i)),t}const gm=i=>cg.get(i);function kh(i,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,t),m=rr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(rr(f.result),y.oldVersion,y.newVersion,rr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}function pm(i,{blocked:t}={}){const n=indexedDB.deleteDatabase(i);return t&&n.addEventListener("blocked",s=>t(s.oldVersion,s)),rr(n).then(()=>{})}const l1=["get","getKey","getAll","getAllKeys","count"],u1=["put","add","delete","clear"],ym=new Map;function xv(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(ym.get(t))return ym.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=u1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||l1.includes(n)))return;const u=async function(f,...m){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),o&&y.done]))[0]};return ym.set(t,u),u}s1(i=>({...i,get:(t,n,s)=>xv(t,n)||i.get(t,n,s),has:(t,n)=>!!xv(t,n)||i.has(t,n)}));/**
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
 */class c1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function h1(i){return i.getComponent()?.type==="VERSION"}const km="@firebase/app",Lv="0.14.2";/**
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
 */const or=new Ph("@firebase/app"),f1="@firebase/app-compat",d1="@firebase/analytics-compat",m1="@firebase/analytics",g1="@firebase/app-check-compat",p1="@firebase/app-check",y1="@firebase/auth",_1="@firebase/auth-compat",v1="@firebase/database",E1="@firebase/data-connect",T1="@firebase/database-compat",w1="@firebase/functions",A1="@firebase/functions-compat",S1="@firebase/installations",b1="@firebase/installations-compat",R1="@firebase/messaging",I1="@firebase/messaging-compat",C1="@firebase/performance",D1="@firebase/performance-compat",O1="@firebase/remote-config",N1="@firebase/remote-config-compat",M1="@firebase/storage",V1="@firebase/storage-compat",P1="@firebase/firestore",k1="@firebase/ai",x1="@firebase/firestore-compat",L1="firebase",U1="12.2.0";/**
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
 */const xm="[DEFAULT]",z1={[km]:"fire-core",[f1]:"fire-core-compat",[m1]:"fire-analytics",[d1]:"fire-analytics-compat",[p1]:"fire-app-check",[g1]:"fire-app-check-compat",[y1]:"fire-auth",[_1]:"fire-auth-compat",[v1]:"fire-rtdb",[E1]:"fire-data-connect",[T1]:"fire-rtdb-compat",[w1]:"fire-fn",[A1]:"fire-fn-compat",[S1]:"fire-iid",[b1]:"fire-iid-compat",[R1]:"fire-fcm",[I1]:"fire-fcm-compat",[C1]:"fire-perf",[D1]:"fire-perf-compat",[O1]:"fire-rc",[N1]:"fire-rc-compat",[M1]:"fire-gcs",[V1]:"fire-gcs-compat",[P1]:"fire-fst",[x1]:"fire-fst-compat",[k1]:"fire-vertex","fire-js":"fire-js",[L1]:"fire-js-all"};/**
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
 */const uh=new Map,B1=new Map,Lm=new Map;function Uv(i,t){try{i.container.addComponent(t)}catch(n){or.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,n)}}function Yn(i){const t=i.name;if(Lm.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;Lm.set(t,i);for(const n of uh.values())Uv(n,i);for(const n of B1.values())Uv(n,i);return!0}function ra(i,t){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(t)}function Hn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const q1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new is("app","Firebase",q1);/**
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
 */class j1{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
 */const To=U1;function HT(i,t={}){let n=i;typeof t!="object"&&(t={name:t});const s={name:xm,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Kr.create("bad-app-name",{appName:String(o)});if(n||(n=xT()),!n)throw Kr.create("no-options");const u=uh.get(o);if(u){if($r(n,u.options)&&$r(s,u.config))return u;throw Kr.create("duplicate-app",{appName:o})}const f=new Xb(o);for(const y of Lm.values())f.addComponent(y);const m=new j1(n,s,f);return uh.set(o,m),m}function hg(i=xm){const t=uh.get(i);if(!t&&i===xm&&xT())return HT();if(!t)throw Kr.create("no-app",{appName:i});return t}function dn(i,t,n){let s=z1[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(f.join(" "));return}Yn(new Cn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const H1="firebase-heartbeat-database",F1=1,$l="firebase-heartbeat-store";let _m=null;function FT(){return _m||(_m=kh(H1,F1,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(i=>{throw Kr.create("idb-open",{originalErrorMessage:i.message})})),_m}async function G1(i){try{const n=(await FT()).transaction($l),s=await n.objectStore($l).get(GT(i));return await n.done,s}catch(t){if(t instanceof ei)or.warn(t.message);else{const n=Kr.create("idb-get",{originalErrorMessage:t?.message});or.warn(n.message)}}}async function zv(i,t){try{const s=(await FT()).transaction($l,"readwrite");await s.objectStore($l).put(t,GT(i)),await s.done}catch(n){if(n instanceof ei)or.warn(n.message);else{const s=Kr.create("idb-set",{originalErrorMessage:n?.message});or.warn(s.message)}}}function GT(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Y1=1024,K1=30;class Q1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>K1){const o=W1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){or.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bv(),{heartbeatsToSend:n,unsentEntries:s}=X1(this._heartbeatsCache.heartbeats),o=lh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return or.warn(t),""}}}function Bv(){return new Date().toISOString().substring(0,10)}function X1(i,t=Y1){const n=[];let s=i.slice();for(const o of i){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),qv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),qv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lg()?ug().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await G1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return zv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return zv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qv(i){return lh(JSON.stringify({version:2,heartbeats:i})).length}function W1(i){if(i.length===0)return-1;let t=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,t=s);return t}/**
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
 */function Z1(i){Yn(new Cn("platform-logger",t=>new c1(t),"PRIVATE")),Yn(new Cn("heartbeat",t=>new Q1(t),"PRIVATE")),dn(km,Lv,i),dn(km,Lv,"esm2020"),dn("fire-js","")}Z1("");var J1="firebase",tR="12.2.1";/**
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
 */dn(J1,tR,"app");function YT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eR=YT,KT=new is("auth","Firebase",YT());/**
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
 */const ch=new Ph("@firebase/auth");function nR(i,...t){ch.logLevel<=Nt.WARN&&ch.warn(`Auth (${To}): ${i}`,...t)}function Zc(i,...t){ch.logLevel<=Nt.ERROR&&ch.error(`Auth (${To}): ${i}`,...t)}/**
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
 */function ti(i,...t){throw fg(i,...t)}function Ti(i,...t){return fg(i,...t)}function QT(i,t,n){const s={...eR(),[t]:n};return new is("auth","Firebase",s).create(t,{appName:i.name})}function sr(i){return QT(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fg(i,...t){if(typeof i!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return KT.create(i,...t)}function yt(i,t,...n){if(!i)throw fg(t,...n)}function nr(i){const t="INTERNAL ASSERTION FAILED: "+i;throw Zc(t),new Error(t)}function lr(i,t){i||nr(t)}/**
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
 */function Um(){return typeof self<"u"&&self.location?.href||""}function iR(){return jv()==="http:"||jv()==="https:"}function jv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function rR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||og()||"connection"in navigator)?navigator.onLine:!0}function sR(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class lu{constructor(t,n){this.shortDelay=t,this.longDelay=n,lr(n>t,"Short delay should be less than long delay!"),this.isMobile=Db()||Mb()}get(){return rR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dg(i,t){lr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class XT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lR=new lu(3e4,6e4);function rs(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function ss(i,t,n,s,o={}){return $T(i,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=ou({key:i.config.apiKey,...f}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const p={method:t,headers:y,...u};return Nb()||(p.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(p.credentials="include"),XT.fetch()(await WT(i,i.config.apiHost,n,m),p)})}async function $T(i,t,n){i._canInitEmulator=!1;const s={...aR,...t};try{const o=new cR(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Hc(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[y,p]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hc(i,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Hc(i,"email-already-in-use",f);if(y==="USER_DISABLED")throw Hc(i,"user-disabled",f);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw QT(i,T,p);ti(i,T)}}catch(o){if(o instanceof ei)throw o;ti(i,"network-request-failed",{message:String(o)})}}async function uu(i,t,n,s,o={}){const u=await ss(i,t,n,s,o);return"mfaPendingCredential"in u&&ti(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function WT(i,t,n,s){const o=`${t}${n}?${s}`,u=i,f=u.config.emulator?dg(i.config,o):`${i.config.apiScheme}://${o}`;return oR.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function uR(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ti(this.auth,"network-request-failed")),lR.get())})}}function Hc(i,t,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ti(i,t,s);return o.customData._tokenResponse=n,o}function Hv(i){return i!==void 0&&i.enterprise!==void 0}class hR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return uR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fR(i,t){return ss(i,"GET","/v2/recaptchaConfig",rs(i,t))}/**
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
 */async function dR(i,t){return ss(i,"POST","/v1/accounts:delete",t)}async function hh(i,t){return ss(i,"POST","/v1/accounts:lookup",t)}/**
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
 */function Fl(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mR(i,t=!1){const n=be(i),s=await n.getIdToken(t),o=mg(s);yt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Fl(vm(o.auth_time)),issuedAtTime:Fl(vm(o.iat)),expirationTime:Fl(vm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function vm(i){return Number(i)*1e3}function mg(i){const[t,n,s]=i.split(".");if(t===void 0||n===void 0||s===void 0)return Zc("JWT malformed, contained fewer than 3 sections"),null;try{const o=PT(n);return o?JSON.parse(o):(Zc("Failed to decode base64 JWT payload"),null)}catch(o){return Zc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Fv(i){const t=mg(i);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wl(i,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof ei&&gR(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function gR({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class pR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fl(this.lastLoginAt),this.creationTime=Fl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fh(i){const t=i.auth,n=await i.getIdToken(),s=await Wl(i,hh(t,{idToken:n}));yt(s?.users.length,t,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=o.providerUserInfo?.length?ZT(o.providerUserInfo):[],f=_R(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!f?.length,p=m?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new zm(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(i,T)}async function yR(i){const t=be(i);await fh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _R(i,t){return[...i.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function ZT(i){return i.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function vR(i,t){const n=await $T(i,{},async()=>{const s=ou({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await WT(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(y.credentials="include"),XT.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ER(i,t){return ss(i,"POST","/v2/accounts:revokeToken",rs(i,t))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Fv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=Fv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await vR(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new oo;return s&&(yt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(yt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(yt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Br(i,t){yt(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class Jn{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new pR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new zm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wl(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return mR(this,t)}reload(){return yR(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Jn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await fh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(sr(this.auth));const t=await this.getIdToken();return await Wl(this,dR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:S,emailVerified:C,isAnonymous:H,providerData:J,stsTokenManager:st}=n;yt(S&&st,t,"internal-error");const et=oo.fromJSON(this.name,st);yt(typeof S=="string",t,"internal-error"),Br(s,t.name),Br(o,t.name),yt(typeof C=="boolean",t,"internal-error"),yt(typeof H=="boolean",t,"internal-error"),Br(u,t.name),Br(f,t.name),Br(m,t.name),Br(y,t.name),Br(p,t.name),Br(T,t.name);const Et=new Jn({uid:S,auth:t,email:o,emailVerified:C,displayName:s,isAnonymous:H,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:et,createdAt:p,lastLoginAt:T});return J&&Array.isArray(J)&&(Et.providerData=J.map(gt=>({...gt}))),y&&(Et._redirectEventId=y),Et}static async _fromIdTokenResponse(t,n,s=!1){const o=new oo;o.updateFromServerResponse(n);const u=new Jn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await fh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];yt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?ZT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new oo;m.updateFromIdToken(s);const y=new Jn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new zm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,p),y}}/**
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
 */const Gv=new Map;function ir(i){lr(i instanceof Function,"Expected a class definition");let t=Gv.get(i);return t?(lr(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Gv.set(i,t),t)}/**
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
 */class JT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}JT.type="NONE";const Yv=JT;/**
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
 */function Jc(i,t,n){return`firebase:${i}:${t}:${n}`}class lo{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Jc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Jc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await hh(this.auth,{idToken:t}).catch(()=>{});return n?Jn._fromGetAccountInfoResponse(this.auth,n,t):null}return Jn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new lo(ir(Yv),t,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||ir(Yv);const f=Jc(s,t.config.apiKey,t.name);let m=null;for(const p of n)try{const T=await p._get(f);if(T){let S;if(typeof T=="string"){const C=await hh(t,{idToken:T}).catch(()=>{});if(!C)break;S=await Jn._fromGetAccountInfoResponse(t,C,T)}else S=Jn._fromJSON(t,T);p!==u&&(m=S),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new lo(u,t,s):(u=y[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new lo(u,t,s))}}/**
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
 */function Kv(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(i0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(t0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(s0(t))return"Blackberry";if(a0(t))return"Webos";if(e0(t))return"Safari";if((t.includes("chrome/")||n0(t))&&!t.includes("edge/"))return"Chrome";if(r0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if(s?.length===2)return s[1]}return"Other"}function t0(i=tn()){return/firefox\//i.test(i)}function e0(i=tn()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function n0(i=tn()){return/crios\//i.test(i)}function i0(i=tn()){return/iemobile/i.test(i)}function r0(i=tn()){return/android/i.test(i)}function s0(i=tn()){return/blackberry/i.test(i)}function a0(i=tn()){return/webos/i.test(i)}function gg(i=tn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function TR(i=tn()){return gg(i)&&!!window.navigator?.standalone}function wR(){return Vb()&&document.documentMode===10}function o0(i=tn()){return gg(i)||r0(i)||a0(i)||s0(i)||/windows phone/i.test(i)||i0(i)}/**
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
 */function l0(i,t=[]){let n;switch(i){case"Browser":n=Kv(tn());break;case"Worker":n=`${Kv(tn())}-${i}`;break;default:n=i}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${To}/${s}`}/**
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
 */class AR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const y=t(u);f(y)}catch(y){m(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function SR(i,t={}){return ss(i,"GET","/v2/passwordPolicy",rs(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const bR=6;class RR{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class IR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await lo.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await hh(this,{idToken:t}),s=await Jn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Hn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await fh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Hn(this.app))return Promise.reject(sr(this));const n=t?be(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Hn(this.app)?Promise.reject(sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await SR(this),n=new RR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new is("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ER(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ir(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=l0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&nR(`Error while retrieving App Check token: ${t.error}`),t?.token}}function sa(i){return be(i)}class Qv{constructor(t){this.auth=t,this.observer=null,this.addObserver=zb(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CR(i){xh=i}function u0(i){return xh.loadJS(i)}function DR(){return xh.recaptchaEnterpriseScript}function OR(){return xh.gapiScript}function NR(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class MR{constructor(){this.enterprise=new VR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class VR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const PR="recaptcha-enterprise",c0="NO_RECAPTCHA";class kR{constructor(t){this.type=PR,this.auth=sa(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{fR(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const p=new hR(y);return u.tenantId==null?u._agentRecaptchaConfig=p:u._tenantRecaptchaConfigs[u.tenantId]=p,f(p.siteKey)}}).catch(y=>{m(y)})})}function o(u,f,m){const y=window.grecaptcha;Hv(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:t}).then(p=>{f(p)}).catch(()=>{f(c0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Hv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let y=DR();y.length!==0&&(y+=m),u0(y).then(()=>{o(m,u,f)}).catch(p=>{f(p)})}}).catch(m=>{f(m)})})}}async function Xv(i,t,n,s=!1,o=!1){const u=new kR(i);let f;if(o)f=c0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,p=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Bm(i,t,n,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Xv(i,t,n,n==="getOobCode");return s(i,u)}else return s(i,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Xv(i,t,n,n==="getOobCode");return s(i,f)}else return Promise.reject(u)})}/**
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
 */function xR(i,t){const n=ra(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if($r(u,t??{}))return o;ti(o,"already-initialized")}return n.initialize({options:t})}function LR(i,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ir);t?.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(s,t?.popupRedirectResolver)}function UR(i,t,n){const s=sa(i);yt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=h0(t),{host:f,port:m}=zR(t),y=m===null?"":`:${m}`,p={url:`${u}//${f}${y}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){yt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),yt($r(p,s.config.emulator)&&$r(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Eo(f)?(UT(`${u}//${f}${y}`),zT("Auth",!0)):BR()}function h0(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function zR(i){const t=h0(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:$v(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:$v(f)}}}function $v(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function BR(){function i(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class pg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(t){return nr("not implemented")}_linkToIdToken(t,n){return nr("not implemented")}_getReauthenticationResolver(t){return nr("not implemented")}}async function qR(i,t){return ss(i,"POST","/v1/accounts:signUp",t)}/**
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
 */async function jR(i,t){return uu(i,"POST","/v1/accounts:signInWithPassword",rs(i,t))}/**
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
 */async function HR(i,t){return uu(i,"POST","/v1/accounts:signInWithEmailLink",rs(i,t))}async function FR(i,t){return uu(i,"POST","/v1/accounts:signInWithEmailLink",rs(i,t))}/**
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
 */class Zl extends pg{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Zl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Zl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bm(t,n,"signInWithPassword",jR);case"emailLink":return HR(t,{email:this._email,oobCode:this._password});default:ti(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bm(t,s,"signUpPassword",qR);case"emailLink":return FR(t,{idToken:n,email:this._email,oobCode:this._password});default:ti(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function uo(i,t){return uu(i,"POST","/v1/accounts:signInWithIdp",rs(i,t))}/**
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
 */const GR="http://localhost";class Ws extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ws(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ti("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Ws(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return uo(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,uo(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,uo(t,n)}buildRequest(){const t={requestUri:GR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ou(n)}return t}}/**
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
 */function YR(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KR(i){const t=Ll(Ul(i)).link,n=t?Ll(Ul(t)).deep_link_id:null,s=Ll(Ul(i)).deep_link_id;return(s?Ll(Ul(s)).link:null)||s||n||t||i}class yg{constructor(t){const n=Ll(Ul(t)),s=n.apiKey??null,o=n.oobCode??null,u=YR(n.mode??null);yt(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=KR(t);try{return new yg(n)}catch{return null}}}/**
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
 */class wo{constructor(){this.providerId=wo.PROVIDER_ID}static credential(t,n){return Zl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=yg.parseLink(n);return yt(s,"argument-error"),Zl._fromEmailAndCode(t,s.code,s.tenantId)}}wo.PROVIDER_ID="password";wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class f0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cu extends f0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class jr extends cu{constructor(){super("facebook.com")}static credential(t){return Ws._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jr.credentialFromTaggedObject(t)}static credentialFromError(t){return jr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jr.credential(t.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class Hr extends cu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ws._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Hr.credentialFromTaggedObject(t)}static credentialFromError(t){return Hr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Hr.credential(n,s)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
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
 */class Fr extends cu{constructor(){super("github.com")}static credential(t){return Ws._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fr.credentialFromTaggedObject(t)}static credentialFromError(t){return Fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Fr.credential(t.oauthAccessToken)}catch{return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com";Fr.PROVIDER_ID="github.com";/**
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
 */class Gr extends cu{constructor(){super("twitter.com")}static credential(t,n){return Ws._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Gr.credentialFromTaggedObject(t)}static credentialFromError(t){return Gr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Gr.credential(n,s)}catch{return null}}}Gr.TWITTER_SIGN_IN_METHOD="twitter.com";Gr.PROVIDER_ID="twitter.com";/**
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
 */async function QR(i,t){return uu(i,"POST","/v1/accounts:signUp",rs(i,t))}/**
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
 */class Zs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Jn._fromIdTokenResponse(t,s,o),f=Wv(s);return new Zs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=Wv(s);return new Zs({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function Wv(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class dh extends ei{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new dh(t,n,s,o)}}function d0(i,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(i,u,t,s):u})}async function XR(i,t,n=!1){const s=await Wl(i,t._linkToIdToken(i.auth,await i.getIdToken()),n);return Zs._forOperation(i,"link",s)}/**
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
 */async function $R(i,t,n=!1){const{auth:s}=i;if(Hn(s.app))return Promise.reject(sr(s));const o="reauthenticate";try{const u=await Wl(i,d0(s,o,t,i),n);yt(u.idToken,s,"internal-error");const f=mg(u.idToken);yt(f,s,"internal-error");const{sub:m}=f;return yt(i.uid===m,s,"user-mismatch"),Zs._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&ti(s,"user-mismatch"),u}}/**
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
 */async function m0(i,t,n=!1){if(Hn(i.app))return Promise.reject(sr(i));const s="signIn",o=await d0(i,s,t),u=await Zs._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}async function WR(i,t){return m0(sa(i),t)}/**
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
 */async function g0(i){const t=sa(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ZR(i,t,n){if(Hn(i.app))return Promise.reject(sr(i));const s=sa(i),f=await Bm(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QR).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&g0(i),y}),m=await Zs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function JR(i,t,n){return Hn(i.app)?Promise.reject(sr(i)):WR(be(i),wo.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&g0(i),s})}function tI(i,t,n,s){return be(i).onIdTokenChanged(t,n,s)}function eI(i,t,n){return be(i).beforeAuthStateChanged(t,n)}function nI(i,t,n,s){return be(i).onAuthStateChanged(t,n,s)}function iI(i){return be(i).signOut()}const mh="__sak";/**
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
 */class p0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rI=1e3,sI=10;class y0 extends p0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=o0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);wR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,sI):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}y0.type="LOCAL";const aI=y0;/**
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
 */class _0 extends p0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_0.type="SESSION";const v0=_0;/**
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
 */function oI(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new Lh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(n.origin,u)),y=await oI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */function _g(i="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class lI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,y)=>{const p=_g("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===p)switch(C.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function wi(){return window}function uI(i){wi().location.href=i}/**
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
 */function E0(){return typeof wi().WorkerGlobalScope<"u"&&typeof wi().importScripts=="function"}async function cI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){return navigator?.serviceWorker?.controller||null}function fI(){return E0()?self:null}/**
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
 */const T0="firebaseLocalStorageDb",dI=1,gh="firebaseLocalStorage",w0="fbase_key";class hu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uh(i,t){return i.transaction([gh],t?"readwrite":"readonly").objectStore(gh)}function mI(){const i=indexedDB.deleteDatabase(T0);return new hu(i).toPromise()}function qm(){const i=indexedDB.open(T0,dI);return new Promise((t,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(gh,{keyPath:w0})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(gh)?t(s):(s.close(),await mI(),t(await qm()))})})}async function Zv(i,t,n){const s=Uh(i,!0).put({[w0]:t,value:n});return new hu(s).toPromise()}async function gI(i,t){const n=Uh(i,!1).get(t),s=await new hu(n).toPromise();return s===void 0?null:s.value}function Jv(i,t){const n=Uh(i,!0).delete(t);return new hu(n).toPromise()}const pI=800,yI=3;class A0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>yI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(fI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await qm();return await Zv(t,mh,"1"),await Jv(t,mh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>gI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Uh(o,!1).getAll();return new hu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A0.type="LOCAL";const _I=A0;new lu(3e4,6e4);/**
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
 */function vI(i,t){return t?ir(t):(yt(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class vg extends pg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return uo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return uo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return uo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function EI(i){return m0(i.auth,new vg(i),i.bypassAuthState)}function TI(i){const{auth:t,user:n}=i;return yt(n,t,"internal-error"),$R(n,new vg(i),i.bypassAuthState)}async function wI(i){const{auth:t,user:n}=i;return yt(n,t,"internal-error"),XR(n,new vg(i),i.bypassAuthState)}/**
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
 */class S0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return wI;case"reauthViaPopup":case"reauthViaRedirect":return TI;default:ti(this.auth,"internal-error")}}resolve(t){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AI=new lu(2e3,1e4);class ao extends S0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const t=_g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ti(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ti(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AI.get())};t()}}ao.currentPopupAction=null;/**
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
 */const SI="pendingRedirect",th=new Map;class bI extends S0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=th.get(this.auth._key());if(!t){try{const s=await RI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}th.set(this.auth._key(),t)}return this.bypassAuthState||th.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(i,t){const n=DI(t),s=CI(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function II(i,t){th.set(i._key(),t)}function CI(i){return ir(i._redirectPersistence)}function DI(i){return Jc(SI,i.config.apiKey,i.name)}async function OI(i,t,n=!1){if(Hn(i.app))return Promise.reject(sr(i));const s=sa(i),o=vI(s,t),f=await new bI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const NI=600*1e3;class MI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!VI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!b0(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(Ti(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NI&&this.cachedEventUids.clear(),this.cachedEventUids.has(tE(t))}saveEventToCache(t){this.cachedEventUids.add(tE(t)),this.lastProcessedEventTime=Date.now()}}function tE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function b0({type:i,error:t}){return i==="unknown"&&t?.code==="auth/no-auth-event"}function VI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b0(i);default:return!1}}/**
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
 */async function PI(i,t={}){return ss(i,"GET","/v1/projects",t)}/**
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
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function LI(i){if(i.config.emulator)return;const{authorizedDomains:t}=await PI(i);for(const n of t)try{if(UI(n))return}catch{}ti(i,"unauthorized-domain")}function UI(i){const t=Um(),{protocol:n,hostname:s}=new URL(t);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!xI.test(n))return!1;if(kI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const zI=new lu(3e4,6e4);function eE(){const i=wi().___jsl;if(i?.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function BI(i){return new Promise((t,n)=>{function s(){eE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{eE(),n(Ti(i,"network-request-failed"))},timeout:zI.get()})}if(wi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(wi().gapi?.load)s();else{const o=NR("iframefcb");return wi()[o]=()=>{gapi.load?s():n(Ti(i,"network-request-failed"))},u0(`${OR()}?onload=${o}`).catch(u=>n(u))}}).catch(t=>{throw eh=null,t})}let eh=null;function qI(i){return eh=eh||BI(i),eh}/**
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
 */const jI=new lu(5e3,15e3),HI="__/auth/iframe",FI="emulator/auth/iframe",GI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KI(i){const t=i.config;yt(t.authDomain,i,"auth-domain-config-required");const n=t.emulator?dg(t,FI):`https://${i.config.authDomain}/${HI}`,s={apiKey:t.apiKey,appName:i.name,v:To},o=YI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ou(s).slice(1)}`}async function QI(i){const t=await qI(i),n=wi().gapi;return yt(n,i,"internal-error"),t.open({where:document.body,url:KI(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ti(i,"network-request-failed"),m=wi().setTimeout(()=>{u(f)},jI.get());function y(){wi().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const XI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$I=500,WI=600,ZI="_blank",JI="http://localhost";class nE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tC(i,t,n,s=$I,o=WI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...XI,width:s.toString(),height:o.toString(),top:u,left:f},p=tn().toLowerCase();n&&(m=n0(p)?ZI:n),t0(p)&&(t=t||JI,y.scrollbars="yes");const T=Object.entries(y).reduce((C,[H,J])=>`${C}${H}=${J},`,"");if(TR(p)&&m!=="_self")return eC(t||"",m),new nE(null);const S=window.open(t||"",m,T);yt(S,i,"popup-blocked");try{S.focus()}catch{}return new nE(S)}function eC(i,t){const n=document.createElement("a");n.href=i,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nC="__/auth/handler",iC="emulator/auth/handler",rC=encodeURIComponent("fac");async function iE(i,t,n,s,o,u){yt(i.config.authDomain,i,"auth-domain-config-required"),yt(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:To,eventId:o};if(t instanceof f0){t.setDefaultLanguage(i.languageCode),f.providerId=t.providerId||"",Ub(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(t instanceof cu){const T=t.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),p=y?`#${rC}=${encodeURIComponent(y)}`:"";return`${sC(i)}?${ou(m).slice(1)}${p}`}function sC({config:i}){return i.emulator?dg(i,iC):`https://${i.authDomain}/${nC}`}/**
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
 */const Em="webStorageSupport";class aC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=OI,this._overrideRedirectResult=II}async _openPopup(t,n,s,o){lr(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await iE(t,n,s,Um(),o);return tC(t,u,_g())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await iE(t,n,s,Um(),o);return uI(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(lr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await QI(t),s=new MI(t);return n.register("authEvent",o=>(yt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Em,{type:Em},o=>{const u=o?.[0]?.[Em];u!==void 0&&n(!!u),ti(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return o0()||e0()||gg()}}const oC=aC;var rE="@firebase/auth",sE="1.11.0";/**
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
 */class lC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cC(i){Yn(new Cn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;yt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l0(i)},p=new IR(s,o,u,y);return LR(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Yn(new Cn("auth-internal",t=>{const n=sa(t.getProvider("auth").getImmediate());return(s=>new lC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(rE,sE,uC(i)),dn(rE,sE,"esm2020")}/**
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
 */const hC=300,fC=LT("authIdTokenMaxAge")||hC;let aE=null;const dC=i=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fC)return;const o=n?.token;aE!==o&&(aE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function mC(i=hg()){const t=ra(i,"auth");if(t.isInitialized())return t.getImmediate();const n=xR(i,{popupRedirectResolver:oC,persistence:[_I,aI,v0]}),s=LT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=dC(u.toString());eI(n,f,()=>f(n.currentUser)),tI(n,m=>f(m))}}const o=kT("auth");return o&&UR(n,`http://${o}`),n}function gC(){return document.getElementsByTagName("head")?.[0]??document}CR({loadJS(i){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=t,s.onerror=o=>{const u=Ti("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",gC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cC("Browser");var oE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,R0;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,A){function R(){}R.prototype=A.prototype,V.D=A.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(N,M,x){for(var I=Array(arguments.length-2),re=2;re<arguments.length;re++)I[re-2]=arguments[re];return A.prototype[M].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,A,R){R||(R=0);var N=Array(16);if(typeof A=="string")for(var M=0;16>M;++M)N[M]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(M=0;16>M;++M)N[M]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=V.g[0],R=V.g[1],M=V.g[2];var x=V.g[3],I=A+(x^R&(M^x))+N[0]+3614090360&4294967295;A=R+(I<<7&4294967295|I>>>25),I=x+(M^A&(R^M))+N[1]+3905402710&4294967295,x=A+(I<<12&4294967295|I>>>20),I=M+(R^x&(A^R))+N[2]+606105819&4294967295,M=x+(I<<17&4294967295|I>>>15),I=R+(A^M&(x^A))+N[3]+3250441966&4294967295,R=M+(I<<22&4294967295|I>>>10),I=A+(x^R&(M^x))+N[4]+4118548399&4294967295,A=R+(I<<7&4294967295|I>>>25),I=x+(M^A&(R^M))+N[5]+1200080426&4294967295,x=A+(I<<12&4294967295|I>>>20),I=M+(R^x&(A^R))+N[6]+2821735955&4294967295,M=x+(I<<17&4294967295|I>>>15),I=R+(A^M&(x^A))+N[7]+4249261313&4294967295,R=M+(I<<22&4294967295|I>>>10),I=A+(x^R&(M^x))+N[8]+1770035416&4294967295,A=R+(I<<7&4294967295|I>>>25),I=x+(M^A&(R^M))+N[9]+2336552879&4294967295,x=A+(I<<12&4294967295|I>>>20),I=M+(R^x&(A^R))+N[10]+4294925233&4294967295,M=x+(I<<17&4294967295|I>>>15),I=R+(A^M&(x^A))+N[11]+2304563134&4294967295,R=M+(I<<22&4294967295|I>>>10),I=A+(x^R&(M^x))+N[12]+1804603682&4294967295,A=R+(I<<7&4294967295|I>>>25),I=x+(M^A&(R^M))+N[13]+4254626195&4294967295,x=A+(I<<12&4294967295|I>>>20),I=M+(R^x&(A^R))+N[14]+2792965006&4294967295,M=x+(I<<17&4294967295|I>>>15),I=R+(A^M&(x^A))+N[15]+1236535329&4294967295,R=M+(I<<22&4294967295|I>>>10),I=A+(M^x&(R^M))+N[1]+4129170786&4294967295,A=R+(I<<5&4294967295|I>>>27),I=x+(R^M&(A^R))+N[6]+3225465664&4294967295,x=A+(I<<9&4294967295|I>>>23),I=M+(A^R&(x^A))+N[11]+643717713&4294967295,M=x+(I<<14&4294967295|I>>>18),I=R+(x^A&(M^x))+N[0]+3921069994&4294967295,R=M+(I<<20&4294967295|I>>>12),I=A+(M^x&(R^M))+N[5]+3593408605&4294967295,A=R+(I<<5&4294967295|I>>>27),I=x+(R^M&(A^R))+N[10]+38016083&4294967295,x=A+(I<<9&4294967295|I>>>23),I=M+(A^R&(x^A))+N[15]+3634488961&4294967295,M=x+(I<<14&4294967295|I>>>18),I=R+(x^A&(M^x))+N[4]+3889429448&4294967295,R=M+(I<<20&4294967295|I>>>12),I=A+(M^x&(R^M))+N[9]+568446438&4294967295,A=R+(I<<5&4294967295|I>>>27),I=x+(R^M&(A^R))+N[14]+3275163606&4294967295,x=A+(I<<9&4294967295|I>>>23),I=M+(A^R&(x^A))+N[3]+4107603335&4294967295,M=x+(I<<14&4294967295|I>>>18),I=R+(x^A&(M^x))+N[8]+1163531501&4294967295,R=M+(I<<20&4294967295|I>>>12),I=A+(M^x&(R^M))+N[13]+2850285829&4294967295,A=R+(I<<5&4294967295|I>>>27),I=x+(R^M&(A^R))+N[2]+4243563512&4294967295,x=A+(I<<9&4294967295|I>>>23),I=M+(A^R&(x^A))+N[7]+1735328473&4294967295,M=x+(I<<14&4294967295|I>>>18),I=R+(x^A&(M^x))+N[12]+2368359562&4294967295,R=M+(I<<20&4294967295|I>>>12),I=A+(R^M^x)+N[5]+4294588738&4294967295,A=R+(I<<4&4294967295|I>>>28),I=x+(A^R^M)+N[8]+2272392833&4294967295,x=A+(I<<11&4294967295|I>>>21),I=M+(x^A^R)+N[11]+1839030562&4294967295,M=x+(I<<16&4294967295|I>>>16),I=R+(M^x^A)+N[14]+4259657740&4294967295,R=M+(I<<23&4294967295|I>>>9),I=A+(R^M^x)+N[1]+2763975236&4294967295,A=R+(I<<4&4294967295|I>>>28),I=x+(A^R^M)+N[4]+1272893353&4294967295,x=A+(I<<11&4294967295|I>>>21),I=M+(x^A^R)+N[7]+4139469664&4294967295,M=x+(I<<16&4294967295|I>>>16),I=R+(M^x^A)+N[10]+3200236656&4294967295,R=M+(I<<23&4294967295|I>>>9),I=A+(R^M^x)+N[13]+681279174&4294967295,A=R+(I<<4&4294967295|I>>>28),I=x+(A^R^M)+N[0]+3936430074&4294967295,x=A+(I<<11&4294967295|I>>>21),I=M+(x^A^R)+N[3]+3572445317&4294967295,M=x+(I<<16&4294967295|I>>>16),I=R+(M^x^A)+N[6]+76029189&4294967295,R=M+(I<<23&4294967295|I>>>9),I=A+(R^M^x)+N[9]+3654602809&4294967295,A=R+(I<<4&4294967295|I>>>28),I=x+(A^R^M)+N[12]+3873151461&4294967295,x=A+(I<<11&4294967295|I>>>21),I=M+(x^A^R)+N[15]+530742520&4294967295,M=x+(I<<16&4294967295|I>>>16),I=R+(M^x^A)+N[2]+3299628645&4294967295,R=M+(I<<23&4294967295|I>>>9),I=A+(M^(R|~x))+N[0]+4096336452&4294967295,A=R+(I<<6&4294967295|I>>>26),I=x+(R^(A|~M))+N[7]+1126891415&4294967295,x=A+(I<<10&4294967295|I>>>22),I=M+(A^(x|~R))+N[14]+2878612391&4294967295,M=x+(I<<15&4294967295|I>>>17),I=R+(x^(M|~A))+N[5]+4237533241&4294967295,R=M+(I<<21&4294967295|I>>>11),I=A+(M^(R|~x))+N[12]+1700485571&4294967295,A=R+(I<<6&4294967295|I>>>26),I=x+(R^(A|~M))+N[3]+2399980690&4294967295,x=A+(I<<10&4294967295|I>>>22),I=M+(A^(x|~R))+N[10]+4293915773&4294967295,M=x+(I<<15&4294967295|I>>>17),I=R+(x^(M|~A))+N[1]+2240044497&4294967295,R=M+(I<<21&4294967295|I>>>11),I=A+(M^(R|~x))+N[8]+1873313359&4294967295,A=R+(I<<6&4294967295|I>>>26),I=x+(R^(A|~M))+N[15]+4264355552&4294967295,x=A+(I<<10&4294967295|I>>>22),I=M+(A^(x|~R))+N[6]+2734768916&4294967295,M=x+(I<<15&4294967295|I>>>17),I=R+(x^(M|~A))+N[13]+1309151649&4294967295,R=M+(I<<21&4294967295|I>>>11),I=A+(M^(R|~x))+N[4]+4149444226&4294967295,A=R+(I<<6&4294967295|I>>>26),I=x+(R^(A|~M))+N[11]+3174756917&4294967295,x=A+(I<<10&4294967295|I>>>22),I=M+(A^(x|~R))+N[2]+718787259&4294967295,M=x+(I<<15&4294967295|I>>>17),I=R+(x^(M|~A))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+A&4294967295,V.g[1]=V.g[1]+(M+(I<<21&4294967295|I>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+x&4294967295}s.prototype.u=function(V,A){A===void 0&&(A=V.length);for(var R=A-this.blockSize,N=this.B,M=this.h,x=0;x<A;){if(M==0)for(;x<=R;)o(this,V,x),x+=this.blockSize;if(typeof V=="string"){for(;x<A;)if(N[M++]=V.charCodeAt(x++),M==this.blockSize){o(this,N),M=0;break}}else for(;x<A;)if(N[M++]=V[x++],M==this.blockSize){o(this,N),M=0;break}}this.h=M,this.o+=A},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var A=1;A<V.length-8;++A)V[A]=0;var R=8*this.o;for(A=V.length-8;A<V.length;++A)V[A]=R&255,R/=256;for(this.u(V),V=Array(16),A=R=0;4>A;++A)for(var N=0;32>N;N+=8)V[R++]=this.g[A]>>>N&255;return V};function u(V,A){var R=m;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=A(V)}function f(V,A){this.h=A;for(var R=[],N=!0,M=V.length-1;0<=M;M--){var x=V[M]|0;N&&x==A||(R[M]=x,N=!1)}this.g=R}var m={};function y(V){return-128<=V&&128>V?u(V,function(A){return new f([A|0],0>A?-1:0)}):new f([V|0],0>V?-1:0)}function p(V){if(isNaN(V)||!isFinite(V))return S;if(0>V)return et(p(-V));for(var A=[],R=1,N=0;V>=R;N++)A[N]=V/R|0,R*=4294967296;return new f(A,0)}function T(V,A){if(V.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V.charAt(0)=="-")return et(T(V.substring(1),A));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=p(Math.pow(A,8)),N=S,M=0;M<V.length;M+=8){var x=Math.min(8,V.length-M),I=parseInt(V.substring(M,M+x),A);8>x?(x=p(Math.pow(A,x)),N=N.j(x).add(p(I))):(N=N.j(R),N=N.add(p(I)))}return N}var S=y(0),C=y(1),H=y(16777216);i=f.prototype,i.m=function(){if(st(this))return-et(this).m();for(var V=0,A=1,R=0;R<this.g.length;R++){var N=this.i(R);V+=(0<=N?N:4294967296+N)*A,A*=4294967296}return V},i.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(J(this))return"0";if(st(this))return"-"+et(this).toString(V);for(var A=p(Math.pow(V,6)),R=this,N="";;){var M=Dt(R,A).g;R=Et(R,M.j(A));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=M,J(R))return x+N;for(;6>x.length;)x="0"+x;N=x+N}},i.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function J(V){if(V.h!=0)return!1;for(var A=0;A<V.g.length;A++)if(V.g[A]!=0)return!1;return!0}function st(V){return V.h==-1}i.l=function(V){return V=Et(this,V),st(V)?-1:J(V)?0:1};function et(V){for(var A=V.g.length,R=[],N=0;N<A;N++)R[N]=~V.g[N];return new f(R,~V.h).add(C)}i.abs=function(){return st(this)?et(this):this},i.add=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],N=0,M=0;M<=A;M++){var x=N+(this.i(M)&65535)+(V.i(M)&65535),I=(x>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);N=I>>>16,x&=65535,I&=65535,R[M]=I<<16|x}return new f(R,R[R.length-1]&-2147483648?-1:0)};function Et(V,A){return V.add(et(A))}i.j=function(V){if(J(this)||J(V))return S;if(st(this))return st(V)?et(this).j(et(V)):et(et(this).j(V));if(st(V))return et(this.j(et(V)));if(0>this.l(H)&&0>V.l(H))return p(this.m()*V.m());for(var A=this.g.length+V.g.length,R=[],N=0;N<2*A;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<V.g.length;M++){var x=this.i(N)>>>16,I=this.i(N)&65535,re=V.i(M)>>>16,ee=V.i(M)&65535;R[2*N+2*M]+=I*ee,gt(R,2*N+2*M),R[2*N+2*M+1]+=x*ee,gt(R,2*N+2*M+1),R[2*N+2*M+1]+=I*re,gt(R,2*N+2*M+1),R[2*N+2*M+2]+=x*re,gt(R,2*N+2*M+2)}for(N=0;N<A;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=A;N<2*A;N++)R[N]=0;return new f(R,0)};function gt(V,A){for(;(V[A]&65535)!=V[A];)V[A+1]+=V[A]>>>16,V[A]&=65535,A++}function ut(V,A){this.g=V,this.h=A}function Dt(V,A){if(J(A))throw Error("division by zero");if(J(V))return new ut(S,S);if(st(V))return A=Dt(et(V),A),new ut(et(A.g),et(A.h));if(st(A))return A=Dt(V,et(A)),new ut(et(A.g),A.h);if(30<V.g.length){if(st(V)||st(A))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=A;0>=N.l(V);)R=Tt(R),N=Tt(N);var M=zt(R,1),x=zt(N,1);for(N=zt(N,2),R=zt(R,2);!J(N);){var I=x.add(N);0>=I.l(V)&&(M=M.add(R),x=I),N=zt(N,1),R=zt(R,1)}return A=Et(V,M.j(A)),new ut(M,A)}for(M=S;0<=V.l(A);){for(R=Math.max(1,Math.floor(V.m()/A.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),x=p(R),I=x.j(A);st(I)||0<I.l(V);)R-=N,x=p(R),I=x.j(A);J(x)&&(x=C),M=M.add(x),V=Et(V,I)}return new ut(M,V)}i.A=function(V){return Dt(this,V).h},i.and=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)&V.i(N);return new f(R,this.h&V.h)},i.or=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)|V.i(N);return new f(R,this.h|V.h)},i.xor=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)^V.i(N);return new f(R,this.h^V.h)};function Tt(V){for(var A=V.g.length+1,R=[],N=0;N<A;N++)R[N]=V.i(N)<<1|V.i(N-1)>>>31;return new f(R,V.h)}function zt(V,A){var R=A>>5;A%=32;for(var N=V.g.length-R,M=[],x=0;x<N;x++)M[x]=0<A?V.i(x+R)>>>A|V.i(x+R+1)<<32-A:V.i(x+R);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,R0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=T,Qr=f}).apply(typeof oE<"u"?oE:typeof self<"u"?self:typeof window<"u"?window:{});var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var I0,zl,C0,nh,jm,D0,O0,N0;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fc=="object"&&Fc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var w=0;w<c.length-1;w++){var L=c[w];if(!(L in _))break t;_=_[L]}c=c[c.length-1],w=_[c],g=g(w),g!=w&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,w=!1,L={next:function(){if(!w&&_<c.length){var j=_++;return{value:g(j,c[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function T(c,g,_){return c.call.apply(c.bind,arguments)}function S(c,g,_){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),c.apply(g,L)}}return function(){return c.apply(g,arguments)}}function C(c,g,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:S,C.apply(null,arguments)}function H(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function J(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(w,L,j){for(var nt=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)nt[kt-2]=arguments[kt];return g.prototype[L].apply(w,nt)}}function st(c){const g=c.length;if(0<g){const _=Array(g);for(let w=0;w<g;w++)_[w]=c[w];return _}return[]}function et(c,g){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(y(w)){const L=c.length||0,j=w.length||0;c.length=L+j;for(let nt=0;nt<j;nt++)c[L+nt]=w[nt]}else c.push(w)}}class Et{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function gt(c){return/^[\s\xa0]*$/.test(c)}function ut(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Dt(c){return Dt[" "](c),c}Dt[" "]=function(){};var Tt=ut().indexOf("Gecko")!=-1&&!(ut().toLowerCase().indexOf("webkit")!=-1&&ut().indexOf("Edge")==-1)&&!(ut().indexOf("Trident")!=-1||ut().indexOf("MSIE")!=-1)&&ut().indexOf("Edge")==-1;function zt(c,g,_){for(const w in c)g.call(_,c[w],w,c)}function V(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function A(c){const g={};for(const _ in c)g[_]=c[_];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let _,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(_ in w)c[_]=w[_];for(let j=0;j<R.length;j++)_=R[j],Object.prototype.hasOwnProperty.call(w,_)&&(c[_]=w[_])}}function M(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function x(c){m.setTimeout(()=>{throw c},0)}function I(){var c=Pt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class re{constructor(){this.h=this.g=null}add(g,_){const w=ee.get();w.set(g,_),this.h?this.h.next=w:this.g=w,this.h=w}}var ee=new Et(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,ct=!1,Pt=new re,D=()=>{const c=m.Promise.resolve(void 0);rt=()=>{c.then($)}};var $=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){x(_)}var g=ee;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ct=!1};function P(){this.s=this.s,this.C=this.C}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var Z=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c})();function tt(c,g){if(K.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Tt){t:{try{Dt(g.nodeName);var L=!0;break t}catch{}L=!1}L||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:dt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&tt.aa.h.call(this)}}J(tt,K);var dt={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),Ot=0;function ze(c,g,_,w,L){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!w,this.ha=L,this.key=++Ot,this.da=this.fa=!1}function _e(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function on(c){this.src=c,this.g={},this.h=0}on.prototype.add=function(c,g,_,w,L){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var nt=us(c,g,w,L);return-1<nt?(g=c[nt],_||(g.fa=!1)):(g=new ze(g,this.src,j,!!w,L),g.fa=_,c.push(g)),g};function ls(c,g){var _=g.type;if(_ in c.g){var w=c.g[_],L=Array.prototype.indexOf.call(w,g,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(_e(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function us(c,g,_,w){for(var L=0;L<c.length;++L){var j=c[L];if(!j.da&&j.listener==g&&j.capture==!!_&&j.ha==w)return L}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),Io={};function vu(c,g,_,w,L){if(Array.isArray(g)){for(var j=0;j<g.length;j++)vu(c,g[j],_,w,L);return null}return _=Eu(_),c&&c[Jt]?c.K(g,_,p(w)?!!w.capture:!1,L):On(c,g,_,!1,w,L)}function On(c,g,_,w,L,j){if(!g)throw Error("Invalid event type");var nt=p(L)?!!L.capture:!!L,kt=ua(c);if(kt||(c[cs]=kt=new on(c)),_=kt.add(g,_,w,nt,j),_.proxy)return _;if(w=of(),_.proxy=w,w.src=c,w.listener=_,c.addEventListener)Z||(L=nt),L===void 0&&(L=!1),c.addEventListener(g.toString(),w,L);else if(c.attachEvent)c.attachEvent(hs(g.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function of(){function c(_){return g.call(c.src,c.listener,_)}const g=lf;return c}function Co(c,g,_,w,L){if(Array.isArray(g))for(var j=0;j<g.length;j++)Co(c,g[j],_,w,L);else w=p(w)?!!w.capture:!!w,_=Eu(_),c&&c[Jt]?(c=c.i,g=String(g).toString(),g in c.g&&(j=c.g[g],_=us(j,_,w,L),-1<_&&(_e(j[_]),Array.prototype.splice.call(j,_,1),j.length==0&&(delete c.g[g],c.h--)))):c&&(c=ua(c))&&(g=c.g[g.toString()],c=-1,g&&(c=us(g,_,w,L)),(_=-1<c?g[c]:null)&&la(_))}function la(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Jt])ls(g.i,c);else{var _=c.type,w=c.proxy;g.removeEventListener?g.removeEventListener(_,w,c.capture):g.detachEvent?g.detachEvent(hs(_),w):g.addListener&&g.removeListener&&g.removeListener(w),(_=ua(g))?(ls(_,c),_.h==0&&(_.src=null,g[cs]=null)):_e(c)}}}function hs(c){return c in Io?Io[c]:Io[c]="on"+c}function lf(c,g){if(c.da)c=!0;else{g=new tt(g,this);var _=c.listener,w=c.ha||c.src;c.fa&&la(c),c=_.call(w,g)}return c}function ua(c){return c=c[cs],c instanceof on?c:null}var Do="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(c){return typeof c=="function"?c:(c[Do]||(c[Do]=function(g){return c.handleEvent(g)}),c[Do])}function ce(){P.call(this),this.i=new on(this),this.M=this,this.F=null}J(ce,P),ce.prototype[Jt]=!0,ce.prototype.removeEventListener=function(c,g,_,w){Co(this,c,g,_,w)};function Ft(c,g){var _,w=c.F;if(w)for(_=[];w;w=w.F)_.push(w);if(c=c.M,w=g.type||g,typeof g=="string")g=new K(g,c);else if(g instanceof K)g.target=g.target||c;else{var L=g;g=new K(w,c),N(g,L)}if(L=!0,_)for(var j=_.length-1;0<=j;j--){var nt=g.g=_[j];L=gn(nt,w,!0,g)&&L}if(nt=g.g=c,L=gn(nt,w,!0,g)&&L,L=gn(nt,w,!1,g)&&L,_)for(j=0;j<_.length;j++)nt=g.g=_[j],L=gn(nt,w,!1,g)&&L}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],w=0;w<_.length;w++)_e(_[w]);delete c.g[g],c.h--}}this.F=null},ce.prototype.K=function(c,g,_,w){return this.i.add(String(c),g,!1,_,w)},ce.prototype.L=function(c,g,_,w){return this.i.add(String(c),g,!0,_,w)};function gn(c,g,_,w){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var L=!0,j=0;j<g.length;++j){var nt=g[j];if(nt&&!nt.da&&nt.capture==_){var kt=nt.listener,Ie=nt.ha||nt.src;nt.fa&&ls(c.i,nt),L=kt.call(Ie,w)!==!1&&L}}return L&&!w.defaultPrevented}function Qe(c,g,_){if(typeof c=="function")_&&(c=C(c,_));else if(c&&typeof c.handleEvent=="function")c=C(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function Tu(c){c.g=Qe(()=>{c.g=null,c.i&&(c.i=!1,Tu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class uf extends P{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Tu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(c){P.call(this),this.h=c,this.g={}}J(fs,P);var ds=[];function ms(c){zt(c.g,function(g,_){this.g.hasOwnProperty(_)&&la(g)},c),c.g={}}fs.prototype.N=function(){fs.aa.N.call(this),ms(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=m.JSON.stringify,ca=m.JSON.parse,gs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Oo(){}Oo.prototype.h=null;function No(c){return c.h||(c.h=c.i())}function Mo(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ni(){K.call(this,"d")}J(Ni,K);function Vo(){K.call(this,"c")}J(Vo,K);var ni={},Po=null;function fr(){return Po=Po||new ce}ni.La="serverreachability";function ha(c){K.call(this,ni.La,c)}J(ha,K);function dr(c){const g=fr();Ft(g,new ha(g))}ni.STAT_EVENT="statevent";function wu(c,g){K.call(this,ni.STAT_EVENT,c),this.stat=g}J(wu,K);function se(c){const g=fr();Ft(g,new wu(g,c))}ni.Ma="timingevent";function Re(c,g){K.call(this,ni.Ma,c),this.size=g}J(Re,K);function ve(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function Nn(){this.g=!0}Nn.prototype.xa=function(){this.g=!1};function ko(c,g,_,w,L,j){c.info(function(){if(c.g)if(j)for(var nt="",kt=j.split("&"),Ie=0;Ie<kt.length;Ie++){var xt=kt[Ie].split("=");if(1<xt.length){var Pe=xt[0];xt=xt[1];var Ce=Pe.split("_");nt=2<=Ce.length&&Ce[1]=="type"?nt+(Pe+"="+xt+"&"):nt+(Pe+"=redacted&")}}else nt=null;else nt=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+g+`
`+_+`
`+nt})}function cf(c,g,_,w,L,j,nt){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+g+`
`+_+`
`+j+" "+nt})}function mr(c,g,_,w){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ps(c,_)+(w?" "+w:"")})}function Au(c,g){c.info(function(){return"TIMEOUT: "+g})}Nn.prototype.info=function(){};function ps(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var w=_[c];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var nt=1;nt<L.length;nt++)L[nt]=""}}}}return Kn(_)}catch{return g}}var gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function ri(){}J(ri,Oo),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},ii=new ri;function nn(c,g,_,w){this.j=c,this.i=g,this.l=_,this.R=w||1,this.U=new fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new de}function de(){this.i=null,this.g="",this.h=!1}var xo={},fa={};function Qn(c,g,_){c.L=1,c.v=Ts(pn(g)),c.m=_,c.P=!0,Vi(c,null)}function Vi(c,g){c.F=Date.now(),ys(c),c.A=pn(c.v);var _=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),jo(_.i,"t",w),c.C=0,_=c.j.J,c.h=new de,c.g=zu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new uf(C(c.Y,c,c.g),c.O)),g=c.U,_=c.g,w=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(ds[0]=L.toString()),L=ds);for(var j=0;j<L.length;j++){var nt=vu(_,L[j],w||g.handleEvent,!1,g.h||g);if(!nt)break;g.g[nt.key]=nt}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),dr(),ko(c.i,c.u,c.A,c.l,c.R,c.m)}nn.prototype.ca=function(c){c=c.target;const g=this.M;g&&kn(c)==3?g.j():this.Y(c)},nn.prototype.Y=function(c){try{if(c==this.g)t:{const Ce=kn(this.g);var g=this.g.Ba();const qi=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||Nu(this.g)))){this.J||Ce!=4||g==7||(g==8||0>=qi?dr(3):dr(2)),pr(this);var _=this.g.Z();this.X=_;e:if(Su(this)){var w=Nu(this.g);c="";var L=w.length,j=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Be(this),si(this);var nt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<L;g++)this.h.h=!0,c+=this.h.i.decode(w[g],{stream:!(j&&g==L-1)});w.length=0,this.h.g+=c,this.C=0,nt=this.h.g}else nt=this.g.oa();if(this.o=_==200,cf(this.i,this.u,this.A,this.l,this.R,Ce,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Ie=this.g;if((kt=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gt(kt)){var xt=kt;break e}}xt=null}if(_=xt)mr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,_);else{this.o=!1,this.s=3,se(12),Be(this),si(this);break t}}if(this.P){_=!0;let qe;for(;!this.J&&this.C<nt.length;)if(qe=bu(this,nt),qe==fa){Ce==4&&(this.s=4,se(14),_=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==xo){this.s=4,se(15),mr(this.i,this.l,nt,"[Invalid Chunk]"),_=!1;break}else mr(this.i,this.l,qe,null),_s(this,qe);if(Su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||nt.length!=0||this.h.h||(this.s=1,se(16),_=!1),this.o=this.o&&_,!_)mr(this.i,this.l,nt,"[Invalid Chunked Response]"),Be(this),si(this);else if(0<nt.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+nt.length),Ds(Pe),Pe.M=!0,se(11))}}else mr(this.i,this.l,nt,null),_s(this,nt);Ce==4&&Be(this),this.o&&!this.J&&(Ce==4?xu(this.j,this):(this.o=!1,ys(this)))}else gf(this.g),_==400&&0<nt.indexOf("Unknown SID")?(this.s=3,se(12)):(this.s=0,se(13)),Be(this),si(this)}}}catch{}finally{}};function Su(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function bu(c,g){var _=c.C,w=g.indexOf(`
`,_);return w==-1?fa:(_=Number(g.substring(_,w)),isNaN(_)?xo:(w+=1,w+_>g.length?fa:(g=g.slice(w,w+_),c.C=w+_,g)))}nn.prototype.cancel=function(){this.J=!0,Be(this)};function ys(c){c.S=Date.now()+c.I,Ru(c,c.I)}function Ru(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ve(C(c.ba,c),g)}function pr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}nn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Au(this.i,this.A),this.L!=2&&(dr(),se(17)),Be(this),this.s=2,si(this)):Ru(this,this.S-c)};function si(c){c.j.G==0||c.J||xu(c.j,c)}function Be(c){pr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ms(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function _s(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||Lo(_.h,c))){if(!c.K&&Lo(_.h,c)&&_.G==3){try{var w=_.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Sa(_),wa(_);else break t;Ko(_),se(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=ve(C(_.Za,_),6e3));if(1>=ma(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Bi(_,11)}else if((c.K||_.g==c)&&Sa(_),!gt(g))for(L=_.Da.g.parse(g),g=0;g<L.length;g++){let xt=L[g];if(_.T=xt[0],xt=xt[1],_.G==2)if(xt[0]=="c"){_.K=xt[1],_.ia=xt[2];const Pe=xt[3];Pe!=null&&(_.la=Pe,_.j.info("VER="+_.la));const Ce=xt[4];Ce!=null&&(_.Aa=Ce,_.j.info("SVER="+_.Aa));const qi=xt[5];qi!=null&&typeof qi=="number"&&0<qi&&(w=1.5*qi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const qe=c.g;if(qe){const fi=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var j=w.h;j.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ga(j,j.h),j.h=null))}if(w.D){const Xo=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(w.ya=Xo,Qt(w.I,w.D,Xo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var nt=c;if(w.qa=Uu(w,w.J?w.ia:null,w.W),nt.K){rn(w.h,nt);var kt=nt,Ie=w.L;Ie&&(kt.I=Ie),kt.B&&(pr(kt),ys(kt)),w.g=nt}else Pu(w);0<_.i.length&&Aa(_)}else xt[0]!="stop"&&xt[0]!="close"||Bi(_,7);else _.G==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?Bi(_,7):Go(_):xt[0]!="noop"&&_.l&&_.l.ta(xt),_.v=0)}}dr(4)}catch{}}var Iu=class{constructor(c,g){this.g=c,this.map=g}};function Pi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function da(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ma(c){return c.h?1:c.g?c.g.size:0}function Lo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ga(c,g){c.g?c.g.add(g):c.h=g}function rn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Pi.prototype.cancel=function(){if(this.i=Uo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Uo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return st(c.i)}function hf(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(y(c)){for(var g=[],_=c.length,w=0;w<_;w++)g.push(c[w]);return g}g=[],_=0;for(w in c)g[_++]=c[w];return g}function pa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(y(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const w in c)g[_++]=w;return g}}}function zo(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(y(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=pa(c),w=hf(c),L=w.length,j=0;j<L;j++)g.call(void 0,w[j],_&&_[j],c)}var vs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var w=c[_].indexOf("="),L=null;if(0<=w){var j=c[_].substring(0,w);L=c[_].substring(w+1)}else j=c[_];g(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ee(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ee){this.h=c.h,Es(this,c.j),this.o=c.o,this.g=c.g,yr(this,c.s),this.l=c.l;var g=c.i,_=new xi;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),ki(this,_),this.m=c.m}else c&&(g=String(c).match(vs))?(this.h=!1,Es(this,g[1]||"",!0),this.o=Mn(g[2]||""),this.g=Mn(g[3]||"",!0),yr(this,g[4]),this.l=Mn(g[5]||"",!0),ki(this,g[6]||"",!0),this.m=Mn(g[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}Ee.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ws(g,Bo,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ws(g,Bo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ws(_,_.charAt(0)=="/"?df:qo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ws(_,ya)),c.join("")};function pn(c){return new Ee(c)}function Es(c,g,_){c.j=_?Mn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function yr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function ki(c,g,_){g instanceof xi?(c.i=g,Du(c.i,c.h)):(_||(g=ws(g,mf)),c.i=new xi(g,c.h))}function Qt(c,g,_){c.i.set(g,_)}function Ts(c){return Qt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ws(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Cu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Cu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Bo=/[#\/\?@]/g,qo=/[#\?:]/g,df=/[#\?]/g,mf=/[#\?@]/g,ya=/#/g;function xi(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Vn(c){c.g||(c.g=new Map,c.h=0,c.i&&ff(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}i=xi.prototype,i.add=function(c,g){Vn(this),this.i=null,c=ai(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Li(c,g){Vn(c),g=ai(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ui(c,g){return Vn(c),g=ai(c,g),c.g.has(g)}i.forEach=function(c,g){Vn(this),this.g.forEach(function(_,w){_.forEach(function(L){c.call(g,L,w,this)},this)},this)},i.na=function(){Vn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let w=0;w<g.length;w++){const L=c[w];for(let j=0;j<L.length;j++)_.push(g[w])}return _},i.V=function(c){Vn(this);let g=[];if(typeof c=="string")Ui(this,c)&&(g=g.concat(this.g.get(ai(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},i.set=function(c,g){return Vn(this),this.i=null,c=ai(this,c),Ui(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},i.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function jo(c,g,_){Li(c,g),0<_.length&&(c.i=null,c.g.set(ai(c,g),st(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var w=g[_];const j=encodeURIComponent(String(w)),nt=this.V(w);for(w=0;w<nt.length;w++){var L=j;nt[w]!==""&&(L+="="+encodeURIComponent(String(nt[w]))),c.push(L)}}return this.i=c.join("&")};function ai(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Du(c,g){g&&!c.j&&(Vn(c),c.i=null,c.g.forEach(function(_,w){var L=w.toLowerCase();w!=L&&(Li(this,w),jo(this,L,_))},c)),c.j=g}function As(c,g){const _=new Nn;if(m.Image){const w=new Image;w.onload=H(Pn,_,"TestLoadImage: loaded",!0,g,w),w.onerror=H(Pn,_,"TestLoadImage: error",!1,g,w),w.onabort=H(Pn,_,"TestLoadImage: abort",!1,g,w),w.ontimeout=H(Pn,_,"TestLoadImage: timeout",!1,g,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else g(!1)}function Xn(c,g){const _=new Nn,w=new AbortController,L=setTimeout(()=>{w.abort(),Pn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?Pn(_,"TestPingServer: ok",!0,g):Pn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Pn(_,"TestPingServer: error",!1,g)})}function Pn(c,g,_,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(_)}catch{}}function Ss(){this.g=new gs}function oi(c,g,_){const w=_||"";try{zo(c,function(L,j){let nt=L;p(L)&&(nt=Kn(L)),g.push(w+j+"="+encodeURIComponent(nt))})}catch(L){throw g.push(w+"type="+encodeURIComponent("_badmap")),L}}function _r(c){this.l=c.Ub||null,this.j=c.eb||!1}J(_r,Oo),_r.prototype.g=function(){return new zi(this.l,this.j)},_r.prototype.i=(function(c){return function(){return c}})({});function zi(c,g){ce.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}J(zi,ce),i=zi.prototype,i.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ui(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ho(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ho(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?li(this):ui(this),this.readyState==3&&Ho(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,li(this))},i.Qa=function(c){this.g&&(this.response=c,li(this))},i.ga=function(){this.g&&li(this)};function li(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ui(c)}i.setRequestHeader=function(c,g){this.u.append(c,g)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Fo(c){let g="";return zt(c,function(_,w){g+=w,g+=":",g+=_,g+=`\r
`}),g}function Ve(c,g,_){t:{for(w in _){var w=!1;break t}w=!0}w||(_=Fo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qt(c,g,_))}function jt(c){ce.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}J(jt,ce);var _a=/^https?$/i,bs=["POST","PUT"];i=jt.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,g,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?No(this.o):No(ii),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){Ou(this,j);return}if(c=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)_.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())_.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(bs,g,void 0))||w||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,nt]of _)this.g.setRequestHeader(j,nt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){Ou(this,j)}};function Ou(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,va(c),ci(c)}function va(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),ci(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),jt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},i.bb=function(){Ea(this)};function Ea(c){if(c.h&&typeof f<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)Qe(c.Ea,0,c);else if(Ft(c,"readystatechange"),kn(c)==4){c.h=!1;try{const nt=c.Z();t:switch(nt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var w;if(w=nt===0){var L=String(c.D).match(vs)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!_a.test(L?L.toLowerCase():"")}_=w}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var j=2<kn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",va(c)}}finally{ci(c)}}}}function ci(c,g){if(c.g){Rs(c);const _=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ft(c,"ready");try{_.onreadystatechange=w}catch{}}}function Rs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ca(g)}};function Nu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function gf(c){const g={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(gt(c[w]))continue;var _=M(c[w]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=g[L]||[];g[L]=j,j.push(_)}V(g,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function Ta(c){this.Aa=0,this.i=[],this.j=new Nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,c),this.cb=Is("retryDelaySeedMs",1e4,c),this.Wa=Is("forwardChannelMaxRetries",2,c),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(c&&c.concurrentRequestLimit),this.Da=new Ss,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ta.prototype,i.la=8,i.G=1,i.connect=function(c,g,_,w){se(0),this.W=c,this.H=g||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Uu(this,null,this.W),Aa(this)};function Go(c){if(Mu(c),c.G==3){var g=c.U++,_=pn(c.I);if(Qt(_,"SID",c.K),Qt(_,"RID",g),Qt(_,"TYPE","terminate"),Cs(c,_),g=new nn(c,c.j,g),g.L=2,g.v=Ts(pn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=zu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ys(g)}Lu(c)}function wa(c){c.g&&(Ds(c),c.g.cancel(),c.g=null)}function Mu(c){wa(c),c.u&&(m.clearTimeout(c.u),c.u=null),Sa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Aa(c){if(!da(c.h)&&!c.s){c.s=!0;var g=c.Ga;rt||D(),ct||(rt(),ct=!0),Pt.add(g,c),c.B=0}}function pf(c,g){return ma(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ve(C(c.Ga,c,g),Qo(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new nn(this,this.j,c);let j=this.o;if(this.S&&(j?(j=A(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=Vu(this,L,g),_=pn(this.I),Qt(_,"RID",c),Qt(_,"CVER",22),this.D&&Qt(_,"X-HTTP-Session-Id",this.D),Cs(this,_),j&&(this.O?g="headers="+encodeURIComponent(String(Fo(j)))+"&"+g:this.m&&Ve(_,this.m,j)),ga(this.h,L),this.Ua&&Qt(_,"TYPE","init"),this.P?(Qt(_,"$req",g),Qt(_,"SID","null"),L.T=!0,Qn(L,_,null)):Qn(L,_,g),this.G=2}}else this.G==3&&(c?Yo(this,c):this.i.length==0||da(this.h)||Yo(this))};function Yo(c,g){var _;g?_=g.l:_=c.U++;const w=pn(c.I);Qt(w,"SID",c.K),Qt(w,"RID",_),Qt(w,"AID",c.T),Cs(c,w),c.m&&c.o&&Ve(w,c.m,c.o),_=new nn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Vu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ga(c.h,_),Qn(_,w,g)}function Cs(c,g){c.H&&zt(c.H,function(_,w){Qt(g,w,_)}),c.l&&zo({},function(_,w){Qt(g,w,_)})}function Vu(c,g,_){_=Math.min(c.i.length,_);var w=c.l?C(c.l.Na,c.l,c):null;t:{var L=c.i;let j=-1;for(;;){const nt=["count="+_];j==-1?0<_?(j=L[0].g,nt.push("ofs="+j)):j=0:nt.push("ofs="+j);let kt=!0;for(let Ie=0;Ie<_;Ie++){let xt=L[Ie].g;const Pe=L[Ie].map;if(xt-=j,0>xt)j=Math.max(0,L[Ie].g-100),kt=!1;else try{oi(Pe,nt,"req"+xt+"_")}catch{w&&w(Pe)}}if(kt){w=nt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,w}function Pu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;rt||D(),ct||(rt(),ct=!0),Pt.add(g,c),c.v=0}}function Ko(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ve(C(c.Fa,c),Qo(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ve(C(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,se(10),wa(this),ku(this))};function Ds(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function ku(c){c.g=new nn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=pn(c.qa);Qt(g,"RID","rpc"),Qt(g,"SID",c.K),Qt(g,"AID",c.T),Qt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qt(g,"TO",c.ja),Qt(g,"TYPE","xmlhttp"),Cs(c,g),c.m&&c.o&&Ve(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ts(pn(g)),_.m=null,_.P=!0,Vi(_,c)}i.Za=function(){this.C!=null&&(this.C=null,wa(this),Ko(this),se(19))};function Sa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function xu(c,g){var _=null;if(c.g==g){Sa(c),Ds(c),c.g=null;var w=2}else if(Lo(c.h,g))_=g.D,rn(c.h,g),w=1;else return;if(c.G!=0){if(g.o)if(w==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var L=c.B;w=fr(),Ft(w,new Re(w,_)),Aa(c)}else Pu(c);else if(L=g.s,L==3||L==0&&0<g.X||!(w==1&&pf(c,g)||w==2&&Ko(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),L){case 1:Bi(c,5);break;case 4:Bi(c,10);break;case 3:Bi(c,6);break;default:Bi(c,2)}}}function Qo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Bi(c,g){if(c.j.info("Error code "+g),g==2){var _=C(c.fb,c),w=c.Xa;const L=!w;w=new Ee(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Es(w,"https"),Ts(w),L?As(w.toString(),_):Xn(w.toString(),_)}else se(2);c.G=0,c.l&&c.l.sa(g),Lu(c),Mu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function Lu(c){if(c.G=0,c.ka=[],c.l){const g=Uo(c.h);(g.length!=0||c.i.length!=0)&&(et(c.ka,g),et(c.ka,c.i),c.h.i.length=0,st(c.i),c.i.length=0),c.l.ra()}}function Uu(c,g,_){var w=_ instanceof Ee?pn(_):new Ee(_);if(w.g!="")g&&(w.g=g+"."+w.g),yr(w,w.s);else{var L=m.location;w=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;var j=new Ee(null);w&&Es(j,w),g&&(j.g=g),L&&yr(j,L),_&&(j.l=_),w=j}return _=c.D,g=c.ya,_&&g&&Qt(w,_,g),Qt(w,"VER",c.la),Cs(c,w),w}function zu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new jt(new _r({eb:_})):new jt(c.pa),g.Ha(c.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}i=Bu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ba(){}ba.prototype.g=function(c,g){return new sn(c,g)};function sn(c,g){ce.call(this),this.g=new Ta(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!gt(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!gt(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new hi(this)}J(sn,ce),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Go(this.g)},sn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Kn(c),c=_);g.i.push(new Iu(g.Ya++,c)),g.G==3&&Aa(g)},sn.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,sn.aa.N.call(this)};function qu(c){Ni.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}J(qu,Ni);function ju(){Vo.call(this),this.status=1}J(ju,Vo);function hi(c){this.g=c}J(hi,Bu),hi.prototype.ua=function(){Ft(this.g,"a")},hi.prototype.ta=function(c){Ft(this.g,new qu(c))},hi.prototype.sa=function(c){Ft(this.g,new ju)},hi.prototype.ra=function(){Ft(this.g,"b")},ba.prototype.createWebChannel=ba.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,N0=function(){return new ba},O0=function(){return fr()},D0=ni,jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,nh=gr,Mi.COMPLETE="complete",C0=Mi,Mo.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",ce.prototype.listen=ce.prototype.K,zl=Mo,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,I0=jt}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});const lE="@firebase/firestore",uE="4.9.1";/**
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
 */class Ze{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Ao="12.2.0";/**
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
 */const Js=new Ph("@firebase/firestore");function no(){return Js.logLevel}function at(i,...t){if(Js.logLevel<=Nt.DEBUG){const n=t.map(Eg);Js.debug(`Firestore (${Ao}): ${i}`,...n)}}function ur(i,...t){if(Js.logLevel<=Nt.ERROR){const n=t.map(Eg);Js.error(`Firestore (${Ao}): ${i}`,...n)}}function fo(i,...t){if(Js.logLevel<=Nt.WARN){const n=t.map(Eg);Js.warn(`Firestore (${Ao}): ${i}`,...n)}}function Eg(i){if(typeof i=="string")return i;try{/**
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
*/return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
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
 */function _t(i,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,M0(i,s,n)}function M0(i,t,n){let s=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ur(s),new Error(s)}function Ht(i,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||M0(t,o,s)}function At(i,t){return i}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends ei{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ar{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class V0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Ze.UNAUTHENTICATED)))}shutdown(){}}class yC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _C{constructor(t){this.t=t,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ar,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ar)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new V0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Ze(t)}}class vC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class EC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new vC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,at("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cE(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wC(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Tg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=wC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Mt(i,t){return i<t?-1:i>t?1:0}function Hm(i,t){const n=Math.min(i.length,t.length);for(let s=0;s<n;s++){const o=i.charAt(s),u=t.charAt(s);if(o!==u)return Tm(o)===Tm(u)?Mt(o,u):Tm(o)?1:-1}return Mt(i.length,t.length)}const AC=55296,SC=57343;function Tm(i){const t=i.charCodeAt(0);return t>=AC&&t<=SC}function mo(i,t,n){return i.length===t.length&&i.every(((s,o)=>n(s,t[o])))}/**
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
 */const hE="__name__";class _i{constructor(t,n,s){n===void 0?n=0:n>t.length&&_t(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&_t(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return _i.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=_i.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Mt(t.length,n.length)}static compareSegments(t,n){const s=_i.isNumericId(t),o=_i.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?_i.extractNumericId(t).compare(_i.extractNumericId(n)):Hm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Qr.fromString(t.substring(4,t.length-2))}}class ne extends _i{construct(t,n,s){return new ne(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new lt(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new ne(n)}static emptyPath(){return new ne([])}}const bC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends _i{construct(t,n,s){return new Ye(t,n,s)}static isValidIdentifier(t){return bC.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hE}static keyField(){return new Ye([hE])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new lt(W.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new lt(W.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new lt(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new lt(W.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class ft{constructor(t){this.path=t}static fromPath(t){return new ft(ne.fromString(t))}static fromName(t){return new ft(ne.fromString(t).popFirst(5))}static empty(){return new ft(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ne.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ft(new ne(t.slice()))}}/**
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
 */function P0(i,t,n){if(!n)throw new lt(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function RC(i,t,n,s){if(t===!0&&s===!0)throw new lt(W.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function fE(i){if(!ft.isDocumentKey(i))throw new lt(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function dE(i){if(ft.isDocumentKey(i))throw new lt(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function k0(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function wg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":_t(12329,{type:typeof i})}function Gn(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new lt(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wg(i);throw new lt(W.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Se(i,t){const n={typeString:i};return t&&(n.value=t),n}function fu(i,t){if(!k0(i))throw new lt(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new lt(W.INVALID_ARGUMENT,n);return!0}/**
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
 */const mE=-62135596800,gE=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(t){return ie.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*gE);return new ie(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new lt(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new lt(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<mE)throw new lt(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new lt(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gE}_compareTo(t){return this.seconds===t.seconds?Mt(this.nanoseconds,t.nanoseconds):Mt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(fu(t,ie._jsonSchema))return new ie(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-mE;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:Se("string",ie._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
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
 */class wt{static fromTimestamp(t){return new wt(t)}static min(){return new wt(new ie(0,0))}static max(){return new wt(new ie(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jl=-1;function IC(i,t){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=wt.fromTimestamp(s===1e9?new ie(n+1,0):new ie(n,s));return new Wr(o,ft.empty(),t)}function CC(i){return new Wr(i.readTime,i.key,Jl)}class Wr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Wr(wt.min(),ft.empty(),Jl)}static max(){return new Wr(wt.max(),ft.empty(),Jl)}}function DC(i,t){let n=i.readTime.compareTo(t.readTime);return n!==0?n:(n=ft.comparator(i.documentKey,t.documentKey),n!==0?n:Mt(i.largestBatchId,t.largestBatchId))}/**
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
 */const OC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function So(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==OC)throw i;at("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_t(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new X(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):X.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):X.reject(n)}static resolve(t){return new X(((n,s)=>{n(t)}))}static reject(t){return new X(((n,s)=>{s(t)}))}static waitFor(t){return new X(((n,s)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(t){let n=X.resolve(!1);for(const s of t)n=n.next((o=>o?X.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new X(((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((T=>{f[p]=T,++m,m===u&&s(f)}),(T=>o(T)))}}))}static doWhile(t,n){return new X(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function MC(i){const t=i.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class zh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}zh.ce=-1;/**
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
 */const Ag=-1;function Bh(i){return i==null}function ph(i){return i===0&&1/i==-1/0}function VC(i){return typeof i=="number"&&Number.isInteger(i)&&!ph(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const x0="";function PC(i){let t="";for(let n=0;n<i.length;n++)t.length>0&&(t=pE(t)),t=kC(i.get(n),t);return pE(t)}function kC(i,t){let n=t;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case x0:n+="";break;default:n+=u}}return n}function pE(i){return i+x0+""}/**
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
 */function yE(i){let t=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&t++;return t}function as(i,t){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&t(n,i[n])}function L0(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class ue{constructor(t,n){this.comparator=t,this.root=n||Ge.EMPTY}insert(t,n){return new ue(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gc(this.root,t,this.comparator,!0)}}class Gc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Ge.RED,this.left=o??Ge.EMPTY,this.right=u??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Ge(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Ge.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _t(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _t(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw _t(27949);return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw _t(57766)}get value(){throw _t(16141)}get color(){throw _t(16727)}get left(){throw _t(29726)}get right(){throw _t(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Ge(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(t){this.comparator=t,this.data=new ue(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _E(this.data.getIterator())}getIteratorFrom(t){return new _E(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Me(this.comparator);return n.data=t,n}}class _E{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(t){this.fields=t,t.sort(Ye.comparator)}static empty(){return new bn([])}unionWith(t){let n=new Me(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new bn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return mo(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class U0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new U0("Invalid base64 string: "+u):u}})(t);return new Ke(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Ke(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Mt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const xC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(i){if(Ht(!!i,39018),typeof i=="string"){let t=0;const n=xC.exec(i);if(Ht(!!n,46558,{timestamp:i}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(i.seconds),nanos:pe(i.nanos)}}function pe(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Jr(i){return typeof i=="string"?Ke.fromBase64String(i):Ke.fromUint8Array(i)}/**
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
 */const z0="server_timestamp",B0="__type__",q0="__previous_value__",j0="__local_write_time__";function Sg(i){return(i?.mapValue?.fields||{})[B0]?.stringValue===z0}function qh(i){const t=i.mapValue.fields[q0];return Sg(t)?qh(t):t}function tu(i){const t=Zr(i.mapValue.fields[j0].timestampValue);return new ie(t.seconds,t.nanos)}/**
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
 */class LC{constructor(t,n,s,o,u,f,m,y,p,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=T}}const yh="(default)";class eu{constructor(t,n){this.projectId=t,this.database=n||yh}static empty(){return new eu("","")}get isDefaultDatabase(){return this.database===yh}isEqual(t){return t instanceof eu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const H0="__type__",UC="__max__",Yc={mapValue:{}},F0="__vector__",_h="value";function ts(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Sg(i)?4:BC(i)?9007199254740991:zC(i)?10:11:_t(28295,{value:i})}function Ci(i,t){if(i===t)return!0;const n=ts(i);if(n!==ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return tu(i).isEqual(tu(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Zr(o.timestampValue),m=Zr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(i,t);case 5:return i.stringValue===t.stringValue;case 6:return(function(o,u){return Jr(o.bytesValue).isEqual(Jr(u.bytesValue))})(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return(function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)})(i,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pe(o.doubleValue),m=pe(u.doubleValue);return f===m?ph(f)===ph(m):isNaN(f)&&isNaN(m)}return!1})(i,t);case 9:return mo(i.arrayValue.values||[],t.arrayValue.values||[],Ci);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(yE(f)!==yE(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!Ci(f[y],m[y])))return!1;return!0})(i,t);default:return _t(52216,{left:i})}}function nu(i,t){return(i.values||[]).find((n=>Ci(n,t)))!==void 0}function go(i,t){if(i===t)return 0;const n=ts(i),s=ts(t);if(n!==s)return Mt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Mt(i.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=pe(u.integerValue||u.doubleValue),y=pe(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,t);case 3:return vE(i.timestampValue,t.timestampValue);case 4:return vE(tu(i),tu(t));case 5:return Hm(i.stringValue,t.stringValue);case 6:return(function(u,f){const m=Jr(u),y=Jr(f);return m.compareTo(y)})(i.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),y=f.split("/");for(let p=0;p<m.length&&p<y.length;p++){const T=Mt(m[p],y[p]);if(T!==0)return T}return Mt(m.length,y.length)})(i.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=Mt(pe(u.latitude),pe(f.latitude));return m!==0?m:Mt(pe(u.longitude),pe(f.longitude))})(i.geoPointValue,t.geoPointValue);case 9:return EE(i.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},y=f.fields||{},p=m[_h]?.arrayValue,T=y[_h]?.arrayValue,S=Mt(p?.values?.length||0,T?.values?.length||0);return S!==0?S:EE(p,T)})(i.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Yc.mapValue&&f===Yc.mapValue)return 0;if(u===Yc.mapValue)return 1;if(f===Yc.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),p=f.fields||{},T=Object.keys(p);y.sort(),T.sort();for(let S=0;S<y.length&&S<T.length;++S){const C=Hm(y[S],T[S]);if(C!==0)return C;const H=go(m[y[S]],p[T[S]]);if(H!==0)return H}return Mt(y.length,T.length)})(i.mapValue,t.mapValue);default:throw _t(23264,{he:n})}}function vE(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return Mt(i,t);const n=Zr(i),s=Zr(t),o=Mt(n.seconds,s.seconds);return o!==0?o:Mt(n.nanos,s.nanos)}function EE(i,t){const n=i.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=go(n[o],s[o]);if(u)return u}return Mt(n.length,s.length)}function po(i){return Fm(i)}function Fm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(n){const s=Zr(n);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(n){return Jr(n).toBase64()})(i.bytesValue):"referenceValue"in i?(function(n){return ft.fromName(n).toString()})(i.referenceValue):"geoPointValue"in i?(function(n){return`geo(${n.latitude},${n.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Fm(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Fm(n.fields[f])}`;return o+"}"})(i.mapValue):_t(61005,{value:i})}function ih(i){switch(ts(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=qh(i);return t?16+ih(t):16;case 5:return 2*i.stringValue.length;case 6:return Jr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ih(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return as(s.fields,((u,f)=>{o+=u.length+ih(f)})),o})(i.mapValue);default:throw _t(13486,{value:i})}}function Gm(i){return!!i&&"integerValue"in i}function bg(i){return!!i&&"arrayValue"in i}function TE(i){return!!i&&"nullValue"in i}function wE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function rh(i){return!!i&&"mapValue"in i}function zC(i){return(i?.mapValue?.fields||{})[H0]?.stringValue===F0}function Gl(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return as(i.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Gl(s))),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Gl(i.arrayValue.values[n]);return t}return{...i}}function BC(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===UC}/**
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
 */class fn{constructor(t){this.value=t}static empty(){return new fn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!rh(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gl(n)}setAll(t){let n=Ye.emptyPath(),s={},o=[];t.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Gl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());rh(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ci(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];rh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){as(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new fn(Gl(this.value))}}function G0(i){const t=[];return as(i.fields,((n,s)=>{const o=new Ye([n]);if(rh(s)){const u=G0(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new bn(t)}/**
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
 */class Je{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Je(t,0,wt.min(),wt.min(),wt.min(),fn.empty(),0)}static newFoundDocument(t,n,s,o){return new Je(t,1,n,wt.min(),s,o,0)}static newNoDocument(t,n){return new Je(t,2,n,wt.min(),wt.min(),fn.empty(),0)}static newUnknownDocument(t,n){return new Je(t,3,n,wt.min(),wt.min(),fn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(wt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Je&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vh{constructor(t,n){this.position=t,this.inclusive=n}}function AE(i,t,n){let s=0;for(let o=0;o<i.position.length;o++){const u=t[o],f=i.position[o];if(u.field.isKeyField()?s=ft.comparator(ft.fromName(f.referenceValue),n.key):s=go(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function SE(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Ci(i.position[n],t.position[n]))return!1;return!0}/**
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
 */class Eh{constructor(t,n="asc"){this.field=t,this.dir=n}}function qC(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class Y0{}class Ne extends Y0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new HC(t,n,s):n==="array-contains"?new YC(t,s):n==="in"?new KC(t,s):n==="not-in"?new QC(t,s):n==="array-contains-any"?new XC(t,s):new Ne(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new FC(t,s):new GC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(go(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(go(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Di extends Y0{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Di(t,n)}matches(t){return K0(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function K0(i){return i.op==="and"}function Q0(i){return jC(i)&&K0(i)}function jC(i){for(const t of i.filters)if(t instanceof Di)return!1;return!0}function Ym(i){if(i instanceof Ne)return i.field.canonicalString()+i.op.toString()+po(i.value);if(Q0(i))return i.filters.map((t=>Ym(t))).join(",");{const t=i.filters.map((n=>Ym(n))).join(",");return`${i.op}(${t})`}}function X0(i,t){return i instanceof Ne?(function(s,o){return o instanceof Ne&&s.op===o.op&&s.field.isEqual(o.field)&&Ci(s.value,o.value)})(i,t):i instanceof Di?(function(s,o){return o instanceof Di&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&X0(f,o.filters[m])),!0):!1})(i,t):void _t(19439)}function $0(i){return i instanceof Ne?(function(n){return`${n.field.canonicalString()} ${n.op} ${po(n.value)}`})(i):i instanceof Di?(function(n){return n.op.toString()+" {"+n.getFilters().map($0).join(" ,")+"}"})(i):"Filter"}class HC extends Ne{constructor(t,n,s){super(t,n,s),this.key=ft.fromName(s.referenceValue)}matches(t){const n=ft.comparator(t.key,this.key);return this.matchesComparison(n)}}class FC extends Ne{constructor(t,n){super(t,"in",n),this.keys=W0("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class GC extends Ne{constructor(t,n){super(t,"not-in",n),this.keys=W0("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function W0(i,t){return(t.arrayValue?.values||[]).map((n=>ft.fromName(n.referenceValue)))}class YC extends Ne{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return bg(n)&&nu(n.arrayValue,this.value)}}class KC extends Ne{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&nu(this.value.arrayValue,n)}}class QC extends Ne{constructor(t,n){super(t,"not-in",n)}matches(t){if(nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!nu(this.value.arrayValue,n)}}class XC extends Ne{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>nu(this.value.arrayValue,s)))}}/**
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
 */class $C{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function bE(i,t=null,n=[],s=[],o=null,u=null,f=null){return new $C(i,t,n,s,o,u,f)}function Rg(i){const t=At(i);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>Ym(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Bh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>po(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>po(s))).join(",")),t.Te=n}return t.Te}function Ig(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!qC(i.orderBy[n],t.orderBy[n]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!X0(i.filters[n],t.filters[n]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!SE(i.startAt,t.startAt)&&SE(i.endAt,t.endAt)}function Km(i){return ft.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class jh{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function WC(i,t,n,s,o,u,f,m){return new jh(i,t,n,s,o,u,f,m)}function Hh(i){return new jh(i)}function RE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function ZC(i){return i.collectionGroup!==null}function Yl(i){const t=At(i);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Me(Ye.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(m=m.add(p.field))}))})),m})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new Eh(u,s))})),n.has(Ye.keyField().canonicalString())||t.Ie.push(new Eh(Ye.keyField(),s))}return t.Ie}function Ai(i){const t=At(i);return t.Ee||(t.Ee=JC(t,Yl(i))),t.Ee}function JC(i,t){if(i.limitType==="F")return bE(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Eh(o.field,u)}));const n=i.endAt?new vh(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new vh(i.startAt.position,i.startAt.inclusive):null;return bE(i.path,i.collectionGroup,t,i.filters,i.limit,n,s)}}function Qm(i,t,n){return new jh(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,n,i.startAt,i.endAt)}function Fh(i,t){return Ig(Ai(i),Ai(t))&&i.limitType===t.limitType}function Z0(i){return`${Rg(Ai(i))}|lt:${i.limitType}`}function io(i){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>$0(o))).join(", ")}]`),Bh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>po(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>po(o))).join(",")),`Target(${s})`})(Ai(i))}; limitType=${i.limitType})`}function Gh(i,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ft.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,t)&&(function(s,o){for(const u of Yl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,t)&&(function(s,o){return!(s.startAt&&!(function(f,m,y){const p=AE(f,m,y);return f.inclusive?p<=0:p<0})(s.startAt,Yl(s),o)||s.endAt&&!(function(f,m,y){const p=AE(f,m,y);return f.inclusive?p>=0:p>0})(s.endAt,Yl(s),o))})(i,t)}function tD(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function J0(i){return(t,n)=>{let s=!1;for(const o of Yl(i)){const u=eD(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function eD(i,t,n){const s=i.field.isKeyField()?ft.comparator(t.key,n.key):(function(u,f,m){const y=f.data.field(u),p=m.data.field(u);return y!==null&&p!==null?go(y,p):_t(42886)})(i.field,t,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _t(19790,{direction:i.dir})}}/**
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
 */class aa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){as(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return L0(this.inner)}size(){return this.innerSize}}/**
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
 */const nD=new ue(ft.comparator);function cr(){return nD}const tw=new ue(ft.comparator);function Bl(...i){let t=tw;for(const n of i)t=t.insert(n.key,n);return t}function ew(i){let t=tw;return i.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Ks(){return Kl()}function nw(){return Kl()}function Kl(){return new aa((i=>i.toString()),((i,t)=>i.isEqual(t)))}const iD=new ue(ft.comparator),rD=new Me(ft.comparator);function Vt(...i){let t=rD;for(const n of i)t=t.add(n);return t}const sD=new Me(Mt);function aD(){return sD}/**
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
 */function Cg(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ph(t)?"-0":t}}function iw(i){return{integerValue:""+i}}function oD(i,t){return VC(t)?iw(t):Cg(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Yh{constructor(){this._=void 0}}function lD(i,t,n){return i instanceof Th?(function(o,u){const f={fields:{[B0]:{stringValue:z0},[j0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Sg(u)&&(u=qh(u)),u&&(f.fields[q0]=u),{mapValue:f}})(n,t):i instanceof iu?sw(i,t):i instanceof ru?aw(i,t):(function(o,u){const f=rw(o,u),m=IE(f)+IE(o.Ae);return Gm(f)&&Gm(o.Ae)?iw(m):Cg(o.serializer,m)})(i,t)}function uD(i,t,n){return i instanceof iu?sw(i,t):i instanceof ru?aw(i,t):n}function rw(i,t){return i instanceof wh?(function(s){return Gm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class Th extends Yh{}class iu extends Yh{constructor(t){super(),this.elements=t}}function sw(i,t){const n=ow(t);for(const s of i.elements)n.some((o=>Ci(o,s)))||n.push(s);return{arrayValue:{values:n}}}class ru extends Yh{constructor(t){super(),this.elements=t}}function aw(i,t){let n=ow(t);for(const s of i.elements)n=n.filter((o=>!Ci(o,s)));return{arrayValue:{values:n}}}class wh extends Yh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function IE(i){return pe(i.integerValue||i.doubleValue)}function ow(i){return bg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function cD(i,t){return i.field.isEqual(t.field)&&(function(s,o){return s instanceof iu&&o instanceof iu||s instanceof ru&&o instanceof ru?mo(s.elements,o.elements,Ci):s instanceof wh&&o instanceof wh?Ci(s.Ae,o.Ae):s instanceof Th&&o instanceof Th})(i.transform,t.transform)}class hD{constructor(t,n){this.version=t,this.transformResults=n}}class Si{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Si}static exists(t){return new Si(void 0,t)}static updateTime(t){return new Si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sh(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Kh{}function lw(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new cw(i.key,Si.none()):new du(i.key,i.data,Si.none());{const n=i.data,s=fn.empty();let o=new Me(Ye.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new os(i.key,s,new bn(o.toArray()),Si.none())}}function fD(i,t,n){i instanceof du?(function(o,u,f){const m=o.value.clone(),y=DE(o.fieldTransforms,u,f.transformResults);m.setAll(y),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(i,t,n):i instanceof os?(function(o,u,f){if(!sh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=DE(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(uw(o)),y.setAll(m),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(i,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function Ql(i,t,n,s){return i instanceof du?(function(u,f,m,y){if(!sh(u.precondition,f))return m;const p=u.value.clone(),T=OE(u.fieldTransforms,y,f);return p.setAll(T),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(i,t,n,s):i instanceof os?(function(u,f,m,y){if(!sh(u.precondition,f))return m;const p=OE(u.fieldTransforms,y,f),T=f.data;return T.setAll(uw(u)),T.setAll(p),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(i,t,n,s):(function(u,f,m){return sh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(i,t,n)}function dD(i,t){let n=null;for(const s of i.fieldTransforms){const o=t.data.field(s.field),u=rw(s.transform,o||null);u!=null&&(n===null&&(n=fn.empty()),n.set(s.field,u))}return n||null}function CE(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&mo(s,o,((u,f)=>cD(u,f)))})(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class du extends Kh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class os extends Kh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function uw(i){const t=new Map;return i.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=i.data.field(n);t.set(n,s)}})),t}function DE(i,t,n){const s=new Map;Ht(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let o=0;o<n.length;o++){const u=i[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,uD(f,m,n[o]))}return s}function OE(i,t,n){const s=new Map;for(const o of i){const u=o.transform,f=n.data.field(o.field);s.set(o.field,lD(u,f,t))}return s}class cw extends Kh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mD extends Kh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gD{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&fD(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ql(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ql(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=nw();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const y=lw(f,m);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(wt.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Vt())}isEqual(t){return this.batchId===t.batchId&&mo(this.mutations,t.mutations,((n,s)=>CE(n,s)))&&mo(this.baseMutations,t.baseMutations,((n,s)=>CE(n,s)))}}class Dg{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=(function(){return iD})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Dg(t,n,s,o)}}/**
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
 */class pD{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class yD{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ae,Ut;function _D(i){switch(i){case W.OK:return _t(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _t(15467,{code:i})}}function hw(i){if(i===void 0)return ur("GRPC error has no .code"),W.UNKNOWN;switch(i){case Ae.OK:return W.OK;case Ae.CANCELLED:return W.CANCELLED;case Ae.UNKNOWN:return W.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return W.INTERNAL;case Ae.UNAVAILABLE:return W.UNAVAILABLE;case Ae.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ae.NOT_FOUND:return W.NOT_FOUND;case Ae.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ae.ABORTED:return W.ABORTED;case Ae.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ae.DATA_LOSS:return W.DATA_LOSS;default:return _t(39323,{code:i})}}(Ut=Ae||(Ae={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function vD(){return new TextEncoder}/**
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
 */const ED=new Qr([4294967295,4294967295],0);function NE(i){const t=vD().encode(i),n=new R0;return n.update(t),new Uint8Array(n.digest())}function ME(i){const t=new DataView(i.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Qr([n,s],0),new Qr([o,u],0)]}class Og{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ql(`Invalid padding: ${n}`);if(s<0)throw new ql(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new ql(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new ql(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Qr.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(Qr.fromNumber(s)));return o.compare(ED)===1&&(o=new Qr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=NE(t),[s,o]=ME(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Og(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const n=NE(t),[s,o]=ME(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,mu.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Qh(wt.min(),o,new ue(Mt),cr(),Vt())}}class mu{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new mu(s,n,Vt(),Vt(),Vt())}}/**
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
 */class ah{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class fw{constructor(t,n){this.targetId=t,this.Ce=n}}class dw{constructor(t,n,s=Ke.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class VE{constructor(){this.ve=0,this.Fe=PE(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Vt(),n=Vt(),s=Vt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:_t(38017,{changeType:u})}})),new mu(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=PE()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ht(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class TD{constructor(t){this.Ge=t,this.ze=new Map,this.je=cr(),this.Je=Kc(),this.He=Kc(),this.Ye=new ue(Mt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:_t(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Km(u))if(s===0){const f=new ft(u.path);this.et(n,f,Je.newNoDocument(f,wt.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(t),y=m?this.ct(m,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Jr(s).toUint8Array()}catch(y){if(y instanceof U0)return fo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Og(f,o,u)}catch(y){return fo(y instanceof ql?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Km(m.target)){const y=new ft(m.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,Je.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Vt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Qh(t,n,this.Ye,this.je,s);return this.je=cr(),this.Je=Kc(),this.He=Kc(),this.Ye=new ue(Mt),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new VE,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Me(Mt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Me(Mt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||at("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new VE),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Kc(){return new ue(ft.comparator)}function PE(){return new ue(ft.comparator)}const wD={asc:"ASCENDING",desc:"DESCENDING"},AD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SD={and:"AND",or:"OR"};class bD{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Xm(i,t){return i.useProto3Json||Bh(t)?t:{value:t}}function Ah(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mw(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function RD(i,t){return Ah(i,t.toTimestamp())}function bi(i){return Ht(!!i,49232),wt.fromTimestamp((function(n){const s=Zr(n);return new ie(s.seconds,s.nanos)})(i))}function Ng(i,t){return $m(i,t).canonicalString()}function $m(i,t){const n=(function(o){return new ne(["projects",o.projectId,"databases",o.database])})(i).child("documents");return t===void 0?n:n.child(t)}function gw(i){const t=ne.fromString(i);return Ht(Ew(t),10190,{key:t.toString()}),t}function Wm(i,t){return Ng(i.databaseId,t.path)}function wm(i,t){const n=gw(t);if(n.get(1)!==i.databaseId.projectId)throw new lt(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new lt(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new ft(yw(n))}function pw(i,t){return Ng(i.databaseId,t)}function ID(i){const t=gw(i);return t.length===4?ne.emptyPath():yw(t)}function Zm(i){return new ne(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function yw(i){return Ht(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function kE(i,t,n){return{name:Wm(i,t),fields:n.value.mapValue.fields}}function CD(i,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:_t(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(p,T){return p.useProto3Json?(Ht(T===void 0||typeof T=="string",58123),Ke.fromBase64String(T||"")):(Ht(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ke.fromUint8Array(T||new Uint8Array))})(i,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(p){const T=p.code===void 0?W.UNKNOWN:hw(p.code);return new lt(T,p.message||"")})(f);n=new dw(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=wm(i,s.document.name),u=bi(s.document.updateTime),f=s.document.createTime?bi(s.document.createTime):wt.min(),m=new fn({mapValue:{fields:s.document.fields}}),y=Je.newFoundDocument(o,u,f,m),p=s.targetIds||[],T=s.removedTargetIds||[];n=new ah(p,T,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=wm(i,s.document),u=s.readTime?bi(s.readTime):wt.min(),f=Je.newNoDocument(o,u),m=s.removedTargetIds||[];n=new ah([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=wm(i,s.document),u=s.removedTargetIds||[];n=new ah([],u,o,null)}else{if(!("filter"in t))return _t(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new yD(o,u),m=s.targetId;n=new fw(m,f)}}return n}function DD(i,t){let n;if(t instanceof du)n={update:kE(i,t.key,t.value)};else if(t instanceof cw)n={delete:Wm(i,t.key)};else if(t instanceof os)n={update:kE(i,t.key,t.data),updateMask:UD(t.fieldMask)};else{if(!(t instanceof mD))return _t(16599,{Vt:t.type});n={verify:Wm(i,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Th)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof iu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ru)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof wh)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw _t(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:RD(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_t(27497)})(i,t.precondition)),n}function OD(i,t){return i&&i.length>0?(Ht(t!==void 0,14353),i.map((n=>(function(o,u){let f=o.updateTime?bi(o.updateTime):bi(u);return f.isEqual(wt.min())&&(f=bi(u)),new hD(f,o.transformResults||[])})(n,t)))):[]}function ND(i,t){return{documents:[pw(i,t.path)]}}function MD(i,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=pw(i,o);const u=(function(p){if(p.length!==0)return vw(Di.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((T=>(function(C){return{field:ro(C.field),direction:kD(C.dir)}})(T)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Xm(i,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:o}}function VD(i){let t=ID(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=(function(S){const C=_w(S);return C instanceof Di&&Q0(C)?C.getFilters():[C]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((C=>(function(J){return new Eh(so(J.field),(function(et){switch(et){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(C)))})(n.orderBy));let m=null;n.limit&&(m=(function(S){let C;return C=typeof S=="object"?S.value:S,Bh(C)?null:C})(n.limit));let y=null;n.startAt&&(y=(function(S){const C=!!S.before,H=S.values||[];return new vh(H,C)})(n.startAt));let p=null;return n.endAt&&(p=(function(S){const C=!S.before,H=S.values||[];return new vh(H,C)})(n.endAt)),WC(t,o,f,u,m,"F",y,p)}function PD(i,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _t(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function _w(i){return i.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=so(n.unaryFilter.field);return Ne.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=so(n.unaryFilter.field);return Ne.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(n.unaryFilter.field);return Ne.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=so(n.unaryFilter.field);return Ne.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _t(61313);default:return _t(60726)}})(i):i.fieldFilter!==void 0?(function(n){return Ne.create(so(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _t(58110);default:return _t(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(n){return Di.create(n.compositeFilter.filters.map((s=>_w(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _t(1026)}})(n.compositeFilter.op))})(i):_t(30097,{filter:i})}function kD(i){return wD[i]}function xD(i){return AD[i]}function LD(i){return SD[i]}function ro(i){return{fieldPath:i.canonicalString()}}function so(i){return Ye.fromServerFormat(i.fieldPath)}function vw(i){return i instanceof Ne?(function(n){if(n.op==="=="){if(wE(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NAN"}};if(TE(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wE(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NOT_NAN"}};if(TE(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(n.field),op:xD(n.op),value:n.value}}})(i):i instanceof Di?(function(n){const s=n.getFilters().map((o=>vw(o)));return s.length===1?s[0]:{compositeFilter:{op:LD(n.op),filters:s}}})(i):_t(54877,{filter:i})}function UD(i){const t=[];return i.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function Ew(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Yr{constructor(t,n,s,o,u=wt.min(),f=wt.min(),m=Ke.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(t){return new Yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class zD{constructor(t){this.yt=t}}function BD(i){const t=VD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Qm(t,t.limit,"L"):t}/**
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
 */class qD{constructor(){this.Cn=new jD}addToCollectionParentIndex(t,n){return this.Cn.add(n),X.resolve()}getCollectionParents(t,n){return X.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return X.resolve()}deleteFieldIndex(t,n){return X.resolve()}deleteAllFieldIndexes(t){return X.resolve()}createTargetIndexes(t,n){return X.resolve()}getDocumentsMatchingTarget(t,n){return X.resolve(null)}getIndexType(t,n){return X.resolve(0)}getFieldIndexes(t,n){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,n){return X.resolve(Wr.min())}getMinOffsetFromCollectionGroup(t,n){return X.resolve(Wr.min())}updateCollectionGroup(t,n,s){return X.resolve()}updateIndexEntries(t,n){return X.resolve()}}class jD{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Me(ne.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Me(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const xE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Tw=41943040;class hn{static withCacheSize(t){return new hn(t,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(Tw,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
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
 */class yo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new yo(0)}static cr(){return new yo(-1)}}/**
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
 */const LE="LruGarbageCollector",HD=1048576;function UE([i,t],[n,s]){const o=Mt(i,n);return o===0?Mt(t,s):o}class FD{constructor(t){this.Ir=t,this.buffer=new Me(UE),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();UE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){at(LE,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bo(n)?at(LE,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Vr(3e5)}))}}class YD{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return X.resolve(zh.ce);const s=new FD(n);return this.mr.forEachTarget(t,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(at("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(xE)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(at("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xE):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,u,f,m,y,p;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(at("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(t,s,n)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((S=>(p=Date.now(),no()<=Nt.DEBUG&&at("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${S} documents in `+(p-y)+`ms
Total Duration: ${p-T}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function KD(i,t){return new YD(i,t)}/**
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
 */class QD{constructor(){this.changes=new aa((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Je.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class XD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class $D{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&Ql(s.mutation,o,bn.empty(),ie.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Vt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Vt()){const o=Ks();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=Bl();return u.forEach(((m,y)=>{f=f.insert(m,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Ks();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Vt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(t,n,s,o){let u=cr();const f=Kl(),m=(function(){return Kl()})();return n.forEach(((y,p)=>{const T=s.get(p.key);o.has(p.key)&&(T===void 0||T.mutation instanceof os)?u=u.insert(p.key,p):T!==void 0?(f.set(p.key,T.mutation.getFieldMask()),Ql(T.mutation,p,T.mutation.getFieldMask(),ie.now())):f.set(p.key,bn.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,T)=>f.set(p,T))),n.forEach(((p,T)=>m.set(p,new XD(T,f.get(p)??null)))),m)))}recalculateAndSaveOverlays(t,n){const s=Kl();let o=new ue(((f,m)=>f-m)),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const m of f)m.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let T=s.get(y)||bn.empty();T=m.applyToLocalView(p,T),s.set(y,T);const S=(o.get(m.batchId)||Vt()).add(y);o=o.insert(m.batchId,S)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),p=y.key,T=y.value,S=nw();T.forEach((C=>{if(!u.has(C)){const H=lw(n.get(C),s.get(C));H!==null&&S.set(C,H),u=u.add(C)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,S))}return X.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return(function(f){return ft.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ZC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):X.resolve(Ks());let m=Jl,y=u;return f.next((p=>X.forEach(p,((T,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(T)?X.resolve():this.remoteDocumentCache.getEntry(t,T).next((C=>{y=y.insert(T,C)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,Vt()))).next((T=>({batchId:m,changes:ew(T)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ft(n)).next((s=>{let o=Bl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Bl();return this.indexManager.getCollectionParents(t,u).next((m=>X.forEach(m,(y=>{const p=(function(S,C){return new jh(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,o).next((T=>{T.forEach(((S,C)=>{f=f.insert(S,C)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((y,p)=>{const T=p.getKey();f.get(T)===null&&(f=f.insert(T,Je.newInvalidDocument(T)))}));let m=Bl();return f.forEach(((y,p)=>{const T=u.get(y);T!==void 0&&Ql(T.mutation,p,bn.empty(),ie.now()),Gh(n,p)&&(m=m.insert(y,p))})),m}))}}/**
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
 */class WD{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return X.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:bi(o.createTime)}})(n)),X.resolve()}getNamedQuery(t,n){return X.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:BD(o.bundledQuery),readTime:bi(o.readTime)}})(n)),X.resolve()}}/**
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
 */class ZD{constructor(){this.overlays=new ue(ft.comparator),this.qr=new Map}getOverlay(t,n){return X.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ks();return X.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),X.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),X.resolve()}getOverlaysForCollection(t,n,s){const o=Ks(),u=n.length+1,f=new ft(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return X.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ue(((p,T)=>p-T));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let T=u.get(p.largestBatchId);T===null&&(T=Ks(),u=u.insert(p.largestBatchId,T)),T.set(p.getKey(),p)}}const m=Ks(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,T)=>m.set(p,T))),!(m.size()>=o)););return X.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new pD(n,s));let u=this.qr.get(n);u===void 0&&(u=Vt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class JD{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(t){return X.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,X.resolve()}}/**
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
 */class Mg{constructor(){this.Qr=new Me(Ue.$r),this.Ur=new Me(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Ue(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new Ue(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new ft(new ne([])),s=new Ue(n,t),o=new Ue(n,t+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new ft(new ne([])),s=new Ue(n,t),o=new Ue(n,t+1);let u=Vt();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Ue(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ue{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return ft.comparator(t.key,n.key)||Mt(t.Yr,n.Yr)}static Kr(t,n){return Mt(t.Yr,n.Yr)||ft.comparator(t.key,n.key)}}/**
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
 */class t2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Me(Ue.$r)}checkEmpty(t){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new gD(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Ue(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(t,n){return X.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Ag:this.tr-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ue(n,0),o=new Ue(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Me(Mt);return n.forEach((o=>{const u=new Ue(o,0),f=new Ue(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),X.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ft.isDocumentKey(u)||(u=u.child(""));const f=new Ue(new ft(u),0);let m=new Me(Mt);return this.Zr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(y.Yr)),!0)}),f),X.resolve(this.ti(m))}ti(t){const n=[];return t.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){Ht(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return X.forEach(n.mutations,(o=>{const u=new Ue(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new Ue(n,0),o=this.Zr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class e2{constructor(t){this.ri=t,this.docs=(function(){return new ue(ft.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(t,n){let s=cr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Je.newInvalidDocument(o))})),X.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=cr();const f=n.path,m=new ft(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:p,value:{document:T}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||DC(CC(T),s)<=0||(o.has(T.key)||Gh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(t,n,s,o){_t(9500)}ii(t,n){return X.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new n2(this)}getSize(t){return X.resolve(this.size)}}class n2 extends QD{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)})),X.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class i2{constructor(t){this.persistence=t,this.si=new aa((n=>Rg(n)),Ig),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this.oi=0,this._i=new Mg,this.targetCount=0,this.ai=yo.ur()}forEachTarget(t,n){return this.si.forEach(((s,o)=>n(o))),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),X.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new yo(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,X.resolve()}updateTargetData(t,n){return this.Pr(n),X.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),X.waitFor(u).next((()=>o))}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return X.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),X.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),X.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),X.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return X.resolve(s)}containsKey(t,n){return X.resolve(this._i.containsKey(n))}}/**
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
 */class ww{constructor(t,n){this.ui={},this.overlays={},this.ci=new zh(0),this.li=!1,this.li=!0,this.hi=new JD,this.referenceDelegate=t(this),this.Pi=new i2(this),this.indexManager=new qD,this.remoteDocumentCache=(function(o){return new e2(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new zD(n),this.Ii=new WD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ZD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new t2(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){at("MemoryPersistence","Starting transaction:",t);const o=new r2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return X.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class r2 extends NC{constructor(t){super(),this.currentSequenceNumber=t}}class Vg{constructor(t){this.persistence=t,this.Ri=new Mg,this.Vi=null}static mi(t){return new Vg(t)}get fi(){if(this.Vi)return this.Vi;throw _t(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),X.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),X.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(s=>{const o=ft.fromPath(s);return this.gi(t,o).next((u=>{u||n.removeEntry(o,wt.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return X.or([()=>X.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Sh{constructor(t,n){this.persistence=t,this.pi=new aa((s=>PC(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=KD(this,n)}static mi(t,n){return new Sh(t,n)}Ei(){}di(t){return X.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return X.forEach(this.pi,((s,o)=>this.br(t,s,o).next((u=>u?X.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((m=>{m||(s++,u.removeEntry(f,wt.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),X.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),X.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),X.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),X.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=ih(t.data.value)),n}br(t,n,s){return X.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Pg{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=Vt(),o=Vt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Pg(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class s2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class a2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Pb()?8:MC(tn())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new s2;return this.Ss(t,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,n,f,m.size)}))})).next((()=>u.result))}bs(t,n,s,o){return s.documentReadCount<this.fs?(no()<=Nt.DEBUG&&at("QueryEngine","SDK will not create cache indexes for query:",io(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(no()<=Nt.DEBUG&&at("QueryEngine","Query:",io(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(no()<=Nt.DEBUG&&at("QueryEngine","The SDK decides to create cache indexes for query:",io(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ai(n))):X.resolve())}ys(t,n){if(RE(n))return X.resolve(null);let s=Ai(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Qm(n,null,"F"),s=Ai(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=Vt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.Ds(n,m);return this.Cs(n,p,f,y.readTime)?this.ys(t,Qm(n,null,"F")):this.vs(t,p,n,y)}))))})))))}ws(t,n,s,o){return RE(n)||o.isEqual(wt.min())?X.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?X.resolve(null):(no()<=Nt.DEBUG&&at("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),io(n)),this.vs(t,f,n,IC(o,Jl)).next((m=>m)))}))}Ds(t,n){let s=new Me(J0(t));return n.forEach(((o,u)=>{Gh(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return no()<=Nt.DEBUG&&at("QueryEngine","Using full collection scan to execute query:",io(n)),this.ps.getDocumentsMatchingQuery(t,n,Wr.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const kg="LocalStore",o2=3e8;class l2{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new ue(Mt),this.xs=new aa((u=>Rg(u)),Ig),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $D(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function u2(i,t,n,s){return new l2(i,t,n,s)}async function Aw(i,t){const n=At(i);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let y=Vt();for(const p of o){f.push(p.batchId);for(const T of p.mutations)y=y.add(T.key)}for(const p of u){m.push(p.batchId);for(const T of p.mutations)y=y.add(T.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ls:p,removedBatchIds:f,addedBatchIds:m})))}))}))}function c2(i,t){const n=At(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,p,T){const S=p.batch,C=S.keys();let H=X.resolve();return C.forEach((J=>{H=H.next((()=>T.getEntry(y,J))).next((st=>{const et=p.docVersions.get(J);Ht(et!==null,48541),st.version.compareTo(et)<0&&(S.applyToRemoteDocument(st,p),st.isValidDocument()&&(st.setReadTime(p.commitVersion),T.addEntry(st)))}))})),H.next((()=>m.mutationQueue.removeMutationBatch(y,S)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Vt();for(let p=0;p<m.mutationResults.length;++p)m.mutationResults[p].transformResults.length>0&&(y=y.add(m.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function Sw(i){const t=At(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function h2(i,t){const n=At(i),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];t.targetChanges.forEach(((T,S)=>{const C=o.get(S);if(!C)return;m.push(n.Pi.removeMatchingKeys(u,T.removedDocuments,S).next((()=>n.Pi.addMatchingKeys(u,T.addedDocuments,S))));let H=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?H=H.withResumeToken(Ke.EMPTY_BYTE_STRING,wt.min()).withLastLimboFreeSnapshotVersion(wt.min()):T.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(T.resumeToken,s)),o=o.insert(S,H),(function(st,et,Et){return st.resumeToken.approximateByteSize()===0||et.snapshotVersion.toMicroseconds()-st.snapshotVersion.toMicroseconds()>=o2?!0:Et.addedDocuments.size+Et.modifiedDocuments.size+Et.removedDocuments.size>0})(C,H,T)&&m.push(n.Pi.updateTargetData(u,H))}));let y=cr(),p=Vt();if(t.documentUpdates.forEach((T=>{t.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(f2(u,f,t.documentUpdates).next((T=>{y=T.ks,p=T.qs}))),!s.isEqual(wt.min())){const T=n.Pi.getLastRemoteSnapshotVersion(u).next((S=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return X.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.Ms=o,u)))}function f2(i,t,n){let s=Vt(),o=Vt();return n.forEach((u=>s=s.add(u))),t.getEntries(i,s).next((u=>{let f=cr();return n.forEach(((m,y)=>{const p=u.get(m);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(wt.min())?(t.removeEntry(m,y.readTime),f=f.insert(m,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(m,y)):at(kg,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",y.version)})),{ks:f,qs:o}}))}function d2(i,t){const n=At(i);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Ag),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function m2(i,t){const n=At(i);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,t).next((u=>u?(o=u,X.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Yr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function Jm(i,t,n){const s=At(i),o=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!bo(f))throw f;at(kg,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function zE(i,t,n){const s=At(i);let o=wt.min(),u=Vt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,T){const S=At(y),C=S.xs.get(T);return C!==void 0?X.resolve(S.Ms.get(C)):S.Pi.getTargetData(p,T)})(s,f,Ai(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:wt.min(),n?u:Vt()))).next((m=>(g2(s,tD(t),m),{documents:m,Qs:u})))))}function g2(i,t,n){let s=i.Os.get(t)||wt.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(t,s)}class BE{constructor(){this.activeTargetIds=aD()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class p2{constructor(){this.Mo=new BE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new BE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class y2{Oo(t){}shutdown(){}}/**
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
 */const qE="ConnectivityMonitor";class jE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){at(qE,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){at(qE,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Qc=null;function tg(){return Qc===null?Qc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qc++,"0x"+Qc.toString(16)}/**
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
 */const Am="RestConnection",_2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class v2{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===yh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,u){const f=tg(),m=this.zo(t,n.toUriEncodedString());at(Am,`Sending RPC '${t}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(m),T=Eo(p);return this.Jo(t,m,y,s,T).then((S=>(at(Am,`Received RPC '${t}' ${f}: `,S),S)),(S=>{throw fo(Am,`RPC '${t}' ${f} failed with error: `,S,"url: ",m,"request:",s),S}))}Ho(t,n,s,o,u,f){return this.Go(t,n,s,o,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ao})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const s=_2[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class E2{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const We="WebChannelConnection";class T2 extends v2{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=tg();return new Promise(((m,y)=>{const p=new I0;p.setWithCredentials(!0),p.listenOnce(C0.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case nh.NO_ERROR:const S=p.getResponseJson();at(We,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),m(S);break;case nh.TIMEOUT:at(We,`RPC '${t}' ${f} timed out`),y(new lt(W.DEADLINE_EXCEEDED,"Request time out"));break;case nh.HTTP_ERROR:const C=p.getStatus();if(at(We,`RPC '${t}' ${f} failed with status:`,C,"response text:",p.getResponseText()),C>0){let H=p.getResponseJson();Array.isArray(H)&&(H=H[0]);const J=H?.error;if(J&&J.status&&J.message){const st=(function(Et){const gt=Et.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(gt)>=0?gt:W.UNKNOWN})(J.status);y(new lt(st,J.message))}else y(new lt(W.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new lt(W.UNAVAILABLE,"Connection failed."));break;default:_t(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{at(We,`RPC '${t}' ${f} completed.`)}}));const T=JSON.stringify(o);at(We,`RPC '${t}' ${f} sending request:`,o),p.send(n,"POST",T,s,15)}))}T_(t,n,s){const o=tg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=N0(),m=O0(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const T=u.join("");at(We,`Creating RPC '${t}' stream ${o}: ${T}`,y);const S=f.createWebChannel(T,y);this.I_(S);let C=!1,H=!1;const J=new E2({Yo:et=>{H?at(We,`Not sending because RPC '${t}' stream ${o} is closed:`,et):(C||(at(We,`Opening RPC '${t}' stream ${o} transport.`),S.open(),C=!0),at(We,`RPC '${t}' stream ${o} sending:`,et),S.send(et))},Zo:()=>S.close()}),st=(et,Et,gt)=>{et.listen(Et,(ut=>{try{gt(ut)}catch(Dt){setTimeout((()=>{throw Dt}),0)}}))};return st(S,zl.EventType.OPEN,(()=>{H||(at(We,`RPC '${t}' stream ${o} transport opened.`),J.o_())})),st(S,zl.EventType.CLOSE,(()=>{H||(H=!0,at(We,`RPC '${t}' stream ${o} transport closed`),J.a_(),this.E_(S))})),st(S,zl.EventType.ERROR,(et=>{H||(H=!0,fo(We,`RPC '${t}' stream ${o} transport errored. Name:`,et.name,"Message:",et.message),J.a_(new lt(W.UNAVAILABLE,"The operation could not be completed")))})),st(S,zl.EventType.MESSAGE,(et=>{if(!H){const Et=et.data[0];Ht(!!Et,16349);const gt=Et,ut=gt?.error||gt[0]?.error;if(ut){at(We,`RPC '${t}' stream ${o} received error:`,ut);const Dt=ut.status;let Tt=(function(A){const R=Ae[A];if(R!==void 0)return hw(R)})(Dt),zt=ut.message;Tt===void 0&&(Tt=W.INTERNAL,zt="Unknown error status: "+Dt+" with message "+ut.message),H=!0,J.a_(new lt(Tt,zt)),S.close()}else at(We,`RPC '${t}' stream ${o} received:`,Et),J.u_(Et)}})),st(m,D0.STAT_EVENT,(et=>{et.stat===jm.PROXY?at(We,`RPC '${t}' stream ${o} detected buffering proxy`):et.stat===jm.NOPROXY&&at(We,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Sm(){return typeof document<"u"?document:null}/**
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
 */function Xh(i){return new bD(i,!0)}/**
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
 */class bw{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&at("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const HE="PersistentStream";class Rw{constructor(t,n,s,o,u,f,m,y){this.Mi=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bw(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new lt(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return at(HE,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(at(HE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class w2 extends Rw{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=CD(this.serializer,t),s=(function(u){if(!("targetChange"in u))return wt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?wt.min():f.readTime?bi(f.readTime):wt.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=Zm(this.serializer),n.addTarget=(function(u,f){let m;const y=f.target;if(m=Km(y)?{documents:ND(u,y)}:{query:MD(u,y).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=mw(u,f.resumeToken);const p=Xm(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(wt.min())>0){m.readTime=Ah(u,f.snapshotVersion.toTimestamp());const p=Xm(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m})(this.serializer,t);const s=PD(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=Zm(this.serializer),n.removeTarget=t,this.q_(n)}}class A2 extends Rw{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=OD(t.writeResults,t.commitTime),s=bi(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=Zm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>DD(this.serializer,s)))};this.q_(n)}}/**
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
 */class S2{}class b2 extends S2{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new lt(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,$m(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new lt(W.UNKNOWN,u.toString())}))}Ho(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(t,$m(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new lt(W.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class R2{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):at("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ta="RemoteStore";class I2{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{oa(this)&&(at(ta,"Restarting streams for network reachability change."),await(async function(y){const p=At(y);p.Ea.add(4),await gu(p),p.Ra.set("Unknown"),p.Ea.delete(4),await $h(p)})(this))}))})),this.Ra=new R2(s,o)}}async function $h(i){if(oa(i))for(const t of i.da)await t(!0)}async function gu(i){for(const t of i.da)await t(!1)}function Iw(i,t){const n=At(i);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),zg(n)?Ug(n):Ro(n).O_()&&Lg(n,t))}function xg(i,t){const n=At(i),s=Ro(n);n.Ia.delete(t),s.O_()&&Cw(n,t),n.Ia.size===0&&(s.O_()?s.L_():oa(n)&&n.Ra.set("Unknown"))}function Lg(i,t){if(i.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(wt.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ro(i).Y_(t)}function Cw(i,t){i.Va.Ue(t),Ro(i).Z_(t)}function Ug(i){i.Va=new TD({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),Ro(i).start(),i.Ra.ua()}function zg(i){return oa(i)&&!Ro(i).x_()&&i.Ia.size>0}function oa(i){return At(i).Ea.size===0}function Dw(i){i.Va=void 0}async function C2(i){i.Ra.set("Online")}async function D2(i){i.Ia.forEach(((t,n)=>{Lg(i,t)}))}async function O2(i,t){Dw(i),zg(i)?(i.Ra.ha(t),Ug(i)):i.Ra.set("Unknown")}async function N2(i,t,n){if(i.Ra.set("Online"),t instanceof dw&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(i,t)}catch(s){at(ta,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await bh(i,s)}else if(t instanceof ah?i.Va.Ze(t):t instanceof fw?i.Va.st(t):i.Va.tt(t),!n.isEqual(wt.min()))try{const s=await Sw(i.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(p);T&&u.Ia.set(p,T.withResumeToken(y.resumeToken,f))}})),m.targetMismatches.forEach(((y,p)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(Ke.EMPTY_BYTE_STRING,T.snapshotVersion)),Cw(u,y);const S=new Yr(T.target,y,p,T.sequenceNumber);Lg(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(i,n)}catch(s){at(ta,"Failed to raise snapshot:",s),await bh(i,s)}}async function bh(i,t,n){if(!bo(t))throw t;i.Ea.add(1),await gu(i),i.Ra.set("Offline"),n||(n=()=>Sw(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{at(ta,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await $h(i)}))}function Ow(i,t){return t().catch((n=>bh(i,n,t)))}async function Wh(i){const t=At(i),n=es(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ag;for(;M2(t);)try{const o=await d2(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,V2(t,o)}catch(o){await bh(t,o)}Nw(t)&&Mw(t)}function M2(i){return oa(i)&&i.Ta.length<10}function V2(i,t){i.Ta.push(t);const n=es(i);n.O_()&&n.X_&&n.ea(t.mutations)}function Nw(i){return oa(i)&&!es(i).x_()&&i.Ta.length>0}function Mw(i){es(i).start()}async function P2(i){es(i).ra()}async function k2(i){const t=es(i);for(const n of i.Ta)t.ea(n.mutations)}async function x2(i,t,n){const s=i.Ta.shift(),o=Dg.from(s,t,n);await Ow(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Wh(i)}async function L2(i,t){t&&es(i).X_&&await(async function(s,o){if((function(f){return _D(f)&&f!==W.ABORTED})(o.code)){const u=s.Ta.shift();es(s).B_(),await Ow(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Wh(s)}})(i,t),Nw(i)&&Mw(i)}async function FE(i,t){const n=At(i);n.asyncQueue.verifyOperationInProgress(),at(ta,"RemoteStore received new credentials");const s=oa(n);n.Ea.add(3),await gu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await $h(n)}async function U2(i,t){const n=At(i);t?(n.Ea.delete(2),await $h(n)):t||(n.Ea.add(2),await gu(n),n.Ra.set("Unknown"))}function Ro(i){return i.ma||(i.ma=(function(n,s,o){const u=At(n);return u.sa(),new w2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:C2.bind(null,i),t_:D2.bind(null,i),r_:O2.bind(null,i),H_:N2.bind(null,i)}),i.da.push((async t=>{t?(i.ma.B_(),zg(i)?Ug(i):i.Ra.set("Unknown")):(await i.ma.stop(),Dw(i))}))),i.ma}function es(i){return i.fa||(i.fa=(function(n,s,o){const u=At(n);return u.sa(),new A2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:P2.bind(null,i),r_:L2.bind(null,i),ta:k2.bind(null,i),na:x2.bind(null,i)}),i.da.push((async t=>{t?(i.fa.B_(),await Wh(i)):(await i.fa.stop(),i.Ta.length>0&&(at(ta,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class Bg{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new Bg(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt(W.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qg(i,t){if(ur("AsyncQueue",`${t}: ${i}`),bo(i))return new lt(W.UNAVAILABLE,`${t}: ${i}`);throw i}/**
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
 */class co{static emptySet(t){return new co(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ft.comparator(n.key,s.key):(n,s)=>ft.comparator(n.key,s.key),this.keyedMap=Bl(),this.sortedSet=new ue(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof co)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new co;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class GE{constructor(){this.ga=new ue(ft.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):_t(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class _o{constructor(t,n,s,o,u,f,m,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new _o(t,n,co.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class z2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class B2{constructor(){this.queries=YE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=At(n),u=o.queries;o.queries=YE(),u.forEach(((f,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new lt(W.ABORTED,"Firestore shutting down"))}}function YE(){return new aa((i=>Z0(i)),Fh)}async function jg(i,t){const n=At(i);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new z2,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=qg(f,`Initialization of query '${io(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&Fg(n)}async function Hg(i,t){const n=At(i),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function q2(i,t){const n=At(i);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Fg(n)}function j2(i,t,n){const s=At(i),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function Fg(i){i.Ca.forEach((t=>{t.next()}))}var eg,KE;(KE=eg||(eg={})).Ma="default",KE.Cache="cache";class Gg{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new _o(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=_o.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==eg.Cache}}/**
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
 */class Vw{constructor(t){this.key=t}}class Pw{constructor(t){this.key=t}}class H2{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Vt(),this.mutatedKeys=Vt(),this.eu=J0(t),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new GE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((T,S)=>{const C=o.get(T),H=Gh(this.query,S)?S:null,J=!!C&&this.mutatedKeys.has(C.key),st=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let et=!1;C&&H?C.data.isEqual(H.data)?J!==st&&(s.track({type:3,doc:H}),et=!0):this.su(C,H)||(s.track({type:2,doc:H}),et=!0,(y&&this.eu(H,y)>0||p&&this.eu(H,p)<0)&&(m=!0)):!C&&H?(s.track({type:0,doc:H}),et=!0):C&&!H&&(s.track({type:1,doc:C}),et=!0,(y||p)&&(m=!0)),et&&(H?(f=f.add(H),u=st?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((T,S)=>(function(H,J){const st=et=>{switch(et){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _t(20277,{Rt:et})}};return st(H)-st(J)})(T.type,S.type)||this.eu(T.doc,S.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new _o(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new GE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Vt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new Pw(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new Vw(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=Vt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return _o.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Yg="SyncEngine";class F2{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class G2{constructor(t){this.key=t,this.hu=!1}}class Y2{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new aa((m=>Z0(m)),Fh),this.Iu=new Map,this.Eu=new Set,this.du=new ue(ft.comparator),this.Au=new Map,this.Ru=new Mg,this.Vu={},this.mu=new Map,this.fu=yo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function K2(i,t,n=!0){const s=Bw(i);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await kw(s,t,n,!0),o}async function Q2(i,t){const n=Bw(i);await kw(n,t,!0,!1)}async function kw(i,t,n,s){const o=await m2(i.localStore,Ai(t)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await X2(i,t,u,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&Iw(i.remoteStore,o),m}async function X2(i,t,n,s,o){i.pu=(S,C,H)=>(async function(st,et,Et,gt){let ut=et.view.ru(Et);ut.Cs&&(ut=await zE(st.localStore,et.query,!1).then((({documents:V})=>et.view.ru(V,ut))));const Dt=gt&&gt.targetChanges.get(et.targetId),Tt=gt&&gt.targetMismatches.get(et.targetId)!=null,zt=et.view.applyChanges(ut,st.isPrimaryClient,Dt,Tt);return XE(st,et.targetId,zt.au),zt.snapshot})(i,S,C,H);const u=await zE(i.localStore,t,!0),f=new H2(t,u.Qs),m=f.ru(u.documents),y=mu.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",o),p=f.applyChanges(m,i.isPrimaryClient,y);XE(i,n,p.au);const T=new F2(t,n,f);return i.Tu.set(t,T),i.Iu.has(n)?i.Iu.get(n).push(t):i.Iu.set(n,[t]),p.snapshot}async function $2(i,t,n){const s=At(i),o=s.Tu.get(t),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Fh(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Jm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&xg(s.remoteStore,o.targetId),ng(s,o.targetId)})).catch(So)):(ng(s,o.targetId),await Jm(s.localStore,o.targetId,!0))}async function W2(i,t){const n=At(i),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),xg(n.remoteStore,s.targetId))}async function Z2(i,t,n){const s=sO(i);try{const o=await(function(f,m){const y=At(f),p=ie.now(),T=m.reduce(((H,J)=>H.add(J.key)),Vt());let S,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(H=>{let J=cr(),st=Vt();return y.Ns.getEntries(H,T).next((et=>{J=et,J.forEach(((Et,gt)=>{gt.isValidDocument()||(st=st.add(Et))}))})).next((()=>y.localDocuments.getOverlayedDocuments(H,J))).next((et=>{S=et;const Et=[];for(const gt of m){const ut=dD(gt,S.get(gt.key).overlayedDocument);ut!=null&&Et.push(new os(gt.key,ut,G0(ut.value.mapValue),Si.exists(!0)))}return y.mutationQueue.addMutationBatch(H,p,Et,m)})).next((et=>{C=et;const Et=et.applyToLocalDocumentSet(S,st);return y.documentOverlayCache.saveOverlays(H,et.batchId,Et)}))})).then((()=>({batchId:C.batchId,changes:ew(S)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,y){let p=f.Vu[f.currentUser.toKey()];p||(p=new ue(Mt)),p=p.insert(m,y),f.Vu[f.currentUser.toKey()]=p})(s,o.batchId,n),await pu(s,o.changes),await Wh(s.remoteStore)}catch(o){const u=qg(o,"Failed to persist write");n.reject(u)}}async function xw(i,t){const n=At(i);try{const s=await h2(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Ht(f.hu,14607):o.removedDocuments.size>0&&(Ht(f.hu,42227),f.hu=!1))})),await pu(n,s,t)}catch(s){await So(s)}}function QE(i,t,n){const s=At(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const y=At(f);y.onlineState=m;let p=!1;y.queries.forEach(((T,S)=>{for(const C of S.Sa)C.va(m)&&(p=!0)})),p&&Fg(y)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function J2(i,t,n){const s=At(i);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new ue(ft.comparator);f=f.insert(u,Je.newNoDocument(u,wt.min()));const m=Vt().add(u),y=new Qh(wt.min(),new Map,new ue(Mt),f,m);await xw(s,y),s.du=s.du.remove(u),s.Au.delete(t),Kg(s)}else await Jm(s.localStore,t,!1).then((()=>ng(s,t,n))).catch(So)}async function tO(i,t){const n=At(i),s=t.batch.batchId;try{const o=await c2(n.localStore,t);Uw(n,s,null),Lw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await pu(n,o)}catch(o){await So(o)}}async function eO(i,t,n){const s=At(i);try{const o=await(function(f,m){const y=At(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let T;return y.mutationQueue.lookupMutationBatch(p,m).next((S=>(Ht(S!==null,37113),T=S.keys(),y.mutationQueue.removeMutationBatch(p,S)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,T))).next((()=>y.localDocuments.getDocuments(p,T)))}))})(s.localStore,t);Uw(s,t,n),Lw(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await pu(s,o)}catch(o){await So(o)}}function Lw(i,t){(i.mu.get(t)||[]).forEach((n=>{n.resolve()})),i.mu.delete(t)}function Uw(i,t,n){const s=At(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function ng(i,t,n=null){i.sharedClientState.removeLocalQueryTarget(t);for(const s of i.Iu.get(t))i.Tu.delete(s),n&&i.Pu.yu(s,n);i.Iu.delete(t),i.isPrimaryClient&&i.Ru.jr(t).forEach((s=>{i.Ru.containsKey(s)||zw(i,s)}))}function zw(i,t){i.Eu.delete(t.path.canonicalString());const n=i.du.get(t);n!==null&&(xg(i.remoteStore,n),i.du=i.du.remove(t),i.Au.delete(n),Kg(i))}function XE(i,t,n){for(const s of n)s instanceof Vw?(i.Ru.addReference(s.key,t),nO(i,s)):s instanceof Pw?(at(Yg,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,t),i.Ru.containsKey(s.key)||zw(i,s.key)):_t(19791,{wu:s})}function nO(i,t){const n=t.key,s=n.path.canonicalString();i.du.get(n)||i.Eu.has(s)||(at(Yg,"New document in limbo: "+n),i.Eu.add(s),Kg(i))}function Kg(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const t=i.Eu.values().next().value;i.Eu.delete(t);const n=new ft(ne.fromString(t)),s=i.fu.next();i.Au.set(s,new G2(n)),i.du=i.du.insert(n,s),Iw(i.remoteStore,new Yr(Ai(Hh(n.path)),s,"TargetPurposeLimboResolution",zh.ce))}}async function pu(i,t,n){const s=At(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{f.push(s.pu(y,t,n).then((p=>{if((p||n)&&s.isPrimaryClient){const T=p?!p.fromCache:n?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,T?"current":"not-current")}if(p){o.push(p);const T=Pg.As(y.targetId,p);u.push(T)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,p){const T=At(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>X.forEach(p,(C=>X.forEach(C.Es,(H=>T.persistence.referenceDelegate.addReference(S,C.targetId,H))).next((()=>X.forEach(C.ds,(H=>T.persistence.referenceDelegate.removeReference(S,C.targetId,H)))))))))}catch(S){if(!bo(S))throw S;at(kg,"Failed to update sequence numbers: "+S)}for(const S of p){const C=S.targetId;if(!S.fromCache){const H=T.Ms.get(C),J=H.snapshotVersion,st=H.withLastLimboFreeSnapshotVersion(J);T.Ms=T.Ms.insert(C,st)}}})(s.localStore,u))}async function iO(i,t){const n=At(i);if(!n.currentUser.isEqual(t)){at(Yg,"User change. New user:",t.toKey());const s=await Aw(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new lt(W.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await pu(n,s.Ls)}}function rO(i,t){const n=At(i),s=n.Au.get(t);if(s&&s.hu)return Vt().add(s.key);{let o=Vt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function Bw(i){const t=At(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=xw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=J2.bind(null,t),t.Pu.H_=q2.bind(null,t.eventManager),t.Pu.yu=j2.bind(null,t.eventManager),t}function sO(i){const t=At(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eO.bind(null,t),t}class Rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return u2(this.persistence,new a2,t.initialUser,this.serializer)}Cu(t){return new ww(Vg.mi,this.serializer)}Du(t){return new p2}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rh.provider={build:()=>new Rh};class aO extends Rh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Ht(this.persistence.referenceDelegate instanceof Sh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GD(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new ww((s=>Sh.mi(s,n)),this.serializer)}}class ig{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>QE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iO.bind(null,this.syncEngine),await U2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new B2})()}createDatastore(t){const n=Xh(t.databaseInfo.databaseId),s=(function(u){return new T2(u)})(t.databaseInfo);return(function(u,f,m,y){return new b2(u,f,m,y)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,m){return new I2(s,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(n=>QE(this.syncEngine,n,0)),(function(){return jE.v()?new jE:new y2})())}createSyncEngine(t,n){return(function(o,u,f,m,y,p,T){const S=new Y2(o,u,f,m,y,p);return T&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=At(n);at(ta,"RemoteStore shutting down."),s.Ea.add(5),await gu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ig.provider={build:()=>new ig};/**
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
 *//**
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
 */class Qg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ur("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */const ns="FirestoreClient";class oO{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ze.UNAUTHENTICATED,this.clientId=Tg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{at(ns,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(at(ns,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=qg(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function bm(i,t){i.asyncQueue.verifyOperationInProgress(),at(ns,"Initializing OfflineComponentProvider");const n=i.configuration;await t.initialize(n);let s=n.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Aw(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=t}async function $E(i,t){i.asyncQueue.verifyOperationInProgress();const n=await lO(i);at(ns,"Initializing OnlineComponentProvider"),await t.initialize(n,i.configuration),i.setCredentialChangeListener((s=>FE(t.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>FE(t.remoteStore,o))),i._onlineComponents=t}async function lO(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){at(ns,"Using user provided OfflineComponentProvider");try{await bm(i,i._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;fo("Error using user provided cache. Falling back to memory cache: "+n),await bm(i,new Rh)}}else at(ns,"Using default OfflineComponentProvider"),await bm(i,new aO(void 0));return i._offlineComponents}async function qw(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(at(ns,"Using user provided OnlineComponentProvider"),await $E(i,i._uninitializedComponentsProvider._online)):(at(ns,"Using default OnlineComponentProvider"),await $E(i,new ig))),i._onlineComponents}function uO(i){return qw(i).then((t=>t.syncEngine))}async function Ih(i){const t=await qw(i),n=t.eventManager;return n.onListen=K2.bind(null,t.syncEngine),n.onUnlisten=$2.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Q2.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=W2.bind(null,t.syncEngine),n}function cO(i,t,n={}){const s=new ar;return i.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,y,p){const T=new Qg({next:C=>{T.Nu(),f.enqueueAndForget((()=>Hg(u,S)));const H=C.docs.has(m);!H&&C.fromCache?p.reject(new lt(W.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&C.fromCache&&y&&y.source==="server"?p.reject(new lt(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(C)},error:C=>p.reject(C)}),S=new Gg(Hh(m.path),T,{includeMetadataChanges:!0,qa:!0});return jg(u,S)})(await Ih(i),i.asyncQueue,t,n,s))),s.promise}function hO(i,t,n={}){const s=new ar;return i.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,y,p){const T=new Qg({next:C=>{T.Nu(),f.enqueueAndForget((()=>Hg(u,S))),C.fromCache&&y.source==="server"?p.reject(new lt(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(C)},error:C=>p.reject(C)}),S=new Gg(m,T,{includeMetadataChanges:!0,qa:!0});return jg(u,S)})(await Ih(i),i.asyncQueue,t,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function jw(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const WE=new Map;/**
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
 */const Hw="firestore.googleapis.com",ZE=!0;class JE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new lt(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hw,this.ssl=ZE}else this.host=t.host,this.ssl=t.ssl??ZE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Tw;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<HD)throw new lt(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}RC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jw(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new lt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new lt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new lt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lt(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new lt(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new pC;switch(s.type){case"firstParty":return new EC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new lt(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=WE.get(n);s&&(at("ComponentProvider","Removing Datastore"),WE.delete(n),s.terminate())})(this),Promise.resolve()}}function fO(i,t,n,s={}){i=Gn(i,Zh);const o=Eo(t),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${t}:${n}`;o&&(UT(`https://${m}`),zT("Firestore",!0)),u.host!==Hw&&u.host!==m&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!$r(y,f)&&(i._setSettings(y),s.mockUserToken)){let p,T;if(typeof s.mockUserToken=="string")p=s.mockUserToken,T=Ze.MOCK_USER;else{p=Rb(s.mockUserToken,i._app?.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new lt(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ze(S)}i._authCredentials=new yC(new V0(p,T))}}/**
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
 */class yu{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new yu(this.firestore,t,this._query)}}class ye{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ye(this.firestore,t,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(fu(n,ye._jsonSchema))return new ye(t,s||null,new ft(ne.fromString(n.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:Se("string",ye._jsonSchemaVersion),referencePath:Se("string")};class Xr extends yu{constructor(t,n,s){super(t,n,Hh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ye(this.firestore,null,new ft(t))}withConverter(t){return new Xr(this.firestore,t,this._path)}}function dO(i,t,...n){if(i=be(i),P0("collection","path",t),i instanceof Zh){const s=ne.fromString(t,...n);return dE(s),new Xr(i,null,s)}{if(!(i instanceof ye||i instanceof Xr))throw new lt(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ne.fromString(t,...n));return dE(s),new Xr(i.firestore,null,s)}}function mO(i,t,...n){if(i=be(i),arguments.length===1&&(t=Tg.newId()),P0("doc","path",t),i instanceof Zh){const s=ne.fromString(t,...n);return fE(s),new ye(i,null,new ft(s))}{if(!(i instanceof ye||i instanceof Xr))throw new lt(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ne.fromString(t,...n));return fE(s),new ye(i.firestore,i instanceof Xr?i.converter:null,new ft(s))}}/**
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
 */const tT="AsyncQueue";class eT{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bw(this,"async_queue_retry"),this._c=()=>{const s=Sm();s&&at(tT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Sm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Sm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ar;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!bo(t))throw t;at(tT,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",nT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=Bg.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_t(47125,{Pc:nT(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function nT(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}/**
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
 */function iT(i){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class ea extends Zh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new eT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new eT(t),this._firestoreClient=void 0,await t}}}function gO(i,t){const n=typeof i=="object"?i:hg(),s=typeof i=="string"?i:yh,o=ra(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Sb("firestore");u&&fO(o,...u)}return o}function Jh(i){if(i._terminated)throw new lt(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||pO(i),i._firestoreClient}function pO(i){const t=i._freezeSettings(),n=(function(o,u,f,m){return new LC(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,jw(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,t);i._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new oO(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(i._componentsProvider))}/**
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
 */class Fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fn(Ke.fromBase64String(t))}catch(n){throw new lt(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Fn(Ke.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(fu(t,Fn._jsonSchema))return Fn.fromBase64String(t.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Se("string",Fn._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class tf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new lt(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xg{constructor(t){this._methodName=t}}/**
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
 */class Ri{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new lt(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new lt(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Mt(this._lat,t._lat)||Mt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ri._jsonSchemaVersion}}static fromJSON(t){if(fu(t,Ri._jsonSchema))return new Ri(t.latitude,t.longitude)}}Ri._jsonSchemaVersion="firestore/geoPoint/1.0",Ri._jsonSchema={type:Se("string",Ri._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ii{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(fu(t,Ii._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new Ii(t.vectorValues);throw new lt(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Se("string",Ii._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */const yO=/^__.*__$/;class _O{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new os(t,this.data,this.fieldMask,n,this.fieldTransforms):new du(t,this.data,n,this.fieldTransforms)}}class Fw{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new os(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gw(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t(40011,{Ac:i})}}class $g{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new $g({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ch(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Gw(this.Ac)&&yO.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class vO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Xh(t)}Cc(t,n,s,o=!1){return new $g({Ac:t,methodName:n,Dc:s,path:Ye.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yw(i){const t=i._freezeSettings(),n=Xh(i._databaseId);return new vO(i._databaseId,!!t.ignoreUndefinedProperties,n)}function EO(i,t,n,s,o,u={}){const f=i.Cc(u.merge||u.mergeFields?2:0,t,n,o);Wg("Data must be an object, but it was:",f,s);const m=Kw(s,f);let y,p;if(u.merge)y=new bn(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const C=rg(t,S,n);if(!f.contains(C))throw new lt(W.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Xw(T,C)||T.push(C)}y=new bn(T),p=f.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,p=f.fieldTransforms;return new _O(new fn(m),y,p)}class ef extends Xg{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ef}}function TO(i,t,n,s){const o=i.Cc(1,t,n);Wg("Data must be an object, but it was:",o,s);const u=[],f=fn.empty();as(s,((y,p)=>{const T=Zg(t,y,n);p=be(p);const S=o.yc(T);if(p instanceof ef)u.push(T);else{const C=nf(p,S);C!=null&&(u.push(T),f.set(T,C))}}));const m=new bn(u);return new Fw(f,m,o.fieldTransforms)}function wO(i,t,n,s,o,u){const f=i.Cc(1,t,n),m=[rg(t,s,n)],y=[o];if(u.length%2!=0)throw new lt(W.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(rg(t,u[C])),y.push(u[C+1]);const p=[],T=fn.empty();for(let C=m.length-1;C>=0;--C)if(!Xw(p,m[C])){const H=m[C];let J=y[C];J=be(J);const st=f.yc(H);if(J instanceof ef)p.push(H);else{const et=nf(J,st);et!=null&&(p.push(H),T.set(H,et))}}const S=new bn(p);return new Fw(T,S,f.fieldTransforms)}function nf(i,t){if(Qw(i=be(i)))return Wg("Unsupported field value:",t,i),Kw(i,t);if(i instanceof Xg)return(function(s,o){if(!Gw(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let y=nf(m,o.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(i,t)}return(function(s,o){if((s=be(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oD(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ie.fromDate(s);return{timestampValue:Ah(o.serializer,u)}}if(s instanceof ie){const u=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ah(o.serializer,u)}}if(s instanceof Ri)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fn)return{bytesValue:mw(o.serializer,s._byteString)};if(s instanceof ye){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ng(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ii)return(function(f,m){return{mapValue:{fields:{[H0]:{stringValue:F0},[_h]:{arrayValue:{values:f.toArray().map((p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return Cg(m.serializer,p)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${wg(s)}`)})(i,t)}function Kw(i,t){const n={};return L0(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):as(i,((s,o)=>{const u=nf(o,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function Qw(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ie||i instanceof Ri||i instanceof Fn||i instanceof ye||i instanceof Xg||i instanceof Ii)}function Wg(i,t,n){if(!Qw(n)||!k0(n)){const s=wg(n);throw s==="an object"?t.Sc(i+" a custom object"):t.Sc(i+" "+s)}}function rg(i,t,n){if((t=be(t))instanceof tf)return t._internalPath;if(typeof t=="string")return Zg(i,t);throw Ch("Field path arguments must be of type string or ",i,!1,void 0,n)}const AO=new RegExp("[~\\*/\\[\\]]");function Zg(i,t,n){if(t.search(AO)>=0)throw Ch(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new tf(...t.split("."))._internalPath}catch{throw Ch(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Ch(i,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new lt(W.INVALID_ARGUMENT,m+i+y)}function Xw(i,t){return i.some((n=>n.isEqual(t)))}/**
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
 */class $w{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new SO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ww("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SO extends $w{data(){return super.data()}}function Ww(i,t){return typeof t=="string"?Zg(i,t):t instanceof tf?t._internalPath:t._delegate._internalPath}/**
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
 */function Zw(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new lt(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bO{convertValue(t,n="none"){switch(ts(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw _t(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return as(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){const n=t.fields?.[_h].arrayValue?.values?.map((s=>pe(s.doubleValue)));return new Ii(n)}convertGeoPoint(t){return new Ri(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=qh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(tu(t));default:return null}}convertTimestamp(t){const n=Zr(t);return new ie(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ne.fromString(t);Ht(Ew(s),9688,{name:t});const o=new eu(s.get(1),s.get(3)),u=new ft(s.popFirst(5));return o.isEqual(n)||ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function RO(i,t,n){let s;return s=i?n&&(n.merge||n.mergeFields)?i.toFirestore(t,n):i.toFirestore(t):t,s}class jl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xs extends $w{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new oh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ww("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new lt(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Xs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xs._jsonSchema={type:Se("string",Xs._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class oh extends Xs{data(t={}){return super.data(t)}}class $s{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new jl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new oh(this._firestore,this._userDataWriter,s.key,s,new jl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new lt(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const y=new oh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new jl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new oh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new jl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,T=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:IO(m.type),doc:y,oldIndex:p,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new lt(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$s._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Tg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function IO(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _t(61501,{type:i})}}/**
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
 */function CO(i){i=Gn(i,ye);const t=Gn(i.firestore,ea);return cO(Jh(t),i._key).then((n=>tA(t,i,n)))}$s._jsonSchemaVersion="firestore/querySnapshot/1.0",$s._jsonSchema={type:Se("string",$s._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};class Jg extends bO{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ye(this.firestore,null,n)}}function DO(i){i=Gn(i,yu);const t=Gn(i.firestore,ea),n=Jh(t),s=new Jg(t);return Zw(i._query),hO(n,i._query).then((o=>new $s(t,s,i,o)))}function OO(i,t,n){i=Gn(i,ye);const s=Gn(i.firestore,ea),o=RO(i.converter,t,n);return Jw(s,[EO(Yw(s),"setDoc",i._key,o,i.converter!==null,n).toMutation(i._key,Si.none())])}function to(i,t,n,...s){i=Gn(i,ye);const o=Gn(i.firestore,ea),u=Yw(o);let f;return f=typeof(t=be(t))=="string"||t instanceof tf?wO(u,"updateDoc",i._key,t,n,s):TO(u,"updateDoc",i._key,t),Jw(o,[f.toMutation(i._key,Si.exists(!0))])}function NO(i,...t){i=be(i);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||iT(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(iT(t[s])){const y=t[s];t[s]=y.next?.bind(y),t[s+1]=y.error?.bind(y),t[s+2]=y.complete?.bind(y)}let u,f,m;if(i instanceof ye)f=Gn(i.firestore,ea),m=Hh(i._key.path),u={next:y=>{t[s]&&t[s](tA(f,i,y))},error:t[s+1],complete:t[s+2]};else{const y=Gn(i,yu);f=Gn(y.firestore,ea),m=y._query;const p=new Jg(f);u={next:T=>{t[s]&&t[s](new $s(f,p,y,T))},error:t[s+1],complete:t[s+2]},Zw(i._query)}return(function(p,T,S,C){const H=new Qg(C),J=new Gg(T,H,S);return p.asyncQueue.enqueueAndForget((async()=>jg(await Ih(p),J))),()=>{H.Nu(),p.asyncQueue.enqueueAndForget((async()=>Hg(await Ih(p),J)))}})(Jh(f),m,o,u)}function Jw(i,t){return(function(s,o){const u=new ar;return s.asyncQueue.enqueueAndForget((async()=>Z2(await uO(s),o,u))),u.promise})(Jh(i),t)}function tA(i,t,n){const s=n.docs.get(t._key),o=new Jg(i);return new Xs(i,o,t._key,s,new jl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){Ao=o})(To),Yn(new Cn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new ea(new _C(s.getProvider("auth-internal")),new TC(f,s.getProvider("app-check-internal")),(function(p,T){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new lt(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eu(p.options.projectId,T)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),dn(lE,uE,t),dn(lE,uE,"esm2020")})();const eA="@firebase/installations",tp="0.6.19";/**
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
 */const nA=1e4,iA=`w:${tp}`,rA="FIS_v2",MO="https://firebaseinstallations.googleapis.com/v1",VO=3600*1e3,PO="installations",kO="Installations";/**
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
 */const xO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},na=new is(PO,kO,xO);function sA(i){return i instanceof ei&&i.code.includes("request-failed")}/**
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
 */function aA({projectId:i}){return`${MO}/projects/${i}/installations`}function oA(i){return{token:i.token,requestStatus:2,expiresIn:UO(i.expiresIn),creationTime:Date.now()}}async function lA(i,t){const s=(await t.json()).error;return na.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function uA({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function LO(i,{refreshToken:t}){const n=uA(i);return n.append("Authorization",zO(t)),n}async function cA(i){const t=await i();return t.status>=500&&t.status<600?i():t}function UO(i){return Number(i.replace("s","000"))}function zO(i){return`${rA} ${i}`}/**
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
 */async function BO({appConfig:i,heartbeatServiceProvider:t},{fid:n}){const s=aA(i),o=uA(i),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:rA,appId:i.appId,sdkVersion:iA},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await cA(()=>fetch(s,m));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:oA(p.authToken)}}else throw await lA("Create Installation",y)}/**
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
 */function hA(i){return new Promise(t=>{setTimeout(t,i)})}/**
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
 */function qO(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const jO=/^[cdef][\w-]{21}$/,sg="";function HO(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=FO(i);return jO.test(n)?n:sg}catch{return sg}}function FO(i){return qO(i).substr(0,22)}/**
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
 */function rf(i){return`${i.appName}!${i.appId}`}/**
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
 */const fA=new Map;function dA(i,t){const n=rf(i);mA(n,t),GO(n,t)}function mA(i,t){const n=fA.get(i);if(n)for(const s of n)s(t)}function GO(i,t){const n=YO();n&&n.postMessage({key:i,fid:t}),KO()}let Qs=null;function YO(){return!Qs&&"BroadcastChannel"in self&&(Qs=new BroadcastChannel("[Firebase] FID Change"),Qs.onmessage=i=>{mA(i.data.key,i.data.fid)}),Qs}function KO(){fA.size===0&&Qs&&(Qs.close(),Qs=null)}/**
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
 */const QO="firebase-installations-database",XO=1,ia="firebase-installations-store";let Rm=null;function ep(){return Rm||(Rm=kh(QO,XO,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(ia)}}})),Rm}async function Dh(i,t){const n=rf(i),o=(await ep()).transaction(ia,"readwrite"),u=o.objectStore(ia),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&dA(i,t.fid),t}async function gA(i){const t=rf(i),s=(await ep()).transaction(ia,"readwrite");await s.objectStore(ia).delete(t),await s.done}async function sf(i,t){const n=rf(i),o=(await ep()).transaction(ia,"readwrite"),u=o.objectStore(ia),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&dA(i,m.fid),m}/**
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
 */async function np(i){let t;const n=await sf(i.appConfig,s=>{const o=$O(s),u=WO(i,o);return t=u.registrationPromise,u.installationEntry});return n.fid===sg?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function $O(i){const t=i||{fid:HO(),registrationStatus:0};return pA(t)}function WO(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(na.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=ZO(i,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:JO(i)}:{installationEntry:t}}async function ZO(i,t){try{const n=await BO(i,t);return Dh(i.appConfig,n)}catch(n){throw sA(n)&&n.customData.serverCode===409?await gA(i.appConfig):await Dh(i.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function JO(i){let t=await rT(i.appConfig);for(;t.registrationStatus===1;)await hA(100),t=await rT(i.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await np(i);return s||n}return t}function rT(i){return sf(i,t=>{if(!t)throw na.create("installation-not-found");return pA(t)})}function pA(i){return tN(i)?{fid:i.fid,registrationStatus:0}:i}function tN(i){return i.registrationStatus===1&&i.registrationTime+nA<Date.now()}/**
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
 */async function eN({appConfig:i,heartbeatServiceProvider:t},n){const s=nN(i,n),o=LO(i,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:iA,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await cA(()=>fetch(s,m));if(y.ok){const p=await y.json();return oA(p)}else throw await lA("Generate Auth Token",y)}function nN(i,{fid:t}){return`${aA(i)}/${t}/authTokens:generate`}/**
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
 */async function ip(i,t=!1){let n;const s=await sf(i.appConfig,u=>{if(!yA(u))throw na.create("not-registered");const f=u.authToken;if(!t&&sN(f))return u;if(f.requestStatus===1)return n=iN(i,t),u;{if(!navigator.onLine)throw na.create("app-offline");const m=oN(u);return n=rN(i,m),m}});return n?await n:s.authToken}async function iN(i,t){let n=await sT(i.appConfig);for(;n.authToken.requestStatus===1;)await hA(100),n=await sT(i.appConfig);const s=n.authToken;return s.requestStatus===0?ip(i,t):s}function sT(i){return sf(i,t=>{if(!yA(t))throw na.create("not-registered");const n=t.authToken;return lN(n)?{...t,authToken:{requestStatus:0}}:t})}async function rN(i,t){try{const n=await eN(i,t),s={...t,authToken:n};return await Dh(i.appConfig,s),n}catch(n){if(sA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gA(i.appConfig);else{const s={...t,authToken:{requestStatus:0}};await Dh(i.appConfig,s)}throw n}}function yA(i){return i!==void 0&&i.registrationStatus===2}function sN(i){return i.requestStatus===2&&!aN(i)}function aN(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+VO}function oN(i){const t={requestStatus:1,requestTime:Date.now()};return{...i,authToken:t}}function lN(i){return i.requestStatus===1&&i.requestTime+nA<Date.now()}/**
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
 */async function uN(i){const t=i,{installationEntry:n,registrationPromise:s}=await np(t);return s?s.catch(console.error):ip(t).catch(console.error),n.fid}/**
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
 */async function cN(i,t=!1){const n=i;return await hN(n),(await ip(n,t)).token}async function hN(i){const{registrationPromise:t}=await np(i);t&&await t}/**
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
 */function fN(i){if(!i||!i.options)throw Im("App Configuration");if(!i.name)throw Im("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!i.options[n])throw Im(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Im(i){return na.create("missing-app-config-values",{valueName:i})}/**
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
 */const _A="installations",dN="installations-internal",mN=i=>{const t=i.getProvider("app").getImmediate(),n=fN(t),s=ra(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gN=i=>{const t=i.getProvider("app").getImmediate(),n=ra(t,_A).getImmediate();return{getId:()=>uN(n),getToken:o=>cN(n,o)}};function pN(){Yn(new Cn(_A,mN,"PUBLIC")),Yn(new Cn(dN,gN,"PRIVATE"))}pN();dn(eA,tp);dn(eA,tp,"esm2020");/**
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
 */const yN="/firebase-messaging-sw.js",_N="/firebase-cloud-messaging-push-scope",vA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vN="https://fcmregistrations.googleapis.com/v1",EA="google.c.a.c_id",EN="google.c.a.c_l",TN="google.c.a.ts",wN="google.c.a.e",aT=1e4;var oT;(function(i){i[i.DATA_MESSAGE=1]="DATA_MESSAGE",i[i.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(oT||(oT={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var su;(function(i){i.PUSH_RECEIVED="push-received",i.NOTIFICATION_CLICKED="notification-clicked"})(su||(su={}));/**
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
 */function er(i){const t=new Uint8Array(i);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function AN(i){const t="=".repeat((4-i.length%4)%4),n=(i+t).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
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
 */const Cm="fcm_token_details_db",SN=5,lT="fcm_token_object_Store";async function bN(i){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(Cm))return null;let t=null;return(await kh(Cm,SN,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(lT))return;const m=f.objectStore(lT),y=await m.index("fcmSenderId").get(i);if(await m.clear(),!!y){if(o===2){const p=y;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:er(p.vapidKey)}}}else if(o===3){const p=y;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:er(p.auth),p256dh:er(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:er(p.vapidKey)}}}else if(o===4){const p=y;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:er(p.auth),p256dh:er(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:er(p.vapidKey)}}}}}})).close(),await pm(Cm),await pm("fcm_vapid_details_db"),await pm("undefined"),RN(t)?t:null}function RN(i){if(!i||!i.subscriptionOptions)return!1;const{subscriptionOptions:t}=i;return typeof i.createTime=="number"&&i.createTime>0&&typeof i.token=="string"&&i.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const IN="firebase-messaging-database",CN=1,au="firebase-messaging-store";let Dm=null;function TA(){return Dm||(Dm=kh(IN,CN,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(au)}}})),Dm}async function DN(i){const t=wA(i),s=await(await TA()).transaction(au).objectStore(au).get(t);if(s)return s;{const o=await bN(i.appConfig.senderId);if(o)return await rp(i,o),o}}async function rp(i,t){const n=wA(i),o=(await TA()).transaction(au,"readwrite");return await o.objectStore(au).put(t,n),await o.done,t}function wA({appConfig:i}){return i.appId}/**
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
 */const ON={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Rn=new is("messaging","Messaging",ON);/**
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
 */async function NN(i,t){const n=await ap(i),s=AA(t),o={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(sp(i.appConfig),o)).json()}catch(f){throw Rn.create("token-subscribe-failed",{errorInfo:f?.toString()})}if(u.error){const f=u.error.message;throw Rn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw Rn.create("token-subscribe-no-token");return u.token}async function MN(i,t){const n=await ap(i),s=AA(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${sp(i.appConfig)}/${t.token}`,o)).json()}catch(f){throw Rn.create("token-update-failed",{errorInfo:f?.toString()})}if(u.error){const f=u.error.message;throw Rn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw Rn.create("token-update-no-token");return u.token}async function VN(i,t){const s={method:"DELETE",headers:await ap(i)};try{const u=await(await fetch(`${sp(i.appConfig)}/${t}`,s)).json();if(u.error){const f=u.error.message;throw Rn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw Rn.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function sp({projectId:i}){return`${vN}/projects/${i}/registrations`}async function ap({appConfig:i,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function AA({p256dh:i,auth:t,endpoint:n,vapidKey:s}){const o={web:{endpoint:n,auth:t,p256dh:i}};return s!==vA&&(o.web.applicationPubKey=s),o}/**
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
 */const PN=10080*60*1e3;async function kN(i){const t=await LN(i.swRegistration,i.vapidKey),n={vapidKey:i.vapidKey,swScope:i.swRegistration.scope,endpoint:t.endpoint,auth:er(t.getKey("auth")),p256dh:er(t.getKey("p256dh"))},s=await DN(i.firebaseDependencies);if(s){if(UN(s.subscriptionOptions,n))return Date.now()>=s.createTime+PN?xN(i,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await VN(i.firebaseDependencies,s.token)}catch(o){console.warn(o)}return uT(i.firebaseDependencies,n)}else return uT(i.firebaseDependencies,n)}async function xN(i,t){try{const n=await MN(i.firebaseDependencies,t),s={...t,token:n,createTime:Date.now()};return await rp(i.firebaseDependencies,s),n}catch(n){throw n}}async function uT(i,t){const s={token:await NN(i,t),createTime:Date.now(),subscriptionOptions:t};return await rp(i,s),s.token}async function LN(i,t){const n=await i.pushManager.getSubscription();return n||i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:AN(t)})}function UN(i,t){const n=t.vapidKey===i.vapidKey,s=t.endpoint===i.endpoint,o=t.auth===i.auth,u=t.p256dh===i.p256dh;return n&&s&&o&&u}/**
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
 */function cT(i){const t={from:i.from,collapseKey:i.collapse_key,messageId:i.fcmMessageId};return zN(t,i),BN(t,i),qN(t,i),t}function zN(i,t){if(!t.notification)return;i.notification={};const n=t.notification.title;n&&(i.notification.title=n);const s=t.notification.body;s&&(i.notification.body=s);const o=t.notification.image;o&&(i.notification.image=o);const u=t.notification.icon;u&&(i.notification.icon=u)}function BN(i,t){t.data&&(i.data=t.data)}function qN(i,t){if(!t.fcmOptions&&!t.notification?.click_action)return;i.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(i.fcmOptions.link=n);const s=t.fcmOptions?.analytics_label;s&&(i.fcmOptions.analyticsLabel=s)}/**
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
 */function jN(i){return typeof i=="object"&&!!i&&EA in i}/**
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
 */function HN(i){if(!i||!i.options)throw Om("App Configuration Object");if(!i.name)throw Om("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=i;for(const s of t)if(!n[s])throw Om(s);return{appName:i.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Om(i){return Rn.create("missing-app-config-values",{valueName:i})}/**
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
 */class FN{constructor(t,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=HN(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function GN(i){try{i.swRegistration=await navigator.serviceWorker.register(yN,{scope:_N}),i.swRegistration.update().catch(()=>{}),await YN(i.swRegistration)}catch(t){throw Rn.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function YN(i){return new Promise((t,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${aT} ms`)),aT),o=i.installing||i.waiting;i.active?(clearTimeout(s),t()):o?o.onstatechange=u=>{u.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(s),t())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
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
 */async function KN(i,t){if(!t&&!i.swRegistration&&await GN(i),!(!t&&i.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw Rn.create("invalid-sw-registration");i.swRegistration=t}}/**
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
 */async function QN(i,t){t?i.vapidKey=t:i.vapidKey||(i.vapidKey=vA)}/**
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
 */async function XN(i,t){if(!navigator)throw Rn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Rn.create("permission-blocked");return await QN(i,t?.vapidKey),await KN(i,t?.serviceWorkerRegistration),kN(i)}/**
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
 */async function $N(i,t,n){const s=WN(t);(await i.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[EA],message_name:n[EN],message_time:n[TN],message_device_time:Math.floor(Date.now()/1e3)})}function WN(i){switch(i){case su.NOTIFICATION_CLICKED:return"notification_open";case su.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function ZN(i,t){const n=t.data;if(!n.isFirebaseMessaging)return;i.onMessageHandler&&n.messageType===su.PUSH_RECEIVED&&(typeof i.onMessageHandler=="function"?i.onMessageHandler(cT(n)):i.onMessageHandler.next(cT(n)));const s=n.data;jN(s)&&s[wN]==="1"&&await $N(i,n.messageType,s)}const hT="@firebase/messaging",fT="0.12.23";/**
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
 */const JN=i=>{const t=new FN(i.getProvider("app").getImmediate(),i.getProvider("installations-internal").getImmediate(),i.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ZN(t,n)),t},tM=i=>{const t=i.getProvider("messaging").getImmediate();return{getToken:s=>XN(t,s)}};function eM(){Yn(new Cn("messaging",JN,"PUBLIC")),Yn(new Cn("messaging-internal",tM,"PRIVATE")),dn(hT,fT),dn(hT,fT,"esm2020")}eM();/**
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
 */const Oh="analytics",nM="firebase_id",iM="origin",rM=60*1e3,sM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",op="https://www.googletagmanager.com/gtag/js";/**
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
 */const mn=new Ph("@firebase/analytics");/**
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
 */const aM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},In=new is("analytics","Analytics",aM);/**
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
 */function oM(i){if(!i.startsWith(op)){const t=In.create("invalid-gtag-resource",{gtagURL:i});return mn.warn(t.message),""}return i}function SA(i){return Promise.all(i.map(t=>t.catch(n=>n)))}function lM(i,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(i,t)),n}function uM(i,t){const n=lM("firebase-js-sdk-policy",{createScriptURL:oM}),s=document.createElement("script"),o=`${op}?l=${i}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function cM(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function hM(i,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const y=(await SA(n)).find(p=>p.measurementId===o);y&&await t[y.appId]}}catch(m){mn.error(m)}i("config",o,u)}async function fM(i,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await SA(n);for(const y of f){const p=m.find(S=>S.measurementId===y),T=p&&t[p.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),i("event",s,o||{})}catch(u){mn.error(u)}}function dM(i,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,y]=f;await fM(i,t,n,m,y)}else if(u==="config"){const[m,y]=f;await hM(i,t,n,s,m,y)}else if(u==="consent"){const[m,y]=f;i("consent",m,y)}else if(u==="get"){const[m,y,p]=f;i("get",m,y,p)}else if(u==="set"){const[m]=f;i("set",m)}else i(u,...f)}catch(m){mn.error(m)}}return o}function mM(i,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=dM(u,i,t,n),{gtagCore:u,wrappedGtag:window[o]}}function gM(i){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(op)&&n.src.includes(i))return n;return null}/**
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
 */const pM=30,yM=1e3;class _M{constructor(t={},n=yM){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bA=new _M;function vM(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function EM(i){const{appId:t,apiKey:n}=i,s={method:"GET",headers:vM(n)},o=sM.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw In.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function TM(i,t=bA,n){const{appId:s,apiKey:o,measurementId:u}=i.options;if(!s)throw In.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw In.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new SM;return setTimeout(async()=>{m.abort()},rM),RA({appId:s,apiKey:o,measurementId:u},f,m,t)}async function RA(i,{throttleEndTimeMillis:t,backoffCount:n},s,o=bA){const{appId:u,measurementId:f}=i;try{await wM(s,t)}catch(m){if(f)return mn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await EM(i);return o.deleteThrottleMetadata(u),m}catch(m){const y=m;if(!AM(y)){if(o.deleteThrottleMetadata(u),f)return mn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:f};throw m}const p=Number(y?.customData?.httpStatus)===503?Vv(n,o.intervalMillis,pM):Vv(n,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return o.setThrottleMetadata(u,T),mn.debug(`Calling attemptFetch again in ${p} millis`),RA(i,T,s,o)}}function wM(i,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);i.addEventListener(()=>{clearTimeout(u),s(In.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function AM(i){if(!(i instanceof ei)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class SM{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function bM(i,t,n,s,o){if(o&&o.global){i("event",n,s);return}else{const u=await t,f={...s,send_to:u};i("event",n,f)}}/**
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
 */async function RM(){if(lg())try{await ug()}catch(i){return mn.warn(In.create("indexeddb-unavailable",{errorInfo:i?.toString()}).message),!1}else return mn.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IM(i,t,n,s,o,u,f){const m=TM(i);m.then(C=>{n[C.measurementId]=C.appId,i.options.measurementId&&C.measurementId!==i.options.measurementId&&mn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>mn.error(C)),t.push(m);const y=RM().then(C=>{if(C)return s.getId()}),[p,T]=await Promise.all([m,y]);gM(u)||uM(u,p.measurementId),o("js",new Date);const S=f?.config??{};return S[iM]="firebase",S.update=!0,T!=null&&(S[nM]=T),o("config",p.measurementId,S),p.measurementId}/**
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
 */class CM{constructor(t){this.app=t}_delete(){return delete Xl[this.app.options.appId],Promise.resolve()}}let Xl={},dT=[];const mT={};let Nm="dataLayer",DM="gtag",gT,IA,pT=!1;function OM(){const i=[];if(og()&&i.push("This is a browser extension environment."),BT()||i.push("Cookies are not available."),i.length>0){const t=i.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=In.create("invalid-analytics-context",{errorInfo:t});mn.warn(n.message)}}function NM(i,t,n){OM();const s=i.options.appId;if(!s)throw In.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)mn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw In.create("no-api-key");if(Xl[s]!=null)throw In.create("already-exists",{id:s});if(!pT){cM(Nm);const{wrappedGtag:u,gtagCore:f}=mM(Xl,dT,mT,Nm,DM);IA=u,gT=f,pT=!0}return Xl[s]=IM(i,dT,mT,t,gT,Nm,n),new CM(i)}function MM(i=hg()){i=be(i);const t=ra(i,Oh);return t.isInitialized()?t.getImmediate():VM(i)}function VM(i,t={}){const n=ra(i,Oh);if(n.isInitialized()){const o=n.getImmediate();if($r(t,n.getOptions()))return o;throw In.create("already-initialized")}return n.initialize({options:t})}async function PM(){if(og()||!BT()||!lg())return!1;try{return await ug()}catch{return!1}}function kM(i,t,n,s){i=be(i),bM(IA,Xl[i.app.options.appId],t,n,s).catch(o=>mn.error(o))}const yT="@firebase/analytics",_T="0.10.18";function xM(){Yn(new Cn(Oh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return NM(s,o,n)},"PUBLIC")),Yn(new Cn("analytics-internal",i,"PRIVATE")),dn(yT,_T),dn(yT,_T,"esm2020");function i(t){try{const n=t.getProvider(Oh).getImmediate();return{logEvent:(s,o,u)=>kM(n,s,o,u)}}catch(n){throw In.create("interop-component-reg-failed",{reason:n})}}}xM();const LM={apiKey:"AIzaSyAOqpWe-g6Zm0sppRTTM4O7cpPB25xvptY",authDomain:"agenda-ede23.firebaseapp.com",projectId:"agenda-ede23",storageBucket:"agenda-ede23.appspot.com",messagingSenderId:"947628541073",appId:"1:947628541073:web:396d8a5c07c5a32f6a6b30",measurementId:"G-NWX9FLN4KK"},lp=HT(LM);PM().then(i=>{i&&MM(lp)});const vo=mC(lp),vT=gO(lp);function UM({children:i}){const[t,n]=le.useState(null),[s,o]=le.useState(!1);return le.useEffect(()=>nI(vo,f=>{n(f),o(!0)}),[]),s?t?it.jsxs("div",{children:[it.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginBottom:8},children:[it.jsxs("span",{style:{opacity:.7},children:["👋 ",t.email]}),it.jsx("button",{className:"btn",onClick:()=>iI(vo),children:"Logout"})]}),i]}):it.jsx(zM,{}):it.jsx("div",{style:{padding:24},children:"Caricamento…"})}function zM(){const[i,t]=le.useState(""),[n,s]=le.useState(""),[o,u]=le.useState("login"),[f,m]=le.useState(""),[y,p]=le.useState(!1);async function T(S){S.preventDefault(),m(""),p(!0);try{o==="login"?await JR(vo,i.trim(),n):await ZR(vo,i.trim(),n)}catch(C){console.error("Auth error:",C),m(C.code||C.message||String(C))}finally{p(!1)}}return it.jsxs("form",{onSubmit:T,style:{maxWidth:360,margin:"60px auto",display:"grid",gap:10},children:[it.jsx("h3",{style:{textAlign:"center"},children:o==="login"?"Accedi":"Crea account"}),it.jsx("input",{className:"field",placeholder:"Email",value:i,onChange:S=>t(S.target.value)}),it.jsx("input",{className:"field",placeholder:"Password",type:"password",value:n,onChange:S=>s(S.target.value)}),f&&it.jsxs("div",{style:{color:"#b06185",fontSize:13},children:["Errore: ",f]}),it.jsx("button",{className:"btn",type:"submit",disabled:y,children:y?"Attendi…":o==="login"?"Login":"Registrati"}),it.jsx("button",{type:"button",className:"link",onClick:()=>u(S=>S==="login"?"signup":"login"),children:o==="login"?"Non hai un account? Registrati":"Hai già un account? Accedi"})]})}const CA=6048e5,BM=864e5,ET=Symbol.for("constructDateFrom");function Dn(i,t){return typeof i=="function"?i(t):i&&typeof i=="object"&&ET in i?i[ET](t):i instanceof Date?new i.constructor(t):new Date(t)}function en(i,t){return Dn(t||i,i)}function Mm(i,t,n){const s=en(i,n?.in);return isNaN(t)?Dn(i,NaN):(t&&s.setDate(s.getDate()+t),s)}function DA(i,t,n){const s=en(i,n?.in);if(isNaN(t))return Dn(i,NaN);if(!t)return s;const o=s.getDate(),u=Dn(i,s.getTime());u.setMonth(s.getMonth()+t+1,0);const f=u.getDate();return o>=f?u:(s.setFullYear(u.getFullYear(),u.getMonth(),o),s)}let qM={};function _u(){return qM}function hr(i,t){const n=_u(),s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=en(i,t?.in),u=o.getDay(),f=(u<s?7:0)+u-s;return o.setDate(o.getDate()-f),o.setHours(0,0,0,0),o}function Nh(i,t){return hr(i,{...t,weekStartsOn:1})}function OA(i,t){const n=en(i,t?.in),s=n.getFullYear(),o=Dn(n,0);o.setFullYear(s+1,0,4),o.setHours(0,0,0,0);const u=Nh(o),f=Dn(n,0);f.setFullYear(s,0,4),f.setHours(0,0,0,0);const m=Nh(f);return n.getTime()>=u.getTime()?s+1:n.getTime()>=m.getTime()?s:s-1}function TT(i){const t=en(i),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+i-+n}function af(i,...t){const n=Dn.bind(null,i||t.find(s=>typeof s=="object"));return t.map(n)}function Mh(i,t){const n=en(i,t?.in);return n.setHours(0,0,0,0),n}function jM(i,t,n){const[s,o]=af(n?.in,i,t),u=Mh(s),f=Mh(o),m=+u-TT(u),y=+f-TT(f);return Math.round((m-y)/BM)}function HM(i,t){const n=OA(i,t),s=Dn(i,0);return s.setFullYear(n,0,4),s.setHours(0,0,0,0),Nh(s)}function FM(i){return Dn(i,Date.now())}function GM(i,t,n){const[s,o]=af(n?.in,i,t);return+Mh(s)==+Mh(o)}function YM(i){return i instanceof Date||typeof i=="object"&&Object.prototype.toString.call(i)==="[object Date]"}function KM(i){return!(!YM(i)&&typeof i!="number"||isNaN(+en(i)))}function wT(i,t){const n=en(i,t?.in),s=n.getMonth();return n.setFullYear(n.getFullYear(),s+1,0),n.setHours(23,59,59,999),n}function AT(i,t){const n=en(i,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function QM(i,t){const n=en(i,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ST(i,t){const n=_u(),s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=en(i,t?.in),u=o.getDay(),f=(u<s?-7:0)+6-(u-s);return o.setDate(o.getDate()+f),o.setHours(23,59,59,999),o}const XM={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$M=(i,t,n)=>{let s;const o=XM[i];return typeof o=="string"?s=o:t===1?s=o.one:s=o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+s:s+" ago":s};function ho(i){return(t={})=>{const n=t.width?String(t.width):i.defaultWidth;return i.formats[n]||i.formats[i.defaultWidth]}}const WM={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ZM={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},JM={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},tV={date:ho({formats:WM,defaultWidth:"full"}),time:ho({formats:ZM,defaultWidth:"full"}),dateTime:ho({formats:JM,defaultWidth:"full"})},eV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nV=(i,t,n,s)=>eV[i];function vi(i){return(t,n)=>{const s=n?.context?String(n.context):"standalone";let o;if(s==="formatting"&&i.formattingValues){const f=i.defaultFormattingWidth||i.defaultWidth,m=n?.width?String(n.width):f;o=i.formattingValues[m]||i.formattingValues[f]}else{const f=i.defaultWidth,m=n?.width?String(n.width):i.defaultWidth;o=i.values[m]||i.values[f]}const u=i.argumentCallback?i.argumentCallback(t):t;return o[u]}}const iV={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},sV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},aV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},oV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},lV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},uV=(i,t)=>{const n=Number(i),s=n%100;if(s>20||s<10)switch(s%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},cV={ordinalNumber:uV,era:vi({values:iV,defaultWidth:"wide"}),quarter:vi({values:rV,defaultWidth:"wide",argumentCallback:i=>i-1}),month:vi({values:sV,defaultWidth:"wide"}),day:vi({values:aV,defaultWidth:"wide"}),dayPeriod:vi({values:oV,defaultWidth:"wide",formattingValues:lV,defaultFormattingWidth:"wide"})};function Ei(i){return(t,n={})=>{const s=n.width,o=s&&i.matchPatterns[s]||i.matchPatterns[i.defaultMatchWidth],u=t.match(o);if(!u)return null;const f=u[0],m=s&&i.parsePatterns[s]||i.parsePatterns[i.defaultParseWidth],y=Array.isArray(m)?fV(m,S=>S.test(f)):hV(m,S=>S.test(f));let p;p=i.valueCallback?i.valueCallback(y):y,p=n.valueCallback?n.valueCallback(p):p;const T=t.slice(f.length);return{value:p,rest:T}}}function hV(i,t){for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n)&&t(i[n]))return n}function fV(i,t){for(let n=0;n<i.length;n++)if(t(i[n]))return n}function NA(i){return(t,n={})=>{const s=t.match(i.matchPattern);if(!s)return null;const o=s[0],u=t.match(i.parsePattern);if(!u)return null;let f=i.valueCallback?i.valueCallback(u[0]):u[0];f=n.valueCallback?n.valueCallback(f):f;const m=t.slice(o.length);return{value:f,rest:m}}}const dV=/^(\d+)(th|st|nd|rd)?/i,mV=/\d+/i,gV={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pV={any:[/^b/i,/^(a|c)/i]},yV={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_V={any:[/1/i,/2/i,/3/i,/4/i]},vV={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},EV={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},TV={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},wV={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},AV={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},SV={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},bV={ordinalNumber:NA({matchPattern:dV,parsePattern:mV,valueCallback:i=>parseInt(i,10)}),era:Ei({matchPatterns:gV,defaultMatchWidth:"wide",parsePatterns:pV,defaultParseWidth:"any"}),quarter:Ei({matchPatterns:yV,defaultMatchWidth:"wide",parsePatterns:_V,defaultParseWidth:"any",valueCallback:i=>i+1}),month:Ei({matchPatterns:vV,defaultMatchWidth:"wide",parsePatterns:EV,defaultParseWidth:"any"}),day:Ei({matchPatterns:TV,defaultMatchWidth:"wide",parsePatterns:wV,defaultParseWidth:"any"}),dayPeriod:Ei({matchPatterns:AV,defaultMatchWidth:"any",parsePatterns:SV,defaultParseWidth:"any"})},RV={code:"en-US",formatDistance:$M,formatLong:tV,formatRelative:nV,localize:cV,match:bV,options:{weekStartsOn:0,firstWeekContainsDate:1}};function IV(i,t){const n=en(i,t?.in);return jM(n,QM(n))+1}function CV(i,t){const n=en(i,t?.in),s=+Nh(n)-+HM(n);return Math.round(s/CA)+1}function MA(i,t){const n=en(i,t?.in),s=n.getFullYear(),o=_u(),u=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,f=Dn(t?.in||i,0);f.setFullYear(s+1,0,u),f.setHours(0,0,0,0);const m=hr(f,t),y=Dn(t?.in||i,0);y.setFullYear(s,0,u),y.setHours(0,0,0,0);const p=hr(y,t);return+n>=+m?s+1:+n>=+p?s:s-1}function DV(i,t){const n=_u(),s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=MA(i,t),u=Dn(t?.in||i,0);return u.setFullYear(o,0,s),u.setHours(0,0,0,0),hr(u,t)}function OV(i,t){const n=en(i,t?.in),s=+hr(n,t)-+DV(n,t);return Math.round(s/CA)+1}function Kt(i,t){const n=i<0?"-":"",s=Math.abs(i).toString().padStart(t,"0");return n+s}const qr={y(i,t){const n=i.getFullYear(),s=n>0?n:1-n;return Kt(t==="yy"?s%100:s,t.length)},M(i,t){const n=i.getMonth();return t==="M"?String(n+1):Kt(n+1,2)},d(i,t){return Kt(i.getDate(),t.length)},a(i,t){const n=i.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(i,t){return Kt(i.getHours()%12||12,t.length)},H(i,t){return Kt(i.getHours(),t.length)},m(i,t){return Kt(i.getMinutes(),t.length)},s(i,t){return Kt(i.getSeconds(),t.length)},S(i,t){const n=t.length,s=i.getMilliseconds(),o=Math.trunc(s*Math.pow(10,n-3));return Kt(o,t.length)}},eo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},bT={G:function(i,t,n){const s=i.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(s,{width:"abbreviated"});case"GGGGG":return n.era(s,{width:"narrow"});case"GGGG":default:return n.era(s,{width:"wide"})}},y:function(i,t,n){if(t==="yo"){const s=i.getFullYear(),o=s>0?s:1-s;return n.ordinalNumber(o,{unit:"year"})}return qr.y(i,t)},Y:function(i,t,n,s){const o=MA(i,s),u=o>0?o:1-o;if(t==="YY"){const f=u%100;return Kt(f,2)}return t==="Yo"?n.ordinalNumber(u,{unit:"year"}):Kt(u,t.length)},R:function(i,t){const n=OA(i);return Kt(n,t.length)},u:function(i,t){const n=i.getFullYear();return Kt(n,t.length)},Q:function(i,t,n){const s=Math.ceil((i.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return Kt(s,2);case"Qo":return n.ordinalNumber(s,{unit:"quarter"});case"QQQ":return n.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(s,{width:"wide",context:"formatting"})}},q:function(i,t,n){const s=Math.ceil((i.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return Kt(s,2);case"qo":return n.ordinalNumber(s,{unit:"quarter"});case"qqq":return n.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(s,{width:"wide",context:"standalone"})}},M:function(i,t,n){const s=i.getMonth();switch(t){case"M":case"MM":return qr.M(i,t);case"Mo":return n.ordinalNumber(s+1,{unit:"month"});case"MMM":return n.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(s,{width:"wide",context:"formatting"})}},L:function(i,t,n){const s=i.getMonth();switch(t){case"L":return String(s+1);case"LL":return Kt(s+1,2);case"Lo":return n.ordinalNumber(s+1,{unit:"month"});case"LLL":return n.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(s,{width:"wide",context:"standalone"})}},w:function(i,t,n,s){const o=OV(i,s);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):Kt(o,t.length)},I:function(i,t,n){const s=CV(i);return t==="Io"?n.ordinalNumber(s,{unit:"week"}):Kt(s,t.length)},d:function(i,t,n){return t==="do"?n.ordinalNumber(i.getDate(),{unit:"date"}):qr.d(i,t)},D:function(i,t,n){const s=IV(i);return t==="Do"?n.ordinalNumber(s,{unit:"dayOfYear"}):Kt(s,t.length)},E:function(i,t,n){const s=i.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(s,{width:"short",context:"formatting"});case"EEEE":default:return n.day(s,{width:"wide",context:"formatting"})}},e:function(i,t,n,s){const o=i.getDay(),u=(o-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(u);case"ee":return Kt(u,2);case"eo":return n.ordinalNumber(u,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(i,t,n,s){const o=i.getDay(),u=(o-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(u);case"cc":return Kt(u,t.length);case"co":return n.ordinalNumber(u,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(i,t,n){const s=i.getDay(),o=s===0?7:s;switch(t){case"i":return String(o);case"ii":return Kt(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(s,{width:"short",context:"formatting"});case"iiii":default:return n.day(s,{width:"wide",context:"formatting"})}},a:function(i,t,n){const o=i.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(i,t,n){const s=i.getHours();let o;switch(s===12?o=eo.noon:s===0?o=eo.midnight:o=s/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(i,t,n){const s=i.getHours();let o;switch(s>=17?o=eo.evening:s>=12?o=eo.afternoon:s>=4?o=eo.morning:o=eo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(i,t,n){if(t==="ho"){let s=i.getHours()%12;return s===0&&(s=12),n.ordinalNumber(s,{unit:"hour"})}return qr.h(i,t)},H:function(i,t,n){return t==="Ho"?n.ordinalNumber(i.getHours(),{unit:"hour"}):qr.H(i,t)},K:function(i,t,n){const s=i.getHours()%12;return t==="Ko"?n.ordinalNumber(s,{unit:"hour"}):Kt(s,t.length)},k:function(i,t,n){let s=i.getHours();return s===0&&(s=24),t==="ko"?n.ordinalNumber(s,{unit:"hour"}):Kt(s,t.length)},m:function(i,t,n){return t==="mo"?n.ordinalNumber(i.getMinutes(),{unit:"minute"}):qr.m(i,t)},s:function(i,t,n){return t==="so"?n.ordinalNumber(i.getSeconds(),{unit:"second"}):qr.s(i,t)},S:function(i,t){return qr.S(i,t)},X:function(i,t,n){const s=i.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return IT(s);case"XXXX":case"XX":return Ys(s);case"XXXXX":case"XXX":default:return Ys(s,":")}},x:function(i,t,n){const s=i.getTimezoneOffset();switch(t){case"x":return IT(s);case"xxxx":case"xx":return Ys(s);case"xxxxx":case"xxx":default:return Ys(s,":")}},O:function(i,t,n){const s=i.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+RT(s,":");case"OOOO":default:return"GMT"+Ys(s,":")}},z:function(i,t,n){const s=i.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+RT(s,":");case"zzzz":default:return"GMT"+Ys(s,":")}},t:function(i,t,n){const s=Math.trunc(+i/1e3);return Kt(s,t.length)},T:function(i,t,n){return Kt(+i,t.length)}};function RT(i,t=""){const n=i>0?"-":"+",s=Math.abs(i),o=Math.trunc(s/60),u=s%60;return u===0?n+String(o):n+String(o)+t+Kt(u,2)}function IT(i,t){return i%60===0?(i>0?"-":"+")+Kt(Math.abs(i)/60,2):Ys(i,t)}function Ys(i,t=""){const n=i>0?"-":"+",s=Math.abs(i),o=Kt(Math.trunc(s/60),2),u=Kt(s%60,2);return n+o+t+u}const CT=(i,t)=>{switch(i){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},VA=(i,t)=>{switch(i){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},NV=(i,t)=>{const n=i.match(/(P+)(p+)?/)||[],s=n[1],o=n[2];if(!o)return CT(i,t);let u;switch(s){case"P":u=t.dateTime({width:"short"});break;case"PP":u=t.dateTime({width:"medium"});break;case"PPP":u=t.dateTime({width:"long"});break;case"PPPP":default:u=t.dateTime({width:"full"});break}return u.replace("{{date}}",CT(s,t)).replace("{{time}}",VA(o,t))},MV={p:VA,P:NV},VV=/^D+$/,PV=/^Y+$/,kV=["D","DD","YY","YYYY"];function xV(i){return VV.test(i)}function LV(i){return PV.test(i)}function UV(i,t,n){const s=zV(i,t,n);if(console.warn(s),kV.includes(i))throw new RangeError(s)}function zV(i,t,n){const s=i[0]==="Y"?"years":"days of the month";return`Use \`${i.toLowerCase()}\` instead of \`${i}\` (in \`${t}\`) for formatting ${s} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const BV=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qV=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jV=/^'([^]*?)'?$/,HV=/''/g,FV=/[a-zA-Z]/;function Xc(i,t,n){const s=_u(),o=n?.locale??s.locale??RV,u=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,f=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,m=en(i,n?.in);if(!KM(m))throw new RangeError("Invalid time value");let y=t.match(qV).map(T=>{const S=T[0];if(S==="p"||S==="P"){const C=MV[S];return C(T,o.formatLong)}return T}).join("").match(BV).map(T=>{if(T==="''")return{isToken:!1,value:"'"};const S=T[0];if(S==="'")return{isToken:!1,value:GV(T)};if(bT[S])return{isToken:!0,value:T};if(S.match(FV))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:T}});o.localize.preprocessor&&(y=o.localize.preprocessor(m,y));const p={firstWeekContainsDate:u,weekStartsOn:f,locale:o};return y.map(T=>{if(!T.isToken)return T.value;const S=T.value;(!n?.useAdditionalWeekYearTokens&&LV(S)||!n?.useAdditionalDayOfYearTokens&&xV(S))&&UV(S,t,String(i));const C=bT[S[0]];return C(m,S,o.localize,p)}).join("")}function GV(i){const t=i.match(jV);return t?t[1].replace(HV,"'"):i}function DT(i,t,n){const[s,o]=af(n?.in,i,t);return+hr(s,n)==+hr(o,n)}function YV(i,t,n){const[s,o]=af(n?.in,i,t);return s.getFullYear()===o.getFullYear()&&s.getMonth()===o.getMonth()}function KV(i,t){return GM(Dn(i,i),FM(i))}function QV(i,t,n){return DA(i,-1,n)}const XV={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXWeeks:{one:"circa una settimana",other:"circa {{count}} settimane"},xWeeks:{one:"una settimana",other:"{{count}} settimane"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}},$V=(i,t,n)=>{let s;const o=XV[i];return typeof o=="string"?s=o:t===1?s=o.one:s=o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"tra "+s:s+" fa":s},WV={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},ZV={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},JV={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},tP={date:ho({formats:WV,defaultWidth:"full"}),time:ho({formats:ZV,defaultWidth:"full"}),dateTime:ho({formats:JV,defaultWidth:"full"})},up=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function eP(i){switch(i){case 0:return"'domenica scorsa alle' p";default:return"'"+up[i]+" scorso alle' p"}}function OT(i){return"'"+up[i]+" alle' p"}function nP(i){switch(i){case 0:return"'domenica prossima alle' p";default:return"'"+up[i]+" prossimo alle' p"}}const iP={lastWeek:(i,t,n)=>{const s=i.getDay();return DT(i,t,n)?OT(s):eP(s)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:(i,t,n)=>{const s=i.getDay();return DT(i,t,n)?OT(s):nP(s)},other:"P"},rP=(i,t,n,s)=>{const o=iP[i];return typeof o=="function"?o(t,n,s):o},sP={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},aP={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},oP={narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},lP={narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},uP={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},cP={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}},hP=(i,t)=>{const n=Number(i);return String(n)},fP={ordinalNumber:hP,era:vi({values:sP,defaultWidth:"wide"}),quarter:vi({values:aP,defaultWidth:"wide",argumentCallback:i=>i-1}),month:vi({values:oP,defaultWidth:"wide"}),day:vi({values:lP,defaultWidth:"wide"}),dayPeriod:vi({values:uP,defaultWidth:"wide",formattingValues:cP,defaultFormattingWidth:"wide"})},dP=/^(\d+)(º)?/i,mP=/\d+/i,gP={narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},pP={any:[/^a/i,/^(d|e)/i]},yP={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},_P={any:[/1/i,/2/i,/3/i,/4/i]},vP={narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},EP={narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},TP={narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},wP={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},AP={narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},SP={any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},bP={ordinalNumber:NA({matchPattern:dP,parsePattern:mP,valueCallback:i=>parseInt(i,10)}),era:Ei({matchPatterns:gP,defaultMatchWidth:"wide",parsePatterns:pP,defaultParseWidth:"any"}),quarter:Ei({matchPatterns:yP,defaultMatchWidth:"wide",parsePatterns:_P,defaultParseWidth:"any",valueCallback:i=>i+1}),month:Ei({matchPatterns:vP,defaultMatchWidth:"wide",parsePatterns:EP,defaultParseWidth:"any"}),day:Ei({matchPatterns:TP,defaultMatchWidth:"wide",parsePatterns:wP,defaultParseWidth:"any"}),dayPeriod:Ei({matchPatterns:AP,defaultMatchWidth:"any",parsePatterns:SP,defaultParseWidth:"any"})},$c={code:"it",formatDistance:$V,formatLong:tP,formatRelative:rP,localize:fP,match:bP,options:{weekStartsOn:1,firstWeekContainsDate:4}},Sn=i=>{const t=i.getFullYear(),n=String(i.getMonth()+1).padStart(2,"0"),s=String(i.getDate()).padStart(2,"0");return`${t}-${n}-${s}`},RP=i=>{const[t,n,s]=i.split("-").map(Number);return new Date(t,n-1,s)},Wc=(i,t)=>i.hour-t.hour||(i.minute??0)-(t.minute??0);function IP(){const[i,t]=le.useState("month"),[n,s]=le.useState(new Date),[o,u]=le.useState(new Date),[f,m]=le.useState({}),[y,p]=le.useState({todos:[],events:[]}),[T,S]=le.useState(null),[C,H]=le.useState(""),[J,st]=le.useState(""),[et,Et]=le.useState("08:00"),[gt,ut]=le.useState(""),Dt=le.useRef(null),Tt=Xc(n,"MMMM yyyy",{locale:$c}),zt=Xc(o,"EEEE d MMMM yyyy",{locale:$c}),V=le.useMemo(()=>{const P=hr(AT(n),{weekStartsOn:1}),K=ST(wT(n),{weekStartsOn:1}),Z=[];for(let tt=P;tt<=K;tt=Mm(tt,1))Z.push(tt);return Z},[n]),A=vo.currentUser,R=P=>mO(vT,"users",A.uid,"days",P);async function N(P){(await CO(R(P))).exists()||await OO(R(P),{date:P,todos:[],events:[]},{merge:!0})}async function M(){if(!A)return;const P=hr(AT(n),{weekStartsOn:1}),K=ST(wT(n),{weekStartsOn:1}),Z=Sn(P),tt=Sn(K),dt=dO(vT,"users",A.uid,"days"),Jt=await DO(dt),Ot={};Jt.forEach(ze=>{const _e=ze.id;if(_e>=Z&&_e<=tt){const on=ze.data()||{};Ot[_e]={todos:Array.isArray(on.todos)?on.todos:[],events:(Array.isArray(on.events)?on.events:[]).slice().sort(Wc)}}}),m(Ot)}function x(P){A&&(Dt.current&&(Dt.current(),Dt.current=null),Dt.current=NO(R(P),K=>{const Z=K.data()||{};p({todos:Array.isArray(Z.todos)?Z.todos:[],events:(Array.isArray(Z.events)?Z.events:[]).slice().sort(Wc)})}))}le.useEffect(()=>{A&&M().catch(P=>ut(P.code||P.message))},[A,n]),le.useEffect(()=>{if(A)return x(Sn(o)),()=>{Dt.current&&Dt.current()}},[A,o]);const I=P=>f[P]?.todos??[],re=P=>(f[P]?.events??[]).slice().sort(Wc);async function ee(P,K){if(!(!A||!K.trim()))try{await N(P);const Z=[...I(P),{id:crypto.randomUUID(),text:K,done:!1}];await to(R(P),{todos:Z}),m(tt=>({...tt,[P]:{...tt[P]||{},todos:Z,events:tt[P]?.events??[]}})),P===Sn(o)&&p(tt=>({...tt,todos:Z}))}catch(Z){ut(Z.code||Z.message)}}async function F(P,K){if(A)try{const Z=I(P).map(tt=>tt.id===K?{...tt,done:!tt.done}:tt);await to(R(P),{todos:Z}),m(tt=>({...tt,[P]:{...tt[P]||{},todos:Z,events:tt[P]?.events??[]}})),P===Sn(o)&&p(tt=>({...tt,todos:Z}))}catch(Z){ut(Z.code||Z.message)}}async function rt(P,K){if(A)try{const Z=I(P).filter(tt=>tt.id!==K);await to(R(P),{todos:Z}),m(tt=>({...tt,[P]:{...tt[P]||{},todos:Z,events:tt[P]?.events??[]}})),P===Sn(o)&&p(tt=>({...tt,todos:Z}))}catch(Z){ut(Z.code||Z.message)}}async function ct(P,K,Z){if(!(!A||!Z.trim()||!K))try{await N(P);const[tt,dt]=K.split(":").map(Number),Jt=[...re(P),{id:crypto.randomUUID(),text:Z,hour:tt,minute:dt,done:!1}].sort(Wc);await to(R(P),{events:Jt}),m(Ot=>({...Ot,[P]:{...Ot[P]||{},events:Jt,todos:Ot[P]?.todos??[]}})),P===Sn(o)&&p(Ot=>({...Ot,events:Jt}))}catch(tt){ut(tt.code||tt.message)}}async function Pt(P,K){if(A)try{const Z=re(P).map(tt=>tt.id===K?{...tt,done:!tt.done}:tt);await to(R(P),{events:Z}),m(tt=>({...tt,[P]:{...tt[P]||{},events:Z,todos:tt[P]?.todos??[]}})),P===Sn(o)&&p(tt=>({...tt,events:Z}))}catch(Z){ut(Z.code||Z.message)}}async function D(P,K){if(A)try{const Z=re(P).filter(tt=>tt.id!==K);await to(R(P),{events:Z}),m(tt=>({...tt,[P]:{...tt[P]||{},events:Z,todos:tt[P]?.todos??[]}})),P===Sn(o)&&p(tt=>({...tt,events:Z}))}catch(Z){ut(Z.code||Z.message)}}if(!vo.currentUser)return it.jsx("div",{className:"page",children:it.jsx("div",{className:"planner planner--full",children:it.jsx("p",{children:"Accedi per usare il planner."})})});return it.jsxs("div",{className:"page",children:[it.jsxs("div",{className:"planner planner--full",children:[it.jsxs("div",{className:"tabs",children:[it.jsx("button",{className:`tab ${i==="month"?"active":""}`,onClick:()=>t("month"),children:"Mensile"}),it.jsx("button",{className:`tab ${i==="day"?"active":""}`,onClick:()=>t("day"),children:"Giornaliero"})]}),it.jsxs("div",{className:"planner__top",children:[it.jsx("h1",{className:"title-aesthetic",children:"MONTHLY PLANNER"}),it.jsx("div",{className:"planner__monthbox",children:i==="month"?Tt:zt})]}),gt&&it.jsxs("div",{style:{margin:"8px 0",padding:"8px 10px",border:"1px solid #f7c6d1",background:"#ffe9f0",borderRadius:10,color:"#7a4257"},children:["Errore: ",gt]}),i==="month"&&it.jsxs(it.Fragment,{children:[it.jsx("div",{className:"grid grid--head",children:["Lun","Mar","Mer","Gio","Ven","Sab","Dom"].map(P=>it.jsx("div",{className:"grid__cell head",children:P},P))}),it.jsx("div",{className:"grid grid--body",children:V.map((P,K)=>{const Z=Sn(P),tt=!YV(P,n),dt=KV(P),Jt=I(Z),ze=[...re(Z).map(_e=>({id:`e-${_e.id}`,text:_e.text,done:_e.done})),...Jt];return it.jsxs("button",{className:`grid__cell day ${tt?"out":""} ${dt?"today":""}`,onClick:()=>{S(Z),H("")},title:"Clicca per modificare il giorno",children:[it.jsx("div",{className:"day__num",children:Xc(P,"d",{locale:$c})}),it.jsxs("ul",{className:"mini",children:[ze.slice(0,3).map(_e=>it.jsxs("li",{className:_e.done?"done":"",children:["• ",_e.text]},_e.id)),ze.length>3&&it.jsxs("li",{className:"more",children:["+",ze.length-3," altro…"]})]}),it.jsx("div",{className:"day__plus",children:"＋"})]},K)})}),it.jsxs("div",{className:"nav",children:[it.jsx("button",{onClick:()=>s(QV(n)),children:"‹ Mese prec."}),it.jsx("button",{onClick:()=>s(DA(n,1)),children:"Mese succ. ›"})]})]}),i==="day"&&it.jsxs(it.Fragment,{children:[it.jsxs("div",{className:"dayview compact",children:[it.jsxs("div",{className:"drawer__add",style:{gap:6},children:[it.jsx("input",{type:"time",className:"field time",value:et,onChange:P=>Et(P.target.value)}),it.jsx("input",{className:"field",placeholder:"Aggiungi evento…",value:J,onChange:P=>st(P.target.value),onKeyDown:P=>{P.key==="Enter"&&$()}}),it.jsx("button",{className:"btn",onClick:$,children:"Aggiungi"})]}),it.jsxs("ul",{className:"list",style:{marginTop:12},children:[y.events.length===0&&it.jsx("li",{className:"empty",children:"Nessun evento."}),y.events.map(P=>it.jsxs("li",{children:[it.jsxs("label",{className:"row",children:[it.jsx("input",{type:"checkbox",checked:P.done,onChange:()=>Pt(Sn(o),P.id)}),it.jsxs("span",{className:P.done?"strike":"",children:[String(P.hour).padStart(2,"0"),":",String(P.minute??0).padStart(2,"0")," — ",P.text]})]}),it.jsx("button",{className:"link",onClick:()=>D(Sn(o),P.id),children:"Elimina"})]},P.id))]})]}),it.jsxs("div",{className:"nav",children:[it.jsx("button",{onClick:()=>u(Mm(o,-1)),children:"‹ Giorno prec."}),it.jsx("button",{onClick:()=>u(Mm(o,1)),children:"Giorno succ. ›"})]})]})]}),T&&it.jsx("div",{className:"drawer__backdrop",onClick:()=>S(null),children:it.jsxs("div",{className:"drawer",onClick:P=>P.stopPropagation(),children:[it.jsx("div",{className:"drawer__title",children:Xc(RP(T),"EEEE d MMMM yyyy",{locale:$c})}),it.jsxs("div",{className:"drawer__add",children:[it.jsx("input",{className:"field",placeholder:"Aggiungi attività…",value:C,onChange:P=>H(P.target.value),onKeyDown:P=>{P.key==="Enter"&&(ee(T,C),H(""))}}),it.jsx("button",{className:"btn",onClick:()=>{ee(T,C),H("")},children:"Aggiungi"})]}),it.jsxs("ul",{className:"list",children:[I(T).length===0&&it.jsx("li",{className:"empty",children:"Nessuna attività."}),I(T).map(P=>it.jsxs("li",{children:[it.jsxs("label",{className:"row",children:[it.jsx("input",{type:"checkbox",checked:P.done,onChange:()=>F(T,P.id)}),it.jsx("span",{className:P.done?"strike":"",children:P.text})]}),it.jsx("button",{className:"link",onClick:()=>rt(T,P.id),children:"Elimina"})]},P.id))]}),it.jsx("div",{style:{marginTop:12,fontWeight:700},children:"Eventi giornalieri"}),it.jsxs("ul",{className:"list",children:[(re(T)||[]).length===0&&it.jsx("li",{className:"empty",children:"Nessun evento."}),re(T).map(P=>it.jsxs("li",{children:[it.jsxs("label",{className:"row",children:[it.jsx("input",{type:"checkbox",checked:P.done,onChange:()=>Pt(T,P.id)}),it.jsxs("span",{className:P.done?"strike":"",children:[String(P.hour).padStart(2,"0"),":",String(P.minute??0).padStart(2,"0")," — ",P.text]})]}),it.jsx("button",{className:"link",onClick:()=>D(T,P.id),children:"Elimina"})]},P.id))]}),it.jsx("div",{className:"drawer__footer",children:it.jsx("button",{className:"btn secondary",onClick:()=>S(null),children:"Chiudi"})})]})})]});function $(){ct(Sn(o),et,J),st("")}}gb.createRoot(document.getElementById("root")).render(it.jsx(ob.StrictMode,{children:it.jsx(UM,{children:it.jsx(IP,{})})}));
