function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var o={exports:{}},i={},a={exports:{}},s={},l=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.iterator;var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,S={};function k(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||w}function C(){}function _(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||w}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=k.prototype;var E=_.prototype=new C;E.constructor=_,x(E,k.prototype),E.isPureReactComponent=!0;var A=Array.isArray,T=Object.prototype.hasOwnProperty,R={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)T.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:R.current}}function L(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var O=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case l:case c:a=!0}}if(a)return o=o(a=e),e=""===r?"."+P(a,0):r,A(o)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),I(o,t,n,"",(function(e){return e}))):null!=o&&(L(o)&&(o=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=""===r?".":r+":",A(e))for(var s=0;s<e.length;s++){var u=r+P(i=e[s],s);a+=I(i,t,n,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(i=e.next()).done;)a+=I(i=i.value,t,n,u=r+P(i,s++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function M(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},U={transition:null},B={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:U,ReactCurrentOwner:R};function z(){throw Error("act(...) is not supported in production builds of React.")}s.Children={map:M,forEach:function(e,t,n){M(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return M(e,(function(){t++})),t},toArray:function(e){return M(e,(function(e){return e}))||[]},only:function(e){if(!L(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=k,s.Fragment=u,s.Profiler=p,s.PureComponent=_,s.StrictMode=d,s.Suspense=m,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,s.act=z,s.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=x({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=R.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)T.call(t,c)&&!j.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:l,type:e.type,key:o,ref:i,props:r,_owner:a}},s.createContext=function(e){return(e={$$typeof:h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},s.createElement=N,s.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:g,render:e}},s.isValidElement=L,s.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:$}},s.memo=function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},s.startTransition=function(e){var t=U.transition;U.transition={};try{e()}finally{U.transition=t}},s.unstable_act=z,s.useCallback=function(e,t){return D.current.useCallback(e,t)},s.useContext=function(e){return D.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return D.current.useDeferredValue(e)},s.useEffect=function(e,t){return D.current.useEffect(e,t)},s.useId=function(){return D.current.useId()},s.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},s.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},s.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},s.useMemo=function(e,t){return D.current.useMemo(e,t)},s.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},s.useRef=function(e){return D.current.useRef(e)},s.useState=function(e){return D.current.useState(e)},s.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},s.useTransition=function(){return D.current.useTransition()},s.version="18.3.1",a.exports=s;var F=a.exports;const V=n(F),W=e({__proto__:null,default:V},[F]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H=F,q=Symbol.for("react.element"),K=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,Y=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,n){var r,o={},i=null,a=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)G.call(t,r)&&!Z.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:q,type:e,key:i,ref:a,props:o,_owner:Y.current}}i.Fragment=K,i.jsx=Q,i.jsxs=Q,o.exports=i;for(var X=o.exports,J={},ee={byteLength:function(e){var t=ae(e),n=t[0],r=t[1];return 3*(n+r)/4-r},toByteArray:function(e){var t,n,r=ae(e),o=r[0],i=r[1],a=new re(function(e,t,n){return 3*(t+n)/4-n}(0,o,i)),s=0,l=i>0?o-4:o;for(n=0;n<l;n+=4)t=ne[e.charCodeAt(n)]<<18|ne[e.charCodeAt(n+1)]<<12|ne[e.charCodeAt(n+2)]<<6|ne[e.charCodeAt(n+3)],a[s++]=t>>16&255,a[s++]=t>>8&255,a[s++]=255&t;2===i&&(t=ne[e.charCodeAt(n)]<<2|ne[e.charCodeAt(n+1)]>>4,a[s++]=255&t);1===i&&(t=ne[e.charCodeAt(n)]<<10|ne[e.charCodeAt(n+1)]<<4|ne[e.charCodeAt(n+2)]>>2,a[s++]=t>>8&255,a[s++]=255&t);return a},fromByteArray:function(e){for(var t,n=e.length,r=n%3,o=[],i=16383,a=0,s=n-r;a<s;a+=i)o.push(se(e,a,a+i>s?s:a+i));1===r?(t=e[n-1],o.push(te[t>>2]+te[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],o.push(te[t>>10]+te[t>>4&63]+te[t<<2&63]+"="));return o.join("")}},te=[],ne=[],re="undefined"!=typeof Uint8Array?Uint8Array:Array,oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ie=0;ie<64;++ie)te[ie]=oe[ie],ne[oe.charCodeAt(ie)]=ie;function ae(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function se(e,t,n){for(var r,o,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(te[(o=r)>>18&63]+te[o>>12&63]+te[o>>6&63]+te[63&o]);return i.join("")}ne["-".charCodeAt(0)]=62,ne["_".charCodeAt(0)]=63;var le={
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
read:function(e,t,n,r,o){var i,a,s=8*o-r-1,l=(1<<s)-1,c=l>>1,u=-7,d=n?o-1:0,p=n?-1:1,f=e[t+d];for(d+=p,i=f&(1<<-u)-1,f>>=-u,u+=s;u>0;i=256*i+e[t+d],d+=p,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=r;u>0;a=256*a+e[t+d],d+=p,u-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,r),i-=c}return(f?-1:1)*a*Math.pow(2,i-r)},write:function(e,t,n,r,o,i){var a,s,l,c=8*i-o-1,u=(1<<c)-1,d=u>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:i-1,h=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+d>=1?p/l:p*Math.pow(2,1-d))*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,o),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[n+f]=255&s,f+=h,s/=256,o-=8);for(a=a<<o|s,c+=o;c>0;e[n+f]=255&a,f+=h,a/=256,c-=8);e[n+f-h]|=128*g}};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e){const t=ee,n=le,r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=function(e){+e!=e&&(e=0);return a.alloc(+e)},e.INSPECT_MAX_BYTES=50;const o=2147483647;function i(e){if(e>o)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return c(e)}return s(e,t,n)}function s(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|f(e,t);let r=i(n);const o=r.write(e,t);o!==n&&(r=r.slice(0,o));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(K(e,Uint8Array)){const t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return u(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return d(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return d(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return a.from(r,t,n);const o=function(e){if(a.isBuffer(e)){const t=0|p(e.length),n=i(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||G(e.length)?i(0):u(e);if("Buffer"===e.type&&Array.isArray(e.data))return u(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return l(e),i(e<0?0:0|p(e))}function u(e){const t=e.length<0?0:0|p(e.length),n=i(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function d(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,a.prototype),r}function p(e){if(e>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|e}function f(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return W(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return H(e).length;default:if(o)return r?-1:W(e).length;t=(""+t).toLowerCase(),o=!0}}function h(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return T(this,t,n);case"utf8":case"utf-8":return C(this,t,n);case"ascii":return E(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return k(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function g(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function m(e,t,n,r,o){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),G(n=+n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=a.from(t,r)),a.isBuffer(t))return 0===t.length?-1:v(e,t,n,r,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,r,o);throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,r,o){let i,a=1,s=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){let r=-1;for(i=n;i<s;i++)if(c(e,i)===c(t,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===l)return r*a}else-1!==r&&(i-=i-r),r=-1}else for(n+l>s&&(n=s-l),i=n;i>=0;i--){let n=!0;for(let r=0;r<l;r++)if(c(e,i+r)!==c(t,r)){n=!1;break}if(n)return i}return-1}function b(e,t,n,r){n=Number(n)||0;const o=e.length-n;r?(r=Number(r))>o&&(r=o):r=o;const i=t.length;let a;for(r>i/2&&(r=i/2),a=0;a<r;++a){const r=parseInt(t.substr(2*a,2),16);if(G(r))return a;e[n+a]=r}return a}function y(e,t,n,r){return q(W(t,e.length-n),e,n,r)}function w(e,t,n,r){return q(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function x(e,t,n,r){return q(H(t),e,n,r)}function S(e,t,n,r){return q(function(e,t){let n,r,o;const i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(t,e.length-n),e,n,r)}function k(e,n,r){return 0===n&&r===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(n,r))}function C(e,t,n){n=Math.min(e.length,n);const r=[];let o=t;for(;o<n;){const t=e[o];let i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=n){let n,r,s,l;switch(a){case 1:t<128&&(i=t);break;case 2:n=e[o+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(i=l));break;case 3:n=e[o+1],r=e[o+2],128==(192&n)&&128==(192&r)&&(l=(15&t)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:n=e[o+1],r=e[o+2],s=e[o+3],128==(192&n)&&128==(192&r)&&128==(192&s)&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=a}return function(e){const t=e.length;if(t<=_)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=_));return n}(r)}e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(dP){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,n){return s(e,t,n)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,n){return function(e,t,n){return l(e),e<=0?i(e):void 0!==t?"string"==typeof n?i(e).fill(t,n):i(e).fill(t):i(e)}(e,t,n)},a.allocUnsafe=function(e){return c(e)},a.allocUnsafeSlow=function(e){return c(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(K(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=a.allocUnsafe(t);let o=0;for(n=0;n<e.length;++n){let t=e[n];if(K(t,Uint8Array))o+t.length>r.length?(a.isBuffer(t)||(t=a.from(t)),t.copy(r,o)):Uint8Array.prototype.set.call(r,t,o);else{if(!a.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,o)}o+=t.length}return r},a.byteLength=f,a.prototype._isBuffer=!0,a.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},a.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},a.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},a.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?C(this,0,e):h.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){let t="";const n=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(e,t,n,r,o){if(K(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),t<0||n>e.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&t>=n)return 0;if(r>=o)return-1;if(t>=n)return 1;if(this===e)return 0;let i=(o>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0);const l=Math.min(i,s),c=this.slice(r,o),u=e.slice(t,n);for(let a=0;a<l;++a)if(c[a]!==u[a]){i=c[a],s=u[a];break}return i<s?-1:s<i?1:0},a.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},a.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},a.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},a.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return b(this,e,t,n);case"utf8":case"utf-8":return y(this,e,t,n);case"ascii":case"latin1":case"binary":return w(this,e,t,n);case"base64":return x(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const _=4096;function E(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(127&e[o]);return r}function A(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(e[o]);return r}function T(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let o="";for(let i=t;i<n;++i)o+=Y[e[i]];return o}function R(e,t,n){const r=e.slice(t,n);let o="";for(let i=0;i<r.length-1;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function j(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function N(e,t,n,r,o,i){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function L(e,t,n,r,o){B(t,r,o,e,n,7);let i=Number(t&BigInt(4294967295));e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function O(e,t,n,r,o){B(t,r,o,e,n,7);let i=Number(t&BigInt(4294967295));e[n+7]=i,i>>=8,e[n+6]=i,i>>=8,e[n+5]=i,i>>=8,e[n+4]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function P(e,t,n,r,o,i){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function I(e,t,r,o,i){return t=+t,r>>>=0,i||P(e,0,r,4),n.write(e,t,r,o,23,4),r+4}function M(e,t,r,o,i){return t=+t,r>>>=0,i||P(e,0,r,8),n.write(e,t,r,o,52,8),r+8}a.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,a.prototype),r},a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||j(e,t,this.length);let r=this[e],o=1,i=0;for(;++i<t&&(o*=256);)r+=this[e+i]*o;return r},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||j(e,t,this.length);let r=this[e+--t],o=1;for(;t>0&&(o*=256);)r+=this[e+--t]*o;return r},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e>>>=0,t||j(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||j(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||j(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||j(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readBigUInt64LE=Z((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(o)<<BigInt(32))})),a.prototype.readBigUInt64BE=Z((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(o)})),a.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||j(e,t,this.length);let r=this[e],o=1,i=0;for(;++i<t&&(o*=256);)r+=this[e+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*t)),r},a.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||j(e,t,this.length);let r=t,o=1,i=this[e+--r];for(;r>0&&(o*=256);)i+=this[e+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},a.prototype.readInt8=function(e,t){return e>>>=0,t||j(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||j(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},a.prototype.readInt16BE=function(e,t){e>>>=0,t||j(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readBigInt64LE=Z((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),a.prototype.readBigInt64BE=Z((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),a.prototype.readFloatLE=function(e,t){return e>>>=0,t||j(e,4,this.length),n.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||j(e,4,this.length),n.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||j(e,8,this.length),n.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||j(e,8,this.length),n.read(this,e,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){N(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=1,i=0;for(this[t]=255&e;++i<n&&(o*=256);)this[t+i]=e/o&255;return t+n},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){N(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=n-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+n},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeBigUInt64LE=Z((function(e,t=0){return L(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeBigUInt64BE=Z((function(e,t=0){return O(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);N(this,e,t,n,r-1,-r)}let o=0,i=1,a=0;for(this[t]=255&e;++o<n&&(i*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/i|0)-a&255;return t+n},a.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);N(this,e,t,n,r-1,-r)}let o=n-1,i=1,a=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/i|0)-a&255;return t+n},a.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||N(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeBigInt64LE=Z((function(e,t=0){return L(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeBigInt64BE=Z((function(e,t=0){return O(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeFloatLE=function(e,t,n){return I(this,e,t,!0,n)},a.prototype.writeFloatBE=function(e,t,n){return I(this,e,t,!1,n)},a.prototype.writeDoubleLE=function(e,t,n){return M(this,e,t,!0,n)},a.prototype.writeDoubleBE=function(e,t,n){return M(this,e,t,!1,n)},a.prototype.copy=function(e,t,n,r){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const o=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),o},a.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{const i=a.isBuffer(e)?e:a.from(e,r),s=i.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=i[o%s]}return this};const $={};function D(e,t,n){$[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function U(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function B(e,t,n,r,o,i){if(e>n||e<t){const n="bigint"==typeof t?"n":"";let r;throw r=0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`,new $.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||F(t,e.length-(n+1))}(r,o,i)}function z(e,t){if("number"!=typeof e)throw new $.ERR_INVALID_ARG_TYPE(t,"number",e)}function F(e,t,n){if(Math.floor(e)!==e)throw z(e,n),new $.ERR_OUT_OF_RANGE("offset","an integer",e);if(t<0)throw new $.ERR_BUFFER_OUT_OF_BOUNDS;throw new $.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${t}`,e)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=U(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=U(o)),o+="n"),r+=` It must be ${t}. Received ${o}`,r}),RangeError);const V=/[^+/0-9A-Za-z-_]/g;function W(e,t){let n;t=t||1/0;const r=e.length;let o=null;const i=[];for(let a=0;a<r;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function H(e){return t.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(V,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,n,r){let o;for(o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function G(e){return e!=e}const Y=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let o=0;o<16;++o)t[r+o]=e[n]+e[o]}return t}();function Z(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}})(J),window&&!window.Buffer&&(window.Buffer=J.Buffer);let ce=function(){this.buffer=J.Buffer.allocUnsafe(8192),this.offset=0};ce.prototype.writeByte=function(e){return this.buffer.writeUInt8(e,this.offset++),this},ce.prototype.writeShort=function(e){return this.buffer.writeUInt16BE(e,this.offset),this.offset+=2,this},ce.prototype.writeInteger=function(e){return this.buffer.writeInt32BE(e,this.offset),this.offset+=4,this},ce.prototype.writeLong=function(e){return this.buffer.writeBigUInt64BE(e,this.offset),this.offset+=8,this},ce.prototype.writeDouble=function(e){return this.buffer.writeDoubleBE(e,this.offset),this.offset+=8,this},ce.prototype.writeString=function(e){e||(e="");const t=J.Buffer.allocUnsafe(8192).write(e,this.offset+1);return this.buffer.writeUInt8(t,this.offset),this.buffer.write(e,this.offset+1),this.offset+=t+1,this},ce.prototype.writeLongString=function(e){e||(e="");const t=e.length;return this.buffer.writeUInt16BE(t,this.offset),this.buffer.write(e,this.offset+8),this.offset+=t+8,this},ce.prototype.getBuffer=function(){const e=J.Buffer.allocUnsafe(this.offset);return this.buffer.copy(e,0,0,this.offset),e};let ue=function(e){this.buffer=e,this.offset=0};ue.prototype.readByte=function(){return this.buffer.readUInt8(this.offset++)},ue.prototype.readShort=function(){const e=this.buffer.readUInt16BE(this.offset);return this.offset+=2,e},ue.prototype.readInteger=function(){const e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e},ue.prototype.readLong=function(){const e=Number(this.buffer.readBigUInt64BE(this.offset));return this.offset+=8,e},ue.prototype.readBigInt64BE=function(){const e=Number(this.buffer.readBigInt64BE(this.offset));return this.offset+=8,e},ue.prototype.readDouble=function(){const e=this.buffer.readDoubleBE(this.offset);return this.offset+=8,e},ue.prototype.readFloatBE=function(){const e=this.buffer.readFloatBE(this.offset);return this.offset+=4,e},ue.prototype.readString=function(){const e=Number(this.buffer.readUInt8(this.offset));this.offset+=1;const t=this.buffer.toString("utf8",this.offset,this.offset+e);return this.offset+=e,t},ue.prototype.readString2=function(){const e=Number(this.buffer.readUInt16BE(this.offset));this.offset+=2;const t=this.buffer.toString("utf8",this.offset,this.offset+e);return this.offset+=e,t},ue.prototype.readSignedLong=function(){const e=this.buffer.readBigInt64BE(this.offset);return this.offset+=8,e};var de={},pe={exports:{}},fe={},he={exports:{}},ge={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,d=null,p=3,f=!1,h=!1,g=!1,m="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null;function y(e){for(var o=n(c);null!==o;){if(null===o.callback)r(c);else{if(!(o.startTime<=e))break;r(c),o.sortIndex=o.expirationTime,t(l,o)}o=n(c)}}function w(e){if(g=!1,y(e),!h)if(null!==n(l))h=!0,L(x);else{var t=n(c);null!==t&&O(w,t.startTime-e)}}function x(t,o){h=!1,g&&(g=!1,v(_),_=-1),f=!0;var i=p;try{for(y(o),d=n(l);null!==d&&(!(d.expirationTime>o)||t&&!T());){var a=d.callback;if("function"==typeof a){d.callback=null,p=d.priorityLevel;var s=a(d.expirationTime<=o);o=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),y(o)}else r(l);d=n(l)}if(null!==d)var u=!0;else{var m=n(c);null!==m&&O(w,m.startTime-o),u=!1}return u}finally{d=null,p=i,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,k=!1,C=null,_=-1,E=5,A=-1;function T(){return!(e.unstable_now()-A<E)}function R(){if(null!==C){var t=e.unstable_now();A=t;var n=!0;try{n=C(!0,t)}finally{n?S():(k=!1,C=null)}}else k=!1}if("function"==typeof b)S=function(){b(R)};else if("undefined"!=typeof MessageChannel){var j=new MessageChannel,N=j.port2;j.port1.onmessage=R,S=function(){N.postMessage(null)}}else S=function(){m(R,0)};function L(e){C=e,k||(k=!0,S())}function O(t,n){_=m((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){h||f||(h=!0,L(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},e.unstable_scheduleCallback=function(r,o,i){var a=e.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?a+i:a:i=a,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:u++,callback:o,priorityLevel:r,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(r.sortIndex=i,t(c,r),null===n(l)&&r===n(c)&&(g?(v(_),_=-1):g=!0,O(w,i-a))):(r.sortIndex=s,t(l,r),h||f||(h=!0,L(x))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}}(ge),he.exports=ge;var me=he.exports,ve=F,be=me;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ye(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var we=new Set,xe={};function Se(e,t){ke(e,t),ke(e+"Capture",t)}function ke(e,t){for(xe[e]=t,e=0;e<t.length;e++)we.add(t[e])}var Ce=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),_e=Object.prototype.hasOwnProperty,Ee=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ae={},Te={};function Re(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){je[e]=new Re(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];je[t]=new Re(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){je[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){je[e]=new Re(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){je[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){je[e]=new Re(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){je[e]=new Re(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){je[e]=new Re(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){je[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)}));var Ne=/[\-:]([a-z])/g;function Le(e){return e[1].toUpperCase()}function Oe(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!_e.call(Te,e)||!_e.call(Ae,e)&&(Ee.test(e)?Te[e]=!0:(Ae[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(Ne,Le);je[t]=new Re(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(Ne,Le);je[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(Ne,Le);je[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){je[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)})),je.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){je[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)}));var Pe=ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),Me=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),De=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Fe=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),Ge=Symbol.iterator;function Ye(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Ge&&e[Ge]||e["@@iterator"])?e:null}var Ze,Qe=Object.assign;function Xe(e){if(void 0===Ze)try{throw Error()}catch(mP){var t=mP.stack.trim().match(/\n( *(at )?)/);Ze=t&&t[1]||""}return"\n"+Ze+e}var Je=!1;function et(e,t){if(!e||Je)return"";Je=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(pP){var r=pP}Reflect.construct(e,[],t)}else{try{t.call()}catch(pP){r=pP}e.call(t.prototype)}else{try{throw Error()}catch(pP){r=pP}e()}}catch(pP){if(pP&&r&&"string"==typeof pP.stack){for(var o=pP.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{Je=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xe(e):""}function tt(e){switch(e.tag){case 5:return Xe(e.type);case 16:return Xe("Lazy");case 13:return Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 2:case 15:return e=et(e.type,!1);case 11:return e=et(e.type.render,!1);case 1:return e=et(e.type,!0);default:return""}}function nt(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case $e:return"Fragment";case Me:return"Portal";case Ue:return"Profiler";case De:return"StrictMode";case Ve:return"Suspense";case We:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ze:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Fe:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case He:return null!==(t=e.displayName||null)?t:nt(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return nt(e(t))}catch(mP){}}return null}function rt(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nt(t);case 8:return t===De?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function it(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function at(e){e._valueTracker||(e._valueTracker=function(e){var t=it(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function st(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=it(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function lt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(uh){return e.body}}function ct(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ut(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ot(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function dt(e,t){null!=(t=t.checked)&&Oe(e,"checked",t,!1)}function pt(e,t){dt(e,t);var n=ot(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ht(e,t.type,n):t.hasOwnProperty("defaultValue")&&ht(e,t.type,ot(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ft(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ht(e,t,n){"number"===t&&lt(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gt=Array.isArray;function mt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ot(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function vt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(ye(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bt(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(ye(92));if(gt(n)){if(1<n.length)throw Error(ye(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ot(n)}}function yt(e,t){var n=ot(t.value),r=ot(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function wt(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function xt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?xt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var kt,Ct=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((kt=kt||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function _t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},At=["Webkit","ms","Moz","O"];function Tt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Et.hasOwnProperty(e)&&Et[e]?(""+t).trim():t+"px"}function Rt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=Tt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(Et).forEach((function(e){At.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Et[t]=Et[e]}))}));var jt=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nt(e,t){if(t){if(jt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(ye(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(ye(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(ye(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(ye(62))}}function Lt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ot=null;function Pt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var It=null,Mt=null,$t=null;function Dt(e){if(e=Oi(e)){if("function"!=typeof It)throw Error(ye(280));var t=e.stateNode;t&&(t=Ii(t),It(e.stateNode,e.type,t))}}function Ut(e){Mt?$t?$t.push(e):$t=[e]:Mt=e}function Bt(){if(Mt){var e=Mt,t=$t;if($t=Mt=null,Dt(e),t)for(e=0;e<t.length;e++)Dt(t[e])}}function zt(e,t){return e(t)}function Ft(){}var Vt=!1;function Wt(e,t,n){if(Vt)return e(t,n);Vt=!0;try{return zt(e,t,n)}finally{Vt=!1,(null!==Mt||null!==$t)&&(Ft(),Bt())}}function Ht(e,t){var n=e.stateNode;if(null===n)return null;var r=Ii(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(ye(231,t,typeof n));return n}var qt=!1;if(Ce)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){qt=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch(fP){qt=!1}function Gt(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(_v){this.onError(_v)}}var Yt=!1,Zt=null,Qt=!1,Xt=null,Jt={onError:function(e){Yt=!0,Zt=e}};function en(e,t,n,r,o,i,a,s,l){Yt=!1,Zt=null,Gt.apply(Jt,arguments)}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nn(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rn(e){if(tn(e)!==e)throw Error(ye(188))}function on(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=tn(e)))throw Error(ye(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return rn(o),e;if(i===r)return rn(o),t;i=i.sibling}throw Error(ye(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(ye(189))}}if(n.alternate!==r)throw Error(ye(190))}if(3!==n.tag)throw Error(ye(188));return n.stateNode.current===n?e:t}(e),null!==e?an(e):null}function an(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=an(e);if(null!==t)return t;e=e.sibling}return null}var sn=be.unstable_scheduleCallback,ln=be.unstable_cancelCallback,cn=be.unstable_shouldYield,un=be.unstable_requestPaint,dn=be.unstable_now,pn=be.unstable_getCurrentPriorityLevel,fn=be.unstable_ImmediatePriority,hn=be.unstable_UserBlockingPriority,gn=be.unstable_NormalPriority,mn=be.unstable_LowPriority,vn=be.unstable_IdlePriority,bn=null,yn=null;var wn=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(xn(e)/Sn|0)|0},xn=Math.log,Sn=Math.LN2;var kn=64,Cn=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function En(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?r=_n(s):0!==(i&=a)&&(r=_n(i))}else 0!==(a=n&~o)?r=_n(a):0!==i&&(r=_n(i));if(0===r)return 0;if(0!==t&&t!==r&&!(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&4194240&i))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-wn(t)),r|=e[n],t&=~o;return r}function An(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Tn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Rn(){var e=kn;return!(4194240&(kn<<=1))&&(kn=64),e}function jn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-wn(t)]=n}function Ln(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var On=0;function Pn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var In,Mn,$n,Dn,Un,Bn=!1,zn=[],Fn=null,Vn=null,Wn=null,Hn=new Map,qn=new Map,Kn=[],Gn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yn(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Zn(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=Oi(t))&&Mn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Qn(e){var t=Li(e.target);if(null!==t){var n=tn(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nn(n)))return e.blockedOn=t,void Un(e.priority,(function(){$n(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Xn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=cr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Oi(n))&&Mn(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ot=r,n.target.dispatchEvent(r),Ot=null,t.shift()}return!0}function Jn(e,t,n){Xn(e)&&n.delete(t)}function er(){Bn=!1,null!==Fn&&Xn(Fn)&&(Fn=null),null!==Vn&&Xn(Vn)&&(Vn=null),null!==Wn&&Xn(Wn)&&(Wn=null),Hn.forEach(Jn),qn.forEach(Jn)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bn||(Bn=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,er)))}function nr(e){function t(t){return tr(t,e)}if(0<zn.length){tr(zn[0],e);for(var n=1;n<zn.length;n++){var r=zn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Fn&&tr(Fn,e),null!==Vn&&tr(Vn,e),null!==Wn&&tr(Wn,e),Hn.forEach(t),qn.forEach(t),n=0;n<Kn.length;n++)(r=Kn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&null===(n=Kn[0]).blockedOn;)Qn(n),null===n.blockedOn&&Kn.shift()}var rr=Pe.ReactCurrentBatchConfig,or=!0;function ir(e,t,n,r){var o=On,i=rr.transition;rr.transition=null;try{On=1,sr(e,t,n,r)}finally{On=o,rr.transition=i}}function ar(e,t,n,r){var o=On,i=rr.transition;rr.transition=null;try{On=4,sr(e,t,n,r)}finally{On=o,rr.transition=i}}function sr(e,t,n,r){if(or){var o=cr(e,t,n,r);if(null===o)oi(e,t,r,lr,n),Yn(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Fn=Zn(Fn,e,t,n,r,o),!0;case"dragenter":return Vn=Zn(Vn,e,t,n,r,o),!0;case"mouseover":return Wn=Zn(Wn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Hn.set(i,Zn(Hn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,qn.set(i,Zn(qn.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Yn(e,r),4&t&&-1<Gn.indexOf(e)){for(;null!==o;){var i=Oi(o);if(null!==i&&In(i),null===(i=cr(e,t,n,r))&&oi(e,t,r,lr,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else oi(e,t,r,null,n)}}var lr=null;function cr(e,t,n,r){if(lr=null,null!==(e=Li(e=Pt(r))))if(null===(t=tn(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nn(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return lr=e,null}function ur(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pn()){case fn:return 1;case hn:return 4;case gn:case mn:return 16;case vn:return 536870912;default:return 16}default:return 16}}var dr=null,pr=null,fr=null;function hr(){if(fr)return fr;var e,t,n=pr,r=n.length,o="value"in dr?dr.value:dr.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return fr=o.slice(e,1<t?1-t:void 0)}function gr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function mr(){return!0}function vr(){return!1}function br(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?mr:vr,this.isPropagationStopped=vr,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var yr,wr,xr,Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kr=br(Sr),Cr=Qe({},Sr,{view:0,detail:0}),_r=br(Cr),Er=Qe({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&"mousemove"===e.type?(yr=e.screenX-xr.screenX,wr=e.screenY-xr.screenY):wr=yr=0,xr=e),yr)},movementY:function(e){return"movementY"in e?e.movementY:wr}}),Ar=br(Er),Tr=br(Qe({},Er,{dataTransfer:0})),Rr=br(Qe({},Cr,{relatedTarget:0})),jr=br(Qe({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0})),Nr=Qe({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lr=br(Nr),Or=br(Qe({},Sr,{data:0})),Pr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ir={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $r(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mr[e])&&!!t[e]}function Dr(){return $r}var Ur=Qe({},Cr,{key:function(e){if(e.key){var t=Pr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=gr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Ir[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dr,charCode:function(e){return"keypress"===e.type?gr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?gr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Br=br(Ur),zr=br(Qe({},Er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Fr=br(Qe({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dr})),Vr=br(Qe({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wr=Qe({},Er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hr=br(Wr),qr=[9,13,27,32],Kr=Ce&&"CompositionEvent"in window,Gr=null;Ce&&"documentMode"in document&&(Gr=document.documentMode);var Yr=Ce&&"TextEvent"in window&&!Gr,Zr=Ce&&(!Kr||Gr&&8<Gr&&11>=Gr),Qr=String.fromCharCode(32),Xr=!1;function Jr(e,t){switch(e){case"keyup":return-1!==qr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eo(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var to=!1;var no={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!no[e.type]:"textarea"===t}function oo(e,t,n,r){Ut(r),0<(t=ai(t,"onChange")).length&&(n=new kr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,ao=null;function so(e){Xo(e,0)}function lo(e){if(st(Pi(e)))return e}function co(e,t){if("change"===e)return t}var uo=!1;if(Ce){var po;if(Ce){var fo="oninput"in document;if(!fo){var ho=document.createElement("div");ho.setAttribute("oninput","return;"),fo="function"==typeof ho.oninput}po=fo}else po=!1;uo=po&&(!document.documentMode||9<document.documentMode)}function go(){io&&(io.detachEvent("onpropertychange",mo),ao=io=null)}function mo(e){if("value"===e.propertyName&&lo(ao)){var t=[];oo(t,ao,e,Pt(e)),Wt(so,t)}}function vo(e,t,n){"focusin"===e?(go(),ao=n,(io=t).attachEvent("onpropertychange",mo)):"focusout"===e&&go()}function bo(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lo(ao)}function yo(e,t){if("click"===e)return lo(t)}function wo(e,t){if("input"===e||"change"===e)return lo(t)}var xo="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function So(e,t){if(xo(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!_e.call(t,o)||!xo(e[o],t[o]))return!1}return!0}function ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Co(e,t){var n,r=ko(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ko(r)}}function _o(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?_o(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Eo(){for(var e=window,t=lt();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(Nv){n=!1}if(!n)break;t=lt((e=t.contentWindow).document)}return t}function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function To(e){var t=Eo(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_o(n.ownerDocument.documentElement,n)){if(null!==r&&Ao(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Co(n,i);var a=Co(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ro=Ce&&"documentMode"in document&&11>=document.documentMode,jo=null,No=null,Lo=null,Oo=!1;function Po(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Oo||null==jo||jo!==lt(r)||("selectionStart"in(r=jo)&&Ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Lo&&So(Lo,r)||(Lo=r,0<(r=ai(No,"onSelect")).length&&(t=new kr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jo)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mo={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},$o={},Do={};function Uo(e){if($o[e])return $o[e];if(!Mo[e])return e;var t,n=Mo[e];for(t in n)if(n.hasOwnProperty(t)&&t in Do)return $o[e]=n[t];return e}Ce&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);var Bo=Uo("animationend"),zo=Uo("animationiteration"),Fo=Uo("animationstart"),Vo=Uo("transitionend"),Wo=new Map,Ho="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qo(e,t){Wo.set(e,t),Se(t,[e])}for(var Ko=0;Ko<Ho.length;Ko++){var Go=Ho[Ko];qo(Go.toLowerCase(),"on"+(Go[0].toUpperCase()+Go.slice(1)))}qo(Bo,"onAnimationEnd"),qo(zo,"onAnimationIteration"),qo(Fo,"onAnimationStart"),qo("dblclick","onDoubleClick"),qo("focusin","onFocus"),qo("focusout","onBlur"),qo(Vo,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),Se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Se("onBeforeInput",["compositionend","keypress","textInput","paste"]),Se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zo=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Qo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,a,s,l){if(en.apply(this,arguments),Yt){if(!Yt)throw Error(ye(198));var c=Zt;Yt=!1,Zt=null,Qt||(Qt=!0,Xt=c)}}(r,t,void 0,e),e.currentTarget=null}function Xo(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Qo(o,s,c),i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Qo(o,s,c),i=l}}}if(Qt)throw e=Xt,Qt=!1,Xt=null,e}function Jo(e,t){var n=t[Ri];void 0===n&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(ri(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),ri(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[ti]){e[ti]=!0,we.forEach((function(t){"selectionchange"!==t&&(Zo.has(t)||ei(t,!1,e),ei(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ti]||(t[ti]=!0,ei("selectionchange",!1,t))}}function ri(e,t,n,r){switch(ur(t)){case 1:var o=ir;break;case 4:o=ar;break;default:o=sr}n=o.bind(null,t,n,e),o=void 0,!qt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function oi(e,t,n,r,o){var i=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=Li(s)))return;if(5===(l=a.tag)||6===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Wt((function(){var r=i,o=Pt(n),a=[];e:{var s=Wo.get(e);if(void 0!==s){var l=kr,c=e;switch(e){case"keypress":if(0===gr(n))break e;case"keydown":case"keyup":l=Br;break;case"focusin":c="focus",l=Rr;break;case"focusout":c="blur",l=Rr;break;case"beforeblur":case"afterblur":l=Rr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Tr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Fr;break;case Bo:case zo:case Fo:l=jr;break;case Vo:l=Vr;break;case"scroll":l=_r;break;case"wheel":l=Hr;break;case"copy":case"cut":case"paste":l=Lr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=zr}var u=!!(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=r;null!==h;){var g=(f=h).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==p&&(null!=(g=Ht(h,p))&&u.push(ii(h,g,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,o),a.push({event:s,listeners:u}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Ot||!(c=n.relatedTarget||n.fromElement)||!Li(c)&&!c[Ti])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?Li(c):null)&&(c!==(d=tn(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=Ar,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=zr,g="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:Pi(l),f=null==c?s:Pi(c),(s=new u(g,h+"leave",l,n,o)).target=d,s.relatedTarget=f,g=null,Li(o)===r&&((u=new u(p,h+"enter",c,n,o)).target=f,u.relatedTarget=d,g=u),d=g,l&&c)e:{for(p=c,h=0,f=u=l;f;f=si(f))h++;for(f=0,g=p;g;g=si(g))f++;for(;0<h-f;)u=si(u),h--;for(;0<f-h;)p=si(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=si(u),p=si(p)}u=null}else u=null;null!==l&&li(a,s,l,u,!1),null!==c&&null!==d&&li(a,d,c,u,!0)}if("select"===(l=(s=r?Pi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var m=co;else if(ro(s))if(uo)m=wo;else{m=bo;var v=vo}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(m=yo);switch(m&&(m=m(e,r))?oo(a,m,n,o):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ht(s,"number",s.value)),v=r?Pi(r):window,e){case"focusin":(ro(v)||"true"===v.contentEditable)&&(jo=v,No=r,Lo=null);break;case"focusout":Lo=No=jo=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Po(a,n,o);break;case"selectionchange":if(Ro)break;case"keydown":case"keyup":Po(a,n,o)}var b;if(Kr)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else to?Jr(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Zr&&"ko"!==n.locale&&(to||"onCompositionStart"!==y?"onCompositionEnd"===y&&to&&(b=hr()):(pr="value"in(dr=o)?dr.value:dr.textContent,to=!0)),0<(v=ai(r,y)).length&&(y=new Or(y,e,null,n,o),a.push({event:y,listeners:v}),b?y.data=b:null!==(b=eo(n))&&(y.data=b))),(b=Yr?function(e,t){switch(e){case"compositionend":return eo(t);case"keypress":return 32!==t.which?null:(Xr=!0,Qr);case"textInput":return(e=t.data)===Qr&&Xr?null:e;default:return null}}(e,n):function(e,t){if(to)return"compositionend"===e||!Kr&&Jr(e,t)?(e=hr(),fr=pr=dr=null,to=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ai(r,"onBeforeInput")).length&&(o=new Or("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=b))}Xo(a,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ht(e,n))&&r.unshift(ii(e,i,o)),null!=(i=Ht(e,t))&&r.push(ii(e,i,o))),e=e.return}return r}function si(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function li(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,o?null!=(l=Ht(n,i))&&a.unshift(ii(n,l,s)):o||null!=(l=Ht(n,i))&&a.push(ii(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var ci=/\r\n?/g,ui=/\u0000|\uFFFD/g;function di(e){return("string"==typeof e?e:""+e).replace(ci,"\n").replace(ui,"")}function pi(e,t,n){if(t=di(t),di(e)!==t&&n)throw Error(ye(425))}function fi(){}var hi=null,gi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var vi="function"==typeof setTimeout?setTimeout:void 0,bi="function"==typeof clearTimeout?clearTimeout:void 0,yi="function"==typeof Promise?Promise:void 0,wi="function"==typeof queueMicrotask?queueMicrotask:void 0!==yi?function(e){return yi.resolve(null).then(e).catch(xi)}:vi;function xi(e){setTimeout((function(){throw e}))}function Si(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void nr(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);nr(t)}function ki(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var _i=Math.random().toString(36).slice(2),Ei="__reactFiber$"+_i,Ai="__reactProps$"+_i,Ti="__reactContainer$"+_i,Ri="__reactEvents$"+_i,ji="__reactListeners$"+_i,Ni="__reactHandles$"+_i;function Li(e){var t=e[Ei];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ti]||n[Ei]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ci(e);null!==e;){if(n=e[Ei])return n;e=Ci(e)}return t}n=(e=n).parentNode}return null}function Oi(e){return!(e=e[Ei]||e[Ti])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Pi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(ye(33))}function Ii(e){return e[Ai]||null}var Mi=[],$i=-1;function Di(e){return{current:e}}function Ui(e){0>$i||(e.current=Mi[$i],Mi[$i]=null,$i--)}function Bi(e,t){$i++,Mi[$i]=e.current,e.current=t}var zi={},Fi=Di(zi),Vi=Di(!1),Wi=zi;function Hi(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qi(e){return null!=(e=e.childContextTypes)}function Ki(){Ui(Vi),Ui(Fi)}function Gi(e,t,n){if(Fi.current!==zi)throw Error(ye(168));Bi(Fi,t),Bi(Vi,n)}function Yi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(ye(108,rt(e)||"Unknown",o));return Qe({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Wi=Fi.current,Bi(Fi,e),Bi(Vi,Vi.current),!0}function Qi(e,t,n){var r=e.stateNode;if(!r)throw Error(ye(169));n?(e=Yi(e,t,Wi),r.__reactInternalMemoizedMergedChildContext=e,Ui(Vi),Ui(Fi),Bi(Fi,e)):Ui(Vi),Bi(Vi,n)}var Xi=null,Ji=!1,ea=!1;function ta(e){null===Xi?Xi=[e]:Xi.push(e)}function na(){if(!ea&&null!==Xi){ea=!0;var e=0,t=On;try{var n=Xi;for(On=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Xi=null,Ji=!1}catch(dP){throw null!==Xi&&(Xi=Xi.slice(e+1)),sn(fn,na),dP}finally{On=t,ea=!1}}return null}var ra=[],oa=0,ia=null,aa=0,sa=[],la=0,ca=null,ua=1,da="";function pa(e,t){ra[oa++]=aa,ra[oa++]=ia,ia=e,aa=t}function fa(e,t,n){sa[la++]=ua,sa[la++]=da,sa[la++]=ca,ca=e;var r=ua;e=da;var o=32-wn(r)-1;r&=~(1<<o),n+=1;var i=32-wn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ua=1<<32-wn(t)+o|n<<o|r,da=i+e}else ua=1<<i|n<<o|r,da=e}function ha(e){null!==e.return&&(pa(e,1),fa(e,1,0))}function ga(e){for(;e===ia;)ia=ra[--oa],ra[oa]=null,aa=ra[--oa],ra[oa]=null;for(;e===ca;)ca=sa[--la],sa[la]=null,da=sa[--la],sa[la]=null,ua=sa[--la],sa[la]=null}var ma=null,va=null,ba=!1,ya=null;function wa(e,t){var n=Wu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function xa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ma=e,va=ki(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ma=e,va=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ca?{id:ua,overflow:da}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Wu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ma=e,va=null,!0);default:return!1}}function Sa(e){return!(!(1&e.mode)||128&e.flags)}function ka(e){if(ba){var t=va;if(t){var n=t;if(!xa(e,t)){if(Sa(e))throw Error(ye(418));t=ki(n.nextSibling);var r=ma;t&&xa(e,t)?wa(r,n):(e.flags=-4097&e.flags|2,ba=!1,ma=e)}}else{if(Sa(e))throw Error(ye(418));e.flags=-4097&e.flags|2,ba=!1,ma=e}}}function Ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ma=e}function _a(e){if(e!==ma)return!1;if(!ba)return Ca(e),ba=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=va)){if(Sa(e))throw Ea(),Error(ye(418));for(;t;)wa(e,t),t=ki(t.nextSibling)}if(Ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(ye(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){va=ki(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}va=null}}else va=ma?ki(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=va;e;)e=ki(e.nextSibling)}function Aa(){va=ma=null,ba=!1}function Ta(e){null===ya?ya=[e]:ya.push(e)}var Ra=Pe.ReactCurrentBatchConfig;function ja(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(ye(309));var r=n.stateNode}if(!r)throw Error(ye(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!=typeof e)throw Error(ye(284));if(!n._owner)throw Error(ye(290,e))}return e}function Na(e,t){throw e=Object.prototype.toString.call(t),Error(ye(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function La(e){return(0,e._init)(e._payload)}function Oa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=qu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Zu(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function l(e,t,n,r){var i=n.type;return i===$e?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===qe&&La(i)===t.type)?((r=o(t,n.props)).ref=ja(e,t,n),r.return=e,r):((r=Ku(n.type,n.key,n.props,null,e.mode,r)).ref=ja(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Qu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function u(e,t,n,r,i){return null===t||7!==t.tag?((t=Gu(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Zu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case Ie:return(n=Ku(t.type,t.key,t.props,null,e.mode,n)).ref=ja(e,null,t),n.return=e,n;case Me:return(t=Qu(t,e.mode,n)).return=e,t;case qe:return d(e,(0,t._init)(t._payload),n)}if(gt(t)||Ye(t))return(t=Gu(t,e.mode,n,null)).return=e,t;Na(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case Ie:return n.key===o?l(e,t,n,r):null;case Me:return n.key===o?c(e,t,n,r):null;case qe:return p(e,t,(o=n._init)(n._payload),r)}if(gt(n)||Ye(n))return null!==o?null:u(e,t,n,r,null);Na(e,n)}return null}function f(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case Ie:return l(t,e=e.get(null===r.key?n:r.key)||null,r,o);case Me:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case qe:return f(e,t,n,(0,r._init)(r._payload),o)}if(gt(r)||Ye(r))return u(t,e=e.get(n)||null,r,o,null);Na(t,r)}return null}function h(o,a,s,l){for(var c=null,u=null,h=a,g=a=0,m=null;null!==h&&g<s.length;g++){h.index>g?(m=h,h=null):m=h.sibling;var v=p(o,h,s[g],l);if(null===v){null===h&&(h=m);break}e&&h&&null===v.alternate&&t(o,h),a=i(v,a,g),null===u?c=v:u.sibling=v,u=v,h=m}if(g===s.length)return n(o,h),ba&&pa(o,g),c;if(null===h){for(;g<s.length;g++)null!==(h=d(o,s[g],l))&&(a=i(h,a,g),null===u?c=h:u.sibling=h,u=h);return ba&&pa(o,g),c}for(h=r(o,h);g<s.length;g++)null!==(m=f(h,o,g,s[g],l))&&(e&&null!==m.alternate&&h.delete(null===m.key?g:m.key),a=i(m,a,g),null===u?c=m:u.sibling=m,u=m);return e&&h.forEach((function(e){return t(o,e)})),ba&&pa(o,g),c}function g(o,a,s,l){var c=Ye(s);if("function"!=typeof c)throw Error(ye(150));if(null==(s=c.call(s)))throw Error(ye(151));for(var u=c=null,h=a,g=a=0,m=null,v=s.next();null!==h&&!v.done;g++,v=s.next()){h.index>g?(m=h,h=null):m=h.sibling;var b=p(o,h,v.value,l);if(null===b){null===h&&(h=m);break}e&&h&&null===b.alternate&&t(o,h),a=i(b,a,g),null===u?c=b:u.sibling=b,u=b,h=m}if(v.done)return n(o,h),ba&&pa(o,g),c;if(null===h){for(;!v.done;g++,v=s.next())null!==(v=d(o,v.value,l))&&(a=i(v,a,g),null===u?c=v:u.sibling=v,u=v);return ba&&pa(o,g),c}for(h=r(o,h);!v.done;g++,v=s.next())null!==(v=f(h,o,g,v.value,l))&&(e&&null!==v.alternate&&h.delete(null===v.key?g:v.key),a=i(v,a,g),null===u?c=v:u.sibling=v,u=v);return e&&h.forEach((function(e){return t(o,e)})),ba&&pa(o,g),c}return function e(r,i,s,l){if("object"==typeof s&&null!==s&&s.type===$e&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case Ie:e:{for(var c=s.key,u=i;null!==u;){if(u.key===c){if((c=s.type)===$e){if(7===u.tag){n(r,u.sibling),(i=o(u,s.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===qe&&La(c)===u.type){n(r,u.sibling),(i=o(u,s.props)).ref=ja(r,u,s),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}s.type===$e?((i=Gu(s.props.children,r.mode,l,s.key)).return=r,r=i):((l=Ku(s.type,s.key,s.props,null,r.mode,l)).ref=ja(r,i,s),l.return=r,r=l)}return a(r);case Me:e:{for(u=s.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===s.containerInfo&&i.stateNode.implementation===s.implementation){n(r,i.sibling),(i=o(i,s.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Qu(s,r.mode,l)).return=r,r=i}return a(r);case qe:return e(r,i,(u=s._init)(s._payload),l)}if(gt(s))return h(r,i,s,l);if(Ye(s))return g(r,i,s,l);Na(r,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,s)).return=r,r=i):(n(r,i),(i=Zu(s,r.mode,l)).return=r,r=i),a(r)):n(r,i)}}var Pa=Oa(!0),Ia=Oa(!1),Ma=Di(null),$a=null,Da=null,Ua=null;function Ba(){Ua=Da=$a=null}function za(e){var t=Ma.current;Ui(Ma),e._currentValue=t}function Fa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Va(e,t){$a=e,Ua=Da=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(Ll=!0),e.firstContext=null)}function Wa(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},null===Da){if(null===$a)throw Error(ye(308));Da=e,$a.dependencies={lanes:0,firstContext:e}}else Da=Da.next=e;return t}var Ha=null;function qa(e){null===Ha?Ha=[e]:Ha.push(e)}function Ka(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,qa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ga(e,r)}function Ga(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ya=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&zc){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ga(e,n)}return null===(o=r.interleaved)?(t.next=t,qa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ga(e,n)}function es(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ln(e,n)}}function ts(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var o=e.updateQueue;Ya=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,g=s;switch(p=t,f=n,g.tag){case 1:if("function"==typeof(h=g.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(p="function"==typeof(h=g.payload)?h.call(f,d,p):h))break e;d=Qe({},d,p);break e;case 2:Ya=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=p;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Yc|=a,e.lanes=a,e.memoizedState=d}}function rs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(ye(191,o));o.call(r)}}}var os={},is=Di(os),as=Di(os),ss=Di(os);function ls(e){if(e===os)throw Error(ye(174));return e}function cs(e,t){switch(Bi(ss,t),Bi(as,e),Bi(is,os),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:St(null,"");break;default:t=St(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ui(is),Bi(is,t)}function us(){Ui(is),Ui(as),Ui(ss)}function ds(e){ls(ss.current);var t=ls(is.current),n=St(t,e.type);t!==n&&(Bi(as,e),Bi(is,n))}function ps(e){as.current===e&&(Ui(is),Ui(as))}var fs=Di(0);function hs(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gs=[];function ms(){for(var e=0;e<gs.length;e++)gs[e]._workInProgressVersionPrimary=null;gs.length=0}var vs=Pe.ReactCurrentDispatcher,bs=Pe.ReactCurrentBatchConfig,ys=0,ws=null,xs=null,Ss=null,ks=!1,Cs=!1,_s=0,Es=0;function As(){throw Error(ye(321))}function Ts(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xo(e[n],t[n]))return!1;return!0}function Rs(e,t,n,r,o,i){if(ys=i,ws=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vs.current=null===e||null===e.memoizedState?pl:fl,e=n(r,o),Cs){i=0;do{if(Cs=!1,_s=0,25<=i)throw Error(ye(301));i+=1,Ss=xs=null,t.updateQueue=null,vs.current=hl,e=n(r,o)}while(Cs)}if(vs.current=dl,t=null!==xs&&null!==xs.next,ys=0,Ss=xs=ws=null,ks=!1,t)throw Error(ye(300));return e}function js(){var e=0!==_s;return _s=0,e}function Ns(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ss?ws.memoizedState=Ss=e:Ss=Ss.next=e,Ss}function Ls(){if(null===xs){var e=ws.alternate;e=null!==e?e.memoizedState:null}else e=xs.next;var t=null===Ss?ws.memoizedState:Ss.next;if(null!==t)Ss=t,xs=e;else{if(null===e)throw Error(ye(310));e={memoizedState:(xs=e).memoizedState,baseState:xs.baseState,baseQueue:xs.baseQueue,queue:xs.queue,next:null},null===Ss?ws.memoizedState=Ss=e:Ss=Ss.next=e}return Ss}function Os(e,t){return"function"==typeof t?t(e):t}function Ps(e){var t=Ls(),n=t.queue;if(null===n)throw Error(ye(311));n.lastRenderedReducer=e;var r=xs,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=a=null,l=null,c=i;do{var u=c.lane;if((ys&u)===u)null!==l&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===l?(s=l=d,a=r):l=l.next=d,ws.lanes|=u,Yc|=u}c=c.next}while(null!==c&&c!==i);null===l?a=r:l.next=s,xo(r,t.memoizedState)||(Ll=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,ws.lanes|=i,Yc|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Is(e){var t=Ls(),n=t.queue;if(null===n)throw Error(ye(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do{i=e(i,a.action),a=a.next}while(a!==o);xo(i,t.memoizedState)||(Ll=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ms(){}function $s(e,t){var n=ws,r=Ls(),o=t(),i=!xo(r.memoizedState,o);if(i&&(r.memoizedState=o,Ll=!0),r=r.queue,Ys(Bs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==Ss&&1&Ss.memoizedState.tag){if(n.flags|=2048,Ws(9,Us.bind(null,n,r,o,t),void 0,null),null===Fc)throw Error(ye(349));30&ys||Ds(n,t,o)}return o}function Ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ws.updateQueue)?(t={lastEffect:null,stores:null},ws.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Us(e,t,n,r){t.value=n,t.getSnapshot=r,zs(t)&&Fs(e)}function Bs(e,t,n){return n((function(){zs(t)&&Fs(e)}))}function zs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xo(e,n)}catch(Nv){return!0}}function Fs(e){var t=Ga(e,1);null!==t&&gu(t,e,1,-1)}function Vs(e){var t=Ns();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:e},t.queue=e,e=e.dispatch=sl.bind(null,ws,e),[t.memoizedState,e]}function Ws(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ws.updateQueue)?(t={lastEffect:null,stores:null},ws.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Hs(){return Ls().memoizedState}function qs(e,t,n,r){var o=Ns();ws.flags|=e,o.memoizedState=Ws(1|t,n,void 0,void 0===r?null:r)}function Ks(e,t,n,r){var o=Ls();r=void 0===r?null:r;var i=void 0;if(null!==xs){var a=xs.memoizedState;if(i=a.destroy,null!==r&&Ts(r,a.deps))return void(o.memoizedState=Ws(t,n,i,r))}ws.flags|=e,o.memoizedState=Ws(1|t,n,i,r)}function Gs(e,t){return qs(8390656,8,e,t)}function Ys(e,t){return Ks(2048,8,e,t)}function Zs(e,t){return Ks(4,2,e,t)}function Qs(e,t){return Ks(4,4,e,t)}function Xs(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Js(e,t,n){return n=null!=n?n.concat([e]):null,Ks(4,4,Xs.bind(null,t,e),n)}function el(){}function tl(e,t){var n=Ls();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nl(e,t){var n=Ls();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rl(e,t,n){return 21&ys?(xo(n,t)||(n=Rn(),ws.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ll=!0),e.memoizedState=n)}function ol(e,t){var n=On;On=0!==n&&4>n?n:4,e(!0);var r=bs.transition;bs.transition={};try{e(!1),t()}finally{On=n,bs.transition=r}}function il(){return Ls().memoizedState}function al(e,t,n){var r=hu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ll(e))cl(t,n);else if(null!==(n=Ka(e,t,n,r))){gu(n,e,r,fu()),ul(n,t,r)}}function sl(e,t,n){var r=hu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ll(e))cl(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,xo(s,a)){var l=t.interleaved;return null===l?(o.next=o,qa(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(pP){}null!==(n=Ka(e,t,o,r))&&(gu(n,e,r,o=fu()),ul(n,t,r))}}function ll(e){var t=e.alternate;return e===ws||null!==t&&t===ws}function cl(e,t){Cs=ks=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ul(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ln(e,n)}}var dl={readContext:Wa,useCallback:As,useContext:As,useEffect:As,useImperativeHandle:As,useInsertionEffect:As,useLayoutEffect:As,useMemo:As,useReducer:As,useRef:As,useState:As,useDebugValue:As,useDeferredValue:As,useTransition:As,useMutableSource:As,useSyncExternalStore:As,useId:As,unstable_isNewReconciler:!1},pl={readContext:Wa,useCallback:function(e,t){return Ns().memoizedState=[e,void 0===t?null:t],e},useContext:Wa,useEffect:Gs,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,qs(4194308,4,Xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return qs(4,2,e,t)},useMemo:function(e,t){var n=Ns();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ns();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=al.bind(null,ws,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ns().memoizedState=e},useState:Vs,useDebugValue:el,useDeferredValue:function(e){return Ns().memoizedState=e},useTransition:function(){var e=Vs(!1),t=e[0];return e=ol.bind(null,e[1]),Ns().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ws,o=Ns();if(ba){if(void 0===n)throw Error(ye(407));n=n()}else{if(n=t(),null===Fc)throw Error(ye(349));30&ys||Ds(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Gs(Bs.bind(null,r,i,e),[e]),r.flags|=2048,Ws(9,Us.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ns(),t=Fc.identifierPrefix;if(ba){var n=da;t=":"+t+"R"+(n=(ua&~(1<<32-wn(ua)-1)).toString(32)+n),0<(n=_s++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Es++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fl={readContext:Wa,useCallback:tl,useContext:Wa,useEffect:Ys,useImperativeHandle:Js,useInsertionEffect:Zs,useLayoutEffect:Qs,useMemo:nl,useReducer:Ps,useRef:Hs,useState:function(){return Ps(Os)},useDebugValue:el,useDeferredValue:function(e){return rl(Ls(),xs.memoizedState,e)},useTransition:function(){return[Ps(Os)[0],Ls().memoizedState]},useMutableSource:Ms,useSyncExternalStore:$s,useId:il,unstable_isNewReconciler:!1},hl={readContext:Wa,useCallback:tl,useContext:Wa,useEffect:Ys,useImperativeHandle:Js,useInsertionEffect:Zs,useLayoutEffect:Qs,useMemo:nl,useReducer:Is,useRef:Hs,useState:function(){return Is(Os)},useDebugValue:el,useDeferredValue:function(e){var t=Ls();return null===xs?t.memoizedState=e:rl(t,xs.memoizedState,e)},useTransition:function(){return[Is(Os)[0],Ls().memoizedState]},useMutableSource:Ms,useSyncExternalStore:$s,useId:il,unstable_isNewReconciler:!1};function gl(e,t){if(e&&e.defaultProps){for(var n in t=Qe({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ml(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Qe({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var vl={isMounted:function(e){return!!(e=e._reactInternals)&&tn(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),o=hu(e),i=Xa(r,o);i.payload=t,null!=n&&(i.callback=n),null!==(t=Ja(e,i,o))&&(gu(t,e,o,r),es(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),o=hu(e),i=Xa(r,o);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=Ja(e,i,o))&&(gu(t,e,o,r),es(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=hu(e),o=Xa(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=Ja(e,o,r))&&(gu(t,e,r,n),es(t,e,r))}};function bl(e,t,n,r,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!So(n,r)||!So(o,i))}function yl(e,t,n){var r=!1,o=zi,i=t.contextType;return"object"==typeof i&&null!==i?i=Wa(i):(o=qi(t)?Wi:Fi.current,i=(r=null!=(r=t.contextTypes))?Hi(e,o):zi),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function wl(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Za(e);var i=t.contextType;"object"==typeof i&&null!==i?o.context=Wa(i):(i=qi(t)?Wi:Fi.current,o.context=Hi(e,i)),o.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(ml(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&vl.enqueueReplaceState(o,o.state,null),ns(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function Sl(e,t){try{var n="",r=t;do{n+=tt(r),r=r.return}while(r);var o=n}catch(rh){o="\nError generating stack: "+rh.message+"\n"+rh.stack}return{value:e,source:t,stack:o,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Cl(e,t){try{console.error(t.value)}catch(mP){setTimeout((function(){throw mP}))}}var _l="function"==typeof WeakMap?WeakMap:Map;function El(e,t,n){(n=Xa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ru||(ru=!0,ou=r),Cl(0,t)},n}function Al(e,t,n){(n=Xa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Cl(0,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){Cl(0,t),"function"!=typeof r&&(null===iu?iu=new Set([this]):iu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Tl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new _l;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Du.bind(null,e,t,n),t.then(e,e))}function Rl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function jl(e,t,n,r,o){return 1&e.mode?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Xa(-1,1)).tag=2,Ja(n,t,1))),n.lanes|=1),e)}var Nl=Pe.ReactCurrentOwner,Ll=!1;function Ol(e,t,n,r){t.child=null===e?Ia(t,null,n,r):Pa(t,e.child,n,r)}function Pl(e,t,n,r,o){n=n.render;var i=t.ref;return Va(t,o),r=Rs(e,t,n,r,i,o),n=js(),null===e||Ll?(ba&&n&&ha(t),t.flags|=1,Ol(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,rc(e,t,o))}function Il(e,t,n,r,o){if(null===e){var i=n.type;return"function"!=typeof i||Hu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ku(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ml(e,t,i,r,o))}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:So)(a,r)&&e.ref===t.ref)return rc(e,t,o)}return t.flags|=1,(e=qu(i,r)).ref=t.ref,e.return=t,t.child=e}function Ml(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(So(i,r)&&e.ref===t.ref){if(Ll=!1,t.pendingProps=r=i,!(e.lanes&o))return t.lanes=e.lanes,rc(e,t,o);131072&e.flags&&(Ll=!0)}}return Ul(e,t,n,r,o)}function $l(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Bi(qc,Hc),Hc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Bi(qc,Hc),Hc|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bi(qc,Hc),Hc|=n;else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Bi(qc,Hc),Hc|=r;return Ol(e,t,o,n),t.child}function Dl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,n,r,o){var i=qi(n)?Wi:Fi.current;return i=Hi(t,i),Va(t,o),n=Rs(e,t,n,r,i,o),r=js(),null===e||Ll?(ba&&r&&ha(t),t.flags|=1,Ol(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,rc(e,t,o))}function Bl(e,t,n,r,o){if(qi(n)){var i=!0;Zi(t)}else i=!1;if(Va(t,o),null===t.stateNode)nc(e,t),yl(t,n,r),xl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"==typeof c&&null!==c?c=Wa(c):c=Hi(t,c=qi(n)?Wi:Fi.current);var u=n.getDerivedStateFromProps,d="function"==typeof u||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==c)&&wl(t,a,r,c),Ya=!1;var p=t.memoizedState;a.state=p,ns(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Vi.current||Ya?("function"==typeof u&&(ml(t,n,u,r),l=t.memoizedState),(s=Ya||bl(t,n,s,r,p,l,c))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qa(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:gl(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=Wa(l):l=Hi(t,l=qi(n)?Wi:Fi.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||p!==l)&&wl(t,a,r,l),Ya=!1,p=t.memoizedState,a.state=p,ns(t,r,a,o);var h=t.memoizedState;s!==d||p!==h||Vi.current||Ya?("function"==typeof f&&(ml(t,n,f,r),h=t.memoizedState),(c=Ya||bl(t,n,c,r,p,h,l)||!1)?(u||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=c):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,i,o)}function zl(e,t,n,r,o,i){Dl(e,t);var a=!!(128&t.flags);if(!r&&!a)return o&&Qi(t,n,!1),rc(e,t,i);r=t.stateNode,Nl.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,s,i)):Ol(e,t,s,i),t.memoizedState=r.state,o&&Qi(t,n,!0),t.child}function Fl(e){var t=e.stateNode;t.pendingContext?Gi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Gi(0,t.context,!1),cs(e,t.containerInfo)}function Vl(e,t,n,r,o){return Aa(),Ta(o),t.flags|=256,Ol(e,t,n,r),t.child}var Wl,Hl,ql,Kl,Gl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zl(e,t,n){var r,o=t.pendingProps,i=fs.current,a=!1,s=!!(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&!!(2&i)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Bi(fs,1&i),null===e)return ka(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,a?(o=t.mode,a=t.child,s={mode:"hidden",children:s},1&o||null===a?a=Yu(s,o,0,null):(a.childLanes=0,a.pendingProps=s),e=Gu(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Yl(n),t.memoizedState=Gl,e):Ql(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,a){if(n)return 256&t.flags?(t.flags&=-257,Xl(e,t,a,r=kl(Error(ye(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yu({mode:"visible",children:r.children},o,0,null),(i=Gu(i,o,a,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,1&t.mode&&Pa(t,e.child,null,a),t.child.memoizedState=Yl(a),t.memoizedState=Gl,i);if(!(1&t.mode))return Xl(e,t,a,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Xl(e,t,a,r=kl(i=Error(ye(419)),r,void 0))}if(s=!!(a&e.childLanes),Ll||s){if(null!==(r=Fc)){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=o&(r.suspendedLanes|a)?0:o)&&o!==i.retryLane&&(i.retryLane=o,Ga(e,o),gu(r,e,o,-1))}return Tu(),Xl(e,t,a,r=kl(Error(ye(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Bu.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,va=ki(o.nextSibling),ma=t,ba=!0,ya=null,null!==e&&(sa[la++]=ua,sa[la++]=da,sa[la++]=ca,ua=e.id,da=e.overflow,ca=t),t=Ql(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(a){a=o.fallback,s=t.mode,r=(i=e.child).sibling;var l={mode:"hidden",children:o.children};return 1&s||t.child===i?(o=qu(i,l)).subtreeFlags=14680064&i.subtreeFlags:((o=t.child).childLanes=0,o.pendingProps=l,t.deletions=null),null!==r?a=qu(r,a):(a=Gu(a,s,n,null)).flags|=2,a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,s=null===(s=e.child.memoizedState)?Yl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Gl,o}return e=(a=e.child).sibling,o=qu(a,{mode:"visible",children:o.children}),!(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ql(e,t){return(t=Yu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Xl(e,t,n,r){return null!==r&&Ta(r),Pa(t,e.child,null,n),(e=Ql(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Jl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Fa(e.return,t,n)}function ec(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function tc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ol(e,t,r.children,n),2&(r=fs.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Jl(e,n,t);else if(19===e.tag)Jl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Bi(fs,r),1&t.mode)switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===hs(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ec(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===hs(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ec(t,!0,n,null,i);break;case"together":ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function nc(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rc(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Yc|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(ye(153));if(null!==t.child){for(n=qu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=qu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function oc(e,t){if(!ba)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ic(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ac(e,t,n){var r=t.pendingProps;switch(ga(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ic(t),null;case 1:case 17:return qi(t.type)&&Ki(),ic(t),null;case 3:return r=t.stateNode,us(),Ui(Vi),Ui(Fi),ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(_a(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ya&&(yu(ya),ya=null))),Hl(e,t),ic(t),null;case 5:ps(t);var o=ls(ss.current);if(n=t.type,null!==e&&null!=t.stateNode)ql(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(ye(166));return ic(t),null}if(e=ls(is.current),_a(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ei]=t,r[Ai]=i,e=!!(1&t.mode),n){case"dialog":Jo("cancel",r),Jo("close",r);break;case"iframe":case"object":case"embed":Jo("load",r);break;case"video":case"audio":for(o=0;o<Yo.length;o++)Jo(Yo[o],r);break;case"source":Jo("error",r);break;case"img":case"image":case"link":Jo("error",r),Jo("load",r);break;case"details":Jo("toggle",r);break;case"input":ut(r,i),Jo("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Jo("invalid",r);break;case"textarea":bt(r,i),Jo("invalid",r)}for(var a in Nt(n,i),o=null,i)if(i.hasOwnProperty(a)){var s=i[a];"children"===a?"string"==typeof s?r.textContent!==s&&(!0!==i.suppressHydrationWarning&&pi(r.textContent,s,e),o=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==i.suppressHydrationWarning&&pi(r.textContent,s,e),o=["children",""+s]):xe.hasOwnProperty(a)&&null!=s&&"onScroll"===a&&Jo("scroll",r)}switch(n){case"input":at(r),ft(r,i,!0);break;case"textarea":at(r),wt(r);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(r.onclick=fi)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=xt(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ei]=t,e[Ai]=r,Wl(e,t,!1,!1),t.stateNode=e;e:{switch(a=Lt(n,r),n){case"dialog":Jo("cancel",e),Jo("close",e),o=r;break;case"iframe":case"object":case"embed":Jo("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yo.length;o++)Jo(Yo[o],e);o=r;break;case"source":Jo("error",e),o=r;break;case"img":case"image":case"link":Jo("error",e),Jo("load",e),o=r;break;case"details":Jo("toggle",e),o=r;break;case"input":ut(e,r),o=ct(e,r),Jo("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Qe({},r,{value:void 0}),Jo("invalid",e);break;case"textarea":bt(e,r),o=vt(e,r),Jo("invalid",e)}for(i in Nt(n,o),s=o)if(s.hasOwnProperty(i)){var l=s[i];"style"===i?Rt(e,l):"dangerouslySetInnerHTML"===i?null!=(l=l?l.__html:void 0)&&Ct(e,l):"children"===i?"string"==typeof l?("textarea"!==n||""!==l)&&_t(e,l):"number"==typeof l&&_t(e,""+l):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(xe.hasOwnProperty(i)?null!=l&&"onScroll"===i&&Jo("scroll",e):null!=l&&Oe(e,i,l,a))}switch(n){case"input":at(e),ft(e,r,!1);break;case"textarea":at(e),wt(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ot(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?mt(e,!!r.multiple,i,!1):null!=r.defaultValue&&mt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ic(t),null;case 6:if(e&&null!=t.stateNode)Kl(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(ye(166));if(n=ls(ss.current),ls(is.current),_a(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ei]=t,(i=r.nodeValue!==n)&&null!==(e=ma))switch(e.tag){case 3:pi(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&pi(r.nodeValue,n,!!(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ei]=t,t.stateNode=r}return ic(t),null;case 13:if(Ui(fs),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ba&&null!==va&&1&t.mode&&!(128&t.flags))Ea(),Aa(),t.flags|=98560,i=!1;else if(i=_a(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(ye(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(ye(317));i[Ei]=t}else Aa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ic(t),i=!1}else null!==ya&&(yu(ya),ya=null),i=!0;if(!i)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&fs.current?0===Kc&&(Kc=3):Tu())),null!==t.updateQueue&&(t.flags|=4),ic(t),null);case 4:return us(),Hl(e,t),null===e&&ni(t.stateNode.containerInfo),ic(t),null;case 10:return za(t.type._context),ic(t),null;case 19:if(Ui(fs),null===(i=t.memoizedState))return ic(t),null;if(r=!!(128&t.flags),null===(a=i.rendering))if(r)oc(i,!1);else{if(0!==Kc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=hs(e))){for(t.flags|=128,oc(i,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(a=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Bi(fs,1&fs.current|2),t.child}e=e.sibling}null!==i.tail&&dn()>tu&&(t.flags|=128,r=!0,oc(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=hs(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),oc(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ba)return ic(t),null}else 2*dn()-i.renderingStartTime>tu&&1073741824!==n&&(t.flags|=128,r=!0,oc(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=i.last)?n.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=dn(),t.sibling=null,n=fs.current,Bi(fs,r?1&n|2:1&n),t):(ic(t),null);case 22:case 23:return Cu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Hc)&&(ic(t),6&t.subtreeFlags&&(t.flags|=8192)):ic(t),null;case 24:case 25:return null}throw Error(ye(156,t.tag))}function sc(e,t){switch(ga(t),t.tag){case 1:return qi(t.type)&&Ki(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return us(),Ui(Vi),Ui(Fi),ms(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ps(t),null;case 13:if(Ui(fs),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(ye(340));Aa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ui(fs),null;case 4:return us(),null;case 10:return za(t.type._context),null;case 22:case 23:return Cu(),null;default:return null}}Wl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Hl=function(){},ql=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ls(is.current);var i,a=null;switch(n){case"input":o=ct(e,o),r=ct(e,r),a=[];break;case"select":o=Qe({},o,{value:void 0}),r=Qe({},r,{value:void 0}),a=[];break;case"textarea":o=vt(e,o),r=vt(e,r),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=fi)}for(c in Nt(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(xe.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(null!=l||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(c,n)),n=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(xe.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&Jo("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Kl=function(e,t,n,r){n!==r&&(t.flags|=4)};var lc=!1,cc=!1,uc="function"==typeof WeakSet?WeakSet:Set,dc=null;function pc(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(Nv){$u(e,t,Nv)}else n.current=null}function fc(e,t,n){try{n()}catch(Nv){$u(e,t,Nv)}}var hc=!1;function gc(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&fc(t,n,i)}o=o.next}while(o!==r)}}function mc(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bc(e){var t=e.alternate;null!==t&&(e.alternate=null,bc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ei],delete t[Ai],delete t[Ri],delete t[ji],delete t[Ni])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return 5===e.tag||3===e.tag||4===e.tag}function wc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function xc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=fi));else if(4!==r&&null!==(e=e.child))for(xc(e,t,n),e=e.sibling;null!==e;)xc(e,t,n),e=e.sibling}function Sc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Sc(e,t,n),e=e.sibling;null!==e;)Sc(e,t,n),e=e.sibling}var kc=null,Cc=!1;function _c(e,t,n){for(n=n.child;null!==n;)Ec(e,t,n),n=n.sibling}function Ec(e,t,n){if(yn&&"function"==typeof yn.onCommitFiberUnmount)try{yn.onCommitFiberUnmount(bn,n)}catch(yP){}switch(n.tag){case 5:cc||pc(n,t);case 6:var r=kc,o=Cc;kc=null,_c(e,t,n),Cc=o,null!==(kc=r)&&(Cc?(e=kc,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):kc.removeChild(n.stateNode));break;case 18:null!==kc&&(Cc?(e=kc,n=n.stateNode,8===e.nodeType?Si(e.parentNode,n):1===e.nodeType&&Si(e,n),nr(e)):Si(kc,n.stateNode));break;case 4:r=kc,o=Cc,kc=n.stateNode.containerInfo,Cc=!0,_c(e,t,n),kc=r,Cc=o;break;case 0:case 11:case 14:case 15:if(!cc&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(2&i||4&i)&&fc(n,t,a),o=o.next}while(o!==r)}_c(e,t,n);break;case 1:if(!cc&&(pc(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(yP){$u(n,t,yP)}_c(e,t,n);break;case 21:_c(e,t,n);break;case 22:1&n.mode?(cc=(r=cc)||null!==n.memoizedState,_c(e,t,n),cc=r):_c(e,t,n);break;default:_c(e,t,n)}}function Ac(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new uc),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Tc(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;null!==s;){switch(s.tag){case 5:kc=s.stateNode,Cc=!1;break e;case 3:case 4:kc=s.stateNode.containerInfo,Cc=!0;break e}s=s.return}if(null===kc)throw Error(ye(160));Ec(i,a,o),kc=null,Cc=!1;var l=o.alternate;null!==l&&(l.return=null),o.return=null}catch(pP){$u(o,t,pP)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Rc(t,e),t=t.sibling}function Rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tc(t,e),jc(e),4&r){try{gc(3,e,e.return),mc(3,e)}catch(g){$u(e,e.return,g)}try{gc(5,e,e.return)}catch(g){$u(e,e.return,g)}}break;case 1:Tc(t,e),jc(e),512&r&&null!==n&&pc(n,n.return);break;case 5:if(Tc(t,e),jc(e),512&r&&null!==n&&pc(n,n.return),32&e.flags){var o=e.stateNode;try{_t(o,"")}catch(g){$u(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,a=null!==n?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===i.type&&null!=i.name&&dt(o,i),Lt(s,a);var c=Lt(s,i);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];"style"===u?Rt(o,d):"dangerouslySetInnerHTML"===u?Ct(o,d):"children"===u?_t(o,d):Oe(o,u,d,c)}switch(s){case"input":pt(o,i);break;case"textarea":yt(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var f=i.value;null!=f?mt(o,!!i.multiple,f,!1):p!==!!i.multiple&&(null!=i.defaultValue?mt(o,!!i.multiple,i.defaultValue,!0):mt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ai]=i}catch(g){$u(e,e.return,g)}}break;case 6:if(Tc(t,e),jc(e),4&r){if(null===e.stateNode)throw Error(ye(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){$u(e,e.return,g)}}break;case 3:if(Tc(t,e),jc(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(g){$u(e,e.return,g)}break;case 4:default:Tc(t,e),jc(e);break;case 13:Tc(t,e),jc(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(eu=dn())),4&r&&Ac(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(cc=(c=cc)||u,Tc(t,e),cc=c):Tc(t,e),jc(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&1&e.mode)for(dc=e,u=e.child;null!==u;){for(d=dc=u;null!==dc;){switch(f=(p=dc).child,p.tag){case 0:case 11:case 14:case 15:gc(4,p,p.return);break;case 1:pc(p,p.return);var h=p.stateNode;if("function"==typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){$u(r,n,g)}}break;case 5:pc(p,p.return);break;case 22:if(null!==p.memoizedState){Pc(d);continue}}null!==f?(f.return=p,dc=f):Pc(d)}u=u.sibling}e:for(u=null,d=e;;){if(5===d.tag){if(null===u){u=d;try{o=d.stateNode,c?"function"==typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=Tt("display",a))}catch(g){$u(e,e.return,g)}}}else if(6===d.tag){if(null===u)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){$u(e,e.return,g)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tc(t,e),jc(e),4&r&&Ac(e);case 21:}}function jc(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(yc(n)){var r=n;break e}n=n.return}throw Error(ye(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(_t(o,""),r.flags&=-33),Sc(e,wc(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;xc(e,wc(e),i);break;default:throw Error(ye(161))}}catch(Uv){$u(e,e.return,Uv)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Nc(e,t,n){dc=e,Lc(e)}function Lc(e,t,n){for(var r=!!(1&e.mode);null!==dc;){var o=dc,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||lc;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||cc;s=lc;var c=cc;if(lc=a,(cc=l)&&!c)for(dc=o;null!==dc;)l=(a=dc).child,22===a.tag&&null!==a.memoizedState?Ic(o):null!==l?(l.return=a,dc=l):Ic(o);for(;null!==i;)dc=i,Lc(i),i=i.sibling;dc=o,lc=s,cc=c}Oc(e)}else 8772&o.subtreeFlags&&null!==i?(i.return=o,dc=i):Oc(e)}}function Oc(e){for(;null!==dc;){var t=dc;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:cc||mc(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cc)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&rs(t,i,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}rs(t,a,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var d=u.dehydrated;null!==d&&nr(d)}}}break;default:throw Error(ye(163))}cc||512&t.flags&&vc(t)}catch(Qx){$u(t,t.return,Qx)}}if(t===e){dc=null;break}if(null!==(n=t.sibling)){n.return=t.return,dc=n;break}dc=t.return}}function Pc(e){for(;null!==dc;){var t=dc;if(t===e){dc=null;break}var n=t.sibling;if(null!==n){n.return=t.return,dc=n;break}dc=t.return}}function Ic(e){for(;null!==dc;){var t=dc;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mc(4,t)}catch(Uv){$u(t,n,Uv)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(Uv){$u(t,o,Uv)}}var i=t.return;try{vc(t)}catch(Uv){$u(t,i,Uv)}break;case 5:var a=t.return;try{vc(t)}catch(Uv){$u(t,a,Uv)}}}catch(Uv){$u(t,t.return,Uv)}if(t===e){dc=null;break}var s=t.sibling;if(null!==s){s.return=t.return,dc=s;break}dc=t.return}}var Mc,$c=Math.ceil,Dc=Pe.ReactCurrentDispatcher,Uc=Pe.ReactCurrentOwner,Bc=Pe.ReactCurrentBatchConfig,zc=0,Fc=null,Vc=null,Wc=0,Hc=0,qc=Di(0),Kc=0,Gc=null,Yc=0,Zc=0,Qc=0,Xc=null,Jc=null,eu=0,tu=1/0,nu=null,ru=!1,ou=null,iu=null,au=!1,su=null,lu=0,cu=0,uu=null,du=-1,pu=0;function fu(){return 6&zc?dn():-1!==du?du:du=dn()}function hu(e){return 1&e.mode?2&zc&&0!==Wc?Wc&-Wc:null!==Ra.transition?(0===pu&&(pu=Rn()),pu):0!==(e=On)?e:e=void 0===(e=window.event)?16:ur(e.type):1}function gu(e,t,n,r){if(50<cu)throw cu=0,uu=null,Error(ye(185));Nn(e,n,r),2&zc&&e===Fc||(e===Fc&&(!(2&zc)&&(Zc|=n),4===Kc&&wu(e,Wc)),mu(e,r),1===n&&0===zc&&!(1&t.mode)&&(tu=dn()+500,Ji&&na()))}function mu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-wn(i),s=1<<a,l=o[a];-1===l?s&n&&!(s&r)||(o[a]=An(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=En(e,e===Fc?Wc:0);if(0===r)null!==n&&ln(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&ln(n),1===t)0===e.tag?function(e){Ji=!0,ta(e)}(xu.bind(null,e)):ta(xu.bind(null,e)),wi((function(){!(6&zc)&&na()})),n=null;else{switch(Pn(r)){case 1:n=fn;break;case 4:n=hn;break;case 16:default:n=gn;break;case 536870912:n=vn}n=Fu(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(du=-1,pu=0,6&zc)throw Error(ye(327));var n=e.callbackNode;if(Iu()&&e.callbackNode!==n)return null;var r=En(e,e===Fc?Wc:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=Ru(e,r);else{t=r;var o=zc;zc|=2;var i=Au();for(Fc===e&&Wc===t||(nu=null,tu=dn()+500,_u(e,t));;)try{Nu();break}catch(yP){Eu(e,yP)}Ba(),Dc.current=i,zc=o,null!==Vc?t=0:(Fc=null,Wc=0,t=Kc)}if(0!==t){if(2===t&&(0!==(o=Tn(e))&&(r=o,t=bu(e,o))),1===t)throw n=Gc,_u(e,0),wu(e,r),mu(e,dn()),n;if(6===t)wu(e,r);else{if(o=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xo(i(),o))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)||(t=Ru(e,r),2===t&&(i=Tn(e),0!==i&&(r=i,t=bu(e,i))),1!==t)))throw n=Gc,_u(e,0),wu(e,r),mu(e,dn()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(ye(345));case 2:case 5:Pu(e,Jc,nu);break;case 3:if(wu(e,r),(130023424&r)===r&&10<(t=eu+500-dn())){if(0!==En(e,0))break;if(((o=e.suspendedLanes)&r)!==r){fu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vi(Pu.bind(null,e,Jc,nu),t);break}Pu(e,Jc,nu);break;case 4:if(wu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-wn(r);i=1<<a,(a=t[a])>o&&(o=a),r&=~i}if(r=o,10<(r=(120>(r=dn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$c(r/1960))-r)){e.timeoutHandle=vi(Pu.bind(null,e,Jc,nu),r);break}Pu(e,Jc,nu);break;default:throw Error(ye(329))}}}return mu(e,dn()),e.callbackNode===n?vu.bind(null,e):null}function bu(e,t){var n=Xc;return e.current.memoizedState.isDehydrated&&(_u(e,t).flags|=256),2!==(e=Ru(e,t))&&(t=Jc,Jc=n,null!==t&&yu(t)),e}function yu(e){null===Jc?Jc=e:Jc.push.apply(Jc,e)}function wu(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wn(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if(6&zc)throw Error(ye(327));Iu();var t=En(e,0);if(!(1&t))return mu(e,dn()),null;var n=Ru(e,t);if(0!==e.tag&&2===n){var r=Tn(e);0!==r&&(t=r,n=bu(e,r))}if(1===n)throw n=Gc,_u(e,0),wu(e,t),mu(e,dn()),n;if(6===n)throw Error(ye(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e,Jc,nu),mu(e,dn()),null}function Su(e,t){var n=zc;zc|=1;try{return e(t)}finally{0===(zc=n)&&(tu=dn()+500,Ji&&na())}}function ku(e){null!==su&&0===su.tag&&!(6&zc)&&Iu();var t=zc;zc|=1;var n=Bc.transition,r=On;try{if(Bc.transition=null,On=1,e)return e()}finally{On=r,Bc.transition=n,!(6&(zc=t))&&na()}}function Cu(){Hc=qc.current,Ui(qc)}function _u(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,bi(n)),null!==Vc)for(n=Vc.return;null!==n;){var r=n;switch(ga(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ki();break;case 3:us(),Ui(Vi),Ui(Fi),ms();break;case 5:ps(r);break;case 4:us();break;case 13:case 19:Ui(fs);break;case 10:za(r.type._context);break;case 22:case 23:Cu()}n=n.return}if(Fc=e,Vc=e=qu(e.current,null),Wc=Hc=t,Kc=0,Gc=null,Qc=Zc=Yc=0,Jc=Xc=null,null!==Ha){for(t=0;t<Ha.length;t++)if(null!==(r=(n=Ha[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ha=null}return e}function Eu(e,t){for(;;){var n=Vc;try{if(Ba(),vs.current=dl,ks){for(var r=ws.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ks=!1}if(ys=0,Ss=xs=ws=null,Cs=!1,_s=0,Uc.current=null,null===n||null===n.return){Kc=1,Gc=t,Vc=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Wc,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l,u=s,d=u.tag;if(!(1&u.mode||0!==d&&11!==d&&15!==d)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=Rl(a);if(null!==f){f.flags&=-257,jl(f,a,s,0,t),1&f.mode&&Tl(i,c,t),l=c;var h=(t=f).updateQueue;if(null===h){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break e}if(!(1&t)){Tl(i,c,t),Tu();break e}l=Error(ye(426))}else if(ba&&1&s.mode){var m=Rl(a);if(null!==m){!(65536&m.flags)&&(m.flags|=256),jl(m,a,s,0,t),Ta(Sl(l,s));break e}}i=l=Sl(l,s),4!==Kc&&(Kc=2),null===Xc?Xc=[i]:Xc.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,ts(i,El(0,l,t));break e;case 1:s=l;var v=i.type,b=i.stateNode;if(!(128&i.flags||"function"!=typeof v.getDerivedStateFromError&&(null===b||"function"!=typeof b.componentDidCatch||null!==iu&&iu.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,ts(i,Al(i,s,t));break e}}i=i.return}while(null!==i)}Ou(n)}catch(y){t=y,Vc===n&&null!==n&&(Vc=n=n.return);continue}break}}function Au(){var e=Dc.current;return Dc.current=dl,null===e?dl:e}function Tu(){0!==Kc&&3!==Kc&&2!==Kc||(Kc=4),null===Fc||!(268435455&Yc)&&!(268435455&Zc)||wu(Fc,Wc)}function Ru(e,t){var n=zc;zc|=2;var r=Au();for(Fc===e&&Wc===t||(nu=null,_u(e,t));;)try{ju();break}catch(dP){Eu(e,dP)}if(Ba(),zc=n,Dc.current=r,null!==Vc)throw Error(ye(261));return Fc=null,Wc=0,Kc}function ju(){for(;null!==Vc;)Lu(Vc)}function Nu(){for(;null!==Vc&&!cn();)Lu(Vc)}function Lu(e){var t=Mc(e.alternate,e,Hc);e.memoizedProps=e.pendingProps,null===t?Ou(e):Vc=t,Uc.current=null}function Ou(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=sc(n,t)))return n.flags&=32767,void(Vc=n);if(null===e)return Kc=6,void(Vc=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=ac(n,t,Hc)))return void(Vc=n);if(null!==(t=t.sibling))return void(Vc=t);Vc=t=e}while(null!==t);0===Kc&&(Kc=5)}function Pu(e,t,n){var r=On,o=Bc.transition;try{Bc.transition=null,On=1,function(e,t,n,r){do{Iu()}while(null!==su);if(6&zc)throw Error(ye(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ye(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-wn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,i),e===Fc&&(Vc=Fc=null,Wc=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||au||(au=!0,Fu(gn,(function(){return Iu(),null}))),i=!!(15990&n.flags),!!(15990&n.subtreeFlags)||i){i=Bc.transition,Bc.transition=null;var a=On;On=1;var s=zc;zc|=4,Uc.current=null,function(e,t){if(hi=or,Ao(e=Eo())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var f;d!==n||0!==o&&3!==d.nodeType||(s=a+o),d!==i||0!==r&&3!==d.nodeType||(l=a+r),3===d.nodeType&&(a+=d.nodeValue.length),null!==(f=d.firstChild);)p=d,d=f;for(;;){if(d===e)break t;if(p===n&&++c===o&&(s=a),p===i&&++u===r&&(l=a),null!==(f=d.nextSibling))break;p=(d=p).parentNode}d=f}n=-1===s||-1===l?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},or=!1,dc=t;null!==dc;)if(e=(t=dc).child,1028&t.subtreeFlags&&null!==e)e.return=t,dc=e;else for(;null!==dc;){t=dc;try{var h=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,m=h.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:gl(t.type,g),m);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(ye(163))}}catch(w){$u(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,dc=e;break}dc=t.return}h=hc,hc=!1}(e,n),Rc(n,e),To(gi),or=!!hi,gi=hi=null,e.current=n,Nc(n),un(),zc=s,On=a,Bc.transition=i}else e.current=n;if(au&&(au=!1,su=e,lu=o),i=e.pendingLanes,0===i&&(iu=null),function(e){if(yn&&"function"==typeof yn.onCommitFiberRoot)try{yn.onCommitFiberRoot(bn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),mu(e,dn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ru)throw ru=!1,e=ou,ou=null,e;!!(1&lu)&&0!==e.tag&&Iu(),i=e.pendingLanes,1&i?e===uu?cu++:(cu=0,uu=e):cu=0,na()}(e,t,n,r)}finally{Bc.transition=o,On=r}return null}function Iu(){if(null!==su){var e=Pn(lu),t=Bc.transition,n=On;try{if(Bc.transition=null,On=16>e?16:e,null===su)var r=!1;else{if(e=su,su=null,lu=0,6&zc)throw Error(ye(331));var o=zc;for(zc|=4,dc=e.current;null!==dc;){var i=dc,a=i.child;if(16&dc.flags){var s=i.deletions;if(null!==s){for(var l=0;l<s.length;l++){var c=s[l];for(dc=c;null!==dc;){var u=dc;switch(u.tag){case 0:case 11:case 15:gc(8,u,i)}var d=u.child;if(null!==d)d.return=u,dc=d;else for(;null!==dc;){var p=(u=dc).sibling,f=u.return;if(bc(u),u===c){dc=null;break}if(null!==p){p.return=f,dc=p;break}dc=f}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(null!==g)}}dc=i}}if(2064&i.subtreeFlags&&null!==a)a.return=i,dc=a;else e:for(;null!==dc;){if(2048&(i=dc).flags)switch(i.tag){case 0:case 11:case 15:gc(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,dc=v;break e}dc=i.return}}var b=e.current;for(dc=b;null!==dc;){var y=(a=dc).child;if(2064&a.subtreeFlags&&null!==y)y.return=a,dc=y;else e:for(a=b;null!==dc;){if(2048&(s=dc).flags)try{switch(s.tag){case 0:case 11:case 15:mc(9,s)}}catch(x){$u(s,s.return,x)}if(s===a){dc=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,dc=w;break e}dc=s.return}}if(zc=o,na(),yn&&"function"==typeof yn.onPostCommitFiberRoot)try{yn.onPostCommitFiberRoot(bn,e)}catch(x){}r=!0}return r}finally{On=n,Bc.transition=t}}return!1}function Mu(e,t,n){e=Ja(e,t=El(0,t=Sl(n,t),1),1),t=fu(),null!==e&&(Nn(e,1,t),mu(e,t))}function $u(e,t,n){if(3===e.tag)Mu(e,e,n);else for(;null!==t;){if(3===t.tag){Mu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===iu||!iu.has(r))){t=Ja(t,e=Al(t,e=Sl(n,e),1),1),e=fu(),null!==t&&(Nn(t,1,e),mu(t,e));break}}t=t.return}}function Du(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=fu(),e.pingedLanes|=e.suspendedLanes&n,Fc===e&&(Wc&n)===n&&(4===Kc||3===Kc&&(130023424&Wc)===Wc&&500>dn()-eu?_u(e,0):Qc|=n),mu(e,t)}function Uu(e,t){0===t&&(1&e.mode?(t=Cn,!(130023424&(Cn<<=1))&&(Cn=4194304)):t=1);var n=fu();null!==(e=Ga(e,t))&&(Nn(e,t,n),mu(e,n))}function Bu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Uu(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ye(314))}null!==r&&r.delete(t),Uu(e,n)}function Fu(e,t){return sn(e,t)}function Vu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wu(e,t,n,r){return new Vu(e,t,n,r)}function Hu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function qu(e,t){var n=e.alternate;return null===n?((n=Wu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ku(e,t,n,r,o,i){var a=2;if(r=e,"function"==typeof e)Hu(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case $e:return Gu(n.children,o,i,t);case De:a=8,o|=8;break;case Ue:return(e=Wu(12,n,t,2|o)).elementType=Ue,e.lanes=i,e;case Ve:return(e=Wu(13,n,t,o)).elementType=Ve,e.lanes=i,e;case We:return(e=Wu(19,n,t,o)).elementType=We,e.lanes=i,e;case Ke:return Yu(n,o,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Be:a=10;break e;case ze:a=9;break e;case Fe:a=11;break e;case He:a=14;break e;case qe:a=16,r=null;break e}throw Error(ye(130,null==e?e:typeof e,""))}return(t=Wu(a,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Gu(e,t,n,r){return(e=Wu(7,e,r,t)).lanes=n,e}function Yu(e,t,n,r){return(e=Wu(22,e,r,t)).elementType=Ke,e.lanes=n,e.stateNode={isHidden:!1},e}function Zu(e,t,n){return(e=Wu(6,e,null,t)).lanes=n,e}function Qu(e,t,n){return(t=Wu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ju(e,t,n,r,o,i,a,s,l){return e=new Xu(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Wu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(i),e}function ed(e){if(!e)return zi;e:{if(tn(e=e._reactInternals)!==e||1!==e.tag)throw Error(ye(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(ye(171))}if(1===e.tag){var n=e.type;if(qi(n))return Yi(e,n,t)}return t}function td(e,t,n,r,o,i,a,s,l){return(e=Ju(n,r,!0,e,0,i,0,s,l)).context=ed(null),n=e.current,(i=Xa(r=fu(),o=hu(n))).callback=null!=t?t:null,Ja(n,i,o),e.current.lanes=o,Nn(e,o,r),mu(e,r),e}function nd(e,t,n,r){var o=t.current,i=fu(),a=hu(o);return n=ed(n),null===t.context?t.context=n:t.pendingContext=n,(t=Xa(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ja(o,t,a))&&(gu(e,o,a,i),es(e,o,a)),a}function rd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function od(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function id(e,t){od(e,t),(e=e.alternate)&&od(e,t)}Mc=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Vi.current)Ll=!0;else{if(!(e.lanes&n||128&t.flags))return Ll=!1,function(e,t,n){switch(t.tag){case 3:Fl(t),Aa();break;case 5:ds(t);break;case 1:qi(t.type)&&Zi(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Bi(Ma,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Bi(fs,1&fs.current),t.flags|=128,null):n&t.child.childLanes?Zl(e,t,n):(Bi(fs,1&fs.current),null!==(e=rc(e,t,n))?e.sibling:null);Bi(fs,1&fs.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return tc(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Bi(fs,fs.current),r)break;return null;case 22:case 23:return t.lanes=0,$l(e,t,n)}return rc(e,t,n)}(e,t,n);Ll=!!(131072&e.flags)}else Ll=!1,ba&&1048576&t.flags&&fa(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nc(e,t),e=t.pendingProps;var o=Hi(t,Fi.current);Va(t,n),o=Rs(null,t,r,e,o,n);var i=js();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qi(r)?(i=!0,Zi(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Za(t),o.updater=vl,t.stateNode=o,o._reactInternals=t,xl(t,r,e,n),t=zl(null,t,r,!0,i,n)):(t.tag=0,ba&&i&&ha(t),Ol(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nc(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return Hu(e)?1:0;if(null!=e){if((e=e.$$typeof)===Fe)return 11;if(e===He)return 14}return 2}(r),e=gl(r,e),o){case 0:t=Ul(null,t,r,e,n);break e;case 1:t=Bl(null,t,r,e,n);break e;case 11:t=Pl(null,t,r,e,n);break e;case 14:t=Il(null,t,r,gl(r.type,e),n);break e}throw Error(ye(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ul(e,t,r,o=t.elementType===r?o:gl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Bl(e,t,r,o=t.elementType===r?o:gl(r,o),n);case 3:e:{if(Fl(t),null===e)throw Error(ye(387));r=t.pendingProps,o=(i=t.memoizedState).element,Qa(e,t),ns(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Vl(e,t,r,n,o=Sl(Error(ye(423)),t));break e}if(r!==o){t=Vl(e,t,r,n,o=Sl(Error(ye(424)),t));break e}for(va=ki(t.stateNode.containerInfo.firstChild),ma=t,ba=!0,ya=null,n=Ia(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Aa(),r===o){t=rc(e,t,n);break e}Ol(e,t,r,n)}t=t.child}return t;case 5:return ds(t),null===e&&ka(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,a=o.children,mi(r,o)?a=null:null!==i&&mi(r,i)&&(t.flags|=32),Dl(e,t),Ol(e,t,a,n),t.child;case 6:return null===e&&ka(t),null;case 13:return Zl(e,t,n);case 4:return cs(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Pa(t,null,r,n):Ol(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,Pl(e,t,r,o=t.elementType===r?o:gl(r,o),n);case 7:return Ol(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ol(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Bi(Ma,r._currentValue),r._currentValue=a,null!==i)if(xo(i.value,a)){if(i.children===o.children&&!Vi.current){t=rc(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){a=i.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===i.tag){(l=Xa(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),Fa(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===i.tag)a=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(a=i.return))throw Error(ye(341));a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),Fa(a,n,t),a=i.sibling}else a=i.child;if(null!==a)a.return=i;else for(a=i;null!==a;){if(a===t){a=null;break}if(null!==(i=a.sibling)){i.return=a.return,a=i;break}a=a.return}i=a}Ol(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Va(t,n),r=r(o=Wa(o)),t.flags|=1,Ol(e,t,r,n),t.child;case 14:return o=gl(r=t.type,t.pendingProps),Il(e,t,r,o=gl(r.type,o),n);case 15:return Ml(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gl(r,o),nc(e,t),t.tag=1,qi(r)?(e=!0,Zi(t)):e=!1,Va(t,n),yl(t,r,o),xl(t,r,o,n),zl(null,t,r,!0,e,n);case 19:return tc(e,t,n);case 22:return $l(e,t,n)}throw Error(ye(156,t.tag))};var ad="function"==typeof reportError?reportError:function(e){console.error(e)};function sd(e){this._internalRoot=e}function ld(e){this._internalRoot=e}function cd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ud(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function dd(){}function pd(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"==typeof o){var s=o;o=function(){var e=rd(a);s.call(e)}}nd(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"==typeof r){var i=r;r=function(){var e=rd(a);i.call(e)}}var a=td(t,r,e,0,null,!1,0,"",dd);return e._reactRootContainer=a,e[Ti]=a.current,ni(8===e.nodeType?e.parentNode:e),ku(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var s=r;r=function(){var e=rd(l);s.call(e)}}var l=Ju(e,0,!1,null,0,!1,0,"",dd);return e._reactRootContainer=l,e[Ti]=l.current,ni(8===e.nodeType?e.parentNode:e),ku((function(){nd(t,l,n,r)})),l}(n,t,e,o,r);return rd(a)}ld.prototype.render=sd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(ye(409));nd(e,t,null,null)},ld.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ku((function(){nd(null,e,null,null)})),t[Ti]=null}},ld.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&0!==t&&t<Kn[n].priority;n++);Kn.splice(n,0,e),0===n&&Qn(e)}},In=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);0!==n&&(Ln(t,1|n),mu(t,dn()),!(6&zc)&&(tu=dn()+500,na()))}break;case 13:ku((function(){var t=Ga(e,1);if(null!==t){var n=fu();gu(t,e,1,n)}})),id(e,1)}},Mn=function(e){if(13===e.tag){var t=Ga(e,134217728);if(null!==t)gu(t,e,134217728,fu());id(e,134217728)}},$n=function(e){if(13===e.tag){var t=hu(e),n=Ga(e,t);if(null!==n)gu(n,e,t,fu());id(e,t)}},Dn=function(){return On},Un=function(e,t){var n=On;try{return On=e,t()}finally{On=n}},It=function(e,t,n){switch(t){case"input":if(pt(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ii(r);if(!o)throw Error(ye(90));st(r),pt(r,o)}}}break;case"textarea":yt(e,n);break;case"select":null!=(t=n.value)&&mt(e,!!n.multiple,t,!1)}},zt=Su,Ft=ku;var fd={usingClientEntryPoint:!1,Events:[Oi,Pi,Ii,Ut,Bt,Su]},hd={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gd={bundleType:hd.bundleType,version:hd.version,rendererPackageName:hd.rendererPackageName,rendererConfig:hd.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=on(e))?null:e.stateNode},findFiberByHostInstance:hd.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var md=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!md.isDisabled&&md.supportsFiber)try{bn=md.inject(gd),yn=md}catch(fP){}}fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd,fe.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cd(t))throw Error(ye(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Me,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},fe.createRoot=function(e,t){if(!cd(e))throw Error(ye(299));var n=!1,r="",o=ad;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Ju(e,1,!1,null,0,n,0,r,o),e[Ti]=t.current,ni(8===e.nodeType?e.parentNode:e),new sd(t)},fe.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(ye(188));throw e=Object.keys(e).join(","),Error(ye(268,e))}return e=null===(e=on(t))?null:e.stateNode},fe.flushSync=function(e){return ku(e)},fe.hydrate=function(e,t,n){if(!ud(t))throw Error(ye(200));return pd(null,e,t,!0,n)},fe.hydrateRoot=function(e,t,n){if(!cd(e))throw Error(ye(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",a=ad;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=td(t,null,e,1,null!=n?n:null,o,0,i,a),e[Ti]=t.current,ni(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ld(t)},fe.render=function(e,t,n){if(!ud(t))throw Error(ye(200));return pd(null,e,t,!1,n)},fe.unmountComponentAtNode=function(e){if(!ud(e))throw Error(ye(40));return!!e._reactRootContainer&&(ku((function(){pd(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ti]=null}))})),!0)},fe.unstable_batchedUpdates=Su,fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ud(n))throw Error(ye(200));if(null==e||void 0===e._reactInternals)throw Error(ye(38));return pd(e,t,n,!1,r)},fe.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),pe.exports=fe;var vd=pe.exports;const bd=n(vd),yd=e({__proto__:null,default:bd},[vd]);var wd=vd;de.createRoot=wd.createRoot,de.hydrateRoot=wd.hydrateRoot;const xd=e=>"string"==typeof e,Sd=()=>{let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n},kd=e=>null==e?"":""+e,Cd=/###/g,_d=e=>e&&e.indexOf("###")>-1?e.replace(Cd,"."):e,Ed=e=>!e||xd(e),Ad=(e,t,n)=>{const r=xd(t)?t.split("."):t;let o=0;for(;o<r.length-1;){if(Ed(e))return{};const t=_d(r[o]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++o}return Ed(e)?{}:{obj:e,k:_d(r[o])}},Td=(e,t,n)=>{const{obj:r,k:o}=Ad(e,t,Object);if(void 0!==r||1===t.length)return void(r[o]=n);let i=t[t.length-1],a=t.slice(0,t.length-1),s=Ad(e,a,Object);for(;void 0===s.obj&&a.length;)i=`${a[a.length-1]}.${i}`,a=a.slice(0,a.length-1),s=Ad(e,a,Object),s&&s.obj&&void 0!==s.obj[`${s.k}.${i}`]&&(s.obj=void 0);s.obj[`${s.k}.${i}`]=n},Rd=(e,t)=>{const{obj:n,k:r}=Ad(e,t);if(n)return n[r]},jd=(e,t,n)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(r in e?xd(e[r])||e[r]instanceof String||xd(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):jd(e[r],t[r],n):e[r]=t[r]);return e},Nd=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ld={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Od=e=>xd(e)?e.replace(/[&<>"'\/]/g,(e=>Ld[e])):e;const Pd=[" ",",","?","!",";"],Id=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}(20),Md=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;){if(!o||"object"!=typeof o)return;let e,t="";for(let a=i;a<r.length;++a)if(a!==i&&(t+=n),t+=r[a],e=o[t],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&a<r.length-1)continue;i+=a-i+1;break}o=e}return o},$d=e=>e&&e.replace("_","-"),Dd={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Ud{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Dd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(xd(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Ud(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new Ud(this.logger,e)}}var Bd=new Ud;class zd{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)})),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach((e=>{let[t,r]=e;for(let o=0;o<r;o++)t(...n)}))}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach((t=>{let[r,o]=t;for(let i=0;i<o;i++)r.apply(r,[e,...n])}))}}}class Fd extends zd{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,i=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],n&&(Array.isArray(n)?a.push(...n):xd(n)&&o?a.push(...n.split(o)):a.push(n)));const s=Rd(this.data,a);return!s&&!t&&!n&&e.indexOf(".")>-1&&(e=a[0],t=a[1],n=a.slice(2).join(".")),!s&&i&&xd(n)?Md(this.data&&this.data[e]&&this.data[e][t],n,o):s}addResource(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const i=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator;let a=[e,t];n&&(a=a.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),Td(this.data,a,r),o.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const o in n)(xd(n[o])||Array.isArray(n[o]))&&this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),r=n,n=t,t=a[1]),this.addNamespaces(t);let s=Rd(this.data,a)||{};i.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?jd(s,n,o):s={...s,...n},Td(this.data,a,s),i.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var Vd={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,n,r,o))})),t}};const Wd={};class Hd extends zd{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((e,t,n)=>{e.forEach((e=>{t[e]&&(n[e]=t[e])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Bd.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;const n=this.resolve(e,t);return n&&void 0!==n.res}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const i=n&&e.indexOf(n)>-1,a=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||((e,t,n)=>{t=t||"",n=n||"";const r=Pd.filter((e=>t.indexOf(e)<0&&n.indexOf(e)<0));if(0===r.length)return!0;const o=Id.getRegExp(`(${r.map((e=>"?"===e?"\\?":e)).join("|")})`);let i=!o.test(e);if(!i){const t=e.indexOf(n);t>0&&!o.test(e.substring(0,t))&&(i=!0)}return i})(e,n,r));if(i&&!a){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:xd(o)?[o]:o};const i=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(i[0])>-1)&&(o=i.shift()),e=i.join(r)}return{key:e,namespaces:xd(o)?[o]:o}}translate(e,t,n){if("object"!=typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof t&&(t={...t}),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const r=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:i,namespaces:a}=this.extractFromKey(e[e.length-1],t),s=a[a.length-1],l=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&"cimode"===l.toLowerCase()){if(c){const e=t.nsSeparator||this.options.nsSeparator;return r?{res:`${s}${e}${i}`,usedKey:i,exactUsedKey:i,usedLng:l,usedNS:s,usedParams:this.getUsedParamsDetails(t)}:`${s}${e}${i}`}return r?{res:i,usedKey:i,exactUsedKey:i,usedLng:l,usedNS:s,usedParams:this.getUsedParamsDetails(t)}:i}const u=this.resolve(e,t);let d=u&&u.res;const p=u&&u.usedKey||i,f=u&&u.exactUsedKey||i,h=Object.prototype.toString.apply(d),g=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,m=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!xd(d)&&"boolean"!=typeof d&&"number"!=typeof d;if(!(m&&d&&v&&["[object Number]","[object Function]","[object RegExp]"].indexOf(h)<0)||xd(g)&&Array.isArray(d))if(m&&xd(g)&&Array.isArray(d))d=d.join(g),d&&(d=this.extendTranslation(d,e,t,n));else{let r=!1,a=!1;const c=void 0!==t.count&&!xd(t.count),p=Hd.hasDefaultValue(t),f=c?this.pluralResolver.getSuffix(l,t.count,t):"",h=t.ordinal&&c?this.pluralResolver.getSuffix(l,t.count,{ordinal:!1}):"",g=c&&!t.ordinal&&0===t.count&&this.pluralResolver.shouldUseIntlApi(),m=g&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${f}`]||t[`defaultValue${h}`]||t.defaultValue;!this.isValidLookup(d)&&p&&(r=!0,d=m),this.isValidLookup(d)||(a=!0,d=i);const v=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&a?void 0:d,b=p&&m!==d&&this.options.updateMissing;if(a||r||b){if(this.logger.log(b?"updateKey":"missingKey",l,s,i,b?m:d),o){const e=this.resolve(i,{...t,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const n=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&n&&n[0])for(let t=0;t<n.length;t++)e.push(n[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const r=(e,n,r)=>{const o=p&&r!==d?r:v;this.options.missingKeyHandler?this.options.missingKeyHandler(e,s,n,o,b,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,s,n,o,b,t),this.emit("missingKey",e,s,n,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c?e.forEach((e=>{const n=this.pluralResolver.getSuffixes(e,t);g&&t[`defaultValue${this.options.pluralSeparator}zero`]&&n.indexOf(`${this.options.pluralSeparator}zero`)<0&&n.push(`${this.options.pluralSeparator}zero`),n.forEach((n=>{r([e],i+n,t[`defaultValue${n}`]||m)}))})):r(e,i,m))}d=this.extendTranslation(d,e,t,u,n),a&&d===i&&this.options.appendNamespaceToMissingKey&&(d=`${s}:${i}`),(a||r)&&this.options.parseMissingKeyHandler&&(d="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${i}`:i,r?d:void 0):this.options.parseMissingKeyHandler(d))}else{if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...t,ns:a}):`key '${i} (${this.language})' returned an object instead of string.`;return r?(u.res=e,u.usedParams=this.getUsedParamsDetails(t),u):e}if(o){const e=Array.isArray(d),n=e?[]:{},r=e?f:p;for(const i in d)if(Object.prototype.hasOwnProperty.call(d,i)){const e=`${r}${o}${i}`;n[i]=this.translate(e,{...t,joinArrays:!1,ns:a}),n[i]===e&&(n[i]=d[i])}d=n}}return r?(u.res=d,u.usedParams=this.getUsedParamsDetails(t),u):d}extendTranslation(e,t,n,r,o){var i=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const a=xd(e)&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let s;if(a){const t=e.match(this.interpolator.nestingRegexp);s=t&&t.length}let l=n.replace&&!xd(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),e=this.interpolator.interpolate(e,l,n.lng||this.language||r.usedLng,n),a){const t=e.match(this.interpolator.nestingRegexp);s<(t&&t.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return o&&o[0]===r[0]&&!n.context?(i.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null):i.translate(...r,t)}),n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,s=xd(a)?[a]:a;return null!=e&&s&&s.length&&!1!==n.applyPostProcessor&&(e=Vd.handle(s,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t,n,r,o,i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return xd(e)&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const s=this.extractFromKey(e,a),l=s.key;n=l;let c=s.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const u=void 0!==a.count&&!xd(a.count),d=u&&!a.ordinal&&0===a.count&&this.pluralResolver.shouldUseIntlApi(),p=void 0!==a.context&&(xd(a.context)||"number"==typeof a.context)&&""!==a.context,f=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);c.forEach((e=>{this.isValidLookup(t)||(i=e,!Wd[`${f[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(i)&&(Wd[`${f[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach((n=>{if(this.isValidLookup(t))return;o=n;const i=[l];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(i,l,n,e,a);else{let e;u&&(e=this.pluralResolver.getSuffix(n,a.count,a));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(i.push(l+e),a.ordinal&&0===e.indexOf(r)&&i.push(l+e.replace(r,this.options.pluralSeparator)),d&&i.push(l+t)),p){const n=`${l}${this.options.contextSeparator}${a.context}`;i.push(n),u&&(i.push(n+e),a.ordinal&&0===e.indexOf(r)&&i.push(n+e.replace(r,this.options.pluralSeparator)),d&&i.push(n+t))}}let s;for(;s=i.pop();)this.isValidLookup(t)||(r=s,t=this.getResource(n,e,s,a))})))}))})),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:i}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!xd(e.replace);let r=n?e.replace:e;if(n&&void 0!==e.count&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,12)&&void 0!==e[n])return!0;return!1}}const qd=e=>e.charAt(0).toUpperCase()+e.slice(1);class Kd{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Bd.create("languageUtils")}getScriptPartFromCode(e){if(!(e=$d(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=$d(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(xd(e)&&e.indexOf("-")>-1){if("undefined"!=typeof Intl&&void 0!==Intl.getCanonicalLocales)try{let t=Intl.getCanonicalLocales(e)[0];if(t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t)return t}catch(dP){}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map((e=>e.toLowerCase())):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=qd(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=qd(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=qd(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find((e=>e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:e.indexOf("-")>0&&n.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===n||0===e.indexOf(n)&&n.length>1?e:void 0))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),xd(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return xd(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):xd(e)&&o(this.formatLanguageCode(e)),n.forEach((e=>{r.indexOf(e)<0&&o(this.formatLanguageCode(e))})),r}}let Gd=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Yd={1:e=>Number(e>1),2:e=>Number(1!=e),3:e=>0,4:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),5:e=>Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5),6:e=>Number(1==e?0:e>=2&&e<=4?1:2),7:e=>Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),8:e=>Number(1==e?0:2==e?1:8!=e&&11!=e?2:3),9:e=>Number(e>=2),10:e=>Number(1==e?0:2==e?1:e<7?2:e<11?3:4),11:e=>Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3),12:e=>Number(e%10!=1||e%100==11),13:e=>Number(0!==e),14:e=>Number(1==e?0:2==e?1:3==e?2:3),15:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2),16:e=>Number(e%10==1&&e%100!=11?0:0!==e?1:2),17:e=>Number(1==e||e%10==1&&e%100!=11?0:1),18:e=>Number(0==e?0:1==e?1:2),19:e=>Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3),20:e=>Number(1==e?0:0==e||e%100>0&&e%100<20?1:2),21:e=>Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0),22:e=>Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)};const Zd=["v1","v2","v3"],Qd=["v4"],Xd={zero:0,one:1,two:2,few:3,many:4,other:5};class Jd{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Bd.create("pluralResolver"),this.options.compatibilityJSON&&!Qd.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const e={};return Gd.forEach((t=>{t.lngs.forEach((n=>{e[n]={numbers:t.nr,plurals:Yd[t.fc]}}))})),e})(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi()){const r=$d("dev"===e?"en":e),o=t.ordinal?"ordinal":"cardinal",i=JSON.stringify({cleanedCode:r,type:o});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(r,{type:o})}catch(n){if(!e.match(/-|_/))return;const r=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(r,t)}return this.pluralRulesCache[i]=a,a}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(((e,t)=>Xd[e]-Xd[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):n.numbers.map((n=>this.getSuffix(e,n,t))):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let r=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===r?r="plural":1===r&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?`_plural_${r.toString()}`:o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?o():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Zd.includes(this.options.compatibilityJSON)}}const ep=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=((e,t,n)=>{const r=Rd(e,n);return void 0!==r?r:Rd(t,n)})(e,t,n);return!i&&o&&xd(n)&&(i=Md(e,n,r),void 0===i&&(i=Md(t,n,r))),i},tp=e=>e.replace(/\$/g,"$$$$");class np{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Bd.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:o,prefixEscaped:i,suffix:a,suffixEscaped:s,formatSeparator:l,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:h,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:v}=e.interpolation;this.escape=void 0!==t?t:Od,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=o?Nd(o):i||"{{",this.suffix=a?Nd(a):s||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=d?Nd(d):p||Nd("$t("),this.nestingSuffix=f?Nd(f):h||Nd(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let o,i,a;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=e=>{if(e.indexOf(this.formatSeparator)<0){const o=ep(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(o,void 0,n,{...r,...t,interpolationkey:e}):o}const o=e.split(this.formatSeparator),i=o.shift().trim(),a=o.join(this.formatSeparator).trim();return this.format(ep(t,s,i,this.options.keySeparator,this.options.ignoreJSONStructure),a,n,{...r,...t,interpolationkey:i})};this.resetRegExp();const c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>tp(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?tp(this.escape(e)):tp(e)}].forEach((t=>{for(a=0;o=t.regex.exec(e);){const n=o[1].trim();if(i=l(n),void 0===i)if("function"==typeof c){const t=c(e,o,r);i=xd(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))i="";else{if(u){i=o[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),i=""}else xd(i)||this.useRawValueToEscape||(i=kd(i));const s=t.safeValue(i);if(e=e.replace(o[0],s),u?(t.regex.lastIndex+=i.length,t.regex.lastIndex-=o[0].length):t.regex.lastIndex=0,a++,a>=this.maxReplaces)break}})),e}nest(e,t){let n,r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=(e,t)=>{const n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;const r=e.split(new RegExp(`${n}[ ]*{`));let i=`{${r[1]}`;e=r[0],i=this.interpolate(i,o);const a=i.match(/'/g),s=i.match(/"/g);(a&&a.length%2==0&&!s||s.length%2!=0)&&(i=i.replace(/'/g,'"'));try{o=JSON.parse(i),t&&(o={...t,...o})}catch(dP){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,dP),`${e}${n}${i}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let s=[];o={...i},o=o.replace&&!xd(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let l=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){const e=n[1].split(this.formatSeparator).map((e=>e.trim()));n[1]=e.shift(),s=e,l=!0}if(r=t(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!xd(r))return r;xd(r)||(r=kd(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),l&&(r=s.reduce(((e,t)=>this.format(e,t,i.lng,{...i,interpolationkey:n[1].trim()})),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const rp=e=>{const t={};return(n,r,o)=>{let i=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(i={...i,[o.interpolationkey]:void 0});const a=r+JSON.stringify(i);let s=t[a];return s||(s=e($d(r),o),t[a]=s),s(n)}};class op{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Bd.create("formatter"),this.options=e,this.formats={number:rp(((e,t)=>{const n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)})),currency:rp(((e,t)=>{const n=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>n.format(e)})),datetime:rp(((e,t)=>{const n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)})),relativetime:rp(((e,t)=>{const n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||"day")})),list:rp(((e,t)=>{const n=new Intl.ListFormat(e,{...t});return e=>n.format(e)}))},this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=rp(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find((e=>e.indexOf(")")>-1))){const e=o.findIndex((e=>e.indexOf(")")>-1));o[0]=[o[0],...o.splice(1,e)].join(this.formatSeparator)}const i=o.reduce(((e,t)=>{const{formatName:o,formatOptions:i}=(e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);"currency"===t&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):"relativetime"===t&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach((e=>{if(e){const[t,...r]=e.split(":"),o=r.join(":").trim().replace(/^'+|'+$/g,""),i=t.trim();n[i]||(n[i]=o),"false"===o&&(n[i]=!1),"true"===o&&(n[i]=!0),isNaN(o)||(n[i]=parseInt(o,10))}}))}return{formatName:t,formatOptions:n}})(t);if(this.formats[o]){let t=e;try{const a=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},s=a.locale||a.lng||r.locale||r.lng||n;t=this.formats[o](e,s,{...i,...r,...a})}catch(a){this.logger.warn(a)}return t}return this.logger.warn(`there was no format function for ${o}`),e}),e);return i}}class ip extends zd{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Bd.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(e,t,n,r){const o={},i={},a={},s={};return e.forEach((e=>{let r=!0;t.forEach((t=>{const a=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[a]=2:this.state[a]<0||(1===this.state[a]?void 0===i[a]&&(i[a]=!0):(this.state[a]=1,r=!1,void 0===i[a]&&(i[a]=!0),void 0===o[a]&&(o[a]=!0),void 0===s[t]&&(s[t]=!0)))})),r||(a[e]=!0)})),(Object.keys(o).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(i),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){const r=e.split("|"),o=r[0],i=r[1];t&&this.emit("failedLoading",o,i,t),!t&&n&&this.store.addResourceBundle(o,i,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const a={};this.queue.forEach((n=>{((e,t,n)=>{const{obj:r,k:o}=Ad(e,t,Object);r[o]=r[o]||[],r[o].push(n)})(n.loaded,[o],i),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((e=>{a[e]||(a[e]={});const t=n.loaded[e];t.length&&t.forEach((t=>{void 0===a[e][t]&&(a[e][t]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",a),this.queue=this.queue.filter((e=>!e.done))}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,i=arguments.length>5?arguments[5]:void 0;if(!e.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:o,callback:i});this.readingCalls++;const a=(a,s)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}a&&s&&r<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,n,r+1,2*o,i)}),o):i(a,s)},s=this.backend[n].bind(this.backend);if(2!==s.length)return s(e,t,a);try{const n=s(e,t);n&&"function"==typeof n.then?n.then((e=>a(null,e))).catch(a):a(null,n)}catch(l){a(l)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();xd(e)&&(e=this.languageUtils.toResolveHierarchy(e)),xd(t)&&(t=[t]);const o=this.queueLoad(e,t,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,((n,i)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&i&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,i),this.loaded(e,n,i)}))}saveMissing(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=n&&""!==n){if(this.backend&&this.backend.create){const l={...i,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let o;o=5===c.length?c(e,t,n,r,l):c(e,t,n,r),o&&"function"==typeof o.then?o.then((e=>a(null,e))).catch(a):a(null,o)}catch(s){a(s)}else c(e,t,n,r,a,l)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}}const ap=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),xd(e[1])&&(t.defaultValue=e[1]),xd(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach((e=>{t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),sp=e=>(xd(e.ns)&&(e.ns=[e.ns]),xd(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),xd(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),lp=()=>{};class cp extends zd{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=sp(e),this.services={},this.logger=Bd,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((e=>{"function"==typeof n[e]&&(n[e]=n[e].bind(n))})),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof t&&(n=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&(xd(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=ap();this.options={...r,...this.options,...sp(t)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator);const o=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?Bd.init(o(this.modules.logger),this.options):Bd.init(null,this.options),this.modules.formatter?t=this.modules.formatter:"undefined"!=typeof Intl&&(t=op);const n=new Kd(this.options);this.store=new Fd(this.options.resources,this.options);const i=this.services;i.logger=Bd,i.resourceStore=this.store,i.languageUtils=n,i.pluralResolver=new Jd(n,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!t||this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format||(i.formatter=o(t),i.formatter.init(i,this.options),this.options.interpolation.format=i.formatter.format.bind(i.formatter)),i.interpolator=new np(this.options),i.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},i.backendConnector=new ip(o(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)})),this.modules.languageDetector&&(i.languageDetector=o(this.modules.languageDetector),i.languageDetector.init&&i.languageDetector.init(i,this.options.detection,this.options)),this.modules.i18nFormat&&(i.i18nFormat=o(this.modules.i18nFormat),i.i18nFormat.init&&i.i18nFormat.init(this)),this.translator=new Hd(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,n||(n=lp),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const i=Sd(),a=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),i.resolve(t),n(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?a():setTimeout(a,0),i}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:lp;const n=xd(e)?e:this.language;if("function"==typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};if(n)r(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>r(e)))}this.options.preload&&this.options.preload.forEach((e=>r(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,n){const r=Sd();return"function"==typeof e&&(n=e,e=void 0),"function"==typeof t&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=lp),this.services.backendConnector.reload(e,t,(e=>{r.resolve(),n(e)})),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Vd.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=Sd();this.emit("languageChanging",e);const o=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(e,i)=>{i?(o(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve((function(){return n.t(...arguments)})),t&&t(e,(function(){return n.t(...arguments)}))},a=t=>{e||t||!this.services.languageDetector||(t=[]);const n=xd(t)?t:this.services.languageUtils.getBestMatchFromCodes(t);n&&(this.language||o(n),this.translator.language||this.translator.changeLanguage(n),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(n)),this.loadResources(n,(e=>{i(e,n)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e):a(this.services.languageDetector.detect()),r}getFixedT(e,t,n){var r=this;const o=function(e,t){let i;if("object"!=typeof t){for(var a=arguments.length,s=new Array(a>2?a-2:0),l=2;l<a;l++)s[l-2]=arguments[l];i=r.options.overloadTranslationOptionHandler([e,t].concat(s))}else i={...t};i.lng=i.lng||o.lng,i.lngs=i.lngs||o.lngs,i.ns=i.ns||o.ns,""!==i.keyPrefix&&(i.keyPrefix=i.keyPrefix||n||o.keyPrefix);const c=r.options.keySeparator||".";let u;return u=i.keyPrefix&&Array.isArray(e)?e.map((e=>`${i.keyPrefix}${c}${e}`)):i.keyPrefix?`${i.keyPrefix}${c}${e}`:e,r.t(u,i)};return xd(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=n,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const i=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||0===n||2===n};if(t.precheck){const e=t.precheck(this,i);if(void 0!==e)return e}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!i(n,e)||r&&!i(o,e)))}loadNamespaces(e,t){const n=Sd();return this.options.ns?(xd(e)&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=Sd();xd(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter((e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e)));return o.length?(this.options.preload=r.concat(o),this.loadResources((e=>{n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new Kd(ap());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new cp(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:lp;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new cp(r);void 0===e.debug&&void 0===e.prefix||(o.logger=o.logger.clone(e));return["store","services","language"].forEach((e=>{o[e]=this[e]})),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n&&(o.store=new Fd(this.store.data,r),o.services.resourceStore=o.store),o.translator=new Hd(o.services,r),o.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o.emit(e,...n)})),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const up=cp.createInstance();up.createInstance=cp.createInstance,up.createInstance,up.dir,up.init,up.loadResources,up.reloadResources,up.use,up.changeLanguage,up.getFixedT;const dp=up.t;up.exists,up.setDefaultNamespace,up.hasLoadedNamespace,up.loadNamespaces,up.loadLanguages;var pp=(e=>(e.HOME="/",e.ART="/artifacts",e.DRA="/dra",e.BALANCE="/frens",e.LOGS="/logs",e.USER_LOGS="/user-logs",e.TOP="/leaders",e.TOP_ATTACK="/top-attack",e.STARS="/stars",e.KLAN_INFO="/klan-info",e.KLAN_CREATE="/clan-create",e.KLAN_EDIT="/clan-edit",e.CLAN_AV="/clan-av",e.CLAN_APPLY="/clan-apply",e.CHECK_LANG="/check-lang",e.USER_LOGS_REDIRECT="/redirect",e.FAQ="/faq",e.Rules="/rules",e.FaqInfo="/faq-info",e))(pp||{});const fp={"/":"0","/artifacts":"1","/dra":"2","/frens":"3","/leaders":"4"},hp={"/":"2","/artifacts":"1","/dra":"0","/frens":"4","/leaders":"3"},gp="_MY_CLAN_PAGE",mp="clanTab",vp="stars-deals",bp="clans",yp="clickCount",wp=Object.keys(pp).map((e=>pp[e])).filter((e=>"string"==typeof e)),xp=["/","/dra","/frens","/leaders","/stars","/artifacts","/clan-av","/logs","/user-logs"],Sp={new_era_1:"new_era_1",new_era_2:"new_era_2",era1:"era1",era2:"era2",era3:"era3",boosts:"boosts",draInfo:"draInfo",atkst2:"atkst2",balancetab1:"balancetab1",balancetab2:"balancetab2",tabfarm2:"tabfarm2",returnera:"returnera",farmX:"farmX",bal_part:"bal_part",bal2_part:"bal2_part",app:"app",arts:"arts",arts2:"arts2",stars:"stars",clans:"toptabclans",eggs:"tabfarm1",altarBroke:"altarBroke",balance:"balance",top:"top",atk:"atk",atkhistory:"atkhistory",dailyCheckIn:"dailyCheckIn",dra:"dra",tg:"tgLogin",dead:"dead",random_part:"random_part",starstab1:"starstab1",starstab2:"starstab2",starstab3:"starstab3",farm0:"farm0",farm1:"farm1",farm2:"farm2",hunt0:"hunt0",def0:"def0",langSelect:"langSelect"},kp="onboard.dialog.title",Cp="onboard.dialog.desc",_p="ON_BOARD_DAILY_SESSION",Ep="onb_ver_stored",Ap="back-btn-component",Tp=[{lang:"en",name:"English 🇬🇧"},{lang:"ru",name:"Русский 🇷🇺"}],Rp="gameFarmLang3";const jp=new class{preName="gamegame";_(e,t=!1){return localStorage.getItem(e)||t}rm(e){return localStorage.removeItem(e)}sRm(e){return sessionStorage.removeItem(e)}rmUniq(e){return this.rm(`${this.preName}${e}`)}getUniq(e,t=""){return this.get(`${this.preName}${e}`)}get(e,t=""){return localStorage.getItem(e)||t}getNum(e,t=0){let n=localStorage.getItem(e);return n&&(n=Number(n),isNaN(n)&&(n=0)),n||t}set(e,t){localStorage.setItem(e,t)}getJ(e){const t=this.get(e);if(t)try{return JSON.parse(t)}catch(dP){}return!1}setJ(e,t){return this.set(e,JSON.stringify(t))}sGet(e,t=""){return sessionStorage.getItem(e)||t}sSet(e,t){sessionStorage.setItem(e,t)}};var Np={logs:[],cs:null,page:"",_tmp_img_obj_data:"",_tmp_img_obj_data_mini:"",prog:0,timeOffset:0,tonOn:0,data:{},isDevMini:1,isDev:!1};const Lp={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://localhost:3001/",VITE_BOT_USERNAME:"Gamegametestbot",VITE_DONATION_WALLET:"UQD2P1Vupj-1S1eKrg_ZN0Bu8TOGk2k_qD3pbSPcLYJ5b2hN",VITE_WEBAPP_URL:"http://t.me/Gamegametestbot/GameTest",VITE__HTML__:""};function Op(e,t=!1){try{let n=(Lp||{})[`VITE_${e}`];return t?n?+n:0:n||""}catch(dP){}}const Pp=(e,t=" ")=>(e||(e=0),((e,t=" ")=>isNaN(+e)?"0":Math.floor(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,t))(e,t));function Ip(e){if(!e)return[];let t,n,r=e.length;for(;0!==r;)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e}const Mp=()=>jp.get(Rp),$p=()=>Date.now()+Np.timeOffset;function Dp(e){const t=e-$p(),n={days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60),a:1};return t<=0||isNaN(e)||function(e){return!(e.days||e.hours||e.minutes||e.seconds)}(n)?{days:0,hours:0,minutes:0,seconds:0,a:0}:n}function Up({days:e,...t},n=!1){let r=t.hours?t.hours.toString().padStart(2,"0"):"00";const o=t.minutes,i=`${t.seconds}`;let a="";return n&&e&&(r*=1,r+=24*e,e=0,r=`${r}`),"00"!==r&&(a+=r.replace(/^0/,"")+":"),(a||i)&&(a+=(o>9||!a?o:`0${o}`)+":"),e||t.hours||t.minutes||t.seconds?(a+=t.seconds>9?i:`0${i}`,a):0}function Bp(e,t=0){if(!e)return"0";let n="";return e>1e6?(n="m",e=Math.floor(e/1e6)):e>=1e3&&(!t||t>1e3)&&(n="k",(e=Math.floor(e/1e3))>1e3&&(e=Math.floor(e/1e3),n+="k"),e>1e3&&(e=Math.floor(e/1e3),n+="k"),e>1e3&&(e=Math.floor(e/1e3),n+="k"),e>1e3&&(e=Math.floor(e/1e3),n+="k")),`${Number(e).toPrecision(3)}${n}`}function zp(e){e&&setTimeout((()=>{try{e?.updateAutoHeight()}catch(dP){}}),200)}function Fp(){if(!(document.body.clientWidth<500||ef())){document.body.classList.add("mobile");var e=document.getElementById("root");e&&(e.style.maxWidth="480px",e.style.margin="0 auto",e.style.boxSizing="border-box")}}let Vp={};function Wp(e,t=!1){const n=new Date,r=new Date(e);let o=Math.floor((n-r)/1e3);const i={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};let a=[],s=["hour","minute","second"];for(const[l,c]of Object.entries(i)){const e=Math.floor(o/c);let n="";t&&s.includes(l)?(Vp[l]||(Vp[l]=dp(`time.${l}`,{count:1})[0]),n=Vp[l]):n=dp(`time.${l}`,{count:e}),e>0&&(a.push(`${e} ${n}`),o-=e*c)}return a.length>0?a.join(" ")+` ${dp("time.ago")}`:dp("time.just")}const Hp=()=>{let e=jp.get("theme");return e?"dark"===e:(e="dark",jp.set("theme",e),!0)},qp=e=>e?"7194100073".match(e+""):"ZHJhZ29uZmFybWFscGhhLmZ1bg=="===btoa(location.host)||("bG9jYWxob3N0OjUxNzM="===btoa(location.host)||("5173"===location.port||"8080"===location.port));function Kp(e){e||(e=new Date),"number"==typeof e&&(e=new Date(e));var t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();return(t=(t<10?"0":"")+t)+":"+(n=(n<10?"0":"")+n)+":"+(r=(r<10?"0":"")+r)}const Gp=e=>!e||jp.get(Qp(e)),Yp=()=>jp.get(Ep),Zp=(e,t)=>{const n=Yp();if(!e||!n)return!1;void 0===t&&(t=Gp(e));const r=t!==n;if(r){if(e===Sp.langSelect)return!0;if(!Xp(kp,dp(kp+e)))return!1;if(!Xp(Cp,dp(Cp+e)))return!1}return r},Qp=e=>`onboard_key_${e}`,Xp=(e,t)=>!(t.match(e)||["en","es"].includes(Mp())&&t.match(/[а-яА-Я]/)),Jp=(e,t)=>{const n=e.findIndex(t);var r,o,i;return~n&&0!==n&&(o=n,i=0,e=(r=e).reduce(((e,t,n)=>n===o?e:n===i?e.concat(r[o],t):e.concat(t)),[])),e},ef=()=>[90,-90].includes(window.orientation);function tf(e,t){return e.length>t?e.slice(0,t)+"...":e}var nf=function(){return nf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},nf.apply(this,arguments)};function rf(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var of="-ms-",af="-moz-",sf="-webkit-",lf="comm",cf="rule",uf="decl",df="@keyframes",pf=Math.abs,ff=String.fromCharCode,hf=Object.assign;function gf(e){return e.trim()}function mf(e,t){return(e=t.exec(e))?e[0]:e}function vf(e,t,n){return e.replace(t,n)}function bf(e,t,n){return e.indexOf(t,n)}function yf(e,t){return 0|e.charCodeAt(t)}function wf(e,t,n){return e.slice(t,n)}function xf(e){return e.length}function Sf(e){return e.length}function kf(e,t){return t.push(e),e}function Cf(e,t){return e.filter((function(e){return!mf(e,t)}))}var _f=1,Ef=1,Af=0,Tf=0,Rf=0,jf="";function Nf(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:_f,column:Ef,length:a,return:"",siblings:s}}function Lf(e,t){return hf(Nf("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Of(e){for(;e.root;)e=Lf(e.root,{children:[e]});kf(e,e.siblings)}function Pf(){return Rf=Tf>0?yf(jf,--Tf):0,Ef--,10===Rf&&(Ef=1,_f--),Rf}function If(){return Rf=Tf<Af?yf(jf,Tf++):0,Ef++,10===Rf&&(Ef=1,_f++),Rf}function Mf(){return yf(jf,Tf)}function $f(){return Tf}function Df(e,t){return wf(jf,e,t)}function Uf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bf(e){return gf(Df(Tf-1,Vf(91===e?e+2:40===e?e+1:e)))}function zf(e){for(;(Rf=Mf())&&Rf<33;)If();return Uf(e)>2||Uf(Rf)>3?"":" "}function Ff(e,t){for(;--t&&If()&&!(Rf<48||Rf>102||Rf>57&&Rf<65||Rf>70&&Rf<97););return Df(e,$f()+(t<6&&32==Mf()&&32==If()))}function Vf(e){for(;If();)switch(Rf){case e:return Tf;case 34:case 39:34!==e&&39!==e&&Vf(Rf);break;case 40:41===e&&Vf(e);break;case 92:If()}return Tf}function Wf(e,t){for(;If()&&e+Rf!==57&&(e+Rf!==84||47!==Mf()););return"/*"+Df(t,Tf-1)+"*"+ff(47===e?e:If())}function Hf(e){for(;!Uf(Mf());)If();return Df(e,Tf)}function qf(e){return function(e){return jf="",e}(Kf("",null,null,null,[""],e=function(e){return _f=Ef=1,Af=xf(jf=e),Tf=0,[]}(e),0,[0],e))}function Kf(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,h=0,g=1,m=1,v=1,b=0,y="",w=o,x=i,S=r,k=y;m;)switch(h=b,b=If()){case 40:if(108!=h&&58==yf(k,d-1)){-1!=bf(k+=vf(Bf(b),"&","&\f"),"&\f",pf(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Bf(b);break;case 9:case 10:case 13:case 32:k+=zf(h);break;case 92:k+=Ff($f()-1,7);continue;case 47:switch(Mf()){case 42:case 47:kf(Yf(Wf(If(),$f()),t,n,l),l);break;default:k+="/"}break;case 123*g:s[c++]=xf(k)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+u:-1==v&&(k=vf(k,/\f/g,"")),f>0&&xf(k)-d&&kf(f>32?Zf(k+";",r,n,d-1,l):Zf(vf(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(kf(S=Gf(k,t,n,c,u,o,s,y,w=[],x=[],d,i),i),123===b)if(0===u)Kf(k,t,S,S,w,i,d,s,x);else switch(99===p&&110===yf(k,3)?100:p){case 100:case 108:case 109:case 115:Kf(e,S,S,r&&kf(Gf(e,S,S,0,0,o,s,y,o,w=[],d,x),x),o,x,d,s,r?w:x);break;default:Kf(k,S,S,S,[""],x,0,s,x)}}c=u=f=0,g=v=1,y=k="",d=a;break;case 58:d=1+xf(k),f=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==Pf())continue;switch(k+=ff(b),b*g){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(xf(k)-1)*v,v=1;break;case 64:45===Mf()&&(k+=Bf(If())),p=Mf(),u=d=xf(y=k+=Hf($f())),b++;break;case 45:45===h&&2==xf(k)&&(g=0)}}return i}function Gf(e,t,n,r,o,i,a,s,l,c,u,d){for(var p=o-1,f=0===o?i:[""],h=Sf(f),g=0,m=0,v=0;g<r;++g)for(var b=0,y=wf(e,p+1,p=pf(m=a[g])),w=e;b<h;++b)(w=gf(m>0?f[b]+" "+y:vf(y,/&\f/g,f[b])))&&(l[v++]=w);return Nf(e,t,n,0===o?cf:s,l,c,u,d)}function Yf(e,t,n,r){return Nf(e,t,n,lf,ff(Rf),wf(e,2,-2),0,r)}function Zf(e,t,n,r,o){return Nf(e,t,n,uf,wf(e,0,r),wf(e,r+1,-1),r,o)}function Qf(e,t,n){switch(function(e,t){return 45^yf(e,0)?(((t<<2^yf(e,0))<<2^yf(e,1))<<2^yf(e,2))<<2^yf(e,3):0}(e,t)){case 5103:return sf+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return sf+e+e;case 4789:return af+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return sf+e+af+e+of+e+e;case 5936:switch(yf(e,t+11)){case 114:return sf+e+of+vf(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return sf+e+of+vf(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return sf+e+of+vf(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return sf+e+of+e+e;case 6165:return sf+e+of+"flex-"+e+e;case 5187:return sf+e+vf(e,/(\w+).+(:[^]+)/,sf+"box-$1$2"+of+"flex-$1$2")+e;case 5443:return sf+e+of+"flex-item-"+vf(e,/flex-|-self/g,"")+(mf(e,/flex-|baseline/)?"":of+"grid-row-"+vf(e,/flex-|-self/g,""))+e;case 4675:return sf+e+of+"flex-line-pack"+vf(e,/align-content|flex-|-self/g,"")+e;case 5548:return sf+e+of+vf(e,"shrink","negative")+e;case 5292:return sf+e+of+vf(e,"basis","preferred-size")+e;case 6060:return sf+"box-"+vf(e,"-grow","")+sf+e+of+vf(e,"grow","positive")+e;case 4554:return sf+vf(e,/([^-])(transform)/g,"$1"+sf+"$2")+e;case 6187:return vf(vf(vf(e,/(zoom-|grab)/,sf+"$1"),/(image-set)/,sf+"$1"),e,"")+e;case 5495:case 3959:return vf(e,/(image-set\([^]*)/,sf+"$1$`$1");case 4968:return vf(vf(e,/(.+:)(flex-)?(.*)/,sf+"box-pack:$3"+of+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+sf+e+e;case 4200:if(!mf(e,/flex-|baseline/))return of+"grid-column-align"+wf(e,t)+e;break;case 2592:case 3360:return of+vf(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,mf(e.props,/grid-\w+-end/)}))?~bf(e+(n=n[t].value),"span",0)?e:of+vf(e,"-start","")+e+of+"grid-row-span:"+(~bf(n,"span",0)?mf(n,/\d+/):+mf(n,/\d+/)-+mf(e,/\d+/))+";":of+vf(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return mf(e.props,/grid-\w+-start/)}))?e:of+vf(vf(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return vf(e,/(.+)-inline(.+)/,sf+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xf(e)-1-t>6)switch(yf(e,t+1)){case 109:if(45!==yf(e,t+4))break;case 102:return vf(e,/(.+:)(.+)-([^]+)/,"$1"+sf+"$2-$3$1"+af+(108==yf(e,t+3)?"$3":"$2-$3"))+e;case 115:return~bf(e,"stretch",0)?Qf(vf(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return vf(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return of+n+":"+r+s+(o?of+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===yf(e,t+6))return vf(e,":",":"+sf)+e;break;case 6444:switch(yf(e,45===yf(e,14)?18:11)){case 120:return vf(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+sf+(45===yf(e,14)?"inline-":"")+"box$3$1"+sf+"$2$3$1"+of+"$2box$3")+e;case 100:return vf(e,":",":"+of)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return vf(e,"scroll-","scroll-snap-")+e}return e}function Xf(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jf(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case uf:return e.return=e.return||e.value;case lf:return"";case df:return e.return=e.value+"{"+Xf(e.children,r)+"}";case cf:if(!xf(e.value=e.props.join(",")))return""}return xf(n=Xf(e.children,r))?e.return=e.value+"{"+n+"}":""}function eh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case uf:return void(e.return=Qf(e.value,e.length,n));case df:return Xf([Lf(e,{value:vf(e.value,"@","@"+sf)})],r);case cf:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(mf(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Of(Lf(e,{props:[vf(t,/:(read-\w+)/,":-moz-$1")]})),Of(Lf(e,{props:[t]})),hf(e,{props:Cf(n,r)});break;case"::placeholder":Of(Lf(e,{props:[vf(t,/:(plac\w+)/,":"+sf+"input-$1")]})),Of(Lf(e,{props:[vf(t,/:(plac\w+)/,":-moz-$1")]})),Of(Lf(e,{props:[vf(t,/:(plac\w+)/,of+"input-$1")]})),Of(Lf(e,{props:[t]})),hf(e,{props:Cf(n,r)})}return""}))}}var th={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nh={},rh="undefined"!=typeof process&&void 0!==nh&&(nh.REACT_APP_SC_ATTR||nh.SC_ATTR)||"data-styled",oh="active",ih="data-styled-version",ah="6.1.13",sh="/*!sc*/\n",lh="undefined"!=typeof window&&"HTMLElement"in window,ch=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==nh&&void 0!==nh.REACT_APP_SC_DISABLE_SPEEDY&&""!==nh.REACT_APP_SC_DISABLE_SPEEDY?"false"!==nh.REACT_APP_SC_DISABLE_SPEEDY&&nh.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==nh&&void 0!==nh.SC_DISABLE_SPEEDY&&""!==nh.SC_DISABLE_SPEEDY&&("false"!==nh.SC_DISABLE_SPEEDY&&nh.SC_DISABLE_SPEEDY)),uh={},dh=Object.freeze([]),ph=Object.freeze({});function fh(e,t,n){return void 0===n&&(n=ph),e.theme!==n.theme&&e.theme||t||n.theme}var hh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mh=/(^-|-$)/g;function vh(e){return e.replace(gh,"-").replace(mh,"")}var bh=/(a)(d)/gi,yh=function(e){return String.fromCharCode(e+(e>25?39:97))};function wh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yh(t%52)+n;return(yh(t%52)+n).replace(bh,"$1-$2")}var xh,Sh=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kh=function(e){return Sh(5381,e)};function Ch(e){return wh(kh(e)>>>0)}function _h(e){return"string"==typeof e&&!0}var Eh="function"==typeof Symbol&&Symbol.for,Ah=Eh?Symbol.for("react.memo"):60115,Th=Eh?Symbol.for("react.forward_ref"):60112,Rh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lh=((xh={})[Th]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xh[Ah]=Nh,xh);function Oh(e){return("type"in(t=e)&&t.type.$$typeof)===Ah?Nh:"$$typeof"in e?Lh[e.$$typeof]:Rh;var t}var Ph=Object.defineProperty,Ih=Object.getOwnPropertyNames,Mh=Object.getOwnPropertySymbols,$h=Object.getOwnPropertyDescriptor,Dh=Object.getPrototypeOf,Uh=Object.prototype;function Bh(e,t,n){if("string"!=typeof t){if(Uh){var r=Dh(t);r&&r!==Uh&&Bh(e,r,n)}var o=Ih(t);Mh&&(o=o.concat(Mh(t)));for(var i=Oh(e),a=Oh(t),s=0;s<o.length;++s){var l=o[s];if(!(l in jh||n&&n[l]||a&&l in a||i&&l in i)){var c=$h(t,l);try{Ph(e,l,c)}catch(u){}}}}return e}function zh(e){return"function"==typeof e}function Fh(e){return"object"==typeof e&&"styledComponentId"in e}function Vh(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wh(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Hh(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qh(e,t,n){if(void 0===n&&(n=!1),!n&&!Hh(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qh(e[r],t[r]);else if(Hh(t))for(var r in t)e[r]=qh(e[r],t[r]);return e}function Kh(e,t){Object.defineProperty(e,"toString",{value:t})}function Gh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Yh=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Gh(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(sh);return t},e}(),Zh=new Map,Qh=new Map,Xh=1,Jh=function(e){if(Zh.has(e))return Zh.get(e);for(;Qh.has(Xh);)Xh++;var t=Xh++;return Zh.set(e,t),Qh.set(t,e),t},eg=function(e,t){Xh=t+1,Zh.set(e,t),Qh.set(t,e)},tg="style[".concat(rh,"][").concat(ih,'="').concat(ah,'"]'),ng=new RegExp("^".concat(rh,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rg=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},og=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(sh),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(ng);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(eg(u,c),rg(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},ig=function(e){for(var t=document.querySelectorAll(tg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(rh)!==oh&&(og(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var ag=function(e){var t,n,r=document.head,o=e||r,i=document.createElement("style"),a=(t=o,(n=Array.from(t.querySelectorAll("style[".concat(rh,"]"))))[n.length-1]),s=void 0!==a?a.nextSibling:null;i.setAttribute(rh,oh),i.setAttribute(ih,ah);var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&i.setAttribute("nonce",l),o.insertBefore(i,s),i},sg=function(){function e(e){this.element=ag(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Gh(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),lg=function(){function e(e){this.element=ag(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),cg=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ug=lh,dg={isServer:!lh,useCSSOMInjection:!ch},pg=function(){function e(e,t,n){void 0===e&&(e=ph),void 0===t&&(t={});var r=this;this.options=nf(nf({},dg),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&lh&&ug&&(ug=!1,ig(this)),Kh(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o,i=(o=n,Qh.get(o));if(void 0===i)return"continue";var a=e.names.get(i),s=t.getGroup(n);if(void 0===a||!a.size||0===s.length)return"continue";var l="".concat(rh,".g").concat(n,'[id="').concat(i,'"]'),c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(s).concat(l,'{content:"').concat(c,'"}').concat(sh)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return Jh(e)},e.prototype.rehydrate=function(){!this.server&&lh&&ig(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(nf(nf({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,n=e.target,r=e.isServer?new cg(n):t?new sg(n):new lg(n),new Yh(r)));var e,t,n,r},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Jh(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Jh(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Jh(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fg=/&/g,hg=/^\s*\/\/.*$/gm;function gg(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=gg(e.children,t)),e}))}var mg=new pg,vg=function(){var e,t,n,r=ph,o=r.options,i=void 0===o?ph:o,a=r.plugins,s=void 0===a?dh:a,l=function(n,r,o){return o.startsWith(t)&&o.endsWith(t)&&o.replaceAll(t,"").length>0?".".concat(e):n},c=s.slice();c.push((function(e){e.type===cf&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(fg,t).replace(n,l))})),i.prefix&&c.push(eh),c.push(Jf);var u=function(r,o,a,s){void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s="&"),e=s,t=o,n=new RegExp("\\".concat(t,"\\b"),"g");var l=r.replace(hg,""),u=qf(a||o?"".concat(a," ").concat(o," { ").concat(l," }"):l);i.namespace&&(u=gg(u,i.namespace));var d,p=[];return Xf(u,function(e){var t=Sf(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return u.hash=s.length?s.reduce((function(e,t){return t.name||Gh(15),Sh(e,t.name)}),5381).toString():"",u}(),bg=V.createContext({shouldForwardProp:void 0,styleSheet:mg,stylis:vg});function yg(){return F.useContext(bg)}bg.Consumer,V.createContext(void 0);var wg=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=vg);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Kh(this,(function(){throw Gh(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=vg),this.name+e.hash},e}(),xg=function(e){return e>="A"&&e<="Z"};function Sg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;xg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var kg=function(e){return null==e||!1===e||""===e},Cg=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!kg(i)&&(Array.isArray(i)&&i.isCss||zh(i)?r.push("".concat(Sg(o),":"),i,";"):Hh(i)?r.push.apply(r,rf(rf(["".concat(o," {")],Cg(i),!1),["}"],!1)):r.push("".concat(Sg(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in th||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _g(e,t,n,r){return kg(e)?[]:Fh(e)?[".".concat(e.styledComponentId)]:zh(e)?!zh(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:_g(e(t),t,n,r):e instanceof wg?n?(e.inject(n,r),[e.getName(r)]):[e]:Hh(e)?Cg(e):Array.isArray(e)?Array.prototype.concat.apply(dh,e.map((function(e){return _g(e,t,n,r)}))):[e.toString()];var o}function Eg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zh(n)&&!Fh(n))return!1}return!0}var Ag=kh(ah),Tg=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Eg(e),this.componentId=t,this.baseHash=Sh(Ag,t),this.baseStyle=n,pg.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Vh(r,this.staticRulesId);else{var o=Wh(_g(this.rules,e,t,n)),i=wh(Sh(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Vh(r,i),this.staticRulesId=i}else{for(var s=Sh(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Wh(_g(u,e,t,n));s=Sh(s,d+c),l+=d}}if(l){var p=wh(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Vh(r,p)}}return r},e}(),Rg=V.createContext(void 0);Rg.Consumer;var jg={};function Ng(e,t,n){var r,o=Fh(e),i=e,a=!_h(e),s=t.attrs,l=void 0===s?dh:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":vh(e);jg[n]=(jg[n]||0)+1;var r="".concat(n,"-").concat(Ch(ah+n+jg[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?_h(r=e)?"styled.".concat(r):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(r),")"):d,f=t.displayName&&t.componentId?"".concat(vh(t.displayName),"-").concat(t.componentId):t.componentId||u,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(o&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new Tg(n,f,o?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,i=e.defaultProps,a=e.foldedComponentIds,s=e.styledComponentId,l=e.target,c=V.useContext(Rg),u=yg(),d=e.shouldForwardProp||u.shouldForwardProp,p=fh(t,c,i)||ph,f=function(e,t,n){for(var r,o=nf(nf({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=zh(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?Vh(o[s],a[s]):"style"===s?nf(nf({},o[s]),a[s]):a[s]}return t.className&&(o.className=Vh(o.className,t.className)),o}(r,t,p),h=f.as||l,g={};for(var m in f)void 0===f[m]||"$"===m[0]||"as"===m||"theme"===m&&f.theme===p||("forwardedAs"===m?g.as=f.forwardedAs:d&&!d(m,h)||(g[m]=f[m]));var v,b,y,w=(v=o,b=f,y=yg(),v.generateAndInjectStyles(b,y.styleSheet,y.stylis)),x=Vh(a,s);return w&&(x+=" "+w),f.className&&(x+=" "+f.className),g[_h(h)&&!hh.has(h)?"class":"className"]=x,g.ref=n,F.createElement(h,g)}(w,e,t)}y.displayName=p;var w=V.forwardRef(y);return w.attrs=h,w.componentStyle=b,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=o?Vh(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=f,w.target=o?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)qh(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Kh(w,(function(){return".".concat(w.styledComponentId)})),a&&Bh(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Lg(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Og=function(e){return Object.assign(e,{isCss:!0})};function Pg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zh(e)||Hh(e))return Og(_g(Lg(dh,rf([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?_g(r):Og(_g(Lg(r,t)))}function Ig(e,t,n){if(void 0===n&&(n=ph),!t)throw Gh(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Pg.apply(void 0,rf([r],o,!1)))};return r.attrs=function(r){return Ig(e,t,nf(nf({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ig(e,t,nf(nf({},n),r))},r}var Mg=function(e){return Ig(Ng,e)},$g=Mg;hh.forEach((function(e){$g[e]=Mg(e)}));var Dg=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Eg(e),pg.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(Wh(_g(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&pg.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ug(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Pg.apply(void 0,rf([e],t,!1)),o="sc-global-".concat(Ch(JSON.stringify(r))),i=new Dg(r,o),a=function(e){var t=yg(),n=V.useContext(Rg),r=V.useRef(t.styleSheet.allocateGSInstance(o)).current;return t.styleSheet.server&&s(r,e,t.styleSheet,n,t.stylis),V.useLayoutEffect((function(){if(!t.styleSheet.server)return s(r,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(r,t.styleSheet)}}),[r,e,t.styleSheet,n,t.stylis]),null};function s(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,uh,n,o);else{var s=nf(nf({},t),{theme:fh(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return V.memo(a)}const Bg=e=>{let t;const n=new Set,r=(e,r)=>{const o="function"==typeof e?e(t):e;if(!Object.is(o,t)){const e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,i={setState:r,getState:o,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,o,i);return i},zg=e=>e;const Fg=e=>{const t=(e=>e?Bg(e):Bg)(e),n=e=>function(e,t=zg){const n=V.useSyncExternalStore(e.subscribe,(()=>t(e.getState())),(()=>t(e.getInitialState())));return V.useDebugValue(n),n}(t,e);return Object.assign(n,t),n},Vg=e=>e?Fg(e):Fg,Wg=(e,t)=>(...n)=>Object.assign({},e,t(...n));let Hg=class e extends Error{constructor(t,n,r){super("object"==typeof n?n.message:n||t,{cause:"object"==typeof n?n.cause:r}),this.type=t,Object.setPrototypeOf(this,e.prototype)}};const qg="ERR_PARSE";function Kg(e){let t=e;if("string"==typeof t)try{t=JSON.parse(t)}catch(hP){throw new Hg("ERR_INVALID_VALUE",{cause:hP})}if("object"!=typeof t||!t||Array.isArray(t))throw new Hg("ERR_UNEXPECTED_VALUE");return t}function Gg(e,t){return n=>{const r=r=>{if(!n||void 0!==r)try{return t(r)}catch(Qx){throw new Hg(qg,{message:`"${e}" transformer failed to parse the value`,cause:Qx})}};return Object.assign(r,{isValid(e){try{return r(e),!0}catch{return!1}}})}}function Yg(e,t){return Gg("object",(t=>{const n=Kg(t);return function(e,t){const n={};for(const o in e){const i=e[o];if(!i)continue;let a,s;"function"==typeof i?(a=o,s=i):[a,s]=i;try{const e=s(t(a));void 0!==e&&(n[o]=e)}catch(r){throw new Hg(qg,`Parser for "${o}" property failed${a===o?"":`. Source field: "${a}"`}`,r)}}return n}(e,(e=>n[e]))}))}function Zg(e){throw new Hg("ERR_UNEXPECTED_TYPE",`Unexpected value received: ${JSON.stringify(e)}`)}const Qg=Gg("string",(e=>{if("string"==typeof e||"number"==typeof e)return e.toString();Zg(e)}));function Xg(e){return/^#[\da-f]{6}$/i.test(e)}function Jg(e){const t=e.replace(/\s/g,"").toLowerCase();if(Xg(t))return t;if(function(e){return/^#[\da-f]{3}$/i.test(e)}(t)){let e="#";for(let n=0;n<3;n+=1)e+=t[1+n].repeat(2);return e}const n=t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(!n)throw new Error(`Value "${e}" does not satisfy any of known RGB formats.`);return n.slice(1).reduce(((e,t)=>{const n=parseInt(t,10).toString(16);return e+(1===n.length?"0":"")+n}),"#")}const em=Gg("rgb",(e=>Jg(Qg()(e)))),tm=Gg("themeParams",(e=>{const t=em(!0);return Object.entries(Kg(e)).reduce(((e,[n,r])=>(e[function(e){return e.replace(/_[a-z]/g,(e=>e[1].toUpperCase()))}(n)]=t(r),e)),{})}));let nm=class e extends Error{constructor(t,n,r){super("object"==typeof n?n.message:n||t,{cause:"object"==typeof n?n.cause:r}),this.type=t,Object.setPrototypeOf(this,e.prototype)}};function rm(e){return e.replace(/[A-Z]/g,(e=>`_${e.toLowerCase()}`))}const om="ERR_PARSE";function im(e,t){const n={};for(const o in e){const i=e[o];if(!i)continue;let a,s;"function"==typeof i?(a=o,s=i):[a,s]=i;try{const e=s(t(a));void 0!==e&&(n[o]=e)}catch(r){throw new nm(om,`Parser for "${o}" property failed${a===o?"":`. Source field: "${a}"`}`,r)}}return n}function am(e){let t=e;if("string"==typeof t)try{t=JSON.parse(t)}catch(hP){throw new nm("ERR_INVALID_VALUE",{cause:hP})}if("object"!=typeof t||!t||Array.isArray(t))throw new nm("ERR_UNEXPECTED_VALUE");return t}function sm(e,t){return n=>{const r=r=>{if(!n||void 0!==r)try{return t(r)}catch(Qx){throw new nm(om,{message:`"${e}" transformer failed to parse the value`,cause:Qx})}};return Object.assign(r,{isValid(e){try{return r(e),!0}catch{return!1}}})}}function lm(e,t){return sm(t||"object",(t=>{const n=am(t);return im(e,(e=>n[e]))}))}function cm(e){throw new nm("ERR_UNEXPECTED_TYPE",`Unexpected value received: ${JSON.stringify(e)}`)}const um=sm("boolean",(e=>{if("boolean"==typeof e)return e;const t=String(e);return"1"===t||"true"===t||"0"!==t&&"false"!==t&&void cm(e)})),dm=sm("string",(e=>{if("string"==typeof e||"number"==typeof e)return e.toString();cm(e)})),pm=sm("number",(e=>{if("number"==typeof e)return e;if("string"==typeof e){const t=Number(e);if(!Number.isNaN(t))return t}cm(e)})),fm=sm("date",(e=>e instanceof Date?e:new Date(1e3*pm()(e))));function hm(e,t){return sm(t||"searchParams",(t=>{"string"!=typeof t&&!(t instanceof URLSearchParams)&&cm(t);const n="string"==typeof t?new URLSearchParams(t):t;return im(e,(e=>{const t=n.get(e);return null===t?void 0:t}))}))}function gm(e){for(const t in e)e[t]=[rm(t),e[t]];return e}const mm=e=>{const t=pm(),n=pm(!0),r=dm(),o=dm(!0),i=um(!0),a=lm(gm({addedToAttachmentMenu:i,allowsWriteToPm:i,firstName:r,id:t,isBot:i,isPremium:i,languageCode:o,lastName:o,photoUrl:o,username:o}),"User")(!0);return hm(gm({authDate:fm(),canSendAfter:n,chat:lm(gm({id:t,type:r,title:r,photoUrl:o,username:o}),"Chat")(!0),chatInstance:o,chatType:o,hash:r,queryId:o,receiver:a,startParam:o,user:a}),"initData")(e)};const vm=sm("rgb",(e=>function(e){const t=e.replace(/\s/g,"").toLowerCase();if(function(e){return/^#[\da-f]{6}$/i.test(e)}(t))return t;if(function(e){return/^#[\da-f]{3}$/i.test(e)}(t)){let e="#";for(let n=0;n<3;n+=1)e+=t[1+n].repeat(2);return e}const n=t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(!n)throw new Error(`Value "${e}" does not satisfy any of known RGB formats.`);return n.slice(1).reduce(((e,t)=>{const n=parseInt(t,10).toString(16);return e+(1===n.length?"0":"")+n}),"#")}(dm()(e)))),bm=sm("themeParams",(e=>{const t=vm(!0);return Object.entries(am(e)).reduce(((e,[n,r])=>(e[function(e){return e.replace(/_[a-z]/g,(e=>e[1].toUpperCase()))}(n)]=t(r),e)),{})}));function ym(e){return JSON.stringify(Object.fromEntries(Object.entries(e).map((([e,t])=>[rm(e),t]))))}function wm(e){const{initDataRaw:t,startParam:n,showSettings:r,botInline:o}=e,i=new URLSearchParams;return i.set("tgWebAppPlatform",e.platform),i.set("tgWebAppThemeParams",ym(e.themeParams)),i.set("tgWebAppVersion",e.version),t&&i.set("tgWebAppData",t),n&&i.set("tgWebAppStartParam",n),"boolean"==typeof r&&i.set("tgWebAppShowSettings",r?"1":"0"),"boolean"==typeof o&&i.set("tgWebAppBotInline",o?"1":"0"),i.toString()}const xm=lm({eventType:dm(),eventData:e=>e},"miniAppsMessage"),Sm=sm("fn",(e=>{if("function"==typeof e)return e;cm(e)}));const km=lm({TelegramWebviewProxy:lm({postEvent:Sm()})()});function Cm(e){return km().isValid(e)}var _m=Object.defineProperty,Em=(e,t,n)=>((e,t,n)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n);let Am=class e extends Error{constructor(t,n,r){super("object"==typeof n?n.message:n||t,{cause:"object"==typeof n?n.cause:r}),this.type=t,Object.setPrototypeOf(this,e.prototype)}};function Tm(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Rm(...e){const t=e.flat(1);return[t.push.bind(t),()=>{t.forEach((e=>{e()}))}]}function jm(e){return new Am("ERR_ABORTED",{cause:e})}function Nm(e,t){return e.reject=t.reject,e}class Lm extends Promise{constructor(e,t){let n,r,o,i;"function"==typeof e?(n=e,r=t):r=e,super(((e,t)=>{r||(r={});const{abortSignal:a}=r;if(a&&a.aborted)return t(jm(a.reason));const[s,l]=Rm(),c=e=>(...t)=>(l(),e(...t)),u=new AbortController,{signal:d}=u;i=c((e=>{u.abort(e),t(e)})),o=c(e),a&&s(Tm(a,"abort",(()=>{i(jm(a.reason))})));const{timeout:p}=r;if(p){const e=setTimeout((()=>{i(new Am("ERR_TIMED_OUT",`Timeout reached: ${p}ms`))}),p);s((()=>{clearTimeout(e)}))}n&&n(o,i,d)})),Em(this,"reject"),this.reject=i}static withFn(e,t){return new Lm(((t,n,r)=>{try{const o=e(r);return o instanceof Promise?o.then(t,n):t(o)}catch(fP){n(fP)}}),t)}static resolve(e){return new Lm((t=>{t(e)}))}static reject(e){return new Lm(((t,n)=>{n(e)}))}cancel(){this.reject(new Am("ERR_CANCELED"))}catch(e){return this.then(void 0,e)}finally(e){return Nm(super.finally(e),this)}then(e,t){return Nm(super.then(e,t),this)}}function Om(e,t){return e.resolve=t.resolve,e}class Pm extends Lm{constructor(e,t){let n,r,o;"function"==typeof e?(n=e,r=t):r=e,super(((e,t,r)=>{o=e,n&&n(e,t,r)}),r),Em(this,"resolve"),this.resolve=o}static withFn(e,t){return new Pm(((t,n,r)=>Lm.withFn(e,{abortSignal:r}).then(t,n)),t)}static resolve(e){return new Pm((t=>{t(e)}))}static reject(e){return new Pm(((t,n)=>{n(e)}))}catch(e){return this.then(void 0,e)}finally(e){return Om(super.finally(e),this)}then(e,t){return Om(super.then(e,t),this)}}function Im(e){return`tapps/${e}`}function Mm(e,t){sessionStorage.setItem(Im(e),JSON.stringify(t))}function $m(e){const t=sessionStorage.getItem(Im(e));try{return t?JSON.parse(t):void 0}catch{}}function Dm(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}function Um(e,t){t||(t={});const{textColor:n,bgColor:r,shouldLog:o=!0}=t;function i(t,...i){if(!o||"function"==typeof o&&!o())return;const a="font-weight:bold;padding:0 5px;border-radius:5px";console[t](`%c${Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,timeZone:"UTC"}).format(new Date)}%c / %c${e}`,`${a};background-color: lightblue;color:black`,"",`${a};${n?`color:${n};`:""}${r?`background-color:${r}`:""}`,...i)}return[function(...e){i("log",...e)},function(...e){i("error",...e)}]}function Bm(e,t){document.documentElement.style.setProperty(e,t)}function zm(e){document.documentElement.style.removeProperty(e)}function Fm(e,t){t||(t={});const n=t.equals||Object.is;let r=[],o=e;const i=e=>{if(!n(o,e)){const t=o;o=e,function(e,t){t()}(0,(()=>{[...r].forEach((([n,r])=>{n(e,t),r&&s(n,!0)}))}))}};function a(e){const t="object"!=typeof e?{once:e}:e;return{once:t.once||!1,signal:t.signal||!1}}const s=(e,t)=>{const n=a(t),o=r.findIndex((([t,r])=>t===e&&r.once===n.once&&r.signal===n.signal));o>=0&&r.splice(o,1)},l=Object.assign((function(){return function(e){Vm.length&&Vm[Vm.length-1].add(e)}(l),o}),{destroy(){r=[]},set:i,reset(){i(e)},sub:(e,t)=>(r.push([e,a(t)]),()=>s(e,t)),unsub:s,unsubAll(){r=r.filter((e=>e[1].signal))}});return l}const Vm=[];const Wm=Fm(!1),[Hm,qm]=Um("Bridge",{bgColor:"#9147ff",textColor:"white",shouldLog:Wm}),Km={clipboard_text_received:lm({req_id:dm(),data:e=>null===e?e:dm(!0)(e)},"clipboard_text_received"),custom_method_invoked:lm({req_id:dm(),result:e=>e,error:dm(!0)},"custom_method_invoked"),popup_closed:sm("popup_closed",(e=>e?lm({button_id:e=>null==e?void 0:dm()(e)})()(e):{})),viewport_changed:lm({height:pm(),width:e=>null==e?window.innerWidth:pm()(e),is_state_stable:um(),is_expanded:um()},"viewport_changed")};const Gm=Fm(),Ym=Fm();function Zm(){return Ym()||Ym.set(function(e){const t=window,[,n]=Rm(Tm(t,"resize",(()=>{e(["viewport_changed",{width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0}])})),Tm(t,"message",(n=>{if(n.source!==t.parent)return;let r;try{r=xm()(n.data)}catch{return}const{eventType:o,eventData:i}=r,a=Km[o];try{const t=a?a()(i):i;Hm("Event received:",t?{eventType:o,eventData:t}:{eventType:o}),e([o,t])}catch(s){qm([`An error occurred processing the "${o}" event from the Telegram application.`,"Please, file an issue here:","https://github.com/Telegram-Mini-Apps/telegram-apps/issues/new/choose"].join("\n"),r,s)}})));return n}(Gm.set)),Gm}const Qm=Fm({});function Xm(e){let t=Qm()[e];return t||(t=Fm(void 0,{equals:()=>!1}),Zm().sub((n=>{n&&n[0]===e&&t.set(n[1])})),Qm.set({...Qm(),[e]:t})),t}function Jm(e,t,n){return Xm(e).sub(t,n)}const ev="ERR_UNKNOWN_ENV",tv=Fm("https://web.telegram.org");function nv(e,t){Hm("Posting event:",t?{eventType:e,eventData:t}:{eventType:e});const n=window;if(Cm(n))return void n.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));const r=JSON.stringify({eventType:e,eventData:t});if(function(){try{return window.self!==window.top}catch{return!0}}())return n.parent.postMessage(r,tv());const{external:o}=n;if(!lm({notify:Sm()})().isValid(o))throw new Am(ev);o.notify(r)}function rv(e,t,n){n||(n={});const{capture:r}=n,[o,i]=Rm();return new Lm((i=>{(Array.isArray(t)?t:[t]).forEach((e=>{o(Jm(e,(n=>{(!r||(Array.isArray(t)?r({event:e,payload:n}):r(n)))&&i(n)})))})),(n.postEvent||nv)(e,n.params)}),n).finally(i)}function ov(e){return(e=>{const t=dm(),n=dm(!0),r=um(!0);return hm({botInline:["tgWebAppBotInline",r],initData:["tgWebAppData",mm(!0)],initDataRaw:["tgWebAppData",n],platform:["tgWebAppPlatform",t],showSettings:["tgWebAppShowSettings",r],startParam:["tgWebAppStartParam",n],themeParams:["tgWebAppThemeParams",bm()],version:["tgWebAppVersion",t]},"launchParams")(e)})()(e)}function iv(e){return ov(e.replace(/^[^?#]*[?#]/,"").replace(/[?#]/g,"&"))}function av(){return iv(window.location.href)}function sv(){const e=performance.getEntriesByType("navigation")[0];if(!e)throw new Error("Unable to get first navigation entry.");return iv(e.name)}function lv(){return ov($m("launchParams")||"")}function cv(e){Mm("launchParams",wm(e))}function uv(e){return e instanceof Error?e.message+(e.cause?`\n  ${uv(e.cause)}`:""):JSON.stringify(e)}function dv(){const e=[];for(const t of[av,sv,lv])try{const e=t();return cv(e),e}catch(hP){e.push(hP)}throw new Am("ERR_RETRIEVE_LP_FAILED",["Unable to retrieve launch parameters from any known source. Perhaps, you have opened your app outside Telegram?","📖 Refer to docs for more information:","https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/environment","Collected errors:",...e.map((e=>`— ${uv(e)}`))].join("\n"))}function pv(e){try{return dv(),!0}catch{return!1}return Lm.withFn((async()=>{if(Cm(window))return!0;try{return await rv("web_app_request_theme","theme_changed",{timeout:100}),!0}catch{return!1}}),e)}function fv(e,t){window.dispatchEvent(new MessageEvent("message",{data:JSON.stringify({eventType:e,eventData:t}),source:window.parent}))}function hv(){["TelegramGameProxy_receiveEvent","TelegramGameProxy","Telegram"].forEach((e=>{delete window[e]}))}function gv(e,t,n){Xm(e).unsub(t,n)}function mv(e){return({req_id:t})=>t===e}function vv(e){return e.split(".").map(Number)}function bv(e,t){return function(e,t){const n=vv(e),r=vv(t),o=Math.max(n.length,r.length);for(let i=0;i<o;i+=1){const e=n[i]||0,t=r[i]||0;if(e!==t)return e>t?1:-1}return 0}(e,t)<=0}function yv(e,t,n){if("string"==typeof n){if("web_app_open_link"===e){if("try_instant_view"===t)return bv("6.4",n);if("try_browser"===t)return bv("7.6",n)}if("web_app_set_header_color"===e&&"color"===t)return bv("6.9",n);if("web_app_close"===e&&"return_back"===t)return bv("7.6",n);if("web_app_setup_main_button"===e&&"has_shine_effect"===t)return bv("7.10",n)}switch(e){case"web_app_open_tg_link":case"web_app_open_invoice":case"web_app_setup_back_button":case"web_app_set_background_color":case"web_app_set_header_color":case"web_app_trigger_haptic_feedback":return bv("6.1",t);case"web_app_open_popup":return bv("6.2",t);case"web_app_close_scan_qr_popup":case"web_app_open_scan_qr_popup":case"web_app_read_text_from_clipboard":return bv("6.4",t);case"web_app_switch_inline_query":return bv("6.7",t);case"web_app_invoke_custom_method":case"web_app_request_write_access":case"web_app_request_phone":return bv("6.9",t);case"web_app_setup_settings_button":return bv("6.10",t);case"web_app_biometry_get_info":case"web_app_biometry_open_settings":case"web_app_biometry_request_access":case"web_app_biometry_request_auth":case"web_app_biometry_update_token":return bv("7.2",t);case"web_app_setup_swipe_behavior":return bv("7.7",t);case"web_app_share_to_story":return bv("7.8",t);case"web_app_setup_secondary_button":case"web_app_set_bottom_bar_color":return bv("7.10",t);default:return["iframe_ready","iframe_will_reload","web_app_close","web_app_data_send","web_app_expand","web_app_open_link","web_app_ready","web_app_request_theme","web_app_request_viewport","web_app_setup_main_button","web_app_setup_closing_behavior"].includes(e)}}function wv(e,t){t||(t="strict");const n="function"==typeof t?t:e=>{const{method:n,version:r}=e;let o,i;if("param"in e?(o=`Parameter "${e.param}" of "${n}" method is unsupported in Mini Apps version ${r}`,i="ERR_METHOD_PARAMETER_UNSUPPORTED"):(o=`Method "${n}" is unsupported in Mini Apps version ${r}`,i="ERR_METHOD_UNSUPPORTED"),"strict"===t)throw new Am(i,o);return console.warn(o)};return(t,r)=>yv(t,e)?function(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}(r)&&"web_app_set_header_color"===t&&"color"in r&&!yv(t,"color",e)?n({version:e,method:t,param:"color"}):nv(t,r):n({version:e,method:t})}function xv(){const e=performance.getEntriesByType("navigation")[0];return!!e&&"reload"===e.type}let Sv;function kv(e,t){t||(t={});const n=t.equals||Object.is;let r=[],o=e;const i=e=>{if(!n(o,e)){const t=o;o=e,function(e,t){Sv&&Sv.set(e,t)||t()}(l,(()=>{[...r].forEach((([n,r])=>{n(e,t),r&&s(n,!0)}))}))}};function a(e){const t="object"!=typeof e?{once:e}:e;return{once:t.once||!1,signal:t.signal||!1}}const s=(e,t)=>{const n=a(t),o=r.findIndex((([t,r])=>t===e&&r.once===n.once&&r.signal===n.signal));o>=0&&r.splice(o,1)},l=Object.assign((function(){return function(e){Cv.length&&Cv[Cv.length-1].add(e)}(l),o}),{destroy(){r=[]},set:i,reset(){i(e)},sub:(e,t)=>(r.push([e,a(t)]),()=>s(e,t)),unsub:s,unsubAll(){r=r.filter((e=>e[1].signal))}});return l}const Cv=[];function _v(e,t){let n,r=new Set;function o(){return n||(n=kv(a(),t))}function i(){o().set(a())}function a(){r.forEach((e=>{e.unsub(i,{signal:!0})}));const t=new Set;let n;Cv.push(t);try{n=e()}finally{Cv.pop()}return t.forEach((e=>{e.sub(i,{signal:!0})})),r=t,n}return Object.assign((function(){return o()()}),{destroy(){o().destroy()},sub:(...e)=>o().sub(...e),unsub(...e){o().unsub(...e)},unsubAll(...e){o().unsubAll(...e)}})}const Ev=kv((()=>{let e=0;return()=>(e+=1).toString()})()),Av=kv(nv),Tv=kv("0.0");function Rv(e,t,n){return function(e,t,n,r){return rv("web_app_invoke_custom_method","custom_method_invoked",{...r||{},params:{method:e,params:t,req_id:n},capture:mv(n)}).then((({result:e,error:t})=>{if(t)throw new Am("ERR_INVOKE_CUSTOM_METHOD_RESPONSE",t);return e}))}(e,t,Ev()(),{...n||{},postEvent:Nv})}const jv=(e,t,n)=>(n||(n={}),n.postEvent||(n.postEvent=Nv),rv(e,t,n)),Nv=(e,t)=>Av()(e,t);function Lv(e){return _v((()=>yv(e,Tv())))}const Ov="ERR_POPUP_INVALID_PARAMS",Pv="ERR_INVALID_URL",Iv="ERR_ALREADY_REQUESTING",Mv="ERR_ALREADY_OPENED",$v="ERR_NOT_SUPPORTED";function Dv(){return typeof window>"u"}function Uv(e,t,{isSupported:n,isMounted:r,component:o,supports:i}={}){const a=`${o?`${o}.`:""}${e}()`;function s(e){if(i){const t=i[e];return yv(t[0],t[1],Tv())}return!0}n=n?Array.isArray(n)||"object"==typeof n&&"any"in n?n:[n]:void 0;const l=()=>{if(!n)return;const e=`it is unsupported in Mini Apps version ${Tv()}`;function t(t){return"string"==typeof t?yv(t,Tv())?void 0:e:t.fn()?void 0:t.error}if(Array.isArray(n)){for(const e of n){const n=t(e);if(n)return n}return}let r;for(const o of n.any)if(r=t(o),!r)return;return e},c=_v((()=>!l())),u=_v((()=>"0.0"!==Tv())),d=_v((()=>!r||r())),p=_v((()=>pv("simple")&&!Dv()&&u()&&c()&&d()));let f;if(i){f={};for(const e in i)f[e]=_v((()=>s(e)))}return Object.assign(((...e)=>{const n=`Unable to call the ${a} ${o?"method":"function"}:`;if(Dv()||!pv("simple"))throw new Am(ev,`${n} it can't be called outside Mini Apps`);if(!u())throw new Am("ERR_NOT_INITIALIZED",`${n} the SDK was not initialized. Use the SDK init() function`);const r=l();if(r)throw new Am($v,`${n} ${r}`);const c=((...e)=>{if(i)for(const t in i)if(i[t][2](...e)&&!s(t))return`option ${t} is not supported in Mini Apps version ${Tv()}`})(...e);if(c)throw new Am($v,`${n} ${c}`);if(!d())throw new Am("ERR_NOT_MOUNTED",`${n} the component is not mounted. Use the ${o}.mount() method`);return t(...e)}),t,{isAvailable:p,ifAvailable:(...e)=>p()?t(...e):void 0},n?{isSupported:c}:{},f?{supports:f}:{})}function Bv(e,t){return t||(t={}),(n,r,o,i)=>Uv(n,r,{...t,isSupported:o||t.isSupported,supports:i,component:e})}function zv(e,t,n){return Bv(e,{isSupported:n,isMounted:t})}function Fv(e,t){return Bv(e,{isSupported:t})}const Vv="web_app_setup_back_button",Wv="back_button_pressed",Hv="backButton",qv=kv(!1),Kv=kv(!1),Gv=Lv(Vv),Yv=zv(Hv,Kv,Vv),Zv=Fv(Hv,Vv),Qv=Yv("hide",(()=>{Jv(!1)})),Xv=Zv("mount",(()=>{Kv()||(Jv(xv()&&$m(Hv)||!1),Kv.set(!0))}));function Jv(e){e!==qv()&&(Nv(Vv,{is_visible:e}),Mm(Hv,e),qv.set(e))}const eb=Zv("onClick",(e=>Jm(Wv,e))),tb=Zv("offClick",(e=>{gv(Wv,e)})),nb=Yv("show",(()=>{Jv(!0)}));const rb=Object.freeze(Object.defineProperty({__proto__:null,hide:Qv,isMounted:Kv,isSupported:Gv,isVisible:qv,mount:Xv,offClick:tb,onClick:eb,show:nb,unmount:function(){Kv.set(!1)}},Symbol.toStringTag,{value:"Module"}));function ob(e,t,n,{isMounting:r,isMounted:o,mountError:i}){return a=>Lm.withFn((async a=>{if(o())return;if(r())throw new Am("ERR_ALREADY_MOUNTING",`The ${e} component is already mounting`);let s;r.set(!0);try{s=[!0,await t({abortSignal:a})]}catch(mP){s=[!1,mP]}!function(e){if(Sv)return e();Sv=new Map;try{e()}finally{Sv.forEach((e=>e())),Sv=void 0}}((()=>{if(r.set(!1),o.set(!0),!s[0]){const e=s[1];throw i.set(e),e}n(s[1])}))}),a)}const ib=Bv,ab=kv(),sb=kv(!1),lb=kv(!1),cb=kv(!1),ub=kv(!1),db=kv(void 0);function pb(e){return e.available?{available:!0,tokenSaved:e.token_saved,deviceId:e.device_id,accessRequested:e.access_requested,type:e.type,accessGranted:e.access_granted}:{available:!1}}const fb="web_app_biometry_get_info",hb=Uv("requestBiometry",(e=>jv(fb,"biometry_info_received",e).then(pb)),{isSupported:fb}),gb="web_app_biometry_request_auth",mb="biometry_info_received",vb="biometry",bb=ib(vb),yb=Fv(vb,gb),wb=zv(vb,cb,gb);function xb(){throw new Am("ERR_NOT_AVAILABLE","Biometry is not available")}wb("authenticate",(e=>Lm.withFn((async t=>{if(sb())throw new Am(Iv,"Authentication is already in progress");const n=ab();(!n||!n.available)&&xb(),sb.set(!0);try{const r=await jv(gb,"biometry_auth_requested",{abortSignal:t,params:{reason:((e||{}).reason||"").trim()}}),{token:o}=r;return"string"==typeof o&&kb({...n,token:o}),r}finally{sb.set(!1)}}),e))),yb("openSettings",(()=>{Nv("web_app_biometry_open_settings")})),wb("requestAccess",(e=>Lm.withFn((async t=>{if(lb())throw new Am(Iv,"Access request is already in progress");lb.set(!0);try{const n=await jv("web_app_biometry_request_access",mb,{abortSignal:t,params:{reason:(e||{}).reason||""}}).then(pb);return n.available||xb(),kb(n),n.accessGranted}finally{lb.set(!1)}}),e))),bb("mount",ob(vb,(e=>xv()&&$m(vb)||hb(e)),(e=>{Jm(mb,Sb),kb(e)}),{isMounted:cb,mountError:db,isMounting:ub}));const Sb=e=>{kb(pb(e))};function kb(e){ab.set(e),Mm(vb,e)}function Cb(e,t){return Bv(e,{isMounted:t})}wb("updateToken",(e=>(e||(e={}),jv("web_app_biometry_update_token","biometry_token_updated",{...e,params:{token:e.token||"",reason:e.reason}}).then((e=>e.status)))));const _b="closingBehavior",Eb=kv(!1),Ab=kv(!1),Tb=Cb(_b,Ab),Rb=ib(_b);function jb(e){e!==Eb()&&(Nv("web_app_setup_closing_behavior",{need_confirmation:e}),Mm(_b,e),Eb.set(e))}Tb("disableConfirmation",(()=>{jb(!1)})),Tb("enableConfirmation",(()=>{jb(!0)})),Rb("mount",(()=>{Ab()||(jb(xv()&&$m(_b)||!1),Ab.set(!0))}));const Nb=Fv("cloudStorage","web_app_invoke_custom_method");Nb("deleteItem",((e,t)=>{const n=Array.isArray(e)?e:[e];return n.length?Rv("deleteStorageValues",{keys:n},t).then():Lm.resolve()})),Nb("getItem",(function(e,t){const n=Array.isArray(e)?e:[e];return n.length?Rv("getStorageValues",{keys:n},t).then((t=>{const r=Yg(Object.fromEntries(n.map((e=>[e,Qg()]))))()(t);return Array.isArray(e)?r:r[e]})):Lm.resolve("string"==typeof e?"":{})})),Nb("getKeys",(e=>Rv("getStorageKeys",{},e).then(function(e){return Gg("array",(t=>{let n;if(Array.isArray(t))n=t;else if("string"==typeof t)try{const e=JSON.parse(t);Array.isArray(e)&&(n=e)}catch{}return n||Zg(t),n.map(e)}))}(Qg())()))),Nb("setItem",((e,t,n)=>Rv("saveStorageValue",{key:e,value:t},n).then()));const Lb="web_app_trigger_haptic_feedback",Ob=Fv("hapticFeedback",Lb);Ob("impactOccurred",(e=>{Nv(Lb,{type:"impact",impact_style:e})})),Ob("notificationOccurred",(e=>{Nv(Lb,{type:"notification",notification_type:e})})),Ob("selectionChanged",(()=>{Nv(Lb,{type:"selection_change"})}));const Pb="web_app_open_invoice",Ib=Fv("invoice",Pb),Mb=kv(!1);Ib("open",(async function(e,t,n){if(Mb())throw new Am(Mv,"An invoice is already opened");let r;if("url"===t){const{hostname:t,pathname:n}=new URL(e,window.location.href);if("t.me"!==t)throw new Am(Pv,`Link has unexpected hostname: ${t}`);const o=n.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);if(!o)throw new Am("ERR_INVALID_SLUG",'Expected to receive a link with a pathname in format "/invoice/{slug}" or "/${slug}"');[,,r]=o}else r=e,n=t;return Mb.set(!0),jv(Pb,"invoice_closed",{...n,params:{slug:r},capture:e=>r===e.slug}).then((e=>e.status)).finally((()=>{Mb.set(!1)}))}));const $b=kv(!1),Db=kv(!1),Ub=kv({});function Bb(e){return _v((()=>Ub()[e]))}const zb=Bb("bgColor"),Fb=Bb("buttonColor"),Vb=Bb("buttonTextColor"),Wb=Bb("bottomBarBgColor"),Hb=Bb("secondaryBgColor"),qb=kv({hasShineEffect:!1,isEnabled:!0,isLoaderVisible:!1,isVisible:!1,text:"Continue"}),Kb=_v((()=>{const e=qb();return{...e,backgroundColor:e.backgroundColor||Fb()||"#2481cc",textColor:e.textColor||Vb()||"#ffffff"}})),Gb=kv(!1),Yb="main_button_pressed",Zb="mainButton",Qb=ib(Zb),Xb=Cb(Zb,Gb);function Jb(){throw new Am("ERR_VARS_ALREADY_BOUND","CSS variables are already bound")}Qb("mount",(()=>{if(!Gb()){const e=xv()&&$m(Zb);e&&qb.set(e),Gb.set(!0)}})),Qb("onClick",(e=>Jm(Yb,e))),Qb("offClick",(e=>{gv(Yb,e)})),Xb("setParams",(e=>{qb.set({...qb(),...Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!==e)))}),Mm(Zb,qb());const t=Kb();t.text&&Nv("web_app_setup_main_button",{color:t.backgroundColor,has_shine_effect:t.hasShineEffect,is_active:t.isEnabled,is_progress_visible:t.isLoaderVisible,is_visible:t.isVisible,text:t.text,text_color:t.textColor})}));const ey="themeParams",ty=ib(ey);Cb(ey,$b)("bindCssVars",(e=>{function t(e){Object.entries(Ub()).forEach((([t,n])=>{n&&e(t,n)}))}function n(){t(((t,n)=>{Bm(e(t),n)}))}return Db()&&Jb(),e||(e=e=>`--tg-theme-${Dm(e)}`),n(),Ub.sub(n),Db.set(!0),()=>{t(zm),Ub.unsub(n),Db.set(!1)}}));const ny=ty("mount",(()=>{$b()||(Jm("theme_changed",ry),Ub.set(xv()&&$m(ey)||dv().themeParams),$b.set(!0))})),ry=e=>{const t=function(e){return tm()(e)}(e.theme_params);Ub.set(t),Mm(ey,t)};function oy(e){return _v((()=>{const t=e();return Xg(t)?t:"bg_color"===t?zb():Hb()}))}const iy=kv("bg_color"),ay=oy(iy),sy=kv("bottom_bar_bg_color"),ly=_v((()=>{const e=sy();return Xg(e)?e:"bottom_bar_bg_color"===e?Wb()||Hb():"secondary_bg_color"===e?Hb():zb()})),cy=kv("bg_color"),uy=oy(cy),dy=kv(!1),py=kv(!1),fy=_v((()=>{const e=ay();return!!e&&function(e){const t=Jg(e);return Math.sqrt([.299,.587,.114].reduce(((e,n,r)=>{const o=parseInt(t.slice(1+2*r,1+2*(r+1)),16);return e+o*o*n}),0))<120}(e)})),hy=_v((()=>({backgroundColor:iy(),bottomBarColor:sy(),headerColor:cy()}))),gy="web_app_set_background_color",my="web_app_set_bottom_bar_color",vy="web_app_set_header_color",by="miniApp",yy={any:[gy,my,vy]},wy=_v((()=>yy.any.some((e=>yv(e,Tv()))))),xy=ib(by),Sy=Fv(by,yy),ky=zv(by,dy,yy),Cy=ky("bindCssVars",(e=>{py()&&Jb();const[t,n]=Rm();function r(e,n){function r(){Bm(e,n()||null)}r(),t(n.sub(r),zm.bind(null,e))}return e||(e=e=>`--tg-${Dm(e)}`),r(e("bgColor"),ay),r(e("bottomBarColor"),ly),r(e("headerColor"),uy),t((()=>{py.set(!1)})),py.set(!0),n})),_y=xy("close",(e=>{Nv("web_app_close",{return_back:e})})),Ey=Sy("mount",(()=>{if(!dy()){const e=xv()&&$m(by);ny(),Ry.ifAvailable(e?e.backgroundColor:"bg_color"),jy.ifAvailable(e?e.bottomBarColor:"bottom_bar_bg_color"),Ny.ifAvailable(e?e.headerColor:"bg_color"),dy.set(!0)}})),Ay=xy("ready",(()=>{Nv("web_app_ready")}));function Ty(){Mm(by,hy())}const Ry=ky("setBackgroundColor",(e=>{e!==iy()&&(Nv(gy,{color:e}),iy.set(e),Ty())}),gy),jy=ky("setBottomBarColor",(e=>{e!==sy()&&(Nv(my,{color:e}),sy.set(e),Ty())}),my),Ny=ky("setHeaderColor",(e=>{e!==cy()&&(Nv(vy,Xg(e)?{color:e}:{color_key:e}),cy.set(e),Ty())}),vy,{rgb:[vy,"color",Xg]});const Ly=Object.freeze(Object.defineProperty({__proto__:null,backgroundColor:iy,backgroundColorRGB:ay,bindCssVars:Cy,bottomBarColor:sy,bottomBarColorRGB:ly,close:_y,headerColor:cy,headerColorRGB:uy,isCssVarsBound:py,isDark:fy,isMounted:dy,isSupported:wy,mount:Ey,ready:Ay,setBackgroundColor:Ry,setBottomBarColor:jy,setHeaderColor:Ny,state:hy,unmount:function(){dy.set(!1)}},Symbol.toStringTag,{value:"Module"}));function Oy(e){const t=e.message.trim(),n=(e.title||"").trim(),r=e.buttons||[];if(n.length>64)throw new Am(Ov,`Invalid title: ${n}`);if(!t||t.length>256)throw new Am(Ov,`Invalid message: ${t}`);if(r.length>3)throw new Am(Ov,`Invalid buttons count: ${r.length}`);return{title:n,message:t,buttons:r.length?r.map(((e,t)=>{const n=e.id||"";if(n.length>64)throw new Am(Ov,`Button with index ${t} has invalid id: ${n}`);if(!e.type||"default"===e.type||"destructive"===e.type){const r=e.text.trim();if(!r||r.length>64)throw new Am(Ov,`Button with index ${t} has invalid text: ${r}`);return{type:e.type,text:r,id:n}}return{type:e.type,id:n}})):[{type:"close",id:""}]}}const Py="web_app_open_popup",Iy=Fv("popup",Py),My=kv(!1);Iy("open",(async e=>{if(My())throw new Am(Mv,"A popup is already opened");My.set(!0);try{const{button_id:t=null}=await jv(Py,"popup_closed",{...e,params:Oy(e)});return t}finally{My.set(!1)}}));const $y="web_app_open_scan_qr_popup",Dy=Fv("qrScanner",$y),Uy=Dy("close",(()=>{By.set(!1),Nv("web_app_close_scan_qr_popup")})),By=kv(!1);Dy("open",(function(e){return Lm.withFn((t=>{if(By())throw new Am(Mv,"The QR Scanner is already opened");By.set(!0),e||(e={});const{onCaptured:n,text:r,capture:o}=e,[,i]=Rm(By.sub((()=>{a.resolve()})),Jm("scan_qr_popup_closed",(()=>{By.set(!1)})),Jm("qr_text_received",(e=>{n?n(e.data):(!o||o(e.data))&&(a.resolve(e.data),Uy())}))),a=new Pm({abortSignal:t}).catch(Uy).finally(i);return(e.postEvent||Nv)($y,{text:r}),a}),e)}));const zy=kv({hasShineEffect:!1,isEnabled:!0,isLoaderVisible:!1,isVisible:!1,position:"left",text:"Cancel"}),Fy=_v((()=>{const e=zy();return{...e,backgroundColor:e.backgroundColor||ly()||"#000000",textColor:e.textColor||Fb()||"#2481cc"}})),Vy=kv(!1),Wy="web_app_setup_secondary_button",Hy="secondary_button_pressed",qy="secondaryButton",Ky=Fv(qy,Wy),Gy=zv(qy,Vy,Wy);Ky("mount",(()=>{if(!Vy()){const e=xv()&&$m(qy);e&&zy.set(e),Vy.set(!0)}})),Ky("onClick",(e=>Jm(Hy,e))),Ky("offClick",(e=>{gv(Hy,e)})),Gy("setParams",(e=>{zy.set({...zy(),...Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!==e)))}),Mm(qy,zy());const t=Fy();t.text&&Nv(Wy,{color:t.backgroundColor,has_shine_effect:t.hasShineEffect,is_active:t.isEnabled,is_progress_visible:t.isLoaderVisible,is_visible:t.isVisible,position:t.position,text:t.text,text_color:t.textColor})}));const Yy="web_app_setup_settings_button",Zy="settings_button_pressed",Qy="settingsButton",Xy=kv(!1),Jy=kv(!1),ew=Fv(Qy,Yy),tw=zv(Qy,Jy,Yy);function nw(e){e!==Xy()&&(Nv(Yy,{is_visible:e}),Mm(Qy,e),Xy.set(e))}tw("hide",(()=>{nw(!1)})),ew("mount",(()=>{Jy()||(nw(xv()&&$m(Qy)||!1),Jy.set(!0))})),ew("onClick",(e=>Jm(Zy,e))),ew("offClick",(e=>{gv(Zy,e)})),tw("show",(()=>{nw(!0)}));const rw="web_app_setup_swipe_behavior",ow="swipeBehavior",iw=kv(!1),aw=Lv(rw),sw=kv(!0),lw=Fv(ow,rw),cw=zv(ow,iw,rw),uw=cw("disableVertical",(()=>{fw(!1)})),dw=cw("enableVertical",(()=>{fw(!0)})),pw=lw("mount",(()=>{iw()||(fw(xv()&&$m(ow)||!1,!0),iw.set(!0))}));function fw(e,t){(e!==sw()||t)&&(Nv(rw,{allow_vertical_swipe:e}),Mm(ow,e),sw.set(e))}const hw=Object.freeze(Object.defineProperty({__proto__:null,disableVertical:uw,enableVertical:dw,isMounted:iw,isSupported:aw,isVerticalEnabled:sw,mount:pw,unmount:function(){iw.set(!1)}},Symbol.toStringTag,{value:"Module"})),gw=kv({height:0,width:0,isExpanded:!1,stableHeight:0}),mw=kv(!1),vw=kv(!1),bw=kv(!1),yw=kv(void 0);const ww="viewport",xw=ib(ww);Cb(ww,mw)("bindCssVars",(e=>{vw()&&Jb(),e||(e=e=>`--tg-viewport-${Dm(e)}`);const t=["height","width","stableHeight"];function n(){t.forEach((t=>{Bm(e(t),`${gw()[t]}px`)}))}return n(),gw.sub(n),vw.set(!0),()=>{t.forEach(zm),gw.unsub(n),vw.set(!1)}})),xw("expand",(()=>{Nv("web_app_expand")})),xw("mount",ob(ww,(e=>{const t=xv()&&$m(ww);if(t)return t;if(["macos","tdesktop","unigram","webk","weba","web"].includes(dv().platform)){const e=window;return{isExpanded:!0,height:e.innerHeight,width:e.innerWidth,stableHeight:e.innerHeight}}return e.timeout||(e.timeout=1e3),function(e){return jv("web_app_request_viewport","viewport_changed",e).then((e=>({height:e.height,width:e.width,isExpanded:e.is_expanded,isStable:e.is_state_stable})))}(e).then((e=>({height:e.height,isExpanded:e.isExpanded,stableHeight:e.isStable?e.height:gw().stableHeight,width:e.width})))}),(e=>{Jm("viewport_changed",Sw),kw(e)}),{isMounted:mw,isMounting:bw,mountError:yw}));const Sw=e=>{kw({height:e.height,isExpanded:e.is_expanded,stableHeight:e.is_state_stable?e.height:gw().stableHeight,width:e.width})};function kw(e){gw.set({isExpanded:e.isExpanded,height:Cw(e.height),width:Cw(e.width),stableHeight:Cw(e.stableHeight)}),Mm("viewport",gw())}function Cw(e){return Math.max(e,0)}ib()("openLink",((e,t)=>{if("string"==typeof e)try{e=new URL(e)}catch(hP){throw new Am(Pv,`"${e.toString()}" is invalid URL`,hP)}t||(t={}),Nv("web_app_open_link",{url:e.toString(),try_browser:t.tryBrowser,try_instant_view:t.tryInstantView})}));const _w="web_app_open_tg_link",Ew=ib()("openTelegramLink",(e=>{const t=e.toString();if(!t.match(/^https:\/\/t.me\/.+/))throw new Am(Pv,`"${t}" is invalid URL`);yv(_w,Tv())?(e=new URL(e),Nv(_w,{path_full:e.pathname+e.search})):window.location.href=t})),Aw=ib()("shareURL",((e,t)=>{Ew("https://t.me/share/url?"+new URLSearchParams({url:e,text:t||""}).toString().replace(/\+/g,"%20"))}));const Tw="found_user",Rw="byte",jw="double",Nw="short",Lw="long",Ow="str",Pw="str2",Iw="int";const Mw=["Item_THRESHOLDS","ATTACK_INTERVAL_BY_ERA","ATTACK_INTERVAL_REDUCTION_BY_ERA","IMMUNITY_DURATION_BY_ERA"],$w="DISCONNECT",Dw=101,Uw=103,Bw=104,zw=105,Fw=106,Vw=107,Ww=111,Hw=116,qw=124,Kw=128,Gw={top:Dw,frensdf:Hw,frensusd:Hw,tasks:115,clan_reqs:Ww,logs:qw,random:Uw,top_stars:Fw};var Yw=(e=>(e[e.BUY_ItemS=1]="BUY_ItemS",e[e.HATCH_EGGS=2]="HATCH_EGGS",e[e.SELL_EGGS=3]="SELL_EGGS",e[e.BUY_ATTACKERS=4]="BUY_ATTACKERS",e[e.BUY_DEFENDERS=5]="BUY_DEFENDERS",e[e.ATTACK=6]="ATTACK",e[e.ARTIFACT_BUY=7]="ARTIFACT_BUY",e[e.BUY_DRA=9]="BUY_DRA",e[e.SELL_DRA=10]="SELL_DRA",e[e.BUY_BOOST=11]="BUY_BOOST",e[e.REVIVE=15]="REVIVE",e[e.ACTIVATE_STAR_ABILITY=16]="ACTIVATE_STAR_ABILITY",e[e.APPLY_EXTERMINATION=18]="APPLY_EXTERMINATION",e[e.OFFER_ItemS=19]="OFFER_ItemS",e[e.CAMP_TAME=20]="CAMP_TAME",e[e.CREATE_STAR_SELL_OFFER=21]="CREATE_STAR_SELL_OFFER",e[e.CANCEL_STAR_SELL_OFFER=22]="CANCEL_STAR_SELL_OFFER",e[e.BUY_STAR=23]="BUY_STAR",e[e.DRA_BONUS=101]="DRA_BONUS",e[e.TASK_REWARD=102]="TASK_REWARD",e[e.AD_BONUS=105]="AD_BONUS",e[e.DEAD=103]="DEAD",e[e.DARK_DEAL_REWARD=104]="DARK_DEAL_REWARD",e[e.CLAN_REWARD=106]="CLAN_REWARD",e[e.DAILY_BONUS=107]="DAILY_BONUS",e[e.CLANS_CREATE_NEW=108]="CLANS_CREATE_NEW",e[e.CLANS_DELETE=109]="CLANS_DELETE",e[e.CLANS_CREATE_JOIN_REQUEST=112]="CLANS_CREATE_JOIN_REQUEST",e[e.CLANS_ADD_MEMBER=113]="CLANS_ADD_MEMBER",e[e.CLANS_REJECT_JOIN_REQUEST=119]="CLANS_REJECT_JOIN_REQUEST",e[e.CLANS_REMOVE_MEMBER=122]="CLANS_REMOVE_MEMBER",e))(Yw||{});var Zw=(e=>(e[e.DEAD=1]="DEAD",e[e.NO_ATTACKERS=2]="NO_ATTACKERS",e[e.ATTACK_ON_COOLDOWN=3]="ATTACK_ON_COOLDOWN",e[e.INVALID_TARGET=4]="INVALID_TARGET",e[e.TARGET_HAS_NO_ItemS=5]="TARGET_HAS_NO_ItemS",e[e.TARGET_IS_IMMUNE=6]="TARGET_IS_IMMUNE",e[e.TARGET_HAS_CLOAK=7]="TARGET_HAS_CLOAK",e[e.WRONG_ERA=8]="WRONG_ERA",e[e.SAME_TARGET=9]="SAME_TARGET",e))(Zw||{}),Qw=(e=>(e.ATTACK="ATTACK",e.JOIN_CLAN="JOIN_CLAN",e.OBTAIN_ItemS="OBTAIN_ItemS",e.CONNECT_WALLET="CONNECT_WALLET",e.MOST_EGGS_STOLEN="MOST_EGGS_STOLEN",e.SHARE_STORY="SHARE_STORY",e.FOLLOW_X="FOLLOW_X",e))(Qw||{});const Xw="items_dead",Jw="attackers_dead",ex="defenders_dead",tx="eggs_stolen",nx="items_joined",rx="cat",ox=[{available_eras:[1,2],actionType:"rebuy",color:"green",id:1},{actionType:"extend",timeLeft:"4:39",color:"rose",id:2},{actionType:"buy",color:"orange2",id:3},{available_eras:[2,3],actionType:"buy",color:"blue",id:4},{available_eras:[2,3],actionType:"extend",timeLeft:"3:29",color:"seren",id:5},{available_eras:[2],actionType:"rebuy",color:"red",id:6},{actionType:"rebuy",color:"blue-game",id:7},{available_eras:[2,3],actionType:"rebuy",color:"orange3",id:8},{actionType:"rebuy",price:1e3,color:"purple",id:9},{actionType:"rebuy",color:"pink-grad",id:10},{actionType:"rebuy",collected:0,collectedCurrency:"egg",color:"orange2",id:11},{actionType:"rebuy",price:1e3,collected:0,color:"darkblue",id:12,collectedCurrency:"draa",currency:"soul"},{actionType:"rebuy",price:1e3,color:"light-blue",currency:"draa",collected:0,collectedCurrency:"draa",id:13},{actionType:"rebuy",price:10,color:"purple-dark-grad",currency:"egg",id:14},{available_eras:[3],actionType:"rebuy",price:1e3,color:"orange4",currency:"draa",id:15}];class ix{base_price=0;duration=0;name="";available_eras;price_increments;constructor(...e){this.name=e[0],this.duration=e[1],this.base_price=e[2],this.available_eras=e[3],this.price_increments=e[4]}}let ax=e=>e;new ix("bst0",ax(45),100,[1,2],[1,1,0]),new ix("bst1",ax(45),100,[2,3],[0,1,10]),new ix("bst2",ax(45),100,[2,3],[0,1,10]),new ix("bst3",ax(15),100,[],[10,10,10]);const sx=[{available_eras:[1,2],id:0,price:100,color:"green",src:"boost-egg"},{available_eras:[2,3],id:1,price:100,color:"red",src:"boost-sword"},{available_eras:[2,3],id:2,price:100,color:"blue-dark",src:"boost-shield"},{id:3,price:100,color:"purple-dark",src:"boost-eye"}];class lx{name;min;max;values;available_eras;constructor(...e){this.name=e[0],this.min=e[1],this.max=e[2],this.values=e[4],this.available_eras=e[3]}}const cx=[new lx("gp1Placeholder",1,99,[1,2],[[20,50],[20,65],[20,80],[50,50]]),new lx("gp1",1,99,[1,2,3],[[30,60],[30,70],[30,80],[50,50]]),new lx("gp2",1,199,[1,2]),new lx("gp3",0,null,[3])];function ux(e){return{id:fx(e,Lw),first_name:fx(e,Ow),last_name:fx(e,Ow),username:fx(e,Ow),clan:vx(e)}}function dx(e){return{id:fx(e,Lw),hits:fx(e,Lw),boosts:[],sa:[],first_name:"",last_name:"",username:"",balance:0}}function px(e,t="",n=""){if(!["Item_THRESHOLDS"].includes(n)&&!n.match(/BY_ERA/))return fx(e,t);const r=Mw.includes(n);let o=[];const i=fx(e,Rw)||0;r?(o.push(0),o.push(0)):o.push(0);for(let a=0;a<i;a+=1)o.push(fx(e,t));return o}function fx(e,t,n=!1){let r;try{switch(t){case Rw:case"byter":r=e.readByte();break;case"":case"r":r=e.readFloatBE();break;case Iw:case"intr":r=e.readInteger();break;case"longS":r=e.readSignedLong();break;case Lw:case"longr":r=e.readLong();break;case Nw:r=e.readShort();break;case jw:r=e.readDouble();break;case Ow:r=e.readString();break;case"readBigInt64BE":r=e.readBigInt64BE();break;case Pw:r=e.readString2();break;case"bool":r=e.readBoolean()}}catch(dP){}return r}const hx=e=>({id:fx(e,Lw),first_name:fx(e,Ow),last_name:fx(e,Ow),username:fx(e,Ow),bonus_sum_to_referrers:fx(e,Lw),bonus_dollar_sum_to_referrers:fx(e,jw)}),gx=e=>{let t={};return e&&(t={...e},t.firstName&&(t.first_name=t.firstName),t.lastName&&(t.last_name=t.lastName)),t};function mx(e,t=!1,n=!1){const r=t&&!n;let o={id:fx(e,Lw),name:fx(e,Ow),description:r?fx(e,Ow):"",total_items:fx(e,Lw),reward_distribution_method:fx(e,Ow),owner:r?dx(e):ux(e),created_at:fx(e,Lw),members_count:fx(e,Iw),crest_image_path:fx(e,Ow),members:[],member_rewards:[],user_final_rewards:[]};if(o.owner){let e=o.owner.first_name;o.owner.last_name&&(e+=` ${o.owner.last_name}`),o.leaderUsername=e||o.owner.id}let i=dk.getState().world.season_finished_at;if(r){let n=fx(e,Rw);for(let a=0;a<n;a+=1)o.members.push(t?dx(e):ux(e));let r=fx(e,Rw);for(let t=0;t<r;t+=1){let n=fx(e,Lw);o.members.at(t)&&(o.members.at(t).clan_reward=n)}o.join_request_sent=fx(e,Rw);let i=fx(e,Rw);for(let t=0;t<i;t+=1){let n=fx(e,Lw);o.members.at(t)&&(o.members.at(t).final_reward=n)}}else{let t=fx(e,Lw);i&&(t=void 0),o.estimated_reward=t,o.final_reward_sum=fx(e,Lw)}return o}function vx(e){return{id:fx(e,Iw),crest_image_path:fx(e,Ow)}}function bx(e,t=!1){return{items_dead:fx(e,Lw),attackers_dead:fx(e,Lw),defenders_dead:fx(e,Lw),eggs_stolen:fx(e,Lw),items_joined:fx(e,Lw),created_at:t?fx(e,Lw):0}}function yx(e){let t=[];const n=fx(e,Rw);for(let r=0;r<n;r+=1)t.push({...bx(e),user:dx(e),created_at:fx(e,Lw)});return t}const wx=e=>{let t=fx(e,Lw);return t?{id:t,wallet_address:fx(e,Pw),created_at:fx(e,Lw),status:fx(e,Ow)}:null};try{!function(e){(function(e){e||(e={});const{postEvent:t}=e,n=e.version||dv().version;Tv.set(n),Av.set("function"==typeof t?t:wv(n))})(e),[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach((e=>{let t=window;e.forEach(((e,n,r)=>{n!==r.length-1?(e in t||(t[e]={}),t=t[e]):t[e]=fv}))}));const[t,n]=Rm(Jm("reload_iframe",(()=>{Nv("iframe_will_reload"),window.location.reload()})),hv),{acceptCustomStyles:r=!0}={};if(r){const e=document.createElement("style");e.id="telegram-custom-styles",document.head.appendChild(e),t(Jm("set_custom_style",(t=>{e.innerHTML=t})),(()=>{document.head.removeChild(e)}))}Nv("iframe_ready",{reload_supported:!0})}(),rb.mount(),rb.hide()}catch(dP){}const xx=()=>{let e={};const t=location.search.split(/user_id_([0-9]+)/)[1];return t&&(document.title=`DEV ${t}`,e.sec=1,e.id=+t),e.id?e:{}};const Sx=(e,t=".main",n="data-r")=>{let r=document.querySelector(t);r&&r.setAttribute(n,e)};function kx(){(e=>{var t=document.querySelector(e);t&&t.click()})(`.${Ap}`)}const Cx=()=>{try{rb?.hide()}catch(dP){}};try{rb.onClick((()=>{kx()}))}catch(dP){}let _x=!0;class Ex{name;available_eras;price;count_bounds;value_bounds;user_persistent;world_persistent;opposite_ability_id;constructor(...e){this.name=e[0],this.available_eras=e[1],this.value_bounds=e[2],this.count_bounds=e[3],this.user_persistent=e[4],this.world_persistent=e[5],this.opposite_ability_id=e[6],this.price=e[7]}}const Ax={1:new Ex("Возрождение",[1,2],[.99,.5],[10,200],_x),2:new Ex("Спасение",[],[.99,.5],[10,200],_x),3:new Ex("Агрессия",[],[.99,.5],[10,200],_x),4:new Ex("Истребление",[],[.7,.2],[10,100],_x),5:new Ex("Возвращение",[1,2,3],[.6,.2],[10,100]),6:new Ex("Паника",[],[.5,.1],[10,100],!1,_x,7),7:new Ex("Спокойствие",[],[.5,.1],[10,100],!1,_x,6),8:new Ex("Необратимость",[1,2],[],[],!1,_x,null,2)};function Tx(e,t){const n=t===qw,r=ux(e),o=ux(e),i={user:r,object_id:fx(e,Iw,!0),event_type:fx(e,Rw,!0),balance_delta:0};return o.id&&(i.other_user=o),n&&(i.amount=fx(e,Lw)),i.balance_delta=fx(e,jw),n&&i.event_type===Yw.ATTACK&&(i.attack=bx(e,!0)),`${function(e,t){return Object.keys(e).find((n=>e[n]===t))}(Yw,i.event_type)}`.startsWith("CLANS_")&&(i.clan_name=fx(e,Ow)),i}function Rx(e,t,n){return t+(n-t)*e}const jx={},Nx=e=>{let t=[];if(!e)return{stats:[],boosts:t};const{world:n}=dk.getState(),{era:r}=n,o=Px(10)||Ix(3);if(e?.sa?.length&&e?.sa?.map(((e,n)=>{t.push({iconSrc:jx[e.id],isStar:!0})})),e?.boosts?.length){const n=e?.boosts?.length;e?.boosts.sort(((e,t)=>e.id-t.id)),e?.boosts?.map(((e,o)=>{const i=sx?.find((t=>e.id===t.id))||{};i.available_eras&&!i.available_eras.includes(r)||t.push({iconSrc:`mbo${e.id+1}.png`,isBoost:1,isLastBoost:o===n-1,boostId:e.id})}))}let i=[{iconSrc:"game-icon",label:"a",value:Pp(e.items||0)}];if(r>1&&(i.push({iconSrc:"shield-icon",label:"b",value:Pp(e.defenders||0)}),i.push({iconSrc:"fight-icon",label:"a",value:Pp(e.attackers||0)})),o){let{eggCountActual:t}=Mx(e);i.push({iconSrc:"egg-icon",label:"b",value:t<=0?0:Pp(t)}),i.push({iconSrc:"game-icon draa",label:"b",value:Pp(e.dra||0)}),i.push({iconSrc:"game-icon soul",value:Pp(e.souls||0)})}return{stats:i,boosts:t}};function Lx(e,t){let{Item_THRESHOLDS:n=[]}=dk.getState().consts,{total_items:r,era:o}=dk.getState().world;return 1===o?Math.max(0,Math.min(1,1-r/n[2])):Math.max(0,Math.min(1,1-(r-n[2])/(n[3]-n[2])))}const Ox=(e,t)=>{const{artifacts:n}=dk.getState().world;return n?.find((n=>n.id===e&&n.owner_id===t))},Px=e=>{const{user:t}=dk.getState();return Ox(e,t.id)},Ix=e=>{const{boosts:t=[]}=dk.getState().user,n=t?.find((t=>t.id===e));if(!n)return!1;const{obtained_at:r}=n;return(r?r+9e5:0)-$p()>0};function Mx({eggs:e,eggs_updated_at:t,items:n,id:r,boosts:o}){if(!t||t<0)return{eggCountActual:0,multipleCount:1};const{era:i,current_fertility:a=0}=dk.getState().world;if(3===i)return{eggCountActual:e,multipleCount:1};const s=Ox(1,r),l=o?.find((e=>0===e.id));let c=s?2:1;if(l&&(c*=1.5),Ux(1,!0)){c*=1+Fx(1)}return a&&(c*=a),{eggCountActual:(u=new Date,d=t,p=u-d,Math.floor(p/1e3)*n/86400*c+e),multipleCount:c};var u,d,p}const $x=()=>{const{last_attack_at:e=0}=dk.getState().user;return e+1e3*function(){const{ATTACK_INTERVAL_BY_ERA:e=[]}=dk.getState().consts,{era:t}=dk.getState().world;let n=Lx();return 3==t&&(n=1-n),Rx(n,e[`${t+1}`],e[`${t}`])}()};const Dx=({last_defend_at:e=0,id:t})=>{let n=1e3*function(e){const{IMMUNITY_DURATION_BY_ERA:t=[]}=dk.getState().consts,{era:n}=dk.getState().world,r=Px(4),o=Ox(5,e);let i=Lx();3===n&&(i=1-i);let a=t[n+1],s=t[n];return o&&(a*=2,s*=2),r&&(a=Math.floor(a/2),s=Math.floor(s/2)),Rx(i,a,s)}(t);return e+n},Ux=(e,t=!1)=>{if(t)return(e=>{const{star_abilities:t}=dk.getState().user;return t?.find((t=>t.id===e))?.id})(e);const{star_abilities:n}=dk.getState().world;return n.find((t=>t.id===e))?.id},Bx=e=>{const{era:t,global_params:n}=dk.getState().world;if(void 0===t)return 0;const r=n?.[e-1]?.value||0;let o=1;if(1===e){let n=cx[e];if(3===t)return n.values[3][0];let o=n.values[t-1][0],i=Rx(1-Lx(),n.values[t-1][1],n.values[t][1]);return Rx(1/.98*(r/100-.01),o,i)}return 2===e?r/100:(3===e&&(Ux(6)?o=Fx(6,!0):Ux(7)&&(o=1/Fx(7,!0))),r*o)};function zx(e,t={}){const n=void 0===t.key?e=>e:t.key,r=void 0!==t.reverse&&t.reverse,o=e.map(((e,t)=>[n(e),t])),i=Array.isArray(o[0][0])?(e,t)=>{for(var n=0;n<Math.min(e.length,t.length);n++){const r=e[n],o=t[n],i=r==o?0:r>o?1:-1;if(0!=i)return i}return e.length-t.length}:(e,t)=>{const n=e[0],r=t[0];return n==r?0:n>r?1:-1};return o.sort(i),r&&o.reverse(),o.map((t=>e[t[1]]))}const Fx=(e,t=!1)=>{const{total_stars:n=0}=dk.getState().world;let r=Ax[`${e}`];if(!r)return 0;if(void 0===r.count_bounds[0])return 0;let o=(n-r.count_bounds[0])/(r.count_bounds[1]-r.count_bounds[0]);const i=Rx(Math.max(Math.min(o,1),0),r.value_bounds[0],r.value_bounds[1]);return t?Math.ceil(100*i):i},Vx=(e=0,t)=>e<=1e3?1:e<=1e4?e/1e3/(10/t):e<=1e5?e/1e3/(100/t/t):e<=1e6?e/1e3/(1e3/t/t/t):e<=1e7?e/1e3/(1e4/t/t/t/t):1,Wx=()=>Math.round(100*(1-Rx(Lx(),0,.5)));function Hx(e){const t=fx(e,Rw),n=[];for(let r=0;r<t;r+=1)n.push({type:fx(e,Ow),required_amount:fx(e,Lw),reward:fx(e,Lw),progress:fx(e,Lw),reward_type:fx(e,Ow)});return n}const qx=new class{accessToken=null;url=null;postUrl=null;set(e,t){"accessToken"===e&&(this[e]=t),"url"===e&&(this[e]=t)}},Kx=Vg(Wg({ready:!1,attack_success:null,dialog:null,notifyMessage:null,info:null},((e,t,n)=>({sendMessage:function(t){e({ready:!1,attack_success:t})},setDialog:function(t){e({ready:!1,dialog:t})},notify:function(t){e({notifyMessage:t})},update:(t,n)=>{e({[t]:n})}}))));const Gx=n({area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});var Yx=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function Zx(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(Gx[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(Yx),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),s=[a,""];a.indexOf("=")>-1&&(s=a.split("=")),t.attrs[s[0]]=s[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var Qx=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Xx=/^\s*$/,Jx=Object.create(null);var eS=function(e,t){t||(t={}),t.components||(t.components=Jx);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var s=e.indexOf("<");r.push({type:"text",content:-1===s?e:e.substring(0,s)})}return e.replace(Qx,(function(s,l){if(a){if(s!=="</"+n.name+">")return;a=!1}var c,u="/"!==s.charAt(1),d=s.startsWith("\x3c!--"),p=l+s.length,f=e.charAt(p);if(d){var h=Zx(s);return i<0?(r.push(h),r):((c=o[i]).children.push(h),r)}if(u&&(i++,"tag"===(n=Zx(s)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!f||"<"===f||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===i&&r.push(n),(c=o[i-1])&&c.children.push(n),o[i]=n),(!u||n.voidElement)&&(i>-1&&(n.voidElement||n.name===s.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==f&&f)){c=-1===i?r:o[i].children;var g=e.indexOf("<",p),m=e.slice(p,-1===g?void 0:g);Xx.test(m)&&(m=" "),(g>-1&&i+c.length>=0||" "!==m)&&c.push({type:"text",content:m})}})),r};const tS=(...e)=>{console?.warn&&(sS(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},nS={},rS=(...e)=>{sS(e[0])&&nS[e[0]]||(sS(e[0])&&(nS[e[0]]=new Date),tS(...e))},oS=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout((()=>{e.off("initialized",n)}),0),t()};e.on("initialized",n)}},iS=(e,t,n)=>{e.loadNamespaces(t,oS(e,n))},aS=(e,t,n,r)=>{if(sS(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return iS(e,n,r);n.forEach((t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,oS(e,r))},sS=e=>"string"==typeof e,lS=e=>"object"==typeof e&&null!==e,cS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,uS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},dS=e=>uS[e];let pS={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(cS,dS)};const fS=()=>pS;let hS;const gS=()=>hS,mS=(e,t)=>{if(!e)return!1;const n=e.props?.children??e.children;return t?n.length>0:!!n},vS=e=>{if(!e)return[];const t=e.props?.children??e.children;return e.props?.i18nIsDynamicList?bS(t):t},bS=e=>Array.isArray(e)?e:[e],yS=(e,t)=>{if(!e)return"";let n="";const r=bS(e),o=t?.transSupportBasicHtmlNodes?t.transKeepBasicHtmlNodesFor??[]:[];return r.forEach(((e,r)=>{if(sS(e))n+=`${e}`;else if(F.isValidElement(e)){const{props:i,type:a}=e,s=Object.keys(i).length,l=o.indexOf(a)>-1,c=i.children;if(c||!l||s)if(!c&&(!l||s)||i.i18nIsDynamicList)n+=`<${r}></${r}>`;else if(l&&1===s&&sS(c))n+=`<${a}>${c}</${a}>`;else{const e=yS(c,t);n+=`<${r}>${e}</${r}>`}else n+=`<${a}/>`}else if(null===e)tS("Trans: the passed in value is invalid - seems you passed in a null child.");else if(lS(e)){const{format:t,...r}=e,o=Object.keys(r);if(1===o.length){const e=t?`${o[0]}, ${t}`:o[0];n+=`{{${e}}}`}else tS("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else tS("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n},wS=(e,t,n,r,o,i)=>{if(""===t)return[];const a=r.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(a.map((e=>`<${e}`)).join("|")).test(t);if(!e&&!s&&!i)return[t];const l={},c=e=>{bS(e).forEach((e=>{sS(e)||(mS(e)?c(vS(e)):lS(e)&&!F.isValidElement(e)&&Object.assign(l,e))}))};c(e);const u=eS(`<0>${t}</0>`),d={...l,...o},p=(e,t,n)=>{const r=vS(e),o=h(r,t.children,n);return(e=>Array.isArray(e)&&e.every(F.isValidElement))(r)&&0===o.length||e.props?.i18nIsDynamicList?r:o},f=(e,t,n,r,o)=>{e.dummy?(e.children=t,n.push(F.cloneElement(e,{key:r},o?void 0:t))):n.push(...F.Children.map([e],(e=>{const n={...e.props};return delete n.i18nIsDynamicList,F.createElement(e.type,{...n,key:r,ref:e.ref},o?null:t)})))},h=(t,o,l)=>{const c=bS(t);return bS(o).reduce(((t,o,u)=>{const g=o.children?.[0]?.content&&n.services.interpolator.interpolate(o.children[0].content,d,n.language);if("tag"===o.type){let i=c[parseInt(o.name,10)];1!==l.length||i||(i=l[0][o.name]),i||(i={});const m=0!==Object.keys(o.attrs).length?((e,t)=>{const n={...t};return n.props=Object.assign(e.props,t.props),n})({props:o.attrs},i):i,v=F.isValidElement(m),b=v&&mS(o,!0)&&!o.voidElement,y=s&&lS(m)&&m.dummy&&!v,w=lS(e)&&Object.hasOwnProperty.call(e,o.name);if(sS(m)){const e=n.services.interpolator.interpolate(m,d,n.language);t.push(e)}else if(mS(m)||b){const e=p(m,o,l);f(m,e,t,u)}else if(y){const e=h(c,o.children,l);f(m,e,t,u)}else if(Number.isNaN(parseFloat(o.name)))if(w){const e=p(m,o,l);f(m,e,t,u,o.voidElement)}else if(r.transSupportBasicHtmlNodes&&a.indexOf(o.name)>-1)if(o.voidElement)t.push(F.createElement(o.name,{key:`${o.name}-${u}`}));else{const e=h(c,o.children,l);t.push(F.createElement(o.name,{key:`${o.name}-${u}`},e))}else if(o.voidElement)t.push(`<${o.name} />`);else{const e=h(c,o.children,l);t.push(`<${o.name}>${e}</${o.name}>`)}else if(lS(m)&&!v){const e=o.children[0]?g:null;e&&t.push(e)}else f(m,g,t,u,1!==o.children.length||!g)}else if("text"===o.type){const e=r.transWrapTextNodes,a=i?r.unescape(n.services.interpolator.interpolate(o.content,d,n.language)):n.services.interpolator.interpolate(o.content,d,n.language);e?t.push(F.createElement(e,{key:`${o.name}-${u}`},a)):t.push(a)}return t}),[])},g=h([{dummy:!0,children:e||[]}],u,bS(e||[]));return vS(g[0])};const xS={type:"3rdParty",init(e){((e={})=>{pS={...pS,...e}})(e.options.react),(e=>{hS=e})(e)}},SS=F.createContext();class kS{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function CS({children:e,count:t,parent:n,i18nKey:r,context:o,tOptions:i={},values:a,defaults:s,components:l,ns:c,i18n:u,t:d,shouldUnescape:p,...f}){const{i18n:h,defaultNS:g}=F.useContext(SS)||{},m=u||h||gS(),v=d||m?.t.bind(m);return function({children:e,count:t,parent:n,i18nKey:r,context:o,tOptions:i={},values:a,defaults:s,components:l,ns:c,i18n:u,t:d,shouldUnescape:p,...f}){const h=u||gS();if(!h)return rS("You will need to pass in an i18next instance by using i18nextReactModule"),e;const g=d||h.t.bind(h)||(e=>e),m={...fS(),...h.options?.react};let v=c||g.ns||h.options?.defaultNS;v=sS(v)?[v]:v||["translation"];const b=yS(e,m),y=s||b||m.transEmptyNodeValue||r,{hashTransKey:w}=m,x=r||(w?w(b||y):b||y);h.options?.interpolation?.defaultVariables&&(a=a&&Object.keys(a).length>0?{...a,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});const S=a||void 0!==t&&!h.options?.interpolation?.alwaysFormat||!e?i.interpolation:{interpolation:{...i.interpolation,prefix:"#$?",suffix:"?$#"}},k={...i,context:o||i.context,count:t,...a,...S,defaultValue:y,ns:v},C=x?g(x,k):y;l&&Object.keys(l).forEach((e=>{l[e].key||(l[e]=F.cloneElement(l[e],{key:e}));const t=l[e];"function"==typeof t.type||!t.props||!t.props.children||C.indexOf(`${e}/>`)<0&&C.indexOf(`${e} />`)<0||(l[e]=F.createElement((function(){return F.createElement(F.Fragment,null,t)})))}));const _=wS(l||e,C,h,m,k,p),E=n??m.defaultTransParent;return E?F.createElement(E,f,_):_}({children:e,count:t,parent:n,i18nKey:r,context:o,tOptions:i,values:a,defaults:s,components:l,ns:c||v?.ns||g||m?.options?.defaultNS,i18n:m,t:d,shouldUnescape:p,...f})}const _S=(e,t,n,r)=>e.getFixedT(t,n,r),ES=(e,t={})=>{const{i18n:n}=t,{i18n:r,defaultNS:o}=F.useContext(SS)||{},i=n||r||gS();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new kS),!i){rS("You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>sS(t)?t:lS(t)&&sS(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}i.options.react?.wait&&rS("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...fS(),...i.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let c=o||i.options?.defaultNS;c=sS(c)?[c]:c||["translation"],i.reportNamespaces.addUsedNamespaces?.(c);const u=(i.isInitialized||i.initializedStoreOnce)&&c.every((e=>((e,t,n={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(rS("i18n.languages were undefined or empty",t.languages),!0))(e,i,a))),d=((e,t,n,r)=>F.useCallback(_S(e,t,n,r),[e,t,n,r]))(i,t.lng||null,"fallback"===a.nsMode?c:c[0],l),p=()=>d,f=()=>_S(i,t.lng||null,"fallback"===a.nsMode?c:c[0],l),[h,g]=F.useState(p);let m=c.join();t.lng&&(m=`${t.lng}${m}`);const v=((e,t)=>{const n=F.useRef();return F.useEffect((()=>{n.current=e}),[e,t]),n.current})(m),b=F.useRef(!0);F.useEffect((()=>{const{bindI18n:e,bindI18nStore:n}=a;b.current=!0,u||s||(t.lng?aS(i,t.lng,c,(()=>{b.current&&g(f)})):iS(i,c,(()=>{b.current&&g(f)}))),u&&v&&v!==m&&b.current&&g(f);const r=()=>{b.current&&g(f)};return e&&i?.on(e,r),n&&i?.store.on(n,r),()=>{b.current=!1,i&&e?.split(" ").forEach((e=>i.off(e,r))),n&&i&&n.split(" ").forEach((e=>i.store.off(e,r)))}}),[i,m]),F.useEffect((()=>{b.current&&u&&g(p)}),[i,l,u]);const y=[h,i,u];if(y.t=h,y.i18n=i,y.ready=u,u)return y;if(!u&&!s)return y;throw new Promise((e=>{t.lng?aS(i,t.lng,c,(()=>e())):iS(i,c,(()=>e()))}))};function AS({i18n:e,defaultNS:t,children:n}){const r=F.useMemo((()=>({i18n:e,defaultNS:t})),[e,t]);return F.createElement(SS.Provider,{value:r},n)}function TS(e){return TS="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},TS(e)}function RS(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":TS(XMLHttpRequest))}const jS={},NS=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=e?.nonce||e?.getAttribute("nonce");r=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in jS)return;jS[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script"),o.crossOrigin="",o.href=e,n&&o.setAttribute("nonce",n),document.head.appendChild(o),t?new Promise(((t,n)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function o(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&o(e.reason);return e().catch(o)}))};function LS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function OS(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?LS(Object(n),!0).forEach((function(t){PS(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):LS(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function PS(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=IS(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=IS(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==IS(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IS(e){return IS="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},IS(e)}var MS,$S,DS;if("function"==typeof fetch&&(MS="undefined"!=typeof global&&global.fetch?global.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),RS()&&("undefined"!=typeof global&&global.XMLHttpRequest?$S=global.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&($S=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&("undefined"!=typeof global&&global.ActiveXObject?DS=global.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(DS=window.ActiveXObject)),"function"!=typeof MS&&(MS=void 0),!MS&&!$S&&!DS)try{MS=(await NS((async()=>{const{default:e}=await import("./browser-ponyfill-BLsxAvtw.js").then((e=>e.b));return{default:e}}),[])).default}catch(dP){}var US=function(e,t){if(t&&"object"===IS(t)){var n="";for(var r in t)n+="&"+encodeURIComponent(r)+"="+encodeURIComponent(t[r]);if(!n)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+n.slice(1)}return e},BS=function(e,t,n,r){var o=function(e){if(!e.ok)return n(e.statusText||"Error",{status:e.status});e.text().then((function(t){n(null,{status:e.status,data:t})})).catch(n)};if(r){var i=r(e,t);if(i instanceof Promise)return void i.then(o).catch(n)}"function"==typeof fetch?fetch(e,t).then(o).catch(n):MS(e,t).then(o).catch(n)},zS=!1,FS=function(e,t,n,r){return"function"==typeof n&&(r=n,n=void 0),r=r||function(){},MS&&0!==t.indexOf("file:")?function(e,t,n,r){e.queryStringParams&&(t=US(t,e.queryStringParams));var o=OS({},"function"==typeof e.customHeaders?e.customHeaders():e.customHeaders);"undefined"==typeof window&&"undefined"!=typeof global&&void 0!==global.process&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),n&&(o["Content-Type"]="application/json");var i="function"==typeof e.requestOptions?e.requestOptions(n):e.requestOptions,a=OS({method:n?"POST":"GET",body:n?e.stringify(n):void 0,headers:o},zS?{}:i),s="function"==typeof e.alternateFetch&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{BS(t,a,r,s)}catch(dP){if(!i||0===Object.keys(i).length||!dP.message||dP.message.indexOf("not implemented")<0)return r(dP);try{Object.keys(i).forEach((function(e){delete a[e]})),BS(t,a,r,s),zS=!0}catch(l){r(l)}}}(e,t,n,r):RS()||"function"==typeof ActiveXObject?function(e,t,n,r){n&&"object"===IS(n)&&(n=US("",n).slice(1)),e.queryStringParams&&(t=US(t,e.queryStringParams));try{var o=$S?new $S:new DS("MSXML2.XMLHTTP.3.0");o.open(n?"POST":"GET",t,1),e.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!e.withCredentials,n&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var i=e.customHeaders;if(i="function"==typeof i?i():i)for(var a in i)o.setRequestHeader(a,i[a]);o.onreadystatechange=function(){o.readyState>3&&r(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(n)}catch(dP){console&&console.log(dP)}}(e,t,n,r):void r(new Error("No fetch and no xhr implementation found!"))};function VS(e){return VS="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},VS(e)}function WS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function HS(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?WS(Object(n),!0).forEach((function(t){KS(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WS(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function qS(e,t,n){return t&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,GS(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function KS(e,t,n){return(t=GS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GS(e){var t=function(e,t){if("object"!=VS(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=VS(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==VS(t)?t:t+""}var YS=qS((function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}),[{key:"init",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.services=e,this.options=HS(HS(HS({},{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(e){return JSON.parse(e)},stringify:JSON.stringify,parsePayload:function(e,t,n){return KS({},t,n||"")},parseLoadPayload:function(e,t){},request:FS,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}),this.options||{}),n),this.allOptions=r,this.services&&this.options.reloadInterval){var o=setInterval((function(){return t.reload()}),this.options.reloadInterval);"object"===VS(o)&&"function"==typeof o.unref&&o.unref()}}},{key:"readMulti",value:function(e,t,n){this._readAny(e,e,t,t,n)}},{key:"read",value:function(e,t,n){this._readAny([e],e,[t],t,n)}},{key:"_readAny",value:function(e,t,n,r,o){var i,a=this,s=this.options.loadPath;"function"==typeof this.options.loadPath&&(s=this.options.loadPath(e,n)),(s=function(e){return!!e&&"function"==typeof e.then}(i=s)?i:Promise.resolve(i)).then((function(i){if(!i)return o(null,{});var s=a.services.interpolator.interpolate(i,{lng:e.join("+"),ns:n.join("+")});a.loadUrl(s,o,t,r)}))}},{key:"loadUrl",value:function(e,t,n,r){var o=this,i="string"==typeof n?[n]:n,a="string"==typeof r?[r]:r,s=this.options.parseLoadPayload(i,a);this.options.request(this.options,e,s,(function(i,a){if(a&&(a.status>=500&&a.status<600||!a.status))return t("failed loading "+e+"; status code: "+a.status,!0);if(a&&a.status>=400&&a.status<500)return t("failed loading "+e+"; status code: "+a.status,!1);if(!a&&i&&i.message){var s=i.message.toLowerCase();if(["failed","fetch","network","load"].find((function(e){return s.indexOf(e)>-1})))return t("failed loading "+e+": "+i.message,!0)}if(i)return t(i,!1);var l,c;try{l="string"==typeof a.data?o.options.parse(a.data,n,r):a.data}catch(dP){c="failed parsing "+e+" to json"}if(c)return t(c,!1);t(null,l)}))}},{key:"create",value:function(e,t,n,r,o){var i=this;if(this.options.addPath){"string"==typeof e&&(e=[e]);var a=this.options.parsePayload(t,n,r),s=0,l=[],c=[];e.forEach((function(n){var r=i.options.addPath;"function"==typeof i.options.addPath&&(r=i.options.addPath(n,t));var u=i.services.interpolator.interpolate(r,{lng:n,ns:t});i.options.request(i.options,u,a,(function(t,n){s+=1,l.push(t),c.push(n),s===e.length&&"function"==typeof o&&o(l,c)}))}))}}},{key:"reload",value:function(){var e=this,t=this.services,n=t.backendConnector,r=t.languageUtils,o=t.logger,i=n.language;if(!i||"cimode"!==i.toLowerCase()){var a=[],s=function(e){r.toResolveHierarchy(e).forEach((function(e){a.indexOf(e)<0&&a.push(e)}))};s(i),this.allOptions.preload&&this.allOptions.preload.forEach((function(e){return s(e)})),a.forEach((function(t){e.allOptions.ns.forEach((function(e){n.read(t,e,"read",null,null,(function(r,i){r&&o.warn("loading namespace ".concat(e," for language ").concat(t," failed"),r),!r&&i&&o.log("loaded namespace ".concat(e," for language ").concat(t),i),n.loaded("".concat(t,"|").concat(e),r,i)}))}))}))}}}]);YS.type="backend";var ZS=navigator.language||navigator.userLanguage;let QS=localStorage.getItem(Rp),XS=QS;function JS(e){Kx.getState().setDialog({...e,id:e.id||"test",type:e.type||100,onOk:e.onOk||!1})}!XS&&ZS.match("en")&&(XS="en"),!XS&&ZS.match("ru")&&(XS="ru"),up.use(YS).use(xS).init({lng:QS||"",fallbackLng:"en",interpolation:{escapeValue:!1},react:{useSuspense:!0},backend:{loadPath:"/locales/{{lng}}.json"}});const ek=(e,t=!1)=>{if(!t&&!e.id)return;let n=e?.language_code||e?.languageCode;e.id&&qp(e.id)&&(n="ru"),!t&&Mp()||(t||"ru"===n||"en"===n)&&n&&(jp.set(Rp,n),up.changeLanguage(n),t&&setTimeout((()=>{dk.getState().update("langChange",0)}),100))},tk=e=>{const t=document.querySelector("main");t&&(t.scrollTop=0)},nk=e=>{if(!e)return"";let t=e.first_name||e.firstName||""||e.id||"";return t&&(t+=" "),t+=`${e.last_name||e.lastName||""}`,t},rk=(e,t=!1)=>{if(t){if(jp.sGet(_p))return;jp.sSet(_p,1)}else if(!Zp(e))return;return((e,t,n,r=!1)=>{let o=`${dp(`onboard.dialog.desc${n}${t}`)}`;if(Xp("onboard.dialog",o)||n===Sp.langSelect)return()=>{JS({id:1,type:2,title:`${e}`,desc:`${o}`,okText:"",onOk:1,close:1,onBoard:1,onBoardData:{isBoard:r,title:e,item:`${n}${t}`}})}})("","",e,!0)?.(),!0};let ok=0;function ik(e,t,n,r){const o=fx(e,Rw);let i,a=o;function s(e){t(e)}ok=0;const l=n.getState().user;n.getState().world.current_fertility,n.getState().world.current_fertility_updated_at;const c=document.querySelector(".daa");let u="data-r",d=$p()-6e4;switch(o){case 4:a=$w;break;case 1:s({world:{server_time:fx(e,Lw)}});break;case 2:let t=n.getState().initDataUser;t?.id||(t=n.getState().tgUser||{}),t=gx(t);let r=xx();const g={balance:fx(e,Lw),items:fx(e,Lw),eggs:fx(e,jw),eggs_updated_at:fx(e,Lw),attackers:fx(e,Lw),defenders:fx(e,Lw),eggs_next_hatch_at:fx(e,Lw),dra:fx(e,Iw),boosts:[],star_abilities:[],...t,...r,id:Np.cc||r.id||t?.id},m=fx(e,Rw);for(let n=0;n<m;n+=1){let t=fx(e,Rw);g.boosts?.push({id:t,obtained_at:fx(e,Lw)})}g.last_attack_at=fx(e,Lw),g.last_defend_at=fx(e,Lw),g.dead=fx(e,Rw),g.stars=fx(e,Nw),g.star_abilities=function(e){let t=[],n=fx(e,Rw);for(let r=0;r<n;r+=1)t.push({id:fx(e,Rw)});return t}(e),g.souls=fx(e,Lw),g.dead_at_season=fx(e,Nw),g.final_reward=fx(e,Lw),g.final_position=fx(e,Iw),g.last_camp_tame_at=fx(e,Lw),g.bonus_sum_from_referrals=fx(e,Lw),g.bonus_dollar_sum_from_referrals=fx(e,jw),g.bonus_dollar_sum_left_to_withdraw=fx(e,jw),g.referral_bonus_percent=fx(e,Iw),g.referrals_counter=fx(e,Iw),g.clan_id=fx(e,Iw),g.ads_today_watched_counter=fx(e,Iw),g.last_watched_ad_at=fx(e,Lw),g.last_daily_check_in_at=fx(e,Lw),g.daily_check_in_streak=fx(e,Iw),g.is_first_login1=fx(e,Rw),g.last_left_clan_at=fx(e,Lw);const v=n.getState().world.era;g.items&&(Np.data.dontShowEraPopup=!0),g.dead_at_season||g.items||Np.data.dontShowEraPopup||(g.is_first_login=1,3===v&&(g.dead=1)),g.dead&&g.is_first_login,n.getState().DAILY_CHECK_IN;const b={user:g};g.banned&&(b.data={banned:!0}),g.blocked&&(b.data={blocked:!0}),s(b);break;case 54:let y=fx(e,Lw);s({items_to_subtract:y,user:{...l,items:l.items-y,catPerSec:y/10}});break;case Vw:case 114:case Hw:case qw:i="clans_top";let w=[];const x=114===o;if(o===Hw){i=`frens${n.getState().lastRefSort||"df"}`}if(o===qw&&(i="logs"),x){i="sell_stars";const t=fx(e,Rw);for(let n=0;n<t;n+=1)w.push(fx(e,Lw))}let S=[];const k=fx(e,Rw);for(let n=0;n<k;n+=1){let t={};switch(o){case Hw:t=hx(e);break;case qw:let r;o===qw&&(r=fx(e,Lw)),t=Tx(e,o),null!==r&&(t.createdAt=r);break;case Vw:t=mx(e);break;case 114:t=ux(e),t.price=w.at(n)}S.push(t)}x&&(S=Jp(S,(e=>e.id===l.id)));const C={[i]:S};o===Vw&&(C.clans_top_extend={...n.getState().clans_top_extend||{},...S.reduce(((e,t)=>({...e,[t.id]:t})),{})}),s(C);break;case Dw:case Ww:case Fw:case Uw:const _=fx(e,Rw),E=o===Dw;i="top";let A,T=!1,R=[];for(let n=0;n<_;n+=1){const t=dx(e);t.id===l.id&&(T=!0),t.boosts0=Nx(t)?.boosts,t.boostsLen=t.boosts0?.length,t.id===l.id&&(t.online=!0,t.online_at=$p()),R.push(t)}if(E){if(E&&R.length&&n.getState().top?.length){const e=(e,t)=>e.id===t.id&&(!e.boosts0?.find((e=>7===e.isArtId))&&(!!(e.items&&e.items>t.items)||(!!(e.defenders&&e.defenders>t.defenders)||(!!(e.attackers&&e.attackers>t.attackers)||(e.souls>t.souls||(!(!e.dra||!t.dra||e.dra===t.dra)||(e.star_abilities?.length!==t.star_abilities?.length||(e.boostsLen>t.boostsLen||(!!(e.last_attack_at&&e.last_attack_at>t.last_attack_at)||(e.stars!==t.stars||e.clan_id!==t.clan_id)))))))))),t=(p=R,f=n.getState().top,h=e,p.filter((e=>f.some((t=>h(e,t)))))?.map((e=>e.id)));R.map((e=>{let r=n.getState().top.find((t=>t.id===e.id));if(t.includes(e.id))e.online=!0,e.online_at=$p();else{if(r)e.online=r.online,e.online_at=r.online_at,e.boostsLen=r.boostsLen;else{let t=Nx(e)?.boosts?.length;e.boostsLen=t}e.online_at&&d>e.online_at&&(e.online=!1)}}))}A=fx(e,Iw),T&&(A=void 0);!l.dead&&Px(9)&&(T?R=Jp(R,(e=>e.id===l.id)):R.unshift({...l}))}o===Uw&&(i="random_users"),o===Fw&&(i="top_stars"),o===Ww&&(i="clan_reqs",R.sort(((e,t)=>t.items-e.items))),115===o&&(i="tasks");const j={[i]:R};E&&(j.current_user_pos=A),s(j);break;case zw:case Bw:let N="info_user";s({[N]:dx(e)});break;case 125:case 126:const L=126===o;let O="proofResult";u=L?"data-rad":"data-r";let P=fx(e,Rw);const I=fx(e,Pw);L?P?((()=>{try{AdController.show().then((e=>{Sx(JSON.stringify(e))})).catch((e=>{Sx(JSON.stringify(e))}))}catch(dP){Sx(JSON.stringify(dP))}})(),setTimeout((()=>{s({adResult:$p()})}),500)):(JS({title:dp(I),type:3,cancelText:dp("Ok")}),s({adResult:$p()})):(c&&c.setAttribute(u,`${P}-${I}`),s({[O]:P}));break;case 53:const{id:M}=l,$=ux(e);if($.id!==M){let t=ux(e);if(t?.id!==M){s({incomingAttackUserNotify:{...$,toUser:t,...bx(e)}})}else s({incomingAttackUser:{...$,toUser:t,...bx(e)},info_user:null,attack_success:null,attack_failed:null})}break;case 102:s({attack_results:yx(e),attack_results_to:yx(e)});break;case 51:s({attack_success:{target_id:fx(e,Lw),era:n.getState().world.era,...bx(e)}});break;case 52:s({attack_failed:{target_id:fx(e,Lw),reason:fx(e,Rw),era:n.getState().world.era}});break;case 3:const D={MEDIA_BASE_URL:"",VERSION:""};let U=["Item_BUY_START_PRICE","Item_BUY_ADD_PRICE","UNIT_BUY_START_PRICE","UNIT_BUY_ADD_PRICE","Item_THRESHOLDS","Item_LOSS_BY_ERA","EGG_MAX_COST_DIFFERENCE","EGG_COST_LIMITS_BY_ERA","EGG_PRICES_BY_ERA","DRA_BANK_BASE","DRA_TRANSACTION_LIMIT","DRA_BUY_BASE_PRICE","ARTIFACT_DURATION_INITIAL","ARTIFACT_DURATION_INCREMENT","ARTIFACT_PRICE_RESET_DURATION","ARTIFACT_PRICE_MULTIPLIER","ATTACK_INTERVAL_BY_ERA","ATTACK_INTERVAL_REDUCTION_BY_ERA","IMMUNITY_DURATION_BY_ERA","CAMP_TAME_FRACTION","CAMP_TAME_PRICE_RESET_DURATION","CAMP_TAME_BASE_PRICE","CAMP_TAME_PRICE_MULTIPLIER","STAR_SELL_MIN_PRICE","STAR_SELL_MAX_PRICE","STAR_SELL_FEE","CAMP_TAME_INTERVAL","MEDIA_BASE_URL","VERSION","FINAL_DRA_REWARD_MAX","SEASON_PAUSE_DURATION"],B=["","","","","long","","","int","","long","int","int","int","int","int","","int","int","int","","int","long","","long","long","","int","str","int","int","int"];for(let n=0;n<U.length;n+=1){const t=U[n];let r=px(e,B[n],t);["CAMP_TAME_PRICE_RESET_DURATION","ARTIFACT_PRICE_RESET_DURATION","CAMP_TAME_INTERVAL","SEASON_PAUSE_DURATION"].includes(t)&&r&&(r*=1e3),["ARTIFACT_DURATION_INCREMENT","ARTIFACT_DURATION_INITIAL"].includes(t)&&r&&(r/=60),D[t]=r}qx.set("url",D.MEDIA_BASE_URL),s({consts:D});break;case 134:const z=mx(e,!0,!0);i="clanPopup";s({[i]:z});break;case 110:const F=mx(e,!0);i="clan";const V={[i]:F},W=n.getState().clans_top_extend||{};let H=W[F.id]||{};V.clan_edit_result=null,V.clans_top_extend={...W,[F.id]:{...H,...F}};const{id:q,clan_id:K}=l;F.owner?.id!==q&&F.id!==K||(V.userClan=F,K||F.owner?.id!==q||(V.user={...l,clan:F,clan_id:F.id})),s(V);break;case 115:s({tasks:Hx(e)});break;case 127:case 133:case Kw:const G=133===o;o===Kw&&(i="COMPLETE_TASK"),127===o&&(i="DAILY_CHECK_IN"),G&&(i="DEL_WALLET");const Y=fx(e,Rw);let Z={[i]:Y};if(Y)G&&(Z.connectedWallet=null);else{let t=fx(e,Pw);c&&c.setAttribute(u,`${t}`)}s(Z);break;case 0:s({world_zero:{id:fx(e,Lw),user_id:fx(e,Lw),clan_id:fx(e,Iw),status:fx(e,Rw),created_at:fx(e,Lw),status_changed_at:fx(e,Lw)}});break;case 118:case 109:i="clan_edit_result";let Q={};const X=fx(e,Rw);109===o&&(i="clan_del_result",X&&(Q.user={...l,clan_id:0},Q?.userClan?.id&&(Q.clans_top=(Q.clans_top||[]).filter((e=>e.id!==Q?.userClan?.id))),Q.userClan=void 0)),Q[i]=X,s(Q);break;case 119:s({clanReqReject1:fx(e,Lw),clanReqReject:n.getState().rejectId});break;case 113:s({clanReqSuccess1:fx(e,Lw),clanReqSuccess:fx(e,Lw),clan:void 0});break;case 112:s({clanJoinSuccess:1});break;case 120:case 123:i=120===o?"walletProof":"starsUrl";const J=fx(e,Pw);s({[i]:J});break;case 122:let ee=l.id,te=fx(e,Lw),ne={removedMemberUserId:te};te===ee&&(ne.user={...l,clan_id:0},jp.sRm(mp),ne.userClan=void 0,ne.clan=void 0),s(ne);break;case 121:const re=100;let oe=[];for(let n=0;n<re;n+=1){let t=fx(e,Ow);if(!t)break;oe.push({key:t,label:"XTR"===t?"star coin":"",val:fx(e,jw)})}oe=Jp(oe,(e=>"TON"===e.key)),s({prices:oe});break;case 129:s({GET_EGGS_STOLEN_RECORD:{record:fx(e,Lw),record_owner_id:fx(e,Lw),first_name:fx(e,Ow),last_name:fx(e,Ow)}});break;case 130:const ie=fx(e,Rw);i="WITHDRAW_REFERRAL_BONUS";let ae={[i]:{success:ie}},se="";if("0"!==ie&&ie){let t=wx(e);t&&(ae.withdrawal=t)}else se=fx(e,Pw),ae[i].error=se;c&&c.setAttribute(u,`suc-${ie},err-${se}`),s(ae);break;case 131:s({connectedWallet:fx(e,Pw)||null});break;case 132:s({withdrawal:wx(e)})}var p,f,h;return a}function ak(e,t,n,r){if(ok+=1,ok>=6)return t({ready:!1}),r?.close(),void(ok=0);if(!n.getState().ready||r.readyState!==WebSocket.OPEN)return void(e.type!==Dw&&(Np.lastIssue=e));let o,i;const{type:a,page:s}=e;if(129===a&&1===n.getState().world.era&&(i=!0),a&&!i){t({page:s});try{const r=(new ce).writeByte(a);try{let o=function(e){return isNaN(+e)?0:Math.floor(e)};switch(a){case 18:case 6:case 23:r.writeLong(BigInt(o(e.target_id))),18===a&&r.writeByte(o(e.item_type)),23===a&&(r.writeLong(BigInt(o(e.price))),t({top_stars:null}));break;case 7:case 8:case 11:case 12:case 13:case 14:case 16:case 17:case 19:case 113:t({lastType:a}),113===a?r.writeLong(BigInt(o(e.id))):r.writeByte(o(e.id)),14===a&&r.writeByte(o(e.direction)),19===a&&r.writeLong(BigInt(o(e.amount)));break;case 9:case 10:case 112:case 134:case 110:r.writeInteger(o(e.intVal));break;case 121:case 123:case 21:case 1:case 4:case 5:121===a&&t({requestPricesVal:e.amount}),123===a&&r.writeDouble(o(e.df_amount)),r.writeLong(BigInt(o(e.amount)));break;case Bw:case 119:case 122:r.writeLong(BigInt(o(e.id))),119===a&&t({rejectId:e.id});break;case zw:case Vw:r.writeString(e.username);break;case 125:case Kw:r.writeLongString(e.name),t({LAST_COMPLETE_TASK:e.name});break;case 108:case 118:r.writeString(e.name),r.writeString(e.description),r.writeString(e.reward_distribution_method);break;case qw:const i=e.params?.types||[];if(t({logsTypesLast:i}),r.writeByte(i.length),i.length)for(let e=0;e<i.length;e+=1)r.writeByte(+i[e]);r.writeString(""+(e.params?.user_id||"")),r.writeLong(BigInt(e.params?.page||0)),r.writeByte(o(e.params?.limit||20));break;default:if(a===Hw){t({lastRefSort:e.params?.sort_by||"df"}),r.writeLong(BigInt(o(n.getState().user.id))),r.writeLong(BigInt(e.params?.page||1)),r.writeLong(BigInt(e.params?.limit||20)),r.writeString(e.params?.sort_by||"df")}}}catch(dP){}o=r.getBuffer()}catch(dP){}a===zw&&t({[Tw]:null});try{r.send(o)}catch(dP){}}}let sk=!1,lk=0,ck={};let uk=Op("WS_URL");const dk=Vg(Wg({ready:!1,theme:"dark",world:{total_items:0,season:0,era:void 0,bank:0,artifacts:[],boosts:[],global_params:[],boosts_locked:[],artifact_count:0,total_dra:0,total_stars:0,star_abilities:[],alive_players:0},user:{dead:0},top:null,topCount:0,attack_success:{},attack_success_user:null,attack_failed:null,attack_results:null,attack_results_to:null,clan_found:null,reconnect:0,network:-1,consts:{Item_BUY_START_PRICE:0,Item_BUY_ADD_PRICE:0,UNIT_BUY_START_PRICE:0,UNIT_BUY_ADD_PRICE:0,Item_THRESHOLDS:[],Item_LOSS_BY_ERA:[],EGG_MAX_COST_DIFFERENCE:0,EGG_COST_LIMITS_BY_ERA:[],EGG_PRICES_BY_ERA:[],DRA_BANK_BASE:0,DRA_TRANSACTION_LIMIT:0,DRA_BUY_BASE_PRICE:0,ARTIFACT_DURATION_INITIAL:0,ARTIFACT_DURATION_INCREMENT:0,ARTIFACT_PRICE_RESET_DURATION:0,ATTACK_INTERVAL_REDUCTION_BY_ERA:[],IMMUNITY_DURATION_BY_ERA:[],ATTACK_INTERVAL_BY_ERA:[],CAMP_TAME_FRACTION:0,CAMP_TAME_PRICE_RESET_DURATION:0,CAMP_TAME_BASE_PRICE:0,CAMP_TAME_PRICE_MULTIPLIER:0,STAR_SELL_MIN_PRICE:0,STAR_SELL_MAX_PRICE:0,STAR_SELL_FEE:0,MEDIA_BASE_URL:"",VERSION:0}},((e,t,n)=>{let r="",o="";const i=()=>{window.brokenSocketTestItemFarm&&(ck.openHandler=$p(),window.brokenSocketTestItemFarm=void 0),sk=!1,ck.openHandler&&($p(),ck.openHandler),ck.openHandler=$p(),e({ready:!0,network:3,reconnect:0,tgLogin:!1,connected:!0})},a=t=>{if(t.data instanceof ArrayBuffer){if(window.brokenSocketTestItemFarm)return;const r=ik(new ue(J.Buffer.from(t.data)),e,n);1===r&&(lk=0,Np.lastIssue&&(ak(Np.lastIssue,e,n,l),Np.lastIssue=null)),ck[r]=$p(),r===$w&&(e({data:{restricted:!0}}),l?.close())}},s=r=>{const o=r?.code;let i=n.getState().closeApp||n.getState().data?.restricted;if(1006===o){if(!n.getState().connected)return lk=10,l?.close(),void e({data:{maintain:!0}})}if(1013===o)return lk=10,l?.close(),void e({data:{tryLater:!0}});if(4003===o&&(i=!0,l?.close(),e({data:{blocked:!0}})),sk=!1,i)return;5===lk&&(lk+=1);const a=t().network;e({ready:!1,reconnect:lk<5?1:0,network:lk>=5?2:a<0?a:-1,tgLogin:!1})};let l;function c(e){if(sk=!0,Np.data.dontShowEraPopup=!1,"undefined"!=typeof globalWsErrorInit)return lk+=1,sk=!0,void s();l=function(e){return e=`v=10&${e}`,Np.cc&&qp(Np.cc),new WebSocket(uk+`?${e}`)}(e),l.binaryType="arraybuffer",l.addEventListener("open",i),l.addEventListener("message",a),l.addEventListener("close",s),l.addEventListener("error",(e=>{lk+=1,sk=!1}))}const u=t=>{if(t&&t.widgetUser&&t.widgetUser.close)return void l?.close();lk=0,Np.prog=0;let n={ready:!1,reconnect:1,network:-2,tgLogin:!1};t&&t.widgetUser&&t.widgetUser.try&&(n.data={},n.network=2),e(n)};window.addEventListener("focus",(function(){document.querySelector(".enter-btn")&&u()}));return{openWs:function({widgetUser:t,initData:i,isMiniApp:a,recon:s}){const u=ef();if(sk||u)return void(u&&document.body.classList.add("landscape-mode"));if(l&&l.readyState===WebSocket.OPEN)return;let d,p=xx(),f=p.sec&&p.id||Np?.cc;if(f)try{Ly.ready(),i=dv(),d=!0}catch(dP){}if(f){o=`user_id=${p.id}`;let t="widget";return Np.cc&&(o=`user_id=${Np.cc}`,qp(Np.cc)&&i?.initDataRaw&&(t="miniapp",o=i.initDataRaw)),e({isMiniApp:!0}),void c(`auth=${t}&${o}`)}const h=n.getState().tgUser;let g=o;if(t||h){t&&ek(t);let n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(t||h);return t&&e({tgUser:t,tgLogin:!0,isMiniApp:a}),c(`auth=widget&${n}`)}if(!i)try{Ly.ready(),i=dv()}catch(dP){}if(i?.initDataRaw&&(g=i.initDataRaw,r=i.startParam,r&&(uk="wss://"+r.replace(/_/g,".")),a=!0),!g)return void e({tgLogin:!0});r?.match("user_id")&&(r=""),r?.match("sys_logs")&&(r=""),a&&e({isMiniApp:!0,initDataUser:i?.initData?.user}),c(`${r?`ref=${r}&`:""}auth=miniapp&${g}`)},reconnectOn:u,data:{},sendMessage:t=>(t.type!==Dw&&ck[1],t.cc?(Np.cc=t.cc,void l?.close()):1001===t.type?(e({closeApp:1}),void l?.close()):void ak(t,e,n,l)),clearK:(n,r)=>{let o={[n]:null};if(["removedMemberUserId","clanReqReject","clanReqSuccess"].includes(n))if("removedMemberUserId"===n){let e=t().clan;if(e){let t=e.members||[];Array.isArray(t)&&t.length>0&&(t=[...t.filter((e=>e.id!==r))]),o.clan={...e,members:t}}}else{const e=t().clan_reqs;o.clan_reqs=e?.filter((e=>e.id!==r))}if("info_user"===n&&(o.targetUser=void 0,o.attack_failed=void 0,o.incomingAttackUser=void 0),"prices"===n&&1e6===r)return null;e(o)},update:(n,r)=>{"langChange"!==n?"eggs"!==n?(["restricted","banned","blocked"].includes(n)&&(r={[n]:r},n="data"),e({[n]:r})):e({user:{...t().user,[n]:r}}):e({langChange:(t().langChange||1)+1})}}}))),pk=$g.div`
    position: absolute;
    bottom: 30px;
    width: 100%;
`,fk=$g.div`
    width: 100%;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgb(0 0 0 / 24%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.6);
    background-color: rgb(0 0 0 / 34%);
    backdrop-filter: blur(9px);
`,hk=$g.div`
    width: ${e=>e.$progress}%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 220, 41, 0.74) 0%, rgba(255, 252, 109, 0.46) 100%);
    transition: width 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 5px rgba(46, 46, 46, 0.5);
    border-radius: 13px;
`,gk=$g.span`
    color: white;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`,mk=()=>{const[e,t]=F.useState(Np.prog);return F.useEffect((()=>{let e;return e=setInterval((()=>{t((t=>t>=100?(clearInterval(e),100):(Np.prog=t+1,t+1)))}),200),()=>clearInterval(e)}),[]),X.jsx(X.Fragment,{children:X.jsx(pk,{children:X.jsx("div",{style:{padding:"0 10px"},children:X.jsxs(fk,{children:[X.jsx(hk,{$progress:e}),X.jsxs(gk,{className:"progress-text",children:[Math.round(e),"%"]})]})})})})},vk=e=>Symbol.iterator in e,bk=e=>"entries"in e,yk=(e,t)=>{const n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(const[o,i]of n)if(!Object.is(i,r.get(o)))return!1;return!0};function wk(e,t){return!!Object.is(e,t)||"object"==typeof e&&null!==e&&"object"==typeof t&&null!==t&&(vk(e)&&vk(t)?bk(e)&&bk(t)?yk(e,t):((e,t)=>{const n=e[Symbol.iterator](),r=t[Symbol.iterator]();let o=n.next(),i=r.next();for(;!o.done&&!i.done;){if(!Object.is(o.value,i.value))return!1;o=n.next(),i=r.next()}return!!o.done&&!!i.done})(e,t):yk({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)}))}function xk(e){const t=V.useRef();return n=>{const r=e(n);return wk(t.current,r)?t.current:t.current=r}}const Sk=$g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`,kk=$g.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Ck=$g.button`
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,_k=()=>{const[e,t]=F.useState(!1),n=dk(xk((e=>e.ready)));F.useEffect((()=>{const e=setTimeout((()=>{t(!0)}),5e3);return()=>clearTimeout(e)}),[n]);return X.jsxs(Sk,{children:[X.jsx(kk,{children:X.jsxs("div",{className:"relative",children:[X.jsx("div",{className:"loader"}),X.jsx("div",{className:"game-icon load  center"})]})}),e&&X.jsx(Ck,{onClick:()=>{dk.getState().reconnectOn({widgetUser:{close:1}}),t(!1)},children:dp("maybe reconnect")})]})},Ek=$g.div`
    height: 70px;
    position: relative;

    .loader {
        width: 40px;
    }

    .game-icon {
        width: 20px;
    }
`,Ak=({text:e,mini:t,isPage:n=!1,enter:r=!1,firstTime:o=!1,router:i=!1})=>{const a=void 0!==dk.getState()?.world?.era,s=o,l=dk(xk((e=>e.network)));let c="";i&&(c+=" r"),n&&(c+=" isp");const u=(e=!1)=>X.jsxs("div",{className:`load-div relative ${o?" ft":""}${c}`,children:[X.jsx("div",{className:"game-name"}),e&&X.jsx(mk,{})]}),d=()=>X.jsxs(X.Fragment,{children:[s?u(-2!==l):X.jsxs(X.Fragment,{children:[r&&u(),X.jsx("div",{className:`center ${n?"isPage":""} ${r?" enter1":""}`,children:n?X.jsx(X.Fragment,{children:X.jsx(_k,{})}):X.jsx(X.Fragment,{children:!r&&!o&&X.jsxs("div",{className:"relative "+(n||a?"":"old-hide"),children:[X.jsx("div",{className:"loader"}),X.jsx("div",{className:"game-icon load  center"})]})})}),r&&1!==r&&X.jsx("div",{className:"error-text1 center1 enter",children:X.jsx("button",{className:"error-text1 center enter-btn",onClick:r,children:dp("Enter")})})]}),!!e&&X.jsx("div",{className:"nav text-purple",children:e})]});return t?X.jsx(Ek,{className:"mini-loader",children:d()}):d()},Tk=({isPage:e=!0,...t})=>X.jsx(Ak,{...t,isPage:e}),Rk=()=>X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"loader-item-fb",children:X.jsx("div",{className:"game-name"})}),X.jsx(Tk,{firstTime:!0})]}),jk=e=>{if(!e.error&&!e.txt)return X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"loader-item-fb-error"}),X.jsx(Tk,{})]});let t=e.error||{};return t+=JSON.stringify(t,Object.getOwnPropertyNames(t)),t+=e.error?.message?.toString(),t+=e.error?.stack?.toString(),X.jsx("div",{className:"welcome",children:X.jsx("div",{role:"alert",className:"center",children:X.jsxs("div",{className:"center",children:[X.jsx("div",{className:"game-icon load error"}),X.jsxs(X.Fragment,{children:[X.jsx("h3",{className:"error-text",onClick:()=>{document.querySelector(".err-txt-div")?.classList.toggle("err-txt")},children:up.t("Tech-work")}),X.jsx("div",{className:"error-text error2",children:up.t("Tech")}),X.jsx("br",{}),X.jsx("textarea",{defaultValue:`${t}`,className:"err-txt-div"})]})]})})})},Nk=F.createContext(null),Lk={didCatch:!1,error:null};let Ok=class extends F.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Lk}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(null!==e){for(var t,n,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];null===(t=(n=this.props).onReset)||void 0===t||t.call(n,{args:o,reason:"imperative-api"}),this.setState(Lk)}}componentDidCatch(e,t){var n,r;null===(n=(r=this.props).onError)||void 0===n||n.call(r,e,t)}componentDidUpdate(e,t){const{didCatch:n}=this.state,{resetKeys:r}=this.props;var o,i;n&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some(((e,n)=>!Object.is(e,t[n])))}(e.resetKeys,r)&&(null===(o=(i=this.props).onReset)||void 0===o||o.call(i,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(Lk))}render(){const{children:e,fallbackRender:t,FallbackComponent:n,fallback:r}=this.props,{didCatch:o,error:i}=this.state;let a=e;if(o){const e={error:i,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)a=t(e);else if(n)a=F.createElement(n,e);else{if(void 0===r)throw i;a=r}}return F.createElement(Nk.Provider,{value:{didCatch:o,error:i,resetErrorBoundary:this.resetErrorBoundary}},a)}};var Pk,Ik,Mk=Object.prototype.toString,$k=function(e){var t=Mk.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===Mk.call(e.callee)),n};var Dk=Array.prototype.slice,Uk=$k,Bk=Object.keys,zk=Bk?function(e){return Bk(e)}:function(){if(Ik)return Pk;var e;if(Ik=1,!Object.keys){var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=$k,o=Object.prototype.propertyIsEnumerable,i=!o.call({toString:null},"toString"),a=o.call((function(){}),"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(e){var t=e.constructor;return t&&t.prototype===e},c={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},u=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!c["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{l(window[e])}catch(dP){return!0}}catch(dP){return!0}return!1}();e=function(e){var o=null!==e&&"object"==typeof e,c="[object Function]"===n.call(e),d=r(e),p=o&&"[object String]"===n.call(e),f=[];if(!o&&!c&&!d)throw new TypeError("Object.keys called on a non-object");var h=a&&c;if(p&&e.length>0&&!t.call(e,0))for(var g=0;g<e.length;++g)f.push(String(g));if(d&&e.length>0)for(var m=0;m<e.length;++m)f.push(String(m));else for(var v in e)h&&"prototype"===v||!t.call(e,v)||f.push(String(v));if(i)for(var b=function(e){if("undefined"==typeof window||!u)return l(e);try{return l(e)}catch(dP){return!1}}(e),y=0;y<s.length;++y)b&&"constructor"===s[y]||!t.call(e,s[y])||f.push(s[y]);return f}}return Pk=e}(),Fk=Object.keys;zk.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);e||(Object.keys=function(e){return Uk(e)?Fk(Dk.call(e)):Fk(e)})}else Object.keys=zk;return Object.keys||zk};var Vk,Wk=zk,Hk=Error,qk=EvalError,Kk=RangeError,Gk=ReferenceError,Yk=SyntaxError,Zk=TypeError,Qk=URIError,Xk=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0},Jk="undefined"!=typeof Symbol&&Symbol,eC=Xk,tC=function(){return"function"==typeof Jk&&("function"==typeof Symbol&&("symbol"==typeof Jk("foo")&&("symbol"==typeof Symbol("bar")&&eC())))},nC={__proto__:null,foo:{}},rC=Object,oC=Object.prototype.toString,iC=Math.max,aC=function(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r];for(var o=0;o<t.length;o+=1)n[o+e.length]=t[o];return n},sC=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==oC.apply(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,r=function(e,t){for(var n=[],r=t,o=0;r<e.length;r+=1,o+=1)n[o]=e[r];return n}(arguments,1),o=iC(0,t.length-r.length),i=[],a=0;a<o;a++)i[a]="$"+a;if(n=Function("binder","return function ("+function(e,t){for(var n="",r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n}(i,",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof n){var o=t.apply(this,aC(r,arguments));return Object(o)===o?o:this}return t.apply(e,aC(r,arguments))})),t.prototype){var s=function(){};s.prototype=t.prototype,n.prototype=new s,s.prototype=null}return n},lC=Function.prototype.bind||sC,cC=Function.prototype.call,uC=Object.prototype.hasOwnProperty,dC=lC.call(cC,uC),pC=Hk,fC=qk,hC=Kk,gC=Gk,mC=Yk,vC=Zk,bC=Qk,yC=Function,wC=function(e){try{return yC('"use strict"; return ('+e+").constructor;")()}catch(dP){}},xC=Object.getOwnPropertyDescriptor;if(xC)try{xC({},"")}catch(dP){xC=null}var SC=function(){throw new vC},kC=xC?function(){try{return SC}catch(e){try{return xC(arguments,"callee").get}catch(t){return SC}}}():SC,CC=tC(),_C={__proto__:nC}.foo===nC.foo&&!(nC instanceof rC),EC=Object.getPrototypeOf||(_C?function(e){return e.__proto__}:null),AC={},TC="undefined"!=typeof Uint8Array&&EC?EC(Uint8Array):Vk,RC={__proto__:null,"%AggregateError%":"undefined"==typeof AggregateError?Vk:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?Vk:ArrayBuffer,"%ArrayIteratorPrototype%":CC&&EC?EC([][Symbol.iterator]()):Vk,"%AsyncFromSyncIteratorPrototype%":Vk,"%AsyncFunction%":AC,"%AsyncGenerator%":AC,"%AsyncGeneratorFunction%":AC,"%AsyncIteratorPrototype%":AC,"%Atomics%":"undefined"==typeof Atomics?Vk:Atomics,"%BigInt%":"undefined"==typeof BigInt?Vk:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?Vk:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?Vk:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?Vk:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":pC,"%eval%":eval,"%EvalError%":fC,"%Float32Array%":"undefined"==typeof Float32Array?Vk:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?Vk:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?Vk:FinalizationRegistry,"%Function%":yC,"%GeneratorFunction%":AC,"%Int8Array%":"undefined"==typeof Int8Array?Vk:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?Vk:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?Vk:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":CC&&EC?EC(EC([][Symbol.iterator]())):Vk,"%JSON%":"object"==typeof JSON?JSON:Vk,"%Map%":"undefined"==typeof Map?Vk:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&CC&&EC?EC((new Map)[Symbol.iterator]()):Vk,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?Vk:Promise,"%Proxy%":"undefined"==typeof Proxy?Vk:Proxy,"%RangeError%":hC,"%ReferenceError%":gC,"%Reflect%":"undefined"==typeof Reflect?Vk:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?Vk:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&CC&&EC?EC((new Set)[Symbol.iterator]()):Vk,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?Vk:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":CC&&EC?EC(""[Symbol.iterator]()):Vk,"%Symbol%":CC?Symbol:Vk,"%SyntaxError%":mC,"%ThrowTypeError%":kC,"%TypedArray%":TC,"%TypeError%":vC,"%Uint8Array%":"undefined"==typeof Uint8Array?Vk:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?Vk:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?Vk:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?Vk:Uint32Array,"%URIError%":bC,"%WeakMap%":"undefined"==typeof WeakMap?Vk:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?Vk:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?Vk:WeakSet};if(EC)try{null.error}catch(dP){var jC=EC(EC(dP));RC["%Error.prototype%"]=jC}var NC,LC,OC=function e(t){var n;if("%AsyncFunction%"===t)n=wC("async function () {}");else if("%GeneratorFunction%"===t)n=wC("function* () {}");else if("%AsyncGeneratorFunction%"===t)n=wC("async function* () {}");else if("%AsyncGenerator%"===t){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&EC&&(n=EC(o.prototype))}return RC[t]=n,n},PC={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},IC=lC,MC=dC,$C=IC.call(Function.call,Array.prototype.concat),DC=IC.call(Function.apply,Array.prototype.splice),UC=IC.call(Function.call,String.prototype.replace),BC=IC.call(Function.call,String.prototype.slice),zC=IC.call(Function.call,RegExp.prototype.exec),FC=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,VC=/\\(\\)?/g,WC=function(e,t){var n,r=e;if(MC(PC,r)&&(r="%"+(n=PC[r])[0]+"%"),MC(RC,r)){var o=RC[r];if(o===AC&&(o=OC(r)),void 0===o&&!t)throw new vC("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:n,name:r,value:o}}throw new mC("intrinsic "+e+" does not exist!")},HC=function(e,t){if("string"!=typeof e||0===e.length)throw new vC("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new vC('"allowMissing" argument must be a boolean');if(null===zC(/^%?[^%]*%?$/,e))throw new mC("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=function(e){var t=BC(e,0,1),n=BC(e,-1);if("%"===t&&"%"!==n)throw new mC("invalid intrinsic syntax, expected closing `%`");if("%"===n&&"%"!==t)throw new mC("invalid intrinsic syntax, expected opening `%`");var r=[];return UC(e,FC,(function(e,t,n,o){r[r.length]=n?UC(o,VC,"$1"):t||e})),r}(e),r=n.length>0?n[0]:"",o=WC("%"+r+"%",t),i=o.name,a=o.value,s=!1,l=o.alias;l&&(r=l[0],DC(n,$C([0,1],l)));for(var c=1,u=!0;c<n.length;c+=1){var d=n[c],p=BC(d,0,1),f=BC(d,-1);if(('"'===p||"'"===p||"`"===p||'"'===f||"'"===f||"`"===f)&&p!==f)throw new mC("property names with quotes must have matching quotes");if("constructor"!==d&&u||(s=!0),MC(RC,i="%"+(r+="."+d)+"%"))a=RC[i];else if(null!=a){if(!(d in a)){if(!t)throw new vC("base intrinsic for "+e+" exists, but the property is not available.");return}if(xC&&c+1>=n.length){var h=xC(a,d);a=(u=!!h)&&"get"in h&&!("originalValue"in h.get)?h.get:a[d]}else u=MC(a,d),a=a[d];u&&!s&&(RC[i]=a)}}return a};function qC(){if(LC)return NC;LC=1;var e=HC("%Object.defineProperty%",!0)||!1;if(e)try{e({},"a",{value:1})}catch(dP){e=!1}return NC=e}var KC=HC("%Object.getOwnPropertyDescriptor%",!0);if(KC)try{KC([],"length")}catch(dP){KC=null}var GC=KC,YC=qC(),ZC=Yk,QC=Zk,XC=GC,JC=function(e,t,n){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new QC("`obj` must be an object or a function`");if("string"!=typeof t&&"symbol"!=typeof t)throw new QC("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new QC("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new QC("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new QC("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new QC("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,a=arguments.length>6&&arguments[6],s=!!XC&&XC(e,t);if(YC)YC(e,t,{configurable:null===i&&s?s.configurable:!i,enumerable:null===r&&s?s.enumerable:!r,value:n,writable:null===o&&s?s.writable:!o});else{if(!a&&(r||o||i))throw new ZC("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");e[t]=n}},e_=qC(),t_=function(){return!!e_};t_.hasArrayLengthDefineBug=function(){if(!e_)return null;try{return 1!==e_([],"length",{value:1}).length}catch(dP){return!0}};var n_=t_,r_=Wk,o_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i_=Object.prototype.toString,a_=Array.prototype.concat,s_=JC,l_=n_(),c_=function(e,t,n,r){if(t in e)if(!0===r){if(e[t]===n)return}else if(!function(e){return"function"==typeof e&&"[object Function]"===i_.call(e)}(r)||!r())return;l_?s_(e,t,n,!0):s_(e,t,n)},u_=function(e,t){var n=arguments.length>2?arguments[2]:{},r=r_(t);o_&&(r=a_.call(r,Object.getOwnPropertySymbols(t)));for(var o=0;o<r.length;o+=1)c_(e,r[o],t[r[o]],n[r[o]])};u_.supportsDescriptors=!!l_;var d_=u_,p_={exports:{}},f_=HC,h_=JC,g_=n_(),m_=GC,v_=Zk,b_=f_("%Math.floor%"),y_=function(e,t){if("function"!=typeof e)throw new v_("`fn` is not a function");if("number"!=typeof t||t<0||t>4294967295||b_(t)!==t)throw new v_("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],r=!0,o=!0;if("length"in e&&m_){var i=m_(e,"length");i&&!i.configurable&&(r=!1),i&&!i.writable&&(o=!1)}return(r||o||!n)&&(g_?h_(e,"length",t,!0,!0):h_(e,"length",t)),e};!function(e){var t=lC,n=HC,r=y_,o=Zk,i=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),s=n("%Reflect.apply%",!0)||t.call(a,i),l=qC(),c=n("%Math.max%");e.exports=function(e){if("function"!=typeof e)throw new o("a function is required");var n=s(t,a,arguments);return r(n,1+c(0,e.length-(arguments.length-1)),!0)};var u=function(){return s(t,i,arguments)};l?l(e.exports,"apply",{value:u}):e.exports.apply=u}(p_);var w_,x_,S_,k_,C_,__,E_,A_,T_=p_.exports,R_=Zk,j_=Object,N_=function(e){if(null==e)throw new R_(arguments.length>0&&arguments[1]||"Cannot call method on "+e);return e};function L_(){return x_?w_:(x_=1,w_=function(e){return null===e||"function"!=typeof e&&"object"!=typeof e})}function O_(){if(k_)return S_;k_=1;var e,t,n=Function.prototype.toString,r="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof r&&"function"==typeof Object.defineProperty)try{e=Object.defineProperty({},"length",{get:function(){throw t}}),t={},r((function(){throw 42}),null,e)}catch(dh){dh!==t&&(r=null)}else r=null;var o=/^\s*class\b/,i=function(e){try{var t=n.call(e);return o.test(t)}catch(dP){return!1}},a=function(e){try{return!i(e)&&(n.call(e),!0)}catch(dP){return!1}},s=Object.prototype.toString,l="function"==typeof Symbol&&!!Symbol.toStringTag,c=!(0 in[,]),u=function(){return!1};if("object"==typeof document){var d=document.all;s.call(d)===s.call(document.all)&&(u=function(e){if((c||!e)&&(void 0===e||"object"==typeof e))try{var t=s.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t||"[object Object]"===t)&&null==e("")}catch(dP){}return!1})}return S_=r?function(n){if(u(n))return!0;if(!n)return!1;if("function"!=typeof n&&"object"!=typeof n)return!1;try{r(n,null,e)}catch(dP){if(dP!==t)return!1}return!i(n)&&a(n)}:function(e){if(u(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if(l)return a(e);if(i(e))return!1;var t=s.call(e);return!("[object Function]"!==t&&"[object GeneratorFunction]"!==t&&!/^\[object HTML/.test(t))&&a(e)},S_}function P_(){if(A_)return E_;A_=1;var e=Date.prototype.getDay,t=Object.prototype.toString,n=function(){if(__)return C_;__=1;var e=Xk;return C_=function(){return e()&&!!Symbol.toStringTag}}()();return E_=function(r){return"object"==typeof r&&null!==r&&(n?function(t){try{return e.call(t),!0}catch(dP){return!1}}(r):"[object Date]"===t.call(r))}}var I_,M_,$_,D_,U_,B_,z_,F_={exports:{}};function V_(){if(I_)return F_.exports;I_=1;var e=Object.prototype.toString;if(tC()){var t=Symbol.prototype.toString,n=/^Symbol\(.*\)$/;F_.exports=function(r){if("symbol"==typeof r)return!0;if("[object Symbol]"!==e.call(r))return!1;try{return function(e){return"symbol"==typeof e.valueOf()&&n.test(t.call(e))}(r)}catch(dP){return!1}}}else F_.exports=function(e){return!1};return F_.exports}function W_(){if($_)return M_;$_=1;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,t=L_(),n=O_(),r=P_(),o=V_();return M_=function(i){if(t(i))return i;var a,s="default";if(arguments.length>1&&(arguments[1]===String?s="string":arguments[1]===Number&&(s="number")),e&&(Symbol.toPrimitive?a=function(e,t){var r=e[t];if(null!=r){if(!n(r))throw new TypeError(r+" returned for property "+t+" of object "+e+" is not a function");return r}}(i,Symbol.toPrimitive):o(i)&&(a=Symbol.prototype.valueOf)),void 0!==a){var l=a.call(i,s);if(t(l))return l;throw new TypeError("unable to convert exotic object to primitive")}return"default"===s&&(r(i)||o(i))&&(s="string"),function(e,r){if(null==e)throw new TypeError("Cannot call method on "+e);if("string"!=typeof r||"number"!==r&&"string"!==r)throw new TypeError('hint must be "string" or "number"');var o,i,a,s="string"===r?["toString","valueOf"]:["valueOf","toString"];for(a=0;a<s.length;++a)if(o=e[s[a]],n(o)&&(i=o.call(e),t(i)))return i;throw new TypeError("No default value")}(i,"default"===s?"number":s)},M_}var H_=HC("%String%"),q_=function(){if(U_)return D_;U_=1;var e=W_();return D_=function(t){return arguments.length>1?e(t,arguments[1]):e(t)}}(),K_=function(){if(z_)return B_;z_=1;var e=HC("%String%"),t=Zk;return B_=function(n){if("symbol"==typeof n)throw new t("Cannot convert a Symbol value to a string");return e(n)}}(),G_=function(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":void 0},Y_=Zk,Z_=dC,Q_=function(e){return"string"==typeof e||"symbol"==typeof e},X_=function(e){return"symbol"==typeof e?"Symbol":"bigint"==typeof e?"BigInt":G_(e)},J_=function(e){return N_(e),j_(e)},eE=function(e){var t=q_(e,H_);return"symbol"==typeof t?t:K_(t)},tE=function(e,t){if("Object"!==X_(e))throw new Y_("Assertion failed: `O` must be an Object");if(!Q_(t))throw new Y_("Assertion failed: `P` must be a Property Key");return Z_(e,t)},nE=function(e,t){var n=J_(e),r=eE(t);return tE(n,r)},rE=nE,oE=function(){return Object.hasOwn||rE},iE=oE,aE=d_,sE=d_,lE=nE,cE=oE,uE=function(){var e=iE();return aE(Object,{hasOwn:e},{hasOwn:function(){return Object.hasOwn!==e}}),e},dE=T_(cE(),null);sE(dE,{getPolyfill:cE,implementation:lE,shim:uE});var pE=dE;const fE=({message:e})=>X.jsx(hE,{className:"toast-btn",children:X.jsx("div",{className:"child",children:e})}),hE=$g.div`
    display: flex;
    color: white;
    font-size: 12px;
    position: absolute;
    bottom: 77px;
    width: 100%;
    z-index: 9999;

    .child {
        padding: 16px;
    }
`,gE=({connect:e=!0})=>{const[t,n]=F.useState("");return F.useEffect((()=>{const t=setInterval((()=>{n((e=>e.length>=3?"":e+".")),e&&dk.getState().openWs({recon:1})}),1e3);return()=>{clearInterval(t)}}),[]),X.jsx("div",{className:"relative conn-el",children:X.jsx(fE,{message:`${dp("Connecting")}${t}`})})};const mE=({h:e,w:t,classStr:n})=>X.jsx("div",{style:{height:`${e}px`,...t?{width:t}:{}},className:n}),vE=$g.div`
    height: 100%;
`,bE=()=>{const{t:e}=ES();return X.jsxs(vE,{className:"loading-container div-column",children:[X.jsx(mE,{h:24}),X.jsx("div",{className:"game-icon landscape w-84"}),X.jsx(mE,{h:16}),X.jsx("div",{className:"f-24 text-center",children:e("Landscape")}),X.jsx(mE,{h:16})]})},yE=Ug`
    .old-hide, .icon-cont.old-hide {
        display: none;
    }

    .button, .sub-header {
        background: none;
        background-color: rgb(29, 27, 20);
    }

    .loader-item-game, .loader-item-app {
        background: url("./assets/css/load-bg.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    .conn-el {
        margin: 0 11px;
    }

    div.search-form, form.search-form, .random-container .flex {
        &.flex {
            justify-content: space-between;
        }

        &:not(.flex) {
            margin-bottom: 16px;
        }

        button {
            padding: 10px;
            background: none;
            border-radius: unset;
            background: url("./assets/css/mini-btn.png");
            background-size: 100% 100%;
            margin-bottom: 0;
        }
    }

    .input-wrapper {
        border: none !important;
        background: url("./assets/css/input-bg.png");
        background-size: 100% 100%;

        input {
            width: 100%;
            box-sizing: border-box;
            color: white;
            background: none;
            border: none !important;
            outline: none;

            &:focus, &:active, &:focus-visible {
                border: none !important;
            }
        }
    }

    .loader {
        border-color: white;
    }

    div.clan-card.klan-info-card {
        background-color: unset;
    }

    .enter-btn {
        background-image: url("./assets/css/button-2.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .hide-icon {
        display: block !important;
    }

    .header, .sub-header {
        padding: 10px 16px;
        min-width: 290px;

        &.logs {
            padding-bottom: 0;
        }
    }

    .swiper-scrollbar,
    .stars-list section:not(.star-sell-sec),
    .stars-list article,
    .stars-list button, .tasks-page .div-m {
        color: white;

        .flex {
            color: white;
        }

        .game-icon {
            background-color: white;
        }

        background: none;
    }

    .swiper-farm .swiper-scrollbar-game, .swiper-scrollbar-game {
        background: url("./assets/css/tab-line.png");
        background-size: 100% 100%;
        height: 1px;
    }

    main.main {
        padding: 0 16px;
    }

    .top-div {
        .profile-info {
            margin-top: 10px;
        }
    }

    .stars-list {
        button.add-game-btn {
            padding: 6px 9px;
        }

        @media (max-width: 375px) {
            button.add-game-btn {
                font-size: 10px;

                .title {
                    font-size: 10px;
                }
            }
        }
        @media (max-width: 320px) {
            button.add-game-btn {
                font-size: 8px;
                min-width: 80px;

                .title {
                    font-size: 8px;
                }
            }
        }
    }

    .art-bottom {
        position: absolute;
        bottom: 0;
    }

    .arts {
        .art-title {
            font-size: 14px;
            @media (max-width: 375px) {
                font-size: 12px;
            }
        }

        &:not(.rules) {
            .art-img-wrap {
                img:not(.info-img) {
                    height: 117px;
                    max-width: 100%;
                    @media (max-width: 390px) {
                        height: 90px;
                    }
                }
            }
        }

    }

    .artifact-item button.content-btn span, body {
        font-family: 'Merriweather', serif;
    }

    .upl-ava-cont {
        background-image: url("./assets/css/clan-border.png");
    }

    .record-egg {
        gap: 2px;

        .flex {
            justify-content: start;
        }

        img, .gen0 {
            width: 20px;
            height: 20px;

            .gen {
                font-size: 5px;
            }
        }
    }

    .artifact-item, .artifact-item {
        .action-text {
            font-size: 9px;
        }

        @media (max-width: 375px) {
            .action-text {
                font-size: 8px;
            }
        }
    }

    .tab-btn, .lead-name,
    .own-title {
        font-family: 'Merriweather', serif;
        @media (max-width: 375px) {
            font-size: 8px;
        }
    }

    .artifact-item .dra-price div {
        font-weight: normal;
    }

    .own-title {
        font-family: initial;
        font-family: 'Merriweather', serif;
        font-size: 8px;
        font-weight: bold;
    }

    body {
        color: white;
        min-width: 320px;
    }

    .frens-sec-info-2 {
        div, button {
            background-color: unset;
        }
    }

    .div-white, .frens-sec-info, .frens-sec-info-2 {
        color: white;

        .child {
            div {
                color: white;
            }
        }

        .game-icon {
            background: white;
        }
    }

    .logs-filters button.add-game-btn {
        margin-bottom: 4px;
    }

    .active .tab-btn, .logs button.attack.active, .logs-filters button.attack.active {
        color: #D2974F;
    }

    button.add-game-btn, div.tab-btn {
        text-transform: uppercase;
        font-family: 'Merriweather', serif;
    }

    .lead-name {
        font-size: 12px;
    }

    .p-btns {
        background-image: url("./assets/css/popup-write.png");

        &.no-id {
            background-image: url("./assets/css/popup-logs.png");
        }

        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-bottom: 16px;

        button {
            flex: initial;
            margin-bottom: 0;
            background: none !important;

            &.w-full.attack.copy {
                padding: 6px 4px;
            }
        }

        &.no-id, &.logs-only {
            button.copy {
                padding: 0 17px;
            }
        }
    }

    .frens-copy, .ton-wallet {
        button {
            max-width: 50px;
        }
    }

    .frens-copy, .logs-only {
        background: none;
        justify-content: space-around;
        background-image: url("./assets/css/frens-copy.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        button.pink.attack, div.pink {
            background: none;
        }

        button {

            &.hide-icon {
                padding: 10px;

                .game-icon {
                    width: 15px;
                }
            }
        }
    }

    .bal.section-stat {
        background: none;
        justify-content: space-around;
        background-image: url("./assets/css/bal-links.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .card-container {
            background: none;
        }
    }

    .bank-info-card {
        button:not(.star) {
            height: 55px;
        }
    }

    .bank-info-card, .atk-fight {
        button:not(.star), .btn-div {
            height: auto;
            background: none;
            border-radius: unset;
            font-size: 12px;
            height: 52px;
            background-image: url("./assets/css/header_line.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 7px;

            &:not(.info-btn) {
                padding-bottom: 12px;
            }

            font-family: 'Merriweather', serif;

            &:not([disabled]) {
                color: white;
            }

            &.attack.disabled {
                padding-bottom: 7px;
            }

            .game-icon.purple {
                background: #fff;
            }

            &.ext {
                height: 42px;
            }
        }

        &.atk-fight {
            .btn-div {
                padding: 0;
                width: auto;
            }

            button {
                padding-bottom: 7px;
            }
        }
    }

    .atk-hide {
        button.info-btn {
            background: none;
        }
    }

    div.flex.h-40 {
        height: 40px;
    }

    .center {
        .relative {
            .loader {
                border: 3px solid #F08604;
            }
        }
    }

    .game-icon.purple.load.center {
        background: linear-gradient(180deg, #8A4D02 0%, #F08604 100%);
        color: #F08604;
    }

    .second-section {
        border: none;

        &.prize {
            border: none;
        }

        background-image: url("./assets/css/header_second.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .purple-light-grad {
            background: none;
        }

        .game-icon:not(.star-sep) {
            background: var(--game-head);
        }
    }

    .bank-info-card, .stars {
        .divider {
            display: none;
        }
    }

    .stars {
        .divider {
            display: block;
            background: none;
            background-image: url("./assets/css/star-sep.png");
            background-repeat: no-repeat;
            width: 60px;
            margin-top: 4px;
            height: auto;
        }
    }

    .star-sep {
        background-image: url("./assets/css/star-sep.png");
        width: 20px;
        margin-top: 4px;

        &.dead {
            background-color: unset;
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: -8px;
        }
    }

    .bank-info-card {
        .second-section {
            margin-left: -11px;
        }

        .divider {
            display: none;
        }

        .stat-card:first-child {
            max-width: 100px;
            width: 100%;
        }

        .stat-value {
            font-size: 12px !important;
        }

        > div {
            margin-top: 4px;
        }

        button.star {
            height: auto;
            background: none;
            border-radius: unset;
            background-image: url("./assets/css/top-star-2.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 0;
            max-width: 54px;

            a {
                margin-left: -10px;
            }
        }

        @media (max-width: 360px) {
            .stat-value {
                font-size: 10px !important;
            }
        }
    }

    .swiper-wrapper {
        .pink-grad {
            background: none;
            background-image: url("./assets/css/item_card_bg.png");
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: 100% 245px;

            &.era2 {
                background-size: 100% 203px;
            }
        }
    }

    .bank-info-card {
        .egg-line, .div {
            display: none;
        }
    }

    .clan-card-div {
        .mini > div {
            color: white;
        }

        .clan-card {
            header, .clan-text {
                .flex.btn-div {
                    justify-content: start;
                }
            }
        }

        .klan-info-card {
            background: none;
            color: white;

            .atk-hide {
                margin-top: 8px;

                .btn-div {
                    padding: 0;
                }

                .game-icon {
                    mask-size: 80%;
                    -webkit-mask-size: 80%;
                }
            }

            header {
                button {
                    background-image: none;
                }
            }

            div.lead, p {
                color: white;
            }

            .game-icon {
                background: white !important;
            }
        }
    }

    .modal-center {
        button {
            font-family: 'Merriweather', serif;
        }
    }

    .modal-content, .with-ext, .clan-card-div {
        .modal-center {
            border-radius: 11px;
            border: 1px solid #737169;
            background: none;
            background-image: url("./assets/css/popup.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .form-edit {
        label:not(.text-red) {
            color: white;
        }
    }

    .swiper.main-tabs {
        width: 100%;
        height: auto;
    }

    .card-img {
        height: auto;

        img {
            background: none;
            border-radius: 0;
            aspect-ratio: 0;
        }
    }

    .tools {
        button {
            align-items: center;

            &.disabled {
                color: gray;
            }
        }
    }

    .main-balance {
        .help-div {
            background: none;
            border: none;
            border-radius: initial;
            background-image: url("./assets/css/help-bg.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    .main-balance, .slide-load-page1 {
        .balance-user, .star-prices button.add-game-btn {
            background: none;
        }

        .star-prices button.add-game-btn {
            padding: 13px 16px;
        }
    }

    .atk-fight, .balance-div, .mini, .avatar-edit-controls {
        button.green:not(.disabled),
        .dialog-ok.green,
        .av-edit,
        button.dialog-ok.pink {
            background-image: url("./assets/css/atk-btn.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            font-family: 'Merriweather', serif;

            span {
                font-family: 'Merriweather', serif;
            }
        }

        button.dialog-ok.red {
            background-image: url("./assets/css/red-btn.png");
        }

        .type5 button.dialog.cancel {
            background-image: url("./assets/css/atk-btn.png");
        }

        button.cancel.dialog, .av-edit.cancel, button.attack.ext {
            border: none;
            color: white;
            background-image: url("./assets/css/red-btn.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            span {
                font-family: 'Merriweather', serif;
            }
        }
    }

    .top-div, .popup, .us-pro, .deal-list .us-pro {
        .avatar-wrap {
            width: 64px;
            height: 64px;
            min-width: 64px;
            min-height: 64px;

            img {
                width: 64px;
                height: 64px;
                min-width: 64px;
                min-height: 64px;
            }
        }
    }

    .list-stars_historyExt {
        > div {
            padding: 10px;
            background-color: #2D2B20;
            margin-bottom: 4px;
            border-radius: 8px;

            .us {
                color: #E5B635;
            }
        }

        .game-icon {
            background-color: white;
        }
    }

    .list-frensdfExt, .list-frensusdExt {
        .flex {
            text-align: right;
            display: flex;
            justify-content: end;
        }

        .name-wrap {
            max-width: 70%;
            align-items: center;

            &.has-stars {
                max-width: 60%;
            }
        }
    }

    .list-frensusdExt {
        .v {
            .game-icon.inline {
                background-color: transparent;
            }
        }
    }

    .main-balance .balance-user.first {
        background: none;
        padding: 16px 11px;
        color: white;
        background-image: url("./assets/css/user-bal-bg.png");
        background-size: 100% 100%;
    }

    .friends-page {
        color: white !important;

        .star-pay-div {
            div.red {
                color: white !important;
                border-color: #858279;
                background: none;
            }
        }

    }

    .main-balance .star-pay-div, .friends-page .star-pay-div {
        background: none;
        background-image: url("./assets/css/bal-bg-2.png");
        background-size: 100% 100%;
    }

    .main-balance .star-pay-div, .friends-page .star-pay-div {
        .title {
            .game-icon {
                background-color: white;
            }

            background: none;
        }

        .game-icon:not(.dra-info,.starPay,.load) {
            background-color: white;
        }
    }

    section.star-sell-sec, .main-balance .balance-div, .ton-page-form, .return-era {
        &:not(.test) {
            background: none;
            background-image: url("./assets/css/star-sell-bg.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    .return-era {
        background-image: url("./assets/css/fund-bg.png");
        margin-top: 32px;
        min-height: 50px;

        .title {
            font-size: 18px;
            padding-top: 24px;
            margin-bottom: 16px;
        }

        .desc {
            .people {
                margin-top: 4px;
                margin-bottom: 4px;

                .game-icon {
                    mask-size: 80%;
                    -webkit-mask-size: 80%;
                }
            }

            padding-bottom: 22px;
        }

        .info-icon-div img {
            top: 35px;
            left: 40px;
        }
    }

    section.star-sell-sec, .main-balance .balance-div, .ton-page-form {
        min-height: 193px;

        &.ton-page-form {
            &:not(.test) {
                background-image: url("./assets/css/ton-bg.png");
                background-repeat: no-repeat;
            }

            .ton-info {
                color: white;
                text-align: center;
            }
        }

        .sell-star {

            min-height: 91px;
            flex-direction: column;

            .wrapper.input-wrapper, .wrapper {
                width: auto;
            }
        }

        .sell-info {
            max-width: 90%;
            margin: 0 auto;
        }
    }

    .search-form {
        .input-wrapper {
            width: 100%;
        }

        button {
            margin-bottom: 0;
        }
    }

    .clan-info {
        div.lead {
            color: white;
        }

        color: white;

        .game-icon {
            background-color: white;
        }
    }

    .price-text {
        color: rgba(255, 152, 88, 1);
    }

    .second-text, div.season {
        color: #9A9991;
    }

    .type-SHARE_STORY, .type-JOIN_TELEGRAM_CHANNEL {
        button {
            max-width: 120px;
        }
    }

    .main-balance {
        .balance-div, .help-div {
            button {
                text-transform: none;
            }

            .game-icon:not(.gray) {
                background-color: white;
            }
        }
    }

    .main-balance .star-prices {
        button.add-game-btn {
            border: none;

            div {
                color: white !important;
            }

            background: none;
            background-image: url("./assets/css/star-pay-btn.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    #ton-connect-button {
        margin: 0 auto;
    }

    div.dra-item.vice-item.vi5,
    div.dra-item.vice-item.vi4 {
        @media (max-width: 375px) {
            div.title {
                font-size: 12px;
            }

            div.desc {
                font-size: 8px !important;
            }

            button {
                font-size: 12px;
                max-width: 120px;
            }
        }

    }

    .daa button, .modal-overlay button, .flex button, .flex-center button,
    button.buy-btn.add-game-btn,
    button.vice-btn,
    .klan-info-card button,
    .sell-star button.green:not(.disabled),
    .sell-star button.disabled,
    .slide-load-page1 button,
    .ton-page-form button,
    #ton-connect-button.purple button,
    .atk-fight button.info-btn.cancel {
        height: 42px;
        padding: 6px 31px;
        font-size: 12px;
        text-transform: uppercase;
        border: none;

        &:not(.disabled,[disabled]) {
            color: white;
        }

        background: none;
        background-image: url("./assets/css/button-2.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        &[disabled] {
            background-image: url("./assets/css/button.png");
        }
    }

    .search-form {
        button {
            height: 40px;
        }
    }

    .btn-div {
        button.disabled {
            background: none;
        }
    }

    .div-header .second-section button {
        background: none;
    }

    .info-img {
        position: absolute;
        bottom: 0;
    }

    button.w-full, button.refresh,
    .clan-card.klan-info-card button,
    .atk-fight button.ext,
    .btn-full #ton-connect-button button {
        background: none;
        background-image: url("./assets/css/long-btn.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        &.pink-full, &.pink.balance {
            background-image: url("./assets/css/long-red-btn.png");

            &.ext {
                height: 52px;
            }
        }
    }

    .item-altar, .prog-line {
        font-size: 8px;

        &.prog-line {
            .altar-bar {
                height: 16px;
                margin-top: 8px;
            }

            .info {
                top: 2px;
            }
        }

        .altar-bar {
            background-color: #77746C;
            width: 100%;
            height: 8px;
            margin-top: 16px;
            border-radius: 5px;
        }
    }

    .item-altar {
        font-size: 14px;
    }

    .item-card, .item-card.defender, .item-altar {
        &.red-grad {
            .cataclysm-text {
                color: #EC161A;
            }
        }

        background: none;
        background-image: url("./assets/css/item_card_bg.png");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100% 146px;
        box-shadow: none;

        &.item-altar {
            background-size: 100% 241px;

            .btn-cont-2 {
                .btn-wrap {
                    width: auto;
                    flex-grow: initial;
                }
            }
        }

        &.blue-game, &.hunt, &.defender {
            img {
                background: none;
                border-radius: 0;
                aspect-ratio: 0;
            }
        }

        &.item-altar {
            background-image: url("./assets/css/altar-bg-2.png");
            background-position: bottom;
            background-repeat: no-repeat;

            .altar-btn {
                padding: 0 15px;
            }
        }

        &.with-bot {
            background-image: url("./assets/css/with-bot.png");
            background-size: 100% 273px;
        }

        &.red-grad {
            background-size: 100% 153px;
        }

        &.blue-game {
            background-size: 100% 155px;
        }

        &.item-altar, .egg-div-2 {
            button {
                min-width: 133px;
                margin-bottom: 0;
                padding: 4px;
            }

        }

        &.egg-card {
            .bot {
                min-width: 90%;

                .flex2 {
                    > div {
                        width: auto;
                        flex: initial;
                        margin-left: 20px;
                    }
                }
            }
        }

        &.egg-card, &.red-grad {
            .egg-price, .cat-div {
                font-size: 18px;

                .eggs {
                    .egg-line {
                        display: block;
                        visibility: hidden;
                    }
                }
            }
        }

        .egg-div-2 {
            padding: 0 24px;

            .dra-price {
                font-size: 10px;
                font-weight: normal;

                b {
                    font-size: 10px;
                }
            }
        }

        img {
            background: none;
            border-radius: 0;
            aspect-ratio: 0;
            object-position: 0 0px;
        }

        &.blue-game, &.hunt, &.defender {
            button {
                height: 52px;
            }
        }

        button {
            height: 42px;
            padding: 6px 31px;
            min-width: 220px;
            font-size: 12px;
            text-transform: uppercase;
            background: none;
            background-image: url("./assets/css/button-2.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            &:not([disabled]) {
                color: white;
            }

            &[disabled] {
                background-image: url("./assets/css/button.png");
            }

            &:not([disabled]).add-game-btn {
                color: white;
            }
        }

        .info-img {
            top: 100%;
            margin-top: -2px;
        }

        .border {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border-style: solid;
            border-color: #C08E23;
            border-radius: 50px 44px 35px 41px/32px 38px 46px 42px
        }

        .game-icon {
            background: none;
            background-color: white;
        }
    }

    .hunt, .defender {
        .game-count {
            font-size: 18px;
            margin-top: 30px;
        }

        button {
            &:not([disabled]) .game-icon {
                background-color: white;
            }
        }
    }

    /* BALANCE */
    .ton-page-form {
        .ton-wallet {
            button {
                width: 40px;
                padding: 0;
                border-radius: unset;
                background: url("./assets/css/mini-btn.png");
                background-size: 100% 100%;
            }
        }

        div.purple {
            border-color: #f5f2e940;
            color: white;
            background: none;
        }

        .bal-head, .prices-div {
            background: none;
            color: white;

            .game-icon.purple {
                background: none;
                background-color: white;
            }

            > div {
                background: none;
            }
        }

        color: white;

        .game-icon:not(.no-bg-color) {
            background-color: white;
        }

        .purple {
            background-color: unset;
        }
    }

    :root {
        --game-ava: 34px;
        --game-desc: #9B9A93;
    }

    .flexbox-container.only-2 {
        grid-gap: 8px;

        .title {
            font-size: 14px;
        }

        .desc {
            min-height: 20px;
        }
    }

    .game-icon.dra-info {
        background: none;
        background-image: url('./assets/css/icon/info.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        mask-image: unset;
        width: 13px;
        height: 13px;
    }

    /*ARTS */
    .arts.flexbox-container {
        grid-gap: 16px;
        @media (max-width: 320px) {
            grid-gap: 4px;
        }

        .artifact-item {
            h2, div {
                font-family: 'Merriweather', serif;
            }

            div.desc {
                font-size: 10px;
                color: var(--game-desc);
            }

            position: relative;
            background-image: url("./assets/css/art-bg-2.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            border-radius: initial;

            .info-img {
                right: 0;
                bottom: unset;
            }

            .artifact-ava2 {
                width: 100%;
                height: 42px;
                background: none;
                border-radius: initial;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-image: url("./assets/css/rebuy-art-button.png");
                border-radius: initial;
                position: absolute;
                z-index: 2;
            }

            .disabled {
                .artifact-ava2 {
                    background-image: url("./assets/css/rebuy-art-button-dis.png");
                }
            }

            .art.artifact-ava {
                background: none;
                width: 100%;
                height: var(--game-ava);
                position: relative;
                border-radius: initial;

                .gen0, img {
                    width: 100%;
                }

                .gen0, img {
                    border-radius: initial;
                    max-width: initial;
                    clip-path: polygon(72% 0, 98% 50%, 72% 100%, 0% 100%, 0 50%, 0% 0%);
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    height: 41px;
                    margin-left: 0px;
                }

                .gen {
                    border-radius: unset;
                    position: relative;
                    z-index: 1;
                    border: none;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    margin-left: -4px;
                }
            }

            div.art14 {
                min-height: 54px;
            }

            div.buy {
                min-height: 42px;
            }

            div.rebuy {
                button {
                    span {
                        font-family: initial;
                        font-family: 'Merriweather', serif;
                    }

                    min-height: 42px;
                }
            }

            div.extend {
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-image: url("./assets/css/button-2.png");
            }

            div.rebuy, div.owned.disabled {

                &.rebuy {
                    position: relative;
                    max-width: 90%;
                }

                margin-left: 0;
                height: 42px;

                .icon-cont {
                    width: 40%;
                    z-index: 1;
                }

                button {
                    padding-left: 0;
                    z-index: 99;
                }
            }

            div.own.owned:not(.extend) {
                font-size: 8px;

                .action-text {
                    font-size: 8px;
                }
            }

            div.own:not(.owned) {
                margin-left: 0;
            }

            div.owned.disabled {

                &:not(.own) {
                    position: relative;
                }

                max-width: 87%;
            }

            .art-timer {
                display: block;
                position: absolute;
                top: 21px;
                left: 15px;
                z-index: 99;
            }

            div.buy {
                button {
                    background-image: url("./assets/css/art-btn.png");
                    background-size: 98% 100%;
                    background-repeat: no-repeat;
                }
            }

            div.buy, div.extend, div.own.owned {
                .game-icon {
                    background: none;
                    background-color: white;
                }
            }

            button {
                min-height: 42px;
                background: none;
                align-items: center;
                display: flex;
                justify-content: center;

                &:not(.disabled) {
                    color: white;
                }

                .dra-price {
                    div.game-icon {
                        background: none;
                        background-color: white;
                    }
                }
            }
        }
    }

    .art-timer {
        display: flex;
        background: #1D1B14;
        border: 1px solid #858279;
        border-radius: 7px;
        padding: 2px 4px;
        font-family: initial;
        font-family: 'Merriweather', serif;
        font-size: 8px;
        text-transform: uppercase;
    }

    .dra-item .dra-item-ring.ring, .item-card.ring {
        button:not(.disabled) {
            background: none;
            border: none;
            background-image: url("./assets/css/button-2.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    .us-pro {
        .btn-div {
            font-size: 12px;
        }

        .req {
            button {
                background: none;
                border: none;
                border-radius: unset;
                background-size: 100%;
                background-repeat: no-repeat;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2px;

                &.green {
                    background-image: url("./assets/css/ok-mini-btn.png");
                }

                &.pink {
                    background-image: url("./assets/css/no-mini-btn.png");
                }
            }
        }

        section {
            .top-circle {
                background-image: url("./assets/css/ava-circle.png");
                width: 100%;
                height: 100%;
                background-size: 100%;
                background-repeat: no-repeat;
                position: absolute;
                z-index: 2;

                &.clan {
                    background-image: url("./assets/css/ava-clan.png");
                }
            }
        }

        color: white;

        .stats span {
            color: white;
        }

        .game-icon:not(.flag-icon), .stats .icon {
            background-color: white;
        }
    }

    .main-tabs {
        .game-icon.icon-img {
            background-color: unset;
        }
    }

    .div-column {
        .game-icon.icon-img {
            height: 22px;
            width: 22px;
            background-color: unset;
        }
    }

    .faq hr,
    .top-div hr,
    .top-div1 hr,
    .deal-list hr,
    .stars-list hr,
    .friends-page hr,
    .random-container .attack,
    hr.attack,
    div.hr {
        background-image: url("./assets/css/divider.png");
        border: none;
        height: 1px;
        background-size: 100%;

        &.hr {
            background-image: url("./assets/css/hr2.png");
        }
    }

    /*DRA*/
    .swiper-slide {
        .dra-cont {
            hr {
                background-image: url("./assets/css/divider.png");
                border: none;
                height: 1px;
                background-size: 100%;
            }

            .boost-item {
                button {
                    padding: 8px 12px;
                }
            }

            button {
                height: 42px;
                font-size: 12px;
                text-transform: uppercase;

                background-size: 100% 100%;
                background-repeat: no-repeat;

                &:not(.disabled) {
                    color: white;
                }

                .game-icon {
                    background: none;
                    background-color: white;
                }
            }
        }

        div.dra-first {

            button {
                background-color: initial;
                background-image: url("./assets/css/dra-plus.png");


            }

            .dra-item {
                button:last-child {
                    margin-left: -12px;
                }
            }
        }

        div.dra-boosts {
            .boost-cnt {
                button {
                    &:first-child {
                        max-width: 100%;
                        @media (min-width: 390px) {
                            max-width: 50%;
                        }
                    }
                }

                justify-content: center;
                margin-top: 0;
            }

            p {
                margin-bottom: 20px;
            }

            .lock-cnt {
                justify-content: center;
            }

            button {
                margin-bottom: 10px;
                max-width: 118px;
                font-size: 9px;
                background-color: initial;

                .dra-price {
                    font-size: 10px;
                }

                &:not(.boost-open) {
                    background-image: url("./assets/css/boost-btn.png");
                }

                &.boost-open {
                    max-width: 100%;
                    margin-bottom: 2px;
                    background-image: url(./assets/css/button-2.png);
                    @media (min-width: 390px) {
                        max-width: 80%;
                    }
                    @media (min-width: 400px) {
                        max-width: 70%;
                    }
                }

                &.flex3-1 {
                    font-size: 9px;
                    padding: 6px 21px;

                    .st {
                        font-size: 8px;
                    }

                    max-width: 80px;
                    background-color: initial;
                    border: initial;
                    background-image: url("./assets/css/boost-status.png");
                    margin-left: -16px;
                    height: 39px;
                    margin-top: 2px;
                }
            }
        }

        .dra-item:not(.boost-item) {
            max-height: 117px;
        }

        div.dra-item, div.vite-item, section.dra-item.boost-item {
            .img-wrap {
                img:not(.info-img) {
                    height: 117px;
                    clip-path: polygon(41% 1%, 100% 0%, 100% 99%, 1% 99%, 1% 9%);
                    border-radius: 10px;
                }
            }

            min-height: 117px;

            div, h3, p {
                font-family: initial;
                font-family: 'Merriweather', serif;
            }

            background: none;
            background-image: url("./assets/css/dra-bg.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            border-radius: inherit;

            p, div.desc {
                font-size: 10px;
                color: var(--game-desc);
            }
        }

        .dra-item {
            .dra-title {
                font-size: 14px;
                @media (max-width: 390px) {
                    font-size: 10px;
                }
            }
        }

        .dra-second {
            gap: 8px;

            button {
                height: 42px;
                padding: 6px 31px;
                font-size: 12px;
                text-transform: uppercase;
                background: none;
                background-image: url("./assets/css/button-2.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
        }
    }

    .list-logsExt {
        button.first.add-game-btn {
            background: none;
            width: 48px;
        }

        hr {
            background: none;
            margin-top: 0;
        }

        .flex2 {
            padding: 5px 0;
        }
    }

    .nav-link.active .ac-div, .task-div .ac-div, .logs .ac-div {
        position: absolute;
        width: 86px;
        height: 66px;
        background-image: url("./assets/css/menu-bg.png");
        background-repeat: no-repeat;
        margin-left: -18px;
        margin-top: -10px;

        &.task-icon {
            background-size: contain;
            width: 61px;
            margin: 0;
            top: 0;
        }

        &.logs-icon {
            background-size: contain;
            width: 48px;
            margin: 0;
            height: 36px;
            top: 0;
        }
    }

    .nav-link {
        &.active {
            .ac-div {
                @media (max-width: 375px) {
                    margin-left: -12px;
                    background-size: 75px;
                    margin-top: -6px;
                }
            }
        }
    }

    nav.nav {
        > section {
            background: none;
            padding-top: 7px;
        }

        .nav-link {
            max-width: 74px;
            color: #EDEBDE;
            background-size: cover;
            padding: 8px 0;
            background-position: -6px -5px;

            .game-icon, .icon {
                background: white;
                mask-size: 100%;
                -webkit-mask-size: 100%;
            }

            &.active {
                color: white;

                background-repeat: no-repeat;

                .game-icon, .icon {
                    background: var(--game-head);
                }
            }

            div, div.active {
                position: relative;
                background: none;
                padding: 0;

                &:not(.game-icon)

                @media (max-width: 350px) {
                    width: auto !important;
                }
            }

            span {
                font-family: inherit;
            }
        }
    }

    .light {
        font-weight: 300;
        font-size: 10px;
    }

    .atk-modal {
        .mini-loader {
            height: 36px;
            position: relative;

            .loader {
                width: 10px;
            }

            .game-icon {
                display: none;
                width: 5px;
            }
        }
    }

    .game-app {
        &.hi {
            .div-column-2 {
                .numbers {
                    margin-top: 8px;
                }
            }

            .item-card {
                .game-count {
                    margin-top: 24px;
                }
            }

            .item-altar {
                h2 {
                    margin-top: 18px;
                }
            }
        }

        &.fa, &.ar {
            .item-card {
                .game-count {
                    margin-top: 27px;
                }
            }

            .item-altar {
                h2 {
                    margin-top: 24px;
                }
            }
        }
    }
`,wE=()=>{if("light"!==dk(xk((e=>e.theme))))return X.jsx(yE,{})},xE=Ug`
    .landscape-warning {
        display: none;
    }
    .landscape-mode {
        .game-app, .center, .relative {
            display: none !important;
        }

        #root {
            width: 100vw;
            max-width: 100vw !important;
        }

        .landscape-warning {
            display: block;
            height: calc(100vh);
            overflow: scroll;
        }
    }
`,SE=()=>X.jsxs(X.Fragment,{children:[X.jsx(xE,{}),X.jsx(wE,{}),X.jsx("div",{className:"landscape-warning",children:X.jsx(bE,{})})]}),kE=({title:e,amount:t,icon:n,children:r,cl:o})=>X.jsxs(CE,{className:`account-balance ${o}`,children:[!!e&&X.jsx(_E,{children:e}),X.jsx(EE,{className:"ba",children:r||X.jsxs(X.Fragment,{children:[X.jsx(AE,{className:`game-icon header-icon purple ${n}`}),X.jsx(TE,{children:t})]})})]}),CE=$g.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    justify-content: center;
    width: 100%;
`,_E=$g.div`
    text-align: center;
    font-weight: 860;
    align-self: center;
    margin: 0;
    font-size: 12px;
`,EE=$g.div`
    display: flex;
    margin-top: 4px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    font-weight: 590;
`,AE=$g.div`
    aspect-ratio: 1;
    object-fit: contain;
    width: 16px;
`,TE=$g.span`
    font-weight: 590;
`
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */;function RE(){return RE=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},RE.apply(this,arguments)}var jE;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(jE||(jE={}));const NE="popstate";function LE(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=jE.Pop,l=null,c=u();null==c&&(c=0,a.replaceState(RE({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=jE.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:g.location,delta:t})}function p(e,t){s=jE.Push;let r=ME(g.location,e,t);n&&n(r,e),c=u()+1;let d=IE(r,c),p=g.createHref(r);try{a.pushState(d,"",p)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;o.location.assign(p)}i&&l&&l({action:s,location:g.location,delta:1})}function f(e,t){s=jE.Replace;let r=ME(g.location,e,t);n&&n(r,e),c=u();let o=IE(r,c),d=g.createHref(r);a.replaceState(o,"",d),i&&l&&l({action:s,location:g.location,delta:0})}function h(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:$E(e);return n=n.replace(/ $/,"%20"),OE(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let g={get action(){return s},get location(){return e(o,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(NE,d),l=e,()=>{o.removeEventListener(NE,d),l=null}},createHref:e=>t(o,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:p,replace:f,go:e=>a.go(e)};return g}((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=DE(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),ME("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:$E(t))}),(function(e,t){PE("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function OE(e,t){if(!1===e||null==e)throw new Error(t)}function PE(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(dP){}}}function IE(e,t){return{usr:e.state,key:e.key,idx:t}}function ME(e,t,n,r){return void 0===n&&(n=null),RE({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?DE(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function $E(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function DE(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var UE;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(UE||(UE={}));const BE=new Set(["lazy","caseSensitive","path","id","index","children"]);function zE(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,o)=>{let i=[...n,String(o)],a="string"==typeof e.id?e.id:i.join("-");if(OE(!0!==e.index||!e.children,"Cannot specify children on an index route"),OE(!r[a],'Found a route id collision on id "'+a+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=RE({},e,t(e),{id:a});return r[a]=n,n}{let n=RE({},e,t(e),{id:a,children:void 0});return r[a]=n,e.children&&(n.children=zE(e.children,t,i,r)),n}}))}function FE(e,t,n){return void 0===n&&(n="/"),VE(e,t,n,!1)}function VE(e,t,n,r){let o=oA(("string"==typeof t?DE(t):t).pathname||"/",n);if(null==o)return null;let i=HE(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=rA(o);a=tA(i[s],e,r)}return a}function WE(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function HE(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(OE(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=cA([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(OE(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),HE(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:eA(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of qE(e.path))o(e,t,r);else o(e,t)})),t}function qE(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=qE(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const KE=/^:[\w-]+$/,GE=3,YE=2,ZE=1,QE=10,XE=-2,JE=e=>"*"===e;function eA(e,t){let n=e.split("/"),r=n.length;return n.some(JE)&&(r+=XE),t&&(r+=YE),n.filter((e=>!JE(e))).reduce(((e,t)=>e+(KE.test(t)?GE:""===t?ZE:QE)),r)}function tA(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=nA({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=nA({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:cA([i,u.pathname]),pathnameBase:uA(cA([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=cA([i,u.pathnameBase]))}return a}function nA(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);PE("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function rA(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return PE(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function oA(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function iA(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function aA(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function sA(e,t){let n=aA(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function lA(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=DE(e):(o=RE({},e),OE(!o.pathname||!o.pathname.includes("?"),iA("?","pathname","search",o)),OE(!o.pathname||!o.pathname.includes("#"),iA("#","pathname","hash",o)),OE(!o.search||!o.search.includes("#"),iA("#","search","hash",o)));let i,a=""===e||""===o.pathname,s=a?"/":o.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?DE(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:dA(r),hash:pA(o)}}(o,i),c=s&&"/"!==s&&s.endsWith("/"),u=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const cA=e=>e.join("/").replace(/\/\/+/g,"/"),uA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dA=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",pA=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class fA{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function hA(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const gA=["post","put","patch","delete"],mA=new Set(gA),vA=["get",...gA],bA=new Set(vA),yA=new Set([301,302,303,307,308]),wA=new Set([307,308]),xA={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},SA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},kA={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},CA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_A=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),EA="remix-router-transitions";function AA(e){const t=e.window?e.window:"undefined"!=typeof window?window:void 0,n=void 0!==t&&void 0!==t.document&&void 0!==t.document.createElement,r=!n;let o;if(OE(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let t=e.detectErrorBoundary;o=e=>({hasErrorBoundary:t(e)})}else o=_A;let i,a,s,l={},c=zE(e.routes,o,void 0,l),u=e.basename||"/",d=e.dataStrategy||$A,p=e.patchRoutesOnNavigation,f=RE({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,g=new Set,m=null,v=null,b=null,y=null!=e.hydrationData,w=FE(c,e.history.location,u),x=null;if(null==w&&!p){let t=YA(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=GA(c);w=n,x={[r.id]:t}}if(w&&!e.hydrationData){fe(w,c,e.history.location.pathname).active&&(w=null)}if(w)if(w.some((e=>e.route.lazy)))a=!1;else if(w.some((e=>e.route.loader)))if(f.v7_partialHydration){let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null;if(n){let e=w.findIndex((e=>void 0!==n[e.route.id]));a=w.slice(0,e+1).every((e=>!LA(e.route,t,n)))}else a=w.every((e=>!LA(e.route,t,n)))}else a=null!=e.hydrationData;else a=!0;else if(a=!1,w=[],f.v7_partialHydration){let t=fe(null,c,e.history.location.pathname);t.active&&t.matches&&(w=t.matches)}let S,k,C={historyAction:e.history.action,location:e.history.location,matches:w,initialized:a,navigation:xA,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},_=jE.Pop,E=!1,A=!1,T=new Map,R=null,j=!1,N=!1,L=[],O=new Set,P=new Map,I=0,M=-1,$=new Map,D=new Set,U=new Map,B=new Map,z=new Set,F=new Map,V=new Map;function W(e,t){void 0===t&&(t={}),C=RE({},C,e);let n=[],r=[];f.v7_fetcherPersist&&C.fetchers.forEach(((e,t)=>{"idle"===e.state&&(z.has(t)?r.push(t):n.push(t))})),[...g].forEach((e=>e(C,{deletedFetchers:r,viewTransitionOpts:t.viewTransitionOpts,flushSync:!0===t.flushSync}))),f.v7_fetcherPersist&&(n.forEach((e=>C.fetchers.delete(e))),r.forEach((e=>te(e))))}function H(t,n,r){var o,a;let s,{flushSync:l}=void 0===r?{}:r,u=null!=C.actionData&&null!=C.navigation.formMethod&&oT(C.navigation.formMethod)&&"loading"===C.navigation.state&&!0!==(null==(o=t.state)?void 0:o._isRedirect);s=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:u?C.actionData:null;let d=n.loaderData?HA(C.loaderData,n.loaderData,n.matches||[],n.errors):C.loaderData,p=C.blockers;p.size>0&&(p=new Map(p),p.forEach(((e,t)=>p.set(t,kA))));let f,h=!0===E||null!=C.navigation.formMethod&&oT(C.navigation.formMethod)&&!0!==(null==(a=t.state)?void 0:a._isRedirect);if(i&&(c=i,i=void 0),j||_===jE.Pop||(_===jE.Push?e.history.push(t,t.state):_===jE.Replace&&e.history.replace(t,t.state)),_===jE.Pop){let e=T.get(C.location.pathname);e&&e.has(t.pathname)?f={currentLocation:C.location,nextLocation:t}:T.has(t.pathname)&&(f={currentLocation:t,nextLocation:C.location})}else if(A){let e=T.get(C.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),T.set(C.location.pathname,e)),f={currentLocation:C.location,nextLocation:t}}W(RE({},n,{actionData:s,loaderData:d,historyAction:_,location:t,initialized:!0,navigation:xA,revalidation:"idle",restoreScrollPosition:pe(t,n.matches||C.matches),preventScrollReset:h,blockers:p}),{viewTransitionOpts:f,flushSync:!0===l}),_=jE.Pop,E=!1,A=!1,j=!1,N=!1,L=[]}async function q(t,n,r){S&&S.abort(),S=null,_=t,j=!0===(r&&r.startUninterruptedRevalidation),function(e,t){if(m&&b){let n=de(e,t);m[n]=b()}}(C.location,C.matches),E=!0===(r&&r.preventScrollReset),A=!0===(r&&r.enableViewTransition);let o=i||c,a=r&&r.overrideNavigation,s=FE(o,n,u),l=!0===(r&&r.flushSync),d=fe(s,o,n.pathname);if(d.active&&d.matches&&(s=d.matches),!s){let{error:e,notFoundMatches:t,route:r}=ce(n.pathname);return void H(n,{matches:t,loaderData:{},errors:{[r.id]:e}},{flushSync:l})}if(C.initialized&&!N&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(C.location,n)&&!(r&&r.submission&&oT(r.submission.formMethod)))return void H(n,{matches:s},{flushSync:l});S=new AbortController;let p,h=zA(e.history,n,S.signal,r&&r.submission);if(r&&r.pendingError)p=[KA(s).route.id,{type:UE.error,error:r.pendingError}];else if(r&&r.submission&&oT(r.submission.formMethod)){let t=await async function(e,t,n,r,o,i){void 0===i&&(i={});Q();let a,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(t,n);if(W({navigation:s},{flushSync:!0===i.flushSync}),o){let n=await he(r,t.pathname,e.signal);if("aborted"===n.type)return{shortCircuited:!0};if("error"===n.type){let e=KA(n.partialMatches).route.id;return{matches:n.partialMatches,pendingActionResult:[e,{type:UE.error,error:n.error}]}}if(!n.matches){let{notFoundMatches:e,error:n,route:r}=ce(t.pathname);return{matches:e,pendingActionResult:[r.id,{type:UE.error,error:n}]}}r=n.matches}let l=cT(r,t);if(l.route.action||l.route.lazy){if(a=(await Y("action",C,e,[l],r,null))[l.route.id],e.signal.aborted)return{shortCircuited:!0}}else a={type:UE.error,error:YA(405,{method:e.method,pathname:t.pathname,routeId:l.route.id})};if(tT(a)){let t;if(i&&null!=i.replace)t=i.replace;else{t=BA(a.response.headers.get("Location"),new URL(e.url),u)===C.location.pathname+C.location.search}return await G(e,a,!0,{submission:n,replace:t}),{shortCircuited:!0}}if(JA(a))throw YA(400,{type:"defer-action"});if(eT(a)){let e=KA(r,l.route.id);return!0!==(i&&i.replace)&&(_=jE.Push),{matches:r,pendingActionResult:[e.route.id,a]}}return{matches:r,pendingActionResult:[l.route.id,a]}}(h,n,r.submission,s,d.active,{replace:r.replace,flushSync:l});if(t.shortCircuited)return;if(t.pendingActionResult){let[e,r]=t.pendingActionResult;if(eT(r)&&hA(r.error)&&404===r.error.status)return S=null,void H(n,{matches:t.matches,loaderData:{},errors:{[e]:r.error}})}s=t.matches||s,p=t.pendingActionResult,a=dT(n,r.submission),l=!1,d.active=!1,h=zA(e.history,h.url,h.signal)}let{shortCircuited:g,matches:v,loaderData:y,errors:w}=await async function(t,n,r,o,a,s,l,d,p,h,g){let m=a||dT(n,s),v=s||l||uT(m),b=!(j||f.v7_partialHydration&&p);if(o){if(b){let e=K(g);W(RE({navigation:m},void 0!==e?{actionData:e}:{}),{flushSync:h})}let e=await he(r,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let t=KA(e.partialMatches).route.id;return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}if(!e.matches){let{error:e,notFoundMatches:t,route:r}=ce(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=e.matches}let y=i||c,[w,x]=NA(e.history,C,r,v,n,f.v7_partialHydration&&!0===p,f.v7_skipActionErrorRevalidation,N,L,O,z,U,D,y,u,g);if(ue((e=>!(r&&r.some((t=>t.route.id===e)))||w&&w.some((t=>t.route.id===e)))),M=++I,0===w.length&&0===x.length){let e=oe();return H(n,RE({matches:r,loaderData:{},errors:g&&eT(g[1])?{[g[0]]:g[1].error}:null},qA(g),e?{fetchers:new Map(C.fetchers)}:{}),{flushSync:h}),{shortCircuited:!0}}if(b){let e={};if(!o){e.navigation=m;let t=K(g);void 0!==t&&(e.actionData=t)}x.length>0&&(e.fetchers=function(e){return e.forEach((e=>{let t=C.fetchers.get(e.key),n=pT(void 0,t?t.data:void 0);C.fetchers.set(e.key,n)})),new Map(C.fetchers)}(x)),W(e,{flushSync:h})}x.forEach((e=>{ne(e.key),e.controller&&P.set(e.key,e.controller)}));let k=()=>x.forEach((e=>ne(e.key)));S&&S.signal.addEventListener("abort",k);let{loaderResults:_,fetcherResults:E}=await Z(C,r,w,x,t);if(t.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",k);x.forEach((e=>P.delete(e.key)));let A=ZA(_);if(A)return await G(t,A.result,!0,{replace:d}),{shortCircuited:!0};if(A=ZA(E),A)return D.add(A.key),await G(t,A.result,!0,{replace:d}),{shortCircuited:!0};let{loaderData:T,errors:R}=WA(C,r,_,g,x,E,F);F.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&F.delete(t)}))})),f.v7_partialHydration&&p&&C.errors&&(R=RE({},C.errors,R));let $=oe(),B=ie(M),V=$||B||x.length>0;return RE({matches:r,loaderData:T,errors:R},V?{fetchers:new Map(C.fetchers)}:{})}(h,n,s,d.active,a,r&&r.submission,r&&r.fetcherSubmission,r&&r.replace,r&&!0===r.initialHydration,l,p);g||(S=null,H(n,RE({matches:v||s},qA(p),{loaderData:y,errors:w})))}function K(e){return e&&!eT(e[1])?{[e[0]]:e[1].data}:C.actionData?0===Object.keys(C.actionData).length?null:C.actionData:void 0}async function G(r,o,i,a){let{submission:s,fetcherSubmission:l,preventScrollReset:c,replace:d}=void 0===a?{}:a;o.response.headers.has("X-Remix-Revalidate")&&(N=!0);let p=o.response.headers.get("Location");OE(p,"Expected a Location header on the redirect Response"),p=BA(p,new URL(r.url),u);let f=ME(C.location,p,{_isRedirect:!0});if(n){let n=!1;if(o.response.headers.has("X-Remix-Reload-Document"))n=!0;else if(CA.test(p)){const r=e.history.createURL(p);n=r.origin!==t.location.origin||null==oA(r.pathname,u)}if(n)return void(d?t.location.replace(p):t.location.assign(p))}S=null;let h=!0===d||o.response.headers.has("X-Remix-Replace")?jE.Replace:jE.Push,{formMethod:g,formAction:m,formEncType:v}=C.navigation;!s&&!l&&g&&m&&v&&(s=uT(C.navigation));let b=s||l;if(wA.has(o.response.status)&&b&&oT(b.formMethod))await q(h,f,{submission:RE({},b,{formAction:p}),preventScrollReset:c||E,enableViewTransition:i?A:void 0});else{let e=dT(f,s);await q(h,f,{overrideNavigation:e,fetcherSubmission:l,preventScrollReset:c||E,enableViewTransition:i?A:void 0})}}async function Y(e,t,n,r,i,a){let s,c={};try{s=await async function(e,t,n,r,o,i,a,s,l,c){let u=i.map((e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];OE(o,"No route found in manifest");let i={};for(let a in r){let e=void 0!==o[a]&&"hasErrorBoundary"!==a;PE(!e,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+a+'" will be ignored.'),e||BE.has(a)||(i[a]=r[a])}Object.assign(o,i),Object.assign(o,RE({},t(o),{lazy:void 0}))}(e.route,l,s):void 0)),d=i.map(((e,n)=>{let i=u[n],a=o.some((t=>t.route.id===e.route.id)),s=async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(a=!0),a?async function(e,t,n,r,o,i){let a,s,l=r=>{let a,l=new Promise(((e,t)=>a=t));s=()=>a(),t.signal.addEventListener("abort",s);let c=o=>"function"!=typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:i},...void 0!==o?[o]:[]),u=(async()=>{try{return{type:"data",result:await(o?o((e=>c(e))):c())}}catch(dP){return{type:"error",result:dP}}})();return Promise.race([u,l])};try{let o=n.route[e];if(r)if(o){let e,[t]=await Promise.all([l(o).catch((t=>{e=t})),r]);if(void 0!==e)throw e;a=t}else{if(await r,o=n.route[e],!o){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw YA(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:UE.data,result:void 0}}a=await l(o)}else{if(!o){let e=new URL(t.url);throw YA(404,{pathname:e.pathname+e.search})}a=await l(o)}OE(void 0!==a.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(dP){return{type:UE.error,result:dP}}finally{s&&t.signal.removeEventListener("abort",s)}return a}(t,r,e,i,n,c):Promise.resolve({type:UE.data,result:void 0}));return RE({},e,{shouldLoad:a,resolve:s})})),p=await e({matches:d,request:r,params:i[0].params,fetcherKey:a,context:c});try{await Promise.all(u)}catch(dP){}return p}(d,e,0,n,r,i,a,l,o)}catch(dP){return r.forEach((t=>{c[t.route.id]={type:UE.error,error:dP}})),c}for(let[o,l]of Object.entries(s))if(XA(l)){let e=l.result;c[o]={type:UE.redirect,response:UA(e,n,o,i,u,f.v7_relativeSplatPath)}}else c[o]=await DA(l);return c}async function Z(t,n,r,o,i){let a=t.matches,s=Y("loader",0,i,r,n,null),l=Promise.all(o.map((async t=>{if(t.matches&&t.match&&t.controller){let n=(await Y("loader",0,zA(e.history,t.path,t.controller.signal),[t.match],t.matches,t.key))[t.match.route.id];return{[t.key]:n}}return Promise.resolve({[t.key]:{type:UE.error,error:YA(404,{pathname:t.path})}})}))),c=await s,u=(await l).reduce(((e,t)=>Object.assign(e,t)),{});return await Promise.all([iT(n,c,i.signal,a,t.loaderData),aT(n,u,o)]),{loaderResults:c,fetcherResults:u}}function Q(){N=!0,L.push(...ue()),U.forEach(((e,t)=>{P.has(t)&&O.add(t),ne(t)}))}function X(e,t,n){void 0===n&&(n={}),C.fetchers.set(e,t),W({fetchers:new Map(C.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function J(e,t,n,r){void 0===r&&(r={});let o=KA(C.matches,t);te(e),W({errors:{[o.route.id]:n},fetchers:new Map(C.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function ee(e){return f.v7_fetcherPersist&&(B.set(e,(B.get(e)||0)+1),z.has(e)&&z.delete(e)),C.fetchers.get(e)||SA}function te(e){let t=C.fetchers.get(e);!P.has(e)||t&&"loading"===t.state&&$.has(e)||ne(e),U.delete(e),$.delete(e),D.delete(e),z.delete(e),O.delete(e),C.fetchers.delete(e)}function ne(e){let t=P.get(e);t&&(t.abort(),P.delete(e))}function re(e){for(let t of e){let e=fT(ee(t).data);C.fetchers.set(t,e)}}function oe(){let e=[],t=!1;for(let n of D){let r=C.fetchers.get(n);OE(r,"Expected fetcher: "+n),"loading"===r.state&&(D.delete(n),e.push(n),t=!0)}return re(e),t}function ie(e){let t=[];for(let[n,r]of $)if(r<e){let e=C.fetchers.get(n);OE(e,"Expected fetcher: "+n),"loading"===e.state&&(ne(n),$.delete(n),t.push(n))}return re(t),t.length>0}function ae(e){C.blockers.delete(e),V.delete(e)}function se(e,t){let n=C.blockers.get(e)||kA;OE("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(C.blockers);r.set(e,t),W({blockers:r})}function le(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===V.size)return;V.size>1&&PE(!1,"A router only supports one blocker at a time");let o=Array.from(V.entries()),[i,a]=o[o.length-1],s=C.blockers.get(i);return s&&"proceeding"===s.state?void 0:a({currentLocation:t,nextLocation:n,historyAction:r})?i:void 0}function ce(e){let t=YA(404,{pathname:e}),n=i||c,{matches:r,route:o}=GA(n);return ue(),{notFoundMatches:r,route:o,error:t}}function ue(e){let t=[];return F.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),F.delete(r))})),t}function de(e,t){if(v){let n=v(e,t.map((e=>WE(e,C.loaderData))));return n||e.key}return e.key}function pe(e,t){if(m){let n=de(e,t),r=m[n];if("number"==typeof r)return r}return null}function fe(e,t,n){if(p){if(!e){return{active:!0,matches:VE(t,n,u,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:VE(t,n,u,!0)}}}return{active:!1,matches:null}}async function he(e,t,n){if(!p)return{type:"success",matches:e};let r=e;for(;;){let e=null==i,a=i||c,s=l;try{await p({path:t,matches:r,patch:(e,t)=>{n.aborted||IA(e,t,a,s,o)}})}catch(dP){return{type:"error",error:dP,partialMatches:r}}finally{e&&!n.aborted&&(c=[...c])}if(n.aborted)return{type:"aborted"};let d=FE(a,t,u);if(d)return{type:"success",matches:d};let f=VE(a,t,u,!0);if(!f||r.length===f.length&&r.every(((e,t)=>e.route.id===f[t].route.id)))return{type:"success",matches:null};r=f}}return s={get basename(){return u},get future(){return f},get state(){return C},get routes(){return c},get window(){return t},initialize:function(){if(h=e.history.listen((t=>{let{action:n,location:r,delta:o}=t;if(k)return k(),void(k=void 0);PE(0===V.size||null!=o,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=le({currentLocation:C.location,nextLocation:r,historyAction:n});if(i&&null!=o){let t=new Promise((e=>{k=e}));return e.history.go(-1*o),void se(i,{state:"blocked",location:r,proceed(){se(i,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),t.then((()=>e.history.go(o)))},reset(){let e=new Map(C.blockers);e.set(i,kA),W({blockers:e})}})}return q(n,r)})),n){!function(e,t){try{let n=e.sessionStorage.getItem(EA);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(dP){}}(t,T);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(EA,JSON.stringify(r))}catch(n){PE(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(t,T);t.addEventListener("pagehide",e),R=()=>t.removeEventListener("pagehide",e)}return C.initialized||q(jE.Pop,C.location,{initialHydration:!0}),s},subscribe:function(e){return g.add(e),()=>g.delete(e)},enableScrollRestoration:function(e,t,n){if(m=e,b=t,v=n||null,!y&&C.navigation===xA){y=!0;let e=pe(C.location,C.matches);null!=e&&W({restoreScrollPosition:e})}return()=>{m=null,b=null,v=null}},navigate:async function t(n,r){if("number"==typeof n)return void e.history.go(n);let o=TA(C.location,C.matches,u,f.v7_prependBasename,n,f.v7_relativeSplatPath,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:i,submission:a,error:s}=RA(f.v7_normalizeFormMethod,!1,o,r),l=C.location,c=ME(C.location,i,r&&r.state);c=RE({},c,e.history.encodeLocation(c));let d=r&&null!=r.replace?r.replace:void 0,p=jE.Push;!0===d?p=jE.Replace:!1===d||null!=a&&oT(a.formMethod)&&a.formAction===C.location.pathname+C.location.search&&(p=jE.Replace);let h=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,g=!0===(r&&r.flushSync),m=le({currentLocation:l,nextLocation:c,historyAction:p});if(!m)return await q(p,c,{submission:a,pendingError:s,preventScrollReset:h,replace:r&&r.replace,enableViewTransition:r&&r.viewTransition,flushSync:g});se(m,{state:"blocked",location:c,proceed(){se(m,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),t(n,r)},reset(){let e=new Map(C.blockers);e.set(m,kA),W({blockers:e})}})},fetch:function(t,n,o,a){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ne(t);let s=!0===(a&&a.flushSync),l=i||c,d=TA(C.location,C.matches,u,f.v7_prependBasename,o,f.v7_relativeSplatPath,n,null==a?void 0:a.relative),p=FE(l,d,u),h=fe(p,l,d);if(h.active&&h.matches&&(p=h.matches),!p)return void J(t,n,YA(404,{pathname:d}),{flushSync:s});let{path:g,submission:m,error:v}=RA(f.v7_normalizeFormMethod,!0,d,a);if(v)return void J(t,n,v,{flushSync:s});let b=cT(p,g),y=!0===(a&&a.preventScrollReset);m&&oT(m.formMethod)?async function(t,n,r,o,a,s,l,d,p){function h(e){if(!e.route.action&&!e.route.lazy){let e=YA(405,{method:p.formMethod,pathname:r,routeId:n});return J(t,n,e,{flushSync:l}),!0}return!1}if(Q(),U.delete(t),!s&&h(o))return;let g=C.fetchers.get(t);X(t,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(p,g),{flushSync:l});let m=new AbortController,v=zA(e.history,r,m.signal,p);if(s){let e=await he(a,r,v.signal);if("aborted"===e.type)return;if("error"===e.type)return void J(t,n,e.error,{flushSync:l});if(!e.matches)return void J(t,n,YA(404,{pathname:r}),{flushSync:l});if(h(o=cT(a=e.matches,r)))return}P.set(t,m);let b=I,y=await Y("action",C,v,[o],a,t),w=y[o.route.id];if(v.signal.aborted)return void(P.get(t)===m&&P.delete(t));if(f.v7_fetcherPersist&&z.has(t)){if(tT(w)||eT(w))return void X(t,fT(void 0))}else{if(tT(w))return P.delete(t),M>b?void X(t,fT(void 0)):(D.add(t),X(t,pT(p)),G(v,w,!1,{fetcherSubmission:p,preventScrollReset:d}));if(eT(w))return void J(t,n,w.error)}if(JA(w))throw YA(400,{type:"defer-action"});let x=C.navigation.location||C.location,k=zA(e.history,x,m.signal),E=i||c,A="idle"!==C.navigation.state?FE(E,C.navigation.location,u):C.matches;OE(A,"Didn't find any matches after fetcher action");let T=++I;$.set(t,T);let R=pT(p,w.data);C.fetchers.set(t,R);let[j,B]=NA(e.history,C,A,p,x,!1,f.v7_skipActionErrorRevalidation,N,L,O,z,U,D,E,u,[o.route.id,w]);B.filter((e=>e.key!==t)).forEach((e=>{let t=e.key,n=C.fetchers.get(t),r=pT(void 0,n?n.data:void 0);C.fetchers.set(t,r),ne(t),e.controller&&P.set(t,e.controller)})),W({fetchers:new Map(C.fetchers)});let V=()=>B.forEach((e=>ne(e.key)));m.signal.addEventListener("abort",V);let{loaderResults:q,fetcherResults:K}=await Z(C,A,j,B,k);if(m.signal.aborted)return;m.signal.removeEventListener("abort",V),$.delete(t),P.delete(t),B.forEach((e=>P.delete(e.key)));let ee=ZA(q);if(ee)return G(k,ee.result,!1,{preventScrollReset:d});if(ee=ZA(K),ee)return D.add(ee.key),G(k,ee.result,!1,{preventScrollReset:d});let{loaderData:te,errors:re}=WA(C,A,q,void 0,B,K,F);if(C.fetchers.has(t)){let e=fT(w.data);C.fetchers.set(t,e)}ie(T),"loading"===C.navigation.state&&T>M?(OE(_,"Expected pending action"),S&&S.abort(),H(C.navigation.location,{matches:A,loaderData:te,errors:re,fetchers:new Map(C.fetchers)})):(W({errors:re,loaderData:HA(C.loaderData,te,A,re),fetchers:new Map(C.fetchers)}),N=!1)}(t,n,g,b,p,h.active,s,y,m):(U.set(t,{routeId:n,path:g}),async function(t,n,r,o,i,a,s,l,c){let u=C.fetchers.get(t);X(t,pT(c,u?u.data:void 0),{flushSync:s});let d=new AbortController,p=zA(e.history,r,d.signal);if(a){let e=await he(i,r,p.signal);if("aborted"===e.type)return;if("error"===e.type)return void J(t,n,e.error,{flushSync:s});if(!e.matches)return void J(t,n,YA(404,{pathname:r}),{flushSync:s});o=cT(i=e.matches,r)}P.set(t,d);let f=I,h=await Y("loader",C,p,[o],i,t),g=h[o.route.id];JA(g)&&(g=await sT(g,p.signal,!0)||g);P.get(t)===d&&P.delete(t);if(p.signal.aborted)return;if(z.has(t))return void X(t,fT(void 0));if(tT(g))return M>f?void X(t,fT(void 0)):(D.add(t),void(await G(p,g,!1,{preventScrollReset:l})));if(eT(g))return void J(t,n,g.error);OE(!JA(g),"Unhandled fetcher deferred data"),X(t,fT(g.data))}(t,n,g,b,p,h.active,s,y,m))},revalidate:function(){Q(),W({revalidation:"loading"}),"submitting"!==C.navigation.state&&("idle"!==C.navigation.state?q(_||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation,enableViewTransition:!0===A}):q(C.historyAction,C.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:ee,deleteFetcher:function(e){if(f.v7_fetcherPersist){let t=(B.get(e)||0)-1;t<=0?(B.delete(e),z.add(e)):B.set(e,t)}else te(e);W({fetchers:new Map(C.fetchers)})},dispose:function(){h&&h(),R&&R(),g.clear(),S&&S.abort(),C.fetchers.forEach(((e,t)=>te(t))),C.blockers.forEach(((e,t)=>ae(t)))},getBlocker:function(e,t){let n=C.blockers.get(e)||kA;return V.get(e)!==t&&V.set(e,t),n},deleteBlocker:ae,patchRoutes:function(e,t){let n=null==i;IA(e,t,i||c,l,o),n&&(c=[...c],W({}))},_internalFetchControllers:P,_internalActiveDeferreds:F,_internalSetRoutes:function(e){l={},i=zE(e,o,void 0,l)}},s}function TA(e,t,n,r,o,i,a,s){let l,c;if(a){l=[];for(let e of t)if(l.push(e),e.route.id===a){c=e;break}}else l=t,c=t[t.length-1];let u=lA(o||".",sA(l,i),oA(e.pathname,n)||e.pathname,"path"===s);if(null==o&&(u.search=e.search,u.hash=e.hash),(null==o||""===o||"."===o)&&c){let e=lT(u.search);if(c.route.index&&!e)u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&e){let e=new URLSearchParams(u.search),t=e.getAll("index");e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();u.search=n?"?"+n:""}}return r&&"/"!==n&&(u.pathname="/"===u.pathname?n:cA([n,u.pathname])),$E(u)}function RA(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&(o=r.formMethod,!bA.has(o.toLowerCase())))return{path:n,error:YA(405,{method:r.formMethod})};var o;let i,a,s=()=>({path:n,error:YA(400,{type:"invalid-body"})}),l=r.formMethod||"get",c=e?l.toUpperCase():l.toLowerCase(),u=QA(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!oT(c))return s();let e="string"==typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce(((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"}),""):String(r.body);return{path:n,submission:{formMethod:c,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!oT(c))return s();try{let e="string"==typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:c,formAction:u,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(dP){return s()}}}if(OE("function"==typeof FormData,"FormData is not available in this environment"),r.formData)i=FA(r.formData),a=r.formData;else if(r.body instanceof FormData)i=FA(r.body),a=r.body;else if(r.body instanceof URLSearchParams)i=r.body,a=VA(i);else if(null==r.body)i=new URLSearchParams,a=new FormData;else try{i=new URLSearchParams(r.body),a=VA(i)}catch(dP){return s()}let d={formMethod:c,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:a,json:void 0,text:void 0};if(oT(d.formMethod))return{path:n,submission:d};let p=DE(n);return t&&p.search&&lT(p.search)&&i.append("index",""),p.search="?"+i,{path:$E(p),submission:d}}function jA(e,t,n){void 0===n&&(n=!1);let r=e.findIndex((e=>e.route.id===t));return r>=0?e.slice(0,n?r+1:r):e}function NA(e,t,n,r,o,i,a,s,l,c,u,d,p,f,h,g){let m=g?eT(g[1])?g[1].error:g[1].data:void 0,v=e.createURL(t.location),b=e.createURL(o),y=n;i&&t.errors?y=jA(n,Object.keys(t.errors)[0],!0):g&&eT(g[1])&&(y=jA(n,g[0]));let w=g?g[1].statusCode:void 0,x=a&&w&&w>=400,S=y.filter(((e,n)=>{let{route:o}=e;if(o.lazy)return!0;if(null==o.loader)return!1;if(i)return LA(o,t.loaderData,t.errors);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,o=void 0===e[n.route.id];return r||o}(t.loaderData,t.matches[n],e)||l.some((t=>t===e.route.id)))return!0;let a=t.matches[n],c=e;return PA(e,RE({currentUrl:v,currentParams:a.params,nextUrl:b,nextParams:c.params},r,{actionResult:m,actionStatus:w,defaultShouldRevalidate:!x&&(s||v.pathname+v.search===b.pathname+b.search||v.search!==b.search||OA(a,c))}))})),k=[];return d.forEach(((e,o)=>{if(i||!n.some((t=>t.route.id===e.routeId))||u.has(o))return;let a=FE(f,e.path,h);if(!a)return void k.push({key:o,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let l=t.fetchers.get(o),d=cT(a,e.path),g=!1;p.has(o)?g=!1:c.has(o)?(c.delete(o),g=!0):g=l&&"idle"!==l.state&&void 0===l.data?s:PA(d,RE({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:m,actionStatus:w,defaultShouldRevalidate:!x&&s})),g&&k.push({key:o,routeId:e.routeId,path:e.path,matches:a,match:d,controller:new AbortController})})),[S,k]}function LA(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=null!=t&&void 0!==t[e.id],o=null!=n&&void 0!==n[e.id];return!(!r&&o)&&("function"==typeof e.loader&&!0===e.loader.hydrate||!r&&!o)}function OA(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function PA(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}function IA(e,t,n,r,o){var i;let a;if(e){let t=r[e];OE(t,"No route found to patch children into: routeId = "+e),t.children||(t.children=[]),a=t.children}else a=n;let s=zE(t.filter((e=>!a.some((t=>MA(e,t))))),o,[e||"_","patch",String((null==(i=a)?void 0:i.length)||"0")],r);a.push(...s)}function MA(e,t){return"id"in e&&"id"in t&&e.id===t.id||e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive&&(!(e.children&&0!==e.children.length||t.children&&0!==t.children.length)||e.children.every(((e,n)=>{var r;return null==(r=t.children)?void 0:r.some((t=>MA(e,t)))})))}async function $A(e){let{matches:t}=e,n=t.filter((e=>e.shouldLoad)),r=await Promise.all(n.map((e=>e.resolve())));return r.reduce(((e,t,r)=>Object.assign(e,{[n[r].route.id]:t})),{})}async function DA(e){let{result:t,type:n}=e;if(rT(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(dP){return{type:UE.error,error:dP}}return n===UE.error?{type:UE.error,error:new fA(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:UE.data,data:e,statusCode:t.status,headers:t.headers}}if(n===UE.error){if(nT(t)){var r,o;if(t.data instanceof Error)return{type:UE.error,error:t.data,statusCode:null==(o=t.init)?void 0:o.status};t=new fA((null==(r=t.init)?void 0:r.status)||500,void 0,t.data)}return{type:UE.error,error:t,statusCode:hA(t)?t.status:void 0}}var i,a,s,l;return function(e){let t=e;return t&&"object"==typeof t&&"object"==typeof t.data&&"function"==typeof t.subscribe&&"function"==typeof t.cancel&&"function"==typeof t.resolveData}(t)?{type:UE.deferred,deferredData:t,statusCode:null==(i=t.init)?void 0:i.status,headers:(null==(a=t.init)?void 0:a.headers)&&new Headers(t.init.headers)}:nT(t)?{type:UE.data,data:t.data,statusCode:null==(s=t.init)?void 0:s.status,headers:null!=(l=t.init)&&l.headers?new Headers(t.init.headers):void 0}:{type:UE.data,data:t}}function UA(e,t,n,r,o,i){let a=e.headers.get("Location");if(OE(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!CA.test(a)){let s=r.slice(0,r.findIndex((e=>e.route.id===n))+1);a=TA(new URL(t.url),s,o,!0,a,i),e.headers.set("Location",a)}return e}function BA(e,t,n){if(CA.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=null!=oA(o.pathname,n);if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function zA(e,t,n,r){let o=e.createURL(QA(t)).toString(),i={signal:n};if(r&&oT(r.formMethod)){let{formMethod:e,formEncType:t}=r;i.method=e.toUpperCase(),"application/json"===t?(i.headers=new Headers({"Content-Type":t}),i.body=JSON.stringify(r.json)):"text/plain"===t?i.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?i.body=FA(r.formData):i.body=r.formData}return new Request(o,i)}function FA(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"==typeof r?r:r.name);return t}function VA(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function WA(e,t,n,r,o,i,a){let{loaderData:s,errors:l}=function(e,t,n,r){let o,i={},a=null,s=!1,l={},c=n&&eT(n[1])?n[1].error:void 0;return e.forEach((n=>{if(!(n.route.id in t))return;let u=n.route.id,d=t[u];if(OE(!tT(d),"Cannot handle redirect results in processLoaderData"),eT(d)){let t=d.error;void 0!==c&&(t=c,c=void 0),a=a||{};{let n=KA(e,u);null==a[n.route.id]&&(a[n.route.id]=t)}i[u]=void 0,s||(s=!0,o=hA(d.error)?d.error.status:500),d.headers&&(l[u]=d.headers)}else JA(d)?(r.set(u,d.deferredData),i[u]=d.deferredData.data,null==d.statusCode||200===d.statusCode||s||(o=d.statusCode),d.headers&&(l[u]=d.headers)):(i[u]=d.data,d.statusCode&&200!==d.statusCode&&!s&&(o=d.statusCode),d.headers&&(l[u]=d.headers))})),void 0!==c&&n&&(a={[n[0]]:c},i[n[0]]=void 0),{loaderData:i,errors:a,statusCode:o||200,loaderHeaders:l}}(t,n,r,a);return o.forEach((t=>{let{key:n,match:r,controller:o}=t,a=i[n];if(OE(a,"Did not find corresponding fetcher result"),!o||!o.signal.aborted)if(eT(a)){let t=KA(e.matches,null==r?void 0:r.route.id);l&&l[t.route.id]||(l=RE({},l,{[t.route.id]:a.error})),e.fetchers.delete(n)}else if(tT(a))OE(!1,"Unhandled fetcher revalidation redirect");else if(JA(a))OE(!1,"Unhandled fetcher deferred data");else{let t=fT(a.data);e.fetchers.set(n,t)}})),{loaderData:s,errors:l}}function HA(e,t,n,r){let o=RE({},t);for(let i of n){let n=i.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(o[n]=t[n]):void 0!==e[n]&&i.route.loader&&(o[n]=e[n]),r&&r.hasOwnProperty(n))break}return o}function qA(e){return e?eT(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function KA(e,t){let n=t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e];return n.reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function GA(e){let t=1===e.length?e[0]:e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function YA(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=void 0===t?{}:t,s="Unknown Server Error",l="Unknown @remix-run/router error";return 400===e?(s="Bad Request",o&&n&&r?l="You made a "+o+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===i?l="defer() is not supported in actions":"invalid-body"===i&&(l="Unable to encode submission body")):403===e?(s="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):404===e?(s="Not Found",l='No route matches URL "'+n+'"'):405===e&&(s="Method Not Allowed",o&&n&&r?l="You made a "+o.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new fA(e||500,s,new Error(l),!0)}function ZA(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(tT(r))return{key:e,result:r}}}function QA(e){return $E(RE({},"string"==typeof e?DE(e):e,{hash:""}))}function XA(e){return rT(e.result)&&yA.has(e.result.status)}function JA(e){return e.type===UE.deferred}function eT(e){return e.type===UE.error}function tT(e){return(e&&e.type)===UE.redirect}function nT(e){return"object"==typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function rT(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"object"==typeof e.headers&&void 0!==e.body}function oT(e){return mA.has(e.toLowerCase())}async function iT(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[s,l]=i[a],c=e.find((e=>(null==e?void 0:e.route.id)===s));if(!c)continue;let u=r.find((e=>e.route.id===c.route.id)),d=null!=u&&!OA(u,c)&&void 0!==(o&&o[c.route.id]);JA(l)&&d&&await sT(l,n,!1).then((e=>{e&&(t[s]=e)}))}}async function aT(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],s=t[o],l=e.find((e=>(null==e?void 0:e.route.id)===i));l&&(JA(s)&&(OE(a,"Expected an AbortController for revalidating fetcher deferred result"),await sT(s,a.signal,!0).then((e=>{e&&(t[o]=e)}))))}}async function sT(e,t,n){if(void 0===n&&(n=!1),!(await e.deferredData.resolveData(t))){if(n)try{return{type:UE.data,data:e.deferredData.unwrappedData}}catch(dP){return{type:UE.error,error:dP}}return{type:UE.data,data:e.deferredData.data}}}function lT(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function cT(e,t){let n="string"==typeof t?DE(t).search:t.search;if(e[e.length-1].route.index&&lT(n||""))return e[e.length-1];let r=aA(e);return r[r.length-1]}function uT(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(t&&n&&r)return null!=o?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o}:null!=i?{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0}:void 0!==a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}:void 0}function dT(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function pT(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function fT(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function hT(){return hT=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hT.apply(this,arguments)}const gT=F.createContext(null),mT=F.createContext(null),vT=F.createContext(null),bT=F.createContext(null),yT=F.createContext({outlet:null,matches:[],isDataRoute:!1}),wT=F.createContext(null);function xT(){return null!=F.useContext(bT)}function ST(){return xT()||OE(!1),F.useContext(bT).location}function kT(e){F.useContext(vT).static||F.useLayoutEffect(e)}function CT(){let{isDataRoute:e}=F.useContext(yT);return e?function(){let{router:e}=function(){let e=F.useContext(gT);return e||OE(!1),e}(LT.UseNavigateStable),t=IT(OT.UseNavigateStable),n=F.useRef(!1);kT((()=>{n.current=!0}));let r=F.useCallback((function(r,o){void 0===o&&(o={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,hT({fromRouteId:t},o)))}),[e,t]);return r}():function(){xT()||OE(!1);let e=F.useContext(gT),{basename:t,future:n,navigator:r}=F.useContext(vT),{matches:o}=F.useContext(yT),{pathname:i}=ST(),a=JSON.stringify(sA(o,n.v7_relativeSplatPath)),s=F.useRef(!1);kT((()=>{s.current=!0}));let l=F.useCallback((function(n,o){if(void 0===o&&(o={}),!s.current)return;if("number"==typeof n)return void r.go(n);let l=lA(n,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:cA([t,l.pathname])),(o.replace?r.replace:r.push)(l,o.state,o)}),[t,r,a,i,e]);return l}()}const _T=F.createContext(null);function ET(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=F.useContext(vT),{matches:o}=F.useContext(yT),{pathname:i}=ST(),a=JSON.stringify(sA(o,r.v7_relativeSplatPath));return F.useMemo((()=>lA(e,JSON.parse(a),i,"path"===n)),[e,a,i,n])}function AT(e,t,n,r){xT()||OE(!1);let{navigator:o}=F.useContext(vT),{matches:i}=F.useContext(yT),a=i[i.length-1],s=a?a.params:{};!a||a.pathname;let l,c=a?a.pathnameBase:"/";a&&a.route,l=ST();let u=l.pathname||"/",d=u;if("/"!==c){let e=c.replace(/^\//,"").split("/");d="/"+u.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=FE(e,{pathname:d}),f=function(e,t,n,r){var o;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=r)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let a=e,s=null==(o=n)?void 0:o.errors;if(null!=s){let e=a.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||OE(!1),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let e=a[u];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(c=u),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){l=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight(((e,r,o)=>{let i,u=!1,d=null,p=null;n&&(i=s&&r.route.id?s[r.route.id]:void 0,d=r.route.errorElement||RT,l&&(c<0&&0===o?(u=!0,p=null):c===o&&(u=!0,p=r.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,o+1)),h=()=>{let t;return t=i?d:u?p:r.route.Component?F.createElement(r.route.Component,null):r.route.element?r.route.element:e,F.createElement(NT,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?F.createElement(jT,{location:n.location,revalidation:n.revalidation,component:d,error:i,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:cA([c,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:cA([c,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n,r);return f}function TT(){let e=MT(),t=hA(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},t),n?F.createElement("pre",{style:r},n):null,null)}const RT=F.createElement(TT,null);class jT extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?F.createElement(yT.Provider,{value:this.props.routeContext},F.createElement(wT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NT(e){let{routeContext:t,match:n,children:r}=e,o=F.useContext(gT);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(yT.Provider,{value:t},r)}var LT=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(LT||{}),OT=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(OT||{});function PT(e){let t=F.useContext(mT);return t||OE(!1),t}function IT(e){let t=function(){let e=F.useContext(yT);return e||OE(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||OE(!1),n.route.id}function MT(){var e;let t=F.useContext(wT),n=PT(OT.UseRouteError),r=IT(OT.UseRouteError);return void 0!==t?t:null==(e=n.errors)?void 0:e[r]}const $T={};const DT=(e,t,n)=>{var r;$T[r="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||($T[r]=!0,console.warn(r))};function UT(e){return function(e){let t=F.useContext(yT).outlet;return t?F.createElement(_T.Provider,{value:e},t):t}(e.context)}function BT(e){let{basename:t="/",children:n=null,location:r,navigationType:o=jE.Pop,navigator:i,static:a=!1,future:s}=e;xT()&&OE(!1);let l=t.replace(/^\/*/,"/"),c=F.useMemo((()=>({basename:l,navigator:i,static:a,future:hT({v7_relativeSplatPath:!1},s)})),[l,s,i,a]);"string"==typeof r&&(r=DE(r));let{pathname:u="/",search:d="",hash:p="",state:f=null,key:h="default"}=r,g=F.useMemo((()=>{let e=oA(u,l);return null==e?null:{location:{pathname:e,search:d,hash:p,state:f,key:h},navigationType:o}}),[l,u,d,p,f,h,o]);return null==g?null:F.createElement(vT.Provider,{value:c},F.createElement(bT.Provider,{children:n,value:g}))}function zT(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:F.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:F.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:F.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function FT(){return FT=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},FT.apply(this,arguments)}new Promise((()=>{}));const VT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(dP){}function WT(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=FT({},t,{errors:HT(t.errors)})),t}function HT(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&"RouteErrorResponse"===o.__type)n[r]=new fA(o.status,o.statusText,o.data,!0===o.internal);else if(o&&"Error"===o.__type){if(o.__subType){let e=window[o.__subType];if("function"==typeof e)try{let t=new e(o.message);t.stack="",n[r]=t}catch(dP){}}if(null==n[r]){let e=new Error(o.message);e.stack="",n[r]=e}}else n[r]=o;return n}const qT=F.createContext({isTransitioning:!1}),KT=F.createContext(new Map),GT=W.startTransition,YT=yd.flushSync;function ZT(e){YT?YT(e):e()}class QT{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function XT(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=F.useState(n.state),[a,s]=F.useState(),[l,c]=F.useState({isTransitioning:!1}),[u,d]=F.useState(),[p,f]=F.useState(),[h,g]=F.useState(),m=F.useRef(new Map),{v7_startTransition:v}=r||{},b=F.useCallback((e=>{v?function(e){GT?GT(e):e()}(e):e()}),[v]),y=F.useCallback(((e,t)=>{let{deletedFetchers:r,flushSync:o,viewTransitionOpts:a}=t;r.forEach((e=>m.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&m.current.set(t,e.data)}));let l=null==n.window||null==n.window.document||"function"!=typeof n.window.document.startViewTransition;if(a&&!l){if(o){ZT((()=>{p&&(u&&u.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:a.currentLocation,nextLocation:a.nextLocation})}));let t=n.window.document.startViewTransition((()=>{ZT((()=>i(e)))}));return t.finished.finally((()=>{ZT((()=>{d(void 0),f(void 0),s(void 0),c({isTransitioning:!1})}))})),void ZT((()=>f(t)))}p?(u&&u.resolve(),p.skipTransition(),g({state:e,currentLocation:a.currentLocation,nextLocation:a.nextLocation})):(s(e),c({isTransitioning:!0,flushSync:!1,currentLocation:a.currentLocation,nextLocation:a.nextLocation}))}else o?ZT((()=>i(e))):b((()=>i(e)))}),[n.window,p,u,m,b]);F.useLayoutEffect((()=>n.subscribe(y)),[n,y]),F.useEffect((()=>{l.isTransitioning&&!l.flushSync&&d(new QT)}),[l]),F.useEffect((()=>{if(u&&a&&n.window){let e=a,t=u.promise,r=n.window.document.startViewTransition((async()=>{b((()=>i(e))),await t}));r.finished.finally((()=>{d(void 0),f(void 0),s(void 0),c({isTransitioning:!1})})),f(r)}}),[b,a,u,n.window]),F.useEffect((()=>{u&&a&&o.location.key===a.location.key&&u.resolve()}),[u,p,o.location,a]),F.useEffect((()=>{!l.isTransitioning&&h&&(s(h.state),c({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),g(void 0))}),[l.isTransitioning,h]),F.useEffect((()=>{}),[]);let w=F.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),x=n.basename||"/",S=F.useMemo((()=>({router:n,navigator:w,static:!1,basename:x})),[n,w,x]),k=F.useMemo((()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath})),[n.future.v7_relativeSplatPath]);return F.useEffect((()=>function(e,t){null!=e&&e.v7_startTransition||DT("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),null!=e&&e.v7_relativeSplatPath||t&&t.v7_relativeSplatPath||DT("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||DT("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||DT("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||DT("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||DT("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}(r,n.future)),[r,n.future]),F.createElement(F.Fragment,null,F.createElement(gT.Provider,{value:S},F.createElement(mT.Provider,{value:o},F.createElement(KT.Provider,{value:m.current},F.createElement(qT.Provider,{value:l},F.createElement(BT,{basename:x,location:o.location,navigationType:o.historyAction,navigator:w,future:k},o.initialized||n.future.v7_partialHydration?F.createElement(JT,{routes:n.routes,future:n.future,state:o}):t))))),null)}const JT=F.memo(eR);function eR(e){let{routes:t,future:n,state:r}=e;return AT(t,0,r,n)}const tR="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,nR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rR=F.forwardRef((function(e,t){let n,{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,VT),{basename:f}=F.useContext(vT),h=!1;if("string"==typeof c&&nR.test(c)&&(n=c,tR))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=oA(t.pathname,f);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:h=!0}catch(dP){}let g=function(e,t){let{relative:n}=void 0===t?{}:t;xT()||OE(!1);let{basename:r,navigator:o}=F.useContext(vT),{hash:i,pathname:a,search:s}=ET(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:cA([r,a])),o.createHref({pathname:l,search:s,hash:i})}(c,{relative:o}),m=function(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=void 0===t?{}:t,l=CT(),c=ST(),u=ET(e,{relative:a});return F.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:$E(c)===$E(u);l(e,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[c,l,u,r,o,n,e,i,a,s])}(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:o,viewTransition:d});return F.createElement("a",FT({},p,{href:n||g,onClick:h||i?r:function(e){r&&r(e),e.defaultPrevented||m(e)},ref:t,target:l}))}));function oR(e){let{getKey:t,storageKey:n}=e;return function(e){let{getKey:t,storageKey:n}=void 0===e?{}:e,{router:r}=function(){let e=F.useContext(gT);return e||OE(!1),e}(iR.UseScrollRestoration),{restoreScrollPosition:o,preventScrollReset:i}=function(){let e=F.useContext(mT);return e||OE(!1),e}(sR.UseScrollRestoration),{basename:a}=F.useContext(vT),s=ST(),l=function(){let{matches:e,loaderData:t}=PT(OT.UseMatches);return F.useMemo((()=>e.map((e=>WE(e,t)))),[e,t])}(),c=PT(OT.UseNavigation).navigation;F.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e){let{capture:t}={};F.useEffect((()=>{let n=null!=t?{capture:t}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}}),[e,t])}(F.useCallback((()=>{if("idle"===c.state){let e=(t?t(s,l):null)||s.key;uR[e]=window.scrollY}try{sessionStorage.setItem(n||cR,JSON.stringify(uR))}catch(e){}window.history.scrollRestoration="auto"}),[n,t,c.state,s,l])),"undefined"!=typeof document&&(F.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(n||cR);e&&(uR=JSON.parse(e))}catch(dP){}}),[n]),F.useLayoutEffect((()=>{let e=t&&"/"!==a?(e,n)=>t(FT({},e,{pathname:oA(e.pathname,a)||e.pathname}),n):t,n=null==r?void 0:r.enableScrollRestoration(uR,(()=>window.scrollY),e);return()=>n&&n()}),[r,a,t]),F.useLayoutEffect((()=>{if(!1!==o)if("number"!=typeof o){if(s.hash){let e=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(e)return void e.scrollIntoView()}!0!==i&&window.scrollTo(0,0)}else window.scrollTo(0,o)}),[s,o,i]))}({getKey:t,storageKey:n}),null}var iR,aR,sR,lR;(aR=iR||(iR={})).UseScrollRestoration="useScrollRestoration",aR.UseSubmit="useSubmit",aR.UseSubmitFetcher="useSubmitFetcher",aR.UseFetcher="useFetcher",aR.useViewTransitionState="useViewTransitionState",(lR=sR||(sR={})).UseFetcher="useFetcher",lR.UseFetchers="useFetchers",lR.UseScrollRestoration="useScrollRestoration";const cR="react-router-scroll-positions";let uR={};const dR=$g.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`,pR=({flex:e,to:t,icon:n,value:r,title:o,disabled:i,onClick:a})=>{const s=()=>X.jsxs(hR,{className:"stat-card-content size flex-center"+(i?" disabled":""),children:[n&&X.jsx("div",{className:"white "+(n?`game-icon ${n}`:"")}),t?o:X.jsx(X.Fragment,{children:X.jsx(gR,{className:"stat-value",children:o||Pp(r)})})]});return X.jsx(dR,{className:"stat-card "+(e?`flex-item${e}`:""),onClick:a,children:X.jsx(fR,{className:"card-container purple-light-grad",children:t?X.jsx(rR,{to:t,onClick:()=>{pp.Rules},children:s()}):s()})})},fR=$g.div`
    justify-content: center;
    border-radius: 12px;
    display: flex;
    color: white;
    min-height: 40px;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        text-underline: none;
        width: 100%;
    }

    &.clear {
        padding: 0;
        background: none;
    }
`,hR=$g.div`
    display: flex;

    &.disabled {
        color: gray;
    }

    & > span {
        margin-top: 2px;
    }

    &.size {
        width: 100%;
        container-type: inline-size;
        gap: 4px;
    }
`,gR=$g.p`
`,mR=({fromStats:e,setTab:t,noSize:n,className:r})=>{const o=e=>()=>{if(e.tab)return t?.(e.tab);e.url&&(window.location.href=e.url)};return X.jsx(vR,{className:`${r||""} second-section section-stat ${n?"no-size":""}`,children:e.map(((e,t)=>"sep"===e.icon?X.jsx("div",{className:"game-icon1 star-sep"},`stat-card-item${t}-${e.icon}`):X.jsx(pR,{...e,onClick:o(e)},`stat-card-item${t}-${e.icon}`)))})},vR=$g.section`
    display: flex;
    gap: 4px;
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;

    &:not(.no-size) {
        .stat-value {
            font-size: 7cqw;
        }
    }

    .flex-item1 {
        flex: 1;
    }

    .flex-item2 {
        flex: 2;
    }

    .game-icon.shield {
        mask-size: 100%;
        -webkit-mask-size: 100%;
        width: 11px;
    }
`,bR=({dra:e,balance:t})=>{const n=CT(),r=()=>{n(pp.BALANCE)};return X.jsx(yR,{className:"bank-second",children:Hp()?X.jsx(X.Fragment,{children:X.jsx(mR,{fromStats:[{value:e,title:Pp(e),icon:"draa",tab:1},{value:0,icon:"sep"},{value:t,title:Pp(t),icon:"dra",tab:1}],setTab:r})}):X.jsx(mR,{fromStats:[{value:e,title:Pp(e),icon:"draa",tab:1},{value:t,title:Pp(t),icon:"dra",tab:1}],setTab:r})})},yR=$g.div`
    display: flex;
    margin-top: 8px;
    gap: 6px;
    color: #fff;
    font-weight: 400;
    justify-content: space-between;

    > * {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
    }

    .stat-card {
        width: 49%;
        max-height: 40px;
        max-width: 250px;
    }

    div.white {
        width: 20px;
        height: 20px;
        mask-size: 100%;
        -webkit-mask-size: 100%;
    }
`;$g.div`
    padding: 0 12px;
`;const wR=$g.button`
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 -2px 11.3px 0 rgba(0, 0, 0, 0.04);

    &:not(.star) {
        height: 48px;
    }

    &.star {
        flex-grow: 1;
        max-width: 40px;
        padding: 6px 0;
    }

    &.stars {
        .ba {
            margin-top: 0;
        }
    }

    .account-balance:nth-child(5) {
        flex: 1;
        min-width: 22%;
    }

    font-size: 12px;
`,xR=F.memo((()=>{const{user:e,world:t}=dk(xk((e=>e))),{era:n,bank:r,alive_players:o,artifacts:i}=t,{balance:a=0,dra:s=0,dead:l}=e;if((()=>{let{consts:e,world:t}=dk.getState(),{Item_THRESHOLDS:n}=e,{era:r=0,total_items:o,clan_bank:i}=t,a=(n[r+1]||0)-(o||0),s=a,l=2;if(2===r){l=3;let e=8e11;a<=e&&(l=4,e=0),s=a-e}3===r&&(s=o,l=1);let c=dp("Last to era",{era:r+1});3===r&&(c=dp("Alive"),a=o)})(),Bx(3),1===o){let e=i?.find((e=>13===e.id))?.owner_id;e&&Wx()}return X.jsxs(SR,{className:"bank-info-card",children:[X.jsx(wR,{className:"bank-first",children:X.jsx(kE,{title:dp("Bank"),amount:Pp(r,",")})}),X.jsx(bR,{balance:a,dra:s,dead:l})]})})),SR=$g.section`
    .people {
        margin-left: 15px;
    }
`,kR=$g.div`
    background-color: #8491c3;
    width: 1px;
    height: 40px;
    margin-top: 1px;

    &.white {
        background-color: white;
        height: 14px;
        margin-top: 4px;
        margin-left: 10px;
        margin-right: 10px;
    }
`,CR=$g.div`
    button {
        white-space: nowrap;
    }
    &.logs {
        background: white;
    }
`,_R=({children:e,clName:t=""})=>X.jsx(CR,{className:`header ${t}`,children:e}),ER=[pp.TOP,pp.BALANCE,pp.LOGS,pp.USER_LOGS,pp.USER_LOGS_REDIRECT],AR=[pp.BALANCE,pp.TOP,pp.LOGS,pp.USER_LOGS,pp.USER_LOGS_REDIRECT],TR=()=>{const e=dk(xk((e=>e.user?.dead))),{pathname:t,state:n}=ST(),r=t===pp.HOME||!wp.includes(t);let o="hide";t===pp.STARS&&(o+="stars"),AR.includes(t)&&(o+="top"),t===pp.STARS&&(o+="stars"),t===pp.LOGS&&(o+="userlogs"),t!==pp.USER_LOGS&&t!==pp.USER_LOGS_REDIRECT||(o+="userlog"),t===pp.FaqInfo&&(o+="faqinfo"),t!==pp.CLAN_APPLY&&t!==pp.CHECK_LANG&&t!==pp.FAQ&&t!==pp.Rules||(o+="clan"),F.useEffect((()=>(ER.includes(t)&&document.querySelector(".game-app")?.classList.add(o),r&&(e&&document.querySelector(".game-app")?.classList.add("dead"),document.querySelector(".game-app")?.classList.add("home")),()=>{document.querySelector(".game-app")?.classList.remove(o),e&&r&&(document.querySelector(".game-app")?.classList.remove("dead"),document.querySelector("html")?.classList.remove("dead")),r&&document.querySelector(".game-app")?.classList.remove("home")})),[t,r,e]);const i=ER.includes(t);return i&&t!==pp.STARS?null:X.jsx(_R,{children:X.jsx("div",{style:{margin:"0 auto",alignItems:"center"},className:"div-header",children:!i&&X.jsx(xR,{})})})},RR=$g.div`
    .info-btn {
        border-radius: 4px;
    }
`,jR=({isOpen:e,onClose:t,children:n,full:r,className:o="",dialog:i,onBoard:a,fix:s})=>{if(!e)return null;let l=`${o} modal-overlay${s?"-fix":""} `;return r&&(l+=" full"),a&&(l+=" onBoard"),bd.createPortal(X.jsxs("div",{className:l,onClick:t,children:[l?.match(/bal(2?)_part/)&&X.jsx("div",{className:"new-header",children:X.jsx(TR,{})}),X.jsx(RR,{className:`modal-content${s?"-fix":""} ${i?"dialog":""}`,onClick:e=>e.stopPropagation(),children:n})]}),document.body)},NR=({children:e,onDecline:t,mini:n,full:r="",cl:o="",isOpen:i=!0,dialog:a,onBoard:s})=>X.jsx(jR,{isOpen:i,onClose:t,className:r?" full":`${o}`,full:r,dialog:a,onBoard:s,children:X.jsx(LR,{className:"modal-center center",children:!n&&X.jsx(X.Fragment,{children:X.jsx(OR,{className:"mini",children:e})})})}),LR=$g.section`
    border-radius: 16px;
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`,OR=$g.div`
    width: 100%;

    &:not(.mini) {
        margin-top: 10px;
    }
`;$g.div`
    display: flex;
    //margin-top: 25px;
    gap: 20px;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    justify-content: space-between;

    &:not(.mini) {
        align-self: stretch;
    }
`;const PR=$g.div`
    float: right;
    background-color: white;
    &.no-icon {
        padding: 0;
        padding-bottom: 10px;        
    }
`,IR=$g.span`
    text-align: center;
    font-size: 10px;
`,MR={1:"pink",5:"red"},$R=({title:e,titleLangKey:t,desc:n,title2:r,color:o,priceIcon:i,priceTitle:a,price:s,onOk:l,onCancel:c,okText:u,cancelText:d,close:p,cl:f,type:h=""})=>{const g=MR[h]||"green";return X.jsxs(UR,{className:`type${h} ${f}`,children:[p&&X.jsx(PR,{onClick:c,className:"game-icon no-icon"}),X.jsxs("div",{children:[X.jsx(BR,{className:"dialog-desc",children:t?X.jsx(CS,{t:dp,components:[X.jsx("span",{className:"price-text"}),X.jsx("span",{className:"price-text"}),X.jsx("span",{className:"price-text"})],children:e}):X.jsx(X.Fragment,{children:a?X.jsxs(BR,{className:"loading-container",children:[X.jsxs("b",{className:`text-${o}`,children:[r," "]})," ",dp("for")," ",X.jsxs("div",{className:"loading-container",children:[X.jsx("div",{className:`game-icon h-24 price-icon  ${i}`}),2===s&&X.jsx("div",{className:`game-icon h-24  price-icon ${i}`}),"  ?"]})]}):e})}),n&&X.jsx(BR,{children:n})]}),4!==h&&X.jsxs("div",{className:"flexbox-container flex2",children:[u&&X.jsx(DR,{onClick:()=>{l?.(),3!==h&&c?.()},className:`dialog-ok ${g}`,children:X.jsx(IR,{children:u})}),c&&!p&&X.jsx(DR,{onClick:c,className:"cancel dialog "+(3===h?" green":""),children:X.jsx(IR,{children:d||dp("Cancel")})})]})]})},DR=$g.button`
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: linear-gradient(180deg, #c7c4d4 0%, #8491c3 100%);
    display: flex;
    margin-top: 4px;
    width: 100%;
    flex-direction: column;
    color: rgba(255, 255, 255, 1);
    padding: 14px 20px;
    border: none;
    cursor: pointer;

    &.cancel {
        background: none;
        border: 1px solid #fff;
    }

    &.dialog-ok {
        border-radius: 5px;
    }

    &.dialog {
        border-radius: 5px;
        color: red;
        border: 1px solid red;

        &.green {
            background: none;
            border-radius: 5px;
            color: green;
            border: 1px solid green;
        }
    }
`,UR=$g.div`
    .flex2 {
        margin-top: 10px;
    }
`,BR=$g.div`
    font-size: 16px;
    text-align: center;
`,zR=$g.button`
    border-radius: 4px;
    color: white;
    text-align: center;
    padding: 4px 41px;
    margin-bottom: 16px;
    border: none;
    font-size: 10px;
    min-height: 36px;

    &.text-purple-dark {
        color: #513b68;
    }

    &.rose {
        color: #dc759a;
    }

    b {
        font-size: 1.4em;
        line-height: 1.2em;
    }

    &.disabled {
        color: gray;
    }

    &.boost-open {
        margin-bottom: 0;
    }

    &.pink-full {
        display: flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
    }

    &.inline {
        padding: 4px 17px;
        gap: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 -2px 11.3px 0 rgba(0, 0, 0, 0.04);
        
        &.star {
            flex-grow: 1;
            max-width: 40px;
        }

        font-size: 12px;

        .divider {
            background-color: #ED5570;
            height: 16px;
            margin-top: 9px;
            margin-bottom: 7px;
        }

        .ba {
            margin-top: 0;
        }
    }

    @media (max-width: 375px) {
        padding: 4px 20px;
    }
`,FR=F.memo((({children:e,initialIsLoading:t=!1,onClick:n,className:r="",value:o,disabled:i,type:a,btnRef:s})=>{const[l,c]=F.useState(t),u=F.useCallback((()=>{c(t)}),[o]);F.useEffect((()=>{o&&u()}),[o]);return l&&(r+=" loading"),i&&(i+=" disabled",r+=" disabled"),r+=" add-game-btn",X.jsx(zR,{ref:s,onClick:e=>{const t=s&&"1"===s.current.getAttribute("test")||n;i||l||!t||(o&&c(!0),s&&s.current?.setAttribute("test",""),n?.(e))},disabled:!l&&i,className:r,...a?{type:a}:{},children:l?X.jsx("div",{className:"loader btn"}):e})})),VR={[Sp.returnera]:"on-b-era-return.jpg",era1:"",era2:"era2-bg-new.jpg",era3:"cat-img.png",tabfarm2:"on-b-altar.jpg",[Sp.farmX]:"game1.png",topatkhistory:"on-b-atk.jpg",[Sp.arts]:"on-art-image.jpg",draInfo:"on-b-dra.jpg",[Sp.dra]:"on-b-dra-coin.jpg",boosts:"on-b-boosts.jpg",atkhistory:"on-b-atk.jpg",atkst2:"on-b-atk-st2.jpg",[Sp.arts2]:"on-art-image.jpg",[Sp.stars]:"stars-popup.jpg",[Sp.clans]:"clan-popup.jpg",[Sp.balance]:"on-b-balance.jpg",[Sp.top]:"on-b-top.jpg",balancetab1:"on-b-frens.jpg",balancetab2:"on-b-tasks.jpg",new_era_1:"era1-bg-new.jpg",new_era_2:"era2-bg-new.jpg",[Sp.dead]:"dead-2.png",tabfarm1:"eggs-bg.png",[Sp.altarBroke]:"bg/altar-broken.jpg"},WR=$g.div`
    padding: 0 16px;

    button {
        border-radius: 12px !important;
    }
`,HR=({closeDialog:e})=>{const{t:t}=ES();let n=dk(xk((e=>e.DAILY_CHECK_IN))),{daily_check_in_streak:r}=dk(xk((e=>e.user))),o=r||0;n||(o+=1),F.useEffect((()=>{n&&e&&e()}),[n]);const i=(e,n=!1)=>X.jsx(qR,{className:"dra-first "+(3===e.length||n?" first":""),children:e.map((({day:r,rew:i=0,dra:a=0})=>{let s=o!==r,l=`btn day${r} ${o===r?" checked":""}`;if(n){if(r!==o)return;s=!1,l+=" one"}return X.jsx("div",{className:l,children:X.jsx(FR,{disabled:s,children:X.jsx("div",{className:"flex",children:X.jsxs("div",{children:[X.jsx(GR,{children:t("daily.Day",{day:r})}),X.jsx("div",{className:"flex",children:X.jsxs(KR,{className:"dra-price",children:[X.jsxs("div",{children:[i,"k"]}),!!a&&X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"icon game-icon dra h-14"})," "]}),!!a&&X.jsx("span",{className:"star-sep"}),!!a&&X.jsx("span",{children:a}),X.jsx("div",{className:`icon game-icon ${a?"draa":""} h-14`})]})})]})})})},`DAILY_CHECK_IN${e.length}${r}`)}))});let a=[{day:1,rew:10,dra:500},{day:2,rew:15},{day:3,rew:25}],s=[{day:4,rew:40},{day:5,rew:60},{day:6,rew:75},{day:7,rew:100}];return n?X.jsxs(X.Fragment,{children:[X.jsx(mE,{h:16}),i([...a,...s],!0)]}):X.jsxs(YR,{className:"swiper-slide",children:[X.jsx(mE,{h:16}),i(a),i(s),X.jsx(mE,{h:16}),X.jsx(WR,{className:"button-group",children:X.jsx(FR,{className:"b-full",onClick:()=>{dk.getState().sendMessage({type:127})},value:{day_success:n},children:t("Take reward")})})]})},qR=$g.div`
    display: flex;
    justify-content: center;

    .dra-price {
        gap: 0;
    }

    .star-sep {
        width: 13px;
        height: 14px;
        background-size: 100% 100%;
        margin-top: 0;
    }

    .btn {
        width: 84px;
        margin-left: -4px;

        &.one {
            width: 120px;
        }

        button.add-game-btn {
            .game-icon {
                width: 20px;

                &.draa {
                    max-width: 17px;
                    width: 17px;
                }
            }

            width: 100%;
            margin-bottom: 4px;
            padding: 0 10px;
            @media (max-width: 375px) {
                padding: 0 5px;
            }
        }
    }

    &.first {
        .day1 {
            margin-left: 0;
            width: auto;
            @media (max-width: 400px) {
                min-width: 50%;
            }
            @media (min-width: 400px) {
                min-width: 50%;
            }
            @media (min-width: 440px) {
                min-width: 47%;
            }
            @media (min-width: 500px) {
                min-width: 40%;
            }

            button.add-game-btn {
                background-image: url("./assets/css/daily1-btn.png");
                background-size: 100% 100%;
            }
        }
    }
`,KR=$g.div`
    align-items: center;
    font-size: 10px;
`,GR=$g.div`
    font-size: 10px;
`,YR=$g.div`
    height: 100%;
    width: 100%;

    .button-group {
        display: flex;

        button {
            margin-bottom: 0;
            @media (min-width: 391px) {
                width: 80%;
                margin: 0 auto;
            }
        }
    }
`,ZR=({value:e,onChange:t,items:n,enums:r,enumFirst:o=""})=>X.jsx(QR,{className:`val${e}`,children:X.jsx(XR,{value:e,onChange:e=>{t(e.target.value)},children:(n||Object.values(r)).map((e=>{let t="";return"object"==typeof e?(t=e.title,e=e.value):(t=o?dp(`${o}${e}`):e,t+=(e=>{let t=` (${dp(`${o}${e}d`)})`;return t.match(o)?"":t})(e)),X.jsx("option",{value:e,children:t},e)}))})}),QR=$g.div`
    border-radius: 12px;
    margin-top: 4px;
    padding: 5px 10px;
    font-size: 12px;
    border: 1px solid rgba(163, 163, 163, 1);
    color: inherit;
    background-color: transparent;

    select {
        width: 100%;
        color: white;
        background-color: #1F1D15;
        height: 42px;
        border: none;
        border-radius: 0;
        margin: 0 auto;
        cursor: pointer;
        box-sizing: border-box;
        white-space: normal;
        word-wrap: break-word;
    }
    &.valINTRA_CLAN_RIVALRY {
        select {
            height: 62px;
        }
    }
    option {
        white-space: pre;
        min-height: 30px;
        height: auto;
    }
`,XR=$g.select`
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: border-color 0.3s;

    &:hover {
        border-color: #888;
    }

    &:focus {
        border-color: #0066cc;
        box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
    }
`,JR=({closeDialog:e})=>{let t=dk(xk((e=>e.DAILY_CHECK_IN)));dk(xk((e=>e.user))),F.useEffect((()=>{t&&e&&e()}),[t]);const n=t=>{ek({language_code:t},!0),setTimeout((()=>{dk.getState().update("langChange",0),e("force")}),100)};return X.jsxs(nj,{className:"swiper-slide1 select-lang",children:[X.jsx("img",{src:"assets/css/era2-bg-new.jpg",alt:""}),X.jsx(mE,{h:16}),(e=>{let t=Tp.map((e=>({title:e.name,value:e.lang})));return X.jsx(ej,{className:"dra-first1 "+(3===e.length?" first":""),children:X.jsx(tj,{children:X.jsx(ZR,{onChange:n,items:[{title:"Choose a language"},...t]})})})})([{lang:"ru",title:"Русский 🇷🇺"},{lang:"en",title:"English 🇬🇧"}])]})},ej=$g.div`
    display: flex;
    justify-content: space-around;

    .dra-price {
        gap: 0;
    }

    .star-sep {
        width: 13px;
        height: 14px;
        background-size: 100% 100%;
        margin-top: 0;
    }

    .btn {
        width: 124px;
        margin-left: -4px;

        &.one {
            //width: 120px;
        }

        button.add-game-btn {
            .game-icon {
                width: 20px;

                &.draa {
                    max-width: 17px;
                    width: 17px;
                }
            }

            width: 100%;
            //background-image: url("./assets/css/daily-btn.png");
            margin-bottom: 4px;
            padding: 0 10px;
            @media (max-width: 375px) {
                padding: 0 5px;
            }
        }
    }

    &.first {
        .day1 {
            margin-left: 0;
            width: auto;
            @media (max-width: 400px) {
                min-width: 50%;
            }
            @media (min-width: 400px) {
                min-width: 50%;
            }
            @media (min-width: 440px) {
                min-width: 47%;
            }
            @media (min-width: 500px) {
                min-width: 40%;
            }

            button.add-game-btn {
                //background-image: url("./assets/css/daily1-btn.png");
                background-size: 100% 100%;
            }
        }
    }
`,tj=$g.div`
    width: 100%;
`,nj=$g.div`
    height: 100%;
    width: 100%;

    img {
        border-radius: 10px;
    }

    .button-group {
        display: flex;

        button {
            margin-bottom: 0;
            @media (min-width: 391px) {
                width: 80%;
                margin: 0 auto;
            }
        }
    }

    &.select-lang {
        button {
            background: none;
            background-image: url("./assets/css/button-2.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            text-transform: uppercase;
        }
    }
`,rj=$g.div`
    margin-top: 12px;

    button {
        margin-bottom: 0;
    }
`,oj=e=>""+(e>1?`st${e}`:""),ij=({setOnBoard:e,onB:t,item:n,closeHandler:r,initStep:o=1,next:i=!1,title:a,isBoard:s})=>{const[l,c]=F.useState(o),{t:u}=ES(),d=dk(xk((e=>e.user)));let p=dk(xk((e=>e.DAILY_CHECK_IN))),f=n===Sp.dailyCheckIn,h=n===Sp.langSelect,g=2;const m=n?.match(/_part/);let v=u("onboard.dialog.desc"+n+oj(2));!i&&Xp("onboard.dialog",v)&&(i=!0);let b=u("onboard.dialog.desc"+n+oj(3));Xp("onboard.dialog",b)&&(i=!0,g=3);const y=o=>{f&&!p||h&&"force"!==o||(document.body.classList.remove("rand-blur"),[Sp.altarBroke,Sp.dailyCheckIn,Sp.langSelect].includes(n)||s&&(e=>{const t=Yp();jp.set(Qp(e),t)})(n),r||Kx.getState().update("curTab",null),e?.(t+1),r&&r(),n===Sp.farmX&&Zp(Sp.bal_part)&&rk(Sp.bal_part),n!==Sp.bal_part&&n!==Sp.top||setTimeout((()=>{if(n===Sp.bal_part)rk(Sp.bal2_part)}),400),(e=>{let t=e.last_daily_check_in_at||0;if(!((e.daily_check_in_streak||0)>=7)){if(t){let e=864e5;if($p()-t<e)return}rk(Sp.dailyCheckIn)}})(d))},w=()=>{l!==g&&i?c(l+1):y()},x=u`onboard.buttons.Next`;let S=oj(l),k=u("onboard.dialog.desc"+n+S);n===Sp.dead&&(k=k.replace(/%value%/g,`${d.final_position||""}`));let C=u(kp+n),_=u(kp+n+S);Xp("onboard.dialog",k)||(k="",a=""),Xp("onboard.dialog",_)?C=_:a&&(C=a);let E=VR[n]||VR[`${n}st${l}`],A=E?`/assets/css/${E}`:"",T=!i;(f||h)&&(T=!1);let R;return R={onDecline:y},R.cl=`on-b-item-${n}`,X.jsx(NR,{isOpen:!0,onBoard:!0,...R,children:X.jsx(sj,{children:(()=>{switch(l){case 1:return X.jsxs(X.Fragment,{children:[X.jsxs(aj,{className:"onb-d-div",children:[T&&X.jsx(PR,{onClick:y,className:"game-icon no-icon"}),X.jsx("div",{className:A?"with-img":"",children:A&&X.jsxs(X.Fragment,{children:[X.jsx("img",{src:A,alt:""}),X.jsx(mE,{h:12})]})}),X.jsx("div",{className:"new-title",children:C}),X.jsx("div",{className:"desc popup-desc",children:k})]}),f&&X.jsx(HR,{closeDialog:y}),h&&X.jsx(JR,{closeDialog:y}),m&&X.jsx(rj,{className:"button-group",children:X.jsx(FR,{className:"b-full",onClick:w,children:u("Ok board")})}),i&&X.jsx(rj,{className:"button-group",children:X.jsx(FR,{className:"b-full",onClick:w,children:x})})]});case 2:case 3:return X.jsxs(X.Fragment,{children:[X.jsxs(aj,{className:"on-board-top",children:[X.jsx(PR,{onClick:y,className:"game-icon no-icon"}),A&&X.jsxs(X.Fragment,{children:[X.jsx("img",{src:A,alt:""}),X.jsx(mE,{h:12})]}),X.jsx("div",{className:"new-title",children:C}),X.jsx("div",{className:"desc popup-desc",children:k||u("Welcome Next")})]}),i&&X.jsx(rj,{className:"button-group",children:X.jsx(FR,{className:"b-full",onClick:w,children:x})})]});default:return null}})()})})},aj=$g.div`
    .with-img {
        min-height: 160px;
    }

    img {
        border-radius: 12px;
        max-width: 100%;
    }

    .desc {
        white-space: pre-line;
    }
`,sj=$g.div`
    h2 {
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    }

    button {
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .button-group > div {
        width: 30%;
    }

    p {
        margin-bottom: 15px;
    }
`,lj=()=>{const e=dk(xk((e=>e.ready)));let t=Kx((e=>e.dialog));const[n,r]=F.useState(null),[o,i]=F.useState(!1);F.useEffect((()=>{e||Kx.getState().sendMessage(null)}),[e]),F.useEffect((()=>{r(t?{...t}:null)}),[t]);const a=()=>{i(null),r(null),Np.page!==bp&&(Np.page=""),Kx.getState().setDialog(null)};return n?n.onBoard?X.jsx(ij,{...n.onBoardData,closeHandler:a}):X.jsx("nav",{className:"nav1",children:X.jsx(NR,{onDecline:a,cl:o?"atk-from":"",dialog:!0,children:X.jsx($R,{...n,onCancel:a})})}):null},cj=[["data-telegram-login","catsvsdogs_app_bot"],["data-size","large"],["data-radius","10"],["data-onauth","onTelegramAuth(user)"],["data-request-access","write"]],uj=({openWs:e})=>{const t=F.createRef();return((e,t,n)=>{F.useEffect((()=>{const r=document.createElement("script");return r.src=e,r.async=!0,cj.map((e=>{r.setAttribute(e[0],e[1])})),t?.current?.appendChild(r),n&&n(),()=>{t?.current?.removeChild(r)}}),[e])})("https://telegram.org/js/telegram-widget.js?21",t,(()=>{window.onTelegramAuth||(window.onTelegramAuth=t=>{t&&e?.({widgetUser:{...t},tgUser:1})})})),X.jsxs("div",{children:[X.jsx("br",{}),X.jsx("div",{className:"flex",style:{justifyContent:"center"},children:X.jsx("div",{ref:t})})]})},dj=Ug`
    html,
    body,
    #root {
        height: 100%;
    }
`,pj=({children:e})=>X.jsxs("div",{style:{height:"100%"},children:[X.jsx(dj,{}),e]}),fj=$g.div`
    height: 100%;
    position: relative;
`,hj=$g.div`
    white-space: break-spaces;
    width: 100%;
    text-align: center;
    //font-size: 24px;
    font-weight: 590;

    &.title {
        text-transform: uppercase;
    }
`,gj=$g.div`
    width: 80%;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    .modal-content {
        margin-top: 20px;
        padding: 0;
    }

    .try {
        padding: 0;
        margin-top: 10vh;

        img {
            padding: 10px 0;
        }
    }

    .end-season {
        white-space: pre-line;
    }

    &.modal-center {
        padding-bottom: 10px;
    }
`,mj=$g.div`
    text-align: center;
    border-radius: 8px;
    padding: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto;
`,vj=$g.h1`
    font-size: 18px;
    margin-bottom: 10px;
`,bj=$g.p`
    font-size: 14px;
    color: #6c757d;
    padding: 0 10px;
`,yj=$g.p`
    margin-top: 15px;
    font-size: 14px;
    color: #495057;

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`,wj=()=>X.jsxs(mj,{children:[X.jsx(vj,{children:"Something Went Wrong"}),X.jsxs(bj,{children:["We couldn't process your request at the moment. ",X.jsx("br",{}),"Please try again later."]}),X.jsx(yj,{})]}),xj=$g.div`
    position: absolute;
    bottom: 0;
    width: 100%;

    &.test {
        width: auto;
    }
`,Sj=({desc:e,data:t,item:n,children:r,title:o})=>{let{openWs:i}=dk(),{restricted:a,tryLater:s,maintain:l}=t;const c=()=>{window.history.pushState({urlPath:"/?tgWebAppStartParam=user_id_123#/"},"","/?tgWebAppStartParam=user_id_123#/"),location.reload()},u=()=>{dk.getState().reconnectOn({widgetUser:{try:!0}})};return X.jsxs(pj,{children:[X.jsx("div",{className:"game-name abs"}),X.jsxs(fj,{className:"welcome loading-container div-column",children:[X.jsx(mE,{h:24}),X.jsx("div",{className:"game-icon purple-dark-grad old-hide s-full",style:{width:208,height:134}}),X.jsx(mE,{h:16}),a||s||l?X.jsx(gj,{className:"text-center",children:X.jsx("div",{className:"modal-content "+(s?" try":""),children:X.jsxs("div",{className:"modal-center",children:[l?X.jsxs("div",{className:"end-season",children:[dp("Stop game"),X.jsx("br",{}),X.jsx("a",{href:"https://t.me/itemfarm",children:"https://t.me/itemfarm"})]}):X.jsxs(X.Fragment,{children:[s&&X.jsxs(X.Fragment,{children:[X.jsx(wj,{}),dp("or")," ",X.jsx("button",{onClick:u,children:dp("maybe reconnect")}),X.jsx("br",{}),X.jsx("br",{})]}),!s&&X.jsxs(X.Fragment,{children:[X.jsx("h3",{children:dp(s?"":"Access denied")}),X.jsx(CS,{i18nKey:"Access denied info"}),X.jsx("br",{}),X.jsx("br",{})]}),X.jsx("div",{className:"new-title",children:X.jsx("a",{href:"https://t.me/ItemFarmSupport",className:"new-title",children:"https://t.me/ItemFarmSupport"})})]}),X.jsx(mE,{h:8})]})})}):X.jsxs("div",{className:"welc-div",children:[X.jsx(hj,{className:"f-24 title",children:o||dp("Welcome User")}),X.jsx(hj,{className:"f-14",children:o||dp("Welcome User 2")}),X.jsx(mE,{h:8}),n!==Sp.tg&&X.jsx(gj,{children:e||dp("Welcome")}),X.jsx(mE,{h:16}),n===Sp.tg&&X.jsx(uj,{openWs:i}),qp()&&X.jsx(kj,{onClick:c,children:"ВОЙТИ ПОД ТЕСТ"})]}),X.jsx(xj,{children:X.jsx("div",{className:"nav",children:r})})]})]})},kj=$g.div`
    text-align: center;
    padding: 20px;
`;var Cj,_j={exports:{}};Cj=_j,function(e,t){Cj.exports?Cj.exports=t():(e.nacl||(e.nacl={}),e.nacl.util=t())}(t,(function(){var e={};function t(e){if(!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e))throw new TypeError("invalid encoding")}return e.decodeUTF8=function(e){if("string"!=typeof e)throw new TypeError("expected string");var t,n=unescape(encodeURIComponent(e)),r=new Uint8Array(n.length);for(t=0;t<n.length;t++)r[t]=n.charCodeAt(t);return r},e.encodeUTF8=function(e){var t,n=[];for(t=0;t<e.length;t++)n.push(String.fromCharCode(e[t]));return decodeURIComponent(escape(n.join("")))},"undefined"==typeof atob?void 0!==Buffer.from?(e.encodeBase64=function(e){return Buffer.from(e).toString("base64")},e.decodeBase64=function(e){return t(e),new Uint8Array(Array.prototype.slice.call(Buffer.from(e,"base64"),0))}):(e.encodeBase64=function(e){return new Buffer(e).toString("base64")},e.decodeBase64=function(e){return t(e),new Uint8Array(Array.prototype.slice.call(new Buffer(e,"base64"),0))}):(e.encodeBase64=function(e){var t,n=[],r=e.length;for(t=0;t<r;t++)n.push(String.fromCharCode(e[t]));return btoa(n.join(""))},e.decodeBase64=function(e){t(e);var n,r=atob(e),o=new Uint8Array(r.length);for(n=0;n<r.length;n++)o[n]=r.charCodeAt(n);return o}),e}));const Ej=n(_j.exports);function Aj(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Tj={exports:{}};const Rj=r(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));!function(e){var t=function(e){var t,n=new Float64Array(16);if(e)for(t=0;t<e.length;t++)n[t]=e[t];return n},n=function(){throw new Error("no PRNG")},r=new Uint8Array(16),o=new Uint8Array(32);o[0]=9;var i=t(),a=t([1]),s=t([56129,1]),l=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),u=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),d=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function f(e,t,n,r){e[t]=n>>24&255,e[t+1]=n>>16&255,e[t+2]=n>>8&255,e[t+3]=255&n,e[t+4]=r>>24&255,e[t+5]=r>>16&255,e[t+6]=r>>8&255,e[t+7]=255&r}function h(e,t,n,r,o){var i,a=0;for(i=0;i<o;i++)a|=e[t+i]^n[r+i];return(1&a-1>>>8)-1}function g(e,t,n,r){return h(e,t,n,r,16)}function m(e,t,n,r){return h(e,t,n,r,32)}function v(e,t,n,r){!function(e,t,n,r){for(var o,i=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,l=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,d=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,f=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,h=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,g=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,m=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,v=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,b=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,w=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,x=i,S=a,k=s,C=l,_=c,E=u,A=d,T=p,R=f,j=h,N=g,L=m,O=v,P=b,I=y,M=w,$=0;$<20;$+=2)x^=(o=(O^=(o=(R^=(o=(_^=(o=x+O|0)<<7|o>>>25)+x|0)<<9|o>>>23)+_|0)<<13|o>>>19)+R|0)<<18|o>>>14,E^=(o=(S^=(o=(P^=(o=(j^=(o=E+S|0)<<7|o>>>25)+E|0)<<9|o>>>23)+j|0)<<13|o>>>19)+P|0)<<18|o>>>14,N^=(o=(A^=(o=(k^=(o=(I^=(o=N+A|0)<<7|o>>>25)+N|0)<<9|o>>>23)+I|0)<<13|o>>>19)+k|0)<<18|o>>>14,M^=(o=(L^=(o=(T^=(o=(C^=(o=M+L|0)<<7|o>>>25)+M|0)<<9|o>>>23)+C|0)<<13|o>>>19)+T|0)<<18|o>>>14,x^=(o=(C^=(o=(k^=(o=(S^=(o=x+C|0)<<7|o>>>25)+x|0)<<9|o>>>23)+S|0)<<13|o>>>19)+k|0)<<18|o>>>14,E^=(o=(_^=(o=(T^=(o=(A^=(o=E+_|0)<<7|o>>>25)+E|0)<<9|o>>>23)+A|0)<<13|o>>>19)+T|0)<<18|o>>>14,N^=(o=(j^=(o=(R^=(o=(L^=(o=N+j|0)<<7|o>>>25)+N|0)<<9|o>>>23)+L|0)<<13|o>>>19)+R|0)<<18|o>>>14,M^=(o=(I^=(o=(P^=(o=(O^=(o=M+I|0)<<7|o>>>25)+M|0)<<9|o>>>23)+O|0)<<13|o>>>19)+P|0)<<18|o>>>14;x=x+i|0,S=S+a|0,k=k+s|0,C=C+l|0,_=_+c|0,E=E+u|0,A=A+d|0,T=T+p|0,R=R+f|0,j=j+h|0,N=N+g|0,L=L+m|0,O=O+v|0,P=P+b|0,I=I+y|0,M=M+w|0,e[0]=x>>>0&255,e[1]=x>>>8&255,e[2]=x>>>16&255,e[3]=x>>>24&255,e[4]=S>>>0&255,e[5]=S>>>8&255,e[6]=S>>>16&255,e[7]=S>>>24&255,e[8]=k>>>0&255,e[9]=k>>>8&255,e[10]=k>>>16&255,e[11]=k>>>24&255,e[12]=C>>>0&255,e[13]=C>>>8&255,e[14]=C>>>16&255,e[15]=C>>>24&255,e[16]=_>>>0&255,e[17]=_>>>8&255,e[18]=_>>>16&255,e[19]=_>>>24&255,e[20]=E>>>0&255,e[21]=E>>>8&255,e[22]=E>>>16&255,e[23]=E>>>24&255,e[24]=A>>>0&255,e[25]=A>>>8&255,e[26]=A>>>16&255,e[27]=A>>>24&255,e[28]=T>>>0&255,e[29]=T>>>8&255,e[30]=T>>>16&255,e[31]=T>>>24&255,e[32]=R>>>0&255,e[33]=R>>>8&255,e[34]=R>>>16&255,e[35]=R>>>24&255,e[36]=j>>>0&255,e[37]=j>>>8&255,e[38]=j>>>16&255,e[39]=j>>>24&255,e[40]=N>>>0&255,e[41]=N>>>8&255,e[42]=N>>>16&255,e[43]=N>>>24&255,e[44]=L>>>0&255,e[45]=L>>>8&255,e[46]=L>>>16&255,e[47]=L>>>24&255,e[48]=O>>>0&255,e[49]=O>>>8&255,e[50]=O>>>16&255,e[51]=O>>>24&255,e[52]=P>>>0&255,e[53]=P>>>8&255,e[54]=P>>>16&255,e[55]=P>>>24&255,e[56]=I>>>0&255,e[57]=I>>>8&255,e[58]=I>>>16&255,e[59]=I>>>24&255,e[60]=M>>>0&255,e[61]=M>>>8&255,e[62]=M>>>16&255,e[63]=M>>>24&255}(e,t,n,r)}function b(e,t,n,r){!function(e,t,n,r){for(var o,i=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,l=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,d=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,f=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,h=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,g=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,m=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,v=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,b=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,w=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,x=0;x<20;x+=2)i^=(o=(v^=(o=(f^=(o=(c^=(o=i+v|0)<<7|o>>>25)+i|0)<<9|o>>>23)+c|0)<<13|o>>>19)+f|0)<<18|o>>>14,u^=(o=(a^=(o=(b^=(o=(h^=(o=u+a|0)<<7|o>>>25)+u|0)<<9|o>>>23)+h|0)<<13|o>>>19)+b|0)<<18|o>>>14,g^=(o=(d^=(o=(s^=(o=(y^=(o=g+d|0)<<7|o>>>25)+g|0)<<9|o>>>23)+y|0)<<13|o>>>19)+s|0)<<18|o>>>14,w^=(o=(m^=(o=(p^=(o=(l^=(o=w+m|0)<<7|o>>>25)+w|0)<<9|o>>>23)+l|0)<<13|o>>>19)+p|0)<<18|o>>>14,i^=(o=(l^=(o=(s^=(o=(a^=(o=i+l|0)<<7|o>>>25)+i|0)<<9|o>>>23)+a|0)<<13|o>>>19)+s|0)<<18|o>>>14,u^=(o=(c^=(o=(p^=(o=(d^=(o=u+c|0)<<7|o>>>25)+u|0)<<9|o>>>23)+d|0)<<13|o>>>19)+p|0)<<18|o>>>14,g^=(o=(h^=(o=(f^=(o=(m^=(o=g+h|0)<<7|o>>>25)+g|0)<<9|o>>>23)+m|0)<<13|o>>>19)+f|0)<<18|o>>>14,w^=(o=(y^=(o=(b^=(o=(v^=(o=w+y|0)<<7|o>>>25)+w|0)<<9|o>>>23)+v|0)<<13|o>>>19)+b|0)<<18|o>>>14;e[0]=i>>>0&255,e[1]=i>>>8&255,e[2]=i>>>16&255,e[3]=i>>>24&255,e[4]=u>>>0&255,e[5]=u>>>8&255,e[6]=u>>>16&255,e[7]=u>>>24&255,e[8]=g>>>0&255,e[9]=g>>>8&255,e[10]=g>>>16&255,e[11]=g>>>24&255,e[12]=w>>>0&255,e[13]=w>>>8&255,e[14]=w>>>16&255,e[15]=w>>>24&255,e[16]=d>>>0&255,e[17]=d>>>8&255,e[18]=d>>>16&255,e[19]=d>>>24&255,e[20]=p>>>0&255,e[21]=p>>>8&255,e[22]=p>>>16&255,e[23]=p>>>24&255,e[24]=f>>>0&255,e[25]=f>>>8&255,e[26]=f>>>16&255,e[27]=f>>>24&255,e[28]=h>>>0&255,e[29]=h>>>8&255,e[30]=h>>>16&255,e[31]=h>>>24&255}(e,t,n,r)}var y=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function w(e,t,n,r,o,i,a){var s,l,c=new Uint8Array(16),u=new Uint8Array(64);for(l=0;l<16;l++)c[l]=0;for(l=0;l<8;l++)c[l]=i[l];for(;o>=64;){for(v(u,c,a,y),l=0;l<64;l++)e[t+l]=n[r+l]^u[l];for(s=1,l=8;l<16;l++)s=s+(255&c[l])|0,c[l]=255&s,s>>>=8;o-=64,t+=64,r+=64}if(o>0)for(v(u,c,a,y),l=0;l<o;l++)e[t+l]=n[r+l]^u[l];return 0}function x(e,t,n,r,o){var i,a,s=new Uint8Array(16),l=new Uint8Array(64);for(a=0;a<16;a++)s[a]=0;for(a=0;a<8;a++)s[a]=r[a];for(;n>=64;){for(v(l,s,o,y),a=0;a<64;a++)e[t+a]=l[a];for(i=1,a=8;a<16;a++)i=i+(255&s[a])|0,s[a]=255&i,i>>>=8;n-=64,t+=64}if(n>0)for(v(l,s,o,y),a=0;a<n;a++)e[t+a]=l[a];return 0}function S(e,t,n,r,o){var i=new Uint8Array(32);b(i,r,o,y);for(var a=new Uint8Array(8),s=0;s<8;s++)a[s]=r[s+16];return x(e,t,n,a,i)}function k(e,t,n,r,o,i,a){var s=new Uint8Array(32);b(s,i,a,y);for(var l=new Uint8Array(8),c=0;c<8;c++)l[c]=i[c+16];return w(e,t,n,r,o,l,s)}var C=function(e){var t,n,r,o,i,a,s,l;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,n=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|n<<3),r=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(n>>>10|r<<6),o=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(r>>>7|o<<9),i=255&e[8]|(255&e[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,a=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(i>>>14|a<<2),s=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(a>>>11|s<<5),l=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(s>>>8|l<<8),this.r[9]=l>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8};function _(e,t,n,r,o,i){var a=new C(i);return a.update(n,r,o),a.finish(e,t),0}function E(e,t,n,r,o,i){var a=new Uint8Array(16);return _(a,0,n,r,o,i),g(e,t,a,0)}function A(e,t,n,r,o){var i;if(n<32)return-1;for(k(e,0,t,0,n,r,o),_(e,16,e,32,n-32,e),i=0;i<16;i++)e[i]=0;return 0}function T(e,t,n,r,o){var i,a=new Uint8Array(32);if(n<32)return-1;if(S(a,0,32,r,o),0!==E(t,16,t,32,n-32,a))return-1;for(k(e,0,t,0,n,r,o),i=0;i<32;i++)e[i]=0;return 0}function R(e,t){var n;for(n=0;n<16;n++)e[n]=0|t[n]}function j(e){var t,n,r=1;for(t=0;t<16;t++)n=e[t]+r+65535,r=Math.floor(n/65536),e[t]=n-65536*r;e[0]+=r-1+37*(r-1)}function N(e,t,n){for(var r,o=~(n-1),i=0;i<16;i++)r=o&(e[i]^t[i]),e[i]^=r,t[i]^=r}function L(e,n){var r,o,i,a=t(),s=t();for(r=0;r<16;r++)s[r]=n[r];for(j(s),j(s),j(s),o=0;o<2;o++){for(a[0]=s[0]-65517,r=1;r<15;r++)a[r]=s[r]-65535-(a[r-1]>>16&1),a[r-1]&=65535;a[15]=s[15]-32767-(a[14]>>16&1),i=a[15]>>16&1,a[14]&=65535,N(s,a,1-i)}for(r=0;r<16;r++)e[2*r]=255&s[r],e[2*r+1]=s[r]>>8}function O(e,t){var n=new Uint8Array(32),r=new Uint8Array(32);return L(n,e),L(r,t),m(n,0,r,0)}function P(e){var t=new Uint8Array(32);return L(t,e),1&t[0]}function I(e,t){var n;for(n=0;n<16;n++)e[n]=t[2*n]+(t[2*n+1]<<8);e[15]&=32767}function M(e,t,n){for(var r=0;r<16;r++)e[r]=t[r]+n[r]}function $(e,t,n){for(var r=0;r<16;r++)e[r]=t[r]-n[r]}function D(e,t,n){var r,o,i=0,a=0,s=0,l=0,c=0,u=0,d=0,p=0,f=0,h=0,g=0,m=0,v=0,b=0,y=0,w=0,x=0,S=0,k=0,C=0,_=0,E=0,A=0,T=0,R=0,j=0,N=0,L=0,O=0,P=0,I=0,M=n[0],$=n[1],D=n[2],U=n[3],B=n[4],z=n[5],F=n[6],V=n[7],W=n[8],H=n[9],q=n[10],K=n[11],G=n[12],Y=n[13],Z=n[14],Q=n[15];i+=(r=t[0])*M,a+=r*$,s+=r*D,l+=r*U,c+=r*B,u+=r*z,d+=r*F,p+=r*V,f+=r*W,h+=r*H,g+=r*q,m+=r*K,v+=r*G,b+=r*Y,y+=r*Z,w+=r*Q,a+=(r=t[1])*M,s+=r*$,l+=r*D,c+=r*U,u+=r*B,d+=r*z,p+=r*F,f+=r*V,h+=r*W,g+=r*H,m+=r*q,v+=r*K,b+=r*G,y+=r*Y,w+=r*Z,x+=r*Q,s+=(r=t[2])*M,l+=r*$,c+=r*D,u+=r*U,d+=r*B,p+=r*z,f+=r*F,h+=r*V,g+=r*W,m+=r*H,v+=r*q,b+=r*K,y+=r*G,w+=r*Y,x+=r*Z,S+=r*Q,l+=(r=t[3])*M,c+=r*$,u+=r*D,d+=r*U,p+=r*B,f+=r*z,h+=r*F,g+=r*V,m+=r*W,v+=r*H,b+=r*q,y+=r*K,w+=r*G,x+=r*Y,S+=r*Z,k+=r*Q,c+=(r=t[4])*M,u+=r*$,d+=r*D,p+=r*U,f+=r*B,h+=r*z,g+=r*F,m+=r*V,v+=r*W,b+=r*H,y+=r*q,w+=r*K,x+=r*G,S+=r*Y,k+=r*Z,C+=r*Q,u+=(r=t[5])*M,d+=r*$,p+=r*D,f+=r*U,h+=r*B,g+=r*z,m+=r*F,v+=r*V,b+=r*W,y+=r*H,w+=r*q,x+=r*K,S+=r*G,k+=r*Y,C+=r*Z,_+=r*Q,d+=(r=t[6])*M,p+=r*$,f+=r*D,h+=r*U,g+=r*B,m+=r*z,v+=r*F,b+=r*V,y+=r*W,w+=r*H,x+=r*q,S+=r*K,k+=r*G,C+=r*Y,_+=r*Z,E+=r*Q,p+=(r=t[7])*M,f+=r*$,h+=r*D,g+=r*U,m+=r*B,v+=r*z,b+=r*F,y+=r*V,w+=r*W,x+=r*H,S+=r*q,k+=r*K,C+=r*G,_+=r*Y,E+=r*Z,A+=r*Q,f+=(r=t[8])*M,h+=r*$,g+=r*D,m+=r*U,v+=r*B,b+=r*z,y+=r*F,w+=r*V,x+=r*W,S+=r*H,k+=r*q,C+=r*K,_+=r*G,E+=r*Y,A+=r*Z,T+=r*Q,h+=(r=t[9])*M,g+=r*$,m+=r*D,v+=r*U,b+=r*B,y+=r*z,w+=r*F,x+=r*V,S+=r*W,k+=r*H,C+=r*q,_+=r*K,E+=r*G,A+=r*Y,T+=r*Z,R+=r*Q,g+=(r=t[10])*M,m+=r*$,v+=r*D,b+=r*U,y+=r*B,w+=r*z,x+=r*F,S+=r*V,k+=r*W,C+=r*H,_+=r*q,E+=r*K,A+=r*G,T+=r*Y,R+=r*Z,j+=r*Q,m+=(r=t[11])*M,v+=r*$,b+=r*D,y+=r*U,w+=r*B,x+=r*z,S+=r*F,k+=r*V,C+=r*W,_+=r*H,E+=r*q,A+=r*K,T+=r*G,R+=r*Y,j+=r*Z,N+=r*Q,v+=(r=t[12])*M,b+=r*$,y+=r*D,w+=r*U,x+=r*B,S+=r*z,k+=r*F,C+=r*V,_+=r*W,E+=r*H,A+=r*q,T+=r*K,R+=r*G,j+=r*Y,N+=r*Z,L+=r*Q,b+=(r=t[13])*M,y+=r*$,w+=r*D,x+=r*U,S+=r*B,k+=r*z,C+=r*F,_+=r*V,E+=r*W,A+=r*H,T+=r*q,R+=r*K,j+=r*G,N+=r*Y,L+=r*Z,O+=r*Q,y+=(r=t[14])*M,w+=r*$,x+=r*D,S+=r*U,k+=r*B,C+=r*z,_+=r*F,E+=r*V,A+=r*W,T+=r*H,R+=r*q,j+=r*K,N+=r*G,L+=r*Y,O+=r*Z,P+=r*Q,w+=(r=t[15])*M,a+=38*(S+=r*D),s+=38*(k+=r*U),l+=38*(C+=r*B),c+=38*(_+=r*z),u+=38*(E+=r*F),d+=38*(A+=r*V),p+=38*(T+=r*W),f+=38*(R+=r*H),h+=38*(j+=r*q),g+=38*(N+=r*K),m+=38*(L+=r*G),v+=38*(O+=r*Y),b+=38*(P+=r*Z),y+=38*(I+=r*Q),i=(r=(i+=38*(x+=r*$))+(o=1)+65535)-65536*(o=Math.floor(r/65536)),a=(r=a+o+65535)-65536*(o=Math.floor(r/65536)),s=(r=s+o+65535)-65536*(o=Math.floor(r/65536)),l=(r=l+o+65535)-65536*(o=Math.floor(r/65536)),c=(r=c+o+65535)-65536*(o=Math.floor(r/65536)),u=(r=u+o+65535)-65536*(o=Math.floor(r/65536)),d=(r=d+o+65535)-65536*(o=Math.floor(r/65536)),p=(r=p+o+65535)-65536*(o=Math.floor(r/65536)),f=(r=f+o+65535)-65536*(o=Math.floor(r/65536)),h=(r=h+o+65535)-65536*(o=Math.floor(r/65536)),g=(r=g+o+65535)-65536*(o=Math.floor(r/65536)),m=(r=m+o+65535)-65536*(o=Math.floor(r/65536)),v=(r=v+o+65535)-65536*(o=Math.floor(r/65536)),b=(r=b+o+65535)-65536*(o=Math.floor(r/65536)),y=(r=y+o+65535)-65536*(o=Math.floor(r/65536)),w=(r=w+o+65535)-65536*(o=Math.floor(r/65536)),i=(r=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(r/65536)),a=(r=a+o+65535)-65536*(o=Math.floor(r/65536)),s=(r=s+o+65535)-65536*(o=Math.floor(r/65536)),l=(r=l+o+65535)-65536*(o=Math.floor(r/65536)),c=(r=c+o+65535)-65536*(o=Math.floor(r/65536)),u=(r=u+o+65535)-65536*(o=Math.floor(r/65536)),d=(r=d+o+65535)-65536*(o=Math.floor(r/65536)),p=(r=p+o+65535)-65536*(o=Math.floor(r/65536)),f=(r=f+o+65535)-65536*(o=Math.floor(r/65536)),h=(r=h+o+65535)-65536*(o=Math.floor(r/65536)),g=(r=g+o+65535)-65536*(o=Math.floor(r/65536)),m=(r=m+o+65535)-65536*(o=Math.floor(r/65536)),v=(r=v+o+65535)-65536*(o=Math.floor(r/65536)),b=(r=b+o+65535)-65536*(o=Math.floor(r/65536)),y=(r=y+o+65535)-65536*(o=Math.floor(r/65536)),w=(r=w+o+65535)-65536*(o=Math.floor(r/65536)),i+=o-1+37*(o-1),e[0]=i,e[1]=a,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=p,e[8]=f,e[9]=h,e[10]=g,e[11]=m,e[12]=v,e[13]=b,e[14]=y,e[15]=w}function U(e,t){D(e,t,t)}function B(e,n){var r,o=t();for(r=0;r<16;r++)o[r]=n[r];for(r=253;r>=0;r--)U(o,o),2!==r&&4!==r&&D(o,o,n);for(r=0;r<16;r++)e[r]=o[r]}function z(e,n){var r,o=t();for(r=0;r<16;r++)o[r]=n[r];for(r=250;r>=0;r--)U(o,o),1!==r&&D(o,o,n);for(r=0;r<16;r++)e[r]=o[r]}function F(e,n,r){var o,i,a=new Uint8Array(32),l=new Float64Array(80),c=t(),u=t(),d=t(),p=t(),f=t(),h=t();for(i=0;i<31;i++)a[i]=n[i];for(a[31]=127&n[31]|64,a[0]&=248,I(l,r),i=0;i<16;i++)u[i]=l[i],p[i]=c[i]=d[i]=0;for(c[0]=p[0]=1,i=254;i>=0;--i)N(c,u,o=a[i>>>3]>>>(7&i)&1),N(d,p,o),M(f,c,d),$(c,c,d),M(d,u,p),$(u,u,p),U(p,f),U(h,c),D(c,d,c),D(d,u,f),M(f,c,d),$(c,c,d),U(u,c),$(d,p,h),D(c,d,s),M(c,c,p),D(d,d,c),D(c,p,h),D(p,u,l),U(u,f),N(c,u,o),N(d,p,o);for(i=0;i<16;i++)l[i+16]=c[i],l[i+32]=d[i],l[i+48]=u[i],l[i+64]=p[i];var g=l.subarray(32),m=l.subarray(16);return B(g,g),D(m,m,g),L(e,m),0}function V(e,t){return F(e,t,o)}function W(e,t){return n(t,32),V(e,t)}function H(e,t,n){var o=new Uint8Array(32);return F(o,n,t),b(e,r,o,y)}C.prototype.blocks=function(e,t,n){for(var r,o,i,a,s,l,c,u,d,p,f,h,g,m,v,b,y,w,x,S=this.fin?0:2048,k=this.h[0],C=this.h[1],_=this.h[2],E=this.h[3],A=this.h[4],T=this.h[5],R=this.h[6],j=this.h[7],N=this.h[8],L=this.h[9],O=this.r[0],P=this.r[1],I=this.r[2],M=this.r[3],$=this.r[4],D=this.r[5],U=this.r[6],B=this.r[7],z=this.r[8],F=this.r[9];n>=16;)p=d=0,p+=(k+=8191&(r=255&e[t+0]|(255&e[t+1])<<8))*O,p+=(C+=8191&(r>>>13|(o=255&e[t+2]|(255&e[t+3])<<8)<<3))*(5*F),p+=(_+=8191&(o>>>10|(i=255&e[t+4]|(255&e[t+5])<<8)<<6))*(5*z),p+=(E+=8191&(i>>>7|(a=255&e[t+6]|(255&e[t+7])<<8)<<9))*(5*B),d=(p+=(A+=8191&(a>>>4|(s=255&e[t+8]|(255&e[t+9])<<8)<<12))*(5*U))>>>13,p&=8191,p+=(T+=s>>>1&8191)*(5*D),p+=(R+=8191&(s>>>14|(l=255&e[t+10]|(255&e[t+11])<<8)<<2))*(5*$),p+=(j+=8191&(l>>>11|(c=255&e[t+12]|(255&e[t+13])<<8)<<5))*(5*M),p+=(N+=8191&(c>>>8|(u=255&e[t+14]|(255&e[t+15])<<8)<<8))*(5*I),f=d+=(p+=(L+=u>>>5|S)*(5*P))>>>13,f+=k*P,f+=C*O,f+=_*(5*F),f+=E*(5*z),d=(f+=A*(5*B))>>>13,f&=8191,f+=T*(5*U),f+=R*(5*D),f+=j*(5*$),f+=N*(5*M),d+=(f+=L*(5*I))>>>13,f&=8191,h=d,h+=k*I,h+=C*P,h+=_*O,h+=E*(5*F),d=(h+=A*(5*z))>>>13,h&=8191,h+=T*(5*B),h+=R*(5*U),h+=j*(5*D),h+=N*(5*$),g=d+=(h+=L*(5*M))>>>13,g+=k*M,g+=C*I,g+=_*P,g+=E*O,d=(g+=A*(5*F))>>>13,g&=8191,g+=T*(5*z),g+=R*(5*B),g+=j*(5*U),g+=N*(5*D),m=d+=(g+=L*(5*$))>>>13,m+=k*$,m+=C*M,m+=_*I,m+=E*P,d=(m+=A*O)>>>13,m&=8191,m+=T*(5*F),m+=R*(5*z),m+=j*(5*B),m+=N*(5*U),v=d+=(m+=L*(5*D))>>>13,v+=k*D,v+=C*$,v+=_*M,v+=E*I,d=(v+=A*P)>>>13,v&=8191,v+=T*O,v+=R*(5*F),v+=j*(5*z),v+=N*(5*B),b=d+=(v+=L*(5*U))>>>13,b+=k*U,b+=C*D,b+=_*$,b+=E*M,d=(b+=A*I)>>>13,b&=8191,b+=T*P,b+=R*O,b+=j*(5*F),b+=N*(5*z),y=d+=(b+=L*(5*B))>>>13,y+=k*B,y+=C*U,y+=_*D,y+=E*$,d=(y+=A*M)>>>13,y&=8191,y+=T*I,y+=R*P,y+=j*O,y+=N*(5*F),w=d+=(y+=L*(5*z))>>>13,w+=k*z,w+=C*B,w+=_*U,w+=E*D,d=(w+=A*$)>>>13,w&=8191,w+=T*M,w+=R*I,w+=j*P,w+=N*O,x=d+=(w+=L*(5*F))>>>13,x+=k*F,x+=C*z,x+=_*B,x+=E*U,d=(x+=A*D)>>>13,x&=8191,x+=T*$,x+=R*M,x+=j*I,x+=N*P,k=p=8191&(d=(d=((d+=(x+=L*O)>>>13)<<2)+d|0)+(p&=8191)|0),C=f+=d>>>=13,_=h&=8191,E=g&=8191,A=m&=8191,T=v&=8191,R=b&=8191,j=y&=8191,N=w&=8191,L=x&=8191,t+=16,n-=16;this.h[0]=k,this.h[1]=C,this.h[2]=_,this.h[3]=E,this.h[4]=A,this.h[5]=T,this.h[6]=R,this.h[7]=j,this.h[8]=N,this.h[9]=L},C.prototype.finish=function(e,t){var n,r,o,i,a=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,a[0]=this.h[0]+5,n=a[0]>>>13,a[0]&=8191,i=1;i<10;i++)a[i]=this.h[i]+n,n=a[i]>>>13,a[i]&=8191;for(a[9]-=8192,r=(1^n)-1,i=0;i<10;i++)a[i]&=r;for(r=~r,i=0;i<10;i++)this.h[i]=this.h[i]&r|a[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255},C.prototype.update=function(e,t,n){var r,o;if(this.leftover){for((o=16-this.leftover)>n&&(o=n),r=0;r<o;r++)this.buffer[this.leftover+r]=e[t+r];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(o=n-n%16,this.blocks(e,t,o),t+=o,n-=o),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=e[t+r];this.leftover+=n}};var q=A,K=T,G=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Y(e,t,n,r){for(var o,i,a,s,l,c,u,d,p,f,h,g,m,v,b,y,w,x,S,k,C,_,E,A,T,R,j=new Int32Array(16),N=new Int32Array(16),L=e[0],O=e[1],P=e[2],I=e[3],M=e[4],$=e[5],D=e[6],U=e[7],B=t[0],z=t[1],F=t[2],V=t[3],W=t[4],H=t[5],q=t[6],K=t[7],Y=0;r>=128;){for(S=0;S<16;S++)k=8*S+Y,j[S]=n[k+0]<<24|n[k+1]<<16|n[k+2]<<8|n[k+3],N[S]=n[k+4]<<24|n[k+5]<<16|n[k+6]<<8|n[k+7];for(S=0;S<80;S++)if(o=L,i=O,a=P,s=I,l=M,c=$,u=D,p=B,f=z,h=F,g=V,m=W,v=H,b=q,E=65535&(_=K),A=_>>>16,T=65535&(C=U),R=C>>>16,E+=65535&(_=(W>>>14|M<<18)^(W>>>18|M<<14)^(M>>>9|W<<23)),A+=_>>>16,T+=65535&(C=(M>>>14|W<<18)^(M>>>18|W<<14)^(W>>>9|M<<23)),R+=C>>>16,E+=65535&(_=W&H^~W&q),A+=_>>>16,T+=65535&(C=M&$^~M&D),R+=C>>>16,E+=65535&(_=G[2*S+1]),A+=_>>>16,T+=65535&(C=G[2*S]),R+=C>>>16,C=j[S%16],A+=(_=N[S%16])>>>16,T+=65535&C,R+=C>>>16,T+=(A+=(E+=65535&_)>>>16)>>>16,E=65535&(_=x=65535&E|A<<16),A=_>>>16,T=65535&(C=w=65535&T|(R+=T>>>16)<<16),R=C>>>16,E+=65535&(_=(B>>>28|L<<4)^(L>>>2|B<<30)^(L>>>7|B<<25)),A+=_>>>16,T+=65535&(C=(L>>>28|B<<4)^(B>>>2|L<<30)^(B>>>7|L<<25)),R+=C>>>16,A+=(_=B&z^B&F^z&F)>>>16,T+=65535&(C=L&O^L&P^O&P),R+=C>>>16,d=65535&(T+=(A+=(E+=65535&_)>>>16)>>>16)|(R+=T>>>16)<<16,y=65535&E|A<<16,E=65535&(_=g),A=_>>>16,T=65535&(C=s),R=C>>>16,A+=(_=x)>>>16,T+=65535&(C=w),R+=C>>>16,O=o,P=i,I=a,M=s=65535&(T+=(A+=(E+=65535&_)>>>16)>>>16)|(R+=T>>>16)<<16,$=l,D=c,U=u,L=d,z=p,F=f,V=h,W=g=65535&E|A<<16,H=m,q=v,K=b,B=y,S%16==15)for(k=0;k<16;k++)C=j[k],E=65535&(_=N[k]),A=_>>>16,T=65535&C,R=C>>>16,C=j[(k+9)%16],E+=65535&(_=N[(k+9)%16]),A+=_>>>16,T+=65535&C,R+=C>>>16,w=j[(k+1)%16],E+=65535&(_=((x=N[(k+1)%16])>>>1|w<<31)^(x>>>8|w<<24)^(x>>>7|w<<25)),A+=_>>>16,T+=65535&(C=(w>>>1|x<<31)^(w>>>8|x<<24)^w>>>7),R+=C>>>16,w=j[(k+14)%16],A+=(_=((x=N[(k+14)%16])>>>19|w<<13)^(w>>>29|x<<3)^(x>>>6|w<<26))>>>16,T+=65535&(C=(w>>>19|x<<13)^(x>>>29|w<<3)^w>>>6),R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,j[k]=65535&T|R<<16,N[k]=65535&E|A<<16;E=65535&(_=B),A=_>>>16,T=65535&(C=L),R=C>>>16,C=e[0],A+=(_=t[0])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[0]=L=65535&T|R<<16,t[0]=B=65535&E|A<<16,E=65535&(_=z),A=_>>>16,T=65535&(C=O),R=C>>>16,C=e[1],A+=(_=t[1])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[1]=O=65535&T|R<<16,t[1]=z=65535&E|A<<16,E=65535&(_=F),A=_>>>16,T=65535&(C=P),R=C>>>16,C=e[2],A+=(_=t[2])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[2]=P=65535&T|R<<16,t[2]=F=65535&E|A<<16,E=65535&(_=V),A=_>>>16,T=65535&(C=I),R=C>>>16,C=e[3],A+=(_=t[3])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[3]=I=65535&T|R<<16,t[3]=V=65535&E|A<<16,E=65535&(_=W),A=_>>>16,T=65535&(C=M),R=C>>>16,C=e[4],A+=(_=t[4])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[4]=M=65535&T|R<<16,t[4]=W=65535&E|A<<16,E=65535&(_=H),A=_>>>16,T=65535&(C=$),R=C>>>16,C=e[5],A+=(_=t[5])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[5]=$=65535&T|R<<16,t[5]=H=65535&E|A<<16,E=65535&(_=q),A=_>>>16,T=65535&(C=D),R=C>>>16,C=e[6],A+=(_=t[6])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[6]=D=65535&T|R<<16,t[6]=q=65535&E|A<<16,E=65535&(_=K),A=_>>>16,T=65535&(C=U),R=C>>>16,C=e[7],A+=(_=t[7])>>>16,T+=65535&C,R+=C>>>16,R+=(T+=(A+=(E+=65535&_)>>>16)>>>16)>>>16,e[7]=U=65535&T|R<<16,t[7]=K=65535&E|A<<16,Y+=128,r-=128}return r}function Z(e,t,n){var r,o=new Int32Array(8),i=new Int32Array(8),a=new Uint8Array(256),s=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,Y(o,i,t,n),n%=128,r=0;r<n;r++)a[r]=t[s-n+r];for(a[n]=128,a[(n=256-128*(n<112?1:0))-9]=0,f(a,n-8,s/536870912|0,s<<3),Y(o,i,a,n),r=0;r<8;r++)f(e,8*r,o[r],i[r]);return 0}function Q(e,n){var r=t(),o=t(),i=t(),a=t(),s=t(),l=t(),u=t(),d=t(),p=t();$(r,e[1],e[0]),$(p,n[1],n[0]),D(r,r,p),M(o,e[0],e[1]),M(p,n[0],n[1]),D(o,o,p),D(i,e[3],n[3]),D(i,i,c),D(a,e[2],n[2]),M(a,a,a),$(s,o,r),$(l,a,i),M(u,a,i),M(d,o,r),D(e[0],s,l),D(e[1],d,u),D(e[2],u,l),D(e[3],s,d)}function X(e,t,n){var r;for(r=0;r<4;r++)N(e[r],t[r],n)}function J(e,n){var r=t(),o=t(),i=t();B(i,n[2]),D(r,n[0],i),D(o,n[1],i),L(e,o),e[31]^=P(r)<<7}function ee(e,t,n){var r,o;for(R(e[0],i),R(e[1],a),R(e[2],a),R(e[3],i),o=255;o>=0;--o)X(e,t,r=n[o/8|0]>>(7&o)&1),Q(t,e),Q(e,e),X(e,t,r)}function te(e,n){var r=[t(),t(),t(),t()];R(r[0],u),R(r[1],d),R(r[2],a),D(r[3],u,d),ee(e,r,n)}function ne(e,r,o){var i,a=new Uint8Array(64),s=[t(),t(),t(),t()];for(o||n(r,32),Z(a,r,32),a[0]&=248,a[31]&=127,a[31]|=64,te(s,a),J(e,s),i=0;i<32;i++)r[i+32]=e[i];return 0}var re=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function oe(e,t){var n,r,o,i;for(r=63;r>=32;--r){for(n=0,o=r-32,i=r-12;o<i;++o)t[o]+=n-16*t[r]*re[o-(r-32)],n=Math.floor((t[o]+128)/256),t[o]-=256*n;t[o]+=n,t[r]=0}for(n=0,o=0;o<32;o++)t[o]+=n-(t[31]>>4)*re[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*re[o];for(r=0;r<32;r++)t[r+1]+=t[r]>>8,e[r]=255&t[r]}function ie(e){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=e[t];for(t=0;t<64;t++)e[t]=0;oe(e,n)}function ae(e,n,r,o){var i,a,s=new Uint8Array(64),l=new Uint8Array(64),c=new Uint8Array(64),u=new Float64Array(64),d=[t(),t(),t(),t()];Z(s,o,32),s[0]&=248,s[31]&=127,s[31]|=64;var p=r+64;for(i=0;i<r;i++)e[64+i]=n[i];for(i=0;i<32;i++)e[32+i]=s[32+i];for(Z(c,e.subarray(32),r+32),ie(c),te(d,c),J(e,d),i=32;i<64;i++)e[i]=o[i];for(Z(l,e,r+64),ie(l),i=0;i<64;i++)u[i]=0;for(i=0;i<32;i++)u[i]=c[i];for(i=0;i<32;i++)for(a=0;a<32;a++)u[i+a]+=l[i]*s[a];return oe(e.subarray(32),u),p}function se(e,n,r,o){var s,c=new Uint8Array(32),u=new Uint8Array(64),d=[t(),t(),t(),t()],f=[t(),t(),t(),t()];if(r<64)return-1;if(function(e,n){var r=t(),o=t(),s=t(),c=t(),u=t(),d=t(),f=t();return R(e[2],a),I(e[1],n),U(s,e[1]),D(c,s,l),$(s,s,e[2]),M(c,e[2],c),U(u,c),U(d,u),D(f,d,u),D(r,f,s),D(r,r,c),z(r,r),D(r,r,s),D(r,r,c),D(r,r,c),D(e[0],r,c),U(o,e[0]),D(o,o,c),O(o,s)&&D(e[0],e[0],p),U(o,e[0]),D(o,o,c),O(o,s)?-1:(P(e[0])===n[31]>>7&&$(e[0],i,e[0]),D(e[3],e[0],e[1]),0)}(f,o))return-1;for(s=0;s<r;s++)e[s]=n[s];for(s=0;s<32;s++)e[s+32]=o[s];if(Z(u,e,r),ie(u),ee(d,f,u),te(f,n.subarray(32)),Q(d,f),J(c,d),r-=64,m(n,0,c,0)){for(s=0;s<r;s++)e[s]=0;return-1}for(s=0;s<r;s++)e[s]=n[s+64];return r}var le,ce=16,ue=64,de=32,pe=64;function fe(e,t){if(32!==e.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function he(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function ge(e){for(var t=0;t<e.length;t++)e[t]=0}e.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:k,crypto_stream:S,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:x,crypto_onetimeauth:_,crypto_onetimeauth_verify:E,crypto_verify_16:g,crypto_verify_32:m,crypto_secretbox:A,crypto_secretbox_open:T,crypto_scalarmult:F,crypto_scalarmult_base:V,crypto_box_beforenm:H,crypto_box_afternm:q,crypto_box:function(e,t,n,r,o,i){var a=new Uint8Array(32);return H(a,o,i),q(e,t,n,r,a)},crypto_box_open:function(e,t,n,r,o,i){var a=new Uint8Array(32);return H(a,o,i),K(e,t,n,r,a)},crypto_box_keypair:W,crypto_hash:Z,crypto_sign:ae,crypto_sign_keypair:ne,crypto_sign_open:se,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:ce,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:ue,crypto_sign_PUBLICKEYBYTES:de,crypto_sign_SECRETKEYBYTES:pe,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:t,D:l,L:re,pack25519:L,unpack25519:I,M:D,A:M,S:U,Z:$,pow2523:z,add:Q,set25519:R,modL:oe,scalarmult:ee,scalarbase:te},e.randomBytes=function(e){var t=new Uint8Array(e);return n(t,e),t},e.secretbox=function(e,t,n){he(e,t,n),fe(n,t);for(var r=new Uint8Array(32+e.length),o=new Uint8Array(r.length),i=0;i<e.length;i++)r[i+32]=e[i];return A(o,r,r.length,t,n),o.subarray(ce)},e.secretbox.open=function(e,t,n){he(e,t,n),fe(n,t);for(var r=new Uint8Array(ce+e.length),o=new Uint8Array(r.length),i=0;i<e.length;i++)r[i+ce]=e[i];return r.length<32||0!==T(o,r,r.length,t,n)?null:o.subarray(32)},e.secretbox.keyLength=32,e.secretbox.nonceLength=24,e.secretbox.overheadLength=ce,e.scalarMult=function(e,t){if(he(e,t),32!==e.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var n=new Uint8Array(32);return F(n,e,t),n},e.scalarMult.base=function(e){if(he(e),32!==e.length)throw new Error("bad n size");var t=new Uint8Array(32);return V(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,n,r,o){var i=e.box.before(r,o);return e.secretbox(t,n,i)},e.box.before=function(e,t){he(e,t),function(e,t){if(32!==e.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(e,t);var n=new Uint8Array(32);return H(n,e,t),n},e.box.after=e.secretbox,e.box.open=function(t,n,r,o){var i=e.box.before(r,o);return e.secretbox.open(t,n,i)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(32);return W(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(he(e),32!==e.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return V(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=32,e.box.secretKeyLength=32,e.box.sharedKeyLength=32,e.box.nonceLength=24,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(he(e,t),t.length!==pe)throw new Error("bad secret key size");var n=new Uint8Array(ue+e.length);return ae(n,e,e.length,t),n},e.sign.open=function(e,t){if(he(e,t),t.length!==de)throw new Error("bad public key size");var n=new Uint8Array(e.length),r=se(n,e,e.length,t);if(r<0)return null;for(var o=new Uint8Array(r),i=0;i<o.length;i++)o[i]=n[i];return o},e.sign.detached=function(t,n){for(var r=e.sign(t,n),o=new Uint8Array(ue),i=0;i<o.length;i++)o[i]=r[i];return o},e.sign.detached.verify=function(e,t,n){if(he(e,t,n),t.length!==ue)throw new Error("bad signature size");if(n.length!==de)throw new Error("bad public key size");var r,o=new Uint8Array(ue+e.length),i=new Uint8Array(ue+e.length);for(r=0;r<ue;r++)o[r]=t[r];for(r=0;r<e.length;r++)o[r+ue]=e[r];return se(i,o,o.length,n)>=0},e.sign.keyPair=function(){var e=new Uint8Array(de),t=new Uint8Array(pe);return ne(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(he(e),e.length!==pe)throw new Error("bad secret key size");for(var t=new Uint8Array(de),n=0;n<t.length;n++)t[n]=e[32+n];return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(he(e),32!==e.length)throw new Error("bad seed size");for(var t=new Uint8Array(de),n=new Uint8Array(pe),r=0;r<32;r++)n[r]=e[r];return ne(t,n,!0),{publicKey:t,secretKey:n}},e.sign.publicKeyLength=de,e.sign.secretKeyLength=pe,e.sign.seedLength=32,e.sign.signatureLength=ue,e.hash=function(e){he(e);var t=new Uint8Array(64);return Z(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return he(e,t),0!==e.length&&0!==t.length&&e.length===t.length&&0===h(e,0,t,0,e.length)},e.setPRNG=function(e){n=e},(le="undefined"!=typeof self?self.crypto||self.msCrypto:null)&&le.getRandomValues?e.setPRNG((function(e,t){var n,r=new Uint8Array(t);for(n=0;n<t;n+=65536)le.getRandomValues(r.subarray(n,n+Math.min(t-n,65536)));for(n=0;n<t;n++)e[n]=r[n];ge(r)})):void 0!==Aj&&(le=Rj)&&le.randomBytes&&e.setPRNG((function(e,t){var n,r=le.randomBytes(t);for(n=0;n<t;n++)e[n]=r[n];ge(r)}))}(Tj.exports?Tj.exports:self.nacl=self.nacl||{});const jj=n(Tj.exports);var Nj,Lj,Oj,Pj,Ij,Mj;!function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR",e[e.BAD_REQUEST_ERROR=1]="BAD_REQUEST_ERROR",e[e.MANIFEST_NOT_FOUND_ERROR=2]="MANIFEST_NOT_FOUND_ERROR",e[e.MANIFEST_CONTENT_ERROR=3]="MANIFEST_CONTENT_ERROR",e[e.UNKNOWN_APP_ERROR=100]="UNKNOWN_APP_ERROR",e[e.USER_REJECTS_ERROR=300]="USER_REJECTS_ERROR",e[e.METHOD_NOT_SUPPORTED=400]="METHOD_NOT_SUPPORTED"}(Nj||(Nj={})),function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR",e[e.METHOD_NOT_SUPPORTED=400]="METHOD_NOT_SUPPORTED"}(Lj||(Lj={})),function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR",e[e.BAD_REQUEST_ERROR=1]="BAD_REQUEST_ERROR",e[e.UNKNOWN_APP_ERROR=100]="UNKNOWN_APP_ERROR",e[e.USER_REJECTS_ERROR=300]="USER_REJECTS_ERROR",e[e.METHOD_NOT_SUPPORTED=400]="METHOD_NOT_SUPPORTED"}(Oj||(Oj={})),function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR",e[e.BAD_REQUEST_ERROR=1]="BAD_REQUEST_ERROR",e[e.UNKNOWN_APP_ERROR=100]="UNKNOWN_APP_ERROR",e[e.USER_REJECTS_ERROR=300]="USER_REJECTS_ERROR",e[e.METHOD_NOT_SUPPORTED=400]="METHOD_NOT_SUPPORTED"}(Pj||(Pj={})),function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR",e[e.BAD_REQUEST_ERROR=1]="BAD_REQUEST_ERROR",e[e.UNKNOWN_APP_ERROR=100]="UNKNOWN_APP_ERROR",e[e.METHOD_NOT_SUPPORTED=400]="METHOD_NOT_SUPPORTED"}(Ij||(Ij={})),function(e){e.MAINNET="-239",e.TESTNET="-3"}(Mj||(Mj={}));const $j={encode:function(e,t=!1){let n;return e instanceof Uint8Array?n=e:("string"!=typeof e&&(e=JSON.stringify(e)),n=Ej.decodeUTF8(e)),function(e,t){const n=Ej.encodeBase64(e);return t?encodeURIComponent(n):n}(n,t)},decode:function(e,t=!1){const n=function(e,t){return t&&(e=decodeURIComponent(e)),Ej.decodeBase64(e)}(e,t);return{toString:()=>Ej.encodeUTF8(n),toObject(){try{return JSON.parse(Ej.encodeUTF8(n))}catch(dP){return null}},toUint8Array:()=>n}}};function Dj(e){let t="";return e.forEach((e=>{t+=("0"+(255&e).toString(16)).slice(-2)})),t}function Uj(e){if(e.length%2!=0)throw new Error(`Cannot convert ${e} to bytesArray`);const t=new Uint8Array(e.length/2);for(let n=0;n<e.length;n+=2)t[n/2]=parseInt(e.slice(n,n+2),16);return t}class Bj{constructor(e){this.nonceLength=24,this.keyPair=e?this.createKeypairFromString(e):this.createKeypair(),this.sessionId=Dj(this.keyPair.publicKey)}createKeypair(){return jj.box.keyPair()}createKeypairFromString(e){return{publicKey:Uj(e.publicKey),secretKey:Uj(e.secretKey)}}createNonce(){return jj.randomBytes(this.nonceLength)}encrypt(e,t){const n=(new TextEncoder).encode(e),r=this.createNonce();return function(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}(r,jj.box(n,r,t,this.keyPair.secretKey))}decrypt(e,t){const[n,r]=function(e,t){if(t>=e.length)throw new Error("Index is out of buffer");return[e.slice(0,t),e.slice(t)]}(e,this.nonceLength),o=jj.box.open(r,n,t,this.keyPair.secretKey);if(!o)throw new Error(`Decryption error: \n message: ${e.toString()} \n sender pubkey: ${t.toString()} \n keypair pubkey: ${this.keyPair.publicKey.toString()} \n keypair secretkey: ${this.keyPair.secretKey.toString()}`);return(new TextDecoder).decode(o)}stringifyKeypair(){return{publicKey:Dj(this.keyPair.publicKey),secretKey:Dj(this.keyPair.secretKey)}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function zj(e,t,n,r){return new(n||(n=Promise))((function(t,o){function i(e){try{s(r.next(e))}catch(dP){o(dP)}}function a(e){try{s(r.throw(e))}catch(dP){o(dP)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}s((r=r.apply(e,[])).next())}))}class Fj extends Error{constructor(e,t){super(e,t),this.message=`${Fj.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?"\n"+e:""}`,Object.setPrototypeOf(this,Fj.prototype)}get info(){return""}}Fj.prefix="[TON_CONNECT_SDK_ERROR]";class Vj extends Fj{get info(){return"Passed DappMetadata is in incorrect format."}constructor(...e){super(...e),Object.setPrototypeOf(this,Vj.prototype)}}class Wj extends Fj{get info(){return"Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"}constructor(...e){super(...e),Object.setPrototypeOf(this,Wj.prototype)}}class Hj extends Fj{get info(){return"Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"}constructor(...e){super(...e),Object.setPrototypeOf(this,Hj.prototype)}}class qj extends Fj{get info(){return"Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."}constructor(...e){super(...e),Object.setPrototypeOf(this,qj.prototype)}}class Kj extends Fj{get info(){return"Send transaction or other protocol methods called while wallet is not connected."}constructor(...e){super(...e),Object.setPrototypeOf(this,Kj.prototype)}}class Gj extends Fj{get info(){return"User rejects the action in the wallet."}constructor(...e){super(...e),Object.setPrototypeOf(this,Gj.prototype)}}class Yj extends Fj{get info(){return"Request to the wallet contains errors."}constructor(...e){super(...e),Object.setPrototypeOf(this,Yj.prototype)}}class Zj extends Fj{get info(){return"App tries to send rpc request to the injected wallet while not connected."}constructor(...e){super(...e),Object.setPrototypeOf(this,Zj.prototype)}}class Qj extends Fj{get info(){return"There is an attempt to connect to the injected wallet while it is not exists in the webpage."}constructor(...e){super(...e),Object.setPrototypeOf(this,Qj.prototype)}}class Xj extends Fj{get info(){return"An error occurred while fetching the wallets list."}constructor(...e){super(...e),Object.setPrototypeOf(this,Xj.prototype)}}class Jj extends Fj{get info(){return"Passed address is in incorrect format."}constructor(...e){super(...e),Object.setPrototypeOf(this,Jj.prototype)}}class eN extends Fj{get info(){return"Passed hex is in incorrect format."}constructor(...e){super(...e),Object.setPrototypeOf(this,eN.prototype)}}class tN extends Fj{constructor(...e){super(...e),Object.setPrototypeOf(this,tN.prototype)}}const nN={[Nj.UNKNOWN_ERROR]:tN,[Nj.USER_REJECTS_ERROR]:Gj,[Nj.BAD_REQUEST_ERROR]:Yj,[Nj.UNKNOWN_APP_ERROR]:Zj,[Nj.MANIFEST_NOT_FOUND_ERROR]:Hj,[Nj.MANIFEST_CONTENT_ERROR]:Wj};const rN=new class{parseError(e){let t=tN;return e.code in nN&&(t=nN[e.code]||tN),new t(e.message)}};class oN{isError(e){return"error"in e}}const iN={[Oj.UNKNOWN_ERROR]:tN,[Oj.USER_REJECTS_ERROR]:Gj,[Oj.BAD_REQUEST_ERROR]:Yj,[Oj.UNKNOWN_APP_ERROR]:Zj};const aN=new class extends oN{convertToRpcRequest(e){return{method:"sendTransaction",params:[JSON.stringify(e)]}}parseAndThrowError(e){let t=tN;throw e.error.code in iN&&(t=iN[e.error.code]||tN),new t(e.error.message)}convertFromRpcResponse(e){return{boc:e.result}}};class sN{constructor(e,t){this.storage=e,this.storeKey="ton-connect-storage_http-bridge-gateway::"+t}storeLastEventId(e){return zj(this,0,void 0,(function*(){return this.storage.setItem(this.storeKey,e)}))}removeLastEventId(){return zj(this,0,void 0,(function*(){return this.storage.removeItem(this.storeKey)}))}getLastEventId(){return zj(this,0,void 0,(function*(){const e=yield this.storage.getItem(this.storeKey);return e||null}))}}function lN(e,t){return function(e){return"/"===e.slice(-1)?e.slice(0,-1):e}(e)+"/"+t}function cN(e){if(!e)return!1;const t=new URL(e);return"tg:"===t.protocol||"t.me"===t.hostname}function uN(e){return e.replaceAll(".","%2E").replaceAll("-","%2D").replaceAll("_","%5F").replaceAll("&","-").replaceAll("=","__").replaceAll("%","--")}function dN(e,t){return zj(this,0,void 0,(function*(){return new Promise(((t,n)=>{setTimeout((()=>t()),e)}))}))}function pN(e){const t=new AbortController;return(null==e?void 0:e.aborted)?t.abort():null==e||e.addEventListener("abort",(()=>t.abort()),{once:!0}),t}function fN(e,t){var n,r;return zj(this,0,void 0,(function*(){const o=null!==(n=null==t?void 0:t.attempts)&&void 0!==n?n:10,i=null!==(r=null==t?void 0:t.delayMs)&&void 0!==r?r:200,a=pN(null==t?void 0:t.signal);if("function"!=typeof e)throw new Fj("Expected a function, got "+typeof e);let s,l=0;for(;l<o;){if(a.signal.aborted)throw new Fj(`Aborted after attempts ${l}`);try{return yield e({signal:a.signal})}catch(c){s=c,l++,l<o&&(yield dN(i))}}throw s}))}function hN(...e){try{console.debug("[TON_CONNECT_SDK]",...e)}catch(gL){}}function gN(...e){try{console.error("[TON_CONNECT_SDK]",...e)}catch(gL){}}class mN{constructor(e,t,n,r,o){this.bridgeUrl=t,this.sessionId=n,this.listener=r,this.errorsListener=o,this.ssePath="events",this.postPath="message",this.heartbeatMessage="heartbeat",this.defaultTtl=300,this.defaultReconnectDelay=2e3,this.defaultResendDelay=5e3,this.eventSource=function(e,t){let n=null,r=null,o=null,i=null,a=null;const s=(s,...l)=>zj(this,0,void 0,(function*(){if(i=null!=s?s:null,null==a||a.abort(),a=pN(s),a.signal.aborted)throw new Fj("Resource creation was aborted");r=null!=l?l:null;const c=e(a.signal,...l);o=c;const u=yield c;if(o!==c&&u!==n)throw yield t(u),new Fj("Resource creation was aborted by a new resource creation");return n=u,n}));return{create:s,current:()=>null!=n?n:null,dispose:()=>zj(this,0,void 0,(function*(){try{const e=n;n=null;const r=o;o=null;try{null==a||a.abort()}catch(dP){}yield Promise.allSettled([e?t(e):Promise.resolve(),r?t(yield r):Promise.resolve()])}catch(dP){}})),recreate:e=>zj(this,0,void 0,(function*(){const t=n,a=o,l=r,c=i;if(yield dN(e),t===n&&a===o&&l===r&&c===i)return yield s(i,...null!=l?l:[]);throw new Fj("Resource recreation was aborted by a new resource creation")}))}}(((e,t)=>zj(this,0,void 0,(function*(){const n={bridgeUrl:this.bridgeUrl,ssePath:this.ssePath,sessionId:this.sessionId,bridgeGatewayStorage:this.bridgeGatewayStorage,errorHandler:this.errorsHandler.bind(this),messageHandler:this.messagesHandler.bind(this),signal:e,openingDeadlineMS:t};return yield function(e){return zj(this,0,void 0,(function*(){return yield function(e,t){const n=null==t?void 0:t.timeout,r=pN(null==t?void 0:t.signal);return new Promise(((t,o)=>zj(this,0,void 0,(function*(){if(r.signal.aborted)return void o(new Fj("Operation aborted"));let i;void 0!==n&&(i=setTimeout((()=>{r.abort(),o(new Fj(`Timeout after ${n}ms`))}),n)),r.signal.addEventListener("abort",(()=>{clearTimeout(i),o(new Fj("Operation aborted"))}),{once:!0});const a={timeout:n,abort:r.signal};yield e(((...e)=>{clearTimeout(i),t(...e)}),(()=>{clearTimeout(i),o()}),a)}))))}(((t,n,r)=>zj(this,0,void 0,(function*(){var o;const i=pN(r.signal).signal;if(i.aborted)return void n(new Fj("Bridge connection aborted"));const a=new URL(lN(e.bridgeUrl,e.ssePath));a.searchParams.append("client_id",e.sessionId);const s=yield e.bridgeGatewayStorage.getLastEventId();if(s&&a.searchParams.append("last_event_id",s),i.aborted)return void n(new Fj("Bridge connection aborted"));const l=new EventSource(a.toString());l.onerror=r=>zj(this,0,void 0,(function*(){if(i.aborted)return l.close(),void n(new Fj("Bridge connection aborted"));try{const n=yield e.errorHandler(l,r);n!==l&&l.close(),n&&n!==l&&t(n)}catch(dP){l.close(),n(dP)}})),l.onopen=()=>{if(i.aborted)return l.close(),void n(new Fj("Bridge connection aborted"));t(l)},l.onmessage=t=>{if(i.aborted)return l.close(),void n(new Fj("Bridge connection aborted"));e.messageHandler(t)},null===(o=e.signal)||void 0===o||o.addEventListener("abort",(()=>{l.close(),n(new Fj("Bridge connection aborted"))}))}))),{timeout:e.openingDeadlineMS,signal:e.signal})}))}(n)}))),(e=>zj(this,0,void 0,(function*(){e.close()})))),this.bridgeGatewayStorage=new sN(e,t)}get isReady(){const e=this.eventSource.current();return(null==e?void 0:e.readyState)===EventSource.OPEN}get isClosed(){const e=this.eventSource.current();return(null==e?void 0:e.readyState)!==EventSource.OPEN}get isConnecting(){const e=this.eventSource.current();return(null==e?void 0:e.readyState)===EventSource.CONNECTING}registerSession(e){return zj(this,0,void 0,(function*(){yield this.eventSource.create(null==e?void 0:e.signal,null==e?void 0:e.openingDeadlineMS)}))}send(e,t,n,r){var o;return zj(this,0,void 0,(function*(){const i={};"number"==typeof r?i.ttl=r:(i.ttl=null==r?void 0:r.ttl,i.signal=null==r?void 0:r.signal,i.attempts=null==r?void 0:r.attempts);const a=new URL(lN(this.bridgeUrl,this.postPath));a.searchParams.append("client_id",this.sessionId),a.searchParams.append("to",t),a.searchParams.append("ttl",((null==i?void 0:i.ttl)||this.defaultTtl).toString()),a.searchParams.append("topic",n);const s=$j.encode(e);yield fN((e=>zj(this,0,void 0,(function*(){const t=yield this.post(a,s,e.signal);if(!t.ok)throw new Fj(`Bridge send failed, status ${t.status}`)}))),{attempts:null!==(o=null==i?void 0:i.attempts)&&void 0!==o?o:Number.MAX_SAFE_INTEGER,delayMs:this.defaultResendDelay,signal:null==i?void 0:i.signal})}))}pause(){this.eventSource.dispose().catch((e=>gN(`Bridge pause failed, ${e}`)))}unPause(){return zj(this,0,void 0,(function*(){yield this.eventSource.recreate(0)}))}close(){return zj(this,0,void 0,(function*(){yield this.eventSource.dispose().catch((e=>gN(`Bridge close failed, ${e}`)))}))}setListener(e){this.listener=e}setErrorsListener(e){this.errorsListener=e}post(e,t,n){return zj(this,0,void 0,(function*(){const r=yield fetch(e,{method:"post",body:t,signal:n});if(!r.ok)throw new Fj(`Bridge send failed, status ${r.status}`);return r}))}errorsHandler(e,t){return zj(this,0,void 0,(function*(){if(this.isConnecting)throw e.close(),new Fj("Bridge error, failed to connect");if(!this.isReady){if(this.isClosed)return e.close(),hN(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`),yield this.eventSource.recreate(this.defaultReconnectDelay);throw new Fj("Bridge error, unknown state")}try{this.errorsListener(t)}catch(t){}}))}messagesHandler(e){return zj(this,0,void 0,(function*(){if(e.data===this.heartbeatMessage)return;if(yield this.bridgeGatewayStorage.storeLastEventId(e.lastEventId),this.isClosed)return;let t;try{t=JSON.parse(e.data)}catch(e){throw new Fj(`Bridge message parse failed, message ${e.data}`)}this.listener(t)}))}}function vN(e){return!("connectEvent"in e)}class bN{constructor(e){this.storage=e,this.storeKey="ton-connect-storage_bridge-connection"}storeConnection(e){return zj(this,0,void 0,(function*(){if("injected"===e.type)return this.storage.setItem(this.storeKey,JSON.stringify(e));if(!vN(e)){const t={sessionKeyPair:e.session.sessionCrypto.stringifyKeypair(),walletPublicKey:e.session.walletPublicKey,bridgeUrl:e.session.bridgeUrl},n={type:"http",connectEvent:e.connectEvent,session:t,lastWalletEventId:e.lastWalletEventId,nextRpcRequestId:e.nextRpcRequestId};return this.storage.setItem(this.storeKey,JSON.stringify(n))}const t={type:"http",connectionSource:e.connectionSource,sessionCrypto:e.sessionCrypto.stringifyKeypair()};return this.storage.setItem(this.storeKey,JSON.stringify(t))}))}removeConnection(){return zj(this,0,void 0,(function*(){return this.storage.removeItem(this.storeKey)}))}getConnection(){return zj(this,0,void 0,(function*(){const e=yield this.storage.getItem(this.storeKey);if(!e)return null;const t=JSON.parse(e);if("injected"===t.type)return t;if("connectEvent"in t){const e=new Bj(t.session.sessionKeyPair);return{type:"http",connectEvent:t.connectEvent,lastWalletEventId:t.lastWalletEventId,nextRpcRequestId:t.nextRpcRequestId,session:{sessionCrypto:e,bridgeUrl:t.session.bridgeUrl,walletPublicKey:t.session.walletPublicKey}}}return{type:"http",sessionCrypto:new Bj(t.sessionCrypto),connectionSource:t.connectionSource}}))}getHttpConnection(){return zj(this,0,void 0,(function*(){const e=yield this.getConnection();if(!e)throw new Fj("Trying to read HTTP connection source while nothing is stored");if("injected"===e.type)throw new Fj("Trying to read HTTP connection source while injected connection is stored");return e}))}getHttpPendingConnection(){return zj(this,0,void 0,(function*(){const e=yield this.getConnection();if(!e)throw new Fj("Trying to read HTTP connection source while nothing is stored");if("injected"===e.type)throw new Fj("Trying to read HTTP connection source while injected connection is stored");if(!vN(e))throw new Fj("Trying to read HTTP-pending connection while http connection is stored");return e}))}getInjectedConnection(){return zj(this,0,void 0,(function*(){const e=yield this.getConnection();if(!e)throw new Fj("Trying to read Injected bridge connection source while nothing is stored");if("http"===(null==e?void 0:e.type))throw new Fj("Trying to read Injected bridge connection source while HTTP connection is stored");return e}))}storedConnectionType(){return zj(this,0,void 0,(function*(){const e=yield this.storage.getItem(this.storeKey);if(!e)return null;return JSON.parse(e).type}))}storeLastWalletEventId(e){return zj(this,0,void 0,(function*(){const t=yield this.getConnection();if(t&&"http"===t.type&&!vN(t))return t.lastWalletEventId=e,this.storeConnection(t)}))}getLastWalletEventId(){return zj(this,0,void 0,(function*(){const e=yield this.getConnection();if(e&&"lastWalletEventId"in e)return e.lastWalletEventId}))}increaseNextRpcRequestId(){return zj(this,0,void 0,(function*(){const e=yield this.getConnection();if(e&&"nextRpcRequestId"in e){const t=e.nextRpcRequestId||0;return e.nextRpcRequestId=t+1,this.storeConnection(e)}}))}getNextRpcRequestId(){return zj(this,0,void 0,(function*(){const e=yield this.getConnection();return e&&"nextRpcRequestId"in e&&e.nextRpcRequestId||0}))}}class yN{constructor(e,t){this.storage=e,this.walletConnectionSource=t,this.type="http",this.standardUniversalLink="tc://",this.pendingRequests=new Map,this.session=null,this.gateway=null,this.pendingGateways=[],this.listeners=[],this.defaultOpeningDeadlineMS=12e3,this.defaultRetryTimeoutMS=2e3,this.connectionStorage=new bN(e)}static fromStorage(e){return zj(this,0,void 0,(function*(){const t=new bN(e),n=yield t.getHttpConnection();return vN(n)?new yN(e,n.connectionSource):new yN(e,{bridgeUrl:n.session.bridgeUrl})}))}connect(e,t){var n;const r=pN(null==t?void 0:t.signal);null===(n=this.abortController)||void 0===n||n.abort(),this.abortController=r,this.closeGateways();const o=new Bj;this.session={sessionCrypto:o,bridgeUrl:"bridgeUrl"in this.walletConnectionSource?this.walletConnectionSource.bridgeUrl:""},this.connectionStorage.storeConnection({type:"http",connectionSource:this.walletConnectionSource,sessionCrypto:o}).then((()=>zj(this,0,void 0,(function*(){r.signal.aborted||(yield fN((e=>{var n;return this.openGateways(o,{openingDeadlineMS:null!==(n=null==t?void 0:t.openingDeadlineMS)&&void 0!==n?n:this.defaultOpeningDeadlineMS,signal:null==e?void 0:e.signal})}),{attempts:Number.MAX_SAFE_INTEGER,delayMs:this.defaultRetryTimeoutMS,signal:r.signal}))}))));const i="universalLink"in this.walletConnectionSource&&this.walletConnectionSource.universalLink?this.walletConnectionSource.universalLink:this.standardUniversalLink;return this.generateUniversalLink(i,e)}restoreConnection(e){var t,n;return zj(this,0,void 0,(function*(){const r=pN(null==e?void 0:e.signal);if(null===(t=this.abortController)||void 0===t||t.abort(),this.abortController=r,r.signal.aborted)return;this.closeGateways();const o=yield this.connectionStorage.getHttpConnection();if(!o)return;if(r.signal.aborted)return;const i=null!==(n=null==e?void 0:e.openingDeadlineMS)&&void 0!==n?n:this.defaultOpeningDeadlineMS;if(vN(o))return this.session={sessionCrypto:o.sessionCrypto,bridgeUrl:"bridgeUrl"in this.walletConnectionSource?this.walletConnectionSource.bridgeUrl:""},yield this.openGateways(o.sessionCrypto,{openingDeadlineMS:i,signal:null==r?void 0:r.signal});if(Array.isArray(this.walletConnectionSource))throw new Fj("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");if(this.session=o.session,this.gateway&&(hN("Gateway is already opened, closing previous gateway"),yield this.gateway.close()),this.gateway=new mN(this.storage,this.walletConnectionSource.bridgeUrl,o.session.sessionCrypto.sessionId,this.gatewayListener.bind(this),this.gatewayErrorsListener.bind(this)),!r.signal.aborted){this.listeners.forEach((e=>e(o.connectEvent)));try{yield fN((e=>this.gateway.registerSession({openingDeadlineMS:i,signal:e.signal})),{attempts:Number.MAX_SAFE_INTEGER,delayMs:this.defaultRetryTimeoutMS,signal:r.signal})}catch(dP){return void(yield this.disconnect({signal:r.signal}))}}}))}sendRequest(e,t){const n={};return"function"==typeof t?n.onRequestSent=t:(n.onRequestSent=null==t?void 0:t.onRequestSent,n.signal=null==t?void 0:t.signal,n.attempts=null==t?void 0:t.attempts),new Promise(((t,r)=>zj(this,0,void 0,(function*(){var o;if(!this.gateway||!this.session||!("walletPublicKey"in this.session))throw new Fj("Trying to send bridge request without session");const i=(yield this.connectionStorage.getNextRpcRequestId()).toString();yield this.connectionStorage.increaseNextRpcRequestId(),hN("Send http-bridge request:",Object.assign(Object.assign({},e),{id:i}));const a=this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({},e),{id:i})),Uj(this.session.walletPublicKey));try{yield this.gateway.send(a,this.session.walletPublicKey,e.method,{attempts:null==n?void 0:n.attempts,signal:null==n?void 0:n.signal}),null===(o=null==n?void 0:n.onRequestSent)||void 0===o||o.call(n),this.pendingRequests.set(i.toString(),t)}catch(dP){r(dP)}}))))}closeConnection(){this.closeGateways(),this.listeners=[],this.session=null,this.gateway=null}disconnect(e){return zj(this,0,void 0,(function*(){return new Promise((t=>zj(this,0,void 0,(function*(){let n=!1,r=null;const o=()=>{n||(n=!0,this.removeBridgeAndSession().then(t))};try{this.closeGateways();const t=pN(null==e?void 0:e.signal);r=setTimeout((()=>{t.abort()}),this.defaultOpeningDeadlineMS),yield this.sendRequest({method:"disconnect",params:[]},{onRequestSent:o,signal:t.signal,attempts:1})}catch(dP){hN("Disconnect error:",dP),n||this.removeBridgeAndSession().then(t)}finally{r&&clearTimeout(r),o()}}))))}))}listen(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter((t=>t!==e))}pause(){var e;null===(e=this.gateway)||void 0===e||e.pause(),this.pendingGateways.forEach((e=>e.pause()))}unPause(){return zj(this,0,void 0,(function*(){const e=this.pendingGateways.map((e=>e.unPause()));this.gateway&&e.push(this.gateway.unPause()),yield Promise.all(e)}))}pendingGatewaysListener(e,t,n){return zj(this,0,void 0,(function*(){if(this.pendingGateways.includes(e))return this.closeGateways({except:e}),this.gateway&&(hN("Gateway is already opened, closing previous gateway"),yield this.gateway.close()),this.session.bridgeUrl=t,this.gateway=e,this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)),this.gateway.setListener(this.gatewayListener.bind(this)),this.gatewayListener(n);yield e.close()}))}gatewayListener(e){return zj(this,0,void 0,(function*(){const t=JSON.parse(this.session.sessionCrypto.decrypt($j.decode(e.message).toUint8Array(),Uj(e.from)));if(hN("Wallet message received:",t),!("event"in t)){const e=t.id.toString(),n=this.pendingRequests.get(e);return n?(n(t),void this.pendingRequests.delete(e)):void hN(`Response id ${e} doesn't match any request's id`)}if(void 0!==t.id){const e=yield this.connectionStorage.getLastWalletEventId();if(void 0!==e&&t.id<=e)return void gN(`Received event id (=${t.id}) must be greater than stored last wallet event id (=${e}) `);"connect"!==t.event&&(yield this.connectionStorage.storeLastWalletEventId(t.id))}const n=this.listeners;"connect"===t.event&&(yield this.updateSession(t,e.from)),"disconnect"===t.event&&(hN("Removing bridge and session: received disconnect event"),yield this.removeBridgeAndSession()),n.forEach((e=>e(t)))}))}gatewayErrorsListener(e){return zj(this,0,void 0,(function*(){throw new Fj(`Bridge error ${JSON.stringify(e)}`)}))}updateSession(e,t){return zj(this,0,void 0,(function*(){this.session=Object.assign(Object.assign({},this.session),{walletPublicKey:t});const n=e.payload.items.find((e=>"ton_addr"===e.name)),r=Object.assign(Object.assign({},e),{payload:Object.assign(Object.assign({},e.payload),{items:[n]})});yield this.connectionStorage.storeConnection({type:"http",session:this.session,lastWalletEventId:e.id,connectEvent:r,nextRpcRequestId:0})}))}removeBridgeAndSession(){return zj(this,0,void 0,(function*(){this.closeConnection(),yield this.connectionStorage.removeConnection()}))}generateUniversalLink(e,t){return cN(e)?this.generateTGUniversalLink(e,t):this.generateRegularUniversalLink(e,t)}generateRegularUniversalLink(e,t){const n=new URL(e);return n.searchParams.append("v",2..toString()),n.searchParams.append("id",this.session.sessionCrypto.sessionId),n.searchParams.append("r",JSON.stringify(t)),n.toString()}generateTGUniversalLink(e,t){const n="tonconnect-"+uN(this.generateRegularUniversalLink("about:blank",t).split("?")[1]),r=this.convertToDirectLink(e),o=new URL(r);return o.searchParams.append("startapp",n),o.toString()}convertToDirectLink(e){const t=new URL(e);return t.searchParams.has("attach")&&(t.searchParams.delete("attach"),t.pathname+="/start"),t.toString()}openGateways(e,t){return zj(this,0,void 0,(function*(){return Array.isArray(this.walletConnectionSource)?(this.pendingGateways.map((e=>e.close().catch())),this.pendingGateways=this.walletConnectionSource.map((t=>{const n=new mN(this.storage,t.bridgeUrl,e.sessionId,(()=>{}),(()=>{}));return n.setListener((e=>this.pendingGatewaysListener(n,t.bridgeUrl,e))),n})),void(yield Promise.allSettled(this.pendingGateways.map((e=>fN((n=>{var r;return this.pendingGateways.some((t=>t===e))?e.registerSession({openingDeadlineMS:null!==(r=null==t?void 0:t.openingDeadlineMS)&&void 0!==r?r:this.defaultOpeningDeadlineMS,signal:n.signal}):e.close()}),{attempts:Number.MAX_SAFE_INTEGER,delayMs:this.defaultRetryTimeoutMS,signal:null==t?void 0:t.signal})))))):(this.gateway&&(hN("Gateway is already opened, closing previous gateway"),yield this.gateway.close()),this.gateway=new mN(this.storage,this.walletConnectionSource.bridgeUrl,e.sessionId,this.gatewayListener.bind(this),this.gatewayErrorsListener.bind(this)),yield this.gateway.registerSession({openingDeadlineMS:null==t?void 0:t.openingDeadlineMS,signal:null==t?void 0:t.signal}))}))}closeGateways(e){var t;null===(t=this.gateway)||void 0===t||t.close(),this.pendingGateways.filter((t=>t!==(null==e?void 0:e.except))).forEach((e=>e.close())),this.pendingGateways=[]}}function wN(e,t){return xN(e,[t])}function xN(e,t){return!(!e||"object"!=typeof e)&&t.every((t=>t in e))}let SN=class e{constructor(){this.storage={}}static getInstance(){return e.instance||(e.instance=new e),e.instance}get length(){return Object.keys(this.storage).length}clear(){this.storage={}}getItem(e){var t;return null!==(t=this.storage[e])&&void 0!==t?t:null}key(e){var t;const n=Object.keys(this.storage);return e<0||e>=n.length?null:null!==(t=n[e])&&void 0!==t?t:null}removeItem(e){delete this.storage[e]}setItem(e,t){this.storage[e]=t}};function kN(){if("undefined"!=typeof window)return window}function CN(){if("undefined"!=typeof document)return document}function _N(){var e;const t=null===(e=kN())||void 0===e?void 0:e.location.origin;return t?t+"/tonconnect-manifest.json":""}function EN(){if(function(){try{return"undefined"!=typeof localStorage}catch(gL){return!1}}())return localStorage;if("undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node)throw new Fj("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");return SN.getInstance()}class AN{constructor(e,t){this.injectedWalletKey=t,this.type="injected",this.unsubscribeCallback=null,this.listenSubscriptions=!1,this.listeners=[];const n=AN.window;if(!AN.isWindowContainsWallet(n,t))throw new Qj;this.connectionStorage=new bN(e),this.injectedWallet=n[t].tonconnect}static fromStorage(e){return zj(this,0,void 0,(function*(){const t=new bN(e),n=yield t.getInjectedConnection();return new AN(e,n.jsBridgeKey)}))}static isWalletInjected(e){return AN.isWindowContainsWallet(this.window,e)}static isInsideWalletBrowser(e){return!!AN.isWindowContainsWallet(this.window,e)&&this.window[e].tonconnect.isWalletBrowser}static getCurrentlyInjectedWallets(){if(!this.window)return[];return function(){const e=kN();if(!e)return[];try{return Object.keys(e)}catch(gL){return[]}}().filter((([e,t])=>function(e){try{return!(!wN(e,"tonconnect")||!wN(e.tonconnect,"walletInfo"))&&xN(e.tonconnect.walletInfo,["name","app_name","image","about_url","platforms"])}catch(gL){return!1}}(t))).map((([e,t])=>({name:t.tonconnect.walletInfo.name,appName:t.tonconnect.walletInfo.app_name,aboutUrl:t.tonconnect.walletInfo.about_url,imageUrl:t.tonconnect.walletInfo.image,tondns:t.tonconnect.walletInfo.tondns,jsBridgeKey:e,injected:!0,embedded:t.tonconnect.isWalletBrowser,platforms:t.tonconnect.walletInfo.platforms})))}static isWindowContainsWallet(e,t){return!!e&&t in e&&"object"==typeof e[t]&&"tonconnect"in e[t]}connect(e){this._connect(2,e)}restoreConnection(){return zj(this,0,void 0,(function*(){try{hN("Injected Provider restoring connection...");const e=yield this.injectedWallet.restoreConnection();hN("Injected Provider restoring connection response",e),"connect"===e.event?(this.makeSubscriptions(),this.listeners.forEach((t=>t(e)))):yield this.connectionStorage.removeConnection()}catch(dP){yield this.connectionStorage.removeConnection(),console.error(dP)}}))}closeConnection(){this.listenSubscriptions&&this.injectedWallet.disconnect(),this.closeAllListeners()}disconnect(){return zj(this,0,void 0,(function*(){return new Promise((e=>{const t=()=>{this.closeAllListeners(),this.connectionStorage.removeConnection().then(e)};try{this.injectedWallet.disconnect(),t()}catch(dP){hN(dP),this.sendRequest({method:"disconnect",params:[]},t)}}))}))}closeAllListeners(){var e;this.listenSubscriptions=!1,this.listeners=[],null===(e=this.unsubscribeCallback)||void 0===e||e.call(this)}listen(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter((t=>t!==e))}sendRequest(e,t){var n;return zj(this,0,void 0,(function*(){const r={};"function"==typeof t?r.onRequestSent=t:(r.onRequestSent=null==t?void 0:t.onRequestSent,r.signal=null==t?void 0:t.signal);const o=(yield this.connectionStorage.getNextRpcRequestId()).toString();yield this.connectionStorage.increaseNextRpcRequestId(),hN("Send injected-bridge request:",Object.assign(Object.assign({},e),{id:o}));const i=this.injectedWallet.send(Object.assign(Object.assign({},e),{id:o}));return i.then((e=>hN("Wallet message received:",e))),null===(n=null==r?void 0:r.onRequestSent)||void 0===n||n.call(r),i}))}_connect(e,t){return zj(this,0,void 0,(function*(){try{hN(`Injected Provider connect request: protocolVersion: ${e}, message:`,t);const n=yield this.injectedWallet.connect(e,t);hN("Injected Provider connect response:",n),"connect"===n.event&&(yield this.updateSession(),this.makeSubscriptions()),this.listeners.forEach((e=>e(n)))}catch(dP){hN("Injected Provider connect error:",dP);const t={event:"connect_error",payload:{code:0,message:null==dP?void 0:dP.toString()}};this.listeners.forEach((e=>e(t)))}}))}makeSubscriptions(){this.listenSubscriptions=!0,this.unsubscribeCallback=this.injectedWallet.listen((e=>{hN("Wallet message received:",e),this.listenSubscriptions&&this.listeners.forEach((t=>t(e))),"disconnect"===e.event&&this.disconnect()}))}updateSession(){return this.connectionStorage.storeConnection({type:"injected",jsBridgeKey:this.injectedWalletKey,nextRpcRequestId:0})}}AN.window=kN();class TN{constructor(){this.localStorage=EN()}getItem(e){return zj(this,0,void 0,(function*(){return this.localStorage.getItem(e)}))}removeItem(e){return zj(this,0,void 0,(function*(){this.localStorage.removeItem(e)}))}setItem(e,t){return zj(this,0,void 0,(function*(){this.localStorage.setItem(e,t)}))}}function RN(e){return function(e){return"jsBridgeKey"in e}(e)&&e.injected}function jN(e){return RN(e)&&e.embedded}function NN(e){return"bridgeUrl"in e}const LN=[{app_name:"telegram-wallet",name:"Wallet",image:"https://wallet.tg/images/logo-288.png",about_url:"https://wallet.tg/",universal_url:"https://t.me/wallet?attach=wallet",bridge:[{type:"sse",url:"https://bridge.ton.space/bridge"}],platforms:["ios","android","macos","windows","linux"]},{app_name:"tonkeeper",name:"Tonkeeper",image:"https://tonkeeper.com/assets/tonconnect-icon.png",tondns:"tonkeeper.ton",about_url:"https://tonkeeper.com",universal_url:"https://app.tonkeeper.com/ton-connect",deepLink:"tonkeeper-tc://",bridge:[{type:"sse",url:"https://bridge.tonapi.io/bridge"},{type:"js",key:"tonkeeper"}],platforms:["ios","android","chrome","firefox","macos"]},{app_name:"mytonwallet",name:"MyTonWallet",image:"https://static.mytonwallet.io/icon-256.png",about_url:"https://mytonwallet.io",universal_url:"https://connect.mytonwallet.org",bridge:[{type:"js",key:"mytonwallet"},{type:"sse",url:"https://tonconnectbridge.mytonwallet.org/bridge/"}],platforms:["chrome","windows","macos","linux","ios","android","firefox"]},{app_name:"openmask",name:"OpenMask",image:"https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",about_url:"https://www.openmask.app/",bridge:[{type:"js",key:"openmask"}],platforms:["chrome"]},{app_name:"tonhub",name:"Tonhub",image:"https://tonhub.com/tonconnect_logo.png",about_url:"https://tonhub.com",universal_url:"https://tonhub.com/ton-connect",bridge:[{type:"js",key:"tonhub"},{type:"sse",url:"https://connect.tonhubapi.com/tonconnect"}],platforms:["ios","android"]},{app_name:"dewallet",name:"DeWallet",image:"https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",about_url:"https://delabwallet.com",universal_url:"https://t.me/dewallet?attach=wallet",bridge:[{type:"sse",url:"https://sse-bridge.delab.team/bridge"}],platforms:["ios","android"]},{app_name:"xtonwallet",name:"XTONWallet",image:"https://xtonwallet.com/assets/img/icon-256-back.png",about_url:"https://xtonwallet.com",bridge:[{type:"js",key:"xtonwallet"}],platforms:["chrome","firefox"]},{app_name:"tonwallet",name:"TON Wallet",image:"https://wallet.ton.org/assets/ui/qr-logo.png",about_url:"https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",bridge:[{type:"js",key:"tonwallet"}],platforms:["chrome"]},{app_name:"bitgetTonWallet",name:"Bitget Wallet",image:"https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget_wallet_logo_0_gas_fee.png",about_url:"https://web3.bitget.com",deepLink:"bitkeep://",bridge:[{type:"js",key:"bitgetTonWallet"},{type:"sse",url:"https://bridge.tonapi.io/bridge"}],platforms:["ios","android","chrome"],universal_url:"https://bkcode.vip/ton-connect"},{app_name:"safepalwallet",name:"SafePal",image:"https://s.pvcliping.com/web/public_image/SafePal_x288.png",tondns:"",about_url:"https://www.safepal.com",universal_url:"https://link.safepal.io/ton-connect",deepLink:"safepal-tc://",bridge:[{type:"sse",url:"https://ton-bridge.safepal.com/tonbridge/v1/bridge"},{type:"js",key:"safepalwallet"}],platforms:["ios","android","chrome","firefox"]},{app_name:"okxTonWallet",name:"OKX Wallet",image:"https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",about_url:"https://www.okx.com/web3",universal_url:"https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect",bridge:[{type:"js",key:"okxTonWallet"},{type:"sse",url:"https://www.okx.com/tonbridge/discover/rpc/bridge"}],platforms:["chrome","safari","firefox","ios","android"]},{app_name:"okxTonWalletTr",name:"OKX TR Wallet",image:"https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",about_url:"https://tr.okx.com/web3",universal_url:"https://tr.okx.com/download?appendQuery=true&deeplink=okxtr://web3/wallet/tonconnect",bridge:[{type:"js",key:"okxTonWallet"},{type:"sse",url:"https://www.okx.com/tonbridge/discover/rpc/bridge"}],platforms:["chrome","safari","firefox","ios","android"]}];class ON{constructor(e){this.walletsListCache=null,this.walletsListCacheCreationTimestamp=null,this.walletsListSource="https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json",(null==e?void 0:e.walletsListSource)&&(this.walletsListSource=e.walletsListSource),(null==e?void 0:e.cacheTTLMs)&&(this.cacheTTLMs=e.cacheTTLMs)}getWallets(){return zj(this,0,void 0,(function*(){return this.cacheTTLMs&&this.walletsListCacheCreationTimestamp&&Date.now()>this.walletsListCacheCreationTimestamp+this.cacheTTLMs&&(this.walletsListCache=null),this.walletsListCache||(this.walletsListCache=this.fetchWalletsList(),this.walletsListCache.then((()=>{this.walletsListCacheCreationTimestamp=Date.now()})).catch((()=>{this.walletsListCache=null,this.walletsListCacheCreationTimestamp=null}))),this.walletsListCache}))}getEmbeddedWallet(){return zj(this,0,void 0,(function*(){const e=(yield this.getWallets()).filter(jN);return 1!==e.length?null:e[0]}))}fetchWalletsList(){return zj(this,0,void 0,(function*(){let e=[];try{const t=yield fetch(this.walletsListSource);if(e=yield t.json(),!Array.isArray(e))throw new Xj("Wrong wallets list format, wallets list must be an array.");const n=e.filter((e=>!this.isCorrectWalletConfigDTO(e)));n.length&&(gN(`Wallet(s) ${n.map((e=>e.name)).join(", ")} config format is wrong. They were removed from the wallets list.`),e=e.filter((e=>this.isCorrectWalletConfigDTO(e))))}catch(dP){gN(dP),e=LN}let t=[];try{t=AN.getCurrentlyInjectedWallets()}catch(dP){gN(dP)}return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(e),t)}))}walletConfigDTOListToWalletConfigList(e){return e.map((e=>{const t={name:e.name,appName:e.app_name,imageUrl:e.image,aboutUrl:e.about_url,tondns:e.tondns,platforms:e.platforms};return e.bridge.forEach((n=>{if("sse"===n.type&&(t.bridgeUrl=n.url,t.universalLink=e.universal_url,t.deepLink=e.deepLink),"js"===n.type){const e=n.key;t.jsBridgeKey=e,t.injected=AN.isWalletInjected(e),t.embedded=AN.isInsideWalletBrowser(e)}})),t}))}mergeWalletsLists(e,t){return[...new Set(e.concat(t).map((e=>e.name))).values()].map((n=>{const r=e.find((e=>e.name===n)),o=t.find((e=>e.name===n));return Object.assign(Object.assign({},r&&Object.assign({},r)),o&&Object.assign({},o))}))}isCorrectWalletConfigDTO(e){if(!e||"object"!=typeof e)return!1;if(!("name"in e&&"image"in e&&"about_url"in e&&"platforms"in e&&"app_name"in e))return!1;if(!e.platforms||!Array.isArray(e.platforms)||!e.platforms.length)return!1;if(!("bridge"in e)||!Array.isArray(e.bridge)||!e.bridge.length)return!1;const t=e.bridge;if(t.some((e=>!e||"object"!=typeof e||!("type"in e))))return!1;const n=t.find((e=>"sse"===e.type));if(n&&(!("url"in n)||!n.url||!e.universal_url))return!1;const r=t.find((e=>"js"===e.type));return!!(!r||"key"in r&&r.key)}}class PN extends Fj{get info(){return"Wallet doesn't support requested feature method."}constructor(...e){super(...e),Object.setPrototypeOf(this,PN.prototype)}}function IN(e,t){const n=e.includes("SendTransaction"),r=e.find((e=>e&&"object"==typeof e&&"SendTransaction"===e.name));if(!n&&!r)throw new PN("Wallet doesn't support SendTransaction feature.");if(r&&void 0!==r.maxMessages){if(r.maxMessages<t.requiredMessagesNumber)throw new PN(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`)}else!function(...e){try{console.warn("[TON_CONNECT_SDK]",...e)}catch(gL){}}("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")}function MN(e){return{type:"response-version",version:e}}function $N(e){return{ton_connect_sdk_lib:e.ton_connect_sdk_lib,ton_connect_ui_lib:e.ton_connect_ui_lib}}function DN(e,t){var n,r,o,i,a,s,l,c;const u=(null===(n=null==t?void 0:t.connectItems)||void 0===n?void 0:n.tonProof)&&"proof"in t.connectItems.tonProof?"ton_proof":"ton_addr";return{wallet_address:null!==(o=null===(r=null==t?void 0:t.account)||void 0===r?void 0:r.address)&&void 0!==o?o:null,wallet_type:null!==(i=null==t?void 0:t.device.appName)&&void 0!==i?i:null,wallet_version:null!==(a=null==t?void 0:t.device.appVersion)&&void 0!==a?a:null,auth_type:u,custom_data:Object.assign({chain_id:null!==(l=null===(s=null==t?void 0:t.account)||void 0===s?void 0:s.chain)&&void 0!==l?l:null,provider:null!==(c=null==t?void 0:t.provider)&&void 0!==c?c:null},$N(e))}}function UN(e){return{type:"connection-started",custom_data:$N(e)}}function BN(e,t){return Object.assign({type:"connection-completed",is_success:!0},DN(e,t))}function zN(e,t,n){return{type:"connection-error",is_success:!1,error_message:t,error_code:null!=n?n:null,custom_data:$N(e)}}function FN(e){return{type:"connection-restoring-started",custom_data:$N(e)}}function VN(e,t){return Object.assign({type:"connection-restoring-completed",is_success:!0},DN(e,t))}function WN(e,t){return{type:"connection-restoring-error",is_success:!1,error_message:t,custom_data:$N(e)}}function HN(e,t){var n,r,o,i;return{valid_until:null!==(n=String(t.validUntil))&&void 0!==n?n:null,from:null!==(i=null!==(r=t.from)&&void 0!==r?r:null===(o=null==e?void 0:e.account)||void 0===o?void 0:o.address)&&void 0!==i?i:null,messages:t.messages.map((e=>{var t,n;return{address:null!==(t=e.address)&&void 0!==t?t:null,amount:null!==(n=e.amount)&&void 0!==n?n:null}}))}}function qN(e,t,n){return Object.assign(Object.assign({type:"transaction-sent-for-signature"},DN(e,t)),HN(t,n))}function KN(e,t,n,r){return Object.assign(Object.assign({type:"transaction-signed",is_success:!0,signed_transaction:r.boc},DN(e,t)),HN(t,n))}function GN(e,t,n,r,o){return Object.assign(Object.assign({type:"transaction-signing-failed",is_success:!1,error_message:r,error_code:null!=o?o:null},DN(e,t)),HN(t,n))}function YN(e,t,n){return Object.assign({type:"disconnection",scope:n},DN(e,t))}class ZN{constructor(){this.window=kN()}dispatchEvent(e,t){var n;return zj(this,0,void 0,(function*(){const r=new CustomEvent(e,{detail:t});null===(n=this.window)||void 0===n||n.dispatchEvent(r)}))}addEventListener(e,t,n){var r;return zj(this,0,void 0,(function*(){return null===(r=this.window)||void 0===r||r.addEventListener(e,t,n),()=>{var n;return null===(n=this.window)||void 0===n?void 0:n.removeEventListener(e,t)}}))}}class QN{constructor(e){var t;this.eventPrefix="ton-connect-",this.tonConnectUiVersion=null,this.eventDispatcher=null!==(t=null==e?void 0:e.eventDispatcher)&&void 0!==t?t:new ZN,this.tonConnectSdkVersion=e.tonConnectSdkVersion,this.init().catch()}get version(){return $N({ton_connect_sdk_lib:this.tonConnectSdkVersion,ton_connect_ui_lib:this.tonConnectUiVersion})}init(){return zj(this,0,void 0,(function*(){try{yield this.setRequestVersionHandler(),this.tonConnectUiVersion=yield this.requestTonConnectUiVersion()}catch(dP){}}))}setRequestVersionHandler(){return zj(this,0,void 0,(function*(){yield this.eventDispatcher.addEventListener("ton-connect-request-version",(()=>zj(this,0,void 0,(function*(){yield this.eventDispatcher.dispatchEvent("ton-connect-response-version",MN(this.tonConnectSdkVersion))}))))}))}requestTonConnectUiVersion(){return zj(this,0,void 0,(function*(){return new Promise(((e,t)=>zj(this,0,void 0,(function*(){try{yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version",(t=>{e(t.detail.version)}),{once:!0}),yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version",{type:"request-version"})}catch(dP){t(dP)}}))))}))}dispatchUserActionEvent(e){try{this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${e.type}`,e).catch()}catch(dP){}}trackConnectionStarted(...e){try{const t=UN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackConnectionCompleted(...e){try{const t=BN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackConnectionError(...e){try{const t=zN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackConnectionRestoringStarted(...e){try{const t=FN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackConnectionRestoringCompleted(...e){try{const t=VN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackConnectionRestoringError(...e){try{const t=WN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackDisconnection(...e){try{const t=YN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackTransactionSentForSignature(...e){try{const t=qN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackTransactionSigned(...e){try{const t=KN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}trackTransactionSigningFailed(...e){try{const t=GN(this.version,...e);this.dispatchUserActionEvent(t)}catch(dP){}}}class XN{constructor(e){if(this.walletsList=new ON,this._wallet=null,this.provider=null,this.statusChangeSubscriptions=[],this.statusChangeErrorSubscriptions=[],this.dappSettings={manifestUrl:(null==e?void 0:e.manifestUrl)||_N(),storage:(null==e?void 0:e.storage)||new TN},this.walletsList=new ON({walletsListSource:null==e?void 0:e.walletsListSource,cacheTTLMs:null==e?void 0:e.walletsListCacheTTLMs}),this.tracker=new QN({eventDispatcher:null==e?void 0:e.eventDispatcher,tonConnectSdkVersion:"3.0.5"}),!this.dappSettings.manifestUrl)throw new Vj("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");this.bridgeConnectionStorage=new bN(this.dappSettings.storage),(null==e?void 0:e.disableAutoPauseConnection)||this.addWindowFocusAndBlurSubscriptions()}static getWallets(){return this.walletsList.getWallets()}get connected(){return null!==this._wallet}get account(){var e;return(null===(e=this._wallet)||void 0===e?void 0:e.account)||null}get wallet(){return this._wallet}set wallet(e){this._wallet=e,this.statusChangeSubscriptions.forEach((e=>e(this._wallet)))}getWallets(){return this.walletsList.getWallets()}onStatusChange(e,t){return this.statusChangeSubscriptions.push(e),t&&this.statusChangeErrorSubscriptions.push(t),()=>{this.statusChangeSubscriptions=this.statusChangeSubscriptions.filter((t=>t!==e)),t&&(this.statusChangeErrorSubscriptions=this.statusChangeErrorSubscriptions.filter((e=>e!==t)))}}connect(e,t){var n,r;const o={};if("object"==typeof t&&"tonProof"in t&&(o.request=t),"object"==typeof t&&("openingDeadlineMS"in t||"signal"in t||"request"in t)&&(o.request=null==t?void 0:t.request,o.openingDeadlineMS=null==t?void 0:t.openingDeadlineMS,o.signal=null==t?void 0:t.signal),this.connected)throw new qj;const i=pN(null==o?void 0:o.signal);if(null===(n=this.abortController)||void 0===n||n.abort(),this.abortController=i,i.signal.aborted)throw new Fj("Connection was aborted");return null===(r=this.provider)||void 0===r||r.closeConnection(),this.provider=this.createProvider(e),i.signal.addEventListener("abort",(()=>{var e;null===(e=this.provider)||void 0===e||e.closeConnection(),this.provider=null})),this.tracker.trackConnectionStarted(),this.provider.connect(this.createConnectRequest(null==o?void 0:o.request),{openingDeadlineMS:null==o?void 0:o.openingDeadlineMS,signal:i.signal})}restoreConnection(e){var t,n;return zj(this,0,void 0,(function*(){this.tracker.trackConnectionRestoringStarted();const r=pN(null==e?void 0:e.signal);if(null===(t=this.abortController)||void 0===t||t.abort(),this.abortController=r,r.signal.aborted)return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");const[o,i]=yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(),this.walletsList.getEmbeddedWallet()]);if(r.signal.aborted)return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");let a=null;try{switch(o){case"http":a=yield yN.fromStorage(this.dappSettings.storage);break;case"injected":a=yield AN.fromStorage(this.dappSettings.storage);break;default:if(!i)return;a=this.createProvider(i)}}catch(vL){return this.tracker.trackConnectionRestoringError("Provider is not restored"),yield this.bridgeConnectionStorage.removeConnection(),null==a||a.closeConnection(),void(a=null)}if(r.signal.aborted)return null==a||a.closeConnection(),void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");if(!a)return gN("Provider is not restored"),void this.tracker.trackConnectionRestoringError("Provider is not restored");null===(n=this.provider)||void 0===n||n.closeConnection(),this.provider=a,a.listen(this.walletEventsListener.bind(this));const s=()=>{this.tracker.trackConnectionRestoringError("Connection restoring was aborted"),null==a||a.closeConnection(),a=null};r.signal.addEventListener("abort",s);const l=fN((t=>zj(this,0,void 0,(function*(){yield null==a?void 0:a.restoreConnection({openingDeadlineMS:null==e?void 0:e.openingDeadlineMS,signal:t.signal}),r.signal.removeEventListener("abort",s),this.connected?this.tracker.trackConnectionRestoringCompleted(this.wallet):this.tracker.trackConnectionRestoringError("Connection restoring failed")}))),{attempts:Number.MAX_SAFE_INTEGER,delayMs:2e3,signal:null==e?void 0:e.signal}),c=new Promise((e=>setTimeout((()=>e()),12e3)));return Promise.race([l,c])}))}sendTransaction(e,t){return zj(this,0,void 0,(function*(){const n={};"function"==typeof t?n.onRequestSent=t:(n.onRequestSent=null==t?void 0:t.onRequestSent,n.signal=null==t?void 0:t.signal);const r=pN(null==n?void 0:n.signal);if(r.signal.aborted)throw new Fj("Transaction sending was aborted");this.checkConnection(),IN(this.wallet.device.features,{requiredMessagesNumber:e.messages.length}),this.tracker.trackTransactionSentForSignature(this.wallet,e);const{validUntil:o}=e,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["validUntil"]),a=e.from||this.account.address,s=e.network||this.account.chain,l=yield this.provider.sendRequest(aN.convertToRpcRequest(Object.assign(Object.assign({},i),{valid_until:o,from:a,network:s})),{onRequestSent:n.onRequestSent,signal:r.signal});if(aN.isError(l))return this.tracker.trackTransactionSigningFailed(this.wallet,e,l.error.message,l.error.code),aN.parseAndThrowError(l);const c=aN.convertFromRpcResponse(l);return this.tracker.trackTransactionSigned(this.wallet,e,c),c}))}disconnect(e){var t;return zj(this,0,void 0,(function*(){if(!this.connected)throw new Kj;const n=pN(null==e?void 0:e.signal),r=this.abortController;if(this.abortController=n,n.signal.aborted)throw new Fj("Disconnect was aborted");this.onWalletDisconnected("dapp"),yield null===(t=this.provider)||void 0===t?void 0:t.disconnect({signal:n.signal}),null==r||r.abort()}))}pauseConnection(){var e;"http"===(null===(e=this.provider)||void 0===e?void 0:e.type)&&this.provider.pause()}unPauseConnection(){var e;return"http"!==(null===(e=this.provider)||void 0===e?void 0:e.type)?Promise.resolve():this.provider.unPause()}addWindowFocusAndBlurSubscriptions(){const e=CN();if(e)try{e.addEventListener("visibilitychange",(()=>{e.hidden?this.pauseConnection():this.unPauseConnection().catch()}))}catch(dP){gN("Cannot subscribe to the document.visibilitychange: ",dP)}}createProvider(e){let t;return t=!Array.isArray(e)&&"jsBridgeKey"in e?new AN(this.dappSettings.storage,e.jsBridgeKey):new yN(this.dappSettings.storage,e),t.listen(this.walletEventsListener.bind(this)),t}walletEventsListener(e){switch(e.event){case"connect":this.onWalletConnected(e.payload);break;case"connect_error":this.onWalletConnectError(e.payload);break;case"disconnect":this.onWalletDisconnected("wallet")}}onWalletConnected(e){const t=e.items.find((e=>"ton_addr"===e.name)),n=e.items.find((e=>"ton_proof"===e.name));if(!t)throw new Fj("ton_addr connection item was not found");const r={device:e.device,provider:this.provider.type,account:{address:t.address,chain:t.network,walletStateInit:t.walletStateInit,publicKey:t.publicKey}};n&&(r.connectItems={tonProof:n}),this.wallet=r,this.tracker.trackConnectionCompleted(r)}onWalletConnectError(e){const t=rN.parseError(e);if(this.statusChangeErrorSubscriptions.forEach((e=>e(t))),hN(t),this.tracker.trackConnectionError(e.message,e.code),t instanceof Hj||t instanceof Wj)throw gN(t),t}onWalletDisconnected(e){this.tracker.trackDisconnection(this.wallet,e),this.wallet=null}checkConnection(){if(!this.connected)throw new Kj}createConnectRequest(e){const t=[{name:"ton_addr"}];return(null==e?void 0:e.tonProof)&&t.push({name:"ton_proof",payload:e.tonProof}),{manifestUrl:this.dappSettings.manifestUrl,items:t}}}XN.walletsList=new ON,XN.isWalletInjected=e=>AN.isWalletInjected(e),XN.isInsideWalletBrowser=e=>AN.isInsideWalletBrowser(e);function JN(e,t=!1){const{wc:n,hex:r}=function(e){if(!e.includes(":"))throw new Jj(`Wrong address ${e}. Address must include ":".`);const t=e.split(":");if(2!==t.length)throw new Jj(`Wrong address ${e}. Address must include ":" only once.`);const n=parseInt(t[0]);if(0!==n&&-1!==n)throw new Jj(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);const r=t[1];if(64!==(null==r?void 0:r.length))throw new Jj(`Wrong address ${e}. Hex part must be 64bytes length, but ${null==r?void 0:r.length} received.`);return{wc:n,hex:tL(r)}}(e);let o=81;t&&(o|=128);const i=new Int8Array(34);i[0]=o,i[1]=n,i.set(r,2);const a=new Uint8Array(36);return a.set(i),a.set(function(e){const t=4129;let n=0;const r=new Uint8Array(e.length+2);r.set(e);for(let o of r){let e=128;for(;e>0;)n<<=1,o&e&&(n+=1),e>>=1,n>65535&&(n&=65535,n^=t)}return new Uint8Array([Math.floor(n/256),n%256])}(i),34),$j.encode(a).replace(/\+/g,"-").replace(/\//g,"_")}const eL={};for(let CK=0;CK<=255;CK++){let e=CK.toString(16);e.length<2&&(e="0"+e),eL[e]=CK}function tL(e){const t=(e=e.toLowerCase()).length;if(t%2!=0)throw new eN("Hex string must have length a multiple of 2: "+e);const n=t/2,r=new Uint8Array(n);for(let o=0;o<n;o++){const t=2*o,n=e.substring(t,t+2);if(!eL.hasOwnProperty(n))throw new eN("Invalid hex character: "+n);r[o]=eL[n]}return r}var nL={exports:{}};!function(e,n){!function(t,r){var o="function",i="undefined",a="object",s="string",l="major",c="model",u="name",d="type",p="vendor",f="version",h="architecture",g="console",m="mobile",v="tablet",b="smarttv",y="wearable",w="embedded",x="Amazon",S="Apple",k="ASUS",C="BlackBerry",_="Browser",E="Chrome",A="Firefox",T="Google",R="Huawei",j="LG",N="Microsoft",L="Motorola",O="Opera",P="Samsung",I="Sharp",M="Sony",$="Xiaomi",D="Zebra",U="Facebook",B="Chromium OS",z="Mac OS",F=" Browser",V=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},W=function(e,t){return typeof e===s&&-1!==H(t).indexOf(H(e))},H=function(e){return e.toLowerCase()},q=function(e,t){if(typeof e===s)return e=e.replace(/^\s\s*/,""),typeof t===i?e:e.substring(0,500)},K=function(e,t){for(var n,i,s,l,c,u,d=0;d<t.length&&!c;){var p=t[d],f=t[d+1];for(n=i=0;n<p.length&&!c&&p[n];)if(c=p[n++].exec(e))for(s=0;s<f.length;s++)u=c[++i],typeof(l=f[s])===a&&l.length>0?2===l.length?typeof l[1]==o?this[l[0]]=l[1].call(this,u):this[l[0]]=l[1]:3===l.length?typeof l[1]!==o||l[1].exec&&l[1].test?this[l[0]]=u?u.replace(l[1],l[2]):r:this[l[0]]=u?l[1].call(this,u,l[2]):r:4===l.length&&(this[l[0]]=u?l[3].call(this,u.replace(l[1],l[2])):r):this[l]=u||r;d+=2}},G=function(e,t){for(var n in t)if(typeof t[n]===a&&t[n].length>0){for(var o=0;o<t[n].length;o++)if(W(t[n][o],e))return"?"===n?r:n}else if(W(t[n],e))return"?"===n?r:n;return t.hasOwnProperty("*")?t["*"]:e},Y={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,f],[/opios[\/ ]+([\w\.]+)/i],[f,[u,O+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[f,[u,O+" GX"]],[/\bopr\/([\w\.]+)/i],[f,[u,O]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[f,[u,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,f],[/quark(?:pc)?\/([-\w\.]+)/i],[f,[u,"Quark"]],[/\bddg\/([\w\.]+)/i],[f,[u,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[u,"UC"+_]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[f,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[u,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[f,[u,"Smart Lenovo "+_]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+_],f],[/\bfocus\/([\w\.]+)/i],[f,[u,A+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[u,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[u,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[u,"MIUI "+_]],[/fxios\/([-\w\.]+)/i],[f,[u,A]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360"+F]],[/\b(qq)\/([\w\.]+)/i],[[u,/(.+)/,"$1Browser"],f],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1"+F],f],[/samsungbrowser\/([\w\.]+)/i],[f,[u,P+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],f],[/metasr[\/ ]?([\d\.]+)/i],[f,[u,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[u,"Sogou Mobile"],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[u,f],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,U],f],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[u,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[u,E+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,E+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[u,"Android "+_]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[f,G,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],f],[/(wolvic)\/([\w\.]+)/i],[u,f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[u,A+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,[f,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[u,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,H]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,"",H]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,H]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[p,P],[d,v]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[c,[p,P],[d,m]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[p,S],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[p,S],[d,v]],[/(macintosh);/i],[c,[p,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[p,I],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[p,R],[d,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[p,R],[d,m]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[c,/_/g," "],[p,$],[d,m]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[p,$],[d,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[p,"OPPO"],[d,m]],[/\b(opd2\d{3}a?) bui/i],[c,[p,"OPPO"],[d,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[p,"Vivo"],[d,m]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[c,[p,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[p,L],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[p,L],[d,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[p,j],[d,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[p,j],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[p,"Lenovo"],[d,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[p,"Nokia"],[d,m]],[/(pixel c)\b/i],[c,[p,T],[d,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[p,T],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[p,M],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[p,M],[d,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[p,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[p,x],[d,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[p,x],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[c,p,[d,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[p,C],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[p,k],[d,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[p,k],[d,m]],[/(nexus 9)/i],[c,[p,"HTC"],[d,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[c,/_/g," "],[d,m]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[c,[p,"TCL"],[d,v]],[/(itel) ((\w+))/i],[[p,H],c,[d,G,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[p,"Acer"],[d,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[p,"Meizu"],[d,m]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[c,[p,"Ulefone"],[d,m]],[/droid.+; (a(?:015|06[35]|142p?))/i],[c,[p,"Nothing"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,c,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,c,[d,v]],[/(surface duo)/i],[c,[p,N],[d,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[p,"Fairphone"],[d,m]],[/(u304aa)/i],[c,[p,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[c,[p,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[c,[p,"RCA"],[d,v]],[/\b(venue[\d ]{2,7}) b/i],[c,[p,"Dell"],[d,v]],[/\b(q(?:mv|ta)\w+) b/i],[c,[p,"Verizon"],[d,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[p,"Barnes & Noble"],[d,v]],[/\b(tm\d{3}\w+) b/i],[c,[p,"NuVision"],[d,v]],[/\b(k88) b/i],[c,[p,"ZTE"],[d,v]],[/\b(nx\d{3}j) b/i],[c,[p,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[c,[p,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[c,[p,"Swiss"],[d,v]],[/\b((zeki)?tb.*\b) b/i],[c,[p,"Zeki"],[d,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],c,[d,v]],[/\b(ns-?\w{0,9}) b/i],[c,[p,"Insignia"],[d,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[p,"NextBook"],[d,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],c,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],c,[d,m]],[/\b(ph-1) /i],[c,[p,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[p,"Envizen"],[d,v]],[/\b(trio[-\w\. ]+) b/i],[c,[p,"MachSpeed"],[d,v]],[/\btu_(1491) b/i],[c,[p,"Rotor"],[d,v]],[/(shield[\w ]+) b/i],[c,[p,"Nvidia"],[d,v]],[/(sprint) (\w+)/i],[p,c,[d,m]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[p,N],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[p,D],[d,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[p,D],[d,m]],[/smart-tv.+(samsung)/i],[p,[d,b]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[p,P],[d,b]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,j],[d,b]],[/(apple) ?tv/i],[p,[c,S+" TV"],[d,b]],[/crkey/i],[[c,E+"cast"],[p,T],[d,b]],[/droid.+aft(\w+)( bui|\))/i],[c,[p,x],[d,b]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[p,I],[d,b]],[/(bravia[\w ]+)( bui|\))/i],[c,[p,M],[d,b]],[/(mitv-\w{5}) bui/i],[c,[p,$],[d,b]],[/Hbbtv.*(technisat) (.*);/i],[p,c,[d,b]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,q],[c,q],[d,b]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,c,[d,g]],[/droid.+; (shield) bui/i],[c,[p,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[c,[p,M],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[p,N],[d,g]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[c,[p,P],[d,y]],[/((pebble))app/i],[p,c,[d,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[p,S],[d,y]],[/droid.+; (glass) \d/i],[c,[p,T],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[p,D],[d,y]],[/(quest( \d| pro)?)/i],[c,[p,U],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[d,w]],[/(aeobc)\b/i],[c,[p,x],[d,w]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[c,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[d,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,f],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[u,[f,G,Y]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[f,G,Y],[u,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,z],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,f],[/\(bb(10);/i],[f,[u,C]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[u,A+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[u,E+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,B],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,f],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,f]]},Q=function(e,n){if(typeof e===a&&(n=e,e=r),!(this instanceof Q))return new Q(e,n).getResult();var g=typeof t!==i&&t.navigator?t.navigator:r,b=e||(g&&g.userAgent?g.userAgent:""),y=g&&g.userAgentData?g.userAgentData:r,w=n?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(Z,n):Z,x=g&&g.userAgent==b;return this.getBrowser=function(){var e,t={};return t[u]=r,t[f]=r,K.call(t,b,w.browser),t[l]=typeof(e=t[f])===s?e.replace(/[^\d\.]/g,"").split(".")[0]:r,x&&g&&g.brave&&typeof g.brave.isBrave==o&&(t[u]="Brave"),t},this.getCPU=function(){var e={};return e[h]=r,K.call(e,b,w.cpu),e},this.getDevice=function(){var e={};return e[p]=r,e[c]=r,e[d]=r,K.call(e,b,w.device),x&&!e[d]&&y&&y.mobile&&(e[d]=m),x&&"Macintosh"==e[c]&&g&&typeof g.standalone!==i&&g.maxTouchPoints&&g.maxTouchPoints>2&&(e[c]="iPad",e[d]=v),e},this.getEngine=function(){var e={};return e[u]=r,e[f]=r,K.call(e,b,w.engine),e},this.getOS=function(){var e={};return e[u]=r,e[f]=r,K.call(e,b,w.os),x&&!e[u]&&y&&y.platform&&"Unknown"!=y.platform&&(e[u]=y.platform.replace(/chrome os/i,B).replace(/macos/i,z)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return b},this.setUA=function(e){return b=typeof e===s&&e.length>500?q(e,500):e,this},this.setUA(b),this};Q.VERSION="1.0.39",Q.BROWSER=V([u,f,l]),Q.CPU=V([h]),Q.DEVICE=V([c,p,d,g,m,b,v,y,w]),Q.ENGINE=Q.OS=V([u,f]),e.exports&&(n=e.exports=Q),n.UAParser=Q;var X=typeof t!==i&&(t.jQuery||t.Zepto);if(X&&!X.ua){var J=new Q;X.ua=J.getResult(),X.ua.get=function(){return J.getUA()},X.ua.set=function(e){J.setUA(e);var t=J.getResult();for(var n in t)X.ua[n]=t[n]}}}("object"==typeof window?window:t)}(nL,nL.exports);const rL=n(nL.exports);var oL=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===iL}(e)}(e)};var iL="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function aL(e,t){return!1!==t.clone&&t.isMergeableObject(e)?dL((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function sL(e,t,n){return e.concat(t).map((function(e){return aL(e,n)}))}function lL(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function cL(e,t){try{return t in e}catch(dh){return!1}}function uL(e,t,n){var r={};return n.isMergeableObject(e)&&lL(e).forEach((function(t){r[t]=aL(e[t],n)})),lL(t).forEach((function(o){(function(e,t){return cL(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(cL(e,o)&&n.isMergeableObject(t[o])?r[o]=function(e,t){if(!t.customMerge)return dL;var n=t.customMerge(e);return"function"==typeof n?n:dL}(o,n)(e[o],t[o],n):r[o]=aL(t[o],n))})),r}function dL(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||sL,n.isMergeableObject=n.isMergeableObject||oL,n.cloneUnlessOtherwiseSpecified=aL;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):uL(e,t,n):aL(t,n)}dL.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return dL(e,n,t)}),{})};const pL=n(dL);var fL={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var i in e)t.call(e,i)&&e[i]&&(r=o(r,i));return r}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}(fL);const hL=n(fL.exports);var gL,mL,vL,bL,yL,wL,xL,SL,kL=Object.defineProperty,CL=Object.defineProperties,_L=Object.getOwnPropertyDescriptors,EL=Object.getOwnPropertySymbols,AL=Object.prototype.hasOwnProperty,TL=Object.prototype.propertyIsEnumerable,RL=(e,t,n)=>t in e?kL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jL=(e,t)=>{for(var n in t||(t={}))AL.call(t,n)&&RL(e,n,t[n]);if(EL)for(var n of EL(t))TL.call(t,n)&&RL(e,n,t[n]);return e},NL=(e,t)=>CL(e,_L(t)),LL=(e,t,n)=>(RL(e,"symbol"!=typeof t?t+"":t,n),n),OL=(e,t,n)=>new Promise(((r,o)=>{var i=e=>{try{s(n.next(e))}catch(t){o(t)}},a=e=>{try{s(n.throw(e))}catch(t){o(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,a);s((n=n.apply(e,t)).next())}));const PL={};const IL=Symbol("solid-proxy"),ML=Symbol("solid-track"),$L={equals:(e,t)=>e===t};let DL=vO;const UL=1,BL=2,zL={owned:null,cleanups:null,context:null,owner:null},FL={};var VL=null;let WL,HL=null,qL=null,KL=null,GL=null,YL=0;function ZL(e,t){const n=qL,r=VL,o=0===e.length,i=o?zL:{owned:null,cleanups:null,context:null,owner:void 0===t?r:t},a=o?e:()=>e((()=>oO((()=>xO(i)))));VL=i,qL=null;try{return mO(a,!0)}finally{qL=n,VL=r}}function QL(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},$L,t):$L).equals||void 0};return[dO.bind(n),e=>("function"==typeof e&&(e=e(n.value)),pO(n,e))]}function XL(e,t,n){fO(hO(e,t,!0,UL))}function JL(e,t,n){fO(hO(e,t,!1,UL))}function eO(e,t,n){DL=bO;const r=hO(e,t,!1,UL);r.user=!0,GL?GL.push(r):fO(r)}function tO(e,t,n){n=n?Object.assign({},$L,n):$L;const r=hO(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,fO(r),dO.bind(r)}function nO(e,t,n){let r,o,i;2===arguments.length&&"object"==typeof t||1===arguments.length?(r=!0,o=e,i={}):(r=e,o=t,i={});let a=null,s=FL,l=null,c=!1,u="initialValue"in i,d="function"==typeof r&&tO(r);const p=new Set,[f,h]=(i.storage||QL)(i.initialValue),[g,m]=QL(void 0),[v,b]=QL(void 0,{equals:!1}),[y,w]=QL(u?"ready":"unresolved");if(PL.context){let e;l=`${PL.context.id}${PL.context.count++}`,"initial"===i.ssrLoadFrom?s=i.initialValue:PL.load&&(e=PL.load(l))&&(s=e[0])}function x(e,t,n,r){return a===e&&(a=null,u=!0,e!==s&&t!==s||!i.onHydrated||queueMicrotask((()=>i.onHydrated(r,{value:t}))),s=FL,function(e,t){mO((()=>{void 0===t&&h((()=>e)),w(void 0!==t?"errored":"ready"),m(t);for(const e of p.keys())e.decrement();p.clear()}),!1)}(t,n)),t}function S(){const e=WL,t=f(),n=g();if(void 0!==n&&!a)throw n;return qL&&!qL.user&&e&&XL((()=>{v(),a&&(e.resolved||p.has(e)||(e.increment(),p.add(e)))})),t}function k(e=!0){if(!1!==e&&c)return;c=!1;const t=d?d():r;if(null==t||!1===t)return void x(a,oO(f));const n=s!==FL?s:oO((()=>o(t,{value:f(),refetching:e})));return"object"==typeof n&&n&&"then"in n?(a=n,c=!0,queueMicrotask((()=>c=!1)),mO((()=>{w(u?"refreshing":"pending"),b()}),!1),n.then((e=>x(n,e,void 0,t)),(e=>x(n,void 0,SO(e),t)))):(x(a,n,void 0,t),n)}return Object.defineProperties(S,{state:{get:()=>y()},error:{get:()=>g()},loading:{get(){const e=y();return"pending"===e||"refreshing"===e}},latest:{get(){if(!u)return S();const e=g();if(e&&!a)throw e;return f()}}}),d?XL((()=>k(!1))):k(!1),[S,{refetch:k,mutate:h}]}function rO(e){return mO(e,!1)}function oO(e){if(null===qL)return e();const t=qL;qL=null;try{return e()}finally{qL=t}}function iO(e){eO((()=>oO(e)))}function aO(e){return null===VL||(null===VL.cleanups?VL.cleanups=[e]:VL.cleanups.push(e)),e}function sO(){return qL}function lO(e,t){const n=Symbol("context");return{id:n,Provider:EO(n),defaultValue:e}}function cO(e){let t;return void 0!==(t=CO(VL,e.id))?t:e.defaultValue}function uO(e){const t=tO(e),n=tO((()=>_O(t())));return n.toArray=()=>{const e=n();return Array.isArray(e)?e:null!=e?[e]:[]},n}function dO(){const e=HL;if(this.sources&&(this.state||e))if(this.state===UL||e)fO(this);else{const e=KL;KL=null,mO((()=>yO(this)),!1),KL=e}if(qL){const e=this.observers?this.observers.length:0;qL.sources?(qL.sources.push(this),qL.sourceSlots.push(e)):(qL.sources=[this],qL.sourceSlots=[e]),this.observers?(this.observers.push(qL),this.observerSlots.push(qL.sources.length-1)):(this.observers=[qL],this.observerSlots=[qL.sources.length-1])}return this.value}function pO(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&mO((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=HL&&HL.running;r&&HL.disposed.has(n),(r&&!n.tState||!r&&!n.state)&&(n.pure?KL.push(n):GL.push(n),n.observers&&wO(n)),r||(n.state=UL)}if(KL.length>1e6)throw KL=[],new Error}),!1)),t}function fO(e){if(!e.fn)return;xO(e);const t=VL,n=qL,r=YL;qL=VL=e,function(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(e.state=UL,e.owned&&e.owned.forEach(xO),e.owned=null),kO(o)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?pO(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),qL=n,VL=t}function hO(e,t,n,r=UL,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:VL,context:null,pure:n};return null===VL||VL!==zL&&(VL.owned?VL.owned.push(i):VL.owned=[i]),i}function gO(e){const t=HL;if(0===e.state||t)return;if(e.state===BL||t)return yO(e);if(e.suspense&&oO(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<YL);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if((e=n[r]).state===UL||t)fO(e);else if(e.state===BL||t){const t=KL;KL=null,mO((()=>yO(e,n[0])),!1),KL=t}}function mO(e,t){if(KL)return e();let n=!1;t||(KL=[]),GL?n=!0:GL=[],YL++;try{const t=e();return function(e){KL&&(vO(KL),KL=null);if(e)return;const t=GL;GL=null,t.length&&mO((()=>DL(t)),!1)}(n),t}catch(r){n||(GL=null),KL=null,kO(r)}}function vO(e){for(let t=0;t<e.length;t++)gO(e[t])}function bO(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:gO(r)}for(PL.context&&function(e){PL.context=e}(),t=0;t<n;t++)gO(e[t])}function yO(e,t){const n=HL;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===UL||n?o!==t&&gO(o):(o.state===BL||n)&&yO(o,t))}}function wO(e){const t=HL;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];r.state&&!t||(r.state=BL,r.pure?KL.push(r):GL.push(r),r.observers&&wO(r))}}function xO(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)xO(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function SO(e){return e instanceof Error||"string"==typeof e?e:new Error("Unknown error")}function kO(e){throw e=SO(e)}function CO(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:CO(e.owner,t):void 0}function _O(e){if("function"==typeof e&&!e.length)return _O(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=_O(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function EO(e,t){return function(t){let n;return JL((()=>n=oO((()=>(VL.context={[e]:t.value},uO((()=>t.children)))))),void 0),n}}const AO=Symbol("fallback");function TO(e){for(let t=0;t<e.length;t++)e[t]()}function RO(e,t){return oO((()=>e(t||{})))}function jO(){return!0}const NO={get:(e,t,n)=>t===IL?n:e.get(t),has:(e,t)=>t===IL||e.has(t),set:jO,deleteProperty:jO,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:jO,deleteProperty:jO}),ownKeys:e=>e.keys()};function LO(e){return(e="function"==typeof e?e():e)?e:{}}function OO(...e){let t=!1;for(let r=0;r<e.length;r++){const n=e[r];t=t||!!n&&IL in n,e[r]="function"==typeof n?(t=!0,tO(n)):n}if(t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=LO(e[n])[t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in LO(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(LO(e[n])));return[...new Set(t)]}},NO);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const t=Object.getOwnPropertyDescriptors(e[r]);for(const r in t)r in n||Object.defineProperty(n,r,{enumerable:!0,get(){for(let t=e.length-1;t>=0;t--){const n=(e[t]||{})[r];if(void 0!==n)return n}}})}return n}function PO(e,...t){const n=new Set(t.flat());if(IL in e){const r=t.map((t=>new Proxy({get:n=>t.includes(n)?e[n]:void 0,has:n=>t.includes(n)&&n in e,keys:()=>t.filter((t=>t in e))},NO)));return r.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter((e=>!n.has(e)))},NO)),r}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter((e=>!n.has(e)))),t.map((t=>{const n={};for(let o=0;o<t.length;o++){const i=t[o];i in e&&Object.defineProperty(n,i,r[i]?r[i]:{get:()=>e[i],set:()=>!0,enumerable:!0})}return n}))}function IO(e){const t="fallback"in e&&{fallback:()=>e.fallback};return tO(function(e,t,n={}){let r=[],o=[],i=[],a=0,s=t.length>1?[]:null;return aO((()=>TO(i))),()=>{let l,c,u=e()||[];return u[ML],oO((()=>{let e,t,p,f,h,g,m,v,b,y=u.length;if(0===y)0!==a&&(TO(i),i=[],r=[],o=[],a=0,s&&(s=[])),n.fallback&&(r=[AO],o[0]=ZL((e=>(i[0]=e,n.fallback()))),a=1);else if(0===a){for(o=new Array(y),c=0;c<y;c++)r[c]=u[c],o[c]=ZL(d);a=y}else{for(p=new Array(y),f=new Array(y),s&&(h=new Array(y)),g=0,m=Math.min(a,y);g<m&&r[g]===u[g];g++);for(m=a-1,v=y-1;m>=g&&v>=g&&r[m]===u[v];m--,v--)p[v]=o[m],f[v]=i[m],s&&(h[v]=s[m]);for(e=new Map,t=new Array(v+1),c=v;c>=g;c--)b=u[c],l=e.get(b),t[c]=void 0===l?-1:l,e.set(b,c);for(l=g;l<=m;l++)b=r[l],c=e.get(b),void 0!==c&&-1!==c?(p[c]=o[l],f[c]=i[l],s&&(h[c]=s[l]),c=t[c],e.set(b,c)):i[l]();for(c=g;c<y;c++)c in p?(o[c]=p[c],i[c]=f[c],s&&(s[c]=h[c],s[c](c))):o[c]=ZL(d);o=o.slice(0,a=y),r=u.slice(0)}return o}));function d(e){if(i[c]=e,s){const[e,n]=QL(c);return s[c]=n,t(u[c],e)}return t(u[c])}}}((()=>e.each),e.children,t||void 0))}function MO(e){let t=!1;const n=e.keyed,r=tO((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return tO((()=>{const o=r();if(o){const r=e.children,i="function"==typeof r&&r.length>0;return t=n||i,i?oO((()=>r(o))):r}return e.fallback}),void 0,void 0)}function $O(e){let t=!1,n=!1;const r=uO((()=>e.children)),o=tO((()=>{let e=r();Array.isArray(e)||(e=[e]);for(let t=0;t<e.length;t++){const r=e[t].when;if(r)return n=!!e[t].keyed,[t,r,e[t]]}return[-1]}),void 0,{equals:(e,n)=>e[0]===n[0]&&(t?e[1]===n[1]:!e[1]==!n[1])&&e[2]===n[2]});return tO((()=>{const[r,i,a]=o();if(r<0)return e.fallback;const s=a.children,l="function"==typeof s&&s.length>0;return t=n||l,l?oO((()=>s(i))):s}),void 0,void 0)}function DO(e){return e}const UO=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),BO=new Set(["innerHTML","textContent","innerText","children"]),zO=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),FO=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),VO=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),WO=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),HO={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};const qO="_$DX_DELEGATE";function KO(e,t,n){if("undefined"==typeof window)return null;const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function GO(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function YO(e,t){null==t?e.removeAttribute("class"):e.className=t}function ZO(e,t={},n,r){const o={};return JL((()=>o.children=rP(e,t.children,o.children))),JL((()=>t.ref&&t.ref(e))),JL((()=>function(e,t,n,r,o={},i=!1){t||(t={});for(const a in o)if(!(a in t)){if("children"===a)continue;o[a]=tP(e,a,null,o[a],n,i)}for(const a in t){if("children"===a)continue;const r=t[a];o[a]=tP(e,a,r,o[a],n,i)}}(e,t,n,0,o,!0))),o}function QO(e,t,n){return oO((()=>e(t,n)))}function XO(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return rP(e,t,r,n);JL((r=>rP(e,t(),r,n)),r)}function JO(e){let t,n;return PL.context&&(t=PL.registry.get(n=function(){const e=PL.context;return`${e.id}${e.count++}`}()))?(PL.completed&&PL.completed.add(t),PL.registry.delete(n),t):e.cloneNode(!0)}function eP(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function tP(e,t,n,r,o,i){let a,s,l;if("style"===t)return function(e,t,n){if(!t)return n?GO(e,"style"):t;const r=e.style;if("string"==typeof t)return r.cssText=t;let o,i;for(i in"string"==typeof n&&(r.cssText=n=void 0),n||(n={}),t||(t={}),n)null==t[i]&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}(e,n,r);if("classList"===t)return function(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,a;for(i=0,a=o.length;i<a;i++){const r=o[i];r&&"undefined"!==r&&!t[r]&&(eP(e,r,!1),delete n[r])}for(i=0,a=r.length;i<a;i++){const o=r[i],a=!!t[o];o&&"undefined"!==o&&n[o]!==a&&a&&(eP(e,o,!0),n[o]=a)}return n}(e,n,r);if(n===r)return r;if("ref"===t)i||n(e);else if("on:"===t.slice(0,3)){const o=t.slice(3);r&&e.removeEventListener(o,r),n&&e.addEventListener(o,n)}else if("oncapture:"===t.slice(0,10)){const o=t.slice(10);r&&e.removeEventListener(o,r,!0),n&&e.addEventListener(o,n,!0)}else if("on"===t.slice(0,2)){const o=t.slice(2).toLowerCase(),i=VO.has(o);if(!i&&r){const t=Array.isArray(r)?r[0]:r;e.removeEventListener(o,t)}(i||n)&&(function(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n)}(e,o,n,i),i&&function(e,t=window.document){const n=t[qO]||(t[qO]=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,nP))}}([o]))}else if((l=BO.has(t))||!o&&(FO[t]||(s=UO.has(t)))||(a=e.nodeName.includes("-")))"class"===t||"className"===t?YO(e,n):!a||s||l?e[FO[t]||t]=n:e[(c=t,c.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=n;else{const r=o&&t.indexOf(":")>-1&&HO[t.split(":")[0]];r?function(e,t,n,r){null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}(e,r,t,n):GO(e,zO[t]||t,n)}var c;return n}function nP(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document}),PL.registry&&!PL.done&&(PL.done=!0,document.querySelectorAll("[id^=pl-]").forEach((t=>{for(;t&&8!==t.nodeType&&t.nodeValue!=="pl-"+e;){let e=t.nextSibling;t.remove(),t=e}t&&t.remove()})));n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function rP(e,t,n,r,o){for(PL.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;const i=typeof t,a=void 0!==r;if(e=a&&n[0]&&n[0].parentNode||e,"string"===i||"number"===i){if(PL.context)return n;if("number"===i&&(t=t.toString()),a){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=aP(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===i){if(PL.context)return n;n=aP(e,n,r)}else{if("function"===i)return JL((()=>{let o=t();for(;"function"==typeof o;)o=o();n=rP(e,o,n,r)})),()=>n;if(Array.isArray(t)){const i=[],s=n&&Array.isArray(n);if(oP(i,t,n,o))return JL((()=>n=rP(e,i,n,r,!0))),()=>n;if(PL.context){if(!i.length)return n;for(let e=0;e<i.length;e++)if(i[e].parentNode)return n=i}if(0===i.length){if(n=aP(e,n,r),a)return n}else s?0===n.length?iP(e,i,r):function(e,t,n){let r=n.length,o=t.length,i=r,a=0,s=0,l=t[o-1].nextSibling,c=null;for(;a<o||s<i;)if(t[a]!==n[s]){for(;t[o-1]===n[i-1];)o--,i--;if(o===a){const t=i<r?s?n[s-1].nextSibling:n[i-s]:l;for(;s<i;)e.insertBefore(n[s++],t)}else if(i===s)for(;a<o;)c&&c.has(t[a])||t[a].remove(),a++;else if(t[a]===n[i-1]&&n[s]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[s++],t[a++].nextSibling),e.insertBefore(n[--i],r),t[o]=n[i]}else{if(!c){c=new Map;let e=s;for(;e<i;)c.set(n[e],e++)}const r=c.get(t[a]);if(null!=r)if(s<r&&r<i){let l,u=a,d=1;for(;++u<o&&u<i&&null!=(l=c.get(t[u]))&&l===r+d;)d++;if(d>r-s){const o=t[a];for(;s<r;)e.insertBefore(n[s++],o)}else e.replaceChild(n[s++],t[a++])}else a++;else t[a++].remove()}}else a++,s++}(e,n,i):(n&&aP(e),iP(e,i));n=i}else if(t instanceof Node){if(PL.context&&t.parentNode)return n=a?[t]:t;if(Array.isArray(n)){if(a)return n=aP(e,n,r,t);aP(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function oP(e,t,n,r){let o=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],s=n&&n[i];if(a instanceof Node)e.push(a);else if(null==a||!0===a||!1===a);else if(Array.isArray(a))o=oP(e,a,s)||o;else if("function"==typeof a)if(r){for(;"function"==typeof a;)a=a();o=oP(e,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||o}else e.push(a),o=!0;else{const t=String(a);s&&3===s.nodeType&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return o}function iP(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function aP(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(o!==a){const t=a.parentNode===e;r||i?t&&a.remove():t?e.replaceChild(o,a):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function sP(e,t=!1){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)}function lP(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function o(){if(PL.context){const[t,n]=QL(!1);return queueMicrotask((()=>n(!0))),()=>t()&&e.children}return()=>e.children}if(r instanceof HTMLHeadElement){const[e,t]=QL(!1),n=()=>t(!0);ZL((t=>XO(r,(()=>e()?t():o()()),null))),aO((()=>{PL.context?queueMicrotask(n):n()}))}else{const i=sP(e.isSVG?"g":"div",e.isSVG),a=t&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get:()=>n.parentNode,configurable:!0}),XO(a,o()),r.appendChild(i),e.ref&&e.ref(i),aO((()=>r.removeChild(i)))}return n}function cP(e){const[t,n]=PO(e,["component"]),r=tO((()=>t.component));return tO((()=>{const e=r();switch(typeof e){case"function":return oO((()=>e(n)));case"string":const t=WO.has(e),r=PL.context?JO():sP(e,t);return ZO(r,n,t),r}}))}var uP=(e=>(e.DARK="DARK",e.LIGHT="LIGHT",e))(uP||{});let dP={data:""},pP=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,fP=/\/\*[^]*?\*\/|  +/g,hP=/\n+/g,gP=(e,t)=>{let n="",r="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+a+";":r+="f"==i[1]?gP(a,i):i+"{"+gP(a,"k"==i[1]?"":t)+"}":"object"==typeof a?r+=gP(a,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=gP.p?gP.p(i,a):i+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+r},mP={},vP=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+vP(e[n]);return t}return e};function bP(e){let t=this||{},n=e.call?e(t.p):e;return((e,t,n,r,o)=>{let i=vP(e),a=mP[i]||(mP[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!mP[a]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=pP.exec(e.replace(fP,""));)t[4]?r.shift():t[3]?(n=t[3].replace(hP," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(hP," ").trim();return r[0]})(e);mP[a]=gP(o?{["@keyframes "+a]:t}:t,n?"":"."+a)}let s=n&&mP.g?mP.g:null;return n&&(mP.g=mP[a]),l=mP[a],c=t,u=r,(d=s)?c.data=c.data.replace(d,l):-1===c.data.indexOf(l)&&(c.data=u?l+c.data:c.data+l),a;var l,c,u,d})(n.unshift?n.raw?((e,t,n)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":gP(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),""))(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,(r=t.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||dP),t.g,t.o,t.k);var r}bP.bind({g:1});let yP=bP.bind({k:1});const wP=lO();function xP(e){return RO(wP.Provider,{value:e.theme,get children(){return e.children}})}function SP(){return cO(wP)}function kP(e){let t=this||{};return(...n)=>{const r=r=>{const o=OO(r,{theme:cO(wP)}),i=OO(o,{get class(){const e=o.class,r="class"in o&&/^go[0-9]+/.test(e);return[e,bP.apply({target:t.target,o:r,p:o,g:t.g},n)].filter(Boolean).join(" ")}}),[a,s]=PO(i,["as","theme"]),l=s,c=a.as||e;let u;return"function"==typeof c?u=c(l):1==t.g?(u=document.createElement(c),ZO(u,l)):u=cP(OO({component:c},l)),u};return r.class=e=>oO((()=>bP.apply({target:t.target,p:e,g:t.g},n))),r}}const CP=new Proxy(kP,{get:(e,t)=>e(t)});function _P(){const e=kP.call({g:1},"div").apply(null,arguments);return function(t){return e(t),null}}const EP="tc-root",AP="tc-disable-scroll",TP="tc-using-mouse",RP=()=>{document.body.addEventListener("mousedown",(()=>document.body.classList.add(TP))),document.body.addEventListener("keydown",(e=>{"Tab"===e.key&&document.body.classList.remove(TP)}));return RO(_P`
    ${EP} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${EP} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${EP} *:focus {
        outline: #08f auto 2px;
    }
    
    ${EP} li {
        list-style: none;
    }
    
    ${EP} button {
        outline: none;
    }
    
    body.${AP} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${TP} ${EP} *:focus {
        outline: none;
    }
`,{})};function jP(e,t){return"#"===e[0]&&(e=function(e){"#"===e[0]&&(e=e.slice(1));const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t].join(",")}(e)),`rgba(${e}, ${t})`}function NP(e){return e.toString()+"px"}const LP=class{constructor(){LL(this,"storage",{})}static getInstance(){return LP.instance||(LP.instance=new LP),LP.instance}get length(){return Object.keys(this.storage).length}clear(){this.storage={}}getItem(e){var t;return null!=(t=this.storage[e])?t:null}key(e){var t;const n=Object.keys(this.storage);return e<0||e>=n.length?null:null!=(t=n[e])?t:null}removeItem(e){delete this.storage[e]}setItem(e,t){this.storage[e]=t}};let OP=LP;LL(OP,"instance");class PP extends Fj{constructor(...e){super(...e),Object.setPrototypeOf(this,PP.prototype)}}function IP(...e){try{console.debug("[TON_CONNECT_UI]",...e)}catch(t){}}function MP(e,t="_self"){IP("openLink",e,t),window.open(e,t,"noopener noreferrer")}function $P(e){MP(e,"_blank")}function DP(e,t){const n=setTimeout((()=>{HP("safari")||WP("android")&&HP("firefox")||t()}),200);window.addEventListener("blur",(()=>clearTimeout(n)),{once:!0}),MP(e,"_self")}function UP(e){return OL(this,null,(function*(){yield new Promise((e=>requestAnimationFrame(e))),e()}))}function BP(e){"complete"!==document.readyState?window.addEventListener("load",(()=>UP((()=>BP(e)))),{once:!0}):e.forEach((e=>{(new window.Image).src=e}))}function zP(){if("undefined"!=typeof window)return window}function FP(){if(function(){try{return"undefined"!=typeof localStorage}catch(e){return!1}}())return localStorage;if("undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node)throw new PP("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");return OP.getInstance()}function VP(){var e,t,n;const r=(new rL).getResult(),o=null==(e=r.os.name)?void 0:e.toLowerCase();let i;switch(!0){case"ipad"===(null==(t=r.device.model)?void 0:t.toLowerCase()):i="ipad";break;case"ios"===o:i="ios";break;case"android"===o:i="android";break;case"mac os"===o:i="macos";break;case"linux"===o:i="linux";break;case null==o?void 0:o.includes("windows"):i="windows"}const a=null==(n=r.browser.name)?void 0:n.toLowerCase();let s;switch(!0){case"chrome"===a:s="chrome";break;case"firefox"===a:s="firefox";break;case null==a?void 0:a.includes("safari"):s="safari";break;case null==a?void 0:a.includes("opera"):s="opera"}return{os:i,browser:s}}function WP(...e){return e.includes(VP().os)}function HP(...e){return e.includes(VP().browser)}function qP(e,t){return t+new URL(e).search}class KP{constructor(){LL(this,"localStorage"),LL(this,"storageKey","ton-connect-ui_wallet-info"),this.localStorage=FP()}setWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getWalletInfo(){const e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeWalletInfo(){this.localStorage.removeItem(this.storageKey)}}class GP{constructor(){LL(this,"localStorage"),LL(this,"storageKey","ton-connect-ui_preferred-wallet"),this.localStorage=FP()}setPreferredWalletAppName(e){this.localStorage.setItem(this.storageKey,e)}getPreferredWalletAppName(){return this.localStorage.getItem(this.storageKey)||void 0}}class YP{constructor(){LL(this,"localStorage"),LL(this,"storageKey","ton-connect-ui_last-selected-wallet-info"),this.localStorage=FP()}setLastSelectedWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getLastSelectedWalletInfo(){const e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeLastSelectedWalletInfo(){this.localStorage.removeItem(this.storageKey)}}const[ZP,QP]=QL({status:"closed",closeReason:null}),XP=tO((()=>"opened"===ZP().status)),[JP,eI]=QL({status:"closed",closeReason:null}),tI=tO((()=>"opened"===JP().status)),nI=tO((()=>{const e=JP();return"opened"===e.status?e.walletInfo:null}));let rI="undefined"!=typeof window?new YP:void 0;const[oI,iI]=QL((null==rI?void 0:rI.getLastSelectedWalletInfo())||null),aI=e=>{rI||(rI=new YP),e?rI.setLastSelectedWalletInfo(e):rI.removeLastSelectedWalletInfo(),iI(e)},[sI,lI]=QL(null),cI={common:{close:"Закрыть",openWallet:"Открыть кошелёк",copyLink:"Копировать ссылку",linkCopied:"Ссылка скопирована",copied:"Ссылка скопирована",yourWallet:"Ваш кошелёк",retry:"Повторить",get:"Скачать",mobile:"Мобильный",browserExtension:"Расширение",desktop:"Десктоп"},button:{connectWallet:"Подключить кошелёк",dropdown:{copy:"Скопировать адрес",copied:"Адрес скопирован!",disconnect:"Отключить кошелёк"}},notifications:{confirm:{header:"Откройте {{ name }}, чтобы подтвердить транзакцию."},transactionSent:{header:"Транзакция отправлена",text:"Ваша транзакция будет обработана через несколько секунд."},transactionCanceled:{header:"Транзакция отменена",text:"Состояние вашего счёта не изменится."}},walletItem:{walletOn:"Wallet в",recent:"Недавний",installed:"Установлен",popular:"Популярен"},walletModal:{loading:"Кошельки загружаются",wallets:"Кошельки",mobileUniversalModal:{connectYourWallet:"Подключите кошелёк",openWalletOnTelegramOrSelect:"Подключите Wallet в Telegram или выберете кошелёк для подключения",openWalletOnTelegram:"Открыть Wallet в Telegram",openLink:"Открыть ссылку",scan:"Отсканируйте камерой вашего телефона"},desktopUniversalModal:{connectYourWallet:"Подключите кошелёк",scan:"Отсканируйте QR-код камерой вашего телефона",availableWallets:"Доступные кошельки"},mobileConnectionModal:{showQR:"Показать QR-код",scanQR:"Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",continueIn:"Продолжите в {{ name }}…",connectionDeclined:"Подключение отклонено"},desktopConnectionModal:{scanQR:"Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",continueInExtension:"Откройте браузерное расширение {{ name }}",dontHaveExtension:"Похоже, у вас не установлено браузерное расширение {{ name }}",getWallet:"Скачать {{ name }}",continueOnDesktop:"Откройте {{ name }} на компьютере…",openWalletOnTelegram:"Открыть Wallet в Telegram",connectionDeclined:"Подключение отклонено"},infoModal:{whatIsAWallet:"Что такое кошелёк?",secureDigitalAssets:"Надежное хранилище цифровых активов",walletProtects:"Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",controlIdentity:"Контроль своей личности Web3",manageIdentity:"Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",effortlessCryptoTransactions:"Простые криптотранзакции",easilySend:"Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",getAWallet:"Скачать кошелёк"}},actionModal:{confirmTransaction:{header:"Подтвердите действие в {{ name }}",text:"Это займет пару секунд."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}},uI={en:dI({common:{close:"Close",openWallet:"Open wallet",copyLink:"Copy Link",linkCopied:"Link Copied",copied:"Copied",yourWallet:"Your Wallet",retry:"Retry",get:"GET",mobile:"Mobile",browserExtension:"Browser Extension",desktop:"Desktop"},button:{connectWallet:"Connect Wallet",dropdown:{copy:"Copy address",copied:"Address copied!",disconnect:"Disconnect"}},notifications:{confirm:{header:"Open {{ name }} to confirm the transaction."},transactionSent:{header:"Transaction sent",text:"Your transaction will be processed in a few seconds."},transactionCanceled:{header:"Transaction canceled",text:"There will be no changes to your account."}},walletItem:{walletOn:"Wallet On",recent:"Recent",installed:"Installed",popular:"Popular"},walletModal:{loading:"Loading wallets",wallets:"Wallets",mobileUniversalModal:{connectYourWallet:"Connect your wallet",openWalletOnTelegramOrSelect:"Open Wallet in Telegram or select your wallet to connect",openWalletOnTelegram:"Open Wallet in Telegram",openLink:"Open Link",scan:"Scan with your mobile wallet"},desktopUniversalModal:{connectYourWallet:"Connect your wallet",scan:"Scan with your mobile wallet",availableWallets:"Available wallets"},mobileConnectionModal:{showQR:"Show QR Code",scanQR:"Scan the QR code below with your phone’s or {{ name }}’s camera",continueIn:"Continue in {{ name }}…",connectionDeclined:"Connection declined"},desktopConnectionModal:{scanQR:"Scan the QR code below with your phone’s or {{ name }}’s camera",continueInExtension:"Continue in {{ name }} browser extension…",dontHaveExtension:"Seems you don't have installed {{ name }} browser extension",getWallet:"Get {{ name }}",continueOnDesktop:"Continue in {{ name }} on desktop…",openWalletOnTelegram:"Open Wallet in Telegram on desktop",connectionDeclined:"Connection declined"},infoModal:{whatIsAWallet:"What is a wallet",secureDigitalAssets:"Secure digital assets storage",walletProtects:"A wallet protects and manages your digital assets including TON, tokens and collectables.",controlIdentity:"Control your Web3 identity",manageIdentity:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",effortlessCryptoTransactions:"Effortless crypto transactions",easilySend:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",getAWallet:"Get a Wallet"}},actionModal:{confirmTransaction:{header:"Confirm the transaction in {{ name }}",text:"It will only take a moment."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}}),ru:dI(cI)};function dI(e){const t=n=>{Object.entries(n).forEach((([r,o])=>{if("object"==typeof o&&o)return t(o);if("string"==typeof o){if("$"===o[0]){const t=o.slice(1).split(".");let i=e;t.forEach((e=>{if(!(e in i))throw new Error(`Cannot parse translations: there is no property ${e} in translation`);i=i[e]})),n[r]=i}"\\$"===o.slice(0,2)&&(n[r]=o.slice(1))}}))};return t(e),e}const pI=lO(),fI=Symbol("store-raw"),hI=Symbol("store-node"),gI=Symbol("store-name");function mI(e,t){let n=e[IL];if(!n&&(Object.defineProperty(e,IL,{value:n=new Proxy(e,kI)}),!Array.isArray(e))){const t=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,i=t.length;o<i;o++){const i=t[o];r[i].get&&Object.defineProperty(e,i,{enumerable:r[i].enumerable,get:r[i].get.bind(n)})}}return n}function vI(e){let t;return null!=e&&"object"==typeof e&&(e[IL]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function bI(e,t=new Set){let n,r,o,i;if(n=null!=e&&e[fI])return n;if(!vI(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,i=e.length;n<i;n++)o=e[n],(r=bI(o,t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let s=0,l=n.length;s<l;s++)i=n[s],a[i].get||(o=e[i],(r=bI(o,t))!==o&&(e[i]=r))}return e}function yI(e){let t=e[hI];return t||Object.defineProperty(e,hI,{value:t={}}),t}function wI(e,t,n){return e[t]||(e[t]=SI(n))}function xI(e){if(sO()){const t=yI(e);(t._||(t._=SI()))()}}function SI(e){const[t,n]=QL(e,{equals:!1,internal:!0});return t.$=n,t}const kI={get(e,t,n){if(t===fI)return e;if(t===IL)return n;if(t===ML)return xI(e),n;const r=yI(e),o=r.hasOwnProperty(t);let i=o?r[t]():e[t];if(t===hI||"__proto__"===t)return i;if(!o){const n=Object.getOwnPropertyDescriptor(e,t);!sO()||"function"==typeof i&&!e.hasOwnProperty(t)||n&&n.get||(i=wI(r,t,i)())}return vI(i)?mI(i):i},has(e,t){return t===fI||t===IL||t===ML||t===hI||"__proto__"===t||(this.get(e,t,e),t in e)},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return xI(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.get&&n.configurable&&t!==IL&&t!==hI&&t!==gI?(delete n.value,delete n.writable,n.get=()=>e[IL][t],n):n}};function CI(e,t,n,r=!1){if(!r&&e[t]===n)return;const o=e[t],i=e.length;void 0===n?delete e[t]:e[t]=n;let a,s=yI(e);(a=wI(s,t,o))&&a.$((()=>n)),Array.isArray(e)&&e.length!==i&&(a=wI(s,"length",i))&&a.$(e.length),(a=s._)&&a.$()}function _I(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];CI(e,o,t[o])}}function EI(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const i=typeof r,a=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)EI(e,[r[o]].concat(t),n);return}if(a&&"function"===i){for(let o=0;o<e.length;o++)r(e[o],o)&&EI(e,[o].concat(t),n);return}if(a&&"object"===i){const{from:o=0,to:i=e.length-1,by:a=1}=r;for(let r=o;r<=i;r+=a)EI(e,[r].concat(t),n);return}if(t.length>1)return void EI(e[r],t,[r].concat(n));o=e[r],n=[r].concat(n)}let i=t[0];"function"==typeof i&&(i=i(o,n),i===o)||void 0===r&&null==i||(i=bI(i),void 0===r||vI(o)&&vI(i)&&!Array.isArray(i)?_I(o,i):CI(e,r,i))}function AI(...[e,t]){const n=bI(e||{}),r=Array.isArray(n);return[mI(n),function(...e){rO((()=>{r&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),t=bI(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const r=t[n];e[n]!==r&&CI(e,n,r)}CI(e,"length",r)}else _I(e,t)}(n,e[0]):EI(n,e)}))}]}const TI={constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#0098EA",telegramButton:"#0098EA",icon:{primary:"#0F0F0F",secondary:"#7A8999",tertiary:"#C1CAD2",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#FFFFFF",secondary:"#F1F3F5",segment:"#FFFFFF",tint:"#F1F3F5",qr:"#F1F3F5"},text:{primary:"#0F0F0F",secondary:"#6A7785"}};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function RI(e){return"[object Object]"===Object.prototype.toString.call(e)}function jI(e){var t,n;return!1!==RI(e)&&(void 0===(t=e.constructor)||!1!==RI(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))}function NI(e,t){if(!e)return t;return pL(t,e,{arrayMerge:(e,t,n)=>t,isMergeableObject:jI})}const[LI,OI]=AI({theme:uP.LIGHT,colors:TI,borderRadius:"m"}),PI={[uP.LIGHT]:TI,[uP.DARK]:{constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#E5E5EA",telegramButton:"#31A6F5",icon:{primary:"#E5E5EA",secondary:"#909099",tertiary:"#434347",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#121214",secondary:"#18181A",segment:"#262629",tint:"#222224",qr:"#FFFFFF"},text:{primary:"#E5E5EA",secondary:"#7D7D85"}}},II={[uP.LIGHT]:void 0,[uP.DARK]:void 0};function MI(e,t){t&&(II[uP.DARK]=NI(t[uP.DARK],II[uP.DARK]),II[uP.LIGHT]=NI(t[uP.LIGHT],II[uP.LIGHT])),OI({theme:e,colors:NI(II[e],PI[e])})}const $I=CP.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,DI=e=>{let t;const[n,r]=QL(null);return eO((()=>{const t=new window.Image;return t.src=e.src,t.alt=e.alt||"",t.setAttribute("draggable","false"),e.class&&t.classList.add(e.class),t.complete?r(t):(t.addEventListener("load",(()=>r(t))),()=>t.removeEventListener("load",(()=>r(t))))})),[RO(MO,{get when(){return n()},get children(){return n()}}),RO(MO,{get when(){return!n()},get children(){return RO($I,{get class(){return e.class},ref(e){"function"==typeof t?t(e):t=e}})}})]};let UI={};try{UI=function(e){e=e.replace(/^#/,"");let t={};if(!e.length)return t;if(e.indexOf("=")<0&&e.indexOf("?")<0)return t._path=YI(e),t;let n=e.indexOf("?");if(n>=0){let r=e.substr(0,n);t._path=YI(r),e=e.substr(n+1)}let r=function(e){let t={};if(!e.length)return t;let n,r,o,i,a=e.split("&");for(n=0;n<a.length;n++)r=a[n].split("="),o=YI(r[0]),i=null==r[1]?null:YI(r[1]),t[o]=i;return t}(e);for(let o in r)t[o]=r[o];return t}(location.hash.toString())}catch(kK){}let BI="unknown";if((null==UI?void 0:UI.tgWebAppPlatform)&&(BI=null!=(gL=UI.tgWebAppPlatform)?gL:"unknown"),"unknown"===BI){const e=zP();BI=null!=(bL=null==(vL=null==(mL=null==e?void 0:e.Telegram)?void 0:mL.WebApp)?void 0:vL.platform)?bL:"unknown"}let zI="6.0";if((null==UI?void 0:UI.tgWebAppVersion)&&(zI=UI.tgWebAppVersion),!zI){const e=zP();zI=null!=(xL=null==(wL=null==(yL=null==e?void 0:e.Telegram)?void 0:yL.WebApp)?void 0:wL.version)?xL:"6.0"}function FI(...e){return e.includes(BI)}function VI(){var e;return"unknown"!==BI||!!(null==(e=zP())?void 0:e.TelegramWebviewProxy)}function WI(){var e;const t=!!(null==(e=zP())?void 0:e.TelegramWebview);return(VI()||t)&&"unknown"===BI}function HI(){GI("web_app_expand",{})}function qI(e,t){const n=new URL(e);if("http:"!==n.protocol&&"https:"!==n.protocol){if(t)return t();throw new PP(`Url protocol is not supported: ${n}`)}if("t.me"!==n.hostname){if(t)return t();throw new PP(`Url host is not supported: ${n}`)}const r=n.pathname+n.search;KI()||function(e,t){"string"!=typeof e&&(e="");let n,r,o,i,a=e.replace(/^\s+|\s+$/g,"").split("."),s=t.replace(/^\s+|\s+$/g,"").split(".");for(n=Math.max(a.length,s.length),r=0;r<n;r++)if(o=parseInt(a[r])||0,i=parseInt(s[r])||0,o!==i)return o>i?1:-1;return 0}(zI,"6.1")>=0?GI("web_app_open_tg_link",{path_full:r}):$P("https://t.me"+r)}function KI(){try{const e=zP();return!!e&&(null!=e.parent&&e!==e.parent)}catch(kK){return!1}}function GI(e,t){try{const n=zP();if(!n)throw new PP("Can't post event to parent window: window is not defined");if(void 0!==n.TelegramWebviewProxy)IP("postEvent",e,t),n.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));else if(n.external&&"notify"in n.external)IP("postEvent",e,t),n.external.notify(JSON.stringify({eventType:e,eventData:t}));else{if(!KI())throw new PP("Can't post event to TMA");{const r="*",o=JSON.stringify({eventType:e,eventData:t});IP("postEvent",e,t),n.parent.postMessage(o,r)}}}catch(kK){!function(...t){try{console.error("[TON_CONNECT_UI]",...t)}catch(e){}}(`Can't post event to parent window: ${kK}`)}}function YI(e){try{return e=e.replace(/\+/g,"%20"),decodeURIComponent(e)}catch(kK){return e}}const ZI=440,QI=1020;function XI(e){const t=zP();if(!t)return"desktop"===e;if(FI("weba"))return!0;const n=t.innerWidth;switch(e){case"desktop":return n>QI;case"tablet":return n>ZI;default:return n<=ZI||WP("ios","android","ipad")}}function JI(e){switch(e){case"mobile":return`@media (max-width: ${ZI}px)`;case"tablet":return`@media (max-width: ${QI}px) (min-width: ${ZI}px)`;default:return`@media (min-width: ${QI}px)`}}const eM="@media (hover: none)",tM="@media not all and (hover: none)",nM={m:"100vh",s:"8px",none:"0"},rM={s:.02,m:.04},oM=CP.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>"flat"===e.appearance?"transparent":"secondary"===e.appearance?e.theme.colors.background.tint:jP(e.theme.colors.accent,.12)};
    color: ${e=>"secondary"===e.appearance?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>"flat"===e.appearance?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&"flat"!==e.appearance?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&"flat"!==e.appearance?"12px":"16px"};
    border: none;
    border-radius: ${e=>nM[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${tM} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+rM[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-rM[e.scale]})`};
    }

    ${eM} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-2*rM[e.scale]})`};
        }
    }
`;function iM(e){const t=oO((()=>Object.keys(e).filter((e=>e.startsWith("data-"))))),[n]=PO(e,t);return n}const aM=e=>{const t=iM(e);return RO(oM,OO({get appearance(){return e.appearance||"primary"},get class(){return e.class},onClick:t=>{var n;return null==(n=e.onClick)?void 0:n.call(e,t)},onMouseEnter:t=>{var n;return null==(n=e.onMouseEnter)?void 0:n.call(e,t)},onMouseLeave:t=>{var n;return null==(n=e.onMouseLeave)?void 0:n.call(e,t)},ref(t){const n=e.ref;"function"==typeof n?n(t):e.ref=t},get disabled(){return e.disabled},get scale(){return e.scale||"m"},get leftIcon(){return!!e.leftIcon},get rightIcon(){return!!e.rightIcon},"data-tc-button":"true"},t,{get children(){return[tO((()=>e.leftIcon)),tO((()=>e.children)),tO((()=>e.rightIcon))]}}))};function sM(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}const lM=e=>{let t,n=!0;const[r,o]=QL(),[i,a]=QL(),s=uO((()=>e.children)),{onBeforeEnter:l,onEnter:c,onAfterEnter:u,onBeforeExit:d,onExit:p,onAfterExit:f}=e,h=tO((()=>{const t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to"}}));function g(t,s){if(!n||e.appear){let n=function(l){!t||l&&l.target!==t||(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...p),t.classList.remove(...f),rO((()=>{r()!==t&&o(t),i()===t&&a(void 0)})),u&&u(t),"inout"===e.mode&&m(t,s))};const d=h().enterClass.split(" "),p=h().enterActiveClass.split(" "),f=h().enterToClass.split(" ");l&&l(t),t.classList.add(...d),t.classList.add(...p),sM((()=>{t.classList.remove(...d),t.classList.add(...f),c&&c(t,(()=>n())),(!c||c.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))}))}s&&!e.mode?a(t):o(t)}function m(t,n){const i=h().exitClass.split(" "),a=h().exitActiveClass.split(" "),s=h().exitToClass.split(" ");if(!n.parentNode)return l();function l(i){i&&i.target!==n||(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...a),n.classList.remove(...s),r()===n&&o(void 0),f&&f(n),"outin"===e.mode&&g(t,n))}d&&d(n),n.classList.add(...i),n.classList.add(...a),sM((()=>{n.classList.remove(...i),n.classList.add(...s)})),p&&p(n,(()=>l())),(!p||p.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))}return XL((r=>{for(t=s();"function"==typeof t;)t=t();return oO((()=>(t&&t!==r&&("outin"!==e.mode?g(t,r):n&&o(t)),r&&r!==t&&"inout"!==e.mode&&m(t,r),n=!1,t)))})),[r,i]};function cM(e){const{top:t,bottom:n,left:r,right:o,width:i,height:a}=e.getBoundingClientRect(),s=e.parentNode.getBoundingClientRect();return{top:t-s.top,bottom:n,left:r-s.left,right:o,width:i,height:a}}const uM=e=>{const t=uO((()=>e.children)),n=tO((()=>{const t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to",moveClass:e.moveClass||t+"-move"}})),{onBeforeEnter:r,onEnter:o,onAfterEnter:i,onBeforeExit:a,onExit:s,onAfterExit:l}=e,[c,u]=QL();let d=[],p=!0;return XL((()=>{const e=t(),c=[...e],f=new Set(e),h=new Set(d),g=n().enterClass.split(" "),m=n().enterActiveClass.split(" "),v=n().enterToClass.split(" "),b=n().exitClass.split(" "),y=n().exitActiveClass.split(" "),w=n().exitToClass.split(" ");for(let t=0;t<e.length;t++){const n=e[t];if(!p&&!h.has(n)){let e=function(t){!n||t&&t.target!==n||(n.removeEventListener("transitionend",e),n.removeEventListener("animationend",e),n.classList.remove(...m),n.classList.remove(...v),i&&i(n))};r&&r(n),n.classList.add(...g),n.classList.add(...m),sM((()=>{n.classList.remove(...g),n.classList.add(...v),o&&o(n,(()=>e())),(!o||o.length<2)&&(n.addEventListener("transitionend",e),n.addEventListener("animationend",e))}))}}for(let t=0;t<d.length;t++){const e=d[t];if(!f.has(e)&&e.parentNode){let n=function(t){t&&t.target!==e||(e.removeEventListener("transitionend",n),e.removeEventListener("animationend",n),e.classList.remove(...y),e.classList.remove(...w),l&&l(e),d=d.filter((t=>t!==e)),u(d))};c.splice(t,0,e),a&&a(e),e.classList.add(...b),e.classList.add(...y),sM((()=>{e.classList.remove(...b),e.classList.add(...w)})),s&&s(e,(()=>n())),(!s||s.length<2)&&(e.addEventListener("transitionend",n),e.addEventListener("animationend",n))}}d=c,u(c)})),eO((e=>{const t=c();return t.forEach((t=>{let n;(n=e.get(t))?n.new&&(n.new=!1,n.newPos=cM(t)):e.set(t,n={pos:cM(t),new:!p}),n.new&&t.addEventListener("transitionend",(()=>{n.new=!1,t.parentNode&&(n.newPos=cM(t))}),{once:!0}),n.newPos&&(n.pos=n.newPos),n.newPos=cM(t)})),p?(p=!1,e):(t.forEach((t=>{const n=e.get(t),r=n.pos,o=n.newPos,i=r.left-o.left,a=r.top-o.top;if(i||a){n.moved=!0;const e=t.style;e.transform=`translate(${i}px,${a}px)`,e.transitionDuration="0s"}})),document.body.offsetHeight,t.forEach((t=>{const r=e.get(t);if(r.moved){let e=function(n){n&&n.target!==t||!t.parentNode||n&&!/transform$/.test(n.propertyName)||(t.removeEventListener("transitionend",e),t.classList.remove(...i))};r.moved=!1;const o=t.style,i=n().moveClass.split(" ");t.classList.add(...i),o.transform=o.transitionDuration="",t.addEventListener("transitionend",e)}})),e)}),new Map),c};const dM="androidBackHandler",pM={[dM]:!0},fM=KO('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',0,!0),hM={left:0,top:90,right:180,bottom:270},gM=e=>{const t=SP();return RO(CP("svg")`
        transform: rotate(${e=>hM[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",get svgDirection(){return e.direction||"left"},get children(){const n=fM.cloneNode(!0);return JL((()=>GO(n,"fill",e.fill||t.colors.icon.secondary))),n}})},mM=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),vM=e=>{const t=SP();return(()=>{const n=mM.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.secondary))),n})()},bM=CP.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${tM} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${eM} {
        &:active {
            transform: scale(0.92);
        }
    }
`,yM=e=>{const t=iM(e),n=()=>e.icon||"close";return RO(bM,OO({get class(){return e.class},onClick:()=>e.onClick(),"data-tc-icon-button":"true"},t,{get children(){return[RO(MO,{get when(){return!!e.children},get children(){return e.children}}),RO(MO,{get when(){return!e.children},get children(){return RO($O,{get children(){return[RO(DO,{get when(){return"close"===n()},get children(){return RO(vM,{get fill(){return e.fill}})}}),RO(DO,{get when(){return"arrow"===n()},get children(){return RO(gM,{get fill(){return e.fill}})}}),RO(DO,{get when(){return"question"===n()},get children(){return RO(W$,{get fill(){return e.fill}})}}),RO(DO,{get when(){return"string"!=typeof n()},get children(){return n()}})]}})}})]}}))},wM={m:"24px",s:"16px",none:"0"},xM=CP.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${JI("mobile")} {
        padding-bottom: 0;
    }
`,SM=bP`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${JI("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,kM=CP.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>wM[e.theme.borderRadius]};

    ${JI("mobile")} {
        width: 100%;
    }
`,CM=CP(yM)`
    position: absolute;
    right: 16px;
    top: 16px;
`,_M=CP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>wM[e.theme.borderRadius]}
        ${e=>wM[e.theme.borderRadius]};
`,EM=CP(yM)`
    background-color: ${e=>jP(e.theme.colors.icon.secondary,.12)};
`;class AM{constructor(){LL(this,"currentTime",0)}}const TM=class{constructor(){LL(this,"currentTime",0),LL(this,"playbackRate",1),LL(this,"startTime",null),LL(this,"timeline",new AM),LL(this,"finished",Promise.resolve(this)),LL(this,"effect",null),LL(this,"id",""),LL(this,"pending",!1),LL(this,"playState","finished"),LL(this,"replaceState","active"),LL(this,"ready",Promise.resolve(this)),LL(this,"oncancel",null),LL(this,"onfinish",null),LL(this,"onremove",null)}static create(){return TM._instance||(!function(...e){try{console.warn("[TON_CONNECT_UI]",...e)}catch(kK){}}("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."),TM._instance=new TM),TM._instance}cancel(){}finish(){}pause(){}play(){}reverse(){}addEventListener(e,t,n){}dispatchEvent(e){return!1}removeEventListener(e,t,n){}updatePlaybackRate(e){}commitStyles(){}persist(){}};let RM=TM;function jM(e,t,n){return"animate"in e?e.animate(t,n):RM.create()}LL(RM,"_instance",null);const NM=KO("<div></div>"),LM=function(e,t){const n=n=>{var r;return!e.contains(n.target)&&(null==(r=t())?void 0:r())};document.body.addEventListener("click",n),aO((()=>document.body.removeEventListener("click",n)))},OM=function(e,t){const n=e=>{var n,r;"Escape"===e.key&&(null==(n=document.activeElement)||n.blur(),null==(r=t())||r())};document.body.addEventListener("keydown",n),aO((()=>document.body.removeEventListener("keydown",n)))},PM=function(e,t){const{isEnabled:n,onClose:r}=t();if(!n)return;if(!("android"===VP().os))return;window.history.pushState(pM,"");const o=e=>{e.preventDefault(),r()};window.addEventListener("popstate",o,{once:!0}),aO((()=>{window.removeEventListener("popstate",o),UP((()=>{var e;!0===(null==(e=window.history.state)?void 0:e[dM])&&window.history.back()}))}))},IM=e=>{const t=SP(),n=iM(e);return eO((()=>{e.opened?document.documentElement.scrollHeight!==document.documentElement.clientHeight&&(document.body.style.top=NP(-document.documentElement.scrollTop),document.body.classList.add(AP)):(document.body.classList.remove(AP),document.documentElement.scrollTo({top:-parseFloat(getComputedStyle(document.body).top)}),document.body.style.top="auto")})),RO(lM,{onBeforeEnter:e=>{const t=XI("mobile")?200:100;jM(e,[{opacity:0},{opacity:1}],{duration:t}),XI("mobile")&&jM(e.firstElementChild,[{transform:"translateY(390px)"},{transform:"translateY(0)"}],{duration:t})},onExit:(e,t)=>{const n=XI("mobile")?200:100,r=jM(e,[{opacity:1},{opacity:0}],{duration:n});if(XI("mobile")){const o=jM(e.firstElementChild,[{transform:"translateY(0)"},{transform:"translateY(390px)"}],{duration:n});Promise.all([r.finished,o.finished]).then(t)}else r.finished.then(t)},get children(){return RO(MO,{get when(){return e.opened},get children(){return RO(xM,OO({"data-tc-modal":"true"},n,{get children(){const n=NM.cloneNode(!0);return QO(PM,n,(()=>({isEnabled:e.enableAndroidBackHandler,onClose:()=>e.onClose()}))),QO(OM,n,(()=>()=>e.onClose())),QO(LM,n,(()=>()=>e.onClose())),XO(n,RO(kM,{get class(){return e.class},get children(){return[RO(CM,{icon:"close",onClick:()=>e.onClose()}),tO((()=>e.children))]}}),null),XO(n,RO(MO,{get when(){return e.onClickQuestion},get children(){return RO(_M,{get children(){return[RO(F$,{}),RO(EM,{get onClick(){return e.onClickQuestion},icon:"question"})]}})}}),null),JL((()=>YO(n,hL(SM,bP`
                                border-radius: ${wM[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${JI("mobile")} {
                                    border-radius: ${wM[t.borderRadius]}
                                        ${wM[t.borderRadius]} 0 0;
                                }
                            `)))),n}}))}})}})},MM={m:"22px",s:"12px",none:"0"},$M={m:"18px",s:"8px",none:"0"},DM=CP.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>MM[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,UM=CP.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>$M[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,BM=CP.input`
    display: none;
`,zM=CP.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,FM={m:"16px",s:"12px",none:"0"},VM={m:"12px",s:"8px",none:"0"},WM=CP.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,HM=CP.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>FM[e.theme.borderRadius]};
    padding: ${NP(24)} 0;
    height: ${NP(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${tM} {
        &:hover {
            ${WM.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${WM.class} {
            transform: scale(0.96);
        }
    }

    ${eM} {
        &:active {
            ${WM.class} {
                transform: scale(0.92);
            }
        }
    }
`,qM=CP.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,KM=CP.div`
    position: absolute;
    width: ${NP(60)};
    height: ${NP(60)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,GM=CP(DI)`
    width: ${e=>NP(e.size)};
    height: ${e=>NP(e.size)};
    border-radius: ${e=>VM[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,YM=CP.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;var ZM={exports:{}};!function(e){var t=function(){var e=function(e,t){var n=e,r=u[t],o=null,i=0,a=null,s=[],l={},c=function(e,t){o=function(e){for(var t=new Array(e),n=0;n<e;n+=1){t[n]=new Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(i=4*n+17),d(0,0),d(i-7,0),d(0,i-7),f(),p(),g(e,t),n>=7&&h(e),null==a&&(a=v(n,r,s)),m(a,t)},d=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||i<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||i<=t+r||(o[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},p=function(){for(var e=8;e<i-8;e+=1)null==o[e][6]&&(o[e][6]=e%2==0);for(var t=8;t<i-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},f=function(){for(var e=y.getPatternPosition(n),t=0;t<e.length;t+=1)for(var r=0;r<e.length;r+=1){var i=e[t],a=e[r];if(null==o[i][a])for(var s=-2;s<=2;s+=1)for(var l=-2;l<=2;l+=1)o[i+s][a+l]=-2==s||2==s||-2==l||2==l||0==s&&0==l}},h=function(e){for(var t=y.getBCHTypeNumber(n),r=0;r<18;r+=1){var a=!e&&1==(t>>r&1);o[Math.floor(r/3)][r%3+i-8-3]=a}for(r=0;r<18;r+=1){a=!e&&1==(t>>r&1);o[r%3+i-8-3][Math.floor(r/3)]=a}},g=function(e,t){for(var n=r<<3|t,a=y.getBCHTypeInfo(n),s=0;s<15;s+=1){var l=!e&&1==(a>>s&1);s<6?o[s][8]=l:s<8?o[s+1][8]=l:o[i-15+s][8]=l}for(s=0;s<15;s+=1){l=!e&&1==(a>>s&1);s<8?o[8][i-s-1]=l:s<9?o[8][15-s-1+1]=l:o[8][15-s-1]=l}o[i-8][8]=!e},m=function(e,t){for(var n=-1,r=i-1,a=7,s=0,l=y.getMaskFunction(t),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var u=0;u<2;u+=1)if(null==o[r][c-u]){var d=!1;s<e.length&&(d=1==(e[s]>>>a&1)),l(r,c-u)&&(d=!d),o[r][c-u]=d,-1==(a-=1)&&(s+=1,a=7)}if((r+=n)<0||i<=r){r-=n,n=-n;break}}},v=function(e,t,n){for(var r=S.getRSBlocks(e,t),o=k(),i=0;i<n.length;i+=1){var a=n[i];o.put(a.getMode(),4),o.put(a.getLength(),y.getLengthInBits(a.getMode(),e)),a.write(o)}var s=0;for(i=0;i<r.length;i+=1)s+=r[i].dataCount;if(o.getLengthInBits()>8*s)throw"code length overflow. ("+o.getLengthInBits()+">"+8*s+")";for(o.getLengthInBits()+4<=8*s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*s||(o.put(236,8),o.getLengthInBits()>=8*s));)o.put(17,8);return function(e,t){for(var n=0,r=0,o=0,i=new Array(t.length),a=new Array(t.length),s=0;s<t.length;s+=1){var l=t[s].dataCount,c=t[s].totalCount-l;r=Math.max(r,l),o=Math.max(o,c),i[s]=new Array(l);for(var u=0;u<i[s].length;u+=1)i[s][u]=255&e.getBuffer()[u+n];n+=l;var d=y.getErrorCorrectPolynomial(c),p=x(i[s],d.getLength()-1).mod(d);for(a[s]=new Array(d.getLength()-1),u=0;u<a[s].length;u+=1){var f=u+p.getLength()-a[s].length;a[s][u]=f>=0?p.getAt(f):0}}var h=0;for(u=0;u<t.length;u+=1)h+=t[u].totalCount;var g=new Array(h),m=0;for(u=0;u<r;u+=1)for(s=0;s<t.length;s+=1)u<i[s].length&&(g[m]=i[s][u],m+=1);for(u=0;u<o;u+=1)for(s=0;s<t.length;s+=1)u<a[s].length&&(g[m]=a[s][u],m+=1);return g}(o,r)};l.addData=function(e,t){var n=null;switch(t=t||"Byte"){case"Numeric":n=C(e);break;case"Alphanumeric":n=_(e);break;case"Byte":n=E(e);break;case"Kanji":n=A(e);break;default:throw"mode:"+t}s.push(n),a=null},l.isDark=function(e,t){if(e<0||i<=e||t<0||i<=t)throw e+","+t;return o[e][t]},l.getModuleCount=function(){return i},l.make=function(){if(n<1){for(var e=1;e<40;e++){for(var t=S.getRSBlocks(e,r),o=k(),i=0;i<s.length;i++){var a=s[i];o.put(a.getMode(),4),o.put(a.getLength(),y.getLengthInBits(a.getMode(),e)),a.write(o)}var u=0;for(i=0;i<t.length;i++)u+=t[i].dataCount;if(o.getLengthInBits()<=8*u)break}n=e}c(!1,function(){for(var e=0,t=0,n=0;n<8;n+=1){c(!0,n);var r=y.getLostPoint(l);(0==n||e>r)&&(e=r,t=n)}return t}())},l.createTableTag=function(e,t){e=e||2;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+(t=void 0===t?4*e:t)+"px;",n+='">',n+="<tbody>";for(var r=0;r<l.getModuleCount();r+=1){n+="<tr>";for(var o=0;o<l.getModuleCount();o+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+e+"px;",n+=" height: "+e+"px;",n+=" background-color: ",n+=l.isDark(r,o)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>"},l.createSvgTag=function(e,t,n,r){var o={};"object"==typeof arguments[0]&&(e=(o=arguments[0]).cellSize,t=o.margin,n=o.alt,r=o.title),e=e||2,t=void 0===t?4*e:t,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;var i,a,s,c,u=l.getModuleCount()*e+2*t,d="";for(c="l"+e+",0 0,"+e+" -"+e+",0 0,-"+e+"z ",d+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',d+=o.scalable?"":' width="'+u+'px" height="'+u+'px"',d+=' viewBox="0 0 '+u+" "+u+'" ',d+=' preserveAspectRatio="xMinYMin meet"',d+=r.text||n.text?' role="img" aria-labelledby="'+b([r.id,n.id].join(" ").trim())+'"':"",d+=">",d+=r.text?'<title id="'+b(r.id)+'">'+b(r.text)+"</title>":"",d+=n.text?'<description id="'+b(n.id)+'">'+b(n.text)+"</description>":"",d+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',d+='<path d="',a=0;a<l.getModuleCount();a+=1)for(s=a*e+t,i=0;i<l.getModuleCount();i+=1)l.isDark(a,i)&&(d+="M"+(i*e+t)+","+s+c);return d+='" stroke="transparent" fill="black"/>',d+="</svg>"},l.createDataURL=function(e,t){e=e||2,t=void 0===t?4*e:t;var n=l.getModuleCount()*e+2*t,r=t,o=n-t;return j(n,n,(function(t,n){if(r<=t&&t<o&&r<=n&&n<o){var i=Math.floor((t-r)/e),a=Math.floor((n-r)/e);return l.isDark(a,i)?0:1}return 1}))},l.createImgTag=function(e,t,n){e=e||2,t=void 0===t?4*e:t;var r=l.getModuleCount()*e+2*t,o="";return o+="<img",o+=' src="',o+=l.createDataURL(e,t),o+='"',o+=' width="',o+=r,o+='"',o+=' height="',o+=r,o+='"',n&&(o+=' alt="',o+=b(n),o+='"'),o+="/>"};var b=function(e){for(var t="",n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=r}}return t};return l.createASCII=function(e,t){if((e=e||1)<2)return function(e){e=void 0===e?2:e;var t,n,r,o,i,a=1*l.getModuleCount()+2*e,s=e,c=a-e,u={"██":"█","█ ":"▀"," █":"▄","  ":" "},d={"██":"▀","█ ":"▀"," █":" ","  ":" "},p="";for(t=0;t<a;t+=2){for(r=Math.floor((t-s)/1),o=Math.floor((t+1-s)/1),n=0;n<a;n+=1)i="█",s<=n&&n<c&&s<=t&&t<c&&l.isDark(r,Math.floor((n-s)/1))&&(i=" "),s<=n&&n<c&&s<=t+1&&t+1<c&&l.isDark(o,Math.floor((n-s)/1))?i+=" ":i+="█",p+=e<1&&t+1>=c?d[i]:u[i];p+="\n"}return a%2&&e>0?p.substring(0,p.length-a-1)+Array(a+1).join("▀"):p.substring(0,p.length-1)}(t);e-=1,t=void 0===t?2*e:t;var n,r,o,i,a=l.getModuleCount()*e+2*t,s=t,c=a-t,u=Array(e+1).join("██"),d=Array(e+1).join("  "),p="",f="";for(n=0;n<a;n+=1){for(o=Math.floor((n-s)/e),f="",r=0;r<a;r+=1)i=1,s<=r&&r<c&&s<=n&&n<c&&l.isDark(o,Math.floor((r-s)/e))&&(i=0),f+=i?u:d;for(o=0;o<e;o+=1)p+=f+"\n"}return p.substring(0,p.length-1)},l.renderTo2dContext=function(e,t){t=t||2;for(var n=l.getModuleCount(),r=0;r<n;r++)for(var o=0;o<n;o++)e.fillStyle=l.isDark(r,o)?"black":"white",e.fillRect(r*t,o*t,t,t)},l};e.stringToBytes=(e.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(255&r)}return t}}).default,e.createStringToBytes=function(e,t){var n=function(){for(var n=R(e),r=function(){var e=n.read();if(-1==e)throw"eof";return e},o=0,i={};;){var a=n.read();if(-1==a)break;var s=r(),l=r()<<8|r();i[String.fromCharCode(a<<8|s)]=l,o+=1}if(o!=t)throw o+" != "+t;return i}(),r="?".charCodeAt(0);return function(e){for(var t=[],o=0;o<e.length;o+=1){var i=e.charCodeAt(o);if(i<128)t.push(i);else{var a=n[e.charAt(o)];"number"==typeof a?(255&a)==a?t.push(a):(t.push(a>>>8),t.push(255&a)):t.push(r)}}return t}};var t,n,r,o,i,a=1,s=2,l=4,c=8,u={L:1,M:0,Q:3,H:2},d=0,p=1,f=2,h=3,g=4,m=5,v=6,b=7,y=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,r=7973,i=function(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t},(o={}).getBCHTypeInfo=function(e){for(var t=e<<10;i(t)-i(n)>=0;)t^=n<<i(t)-i(n);return 21522^(e<<10|t)},o.getBCHTypeNumber=function(e){for(var t=e<<12;i(t)-i(r)>=0;)t^=r<<i(t)-i(r);return e<<12|t},o.getPatternPosition=function(e){return t[e-1]},o.getMaskFunction=function(e){switch(e){case d:return function(e,t){return(e+t)%2==0};case p:return function(e,t){return e%2==0};case f:return function(e,t){return t%3==0};case h:return function(e,t){return(e+t)%3==0};case g:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case m:return function(e,t){return e*t%2+e*t%3==0};case v:return function(e,t){return(e*t%2+e*t%3)%2==0};case b:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw"bad maskPattern:"+e}},o.getErrorCorrectPolynomial=function(e){for(var t=x([1],0),n=0;n<e;n+=1)t=t.multiply(x([1,w.gexp(n)],0));return t},o.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case a:return 10;case s:return 9;case l:case c:return 8;default:throw"mode:"+e}else if(t<27)switch(e){case a:return 12;case s:return 11;case l:return 16;case c:return 10;default:throw"mode:"+e}else{if(!(t<41))throw"type:"+t;switch(e){case a:return 14;case s:return 13;case l:return 16;case c:return 12;default:throw"mode:"+e}}},o.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var o=0;o<t;o+=1){for(var i=0,a=e.isDark(r,o),s=-1;s<=1;s+=1)if(!(r+s<0||t<=r+s))for(var l=-1;l<=1;l+=1)o+l<0||t<=o+l||0==s&&0==l||a==e.isDark(r+s,o+l)&&(i+=1);i>5&&(n+=3+i-5)}for(r=0;r<t-1;r+=1)for(o=0;o<t-1;o+=1){var c=0;e.isDark(r,o)&&(c+=1),e.isDark(r+1,o)&&(c+=1),e.isDark(r,o+1)&&(c+=1),e.isDark(r+1,o+1)&&(c+=1),0!=c&&4!=c||(n+=3)}for(r=0;r<t;r+=1)for(o=0;o<t-6;o+=1)e.isDark(r,o)&&!e.isDark(r,o+1)&&e.isDark(r,o+2)&&e.isDark(r,o+3)&&e.isDark(r,o+4)&&!e.isDark(r,o+5)&&e.isDark(r,o+6)&&(n+=40);for(o=0;o<t;o+=1)for(r=0;r<t-6;r+=1)e.isDark(r,o)&&!e.isDark(r+1,o)&&e.isDark(r+2,o)&&e.isDark(r+3,o)&&e.isDark(r+4,o)&&!e.isDark(r+5,o)&&e.isDark(r+6,o)&&(n+=40);var u=0;for(o=0;o<t;o+=1)for(r=0;r<t;r+=1)e.isDark(r,o)&&(u+=1);return n+=Math.abs(100*u/t/t-50)/5*10},o),w=function(){for(var e=new Array(256),t=new Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;n<255;n+=1)t[e[n]]=n;var r={glog:function(e){if(e<1)throw"glog("+e+")";return t[e]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]}};return r}();function x(e,t){if(void 0===e.length)throw e.length+"/"+t;var n=function(){for(var n=0;n<e.length&&0==e[n];)n+=1;for(var r=new Array(e.length-n+t),o=0;o<e.length-n;o+=1)r[o]=e[o+n];return r}(),r={getAt:function(e){return n[e]},getLength:function(){return n.length},multiply:function(e){for(var t=new Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var o=0;o<e.getLength();o+=1)t[n+o]^=w.gexp(w.glog(r.getAt(n))+w.glog(e.getAt(o)));return x(t,0)},mod:function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=w.glog(r.getAt(0))-w.glog(e.getAt(0)),n=new Array(r.getLength()),o=0;o<r.getLength();o+=1)n[o]=r.getAt(o);for(o=0;o<e.getLength();o+=1)n[o]^=w.gexp(w.glog(e.getAt(o))+t);return x(n,0).mod(e)}};return r}var S=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},n={};return n.getRSBlocks=function(n,r){var o=function(t,n){switch(n){case u.L:return e[4*(t-1)+0];case u.M:return e[4*(t-1)+1];case u.Q:return e[4*(t-1)+2];case u.H:return e[4*(t-1)+3];default:return}}(n,r);if(void 0===o)throw"bad rs block @ typeNumber:"+n+"/errorCorrectionLevel:"+r;for(var i=o.length/3,a=[],s=0;s<i;s+=1)for(var l=o[3*s+0],c=o[3*s+1],d=o[3*s+2],p=0;p<l;p+=1)a.push(t(c,d));return a},n}(),k=function(){var e=[],t=0,n={getBuffer:function(){return e},getAt:function(t){var n=Math.floor(t/8);return 1==(e[n]>>>7-t%8&1)},put:function(e,t){for(var r=0;r<t;r+=1)n.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return t},putBit:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n},C=function(e){var t=a,n=e,r={getMode:function(){return t},getLength:function(e){return n.length},write:function(e){for(var t=n,r=0;r+2<t.length;)e.put(o(t.substring(r,r+3)),10),r+=3;r<t.length&&(t.length-r==1?e.put(o(t.substring(r,r+1)),4):t.length-r==2&&e.put(o(t.substring(r,r+2)),7))}},o=function(e){for(var t=0,n=0;n<e.length;n+=1)t=10*t+i(e.charAt(n));return t},i=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+e};return r},_=function(e){var t=s,n=e,r={getMode:function(){return t},getLength:function(e){return n.length},write:function(e){for(var t=n,r=0;r+1<t.length;)e.put(45*o(t.charAt(r))+o(t.charAt(r+1)),11),r+=2;r<t.length&&e.put(o(t.charAt(r)),6)}},o=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-"0".charCodeAt(0);if("A"<=e&&e<="Z")return e.charCodeAt(0)-"A".charCodeAt(0)+10;switch(e){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+e}};return r},E=function(t){var n=l,r=e.stringToBytes(t),o={getMode:function(){return n},getLength:function(e){return r.length},write:function(e){for(var t=0;t<r.length;t+=1)e.put(r[t],8)}};return o},A=function(t){var n=c,r=e.stringToBytesFuncs.SJIS;if(!r)throw"sjis not supported.";!function(){var e=r("友");if(2!=e.length||38726!=(e[0]<<8|e[1]))throw"sjis not supported."}();var o=r(t),i={getMode:function(){return n},getLength:function(e){return~~(o.length/2)},write:function(e){for(var t=o,n=0;n+1<t.length;){var r=(255&t[n])<<8|255&t[n+1];if(33088<=r&&r<=40956)r-=33088;else{if(!(57408<=r&&r<=60351))throw"illegal char at "+(n+1)+"/"+r;r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13),n+=2}if(n<t.length)throw"illegal char at "+(n+1)}};return i},T=function(){var e=[],t={writeByte:function(t){e.push(255&t)},writeShort:function(e){t.writeByte(e),t.writeByte(e>>>8)},writeBytes:function(e,n,r){n=n||0,r=r||e.length;for(var o=0;o<r;o+=1)t.writeByte(e[o+n])},writeString:function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+="]"}};return t},R=function(e){var t=e,n=0,r=0,o=0,i={read:function(){for(;o<8;){if(n>=t.length){if(0==o)return-1;throw"unexpected end of file./"+o}var e=t.charAt(n);if(n+=1,"="==e)return o=0,-1;e.match(/^\s$/)||(r=r<<6|a(e.charCodeAt(0)),o+=6)}var i=r>>>o-8&255;return o-=8,i}},a=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw"c:"+e};return i},j=function(e,t,n){for(var r=function(e,t){var n=e,r=t,o=new Array(e*t),i={setPixel:function(e,t,r){o[t*n+e]=r},write:function(e){e.writeString("GIF87a"),e.writeShort(n),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(","),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(r),e.writeByte(0);var t=a(2);e.writeByte(2);for(var o=0;t.length-o>255;)e.writeByte(255),e.writeBytes(t,o,255),o+=255;e.writeByte(t.length-o),e.writeBytes(t,o,t.length-o),e.writeByte(0),e.writeString(";")}},a=function(e){for(var t=1<<e,n=1+(1<<e),r=e+1,i=s(),a=0;a<t;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(t)),i.add(String.fromCharCode(n));var l,c,u,d,p=T(),f=(l=p,c=0,u=0,d={write:function(e,t){if(e>>>t!=0)throw"length over";for(;c+t>=8;)l.writeByte(255&(e<<c|u)),t-=8-c,e>>>=8-c,u=0,c=0;u|=e<<c,c+=t},flush:function(){c>0&&l.writeByte(u)}},d);f.write(t,r);var h=0,g=String.fromCharCode(o[h]);for(h+=1;h<o.length;){var m=String.fromCharCode(o[h]);h+=1,i.contains(g+m)?g+=m:(f.write(i.indexOf(g),r),i.size()<4095&&(i.size()==1<<r&&(r+=1),i.add(g+m)),g=m)}return f.write(i.indexOf(g),r),f.write(n,r),f.flush(),p.toByteArray()},s=function(){var e={},t=0,n={add:function(r){if(n.contains(r))throw"dup key:"+r;e[r]=t,t+=1},size:function(){return t},indexOf:function(t){return e[t]},contains:function(t){return void 0!==e[t]}};return n};return i}(e,t),o=0;o<t;o+=1)for(var i=0;i<e;i+=1)r.setPixel(i,o,n(i,o));var a=T();r.write(a);for(var s=function(){var e=0,t=0,n=0,r="",o={},i=function(e){r+=String.fromCharCode(a(63&e))},a=function(e){if(e<0);else{if(e<26)return 65+e;if(e<52)return e-26+97;if(e<62)return e-52+48;if(62==e)return 43;if(63==e)return 47}throw"n:"+e};return o.writeByte=function(r){for(e=e<<8|255&r,t+=8,n+=1;t>=6;)i(e>>>t-6),t-=6},o.flush=function(){if(t>0&&(i(e<<6-t),e=0,t=0),n%3!=0)for(var o=3-n%3,a=0;a<o;a+=1)r+="="},o.toString=function(){return r},o}(),l=a.toByteArray(),c=0;c<l.length;c+=1)s.writeByte(l[c]);return s.flush(),"data:image/gif;base64,"+s};return e}();t.stringToBytesFuncs["UTF-8"]=function(e){return function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t}(e)},e.exports=t}(ZM);const QM=ZM.exports;function XM(e){return OL(this,null,(function*(){try{if(!(null==navigator?void 0:navigator.clipboard))throw new PP("Clipboard API not available");return yield navigator.clipboard.writeText(e)}catch(kK){}!function(e){const t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}finally{document.body.removeChild(t)}}(e)}))}const JM=KO("<div></div>"),e$=e=>{let t,n,r;const[o,i]=QL(!1),[a,s]=QL(48);eO((()=>{const o=QM(0,"L");o.addData(e.sourceUrl),o.make(),t.innerHTML=o.createSvgTag(4,0);const i=t.firstElementChild.clientWidth,a=Math.round(256/i*1e5)/1e5;if(r){const e=4*Math.ceil(60/(4*a)),t=NP(4*Math.ceil((i-e)/8));r.style.top=t,r.style.left=t,r.style.height=NP(e),r.style.width=NP(e),s(Math.round(48/a))}n.style.transform=`scale(${a})`}));let l=null;return RO(HM,{get class(){return e.class},onClick:()=>{i(!0),XM(e.sourceUrl),null!=l&&clearTimeout(l),l=setTimeout((()=>i(!1)),1500)},get children(){return[RO(qM,{ref(e){"function"==typeof n?n(e):n=e},get children(){return[(()=>{const e=JM.cloneNode(!0);return"function"==typeof t?QO(t,e):t=e,e})(),RO(MO,{get when(){return e.imageUrl},get children(){return RO(KM,{ref(e){"function"==typeof r?r(e):r=e},get children(){return RO(GM,{get src(){return e.imageUrl},alt:"",get size(){return a()}})}})}})]}}),RO(lM,{onBeforeEnter:e=>{jM(e,[{opacity:0,transform:"translate(-50%, 44px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:150,easing:"ease-out"})},onExit:(e,t)=>{jM(e,[{opacity:1,transform:"translate(-50%, 0)"},{opacity:0,transform:"translate(-50%, 44px)"}],{duration:150,easing:"ease-out"}).finished.then((()=>{t()}))},get children(){return RO(MO,{get when(){return o()&&!e.disableCopy},get children(){return RO(YM,{get children(){return[RO(L$,{size:"xs"}),RO(a$,{translationKey:"common.linkCopied",children:"Link Copied"})]}})}})}}),RO(MO,{get when(){return!e.disableCopy},get children(){return RO(WM,{get children(){return RO(hD,{})}})}})]}})};var t$=(e,t,n)=>{const r=t.trim().split(".").reduce(((e,t)=>e?e[t]:void 0),e);return void 0!==r?r:n},n$=(e={},t=(navigator.language in e?navigator.language:Object.keys(e)[0]))=>{const[n,r]=QL(t),[o,i]=AI(e);return[(e,t,r)=>{const i=t$(o[n()],e,r||"");return"function"==typeof i?i(t):"string"==typeof i?((e,t,n=/{{(.*?)}}/g)=>e.replace(n,((e,n)=>t$(t,n,""))))(i,t||{}):i},{add(e,t){i(e,(e=>Object.assign(e||{},t)))},locale:e=>e?r(e):n(),dict:e=>t$(o,e)}]},r$=lO({}),o$=()=>cO(r$);const i$=CP.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,a$=e=>{const t=SP(),[n]=o$();let r;const o=OO({fontSize:"14px",fontWeight:"510",lineHeight:"130%"},e);return eO((()=>{r&&"unset"!==o.cursor&&"pointer"!==getComputedStyle(r).cursor&&(r.style.cursor="default")})),RO(i$,{get fontSize(){return o.fontSize},get fontWeight(){return o.fontWeight},get lineHeight(){return o.lineHeight},get color(){return e.color||t.colors.text.primary},get class(){return o.class},ref(e){"function"==typeof r?r(e):r=e},"data-tc-text":"true",get children(){var e;return tO((()=>!!o.translationKey))()?n(o.translationKey,o.translationValues,null==(e=o.children)?void 0:e.toString()):o.children}})},s$=CP.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,l$=CP(DI)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,c$=e=>RO(s$,{get class(){return e.class},get children(){return RO(l$,{get src(){return e.src}})}}),u$={m:"16px",s:"12px",none:"0"},d$={m:"6px",s:"6px",none:"0"},p$=CP.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${tM} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${JI("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${eM} {
        &:active {
            transform: scale(0.92);
        }
    }
`,f$=CP(c$)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>u$[e.theme.borderRadius]};

    margin-bottom: 8px;
`,h$=CP(DI)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>d$[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,g$=CP(a$)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${JI("mobile")} {
        max-width: 80px;
    }
`,m$=CP(a$)`
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${JI("mobile")} {
        max-width: 80px;
    }
`,v$=KO("<div></div>"),b$=e=>{let t=null;const n=()=>{const e=null==t?void 0:t.querySelector("div");if(e&&e.scrollWidth>e.clientWidth){let t=0;const n=-.4,r=.05;for(;e.scrollWidth>e.clientWidth&&t>=n;)t-=r,e.style.letterSpacing=`${t}px`;0!==t&&(t-=r,e.style.letterSpacing=`${t}px`)}};return iO((()=>n())),eO((()=>{n()})),RO(p$,{get class(){return e.class},onClick:()=>e.onClick(),"data-tc-wallet-item":"true",get children(){return[tO((()=>tO((()=>"string"==typeof e.icon))()?RO(f$,{get src(){return e.icon}}):e.icon)),tO((()=>tO((()=>!!e.badgeUrl))()&&RO(h$,{get src(){return e.badgeUrl}}))),(()=>{const n=v$.cloneNode(!0);return QO((e=>t=e),n),XO(n,RO(g$,{get children(){return e.name}})),n})(),tO((()=>tO((()=>!!e.secondLine))()&&RO(m$,{get colorPrimary(){var t;return null==(t=e.secondLineColorPrimary)||t},get children(){return e.secondLine}})))]}})},y$=CP.h1`
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,w$=e=>{const[t]=o$();return RO(y$,{get class(){return e.class},"data-tc-h1":"true",get children(){var n;return tO((()=>!!e.translationKey))()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},x$=CP.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,S$=e=>{const[t]=o$();return RO(x$,{get class(){return e.class},"data-tc-h2":"true",get children(){var n;return tO((()=>!!e.translationKey))()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},k$=CP.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,C$=e=>{const[t]=o$();return RO(k$,{"data-tc-h3":"true",get class(){return e.class},get children(){var n;return tO((()=>!!e.translationKey))()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},_$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),E$=e=>{const t=SP(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{const e=_$.cloneNode(!0),t=e.firstChild;return JL((r=>{const o=n(),i=n();return o!==r._v$&&GO(e,"fill",r._v$=o),i!==r._v$2&&GO(t,"fill",r._v$2=i),r}),{_v$:void 0,_v$2:void 0}),e})()},A$=KO('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),T$=e=>{const t=SP();return(()=>{const n=A$.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.primary))),n})()},R$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),j$=KO('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),N$=KO('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),L$=e=>{const t=SP(),n=()=>e.size||"s",r=()=>e.fill||t.colors.icon.success;return tO((()=>{const o=tO((()=>"xs"===n()));return()=>o()?(()=>{const n=R$.cloneNode(!0),o=n.firstChild.firstChild,i=o.nextSibling;return JL((a=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==a._v$&&GO(n,"class",a._v$=s),l!==a._v$2&&GO(o,"fill",a._v$2=l),c!==a._v$3&&GO(i,"stroke",a._v$3=c),a}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{const o=tO((()=>"s"===n()));return()=>o()?(()=>{const n=j$.cloneNode(!0),o=n.firstChild,i=o.nextSibling;return JL((a=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==a._v$4&&GO(n,"class",a._v$4=s),l!==a._v$5&&GO(o,"fill",a._v$5=l),c!==a._v$6&&GO(i,"fill",a._v$6=c),a}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{const n=N$.cloneNode(!0),o=n.firstChild,i=o.nextSibling;return JL((a=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==a._v$7&&GO(n,"class",a._v$7=s),l!==a._v$8&&GO(o,"fill",a._v$8=l),c!==a._v$9&&GO(i,"fill",a._v$9=c),a}),{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},O$=KO('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),P$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),I$=KO('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),M$=e=>{const t=SP(),n=()=>e.size||"m",r=()=>e.fill||t.colors.icon.error;return tO((()=>{const o=tO((()=>"m"===n()));return()=>o()?(()=>{const n=O$.cloneNode(!0),o=n.firstChild,i=o.nextSibling;return JL((a=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==a._v$&&GO(n,"class",a._v$=s),l!==a._v$2&&GO(o,"fill",a._v$2=l),c!==a._v$3&&GO(i,"fill",a._v$3=c),a}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{const o=tO((()=>"s"===n()));return()=>o()?(()=>{const n=P$.cloneNode(!0),o=n.firstChild,i=o.nextSibling;return JL((a=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==a._v$4&&GO(n,"class",a._v$4=s),l!==a._v$5&&GO(o,"fill",a._v$5=l),c!==a._v$6&&GO(i,"stroke",a._v$6=c),a}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{const n=I$.cloneNode(!0),o=n.firstChild,i=o.nextSibling;return JL((a=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==a._v$7&&GO(n,"class",a._v$7=s),l!==a._v$8&&GO(o,"fill",a._v$8=l),c!==a._v$9&&GO(i,"fill",a._v$9=c),a}),{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},$$=KO('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),D$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),U$=KO('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),B$=e=>{const t=SP(),n=()=>e.size||"xs",r=()=>e.fill||t.colors.icon.tertiary,o=bP`
        animation: ${yP`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `} 1s linear infinite;
    `;return tO((()=>{const t=tO((()=>"xs"===n()));return()=>t()?(()=>{const t=$$.cloneNode(!0),n=t.firstChild;return JL((i=>{const a=hL(o,e.class),s=r();return a!==i._v$&&GO(t,"class",i._v$=a),s!==i._v$2&&GO(n,"fill",i._v$2=s),i}),{_v$:void 0,_v$2:void 0}),t})():(()=>{const t=tO((()=>"s"===n()));return()=>t()?(()=>{const t=D$.cloneNode(!0),n=t.firstChild;return JL((i=>{const a=hL(o,e.class),s=r();return a!==i._v$3&&GO(t,"class",i._v$3=a),s!==i._v$4&&GO(n,"fill",i._v$4=s),i}),{_v$3:void 0,_v$4:void 0}),t})():(()=>{const t=U$.cloneNode(!0),n=t.firstChild;return JL((i=>{const a=hL(o,e.class),s=r();return a!==i._v$5&&GO(t,"class",i._v$5=a),s!==i._v$6&&GO(n,"stroke",i._v$6=s),i}),{_v$5:void 0,_v$6:void 0}),t})()})()})())},z$=KO('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),F$=()=>{const e=SP();return(()=>{const t=z$.cloneNode(!0),n=t.firstChild.nextSibling.nextSibling;return JL((()=>GO(n,"fill",e.theme===uP.DARK?e.colors.constant.white:e.colors.constant.black))),t})()},V$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),W$=e=>{const t=SP();return(()=>{const n=V$.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.secondary))),n})()},H$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),q$=e=>{const t=SP();return(()=>{const n=H$.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.primary))),n})()},K$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),G$=e=>{const t=SP();return(()=>{const n=K$.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.primary))),n})()},Y$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),Z$=e=>{const t=SP();return(()=>{const n=Y$.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.primary))),n})()},Q$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),X$=e=>{const t=SP();return(()=>{const n=Q$.cloneNode(!0),r=n.firstChild.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.accent))),n})()},J$=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),eD=e=>{const t=SP();return(()=>{const n=J$.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.accent))),n})()},tD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),nD=e=>{const t=SP();return(()=>{const n=tD.cloneNode(!0),r=n.firstChild.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.accent))),n})()},rD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),oD=e=>{const t=SP();return(()=>{const n=rD.cloneNode(!0),r=n.firstChild;return JL((o=>{const i=e.class,a=e.fill||t.colors.icon.secondary;return i!==o._v$&&GO(n,"class",o._v$=i),a!==o._v$2&&GO(r,"fill",o._v$2=a),o}),{_v$:void 0,_v$2:void 0}),n})()},iD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),aD=e=>{const t=SP();return(()=>{const n=iD.cloneNode(!0),r=n.firstChild;return JL((o=>{const i=e.class,a=e.fill||t.colors.icon.secondary;return i!==o._v$&&GO(n,"class",o._v$=i),a!==o._v$2&&GO(r,"fill",o._v$2=a),o}),{_v$:void 0,_v$2:void 0}),n})()},sD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),lD=e=>{const t=SP();return(()=>{const n=sD.cloneNode(!0),r=n.firstChild;return JL((o=>{const i=e.class,a=e.fill||t.colors.icon.secondary;return i!==o._v$&&GO(n,"class",o._v$=i),a!==o._v$2&&GO(r,"fill",o._v$2=a),o}),{_v$:void 0,_v$2:void 0}),n})()},cD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),uD=e=>{const t=SP();return(()=>{const n=cD.cloneNode(!0),r=n.firstChild;return JL((o=>{const i=e.class,a=e.fill||t.colors.constant.white;return i!==o._v$&&GO(n,"class",o._v$=i),a!==o._v$2&&GO(r,"fill",o._v$2=a),o}),{_v$:void 0,_v$2:void 0}),n})()},dD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),pD=e=>{const t=SP();return(()=>{const n=dD.cloneNode(!0),r=n.firstChild;return JL((o=>{const i=e.class,a=e.fill||t.colors.icon.secondary;return i!==o._v$&&GO(n,"class",o._v$=i),a!==o._v$2&&GO(r,"fill",o._v$2=a),o}),{_v$:void 0,_v$2:void 0}),n})()},fD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),hD=e=>{const t=SP(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{const e=fD.cloneNode(!0),t=e.firstChild;return JL((r=>{const o=n(),i=n();return o!==r._v$&&GO(e,"fill",r._v$=o),i!==r._v$2&&GO(t,"fill",r._v$2=i),r}),{_v$:void 0,_v$2:void 0}),e})()},gD=KO('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),mD=e=>{const t=SP();return(()=>{const n=gD.cloneNode(!0),r=n.firstChild;return JL((()=>GO(r,"fill",e.fill||t.colors.icon.secondary))),n})()},vD={m:"16px",s:"12px",none:"0"},bD={m:"6px",s:"6px",none:"0"},yD=CP.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>vD[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,wD=CP(c$)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>bD[e.theme.borderRadius]};
`,xD=e=>RO(b$,{get name(){return e.labelLine1},get secondLine(){return e.labelLine2},get icon(){return RO(yD,{get children(){return RO(IO,{each:[0,1,2,3],children:t=>RO(wD,{get src(){return e.images[t]}})})}})},onClick:()=>e.onClick()}),SD="telegram-wallet",kD="https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",CD="https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png",_D=e=>{const[t]=o$();return tO((()=>{const n=tO((()=>e.wallet.appName===SD));return()=>n()?RO(b$,{get icon(){return e.wallet.imageUrl},get name(){return t("walletItem.walletOn",{},"Wallet On")},secondLine:"Telegram",get badgeUrl(){return CD},onClick:()=>e.onClick()}):RO(b$,{get icon(){return e.wallet.imageUrl},get name(){return e.wallet.name},get secondLine(){return(()=>{if(e.wallet.appName!==SD)return"isPreferred"in e.wallet&&e.wallet.isPreferred?t("walletItem.recent",{},"Recent"):RN(e.wallet)?t("walletItem.installed",{},"Installed"):"Tonkeeper"===e.wallet.name?t("walletItem.popular",{},"Popular"):void 0})()},secondLineColorPrimary:!1,onClick:()=>e.onClick()})})())},ED=CP.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,AD=CP.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${JI("mobile")} {
        width: 100%;
        margin: 0;
    }
`,[TD,RD]=QL((null==(SL=zP())?void 0:SL.innerHeight)||0);zP()&&window.addEventListener("resize",(()=>RD(window.innerHeight)));const[jD,ND]=QL(XI("mobile")),LD=()=>ND(XI("mobile"));zP()&&(window.addEventListener("resize",(()=>LD())),window.addEventListener("load",(()=>LD()),{once:!0}));const OD=e=>{const[t,n]=QL(!1),r=()=>void 0!==e.maxHeight?`${e.maxHeight}px`:TD()-(jD()?150:200)+"px";return[RO(AD,{get isShown(){return t()}}),RO(ED,{get maxHeight(){return r()},onScroll:e=>{n(e.target.scrollTop>0)},get class(){return e.class},get children(){return e.children}})]},PD=CP.a`
    display: block;
    text-decoration: unset;
`,ID=e=>RO(PD,OO({get href(){return e.href},get target(){return e.blank?"_blank":"_self"},get class(){return e.class}},(()=>e.blank?{rel:"noreferrer noopener"}:{}),{get children(){return e.children}})),MD=lO(),$D=KO('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),DD=e=>{const t=SP();return(()=>{const n=$D.cloneNode(!0),r=n.firstChild;return JL((o=>{const i=e.class,a=e.fill||t.colors.icon.primary;return i!==o._v$&&GO(n,"class",o._v$=i),a!==o._v$2&&GO(r,"fill",o._v$2=a),o}),{_v$:void 0,_v$2:void 0}),n})()},UD=KO('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),BD=e=>{const t=SP(),n=()=>e.fill||t.colors.icon.primary;return(()=>{const e=UD.cloneNode(!0),t=e.firstChild,r=t.nextSibling;return JL((e=>{const o=n(),i=n();return o!==e._v$&&GO(t,"fill",e._v$=o),i!==e._v$2&&GO(r,"fill",e._v$2=i),e}),{_v$:void 0,_v$2:void 0}),e})()},zD={m:"8px",s:"4px",none:"0"},FD={m:"16px",s:"8px",none:"0"},VD=CP.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>FD[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,WD=CP.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,HD=CP.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>zD[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,qD=KO("<li></li>"),KD=e=>RO(a$,{get translationKey(){return e.translationKey},fontSize:"15px",fontWeight:"590",get children(){return e.children}}),GD={m:"16px",s:"8px",none:"0"},YD=CP.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>GD[e.theme.borderRadius]};
`,ZD=CP.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,QD=CP(a$)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,XD=e=>{const t=iM(e);return RO(YD,OO({get class(){return e.class},"data-tc-notification":"true"},t,{get children(){return[RO(ZD,{get children(){return[RO(C$,{get translationKey(){return e.header.translationKey},get translationValues(){return e.header.translationValues},get children(){return e.children}}),RO(MO,{get when(){return e.text},get children(){return RO(QD,{get translationKey(){return e.text.translationKey},get translationValues(){return e.text.translationValues}})}})]}}),tO((()=>e.icon))]}}))},JD=CP(B$)`
    align-self: center;
`,eU=e=>{const t=cO(MD),[n]=o$();return RO(XD,{get header(){return{translationKey:"notifications.confirm.header",translationValues:{name:t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet")}}},get class(){return e.class},get icon(){return RO(JD,{})},"data-tc-notification-confirm":"true",children:"Confirm operation in your wallet"})},tU=CP(M$)`
    margin-top: 2px;
`,nU=e=>RO(XD,{header:{translationKey:"notifications.transactionCanceled.header"},text:{translationKey:"notifications.transactionCanceled.text"},get icon(){return RO(tU,{size:"xs"})},get class(){return e.class},"data-tc-notification-tx-cancelled":"true",children:"Transaction cancelled"}),rU=CP(L$)`
    margin-top: 2px;
`,oU=e=>RO(XD,{header:{translationKey:"notifications.transactionSent.header"},text:{translationKey:"notifications.transactionSent.text"},get icon(){return RO(rU,{})},get class(){return e.class},"data-tc-notification-tx-sent":"true",children:"Transaction sent"}),iU=bP`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,aU={timeout:4500},[sU,lU]=QL(null);function cU(e){const{timeout:t}=jL(jL({},aU),e),[n,r]=QL([]),[o,i]=QL([]);return eO(function(e,t){const n=Array.isArray(e);let r;return o=>{let i;if(n){i=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]()}else i=e();const a=oO((()=>t(i,r,o)));return r=i,a}}(sI,(e=>{var n;if(!e||!e.showNotification)return;if(sU()===e)return;if("confirm-transaction"===(null==(n=sU())?void 0:n.name)&&"confirm-transaction"===e.name)return;lU(e),r((e=>e.filter((e=>"confirm-transaction"!==e.action))));const o={action:e.name};r((e=>[...e,o]));const a=setTimeout((()=>{r((e=>e.filter((e=>e!==o)))),i((e=>e.filter((e=>e!==a))))}),t);i((e=>[...e,a]))}))),aO((()=>{o().forEach((e=>clearTimeout(e)))})),n}const uU=KO('<div data-tc-list-notifications="true"></div>'),dU=CP(aM)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${jP(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,pU=CP(dU)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,fU=CP(aM)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${jP(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,hU=CP(B$)`
    height: 18px;
    width: 18px;
`,gU=CP.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,mU=CP((e=>{const t=cO(MD),[n,r]=QL(!1);return RO(VD,{ref(t){const n=e.ref;"function"==typeof n?n(t):e.ref=t},get class(){return e.class},"data-tc-dropdown":"true",get children(){return RO(WD,{get children(){return[(()=>{const e=qD.cloneNode(!0);return XO(e,RO(HD,{onClick:()=>OL(void 0,null,(function*(){const e=JN(t.account.address,t.account.chain===Mj.TESTNET);yield XM(e),r(!0),setTimeout((()=>r(!1)),1e3)})),get children(){return[RO(DD,{}),RO(MO,{get when(){return!n()},get children(){return RO(KD,{translationKey:"button.dropdown.copy",children:"Copy address"})}}),RO(MO,{get when(){return n()},get children(){return RO(KD,{translationKey:"button.dropdown.copied",children:"Address copied!"})}})]}})),e})(),(()=>{const n=qD.cloneNode(!0);return XO(n,RO(HD,{onClick:()=>(t.disconnect(),void e.onClose()),get children(){return[RO(BD,{}),RO(KD,{translationKey:"button.dropdown.disconnect",children:"Disconnect"})]}})),n})()]}})}})}))`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,vU=CP((e=>{const t=cU();return(()=>{const n=uU.cloneNode(!0);return XO(n,RO(uM,{onBeforeEnter:e=>{jM(e,[{opacity:0,transform:"translateY(0)"},{opacity:1,transform:"translateY(-8px)"}],{duration:200})},onExit:(e,t)=>{jM(e,[{opacity:1,transform:"translateY(-8px)"},{opacity:0,transform:"translateY(-30px)"}],{duration:200}).finished.then(t)},get children(){return RO(IO,{get each(){return t()},children:e=>RO($O,{get children(){return[RO(DO,{get when(){return"transaction-sent"===e.action},get children(){return RO(oU,{class:iU})}}),RO(DO,{get when(){return"transaction-canceled"===e.action},get children(){return RO(nU,{class:iU})}}),RO(DO,{get when(){return"confirm-transaction"===e.action},get children(){return RO(eU,{class:iU})}})]}})})}})),JL((()=>YO(n,e.class))),n})()}))`
    > div:first-child {
        margin-top: 20px;
    }
`;function bU(e){return e.split("-")[0]}function yU(e,t,n){let{reference:r,floating:o}=e;const i=r.x+r.width/2-o.width/2,a=r.y+r.height/2-o.height/2,s=function(e){return["top","bottom"].includes(bU(e))?"x":"y"}(t),l="y"===s?"height":"width";const c=r[l]/2-o[l]/2,u="x"===s;let d;switch(bU(t)){case"top":d={x:i,y:r.y-o.height};break;case"bottom":d={x:i,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:a};break;case"left":d={x:r.x-o.width,y:a};break;default:d={x:r.x,y:r.y}}switch(function(e){return e.split("-")[1]}(t)){case"start":d[s]-=c*(n&&u?-1:1);break;case"end":d[s]+=c*(n&&u?-1:1)}return d}function wU(e){return NL(jL({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}function xU(e){var t;return(null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function SU(e){return xU(e).getComputedStyle(e)}function kU(e){return TU(e)?(e.nodeName||"").toLowerCase():""}let CU;function _U(){if(CU)return CU;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(CU=e.brands.map((e=>e.brand+"/"+e.version)).join(" "),CU):navigator.userAgent}function EU(e){return e instanceof xU(e).HTMLElement}function AU(e){return e instanceof xU(e).Element}function TU(e){return e instanceof xU(e).Node}function RU(e){if("undefined"==typeof ShadowRoot)return!1;return e instanceof xU(e).ShadowRoot||e instanceof ShadowRoot}function jU(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=SU(e);return/auto|scroll|overlay|hidden/.test(t+r+n)&&!["inline","contents"].includes(o)}function NU(e){return["table","td","th"].includes(kU(e))}function LU(e){const t=/firefox/i.test(_U()),n=SU(e),r=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!r&&"none"!==r||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((e=>n.willChange.includes(e)))||["paint","layout","strict","content"].some((e=>{const t=n.contain;return null!=t&&t.includes(e)}))}function OU(){return!/^((?!chrome|android).)*safari/i.test(_U())}function PU(e){return["html","body","#document"].includes(kU(e))}const IU=Math.min,MU=Math.max,$U=Math.round,DU={x:1,y:1};function UU(e){const t=!AU(e)&&e.contextElement?e.contextElement:AU(e)?e:null;if(!t)return DU;const n=t.getBoundingClientRect(),r=SU(t);if("border-box"!==r.boxSizing)return EU(t)?{x:t.offsetWidth>0&&$U(n.width)/t.offsetWidth||1,y:t.offsetHeight>0&&$U(n.height)/t.offsetHeight||1}:DU;let o=n.width/parseFloat(r.width),i=n.height/parseFloat(r.height);return o&&Number.isFinite(o)||(o=1),i&&Number.isFinite(i)||(i=1),{x:o,y:i}}function BU(e,t,n,r){var o,i,a,s;void 0===t&&(t=!1),void 0===n&&(n=!1);const l=e.getBoundingClientRect();let c=DU;t&&(r?AU(r)&&(c=UU(r)):c=UU(e));const u=AU(e)?xU(e):window,d=!OU()&&n,p=(l.left+(d&&null!=(o=null==(i=u.visualViewport)?void 0:i.offsetLeft)?o:0))/c.x,f=(l.top+(d&&null!=(a=null==(s=u.visualViewport)?void 0:s.offsetTop)?a:0))/c.y,h=l.width/c.x,g=l.height/c.y;return{width:h,height:g,top:f,right:p+h,bottom:f+g,left:p,x:p,y:f}}function zU(e){return((TU(e)?e.ownerDocument:e.document)||window.document).documentElement}function FU(e){return AU(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function VU(e){return BU(zU(e)).left+FU(e).scrollLeft}function WU(e,t,n){const r=EU(t),o=zU(t),i=BU(e,!0,"fixed"===n,t);let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(r||!r&&"fixed"!==n)if(("body"!==kU(t)||jU(o))&&(a=FU(t)),EU(t)){const e=BU(t,!0);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=VU(o));return{x:i.left+a.scrollLeft-s.x,y:i.top+a.scrollTop-s.y,width:i.width,height:i.height}}function HU(e){if("html"===kU(e))return e;const t=e.assignedSlot||e.parentNode||(RU(e)?e.host:null)||zU(e);return RU(t)?t.host:t}function qU(e){return EU(e)&&"fixed"!==SU(e).position?e.offsetParent:null}function KU(e){const t=xU(e);let n=qU(e);for(;n&&NU(n)&&"static"===SU(n).position;)n=qU(n);return n&&("html"===kU(n)||"body"===kU(n)&&"static"===SU(n).position&&!LU(n))?t:n||function(e){let t=HU(e);for(;EU(t)&&!PU(t);){if(LU(t))return t;t=HU(t)}return null}(e)||t}function GU(e){const t=HU(e);return PU(t)?e.ownerDocument.body:EU(t)&&jU(t)?t:GU(t)}function YU(e,t){var n;void 0===t&&(t=[]);const r=GU(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=xU(r);return o?t.concat(i,i.visualViewport||[],jU(r)?r:[]):t.concat(r,YU(r))}function ZU(e,t,n){return"viewport"===t?wU(function(e,t){const n=xU(e),r=zU(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=OU();(e||!e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n)):AU(t)?function(e,t){const n=BU(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=EU(e)?UU(e):{x:1,y:1},a=e.clientWidth*i.x,s=e.clientHeight*i.y,l=o*i.x,c=r*i.y;return{top:c,left:l,right:l+a,bottom:c+s,x:l,y:c,width:a,height:s}}(t,n):wU(function(e){var t;const n=zU(e),r=FU(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=MU(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=MU(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-r.scrollLeft+VU(e);const l=-r.scrollTop;return"rtl"===SU(o||n).direction&&(s+=MU(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(zU(e)))}const QU={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i="clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=YU(e).filter((e=>AU(e)&&"body"!==kU(e))),o=null;const i="fixed"===SU(e).position;let a=i?HU(e):e;for(;AU(a)&&!PU(a);){const e=SU(a),t=LU(a);(i?t||o:t||"static"!==e.position||!o||!["absolute","fixed"].includes(o.position))?o=e:r=r.filter((e=>e!==a)),a=HU(a)}return t.set(e,r),r}(t,this._c):[].concat(n),a=[...i,r],s=a[0],l=a.reduce(((e,n)=>{const r=ZU(t,n,o);return e.top=MU(r.top,e.top),e.right=IU(r.right,e.right),e.bottom=IU(r.bottom,e.bottom),e.left=MU(r.left,e.left),e}),ZU(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=EU(n),i=zU(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},s={x:1,y:1};const l={x:0,y:0};if((o||!o&&"fixed"!==r)&&(("body"!==kU(n)||jU(i))&&(a=FU(n)),EU(n))){const e=BU(n);s=UU(n),l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+l.x,y:t.y*s.y-a.scrollTop*s.y+l.y}},isElement:AU,getDimensions:function(e){if(EU(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=BU(e);return{width:t.width,height:t.height}},getOffsetParent:KU,getDocumentElement:zU,getScale:UU,getElementRects(e){return OL(this,null,(function*(){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||KU,i=this.getDimensions;return{reference:WU(t,yield o(n),r),floating:jL({x:0,y:0},yield i(n))}}))},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===SU(e).direction};function XU(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=!0,animationFrame:s=!1}=r,l=o&&!s,c=l||i?[...AU(e)?YU(e):e.contextElement?YU(e.contextElement):[],...YU(t)]:[];c.forEach((e=>{l&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));let u,d=null;if(a){let r=!0;d=new ResizeObserver((()=>{r||n(),r=!1})),AU(e)&&!s&&d.observe(e),AU(e)||!e.contextElement||s||d.observe(e.contextElement),d.observe(t)}let p=s?BU(e):null;return s&&function t(){const r=BU(e);!p||r.x===p.x&&r.y===p.y&&r.width===p.width&&r.height===p.height||n();p=r,u=requestAnimationFrame(t)}(),n(),()=>{var e;c.forEach((e=>{l&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==(e=d)||e.disconnect(),d=null,s&&cancelAnimationFrame(u)}}const JU=(e,t,n)=>{const r=new Map,o=jL({platform:QU},n),i=NL(jL({},o.platform),{_c:r});return((e,t,n)=>OL(void 0,null,(function*(){const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=yield null==a.isRTL?void 0:a.isRTL(t);if("production"!=={}.NODE_ENV){if(null==a&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),s.filter((e=>{let{name:t}=e;return"autoPlacement"===t||"flip"===t})).length>1)throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware","detected. This will lead to an infinite loop. Ensure only one of","either has been passed to the `middleware` array."].join(" "));e&&t||console.error(["Floating UI: The reference and/or floating element was not defined","when `computePosition()` was called. Ensure that both elements have","been created and can be measured."].join(" "))}let c=yield a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=yU(c,r,l),p=r,f={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:g}=s[n],{x:m,y:v,data:b,reset:y}=yield g({x:u,y:d,initialPlacement:r,placement:p,strategy:o,middlewareData:f,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,f=NL(jL({},f),{[i]:jL(jL({},f[i]),b)}),"production"!=={}.NODE_ENV&&h>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),y&&h<=50&&(h++,"object"==typeof y&&(y.placement&&(p=y.placement),y.rects&&(c=!0===y.rects?yield a.getElementRects({reference:e,floating:t,strategy:o}):y.rects),({x:u,y:d}=yU(c,p,l))),n=-1)}return{x:u,y:d,placement:p,strategy:o,middlewareData:f}})))(e,t,NL(jL({},o),{platform:i}))};const eB=KO('<tc-root data-tc-dropdown-container="true"></tc-root>'),tB=()=>{const e=SP(),t=cO(pI),n=cO(MD),[r,o]=QL(!1),[i,a]=QL(t.account),[s,l]=QL(!t.account);let c;const[u,d]=QL(),[p,f]=QL(),h=function(e,t,n){let r=()=>{var e;return null!=(e=null==n?void 0:n.placement)?e:"bottom"},o=()=>{var e;return null!=(e=null==n?void 0:n.strategy)?e:"absolute"},[i,a]=QL({x:null,y:null,placement:r(),strategy:o(),middlewareData:{}}),[s,l]=QL();eO((()=>{let e=s();if(e)throw e.value}));let c=tO((()=>(e(),t(),{})));function u(){let i=e(),s=t();if(i&&s){let e=c();JU(i,s,{middleware:null==n?void 0:n.middleware,placement:r(),strategy:o()}).then((t=>{e===c()&&a(t)}),(e=>{l(e)}))}}return eO((()=>{let i=e(),a=t();if(null==n||n.middleware,r(),o(),i&&a)if(null!=n&&n.whileElementsMounted){let e=n.whileElementsMounted(i,a,u);e&&aO(e)}else u()})),{get x(){return i().x},get y(){return i().y},get placement(){return i().placement},get strategy(){return i().strategy},get middlewareData(){return i().middlewareData},update:u}}(p,u,{whileElementsMounted:XU,placement:"bottom-end"});n.connectionRestored.then((()=>l(!1)));const g=t.onStatusChange((e=>{if(!e)return o(!1),a(null),void l(!1);a(e.account),l(!1)})),m=e=>{if(!i()||!r())return;const t=p().contains(e.target),n=c.contains(e.target);t||n||o(!1)};return iO((()=>{document.body.addEventListener("click",m)})),aO((()=>{document.body.removeEventListener("click",m),g()})),RO(cP,{component:EP,get children(){return[RO(MO,{get when(){return s()},get children(){return RO(fU,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return RO(hU,{})}})}}),RO(MO,{get when(){return!s()},get children(){return[RO(MO,{get when(){return!i()},get children(){return RO(dU,{onClick:()=>n.openModal(),"data-tc-connect-button":"true",scale:"s",get children(){return[RO(T$,{get fill(){return e.colors.connectButton.foreground}}),RO(a$,{translationKey:"button.connectWallet",fontSize:"15px",lineHeight:"18px",fontWeight:"590",get color(){return e.colors.connectButton.foreground},children:"Connect wallet"})]}})}}),RO(MO,{get when(){return i()},get children(){return RO(gU,{get children(){return[RO(pU,{onClick:()=>o((e=>!e)),ref:f,"data-tc-dropdown-button":"true",scale:"s",get children(){return[RO(a$,{fontSize:"15px",fontWeight:"590",lineHeight:"18px",get children(){return(()=>{const e=i();if(e){const t=JN(e.address,e.chain===Mj.TESTNET);return t.slice(0,4)+"…"+t.slice(-4)}return""})()}}),RO(gM,{direction:"bottom"})]}}),RO(lP,{get children(){const e=oO((()=>document.importNode(eB,!0)));return QO(d,e),e.style.setProperty("z-index","999"),e._$owner=VL,XO(e,RO(lM,{onBeforeEnter:e=>{jM(e,[{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"translateY(0)"}],{duration:150})},onExit:(e,t)=>{jM(e,[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-8px)"}],{duration:150}).finished.then(t)},get children(){return RO(MO,{get when(){return r()},get children(){return RO(mU,{get hidden(){return!r()},onClose:()=>o(!1),ref(e){"function"==typeof c?c(e):c=e}})}})}}),null),XO(e,RO(vU,{}),null),JL((t=>{var n,r;const o=h.strategy,i=`${null!=(n=h.y)?n:0}px`,a=`${null!=(r=h.x)?r:0}px`;return o!==t._v$&&e.style.setProperty("position",t._v$=o),i!==t._v$2&&e.style.setProperty("top",t._v$2=i),a!==t._v$3&&e.style.setProperty("left",t._v$3=a),t}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}})]}})}})]}})]}})},nB=CP(IM)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${JI("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,rB=CP(w$)`
    margin-top: 12px;

    ${JI("mobile")} {
        padding: 0 10px;
    }
`,oB=CP.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${JI("mobile")} {
        height: 160px;
        align-items: center;
    }
`;CP(a$)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`,CP((e=>{const t="tabBar"+Math.floor(1e4*Math.random());return RO(DM,{get class(){return e.class},"data-tc-tab-bar":"true",get children(){return[RO(UM,{get right(){return 1===e.selectedTabIndex}}),RO(zM,{get isActive(){return 0===e.selectedTabIndex},get children(){return[RO(BM,{type:"radio",name:t,get checked(){return 0===e.selectedTabIndex},onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,0)}}),tO((()=>e.tab1))]}}),RO(zM,{get isActive(){return 1===e.selectedTabIndex},get children(){return[RO(BM,{type:"radio",get checked(){return 1===e.selectedTabIndex},name:t,onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,1)}}),tO((()=>e.tab2))]}})]}})}))`
    margin: 0 auto 22px;
`;const[iB,aB]=AI({buttonRootId:null,language:"en",returnStrategy:"back",twaReturnUrl:void 0,walletsListConfiguration:{},enableAndroidBackHandler:!0});function sB(e){return"jsBridgeKey"in e?NL(jL({},e),{injected:XN.isWalletInjected(e.jsBridgeKey),embedded:XN.isInsideWalletBrowser(e.jsBridgeKey)}):e}function lB(e,t){var n,r,o,i;return t?((null==(n=t.includeWallets)?void 0:n.length)&&(r="name",o=e,i=t.includeWallets.map(sB),e=o.map((e=>{const t=i.find((t=>t[r]===e[r]));return i=i.filter((t=>t[r]!==e[r])),void 0===t?e:t})).concat(i)),e):e}function cB(e){return e.platforms.some((e=>["macos","linux","windows"].includes(e)))}function uB(e){return e.platforms.some((e=>["ios","android"].includes(e)))}function dB(e){return e.platforms.some((e=>["chrome","firefox","safari"].includes(e)))}function pB(e,t){return!!t&&(e.name.toLowerCase()===t.toLowerCase()||e.appName.toLowerCase()===t.toLowerCase())}const fB=CP.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,hB=CP(w$)`
    margin-bottom: 18px;
`;CP.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${JI("mobile")} {
        width: 100%;
    }
`;const gB=CP.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${JI("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;CP(aM)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;const mB=CP(yM)`
    position: absolute;
    top: 16px;
    left: 16px;
`,vB=CP(_D)`
    height: 100%;
`,bB=KO("<li></li>"),yB=e=>RO(fB,{"data-tc-wallets-modal-list":"true",get children(){return[RO(mB,{icon:"arrow",onClick:()=>e.onBack()}),RO(hB,{translationKey:"walletModal.wallets",children:"Wallets"}),RO(OD,{get maxHeight(){return jD()?void 0:510},get children(){return RO(gB,{get children(){return RO(IO,{get each(){return jD()?e.walletsList.filter(uB):e.walletsList},children:t=>(()=>{const n=bB.cloneNode(!0);return XO(n,RO(vB,{wallet:t,onClick:()=>e.onSelect(t)})),n})()})}})}})]}}),wB={m:"16px",s:"12px",none:"0"},xB={m:"6px",s:"6px",none:"0"},SB=CP.div`
    display: flex;
    flex-direction: column;
`,kB=CP.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,CB=CP(e$)`
    margin-bottom: 24px;
`,_B=CP(w$)`
    max-width: 288px;
    margin: 0 auto 2px;
`,EB=CP(S$)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,AB=CP(yM)`
    position: absolute;
    top: 16px;
    left: 16px;
`,TB=CP.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,RB=CP(TB)`
    padding-bottom: 0;
`,jB=CP(aM)`
    margin-bottom: 24px;
`,NB=CP(B$)`
    margin-bottom: 18px;
    margin-top: 2px;
`,LB=CP(M$)`
    margin-bottom: 16px;
`,OB=CP(S$)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,PB=CP(aM)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>wB[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,IB=CP(DI)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>xB[e.theme.borderRadius]};
`,MB=e=>{const[t]=o$();return tO((()=>{var n;return t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString())}))};function $B(e,t){let n;n="string"==typeof t?t:VI()?t.twaReturnUrl||t.returnStrategy:"none";const r=function(e,t,n){const r=new URL(e);return r.searchParams.append(t,n),r.toString()}(e,"ret",n);if(!cN(e))return r;const o=r.slice(r.lastIndexOf("&")+1);return r.slice(0,r.lastIndexOf("&"))+"-"+uN(o)}function DB(e,t){t=jL({},t);const n=function(e){const t=new URL(e);t.searchParams.has("attach")&&(t.searchParams.delete("attach"),t.pathname+="/start");return t.toString()}(e),r=new URL(n);if(r.searchParams.has("startapp")||r.searchParams.append("startapp","tonconnect"),WI()){t.returnStrategy="back";$P($B(r.toString(),t.returnStrategy))}else if(VI())if(FI("ios","android","macos","tdesktop","web")){t.returnStrategy="back";qI($B(r.toString(),t.returnStrategy))}else FI("weba")?qI($B(r.toString(),t)):$P($B(r.toString(),t));else if(WP("ios")){"back"===t.returnStrategy&&(HP("safari")?t.returnStrategy="back":HP("chrome")?t.returnStrategy="googlechrome://":HP("firefox")?t.returnStrategy="firefox://":HP("opera")?t.returnStrategy="opera-http://":t.returnStrategy=location.href);const e=HP("chrome"),n=HP("firefox");if((e||n)&&!t.forceRedirect){const e=$B(r.toString(),t.returnStrategy);DP(BB(e),(()=>$P(e)))}else{$P($B(r.toString(),t.returnStrategy))}}else if(WP("android")){t.returnStrategy="back";const e=HP("chrome"),n=HP("firefox");if((e||n)&&!t.forceRedirect){const e=$B(r.toString(),t.returnStrategy);DP(BB(e),(()=>$P(e)))}else{$P($B(r.toString(),t.returnStrategy))}}else if(WP("ipad")){"back"===t.returnStrategy&&(HP("safari")?t.returnStrategy="back":HP("chrome")?t.returnStrategy="googlechrome://":HP("firefox")?t.returnStrategy="firefox://":HP("opera")?t.returnStrategy="opera-http://":t.returnStrategy=location.href);const e=HP("chrome"),n=HP("firefox"),o=(e||n)&&!t.forceRedirect,i=$B(r.toString(),t.returnStrategy);if(o){DP(BB(i),(()=>$P(i)))}else $P(i)}else if(WP("macos","windows","linux")){t.returnStrategy="back",t.twaReturnUrl=void 0;const e=$B(r.toString(),t.returnStrategy);if(t.forceRedirect)$P(e);else{DP(BB(e),(()=>$P(e)))}}else $P($B(r.toString(),t))}function UB(e,t,n,r){if(n=jL({},n),WI())if(WP("ios","android"))"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve"),r("universal-link"),MP($B(e,n.returnStrategy),"_self");else{r("universal-link");$P($B(e,n.returnStrategy))}else if(VI())if(FI("ios","android")){"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve"),r("universal-link");const t=$B(e,n.returnStrategy);qI(t,(()=>{r("universal-link"),$P(t)}))}else if(FI("macos","tdesktop")){"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve");const o=$B(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),DP(qP(o,t),(()=>{r("universal-link"),$P(o)}))):(r("universal-link"),$P(o))}else if(FI("weba")){"back"===n.returnStrategy&&(HP("safari")?n.returnStrategy=location.href:HP("chrome")?n.returnStrategy="googlechrome://":HP("firefox")?n.returnStrategy="firefox://":HP("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href);const o=$B(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),DP(qP(o,t),(()=>{r("universal-link"),$P(o)}))):(r("universal-link"),$P(o))}else if(FI("web")){"back"===n.returnStrategy&&(HP("safari")?n.returnStrategy=location.href:HP("chrome")?n.returnStrategy="googlechrome://":HP("firefox")?n.returnStrategy="firefox://":HP("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href);const o=$B(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),DP(qP(o,t),(()=>{r("universal-link"),$P(o)}))):(r("universal-link"),$P(o))}else{r("universal-link");$P($B(e,n.returnStrategy))}else if(WP("ios"))"back"===n.returnStrategy&&(HP("safari")?n.returnStrategy="none":HP("chrome")?n.returnStrategy="googlechrome://":HP("firefox")?n.returnStrategy="firefox://":HP("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),HP("chrome")?(r("universal-link"),MP($B(e,n.returnStrategy),"_self")):(r("universal-link"),$P($B(e,n.returnStrategy)));else if(WP("android"))"back"===n.returnStrategy&&(HP("chrome")?n.returnStrategy="googlechrome://":HP("firefox")?n.returnStrategy="firefox://":HP("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),r("universal-link"),$P($B(e,n.returnStrategy));else if(WP("ipad"))"back"===n.returnStrategy&&(HP("safari")?n.returnStrategy="none":HP("chrome")?n.returnStrategy="googlechrome://":HP("firefox")?n.returnStrategy="firefox://":HP("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),HP("chrome")?(r("universal-link"),MP($B(e,n.returnStrategy),"_self")):(r("universal-link"),$P($B(e,n.returnStrategy)));else if(WP("macos","windows","linux")){"back"===n.returnStrategy&&(HP("safari")?n.returnStrategy="none":HP("chrome")?n.returnStrategy="googlechrome://":HP("firefox")?n.returnStrategy="firefox://":HP("opera")?n.returnStrategy="opera-http://":n.returnStrategy="none");const o=$B(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),DP(qP(o,t),(()=>{r("universal-link"),$P(o)}))):(r("universal-link"),$P(o))}else r("universal-link"),$P($B(e,n.returnStrategy))}function BB(e){const t=new URL(e),[,n,r]=t.pathname.split("/");return`tg://resolve?domain=${n}&appname=${r}&startapp=${t.searchParams.get("startapp")}`}const zB=e=>{const[t,n]=QL("mobile"),[r,o]=QL(!1),[i,a]=QL(),[s,l]=QL(!0),c=cO(pI);aO(c.onStatusChange((()=>{}),(()=>{e.wallet.appName!==SD&&o(!0)})));const u=()=>{try{const t=c.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest);a(t)}catch(kK){}};eO((()=>{"extension"!==oO(t)&&(uB(e.wallet)||cB(e.wallet))&&u()}));const d=()=>{o(!1),"extension"===t()&&u(),n("mobile"),aI(NL(jL({},e.wallet),{openMethod:"qrcode"}))},p=()=>{if(o(!1),"extension"===t()&&u(),n("desktop"),cN(i()))f();else{const t=!s();l(!1),UB(i(),e.wallet.deepLink,{returnStrategy:iB.returnStrategy,forceRedirect:t},(t=>{aI(NL(jL({},e.wallet),{openMethod:t}))}))}},f=()=>{const t=!s();l(!1),aI(NL(jL({},e.wallet),{openMethod:"universal-link"})),DB(i(),{returnStrategy:iB.returnStrategy,twaReturnUrl:iB.twaReturnUrl,forceRedirect:t})},h=()=>{o(!1),n("extension"),RN(e.wallet)&&(aI(e.wallet),c.connect({jsBridgeKey:e.wallet.jsBridgeKey},e.additionalRequest))};return uB(e.wallet)?d():dB(e.wallet)?h():p(),RO(SB,{"data-tc-wallets-modal-connection-desktop":"true",get children(){return[RO(MO,{get when(){return!e.backDisabled},get children(){return RO(AB,{icon:"arrow",onClick:()=>e.onBackClick()})}}),RO(_B,{get children(){return e.wallet.name}}),RO(MO,{get when(){return"mobile"===t()},get children(){return RO(EB,{translationKey:"walletModal.desktopConnectionModal.scanQR",get translationValues(){return{name:e.wallet.name}},get children(){return["Scan the QR code below with your phone’s or ",tO((()=>e.wallet.name)),"’s camera"]}})}}),RO(kB,{get qr(){return"mobile"===t()},get children(){return RO($O,{get children(){return[RO(DO,{get when(){return"mobile"===t()},get children(){return RO(CB,{disableCopy:!1,get sourceUrl(){return $B(i(),"none")},get imageUrl(){return e.wallet.imageUrl}})}}),RO(DO,{get when(){return r()},get children(){return[RO(LB,{size:"s"}),RO(OB,{translationKey:"walletModal.desktopConnectionModal.connectionDeclined",children:"Connection declined"}),RO(TB,{get children(){return RO(aM,{get leftIcon(){return RO(X$,{})},get onClick(){return"extension"===t()?h:p},get children(){return RO(MB,{translationKey:"common.retry",children:"Retry"})}})}})]}}),RO(DO,{get when(){return"extension"===t()},get children(){return[RO(MO,{get when(){return RN(e.wallet)},get children(){return[RO(NB,{size:"s"}),RO(OB,{translationKey:"walletModal.desktopConnectionModal.continueInExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",tO((()=>e.wallet.name))," browser extension…"]}}),RO(TB,{get children(){return RO(aM,{get leftIcon(){return RO(X$,{})},onClick:h,get children(){return RO(MB,{translationKey:"common.retry",children:"Retry"})}})}})]}}),RO(MO,{get when(){return!RN(e.wallet)},get children(){return[RO(OB,{translationKey:"walletModal.desktopConnectionModal.dontHaveExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Seems you don't have installed ",tO((()=>e.wallet.name))," browser extension"]}}),RO(TB,{get children(){return RO(ID,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return RO(aM,{get rightIcon(){return RO(eD,{})},onClick:h,get children(){return RO(MB,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",tO((()=>e.wallet.name))]}})}})}})}})]}})]}}),RO(DO,{get when(){return"desktop"===t()},get children(){return[RO(B$,{size:"m"}),RO(OB,{translationKey:"walletModal.desktopConnectionModal.continueOnDesktop",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",tO((()=>e.wallet.name))," on desktop…"]}}),RO(TB,{get children(){return[RO(aM,{get leftIcon(){return RO(X$,{})},onClick:p,get children(){return RO(MB,{translationKey:"common.retry",children:"Retry"})}}),RO(ID,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return RO(aM,{get rightIcon(){return RO(eD,{})},get children(){return RO(MB,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",tO((()=>e.wallet.name))]}})}})}})]}})]}})]}})}}),RO(MO,{get when(){return e.wallet.appName===SD},get children(){return RO(PB,{get rightIcon(){return RO(IB,{get src(){return CD}})},scale:"s",onClick:f,get children(){return RO(MB,{translationKey:"walletModal.desktopConnectionModal.openWalletOnTelegram",children:"Open Wallet in Telegram on desktop"})}})}}),RO(MO,{get when(){return e.wallet.appName!==SD},get children(){return RO(RB,{get children(){return[RO(MO,{get when(){return tO((()=>"mobile"!==t()))()&&uB(e.wallet)},get children(){return RO(jB,{appearance:"secondary",get leftIcon(){return RO(G$,{})},onClick:d,get children(){return RO(MB,{translationKey:"common.mobile",children:"Mobile"})}})}}),RO(MO,{get when(){return tO((()=>"extension"!==t()))()&&dB(e.wallet)},get children(){return RO(jB,{appearance:"secondary",get leftIcon(){return RO(q$,{})},onClick:h,get children(){return RO(MB,{translationKey:"common.browserExtension",children:"Browser Extension"})}})}}),RO(MO,{get when(){return tO((()=>"desktop"!==t()))()&&cB(e.wallet)},get children(){return RO(jB,{appearance:"secondary",get leftIcon(){return RO(Z$,{})},onClick:p,get children(){return RO(MB,{translationKey:"common.desktop",children:"Desktop"})}})}})]}})}})]}})},FB=CP.div``,VB=CP(yM)`
    position: absolute;
    top: 16px;
    left: 16px;
`,WB=CP(w$)`
    margin-bottom: 18px;
`,HB=CP.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,qB=bP`
    margin-bottom: 12px;
`,KB=CP(C$)`
    text-align: center;
    margin-bottom: 4px;
`,GB=CP(a$)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,YB=CP.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,ZB="https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1",QB=e=>RO(FB,{"data-tc-wallets-modal-info":"true",get children(){return[RO(VB,{icon:"arrow",onClick:()=>e.onBackClick()}),RO(WB,{translationKey:"walletModal.infoModal.whatIsAWallet",children:"What is a wallet"}),RO(OD,{get children(){return[RO(HB,{get children(){return[RO(oD,{class:qB}),RO(KB,{translationKey:"walletModal.infoModal.secureDigitalAssets",children:"Secure digital assets storage"}),RO(GB,{translationKey:"walletModal.infoModal.walletProtects",children:"A wallet protects and manages your digital assets including TON, tokens and collectables."})]}}),RO(HB,{get children(){return[RO(aD,{class:qB}),RO(KB,{translationKey:"walletModal.infoModal.controlIdentity",children:"Control your Web3 identity"}),RO(GB,{translationKey:"walletModal.infoModal.manageIdentity",children:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."})]}}),RO(HB,{get children(){return[RO(lD,{class:qB}),RO(KB,{translationKey:"walletModal.infoModal.effortlessCryptoTransactions",children:"Effortless crypto transactions"}),RO(GB,{translationKey:"walletModal.infoModal.easilySend",children:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."})]}}),RO(YB,{get children(){return RO(ID,{get href(){return ZB},blank:!0,get children(){return RO(aM,{get rightIcon(){return RO(nD,{})},get children(){return RO(MB,{translationKey:"walletModal.infoModal.getAWallet",children:"Get a Wallet"})}})}})}})]}})]}}),XB=CP.div``,JB=CP.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,ez=CP(w$)`
    max-width: 262px;
    margin: 0 auto 8px;
`,tz=CP(yM)`
    position: absolute;
    top: 16px;
    left: 16px;
`,nz=CP.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>jP(e.theme.colors.icon.secondary,.2)};
`,rz=CP(DI)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,oz=CP(ID)`
    margin-left: auto;
`,iz=CP(B$)`
    margin-bottom: 18px;
    margin-top: 2px;
`,az=CP(M$)`
    margin-bottom: 16px;
`,sz=CP(S$)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,lz=CP.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,cz=CP(w$)`
    margin-bottom: 2px;
    padding: 0 64px;
`,uz=CP(S$)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,dz=CP.div`
    padding: 0 24px 24px;
`,pz=e=>[RO(cz,{get children(){return e.walletInfo.name}}),RO(uz,{translationKey:"walletModal.mobileConnectionModal.scanQR",get translationValues(){return{name:e.walletInfo.name}},get children(){return["Scan the QR code below with your phone’s or ",tO((()=>e.walletInfo.name)),"’s camera"]}}),RO(dz,{get children(){return RO(e$,{get imageUrl(){return e.walletInfo.imageUrl},get sourceUrl(){return $B(e.universalLink,"none")},disableCopy:!0})}})],fz=e=>{const t=SP(),[n,r]=QL(!0),[o,i]=QL(!1),[a,s]=QL(!1),l=cO(pI),c=l.onStatusChange((()=>{}),(()=>{s(!0)})),u=tO((()=>l.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest))),d=()=>{if(cN(u()))return aI(NL(jL({},e.wallet),{openMethod:"universal-link"})),void DB(u(),{returnStrategy:iB.returnStrategy,twaReturnUrl:iB.twaReturnUrl,forceRedirect:!0});s(!1);const t=!n();r(!1),UB(u(),e.wallet.deepLink,{returnStrategy:iB.returnStrategy,forceRedirect:t},(t=>{aI(NL(jL({},e.wallet),{openMethod:t}))}))},p=()=>{s(!1),i(!0),aI(NL(jL({},e.wallet),{openMethod:"qrcode"}))},f=()=>{o()?(i(!1),aI(NL(jL({},e.wallet),{openMethod:"universal-link"}))):e.onBackClick()};return aO(c),d(),RO(XB,{"data-tc-wallets-modal-connection-mobile":"true",get children(){return[RO(MO,{get when(){return!e.backDisabled||o()},get children(){return RO(tz,{icon:"arrow",onClick:f})}}),RO(MO,{get when(){return o()},get children(){return RO(pz,{get universalLink(){return u()},get walletInfo(){return e.wallet}})}}),RO(MO,{get when(){return!o()},get children(){return[RO(ez,{get children(){return e.wallet.name}}),RO(JB,{get children(){return[RO(MO,{get when(){return a()},get children(){return[RO(az,{size:"s"}),RO(sz,{translationKey:"walletModal.mobileConnectionModal.connectionDeclined",children:"Connection declined"}),RO(lz,{get children(){return[RO(aM,{get leftIcon(){return RO(X$,{})},onClick:d,get children(){return RO(MB,{translationKey:"common.retry",children:"Retry"})}}),RO(aM,{get leftIcon(){return RO(mD,{get fill(){return t.colors.accent}})},onClick:p,get children(){return RO(MB,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}}),RO(MO,{get when(){return!a()},get children(){return[RO(iz,{size:"s"}),RO(sz,{translationKey:"walletModal.mobileConnectionModal.continueIn",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",tO((()=>e.wallet.name)),"…"]}}),RO(lz,{get children(){return[RO(aM,{get leftIcon(){return RO(X$,{})},onClick:d,get children(){return RO(MB,{translationKey:"common.retry",children:"Retry"})}}),RO(aM,{get leftIcon(){return RO(mD,{get fill(){return t.colors.accent}})},onClick:p,get children(){return RO(MB,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}})]}}),RO(nz,{get children(){return[RO(rz,{get src(){return e.wallet.imageUrl}}),RO(C$,{get children(){return e.wallet.name}}),RO(oz,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return RO(aM,{get children(){return RO(MB,{translationKey:"common.get",children:"GET"})}})}})]}})]}})]}})},hz={m:"16px",s:"12px",none:"0"},gz={m:"6px",s:"6px",none:"0"},mz=CP.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,vz=CP.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${tM} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${eM} {
        &:active {
            transform: scale(0.92);
        }
    }
`,bz=CP.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,yz=CP.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>hz[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,wz=CP(w$)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,xz=CP(S$)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;CP(aM)`
    display: block;
    margin: 0 auto;
`;const Sz=CP(aM)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>hz[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
`,kz=CP(DI)`
    background-color: transparent;
    border-radius: ${e=>gz[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,Cz=CP(yM)`
    position: absolute;
    top: 16px;
    left: 16px;
`,_z=CP(w$)`
    margin-bottom: 2px;
    padding: 0 64px;
`,Ez=CP(S$)`
    margin-bottom: 20px;
    padding: 0 64px;
`,Az=CP.div`
    padding: 0 24px 24px;
`,Tz=e=>[RO(_z,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),RO(Ez,{translationKey:"walletModal.mobileUniversalModal.scan",children:"Scan with your mobile wallet"}),RO(Az,{get children(){return RO(e$,{get imageUrl(){return kD},get sourceUrl(){return $B(e.universalLink,"none")},disableCopy:!0})}})];function Rz(e){const t=new Set(e.filter(NN).map((e=>e.bridgeUrl)));return Array.from(t).map((e=>({bridgeUrl:e})))}function jz(e,t){const n=new Set(null==e?void 0:e.map((e=>e.bridgeUrl))),r=new Set(null==t?void 0:t.map((e=>e.bridgeUrl)));return n.size===r.size&&[...n].every((e=>r.has(e)))}const Nz=KO("<li></li>"),Lz=KO('<div data-tc-wallets-modal-universal-mobile="true"></div>'),Oz=e=>{const[t,n]=QL(!1),[r,o]=QL(!0),[i,a]=QL(null),s=iB.connector,l=()=>e.walletsList.filter((e=>uB(e)&&e.appName!==SD)),c=()=>l().length>7,u=tO((()=>Rz(e.walletsList)),null,{equals:jz}),d=()=>(i()||a(s.connect(u(),e.additionalRequest)),i());aI({openMethod:"universal-link"});const[p,f]=QL(void 0),h=()=>OL(void 0,null,(function*(){void 0!==p()&&clearTimeout(p()),yield XM(d());const e=setTimeout((()=>f(void 0)),1500);f(e)})),g=()=>{const e=!r();o(!1),UB(d(),void 0,{returnStrategy:iB.returnStrategy,forceRedirect:e},(e=>{aI({openMethod:e})}))},m=()=>{a(null);const t=e.walletsList.find((e=>e.appName===SD));if(!t||!NN(t))throw new PP("@wallet bot not found in the wallets list");const n=s.connect({bridgeUrl:t.bridgeUrl,universalLink:t.universalLink},e.additionalRequest),i=!r();o(!1),DB(n,{returnStrategy:iB.returnStrategy,twaReturnUrl:iB.twaReturnUrl,forceRedirect:i})},v=()=>{n(!0),aI({openMethod:"qrcode"})},b=()=>{n(!1),aI({openMethod:"universal-link"})};return(()=>{const n=Lz.cloneNode(!0);return XO(n,RO(MO,{get when(){return t()},get children(){return[RO(Cz,{icon:"arrow",onClick:b}),RO(Tz,{get universalLink(){return d()}})]}}),null),XO(n,RO(MO,{get when(){return!t()},get children(){return[RO(Cz,{get icon(){return RO(mD,{})},onClick:v}),RO(wz,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),RO(xz,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",maxWidth:342,children:"Open Wallet in Telegram or select your wallet to connect"}),RO(Sz,{get leftIcon(){return RO(uD,{})},get rightIcon(){return RO(kz,{get src(){return CD}})},onClick:m,scale:"s",get children(){return RO(MB,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegram",children:"Open Wallet in Telegram"})}}),RO(mz,{get children(){return[RO(IO,{get each(){return tO((()=>!!c()))()?l().slice(0,4):l()},children:t=>(()=>{const n=Nz.cloneNode(!0);return XO(n,RO(b$,{get icon(){return t.imageUrl},get name(){return t.name},onClick:()=>e.onSelect(t)})),n})()}),RO(MO,{get when(){return c()},get children(){const t=Nz.cloneNode(!0);return XO(t,RO(xD,{labelLine1:"View all",labelLine2:"wallets",get images(){return l().slice(3,7).map((e=>e.imageUrl))},onClick:()=>e.onSelectAllWallets()})),t}}),RO(bz,{children:" "}),RO(vz,{onClick:g,get children(){return[RO(yz,{get children(){return RO(E$,{})}}),RO(a$,{fontWeight:590,translationKey:"walletModal.mobileUniversalModal.openLink",children:"Open Link"})]}}),RO(vz,{onClick:h,get children(){return[RO(yz,{get children(){return tO((()=>void 0!==p()))()?RO(pD,{}):RO(hD,{})}}),RO(a$,{fontWeight:590,get translationKey(){return void 0!==p()?"common.copied":"common.copyLink"},get children(){return void 0!==p()?"Copied":"Copy Link"}})]}})]}})]}}),null),n})()},Pz={m:"16px",s:"8px",none:"0"},Iz={m:"8px",s:"4px",none:"0"},Mz=CP.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,$z=CP(S$)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,Dz=CP(S$)`
    margin-bottom: 16px;
`,Uz=CP(e$)`
    margin-bottom: 24px;
`,Bz=CP.ul`
    display: flex;
`;CP.div`
    display: flex;
    gap: 16px;
    width: 100%;
`,CP(aM)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>Pz[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`,CP.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>Pz[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`,CP.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>Iz[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,CP(DI)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`,CP.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,CP(a$)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;const zz=KO("<li></li>"),Fz=e=>{const[t,n]=QL(!1),r=iB.connector,o=tO((()=>Rz(e.walletsList)),null,{equals:jz});aI({openMethod:"qrcode"});const i=tO((()=>r.connect(o(),e.additionalRequest)));return RO(Mz,{onClick:()=>n(!1),"data-tc-wallets-modal-universal-desktop":"true",get children(){return[RO(w$,{translationKey:"walletModal.desktopUniversalModal.connectYourWallet",children:"Connect your wallet"}),RO($z,{translationKey:"walletModal.desktopUniversalModal.scan",children:"Scan with your mobile wallet"}),RO(Uz,{get sourceUrl(){return $B(i(),"none")},get disableCopy(){return t()},get imageUrl(){return kD}}),RO(Dz,{translationKey:"walletModal.desktopUniversalModal.availableWallets",children:"Available wallets"}),RO(Bz,{get children(){return[RO(IO,{get each(){return e.walletsList.slice(0,3)},children:t=>(()=>{const n=zz.cloneNode(!0);return XO(n,RO(_D,{wallet:t,onClick:()=>e.onSelect(t)})),n})()}),RO(xD,{labelLine1:"View all",labelLine2:"wallets",get images(){return e.walletsList.slice(3,7).map((e=>e.imageUrl))},onClick:()=>e.onSelectAllWallets()})]}})]}})},Vz=()=>{const{locale:e}=o$()[1];eO((()=>e(iB.language))),eO((()=>{XP()?LD():(i(null),s("universal"),c(!1))}));const t=cO(pI),n=cO(MD),[r]=nO((()=>n.getWallets())),[o,i]=QL(null),[a,s]=QL("universal"),[l,c]=QL(!1),u=tO((()=>{if("ready"!==r.state)return null;let e=lB(r(),iB.walletsListConfiguration);const t=e.filter(RN),n=e.filter((e=>!RN(e)));e=(t||[]).concat(n);const o=iB.preferredWalletAppName,i=e.find((e=>pB(e,o))),a=e.filter((e=>pB(e,o))).length>=2;o&&i&&!a&&(e=[NL(jL({},i),{isPreferred:!0})].concat(e.filter((e=>!pB(e,o)))));const s=e.find((e=>pB(e,SD)));return s&&(e=[s].concat(e.filter((e=>!pB(e,SD))))),e})),d=()=>{var e;return"loading"===(null==(e=iB.connectRequestParameters)?void 0:e.state)},p=tO((()=>{var e;if(!d())return null==(e=iB.connectRequestParameters)?void 0:e.value})),f=e=>{n.closeModal(e)},h=t.onStatusChange((e=>{e&&f("wallet-selected")})),g=()=>{s("all-wallets")},m=()=>{s("universal")},v=()=>{i(null)};return aO((()=>{i(null),c(!1)})),aO(h),RO(nB,{get opened(){return XP()},get enableAndroidBackHandler(){return iB.enableAndroidBackHandler},onClose:()=>f("action-cancelled"),onClickQuestion:()=>c((e=>!e)),"data-tc-wallets-modal-container":"true",get children(){return[RO(MO,{get when(){return l()},get children(){return RO(QB,{onBackClick:()=>c(!1)})}}),RO(MO,{get when(){return!l()},get children(){return[RO(MO,{get when(){return d()||!u()},get children(){return[RO(rB,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),RO(oB,{get children(){return RO(B$,{size:"m"})}})]}}),RO(MO,{get when(){return tO((()=>!d()))()&&u()},get children(){return RO($O,{get children(){return[RO(DO,{get when(){return o()},get children(){return RO(cP,{get component(){return jD()?fz:zB},get wallet(){return o()},get additionalRequest(){return p()},onBackClick:v})}}),RO(DO,{get when(){return"universal"===a()},get children(){return RO(cP,{get component(){return jD()?Oz:Fz},onSelect:i,get walletsList(){return u()},get additionalRequest(){return p()},onSelectAllWallets:g})}}),RO(DO,{get when(){return"all-wallets"===a()},get children(){return RO(yB,{get walletsList(){return u()},onBack:m,onSelect:i})}})]}})}})]}})]}})},Wz=CP.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,Hz=CP(w$)`
    margin-top: 16px;
`,qz=CP(a$)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,Kz=CP(aM)`
    min-width: 112px;
    margin-top: 32px;
`,Gz=CP(B$)`
    height: 16px;
    width: 16px;
`,Yz=CP(aM)`
    margin-top: 32px;
`,Zz=e=>{const t=iM(e),n=cO(MD),[r,o]=QL(!0),[i,a]=QL(!1);let s,l;eO((()=>{const e=sI();a(!!e&&"sent"in e&&e.sent)})),(null==n?void 0:n.wallet)&&"universalLink"in n.wallet&&("universal-link"===n.wallet.openMethod||cN(n.wallet.universalLink)&&VI())&&(s=n.wallet.universalLink),(null==n?void 0:n.wallet)&&"deepLink"in n.wallet&&("custom-deeplink"===n.wallet.openMethod||cN(n.wallet.deepLink)&&VI())&&(l=n.wallet.deepLink);const c=()=>{const e=sI(),t="returnStrategy"in e?e.returnStrategy:iB.returnStrategy,n=!r();o(!1),cN(s)?DB(s,{returnStrategy:t,twaReturnUrl:"twaReturnUrl"in e?e.twaReturnUrl:iB.twaReturnUrl,forceRedirect:n}):UB(s,l,{returnStrategy:t,forceRedirect:n},(()=>{}))};return RO(Wz,OO(t,{get children(){return[tO((()=>e.icon)),RO(Hz,{get translationKey(){return e.headerTranslationKey},get translationValues(){return e.headerTranslationValues}}),RO(qz,{get translationKey(){return e.textTranslationKey},get translationValues(){return e.textTranslationValues}}),RO(MO,{get when(){return!i()&&("open-wallet"===e.showButton&&s||"open-wallet"!==e.showButton)},get children(){return RO(Kz,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return RO(Gz,{})}})}}),RO(MO,{get when(){return i()},get children(){return[RO(MO,{get when(){return"open-wallet"!==e.showButton},get children(){return RO(Yz,{onClick:()=>e.onClose(),get children(){return RO(MB,{translationKey:"common.close",children:"Close"})}})}}),RO(MO,{get when(){return"open-wallet"===e.showButton&&s},get children(){return RO(Yz,{onClick:c,get children(){return RO(MB,{translationKey:"common.openWallet",children:"Open wallet"})}})}})]}})]}}))},Qz=e=>{const t=cO(MD),[n]=o$();return RO(Zz,{headerTranslationKey:"actionModal.confirmTransaction.header",get headerTranslationValues(){return{name:t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet")}},textTranslationKey:"actionModal.confirmTransaction.text",get icon(){return RO(B$,{size:"m"})},onClose:()=>e.onClose(),showButton:"open-wallet","data-tc-confirm-modal":"true"})},Xz=e=>RO(Zz,{headerTranslationKey:"actionModal.transactionCanceled.header",textTranslationKey:"actionModal.transactionCanceled.text",get icon(){return RO(M$,{size:"m"})},onClose:()=>e.onClose(),"data-tc-transaction-canceled-modal":"true"}),Jz=e=>RO(Zz,{headerTranslationKey:"actionModal.transactionSent.header",textTranslationKey:"actionModal.transactionSent.text",get icon(){return RO(L$,{size:"m"})},onClose:()=>e.onClose(),"data-tc-transaction-sent-modal":"true"}),eF=()=>RO(IM,{get opened(){var e;return tO((()=>null!==sI()))()&&!0===(null==(e=sI())?void 0:e.openModal)},get enableAndroidBackHandler(){return iB.enableAndroidBackHandler},onClose:()=>lI(null),"data-tc-actions-modal-container":"true",get children(){return RO($O,{get children(){return[RO(DO,{get when(){return"transaction-sent"===sI().name},get children(){return RO(Jz,{onClose:()=>lI(null)})}}),RO(DO,{get when(){return"transaction-canceled"===sI().name},get children(){return RO(Xz,{onClose:()=>lI(null)})}}),RO(DO,{get when(){return"confirm-transaction"===sI().name},get children(){return RO(Qz,{onClose:()=>lI(null)})}})]}})}}),tF=()=>{const{locale:e}=o$()[1];eO((()=>e(iB.language))),eO((()=>{tI()&&LD()}));const t=cO(pI),n=cO(MD),[r,o]=QL(!1),i=()=>{var e;return"loading"===(null==(e=iB.connectRequestParameters)?void 0:e.state)},a=tO((()=>{var e;if(!i())return null==(e=iB.connectRequestParameters)?void 0:e.value})),s=e=>{n.closeSingleWalletModal(e)};return aO(t.onStatusChange((e=>{e&&s("wallet-selected")}))),aO((()=>{o(!1)})),RO(nB,{get opened(){return tI()},get enableAndroidBackHandler(){return iB.enableAndroidBackHandler},onClose:()=>s("action-cancelled"),onClickQuestion:()=>o((e=>!e)),"data-tc-wallets-modal-container":"true",get children(){return[RO(MO,{get when(){return r()},get children(){return RO(QB,{onBackClick:()=>o(!1)})}}),RO(MO,{get when(){return!r()},get children(){return[RO(MO,{get when(){return i()},get children(){return[RO(rB,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),RO(oB,{get children(){return RO(B$,{size:"m"})}})]}}),RO(MO,{get when(){return!i()},get children(){return RO(cP,{get component(){return jD()?fz:zB},get wallet(){return nI()},get additionalRequest(){return a()},onBackClick:()=>{},backDisabled:!0})}})]}})]}})},nF=e=>{const t=n$(uI,iB.language);return customElements.define(EP,class extends HTMLElement{}),document.body.hasAttribute("ontouchstart")||document.body.setAttribute("ontouchstart",""),RO(r$.Provider,{value:t,get children(){return RO(MD.Provider,{get value(){return e.tonConnectUI},get children(){return RO(pI.Provider,{get value(){return iB.connector},get children(){return[RO(RP,{}),RO(xP,{theme:LI,get children(){return[RO(MO,{get when(){return iB.buttonRootId},get children(){return RO(lP,{get mount(){return document.getElementById(iB.buttonRootId)},get children(){return RO(tB,{})}})}}),RO(cP,{component:EP,get children(){return[RO(Vz,{}),RO(tF,{}),RO(eF,{})]}})]}})]}})}})}})},rF=()=>{setTimeout((()=>QP({status:"opened",closeReason:null})))},oF=e=>{setTimeout((()=>QP({status:"closed",closeReason:e})))},iF=e=>{setTimeout((()=>eI({status:"opened",closeReason:null,walletInfo:e})))},aF=e=>{setTimeout((()=>eI({status:"closed",closeReason:e})))},sF=e=>{setTimeout((()=>lI(e)))},lF=()=>{setTimeout((()=>lI(null)))},cF=()=>oI(),uF=()=>aI(null),dF=(e,t)=>function(e,t,n,r={}){let o;return ZL((r=>{o=r,t===document?e():XO(t,e(),t.firstChild?null:void 0,n)}),r.owner),()=>{o(),t.textContent=""}}((()=>RO(nF,{tonConnectUI:t})),document.getElementById(e));class pF{constructor(e){LL(this,"connector"),LL(this,"setConnectRequestParametersCallback"),LL(this,"consumers",[]),LL(this,"tracker"),LL(this,"state",ZP()),this.connector=e.connector,this.tracker=e.tracker,this.setConnectRequestParametersCallback=e.setConnectRequestParametersCallback,eO((()=>{const e=ZP();this.state=e,this.consumers.forEach((t=>t(e)))}))}open(){return OL(this,null,(function*(){this.tracker.trackConnectionStarted();const e=(yield this.connector.getWallets()).find(jN);return e?this.connectEmbeddedWallet(e):this.openWalletsModal()}))}close(e="action-cancelled"){"action-cancelled"===e&&this.tracker.trackConnectionError("Connection was cancelled"),oF(e)}onStateChange(e){return this.consumers.push(e),()=>{this.consumers=this.consumers.filter((t=>t!==e))}}connectEmbeddedWallet(e){const t=t=>{aI(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=iB.connectRequestParameters;"loading"===(null==n?void 0:n.state)?this.setConnectRequestParametersCallback(t):t(null==n?void 0:n.value)}openWalletsModal(){return OL(this,null,(function*(){return VI()&&HI(),rF(),new Promise((e=>{const t=this.onStateChange((n=>{const{status:r}=n;"opened"===r&&(t(),e())}))}))}))}}class fF{constructor(e){LL(this,"connector"),LL(this,"consumers",[]),this.connector=e.connector,eO((()=>{const e=sI();this.consumers.forEach((t=>t(e)))}))}onStateChange(e){return this.consumers.push(e),()=>{this.consumers=this.consumers.filter((t=>t!==e))}}}class hF{constructor(e){LL(this,"connector"),LL(this,"setConnectRequestParametersCallback"),LL(this,"consumers",[]),LL(this,"tracker"),LL(this,"state",JP()),this.connector=e.connector,this.tracker=e.tracker,this.setConnectRequestParametersCallback=e.setConnectRequestParametersCallback,eO((()=>{const e=JP();this.state=e,this.consumers.forEach((t=>t(e)))}))}open(e){return OL(this,null,(function*(){this.tracker.trackConnectionStarted();const t=lB(yield this.connector.getWallets(),iB.walletsListConfiguration),n=t.find(jN);if(!!n)return this.connectEmbeddedWallet(n);const r=t.filter(NN).find((t=>pB(t,e)));if(!!r)return this.openSingleWalletModal(r);const o=`Trying to open modal window with unknown wallet "${e}".`;throw this.tracker.trackConnectionError(o),new PP(o)}))}close(e="action-cancelled"){"action-cancelled"===e&&this.tracker.trackConnectionError("Connection was cancelled"),aF("action-cancelled")}onStateChange(e){return this.consumers.push(e),()=>{this.consumers=this.consumers.filter((t=>t!==e))}}connectEmbeddedWallet(e){const t=t=>{aI(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=iB.connectRequestParameters;"loading"===(null==n?void 0:n.state)?this.setConnectRequestParametersCallback(t):t(null==n?void 0:n.value)}openSingleWalletModal(e){return OL(this,null,(function*(){return VI()&&HI(),iF(e),new Promise((e=>{const t=this.onStateChange((n=>{const{status:r}=n;"opened"===r&&(t(),e())}))}))}))}}class gF{constructor(e){var t;LL(this,"eventPrefix","ton-connect-ui-"),LL(this,"tonConnectUiVersion"),LL(this,"tonConnectSdkVersion",null),LL(this,"eventDispatcher"),this.eventDispatcher=null!=(t=null==e?void 0:e.eventDispatcher)?t:new ZN,this.tonConnectUiVersion=e.tonConnectUiVersion,this.init().catch()}get version(){return $N({ton_connect_sdk_lib:this.tonConnectSdkVersion,ton_connect_ui_lib:this.tonConnectUiVersion})}init(){return OL(this,null,(function*(){try{yield this.setRequestVersionHandler(),this.tonConnectSdkVersion=yield this.requestTonConnectSdkVersion()}catch(kK){}}))}setRequestVersionHandler(){return OL(this,null,(function*(){yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version",(()=>OL(this,null,(function*(){yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version",MN(this.tonConnectUiVersion))}))))}))}requestTonConnectSdkVersion(){return OL(this,null,(function*(){return new Promise(((e,t)=>OL(this,null,(function*(){try{yield this.eventDispatcher.addEventListener("ton-connect-response-version",(t=>{e(t.detail.version)}),{once:!0}),yield this.eventDispatcher.dispatchEvent("ton-connect-request-version",{type:"request-version"})}catch(kK){t(kK)}}))))}))}dispatchUserActionEvent(e){var t;try{null==(t=this.eventDispatcher)||t.dispatchEvent(`${this.eventPrefix}${e.type}`,e).catch()}catch(kK){}}trackConnectionStarted(...e){try{const t=UN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackConnectionCompleted(...e){try{const t=BN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackConnectionError(...e){try{const t=zN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackConnectionRestoringStarted(...e){try{const t=FN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackConnectionRestoringCompleted(...e){try{const t=VN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackConnectionRestoringError(...e){try{const t=WN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackDisconnection(...e){try{const t=YN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackTransactionSentForSignature(...e){try{const t=qN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackTransactionSigned(...e){try{const t=KN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}trackTransactionSigningFailed(...e){try{const t=GN(this.version,...e);this.dispatchUserActionEvent(t)}catch(kK){}}}class mF{constructor(e){if(LL(this,"walletInfoStorage",new KP),LL(this,"preferredWalletStorage",new GP),LL(this,"tracker"),LL(this,"walletInfo",null),LL(this,"systemThemeChangeUnsubscribe",null),LL(this,"actionsConfiguration"),LL(this,"walletsList"),LL(this,"connectRequestParametersCallback"),LL(this,"connector"),LL(this,"modal"),LL(this,"singleWalletModal"),LL(this,"transactionModal"),LL(this,"connectionRestored",Promise.resolve(!1)),e&&"connector"in e&&e.connector)this.connector=e.connector;else{if(!(e&&"manifestUrl"in e&&e.manifestUrl))throw new PP("You have to specify a `manifestUrl` or a `connector` in the options.");this.connector=new XN({manifestUrl:e.manifestUrl,eventDispatcher:null==e?void 0:e.eventDispatcher})}this.tracker=new gF({eventDispatcher:null==e?void 0:e.eventDispatcher,tonConnectUiVersion:"2.0.9"}),this.modal=new pF({connector:this.connector,tracker:this.tracker,setConnectRequestParametersCallback:e=>{this.connectRequestParametersCallback=e}}),this.singleWalletModal=new hF({connector:this.connector,tracker:this.tracker,setConnectRequestParametersCallback:e=>{this.connectRequestParametersCallback=e}}),this.transactionModal=new fF({connector:this.connector}),this.walletsList=this.getWallets(),this.walletsList.then((e=>{return BP((t=e.map((e=>e.imageUrl)),[...new Set(t)]));var t}));const t=this.normalizeWidgetRoot(null==e?void 0:e.widgetRootId);this.subscribeToWalletChange(),!1!==(null==e?void 0:e.restoreConnection)&&(this.connectionRestored=function(e){return OL(this,null,(function*(){return yield new Promise((e=>requestAnimationFrame(e))),e()}))}((()=>OL(this,null,(function*(){return this.tracker.trackConnectionRestoringStarted(),yield this.connector.restoreConnection(),this.connector.connected?this.tracker.trackConnectionRestoringCompleted(this.wallet):(this.tracker.trackConnectionRestoringError("Connection was not restored"),this.walletInfoStorage.removeWalletInfo()),this.connector.connected}))))),this.uiOptions=NI(e,{uiPreferences:{theme:"SYSTEM"}});const n=this.preferredWalletStorage.getPreferredWalletAppName();aB({connector:this.connector,preferredWalletAppName:n}),dF(t,this)}static getWallets(){return XN.getWallets()}get connected(){return this.connector.connected}get account(){return this.connector.account}get wallet(){return this.connector.wallet?jL(jL({},this.connector.wallet),this.walletInfo):null}set uiOptions(e){var t,n,r,o,i,a,s;this.checkButtonRootExist(e.buttonRootId),this.actionsConfiguration=e.actionsConfiguration,(null==(t=e.uiPreferences)?void 0:t.theme)?"SYSTEM"!==(null==(n=e.uiPreferences)?void 0:n.theme)?(null==(r=this.systemThemeChangeUnsubscribe)||r.call(this),MI(e.uiPreferences.theme,e.uiPreferences.colorsSet)):(MI(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?uP.LIGHT:uP.DARK,e.uiPreferences.colorsSet),this.systemThemeChangeUnsubscribe||(this.systemThemeChangeUnsubscribe=function(e){const t=t=>e(t.matches?uP.DARK:uP.LIGHT);return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t),()=>window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",t)}(MI))):(null==(o=e.uiPreferences)?void 0:o.colorsSet)&&(a=e.uiPreferences.colorsSet,II[uP.DARK]=NI(a[uP.DARK],II[uP.DARK]),II[uP.LIGHT]=NI(a[uP.LIGHT],II[uP.LIGHT]),OI((e=>({colors:NI(II[e.theme],PI[e.theme])})))),(null==(i=e.uiPreferences)?void 0:i.borderRadius)&&(s=e.uiPreferences.borderRadius,OI({borderRadius:s})),aB((t=>{var n,r;const o=NI(jL(jL(jL(jL({},e.language&&{language:e.language}),!!(null==(n=e.actionsConfiguration)?void 0:n.returnStrategy)&&{returnStrategy:e.actionsConfiguration.returnStrategy}),!!(null==(r=e.actionsConfiguration)?void 0:r.twaReturnUrl)&&{twaReturnUrl:e.actionsConfiguration.twaReturnUrl}),!!e.walletsListConfiguration&&{walletsListConfiguration:e.walletsListConfiguration}),bI(t));return void 0!==e.buttonRootId&&(o.buttonRootId=e.buttonRootId),void 0!==e.enableAndroidBackHandler&&(o.enableAndroidBackHandler=e.enableAndroidBackHandler),o}))}setConnectRequestParameters(e){var t;aB({connectRequestParameters:e}),"ready"!==(null==e?void 0:e.state)&&e||null==(t=this.connectRequestParametersCallback)||t.call(this,null==e?void 0:e.value)}getWallets(){return OL(this,null,(function*(){return this.connector.getWallets()}))}onStatusChange(e,t){return this.connector.onStatusChange((t=>OL(this,null,(function*(){if(t){const n=yield this.getSelectedWalletInfo(t);e(jL(jL({},t),n||this.walletInfoStorage.getWalletInfo()))}else e(t)}))),t)}openModal(){return OL(this,null,(function*(){return this.modal.open()}))}closeModal(e){this.modal.close(e)}onModalStateChange(e){return this.modal.onStateChange(e)}get modalState(){return this.modal.state}openSingleWalletModal(e){return OL(this,null,(function*(){return this.singleWalletModal.open(e)}))}closeSingleWalletModal(e){this.singleWalletModal.close(e)}onSingleWalletModalStateChange(e){return this.singleWalletModal.onStateChange(e)}get singleWalletModalState(){return this.singleWalletModal.state}connectWallet(){return OL(this,null,(function*(){const e=(yield this.getWallets()).find(jN);return e?yield this.connectEmbeddedWallet(e):yield this.connectExternalWallet()}))}disconnect(){return this.tracker.trackDisconnection(this.wallet,"dapp"),lF(),uF(),this.walletInfoStorage.removeWalletInfo(),this.connector.disconnect()}sendTransaction(e,t){return OL(this,null,(function*(){if(this.tracker.trackTransactionSentForSignature(this.wallet,e),!this.connected)throw this.tracker.trackTransactionSigningFailed(this.wallet,e,"Wallet was not connected"),new PP("Connect wallet to send a transaction.");VI()&&HI();const{notifications:n,modals:r,returnStrategy:o,twaReturnUrl:i,skipRedirectToWallet:a}=this.getModalsAndNotificationsConfiguration(t);sF({name:"confirm-transaction",showNotification:n.includes("before"),openModal:r.includes("before"),sent:!1});const s=()=>{l.signal.aborted||(sF({name:"confirm-transaction",showNotification:n.includes("before"),openModal:r.includes("before"),sent:!0}),this.walletInfo&&"universalLink"in this.walletInfo&&("universal-link"===this.walletInfo.openMethod||"custom-deeplink"===this.walletInfo.openMethod)&&(cN(this.walletInfo.universalLink)?DB(this.walletInfo.universalLink,{returnStrategy:o,twaReturnUrl:i||iB.twaReturnUrl,forceRedirect:!1}):UB(this.walletInfo.universalLink,this.walletInfo.deepLink,{returnStrategy:o,forceRedirect:!1},(()=>{}))))},l=new AbortController,c=this.onTransactionModalStateChange((e=>{(null==e?void 0:e.openModal)||(c(),e||l.abort())}));try{const t=yield this.waitForSendTransaction({transaction:e,signal:l.signal},s);return this.tracker.trackTransactionSigned(this.wallet,e,t),sF({name:"transaction-sent",showNotification:n.includes("success"),openModal:r.includes("success")}),t}catch(kK){throw sF({name:"transaction-canceled",showNotification:n.includes("error"),openModal:r.includes("error")}),kK instanceof Fj?kK:(console.error(kK),new PP("Unhandled error:"+kK))}finally{c()}}))}connectEmbeddedWallet(e){return OL(this,null,(function*(){const t=t=>{aI(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=iB.connectRequestParameters;return"loading"===(null==n?void 0:n.state)?this.connectRequestParametersCallback=t:t(null==n?void 0:n.value),yield this.waitForWalletConnection({ignoreErrors:!1})}))}connectExternalWallet(){return OL(this,null,(function*(){const e=new AbortController;rF();const t=this.onModalStateChange((n=>{const{status:r,closeReason:o}=n;"opened"!==r&&(t(),"action-cancelled"===o&&e.abort())}));return yield this.waitForWalletConnection({ignoreErrors:!0,signal:e.signal})}))}waitForWalletConnection(e){return OL(this,null,(function*(){return new Promise(((t,n)=>{this.tracker.trackConnectionStarted();const{ignoreErrors:r=!1,signal:o=null}=e;if(o&&o.aborted)return this.tracker.trackConnectionError("Connection was cancelled"),n(new PP("Wallet was not connected"));const i=e=>OL(this,null,(function*(){if(e)this.tracker.trackConnectionCompleted(e),s(),t(e);else{if(this.tracker.trackConnectionError("Connection was cancelled"),r)return;s(),n(new PP("Wallet was not connected"))}})),a=e=>{this.tracker.trackConnectionError(e.message),r||(s(),n(e))},s=this.onStatusChange((e=>i(e)),(e=>a(e)));o&&o.addEventListener("abort",(()=>{s(),n(new PP("Wallet was not connected"))}),{once:!0})}))}))}waitForSendTransaction(e,t){return OL(this,null,(function*(){return new Promise(((n,r)=>{const{transaction:o,signal:i}=e;if(i.aborted)return this.tracker.trackTransactionSigningFailed(this.wallet,o,"Transaction was cancelled"),r(new PP("Transaction was not sent"));const a=e=>OL(this,null,(function*(){n(e)})),s=()=>{this.tracker.trackTransactionSigningFailed(this.wallet,o,"Transaction was cancelled"),r(new PP("Transaction was not sent"))};i.addEventListener("abort",s,{once:!0}),this.connector.sendTransaction(o,{onRequestSent:t,signal:i}).then((e=>(i.removeEventListener("abort",s),a(e)))).catch((e=>(i.removeEventListener("abort",s),(e=>{r(e)})(e))))}))}))}onTransactionModalStateChange(e){return this.transactionModal.onStateChange(e)}subscribeToWalletChange(){this.connector.onStatusChange((e=>OL(this,null,(function*(){var t;e?(yield this.updateWalletInfo(e),this.setPreferredWalletAppName((null==(t=this.walletInfo)?void 0:t.appName)||e.device.appName)):this.walletInfoStorage.removeWalletInfo()}))))}setPreferredWalletAppName(e){this.preferredWalletStorage.setPreferredWalletAppName(e),aB({preferredWalletAppName:e})}getSelectedWalletInfo(e){return OL(this,null,(function*(){let t,n=cF();if(!n)return null;if("name"in n)t=n;else{const r=lB(yield this.walletsList,iB.walletsListConfiguration).find((t=>pB(t,e.device.appName)));if(!r)throw new PP(`Cannot find WalletInfo for the '${e.device.appName}' wallet`);t=jL(jL({},r),n)}return t}))}updateWalletInfo(e){return OL(this,null,(function*(){const t=yield this.getSelectedWalletInfo(e);if(t)return this.walletInfo=t,void this.walletInfoStorage.setWalletInfo(t);const n=this.walletInfoStorage.getWalletInfo();this.walletInfo=n||((yield this.walletsList).find((t=>pB(t,e.device.appName)))||null)}))}normalizeWidgetRoot(e){if(!e||!document.getElementById(e)){e="tc-widget-root";const t=document.createElement("div");t.id=e,document.body.appendChild(t)}return e}checkButtonRootExist(e){if(null!=e&&!document.getElementById(e))throw new PP(`${e} element not found in the document.`)}getModalsAndNotificationsConfiguration(e){var t,n,r,o,i,a;const s=["before","success","error"];let l=s;(null==(t=this.actionsConfiguration)?void 0:t.notifications)&&"all"!==(null==(n=this.actionsConfiguration)?void 0:n.notifications)&&(l=this.actionsConfiguration.notifications),(null==e?void 0:e.notifications)&&(l="all"===e.notifications?s:e.notifications);let c=["before"];(null==(r=this.actionsConfiguration)?void 0:r.modals)&&(c="all"===this.actionsConfiguration.modals?s:this.actionsConfiguration.modals),(null==e?void 0:e.modals)&&(c="all"===e.modals?s:e.modals);const u=(null==e?void 0:e.returnStrategy)||(null==(o=this.actionsConfiguration)?void 0:o.returnStrategy)||"back",d=(null==e?void 0:e.twaReturnUrl)||(null==(i=this.actionsConfiguration)?void 0:i.twaReturnUrl);let p=(null==e?void 0:e.skipRedirectToWallet)||(null==(a=this.actionsConfiguration)?void 0:a.skipRedirectToWallet)||"ios";return VI()&&(p="never"),{notifications:l,modals:c,returnStrategy:u,twaReturnUrl:d,skipRedirectToWallet:p}}}var vF,bF=Object.defineProperty,yF=Object.getOwnPropertySymbols,wF=Object.prototype.hasOwnProperty,xF=Object.prototype.propertyIsEnumerable,SF=(e,t,n)=>t in e?bF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kF=(e,t)=>{for(var n in t||(t={}))wF.call(t,n)&&SF(e,n,t[n]);if(yF)for(var n of yF(t))xF.call(t,n)&&SF(e,n,t[n]);return e},CF={exports:{}},_F={};CF.exports=function(){if(vF)return _F;vF=1;var e=V,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,a){var s,l={},c=null,u=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)r.call(n,s)&&!i.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:u,props:l,_owner:o.current}}return _F.Fragment=n,_F.jsx=a,_F.jsxs=a,_F}();const EF=CF.exports.jsx;function AF(){return"undefined"!=typeof window}const TF=F.createContext(null);let RF=null;const jF=F.memo((e=>{var t=e,{children:n}=t,r=((e,t)=>{var n={};for(var r in e)wF.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&yF)for(var r of yF(e))t.indexOf(r)<0&&xF.call(e,r)&&(n[r]=e[r]);return n})(t,["children"]);return AF()&&!RF&&(RF=new mF(r)),EF(TF.Provider,{value:RF,children:n})}));class NF extends PP{constructor(...e){super(...e),Object.setPrototypeOf(this,NF.prototype)}}class LF extends NF{constructor(...e){super(...e),Object.setPrototypeOf(this,LF.prototype)}}function OF(){const e=F.useContext(TF),t=F.useCallback((t=>{e&&(e.uiOptions=t)}),[e]);return AF()?(function(e){if(!e)throw new LF("You should add <TonConnectUIProvider> on the top of the app to use TonConnect")}(e),[e,t]):[null,()=>{}]}const PF="ton-connect-button";F.memo((({className:e,style:t})=>{const[n,r]=OF();return F.useEffect((()=>(r({buttonRootId:PF}),()=>r({buttonRootId:null}))),[r]),EF("div",{id:PF,className:e,style:kF({width:"fit-content"},t)})}));const IF=$g.div`
    height: 100%;
`,MF=$g.div`
    width: 80%;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`,$F=({block:e})=>{const{t:t}=ES();return X.jsxs(IF,{className:"loading-container div-column",children:[X.jsx(mE,{h:24}),X.jsx("div",{className:"game-icon draFight red w-84"}),X.jsx(mE,{h:16}),X.jsx("div",{className:"f-24",children:t(e?"Blocked":"Banned")}),X.jsx(mE,{h:8}),X.jsx(MF,{children:t(e?"Block2":"Block1")}),X.jsx(mE,{h:16})]})};$g.button`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    border: 1px solid #D11446;
    padding: 10px 30px;
    background: none;
`,$g.div`
    color: #D11446;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`;const DF=e=>{const t=CT(),{state:n={}}=ST()||{};let{id:r,prevPathname:o=pp.LOGS}=n||{};return F.useEffect((()=>{r||o===pp.USER_LOGS?t(pp.USER_LOGS,{state:{id:r,type:"popup",prevPathname:o}}):t(o,{state:{}})}),[o]),X.jsx(Ak,{...e,isPage:!0})};function UF(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function BF(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:UF(t[n])&&UF(e[n])&&Object.keys(t[n]).length>0&&BF(e[n],t[n])}))}const zF={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function FF(){const e="undefined"!=typeof document?document:{};return BF(e,zF),e}const VF={document:zF,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function WF(){const e="undefined"!=typeof window?window:{};return BF(e,VF),e}function HF(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function qF(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function KF(){return Date.now()}function GF(e,t){void 0===t&&(t="x");const n=WF();let r,o,i;const a=function(e){const t=WF();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(o=a.transform||a.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map((e=>e.replace(",","."))).join(", ")),i=new n.WebKitCSSMatrix("none"===o?"":o)):(i=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),"x"===t&&(o=n.WebKitCSSMatrix?i.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(o=n.WebKitCSSMatrix?i.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),o||0}function YF(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function ZF(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function QF(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(null!=r&&!ZF(r)){const n=Object.keys(Object(r)).filter((e=>t.indexOf(e)<0));for(let t=0,o=n.length;t<o;t+=1){const o=n[t],i=Object.getOwnPropertyDescriptor(r,o);void 0!==i&&i.enumerable&&(YF(e[o])&&YF(r[o])?r[o].__swiper__?e[o]=r[o]:QF(e[o],r[o]):!YF(e[o])&&YF(r[o])?(e[o]={},r[o].__swiper__?e[o]=r[o]:QF(e[o],r[o])):e[o]=r[o])}}}return e}function XF(e,t,n){e.style.setProperty(t,n)}function JF(e){let{swiper:t,targetPosition:n,side:r}=e;const o=WF(),i=-t.translate;let a,s=null;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const c=n>i?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,d=()=>{a=(new Date).getTime(),null===s&&(s=a);const e=Math.max(Math.min((a-s)/l,1),0),c=.5-Math.cos(e*Math.PI)/2;let p=i+c*(n-i);if(u(p,n)&&(p=n),t.wrapperEl.scrollTo({[r]:p}),u(p,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:p})})),void o.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=o.requestAnimationFrame(d)};d()}function eV(e,t){void 0===t&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter((e=>e.matches(t))):n}function tV(e){try{return void console.warn(e)}catch(t){}}function nV(e,t){void 0===t&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:HF(t)),n}function rV(e,t){return WF().getComputedStyle(e,null).getPropertyValue(t)}function oV(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function iV(e,t,n){const r=WF();return e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom"))}let aV,sV,lV;function cV(){return aV||(aV=function(){const e=WF(),t=FF();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),aV}function uV(e){return void 0===e&&(e={}),sV||(sV=function(e){let{userAgent:t}=void 0===e?{}:e;const n=cV(),r=WF(),o=r.navigator.platform,i=t||r.navigator.userAgent,a={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===o;let h="MacIntel"===o;return!u&&h&&n.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${s}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),h=!1),c&&!f&&(a.os="android",a.android=!0),(u||p||d)&&(a.os="ios",a.ios=!0),a}(e)),sV}function dV(){return lV||(lV=function(){const e=WF(),t=uV();let n=!1;function r(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(r()){const t=String(e.navigator.userAgent);if(t.includes("Version/")){const[e,r]=t.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));n=e<16||16===e&&r<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),i=r();return{isSafari:n||i,needPerspectiveFix:n,need3dFix:i||o&&t.ios,isWebView:o}}()),lV}var pV={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;const o=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][o](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;function o(){r.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];t.apply(r,i)}return o.__emitterProxy=t,r.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,o)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(o,1)}))})),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,r;for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];"string"==typeof i[0]||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),r=e):(t=i[0].events,n=i[0].data,r=i[0].context||e),n.unshift(r);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(r,[t,...n])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(r,n)}))})),e}};const fV=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};const hV=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};const gV=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())}))),t&&t.remove()}},mV=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},vV=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const n=o,i=[n-t];return i.push(...Array.from({length:t}).map(((e,t)=>n+r+t))),void e.slides.forEach(((t,n)=>{i.includes(t.column)&&mV(e,n)}))}const i=o+r-1;if(e.params.rewind||e.params.loop)for(let a=o-t;a<=i+t;a+=1){const t=(a%n+n)%n;(t<o||t>i)&&mV(e,t)}else for(let a=Math.max(o-t,0);a<=Math.min(i+t,n-1);a+=1)a!==o&&(a>i||a<o)&&mV(e,a)};var bV={updateSize:function(){const e=this;let t,n;const r=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(rV(r,"padding-left")||0,10)-parseInt(rV(r,"padding-right")||0,10),n=n-parseInt(rV(r,"padding-top")||0,10)-parseInt(rV(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}const n=e.params,{wrapperEl:r,slidesEl:o,size:i,rtlTranslate:a,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=eV(o,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let p=[];const f=[],h=[];let g=n.slidesOffsetBefore;"function"==typeof g&&(g=n.slidesOffsetBefore.call(e));let m=n.slidesOffsetAfter;"function"==typeof m&&(m=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,b=e.slidesGrid.length;let y=n.spaceBetween,w=-g,x=0,S=0;if(void 0===i)return;"string"==typeof y&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*i:"string"==typeof y&&(y=parseFloat(y)),e.virtualSize=-y,u.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),n.centeredSlides&&n.cssMode&&(XF(r,"--swiper-centered-offset-before",""),XF(r,"--swiper-centered-offset-after",""));const k=n.grid&&n.grid.rows>1&&e.grid;let C;k?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();const _="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter((e=>void 0!==n.breakpoints[e].slidesPerView)).length>0;for(let E=0;E<d;E+=1){let r;if(C=0,u[E]&&(r=u[E]),k&&e.grid.updateSlide(E,r,u),!u[E]||"none"!==rV(r,"display")){if("auto"===n.slidesPerView){_&&(u[E].style[e.getDirectionLabel("width")]="");const o=getComputedStyle(r),i=r.style.transform,a=r.style.webkitTransform;if(i&&(r.style.transform="none"),a&&(r.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?iV(r,"width"):iV(r,"height");else{const e=t(o,"width"),n=t(o,"padding-left"),i=t(o,"padding-right"),a=t(o,"margin-left"),s=t(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)C=e+a+s;else{const{clientWidth:t,offsetWidth:o}=r;C=e+n+i+a+s+(o-t)}}i&&(r.style.transform=i),a&&(r.style.webkitTransform=a),n.roundLengths&&(C=Math.floor(C))}else C=(i-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),u[E]&&(u[E].style[e.getDirectionLabel("width")]=`${C}px`);u[E]&&(u[E].swiperSlideSize=C),h.push(C),n.centeredSlides?(w=w+C/2+x/2+y,0===x&&0!==E&&(w=w-i/2-y),0===E&&(w=w-i/2-y),Math.abs(w)<.001&&(w=0),n.roundLengths&&(w=Math.floor(w)),S%n.slidesPerGroup==0&&p.push(w),f.push(w)):(n.roundLengths&&(w=Math.floor(w)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup==0&&p.push(w),f.push(w),w=w+C+y),e.virtualSize+=C+y,x=C,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+m,a&&s&&("slide"===n.effect||"coverflow"===n.effect)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+y}px`),k&&e.grid.updateWrapperSize(C,p),!n.centeredSlides){const t=[];for(let r=0;r<p.length;r+=1){let o=p[r];n.roundLengths&&(o=Math.floor(o)),p[r]<=e.virtualSize-i&&t.push(o)}p=t,Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-i)}if(l&&n.loop){const t=h[0]+y;if(n.slidesPerGroup>1){const r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),o=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)p.push(p[p.length-1]+o)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)1===n.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==y){const t=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");u.filter(((e,t)=>!(n.cssMode&&!n.loop)||t!==u.length-1)).forEach((e=>{e.style[t]=`${y}px`}))}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;h.forEach((t=>{e+=t+(y||0)})),e-=y;const t=e>i?e-i:0;p=p.map((e=>e<=0?-g:e>t?t+m:e))}if(n.centerInsufficientSlides){let e=0;h.forEach((t=>{e+=t+(y||0)})),e-=y;const t=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(e+t<i){const n=(i-e-t)/2;p.forEach(((e,t)=>{p[t]=e-n})),f.forEach(((e,t)=>{f[t]=e+n}))}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:f,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){XF(r,"--swiper-centered-offset-before",-p[0]+"px"),XF(r,"--swiper-centered-offset-after",e.size/2-h[h.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==c&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==b&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(l||n.cssMode||"slide"!==n.effect&&"fade"!==n.effect)){const t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);d<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let o,i=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const a=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const e=t.activeIndex+o;if(e>t.slides.length&&!r)break;n.push(a(e))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(void 0!==n[o]){const e=n[o].offsetHeight;i=e>i?e:i}(i||0===i)&&(t.wrapperEl.style.height=`${i}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:o,snapGrid:i}=t;if(0===r.length)return;void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();let a=-e;o&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;"string"==typeof s&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:"string"==typeof s&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const e=r[l];let c=e.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(a+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+s),d=(a-i[0]+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+s),p=-(a-c),f=p+t.slidesSizesGrid[l],h=p>=0&&p<=t.size-t.slidesSizesGrid[l],g=p>=0&&p<t.size-1||f>1&&f<=t.size||p<=0&&f>=t.size;g&&(t.visibleSlides.push(e),t.visibleSlidesIndexes.push(l)),fV(e,g,n.slideVisibleClass),fV(e,h,n.slideFullyVisibleClass),e.progress=o?-u:u,e.originalProgress=o?-d:d}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:i,isEnd:a,progressLoop:s}=t;const l=i,c=a;if(0===r)o=0,i=!0,a=!0;else{o=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;i=n||o<=0,a=s||o>=1,n&&(o=0),s&&(o=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),o=t.slidesGrid[n],i=t.slidesGrid[r],a=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);s=l>=o?(l-o)/a:(l+a-i)/a,s>1&&(s-=1)}Object.assign(t,{progress:o,progressLoop:s,isBeginning:i,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),i&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!i||c&&!a)&&t.emit("fromEdge"),t.emit("progress",o)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:o}=e,i=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,s=e=>eV(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let l,c,u;if(i)if(n.loop){let t=o-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${t}"]`)}else l=s(`[data-swiper-slide-index="${o}"]`);else a?(l=t.filter((e=>e.column===o))[0],u=t.filter((e=>e.column===o+1))[0],c=t.filter((e=>e.column===o-1))[0]):l=t[o];l&&(a||(u=function(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=function(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&0===!c&&(c=t[t.length-1]))),t.forEach((e=>{hV(e,e===l,n.slideActiveClass),hV(e,e===u,n.slideNextClass),hV(e,e===c,n.slidePrevClass)})),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:o,activeIndex:i,realIndex:a,snapIndex:s}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let o;for(let i=0;i<t.length;i+=1)void 0!==t[i+1]?r>=t[i]&&r<t[i+1]-(t[i+1]-t[i])/2?o=i:r>=t[i]&&r<t[i+1]&&(o=i+1):r>=t[i]&&(o=i);return n.normalizeSlideIndex&&(o<0||void 0===o)&&(o=0),o}(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{const e=Math.min(o.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/o.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===i&&!t.params.loop)return void(l!==s&&(t.snapIndex=l,t.emit("snapIndexChange")));if(c===i&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=u(c));const d=t.grid&&o.grid&&o.grid.rows>1;let p;if(t.virtual&&o.virtual.enabled&&o.loop)p=u(c);else if(d){const e=t.slides.filter((e=>e.column===c))[0];let n=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),p=Math.floor(n/o.grid.rows)}else if(t.slides[c]){const e=t.slides[c].getAttribute("data-swiper-slide-index");p=e?parseInt(e,10):c}else p=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:a,realIndex:p,previousIndex:i,activeIndex:c}),t.initialized&&vV(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==p&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const n=this,r=n.params;let o=e.closest(`.${r.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach((e=>{!o&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(o=e)}));let i,a=!1;if(o)for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===o){a=!0,i=s;break}if(!o||!a)return n.clickedSlide=void 0,void(n.clickedIndex=void 0);n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=i,r.slideToClickedSlide&&void 0!==n.clickedIndex&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}};var yV={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:n,translate:r,wrapperEl:o}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let i=GF(o,e);return i+=this.cssOverflowAdjustment(),n&&(i=-i),i||0},setTranslate:function(e,t){const n=this,{rtlTranslate:r,params:o,wrapperEl:i,progress:a}=n;let s,l=0,c=0;n.isHorizontal()?l=r?-e:e:c=e,o.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,o.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:o.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();s=0===u?0:(e-n.minTranslate())/u,s!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,n,r,o){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===r&&(r=!0);const i=this,{params:a,wrapperEl:s}=i;if(i.animating&&a.preventInteractionOnTransition)return!1;const l=i.minTranslate(),c=i.maxTranslate();let u;if(u=r&&e>l?l:r&&e<c?c:e,i.updateProgress(u),a.cssMode){const e=i.isHorizontal();if(0===t)s[e?"scrollLeft":"scrollTop"]=-u;else{if(!i.support.smoothScroll)return JF({swiper:i,targetPosition:-u,side:e?"left":"top"}),!0;s.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(i.setTransition(0),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(e){i&&!i.destroyed&&e.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}};function wV(e){let{swiper:t,runCallbacks:n,direction:r,step:o}=e;const{activeIndex:i,previousIndex:a}=t;let s=r;if(s||(s=i>a?"next":i<a?"prev":"reset"),t.emit(`transition${o}`),n&&i!==a){if("reset"===s)return void t.emit(`slideResetTransition${o}`);t.emit(`slideChangeTransition${o}`),"next"===s?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`)}}var xV={slideTo:function(e,t,n,r,o){void 0===e&&(e=0),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const i=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:f,enabled:h}=i;if(!h&&!r&&!o||i.destroyed||i.animating&&s.preventInteractionOnTransition)return!1;void 0===t&&(t=i.params.speed);const g=Math.min(i.params.slidesPerGroupSkip,a);let m=g+Math.floor((a-g)/i.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const v=-l[m];if(s.normalizeSlideIndex)for(let w=0;w<c.length;w+=1){const e=-Math.floor(100*v),t=Math.floor(100*c[w]),n=Math.floor(100*c[w+1]);void 0!==c[w+1]?e>=t&&e<n-(n-t)/2?a=w:e>=t&&e<n&&(a=w+1):e>=t&&(a=w)}if(i.initialized&&a!==d){if(!i.allowSlideNext&&(p?v>i.translate&&v>i.minTranslate():v<i.translate&&v<i.minTranslate()))return!1;if(!i.allowSlidePrev&&v>i.translate&&v>i.maxTranslate()&&(d||0)!==a)return!1}let b;a!==(u||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(v),b=a>d?"next":a<d?"prev":"reset";const y=i.virtual&&i.params.virtual.enabled;if(!(y&&o)&&(p&&-v===i.translate||!p&&v===i.translate))return i.updateActiveIndex(a),s.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),"slide"!==s.effect&&i.setTranslate(v),"reset"!==b&&(i.transitionStart(n,b),i.transitionEnd(n,b)),!1;if(s.cssMode){const e=i.isHorizontal(),n=p?v:-v;if(0===t)y&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),y&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=n}))):f[e?"scrollLeft":"scrollTop"]=n,y&&requestAnimationFrame((()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1}));else{if(!i.support.smoothScroll)return JF({swiper:i,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return i.setTransition(t),i.setTranslate(v),i.updateActiveIndex(a),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(n,b),0===t?i.transitionEnd(n,b):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(e){i&&!i.destroyed&&e.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,b))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,n,r){if(void 0===e&&(e=0),void 0===n&&(n=!0),"string"==typeof e){e=parseInt(e,10)}const o=this;if(o.destroyed)return;void 0===t&&(t=o.params.speed);const i=o.grid&&o.params.grid&&o.params.grid.rows>1;let a=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)a+=o.virtual.slidesBefore;else{let e;if(i){const t=a*o.params.grid.rows;e=o.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===t))[0].column}else e=o.getSlideIndexByData(a);const t=i?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:n}=o.params;let s=o.params.slidesPerView;"auto"===s?s=o.slidesPerViewDynamic():(s=Math.ceil(parseFloat(o.params.slidesPerView,10)),n&&s%2==0&&(s+=1));let l=t-e<s;if(n&&(l=l||e<Math.ceil(s/2)),r&&n&&"auto"!==o.params.slidesPerView&&!i&&(l=!1),l){const r=n?e<o.activeIndex?"prev":"next":e-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:r,slideTo:!0,activeSlideIndex:"next"===r?e+1:e-t+1,slideRealIndex:"next"===r?o.realIndex:void 0})}if(i){const e=a*o.params.grid.rows;a=o.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0].column}else a=o.getSlideIndexByData(a)}return requestAnimationFrame((()=>{o.slideTo(a,t,n,r)})),o},slideNext:function(e,t,n){void 0===t&&(t=!0);const r=this,{enabled:o,params:i,animating:a}=r;if(!o||r.destroyed)return r;void 0===e&&(e=r.params.speed);let s=i.slidesPerGroup;"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<i.slidesPerGroupSkip?1:s,c=r.virtual&&i.virtual.enabled;if(i.loop){if(a&&!c&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame((()=>{r.slideTo(r.activeIndex+l,e,t,n)})),!0}return i.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)},slidePrev:function(e,t,n){void 0===t&&(t=!0);const r=this,{params:o,snapGrid:i,slidesGrid:a,rtlTranslate:s,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;void 0===e&&(e=r.params.speed);const u=r.virtual&&o.virtual.enabled;if(o.loop){if(c&&!u&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=d(s?r.translate:-r.translate),f=i.map((e=>d(e)));let h=i[f.indexOf(p)-1];if(void 0===h&&o.cssMode){let e;i.forEach(((t,n)=>{p>=t&&(e=n)})),void 0!==e&&(h=i[e>0?e-1:e])}let g=0;if(void 0!==h&&(g=a.indexOf(h),g<0&&(g=r.activeIndex-1),"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),o.rewind&&r.isBeginning){const o=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(o,e,t,n)}return o.loop&&0===r.activeIndex&&o.cssMode?(requestAnimationFrame((()=>{r.slideTo(g,e,t,n)})),!0):r.slideTo(g,e,t,n)},slideReset:function(e,t,n){void 0===t&&(t=!0);const r=this;if(!r.destroyed)return void 0===e&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)},slideToClosest:function(e,t,n,r){void 0===t&&(t=!0),void 0===r&&(r=.5);const o=this;if(o.destroyed)return;void 0===e&&(e=o.params.speed);let i=o.activeIndex;const a=Math.min(o.params.slidesPerGroupSkip,i),s=a+Math.floor((i-a)/o.params.slidesPerGroup),l=o.rtlTranslate?o.translate:-o.translate;if(l>=o.snapGrid[s]){const e=o.snapGrid[s];l-e>(o.snapGrid[s+1]-e)*r&&(i+=o.params.slidesPerGroup)}else{const e=o.snapGrid[s-1];l-e<=(o.snapGrid[s]-e)*r&&(i-=o.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,o.slidesGrid.length-1),o.slideTo(i,e,t,n)},slideToClickedSlide:function(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let o,i=e.clickedIndex;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(eV(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),qF((()=>{e.slideTo(i)}))):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(eV(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),qF((()=>{e.slideTo(i)}))):e.slideTo(i)}else e.slideTo(i)}};var SV={loopCreate:function(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const o=()=>{eV(r,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)}))},i=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(i?n.grid.rows:1),s=t.slides.length%a!=0,l=i&&t.slides.length%n.grid.rows!=0,c=e=>{for(let r=0;r<e;r+=1){const e=t.isElement?nV("swiper-slide",[n.slideBlankClass]):nV("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(e)}};if(s){if(n.loopAddBlankSlides){c(a-t.slides.length%a),t.recalcSlides(),t.updateSlides()}else tV("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(l){if(n.loopAddBlankSlides){c(n.grid.rows-t.slides.length%n.grid.rows),t.recalcSlides(),t.updateSlides()}else tV("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:o,activeSlideIndex:i,byController:a,byMousewheel:s}=void 0===e?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:f}=l,{centeredSlides:h}=f;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled)return n&&(f.centeredSlides||0!==l.snapIndex?f.centeredSlides&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,void l.emit("loopFix");let g=f.slidesPerView;"auto"===g?g=l.slidesPerViewDynamic():(g=Math.ceil(parseFloat(f.slidesPerView,10)),h&&g%2==0&&(g+=1));const m=f.slidesPerGroupAuto?g:f.slidesPerGroup;let v=m;v%m!=0&&(v+=m-v%m),v+=f.loopAdditionalSlides,l.loopedSlides=v;const b=l.grid&&f.grid&&f.grid.rows>1;c.length<g+v?tV("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&"row"===f.grid.fill&&tV("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const y=[],w=[];let x=l.activeIndex;void 0===i?i=l.getSlideIndex(c.filter((e=>e.classList.contains(f.slideActiveClass)))[0]):x=i;const S="next"===r||!r,k="prev"===r||!r;let C=0,_=0;const E=b?Math.ceil(c.length/f.grid.rows):c.length,A=(b?c[i].column:i)+(h&&void 0===o?-g/2+.5:0);if(A<v){C=Math.max(v-A,m);for(let e=0;e<v-A;e+=1){const t=e-Math.floor(e/E)*E;if(b){const e=E-t-1;for(let t=c.length-1;t>=0;t-=1)c[t].column===e&&y.push(t)}else y.push(E-t-1)}}else if(A+g>E-v){_=Math.max(A-(E-2*v),m);for(let e=0;e<_;e+=1){const t=e-Math.floor(e/E)*E;b?c.forEach(((e,n)=>{e.column===t&&w.push(n)})):w.push(t)}}if(l.__preventObserver__=!0,requestAnimationFrame((()=>{l.__preventObserver__=!1})),k&&y.forEach((e=>{c[e].swiperLoopMoveDOM=!0,p.prepend(c[e]),c[e].swiperLoopMoveDOM=!1})),S&&w.forEach((e=>{c[e].swiperLoopMoveDOM=!0,p.append(c[e]),c[e].swiperLoopMoveDOM=!1})),l.recalcSlides(),"auto"===f.slidesPerView?l.updateSlides():b&&(y.length>0&&k||w.length>0&&S)&&l.slides.forEach(((e,t)=>{l.grid.updateSlide(t,e,l.slides)})),f.watchSlidesProgress&&l.updateSlidesOffset(),n)if(y.length>0&&k){if(void 0===t){const e=l.slidesGrid[x],t=l.slidesGrid[x+C]-e;s?l.setTranslate(l.translate-t):(l.slideTo(x+Math.ceil(C),0,!1,!0),o&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else if(o){const e=b?y.length/f.grid.rows:y.length;l.slideTo(l.activeIndex+e,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&S)if(void 0===t){const e=l.slidesGrid[x],t=l.slidesGrid[x-_]-e;s?l.setTranslate(l.translate-t):(l.slideTo(x-_,0,!1,!0),o&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else{const e=b?w.length/f.grid.rows:w.length;l.slideTo(l.activeIndex-e,0,!1,!0)}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!a){const e={slideRealIndex:t,direction:r,setTranslate:o,activeSlideIndex:i,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===f.slidesPerView&&n})})):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...e,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView&&n})}l.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};var kV={setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}};function CV(e,t,n){const r=WF(),{params:o}=e,i=o.edgeSwipeDetection,a=o.edgeSwipeThreshold;return!i||!(n<=a||n>=r.innerWidth-a)||"prevent"===i&&(t.preventDefault(),!0)}function _V(e){const t=this,n=FF();let r=e;r.originalEvent&&(r=r.originalEvent);const o=t.touchEventsData;if("pointerdown"===r.type){if(null!==o.pointerId&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else"touchstart"===r.type&&1===r.targetTouches.length&&(o.touchId=r.targetTouches[0].identifier);if("touchstart"===r.type)return void CV(t,r,r.targetTouches[0].pageX);const{params:i,touches:a,enabled:s}=t;if(!s)return;if(!i.simulateTouch&&"mouse"===r.pointerType)return;if(t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let l=r.target;if("wrapper"===i.touchEventsTarget&&!function(e,t){const n=t.contains(e);if(!n&&t instanceof HTMLSlotElement)return[...t.assignedElements()].includes(e);return n}(l,t.wrapperEl))return;if("which"in r&&3===r.which)return;if("button"in r&&r.button>0)return;if(o.isTouched&&o.isMoved)return;const c=!!i.noSwipingClass&&""!==i.noSwipingClass,u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,p=!(!r.target||!r.target.shadowRoot);if(i.noSwiping&&(p?function(e,t){return void 0===t&&(t=this),function t(n){if(!n||n===FF()||n===WF())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(e);return r||n.getRootNode?r||t(n.getRootNode().host):null}(t)}(d,l):l.closest(d)))return void(t.allowClick=!0);if(i.swipeHandler&&!l.closest(i.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const f=a.currentX,h=a.currentY;if(!CV(t,r,f))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=h,o.touchStartTime=KF(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(o.allowThresholdMove=!1);let g=!0;l.matches(o.focusableElements)&&(g=!1,"SELECT"===l.nodeName&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==l&&("mouse"===r.pointerType||"mouse"!==r.pointerType&&!l.matches(o.focusableElements))&&n.activeElement.blur();const m=g&&t.allowTouchMove&&i.touchStartPreventDefault;!i.touchStartForcePreventDefault&&!m||l.isContentEditable||r.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function EV(e){const t=FF(),n=this,r=n.touchEventsData,{params:o,touches:i,rtlTranslate:a,enabled:s}=n;if(!s)return;if(!o.simulateTouch&&"mouse"===e.pointerType)return;let l,c=e;if(c.originalEvent&&(c=c.originalEvent),"pointermove"===c.type){if(null!==r.touchId)return;if(c.pointerId!==r.pointerId)return}if("touchmove"===c.type){if(l=[...c.changedTouches].filter((e=>e.identifier===r.touchId))[0],!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched)return void(r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",c));const u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper)return i.startX=u,void(i.startY=d);if(!n.allowTouchMove)return c.target.matches(r.focusableElements)||(n.allowClick=!1),void(r.isTouched&&(Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=KF()));if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(d<i.startY&&n.translate<=n.maxTranslate()||d>i.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(u<i.startX&&n.translate<=n.maxTranslate()||u>i.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&"mouse"!==c.pointerType&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements))return r.isMoved=!0,void(n.allowClick=!1);r.allowTouchCallbacks&&n.emit("touchMove",c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=u,i.currentY=d;const p=i.currentX-i.startX,f=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if(void 0===r.isScrolling){let e;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,r.isScrolling=n.isHorizontal()?e>o.touchAngle:90-e>o.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",c),void 0===r.startMoving&&(i.currentX===i.startX&&i.currentY===i.startY||(r.startMoving=!0)),r.isScrolling||"touchmove"===c.type&&r.preventTouchMoveFromPointerMove)return void(r.isTouched=!1);if(!r.startMoving)return;n.allowClick=!1,!o.cssMode&&c.cancelable&&c.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&c.stopPropagation();let h=n.isHorizontal()?p:f,g=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;o.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),i.diff=h,h*=o.touchRatio,a&&(h=-h,g=-g);const m=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const v=n.params.loop&&!o.cssMode,b="next"===n.touchesDirection&&n.allowSlideNext||"prev"===n.touchesDirection&&n.allowSlidePrev;if(!r.isMoved){if(v&&b&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,!o.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",c)}if((new Date).getTime(),r.isMoved&&r.allowThresholdMove&&m!==n.touchesDirection&&v&&b&&Math.abs(h)>=1)return Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,void(r.startTranslate=r.currentTranslate);n.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let y=!0,w=o.resistanceRatio;if(o.touchReleaseOnEdges&&(w=0),h>0?(v&&b&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-("auto"!==o.slidesPerView&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,o.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**w))):h<0&&(v&&b&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+("auto"!==o.slidesPerView&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===o.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,o.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**w))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),o.threshold>0){if(!(Math.abs(h)>o.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,void(i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY)}o.followFinger&&!o.cssMode&&((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function AV(e){const t=this,n=t.touchEventsData;let r,o=e;o.originalEvent&&(o=o.originalEvent);if("touchend"===o.type||"touchcancel"===o.type){if(r=[...o.changedTouches].filter((e=>e.identifier===n.touchId))[0],!r||r.identifier!==n.touchId)return}else{if(null!==n.touchId)return;if(o.pointerId!==n.pointerId)return;r=o}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(o.type)){if(!(["pointercancel","contextmenu"].includes(o.type)&&(t.browser.isSafari||t.browser.isWebView)))return}n.pointerId=null,n.touchId=null;const{params:i,touches:a,rtlTranslate:s,slidesGrid:l,enabled:c}=t;if(!c)return;if(!i.simulateTouch&&"mouse"===o.pointerType)return;if(n.allowTouchCallbacks&&t.emit("touchEnd",o),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=KF(),d=u-n.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target,e),t.emit("tap click",o),d<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(n.lastClickTime=KF(),qF((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===a.diff&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let p;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,p=i.followFinger?s?t.translate:-t.translate:-n.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});const f=p>=-t.maxTranslate()&&!t.params.loop;let h=0,g=t.slidesSizesGrid[0];for(let w=0;w<l.length;w+=w<i.slidesPerGroupSkip?1:i.slidesPerGroup){const e=w<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==l[w+e]?(f||p>=l[w]&&p<l[w+e])&&(h=w,g=l[w+e]-l[w]):(f||p>=l[w])&&(h=w,g=l[l.length-1]-l[l.length-2])}let m=null,v=null;i.rewind&&(t.isBeginning?v=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const b=(p-l[h])/g,y=h<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(b>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?m:h+y):t.slideTo(h)),"prev"===t.swipeDirection&&(b>1-i.longSwipesRatio?t.slideTo(h+y):null!==v&&b<0&&Math.abs(b)>i.longSwipesRatio?t.slideTo(v):t.slideTo(h))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(h+y):t.slideTo(h):("next"===t.swipeDirection&&t.slideTo(null!==m?m:h+y),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:h))}}function TV(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:i}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||s?e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=o,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function RV(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function jV(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let o;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const i=e.maxTranslate()-e.minTranslate();o=0===i?0:(e.translate-e.minTranslate())/i,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function NV(e){const t=this;gV(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function LV(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const OV=(e,t)=>{const n=FF(),{params:r,el:o,wrapperEl:i,device:a}=e,s=!!r.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;o&&"string"!=typeof o&&(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),o[l]("touchstart",e.onTouchStart,{passive:!1}),o[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[l]("click",e.onClick,!0),r.cssMode&&i[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",TV,!0):e[c]("observerUpdate",TV,!0),o[l]("load",e.onLoad,{capture:!0}))};const PV=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var IV={setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:r,el:o}=e,i=r.breakpoints;if(!i||i&&0===Object.keys(i).length)return;const a=e.getBreakpoint(i,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const s=(a in i?i[a]:void 0)||e.originalParams,l=PV(e,r),c=PV(e,s),u=e.params.grabCursor,d=s.grabCursor,p=r.enabled;l&&!c?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(o.classList.add(`${r.containerModifierClass}grid`),(s.grid.fill&&"column"===s.grid.fill||!s.grid.fill&&"column"===r.grid.fill)&&o.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),u&&!d?e.unsetGrabCursor():!u&&d&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===s[t])return;const n=r[t]&&r[t].enabled,o=s[t]&&s[t].enabled;n&&!o&&e[t].disable(),!n&&o&&e[t].enable()}));const f=s.direction&&s.direction!==r.direction,h=r.loop&&(s.slidesPerView!==r.slidesPerView||f),g=r.loop;f&&n&&e.changeDirection(),QF(e.params,s);const m=e.params.enabled,v=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",s),n&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!g&&v?(e.loopCreate(t),e.updateSlides()):g&&!v&&e.loopDestroy()),e.emit("breakpoint",s)},getBreakpoint:function(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let r=!1;const o=WF(),i="window"===t?o.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:i*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let s=0;s<a.length;s+=1){const{point:e,value:i}=a[s];"window"===t?o.matchMedia(`(min-width: ${i}px)`).matches&&(r=e):i<=n.clientWidth&&(r=e)}return r||"max"}};var MV={addClasses:function(){const e=this,{classNames:t,params:n,rtl:r,el:o,device:i}=e,a=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),o.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e&&"string"!=typeof e&&(e.classList.remove(...t),this.emitContainerClasses())}};var $V={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function DV(e,t){return function(n){void 0===n&&(n={});const r=Object.keys(n)[0],o=n[r];"object"==typeof o&&null!==o?(!0===e[r]&&(e[r]={enabled:!0}),"navigation"===r&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),r in e&&"enabled"in o?("object"!=typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),QF(t,n)):QF(t,n)):QF(t,n)}}const UV={eventsEmitter:pV,update:bV,translate:yV,transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=0===e?"0ms":""),n.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),wV({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),wV({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:xV,loop:SV,grabCursor:kV,events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=_V.bind(e),e.onTouchMove=EV.bind(e),e.onTouchEnd=AV.bind(e),e.onDocumentTouchStart=LV.bind(e),t.cssMode&&(e.onScroll=jV.bind(e)),e.onClick=RV.bind(e),e.onLoad=NV.bind(e),OV(e,"on")},detachEvents:function(){OV(this,"off")}},breakpoints:IV,checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:MV},BV={};let zV=class e{constructor(){let t,n;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];1===o.length&&o[0].constructor&&"Object"===Object.prototype.toString.call(o[0]).slice(8,-1)?n=o[0]:[t,n]=o,n||(n={}),n=QF({},n),t&&!n.el&&(n.el=t);const a=FF();if(n.el&&"string"==typeof n.el&&a.querySelectorAll(n.el).length>1){const t=[];return a.querySelectorAll(n.el).forEach((r=>{const o=QF({},n,{el:r});t.push(new e(o))})),t}const s=this;s.__swiper__=!0,s.support=cV(),s.device=uV({userAgent:n.userAgent}),s.browser=dV(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach((e=>{e({params:n,swiper:s,extendParams:DV(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})}));const c=QF({},$V,l);return s.params=QF({},c,BV,n),s.originalParams=QF({},s.params),s.passedParams=QF({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach((e=>{s.on(e,s.params.on[e])})),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===s.params.direction,isVertical:()=>"vertical"===s.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=oV(eV(t,`.${n.slideClass}, swiper-slide`)[0]);return oV(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=eV(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),o=(n.maxTranslate()-r)*e+r;n.translateTo(o,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:n,slides:r,slidesGrid:o,slidesSizesGrid:i,size:a,activeIndex:s}=this;let l=1;if("number"==typeof n.slidesPerView)return n.slidesPerView;if(n.centeredSlides){let e,t=r[s]?Math.ceil(r[s].swiperSlideSize):0;for(let n=s+1;n<r.length;n+=1)r[n]&&!e&&(t+=Math.ceil(r[n].swiperSlideSize),l+=1,t>a&&(e=!0));for(let n=s-1;n>=0;n-=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>a&&(e=!0))}else if("current"===e)for(let c=s+1;c<r.length;c+=1){(t?o[c]+i[c]-o[s]<a:o[c]-o[s]<a)&&(l+=1)}else for(let c=s-1;c>=0;c-=1){o[s]-o[c]<a&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let o;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&gV(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if(("auto"===n.slidesPerView||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;o=e.slideTo(t.length-1,0,!1,!0)}else o=e.slideTo(e.activeIndex,0,!1,!0);o||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(r())}return eV(n,r())[0]})();return!o&&t.params.createElements&&(o=nV("div",t.params.wrapperClass),n.append(o),eV(n,`.${t.params.slideClass}`).forEach((e=>{o.append(e)}))),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===rV(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===rV(n,"direction")),wrongRTL:"-webkit-box"===rV(o,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach((e=>{e.complete?gV(t,e):e.addEventListener("load",(e=>{gV(t,e.target)}))})),vV(t),t.initialized=!0,vV(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:r,el:o,wrapperEl:i,slides:a}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),o&&"string"!=typeof o&&o.removeAttribute("style"),i&&i.removeAttribute("style"),a&&a.length&&a.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el&&"string"!=typeof n.el&&(n.el.swiper=null),function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(dP){}try{delete t[e]}catch(dP){}}))}(n)),n.destroyed=!0),null}static extendDefaults(e){QF(BV,e)}static get extendedDefaults(){return BV}static get defaults(){return $V}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);const n=e.prototype.__modules__;"function"==typeof t&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach((t=>e.installModule(t))),e):(e.installModule(t),e)}};Object.keys(UV).forEach((e=>{Object.keys(UV[e]).forEach((t=>{zV.prototype[t]=UV[e][t]}))})),zV.use([function(e){let{swiper:t,on:n,emit:r}=e;const o=WF();let i=null,a=null;const s=()=>{t&&!t.destroyed&&t.initialized&&(r("beforeResize"),r("resize"))},l=()=>{t&&!t.destroyed&&t.initialized&&r("orientationchange")};n("init",(()=>{t.params.resizeObserver&&void 0!==o.ResizeObserver?t&&!t.destroyed&&t.initialized&&(i=new ResizeObserver((e=>{a=o.requestAnimationFrame((()=>{const{width:n,height:r}=t;let o=n,i=r;e.forEach((e=>{let{contentBoxSize:n,contentRect:r,target:a}=e;a&&a!==t.el||(o=r?r.width:(n[0]||n).inlineSize,i=r?r.height:(n[0]||n).blockSize)})),o===n&&i===r||s()}))})),i.observe(t.el)):(o.addEventListener("resize",s),o.addEventListener("orientationchange",l))})),n("destroy",(()=>{a&&o.cancelAnimationFrame(a),i&&i.unobserve&&t.el&&(i.unobserve(t.el),i=null),o.removeEventListener("resize",s),o.removeEventListener("orientationchange",l)}))},function(e){let{swiper:t,extendParams:n,on:r,emit:o}=e;const i=[],a=WF(),s=function(e,n){void 0===n&&(n={});const r=new(a.MutationObserver||a.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void o("observerUpdate",e[0]);const n=function(){o("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)}));r.observe(e,{attributes:void 0===n.attributes||n.attributes,childList:t.isElement||(void 0===n.childList||n).childList,characterData:void 0===n.characterData||n.characterData}),i.push(r)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=function(e){const t=[];let n=e.parentElement;for(;n;)t.push(n),n=n.parentElement;return t}(t.hostEl);for(let t=0;t<e.length;t+=1)s(e[t])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}})),r("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);const FV=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function VV(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)&&!e.__swiper__}function WV(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter((e=>n.indexOf(e)<0)).forEach((n=>{void 0===e[n]?e[n]=t[n]:VV(t[n])&&VV(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:WV(e[n],t[n]):e[n]=t[n]}))}function HV(e){return void 0===e&&(e={}),e.navigation&&void 0===e.navigation.nextEl&&void 0===e.navigation.prevEl}function qV(e){return void 0===e&&(e={}),e.pagination&&void 0===e.pagination.el}function KV(e){return void 0===e&&(e={}),e.scrollbar&&void 0===e.scrollbar.el}function GV(e){void 0===e&&(e="");const t=e.split(" ").map((e=>e.trim())).filter((e=>!!e)),n=[];return t.forEach((e=>{n.indexOf(e)<0&&n.push(e)})),n.join(" ")}function YV(e){return void 0===e&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function ZV(){return ZV=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ZV.apply(this,arguments)}function QV(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function XV(e){const t=[];return V.Children.toArray(e).forEach((e=>{QV(e)?t.push(e):e.props&&e.props.children&&XV(e.props.children).forEach((e=>t.push(e)))})),t}function JV(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return V.Children.toArray(e).forEach((e=>{if(QV(e))t.push(e);else if(e.props&&e.props.slot&&n[e.props.slot])n[e.props.slot].push(e);else if(e.props&&e.props.children){const r=XV(e.props.children);r.length>0?r.forEach((e=>t.push(e))):n["container-end"].push(e)}else n["container-end"].push(e)})),{slides:t,slots:n}}function eW(e,t){return"undefined"==typeof window?F.useEffect(e,t):F.useLayoutEffect(e,t)}const tW=F.createContext(null),nW=F.createContext(null),rW=F.forwardRef((function(e,t){let{className:n,tag:r="div",wrapperTag:o="div",children:i,onSwiper:a,...s}=void 0===e?{}:e,l=!1;const[c,u]=F.useState("swiper"),[d,p]=F.useState(null),[f,h]=F.useState(!1),g=F.useRef(!1),m=F.useRef(null),v=F.useRef(null),b=F.useRef(null),y=F.useRef(null),w=F.useRef(null),x=F.useRef(null),S=F.useRef(null),k=F.useRef(null),{params:C,passedParams:_,rest:E,events:A}=function(e,t){void 0===e&&(e={}),void 0===t&&(t=!0);const n={on:{}},r={},o={};WV(n,$V),n._emitClasses=!0,n.init=!1;const i={},a=FV.map((e=>e.replace(/_/,""))),s=Object.assign({},e);return Object.keys(s).forEach((s=>{void 0!==e[s]&&(a.indexOf(s)>=0?VV(e[s])?(n[s]={},o[s]={},WV(n[s],e[s]),WV(o[s],e[s])):(n[s]=e[s],o[s]=e[s]):0===s.search(/on[A-Z]/)&&"function"==typeof e[s]?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:i[s]=e[s])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===n[e]&&(n[e]={}),!1===n[e]&&delete n[e]})),{params:n,passedParams:o,rest:i,events:r}}(s),{slides:T,slots:R}=JV(i),j=()=>{h(!f)};Object.assign(C.on,{_containerClasses(e,t){u(t)}});const N=()=>{Object.assign(C.on,A),l=!0;const e={...C};if(delete e.wrapperClass,v.current=new zV(e),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=T;const e={cache:!1,slides:T,renderExternal:p,renderExternalUpdate:!1};WV(v.current.params.virtual,e),WV(v.current.originalParams.virtual,e)}};m.current||N(),v.current&&v.current.on("_beforeBreakpoint",j);return F.useEffect((()=>()=>{v.current&&v.current.off("_beforeBreakpoint",j)})),F.useEffect((()=>{!g.current&&v.current&&(v.current.emitSlidesClasses(),g.current=!0)})),eW((()=>{if(t&&(t.current=m.current),m.current)return v.current.destroyed&&N(),function(e,t){let{el:n,nextEl:r,prevEl:o,paginationEl:i,scrollbarEl:a,swiper:s}=e;HV(t)&&r&&o&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=o,s.originalParams.navigation.prevEl=o),qV(t)&&i&&(s.params.pagination.el=i,s.originalParams.pagination.el=i),KV(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(n)}({el:m.current,nextEl:w.current,prevEl:x.current,paginationEl:S.current,scrollbarEl:k.current,swiper:v.current},C),a&&!v.current.destroyed&&a(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}}),[]),eW((()=>{!l&&A&&v.current&&Object.keys(A).forEach((e=>{v.current.on(e,A[e])}));const e=function(e,t,n,r,o){const i=[];if(!t)return i;const a=e=>{i.indexOf(e)<0&&i.push(e)};if(n&&r){const e=r.map(o),t=n.map(o);e.join("")!==t.join("")&&a("children"),r.length!==n.length&&a("children")}return FV.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,""))).forEach((n=>{if(n in e&&n in t)if(VV(e[n])&&VV(t[n])){const r=Object.keys(e[n]),o=Object.keys(t[n]);r.length!==o.length?a(n):(r.forEach((r=>{e[n][r]!==t[n][r]&&a(n)})),o.forEach((r=>{e[n][r]!==t[n][r]&&a(n)})))}else e[n]!==t[n]&&a(n)})),i}(_,b.current,T,y.current,(e=>e.key));return b.current=_,y.current=T,e.length&&v.current&&!v.current.destroyed&&function(e){let{swiper:t,slides:n,passedParams:r,changedParams:o,nextEl:i,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const c=o.filter((e=>"children"!==e&&"direction"!==e&&"wrapperClass"!==e)),{params:u,pagination:d,navigation:p,scrollbar:f,virtual:h,thumbs:g}=t;let m,v,b,y,w,x,S,k;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(m=!0),o.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(v=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||!1===u.pagination)&&d&&!d.el&&(b=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(u.scrollbar||!1===u.scrollbar)&&f&&!f.el&&(y=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||i)&&(u.navigation||!1===u.navigation)&&p&&!p.prevEl&&!p.nextEl&&(w=!0);const C=e=>{t[e]&&(t[e].destroy(),"navigation"===e?(t.isElement&&(t[e].prevEl.remove(),t[e].nextEl.remove()),u[e].prevEl=void 0,u[e].nextEl=void 0,t[e].prevEl=void 0,t[e].nextEl=void 0):(t.isElement&&t[e].el.remove(),u[e].el=void 0,t[e].el=void 0))};o.includes("loop")&&t.isElement&&(u.loop&&!r.loop?x=!0:!u.loop&&r.loop?S=!0:k=!0),c.forEach((e=>{if(VV(u[e])&&VV(r[e]))Object.assign(u[e],r[e]),"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e||!("enabled"in r[e])||r[e].enabled||C(e);else{const t=r[e];!0!==t&&!1!==t||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?u[e]=r[e]:!1===t&&C(e)}})),c.includes("controller")&&!v&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),o.includes("children")&&n&&h&&u.virtual.enabled?(h.slides=n,h.update(!0)):o.includes("virtual")&&h&&u.virtual.enabled&&(n&&(h.slides=n),h.update(!0)),o.includes("children")&&n&&u.loop&&(k=!0),m&&g.init()&&g.update(!0);v&&(t.controller.control=u.controller.control),b&&(!t.isElement||l&&"string"!=typeof l||(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),y&&(!t.isElement||s&&"string"!=typeof s||(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),f.init(),f.updateSize(),f.setTranslate()),w&&(t.isElement&&(i&&"string"!=typeof i||(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=t.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),t.el.appendChild(i)),a&&"string"!=typeof a||(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),i&&(u.navigation.nextEl=i),a&&(u.navigation.prevEl=a),p.init(),p.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&t.changeDirection(r.direction,!1),(x||k)&&t.loopDestroy(),(S||k)&&t.loopCreate(),t.update()}({swiper:v.current,slides:T,passedParams:_,changedParams:e,nextEl:w.current,prevEl:x.current,scrollbarEl:k.current,paginationEl:S.current}),()=>{A&&v.current&&Object.keys(A).forEach((e=>{v.current.off(e,A[e])}))}})),eW((()=>{var e;!(e=v.current)||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())}),[d]),V.createElement(r,ZV({ref:m,className:GV(`${c}${n?` ${n}`:""}`)},E),V.createElement(nW.Provider,{value:v.current},R["container-start"],V.createElement(o,{className:YV(C.wrapperClass)},R["wrapper-start"],C.virtual?function(e,t,n){if(!n)return null;const r=e=>{let n=e;return e<0?n=t.length+e:n>=t.length&&(n-=t.length),n},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:a}=n,s=e.params.loop?-t.length:0,l=e.params.loop?2*t.length:t.length,c=[];for(let u=s;u<l;u+=1)u>=i&&u<=a&&c.push(t[r(u)]);return c.map(((t,n)=>V.cloneElement(t,{swiper:e,style:o,key:t.props.virtualIndex||t.key||`slide-${n}`})))}(v.current,T,d):T.map(((e,t)=>V.cloneElement(e,{swiper:v.current,swiperSlideIndex:t}))),R["wrapper-end"]),HV(C)&&V.createElement(V.Fragment,null,V.createElement("div",{ref:x,className:"swiper-button-prev"}),V.createElement("div",{ref:w,className:"swiper-button-next"})),KV(C)&&V.createElement("div",{ref:k,className:"swiper-scrollbar"}),qV(C)&&V.createElement("div",{ref:S,className:"swiper-pagination"}),R["container-end"]))}));rW.displayName="Swiper";const oW=F.forwardRef((function(e,t){let{tag:n="div",children:r,className:o="",swiper:i,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:c,...u}=void 0===e?{}:e;const d=F.useRef(null),[p,f]=F.useState("swiper-slide"),[h,g]=F.useState(!1);function m(e,t,n){t===d.current&&f(n)}eW((()=>{if(void 0!==c&&(d.current.swiperSlideIndex=c),t&&(t.current=d.current),d.current&&i){if(!i.destroyed)return i.on("_slideClass",m),()=>{i&&i.off("_slideClass",m)};"swiper-slide"!==p&&f("swiper-slide")}})),eW((()=>{i&&d.current&&!i.destroyed&&f(i.getSlideClasses(d.current))}),[i]);const v={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},b=()=>"function"==typeof r?r(v):r;return V.createElement(n,ZV({ref:d,className:GV(`${p}${o?` ${o}`:""}`),"data-swiper-slide-index":l,onLoad:()=>{g(!0)}},u),a&&V.createElement(tW.Provider,{value:v},V.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof a?a:void 0},b(),s&&!h&&V.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&V.createElement(tW.Provider,{value:v},b(),s&&!h&&V.createElement("div",{className:"swiper-lazy-preloader"})))}));function iW(e){let{swiper:t,extendParams:n,on:r,emit:o}=e;const i=FF();let a,s,l,c,u=!1,d=null,p=null;function f(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:n}=t,{dragEl:r,el:o}=e,i=t.params.scrollbar,a=t.params.loop?t.progressLoop:t.progress;let c=s,u=(l-s)*a;n?(u=-u,u>0?(c=s-u,u=0):-u+s>l&&(c=l+u)):u<0?(c=s+u,u=0):u+s>l&&(c=l-u),t.isHorizontal()?(r.style.transform=`translate3d(${u}px, 0, 0)`,r.style.width=`${c}px`):(r.style.transform=`translate3d(0px, ${u}px, 0)`,r.style.height=`${c}px`),i.hide&&(clearTimeout(d),o.style.opacity=1,d=setTimeout((()=>{o.style.opacity=0,o.style.transitionDuration="400ms"}),1e3))}function h(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:n,el:r}=e;n.style.width="",n.style.height="",l=t.isHorizontal()?r.offsetWidth:r.offsetHeight,c=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),s="auto"===t.params.scrollbar.dragSize?l*c:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?n.style.width=`${s}px`:n.style.height=`${s}px`,r.style.display=c>=1?"none":"",t.params.scrollbar.hide&&(r.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function g(e){return t.isHorizontal()?e.clientX:e.clientY}function m(e){const{scrollbar:n,rtlTranslate:r}=t,{el:o}=n;let i;i=(g(e)-function(e){const t=WF(),n=FF(),r=e.getBoundingClientRect(),o=n.body,i=e.clientTop||o.clientTop||0,a=e.clientLeft||o.clientLeft||0,s=e===t?t.scrollY:e.scrollTop,l=e===t?t.scrollX:e.scrollLeft;return{top:r.top+s-i,left:r.left+l-a}}(o)[t.isHorizontal()?"left":"top"]-(null!==a?a:s/2))/(l-s),i=Math.max(Math.min(i,1),0),r&&(i=1-i);const c=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*i;t.updateProgress(c),t.setTranslate(c),t.updateActiveIndex(),t.updateSlidesClasses()}function v(e){const n=t.params.scrollbar,{scrollbar:r,wrapperEl:i}=t,{el:s,dragEl:l}=r;u=!0,a=e.target===l?g(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",m(e),clearTimeout(p),s.style.transitionDuration="0ms",n.hide&&(s.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),o("scrollbarDragStart",e)}function b(e){const{scrollbar:n,wrapperEl:r}=t,{el:i,dragEl:a}=n;u&&(e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1,m(e),r.style.transitionDuration="0ms",i.style.transitionDuration="0ms",a.style.transitionDuration="0ms",o("scrollbarDragMove",e))}function y(e){const n=t.params.scrollbar,{scrollbar:r,wrapperEl:i}=t,{el:a}=r;u&&(u=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),n.hide&&(clearTimeout(p),p=qF((()=>{a.style.opacity=0,a.style.transitionDuration="400ms"}),1e3)),o("scrollbarDragEnd",e),n.snapOnRelease&&t.slideToClosest())}function w(e){const{scrollbar:n,params:r}=t,o=n.el;if(!o)return;const a=o,s=!!r.passiveListeners&&{passive:!1,capture:!1},l=!!r.passiveListeners&&{passive:!0,capture:!1};if(!a)return;const c="on"===e?"addEventListener":"removeEventListener";a[c]("pointerdown",v,s),i[c]("pointermove",b,s),i[c]("pointerup",y,l)}function x(){const{scrollbar:e,el:n}=t;t.params.scrollbar=function(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach((o=>{if(!n[o]&&!0===n.auto){let i=eV(e.el,`.${r[o]}`)[0];i||(i=nV("div",r[o]),i.className=r[o],e.el.append(i)),n[o]=i,t[o]=i}})),n}(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const r=t.params.scrollbar;if(!r.el)return;let o,a;if("string"==typeof r.el&&t.isElement&&(o=t.el.querySelector(r.el)),o||"string"!=typeof r.el)o||(o=r.el);else if(o=i.querySelectorAll(r.el),!o.length)return;t.params.uniqueNavElements&&"string"==typeof r.el&&o.length>1&&1===n.querySelectorAll(r.el).length&&(o=n.querySelector(r.el)),o.length>0&&(o=o[0]),o.classList.add(t.isHorizontal()?r.horizontalClass:r.verticalClass),o&&(a=o.querySelector(function(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}(t.params.scrollbar.dragClass)),a||(a=nV("div",t.params.scrollbar.dragClass),o.append(a))),Object.assign(e,{el:o,dragEl:a}),r.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&w("on"),o&&o.classList[t.enabled?"remove":"add"](...HF(t.params.scrollbar.lockClass))}function S(){const e=t.params.scrollbar,n=t.scrollbar.el;n&&n.classList.remove(...HF(t.isHorizontal()?e.horizontalClass:e.verticalClass)),t.params.scrollbar.el&&t.scrollbar.el&&w("off")}n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},r("changeDirection",(()=>{if(!t.scrollbar||!t.scrollbar.el)return;const e=t.params.scrollbar;let{el:n}=t.scrollbar;n=function(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}(n),n.forEach((n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),r("init",(()=>{!1===t.params.scrollbar.enabled?k():(x(),h(),f())})),r("update resize observerUpdate lock unlock changeDirection",(()=>{h()})),r("setTranslate",(()=>{f()})),r("setTransition",((e,n)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(n)})),r("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](...HF(t.params.scrollbar.lockClass))})),r("destroy",(()=>{S()}));const k=()=>{t.el.classList.add(...HF(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...HF(t.params.scrollbar.scrollbarDisabledClass)),S()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(...HF(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...HF(t.params.scrollbar.scrollbarDisabledClass)),x(),h(),f()},disable:k,updateSize:h,setTranslate:f,init:x,destroy:S})}function aW(e){let{swiper:t,extendParams:n,emit:r,on:o}=e,i=!1;const a=FF(),s=WF();n({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,n){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===n))[0];if(!e)return 0;return parseInt(e.getAttribute("data-swiper-slide-index"),10)}return t.getSlideIndex(eV(t.slidesEl,`.${t.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`)[0])}}});const l=()=>{r("hashChange");const e=a.location.hash.replace("#",""),n=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex];if(e!==(n?n.getAttribute("data-hash"):"")){const n=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===n||Number.isNaN(n))return;t.slideTo(n)}},c=()=>{if(!i||!t.params.hashNavigation.enabled)return;const e=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],n=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&s.history&&s.history.replaceState?(s.history.replaceState(null,null,`#${n}`||""),r("hashSet")):(a.location.hash=n||"",r("hashSet"))};o("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;i=!0;const e=a.location.hash.replace("#","");if(e){const n=0,r=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(r||0,n,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&s.addEventListener("hashchange",l)})()})),o("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&s.removeEventListener("hashchange",l)})),o("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&c()})),o("slideChange",(()=>{i&&t.params.cssMode&&c()}))}oW.displayName="SwiperSlide";const sW=({title:e,isActiveTab:t,onClick:n})=>X.jsx(lW,{onClick:n,className:t?"active":"",children:X.jsx(cW,{$isActive:t,className:"tab-btn",children:e})}),lW=$g.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,cW=$g.div`
    color: ${e=>e.$isActive?"var(--text-color)":"var(--grey-2, #d9d9d9)"};
    text-align: center;
    align-self: center;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-bottom: 7px;
`,uW=({activeTab:e,setActiveTab:t,tabs:n})=>X.jsx(dW,{children:n?.map(((r,o)=>{let i="string"==typeof r?r:r?.title;return!i&&r.tr&&(i=dp(r.tr)),X.jsx(sW,{title:i,isActiveTab:e===o,onClick:()=>t(o)},`${n}${i}${o}`)}))}),dW=$g.div`
    display: flex;

    .tab-btn {
        font-size: 14px;
        font-weight: normal;
    }
`,pW=$g.div`
    aspect-ratio: 1;
    object-fit: cover;

    box-shadow: 2.667px 0 43.467px 0 rgba(0, 0, 0, 0.04);
    border-radius: 50%;

    &:not(.boost) {
        flex-grow: 1;
        flex-shrink: 1;
    }

    &.boost {
        display: flex;
        margin-right: 2px;
    }

    &.art {
        width: 64px;
        height: 64px;
    }

    &.home {
        height: 12px;
    }

    &.artifact-ava {
        width: 36px;
        height: 36px;
        background: #ddd;
    }

    img {
        aspect-ratio: 1;
        object-fit: cover;
        flex-grow: 1;
        flex-shrink: 1;
        box-shadow: 2.667px 0 43.467px 0 rgba(0, 0, 0, 0.04);
        border-radius: 50%;
    }

    &:not(.art) {
        img {
            border-radius: 50% !important;
        }
    }

    div.gen {
        font-size: 12px;
    }
`,fW=e=>{const{isArtId:t,isStar:n,iconSrc:r,value:o,isBoost:i,boost:a,isLastBoost:s,small:l,color:c,label:u,popup:d,boostId:p}=e;let{keyName:f}=e,h=l?"s-16":"s-25";a&&(15===a&&(h="s-22"),a<13?h="s-25":a<14&&(h=l?"s-20":"s-22"),14===a&&(h="s-20"),a>15&&(h="s-20",d&&(h="s-18")),a>=18&&(h="s-18",d&&(h="s-16")),a>=19&&(h="s-16",d&&(h="s-14")));let g="";if(t&&(g+=` isArt art${t}`),p&&(g+=" "+(p?`bId${p}`:"")),n)return X.jsx(pW,{className:"boost",children:X.jsx(mW,{src:r,className:`boost ${h}`})});let m=`${f} ${Mp()}`;`${o}`.length>10&&(m+=" mil");let v="";if(`${o}`.length>=11&&(v+=" big"),f)return X.jsxs(hW,{className:`${c} ${m}${v}`,children:[X.jsx("span",{className:`text1-${c}`,children:o}),X.jsxs("div",{className:"flex",children:[X.jsx(gW,{className:`icon ${r} ${c}${g}`}),X.jsx("span",{className:`text1-${c}`,children:u})]})]});return X.jsxs(hW,{className:`${p?"is-boost ":""}${c||""}`,children:[a?X.jsx(mW,{className:`icon1 ${r} ${h}${g}`,src:`assets/art/${r}`}):X.jsx(gW,{className:`icon ${r} ${c}${g}`}),void 0!==o&&X.jsx("span",{className:`text-${c}`,children:o}),s&&X.jsx(mE,{w:1})]})},hW=$g.li`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 3.7cqw;

    &.mil {
        font-size: 3.4cqw;
    }

    &.ru.items_joined {
        .flex {
            font-size: 8px;
        }

        &.big {
            .flex {
                font-size: 6px;
            }
        }
    }
`,gW=$g.div`
    width: 16px;
    height: 16px;
    object-fit: contain;
`,mW=$g.img`
    width: 20px;
    height: 20px;
    object-fit: contain;

    &.isArt {
        object-fit: cover;
    }

    //&.art3 {
    //    padding: 0 2px;
    //}

    &.art4 {
        transform: rotate(-11deg);
    }

    &.s-14 {
        width: 14px;
        height: 14px;
        @media (max-width: 362px) {
            width: 13px;
            height: 13px;
        }
        @media (min-width: 400px) {
            width: 16px;
            height: 16px;
        }
    }

    &.s-16 {
        width: 16px;
        height: 16px;
        @media (max-width: 362px) {
            width: 15px;
            height: 15px;
        }
        @media (min-width: 400px) {
            width: 18px;
            height: 18px;
        }
    }

    &.s-17 {
        width: 17px;
        height: 17px;
    }

    &.s-18 {
        width: 18px;
        height: 18px;
        @media (max-width: 362px) {
            width: 17px;
            height: 17px;
        }
        @media (min-width: 400px) {
            width: 20px;
            height: 20px;
        }
    }

    &.s-22 {
        width: 22px;
        height: 22px;
    }

    &.s-24 {
        width: 24px;
        height: 24px;
    }

    &.s-25 {
        width: 25px;
        height: 25px;
    }

    &.s-27 {
        width: 27px;
        height: 27px;
    }

    &.s-30 {
        width: 30px;
        height: 30px;
    }

    &.s-32 {
        width: 32px;
        height: 32px;
    }
`,vW=$g.div`
    font-size: 24px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`,bW=["#8491C3","#044D85","#FF8E48","#DD7799","#46857d","#2E933C","#d9d9d9"],yW=$g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`,wW=({first_name:e})=>{const[t]=F.useState(e),n=(e=>{if(!e)return"gray";let t=jp.sGet(`imgUrl${e}Colors`,"");t||(t=`${Ip(bW)[0]}, ${Ip(bW)[0]}`,jp.sSet(`imgUrl${e}Colors`,t));const n=t.split(", ");return`linear-gradient(135deg, ${n[0]}, ${n[1]})`})(t),r={background:n};return X.jsx(yW,{className:"gen0",children:X.jsx(vW,{style:r,className:"gen generated-ava",children:(o=t,o?o.slice(0,2).toUpperCase():"")})});var o},xW=F.memo((({id:e,first_name:t})=>{let n=`${Op("S3_ENDPOINT")}/${Op("S3_BUCKETNAME")}/media/avatars/${e}.jpg`;const[r,o]=F.useState(!e||Np.isDev),i=t||`${e}`;return jp.sGet(`imgUrl${i}Colors`)||r?X.jsx(wW,{first_name:i||""}):X.jsx("img",{src:n,alt:"",onError:()=>{o(!0)}})})),SW=$g.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    max-width: 330px;

    li:not(:first-child) {
        margin-left: 12px;
    }

    width: 100%;

    &.attack {
        > div {
            margin-bottom: 0;
        }

        li:not(:last-child) {
            background: url("/assets/css/star-sep.png");
            background-repeat: no-repeat;
            background-position: right;
            padding-right: 21px;
        }
    }
`,kW=$g.div`
    display: flex;
    width: 100%;
    margin-bottom: 5px;
    container-type: size;
    min-height: 18px;
`,CW=$g.div`
    display: flex;
    width: 100%;
    container-type: size;
    min-height: 18px;
`;function _W(e,t){return[e.slice(0,t),e.slice(t)]}const EW=({items:e,className:t="stats",userId:n,firstCount:r=3,splitCountSecond:o=0})=>{1===dk.getState().world.era&&(r=1);let[i,a]=_W(e,r),s=[];if(o){const[e,t]=_W(a,o);a=e,s=t}return X.jsxs(SW,{className:t,children:[X.jsx(kW,{children:i.map(((e,t)=>X.jsx(fW,{...e},`first-row${t}${n}${e.id}`)))}),a.length>0&&X.jsx(CW,{className:"sec-row",children:a.map(((e,t)=>X.jsx(fW,{...e},`second-row${t}${n}${e.id}`)))}),s.length>0&&X.jsx(CW,{className:"sec-row",children:s.map(((e,t)=>X.jsx(fW,{...e},`second-row${t}${n}${e.id}`)))})]})},AW=F.memo((({id:e,first_name:t,onClick:n})=>X.jsx(RW,{className:"green",onClick:n,children:X.jsx("div",{className:"game-icon ok-icon"})}))),TW=({onClick:e})=>X.jsx(RW,{className:"pink",onClick:e,children:X.jsx("div",{className:"game-icon no-icon"})}),RW=$g.button`
    height: 41px;
    width: 41px;
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    justify-content: center;

    &.pink {
        padding: 5px 10px;
    }

    .game-icon {
        mask-position: 1px;
    }
`,jW=({children:e})=>X.jsx(NW,{children:Pp(e)}),NW=$g.div`
    color: rgba(255, 152, 88, 1);
    font-weight: bold;
`,LW=({timestamp:e,onEnd:t,title:n="",inline:r=!1,humanReplace:o="",noDays:i=!1,noText:a=!1})=>{const[s,l]=F.useState({});if(F.useEffect((()=>{const n=Dp(e);let r;if(0!==n.a)return r=setInterval((()=>{const n=Dp(e);if(0===n.a)return clearInterval(r),void t?.();l(n)}),1e3),l(n),()=>clearInterval(r);t?.()}),[e]),r){let e=Up(s,i)||n;if(o){let t="";s.a&&(t=`${a?"":dp("In time art")} ${function(e){const{days:t,hours:n,minutes:r,seconds:o}=e,i=o%60,a=[];t>0&&a.push(`${t}${dp("day")}`),n>0&&a.push(`${n}${dp("hour")}`),r>0&&a.push(`${r}${dp("min")}`);let s=dp("sec");return i>0?a.push(`${function(e){return e<10?"0":""}(i)}${i}${s}`):(t||n||r)&&a.push(`00${s}`),a.join(" ")||`0${dp("sec")}`}(s)}`),e=o.replace(/%value%/g,t)}return X.jsx("span",{children:e||""})}return X.jsx("div",{children:Up(s,i)||n||""})},OW=({clans:e,popup:t,toStars:n,starsHide:r,online:o,clanClick:i,...a})=>{let{clan:s,children:l,showStats:c,small:u,pathname:d,firstName:p,lastName:f,num:h,klanRequests:g,stars:m=0,clanInfo:v,idx:b,last_defend_at:y,...w}=a,x=w.clan_reward,S=w.final_reward;const k=s&&s.id,C=s&&s.crest_image_path,_=CT(),{user:E,world:A}=dk.getState(),{era:T}=A,{id:R}=w,{stats:j,boosts:N}=Nx(w),L=R===E.id,O=Px(10)||Ix(3);let P=d!==vp&&(O||d===pp.TOP_ATTACK);t&&dk.getState().page===bp&&(e=!0);let I=nk(w),M=g?.no;1===M&&(M=e=>t=>{t.preventDefault(),t.stopPropagation(),JS({id:e,type:1,title:`${dp("Remove from clan")} ${I}?`,okText:dp("Dismiss"),onOk:()=>{dk.getState().sendMessage({type:122,id:e})}})});let $=`relative ${P?"big":""}${g?" klan flexbox-container flex3":""} ${d}`;r||($+=" no-ton"),t&&($+=" popup");let D="show-name "+(m?` with-stars stars${m}`:"");m>5&&(D+=" num-stars");const U=!!k&&!C||C;let B,z;return d!==pp.TOP&&d!==pp.TOP_ATTACK||(z=Dx({last_defend_at:y,id:R}),B=z-$p()>0),X.jsxs("div",{className:"us-pro",onClick:e=>{},children:[X.jsxs(MW,{className:$,children:[X.jsxs("div",{className:"relative ava-div",children:[X.jsx("div",{className:"hide-icon top-circle"+(U?" clan":"")}),!!k&&X.jsx("div",{onClick:()=>{t||e||_(pp.TOP,{state:{id:k,type:"clan",clanItem:{id:k}}})},children:C?X.jsx("div",{}):X.jsx("div",{className:"game-icon flag-icon"})}),X.jsx($W,{className:`relative avatar-wrap ${d}`,children:X.jsx(xW,{id:R,first_name:w.first_name})}),o&&X.jsx("div",{className:"online"})]}),X.jsxs(DW,{className:"profile-info "+(vp===d?"flex-center":""),children:[![vp,"stars"].includes(d)&&X.jsxs(IW,{className:"name-wrap"+(m?" has-stars":""),children:[X.jsx(PW,{className:D,children:X.jsxs(UW,{className:"ellipsis wallet"+(m?" stars":""),children:[h?`${h}. `:"",I]})}),!!m&&X.jsx("div",{className:"flex",onClick:t&&n,children:m<=5&&!r?X.jsx(X.Fragment,{children:[...Array(m)].map(((e,t)=>X.jsx("div",{className:"game-icon star"},"ust"+t)))}):X.jsxs(X.Fragment,{children:[X.jsx(jW,{children:m}),X.jsx("div",{className:"game-icon star"})]})})]}),B&&X.jsx("div",{className:"flex flex-start mb-4",children:X.jsxs("div",{className:"art-timer",children:[X.jsxs("div",{children:[dp("Immunity")," "]}),X.jsx(LW,{timestamp:z,onEnd:()=>{}})]})}),l||X.jsx(EW,{items:j,userId:R})]}),!L&&g&&X.jsxs(DW,{className:"flex-center profile-info flex1 req "+(g.ok&&g.no?"full":""),children:[g.ok&&X.jsx(AW,{onClick:g.ok(R,I)}),g.no&&!L&&X.jsx(TW,{onClick:M(R,I)})]})]}),3===T&&void 0!==S&&X.jsxs("div",{children:[X.jsx(mE,{h:8}),X.jsx("div",{className:"btn-div",children:X.jsxs("div",{className:"flex flex-start",children:[X.jsxs("div",{children:[dp("Reward season"),":"]}),Pp(S||0),X.jsx("div",{className:"game-icon"})]})})]}),void 0!==x&&X.jsxs("div",{children:[X.jsx(mE,{h:8}),X.jsx("div",{className:"btn-div",children:X.jsxs("div",{className:"flex flex-start",children:[X.jsxs("div",{children:[dp("Dar heaven"),":"]}),Pp(x||0),X.jsx("div",{className:"game-icon"})]})})]}),c&&!!N.length&&X.jsx("div",{className:"user-boosts relative",children:X.jsx(BW,{className:"boosts",children:N?.map(((e,n)=>X.jsx(fW,{...e,boost:N.length,small:u,popup:t},`${e.iconSrc+n}${R}`)))})})]})},PW=$g.div`
    gap: 10px;
    max-width: 100%;

    &.with-stars {
        max-width: 70%;

        &.num-stars {
            max-width: 86%;
        }

        &.stars1 {
            max-width: 90%;
        }

        &.stars2 {
            max-width: 80%;
        }

        &.stars3 {
            max-width: 78%;
        }

        &.stars4 {
            max-width: 65%;
        }

        &.stars5 {
            max-width: 60%;
        }
    }

    &.pink {
        background: linear-gradient(180deg, #ea5090 0%, #cd0938 100%);
    }

    &.purple {
        background: white;
        padding: 11px 10px;
        border: 1px solid #ddd;
    }

    a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
    }
`,IW=$g.div`
    display: flex;
    margin-bottom: 4px;
    gap: 4px;
    padding-top: 0;
    padding-right: 8px;
    font-size: 14px;
`,MW=$g.section`
    display: flex;
    gap: 8px;
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
    width: 100%;
    flex-basis: 50%;
    flex-grow: 0;
    position: relative;

    .stats, .season {
        color: var(--clan-gray);
    }

    &.klan {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;

        > div.profile-info:first-child {
            flex: 1
        }

        > div:nth-child(2) {
            width: 100%;
        }

        > div:last-child {
            flex: 1
        }
    }

    .profile-info {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
    }

    &.big {
        .profile-info {
            margin-top: 3px;
        }
    }

    &.stars {
        .show-name {
            display: none;
        }
    }

    .name-wrap {
        .game-icon {
            min-height: 15px;
        }
    }

    &.popup {
        .show-name {
            &.stars1 {
                max-width: 90%;
            }

            &.stars2 {
                max-width: 83%;
            }

            &.stars3 {
                max-width: 70%;
            }

            &.stars4 {
                max-width: 61%;
            }

            &.stars5 {
                max-width: 53%;
            }
        }
    }
`,$W=$g.div`
    aspect-ratio: 1;
    object-fit: cover;
    width: 48px;
    height: 48px;
    min-width: 48px;
    max-width: 48px;
    flex-grow: 1;
    flex-shrink: 1;
    box-shadow: 2.667px 0 43.467px 0 rgba(0, 0, 0, 0.04);
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 48px;
    }

    &.stars div.gen {
        font-size: 12px;
    }
`,DW=$g.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;

    &.req {
        gap: 4px;
        display: flex;

        &.full {
            max-width: 87px;
            @media (max-width: 375px) {
                max-width: 63px;
                button {
                    max-width: 30px;
                    padding: 0;
                    height: 30px;
                }
            }
        }

        &:not(.full) {
            flex: 1;
            width: 20px;
            max-width: 50px;
        }
    }
`,UW=$g.div`
    font-size: 14px;
`,BW=$g.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
    list-style-type: none;
    padding: 0;
    margin: 0;

    &.boosts {
        gap: 0;
    }
`,zW=[tx,Xw,Jw,ex,nx],FW={[tx]:"egg",[Xw]:"game",[nx]:"game",[ex]:"shield"},VW=({attack:e,any:t=!1,attacker:n=!1,splitCount:r=2})=>{const o=dk(xk((e=>e.world.era))),{user:i,reason:a,...s}=e,l=Object.keys(s).map((e=>e===nx&&3!==o||e===Jw?"":e)).filter((e=>zW.includes(e))).filter(Boolean),c=up.t(n?`${Jw}_me`:Jw,{[Jw]:Pp(s[Jw]),defaultValue:""});let u="green",d="red";n&&(u="red",d="green"),t&&(d="red",u="red");const p=[];l.map((e=>{let t=s[e],r=Pp(t);p.push({color:u,keyName:e,iconSrc:`game-icon ${FW[e]}`,label:up.t(n?`${e}_me`:e,{[e]:r,defaultValue:""}),value:Pp(t,"DRA_JOIN"===e?Bp:" ")})})),p.push({keyName:Jw,color:d,iconSrc:"game-icon fight",label:c,value:Pp(s[Jw])});let f=3===o?2:0;return X.jsx(EW,{items:p,firstCount:r,className:"attack",splitCountSecond:f})},WW=$g.div`
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
`,HW=$g.div`
    aspect-ratio: 1;
    object-fit: contain;
    width: 24px;
`,qW=$g.span`
    text-shadow: 0 0 10.4px rgba(0, 0, 0, 0.25);
`,KW=({setTab:e})=>{const{t:t}=ES();return X.jsxs("div",{className:"loading-container div-column",children:[X.jsx(mE,{h:24}),X.jsx("div",{className:"game-icon draFight w-84"}),X.jsx(mE,{h:16}),X.jsx("div",{className:"f-24",children:t("fight-in")}),X.jsx(mE,{h:8}),X.jsx("div",{className:"w-80",children:t("find-game-desc")}),X.jsx(mE,{h:16}),X.jsxs(FR,{className:"pink-full w-full",onClick:()=>{e()},children:[X.jsx("label",{children:t("Choose Victim")}),X.jsx(HW,{className:"balance-right game-icon fight white"})]})]})},GW=$g.hr`
    width: 100%;
    border: none;
    margin: 16px 0;
    &.eight {
        margin: 8px 0;
    }
`,YW=({itemsKey:e="top",klanRequests:t,children:n,propsItems:r,klan:o,era:i,mini:a})=>{const s=dk(xk((e=>e.ready))),l=dk(xk((e=>e.user)));let c=dk(xk((t=>t[e])))||r;Array.isArray(r)&&(c=r);const u=dk(xk((e=>e.current_user_pos))),d="top"===e,p=e.match("clan"),f=c&&c.length?c.length:0,h=l.dead,g=Array.isArray(c),m=Gw[e];F.useEffect((()=>{if(s){let e={};m&&dk.getState().sendMessage({type:m,params:e})}return()=>{m===Ww&&dk.getState().clearK(e)}}),[s,m]);const v=e.startsWith("frens"),b=v||a;if(!g)return X.jsx("div",{className:`slide-load-page${b?"1":""} ${e}`,children:X.jsx(Tk,{mini:b})});let y="stars_historyExt"!==e;const w=d&&!h&&!!u&&!Px(9);return X.jsxs(ZW,{className:`top-div ${o?" klan":""} list-${e}`,children:[c?.map(((r,a)=>{if(n){const t=V.Children.map(n,(t=>{if(V.isValidElement(t)){const n={...r,itemsLength:f,idx:a,clans:"clans"===e||p};return v&&(n.num=a+1),V.cloneElement(t,n)}return t}));return X.jsxs("div",{className:i&&`era${i} ${r.type?`type-${r.type}`:""}`,children:[t,"tasks"!==e&&a+1<f&&y&&X.jsx(GW,{})]},`${a+1}-top-first-${r.id}`)}let s=a,l=s+1<f;return m===Uw&&(s=a+20),X.jsxs("div",{children:[m===Uw&&20===s&&X.jsx(GW,{}),X.jsx(OW,{...r,num:s+1,pathname:pp.TOP,klanRequests:t,showStats:"top"===e||"clans"===e,clans:"clans"===e||p,idx:s,clanInfo:o}),t&&X.jsx("div",{}),l&&X.jsx(GW,{className:"eight"})]},`${s+1}-top-first-${r.id}`)})),"tasks"===e&&X.jsx(mE,{h:8}),w&&X.jsxs(X.Fragment,{children:[!!f&&X.jsx(GW,{className:"eight"}),X.jsx(OW,{...l,num:u,pathname:pp.TOP,showStats:!0})]})]})},ZW=$g.div`
    &.klan {
        .stats {
            div {
                li {
                    max-width: 30%;
                }
            }
        }
    }
`,QW=({upd:e,itemsKey:t,children:n,params:r,setTab:o,send:i,limit:a=20})=>{const[s,l]=F.useState(!1),[c,u]=F.useState(1),[d,p]=F.useState(!0),[f,h]=F.useState(null);let g=Gw[t];const m=g===Hw,v=g===qw,b=g===Fw,y=e=>{i?i(e):dk.getState().sendMessage(e)};F.useEffect((()=>(l(!0),(v||m)&&h(null),g&&(y({type:g,params:{limit:a,...r}}),e?.()),()=>{dk.getState().clearK(t)})),[g,r]);let w=dk(xk((e=>e[t])));const x=F.useCallback((()=>{if(s||!d||!Array.isArray(f)||f?.length<a||b)return;const e=document.querySelector(".main");if(e&&Array.isArray(f)){const{scrollTop:t,scrollHeight:n,clientHeight:o}=e;if(Math.ceil(t)+o>=n){l(!0);const e={type:g};e.params={limit:a,page:c,...r},v&&(e.params.page=f?.at(-1)?.createdAt),y(e)}}}),[s,d,c,r]);F.useEffect((()=>{const e=document.querySelector(".main");if(e)return e.addEventListener("scroll",x),()=>e.removeEventListener("scroll",x)}),[x]),F.useEffect((()=>{0===w?.length?(p(!1),null===f&&h([])):w&&(h((e=>[...e||[],...w])),w.length===a?(p(!0),u((e=>e+1))):p(!1),e?.()),l(!1)}),[w,a,g]);const S=Array.isArray(f);return!S&&s?X.jsx("div",{className:"test slide-load-page"+(m?"1":""),children:X.jsx(Tk,{mini:m})}):X.jsxs("div",{children:[X.jsx(YW,{itemsKey:`${t}Ext`,propsItems:f,children:n}),s&&X.jsx(Tk,{mini:!0}),!d&&f?.length>=a?X.jsx(X.Fragment,{}):X.jsxs(X.Fragment,{children:[X.jsx("br",{}),X.jsx("br",{})]}),S&&!f?.length&&X.jsx("div",{className:"slide-load-page",children:X.jsxs("div",{className:"center",children:[X.jsx("div",{className:"flex-center"}),X.jsxs("div",{className:"text-center",children:[X.jsx("br",{}),X.jsx("div",{children:dp("No data")}),X.jsx("br",{}),X.jsx("br",{}),X.jsx("br",{})]})]})}),X.jsx("br",{}),X.jsx("br",{})]})},XW=$g.h2`
    width: 100%;
    font-size: 16px;
    margin-bottom: 16px;
    margin-top: 0;
`,JW=$g.div`
    font-size: 12px;

    .us {
        font-weight: bold;
    }

    .time {
        color: gray;
        font-size: 12px;
    }

    .flex2 {
        gap: 8px;
    }

    button {
        padding: 14px 13px;
        margin-bottom: 0;

        &.first {
            width: 32px;
            height: 32px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;

            .game-icon {
                width: 20px;
                height: 20px;
                mask-size: 100%;
                -webkit-mask-size: 100%;
            }
        }

        &.pink {
            padding: 14px 13px;
            min-width: 130px;
        }
    }

    & + hr {
        margin: 8px 0;
    }
`,eH={[Yw.HATCH_EGGS]:"eggs",[Yw.SELL_EGGS]:"eggs",[Yw.BUY_ItemS]:"game",[Yw.CLAN_REWARD]:"game",[Yw.OFFER_ItemS]:"game",[Yw.BUY_DEFENDERS]:"shield",[Yw.BUY_ATTACKERS]:"fight",[Yw.ATTACK]:"fight",[Yw.APPLY_EXTERMINATION]:"fight",[Yw.BUY_BOOST]:"draa",[Yw.BUY_DRA]:"draa",[Yw.SELL_DRA]:"draa",[Yw.DRA_BONUS]:"draa",[Yw.DARK_DEAL_REWARD]:"draa",[Yw.BUY_STAR]:"star",[Yw.ACTIVATE_STAR_ABILITY]:"star",[Yw.DEAD]:"star",[Yw.AD_BONUS]:"draa"},tH={[Yw.ATTACK]:"red",[Yw.HATCH_EGGS]:"green",[Yw.DRA_BONUS]:"orange2",[Yw.AD_BONUS]:"green",[Yw.SELL_EGGS]:"orange2",[Yw.BUY_STAR]:"orange2",[Yw.OFFER_ItemS]:"orange2",[Yw.ACTIVATE_STAR_ABILITY]:"orange2",[Yw.DEAD]:"orange2",[Yw.DARK_DEAL_REWARD]:"dark"},nH=$g.div`
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: inline;
    position: relative;

    .game-icon {
        background-color: white;
        margin-left: 2px;
        display: inline-block;
        height: 10px;
        width: 12px;
        mask-size: 100%;
        -webkit-mask-size: 100%;
        position: absolute;

        &.egg {
            width: 10px;
        }
    }
`,rH=$g.span`
`,oH=({price:e,currency:t="",sec:n,forText:r=""})=>X.jsxs(nH,{children:[r,X.jsxs(rH,{children:[" ",e,X.jsx("span",{className:`game-icon inline black ${t}`})]}),"      ",n&&(n.for||dp("and")),n&&X.jsxs(rH,{children:[" ",n?.price,X.jsx("span",{className:`game-icon inline black ${n.currency}`})]})]}),iH=e=>{const{createdAt:t,event_type:n,amount:r,object_id:o,user:i,other_user:a,balance_delta:s,attack:l,history:c,userLogs:u,pathname:d,clan_name:p,attacks:f}=e,h=dk(xk((e=>e.user))),g=a,m=Number(s);let v=m&&Pp(Math.abs(m)),b=c||u===h.id,y="";const w=e=>{if(!e?.id)return"";let t=tf(nk(e),22);if(t.length<4&&(t=`  ${t}  `),e.id===h.id&&!b){let e=d||c&&pp.STARS;return X.jsxs(rR,{to:pp.USER_LOGS_REDIRECT,state:{id:h.id,prevPathname:e},children:[t," (",dp("you"),")"]})}return X.jsx("span",{onClick:(n=e.id,()=>{n&&n!==dk.getState().user.id&&dk.getState().sendMessage({type:Bw,id:n})}),children:t});var n};let x,S,k="",C="",_="",E="",A=dp(n===Yw.DEAD?"got prize":"for"),T="",R="";if([Yw.DRA_BONUS,Yw.CLAN_REWARD,Yw.DARK_DEAL_REWARD,Yw.AD_BONUS,Yw.DAILY_BONUS].includes(n)&&(A=""),o&&(n===Yw.ARTIFACT_BUY&&(k=dp("arts.art"+o),S=ox.find((e=>e.id===o))),n===Yw.ACTIVATE_STAR_ABILITY&&(k=dp("stars.star"+o))),n===Yw.BUY_BOOST&&(k=dp("boosts.boost"+o)),[Yw.CAMP_TAME,Yw.BUY_BOOST,Yw.AD_BONUS,Yw.DARK_DEAL_REWARD,Yw.DRA_BONUS].includes(n)&&(T="draa"),[Yw.AD_BONUS,Yw.BUY_DRA,Yw.SELL_DRA,Yw.DARK_DEAL_REWARD].includes(n)&&(R="draa"),n===Yw.ARTIFACT_BUY&&S&&(T=S.currency),y=dp(`logTitles.log${n}`,{count:r}),!Xp("logTitles",y)){let e=Yw[n];y=dp(`logTitles.${e}`,{count:r}),`${e}`.startsWith("CLANS_")&&(y+=` (${dp("clanStr")}: ${p})`)}n===Yw.BUY_ItemS&&(y+=` ${dp("itemA",{count:r})}`);const j=Pp(r||0);if(y=y.replace(/%value%/g,j),n===Yw.APPLY_EXTERMINATION){let e={0:"item",1:"itemHunt",2:"itemDef"};C=` ${dp("items_dead")} ${j} ${dp(e[o],{count:r})}`}n===Yw.OFFER_ItemS&&(y+=` ${dp("itemA",{count:r})}`),n===Yw.CAMP_TAME&&(y+=` ${dp("itemA",{count:r})}`);let N="";n===Yw.DAILY_BONUS&&r&&(A="",R="draa",N=j,E="draa"),[Yw.BUY_DRA,Yw.SELL_DRA,Yw.AD_BONUS,Yw.CREATE_STAR_SELL_OFFER].includes(n)&&(N=j),n===Yw.SELL_EGGS&&(R="eggs",N=j),Yw.DRA_BONUS===n&&(v=j),n===Yw.DEAD&&(x={price:j,currency:"draa"}),n===Yw.CREATE_STAR_SELL_OFFER&&(_=dp("for"));let L="";n===Yw.OFFER_ItemS&&(L=1===o?`(${dp("defense")})`:"");let O=eH[n],P=tH[n]||"",I="",M=c||n===Yw.ACTIVATE_STAR_ABILITY;if(M&&Ax[o]){const e=[{type:"spirit",color:"rose",add:50,minus:50,buttonText:"Activate",id:1},{id:2,type:"repl",color:"blue",minus:4,add:196,buttonText:"Activate"},{id:3,type:rx,color:"red-dark",minus:5,add:5,buttonText:"Activate"},{id:4,type:rx,color:"purple-light",minus:5,add:5,buttonText:"Activate"},{id:5,type:rx,color:"blue",add:5,buttonText:"Activate",full:1},{id:6,type:rx,color:"orange3",minus:5,add:5,buttonText:"Activate"},{id:7,type:rx,color:"blue-dark",minus:5,add:5,buttonText:"Activate"},{id:8,type:rx,color:"red-dark",minus:2,add:2,buttonText:"Activate"}]?.find((e=>`${e.id}`==`${o}`));P=e?.color}Yw.DARK_DEAL_REWARD,n===Yw.APPLY_EXTERMINATION&&(I="text-purple-light",P="purple-light");let $=`game-icon ${O||"balance"} white h-20 w-18`;E&&($+=" with-sec-icon");return X.jsx(JW,{className:`logs ${n} ${o}`,children:X.jsxs(sH,{children:[X.jsxs(lH,{className:"flexbox-container flex2 flex-center",children:[X.jsxs(FR,{className:`button first ${O||"total-blue"} p-10 ${P}`,children:[X.jsx("div",{className:"ac-div logs-icon"}),E&&X.jsx("div",{className:`game-icon ${E} white h-20 w-18 sec-icon`}),X.jsx("div",{className:$})]}),X.jsxs("div",{children:[X.jsxs("div",{className:"log-desc",children:[X.jsx("b",{children:w(i)})," ",X.jsx("span",{className:I,children:y})," ",k?X.jsx("b",{className:M?`text-${P}`:"",children:k}):"",L,!!N&&X.jsx(oH,{price:N,currency:R,forText:_,sec:void 0}),X.jsx("b",{children:w(g)})," ",v?A:"",C,!!v&&X.jsx(oH,{price:v,currency:T,sec:x})]}),X.jsxs("div",{className:"time",children:[Wp(t,!0)," ",dp("at")," ",Kp(t)]})]})]}),n===Yw.ATTACK&&l&&X.jsxs(aH,{children:[X.jsx(mE,{h:8}),X.jsx(VW,{attack:l,attacker:!1,splitCount:f?3:void 0})]})]})})},aH=$g.div`
    padding: 0 8px;
    padding-bottom: 7px;
`,sH=$g.div`
    background-color: #2D2B20;
    border-radius: 8px;

    .with-sec-icon {
        background-color: #8c8c8c;
        margin-right: -7px;
    }

    .sec-icon {
        position: absolute;
        left: 9px;
        overflow: hidden;
        background-color: #ffffff;
        z-index: 2;
    }
`,lH=$g.div`
    .fight.red {
        background: linear-gradient(180deg, #ea5090 0%, #cd0938 100%);
    }

    .first {
        .game-icon.shield {
            width: 15px;
        }
    }

    .log-desc {
        padding-right: 5px;

        span {
            white-space: break-spaces;
        }
    }

    a {
        color: rgb(255, 152, 88);
    }
`,cH=[Yw.ATTACK,Yw.APPLY_EXTERMINATION],uH=F.memo((({upd:e})=>X.jsx(dH,{className:"history",children:X.jsx(QW,{upd:e,itemsKey:"logs",params:{types:cH},limit:10,children:X.jsx(iH,{history:!0,attacks:!0})})}))),dH=$g.div`
    width: 100%;
    font-size: 12px;
    margin: 0 auto;

    .flex-center {
        padding-left: 10px;

        button.first.add-game-btn {
            display: none;
        }
    }

    .flex {
        .text1-green, .text1-red {
            display: none;
        }
    }

`,pH=F.memo((({open:e,upd:t,setTab:n})=>{const{dead:r}=dk(xk((e=>e.user))),o=dk(xk((e=>e.ready))),[i,a]=F.useState(!r);let s=dk(xk((e=>e.attack_success))),l=dk(xk((e=>e.attack_failed))),c=dk(xk((e=>e.attack_results))),u=dk(xk((e=>e.attack_results_to)));if(F.useEffect((()=>{o&&e&&!r&&dk.getState().sendMessage({type:102})}),[o,s,l,e,r]),F.useEffect((()=>{u&&a(!1)}),[u]),i||!e)return e?X.jsx("div",{className:"slide-load-page",children:X.jsx(Tk,{})}):null;const d=u||[],p=(e,t=!1)=>X.jsx(hH,{children:e?.map(((n,r)=>{let o=n,i=n.user||{},a=n.created_at;return X.jsxs("div",{className:"relative attack-history-item",children:[X.jsxs(OW,{...i,pathname:pp.TOP_ATTACK,children:[a&&X.jsxs("div",{className:"second-text",children:[Wp(a,!0)," ",dp("at")," ",Kp(a)]}),X.jsx(mE,{h:8}),X.jsx(VW,{attack:o,attacker:t})]}),r+1<e.length&&X.jsx(GW,{className:"attack"})]},`${t}attack-${r+1}${i.id}`)}))});let f=u?.length||c?.length;return r?X.jsx(uH,{upd:t}):X.jsx(fH,{children:f?X.jsxs(X.Fragment,{children:[d.length>0&&X.jsxs(X.Fragment,{children:[X.jsx(XW,{children:dp("You're attacked")}),p(d,!0),X.jsx(mE,{h:32})]}),c?.length>0?X.jsxs(X.Fragment,{children:[X.jsx(XW,{children:dp("Attack you")}),p(c)]}):X.jsx(X.Fragment,{children:X.jsxs(FR,{className:"pink-full w-full",onClick:n,children:[X.jsx("label",{children:dp("Choose Victim")}),X.jsx(HW,{className:"balance-right game-icon fight white"})]})})]}):X.jsx(X.Fragment,{children:!r&&X.jsx(KW,{setTab:n})})})})),fH=$g.div`
    margin-bottom: 45px;
`,hH=$g.section`
    display: flex;
    flex-direction: column;
    gap: 0;

    .profile-info {
        flex-direction: column;
        padding-top: 0;

        h2 {
            margin-bottom: 1px;
        }
    }
`,gH=$g.div`
    &.atk-hide {
        margin-bottom: 4px;
    }
`,mH=({hide:e,atkFail:t,...n})=>{const{t:r}=ES(),o=dk(xk((e=>e.user))),[i,a]=F.useState($x()),[s,l]=F.useState(Dx(n));F.useEffect((()=>{n.last_attack_at&&a($x())}),[n.last_attack_at]),F.useEffect((()=>{l(Dx(n))}),[n.last_defend_at]);const c=Ox(6,n.id)?.id;let u=n.attack_failed&&(n.attack_failed.reason===Zw.TARGET_HAS_NO_ItemS&&0===n.items||n.attack_failed.reason===Zw.DEAD&&o.dead);if(u=!1,c&&n.id!==o.id)return X.jsx("div",{className:"btn-div",children:X.jsx(wR,{className:"info-btn",children:X.jsx(kE,{title:r("Invisible"),children:X.jsx(X.Fragment,{})})})});const d=()=>{l(0)},p=()=>{a(0)},f=i-$p()>0,h=s-$p()>0,g=e=>{t&&dk.getState().update("attack_failed",{load:1}),dk.getState().sendMessage({type:6,target_id:e.id})};if(f||h){const t=()=>X.jsx(wR,{className:"info-btn "+(e?"":"disabled"),children:h&&X.jsx(kE,{title:r("Immunity"),children:X.jsx(LW,{timestamp:s,onEnd:d})})}),n=()=>X.jsx(wR,{className:"info-btn "+(e?"":"disabled"),children:X.jsx(kE,{title:r("Cant Attack"),children:X.jsx(LW,{timestamp:i,onEnd:p})})});return X.jsxs(gH,{className:"btn-div flexbox-container flex2 "+(e?"atk-hide":""),children:[h&&t(),f&&n()]})}return e||o.dead?null:X.jsx("div",{className:o.attackers?"":"btn-div",children:X.jsx(FR,{onClick:(m=n,()=>{o.clan_id&&m.clan?.id===o.clan_id?JS({id:m.id,type:2,title:`${r("Do you wanna attack")} ${nk(m)}?`,okText:r("Attack"),onOk:()=>{g(m)}}):g(m)}),className:"green attack b-full",value:n.attacks,disabled:!o.attackers,children:X.jsx(WW,{className:"balance1",children:X.jsx(qW,{children:o.attackers?r("Attack"):r("You dont have hunters for attack")})})})});var m},vH=({refInput:e,handleClear:t,isTop:n,...r})=>{if(F.useEffect((()=>{const e=()=>{n&&(e=>{const t=document.querySelector(e);t?.scrollTo({top:t.scrollHeight})})(".search-bottom")};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[n]),Hp()){const{value:n}=r;return X.jsxs("div",{className:"input-wrapper relative",children:[X.jsx(bH,{...r,ref:e}),n&&t&&X.jsx(yH,{type:"button",onClick:t,className:"clear-btn",children:X.jsx("div",{className:"game-icon no-icon"})})]})}return X.jsx(bH,{...r})},bH=$g.input`
    align-items: start;
    border-radius: 12px;
    border: 1px solid #d9d9d9;
    padding: 15px 16px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`,yH=$g.button`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: #999;

    &:hover {
        color: #333;
    }
`,wH=({klan:e,placeholder:t=dp("enterTg"),pathname:n,upd:r,params:o,updateParams:i,onChange:a,isTop:s,...l})=>{const[c,u]=V.useState(""),d=F.useRef(null),p=F.useRef(null);let f=dk((t=>e?t.clan_found:t.found_user));f&&"logs"===n&&(f=null);const h=e=>{if(!i)return e;i?.({...o,user_id:e.id||e.username})},g=e=>{u(e.target.value),""===e.target.value&&a?.(e.target.value)},[m,v]=F.useState(!1);return X.jsxs(X.Fragment,{children:[X.jsxs(xH,{onSubmit:t=>{if(c){t.preventDefault();let n=c.split(/[\/@]/).at(-1);if(n)if(e)a?a(n?.trim()):dk.getState().sendMessage({username:n?.trim(),type:Vw});else{let e=zw,t=n?.trim();if(/^-?\d+$/.test(n)){e=Bw;let n=h({id:t,type:e});n&&dk.getState().sendMessage(n)}else{let t=h({username:n?.trim(),type:e});t&&dk.getState().sendMessage(t)}}s&&!i&&u("")}return!1},className:`search-form ${e?"klan ":""}${m?"focused":""}`,ref:p,children:[X.jsx(vH,{type:"text",value:c,onChange:g,onKeyUp:g,placeholder:t,refInput:d,onFocus:()=>{v(!0),l.handleFocus?.(),r?.()},onBlur:()=>{v(!1),r?.()},handleClear:i&&(e=>{u(""),a?.(""),i&&i?.({...o,user_id:""})}),isTop:s,required:!0}),X.jsx(FR,{className:"purple rad search flexbox-container1",type:"submit",value:{telegramId:c},children:X.jsx("div",{className:"flex-center",children:X.jsx("div",{className:"white game-icon search "})})})]}),f&&X.jsx("div",{className:"relative",children:X.jsx(OW,{...f,showStats:!0})}),s&&X.jsx("div",{className:"search-bottom"})]})},xH=$g.form`
    display: flex;
    gap: 6px;
    font-size: 12px;
    font-weight: 400;
`,SH=({active_players:e,upd:t})=>{const n=dk(xk((e=>e.random_users)));F.useEffect((()=>{dk.getState().sendMessage({type:Uw})}),[]),F.useEffect((()=>{Array.isArray(n)&&t?.()}),[n]);let r=n?.length;return X.jsxs("div",{className:"random-container",children:[X.jsxs(kH,{className:"flex",children:[!!r&&X.jsx("div",{children:dp("Random users")}),!!r&&e>25&&X.jsx(FR,{className:"refresh",onClick:()=>{dk.getState().sendMessage({type:Uw})},value:{random_users:n},children:X.jsx("div",{className:"game-icon refresh"})})]}),X.jsx(mE,{h:16}),n?.map(((e,t)=>X.jsxs("div",{children:[X.jsx(OW,{...e,showStats:!0}),t+1<n.length&&X.jsx(GW,{className:"attack eight"}),X.jsx(mE,{h:0})]},`${t+1}-random-${e.id}`))),X.jsx(mE,{h:8}),X.jsx("div",{id:"rand-bottom"})]})},kH=$g.div`
    button {
        width: 37px;
        height: 40px;
        margin-bottom: 0;
    }
`;window.AudioContext=window.AudioContext||window.webkitAudioContext;const CH=new AudioContext;const _H="swiper-scrollbar-top",EH=()=>{const e=[{title:dp("Top")}],t=[{title:dp("Top")}],{state:n={}}=ST()||{},r=dk(xk((e=>e.ready))),o=dk(xk((e=>e.world.era))),i=dk(xk((e=>e.world.season_finished_at))),{active_players:a,alive_players:s}=dk(xk((e=>e.world))),l=dk(xk((e=>e.user)));let c=dk(xk((e=>e.top)));const u=F.useRef(null),[d,p]=F.useState(),[f,h]=F.useState();let g=l.dead;const m=1===o,v=e=>{let t=2;return m&&(t=1),e?e===t?"clans":e:t};F.useEffect((()=>{n?.clanItem&&(Kx.getState().sendMessage(null),E(v(),!0,!0),h(n.clanItem))}),[n]);const b=c&&c.length?c.length:0,y=Array.isArray(c),[w,x]=F.useState((()=>{const e=jp.sGet(mp);let t=0;return jp.sGet(gp)?(jp.sSet(gp,""),t=3,m&&(t=2),t):n?.clanItem?v():(e&&(t=2),m&&t&&(t-=1),t)})),S=F.useCallback((()=>{d&&zp(d)}),[d]);F.useEffect((()=>{let e;return 0===w&&r&&y&&!i&&(S?.(),e=setInterval((()=>{dk.getState().sendMessage({type:Dw})}),3e3)),()=>{clearInterval(e)}}),[w,r,y,i]);const k=l.clan_id||jp.sGet("CLAN_SAVED"),C=F.useMemo((()=>{let n=m?e:t;return k?[...n,{title:dp("My clan")}]:[...n]}),[k,o]);let _=1===o?o:2;m&&(_=1);const E=(e,t=!0,n=!1)=>{Kx.getState().update("curTab",`${location.hash}${v(e)}`),x(e),n||h(null),jp.sRm(mp),e!==_&&dk.getState().clearK("clans_top"),_===e&&dk.getState().clearK("clan"),d&&zp(d),t&&d&&d.slideTo(e),jp.sSet("topTab",e),tk()},A=[{icon:"game",value:l.items},{icon:"shield",value:l.defenders},{icon:"fight",value:l.attackers}];let T=(()=>{const{active_players:e}=dk.getState().world,t=dk.getState().top;if(!(t&&t.length<20))return e>=25})();return X.jsxs(AH,{className:"swiper-container","data-t":`${a}-${s}`,children:[X.jsxs(_R,{children:[X.jsx(uW,{tabs:C,setActiveTab:E,activeTab:w}),X.jsx("div",{className:`swiper-scrollbar ${_H}`})]}),X.jsxs(rW,{className:"mySwiper",ref:u,initialSlide:w,onSwiper:e=>p(e),spaceBetween:50,hashNavigation:{watchState:!0},modules:[iW],slidesPerView:1,scrollbar:{draggable:!0,el:`.${_H}`},onSlideChange:e=>{E(e.activeIndex,!1),tk()},autoHeight:!0,children:[X.jsx(oW,{"data-hash":pp.TOP,children:X.jsx(X.Fragment,{children:0===w&&X.jsxs(X.Fragment,{children:[o>1&&!g&&X.jsxs(X.Fragment,{children:[X.jsx(mR,{fromStats:A}),X.jsx(mE,{h:16})]}),X.jsx(LH,{children:!i&&X.jsx(YW,{})}),X.jsx(mE,{h:40}),!!b&&X.jsxs(X.Fragment,{children:[X.jsx(wH,{upd:S,handleFocus:()=>{(()=>{const e=document.querySelector(".main");e?.scrollTo({top:e?.scrollTop+300,behavior:"smooth"})})()},isTop:!0}),T?X.jsx(SH,{active_players:a,upd:S}):X.jsx(X.Fragment,{children:X.jsx(mE,{h:300})})]})]})})}),o>1&&X.jsxs(oW,{"data-hash":pp.TOP_ATTACK,children:[!g&&[1,"1"].includes(w)&&X.jsx("div",{className:"atk-fight",children:X.jsx(mH,{...l,hide:!0})}),X.jsx(pH,{open:1===w,setTab:()=>E(0),upd:S})]})]})]})},AH=$g.div`
    .stat-value {
        font-size: 9cqw;
    }
`,TH=new class{url="";buffer=null;sources=[];constructor(e){this.url=e}load(){return this.url?this.buffer?Promise.resolve(this.buffer):new Promise(((e,t)=>{const n=new XMLHttpRequest;n.open("GET",this.url,!0),n.responseType="arraybuffer",n.onload=()=>{CH.decodeAudioData(n.response,(n=>{n?(this.buffer=n,e(n)):t(new Error(`Sound decoding error: ${this.url}`))}))},n.onerror=e=>{t(e)},n.send()})):Promise.reject(new Error("Missing or invalid URL: "+this.url))}play(e=1,t=0){if(!this.buffer)return;const n=CH.createBufferSource();n.buffer=this.buffer;const r=this.sources.push(n)-1;n.onended=()=>{n.stop(0),this.sources.splice(r,1)};const o=CH.createGain();o.gain.value=e,n.connect(o).connect(CH.destination),n.start(t)}stop(){this.sources.forEach((e=>{e.stop(0)})),this.sources=[]}}("./s.mp3");TH.load();const RH=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wh(Pg.apply(void 0,rf([e],t,!1))),o=Ch(r);return new wg(o,r)})`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`,jH=$g.div`
  width: 100vw;
  height: 100vh;
  //background: #f0f0f0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`,NH=$g.div`
  position: absolute;
  width: ${e=>e.isMobile?"40px":"30px"};
  height: ${e=>e.isMobile?"40px":"30px"};
  pointer-events: none;
  left: ${e=>e.x}px;
  top: ${e=>e.y}px;
  animation: ${RH} 1s ease-out forwards;
`,LH=({children:e})=>{const[t,n]=F.useState([]),[r,o]=F.useState(!1),[i,a]=F.useState(!1),[s]=F.useState(new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADQABISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAA0CurSGdAAAAAAAAAAAAAAAAAAAA//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"));F.useEffect((()=>{const e=()=>{o(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),F.useEffect((()=>{const e=setInterval((()=>{n((e=>e.filter((e=>Date.now()-e.timestamp<1e3))))}),1e3);return()=>clearInterval(e)}),[]);const l=F.useCallback((()=>{TH.stop(),TH.play()}),[s]),c=F.useCallback(((e,t)=>{document.body.classList.contains("user-interacted")||document.body.classList.add("user-interacted"),document.body.classList.contains("user-interacted")&&l();const o=r?20:35,i={id:Date.now(),x:e-o,y:t-o,timestamp:Date.now()};n((e=>[...e,i]))}),[r,l]),u=F.useCallback((e=>{i||c(e.clientX,e.clientY)}),[c,i]),d=F.useCallback((e=>{e.preventDefault(),a(!0),setTimeout((()=>a(!1)),100);const t=e.touches[0];c(t.clientX,t.clientY)}),[c]),p=F.useCallback((e=>{e.preventDefault()}),[]);return X.jsxs(jH,{onClick:u,onTouchStart:d,onTouchMove:d,onTouchEnd:p,children:[e,t.map((e=>X.jsx(NH,{x:e.x,y:e.y,isMobile:r,children:X.jsx("div",{className:"paw-icon"})},e.id)))]})};$g.div`
    display: flex;
    margin-top: 12px;
    max-width: 100%;
    flex-direction: column;
    justify-content: start;
    font-size: 12px;
    &.bal {
        margin-top: 16px;
    }
`,$g.div`
    background-color: white;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--purple-gra, #c7c4d4);

    &.red {
        border: 1px solid var(--pink-gra, #ea5090);
    }

    display: flex;
    width: 100%;

    &.opened:not(.red) {
        > div {
            padding-bottom: 6px;
        }
    }

    > div {

        padding: 16px;

        &:not(.child-sec) {
            display: flex;
            justify-content: space-between;
        }

        &.child-sec {
            //margin: 10px 0;
        }

        &:not(.child) {
            width: 100%;
        }
    }

`,$g.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: start;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    margin: auto 0;

    .list > div {
        margin-bottom: 8px;
    }

    .flex-center {
        gap: 5px;
    }
`,$g.div`
    align-self: stretch;
    gap: 4px;
    white-space: nowrap;
    text-align: right;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    display: flex;
    margin-top: 16px;
    align-items: center;
    gap: 8px;
    color: rgba(163, 163, 163, 1);
    white-space: nowrap;
    justify-content: start;
`,$g.div`
    border-top: 1px solid var(--purple-gra, #c7c4d4);
    object-fit: contain;
    object-position: center;
    width: 100%;
    align-self: stretch;
    flex: 1;
    flex-basis: 0;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    margin: auto 0;
`;const OH=$g.div`
    display: flex;
    margin-top: 8px;
    max-width: 100%;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    justify-content: center;
    gap: 4px;

    button {
        max-height: 40px;
    }
`,PH=$g.div`
    align-self: stretch;
    border-radius: 4px;
    gap: 10px;
    flex: 1;
    margin: auto 0;
    padding: 14px 10px;
    text-transform: uppercase;

    &.ton {
        min-width: 70%;
    }

    &.pink {
        background: linear-gradient(180deg, #ea5090 0%, #cd0938 100%);
    }

    &.purple {
        background: white;
        padding: 11px 10px;
        border: 1px solid #ddd;
    }

    a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
    }

    .wallet {
        height: 1.2em;
    }
`,IH=$g.button`
    margin-top: 8px;

    &.qr-btn.t {
        .game-icon {
            --webkit-mask-image: url("/assets/qr-code.svg");
            mask-image: url("/assets/qr-code.svg");
            mask-size: 16px;
        }
    }
`,MH=async e=>{try{if(!(null==navigator?void 0:navigator.clipboard))throw new Error("Clipboard API not available");await navigator.clipboard.writeText(e),Kx.getState().notify(dp("Copied"))}catch(t){const n=document.createElement("textarea");n.value=e,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),Kx.getState().notify(dp("Copied"))}finally{document.body.removeChild(n)}}},$H=({text:e,color:t,dark:n,onClick:r})=>{const[o,i]=F.useState(!1);if(n&&!Hp())return null;let a=e;return X.jsx(FR,{onClick:()=>{MH(a),i(!0),r?.()},className:`${t||"pink"} attack w-full b-full1 flex3-1 copy boost-open ${n?" hide-icon":" "}`,children:X.jsx(WW,{className:"balance1 flex3-2",children:X.jsx(IR,{className:`game-icon ${o?"done-btn":"copy"} white`,children:" "})})})},DH=(UH=()=>NS((()=>import("./QRCodeShow-BTvEuWCq.js")),[]),F.lazy((async()=>{const e=UH.toString(),t=sessionStorage.getItem("reloaded-components"),n=JSON.parse(t)||[];let r;if(!Array.isArray(n))throw Error("Unexpected value from data store");r=new Set(n);const o=r.has(e);try{const t=await UH();return r.delete(e),sessionStorage.setItem("reloaded-components",JSON.stringify(Array.from(r))),t}catch(i){if(o)throw i;r.add(e),sessionStorage.setItem("reloaded-components",JSON.stringify(Array.from(r))),location.reload()}})));var UH;function BH(e,t=""){return"https://t.me/share/url?url="+encodeURIComponent(e)+"&text="+encodeURIComponent(t)}const zH=({swiper:e})=>{F.useState(!1);const[t,n]=F.useState(!1),r=dk.getState().isMiniApp,o=dk.getState().user,i=`http://t.me/Gamegametestbot/GameTest?startapp=${o.id}`,a=dp("Invite friend"),s=()=>{n(!t)};return X.jsxs(FH,{className:"star-pay-div",children:[X.jsxs(OH,{className:"frens-copy w-full",children:[X.jsx($H,{text:i,dark:!0}),X.jsx(PH,{className:"pink",onClick:()=>{if(r)try{Aw(i)}catch(dP){}},children:r?a:X.jsx("a",{href:BH(i,a),children:a})}),!Hp()&&X.jsx($H,{text:i,onClick:s})]}),X.jsxs("div",{className:"qr flex flexbox-container"+(r?"":"1"),children:[X.jsx(IH,{className:"qr-btn t "+(r?"":" w-full"),onClick:s,children:X.jsxs("div",{className:"flex",children:[X.jsx("div",{children:dp("QR-CODE")}),X.jsx("div",{className:"game-icon"})]})}),r&&X.jsx(FR,{className:"first1 p-10 relative",onClick:()=>{(e=>{Telegram?.WebApp?.shareToStory("",{text:`Come play to Item Farm my Friend #ItemFarm #ItemGame ${e}`,widget_link:{url:e}});let t=window.Telegram?.WebApp?.platform;"android"!==t&&"ios"!==t||setTimeout((()=>{dk.getState().sendMessage({type:Kw,name:Qw.SHARE_STORY})}),2e3)})(i)},children:"Share story"})]}),t&&X.jsxs(F.Suspense,{fallback:X.jsx(Ak,{router:!0}),children:[X.jsx(mE,{h:16}),X.jsx(DH,{url:i,onClose:s})]})]})},FH=$g.div`
    border-radius: 12px;
    background-color: rgba(241, 241, 246, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    padding: 16px;
    margin-top: 11px;
    margin-bottom: 16px;

    hr {
        margin-bottom: 0;
    }

    .qr {
        button {
            margin-top: 16px;
            margin-bottom: 0;
            padding: 0 4px;
        }
    }
`;$g.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    font-size: 24px;
    font-weight: 590;
    text-align: center;
    line-height: 1.3;
    justify-content: center;

    .game-icon {
        margin: 0 2px;
    }
`,$g.div`
    align-self: center;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
`,$g.div`
    align-self: stretch;
    margin: auto 0;

    .game-icon {
        margin: 0 2px;
    }
`,$g.div`
    text-align: center;
    margin-top: 12px;
    white-space: pre;
`,$g.div`
    display: flex;
    margin-top: 12px;
    max-width: 100%;
    flex-direction: column;
    color: rgba(209, 20, 70, 1);
    justify-content: start;
`,$g.div`
    align-self: stretch;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 4px;
    text-align: right;
    justify-content: start;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    gap: 4px;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 4px;
    text-align: right;
    justify-content: start;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    margin: auto 0;
`,$g.div`
    align-self: stretch;
    gap: 4px;
    white-space: nowrap;
    text-align: right;
    margin: auto 0;
`;const VH=()=>{const e=F.useRef(null),[t,n]=F.useState(),[r,o]=F.useState(0),[i,a]=F.useState(Mp()),{t:s,ready:l}=ES(0,{lng:Mp()}),c=(e,n=!0)=>{Kx.getState().update("curTab",`${location.hash}${e}`),n?t.slideTo(e):(o(e),tk())},u=F.useCallback((()=>{zp(t)}),[t]);F.useCallback((e=>{c(e)}),[t]);let d=Tp.map((e=>({title:e.name,value:e.lang})));return X.jsx(X.Fragment,{children:X.jsxs("div",{className:"swiper-container",children:[X.jsx(_R,{children:X.jsx("div",{className:"swiper-scrollbar swiper-scrollbar-bal"})}),X.jsx(rW,{className:"mySwiper",ref:e,onSwiper:e=>n(e),spaceBetween:50,hashNavigation:{watchState:!0},modules:[iW],slidesPerView:1,scrollbar:{draggable:!0,el:".swiper-scrollbar-bal"},onSlideChange:e=>{c(e.activeIndex,!1)},autoHeight:!0,children:X.jsxs(oW,{"data-hash":pp.TOP,children:[0===r&&X.jsxs("div",{className:"slide-load-page1 friends-page",children:[X.jsx(zH,{swiper:t}),X.jsx("br",{}),X.jsx(WH,{className:"second-text",children:"Choose a language"}),X.jsx(ZR,{onChange:e=>{a(e),ek({language_code:e},!0),u?.()},value:Mp(),items:d}),X.jsx("br",{})]}),X.jsxs("div",{children:[X.jsx(HH,{onClick:()=>{jp.set(Ep,Date.now()),Kx.getState().notify(s("Cleared"))},className:"text-purple2 w-full",children:X.jsx("div",{children:s("Reset info popups")})},"keyResetOnb"),X.jsx("br",{})]}),qp()&&X.jsxs(X.Fragment,{children:[X.jsx("div",{children:X.jsx(HH,{onClick:()=>{jp.rm(Rp),dk.getState().update("langChange",0)},className:"text-purple2 w-full",children:X.jsxs("div",{children:[s("Reset lang")," ",Mp()]})},"keyResetOnb")}),X.jsx("br",{})]})]})})]})})},WH=$g.div`
    margin-bottom: 4px;
`;$g.div`
    background-image: url("./assets/css/bg/mn-from-frens.png");
    width: 100%;

    min-height: 198px;
    padding: 12px 0;

    &:not(.has) {
        font-size: 20px;
    }

    &.has {
        font-size: 14px;
    }

    .ellipsis {
        width: 20%;
    }

    button, .hint {
        width: 80%;
        text-align: center;
        white-space: pre;
    }

    .hint {
        font-size: 12px;
    }

    .error {
        text-align: center;
        padding: 5px;
        font-size: 13px;
        color: red;
        max-width: 90%;
    }
`,$g.div`
    margin-top: 8px;
    margin-bottom: 16px;
`;const HH=$g.button`
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 4px;
    overflow: hidden;
    flex: 1;
    flex-basis: 26px;
    padding: 8px 12px;
`,qH={1:"era1-bg-new.jpg",2:"era2-bg-new.jpg",3:"cat-img.png"},KH=$g.section`
    border-radius: 16px;
    margin-bottom: 8px;
    font-weight: 590;
    box-shadow: 0 5px 10.8px 0 rgba(0, 0, 0, 0.11);
    padding: 0;

    button {
        margin-bottom: 6px;
    }

    .text-white {
        padding: 0 20px;
    }

    &.red-grad {
        font-weight: bold;
        font-size: 14px;
    }

    .h-20 {
        mask-size: 100%;
        -webkit-mask-size: 100%;
        width: 20px;
        height: 20px;
    }

    &:not(.regEra) {
        .popup-desc, .atk-fight1, .enter-game {
            padding: 0 20px;
        }
    }
`,GH=$g.div`
    img {
        border-radius: 12px;
        box-shadow: 0 4px 19.9px 0 rgba(0, 0, 0, 0.17);
        width: 100%;
        max-width: 100%;
        height: auto;
    }
`,YH=$g.div`
    padding: 11px 18px;
    border: 1px solid #fff;
    border-radius: 4px;
    width: auto;
    justify-content: center;
    flex-direction: column;

    div {
        margin-top: 0;
    }

    .prize {
        justify-content: center;
        align-items: center;
    }
`,ZH=()=>{const{world:e,user:t,consts:n}=dk(),{era:r,season_finished_at:o}=e,{final_position:i=0}=t,{dead_at_season:a,final_reward:s}=t;let l="dead pink-grad",c=n.FINAL_DRA_REWARD_MAX-i+1;c<0&&(c=0);const u=t.is_first_login;u?o||(deadImage=`/assets/css/${qH[e.era]}`):l=`${l} item-card era${r<3?"2":""}`;let d=0,p="",f="";if(o&&location.hash.match(/#\/($|\?)/)){f=" ",p=dp("Next season Info"),p=dp("Stop game");const e=$p();d=e+(o+n.SEASON_PAUSE_DURATION-e)}return u&&(2!==r&&1!==r||(p=dp(`onboard.dialog.descnew_era_${r}`),l="",l+=" regEra")),X.jsxs(X.Fragment,{children:[!u&&X.jsxs("div",{className:"text-center f-24",children:[dp("dead")," ",t.is_first_login]}),X.jsx(mE,{h:10}),X.jsxs(KH,{className:l,children:[X.jsx(GH,{}),X.jsxs("div",{className:u?"":"text-white",children:[X.jsx(mE,{h:6}),u?X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"enter-game new-title",children:f||dp("onboard.dialog.titlenew_era_3")}),X.jsx("div",{className:"popup-desc",children:p||dp(`Registered text by era ${e.era}`)})]}):X.jsxs("div",{className:"text-center",children:[X.jsxs("div",{children:[dp("Season"),": ",a]}),X.jsxs("div",{children:[dp("Score"),": ",Pp(i)]}),X.jsx(mE,{h:16}),X.jsxs(YH,{className:"text-white1 f-12 white inline prize flex-center second-section",children:[X.jsxs("div",{children:[dp("Prize")," "]}),X.jsxs("div",{className:"flex",children:[X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"game-icon header-icon1 white h-20"}),X.jsx("div",{children:Pp(s)})]}),X.jsx(kR,{className:"white star-sep dead"}),X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"game-icon header-icon1 white draa  h-20"}),X.jsx("div",{children:Pp(c)})]})]})]})]}),X.jsx(mE,{h:12}),3!==r?X.jsx("div",{className:u?"enter-game":"",children:X.jsx(FR,{className:"white inline prize w-full",onClick:()=>{jp.sRm(`${yp}item`),jp.sRm(`${yp}hunter`),jp.sRm(`${yp}defender`),dk.getState().sendMessage({type:15})},value:{era:r},children:dp(u?"Revive new":"Revive")})}):null]}),!!d&&X.jsx("div",{className:"atk-fight1",children:X.jsx(QH,{className:"btn-div1",children:X.jsxs("button",{className:"info-btn1 disable1d w-full",children:[X.jsx("div",{children:dp("Next season")}),X.jsx(LW,{timestamp:d,humanReplace:"%value%",inline:!0,noText:!0})]})})}),X.jsx("br",{})]})]})},QH=$g.div`
    button {
        span {
            color: #9A9991;
            text-transform: none;
        }
    }
`,XH=()=>{const e=ST(),[t,n]=F.useState(0),{user:r,world:o}=dk(),i=o.era;let{items:a=0}=r;const{eggCountActual:s,multipleCount:l}=Mx(r),[c,u]=F.useState(0);F.useState(0);const[d,p]=F.useState(),f=Hp(),h=f?hp:fp;F.useEffect((()=>{if(a){let e=a/24;e=e/60/60,e*=l,n(e)}u((e=>{let{era:t,bank:n,active_players:r}=dk.getState().world;e<=0&&(e=1);const{EGG_MAX_COST_DIFFERENCE:o,EGG_PRICES_BY_ERA:i,EGG_COST_LIMITS_BY_ERA:a}=dk.getState().consts;let s=Lx(),l=zx([i[t],i[t+1]]),c=zx([a[t],a[t+1]]),u=Rx(s,...l),d=1/Vx(r,10),p=1;Px(13)&&(p=3*Vx(r,5));let f=Rx(s,...c),h=u*d*p*o;e<f&&(h*=(e/f)**.5);const g=n*h;return g-g*+Number(Bx(1)/100).toFixed(2)})(s))}),[a,s,l]),F.useEffect((()=>{let t,n=h[e.pathname];t=n||h[pp.HOME],t&&(n?d?.slideTo(t):d?.slideTo(t,0),tk())}),[e,d]),F.useCallback((()=>{zp(d)}),[d]);const[g,m]=F.useState((()=>{let t=f?2:0;return jp.sGet(gp)&&jp.sSet(gp,""),h[e.pathname]&&(t=h[e.pathname]),t}));let v=r.dead||3===i&&r.is_first_login;return f?X.jsx(X.Fragment,{children:X.jsx(rW,{onSwiper:e=>p(e),spaceBetween:30,hashNavigation:{watchState:!0},modules:[aW],className:"mySwiper3",onSlideChange:e=>{m(e.activeIndex),tk()},autoHeight:!0,children:X.jsx(oW,{"data-hash":"/",children:v?X.jsx(ZH,{}):X.jsx(X.Fragment,{})})})}):null},JH=({link:e,iconSrc:t,label:n,active:r,name:o})=>{const i=CT();return X.jsxs("div",{className:"nav-link "+(r?"active":""),onClick:()=>{jp.sRm(mp);e===pp.TOP&&location.hash===`#${pp.TOP}`&&jp.sGet("topTab")?i(pp.USER_LOGS_REDIRECT,{state:{prevPathname:pp.TOP}}):i(e)},onContextMenu:()=>!1,children:[r&&X.jsx("div",{className:"ac-div"}),X.jsx(eq,{className:(r?"active":"")+("balance"===o?" balance-icon":""),children:X.jsx(tq,{children:n})})]})},eq=$g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 8px 10px;
    width: 50px;

    &.active {
        background: linear-gradient(180deg, #c7c4d4 0%, #8491c3 100%);
    }

    @media (max-width: 350px) {
        div.icon {
            mask-size: 100%;
            -webkit-mask-size: 100%;
        }
    }
`,tq=$g.span`
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    line-height: 130%;
    margin-top: 4px;
`,nq=()=>{const e=ST(),{t:t}=ES(),n=e.pathname;F.useEffect((()=>{xp.includes(e.pathname)&&(jp.sRm(mp),tk())}),[e]);let r=[{label:t("Home"),link:pp.HOME},{iconSrc:"game-icon top-menu",label:t("Leaderboard"),link:pp.TOP},{iconSrc:"balance-icon",label:t("Invite"),link:pp.BALANCE,name:"balance"}],o=wp.includes(n)?n:pp.HOME;return n!==pp.KLAN_CREATE&&n!==pp.KLAN_EDIT||(o=pp.TOP),X.jsx(oq,{images:r,active:o})},rq=(e,t)=>{if(e===pp.BALANCE){if(t===pp.FAQ)return!0;if(t===pp.LOGS)return!0}return e===t},oq=({images:e,active:t})=>X.jsx(iq,{className:"menu relative",children:e.map(((e,n)=>X.jsx(JH,{active:rq(e.link,t),...e},`bot-menu-item${n}`)))}),iq=$g.section`
    display: flex;
    justify-content: space-between;
    padding: 8px 22px;

    @media (max-width: 350px) {
        gap: 0;
    }
`,aq=({user:e,toLogs:t})=>{const{t:n}=ES(),r=dk(xk((e=>e.user?.dead))),o=dk(xk((e=>e.world.era))),i=e.username?`@${e.username}`:e.id,a=0===e.items||1===o||r,s=()=>X.jsx(FR,{className:"purple attack1 b-full",onClick:t,children:X.jsx(WW,{className:"balance1",children:X.jsx(qW,{children:n("logs")})})});if(!i)return X.jsx(sq,{className:"p-btns no-id logs-only",children:s()});let l=!!`${i}`.match("@"),c="p-btns flexbox-container flex3 m-12-btn "+(a&&1===o?"no-attack":"");return c+=l?" all":" logs-only",X.jsxs(sq,{className:c,children:[X.jsx($H,{text:i}),l&&X.jsx(FR,{onClick:e=>{e.preventDefault(),window.location.href="https://t.me/"+i.replace("@","")},className:"attack flex3-3",children:X.jsxs(WW,{children:[X.jsx(qW,{children:n("write")}),X.jsx(qW,{className:"game-icon write"})]})}),s()]})},sq=$g.div`
    text-transform: uppercase;

    button.copy:first-child {
        width: 15%;
    }

    button {
        padding: 4px 11px;
    }

    &.all {
        button {
            width: 41%;
        }
    }
`,lq=$g.div`
    &.atk-hide {
        margin-bottom: 16px;
    }

    button {
        padding: 4px 0;
    }
`,cq="DRA_Game",uq="DRA_HUNT",dq="DRA_DEF",pq={[cq]:0,[uq]:1,[dq]:2},fq=({hide:e,onClick:t,...n})=>{const{t:r}=ES(),[o,i]=F.useState(!1),a={[cq]:"game",[dq]:"shield",[uq]:"fight"},s={[cq]:r("item",{count:5}),[dq]:r("itemDef",{count:5}),[uq]:r("itemHunt",{count:5})},l=()=>{i(!0)},c=(e="")=>{let o=l;return e&&(o=()=>t(pq[e])),X.jsx(FR,{onClick:o,className:(e?"":"pink-full")+" attack b-full ext",value:{stars:n.stars},children:X.jsxs(WW,{className:"balance1",children:[X.jsx(qW,{children:s[e]||r("Exterminate")}),!!e&&X.jsx("div",{className:`game-icon white ${a[e]}`})]})})};if(o){const t=()=>X.jsx(hq,{className:"info-btn cancel",onClick:()=>i(!1),children:r("Cancel")});return X.jsx(X.Fragment,{children:X.jsxs(lq,{className:"flexbox-container "+(e?"atk-hide":""),children:[c(cq),c(dq),c(uq),t()]})})}return c()},hq=$g.button`
    font-size: 10px;
    background: white;
    gap: 4px;
    border-radius: 12px;
    color: #D11446;
    border: 1px solid var(--pink, #D11446);
`,gq=({src:e=""})=>X.jsx("div",{className:"upl-ava-cont "+(e?"":"bg"),children:e?X.jsx("img",{src:e,alt:""}):X.jsx("div",{className:"game-icon mini-clan"})}),mq=$g.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    border-radius: 0.5rem;
`,vq=$g.div`
    flex-grow: 1;
    flex-basis: 0; /* Important: prevents flex item from growing beyond content */
    min-width: 0; /* Important: allows text to wrap/truncate */
    border-radius: 0.25rem;

    /* Handle text overflow */
    overflow: hidden;
    white-space: normal; /* Allows text to wrap */
    word-wrap: break-word; /* Breaks long words */
    text-overflow: ellipsis;
`,bq=$g.div`
    //width: 9rem; /* 192px */
    flex-shrink: 0; /* Prevents the fixed div from shrinking */
    border-radius: 0.25rem;
`,yq=({name:e,leaderUsername:t,members_count:n,total_items:r,handleEdit:o,list:i,onLeaderClick:a,crest_image_path:s,estimated_reward:l,final_reward_sum:c})=>{const u=s&&"";let d=void 0!==c?c:void 0,p="h-40";return void 0!==c&&(p="h-20"),X.jsx(wq,{className:o?"edit":"",children:X.jsxs(mq,{className:"clan-info1 "+(i?"list clan-info":"detail"),children:[X.jsx(bq,{className:"flex flex-center",children:X.jsx(gq,{src:u})}),X.jsx(vq,{children:X.jsxs(xq,{className:"txt-info "+(i?"list clan-text":""),children:[X.jsxs("div",{className:"flex first",children:[X.jsxs("div",{className:"text-info",children:[X.jsx(Sq,{className:"ellipsis",children:e}),X.jsxs(kq,{className:"lead",children:[X.jsxs("div",{className:"label",children:[dp("Leader"),":"]}),X.jsx("div",{onClick:a,className:"ellipsis",children:t})]}),X.jsx(Eq,{memberCount:n||0,points:r||0,final_reward_sum:d})]}),!i&&o&&X.jsx(Cq,{className:"edit-clan",onClick:o,children:X.jsx(_q,{className:"game-icon pen h-40 w-40 purple"})})]}),void 0!==d&&X.jsxs("div",{className:"btn-div f flex h-20 "+(d>1e6?" big":""),children:[X.jsxs("div",{children:[dp("Reward season"),":"]}),Pp(d||0),X.jsx("div",{className:"game-icon"})]}),void 0!==l&&X.jsxs("div",{className:`btn-div flex ${p}`,children:[X.jsxs("div",{children:[dp("Dar heaven"),":"]}),Pp(l||0),X.jsx("div",{className:"game-icon"})]})]})})]})})},wq=$g.header`
    display: flex;
    width: 100%;

    button {
        padding: 0;
    }

    .detail {
        .text-info {
            max-width: 94%;
        }
    }

    &.edit {
        .text-info {
            max-width: 80%;
        }
    }

    .clan-info1 {
        display: flex;
        gap: 16px;
        font-size: 12px;
    }
`,xq=$g.div`
    .flex.first {
        justify-content: space-between;
    }

    &.list {
        .text-info {
            max-width: 94%;
        }

        .stats-wrapper, .btn-div.f {
            margin-top: 8px;
        }
    }
    .big {
        font-size: 11px;
    }
`,Sq=$g.div`
    margin: 0;
    font-size: 14px;
    margin-bottom: 4px;
`,kq=$g.div`
    display: flex;
    align-items: center;
    margin: 4px 0 0;
    gap: 4px;

    .label {
        white-space: nowrap;
    }
`,Cq=$g.button`
    align-self: start;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;

    &.edit-clan {
        padding: 0;
    }
`,_q=$g.div`
    aspect-ratio: 1;
    object-fit: contain;
`,Eq=({memberCount:e,points:t,final_reward_sum:n})=>{let r=void 0!==n;return X.jsxs(Aq,{className:"stats-wrapper lead",children:[r?X.jsx(X.Fragment,{}):X.jsx(X.Fragment,{children:X.jsxs(Tq,{children:[X.jsx(Rq,{className:"game-icon game"}),X.jsx(jq,{children:Pp(t)})]})}),X.jsxs(Tq,{children:[X.jsx(Rq,{className:"game-icon people gray"}),X.jsx(jq,{children:`${Pp(e)}/${Pp(50)}`})]})]})},Aq=$g.div`
    display: flex;
    margin-top: 16px;
    gap: 8px;
    white-space: nowrap;
`,Tq=$g.div`
    display: flex;
    gap: 4px;
    align-items: center;
`,Rq=$g.div`
    aspect-ratio: 1;
    object-fit: contain;
    width: 16px;
`,jq=$g.span`
`,Nq=()=>{const e=CT(),t=dk((e=>e.clan_reqs));let n=Array.isArray(t)&&t.length||0;F.useEffect((()=>{n||dk.getState().sendMessage({type:Ww})}),[n]);return n?X.jsxs(Pq,{onClick:()=>{n&&e(pp.CLAN_APPLY)},disabled:!n,className:"add-game-btn",children:[dp("Requests")," (",n,")"]}):X.jsxs("div",{className:"atk-fight",children:[X.jsx(mE,{h:8}),X.jsx(Oq,{className:"btn-div",children:X.jsx(wR,{disabled:!0,className:"info-btn disabled",children:dp("No reqs")})})]})},Lq=({id:e})=>X.jsx(Pq,{onClick:()=>{JS({id:e,type:112,title:dp("Do you really wanna send request"),okText:dp("Send request"),onOk:()=>{dk.getState().sendMessage({type:112,intVal:e})}})},children:dp("Apply")}),Oq=$g.div`
    .info-btn {
        background: none !important;
    }
`,Pq=$g.button`
    border-radius: 4px;
    background: linear-gradient(180deg, #c7c4d4 0%, #8491c3 100%);
    margin-top: 12px;
    color: rgba(255, 255, 255, 1);
    white-space: nowrap;
    text-align: center;
    padding: 16px 60px;
    font-size: 12px;
    border: none;
    cursor: pointer;
    width: 100%;

    &.success {
        background: green;
        color: white;
    }
`,Iq=$g.a`
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        text-decoration: underline;
    }
`,Mq=$g.div`
    border-radius: 0.5rem;
    max-width: 32rem;
    width: 100%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`,$q=$g.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
`,Dq=$g.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
`,Uq=$g.div`
    width: 1.25rem;
    height: 1.25rem;
    color: #eab308;
`,Bq=$g.div`
    width: 1rem;
    height: 1rem;
`,zq=$g.div`
    margin-top: 1rem;
`,Fq=$g.p`
    margin: 1rem 0;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-family: ui-monospace, monospace;
    font-size: 0.875rem;
    word-break: break-all;
`,Vq=$g.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 1.5rem;
`,Wq=$g.button`
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.2s;
    border: none;
    cursor: pointer;

    &:focus {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
    }
`,Hq=$g(Wq)`
    color: #111827;
`,qq=$g(Wq)`
    //background-color: #2563eb;
    //background: linear-gradient(180deg, #ea5090 0%, #cd0938 100%) !important;

    color: white;

    &:hover {
        //background-color: #1e40af;
    }
`,Kq=({url:e,children:t})=>{const[n,r]=F.useState(!1);return X.jsxs(X.Fragment,{children:[X.jsxs(Iq,{href:e,onClick:e=>{e.preventDefault(),r(!0)},children:[t,X.jsx(Bq,{className:"game-icon external-link"})]}),n&&X.jsx(X.Fragment,{children:X.jsx(NR,{onDecline:()=>r(!1),children:X.jsxs(Mq,{onClick:e=>e.stopPropagation(),children:[X.jsxs($q,{children:[X.jsx(Uq,{className:"game-icon warning"}),X.jsx(Dq,{children:dp("External Link Warning")})]}),X.jsxs(zq,{children:[X.jsx("p",{children:dp("External link Text")}),X.jsx(Fq,{children:e}),X.jsx("p",{children:dp("External link Description")})]}),X.jsxs(Vq,{children:[X.jsx(qq,{onClick:()=>{window.open(e,"_blank","noopener,noreferrer"),r(!1)},className:"dialog-ok green",children:dp("Continue to Site")}),X.jsx(Hq,{onClick:()=>r(!1),className:"dialog-ok red",children:dp("Cancel")})]})]})})})]})},Gq=$g.div`
    white-space: pre-wrap;
    font-family: ${e=>e.$fontFamily||"inherit"};
    font-size: ${e=>e.$fontSize||"inherit"};
    color: ${e=>e.$textColor||"inherit"};
`,Yq=$g.span`
    max-width: ${e=>e.$truncateLength?"100%":"none"};
    display: ${e=>e.$truncateLength?"inline-block":"inline"};
    overflow: ${e=>e.$truncateLength?"hidden":"visible"};
    text-overflow: ${e=>e.$truncateLength?"ellipsis":"clip"};
    vertical-align: bottom;
`,Zq=({text:e,truncateUrls:t=!1,truncateLength:n=50,fontFamily:r,fontSize:o,textColor:i,linkColor:a})=>{const s=/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;return X.jsx(Gq,{$fontFamily:r,$fontSize:o,$textColor:i,children:(()=>{if(!e)return null;const r=e.split(s),o=e.match(s)||[];return r.map(((e,r)=>{const i=[e];var a;return o[r]&&i.push(X.jsx(Kq,{url:o[r],children:X.jsx(Yq,{$truncateLength:t?n:null,children:(a=o[r],!t||a.length<=n?a:`${a.substring(0,n-3)}...`)})},`link-${r}`)),X.jsx(V.Fragment,{children:i},`segment-${r}`)}))})()})},Qq=({getId:e,pathname:t,detail:n,list:r,handleEdit:o,onClick:i,handleSelect:a,upd:s,my:l,children:c,setDetail:u,klanClick:d,...p})=>{const f=CT(),h="popup"===t;let g="clan";h&&(g="clanPopup");const m=dk(xk((e=>e.world.era))),v=dk(xk((e=>e.user.id))),b=dk(xk((e=>e.user.clan_id))),y=dk(xk((e=>e.clans_top_extend)));let w=dk(xk((e=>e[g])));const x=dk(xk((e=>e.userClan))),S=dk(xk((e=>e.removedMemberUserId))),k=dk(xk((e=>e.clanJoinSuccess))),C=F.useRef(null),_=n&&!h&&!l;F.useEffect((()=>(_&&(()=>{try{rb.isMounted()&&rb?.show()}catch(dP){}})(),()=>{_&&(Cx(),dk.getState().clearK("clan")),dk.getState().clearK("clanJoinSuccess")})),[_]),F.useEffect((()=>{S&&(Kx.getState().notify(dp("Removed")),dk.getState().clearK("removedMemberUserId",S))}),[S]);const E=y?.[e]||{},A=h&&y?.[e];A&&(w=A);const T={...E,...p,...n?{...w}:{}};let{id:R,num:j,owner:N}=T;if(F.useEffect((()=>{if(n||e){const t=e||R;if(t){if(A)return;dk.getState().sendMessage({type:h?134:110,intVal:t})}h||(s?.(),tk())}}),[h,n,s,e,A]),F.useEffect((()=>{n&&w&&s?.()}),[n,w,s]),n){if(!w&&e&&h)return X.jsx(Tk,{mini:!0});if(!w||l&&!x)return X.jsx("div",{className:"slide-load-page clan load",children:X.jsx(Tk,{})})}const L=v===N?.id;!L||l||h||(l=1);L&&!h&&(o=()=>{jp.sSet(gp,1),Np._tmp_img_obj_data_mini="",jp.sRm("CLAN_TAB_NAME"),jp.sRm("CLAN_TAB_DESC"),jp.sRm("CLAN_TAB_TYPE"),f(pp.KLAN_EDIT)});let O=T?.members||[];e&&!l&&h&&(r=1,O=[]);let P="clan-card-div ";L&&(P+=" own"),h&&(P+=" popup"),r&&(P+=" flexbox-container flex3 list clan-list");const I=1===O.length;let M={};i&&(M.onClick=d?a(T):a);let $="clan-card "+(r?"list card-list":"modal-center klan-info-card");return j||($+=" no-num"),X.jsxs(Xq,{className:P,...M,children:[n&&!h&&X.jsx("div",{ref:C,className:`hidden ${Ap}`,onClick:()=>{u(null),Cx(),tk()}}),r&&!!j&&X.jsx(Jq,{className:"flex-center",children:j}),X.jsxs(eK,{className:$,children:[X.jsx(yq,{...T,final_reward_sum:3===m?T.final_reward_sum:void 0,onLeaderClick:e=>{e.stopPropagation(),e.preventDefault(),i?.(N.id)},handleEdit:o,list:r}),!r&&X.jsxs(X.Fragment,{children:[X.jsx(tK,{...T}),L?X.jsx(Nq,{}):b?null:T.join_request_sent||k?X.jsx("div",{className:"atk-hide",children:X.jsxs("div",{className:"btn-div flex h-40",children:[dp("Applied"),X.jsx("div",{className:"game-icon done"})]})}):X.jsx(Lq,{id:R})]})]}),n&&X.jsxs(X.Fragment,{children:[X.jsx(mE,{h:16}),X.jsx(YW,{itemsKey:"clans",propsItems:(D=O,D.sort(((e,t)=>0===e.items&&0!==t.items?1:0!==e.items&&0===t.items?-1:t.final_reward-e.final_reward)),D),tab:0,klanRequests:L&&!I?{no:1}:null,klan:T})]}),c&&X.jsx(X.Fragment,{children:(!L||L&&I)&&c})]});var D},Xq=$g.div`
    margin-bottom: 8px;

    &.clan-list {
        grid-gap: 8px;
    }

    &.popup {
        grid-gap: 0;
    }

    &:not(.own) {
        .detail {
            width: 100%;
        }
    }
`,Jq=$g.div`
    margin-right: 2px;
    font-size: 16px;
    min-width: 20px;
`,eK=$g.div`
    &.list {
        width: 93%;

        &.no-num {
            width: 100%;
        }
    }
`,tK=({description:e,reward_distribution_method:t})=>{let n=dp(`clanRewards.${t}`),r=dp(`clanRewards.${t}d`),o="",i=e.match(/::=(.*?)=::/);return i?.[1]&&(o=i[1]),o&&(e=e.replace(/::=(.*?)=::/,""),o=`${dp("Link to clan chat")}: ${o.match("http")?"":"https://"}${o}`),X.jsxs(X.Fragment,{children:[X.jsx(nK,{className:"desc",children:X.jsx(Zq,{text:e,truncateUrls:!0,truncateLength:30,lineHeight:"2",fontSize:"16px"})}),X.jsx(nK,{children:X.jsx(Zq,{text:o,truncateUrls:!0,truncateLength:30,lineHeight:"2",fontSize:"16px"})}),X.jsxs(nK,{children:[dp("Reward type"),": ",n," (",r,")"]})]})},nK=$g.div`
    margin: 12px 0 0;
    font-size: 12px;

    &.desc {
        max-height: 200px;
        overflow: hidden;
        overflow-y: scroll;
    }
`,rK=()=>{const{era:e}=dk(xk((e=>e.world))),t=dk(xk((e=>e.ready))),n=dk(xk((e=>e.user))),r=dk((e=>e.info_user));let o=dk(xk((e=>e.attack_success))),i=dk((e=>e.incomingAttackUser)),a=dk(xk((e=>e.attack_failed))),s=Kx((e=>e.attack_success));const{pathname:l}=ST(),c=CT(),[u,d]=F.useState(null),[p,f]=F.useState(!1),[h,g]=F.useState(!1),m=u?.id===r?.id,v=n?.id===u?.id;let b=i?.toUser;b?.id===n?.id&&(b=null),F.useEffect((()=>{a&&d((e=>({...e,attack_failed:a})))}),[a]),F.useEffect((()=>{o&&u?.id&&(dk.getState().update("attack_failed",{load:!1}),o.target_id===u?.id&&(f(!0),d({...u,attacks:o})))}),[o]),F.useEffect((()=>{i&&(d(null),g(i),dk.getState().sendMessage({type:Bw,id:i.id}))}),[i]),F.useEffect((()=>{t||Kx.getState().sendMessage(null)}),[t]),F.useEffect((()=>{d(s?{...s}:null)}),[s]),F.useEffect((()=>{u?.id&&r?.id===u?.id?d((e=>({...e,...r}))):r&&d((e=>({...e,...r||{}})))}),[r]);const y=()=>{S(),setTimeout((()=>{c(pp.STARS)}),100)},w=()=>{S(),setTimeout((()=>{c(pp.USER_LOGS_REDIRECT,{state:{id:r?.id,type:"popup",prevPathname:l}})}),10)},x=e=>()=>{S(),c(pp.TOP,{state:{id:e?.id,type:"clan",clanItem:e}})},S=()=>{Np.page="",dk.getState().clearK("info_user"),dk.getState().clearK("attack_success"),Kx.getState().sendMessage(null),d(null),g(null)};if(!u)return null;const k=!n.dead&&Ux(4,!0)&&e>1,C=e=>{dk.getState().sendMessage({type:18,target_id:u?.id,item_type:e})},_=()=>{let e=u?.id;window.history.pushState({urlPath:`/?tgWebAppStartParam=user_id_${e}#/`},"",`/?tgWebAppStartParam=user_id_${e}#/`),dk.getState().sendMessage({cc:e})};let E=h?"atk-from":"";return k&&(E+=" with-ext"),E+=" atk-modal",X.jsx(NR,{onDecline:S,cl:E,children:X.jsx(X.Fragment,{children:(()=>{let t=u.attack_failed||a,n=t?.load;n&&(t=void 0);let o=dp("You're attacked popup");b&&(o=`${dp("User attacked")} ${nk(b)}`);let i=!!r?.clan?.id&&Np.page!==bp;return X.jsxs(X.Fragment,{children:[n&&X.jsx(Tk,{mini:!0}),(u.attacksUser||h?.id===u.id)&&X.jsx(iK,{children:o}),X.jsx(OW,{...m?{...u,...r}:{...u},toStars:y,showStats:!0,small:!0,popup:!0}),h&&X.jsxs(X.Fragment,{children:[X.jsx(mE,{h:8}),X.jsx(VW,{attack:h,attacker:!0})]}),X.jsx(mE,{h:12}),X.jsx(aq,{user:u,toLogs:w}),u.attacks?X.jsx(VW,{attack:u.attacks}):X.jsxs(oK,{className:"atk-fight",children:[t&&t.reason?X.jsxs(iK,{children:[dp("Attack failed"),". ",dp("Reason"),": ",dp(`reasons.reason${t.reason}`)]}):X.jsx(X.Fragment,{children:!v&&e>1&&X.jsx(mH,{atkFail:t,...u,hide:!1})}),k&&X.jsxs(X.Fragment,{children:[X.jsx(mE,{h:16}),X.jsx(fq,{onClick:C})]})]}),i&&X.jsxs("div",{className:"popup-user-clan",children:[X.jsx(mE,{h:12}),X.jsx(Qq,{getId:r?.clan?.id,pathname:"popup",handleSelect:x,onClick:()=>{},klanClick:!0,detail:!0})]}),!v&&Op("APP_URL").match(/alpha|localhost/)&&X.jsxs("div",{className:"text-center",children:[X.jsx(mE,{h:20}),X.jsx("button",{onClick:_,children:"В"})]})]})})()})})},oK=$g.div`
    button {
        margin-bottom: 0;
    }

    .star {
        width: 100%;
        max-width: 100%;
    }
`,iK=$g.div`
    margin-bottom: 16px;
    font-size: 14px;
`,aK=$g.div`
    position: relative;
    z-index: 101;
    margin: 20px;
    top: -35px;
    -webkit-animation: bounce 1.5s;

    /* Scroll down indicator (bouncing) */
    @-webkit-keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            -webkit-transform: translateY(0);
        }
        40% {
            -webkit-transform: translateY(-30px);
        }
        60% {
            -webkit-transform: translateY(-15px);
        }
    }
    @-moz-keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            -moz-transform: translateY(0);
        }
        40% {
            -moz-transform: translateY(-30px);
        }
        60% {
            -moz-transform: translateY(-15px);
        }
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
        }
        40% {
            -webkit-transform: translateY(-30px);
            -moz-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            -o-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        60% {
            -webkit-transform: translateY(-15px);
            -moz-transform: translateY(-15px);
            -ms-transform: translateY(-15px);
            -o-transform: translateY(-15px);
            transform: translateY(-15px);
        }
    }
`;const sK=({isOpen:e,onClose:t,children:n,setCopied:r})=>{const[o,i]=F.useState(e);return F.useEffect((()=>{i(e)}),[e]),F.useEffect((()=>(setTimeout((()=>{i(!1),r?.(!1),function(e){let t=document.querySelector(e);t&&(t.style.animation="none",t.offsetHeight,t.style.animation=null)}(".portal-notify")}),1500),()=>t?.())),[]),o?bd.createPortal(X.jsx(aK,{className:"portal-notify",children:n}),document.body):null},lK=()=>{const[e,t]=F.useState("");let n=dk((e=>e.incomingAttackUserNotify));const r=Kx(xk((e=>e.notifyMessage)));return F.useEffect((()=>{if(n){const e=`${nk(n)}`,r=`${nk(n.toUser)}`;t(`${e} ${dp("User attacked")} ${r}`),dk.getState().clearK("incomingAttackUserNotify")}return()=>{dk.getState().clearK("incomingAttackUserNotify")}}),[n]),F.useEffect((()=>(r&&t(r),()=>{Kx.getState().notify(null)})),[r]),X.jsx(X.Fragment,{children:e&&X.jsx(sK,{isOpen:!0,setCopied:t,children:X.jsx(fE,{message:e})})})},cK={[pp.ART]:Sp.arts,[pp.DRA]:Sp.dra,[pp.STARS]:Sp.stars,[pp.TOP]:Sp.top,[pp.BALANCE]:Sp.balance},uK=()=>{const e=Kx(xk((e=>e.curTab))),{dead:t,is_first_login:n}=dk(xk((e=>e.user))),r=dk(xk((e=>e.world.era))),o=dk(xk((e=>e.network))),i=dk(xk((e=>e.ready))),a=dk(xk((e=>e.reconnect))),{pathname:s}=ST();let l="";e?.startsWith(location.hash)&&(l=e.replace(location.hash,"")),"0"===l&&(l="");let c=(cK[s]||"")+(l?`tab${l}`:"");const u=Gp(c),[d,p]=F.useState(u);!c&&"#/"===location.hash&&n&&(c=`new_era_${r}`);const f=Zp(c);return X.jsxs("nav",{className:"nav "+(t?"dead":""),children:[X.jsx(nq,{dead:t}),X.jsx(rK,{}),X.jsx(lj,{}),X.jsx(lK,{}),!i&&1===a&&X.jsx(gE,{}),2===o&&X.jsx("div",{className:"enter-btn"}),f&&X.jsx(ij,{setOnBoard:p,item:c,initStep:1,onB:d,isBoard:!0})]})},dK=$g.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* fallback for browsers that don't support CSS variables */
    height: var(--app-height);
`,pK=$g.header`
    height: 116px;
`,fK=$g.footer`
    min-height: 83px;

    .nav {
        padding-top: 4px;
    }
`,hK=$g.main`
    flex: 1;
    overflow-y: auto;
    padding: 0 20px;
`,gK=()=>{const{pathname:e,state:t}=ST();let n=dk(xk((e=>e.user?.dead)));const r=(()=>{const[e,t]=F.useState(!1);return F.useEffect((()=>{let e=window.innerHeight,n=window.visualViewport?.height;const r=()=>{try{/iPad|iPhone|iPod/.test(navigator.platform);const r=window.innerHeight<e-100;if(t(r),n){const e=window.visualViewport?.height<n-100;e&&t(e)}}catch(dP){}};return window.visualViewport&&window.visualViewport.addEventListener("resize",r),window.addEventListener("resize",r),()=>{window.visualViewport&&window.visualViewport.removeEventListener("resize",r),window.removeEventListener("resize",r)}}),[]),e})();let{id:o}=t||{};const i=e===pp.HOME||!wp.includes(e),a=F.useRef(null);F.useEffect((()=>{const e=()=>{document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);let s=`${Mp()} game-app`;return n&&i&&(s+=" dead"),X.jsxs(dK,{className:s,ref:a,children:[X.jsx(pK,{className:"new-header",children:X.jsx(TR,{})}),X.jsx(hK,{className:"main"+(o?" with-id":""),children:X.jsx(F.Suspense,{fallback:X.jsx(Ak,{router:!0}),children:X.jsx(UT,{})})}),X.jsxs(fK,{className:r?"isKeyboardVisible":"",children:[X.jsx(uK,{}),X.jsx(oR,{})]})]})};function mK(){const e=MT();return X.jsx(jk,{error:e})}const vK=(bK=[{path:"/",element:X.jsx(gK,{}),errorElement:X.jsx(mK,{}),loader:()=>X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"loader-item-route"}),X.jsx(Tk,{})]}),children:[{path:"/*",index:!0,element:X.jsx(XH,{})},{path:"/",element:X.jsx(XH,{})},{path:pp.BALANCE,element:X.jsx(VH,{})},{path:pp.TOP,element:X.jsx(EH,{})},{path:pp.USER_LOGS_REDIRECT,element:X.jsx(DF,{})}]}],AA({basename:null==(yK={future:{v7_fetcherPersist:!0,v7_normalizeFormMethod:!0,v7_partialHydration:!0,v7_relativeSplatPath:!0,v7_skipActionErrorRevalidation:!0}})?void 0:yK.basename,future:FT({},null==yK?void 0:yK.future,{v7_prependBasename:!0}),history:LE({window:null==yK?void 0:yK.window}),hydrationData:(null==yK?void 0:yK.hydrationData)||WT(),routes:bK,mapRouteProperties:zT,dataStrategy:null==yK?void 0:yK.dataStrategy,patchRoutesOnNavigation:null==yK?void 0:yK.patchRoutesOnNavigation,window:null==yK?void 0:yK.window}).initialize());var bK,yK;const wK=()=>{const e=dk(xk((e=>e.user.dead))),t=dk(xk((e=>e.world.server_time))),n=dk(xk((e=>e.data.banned))),r=dk(xk((e=>e.data.blocked))),o=dk(xk((e=>e.network))),i=dk(xk((e=>e.reconnect))),[a,s]=F.useState(!0);if(F.useEffect((()=>{if(t){if(!location.hash||"#/"!==location.hash)return void s(!1);(n=((e,t=!1)=>{if(Hp())return[];let n=[];return t?[]:(e<=3&&n.push(),3===e&&n.push(),e>1&&n.push(),n)})(t,e),Promise.all(n.map((({url:e})=>new Promise(((t,n)=>{const r=new Image;r.src=e,r.onload=t,r.onerror=n})).catch((()=>{})))))).then((()=>{s(!1)})).catch((e=>{}))}var n}),[t,e]),n)return X.jsx($F,{});if(r)return X.jsx($F,{block:!0});if(a){let e=2!==o&&void 0===t||1===i;return X.jsxs(X.Fragment,{children:[X.jsx(Tk,{firstTime:!0}),e&&X.jsx(gE,{}),2===o&&X.jsx("div",{className:"enter-btn"})]})}return X.jsx(XT,{router:vK})},xK=()=>{var e;const t=((e="https://cats.safiullin.io").endsWith("/")?e.slice(0,-1):e)+"/manifest.json";return X.jsx(jF,{manifestUrl:t,children:X.jsx(wK,{})})};function SK(){const e=dk(xk((e=>e.reconnect)));dk(xk((e=>e.langChange)));const t=dk(xk((e=>e.world.server_time))),n=dk(xk((e=>e.ready))),r=dk(xk((e=>e.data))),o=dk(xk((e=>e.user))),{loading:i,showTgLogin:a,isMini:s}=function(){const e=dk(xk((e=>e.openWs))),t=dk(xk((e=>e.ready))),n=dk(xk((e=>e.tgUser))),[r,o]=F.useState(!0),[i,a]=F.useState(!1),[s,l]=F.useState(0),c=dk(xk((e=>e.network)));return F.useEffect((()=>{(t||n)&&(o(!1),a(!1)),2===c&&o(!0)}),[t,c,n]),F.useEffect((()=>{(async function(){try{Ly.mount.isSupported()&&Ly.mount()}catch(dP){}const t=dv();try{nv("web_app_setup_swipe_behavior",{allow_vertical_swipe:!1});let e="#1D1B14";nv("web_app_set_background_color",{color:e}),nv("web_app_set_header_color",{color:e}),nv("web_app_set_bottom_bar_color",{color:e})}catch(dP){Sx(dP.toString(),".daa")}let n=xx();if(n.sec){let r=t&&gx(t.initData?.user);return r||(r=n),r.user_id=r.id,r.first_name=`w.first_name w.first_name ${r.first_name}`,e({widgetUser:r,isMiniApp:!!t}),void o(!1)}return hw?.isSupported()&&(hw.mount.isSupported()&&hw.mount(),hw.disableVertical()),Ly.ready(),t})().then((t=>{l(1),e({initData:t,isMiniApp:1})})).catch((t=>{let n=xx();n.sec&&n.id?e({widgetUser:{...n}}):(o(!1),a(!0),l(2))}))}),[]),{loading:r,showTgLogin:i,isMini:s}}(),l=dk(xk((e=>e.network))),[c,u]=F.useState(Gp(Sp.app)),d=dk(xk((e=>e.tgUser)));F.useEffect((()=>{if(jp.get(Ep)||jp.set(Ep,"1"),o&&!Mp())try{ek(o)}catch(dP){}window.history.replaceState({},"")}),[o]);const p=e=>{if(u(e),!n){const e={};d&&(e.widgetUser=d),dk.getState().openWs(e)}};let f=r.restricted;if(a||f||r.tryLater||r.maintain)return X.jsxs(X.Fragment,{children:[X.jsx("div",{className:`${a?1:0}-${s?1:0}`}),X.jsx(SE,{}),X.jsx(Sj,{setOnBoard:p,data:r,item:Sp.tg})]});if(!Mp())return rk(Sp.langSelect),X.jsx(X.Fragment,{children:X.jsx(lj,{})});if(i||0===s&&void 0===t){let t=!1,n={firstTime:1,isPage:!1};if(2===l&&(n={enter:dk.getState().reconnectOn,loading:!1,isPage:!1}),location.hash?.match(pp.BALANCE)&&(t=!0),-2===l&&(n={enter:1,isPage:!1}),!t)return X.jsxs(X.Fragment,{children:[X.jsx(SE,{}),-2===l&&X.jsx(gE,{connect:!1}),X.jsx(Tk,{...n}),1===e&&X.jsx(gE,{})]})}return X.jsx(F.Suspense,{fallback:X.jsx(Ak,{firstTime:!0}),children:X.jsxs(AS,{i18n:up,children:[X.jsx(SE,{}),X.jsx(xK,{})]})})}Object.hasOwn||pE.shim(),document.ontouchmove=function(e){return e.preventDefault(),!0},window.addEventListener("contextmenu",(function(e){e.stopPropagation()}),!0),document.body.setAttribute("oncontextmenu","return false;"),window.addEventListener("load",Fp),window.addEventListener("resize",Fp),de.createRoot(document.getElementById("root")).render(X.jsx(X.Fragment,{children:X.jsx(F.StrictMode,{children:X.jsx(F.Suspense,{fallback:X.jsx(Rk,{}),children:X.jsx(Ok,{fallbackRender:jk,children:X.jsx(SK,{})})})})}));export{NR as M,V as R,dp as a,MH as b,t as c,$g as d,n as g,X as j,F as r,tf as t};
