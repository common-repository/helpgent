(()=>{var e={50817:(e,t)=>{"use strict";function n(){return!1}function o(){return!0}function r(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}Object.defineProperty(t,"__esModule",{value:!0}),r.prototype={isEventObject:1,constructor:r,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=o},stopPropagation:function(){this.isPropagationStopped=o},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation()},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=r,e.exports=t.default},32088:(e,t,n)=>{"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(50817)),i=o(n(45228)),a=!0,l=!1,p=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function s(e){return null==e}var c=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(e,t){s(e.which)&&(e.which=s(t.charCode)?t.keyCode:t.charCode),void 0===e.metaKey&&(e.metaKey=e.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(e,t){var n=void 0,o=void 0,r=void 0,i=t.wheelDelta,a=t.axis,l=t.wheelDeltaY,p=t.wheelDeltaX,s=t.detail;i&&(r=i/120),s&&(r=0-(s%3==0?s/3:s)),void 0!==a&&(a===e.HORIZONTAL_AXIS?(o=0,n=0-r):a===e.VERTICAL_AXIS&&(n=0,o=r)),void 0!==l&&(o=l/120),void 0!==p&&(n=-1*p/120),n||o||(o=r),void 0!==n&&(e.deltaX=n),void 0!==o&&(e.deltaY=o),void 0!==r&&(e.delta=r)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(e,t){var n=void 0,o=void 0,r=void 0,i=e.target,a=t.button;return i&&s(e.pageX)&&!s(t.clientX)&&(o=(n=i.ownerDocument||document).documentElement,r=n.body,e.pageX=t.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===i?e.toElement:e.fromElement),e}}];function d(){return a}function u(){return l}function h(e){var t=e.type,n="function"==typeof e.stopPropagation||"boolean"==typeof e.cancelBubble;r.default.call(this),this.nativeEvent=e;var o=u;"defaultPrevented"in e?o=e.defaultPrevented?d:u:"getPreventDefault"in e?o=e.getPreventDefault()?d:u:"returnValue"in e&&(o=e.returnValue===l?d:u),this.isDefaultPrevented=o;var i=[],a=void 0,s=void 0,h=p.concat();for(c.forEach((function(e){t.match(e.reg)&&(h=h.concat(e.props),e.fix&&i.push(e.fix))})),a=h.length;a;)this[s=h[--a]]=e[s];for(!this.target&&n&&(this.target=e.srcElement||document),this.target&&3===this.target.nodeType&&(this.target=this.target.parentNode),a=i.length;a;)(0,i[--a])(this,e);this.timeStamp=e.timeStamp||Date.now()}var g=r.default.prototype;(0,i.default)(h.prototype,g,{constructor:h,preventDefault:function(){var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=l,g.preventDefault.call(this)},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=a,g.stopPropagation.call(this)}}),t.default=h,e.exports=t.default},32223:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,o){function i(t){var o=new r.default(t);n.call(e,o)}if(e.addEventListener){var a=(l=!1,"object"==typeof o?l=o.capture||!1:"boolean"==typeof o&&(l=o),e.addEventListener(t,i,o||!1),{v:{remove:function(){e.removeEventListener(t,i,l)}}});if("object"==typeof a)return a.v}else if(e.attachEvent)return e.attachEvent("on"+t,i),{remove:function(){e.detachEvent("on"+t,i)}};var l};var o,r=(o=n(32088))&&o.__esModule?o:{default:o};e.exports=t.default},63193:(e,t,n)=>{e.exports={default:n(58489),__esModule:!0}},11156:(e,t,n)=>{e.exports={default:n(20852),__esModule:!0}},89829:(e,t,n)=>{e.exports={default:n(2981),__esModule:!0}},65971:(e,t,n)=>{e.exports={default:n(85011),__esModule:!0}},75522:(e,t,n)=>{e.exports={default:n(33025),__esModule:!0}},66327:(e,t,n)=>{e.exports={default:n(37719),__esModule:!0}},9506:(e,t)=>{"use strict";t.A=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},97588:(e,t,n)=>{"use strict";var o,r=(o=n(89829))&&o.__esModule?o:{default:o};t.A=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},44508:(e,t,n)=>{"use strict";var o,r=(o=n(89829))&&o.__esModule?o:{default:o};t.A=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},85505:(e,t,n)=>{"use strict";var o,r=(o=n(63193))&&o.__esModule?o:{default:o};t.A=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},27714:(e,t,n)=>{"use strict";var o=a(n(65971)),r=a(n(11156)),i=a(n(97479));function a(e){return e&&e.__esModule?e:{default:e}}t.A=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},5748:(e,t)=>{"use strict";t.A=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},50539:(e,t,n)=>{"use strict";var o,r=(o=n(97479))&&o.__esModule?o:{default:o};t.A=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,r.default)(t))&&"function"!=typeof t?e:t}},97479:(e,t,n)=>{"use strict";t.__esModule=!0;var o=a(n(66327)),r=a(n(75522)),i="function"==typeof r.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===i(o.default)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":i(e)}},58489:(e,t,n)=>{n(79115),e.exports=n(6791).Object.assign},20852:(e,t,n)=>{n(53742);var o=n(6791).Object;e.exports=function(e,t){return o.create(e,t)}},2981:(e,t,n)=>{n(82919);var o=n(6791).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},85011:(e,t,n)=>{n(44389),e.exports=n(6791).Object.setPrototypeOf},33025:(e,t,n)=>{n(28957),n(44345),n(32469),n(75529),e.exports=n(6791).Symbol},37719:(e,t,n)=>{n(78750),n(96653),e.exports=n(1275).f("iterator")},73934:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},64233:e=>{e.exports=function(){}},90531:(e,t,n)=>{var o=n(90326);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},73901:(e,t,n)=>{var o=n(69204),r=n(9250),i=n(8830);e.exports=function(e){return function(t,n,a){var l,p=o(t),s=r(p.length),c=i(a,s);if(e&&n!=n){for(;s>c;)if((l=p[c++])!=l)return!0}else for(;s>c;c++)if((e||c in p)&&p[c]===n)return e||c||0;return!e&&-1}}},64194:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},6791:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},33971:(e,t,n)=>{var o=n(73934);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},54947:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},75872:(e,t,n)=>{e.exports=!n(82451)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},50559:(e,t,n)=>{var o=n(90326),r=n(56903).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},22499:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},76358:(e,t,n)=>{var o=n(64796),r=n(14259),i=n(98936);e.exports=function(e){var t=o(e),n=r.f;if(n)for(var a,l=n(e),p=i.f,s=0;l.length>s;)p.call(e,a=l[s++])&&t.push(a);return t}},19786:(e,t,n)=>{var o=n(56903),r=n(6791),i=n(33971),a=n(14632),l=n(43066),p="prototype",s=function(e,t,n){var c,d,u,h=e&s.F,g=e&s.G,f=e&s.S,m=e&s.P,x=e&s.B,v=e&s.W,b=g?r:r[t]||(r[t]={}),y=b[p],w=g?o:f?o[t]:(o[t]||{})[p];for(c in g&&(n=t),n)(d=!h&&w&&void 0!==w[c])&&l(b,c)||(u=d?w[c]:n[c],b[c]=g&&"function"!=typeof w[c]?n[c]:x&&d?i(u,o):v&&w[c]==u?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[p]=e[p],t}(u):m&&"function"==typeof u?i(Function.call,u):u,m&&((b.virtual||(b.virtual={}))[c]=u,e&s.R&&y&&!y[c]&&a(y,c,u)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},82451:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},56903:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},43066:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},14632:(e,t,n)=>{var o=n(21672),r=n(15495);e.exports=n(75872)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},7745:(e,t,n)=>{var o=n(56903).document;e.exports=o&&o.documentElement},14913:(e,t,n)=>{e.exports=!n(75872)&&!n(82451)((function(){return 7!=Object.defineProperty(n(50559)("div"),"a",{get:function(){return 7}}).a}))},63278:(e,t,n)=>{var o=n(64194);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},1084:(e,t,n)=>{var o=n(64194);e.exports=Array.isArray||function(e){return"Array"==o(e)}},90326:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},81199:(e,t,n)=>{"use strict";var o=n(67780),r=n(15495),i=n(1123),a={};n(14632)(a,n(15413)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=o(a,{next:r(1,n)}),i(e,t+" Iterator")}},52500:(e,t,n)=>{"use strict";var o=n(98849),r=n(19786),i=n(83070),a=n(14632),l=n(52833),p=n(81199),s=n(1123),c=n(66870),d=n(15413)("iterator"),u=!([].keys&&"next"in[].keys()),h="keys",g="values",f=function(){return this};e.exports=function(e,t,n,m,x,v,b){p(n,t,m);var y,w,_,k=function(e){if(!u&&e in C)return C[e];switch(e){case h:case g:return function(){return new n(this,e)}}return function(){return new n(this,e)}},M=t+" Iterator",S=x==g,E=!1,C=e.prototype,O=C[d]||C["@@iterator"]||x&&C[x],j=O||k(x),T=x?S?k("entries"):j:void 0,P="Array"==t&&C.entries||O;if(P&&(_=c(P.call(new e)))!==Object.prototype&&_.next&&(s(_,M,!0),o||"function"==typeof _[d]||a(_,d,f)),S&&O&&O.name!==g&&(E=!0,j=function(){return O.call(this)}),o&&!b||!u&&!E&&C[d]||a(C,d,j),l[t]=j,l[M]=f,x)if(y={values:S?j:k(g),keys:v?j:k(h),entries:T},b)for(w in y)w in C||i(C,w,y[w]);else r(r.P+r.F*(u||E),t,y);return y}},35945:e=>{e.exports=function(e,t){return{value:t,done:!!e}}},52833:e=>{e.exports={}},98849:e=>{e.exports=!0},83281:(e,t,n)=>{var o=n(93108)("meta"),r=n(90326),i=n(43066),a=n(21672).f,l=0,p=Object.isExtensible||function(){return!0},s=!n(82451)((function(){return p(Object.preventExtensions({}))})),c=function(e){a(e,o,{value:{i:"O"+ ++l,w:{}}})},d=e.exports={KEY:o,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!p(e))return"F";if(!t)return"E";c(e)}return e[o].i},getWeak:function(e,t){if(!i(e,o)){if(!p(e))return!0;if(!t)return!1;c(e)}return e[o].w},onFreeze:function(e){return s&&d.NEED&&p(e)&&!i(e,o)&&c(e),e}}},99369:(e,t,n)=>{"use strict";var o=n(75872),r=n(64796),i=n(14259),a=n(98936),l=n(64873),p=n(63278),s=Object.assign;e.exports=!s||n(82451)((function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=o}))?function(e,t){for(var n=l(e),s=arguments.length,c=1,d=i.f,u=a.f;s>c;)for(var h,g=p(arguments[c++]),f=d?r(g).concat(d(g)):r(g),m=f.length,x=0;m>x;)h=f[x++],o&&!u.call(g,h)||(n[h]=g[h]);return n}:s},67780:(e,t,n)=>{var o=n(90531),r=n(6935),i=n(22499),a=n(36211)("IE_PROTO"),l=function(){},p="prototype",s=function(){var e,t=n(50559)("iframe"),o=i.length;for(t.style.display="none",n(7745).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;o--;)delete s[p][i[o]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(l[p]=o(e),n=new l,l[p]=null,n[a]=e):n=s(),void 0===t?n:r(n,t)}},21672:(e,t,n)=>{var o=n(90531),r=n(14913),i=n(78381),a=Object.defineProperty;t.f=n(75872)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},6935:(e,t,n)=>{var o=n(21672),r=n(90531),i=n(64796);e.exports=n(75872)?Object.defineProperties:function(e,t){r(e);for(var n,a=i(t),l=a.length,p=0;l>p;)o.f(e,n=a[p++],t[n]);return e}},22682:(e,t,n)=>{var o=n(98936),r=n(15495),i=n(69204),a=n(78381),l=n(43066),p=n(14913),s=Object.getOwnPropertyDescriptor;t.f=n(75872)?s:function(e,t){if(e=i(e),t=a(t,!0),p)try{return s(e,t)}catch(e){}if(l(e,t))return r(!o.f.call(e,t),e[t])}},37106:(e,t,n)=>{var o=n(69204),r=n(79032).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return r(e)}catch(e){return a.slice()}}(e):r(o(e))}},79032:(e,t,n)=>{var o=n(59480),r=n(22499).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},14259:(e,t)=>{t.f=Object.getOwnPropertySymbols},66870:(e,t,n)=>{var o=n(43066),r=n(64873),i=n(36211)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},59480:(e,t,n)=>{var o=n(43066),r=n(69204),i=n(73901)(!1),a=n(36211)("IE_PROTO");e.exports=function(e,t){var n,l=r(e),p=0,s=[];for(n in l)n!=a&&o(l,n)&&s.push(n);for(;t.length>p;)o(l,n=t[p++])&&(~i(s,n)||s.push(n));return s}},64796:(e,t,n)=>{var o=n(59480),r=n(22499);e.exports=Object.keys||function(e){return o(e,r)}},98936:(e,t)=>{t.f={}.propertyIsEnumerable},15495:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},83070:(e,t,n)=>{e.exports=n(14632)},10485:(e,t,n)=>{var o=n(90326),r=n(90531),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{(o=n(33971)(Function.call,n(22682).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},1123:(e,t,n)=>{var o=n(21672).f,r=n(43066),i=n(15413)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},36211:(e,t,n)=>{var o=n(7421)("keys"),r=n(93108);e.exports=function(e){return o[e]||(o[e]=r(e))}},7421:(e,t,n)=>{var o=n(6791),r=n(56903),i="__core-js_shared__",a=r[i]||(r[i]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:n(98849)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},29491:(e,t,n)=>{var o=n(43570),r=n(54947);e.exports=function(e){return function(t,n){var i,a,l=String(r(t)),p=o(n),s=l.length;return p<0||p>=s?e?"":void 0:(i=l.charCodeAt(p))<55296||i>56319||p+1===s||(a=l.charCodeAt(p+1))<56320||a>57343?e?l.charAt(p):i:e?l.slice(p,p+2):a-56320+(i-55296<<10)+65536}}},8830:(e,t,n)=>{var o=n(43570),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=o(e))<0?r(e+t,0):i(e,t)}},43570:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},69204:(e,t,n)=>{var o=n(63278),r=n(54947);e.exports=function(e){return o(r(e))}},9250:(e,t,n)=>{var o=n(43570),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},64873:(e,t,n)=>{var o=n(54947);e.exports=function(e){return Object(o(e))}},78381:(e,t,n)=>{var o=n(90326);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},93108:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},62613:(e,t,n)=>{var o=n(56903),r=n(6791),i=n(98849),a=n(1275),l=n(21672).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:a.f(e)})}},1275:(e,t,n)=>{t.f=n(15413)},15413:(e,t,n)=>{var o=n(7421)("wks"),r=n(93108),i=n(56903).Symbol,a="function"==typeof i;(e.exports=function(e){return o[e]||(o[e]=a&&i[e]||(a?i:r)("Symbol."+e))}).store=o},45270:(e,t,n)=>{"use strict";var o=n(64233),r=n(35945),i=n(52833),a=n(69204);e.exports=n(52500)(Array,"Array",(function(e,t){this._t=a(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},79115:(e,t,n)=>{var o=n(19786);o(o.S+o.F,"Object",{assign:n(99369)})},53742:(e,t,n)=>{var o=n(19786);o(o.S,"Object",{create:n(67780)})},82919:(e,t,n)=>{var o=n(19786);o(o.S+o.F*!n(75872),"Object",{defineProperty:n(21672).f})},44389:(e,t,n)=>{var o=n(19786);o(o.S,"Object",{setPrototypeOf:n(10485).set})},44345:()=>{},78750:(e,t,n)=>{"use strict";var o=n(29491)(!0);n(52500)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=o(t,n),this._i+=e.length,{value:e,done:!1})}))},28957:(e,t,n)=>{"use strict";var o=n(56903),r=n(43066),i=n(75872),a=n(19786),l=n(83070),p=n(83281).KEY,s=n(82451),c=n(7421),d=n(1123),u=n(93108),h=n(15413),g=n(1275),f=n(62613),m=n(76358),x=n(1084),v=n(90531),b=n(90326),y=n(64873),w=n(69204),_=n(78381),k=n(15495),M=n(67780),S=n(37106),E=n(22682),C=n(14259),O=n(21672),j=n(64796),T=E.f,P=O.f,D=S.f,N=o.Symbol,L=o.JSON,z=L&&L.stringify,A="prototype",I=h("_hidden"),R=h("toPrimitive"),H={}.propertyIsEnumerable,F=c("symbol-registry"),W=c("symbols"),V=c("op-symbols"),Y=Object[A],U="function"==typeof N&&!!C.f,B=o.QObject,$=!B||!B[A]||!B[A].findChild,G=i&&s((function(){return 7!=M(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(e,t,n){var o=T(Y,t);o&&delete Y[t],P(e,t,n),o&&e!==Y&&P(Y,t,o)}:P,Z=function(e){var t=W[e]=M(N[A]);return t._k=e,t},q=U&&"symbol"==typeof N.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof N},Q=function(e,t,n){return e===Y&&Q(V,t,n),v(e),t=_(t,!0),v(n),r(W,t)?(n.enumerable?(r(e,I)&&e[I][t]&&(e[I][t]=!1),n=M(n,{enumerable:k(0,!1)})):(r(e,I)||P(e,I,k(1,{})),e[I][t]=!0),G(e,t,n)):P(e,t,n)},X=function(e,t){v(e);for(var n,o=m(t=w(t)),r=0,i=o.length;i>r;)Q(e,n=o[r++],t[n]);return e},K=function(e){var t=H.call(this,e=_(e,!0));return!(this===Y&&r(W,e)&&!r(V,e))&&(!(t||!r(this,e)||!r(W,e)||r(this,I)&&this[I][e])||t)},J=function(e,t){if(e=w(e),t=_(t,!0),e!==Y||!r(W,t)||r(V,t)){var n=T(e,t);return!n||!r(W,t)||r(e,I)&&e[I][t]||(n.enumerable=!0),n}},ee=function(e){for(var t,n=D(w(e)),o=[],i=0;n.length>i;)r(W,t=n[i++])||t==I||t==p||o.push(t);return o},te=function(e){for(var t,n=e===Y,o=D(n?V:w(e)),i=[],a=0;o.length>a;)!r(W,t=o[a++])||n&&!r(Y,t)||i.push(W[t]);return i};U||(l((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var e=u(arguments.length>0?arguments[0]:void 0),t=function(n){this===Y&&t.call(V,n),r(this,I)&&r(this[I],e)&&(this[I][e]=!1),G(this,e,k(1,n))};return i&&$&&G(Y,e,{configurable:!0,set:t}),Z(e)})[A],"toString",(function(){return this._k})),E.f=J,O.f=Q,n(79032).f=S.f=ee,n(98936).f=K,C.f=te,i&&!n(98849)&&l(Y,"propertyIsEnumerable",K,!0),g.f=function(e){return Z(h(e))}),a(a.G+a.W+a.F*!U,{Symbol:N});for(var ne="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),oe=0;ne.length>oe;)h(ne[oe++]);for(var re=j(h.store),ie=0;re.length>ie;)f(re[ie++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return r(F,e+="")?F[e]:F[e]=N(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){$=!0},useSimple:function(){$=!1}}),a(a.S+a.F*!U,"Object",{create:function(e,t){return void 0===t?M(e):X(M(e),t)},defineProperty:Q,defineProperties:X,getOwnPropertyDescriptor:J,getOwnPropertyNames:ee,getOwnPropertySymbols:te});var ae=s((function(){C.f(1)}));a(a.S+a.F*ae,"Object",{getOwnPropertySymbols:function(e){return C.f(y(e))}}),L&&a(a.S+a.F*(!U||s((function(){var e=N();return"[null]"!=z([e])||"{}"!=z({a:e})||"{}"!=z(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,o=[e],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=t=o[1],(b(t)||void 0!==e)&&!q(e))return x(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!q(t))return t}),o[1]=t,z.apply(L,o)}}),N[A][R]||n(14632)(N[A],R,N[A].valueOf),d(N,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},32469:(e,t,n)=>{n(62613)("asyncIterator")},75529:(e,t,n)=>{n(62613)("observable")},96653:(e,t,n)=>{n(45270);for(var o=n(56903),r=n(14632),i=n(52833),a=n(15413)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),p=0;p<l.length;p++){var s=l[p],c=o[s],d=c&&c.prototype;d&&!d[a]&&r(d,a,s),i[s]=i.Array}},30837:(e,t,n)=>{try{var o=n(69264)}catch(e){o=n(69264)}var r=/\s+/,i=Object.prototype.toString;function a(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}e.exports=function(e){return new a(e)},a.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~o(t,e)||t.push(e),this.el.className=t.join(" "),this},a.prototype.remove=function(e){if("[object RegExp]"==i.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=o(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},a.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},a.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},a.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(r);return""===e[0]&&e.shift(),e},a.prototype.has=a.prototype.contains=function(e){return this.list?this.list.contains(e):!!~o(this.array(),e)}},69264:e=>{e.exports=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},50411:(e,t,n)=>{var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},4146:(e,t,n)=>{"use strict";var o=n(44363),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function p(e){return o.isMemo(e)?a:l[e.$$typeof]||r}l[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[o.Memo]=a;var s=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(g){var r=h(n);r&&r!==g&&e(t,r,o)}var a=c(n);d&&(a=a.concat(d(n)));for(var l=p(t),f=p(n),m=0;m<a.length;++m){var x=a[m];if(!(i[x]||o&&o[x]||f&&f[x]||l&&l[x])){var v=u(n,x);try{s(t,x,v)}catch(e){}}}}return t}},45228:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),p=1;p<arguments.length;p++){for(var s in i=Object(arguments[p]))n.call(i,s)&&(l[s]=i[s]);if(t){a=t(i);for(var c=0;c<a.length;c++)o.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},13491:function(e){(function(){var t,n,o,r,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-i)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*process.uptime(),i=r-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},2694:(e,t,n)=>{"use strict";var o=n(6925);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5556:(e,t,n)=>{e.exports=n(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},93146:(e,t,n)=>{for(var o=n(13491),r="undefined"==typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",l=r["request"+a],p=r["cancel"+a]||r["cancelRequest"+a],s=0;!l&&s<i.length;s++)l=r[i[s]+"Request"+a],p=r[i[s]+"Cancel"+a]||r[i[s]+"CancelRequest"+a];if(!l||!p){var c=0,d=0,u=[],h=1e3/60;l=function(e){if(0===u.length){var t=o(),n=Math.max(0,h-(t-c));c=n+t,setTimeout((function(){var e=u.slice(0);u.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return u.push({handle:++d,callback:e,cancelled:!1}),d},p=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){p.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=p}},22799:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,g=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case c:case d:case i:case l:case a:case h:return e;default:switch(e=e&&e.$$typeof){case s:case u:case m:case f:case p:return e;default:return t}}case r:return t}}}function _(e){return w(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=p,t.Element=o,t.ForwardRef=u,t.Fragment=i,t.Lazy=m,t.Memo=f,t.Portal=r,t.Profiler=l,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(e){return _(e)||w(e)===c},t.isConcurrentMode=_,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===l||e===a||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===u||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y||e.$$typeof===x)},t.typeOf=w},44363:(e,t,n)=>{"use strict";e.exports=n(22799)},2833:e=>{e.exports=function(e,t,n,o){var r=n?n.call(o,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),p=0;p<i.length;p++){var s=i[p];if(!l(s))return!1;var c=e[s],d=t[s];if(!1===(r=n?n.call(o,c,d,s):void 0)||void 0===r&&c!==d)return!1}return!0}},46942:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),n.nc=void 0,(()=>{"use strict";const e=window.React;var t=n.n(e);const o=window.wp.element,r=window.wp.hooks;var i=function(e){return e.split(/ ?; ?/).reduce((function(e,t){var n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a}(t.split(/ ?: ?/),2),o=n[0],r=n[1];return o&&r&&(e[o.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(r))?r:Number(r)),e}),{})},a=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],l={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},p=function(){return p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.apply(this,arguments)},s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},c=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};function d(t,n){var o;if(void 0===n&&(n={}),!(t&&t instanceof Node))return null;var r,u=n.actions,h=void 0===u?[]:u,g=n.index,f=void 0===g?0:g,m=n.level,x=void 0===m?0:m,v=n.randomKey,b=t,y="".concat(x,"-").concat(f),w=[];if(v&&0===x&&(y="".concat(function(e){void 0===e&&(e=6);for(var t="",n=e;n>0;--n)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())];return t}(),"-").concat(y)),Array.isArray(h)&&h.forEach((function(e){e.condition(b,y,x)&&("function"==typeof e.pre&&((b=e.pre(b,y,x))instanceof Node||(b=t)),"function"==typeof e.post&&w.push(e.post(b,y,x)))})),w.length)return w;switch(b.nodeType){case 1:return e.createElement((r=b.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(r)?r:r.toLowerCase()),function(e,t){var n={key:t};if(e instanceof Element){var o=e.getAttribute("class");o&&(n.className=o),c([],s(e.attributes),!1).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=i(e.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[l[e.name]||e.name]=!0;break;default:n[l[e.name]||e.name]=e.value}}))}return n}(b,y),function(e,t,n){var o=c([],s(e),!1).map((function(e,o){return d(e,p(p({},n),{index:o,level:t+1}))})).filter(Boolean);return o.length?o:null}(b.childNodes,x,n));case 3:var _=(null===(o=b.nodeValue)||void 0===o?void 0:o.toString())||"";if(/^\s+$/.test(_)&&!/[\u00A0\u202F]/.test(_))return null;if(!b.parentNode)return _;var k=b.parentNode.nodeName.toLowerCase();return a.includes(k)?(/\S/.test(_)&&console.warn("A textNode is not allowed inside '".concat(k,"'. Your text \"").concat(_,'" will be ignored')),null):_;default:return null}}function u(e,t){return void 0===t&&(t={}),"string"==typeof e?function(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,o=void 0!==n&&n,r=t.selector,i=void 0===r?"body > *":r,a=t.type,l=void 0===a?"text/html":a;try{var p=(new DOMParser).parseFromString(e,l).querySelector(i);if(!(p instanceof Node))throw new TypeError("Error parsing input");return o?p:d(p,t)}catch(e){}return null}(e,t):e instanceof Node?d(e,t):null}var h=n(50411),g={IDLE:"idle",LOADING:"loading",LOADED:"loaded",FAILED:"failed",READY:"ready",UNSUPPORTED:"unsupported"};function f(){return h.canUseDOM}function m(e){return e[Math.floor(Math.random()*e.length)]}var x,v=(x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},x(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),b=function(){return b=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},b.apply(this,arguments)},y=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},w=Object.create(null),_=function(t){function n(e){var n=t.call(this,e)||this;return Object.defineProperty(n,"hash",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(n,"isActive",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(n,"isInitialized",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(n,"handleError",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=n.props.onError,o="Browser does not support SVG"===e.message?g.UNSUPPORTED:g.FAILED;n.isActive&&n.setState({status:o},(function(){"function"==typeof t&&t(e)}))}}),Object.defineProperty(n,"handleLoad",{enumerable:!0,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1),n.isActive&&n.setState({content:e,hasCache:t,status:g.LOADED},n.getElement)}}),Object.defineProperty(n,"request",{enumerable:!0,configurable:!0,writable:!0,value:function(){return e=n,t=void 0,r=function(){var e,t,n,o,r,i,a,l,p,s,c,d;return function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(p){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,o=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){a.label=l[1];break}if(6===l[0]&&a.label<r[1]){a.label=r[1],r=l;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(l);break}r[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],o=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,p])}}}(this,(function(u){switch(u.label){case 0:e=this.props,t=e.cacheRequests,n=e.fetchOptions,o=e.src,t&&(w[o]={content:"",status:g.LOADING}),u.label=1;case 1:return u.trys.push([1,4,,5]),[4,fetch(o,n)];case 2:if(r=u.sent(),i=r.headers.get("content-type"),a=y((i||"").split(/ ?; ?/),1),l=a[0],r.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((function(e){return l.includes(e)})))throw new Error("Content type isn't valid: ".concat(l));return[4,r.text()];case 3:return p=u.sent(),s=this.props.src,o!==s?(w[o].status===g.LOADING&&delete w[o],[2]):(this.handleLoad(p),t&&(d=w[o])&&(d.content=p,d.status=g.LOADED),[3,5]);case 4:return c=u.sent(),this.handleError(c),t&&(d=w[o])&&delete w[o],[3,5];case 5:return[2]}}))},new((o=void 0)||(o=Promise))((function(n,i){function a(e){try{p(r.next(e))}catch(e){i(e)}}function l(e){try{p(r.throw(e))}catch(e){i(e)}}function p(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,l)}p((r=r.apply(e,t||[])).next())}));var e,t,o,r}}),n.state={content:"",element:null,hasCache:!!e.cacheRequests&&!!w[e.src],status:g.IDLE},n.hash=e.uniqueHash||function(){for(var e="abcdefghijklmnopqrstuvwxyz",t="".concat(e).concat(e.toUpperCase()).concat("1234567890"),n="",o=0;o<8;o++)n+=m(t);return n}(),n}return v(n,t),Object.defineProperty(n.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(this.isActive=!0,f()&&!this.isInitialized){var e=this.state.status,t=this.props.src;try{if(e===g.IDLE){if(!function(){if(!document)return!1;var e=document.createElement("div");e.innerHTML="<svg />";var t=e.firstChild;return!!t&&"http://www.w3.org/2000/svg"===t.namespaceURI}()||"undefined"==typeof window||null===window)throw new Error("Browser does not support SVG");if(!t)throw new Error("Missing src");this.load()}}catch(e){this.handleError(e)}this.isInitialized=!0}}}),Object.defineProperty(n.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(f()){var n=this.state,o=n.hasCache,r=n.status,i=this.props,a=i.onLoad,l=i.src;if(t.status!==g.READY&&r===g.READY&&a&&a(l,o),e.src!==l){if(!l)return void this.handleError(new Error("Missing src"));this.load()}}}}),Object.defineProperty(n.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.isActive=!1}}),Object.defineProperty(n.prototype,"getElement",{enumerable:!1,configurable:!0,writable:!0,value:function(){try{var t=u(this.getNode());if(!t||!e.isValidElement(t))throw new Error("Could not convert the src to a React element");this.setState({element:t,status:g.READY})}catch(e){this.handleError(new Error(e.message))}}}),Object.defineProperty(n.prototype,"getNode",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.description,n=e.title;try{var o=u(this.processSVG(),{nodeOnly:!0});if(!(o&&o instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var r=this.updateSVGAttributes(o);if(t){var i=r.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var a=document.createElementNS("http://www.w3.org/2000/svg","desc");a.innerHTML=t,r.prepend(a)}if(void 0!==n){var l=r.querySelector("title");if(l&&l.parentNode&&l.parentNode.removeChild(l),n){var p=document.createElementNS("http://www.w3.org/2000/svg","title");p.innerHTML=n,r.prepend(p)}}return r}catch(e){return this.handleError(e)}}}),Object.defineProperty(n.prototype,"load",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;this.isActive&&this.setState({content:"",element:null,hasCache:!1,status:g.LOADING},(function(){var t=e.props,n=t.cacheRequests,o=t.src,r=n&&w[o];if(r&&r.status===g.LOADED)e.handleLoad(r.content,!0);else{var i,a=o.match(/^data:image\/svg[^,]*?(;base64)?,(.*)/u);a?i=a[1]?window.atob(a[2]):decodeURIComponent(a[2]):o.includes("<svg")&&(i=o),i?e.handleLoad(i):e.request()}}))}}),Object.defineProperty(n.prototype,"processSVG",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e}}),Object.defineProperty(n.prototype,"updateSVGAttributes",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,n=this.props,o=n.baseURL,r=void 0===o?"":o,i=n.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],l=["href","xlink:href"];return i?(function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}([],y(e.children),!1).forEach((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes).map((function(e){var n=e,o=e.value.match(/url\((.*?)\)/);return o&&o[1]&&(n.value=e.value.replace(o[0],"url(".concat(r).concat(o[1],"__").concat(t.hash,")"))),n}));a.forEach((function(e){var o,r,i=n.find((function(t){return t.name===e}));i&&(o=e,r=i.value,!l.includes(o)||!r||r.includes("#"))&&(i.value="".concat(i.value,"__").concat(t.hash))}))}return e.children.length?t.updateSVGAttributes(e):e})),e):e}}),Object.defineProperty(n.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var t=this.state,n=t.element,o=t.status,r=this.props,i=r.children,a=void 0===i?null:i,l=r.innerRef,p=r.loader,s=void 0===p?null:p,c=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o={};for(var r in e)({}).hasOwnProperty.call(e,r)&&(t.includes(r)||(o[r]=e[r]));return o}(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return f()?n?e.cloneElement(n,b({ref:l},c)):[g.UNSUPPORTED,g.FAILED].includes(o)?a:s:s}}),Object.defineProperty(n,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{cacheRequests:!0,uniquifyIDs:!1}}),n}(e.PureComponent);const k=_;window.wp.blockEditor;var M=function(){return M=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},M.apply(this,arguments)};function S(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var E=n(2833),C=n.n(E),O="-ms-",j="-moz-",T="-webkit-",P="comm",D="rule",N="decl",L="@import",z="@keyframes",A="@layer",I=Math.abs,R=String.fromCharCode,H=Object.assign;function F(e){return e.trim()}function W(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Y(e,t,n){return e.indexOf(t,n)}function U(e,t){return 0|e.charCodeAt(t)}function B(e,t,n){return e.slice(t,n)}function $(e){return e.length}function G(e){return e.length}function Z(e,t){return t.push(e),e}function q(e,t){return e.filter((function(e){return!W(e,t)}))}var Q=1,X=1,K=0,J=0,ee=0,te="";function ne(e,t,n,o,r,i,a,l){return{value:e,root:t,parent:n,type:o,props:r,children:i,line:Q,column:X,length:a,return:"",siblings:l}}function oe(e,t){return H(ne("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function re(e){for(;e.root;)e=oe(e.root,{children:[e]});Z(e,e.siblings)}function ie(){return ee=J>0?U(te,--J):0,X--,10===ee&&(X=1,Q--),ee}function ae(){return ee=J<K?U(te,J++):0,X++,10===ee&&(X=1,Q++),ee}function le(){return U(te,J)}function pe(){return J}function se(e,t){return B(te,e,t)}function ce(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function de(e){return F(se(J-1,ge(91===e?e+2:40===e?e+1:e)))}function ue(e){for(;(ee=le())&&ee<33;)ae();return ce(e)>2||ce(ee)>3?"":" "}function he(e,t){for(;--t&&ae()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return se(e,pe()+(t<6&&32==le()&&32==ae()))}function ge(e){for(;ae();)switch(ee){case e:return J;case 34:case 39:34!==e&&39!==e&&ge(ee);break;case 40:41===e&&ge(e);break;case 92:ae()}return J}function fe(e,t){for(;ae()&&e+ee!==57&&(e+ee!==84||47!==le()););return"/*"+se(t,J-1)+"*"+R(47===e?e:ae())}function me(e){for(;!ce(le());)ae();return se(e,J)}function xe(e,t){for(var n="",o=0;o<e.length;o++)n+=t(e[o],o,e,t)||"";return n}function ve(e,t,n,o){switch(e.type){case A:if(e.children.length)break;case L:case N:return e.return=e.return||e.value;case P:return"";case z:return e.return=e.value+"{"+xe(e.children,o)+"}";case D:if(!$(e.value=e.props.join(",")))return""}return $(n=xe(e.children,o))?e.return=e.value+"{"+n+"}":""}function be(e,t,n){switch(function(e,t){return 45^U(e,0)?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}(e,t)){case 5103:return T+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return T+e+e;case 4789:return j+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return T+e+j+e+O+e+e;case 5936:switch(U(e,t+11)){case 114:return T+e+O+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return T+e+O+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return T+e+O+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return T+e+O+e+e;case 6165:return T+e+O+"flex-"+e+e;case 5187:return T+e+V(e,/(\w+).+(:[^]+)/,T+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return T+e+O+"flex-item-"+V(e,/flex-|-self/g,"")+(W(e,/flex-|baseline/)?"":O+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return T+e+O+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return T+e+O+V(e,"shrink","negative")+e;case 5292:return T+e+O+V(e,"basis","preferred-size")+e;case 6060:return T+"box-"+V(e,"-grow","")+T+e+O+V(e,"grow","positive")+e;case 4554:return T+V(e,/([^-])(transform)/g,"$1"+T+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,T+"$1"),/(image-set)/,T+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,T+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+T+e+e;case 4200:if(!W(e,/flex-|baseline/))return O+"grid-column-align"+B(e,t)+e;break;case 2592:case 3360:return O+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,W(e.props,/grid-\w+-end/)}))?~Y(e+(n=n[t].value),"span",0)?e:O+V(e,"-start","")+e+O+"grid-row-span:"+(~Y(n,"span",0)?W(n,/\d+/):+W(n,/\d+/)-+W(e,/\d+/))+";":O+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return W(e.props,/grid-\w+-start/)}))?e:O+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,T+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(e)-1-t>6)switch(U(e,t+1)){case 109:if(45!==U(e,t+4))break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+T+"$2-$3$1"+j+(108==U(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Y(e,"stretch",0)?be(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,o,r,i,a,l){return O+n+":"+o+l+(r?O+n+"-span:"+(i?a:+a-+o)+l:"")+e}));case 4949:if(121===U(e,t+6))return V(e,":",":"+T)+e;break;case 6444:switch(U(e,45===U(e,14)?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+T+(45===U(e,14)?"inline-":"")+"box$3$1"+T+"$2$3$1"+O+"$2box$3")+e;case 100:return V(e,":",":"+O)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function ye(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case N:return void(e.return=be(e.value,e.length,n));case z:return xe([oe(e,{value:V(e.value,"@","@"+T)})],o);case D:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(W(t,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":re(oe(e,{props:[V(t,/:(read-\w+)/,":"+j+"$1")]})),re(oe(e,{props:[t]})),H(e,{props:q(n,o)});break;case"::placeholder":re(oe(e,{props:[V(t,/:(plac\w+)/,":"+T+"input-$1")]})),re(oe(e,{props:[V(t,/:(plac\w+)/,":"+j+"$1")]})),re(oe(e,{props:[V(t,/:(plac\w+)/,O+"input-$1")]})),re(oe(e,{props:[t]})),H(e,{props:q(n,o)})}return""}))}}function we(e){return function(e){return te="",e}(_e("",null,null,null,[""],e=function(e){return Q=X=1,K=$(te=e),J=0,[]}(e),0,[0],e))}function _e(e,t,n,o,r,i,a,l,p){for(var s=0,c=0,d=a,u=0,h=0,g=0,f=1,m=1,x=1,v=0,b="",y=r,w=i,_=o,k=b;m;)switch(g=v,v=ae()){case 40:if(108!=g&&58==U(k,d-1)){-1!=Y(k+=V(de(v),"&","&\f"),"&\f",I(s?l[s-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=de(v);break;case 9:case 10:case 13:case 32:k+=ue(g);break;case 92:k+=he(pe()-1,7);continue;case 47:switch(le()){case 42:case 47:Z(Me(fe(ae(),pe()),t,n,p),p);break;default:k+="/"}break;case 123*f:l[s++]=$(k)*x;case 125*f:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+c:-1==x&&(k=V(k,/\f/g,"")),h>0&&$(k)-d&&Z(h>32?Se(k+";",o,n,d-1,p):Se(V(k," ","")+";",o,n,d-2,p),p);break;case 59:k+=";";default:if(Z(_=ke(k,t,n,s,c,r,l,b,y=[],w=[],d,i),i),123===v)if(0===c)_e(k,t,_,_,y,i,d,l,w);else switch(99===u&&110===U(k,3)?100:u){case 100:case 108:case 109:case 115:_e(e,_,_,o&&Z(ke(e,_,_,0,0,r,l,b,r,y=[],d,w),w),r,w,d,l,o?y:w);break;default:_e(k,_,_,_,[""],w,0,l,w)}}s=c=h=0,f=x=1,b=k="",d=a;break;case 58:d=1+$(k),h=g;default:if(f<1)if(123==v)--f;else if(125==v&&0==f++&&125==ie())continue;switch(k+=R(v),v*f){case 38:x=c>0?1:(k+="\f",-1);break;case 44:l[s++]=($(k)-1)*x,x=1;break;case 64:45===le()&&(k+=de(ae())),u=le(),c=d=$(b=k+=me(pe())),v++;break;case 45:45===g&&2==$(k)&&(f=0)}}return i}function ke(e,t,n,o,r,i,a,l,p,s,c,d){for(var u=r-1,h=0===r?i:[""],g=G(h),f=0,m=0,x=0;f<o;++f)for(var v=0,b=B(e,u+1,u=I(m=a[f])),y=e;v<g;++v)(y=F(m>0?h[v]+" "+b:V(b,/&\f/g,h[v])))&&(p[x++]=y);return ne(e,t,n,0===r?D:l,p,s,c,d)}function Me(e,t,n,o){return ne(e,t,n,P,R(ee),B(e,2,-2),0,o)}function Se(e,t,n,o,r){return ne(e,t,n,N,B(e,0,o),B(e,o+1,-1),o,r)}var Ee={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Oe="active",je="data-styled-version",Te="6.1.12",Pe="/*!sc*/\n",De="undefined"!=typeof window&&"HTMLElement"in window,Ne=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),Le=(new Set,Object.freeze([])),ze=Object.freeze({});var Ae=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ie=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function He(e){return e.replace(Ie,"-").replace(Re,"")}var Fe=/(a)(d)/gi,We=52,Ve=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ye(e){var t,n="";for(t=Math.abs(e);t>We;t=t/We|0)n=Ve(t%We)+n;return(Ve(t%We)+n).replace(Fe,"$1-$2")}var Ue,Be=5381,$e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ge=function(e){return $e(Be,e)};function Ze(e){return"string"==typeof e&&!0}var qe="function"==typeof Symbol&&Symbol.for,Qe=qe?Symbol.for("react.memo"):60115,Xe=qe?Symbol.for("react.forward_ref"):60112,Ke={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Je={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},et={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tt=((Ue={})[Xe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ue[Qe]=et,Ue);function nt(e){return("type"in(t=e)&&t.type.$$typeof)===Qe?et:"$$typeof"in e?tt[e.$$typeof]:Ke;var t}var ot=Object.defineProperty,rt=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,at=Object.getOwnPropertyDescriptor,lt=Object.getPrototypeOf,pt=Object.prototype;function st(e,t,n){if("string"!=typeof t){if(pt){var o=lt(t);o&&o!==pt&&st(e,o,n)}var r=rt(t);it&&(r=r.concat(it(t)));for(var i=nt(e),a=nt(t),l=0;l<r.length;++l){var p=r[l];if(!(p in Je||n&&n[p]||a&&p in a||i&&p in i)){var s=at(t,p);try{ot(e,p,s)}catch(e){}}}}return e}function ct(e){return"function"==typeof e}function dt(e){return"object"==typeof e&&"styledComponentId"in e}function ut(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ht(e,t){if(0===e.length)return"";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function gt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ft(e,t,n){if(void 0===n&&(n=!1),!n&&!gt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=ft(e[o],t[o]);else if(gt(t))for(var o in t)e[o]=ft(e[o],t[o]);return e}function mt(e,t){Object.defineProperty(e,"toString",{value:t})}function xt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var vt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw xt(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var i=o;i<r;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,i=o;i<r;i++)t+="".concat(this.tag.getRule(i)).concat(Pe);return t},e}(),bt=new Map,yt=new Map,wt=1,_t=function(e){if(bt.has(e))return bt.get(e);for(;yt.has(wt);)wt++;var t=wt++;return bt.set(e,t),yt.set(t,e),t},kt=function(e,t){wt=t+1,bt.set(e,t),yt.set(t,e)},Mt="style[".concat(Ce,"][").concat(je,'="').concat(Te,'"]'),St=new RegExp("^".concat(Ce,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Et=function(e,t,n){for(var o,r=n.split(","),i=0,a=r.length;i<a;i++)(o=r[i])&&e.registerName(t,o)},Ct=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Pe),r=[],i=0,a=o.length;i<a;i++){var l=o[i].trim();if(l){var p=l.match(St);if(p){var s=0|parseInt(p[1],10),c=p[2];0!==s&&(kt(c,s),Et(e,c,p[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Ot=function(e){for(var t=document.querySelectorAll(Mt),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(Ce)!==Oe&&(Ct(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function jt(){return n.nc}var Tt=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Ce,"]")));return t[t.length-1]}(n),i=void 0!==r?r.nextSibling:null;o.setAttribute(Ce,Oe),o.setAttribute(je,Te);var a=jt();return a&&o.setAttribute("nonce",a),n.insertBefore(o,i),o},Pt=function(){function e(e){this.element=Tt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw xt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Dt=function(){function e(e){this.element=Tt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Nt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Lt=De,zt={isServer:!De,useCSSOMInjection:!Ne},At=function(){function e(e,t,n){void 0===e&&(e=ze),void 0===t&&(t={});var o=this;this.options=M(M({},zt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&De&&Lt&&(Lt=!1,Ot(this)),mt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return yt.get(e)}(n);if(void 0===r)return"continue";var i=e.names.get(r),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(Ce,".g").concat(n,'[id="').concat(r,'"]'),p="";void 0!==i&&i.forEach((function(e){e.length>0&&(p+="".concat(e,","))})),o+="".concat(a).concat(l,'{content:"').concat(p,'"}').concat(Pe)},i=0;i<n;i++)r(i);return o}(o)}))}return e.registerId=function(e){return _t(e)},e.prototype.rehydrate=function(){!this.server&&De&&Ot(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(M(M({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Nt(n):t?new Pt(n):new Dt(n)}(this.options),new vt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(_t(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(_t(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(_t(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),It=/&/g,Rt=/^\s*\/\/.*$/gm;function Ht(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ht(e.children,t)),e}))}function Ft(e){var t,n,o,r=void 0===e?ze:e,i=r.options,a=void 0===i?ze:i,l=r.plugins,p=void 0===l?Le:l,s=function(e,o,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},c=p.slice();c.push((function(e){e.type===D&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(It,n).replace(o,s))})),a.prefix&&c.push(ye),c.push(ve);var d=function(e,r,i,l){void 0===r&&(r=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var p=e.replace(Rt,""),s=we(i||r?"".concat(i," ").concat(r," { ").concat(p," }"):p);a.namespace&&(s=Ht(s,a.namespace));var d,u,h,g=[];return xe(s,(d=c.concat((h=function(e){return g.push(e)},function(e){e.root||(e=e.return)&&h(e)})),u=G(d),function(e,t,n,o){for(var r="",i=0;i<u;i++)r+=d[i](e,t,n,o)||"";return r})),g};return d.hash=p.length?p.reduce((function(e,t){return t.name||xt(15),$e(e,t.name)}),Be).toString():"",d}var Wt=new At,Vt=Ft(),Yt=t().createContext({shouldForwardProp:void 0,styleSheet:Wt,stylis:Vt}),Ut=(Yt.Consumer,t().createContext(void 0));function Bt(){return(0,e.useContext)(Yt)}function $t(n){var o=(0,e.useState)(n.stylisPlugins),r=o[0],i=o[1],a=Bt().styleSheet,l=(0,e.useMemo)((function(){var e=a;return n.sheet?e=n.sheet:n.target&&(e=e.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[n.disableCSSOMInjection,n.sheet,n.target,a]),p=(0,e.useMemo)((function(){return Ft({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:r})}),[n.enableVendorPrefixes,n.namespace,r]);(0,e.useEffect)((function(){C()(r,n.stylisPlugins)||i(n.stylisPlugins)}),[n.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:l,stylis:p}}),[n.shouldForwardProp,l,p]);return t().createElement(Yt.Provider,{value:s},t().createElement(Ut.Provider,{value:p},n.children))}var Gt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Vt);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,mt(this,(function(){throw xt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Vt),this.name+e.hash},e}(),Zt=function(e){return e>="A"&&e<="Z"};function qt(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;Zt(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Qt=function(e){return null==e||!1===e||""===e},Xt=function(e){var t,n,o=[];for(var r in e){var i=e[r];e.hasOwnProperty(r)&&!Qt(i)&&(Array.isArray(i)&&i.isCss||ct(i)?o.push("".concat(qt(r),":"),i,";"):gt(i)?o.push.apply(o,S(S(["".concat(r," {")],Xt(i),!1),["}"],!1)):o.push("".concat(qt(r),": ").concat((t=r,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Ee||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function Kt(e,t,n,o){return Qt(e)?[]:dt(e)?[".".concat(e.styledComponentId)]:ct(e)?!ct(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:Kt(e(t),t,n,o):e instanceof Gt?n?(e.inject(n,o),[e.getName(o)]):[e]:gt(e)?Xt(e):Array.isArray(e)?Array.prototype.concat.apply(Le,e.map((function(e){return Kt(e,t,n,o)}))):[e.toString()];var r}function Jt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ct(n)&&!dt(n))return!1}return!0}var en=Ge(Te),tn=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Jt(e),this.componentId=t,this.baseHash=$e(en,t),this.baseStyle=n,At.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ut(o,this.staticRulesId);else{var r=ht(Kt(this.rules,e,t,n)),i=Ye($e(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(r,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}o=ut(o,i),this.staticRulesId=i}else{for(var l=$e(this.baseHash,n.hash),p="",s=0;s<this.rules.length;s++){var c=this.rules[s];if("string"==typeof c)p+=c;else if(c){var d=ht(Kt(c,e,t,n));l=$e(l,d+s),p+=d}}if(p){var u=Ye(l>>>0);t.hasNameForId(this.componentId,u)||t.insertRules(this.componentId,u,n(p,".".concat(u),void 0,this.componentId)),o=ut(o,u)}}return o},e}(),nn=t().createContext(void 0);nn.Consumer;var on={};function rn(n,o,r){var i=dt(n),a=n,l=!Ze(n),p=o.attrs,s=void 0===p?Le:p,c=o.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":He(e);on[n]=(on[n]||0)+1;var o="".concat(n,"-").concat(function(e){return Ye(Ge(e)>>>0)}(Te+n+on[n]));return t?"".concat(t,"-").concat(o):o}(o.displayName,o.parentComponentId):c,u=o.displayName,h=void 0===u?function(e){return Ze(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(n):u,g=o.displayName&&o.componentId?"".concat(He(o.displayName),"-").concat(o.componentId):o.componentId||d,f=i&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=o.shouldForwardProp;if(i&&a.shouldForwardProp){var x=a.shouldForwardProp;if(o.shouldForwardProp){var v=o.shouldForwardProp;m=function(e,t){return x(e,t)&&v(e,t)}}else m=x}var b=new tn(r,g,i?a.componentStyle:void 0);function y(n,o){return function(n,o,r){var i=n.attrs,a=n.componentStyle,l=n.defaultProps,p=n.foldedComponentIds,s=n.styledComponentId,c=n.target,d=t().useContext(nn),u=Bt(),h=n.shouldForwardProp||u.shouldForwardProp,g=function(e,t,n){return void 0===n&&(n=ze),e.theme!==n.theme&&e.theme||t||n.theme}(o,d,l)||ze,f=function(e,t,n){for(var o,r=M(M({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=ct(o=e[i])?o(r):o;for(var l in a)r[l]="className"===l?ut(r[l],a[l]):"style"===l?M(M({},r[l]),a[l]):a[l]}return t.className&&(r.className=ut(r.className,t.className)),r}(i,o,g),m=f.as||c,x={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===g||("forwardedAs"===v?x.as=f.forwardedAs:h&&!h(v,m)||(x[v]=f[v]));var b=function(e,t){var n=Bt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),y=ut(p,s);return b&&(y+=" "+b),f.className&&(y+=" "+f.className),x[Ze(m)&&!Ae.has(m)?"class":"className"]=y,x.ref=r,(0,e.createElement)(m,x)}(w,n,o)}y.displayName=h;var w=t().forwardRef(y);return w.attrs=f,w.componentStyle=b,w.displayName=h,w.shouldForwardProp=m,w.foldedComponentIds=i?ut(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=g,w.target=i?a.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)ft(e,r[o],!0);return e}({},a.defaultProps,e):e}}),mt(w,(function(){return".".concat(w.styledComponentId)})),l&&st(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function an(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}new Set;var ln=function(e){return Object.assign(e,{isCss:!0})};function pn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ct(e)||gt(e))return ln(Kt(an(Le,S([e],t,!0))));var o=e;return 0===t.length&&1===o.length&&"string"==typeof o[0]?Kt(o):ln(Kt(an(o,t)))}function sn(e,t,n){if(void 0===n&&(n=ze),!t)throw xt(1,t);var o=function(o){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return e(t,n,pn.apply(void 0,S([o],r,!1)))};return o.attrs=function(o){return sn(e,t,M(M({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return sn(e,t,M(M({},n),o))},o}var cn=function(e){return sn(rn,e)},dn=cn;Ae.forEach((function(e){dn[e]=cn(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Jt(e),At.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,o){var r=o(ht(Kt(this.rules,t,n,o)),""),i=this.componentId+e;n.insertRules(i,i,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,o){e>2&&At.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=jt(),o=ht([n&&'nonce="'.concat(n,'"'),"".concat(Ce,'="true"'),"".concat(je,'="').concat(Te,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw xt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw xt(2);var o=e.instance.toString();if(!o)return[];var r=((n={})[Ce]="",n[je]=Te,n.dangerouslySetInnerHTML={__html:o},n),i=jt();return i&&(r.nonce=i),[t().createElement("style",M({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new At({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw xt(2);return t().createElement($t,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw xt(3)}}(),"__sc-".concat(Ce,"__"),dn.div`
    flex: 1 1 0%;
    overflow: auto;
    margin-top: 0;
    position: relative;
    @media only screen and (max-width: 768px){
        border-radius: 0 0 20px 20px;
    }
    @media only screen and (max-width: 575px){
        &.helpgent-element-element-wrapper--end + .helpgent-form-bottom-extras{
            padding-top: 0;
        }
    }
    .helpgent-element-element__user-validation{
        margin: -15px 40px 20px;
    }
    &.helpgent-client{
        .helpgent-element-element{
            .helpgent-element-element__uploader,
            input,
            textarea,
            input:not(.helpgent-form-group__element--date){
                pointer-events: all;
            }
        }
        .helpgent-open-ended-element-types .helpgent-open-ended-btn{
            pointer-events: all;
        }
        .helpgent-select-picture-single__caption{
            cursor: pointer;
        }
        .helpgent-google-recaptcha{
            pointer-events: all;
        }
    }
    .helpgent-gdpr-element{
        max-width: 360px;
        .helpgent-checkbox{
            align-items: flex-start;
            label{
                position: relative;
                font-size: 14px;
                font-weight: 500;
                margin-left: 2px;
                line-height: 1.58;
                user-select: none;
                top: -2px;
                white-space: pre-line;
                word-wrap: break-word;
                word-break: break-word;
                cursor: pointer;
                color: var(--helpgent-options-color);
            }
            input{
                cursor: pointer;
            }
            input[type=checkbox]:checked + label svg{
                transform: translateY(0);
                top: 7px;
                inset-inline-start: -15px;
            }
        }
    }
    .helpgent-gdpr-learn-more{
        padding-left: 32px;
        margin-top: 16px;
        span{
            font-size: 14px;
            font-weight: 400;
            white-space: pre-line;
            word-wrap: break-word;
            word-break: break-word;
            color: var(--helpgent-options-color);
        }
        a{
            text-decoration: none;
            color: var(--helpgent-color-info);
        }
    }
    &.helpgent-element-element-wrapper--gdpr{
        .helpgent-validate-danger{
            padding-left: 32px;
        }
    }
    &.helpgent-element-element-wrapper--picture_select{
        .helpgent-element-element__action{
            .helpgent-form-group{
                margin-bottom: 0;
            }
        }
    }
    &.helpgent-element-element-wrapper--open_ended{
        margin-top: 0 !important;
        &.helpgent-element-element-wrapper--open_ended-media_text,
        &.helpgent-element-element-wrapper--open_ended-video,
        &.helpgent-element-element-wrapper--open_ended-voice,
        &.helpgent-element-element-wrapper--open_ended-screen{
            background-color: #ffffff;
        }
        .helpgent-video-recorder{
            &::before{
                border-radius: 0 !important;
            }
            video{
                border-radius: 0 !important;
            }
        }
        .helpgent-screen-header,
        .helpgent-text-screen-header{
            margin-top: 20px;
            z-index: 1;
        }
    }

    &.helpgent-element-element-wrapper--address,
    &.helpgent-element-element-wrapper--contact_info{
        .helpgent-form-group{
            margin-bottom: 24px;
            .helpgent-form-group__label{
                color: var(--helpgent-options-color);
                .helpgent-required-sign{
                    color: var(--helpgent-options-color);
                }
            }
        }
        .helpgent-form-group--last{
            margin-bottom: 0;
            + .helpgent-form-group{
                margin-top: 24px;
            }
        }
    }
    .helpgent-google-recaptcha{
        padding: 0 30px;
        pointer-events: none;
        .helpgent-loading-spinner{
            width: 100px;
            height: 100px;
            margin-top: 5px;
            position: relative;
            .components-spinner{
                top: 0;
                inset-inline-start: 0%;
                transform: translate(0%,0%);
            }
        }
    }
    .helpgent-element-element{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        padding: 25px 0 85px 0;
        min-height: 100%;
        @media only screen and (max-width: 991px){
            padding: 25px 0;
        }
        @media only screen and (max-width: 575px){
            padding: 25px 0;
        }
        .helpgent-element-element__label-text{
            text-align: left;
        }
        &.helpgent-element-textField{
            .helpgent-form-group{
                position: relative;
                &:not(:last-child){
                    margin-bottom: 16px;
                }
                .helpgent-file-upload{
                    input{
                        display: none;
                    }
                }
                .helpgent-file-uploader{
                    font-size: 13px;
                    font-weight: 500;
                    width: fit-content;
                    border-radius: var(--helpgent-input-radius);
                    border: 0px none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    min-height: 36px;
                    padding: 2px 10px;
                    cursor: pointer;
                    background-color: var(--helpgent-color-bg-gray);
                    gap: 8px;
                }
            }
            .helpgent-btn-next{
                justify-content: center;
                margin-bottom: 30px;
                @media only screen and (max-width: 575px){
                    margin-bottom: 0;
                }
            }
        }
        &.helpgent-element--end{
            align-items: center;
            max-width: 600px;
            margin: 0 auto;
            .block-editor-rich-text__editable{
                text-align: center;
            }
            [data-rich-text-placeholder]:after{
                text-align: center;
            }
            .helpgent-element-element__label{
                margin-bottom: 15px;
            }
            .helpgent-element-element__text{
                width: 100%;
                box-sizing: border-box;
                margin-bottom: 0;
            }
            .helpgent-element-element__action{
                margin-top: 30px;
                width: 100%;
                display: flex;
                justify-content: center;
                box-sizing: border-box;
            }
            .helpgent-btn-external{
                padding: var(--helpgent-end-element-btn-padding);
            }
            .helpgent-element-element__label-text{
                text-align: center;
                line-height: 1.2;
                font-size: var(--helpgent-special-label-font-size);
                p{
                    font-size: var(--helpgent-special-label-font-size);
                }
            }
            .helpgent-element-element__description-text{
                text-align: center;
                font-size: var(--helpgent-special-description-font-size);
                p{
                    font-size: var(--helpgent-special-description-font-size);
                }
            }
        }
        .helpgent-quotation-mark{
            display: inline-block;
            text-align: left;
            padding: 0 30px;
            margin: 0 0 15px;
            svg{
                path{
                    fill: var(--helpgent-element-icon-color);
                }
            }
        }
        input.components-form-toggle__input{
            pointer-events: all !important;
        }
        input:not(.helpgent-form-group__element--date),
        textarea,
        .helpgent-element-element__uploader{
            pointer-events: none;
        }
        .helpgent-uploaded-files{
            &:empty{
                display: none;
            }

            .helpgent-uploaded-file-container {
                margin-top: 10px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }

                .helpgent-status {
                    margin: 0;
                    padding: 8px 0;
                    font-size: 12px;
                    background: transparent;

                    &.--is-success,
                    &.--is-error {
                        background: transparent;
                    }

                    &.--is-success {
                        color: var(--helpgent-color-success);
                    }

                    &.--is-error {
                        color: var(--helpgent-color-danger);
                    }
                }
            }

            .helpgent-uploaded-file{
                background: var(--helpgent-color-bg-light);
                border-radius: var(--helpgent-large-component-radius);
                padding: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                position: relative;
                &.helpgent-uploaded-file--rejected {
                    opacity: 0.5;
                }
                .helpgent-uploaded-file-thumbnail{
                    line-height: 0;
                    min-width: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg{
                        width: 25px;
                        height: 25px;
                    }
                    img,
                    video{
                        width: 34px;
                        height: 34px;
                        object-fit: cover;
                        border-radius: 6px;
                    }
                }
                .helpgent-uploaded-file-meta{
                    flex: 1;
                    .helpgent-uploaded-file-meta-title{
                        word-wrap: break-word;
                        word-break: break-word;
                        font-size: 13px;
                        margin: 0 0 7px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        line-height: 1;
                        color: var(--helpgent-color-dark);
                        .helpgent-uploaded-file-meta-subtitle{
                            min-width: 60px;
                            display: block;
                            line-height: 1;
                        }
                    }
                    .helpgent-uploaded-file-meta-subtitle{
                        font-size: 10px;
                        color: var(--helpgent-color-light-gray);
                        margin: 0;
                        line-height: 1;
                        .helpgent-status{
                            display: block;
                            color: var(--helpgent-color-danger);
                            font-size: 11px;
                            padding: 0;
                            background: none;
                            margin: 5px 0 0;
                        }
                    }
                    .helpgent-upload-progress{
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        .helpgent-upload-progress-bar-wrap{
                            flex: 1;
                            height: 6px;
                            border-radius: 30px;
                            background: var(--helpgent-color-bg-deep);
                            position: relative;
                            .helpgent-upload-progress-bar{
                                position: absolute;
                                left: 0;
                                top: 0;
                                height: 100%;
                                background: var(--helpgent-color-primary);
                                border-radius: 30px;
                                transition: var(--helpgent-transition);
                            }
                        }
                        .helpgent-upload-progress-bar-label{
                            color: var(--helpgent-color-primary);
                            font-size: 10px;
                            font-weight: 500;
                        }
                        .helpgent-upload-progress-bar-action{
                            a{
                                line-height: 0;
                                display: block;
                            }
                            svg{
                                width: 10px;
                                height: 10px;
                                path{
                                    fill: var(--helpgent-color-gray);
                                }
                            }
                        }
                    }
                }
                .helpgent-uploaded-file-meta-status{
                    flex: 0 0 100%;
                    font-size: 11px;
                    color: var(--helpgent-color-danger);
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                }
                .helpgent-uploaded-file-action{
                    a{
                        width: 28px;
                        height: 28px;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #fff;
                        transition: var(--helpgent-transition);
                        text-decoration: none;
                        svg{
                            width: 10px;
                            height: 10px;
                            transition: var(--helpgent-transition);
                        }
                        &:hover{
                            background: var(--helpgent-color-danger);
                            svg path{
                                fill: #fff;
                            }
                        }
                    }
                    .helpgent-file-deleting{
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        border: 2px solid var(--helpgent-color-gray);
                        border-bottom: 2px solid transparent;
                        animation: helpgent-spin 2s linear infinite;
                        display: block;
                    }
                    @keyframes helpgent-spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                }
            }
        }

        &.helpgent-element-element--open-ended{
            .helpgent-element-element__text{
                align-self: flex-start;
                margin-bottom: 0;
                width: 100%;
                box-sizing: border-box;
                .helpgent-element-element__label{
                    margin-bottom: 4px;
                    .block-editor-rich-text__editable{
                        line-height: 1.5;
                    }
                    [data-rich-text-placeholder]{
                        &:after{
                            line-height: 1.5;
                            text-align: start;
                        }
                    }
                }
                @media only screen and (max-width: 400px){
                    padding: 0 15px;
                }
            }
            .helpgent-element-element__action{
                width: 100%;
                box-sizing: border-box;
                flex: 1;
                display: flex;
                align-items: center;
                @media only screen and (max-width: 575px){
                    margin-top: auto;
                    margin-bottom: 15px;
                }
                @media only screen and (max-width: 400px){
                    padding: 0 15px;
                }
                .helpgent-form-group{
                    margin-bottom: 0;
                    width: 100%;
                    padding: 15px 0;
                    @media only screen and (max-width: 767px){
                        padding: 15px 0;
                    }
                }
            }
        }
    }
    .helpgent-element-element__icon{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        @media only screen and (max-width: 575px){
            margin-bottom: 20px;
        }
    }

    .helpgent-element-element__social{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 20px 0 0;
        padding: 0 30px;
    }
    .helpgent-element-element__social-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        cursor: pointer;
        border-radius: 8px;
        svg{
            width: 16px;
            height: 16px;
        }
        &.helpgent-element-element__social-facebook{
            background-color: #2D75ED;
        }
        &.helpgent-element-element__social-twitter,
        &.helpgent-element-element__social-x{
            background-color: #000000;
            svg{
                path{
                    fill: #fff;
                }
            }
        }
        &.helpgent-element-element__social-youtube{
            background-color: #F30104;
        }
        &.helpgent-element-element__social-instagram{
            background-color: #BF3AD4;
        }
    }
    &.helpgent-element-element-wrapper--welcome{
        .helpgent-element-element__action{
            .helpgent-btn-next{
                font-size: 16px;
                padding: var(--helpgent-special-btn-padding);
            }
        }
    }

    &.helpgent-element-element-wrapper--welcome,
    &.helpgent-element-element-wrapper--end{
        .helpgent-element-element__action {
            .helpgent-btn{
                font-family: inherit;
                font-size: var(--helpgent-special-btn-font-size);
            }
        }
        .helpgent-element-element__label{
            .block-editor-rich-text__editable,
            [data-rich-text-placeholder]:after{
                font-size: var(--helpgent-special-label-font-size);
            }
        }
        .helpgent-element-element {
            .helpgent-element-element__label-text{
                font-size: var(--helpgent-special-label-font-size);
            }
            .helpgent-element-element__description-text{
                font-size: var(--helpgent-special-description-font-size);
            }
        }
        .helpgent-element-element__description{
            .block-editor-rich-text__editable,
            [data-rich-text-placeholder]:after{
                font-size: var(--helpgent-special-description-font-size);
            }

        }
    }
    .helpgent-element-element__label{
        margin-bottom: 10px;
        .block-editor-rich-text__editable{
            font-family: inherit;
            font-size: var(--helpgent-label-font-size);
            font-weight: var(--helpgent-label-font-weight);
            color: var(--helpgent-label-color);
            word-wrap: break-word;
            word-break: break-word;
            text-align: start;
            line-height: 1.2;
        }
        [data-rich-text-placeholder]{
            &:after{
                font-family: inherit;
                font-size: var(--helpgent-label-font-size);
                font-weight: var(--helpgent-label-font-weight);
                color: var(--helpgent-color-dark);
            }
        }
    }
    .ql-container.ql-snow{
        border: 0 none;
    }

    .block-editor-rich-text__editable{
        margin: 0;
        &:focus{
            outline: none;
            box-shadow: 0 0;
            border: 0 none;
        }
    }
    [data-rich-text-placeholder]{
        &:after{
            font-style: italic;
            inset-inline-start: 0;
            opacity: .4;
        }
    }
    .helpgent-element-element__description{
        .block-editor-rich-text__editable{
            font-family: inherit;
            font-size: var(--helpgent-description-font-size);
            font-weight: var(--helpgent-description-font-weight);
            color: var(--helpgent-description-color);
            word-wrap: break-word;
            word-break: break-word;
            text-align: start;
        }
        [data-rich-text-placeholder]{
            &:after{
                font-family: inherit;
                font-size: var(--helpgent-description-font-size);
                font-weight: var(--helpgent-description-font-weight);
                color: var(--helpgent-color-light-gray);
                text-align: start;
                width: 100%;
                height: 100%;
            }
        }
    }
    .helpgent-element-element__text,
    .helpgent-element-element__action{
        padding: 0 30px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 0 20px;
        }
        @media only screen and (max-width: 575px){
            padding: 0 25px;
        }
    }
    .helpgent-element-element__text{
        margin-bottom: 20px;
    }
    .helpgent-element-element__action{
        text-align: start;
        .helpgent-checkbox{
            cursor: pointer;
            label{
                padding-inline-start: 10px;
                line-height: 1.35;
                white-space: pre-line;
                word-wrap: break-word;
                word-break: break-word;
                cursor: pointer;
            }
            input{
                cursor: pointer;
            }
        }
        .helpgent-rangeControl{
            margin-top: 14px;
        }
        .helpgent-btn{
            min-height: 48px;
            font-family: inherit;
            font-size: var(--helpgent-btn-font-size);
            border: 1px solid var(--helpgent-btn-color);
            border-radius: var(--helpgent-btn-radius);
            color: var(--helpgent-btn-text-color);
            background-color: var(--helpgent-btn-color);
            word-wrap: break-word;
            word-break: break-word;
            &:not(:hover):not(:active):not(.has-background) {
                color: var(--helpgent-btn-text-color);
                background-color: var(--helpgent-btn-color);
                border-color: var(--helpgent-btn-color);
            }
            &:hover {
                color: var(--helpgent-btn-color);
                background-color: var(--helpgent-color-white);
                svg path {
                    fill: var(--helpgent-btn-color);
                }
            }
        }
        .helpgent-btn-start{
            padding: 0 30.5px;
        }
        .helpgent-btn-next{
            padding: 0 19px;
        }
        .helpgent-btn-submit{
            width: 100%;
            justify-content: center;
        }
        .helpgent-form__element{
            min-height: 44px;
            padding: 7px 16px 8px;
            border-radius: var(--helpgent-btn-radius);
            background-color: var(--helpgent-input-background);
        }
        textarea.helpgent-form-group__element{
            resize: none;
            min-height: 100px;
            padding-top: 11px;
            padding-bottom: 15px;
            font-family: inherit;
        }
        .helpgent-element-element__option-count{
            display: block;
            width: 100%;
            text-align: end;
            margin-top: 10px;
            font-size: 13px;
            color: var(--helpgent-color-light-gray);
        }
        .helpgent-single-select,
        .helpgent-multi-select{
            display: flex;
            align-items: center;
            margin-inline-start: -20px;
            .helpgent-option-number{
                font-size: 13px;
                font-weight: 400;
                color: var(--helpgent-color-extra-light);
                display: block;
                width: 20px;
            }
        }
        .helpgent-multi-select--last,
        .helpgent-single-select--last{
            margin-bottom: 0;
        }
        .helpgent-element-element__item{
            &:not(:last-child){
                margin-bottom: 20px;
                border-bottom: 1px solid var(--helpgent-color-border-light);
            }
        }
        &--alter{
            .helpgent-single-select,
            .helpgent-multi-select{
                margin-inline-start: 0;
            }
        }
    }
    .helpgent-form-icon-left{
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-extra-light)
            }
        }
        .helpgent-form__element{
            padding-inline-start: 40px;
        }
    }
    .helpgent-element-time{
        display: flex;
        align-items: center;
        margin-top: 20px;
        svg{
            margin-inline-end: 8px;
            path{
                fill: var(--helpgent-options-color);
            }
        }
        span{
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-options-color);
        }
        .helpgent-estimated-time{
            display: inline-block;
            margin-left: 5px;
        }
    }

    .helpgent-form-group{
        margin-bottom: 10px;
        &--inline{
            display: flex;
            align-items: center;
            .helpgent-form-group__element{
                width: auto;
            }
        }
    }

    .helpgent-form-group__element{
        min-height: 44px;
        border-radius: var(--helpgent-input-radius);
    }
    textarea.helpgent-form-group__element{
        border-radius: var(--helpgent-large-component-radius);
    }
    .helpgent-form-group__label{
        margin-bottom: 10px;
        word-wrap: wrap;
        word-break: break-word;
    }
    .helpgent-select__control{
        height: 44px;
        border-radius: var(--helpgent-input-radius);
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .helpgent-select__menu{
        border-radius: var(--helpgent-input-radius);
    }
    .helpgent-select__placeholder{
        font-size: 14px;
        font-weight: 400;
        color: var(--helpgent-color-gray);
    }
    .helpgent-select__single-value{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-form__element-inline--yes-no-toggler{
        padding: 12px 16px;
        border-radius: var(--helpgent-input-radius);
        background: var(--helpgent-color-bg-light);
        width: 100%;
        max-width: 300px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-sizing: border-box;
        .helpgent-toggle{
            display: flex;
        }
        .components-form-toggle{
            display: inline-flex;
            .components-form-toggle__input{
                cursor: pointer;
            }
        }
        .helpgent-form__label{
            font-size: 13px;
            display: block;
        }
    }

    //Picture Select Element
    .helpgent-select-picture-list{
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 15px;
    }
    .helpgent-select-picture-single{
        width: 160px;
        border: 2px solid transparent;
        border-radius: var(--helpgent-large-component-radius);
        padding: 6px;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        box-shadow: 0 0 0 1px var(--helpgent-color-bg-gray);
        height: 100%;
        @media only screen and (max-width: 380px){
            width: 100%;
        }
        &--selected{
            border-color: var(--helpgent-color-primary);
            box-shadow: none;
        }
        &__remove{
            width: 22px;
            height: 22px;
            background: var(--helpgent-color-danger);
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset-inline-end: -9px;
            top: -11px;
            border-radius: 50%;
            visibility: hidden;
            opacity: 0;
            z-index: 1;
            transition: var(--helpgent-transition);
            svg{
                path{
                    fill: #fff;
                }
            }
        }
        &__img{
            position: relative;
            img{
                border-radius: var(--helpgent-large-component-radius);
                width: 100%;
                height: 120px;
                object-fit: cover;
                @media only screen and (max-width: 400px){
                    height: 90px;
                }
            }
        }
        &__action{
            position: absolute;
            inset-inline-end: 8px;
            top: 8px;
            display: flex;
            align-items: center;
            gap: 5px;
            visibility: hidden;
            opacity: 0;
            transition: var(--helpgent-transition);
            &__btn{
                padding: 0;
                margin: 0;
                background: #fff;
                border-radius: 6px;
                width: 30px;
                height: 30px;
                align-items: center;
                justify-content: center;
                border: 0 none;
                display: flex;
                cursor: pointer;
                transition: var(--helpgent-transition);
                svg{
                    width: 13px;
                    path{
                        transition: var(--helpgent-transition);
                        fill: var(--helpgent-color-light-gray);
                    }
                }
                &:hover{
                    svg{
                        path{
                            fill: #fff;
                        }
                    }
                }
                &--replace{
                    &:hover{
                        background: var(--helpgent-color-primary);
                    }
                }
                &--remove{
                    &:hover{
                        background: var(--helpgent-color-danger);
                    }
                }
            }
        }
        &__caption{
            font-size: 13px;
            margin-top: 5px;
            color: var(--helpgent-options-color);
            word-break: break-all;
            word-wrap: break-word;
            cursor: text;
        }
        &--add-new{
            border: 2px dashed var(--helpgent-color-border-light);
            border-width: 2px;
            min-height: 166px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: none;
        }
        &__add-picture{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0;
            margin: 0;
            cursor: pointer;
            background: none;
            border: 0 none;
            color: var(--helpgent-options-color);
            font-size: 13px;
            &:not(:hover):not(:active):not(.has-background){
                background: none;
                color: var(--helpgent-options-color);
            }
            &::after{
                position: absolute;
                content: '';
                inset-inline-start: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
            span{
                display: block;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin-bottom: 10px;
                background: var(--helpgent-color-extra-light);
                svg{
                    width: 10px;
                    path{
                        fill: #fff;
                    }
                }
            }
        }
        &__selected{
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: var(--helpgent-color-primary);
            top: 5px;
            right: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                width: 12px;
                path{
                    fill: #fff;
                }
            }
        }
        &:hover{
            .helpgent-select-picture-single__remove,
            .helpgent-select-picture-single__action
            {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    //Open-ended element
    .helpgent-element-element__chat-title,
    .helpgent-element-element__chat-title-text{
        font-family: inherit;
        font-size: var(--helpgent-chatTtile-font-size);
        font-weight: var(--helpgent-chatTtile-font-weight);
        color: var(--helpgent-chatTtile-color);
        margin: 0;
        word-break: break-word;
        word-wrap: break-word;
        margin-bottom: 16px;
        .block-editor-rich-text__editable,
        [data-rich-text-placeholder]:after{
            font-size: var(--helpgent-chatTtile-font-size);
            font-weight: var(--helpgent-chatTtile-font-weight);
            color: var(--helpgent-chatTtile-color);
            word-break: break-word;
            word-wrap: break-word;
        }
        p{
            font-size: var(--helpgent-chatTtile-font-size);
            font-weight: var(--helpgent-chatTtile-font-weight);
            color: var(--helpgent-chatTtile-color);
            margin: 0;
            word-break: break-word;
            word-wrap: break-word;
        }
    }
    .helpgent-element-element__footer,
    .helpgent-element-element__footer-text{
        margin-top: 12px;
        font-family: inherit;
        font-size: var(--helpgent-footerText-font-size);
        font-weight: var(--helpgent-footerText-font-weight);
        color: var(--helpgent-footerText-color);
        .block-editor-rich-text__editable,
        [data-rich-text-placeholder]:after{
            font-size: var(--helpgent-footerText-font-size);
            font-weight: var(--helpgent-footerText-font-weight);
            color: var(--helpgent-footerText-color);
            word-break: break-word;
            word-wrap: break-word;
        }
        p{
            font-size: var(--helpgent-footerText-font-size);
            font-weight: var(--helpgent-footerText-font-weight);
            color: var(--helpgent-footerText-color);
            margin: 0;
        }
    }
    .helpgent-open-ended-element-types{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(82px, 82px));
        grid-auto-flow: column;
        gap: 10px;
        .helpgent-open-ended-btn{
            break-inside: avoid;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--helpgent-btn-text-color);
            background: var(--helpgent-btn-color);
            border-radius: var(--helpgent-open-ended-border-radius);
            border: 0 none;
            cursor: pointer;
            pointer-events: none;
            transition: var(--helpgent-transition);
            width: 100%;
            max-height: 82px;
            min-height: 82px;
            box-sizing: border-box;
            &:hover{
                scale: 1.05;
            }
            &:focus{
                outline: 0;
                border: 0 none;
            }
            svg{
                width: 24px;
                @media only screen and (max-width: 575px){
                    width: 18px;
                    height: 18px;
                }
                @media only screen and (max-width: 480px){
                    width: 16px;
                    height: 16px;
                }
                path{
                    fill: var(--helpgent-btn-text-color);
                }
            }
            span{
                font-size: 12px;
                font-weight: 600;
                margin-top: 12px;
                line-height: 1;
                color: var(--helpgent-btn-text-color);
                text-transform: uppercase;
                @media only screen and (max-width: 480px){
                    font-size: 11px;
                }
                @media only screen and (min-width: 320px) and (max-width: 360px){
                    font-size: 10px;
                }
            }
        }
        &.helpgent-open-ended-element-types--adaptive{
            grid-template-columns: repeat(2, 82px);
            grid-auto-flow: dense;
        }
    }
    .helpgent-open-ended-element-types,
    .helpgent-open-ended-element-types.helpgent-open-ended-element-types--adaptive{
        @media only screen and (max-width: 576px){
                grid-auto-flow: column;
        }
        @media only screen and (min-width: 480px) and (max-width: 575px){
            grid-template-columns: repeat(auto-fill, minmax(80px, 80px));
        }
        @media only screen and (min-width: 400px) and (max-width: 479px){
            grid-template-columns: repeat(auto-fill, minmax(62px, 1fr));
        }
        @media only screen and (max-width: 400px){
            grid-template-columns: repeat(auto-fill, minmax(57px, 1fr));
        }
        @media only screen and (min-width: 361px) and (max-width: 399px){
            grid-template-columns: repeat(auto-fill, minmax(57px, 1fr));
            gap: 5px;
        }
        @media only screen and (min-width: 320px) and (max-width: 360px){
            grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        }
        .helpgent-open-ended-btn{
            @media only screen and (min-width: 480px) and (max-width: 575px){
                min-height: 80px;
            }
            @media only screen and (max-width: 480px){
                min-height: 78px;
            }
            @media only screen and (min-width: 400px) and (max-width: 479px){
                min-height: 62px;
            }
            @media only screen and (min-width: 361px) and (max-width: 399px){
                min-height: 63px;
            }
            @media only screen and (min-width: 320px) and (max-width: 360px){
                min-height: 50px;
                padding: 5px;
                span{
                    margin-top: 7px;
                }
            }
        }
    }

    //Rating Element
    .helpgent-rating-wrapper{
        display: flex;
        align-items: center;
        gap: 6px;
        .helpgent-rating-single{
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            svg{
                width: 24px;
                height: 24px;
            }
            .helpgent-rating-value{
                display: block;
                margin-top: 8px;
                font-size: 14px;
                color: var(--helpgent-options-color);
            }
            &--selected{
                svg{
                    path, ellipse{
                        fill: var(--helpgent-color-primary);
                    }
                }
            }
        }
    }
    .helpgent-btn-back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        min-height: 36px;
        border-radius: 50%;
        transition: var(--helpgent-transition);
        background-color: var(--helpgent-color-bg-gray);
        cursor: pointer;
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-gray);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            background: var(--helpgent-color-primary);
            svg path{
                fill: #fff;
            }
        }
    }
    &.helpgent-element-element-wrapper--user_validation{
        .helpgent-form-group{
            .helpgent-form-group__label,
            .helpgent-required-sign{
                color: var(--helpgent-options-color);
            }
        }
        .helpgent-checkbox label{
            color: var(--helpgent-options-color);
        }
    }
`,dn.div`
    position: relative;
    display: flex;
    border-radius: 20px;
    height: 550px;
    background-color: var(--helpgent-color-white);
    box-shadow: 0 0 15px rgba(0,0,0,0.08);
    overflow: hidden;
    font-family: var(--helpgent-form-font);
    @media only screen and (max-width: 575px){
        flex-wrap: wrap;
        flex-flow: column;
        .helpgent-media-empty,
        .helpgent-media-src__video video,
        .helpgent-media-src__image img {
            border-radius: 20px 20px 0 0 !important;
        }
    }
    &.helpgent-preview-no-media,
    &.helpgent-preview-media-overlay--has-media{
        .helpgent-google-recaptcha{
            padding: 0;
        }
    }
    &.helpgent-preview-media-right{
        flex-flow: row-reverse;
        .helpgent-media-empty,
        .helpgent-media-src__video video,
        .helpgent-media-src__image img {
            border-radius: 0 20px 20px 0;
        }
        .helpgent-media-src__overlay:before{
            border-radius: 0 20px 20px 0;
        }
        @media only screen and (max-width: 768px){
            flex-flow: column;
        }
        .helpgent-media-src__image{
            .helpgent-image-loader{
                border-radius: 0 8px 8px 0;
            }
        }
        .helpgent-chatForm-back-btn + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper--open_ended .helpgent-countdown,
        .helpgent-chatForm-back-btn + .helpgent-element-element-wrapper--open_ended .helpgent-countdown{
            @media only screen and (max-width: 767px){
                border-radius: 0 !important;
            }
        }
        .helpgent-media-preview-wrapper{
            @media only screen and (max-width: 991px){
                z-index: unset;
            }
        }
        .helpgent-form-bottom-extras{
            @media only screen and (max-width: 991px){
                right: 0;
                padding: 15px;
            }
            @media only screen and (max-width: 575px){
                padding: 10px 0 0 0;
            }
        }
        .helpgent-element-element-wrapper--open_ended{
            border-radius: 20px 0 0 20px;
        }
    }
    &.helpgent-preview-media-left{
        .helpgent-element-element-wrapper--open_ended{
            border-radius: 0 20px 20px 0;
            @media only screen and (max-width: 767px){
                border-radius: 0 0 20px 20px;
            }
        }
    }
    &.helpgent-preview-media-right,
    &.helpgent-preview-media-left {
        .helpgent-record-action{
            @media only screen and (max-width: 767px){
                padding-top: 35px;
            }
        }
        .helpgent-video-recorder .helpgent-timer{
            z-index: 2;
            @media only screen and (max-width: 767px){
                padding-top: 40px;
            }
        }
        .helpgent-record-btn{
            @media only screen and (max-width: 767px){
                width: 80px;
                height: 80px;
            }
        }
        .helpgent-timer .helpgent-sec,
        .helpgent-record-screen .helpgent-sec{
            @media only screen and (max-width: 767px){
                font-size: 36px;
            }
        }
        .helpgent-record-screen .helpgent-record-action{
            @media only screen and (max-width: 575px){
                padding-top: 40px;
            }
        }
        .helpgent-recorded-preview{
            @media only screen and (max-width: 767px){
                height: auto;
            }
        }
        .helpgent-media-preview .helpgent-media-preview__video video,
        .helpgent-recorded-preview .helpgent-media-preview__video video{
            @media only screen and (max-width: 767px){
                max-width: 350px;
                max-height: 200px;
            }
        }
        .helpgent-audio-range{
            @media only screen and (max-width: 400px){
                width: 215px;
            }
        }
        .helpgent-btn-record-right{
            @media only screen and (max-width: 400px){
                width: 50px;
                height: 50px;
                left: calc(50% + 85px);
            }
        }
        .helpgent-element-element.helpgent-element-element--open-ended{
            @media only screen and (max-width: 767px){
                height: auto;
            }
        }
        .helpgent-element-element-wrapper--open_ended{
            .helpgent-media-upload-screen{
                @media only screen and (max-width: 767px){
                    padding-bottom: 85px;
                    height: auto;
                }
            }
        }
        .helpgent-element-element{
            padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 25px);
            @media only screen and (max-width: 768px){
                padding: 25px 0;
            }
        }
    }
    &.helpgent-preview-open-ended-default {
        width: 408px;
        margin: 0 auto;
        @media only screen and (max-width: 575px){
            width: 100%;
        }
        .helpgent-element-element__action{
            padding: 0 24px;
        }
        .helpgent-element-element__text{
            padding: 20px 24px 0;
        }
        .helpgent-text-screen{
            padding: 0 20px 60px;
        }
        .helpgent-media-preview .helpgent-media-preview__video video,
        .helpgent-recorded-preview .helpgent-media-preview__video video{
            max-height: 230px;
        }
        .helpgent-chatForm-back-btn{
            right: auto;
            top: 19px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background-color: var(--helpgent-color-light-gray);
            z-index: 3;
            left: 19px;
            svg path{
                fill: var(--helpgent-color-white);
            }
        }
        .helpgent-media-preview-wrapper{
            border-radius: 20px;
            @media only screen and (max-width: 767px){
                border-radius: 20px 20px 0 0;
            }
        }
        .helpgent-chatForm-back-btn + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper--open_ended{
            .helpgent-element-element--open-ended{
                padding-top: 60px !important;
            }
        }
        .helpgent-element-element-wrapper {
            .helpgent-record-screen,
            .helpgent-record-audio,
            .helpgent-recorded-preview{
                height: auto;
                padding: 30px 25px calc(var(--helpgent-bottom-extras-height)) !important
            }
        }
        .helpgent-video-recorder{
            &:after{
                border-radius: 20px 20px 0 0;
            }
            &:before{
                border-radius: 0 0 20px 20px !important;
            }
            .helpgent-btn-back{
                left: 20px;
            }
        }
        .helpgent-countdown{
            border-radius: 20px !important;
        }

        .helpgent-btn-record-right{
            @media only screen and (max-width: 400px){
                width: 50px;
                height: 50px;
                left: calc(50% + 85px);
            }
        }
        .helpgent-audio-range{
            @media only screen and (max-width: 400px){
                width: 215px;
            }
        }
        .helpgent-form-bottom-extras{
            width: 100%;
            right: 0;
            bottom: 0;
            border-radius: 0 0 20px 20px;
            padding: 10px 0 10px;
            flex-wrap: wrap;
            justify-content: space-between;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.08);
            .helpgent-form__step-count{
                margin-left: 20px;
            }
            .helpgent-navigation{
                margin-right: 20px;
            }
            .helpgent-form__copyright{
                flex: 0 0 100%;
                padding-top: 10px;
                margin-bottom: -10px;
                @media only screen and (max-width: 575px){
                    margin-top: 0;
                }
                a{
                    border-radius: 0 0 20px 20px;
                }
            }
        }
        .helpgent-element-element{
            @media only screen and (max-width: 991px){
                padding: 25px 0 85px;
            }
            @media only screen and (max-width: 575px){
                padding: 25px 0 85px !important;
            }
            &.helpgent-element-element--open-ended{
                justify-content: flex-start;
                .helpgent-element-element__action{
                    flex: none;
                    display: block;
                    margin-top: auto;
                }
            }
        }
        .helpgent-element-element.helpgent-element-element--open-ended .helpgent-element-element__action{
            margin-bottom: 20px;
        }
        .helpgent-form-bottom-extras{
            @media only screen and (max-width: 767px){
                position: absolute;
            }
        }
        .helpgent-element-element.helpgent-element-textField .helpgent-btn-next{
            margin-bottom: 30px;
        }
    }
    &.helpgent-preview-no-media{
        position: relative;
        .helpgent-element-element-wrapper{
            .helpgent-element-element{
                max-width: 500px;
                margin: 0 auto;
                padding: 25px 40px calc(var(--helpgent-bottom-extras-height) + 25px);
                @media only screen and (max-width: 768px){
                    padding: 25px 40px calc(var(--helpgent-bottom-extras-height) + 25px);
                }
                &.helpgent-element-element--open-ended{
                    padding: 25px 15px calc(var(--helpgent-bottom-extras-height) + 25px);
                    @media only screen and (max-width: 768px){
                        padding: 25px 15px calc(var(--helpgent-bottom-extras-height) + 25px);
                    }
                }
            }
        }
        .helpgent-element-element__text,
        .helpgent-element-element__action{
            padding: 0;
            @media only screen and (max-width: 767px){
                padding: 0 15px;
            }
        }
        .helpgent-element-element.helpgent-element-element--open-ended .helpgent-element-element__text,
        .helpgent-element-element.helpgent-element-element--open-ended .helpgent-element-element__action{
            @media only screen and (max-width: 575px){
                padding: 0;
            }
        }
    }
    &.helpgent-preview-media-overlay,
    &.helpgent-preview-open-ended-default {
        position: relative;
        .helpgent-media-src__video video,
        .helpgent-media-src__image img,
        .helpgent-media-src__image .helpgent-media-src__overlay {
            border-radius: 20px !important;
        }
        .helpgent-media-src__overlay:before{
            content: none;
        }
        .helpgent-media-preview-wrapper .helpgent-media-src{
            &:after{
                position: absolute;
                content: '';
                border-radius: 20px;
                width: 100%;
                height: 100%;
                background: var(--helpgent-overlay-color);
                opacity: var(--helpgent-overlay-opacity);
                inset-inline-start: 0;
                top: 0;
                z-index: 1;
            }
        }
        .helpgent-media-preview-wrapper .helpgent-media-action{
            z-index: 3;
        }
        .helpgent-element-element-wrapper{
            position: absolute;
            width: 100%;
            height: 100%;
            inset-inline-start: 0;
            top: 0;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            z-index: 2;
            opacity: 1 !important;
            .helpgent-element-element{
                max-width: 500px;
                position: relative;
                z-index: 1;
            }
        }
        .helpgent-element-element__label,
        .helpgent-element-element__description{
            [data-rich-text-placeholder]:after,
            .block-editor-rich-text__editable,
            .ql-editor.ql-blank:before,
            .ql-editor p{
                opacity: 1;
            }
        }
        .helpgent-element-element__description{
            .ql-editor.ql-blank:before,
            .ql-editor p{
                color: var(--helpgent-color-white);
            }
        }

        &:hover{
            .helpgent-video-control{
                opacity: 1;
                visibility: visible;
            }
        }

        .helpgent-element-element__action{
            max-width: none;
        }

        .helpgent-permission-contents{
            margin-bottom: 75px;
            @media only screen and (max-width: 575px){
                margin-bottom: 110px;
            }
        }
        .helpgent-form__copyright--media{
            @media only screen and (max-width: 575px){
                justify-content: center;
            }
        }
        .helpgent-element-element{
            @media only screen and (max-width: 575px){
                padding: 25px 0 calc(var(--helpgent-bottom-extras-height) - 15px) 0 !important;
            }
        }
        .helpgent-select-picture-single{
            width: calc(50% - 8px);
            @media only screen and (max-width: 380px){
                width: 100%;
            }
        }
        .helpgent-select-picture-single__img img{
            @media only screen and (max-width: 380px){
                height: 120px;
            }
        }
        .helpgent-record-screen .helpgent-sec.--is-danger{
            color: var(--helpgent-color-secondary);
        }
        .helpgent-btn-back{
            &:hover{
                background: var(--helpgent-color-bg-gray);
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        .helpgent-select-picture-single{
            width: calc(50% - 8px);
            @media only screen and (max-width: 380px){
                width: 100%;
            }
        }
        .helpgent-select-picture-single__img img{
            @media only screen and (max-width: 380px){
                height: 120px;
            }
        }

        .helpgent-btn-back{
            background: var(--helpgent-color-light-gray) !important;
            svg path{
                fill: #fff;
            }
        }
        .helpgent-element-textField{
            .helpgent-form-group__element{
                color: var(--helpgent-color-gary);
                border-color: var(--helpgent-color-border-light);
                &:focus{
                    border-color: var(--helpgent-color-dark);
                }
                &::placeholder{
                    color: var(--helpgent-color-dark);
                }
            }
            .helpgent-file-upload .helpgent-file-upload-info > span{
                color: var(--helpgent-color-gray);
            }
        }
        .helpgent-media-upload-screen{
            .helpgent-video-service__or,
            .helpgent-short-text{
                color: var(--helpgent-color-light-gray) !important;
            }
        }
        .helpgent-recorded-preview{
            background: #fff !important;
            .helpgent-recorded-preview__bottom h4{
                font-family: inherit;
                color: var(--helpgent-color-dark);
            }
        }
        .helpgent-record-audio{
            .helpgent-timer .helpgent-sec{
                color: var(--helpgent-color-dark);
            }
        }
        .helpgent-record-screen{
            .helpgent-sec,
            .helpgent-record-helper-text{
                color: var(--helpgent-color-dark) !important;
            }
        }
        .helpgent-permission-contents{
            .helpgent-permission-title{
                color: var(--helpgent-color-dark);
            }
        }
        .helpgent-element-element-wrapper{
            border-radius: 20px;
        }
        .helpgent-video-recorder{
            &:before{
                border-radius: 0 0 20px 20px !important;
            }
            &:after{
                border-radius: 20px 20px 0 0 !important;
            }
        }
        .helpgent-media-preview__video{
            video{
                min-width: 300px;
                @media only screen and (max-width: 420px){
                    min-width: 100%;
                }
            }
        }
    }

    &.helpgent-preview-media-overlay{
        .helpgent-element-element__text,
        .helpgent-element-element__action{
            padding: 0;
            @media only screen and (max-width: 767px){
                padding: 0 15px;
            }
        }
        .helpgent-element-element-wrapper{
            height: 100%;
        }
        &--has-media{
            .helpgent-single-select__option:after{
                background: #fff;
            }
            .helpgent-form-group .helpgent-form-group__element,
            .helpgent-select .helpgent-select__control,
            .helpgent-element-element__uploader,
            .helpgent-multi-select__option,
            .helpgent-single-select__option,
            .helpgent-single-select__option:before,
            .helpgent-form__element-inline--yes-no-toggler{
                background: rgba(255,255,255, .23);
            }
            .helpgent-form__element-inline--yes-no-toggler{
                .components-toggle-control__label{
                    color: #fff;
                }
            }
            .helpgent-element-element__action{
                &::-webkit-scrollbar-track {
                    background: rgba(255,255,255, .23);
                }
                &::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255, .5);;
                }
            }
            .helpgent-form-group{
                .helpgent-required-sign{
                    color: #fff;
                }
            }
            .helpgent-form-group__element{
                color: #fff;
                &:focus{
                    border-color: var(--helpgent-color-white);
                }
                &::placeholder{
                    color: #fff;
                }
            }
            .helpgent-element-element__uploader .helpgent-uploader-label,
            .helpgent-element-element__uploader .helpgent-uploader-size-limit,
            .helpgent-form-group .helpgent-form-group__label,
            .helpgent-select__placeholder,
            .helpgent-select .helpgent-select__indicator,
            .helpgent-rangeControl .helpgent-rangeControl__wayline span,
            .helpgent-promoter-score__wayline .helpgent-promoter-score__lowest-text,
            .helpgent-promoter-score__wayline .helpgent-promoter-score__highest-text,
            .helpgent-rating-wrapper .helpgent-rating-single .helpgent-rating-value,
            .helpgent-element-element__footer-text [data-rich-text-placeholder]:after,
            .helpgent-element-element__footer-text .block-editor-rich-text__editable,
            .helpgent-element-element__chat-title [data-rich-text-placeholder]:after,
            .helpgent-element-element__action .helpgent-element-element__option-count,
            .helpgent-multi-select__option,
            .helpgent-single-select__option,
            input[type='radio']:checked+.helpgent-single-select__option,
            .helpgent-select__single-value,
            .helpgent-element-time span,
            .helpgent-form-group__dialer .helpgent-form-group__dialer__code,
            .helpgent-max-size-notice,
            .helpgent-file-upload .helpgent-file-upload-info > span,
            .helpgent-record-helper-text{
                color: #fff;
            }
            .helpgent-input-icon,
            .helpgent-element-element__uploader,
            .helpgent-element-time{
                svg{
                    path{
                        fill: #fff;
                    }
                }
            }
            .helpgent-multi-select__option:before{
                border-color: #fff;
            }
            .helpgent-select-picture-single,
            .helpgent-btn-recorded{
                background: #fff;
            }
            .helpgent-record-screen .helpgent-sec,
            .helpgent-timer .helpgent-sec{
                color: #fff;
            }
            .helpgent-btn-back,
            .helpgent-recorded-preview__bottom-actions a+a{
                background: #fff;
            }
            .helpgent-element-element__footer .ql-editor.ql-blank:before,
            .helpgent-element-element__footer .ql-editor p,
            .helpgent-video-service .helpgent-video-service__or,
            .helpgent-permission-title,
            .helpgent-recorded-preview__bottom h4{
                color: var(--helpgent-color-white);
            }
            .helpgent-video-service {
                .helpgent-btn{
                    background: #fff;
                }
                .helpgent-short-text{
                    color: #fff;
                }
            }
        }
        .helpgent-video-recorder .helpgent-btn-back{
            margin-left: 45px;
            @media only screen and (max-width: 767px){
                margin-left: 0;
            }
        }
        .helpgent-video-recorder .helpgent-timer{
            left: 115px;
        }
        .helpgent-element-element__user-validation{
            margin: 0 0 20px;
        }
        .helpgent-media-preview-wrapper{
            @media only screen and (max-width: 991px){
                z-index: unset;
            }
        }
        .helpgent-form-bottom-extras{
            @media only screen and (max-width: 991px){
                right: 0;
                padding: 10px 20px 20px;
                border-radius: 0 0 20px 20px;
            }
            @media only screen and (max-width: 575px){
                padding: 10px 0 0 0;
            }
        }
        .helpgent-record-screen{
            .helpgent-timer{
                @media only screen and (max-width: 768px){
                    margin-top: 60px;
                }
            }
            .helpgent-record-action{
                @media only screen and (max-width: 768px){
                    padding-top: 140px;
                }
            }
        }
        .helpgent-element-element__action{
            @media only screen and (max-width: 768px){
                padding-top: 30px;
            }
        }
        .helpgent-element-element{
            padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 25px);
            @media only screen and (max-width: 575px){
                padding: 25px 20px calc(var(--helpgent-bottom-extras-height) + 25px) !important;
            }
        }
        .helpgent-element-element.helpgent-element-element--open-ended .helpgent-element-element__text,
        .helpgent-element-element.helpgent-element-element--open-ended .helpgent-element-element__action{
            @media only screen and (max-width: 575px){
                padding: 0;
            }
        }
    }
    .helpgent-form-bottom-extras{
        position: absolute;
        z-index: 9999;
        right: 10px;
        bottom: 10px;
        background: #fff;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0 10px;
        box-sizing: border-box;
        &:empty{
            display: none;
        }
        @media only screen and (max-width: 991px){
            width: 100%;
            bottom: 0;
            right: 0;
            border-radius: 0 0 20px 20px;
            justify-content: flex-end;
            padding: 10px 15px 20px;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.08);
        }
        @media only screen and (max-width: 768px){
            position: unset;
        }
        @media only screen and (max-width: 575px){
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 10px 0 0 0;
            right: 0;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.08);
        }
        .helpgent-form__step-count{
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--helpgent-color-bg-gray);
            border-radius: 6px;
            padding: 0;
            min-width: 70px;
            box-sizing: border-box;
            span{
                font-size: 13px;
                font-weight: 500;
                color: var(--helpgent-color-light-gray);
            }
            .helpgent-form__step-active{
                color: var(--helpgent-color-dark);
                display: inline-block;
            }
            @media only screen and (max-width: 575px){
                margin-left: 20px;
                margin-bottom: 10px;
                min-width: 60px;
                max-width: 60px;
                border-radius: 8px;
            }
        }
    }
`,dn.div`
    line-height: 1.25;
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='radio']{
        display: none;
        &:checked {
            & + .helpgent-single-select__option{
                font-weight: 500;
                color: var(--helpgent-color-dark);
                &:before{
                    border: 5px solid var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-single-select__option{
        position: relative;
        border-radius: var(--helpgent-input-radius);
        padding: 14px 15px 14px 45px;
        width: 100%;
        min-height: 18px;
        display: flex;
        align-items: center;
        max-width: 290px;
        background-color: var(--helpgent-color-bg-light);
        color: var(--helpgent-color-gray);
        font-size: 14px;
        &:before{
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            inset-inline-start: 24px;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 2px solid #a2a2a2;
            z-index: 10;
            box-sizing: border-box;
        }
    }
`,dn.div`
    .helpgent-select__control{
        min-height: 44px;
    }
    .helpgent-select__menu{
        min-width: 220px;
        padding: 8px;
    }
    .helpgent-select__option{
        font-size: 13px;
        padding: 4px 5px;
    }
    .helpgent-select__single-value{
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
    }
    .helpgent-select__indicator{
        padding: 0 10px 0 0;
        svg{
            width: 18px;
            height: 18px;
        }
    }
    .helpgent-form-group--inline{
        gap: 8px;
        flex-wrap: nowrap;
        .helpgent-select{
            width: 80px;
        }
        .helpgent-form-group__element{
            width: 100%;
        }
    }
    .helpgent-form-group__element{
        flex: 1;
    }
    .helpgent-form-group__dialer{
        position: relative;
        flex: 1;
        .helpgent-form-group__dialer__code{
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-form-group__element{
            padding-left: 66px;
            width: 100% !important;
        }
    }
    .helpgent-form-group-phone{
        display: flex;
        gap: 10px;
        width: 100%;
    }
`,dn.div`
    position: relative;
    .helpgent-color-picker__trigger{
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin: 0;
    }
    input[type=color]{
        position: absolute;
        flex: none;
        appearance: none;
        padding: 0;
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
        z-index: 10;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        margin: 0;
    }
`,dn.div`
    flex: 1 1 0%;
    overflow: hidden;
    position: relative;
    .helpgent-media-preview{
        height: 100%;
        position: relative;
        max-height: 550px;
        &:hover{
            .helpgent-video-control{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .helpgent-media-src{
        height: 100%;
        &--loading{
            position: relative;
            &:before{
                position: absolute;
                content: '';
                left: 50%;
                top: 50%;
                width: 30px;
                height: 30px;
                border: 2px solid var(--helpgent-color-dark);
                border-radius: 50%;
                border-top-color: transparent;
                animation: helpgentSpinner 900ms infinite linear forwards;
                margin-left: -15px;
                margin-top: -30px;
            }
            .helpgent-media-src__video{
                display: none;
            }
        }
    }
    .helpgent-media-empty{
        width: 100%;
        height: 100%;
        border-radius: 20px 0 0 20px;
        background-color: #272827;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        span{
            color: #565656;
            font-size: 14px;
        }
        svg{
            width: 80px;
            height: 80px;
            path{
                fill: #565656;
            }
        }
    }
    .helpgent-media-src__image{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            border-radius: 20px 0 0 20px;
        }
        .helpgent-image-wrapper{
            width: 100%;
            height: 100%;
        }
        .helpgent-image-loader{
            border-radius: 8px 0 0 8px;
        }
    }
    .helpgent-media-src__video{
        height: 100%;
        video{
            width: 100%;
            height: 100%;
            border-radius: 20px 0 0 20px;
            object-fit: cover;
        }
    }
    .helpgent-media-src__image,
    .helpgent-media-src__video{
        position: relative;

        .helpgent-media-src__overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: var(--helpgent-overlay-color);
            opacity: var(--helpgent-overlay-opacity);
            border-radius: 0;
            z-index: 1;
        }
    }
    .helpgent-video-visualization{
        position: absolute;
        inset-inline-end: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 10;
        &__timer{
            color: #fff;
            font-size: 12px;
            font-weight: 600;
            display: block;
        }
        &__fullScreen{
            display: block;
            line-height: 0;
        }
    }
    .helpgent-video-control{
        position: absolute;
        width: 76px;
        height: 76px;
        border-radius: 50%;
        inset-inline-start: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--helpgent-transition);
        z-index: 4;
        svg{
            width: 20px;
            height: 20px;
            path{
                fill: var(--helpgent-color-dark);
            }
        }
    }
    .helpgent-media-action{
        position: absolute;
        inset-inline-start: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        gap: 6px;
        opacity: 0;
        visibility: hidden;
        transition: var(--helpgent-transition);
        z-index: 1;
        &__item{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(0,0,0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--helpgent-transition);
            svg{
                width: 15px;
                height: 15px;
                path{
                    fill: #fff;
                }
            }
            &:hover{
                background: var(--helpgent-color-dark);
            }
        }
    }
    .helpgent-video-visualization__fullScreen{
        cursor: pointer;
    }
`,dn.div`

`,dn.div`
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border-radius: 16px;
    &.helpgent-card{
        flex-direction: column;
    }
    .helpgent-card-header{
        background: #f8f8f8;
        padding: 20px 30px;
        border-radius: 16px 16px 0 0;
        h4{
            font-size: 22px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin: 0 0 7px;
            padding: 0;
            font-family: inherit;
        }
        span{
            font-size: 14px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            display: block;
        }
    }
    .helpgent-card-body{
        background: #fff;
        padding: 30px;
    }
    .helpgent-profile-update__author{
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 18px;
        .helpgent-image-wrapper{
            width: auto;
            height: auto;
            line-height: 0;
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;

            }
        }
    }
    .helpgent-change-profile-img{
        border-bottom: 1px solid #ededed;
        padding-bottom: 20px;
        margin-bottom: 25px;
    }
    .helpgent-profile-update__author-name{
        display: block;
        font-size: 18px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-profile-update__author-joined-date{
        font-size: 14px;
        font-weight: 400;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-profile-update__group-element{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .helpgent-profile-update__inline-element{
        .helpgent-form-group__label{
            display: block;
            width: 100%;
        }
        .helpgent-about-area-info{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 16px;
        }
        .helpgent-validate-danger{
            flex: none;
            margin: 0;
        }
        .helpgent-letter-countdown{
            display: inline-block;
            font-size: 13px;
            font-weight: 500;
            margin-left: auto;
            color: var(--helpgent-color-light-gray);
        }
    }
    .helpgent-form-group-change-mail{
        display: flex;
        align-items: center;
        gap: 10px;
        .helpgent-btn{
            white-space: nowrap;
        }
    }
    .helpgent-select-time-zone{
        .helpgent-select__control{
            padding-top: 7px;
            padding-bottom: 7px;
            border-radius: 10px;
        }
        .helpgent-select__single-value{
            font-size: 15px;
            font-weight: 400;
        }
    }
    .helpgent-profile-update__form{
        .helpgent-form-group__element{
            border-radius: 10px;
            font-size: 15px;
            font-weight: 400;
        }
        textarea.helpgent-form-group__element{
            min-height: 120px;
            resize: none;
        }
    }
    .helpgent-card-footer{
        padding: 20px 30px;
        background: #f8f8f8;
        border-radius: 0 0 16px 16px;
        .helpgent-notice{
            display: block;
            margin-top: 15px;
        }
    }
    .helpgent-update-password-body{
        .helpgent-form-group__label{
            user-select: none;
        }
    }
    .helpgent-form-group__box{
        position: relative;
        width: 100%;
        .helpgent-form-group__element-icon{
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
    .helpgent-card-footer{
        button{
            user-select: none;
        }
    }
`,dn.div`
    padding: 0 30px;
    display: flex;
    height: calc(100vh - 32px);
    @media only screen and (max-width: 400px){
        padding: 15px;
    }
    aside{
        width: 350px;
        padding: 30px 0;
        margin-right: 30px;
        @media only screen and (max-width: 1199px){
            width: 250px;
        }
        &.helpgent-sidebar--active{
            display: block !important;
            width: 100%;
            margin-right: 0;
            height: 100%;
        }
    }
    .helpgent-sidebar__top{
        margin-bottom: 17px;
        min-height: 140px;
    }
    .helpgent-sidebar__back{
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--helpgent-transition);
        svg{
            width: 12px;
            height: 12px;
            path{
                fill: var(--helpgent-color-gray);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-sidebar__content{
        margin: 20px 0 25px;
        align-items: center;
    }
    .helpgent-sidebar__element{
        align-items: center;
        min-height: 50px;
        .helpgent-image-wrapper{
            width: 50px;
            height: 50px;
            flex: none;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        .helpgent-sidebar__element-title{
            font-size: 18px;
            font-weight: 600;
            line-height: 1.5;
            margin-left: 15px;
            color: var(--helpgent-color-dark);
        }
    }
    .helpgent-form-color-box{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        flex: none;
    }
    .helpgent-sidebar__action{
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background-color: var(--helpgent-color-white);
            transition: var(--helpgent-transition);
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-gray);
                    transition: var(--helpgent-transition);
                }
            }
            &:hover{
                background: var(--helpgent-color-primary);
                svg path{
                    fill: #fff;
                }
            }
        }

    }
    .helpgent-sidebar__navigation-wrap{
        justify-content: space-between;
        align-items: center;
    }
    .helpgent-sidebar__quick-action{
        display: flex;
        align-items: center;
        gap: 7px;
        margin-right: -7.5px;
    }
    .helpgent-sidebar__quick-action-link{
        &.helpgent-sidebar__quick-action-refresh{
            padding: 0 7.5px;
            outline: 0;
            line-height: 0;
            svg path{
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
            &:focus{
                outline: 0;
                box-shadow: none;
            }
        }
        &.helpgent-sidebar__quick-action-refreshing{
            animation: helpgentSpinner 400ms infinite linear forwards;
        }
        .helpgent-dropdown__toggle{
            padding: 0 7.5px;
            &:hover{
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
        }
        .helpgent-dropdown__content{
            width: 180px;
            padding: 3px 0;
            right: 0;
            a{
                color: var(--helpgent-color-gray);
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
                &:hover{
                    background: none;
                }
                .helpgent-dropdown-item-icon{
                    margin: 0;
                }
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
        }
    }
    .helpgent-sidebar__navigation{
        display: flex;
        margin: -7.5px;
        a{
            position: relative;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            margin: 7.5px;
            color: var(--helpgent-color-light-gray);
            &.helpgent-active{
                color: var(--helpgent-color-primary);
                &:after{
                    background-color: var(--helpgent-color-primary);
                }
            }
            &:hover{
                color: var(--helpgent-color-primary);
            }
            &:after{
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 100%;
                height: 2px;
                border-radius: 10px;
                content: '';
                background-color: transparent;
            }
        }
    }
    .helpgent-sidebar__archive{
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        .helpgent-sidebar__archive-title{
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-primary);
            display: flex;
            align-items: center;
            gap: 8px;
            svg{
                path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-sidebar__archive-remove{
            cursor: pointer;
            width: 30px;
            height: 30px;
            background: var(--helpgent-color-light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            svg{
                width: 10px;
                height: 10px;
                path{
                    fill: #fff;
                }
            }
        }
    }
    main{
        flex: 1;
        border-radius: 20px;
        margin: 30px 0;
        background-color: var(--helpgent-color-white);
        display: none;
        @media only screen and (max-width: 1199px){
            width: 400px;
        }
        &.helpgent-conversation-main--active{
            width: 100%;
            display: block;
            .helpgent-user-view{
                .helpgent-back-user-list{
                    display: block;
                    margin-right: 15px;
                    cursor: pointer;
                }
            }
        }
    }
`,dn.div`
    &.helpgent-content-loading{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 100%;
        min-height: 500px;
        padding: 30px;
        border-radius: 10px;
        margin: 15px;
        box-sizing: border-box;
        background-color: var(--helpgent-color-white);
        flex: 1 1 0%;
        .helpgent-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            background: #f6f7f8;
            background-image: -webkit-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: -o-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: shimmerEffect;
            animation-timing-function: linear;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
    }
`,dn.div`
    &.helpgent-field-element--inline{
        .helpgent-form-group--has-extension{
            .helpgent-select{
                min-width: auto;
            }

            .helpgent-select__option{
                padding: 4px;
            }

            .helpgent-select__control{
                padding: 0 4px;
                background-color: var(--helpgent-color-white);
            }
            .helpgent-select__value-container{
                width: 25px;
            }
        }
        .helpgent-form-group__extension{
            max-width: 60px;
            .helpgent-select__menu{
                padding: 6px;
            }
            .helpgent-select__control{
                height: 26px;
                min-height: 26px;
            }
            .helpgent-select .helpgent-select__indicator{
                height: auto;
            }
        }
        .helpgent-select {
            .helpgent-select__value-container{
                padding: 0;
            }
            .helpgent-select__indicator{
                width: 16px;
                height: 16px;
                padding-inline-end: 0;
            }
        }
    }
`,dn.div`
    .helpgent-user-block__left{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    .helpgent-user-block__username{
        font-size: 15px;
        font-weight: 500;
        color: #030308;
        margin-right: 8px;
    }
    .helpgent-user-block__date-meta{
        color: var(--helpgent-color-light-gray);
        font-size: 13px;
    }
    .helpgent-user-block__content{
        p{
            font-size; 15px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            margin: 0;
        }
        .helpgent-user-block__content-attachment{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 5px;
        }
    }
`,dn.div`
    padding: 84px 0 0;
    .helpgent-modal-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        background-color: var(--helpgent-color-bg-light);
        .helpgent-btn{
            margin: 0 5px;
        }
        &.helpgent-modal-filter-action{
            .helpgent-modal-action__cancel{
                background: transparent;
                border: 0 none;
                padding: 0;
                color: var(--helpgent-color-light-gray);
                &:hover{
                    color: var(--helpgent-color-dark);
                }
            }
        }
        &.helpgent-delete-alert-modal-action,
        &.helpgent-conversation-delete-action,
        &.helpgent-form-delete-alert-action,
        &.helpgent-response-delete-alert-action,
        &.helpgent-delete-tag-alert-action{
            justify-content: flex-end;
            .helpgent-btn{
                border-radius: 10px;
                min-height: 40px;
            }
        }
    }

    //filter modal
    .helpgent-modal-filter-inner{
        padding: 0 30px 30px;
        .helpgent-modal-filter__tags-label{
            font-size: 16px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin-bottom: 20px;
            display: block;
        }
        .helpgent-modal-filter__tags-list{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            max-height: 170px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .helpgent-modal-filter__tags-item{
            flex: 0 0 50%;
            margin-bottom: 18px;
            .helpgent-checkbox{
                display: flex;
                gap: 12px;
                label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-gray);
                    svg{
                        inset-inline-start: -25px;
                    }
                }
            }
        }
        .helpgent-show-more{
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
            margin-top: 0;
            text-decoration: underline;
            cursor: pointer;
            &--active{
                margin-top: 18px;
            }
        }
    }
    .helpgent-modal-action{}

    .helpgent-session-expired__content{
        margin-top: -84px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        h2{
            margin: 30px 0 20px;
            font-size: 24px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
        }
        p{
            margin: 0 0 50px;
        }
    }
`,dn.div`
    &.helpgent-progress-bar{
        width: 100%;
        height: 6px;
        position: relative;
        border-radius: 20px;
        background-color: var(--helpgent-color-bg-gray);
        .helpgent-progress-bar__status{
            display: block;
            height: 100%;
            width: 50%;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-size: 15px 15px;
            position: relative;
            overflow: hidden;
        }
        &.helpgent-progress-bar-dark{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-dark);
            }
        }
        &.helpgent-progress-bar-primary{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-primary);
            }
        }
        &.helpgent-progress-bar-success{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-success);
            }
        }
        &.helpgent-progress-bar-warning{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-warning);
            }
        }
        &.helpgent-progress-bar-danger{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-danger);
            }
        }
    }
`,dn.div`
    .helpgent-crud-header {
        align-items: center;
        margin-bottom: 30px;
        justify-content: space-between;
        @media only screen and (max-width: 575px){
            flex-wrap: wrap;
        }
    }
    .helpgent-crud-header__left{
        display: flex;
        align-items: center;
        gap: 10px 25px;
        @media only screen and (max-width: 400px){
            flex-wrap: wrap;
        }
    }
    .helpgent-crud-header__title{
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5;
        color: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        .helpgent-count{
            color: var(--helpgent-color-light-gray);
            font-size: 18px;
            font-weight: 500;
        }
    }
    .helpgent-crud-header__right{
        width: 300px;
        .helpgent-form-group{
            margin: 0;
        }
        .helpgent-form-group__element{
            background: var(--helpgent-color-bg-deep);
            border-radius: 10px;
        }
        @media only screen and (max-width: 767px){
            width: 200px;
        }
        @media only screen and (max-width: 575px){
            margin-top: 15px;
            width: 100%;
        }
    }
    .helpgent-crud-main{
        padding: 20px;
        border-radius: 12px;
        background-color: var(--helpgent-color-white);
        margin-bottom: 30px;
    }
`,dn.table`
    &.helpgent-table {
        display: table;
        border-collapse: collapse;
        width: 100%;
        text-align: start;
        border-spacing: 0;
        border-collapse: inherit;
        empty-cells: show;
        margin-bottom: 0;
        margin-top: 0;
        overflow: visible;
        border-spacing: 0 10px;
        margin-top: -10px;

        thead {
            border-radius: 6px;
            border-bottom: 10px solid transparent;
            tr {
                background: var(--helpgent-color-bg-deep);
                border-radius: 10px;
                transition: var(--helpgent-transition);
                &.helpgent-head-bulk-action{
                    background: #efd9c1;
                    .helpgent-form-bulk-action-wrapper{
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        text-transform: capitalize;
                        letter-spacing: normal;
                    }
                    .helpgent-form-bulk-action{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .helpgent-form-bulk-clear-selection{
                        color: #C96C00;
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 600;
                    }
                    .helpgent-form-bulk-action-info{
                        min-width: 111px;
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                        strong{
                            font-weight: 600;
                            color: var(--helpgent-color-dark);
                        }
                    }
                    .helpgent-form-bulk-action__more{
                        position: relative;
                        .helpgent-btn{
                            padding-inline-start: 9px;
                            padding-inline-end: 9px;
                        }
                    }
                    .helpgent-form-bulk-action__dropdown{
                        position: absolute;
                        left: -10px;
                        top: 100%;
                        border: 1px solid #ecedee;
                        background: #fff;
                        min-width: 140px;
                        border-radius: 10px;
                        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
                        list-style: none;
                        margin: 0;
                        padding: 8px 0;
                        display: flex;
                        flex-direction: column;
                        z-index: 999;
                        li{
                            margin: 0;
                            padding: 0;
                        }
                        a{
                            text-decoration:none;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            font-size: 14px;
                            font-weight: 500;
                            color: var(--helpgent-color-gray);
                            padding: 12px 20px;
                            transition: var(--helpgent-transition);
                            &:hover{
                                background: var(--helpgent-color-bg-light);
                            }
                        }
                    }
                }
                th {
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    padding: 16px 15px;
                    text-align: start;
                    color: var(--helpgent-color-light-gray);
                    @media only screen and (max-width: 1399px){
                        padding: 16px 5px 10px;
                    }
                }
                &.helpgent-head-bulk-action{
                    th{
                        padding: 8px 15px;
                        @media only screen and (max-width: 1399px){
                            padding: 8px 5px 8px;
                        }
                        &.helpgent-head-checkbox{
                            padding-right: 0;
                        }
                    }
                }
                @media only screen and (max-width: 1399px){
                    th:first-child{
                        padding-left: 15px;
                    }
                    th:last-child{
                        padding-right: 15px;
                    }
                }
            }
        }

        tbody {
            tr {
                td {
                    font-size: 14px;
                    font-weight: 500;
                    padding: 20px 14px;
                    &:last-child{
                        padding-right: 21px;
                    }
                    @media only screen and (max-width: 1399px){
                        padding: 11px 5px;
                    }
                }

                @media only screen and (max-width: 1399px){
                    td:first-child{
                        padding-left: 15px;
                    }
                    td:last-child{
                        padding-right: 15px;
                    }
                }
            }
        }

        tr {
            th,
            td {
                display: table-cell;
                &:first-child {
                    border-radius: 12px 0 0 12px;
                }

                &:last-child {
                    border-radius: 0 12px 12px 0;
                }
            }
        }
    }
    .helpgent-table-action {
        display: flex;
        align-items: center;
        gap: 0 20px;
        @media only screen and (max-width: 1399px){
            gap: 0 10px;
        }
        .helpgent-btn{
            padding: 0 15px;
            min-height: 34px;
            font-size: 14px;
            font-weight: 500;
            gap: 8px;
            color: var(--helpgent-color-gray);
            white-space: nowrap;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-light-gray);
                    transition: var(--helpgent-transition);
                }
            }

            &:hover{
                background: var(--helpgent-color-dark);
                color: var(--helpgent-color-white);
                border-color: var(--helpgent-color-dark);
                svg path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        .helpgent-dropdown{
            line-height: 0;
            .helpgent-dropdown__toggle{
                height: 35px;
                padding: 0 10px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                &::before{
                    content: attr(data-tooltip);
                    position: absolute;
                    right: 0;
                    top: calc(100% + 4px);
                    width: 160px;
                    line-height: 30px;
                    padding: 0 10px;
                    background: var(--helpgent-color-dark);
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #fff;
                    display: none;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: 8px;
                    top: calc(100% + 1px);
                    transform: translateX(-50%) rotate(45deg);
                    width: 9px;
                    height: 9px;
                    border-radius: 2px;
                    background: var(--helpgent-color-dark);
                    display: none;
                }
                &:hover{
                    &::before,
                    &::after{
                        display: block;
                    }
                }
                &:active,
                &:focus{
                    &::before,
                    &::after{
                        display: none;
                    }
                }
            }
            &.helpgent-dropdown-open{
                .helpgent-dropdown__toggle{
                    background: var(--helpgent-color-bg-deep);
                }
            }
            &__content{
                min-width: 240px;
                box-sizing: border-box;
                padding: 12px;
                li{
                    margin-bottom: 0;
                    a{
                        padding: 13px 15px;
                        gap: 12px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                    .helpgent-dropdown-item-icon{
                        line-height: 0;
                        margin: 0;
                    }
                    .helpgent-dropdown-item-icon svg{
                        width: 16px;
                        height: 16px;
                        path{
                            fill: var(--helpgent-color-light-gray);
                        }
                    }
                    &:hover{
                        a{
                            background: var(--helpgent-color-bg-gray);
                            color: var(--helpgent-color-dark);
                            svg{
                                path, circle{
                                    fill: var(--helpgent-color-dark);
                                }
                            }
                        }
                    }
                }
                li:last-child{
                    border-top: 1px solid #e6e6e6;
                    a{
                        margin-top: 5px;
                    }
                }
                li:nth-last-child(2){
                    a{
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
    .helpgent-table{
        &.helpgent-table-striped{
            background-color: var(--helpgent-color-white);
            thead {
                background-color: transparent;
                tr {
                    th{
                        padding: 10px 0;
                        border-bottom: 1px solid var(--helpgent-color-border-light);
                    }
                }
            }
            tbody{
                tr{
                    td{
                        padding: 10px 0;
                    }
                    &:not(:last-child){
                        td{
                            border-bottom: 1px solid var(--helpgent-color-border-light);
                        }
                    }
                }
            }
        }
    }
`,dn.div`
    cursor: pointer;
    &.helpgent-chat-bubble{
        position: absolute;
        bottom: var(--helpgent-bubble-offset-y);
        background: var(--helpgent-bubble-bg-color);
        border: 4px solid var(--helpgent-bubble-border-color);
        //transition: var(--helpgent-transition);
        box-shadow: var(--helpgent-bubble-box-shadow);
        overflow: hidden;
        box-sizing: border-box;
        z-index: 9999;
        .helpgent-chat-bubble__overlay-text{
            display: flex;
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 15px 28px;
            font-size: 15px;
            font-weight: 700;
            box-sizing: border-box;
            text-align: left;
            align-items: center;
            justify-content: center;
            word-break: break-word;
            word-wrap: break-word;
            z-index: 2;
            color: var(--helpgent-color-white);
            line-height: 1.2;

        }
        &--left{
            left: var(--helpgent-bubble-offset-x);
        }
        &--right{
            right: var(--helpgent-bubble-offset-x);
        }
        &--circle{
            border-radius: 50%;
        }
        &--small{
            width: 100px;
            height: 100px;
            .helpgent-chat-bubble__overlay-text{
                font-size: 13px;
                padding: 15px 18px;
            }
            @media only screen and (max-width: 575px){
                width: 65px;
                height: 65px;
            }
        }
        &--medium{
            width: 130px;
            height: 130px;
            @media only screen and (max-width: 575px){
                width: 70px;
                height: 70px;
            }
        }
        &--large{
            width: 150px;
            height: 150px;
            .helpgent-chat-bubble__overlay-text{
                font-size: 18px;
                padding: 15px 30px;
            }
            @media only screen and (max-width: 575px){
                width: 80px;
                height: 80px;
            }
        }
        &--boxed-horizontal{
            width: 180px;
            border-radius: 10px;
            @media only screen and (max-width: 575px){
                width: 100px;
            }
        }
        &--boxed-vertical{
            height: 180px;
            border-radius: 10px;
            @media only screen and (max-width: 575px){
                height: 100px;
            }
        }
        .helpgent-chat-bubble__background{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            left: 0;
            top: 0;
            &:after{
                position: absolute;
                content: '';
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border-radius: inherit;
                background: rgba(0,0,0,0.32);
            }
            &--image{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--video{
                video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--placeholder{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--colored{
                &:after{
                    content: none;
                }
            }
        }
    }
`,dn.div`
    box-sizing: border-box;
    width: 174px;
    white-space: nowrap;
    @media only screen and (max-width: 575px){
        flex: 0 0 100%;
        width: 100%;
    }
    .helpgent-copyright__button{
        font-size: 12px;
        font-weight: 600;
        font-family: Inter, Sans-serif;
        color: #707070;
        background: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 6px;
        transition: var(--helpgent-transition);
        height: 36px;
        text-decoration: none;
        padding: 0 14px;
        svg{
            width: 80px;
            height: 18px;
        }
        &:hover{
            background: #3a3a3a;
        }
        @media only screen and (max-width: 575px){
            border-radius: 0 0 20px 20px;
        }
    }
`,dn.div`
    padding: 0 30px 25px;
    .helpgent-delete-alert-text{
        p{
            font-size: 14px;
            color: var(--helpgent-color-gray);
            margin: 0 0 27px;
        }
    }
`,dn.div`
    padding: 0 40px 40px;
    text-align: center;
    .helpgent-badge-extended{
        width: fit-content;
        line-height: 1.4;
        padding: 3px 6px;
        margin: 0 auto;
    }
    .helpgent-pro-modal__title{
        font-size: 22px;
        font-weight: 600;
        margin: 20px 0 18px;
        color: var(--helpgent-color-dark);
    }
    p{
        font-size: 15px;
        font-weight: 400;
        margin: 0 0 40px;
        color: var(--helpgent-color-text);
    }
    .helpgent-pro-modal__bottom{
        display: flex;
        flex-direction: column;
        button{
            border-radius: 10px;
            text-align: center;
            justify-content: center;
        }
        .helpgent-btn-link{
            font-size: 15px;
            font-weight: 500;
            background-color: transparent;
            box-shadow: 0 0;
            border: 0 none;
            margin-top: 15px;
            cursor: pointer;
            color: var(--helpgent-color-light-gray);
            &:hover{
                color: var(--helpgent-color-primary);
            }
        }
    }
`,dn.div`
    &.helpgent-answer-loading{
        .helpgent-navigation,
        .helpgent-chatForm-back-btn,
        .helpgent-chatForm-close-btn,
        .helpgent-element-element-wrapper{
            user-select: none;
            pointer-events: none;
            opacity: .5 !important;
        }
        .helpgent-preview-container{
            position: relative;
        }
        .helpgent-element-element-wrapper{
            &:after{
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                opacity: .3;
                content: '';
                background-color: var(--helpgent-color-white);
            }
        }
        .helpgent-client .helpgent-element-element .helpgent-element-element__uploader,
        .helpgent-client .helpgent-element-element input,
        .helpgent-client .helpgent-element-element textarea,
        .helpgent-client .helpgent-element-element input:not(.helpgent-form-group__element--date){
            pointer-events: none;
        }
        .helpgent-element-element input.components-form-toggle__input{
            pointer-events: none !important;
        }
    }
    .helpgent-chat-form-loader-wrap{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .helpgent-chat-form-loader{
        position: relative;
        width: 164px;
        height: 164px;
        display: block;
        border-radius: 50%;
        margin: 0 auto 40px;
        &:after{
            content: "";
            position: absolute;
            top: 3px;
            left: 3px;
            width: 158px;
            height: 158px;
            border-radius: 50%;
            background-color: white;
        }
        &:before{
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-image: linear-gradient(
                90deg,
                #6551f2 0%,
                transparent 0%,
                transparent
            ),
            linear-gradient(270deg, #6551f2 50%, #e8e8e8 50%, #e8e8e8);
            animation: helpgentSpinner 900ms infinite linear forwards;
            content: "";
        }
        span{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 16px;
            font-weight: 600;
            z-index: 101;
        }
    }
    .helpgent-chatForm-back-btn,
    .helpgent-chatForm-close-btn{
        position: absolute;
        right: -13px;
        top: -15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: var(--helpgent-color-dark);
        z-index: 2;
        transition: var(--helpgent-transition);
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-chatForm-close-btn{
        &:hover{
            background: var(--helpgent-color-danger);
        }
    }
    .helpgent-chatForm-back-btn{
        right: auto;
        left: 0;
        top: 0;
        background-color: #e9e9e9;
        width: 40px;
        height: inherit;
        border-radius: 17px 0 0 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;
        transition: none;
        svg{
            width: 14px;
            path{
                fill: var(--helpgent-color-gray);
            }
        }
        @media only screen and (max-width: 575px){
            width: 34px;
            height: 34px;
            border-radius: 50%;
            left: 15px;
            top: 15px;
        }

        &--open-ended{
            @media only screen and (max-width: 575px){
                height: inherit;
                left: 0;
                top: 0;
                border-radius: 20px 0 0 20px;
                z-index: 99;
            }
        }
    }
    .helpgent-element-element-wrapper--user_validation,
    .helpgent-element-element-wrapper--date,
    .helpgent-element-element-wrapper--long_text,
    .helpgent-element-element-wrapper--short_text,
    .helpgent-element-element-wrapper--email,
    .helpgent-element-element-wrapper--dropdown,
    .helpgent-element-element-wrapper--multi_select,
    .helpgent-element-element-wrapper--single_select{
        .helpgent-validate-danger{
            display: block;
        }
    }
`,dn.div`
    .helpgent-element-element__label-text{
        font-size: var(--helpgent-label-font-size);
        font-weight: var(--helpgent-label-font-weight);
        font-family: inherit;
        color: var(--helpgent-label-color);
        line-height: 1.2;
    }

    .helpgent-element-element__description{
        .helpgent-element-element__label-text{
            font-size: var(--helpgent-description-font-size);
            font-weight: var(--helpgent-description-font-weight);
            font-family: inherit;
            color: var(--helpgent-description-color);
        }
        p{
            margin: 0;
        }
    }

    .helpgent-element-element__label-text p{
        font-size: var(--helpgent-label-font-size);
        font-weight: var(--helpgent-label-font-weight);
        color: var(--helpgent-label-color);
        font-family: inherit;
        line-height: 1.5;
        margin:0;
    }
    .helpgent-element-element__description-text{
        margin-top: 6px;
    }
    .helpgent-element-element__description-text,
    .helpgent-element-element__description-text p{
        font-size: var(--helpgent-description-font-size);
        font-weight: var(--helpgent-description-font-weight);
        color: var(--helpgent-description-color);
        font-family: inherit;
    }
`;const un=dn.div`
    position: relative;
    &.helpgent-active{
        .components-datetime__date{
            display: block;
            @media only screen and (max-width: 400px){
                left: 0;
                top: 0 !important;
                width: 100%;
            }
        }
    }
    .helpgent-form-group{
        margin-bottom: 8px;
    }
    .components-datetime__date{
        position: fixed;
        display: none;
        width: 320px;
        padding: 25px 24px;
        border-radius: var(--helpgent-input-radius);
        box-shadow: 0 5px 30px rgba(0,0,0,.10);
        background-color: var(--helpgent-color-white);
        z-index: 100;
    }
    .components-h-stack{
        .components-button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            min-width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: var(--helpgent-color-bg-light) !important;
            border: 0 none;
            transition: var(--helpgent-transition);
            &:hover,
            &:focus{
                box-shadow: 0 0;
                outline: none;
                background-color: var(--helpgent-color-primary) !important;
                svg{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        .components-heading {
            font-size: 1rem;
            font-weight: 600;
            color: var(--helpgent-color-gray);
        }
        svg{
            width: 12px;
            height: 12px;
            fill: var(--helpgent-color-gray);
            transition: var(--helpgent-transition);
        }
        & + div{
            div{
                font-size: .8rem;
                font-weight: 500;
                margin-bottom: 12px;
                color: var(--helpgent-color-gray);
            }
        }
    }
    .components-datetime__date{
        .components-datetime__date__day.components-button {
            font-size: .87rem;
            border-radius: 6px;
            height: calc(32px);
            width: calc(32px);
            color: var(--helpgent-color-gray);
            background-color: var(--helpgent-color-bg-gray);
            border: 0 none;
            &:hover,
            &:focus{
                color: var(--helpgent-color-white);
                background-color: var(--helpgent-color-primary);
            }
            @media only screen and (max-width: 380px){
                padding: 0;
                height: 25px;
                width: 25px;
            }
        }
    }
`,hn=dn.div`
    display: flex;
    align-items: center;
    gap: 1px;
    margin-left: auto;
    @media only screen and (max-width: 575px){
        margin-right: 20px;
        margin-bottom: 10px;
        gap: 10px;
    }
    button{
        background-color: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 0;
        margin: 0;
        box-shadow: none;
        border: 0 none;
        cursor: pointer;
        svg{
            flex: none;
            width: 12px;
            height: 12px;
            path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
        }
        &.helpgent-disabled{
            pointer-events: none;
            svg{
                path{
                    fill: rgba(255,255,255,0.4);
                }
            }
        }
        &:not(:hover):not(:active):not(.has-background){
            background-color: var(--helpgent-color-dark);
        }
    }
    .helpgent-navigation__left{
        border-radius: 5px 0 0 5px;
        @media only screen and (max-width: 575px){
            border-radius: 8px;
        }
    }
    .helpgent-navigation__right{
        border-radius: 0 5px 5px 0;
        @media only screen and (max-width: 575px){
            border-radius: 8px;
        }
    }
`,gn=(dn.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 138px;
    border-radius: var(--helpgent-large-component-radius);
    margin-top: 5px;
    background-color: #F7F7F7;
    border: 2px dashed var(--helpgent-color-bg-gray);
    padding: 20px;
    text-align: center;
    cursor: pointer;
    position: relative;

    &.helpgent-uploader-drag-enter {
        border-color: #000;
    }

    .helpgent-uploader-label{
        display: flex;
        font-size: .93rem;
        font-weight: 400;
        margin-top: 20px;
        color: var(--helpgent-color-dark);
        word-wrap: break-word;
        word-break: break-word;
    }
    .helpgent-uploader-size-limit{
        display: inline-block;
        font-size: .8rem;
        margin-top: 6px;
        color: var(--helpgent-color-light-gray);
        word-wrap: break-word;
        word-break: break-word;
    }
    &+.helpgent-btn{
        margin-top: 20px;
    }

    .helpgent-uploaded-files {
        margin-top: 20px;
    }

    .helpgent-uploaded-file-thumbnail {
        width: 40px;
        height: 40px;
        img {
            width: 100%;
        }
    }
    input[type="file"]{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        opacity: 0;
    }

    .mt-0 {
        margin-top: 0px;
    }
`,dn.div`
    .helpgent-pagination{
        display: flex;
        gap: 6px;
        .helpgent-pagination__item{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: 0;
            &.disabled{
                .helpgent-pagination__link{
                    pointer-events: none;
                    opacity: .7;
                    svg{
                        opacity: .7;
                    }
                }
            }
        }
        .helpgent-pagination__link{
            min-width: 32px;
            min-height: 32px;
            font-size: 14px;
            text-decoration: none;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-width: 1px;
            border-style: solid;
            border: 1px solid var(--helpgent-color-border-light);
            color: var(--helpgent-color-gray);
            line-height: normal;
            background-color: var(--helpgent-color-white);
            svg{
                width: 7.5px;
            }
            &[role=button]{
                cursor: pointer;
            }
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
            &:hover,
            &.helpgent-pagination__active{
                color: var(--helpgent-color-white);
                background-color: var(--helpgent-color-primary);
                border-color: var(--helpgent-color-primary);
                svg path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
    }
`,dn.div`
    position: relative;
    padding-top: 20px;
    .helpgent-profile-drawer-close{
        position: absolute;
        right: 20px;
        top: 20px;
        min-width: 16px;
        min-height: 16px;
        text-align: center;
        z-index: 10;
        cursor: pointer;
        &:hover{
            svg{
                path{
                    fill: var(--helpgent-color-danger);
                }
            }
        }
        svg{
            width: 12px;
            height: 12px;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }
    .helpgent-admin-info__picture{
        .helpgent-image-loader,
        img{
            height: 80px;
            width: 80px;
            border-radius: 50%;
        }
    }
    .helpgent-admin-info-top{
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        margin-bottom: 20px;
        margin: 0 25px 20px;
        border-bottom: 1px solid var(--helpgent-color-bg-deep);
        span{
            display: inline-block;
            margin-bottom: 5px;
        }
    }
    .helpgent-admin-info-bottom{
        margin: 0 25px 0;
        .helpgent-admin-info__title{
            font-size: 15px;
            font-weight: 500;
            margin: 0 0 10px;
            font-family: var(--helpgent-font-family);
            color: var(--helpgent-color-dark);
        }
        p{
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            color: var(--helpgent-color-dark);
        }
    }
    .helpgent-admin-info__name{
        font-size: 18px;
        font-weight: 600;
        margin-top: 12px;
        color:  var(--helpgent-color-dark);
    }
    .helpgent-admin-info__email,
    .helpgent-admin-info__joined-date{
        font-size: 14px;
        font-weight: 400;
        color: var(--helpgent-color-gray);
    }
    .helpgent-admin-info--guest-self{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .helpgent-image-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
    }
    .helpgent-admin-info--guest-cta{
        padding: 20px;
        border-radius: 12px;
        margin: 20px 25px;
        background-color: rgba(242,129,0,.10);
        p{
            font-size: 14px;
            margin: 0;
            color: var(--helpgent-color-gray);
        }
    }
    .helpgent-admin-info--guest-cta__title{
        font-size: 15px;
        font-weight: 600;
        display: inline-block;
        margin: 0 0 10px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-admin-info--guest-cta__list{
        padding: 0;
        margin: 0 0 20px;
        list-style: none;
        li{
            font-size: 14px;
            font-weight: 400;
            padding-left: 16px;
            position: relative;
            color: var(--helpgent-color-gray);
            &:not(:last-child){
                margin-bottom: 8px;
            }
            &:before{
                position: absolute;
                left: 0;
                top: 7px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                content: '';
                background-color: var(--helpgent-color-warning);
            }
        }
    }
    .helpgent-admin-info--guest-cta-btn{
        border-radius: 10px;
        min-height: 40px;
        margin-top: 14px;
    }
    .helpgent-profile-action{
        margin: 0 20px;
        &.helpgent-has-border{
            padding-top: 20px;
            margin-top: 20px;
            border-top: 1px solid var(--helpgent-color-bg-gray);
        }
        button + button{
            margin-top: 20px;
        }
        .helpgent-btn.helpgent-btn-sm{
            color: var(--helpgent-color-gray);
            min-height: 36px;
        }
    }
`,dn.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: fit-content;
    padding: 4px;
    background-color: var(--helpgent-color-white);
    .helpgent-tab-single{
        font-size: 14px;
        font-weight: 500;
        padding: 7px 14px;
        border-radius: 8px;
        cursor: pointer;
        color: var(--helpgent-color-light-gray);
        &:hover{
            color: var(--helpgent-color-primary);
        }
        &.helpgent-active{
            color: var(--helpgent-color-white);
            background-color: var(--helpgent-color-primary);
        }
    }
`,dn.div`
    .helpgent-user-location-input{
        .helpgent-input-icon-close{
            position: absolute;
            right: 16px;
            top: 52%;
            line-height: 1;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
    .helpgent-map-wrapper{
        height: 413px;
        width: 100%;
        border-radius: 16px;
    }
    .helpgent-user-location + .helpgent-map-wrapper{
        margin-top: 20px;
    }
    .gm-style iframe + div {
        border: none !important;
    }
`,window.wp.i18n);new function(){this.formatTimeData=(e,t)=>{const n=e=>{if(!e||e&&"string"!=typeof e)return null;const t=e.split(":"),n=parseInt(t[0]);return(n>0?60*n:0)+parseInt(t[1])};return{fieldValue:{startTimeInMinutes:e?n(e.start):null,endTimeInMinutes:e?n(e.end):null},logicValue:{startTimeInMinutes:t?n(t.start):null,endTimeInMinutes:t?n(t.end):null}}}};var fn=n(5556),mn=n.n(fn);const xn=({id:t,name:n,label:o,useLabelFor:r,value:i,checked:a,onChange:l,disabled:p,currentCheckboxId:s,loader:c,indeterminate:d,isFormElement:u,register:h,required:g})=>(0,e.createElement)("div",{className:"helpgent-checkbox "+(d?"helpgent-checkbox--indeterminate":"")},s===t&&c?(0,e.createElement)("span",{className:"helpgent-circle-loader"}):(0,e.createElement)("input",{type:"checkbox",id:t,name:n,value:i,checked:a,onChange:l,disabled:p?"disabled":"",...u?h(n,{required:{value:"1"===g.isActive,message:(0,gn.__)("The field is required","helpgent")}}):{}}),(0,e.createElement)("label",{htmlFor:r?t:""}," ",(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNC42NDQiIGhlaWdodD0iMjUuNTI4IiB2aWV3Qm94PSIwIDAgMzQuNjQ0IDI1LjUyOCI+CiAgPHBhdGggaWQ9IlBhdGhfNiIgZGF0YS1uYW1lPSJQYXRoIDYiIGQ9Ik0xNjEuNTc4LDEzNy4wN2EzLjY0NiwzLjY0NiwwLDAsMC01LjE1NywwbC0xNS42NTYsMTUuNjU0LTYuNTM5LTYuNTM3YTMuNjQ2LDMuNjQ2LDAsMSwwLTUuMTU3LDUuMTU3bDkuMTE3LDkuMTE3YTMuNjQ1LDMuNjQ1LDAsMCwwLDUuMTU3LDBsMTguMjM0LTE4LjIzNEEzLjY0NiwzLjY0NiwwLDAsMCwxNjEuNTc4LDEzNy4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAyIC0xMzYuMDAyKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"})," ",o," "));xn.defaultProps={id:"",name:"",label:"",value:"",useLabelFor:!0,checked:!1,disabled:!1,currentCheckboxId:"",loader:!1,isFormElement:!1,register:null,required:null},xn.propTypes={id:mn().string,name:mn().string,label:mn().string,value:mn().string,useLabelFor:mn().bool,checked:mn().bool,onChange:mn().func,disabled:mn().bool,currentCheckboxId:mn().string,loader:mn().bool,isFormElement:mn().bool,register:mn().func,required:mn().object};const vn=window.wp.components,bn=t=>{const{handleChangeDate:n,date:r,placeholder:i,validation:a,register:l,errors:p,clearErrors:s,isClientModeActive:c,featureState:d,setFeatureState:u}=t,[h,g]=(0,o.useState)(!1),f=(0,o.useRef)(null);return document.addEventListener("scroll",(function(){const e=document.querySelectorAll(".helpgent-datepicker");e.length&&e.forEach((e=>{const t=e.getBoundingClientRect(),n=e.querySelector(".components-datetime__date");n&&(n.style.top=`${t.top+55}px`)}))})),(0,o.useEffect)((()=>{!function(e,t,n){document.addEventListener("mousedown",(o=>{e&&n.current&&!n.current.contains(o.target)&&t(!1)}))}(h,g,f)}),[h]),(0,e.createElement)(un,{className:h?"helpgent-datepicker helpgent-active":"helpgent-datepicker",ref:f},(0,e.createElement)("div",{className:"helpgent-form helpgent-form-group helpgent-form-icon-right helpgent-mb-0"},(0,e.createElement)("span",{className:"helpgent-input-icon"},(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iY2FsZW5kYXJfMV8iIGRhdGEtbmFtZT0iY2FsZW5kYXIgKDEpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iUGF0aF8xNTE0IiBkYXRhLW5hbWU9IlBhdGggMTUxNCIgZD0iTTEyLjY2NywxLjMzM0gxMlYuNjY3YS42NjcuNjY3LDAsMSwwLTEuMzMzLDB2LjY2N0g1LjMzM1YuNjY3QS42NjcuNjY3LDAsMCwwLDQsLjY2N3YuNjY3SDMuMzMzQTMuMzM3LDMuMzM3LDAsMCwwLDAsNC42Njd2OEEzLjMzNywzLjMzNywwLDAsMCwzLjMzMywxNmg5LjMzM0EzLjMzNywzLjMzNywwLDAsMCwxNiwxMi42Njd2LThBMy4zMzcsMy4zMzcsMCwwLDAsMTIuNjY3LDEuMzMzWk0xLjMzMyw0LjY2N2EyLDIsMCwwLDEsMi0yaDkuMzMzYTIsMiwwLDAsMSwyLDJ2LjY2N0gxLjMzM1ptMTEuMzMzLDEwSDMuMzMzYTIsMiwwLDAsMS0yLTJ2LTZIMTQuNjY3djZBMiwyLDAsMCwxLDEyLjY2NywxNC42NjdaIiBmaWxsPSIjYTJhMmEyIi8+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yNzEiIGRhdGEtbmFtZT0iRWxsaXBzZSAyNzEiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41IDguMzU3KSIgZmlsbD0iI2EyYTJhMiIvPgogIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMjcyIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjcyIiBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNDA1IDguMzU3KSIgZmlsbD0iI2EyYTJhMiIvPgogIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMjczIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjczIiBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuNTk1IDguMzU3KSIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K"})),(0,e.createElement)("input",{type:"text",className:"helpgent-form-group__element helpgent-form-group__element--date",placeholder:i,value:r.value,onClick:e=>{var t;t=e,c&&(g(!0),function(e){const t=e.target.closest(".helpgent-datepicker"),n=(t.clientWidth,t.getBoundingClientRect()),o=document.innerWidth;t.setAttribute("style",`\n\t\t\t--helpgent-dropdown-top: ${n.top+55}px;\n\t\t\t--helpgent-dropdown-left: calc(${n.right}px - 140px);\n\t\t\t--helpgent-dropdown-right: calc(100% - ${n.right}px - 140px);\n\t\t`),setTimeout((()=>{const e=t.querySelector(".components-datetime__date"),r=window.innerHeight,i=e.clientHeight;let a=n.top+55;a+i>r&&(a=n.top-i-20,e.classList.contains("helpgent-mega-dropdown")?a=35:e.classList.contains("components-datetime__date")&&(o<768?a=105:a+=10)),e.style.top=`${a}px`,e.style.right=`calc(100% - ${n.right}px - 140`}),0)}(t))},readOnly:!0,...c?l("date",{required:{value:"1"===a.isActive,message:(0,gn.__)("The date field is required","helpgent")}}):{}})),(0,e.createElement)(vn.DatePicker,{onChange:e=>{n(e),g(!1)}}))};bn.defaultProps={},bn.propTypes={};var yn=n(85505),wn=n(9506),kn=n(50539),Mn=n(27714);const Sn=window.ReactDOM;var En=n.n(Sn);function Cn(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function On(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function jn(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function Tn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==r){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=Cn,t.componentWillReceiveProps=On),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=jn;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,o)}}return e}function Pn(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}Cn.__suppressDeprecationWarning=!0,On.__suppressDeprecationWarning=!0,jn.__suppressDeprecationWarning=!0;var Dn=n(32223),Nn=n.n(Dn);function Ln(e,t,n,o){var r=En().unstable_batchedUpdates?function(e){En().unstable_batchedUpdates(n,e)}:n;return Nn()(e,t,r,o)}function zn(e){return zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zn(e)}function An(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function In(e,t){return In=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},In(e,t)}function Rn(e){return Rn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Rn(e)}var Hn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&In(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Rn(o);if(r){var n=Rn(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==zn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=i.call.apply(i,[this].concat(n))).removeContainer=function(){e.container&&(En().unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.renderComponent=function(t,n){var o=e.props,r=o.visible,i=o.getComponent,a=o.forceRender,l=o.getContainer,p=o.parent;(r||p._component||a)&&(e.container||(e.container=l()),En().unstable_renderSubtreeIntoContainer(p,i(t),e.container,(function(){n&&n.call(this)})))},e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}])&&An(t.prototype,n),a}(t().Component);function Fn(e){return Fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fn(e)}function Wn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Vn(e,t){return Vn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Vn(e,t)}function Yn(e){return Yn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Yn(e)}Hn.propTypes={autoMount:mn().bool,autoDestroy:mn().bool,visible:mn().bool,forceRender:mn().bool,parent:mn().any,getComponent:mn().func.isRequired,getContainer:mn().func.isRequired,children:mn().func.isRequired},Hn.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};var Un=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Vn(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Yn(o);if(r){var n=Yn(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==Fn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(e){var t=this.props.didUpdate;t&&t(e)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?En().createPortal(this.props.children,this._container):null}}])&&Wn(t.prototype,n),a}(t().Component);Un.propTypes={getContainer:mn().func.isRequired,children:mn().node.isRequired,didUpdate:mn().func};var Bn=n(46942),$n=n.n(Bn);function Gn(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function Zn(e,t){this[e]=t}var qn,Qn=n(97588);function Xn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xn(Object(n),!0).forEach((function(t){eo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Jn(e){return Jn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jn(e)}function eo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var to={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function no(){if(void 0!==qn)return qn;qn="";var e=document.createElement("p").style;for(var t in to)t+"Transform"in e&&(qn=t);return qn}function oo(){return no()?"".concat(no(),"TransitionProperty"):"transitionProperty"}function ro(){return no()?"".concat(no(),"Transform"):"transform"}function io(e,t){var n=oo();n&&(e.style[n]=t,"transitionProperty"!==n&&(e.style.transitionProperty=t))}function ao(e,t){var n=ro();n&&(e.style[n]=t,"transform"!==n&&(e.style.transform=t))}var lo,po=/matrix\((.*)\)/,so=/matrix3d\((.*)\)/;function co(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function uo(e,t,n){var o=n;if("object"!==Jn(t))return void 0!==o?("number"==typeof o&&(o="".concat(o,"px")),void(e.style[t]=o)):lo(e,t);for(var r in t)t.hasOwnProperty(r)&&uo(e,r,t[r])}function ho(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function go(e){return ho(e)}function fo(e){return ho(e,!0)}function mo(e){var t=function(e){var t,n,o,r=e.ownerDocument,i=r.body,a=r&&r.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),o=Math.floor(t.top),{left:n-=a.clientLeft||i.clientLeft||0,top:o-=a.clientTop||i.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=go(o),t.top+=fo(o),t}function xo(e){return null!=e&&e==e.window}function vo(e){return xo(e)?e.document:9===e.nodeType?e:e.ownerDocument}var bo=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),yo=/^(top|right|bottom|left)$/,wo="currentStyle",_o="runtimeStyle",ko="left";function Mo(e,t){return"left"===e?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function So(e){return"left"===e?"right":"right"===e?"left":"top"===e?"bottom":"bottom"===e?"top":void 0}function Eo(e,t,n){"static"===uo(e,"position")&&(e.style.position="relative");var o=-999,r=-999,i=Mo("left",n),a=Mo("top",n),l=So(i),p=So(a);"left"!==i&&(o=999),"top"!==a&&(r=999);var s="",c=mo(e);("left"in t||"top"in t)&&(s=function(e){return e.style.transitionProperty||e.style[oo()]}(e)||"",io(e,"none")),"left"in t&&(e.style[l]="",e.style[i]="".concat(o,"px")),"top"in t&&(e.style[p]="",e.style[a]="".concat(r,"px")),co(e);var d=mo(e),u={};for(var h in t)if(t.hasOwnProperty(h)){var g=Mo(h,n),f="left"===h?o:r,m=c[h]-d[h];u[g]=g===h?f+m:f-m}uo(e,u),co(e),("left"in t||"top"in t)&&io(e,s);var x={};for(var v in t)if(t.hasOwnProperty(v)){var b=Mo(v,n),y=t[v]-c[v];x[b]=v===b?u[b]+y:u[b]-y}uo(e,x)}function Co(e,t){for(var n=0;n<e.length;n++)t(e[n])}function Oo(e){return"border-box"===lo(e,"boxSizing")}"undefined"!=typeof window&&(lo=window.getComputedStyle?function(e,t,n){var o=n,r="",i=vo(e);return(o=o||i.defaultView.getComputedStyle(e,null))&&(r=o.getPropertyValue(t)||o[t]),r}:function(e,t){var n=e[wo]&&e[wo][t];if(bo.test(n)&&!yo.test(t)){var o=e.style,r=o[ko],i=e[_o][ko];e[_o][ko]=e[wo][ko],o[ko]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[ko]=r,e[_o][ko]=i}return""===n?"auto":n});var jo=["margin","border","padding"],To=-1,Po=2,Do=1;function No(e,t,n){var o,r,i,a=0;for(r=0;r<t.length;r++)if(o=t[r])for(i=0;i<n.length;i++){var l;l="border"===o?"".concat(o).concat(n[i],"Width"):o+n[i],a+=parseFloat(lo(e,l))||0}return a}var Lo={getParent:function(e){var t=e;do{t=11===t.nodeType&&t.host?t.host:t.parentNode}while(t&&1!==t.nodeType&&9!==t.nodeType);return t}};function zo(e,t,n){var o=n;if(xo(e))return"width"===t?Lo.viewportWidth(e):Lo.viewportHeight(e);if(9===e.nodeType)return"width"===t?Lo.docWidth(e):Lo.docHeight(e);var r="width"===t?["Left","Right"]:["Top","Bottom"],i="width"===t?Math.floor(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().height),a=Oo(e),l=0;(null==i||i<=0)&&(i=void 0,(null==(l=lo(e,t))||Number(l)<0)&&(l=e.style[t]||0),l=Math.floor(parseFloat(l))||0),void 0===o&&(o=a?Do:To);var p=void 0!==i||a,s=i||l;return o===To?p?s-No(e,["border","padding"],r):l:p?o===Do?s:s+(o===Po?-No(e,["border"],r):No(e,["margin"],r)):l+No(e,jo.slice(o),r)}Co(["Width","Height"],(function(e){Lo["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],Lo["viewport".concat(e)](n))},Lo["viewport".concat(e)]=function(t){var n="client".concat(e),o=t.document,r=o.body,i=o.documentElement[n];return"CSS1Compat"===o.compatMode&&i||r&&r[n]||i}}));var Ao={position:"absolute",visibility:"hidden",display:"block"};function Io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o,r=t[0];return 0!==r.offsetWidth?o=zo.apply(void 0,t):function(e,n){var r,i={},a=e.style;for(r in n)n.hasOwnProperty(r)&&(i[r]=a[r],a[r]=n[r]);for(r in function(){o=zo.apply(void 0,t)}.call(e),n)n.hasOwnProperty(r)&&(a[r]=i[r])}(r,Ao),o}function Ro(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}Co(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);Lo["outer".concat(t)]=function(t,n){return t&&Io(t,e,n?0:Do)};var n="width"===e?["Left","Right"]:["Top","Bottom"];Lo[e]=function(t,o){var r=o;return void 0!==r?t?(Oo(t)&&(r+=No(t,["padding","border"],n)),uo(t,e,r)):void 0:t&&Io(t,e,To)}}));var Ho={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:vo,offset:function(e,t,n){if(void 0===t)return mo(e);!function(e,t,n){if(n.ignoreShake){var o=mo(e),r=o.left.toFixed(0),i=o.top.toFixed(0),a=t.left.toFixed(0),l=t.top.toFixed(0);if(r===a&&i===l)return}n.useCssRight||n.useCssBottom?Eo(e,t,n):n.useCssTransform&&ro()in document.body.style?function(e,t){var n=mo(e),o=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(ro());if(n&&"none"!==n){var o=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(o[12]||o[4],0),y:parseFloat(o[13]||o[5],0)}}return{x:0,y:0}}(e),r={x:o.x,y:o.y};"left"in t&&(r.x=o.x+t.left-n.left),"top"in t&&(r.y=o.y+t.top-n.top),function(e,t){var n=window.getComputedStyle(e,null),o=n.getPropertyValue("transform")||n.getPropertyValue(ro());if(o&&"none"!==o){var r,i=o.match(po);i?((r=(i=i[1]).split(",").map((function(e){return parseFloat(e,10)})))[4]=t.x,r[5]=t.y,ao(e,"matrix(".concat(r.join(","),")"))):((r=o.match(so)[1].split(",").map((function(e){return parseFloat(e,10)})))[12]=t.x,r[13]=t.y,ao(e,"matrix3d(".concat(r.join(","),")")))}else ao(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}(e,r)}(e,t):Eo(e,t,n)}(e,t,n||{})},isWindow:xo,each:Co,css:uo,clone:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);if(e.overflow)for(t in e)e.hasOwnProperty(t)&&(n.overflow[t]=e.overflow[t]);return n},mix:Ro,getWindowScrollLeft:function(e){return go(e)},getWindowScrollTop:function(e){return fo(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++)Ho.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};Ro(Ho,Lo);var Fo=Ho.getParent;function Wo(e){if(Ho.isWindow(e)||9===e.nodeType)return null;var t,n=Ho.getDocument(e).body,o=Ho.css(e,"position");if("fixed"!==o&&"absolute"!==o)return"html"===e.nodeName.toLowerCase()?null:Fo(e);for(t=Fo(e);t&&t!==n&&9!==t.nodeType;t=Fo(t))if("static"!==(o=Ho.css(t,"position")))return t;return null}var Vo=Ho.getParent;function Yo(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},o=Wo(e),r=Ho.getDocument(e),i=r.defaultView||r.parentWindow,a=r.body,l=r.documentElement;o;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===o.clientWidth||o===a||o===l||"visible"===Ho.css(o,"overflow")){if(o===a||o===l)break}else{var p=Ho.offset(o);p.left+=o.clientLeft,p.top+=o.clientTop,n.top=Math.max(n.top,p.top),n.right=Math.min(n.right,p.left+o.clientWidth),n.bottom=Math.min(n.bottom,p.top+o.clientHeight),n.left=Math.max(n.left,p.left)}o=Wo(o)}var s=null;Ho.isWindow(e)||9===e.nodeType||(s=e.style.position,"absolute"===Ho.css(e,"position")&&(e.style.position="fixed"));var c=Ho.getWindowScrollLeft(i),d=Ho.getWindowScrollTop(i),u=Ho.viewportWidth(i),h=Ho.viewportHeight(i),g=l.scrollWidth,f=l.scrollHeight,m=window.getComputedStyle(a);if("hidden"===m.overflowX&&(g=i.innerWidth),"hidden"===m.overflowY&&(f=i.innerHeight),e.style&&(e.style.position=s),t||function(e){if(Ho.isWindow(e)||9===e.nodeType)return!1;var t=Ho.getDocument(e),n=t.body,o=null;for(o=Vo(e);o&&o!==n&&o!==t;o=Vo(o))if("fixed"===Ho.css(o,"position"))return!0;return!1}(e))n.left=Math.max(n.left,c),n.top=Math.max(n.top,d),n.right=Math.min(n.right,c+u),n.bottom=Math.min(n.bottom,d+h);else{var x=Math.max(g,c+u);n.right=Math.min(n.right,x);var v=Math.max(f,d+h);n.bottom=Math.min(n.bottom,v)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function Uo(e){var t,n,o;if(Ho.isWindow(e)||9===e.nodeType){var r=Ho.getWindow(e);t={left:Ho.getWindowScrollLeft(r),top:Ho.getWindowScrollTop(r)},n=Ho.viewportWidth(r),o=Ho.viewportHeight(r)}else t=Ho.offset(e),n=Ho.outerWidth(e),o=Ho.outerHeight(e);return t.width=n,t.height=o,t}function Bo(e,t){var n=t.charAt(0),o=t.charAt(1),r=e.width,i=e.height,a=e.left,l=e.top;return"c"===n?l+=i/2:"b"===n&&(l+=i),"c"===o?a+=r/2:"r"===o&&(a+=r),{left:a,top:l}}function $o(e,t,n,o,r){var i=Bo(t,n[1]),a=Bo(e,n[0]),l=[a.left-i.left,a.top-i.top];return{left:Math.round(e.left-l[0]+o[0]-r[0]),top:Math.round(e.top-l[1]+o[1]-r[1])}}function Go(e,t,n){return e.left<n.left||e.left+t.width>n.right}function Zo(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function qo(e,t,n){var o=[];return Ho.each(e,(function(e){o.push(e.replace(t,(function(e){return n[e]})))})),o}function Qo(e,t){return e[t]=-e[t],e}function Xo(e,t){return(/%$/.test(e)?parseInt(e.substring(0,e.length-1),10)/100*t:parseInt(e,10))||0}function Ko(e,t){e[0]=Xo(e[0],t.width),e[1]=Xo(e[1],t.height)}function Jo(e,t,n,o){var r=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],l=n.overflow,p=n.source||e;i=[].concat(i),a=[].concat(a);var s={},c=0,d=Yo(p,!(!(l=l||{})||!l.alwaysByViewport)),u=Uo(p);Ko(i,u),Ko(a,t);var h=$o(u,t,r,i,a),g=Ho.merge(u,h);if(d&&(l.adjustX||l.adjustY)&&o){if(l.adjustX&&Go(h,u,d)){var f=qo(r,/[lr]/gi,{l:"r",r:"l"}),m=Qo(i,0),x=Qo(a,0);(function(e,t,n){return e.left>n.right||e.left+t.width<n.left})($o(u,t,f,m,x),u,d)||(c=1,r=f,i=m,a=x)}if(l.adjustY&&Zo(h,u,d)){var v=qo(r,/[tb]/gi,{t:"b",b:"t"}),b=Qo(i,1),y=Qo(a,1);(function(e,t,n){return e.top>n.bottom||e.top+t.height<n.top})($o(u,t,v,b,y),u,d)||(c=1,r=v,i=b,a=y)}c&&(h=$o(u,t,r,i,a),Ho.mix(g,h));var w=Go(h,u,d),_=Zo(h,u,d);if(w||_){var k=r;w&&(k=qo(r,/[lr]/gi,{l:"r",r:"l"})),_&&(k=qo(r,/[tb]/gi,{t:"b",b:"t"})),r=k,i=n.offset||[0,0],a=n.targetOffset||[0,0]}s.adjustX=l.adjustX&&w,s.adjustY=l.adjustY&&_,(s.adjustX||s.adjustY)&&(g=function(e,t,n,o){var r=Ho.clone(e),i={width:t.width,height:t.height};return o.adjustX&&r.left<n.left&&(r.left=n.left),o.resizeWidth&&r.left>=n.left&&r.left+i.width>n.right&&(i.width-=r.left+i.width-n.right),o.adjustX&&r.left+i.width>n.right&&(r.left=Math.max(n.right-i.width,n.left)),o.adjustY&&r.top<n.top&&(r.top=n.top),o.resizeHeight&&r.top>=n.top&&r.top+i.height>n.bottom&&(i.height-=r.top+i.height-n.bottom),o.adjustY&&r.top+i.height>n.bottom&&(r.top=Math.max(n.bottom-i.height,n.top)),Ho.mix(r,i)}(h,u,d,s))}return g.width!==u.width&&Ho.css(p,"width",Ho.width(p)+g.width-u.width),g.height!==u.height&&Ho.css(p,"height",Ho.height(p)+g.height-u.height),Ho.offset(p,{left:g.left,top:g.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:s}}function er(e,t,n){var o=n.target||t,r=Uo(o),i=!function(e,t){var n=Yo(e,t),o=Uo(e);return!n||o.left+o.width<=n.left||o.top+o.height<=n.top||o.left>=n.right||o.top>=n.bottom}(o,n.overflow&&n.overflow.alwaysByViewport);return Jo(e,r,n,i)}function tr(e){return e&&"object"==typeof e&&e.window===e}function nr(e,t){var n=Math.floor(e),o=Math.floor(t);return Math.abs(n-o)<=1}function or(e){return"function"==typeof e&&e?e():null}function rr(e){return"object"==typeof e&&e?e:null}er.__getOffsetParent=Wo,er.__getVisibleRectForElement=Yo;var ir=function(e){function n(){var e,t,o,r;(0,wn.A)(this,n);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=o=(0,kn.A)(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o.forceAlign=function(){var e=o.props,t=e.disabled,n=e.target,r=e.align,i=e.onAlign;if(!t&&n){var a=En().findDOMNode(o),l=void 0,p=or(n),s=rr(n),c=document.activeElement;p?l=er(a,p,r):s&&(l=function(e,t,n){var o,r,i=Ho.getDocument(e),a=i.defaultView||i.parentWindow,l=Ho.getWindowScrollLeft(a),p=Ho.getWindowScrollTop(a),s=Ho.viewportWidth(a),c=Ho.viewportHeight(a),d={left:o="pageX"in t?t.pageX:l+t.clientX,top:r="pageY"in t?t.pageY:p+t.clientY,width:0,height:0},u=o>=0&&o<=l+s&&r>=0&&r<=p+c,h=[n.points[0],"cc"];return Jo(e,d,Kn(Kn({},n),{},{points:h}),u)}(a,s,r)),function(e,t){e!==document.activeElement&&Pn(t,e)&&e.focus()}(c,a),i&&i(a,l)}},r=t,(0,kn.A)(o,r)}return(0,Mn.A)(n,e),(0,Qn.A)(n,[{key:"componentDidMount",value:function(){var e=this.props;this.forceAlign(),!e.disabled&&e.monitorWindowResize&&this.startMonitorWindowResize()}},{key:"componentDidUpdate",value:function(e){var t=!1,n=this.props;if(!n.disabled){var o=En().findDOMNode(this),r=o?o.getBoundingClientRect():null;if(e.disabled)t=!0;else{var i=or(e.target),a=or(n.target),l=rr(e.target),p=rr(n.target);tr(i)&&tr(a)?t=!1:(i!==a||i&&!a&&p||l&&p&&a||p&&!function(e,t){return e===t||!(!e||!t)&&("pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t&&e.clientX===t.clientX&&e.clientY===t.clientY)}(l,p))&&(t=!0);var s=this.sourceRect||{};t||!o||nr(s.width,r.width)&&nr(s.height,r.height)||(t=!0)}this.sourceRect=r}t&&this.forceAlign(),n.monitorWindowResize&&!n.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize()}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=function(e,t){var n=void 0;function o(){n&&(clearTimeout(n),n=null)}function r(){o(),n=setTimeout(e,t)}return r.clear=o,r}(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=Ln(window,"resize",this.bufferMonitor))}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)}},{key:"render",value:function(){var e=this,n=this.props,o=n.childrenProps,r=n.children,i=t().Children.only(r);if(o){var a={};return Object.keys(o).forEach((function(t){a[t]=e.props[o[t]]})),t().cloneElement(i,a)}return i}}]),n}(e.Component);ir.propTypes={childrenProps:mn().object,align:mn().object.isRequired,target:mn().oneOfType([mn().func,mn().shape({clientX:mn().number,clientY:mn().number,pageX:mn().number,pageY:mn().number})]),onAlign:mn().func,monitorBufferTime:mn().number,monitorWindowResize:mn().bool,disabled:mn().bool,children:mn().any},ir.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};const ar=ir;var lr=n(44508);function pr(e){var n=[];return t().Children.forEach(e,(function(e){n.push(e)})),n}function sr(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e)})),n}function cr(e,t,n){var o=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(o)throw new Error("two child with same key for <rc-animate> children");o=e}})),o}var dr=n(97479),ur={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},hr={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},gr=[],fr=[];function mr(e,t,n){e.addEventListener(t,n,!1)}function xr(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];for(var i in r)if(i in e){n.push(r[i]);break}}}"AnimationEvent"in window||(delete ur.animationstart.animation,delete hr.animationend.animation),"TransitionEvent"in window||(delete ur.transitionstart.transition,delete hr.transitionend.transition),t(ur,gr),t(hr,fr)}();var vr={startEvents:gr,addStartEventListener:function(e,t){0!==gr.length?gr.forEach((function(n){mr(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==gr.length&&gr.forEach((function(n){xr(e,n,t)}))},endEvents:fr,addEndEventListener:function(e,t){0!==fr.length?fr.forEach((function(n){mr(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==fr.length&&fr.forEach((function(n){xr(e,n,t)}))}};const br=vr;var yr=n(30837),wr=n.n(yr),_r=0!==br.endEvents.length,kr=["Webkit","Moz","O","ms"],Mr=["-webkit-","-moz-","-o-","ms-",""];function Sr(e,t){for(var n=window.getComputedStyle(e,null),o="",r=0;r<Mr.length&&!(o=n.getPropertyValue(Mr[r]+t));r++);return o}function Er(e){if(_r){var t=parseFloat(Sr(e,"transition-delay"))||0,n=parseFloat(Sr(e,"transition-duration"))||0,o=parseFloat(Sr(e,"animation-delay"))||0,r=parseFloat(Sr(e,"animation-duration"))||0,i=Math.max(n+t,r+o);e.rcEndAnimTimeout=setTimeout((function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()}),1e3*i+200)}}function Cr(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var Or=function(e,t,n){var o="object"===(void 0===t?"undefined":(0,dr.default)(t)),r=o?t.name:t,i=o?t.active:t+"-active",a=n,l=void 0,p=void 0,s=wr()(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(a=n.end,l=n.start,p=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),Cr(e),s.remove(r),s.remove(i),br.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,a&&a())},br.addEndEventListener(e,e.rcEndListener),l&&l(),s.add(r),e.rcAnimTimeout=setTimeout((function(){e.rcAnimTimeout=null,s.add(i),p&&setTimeout(p,0),Er(e)}),30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};Or.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),Cr(e),br.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},br.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout((function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,Er(e)}),0)},Or.setTransition=function(e,t,n){var o=t,r=n;void 0===n&&(r=o,o=""),o=o||"",kr.forEach((function(t){e.style[t+"Transition"+o]=r}))},Or.isCssAnimationSupported=_r;const jr=Or,Tr=function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},Pr=function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},Dr=function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},Nr=function(e){return e.transitionAppear||e.animation.appear},Lr=function(e){return e.transitionEnter||e.animation.enter},zr=function(e){return e.transitionLeave||e.animation.leave};var Ar={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},Ir=function(e){function t(){return(0,wn.A)(this,t),(0,kn.A)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,Mn.A)(t,e),(0,Qn.A)(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){Pr(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){Tr(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){Dr(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,o=En().findDOMNode(this),r=this.props,i=r.transitionName,a="object"==typeof i;this.stop();var l=function(){n.stopper=null,t()};if((_r||!r.animation[e])&&i&&r[Ar[e]]){var p=a?i[e]:i+"-"+e,s=p+"-active";a&&i[e+"Active"]&&(s=i[e+"Active"]),this.stopper=jr(o,{name:p,active:s},l)}else this.stopper=r.animation[e](o,l)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(t().Component);Ir.propTypes={children:mn().any,animation:mn().any,transitionName:mn().any};const Rr=Ir;var Hr="rc_animate_"+Date.now();function Fr(e){var n=e.children;return t().isValidElement(n)&&!n.key?t().cloneElement(n,{key:Hr}):n}function Wr(){}var Vr=function(e){function n(e){(0,wn.A)(this,n);var t=(0,kn.A)(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return Yr.call(t),t.currentlyAnimatingKeys={},t.keysToEnter=[],t.keysToLeave=[],t.state={children:pr(Fr(e))},t.childrenRefs={},t}return(0,Mn.A)(n,e),(0,Qn.A)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return!!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(e){var n=this;this.nextProps=e;var o=pr(Fr(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){n.stop(e)}));var i=r.showProp,a=this.currentlyAnimatingKeys,l=r.exclusive?pr(Fr(r)):this.state.children,p=[];i?(l.forEach((function(e){var n,r=e&&sr(o,e.key);(n=r&&r.props[i]||!e.props[i]?r:t().cloneElement(r||e,(0,lr.A)({},i,!0)))&&p.push(n)})),o.forEach((function(e){e&&sr(l,e.key)||p.push(e)}))):p=function(e,t){var n=[],o={},r=[];return e.forEach((function(e){e&&sr(t,e.key)?r.length&&(o[e.key]=r,r=[]):r.push(e)})),t.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(o,e.key)&&(n=n.concat(o[e.key])),n.push(e)})),n=n.concat(r)}(l,o),this.setState({children:p}),o.forEach((function(e){var t=e&&e.key;if(!e||!a[t]){var o=e&&sr(l,t);if(i){var r=e.props[i];o?!cr(l,t,i)&&r&&n.keysToEnter.push(t):r&&n.keysToEnter.push(t)}else o||n.keysToEnter.push(t)}})),l.forEach((function(e){var t=e&&e.key;if(!e||!a[t]){var r=e&&sr(o,t);if(i){var l=e.props[i];r?!cr(o,t,i)&&l&&n.keysToLeave.push(t):l&&n.keysToLeave.push(t)}else r||n.keysToLeave.push(t)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?cr(e,t,n):sr(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,n=this.props;this.nextProps=n;var o=this.state.children,r=null;o&&(r=o.map((function(o){if(null==o)return o;if(!o.key)throw new Error("must set key for <rc-animate> children");return t().createElement(Rr,{key:o.key,ref:function(t){e.childrenRefs[o.key]=t},animation:n.animation,transitionName:n.transitionName,transitionEnter:n.transitionEnter,transitionAppear:n.transitionAppear,transitionLeave:n.transitionLeave},o)})));var i=n.component;if(i){var a=n;return"string"==typeof i&&(a=(0,yn.A)({className:n.className,style:n.style},n.componentProps)),t().createElement(i,a,r)}return r[0]||null}}]),n}(t().Component);Vr.isAnimate=!0,Vr.propTypes={className:mn().string,style:mn().object,component:mn().any,componentProps:mn().object,animation:mn().object,transitionName:mn().oneOfType([mn().string,mn().object]),transitionEnter:mn().bool,transitionAppear:mn().bool,exclusive:mn().bool,transitionLeave:mn().bool,onEnd:mn().func,onEnter:mn().func,onLeave:mn().func,onAppear:mn().func,showProp:mn().string,children:mn().node},Vr.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:Wr,onEnter:Wr,onLeave:Wr,onAppear:Wr};var Yr=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var o=e.props;if(delete e.currentlyAnimatingKeys[t],!o.exclusive||o===e.nextProps){var r=pr(Fr(o));e.isValidChildByKey(r,t)?"appear"===n?Nr(o)&&(o.onAppear(t),o.onEnd(t,!0)):Lr(o)&&(o.onEnter(t),o.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var o,r,i,a,l=pr(Fr(n));if(e.isValidChildByKey(l,t))e.performEnter(t);else{var p=function(){zr(n)&&(n.onLeave(t),n.onEnd(t,!1))};o=e.state.children,r=l,i=n.showProp,(a=o.length===r.length)&&o.forEach((function(e,t){var n=r[t];e&&n&&(e&&!n||!e&&n||e.key!==n.key||i&&e.props[i]!==n.props[i])&&(a=!1)})),a?p():e.setState({children:l},p)}}}};const Ur=function(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return"function"!=typeof n.componentWillReceiveProps?e:t().Profiler?(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps,e):e}(Vr);var Br=n(5748),$r=function(e){function n(){return(0,wn.A)(this,n),(0,kn.A)(this,e.apply(this,arguments))}return(0,Mn.A)(n,e),n.prototype.shouldComponentUpdate=function(e){return e.hiddenClassName||e.visible},n.prototype.render=function(){var e=this.props,n=e.hiddenClassName,o=e.visible,r=(0,Br.A)(e,["hiddenClassName","visible"]);return n||t().Children.count(r.children)>1?(!o&&n&&(r.className+=" "+n),t().createElement("div",r)):t().Children.only(r.children)},n}(e.Component);$r.propTypes={children:mn().any,className:mn().string,visible:mn().bool,hiddenClassName:mn().string};const Gr=$r;var Zr=function(e){function n(){return(0,wn.A)(this,n),(0,kn.A)(this,e.apply(this,arguments))}return(0,Mn.A)(n,e),n.prototype.render=function(){var e=this.props,n=e.className;return e.visible||(n+=" "+e.hiddenClassName),t().createElement("div",{className:n,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseDown:e.onMouseDown,onTouchStart:e.onTouchStart,style:e.style},t().createElement(Gr,{className:e.prefixCls+"-content",visible:e.visible},e.children))},n}(e.Component);Zr.propTypes={hiddenClassName:mn().string,className:mn().string,prefixCls:mn().string,onMouseEnter:mn().func,onMouseLeave:mn().func,onMouseDown:mn().func,onTouchStart:mn().func,children:mn().any};const qr=Zr;var Qr=function(e){function n(t){(0,wn.A)(this,n);var o=(0,kn.A)(this,e.call(this,t));return Xr.call(o),o.state={stretchChecked:!1,targetWidth:void 0,targetHeight:void 0},o.savePopupRef=Zn.bind(o,"popupInstance"),o.saveAlignRef=Zn.bind(o,"alignInstance"),o}return(0,Mn.A)(n,e),n.prototype.componentDidMount=function(){this.rootNode=this.getPopupDomNode(),this.setStretchSize()},n.prototype.componentDidUpdate=function(){this.setStretchSize()},n.prototype.getPopupDomNode=function(){return En().findDOMNode(this.popupInstance)},n.prototype.getMaskTransitionName=function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t},n.prototype.getTransitionName=function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t},n.prototype.getClassName=function(e){return this.props.prefixCls+" "+this.props.className+" "+e},n.prototype.getPopupElement=function(){var e=this,n=this.savePopupRef,o=this.state,r=o.stretchChecked,i=o.targetHeight,a=o.targetWidth,l=this.props,p=l.align,s=l.visible,c=l.prefixCls,d=l.style,u=l.getClassNameFromAlign,h=l.destroyPopupOnHide,g=l.stretch,f=l.children,m=l.onMouseEnter,x=l.onMouseLeave,v=l.onMouseDown,b=l.onTouchStart,y=this.getClassName(this.currentAlignClassName||u(p)),w=c+"-hidden";s||(this.currentAlignClassName=null);var _={};g&&(-1!==g.indexOf("height")?_.height=i:-1!==g.indexOf("minHeight")&&(_.minHeight=i),-1!==g.indexOf("width")?_.width=a:-1!==g.indexOf("minWidth")&&(_.minWidth=a),r||(_.visibility="hidden",setTimeout((function(){e.alignInstance&&e.alignInstance.forceAlign()}),0)));var k={className:y,prefixCls:c,ref:n,onMouseEnter:m,onMouseLeave:x,onMouseDown:v,onTouchStart:b,style:(0,yn.A)({},_,d,this.getZIndexStyle())};return h?t().createElement(Ur,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName()},s?t().createElement(ar,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,align:p,onAlign:this.onAlign},t().createElement(qr,(0,yn.A)({visible:!0},k),f)):null):t().createElement(Ur,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName(),showProp:"xVisible"},t().createElement(ar,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,xVisible:s,childrenProps:{visible:"xVisible"},disabled:!s,align:p,onAlign:this.onAlign},t().createElement(qr,(0,yn.A)({hiddenClassName:w},k),f)))},n.prototype.getZIndexStyle=function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e},n.prototype.getMaskElement=function(){var e=this.props,n=void 0;if(e.mask){var o=this.getMaskTransitionName();n=t().createElement(Gr,{style:this.getZIndexStyle(),key:"mask",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible}),o&&(n=t().createElement(Ur,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:o},n))}return n},n.prototype.render=function(){return t().createElement("div",null,this.getMaskElement(),this.getPopupElement())},n}(e.Component);Qr.propTypes={visible:mn().bool,style:mn().object,getClassNameFromAlign:mn().func,onAlign:mn().func,getRootDomNode:mn().func,align:mn().any,destroyPopupOnHide:mn().bool,className:mn().string,prefixCls:mn().string,onMouseEnter:mn().func,onMouseLeave:mn().func,onMouseDown:mn().func,onTouchStart:mn().func,stretch:mn().string,children:mn().node,point:mn().shape({pageX:mn().number,pageY:mn().number})};var Xr=function(){var e=this;this.onAlign=function(t,n){var o=e.props,r=o.getClassNameFromAlign(n);e.currentAlignClassName!==r&&(e.currentAlignClassName=r,t.className=e.getClassName(r)),o.onAlign(t,n)},this.setStretchSize=function(){var t=e.props,n=t.stretch,o=t.getRootDomNode,r=t.visible,i=e.state,a=i.stretchChecked,l=i.targetHeight,p=i.targetWidth;if(n&&r){var s=o();if(s){var c=s.offsetHeight,d=s.offsetWidth;l===c&&p===d&&a||e.setState({stretchChecked:!0,targetHeight:c,targetWidth:d})}}else a&&e.setState({stretchChecked:!1})},this.getTargetElement=function(){return e.props.getRootDomNode()},this.getAlignTarget=function(){return e.props.point||e.getTargetElement}};const Kr=Qr;function Jr(){}var ei=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],ti=!!Sn.createPortal,ni={rcTrigger:mn().shape({onPopupMouseDown:mn().func})},oi=function(e){function n(t){(0,wn.A)(this,n);var o=(0,kn.A)(this,e.call(this,t));ri.call(o);var r;return r="popupVisible"in t?!!t.popupVisible:!!t.defaultPopupVisible,o.state={prevPopupVisible:r,popupVisible:r},ei.forEach((function(e){o["fire"+e]=function(t){o.fireEvents(e,t)}})),o}return(0,Mn.A)(n,e),n.prototype.getChildContext=function(){return{rcTrigger:{onPopupMouseDown:this.onPopupMouseDown}}},n.prototype.componentDidMount=function(){this.componentDidUpdate({},{popupVisible:this.state.popupVisible})},n.prototype.componentDidUpdate=function(e,t){var n=this.props,o=this.state;if(ti||this.renderComponent(null,(function(){t.popupVisible!==o.popupVisible&&n.afterPopupVisibleChange(o.popupVisible)})),o.popupVisible){var r=void 0;return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(r=n.getDocument(),this.clickOutsideHandler=Ln(r,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(r=r||n.getDocument(),this.touchOutsideHandler=Ln(r,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(r=r||n.getDocument(),this.contextMenuOutsideHandler1=Ln(r,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=Ln(window,"blur",this.onContextMenuClose)))}this.clearOutsideHandler()},n.prototype.componentWillUnmount=function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)},n.getDerivedStateFromProps=function(e,t){var n=e.popupVisible,o={};return void 0!==n&&t.popupVisible!==n&&(o.popupVisible=n,o.prevPopupVisible=t.popupVisible),o},n.prototype.getPopupDomNode=function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},n.prototype.getPopupAlign=function(){var e=this.props,t=e.popupPlacement,n=e.popupAlign,o=e.builtinPlacements;return t&&o?function(e,t,n){var o=e[t]||{};return(0,yn.A)({},o,n)}(o,t,n):n},n.prototype.setPopupVisible=function(e,t){var n=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),n&&t&&this.setPoint(t)},n.prototype.delaySetPopupVisible=function(e,t,n){var o=this,r=1e3*t;if(this.clearDelayTimer(),r){var i=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=setTimeout((function(){o.setPopupVisible(e,i),o.clearDelayTimer()}),r)}else this.setPopupVisible(e,n)},n.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},n.prototype.clearOutsideHandler=function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},n.prototype.createTwoChains=function(e){var t=this.props.children.props,n=this.props;return t[e]&&n[e]?this["fire"+e]:t[e]||n[e]},n.prototype.isClickToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")},n.prototype.isContextMenuToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("contextMenu")||-1!==n.indexOf("contextMenu")},n.prototype.isClickToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")},n.prototype.isMouseEnterToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseEnter")},n.prototype.isMouseLeaveToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseLeave")},n.prototype.isFocusToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("focus")},n.prototype.isBlurToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("blur")},n.prototype.forcePopupAlign=function(){this.state.popupVisible&&this._component&&this._component.alignInstance&&this._component.alignInstance.forceAlign()},n.prototype.fireEvents=function(e,t){var n=this.props.children.props[e];n&&n(t);var o=this.props[e];o&&o(t)},n.prototype.close=function(){this.setPopupVisible(!1)},n.prototype.render=function(){var e=this,n=this.state.popupVisible,o=this.props,r=o.children,i=o.forceRender,a=o.alignPoint,l=o.className,p=t().Children.only(r),s={key:"trigger"};this.isContextMenuToShow()?s.onContextMenu=this.onContextMenu:s.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(s.onClick=this.onClick,s.onMouseDown=this.onMouseDown,s.onTouchStart=this.onTouchStart):(s.onClick=this.createTwoChains("onClick"),s.onMouseDown=this.createTwoChains("onMouseDown"),s.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(s.onMouseEnter=this.onMouseEnter,a&&(s.onMouseMove=this.onMouseMove)):s.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?s.onMouseLeave=this.onMouseLeave:s.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(s.onFocus=this.onFocus,s.onBlur=this.onBlur):(s.onFocus=this.createTwoChains("onFocus"),s.onBlur=this.createTwoChains("onBlur"));var c=$n()(p&&p.props&&p.props.className,l);c&&(s.className=c);var d=t().cloneElement(p,s);if(!ti)return t().createElement(Hn,{parent:this,visible:n,autoMount:!1,forceRender:i,getComponent:this.getComponent,getContainer:this.getContainer},(function(t){var n=t.renderComponent;return e.renderComponent=n,d}));var u=void 0;return(n||this._component||i)&&(u=t().createElement(Un,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),[d,u]},n}(t().Component);oi.propTypes={children:mn().any,action:mn().oneOfType([mn().string,mn().arrayOf(mn().string)]),showAction:mn().any,hideAction:mn().any,getPopupClassNameFromAlign:mn().any,onPopupVisibleChange:mn().func,afterPopupVisibleChange:mn().func,popup:mn().oneOfType([mn().node,mn().func]).isRequired,popupStyle:mn().object,prefixCls:mn().string,popupClassName:mn().string,className:mn().string,popupPlacement:mn().string,builtinPlacements:mn().object,popupTransitionName:mn().oneOfType([mn().string,mn().object]),popupAnimation:mn().any,mouseEnterDelay:mn().number,mouseLeaveDelay:mn().number,zIndex:mn().number,focusDelay:mn().number,blurDelay:mn().number,getPopupContainer:mn().func,getDocument:mn().func,forceRender:mn().bool,destroyPopupOnHide:mn().bool,mask:mn().bool,maskClosable:mn().bool,onPopupAlign:mn().func,popupAlign:mn().object,popupVisible:mn().bool,defaultPopupVisible:mn().bool,maskTransitionName:mn().oneOfType([mn().string,mn().object]),maskAnimation:mn().string,stretch:mn().string,alignPoint:mn().bool},oi.contextTypes=ni,oi.childContextTypes=ni,oi.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:function(){return""},getDocument:function(){return window.document},onPopupVisibleChange:Jr,afterPopupVisibleChange:Jr,onPopupAlign:Jr,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]};var ri=function(){var e=this;this.onMouseEnter=function(t){var n=e.props.mouseEnterDelay;e.fireEvents("onMouseEnter",t),e.delaySetPopupVisible(!0,n,n?null:t)},this.onMouseMove=function(t){e.fireEvents("onMouseMove",t),e.setPoint(t)},this.onMouseLeave=function(t){e.fireEvents("onMouseLeave",t),e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)},this.onPopupMouseEnter=function(){e.clearDelayTimer()},this.onPopupMouseLeave=function(t){t.relatedTarget&&!t.relatedTarget.setTimeout&&e._component&&e._component.getPopupDomNode&&Pn(e._component.getPopupDomNode(),t.relatedTarget)||e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)},this.onFocus=function(t){e.fireEvents("onFocus",t),e.clearDelayTimer(),e.isFocusToShow()&&(e.focusTime=Date.now(),e.delaySetPopupVisible(!0,e.props.focusDelay))},this.onMouseDown=function(t){e.fireEvents("onMouseDown",t),e.preClickTime=Date.now()},this.onTouchStart=function(t){e.fireEvents("onTouchStart",t),e.preTouchTime=Date.now()},this.onBlur=function(t){e.fireEvents("onBlur",t),e.clearDelayTimer(),e.isBlurToHide()&&e.delaySetPopupVisible(!1,e.props.blurDelay)},this.onContextMenu=function(t){t.preventDefault(),e.fireEvents("onContextMenu",t),e.setPopupVisible(!0,t)},this.onContextMenuClose=function(){e.isContextMenuToShow()&&e.close()},this.onClick=function(t){if(e.fireEvents("onClick",t),e.focusTime){var n=void 0;if(e.preClickTime&&e.preTouchTime?n=Math.min(e.preClickTime,e.preTouchTime):e.preClickTime?n=e.preClickTime:e.preTouchTime&&(n=e.preTouchTime),Math.abs(n-e.focusTime)<20)return;e.focusTime=0}e.preClickTime=0,e.preTouchTime=0,e.isClickToShow()&&(e.isClickToHide()||e.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault();var o=!e.state.popupVisible;(e.isClickToHide()&&!o||o&&e.isClickToShow())&&e.setPopupVisible(!e.state.popupVisible,t)},this.onPopupMouseDown=function(){var t=e.context.rcTrigger,n=void 0===t?{}:t;e.hasPopupMouseDown=!0,clearTimeout(e.mouseDownTimeout),e.mouseDownTimeout=setTimeout((function(){e.hasPopupMouseDown=!1}),0),n.onPopupMouseDown&&n.onPopupMouseDown.apply(n,arguments)},this.onDocumentClick=function(t){if(!e.props.mask||e.props.maskClosable){var n=t.target;Pn((0,Sn.findDOMNode)(e),n)||e.hasPopupMouseDown||e.close()}},this.getRootDomNode=function(){return(0,Sn.findDOMNode)(e)},this.getPopupClassNameFromAlign=function(t){var n=[],o=e.props,r=o.popupPlacement,i=o.builtinPlacements,a=o.prefixCls,l=o.alignPoint,p=o.getPopupClassNameFromAlign;return r&&i&&n.push(function(e,t,n,o){var r=n.points;for(var i in e)if(e.hasOwnProperty(i)&&Gn(e[i].points,r,o))return t+"-placement-"+i;return""}(i,a,t,l)),p&&n.push(p(t)),n.join(" ")},this.getComponent=function(){var n=e.props,o=n.prefixCls,r=n.destroyPopupOnHide,i=n.popupClassName,a=n.action,l=n.onPopupAlign,p=n.popupAnimation,s=n.popupTransitionName,c=n.popupStyle,d=n.mask,u=n.maskAnimation,h=n.maskTransitionName,g=n.zIndex,f=n.popup,m=n.stretch,x=n.alignPoint,v=e.state,b=v.popupVisible,y=v.point,w=e.getPopupAlign(),_={};return e.isMouseEnterToShow()&&(_.onMouseEnter=e.onPopupMouseEnter),e.isMouseLeaveToHide()&&(_.onMouseLeave=e.onPopupMouseLeave),_.onMouseDown=e.onPopupMouseDown,_.onTouchStart=e.onPopupMouseDown,t().createElement(Kr,(0,yn.A)({prefixCls:o,destroyPopupOnHide:r,visible:b,point:x&&y,className:i,action:a,align:w,onAlign:l,animation:p,getClassNameFromAlign:e.getPopupClassNameFromAlign},_,{stretch:m,getRootDomNode:e.getRootDomNode,style:c,mask:d,zIndex:g,transitionName:s,maskAnimation:u,maskTransitionName:h,ref:e.savePopup}),"function"==typeof f?f():f)},this.getContainer=function(){var t=e.props,n=document.createElement("div");return n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",(t.getPopupContainer?t.getPopupContainer((0,Sn.findDOMNode)(e)):t.getDocument().body).appendChild(n),n},this.setPoint=function(t){e.props.alignPoint&&t&&e.setState({point:{pageX:t.pageX,pageY:t.pageY}})},this.handlePortalUpdate=function(){e.state.prevPopupVisible!==e.state.popupVisible&&e.props.afterPopupVisibleChange(e.state.popupVisible)},this.savePopup=function(t){e._component=t}};Tn(oi);const ii=oi,ai=window.moment;var li=n.n(ai);function pi(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function si(e){return si=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},si(e)}function ci(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function di(e,t){return di=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},di(e,t)}function ui(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var hi=function(e){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?ci(e):t}(this,si(n).call(this,e)),ui(ci(t),"onInputChange",(function(e){var n=e.target.value;t.setState({str:n});var o=t.props,r=o.format,i=o.hourOptions,a=o.minuteOptions,l=o.secondOptions,p=o.disabledHours,s=o.disabledMinutes,c=o.disabledSeconds,d=o.onChange;if(n){var u=t.props.value,h=t.getProtoValue().clone(),g=li()(n,r,!0);if(!g.isValid())return void t.setState({invalid:!0});if(h.hour(g.hour()).minute(g.minute()).second(g.second()),i.indexOf(h.hour())<0||a.indexOf(h.minute())<0||l.indexOf(h.second())<0)return void t.setState({invalid:!0});var f=p(),m=s(h.hour()),x=c(h.hour(),h.minute());if(f&&f.indexOf(h.hour())>=0||m&&m.indexOf(h.minute())>=0||x&&x.indexOf(h.second())>=0)return void t.setState({invalid:!0});if(u){if(u.hour()!==h.hour()||u.minute()!==h.minute()||u.second()!==h.second()){var v=u.clone();v.hour(h.hour()),v.minute(h.minute()),v.second(h.second()),d(v)}}else u!==h&&d(h)}else d(null);t.setState({invalid:!1})})),ui(ci(t),"onKeyDown",(function(e){var n=t.props,o=n.onEsc,r=n.onKeyDown;27===e.keyCode&&o(),r(e)}));var o=e.value,r=e.format;return t.state={str:o&&o.format(r)||"",invalid:!1},t}var o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&di(e,t)}(n,e),o=n,(r=[{key:"componentDidMount",value:function(){var e=this;this.props.focusOnOpen&&(window.requestAnimationFrame||window.setTimeout)((function(){e.refInput.focus(),e.refInput.select()}))}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,o=t.format;n!==e.value&&this.setState({str:n&&n.format(o)||"",invalid:!1})}},{key:"getProtoValue",value:function(){var e=this.props,t=e.value,n=e.defaultOpenValue;return t||n}},{key:"getInput",value:function(){var e=this,n=this.props,o=n.prefixCls,r=n.placeholder,i=n.inputReadOnly,a=this.state,l=a.invalid,p=a.str,s=l?"".concat(o,"-input-invalid"):"";return t().createElement("input",{className:$n()("".concat(o,"-input"),s),ref:function(t){e.refInput=t},onKeyDown:this.onKeyDown,value:p,placeholder:r,onChange:this.onInputChange,readOnly:!!i})}},{key:"render",value:function(){var e=this.props.prefixCls;return t().createElement("div",{className:"".concat(e,"-input-wrap")},this.getInput())}}])&&pi(o.prototype,r),n}(e.Component);ui(hi,"propTypes",{format:mn().string,prefixCls:mn().string,disabledDate:mn().func,placeholder:mn().string,clearText:mn().string,value:mn().object,inputReadOnly:mn().bool,hourOptions:mn().array,minuteOptions:mn().array,secondOptions:mn().array,disabledHours:mn().func,disabledMinutes:mn().func,disabledSeconds:mn().func,onChange:mn().func,onEsc:mn().func,defaultOpenValue:mn().object,currentSelectPanel:mn().string,focusOnOpen:mn().bool,onKeyDown:mn().func,clearIcon:mn().node}),ui(hi,"defaultProps",{inputReadOnly:!1});const gi=hi;var fi=n(93146),mi=n.n(fi);function xi(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function vi(e){return vi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},vi(e)}function bi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yi(e,t){return yi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},yi(e,t)}function wi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _i=function e(t,n,o){if(o<=0)mi()((function(){t.scrollTop=n}));else{var r=(n-t.scrollTop)/o*10;mi()((function(){t.scrollTop+=r,t.scrollTop!==n&&e(t,n,o-10)}))}},ki=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?bi(e):t}(this,(e=vi(n)).call.apply(e,[this].concat(r))),wi(bi(t),"state",{active:!1}),wi(bi(t),"onSelect",(function(e){var n=t.props;(0,n.onSelect)(n.type,e)})),wi(bi(t),"handleMouseEnter",(function(e){var n=t.props.onMouseEnter;t.setState({active:!0}),n(e)})),wi(bi(t),"handleMouseLeave",(function(){t.setState({active:!1})})),wi(bi(t),"saveList",(function(e){t.list=e})),t}var o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yi(e,t)}(n,e),o=n,(r=[{key:"componentDidMount",value:function(){this.scrollToSelected(0)}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedIndex;e.selectedIndex!==t&&this.scrollToSelected(120)}},{key:"getOptions",value:function(){var e=this,n=this.props,o=n.options,r=n.selectedIndex,i=n.prefixCls,a=n.onEsc;return o.map((function(n,o){var l,p=$n()((wi(l={},"".concat(i,"-select-option-selected"),r===o),wi(l,"".concat(i,"-select-option-disabled"),n.disabled),l)),s=n.disabled?void 0:function(){e.onSelect(n.value)};return t().createElement("li",{role:"button",onClick:s,className:p,key:o,disabled:n.disabled,tabIndex:"0",onKeyDown:function(e){13===e.keyCode?s():27===e.keyCode&&a()}},n.value)}))}},{key:"scrollToSelected",value:function(e){var t=this.props.selectedIndex,n=En().findDOMNode(this),o=En().findDOMNode(this.list);if(o){var r=t;r<0&&(r=0);var i=o.children[r].offsetTop;_i(n,i,e)}}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,o=e.options,r=this.state.active;if(0===o.length)return null;var i=$n()("".concat(n,"-select"),wi({},"".concat(n,"-select-active"),r));return t().createElement("div",{className:i,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},t().createElement("ul",{ref:this.saveList},this.getOptions()))}}])&&xi(o.prototype,r),n}(e.Component);wi(ki,"propTypes",{prefixCls:mn().string,options:mn().array,selectedIndex:mn().number,type:mn().string,onSelect:mn().func,onMouseEnter:mn().func,onEsc:mn().func});const Mi=ki;function Si(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ei(e){return Ei=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ei(e)}function Ci(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oi(e,t){return Oi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Oi(e,t)}function ji(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ti=function(e,t){var n="".concat(e);e<10&&(n="0".concat(e));var o=!1;return t&&t.indexOf(e)>=0&&(o=!0),{value:n,disabled:o}},Pi=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?Ci(e):t}(this,(e=Ei(n)).call.apply(e,[this].concat(r))),ji(Ci(t),"onItemChange",(function(e,n){var o=t.props,r=o.onChange,i=o.defaultOpenValue,a=o.use12Hours,l=o.value,p=o.isAM,s=o.onAmPmChange,c=(l||i).clone();if("hour"===e)a?p?c.hour(+n%12):c.hour(+n%12+12):c.hour(+n);else if("minute"===e)c.minute(+n);else if("ampm"===e){var d=n.toUpperCase();a&&("PM"===d&&c.hour()<12&&c.hour(c.hour()%12+12),"AM"===d&&c.hour()>=12&&c.hour(c.hour()-12)),s(d)}else c.second(+n);r(c)})),ji(Ci(t),"onEnterSelectPanel",(function(e){(0,t.props.onCurrentSelectPanelChange)(e)})),t}var o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oi(e,t)}(n,e),o=n,(r=[{key:"getHourSelect",value:function(e){var n=this,o=this.props,r=o.prefixCls,i=o.hourOptions,a=o.disabledHours,l=o.showHour,p=o.use12Hours,s=o.onEsc;if(!l)return null;var c,d,u=a();return p?(c=[12].concat(i.filter((function(e){return e<12&&e>0}))),d=e%12||12):(c=i,d=e),t().createElement(Mi,{prefixCls:r,options:c.map((function(e){return Ti(e,u)})),selectedIndex:c.indexOf(d),type:"hour",onSelect:this.onItemChange,onMouseEnter:function(){return n.onEnterSelectPanel("hour")},onEsc:s})}},{key:"getMinuteSelect",value:function(e){var n=this,o=this.props,r=o.prefixCls,i=o.minuteOptions,a=o.disabledMinutes,l=o.defaultOpenValue,p=o.showMinute,s=o.value,c=o.onEsc;if(!p)return null;var d=a((s||l).hour());return t().createElement(Mi,{prefixCls:r,options:i.map((function(e){return Ti(e,d)})),selectedIndex:i.indexOf(e),type:"minute",onSelect:this.onItemChange,onMouseEnter:function(){return n.onEnterSelectPanel("minute")},onEsc:c})}},{key:"getSecondSelect",value:function(e){var n=this,o=this.props,r=o.prefixCls,i=o.secondOptions,a=o.disabledSeconds,l=o.showSecond,p=o.defaultOpenValue,s=o.value,c=o.onEsc;if(!l)return null;var d=s||p,u=a(d.hour(),d.minute());return t().createElement(Mi,{prefixCls:r,options:i.map((function(e){return Ti(e,u)})),selectedIndex:i.indexOf(e),type:"second",onSelect:this.onItemChange,onMouseEnter:function(){return n.onEnterSelectPanel("second")},onEsc:c})}},{key:"getAMPMSelect",value:function(){var e=this,n=this.props,o=n.prefixCls,r=n.use12Hours,i=n.format,a=n.isAM,l=n.onEsc;if(!r)return null;var p=["am","pm"].map((function(e){return i.match(/\sA/)?e.toUpperCase():e})).map((function(e){return{value:e}})),s=a?0:1;return t().createElement(Mi,{prefixCls:o,options:p,selectedIndex:s,type:"ampm",onSelect:this.onItemChange,onMouseEnter:function(){return e.onEnterSelectPanel("ampm")},onEsc:l})}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,o=e.defaultOpenValue,r=e.value||o;return t().createElement("div",{className:"".concat(n,"-combobox")},this.getHourSelect(r.hour()),this.getMinuteSelect(r.minute()),this.getSecondSelect(r.second()),this.getAMPMSelect(r.hour()))}}])&&Si(o.prototype,r),n}(e.Component);ji(Pi,"propTypes",{format:mn().string,defaultOpenValue:mn().object,prefixCls:mn().string,value:mn().object,onChange:mn().func,onAmPmChange:mn().func,showHour:mn().bool,showMinute:mn().bool,showSecond:mn().bool,hourOptions:mn().array,minuteOptions:mn().array,secondOptions:mn().array,disabledHours:mn().func,disabledMinutes:mn().func,disabledSeconds:mn().func,onCurrentSelectPanelChange:mn().func,use12Hours:mn().bool,onEsc:mn().func,isAM:mn().bool});const Di=Pi;function Ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Li(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function zi(e){return zi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},zi(e)}function Ai(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ii(e,t){return Ii=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ii(e,t)}function Ri(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hi(){}function Fi(e,t,n){for(var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=[],i=0;i<e;i+=o)(!t||t.indexOf(i)<0||!n)&&r.push(i);return r}var Wi=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?Ai(e):t}(this,(e=zi(n)).call.apply(e,[this].concat(r))),Ri(Ai(t),"state",{}),Ri(Ai(t),"onChange",(function(e){var n=t.props.onChange;t.setState({value:e}),n(e)})),Ri(Ai(t),"onAmPmChange",(function(e){(0,t.props.onAmPmChange)(e)})),Ri(Ai(t),"onCurrentSelectPanelChange",(function(e){t.setState({currentSelectPanel:e})})),Ri(Ai(t),"disabledHours",(function(){var e=t.props,n=e.use12Hours,o=(0,e.disabledHours)();return n&&Array.isArray(o)&&(o=t.isAM()?o.filter((function(e){return e<12})).map((function(e){return 0===e?12:e})):o.map((function(e){return 12===e?12:e-12}))),o})),t}var o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ii(e,t)}(n,e),o=n,i=[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ni(Object(n),!0).forEach((function(t){Ri(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ni(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{value:e.value}):null}}],(r=[{key:"close",value:function(){(0,this.props.onEsc)()}},{key:"isAM",value:function(){var e=this.props.defaultOpenValue,t=this.state.value||e;return t.hour()>=0&&t.hour()<12}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,o=e.className,r=e.placeholder,i=e.disabledMinutes,a=e.disabledSeconds,l=e.hideDisabledOptions,p=e.showHour,s=e.showMinute,c=e.showSecond,d=e.format,u=e.defaultOpenValue,h=e.clearText,g=e.onEsc,f=e.addon,m=e.use12Hours,x=e.focusOnOpen,v=e.onKeyDown,b=e.hourStep,y=e.minuteStep,w=e.secondStep,_=e.inputReadOnly,k=e.clearIcon,M=this.state,S=M.value,E=M.currentSelectPanel,C=this.disabledHours(),O=i(S?S.hour():null),j=a(S?S.hour():null,S?S.minute():null),T=Fi(24,C,l,b),P=Fi(60,O,l,y),D=Fi(60,j,l,w),N=function(e,t,n,o){var r=t.slice().sort((function(t,n){return Math.abs(e.hour()-t)-Math.abs(e.hour()-n)}))[0],i=n.slice().sort((function(t,n){return Math.abs(e.minute()-t)-Math.abs(e.minute()-n)}))[0],a=o.slice().sort((function(t,n){return Math.abs(e.second()-t)-Math.abs(e.second()-n)}))[0];return li()("".concat(r,":").concat(i,":").concat(a),"HH:mm:ss")}(u,T,P,D);return t().createElement("div",{className:$n()(o,"".concat(n,"-inner"))},t().createElement(gi,{clearText:h,prefixCls:n,defaultOpenValue:N,value:S,currentSelectPanel:E,onEsc:g,format:d,placeholder:r,hourOptions:T,minuteOptions:P,secondOptions:D,disabledHours:this.disabledHours,disabledMinutes:i,disabledSeconds:a,onChange:this.onChange,focusOnOpen:x,onKeyDown:v,inputReadOnly:_,clearIcon:k}),t().createElement(Di,{prefixCls:n,value:S,defaultOpenValue:N,format:d,onChange:this.onChange,onAmPmChange:this.onAmPmChange,showHour:p,showMinute:s,showSecond:c,hourOptions:T,minuteOptions:P,secondOptions:D,disabledHours:this.disabledHours,disabledMinutes:i,disabledSeconds:a,onCurrentSelectPanelChange:this.onCurrentSelectPanelChange,use12Hours:m,onEsc:g,isAM:this.isAM()}),f(this))}}])&&Li(o.prototype,r),i&&Li(o,i),n}(e.Component);Ri(Wi,"propTypes",{clearText:mn().string,prefixCls:mn().string,className:mn().string,defaultOpenValue:mn().object,value:mn().object,placeholder:mn().string,format:mn().string,inputReadOnly:mn().bool,disabledHours:mn().func,disabledMinutes:mn().func,disabledSeconds:mn().func,hideDisabledOptions:mn().bool,onChange:mn().func,onAmPmChange:mn().func,onEsc:mn().func,showHour:mn().bool,showMinute:mn().bool,showSecond:mn().bool,use12Hours:mn().bool,hourStep:mn().number,minuteStep:mn().number,secondStep:mn().number,addon:mn().func,focusOnOpen:mn().bool,onKeyDown:mn().func,clearIcon:mn().node}),Ri(Wi,"defaultProps",{prefixCls:"rc-time-picker-panel",onChange:Hi,disabledHours:Hi,disabledMinutes:Hi,disabledSeconds:Hi,defaultOpenValue:li()(),use12Hours:!1,addon:Hi,onKeyDown:Hi,onAmPmChange:Hi,inputReadOnly:!1}),Tn(Wi);const Vi=Wi;var Yi={adjustX:1,adjustY:1},Ui=[0,0];const Bi={bottomLeft:{points:["tl","tl"],overflow:Yi,offset:[0,-3],targetOffset:Ui},bottomRight:{points:["tr","tr"],overflow:Yi,offset:[0,-3],targetOffset:Ui},topRight:{points:["br","br"],overflow:Yi,offset:[0,3],targetOffset:Ui},topLeft:{points:["bl","bl"],overflow:Yi,offset:[0,3],targetOffset:Ui}};function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Gi(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Zi(e){return Zi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Zi(e)}function qi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qi(e,t){return Qi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Qi(e,t)}function Xi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ki(){}function Ji(e,t){this[e]=t}var ea=function(e){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?qi(e):t}(this,Zi(n).call(this,e)),Xi(qi(t),"onPanelChange",(function(e){t.setValue(e)})),Xi(qi(t),"onAmPmChange",(function(e){(0,t.props.onAmPmChange)(e)})),Xi(qi(t),"onClear",(function(e){e.stopPropagation(),t.setValue(null),t.setOpen(!1)})),Xi(qi(t),"onVisibleChange",(function(e){t.setOpen(e)})),Xi(qi(t),"onEsc",(function(){t.setOpen(!1),t.focus()})),Xi(qi(t),"onKeyDown",(function(e){40===e.keyCode&&t.setOpen(!0)})),t.saveInputRef=Ji.bind(qi(t),"picker"),t.savePanelRef=Ji.bind(qi(t),"panelInstance");var o=e.defaultOpen,r=e.defaultValue,i=e.open,a=void 0===i?o:i,l=e.value,p=void 0===l?r:l;return t.state={open:a,value:p},t}var o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qi(e,t)}(n,e),o=n,r=[{key:"setValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"getFormat",value:function(){var e=this.props,t=e.format,n=e.showHour,o=e.showMinute,r=e.showSecond,i=e.use12Hours;return t||(i?[n?"h":"",o?"mm":"",r?"ss":""].filter((function(e){return!!e})).join(":").concat(" a"):[n?"HH":"",o?"mm":"",r?"ss":""].filter((function(e){return!!e})).join(":"))}},{key:"getPanelElement",value:function(){var e=this.props,n=e.prefixCls,o=e.placeholder,r=e.disabledHours,i=e.disabledMinutes,a=e.disabledSeconds,l=e.hideDisabledOptions,p=e.inputReadOnly,s=e.showHour,c=e.showMinute,d=e.showSecond,u=e.defaultOpenValue,h=e.clearText,g=e.addon,f=e.use12Hours,m=e.focusOnOpen,x=e.onKeyDown,v=e.hourStep,b=e.minuteStep,y=e.secondStep,w=e.clearIcon,_=this.state.value;return t().createElement(Vi,{clearText:h,prefixCls:"".concat(n,"-panel"),ref:this.savePanelRef,value:_,inputReadOnly:p,onChange:this.onPanelChange,onAmPmChange:this.onAmPmChange,defaultOpenValue:u,showHour:s,showMinute:c,showSecond:d,onEsc:this.onEsc,format:this.getFormat(),placeholder:o,disabledHours:r,disabledMinutes:i,disabledSeconds:a,hideDisabledOptions:l,use12Hours:f,hourStep:v,minuteStep:b,secondStep:y,addon:g,focusOnOpen:m,onKeyDown:x,clearIcon:w})}},{key:"getPopupClassName",value:function(){var e=this.props,t=e.showHour,n=e.showMinute,o=e.showSecond,r=e.use12Hours,i=e.prefixCls,a=e.popupClassName,l=0;return t&&(l+=1),n&&(l+=1),o&&(l+=1),r&&(l+=1),$n()(a,Xi({},"".concat(i,"-panel-narrow"),!(t&&n&&o||r)),"".concat(i,"-panel-column-").concat(l))}},{key:"setOpen",value:function(e){var t=this.props,n=t.onOpen,o=t.onClose;this.state.open!==e&&("open"in this.props||this.setState({open:e}),e?n({open:e}):o({open:e}))}},{key:"focus",value:function(){this.picker.focus()}},{key:"blur",value:function(){this.picker.blur()}},{key:"renderClearButton",value:function(){var e=this,n=this.state.value,o=this.props,r=o.prefixCls,i=o.allowEmpty,a=o.clearIcon,l=o.clearText,p=o.disabled;if(!i||!n||p)return null;if(t().isValidElement(a)){var s=(a.props||{}).onClick;return t().cloneElement(a,{onClick:function(){s&&s.apply(void 0,arguments),e.onClear.apply(e,arguments)}})}return t().createElement("a",{role:"button",className:"".concat(r,"-clear"),title:l,onClick:this.onClear,tabIndex:0},a||t().createElement("i",{className:"".concat(r,"-clear-icon")}))}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,o=e.placeholder,r=e.placement,i=e.align,a=e.id,l=e.disabled,p=e.transitionName,s=e.style,c=e.className,d=e.getPopupContainer,u=e.name,h=e.autoComplete,g=e.onFocus,f=e.onBlur,m=e.autoFocus,x=e.inputReadOnly,v=e.inputIcon,b=e.popupStyle,y=this.state,w=y.open,_=y.value,k=this.getPopupClassName();return t().createElement(ii,{prefixCls:"".concat(n,"-panel"),popupClassName:k,popupStyle:b,popup:this.getPanelElement(),popupAlign:i,builtinPlacements:Bi,popupPlacement:r,action:l?[]:["click"],destroyPopupOnHide:!0,getPopupContainer:d,popupTransitionName:p,popupVisible:w,onPopupVisibleChange:this.onVisibleChange},t().createElement("span",{className:$n()(n,c),style:s},t().createElement("input",{className:"".concat(n,"-input"),ref:this.saveInputRef,type:"text",placeholder:o,name:u,onKeyDown:this.onKeyDown,disabled:l,value:_&&_.format(this.getFormat())||"",autoComplete:h,onFocus:g,onBlur:f,autoFocus:m,onChange:Ki,readOnly:!!x,id:a}),v||t().createElement("span",{className:"".concat(n,"-icon")}),this.renderClearButton()))}}],i=[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return"value"in e&&(n.value=e.value),void 0!==e.open&&(n.open=e.open),Object.keys(n).length>0?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$i(Object(n),!0).forEach((function(t){Xi(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n):null}}],r&&Gi(o.prototype,r),i&&Gi(o,i),n}(e.Component);Xi(ea,"propTypes",{prefixCls:mn().string,clearText:mn().string,value:mn().object,defaultOpenValue:mn().object,inputReadOnly:mn().bool,disabled:mn().bool,allowEmpty:mn().bool,defaultValue:mn().object,open:mn().bool,defaultOpen:mn().bool,align:mn().object,placement:mn().any,transitionName:mn().string,getPopupContainer:mn().func,placeholder:mn().string,format:mn().string,showHour:mn().bool,showMinute:mn().bool,showSecond:mn().bool,style:mn().object,className:mn().string,popupClassName:mn().string,popupStyle:mn().object,disabledHours:mn().func,disabledMinutes:mn().func,disabledSeconds:mn().func,hideDisabledOptions:mn().bool,onChange:mn().func,onAmPmChange:mn().func,onOpen:mn().func,onClose:mn().func,onFocus:mn().func,onBlur:mn().func,addon:mn().func,name:mn().string,autoComplete:mn().string,use12Hours:mn().bool,hourStep:mn().number,minuteStep:mn().number,secondStep:mn().number,focusOnOpen:mn().bool,onKeyDown:mn().func,autoFocus:mn().bool,id:mn().string,inputIcon:mn().node,clearIcon:mn().node}),Xi(ea,"defaultProps",{clearText:"clear",prefixCls:"rc-time-picker",defaultOpen:!1,inputReadOnly:!1,style:{},className:"",popupClassName:"",popupStyle:{},align:{},defaultOpenValue:li()(),allowEmpty:!0,showHour:!0,showMinute:!0,showSecond:!0,disabledHours:Ki,disabledMinutes:Ki,disabledSeconds:Ki,hideDisabledOptions:!1,placement:"bottomLeft",onChange:Ki,onAmPmChange:Ki,onOpen:Ki,onClose:Ki,onFocus:Ki,onBlur:Ki,addon:Ki,use12Hours:!1,focusOnOpen:!1,onKeyDown:Ki}),Tn(ea),dn.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    flex-grow: 1;
    width: 100%;
    background-color: var(--helpgent-color-bg-gray);

    &.helpgent-form-field-light {
        background-color: var(--helpgent-color-bg-white);
    }

    .helpgent-time-picker-body {
        width: 100%;
    }

    .helpgent-time-picker-addon {
        display: flex;
        align-items: center;
    }

    .rc-time-picker {
        display: block;
    }

    .rc-time-picker-input {
        font-family: var( --helpgent-form-font );
        font-size: 15px;
        font-weight: 500;
        margin: 0;
        padding: 0 10px;
        width: 100%;
        height: 44px;
        border: none;
        background: transparent;
        outline: none;
        box-shadow: none !important;
    }

    .rc-time-picker-clear {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        top: 50%;
        text-decoration: none;
        transform: translate( 0px, -50% );

        .rc-time-picker-clear-icon {
            height: 20px;
            width: 20px;
            &:after {
                display: flex;
                align-items: center;
            }
        }
    }
`,dn.div`
    display: flex;
    align-items: center;
    padding: 0 15px 0 5px;
    width: 300px;
    border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: var(--helpgent-color-bg-gray);

    &.helpgent-form-field-light {
        background-color: var(--helpgent-color-bg-white);
    }

    .helpgent-time-picker-items {
        display: flex;
        flex-grow: 1;

        .helpgent-time-picker-item {
            display: flex;
            align-items: center;
            margin-right: 5px;
            flex-grow: 1;
            width: 100%;

            &:not(:last-child)::after {
                content: '-';
                margin-left: 5px;
            }
        }
    }

    .helpgent-time-range-picker-addon {
        display: none;
    }

    .helpgent-time-picker-icon {
        display: flex;
        align-items: center;
        width: 14px;
        height: 14px;
        svg {
            width: 100%;
            height: 100%;
        }
    }

    &.helpgent-is-time-range {
        .rc-time-picker-panel-input {
            font-size: 14px;
        }

        .helpgent-time-picker-addon {
            display: none;
        }

        .helpgent-time-range-picker-addon {
            display: flex;
            align-items: center;
        }


        &.split-time-range {
            padding: 0;
            background-color: transparent;

            .helpgent-time-picker-items {
                flex-direction: column;
                align-items: start;
            }

            .helpgent-time-picker-item {
                margin-bottom: 10px;
                margin-right: 0;
                margin-left: 0;
                flex-direction: column;
                align-items: start;
                &:not(:last-child)::after {
                    margin-left: 0;
                    margin-top: 5px;
                    align-self: center;
                }
            }

            .helpgent-time-picker-addon {
                display: flex;
                padding-right: 10px;
            }

            .helpgent-time-range-picker-addon {
                display: none;
            }
        }
    }
`,window.helpgent.components,dn.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 40px);
    padding: 0 20px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    &.helpgent-text-screen{
        height: 100%;
    }
    .helpgent-element-element{
        &.helpgent-element-textField{
            padding: 30px 0 calc(var(--helpgent-bottom-extras-height));
            justify-content: flex-start;
            min-height: auto;
            position: relative;
            z-index: 1;
            &.helpgent-element-textField--center{
                justify-content: center;
                min-height: calc(100% - 68px);
            }
            @media only screen and (max-width: 768px){
                padding-bottom: 50px;
            }
        }
    }
    .helpgent-btn-next{
        margin-bottom: 5px;
    }
    .helpgent-file-upload{
        .helpgent-file-upload-info{
            display: flex;
            align-items: center;
            flex: 1;
            font-size: 14px;
            line-height: 1.25;
            font-weight: 500;
            margin-left: 10px;
            >span{
                word-break: break-word;
            }
        }
        .helpgent-cancel-file{
            margin-left: 5px;
            cursor: pointer;
            svg{
                width: 10px;
                height: 10px;
            }
            &:hover{
                svg{
                    path{
                        fill: var(--helpgent-color-danger);
                    }
                }
            }
        }
        .helpgent-upload-progress{
            font-size: 14px;
            color: var(--helpgent-color-gray);
        }
    }
    .helpgent-file-upload-inner{
        display: flex;
        align-items: center;
    }
    .helpgent-max-size-notice{
        font-size: 13px;
        margin-top: 4px;
        color: var(--helpgent-color-text);
    }
    textarea.helpgent-form-group__element{
        min-height: 80px;
    }
`,dn.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 25px;
    height: 100%;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    @media only screen and (max-width: 767px){
        height: unset;
    }
    .helpgent-permission-contents{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 450px;
        text-align: center;
        margin: 0 auto 110px;
        padding-bottom: calc(var(--helpgent-bottom-extras-height));
        @media only screen and (max-width: 575px){
            margin-bottom: 0;
        }
    }
    .helpgent-permission-title{
        font-size: 18px;
        font-weight: 500;
        margin: 0px 0px 30px;
        font-family: var(--font-family);
    }
    img{
        width: 100%;
        max-width: 370px;
        margin-bottom: 26px;
    }
    .helpgent-btn{
        justify-content: center;
        margin-bottom: auto;
    }
    .helpgent-btn-back {
        margin-bottom: auto;
        margin-top: 60px;
        flex: none;
        @media only screen and (max-width: 768px){
            margin-bottom: 20px;
        }
    }
`,dn.div`
    position: relative;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    &.helpgent-record-screen{
        @media only screen and (max-width: 768px){
            height: auto;
        }
        .helpgent-sec{
            font-size: 50px;
            font-weight: 500;
            color: var(--helpgent-color-text);
            @media only screen and (max-width: 768px){
                margin-top: 60px;
            }
        }
    }

    .helpgent-record-helper-text {
        font-weight: bold;
        margin-bottom: 30px;
    }

    &.helpgent-record-audio--start{
        .helpgent-record-btn{
            position: relative;
            background-color: transparent;
            &:after{
                position: absolute;
                width: 30px;
                height: 30px;
                left: 50%;
                top: 50%;
                border-radius: 8px;
                content: "";
                background-color: rgb(252, 73, 93);
                transform: translate(-50%, -50%);
            }
            svg{
                display: none;
            }
        }
    }
    &.helpgent-video-recorder{
        position: relative;
        max-width: 100%;
        &:after,
        &:before{
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 20%;
            content: "";
            z-index: 1;
            opacity: 0.8;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgb(0, 0, 0));
        }
        &:before{
            top: auto;
            bottom: 0px;
            border-radius: 0px 0px 23px 23px;
            opacity: 0.6;
            background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
        }
        video{
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 25px;
            object-fit: cover;
            inset: 0px;
        }
        .helpgent-video-recorder-countdown-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            .helpgent-countdown-timer {
                color: #ffffff;
            }
        }
        .helpgent-timer{
            position: absolute;
            display: block;
            top: 20px;
            left: 65px;
            z-index: 2;
            .helpgent-sec{
                font-size: 20px;
                color: var(--helpgent-color-white);
                font-family: var(--font-family);
            }
        }
        .helpgent-record-action{
            position: relative;
            margin: auto 0 calc(var(--helpgent-bottom-extras-height) + 20px);
            padding: 0;
            z-index: 101;
            .helpgent-btn-record-right{
                @media only screen and (max-width: 767px){
                    top: 70%;
                }
            }
        }
        .helpgent-record-btn{
            position: relative;
            display: block;
            width: 70px;
            height: 70px;
            margin: 0px auto;
            border-radius: 50%;
            border: 5px solid var(--helpgent-color-white);
            background-color: var(--helpgent-color-white);
            &:after{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: calc(100%);
                height: calc(100%);
                border-radius: 50%;
                content: "";
                z-index: 101;
                transition-property: width, height, border-radius;
                transition-duration: 0.2s;
                transition-timing-function: ease-in;
                background-color: rgb(252, 73, 93);
            }
        }
    }
    .helpgent-btn-back{
        position: absolute;
        left: 15px;
        top: 15px;
        z-index: 99;
        @media only screen and (max-width: 768px){
            left: 60px;
        }
        @media only screen and (max-width: 480px){
            left: 45px;
        }
    }
    .helpgent-timer{
        &.helpgent-timer-start{
            .helpgent-sec{
                color: rgb(252, 73, 93);
            }
        }
        .helpgent-sec{
            font-size: 50px;
            font-weight: 500;
            color: var(--helpgent-color-text)
        }
    }

    .helpgent-record-action{
        padding-top: 200px;
    }
    &.helpgent-record-screen{
        .helpgent-record-action{
            @media only screen and (max-width: 575px){
                padding-top: 160px;
            }
        }
    }
    .helpgent-record-action-inner{
        position: relative;
    }
    .helpgent-record-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 110px;
        margin: 0px auto;
        border-radius: 50%;
        transition: background-color 0.3s ease-in-out 0s;
        background-color: rgb(252, 73, 93);
        border: 2px solid rgb(252, 73, 93);
        @media only screen and (max-width: 575px){
            width: 80px;
            height: 80px;
        }
        &:hover{
            color: rgb(252, 73, 93);
            background-color: rgb(255, 255, 255);
            svg{
                path{
                    fill: rgb(252, 73, 93);
                }
            }
        }
        svg{
            width: 36px;
            height: 36px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-btn-record-right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        position: absolute;
        left: calc(50% + 113px);
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: rgb(180, 180, 180);
        border: 2px solid transparent;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out 0s;
        color: var(--helpgent-color-white);

        @media only screen and (max-width: 400px){
            left: calc(50% + 80px);
        }

        svg{
            width: 20px;
            height: 20px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
        &:hover{
            background-color: transparent;
            border-color: rgb(180, 180, 180);
            svg{
                path{
                    fill: rgb(180, 180, 180);
                }
            }
        }
    }

    .--is-danger {
        color: rgb(252, 73, 93);
    }
`,dn.div`
    padding: 80px 25px 25px;
    text-align: center;
    box-sizing: border-box;
    &.helpgent-media-preview,
    &.helpgent-recorded-preview{
        padding: 25px 25px 85px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media only screen and (max-width: 767px){
            height: unset;
        }
        .helpgent-media-preview__video{
            position: relative;
            video{
                width: 100%;
                height: auto;
                max-height: 250px;
                object-fit: cover;
                border-radius: 15px;
            }
        }
        .helpgent-recorded-preview__bottom{
            margin-top: 50px;
        }
    }
    &.helpgent-recorded-preview{
        width: 100%;
        height: 550px;
        overflow: auto;
        .helpgent-recorded-preview__contents{
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
        }
    }
    .helpgent-recorded-preview__top{
        position: relative;
    }

    .helpgent-btn-recorded{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        margin: 0px auto;
        border-radius: 50%;
        z-index: 101;
        transition: box-shadow 0.2s ease-in 0s;
        background-color: var(--color-white);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 50px;
        cursor: pointer;
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 60px;
        }
        svg{
            width: 20px;
            height: 20px;
            path{
                fill: var(--helpgent-color-primary);
            }
        }
        &.helpgent-btn-recorded-pause{

        }
    }
    .helpgent-audio-range{
        width: 275px;
        display: block;
        margin: 60px auto 0;
        @media only screen and (max-width: 400px){
            width: 200px;
        }
    }
    .helpgent-recorded-preview__bottom{
        margin-top: 35px;
        h4{
            font-size: 20px;
            font-weight: 600;
            margin: 0px 0px 20px;
        }
    }
    .helpgent-recorded-preview__bottom-actions{
        a{
            display: flex;
            justify-content: center;
            width: 100%;
            text-align: center;
            box-sizing: border-box;
            border-radius: 14px;
        }
        a + a{
            margin-top: 10px;
        }
    }
`,dn.div`
    height: 100%;
    font-family: var(--font-family);
    .helpgent-record-send-progress__content {
        h4,
        p {
            font-family: var(--font-family);
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 0;
        }
        p {
            margin-top: 12px;
        }
    }
    .helpgent-record-send-progress__bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 164px;
        height: 164px;
        border-radius: 50%;
        margin: 0 auto 40px;

        &:after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 158px;
            height: 158px;
            border-radius: 50%;
            background-color: white;
        }

        &:before {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-image: linear-gradient(
                    90deg,
                    #6551f2 0%,
                    transparent 0%,
                    transparent
                ),
                linear-gradient(270deg, #6551f2 50%, #e8e8e8 50%, #e8e8e8);
            animation: helpgentSpinner 900ms infinite linear forwards;
            content: '';
        }

        .helpgent-record-send-progress__bar_content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            z-index: 101;
        }

        span {
            display: block;
            font-size: 16px;
        }

        .helpgent-record-send-progress__bar_count {
            font-size: 32px;
        }
    }
`,dn.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 100%;
    padding: 0 25px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    z-index: 1;
    .helpgent-screen-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        width: 100%;
        @media only screen and (max-width: 575px){
            margin-top: 15px;
        }
    }
    .helpgent-video-service{
        width: 100%;
        text-align: center;
        .helpgent-btn{
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
            border-radius: 14px;
        }
        span{
            font-size: 13px;
            font-weight: 500;
            margin: 12px 0px;
            display: inline-block;
        }
    }
    .helpgent-short-text{
        font-size: 12px;
        font-weight: 500;
        font-family: var(--font-family);
        color: rgb(137, 137, 137);
        margin: 0px;
    }
`,n.p,n.p,dn.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
    background: rgba(0,0,0, 0.3);
    border-radius: 0 0 20px 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 10;
    &.helpgent-countdown-modal {
        position: fixed;
        z-index: 99999;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(137, 137, 137, 0.537254902);
    }
    &.helpgent-countdown{
        border-radius: 0;
    }

    .helpgent-countdown-timer-count,
    .helpgent-countdown-timer-text,
    .helpgent-countdown-timer-hint {
        margin: 0;
        color: #fff;
        line-height: 1;
    }

    .helpgent-countdown-timer-count {
        margin-bottom: 30px;
        font-size: 150px;
        @media only screen and (max-width: 768px){
            font-size: 80px;
        }
    }

    .helpgent-countdown-timer-text {
        font-size: 50px;
        @media only screen and (max-width: 768px){
            font-size: 30px;
        }
    }

    .helpgent-countdown-timer-hint {
        margin-top: 20px;
    }
`;const ta={360:{width:640,height:360},480:{width:640,height:480},720:{width:1280,height:720},1080:{width:1920,height:1080},1440:{width:2560,height:1440},2160:{width:3840,height:2160,hdKey:"4K"},7680:{width:7680,height:4320,hdKey:"8K"}};function na(e){const t=e.hdKey?` (${e.hdKey})`:"";return`${e.height}p${t}: ${e.width}x${e.height}`}var oa;Object.keys(ta).map((function(e){return void 0===ta[e]?{value:"",label:""}:{value:parseInt(e),label:na(ta[e])}})).reverse(),dn.div`
    &.helpgent-recorder-floating-control {
        position: fixed;
        display: block;
        background: var(--helpgent-color-dark);
        border-radius: 10px;
        overflow: hidden;
        color: #fff;
        text-align: center;
        bottom: var(--helpgent-bubble-offset-y);
    }

    &.--position-right {
        right: var(--helpgent-bubble-offset-x);
    }

    &.--position-left {
        left: var(--helpgent-bubble-offset-x);
    }

    .helpgent-recorder-floating-control-item {
        border-bottom: 1px solid #6a6a6a;
        &:last-child {
            border-bottom: none;
        }
    }

    .helpgent-recorder-floating-control-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 10px 8px;
        box-sizing: border-box;
        box-shadow: none;
        outline: none;
    }

    .helpgent-recorder-floating-control-icon {
        display: block;
        width: 12px;
        height: 18px;
        padding: 0;
        svg path {
            fill: #fff;
        }

        &.--icon-stop {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px;
            width: 25px;
            height: 25px;
            box-sizing: border-box;
            border-radius: 100%;
            background: #fff;
        }
    }

    .helpgent-recorder-floating-control-icon-stop {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10px;
        width: 10px;

        svg path {
            fill: red;
        }
    }
`,"function"==typeof SuppressedError&&SuppressedError,function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(oa||(oa={}));var ra=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ia.apply(this,arguments)}function aa(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function la(e,t){return la=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},la(e,t)}var pa=function(t){var n,o;function r(){var e;return(e=t.call(this)||this).handleExpired=e.handleExpired.bind(aa(e)),e.handleErrored=e.handleErrored.bind(aa(e)),e.handleChange=e.handleChange.bind(aa(e)),e.handleRecaptchaRef=e.handleRecaptchaRef.bind(aa(e)),e}o=t,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,la(n,o);var i=r.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var t=this.props,n=(t.sitekey,t.onChange,t.theme,t.type,t.tabindex,t.onExpired,t.onErrored,t.size,t.stoken,t.grecaptcha,t.badge,t.hl,t.isolated,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,ra));return e.createElement("div",ia({},n,{ref:this.handleRecaptchaRef}))},r}(e.Component);pa.displayName="ReCAPTCHA",pa.propTypes={sitekey:mn().string.isRequired,onChange:mn().func,grecaptcha:mn().object,theme:mn().oneOf(["dark","light"]),type:mn().oneOf(["image","audio"]),tabindex:mn().number,onExpired:mn().func,onErrored:mn().func,size:mn().oneOf(["compact","normal","invisible"]),stoken:mn().string,hl:mn().string,badge:mn().oneOf(["bottomright","bottomleft","inline"]),isolated:mn().bool},pa.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var sa=n(4146),ca=n.n(sa);function da(){return da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},da.apply(this,arguments)}var ua,ha,ga={},fa=0,ma="onloadcallback";function xa(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}(ua=function(){var e=xa(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+ma+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+ma+"&render=explicit"},ha=(ha={callbackName:ma,globalName:"grecaptcha",attributes:xa().nonce?{nonce:xa().nonce}:{}})||{},function(t){var n=t.displayName||t.name||"Component",o=function(n){var o,r;function i(e,t){var o;return(o=n.call(this,e,t)||this).state={},o.__scriptURL="",o}r=n,(o=i).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+fa++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL=ua(),this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=ga[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[ha.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),o=ha,r=o.globalName,i=o.callbackName,a=o.scriptId;if(r&&void 0!==window[r]&&(ga[t]={loaded:!0,observers:{}}),ga[t]){var l=ga[t];return l&&(l.loaded||l.errored)?void this.asyncScriptLoaderHandleLoad(l):void(l.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var p={};p[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},ga[t]={loaded:!1,observers:p};var s=document.createElement("script");for(var c in s.src=t,s.async=!0,ha.attributes)s.setAttribute(c,ha.attributes[c]);a&&(s.id=a);var d=function(e){if(ga[t]){var n=ga[t].observers;for(var o in n)e(n[o])&&delete n[o]}};i&&"undefined"!=typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),s.onload=function(){var e=ga[t];e&&(e.loaded=!0,d((function(t){return!i&&(t(e),!0)})))},s.onerror=function(){var e=ga[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(s)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===ha.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var o=ga[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===ha.removeOnUnmount&&delete ga[e])},a.render=function(){var n=ha.globalName,o=this.props,r=(o.asyncScriptOnLoad,o.forwardedRef),i=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,["asyncScriptOnLoad","forwardedRef"]);return n&&"undefined"!=typeof window&&(i[n]=void 0!==window[n]?window[n]:void 0),i.ref=r,(0,e.createElement)(t,i)},i}(e.Component),r=(0,e.forwardRef)((function(t,n){return(0,e.createElement)(o,da({},t,{forwardedRef:n}))}));return r.displayName="AsyncScriptLoader("+n+")",r.propTypes={asyncScriptOnLoad:mn().func},ca()(r,t)})(pa),window.wp.apiFetch,dn.div`
    padding: 20px;
    border-radius: 10px;
    max-width: 290px;
    text-align: left;
    background-color: var(--helpgent-color-bg-gray);
    &.helpgent-google-recaptcha-block--passed{
        .helpgent-google-recaptcha-block__element-top{
            svg{
                path{
                    fill: var(--helpgent-color-success);
                }
            }
        }
    }   
    .helpgent-google-recaptcha-block__element-top{
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        svg{
            width: 18px;
            height: 18px;
            margin-right: 8px;
        }
        h5{
            font-size: 15px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin: 0;
        }
    }
    .helpgent-google-recaptcha-block__element-details{
        margin: 0;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
    }
`;var va,ba=new Uint8Array(16);function ya(){if(!va&&!(va="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return va(ba)}const wa=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var _a=[],ka=0;ka<256;++ka)_a.push((ka+256).toString(16).substr(1));const Ma=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(_a[e[t+0]]+_a[e[t+1]]+_a[e[t+2]]+_a[e[t+3]]+"-"+_a[e[t+4]]+_a[e[t+5]]+"-"+_a[e[t+6]]+_a[e[t+7]]+"-"+_a[e[t+8]]+_a[e[t+9]]+"-"+_a[e[t+10]]+_a[e[t+11]]+_a[e[t+12]]+_a[e[t+13]]+_a[e[t+14]]+_a[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&wa.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n},Sa=function(e,t,n){var o=(e=e||{}).random||(e.rng||ya)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return Ma(o)};Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),Sa(),(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45MDMiIHZpZXdCb3g9IjAgMCAxNiAxNS45MDMiPgogIDxwYXRoIGlkPSJmYWNlYm9vayIgZD0iTTI0LDE2YTgsOCwwLDEsMC05LjI1LDcuOVYxOC4zMTNIMTIuNzE4VjE2SDE0Ljc1VjE0LjIzN2EyLjgyMywyLjgyMywwLDAsMSwzLjAyMi0zLjExMiwxMi4zMTIsMTIuMzEyLDAsMCwxLDEuNzkxLjE1NnYxLjk2OEgxOC41NTRhMS4xNTYsMS4xNTYsMCwwLDAtMS4zLDEuMjQ5VjE2aDIuMjE5bC0uMzU1LDIuMzEzSDE3LjI1VjIzLjlBOCw4LDAsMCwwLDI0LDE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTggLTgpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="}),(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGlkPSJ0d2l0dGVyIiBkPSJNIDExIDQgQyA3LjEzNCA0IDQgNy4xMzQgNCAxMSBMIDQgMzkgQyA0IDQyLjg2NiA3LjEzNCA0NiAxMSA0NiBMIDM5IDQ2IEMgNDIuODY2IDQ2IDQ2IDQyLjg2NiA0NiAzOSBMIDQ2IDExIEMgNDYgNy4xMzQgNDIuODY2IDQgMzkgNCBMIDExIDQgeiBNIDEzLjA4NTkzOCAxMyBMIDIxLjAyMzQzOCAxMyBMIDI2LjY2MDE1NiAyMS4wMDk3NjYgTCAzMy41IDEzIEwgMzYgMTMgTCAyNy43ODkwNjIgMjIuNjEzMjgxIEwgMzcuOTE0MDYyIDM3IEwgMjkuOTc4NTE2IDM3IEwgMjMuNDM3NSAyNy43MDcwMzEgTCAxNS41IDM3IEwgMTMgMzcgTCAyMi4zMDg1OTQgMjYuMTAzNTE2IEwgMTMuMDg1OTM4IDEzIHogTSAxNi45MTQwNjIgMTUgTCAzMS4wMjE0ODQgMzUgTCAzNC4wODU5MzggMzUgTCAxOS45Nzg1MTYgMTUgTCAxNi45MTQwNjIgMTUgeiIvPjwvc3ZnPg=="}),(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMS4yNSIgdmlld0JveD0iMCAwIDE2IDExLjI1Ij4KICA8cGF0aCBpZD0ieW91dHViZSIgZD0iTTMwLjYsNjUuNzZhMi4wMSwyLjAxLDAsMCwwLTEuNDE1LTEuNDI0QTQ3LjUxLDQ3LjUxLDAsMCwwLDIyLjkzMyw2NGE0Ny41MSw0Ny41MSwwLDAsMC02LjI1MS4zMzcsMi4wMSwyLjAxLDAsMCwwLTEuNDE1LDEuNDI0LDIyLjYzNiwyMi42MzYsMCwwLDAsMCw3Ljc1MiwxLjk4LDEuOTgsMCwwLDAsMS40MTUsMS40LDQ3LjUxMyw0Ny41MTMsMCwwLDAsNi4yNTEuMzM2LDQ3LjUxMyw0Ny41MTMsMCwwLDAsNi4yNTEtLjMzNiwxLjk4MSwxLjk4MSwwLDAsMCwxLjQxNS0xLjQsMjIuNjM2LDIyLjYzNiwwLDAsMCwwLTcuNzUyWm0tOS4zLDYuMjU1VjY3LjI1N2w0LjE4MiwyLjM3OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC45MzMgLTY0KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"}),(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45OTYiIHZpZXdCb3g9IjAgMCAxNiAxNS45OTYiPgogIDxwYXRoIGlkPSJpbnN0YWdyYW0iIGQ9Ik03LjkyNywzNS43MjJhNC4xLDQuMSwwLDEsMCw0LjEsNC4xQTQuMDk1LDQuMDk1LDAsMCwwLDcuOTI3LDM1LjcyMlptMCw2Ljc2OGEyLjY2NiwyLjY2NiwwLDEsMSwyLjY2Ni0yLjY2NkEyLjY3MSwyLjY3MSwwLDAsMSw3LjkyNyw0Mi40OVptNS4yMjYtNi45MzVBLjk1Ny45NTcsMCwxLDEsMTIuMiwzNC42Ljk1NC45NTQsMCwwLDEsMTMuMTUyLDM1LjU1NFptMi43MTYuOTcxYTQuNzM0LDQuNzM0LDAsMCwwLTEuMjkyLTMuMzUyLDQuNzY1LDQuNzY1LDAsMCwwLTMuMzUyLTEuMjkyYy0xLjMyMS0uMDc1LTUuMjc5LS4wNzUtNi42LDBBNC43NTgsNC43NTgsMCwwLDAsMS4yNzMsMzMuMTcsNC43NSw0Ljc1LDAsMCwwLS4wMTksMzYuNTIxYy0uMDc1LDEuMzIxLS4wNzUsNS4yNzksMCw2LjZhNC43MzQsNC43MzQsMCwwLDAsMS4yOTIsMy4zNTIsNC43NzEsNC43NzEsMCwwLDAsMy4zNTIsMS4yOTJjMS4zMjEuMDc1LDUuMjc5LjA3NSw2LjYsMGE0LjczNCw0LjczNCwwLDAsMCwzLjM1Mi0xLjI5Miw0Ljc2NSw0Ljc2NSwwLDAsMCwxLjI5Mi0zLjM1MkMxNS45NDQsNDEuOCwxNS45NDQsMzcuODQ2LDE1Ljg2OSwzNi41MjVabS0xLjcwNiw4LjAxM2EyLjcsMi43LDAsMCwxLTEuNTIxLDEuNTIxYy0xLjA1My40MTgtMy41NTIuMzIxLTQuNzE1LjMyMXMtMy42NjYuMDkzLTQuNzE1LS4zMjFhMi43LDIuNywwLDAsMS0xLjUyMS0xLjUyMWMtLjQxOC0xLjA1My0uMzIxLTMuNTUyLS4zMjEtNC43MTVzLS4wOTMtMy42NjYuMzIxLTQuNzE1YTIuNywyLjcsMCwwLDEsMS41MjEtMS41MjFjMS4wNTMtLjQxOCwzLjU1Mi0uMzIxLDQuNzE1LS4zMjFzMy42NjYtLjA5Myw0LjcxNS4zMjFhMi43LDIuNywwLDAsMSwxLjUyMSwxLjUyMWMuNDE4LDEuMDUzLjMyMSwzLjU1Mi4zMjEsNC43MTVTMTQuNTgsNDMuNDg5LDE0LjE2Myw0NC41MzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3NSAtMzEuODI1KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"});const Ea=e=>e&&"object"==typeof e&&!Array.isArray(e);function Ca(e,t,n,o){window.helpgentGlobalState||(window.helpgentGlobalState={});let r=window.helpgentGlobalState;if(void 0!==o&&(void 0===window.helpgentGlobalState[o]&&(window.helpgentGlobalState[o]={}),r=window.helpgentGlobalState[o]),"boolean"==typeof n&&n&&Ea(t)&&Ea(r[e])){const n={...r[e],...t};return void 0!==o?(window.helpgentGlobalState[o][e]=n,window.helpgentGlobalState[o][e]):(window.helpgentGlobalState[e]=n,window.helpgentGlobalState[e])}return void 0!==o?(window.helpgentGlobalState[o][e]=t,window.helpgentGlobalState[o][e]):(window.helpgentGlobalState[e]=t,window.helpgentGlobalState[e])}function Oa(t){const{selectedElement:n,isClientModeActive:o,featureState:r,setFeatureState:i,getValues:a,clearErrors:l,controls:p}=t,{activeElement:s,singleForm:c,activeElementId:d}=r,{elements:u}=c.content,{filteredWelcomeElement:h,filteredEndElement:g,filteredOtherElement:f}=u.reduce(((e,t)=>("welcome"===t.element_type?e.filteredWelcomeElement.push(t):"end"===t.element_type?e.filteredEndElement.push(t):"user_validation"!==t.element_type&&e.filteredOtherElement.push(t),e)),{filteredWelcomeElement:[],filteredEndElement:[],filteredOtherElement:[]}),m=[...h,...f,...g].findIndex((e=>e.id===s.id)),x=r.isProcessingSubmitCallback;return o&&(0,e.createElement)(hn,{className:`helpgent-navigation ${-1!==m&&0===m&&"helpgent-navigation-only-next"}`},(0,e.createElement)("button",{disabled:x||"recaptcha"===s?.element_type&&!r?.isReCaptchaPassed&&""!==helpgent_localization?.google_recaptcha_site_key,className:"helpgent-navigation__left "+(x||"recaptcha"===s?.element_type&&!r?.isReCaptchaPassed&&""!==helpgent_localization?.google_recaptcha_site_key||-1!==m&&0===m?"helpgent-disabled":""),onClick:e=>{-1!==m&&0!==m?function(e,t,n,o,r){e.preventDefault(),t(),Ca("chatFormBeforeSubmitCallback",null),Ca("chatFormBeforeSubmitCallbackArgs",null);let i=[...o.cachedElementsValue];const a={id:o.activeElement.id,value:n()},l=i.findIndex((e=>e.id===a.id));-1!==l?i[l].value=a.value:i.push(a);const p=o.submittedElements[o.submittedElements.length-1];o.submittedAnswers.pop(),o.submittedElements.pop(),r({...o,submittedElements:o.submittedElements,submittedAnswers:o.submittedAnswers,reWatchedElementIds:[...o.reWatchedElementIds,o.activeElement.id],activeElement:p,cachedElementsValue:i,openEndedAnswerType:null})}(e,l,a,r,i):e.preventDefault()}},(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0LjU1MiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNC41NTIgOCI+CiAgPHBhdGggaWQ9ImFycm93IiBkPSJNNCwwYS41NTkuNTU5LDAsMCwwLS40LjE2NEwuMTY0LDMuNmEuNTYuNTYsMCwwLDAsLjc5Mi43OTFMNCwxLjM1LDcuMDQ0LDQuMzg4QS41Ni41NiwwLDAsMCw3LjgzNiwzLjZMNC40LjE2NEEuNTU5LjU1OSwwLDAsMCw0LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDgpIHJvdGF0ZSgtOTApIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo="})),"end"!==s.element_type&&(0,e.createElement)("button",{disabled:x||"recaptcha"===s?.element_type&&!r?.isReCaptchaPassed&&""!==helpgent_localization?.google_recaptcha_site_key,className:"helpgent-navigation__right "+(x||"recaptcha"===s?.element_type&&!r?.isReCaptchaPassed&&""!==helpgent_localization?.google_recaptcha_site_key?"helpgent-disabled":""),type:"submit"},(0,e.createElement)(k,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0LjU1MiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNC41NTIgOCI+CiAgPHBhdGggaWQ9ImFycm93IiBkPSJNNCw5Ny4xNDFhLjU1OS41NTksMCwwLDAtLjQuMTY0bC0zLjQ0LDMuNDM0YS41Ni41NiwwLDAsMCwuNzkyLjc5MUw0LDk4LjQ5bDMuMDQ0LDMuMDM4YS41Ni41NiwwLDAsMCwuNzkyLS43OTFMNC40LDk3LjNBLjU1OS41NTksMCwwLDAsNCw5Ny4xNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDEuNjkyIC0wLjAwMSkgcm90YXRlKDkwKSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K"})))}const ja=window.helpgent.modules;window.addEventListener("load-helpgent-shortcode",(function(t){if((0,r.addFilter)("helpgent_chat_form_navigation","helpgent",(function(t){return t.helpgent_chat_form_navigation=(0,e.createElement)(Oa,{...t.props}),t})),0===document.querySelectorAll(".helpgent-form").length)return;const n=document.querySelector(`#helpgent-form-${t.detail.formId}`),i=JSON.parse(n.dataset.form_data),a=helpgent_localization.is_user_logged_in,l=n.dataset.is_preview_active;o.createRoot?(0,o.createRoot)(n).render((0,e.createElement)(ja.ChatShortCodeModule,{data:i,isLoggedIn:a,isPreviewActive:l})):render((0,e.createElement)(ja.ChatShortCodeModule,{data:i,isLoggedIn:a,isPreviewActive:l}),n)}))})()})();