(()=>{var e={64197:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=new(n(5054).E)},50411:(e,t,n)=>{var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},71301:e=>{(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{default:()=>a});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return t=[{key:"changeHeightWidth",value:function(e,t,n,r,a,i){return n>r&&(e=Math.round(e*r/n),n=r),e>t&&(n=Math.round(n*t/e),e=t),a&&n<a&&(e=Math.round(e*a/n),n=a),i&&e<i&&(n=Math.round(n*i/e),e=i),{height:e,width:n}}},{key:"resizeAndRotateImage",value:function(e,t,n,r,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,l=(arguments.length>6&&void 0!==arguments[6]?arguments[6]:100)/100,s=document.createElement("canvas"),p=e.width,c=e.height,d=this.changeHeightWidth(c,n,p,t,r,a);!o||90!==o&&270!==o?(s.width=d.width,s.height=d.height):(s.width=d.height,s.height=d.width),p=d.width,c=d.height;var h=s.getContext("2d");return h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,p,c),h.imageSmoothingEnabled&&h.imageSmoothingQuality&&(h.imageSmoothingQuality="high"),o&&(h.rotate(o*Math.PI/180),90===o?h.translate(0,-s.width):180===o?h.translate(-s.width,-s.height):270===o?h.translate(-s.height,0):0!==o&&360!==o||h.translate(0,0)),h.drawImage(e,0,0,p,c),s.toDataURL("image/".concat(i),l)}},{key:"b64toByteArrays",value:function(e,t){t=t||"image/jpeg";for(var n=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],a=0;a<n.length;a+=512){for(var i=n.slice(a,a+512),o=new Array(i.length),l=0;l<i.length;l++)o[l]=i.charCodeAt(l);var s=new Uint8Array(o);r.push(s)}return r}},{key:"b64toBlob",value:function(e,t){var n=this.b64toByteArrays(e,t);return new Blob(n,{type:t,lastModified:new Date})}},{key:"b64toFile",value:function(e,t,n){var r=this.b64toByteArrays(e,n);return new File(r,t,{type:n,lastModified:new Date})}},{key:"createResizedImage",value:function(t,n,r,a,i,o,l){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,d=new FileReader;if(!t)throw Error("File Not Found!");if(t.type&&!t.type.includes("image"))throw Error("File Is NOT Image!");d.readAsDataURL(t),d.onload=function(){var h=new Image;h.src=d.result,h.onload=function(){var d=e.resizeAndRotateImage(h,n,r,p,c,a,i,o),u="image/".concat(a);switch(s){case"blob":var g=e.b64toBlob(d,u);l(g);break;case"base64":default:l(d);break;case"file":var m=t.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(a.toString()),f=e.b64toFile(d,m,u);l(f)}}},d.onerror=function(e){throw Error(e)}}}],t&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e,t),e}();const a={imageFileResizer:function(e,t,n,a,i,o,l,s,p,c){return r.createResizedImage(e,t,n,a,i,o,l,s,p,c)}};e.exports=n})()},2833:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var p=i[s];if(!l(p))return!1;var c=e[p],d=t[p];if(!1===(a=n?n.call(r,c,d,p):void 0)||void 0===a&&c!==d)return!1}return!0}},1063:(e,t,n)=>{"use strict";var r=n(51609),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,o=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),a=r[0].inst,c=r[1];return l((function(){a.value=n,a.getSnapshot=t,p(a)&&c({inst:a})}),[e,n,t]),o((function(){return p(a)&&c({inst:a}),e((function(){p(a)&&c({inst:a})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},19888:(e,t,n)=>{"use strict";e.exports=n(1063)},51609:e=>{"use strict";e.exports=window.React},62517:(e,t,n)=>{"use strict";n.d(t,{m:()=>o});var r=n(94323),a=n(12295);class i extends r.Q{constructor(){super(),this.setup=e=>{if(!a.S$&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()}))}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach((({listener:e})=>{e()}))}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}const o=new i},97502:(e,t,n)=>{"use strict";function r(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,l;const s=null==(t=e.fetchOptions)||null==(n=t.meta)?void 0:n.refetchPage,p=null==(r=e.fetchOptions)||null==(i=r.meta)?void 0:i.fetchMore,c=null==p?void 0:p.pageParam,d="forward"===(null==p?void 0:p.direction),h="backward"===(null==p?void 0:p.direction),u=(null==(o=e.state.data)?void 0:o.pages)||[],g=(null==(l=e.state.data)?void 0:l.pageParams)||[];let m=g,f=!1;const x=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),b=(e,t,n,r)=>(m=r?[t,...m]:[...m,t],r?[n,...e]:[...e,n]),v=(t,n,r,a)=>{if(f)return Promise.reject("Cancelled");if(void 0===r&&!n&&t.length)return Promise.resolve(t);const i={queryKey:e.queryKey,pageParam:r,meta:e.options.meta};var o;o=i,Object.defineProperty(o,"signal",{enumerable:!0,get:()=>{var t,n;return null!=(t=e.signal)&&t.aborted?f=!0:null==(n=e.signal)||n.addEventListener("abort",(()=>{f=!0})),e.signal}});const l=x(i);return Promise.resolve(l).then((e=>b(t,r,e,a)))};let y;if(u.length)if(d){const t=void 0!==c,n=t?c:a(e.options,u);y=v(u,t,n)}else if(h){const t=void 0!==c,n=t?c:(w=e.options,_=u,null==w.getPreviousPageParam?void 0:w.getPreviousPageParam(_[0],_));y=v(u,t,n,!0)}else{m=[];const t=void 0===e.options.getNextPageParam;y=s&&u[0]&&!s(u[0],0,u)?Promise.resolve(b([],g[0],u[0])):v([],t,g[0]);for(let n=1;n<u.length;n++)y=y.then((r=>{if(!s||!u[n]||s(u[n],n,u)){const i=t?g[n]:a(e.options,r);return v(r,t,i)}return Promise.resolve(b(r,g[n],u[n]))}))}else y=v([]);var w,_;return y.then((e=>({pages:e,pageParams:m})))}}}}function a(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}n.d(t,{PL:()=>r})},52904:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});const r=console},36801:(e,t,n)=>{"use strict";n.d(t,{$:()=>s,s:()=>l});var r=n(52904),a=n(8448),i=n(91931),o=n(94255);class l extends i.k{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||r.U,this.observers=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter((t=>t!==e)),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){const e=()=>{var e;return this.retryer=(0,o.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},t="loading"===this.state.status;try{var n,r,a,i,l,s,p,c;if(!t){var d,h,u,g;this.dispatch({type:"loading",variables:this.options.variables}),await(null==(d=(h=this.mutationCache.config).onMutate)?void 0:d.call(h,this.state.variables,this));const e=await(null==(u=(g=this.options).onMutate)?void 0:u.call(g,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}const o=await e();return await(null==(n=(r=this.mutationCache.config).onSuccess)?void 0:n.call(r,o,this.state.variables,this.state.context,this)),await(null==(a=(i=this.options).onSuccess)?void 0:a.call(i,o,this.state.variables,this.state.context)),await(null==(l=(s=this.mutationCache.config).onSettled)?void 0:l.call(s,o,null,this.state.variables,this.state.context,this)),await(null==(p=(c=this.options).onSettled)?void 0:p.call(c,o,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:o}),o}catch(e){try{var m,f,x,b,v,y,w,_;throw await(null==(m=(f=this.mutationCache.config).onError)?void 0:m.call(f,e,this.state.variables,this.state.context,this)),await(null==(x=(b=this.options).onError)?void 0:x.call(b,e,this.state.variables,this.state.context)),await(null==(v=(y=this.mutationCache.config).onSettled)?void 0:v.call(y,void 0,e,this.state.variables,this.state.context,this)),await(null==(w=(_=this.options).onSettled)?void 0:w.call(_,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.v_)(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),a.j.batch((()=>{this.observers.forEach((t=>{t.onMutationUpdate(e)})),this.mutationCache.notify({mutation:this,type:"updated",action:e})}))}}function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},8448:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(12295);const a=function(){let e=[],t=0,n=e=>{e()},a=e=>{e()};const i=a=>{t?e.push(a):(0,r.G6)((()=>{n(a)}))};return{batch:i=>{let o;t++;try{o=i()}finally{t--,t||(()=>{const t=e;e=[],t.length&&(0,r.G6)((()=>{a((()=>{t.forEach((e=>{n(e)}))}))}))})()}return o},batchCalls:e=>(...t)=>{i((()=>{e(...t)}))},schedule:i,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{a=e}}}()},43626:(e,t,n)=>{"use strict";n.d(t,{t:()=>l});var r=n(94323),a=n(12295);const i=["online","offline"];class o extends r.Q{constructor(){super(),this.setup=e=>{if(!a.S$&&window.addEventListener){const t=()=>e();return i.forEach((e=>{window.addEventListener(e,t,!1)})),()=>{i.forEach((e=>{window.removeEventListener(e,t)}))}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()}))}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach((({listener:e})=>{e()}))}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}const l=new o},5054:(e,t,n)=>{"use strict";n.d(t,{E:()=>f});var r=n(12295),a=n(52904),i=n(8448),o=n(94255),l=n(91931);class s extends l.k{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||a.U,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){const t="function"==typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,r=n?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?null!=r?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){const n=(0,r.pl)(this.state.data,e,this.options);return this.dispatch({data:n,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),n}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const n=this.promise;return null==(t=this.retryer)||t.cancel(e),n?n.then(r.lQ).catch(r.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some((e=>!1!==e.options.enabled))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some((e=>e.getCurrentResult().isStale))}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,r.j3)(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find((e=>e.shouldFetchOnWindowFocus()));t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;const t=this.observers.find((e=>e.shouldFetchOnReconnect()));t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter((t=>t!==e)),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var n,a;if("idle"!==this.state.fetchStatus)if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return null==(i=this.retryer)||i.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find((e=>e.options.queryFn));e&&this.setOptions(e.options)}const l=(0,r.jY)(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},p=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(l)return this.abortSignalConsumed=!0,l.signal}})};p(s);const c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};var d;p(c),null==(n=this.options.behavior)||n.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(a=c.fetchOptions)?void 0:a.meta))&&this.dispatch({type:"fetch",meta:null==(d=c.fetchOptions)?void 0:d.meta});const h=e=>{var t,n,r,a;(0,o.wm)(e)&&e.silent||this.dispatch({type:"error",error:e}),(0,o.wm)(e)||(null==(t=(n=this.cache.config).onError)||t.call(n,e,this),null==(r=(a=this.cache.config).onSettled)||r.call(a,this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,o.II)({fn:c.fetchFn,abort:null==l?void 0:l.abort.bind(l),onSuccess:e=>{var t,n,r,a;void 0!==e?(this.setData(e),null==(t=(n=this.cache.config).onSuccess)||t.call(n,e,this),null==(r=(a=this.cache.config).onSettled)||r.call(a,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1):h(new Error(this.queryHash+" data is undefined"))},onError:h,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var n,r;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(n=e.meta)?n:null,fetchStatus:(0,o.v_)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(r=e.dataUpdatedAt)?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=e.error;return(0,o.wm)(a)&&a.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...t,error:a,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),i.j.batch((()=>{this.observers.forEach((t=>{t.onQueryUpdate(e)})),this.cache.notify({query:this,type:"updated",action:e})}))}}var p=n(94323);class c extends p.Q{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,n){var a;const i=t.queryKey,o=null!=(a=t.queryHash)?a:(0,r.F$)(i,t);let l=this.get(o);return l||(l=new s({cache:this,logger:e.getLogger(),queryKey:i,queryHash:o,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(i)}),this.add(l)),l}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter((t=>t!==e)),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){i.j.batch((()=>{this.queries.forEach((e=>{this.remove(e)}))}))}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[n]=(0,r.b_)(e,t);return void 0===n.exact&&(n.exact=!0),this.queries.find((e=>(0,r.MK)(n,e)))}findAll(e,t){const[n]=(0,r.b_)(e,t);return Object.keys(n).length>0?this.queries.filter((e=>(0,r.MK)(n,e))):this.queries}notify(e){i.j.batch((()=>{this.listeners.forEach((({listener:t})=>{t(e)}))}))}onFocus(){i.j.batch((()=>{this.queries.forEach((e=>{e.onFocus()}))}))}onOnline(){i.j.batch((()=>{this.queries.forEach((e=>{e.onOnline()}))}))}}var d=n(36801);class h extends p.Q{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,n){const r=new d.s({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:n,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(r),r}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter((t=>t!==e)),this.notify({type:"removed",mutation:e})}clear(){i.j.batch((()=>{this.mutations.forEach((e=>{this.remove(e)}))}))}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find((t=>(0,r.nJ)(e,t)))}findAll(e){return this.mutations.filter((t=>(0,r.nJ)(e,t)))}notify(e){i.j.batch((()=>{this.listeners.forEach((({listener:t})=>{t(e)}))}))}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then((()=>{const e=this.mutations.filter((e=>e.state.isPaused));return i.j.batch((()=>e.reduce(((e,t)=>e.then((()=>t.continue().catch(r.lQ)))),Promise.resolve())))})).then((()=>{this.resuming=void 0})),this.resuming}}var u=n(62517),g=n(43626),m=n(97502);class f{constructor(e={}){this.queryCache=e.queryCache||new c,this.mutationCache=e.mutationCache||new h,this.logger=e.logger||a.U,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=u.m.subscribe((()=>{u.m.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())})),this.unsubscribeOnline=g.t.subscribe((()=>{g.t.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){const[n]=(0,r.b_)(e,t);return n.fetchStatus="fetching",this.queryCache.findAll(n).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state.data}ensureQueryData(e,t,n){const a=(0,r.vh)(e,t,n),i=this.getQueryData(a.queryKey);return i?Promise.resolve(i):this.fetchQuery(a)}getQueriesData(e){return this.getQueryCache().findAll(e).map((({queryKey:e,state:t})=>[e,t.data]))}setQueryData(e,t,n){const a=this.queryCache.find(e),i=null==a?void 0:a.state.data,o=(0,r.Zw)(t,i);if(void 0===o)return;const l=(0,r.vh)(e),s=this.defaultQueryOptions(l);return this.queryCache.build(this,s).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return i.j.batch((()=>this.getQueryCache().findAll(e).map((({queryKey:e})=>[e,this.setQueryData(e,t,n)]))))}getQueryState(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state}removeQueries(e,t){const[n]=(0,r.b_)(e,t),a=this.queryCache;i.j.batch((()=>{a.findAll(n).forEach((e=>{a.remove(e)}))}))}resetQueries(e,t,n){const[a,o]=(0,r.b_)(e,t,n),l=this.queryCache,s={type:"active",...a};return i.j.batch((()=>(l.findAll(a).forEach((e=>{e.reset()})),this.refetchQueries(s,o))))}cancelQueries(e,t,n){const[a,o={}]=(0,r.b_)(e,t,n);void 0===o.revert&&(o.revert=!0);const l=i.j.batch((()=>this.queryCache.findAll(a).map((e=>e.cancel(o)))));return Promise.all(l).then(r.lQ).catch(r.lQ)}invalidateQueries(e,t,n){const[a,o]=(0,r.b_)(e,t,n);return i.j.batch((()=>{var e,t;if(this.queryCache.findAll(a).forEach((e=>{e.invalidate()})),"none"===a.refetchType)return Promise.resolve();const n={...a,type:null!=(e=null!=(t=a.refetchType)?t:a.type)?e:"active"};return this.refetchQueries(n,o)}))}refetchQueries(e,t,n){const[a,o]=(0,r.b_)(e,t,n),l=i.j.batch((()=>this.queryCache.findAll(a).filter((e=>!e.isDisabled())).map((e=>{var t;return e.fetch(void 0,{...o,cancelRefetch:null==(t=null==o?void 0:o.cancelRefetch)||t,meta:{refetchPage:a.refetchPage}})}))));let s=Promise.all(l).then(r.lQ);return null!=o&&o.throwOnError||(s=s.catch(r.lQ)),s}fetchQuery(e,t,n){const a=(0,r.vh)(e,t,n),i=this.defaultQueryOptions(a);void 0===i.retry&&(i.retry=!1);const o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(e,t,n){return this.fetchQuery(e,t,n).then(r.lQ).catch(r.lQ)}fetchInfiniteQuery(e,t,n){const a=(0,r.vh)(e,t,n);return a.behavior=(0,m.PL)(),this.fetchQuery(a)}prefetchInfiniteQuery(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(r.lQ).catch(r.lQ)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const n=this.queryDefaults.find((t=>(0,r.Od)(e)===(0,r.Od)(t.queryKey)));n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;const t=this.queryDefaults.find((t=>(0,r.Cp)(e,t.queryKey)));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){const n=this.mutationDefaults.find((t=>(0,r.Od)(e)===(0,r.Od)(t.mutationKey)));n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;const t=this.mutationDefaults.find((t=>(0,r.Cp)(e,t.mutationKey)));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;const t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=(0,r.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},91931:(e,t,n)=>{"use strict";n.d(t,{k:()=>a});var r=n(12295);class a{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,r.gn)(this.cacheTime)&&(this.gcTimeout=setTimeout((()=>{this.optionalRemove()}),this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:r.S$?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},94255:(e,t,n)=>{"use strict";n.d(t,{II:()=>c,v_:()=>l,wm:()=>p});var r=n(62517),a=n(43626),i=n(12295);function o(e){return Math.min(1e3*2**e,3e4)}function l(e){return"online"!==(null!=e?e:"online")||a.t.isOnline()}class s{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function p(e){return e instanceof s}function c(e){let t,n,p,c=!1,d=0,h=!1;const u=new Promise(((e,t)=>{n=e,p=t})),g=()=>!r.m.isFocused()||"always"!==e.networkMode&&!a.t.isOnline(),m=r=>{h||(h=!0,null==e.onSuccess||e.onSuccess(r),null==t||t(),n(r))},f=n=>{h||(h=!0,null==e.onError||e.onError(n),null==t||t(),p(n))},x=()=>new Promise((n=>{t=e=>{const t=h||!g();return t&&n(e),t},null==e.onPause||e.onPause()})).then((()=>{t=void 0,h||null==e.onContinue||e.onContinue()})),b=()=>{if(h)return;let t;try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(m).catch((t=>{var n,r;if(h)return;const a=null!=(n=e.retry)?n:3,l=null!=(r=e.retryDelay)?r:o,s="function"==typeof l?l(d,t):l,p=!0===a||"number"==typeof a&&d<a||"function"==typeof a&&a(d,t);!c&&p?(d++,null==e.onFail||e.onFail(d,t),(0,i.yy)(s).then((()=>{if(g())return x()})).then((()=>{c?f(t):b()}))):f(t)}))};return l(e.networkMode)?b():x().then(b),{promise:u,cancel:t=>{h||(f(new s(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?u:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},94323:(e,t,n)=>{"use strict";n.d(t,{Q:()=>r});class r{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},12295:(e,t,n)=>{"use strict";n.d(t,{Cp:()=>m,F$:()=>u,G6:()=>k,GR:()=>p,MK:()=>d,Od:()=>g,S$:()=>r,Zw:()=>i,b_:()=>c,f8:()=>b,gn:()=>o,j3:()=>l,jY:()=>C,lQ:()=>a,nJ:()=>h,pl:()=>E,vh:()=>s,yy:()=>M});const r="undefined"==typeof window||"Deno"in window;function a(){}function i(e,t){return"function"==typeof e?e(t):e}function o(e){return"number"==typeof e&&e>=0&&e!==1/0}function l(e,t){return Math.max(e+(t||0)-Date.now(),0)}function s(e,t,n){return _(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function p(e,t,n){return _(e)?"function"==typeof t?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function c(e,t,n){return _(e)?[{...t,queryKey:e},n]:[e||{},t]}function d(e,t){const{type:n="all",exact:r,fetchStatus:a,predicate:i,queryKey:o,stale:l}=e;if(_(o))if(r){if(t.queryHash!==u(o,t.options))return!1}else if(!m(t.queryKey,o))return!1;if("all"!==n){const e=t.isActive();if("active"===n&&!e)return!1;if("inactive"===n&&e)return!1}return!("boolean"==typeof l&&t.isStale()!==l||void 0!==a&&a!==t.state.fetchStatus||i&&!i(t))}function h(e,t){const{exact:n,fetching:r,predicate:a,mutationKey:i}=e;if(_(i)){if(!t.options.mutationKey)return!1;if(n){if(g(t.options.mutationKey)!==g(i))return!1}else if(!m(t.options.mutationKey,i))return!1}return!("boolean"==typeof r&&"loading"===t.state.status!==r||a&&!a(t))}function u(e,t){return((null==t?void 0:t.queryKeyHashFn)||g)(e)}function g(e){return JSON.stringify(e,((e,t)=>y(t)?Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}):t))}function m(e,t){return f(e,t)}function f(e,t){return e===t||typeof e==typeof t&&!(!e||!t||"object"!=typeof e||"object"!=typeof t)&&!Object.keys(t).some((n=>!f(e[n],t[n])))}function x(e,t){if(e===t)return e;const n=v(e)&&v(t);if(n||y(e)&&y(t)){const r=n?e.length:Object.keys(e).length,a=n?t:Object.keys(t),i=a.length,o=n?[]:{};let l=0;for(let r=0;r<i;r++){const i=n?r:a[r];o[i]=x(e[i],t[i]),o[i]===e[i]&&l++}return r===i&&l===r?e:o}return t}function b(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function v(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function y(e){if(!w(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!!w(n)&&!!n.hasOwnProperty("isPrototypeOf")}function w(e){return"[object Object]"===Object.prototype.toString.call(e)}function _(e){return Array.isArray(e)}function M(e){return new Promise((t=>{setTimeout(t,e)}))}function k(e){M(0).then(e)}function C(){if("function"==typeof AbortController)return new AbortController}function E(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?x(e,t):t}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),n.nc=void 0,(()=>{"use strict";var e=n(51609),t=n.n(e);const r=window.wp.domReady;var a=n.n(r);const i=window.wp.element,o=window.wp.hooks,l=window.helpgent.modules,s=e.createContext(void 0),p=e.createContext(!1);function c(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=s),window.ReactQueryClientContext):s)}const d=({client:t,children:n,context:r,contextSharing:a=!1})=>{e.useEffect((()=>(t.mount(),()=>{t.unmount()})),[t]);const i=c(r,a);return e.createElement(p.Provider,{value:!r&&a},e.createElement(i.Provider,{value:t},n))};var h=n(64197),u=function(e){return e.split(/ ?; ?/).reduce((function(e,t){var n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o}(t.split(/ ?: ?/),2),r=n[0],a=n[1];return r&&a&&(e[r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(a))?a:Number(a)),e}),{})},g=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],m={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},x=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},b=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function v(t,n){var r;if(void 0===n&&(n={}),!(t&&t instanceof Node))return null;var a,i=n.actions,o=void 0===i?[]:i,l=n.index,s=void 0===l?0:l,p=n.level,c=void 0===p?0:p,d=n.randomKey,h=t,y="".concat(c,"-").concat(s),w=[];if(d&&0===c&&(y="".concat(function(e){void 0===e&&(e=6);for(var t="",n=e;n>0;--n)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())];return t}(),"-").concat(y)),Array.isArray(o)&&o.forEach((function(e){e.condition(h,y,c)&&("function"==typeof e.pre&&((h=e.pre(h,y,c))instanceof Node||(h=t)),"function"==typeof e.post&&w.push(e.post(h,y,c)))})),w.length)return w;switch(h.nodeType){case 1:return e.createElement((a=h.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(a)?a:a.toLowerCase()),function(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),b([],x(e.attributes),!1).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=u(e.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[m[e.name]||e.name]=!0;break;default:n[m[e.name]||e.name]=e.value}}))}return n}(h,y),function(e,t,n){var r=b([],x(e),!1).map((function(e,r){return v(e,f(f({},n),{index:r,level:t+1}))})).filter(Boolean);return r.length?r:null}(h.childNodes,c,n));case 3:var _=(null===(r=h.nodeValue)||void 0===r?void 0:r.toString())||"";if(/^\s+$/.test(_)&&!/[\u00A0\u202F]/.test(_))return null;if(!h.parentNode)return _;var M=h.parentNode.nodeName.toLowerCase();return g.includes(M)?(/\S/.test(_)&&console.warn("A textNode is not allowed inside '".concat(M,"'. Your text \"").concat(_,'" will be ignored')),null):_;default:return null}}function y(e,t){return void 0===t&&(t={}),"string"==typeof e?function(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,a=t.selector,i=void 0===a?"body > *":a,o=t.type,l=void 0===o?"text/html":o;try{var s=(new DOMParser).parseFromString(e,l).querySelector(i);if(!(s instanceof Node))throw new TypeError("Error parsing input");return r?s:v(s,t)}catch(e){}return null}(e,t):e instanceof Node?v(e,t):null}var w=n(50411),_={IDLE:"idle",LOADING:"loading",LOADED:"loaded",FAILED:"failed",READY:"ready",UNSUPPORTED:"unsupported"};function M(){return w.canUseDOM}function k(e){return e[Math.floor(Math.random()*e.length)]}var C,E=(C=function(e,t){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},C(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},S.apply(this,arguments)},A=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},N=Object.create(null),L=function(t){function n(e){var n=t.call(this,e)||this;return Object.defineProperty(n,"hash",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(n,"isActive",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(n,"isInitialized",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(n,"handleError",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=n.props.onError,r="Browser does not support SVG"===e.message?_.UNSUPPORTED:_.FAILED;n.isActive&&n.setState({status:r},(function(){"function"==typeof t&&t(e)}))}}),Object.defineProperty(n,"handleLoad",{enumerable:!0,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1),n.isActive&&n.setState({content:e,hasCache:t,status:_.LOADED},n.getElement)}}),Object.defineProperty(n,"request",{enumerable:!0,configurable:!0,writable:!0,value:function(){return e=n,t=void 0,a=function(){var e,t,n,r,a,i,o,l,s,p,c,d;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,(function(h){switch(h.label){case 0:e=this.props,t=e.cacheRequests,n=e.fetchOptions,r=e.src,t&&(N[r]={content:"",status:_.LOADING}),h.label=1;case 1:return h.trys.push([1,4,,5]),[4,fetch(r,n)];case 2:if(a=h.sent(),i=a.headers.get("content-type"),o=A((i||"").split(/ ?; ?/),1),l=o[0],a.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((function(e){return l.includes(e)})))throw new Error("Content type isn't valid: ".concat(l));return[4,a.text()];case 3:return s=h.sent(),p=this.props.src,r!==p?(N[r].status===_.LOADING&&delete N[r],[2]):(this.handleLoad(s),t&&(d=N[r])&&(d.content=s,d.status=_.LOADED),[3,5]);case 4:return c=h.sent(),this.handleError(c),t&&(d=N[r])&&delete N[r],[3,5];case 5:return[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}));var e,t,r,a}}),n.state={content:"",element:null,hasCache:!!e.cacheRequests&&!!N[e.src],status:_.IDLE},n.hash=e.uniqueHash||function(){for(var e="abcdefghijklmnopqrstuvwxyz",t="".concat(e).concat(e.toUpperCase()).concat("1234567890"),n="",r=0;r<8;r++)n+=k(t);return n}(),n}return E(n,t),Object.defineProperty(n.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(this.isActive=!0,M()&&!this.isInitialized){var e=this.state.status,t=this.props.src;try{if(e===_.IDLE){if(!function(){if(!document)return!1;var e=document.createElement("div");e.innerHTML="<svg />";var t=e.firstChild;return!!t&&"http://www.w3.org/2000/svg"===t.namespaceURI}()||"undefined"==typeof window||null===window)throw new Error("Browser does not support SVG");if(!t)throw new Error("Missing src");this.load()}}catch(e){this.handleError(e)}this.isInitialized=!0}}}),Object.defineProperty(n.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(M()){var n=this.state,r=n.hasCache,a=n.status,i=this.props,o=i.onLoad,l=i.src;if(t.status!==_.READY&&a===_.READY&&o&&o(l,r),e.src!==l){if(!l)return void this.handleError(new Error("Missing src"));this.load()}}}}),Object.defineProperty(n.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.isActive=!1}}),Object.defineProperty(n.prototype,"getElement",{enumerable:!1,configurable:!0,writable:!0,value:function(){try{var t=y(this.getNode());if(!t||!e.isValidElement(t))throw new Error("Could not convert the src to a React element");this.setState({element:t,status:_.READY})}catch(e){this.handleError(new Error(e.message))}}}),Object.defineProperty(n.prototype,"getNode",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.description,n=e.title;try{var r=y(this.processSVG(),{nodeOnly:!0});if(!(r&&r instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var a=this.updateSVGAttributes(r);if(t){var i=a.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var o=document.createElementNS("http://www.w3.org/2000/svg","desc");o.innerHTML=t,a.prepend(o)}if(void 0!==n){var l=a.querySelector("title");if(l&&l.parentNode&&l.parentNode.removeChild(l),n){var s=document.createElementNS("http://www.w3.org/2000/svg","title");s.innerHTML=n,a.prepend(s)}}return a}catch(e){return this.handleError(e)}}}),Object.defineProperty(n.prototype,"load",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;this.isActive&&this.setState({content:"",element:null,hasCache:!1,status:_.LOADING},(function(){var t=e.props,n=t.cacheRequests,r=t.src,a=n&&N[r];if(a&&a.status===_.LOADED)e.handleLoad(a.content,!0);else{var i,o=r.match(/^data:image\/svg[^,]*?(;base64)?,(.*)/u);o?i=o[1]?window.atob(o[2]):decodeURIComponent(o[2]):r.includes("<svg")&&(i=r),i?e.handleLoad(i):e.request()}}))}}),Object.defineProperty(n.prototype,"processSVG",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e}}),Object.defineProperty(n.prototype,"updateSVGAttributes",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,n=this.props,r=n.baseURL,a=void 0===r?"":r,i=n.uniquifyIDs,o=["id","href","xlink:href","xlink:role","xlink:arcrole"],l=["href","xlink:href"];return i?(function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}([],A(e.children),!1).forEach((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes).map((function(e){var n=e,r=e.value.match(/url\((.*?)\)/);return r&&r[1]&&(n.value=e.value.replace(r[0],"url(".concat(a).concat(r[1],"__").concat(t.hash,")"))),n}));o.forEach((function(e){var r,a,i=n.find((function(t){return t.name===e}));i&&(r=e,a=i.value,!l.includes(r)||!a||a.includes("#"))&&(i.value="".concat(i.value,"__").concat(t.hash))}))}return e.children.length?t.updateSVGAttributes(e):e})),e):e}}),Object.defineProperty(n.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var t=this.state,n=t.element,r=t.status,a=this.props,i=a.children,o=void 0===i?null:i,l=a.innerRef,s=a.loader,p=void 0===s?null:s,c=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var a in e)({}).hasOwnProperty.call(e,a)&&(t.includes(a)||(r[a]=e[a]));return r}(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return M()?n?e.cloneElement(n,S({ref:l},c)):[_.UNSUPPORTED,_.FAILED].includes(r)?o:p:p}}),Object.defineProperty(n,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{cacheRequests:!0,uniquifyIDs:!1}}),n}(e.PureComponent);const D=L,j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNC42NjciIHZpZXdCb3g9IjAgMCAxNiAxNC42NjciPgogIDxwYXRoIGlkPSJlbnZlbG9wZSIgZD0iTTEyLjMzMywxSDMuNjY3QTMuNjcxLDMuNjcxLDAsMCwwLDAsNC42NjdWMTJhMy42NzEsMy42NzEsMCwwLDAsMy42NjcsMy42NjdoOC42NjdBMy42NzEsMy42NzEsMCwwLDAsMTYsMTJWNC42NjdBMy42NzEsMy42NzEsMCwwLDAsMTIuMzMzLDFabTAsMmExLjY1MSwxLjY1MSwwLDAsMSwxLjEuNDIxTDkuMSw3Ljc1NGExLjU4MiwxLjU4MiwwLDAsMS0yLjE4NSwwTDIuNTc3LDMuNDIxQTEuNjUxLDEuNjUxLDAsMCwxLDMuNjY3LDNabTAsMTAuNjY3SDMuNjY3QTEuNjY3LDEuNjY3LDAsMCwxLDIsMTJWNS42NzhMNS40OTMsOS4xNzFhMy41NDUsMy41NDUsMCwwLDAsNS4wMTQsMEwxNCw1LjY3OFYxMkExLjY2NywxLjY2NywwLDAsMSwxMi4zMzMsMTMuNjY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMSkiIGZpbGw9IiM2ZTZlNmUiLz4KPC9zdmc+Cg==";var z=n(12295),I=n(36801),T=n(8448),O=n(94323);class U extends O.Q{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;const n=this.options;this.options=this.client.defaultMutationOptions(e),(0,z.f8)(n,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||null==(e=this.currentMutation)||e.removeObserver(this)}onMutationUpdate(e){this.updateResult();const t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:(0,I.$)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){T.j.batch((()=>{var t,n,r,a;if(this.mutateOptions&&this.hasListeners())if(e.onSuccess)null==(t=(n=this.mutateOptions).onSuccess)||t.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(a=this.mutateOptions).onSettled)||r.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context);else if(e.onError){var i,o,l,s;null==(i=(o=this.mutateOptions).onError)||i.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(l=(s=this.mutateOptions).onSettled)||l.call(s,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}e.listeners&&this.listeners.forEach((({listener:e})=>{e(this.currentResult)}))}))}}const P=n(19888).useSyncExternalStore;function F(t,n,r){const a=(0,z.GR)(t,n,r),i=(({context:t}={})=>{const n=e.useContext(c(t,e.useContext(p)));if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n})({context:a.context}),[o]=e.useState((()=>new U(i,a)));e.useEffect((()=>{o.setOptions(a)}),[o,a]);const l=P(e.useCallback((e=>o.subscribe(T.j.batchCalls(e))),[o]),(()=>o.getCurrentResult()),(()=>o.getCurrentResult())),s=e.useCallback(((e,t)=>{o.mutate(e,t).catch(R)}),[o]);if(l.error&&(d=o.options.useErrorBoundary,h=[l.error],"function"==typeof d?d(...h):d))throw l.error;var d,h;return{...l,mutate:s,mutateAsync:l.mutate}}function R(){}const Y=window.wp.apiFetch;var G=n.n(Y);const B=(e,t)=>F((n=>async function(e,t,n){return n=n||{},await G()({path:e,method:"POST",data:t,...n}).then((e=>e)).catch((e=>{throw e}))}(e,n,t)));var q=function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},q.apply(this,arguments)};function Q(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var V=n(2833),H=n.n(V),Z="-ms-",W="-moz-",J="-webkit-",K="comm",$="rule",X="decl",ee="@import",te="@keyframes",ne="@layer",re=Math.abs,ae=String.fromCharCode,ie=Object.assign;function oe(e){return e.trim()}function le(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function pe(e,t,n){return e.indexOf(t,n)}function ce(e,t){return 0|e.charCodeAt(t)}function de(e,t,n){return e.slice(t,n)}function he(e){return e.length}function ue(e){return e.length}function ge(e,t){return t.push(e),e}function me(e,t){return e.filter((function(e){return!le(e,t)}))}var fe=1,xe=1,be=0,ve=0,ye=0,we="";function _e(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:fe,column:xe,length:o,return:"",siblings:l}}function Me(e,t){return ie(_e("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ke(e){for(;e.root;)e=Me(e.root,{children:[e]});ge(e,e.siblings)}function Ce(){return ye=ve>0?ce(we,--ve):0,xe--,10===ye&&(xe=1,fe--),ye}function Ee(){return ye=ve<be?ce(we,ve++):0,xe++,10===ye&&(xe=1,fe++),ye}function Se(){return ce(we,ve)}function Ae(){return ve}function Ne(e,t){return de(we,e,t)}function Le(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function De(e){return oe(Ne(ve-1,Ie(91===e?e+2:40===e?e+1:e)))}function je(e){for(;(ye=Se())&&ye<33;)Ee();return Le(e)>2||Le(ye)>3?"":" "}function ze(e,t){for(;--t&&Ee()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Ne(e,Ae()+(t<6&&32==Se()&&32==Ee()))}function Ie(e){for(;Ee();)switch(ye){case e:return ve;case 34:case 39:34!==e&&39!==e&&Ie(ye);break;case 40:41===e&&Ie(e);break;case 92:Ee()}return ve}function Te(e,t){for(;Ee()&&e+ye!==57&&(e+ye!==84||47!==Se()););return"/*"+Ne(t,ve-1)+"*"+ae(47===e?e:Ee())}function Oe(e){for(;!Le(Se());)Ee();return Ne(e,ve)}function Ue(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Pe(e,t,n,r){switch(e.type){case ne:if(e.children.length)break;case ee:case X:return e.return=e.return||e.value;case K:return"";case te:return e.return=e.value+"{"+Ue(e.children,r)+"}";case $:if(!he(e.value=e.props.join(",")))return""}return he(n=Ue(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fe(e,t,n){switch(function(e,t){return 45^ce(e,0)?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+W+e+Z+e+e;case 5936:switch(ce(e,t+11)){case 114:return J+e+Z+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+Z+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+Z+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+Z+e+e;case 6165:return J+e+Z+"flex-"+e+e;case 5187:return J+e+se(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return J+e+Z+"flex-item-"+se(e,/flex-|-self/g,"")+(le(e,/flex-|baseline/)?"":Z+"grid-row-"+se(e,/flex-|-self/g,""))+e;case 4675:return J+e+Z+"flex-line-pack"+se(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+Z+se(e,"shrink","negative")+e;case 5292:return J+e+Z+se(e,"basis","preferred-size")+e;case 6060:return J+"box-"+se(e,"-grow","")+J+e+Z+se(e,"grow","positive")+e;case 4554:return J+se(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!le(e,/flex-|baseline/))return Z+"grid-column-align"+de(e,t)+e;break;case 2592:case 3360:return Z+se(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,le(e.props,/grid-\w+-end/)}))?~pe(e+(n=n[t].value),"span",0)?e:Z+se(e,"-start","")+e+Z+"grid-row-span:"+(~pe(n,"span",0)?le(n,/\d+/):+le(n,/\d+/)-+le(e,/\d+/))+";":Z+se(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return le(e.props,/grid-\w+-start/)}))?e:Z+se(se(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(he(e)-1-t>6)switch(ce(e,t+1)){case 109:if(45!==ce(e,t+4))break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+W+(108==ce(e,t+3)?"$3":"$2-$3"))+e;case 115:return~pe(e,"stretch",0)?Fe(se(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return se(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return Z+n+":"+r+l+(a?Z+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===ce(e,t+6))return se(e,":",":"+J)+e;break;case 6444:switch(ce(e,45===ce(e,14)?18:11)){case 120:return se(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(45===ce(e,14)?"inline-":"")+"box$3$1"+J+"$2$3$1"+Z+"$2box$3")+e;case 100:return se(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(e,"scroll-","scroll-snap-")+e}return e}function Re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case X:return void(e.return=Fe(e.value,e.length,n));case te:return Ue([Me(e,{value:se(e.value,"@","@"+J)})],r);case $:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(le(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ke(Me(e,{props:[se(t,/:(read-\w+)/,":"+W+"$1")]})),ke(Me(e,{props:[t]})),ie(e,{props:me(n,r)});break;case"::placeholder":ke(Me(e,{props:[se(t,/:(plac\w+)/,":"+J+"input-$1")]})),ke(Me(e,{props:[se(t,/:(plac\w+)/,":"+W+"$1")]})),ke(Me(e,{props:[se(t,/:(plac\w+)/,Z+"input-$1")]})),ke(Me(e,{props:[t]})),ie(e,{props:me(n,r)})}return""}))}}function Ye(e){return function(e){return we="",e}(Ge("",null,null,null,[""],e=function(e){return fe=xe=1,be=he(we=e),ve=0,[]}(e),0,[0],e))}function Ge(e,t,n,r,a,i,o,l,s){for(var p=0,c=0,d=o,h=0,u=0,g=0,m=1,f=1,x=1,b=0,v="",y=a,w=i,_=r,M=v;f;)switch(g=b,b=Ee()){case 40:if(108!=g&&58==ce(M,d-1)){-1!=pe(M+=se(De(b),"&","&\f"),"&\f",re(p?l[p-1]:0))&&(x=-1);break}case 34:case 39:case 91:M+=De(b);break;case 9:case 10:case 13:case 32:M+=je(g);break;case 92:M+=ze(Ae()-1,7);continue;case 47:switch(Se()){case 42:case 47:ge(qe(Te(Ee(),Ae()),t,n,s),s);break;default:M+="/"}break;case 123*m:l[p++]=he(M)*x;case 125*m:case 59:case 0:switch(b){case 0:case 125:f=0;case 59+c:-1==x&&(M=se(M,/\f/g,"")),u>0&&he(M)-d&&ge(u>32?Qe(M+";",r,n,d-1,s):Qe(se(M," ","")+";",r,n,d-2,s),s);break;case 59:M+=";";default:if(ge(_=Be(M,t,n,p,c,a,l,v,y=[],w=[],d,i),i),123===b)if(0===c)Ge(M,t,_,_,y,i,d,l,w);else switch(99===h&&110===ce(M,3)?100:h){case 100:case 108:case 109:case 115:Ge(e,_,_,r&&ge(Be(e,_,_,0,0,a,l,v,a,y=[],d,w),w),a,w,d,l,r?y:w);break;default:Ge(M,_,_,_,[""],w,0,l,w)}}p=c=u=0,m=x=1,v=M="",d=o;break;case 58:d=1+he(M),u=g;default:if(m<1)if(123==b)--m;else if(125==b&&0==m++&&125==Ce())continue;switch(M+=ae(b),b*m){case 38:x=c>0?1:(M+="\f",-1);break;case 44:l[p++]=(he(M)-1)*x,x=1;break;case 64:45===Se()&&(M+=De(Ee())),h=Se(),c=d=he(v=M+=Oe(Ae())),b++;break;case 45:45===g&&2==he(M)&&(m=0)}}return i}function Be(e,t,n,r,a,i,o,l,s,p,c,d){for(var h=a-1,u=0===a?i:[""],g=ue(u),m=0,f=0,x=0;m<r;++m)for(var b=0,v=de(e,h+1,h=re(f=o[m])),y=e;b<g;++b)(y=oe(f>0?u[b]+" "+v:se(v,/&\f/g,u[b])))&&(s[x++]=y);return _e(e,t,n,0===a?$:l,s,p,c,d)}function qe(e,t,n,r){return _e(e,t,n,K,ae(ye),de(e,2,-2),0,r)}function Qe(e,t,n,r,a){return _e(e,t,n,X,de(e,0,r),de(e,r+1,-1),r,a)}var Ve={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ze="active",We="data-styled-version",Je="6.1.12",Ke="/*!sc*/\n",$e="undefined"!=typeof window&&"HTMLElement"in window,Xe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),et=(new Set,Object.freeze([])),tt=Object.freeze({});var nt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,at=/(^-|-$)/g;function it(e){return e.replace(rt,"-").replace(at,"")}var ot=/(a)(d)/gi,lt=52,st=function(e){return String.fromCharCode(e+(e>25?39:97))};function pt(e){var t,n="";for(t=Math.abs(e);t>lt;t=t/lt|0)n=st(t%lt)+n;return(st(t%lt)+n).replace(ot,"$1-$2")}var ct,dt=5381,ht=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ut=function(e){return ht(dt,e)};function gt(e){return"string"==typeof e&&!0}var mt="function"==typeof Symbol&&Symbol.for,ft=mt?Symbol.for("react.memo"):60115,xt=mt?Symbol.for("react.forward_ref"):60112,bt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wt=((ct={})[xt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ct[ft]=yt,ct);function _t(e){return("type"in(t=e)&&t.type.$$typeof)===ft?yt:"$$typeof"in e?wt[e.$$typeof]:bt;var t}var Mt=Object.defineProperty,kt=Object.getOwnPropertyNames,Ct=Object.getOwnPropertySymbols,Et=Object.getOwnPropertyDescriptor,St=Object.getPrototypeOf,At=Object.prototype;function Nt(e,t,n){if("string"!=typeof t){if(At){var r=St(t);r&&r!==At&&Nt(e,r,n)}var a=kt(t);Ct&&(a=a.concat(Ct(t)));for(var i=_t(e),o=_t(t),l=0;l<a.length;++l){var s=a[l];if(!(s in vt||n&&n[s]||o&&s in o||i&&s in i)){var p=Et(t,s);try{Mt(e,s,p)}catch(e){}}}}return e}function Lt(e){return"function"==typeof e}function Dt(e){return"object"==typeof e&&"styledComponentId"in e}function jt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zt(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function It(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tt(e,t,n){if(void 0===n&&(n=!1),!n&&!It(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tt(e[r],t[r]);else if(It(t))for(var r in t)e[r]=Tt(e[r],t[r]);return e}function Ot(e,t){Object.defineProperty(e,"toString",{value:t})}function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Ut(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(Ke);return t},e}(),Ft=new Map,Rt=new Map,Yt=1,Gt=function(e){if(Ft.has(e))return Ft.get(e);for(;Rt.has(Yt);)Yt++;var t=Yt++;return Ft.set(e,t),Rt.set(t,e),t},Bt=function(e,t){Yt=t+1,Ft.set(e,t),Rt.set(t,e)},qt="style[".concat(He,"][").concat(We,'="').concat(Je,'"]'),Qt=new RegExp("^".concat(He,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vt=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Ht=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Ke),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(Qt);if(s){var p=0|parseInt(s[1],10),c=s[2];0!==p&&(Bt(c,p),Vt(e,c,s[3]),e.getTag().insertRules(p,a)),a.length=0}else a.push(l)}}},Zt=function(e){for(var t=document.querySelectorAll(qt),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(He)!==Ze&&(Ht(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Wt(){return n.nc}var Jt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(He,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(He,Ze),r.setAttribute(We,Je);var o=Wt();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Kt=function(){function e(e){this.element=Jt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Ut(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),$t=function(){function e(e){this.element=Jt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Xt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),en=$e,tn={isServer:!$e,useCSSOMInjection:!Xe},nn=function(){function e(e,t,n){void 0===e&&(e=tt),void 0===t&&(t={});var r=this;this.options=q(q({},tn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$e&&en&&(en=!1,Zt(this)),Ot(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Rt.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(He,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(Ke)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return Gt(e)},e.prototype.rehydrate=function(){!this.server&&$e&&Zt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(q(q({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Xt(n):t?new Kt(n):new $t(n)}(this.options),new Pt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Gt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Gt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Gt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rn=/&/g,an=/^\s*\/\/.*$/gm;function on(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=on(e.children,t)),e}))}function ln(e){var t,n,r,a=void 0===e?tt:e,i=a.options,o=void 0===i?tt:i,l=a.plugins,s=void 0===l?et:l,p=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===$&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(rn,n).replace(r,p))})),o.prefix&&c.push(Re),c.push(Pe);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(an,""),p=Ye(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(p=on(p,o.namespace));var d,h,u,g=[];return Ue(p,(d=c.concat((u=function(e){return g.push(e)},function(e){e.root||(e=e.return)&&u(e)})),h=ue(d),function(e,t,n,r){for(var a="",i=0;i<h;i++)a+=d[i](e,t,n,r)||"";return a})),g};return d.hash=s.length?s.reduce((function(e,t){return t.name||Ut(15),ht(e,t.name)}),dt).toString():"",d}var sn=new nn,pn=ln(),cn=t().createContext({shouldForwardProp:void 0,styleSheet:sn,stylis:pn}),dn=(cn.Consumer,t().createContext(void 0));function hn(){return(0,e.useContext)(cn)}function un(n){var r=(0,e.useState)(n.stylisPlugins),a=r[0],i=r[1],o=hn().styleSheet,l=(0,e.useMemo)((function(){var e=o;return n.sheet?e=n.sheet:n.target&&(e=e.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[n.disableCSSOMInjection,n.sheet,n.target,o]),s=(0,e.useMemo)((function(){return ln({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:a})}),[n.enableVendorPrefixes,n.namespace,a]);(0,e.useEffect)((function(){H()(a,n.stylisPlugins)||i(n.stylisPlugins)}),[n.stylisPlugins]);var p=(0,e.useMemo)((function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:l,stylis:s}}),[n.shouldForwardProp,l,s]);return t().createElement(cn.Provider,{value:p},t().createElement(dn.Provider,{value:s},n.children))}var gn=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ot(this,(function(){throw Ut(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=pn),this.name+e.hash},e}(),mn=function(e){return e>="A"&&e<="Z"};function fn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;mn(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xn=function(e){return null==e||!1===e||""===e},bn=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!xn(i)&&(Array.isArray(i)&&i.isCss||Lt(i)?r.push("".concat(fn(a),":"),i,";"):It(i)?r.push.apply(r,Q(Q(["".concat(a," {")],bn(i),!1),["}"],!1)):r.push("".concat(fn(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Ve||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function vn(e,t,n,r){return xn(e)?[]:Dt(e)?[".".concat(e.styledComponentId)]:Lt(e)?!Lt(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:vn(e(t),t,n,r):e instanceof gn?n?(e.inject(n,r),[e.getName(r)]):[e]:It(e)?bn(e):Array.isArray(e)?Array.prototype.concat.apply(et,e.map((function(e){return vn(e,t,n,r)}))):[e.toString()];var a}function yn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Lt(n)&&!Dt(n))return!1}return!0}var wn=ut(Je),Mn=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&yn(e),this.componentId=t,this.baseHash=ht(wn,t),this.baseStyle=n,nn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=jt(r,this.staticRulesId);else{var a=zt(vn(this.rules,e,t,n)),i=pt(ht(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=jt(r,i),this.staticRulesId=i}else{for(var l=ht(this.baseHash,n.hash),s="",p=0;p<this.rules.length;p++){var c=this.rules[p];if("string"==typeof c)s+=c;else if(c){var d=zt(vn(c,e,t,n));l=ht(l,d+p),s+=d}}if(s){var h=pt(l>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(s,".".concat(h),void 0,this.componentId)),r=jt(r,h)}}return r},e}(),kn=t().createContext(void 0);kn.Consumer;var Cn={};function En(n,r,a){var i=Dt(n),o=n,l=!gt(n),s=r.attrs,p=void 0===s?et:s,c=r.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":it(e);Cn[n]=(Cn[n]||0)+1;var r="".concat(n,"-").concat(function(e){return pt(ut(e)>>>0)}(Je+n+Cn[n]));return t?"".concat(t,"-").concat(r):r}(r.displayName,r.parentComponentId):c,h=r.displayName,u=void 0===h?function(e){return gt(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(n):h,g=r.displayName&&r.componentId?"".concat(it(r.displayName),"-").concat(r.componentId):r.componentId||d,m=i&&o.attrs?o.attrs.concat(p).filter(Boolean):p,f=r.shouldForwardProp;if(i&&o.shouldForwardProp){var x=o.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;f=function(e,t){return x(e,t)&&b(e,t)}}else f=x}var v=new Mn(a,g,i?o.componentStyle:void 0);function y(n,r){return function(n,r,a){var i=n.attrs,o=n.componentStyle,l=n.defaultProps,s=n.foldedComponentIds,p=n.styledComponentId,c=n.target,d=t().useContext(kn),h=hn(),u=n.shouldForwardProp||h.shouldForwardProp,g=function(e,t,n){return void 0===n&&(n=tt),e.theme!==n.theme&&e.theme||t||n.theme}(r,d,l)||tt,m=function(e,t,n){for(var r,a=q(q({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Lt(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?jt(a[l],o[l]):"style"===l?q(q({},a[l]),o[l]):o[l]}return t.className&&(a.className=jt(a.className,t.className)),a}(i,r,g),f=m.as||c,x={};for(var b in m)void 0===m[b]||"$"===b[0]||"as"===b||"theme"===b&&m.theme===g||("forwardedAs"===b?x.as=m.forwardedAs:u&&!u(b,f)||(x[b]=m[b]));var v=function(e,t){var n=hn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),y=jt(s,p);return v&&(y+=" "+v),m.className&&(y+=" "+m.className),x[gt(f)&&!nt.has(f)?"class":"className"]=y,x.ref=a,(0,e.createElement)(f,x)}(w,n,r)}y.displayName=u;var w=t().forwardRef(y);return w.attrs=m,w.componentStyle=v,w.displayName=u,w.shouldForwardProp=f,w.foldedComponentIds=i?jt(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=g,w.target=i?o.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Tt(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Ot(w,(function(){return".".concat(w.styledComponentId)})),l&&Nt(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Sn(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}new Set;var An=function(e){return Object.assign(e,{isCss:!0})};function Nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Lt(e)||It(e))return An(vn(Sn(et,Q([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?vn(r):An(vn(Sn(r,t)))}function Ln(e,t,n){if(void 0===n&&(n=tt),!t)throw Ut(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,Nn.apply(void 0,Q([r],a,!1)))};return r.attrs=function(r){return Ln(e,t,q(q({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ln(e,t,q(q({},n),r))},r}var Dn=function(e){return Ln(En,e)},jn=Dn;nt.forEach((function(e){jn[e]=Dn(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=yn(e),nn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(zt(vn(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&nn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Wt(),r=zt([n&&'nonce="'.concat(n,'"'),"".concat(He,'="true"'),"".concat(We,'="').concat(Je,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ut(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Ut(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[He]="",n[We]=Je,n.dangerouslySetInnerHTML={__html:r},n),i=Wt();return i&&(a.nonce=i),[t().createElement("style",q({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new nn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ut(2);return t().createElement(un,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ut(3)}}(),"__sc-".concat(He,"__");const zn=jn.div`
    width: 500px;
    margin: 30px auto;
    padding: 107px 50px 115px;
    background: #fff;
    border-radius: 20px;
    .helpgent-login-title{
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-login-subtitle{
        font-size: 15px;
        color: var(--helpgent-color-light-gray);
        margin-bottom: 35px;
        display: block;
    }
    .helpgent-form-group{
        margin-bottom: 0;
        .helpgent-form-group__label{
            color: var(--helpgent-color-gray);
        }
        .helpgent-btn{
            margin-top: 25px;
            svg path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-user-dashboard__actions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding: 20px 30px 0;
        .helpgent-user-status{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--helpgent-color-gray);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-btn{
            svg path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-dark);
                }
            }
        }
    }

    .helpgent-success-message{
        background: rgba(40,168, 0, 0.15);
        padding: 15px 12px;
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        border-radius: 6px;
        span{
            display: block;
        }
    }

`,In=jn.div`
    .helpgent-user-dashboard__contents{
        transition: var(--helpgent-transition);
    }
    .helpgent-conversation-wrapper{
        main.helpgent-conversation-main{
            margin: 54px 0 30px;
        }
    }
    .helpgent-user-dashboard__actions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding: 20px 30px 0;
        .helpgent-user-status{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--helpgent-color-gray);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-btn{
            svg path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
    }
`,Tn=jn.div`
    cursor: pointer;
    .helpgent-guest-user-toggle,
    .helpgent-toggle-profile{
        position: absolute;
        right: 0;
        top: -45px;
        padding: 4px 14px 4px 4px;
        display: inline-flex;
        align-items: center;
        border-radius: 18px;
        background-color: var(--helpgent-color-bg-deep);
        svg{
            width: 28px;
            height: 28px;
            g circle{
                fill: var(--helpgent-color-white);
            }
            g path {
                fill: var(--helpgent-color-extra-light);
            }
        }
        span{
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            margin-left: 8px;
            color: var(--helpgent-color-gray);
        }
    }
    .helpgent-toggle-profile{
        img{
            width: 28px;
            height: 28px;
            border-radius: 50%;
            vertical-align: unset;
        }
        .helpgent-image-wrapper{
            width: 28px;
            height: 28px;
        }
    }
    .helpgent-toggle-profile__icon{
        svg{
            width: 8px;
            height: 8px;
            path{
                fill: var(--helpgent-color-gray);
            }
        }
    }
`,On=jn.div`
    position: fixed;
    //top: 30px;
    width: 100%;
    height: 100%;
    z-index: 1999999;
    background-color: var(--helpgent-color-bg-light);
    overflow: auto;
    transition: var(--helpgent-transition);
    &.helpgent-profile-fullscreen-visible{
        top: 30px !important;
    }

    .helpgent-profile-update,
    .helpgent-password-update{
        .helpgent-card{
            padding: 0;
        }
        .helpgent-card-header,
        .helpgent-card-body,
        .helpgent-card-footer
        {
            width: 100%;
            box-sizing: border-box;
        }
    }
    .helpgent-change-password{
        .helpgent-validate-danger{
            margin-left: 15px;
        }
    }
    .helpgent-profile-fullscreen__top{
        background-color: var(--helpgent-color-white);
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: sticky;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 10;
    }
    .helpgent-profile-fullscreen__content{
        display: flex;
        max-width: 800px;
        margin: 35px auto 70px;
        gap: 20px;
        height: auto;
        &.helpgent-logging-out{
            user-select: none;
            opacity: .6;
        }
    }
    .helpgent-profile-fullscreen__tab-menu{
        min-width: 200px;
    }
    .helpgent-fullscreen-remove{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 20px;
    }
    .helpgent-fullscreen-remove__text{
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-fullscreen-remove__btn{
        display: flex;
        height: 36px;
        width: 36px;
        background: #E6E6E6;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        svg{
            width: 12px;
            height: 12px;
        }
    }
    .helpgent-profile-fullscreen__title{
        font-size: 20px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
        margin: 0;
        font-family: inherit;
    }
    .helpgent-profile-fullscreen__tab{
        margin-top: 20px;
    }
    .helpgent-profile-fullscreen__tab-item{
        padding: 10px 16px;
        background: transparent;
        transition: var(--helpgent-transition);
        border-radius: 10px;
        display: block;
        width: 100%;
        font-size: 14px;
        font-weight: 600;
        color: var(--helpgent-color-gray);
        box-sizing: border-box;
        cursor: pointer;
        &.helpgent-active{
            background: #fff;
        }
    }
    .helpgent-profile-fullscreen__tab-content{
        flex: 1;
        .helpgent-profile-delete-account{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            margin-bottom: 60px;
            border: 1px solid #FFA8A8;
            border-radius: 10px;
            height: 40px;
            padding: 0 30px;
            color: var(--helpgent-color-danger);
            transition: var(--helpgent-transition);
            text-decoration: none;
            font-size: 14px;
            &:hover{
                background: var(--helpgent-color-danger);
                color: #fff;
                border-color: var(--helpgent-color-danger);
            }
        }
    }
`,Un=jn.div`
    .helpgent-alert-content{
        padding: 5px 30px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .helpgent-delete-account-alert-icon{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(239,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        svg{
            width: 24px;
            height: 26px;
            path{
                fill: var(--helpgent-color-danger);
            }
        }
    }
    h2{
        margin: 0 0 10px;
        padding: 0;
        font-size: 18px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
        font-family: inherit;
    }
    p{
        font-size: 14px;
        font-weight: 400;
        color: var(--helpgent-color-gray);
        margin: 0;
    }
`,Pn=window.wp.i18n;function Fn(){const[t,n]=(0,i.useState)(""),[r,a]=(0,i.useState)(""),[o,l]=(0,i.useState)(0),{mutateAsync:s,isLoading:p,isSuccess:c,isError:d,status:h}=B("/helpgent/guest/login"),u=(new DOMParser).parseFromString(r,"text/html").documentElement.textContent;return(0,e.createElement)(zn,null,(0,e.createElement)("div",{className:"helpgent-login-wrap"},(0,e.createElement)("h2",{className:"helpgent-login-title"},(0,Pn.__)("Login to your account","helpgent")),(0,e.createElement)("span",{className:"helpgent-login-subtitle"},(0,Pn.__)("Enter your email address and we’ll send a password to your email.","helpgent")),(0,e.createElement)("div",{className:"helpgent-form-group helpgent-form-group-column"},c?(0,e.createElement)("span",{className:"helpgent-notice helpgent-notice-success-light"},u):(0,e.createElement)(e.Fragment,null,d&&(0,e.createElement)("span",{className:"helpgent-notice helpgent-notice-danger helpgent-mb-15"},u),503!==o&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("label",{htmlFor:"helpgent-undefined",className:"helpgent-form-group__label"},(0,Pn.__)("Enter your email address","helpgent")),(0,e.createElement)("div",{className:"helpgent-form helpgent-form-group helpgent-form-icon-left"},(0,e.createElement)("span",{className:"helpgent-input-icon"},(0,e.createElement)(D,{src:j})),(0,e.createElement)("input",{type:"email",className:"helpgent-form-group__element",placeholder:(0,Pn.__)("Email address","helpgent"),value:t,onChange:e=>{n(e.target.value)}})),(0,e.createElement)("button",{className:"helpgent-btn helpgent-btn-primary helpgent-btn-block helpgent-btn-icon",onClick:async function(){try{const e={email:t},n=await s(e);a(n.message)}catch(e){console.log(e);const t=e,n=t.data?.status;t.messages&&Array.isArray(t.messages.email)?a(t.messages.email[0]):a(t.messages||t.message),l(n)}}},p?(0,Pn.__)("Logging","helpgent"):(0,Pn.__)("Login","helpgent")))))))}function Rn(e,t,n){return new Date(t).toLocaleDateString(e,n)}const Yn=jn.div`

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
`,Gn=function({isOpen:t,className:n,onClose:r,position:a="left",clearDomAfterClosed:o=!0,isBackDropActive:l=!0,children:s}){const p=(0,i.useRef)(document.querySelector("body")),c=(0,i.useRef)(document.getElementById("helpgent-drawer")||function(){const e=document.createElement("div");return e.setAttribute("id","helpgent-drawer"),e}()),d=((t,n)=>{const[r,a]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{let e;return t&&!r?a(!0):!t&&r&&(e=setTimeout((()=>a(!1)),n)),()=>{clearTimeout(e)}}),[n,t,r]),r})(t,300);return(0,i.useEffect)((()=>(p.current.appendChild(c.current),()=>{c.current.remove(),p.current.style.overflow=""})),[]),(0,i.useEffect)((()=>{if(t){p.current.style.overflow="hidden";const e=sessionStorage.getItem("isFullscreenActive");if(null===e)return;const t=document.querySelector(".helpgent-drawer-content");"1"===e?t.classList.add("helpgent-drawer-content--top-none"):t.classList.remove("helpgent-drawer-content--top-none")}else p.current.style.overflow=""}),[t]),d||!o||t?(0,i.createPortal)((0,e.createElement)(Yn,{"aria-hidden":!t,className:`${n} ${t?"helpgent-drawer-active":""} ${d?"helpgent-in":""}`},(0,e.createElement)("div",{className:`helpgent-drawer-content helpgent-drawer-${a}`,role:"dialog"},s),l&&(0,e.createElement)("div",{className:"helpgent-drawer-backdrop",onClick:r})),c.current):null},Bn=(jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`

`,jn.div`
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
`),qn=(jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`),Qn=(jn.div`
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
`,jn.div`
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
`,jn.table`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
    padding: 0 30px 25px;
    .helpgent-delete-alert-text{
        p{
            font-size: 14px;
            color: var(--helpgent-color-gray);
            margin: 0 0 27px;
        }
    }
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`,jn.div`
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
`);jn.div`
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
`,jn.div`
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
`;const Vn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjUuOTk5IiB2aWV3Qm94PSIwIDAgNiA1Ljk5OSI+CiAgPHBhdGggaWQ9InRpbWVzIiBkPSJNOS43LDlsMi4xNDgtMi4xNDNhLjUuNSwwLDEsMC0uNzA5LS43MDlMOC45OTQsOC4yOTEsNi44NTEsNi4xNDNhLjUuNSwwLDAsMC0uNzA5LjcwOUw4LjI5LDksNi4xNDIsMTEuMTM4YS41LjUsMCwxLDAsLjcwOS43MDlMOC45OTQsOS43bDIuMTQzLDIuMTQ4YS41LjUsMCwxLDAsLjcwOS0uNzA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuOTk0IC01Ljk5NikiIGZpbGw9IiMzYzNjM2MiLz4KPC9zdmc+Cg==",Hn=n.p+"images/user-placeholder.7c28a1aa.png",Zn=function({src:t,alt:n="",config:r}){const[a,i]=(0,e.useState)(!1),[o,l]=(0,e.useState)(!0);let s=t||Hn;function p(){i(!0)}function c(){l(!1)}return a&&(s=Hn),(0,e.createElement)("div",{className:"helpgent-image-wrapper"},o&&(0,e.createElement)("span",{className:"helpgent-image-loader"}),r?(0,e.createElement)("picture",{style:{display:"block",margin:"0px auto",width:"100%",height:"100%",objectFit:"cover",objectPosition:`${r?100*r.x:"center"}% ${r?100*r.y:"center"}%`}},(0,e.createElement)("source",{media:"(prefers-reduced-motion: reduce)",srcSet:s}),(0,e.createElement)("img",{src:s,alt:n,style:{display:"block",margin:"0px auto",width:"100%",height:"100%",objectFit:"cover",objectPosition:`${r?100*r.x:"center"}% ${r?100*r.y:"center"}%`},onError:p,onLoad:c})):(0,e.createElement)("img",{src:s,alt:n,onError:p,onLoad:c}))};function Wn(t){const{isGuest:n,isAdmin:r,userInfo:a,userProfileState:l,setUserProfileState:s,isProfileDrawerOpen:p,handleCloseProfileDrawer:c,setShowLogin:d,userLogoutMutation:h,isLoggingOut:u,queryClient:g}=t,m={year:"numeric",month:"long",day:"numeric"};return(0,e.createElement)(Gn,{isOpen:l?.isProfileDrawerOpen,className:"helpgent-profile-drawer",onClose:c},(0,e.createElement)(Qn,null,(0,e.createElement)("span",{className:"helpgent-profile-drawer-close",onClick:c},(0,e.createElement)(D,{src:Vn})),n?(0,e.createElement)("div",{className:"helpgent-admin-info helpgent-admin-info--guest"},(0,e.createElement)("div",{className:"helpgent-admin-info--guest-self"},(0,e.createElement)(Zn,{src:a?.avatar_url,alt:(0,Pn.__)("Helpgent Media","helpgent")}),(0,e.createElement)("span",{className:"helpgent-admin-info__name"},a?.name),(0,e.createElement)("span",{className:"helpgent-admin-info__joined-date"},(0,Pn.sprintf)((0,Pn.__)("Since: %s","helpgent"),Rn("en-US",a.created_at,m)))),(0,e.createElement)("div",{className:"helpgent-admin-info--guest-cta"},(0,e.createElement)("span",{className:"helpgent-admin-info--guest-cta__title"},(0,Pn.__)("You are logged in as guest","helpgent")),(0,e.createElement)("ul",{className:"helpgent-admin-info--guest-cta__list"},(0,e.createElement)("li",null,(0,Pn.sprintf)((0,Pn.__)("You have %s conversation","helpgent"),a?.totals[0]?.response)),(0,e.createElement)("li",null,Number(a?.totals[0]?.form)>1?(0,Pn.sprintf)((0,Pn.__)("You have submitted %s forms","helpgent"),a?.totals[0]?.form):(0,Pn.sprintf)((0,Pn.__)("You have submitted %s form","helpgent"),a?.totals[0]?.form))),1===a?.guest_user_auto_remove&&(0,e.createElement)("p",null,(0,Pn.__)("If you don’t create an account then all your data will be auto deleted as a guest user within 1 month.","helpgent")),(0,e.createElement)("a",{href:"#",className:"helpgent-admin-info--guest-cta-btn helpgent-btn helpgent-btn-primary helpgent-btn-md helpgent-btn-block"},(0,Pn.__)("Create an Account","helpgent")))):(0,e.createElement)("div",{className:"helpgent-admin-info helpgent-admin-info--admin"},(0,e.createElement)("div",{className:"helpgent-admin-info-top"},(0,e.createElement)("div",{className:"helpgent-admin-info__picture"},(0,e.createElement)(Zn,{src:a?.avatar_url,alt:(0,Pn.__)("Helpgent Media","helpgent")})),a?.name&&(0,e.createElement)("span",{className:"helpgent-admin-info__name"},a?.name),a?.email&&(0,e.createElement)("span",{className:"helpgent-admin-info__email"},a?.email),a?.company&&(0,e.createElement)("span",{className:"helpgent-admin-info__company"},a?.company),a?.number&&(0,e.createElement)("span",{className:"helpgent-admin-info__number"},a?.number),(0,e.createElement)("span",{className:"helpgent-admin-info__joined-date"},(0,Pn.sprintf)((0,Pn.__)("Joined HelpGent on %s","helpgent"),Rn("en-US",a?.created_at,m)))),(0,e.createElement)("div",{className:"helpgent-admin-info-bottom"},(0,e.createElement)("h5",{className:"helpgent-admin-info__title"},(0,Pn.__)("About Me","helpgent")),(0,e.createElement)("p",null,a?.about?a?.about:(0,Pn.__)("Not available","helpgent")))),!r&&(0,e.createElement)("div",{className:"helpgent-profile-action "+(n?"":"helpgent-has-border")},!n&&(0,e.createElement)("button",{className:"helpgent-btn helpgent-btn-sm helpgent-btn-light-gray helpgent-btn-block",onClick:()=>{s((e=>({...e,isProfileFullscreenModalOpen:!0})))}},(0,e.createElement)(D,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMy40NjkiIHZpZXdCb3g9IjAgMCAxNCAxMy40NjkiPgogIDxwYXRoIGlkPSJVbmlvbl8yIiBkYXRhLW5hbWU9IlVuaW9uIDIiIGQ9Ik04NTg4LjE3My0yNzc3LjdhLjU3LjU3LDAsMCwxLS4xNjgtLjQ3NWwuMzUtMi43NzJhLjU2Ni41NjYsMCwwLDEsLjE2Ni0uMzMzbDkuNDU2LTkuMjVzLjAwOS0uMDA5LjAxMy0uMDEzYTEuNzYxLDEuNzYxLDAsMCwxLDEuMjM3LS40NjIsMS43NTksMS43NTksMCwwLDEsMS4yMDkuNTE0bC44NTMuODMzYS4xMTIuMTEyLDAsMCwxLC4wMTYuMDE1LDEuNjgxLDEuNjgxLDAsMCwxLC40NywxLjIwNywxLjY4OCwxLjY4OCwwLDAsMS0uNTI2LDEuMTgzbC05LjQxMiw5LjE3MWEuNTg1LjU4NSwwLDAsMS0uMzMzLjE2MmwtMi44MzkuMzhjLS4wMjUsMC0uMDU0LDAtLjA3OSwwQS42LjYsMCwwLDEsODU4OC4xNzMtMjc3Ny43Wm0xLjMxNS0yLjkxNC0uMjMzLDEuODQ0LDEuOS0uMjUzLDkuMjc2LTkuMDM5YS4wMTIuMDEyLDAsMCwxLDAtLjAwNy41NjEuNTYxLDAsMCwwLC4wMjYtLjc5bC0uODQ5LS44MjlzMCwwLS4wMDYsMGEuNi42LDAsMCwwLS44MS0uMDI2bC0uMDMzLjAzLS42ODcuNjc0LjUzMS41MmEuNTU3LjU1NywwLDAsMSwwLC44MDUuNTkzLjU5MywwLDAsMS0uODI0LDBsLS41MzEtLjUxOFptNS42OTIsMi45YS41Ny41NywwLDAsMS0uNTY5LS41Ny41NjkuNTY5LDAsMCwxLC41NjktLjU3aDYuMjVhLjU2OS41NjksMCwwLDEsLjU3LjU3LjU3MS41NzEsMCwwLDEtLjU3LjU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1ODguMDAxIDI3OTEpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo="})," Edit profile"),l?.isProfileFullscreenModalOpen&&function(t,n={},...r){if("string"!=typeof t)throw new Error("Invalid input parameters");const a=(0,o.applyFilters)(t,n,...r);return Object.values(a).map((function(t,n){if("object"==typeof t)return(0,e.createElement)(i.Fragment,{key:n},t);{const r=t;return(0,e.createElement)(r,{key:n})}}))}("helpgent_response_fullscreen_Profile",{},{setUserProfileState:s,userInfo:a,queryClient:g,userLogoutMutation:h,isLoggingOut:u}),(0,e.createElement)("button",{className:"helpgent-btn helpgent-btn-sm helpgent-btn-light-gray helpgent-btn-block",onClick:e=>async function(e){e.preventDefault(),u||(n?(document.cookie="helpgent_guest_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",d(!0),s({...l,isProfileDrawerOpen:!1})):(await h(),s({...l,isProfileDrawerOpen:!1}),location.reload()))}(e)},(0,e.createElement)(D,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNC43MDQiIHZpZXdCb3g9IjAgMCAxNiAxNC43MDQiPgogIDxwYXRoIGlkPSJQYXRoXzM0ODciIGRhdGEtbmFtZT0iUGF0aCAzNDg3IiBkPSJNNS4xNTMsNS4xNTRhNy4zNTUsNy4zNTUsMCwwLDEsOC44NzUtMS4xN0EuODE3LjgxNywwLDEsMSwxMy4yMTEsNS40YTUuNzE5LDUuNzE5LDAsMSwwLDAsOS45MDkuODE3LjgxNywwLDEsMSwuODE4LDEuNDE1QTcuMzUzLDcuMzUzLDAsMCwxLDUuMTUzLDUuMTU0Wm0xMC4zNCwyLjE3YS44MTcuODE3LDAsMCwxLDEuMTU1LDBsMS41NDUsMS41NDVjLjE0Ni4xNDYuMjg4LjI4OC40LjQxOGExLjY1MiwxLjY1MiwwLDAsMSwuMzI4LjU2MSwxLjYzNCwxLjYzNCwwLDAsMSwwLDEuMDEsMS42NTEsMS42NTEsMCwwLDEtLjMyOC41NjFjLS4xMS4xMy0uMjUyLjI3Mi0uNC40MThsLTEuNTQ1LDEuNTQ1YS44MTcuODE3LDAsMCwxLTEuMTU1LTEuMTU1bDEuMDU2LTEuMDU2aC02LjJhLjgxNy44MTcsMCwwLDEsMC0xLjYzNGg2LjJMMTUuNDkzLDguNDc5QS44MTcuODE3LDAsMCwxLDE1LjQ5Myw3LjMyNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIgZmlsbD0iIzNjM2MzYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="}),u?(0,Pn.__)("Signing out","helpgent"):(0,Pn.__)("Sign out","helpgent")))))}const Jn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1LjQ0OCIgdmlld0JveD0iMCAwIDEwIDUuNDQ4Ij4KICA8cGF0aCBpZD0iYW5nbGUtc21hbGwtZG93biIgZD0iTTE0LjIwNyw3LjcwN2ExLDEsMCwwLDAtMS40MTUsMEw5LjczNSwxMC43NjRhLjMzMy4zMzMsMCwwLDEtLjQ3MSwwTDYuMjA3LDcuNzA3QTEsMSwwLDEsMCw0Ljc5Myw5LjEyMUw3Ljg1LDEyLjE3OWEyLjMzMywyLjMzMywwLDAsMCwzLjMsMGwzLjA1Ny0zLjA1N0ExLDEsMCwwLDAsMTQuMjA3LDcuNzA3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuNSAtNy40MTQpIiBmaWxsPSIjM2MzYzNjIi8+Cjwvc3ZnPgo=",Kn=function(t){const{setShowLogin:n,authorData:r,queryClient:a}=t,[o,l]=(0,i.useState)({isProfileDrawerOpen:!1,isProfileFullscreenModalOpen:!1}),{mutateAsync:s,isLoading:p}=B("/helpgent/user/logout");function c(){l((e=>({...e,isProfileDrawerOpen:!0})))}return(0,e.createElement)(Tn,null,r?.isLoading?(0,e.createElement)("div",{className:"helpgent-image-wrapper"},(0,e.createElement)("span",{className:"helpgent-image-loader"})):1===r?.data?.user?.is_guest?(0,e.createElement)("div",{className:"helpgent-guest-user-toggle",onClick:c},(0,e.createElement)(D,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBpZD0iR3JvdXBfMzI5MyIgZGF0YS1uYW1lPSJHcm91cCAzMjkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4OCAtNTQpIj4KICAgIDxnIGlkPSJHcm91cF8zMjkyIiBkYXRhLW5hbWU9Ikdyb3VwIDMyOTIiPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzMzOSIgZGF0YS1uYW1lPSJFbGxpcHNlIDMzOSIgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg4IDU0KSIgZmlsbD0iI2EyYTJhMiIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzMyNjMiIGRhdGEtbmFtZT0iR3JvdXAgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3MS44MzUgNjEpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzMyNjIiIGRhdGEtbmFtZT0iR3JvdXAgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMTY1KSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwXzMyNjEiIGRhdGEtbmFtZT0iR3JvdXAgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTk0NSIgZGF0YS1uYW1lPSJQYXRoIDE5NDUiIGQ9Ik0xMTUuNTA4LDkuMzQ3YTQuNzA3LDQuNzA3LDAsMCwwLDQuNzE2LTQuNjczLDQuNzE2LDQuNzE2LDAsMCwwLTkuNDMzLDBBNC43MDcsNC43MDcsMCwwLDAsMTE1LjUwOCw5LjM0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcuNDA4KSIgZmlsbD0iI2ZmZiIvPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTk0NiIgZGF0YS1uYW1lPSJQYXRoIDE5NDYiIGQ9Ik00MC4zMjgsMjUxLjI0MWE0LjM1LDQuMzUsMCwwLDAtLjQ3Mi0uODU3LDUuODQ0LDUuODQ0LDAsMCwwLTQuMDQyLTIuNTMxLjg2OC44NjgsMCwwLDAtLjU5NS4xNDMsNS4wMyw1LjAzLDAsMCwxLTUuOTA5LDAsLjc3My43NzMsMCwwLDAtLjU5NS0uMTQzLDUuOCw1LjgsMCwwLDAtNC4wNDIsMi41MzEsNS4wMTQsNS4wMTQsMCwwLDAtLjQ3Mi44NTcuNDMyLjQzMiwwLDAsMCwuMDIuMzg4LDguMTM5LDguMTM5LDAsMCwwLC41NTQuODE2LDcuNzY4LDcuNzY4LDAsMCwwLC45NDQsMS4wNjEsMTIuMjczLDEyLjI3MywwLDAsMCwuOTQ0LjgxNiw5LjQsOS40LDAsMCwwLDExLjE2MSwwLDksOSwwLDAsMCwuOTQ0LS44MTYsOS40MzcsOS40MzcsMCwwLDAsLjk0NC0xLjA2MSw3LjE1NCw3LjE1NCwwLDAsMCwuNTU0LS44MTZBLjM0Ny4zNDcsMCwwLDAsNDAuMzI4LDI1MS4yNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQuMTY1IC0yMzguMTYpIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"}),(0,e.createElement)("span",null," ",(0,Pn.__)("Guest","helpgent")),(0,e.createElement)("span",{className:"helpgent-toggle-profile__icon"},(0,e.createElement)(D,{src:Jn}))):(0,e.createElement)("div",{className:"helpgent-toggle-profile",onClick:c},(0,e.createElement)(Zn,{src:r?.data?.user?.avatar_url}),(0,e.createElement)("span",null,r?.data?.user?.name),(0,e.createElement)("span",{className:"helpgent-toggle-profile__icon"},(0,e.createElement)(D,{src:Jn}))),(0,e.createElement)(Wn,{isGuest:1===r?.data?.user?.is_guest,userInfo:r?.data?.user,userProfileState:o,setUserProfileState:l,handleCloseProfileDrawer:function(){l((e=>({...e,isProfileDrawerOpen:!1,isProfileFullscreenModalOpen:!1})))},setShowLogin:n,userLogoutMutation:s,isLoggingOut:p,queryClient:a}))},$n=e=>e&&"object"==typeof e&&!Array.isArray(e),Xn=e=>e&&"object"==typeof e,er=e=>{try{const t=JSON.parse(e);return t&&"object"==typeof t?t:e}catch(t){return e}},tr=(e,t)=>{const n=helpgent_localization&&helpgent_localization.rest_nonce?helpgent_localization.rest_nonce:"",r=helpgent_localization&&helpgent_localization.rest_url?helpgent_localization.rest_url:"",a={method:"post",baseURL:t&&t.useRESTRootURL?(i=r,i.replace(/\/helpgent\/?$/,"")):r,headers:{"X-WP-Nonce":n}};var i;function o(e){return l(e.headers)||(e.headers={}),void 0===e.headers["X-WP-Nonce"]&&(e.headers["X-WP-Nonce"]=n),e}const l=e=>e&&"object"==typeof e&&!Array.isArray(e);return t=l(t)?o({...a,...t}):a,F((n=>function(e,t){var n;e=(t=$n(t)?{method:"get",baseURL:"",headers:null,params:null,data:null,onUploadProgress:null,signal:null,returnAllData:!1,...t}:{}).baseURL?`${(e=>e.replace(/^\/*/,"").replace(/\/*$/,""))(t.baseURL)}/${e}`:e,$n(t.params)&&(e+=(n=t.params,"?"+Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&")));let r=new XMLHttpRequest;if("function"==typeof t.onUploadProgress&&r.upload.addEventListener("progress",(e=>{e.progress=e.loaded/e.total*100,t.onUploadProgress(e)})),r.open(t.method.toUpperCase(),e),$n(t.headers))for(const e in t.headers)r.setRequestHeader(e,t.headers[e]);function a(){return e=r.getAllResponseHeaders(),t=/[\r\n]+/,e.trim().split(t).reduce(((e,t)=>{if(!t)return e;const[n,r]=t.split(": ");try{e[n]=JSON.parse(r)}catch(t){e[n]=r}return e}),{});var e,t}function i(){const e=er(r.response);if(r.status>=400){const t={success:!1,cancelled:!1,data:{},message:"Operation failed",headers:a(),statusCode:r.status};return Xn(e)?{...t,...e}:t}return t.returnAllData?{success:!0,data:e,headers:a(),statusCode:r.status}:e}return t.signal&&t.signal.addEventListener("abort",(()=>r.abort())),r.send(t.data),new Promise(((e,t)=>{r.onload=()=>{const n=i();r.status<400?e(n):t(Xn(n)?n:{success:!1,rejected:!1,message:"Operation failed"})},r.onerror=()=>{const e=er(r.response);t(Xn(e)?e:{success:!1,cancelled:!1,message:"Operation failed"})},r.onabort=()=>{t({...i(),success:!1,cancelled:!0,message:"Operation canceled"})}}))}(e,o({...t,...n}))))};var nr=e=>"checkbox"===e.type,rr=e=>e instanceof Date,ar=e=>null==e;const ir=e=>"object"==typeof e;var or=e=>!ar(e)&&!Array.isArray(e)&&ir(e)&&!rr(e),lr=e=>or(e)&&e.target?nr(e.target)?e.target.checked:e.target.value:e,sr=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),pr=e=>{const t=e.constructor&&e.constructor.prototype;return or(t)&&t.hasOwnProperty("isPrototypeOf")},cr="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function dr(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(cr&&(e instanceof Blob||e instanceof FileList)||!n&&!or(e))return e;if(t=n?[]:{},n||pr(e))for(const n in e)e.hasOwnProperty(n)&&(t[n]=dr(e[n]));else t=e}return t}var hr=e=>Array.isArray(e)?e.filter(Boolean):[],ur=e=>void 0===e,gr=(e,t,n)=>{if(!t||!or(e))return n;const r=hr(t.split(/[,[\].]+?/)).reduce(((e,t)=>ar(e)?e:e[t]),e);return ur(r)||r===e?ur(e[t])?n:e[t]:r},mr=e=>"boolean"==typeof e,fr=e=>/^\w*$/.test(e),xr=e=>hr(e.replace(/["|']|\]/g,"").split(/\.|\[/)),br=(e,t,n)=>{let r=-1;const a=fr(t)?[t]:xr(t),i=a.length,o=i-1;for(;++r<i;){const t=a[r];let i=n;if(r!==o){const n=e[t];i=or(n)||Array.isArray(n)?n:isNaN(+a[r+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};const vr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},yr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},wr="pattern",_r="required",Mr=e.createContext(null),kr=()=>e.useContext(Mr);var Cr=(e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==yr.all&&(t._proxyFormState[a]=!r||yr.all),n&&(n[a]=!0),e[a]}});return a},Er=e=>or(e)&&!Object.keys(e).length,Sr=(e,t,n,r)=>{n(e);const{name:a,...i}=e;return Er(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!r||yr.all)))},Ar=e=>Array.isArray(e)?e:[e],Nr=(e,t,n)=>!e||!t||e===t||Ar(e).some((e=>e&&(n?e===t:e.startsWith(t)||t.startsWith(e))));function Lr(t){const n=e.useRef(t);n.current=t,e.useEffect((()=>{const e=!t.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{e&&e.unsubscribe()}}),[t.disabled])}var Dr=e=>"string"==typeof e,jr=(e,t,n,r,a)=>Dr(e)?(r&&t.watch.add(e),gr(n,e,a)):Array.isArray(e)?e.map((e=>(r&&t.watch.add(e),gr(n,e)))):(r&&(t.watchAll=!0),n);const zr=t=>t.render(function(t){const n=kr(),{name:r,disabled:a,control:i=n.control,shouldUnregister:o}=t,l=sr(i._names.array,r),s=function(t){const n=kr(),{control:r=n.control,name:a,defaultValue:i,disabled:o,exact:l}=t||{},s=e.useRef(a);s.current=a,Lr({disabled:o,subject:r._subjects.values,next:e=>{Nr(s.current,e.name,l)&&c(dr(jr(s.current,r._names,e.values||r._formValues,!1,i)))}});const[p,c]=e.useState(r._getWatch(a,i));return e.useEffect((()=>r._removeUnmounted())),p}({control:i,name:r,defaultValue:gr(i._formValues,r,gr(i._defaultValues,r,t.defaultValue)),exact:!0}),p=function(t){const n=kr(),{control:r=n.control,disabled:a,name:i,exact:o}=t||{},[l,s]=e.useState(r._formState),p=e.useRef(!0),c=e.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=e.useRef(i);return d.current=i,Lr({disabled:a,next:e=>p.current&&Nr(d.current,e.name,o)&&Sr(e,c.current,r._updateFormState)&&s({...r._formState,...e}),subject:r._subjects.state}),e.useEffect((()=>(p.current=!0,c.current.isValid&&r._updateValid(!0),()=>{p.current=!1})),[r]),Cr(l,r,c.current,!1)}({control:i,name:r}),c=e.useRef(i.register(r,{...t.rules,value:s,...mr(t.disabled)?{disabled:t.disabled}:{}}));return e.useEffect((()=>{const e=i._options.shouldUnregister||o,t=(e,t)=>{const n=gr(i._fields,e);n&&n._f&&(n._f.mount=t)};if(t(r,!0),e){const e=dr(gr(i._options.defaultValues,r));br(i._defaultValues,r,e),ur(gr(i._formValues,r))&&br(i._formValues,r,e)}return()=>{(l?e&&!i._state.action:e)?i.unregister(r):t(r,!1)}}),[r,i,l,o]),e.useEffect((()=>{gr(i._fields,r)&&i._updateDisabledField({disabled:a,fields:i._fields,name:r,value:gr(i._fields,r)._f.value})}),[a,r,i]),{field:{name:r,value:s,...mr(a)||p.disabled?{disabled:p.disabled||a}:{},onChange:e.useCallback((e=>c.current.onChange({target:{value:lr(e),name:r},type:vr.CHANGE})),[r]),onBlur:e.useCallback((()=>c.current.onBlur({target:{value:gr(i._formValues,r),name:r},type:vr.BLUR})),[r,i]),ref:e=>{const t=gr(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:p,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!gr(p.errors,r)},isDirty:{enumerable:!0,get:()=>!!gr(p.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!gr(p.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!gr(p.validatingFields,r)},error:{enumerable:!0,get:()=>gr(p.errors,r)}})}}(t));var Ir=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},Tr=e=>({isOnSubmit:!e||e===yr.onSubmit,isOnBlur:e===yr.onBlur,isOnChange:e===yr.onChange,isOnAll:e===yr.all,isOnTouch:e===yr.onTouched}),Or=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const Ur=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const n=gr(e,a);if(n){const{_f:e,...i}=n;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!r)break;if(e.ref&&t(e.ref,e.name)&&!r)break;Ur(i,t)}else or(i)&&Ur(i,t)}}};var Pr=(e,t,n)=>{const r=Ar(gr(e,n));return br(r,"root",t[n]),br(e,n,r),e},Fr=e=>"file"===e.type,Rr=e=>"function"==typeof e,Yr=e=>{if(!cr)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Gr=e=>Dr(e),Br=e=>"radio"===e.type,qr=e=>e instanceof RegExp;const Qr={value:!1,isValid:!1},Vr={value:!0,isValid:!0};var Hr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ur(e[0].attributes.value)?ur(e[0].value)||""===e[0].value?Vr:{value:e[0].value,isValid:!0}:Vr:Qr}return Qr};const Zr={isValid:!1,value:null};var Wr=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Zr):Zr;function Jr(e,t,n="validate"){if(Gr(e)||Array.isArray(e)&&e.every(Gr)||mr(e)&&!e)return{type:n,message:Gr(e)?e:"",ref:t}}var Kr=e=>or(e)&&!qr(e)?e:{value:e,message:""},$r=async(e,t,n,r,a)=>{const{ref:i,refs:o,required:l,maxLength:s,minLength:p,min:c,max:d,pattern:h,validate:u,name:g,valueAsNumber:m,mount:f,disabled:x}=e._f,b=gr(t,g);if(!f||x)return{};const v=o?o[0]:i,y=e=>{r&&v.reportValidity&&(v.setCustomValidity(mr(e)?"":e||""),v.reportValidity())},w={},_=Br(i),M=nr(i),k=_||M,C=(m||Fr(i))&&ur(i.value)&&ur(b)||Yr(i)&&""===i.value||""===b||Array.isArray(b)&&!b.length,E=Ir.bind(null,g,n,w),S=(e,t,n,r="maxLength",a="minLength")=>{const o=e?t:n;w[g]={type:e?r:a,message:o,ref:i,...E(e?r:a,o)}};if(a?!Array.isArray(b)||!b.length:l&&(!k&&(C||ar(b))||mr(b)&&!b||M&&!Hr(o).isValid||_&&!Wr(o).isValid)){const{value:e,message:t}=Gr(l)?{value:!!l,message:l}:Kr(l);if(e&&(w[g]={type:_r,message:t,ref:v,...E(_r,t)},!n))return y(t),w}if(!(C||ar(c)&&ar(d))){let e,t;const r=Kr(d),a=Kr(c);if(ar(b)||isNaN(b)){const n=i.valueAsDate||new Date(b),o=e=>new Date((new Date).toDateString()+" "+e),l="time"==i.type,s="week"==i.type;Dr(r.value)&&b&&(e=l?o(b)>o(r.value):s?b>r.value:n>new Date(r.value)),Dr(a.value)&&b&&(t=l?o(b)<o(a.value):s?b<a.value:n<new Date(a.value))}else{const n=i.valueAsNumber||(b?+b:b);ar(r.value)||(e=n>r.value),ar(a.value)||(t=n<a.value)}if((e||t)&&(S(!!e,r.message,a.message,"max","min"),!n))return y(w[g].message),w}if((s||p)&&!C&&(Dr(b)||a&&Array.isArray(b))){const e=Kr(s),t=Kr(p),r=!ar(e.value)&&b.length>+e.value,a=!ar(t.value)&&b.length<+t.value;if((r||a)&&(S(r,e.message,t.message),!n))return y(w[g].message),w}if(h&&!C&&Dr(b)){const{value:e,message:t}=Kr(h);if(qr(e)&&!b.match(e)&&(w[g]={type:wr,message:t,ref:i,...E(wr,t)},!n))return y(t),w}if(u)if(Rr(u)){const e=Jr(await u(b,t),v);if(e&&(w[g]={...e,...E("validate",e.message)},!n))return y(e.message),w}else if(or(u)){let e={};for(const r in u){if(!Er(e)&&!n)break;const a=Jr(await u[r](b,t),v,r);a&&(e={...a,...E(r,a.message)},y(a.message),n&&(w[g]=e))}if(!Er(e)&&(w[g]={ref:v,...e},!n))return w}return y(!0),w};function Xr(e,t){const n=Array.isArray(t)?t:fr(t)?[t]:xr(t),r=1===n.length?e:function(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ur(e)?r++:e[t[r++]];return e}(e,n),a=n.length-1,i=n[a];return r&&delete r[i],0!==a&&(or(r)&&Er(r)||Array.isArray(r)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!ur(e[t]))return!1;return!0}(r))&&Xr(e,n.slice(0,-1)),e}var ea=()=>{let e=[];return{get observers(){return e},next:t=>{for(const n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},ta=e=>ar(e)||!ir(e);function na(e,t){if(ta(e)||ta(t))return e===t;if(rr(e)&&rr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const n=e[a];if(!r.includes(a))return!1;if("ref"!==a){const e=t[a];if(rr(n)&&rr(e)||or(n)&&or(e)||Array.isArray(n)&&Array.isArray(e)?!na(n,e):n!==e)return!1}}return!0}var ra=e=>"select-multiple"===e.type,aa=e=>Br(e)||nr(e),ia=e=>Yr(e)&&e.isConnected,oa=e=>{for(const t in e)if(Rr(e[t]))return!0;return!1};function la(e,t={}){const n=Array.isArray(e);if(or(e)||n)for(const n in e)Array.isArray(e[n])||or(e[n])&&!oa(e[n])?(t[n]=Array.isArray(e[n])?[]:{},la(e[n],t[n])):ar(e[n])||(t[n]=!0);return t}function sa(e,t,n){const r=Array.isArray(e);if(or(e)||r)for(const r in e)Array.isArray(e[r])||or(e[r])&&!oa(e[r])?ur(t)||ta(n[r])?n[r]=Array.isArray(e[r])?la(e[r],[]):{...la(e[r])}:sa(e[r],ar(t)?{}:t[r],n[r]):n[r]=!na(e[r],t[r]);return n}var pa=(e,t)=>sa(e,t,la(t)),ca=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ur(e)?e:t?""===e?NaN:e?+e:e:n&&Dr(e)?new Date(e):r?r(e):e;function da(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Fr(t)?t.files:Br(t)?Wr(e.refs).value:ra(t)?[...t.selectedOptions].map((({value:e})=>e)):nr(t)?Hr(e.refs).value:ca(ur(t.value)?e.ref.value:t.value,e)}var ha=(e,t,n,r)=>{const a={};for(const n of e){const e=gr(t,n);e&&br(a,n,e._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},ua=e=>ur(e)?e:qr(e)?e.source:or(e)?qr(e.value)?e.value.source:e.value:e,ga=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ma(e,t,n){const r=gr(e,n);if(r||fr(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const r=a.join("."),i=gr(t,r),o=gr(e,r);if(i&&!Array.isArray(i)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};a.pop()}return{name:n}}var fa=(e,t,n,r,a)=>!a.isOnAll&&(!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:!(n?r.isOnChange:a.isOnChange)||e),xa=(e,t)=>!hr(gr(e,t)).length&&Xr(e,t);const ba={mode:yr.onSubmit,reValidateMode:yr.onChange,shouldFocusError:!0};function va(e={}){let t,n={...ba,...e},r={submitCount:0,isDirty:!1,isLoading:Rr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},a={},i=(or(n.defaultValues)||or(n.values))&&dr(n.defaultValues||n.values)||{},o=n.shouldUnregister?{}:dr(i),l={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:ea(),array:ea(),state:ea()},h=Tr(n.mode),u=Tr(n.reValidateMode),g=n.criteriaMode===yr.all,m=async e=>{if(c.isValid||e){const e=n.resolver?Er((await v()).errors):await y(a,!0);e!==r.isValid&&d.state.next({isValid:e})}},f=(e,t)=>{(c.isValidating||c.validatingFields)&&((e||Array.from(s.mount)).forEach((e=>{e&&(t?br(r.validatingFields,e,t):Xr(r.validatingFields,e))})),d.state.next({validatingFields:r.validatingFields,isValidating:!Er(r.validatingFields)}))},x=(e,t,n,r)=>{const s=gr(a,e);if(s){const a=gr(o,e,ur(n)?gr(i,e):n);ur(a)||r&&r.defaultChecked||t?br(o,e,t?a:da(s._f)):M(e,a),l.mount&&m()}},b=(e,t,n,o,l)=>{let s=!1,p=!1;const h={name:e},u=!!(gr(a,e)&&gr(a,e)._f&&gr(a,e)._f.disabled);if(!n||o){c.isDirty&&(p=r.isDirty,r.isDirty=h.isDirty=w(),s=p!==h.isDirty);const n=u||na(gr(i,e),t);p=!(u||!gr(r.dirtyFields,e)),n||u?Xr(r.dirtyFields,e):br(r.dirtyFields,e,!0),h.dirtyFields=r.dirtyFields,s=s||c.dirtyFields&&p!==!n}if(n){const t=gr(r.touchedFields,e);t||(br(r.touchedFields,e,n),h.touchedFields=r.touchedFields,s=s||c.touchedFields&&t!==n)}return s&&l&&d.state.next(h),s?h:{}},v=async e=>{f(e,!0);const t=await n.resolver(o,n.context,ha(e||s.mount,a,n.criteriaMode,n.shouldUseNativeValidation));return f(e),t},y=async(e,t,a={valid:!0})=>{for(const i in e){const l=e[i];if(l){const{_f:e,...p}=l;if(e){const p=s.array.has(e.name);f([i],!0);const c=await $r(l,o,g,n.shouldUseNativeValidation&&!t,p);if(f([i]),c[e.name]&&(a.valid=!1,t))break;!t&&(gr(c,e.name)?p?Pr(r.errors,c,e.name):br(r.errors,e.name,c[e.name]):Xr(r.errors,e.name))}p&&await y(p,t,a)}}return a.valid},w=(e,t)=>(e&&t&&br(o,e,t),!na(N(),i)),_=(e,t,n)=>jr(e,s,{...l.mount?o:ur(t)?i:Dr(e)?{[e]:t}:t},n,t),M=(e,t,n={})=>{const r=gr(a,e);let i=t;if(r){const n=r._f;n&&(!n.disabled&&br(o,e,ca(t,n)),i=Yr(n.ref)&&ar(t)?"":t,ra(n.ref)?[...n.ref.options].forEach((e=>e.selected=i.includes(e.value))):n.refs?nr(n.ref)?n.refs.length>1?n.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):n.refs[0]&&(n.refs[0].checked=!!i):n.refs.forEach((e=>e.checked=e.value===i)):Fr(n.ref)?n.ref.value="":(n.ref.value=i,n.ref.type||d.values.next({name:e,values:{...o}})))}(n.shouldDirty||n.shouldTouch)&&b(e,i,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&A(e)},k=(e,t,n)=>{for(const r in t){const i=t[r],o=`${e}.${r}`,l=gr(a,o);!s.array.has(e)&&ta(i)&&(!l||l._f)||rr(i)?M(o,i,n):k(o,i,n)}},C=(e,t,n={})=>{const p=gr(a,e),h=s.array.has(e),u=dr(t);br(o,e,u),h?(d.array.next({name:e,values:{...o}}),(c.isDirty||c.dirtyFields)&&n.shouldDirty&&d.state.next({name:e,dirtyFields:pa(i,o),isDirty:w(e,u)})):!p||p._f||ar(u)?M(e,u,n):k(e,u,n),Or(e,s)&&d.state.next({...r}),d.values.next({name:l.mount?e:void 0,values:{...o}})},E=async i=>{l.mount=!0;const x=i.target;let w=x.name,_=!0;const M=gr(a,w),k=e=>{_=Number.isNaN(e)||e===gr(o,w,e)};if(M){let l,C;const E=x.type?da(M._f):lr(i),S=i.type===vr.BLUR||i.type===vr.FOCUS_OUT,N=!ga(M._f)&&!n.resolver&&!gr(r.errors,w)&&!M._f.deps||fa(S,gr(r.touchedFields,w),r.isSubmitted,u,h),L=Or(w,s,S);br(o,w,E),S?(M._f.onBlur&&M._f.onBlur(i),t&&t(0)):M._f.onChange&&M._f.onChange(i);const D=b(w,E,S,!1),j=!Er(D)||L;if(!S&&d.values.next({name:w,type:i.type,values:{...o}}),N)return c.isValid&&m(),j&&d.state.next({name:w,...L?{}:D});if(!S&&L&&d.state.next({...r}),n.resolver){const{errors:e}=await v([w]);if(k(E),_){const t=ma(r.errors,a,w),n=ma(e,a,t.name||w);l=n.error,w=n.name,C=Er(e)}}else f([w],!0),l=(await $r(M,o,g,n.shouldUseNativeValidation))[w],f([w]),k(E),_&&(l?C=!1:c.isValid&&(C=await y(a,!0)));_&&(M._f.deps&&A(M._f.deps),((n,a,i,o)=>{const l=gr(r.errors,n),s=c.isValid&&mr(a)&&r.isValid!==a;var h;if(e.delayError&&i?(h=()=>((e,t)=>{br(r.errors,e,t),d.state.next({errors:r.errors})})(n,i),t=e=>{clearTimeout(p),p=setTimeout(h,e)},t(e.delayError)):(clearTimeout(p),t=null,i?br(r.errors,n,i):Xr(r.errors,n)),(i?!na(l,i):l)||!Er(o)||s){const e={...o,...s&&mr(a)?{isValid:a}:{},errors:r.errors,name:n};r={...r,...e},d.state.next(e)}})(w,C,l,D))}},S=(e,t)=>{if(gr(r.errors,t)&&e.focus)return e.focus(),1},A=async(e,t={})=>{let i,o;const l=Ar(e);if(n.resolver){const t=await(async e=>{const{errors:t}=await v(e);if(e)for(const n of e){const e=gr(t,n);e?br(r.errors,n,e):Xr(r.errors,n)}else r.errors=t;return t})(ur(e)?e:l);i=Er(t),o=e?!l.some((e=>gr(t,e))):i}else e?(o=(await Promise.all(l.map((async e=>{const t=gr(a,e);return await y(t&&t._f?{[e]:t}:t)})))).every(Boolean),(o||r.isValid)&&m()):o=i=await y(a);return d.state.next({...!Dr(e)||c.isValid&&i!==r.isValid?{}:{name:e},...n.resolver||!e?{isValid:i}:{},errors:r.errors}),t.shouldFocus&&!o&&Ur(a,S,e?l:s.mount),o},N=e=>{const t={...l.mount?o:i};return ur(e)?t:Dr(e)?gr(t,e):e.map((e=>gr(t,e)))},L=(e,t)=>({invalid:!!gr((t||r).errors,e),isDirty:!!gr((t||r).dirtyFields,e),error:gr((t||r).errors,e),isValidating:!!gr(r.validatingFields,e),isTouched:!!gr((t||r).touchedFields,e)}),D=(e,t,n)=>{const i=(gr(a,e,{_f:{}})._f||{}).ref,o=gr(r.errors,e)||{},{ref:l,message:s,type:p,...c}=o;br(r.errors,e,{...c,...t,ref:i}),d.state.next({name:e,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&i&&i.focus&&i.focus()},j=(e,t={})=>{for(const l of e?Ar(e):s.mount)s.mount.delete(l),s.array.delete(l),t.keepValue||(Xr(a,l),Xr(o,l)),!t.keepError&&Xr(r.errors,l),!t.keepDirty&&Xr(r.dirtyFields,l),!t.keepTouched&&Xr(r.touchedFields,l),!t.keepIsValidating&&Xr(r.validatingFields,l),!n.shouldUnregister&&!t.keepDefaultValue&&Xr(i,l);d.values.next({values:{...o}}),d.state.next({...r,...t.keepDirty?{isDirty:w()}:{}}),!t.keepIsValid&&m()},z=({disabled:e,name:t,field:n,fields:r,value:a})=>{if(mr(e)&&l.mount||e){const i=e?void 0:ur(a)?da(n?n._f:gr(r,t)._f):a;br(o,t,i),b(t,i,!1,!1,!0)}},I=(e,t={})=>{let r=gr(a,e);const o=mr(t.disabled);return br(a,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),s.mount.add(e),r?z({field:r,disabled:t.disabled,name:e,value:t.value}):x(e,!0,t.value),{...o?{disabled:t.disabled}:{},...n.progressive?{required:!!t.required,min:ua(t.min),max:ua(t.max),minLength:ua(t.minLength),maxLength:ua(t.maxLength),pattern:ua(t.pattern)}:{},name:e,onChange:E,onBlur:E,ref:o=>{if(o){I(e,t),r=gr(a,e);const n=ur(o.value)&&o.querySelectorAll&&o.querySelectorAll("input,select,textarea")[0]||o,l=aa(n),s=r._f.refs||[];if(l?s.find((e=>e===n)):n===r._f.ref)return;br(a,e,{_f:{...r._f,...l?{refs:[...s.filter(ia),n,...Array.isArray(gr(i,e))?[{}]:[]],ref:{type:n.type,name:e}}:{ref:n}}}),x(e,!1,void 0,n)}else r=gr(a,e,{}),r._f&&(r._f.mount=!1),(n.shouldUnregister||t.shouldUnregister)&&(!sr(s.array,e)||!l.action)&&s.unMount.add(e)}}},T=()=>n.shouldFocusError&&Ur(a,S,s.mount),O=(e,t)=>async i=>{let l;i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let s=dr(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:e,values:t}=await v();r.errors=e,s=t}else await y(a);if(Xr(r.errors,"root"),Er(r.errors)){d.state.next({errors:{}});try{await e(s,i)}catch(e){l=e}}else t&&await t({...r.errors},i),T(),setTimeout(T);if(d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Er(r.errors)&&!l,submitCount:r.submitCount+1,errors:r.errors}),l)throw l},U=(t,n={})=>{const p=t?dr(t):i,h=dr(p),u=Er(t),g=u?i:h;if(n.keepDefaultValues||(i=p),!n.keepValues){if(n.keepDirtyValues)for(const e of s.mount)gr(r.dirtyFields,e)?br(g,e,gr(o,e)):C(e,gr(g,e));else{if(cr&&ur(t))for(const e of s.mount){const t=gr(a,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Yr(e)){const t=e.closest("form");if(t){t.reset();break}}}}a={}}o=e.shouldUnregister?n.keepDefaultValues?dr(i):{}:dr(g),d.array.next({values:{...g}}),d.values.next({values:{...g}})}s={mount:n.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!c.isValid||!!n.keepIsValid||!!n.keepDirtyValues,l.watch=!!e.shouldUnregister,d.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:!u&&(n.keepDirty?r.isDirty:!(!n.keepDefaultValues||na(t,i))),isSubmitted:!!n.keepIsSubmitted&&r.isSubmitted,dirtyFields:u?{}:n.keepDirtyValues?n.keepDefaultValues&&o?pa(i,o):r.dirtyFields:n.keepDefaultValues&&t?pa(i,t):n.keepDirty?r.dirtyFields:{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitSuccessful:!!n.keepIsSubmitSuccessful&&r.isSubmitSuccessful,isSubmitting:!1})},P=(e,t)=>U(Rr(e)?e(o):e,t);return{control:{register:I,unregister:j,getFieldState:L,handleSubmit:O,setError:D,_executeSchema:v,_getWatch:_,_getDirty:w,_updateValid:m,_removeUnmounted:()=>{for(const e of s.unMount){const t=gr(a,e);t&&(t._f.refs?t._f.refs.every((e=>!ia(e))):!ia(t._f.ref))&&j(e)}s.unMount=new Set},_updateFieldArray:(e,t=[],n,s,p=!0,h=!0)=>{if(s&&n){if(l.action=!0,h&&Array.isArray(gr(a,e))){const t=n(gr(a,e),s.argA,s.argB);p&&br(a,e,t)}if(h&&Array.isArray(gr(r.errors,e))){const t=n(gr(r.errors,e),s.argA,s.argB);p&&br(r.errors,e,t),xa(r.errors,e)}if(c.touchedFields&&h&&Array.isArray(gr(r.touchedFields,e))){const t=n(gr(r.touchedFields,e),s.argA,s.argB);p&&br(r.touchedFields,e,t)}c.dirtyFields&&(r.dirtyFields=pa(i,o)),d.state.next({name:e,isDirty:w(e,t),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else br(o,e,t)},_updateDisabledField:z,_getFieldArray:t=>hr(gr(l.mount?o:i,t,e.shouldUnregister?gr(i,t,[]):[])),_reset:U,_resetDefaultValues:()=>Rr(n.defaultValues)&&n.defaultValues().then((e=>{P(e,n.resetOptions),d.state.next({isLoading:!1})})),_updateFormState:e=>{r={...r,...e}},_disableForm:e=>{mr(e)&&(d.state.next({disabled:e}),Ur(a,((t,n)=>{const r=gr(a,n);r&&(t.disabled=r._f.disabled||e,Array.isArray(r._f.refs)&&r._f.refs.forEach((t=>{t.disabled=r._f.disabled||e})))}),0,!1))},_subjects:d,_proxyFormState:c,_setErrors:e=>{r.errors=e,d.state.next({errors:r.errors,isValid:!1})},get _fields(){return a},get _formValues(){return o},get _state(){return l},set _state(e){l=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return r},set _formState(e){r=e},get _options(){return n},set _options(e){n={...n,...e}}},trigger:A,register:I,handleSubmit:O,watch:(e,t)=>Rr(e)?d.values.subscribe({next:n=>e(_(void 0,t),n)}):_(e,t,!0),setValue:C,getValues:N,reset:P,resetField:(e,t={})=>{gr(a,e)&&(ur(t.defaultValue)?C(e,dr(gr(i,e))):(C(e,t.defaultValue),br(i,e,dr(t.defaultValue))),t.keepTouched||Xr(r.touchedFields,e),t.keepDirty||(Xr(r.dirtyFields,e),r.isDirty=t.defaultValue?w(e,dr(gr(i,e))):w()),t.keepError||(Xr(r.errors,e),c.isValid&&m()),d.state.next({...r}))},clearErrors:e=>{e&&Ar(e).forEach((e=>Xr(r.errors,e))),d.state.next({errors:e?r.errors:{}})},unregister:j,setError:D,setFocus:(e,t={})=>{const n=gr(a,e),r=n&&n._f;if(r){const e=r.refs?r.refs[0]:r.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:L}}function ya(t={}){const n=e.useRef(),r=e.useRef(),[a,i]=e.useState({isDirty:!1,isValidating:!1,isLoading:Rr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:Rr(t.defaultValues)?void 0:t.defaultValues});n.current||(n.current={...va(t),formState:a});const o=n.current.control;return o._options=t,Lr({subject:o._subjects.state,next:e=>{Sr(e,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),e.useEffect((()=>o._disableForm(t.disabled)),[o,t.disabled]),e.useEffect((()=>{if(o._proxyFormState.isDirty){const e=o._getDirty();e!==a.isDirty&&o._subjects.state.next({isDirty:e})}}),[o,a.isDirty]),e.useEffect((()=>{t.values&&!na(t.values,r.current)?(o._reset(t.values,o._options.resetOptions),r.current=t.values,i((e=>({...e})))):o._resetDefaultValues()}),[t.values,o]),e.useEffect((()=>{t.errors&&o._setErrors(t.errors)}),[t.errors,o]),e.useEffect((()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()})),e.useEffect((()=>{t.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})}),[t.shouldUnregister,o]),n.current.formState=Cr(a,o),n.current}const wa=window.helpgent.components;async function _a(e,t,n){if(!e?.avatar instanceof File)return void setUploadProfileError((0,Pn.__)("You must upload profile picture","helpgent"));0===e.avatar?.length&&delete e.avatar;const r=new FormData;Object.keys(e).forEach((t=>{r.append(t,e[t])}));try{const e=await t({data:r});n.invalidateQueries(["helpgent-author-data"]),(0,o.doAction)("helpgent-toast",{message:e.message})}catch(e){}}var Ma=n(71301),ka=n.n(Ma);const Ca=[".jpg",".jpeg","png"];const Ea=[{label:"(UTC-11:00) Midway Island (Pacific/Midway)",value:"Pacific/Midway"},{label:"(UTC-10:00) Hawaii (Pacific/Honolulu)",value:"Pacific/Honolulu"},{label:"(UTC-08:00) Alaska (America/Anchorage)",value:"America/Anchorage"},{label:"(UTC-07:00) Baja California (America/Tijuana)",value:"America/Tijuana"},{label:"(UTC-07:00) Pacific Time US and Canada) (America/Los_Angeles)",value:"America/Los_Angeles"},{label:"(UTC-07:00) Arizona (America/Phoenix)",value:"America/Phoenix"},{label:"(UTC-06:00) Chihuahua (America/Chihuahua)",value:"America/Chihuahua"},{label:"(UTC-06:00) Mountain Time US and Canada) (America/Denver)",value:"America/Denver"},{label:"(UTC-06:00) Central America (America/Belize)",value:"America/Belize"},{label:"(UTC-05:00) Central Time US and Canada) (America/Chicago)",value:"America/Chicago"},{label:"(UTC-05:00) Guadalajara (America/Mexico_City)",value:"America/Mexico_City"},{label:"(UTC-06:00) Saskatchewan (America/Regina)",value:"America/Regina"},{label:"(UTC-05:00) Bogota (America/Bogota)",value:"America/Bogota"},{label:"(UTC-05:00) Kingston (America/Jamaica)",value:"America/Jamaica"},{label:"(UTC-04:00) Eastern Time US and Canada) (America/New_York)",value:"America/New_York"},{label:"(UTC-04:00) Indiana East) (America/Indiana/Indianapolis)",value:"America/Indiana/Indianapolis"},{label:"(UTC-04:30) Caracas (America/Caracas)",value:"America/Caracas"},{label:"(UTC-03:00) Asuncion (America/Asuncion)",value:"America/Asuncion"},{label:"(UTC-03:00) Atlantic Time Canada) (America/Halifax)",value:"America/Halifax"},{label:"(UTC-04:00) Cuiaba (America/Cuiaba)",value:"America/Cuiaba"},{label:"(UTC-04:00) Georgetown (America/Manaus)",value:"America/Manaus"},{label:"(UTC-02:30) Newfoundland and Labrador (America/St_Johns)",value:"America/St_Johns"},{label:"(UTC-03:00) Brasilia (America/Sao_Paulo)",value:"America/Sao_Paulo"},{label:"(UTC-03:00) Buenos Aires (America/Buenos_Aires)",value:"America/Buenos_Aires"},{label:"(UTC-03:00) Cayenne (America/Cayenne)",value:"America/Cayenne"},{label:"(UTC-02:00) Greenland (America/Godthab)",value:"America/Godthab"},{label:"(UTC-03:00) Montevideo (America/Montevideo)",value:"America/Montevideo"},{label:"(UTC-03:00) Salvador (America/Bahia)",value:"America/Bahia"},{label:"(UTC-03:00) Santiago (America/Santiago)",value:"America/Santiago"},{label:"(UTC-02:00) Mid-Atlantic (America/Noronha)",value:"America/Noronha"},{label:"(UTC+00:00) Azores (Atlantic/Azores)",value:"Atlantic/Azores"},{label:"(UTC-01:00) Cape Verde Islands (Atlantic/Cape_Verde)",value:"Atlantic/Cape_Verde"},{label:"(UTC+01:00) Dublin (Europe/London)",value:"Europe/London"},{label:"(UTC+01:00) Casablanca (Africa/Casablanca)",value:"Africa/Casablanca"},{label:"(UTC+00:00) Monrovia (Africa/Monrovia)",value:"Africa/Monrovia"},{label:"(UTC+02:00) Amsterdam (Europe/Amsterdam)",value:"Europe/Amsterdam"},{label:"(UTC+02:00) Belgrade (Europe/Belgrade)",value:"Europe/Belgrade"},{label:"(UTC+02:00) Brussels (Europe/Brussels)",value:"Europe/Brussels"},{label:"(UTC+02:00) Sarajevo (Europe/Warsaw)",value:"Europe/Warsaw"},{label:"(UTC+01:00) West Central Africa (Africa/Algiers)",value:"Africa/Algiers"},{label:"(UTC+02:00) Windhoek (Africa/Windhoek)",value:"Africa/Windhoek"},{label:"(UTC+03:00) Athens (Europe/Athens)",value:"Europe/Athens"},{label:"(UTC+03:00) Beirut (Asia/Beirut)",value:"Asia/Beirut"},{label:"(UTC+02:00) Cairo (Africa/Cairo)",value:"Africa/Cairo"},{label:"(UTC+03:00) Damascus (Asia/Damascus)",value:"Asia/Damascus"},{label:"(UTC+03:00) Eastern Europe (EET)",value:"EET"},{label:"(UTC+02:00) Harare (Africa/Harare)",value:"Africa/Harare"},{label:"(UTC+03:00) Helsinki (Europe/Helsinki)",value:"Europe/Helsinki"},{label:"(UTC+03:00) Istanbul (Asia/Istanbul)",value:"Asia/Istanbul"},{label:"(UTC+03:00) Jerusalem (Asia/Jerusalem)",value:"Asia/Jerusalem"},{label:"(UTC+02:00) Kaliningrad (Europe/Kaliningrad)",value:"Europe/Kaliningrad"},{label:"(UTC+02:00) Tripoli (Africa/Tripoli)",value:"Africa/Tripoli"},{label:"(UTC+03:00) Amman (Asia/Amman)",value:"Asia/Amman"},{label:"(UTC+03:00) Baghdad (Asia/Baghdad)",value:"Asia/Baghdad"},{label:"(UTC+03:00) Kuwait (Asia/Kuwait)",value:"Asia/Kuwait"},{label:"(UTC+03:00) Minsk (Europe/Minsk)",value:"Europe/Minsk"},{label:"(UTC+03:00) Moscow (Europe/Moscow)",value:"Europe/Moscow"},{label:"(UTC+03:00) Nairobi (Africa/Nairobi)",value:"Africa/Nairobi"},{label:"(UTC+03:30) Tehran (Asia/Tehran)",value:"Asia/Tehran"},{label:"(UTC+04:00) Abu Dhabi (Asia/Muscat)",value:"Asia/Muscat"},{label:"(UTC+05:00) Baku (Asia/Baku)",value:"Asia/Baku"},{label:"(UTC+04:00) Izhevsk (Europe/Samara)",value:"Europe/Samara"},{label:"(UTC+04:00) Port Louis (Indian/Mauritius)",value:"Indian/Mauritius"},{label:"(UTC+04:00) Tbilisi (Asia/Tbilisi)",value:"Asia/Tbilisi"},{label:"(UTC+04:00) Yerevan (Asia/Yerevan)",value:"Asia/Yerevan"},{label:"(UTC+04:30) Kabul (Asia/Kabul)",value:"Asia/Kabul"},{label:"(UTC+05:00) Tashkent (Asia/Tashkent)",value:"Asia/Tashkent"},{label:"(UTC+05:00) Ekaterinburg (Asia/Yekaterinburg)",value:"Asia/Yekaterinburg"},{label:"(UTC+05:00) Islamabad (Asia/Karachi)",value:"Asia/Karachi"},{label:"(UTC+05:30) Chennai (Asia/Kolkata)",value:"Asia/Kolkata"},{label:"(UTC+05:30) Sri Jayawardenepura (Asia/Colombo)",value:"Asia/Colombo"},{label:"(UTC+05:45) Kathmandu (Asia/Katmandu)",value:"Asia/Katmandu"},{label:"(UTC+06:00) Astana (Asia/Almaty)",value:"Asia/Almaty"},{label:"(UTC+06:00) Dhaka (Asia/Dhaka)",value:"Asia/Dhaka"},{label:"(UTC+06:00) Novosibirsk (Asia/Novosibirsk)",value:"Asia/Novosibirsk"},{label:"(UTC+06:30) Yangon Rangoon) (Asia/Rangoon)",value:"Asia/Rangoon"},{label:"(UTC+07:00) Bangkok (Asia/Bangkok)",value:"Asia/Bangkok"},{label:"(UTC+07:00) Krasnoyarsk (Asia/Krasnoyarsk)",value:"Asia/Krasnoyarsk"},{label:"(UTC+08:00) Beijing (Asia/Chongqing)",value:"Asia/Chongqing"},{label:"(UTC+08:00) Irkutsk (Asia/Irkutsk)",value:"Asia/Irkutsk"},{label:"(UTC+08:00) Kuala Lumpur (Asia/Kuala_Lumpur)",value:"Asia/Kuala_Lumpur"},{label:"(UTC+08:00) Perth (Australia/Perth)",value:"Australia/Perth"},{label:"(UTC+08:00) Taipei (Asia/Taipei)",value:"Asia/Taipei"},{label:"(UTC+08:00) Ulaanbaatar (Asia/Ulaanbaatar)",value:"Asia/Ulaanbaatar"},{label:"(UTC+09:00) Osaka (Asia/Tokyo)",value:"Asia/Tokyo"},{label:"(UTC+09:00) Seoul (Asia/Seoul)",value:"Asia/Seoul"},{label:"(UTC+09:00) Yakutsk (Asia/Yakutsk)",value:"Asia/Yakutsk"},{label:"(UTC+10:30) Adelaide (Australia/Adelaide)",value:"Australia/Adelaide"},{label:"(UTC+09:30) Darwin (Australia/Darwin)",value:"Australia/Darwin"},{label:"(UTC+10:00) Brisbane (Australia/Brisbane)",value:"Australia/Brisbane"},{label:"(UTC+11:00) Canberra (Australia/Canberra)",value:"Australia/Canberra"},{label:"(UTC+10:00) Guam (Pacific/Guam)",value:"Pacific/Guam"},{label:"(UTC+11:00) Hobart (Australia/Hobart)",value:"Australia/Hobart"},{label:"(UTC+10:00) Magadan (Asia/Magadan)",value:"Asia/Magadan"},{label:"(UTC+10:00) Vladivostok (Asia/Vladivostok)",value:"Asia/Vladivostok"},{label:"(UTC+11:00) Chokirdakh (Asia/Srednekolymsk)",value:"Asia/Srednekolymsk"},{label:"(UTC+11:00) Solomon Islands (Pacific/Guadalcanal)",value:"Pacific/Guadalcanal"},{label:"(UTC+12:00) Anadyr (Asia/Anadyr)",value:"Asia/Anadyr"},{label:"(UTC+13:00) Auckland (Pacific/Auckland)",value:"Pacific/Auckland"},{label:"(UTC+12:00) Fiji Islands (Pacific/Fiji)",value:"Pacific/Fiji"},{label:"(UTC+13:00) Nuku'alofa (Pacific/Tongatapu)",value:"Pacific/Tongatapu"},{label:"(UTC+14:00) Samoa (Pacific/Apia)",value:"Pacific/Apia"}],Sa=window.wp.components;function Aa(t){const{children:n,title:r,className:a,AlertContent:i,onCancel:o,onFooterCancel:l,onSubmit:s,hasCancelButton:p,hasSubmitButton:c,isDisableAction:d,submitText:h,cancelText:u,cancelBtnType:g,submitBtnType:m="danger",isDismissible:f}=t;return(0,e.createElement)(Sa.Modal,{title:r,overlayClassName:`helpgent-modal helpgent-modal-default ${a}`,onRequestClose:o,isDismissible:f},(0,e.createElement)(qn,null,n,!d&&(0,e.createElement)("div",{className:`helpgent-modal-action ${a}-action`},p&&(0,e.createElement)("a",{href:"#",className:`helpgent-btn helpgent-btn-${g||"light"} helpgent-btn-md helpgent-modal-action__cancel`,onClick:e=>{e.preventDefault(),l?l():o()}},u||(0,Pn.__)("Cancel","helpgent")),c&&(0,e.createElement)("a",{href:"#",className:`helpgent-btn helpgent-btn-md helpgent-modal-action__btn helpgent-btn-${m}`,onClick:e=>{e.preventDefault(),s()}},h))))}function Na(t){const{newEmail:n,setIsEmailUpdateModalActive:r,queryClient:a}=t,l=(0,i.useRef)(null),{mutateAsync:s,isLoading:p}=B("/helpgent/user/email"),{register:c,handleSubmit:d,setValue:h,watch:u,formState:{errors:g}}=ya({mode:"onChange"}),m=u("email");return(0,i.useEffect)((()=>{h("email",n)}),[]),(0,e.createElement)(Aa,{title:(0,Pn.__)("Change Email","helpgent"),onCancel:function(){r(!1)},onSubmit:function(){l.current.click()},isActiveSubmit:!0,isActiveFormSubmit:!0,hasCancelButton:!0,hasSubmitButton:!0,submitBtnType:"primary",submitText:p?(0,Pn.__)("Changing Email"):(0,Pn.__)("Change Email"),className:"helpgent-change-email-modal"},(0,e.createElement)("form",{onSubmit:d((async e=>{if(!p)try{await s(e),r(!1),a.invalidateQueries(["helpgent-author-data"]),(0,o.doAction)("helpgent-toast",{message:(0,Pn.__)("Email updated successfully","helpgent")})}catch(e){}})),className:"helpgent-change-email-modal__form"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"helpgent-new-email",className:"helpgent-form-group__label"},(0,Pn.__)("New email","helpgent")),(0,e.createElement)("input",{type:"email",...c("email",{required:{value:!0,message:(0,Pn.__)("The field is required","helpgent")},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+$/i,message:(0,Pn.__)("Invalid email address","helpgent")}}),id:"helpgent-new-email",className:"helpgent-form-group__element"}),g?.email&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},g?.email?.message)),(0,e.createElement)("div",{className:"helpgent-form-group helpgent-mb-0"},(0,e.createElement)("label",{htmlFor:"helpgent-confirm-email",className:"helpgent-form-group__label"},(0,Pn.__)("Confirm your mail","helpgent")),(0,e.createElement)("input",{type:"email",...c("email_confirmation",{required:{value:!0,message:(0,Pn.__)("The field is required","helpgent")},validate:{matchEmail:e=>e===m||(0,Pn.__)("Email not matched","helpgent")}}),id:"helpgent-confirm-email",className:"helpgent-form-group__element"}),g?.email_confirmation&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},g?.email_confirmation?.message)),(0,e.createElement)("input",{ref:l,type:"submit",style:{display:"none"}})))}function La(t){const{userInfo:n,profileUpdating:r,updateProfileMutation:a,queryClient:o}=t,{register:l,handleSubmit:s,setValue:p,control:c,watch:d,formState:{errors:h}}=ya({mode:"onChange"}),[u,g]=(0,i.useState)(null),[m,f]=(0,i.useState)({firstName:n.first_name,lastName:n.last_name}),[x,b]=(0,i.useState)([{label:n.name,value:n.name}]),[v,y]=(0,i.useState)(null),[w,_]=(0,i.useState)(!1),[M,k]=(0,i.useState)(null);function C(e,t){let n=[];if(e&&t)n.push({label:e,value:e}),n.push({label:t,value:t}),n.push({label:e+" "+t,value:e+" "+t}),n.push({label:t+" "+e,value:t+" "+e});else if(e||t){let r=e||t;n.push({label:r,value:r})}return n}return(0,i.useEffect)((()=>{Object.keys(n).forEach((e=>{"avatar_url"!==e&&p(e,n[e])}))}),[]),(0,i.useEffect)((()=>{if(""===m.firstName&&""===m.lastName)return;let e=C(m.firstName,m.lastName);C(m.firstName,m.lastName).some((e=>e.label===n.name&&e.value===n.name))||e.unshift({label:n.name,value:n.name}),b(e)}),[m]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("form",{className:"helpgent-profile-update",onSubmit:s((async e=>{r||_a(e,a,o)}))},(0,e.createElement)(Bn,{className:"helpgent-card"},(0,e.createElement)("div",{className:"helpgent-card-header helpgent-profile-update__top"},(0,e.createElement)("h4",null," ",(0,Pn.__)("Profile","helpgent")),(0,e.createElement)("span",null," ",(0,Pn.__)("Setup your profile details and preferences.","helpgent"))),(0,e.createElement)("div",{className:"helpgent-card-body helpgent-profile-update__body"},(0,e.createElement)("div",{className:"helpgent-profile-update__author"},(0,e.createElement)(Zn,{src:u||n?.avatar_url,alt:(0,Pn.__)("Helpgent Media","helpgent")}),(0,e.createElement)("div",{className:"helpgent-profile-update__author-info"},(0,e.createElement)("span",{className:"helpgent-profile-update__author-name"},n?.name),(0,e.createElement)("span",{className:"helpgent-profile-update__author-joined-date"},"Joined HelpGent on"," ",Rn("en-US",n?.created_at,{year:"numeric",month:"long",day:"numeric"})))),(0,e.createElement)("div",{className:"helpgent-change-profile-img"},(0,e.createElement)("input",{type:"file",id:"helpgent-change-profile-img-toggle",...l("avatar"),accept:"image/png, image/jpeg, image/jpg",style:{display:"none"},onChange:e=>function(e,t,n,r){const a=e.target.files?e.target.files[0]:null;if(a)try{ka().imageFileResizer(a,100,100,"jpeg",80,0,(e=>{(function(e,t){const n=`.${e.name.split(".").pop()}`;return Ca.includes(n)?!(e.size>1e4&&(t((0,Pn.__)("Your file was too large","helpgent")),1)):(t((0,Pn.__)("Your selected file type is not supported.","helpgent")),!1)})(e,n)&&(r("avatar",e),t(URL.createObjectURL(e)))}),"file",50,50)}catch(e){console.log(e)}}(e,g,y,p)}),(0,e.createElement)("label",{htmlFor:"helpgent-change-profile-img-toggle",className:"helpgent-btn helpgent-btn-light helpgent-btn-sm"},(0,Pn.__)("Change Profile Image","helpgent")),v&&(0,e.createElement)("div",{className:"helpgent-validate-danger"},v)),(0,e.createElement)("div",{className:"helpgent-profile-update__form"},(0,e.createElement)("div",{className:"helpgent-profile-update__group-element"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"author-first-name",className:"helpgent-form-group__label"},(0,Pn.__)("First Name","helpgent")),(0,e.createElement)("input",{type:"text",id:"author-first-name",className:"helpgent-form-group__element",...l("first_name"),onChange:e=>{f({...m,firstName:e.target.value}),p("first_name",e.target.value)}})),(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"author-last-name",className:"helpgent-form-group__label"},(0,Pn.__)("Last name","helpgent")),(0,e.createElement)("input",{type:"text",className:"helpgent-form-group__element",id:"author-last-name",...l("last_name"),onChange:e=>{f({...m,lastName:e.target.value}),p("last_name",e.target.value)}}))),(0,e.createElement)("div",{className:"helpgent-profile-update__inline-element"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"helpgent-author-account-email",className:"helpgent-form-group__label"},(0,Pn.__)("Account Email","helpgent")),(0,e.createElement)("div",{className:"helpgent-form-group-change-mail"},(0,e.createElement)("input",{type:"text",id:"helpgent-author-account-email",value:n.email,readOnly:!0,className:"helpgent-form-group__element"}),(0,e.createElement)("a",{href:"#",onClick:e=>{e.preventDefault(),_(!0)},className:"helpgent-btn helpgent-btn-sm helpgent-btn-light"},(0,Pn.__)("Change Email","helpgent"))))),(0,e.createElement)("div",{className:"helpgent-profile-update__inline-element"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"helpgent-author-display-name",className:"helpgent-form-group__label"},(0,Pn.__)("Display name publicly as","helpgent")),(0,e.createElement)(zr,{name:"name",control:c,rules:{required:{value:!0,message:(0,Pn.__)("The field is required","helpgent")}},render:({field:t})=>(0,e.createElement)(wa.Select,{inputId:"helpgent-author-display-name",className:"helpgent-select helpgent-select-time-zone",classNamePrefix:"helpgent-select",placeholder:"Please select",options:x,defaultValue:x.filter((e=>e.value===n?.name))[0],onChange:e=>{p("name",e.value)}})}),h.name&&(0,e.createElement)("div",{className:"helpgent-validate-danger"},h.name.message))),(0,e.createElement)("div",{className:"helpgent-profile-update__inline-element"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"helpgent-author-timezone",className:"helpgent-form-group__label"},(0,Pn.__)("Time zone","helpgent")),(0,e.createElement)(zr,{name:"timezone",control:c,rules:{required:{value:!0,message:(0,Pn.__)("The field is required","helpgent")}},render:({field:t})=>(0,e.createElement)(wa.Select,{inputId:"helpgent-author-timezone",className:"helpgent-select helpgent-select-time-zone",classNamePrefix:"helpgent-select",placeholder:"Please select",options:Ea,defaultValue:Ea.filter((e=>e.value===n?.timezone))[0],onChange:e=>{p("timezone",e.value)}})}),h.timezone&&(0,e.createElement)("div",{className:"helpgent-validate-danger"},h.timezone.message))),(0,e.createElement)("div",{className:"helpgent-profile-update__inline-element"},(0,e.createElement)("div",{className:"helpgent-form-group helpgent-mb-0"},(0,e.createElement)("label",{htmlFor:"helpgent-author-about",className:"helpgent-form-group__label"},(0,Pn.__)("About Me","helpgent")),(0,e.createElement)("textarea",{name:"helpgent-author-about",id:"helpgent-author-about",maxLength:180,...l("about",{maxLength:{value:180,message:(0,Pn.__)("The about must not be greater than 180 characters.","helpgent")}}),onChange:async e=>{p("about",e.target.value)},className:"helpgent-form-group__element"}),(0,e.createElement)("div",{className:"helpgent-about-area-info"},(0,e.createElement)("span",{className:"helpgent-letter-countdown"},void 0===d("about")?.length?(0,Pn.__)("0 ","helpgent"):d("about")?.length,"/ ",(0,Pn.__)("180","helpgent"))))))),(0,e.createElement)("div",{className:"helpgent-card-footer helpgent-profile-update__bottom"},(0,e.createElement)("button",{className:"helpgent-btn helpgent-btn-md helpgent-btn-primary "+(r?"helpgent-btn-disabled":""),type:"submit"},r?(0,Pn.__)("Updating","helpgent"):(0,Pn.__)("Update","helpgent")," ","profile"),M&&(0,e.createElement)("span",{className:"helpgent-notice helpgent-notice-success"},M)))),w&&(0,e.createElement)(Na,{newEmail:n.email,setIsEmailUpdateModalActive:_,queryClient:o}))}const Da="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC42NjciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNC42NjcgMTYiPgogIDxnIGlkPSJ0cmFzaF8xXyIgZGF0YS1uYW1lPSJ0cmFzaCAoMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMS4zMzMpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzE1MDgiIGRhdGEtbmFtZT0iUGF0aCAxNTA4IiBkPSJNMzYsM2ExLDEsMCwwLDAtMS0xSDMyLjQ4MmEzLDMsMCwwLDAtMi44MTYtMmgtMkEzLDMsMCwwLDAsMjQuODUsMkgyMi4zMzNhMSwxLDAsMCwwLTEsMWgwYTEsMSwwLDAsMCwxLDFoLjMzM3Y4LjMzM0EzLjY2NywzLjY2NywwLDAsMCwyNi4zMzMsMTZIMzFhMy42NjcsMy42NjcsMCwwLDAsMy42NjctMy42NjdWNEgzNUExLDEsMCwwLDAsMzYsM1ptLTMuMzMzLDkuMzMzQTEuNjY3LDEuNjY3LDAsMCwxLDMxLDE0SDI2LjMzM2ExLjY2NywxLjY2NywwLDAsMS0xLjY2Ny0xLjY2N1Y0aDhaIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTA5IiBkYXRhLW5hbWU9IlBhdGggMTUwOSIgZD0iTTE3MS42NjcsMTk4YTEsMSwwLDAsMCwxLTF2LTRhMSwxLDAsMCwwLTIsMHY0QTEsMSwwLDAsMCwxNzEuNjY3LDE5OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDQuNjY3IC0xODYpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTEwIiBkYXRhLW5hbWU9IlBhdGggMTUxMCIgZD0iTTI3OC4zMzMsMTk4YTEsMSwwLDAsMCwxLTF2LTRhMSwxLDAsMCwwLTIsMHY0QTEsMSwwLDAsMCwyNzguMzMzLDE5OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDggLTE4NikiIGZpbGw9IiM2ZTZlNmUiLz4KICA8L2c+Cjwvc3ZnPgo=";function ja(t){const{userInfo:n,deleteAccountNotice:r}=t;return(0,e.createElement)(Un,null,(0,e.createElement)("div",{className:"helpgent-alert-content"},(0,e.createElement)("span",{className:"helpgent-delete-account-alert-icon"},(0,e.createElement)(D,{src:Da})),(0,e.createElement)("h2",null,(0,Pn.__)("Are you sure you want to delete your account?","helpgent")),(0,e.createElement)("p",null,(0,Pn.sprintf)((0,Pn.__)("You are about to delete your account namely: %s","helpgent"),n.name)),r?(0,e.createElement)("div",{className:"helpgent-notice helpgent-notice-danger helpgent-mt-20"},(0,e.createElement)("p",null,r)):(0,e.createElement)("div",{className:"helpgent-notice helpgent-notice-warning helpgent-mt-20"},(0,e.createElement)("p",null,(0,Pn.__)("Your account will be scheduled for deletion. After 15 days your account will be deleted. If you login during time, the delete request will be canceled","helpgent")))))}async function za(e,t,n){return n=n||{},await G()({path:e,method:"DELETE",data:t,...n}).then((e=>e))}const Ia=(e,t)=>F((n=>"object"==typeof n?(n.id&&n.data&&(e=`${e}/${n.id}`,n=n.data),za(e,n,t)):za(e=n?`${e}/${n}`:e,n||{},t))),Ta="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxMS40NzkiIHZpZXdCb3g9IjAgMCAxNSAxMS40NzkiPgogIDxnIGlkPSJleWVfM18iIGRhdGEtbmFtZT0iZXllICgzKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNTkuNzczKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTI0IiBkYXRhLW5hbWU9IlBhdGggMTUyNCIgZD0iTTE0LjQsNjMuNTY1YTguMzE1LDguMzE1LDAsMCwwLTYuOS0zLjc5MkE4LjMxNSw4LjMxNSwwLDAsMCwuNiw2My41NjVhMy40NTUsMy40NTUsMCwwLDAsMCwzLjg5MSw4LjMxNSw4LjMxNSwwLDAsMCw2LjksMy44LDguMzE1LDguMzE1LDAsMCwwLDYuOS0zLjc5MkEzLjQ1NSwzLjQ1NSwwLDAsMCwxNC40LDYzLjU2NVptLTEuNTUzLDIuODI3QTYuMzc2LDYuMzc2LDAsMCwxLDcuNSw2OS4zNjhhNi4zNzYsNi4zNzYsMCwwLDEtNS4zNDYtMi45NzUsMS41NjMsMS41NjMsMCwwLDEsMC0xLjc1OUE2LjM3Niw2LjM3NiwwLDAsMSw3LjUsNjEuNjU4YTYuMzc2LDYuMzc2LDAsMCwxLDUuMzQ2LDIuOTc1QTEuNTYzLDEuNTYzLDAsMCwxLDEyLjg0Niw2Ni4zOTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzI4MyIgZGF0YS1uYW1lPSJFbGxpcHNlIDI4MyIgY3g9IjIuNTIxIiBjeT0iMi41MjEiIHI9IjIuNTIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ljk3OCA2Mi45OTEpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPC9nPgo8L3N2Zz4K",Oa="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC40MzMiIHZpZXdCb3g9IjAgMCAxNSAxNC40MzMiPgogIDxnIGlkPSJleWUtY3Jvc3NlZF8xXyIgZGF0YS1uYW1lPSJleWUtY3Jvc3NlZCAoMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTkuNjE5KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTI1IiBkYXRhLW5hbWU9IlBhdGggMTUyNSIgZD0iTTE0LjQsMTQuODc5aDBhOS42MTMsOS42MTMsMCwwLDAtMS43MjEtMS45bDEuNzctMS43NjlhLjk0Mi45NDIsMCwwLDAtMS4zMzMtMS4zMzFsLTIuMDM5LDIuMDRBNy44NzgsNy44NzgsMCwwLDAsNy41LDExLjA4Nyw4LjMxOSw4LjMxOSwwLDAsMCwuNiwxNC44NzlhMy40NjEsMy40NjEsMCwwLDAsMCwzLjg5Miw5LjYxMyw5LjYxMywwLDAsMCwxLjcyMSwxLjlMLjU1LDIyLjQ0M2EuOTQzLjk0MywwLDAsMCwxLjMzMywxLjMzM2wyLjAzOS0yLjA0YTcuODc4LDcuODc4LDAsMCwwLDMuNTc3LjgzMSw4LjMxOSw4LjMxOSwwLDAsMCw2LjktMy43OTJBMy40NjEsMy40NjEsMCwwLDAsMTQuNCwxNC44NzlaTTIuMTUzLDE3LjcwN2ExLjU2MSwxLjU2MSwwLDAsMSwwLTEuNzU5QTYuMzc1LDYuMzc1LDAsMCwxLDcuNSwxMi45NzJhNi4xMjksNi4xMjksMCwwLDEsMi4xNDYuMzc3TDguNDgxLDE0LjUxM2EyLjUxMywyLjUxMywwLDAsMC0zLjMsMy4zTDMuNjU0LDE5LjM0QTcuNTk0LDcuNTk0LDAsMCwxLDIuMTUzLDE3LjcwN1ptMTAuNjkyLDBBNi4zNzUsNi4zNzUsMCwwLDEsNy41LDIwLjY4MmE2LjEyOSw2LjEyOSwwLDAsMS0yLjE0Ni0uMzc3TDYuNTE4LDE5LjE0YTIuNTEzLDIuNTEzLDAsMCwwLDMuMy0zLjNsMS41MzEtMS41MzFhNy42LDcuNiwwLDAsMSwxLjUsMS42MzQsMS41NjEsMS41NjEsMCwwLDEsMCwxLjc1OVoiIGZpbGw9IiM2ZTZlNmUiLz4KICA8L2c+Cjwvc3ZnPgo=";function Ua(){const{mutateAsync:t,isLoading:n}=B("/helpgent/user/password"),[r,a]=(0,i.useState)(null),[l,s]=(0,i.useState)(null),{register:p,handleSubmit:c,resetField:d,watch:h,formState:{errors:u}}=ya({mode:"onChange"}),g=h("password");return(0,e.createElement)("form",{className:"helpgent-profile-fullscreen__tab-content helpgent-password-update",onSubmit:c((async e=>{if(!n)try{await t(e),(0,o.doAction)("helpgent-toast",{message:(0,Pn.__)("Password updated successfully","helpgent")}),d("old_password"),d("password"),d("password_confirmation"),a(null)}catch(e){a(e?.messages?.password)}}))},(0,e.createElement)(Bn,{className:"helpgent-card helpgent-change-password"},(0,e.createElement)("div",{className:"helpgent-card-header"},(0,e.createElement)("h4",{className:"helpgent-change-password__title"},(0,Pn.__)("Change Password","helpgent")),(0,e.createElement)("span",null,(0,Pn.__)("Setup and update your password","helpgent")," ")),(0,e.createElement)("div",{className:"helpgent-card-body helpgent-update-password-body"},(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"author-current-password",className:"helpgent-form-group__label"},(0,Pn.__)("Current password","helpgent")),(0,e.createElement)("div",{className:"helpgent-form-group__box"},(0,e.createElement)("input",{type:"old"===l?"text":"password",...p("old_password",{required:(0,Pn.__)("This field is required","helpgent")}),id:"author-current-password",className:"helpgent-form-group__element"}),(0,e.createElement)("span",{className:"helpgent-form-group__element-icon",onClick:()=>{s("old"===l?null:"old")}},(0,e.createElement)(D,{src:"old"===l?Ta:Oa}))),u?.old_password&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},u?.old_password?.message)),(0,e.createElement)("div",{className:"helpgent-form-group"},(0,e.createElement)("label",{htmlFor:"author-new-password",className:"helpgent-form-group__label"},(0,Pn.__)("New password","helpgent")),(0,e.createElement)("div",{className:"helpgent-form-group__box"},(0,e.createElement)("input",{type:"new"===l?"text":"password",id:"author-new-password",className:"helpgent-form-group__element",...p("password",{required:{value:!0,message:(0,Pn.__)("This field is required","helpgent")},maxLength:{value:100,message:(0,Pn.__)("Max 100 character","helpgent")},minLength:{value:8,message:(0,Pn.__)("Min 8 character","helpgent")}})}),(0,e.createElement)("span",{className:"helpgent-form-group__element-icon",onClick:()=>{s("new"===l?null:"new")}},(0,e.createElement)(D,{src:"new"===l?Ta:Oa}))),u?.password&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},u?.password?.message)),(0,e.createElement)("div",{className:"helpgent-form-group helpgent-mb-0"},(0,e.createElement)("label",{htmlFor:"author-confirm-password",className:"helpgent-form-group__label"},(0,Pn.__)("Retype password","helpgent")),(0,e.createElement)("div",{className:"helpgent-form-group__box"},(0,e.createElement)("input",{type:"confirm"===l?"text":"password",id:"author-confirm-password",className:"helpgent-form-group__element",...p("password_confirmation",{required:{value:!0,message:(0,Pn.__)("This field is required","helpgent")},validate:{matchPassword:e=>e===g||(0,Pn.__)("Password not matched","helpgent")}})}),(0,e.createElement)("span",{className:"helpgent-form-group__element-icon",onClick:()=>{s("confirm"===l?null:"confirm")}},(0,e.createElement)(D,{src:"confirm"===l?Ta:Oa}))),u?.password_confirmation&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},u?.password_confirmation?.message))),(0,e.createElement)("div",{className:"helpgent-card-footer"},(0,e.createElement)("button",{type:"submit",className:"helpgent-btn helpgent-btn-md helpgent-btn-primary "+(n?"helpgent=btn-disabled":"")},n?(0,Pn.__)("Updating","helpgent"):(0,Pn.__)("Update","helpgent")," ","password"),r&&(0,e.createElement)("span",{className:"helpgent-validate-danger"},r))))}function Pa(t){const{handleCloseFullScreenModal:n,responseState:r,setResponseState:a,setUserProfileState:l,userInfo:s,queryClient:p,userLogoutMutation:c,isLoggingOut:d}=t,[h,u]=(0,i.useState)("profile"),[g,m]=(0,i.useState)(!1),[f,x]=(0,i.useState)(null),b=(0,i.useRef)(document.querySelector("body")),v=(0,i.useRef)(document.getElementById("helpgent-fullscreen-modal")||function(){const e=document.createElement("div");return e.setAttribute("id","helpgent-fullscreen-modal"),e}()),y=(0,i.useRef)(null),{mutateAsync:w,isLoading:_,error:M}=Ia("/helpgent/user");(0,i.useEffect)((()=>(b.current.appendChild(v.current),()=>{v.current.remove(),b.current.style.overflow=""})),[]),(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.key&&l((e=>({...e,isProfileFullscreenModalOpen:!1})))};return document.addEventListener("keydown",e),setTimeout((()=>{y.current.classList.add("helpgent-profile-fullscreen-visible")}),0),()=>{document.removeEventListener("keydown",e)}}),[r?.isProfileFullscreenModalOpen]);const{mutateAsync:k,isLoading:C}=tr("user");return(0,i.createPortal)((0,e.createElement)(On,{ref:y,className:"helpgent-profile-fullscreen",style:{top:"100%"}},(0,e.createElement)("div",{className:"helpgent-profile-fullscreen__top"},(0,e.createElement)("span",{className:"helpgent-fullscreen-remove"},(0,e.createElement)("span",{className:"helpgent-fullscreen-remove__text"},(0,Pn.__)("ESC","helpgent")),(0,e.createElement)("span",{className:"helpgent-fullscreen-remove__btn",onClick:()=>{l((e=>({...e,isProfileFullscreenModalOpen:!1})))}},(0,e.createElement)(D,{src:Vn})))),(0,e.createElement)("div",{className:"helpgent-profile-fullscreen__content "+(d?"helpgent-logging-out":"")},(0,e.createElement)("div",{className:"helpgent-profile-fullscreen__tab-menu"},(0,e.createElement)("h4",{className:"helpgent-profile-fullscreen__title"},(0,Pn.__)("Your Settings","helpgent")),(0,e.createElement)("div",{className:"helpgent-profile-fullscreen__tab"},(0,e.createElement)("span",{className:"helpgent-profile-fullscreen__tab-item "+("profile"===h?"helpgent-active":""),onClick:()=>{u("profile")}},(0,Pn.__)("Profile","helpgent")),(0,e.createElement)("span",{className:"helpgent-profile-fullscreen__tab-item "+("change-password"===h?"helpgent-active":""),onClick:()=>{u("change-password")}},(0,Pn.__)("Change Password","helpgent")))),"profile"===h&&(0,e.createElement)("div",{className:"helpgent-profile-fullscreen__tab-content"},(0,e.createElement)(La,{userInfo:s,updateProfileMutation:k,profileUpdating:C,queryClient:p}),!s.is_administrator&&(0,e.createElement)("a",{href:"#",className:"helpgent-profile-delete-account",onClick:e=>{e.preventDefault(),m(!0)}},(0,Pn.__)("Delete account","helpgent")),g&&(0,e.createElement)(Aa,{title:(0,Pn.__)("Delete Account","helpgent"),onCancel:function(){m(!1)},onSubmit:async function(){if(!_&&!d){try{const e=await w();(0,o.doAction)("helpgent-toast",{message:e.message}),m(!1),x(null);try{await c()}catch(e){}}catch(e){console.log(e),x(e.message)}location.reload()}},hasCancelButton:!0,hasSubmitButton:!0,isActiveSubmit:!0,submitText:_?(0,Pn.__)("Deleting","helpgent"):(0,Pn.__)("Yes, Delete","helpgent"),className:"helpgent-account-delete-alert"},(0,e.createElement)(ja,{userInfo:s,deleteAccountNotice:f}))),"change-password"===h&&(0,e.createElement)(Ua,null))),v.current)}const Fa="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS45OTgiIGhlaWdodD0iMTguNTU0IiB2aWV3Qm94PSIwIDAgMTkuOTk4IDE4LjU1NCI+CiAgPGcgaWQ9IkhlbHBHZW50X0ljb24iIGRhdGEtbmFtZT0iSGVscEdlbnQgSWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTE5LjUpIiBvcGFjaXR5PSIwLjUiPgogICAgPHBhdGggaWQ9IlBhdGhfMTU3OCIgZGF0YS1uYW1lPSJQYXRoIDE1NzgiIGQ9Ik0yMC4yMjYsMjQuMTcxQTEuMywxLjMsMCwwLDAsMTguOCwyNC40bC0xLjU2OSwxLjQ1OXYtMS40YzAtLjA3NSwwLS4xNDksMC0uMjI0QTQuOTUyLDQuOTUyLDAsMCwwLDEyLjI3NiwxOS41SDUuOTUzQTQuOTQ2LDQuOTQ2LDAsMCwwLDEsMjQuNDUzdjYuMzE0YTQuOTYsNC45NiwwLDAsMCwzLjc2NSw0LjgxNnYxLjUzN2EuOTUyLjk1MiwwLDAsMCwuMS40MTYuOTM4LjkzOCwwLDAsMCwxLjI1NS40Mmw0LjQtMi4yMDgsMS4zNjktLjAyNGguMzg0cS4xNzEsMCwuMzQxLS4wMTJhNC41MjEsNC41MjEsMCwwLDAsLjYwOC0uMDc4LDQuOTU4LDQuOTU4LDAsMCwwLDQuMDA4LTQuNjQ0YzAtLjA3NSwwLS4xNDksMC0uMjI0di0uODE2bDEuNTczLDEuNDU5YTEuMzIzLDEuMzIzLDAsMCwwLC44OTQuMzQ1LDEuMjg0LDEuMjg0LDAsMCwwLC41MjktLjExNEExLjIzNCwxLjIzNCwwLDAsMCwyMSwzMC41VjI1LjMwOEExLjIyMiwxLjIyMiwwLDAsMCwyMC4yMjYsMjQuMTcxWk05LjU4MSwzMy4yNDYsNy41LDM0LjI5YS4zNzEuMzcxLDAsMCwxLS4xNTcuMDM5LjM1NS4zNTUsMCwwLDEtLjM1Ny0uMzUzVjMyLjgzOUE1LjUyOCw1LjUyOCwwLDAsMSwzLjYsMjcuNzQ0aDBhNS41MjcsNS41MjcsMCwwLDEsNS41MjYtNS41MjZoMGE1LjUyNCw1LjUyNCwwLDAsMSwuNDU1LDExLjAyOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIiBmaWxsPSIjZmZmIi8+CiAgICA8ZyBpZD0iR3JvdXBfMjg0OCIgZGF0YS1uYW1lPSJHcm91cCAyODQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjU5NyAyNi45NDcpIj4KICAgICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zMjMiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjMiIGN4PSIwLjc5MiIgY3k9IjAuNzkyIiByPSIwLjc5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4yMzUgMC4xNjIpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI0IiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI0IiBjeD0iMC43OTIiIGN5PSIwLjc5MiIgcj0iMC43OTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNjk4IDAuMTYyKSIgZmlsbD0iI2ZmZiIvPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNSIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNSIgY3g9IjAuNzkyIiBjeT0iMC43OTIiIHI9IjAuNzkyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMzY0KSByb3RhdGUoLTEzLjI4NikiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=";function Ra(t){const{responseAgent:n,responseForm:r,dashboardWidth:a,conversationWidth:i}=t;return(0,e.createElement)("div",{className:"helpgent-header-top helpgent-d-flex"},n?.agent?(0,e.createElement)("div",{className:"helpgent-user-view helpgent-d-flex"},(a<768||i<768)&&(0,e.createElement)("span",{className:"helpgent-back-user-list",onClick:handleUserContentView},(0,e.createElement)(D,{src:arrowLeft})),n?.agent?(0,e.createElement)("div",{className:"helpgent-user-view__media"},n?.agent?.avatar_url?(0,e.createElement)(Zn,{src:n?.agent?.avatar_url,alt:"Helpgent Media"}):(0,e.createElement)("span",null,n?.agent?.name.slice(0,2))):(0,e.createElement)("div",{className:"helpgent-user-view__icon"},(0,e.createElement)(D,{src:Fa})),(0,e.createElement)("div",{className:"helpgent-user-view__content"},(0,e.createElement)("div",{className:"helpgent-user-view__name-wrap"},(0,e.createElement)("h4",{className:"helpgent-user-view__name"},n?.agent?.name)),(0,e.createElement)("span",{className:"helpgent-form-title"},r?.form?.title))):(0,e.createElement)("div",{className:"helpgent-form-info-view helpgent-d-flex"},r?.form?.featured_image?(0,e.createElement)(Zn,{src:r.form.featured_image}):(0,e.createElement)("span",{className:"helpgent-form-info-color-box",style:{backgroundColor:r?.form?.color}}),(0,e.createElement)("span",{className:"helpgent-form-info-title"},r?.form?.title)))}function Ya(){const t=document.querySelector(".helpgent-user-dashboard");let n=JSON.parse(t.dataset.user);const[r,a]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=document.querySelector(".helpgent-user-dashboard").clientWidth,t=document.querySelector(".helpgent-conversation-main"),n=document.querySelector(".helpgent-sidebar");e<768&&t&&n&&(t.classList.remove("helpgent-conversation-main--active"),n.style.display="none",n.classList.add("helpgent-sidebar--active"))}),[]),(0,o.addFilter)("helpgent_response_top_user_Profile","helpgent",(function(t,n){return t.helpgent_response_top_user_Profile_toggle=(0,e.createElement)(Kn,{...n,setShowLogin:a}),t})),(0,o.addFilter)("helpgent_response_fullscreen_Profile","helpgent",(function(t,n){return t.helpgent_response_fullscreen_Profile_modal=(0,e.createElement)(Pa,{...n}),t})),(0,o.addFilter)("helpgent_conversation_top_user","helpgent",(function(t,n){return t.helpgent_conversation_top_user_view=(0,e.createElement)(Ra,{...n}),t})),(0,e.createElement)(In,null,(0,e.createElement)("div",{className:"helpgent-user-dashboard__contents "+(0===n.length||r?"helpgent-user-dashboard__contents--login":"")},0===n.length||r?(0,e.createElement)(d,{client:h.A},(0,e.createElement)(Fn,null)):(0,e.createElement)(d,{client:h.A},(0,e.createElement)(l.ResponseModule,{baseApiRoute:{responses:"/helpgent/response"},isClientModeActive:!0}))))}a()((()=>{const t=document.querySelectorAll(".helpgent-user-dashboard");0!==t.length&&t.forEach((t=>{i.createRoot?(0,i.createRoot)(t).render((0,e.createElement)(Ya,null)):render((0,e.createElement)(Ya,null),t)}))}))})()})();