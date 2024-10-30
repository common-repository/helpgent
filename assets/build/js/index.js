(()=>{var e={50817:(e,t)=>{"use strict";function n(){return!1}function r(){return!0}function o(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}Object.defineProperty(t,"__esModule",{value:!0}),o.prototype={isEventObject:1,constructor:o,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=r},stopPropagation:function(){this.isPropagationStopped=r},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=r,this.stopPropagation()},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=o,e.exports=t.default},32088:(e,t,n)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(50817)),i=r(n(45228)),a=!0,l=!1,s=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function p(e){return null==e}var c=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(e,t){p(e.which)&&(e.which=p(t.charCode)?t.keyCode:t.charCode),void 0===e.metaKey&&(e.metaKey=e.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(e,t){var n=void 0,r=void 0,o=void 0,i=t.wheelDelta,a=t.axis,l=t.wheelDeltaY,s=t.wheelDeltaX,p=t.detail;i&&(o=i/120),p&&(o=0-(p%3==0?p/3:p)),void 0!==a&&(a===e.HORIZONTAL_AXIS?(r=0,n=0-o):a===e.VERTICAL_AXIS&&(n=0,r=o)),void 0!==l&&(r=l/120),void 0!==s&&(n=-1*s/120),n||r||(r=o),void 0!==n&&(e.deltaX=n),void 0!==r&&(e.deltaY=r),void 0!==o&&(e.delta=o)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(e,t){var n=void 0,r=void 0,o=void 0,i=e.target,a=t.button;return i&&p(e.pageX)&&!p(t.clientX)&&(r=(n=i.ownerDocument||document).documentElement,o=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r&&r.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||o&&o.scrollTop||0)-(r&&r.clientTop||o&&o.clientTop||0)),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===i?e.toElement:e.fromElement),e}}];function h(){return a}function d(){return l}function g(e){var t=e.type,n="function"==typeof e.stopPropagation||"boolean"==typeof e.cancelBubble;o.default.call(this),this.nativeEvent=e;var r=d;"defaultPrevented"in e?r=e.defaultPrevented?h:d:"getPreventDefault"in e?r=e.getPreventDefault()?h:d:"returnValue"in e&&(r=e.returnValue===l?h:d),this.isDefaultPrevented=r;var i=[],a=void 0,p=void 0,g=s.concat();for(c.forEach((function(e){t.match(e.reg)&&(g=g.concat(e.props),e.fix&&i.push(e.fix))})),a=g.length;a;)this[p=g[--a]]=e[p];for(!this.target&&n&&(this.target=e.srcElement||document),this.target&&3===this.target.nodeType&&(this.target=this.target.parentNode),a=i.length;a;)(0,i[--a])(this,e);this.timeStamp=e.timeStamp||Date.now()}var u=o.default.prototype;(0,i.default)(g.prototype,u,{constructor:g,preventDefault:function(){var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=l,u.preventDefault.call(this)},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=a,u.stopPropagation.call(this)}}),t.default=g,e.exports=t.default},32223:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){function i(t){var r=new o.default(t);n.call(e,r)}if(e.addEventListener){var a=(l=!1,"object"==typeof r?l=r.capture||!1:"boolean"==typeof r&&(l=r),e.addEventListener(t,i,r||!1),{v:{remove:function(){e.removeEventListener(t,i,l)}}});if("object"==typeof a)return a.v}else if(e.attachEvent)return e.attachEvent("on"+t,i),{remove:function(){e.detachEvent("on"+t,i)}};var l};var r,o=(r=n(32088))&&r.__esModule?r:{default:r};e.exports=t.default},64197:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=new(n(5054).E)},63193:(e,t,n)=>{e.exports={default:n(58489),__esModule:!0}},11156:(e,t,n)=>{e.exports={default:n(20852),__esModule:!0}},89829:(e,t,n)=>{e.exports={default:n(2981),__esModule:!0}},65971:(e,t,n)=>{e.exports={default:n(85011),__esModule:!0}},75522:(e,t,n)=>{e.exports={default:n(33025),__esModule:!0}},66327:(e,t,n)=>{e.exports={default:n(37719),__esModule:!0}},9506:(e,t)=>{"use strict";t.A=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},97588:(e,t,n)=>{"use strict";var r,o=(r=n(89829))&&r.__esModule?r:{default:r};t.A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},44508:(e,t,n)=>{"use strict";var r,o=(r=n(89829))&&r.__esModule?r:{default:r};t.A=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},85505:(e,t,n)=>{"use strict";var r,o=(r=n(63193))&&r.__esModule?r:{default:r};t.A=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},27714:(e,t,n)=>{"use strict";var r=a(n(65971)),o=a(n(11156)),i=a(n(97479));function a(e){return e&&e.__esModule?e:{default:e}}t.A=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r.default?(0,r.default)(e,t):e.__proto__=t)}},5748:(e,t)=>{"use strict";t.A=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},50539:(e,t,n)=>{"use strict";var r,o=(r=n(97479))&&r.__esModule?r:{default:r};t.A=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,o.default)(t))&&"function"!=typeof t?e:t}},97479:(e,t,n)=>{"use strict";t.__esModule=!0;var r=a(n(66327)),o=a(n(75522)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof o.default&&"symbol"===i(r.default)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":void 0===e?"undefined":i(e)}},58489:(e,t,n)=>{n(79115),e.exports=n(6791).Object.assign},20852:(e,t,n)=>{n(53742);var r=n(6791).Object;e.exports=function(e,t){return r.create(e,t)}},2981:(e,t,n)=>{n(82919);var r=n(6791).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},85011:(e,t,n)=>{n(44389),e.exports=n(6791).Object.setPrototypeOf},33025:(e,t,n)=>{n(28957),n(44345),n(32469),n(75529),e.exports=n(6791).Symbol},37719:(e,t,n)=>{n(78750),n(96653),e.exports=n(1275).f("iterator")},73934:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},64233:e=>{e.exports=function(){}},90531:(e,t,n)=>{var r=n(90326);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},73901:(e,t,n)=>{var r=n(69204),o=n(9250),i=n(8830);e.exports=function(e){return function(t,n,a){var l,s=r(t),p=o(s.length),c=i(a,p);if(e&&n!=n){for(;p>c;)if((l=s[c++])!=l)return!0}else for(;p>c;c++)if((e||c in s)&&s[c]===n)return e||c||0;return!e&&-1}}},64194:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},6791:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},33971:(e,t,n)=>{var r=n(73934);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},54947:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},75872:(e,t,n)=>{e.exports=!n(82451)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},50559:(e,t,n)=>{var r=n(90326),o=n(56903).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},22499:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},76358:(e,t,n)=>{var r=n(64796),o=n(14259),i=n(98936);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var a,l=n(e),s=i.f,p=0;l.length>p;)s.call(e,a=l[p++])&&t.push(a);return t}},19786:(e,t,n)=>{var r=n(56903),o=n(6791),i=n(33971),a=n(14632),l=n(43066),s="prototype",p=function(e,t,n){var c,h,d,g=e&p.F,u=e&p.G,f=e&p.S,m=e&p.P,x=e&p.B,v=e&p.W,b=u?o:o[t]||(o[t]={}),y=b[s],w=u?r:f?r[t]:(r[t]||{})[s];for(c in u&&(n=t),n)(h=!g&&w&&void 0!==w[c])&&l(b,c)||(d=h?w[c]:n[c],b[c]=u&&"function"!=typeof w[c]?n[c]:x&&h?i(d,r):v&&w[c]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[s]=e[s],t}(d):m&&"function"==typeof d?i(Function.call,d):d,m&&((b.virtual||(b.virtual={}))[c]=d,e&p.R&&y&&!y[c]&&a(y,c,d)))};p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,p.U=64,p.R=128,e.exports=p},82451:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},56903:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},43066:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},14632:(e,t,n)=>{var r=n(21672),o=n(15495);e.exports=n(75872)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},7745:(e,t,n)=>{var r=n(56903).document;e.exports=r&&r.documentElement},14913:(e,t,n)=>{e.exports=!n(75872)&&!n(82451)((function(){return 7!=Object.defineProperty(n(50559)("div"),"a",{get:function(){return 7}}).a}))},63278:(e,t,n)=>{var r=n(64194);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},1084:(e,t,n)=>{var r=n(64194);e.exports=Array.isArray||function(e){return"Array"==r(e)}},90326:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},81199:(e,t,n)=>{"use strict";var r=n(67780),o=n(15495),i=n(1123),a={};n(14632)(a,n(15413)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},52500:(e,t,n)=>{"use strict";var r=n(98849),o=n(19786),i=n(83070),a=n(14632),l=n(52833),s=n(81199),p=n(1123),c=n(66870),h=n(15413)("iterator"),d=!([].keys&&"next"in[].keys()),g="keys",u="values",f=function(){return this};e.exports=function(e,t,n,m,x,v,b){s(n,t,m);var y,w,_,M=function(e){if(!d&&e in j)return j[e];switch(e){case g:case u:return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",S=x==u,E=!1,j=e.prototype,C=j[h]||j["@@iterator"]||x&&j[x],L=C||M(x),N=x?S?M("entries"):L:void 0,D="Array"==t&&j.entries||C;if(D&&(_=c(D.call(new e)))!==Object.prototype&&_.next&&(p(_,k,!0),r||"function"==typeof _[h]||a(_,h,f)),S&&C&&C.name!==u&&(E=!0,L=function(){return C.call(this)}),r&&!b||!d&&!E&&j[h]||a(j,h,L),l[t]=L,l[k]=f,x)if(y={values:S?L:M(u),keys:v?L:M(g),entries:N},b)for(w in y)w in j||i(j,w,y[w]);else o(o.P+o.F*(d||E),t,y);return y}},35945:e=>{e.exports=function(e,t){return{value:t,done:!!e}}},52833:e=>{e.exports={}},98849:e=>{e.exports=!0},83281:(e,t,n)=>{var r=n(93108)("meta"),o=n(90326),i=n(43066),a=n(21672).f,l=0,s=Object.isExtensible||function(){return!0},p=!n(82451)((function(){return s(Object.preventExtensions({}))})),c=function(e){a(e,r,{value:{i:"O"+ ++l,w:{}}})},h=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!s(e))return"F";if(!t)return"E";c(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!s(e))return!0;if(!t)return!1;c(e)}return e[r].w},onFreeze:function(e){return p&&h.NEED&&s(e)&&!i(e,r)&&c(e),e}}},99369:(e,t,n)=>{"use strict";var r=n(75872),o=n(64796),i=n(14259),a=n(98936),l=n(64873),s=n(63278),p=Object.assign;e.exports=!p||n(82451)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=p({},e)[n]||Object.keys(p({},t)).join("")!=r}))?function(e,t){for(var n=l(e),p=arguments.length,c=1,h=i.f,d=a.f;p>c;)for(var g,u=s(arguments[c++]),f=h?o(u).concat(h(u)):o(u),m=f.length,x=0;m>x;)g=f[x++],r&&!d.call(u,g)||(n[g]=u[g]);return n}:p},67780:(e,t,n)=>{var r=n(90531),o=n(6935),i=n(22499),a=n(36211)("IE_PROTO"),l=function(){},s="prototype",p=function(){var e,t=n(50559)("iframe"),r=i.length;for(t.style.display="none",n(7745).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),p=e.F;r--;)delete p[s][i[r]];return p()};e.exports=Object.create||function(e,t){var n;return null!==e?(l[s]=r(e),n=new l,l[s]=null,n[a]=e):n=p(),void 0===t?n:o(n,t)}},21672:(e,t,n)=>{var r=n(90531),o=n(14913),i=n(78381),a=Object.defineProperty;t.f=n(75872)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},6935:(e,t,n)=>{var r=n(21672),o=n(90531),i=n(64796);e.exports=n(75872)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),l=a.length,s=0;l>s;)r.f(e,n=a[s++],t[n]);return e}},22682:(e,t,n)=>{var r=n(98936),o=n(15495),i=n(69204),a=n(78381),l=n(43066),s=n(14913),p=Object.getOwnPropertyDescriptor;t.f=n(75872)?p:function(e,t){if(e=i(e),t=a(t,!0),s)try{return p(e,t)}catch(e){}if(l(e,t))return o(!r.f.call(e,t),e[t])}},37106:(e,t,n)=>{var r=n(69204),o=n(79032).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return a.slice()}}(e):o(r(e))}},79032:(e,t,n)=>{var r=n(59480),o=n(22499).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},14259:(e,t)=>{t.f=Object.getOwnPropertySymbols},66870:(e,t,n)=>{var r=n(43066),o=n(64873),i=n(36211)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},59480:(e,t,n)=>{var r=n(43066),o=n(69204),i=n(73901)(!1),a=n(36211)("IE_PROTO");e.exports=function(e,t){var n,l=o(e),s=0,p=[];for(n in l)n!=a&&r(l,n)&&p.push(n);for(;t.length>s;)r(l,n=t[s++])&&(~i(p,n)||p.push(n));return p}},64796:(e,t,n)=>{var r=n(59480),o=n(22499);e.exports=Object.keys||function(e){return r(e,o)}},98936:(e,t)=>{t.f={}.propertyIsEnumerable},15495:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},83070:(e,t,n)=>{e.exports=n(14632)},10485:(e,t,n)=>{var r=n(90326),o=n(90531),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(33971)(Function.call,n(22682).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},1123:(e,t,n)=>{var r=n(21672).f,o=n(43066),i=n(15413)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},36211:(e,t,n)=>{var r=n(7421)("keys"),o=n(93108);e.exports=function(e){return r[e]||(r[e]=o(e))}},7421:(e,t,n)=>{var r=n(6791),o=n(56903),i="__core-js_shared__",a=o[i]||(o[i]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(98849)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},29491:(e,t,n)=>{var r=n(43570),o=n(54947);e.exports=function(e){return function(t,n){var i,a,l=String(o(t)),s=r(n),p=l.length;return s<0||s>=p?e?"":void 0:(i=l.charCodeAt(s))<55296||i>56319||s+1===p||(a=l.charCodeAt(s+1))<56320||a>57343?e?l.charAt(s):i:e?l.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},8830:(e,t,n)=>{var r=n(43570),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},43570:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},69204:(e,t,n)=>{var r=n(63278),o=n(54947);e.exports=function(e){return r(o(e))}},9250:(e,t,n)=>{var r=n(43570),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},64873:(e,t,n)=>{var r=n(54947);e.exports=function(e){return Object(r(e))}},78381:(e,t,n)=>{var r=n(90326);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},93108:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},62613:(e,t,n)=>{var r=n(56903),o=n(6791),i=n(98849),a=n(1275),l=n(21672).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:a.f(e)})}},1275:(e,t,n)=>{t.f=n(15413)},15413:(e,t,n)=>{var r=n(7421)("wks"),o=n(93108),i=n(56903).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},45270:(e,t,n)=>{"use strict";var r=n(64233),o=n(35945),i=n(52833),a=n(69204);e.exports=n(52500)(Array,"Array",(function(e,t){this._t=a(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},79115:(e,t,n)=>{var r=n(19786);r(r.S+r.F,"Object",{assign:n(99369)})},53742:(e,t,n)=>{var r=n(19786);r(r.S,"Object",{create:n(67780)})},82919:(e,t,n)=>{var r=n(19786);r(r.S+r.F*!n(75872),"Object",{defineProperty:n(21672).f})},44389:(e,t,n)=>{var r=n(19786);r(r.S,"Object",{setPrototypeOf:n(10485).set})},44345:()=>{},78750:(e,t,n)=>{"use strict";var r=n(29491)(!0);n(52500)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},28957:(e,t,n)=>{"use strict";var r=n(56903),o=n(43066),i=n(75872),a=n(19786),l=n(83070),s=n(83281).KEY,p=n(82451),c=n(7421),h=n(1123),d=n(93108),g=n(15413),u=n(1275),f=n(62613),m=n(76358),x=n(1084),v=n(90531),b=n(90326),y=n(64873),w=n(69204),_=n(78381),M=n(15495),k=n(67780),S=n(37106),E=n(22682),j=n(14259),C=n(21672),L=n(64796),N=E.f,D=C.f,z=S.f,O=r.Symbol,I=r.JSON,T=I&&I.stringify,A="prototype",P=g("_hidden"),R=g("toPrimitive"),U={}.propertyIsEnumerable,F=c("symbol-registry"),Y=c("symbols"),H=c("op-symbols"),W=Object[A],Q="function"==typeof O&&!!j.f,B=r.QObject,G=!B||!B[A]||!B[A].findChild,Z=i&&p((function(){return 7!=k(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=N(W,t);r&&delete W[t],D(e,t,n),r&&e!==W&&D(W,t,r)}:D,V=function(e){var t=Y[e]=k(O[A]);return t._k=e,t},q=Q&&"symbol"==typeof O.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof O},K=function(e,t,n){return e===W&&K(H,t,n),v(e),t=_(t,!0),v(n),o(Y,t)?(n.enumerable?(o(e,P)&&e[P][t]&&(e[P][t]=!1),n=k(n,{enumerable:M(0,!1)})):(o(e,P)||D(e,P,M(1,{})),e[P][t]=!0),Z(e,t,n)):D(e,t,n)},$=function(e,t){v(e);for(var n,r=m(t=w(t)),o=0,i=r.length;i>o;)K(e,n=r[o++],t[n]);return e},J=function(e){var t=U.call(this,e=_(e,!0));return!(this===W&&o(Y,e)&&!o(H,e))&&(!(t||!o(this,e)||!o(Y,e)||o(this,P)&&this[P][e])||t)},X=function(e,t){if(e=w(e),t=_(t,!0),e!==W||!o(Y,t)||o(H,t)){var n=N(e,t);return!n||!o(Y,t)||o(e,P)&&e[P][t]||(n.enumerable=!0),n}},ee=function(e){for(var t,n=z(w(e)),r=[],i=0;n.length>i;)o(Y,t=n[i++])||t==P||t==s||r.push(t);return r},te=function(e){for(var t,n=e===W,r=z(n?H:w(e)),i=[],a=0;r.length>a;)!o(Y,t=r[a++])||n&&!o(W,t)||i.push(Y[t]);return i};Q||(l((O=function(){if(this instanceof O)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===W&&t.call(H,n),o(this,P)&&o(this[P],e)&&(this[P][e]=!1),Z(this,e,M(1,n))};return i&&G&&Z(W,e,{configurable:!0,set:t}),V(e)})[A],"toString",(function(){return this._k})),E.f=X,C.f=K,n(79032).f=S.f=ee,n(98936).f=J,j.f=te,i&&!n(98849)&&l(W,"propertyIsEnumerable",J,!0),u.f=function(e){return V(g(e))}),a(a.G+a.W+a.F*!Q,{Symbol:O});for(var ne="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ne.length>re;)g(ne[re++]);for(var oe=L(g.store),ie=0;oe.length>ie;)f(oe[ie++]);a(a.S+a.F*!Q,"Symbol",{for:function(e){return o(F,e+="")?F[e]:F[e]=O(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!Q,"Object",{create:function(e,t){return void 0===t?k(e):$(k(e),t)},defineProperty:K,defineProperties:$,getOwnPropertyDescriptor:X,getOwnPropertyNames:ee,getOwnPropertySymbols:te});var ae=p((function(){j.f(1)}));a(a.S+a.F*ae,"Object",{getOwnPropertySymbols:function(e){return j.f(y(e))}}),I&&a(a.S+a.F*(!Q||p((function(){var e=O();return"[null]"!=T([e])||"{}"!=T({a:e})||"{}"!=T(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(b(t)||void 0!==e)&&!q(e))return x(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!q(t))return t}),r[1]=t,T.apply(I,r)}}),O[A][R]||n(14632)(O[A],R,O[A].valueOf),h(O,"Symbol"),h(Math,"Math",!0),h(r.JSON,"JSON",!0)},32469:(e,t,n)=>{n(62613)("asyncIterator")},75529:(e,t,n)=>{n(62613)("observable")},96653:(e,t,n)=>{n(45270);for(var r=n(56903),o=n(14632),i=n(52833),a=n(15413)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<l.length;s++){var p=l[s],c=r[p],h=c&&c.prototype;h&&!h[a]&&o(h,a,p),i[p]=i.Array}},30837:(e,t,n)=>{try{var r=n(69264)}catch(e){r=n(69264)}var o=/\s+/,i=Object.prototype.toString;function a(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}e.exports=function(e){return new a(e)},a.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},a.prototype.remove=function(e){if("[object RegExp]"==i.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},a.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},a.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},a.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(o);return""===e[0]&&e.shift(),e},a.prototype.has=a.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}},69264:e=>{e.exports=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},50411:(e,t,n)=>{var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},4146:(e,t,n)=>{"use strict";var r=n(44363),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?a:l[e.$$typeof]||o}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=a;var p=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,u=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(u){var o=g(n);o&&o!==u&&e(t,o,r)}var a=c(n);h&&(a=a.concat(h(n)));for(var l=s(t),f=s(n),m=0;m<a.length;++m){var x=a[m];if(!(i[x]||r&&r[x]||f&&f[x]||l&&l[x])){var v=d(n,x);try{p(t,x,v)}catch(e){}}}}return t}},45228:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var p in i=Object(arguments[s]))n.call(i,p)&&(l[p]=i[p]);if(t){a=t(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},13491:function(e){(function(){var t,n,r,o,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-i)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*process.uptime(),i=o-a):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},2694:(e,t,n)=>{"use strict";var r=n(6925);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5556:(e,t,n)=>{e.exports=n(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},93146:(e,t,n)=>{for(var r=n(13491),o="undefined"==typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",l=o["request"+a],s=o["cancel"+a]||o["cancelRequest"+a],p=0;!l&&p<i.length;p++)l=o[i[p]+"Request"+a],s=o[i[p]+"Cancel"+a]||o[i[p]+"CancelRequest"+a];if(!l||!s){var c=0,h=0,d=[],g=1e3/60;l=function(e){if(0===d.length){var t=r(),n=Math.max(0,g-(t-c));c=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++h,callback:e,cancelled:!1}),h},s=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){s.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}},22799:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,g=n?Symbol.for("react.suspense"):60113,u=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case h:case i:case l:case a:case g:return e;default:switch(e=e&&e.$$typeof){case p:case d:case m:case f:case s:return e;default:return t}}case o:return t}}}function _(e){return w(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=p,t.ContextProvider=s,t.Element=r,t.ForwardRef=d,t.Fragment=i,t.Lazy=m,t.Memo=f,t.Portal=o,t.Profiler=l,t.StrictMode=a,t.Suspense=g,t.isAsyncMode=function(e){return _(e)||w(e)===c},t.isConcurrentMode=_,t.isContextConsumer=function(e){return w(e)===p},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===g},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===h||e===l||e===a||e===g||e===u||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===s||e.$$typeof===p||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y||e.$$typeof===x)},t.typeOf=w},44363:(e,t,n)=>{"use strict";e.exports=n(22799)},2833:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var p=i[s];if(!l(p))return!1;var c=e[p],h=t[p];if(!1===(o=n?n.call(r,c,h,p):void 0)||void 0===o&&c!==h)return!1}return!0}},1063:(e,t,n)=>{"use strict";var r=n(51609),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,a=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return l((function(){o.value=n,o.getSnapshot=t,p(o)&&c({inst:o})}),[e,n,t]),a((function(){return p(o)&&c({inst:o}),e((function(){p(o)&&c({inst:o})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},19888:(e,t,n)=>{"use strict";e.exports=n(1063)},51609:e=>{"use strict";e.exports=window.React},46942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},62517:(e,t,n)=>{"use strict";n.d(t,{m:()=>a});var r=n(94323),o=n(12295);class i extends r.Q{constructor(){super(),this.setup=e=>{if(!o.S$&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()}))}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach((({listener:e})=>{e()}))}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}const a=new i},97502:(e,t,n)=>{"use strict";function r(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,a,l;const s=null==(t=e.fetchOptions)||null==(n=t.meta)?void 0:n.refetchPage,p=null==(r=e.fetchOptions)||null==(i=r.meta)?void 0:i.fetchMore,c=null==p?void 0:p.pageParam,h="forward"===(null==p?void 0:p.direction),d="backward"===(null==p?void 0:p.direction),g=(null==(a=e.state.data)?void 0:a.pages)||[],u=(null==(l=e.state.data)?void 0:l.pageParams)||[];let f=u,m=!1;const x=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),v=(e,t,n,r)=>(f=r?[t,...f]:[...f,t],r?[n,...e]:[...e,n]),b=(t,n,r,o)=>{if(m)return Promise.reject("Cancelled");if(void 0===r&&!n&&t.length)return Promise.resolve(t);const i={queryKey:e.queryKey,pageParam:r,meta:e.options.meta};var a;a=i,Object.defineProperty(a,"signal",{enumerable:!0,get:()=>{var t,n;return null!=(t=e.signal)&&t.aborted?m=!0:null==(n=e.signal)||n.addEventListener("abort",(()=>{m=!0})),e.signal}});const l=x(i);return Promise.resolve(l).then((e=>v(t,r,e,o)))};let y;if(g.length)if(h){const t=void 0!==c,n=t?c:o(e.options,g);y=b(g,t,n)}else if(d){const t=void 0!==c,n=t?c:(w=e.options,_=g,null==w.getPreviousPageParam?void 0:w.getPreviousPageParam(_[0],_));y=b(g,t,n,!0)}else{f=[];const t=void 0===e.options.getNextPageParam;y=s&&g[0]&&!s(g[0],0,g)?Promise.resolve(v([],u[0],g[0])):b([],t,u[0]);for(let n=1;n<g.length;n++)y=y.then((r=>{if(!s||!g[n]||s(g[n],n,g)){const i=t?u[n]:o(e.options,r);return b(r,t,i)}return Promise.resolve(v(r,u[n],g[n]))}))}else y=b([]);var w,_;return y.then((e=>({pages:e,pageParams:f})))}}}}function o(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}n.d(t,{PL:()=>r})},52904:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});const r=console},36801:(e,t,n)=>{"use strict";n.d(t,{$:()=>s,s:()=>l});var r=n(52904),o=n(8448),i=n(91931),a=n(94255);class l extends i.k{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||r.U,this.observers=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter((t=>t!==e)),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){const e=()=>{var e;return this.retryer=(0,a.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},t="loading"===this.state.status;try{var n,r,o,i,l,s,p,c;if(!t){var h,d,g,u;this.dispatch({type:"loading",variables:this.options.variables}),await(null==(h=(d=this.mutationCache.config).onMutate)?void 0:h.call(d,this.state.variables,this));const e=await(null==(g=(u=this.options).onMutate)?void 0:g.call(u,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}const a=await e();return await(null==(n=(r=this.mutationCache.config).onSuccess)?void 0:n.call(r,a,this.state.variables,this.state.context,this)),await(null==(o=(i=this.options).onSuccess)?void 0:o.call(i,a,this.state.variables,this.state.context)),await(null==(l=(s=this.mutationCache.config).onSettled)?void 0:l.call(s,a,null,this.state.variables,this.state.context,this)),await(null==(p=(c=this.options).onSettled)?void 0:p.call(c,a,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:a}),a}catch(e){try{var f,m,x,v,b,y,w,_;throw await(null==(f=(m=this.mutationCache.config).onError)?void 0:f.call(m,e,this.state.variables,this.state.context,this)),await(null==(x=(v=this.options).onError)?void 0:x.call(v,e,this.state.variables,this.state.context)),await(null==(b=(y=this.mutationCache.config).onSettled)?void 0:b.call(y,void 0,e,this.state.variables,this.state.context,this)),await(null==(w=(_=this.options).onSettled)?void 0:w.call(_,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.v_)(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),o.j.batch((()=>{this.observers.forEach((t=>{t.onMutationUpdate(e)})),this.mutationCache.notify({mutation:this,type:"updated",action:e})}))}}function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},8448:(e,t,n)=>{"use strict";n.d(t,{j:()=>o});var r=n(12295);const o=function(){let e=[],t=0,n=e=>{e()},o=e=>{e()};const i=o=>{t?e.push(o):(0,r.G6)((()=>{n(o)}))};return{batch:i=>{let a;t++;try{a=i()}finally{t--,t||(()=>{const t=e;e=[],t.length&&(0,r.G6)((()=>{o((()=>{t.forEach((e=>{n(e)}))}))}))})()}return a},batchCalls:e=>(...t)=>{i((()=>{e(...t)}))},schedule:i,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{o=e}}}()},43626:(e,t,n)=>{"use strict";n.d(t,{t:()=>l});var r=n(94323),o=n(12295);const i=["online","offline"];class a extends r.Q{constructor(){super(),this.setup=e=>{if(!o.S$&&window.addEventListener){const t=()=>e();return i.forEach((e=>{window.addEventListener(e,t,!1)})),()=>{i.forEach((e=>{window.removeEventListener(e,t)}))}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()}))}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach((({listener:e})=>{e()}))}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}const l=new a},5054:(e,t,n)=>{"use strict";n.d(t,{E:()=>m});var r=n(12295),o=n(52904),i=n(8448),a=n(94255),l=n(91931);class s extends l.k{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||o.U,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){const t="function"==typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,r=n?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?null!=r?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){const n=(0,r.pl)(this.state.data,e,this.options);return this.dispatch({data:n,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),n}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const n=this.promise;return null==(t=this.retryer)||t.cancel(e),n?n.then(r.lQ).catch(r.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some((e=>!1!==e.options.enabled))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some((e=>e.getCurrentResult().isStale))}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,r.j3)(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find((e=>e.shouldFetchOnWindowFocus()));t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;const t=this.observers.find((e=>e.shouldFetchOnReconnect()));t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter((t=>t!==e)),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var n,o;if("idle"!==this.state.fetchStatus)if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return null==(i=this.retryer)||i.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find((e=>e.options.queryFn));e&&this.setOptions(e.options)}const l=(0,r.jY)(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},p=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(l)return this.abortSignalConsumed=!0,l.signal}})};p(s);const c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};var h;p(c),null==(n=this.options.behavior)||n.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(o=c.fetchOptions)?void 0:o.meta))&&this.dispatch({type:"fetch",meta:null==(h=c.fetchOptions)?void 0:h.meta});const d=e=>{var t,n,r,o;(0,a.wm)(e)&&e.silent||this.dispatch({type:"error",error:e}),(0,a.wm)(e)||(null==(t=(n=this.cache.config).onError)||t.call(n,e,this),null==(r=(o=this.cache.config).onSettled)||r.call(o,this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,a.II)({fn:c.fetchFn,abort:null==l?void 0:l.abort.bind(l),onSuccess:e=>{var t,n,r,o;void 0!==e?(this.setData(e),null==(t=(n=this.cache.config).onSuccess)||t.call(n,e,this),null==(r=(o=this.cache.config).onSettled)||r.call(o,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1):d(new Error(this.queryHash+" data is undefined"))},onError:d,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var n,r;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(n=e.meta)?n:null,fetchStatus:(0,a.v_)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(r=e.dataUpdatedAt)?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return(0,a.wm)(o)&&o.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...t,error:o,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),i.j.batch((()=>{this.observers.forEach((t=>{t.onQueryUpdate(e)})),this.cache.notify({query:this,type:"updated",action:e})}))}}var p=n(94323);class c extends p.Q{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,n){var o;const i=t.queryKey,a=null!=(o=t.queryHash)?o:(0,r.F$)(i,t);let l=this.get(a);return l||(l=new s({cache:this,logger:e.getLogger(),queryKey:i,queryHash:a,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(i)}),this.add(l)),l}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter((t=>t!==e)),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){i.j.batch((()=>{this.queries.forEach((e=>{this.remove(e)}))}))}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[n]=(0,r.b_)(e,t);return void 0===n.exact&&(n.exact=!0),this.queries.find((e=>(0,r.MK)(n,e)))}findAll(e,t){const[n]=(0,r.b_)(e,t);return Object.keys(n).length>0?this.queries.filter((e=>(0,r.MK)(n,e))):this.queries}notify(e){i.j.batch((()=>{this.listeners.forEach((({listener:t})=>{t(e)}))}))}onFocus(){i.j.batch((()=>{this.queries.forEach((e=>{e.onFocus()}))}))}onOnline(){i.j.batch((()=>{this.queries.forEach((e=>{e.onOnline()}))}))}}var h=n(36801);class d extends p.Q{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,n){const r=new h.s({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:n,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(r),r}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter((t=>t!==e)),this.notify({type:"removed",mutation:e})}clear(){i.j.batch((()=>{this.mutations.forEach((e=>{this.remove(e)}))}))}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find((t=>(0,r.nJ)(e,t)))}findAll(e){return this.mutations.filter((t=>(0,r.nJ)(e,t)))}notify(e){i.j.batch((()=>{this.listeners.forEach((({listener:t})=>{t(e)}))}))}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then((()=>{const e=this.mutations.filter((e=>e.state.isPaused));return i.j.batch((()=>e.reduce(((e,t)=>e.then((()=>t.continue().catch(r.lQ)))),Promise.resolve())))})).then((()=>{this.resuming=void 0})),this.resuming}}var g=n(62517),u=n(43626),f=n(97502);class m{constructor(e={}){this.queryCache=e.queryCache||new c,this.mutationCache=e.mutationCache||new d,this.logger=e.logger||o.U,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=g.m.subscribe((()=>{g.m.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())})),this.unsubscribeOnline=u.t.subscribe((()=>{u.t.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){const[n]=(0,r.b_)(e,t);return n.fetchStatus="fetching",this.queryCache.findAll(n).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state.data}ensureQueryData(e,t,n){const o=(0,r.vh)(e,t,n),i=this.getQueryData(o.queryKey);return i?Promise.resolve(i):this.fetchQuery(o)}getQueriesData(e){return this.getQueryCache().findAll(e).map((({queryKey:e,state:t})=>[e,t.data]))}setQueryData(e,t,n){const o=this.queryCache.find(e),i=null==o?void 0:o.state.data,a=(0,r.Zw)(t,i);if(void 0===a)return;const l=(0,r.vh)(e),s=this.defaultQueryOptions(l);return this.queryCache.build(this,s).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return i.j.batch((()=>this.getQueryCache().findAll(e).map((({queryKey:e})=>[e,this.setQueryData(e,t,n)]))))}getQueryState(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state}removeQueries(e,t){const[n]=(0,r.b_)(e,t),o=this.queryCache;i.j.batch((()=>{o.findAll(n).forEach((e=>{o.remove(e)}))}))}resetQueries(e,t,n){const[o,a]=(0,r.b_)(e,t,n),l=this.queryCache,s={type:"active",...o};return i.j.batch((()=>(l.findAll(o).forEach((e=>{e.reset()})),this.refetchQueries(s,a))))}cancelQueries(e,t,n){const[o,a={}]=(0,r.b_)(e,t,n);void 0===a.revert&&(a.revert=!0);const l=i.j.batch((()=>this.queryCache.findAll(o).map((e=>e.cancel(a)))));return Promise.all(l).then(r.lQ).catch(r.lQ)}invalidateQueries(e,t,n){const[o,a]=(0,r.b_)(e,t,n);return i.j.batch((()=>{var e,t;if(this.queryCache.findAll(o).forEach((e=>{e.invalidate()})),"none"===o.refetchType)return Promise.resolve();const n={...o,type:null!=(e=null!=(t=o.refetchType)?t:o.type)?e:"active"};return this.refetchQueries(n,a)}))}refetchQueries(e,t,n){const[o,a]=(0,r.b_)(e,t,n),l=i.j.batch((()=>this.queryCache.findAll(o).filter((e=>!e.isDisabled())).map((e=>{var t;return e.fetch(void 0,{...a,cancelRefetch:null==(t=null==a?void 0:a.cancelRefetch)||t,meta:{refetchPage:o.refetchPage}})}))));let s=Promise.all(l).then(r.lQ);return null!=a&&a.throwOnError||(s=s.catch(r.lQ)),s}fetchQuery(e,t,n){const o=(0,r.vh)(e,t,n),i=this.defaultQueryOptions(o);void 0===i.retry&&(i.retry=!1);const a=this.queryCache.build(this,i);return a.isStaleByTime(i.staleTime)?a.fetch(i):Promise.resolve(a.state.data)}prefetchQuery(e,t,n){return this.fetchQuery(e,t,n).then(r.lQ).catch(r.lQ)}fetchInfiniteQuery(e,t,n){const o=(0,r.vh)(e,t,n);return o.behavior=(0,f.PL)(),this.fetchQuery(o)}prefetchInfiniteQuery(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(r.lQ).catch(r.lQ)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const n=this.queryDefaults.find((t=>(0,r.Od)(e)===(0,r.Od)(t.queryKey)));n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;const t=this.queryDefaults.find((t=>(0,r.Cp)(e,t.queryKey)));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){const n=this.mutationDefaults.find((t=>(0,r.Od)(e)===(0,r.Od)(t.mutationKey)));n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;const t=this.mutationDefaults.find((t=>(0,r.Cp)(e,t.mutationKey)));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;const t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=(0,r.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},91931:(e,t,n)=>{"use strict";n.d(t,{k:()=>o});var r=n(12295);class o{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,r.gn)(this.cacheTime)&&(this.gcTimeout=setTimeout((()=>{this.optionalRemove()}),this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:r.S$?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},94255:(e,t,n)=>{"use strict";n.d(t,{II:()=>c,v_:()=>l,wm:()=>p});var r=n(62517),o=n(43626),i=n(12295);function a(e){return Math.min(1e3*2**e,3e4)}function l(e){return"online"!==(null!=e?e:"online")||o.t.isOnline()}class s{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function p(e){return e instanceof s}function c(e){let t,n,p,c=!1,h=0,d=!1;const g=new Promise(((e,t)=>{n=e,p=t})),u=()=>!r.m.isFocused()||"always"!==e.networkMode&&!o.t.isOnline(),f=r=>{d||(d=!0,null==e.onSuccess||e.onSuccess(r),null==t||t(),n(r))},m=n=>{d||(d=!0,null==e.onError||e.onError(n),null==t||t(),p(n))},x=()=>new Promise((n=>{t=e=>{const t=d||!u();return t&&n(e),t},null==e.onPause||e.onPause()})).then((()=>{t=void 0,d||null==e.onContinue||e.onContinue()})),v=()=>{if(d)return;let t;try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(f).catch((t=>{var n,r;if(d)return;const o=null!=(n=e.retry)?n:3,l=null!=(r=e.retryDelay)?r:a,s="function"==typeof l?l(h,t):l,p=!0===o||"number"==typeof o&&h<o||"function"==typeof o&&o(h,t);!c&&p?(h++,null==e.onFail||e.onFail(h,t),(0,i.yy)(s).then((()=>{if(u())return x()})).then((()=>{c?m(t):v()}))):m(t)}))};return l(e.networkMode)?v():x().then(v),{promise:g,cancel:t=>{d||(m(new s(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?g:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},94323:(e,t,n)=>{"use strict";n.d(t,{Q:()=>r});class r{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},12295:(e,t,n)=>{"use strict";n.d(t,{Cp:()=>f,F$:()=>g,G6:()=>k,GR:()=>p,MK:()=>h,Od:()=>u,S$:()=>r,Zw:()=>i,b_:()=>c,f8:()=>v,gn:()=>a,j3:()=>l,jY:()=>S,lQ:()=>o,nJ:()=>d,pl:()=>E,vh:()=>s,yy:()=>M});const r="undefined"==typeof window||"Deno"in window;function o(){}function i(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function l(e,t){return Math.max(e+(t||0)-Date.now(),0)}function s(e,t,n){return _(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function p(e,t,n){return _(e)?"function"==typeof t?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function c(e,t,n){return _(e)?[{...t,queryKey:e},n]:[e||{},t]}function h(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:l}=e;if(_(a))if(r){if(t.queryHash!==g(a,t.options))return!1}else if(!f(t.queryKey,a))return!1;if("all"!==n){const e=t.isActive();if("active"===n&&!e)return!1;if("inactive"===n&&e)return!1}return!("boolean"==typeof l&&t.isStale()!==l||void 0!==o&&o!==t.state.fetchStatus||i&&!i(t))}function d(e,t){const{exact:n,fetching:r,predicate:o,mutationKey:i}=e;if(_(i)){if(!t.options.mutationKey)return!1;if(n){if(u(t.options.mutationKey)!==u(i))return!1}else if(!f(t.options.mutationKey,i))return!1}return!("boolean"==typeof r&&"loading"===t.state.status!==r||o&&!o(t))}function g(e,t){return((null==t?void 0:t.queryKeyHashFn)||u)(e)}function u(e){return JSON.stringify(e,((e,t)=>y(t)?Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}):t))}function f(e,t){return m(e,t)}function m(e,t){return e===t||typeof e==typeof t&&!(!e||!t||"object"!=typeof e||"object"!=typeof t)&&!Object.keys(t).some((n=>!m(e[n],t[n])))}function x(e,t){if(e===t)return e;const n=b(e)&&b(t);if(n||y(e)&&y(t)){const r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),i=o.length,a=n?[]:{};let l=0;for(let r=0;r<i;r++){const i=n?r:o[r];a[i]=x(e[i],t[i]),a[i]===e[i]&&l++}return r===i&&l===r?e:a}return t}function v(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function b(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function y(e){if(!w(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!!w(n)&&!!n.hasOwnProperty("isPrototypeOf")}function w(e){return"[object Object]"===Object.prototype.toString.call(e)}function _(e){return Array.isArray(e)}function M(e){return new Promise((t=>{setTimeout(t,e)}))}function k(e){M(0).then(e)}function S(){if("function"==typeof AbortController)return new AbortController}function E(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?x(e,t):t}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),n.nc=void 0,(()=>{"use strict";var e=n(51609),t=n.n(e);const r=window.wp.element,o=e.createContext(void 0),i=e.createContext(!1);function a(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=o),window.ReactQueryClientContext):o)}const l=({context:t}={})=>{const n=e.useContext(a(t,e.useContext(i)));if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},s=({client:t,children:n,context:r,contextSharing:o=!1})=>{e.useEffect((()=>(t.mount(),()=>{t.unmount()})),[t]);const l=a(r,o);return e.createElement(i.Provider,{value:!r&&o},e.createElement(l.Provider,{value:t},n))};var p=n(64197);const c=window.wp.hooks;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var d;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(d||(d={}));const g="popstate";function u(e,t){if(!1===e||null==e)throw new Error(t)}function f(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function m(e,t){return{usr:e.state,key:e.key,idx:t}}function x(e,t,n,r){return void 0===n&&(n=null),h({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?b(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function v(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var y;function w(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let o=T(("string"==typeof t?b(t):t).pathname||"/",n);if(null==o)return null;let i=_(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let e=0;null==a&&e<i.length;++e){let t=I(o);a=z(i[e],t,r)}return a}(e,t,n,!1)}function _(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(u(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=U([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),_(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:D(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of M(e.path))o(e,t,n);else o(e,t)})),t}function M(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=M(r.join("/")),l=[];return l.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(y||(y={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const k=/^:[\w-]+$/,S=3,E=2,j=1,C=10,L=-2,N=e=>"*"===e;function D(e,t){let n=e.split("/"),r=n.length;return n.some(N)&&(r+=L),t&&(r+=E),n.filter((e=>!N(e))).reduce(((e,t)=>e+(k.test(t)?S:""===t?j:C)),r)}function z(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let e=0;e<r.length;++e){let l=r[e],s=e===r.length-1,p="/"===i?t:t.slice(i.length)||"/",c=O({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},p),h=l.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=O({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},p)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:U([i,c.pathname]),pathnameBase:F(U([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=U([i,c.pathnameBase]))}return a}function O(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),f("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function I(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return f(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function A(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function P(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function R(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=b(e):(o=h({},e),u(!o.pathname||!o.pathname.includes("?"),A("?","pathname","search",o)),u(!o.pathname||!o.pathname.includes("#"),A("#","pathname","hash",o)),u(!o.search||!o.search.includes("#"),A("#","search","hash",o)));let i,a=""===e||""===o.pathname,l=a?"/":o.pathname;if(null==l)i=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?b(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:Y(r),hash:H(o)}}(o,i),p=l&&"/"!==l&&l.endsWith("/"),c=(a||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!p&&!c||(s.pathname+="/"),s}const U=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const W=["post","put","patch","delete"],Q=(new Set(W),["get",...W]);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}new Set(Q),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred");const G=e.createContext(null),Z=e.createContext(null),V=e.createContext(null),q=e.createContext(null),K=e.createContext({outlet:null,matches:[],isDataRoute:!1}),$=e.createContext(null);function J(){return null!=e.useContext(q)}function X(){return J()||u(!1),e.useContext(q).location}function ee(t){e.useContext(V).static||e.useLayoutEffect(t)}function te(){let{isDataRoute:t}=e.useContext(K);return t?function(){let{router:t}=function(){let t=e.useContext(G);return t||u(!1),t}(pe.UseNavigateStable),n=he(ce.UseNavigateStable),r=e.useRef(!1);return ee((()=>{r.current=!0})),e.useCallback((function(e,o){void 0===o&&(o={}),r.current&&("number"==typeof e?t.navigate(e):t.navigate(e,B({fromRouteId:n},o)))}),[t,n])}():function(){J()||u(!1);let t=e.useContext(G),{basename:n,future:r,navigator:o}=e.useContext(V),{matches:i}=e.useContext(K),{pathname:a}=X(),l=JSON.stringify(P(i,r.v7_relativeSplatPath)),s=e.useRef(!1);return ee((()=>{s.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!s.current)return;if("number"==typeof e)return void o.go(e);let i=R(e,JSON.parse(l),a,"path"===r.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:U([n,i.pathname])),(r.replace?o.replace:o.push)(i,r.state,r)}),[n,o,l,a,t])}()}function ne(){let{matches:t}=e.useContext(K),n=t[t.length-1];return n?n.params:{}}function re(t,n){let{relative:r}=void 0===n?{}:n,{future:o}=e.useContext(V),{matches:i}=e.useContext(K),{pathname:a}=X(),l=JSON.stringify(P(i,o.v7_relativeSplatPath));return e.useMemo((()=>R(t,JSON.parse(l),a,"path"===r)),[t,l,a,r])}function oe(t,n,r,o){J()||u(!1);let{navigator:i}=e.useContext(V),{matches:a}=e.useContext(K),l=a[a.length-1],s=l?l.params:{},p=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let c,h=X();if(n){var g;let e="string"==typeof n?b(n):n;"/"===p||(null==(g=e.pathname)?void 0:g.startsWith(p))||u(!1),c=e}else c=h;let f=c.pathname||"/",m=f;if("/"!==p){let e=p.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=w(t,{pathname:m}),v=function(t,n,r,o){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==t){var a;if(null==(a=r)||!a.errors)return null;t=r.matches}let l=t,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let p=!1,c=-1;if(r&&o&&o.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){p=!0,l=c>=0?l.slice(0,c+1):[l[0]];break}}}return l.reduceRight(((t,o,i)=>{let a,h=!1,d=null,g=null;var u;r&&(a=s&&o.route.id?s[o.route.id]:void 0,d=o.route.errorElement||ae,p&&(c<0&&0===i?(de[u="route-fallback"]||(de[u]=!0),h=!0,g=null):c===i&&(h=!0,g=o.route.hydrateFallbackElement||null)));let f=n.concat(l.slice(0,i+1)),m=()=>{let n;return n=a?d:h?g:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(se,{match:o,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?e.createElement(le,{location:r.location,revalidation:r.revalidation,component:d,error:a,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:U([p,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:U([p,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,r,o);return n&&v?e.createElement(q.Provider,{value:{location:B({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:d.Pop}},v):v}function ie(){let t=function(){var t;let n=e.useContext($),r=function(){let t=e.useContext(Z);return t||u(!1),t}(ce.UseRouteError),o=he(ce.UseRouteError);return void 0!==n?n:null==(t=r.errors)?void 0:t[o]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,null)}const ae=e.createElement(ie,null);class le extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(K.Provider,{value:this.props.routeContext},e.createElement($.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function se(t){let{routeContext:n,match:r,children:o}=t,i=e.useContext(G);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(K.Provider,{value:n},o)}var pe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pe||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function he(t){let n=function(){let t=e.useContext(K);return t||u(!1),t}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}const de={};function ge(e){u(!1)}function ue(t){let{basename:n="/",children:r=null,location:o,navigationType:i=d.Pop,navigator:a,static:l=!1,future:s}=t;J()&&u(!1);let p=n.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:p,navigator:a,static:l,future:B({v7_relativeSplatPath:!1},s)})),[p,s,a,l]);"string"==typeof o&&(o=b(o));let{pathname:h="/",search:g="",hash:f="",state:m=null,key:x="default"}=o,v=e.useMemo((()=>{let e=T(h,p);return null==e?null:{location:{pathname:e,search:g,hash:f,state:m,key:x},navigationType:i}}),[p,h,g,f,m,x,i]);return null==v?null:e.createElement(V.Provider,{value:c},e.createElement(q.Provider,{children:r,value:v}))}function fe(e){let{children:t,location:n}=e;return oe(me(t),n)}function me(t,n){void 0===n&&(n=[]);let r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let i=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,me(t.props.children,i));t.type!==ge&&u(!1),t.props.index&&t.props.children&&u(!1);let a={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=me(t.props.children,i)),r.push(a)})),r}e.startTransition,new Promise((()=>{})),e.Component;const xe=window.ReactDOM;var ve=n.n(xe);function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_e=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(e){}const Me=e.createContext({isTransitioning:!1});new Map;const ke=e.startTransition;function Se(t){let{basename:n,children:r,future:o,window:i}=t,a=e.useRef();var l;null==a.current&&(a.current=(void 0===(l={window:i,v5Compat:!0})&&(l={}),function(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=d.Pop,s=null,p=c();function c(){return(a.state||{idx:null}).idx}function f(){l=d.Pop;let e=c(),t=null==e?null:e-p;p=e,s&&s({action:l,location:y.location,delta:t})}function b(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:v(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==p&&(p=0,a.replaceState(h({},a.state,{idx:p}),""));let y={get action(){return l},get location(){return e(o,a)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(g,f),s=e,()=>{o.removeEventListener(g,f),s=null}},createHref:e=>t(o,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=d.Push;let r=x(y.location,e,t);n&&n(r,e),p=c()+1;let h=m(r,p),g=y.createHref(r);try{a.pushState(h,"",g)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(g)}i&&s&&s({action:l,location:y.location,delta:1})},replace:function(e,t){l=d.Replace;let r=x(y.location,e,t);n&&n(r,e),p=c();let o=m(r,p),h=y.createHref(r);a.replaceState(o,"",h),i&&s&&s({action:l,location:y.location,delta:0})},go:e=>a.go(e)};return y}((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=b(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),x("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:v(t))}),(function(e,t){f("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let s=a.current,[p,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:y}=o||{},w=e.useCallback((e=>{y&&ke?ke((()=>c(e))):c(e)}),[c,y]);return e.useLayoutEffect((()=>s.listen(w)),[s,w]),e.createElement(ue,{basename:n,children:r,location:p.location,navigationType:p.action,navigator:s,future:o})}xe.flushSync,e.useId;const Ee="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=e.forwardRef((function(t,n){let r,{onClick:o,relative:i,reloadDocument:a,replace:l,state:s,target:p,to:c,preventScrollReset:h,unstable_viewTransition:d}=t,g=ye(t,we),{basename:f}=e.useContext(V),m=!1;if("string"==typeof c&&je.test(c)&&(r=c,Ee))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=T(t.pathname,f);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:m=!0}catch(e){}let x=function(t,n){let{relative:r}=void 0===n?{}:n;J()||u(!1);let{basename:o,navigator:i}=e.useContext(V),{hash:a,pathname:l,search:s}=re(t,{relative:r}),p=l;return"/"!==o&&(p="/"===l?o:U([o,l])),i.createHref({pathname:p,search:s,hash:a})}(c,{relative:i}),b=function(t,n){let{target:r,replace:o,state:i,preventScrollReset:a,relative:l,unstable_viewTransition:s}=void 0===n?{}:n,p=te(),c=X(),h=re(t,{relative:l});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,r)){e.preventDefault();let n=void 0!==o?o:v(c)===v(h);p(t,{replace:n,state:i,preventScrollReset:a,relative:l,unstable_viewTransition:s})}}),[c,p,h,o,i,r,t,a,l,s])}(c,{replace:l,state:s,target:p,preventScrollReset:h,relative:i,unstable_viewTransition:d});return e.createElement("a",be({},g,{href:r||x,onClick:m||a?o:function(e){o&&o(e),e.defaultPrevented||b(e)},ref:n,target:p}))})),Le=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,unstable_viewTransition:p,children:c}=t,h=ye(t,_e),d=re(s,{relative:h.relative}),g=X(),f=e.useContext(Z),{navigator:m,basename:x}=e.useContext(V),v=null!=f&&function(t,n){void 0===n&&(n={});let r=e.useContext(Me);null==r&&u(!1);let{basename:o}=function(){let t=e.useContext(G);return t||u(!1),t}(Ne.useViewTransitionState),i=re(t,{relative:n.relative});if(!r.isTransitioning)return!1;let a=T(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=T(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=O(i.pathname,l)||null!=O(i.pathname,a)}(d)&&!0===p,b=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,y=g.pathname,w=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;o||(y=y.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&x&&(w=T(w,x)||w);const _="/"!==b&&b.endsWith("/")?b.length-1:b.length;let M,k=y===b||!a&&y.startsWith(b)&&"/"===y.charAt(_),S=null!=w&&(w===b||!a&&w.startsWith(b)&&"/"===w.charAt(b.length)),E={isActive:k,isPending:S,isTransitioning:v},j=k?r:void 0;M="function"==typeof i?i(E):[i,k?"active":null,S?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let C="function"==typeof l?l(E):l;return e.createElement(Ce,be({},h,{"aria-current":j,className:M,ref:n,style:C,to:s,unstable_viewTransition:p}),"function"==typeof c?c(E):c)}));var Ne,De;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ne||(Ne={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(De||(De={}));var ze=function(e){return e.split(/ ?; ?/).reduce((function(e,t){var n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}(t.split(/ ?: ?/),2),r=n[0],o=n[1];return r&&o&&(e[r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(o))?o:Number(o)),e}),{})},Oe=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],Ie={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},Te=function(){return Te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Te.apply(this,arguments)},Ae=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},Pe=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};function Re(t,n){var r;if(void 0===n&&(n={}),!(t&&t instanceof Node))return null;var o,i=n.actions,a=void 0===i?[]:i,l=n.index,s=void 0===l?0:l,p=n.level,c=void 0===p?0:p,h=n.randomKey,d=t,g="".concat(c,"-").concat(s),u=[];if(h&&0===c&&(g="".concat(function(e){void 0===e&&(e=6);for(var t="",n=e;n>0;--n)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())];return t}(),"-").concat(g)),Array.isArray(a)&&a.forEach((function(e){e.condition(d,g,c)&&("function"==typeof e.pre&&((d=e.pre(d,g,c))instanceof Node||(d=t)),"function"==typeof e.post&&u.push(e.post(d,g,c)))})),u.length)return u;switch(d.nodeType){case 1:return e.createElement((o=d.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(o)?o:o.toLowerCase()),function(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),Pe([],Ae(e.attributes),!1).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=ze(e.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[Ie[e.name]||e.name]=!0;break;default:n[Ie[e.name]||e.name]=e.value}}))}return n}(d,g),function(e,t,n){var r=Pe([],Ae(e),!1).map((function(e,r){return Re(e,Te(Te({},n),{index:r,level:t+1}))})).filter(Boolean);return r.length?r:null}(d.childNodes,c,n));case 3:var f=(null===(r=d.nodeValue)||void 0===r?void 0:r.toString())||"";if(/^\s+$/.test(f)&&!/[\u00A0\u202F]/.test(f))return null;if(!d.parentNode)return f;var m=d.parentNode.nodeName.toLowerCase();return Oe.includes(m)?(/\S/.test(f)&&console.warn("A textNode is not allowed inside '".concat(m,"'. Your text \"").concat(f,'" will be ignored')),null):f;default:return null}}function Ue(e,t){return void 0===t&&(t={}),"string"==typeof e?function(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,o=t.selector,i=void 0===o?"body > *":o,a=t.type,l=void 0===a?"text/html":a;try{var s=(new DOMParser).parseFromString(e,l).querySelector(i);if(!(s instanceof Node))throw new TypeError("Error parsing input");return r?s:Re(s,t)}catch(e){}return null}(e,t):e instanceof Node?Re(e,t):null}var Fe=n(50411),Ye={IDLE:"idle",LOADING:"loading",LOADED:"loaded",FAILED:"failed",READY:"ready",UNSUPPORTED:"unsupported"};function He(){return Fe.canUseDOM}function We(e){return e[Math.floor(Math.random()*e.length)]}var Qe,Be=(Qe=function(e,t){return Qe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Qe(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}Qe(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),Ge=function(){return Ge=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ge.apply(this,arguments)},Ze=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},Ve=Object.create(null),qe=function(t){function n(e){var n=t.call(this,e)||this;return Object.defineProperty(n,"hash",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(n,"isActive",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(n,"isInitialized",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(n,"handleError",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=n.props.onError,r="Browser does not support SVG"===e.message?Ye.UNSUPPORTED:Ye.FAILED;n.isActive&&n.setState({status:r},(function(){"function"==typeof t&&t(e)}))}}),Object.defineProperty(n,"handleLoad",{enumerable:!0,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1),n.isActive&&n.setState({content:e,hasCache:t,status:Ye.LOADED},n.getElement)}}),Object.defineProperty(n,"request",{enumerable:!0,configurable:!0,writable:!0,value:function(){return e=n,t=void 0,o=function(){var e,t,n,r,o,i,a,l,s,p,c,h;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,(function(d){switch(d.label){case 0:e=this.props,t=e.cacheRequests,n=e.fetchOptions,r=e.src,t&&(Ve[r]={content:"",status:Ye.LOADING}),d.label=1;case 1:return d.trys.push([1,4,,5]),[4,fetch(r,n)];case 2:if(o=d.sent(),i=o.headers.get("content-type"),a=Ze((i||"").split(/ ?; ?/),1),l=a[0],o.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((function(e){return l.includes(e)})))throw new Error("Content type isn't valid: ".concat(l));return[4,o.text()];case 3:return s=d.sent(),p=this.props.src,r!==p?(Ve[r].status===Ye.LOADING&&delete Ve[r],[2]):(this.handleLoad(s),t&&(h=Ve[r])&&(h.content=s,h.status=Ye.LOADED),[3,5]);case 4:return c=d.sent(),this.handleError(c),t&&(h=Ve[r])&&delete Ve[r],[3,5];case 5:return[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}));var e,t,r,o}}),n.state={content:"",element:null,hasCache:!!e.cacheRequests&&!!Ve[e.src],status:Ye.IDLE},n.hash=e.uniqueHash||function(){for(var e="abcdefghijklmnopqrstuvwxyz",t="".concat(e).concat(e.toUpperCase()).concat("1234567890"),n="",r=0;r<8;r++)n+=We(t);return n}(),n}return Be(n,t),Object.defineProperty(n.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(this.isActive=!0,He()&&!this.isInitialized){var e=this.state.status,t=this.props.src;try{if(e===Ye.IDLE){if(!function(){if(!document)return!1;var e=document.createElement("div");e.innerHTML="<svg />";var t=e.firstChild;return!!t&&"http://www.w3.org/2000/svg"===t.namespaceURI}()||"undefined"==typeof window||null===window)throw new Error("Browser does not support SVG");if(!t)throw new Error("Missing src");this.load()}}catch(e){this.handleError(e)}this.isInitialized=!0}}}),Object.defineProperty(n.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(He()){var n=this.state,r=n.hasCache,o=n.status,i=this.props,a=i.onLoad,l=i.src;if(t.status!==Ye.READY&&o===Ye.READY&&a&&a(l,r),e.src!==l){if(!l)return void this.handleError(new Error("Missing src"));this.load()}}}}),Object.defineProperty(n.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.isActive=!1}}),Object.defineProperty(n.prototype,"getElement",{enumerable:!1,configurable:!0,writable:!0,value:function(){try{var t=Ue(this.getNode());if(!t||!e.isValidElement(t))throw new Error("Could not convert the src to a React element");this.setState({element:t,status:Ye.READY})}catch(e){this.handleError(new Error(e.message))}}}),Object.defineProperty(n.prototype,"getNode",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.description,n=e.title;try{var r=Ue(this.processSVG(),{nodeOnly:!0});if(!(r&&r instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var o=this.updateSVGAttributes(r);if(t){var i=o.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var a=document.createElementNS("http://www.w3.org/2000/svg","desc");a.innerHTML=t,o.prepend(a)}if(void 0!==n){var l=o.querySelector("title");if(l&&l.parentNode&&l.parentNode.removeChild(l),n){var s=document.createElementNS("http://www.w3.org/2000/svg","title");s.innerHTML=n,o.prepend(s)}}return o}catch(e){return this.handleError(e)}}}),Object.defineProperty(n.prototype,"load",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;this.isActive&&this.setState({content:"",element:null,hasCache:!1,status:Ye.LOADING},(function(){var t=e.props,n=t.cacheRequests,r=t.src,o=n&&Ve[r];if(o&&o.status===Ye.LOADED)e.handleLoad(o.content,!0);else{var i,a=r.match(/^data:image\/svg[^,]*?(;base64)?,(.*)/u);a?i=a[1]?window.atob(a[2]):decodeURIComponent(a[2]):r.includes("<svg")&&(i=r),i?e.handleLoad(i):e.request()}}))}}),Object.defineProperty(n.prototype,"processSVG",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e}}),Object.defineProperty(n.prototype,"updateSVGAttributes",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,n=this.props,r=n.baseURL,o=void 0===r?"":r,i=n.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],l=["href","xlink:href"];return i?(function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([],Ze(e.children),!1).forEach((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes).map((function(e){var n=e,r=e.value.match(/url\((.*?)\)/);return r&&r[1]&&(n.value=e.value.replace(r[0],"url(".concat(o).concat(r[1],"__").concat(t.hash,")"))),n}));a.forEach((function(e){var r,o,i=n.find((function(t){return t.name===e}));i&&(r=e,o=i.value,!l.includes(r)||!o||o.includes("#"))&&(i.value="".concat(i.value,"__").concat(t.hash))}))}return e.children.length?t.updateSVGAttributes(e):e})),e):e}}),Object.defineProperty(n.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var t=this.state,n=t.element,r=t.status,o=this.props,i=o.children,a=void 0===i?null:i,l=o.innerRef,s=o.loader,p=void 0===s?null:s,c=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var o in e)({}).hasOwnProperty.call(e,o)&&(t.includes(o)||(r[o]=e[o]));return r}(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return He()?n?e.cloneElement(n,Ge({ref:l},c)):[Ye.UNSUPPORTED,Ye.FAILED].includes(r)?a:p:p}}),Object.defineProperty(n,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{cacheRequests:!0,uniquifyIDs:!1}}),n}(e.PureComponent);const Ke=qe;window.wp.blockEditor;var $e=function(){return $e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},$e.apply(this,arguments)};function Je(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var Xe=n(2833),et=n.n(Xe),tt="-ms-",nt="-moz-",rt="-webkit-",ot="comm",it="rule",at="decl",lt="@import",st="@keyframes",pt="@layer",ct=Math.abs,ht=String.fromCharCode,dt=Object.assign;function gt(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function ft(e,t,n){return e.replace(t,n)}function mt(e,t,n){return e.indexOf(t,n)}function xt(e,t){return 0|e.charCodeAt(t)}function vt(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function yt(e){return e.length}function wt(e,t){return t.push(e),e}function _t(e,t){return e.filter((function(e){return!ut(e,t)}))}var Mt=1,kt=1,St=0,Et=0,jt=0,Ct="";function Lt(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Mt,column:kt,length:a,return:"",siblings:l}}function Nt(e,t){return dt(Lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dt(e){for(;e.root;)e=Nt(e.root,{children:[e]});wt(e,e.siblings)}function zt(){return jt=Et>0?xt(Ct,--Et):0,kt--,10===jt&&(kt=1,Mt--),jt}function Ot(){return jt=Et<St?xt(Ct,Et++):0,kt++,10===jt&&(kt=1,Mt++),jt}function It(){return xt(Ct,Et)}function Tt(){return Et}function At(e,t){return vt(Ct,e,t)}function Pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rt(e){return gt(At(Et-1,Yt(91===e?e+2:40===e?e+1:e)))}function Ut(e){for(;(jt=It())&&jt<33;)Ot();return Pt(e)>2||Pt(jt)>3?"":" "}function Ft(e,t){for(;--t&&Ot()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return At(e,Tt()+(t<6&&32==It()&&32==Ot()))}function Yt(e){for(;Ot();)switch(jt){case e:return Et;case 34:case 39:34!==e&&39!==e&&Yt(jt);break;case 40:41===e&&Yt(e);break;case 92:Ot()}return Et}function Ht(e,t){for(;Ot()&&e+jt!==57&&(e+jt!==84||47!==It()););return"/*"+At(t,Et-1)+"*"+ht(47===e?e:Ot())}function Wt(e){for(;!Pt(It());)Ot();return At(e,Et)}function Qt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Bt(e,t,n,r){switch(e.type){case pt:if(e.children.length)break;case lt:case at:return e.return=e.return||e.value;case ot:return"";case st:return e.return=e.value+"{"+Qt(e.children,r)+"}";case it:if(!bt(e.value=e.props.join(",")))return""}return bt(n=Qt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gt(e,t,n){switch(function(e,t){return 45^xt(e,0)?(((t<<2^xt(e,0))<<2^xt(e,1))<<2^xt(e,2))<<2^xt(e,3):0}(e,t)){case 5103:return rt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return rt+e+e;case 4789:return nt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return rt+e+nt+e+tt+e+e;case 5936:switch(xt(e,t+11)){case 114:return rt+e+tt+ft(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return rt+e+tt+ft(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return rt+e+tt+ft(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return rt+e+tt+e+e;case 6165:return rt+e+tt+"flex-"+e+e;case 5187:return rt+e+ft(e,/(\w+).+(:[^]+)/,rt+"box-$1$2"+tt+"flex-$1$2")+e;case 5443:return rt+e+tt+"flex-item-"+ft(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":tt+"grid-row-"+ft(e,/flex-|-self/g,""))+e;case 4675:return rt+e+tt+"flex-line-pack"+ft(e,/align-content|flex-|-self/g,"")+e;case 5548:return rt+e+tt+ft(e,"shrink","negative")+e;case 5292:return rt+e+tt+ft(e,"basis","preferred-size")+e;case 6060:return rt+"box-"+ft(e,"-grow","")+rt+e+tt+ft(e,"grow","positive")+e;case 4554:return rt+ft(e,/([^-])(transform)/g,"$1"+rt+"$2")+e;case 6187:return ft(ft(ft(e,/(zoom-|grab)/,rt+"$1"),/(image-set)/,rt+"$1"),e,"")+e;case 5495:case 3959:return ft(e,/(image-set\([^]*)/,rt+"$1$`$1");case 4968:return ft(ft(e,/(.+:)(flex-)?(.*)/,rt+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+rt+e+e;case 4200:if(!ut(e,/flex-|baseline/))return tt+"grid-column-align"+vt(e,t)+e;break;case 2592:case 3360:return tt+ft(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,ut(e.props,/grid-\w+-end/)}))?~mt(e+(n=n[t].value),"span",0)?e:tt+ft(e,"-start","")+e+tt+"grid-row-span:"+(~mt(n,"span",0)?ut(n,/\d+/):+ut(n,/\d+/)-+ut(e,/\d+/))+";":tt+ft(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return ut(e.props,/grid-\w+-start/)}))?e:tt+ft(ft(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ft(e,/(.+)-inline(.+)/,rt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(xt(e,t+1)){case 109:if(45!==xt(e,t+4))break;case 102:return ft(e,/(.+:)(.+)-([^]+)/,"$1"+rt+"$2-$3$1"+nt+(108==xt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~mt(e,"stretch",0)?Gt(ft(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ft(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,l){return tt+n+":"+r+l+(o?tt+n+"-span:"+(i?a:+a-+r)+l:"")+e}));case 4949:if(121===xt(e,t+6))return ft(e,":",":"+rt)+e;break;case 6444:switch(xt(e,45===xt(e,14)?18:11)){case 120:return ft(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+rt+(45===xt(e,14)?"inline-":"")+"box$3$1"+rt+"$2$3$1"+tt+"$2box$3")+e;case 100:return ft(e,":",":"+tt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(e,"scroll-","scroll-snap-")+e}return e}function Zt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case at:return void(e.return=Gt(e.value,e.length,n));case st:return Qt([Nt(e,{value:ft(e.value,"@","@"+rt)})],r);case it:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(ut(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dt(Nt(e,{props:[ft(t,/:(read-\w+)/,":"+nt+"$1")]})),Dt(Nt(e,{props:[t]})),dt(e,{props:_t(n,r)});break;case"::placeholder":Dt(Nt(e,{props:[ft(t,/:(plac\w+)/,":"+rt+"input-$1")]})),Dt(Nt(e,{props:[ft(t,/:(plac\w+)/,":"+nt+"$1")]})),Dt(Nt(e,{props:[ft(t,/:(plac\w+)/,tt+"input-$1")]})),Dt(Nt(e,{props:[t]})),dt(e,{props:_t(n,r)})}return""}))}}function Vt(e){return function(e){return Ct="",e}(qt("",null,null,null,[""],e=function(e){return Mt=kt=1,St=bt(Ct=e),Et=0,[]}(e),0,[0],e))}function qt(e,t,n,r,o,i,a,l,s){for(var p=0,c=0,h=a,d=0,g=0,u=0,f=1,m=1,x=1,v=0,b="",y=o,w=i,_=r,M=b;m;)switch(u=v,v=Ot()){case 40:if(108!=u&&58==xt(M,h-1)){-1!=mt(M+=ft(Rt(v),"&","&\f"),"&\f",ct(p?l[p-1]:0))&&(x=-1);break}case 34:case 39:case 91:M+=Rt(v);break;case 9:case 10:case 13:case 32:M+=Ut(u);break;case 92:M+=Ft(Tt()-1,7);continue;case 47:switch(It()){case 42:case 47:wt($t(Ht(Ot(),Tt()),t,n,s),s);break;default:M+="/"}break;case 123*f:l[p++]=bt(M)*x;case 125*f:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+c:-1==x&&(M=ft(M,/\f/g,"")),g>0&&bt(M)-h&&wt(g>32?Jt(M+";",r,n,h-1,s):Jt(ft(M," ","")+";",r,n,h-2,s),s);break;case 59:M+=";";default:if(wt(_=Kt(M,t,n,p,c,o,l,b,y=[],w=[],h,i),i),123===v)if(0===c)qt(M,t,_,_,y,i,h,l,w);else switch(99===d&&110===xt(M,3)?100:d){case 100:case 108:case 109:case 115:qt(e,_,_,r&&wt(Kt(e,_,_,0,0,o,l,b,o,y=[],h,w),w),o,w,h,l,r?y:w);break;default:qt(M,_,_,_,[""],w,0,l,w)}}p=c=g=0,f=x=1,b=M="",h=a;break;case 58:h=1+bt(M),g=u;default:if(f<1)if(123==v)--f;else if(125==v&&0==f++&&125==zt())continue;switch(M+=ht(v),v*f){case 38:x=c>0?1:(M+="\f",-1);break;case 44:l[p++]=(bt(M)-1)*x,x=1;break;case 64:45===It()&&(M+=Rt(Ot())),d=It(),c=h=bt(b=M+=Wt(Tt())),v++;break;case 45:45===u&&2==bt(M)&&(f=0)}}return i}function Kt(e,t,n,r,o,i,a,l,s,p,c,h){for(var d=o-1,g=0===o?i:[""],u=yt(g),f=0,m=0,x=0;f<r;++f)for(var v=0,b=vt(e,d+1,d=ct(m=a[f])),y=e;v<u;++v)(y=gt(m>0?g[v]+" "+b:ft(b,/&\f/g,g[v])))&&(s[x++]=y);return Lt(e,t,n,0===o?it:l,s,p,c,h)}function $t(e,t,n,r){return Lt(e,t,n,ot,ht(jt),vt(e,2,-2),0,r)}function Jt(e,t,n,r,o){return Lt(e,t,n,at,vt(e,0,r),vt(e,r+1,-1),r,o)}var Xt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},en="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",tn="active",nn="data-styled-version",rn="6.1.12",on="/*!sc*/\n",an="undefined"!=typeof window&&"HTMLElement"in window,ln=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),sn=(new Set,Object.freeze([])),pn=Object.freeze({});var cn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dn=/(^-|-$)/g;function gn(e){return e.replace(hn,"-").replace(dn,"")}var un=/(a)(d)/gi,fn=52,mn=function(e){return String.fromCharCode(e+(e>25?39:97))};function xn(e){var t,n="";for(t=Math.abs(e);t>fn;t=t/fn|0)n=mn(t%fn)+n;return(mn(t%fn)+n).replace(un,"$1-$2")}var vn,bn=5381,yn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wn=function(e){return yn(bn,e)};function Mn(e){return"string"==typeof e&&!0}var kn="function"==typeof Symbol&&Symbol.for,Sn=kn?Symbol.for("react.memo"):60115,En=kn?Symbol.for("react.forward_ref"):60112,jn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nn=((vn={})[En]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vn[Sn]=Ln,vn);function Dn(e){return("type"in(t=e)&&t.type.$$typeof)===Sn?Ln:"$$typeof"in e?Nn[e.$$typeof]:jn;var t}var zn=Object.defineProperty,On=Object.getOwnPropertyNames,In=Object.getOwnPropertySymbols,Tn=Object.getOwnPropertyDescriptor,An=Object.getPrototypeOf,Pn=Object.prototype;function Rn(e,t,n){if("string"!=typeof t){if(Pn){var r=An(t);r&&r!==Pn&&Rn(e,r,n)}var o=On(t);In&&(o=o.concat(In(t)));for(var i=Dn(e),a=Dn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Cn||n&&n[s]||a&&s in a||i&&s in i)){var p=Tn(t,s);try{zn(e,s,p)}catch(e){}}}}return e}function Un(e){return"function"==typeof e}function Fn(e){return"object"==typeof e&&"styledComponentId"in e}function Yn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qn(e,t,n){if(void 0===n&&(n=!1),!n&&!Wn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qn(e[r],t[r]);else if(Wn(t))for(var r in t)e[r]=Qn(e[r],t[r]);return e}function Bn(e,t){Object.defineProperty(e,"toString",{value:t})}function Gn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Gn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(on);return t},e}(),Vn=new Map,qn=new Map,Kn=1,$n=function(e){if(Vn.has(e))return Vn.get(e);for(;qn.has(Kn);)Kn++;var t=Kn++;return Vn.set(e,t),qn.set(t,e),t},Jn=function(e,t){Kn=t+1,Vn.set(e,t),qn.set(t,e)},Xn="style[".concat(en,"][").concat(nn,'="').concat(rn,'"]'),er=new RegExp("^".concat(en,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tr=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},nr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(on),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(er);if(s){var p=0|parseInt(s[1],10),c=s[2];0!==p&&(Jn(c,p),tr(e,c,s[3]),e.getTag().insertRules(p,o)),o.length=0}else o.push(l)}}},rr=function(e){for(var t=document.querySelectorAll(Xn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(en)!==tn&&(nr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function or(){return n.nc}var ir=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(en,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(en,tn),r.setAttribute(nn,rn);var a=or();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},ar=function(){function e(e){this.element=ir(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Gn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),lr=function(){function e(e){this.element=ir(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),sr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),pr=an,cr={isServer:!an,useCSSOMInjection:!ln},hr=function(){function e(e,t,n){void 0===e&&(e=pn),void 0===t&&(t={});var r=this;this.options=$e($e({},cr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&an&&pr&&(pr=!1,rr(this)),Bn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return qn.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(en,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(on)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return $n(e)},e.prototype.rehydrate=function(){!this.server&&an&&rr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new sr(n):t?new ar(n):new lr(n)}(this.options),new Zn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if($n(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules($n(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup($n(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dr=/&/g,gr=/^\s*\/\/.*$/gm;function ur(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ur(e.children,t)),e}))}function fr(e){var t,n,r,o=void 0===e?pn:e,i=o.options,a=void 0===i?pn:i,l=o.plugins,s=void 0===l?sn:l,p=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===it&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(dr,n).replace(r,p))})),a.prefix&&c.push(Zt),c.push(Bt);var h=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(gr,""),p=Vt(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(p=ur(p,a.namespace));var h,d,g,u=[];return Qt(p,(h=c.concat((g=function(e){return u.push(e)},function(e){e.root||(e=e.return)&&g(e)})),d=yt(h),function(e,t,n,r){for(var o="",i=0;i<d;i++)o+=h[i](e,t,n,r)||"";return o})),u};return h.hash=s.length?s.reduce((function(e,t){return t.name||Gn(15),yn(e,t.name)}),bn).toString():"",h}var mr=new hr,xr=fr(),vr=t().createContext({shouldForwardProp:void 0,styleSheet:mr,stylis:xr}),br=(vr.Consumer,t().createContext(void 0));function yr(){return(0,e.useContext)(vr)}function wr(n){var r=(0,e.useState)(n.stylisPlugins),o=r[0],i=r[1],a=yr().styleSheet,l=(0,e.useMemo)((function(){var e=a;return n.sheet?e=n.sheet:n.target&&(e=e.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[n.disableCSSOMInjection,n.sheet,n.target,a]),s=(0,e.useMemo)((function(){return fr({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:o})}),[n.enableVendorPrefixes,n.namespace,o]);(0,e.useEffect)((function(){et()(o,n.stylisPlugins)||i(n.stylisPlugins)}),[n.stylisPlugins]);var p=(0,e.useMemo)((function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:l,stylis:s}}),[n.shouldForwardProp,l,s]);return t().createElement(vr.Provider,{value:p},t().createElement(br.Provider,{value:s},n.children))}var _r=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=xr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Bn(this,(function(){throw Gn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=xr),this.name+e.hash},e}(),Mr=function(e){return e>="A"&&e<="Z"};function kr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Mr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sr=function(e){return null==e||!1===e||""===e},Er=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Sr(i)&&(Array.isArray(i)&&i.isCss||Un(i)?r.push("".concat(kr(o),":"),i,";"):Wn(i)?r.push.apply(r,Je(Je(["".concat(o," {")],Er(i),!1),["}"],!1)):r.push("".concat(kr(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Xt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function jr(e,t,n,r){return Sr(e)?[]:Fn(e)?[".".concat(e.styledComponentId)]:Un(e)?!Un(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:jr(e(t),t,n,r):e instanceof _r?n?(e.inject(n,r),[e.getName(r)]):[e]:Wn(e)?Er(e):Array.isArray(e)?Array.prototype.concat.apply(sn,e.map((function(e){return jr(e,t,n,r)}))):[e.toString()];var o}function Cr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Un(n)&&!Fn(n))return!1}return!0}var Lr=wn(rn),Nr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Cr(e),this.componentId=t,this.baseHash=yn(Lr,t),this.baseStyle=n,hr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Yn(r,this.staticRulesId);else{var o=Hn(jr(this.rules,e,t,n)),i=xn(yn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Yn(r,i),this.staticRulesId=i}else{for(var l=yn(this.baseHash,n.hash),s="",p=0;p<this.rules.length;p++){var c=this.rules[p];if("string"==typeof c)s+=c;else if(c){var h=Hn(jr(c,e,t,n));l=yn(l,h+p),s+=h}}if(s){var d=xn(l>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(s,".".concat(d),void 0,this.componentId)),r=Yn(r,d)}}return r},e}(),Dr=t().createContext(void 0);function zr(n){var r=t().useContext(Dr),o=(0,e.useMemo)((function(){return function(e,t){if(!e)throw Gn(14);if(Un(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Gn(8);return t?$e($e({},t),e):e}(n.theme,r)}),[n.theme,r]);return n.children?t().createElement(Dr.Provider,{value:o},n.children):null}Dr.Consumer;var Or={};function Ir(n,r,o){var i=Fn(n),a=n,l=!Mn(n),s=r.attrs,p=void 0===s?sn:s,c=r.componentId,h=void 0===c?function(e,t){var n="string"!=typeof e?"sc":gn(e);Or[n]=(Or[n]||0)+1;var r="".concat(n,"-").concat(function(e){return xn(wn(e)>>>0)}(rn+n+Or[n]));return t?"".concat(t,"-").concat(r):r}(r.displayName,r.parentComponentId):c,d=r.displayName,g=void 0===d?function(e){return Mn(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(n):d,u=r.displayName&&r.componentId?"".concat(gn(r.displayName),"-").concat(r.componentId):r.componentId||h,f=i&&a.attrs?a.attrs.concat(p).filter(Boolean):p,m=r.shouldForwardProp;if(i&&a.shouldForwardProp){var x=a.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;m=function(e,t){return x(e,t)&&v(e,t)}}else m=x}var b=new Nr(o,u,i?a.componentStyle:void 0);function y(n,r){return function(n,r,o){var i=n.attrs,a=n.componentStyle,l=n.defaultProps,s=n.foldedComponentIds,p=n.styledComponentId,c=n.target,h=t().useContext(Dr),d=yr(),g=n.shouldForwardProp||d.shouldForwardProp,u=function(e,t,n){return void 0===n&&(n=pn),e.theme!==n.theme&&e.theme||t||n.theme}(r,h,l)||pn,f=function(e,t,n){for(var r,o=$e($e({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=Un(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?Yn(o[l],a[l]):"style"===l?$e($e({},o[l]),a[l]):a[l]}return t.className&&(o.className=Yn(o.className,t.className)),o}(i,r,u),m=f.as||c,x={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===u||("forwardedAs"===v?x.as=f.forwardedAs:g&&!g(v,m)||(x[v]=f[v]));var b=function(e,t){var n=yr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),y=Yn(s,p);return b&&(y+=" "+b),f.className&&(y+=" "+f.className),x[Mn(m)&&!cn.has(m)?"class":"className"]=y,x.ref=o,(0,e.createElement)(m,x)}(w,n,r)}y.displayName=g;var w=t().forwardRef(y);return w.attrs=f,w.componentStyle=b,w.displayName=g,w.shouldForwardProp=m,w.foldedComponentIds=i?Yn(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=u,w.target=i?a.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Qn(e,o[r],!0);return e}({},a.defaultProps,e):e}}),Bn(w,(function(){return".".concat(w.styledComponentId)})),l&&Rn(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Tr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}new Set;var Ar=function(e){return Object.assign(e,{isCss:!0})};function Pr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Un(e)||Wn(e))return Ar(jr(Tr(sn,Je([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?jr(r):Ar(jr(Tr(r,t)))}function Rr(e,t,n){if(void 0===n&&(n=pn),!t)throw Gn(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Pr.apply(void 0,Je([r],o,!1)))};return r.attrs=function(r){return Rr(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Rr(e,t,$e($e({},n),r))},r}var Ur=function(e){return Rr(Ir,e)},Fr=Ur;cn.forEach((function(e){Fr[e]=Ur(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Cr(e),hr.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Hn(jr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&hr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=or(),r=Hn([n&&'nonce="'.concat(n,'"'),"".concat(en,'="true"'),"".concat(nn,'="').concat(rn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Gn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Gn(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[en]="",n[nn]=rn,n.dangerouslySetInnerHTML={__html:r},n),i=or();return i&&(o.nonce=i),[t().createElement("style",$e({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new hr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Gn(2);return t().createElement(wr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Gn(3)}}(),"__sc-".concat(en,"__"),Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`;const Yr=Fr.div`
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
`,Hr=(Fr.div`
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
`,Fr.div`

`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`),Wr=(Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.table`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
    padding: 0 30px 25px;
    .helpgent-delete-alert-text{
        p{
            font-size: 14px;
            color: var(--helpgent-color-gray);
            margin: 0 0 27px;
        }
    }
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`),Qr=(Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`),Br=(Fr.div`
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
`,Fr.div`
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
`,window.wp.i18n);new function(){this.formatTimeData=(e,t)=>{const n=e=>{if(!e||e&&"string"!=typeof e)return null;const t=e.split(":"),n=parseInt(t[0]);return(n>0?60*n:0)+parseInt(t[1])};return{fieldValue:{startTimeInMinutes:e?n(e.start):null,endTimeInMinutes:e?n(e.end):null},logicValue:{startTimeInMinutes:t?n(t.start):null,endTimeInMinutes:t?n(t.end):null}}}};const Gr="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjUuOTk5IiB2aWV3Qm94PSIwIDAgNiA1Ljk5OSI+CiAgPHBhdGggaWQ9InRpbWVzIiBkPSJNOS43LDlsMi4xNDgtMi4xNDNhLjUuNSwwLDEsMC0uNzA5LS43MDlMOC45OTQsOC4yOTEsNi44NTEsNi4xNDNhLjUuNSwwLDAsMC0uNzA5LjcwOUw4LjI5LDksNi4xNDIsMTEuMTM4YS41LjUsMCwxLDAsLjcwOS43MDlMOC45OTQsOS43bDIuMTQzLDIuMTQ4YS41LjUsMCwxLDAsLjcwOS0uNzA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuOTk0IC01Ljk5NikiIGZpbGw9IiMzYzNjM2MiLz4KPC9zdmc+Cg==";var Zr=n(5556),Vr=n.n(Zr);const qr="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNC42NDQiIGhlaWdodD0iMjUuNTI4IiB2aWV3Qm94PSIwIDAgMzQuNjQ0IDI1LjUyOCI+CiAgPHBhdGggaWQ9IlBhdGhfNiIgZGF0YS1uYW1lPSJQYXRoIDYiIGQ9Ik0xNjEuNTc4LDEzNy4wN2EzLjY0NiwzLjY0NiwwLDAsMC01LjE1NywwbC0xNS42NTYsMTUuNjU0LTYuNTM5LTYuNTM3YTMuNjQ2LDMuNjQ2LDAsMSwwLTUuMTU3LDUuMTU3bDkuMTE3LDkuMTE3YTMuNjQ1LDMuNjQ1LDAsMCwwLDUuMTU3LDBsMTguMjM0LTE4LjIzNEEzLjY0NiwzLjY0NiwwLDAsMCwxNjEuNTc4LDEzNy4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAyIC0xMzYuMDAyKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",Kr=({id:t,name:n,label:r,useLabelFor:o,value:i,checked:a,onChange:l,disabled:s,currentCheckboxId:p,loader:c,indeterminate:h,isFormElement:d,register:g,required:u})=>(0,e.createElement)("div",{className:"helpgent-checkbox "+(h?"helpgent-checkbox--indeterminate":"")},p===t&&c?(0,e.createElement)("span",{className:"helpgent-circle-loader"}):(0,e.createElement)("input",{type:"checkbox",id:t,name:n,value:i,checked:a,onChange:l,disabled:s?"disabled":"",...d?g(n,{required:{value:"1"===u.isActive,message:(0,Br.__)("The field is required","helpgent")}}):{}}),(0,e.createElement)("label",{htmlFor:o?t:""}," ",(0,e.createElement)(Ke,{src:qr})," ",r," "));Kr.defaultProps={id:"",name:"",label:"",value:"",useLabelFor:!0,checked:!1,disabled:!1,currentCheckboxId:"",loader:!1,isFormElement:!1,register:null,required:null},Kr.propTypes={id:Vr().string,name:Vr().string,label:Vr().string,value:Vr().string,useLabelFor:Vr().bool,checked:Vr().bool,onChange:Vr().func,disabled:Vr().bool,currentCheckboxId:Vr().string,loader:Vr().bool,isFormElement:Vr().bool,register:Vr().func,required:Vr().object};const $r=window.wp.components;function Jr(e,t,n){const r=r=>{e&&n.current&&!n.current.contains(r.target)&&t(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}const Xr=t=>{const{handleChangeDate:n,date:o,placeholder:i,validation:a,register:l,errors:s,clearErrors:p,isClientModeActive:c,featureState:h,setFeatureState:d}=t,[g,u]=(0,r.useState)(!1),f=(0,r.useRef)(null);return document.addEventListener("scroll",(function(){const e=document.querySelectorAll(".helpgent-datepicker");e.length&&e.forEach((e=>{const t=e.getBoundingClientRect(),n=e.querySelector(".components-datetime__date");n&&(n.style.top=`${t.top+55}px`)}))})),(0,r.useEffect)((()=>{Jr(g,u,f)}),[g]),(0,e.createElement)(Wr,{className:g?"helpgent-datepicker helpgent-active":"helpgent-datepicker",ref:f},(0,e.createElement)("div",{className:"helpgent-form helpgent-form-group helpgent-form-icon-right helpgent-mb-0"},(0,e.createElement)("span",{className:"helpgent-input-icon"},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iY2FsZW5kYXJfMV8iIGRhdGEtbmFtZT0iY2FsZW5kYXIgKDEpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iUGF0aF8xNTE0IiBkYXRhLW5hbWU9IlBhdGggMTUxNCIgZD0iTTEyLjY2NywxLjMzM0gxMlYuNjY3YS42NjcuNjY3LDAsMSwwLTEuMzMzLDB2LjY2N0g1LjMzM1YuNjY3QS42NjcuNjY3LDAsMCwwLDQsLjY2N3YuNjY3SDMuMzMzQTMuMzM3LDMuMzM3LDAsMCwwLDAsNC42Njd2OEEzLjMzNywzLjMzNywwLDAsMCwzLjMzMywxNmg5LjMzM0EzLjMzNywzLjMzNywwLDAsMCwxNiwxMi42Njd2LThBMy4zMzcsMy4zMzcsMCwwLDAsMTIuNjY3LDEuMzMzWk0xLjMzMyw0LjY2N2EyLDIsMCwwLDEsMi0yaDkuMzMzYTIsMiwwLDAsMSwyLDJ2LjY2N0gxLjMzM1ptMTEuMzMzLDEwSDMuMzMzYTIsMiwwLDAsMS0yLTJ2LTZIMTQuNjY3djZBMiwyLDAsMCwxLDEyLjY2NywxNC42NjdaIiBmaWxsPSIjYTJhMmEyIi8+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yNzEiIGRhdGEtbmFtZT0iRWxsaXBzZSAyNzEiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41IDguMzU3KSIgZmlsbD0iI2EyYTJhMiIvPgogIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMjcyIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjcyIiBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNDA1IDguMzU3KSIgZmlsbD0iI2EyYTJhMiIvPgogIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMjczIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjczIiBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuNTk1IDguMzU3KSIgZmlsbD0iI2EyYTJhMiIvPgo8L3N2Zz4K"})),(0,e.createElement)("input",{type:"text",className:"helpgent-form-group__element helpgent-form-group__element--date",placeholder:i,value:o.value,onClick:e=>{var t;t=e,c&&(u(!0),function(e){const t=e.target.closest(".helpgent-datepicker"),n=(t.clientWidth,t.getBoundingClientRect()),r=document.innerWidth;t.setAttribute("style",`\n\t\t\t--helpgent-dropdown-top: ${n.top+55}px;\n\t\t\t--helpgent-dropdown-left: calc(${n.right}px - 140px);\n\t\t\t--helpgent-dropdown-right: calc(100% - ${n.right}px - 140px);\n\t\t`),setTimeout((()=>{const e=t.querySelector(".components-datetime__date"),o=window.innerHeight,i=e.clientHeight;let a=n.top+55;a+i>o&&(a=n.top-i-20,e.classList.contains("helpgent-mega-dropdown")?a=35:e.classList.contains("components-datetime__date")&&(r<768?a=105:a+=10)),e.style.top=`${a}px`,e.style.right=`calc(100% - ${n.right}px - 140`}),0)}(t))},readOnly:!0,...c?l("date",{required:{value:"1"===a.isActive,message:(0,Br.__)("The date field is required","helpgent")}}):{}})),(0,e.createElement)($r.DatePicker,{onChange:e=>{n(e),u(!1)}}))};Xr.defaultProps={},Xr.propTypes={};var eo=n(85505),to=n(9506),no=n(50539),ro=n(27714);function oo(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function io(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function ao(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function lo(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,o=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?o="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==o){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=oo,t.componentWillReceiveProps=io),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=ao;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,r)}}return e}function so(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}oo.__suppressDeprecationWarning=!0,io.__suppressDeprecationWarning=!0,ao.__suppressDeprecationWarning=!0;var po=n(32223),co=n.n(po);function ho(e,t,n,r){var o=ve().unstable_batchedUpdates?function(e){ve().unstable_batchedUpdates(n,e)}:n;return co()(e,t,o,r)}function go(e){return go="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},go(e)}function uo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fo(e,t){return fo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},fo(e,t)}function mo(e){return mo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},mo(e)}var xo=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fo(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=mo(r);if(o){var n=mo(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==go(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).removeContainer=function(){e.container&&(ve().unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.renderComponent=function(t,n){var r=e.props,o=r.visible,i=r.getComponent,a=r.forceRender,l=r.getContainer,s=r.parent;(o||s._component||a)&&(e.container||(e.container=l()),ve().unstable_renderSubtreeIntoContainer(s,i(t),e.container,(function(){n&&n.call(this)})))},e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}])&&uo(t.prototype,n),a}(t().Component);function vo(e){return vo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vo(e)}function bo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yo(e,t){return yo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},yo(e,t)}function wo(e){return wo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},wo(e)}xo.propTypes={autoMount:Vr().bool,autoDestroy:Vr().bool,visible:Vr().bool,forceRender:Vr().bool,parent:Vr().any,getComponent:Vr().func.isRequired,getContainer:Vr().func.isRequired,children:Vr().func.isRequired},xo.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};var _o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yo(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=wo(r);if(o){var n=wo(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==vo(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(e){var t=this.props.didUpdate;t&&t(e)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?ve().createPortal(this.props.children,this._container):null}}])&&bo(t.prototype,n),a}(t().Component);_o.propTypes={getContainer:Vr().func.isRequired,children:Vr().node.isRequired,didUpdate:Vr().func};var Mo=n(46942),ko=n.n(Mo);function So(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function Eo(e,t){this[e]=t}var jo,Co=n(97588);function Lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function No(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Lo(Object(n),!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lo(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Do(e){return Do="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Do(e)}function zo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Oo={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function Io(){if(void 0!==jo)return jo;jo="";var e=document.createElement("p").style;for(var t in Oo)t+"Transform"in e&&(jo=t);return jo}function To(){return Io()?"".concat(Io(),"TransitionProperty"):"transitionProperty"}function Ao(){return Io()?"".concat(Io(),"Transform"):"transform"}function Po(e,t){var n=To();n&&(e.style[n]=t,"transitionProperty"!==n&&(e.style.transitionProperty=t))}function Ro(e,t){var n=Ao();n&&(e.style[n]=t,"transform"!==n&&(e.style.transform=t))}var Uo,Fo=/matrix\((.*)\)/,Yo=/matrix3d\((.*)\)/;function Ho(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function Wo(e,t,n){var r=n;if("object"!==Do(t))return void 0!==r?("number"==typeof r&&(r="".concat(r,"px")),void(e.style[t]=r)):Uo(e,t);for(var o in t)t.hasOwnProperty(o)&&Wo(e,o,t[o])}function Qo(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var o=e.document;"number"!=typeof(n=o.documentElement[r])&&(n=o.body[r])}return n}function Bo(e){return Qo(e)}function Go(e){return Qo(e,!0)}function Zo(e){var t=function(e){var t,n,r,o=e.ownerDocument,i=o.body,a=o&&o.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),r=Math.floor(t.top),{left:n-=a.clientLeft||i.clientLeft||0,top:r-=a.clientTop||i.clientTop||0}}(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=Bo(r),t.top+=Go(r),t}function Vo(e){return null!=e&&e==e.window}function qo(e){return Vo(e)?e.document:9===e.nodeType?e:e.ownerDocument}var Ko=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),$o=/^(top|right|bottom|left)$/,Jo="currentStyle",Xo="runtimeStyle",ei="left";function ti(e,t){return"left"===e?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function ni(e){return"left"===e?"right":"right"===e?"left":"top"===e?"bottom":"bottom"===e?"top":void 0}function ri(e,t,n){"static"===Wo(e,"position")&&(e.style.position="relative");var r=-999,o=-999,i=ti("left",n),a=ti("top",n),l=ni(i),s=ni(a);"left"!==i&&(r=999),"top"!==a&&(o=999);var p="",c=Zo(e);("left"in t||"top"in t)&&(p=function(e){return e.style.transitionProperty||e.style[To()]}(e)||"",Po(e,"none")),"left"in t&&(e.style[l]="",e.style[i]="".concat(r,"px")),"top"in t&&(e.style[s]="",e.style[a]="".concat(o,"px")),Ho(e);var h=Zo(e),d={};for(var g in t)if(t.hasOwnProperty(g)){var u=ti(g,n),f="left"===g?r:o,m=c[g]-h[g];d[u]=u===g?f+m:f-m}Wo(e,d),Ho(e),("left"in t||"top"in t)&&Po(e,p);var x={};for(var v in t)if(t.hasOwnProperty(v)){var b=ti(v,n),y=t[v]-c[v];x[b]=v===b?d[b]+y:d[b]-y}Wo(e,x)}function oi(e,t){for(var n=0;n<e.length;n++)t(e[n])}function ii(e){return"border-box"===Uo(e,"boxSizing")}"undefined"!=typeof window&&(Uo=window.getComputedStyle?function(e,t,n){var r=n,o="",i=qo(e);return(r=r||i.defaultView.getComputedStyle(e,null))&&(o=r.getPropertyValue(t)||r[t]),o}:function(e,t){var n=e[Jo]&&e[Jo][t];if(Ko.test(n)&&!$o.test(t)){var r=e.style,o=r[ei],i=e[Xo][ei];e[Xo][ei]=e[Jo][ei],r[ei]="fontSize"===t?"1em":n||0,n=r.pixelLeft+"px",r[ei]=o,e[Xo][ei]=i}return""===n?"auto":n});var ai=["margin","border","padding"],li=-1,si=2,pi=1;function ci(e,t,n){var r,o,i,a=0;for(o=0;o<t.length;o++)if(r=t[o])for(i=0;i<n.length;i++){var l;l="border"===r?"".concat(r).concat(n[i],"Width"):r+n[i],a+=parseFloat(Uo(e,l))||0}return a}var hi={getParent:function(e){var t=e;do{t=11===t.nodeType&&t.host?t.host:t.parentNode}while(t&&1!==t.nodeType&&9!==t.nodeType);return t}};function di(e,t,n){var r=n;if(Vo(e))return"width"===t?hi.viewportWidth(e):hi.viewportHeight(e);if(9===e.nodeType)return"width"===t?hi.docWidth(e):hi.docHeight(e);var o="width"===t?["Left","Right"]:["Top","Bottom"],i="width"===t?Math.floor(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().height),a=ii(e),l=0;(null==i||i<=0)&&(i=void 0,(null==(l=Uo(e,t))||Number(l)<0)&&(l=e.style[t]||0),l=Math.floor(parseFloat(l))||0),void 0===r&&(r=a?pi:li);var s=void 0!==i||a,p=i||l;return r===li?s?p-ci(e,["border","padding"],o):l:s?r===pi?p:p+(r===si?-ci(e,["border"],o):ci(e,["margin"],o)):l+ci(e,ai.slice(r),o)}oi(["Width","Height"],(function(e){hi["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],hi["viewport".concat(e)](n))},hi["viewport".concat(e)]=function(t){var n="client".concat(e),r=t.document,o=r.body,i=r.documentElement[n];return"CSS1Compat"===r.compatMode&&i||o&&o[n]||i}}));var gi={position:"absolute",visibility:"hidden",display:"block"};function ui(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o=t[0];return 0!==o.offsetWidth?r=di.apply(void 0,t):function(e,n){var o,i={},a=e.style;for(o in n)n.hasOwnProperty(o)&&(i[o]=a[o],a[o]=n[o]);for(o in function(){r=di.apply(void 0,t)}.call(e),n)n.hasOwnProperty(o)&&(a[o]=i[o])}(o,gi),r}function fi(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}oi(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);hi["outer".concat(t)]=function(t,n){return t&&ui(t,e,n?0:pi)};var n="width"===e?["Left","Right"]:["Top","Bottom"];hi[e]=function(t,r){var o=r;return void 0!==o?t?(ii(t)&&(o+=ci(t,["padding","border"],n)),Wo(t,e,o)):void 0:t&&ui(t,e,li)}}));var mi={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:qo,offset:function(e,t,n){if(void 0===t)return Zo(e);!function(e,t,n){if(n.ignoreShake){var r=Zo(e),o=r.left.toFixed(0),i=r.top.toFixed(0),a=t.left.toFixed(0),l=t.top.toFixed(0);if(o===a&&i===l)return}n.useCssRight||n.useCssBottom?ri(e,t,n):n.useCssTransform&&Ao()in document.body.style?function(e,t){var n=Zo(e),r=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(Ao());if(n&&"none"!==n){var r=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}(e),o={x:r.x,y:r.y};"left"in t&&(o.x=r.x+t.left-n.left),"top"in t&&(o.y=r.y+t.top-n.top),function(e,t){var n=window.getComputedStyle(e,null),r=n.getPropertyValue("transform")||n.getPropertyValue(Ao());if(r&&"none"!==r){var o,i=r.match(Fo);i?((o=(i=i[1]).split(",").map((function(e){return parseFloat(e,10)})))[4]=t.x,o[5]=t.y,Ro(e,"matrix(".concat(o.join(","),")"))):((o=r.match(Yo)[1].split(",").map((function(e){return parseFloat(e,10)})))[12]=t.x,o[13]=t.y,Ro(e,"matrix3d(".concat(o.join(","),")")))}else Ro(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}(e,o)}(e,t):ri(e,t,n)}(e,t,n||{})},isWindow:Vo,each:oi,css:Wo,clone:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);if(e.overflow)for(t in e)e.hasOwnProperty(t)&&(n.overflow[t]=e.overflow[t]);return n},mix:fi,getWindowScrollLeft:function(e){return Bo(e)},getWindowScrollTop:function(e){return Go(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++)mi.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};fi(mi,hi);var xi=mi.getParent;function vi(e){if(mi.isWindow(e)||9===e.nodeType)return null;var t,n=mi.getDocument(e).body,r=mi.css(e,"position");if("fixed"!==r&&"absolute"!==r)return"html"===e.nodeName.toLowerCase()?null:xi(e);for(t=xi(e);t&&t!==n&&9!==t.nodeType;t=xi(t))if("static"!==(r=mi.css(t,"position")))return t;return null}var bi=mi.getParent;function yi(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},r=vi(e),o=mi.getDocument(e),i=o.defaultView||o.parentWindow,a=o.body,l=o.documentElement;r;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===r.clientWidth||r===a||r===l||"visible"===mi.css(r,"overflow")){if(r===a||r===l)break}else{var s=mi.offset(r);s.left+=r.clientLeft,s.top+=r.clientTop,n.top=Math.max(n.top,s.top),n.right=Math.min(n.right,s.left+r.clientWidth),n.bottom=Math.min(n.bottom,s.top+r.clientHeight),n.left=Math.max(n.left,s.left)}r=vi(r)}var p=null;mi.isWindow(e)||9===e.nodeType||(p=e.style.position,"absolute"===mi.css(e,"position")&&(e.style.position="fixed"));var c=mi.getWindowScrollLeft(i),h=mi.getWindowScrollTop(i),d=mi.viewportWidth(i),g=mi.viewportHeight(i),u=l.scrollWidth,f=l.scrollHeight,m=window.getComputedStyle(a);if("hidden"===m.overflowX&&(u=i.innerWidth),"hidden"===m.overflowY&&(f=i.innerHeight),e.style&&(e.style.position=p),t||function(e){if(mi.isWindow(e)||9===e.nodeType)return!1;var t=mi.getDocument(e),n=t.body,r=null;for(r=bi(e);r&&r!==n&&r!==t;r=bi(r))if("fixed"===mi.css(r,"position"))return!0;return!1}(e))n.left=Math.max(n.left,c),n.top=Math.max(n.top,h),n.right=Math.min(n.right,c+d),n.bottom=Math.min(n.bottom,h+g);else{var x=Math.max(u,c+d);n.right=Math.min(n.right,x);var v=Math.max(f,h+g);n.bottom=Math.min(n.bottom,v)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function wi(e){var t,n,r;if(mi.isWindow(e)||9===e.nodeType){var o=mi.getWindow(e);t={left:mi.getWindowScrollLeft(o),top:mi.getWindowScrollTop(o)},n=mi.viewportWidth(o),r=mi.viewportHeight(o)}else t=mi.offset(e),n=mi.outerWidth(e),r=mi.outerHeight(e);return t.width=n,t.height=r,t}function _i(e,t){var n=t.charAt(0),r=t.charAt(1),o=e.width,i=e.height,a=e.left,l=e.top;return"c"===n?l+=i/2:"b"===n&&(l+=i),"c"===r?a+=o/2:"r"===r&&(a+=o),{left:a,top:l}}function Mi(e,t,n,r,o){var i=_i(t,n[1]),a=_i(e,n[0]),l=[a.left-i.left,a.top-i.top];return{left:Math.round(e.left-l[0]+r[0]-o[0]),top:Math.round(e.top-l[1]+r[1]-o[1])}}function ki(e,t,n){return e.left<n.left||e.left+t.width>n.right}function Si(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function Ei(e,t,n){var r=[];return mi.each(e,(function(e){r.push(e.replace(t,(function(e){return n[e]})))})),r}function ji(e,t){return e[t]=-e[t],e}function Ci(e,t){return(/%$/.test(e)?parseInt(e.substring(0,e.length-1),10)/100*t:parseInt(e,10))||0}function Li(e,t){e[0]=Ci(e[0],t.width),e[1]=Ci(e[1],t.height)}function Ni(e,t,n,r){var o=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],l=n.overflow,s=n.source||e;i=[].concat(i),a=[].concat(a);var p={},c=0,h=yi(s,!(!(l=l||{})||!l.alwaysByViewport)),d=wi(s);Li(i,d),Li(a,t);var g=Mi(d,t,o,i,a),u=mi.merge(d,g);if(h&&(l.adjustX||l.adjustY)&&r){if(l.adjustX&&ki(g,d,h)){var f=Ei(o,/[lr]/gi,{l:"r",r:"l"}),m=ji(i,0),x=ji(a,0);(function(e,t,n){return e.left>n.right||e.left+t.width<n.left})(Mi(d,t,f,m,x),d,h)||(c=1,o=f,i=m,a=x)}if(l.adjustY&&Si(g,d,h)){var v=Ei(o,/[tb]/gi,{t:"b",b:"t"}),b=ji(i,1),y=ji(a,1);(function(e,t,n){return e.top>n.bottom||e.top+t.height<n.top})(Mi(d,t,v,b,y),d,h)||(c=1,o=v,i=b,a=y)}c&&(g=Mi(d,t,o,i,a),mi.mix(u,g));var w=ki(g,d,h),_=Si(g,d,h);if(w||_){var M=o;w&&(M=Ei(o,/[lr]/gi,{l:"r",r:"l"})),_&&(M=Ei(o,/[tb]/gi,{t:"b",b:"t"})),o=M,i=n.offset||[0,0],a=n.targetOffset||[0,0]}p.adjustX=l.adjustX&&w,p.adjustY=l.adjustY&&_,(p.adjustX||p.adjustY)&&(u=function(e,t,n,r){var o=mi.clone(e),i={width:t.width,height:t.height};return r.adjustX&&o.left<n.left&&(o.left=n.left),r.resizeWidth&&o.left>=n.left&&o.left+i.width>n.right&&(i.width-=o.left+i.width-n.right),r.adjustX&&o.left+i.width>n.right&&(o.left=Math.max(n.right-i.width,n.left)),r.adjustY&&o.top<n.top&&(o.top=n.top),r.resizeHeight&&o.top>=n.top&&o.top+i.height>n.bottom&&(i.height-=o.top+i.height-n.bottom),r.adjustY&&o.top+i.height>n.bottom&&(o.top=Math.max(n.bottom-i.height,n.top)),mi.mix(o,i)}(g,d,h,p))}return u.width!==d.width&&mi.css(s,"width",mi.width(s)+u.width-d.width),u.height!==d.height&&mi.css(s,"height",mi.height(s)+u.height-d.height),mi.offset(s,{left:u.left,top:u.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:i,targetOffset:a,overflow:p}}function Di(e,t,n){var r=n.target||t,o=wi(r),i=!function(e,t){var n=yi(e,t),r=wi(e);return!n||r.left+r.width<=n.left||r.top+r.height<=n.top||r.left>=n.right||r.top>=n.bottom}(r,n.overflow&&n.overflow.alwaysByViewport);return Ni(e,o,n,i)}function zi(e){return e&&"object"==typeof e&&e.window===e}function Oi(e,t){var n=Math.floor(e),r=Math.floor(t);return Math.abs(n-r)<=1}function Ii(e){return"function"==typeof e&&e?e():null}function Ti(e){return"object"==typeof e&&e?e:null}Di.__getOffsetParent=vi,Di.__getVisibleRectForElement=yi;var Ai=function(e){function n(){var e,t,r,o;(0,to.A)(this,n);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=r=(0,no.A)(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.forceAlign=function(){var e=r.props,t=e.disabled,n=e.target,o=e.align,i=e.onAlign;if(!t&&n){var a=ve().findDOMNode(r),l=void 0,s=Ii(n),p=Ti(n),c=document.activeElement;s?l=Di(a,s,o):p&&(l=function(e,t,n){var r,o,i=mi.getDocument(e),a=i.defaultView||i.parentWindow,l=mi.getWindowScrollLeft(a),s=mi.getWindowScrollTop(a),p=mi.viewportWidth(a),c=mi.viewportHeight(a),h={left:r="pageX"in t?t.pageX:l+t.clientX,top:o="pageY"in t?t.pageY:s+t.clientY,width:0,height:0},d=r>=0&&r<=l+p&&o>=0&&o<=s+c,g=[n.points[0],"cc"];return Ni(e,h,No(No({},n),{},{points:g}),d)}(a,p,o)),function(e,t){e!==document.activeElement&&so(t,e)&&e.focus()}(c,a),i&&i(a,l)}},o=t,(0,no.A)(r,o)}return(0,ro.A)(n,e),(0,Co.A)(n,[{key:"componentDidMount",value:function(){var e=this.props;this.forceAlign(),!e.disabled&&e.monitorWindowResize&&this.startMonitorWindowResize()}},{key:"componentDidUpdate",value:function(e){var t=!1,n=this.props;if(!n.disabled){var r=ve().findDOMNode(this),o=r?r.getBoundingClientRect():null;if(e.disabled)t=!0;else{var i=Ii(e.target),a=Ii(n.target),l=Ti(e.target),s=Ti(n.target);zi(i)&&zi(a)?t=!1:(i!==a||i&&!a&&s||l&&s&&a||s&&!function(e,t){return e===t||!(!e||!t)&&("pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t&&e.clientX===t.clientX&&e.clientY===t.clientY)}(l,s))&&(t=!0);var p=this.sourceRect||{};t||!r||Oi(p.width,o.width)&&Oi(p.height,o.height)||(t=!0)}this.sourceRect=o}t&&this.forceAlign(),n.monitorWindowResize&&!n.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize()}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=function(e,t){var n=void 0;function r(){n&&(clearTimeout(n),n=null)}function o(){r(),n=setTimeout(e,t)}return o.clear=r,o}(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=ho(window,"resize",this.bufferMonitor))}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)}},{key:"render",value:function(){var e=this,n=this.props,r=n.childrenProps,o=n.children,i=t().Children.only(o);if(r){var a={};return Object.keys(r).forEach((function(t){a[t]=e.props[r[t]]})),t().cloneElement(i,a)}return i}}]),n}(e.Component);Ai.propTypes={childrenProps:Vr().object,align:Vr().object.isRequired,target:Vr().oneOfType([Vr().func,Vr().shape({clientX:Vr().number,clientY:Vr().number,pageX:Vr().number,pageY:Vr().number})]),onAlign:Vr().func,monitorBufferTime:Vr().number,monitorWindowResize:Vr().bool,disabled:Vr().bool,children:Vr().any},Ai.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};const Pi=Ai;var Ri=n(44508);function Ui(e){var n=[];return t().Children.forEach(e,(function(e){n.push(e)})),n}function Fi(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e)})),n}function Yi(e,t,n){var r=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}})),r}var Hi=n(97479),Wi={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Qi={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Bi=[],Gi=[];function Zi(e,t,n){e.addEventListener(t,n,!1)}function Vi(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];for(var i in o)if(i in e){n.push(o[i]);break}}}"AnimationEvent"in window||(delete Wi.animationstart.animation,delete Qi.animationend.animation),"TransitionEvent"in window||(delete Wi.transitionstart.transition,delete Qi.transitionend.transition),t(Wi,Bi),t(Qi,Gi)}();var qi={startEvents:Bi,addStartEventListener:function(e,t){0!==Bi.length?Bi.forEach((function(n){Zi(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==Bi.length&&Bi.forEach((function(n){Vi(e,n,t)}))},endEvents:Gi,addEndEventListener:function(e,t){0!==Gi.length?Gi.forEach((function(n){Zi(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==Gi.length&&Gi.forEach((function(n){Vi(e,n,t)}))}};const Ki=qi;var $i=n(30837),Ji=n.n($i),Xi=0!==Ki.endEvents.length,ea=["Webkit","Moz","O","ms"],ta=["-webkit-","-moz-","-o-","ms-",""];function na(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<ta.length&&!(r=n.getPropertyValue(ta[o]+t));o++);return r}function ra(e){if(Xi){var t=parseFloat(na(e,"transition-delay"))||0,n=parseFloat(na(e,"transition-duration"))||0,r=parseFloat(na(e,"animation-delay"))||0,o=parseFloat(na(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout((function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()}),1e3*i+200)}}function oa(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var ia=function(e,t,n){var r="object"===(void 0===t?"undefined":(0,Hi.default)(t)),o=r?t.name:t,i=r?t.active:t+"-active",a=n,l=void 0,s=void 0,p=Ji()(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(a=n.end,l=n.start,s=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),oa(e),p.remove(o),p.remove(i),Ki.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,a&&a())},Ki.addEndEventListener(e,e.rcEndListener),l&&l(),p.add(o),e.rcAnimTimeout=setTimeout((function(){e.rcAnimTimeout=null,p.add(i),s&&setTimeout(s,0),ra(e)}),30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};ia.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),oa(e),Ki.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},Ki.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout((function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,ra(e)}),0)},ia.setTransition=function(e,t,n){var r=t,o=n;void 0===n&&(o=r,r=""),r=r||"",ea.forEach((function(t){e.style[t+"Transition"+r]=o}))},ia.isCssAnimationSupported=Xi;const aa=ia,la=function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},sa=function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},pa=function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},ca=function(e){return e.transitionAppear||e.animation.appear},ha=function(e){return e.transitionEnter||e.animation.enter},da=function(e){return e.transitionLeave||e.animation.leave};var ga={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},ua=function(e){function t(){return(0,to.A)(this,t),(0,no.A)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,ro.A)(t,e),(0,Co.A)(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){sa(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){la(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){pa(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=ve().findDOMNode(this),o=this.props,i=o.transitionName,a="object"==typeof i;this.stop();var l=function(){n.stopper=null,t()};if((Xi||!o.animation[e])&&i&&o[ga[e]]){var s=a?i[e]:i+"-"+e,p=s+"-active";a&&i[e+"Active"]&&(p=i[e+"Active"]),this.stopper=aa(r,{name:s,active:p},l)}else this.stopper=o.animation[e](r,l)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(t().Component);ua.propTypes={children:Vr().any,animation:Vr().any,transitionName:Vr().any};const fa=ua;var ma="rc_animate_"+Date.now();function xa(e){var n=e.children;return t().isValidElement(n)&&!n.key?t().cloneElement(n,{key:ma}):n}function va(){}var ba=function(e){function n(e){(0,to.A)(this,n);var t=(0,no.A)(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return ya.call(t),t.currentlyAnimatingKeys={},t.keysToEnter=[],t.keysToLeave=[],t.state={children:Ui(xa(e))},t.childrenRefs={},t}return(0,ro.A)(n,e),(0,Co.A)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return!!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(e){var n=this;this.nextProps=e;var r=Ui(xa(e)),o=this.props;o.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){n.stop(e)}));var i=o.showProp,a=this.currentlyAnimatingKeys,l=o.exclusive?Ui(xa(o)):this.state.children,s=[];i?(l.forEach((function(e){var n,o=e&&Fi(r,e.key);(n=o&&o.props[i]||!e.props[i]?o:t().cloneElement(o||e,(0,Ri.A)({},i,!0)))&&s.push(n)})),r.forEach((function(e){e&&Fi(l,e.key)||s.push(e)}))):s=function(e,t){var n=[],r={},o=[];return e.forEach((function(e){e&&Fi(t,e.key)?o.length&&(r[e.key]=o,o=[]):o.push(e)})),t.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(r,e.key)&&(n=n.concat(r[e.key])),n.push(e)})),n=n.concat(o)}(l,r),this.setState({children:s}),r.forEach((function(e){var t=e&&e.key;if(!e||!a[t]){var r=e&&Fi(l,t);if(i){var o=e.props[i];r?!Yi(l,t,i)&&o&&n.keysToEnter.push(t):o&&n.keysToEnter.push(t)}else r||n.keysToEnter.push(t)}})),l.forEach((function(e){var t=e&&e.key;if(!e||!a[t]){var o=e&&Fi(r,t);if(i){var l=e.props[i];o?!Yi(r,t,i)&&l&&n.keysToLeave.push(t):l&&n.keysToLeave.push(t)}else o||n.keysToLeave.push(t)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?Yi(e,t,n):Fi(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,n=this.props;this.nextProps=n;var r=this.state.children,o=null;r&&(o=r.map((function(r){if(null==r)return r;if(!r.key)throw new Error("must set key for <rc-animate> children");return t().createElement(fa,{key:r.key,ref:function(t){e.childrenRefs[r.key]=t},animation:n.animation,transitionName:n.transitionName,transitionEnter:n.transitionEnter,transitionAppear:n.transitionAppear,transitionLeave:n.transitionLeave},r)})));var i=n.component;if(i){var a=n;return"string"==typeof i&&(a=(0,eo.A)({className:n.className,style:n.style},n.componentProps)),t().createElement(i,a,o)}return o[0]||null}}]),n}(t().Component);ba.isAnimate=!0,ba.propTypes={className:Vr().string,style:Vr().object,component:Vr().any,componentProps:Vr().object,animation:Vr().object,transitionName:Vr().oneOfType([Vr().string,Vr().object]),transitionEnter:Vr().bool,transitionAppear:Vr().bool,exclusive:Vr().bool,transitionLeave:Vr().bool,onEnd:Vr().func,onEnter:Vr().func,onLeave:Vr().func,onAppear:Vr().func,showProp:Vr().string,children:Vr().node},ba.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:va,onEnter:va,onLeave:va,onAppear:va};var ya=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var r=e.props;if(delete e.currentlyAnimatingKeys[t],!r.exclusive||r===e.nextProps){var o=Ui(xa(r));e.isValidChildByKey(o,t)?"appear"===n?ca(r)&&(r.onAppear(t),r.onEnd(t,!0)):ha(r)&&(r.onEnter(t),r.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var r,o,i,a,l=Ui(xa(n));if(e.isValidChildByKey(l,t))e.performEnter(t);else{var s=function(){da(n)&&(n.onLeave(t),n.onEnd(t,!1))};r=e.state.children,o=l,i=n.showProp,(a=r.length===o.length)&&r.forEach((function(e,t){var n=o[t];e&&n&&(e&&!n||!e&&n||e.key!==n.key||i&&e.props[i]!==n.props[i])&&(a=!1)})),a?s():e.setState({children:l},s)}}}};const wa=function(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return"function"!=typeof n.componentWillReceiveProps?e:t().Profiler?(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps,e):e}(ba);var _a=n(5748),Ma=function(e){function n(){return(0,to.A)(this,n),(0,no.A)(this,e.apply(this,arguments))}return(0,ro.A)(n,e),n.prototype.shouldComponentUpdate=function(e){return e.hiddenClassName||e.visible},n.prototype.render=function(){var e=this.props,n=e.hiddenClassName,r=e.visible,o=(0,_a.A)(e,["hiddenClassName","visible"]);return n||t().Children.count(o.children)>1?(!r&&n&&(o.className+=" "+n),t().createElement("div",o)):t().Children.only(o.children)},n}(e.Component);Ma.propTypes={children:Vr().any,className:Vr().string,visible:Vr().bool,hiddenClassName:Vr().string};const ka=Ma;var Sa=function(e){function n(){return(0,to.A)(this,n),(0,no.A)(this,e.apply(this,arguments))}return(0,ro.A)(n,e),n.prototype.render=function(){var e=this.props,n=e.className;return e.visible||(n+=" "+e.hiddenClassName),t().createElement("div",{className:n,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseDown:e.onMouseDown,onTouchStart:e.onTouchStart,style:e.style},t().createElement(ka,{className:e.prefixCls+"-content",visible:e.visible},e.children))},n}(e.Component);Sa.propTypes={hiddenClassName:Vr().string,className:Vr().string,prefixCls:Vr().string,onMouseEnter:Vr().func,onMouseLeave:Vr().func,onMouseDown:Vr().func,onTouchStart:Vr().func,children:Vr().any};const Ea=Sa;var ja=function(e){function n(t){(0,to.A)(this,n);var r=(0,no.A)(this,e.call(this,t));return Ca.call(r),r.state={stretchChecked:!1,targetWidth:void 0,targetHeight:void 0},r.savePopupRef=Eo.bind(r,"popupInstance"),r.saveAlignRef=Eo.bind(r,"alignInstance"),r}return(0,ro.A)(n,e),n.prototype.componentDidMount=function(){this.rootNode=this.getPopupDomNode(),this.setStretchSize()},n.prototype.componentDidUpdate=function(){this.setStretchSize()},n.prototype.getPopupDomNode=function(){return ve().findDOMNode(this.popupInstance)},n.prototype.getMaskTransitionName=function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t},n.prototype.getTransitionName=function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t},n.prototype.getClassName=function(e){return this.props.prefixCls+" "+this.props.className+" "+e},n.prototype.getPopupElement=function(){var e=this,n=this.savePopupRef,r=this.state,o=r.stretchChecked,i=r.targetHeight,a=r.targetWidth,l=this.props,s=l.align,p=l.visible,c=l.prefixCls,h=l.style,d=l.getClassNameFromAlign,g=l.destroyPopupOnHide,u=l.stretch,f=l.children,m=l.onMouseEnter,x=l.onMouseLeave,v=l.onMouseDown,b=l.onTouchStart,y=this.getClassName(this.currentAlignClassName||d(s)),w=c+"-hidden";p||(this.currentAlignClassName=null);var _={};u&&(-1!==u.indexOf("height")?_.height=i:-1!==u.indexOf("minHeight")&&(_.minHeight=i),-1!==u.indexOf("width")?_.width=a:-1!==u.indexOf("minWidth")&&(_.minWidth=a),o||(_.visibility="hidden",setTimeout((function(){e.alignInstance&&e.alignInstance.forceAlign()}),0)));var M={className:y,prefixCls:c,ref:n,onMouseEnter:m,onMouseLeave:x,onMouseDown:v,onTouchStart:b,style:(0,eo.A)({},_,h,this.getZIndexStyle())};return g?t().createElement(wa,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName()},p?t().createElement(Pi,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,align:s,onAlign:this.onAlign},t().createElement(Ea,(0,eo.A)({visible:!0},M),f)):null):t().createElement(wa,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName(),showProp:"xVisible"},t().createElement(Pi,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,xVisible:p,childrenProps:{visible:"xVisible"},disabled:!p,align:s,onAlign:this.onAlign},t().createElement(Ea,(0,eo.A)({hiddenClassName:w},M),f)))},n.prototype.getZIndexStyle=function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e},n.prototype.getMaskElement=function(){var e=this.props,n=void 0;if(e.mask){var r=this.getMaskTransitionName();n=t().createElement(ka,{style:this.getZIndexStyle(),key:"mask",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible}),r&&(n=t().createElement(wa,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:r},n))}return n},n.prototype.render=function(){return t().createElement("div",null,this.getMaskElement(),this.getPopupElement())},n}(e.Component);ja.propTypes={visible:Vr().bool,style:Vr().object,getClassNameFromAlign:Vr().func,onAlign:Vr().func,getRootDomNode:Vr().func,align:Vr().any,destroyPopupOnHide:Vr().bool,className:Vr().string,prefixCls:Vr().string,onMouseEnter:Vr().func,onMouseLeave:Vr().func,onMouseDown:Vr().func,onTouchStart:Vr().func,stretch:Vr().string,children:Vr().node,point:Vr().shape({pageX:Vr().number,pageY:Vr().number})};var Ca=function(){var e=this;this.onAlign=function(t,n){var r=e.props,o=r.getClassNameFromAlign(n);e.currentAlignClassName!==o&&(e.currentAlignClassName=o,t.className=e.getClassName(o)),r.onAlign(t,n)},this.setStretchSize=function(){var t=e.props,n=t.stretch,r=t.getRootDomNode,o=t.visible,i=e.state,a=i.stretchChecked,l=i.targetHeight,s=i.targetWidth;if(n&&o){var p=r();if(p){var c=p.offsetHeight,h=p.offsetWidth;l===c&&s===h&&a||e.setState({stretchChecked:!0,targetHeight:c,targetWidth:h})}}else a&&e.setState({stretchChecked:!1})},this.getTargetElement=function(){return e.props.getRootDomNode()},this.getAlignTarget=function(){return e.props.point||e.getTargetElement}};const La=ja;function Na(){}var Da=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],za=!!xe.createPortal,Oa={rcTrigger:Vr().shape({onPopupMouseDown:Vr().func})},Ia=function(e){function n(t){(0,to.A)(this,n);var r=(0,no.A)(this,e.call(this,t));Ta.call(r);var o;return o="popupVisible"in t?!!t.popupVisible:!!t.defaultPopupVisible,r.state={prevPopupVisible:o,popupVisible:o},Da.forEach((function(e){r["fire"+e]=function(t){r.fireEvents(e,t)}})),r}return(0,ro.A)(n,e),n.prototype.getChildContext=function(){return{rcTrigger:{onPopupMouseDown:this.onPopupMouseDown}}},n.prototype.componentDidMount=function(){this.componentDidUpdate({},{popupVisible:this.state.popupVisible})},n.prototype.componentDidUpdate=function(e,t){var n=this.props,r=this.state;if(za||this.renderComponent(null,(function(){t.popupVisible!==r.popupVisible&&n.afterPopupVisibleChange(r.popupVisible)})),r.popupVisible){var o=void 0;return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(o=n.getDocument(),this.clickOutsideHandler=ho(o,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(o=o||n.getDocument(),this.touchOutsideHandler=ho(o,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(o=o||n.getDocument(),this.contextMenuOutsideHandler1=ho(o,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=ho(window,"blur",this.onContextMenuClose)))}this.clearOutsideHandler()},n.prototype.componentWillUnmount=function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)},n.getDerivedStateFromProps=function(e,t){var n=e.popupVisible,r={};return void 0!==n&&t.popupVisible!==n&&(r.popupVisible=n,r.prevPopupVisible=t.popupVisible),r},n.prototype.getPopupDomNode=function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},n.prototype.getPopupAlign=function(){var e=this.props,t=e.popupPlacement,n=e.popupAlign,r=e.builtinPlacements;return t&&r?function(e,t,n){var r=e[t]||{};return(0,eo.A)({},r,n)}(r,t,n):n},n.prototype.setPopupVisible=function(e,t){var n=this.props.alignPoint,r=this.state.popupVisible;this.clearDelayTimer(),r!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:r}),this.props.onPopupVisibleChange(e)),n&&t&&this.setPoint(t)},n.prototype.delaySetPopupVisible=function(e,t,n){var r=this,o=1e3*t;if(this.clearDelayTimer(),o){var i=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=setTimeout((function(){r.setPopupVisible(e,i),r.clearDelayTimer()}),o)}else this.setPopupVisible(e,n)},n.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},n.prototype.clearOutsideHandler=function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},n.prototype.createTwoChains=function(e){var t=this.props.children.props,n=this.props;return t[e]&&n[e]?this["fire"+e]:t[e]||n[e]},n.prototype.isClickToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")},n.prototype.isContextMenuToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("contextMenu")||-1!==n.indexOf("contextMenu")},n.prototype.isClickToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")},n.prototype.isMouseEnterToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseEnter")},n.prototype.isMouseLeaveToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseLeave")},n.prototype.isFocusToShow=function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("focus")},n.prototype.isBlurToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("blur")},n.prototype.forcePopupAlign=function(){this.state.popupVisible&&this._component&&this._component.alignInstance&&this._component.alignInstance.forceAlign()},n.prototype.fireEvents=function(e,t){var n=this.props.children.props[e];n&&n(t);var r=this.props[e];r&&r(t)},n.prototype.close=function(){this.setPopupVisible(!1)},n.prototype.render=function(){var e=this,n=this.state.popupVisible,r=this.props,o=r.children,i=r.forceRender,a=r.alignPoint,l=r.className,s=t().Children.only(o),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,a&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var c=ko()(s&&s.props&&s.props.className,l);c&&(p.className=c);var h=t().cloneElement(s,p);if(!za)return t().createElement(xo,{parent:this,visible:n,autoMount:!1,forceRender:i,getComponent:this.getComponent,getContainer:this.getContainer},(function(t){var n=t.renderComponent;return e.renderComponent=n,h}));var d=void 0;return(n||this._component||i)&&(d=t().createElement(_o,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),[h,d]},n}(t().Component);Ia.propTypes={children:Vr().any,action:Vr().oneOfType([Vr().string,Vr().arrayOf(Vr().string)]),showAction:Vr().any,hideAction:Vr().any,getPopupClassNameFromAlign:Vr().any,onPopupVisibleChange:Vr().func,afterPopupVisibleChange:Vr().func,popup:Vr().oneOfType([Vr().node,Vr().func]).isRequired,popupStyle:Vr().object,prefixCls:Vr().string,popupClassName:Vr().string,className:Vr().string,popupPlacement:Vr().string,builtinPlacements:Vr().object,popupTransitionName:Vr().oneOfType([Vr().string,Vr().object]),popupAnimation:Vr().any,mouseEnterDelay:Vr().number,mouseLeaveDelay:Vr().number,zIndex:Vr().number,focusDelay:Vr().number,blurDelay:Vr().number,getPopupContainer:Vr().func,getDocument:Vr().func,forceRender:Vr().bool,destroyPopupOnHide:Vr().bool,mask:Vr().bool,maskClosable:Vr().bool,onPopupAlign:Vr().func,popupAlign:Vr().object,popupVisible:Vr().bool,defaultPopupVisible:Vr().bool,maskTransitionName:Vr().oneOfType([Vr().string,Vr().object]),maskAnimation:Vr().string,stretch:Vr().string,alignPoint:Vr().bool},Ia.contextTypes=Oa,Ia.childContextTypes=Oa,Ia.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:function(){return""},getDocument:function(){return window.document},onPopupVisibleChange:Na,afterPopupVisibleChange:Na,onPopupAlign:Na,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]};var Ta=function(){var e=this;this.onMouseEnter=function(t){var n=e.props.mouseEnterDelay;e.fireEvents("onMouseEnter",t),e.delaySetPopupVisible(!0,n,n?null:t)},this.onMouseMove=function(t){e.fireEvents("onMouseMove",t),e.setPoint(t)},this.onMouseLeave=function(t){e.fireEvents("onMouseLeave",t),e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)},this.onPopupMouseEnter=function(){e.clearDelayTimer()},this.onPopupMouseLeave=function(t){t.relatedTarget&&!t.relatedTarget.setTimeout&&e._component&&e._component.getPopupDomNode&&so(e._component.getPopupDomNode(),t.relatedTarget)||e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)},this.onFocus=function(t){e.fireEvents("onFocus",t),e.clearDelayTimer(),e.isFocusToShow()&&(e.focusTime=Date.now(),e.delaySetPopupVisible(!0,e.props.focusDelay))},this.onMouseDown=function(t){e.fireEvents("onMouseDown",t),e.preClickTime=Date.now()},this.onTouchStart=function(t){e.fireEvents("onTouchStart",t),e.preTouchTime=Date.now()},this.onBlur=function(t){e.fireEvents("onBlur",t),e.clearDelayTimer(),e.isBlurToHide()&&e.delaySetPopupVisible(!1,e.props.blurDelay)},this.onContextMenu=function(t){t.preventDefault(),e.fireEvents("onContextMenu",t),e.setPopupVisible(!0,t)},this.onContextMenuClose=function(){e.isContextMenuToShow()&&e.close()},this.onClick=function(t){if(e.fireEvents("onClick",t),e.focusTime){var n=void 0;if(e.preClickTime&&e.preTouchTime?n=Math.min(e.preClickTime,e.preTouchTime):e.preClickTime?n=e.preClickTime:e.preTouchTime&&(n=e.preTouchTime),Math.abs(n-e.focusTime)<20)return;e.focusTime=0}e.preClickTime=0,e.preTouchTime=0,e.isClickToShow()&&(e.isClickToHide()||e.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault();var r=!e.state.popupVisible;(e.isClickToHide()&&!r||r&&e.isClickToShow())&&e.setPopupVisible(!e.state.popupVisible,t)},this.onPopupMouseDown=function(){var t=e.context.rcTrigger,n=void 0===t?{}:t;e.hasPopupMouseDown=!0,clearTimeout(e.mouseDownTimeout),e.mouseDownTimeout=setTimeout((function(){e.hasPopupMouseDown=!1}),0),n.onPopupMouseDown&&n.onPopupMouseDown.apply(n,arguments)},this.onDocumentClick=function(t){if(!e.props.mask||e.props.maskClosable){var n=t.target;so((0,xe.findDOMNode)(e),n)||e.hasPopupMouseDown||e.close()}},this.getRootDomNode=function(){return(0,xe.findDOMNode)(e)},this.getPopupClassNameFromAlign=function(t){var n=[],r=e.props,o=r.popupPlacement,i=r.builtinPlacements,a=r.prefixCls,l=r.alignPoint,s=r.getPopupClassNameFromAlign;return o&&i&&n.push(function(e,t,n,r){var o=n.points;for(var i in e)if(e.hasOwnProperty(i)&&So(e[i].points,o,r))return t+"-placement-"+i;return""}(i,a,t,l)),s&&n.push(s(t)),n.join(" ")},this.getComponent=function(){var n=e.props,r=n.prefixCls,o=n.destroyPopupOnHide,i=n.popupClassName,a=n.action,l=n.onPopupAlign,s=n.popupAnimation,p=n.popupTransitionName,c=n.popupStyle,h=n.mask,d=n.maskAnimation,g=n.maskTransitionName,u=n.zIndex,f=n.popup,m=n.stretch,x=n.alignPoint,v=e.state,b=v.popupVisible,y=v.point,w=e.getPopupAlign(),_={};return e.isMouseEnterToShow()&&(_.onMouseEnter=e.onPopupMouseEnter),e.isMouseLeaveToHide()&&(_.onMouseLeave=e.onPopupMouseLeave),_.onMouseDown=e.onPopupMouseDown,_.onTouchStart=e.onPopupMouseDown,t().createElement(La,(0,eo.A)({prefixCls:r,destroyPopupOnHide:o,visible:b,point:x&&y,className:i,action:a,align:w,onAlign:l,animation:s,getClassNameFromAlign:e.getPopupClassNameFromAlign},_,{stretch:m,getRootDomNode:e.getRootDomNode,style:c,mask:h,zIndex:u,transitionName:p,maskAnimation:d,maskTransitionName:g,ref:e.savePopup}),"function"==typeof f?f():f)},this.getContainer=function(){var t=e.props,n=document.createElement("div");return n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",(t.getPopupContainer?t.getPopupContainer((0,xe.findDOMNode)(e)):t.getDocument().body).appendChild(n),n},this.setPoint=function(t){e.props.alignPoint&&t&&e.setState({point:{pageX:t.pageX,pageY:t.pageY}})},this.handlePortalUpdate=function(){e.state.prevPopupVisible!==e.state.popupVisible&&e.props.afterPopupVisibleChange(e.state.popupVisible)},this.savePopup=function(t){e._component=t}};lo(Ia);const Aa=Ia,Pa=window.moment;var Ra=n.n(Pa);function Ua(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fa(e){return Fa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Fa(e)}function Ya(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ha(e,t){return Ha=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ha(e,t)}function Wa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qa=function(e){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?Ya(e):t}(this,Fa(n).call(this,e)),Wa(Ya(t),"onInputChange",(function(e){var n=e.target.value;t.setState({str:n});var r=t.props,o=r.format,i=r.hourOptions,a=r.minuteOptions,l=r.secondOptions,s=r.disabledHours,p=r.disabledMinutes,c=r.disabledSeconds,h=r.onChange;if(n){var d=t.props.value,g=t.getProtoValue().clone(),u=Ra()(n,o,!0);if(!u.isValid())return void t.setState({invalid:!0});if(g.hour(u.hour()).minute(u.minute()).second(u.second()),i.indexOf(g.hour())<0||a.indexOf(g.minute())<0||l.indexOf(g.second())<0)return void t.setState({invalid:!0});var f=s(),m=p(g.hour()),x=c(g.hour(),g.minute());if(f&&f.indexOf(g.hour())>=0||m&&m.indexOf(g.minute())>=0||x&&x.indexOf(g.second())>=0)return void t.setState({invalid:!0});if(d){if(d.hour()!==g.hour()||d.minute()!==g.minute()||d.second()!==g.second()){var v=d.clone();v.hour(g.hour()),v.minute(g.minute()),v.second(g.second()),h(v)}}else d!==g&&h(g)}else h(null);t.setState({invalid:!1})})),Wa(Ya(t),"onKeyDown",(function(e){var n=t.props,r=n.onEsc,o=n.onKeyDown;27===e.keyCode&&r(),o(e)}));var r=e.value,o=e.format;return t.state={str:r&&r.format(o)||"",invalid:!1},t}var r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ha(e,t)}(n,e),r=n,(o=[{key:"componentDidMount",value:function(){var e=this;this.props.focusOnOpen&&(window.requestAnimationFrame||window.setTimeout)((function(){e.refInput.focus(),e.refInput.select()}))}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,r=t.format;n!==e.value&&this.setState({str:n&&n.format(r)||"",invalid:!1})}},{key:"getProtoValue",value:function(){var e=this.props,t=e.value,n=e.defaultOpenValue;return t||n}},{key:"getInput",value:function(){var e=this,n=this.props,r=n.prefixCls,o=n.placeholder,i=n.inputReadOnly,a=this.state,l=a.invalid,s=a.str,p=l?"".concat(r,"-input-invalid"):"";return t().createElement("input",{className:ko()("".concat(r,"-input"),p),ref:function(t){e.refInput=t},onKeyDown:this.onKeyDown,value:s,placeholder:o,onChange:this.onInputChange,readOnly:!!i})}},{key:"render",value:function(){var e=this.props.prefixCls;return t().createElement("div",{className:"".concat(e,"-input-wrap")},this.getInput())}}])&&Ua(r.prototype,o),n}(e.Component);Wa(Qa,"propTypes",{format:Vr().string,prefixCls:Vr().string,disabledDate:Vr().func,placeholder:Vr().string,clearText:Vr().string,value:Vr().object,inputReadOnly:Vr().bool,hourOptions:Vr().array,minuteOptions:Vr().array,secondOptions:Vr().array,disabledHours:Vr().func,disabledMinutes:Vr().func,disabledSeconds:Vr().func,onChange:Vr().func,onEsc:Vr().func,defaultOpenValue:Vr().object,currentSelectPanel:Vr().string,focusOnOpen:Vr().bool,onKeyDown:Vr().func,clearIcon:Vr().node}),Wa(Qa,"defaultProps",{inputReadOnly:!1});const Ba=Qa;var Ga=n(93146),Za=n.n(Ga);function Va(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qa(e){return qa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},qa(e)}function Ka(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $a(e,t){return $a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$a(e,t)}function Ja(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xa=function e(t,n,r){if(r<=0)Za()((function(){t.scrollTop=n}));else{var o=(n-t.scrollTop)/r*10;Za()((function(){t.scrollTop+=o,t.scrollTop!==n&&e(t,n,r-10)}))}},el=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?Ka(e):t}(this,(e=qa(n)).call.apply(e,[this].concat(o))),Ja(Ka(t),"state",{active:!1}),Ja(Ka(t),"onSelect",(function(e){var n=t.props;(0,n.onSelect)(n.type,e)})),Ja(Ka(t),"handleMouseEnter",(function(e){var n=t.props.onMouseEnter;t.setState({active:!0}),n(e)})),Ja(Ka(t),"handleMouseLeave",(function(){t.setState({active:!1})})),Ja(Ka(t),"saveList",(function(e){t.list=e})),t}var r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$a(e,t)}(n,e),r=n,(o=[{key:"componentDidMount",value:function(){this.scrollToSelected(0)}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedIndex;e.selectedIndex!==t&&this.scrollToSelected(120)}},{key:"getOptions",value:function(){var e=this,n=this.props,r=n.options,o=n.selectedIndex,i=n.prefixCls,a=n.onEsc;return r.map((function(n,r){var l,s=ko()((Ja(l={},"".concat(i,"-select-option-selected"),o===r),Ja(l,"".concat(i,"-select-option-disabled"),n.disabled),l)),p=n.disabled?void 0:function(){e.onSelect(n.value)};return t().createElement("li",{role:"button",onClick:p,className:s,key:r,disabled:n.disabled,tabIndex:"0",onKeyDown:function(e){13===e.keyCode?p():27===e.keyCode&&a()}},n.value)}))}},{key:"scrollToSelected",value:function(e){var t=this.props.selectedIndex,n=ve().findDOMNode(this),r=ve().findDOMNode(this.list);if(r){var o=t;o<0&&(o=0);var i=r.children[o].offsetTop;Xa(n,i,e)}}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,r=e.options,o=this.state.active;if(0===r.length)return null;var i=ko()("".concat(n,"-select"),Ja({},"".concat(n,"-select-active"),o));return t().createElement("div",{className:i,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},t().createElement("ul",{ref:this.saveList},this.getOptions()))}}])&&Va(r.prototype,o),n}(e.Component);Ja(el,"propTypes",{prefixCls:Vr().string,options:Vr().array,selectedIndex:Vr().number,type:Vr().string,onSelect:Vr().func,onMouseEnter:Vr().func,onEsc:Vr().func});const tl=el;function nl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rl(e){return rl=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},rl(e)}function ol(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function il(e,t){return il=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},il(e,t)}function al(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ll=function(e,t){var n="".concat(e);e<10&&(n="0".concat(e));var r=!1;return t&&t.indexOf(e)>=0&&(r=!0),{value:n,disabled:r}},sl=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?ol(e):t}(this,(e=rl(n)).call.apply(e,[this].concat(o))),al(ol(t),"onItemChange",(function(e,n){var r=t.props,o=r.onChange,i=r.defaultOpenValue,a=r.use12Hours,l=r.value,s=r.isAM,p=r.onAmPmChange,c=(l||i).clone();if("hour"===e)a?s?c.hour(+n%12):c.hour(+n%12+12):c.hour(+n);else if("minute"===e)c.minute(+n);else if("ampm"===e){var h=n.toUpperCase();a&&("PM"===h&&c.hour()<12&&c.hour(c.hour()%12+12),"AM"===h&&c.hour()>=12&&c.hour(c.hour()-12)),p(h)}else c.second(+n);o(c)})),al(ol(t),"onEnterSelectPanel",(function(e){(0,t.props.onCurrentSelectPanelChange)(e)})),t}var r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&il(e,t)}(n,e),r=n,(o=[{key:"getHourSelect",value:function(e){var n=this,r=this.props,o=r.prefixCls,i=r.hourOptions,a=r.disabledHours,l=r.showHour,s=r.use12Hours,p=r.onEsc;if(!l)return null;var c,h,d=a();return s?(c=[12].concat(i.filter((function(e){return e<12&&e>0}))),h=e%12||12):(c=i,h=e),t().createElement(tl,{prefixCls:o,options:c.map((function(e){return ll(e,d)})),selectedIndex:c.indexOf(h),type:"hour",onSelect:this.onItemChange,onMouseEnter:function(){return n.onEnterSelectPanel("hour")},onEsc:p})}},{key:"getMinuteSelect",value:function(e){var n=this,r=this.props,o=r.prefixCls,i=r.minuteOptions,a=r.disabledMinutes,l=r.defaultOpenValue,s=r.showMinute,p=r.value,c=r.onEsc;if(!s)return null;var h=a((p||l).hour());return t().createElement(tl,{prefixCls:o,options:i.map((function(e){return ll(e,h)})),selectedIndex:i.indexOf(e),type:"minute",onSelect:this.onItemChange,onMouseEnter:function(){return n.onEnterSelectPanel("minute")},onEsc:c})}},{key:"getSecondSelect",value:function(e){var n=this,r=this.props,o=r.prefixCls,i=r.secondOptions,a=r.disabledSeconds,l=r.showSecond,s=r.defaultOpenValue,p=r.value,c=r.onEsc;if(!l)return null;var h=p||s,d=a(h.hour(),h.minute());return t().createElement(tl,{prefixCls:o,options:i.map((function(e){return ll(e,d)})),selectedIndex:i.indexOf(e),type:"second",onSelect:this.onItemChange,onMouseEnter:function(){return n.onEnterSelectPanel("second")},onEsc:c})}},{key:"getAMPMSelect",value:function(){var e=this,n=this.props,r=n.prefixCls,o=n.use12Hours,i=n.format,a=n.isAM,l=n.onEsc;if(!o)return null;var s=["am","pm"].map((function(e){return i.match(/\sA/)?e.toUpperCase():e})).map((function(e){return{value:e}})),p=a?0:1;return t().createElement(tl,{prefixCls:r,options:s,selectedIndex:p,type:"ampm",onSelect:this.onItemChange,onMouseEnter:function(){return e.onEnterSelectPanel("ampm")},onEsc:l})}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,r=e.defaultOpenValue,o=e.value||r;return t().createElement("div",{className:"".concat(n,"-combobox")},this.getHourSelect(o.hour()),this.getMinuteSelect(o.minute()),this.getSecondSelect(o.second()),this.getAMPMSelect(o.hour()))}}])&&nl(r.prototype,o),n}(e.Component);al(sl,"propTypes",{format:Vr().string,defaultOpenValue:Vr().object,prefixCls:Vr().string,value:Vr().object,onChange:Vr().func,onAmPmChange:Vr().func,showHour:Vr().bool,showMinute:Vr().bool,showSecond:Vr().bool,hourOptions:Vr().array,minuteOptions:Vr().array,secondOptions:Vr().array,disabledHours:Vr().func,disabledMinutes:Vr().func,disabledSeconds:Vr().func,onCurrentSelectPanelChange:Vr().func,use12Hours:Vr().bool,onEsc:Vr().func,isAM:Vr().bool});const pl=sl;function cl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function hl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dl(e){return dl=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},dl(e)}function gl(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ul(e,t){return ul=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ul(e,t)}function fl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ml(){}function xl(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=[],i=0;i<e;i+=r)(!t||t.indexOf(i)<0||!n)&&o.push(i);return o}var vl=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?gl(e):t}(this,(e=dl(n)).call.apply(e,[this].concat(o))),fl(gl(t),"state",{}),fl(gl(t),"onChange",(function(e){var n=t.props.onChange;t.setState({value:e}),n(e)})),fl(gl(t),"onAmPmChange",(function(e){(0,t.props.onAmPmChange)(e)})),fl(gl(t),"onCurrentSelectPanelChange",(function(e){t.setState({currentSelectPanel:e})})),fl(gl(t),"disabledHours",(function(){var e=t.props,n=e.use12Hours,r=(0,e.disabledHours)();return n&&Array.isArray(r)&&(r=t.isAM()?r.filter((function(e){return e<12})).map((function(e){return 0===e?12:e})):r.map((function(e){return 12===e?12:e-12}))),r})),t}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ul(e,t)}(n,e),r=n,i=[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?cl(Object(n),!0).forEach((function(t){fl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cl(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{value:e.value}):null}}],(o=[{key:"close",value:function(){(0,this.props.onEsc)()}},{key:"isAM",value:function(){var e=this.props.defaultOpenValue,t=this.state.value||e;return t.hour()>=0&&t.hour()<12}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,r=e.className,o=e.placeholder,i=e.disabledMinutes,a=e.disabledSeconds,l=e.hideDisabledOptions,s=e.showHour,p=e.showMinute,c=e.showSecond,h=e.format,d=e.defaultOpenValue,g=e.clearText,u=e.onEsc,f=e.addon,m=e.use12Hours,x=e.focusOnOpen,v=e.onKeyDown,b=e.hourStep,y=e.minuteStep,w=e.secondStep,_=e.inputReadOnly,M=e.clearIcon,k=this.state,S=k.value,E=k.currentSelectPanel,j=this.disabledHours(),C=i(S?S.hour():null),L=a(S?S.hour():null,S?S.minute():null),N=xl(24,j,l,b),D=xl(60,C,l,y),z=xl(60,L,l,w),O=function(e,t,n,r){var o=t.slice().sort((function(t,n){return Math.abs(e.hour()-t)-Math.abs(e.hour()-n)}))[0],i=n.slice().sort((function(t,n){return Math.abs(e.minute()-t)-Math.abs(e.minute()-n)}))[0],a=r.slice().sort((function(t,n){return Math.abs(e.second()-t)-Math.abs(e.second()-n)}))[0];return Ra()("".concat(o,":").concat(i,":").concat(a),"HH:mm:ss")}(d,N,D,z);return t().createElement("div",{className:ko()(r,"".concat(n,"-inner"))},t().createElement(Ba,{clearText:g,prefixCls:n,defaultOpenValue:O,value:S,currentSelectPanel:E,onEsc:u,format:h,placeholder:o,hourOptions:N,minuteOptions:D,secondOptions:z,disabledHours:this.disabledHours,disabledMinutes:i,disabledSeconds:a,onChange:this.onChange,focusOnOpen:x,onKeyDown:v,inputReadOnly:_,clearIcon:M}),t().createElement(pl,{prefixCls:n,value:S,defaultOpenValue:O,format:h,onChange:this.onChange,onAmPmChange:this.onAmPmChange,showHour:s,showMinute:p,showSecond:c,hourOptions:N,minuteOptions:D,secondOptions:z,disabledHours:this.disabledHours,disabledMinutes:i,disabledSeconds:a,onCurrentSelectPanelChange:this.onCurrentSelectPanelChange,use12Hours:m,onEsc:u,isAM:this.isAM()}),f(this))}}])&&hl(r.prototype,o),i&&hl(r,i),n}(e.Component);fl(vl,"propTypes",{clearText:Vr().string,prefixCls:Vr().string,className:Vr().string,defaultOpenValue:Vr().object,value:Vr().object,placeholder:Vr().string,format:Vr().string,inputReadOnly:Vr().bool,disabledHours:Vr().func,disabledMinutes:Vr().func,disabledSeconds:Vr().func,hideDisabledOptions:Vr().bool,onChange:Vr().func,onAmPmChange:Vr().func,onEsc:Vr().func,showHour:Vr().bool,showMinute:Vr().bool,showSecond:Vr().bool,use12Hours:Vr().bool,hourStep:Vr().number,minuteStep:Vr().number,secondStep:Vr().number,addon:Vr().func,focusOnOpen:Vr().bool,onKeyDown:Vr().func,clearIcon:Vr().node}),fl(vl,"defaultProps",{prefixCls:"rc-time-picker-panel",onChange:ml,disabledHours:ml,disabledMinutes:ml,disabledSeconds:ml,defaultOpenValue:Ra()(),use12Hours:!1,addon:ml,onKeyDown:ml,onAmPmChange:ml,inputReadOnly:!1}),lo(vl);const bl=vl;var yl={adjustX:1,adjustY:1},wl=[0,0];const _l={bottomLeft:{points:["tl","tl"],overflow:yl,offset:[0,-3],targetOffset:wl},bottomRight:{points:["tr","tr"],overflow:yl,offset:[0,-3],targetOffset:wl},topRight:{points:["br","br"],overflow:yl,offset:[0,3],targetOffset:wl},topLeft:{points:["bl","bl"],overflow:yl,offset:[0,3],targetOffset:wl}};function Ml(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function kl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sl(e){return Sl=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Sl(e)}function El(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jl(e,t){return jl=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},jl(e,t)}function Cl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ll(){}function Nl(e,t){this[e]=t}var Dl=function(e){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?El(e):t}(this,Sl(n).call(this,e)),Cl(El(t),"onPanelChange",(function(e){t.setValue(e)})),Cl(El(t),"onAmPmChange",(function(e){(0,t.props.onAmPmChange)(e)})),Cl(El(t),"onClear",(function(e){e.stopPropagation(),t.setValue(null),t.setOpen(!1)})),Cl(El(t),"onVisibleChange",(function(e){t.setOpen(e)})),Cl(El(t),"onEsc",(function(){t.setOpen(!1),t.focus()})),Cl(El(t),"onKeyDown",(function(e){40===e.keyCode&&t.setOpen(!0)})),t.saveInputRef=Nl.bind(El(t),"picker"),t.savePanelRef=Nl.bind(El(t),"panelInstance");var r=e.defaultOpen,o=e.defaultValue,i=e.open,a=void 0===i?r:i,l=e.value,s=void 0===l?o:l;return t.state={open:a,value:s},t}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jl(e,t)}(n,e),r=n,o=[{key:"setValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"getFormat",value:function(){var e=this.props,t=e.format,n=e.showHour,r=e.showMinute,o=e.showSecond,i=e.use12Hours;return t||(i?[n?"h":"",r?"mm":"",o?"ss":""].filter((function(e){return!!e})).join(":").concat(" a"):[n?"HH":"",r?"mm":"",o?"ss":""].filter((function(e){return!!e})).join(":"))}},{key:"getPanelElement",value:function(){var e=this.props,n=e.prefixCls,r=e.placeholder,o=e.disabledHours,i=e.disabledMinutes,a=e.disabledSeconds,l=e.hideDisabledOptions,s=e.inputReadOnly,p=e.showHour,c=e.showMinute,h=e.showSecond,d=e.defaultOpenValue,g=e.clearText,u=e.addon,f=e.use12Hours,m=e.focusOnOpen,x=e.onKeyDown,v=e.hourStep,b=e.minuteStep,y=e.secondStep,w=e.clearIcon,_=this.state.value;return t().createElement(bl,{clearText:g,prefixCls:"".concat(n,"-panel"),ref:this.savePanelRef,value:_,inputReadOnly:s,onChange:this.onPanelChange,onAmPmChange:this.onAmPmChange,defaultOpenValue:d,showHour:p,showMinute:c,showSecond:h,onEsc:this.onEsc,format:this.getFormat(),placeholder:r,disabledHours:o,disabledMinutes:i,disabledSeconds:a,hideDisabledOptions:l,use12Hours:f,hourStep:v,minuteStep:b,secondStep:y,addon:u,focusOnOpen:m,onKeyDown:x,clearIcon:w})}},{key:"getPopupClassName",value:function(){var e=this.props,t=e.showHour,n=e.showMinute,r=e.showSecond,o=e.use12Hours,i=e.prefixCls,a=e.popupClassName,l=0;return t&&(l+=1),n&&(l+=1),r&&(l+=1),o&&(l+=1),ko()(a,Cl({},"".concat(i,"-panel-narrow"),!(t&&n&&r||o)),"".concat(i,"-panel-column-").concat(l))}},{key:"setOpen",value:function(e){var t=this.props,n=t.onOpen,r=t.onClose;this.state.open!==e&&("open"in this.props||this.setState({open:e}),e?n({open:e}):r({open:e}))}},{key:"focus",value:function(){this.picker.focus()}},{key:"blur",value:function(){this.picker.blur()}},{key:"renderClearButton",value:function(){var e=this,n=this.state.value,r=this.props,o=r.prefixCls,i=r.allowEmpty,a=r.clearIcon,l=r.clearText,s=r.disabled;if(!i||!n||s)return null;if(t().isValidElement(a)){var p=(a.props||{}).onClick;return t().cloneElement(a,{onClick:function(){p&&p.apply(void 0,arguments),e.onClear.apply(e,arguments)}})}return t().createElement("a",{role:"button",className:"".concat(o,"-clear"),title:l,onClick:this.onClear,tabIndex:0},a||t().createElement("i",{className:"".concat(o,"-clear-icon")}))}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,r=e.placeholder,o=e.placement,i=e.align,a=e.id,l=e.disabled,s=e.transitionName,p=e.style,c=e.className,h=e.getPopupContainer,d=e.name,g=e.autoComplete,u=e.onFocus,f=e.onBlur,m=e.autoFocus,x=e.inputReadOnly,v=e.inputIcon,b=e.popupStyle,y=this.state,w=y.open,_=y.value,M=this.getPopupClassName();return t().createElement(Aa,{prefixCls:"".concat(n,"-panel"),popupClassName:M,popupStyle:b,popup:this.getPanelElement(),popupAlign:i,builtinPlacements:_l,popupPlacement:o,action:l?[]:["click"],destroyPopupOnHide:!0,getPopupContainer:h,popupTransitionName:s,popupVisible:w,onPopupVisibleChange:this.onVisibleChange},t().createElement("span",{className:ko()(n,c),style:p},t().createElement("input",{className:"".concat(n,"-input"),ref:this.saveInputRef,type:"text",placeholder:r,name:d,onKeyDown:this.onKeyDown,disabled:l,value:_&&_.format(this.getFormat())||"",autoComplete:g,onFocus:u,onBlur:f,autoFocus:m,onChange:Ll,readOnly:!!x,id:a}),v||t().createElement("span",{className:"".concat(n,"-icon")}),this.renderClearButton()))}}],i=[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return"value"in e&&(n.value=e.value),void 0!==e.open&&(n.open=e.open),Object.keys(n).length>0?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ml(Object(n),!0).forEach((function(t){Cl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ml(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n):null}}],o&&kl(r.prototype,o),i&&kl(r,i),n}(e.Component);Cl(Dl,"propTypes",{prefixCls:Vr().string,clearText:Vr().string,value:Vr().object,defaultOpenValue:Vr().object,inputReadOnly:Vr().bool,disabled:Vr().bool,allowEmpty:Vr().bool,defaultValue:Vr().object,open:Vr().bool,defaultOpen:Vr().bool,align:Vr().object,placement:Vr().any,transitionName:Vr().string,getPopupContainer:Vr().func,placeholder:Vr().string,format:Vr().string,showHour:Vr().bool,showMinute:Vr().bool,showSecond:Vr().bool,style:Vr().object,className:Vr().string,popupClassName:Vr().string,popupStyle:Vr().object,disabledHours:Vr().func,disabledMinutes:Vr().func,disabledSeconds:Vr().func,hideDisabledOptions:Vr().bool,onChange:Vr().func,onAmPmChange:Vr().func,onOpen:Vr().func,onClose:Vr().func,onFocus:Vr().func,onBlur:Vr().func,addon:Vr().func,name:Vr().string,autoComplete:Vr().string,use12Hours:Vr().bool,hourStep:Vr().number,minuteStep:Vr().number,secondStep:Vr().number,focusOnOpen:Vr().bool,onKeyDown:Vr().func,autoFocus:Vr().bool,id:Vr().string,inputIcon:Vr().node,clearIcon:Vr().node}),Cl(Dl,"defaultProps",{clearText:"clear",prefixCls:"rc-time-picker",defaultOpen:!1,inputReadOnly:!1,style:{},className:"",popupClassName:"",popupStyle:{},align:{},defaultOpenValue:Ra()(),allowEmpty:!0,showHour:!0,showMinute:!0,showSecond:!0,disabledHours:Ll,disabledMinutes:Ll,disabledSeconds:Ll,hideDisabledOptions:!1,placement:"bottomLeft",onChange:Ll,onAmPmChange:Ll,onOpen:Ll,onClose:Ll,onFocus:Ll,onBlur:Ll,addon:Ll,use12Hours:!1,focusOnOpen:!1,onKeyDown:Ll}),lo(Dl),Fr.div`
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
`,Fr.div`
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
`;const zl=window.helpgent.components;function Ol(){return(0,c.applyFilters)("helpgent_pro_status",!1)}Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`,Fr.div`
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
`;const Il=n.p+"images/user-placeholder.7c28a1aa.png",Tl=function({src:t,alt:n="",config:r}){const[o,i]=(0,e.useState)(!1),[a,l]=(0,e.useState)(!0);let s=t||Il;function p(){i(!0)}function c(){l(!1)}return o&&(s=Il),(0,e.createElement)("div",{className:"helpgent-image-wrapper"},a&&(0,e.createElement)("span",{className:"helpgent-image-loader"}),r?(0,e.createElement)("picture",{style:{display:"block",margin:"0px auto",width:"100%",height:"100%",objectFit:"cover",objectPosition:`${r?100*r.x:"center"}% ${r?100*r.y:"center"}%`}},(0,e.createElement)("source",{media:"(prefers-reduced-motion: reduce)",srcSet:s}),(0,e.createElement)("img",{src:s,alt:n,style:{display:"block",margin:"0px auto",width:"100%",height:"100%",objectFit:"cover",objectPosition:`${r?100*r.x:"center"}% ${r?100*r.y:"center"}%`},onError:p,onLoad:c})):(0,e.createElement)("img",{src:s,alt:n,onError:p,onLoad:c}))};n.p,Fr.div`
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
`;const Al={360:{width:640,height:360},480:{width:640,height:480},720:{width:1280,height:720},1080:{width:1920,height:1080},1440:{width:2560,height:1440},2160:{width:3840,height:2160,hdKey:"4K"},7680:{width:7680,height:4320,hdKey:"8K"}};function Pl(e){const t=e.hdKey?` (${e.hdKey})`:"";return`${e.height}p${t}: ${e.width}x${e.height}`}const Rl=Object.keys(Al).map((function(e){return void 0===Al[e]?{value:"",label:""}:{value:parseInt(e),label:Pl(Al[e])}})).reverse();var Ul;Fr.div`
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
`,"function"==typeof SuppressedError&&SuppressedError,function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(Ul||(Ul={}));var Fl=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function Yl(){return Yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yl.apply(this,arguments)}function Hl(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wl(e,t){return Wl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Wl(e,t)}var Ql=function(t){var n,r;function o(){var e;return(e=t.call(this)||this).handleExpired=e.handleExpired.bind(Hl(e)),e.handleErrored=e.handleErrored.bind(Hl(e)),e.handleChange=e.handleChange.bind(Hl(e)),e.handleRecaptchaRef=e.handleRecaptchaRef.bind(Hl(e)),e}r=t,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,Wl(n,r);var i=o.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var t=this.props,n=(t.sitekey,t.onChange,t.theme,t.type,t.tabindex,t.onExpired,t.onErrored,t.size,t.stoken,t.grecaptcha,t.badge,t.hl,t.isolated,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,Fl));return e.createElement("div",Yl({},n,{ref:this.handleRecaptchaRef}))},o}(e.Component);Ql.displayName="ReCAPTCHA",Ql.propTypes={sitekey:Vr().string.isRequired,onChange:Vr().func,grecaptcha:Vr().object,theme:Vr().oneOf(["dark","light"]),type:Vr().oneOf(["image","audio"]),tabindex:Vr().number,onExpired:Vr().func,onErrored:Vr().func,size:Vr().oneOf(["compact","normal","invisible"]),stoken:Vr().string,hl:Vr().string,badge:Vr().oneOf(["bottomright","bottomleft","inline"]),isolated:Vr().bool},Ql.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var Bl=n(4146),Gl=n.n(Bl);function Zl(){return Zl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}var Vl,ql,Kl={},$l=0,Jl="onloadcallback";function Xl(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}(Vl=function(){var e=Xl(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+Jl+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+Jl+"&render=explicit"},ql=(ql={callbackName:Jl,globalName:"grecaptcha",attributes:Xl().nonce?{nonce:Xl().nonce}:{}})||{},function(t){var n=t.displayName||t.name||"Component",r=function(n){var r,o;function i(e,t){var r;return(r=n.call(this,e,t)||this).state={},r.__scriptURL="",r}o=n,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+$l++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL=Vl(),this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=Kl[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[ql.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=ql,o=r.globalName,i=r.callbackName,a=r.scriptId;if(o&&void 0!==window[o]&&(Kl[t]={loaded:!0,observers:{}}),Kl[t]){var l=Kl[t];return l&&(l.loaded||l.errored)?void this.asyncScriptLoaderHandleLoad(l):void(l.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},Kl[t]={loaded:!1,observers:s};var p=document.createElement("script");for(var c in p.src=t,p.async=!0,ql.attributes)p.setAttribute(c,ql.attributes[c]);a&&(p.id=a);var h=function(e){if(Kl[t]){var n=Kl[t].observers;for(var r in n)e(n[r])&&delete n[r]}};i&&"undefined"!=typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=Kl[t];e&&(e.loaded=!0,h((function(t){return!i&&(t(e),!0)})))},p.onerror=function(){var e=Kl[t];e&&(e.errored=!0,h((function(t){return t(e),!0})))},document.body.appendChild(p)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===ql.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=Kl[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===ql.removeOnUnmount&&delete Kl[e])},a.render=function(){var n=ql.globalName,r=this.props,o=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(r,["asyncScriptOnLoad","forwardedRef"]);return n&&"undefined"!=typeof window&&(i[n]=void 0!==window[n]?window[n]:void 0),i.ref=o,(0,e.createElement)(t,i)},i}(e.Component),o=(0,e.forwardRef)((function(t,n){return(0,e.createElement)(r,Zl({},t,{forwardedRef:n}))}));return o.displayName="AsyncScriptLoader("+n+")",o.propTypes={asyncScriptOnLoad:Vr().func},Gl()(o,t)})(Ql);var es=n(12295),ts=n(36801),ns=n(8448),rs=n(94323);class os extends rs.Q{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;const n=this.options;this.options=this.client.defaultMutationOptions(e),(0,es.f8)(n,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||null==(e=this.currentMutation)||e.removeObserver(this)}onMutationUpdate(e){this.updateResult();const t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:(0,ts.$)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){ns.j.batch((()=>{var t,n,r,o;if(this.mutateOptions&&this.hasListeners())if(e.onSuccess)null==(t=(n=this.mutateOptions).onSuccess)||t.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(o=this.mutateOptions).onSettled)||r.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context);else if(e.onError){var i,a,l,s;null==(i=(a=this.mutateOptions).onError)||i.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(l=(s=this.mutateOptions).onSettled)||l.call(s,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}e.listeners&&this.listeners.forEach((({listener:e})=>{e(this.currentResult)}))}))}}const is=n(19888).useSyncExternalStore;function as(e,t){return"function"==typeof e?e(...t):!!e}function ls(){}const ss=window.wp.apiFetch;var ps=n.n(ss);const cs=(t,n)=>function(){const r=(0,es.GR)((e=>async function(e,t,n){return n=n||{},await ps()({path:e,method:"POST",data:t,...n}).then((e=>e)).catch((e=>{throw e}))}(t,e,n)),void 0,void 0),o=l({context:r.context}),[i]=e.useState((()=>new os(o,r)));e.useEffect((()=>{i.setOptions(r)}),[i,r]);const a=is(e.useCallback((e=>i.subscribe(ns.j.batchCalls(e))),[i]),(()=>i.getCurrentResult()),(()=>i.getCurrentResult())),s=e.useCallback(((e,t)=>{i.mutate(e,t).catch(ls)}),[i]);if(a.error&&as(i.options.useErrorBoundary,[a.error]))throw a.error;return{...a,mutate:s,mutateAsync:a.mutate}}();Fr.div`
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
`;var hs,ds=new Uint8Array(16);function gs(){if(!hs&&!(hs="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return hs(ds)}const us=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var fs=[],ms=0;ms<256;++ms)fs.push((ms+256).toString(16).substr(1));const xs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(fs[e[t+0]]+fs[e[t+1]]+fs[e[t+2]]+fs[e[t+3]]+"-"+fs[e[t+4]]+fs[e[t+5]]+"-"+fs[e[t+6]]+fs[e[t+7]]+"-"+fs[e[t+8]]+fs[e[t+9]]+"-"+fs[e[t+10]]+fs[e[t+11]]+fs[e[t+12]]+fs[e[t+13]]+fs[e[t+14]]+fs[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&us.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n},vs=function(e,t,n){var r=(e=e||{}).random||(e.rng||gs)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return xs(r)};vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs(),vs();const bs=1048576,ys=((0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45MDMiIHZpZXdCb3g9IjAgMCAxNiAxNS45MDMiPgogIDxwYXRoIGlkPSJmYWNlYm9vayIgZD0iTTI0LDE2YTgsOCwwLDEsMC05LjI1LDcuOVYxOC4zMTNIMTIuNzE4VjE2SDE0Ljc1VjE0LjIzN2EyLjgyMywyLjgyMywwLDAsMSwzLjAyMi0zLjExMiwxMi4zMTIsMTIuMzEyLDAsMCwxLDEuNzkxLjE1NnYxLjk2OEgxOC41NTRhMS4xNTYsMS4xNTYsMCwwLDAtMS4zLDEuMjQ5VjE2aDIuMjE5bC0uMzU1LDIuMzEzSDE3LjI1VjIzLjlBOCw4LDAsMCwwLDI0LDE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTggLTgpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="}),(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGlkPSJ0d2l0dGVyIiBkPSJNIDExIDQgQyA3LjEzNCA0IDQgNy4xMzQgNCAxMSBMIDQgMzkgQyA0IDQyLjg2NiA3LjEzNCA0NiAxMSA0NiBMIDM5IDQ2IEMgNDIuODY2IDQ2IDQ2IDQyLjg2NiA0NiAzOSBMIDQ2IDExIEMgNDYgNy4xMzQgNDIuODY2IDQgMzkgNCBMIDExIDQgeiBNIDEzLjA4NTkzOCAxMyBMIDIxLjAyMzQzOCAxMyBMIDI2LjY2MDE1NiAyMS4wMDk3NjYgTCAzMy41IDEzIEwgMzYgMTMgTCAyNy43ODkwNjIgMjIuNjEzMjgxIEwgMzcuOTE0MDYyIDM3IEwgMjkuOTc4NTE2IDM3IEwgMjMuNDM3NSAyNy43MDcwMzEgTCAxNS41IDM3IEwgMTMgMzcgTCAyMi4zMDg1OTQgMjYuMTAzNTE2IEwgMTMuMDg1OTM4IDEzIHogTSAxNi45MTQwNjIgMTUgTCAzMS4wMjE0ODQgMzUgTCAzNC4wODU5MzggMzUgTCAxOS45Nzg1MTYgMTUgTCAxNi45MTQwNjIgMTUgeiIvPjwvc3ZnPg=="}),(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMS4yNSIgdmlld0JveD0iMCAwIDE2IDExLjI1Ij4KICA8cGF0aCBpZD0ieW91dHViZSIgZD0iTTMwLjYsNjUuNzZhMi4wMSwyLjAxLDAsMCwwLTEuNDE1LTEuNDI0QTQ3LjUxLDQ3LjUxLDAsMCwwLDIyLjkzMyw2NGE0Ny41MSw0Ny41MSwwLDAsMC02LjI1MS4zMzcsMi4wMSwyLjAxLDAsMCwwLTEuNDE1LDEuNDI0LDIyLjYzNiwyMi42MzYsMCwwLDAsMCw3Ljc1MiwxLjk4LDEuOTgsMCwwLDAsMS40MTUsMS40LDQ3LjUxMyw0Ny41MTMsMCwwLDAsNi4yNTEuMzM2LDQ3LjUxMyw0Ny41MTMsMCwwLDAsNi4yNTEtLjMzNiwxLjk4MSwxLjk4MSwwLDAsMCwxLjQxNS0xLjQsMjIuNjM2LDIyLjYzNiwwLDAsMCwwLTcuNzUyWm0tOS4zLDYuMjU1VjY3LjI1N2w0LjE4MiwyLjM3OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC45MzMgLTY0KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"}),(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNS45OTYiIHZpZXdCb3g9IjAgMCAxNiAxNS45OTYiPgogIDxwYXRoIGlkPSJpbnN0YWdyYW0iIGQ9Ik03LjkyNywzNS43MjJhNC4xLDQuMSwwLDEsMCw0LjEsNC4xQTQuMDk1LDQuMDk1LDAsMCwwLDcuOTI3LDM1LjcyMlptMCw2Ljc2OGEyLjY2NiwyLjY2NiwwLDEsMSwyLjY2Ni0yLjY2NkEyLjY3MSwyLjY3MSwwLDAsMSw3LjkyNyw0Mi40OVptNS4yMjYtNi45MzVBLjk1Ny45NTcsMCwxLDEsMTIuMiwzNC42Ljk1NC45NTQsMCwwLDEsMTMuMTUyLDM1LjU1NFptMi43MTYuOTcxYTQuNzM0LDQuNzM0LDAsMCwwLTEuMjkyLTMuMzUyLDQuNzY1LDQuNzY1LDAsMCwwLTMuMzUyLTEuMjkyYy0xLjMyMS0uMDc1LTUuMjc5LS4wNzUtNi42LDBBNC43NTgsNC43NTgsMCwwLDAsMS4yNzMsMzMuMTcsNC43NSw0Ljc1LDAsMCwwLS4wMTksMzYuNTIxYy0uMDc1LDEuMzIxLS4wNzUsNS4yNzksMCw2LjZhNC43MzQsNC43MzQsMCwwLDAsMS4yOTIsMy4zNTIsNC43NzEsNC43NzEsMCwwLDAsMy4zNTIsMS4yOTJjMS4zMjEuMDc1LDUuMjc5LjA3NSw2LjYsMGE0LjczNCw0LjczNCwwLDAsMCwzLjM1Mi0xLjI5Miw0Ljc2NSw0Ljc2NSwwLDAsMCwxLjI5Mi0zLjM1MkMxNS45NDQsNDEuOCwxNS45NDQsMzcuODQ2LDE1Ljg2OSwzNi41MjVabS0xLjcwNiw4LjAxM2EyLjcsMi43LDAsMCwxLTEuNTIxLDEuNTIxYy0xLjA1My40MTgtMy41NTIuMzIxLTQuNzE1LjMyMXMtMy42NjYuMDkzLTQuNzE1LS4zMjFhMi43LDIuNywwLDAsMS0xLjUyMS0xLjUyMWMtLjQxOC0xLjA1My0uMzIxLTMuNTUyLS4zMjEtNC43MTVzLS4wOTMtMy42NjYuMzIxLTQuNzE1YTIuNywyLjcsMCwwLDEsMS41MjEtMS41MjFjMS4wNTMtLjQxOCwzLjU1Mi0uMzIxLDQuNzE1LS4zMjFzMy42NjYtLjA5Myw0LjcxNS4zMjFhMi43LDIuNywwLDAsMSwxLjUyMSwxLjUyMWMuNDE4LDEuMDUzLjMyMSwzLjU1Mi4zMjEsNC43MTVTMTQuNTgsNDMuNDg5LDE0LjE2Myw0NC41MzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3NSAtMzEuODI1KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"}),e=>e&&"object"==typeof e&&!Array.isArray(e));function ws(e,t,n){window.helpgentGlobalState||(window.helpgentGlobalState={});const r=void 0!==n?window.helpgentGlobalState[n]:window.helpgentGlobalState;return void 0===n||window.helpgentGlobalState.hasOwnProperty(n)?void 0===e?r:r&&r.hasOwnProperty(e)?r[e]:t:t}function _s(){return{videoResolution:{max:720},videoRecordLength:{max:120},audioRecordLength:{max:120},fileSize:{min:1*bs,max:300*bs}}}function Ms(e,t,n){if(n)return e;const r={minLimit:void 0,maxLimit:void 0},{minLimit:o,maxLimit:i}=ys(t)?{...r,limits:t}:r;return void 0!==o&&e<o&&(e=o),void 0!==i&&e>i&&(e=i),e}const ks=window.helpgent.modules;function Ss(){return(0,e.createElement)(ks.SettingsModule,null)}function Es(){return(0,e.createElement)(ks.MediaMigrationModule,null)}!function(){const t=window.helpgent_localization?.nginx_settings_notice_button_data;t&&t.is_nginx&&((0,c.addFilter)("helpgent-settings-panel-fields","helpgent",(e=>(e.nginx_server_configuration={type:"banner",bannerType:"info",...t},e))),(0,c.addFilter)("helpgent-settings-panel-menus","helpgent",(t=>[...t,{type:"menu",key:"config",label:(0,Br.__)("Nginx Config","helpgent"),icon:(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Im5naW54Ij48cGF0aCBmaWxsPSIjMjA5MjM3IiBkPSJNMjIuNSAxOFY2TDEyIDAgMS41IDZ2MTJMMTIgMjRsMTAuNS02ek04LjYzNiAxNi41ODljMCAuNzIxLS41NzYgMS4yOS0xLjI4NyAxLjI5aC0uMDc2Yy0uNzI4IDAtMS4zMDMtLjYtMS4zMDMtMS4yOVY3LjQxYzAtLjcwNS42MzYtMS4yOSAxLjUxNS0xLjI5LjY1MyAwIDEuMzk0LjI1NSAxLjg0OC44MWw2LjAzIDcuMTQxVjcuNDFjMC0uNzIxLjYwNi0xLjI5IDEuMzAzLTEuMjloLjA3NmMuNzI3IDAgMS4zMDMuNiAxLjMwMyAxLjI5djkuMThoLjAxNWMwIC43MDUtLjY1MyAxLjI5LTEuNTQ0IDEuMjktLjYzNyAwLTEuMzY1LS4yNTUtMS44MTktLjgxTDguNjM2IDkuOTI5djYuNjZ6Ij48L3BhdGg+PC9zdmc+"}),iconClass:"",fields:["nginx_server_configuration"]}])))}();const js={forms:"/helpgent/admin/form",availablePages:{text:"Display on specific pages",api:"/helpgent/admin/page-with-homepage"}},Cs={forms:"forms"},Ls=function(){return(0,e.createElement)(ks.FormTableModule,{baseApiRoute:js,baseLinkRoute:Cs})};function Ns(e,t,n,r,o,i){function a(e,t,n){return{...t[e],[n]:{isActive:"1"===t[e][n].isActive?"0":"1"}}}switch(e){case"color_style":r={...r,[t]:{value:n}};break;case"background_style":r={...r,[t]:n};break;case"background_color":case"background_image":case"corner":case"element_size":case"specialElement_size":case"overlay_text":case"position":case"shape":case"size":r=n;break;case"max_video_duration":case"video_resolution":case"max_voice_duration":r={value:n};break;case"max_upload_size":let e={};e="unit"===t?{value:r.value,unit:n}:{unit:r.unit,value:n},r=e;break;case"helpgent_branding":case"save_incomplete_data":case"anonymous_submission":case"progress_count":case"action_btn":"toggle"===t&&(r.isActive="0"===n?"1":"0");break;case"submission_text":case"go_to_next_text":r.value=n;break;case"border":"has_border"===t?r={...r.border,has_border:"1"===r.border.has_border?"0":"1"}:"color"===t&&(r={...r.border,color:n});break;case"offset_x":case"offset_y":r=n<0||""===n?0:n;break;case"background_type":"color"===t?r={...r.background_type,color:n,upload:{id:"",type:"",url:""}}:"upload"===t&&(r={...r.background_type,color:"",upload:n});break;case"admin_notification":r="notify_on_new_response"===t||"notify_on_user_message"===t?a("admin_notification",r,t):{...r.admin_notification,[t]:{value:n}};break;case"user_notification":r="notify_on_new_response"===t||"notify_on_admin_message"===t?a("user_notification",r,t):{...r.user_notification,[t]:{value:n}};break;case"template_settings":r="enable_header"===t||"enable_footer"===t?a("template_settings",r,t):{...r.template_settings,[t]:{value:n}}}!function(e,t,n,r){const{singleForm:o}=n,{elements:i,global:a}=o.content;let l={};l=e in a.bubble?{...a,bubble:{...a.bubble,[e]:t}}:e in a.email_notification?{...a,email_notification:{...a.email_notification,[e]:t}}:e in a.media?{...a,media:{...a.media,[e]:t}}:{...a,[e]:t};const s={...o,content:{elements:i,global:l}};r((e=>({...e,singleForm:s})))}(e,r,o,i)}function Ds(t){const{singleFormState:n,setSingleFormState:o}=t,{singleForm:i}=n,{global:a}=i.content,l=[{label:(0,Br.__)("Small","helpgent"),value:"small"},{label:(0,Br.__)("Medium","helpgent"),value:"medium"},{label:(0,Br.__)("Large","helpgent"),value:"large"}];return(0,e.createElement)(r.Fragment,null,(0,e.createElement)("div",{className:"helpgent-field-element helpgent-field-element--inline helpgent-mt-20"},(0,e.createElement)("div",{className:"helpgent-field-element__left"},(0,e.createElement)("label",{className:"helpgent-field-element__label"},(0,Br.__)("Position","helpgent"))),(0,e.createElement)("div",{className:"helpgent-field-element__right"},(0,e.createElement)("ul",{className:"helpgent-bubble-position"},["left","right"].map(((t,r)=>(0,e.createElement)("li",{key:r,className:`helpgent-bubble-position__${t} ${a?.bubble?.position===t?"helpgent-active":""}`,"data-position":t,onClick:e=>Ns("position",null,e.target.dataset.position,a.bubble,n,o)},(0,e.createElement)("span",null))))))),(0,e.createElement)("div",{className:"helpgent-field-element helpgent-field-element--inline helpgent-mt-20"},(0,e.createElement)("div",{className:"helpgent-field-element__left"},(0,e.createElement)("label",{className:"helpgent-field-element__label",htmlFor:"helpgent-offset-x"},(0,Br.__)("Offset X","helpgent"))),(0,e.createElement)("div",{className:"helpgent-field-element__right"},(0,e.createElement)("div",{className:"helpgent-form-group helpgent-form-group--has-extension"},(0,e.createElement)("input",{type:"number",className:"helpgent-form-group__element",id:"helpgent-offset-x",value:a.bubble?.offset_x,onChange:e=>Ns("offset_x",null,e.target.value,a?.bubble,n,o)}),(0,e.createElement)("span",{className:"helpgent-form-group__extension"},(0,Br.__)("PX","helpgent"))))),(0,e.createElement)("div",{className:"helpgent-field-element helpgent-field-element--inline helpgent-mt-10"},(0,e.createElement)("div",{className:"helpgent-field-element__left"},(0,e.createElement)("label",{className:"helpgent-field-element__label",htmlFor:"helpgent-offset-y"},(0,Br.__)("Offset Y","helpgent"))),(0,e.createElement)("div",{className:"helpgent-field-element__right"},(0,e.createElement)("div",{className:"helpgent-form-group helpgent-form-group--has-extension"},(0,e.createElement)("input",{type:"number",className:"helpgent-form-group__element",id:"helpgent-offset-y",value:a?.bubble?.offset_y,onChange:e=>Ns("offset_y",null,e.target.value,a.bubble,n,o)}),(0,e.createElement)("span",{className:"helpgent-form-group__extension"},(0,Br.__)("PX","helpgent"))))),(0,e.createElement)("div",{className:"helpgent-field-element helpgent-field-element--inline helpgent-mt-20"},(0,e.createElement)("div",{className:"helpgent-field-element__left"},(0,e.createElement)("label",{className:"helpgent-field-element__label",htmlFor:"helpgent-bubble-size"},(0,Br.__)("Bubble size","helpgent"))),(0,e.createElement)("div",{className:"helpgent-field-element__right"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)(zl.Select,{options:l,defaultValue:l[1],inputId:"helpgent-bubble-size",className:"helpgent-select",classNamePrefix:"helpgent-select",isSearchable:!1,placeholder:null,menuPlacement:"top",onChange:e=>Ns("size",null,e.value,a?.bubble,n,o)})))))}function zs(t){const{fieldType:n,hasExtension:r,extensionType:o,extensionContent:i,defaultExtensionContent:a,isExtensionDisabled:l,fieldKey:s,label:p,min:c,max:h,value:d,updateFunction:g,fieldObject:u,inputDescription:f}=t,m={type:n,id:`helpgent-field-element-${s}`,min:parseInt(c),value:d,onChange:e=>g(s,e.target.value),className:"helpgent-form-group__element"};return null!==h&&(m.max=h),(0,e.createElement)(Hr,{className:"helpgent-field-element helpgent-field-element--inline"},(0,e.createElement)("div",{className:"helpgent-field-element__left"},(0,e.createElement)("label",{htmlFor:`helpgent-field-element-${s}`,className:"helpgent-field-element__label"},p)),(0,e.createElement)("div",{className:"helpgent-field-element__right"},(0,e.createElement)("div",{className:"helpgent-form-group "+(r?" helpgent-form-group--has-extension":"")},("text"===n||"number"===n)&&(0,e.createElement)("input",{...m}),r&&(0,e.createElement)("div",{className:"helpgent-form-group__extension"},"select"===o?(0,e.createElement)(zl.Select,{options:i,value:a,defaultValue:a,inputId:"helpgent-extension-select",className:"helpgent-select",classNamePrefix:"helpgent-select",isSearchable:!1,placeholder:null,isDisabled:l,onChange:e=>g(s,e.value,"select"),menuPlacement:"top"}):i)),f&&(0,e.createElement)("div",{className:"helpgent-input-description"},(0,Br.__)("Leave empty to store as many days as you want.","helpgent"))))}function Os(t){const{isProActive:n,handleUpdateField:o,maxUploadSizeUnit:i,maxUploadSizeInBytes:a,singleFormState:l,setSingleFormState:s}=t,p=_s(),{singleForm:c}=l,h=c.content,{global:d}=h,{media:g}=d,{video_resolution:u}=g,f=[{label:(0,Br.__)("KB","helpgent"),value:"kb"},{label:(0,Br.__)("MB","helpgent"),value:"mb"}],m=n?null:["360","480","720"],x=m?Rl.filter((e=>m.includes(`${e.value}`))):Rl;let v="";n||(v=x.filter((e=>`${e.value}`==`${p.videoResolution.max}`)),v=v.length?v[0].label:"");let b=(y=u)&&"object"==typeof y&&!Array.isArray(y)&&u.value?u.value:p.videoResolution.max;var y;b=Ms(b,p.videoResolution,n);let w=x.filter((e=>`${e.value}`==`${b}`));return w=w.length?w[0]:x[0],(0,r.useEffect)((()=>{if(void 0!==g.video_resolution)return;const e={...h,global:{...d,media:{...d.media,video_resolution:{value:""}}}};s((t=>({...t,singleForm:{...t.singleForm,content:e}})))}),[]),(0,e.createElement)(r.Fragment,null,(0,e.createElement)("div",{className:"helpgent-inline-filed-block"},(0,e.createElement)(zs,{fieldType:"number",hasExtension:!0,extensionContent:"Mins",fieldKey:"max_video_duration",label:"Max video length",min:"1",max:n?"":p.videoRecordLength.max/60,value:Ms(60*d?.media?.max_video_duration?.value,p.videoRecordLength,n)/60,updateFunction:o}),!n&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},(0,Br.sprintf)((0,Br.__)("You can use maximum of %s mins in free version","helpgent"),p.videoRecordLength.max/60))),(0,e.createElement)("div",{className:"helpgent-inline-filed-block helpgent-mt-20"},(0,e.createElement)(zs,{fieldType:"number",hasExtension:!0,extensionContent:"Mins",fieldKey:"max_voice_duration",label:"Max voice length",min:"1",max:n?"":p.audioRecordLength.max/60,value:Ms(60*d?.media?.max_voice_duration?.value,p.audioRecordLength,n)/60,updateFunction:o}),!n&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},(0,Br.sprintf)((0,Br.__)("You can use maximum of %s mins in free version","helpgent"),p.audioRecordLength.max/60))),(0,e.createElement)("div",{className:"helpgent-inline-filed-block helpgent-mt-20"},(0,e.createElement)(zs,{fieldType:"number",hasExtension:!0,extensionType:"select",extensionContent:f,defaultExtensionContent:f.filter((e=>e.value===i))[0],isExtensionDisabled:!n,fieldKey:"max_upload_size",label:"Max upload size",min:n?p.fileSize.min/1024/1024:"",max:n?"":p.fileSize.max/1024/1024,value:"mb"===i?a/1024/1024:a/1024,updateFunction:o}),!n&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},(0,Br.__)("You can upload maximum of 300mb in free version","helpgent"))),(0,e.createElement)("div",{className:"helpgent-inline-filed-block helpgent-mt-20"},(0,e.createElement)("div",{className:"helpgent-field-element"},(0,e.createElement)("div",{className:"helpgent-field-element__top"},(0,e.createElement)("label",{className:"helpgent-field-element__label",htmlFor:"helpgent-resolution"},(0,Br.__)("Video Resolution","helpgent"))),(0,e.createElement)("div",{className:"helpgent-field-element__content"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)(zl.Select,{options:x,defaultValue:w,inputId:"helpgent-select",className:"helpgent-select helpgent-select-lg",classNamePrefix:"helpgent-select",isSearchable:!1,placeholder:null,onChange:e=>Ns("video_resolution",null,e.value,g.video_resolution,l,s)}))),v&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},(0,Br.sprintf)((0,Br.__)("You can use maximum of %s in free version","helpgent"),v)))))}function Is(t){const{singleFormState:n,setSingleFormState:o,handleActiveSettingsItem:i,showSettingsContent:a}=t,{singleForm:l}=n,{global:s}=l.content,{activeSettingsTitle:p,activeSettingsGroup:c}=n,h=_s(),d=Ol();let g=s.media.max_upload_size.unit,u="kb"===s.media.max_upload_size.unit?1024*s.media.max_upload_size.value:1048576*s.media.max_upload_size.value;u=Ms(u,h.fileSize,d);const f={isProActive:d,handleUpdateField:function(e,t,r){Ns(e,"select"===r?"unit":null,t,s.media[e],n,o)},maxUploadSizeUnit:g,maxUploadSizeInBytes:u,singleFormState:n,setSingleFormState:o};return(0,e.createElement)(r.Fragment,null,""===p&&(0,e.createElement)("div",{className:"helpgent-screen-setting-block helpgent-settings-item-wrap"},(0,e.createElement)("button",{className:"helpgent-settings-item","data-settings":"media-limits",onClick:e=>{i(e)}},(0,Br.__)("Media limits","helpgent"),(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0LjU1MiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNC41NTIgOCI+CiAgPHBhdGggaWQ9ImFycm93IiBkPSJNNCw5Ny4xNDFhLjU1OS41NTksMCwwLDAtLjQuMTY0bC0zLjQ0LDMuNDM0YS41Ni41NiwwLDAsMCwuNzkyLjc5MUw0LDk4LjQ5bDMuMDQ0LDMuMDM4YS41Ni41NiwwLDAsMCwuNzkyLS43OTFMNC40LDk3LjNBLjU1OS41NTksMCwwLDAsNCw5Ny4xNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDEuNjkyIC0wLjAwMSkgcm90YXRlKDkwKSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K"}))),"media-limits"===c&&""!==p&&(0,e.createElement)("div",{className:"helpgent-screen-setting-block helpgent-screen-setting-block--content "+(a?"helpgent-screen-setting-block--slide-in":"")},(0,e.createElement)(Os,{...f})))}function Ts(t){const{id:n,textColor:r,handler:o}=t;return(0,e.createElement)(Yr,{className:"helpgent-color-picker"},(0,e.createElement)("span",{className:"helpgent-color-picker__text"},r),(0,e.createElement)("label",{htmlFor:`${n}`,className:"helpgent-color-picker__trigger",style:{backgroundColor:r}}),(0,e.createElement)("input",{type:"color",id:`${n}`,name:`${n}`,value:`${r.trim()}`,onChange:o}))}function As({singleFormState:t,setSingleFormState:n}){const{emailTemplateSettings:o}=t,i=Ol(),{header_color:a,enable_header:l,enable_footer:s,footer_text:p}=o,c=(e,r,o)=>{!function(e,t,n,r,o){const{emailTemplateSettings:i}=r,a={...i,[e]:{...i[e],[t]:"isActive"===t?"1"===i[e][t]?"0":"1":n}};o({...r,emailTemplateSettings:a})}(e,r,o,t,n)},h={"--helpgent-email-header-bg":a.value};return(0,r.useEffect)((()=>{i||(o.footer_text.value="Build with ❤️ by wpWax",o.enable_footer.isActive="1",n({...t,emailTemplateSettings:o}))}),[i]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"helpgent-email-template-styles"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)(zl.Switch,{handleToggle:()=>{c("enable_header","isActive")},label:(0,Br.__)("Enable Header","helpgent"),isActive:l.isActive,className:"helpgent-toggle--has-dependent-field"})),"1"===l.isActive&&(0,e.createElement)("div",{className:"helpgent-form-group helpgent-form-group--inline helpgent-mb-40"},(0,e.createElement)("label",{className:"helpgent-field-element__label",htmlFor:"helpgent-email-header-bg"},(0,Br.__)("Header Background Color","helpgent")),(0,e.createElement)(Ts,{id:"helpgent-email-header-bg",textColor:a.value,handler:e=>{c("header_color","value",e.target.value)}})),(0,e.createElement)("div",{className:"helpgent-form-group helpgent-email-template-styles__footer"},(0,e.createElement)(zl.Switch,{handleToggle:()=>{i?c("enable_footer","isActive"):n({...t,isProModalActive:!0})},badgeText:i?null:(0,Br.__)("PRO","helpgent"),label:(0,Br.__)("Enable Footer","helpgent"),isActive:s.isActive,className:"helpgent-toggle--has-dependent-field"})),"1"===s.isActive&&(0,e.createElement)("div",{className:"helpgent-form-group helpgent-mb-0 helpgent-mt-20"},(0,e.createElement)("label",{className:"helpgent-field-element__label",htmlFor:"helpgent-email-footer-enable",onClick:()=>{!i&&n({...t,isProModalActive:!0})}},(0,Br.__)("Footer Text","helpgent"),!i&&(0,e.createElement)(zl.Badge,{type:"success",text:(0,Br.__)("PRO","helpgent"),modifier:"helpgent-badge-round"})),(0,e.createElement)("input",{type:"text",className:"helpgent-form-group__element",id:"helpgent-email-footer-enable",onChange:e=>{i&&c("footer_text","value",e.target.value)},disabled:!i,value:p.value,placeholder:(0,Br.__)("Email Footer Text","helpgent")}))),(0,e.createElement)("span",{className:"helpgent-email-template-preview-message"},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE1IDIwIj4KICA8cGF0aCBpZD0iSWNvbl9hd2Vzb21lLWhhbmQtcG9pbnQtZG93biIgZGF0YS1uYW1lPSJJY29uIGF3ZXNvbWUtaGFuZC1wb2ludC1kb3duIiBkPSJNMy41ODcsMTguMjVWMTIuNDIxYTUuMzA4LDUuMzA4LDAsMCwxLS45NzMuNTUzQTEuODc2LDEuODc2LDAsMCwxLDAsMTEuMjUsMS42NjUsMS42NjUsMCwwLDEsMS4xMzYsOS42ODdjMS4xLS40NzQsMi41MTMtMy4wNzIsMy4wMi00LjJBMS44NzUsMS44NzUsMCwwLDEsNS44Nyw0LjM3NWg2LjdhLjkzNi45MzYsMCwwLDEsLjkyNi43OTJDMTMuNzc5LDcsMTUsNy41NzksMTQuOTkyLDEwYzAsLjEwNi4wMDguNTE4LjAwOC42MjUsMCwxLjk3OS0uODY0LDMuMTg2LTIuNzg0LDIuODM2YTEuNzg5LDEuNzg5LDAsMCwxLTIuNDM0LjY0MywxLjkyMSwxLjkyMSwwLDAsMS0yLjc3MS4yNDZ2My45QTEuNzYxLDEuNzYxLDAsMCwxLDUuMywyMGExLjc5LDEuNzksMCwwLDEtMS43MTItMS43NVpNNC4zNzUsMi44MTJWLjkzOEEuOTM3LjkzNywwLDAsMSw1LjMxMiwwaDcuNWEuOTM3LjkzNywwLDAsMSwuOTM4LjkzOFYyLjgxMmEuOTM3LjkzNywwLDAsMS0uOTM3LjkzOGgtNy41QS45MzcuOTM3LDAsMCwxLDQuMzc1LDIuODEyWm04LjI4MS0uOTM3YS43ODEuNzgxLDAsMSwwLS43ODEuNzgxQS43ODEuNzgxLDAsMCwwLDEyLjY1NiwxLjg3NVoiIGZpbGw9IiNlZjlmMDkiLz4KPC9zdmc+Cg=="}),(0,Br.__)("How your email template will look!","helpgent")),(0,e.createElement)("div",{className:"helpgent-email-template-preview",style:h},(0,e.createElement)("div",{className:"helpgent-email-template-preview__content"},"1"===l.isActive&&(0,e.createElement)("div",{className:"helpgent-email-template-preview__header"},(0,e.createElement)("h2",null,(0,Br.__)("Welcome Message","helpgent"))),(0,e.createElement)("div",{className:"helpgent-email-template-preview__body"},(0,e.createElement)("p",null,"Dear Rana, ",(0,e.createElement)("br",null),(0,e.createElement)("br",null),"Thank You For Sharing Your Concern.",(0,e.createElement)("br",null),(0,e.createElement)("br",null),"We have received your request. A support representative will get back to you within 24 hours.",(0,e.createElement)("br",null),(0,e.createElement)("br",null),"A token has been generated that can be used to access the conversation and it is valid until 30 days from now. You can continue conversation from the link http://admin.local/wp-admin/admin.php?page=vm-settings"," ",(0,e.createElement)("br",null),(0,e.createElement)("br",null),"Thanks, ",(0,e.createElement)("br",null),"The administrator of HelpGent"))),"1"===s.isActive&&(0,e.createElement)("div",{className:"helpgent-email-template-preview__footer"},p.value)))}Fr.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 0;
    margin-bottom: 20px;
    background-color: var(--helpgent-color-white);
    position: sticky;
    top: 32px;
    z-index: 98;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    @media only screen and (max-width: 767px){
        gap: 15px;
    }
    @media only screen and (max-width: 575px){
        flex-wrap: wrap;
        padding: 15px;
    }
    @media only screen and (max-width: 430px){
        justify-content: center;
    }
    .helpgent-single-form-header__back-link{
        position: relative;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        padding: 21px 15px 21px 0;
        margin-right: 8px;
        color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--helpgent-transition);
        &:after{
            position: absolute;
            inset-inline-end: 0;
            top: 0;
            width: 1px;
            height: 100%;
            content: '';
            background-color: var(--helpgent-color-border-light);
        }
        svg {
            position: relative;
            top: -1px;
            path {
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
    .helpgent-single-form-header__right{
        min-width: 282px;
    }
    .helpgent-single-form-header__left{
        display: flex;
        align-items: center;
        flex: 0.34;
        @media only screen and (max-width: 1650px){
            flex: 0.4;
        }
        @media only screen and (max-width: 1500px){
            flex: 0.6;
        }
        @media only screen and (max-width: 575px){
            flex: 0 0 100%;
        }
    }
    .helpgent-single-form-header__logo{
        background: var(--helpgent-color-bg-deep);
        margin-right: 14px;
        a{
            display: block;
            padding: 13px 14px;
        }
    }
    .helpgent-single-form-header__title{
        font-size: 14px;
        display: flex;
        align-items: center;
        color: var(--helpgent-color-gray);
        padding: 10px 15px 10px 10px;
        border-radius: 8px;
        transition: var(--helpgent-transition);
        margin-right: 15px;
        svg{
            margin-inline-end: 10px;
            width: 14px;
            height: 14px;
            flex: none;
            path{
                fill: var(--helpgent-color-light-gray);
            }
            @media only screen and (max-width: 767px){
                display: none;
            }
        }
        .helpgent-form-rename-field{
            background: none;
            border: 0 none;
            outline: 0;
            box-shadow: none;
            padding: 0;
            min-height: auto;
            line-height: normal;
            position: relative;
            top: -1px;
            left: -1px;
            max-width: 168px;
        }
        &.helpgent-single-form-header__title-active{
            background: var(--helpgent-color-bg-light);
        }
        .helpgent-form-rename-field-validate{
            flex: 0 0 100%;
            font-size: 12px;
            position: relative;
            top: 5px;
            color: var(--helpgent-color-danger);
        }
    }

    .helpgent-draft-text{
        margin: 0;
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--helpgent-color-light-gray);
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        min-width: 110px;
        svg{
            margin: 0;
            width: 12px;
            height: 12px;
            flex: none;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }

    .helpgent-single-form-header__middle{
        flex: 0.48;
        display: flex;
        justify-content: center;
        margin-right: auto;
        @media only screen and (max-width: 1500px){
            flex: 0.2;
        }
        @media only screen and (max-width: 430px){
            flex: 0 0 100%;
        }
    }

    .helpgent-single-form-header__tab{
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 0;
        margin: 0;
        list-style: none;
        @media only screen and (max-width: 767px){
            gap: 15px;
        }
        li{
            margin: 0;
            padding: 0;
        }
    }
    .helpgent-single-form-header__tab-link{
        position: relative;
        font-size: 14px;
        font-weight: 400;
        display: inline-block;
        text-decoration: none;
        padding: 21px 0;
        cursor: pointer;
        transition: var(--helpgent-transition);
        color: var(--helpgent-color-gray);
        @media only screen and (max-width: 575px){
            padding: 0 0 10px;
        }
        &:focus{
            outline: none;
            box-shadow: 0 0;
        }
        &:after{
            position: absolute;
            inset-inline-start: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            border-radius: 10px;
            content: '';
            opacity: 0;
            visibility: visible;
            transition: var(--helpgent-transition);
            background-color: var(--helpgent-color-primary);
        }
        &:hover,
        &.helpgent-active{
            color:  var(--helpgent-color-primary);
            &:after{
                opacity: 1;
                visibility: visible;
            }
        }
        &.helpgent-active{
            font-weight: 600;
        }
    }
    .helpgent-form-undo-redo-actions{
        display: flex;
        align-items: center;
        gap: 2px;
        margin-right: 3px;
        span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            transition: var(--helpgent-transition);
            pointer-events: none;
            svg{
                width: 14px;
                height: 13px;
                path{
                    fill: var(--helpgent-color-extra-light);
                    transition: var(--helpgent-transition);
                }
            }
            &.helpgent-form-undo-active,
            &.helpgent-form-redo-active{
                pointer-events: all;
                cursor: pointer;
                svg path{
                    fill: var(--helpgent-color-gray);
                }
                &:hover{
                    background: var(--helpgent-color-bg-gray);
                }
            }
        }
    }
    .helpgent-single-form-more-action{
        .helpgent-single-form-action-dropdown{
            .helpgent-dropdown-icon{
                line-height: 0;
            }
            .helpgent-dropdown__toggle{
                width: 36px;
                height: 36px;
                border-radius: 8px;
                transition: var(--helpgent-transition);
                align-items: center;
                justify-content: center;
                position: relative;
                &:hover{
                    background: var(--helpgent-color-border-light);
                }
                &::before{
                    content: attr(data-tooltip);
                    position: absolute;
                    right: 0;
                    top: calc(100% + 4px);
                    width: 250px;
                    padding: 9px 10px;
                    background: var(--helpgent-color-dark);
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #fff;
                    display: none;
                    align-items: center;
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
                        display: flex;
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
                    background: var(--helpgent-color-border-light);
                }
            }
            .helpgent-dropdown__content{
                min-width: 240px;
                padding: 13px;
                li:last-child{
                    border-top: 1px solid var(--helpgent-color-bg-gray);
                    padding-top: 5px;
                }
            }
            .helpgent-single-form-action-fullscreen{
                padding: 11px;
                transition: var(--helpgent-transition);
                cursor: pointer;
                border-radius: 8px;
                &:hover{
                    background: var(--helpgent-color-bg-general);
                }
                .helpgent-toggle{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .helpgent-toggle__label{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-dark);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex: 1;
                    svg{
                        width: 14px;
                        height: 14px;
                        path{
                            fill: var(--helpgent-color-text);
                        }
                    }
                }
            }
        }
    }
    .helpgent-single-form-header__action{
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-end;
        .helpgent-btn{
            svg{
                margin:0 8px 0 0;
            }
        }

        .helpgent-btn{
            height: 36px;
            min-height: 36px;
            padding: 0 20px;
        }
        .helpgent-btn-icon{
            padding-left: 10px;
            padding-right: 10px;
            font-weight: 500;
            font-size: 13px;
            svg{
                margin: 0;
            }
        }
    }
    .helpgent-single-form-header__action--compact{
        .helpgent-single-form-header__action-dropdown{
            order: 1;
        }
    }
    .helpgent-single-form-header__action-dropdown{
        position: relative;
        .helpgent-header-action-more{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--helpgent-color-bg-light);
        }
        .helpgent-header-action-items{
            position: absolute;
            right: 0;
            top: 40px;
            background: #fff;
            padding: 15px 20px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            border-radius: 8px;
            min-width: 160px;
            box-sizing: border-box;
            .helpgent-btn{
                background: none;
                padding: 0;
                border: 0 none;
                height: auto;
                max-height: none;
                min-height: auto;
                color: var(--helpgent-color-gray);
                font-size: 14px;
                font-weight: 500;
                line-height: normal;
                svg path{
                    fill: var(--helpgent-color-light-gray);
                }
            }
            .helpgent-btn-preview,
            .helpgent-header-action-item__share{
                margin-top: 12px;
                background: none !important;
            }
            .helpgent-header-action-item__share{
                .helpgent-btn{
                    background: none;
                }
                .helpgent-share-popup{
                    top: 30px;
                    right: -40px;
                }
            }
        }
    }
`,Fr.div`

`,Fr.div`
    position: relative;
    width: 280px;
    border-radius: 14px;
    background-color: var(--helpgent-color-white);
    transition: width .3s ease;
    height: calc(100vh - 150px);
    @media screen and (min-width: 1199px) and (max-width: 1367px) {
        width: 235px;
    }

    &.helpgent-screenBar--collapsed{
        width: 56px;
        border-radius: 10px;
        .helpgent-screenBar-header{
            padding: 7px 10px;
        }
        .helpgent-screenBar-header__add,
        .helpgent-screenBar-end-head__add{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(101,81,242,0.1);
            svg{
                width: 12px;
                height: 12px;
                path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-screenBar-content__welcome,
        .helpgent-screenBar-content__other{
            padding: 5px 10px;
        }
        .helpgent-screenBar-content__end{
            padding: 15px 10px;
            .helpgent-end-screen-list{
                padding-right: 0;
                margin-right: -10px;
            }
        }
        .helpgent-screen__item--collapsed{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border: 1px solid transparent;
            &:not(.helpgent-active){
                background: none;
                border: 1px solid var(--helpgent-color-bg-gray);
            }
            &:hover{
                background: var(--helpgent-color-bg-gray);
                .helpgent-screen__icon svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
            .helpgent-screen__inner{
                box-sizing: border-box;
                padding: 0;
                height: inherit;
                .helpgent-screen__content{
                    justify-content: center;
                    height: inherit;
                    position: relative;
                    &::before{
                        content: attr(data-title);
                        min-width: 100px;
                        max-width: 200px;
                        background: #000000;
                        border-radius: 6px;
                        padding: 7px 10px;
                        left: calc(var(--helpgent-sidebar-elm-position-right) + 10px);
                        top: calc(var(--helpgent-sidebar-elm-position-top) + 2px);
                        position: fixed;
                        transform: translateY(-50%);
                        z-index: 999;
                        visibility: hidden;
                        opacity: 0;
                        font-size: 13px;
                        font-weight: 500;
                        color: #fff;
                    }
                    &::after{
                        content: '';
                        position: fixed;
                        top: calc(var(--helpgent-sidebar-elm-position-top) - 5px);
                        left: calc(var(--helpgent-sidebar-elm-position-right) + 3px);
                        border-top: 7px solid transparent;
                        border-bottom: 7px solid transparent;
                        border-right: 8px solid #000000;
                        z-index: 999;
                        visibility: hidden;
                        opacity: 0;
                    }
                    .helpgent-screen__icon{
                        flex: none;
                        width: auto;
                        height: auto;
                        margin: 0;
                        background: none !important;
                    }
                    &:hover{
                        &::before,
                        &::after{
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                .helpgent-screen__title{
                    display: none;
                }
            }
        }
    }

    .helpgent-screenBar-header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        transition: var(--helpgent-transition);
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 15px 15px;
        }
    }
    .helpgent-screenBar-header__title{
        font-size: 15px;
        margin: 0;
        color: var(--helpgent-color-dark);
        font-weight: 500;
    }
    .helpgent-screenBar-header__add{
        position: relative;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        color: var(--helpgent-color-primary);
        display: flex;
        align-items: center;
        gap: 6px;
        &:focus{
            outline: none;
            box-shadow: 0 0;
        }
        svg{
            margin: 0;
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-screenBar-content{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: calc( 100vh - 200px );
        padding-top: 15px;
        transition: var(--helpgent-transition);
        .helpgent-screen__icon{
            width: 36px;
            height: 36px;
            flex: 0 0 36px;
            svg{
                path,
                circle{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
    }
    .helpgent-sortable-item{
        margin-bottom: 10px;
    }
    .helpgent-sortable-screen{
        &.helpgent-disabled{
            pointer-events: none;
            opacity: .65;
            cursor: not-allowed;
            user-select: none;
        }
    }
    .helpgent-screenBar-content__welcome{
        padding: 5px 20px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 5px 15px;
        }
        .helpgent-screen__item.helpgent-screen__disabled{
            pointer-events: none;
            opacity: .65;
            cursor: not-allowed;
            user-select: none;
        }
    }
    .helpgent-screenBar-welcome-screens{
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        padding-bottom: 15px;
        &:empty{
            display: none;
        }
    }
    .helpgent-screenBar-content__other{
        flex: 1 1 0%;
        padding: 0 20px 20px;
        overflow-y: auto;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 0 15px 20px;
        }
        .helpgent-screen__title-text{
            flex: 0 0 138px;
        }
        &::-webkit-scrollbar-track {
            background: #fff;
        }
    }
    .helpgent-screenBar-welcome-screens:not(:empty) + .helpgent-screenBar-content__other{
        padding-top: 20px;
    }
    .helpgent-screenBar-content__end{
        display: flex;
        flex-direction: column;
        padding: 0 20px 20px;
        border-top: 1px solid var(--helpgent-color-bg-gray);
        user-select: none;
        max-height: 250px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 0 15px 20px;
        }
        .helpgent-end-screen-list{
            overflow-y: auto;
            padding-right: 20px;
            margin-right: -20px;
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                padding-right: 15px;
                margin-right: -15px;
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
        }
        .helpgent-screen__title{
            .helpgent-screen__title-text{
                flex: 0 0 124px;
            }
        }

    }
    .helpgent-ending-draggable{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        cursor: grab;
        .helpgent-ending-draggable__pipe{
            width: 50px;
            height: 4px;
            border-radius: 20px;
            background-color: var(--helpgent-color-light-gray);
        }
    }
    .helpgent-screenBar-end-head{
        display: flex;
        justify-content: space-between;
        margin: 10px 0 20px;
    }
    .helpgent-screenBar-end-head__title{
        font-size: 15px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-screenBar-end-head__add{
        font-size: 13px;
        text-decoration: none;
        color: var(--helpgent-color-light-gray);
        cursor: pointer;
        transition: var(--helpgent-transition);
        &:hover{
            color: var(--helpgent-color-primary);
        }
    }
    .helpgent-sidebar-collapse{
        position: absolute;
        inset-inline-start: calc(100% + 20px);
        top: 0;
        background: var(--helpgent-color-bg-deep) !important;
        border-radius: 6px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0 none;
        cursor: pointer;
        svg{
            width: 14px;
            height: 12px;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }
`,Fr.div`
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width: 1399px){
        padding-bottom: 30px;
    }
`,Fr.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
    background-color: var(--helpgent-color-bg-light);
    &:hover{
        background-color: var(--helpgent-color-gray);
        .helpgent-screen__title .helpgent-screen__counter-end{
            background: #fff;
        }
        .helpgent-screen__title .helpgent-screen__counter-end,
        .helpgent-screen__title .helpgent-screen__counter{
            background: rgba(255,255,255,0.2);
            color: #fff;
        }
        .helpgent-screen__title{
            color: var( --helpgent-color-white );
        }
        .helpgent-screen__title .helpgent-screen__title-text{
            color: #fff;
        }
        .helpgent-screen__icon{
            background: rgba(255,255,255,0.2);
            svg{
                path,
                circle{
                    fill: var(--helpgent-color-white);
                }
            }
        }
    }
    &:not(:last-child){
        margin-bottom: 10px;
    }
    &.helpgent-screen__disabled{
        cursor: not-allowed;
    }
    &.helpgent-active{
        background-color: var(--helpgent-color-gray);
        .helpgent-screen__title{
            color: var( --helpgent-color-white );
        }
        .helpgent-screen__icon{
            svg{
                path,
                circle{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        .helpgent-screen__title .helpgent-screen__counter-end,
        .helpgent-screen__title .helpgent-screen__counter{
            background: rgba(255,255,255,0.2);
            color: #fff;
        }
        .helpgent-screen__title .helpgent-screen__title-text{
            color: #fff;
        }
        .helpgent-screen__icon{
            background: rgba(255,255,255,0.2);
        }
    }
    .helpgent-screen__inner{
        width: 100%;
        padding: 6px;
    }
    .helpgent-screen-dropdown{
        position: absolute;
        inset-inline-end: 0;
        .helpgent-dropdown__toggle{
            padding: 5px 15px;
        }
        .helpgent-dropdown__content{
            right: 0;
        }
    }
    .helpgent-screen__content{
        display: flex;
        align-items: center;
    }
    .helpgent-screen__icon{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-inline-end: 8px;
        background-color: var(--helpgent-color-white);
        transition: var(--helpgent-transition);
        svg{
            path,
            circle{
                fill: var(--helpgent-color-light-gray);
                transition: var(--helpgent-transition);
            }
        }
    }
    .helpgent-screen__title{
        position: relative;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.25;
        margin: 0;
        color: var(--helpgent-color-gray);
        word-break: break-word;
        padding-inline-end: 25px;
        flex: 1;
        .helpgent-screen__title-text{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            flex: 0 0 125px;
            word-break: break-word;
            overflow: hidden;
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-gray);
            line-height: 1.2;
            transition: var(--helpgent-transition);
            font-family: var(--helpgent-font-family);
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                flex: 0 0 95px;
            }
        }
        .helpgent-badge{
            display: inline-block;
            margin-inline-start: 11px;
            line-height: 1.8;
            padding: 0 5px;
            flex: none;
        }
        .helpgent-screen__counter{
            margin-inline-end: 9px;
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            background: var(--helpgent-color-bg-deep);
            font-size: 13px;
            font-weight: 500;
            text-transform: uppercase;
            color: var(--helpgent-color-black);
            transition: var(--helpgent-transition);
        }
        .helpgent-screen__counter-end{
            margin-right: 9px;
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            background: var(--helpgent-color-bg-deep);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--helpgent-color-black);
            transition: var(--helpgent-transition);
        }
        P,
        strong{
            margin: 0;
            font-size: inherit;
            line-height: inherit;
        }
    }
    .helpgent-dropdown{
        line-height: 1;
    }
    .helpgent-dropdown__content{
        width: 200px;
        margin: 0;
        top: 40px;
        inset-inline-end: -6px;
        box-sizing: border-box;
        li{
            margin: 0;
        }
        a{
            font-size: 14px;
            &:hover{
                background-color: var(--helpgent-color-bg-gray);
            }
        }
    }
    .helpgent-dropdown__toggle{
        padding: 2px 0;
    }
`,Fr.div`
    position: fixed;
    width: 45vw;
    border-radius: 14px;
    cursor: auto;
    box-shadow: 0 5px 30px rgba(0,0,0,.10);
    z-index: 99999;
    background-color: var(--helpgent-color-white);
    top: var(--helpgent-dropdown-top);
    right: var(--helpgent-dropdown-right);
    @media only screen and (max-width: 1199px){
        width: 60vw;
    }
    @media only screen and (max-width: 991px){
        width: 70vw;
    }
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background: #fff;
        left: 0;
        bottom: 0;
        border-radius: 0 0 14px 14px;
        z-index: 1;
    }
    .helpgent-mega-dropdown__title{
        font-size: 16px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
        margin: 0 0 20px;
    }
    .helpgent-screen-type__title{
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-mega-dropdown__search{
        position: relative;
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        .helpgent-mega-dropdown__search-icon{
            position: absolute;
            inset-inline-start: 20px;
            top: 50%;
            transform: translateY(-50%);
        }
        input{
            width: 100%;
            font-size: 14px;
            padding-inline-start: 45px;
            padding-inline-end: 30px;
            min-height: 50px;
            border-radius: 14px 14px 0 0;
            border: 0 none;
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    .helpgent-screen-type-wrap{
        display: grid;
        grid-gap: 25px;
        grid-template-columns: 1fr 1fr 1fr;
        @media only screen and (max-width: 767px){
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 575px){
            grid-template-columns: 1fr;
        }
    }
    .helpgent-screen-type{
        font-size: clamp(14px, 4vw, 15px);
        &:not(:last-child){
            margin-bottom: 50px;
            @media only screen and (max-width: 1399px){
                margin-bottom: 30px;
            }
        }
    }
    .helpgent-mega-dropdown__content{
        padding: 20px 30px 40px;
        min-height: 300px;
        box-sizing: border-box;
        @media only screen and (max-width: 1450px){
            max-height: 400px;
        }
        .helpgent-screen__title{56
            padding-inline-end: 0;
        }
        .helpgent-screen__title-text{
            flex: unset;
        }
    }
    .helpgent-screen-type-column{
        &:empty{
            display: none;
        }
    }
    .helpgent-screen__counter-end{
        display: none !important;
    }
`,Fr.div`
    flex: 1 1 0%;
    padding: 0 30px;
    text-align: center;
    display:flex;
    flex-direction: column;
    transform-origin: top center;
    transition: var(--helpgent-transition);
    height: calc(100vh - 150px);
    @media screen and (min-width: 1199px) and (max-width: 1367px) {
        padding: 0 20px;
    }

    .helpgent-preview-container{
        &:hover{
            .helpgent-media-action{
                visibility: visible;
                opacity: 1;
            }
        }
    }

    &.helpgent-preview-style{
        .helpgent-element-textField{
            padding-left: 40px;
            padding-right: 40px;
            textarea.helpgent-form-group__element{
                min-height: 80px;
            }
        }
        .helpgent-preview-media-overlay .helpgent-element-element{
            padding-left: 40px;
            padding-right: 40px;
        }
        .helpgent-form-bottom-extras {
            @media only screen and (max-width: 768px){
                position: absolute;
            }
            @media only screen and (max-width: 575px){
                padding: 0;
            }
            .helpgent-form__step-count{
                @media only screen and (max-width: 575px){
                    margin: 10px 20px;
                }
            }
        }
    }
    &.helpgent-preview-style--tablet{
        > *{
            width: 650px;
            @media only screen and (max-width: 1399px){
                width: 450px;
            }
            @media only screen and (max-width: 575px){
                width: 100%;
            }
        }
        .helpgent-element-element{
            padding: 15px 0 calc(var(--helpgent-bottom-extras-height) + 25px);
        }
        .helpgent-element-element.helpgent-element-element--open-ended{
            height: auto;
        }
    }

    &.helpgent-preview-style--mobile{
        > *{
            width: 350px;
            @media only screen and (max-width: 400px){
                width: 100%;
            }
        }
        .helpgent-element-element{
            &.helpgent-element-element--open-ended{
                padding: 25px 0 100px 0 !important;
                height: auto;
                @media only screen and (max-width: 575px){
                    justify-content: space-between;
                    .helpgent-element-element__action{
                        margin-top: unset;
                        margin-bottom: 30px;
                    }
                }
                .helpgent-element-element__text{
                    margin-bottom: 25px;
                }
            }
        }
        .helpgent-preview-media-left,
        .helpgent-preview-media-right{
            .helpgent-element-element{
                &.helpgent-element-element--open-ended{
                    padding: 25px 0 115px 0;
                }
            }
        }
        .helpgent-preview-media-overlay,
        .helpgent-preview-no-media,
        .helpgent-preview-open-ended-default{
            .helpgent-element-element{
                &.helpgent-element-element--open-ended{
                    justify-content: space-between;
                    .helpgent-element-element__action{
                        margin-top: unset;
                        margin-bottom: unset;
                    }
                }
            }
            .helpgent-form__copyright--media{
                justify-content: center;
            }
        }
        .helpgent-open-ended-element-types {
            flex-wrap: nowrap;
            .helpgent-open-ended-btn{
                min-width: 60px;
                min-height: 60px;
                svg{
                    width: 18px;
                    height: 18px;
                }
            }
        }
        .helpgent-preview-media-overlay{
            .helpgent-element-element__text,
            .helpgent-element-element__action{
                padding: 0 15px;
            }
        }
        .helpgent-preview-media-overlay .helpgent-element-element-wrapper--multi_select,
        .helpgent-preview-media-overlay .helpgent-element-element-wrapper--single_select{
            .helpgent-element-element__action{
                padding: 0 30px;
            }
        }
        .helpgent-promoter-score__single{
            width: 20px;
            height: 20px;
            font-size: 11px;
        }
        .helpgent-preview-media-overlay .helpgent-promoter-score__single{
            width: 24px;
            height: 24px;
            font-size: 12px;
        }
        .helpgent-element-element__text,
        .helpgent-element-element__action{
            padding: 0 25px;
        }
        .helpgent-preview-container:not(.helpgent-preview-open-ended-default){
            .helpgent-open-ended-element-types {
                grid-template-columns: repeat(auto-fill, minmax(66px, 66px));
                grid-auto-flow: column;
                .helpgent-open-ended-btn{
                    min-width: 65px;
                    min-height: 65px;
                }
            }
        }
    }

    &.helpgent-preview-style--tablet,
    &.helpgent-preview-style--mobile{
        align-items: center;
        > *{
            box-sizing: border-box;
        }
        .helpgent-preview-container{
            flex-flow: column;
        }
        .helpgent-preview-top{
            margin-bottom: 15px;
        }
        .helpgent-element-element{
            padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 25px) 0;
        }
        .helpgent-element-element-wrapper--welcome{
            .helpgent-element-element{
                padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 32px) 0;
            }
        }
        .helpgent-btn.helpgent-btn-sm {
            min-height: 30px;
            padding-inline-start: 10px;
            padding-inline-end: 10px;
        }
        .helpgent-media-empty,
        .helpgent-media-src__video video,
        .helpgent-media-src__image img{
            border-radius: 20px 20px 0 0;
        }
        .helpgent-preview-media-overlay,
        .helpgent-preview-open-ended-default{
            .helpgent-element-element{
                padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 25px) 0;
            }
        }
        .helpgent-form-bottom-extras{
            padding: 0;
            width: 100%;
            right: 0;
            bottom: 0;
            margin: 0;
            border-radius: 0 0 20px 20px;
            justify-content: flex-start;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.08);
            flex-wrap: wrap;
            z-index: 10;
            .helpgent-form__step-count{
                margin: 10px 20px;
            }
            .helpgent-navigation{
                margin-right: 20px;
            }
            .helpgent-form__copyright{
                flex: 0 0 100%;
                a{
                    border-radius: 0 0 20px 20px;
                }
            }
        }
    }

    .helpgent-preview-top{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 30px;
        svg{
            margin-inline-end: 10px;
        }
    }
    .helpgent-preview-top__text{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-preview-top__text);
    }
    .helpgent-promoter-score__list .helpgent-promoter-score__single{
        width: 28px;
        height: 28px;
    }
    .helpgent-promoter-score__list.helpgent-promoter-score__list--sm .helpgent-promoter-score__single{
        width: 21px;
        height: 21px;
        font-size: 11px;
        @media only screen and (max-width: 1567px) and (min-width: 1500px){
            width: 17px;
            height: 17px;
            font-size: 10px;
        }
        @media only screen and (max-width: 1500px) and (min-width: 1367px){
            width: 12px;
            height: 12px;
            font-size: 8px;
        }
    }
`,Fr.div`
    position: relative;
    width: 340px;
    border-radius: 14px;
    background-color: var(--helpgent-color-white);
    height: calc(100vh - 150px);
    overflow: hidden;
    @media only screen and (max-width: 1367px){
        width: 290px;
    }
    &.helpgent-email-settings-sidebar{
        position: sticky;
        top: 116px;
        .helpgent-screen-setting-wrap .helpgent-toggle__label{
            flex: 1;
            padding-right: 10px;
        }
    }
    .helpgent-screen-setting-header{
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
    }
    .helpgent-screen-setting-content{
        height: calc(100% - 80px);
        box-sizing: border-box;
        overflow: auto;
        &--global{
            height: calc(100% - 114px);
            .helpgent-screen-setting-block{
                .helpgent-field-element--inline .helpgent-field-element__label{
                    width: 150px;
                    @media screen and (min-width: 1199px) and (max-width: 1367px) {
                        width: 130px;
                    }
                }
            }
        }
    }
    .helpgent-btn-save-settings{
        border-radius: 0;
        min-height: 54px;
        &:hover{
            border-color: #3e2db6;
            background: #3e2db6;
            color: #fff;
        }
    }
    .helpgent-screen-setting-element__label{
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 8px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-verification-group{
        margin: 0 0 30px;
        .helpgent-field-element__label{
            margin-bottom: 15px;
            overflow: unset !important;
        }
    }
    .helpgent-field-element__label{
        .helpgent-tooltip-toggle{
            position: relative;
            top: 2px;
            margin-left: 10px;
        }
    }
    .helpgent-screen-setting-element__content{
        position: relative;
        .helpgent-mega-dropdown{
            //inset-inline-start: auto;
            //inset-inline-end: 0;
        }
        .helpgent-mega-dropdown__content{
            height: min(80vh, 520px);
            overflow-y: auto;
        }
    }
    .helpgent-screen-setting-list{
        display: flex;
        align-items: center;
        gap: 0 30px;
        padding: 10px 25px 0 25px;
        margin: 0;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 10px 15px 0 15px;
        }
        @media only screen and (max-width: 400px){
            padding: 0 15px 0 15px;
        }
        li{
            padding: 15px 0;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            color: var(--helpgent-color-gray);
            margin: 0;
            border-bottom: 2px solid transparent;
            transition: var(--helpgent-transition);
            &.helpgent-active{
                border-color: var(--helpgent-color-primary);
                color: var(--helpgent-color-primary);
                font-weight: 600;
            }
            &:hover{
                color: var(--helpgent-color-primary);
            }
        }
    }

    .helpgent-screen-setting-block{
        padding: 25px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 15px;
        }
        @media only screen and (max-width: 400px){
            padding: 15px;
        }
        &:not(:last-child){
            border-bottom: 1px solid var(--helpgent-color-bg-gray);
        }
        .helpgent-screen-setting-block{
            padding: 25px 0 0 0;
            margin: 25px 0 0 0;
            border-top: 1px solid var(--helpgent-color-bg-gray);
            .helpgent-field-element__label{
                width: 150px;
            }
        }
        .helpgent-button-text-block{
            h3{
                font-size: 15px;
                margin: 0 0 15px;
            }
            .helpgent-field-element__label{
                width: 170px;
            }
            .helpgent-form-group{
                margin-bottom: 15px;
            }
        }
        .helpgent-form-group__text-selection{
            margin-left: -3px;
            border-radius: 0 6px 6px 0;
            border: 2px solid var(--helpgent-color-bg-deep);
            .helpgent-select__control{
                border-radius: 0;
                min-height: 36px;
                min-width: 58px;
                padding: 4px 8px 6px 8px;
                background-color: var(--helpgent-color-bg-deep);
                &.helpgent-select__control--is-focused{
                    border-radius: 0 6px 6px 0;
                }
            }
            .helpgent-select__value-container{
                padding: 0;
                   .helpgent-quotation-toggle{
            .helpgent-toggle{
                margin-bottom: 0;
            }
        }
 }
            .helpgent-select__indicator{
                padding-inline-end: 0;
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
            .helpgent-select__option{
                padding: 8px 6px;
            }
        }
        .helpgent-field-element{
            position: relative;
            &:last-child{
                .helpgent-field-element__content--inline:not(.helpgent-field-element__content--yesNo){
                    margin-bottom: 0;
                }
            }
            &.helpgent-field-element-gdpr-label{
                textarea.helpgent-form-group__element{
                    min-height: 70px;
                }
            }
            .helpgent-field-element__content--yesNo{
                margin-bottom: 10px;
            }
            .helpgent-bubble-bg-types{
                position: absolute;
                right: 0;
                top: 48px;
                width: 290px;
                height auto;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 5px 30px rgba(0,0,0,0.15);
                z-index: 999;
                &__list{
                    border-bottom: 1px solid var(--helpgent-color-border-light);
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px 20px;
                    span{
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        color: var(--helpgent-color-light-gray);
                        transition: var(--helpgent-transition);
                        border-bottom: 2px solid transparent;
                        padding: 19px 0 15px;
                        cursor: pointer;
                        font-size: 13px;
                        font-weight: 500;
                        svg{
                            width: 14px;
                            height: 14px;
                            path{
                                fill: var(--helpgent-color-light-gray);
                                transition: var(--helpgent-transition);
                            }
                        }
                        &.helpgent-active{
                            color: var(--helpgent-color-dark);
                            border-color: var(--helpgent-color-dark);
                            svg path{
                                fill: var(--helpgent-color-dark);
                            }
                        }
                    }
                }
                &__content{
                    padding: 16px 20px 20px;
                    max-height: 270px;
                    overflow: auto;
                    .helpgent-element-single{
                        border-radius: 8px;
                        background: var(--helpgent-color-bg-light);
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        padding: 5px;
                        cursor: pointer;
                        &:not(:last-child){
                            margin-bottom: 8px;
                        }
                        &__icon{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex: none;
                            svg{
                                width: 14px;
                                height: 14px;
                                path{
                                    fill: var(--helpgent-color-light-gray);
                                }
                            }
                        }
                        &__label{
                            color: var(--helpgent-color-light-gray);
                            font-size: 14px;
                            font-weight: 400;
                            p{
                                margin: 0;
                                font-size: inherit;
                                line-height: inherit;
                            }
                        }
                        &__selected{
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            margin-left: auto;
                            background: var(--helpgent-color-primary);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg{
                                width: 9px;
                                height: 9px;
                            }
                        }
                    }
                    .helpgent-element-single--active{
                        .helpgent-element-single__icon{
                            svg path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                        .helpgent-element-single__label{
                            font-weight: 500;
                            color: var(--helpgent-color-dark);
                        }
                    }
                    .helpgent-bubble-color-picker{
                        .components-color-picker{
                            width: 100%;
                            .react-colorful{
                                width: 100%;
                                .react-colorful__hue,
                                .react-colorful__alpha{
                                    width: 97%;
                                }
                            }
                            .components-input-control__container{
                                width: 100%;
                                border-radius: 8px;
                                .components-input-control__backdrop{
                                    border: 1px solid var(--helpgent-color-border-light);
                                }
                            }
                            .components-range-control__thumb-wrapper span,
                            .components-range-control__track{
                                background: var(--helpgent-color-primary);
                            }

                        }
                    }
                }
            }
            &__right{
                &.helpgent-active{
                    .helpgent-bubble-bg-types{
                        display: block;
                    }
                }
            }
            .helpgent-bubble-shapes{
                display: flex;
                align-items: center;
                gap: 20px;
                margin: 0;
                padding: 0;
                .helpgent-bubble-shape{
                    padding: 0;
                    margin: 0;
                    background: var(--helpgent-color-bg-deep);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    cursor: pointer;
                    span{
                        position: absolute;
                        right: 4px;
                        bottom: 4px;
                        background: #fff;
                        display: block;
                        pointer-events: none;
                    }
                    &--circle{
                        span{
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                        }
                    }
                    &--boxed-horizontal{
                        span{
                            width: 22px;
                            height: 16px;
                            border-radius: 4px;
                        }
                    }
                    &--boxed-vertical{
                        span{
                            width: 16px;
                            height: 22px;
                            border-radius: 4px;
                        }
                    }
                    &.helpgent-active{
                        background: var(--helpgent-color-primary);
                    }
                }
            }
            .helpgent-bubble-border{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
                li{
                    margin: 0;
                }
                &__color{
                    .helpgent-color-picker__text{
                        display: none;
                    }
                }
                &__visibility{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 4px rgba(0,0,0,0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    svg{
                        width: 14px;
                        height: 14px;
                    }
                    span{
                        line-height: 0;
                    }
                }
            }
            .helpgent-bubble-position{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
                li{
                    padding: 0;
                    margin: 0;
                    background: var(--helpgent-color-bg-deep);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    cursor: pointer;
                    span{
                        position: absolute;
                        bottom: 4px;
                        background: #fff;
                        display: block;
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        pointer-events: none;
                    }
                    &.helpgent-active{
                        background: var(--helpgent-color-primary);
                    }
                }
                .helpgent-bubble-position__left{
                    span{
                        left: 4px;
                    }
                }
                .helpgent-bubble-position__right{
                    span{
                        right: 4px;
                    }
                }
            }
            .helpgent-picture-single{
                width: 246px;
                height: 150px;
                margin-top: 10px;
                margin-left: 9px;
                position: relative;
                @media screen and (min-width: 1199px) and (max-width: 1367px) {
                    width: 210px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }
                .helpgent-picture-select-action{
                    position: absolute;
                    left: 50%;
                    bottom: 10px;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    &--upload{
                        width: calc(100% - 4px);
                        height: calc(100% - 4px);
                        left: 0;
                        top: 0;
                        transform: none;
                        z-index: 1;
                        border: 2px dashed var(--helpgent-color-extra-light);
                        border-radius: 12px;
                        button{
                            svg{
                                width: 16px;
                            }
                        }
                    }
                    .helpgent-btn-hover-danger{
                        width: 34px;
                        height: 34px;
                        padding: 0;
                        justify-content: center;
                    }
                }
            }
            .helpgent-btn-add-picture-field{
                margin-left: 9px;
                width: 246px;
                justify-content: center;
                font-size: 13px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
                @media screen and (min-width: 1199px) and (max-width: 1367px) {
                    width: 210px;
                }
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
            .helpgent-btn-email-template{
                width: 48px;
                max-width: 48px;
                background: var(--helpgent-color-bg-light);
                padding-left: 0;
                padding-right: 0;
                justify-content: center;
                margin-left: auto;
                flex: none;
                border-color: var(--helpgent-color-bg-light);
            }
        }

        textarea.helpgent-form-group__element{
            resize: none;
            min-height: 100px;
        }

        .helpgent-field-element--wrap{
            flex-wrap: wrap;
            .helpgent-field-element__right{
                width: auto;
            }
            .helpgent-selected-screen{
                flex: 0 0 100%;
                display: flex;
                align-items: center;
                margin-top: 20px;
                gap: 10px;
                .helpgent-element-single{
                    &__icon{
                        width: 30px;
                        height: 30px;
                        background: var(--helpgent-color-bg-gray);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: none;
                        svg{
                            width: 14px;
                            height: 14px;
                        }
                        video,
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                    &__label{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                        max-width: 205px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &__remove{
                        width: 30px;
                        height: 30px;
                        background: var(--helpgent-color-bg-light);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: none;
                        border-radius: 6px;
                        margin-left: auto;
                        cursor: pointer;
                        transition: var(--helpgent-transition);
                        svg{
                            path{
                                transition: var(--helpgent-transition);
                            }
                        }
                        &:hover{
                            background: var(--helpgent-color-danger);
                            svg{
                                path{
                                    fill: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        .helpgent-field-element__right{
            width: 128px;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
        }
        .helpgent-input-description{
            margin-top: 6px;
        }
        .helpgent-field-element--inline .helpgent-field-element__label{
            font-size: 14px;
            font-weight: 500;
            word-wrap: break-word;
            word-break: break-word;
            white-space: nowrap;
            width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            gap: 5px;
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                width: 110px;
            }
            .helpgent-tooltip-toggle{
                line-height: 1;
            }
        }
        .helpgent-date-format{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            &__btn{
                font-size: 13px;
                font-weight: 500;
                height: 36px;
                min-height: 36px;
                padding: 0 16px;
                transition: var(--helpgent-transition);
                &.helpgent-btn-active,
                &:hover{
                    background: var(--helpgent-color-primary) !important;
                    border-color: var(--helpgent-color-primary);
                    color: #fff !important;
                }
            }
        }
        .helpgent-date-separator{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 0;
            &__btn{
                font-size: 13px;
                font-weight: 500;
                height: 36px;
                min-height: 36px;
                width: 36px;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--helpgent-transition);
                &.helpgent-btn-active,
                &:hover{
                    background: var(--helpgent-color-primary) !important;
                    border-color: var(--helpgent-color-primary);
                    color: #fff !important;
                }
            }
        }
        .helpgent-field-element__top{
            &--inline{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 10px;
                .helpgent-field-element__label{
                    padding-left: 9px;
                }
            }
            &__action{
                display: flex;
                align-items: center;
                gap: 0 10px;
                svg{
                    width: 15px;
                    height: 15px;
                    path{
                        fill: var(--helpgent-color-light-gray);
                    }
                }
                .helpgent-field-required--disabled{
                    pointer-events: none;
                    svg{
                        path{
                            fill: var(--helpgent-color-extra-light);
                        }
                    }
                }
            }
            .helpgent-field-element__label-inner{
                font-size: 12px;
                font-weight: 500;
                display: inline-block;
                margin-bottom: 5px;
                color: var(--helpgent-color-light-gray);
                span{
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 16px;
                    height: 16px;
                    background-color:var(--helpgent-color-bg-gray);
                }
            }
        }
        .helpgent-field-element__content{
            &--inline{
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 30px;
                margin-inline-start: -10px;
                .helpgent-form-group{
                    margin-bottom: 0;
                    flex: 1;
                }
            }
            .helpgent-select{
                .helpgent-select__placeholder{
                    font-size: 14px;
                }
                .helpgent-select__control{
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
            }
            .helpgent-author-location-input{
                position: relative;
                width: 100%;
                .helpgent-form-group__element{
                    padding-right: 30px;
                }
                .helpgent-input-icon-close{
                    position: absolute;
                    right: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    svg{
                        width: 10px;
                        height: 10px;
                        fill: var(--helpgent-color-light-gray);
                    }
                }
            }
            .helpgent-map-autocomplete-dropdown{

            }
        }
        .helpgent-add-option{
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--helpgent-color-light-gray);
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--helpgent-transition);
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--helpgent-color-bg-light);
                width: 20px;
                height: 20px;
                svg{
                    width: 8px;
                    height: 8px;
                    path{
                        transition: var(--helpgent-transition);
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
            &:focus{
                outline: 0;
                border: 0 none;
                box-shadow: none;
            }
            &:hover{
                color: var(--helpgent-color-primary);
                svg path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-add-social{
            &__btn,
            .helpgent-social-submit{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0 6px;
                color: var(--helpgent-color-gray);
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
            &__form{
                margin-top: 40px;
            }
            &__fields{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                .helpgent-select{
                    margin-bottom: 8px;
                    &__control{
                        border-radius: 8px;
                        background: var(--helpgent-color-bg-light);
                        height: 40px;
                        padding-top: 6px;
                    }
                    &__single-value{
                        span{
                            font-weight: 500;
                        }
                        svg{
                            margin-inline-end: 10px;
                            width: 16px;
                            height: 16px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                            #facebook{
                                fill: var(--helpgent-color-facebook);
                            }
                            #youtube{
                                fill: var(--helpgent-color-youtube);
                            }
                            #twitter{
                                fill: var(--helpgent-color-twitter);
                            }
                            #instagram{
                                fill: var(--helpgent-color-instagram);
                            }
                        }
                    }
                    &__placeholder{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                    &__option{
                        svg{
                            margin-right: 6px;
                            width: 16px;
                            height: 16px;
                            #facebook{
                                fill: var(--helpgent-color-facebook);
                            }
                            #youtube{
                                fill: var(--helpgent-color-youtube);
                            }
                            #twitter{
                                fill: var(--helpgent-color-twitter);
                            }
                            #instagram{
                                fill: var(--helpgent-color-instagram);
                            }
                        }
                    }
                }
            }
            &__select-wrap{
                display: flex;
                align-items: center;
                gap: 0 10px;
                .helpgent-select{
                    flex: 1;
                    margin-bottom: 0;
                }
                +.helpgent-form-group{
                    margin-top: 8px;
                    width: calc(100% - 32px);
                }
            }
        }
        .helpgent-social-list:not(:empty){
            margin: 20px 0;
        }
    }
    .helpgent-field-element--inline{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:first-child){
            margin-top: 25px;
        }
        & + .helpgent-field-element{
            margin-top: 25px;
        }
        .helpgent-select{
            &__control{
                height: 36px;
                padding: 0;
                border-radius: 8px;
            }
            &__placeholder{
                font-size: 13px;
                font-weight: 500;
            }
        }
        .helpgent-form-group .helpgent-form-group__element{
            height: 36px;
            min-height: 36px;
        }
        .helpgent-field-element__top{
            flex: auto;
            .helpgent-field-element__label{
                margin: 0;
            }
        }
        .helpgent-field-element__content{
            flex: 2;
            .helpgent-form-group{
                margin: 0;
                min-width: 128px;
                @media only screen and (max-width: 1367px){
                    min-width: 80px;
                }
            }
        }
        .helpgent-field-element__left{
            label{
                margin: 0;
            }
            &.helpgent-field-element__left--has-tooltip{
                display: flex;
                .helpgent-field-element__label{
                    width: auto;
                }
                .helpgent-tooltip-toggle{
                    margin-left: 8px;
                }
            }
        }
        .helpgent-field-element__right{
            .helpgent-form-group{
                margin-bottom: 0;
            }
        }
    }
    .helpgent-color-picker{
        height: 36px;
        background: var(--helpgent-color-bg-gray);
        border-radius: 8px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        .helpgent-color-picker__text{
            min-width: 70px;
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                min-width: 57px;
                font-size: 11px;
            }
        }
    }
    .helpgent-design-setting-wrap{
        .helpgent-screen-setting-block{
            .helpgent-field-element__label{
                width: 150px;
                &.helpgent-selectable-field-label{
                    width: auto;
                    margin-bottom: 13px;
                }
                @media screen and (max-width: 1367px) {
                    width: 100px;
                }
            }

            .helpgent-select{
                .helpgent-select__single-value{
                    margin: 0;
                }
                .helpgent-select__value-container{
                    padding: 0 12px;
                }
            }
            .helpgent-form-group .helpgent-form-group__element{
                padding-left: 12px;
                border: 0 none;
            }
        }
    }
    .helpgent-element-dropdown{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 18px 5px 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
        background-color: var(--helpgent-color-bg-gray);
        .helpgent-element-dropdown__content{
            display: flex;
            align-items: center;
        }
        .helpgent-element-dropdown__icon{
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-inline-end: 10px;
            background-color: var(--helpgent-color-white);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
        .helpgent-element-dropdown__title{
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            color: var(--helpgent-color-dark);
            p,
            strong{
                font-size: inherit;
                line-height: inherit;
                margin: 0;
            }
        }
    }
    .helpgent-media-uploader{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 160px;
        border-radius: 12px;
        background-color: var(--helpgent-color-bg-light);
        border: 2px dashed var(--helpgent-color-bg-deep);
        .helpgent-btn-upload-trigger{
            font-size: 14px;
            white-space: nowrap;
            color: var(--color-dark);
            background-color: var(--helpgent-color-white);
        }
        &.helpgent-media-uploader--has-media{
            border-color: transparent;
            overflow: hidden;
        }
    }
    .helpgent-media-uploader-actions {
        display: flex;
        flex-direction: column;
    }
    .helpgent-media-uploader.helpgent-media-uploader--media-added{
        border: 2px solid #fff;
    }
    .helpgent-element-media-uploader{
        display: flex;
        align-items: center;
        gap: 10px;
        .helpgent-btn{
            flex: 1;
            svg path{
                fill: var(--helpgent-color-light-gray);
                transition: var(--helpgent-transition);
            }
            &.helpgent-btn-remove{
                &:hover{
                    color: var(--helpgent-color-danger);
                    svg path{
                        fill: var(--helpgent-color-danger);
                    }
                }
            }
        }
    }
    .helpgent-focal-point-picker{
        margin-bottom: 20px;
        .components-focal-point-picker{
            box-shadow: none;
            border-radius: 12px;
            overflow: hidden;
            max-height: 190px;
        }
        .components-focal-point-picker__media--image{
            max-height: 190px;
        }
        .components-focal-point-picker-control{
            background: var(--helpgent-color-bg-gray);
            line-height: 0;
            border-radius: 12px;
        }
        .focal-point-picker__controls{
            display: none;
        }
        .components-base-control__field{
            margin-bottom: 0;
        }
        .helpgent-focal-point-picker-top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .helpgent-focal-point-label{
            font-size: 14px;
            font-weight: 500;
            color: #030308;
        }
        .helpgent-focal-point-reset{
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 6px;
            background: var(--helpgent-color-bg-gray);
            transition: var(--helpgent-transition);
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
            &:hover{
                background: var(--helpgent-color-bg-deep);
            }
        }
        .components-focal-point-picker__icon_container{
            box-shadow: none;
            border: 2px solid #fff;
            background: var(--helpgent-color-primary);
            backdrop-filter: none;
            width: 24px;
            height: 24px;
            margin: -12px 0 0 -12px;
        }
    }
    .helpgent-media-preview{
        position: absolute;
        height: 100%;
        width: 100%;
        inset-inline-start: 0;
        top: 0;
        video{
            height: 100%;
            max-height: 200px;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
        .helpgent-video-control{
            position: absolute;
            width: 56px;
            height: 56px;
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
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-dark);
                }
            }
        }
        &:hover{
            .helpgent-video-control{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .helpgent-media-preview__src{
        height: 100%;
        position: relative;
        &:before{
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            inset-inline-start: 0;
            top: 0;
            background: rgba(0,0,0,0.3);
            border-radius: 12px;
            z-index: 1;
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }
    .helpgent-layout-actions{
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
        .helpgent-layout-action__single{
            cursor: pointer;
            line-height: 0;
            svg{
                width: 60px;
                height: 40px;
            }
            &.helpgent-layout-action__single--open-ended{
                svg{
                    width: auto;
                }
            }
            &.helpgent-active{
                svg{
                    path,
                    rect{
                        fill: var(--helpgent-color-primary);
                    }
                }
            }
        }
    }

    //rating styles
    .helpgent-rating-list{
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 25px;
        .helpgent-rating-single{
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: var(--helpgent-color-bg-light);
            transition: var(--helpgent-transition);
            margin-top: 5px;
            cursor: pointer;
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-extra-light);
                    transition: var(--helpgent-transition);
                }
            }
            &.helpgent-active{
                background: var(--helpgent-color-primary);
                svg{
                    path{
                        fill: #fff;
                    }
                }
            }
        }
    }
`,Fr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: #fff;
    padding: 5px;
    border-radius: 8px;
    width: 110px !important;
    margin: 30px auto 0;
    box-sizing: border-box;
    @media only screen and (max-width: 575px){
        display: none;
    }
    .helpgent-device-action{
        cursor: pointer;
        line-height: 0;
        border-radius: 6px;
        transition: var(--helpgent-transition);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.helpgent-active{
            background: var(--helpgent-color-bg-deep);
            svg{
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        svg{
            path{
                fill: var(--helpgent-color-extra-light);
                transition: var(--helpgent-transition);
            }
        }
    }
`,Fr.div`
    //padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: var(--helpgent-color-bg-light);
    &.helpgent-collapsed{
        .helpgent-validation-collapse{
            background-color: var(--helpgent-color-extra-light);
        }
        .helpgent-validation-top{
            .helpgent-validation-label{
                color: var(--helpgent-color-gray);
            }
        }
        .helpgent-validation-content{
            display: none;
        }
    }
    .helpgent-validation-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
        padding: 15px;
        .helpgent-validation-label{
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-primary);
        }
    }
    .helpgent-form-element-inline{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .helpgent-field-element-action{
        .helpgent-field-visibility{
            margin: 6px;
        }
        span{
            cursor: pointer;
        }
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-light-gray)
            }
        }
    }
    .helpgent-validation-content{
        padding: 10px 15px 20px;
    }
    .helpgent-form-group{
        &:last-child{
            margin-bottom: 0;
        }
        .helpgent-form-group__label{
            font-size: 14px;
            margin-bottom: 0;
        }
        textarea{
            min-height: 100px;
            resize: none;
        }
    }
    .helpgent-form-group__element{
        border-radius: 8px;
        background-color: var(--helpgent-color-white);
    }
    .helpgent-validation-collapse{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--helpgent-color-primary);
        svg{
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
`,Fr.div`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    min-height: 660px;
    border-radius: 14px;
    box-sizing: border-box;
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out 0s;
    background-color: var(--helpgent-color-white);
    z-index: 1;
    > div{
        padding: 32px 32px 30px;
        @media only screen and (max-width: 1399px){
            max-height: 400px;
            overflow-y: scroll;
        }
    }
    .helpgent-btn-back{
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        transition: var(--helpgent-transition);
        color: var(--helpgent-color-dark);
        svg{
            margin-right: 5px;
            path{
                fill: var(--helpgent-color-dark);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    h4{
        font-size: 16px;
        font-weight: 500;
        color: var(--helpgent-color-gray-light);
    }
    .helpgent-textField-form{
        display: flex;
        align-items: flex-end;
        gap: 12px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            flex-wrap: wrap;
        }
        &:not(:last-child){
            margin-bottom: 20px;
        }
        .helpgent-form-group{
            margin-bottom: 0;
        }
        &__element{
            .helpgent-form-group__label{
                font-size: 14px;
                font-weight: 500;
                word-wrap: break-word;
                word-break: break-word;
                white-space: nowrap;
                width: 160px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: flex;
                align-items: center;
                gap: 5px;
                margin-bottom: 12px;
                color: var(--helpgent-color-dark);
            }
            input{
                width: 100%;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.57;
                min-height: 40px;
                border-radius: 6px;
                padding: 7px 16px;
                border: 0 none;
                box-sizing: border-box;
                color: var(--helpgent-color-dark);
                border: 2px solid transparent;
                margin: 0;
                background-color: var(--helpgent-color-bg-gray);
            }
            textarea{
                height: 100px;
            }
        }
        &__action{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .helpgent-textField-form__action-item{
            width: 40px;
            height: 40px;
            border-radius: 6px;
            background-color: var(--helpgent-color-bg-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                path{
                    fill: rgb(186, 186, 186);
                }
            }
            &.helpgent-active{
                svg{
                    path{
                        fill: var(--helpgent-color-dark);
                    }
                }
            }
            &.helpgent-textField-form__action-item--disabled{
                pointer-events: none;
                svg{
                    path{
                        fill: var(--helpgent-color-extra-light);
                    }
                }
            }
        }
    }
`,Fr.div`
    .helpgent-logic-rule-form__condition {
        &:not(:last-child){
            margin-bottom: 5px;
            border-bottom: 1px solid #d0cece;
            padding-bottom: 30px;
        }
    }
    .helpgent-logic-rule-form__condition-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 25px 0 10px;
        .helpgent-logic-rule-form__and{
            font-size: 14px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            border-radius: 8px;
            background: #fff;
            min-height: 40px;
            padding: 0 14px;
            display: inline-flex;
            align-items: center;
            min-width: 140px;
            box-sizing: border-box;
        }
        .helpgent-logic-rule-form__condition-cancel{
            width: 34px;
            height: 34px;
            background: rgba(239,0,0,0.1);
            svg{
                path{
                    fill: var(--helpgent-color-danger);
                    transition: var(--helpgent-transition);
                }
            }
            &:hover{
                background: var(--helpgent-color-danger);
                svg{
                    path{
                        fill: #fff;
                    }
                }
            }
        }
    }
    &.helpgent-setting-logic-wrap{
        padding: 25px 25px 5px;
        height: calc(100% - 0px);
        box-sizing: border-box;
        .helpgent-logic-add{
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            gap: 10px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-logic-inner{
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
            .helpgent-logic-bottom{
                margin-top: auto;
                .helpgent-logic-remove{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: var(--helpgent-transition);
                    &:hover{
                        color: var(--helpgent-color-danger);
                        svg path{
                            fill: var(--helpgent-color-danger);
                        }
                    }
                    svg path{
                        transition: var(--helpgent-transition);
                    }
                    &.helpgent-btn-disabled{
                        pointer-events: none;
                        cursor: not-allowed;
                        opacity: .4;
                    }
                }
            }

            .helpgent-select__option{
                .helpgent-select__option__icon,
                .helpgent-badge{
                    flex: none;
                }
                .helpgent-select__option__text{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    flex: 0 0 184px;
                    word-break: break-word;
                    overflow: hidden;
                    p,
                    strong{
                        margin: 0;
                        font-size: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
                }
            }

        }
        .helpgent-logic{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--helpgent-color-bg-gray);
            border-radius: 10px;
            padding: 5px 5px 5px 15px;
            margin-bottom: 10px;
            &.helpgent-logic--conditional{
                padding: 6px;
            }
            &__text{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-black);
                display: flex;
                align-items: center;
                gap: 8px;
                span{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .helpgent-option-index{
                    width: 23px;
                    height: 23px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 600;
                    background: var(--helpgent-color-primary);
                    text-transform: uppercase;
                    color: #fff;
                }
            }
            &__dropdown{
                display: flex;
                align-items: center;
                .helpgent-badge{
                    position: absolute;
                    z-index: 0;
                    inset-inline-start: calc(-100% - 4px);
                    top: 50%;
                    transform: translateY(-50%);
                    line-height: normal;
                }
                .helpgent-select__menu{
                    min-width: 290px;
                    inset-inline-end: -5px;
                    .helpgent-select__group-heading{
                        font-size: 13px;
                        font-weight: 500;
                        color: var(--helpgent-color-light-gray);
                        text-transform: capitalize;
                    }
                }
                .helpgent-select{
                    flex: none;
                    position: relative;
                    box-sizing: border-box;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: var(--helpgent-color-white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .helpgent-select__control{
                        padding: 10px;
                        background-color: transparent;
                        overflow: visible;
                        &--is-focused{
                            box-shadow: none;
                        }
                    }
                    &__value-container{
                        overflow: visible;
                        padding: 0;
                        height: 0;
                        &--has-value{
                            height: auto;
                            & + .helpgent-select__indicators{
                                display: none;
                            }
                        }
                        svg{
                            width: 16px;
                            height: 16px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                    }
                    &__indicator{
                        padding-inline-end: 0;
                    }
                    &__option{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        transition: var(--helpgent-transition);
                        span{
                            margin-inline-end: 0;
                            display: flex;
                            position: static;
                            transform: none;
                        }
                        &__icon{
                            width: 32px;
                            height: 32px;
                            border-radius: 8px;
                            background: var(--helpgent-color-bg-gray);
                            align-items: center;
                            justify-content: center;
                            transition: var(--helpgent-transition);
                            svg{
                                width: 16px;
                                height: 16px;
                                path{
                                    fill: var(--helpgent-color-light-gray);
                                }
                            }
                        }
                        &:hover{
                            background: var(--helpgent-color-bg-gray);
                            .helpgent-select__option__icon{
                                background: var(--helpgent-color-white);
                            }
                        }
                    }
                }
            }
        }
    }

    .helpgent-logic-rule-form{
        padding: 20px 15px;
        border-radius: 10px;
        background-color: var(--helpgent-color-bg-gray);
        margin-bottom: 25px;
        .helpgent-form-group__element{
            background-color: var(--helpgent-color-white);
        }
    }

    .helpgent-logic-rule-form__condition{
        .helpgent-select{
            .helpgent-select__control{
                border-radius: 8px;
                background: #fff;
                padding: 4px;
            }
            .helpgent-select__value-container{
                padding-left: 0;
            }
        }
        .helpgent-form-group{
            margin-bottom: 0;
        }
        .helpgent-select__indicator{
            color: var(--helpgent-color-primary);
        }
        .helpgent-dropdown-icon{
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: var(--helpgent-color-primary);
            margin-right: 5px;
            flex: none;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: #fff;
                }
            }
        }
        .helpgent-badge-circle{
            flex: none;
        }
        .helpgent-select__option__text{
            font-size: 14px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            margin-left: 10px;
            display: flex;
        }
        .helpgent-select__menu{
            .helpgent-select__option{
                display: flex;
                align-items: center;
                gap: 5px;
            }
            .helpgent-select__option__icon{
                width: 32px;
                height: 32px;
                border-radius: 8px;
                background: var(--helpgent-color-bg-gray);
                display: flex;
                align-items: center;
                justify-content: center;
                flex: none;
            }
            .helpgent-badge{
                flex: none;
            }
            .helpgent-select__option__text{
                padding-left: 0;
            }
        }
        .helpgent-select-logic-element,
        .helpgent-logic-rule-form__condition-inner{
            display: block;
            margin: 0 0 10px;
        }
        .helpgent-logic-rule-form__condition-inner{
            .helpgent-select .helpgent-select__control{
                padding: 5px 14px;
            }
        }
    }
    .helpgent-logic-rule-form__top-text{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        color: var(--helpgent-color-gray);
        border-radius: 8px;
        background: #fff;
        min-height: 40px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        min-width: 140px;
        box-sizing: border-box;
    }
    .helpgent-logic-rule-form__condition-inner{
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
        margin: 0 6px;
        color: var(--helpgent-color-light);
    }
    .helpgent-logic-condition-add{
        display: flex;
        align-items: center;
        margin: 20px 0 22px;
        color: var(--helpgent-color-primary);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        .helpgent-logic-condition-add__icon{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--helpgent-color-white);
            width: 20px;
            height: 20px;
            margin-right: 6px;
        }
        svg{
            width: 8px;
            height: 8px;
            path{
                transition: var(--helpgent-transition);
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-logic-rule-form__condition-cancel{
        flex: none;
        margin-left: 10px;
    }
    .helpgent-logic-rule-form__action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        .helpgent-btn-link{
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            color: var(--helpgent-color-danger);
            cursor: pointer;
        }
    }
    .helpgent-logic-rule-form__destination{
        span:not(.helpgent-badge){
            font-size: 14px;
            font-weight: 500;
            margin-right: 6px;
            margin-bottom: 8px;
            color: var(--helpgent-color-gray);
            display: inline-block;
            background: none;
        }
        .helpgent-select__control{
            background-color: var(--helpgent-color-white);
            padding: 4px 0;
            border-radius: 8px;
            min-height: 40px;
            .helpgent-select__value-container{
                padding-left: 4px;
                .helpgent-dropdown-icon{
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: var(--helpgent-color-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 5px;
                    flex: none;
                    svg{
                        width: 14px;
                        height: 14px;
                        path{
                            fill: #fff;
                        }
                    }
                }
                .helpgent-badge{
                    margin-right: 10px;
                    flex: none;
                }
                .helpgent-select__option__text,
                .helpgent-select__placeholder{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-gray);
                    margin: 0;
                }
                .helpgent-select__placeholder{
                    padding-left: 10px;
                }
            }
        }
        .helpgent-select__menu{
            .helpgent-select__option{
                display: flex;
                align-items: center;
                gap: 5px;
            }
            .helpgent-select__option__icon{
                width: 32px;
                height: 32px;
                border-radius: 8px;
                background: var(--helpgent-color-bg-gray);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 5px 0 0;
            }
            .helpgent-badge{
                margin: 0;
            }
            .helpgent-select__option__text{
                padding-left: 0;
                margin: 0 0 0 10px;
                flex: auto;
            }
        }
        .helpgent-select__option__icon{
            svg{
                path{
                    fill: var(--helpgent-color-light-gray);
                }
            }
        }
    }
    .helpgent-logic-rule-form__element-answer{
        .helpgent-select__control{
            .helpgent-select__value-container{
                .helpgent-select__option__text,
                .helpgent-select__placeholder{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-gray);
                    margin: 0;
                }
                .helpgent-select__placeholder{
                    padding-left: 10px;
                }
            }
        }
    }
    .helpgent-logic-add-rule{
        margin-top: 20px;
        margin-bottom: 25px;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-gray);
            }
        }
    }
`,Fr.div`
    &.helpgent-logic-source{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
        .helpgent-logic-source__icon{
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: var(--helpgent-color-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
    }
    .helpgent-logic-source__element{
        display: flex;
        align-items: center;
        gap: 6px;
        .helpgent-badge{
            border-radius: 6px;
            padding: 5px 8.6px 4.5px 8.6px;
        }
    }
    .helpgent-logic-source__label{
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        color: var(--helpgent-color-gray);
    }
`,Fr.div`
    .helpgent-logic--conditional{
        cursor: pointer;
        > span{
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-gray);
            margin-left: 9px;
        }
    }
    .helpgent-logic-list__element{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: 20px;
        cursor: pointer;
    }
    .helpgent-logic-list__element--icon{
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--helpgent-color-white);
        flex: none;
        svg{
            width: 16px;
            height: 16px;
            path{
                fill: var(--helpgent-color-primary);
            }
        }
        .helpgent-badge{
            position: absolute;
            left: -14px;
            top: 50%;
            transform: translateY(-50%);
            flex: none;
        }
    }

    .helpgent-logic-list__element--label{
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        word-break: break-word;
        word-wrap: break-word;
        max-width: 140px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .helpgent-logic-list__condition-answer{
        display: flex;
    }
    .helpgent-logic-list__condition-type{
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
    }
    .helpgent-logic-list__condition-value{
        max-width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        margin-left: 7px;
    }
    .helpgent-logic-list__go-to-text{
        display: inline-block;
        margin-right: 20px;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
    }
    .helpgent-logic-list__element-destination{
        display: flex;
        flex: none;
        align-items: center;
    }
`,Fr.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .helpgent-selectable-option{
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        text-transform: capitalize;
        color: var(--helpgent-color-gray);
        background-color: var(--helpgent-color-bg-light);
        &:hover,
        &.helpgent-active{
            background-color: var(--helpgent-color-gray);
            color: var(--helpgent-color-white);
            svg{
                path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        svg{
            path{
                fill: var(--helpgent-color-gray);
            }
        }
    }
`,Fr.div`

`,Fr.div`

`,Fr.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-position: center top;
    background-size: cover;
    background-color: var(--helpgent-background-color);
    .helpgent-element-background__overlay{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 20px;
        background-color: var(--helpgent-background-overlay-color);
        opacity: var(--helpgent-background-overlay-opacity);
    }
`,Fr.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 8px;
    li{
        list-style: none;
    }
`;const Ps=Fr.div`
    background: var(--helpgent-color-bg-light);
    border-radius: 10px;
    padding: 20px;
    .helpgent-cta-card__title{
        margin: 0 0 12px;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-cta-card__description{
        line-height: 1.7;
        font-size: 13px;
        font-weight: 500;
        margin: 0 0 16px;
        color: var(--helpgent-color-gray);
    }
`;function Rs(t){const{title:n,description:r,btnText:o,icon:i,tooltip:a,link:l,cssClass:s}=t,{routeLink:p}=ws("helpgent_router_references",null);return(0,e.createElement)(Ps,{className:`helpgent-cta-card ${s}`},(0,e.createElement)("h5",{className:"helpgent-cta-card__title"},i&&(0,e.createElement)(Ke,{src:i}),n,a&&(0,e.createElement)($r.Tooltip,{text:a,delay:"0"},(0,e.createElement)("span",{className:"helpgent-tooltip-toggle"},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBpZD0iSWNvbl9hd2Vzb21lLXF1ZXN0aW9uLWNpcmNsZSIgZGF0YS1uYW1lPSJJY29uIGF3ZXNvbWUtcXVlc3Rpb24tY2lyY2xlIiBkPSJNMTYuNTYzLDguNTYzYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDE2LjU2Myw4LjU2M1pNOC43NzcsMy4yMDhhNC4xNzgsNC4xNzgsMCwwLDAtMy43NiwyLjA1Ny4zODguMzg4LDAsMCwwLC4wODguNTI0bDEuMTE5Ljg0OWEuMzg3LjM4NywwLDAsMCwuNTM4LS4wNjhjLjU3Ni0uNzMxLjk3MS0xLjE1NSwxLjg0OC0xLjE1NS42NTksMCwxLjQ3NC40MjQsMS40NzQsMS4wNjMsMCwuNDgzLS40LjczMS0xLjA0OSwxLjFDOC4yNzYsOCw3LjI3Miw4LjUyOCw3LjI3Miw5Ljg1M3YuMTI5YS4zODcuMzg3LDAsMCwwLC4zODcuMzg3SDkuNDY2YS4zODcuMzg3LDAsMCwwLC4zODctLjM4N1Y5LjkzOWMwLS45MTgsMi42ODMtLjk1NiwyLjY4My0zLjQ0MUMxMi41MzYsNC42MjcsMTAuNiwzLjIwOCw4Ljc3NywzLjIwOFptLS4yMTUsOGExLjQ4NCwxLjQ4NCwwLDEsMCwxLjQ4NCwxLjQ4NEExLjQ4NiwxLjQ4NiwwLDAsMCw4LjU2MywxMS4yMDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41NjMgLTAuNTYzKSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K"})))),(0,e.createElement)("p",{className:"helpgent-cta-card__description"},r),(0,e.createElement)(p,{to:l,className:"helpgent-btn helpgent-btn-block helpgent-btn-dark",target:"_blank"},o))}Fr.div`
    border-left: 1px solid var(--helpgent-color-bg-gray);
    .helpgent-close-panel__top{
        position: relative;
        padding: 12px 0;
        min-height: 36px;
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        .helpgent-btn-panel-close{
            position: absolute;
            right: 20px;
            top: 12px;
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: 500;
            padding-inline-start: 13.5px;
            padding-inline-end: 13.5px;
            text-decoration: none;
            border-color: transparent;
            color: var(--helpgent-color-gray);
            background-color: var(--helpgent-color-bg-gray);
            &:focus{
                outline: none;
            }
            svg{
                width: 10px;
                height: 10px;
                margin-right: 9px;
            }
        }
    }
    .helpgent-close-panel__content{
        padding: 20px;
    }
    .helpgent-close-panel__title{
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin: 0;
        font-family: var(--helpgent-font-family);
        color: var(--helpgent-color-dark);
        svg{
            margin-left: 8px;
            position: relative;
            top: -3px;
        }
    }
    p{
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 20px;
        color: var(--helpgent-color-gray);
    }
    .helpgent-close-panel__field{
        .helpgent-form-group__element{
            border-radius: 10px;
            color: var(--helpgent-color-gray);
            background-color: var(--helpgent-color-bg-gray);
        }
        .helpgent-btn-copy{
            font-size: 14px;
            margin-top: 10px;
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-white);
                }
            }
            &:hover{
                color: var(--helpgent-color-white);
                background-color: #3a3a3a;
                border-color: #3a3a3a;
            }
        }
    }
`;const Us={form:"/helpgent/admin/form",availablePages:{text:"Display on specific pages",api:"/helpgent/admin/page-with-homepage"}},Fs={forms:"/forms"};(0,c.addFilter)("helpgent_form_edit_bubble_customizer","helpgent",(function(t,n){return t.bubble_position_controls=(0,e.createElement)(Ds,{...n}),t})),(0,c.addFilter)("helpgent_form_edit_recaptcha_key","helpgent",(function(t,n){return t.helpgent_form_edit_recaptcha_key_field=(0,e.createElement)(Rs,{title:(0,Br.__)("Enable Google reCAPTCHA","helpgent"),description:(0,Br.__)("To use google reCaptcha, first add reCAPTCHA key.","helpgent"),btnText:`${helpgent_localization?.google_recaptcha_site_key?(0,Br.__)("Update reCaptcha key","helpgent"):(0,Br.__)("Add reCaptcha key","helpgent")}`,tooltip:(0,e.createElement)("span",{dangerouslySetInnerHTML:{__html:sprintf((0,Br.__)("You need to enter your google reCaptcha site api key in order to display google reCaptcha. You can find your google reCaptcha site api key and detailed information %s","helpgent"),`<a href="#">${(0,Br.__)("here.","helpgent")}</a>`)}}),link:"/settings/integration/google-recaptcha"}),t})),(0,c.addFilter)("helpgent_form_google_map_key","helpgent",(function(t,n){return t.helpgent_form_google_map_key_field=(0,e.createElement)(Rs,{title:(0,Br.__)("Enable Google Maps Platform","helpgent"),description:(0,Br.__)("To use Google Maps, first add your Google Maps API key.","helpgent"),btnText:`${helpgent_localization?.google_map_api_key?(0,Br.__)("Update Maps API key","helpgent"):(0,Br.__)("Add Google Maps API key","helpgent")}`,icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE1IDIwIj4KICA8ZyBpZD0iZ29vZ2xlLW1hcC1tYXJrZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02My41KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTk0IiBkYXRhLW5hbWU9IlBhdGggMTU5NCIgZD0iTTIwNC43NzMsOTMuNjExLDE5Niw5NS45NDlsMi4zMzgsMTMuOTYzLDUuOTg5LTcuOTMzYTcuNSw3LjUsMCwwLDAsLjQ0Ny04LjM2OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMzM4IC04OS45MTIpIiBmaWxsPSIjMGY5ZDU4Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTk1IiBkYXRhLW5hbWU9IlBhdGggMTU5NSIgZD0iTTE4MS4wMTYsMzE2LjkzOGwyLjkyMSwzLjg3di03Ljc1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIuOTM3IC0zMDAuODA4KSIgZmlsbD0iIzMxYWE1MiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTU5NiIgZGF0YS1uYW1lPSJQYXRoIDE1OTYiIGQ9Ik0xOTguMzM4LDE5Ny4ybDIuMjU3LTMtMi4yNTctMS43TDE5NiwxOTQuODQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNy4zMzggLTE4NC45NzQpIiBmaWxsPSIjZjY5NDExIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTk3IiBkYXRhLW5hbWU9IlBhdGggMTU5NyIgZD0iTTE5OC4zMzgsMCwxOTYsMi41N2wyLjMzOCwyLjU3TDIwMC4yNi4yNDlBNy41MSw3LjUxLDAsMCwwLDE5OC4zMzgsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMzM4KSIgZmlsbD0iIzQxNzVkZiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTU5OCIgZGF0YS1uYW1lPSJQYXRoIDE1OTgiIGQ9Ik0xMDIuMiwyLjk4OVY3LjVoNS45OTJWMEE3LjQ4OCw3LjQ4OCwwLDAsMCwxMDIuMiwyLjk4OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNy4xOSkiIGZpbGw9IiM0MDg2ZjQiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE1OTkiIGRhdGEtbmFtZT0iUGF0aCAxNTk5IiBkPSJNNjUuMDA4LDc2LjczYTcuNSw3LjUsMCwwLDAtLjQ0Myw4LjM2M2w1LjM0Ny00LjY3MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTczLjc0MSkiIGZpbGw9IiNlYjQxMzIiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE2MDAiIGRhdGEtbmFtZT0iUGF0aCAxNjAwIiBkPSJNMTg4LjI0Nyw2LjM5M2wtMS45MjIsMi41NTQtMi44MjUsNi40aDUuMDgybDQuMTc5LTUuNTUyYTcuNTE0LDcuNTE0LDAsMCwwLTQuNTEzLTMuNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTUuMzI1IC02LjE0NCkiIGZpbGw9IiM0MDg2ZjQiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE2MDEiIGRhdGEtbmFtZT0iUGF0aCAxNjAxIiBkPSJNMjAwLjMyOSw3MS45MzlsLTIuMjU3LDMsMi4yNTcsMS43WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOS4zMjkgLTY5LjEzNikiIGZpbGw9IiM2MDlhZjYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE2MDIiIGRhdGEtbmFtZT0iUGF0aCAxNjAyIiBkPSJNMTk2LDE5Mi41bDIuMzM4LDQuNywyLjI1Ny0zWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNy4zMzggLTE4NC45NzQpIiBmaWxsPSIjZjhhODA4Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNjAzIiBkYXRhLW5hbWU9IlBhdGggMTYwMyIgZD0iTTk1LDE0OC45bC00LjE3OSw1LjU1MWE3LjUwOSw3LjUwOSwwLDAsMCwuNDQ2LjY2MmwzLjA2OCw0LjA2MywyLjkyMS0zLjg4MXYtNC43WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2LjI1OCAtMTQzLjA2NSkiIGZpbGw9IiNmYmJkMDAiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE2MDQiIGRhdGEtbmFtZT0iUGF0aCAxNjA0IiBkPSJNMjIxLjE2MiwxMjBsLTEuNDEyLDIuODI1LDEuNDEyLDIuODI1YTIuODI1LDIuODI1LDAsMCwwLDAtNS42NDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUwLjE2MiAtMTE1LjMwOCkiIGZpbGw9IiNlM2U3ZWEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzE2MDUiIGRhdGEtbmFtZT0iUGF0aCAxNjA1IiBkPSJNMTgzLjUsMTIyLjgyNWEyLjgyNSwyLjgyNSwwLDAsMCwyLjgyNSwyLjgyNVYxMjBBMi44MjUsMi44MjUsMCwwLDAsMTgzLjUsMTIyLjgyNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTUuMzI1IC0xMTUuMzA4KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==",link:"/settings/integration/google-map",cssClass:"helpgent-mb-30"}),t})),(0,c.addFilter)("helpgent_form_settings_general","helpgent",(function(e){return{mediaLimits:{component:Is},...e}})),(0,c.addFilter)("helpgent_email_notification_tabs","helpgent",(function(e){return{...e,style:{title:"Template Style",component:As}}}));const Ys=function(){return(0,e.createElement)(ks.SingleFormModule,{baseApiRoute:Us,baseLinkRoute:Fs})},Hs={forms:"/helpgent/admin/form",availablePages:{text:"Display on specific pages",api:"/helpgent/admin/page-with-homepage"}},Ws={forms:"forms",preview:"/template/preview"},Qs=function(){return(0,e.createElement)(ks.PreMadeTemplateModule,{baseApiRoute:Hs,baseLinkRoute:Ws})},Bs={forms:"/helpgent/admin/form",availablePages:{text:"Display on specific pages",api:"/helpgent/admin/page-with-homepage"}},Gs={forms:"/forms",preMadeTemplates:"/pre-made-templates"},Zs=function(){return(0,e.createElement)(ks.PreMadeTemplatePreviewModule,{baseApiRoute:Bs,baseLinkRoute:Gs})},Vs=Fr.div`
    cursor: pointer;
    padding-left: 16px;
    border-left: 1px solid var(--helpgent-color-bg-gray);
    .helpgent-profile-toggle{
        width: 32px;
        height: 32px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
`;function qs(e,t,n){return new Date(t).toLocaleDateString(e,n)}const Ks=Fr.div`

    &.helpgent-drawer-active.helpgent-in{
        .helpgent-drawer-content{
            transform: translateX(0);
        }

        .helpgent-drawer-backdrop{
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }
    }
    &.helpgent-builder-close-drawer{
        .helpgent-drawer-content{
            width: 360px;
        }
    }
    .helpgent-drawer-content{
        position: fixed;
        right: 0;
        top: 0;
        width: 400px;
        height: 100vh;
        transform: translateX(400px);
        transition: transform .3s ease-in-out;
        z-index: 1000000;
        background-color: var(--helpgent-color-white);
        @media only screen and (max-width: 400px){
            width: calc(100% - 20px);
        }
    }
    .helpgent-drawer-backdrop{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        z-index: 100000;
        transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
        background-color: rgba(0,0,0,.5);
    }
    .helpgent-media-filter{
        &__top{
            border-bottom: 1px solid #EDEDED;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 28px 25px;
            .helpgent-select .helpgent-select__menu{
                width: 130px;
                right: 0;
            }
        }
        &__close{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: var(--helpgent-color-bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg{
                width: 10px;
                height: 10px;
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        &__label{
            font-size: 18px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
        .helpgent-select__control{
            background: none;
            min-width: 80px;
            padding: 0;
            min-height: unset;
            .helpgent-select__value-container,
            .helpgent-select__indicator{
                padding: 0;
                gap: 0;
            }
            .helpgent-select__single-value{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
                text-align: right;
            }
        }
        &__content{
            padding: 25px;
            overflow-y: scroll;
            height: calc(100vh - 91px);
            .helpgent-user-block{
                align-items: center;
            }
            .helpgent-media-filter__media{
                padding-bottom: 30px;
            }
        }
        &__media-item{
            &:last-child{
                margin-bottom: 50px;
            }
            .helpgent-media-item-content{
                margin: 10px 0 20px;
                .helpgent-video-conversation{
                    position: relative;
                    border-radius: 20px;
                    text-align: center;
                    display: flex;
                    &::before{
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        background: rgba(0,0,0,0.3);
                        border-radius:20px;
                    }
                    video{
                        border-radius: 20px;
                        width: 100%;
                        max-height: 260px;
                    }
                    .helpgent-video-conversation__toggle{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        background: #fff;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        visibility: hidden;
                        opacity: 0;
                        transition: var(--helpgent-transition);
                        svg{
                            width: 20px;
                            height: 20px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                    }
                    .helpgent-video-conversation__download{
                        position: absolute;
                        right: 15px;
                        bottom: 15px;
                        width: 28px;
                        height: 28px;
                        border-radius: 7px;
                        background: #fff;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: var(--helpgent-transition);
                        svg{
                            width: 12px;
                            height: 12px;
                            path{
                                fill: var(--helpgent-color-light-gray);
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
                    .helpgent-video-conversation__visualization{
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        z-index: 1;
                        svg{
                            width: 18px;
                            height: 18px;
                            path{
                                fill: #fff;
                                transition: var(--helpgent-transition);
                            }
                        }
                        &:hover{
                            svg path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                    }
                    &:hover{
                        .helpgent-video-conversation__toggle{
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                .helpgent-voice-conversation{
                    background: var(--helpgent-color-bg-light);
                    border-radius: 20px;
                    margin-bottom: 5px;
                    .helpgent-voice-conversation__player{
                        align-items: center;
                        height: 42px;
                        padding: 10px;
                    }
                    .helpgent-voice-conversation__toggle{
                        width: 22px;
                        height: 22px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: var(--helpgent-color-primary);
                        margin-right: 10px;
                        svg{
                            width: 9px;
                            height: 9px;
                            path{
                                fill: var(--helpgent-color-white);
                            }
                        }
                    }
                    .helpgent-audio-range{
                        flex: 1;
                    }
                    .helpgent-voice-conversation__control{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 10px;
                        padding: 0 10px 10px;
                        .helpgent-voice-conversation__download{
                            width: 28px;
                            height: 28px;
                            background: #fff;
                            border-radius: 7px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: var(--helpgent-transition);
                            svg{
                                width: 12px;
                                height: 12px;
                                transition: var(--helpgent-transition);
                            }
                            &:hover{
                                background: var(--helpgent-color-primary);
                                svg path{
                                    fill: #fff;
                                }
                            }
                        }
                    }
                }
                .helpgent-media-reveal{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 6px;
                    color: var(--helpgent-color-primary);
                    cursor: pointer;
                    font-size: 12px;
                    svg{
                        width: 12px;
                        path{
                            fill: var(--helpgent-color-primary);
                        }
                    }
                }
            }
        }
        &__media{
            .helpgent-loading{
                display: block;
                padding-bottom: 100px;
                text-align: center;
            }
        }
    }
`,$s=function({isOpen:t,className:n,onClose:o,position:i="left",clearDomAfterClosed:a=!0,isBackDropActive:l=!0,children:s}){const p=(0,r.useRef)(document.querySelector("body")),c=(0,r.useRef)(document.getElementById("helpgent-drawer")||function(){const e=document.createElement("div");return e.setAttribute("id","helpgent-drawer"),e}()),h=((t,n)=>{const[r,o]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{let e;return t&&!r?o(!0):!t&&r&&(e=setTimeout((()=>o(!1)),n)),()=>{clearTimeout(e)}}),[n,t,r]),r})(t,300);return(0,r.useEffect)((()=>(p.current.appendChild(c.current),()=>{c.current.remove(),p.current.style.overflow=""})),[]),(0,r.useEffect)((()=>{if(t){p.current.style.overflow="hidden";const e=sessionStorage.getItem("isFullscreenActive");if(null===e)return;const t=document.querySelector(".helpgent-drawer-content");"1"===e?t.classList.add("helpgent-drawer-content--top-none"):t.classList.remove("helpgent-drawer-content--top-none")}else p.current.style.overflow=""}),[t]),h||!a||t?(0,r.createPortal)((0,e.createElement)(Ks,{"aria-hidden":!t,className:`${n} ${t?"helpgent-drawer-active":""} ${h?"helpgent-in":""}`},(0,e.createElement)("div",{className:`helpgent-drawer-content helpgent-drawer-${i}`,role:"dialog"},s),l&&(0,e.createElement)("div",{className:"helpgent-drawer-backdrop",onClick:o})),c.current):null};function Js(t){const{isGuest:n,isAdmin:o,userInfo:i,userProfileState:a,setUserProfileState:l,isProfileDrawerOpen:s,handleCloseProfileDrawer:p,setShowLogin:h,userLogoutMutation:d,isLoggingOut:g,queryClient:u}=t,f={year:"numeric",month:"long",day:"numeric"};return(0,e.createElement)($s,{isOpen:a?.isProfileDrawerOpen,className:"helpgent-profile-drawer",onClose:p},(0,e.createElement)(Qr,null,(0,e.createElement)("span",{className:"helpgent-profile-drawer-close",onClick:p},(0,e.createElement)(Ke,{src:Gr})),n?(0,e.createElement)("div",{className:"helpgent-admin-info helpgent-admin-info--guest"},(0,e.createElement)("div",{className:"helpgent-admin-info--guest-self"},(0,e.createElement)(Tl,{src:i?.avatar_url,alt:(0,Br.__)("Helpgent Media","helpgent")}),(0,e.createElement)("span",{className:"helpgent-admin-info__name"},i?.name),(0,e.createElement)("span",{className:"helpgent-admin-info__joined-date"},(0,Br.sprintf)((0,Br.__)("Since: %s","helpgent"),qs("en-US",i.created_at,f)))),(0,e.createElement)("div",{className:"helpgent-admin-info--guest-cta"},(0,e.createElement)("span",{className:"helpgent-admin-info--guest-cta__title"},(0,Br.__)("You are logged in as guest","helpgent")),(0,e.createElement)("ul",{className:"helpgent-admin-info--guest-cta__list"},(0,e.createElement)("li",null,(0,Br.sprintf)((0,Br.__)("You have %s conversation","helpgent"),i?.totals[0]?.response)),(0,e.createElement)("li",null,Number(i?.totals[0]?.form)>1?(0,Br.sprintf)((0,Br.__)("You have submitted %s forms","helpgent"),i?.totals[0]?.form):(0,Br.sprintf)((0,Br.__)("You have submitted %s form","helpgent"),i?.totals[0]?.form))),1===i?.guest_user_auto_remove&&(0,e.createElement)("p",null,(0,Br.__)("If you don’t create an account then all your data will be auto deleted as a guest user within 1 month.","helpgent")),(0,e.createElement)("a",{href:"#",className:"helpgent-admin-info--guest-cta-btn helpgent-btn helpgent-btn-primary helpgent-btn-md helpgent-btn-block"},(0,Br.__)("Create an Account","helpgent")))):(0,e.createElement)("div",{className:"helpgent-admin-info helpgent-admin-info--admin"},(0,e.createElement)("div",{className:"helpgent-admin-info-top"},(0,e.createElement)("div",{className:"helpgent-admin-info__picture"},(0,e.createElement)(Tl,{src:i?.avatar_url,alt:(0,Br.__)("Helpgent Media","helpgent")})),i?.name&&(0,e.createElement)("span",{className:"helpgent-admin-info__name"},i?.name),i?.email&&(0,e.createElement)("span",{className:"helpgent-admin-info__email"},i?.email),i?.company&&(0,e.createElement)("span",{className:"helpgent-admin-info__company"},i?.company),i?.number&&(0,e.createElement)("span",{className:"helpgent-admin-info__number"},i?.number),(0,e.createElement)("span",{className:"helpgent-admin-info__joined-date"},(0,Br.sprintf)((0,Br.__)("Joined HelpGent on %s","helpgent"),qs("en-US",i?.created_at,f)))),(0,e.createElement)("div",{className:"helpgent-admin-info-bottom"},(0,e.createElement)("h5",{className:"helpgent-admin-info__title"},(0,Br.__)("About Me","helpgent")),(0,e.createElement)("p",null,i?.about?i?.about:(0,Br.__)("Not available","helpgent")))),!o&&(0,e.createElement)("div",{className:"helpgent-profile-action "+(n?"":"helpgent-has-border")},!n&&(0,e.createElement)("button",{className:"helpgent-btn helpgent-btn-sm helpgent-btn-light-gray helpgent-btn-block",onClick:()=>{l((e=>({...e,isProfileFullscreenModalOpen:!0})))}},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMy40NjkiIHZpZXdCb3g9IjAgMCAxNCAxMy40NjkiPgogIDxwYXRoIGlkPSJVbmlvbl8yIiBkYXRhLW5hbWU9IlVuaW9uIDIiIGQ9Ik04NTg4LjE3My0yNzc3LjdhLjU3LjU3LDAsMCwxLS4xNjgtLjQ3NWwuMzUtMi43NzJhLjU2Ni41NjYsMCwwLDEsLjE2Ni0uMzMzbDkuNDU2LTkuMjVzLjAwOS0uMDA5LjAxMy0uMDEzYTEuNzYxLDEuNzYxLDAsMCwxLDEuMjM3LS40NjIsMS43NTksMS43NTksMCwwLDEsMS4yMDkuNTE0bC44NTMuODMzYS4xMTIuMTEyLDAsMCwxLC4wMTYuMDE1LDEuNjgxLDEuNjgxLDAsMCwxLC40NywxLjIwNywxLjY4OCwxLjY4OCwwLDAsMS0uNTI2LDEuMTgzbC05LjQxMiw5LjE3MWEuNTg1LjU4NSwwLDAsMS0uMzMzLjE2MmwtMi44MzkuMzhjLS4wMjUsMC0uMDU0LDAtLjA3OSwwQS42LjYsMCwwLDEsODU4OC4xNzMtMjc3Ny43Wm0xLjMxNS0yLjkxNC0uMjMzLDEuODQ0LDEuOS0uMjUzLDkuMjc2LTkuMDM5YS4wMTIuMDEyLDAsMCwxLDAtLjAwNy41NjEuNTYxLDAsMCwwLC4wMjYtLjc5bC0uODQ5LS44MjlzMCwwLS4wMDYsMGEuNi42LDAsMCwwLS44MS0uMDI2bC0uMDMzLjAzLS42ODcuNjc0LjUzMS41MmEuNTU3LjU1NywwLDAsMSwwLC44MDUuNTkzLjU5MywwLDAsMS0uODI0LDBsLS41MzEtLjUxOFptNS42OTIsMi45YS41Ny41NywwLDAsMS0uNTY5LS41Ny41NjkuNTY5LDAsMCwxLC41NjktLjU3aDYuMjVhLjU2OS41NjksMCwwLDEsLjU3LjU3LjU3MS41NzEsMCwwLDEtLjU3LjU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1ODguMDAxIDI3OTEpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo="})," Edit profile"),a?.isProfileFullscreenModalOpen&&function(t,n={},...o){if("string"!=typeof t)throw new Error("Invalid input parameters");const i=(0,c.applyFilters)(t,n,...o);return Object.values(i).map((function(t,n){if("object"==typeof t)return(0,e.createElement)(r.Fragment,{key:n},t);{const r=t;return(0,e.createElement)(r,{key:n})}}))}("helpgent_response_fullscreen_Profile",{},{setUserProfileState:l,userInfo:i,queryClient:u,userLogoutMutation:d,isLoggingOut:g}),(0,e.createElement)("button",{className:"helpgent-btn helpgent-btn-sm helpgent-btn-light-gray helpgent-btn-block",onClick:e=>async function(e){e.preventDefault(),g||(n?(document.cookie="helpgent_guest_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",h(!0),l({...a,isProfileDrawerOpen:!1})):(await d(),l({...a,isProfileDrawerOpen:!1}),location.reload()))}(e)},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNC43MDQiIHZpZXdCb3g9IjAgMCAxNiAxNC43MDQiPgogIDxwYXRoIGlkPSJQYXRoXzM0ODciIGRhdGEtbmFtZT0iUGF0aCAzNDg3IiBkPSJNNS4xNTMsNS4xNTRhNy4zNTUsNy4zNTUsMCwwLDEsOC44NzUtMS4xN0EuODE3LjgxNywwLDEsMSwxMy4yMTEsNS40YTUuNzE5LDUuNzE5LDAsMSwwLDAsOS45MDkuODE3LjgxNywwLDEsMSwuODE4LDEuNDE1QTcuMzUzLDcuMzUzLDAsMCwxLDUuMTUzLDUuMTU0Wm0xMC4zNCwyLjE3YS44MTcuODE3LDAsMCwxLDEuMTU1LDBsMS41NDUsMS41NDVjLjE0Ni4xNDYuMjg4LjI4OC40LjQxOGExLjY1MiwxLjY1MiwwLDAsMSwuMzI4LjU2MSwxLjYzNCwxLjYzNCwwLDAsMSwwLDEuMDEsMS42NTEsMS42NTEsMCwwLDEtLjMyOC41NjFjLS4xMS4xMy0uMjUyLjI3Mi0uNC40MThsLTEuNTQ1LDEuNTQ1YS44MTcuODE3LDAsMCwxLTEuMTU1LTEuMTU1bDEuMDU2LTEuMDU2aC02LjJhLjgxNy44MTcsMCwwLDEsMC0xLjYzNGg2LjJMMTUuNDkzLDguNDc5QS44MTcuODE3LDAsMCwxLDE1LjQ5Myw3LjMyNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIgZmlsbD0iIzNjM2MzYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="}),g?(0,Br.__)("Signing out","helpgent"):(0,Br.__)("Sign out","helpgent")))))}const Xs=function(t){const{authorData:n}=t,[o,i]=(0,r.useState)({isProfileDrawerOpen:!1});return(0,e.createElement)(Vs,{className:"helpgent-user-action__item"},(0,e.createElement)($r.Tooltip,{text:(0,Br.__)("Show user profile","helpgent"),delay:"0",placement:"bottom"},n.isLoading?(0,e.createElement)("div",{className:"helpgent-image-wrapper"},(0,e.createElement)("span",{className:"helpgent-image-loader"})):(0,e.createElement)("span",{className:"helpgent-profile-toggle",onClick:function(){i((e=>({...e,isProfileDrawerOpen:!0})))}},(0,e.createElement)(Tl,{src:n?.data?.user?.avatar_url,alt:(0,Br.__)("Helpgent Media","helpgent")}))),(0,e.createElement)(Js,{isAdmin:!0,userInfo:n?.data?.user,userProfileState:o,handleCloseProfileDrawer:function(){i((e=>({...e,isProfileDrawerOpen:!1})))}}))};var ep=n(62517),tp=n(94255);class np extends rs.Q{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),rp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return op(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return op(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,es.f8)(n,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();const o=this.hasListeners();o&&ip(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(t),!o||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout();const i=this.computeRefetchInterval();!o||this.currentQuery===r&&this.options.enabled===n.enabled&&i===this.currentRefetchInterval||this.updateRefetchInterval(i)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),n=this.createResult(t,e);return function(e,t,n){return!n.keepPreviousData&&(void 0!==n.placeholderData?t.isPlaceholderData:!(0,es.f8)(e.getCurrentResult(),t))}(this,n,e)&&(this.currentResult=n,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),n}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach((n=>{Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(n),e[n])})})),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,t);return n.isFetchingOptimistic=!0,n.fetch().then((()=>this.createResult(n,t)))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(es.lQ)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),es.S$||this.currentResult.isStale||!(0,es.gn)(this.options.staleTime))return;const e=(0,es.j3)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),e)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!es.S$&&!1!==this.options.enabled&&(0,es.gn)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||ep.m.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const n=this.currentQuery,r=this.options,o=this.currentResult,i=this.currentResultState,a=this.currentResultOptions,l=e!==n,s=l?e.state:this.currentQueryInitialState,p=l?this.currentResult:this.previousQueryResult,{state:c}=e;let h,{dataUpdatedAt:d,error:g,errorUpdatedAt:u,fetchStatus:f,status:m}=c,x=!1,v=!1;if(t._optimisticResults){const o=this.hasListeners(),i=!o&&rp(e,t),a=o&&ip(e,n,t,r);(i||a)&&(f=(0,tp.v_)(e.options.networkMode)?"fetching":"paused",d||(m="loading")),"isRestoring"===t._optimisticResults&&(f="idle")}if(t.keepPreviousData&&!c.dataUpdatedAt&&null!=p&&p.isSuccess&&"error"!==m)h=p.data,d=p.dataUpdatedAt,m=p.status,x=!0;else if(t.select&&void 0!==c.data)if(o&&c.data===(null==i?void 0:i.data)&&t.select===this.selectFn)h=this.selectResult;else try{this.selectFn=t.select,h=t.select(c.data),h=(0,es.pl)(null==o?void 0:o.data,h,t),this.selectResult=h,this.selectError=null}catch(e){this.selectError=e}else h=c.data;if(void 0!==t.placeholderData&&void 0===h&&"loading"===m){let e;if(null!=o&&o.isPlaceholderData&&t.placeholderData===(null==a?void 0:a.placeholderData))e=o.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(m="success",h=(0,es.pl)(null==o?void 0:o.data,e,t),v=!0)}this.selectError&&(g=this.selectError,h=this.selectResult,u=Date.now(),m="error");const b="fetching"===f,y="loading"===m,w="error"===m;return{status:m,fetchStatus:f,isLoading:y,isSuccess:"success"===m,isError:w,isInitialLoading:y&&b,data:h,dataUpdatedAt:d,error:g,errorUpdatedAt:u,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>s.dataUpdateCount||c.errorUpdateCount>s.errorUpdateCount,isFetching:b,isRefetching:b&&!y,isLoadingError:w&&0===c.dataUpdatedAt,isPaused:"paused"===f,isPlaceholderData:v,isPreviousData:x,isRefetchError:w&&0!==c.dataUpdatedAt,isStale:ap(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,es.f8)(n,t))return;this.currentResult=n;const r={cache:!0};!1!==(null==e?void 0:e.listeners)&&(()=>{if(!t)return!0;const{notifyOnChangeProps:e}=this.options,n="function"==typeof e?e():e;if("all"===n||!n&&!this.trackedProps.size)return!0;const r=new Set(null!=n?n:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some((e=>{const n=e;return this.currentResult[n]!==t[n]&&r.has(n)}))})()&&(r.listeners=!0),this.notify({...r,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,tp.wm)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){ns.j.batch((()=>{var t,n,r,o;if(e.onSuccess)null==(t=(n=this.options).onSuccess)||t.call(n,this.currentResult.data),null==(r=(o=this.options).onSettled)||r.call(o,this.currentResult.data,null);else if(e.onError){var i,a,l,s;null==(i=(a=this.options).onError)||i.call(a,this.currentResult.error),null==(l=(s=this.options).onSettled)||l.call(s,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach((({listener:e})=>{e(this.currentResult)})),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function rp(e,t){return function(e,t){return!(!1===t.enabled||e.state.dataUpdatedAt||"error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&op(e,t,t.refetchOnMount)}function op(e,t,n){if(!1!==t.enabled){const r="function"==typeof n?n(e):n;return"always"===r||!1!==r&&ap(e,t)}return!1}function ip(e,t,n,r){return!1!==n.enabled&&(e!==t||!1===r.enabled)&&(!n.suspense||"error"!==e.state.status)&&ap(e,n)}function ap(e,t){return e.isStaleByTime(t.staleTime)}const lp=e.createContext(function(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}()),sp=()=>e.useContext(lp),pp=e.createContext(!1),cp=()=>e.useContext(pp),hp=(pp.Provider,(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))}),dp=t=>{e.useEffect((()=>{t.clearReset()}),[t])},gp=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&as(n,[e.error,r]),up=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},fp=(e,t,n)=>(null==e?void 0:e.suspense)&&((e,t)=>e.isLoading&&e.isFetching&&!t)(t,n),mp=(e,t,n)=>t.fetchOptimistic(e).then((({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)})).catch((t=>{n.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)}));function xp(e){let t="";switch(e){case 404:t=(0,Br.__)("Resource not found","helpgent");break;case 400:t=(0,Br.__)("Invalid Request","helpgent");break;case 422:t=(0,Br.__)("Invalid data","helpgent");break;case 500:t=(0,Br.__)("Internal server error","helpgent");break;default:t=(0,Br.__)("Technical error","helpgent")}return t}function vp(t,n,r){const{data:o,isLoading:i,error:a,isError:s,isFetching:p,isSuccess:c,isRefetching:h}=(d=t,g=async()=>{const e=await async function(e,t){return await ps()({path:e,...t}).then((e=>e)).catch((e=>{throw e}))}(n,r?.parser||{});return r&&"function"==typeof r.afterLoadedData&&r.afterLoadedData(e),e},u=r?.queryConfig||{refetchOnWindowFocus:!1,keepPreviousData:!0,staleTime:1e4},function(t,n){const r=l({context:t.context}),o=cp(),i=sp(),a=r.defaultQueryOptions(t);a._optimisticResults=o?"isRestoring":"optimistic",a.onError&&(a.onError=ns.j.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=ns.j.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=ns.j.batchCalls(a.onSettled)),up(a),hp(a,i),dp(i);const[s]=e.useState((()=>new n(r,a))),p=s.getOptimisticResult(a);if(is(e.useCallback((e=>{const t=o?()=>{}:s.subscribe(ns.j.batchCalls(e));return s.updateResult(),t}),[s,o]),(()=>s.getCurrentResult()),(()=>s.getCurrentResult())),e.useEffect((()=>{s.setOptions(a,{listeners:!1})}),[a,s]),fp(a,p,o))throw mp(a,s,i);if(gp({result:p,errorResetBoundary:i,useErrorBoundary:a.useErrorBoundary,query:s.getCurrentQuery()}))throw p.error;return a.notifyOnChangeProps?p:s.trackResult(p)}((0,es.vh)(d,g,u),np));var d,g,u;return{data:a||i?null:o,isLoading:i,errorMessage:a?xp(a?a?.data?.status:""):"",isError:!!s,isFetching:p,isSuccess:c,isRefetching:h}}Fr.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    height: 100%;
    .helpgent-summary-header{
        padding: 32px 40px;
        font-size: 22px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
        border-bottom: 1px solid #ededed;
        @media only screen and (max-width: 757px){
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
    .helpgent-summary-content{
        height: 500px;
        padding: 30px;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--helpgent-color-bg-deep);
            transition: var(--helpgent-transition);
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: var(--helpgent-color-primary);
        }
        .helpgent-summary__item{
            max-width: 650px;
            margin: 0 auto;
            .helpgent-conversation__top{
                align-items: center;
            }
            .helpgent-conversation__title{
                h4{
                    margin: 0;
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--helpgent-color-dark);
                    p,
                    strong{
                        font-size: inherit;
                        font-weight: inherit;
                        margin: 0;
                    }
                }
            }
            .helpgent-summary-label{
                display: block;
                margin: 14px 0 20px;
                font-size: 14px;
                color: var(--helpgent-color-light-gray);

            }
            &:not(:last-child){
                margin-bottom: 60px;
            }
        }
    }
    .helpgent-summary__element-list{
        display: flex;
        flex-direction: column;
        max-height: 380px;
        padding-right: 20px;
        @media only screen and (max-width: 575px){
            width: 100%;
        }
        &.helpgent-progress-horizontal{
            height: auto;
            flex-direction: row;
            padding-right: 0;
        }
        .helpgent-passed-time{
            margin-top: 16px;
            span{
                display: block;
                font-weight: 400;
                font-size: 12px;
                color: var(--helpgent-color-light-gray);
            }
        }
        .helpgent-answer-text{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
        .helpgent-answer-long_text,
        .helpgent-answer-short_text{
            p{
                font-size: 16px;
                color: var(--helpgent-color-gray);
                line-height: 1.625;
            }
        }
        &.helpgent-progress-horizontal{
            .helpgent-no-pagination-answer{
                width: 100%;
                .helpgent-bar-chart-wrapper{
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 21px;
                    max-width: 650px;
                    overflow-x: auto;
                    overflow-y: hidden;
                    padding-bottom: 20px;
                    &::-webkit-scrollbar {
                        height: 5px;
                    }
                    &::-webkit-scrollbar-track {
                        background: #f1f1f1;
                        border-radius: 3px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: var(--helpgent-color-bg-deep);
                        transition: var(--helpgent-transition);
                        border-radius: 3px;
                    }
                    &::-webkit-scrollbar-thumb:hover {
                        background: var(--helpgent-color-primary);
                    }
                }
                .helpgent-no-pagination-answer__average:empty{
                    display: none;
                }
                .helpgent-bar-chart{
                    flex: 1;
                    .helpgent-progress-bar-vertical{
                        width: 100%;
                        min-width: 40px;
                        height: 150px;
                        background: var(--helpgent-color-border-light);
                        border-radius: 4px;
                        display: flex;
                        align-items: flex-end;
                        overflow: hidden;
                        .helpgent-progress-bar__status{
                            width: 100%;
                            border-radius: 0 0 4px 4px;
                        }
                    }
                    .helpgent-bar-chart__statistics-percentage{
                        display: block;
                        text-align: center;
                        color: var(--helpgent-color-dark);
                        font-size: 14px;
                        font-weight: 500;
                        margin-bottom: 7px;
                        white-space: nowrap;
                    }
                    .helpgent-bar-chart__statistics-response-count{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 5px;
                        margin-bottom: 7px;
                        span{
                            font-size: 12px;
                            color: var(--helpgent-color-light-gray);
                        }
                        svg{
                            width: 9px;
                            path{
                                fill: var(--helpgent-color-extra-light);
                            }
                        }
                    }
                    .helpgent-bar-chart__count{
                        font-size: 14px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        color: var(--helpgent-color-gray);
                        margin-top: 9px;
                        svg{
                            width: 12px;
                            path{
                                fill: var(--helpgent-color-light-gray);
                            }
                        }
                    }
                }
                .helpgent-no-pagination-answer__progress-text{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        font-size: 14px;
                        color: var(--helpgent-color-light-gray);
                    }
                }
            }
        }
        .helpgent-info-answer-content,
        .helpgent-open-ended-answer-content{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }

        .helpgent-progress-single{
            &:not(:last-child){
                margin-bottom: 24px;
            }
            &--image{
                display: flex;
                align-items: center;
            }
            .helpgent-progress-single__info{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 12px;
            }
            .helpgent-progress-single__label{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
            }
            .helpgent-progress-single__statistics{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 25px;
                width: 195px;
                .helpgent-progress-single__statistics-response-count{
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    svg {
                        width: 9px;
                        path{
                            fill: var(--helpgent-color-extra-light);
                        }
                    }
                    font-size: 13px;
                    color: var(--helpgent-color-light-gray);
                }
                .helpgent-progress-single__statistics-percentage{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-dark);
                }
            }
            .helpgent-progress-bar-horizontal{
                height: 15px;
                border-radius: 4px;
                overflow: hidden;
                .helpgent-progress-bar__status{
                    border-radius: 4px 0 0 4px;
                }
            }
            .helpgent-progress-single__contents{
                flex: 1;
            }
            .helpgent-progress-single__img{
                width: 50px;
                height: 50px;
                margin-right: 15px;
                flex: none;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }
            }
        }
    }
    .helpgent-conversation__icon{
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 14px;
        background-color: var(--helpgent-color-primary);
        flex: none;
        svg{
            width: 16px;
            height: 16px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }

    .helpgent-summery-pro{
        font-size: 14px;
        font-weight: 500;
        padding: 8px 15px;
        border-radius: 10px;
        width: fit-content;
        color: var(--helpgent-color-success);
        background-color: var(--helpgent-color-bg-badge-success)
    }
`,Fr.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid #EDEDED;
    @media only screen and (max-width: 991px){
        flex-wrap: wrap;
    }
    @media only screen and (max-width: 576px){
        flex-wrap: wrap;
    }
    .helpgent-header-top-user-loader{
        min-height: 50px;
        display: flex;
        align-items: center;
        svg{
            width: 20px;
            height: 20px;
            margin: 0;
            &.components-spinner circle, 
            &.components-spinner path{
                stroke-width: 2px;
            }
        }
    }
    .helpgent-form-info-view{
        align-items: center;
        .helpgent-image-wrapper{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 14px;
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
    }
    .helpgent-form-info-color-box{
        display: block;
        width: 50px;
        height: 50px;
        margin-right: 14px;
        border-radius: 50%;
    }
    .helpgent-form-info-title{
        display: flex;
        align-items: center;
        font-size: 22px;
        font-weight: 600;
        margin: 0;
        line-height: 1.5;
        color: var(--helpgent-color-dark);
    }
    .helpgent-user-view{
        align-items: center;
        @media only screen and (max-width: 400px){
            flex-wrap: wrap;
        }
    }
    .helpgent-user-view__icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 14px;
        background-color: var(--helpgent-color-dark);
    }
    .helpgent-user-view__media{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 14px;
        flex: none;
        .helpgent-image-wrapper{
            width: 100%;
            height: 100%;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .helpgent-user-view__name-wrap{
        display: flex;
        align-items: center;
        @media only screen and (max-width: 575px){
            flex-wrap: wrap;
            flex-direction: column;
            align-items: flex-start;
        }
    }
    
    .helpgent-form-title{
        display: block;
        font-size: 15px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-user-view__name{
        display: flex;
        align-items: center;
        font-size: 22px;
        font-weight: 600;
        margin: 0;
        line-height: 1.5;
        color: var(--helpgent-color-dark);
    }
    .helpgent-user-verification{
        position: relative;
        top: 1px;
        line-height: 1;
        margin-left: 8px;
        display: flex;
        align-items: center;
        gap: 5px;
        flex: none;
        span{
            font-size: 13px;
            font-weight: 500;
            line-height: 1.25;
            color: var(--helpgent-color-success);
        }
        &.helpgent-unverified{
            span{
                color: var(--helpgent-color-extra-light);
            }
            .helpgent-user-verification__icon{
                background-color: var(--helpgent-color-extra-light);
            }
        }
    }

    .helpgent-user-verification__icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--helpgent-color-success);
        svg{
            width: 8px;
            height: 8px;
        }
    }
    .helpgent-user-view__email{
        font-size: 15px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-warning-text{
        font-size: 15px;
        font-weight: 400;
        color: var(--helpgent-color-warning);
    }
    .helpgent-user-action{
        align-items: center;
        gap: 15px;
        @media only screen and (max-width: 576px){
            width: 100%;
            justify-content: center;
            margin-top: 10px;
        }
        &.helpgent-user-action--search-active{
            width: 100%;
            .helpgent-user-action__item{
                margin: 0;
            }
        }
        .helpgent-user-action__search{
            width: 100%;
            display: flex;
            align-items: center;
            @media only screen and (max-width: 576px){
                width: auto;
            }
        }
        .helpgent-user-action__search-field{
            flex: 1;
            input{
                font-size: 14px;
                width: 100%;
                min-height: 52px;
                padding: 0;
                border: 0 none;
                box-shadow: 0 0;
                color: var(--helpgent-color-gray);
                background: none;
                &:focus{
                    outline: none;
                }
            }
        }
    }
    .helpgent-user-action__search-toggle{
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-gray);
            }
        }
    }
    .helpgent-user-action__search-toggle{
        line-height: 0;
        cursor: pointer;
    }
    .helpgent-user-action__item{
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: var(--helpgent-color-gray);
        white-space: nowrap;
        svg{
            flex: none;
        }
    }

    .helpgent-conversation-tag{
        padding-left: 25px;
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px 20px;
        line-height: 33px;
        &:before{
            position: absolute;
            content: '';
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 18px;
            background: var(--helpgent-color-bg-gray);
        }
        @media only screen and (max-width: 575px){
            padding-left: 0;
            flex-wrap: wrap;
            &:before{
                content: none;
            }
        }
    }
    .helpgent-conversation-tag__add{
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-light-gray);
        text-decoration: none;
        flex: none;
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }
    .helpgent-conversation-tag__list{
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
        max-width: 600px;

    }
    .helpgent-conversation-tag__item{
        position: relative;
        padding: 0 2px 0 5px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        line-height: normal;
        min-height: 14px;
        font-size: 10px;
        font-weight: 600;
        color: var(--helpgent-color-gray);
        text-transform: uppercase;
        word-wrap: break-word;
        word-break: break-word;
    }
    .helpgent-conversation-tag__close{
        padding: 4px 3px 4px 4px;
        line-height: 1;
        cursor: pointer;
        /* svg{
            width: 12px;
            height: 12px;
        } */
        &:hover{
            svg{
                path{
                    fill: var(--helpgent-color-danger);
                }
            }
        }
    }

`,Fr.div`
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 30px 0;
    .helpgent-response-answer{
        .helpgent-conversation{
            margin-bottom: 55px;
        }
    }
    .helpgent-response-message{
        display: flex;
        flex-direction: column-reverse;
        .helpgent-loading{
            display: block;
            text-align: center;
        }
    }
    .helpgent-conversation__content-box{
        &.helpgent-conversation-focused{
            .helpgent-conversation__content{
                position: relative;
                border-radius: 2px 14px 14px 2px;
                box-shadow: 0 2px 20px rgba(0,0,0,.10);
                background-color: var(--helpgent-color-white);
                &:before{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 2px;
                    height: 100%;
                    border-radius: 10px;
                    content: '';
                    background-color: var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-conversation__content-box-inner{
        flex: 1;
    }
    .helpgent-conversation-meta{
        display: flex;
        align-items: flex-start;
        margin: -5px -5px 8px;
    }
    .helpgent-conversation-meta__date{
        font-size: 12px;
        font-weight: 500;
        margin: 5px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-conversation-meta__username{
        font-size: 15px;
        font-weight: 500;
        margin: 5px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-conversation{
        padding: 0 30px;
        max-width: 600px;
        &.helpgent-conversation-trash{
            opacity: .5;
            user-select: none;
            cursor: not-allowed;
            p{
                color: var(--helpgent-color-dark);
            }
        }
        &.helpgent-conversation-answer{
            /* display: flex;
            flex-direction: column;
            width: 100%; */
            &.helpgent-conversation-right{
                margin-left: auto;
                .helpgent-conversation__top{
                    justify-content: flex-end;
                }
                .helpgent-conversation__icon{
                    order: 2;
                    margin-left: 14px;
                }
                .helpgent-conversation__title{
                    text-align: right;
                }
                .helpgent-conversation-pro{
                    margin-left: auto;
                }
            }
        }
        &.helpgent-conversation-message{
            display: flex;
            flex-direction: column;
            width:100%;
            &:not(:last-child){
                margin-top: 50px;
            }
            &.helpgent-conversation-right,
            &.helpgent-conversation-left{
                flex-direction: row;
                align-items: flex-start;
            }
            &.helpgent-conversation-right{
                align-items: flex-start;
                margin-left: auto;
                box-sizing: border-box;
                .helpgent-conversation__author-image{
                    order: 2;
                    margin-left: 15px;
                }
                .helpgent-conversation-meta{
                    justify-content: flex-end;
                }
                .helpgent-conversation-dropdown{
                    order: -1;
                }
                .helpgent-conversation__content {
                    &.helpgent-conversation__content-inline{
                        border-radius: 14px 0 14px 14px;
                    }
                }
                .helpgent-dropdown__toggle{
                    margin-right: 5px;
                }
            }
            .helpgent-conversation__content{
                &.helpgent-conversation__content-inline.helpgent-conversation__content-video{
                    padding: 0;
                    &.helpgent-conversation__content--deleted{
                        padding: 14px 18px;
                    }
                }
            }
            .helpgent-conversation__author-image{
                width: 40px;
                height: 40px;
                margin-right: 15px;
                border-radius: 50%;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
            .helpgent-conversation__content{
                margin-top: 0;
            }
            .helpgent-conversation-dropdown{
                margin-top: 30px;
            }
            .helpgent-conversation__icon{
                margin-left: 14px;
                margin-right: 0;
            }
            .helpgent-conversation__content-box{
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
                margin-left: 5px;
                flex-wrap: wrap;
                flex: 1;
            }
            .helpgent-conversation__content{
                flex: 1;
                &.helpgent-conversation__content-inline{
                    border-radius: 0 14px 14px 14px;
                }
                &.helpgent-conversation__content-editable{
                    background: #fff;
                    box-shadow: 0 2px 20px rgba(0,0,0, 0.2);
                    border-radius: 14px;
                    textarea{
                        background: #fff;
                        padding: 0;
                    }
                }
                &.helpgent-conversation__content-editable + .helpgent-conversation-edit-action{
                    flex: 0 0 100%;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    span{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                        position: relative;
                        a{
                            text-decoration: none;
                            color: var(--helpgent-color-primary);
                        }
                        &:not(:last-child):before{
                            content: '';
                            position: absolute;
                            width: 4px;
                            height: 4px;
                            right: -8px;
                            top: 50%;
                            transform: translateY(-50%);
                            border-radius: 50%;
                            background: var(--helpgent-color-gray);
                        }
                    }
                }
            }

            .helpgent-conversation-dropdown{
                margin-top: 30px;
                .helpgent-dropdown__content{
                    right: 0;
                }
            }
            .helpgent-dropdown__toggle{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 6px;
                cursor: pointer;
                background-color: transparent;
                margin-left: 5px;
                &:hover{
                    background-color: var(--helpgent-color-bg-light);
                }
            }
            .helpgent-dropdown-icon{
                line-height: 1;
            }
            .helpgent-conversation__title{
                order: -1;
                text-align: right;
            }
        }
        &.conversation-has-parent{
            .helpgent-conversation__content{
                p{
                    margin-top: 8px;
                }
            }
        }
        .helpgent-content-loading{
            min-height: 300px;
        }

        .helpgent-conversation__icon{
            position: relative;
            margin-right: 0;
            margin-right: 14px;
            .helpgent-badge{
                position: absolute;
                top: -4px;
                left: -6px;
                font-size: 10px;
                font-weight: 700;
                width: 18px;
                height: 18px;
                border: 2px solid var(--helpgent-color-white);
                box-sizing: border-box;
            }
        }
    }
    .helpgent-conversation__content-editBox{
        width: 100%;
    }
    .helpgent-conversation__content{
        &.helpgent-conversation__content-edit{
            padding: 0;
        }
    }
    .helpgent-conversation__content-edit{
        display: flex;
        align-items: center;
        padding: 15px 20px;
        textarea{
            border: 0 none;
            border-radius: 14px;
            padding: 0 18px;
            resize: none;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            min-height: 25px;
            margin: 0;
            width: 100%;
            color: var(--helpgent-color-gray);
            background-color: var(--helpgent-color-bg-light);
            &:focus{
                outline: 0 none;
                border: 0 none;
                box-shadow: 0 0;
            }
        }
    }
    .helpgent-conversation__title{
        h4{
            font-size: 20px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin: 0;
            p,
            strong{
                font-size: inherit;
                font-weight: inherit;
                margin: 0;
            }
        }
    }
    .helpgent-conversation__date{
        font-size: 12px;
        font-weight: 500;
        margin-top: 6px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-single-select__option{
        padding: 13px 15px 13px 45px;
        border-radius: 10px 0 0 10px;
    }
    .helpgent-conversation__content{
        border-radius: 14px;
        margin-top: 20px;
        p{
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            margin: 0;
            color: var(--helpgent-color-gray);
        }
        a{
            font-size: 14px;
            font-weight: 400;
            transition: .3s;
            color: var(--helpgent-color-dark);
            &:hover{
                color: var(--helpgent-color-info);
            }
        }

        &.helpgent-conversation__content-dropdown,
        &.helpgent-conversation__content-single_select,
        &.helpgent-conversation__content-yes_no,
        &.helpgent-conversation__content-open_ended_screen,
        &.helpgent-conversation__content-multi_select,
        &.helpgent-conversation__content-open_ended_video,
        &.helpgent-conversation__content-video{
            &:not(.helpgent-conversation__content--deleted){
                background: none;
                padding-left: 0;
                padding-right: 0;
            }
        }
        &.helpgent-conversation__content--deleted{
            p{
                font-style: italic;
            }
        }
        &.helpgent-conversation__content-multi_select{
            .helpgent-multi-select__option{
                max-width: inherit;
                box-sizing: border-box;
                border-radius: 10px;
            }
        }
        &.helpgent-conversation__content-range_slider{
            padding: 0;
        }

        &.helpgent-conversation__content-open_ended_voice{
            max-width: 460px;
        }

        &.helpgent-conversation__content-reply,
        &.helpgent-conversation__content-forward,
        &.helpgent-conversation__content-promoter_score {
            background-color: var(--helpgent-color-bg-light);
            padding: 20px;
            .helpgent-answer-text{
                padding: 0;
            }
        }
        &.helpgent-conversation__content-promoter_score{
            border-radius: 12px;
            &.helpgent-conversation-free{
                background-color: transparent;
                padding: 0;
            }
            .helpgent-promoter-score__list{
                margin: 0;
                @media only screen and (max-width: 480px){
                    gap: 0;
                }
            }
            .helpgent-promoter-score__single{
                @media only screen and (max-width: 1600px){
                    width: 30px;
                    height: 30px;
                }
                @media only screen and (max-width: 575px){
                    width: 20px;
                    height: 20px;
                    font-size: 11px;
                }
                @media only screen and (max-width: 480px){
                    margin: 0 1px;
                    width: 16px;
                    height: 16px;
                    font-size: 9px;
                }
            }
        }
        &.helpgent-conversation__content-picture_select{
            .helpgent-select-picture-single{
                background: var(--helpgent-color-bg-light);
                padding: 12px 20px;
                border-radius: 10px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }
                display: flex;
                align-items: center;
                gap: 12px;
                .helpgent-picture-select-badge{
                    min-width: 22px;
                    .helpgent-select-picture-single__selected{
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                        background: var(--helpgent-color-primary);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        svg{
                            width: 10px;
                            height: 10px;
                            path{
                                fill: #fff;
                            }
                        }
                    }
                }
                .helpgent-select-picture-single__img{
                    width: 40px;
                    height: 40px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 8px;
                        box-shadow: 0 0 4px rgba(0,0,0,0.2);
                    }
                }
                .helpgent-select-picture-single__caption{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-gray);
                }
                &--selected{
                    .helpgent-select-picture-single__caption{
                        font-weight: 500;
                        color: var(--helpgent-color-dark);
                    }
                }
            }
        }
        &.helpgent-conversation__content-map{
            .helpgent-conversation-map-wrapper{
                width: 650px;
                height: 344px;
                border-radius: 16px;
            }
        }

        .helpgent-conversation-parent--reply{
            .helpgent-conversation-parent__label{
                display: flex;
                align-items: center;
                gap: 8px;
                color: var(--helpgent-color-light-gray);
                font-size: 13px;
                margin-bottom: 20px;
                svg{
                    width: 11px;
                    path{
                        fill: var(--helpgent-color-light-gray);
                    }
                }
            }
            .helpgent-conversation-parent__content{
                position: relative;
                cursor: pointer;
                &::before{
                    position: absolute;
                    content: '';
                    width: 30px;
                    height: calc(100% - 32px);
                    left: 0;
                    top: 10px;
                    border: 2px solid #c7c7c7;
                    border-right: 0;
                    border-bottom: 0;
                    border-radius: 12px 0 0 0;
                }
            }

            .helpgent-conversation-parent__content-top{
                display: flex;
                align-items: center;
                gap: 8px;
                padding-left: 42px;
            }
            .helpgent-conversation-parent__author{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                img{
                    border-radius: inherit;
                    width: 100%;
                }
            }
            .helpgent-conversation-parent__author-info{
                display: flex;
                align-items: center;
                gap: 8px;
                .helpgent-author-name{
                    font-size: 15px;
                    font-weight: 500;
                    color: #030308;
                }
                .helpgent-conversation-time-meta{
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--helpgent-color-light-gray);
                }
            }
            .helpgent-conversation-parent__content-bottom{
                padding-left: 42px;
                margin-top: 12px;
                padding-bottom: 18px;
                border-bottom: 1px solid var(--helpgent-color-bg-deep);
            }
            .helpgent-conversation-parent__attachment-info{
                span{
                    display: block;
                }
            }
        }
        .helpgent-conversation-parent__attachment{
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .helpgent-conversation-parent__attachment-video,
        .helpgent-conversation-parent__attachment-audio{
            margin-top: 15px;
        }
        .helpgent-conversation-parent__attachment-audio{
            .helpgent-voice-conversation{
                background-color: var(--helpgent-color-bg-gray);
            }
        }
        &.helpgent-conversation__content-forward{
            .helpgent-answer-text p{
                border-bottom: 1px solid #D5D5D5;
                margin-bottom: 20px;
                padding-bottom: 16px;
                word-wrap: break-word;
                word-break: break-word;
            }
        }
        .helpgent-conversation-parent--forward {
            .helpgent-conversation-parent__label{
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .helpgent-conversation-parent__content{
                border-left: 2px solid #c7c7c7;
                padding-left: 16px;
                margin-top: 15px;
            }
            .helpgent-conversation-parent__attachment-info{
                display: flex;
                align-items: center;
            }
            .helpgent-attachment-name{
                display: inline-block;
            }
        }
        .helpgent-conversation-parent__attachment-icon{
            width: 24px;
            height: 24px;
            svg{
                width: 24px;
                height: 24px;
                path{
                    fill: var(--helpgent-color-light-gray)
                }
            }
        }
        .helpgent-conversation-parent__attachment-info{
            .helpgent-attachment-name{
                font-size: 13px;
                font-weight: 500;
                margin-right: 4px;
                color: var(--helpgent-color-dark);
            }
            .helpgent-attachment-size{
                font-size: 11px;
                color: var(--helpgent-color-light-gray);
            }
        }
    }
    .helpgent-conversation-pro{
        font-size: 14px;
        font-weight: 500;
        padding: 8px 15px;
        border-radius: 10px;
        width: fit-content;
        color: var(--helpgent-color-success);
        background-color: var(--helpgent-color-bg-badge-success)
    }

    .helpgent-rangeControl{
        pointer-events: none;
        margin: 40px 0 0;
        .components-simple-tooltip{
            opacity: 1 !important;
            color: var(--helpgent-color-white);
            background-color: var(--helpgent-color-primary);
            &:after{
                border-top-color: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-promoter-score__list{
        margin-bottom: 0;
        li{
            margin: 0 3px;
            background-color: var(--helpgent-color-white);
            border-color: var(--helpgent-color-white);
        }
    }
    .helpgent-choice-list{
        .helpgent-choice-item{
            padding: 12.86px 20px;
            border-radius: 10px;
            background-color: var(--helpgent-color-bg-light);
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
        .helpgent-single-select__option{
            max-width: 100%;
            padding: 12.86px 20px 12.86px 45px;
        }
    }
    .helpgent-single-select,
    .helpgent-choice-item{
        height: 44px;
        background: var(--helpgent-color-bg-light);
        display: flex;
        align-items: center;
        border-radius: 10px;
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
    .helpgent-choice-item{
        padding-left: 20px;
        padding-right: 20px;
        .components-form-toggle{
            line-height: 0;
            .components-form-toggle__input{
                pointer-events: none;
            }
        }
    }
    .helpgent-dropdown-answer{
        position: relative;
        height: 44px;
        background: var(--helpgent-color-bg-light);
        display: flex;
        align-items: center;
        border-radius: 10px;
        &:not(:last-child){
            margin-bottom: 10px;
        }
        .helpgent-dropdown-answer__selected{
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background-color: var(--helpgent-color-primary);
            &+.helpgent-dropdown-answer__label{
                font-weight: 500;
                color: var(--helpgent-color-dark);
                padding-left: 35px;
            }
        }
        svg{
            width: 10px;
            height: 10px;
            path{
                color: var(--helpgent-color-white);
            }
        }
        .helpgent-dropdown-answer__label{
            padding-left: 35px;
        }
    }
    .helpgent-rating-star-list{
        display: flex;
        align-items: center;
        padding: 20px;
        border-radius: 12px;
        background-color: var(--helpgent-color-bg-light);
        .helpgent-rating-star{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 8px;
            margin-inline-end: 6px;
            background-color: var(--helpgent-color-bg-deep);
            @media only screen and (max-width: 575px){
                width: 22px;
                height: 22px;
                border-radius: 4px;
            }
            @media only screen and (max-width: 480px){
                width: 18px;
                height: 18px;
                border-radius: 3px;
            }
            svg{
                path{
                    fill: var(--helpgent-color-white);
                }
                @media only screen and (max-width: 575px){
                    width: 12px;
                    height: 12px;
                }
                @media only screen and (max-width: 480px){
                    width: 10px;
                    height: 10px;
                }
            }
            &.helpgent-active{
                background-color: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-conversation__choice{
        margin-top: 20px;
    }

    .helpgent-conversation__content-short_text,
    .helpgent-conversation__content-long_text{
        word-break: break-word;
        word-wrap: break-word;
    }
    .helpgent-conversation{
        &.helpgent-conversation-voice{
            max-width: 470px;
        }
    }
`,Fr.div`
    position: relative;
    margin: 0 20px 20px 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    margin-top: auto;
    background-color: var(--helpgent-color-bg-gray);
    &.helpgent-disabled{
        .helpgent-conversation-action__main{
            pointer-events: none;
            opacity: .50;
        }
    }
    .helpgent-back-to-action{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -10px;
        box-shadow: 0 5px 30px rgba(0,0,0,.10);
        cursor: pointer;
        background-color: var(--helpgent-color-white);
        svg{
            width: 12px;
            height: 12px;
            fill: var(--helpgent-color-gray);
        }
    }
    .helpgent-conversation-action__main{
        text-align: center;
    }
    .helpgent-conversation-action__title{
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 20px;
        color: var(--helpgent-color-gray);
        @media only screen and (max-width: 1199px){
            margin: 0 0 15px;
        }
        @media only screen and (max-width: 480px){
            text-indent: 0;
        }
    }
    .helpgent-conversation-action__list{
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
        @media only screen and (max-width: 991px){
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }
        .helpgent-btn{
            min-height: 48px;
            border-radius: 12px;
            @media only screen and (max-width: 1199px){
                min-height: 36px;
                border-radius: 8px;
                padding: 0 15px;
            }
            @media only screen and (max-width: 480px){
                text-indent: -9999px;
                gap: 0;
            }
            &.helpgent-btn-screen-recording.--is-recording{
                text-indent: 0;
            }
            &:hover{
                svg{
                    path{
                        fill: var(--helpgent-color-white);
                    }
                }
            }
            svg{
                width: 20px;
                height: 20px;
                margin-right: 10px;
                @media only screen and (max-width: 480px){
                    margin-right: 0;
                    pointer-events: none;
                }
                path{
                    fill: var(--helpgent-color-light-gray);
                    transition: var(--helpgent-transition);
                }
            }
            @media only screen and (max-width: 991px){
                margin: 0;
            }
            .helpgent-btn{
                text-indent: 0;
                svg{
                    margin-right: 10px;
                }
            }
        }
    }
    .helpgent-reply-input{
        width: 100%;
        margin-right: 10px;
    }
    .helpgent-reply-text-send{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        min-width: 50px;
        border-radius: 50%;
        background-color: var(--helpgent-color-primary);
        flex: 1;
        svg{
            width: 20px;
            height: 20px;
            path{
                fill: var(--helpgent-color-white)
            }
        }
        &[disabled] {
            opacity: 50%;
            pointer-events: none;
        }
    }
`,Fr.div`

`,Fr.div`
    width: 100%;
    .helpgent-reply-text{
        width: 100%;
        font-family: "Inter";
        min-height: 50px;
        border-radius: 26px;
        padding: 15px 22px;
        border: 0 none;
        box-shadow: 0 0;
        resize: none;
        overflow: hidden;
        background-color: var(--helpgent-color-white);
        box-sizing: border-box;
    }
`,Fr.div`
    width: 100%;
    .helpgent-reply-voice{
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 52px;
        border-radius: 26px;
        padding: 0px 30px 0px 25px;
        flex: 1;
        width: 100%;
        background-color: var(--helpgent-color-bg-general);
    }
    .helpgent-reply-voice__toggle{
        min-width: 24px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--helpgent-color-dark);
        text-decoration: none;
        color: var(--helpgent-color-dark);
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-audio-range{
        position: relative;
        display: block;
        width: 100%;
        min-height: 10px;
        border-radius: 100px;
        margin: 0px 25px;
        background-color: var(--helpgent-color-bg-deep);
        .helpgent-audio-range__inner{
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 10px;
            display: block;
            border-radius: 100px 0px 0px 100px;
            background-color: var(--helpgent-color-dark);
        }
    }
    .helpgent-voice-timer{
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        color: var(--helpgent-color-dark);
    }
    .helpgent-reply-text-send{
        flex: inherit;
    }
`,Fr.div`
    width: 100%;
    align-items: flex-end;
    .helpgent-reply-box{
        flex: 1;
        margin-right: 10px;
    }
    .helpgent-reply-box__top{
        display: flex;
        align-items: center;
        padding: 12px 25px;
        border-radius: 16px 16px 0 0;
        background-color: var(--helpgent-color-bg-deep);

        svg{
            margin-right: 8px;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }
    .helpgent-replying-to{
        font-size: 15px;
        font-weight: 400;
        color: var(--helpgent-color-gray);
        strong{
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
    }
    .helpgent-reply-box__input{
        textarea{
            width: 100%;
            border: 0 none;
            min-height: 50px;
            padding: 15px 25px;
            border-radius: 0 0 16px 16px;
            resize: none;
            background-color: var(--helpgent-color-white);
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    .helpgent-reply-text-send{
        flex: initial;
    }
`,Fr.div`
    padding: 12px;
    border-radius: 12px;
    background-color: var(--helpgent-color-bg-light);
    &.helpgent-media-disabled{
        cursor: not-allowed;
        .helpgent-voice-conversation__download,
        .helpgent-video-conversation__expander,
        .helpgent-voice-conversation__toggle{
            pointer-events: none;
        }
    }
    .helpgent-voice-conversation__player{
        align-items: center;
        height: 42px;
        padding: 3px 10px;
        background-color: #fff;
        border-radius: 10px;
    }
    .helpgent-voice-conversation__toggle{
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--helpgent-color-primary);
        margin-right: 10px;
        svg{
            width: 9px;
            height: 9px;
            path{
                fill: #fff;
            }
        }
    }
    .helpgent-audio-range{
        flex: 1;
    }
    .helpgent-voice-conversation__control{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        .helpgent-voice-conversation__time-meta{
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-light-gray);
        }
        .helpgent-voice-conversation__download{
            width: 28px;
            height: 28px;
            background: #fff;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--helpgent-transition);
            svg{
                width: 12px;
                height: 12px;
                transition: var(--helpgent-transition);
            }
            &:hover{
                background: var(--helpgent-color-primary);
                svg path{
                    fill: #fff;
                }
            }
        }
    }
`,Fr.div`
    &.helpgent-media-disabled{
        cursor: not-allowed;
        .helpgent-video-conversation__download,
        .helpgent-video-conversation__toggle{
            pointer-events: none;
        }
    }
    &.helpgent-video-conversation{
        position: relative;
        border-radius: 20px;
        text-align: center;
        display: flex;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.3);
            border-radius:20px;
        }
        video{
            border-radius: 20px;
            width: 100%;
            height: 100%;
            max-height: 350px;
        }
        .helpgent-video-conversation__toggle{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #fff;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            opacity: 0;
            transition: var(--helpgent-transition);
            svg{
                width: 20px;
                height: 20px;
                path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-video-conversation__download{
            position: absolute;
            right: 15px;
            bottom: 15px;
            width: 28px;
            height: 28px;
            border-radius: 7px;
            background: #fff;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--helpgent-transition);
            svg{
                width: 12px;
                height: 12px;
                path{
                    fill: var(--helpgent-color-light-gray);
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
        .helpgent-video-conversation__visualization{
            position: absolute;
            right: 20px;
            top: 20px;
            z-index: 1;
            svg{
                width: 18px;
                height: 18px;
                path{
                    fill: #fff;
                    transition: var(--helpgent-transition);
                }
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        &:hover{
            .helpgent-video-conversation__toggle{
                visibility: visible;
                opacity: 1;
            }
        }
    }
    .helpgent-voice-conversation__player{
        align-items: center;
        height: 42px;
        border-radius: 10px;
        padding: 10px;
        background-color: var(--helpgent-color-white);
    }
    .helpgent-voice-conversation__toggle{
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--helpgent-color-primary);
        svg{
            width: 9px;
            height: 9px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-audio-range{
        flex: 1;
    }
`,Fr.div`

`,Fr.div`
    padding: 0 30px 30px;
    .helpgent-conversation-delete__label{
        font-size: 16px;
        font-weight: 500;
        margin: 0 0 25px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-user-block{
        background: var(--helpgent-color-bg-light);
        padding: 20px 18px;
        border-radius: 10px;
    }
`,Fr.div`

    .helpgent-conversation-forward__reply,
    .helpgent-conversation-forward__user-input{
        textarea,
        input{
            width: 100%;
            border-radius: 10px;
        }
    }
    .helpgent-conversation-forward__list-group{
        max-height: 170px;
        overflow-y: auto;
        padding-right: 10px;
        margin-right: -10px;
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--helpgent-color-bg-deep);
            transition: var(--helpgent-transition);
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: var(--helpgent-color-primary);
        }
    }

    .helpgent-conversation-forward__list-single{
        .helpgent-btn-primary:not(:hover):not(:active):not(.has-background){
            &[disabled]{
                color: var(--helpgent-color-primary);
                background-color: transparent;
                cursor: not-allowed;
            }
        }
    }
    .helpgent-conversation-forward__attachment{
        gap: 10px;
        margin-bottom: 20px;
        .helpgent-conversation-forward__attachment-content{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            border-radius: 12px;
            background-color: var(--helpgent-color-bg-deep);
            position: relative;
            svg{
                width: 24px;
                height: 24px;
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
            video{
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: inherit;
            }
            .helpgent-media-conversation__toggle{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background: #fff;
                z-index: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                visibility: hidden;
                opacity: 0;
                transition: var(--helpgent-transition);
                cursor: pointer;
                svg{
                    width: 14px;
                    height: 14px;
                    path{
                        fill: var(--helpgent-color-primary);
                    }
                }

                &.helpgent-media-conversation__toggle--audio{
                    visibility: visible;
                    opacity: 1;
                }
            }
            &:hover{
                .helpgent-media-conversation__toggle{
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        .helpgent-conversation-forward__reply{
            flex: 1;
            margin-bottom: 0 !important;
            textarea{
                height: 100px !important;
            }
        }
    }
`,Fr.div`

    padding: 20px;
    border-radius: 12px;
    background-color: var(--helpgent-color-bg-light);

`;const bp=Fr.div`
        width: 370px;
        position: absolute;
        z-index: 999;
        left: 0;
        top: 44px;
    .helpgent-conversation-tag-add{
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0 0 6px rgba(0,0,0,0.15);
        background: #fff;
        .helpgent-btn-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            background-color: var(--helpgent-color-primary);
            position: absolute;
            right: 4px;
            top: 50%;
            cursor: pointer;
            transform: translateY(-50%);
            svg{
                width: 12px;
            }
            &[disabled] {
                opacity: 50%;
                pointer-events: none;
            }
        }
        .helpgent-form-group{
            position:relative;
            margin-bottom: 0;
        }
        .helpgent-form-group__element{
            background: var(--helpgent-color-bg-gray);
            border-radius: 8px;
        }
    }
    .helpgent-conversation-form-tag{
        max-height: 270px;
        overflow-y: auto;
        padding: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        overflow-x: hidden;
        box-sizing: border-box;
        background: #fff;
    }
    .helpgent-conversation-form-tag__item{
        display: block;
        padding: 8px 10px 10px;
        font-size: 14px;
        color: var(--helpgent-color-gray);
        transition: var(--helpgent-transition);
        border-radius: 8px;
        line-height: normal;
        cursor: pointer;
        word-wrap: break-word;
        word-break: break-word;
        &:hover{
            background: #EBEBEB;
        }
    }

`,yp="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDAgMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzMsNTBjMC0xMi43LTEwLjMtMjMtMjMtMjNTMjcsMzcuMywyNyw1MCBNMzAuOSw1MGMwLTEwLjUsOC41LTE5LjEsMTkuMS0xOS4xUzY5LjEsMzkuNSw2OS4xLDUwIj4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgICAgICBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgZHVyPSIxcyIKICAgICAgICAgZnJvbT0iMCA1MCA1MCIKICAgICAgICAgdG89IjM2MCA1MCA1MCIKICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgo8L3N2Zz4=";function wp(t){const{baseApiRoute:n,responseState:o}=t,{paramsHook:i}=ws("helpgent_router_references",null),[a,s]=(0,r.useState)(""),[p,c]=(0,r.useState)(),{id:h}=i(),d=(0,r.useRef)(null),{activeResponse:g,responseQueryKey:u}=o,f=l(),{data:m,isLoading:x,isError:v,errorMessage:b,isFetching:y}=vp(["helpgent-form-tag-list"],`${n.forms}/${h}/tags`),{mutateAsync:w,isLoading:_}=cs(`${n.responses}/setup/tag`),{mutateAsync:M,isLoading:k}=cs(n.tags);(0,r.useEffect)((()=>{d.current.focus()}),[]),(0,r.useEffect)((()=>{c(m)}),[x]);const{setStoreData:S,getStoreData:E}=function(){const e=l();return{setStoreData:(t,n)=>{e.setQueryData(t,n)},getStoreData:t=>e.getQueryData(t),removeStoreData:t=>{e.removeQueries(t)}}}();function j(e){s(e);const t=e;if(""===e.trim())return void S(["helpgent-form-tag-list"],p);const n=p.tags.filter((e=>e.title.toLowerCase().includes(t.toLowerCase())));S(["helpgent-form-tag-list"],{tags:n})}async function C(e){e.preventDefault();const t=m.tags.filter((e=>e.title.toLowerCase()===a.toLowerCase()))[0];if(!_&&!k)if(t){const e={tag_id:parseInt(t.id),response_id:parseInt(g.id)};try{const t=await w(e);f.invalidateQueries(`helpgent-responses-${u}`),s(""),doAction("helpgent-toast",{message:t.message})}catch(e){}}else{const e={title:a,color:"#E6E6E6",form_id:parseInt(h)};try{const t=await M(e);if(t.tag_id){const e={tag_id:parseInt(t.tag_id),response_id:parseInt(g.id)};try{const t=await w(e);f.invalidateQueries(`helpgent-responses-${u}`),s(""),doAction("helpgent-toast",{message:t.message})}catch(e){}}}catch(e){}}}return(0,e.createElement)(bp,null,(0,e.createElement)("div",{className:"helpgent-conversation-tag-add"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("input",{type:"text",ref:d,className:"helpgent-form-group__element",placeholder:(0,Br.__)("Type tag & hit enter","helpgent"),value:a,onChange:e=>j(e.target.value),onKeyDown:e=>{if("Enter"===e.key){if(""===e.target.value.trim())return;C(e)}}}),(0,e.createElement)("span",{className:"helpgent-btn-icon",disabled:!(a.trim().length>0||k||_),onClick:e=>C(e)},(0,e.createElement)(Ke,{src:k||_?yp:qr})))),(0,e.createElement)("div",{className:"helpgent-conversation-form-tag helpgent-scrollbar-style"},x&&(0,e.createElement)(e.Fragment,null,(0,Br.__)("Loading","helpgent")),!x&&0===m?.tags?.length&&(0,e.createElement)("span",null,(0,Br.__)("Tags not found","helpgent")),!x&&m?.tags?.map(((t,n)=>(0,e.createElement)("span",{className:"helpgent-conversation-form-tag__item",key:n,onClick:()=>{return e=t?.title,s(e),void j(e);var e}},t?.title)))))}const _p="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICA8cGF0aCBpZD0idGFncyIgZD0iTTEuNzg2LDQ2LjAxNGgwYTMuNjY5LDMuNjY5LDAsMCwxLC4yNzEtLjMwOWw0LjYtNC41NjFhMi41ODUsMi41ODUsMCwwLDEsMi4xMTctLjY4OWw0Ljg4NS42NDVhMS4xMDcsMS4xMDcsMCwwLDEsLjk1OCwxLjAwOGwuMzc3LDQuNzEzYTIuNTUxLDIuNTUxLDAsMCwxLS43NzcsMi4wNkw5LjcyOCw1My4zMjhBMy42NTgsMy42NTgsMCwwLDEsNy4xLDU0LjQzNGgwYTMuNjU2LDMuNjU2LDAsMCwxLTIuNjI4LTEuMUwyLjA1LDUwLjg3N0EzLjY2OSwzLjY2OSwwLDAsMSwxLDQ4LjM1NiwzLjM5LDMuMzksMCwwLDEsMS43ODYsNDYuMDE0Wm0xLjg0MSwzLjMxMywyLjQxNiwyLjQ1NmExLjQ3NSwxLjQ3NSwwLDAsMCwyLjExNi0uMDEzTDEyLjY3NCw0Ny4zYS4zNjUuMzY1LDAsMCwwLC4xMTMtLjNsLS4zMDUtMy44MjQtNC0uNTI4YS4zNDguMzQ4LDAsMCwwLS4yODYuMDgzTDMuNjI1LDQ3LjI2NGExLjQ4MiwxLjQ4MiwwLDAsMCwwLDIuMDY1Wm01LjQ3Ni00LjFhMS4xMDYsMS4xMDYsMCwwLDAsMi4yMTIsMEExLjEwNiwxLjEwNiwwLDAsMCw5LjEsNDUuMjIyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTQwLjQzNCkiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==";function Mp(t){const{isClientModeActive:n,baseApiRoute:o,responseState:i,setResponseState:a}=t,{mutateAsync:s,isLoading:p}=cs(`${o?.responses}/setup/tag`),[c,h]=(0,r.useState)(!1),d=(0,r.useRef)(null),g=l(),{activeResponse:u,responseAutoActivate:f,responseQueryKey:m}=i;return(0,r.useEffect)((()=>{Jr(c,h,d),c||a({...i,responseAutoActivate:!f,messageFetchingEnabled:!0,answerFetchingEnabled:!0,formFetchingEnabled:!0})}),[c]),!n&&(0,e.createElement)("div",{className:"helpgent-conversation-tag",ref:d},(0,e.createElement)("a",{href:"#",className:"helpgent-conversation-tag__add",onClick:e=>function(e){e.preventDefault(),a({...i,responseAutoActivate:!1,messageFetchingEnabled:!1,answerFetchingEnabled:!1,formFetchingEnabled:!1}),h(!c)}(e)},(0,e.createElement)(Ke,{src:_p}),(0,Br.__)("Add tags","helpgent")),c&&(0,e.createElement)(wp,{baseApiRoute:o,responseState:i}),(0,e.createElement)("div",{className:"helpgent-conversation-tag__list"},u&&u?.tags?.map(((t,n)=>(0,e.createElement)("span",{className:"helpgent-conversation-tag__item",key:n,style:{backgroundColor:t?.color}},t.title,(0,e.createElement)("span",{className:"helpgent-conversation-tag__close",onClick:()=>async function(e){if(p)return;const t={tag_id:parseInt(e),response_id:parseInt(u.id)};await s(t),g.invalidateQueries(`helpgent-responses-${m}`)}(t.id)},(0,e.createElement)(Ke,{src:Gr})))))))}function kp(t){const{responseAuthor:n,activeResponse:r,isClientModeActive:o,baseApiRoute:i,responseState:a,setResponseState:l,dashboardWidth:s,conversationWidth:p}=t;return(0,e.createElement)("div",{className:"helpgent-header-top helpgent-d-flex"},(0,e.createElement)("div",{className:"helpgent-user-view helpgent-d-flex"},(s<768||p<768)&&(0,e.createElement)("span",{className:"helpgent-back-user-list",onClick:function(){const e=document.querySelector(".helpgent-conversation-main"),t=document.querySelector(".helpgent-sidebar");e.classList.remove("helpgent-conversation-main--active"),t.classList.add("helpgent-sidebar--active")}},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMC4yNzkiIHZpZXdCb3g9IjAgMCAxMiAxMC4yNzkiPgogIDxwYXRoIGlkPSJhcnJvdy1zbWFsbC1sZWZ0XzFfIiBkYXRhLW5hbWU9ImFycm93LXNtYWxsLWxlZnQgKDEpIiBkPSJNMTcuMTQzLDEwLjI4Nkg4LjU3MWwyLjgyLTIuODJhLjg1OC44NTgsMCwwLDAtMS4yMDktMS4yMTdMNi41MDYsOS45MzRBMS43MTQsMS43MTQsMCwwLDAsNiwxMS4xNDNINmExLjcxNCwxLjcxNCwwLDAsMCwuNTA2LDEuMmwzLjY3NywzLjY4NmEuODU4Ljg1OCwwLDAsMCwxLjIwOS0xLjIxN0w4LjU3MSwxMmg4LjU3MWEuODU3Ljg1NywwLDAsMCwwLTEuNzE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTUuOTk5KSIgZmlsbD0iIzIxODhmZiIvPgo8L3N2Zz4K"})),n?(0,e.createElement)("div",{className:"helpgent-user-view__media"},n?.avatar_url?(0,e.createElement)(Tl,{src:n?.avatar_url,alt:"Helpgent Media"}):(0,e.createElement)("span",null,n?.display_name.slice(0,2))):(0,e.createElement)("div",{className:"helpgent-user-view__icon"},(0,e.createElement)(Ke,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS45OTgiIGhlaWdodD0iMTguNTU0IiB2aWV3Qm94PSIwIDAgMTkuOTk4IDE4LjU1NCI+CiAgPGcgaWQ9IkhlbHBHZW50X0ljb24iIGRhdGEtbmFtZT0iSGVscEdlbnQgSWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTE5LjUpIiBvcGFjaXR5PSIwLjUiPgogICAgPHBhdGggaWQ9IlBhdGhfMTU3OCIgZGF0YS1uYW1lPSJQYXRoIDE1NzgiIGQ9Ik0yMC4yMjYsMjQuMTcxQTEuMywxLjMsMCwwLDAsMTguOCwyNC40bC0xLjU2OSwxLjQ1OXYtMS40YzAtLjA3NSwwLS4xNDksMC0uMjI0QTQuOTUyLDQuOTUyLDAsMCwwLDEyLjI3NiwxOS41SDUuOTUzQTQuOTQ2LDQuOTQ2LDAsMCwwLDEsMjQuNDUzdjYuMzE0YTQuOTYsNC45NiwwLDAsMCwzLjc2NSw0LjgxNnYxLjUzN2EuOTUyLjk1MiwwLDAsMCwuMS40MTYuOTM4LjkzOCwwLDAsMCwxLjI1NS40Mmw0LjQtMi4yMDgsMS4zNjktLjAyNGguMzg0cS4xNzEsMCwuMzQxLS4wMTJhNC41MjEsNC41MjEsMCwwLDAsLjYwOC0uMDc4LDQuOTU4LDQuOTU4LDAsMCwwLDQuMDA4LTQuNjQ0YzAtLjA3NSwwLS4xNDksMC0uMjI0di0uODE2bDEuNTczLDEuNDU5YTEuMzIzLDEuMzIzLDAsMCwwLC44OTQuMzQ1LDEuMjg0LDEuMjg0LDAsMCwwLC41MjktLjExNEExLjIzNCwxLjIzNCwwLDAsMCwyMSwzMC41VjI1LjMwOEExLjIyMiwxLjIyMiwwLDAsMCwyMC4yMjYsMjQuMTcxWk05LjU4MSwzMy4yNDYsNy41LDM0LjI5YS4zNzEuMzcxLDAsMCwxLS4xNTcuMDM5LjM1NS4zNTUsMCwwLDEtLjM1Ny0uMzUzVjMyLjgzOUE1LjUyOCw1LjUyOCwwLDAsMSwzLjYsMjcuNzQ0aDBhNS41MjcsNS41MjcsMCwwLDEsNS41MjYtNS41MjZoMGE1LjUyNCw1LjUyNCwwLDAsMSwuNDU1LDExLjAyOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIiBmaWxsPSIjZmZmIi8+CiAgICA8ZyBpZD0iR3JvdXBfMjg0OCIgZGF0YS1uYW1lPSJHcm91cCAyODQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjU5NyAyNi45NDcpIj4KICAgICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zMjMiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjMiIGN4PSIwLjc5MiIgY3k9IjAuNzkyIiByPSIwLjc5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4yMzUgMC4xNjIpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI0IiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI0IiBjeD0iMC43OTIiIGN5PSIwLjc5MiIgcj0iMC43OTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNjk4IDAuMTYyKSIgZmlsbD0iI2ZmZiIvPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNSIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNSIgY3g9IjAuNzkyIiBjeT0iMC43OTIiIHI9IjAuNzkyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMzY0KSByb3RhdGUoLTEzLjI4NikiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="})),(0,e.createElement)("div",{className:"helpgent-user-view__content"},(0,e.createElement)("div",{className:"helpgent-user-view__name-wrap"},(0,e.createElement)("h4",{className:"helpgent-user-view__name"},n?n?.display_name:`${(0,Br.__)("Anonymous","helpgent")} (#${r?.id})`,(0,e.createElement)("span",{className:`helpgent-user-verification helpgent-d-flex ${"1"!==r?.is_verified&&"helpgent-unverified"}`},(0,e.createElement)("span",{className:"helpgent-user-verification__icon"},(0,e.createElement)(Ke,{src:qr})),(0,e.createElement)("span",null,"1"===r?.is_verified?(0,Br.__)("Verified","helpgent"):(0,Br.__)("Unverified","helpgent")))),"1"===r?.is_completed&&(0,e.createElement)(Mp,{isClientModeActive:o,baseApiRoute:i,responseState:a,setResponseState:l})),"1"===r?.is_completed?(0,e.createElement)("span",{className:"helpgent-user-view__email"},n&&n?.email):(0,e.createElement)("span",{className:"helpgent-warning-text"},(0,Br.__)("This participant didn’t complete the submission.","helpgent")))))}const Sp={responses:"/helpgent/admin/response",forms:"/helpgent/admin/form",tags:"/helpgent/admin/tag",responseForm:"/helpgent/admin/response/form"};(0,c.addFilter)("helpgent_response_header_user_Profile","helpgent",(function(t,n){return t.helpgent_response_header_user_Profile_toggle=(0,e.createElement)(Xs,{...n}),t})),(0,c.addFilter)("helpgent_conversation_top_user","helpgent",(function(t,n){return t.helpgent_conversation_top_user_view=(0,e.createElement)(kp,{...n}),t}));const Ep=function(){return(0,e.createElement)(ks.ResponseModule,{baseApiRoute:Sp,baseLinkRoute:"/forms",isClientModeActive:!1})},jp={tags:"/helpgent/admin/tag",formsSelect:"/helpgent/admin/form/select"},Cp=function(){return(0,e.createElement)(ks.TagModule,{baseApiRoute:jp,baseLinkRoute:"/forms"})},Lp={forms:"/helpgent/admin/form",responseForm:"/helpgent/admin/response/form"},Np=function(){return(0,e.createElement)(ks.SummaryModule,{baseApiRoute:Lp,baseLinkRoute:"/forms"})},Dp={contact:"/helpgent/admin/guests"},zp=function(){return(0,e.createElement)(ks.ContactModule,{baseApiRoute:Dp})};function Op(){const[t,n]=(0,r.useState)("ltr"),o={direction:t};(0,r.useEffect)((()=>{"rtl"===document.documentElement.getAttribute("dir")?n("rtl"):n("ltr"),function(e,t){window.helpgentGlobalState||(window.helpgentGlobalState={});window.helpgentGlobalState;window.helpgentGlobalState[e]=t,window.helpgentGlobalState[e]}("helpgent_router_references",{Routes:fe,Route:ge,navigationHook:te,routeLink:Ce,routerNavLink:Le,paramsHook:ne,locationHook:{useLocation:X}})}),[]);const i=(0,c.applyFilters)("helpgent_admin_routes",[{path:"/*",element:(0,e.createElement)(Ls,null)},{path:"/pre-made-templates",element:(0,e.createElement)(Qs,null)},{path:"/template/preview/:id",element:(0,e.createElement)(Zs,null)},{path:"/settings/*",element:(0,e.createElement)(Ss,null)},{path:"/forms/:id/edit",element:(0,e.createElement)(Ys,null)},{path:"/forms/:id/responses",element:(0,e.createElement)(Ep,null)},{path:"/forms/:id/summary",element:(0,e.createElement)(Np,null)},{path:"/tags",element:(0,e.createElement)(Cp,null)},{path:"/contacts",element:(0,e.createElement)(zp,null)},{path:"/media-migration",element:(0,e.createElement)(Es,null)}]);return(0,e.createElement)("div",{className:"helpgent-app-wrap"},(0,e.createElement)(Se,null,(0,e.createElement)(r.Suspense,{fallback:(0,e.createElement)(e.Fragment,null)},(0,e.createElement)(zr,{theme:o},(0,e.createElement)(fe,null,i.map(((t,n)=>(0,e.createElement)(ge,{key:n,path:t.path,element:t.element}))))))))}document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".helpgent-root");t&&(r.createRoot?(0,r.createRoot)(t).render((0,e.createElement)(s,{client:p.A},(0,e.createElement)(Op,null))):render((0,e.createElement)(s,{client:p.A},(0,e.createElement)(Op,null)),t))}))})()})();