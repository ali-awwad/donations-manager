(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-react/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-react/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=e(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js")),r=__webpack_require__(/*! react */ "./node_modules/react/index.js"),t=e(r),o=__webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function u(e,n){var t=r.useState(function(){var r=o.Inertia.restore(n);return void 0!==r?r:e}),i=t[0],u=t[1];return r.useEffect(function(){o.Inertia.remember(i,n)},[i,n]),[i,u]}var a=r.createContext();a.displayName="InertiaPageContext";var c=r.createContext();function s(e){var n=e.children,t=e.initialPage,u=e.resolveComponent,s=e.titleCallback,l=e.onHeadUpdate,f=r.useState({component:e.initialComponent||null,page:t,key:null}),p=f[0],d=f[1],v=r.useMemo(function(){return o.createHeadManager("undefined"==typeof window,s||function(e){return e},l||function(){})},[]);if(r.useEffect(function(){o.Inertia.init({initialPage:t,resolveComponent:u,swapComponent:function(e){var n=e.component,r=e.page,t=e.preserveState;try{return d(function(e){return{component:n,page:r,key:t?e.key:Date.now()}}),Promise.resolve()}catch(e){return Promise.reject(e)}}})},[]),!p.component)return r.createElement(c.Provider,{value:v},r.createElement(a.Provider,{value:p.page},null));var m=n||function(e){var n=e.Component,t=e.props,o=r.createElement(n,i({key:e.key},t));return"function"==typeof n.layout?n.layout(o):Array.isArray(n.layout)?n.layout.concat(o).reverse().reduce(function(e,n){return r.createElement(n,i({children:e},t))}):o};return r.createElement(c.Provider,{value:v},r.createElement(a.Provider,{value:p.page},m({Component:p.component,key:p.key,props:p.page.props})))}function l(e){var n,o,i=e.children,u=e.title,a=r.useContext(c),s=r.useMemo(function(){return a.createProvider()},[a]);return r.useEffect(function(){return function(){s.disconnect()}},[s]),s.update((n=i,o=(Array.isArray(n)?n:[n]).filter(function(e){return e}).map(function(e){return function(e){return function e(n){var r=function(e){var n=Object.keys(e.props).reduce(function(n,r){if(["head-key","children","dangerouslySetInnerHTML"].includes(r))return n;var t=e.props[r];return""===t?n+" "+r:n+" "+r+'="'+t+'"'},"");return"<"+e.type+n+">"}(n);return n.props.children&&(r+=function(n){return"string"==typeof n.props.children?n.props.children:n.props.children.reduce(function(n,r){return n+e(r)},"")}(n)),n.props.dangerouslySetInnerHTML&&(r+=n.props.dangerouslySetInnerHTML.__html),function(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1}(n)||(r+="</"+n.type+">"),r}(function(e){return t.cloneElement(e,{inertia:void 0!==e.props["head-key"]?e.props["head-key"]:""})}(e))}(e)}),u&&!o.find(function(e){return e.startsWith("<title")})&&o.push("<title inertia>"+u+"</title>"),o)),null}c.displayName="InertiaHeadContext",s.displayName="Inertia";var f=function(){},p=r.forwardRef(function(e,n){var t=e.children,u=e.as,a=void 0===u?"a":u,c=e.data,s=void 0===c?{}:c,l=e.href,p=e.method,d=void 0===p?"get":p,v=e.preserveScroll,m=void 0!==v&&v,y=e.preserveState,h=void 0===y?null:y,g=e.replace,S=void 0!==g&&g,k=e.only,C=void 0===k?[]:k,b=e.headers,P=void 0===b?{}:b,E=e.queryStringArrayFormat,x=void 0===E?"brackets":E,w=e.onClick,I=void 0===w?f:w,T=e.onCancelToken,O=void 0===T?f:T,j=e.onBefore,A=void 0===j?f:j,L=e.onStart,F=void 0===L?f:L,H=e.onProgress,R=void 0===H?f:H,B=e.onFinish,D=void 0===B?f:B,q=e.onCancel,M=void 0===q?f:q,N=e.onSuccess,U=void 0===N?f:N,J=e.onError,W=void 0===J?f:J,_=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n.indexOf(r=i[t])>=0||(o[r]=e[r]);return o}(e,["children","as","data","href","method","preserveScroll","preserveState","replace","only","headers","queryStringArrayFormat","onClick","onCancelToken","onBefore","onStart","onProgress","onFinish","onCancel","onSuccess","onError"]),Q=r.useCallback(function(e){I(e),o.shouldIntercept(e)&&(e.preventDefault(),o.Inertia.visit(l,{data:s,method:d,preserveScroll:m,preserveState:null!=h?h:"get"!==d,replace:S,only:C,headers:P,onCancelToken:O,onBefore:A,onStart:F,onProgress:R,onFinish:D,onCancel:M,onSuccess:U,onError:W}))},[s,l,d,m,h,S,C,P,I,O,A,F,R,D,M,U,W]);a=a.toLowerCase(),d=d.toLowerCase();var z=o.mergeDataIntoQueryString(d,l||"",s,x);return l=z[0],s=z[1],"a"===a&&"get"!==d&&console.warn('Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.\n\nPlease specify a more appropriate element using the "as" attribute. For example:\n\n<Link href="'+l+'" method="'+d+'" as="button">...</Link>'),r.createElement(a,i({},_,"a"===a?{href:l}:{},{ref:n,onClick:Q}),t)});exports.App=s,exports.Head=l,exports.InertiaApp=s,exports.InertiaHead=l,exports.InertiaLink=p,exports.Link=p,exports.app=s,exports.createInertiaApp=function(e){try{var n,t,o,i,u,a,c;t=void 0===(n=e.id)?"app":n,o=e.resolve,i=e.setup,u=e.title,a=e.page,c=e.render;var l="undefined"==typeof window,f=l?null:document.getElementById(t),p=a||JSON.parse(f.dataset.page),d=function(e){return Promise.resolve(o(e)).then(function(e){return e.default||e})},v=[];return Promise.resolve(d(p.component).then(function(e){return i({el:f,App:s,props:{initialPage:p,initialComponent:e,resolveComponent:d,titleCallback:u,onHeadUpdate:l?function(e){return v=e}:null}})})).then(function(e){return function(){if(l)return Promise.resolve(c(r.createElement("div",{id:t,"data-page":JSON.stringify(p)},e))).then(function(e){return{head:v,body:e}})}()})}catch(e){return Promise.reject(e)}},exports.link=p,exports.useForm=function(){var e=[].slice.call(arguments),t=r.useRef(null),a="string"==typeof e[0]?e[0]:null,c=r.useState(("string"==typeof e[0]?e[1]:e[0])||{}),s=c[0],l=c[1],f=r.useRef(null),p=r.useRef(null),d=a?u(s,a+":data"):r.useState(s),v=d[0],m=d[1],y=a?u({},a+":errors"):r.useState({}),h=y[0],g=y[1],S=r.useState(!1),k=S[0],C=S[1],b=r.useState(!1),P=b[0],E=b[1],x=r.useState(null),w=x[0],I=x[1],T=r.useState(!1),O=T[0],j=T[1],A=r.useState(!1),L=A[0],F=A[1],H=function(e){return e};r.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]);var R=r.useCallback(function(e,n,r){void 0===r&&(r={});var u=i({},r,{onCancelToken:function(e){if(f.current=e,r.onCancelToken)return r.onCancelToken(e)},onBefore:function(e){if(j(!1),F(!1),clearTimeout(p.current),r.onBefore)return r.onBefore(e)},onStart:function(e){if(E(!0),r.onStart)return r.onStart(e)},onProgress:function(e){if(I(e),r.onProgress)return r.onProgress(e)},onSuccess:function(e){if(t.current&&(E(!1),I(null),g({}),C(!1),j(!0),F(!0),p.current=setTimeout(function(){t.current&&F(!1)},2e3)),r.onSuccess)return r.onSuccess(e)},onError:function(e){if(t.current&&(E(!1),I(null),g(e),C(!0)),r.onError)return r.onError(e)},onCancel:function(){if(t.current&&(E(!1),I(null)),r.onCancel)return r.onCancel()},onFinish:function(){if(t.current&&(E(!1),I(null)),f.current=null,r.onFinish)return r.onFinish()}});"delete"===e?o.Inertia.delete(n,i({},u,{data:H(v)})):o.Inertia[e](n,H(v),u)},[v,g]);return{data:v,setData:function(e,n){var r;m("string"==typeof e?i({},v,((r={})[e]=n,r)):"function"==typeof e?function(n){return e(n)}:e)},isDirty:!n(v,s),errors:h,hasErrors:k,processing:P,progress:w,wasSuccessful:O,recentlySuccessful:L,transform:function(e){H=e},setDefaults:function(e,n){l(void 0===e?function(){return v}:function(r){var t;return i({},r,n?((t={})[e]=n,t):e)})},reset:function(){var e=[].slice.call(arguments);m(0===e.length?s:Object.keys(s).filter(function(n){return e.includes(n)}).reduce(function(e,n){return e[n]=s[n],e},i({},v)))},setError:function(e,n){g(function(r){var t,o=i({},r,n?((t={})[e]=n,t):e);return C(Object.keys(o).length>0),o})},clearErrors:function(){var e=[].slice.call(arguments);g(function(n){var r=Object.keys(n).reduce(function(r,t){var o;return i({},r,e.length>0&&!e.includes(t)?((o={})[t]=n[t],o):{})},{});return C(Object.keys(r).length>0),r})},submit:R,get:function(e,n){R("get",e,n)},post:function(e,n){R("post",e,n)},put:function(e,n){R("put",e,n)},patch:function(e,n){R("patch",e,n)},delete:function(e,n){R("delete",e,n)},cancel:function(){f.current&&f.current.cancel()}}},exports.usePage=function(){var e=r.useContext(a);if(!e)throw new Error("usePage must be used within the Inertia component");return e},exports.useRemember=u,exports.useRememberedState=function(e,n){return console.warn('The "useRememberedState" hook has been deprecated and will be removed in a future release. Use "useRemember" instead.'),u(e,n)};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/inertia/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@inertiajs/inertia/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! axios */ "./node_modules/axios/index.js")),n=__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"),i=e(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o,s={modal:null,listener:null,show:function(e){var t=this;"object"==typeof e&&(e="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(e));var n=document.createElement("html");n.innerHTML=e,n.querySelectorAll("a").forEach(function(e){return e.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return t.hide()});var i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(n.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(e){27===e.keyCode&&this.hide()}};function a(e,t){var n;return function(){var i=arguments,r=this;clearTimeout(n),n=setTimeout(function(){return e.apply(r,[].slice.call(i))},t)}}function c(e,t,n){for(var i in void 0===t&&(t=new FormData),void 0===n&&(n=null),e=e||{})Object.prototype.hasOwnProperty.call(e,i)&&d(t,l(n,i),e[i]);return t}function l(e,t){return e?e+"["+t+"]":t}function d(e,t,n){return Array.isArray(n)?Array.from(n.keys()).forEach(function(i){return d(e,l(t,i.toString()),n[i])}):n instanceof Date?e.append(t,n.toISOString()):n instanceof File?e.append(t,n,n.name):n instanceof Blob?e.append(t,n):"boolean"==typeof n?e.append(t,n?"1":"0"):"string"==typeof n?e.append(t,n):"number"==typeof n?e.append(t,""+n):null==n?e.append(t,""):void c(n,e,t)}function u(e){return new URL(e.toString(),window.location.toString())}function h(e,t,r,o){void 0===o&&(o="brackets");var s=/^https?:\/\//.test(t.toString()),a=s||t.toString().startsWith("/"),c=!a&&!t.toString().startsWith("#")&&!t.toString().startsWith("?"),l=t.toString().includes("?")||e===exports.Method.GET&&Object.keys(r).length,d=t.toString().includes("#"),u=new URL(t.toString(),"http://localhost");return e===exports.Method.GET&&Object.keys(r).length&&(u.search=n.stringify(i(n.parse(u.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:o}),r={}),[[s?u.protocol+"//"+u.host:"",a?u.pathname:"",c?u.pathname.substring(1):"",l?u.search:"",d?u.hash:""].join(""),r]}function p(e){return(e=new URL(e.href)).hash="",e}function f(e,t){return document.dispatchEvent(new CustomEvent("inertia:"+e,t))}(o=exports.Method||(exports.Method={})).GET="get",o.POST="post",o.PUT="put",o.PATCH="patch",o.DELETE="delete";var v=function(e){return f("finish",{detail:{visit:e}})},m=function(e){return f("navigate",{detail:{page:e}})},g="undefined"==typeof window,w=function(){function e(){this.visitId=null}var n=e.prototype;return n.init=function(e){var t=e.resolveComponent,n=e.swapComponent;this.page=e.initialPage,this.resolveComponent=t,this.swapComponent=n,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},n.handleInitialPageVisit=function(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(function(){return m(e)})},n.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",a(this.handleScrollEvent.bind(this),100),!0)},n.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},n.handleScrollEvent=function(e){"function"==typeof e.target.hasAttribute&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},n.saveScrollPositions=function(){this.replaceState(r({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(e){return{top:e.scrollTop,left:e.scrollLeft}})}))},n.resetScrollPositions=function(){var e;document.documentElement.scrollTop=0,document.documentElement.scrollLeft=0,this.scrollRegions().forEach(function(e){e.scrollTop=0,e.scrollLeft=0}),this.saveScrollPositions(),window.location.hash&&(null==(e=document.getElementById(window.location.hash.slice(1)))||e.scrollIntoView())},n.restoreScrollPositions=function(){var e=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(t,n){var i=e.page.scrollRegions[n];i&&(t.scrollTop=i.top,t.scrollLeft=i.left)})},n.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&"back_forward"===window.performance.getEntriesByType("navigation")[0].type},n.handleBackForwardVisit=function(e){var t=this;window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){t.restoreScrollPositions(),m(e)})},n.locationVisit=function(e,t){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:t})),window.location.href=e.href,p(window.location).href===p(e).href&&window.location.reload()}catch(e){return!1}},n.isLocationVisit=function(){try{return null!==window.sessionStorage.getItem("inertiaLocationVisit")}catch(e){return!1}},n.handleLocationVisit=function(e){var t,n,i,r,o=this,s=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=null!=(t=null==(n=window.history.state)?void 0:n.rememberedState)?t:{},e.scrollRegions=null!=(i=null==(r=window.history.state)?void 0:r.scrollRegions)?i:[],this.setPage(e,{preserveScroll:s.preserveScroll,preserveState:!0}).then(function(){s.preserveScroll&&o.restoreScrollPositions(),m(e)})},n.isLocationVisitResponse=function(e){return e&&409===e.status&&e.headers["x-inertia-location"]},n.isInertiaResponse=function(e){return null==e?void 0:e.headers["x-inertia"]},n.createVisitId=function(){return this.visitId={},this.visitId},n.cancelVisit=function(e,t){var n=t.cancelled,i=void 0!==n&&n,r=t.interrupted,o=void 0!==r&&r;!e||e.completed||e.cancelled||e.interrupted||(e.cancelToken.cancel(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=o,v(e),e.onFinish(e))},n.finishVisit=function(e){e.cancelled||e.interrupted||(e.completed=!0,e.cancelled=!1,e.interrupted=!1,v(e),e.onFinish(e))},n.resolvePreserveOption=function(e,t){return"function"==typeof e?e(t):"errors"===e?Object.keys(t.props.errors||{}).length>0:e},n.visit=function(e,n){var i=this,o=void 0===n?{}:n,a=o.method,l=void 0===a?exports.Method.GET:a,d=o.data,v=void 0===d?{}:d,m=o.replace,g=void 0!==m&&m,w=o.preserveScroll,y=void 0!==w&&w,S=o.preserveState,b=void 0!==S&&S,E=o.only,P=void 0===E?[]:E,I=o.headers,x=void 0===I?{}:I,V=o.errorBag,T=void 0===V?"":V,L=o.forceFormData,O=void 0!==L&&L,k=o.onCancelToken,C=void 0===k?function(){}:k,M=o.onBefore,A=void 0===M?function(){}:M,F=o.onStart,R=void 0===F?function(){}:F,j=o.onProgress,D=void 0===j?function(){}:j,B=o.onFinish,q=void 0===B?function(){}:B,N=o.onCancel,H=void 0===N?function(){}:N,W=o.onSuccess,G=void 0===W?function(){}:W,U=o.onError,X=void 0===U?function(){}:U,J=o.queryStringArrayFormat,K=void 0===J?"brackets":J,_="string"==typeof e?u(e):e;if(!function e(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(function(t){return e(t)})||"object"==typeof t&&null!==t&&Object.values(t).some(function(t){return e(t)})}(v)&&!O||v instanceof FormData||(v=c(v)),!(v instanceof FormData)){var z=h(l,_,v,K),Q=z[1];_=u(z[0]),v=Q}var Y={url:_,method:l,data:v,replace:g,preserveScroll:y,preserveState:b,only:P,headers:x,errorBag:T,forceFormData:O,queryStringArrayFormat:K,cancelled:!1,completed:!1,interrupted:!1};if(!1!==A(Y)&&function(e){return f("before",{cancelable:!0,detail:{visit:e}})}(Y)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var Z=this.createVisitId();this.activeVisit=r({},Y,{onCancelToken:C,onBefore:A,onStart:R,onProgress:D,onFinish:q,onCancel:H,onSuccess:G,onError:X,queryStringArrayFormat:K,cancelToken:t.CancelToken.source()}),C({cancel:function(){i.activeVisit&&i.cancelVisit(i.activeVisit,{cancelled:!0})}}),function(e){f("start",{detail:{visit:e}})}(Y),R(Y),t({method:l,url:p(_).href,data:l===exports.Method.GET?{}:v,params:l===exports.Method.GET?v:{},cancelToken:this.activeVisit.cancelToken.token,headers:r({},x,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},P.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":P.join(",")}:{},T&&T.length?{"X-Inertia-Error-Bag":T}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(e){v instanceof FormData&&(e.percentage=Math.round(e.loaded/e.total*100),function(e){f("progress",{detail:{progress:e}})}(e),D(e))}}).then(function(e){var t;if(!i.isInertiaResponse(e))return Promise.reject({response:e});var n=e.data;P.length&&n.component===i.page.component&&(n.props=r({},i.page.props,n.props)),y=i.resolvePreserveOption(y,n),(b=i.resolvePreserveOption(b,n))&&null!=(t=window.history.state)&&t.rememberedState&&n.component===i.page.component&&(n.rememberedState=window.history.state.rememberedState);var o=_,s=u(n.url);return o.hash&&!s.hash&&p(o).href===s.href&&(s.hash=o.hash,n.url=s.href),i.setPage(n,{visitId:Z,replace:g,preserveScroll:y,preserveState:b})}).then(function(){var e=i.page.props.errors||{};if(Object.keys(e).length>0){var t=T?e[T]?e[T]:{}:e;return function(e){f("error",{detail:{errors:e}})}(t),X(t)}return f("success",{detail:{page:i.page}}),G(i.page)}).catch(function(e){if(i.isInertiaResponse(e.response))return i.setPage(e.response.data,{visitId:Z});if(i.isLocationVisitResponse(e.response)){var t=u(e.response.headers["x-inertia-location"]),n=_;n.hash&&!t.hash&&p(n).href===t.href&&(t.hash=n.hash),i.locationVisit(t,!0===y)}else{if(!e.response)return Promise.reject(e);f("invalid",{cancelable:!0,detail:{response:e.response}})&&s.show(e.response.data)}}).then(function(){i.activeVisit&&i.finishVisit(i.activeVisit)}).catch(function(e){if(!t.isCancel(e)){var n=f("exception",{cancelable:!0,detail:{exception:e}});if(i.activeVisit&&i.finishVisit(i.activeVisit),n)return Promise.reject(e)}})}},n.setPage=function(e,t){var n=this,i=void 0===t?{}:t,r=i.visitId,o=void 0===r?this.createVisitId():r,s=i.replace,a=void 0!==s&&s,c=i.preserveScroll,l=void 0!==c&&c,d=i.preserveState,h=void 0!==d&&d;return Promise.resolve(this.resolveComponent(e.component)).then(function(t){o===n.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},(a=a||u(e.url).href===window.location.href)?n.replaceState(e):n.pushState(e),n.swapComponent({component:t,page:e,preserveState:h}).then(function(){l||n.resetScrollPositions(),a||m(e)}))})},n.pushState=function(e){this.page=e,window.history.pushState(e,"",e.url)},n.replaceState=function(e){this.page=e,window.history.replaceState(e,"",e.url)},n.handlePopstateEvent=function(e){var t=this;if(null!==e.state){var n=e.state,i=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(function(e){i===t.visitId&&(t.page=n,t.swapComponent({component:e,page:n,preserveState:!1}).then(function(){t.restoreScrollPositions(),m(n)}))})}else{var o=u(this.page.url);o.hash=window.location.hash,this.replaceState(r({},this.page,{url:o.href})),this.resetScrollPositions()}},n.get=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({},n,{method:exports.Method.GET,data:t}))},n.reload=function(e){return void 0===e&&(e={}),this.visit(window.location.href,r({},e,{preserveScroll:!0,preserveState:!0}))},n.replace=function(e,t){var n;return void 0===t&&(t={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+(null!=(n=t.method)?n:"get")+"() instead."),this.visit(e,r({preserveState:!0},t,{replace:!0}))},n.post=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.POST,data:t}))},n.put=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PUT,data:t}))},n.patch=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PATCH,data:t}))},n.delete=function(e,t){return void 0===t&&(t={}),this.visit(e,r({preserveState:!0},t,{method:exports.Method.DELETE}))},n.remember=function(e,t){var n,i;void 0===t&&(t="default"),g||this.replaceState(r({},this.page,{rememberedState:r({},null==(n=this.page)?void 0:n.rememberedState,(i={},i[t]=e,i))}))},n.restore=function(e){var t,n;if(void 0===e&&(e="default"),!g)return null==(t=window.history.state)||null==(n=t.rememberedState)?void 0:n[e]},n.on=function(e,t){var n=function(e){var n=t(e);e.cancelable&&!e.defaultPrevented&&!1===n&&e.preventDefault()};return document.addEventListener("inertia:"+e,n),function(){return document.removeEventListener("inertia:"+e,n)}},e}(),y={buildDOMElement:function(e){var t=document.createElement("template");t.innerHTML=e;var n=t.content.firstChild;if(!e.startsWith("<script "))return n;var i=document.createElement("script");return i.innerHTML=n.innerHTML,n.getAttributeNames().forEach(function(e){i.setAttribute(e,n.getAttribute(e)||"")}),i},isInertiaManagedElement:function(e){return e.nodeType===Node.ELEMENT_NODE&&null!==e.getAttribute("inertia")},findMatchingElementIndex:function(e,t){var n=e.getAttribute("inertia");return null!==n?t.findIndex(function(e){return e.getAttribute("inertia")===n}):-1},update:a(function(e){var t=this,n=e.map(function(e){return t.buildDOMElement(e)});Array.from(document.head.childNodes).filter(function(e){return t.isInertiaManagedElement(e)}).forEach(function(e){var i=t.findMatchingElementIndex(e,n);if(-1!==i){var r,o=n.splice(i,1)[0];o&&!e.isEqualNode(o)&&(null==e||null==(r=e.parentNode)||r.replaceChild(o,e))}else{var s;null==e||null==(s=e.parentNode)||s.removeChild(e)}}),n.forEach(function(e){return document.head.appendChild(e)})},1)},S=new w;exports.Inertia=S,exports.createHeadManager=function(e,t,n){var i={},r=0;function o(){var e=Object.values(i).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,n){if(-1===n.indexOf("<"))return e;if(0===n.indexOf("<title ")){var i=n.match(/(<title [^>]+>)(.*?)(<\/title>)/);return e.title=i?""+i[1]+t(i[2])+i[3]:n,e}var r=n.match(/ inertia="[^"]+"/);return r?e[r[0]]=n:e[Object.keys(e).length]=n,e},{});return Object.values(e)}function s(){e?n(o()):y.update(o())}return{createProvider:function(){var e=function(){var e=r+=1;return i[e]=[],e.toString()}();return{update:function(t){return function(e,t){void 0===t&&(t=[]),null!==e&&Object.keys(i).indexOf(e)>-1&&(i[e]=t),s()}(e,t)},disconnect:function(){return function(e){null!==e&&-1!==Object.keys(i).indexOf(e)&&(delete i[e],s())}(e)}}}}},exports.hrefToUrl=u,exports.mergeDataIntoQueryString=h,exports.shouldIntercept=function(e){var t="a"===e.currentTarget.tagName.toLowerCase();return!(e.target&&null!=e&&e.target.isContentEditable||e.defaultPrevented||t&&e.which>1||t&&e.altKey||t&&e.ctrlKey||t&&e.metaKey||t&&e.shiftKey)},exports.urlWithoutHash=p;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/progress/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@inertiajs/progress/dist/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var n,e=(n=__webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js"))&&"object"==typeof n&&"default"in n?n.default:n,t=null;function r(n){document.addEventListener("inertia:start",o.bind(null,n)),document.addEventListener("inertia:progress",i),document.addEventListener("inertia:finish",s)}function o(n){t=setTimeout(function(){return e.start()},n)}function i(n){e.isStarted()&&n.detail.progress.percentage&&e.set(Math.max(e.status,n.detail.progress.percentage/100*.9))}function s(n){clearTimeout(t),e.isStarted()&&(n.detail.visit.completed?e.done():n.detail.visit.interrupted?e.set(0):n.detail.visit.cancelled&&(e.done(),e.remove()))}exports.InertiaProgress={init:function(n){var t=void 0===n?{}:n,o=t.delay,i=t.color,s=void 0===i?"#29d":i,a=t.includeCSS,p=void 0===a||a,d=t.showSpinner,l=void 0!==d&&d;r(void 0===o?250:o),e.configure({showSpinner:l}),p&&function(n){var e=document.createElement("style");e.type="text/css",e.textContent="\n    #nprogress {\n      pointer-events: none;\n    }\n\n    #nprogress .bar {\n      background: "+n+";\n\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n\n      width: 100%;\n      height: 2px;\n    }\n\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+n+", 0 0 5px "+n+";\n      opacity: 1.0;\n\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n          -ms-transform: rotate(3deg) translate(0px, -4px);\n              transform: rotate(3deg) translate(0px, -4px);\n    }\n\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n\n      border: solid 2px transparent;\n      border-top-color: "+n+";\n      border-left-color: "+n+";\n      border-radius: 50%;\n\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n              animation: nprogress-spinner 400ms linear infinite;\n    }\n\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n\n    @-webkit-keyframes nprogress-spinner {\n      0%   { -webkit-transform: rotate(0deg); }\n      100% { -webkit-transform: rotate(360deg); }\n    }\n    @keyframes nprogress-spinner {\n      0%   { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  ",document.head.appendChild(e)}(s)}};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./resources/js/Layouts/Layout.jsx":
/*!*****************************************!*\
  !*** ./resources/js/Layouts/Layout.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/HomeIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/UsersIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/GiftIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/TagIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/UserIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/MenuIcon.js");
/* harmony import */ var _Shared_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Logo */ "./resources/js/Shared/Logo.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Shared_AlertError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/AlertError */ "./resources/js/Shared/AlertError.jsx");
/* harmony import */ var _Shared_AlertWarning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/AlertWarning */ "./resources/js/Shared/AlertWarning.jsx");
/* harmony import */ var _Shared_AlertInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/AlertInfo */ "./resources/js/Shared/AlertInfo.jsx");
/* harmony import */ var _Shared_AlertSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/AlertSuccess */ "./resources/js/Shared/AlertSuccess.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* This Layout requires Tailwind CSS v2.0+ */












var navigation = [{
  keyName: 'Home',
  name: 'Dashboard',
  href: route('dashboard'),
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__["default"],
  current: true
}, {
  keyName: 'Donations',
  name: 'Donations',
  href: route('donations.index'),
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__["default"],
  current: false
}, {
  keyName: 'Donors',
  name: 'Donors',
  href: route('donors.index'),
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"],
  current: false
}, {
  keyName: 'Campaigns',
  name: 'Campaigns',
  href: route('campaigns.index'),
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__["default"],
  current: false
}, {
  keyName: 'Categories',
  name: 'Categories',
  href: route('categories.index'),
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__["default"],
  current: false
}, {
  keyName: 'Users',
  name: 'Users',
  href: route('users.index'),
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_13__["default"],
  current: false
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function Layout(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      sidebarOpen = _useState2[0],
      setSidebarOpen = _useState2[1];

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      title = _usePage$props.title,
      auth = _usePage$props.auth,
      flash = _usePage$props.flash;

  var _usePage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)(),
      component = _usePage.component;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
      title: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Transition.Root, {
        show: sidebarOpen,
        as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
          as: "div",
          className: "fixed inset-0 flex z-40 md:hidden",
          onClose: setSidebarOpen,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition-opacity ease-linear duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "transition-opacity ease-linear duration-300",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Dialog.Overlay, {
              className: "fixed inset-0 bg-gray-600 bg-opacity-75"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-in-out duration-300 transform",
            enterFrom: "-translate-x-full",
            enterTo: "translate-x-0",
            leave: "transition ease-in-out duration-300 transform",
            leaveFrom: "translate-x-0",
            leaveTo: "-translate-x-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "relative flex-1 flex flex-col max-w-xs w-full bg-gray-800",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Transition.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                enter: "ease-in-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in-out duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "absolute top-0 right-0 -mr-12 pt-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                    type: "button",
                    className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                    onClick: function onClick() {
                      return setSidebarOpen(false);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "sr-only",
                      children: "Close sidebar"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {
                      className: "h-6 w-6 text-white",
                      "aria-hidden": "true"
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex-1 h-0 pt-5 pb-4 overflow-y-auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "flex-shrink-0 flex items-center px-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("nav", {
                  className: "mt-5 px-2 space-y-1",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                      href: item.href,
                      className: classNames(component.startsWith(item.keyName) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-base font-medium rounded-md'),
                      "aria-current": item.current ? 'page' : undefined,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(item.icon, {
                        className: classNames(component.startsWith(item.keyName) ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6'),
                        "aria-hidden": "true"
                      }), item.name]
                    }, item.name);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-shrink-0 flex bg-gray-700 p-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: "#",
                  className: "flex-shrink-0 group block",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                        className: "inline-block h-10 w-10 rounded-full",
                        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        alt: ""
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "ml-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                        className: "text-base font-medium text-white",
                        children: "Tom Cook"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                        className: "text-sm font-medium text-gray-400 group-hover:text-gray-300",
                        children: "View profile"
                      })]
                    })]
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex-shrink-0 w-14"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex-1 flex flex-col min-h-0 bg-gray-800",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "flex items-center flex-shrink-0 px-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("nav", {
              className: "mt-5 flex-1 px-2 space-y-1",
              children: navigation.map(function (item) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                  href: item.href,
                  className: classNames(component.startsWith(item.keyName) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md'),
                  "aria-current": item.current ? 'page' : undefined,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(item.icon, {
                    className: classNames(component.startsWith(item.keyName) ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6'),
                    "aria-hidden": "true"
                  }), item.name]
                }, item.name);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex-shrink-0 flex bg-gray-700 p-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              href: "#",
              className: "flex-shrink-0 w-full group block",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    className: "inline-block h-9 w-9 rounded-full stroke-current text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "ml-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                    className: "text-sm font-medium text-white",
                    children: auth.user.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                    className: "text-xs font-medium text-gray-300 group-hover:text-gray-200",
                    children: "View profile"
                  })]
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "md:pl-64 flex flex-col flex-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
            type: "button",
            className: "-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
            onClick: function onClick() {
              return setSidebarOpen(true);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "sr-only",
              children: "Open sidebar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "h-6 w-6",
              "aria-hidden": "true"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("main", {
          className: "flex-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "py-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
              children: [flash.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_AlertError__WEBPACK_IMPORTED_MODULE_3__["default"], {
                message: flash.error
              }), flash.success && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_AlertSuccess__WEBPACK_IMPORTED_MODULE_6__["default"], {
                message: flash.success
              }), flash.info && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_AlertInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
                message: flash.info
              }), flash.warning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_AlertWarning__WEBPACK_IMPORTED_MODULE_4__["default"], {
                message: flash.warning
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "py-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
                  children: children
                })
              })]
            })
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Shared/AlertError.jsx":
/*!********************************************!*\
  !*** ./resources/js/Shared/AlertError.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertError)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* This example requires Tailwind CSS v2.0+ */



function AlertError(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "rounded-md bg-red-50 p-4 mb-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "h-5 w-5 text-red-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ml-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          className: "text-sm font-medium text-red-800",
          children: message
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/AlertInfo.jsx":
/*!*******************************************!*\
  !*** ./resources/js/Shared/AlertInfo.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertInfo)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* This example requires Tailwind CSS v2.0+ */



function AlertInfo(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "rounded-md bg-blue-50 p-4 mb-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "h-5 w-5 text-blue-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ml-3 flex-1 md:flex md:justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "text-sm text-blue-700",
          children: message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "mt-3 text-sm md:mt-0 md:ml-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "#",
            className: "whitespace-nowrap font-medium text-blue-700 hover:text-blue-600",
            children: ["Details ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2192"
            })]
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/AlertSuccess.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Shared/AlertSuccess.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertSuccess)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/XIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* This example requires Tailwind CSS v2.0+ */



function AlertSuccess(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "rounded-md bg-green-50 p-4 mb-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "h-5 w-5 text-green-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ml-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "text-sm font-medium text-green-800",
          children: message
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ml-auto pl-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "-mx-1.5 -my-1.5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            type: "button",
            className: "inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              className: "sr-only",
              children: "Dismiss"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/AlertWarning.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Shared/AlertWarning.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertWarning)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* This example requires Tailwind CSS v2.0+ */



function AlertWarning(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "h-5 w-5 text-yellow-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ml-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "text-sm text-yellow-700",
          children: message
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/Logo.jsx":
/*!**************************************!*\
  !*** ./resources/js/Shared/Logo.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/CakeIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Logo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "text-indigo-200 text-xl flex w-full items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "h-8 w-auto"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "ml-2",
      children: "Donation Tracker"
    })]
  });
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layouts/Layout */ "./resources/js/Layouts/Layout.jsx");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







(0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
  // title: title => 'Hello',
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var page, _page$layout;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];

              if (page.layout === undefined && !name.startsWith('Auth/')) {
                page.layout = (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : function (p) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    children: p
                  });
                };
              }

              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(App, _objectSpread({}, props)), el);
  },
  title: function title(_title) {
    return parseInt(_title) !== 1 ? "".concat(_title, " - Donation Manager") : "Donation Manager";
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_5__.InertiaProgress.init({
  color: 'red'
});

/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = (__webpack_require__(/*! ./util.inspect */ "?2128").custom);
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

var interactionIDCounter = 0;
var threadIDCounter = 0; // Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.

exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

exports.__subscriberRef = null;

{
  exports.__interactionsRef = {
    current: new Set()
  };
  exports.__subscriberRef = {
    current: null
  };
}
function unstable_clear(callback) {

  var prevInteractions = exports.__interactionsRef.current;
  exports.__interactionsRef.current = new Set();

  try {
    return callback();
  } finally {
    exports.__interactionsRef.current = prevInteractions;
  }
}
function unstable_getCurrent() {
  {
    return exports.__interactionsRef.current;
  }
}
function unstable_getThreadID() {
  return ++threadIDCounter;
}
function unstable_trace(name, timestamp, callback) {
  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

  var interaction = {
    __count: 1,
    id: interactionIDCounter++,
    name: name,
    timestamp: timestamp
  };
  var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
  // To do that, clone the current interactions.
  // The previous set will be restored upon completion.

  var interactions = new Set(prevInteractions);
  interactions.add(interaction);
  exports.__interactionsRef.current = interactions;
  var subscriber = exports.__subscriberRef.current;
  var returnValue;

  try {
    if (subscriber !== null) {
      subscriber.onInteractionTraced(interaction);
    }
  } finally {
    try {
      if (subscriber !== null) {
        subscriber.onWorkStarted(interactions, threadID);
      }
    } finally {
      try {
        returnValue = callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStopped(interactions, threadID);
          }
        } finally {
          interaction.__count--; // If no async work was scheduled for this interaction,
          // Notify subscribers that it's completed.

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        }
      }
    }
  }

  return returnValue;
}
function unstable_wrap(callback) {
  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

  var wrappedInteractions = exports.__interactionsRef.current;
  var subscriber = exports.__subscriberRef.current;

  if (subscriber !== null) {
    subscriber.onWorkScheduled(wrappedInteractions, threadID);
  } // Update the pending async work count for the current interactions.
  // Update after calling subscribers in case of error.


  wrappedInteractions.forEach(function (interaction) {
    interaction.__count++;
  });
  var hasRun = false;

  function wrapped() {
    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = wrappedInteractions;
    subscriber = exports.__subscriberRef.current;

    try {
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(wrappedInteractions, threadID);
        }
      } finally {
        try {
          returnValue = callback.apply(undefined, arguments);
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          if (subscriber !== null) {
            subscriber.onWorkStopped(wrappedInteractions, threadID);
          }
        }
      }

      return returnValue;
    } finally {
      if (!hasRun) {
        // We only expect a wrapped function to be executed once,
        // But in the event that it's executed more than once–
        // Only decrement the outstanding interaction counts once.
        hasRun = true; // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.

        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    }
  }

  wrapped.cancel = function cancel() {
    subscriber = exports.__subscriberRef.current;

    try {
      if (subscriber !== null) {
        subscriber.onWorkCanceled(wrappedInteractions, threadID);
      }
    } finally {
      // Update pending async counts for all wrapped interactions.
      // If this was the last scheduled async work for any of them,
      // Mark them as completed.
      wrappedInteractions.forEach(function (interaction) {
        interaction.__count--;

        if (subscriber && interaction.__count === 0) {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        }
      });
    }
  };

  return wrapped;
}

var subscribers = null;

{
  subscribers = new Set();
}

function unstable_subscribe(subscriber) {
  {
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      exports.__subscriberRef.current = {
        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
        onInteractionTraced: onInteractionTraced,
        onWorkCanceled: onWorkCanceled,
        onWorkScheduled: onWorkScheduled,
        onWorkStarted: onWorkStarted,
        onWorkStopped: onWorkStopped
      };
    }
  }
}
function unstable_unsubscribe(subscriber) {
  {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      exports.__subscriberRef.current = null;
    }
  }
}

function onInteractionTraced(interaction) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionTraced(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onInteractionScheduledWorkCompleted(interaction) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionScheduledWorkCompleted(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkScheduled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkScheduled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStarted(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStarted(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStopped(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStopped(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkCanceled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkCanceled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

exports.unstable_clear = unstable_clear;
exports.unstable_getCurrent = unstable_getCurrent;
exports.unstable_getThreadID = unstable_getThreadID;
exports.unstable_subscribe = unstable_subscribe;
exports.unstable_trace = unstable_trace;
exports.unstable_unsubscribe = unstable_unsubscribe;
exports.unstable_wrap = unstable_wrap;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var enableSchedulerDebugging = false;
var enableProfiling = false;

var requestHostCallback;
var requestHostTimeout;
var cancelHostTimeout;
var requestPaint;
var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}

if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' || // Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _timeoutID = null;

  var _flushCallback = function () {
    if (_callback !== null) {
      try {
        var currentTime = exports.unstable_now();
        var hasRemainingTime = true;

        _callback(hasRemainingTime, currentTime);

        _callback = null;
      } catch (e) {
        setTimeout(_flushCallback, 0);
        throw e;
      }
    }
  };

  requestHostCallback = function (cb) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0);
    }
  };

  requestHostTimeout = function (cb, ms) {
    _timeoutID = setTimeout(cb, ms);
  };

  cancelHostTimeout = function () {
    clearTimeout(_timeoutID);
  };

  exports.unstable_shouldYield = function () {
    return false;
  };

  requestPaint = exports.unstable_forceFrameRate = function () {};
} else {
  // Capture local references to native APIs, in case a polyfill overrides them.
  var _setTimeout = window.setTimeout;
  var _clearTimeout = window.clearTimeout;

  if (typeof console !== 'undefined') {
    // TODO: Scheduler no longer requires these methods to be polyfilled. But
    // maybe we want to continue warning if they don't exist, to preserve the
    // option to rely on it in the future?
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;

    if (typeof requestAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }

    if (typeof cancelAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }
  }

  var isMessageLoopRunning = false;
  var scheduledHostCallback = null;
  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
  // thread, like user events. By default, it yields multiple times per frame.
  // It does not attempt to align with frame boundaries, since most tasks don't
  // need to be frame aligned; for those that do, use requestAnimationFrame.

  var yieldInterval = 5;
  var deadline = 0; // TODO: Make this configurable

  {
    // `isInputPending` is not available. Since we have no way of knowing if
    // there's pending input, always yield at the end of the frame.
    exports.unstable_shouldYield = function () {
      return exports.unstable_now() >= deadline;
    }; // Since we yield every frame regardless, `requestPaint` has no effect.


    requestPaint = function () {};
  }

  exports.unstable_forceFrameRate = function (fps) {
    if (fps < 0 || fps > 125) {
      // Using console['error'] to evade Babel and ESLint
      console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
      return;
    }

    if (fps > 0) {
      yieldInterval = Math.floor(1000 / fps);
    } else {
      // reset the framerate
      yieldInterval = 5;
    }
  };

  var performWorkUntilDeadline = function () {
    if (scheduledHostCallback !== null) {
      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
      // cycle. This means there's always time remaining at the beginning of
      // the message event.

      deadline = currentTime + yieldInterval;
      var hasTimeRemaining = true;

      try {
        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // If there's more work, schedule the next message event at the end
          // of the preceding one.
          port.postMessage(null);
        }
      } catch (error) {
        // If a scheduler task throws, exit the current browser task so the
        // error can be observed.
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    } // Yielding to the browser will give it a chance to paint, so we can
  };

  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  requestHostCallback = function (callback) {
    scheduledHostCallback = callback;

    if (!isMessageLoopRunning) {
      isMessageLoopRunning = true;
      port.postMessage(null);
    }
  };

  requestHostTimeout = function (callback, ms) {
    taskTimeoutID = _setTimeout(function () {
      callback(exports.unstable_now());
    }, ms);
  };

  cancelHostTimeout = function () {
    _clearTimeout(taskTimeoutID);

    taskTimeoutID = -1;
  };
}

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  var first = heap[0];
  return first === undefined ? null : first;
}
function pop(heap) {
  var first = heap[0];

  if (first !== undefined) {
    var last = heap.pop();

    if (last !== first) {
      heap[0] = last;
      siftDown(heap, last, 0);
    }

    return first;
  } else {
    return null;
  }
}

function siftUp(heap, node, i) {
  var index = i;

  while (true) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (parent !== undefined && compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;

  while (index < length) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (left !== undefined && compare(left, node) < 0) {
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111

var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
      } else {

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}


/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/ConfirmPassword": [
		"./resources/js/Pages/Auth/ConfirmPassword.js",
		"resources_js_Pages_Auth_ConfirmPassword_js"
	],
	"./Auth/ConfirmPassword.js": [
		"./resources/js/Pages/Auth/ConfirmPassword.js",
		"resources_js_Pages_Auth_ConfirmPassword_js"
	],
	"./Auth/ForgotPassword": [
		"./resources/js/Pages/Auth/ForgotPassword.js",
		"resources_js_Pages_Auth_ForgotPassword_js"
	],
	"./Auth/ForgotPassword.js": [
		"./resources/js/Pages/Auth/ForgotPassword.js",
		"resources_js_Pages_Auth_ForgotPassword_js"
	],
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.js",
		"resources_js_Pages_Auth_Login_js"
	],
	"./Auth/Login.js": [
		"./resources/js/Pages/Auth/Login.js",
		"resources_js_Pages_Auth_Login_js"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.js",
		"resources_js_Pages_Auth_Register_js"
	],
	"./Auth/Register.js": [
		"./resources/js/Pages/Auth/Register.js",
		"resources_js_Pages_Auth_Register_js"
	],
	"./Auth/ResetPassword": [
		"./resources/js/Pages/Auth/ResetPassword.js",
		"resources_js_Pages_Auth_ResetPassword_js"
	],
	"./Auth/ResetPassword.js": [
		"./resources/js/Pages/Auth/ResetPassword.js",
		"resources_js_Pages_Auth_ResetPassword_js"
	],
	"./Auth/VerifyEmail": [
		"./resources/js/Pages/Auth/VerifyEmail.js",
		"resources_js_Pages_Auth_VerifyEmail_js"
	],
	"./Auth/VerifyEmail.js": [
		"./resources/js/Pages/Auth/VerifyEmail.js",
		"resources_js_Pages_Auth_VerifyEmail_js"
	],
	"./Campaigns/CampaignsTable": [
		"./resources/js/Pages/Campaigns/CampaignsTable.jsx",
		"resources_js_Pages_Campaigns_CampaignsTable_jsx"
	],
	"./Campaigns/CampaignsTable.jsx": [
		"./resources/js/Pages/Campaigns/CampaignsTable.jsx",
		"resources_js_Pages_Campaigns_CampaignsTable_jsx"
	],
	"./Campaigns/Create": [
		"./resources/js/Pages/Campaigns/Create.jsx",
		"resources_js_Pages_Campaigns_Create_jsx"
	],
	"./Campaigns/Create.jsx": [
		"./resources/js/Pages/Campaigns/Create.jsx",
		"resources_js_Pages_Campaigns_Create_jsx"
	],
	"./Campaigns/Edit": [
		"./resources/js/Pages/Campaigns/Edit.jsx",
		"resources_js_Pages_Campaigns_Edit_jsx"
	],
	"./Campaigns/Edit.jsx": [
		"./resources/js/Pages/Campaigns/Edit.jsx",
		"resources_js_Pages_Campaigns_Edit_jsx"
	],
	"./Campaigns/Index": [
		"./resources/js/Pages/Campaigns/Index.jsx",
		"resources_js_Pages_Campaigns_Index_jsx"
	],
	"./Campaigns/Index.jsx": [
		"./resources/js/Pages/Campaigns/Index.jsx",
		"resources_js_Pages_Campaigns_Index_jsx"
	],
	"./Campaigns/Show": [
		"./resources/js/Pages/Campaigns/Show.jsx",
		"resources_js_Pages_Campaigns_Show_jsx"
	],
	"./Campaigns/Show.jsx": [
		"./resources/js/Pages/Campaigns/Show.jsx",
		"resources_js_Pages_Campaigns_Show_jsx"
	],
	"./Categories/Create": [
		"./resources/js/Pages/Categories/Create.jsx",
		"resources_js_Pages_Categories_Create_jsx"
	],
	"./Categories/Create.jsx": [
		"./resources/js/Pages/Categories/Create.jsx",
		"resources_js_Pages_Categories_Create_jsx"
	],
	"./Categories/Edit": [
		"./resources/js/Pages/Categories/Edit.jsx",
		"resources_js_Pages_Categories_Edit_jsx"
	],
	"./Categories/Edit.jsx": [
		"./resources/js/Pages/Categories/Edit.jsx",
		"resources_js_Pages_Categories_Edit_jsx"
	],
	"./Categories/Index": [
		"./resources/js/Pages/Categories/Index.jsx",
		"resources_js_Pages_Categories_Index_jsx"
	],
	"./Categories/Index.jsx": [
		"./resources/js/Pages/Categories/Index.jsx",
		"resources_js_Pages_Categories_Index_jsx"
	],
	"./Categories/Show": [
		"./resources/js/Pages/Categories/Show.jsx",
		"resources_js_Pages_Categories_Show_jsx"
	],
	"./Categories/Show.jsx": [
		"./resources/js/Pages/Categories/Show.jsx",
		"resources_js_Pages_Categories_Show_jsx"
	],
	"./Dashboard": [
		"./resources/js/Pages/Dashboard.jsx",
		"resources_js_Pages_Dashboard_jsx"
	],
	"./Dashboard.jsx": [
		"./resources/js/Pages/Dashboard.jsx",
		"resources_js_Pages_Dashboard_jsx"
	],
	"./Donations/Create": [
		"./resources/js/Pages/Donations/Create.jsx",
		"resources_js_Pages_Donations_Create_jsx"
	],
	"./Donations/Create.jsx": [
		"./resources/js/Pages/Donations/Create.jsx",
		"resources_js_Pages_Donations_Create_jsx"
	],
	"./Donations/DonationsTable": [
		"./resources/js/Pages/Donations/DonationsTable.jsx",
		"resources_js_Pages_Donations_DonationsTable_jsx"
	],
	"./Donations/DonationsTable.jsx": [
		"./resources/js/Pages/Donations/DonationsTable.jsx",
		"resources_js_Pages_Donations_DonationsTable_jsx"
	],
	"./Donations/Edit": [
		"./resources/js/Pages/Donations/Edit.jsx",
		"resources_js_Pages_Donations_Edit_jsx"
	],
	"./Donations/Edit.jsx": [
		"./resources/js/Pages/Donations/Edit.jsx",
		"resources_js_Pages_Donations_Edit_jsx"
	],
	"./Donations/Index": [
		"./resources/js/Pages/Donations/Index.jsx",
		"resources_js_Pages_Donations_Index_jsx"
	],
	"./Donations/Index.jsx": [
		"./resources/js/Pages/Donations/Index.jsx",
		"resources_js_Pages_Donations_Index_jsx"
	],
	"./Donations/Show": [
		"./resources/js/Pages/Donations/Show.jsx",
		"resources_js_Pages_Donations_Show_jsx"
	],
	"./Donations/Show.jsx": [
		"./resources/js/Pages/Donations/Show.jsx",
		"resources_js_Pages_Donations_Show_jsx"
	],
	"./Donors/Create": [
		"./resources/js/Pages/Donors/Create.jsx",
		"resources_js_Pages_Donors_Create_jsx"
	],
	"./Donors/Create.jsx": [
		"./resources/js/Pages/Donors/Create.jsx",
		"resources_js_Pages_Donors_Create_jsx"
	],
	"./Donors/DonorsTable": [
		"./resources/js/Pages/Donors/DonorsTable.jsx",
		"resources_js_Pages_Donors_DonorsTable_jsx"
	],
	"./Donors/DonorsTable.jsx": [
		"./resources/js/Pages/Donors/DonorsTable.jsx",
		"resources_js_Pages_Donors_DonorsTable_jsx"
	],
	"./Donors/Edit": [
		"./resources/js/Pages/Donors/Edit.jsx",
		"resources_js_Pages_Donors_Edit_jsx"
	],
	"./Donors/Edit.jsx": [
		"./resources/js/Pages/Donors/Edit.jsx",
		"resources_js_Pages_Donors_Edit_jsx"
	],
	"./Donors/Index": [
		"./resources/js/Pages/Donors/Index.jsx",
		"resources_js_Pages_Donors_Index_jsx"
	],
	"./Donors/Index.jsx": [
		"./resources/js/Pages/Donors/Index.jsx",
		"resources_js_Pages_Donors_Index_jsx"
	],
	"./Donors/Show": [
		"./resources/js/Pages/Donors/Show.jsx",
		"resources_js_Pages_Donors_Show_jsx"
	],
	"./Donors/Show.jsx": [
		"./resources/js/Pages/Donors/Show.jsx",
		"resources_js_Pages_Donors_Show_jsx"
	],
	"./Home": [
		"./resources/js/Pages/Home.jsx",
		"resources_js_Pages_Home_jsx"
	],
	"./Home.jsx": [
		"./resources/js/Pages/Home.jsx",
		"resources_js_Pages_Home_jsx"
	],
	"./Users/Index": [
		"./resources/js/Pages/Users/Index.jsx",
		"resources_js_Pages_Users_Index_jsx"
	],
	"./Users/Index.jsx": [
		"./resources/js/Pages/Users/Index.jsx",
		"resources_js_Pages_Users_Index_jsx"
	],
	"./Welcome": [
		"./resources/js/Pages/Welcome.js",
		"resources_js_Pages_Welcome_js"
	],
	"./Welcome.js": [
		"./resources/js/Pages/Welcome.js",
		"resources_js_Pages_Welcome_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/headlessui.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/headlessui.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combobox": () => (/* binding */ Na),
/* harmony export */   "Dialog": () => (/* binding */ An),
/* harmony export */   "Disclosure": () => (/* binding */ Ye),
/* harmony export */   "FocusTrap": () => (/* binding */ yu),
/* harmony export */   "Listbox": () => (/* binding */ Ee),
/* harmony export */   "Menu": () => (/* binding */ Ze),
/* harmony export */   "Popover": () => (/* binding */ Te),
/* harmony export */   "Portal": () => (/* binding */ We),
/* harmony export */   "RadioGroup": () => (/* binding */ lt),
/* harmony export */   "Switch": () => (/* binding */ Qt),
/* harmony export */   "Tab": () => (/* binding */ De),
/* harmony export */   "Transition": () => (/* binding */ mt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
function k(){let e=[],t=[],r={enqueue(o){t.push(o)},requestAnimationFrame(...o){let n=requestAnimationFrame(...o);r.add(()=>cancelAnimationFrame(n))},nextFrame(...o){r.requestAnimationFrame(()=>{r.requestAnimationFrame(...o)})},setTimeout(...o){let n=setTimeout(...o);r.add(()=>clearTimeout(n))},add(o){e.push(o)},dispose(){for(let o of e.splice(0))o()},async workQueue(){for(let o of t.splice(0))await o()}};return r}function Q(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(k);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}var x=typeof window!="undefined"?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;var yt={serverHandoffComplete:!1};function q(){let[e,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(yt.serverHandoffComplete);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&t(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{yt.serverHandoffComplete===!1&&(yt.serverHandoffComplete=!0)},[]),e}var or=0;function to(){return++or}function A(){let e=q(),[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e?to:null);return x(()=>{t===null&&r(to())},[t]),t!=null?""+t:void 0}function ke(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e},[e]),t}function ee(e,t){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),n=ke(e);return x(()=>o(n.current),[n,o,...t]),r}function I(...e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)},[t])}function S(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,S),o}function E({props:e,slot:t,defaultTag:r,features:o,visible:n=!0,name:i}){if(n)return _e(e,t,r,i);let a=o!=null?o:0;if(a&2){let{static:l=!1,...s}=e;if(l)return _e(s,t,r,i)}if(a&1){let{unmount:l=!0,...s}=e;return S(l?0:1,{[0](){return null},[1](){return _e({...s,hidden:!0,style:{display:"none"}},t,r,i)}})}return _e(e,t,r,i)}function _e(e,t={},r,o){let{as:n=r,children:i,refName:a="ref",...l}=gt(e,["unmount","static"]),s=e.ref!==void 0?{[a]:e.ref}:{},u=typeof i=="function"?i(t):i;if(l.className&&typeof l.className=="function"&&(l.className=l.className(t)),n===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(l).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(u,Object.assign({},fr(mr(gt(l,["ref"])),u.props,["onClick"]),s))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,Object.assign({},gt(l,["ref"]),n!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&s),u)}function fr(e,t,r){let o=Object.assign({},e);for(let n of r)e[n]!==void 0&&t[n]!==void 0&&Object.assign(o,{[n](i){i.defaultPrevented||e[n](i),i.defaultPrevented||t[n](i)}});return o}function D(e){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(e),{displayName:(t=e.displayName)!=null?t:e.name})}function mr(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function gt(e,t=[]){let r=Object.assign({},e);for(let o of t)o in r&&delete r[o];return r}function br(e){throw new Error("Unexpected object: "+e)}function ae(e,t){let r=t.resolveItems();if(r.length<=0)return null;let o=t.resolveActiveIndex(),n=o!=null?o:-1,i=(()=>{switch(e.focus){case 0:return r.findIndex(a=>!t.resolveDisabled(a));case 1:{let a=r.slice().reverse().findIndex((l,s,u)=>n!==-1&&u.length-s-1>=n?!1:!t.resolveDisabled(l));return a===-1?a:r.length-1-a}case 2:return r.findIndex((a,l)=>l<=n?!1:!t.resolveDisabled(a));case 3:{let a=r.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return a===-1?a:r.length-1-a}case 4:return r.findIndex(a=>t.resolveId(a)===e.id);case 5:return null;default:br(e)}})();return i===-1?o:i}function G(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&Tr(r)?!1:o}function Tr(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function w(e,t,r){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);o.current=t,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function n(i){o.current.call(window,i)}return window.addEventListener(e,n,r),()=>window.removeEventListener(e,n,r)},[e,r])}var Pt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Pt.displayName="OpenClosedContext";function _(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Pt)}function W({value:e,children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Pt.Provider,{value:e},t)}function ro(e){var r;if(e.type)return e.type;let t=(r=e.as)!=null?r:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function U(e,t){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>ro(e));return x(()=>{o(ro(e))},[e.type,e.as]),x(()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[r,t]),r}function se({container:e,accept:t,walk:r,enabled:o=!0}){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t,i.current=r},[t,r]),x(()=>{if(!e||!o)return;let a=n.current,l=i.current,s=Object.assign(c=>a(c),{acceptNode:a}),u=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;u.nextNode();)l(u.currentNode)},[e,o,n,i])}var Ar={[1](e){return e.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){return e.disabled||e.comboboxState===0?e:{...e,comboboxState:0}},[2](e,t){return e.disabled===t.disabled?e:{...e,disabled:t.disabled}},[3](e,t){if(e.disabled||e.optionsRef.current&&!e.optionsPropsRef.current.static&&e.comboboxState===1)return e;let r=ae(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return e.activeOptionIndex===r?e:{...e,activeOptionIndex:r}},[4]:(e,t)=>{var i;let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=Array.from((i=e.optionsRef.current)==null?void 0:i.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a,l,s)=>Object.assign(a,{[l.id]:s}),{}),n=[...e.options,{id:t.id,dataRef:t.dataRef}].sort((a,l)=>o[a.id]-o[l.id]);return{...e,options:n,activeOptionIndex:(()=>r===null?null:n.indexOf(r))()}},[5]:(e,t)=>{let r=e.options.slice(),o=e.activeOptionIndex!==null?r[e.activeOptionIndex]:null,n=r.findIndex(i=>i.id===t.id);return n!==-1&&r.splice(n,1),{...e,options:r,activeOptionIndex:(()=>n===e.activeOptionIndex||o===null?null:r.indexOf(o))()}}},vt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);vt.displayName="ComboboxContext";function pe(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(vt);if(t===null){let r=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,pe),r}return t}var Rt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Rt.displayName="ComboboxActions";function Ue(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Rt);if(e===null){let t=new Error("ComboboxActions is missing a parent <Combobox /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function hr(e,t){return S(t.type,Ar,e,t)}var Or=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ir=D(function(t,r){let{value:o,onChange:n,disabled:i=!1,...a}=t,l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:o,onChange:n}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({displayValue:void 0}),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(hr,{comboboxState:1,comboboxPropsRef:l,optionsPropsRef:s,inputPropsRef:u,labelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),inputRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),optionsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),disabled:i,options:[],activeOptionIndex:null}),[{comboboxState:m,options:b,activeOptionIndex:T,optionsRef:y,inputRef:p,buttonRef:f},d]=c;x(()=>{l.current.value=o},[o,l]),x(()=>{l.current.onChange=n},[n,l]),x(()=>d({type:2,disabled:i}),[i]),w("mousedown",O=>{var N,K,V;let L=O.target;m===0&&(((N=f.current)==null?void 0:N.contains(L))||((K=p.current)==null?void 0:K.contains(L))||((V=y.current)==null?void 0:V.contains(L))||d({type:1}))});let P=T===null?null:b[T].dataRef.current.value,C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:m===0,disabled:i,activeIndex:T,activeOption:P}),[m,i,b,T]),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(!p.current||o===void 0)return;let O=u.current.displayValue;typeof O=="function"?p.current.value=O(o):typeof o=="string"&&(p.current.value=o)},[o,p,u]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(O=>{let L=b.find(K=>K.id===O);if(!L)return;let{dataRef:N}=L;l.current.onChange(N.current.value),R()},[b,l,p]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(T!==null){let{dataRef:O}=b[T];l.current.onChange(O.current.value),R()}},[T,b,l,p]),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectOption:g,selectActiveOption:v}),[g,v]);return x(()=>{m===1&&R()},[R,m]),x(R,[R]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Rt.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(vt.Provider,{value:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(m,{[0]:0,[1]:1})},E({props:r===null?a:{...a,ref:r},slot:C,defaultTag:Or,name:"Combobox"}))))}),Lr="input",Dr=D(function(t,r){var R,g;let{value:o,onChange:n,displayValue:i,...a}=t,[l,s]=pe("Combobox.Input"),u=Ue(),c=I(l.inputRef,r),m=l.inputPropsRef,b=`headlessui-combobox-input-${A()}`,T=Q(),y=ke(n);x(()=>{m.current.displayValue=i},[i,m]);let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v=>{switch(v.key){case"Enter":v.preventDefault(),v.stopPropagation(),u.selectActiveOption(),s({type:1});break;case"ArrowDown":return v.preventDefault(),v.stopPropagation(),S(l.comboboxState,{[0]:()=>s({type:3,focus:2}),[1]:()=>{s({type:0}),T.nextFrame(()=>{l.comboboxPropsRef.current.value||s({type:3,focus:0})})}});case"ArrowUp":return v.preventDefault(),v.stopPropagation(),S(l.comboboxState,{[0]:()=>s({type:3,focus:1}),[1]:()=>{s({type:0}),T.nextFrame(()=>{l.comboboxPropsRef.current.value||s({type:3,focus:3})})}});case"Home":case"PageUp":return v.preventDefault(),v.stopPropagation(),s({type:3,focus:0});case"End":case"PageDown":return v.preventDefault(),v.stopPropagation(),s({type:3,focus:3});case"Escape":return v.preventDefault(),l.optionsRef.current&&!l.optionsPropsRef.current.static&&v.stopPropagation(),s({type:1});case"Tab":u.selectActiveOption(),s({type:1});break}},[T,s,l,u]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v=>{var h;s({type:0}),(h=y.current)==null||h.call(y,v)},[s,y]),d=ee(()=>{if(!!l.labelRef.current)return[l.labelRef.current.id].join(" ")},[l.labelRef.current]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l.comboboxState===0,disabled:l.disabled}),[l]),C={ref:c,id:b,role:"combobox",type:"text","aria-controls":(R=l.optionsRef.current)==null?void 0:R.id,"aria-expanded":l.disabled?void 0:l.comboboxState===0,"aria-activedescendant":l.activeOptionIndex===null||(g=l.options[l.activeOptionIndex])==null?void 0:g.id,"aria-labelledby":d,disabled:l.disabled,onKeyDown:p,onChange:f};return E({props:{...a,...C},slot:P,defaultTag:Lr,name:"Combobox.Input"})}),Mr="button",Fr=D(function(t,r){var p;let[o,n]=pe("Combobox.Button"),i=Ue(),a=I(o.buttonRef,r),l=`headlessui-combobox-button-${A()}`,s=Q(),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case"ArrowDown":return f.preventDefault(),f.stopPropagation(),o.comboboxState===1&&(n({type:0}),s.nextFrame(()=>{o.comboboxPropsRef.current.value||n({type:3,focus:0})})),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})});case"ArrowUp":return f.preventDefault(),f.stopPropagation(),o.comboboxState===1&&(n({type:0}),s.nextFrame(()=>{o.comboboxPropsRef.current.value||n({type:3,focus:3})})),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})});case"Escape":return f.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&f.stopPropagation(),n({type:1}),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})})}},[s,n,o,i]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{if(G(f.currentTarget))return f.preventDefault();o.comboboxState===0?n({type:1}):(f.preventDefault(),n({type:0})),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})})},[n,s,o]),m=ee(()=>{if(!!o.labelRef.current)return[o.labelRef.current.id,l].join(" ")},[o.labelRef.current,l]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.comboboxState===0,disabled:o.disabled}),[o]),T=t,y={ref:a,id:l,type:U(t,o.buttonRef),tabIndex:-1,"aria-haspopup":!0,"aria-controls":(p=o.optionsRef.current)==null?void 0:p.id,"aria-expanded":o.disabled?void 0:o.comboboxState===0,"aria-labelledby":m,disabled:o.disabled,onClick:c,onKeyDown:u};return E({props:{...T,...y},slot:b,defaultTag:Mr,name:"Combobox.Button"})}),wr="label";function kr(e){let[t]=pe("Combobox.Label"),r=`headlessui-combobox-label-${A()}`,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var a;return(a=t.inputRef.current)==null?void 0:a.focus({preventScroll:!0})},[t.inputRef]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.comboboxState===0,disabled:t.disabled}),[t]),i={ref:t.labelRef,id:r,onClick:o};return E({props:{...e,...i},slot:n,defaultTag:wr,name:"Combobox.Label"})}var _r="ul",Gr=1|2,Hr=D(function(t,r){var y;let{hold:o=!1,...n}=t,[i]=pe("Combobox.Options"),{optionsPropsRef:a}=i,l=I(i.optionsRef,r),s=`headlessui-combobox-options-${A()}`,u=_(),c=(()=>u!==null?u===0:i.comboboxState===0)();x(()=>{var p;a.current.static=(p=t.static)!=null?p:!1},[a,t.static]),x(()=>{a.current.hold=o},[o,a]),se({container:i.optionsRef.current,enabled:i.comboboxState===0,accept(p){return p.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});let m=ee(()=>{var p,f,d;return(d=(p=i.labelRef.current)==null?void 0:p.id)!=null?d:(f=i.buttonRef.current)==null?void 0:f.id},[i.labelRef.current,i.buttonRef.current]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.comboboxState===0}),[i]),T={"aria-activedescendant":i.activeOptionIndex===null||(y=i.options[i.activeOptionIndex])==null?void 0:y.id,"aria-labelledby":m,role:"listbox",id:s,ref:l};return E({props:{...n,...T},slot:b,defaultTag:_r,features:Gr,visible:c,name:"Combobox.Options"})}),Ur="li";function Br(e){let{disabled:t=!1,value:r,...o}=e,[n,i]=pe("Combobox.Option"),a=Ue(),l=`headlessui-combobox-option-${A()}`,s=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===l:!1,u=n.comboboxPropsRef.current.value===r,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:t,value:r});x(()=>{c.current.disabled=t},[c,t]),x(()=>{c.current.value=r},[c,r]),x(()=>{var P,C;c.current.textValue=(C=(P=document.getElementById(l))==null?void 0:P.textContent)==null?void 0:C.toLowerCase()},[c,l]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>a.selectOption(l),[a,l]);x(()=>(i({type:4,id:l,dataRef:c}),()=>i({type:5,id:l})),[c,l]),x(()=>{n.comboboxState===0&&(!u||i({type:3,focus:4,id:l}))},[n.comboboxState,u,l]),x(()=>{if(n.comboboxState!==0||!s)return;let P=k();return P.requestAnimationFrame(()=>{var C,R;(R=(C=document.getElementById(l))==null?void 0:C.scrollIntoView)==null||R.call(C,{block:"nearest"})}),P.dispose},[l,s,n.comboboxState,n.activeOptionIndex]);let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(P=>{if(t)return P.preventDefault();m(),i({type:1}),k().nextFrame(()=>{var C;return(C=n.inputRef.current)==null?void 0:C.focus({preventScroll:!0})})},[i,n.inputRef,t,m]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(t)return i({type:3,focus:5});i({type:3,focus:4,id:l})},[t,l,i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||s||i({type:3,focus:4,id:l})},[t,s,l,i]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||!s||n.optionsPropsRef.current.hold||i({type:3,focus:5})},[t,s,i,n.comboboxState,n.comboboxPropsRef]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:s,selected:u,disabled:t}),[s,u,t]);return E({props:{...o,...{id:l,role:"option",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,"aria-selected":u===!0?!0:void 0,disabled:void 0,onClick:b,onFocus:T,onPointerMove:y,onMouseMove:y,onPointerLeave:p,onMouseLeave:p}},slot:f,defaultTag:Ur,name:"Combobox.Option"})}var Na=Object.assign(Ir,{Input:Dr,Button:Fr,Label:kr,Options:Hr,Option:Br});var Et=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");function xe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Et))}function de(e,t=0){return e===document.body?!1:S(t,{[0](){return e.matches(Et)},[1](){let r=e;for(;r!==null;){if(r.matches(Et))return!0;r=r.parentElement}return!1}})}function ce(e){e==null||e.focus({preventScroll:!0})}function M(e,t){let r=Array.isArray(e)?e.slice().sort((c,m)=>{let b=c.compareDocumentPosition(m);return b&Node.DOCUMENT_POSITION_FOLLOWING?-1:b&Node.DOCUMENT_POSITION_PRECEDING?1:0}):xe(e),o=document.activeElement,n=(()=>{if(t&(1|4))return 1;if(t&(2|8))return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(o))-1;if(t&4)return Math.max(0,r.indexOf(o))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=t&32?{preventScroll:!0}:{},l=0,s=r.length,u;do{if(l>=s||l+s<=0)return 0;let c=i+l;if(t&16)c=(c+s)%s;else{if(c<0)return 3;if(c>=s)return 1}u=r[c],u==null||u.focus(a),l+=n}while(u!==document.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}function Be(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ne(e,t=30,{initialFocus:r,containers:o}={}){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window!="undefined"?document.activeElement:null),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=Be(),l=Boolean(t&16),s=Boolean(t&2);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!l||(n.current=document.activeElement)},[l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!!l)return()=>{ce(n.current),n.current=null}},[l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s||!e.current)return;let u=document.activeElement;if(r==null?void 0:r.current){if((r==null?void 0:r.current)===u){i.current=u;return}}else if(e.current.contains(u)){i.current=u;return}(r==null?void 0:r.current)?ce(r.current):M(e.current,1)===0&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=document.activeElement},[e,r,s]),w("keydown",u=>{!(t&4)||!e.current||u.key==="Tab"&&(u.preventDefault(),M(e.current,(u.shiftKey?2:4)|16)===2&&(i.current=document.activeElement))}),w("focus",u=>{if(!(t&8))return;let c=new Set(o==null?void 0:o.current);if(c.add(e),!c.size)return;let m=i.current;if(!m||!a.current)return;let b=u.target;b&&b instanceof HTMLElement?Kr(c,b)?(i.current=b,ce(b)):(u.preventDefault(),u.stopPropagation(),ce(m)):ce(i.current)},!0)}function Kr(e,t){var r;for(let o of e)if((r=o.current)==null?void 0:r.contains(t))return!0;return!1}var fe=new Set,J=new Map;function po(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function co(e){let t=J.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function fo(e,t=!0){x(()=>{if(!t||!e.current)return;let r=e.current;fe.add(r);for(let o of J.keys())o.contains(r)&&(co(o),J.delete(o));return document.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let n of fe)if(o.contains(n))return;fe.size===1&&(J.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),po(o))}}),()=>{if(fe.delete(r),fe.size>0)document.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!J.has(o)){for(let n of fe)if(o.contains(n))return;J.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),po(o)}});else for(let o of J.keys())co(o),J.delete(o)}},[t])}var mo=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function bo(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(mo)}function At(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(mo.Provider,{value:e.force},e.children)}function Xr(){let e=bo(),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Po),[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{if(!e&&t!==null||typeof window=="undefined")return null;let n=document.getElementById("headlessui-portal-root");if(n)return n;let i=document.createElement("div");return i.setAttribute("id","headlessui-portal-root"),document.body.appendChild(i)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r!==null&&(document.body.contains(r)||document.body.appendChild(r))},[r]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e||t!==null&&o(t.current)},[t,o,e]),r}var Jr=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function We(e){let t=e,r=Xr(),[o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>typeof window=="undefined"?null:document.createElement("div")),n=q();return x(()=>{if(!!r&&!!o)return r.appendChild(o),()=>{var i;!r||!o||(r.removeChild(o),r.childNodes.length<=0&&((i=r.parentElement)==null||i.removeChild(r)))}},[r,o]),n?!r||!o?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(E({props:t,defaultTag:Jr,name:"Portal"}),o):null}var Zr=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Po=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function en(e){let{target:t,...r}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Po.Provider,{value:t},E({props:r,defaultTag:Zr,name:"Popover.Group"}))}We.Group=en;var vo=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Ro(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(vo);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ro),t}return e}function re(){let[e,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[e.length>0?e.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(o){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s})),[]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:n,slot:o.slot,name:o.name,props:o.props}),[n,o.slot,o.name,o.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(vo.Provider,{value:i},o.children)},[t])]}var an="p";function me(e){let t=Ro(),r=`headlessui-description-${A()}`;x(()=>t.register(r),[r,t.register]);let o=e,n={...t.props,id:r};return E({props:{...o,...n},slot:t.slot||{},defaultTag:an,name:t.name||"Description"})}var ht=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});ht.displayName="StackContext";function cn(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ht)}function Eo({children:e,onUpdate:t,type:r,element:o}){let n=cn(),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...a)=>{t==null||t(...a),n(...a)},[n,t]);return x(()=>(i(0,r,o),()=>i(1,r,o)),[i,r,o]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ht.Provider,{value:i},e)}var yn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Ve=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Ve.displayName="DialogContext";function It(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ve);if(t===null){let r=new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,It),r}return t}function gn(e,t){return S(t.type,yn,e,t)}var Pn="div",xn=1|2,vn=D(function(t,r){let{open:o,onClose:n,initialFocus:i,...a}=t,[l,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),u=_();o===void 0&&u!==null&&(o=S(u,{[0]:!0,[1]:!1}));let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),b=I(m,r),T=t.hasOwnProperty("open")||u!==null,y=t.hasOwnProperty("onClose");if(!T&&!y)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!y)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof n!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);let p=o?0:1,f=(()=>u!==null?u===0:p===0)(),[d,P]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gn,{titleId:null,descriptionId:null}),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>n(!1),[n]),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(F=>P({type:0,id:F}),[P]),v=q()&&p===0,h=l>1,O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ve)!==null;Ne(m,v?S(h?"parent":"leaf",{parent:16,leaf:30}):1,{initialFocus:i,containers:c}),fo(m,h?v:!1),w("mousedown",F=>{var H;let $=F.target;p===0&&(h||((H=m.current)==null?void 0:H.contains($))||C())}),w("keydown",F=>{F.key==="Escape"&&p===0&&(h||(F.preventDefault(),F.stopPropagation(),C()))}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(p!==0||O)return;let F=document.documentElement.style.overflow,$=document.documentElement.style.paddingRight,H=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${H}px`,()=>{document.documentElement.style.overflow=F,document.documentElement.style.paddingRight=$}},[p,O]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(p!==0||!m.current)return;let F=new IntersectionObserver($=>{for(let H of $)H.boundingClientRect.x===0&&H.boundingClientRect.y===0&&H.boundingClientRect.width===0&&H.boundingClientRect.height===0&&C()});return F.observe(m.current),()=>F.disconnect()},[p,m,C]);let[N,K]=re(),V=`headlessui-dialog-${A()}`,Fe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:p,close:C,setTitleId:R},d],[p,d,C,R]),ge=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:p===0}),[p]),we={ref:b,id:V,role:"dialog","aria-modal":p===0?!0:void 0,"aria-labelledby":d.titleId,"aria-describedby":N,onClick(F){F.stopPropagation()}},X=a;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Eo,{type:"Dialog",element:m,onUpdate:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((F,$,H)=>{$==="Dialog"&&S(F,{[0](){c.current.add(H),s(Pe=>Pe+1)},[1](){c.current.add(H),s(Pe=>Pe-1)}})},[])},react__WEBPACK_IMPORTED_MODULE_0__.createElement(At,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(We,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ve.Provider,{value:Fe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(We.Group,{target:m},react__WEBPACK_IMPORTED_MODULE_0__.createElement(At,{force:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{slot:ge,name:"Dialog.Description"},E({props:{...X,...we},slot:ge,defaultTag:Pn,features:xn,visible:f,name:"Dialog"}))))))))}),Rn="div",En=D(function(t,r){let[{dialogState:o,close:n}]=It("Dialog.Overlay"),i=I(r),a=`headlessui-dialog-overlay-${A()}`,l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m=>{if(m.target===m.currentTarget){if(G(m.currentTarget))return m.preventDefault();m.preventDefault(),m.stopPropagation(),n()}},[n]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return E({props:{...t,...{ref:i,id:a,"aria-hidden":!0,onClick:l}},slot:s,defaultTag:Rn,name:"Dialog.Overlay"})}),Cn="h2";function Sn(e){let[{dialogState:t,setTitleId:r}]=It("Dialog.Title"),o=`headlessui-dialog-title-${A()}`;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(r(o),()=>r(null)),[o,r]);let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t===0}),[t]);return E({props:{...e,...{id:o}},slot:n,defaultTag:Cn,name:"Dialog.Title"})}var An=Object.assign(vn,{Overlay:En,Title:Sn,Description:me});var Ln={[0]:e=>({...e,disclosureState:S(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Mt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Mt.displayName="DisclosureContext";function Ft(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Mt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ft),r}return t}var wt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);wt.displayName="DisclosureAPIContext";function Ao(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(wt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ao),r}return t}var kt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);kt.displayName="DisclosurePanelContext";function Dn(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(kt)}function Mn(e,t){return S(t.type,Ln,e,t)}var Fn=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ye(e){let{defaultOpen:t=!1,...r}=e,o=`headlessui-disclosure-button-${A()}`,n=`headlessui-disclosure-panel-${A()}`,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Mn,{disclosureState:t?0:1,linkedPanel:!1,buttonId:o,panelId:n}),[{disclosureState:a},l]=i;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:2,buttonId:o}),[o,l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:3,panelId:n}),[n,l]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m=>{l({type:1});let b=(()=>m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:document.getElementById(o):document.getElementById(o))();b==null||b.focus()},[l,o]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:s}),[s]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:a===0,close:s}),[a,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Mt.Provider,{value:i},react__WEBPACK_IMPORTED_MODULE_0__.createElement(wt.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(a,{[0]:0,[1]:1})},E({props:r,slot:c,defaultTag:Fn,name:"Disclosure"}))))}var wn="button",kn=D(function(t,r){let[o,n]=Ft("Disclosure.Button"),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=I(i,r),l=Dn(),s=l===null?!1:l===o.panelId,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{var d;if(s){if(o.disclosureState===1)return;switch(f.key){case" ":case"Enter":f.preventDefault(),f.stopPropagation(),n({type:0}),(d=document.getElementById(o.buttonId))==null||d.focus();break}}else switch(f.key){case" ":case"Enter":f.preventDefault(),f.stopPropagation(),n({type:0});break}},[n,s,o.disclosureState,o.buttonId]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case" ":f.preventDefault();break}},[]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{var d;G(f.currentTarget)||t.disabled||(s?(n({type:0}),(d=document.getElementById(o.buttonId))==null||d.focus()):n({type:0}))},[n,t.disabled,o.buttonId,s]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.disclosureState===0}),[o]),T=U(t,i),y=t,p=s?{ref:a,type:T,onKeyDown:u,onClick:m}:{ref:a,id:o.buttonId,type:T,"aria-expanded":t.disabled?void 0:o.disclosureState===0,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:u,onKeyUp:c,onClick:m};return E({props:{...y,...p},slot:b,defaultTag:wn,name:"Disclosure.Button"})}),_n="div",Gn=1|2,Hn=D(function(t,r){let[o,n]=Ft("Disclosure.Panel"),{close:i}=Ao("Disclosure.Panel"),a=I(r,()=>{o.linkedPanel||n({type:4})}),l=_(),s=(()=>l!==null?l===0:o.disclosureState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>n({type:5}),[n]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var b;o.disclosureState===1&&((b=t.unmount)!=null?b:!0)&&n({type:5})},[o.disclosureState,t.unmount,n]);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.disclosureState===0,close:i}),[o,i]),c={ref:a,id:o.panelId},m=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(kt.Provider,{value:o.panelId},E({props:{...m,...c},slot:u,defaultTag:_n,features:Gn,visible:s,name:"Disclosure.Panel"}))});Ye.Button=kn;Ye.Panel=Hn;var Bn="div";function yu(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{initialFocus:r,...o}=e,n=q();return Ne(t,n?30:1,{initialFocus:r}),E({props:{...o,...{ref:t}},defaultTag:Bn,name:"FocusTrap"})}var $n={[1](e){return e.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){return e.disabled||e.listboxState===0?e:{...e,listboxState:0}},[2](e,t){return e.disabled===t.disabled?e:{...e,disabled:t.disabled}},[3](e,t){return e.orientation===t.orientation?e:{...e,orientation:t.orientation}},[4](e,t){if(e.disabled||e.listboxState===1)return e;let r=ae(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return e.searchQuery===""&&e.activeOptionIndex===r?e:{...e,searchQuery:"",activeOptionIndex:r}},[5]:(e,t)=>{if(e.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(s=>{var u;return!s.dataRef.current.disabled&&((u=s.dataRef.current.textValue)==null?void 0:u.startsWith(n))}),l=a?e.options.indexOf(a):-1;return l===-1||l===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:l}},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[7]:(e,t)=>{var n;let r=Array.from((n=e.optionsRef.current)==null?void 0:n.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i,a,l)=>Object.assign(i,{[a.id]:l}),{}),o=[...e.options,{id:t.id,dataRef:t.dataRef}].sort((i,a)=>r[i.id]-r[a.id]);return{...e,options:o}},[8]:(e,t)=>{let r=e.options.slice(),o=e.activeOptionIndex!==null?r[e.activeOptionIndex]:null,n=r.findIndex(i=>i.id===t.id);return n!==-1&&r.splice(n,1),{...e,options:r,activeOptionIndex:(()=>n===e.activeOptionIndex||o===null?null:r.indexOf(o))()}}},Gt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Gt.displayName="ListboxContext";function Re(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Gt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Re),r}return t}function Qn(e,t){return S(t.type,$n,e,t)}var qn=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ee(e){let{value:t,onChange:r,disabled:o=!1,horizontal:n=!1,...i}=e,a=n?"horizontal":"vertical",l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Qn,{listboxState:1,propsRef:{current:{value:t,onChange:r}},labelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),optionsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),disabled:o,orientation:a,options:[],searchQuery:"",activeOptionIndex:null}),[{listboxState:s,propsRef:u,optionsRef:c,buttonRef:m},b]=l;x(()=>{u.current.value=t},[t,u]),x(()=>{u.current.onChange=r},[r,u]),x(()=>b({type:2,disabled:o}),[o]),x(()=>b({type:3,orientation:a}),[a]),w("mousedown",y=>{var f,d,P;let p=y.target;s===0&&(((f=m.current)==null?void 0:f.contains(p))||((d=c.current)==null?void 0:d.contains(p))||(b({type:1}),de(p,1)||(y.preventDefault(),(P=m.current)==null||P.focus())))});let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:s===0,disabled:o}),[s,o]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Gt.Provider,{value:l},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(s,{[0]:0,[1]:1})},E({props:i,slot:T,defaultTag:qn,name:"Listbox"})))}var zn="button",Yn=D(function(t,r){var p;let[o,n]=Re("Listbox.Button"),i=I(o.buttonRef,r),a=`headlessui-listbox-button-${A()}`,l=Q(),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case" ":case"Enter":case"ArrowDown":f.preventDefault(),n({type:0}),l.nextFrame(()=>{o.propsRef.current.value||n({type:4,focus:0})});break;case"ArrowUp":f.preventDefault(),n({type:0}),l.nextFrame(()=>{o.propsRef.current.value||n({type:4,focus:3})});break}},[n,o,l]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case" ":f.preventDefault();break}},[]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{if(G(f.currentTarget))return f.preventDefault();o.listboxState===0?(n({type:1}),l.nextFrame(()=>{var d;return(d=o.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})})):(f.preventDefault(),n({type:0}))},[n,l,o]),m=ee(()=>{if(!!o.labelRef.current)return[o.labelRef.current.id,a].join(" ")},[o.labelRef.current,a]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.listboxState===0,disabled:o.disabled}),[o]),T=t,y={ref:i,id:a,type:U(t,o.buttonRef),"aria-haspopup":!0,"aria-controls":(p=o.optionsRef.current)==null?void 0:p.id,"aria-expanded":o.disabled?void 0:o.listboxState===0,"aria-labelledby":m,disabled:o.disabled,onKeyDown:s,onKeyUp:u,onClick:c};return E({props:{...T,...y},slot:b,defaultTag:zn,name:"Listbox.Button"})}),Xn="label";function Jn(e){let[t]=Re("Listbox.Label"),r=`headlessui-listbox-label-${A()}`,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})},[t.buttonRef]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]),i={ref:t.labelRef,id:r,onClick:o};return E({props:{...e,...i},slot:n,defaultTag:Xn,name:"Listbox.Label"})}var Zn="ul",ei=1|2,ti=D(function(t,r){var f;let[o,n]=Re("Listbox.Options"),i=I(o.optionsRef,r),a=`headlessui-listbox-options-${A()}`,l=Q(),s=Q(),u=_(),c=(()=>u!==null?u===0:o.listboxState===0)();x(()=>{let d=o.optionsRef.current;!d||o.listboxState===0&&d!==document.activeElement&&d.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{switch(s.dispose(),d.key){case" ":if(o.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),n({type:5,value:d.key});case"Enter":if(d.preventDefault(),d.stopPropagation(),n({type:1}),o.activeOptionIndex!==null){let{dataRef:P}=o.options[o.activeOptionIndex];o.propsRef.current.onChange(P.current.value)}k().nextFrame(()=>{var P;return(P=o.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})});break;case S(o.orientation,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return d.preventDefault(),d.stopPropagation(),n({type:4,focus:2});case S(o.orientation,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return d.preventDefault(),d.stopPropagation(),n({type:4,focus:1});case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),n({type:4,focus:0});case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),n({type:4,focus:3});case"Escape":return d.preventDefault(),d.stopPropagation(),n({type:1}),l.nextFrame(()=>{var P;return(P=o.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})});case"Tab":d.preventDefault(),d.stopPropagation();break;default:d.key.length===1&&(n({type:5,value:d.key}),s.setTimeout(()=>n({type:6}),350));break}},[l,n,s,o]),b=ee(()=>{var d,P,C;return(C=(d=o.labelRef.current)==null?void 0:d.id)!=null?C:(P=o.buttonRef.current)==null?void 0:P.id},[o.labelRef.current,o.buttonRef.current]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.listboxState===0}),[o]),y={"aria-activedescendant":o.activeOptionIndex===null||(f=o.options[o.activeOptionIndex])==null?void 0:f.id,"aria-labelledby":b,"aria-orientation":o.orientation,id:a,onKeyDown:m,role:"listbox",tabIndex:0,ref:i};return E({props:{...t,...y},slot:T,defaultTag:Zn,features:ei,visible:c,name:"Listbox.Options"})}),oi="li";function ri(e){let{disabled:t=!1,value:r,...o}=e,[n,i]=Re("Listbox.Option"),a=`headlessui-listbox-option-${A()}`,l=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===a:!1,s=n.propsRef.current.value===r,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:t,value:r});x(()=>{u.current.disabled=t},[u,t]),x(()=>{u.current.value=r},[u,r]),x(()=>{var d,P;u.current.textValue=(P=(d=document.getElementById(a))==null?void 0:d.textContent)==null?void 0:P.toLowerCase()},[u,a]);let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>n.propsRef.current.onChange(r),[n.propsRef,r]);x(()=>(i({type:7,id:a,dataRef:u}),()=>i({type:8,id:a})),[u,a]),x(()=>{var d,P;n.listboxState===0&&(!s||(i({type:4,focus:4,id:a}),(P=(d=document.getElementById(a))==null?void 0:d.focus)==null||P.call(d)))},[n.listboxState]),x(()=>{if(n.listboxState!==0||!l)return;let d=k();return d.requestAnimationFrame(()=>{var P,C;(C=(P=document.getElementById(a))==null?void 0:P.scrollIntoView)==null||C.call(P,{block:"nearest"})}),d.dispose},[a,l,n.listboxState,n.activeOptionIndex]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{if(t)return d.preventDefault();c(),i({type:1}),k().nextFrame(()=>{var P;return(P=n.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})})},[i,n.buttonRef,t,c]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(t)return i({type:4,focus:5});i({type:4,focus:4,id:a})},[t,a,i]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||l||i({type:4,focus:4,id:a})},[t,l,a,i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||!l||i({type:4,focus:5})},[t,l,i]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,selected:s,disabled:t}),[l,s,t]);return E({props:{...o,...{id:a,role:"option",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,"aria-selected":s===!0?!0:void 0,disabled:void 0,onClick:m,onFocus:b,onPointerMove:T,onMouseMove:T,onPointerLeave:y,onMouseLeave:y}},slot:p,defaultTag:oi,name:"Listbox.Option"})}Ee.Button=Yn;Ee.Label=Jn;Ee.Options=ti;Ee.Option=ri;var ui={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,t)=>{let r=ae(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return e.searchQuery===""&&e.activeItemIndex===r?e:{...e,searchQuery:"",activeItemIndex:r}},[3]:(e,t)=>{let o=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+o).concat(e.items.slice(0,e.activeItemIndex+o)):e.items).find(s=>{var u;return((u=s.dataRef.current.textValue)==null?void 0:u.startsWith(n))&&!s.dataRef.current.disabled}),l=a?e.items.indexOf(a):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:l}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,t)=>{var n;let r=Array.from((n=e.itemsRef.current)==null?void 0:n.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i,a,l)=>Object.assign(i,{[a.id]:l}),{}),o=[...e.items,{id:t.id,dataRef:t.dataRef}].sort((i,a)=>r[i.id]-r[a.id]);return{...e,items:o}},[6]:(e,t)=>{let r=e.items.slice(),o=e.activeItemIndex!==null?r[e.activeItemIndex]:null,n=r.findIndex(i=>i.id===t.id);return n!==-1&&r.splice(n,1),{...e,items:r,activeItemIndex:(()=>n===e.activeItemIndex||o===null?null:r.indexOf(o))()}}},Ht=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Ht.displayName="MenuContext";function Je(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ht);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Je),r}return t}function pi(e,t){return S(t.type,ui,e,t)}var di=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ze(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(pi,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null}),[{menuState:r,itemsRef:o,buttonRef:n},i]=t;w("mousedown",l=>{var u,c,m;let s=l.target;r===0&&(((u=n.current)==null?void 0:u.contains(s))||((c=o.current)==null?void 0:c.contains(s))||(i({type:1}),de(s,1)||(l.preventDefault(),(m=n.current)==null||m.focus())))});let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:r===0}),[r]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ht.Provider,{value:t},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(r,{[0]:0,[1]:1})},E({props:e,slot:a,defaultTag:di,name:"Menu"})))}var ci="button",fi=D(function(t,r){var y;let[o,n]=Je("Menu.Button"),i=I(o.buttonRef,r),a=`headlessui-menu-button-${A()}`,l=Q(),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{switch(p.key){case" ":case"Enter":case"ArrowDown":p.preventDefault(),p.stopPropagation(),n({type:0}),l.nextFrame(()=>n({type:2,focus:0}));break;case"ArrowUp":p.preventDefault(),p.stopPropagation(),n({type:0}),l.nextFrame(()=>n({type:2,focus:3}));break}},[n,l]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{switch(p.key){case" ":p.preventDefault();break}},[]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{if(G(p.currentTarget))return p.preventDefault();t.disabled||(o.menuState===0?(n({type:1}),l.nextFrame(()=>{var f;return(f=o.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})})):(p.preventDefault(),p.stopPropagation(),n({type:0})))},[n,l,o,t.disabled]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.menuState===0}),[o]),b=t,T={ref:i,id:a,type:U(t,o.buttonRef),"aria-haspopup":!0,"aria-controls":(y=o.itemsRef.current)==null?void 0:y.id,"aria-expanded":t.disabled?void 0:o.menuState===0,onKeyDown:s,onKeyUp:u,onClick:c};return E({props:{...b,...T},slot:m,defaultTag:ci,name:"Menu.Button"})}),mi="div",bi=1|2,Ti=D(function(t,r){var p,f;let[o,n]=Je("Menu.Items"),i=I(o.itemsRef,r),a=`headlessui-menu-items-${A()}`,l=Q(),s=_(),u=(()=>s!==null?s===0:o.menuState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let d=o.itemsRef.current;!d||o.menuState===0&&d!==document.activeElement&&d.focus({preventScroll:!0})},[o.menuState,o.itemsRef]),se({container:o.itemsRef.current,enabled:o.menuState===0,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{var P;switch(l.dispose(),d.key){case" ":if(o.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),n({type:3,value:d.key});case"Enter":if(d.preventDefault(),d.stopPropagation(),n({type:1}),o.activeItemIndex!==null){let{id:C}=o.items[o.activeItemIndex];(P=document.getElementById(C))==null||P.click()}k().nextFrame(()=>{var C;return(C=o.buttonRef.current)==null?void 0:C.focus({preventScroll:!0})});break;case"ArrowDown":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:2});case"ArrowUp":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:1});case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:0});case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:3});case"Escape":d.preventDefault(),d.stopPropagation(),n({type:1}),k().nextFrame(()=>{var C;return(C=o.buttonRef.current)==null?void 0:C.focus({preventScroll:!0})});break;case"Tab":d.preventDefault(),d.stopPropagation();break;default:d.key.length===1&&(n({type:3,value:d.key}),l.setTimeout(()=>n({type:4}),350));break}},[n,l,o]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{switch(d.key){case" ":d.preventDefault();break}},[]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.menuState===0}),[o]),T={"aria-activedescendant":o.activeItemIndex===null||(p=o.items[o.activeItemIndex])==null?void 0:p.id,"aria-labelledby":(f=o.buttonRef.current)==null?void 0:f.id,id:a,onKeyDown:c,onKeyUp:m,role:"menu",tabIndex:0,ref:i};return E({props:{...t,...T},slot:b,defaultTag:mi,features:bi,visible:u,name:"Menu.Items"})}),yi=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function gi(e){let{disabled:t=!1,onClick:r,...o}=e,[n,i]=Je("Menu.Item"),a=`headlessui-menu-item-${A()}`,l=n.activeItemIndex!==null?n.items[n.activeItemIndex].id===a:!1;x(()=>{if(n.menuState!==0||!l)return;let p=k();return p.requestAnimationFrame(()=>{var f,d;(d=(f=document.getElementById(a))==null?void 0:f.scrollIntoView)==null||d.call(f,{block:"nearest"})}),p.dispose},[a,l,n.menuState,n.activeItemIndex]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:t});x(()=>{s.current.disabled=t},[s,t]),x(()=>{var p,f;s.current.textValue=(f=(p=document.getElementById(a))==null?void 0:p.textContent)==null?void 0:f.toLowerCase()},[s,a]),x(()=>(i({type:5,id:a,dataRef:s}),()=>i({type:6,id:a})),[s,a]);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{if(t)return p.preventDefault();if(i({type:1}),k().nextFrame(()=>{var f;return(f=n.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),r)return r(p)},[i,n.buttonRef,t,r]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(t)return i({type:2,focus:5});i({type:2,focus:4,id:a})},[t,a,i]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||l||i({type:2,focus:4,id:a})},[t,l,a,i]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||!l||i({type:2,focus:5})},[t,l,i]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,disabled:t}),[l,t]);return E({props:{...o,...{id:a,role:"menuitem",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:c,onPointerMove:m,onMouseMove:m,onPointerLeave:b,onMouseLeave:b}},slot:T,defaultTag:yi,name:"Menu.Item"})}Ze.Button=fi;Ze.Items=Ti;Ze.Item=gi;var vi={[0]:e=>({...e,popoverState:S(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,t){return e.button===t.button?e:{...e,button:t.button}},[3](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[4](e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},[5](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Ut=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Ut.displayName="PopoverContext";function ot(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ut);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ot),r}return t}var Bt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Bt.displayName="PopoverAPIContext";function Mo(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Bt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Mo),r}return t}var Nt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Nt.displayName="PopoverGroupContext";function Fo(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Nt)}var Wt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Wt.displayName="PopoverPanelContext";function Ri(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Wt)}function Ei(e,t){return S(t.type,vi,e,t)}var Ci="div";function Te(e){let t=`headlessui-popover-button-${A()}`,r=`headlessui-popover-panel-${A()}`,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ei,{popoverState:1,button:null,buttonId:t,panel:null,panelId:r}),[{popoverState:n,button:i,panel:a},l]=o;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:3,buttonId:t}),[t,l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:5,panelId:r}),[r,l]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:t,panelId:r,close:()=>l({type:1})}),[t,r,l]),u=Fo(),c=u==null?void 0:u.registerPopover,m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var p;return(p=u==null?void 0:u.isFocusWithinPopoverGroup())!=null?p:(i==null?void 0:i.contains(document.activeElement))||(a==null?void 0:a.contains(document.activeElement))},[u,i,a]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>c==null?void 0:c(s),[c,s]),w("focus",()=>{n===0&&(m()||!i||!a||l({type:1}))},!0),w("mousedown",p=>{let f=p.target;n===0&&((i==null?void 0:i.contains(f))||(a==null?void 0:a.contains(f))||(l({type:1}),de(f,1)||(p.preventDefault(),i==null||i.focus())))});let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{l({type:1});let f=(()=>p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:i:i)();f==null||f.focus()},[l,i]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:b}),[b]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n===0,close:b}),[n,b]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ut.Provider,{value:o},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Bt.Provider,{value:T},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(n,{[0]:0,[1]:1})},E({props:e,slot:y,defaultTag:Ci,name:"Popover"}))))}var Si="button",Ai=D(function(t,r){let[o,n]=ot("Popover.Button"),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=Fo(),l=a==null?void 0:a.closeOthers,s=Ri(),u=s===null?!1:s===o.panelId,c=I(i,r,u?null:g=>n({type:2,button:g})),m=I(i,r),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window=="undefined"?null:document.activeElement);w("focus",()=>{T.current=b.current,b.current=document.activeElement},!0);let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{var v,h;if(u){if(o.popoverState===1)return;switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),n({type:1}),(v=o.button)==null||v.focus();break}}else switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),n({type:0});break;case"Escape":if(o.popoverState!==0)return l==null?void 0:l(o.buttonId);if(!i.current||!i.current.contains(document.activeElement))return;g.preventDefault(),g.stopPropagation(),n({type:1});break;case"Tab":if(o.popoverState!==0||!o.panel||!o.button)return;if(g.shiftKey){if(!T.current||((h=o.button)==null?void 0:h.contains(T.current))||o.panel.contains(T.current))return;let O=xe(),L=O.indexOf(T.current);if(O.indexOf(o.button)>L)return;g.preventDefault(),g.stopPropagation(),M(o.panel,8)}else g.preventDefault(),g.stopPropagation(),M(o.panel,1);break}},[n,o.popoverState,o.buttonId,o.button,o.panel,i,l,u]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{var v;if(!u&&(g.key===" "&&g.preventDefault(),o.popoverState===0&&!!o.panel&&!!o.button))switch(g.key){case"Tab":if(!T.current||((v=o.button)==null?void 0:v.contains(T.current))||o.panel.contains(T.current))return;let h=xe(),O=h.indexOf(T.current);if(h.indexOf(o.button)>O)return;g.preventDefault(),g.stopPropagation(),M(o.panel,8);break}},[o.popoverState,o.panel,o.button,u]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{var v,h;G(g.currentTarget)||t.disabled||(u?(n({type:1}),(v=o.button)==null||v.focus()):(o.popoverState===1&&(l==null||l(o.buttonId)),(h=o.button)==null||h.focus(),n({type:0})))},[n,o.button,o.popoverState,o.buttonId,t.disabled,l,u]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.popoverState===0}),[o]),P=U(t,i),C=t,R=u?{ref:m,type:P,onKeyDown:y,onClick:f}:{ref:c,id:o.buttonId,type:P,"aria-expanded":t.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:y,onKeyUp:p,onClick:f};return E({props:{...C,...R},slot:d,defaultTag:Si,name:"Popover.Button"})}),hi="div",Oi=1|2,Ii=D(function(t,r){let[{popoverState:o},n]=ot("Popover.Overlay"),i=I(r),a=`headlessui-popover-overlay-${A()}`,l=_(),s=(()=>l!==null?l===0:o===0)(),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(T=>{if(G(T.currentTarget))return T.preventDefault();n({type:1})},[n]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return E({props:{...t,...{ref:i,id:a,"aria-hidden":!0,onClick:u}},slot:c,defaultTag:hi,features:Oi,visible:s,name:"Popover.Overlay"})}),Li="div",Di=1|2,Mi=D(function(t,r){let{focus:o=!1,...n}=t,[i,a]=ot("Popover.Panel"),{close:l}=Mo("Popover.Panel"),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),u=I(s,r,p=>{a({type:4,panel:p})}),c=_(),m=(()=>c!==null?c===0:i.popoverState===0)(),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{var f;switch(p.key){case"Escape":if(i.popoverState!==0||!s.current||!s.current.contains(document.activeElement))return;p.preventDefault(),p.stopPropagation(),a({type:1}),(f=i.button)==null||f.focus();break}},[i,s,a]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>a({type:4,panel:null}),[a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var p;t.static||i.popoverState===1&&((p=t.unmount)!=null?p:!0)&&a({type:4,panel:null})},[i.popoverState,t.unmount,t.static,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!o||i.popoverState!==0||!s.current)return;let p=document.activeElement;s.current.contains(p)||M(s.current,1)},[o,s,i.popoverState]),w("keydown",p=>{var d;if(i.popoverState!==0||!s.current||p.key!=="Tab"||!document.activeElement||!s.current||!s.current.contains(document.activeElement))return;p.preventDefault();let f=M(s.current,p.shiftKey?2:4);if(f===3)return(d=i.button)==null?void 0:d.focus();if(f===1){if(!i.button)return;let P=xe(),C=P.indexOf(i.button),R=P.splice(C+1).filter(g=>{var v;return!((v=s.current)==null?void 0:v.contains(g))});M(R,1)===0&&M(document.body,1)}}),w("focus",()=>{var p;!o||i.popoverState===0&&(!s.current||((p=s.current)==null?void 0:p.contains(document.activeElement))||a({type:1}))},!0);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.popoverState===0,close:l}),[i,l]),y={ref:u,id:i.panelId,onKeyDown:b};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wt.Provider,{value:i.panelId},E({props:{...n,...y},slot:T,defaultTag:Li,features:Di,visible:m,name:"Popover.Panel"}))}),Fi="div";function wi(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>{o(T=>{let y=T.indexOf(b);if(y!==-1){let p=T.slice();return p.splice(y,1),p}return T})},[o]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>(o(T=>[...T,b]),()=>n(b)),[o,n]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var T;let b=document.activeElement;return((T=t.current)==null?void 0:T.contains(b))?!0:r.some(y=>{var p,f;return((p=document.getElementById(y.buttonId))==null?void 0:p.contains(b))||((f=document.getElementById(y.panelId))==null?void 0:f.contains(b))})},[t,r]),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>{for(let T of r)T.buttonId!==b&&T.close()},[r]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:i,unregisterPopover:n,isFocusWithinPopoverGroup:a,closeOthers:l}),[i,n,a,l]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),c={ref:t},m=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nt.Provider,{value:s},E({props:{...m,...c},slot:u,defaultTag:Fi,name:"Popover.Group"}))}Te.Button=Ai;Te.Overlay=Ii;Te.Panel=Mi;Te.Group=wi;function wo(e=0){let[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>r(s=>s|l),[r]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>Boolean(t&l),[t]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>r(s=>s&~l),[r]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>r(s=>s^l),[r]);return{addFlag:o,hasFlag:n,removeFlag:i,toggleFlag:a}}var _o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Go(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_o);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Go),t}return e}function Ae(){let[e,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[e.length>0?e.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(o){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s})),[]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:n,slot:o.slot,name:o.name,props:o.props}),[n,o.slot,o.name,o.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_o.Provider,{value:i},o.children)},[t])]}var Ni="label";function nt(e){let{passive:t=!1,...r}=e,o=Go(),n=`headlessui-label-${A()}`;x(()=>o.register(n),[n,o.register]);let i={...o.props,id:n},a={...r,...i};return t&&delete a.onClick,E({props:a,slot:o.slot||{},defaultTag:Ni,name:o.name||"Label"})}var Vi={[0](e,t){return{...e,options:[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}]}},[1](e,t){let r=e.options.slice(),o=e.options.findIndex(n=>n.id===t.id);return o===-1?e:(r.splice(o,1),{...e,options:r})}},jt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);jt.displayName="RadioGroupContext";function Ho(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(jt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ho),r}return t}function $i(e,t){return S(t.type,Vi,e,t)}var Qi="div";function lt(e){let{value:t,onChange:r,disabled:o=!1,...n}=e,[{options:i},a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)($i,{options:[]}),[l,s]=Ae(),[u,c]=re(),m=`headlessui-radiogroup-${A()}`,b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>i.find(R=>!R.propsRef.current.disabled),[i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>i.some(R=>R.propsRef.current.value===t),[i,t]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(R=>{var v;if(o||R===t)return!1;let g=(v=i.find(h=>h.propsRef.current.value===R))==null?void 0:v.propsRef.current;return(g==null?void 0:g.disabled)?!1:(r(R),!0)},[r,t,o,i]);se({container:b.current,accept(R){return R.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:R.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(R){R.setAttribute("role","none")}});let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(R=>{if(!b.current)return;let v=i.filter(h=>h.propsRef.current.disabled===!1).map(h=>h.element.current);switch(R.key){case"ArrowLeft":case"ArrowUp":if(R.preventDefault(),R.stopPropagation(),M(v,2|16)===2){let O=i.find(L=>L.element.current===document.activeElement);O&&p(O.propsRef.current.value)}break;case"ArrowRight":case"ArrowDown":if(R.preventDefault(),R.stopPropagation(),M(v,4|16)===2){let O=i.find(L=>L.element.current===document.activeElement);O&&p(O.propsRef.current.value)}break;case" ":{R.preventDefault(),R.stopPropagation();let h=i.find(O=>O.element.current===document.activeElement);h&&p(h.propsRef.current.value)}break}},[b,i,p]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(R=>(a({type:0,...R}),()=>a({type:1,id:R.id})),[a]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerOption:d,firstOption:T,containsCheckedOption:y,change:p,disabled:o,value:t}),[d,T,y,p,o,t]),C={ref:b,id:m,role:"radiogroup","aria-labelledby":l,"aria-describedby":u,onKeyDown:f};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(c,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(s,{name:"RadioGroup.Label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(jt.Provider,{value:P},E({props:{...n,...C},defaultTag:Qi,name:"RadioGroup"}))))}var qi="div";function zi(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),r=`headlessui-radiogroup-option-${A()}`,[o,n]=Ae(),[i,a]=re(),{addFlag:l,removeFlag:s,hasFlag:u}=wo(1),{value:c,disabled:m=!1,...b}=e,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:c,disabled:m});x(()=>{T.current.value=c},[c,T]),x(()=>{T.current.disabled=m},[m,T]);let{registerOption:y,disabled:p,change:f,firstOption:d,containsCheckedOption:P,value:C}=Ho("RadioGroup.Option");x(()=>y({id:r,element:t,propsRef:T}),[r,y,t,e]);let R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var V;!f(c)||(l(2),(V=t.current)==null||V.focus())},[l,f,c]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>l(2),[l]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>s(2),[s]),h=(d==null?void 0:d.id)===r,O=p||m,L=C===c,N={ref:t,id:r,role:"radio","aria-checked":L?"true":"false","aria-labelledby":o,"aria-describedby":i,"aria-disabled":O?!0:void 0,tabIndex:(()=>O?-1:L||!P&&h?0:-1)(),onClick:O?void 0:R,onFocus:O?void 0:g,onBlur:O?void 0:v},K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:L,disabled:O,active:u(2)}),[L,O,u]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(n,{name:"RadioGroup.Label"},E({props:{...b,...N},slot:K,defaultTag:qi,name:"RadioGroup.Option"})))}lt.Option=zi;lt.Label=nt;lt.Description=me;var $t=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);$t.displayName="GroupContext";var tl=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function ol(e){let[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[o,n]=Ae(),[i,a]=re(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({switch:t,setSwitch:r,labelledby:o,describedby:i}),[t,r,o,i]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a,{name:"Switch.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(n,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement($t.Provider,{value:l},E({props:e,defaultTag:tl,name:"Switch.Group"}))))}var rl="button";function Qt(e){let{checked:t,onChange:r,...o}=e,n=`headlessui-switch-${A()}`,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($t),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=I(a,i===null?null:i.setSwitch),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>r(!t),[r,t]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y=>{if(G(y.currentTarget))return y.preventDefault();y.preventDefault(),s()},[s]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y=>{y.key!=="Tab"&&y.preventDefault(),y.key===" "&&s()},[s]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y=>y.preventDefault(),[]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:t}),[t]),T={id:n,ref:l,role:"switch",type:U(e,a),tabIndex:0,"aria-checked":t,"aria-labelledby":i==null?void 0:i.labelledby,"aria-describedby":i==null?void 0:i.describedby,onClick:u,onKeyUp:c,onKeyPress:m};return E({props:{...o,...T},slot:b,defaultTag:rl,name:"Switch"})}Qt.Group=ol;Qt.Label=nt;Qt.Description=me;var ul={[0](e,t){return e.selectedIndex===t.index?e:{...e,selectedIndex:t.index}},[1](e,t){return e.orientation===t.orientation?e:{...e,orientation:t.orientation}},[2](e,t){return e.activation===t.activation?e:{...e,activation:t.activation}},[3](e,t){return e.tabs.includes(t.tab)?e:{...e,tabs:[...e.tabs,t.tab]}},[4](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[5](e,t){return e.panels.includes(t.panel)?e:{...e,panels:[...e.panels,t.panel]}},[6](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}},[7](e){return{...e}}},zt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);zt.displayName="TabsContext";function Le(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(zt);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Le),r}return t}function pl(e,t){return S(t.type,ul,e,t)}var dl=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function cl(e){let{defaultIndex:t=0,vertical:r=!1,manual:o=!1,onChange:n,selectedIndex:i=null,...a}=e,l=r?"vertical":"horizontal",s=o?"manual":"auto",[u,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(pl,{selectedIndex:null,tabs:[],panels:[],orientation:l,activation:s}),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(()=>{});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{c({type:1,orientation:l})},[l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{c({type:2,activation:s})},[s]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{typeof n=="function"&&(b.current=n)},[n]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(u.tabs.length<=0||i===null&&u.selectedIndex!==null)return;let p=u.tabs.map(P=>P.current).filter(Boolean),f=p.filter(P=>!P.hasAttribute("disabled")),d=i!=null?i:t;if(d<0)c({type:0,index:p.indexOf(f[0])});else if(d>u.tabs.length)c({type:0,index:p.indexOf(f[f.length-1])});else{let P=p.slice(0,d),R=[...p.slice(d),...P].find(g=>f.includes(g));if(!R)return;c({type:0,index:p.indexOf(R)})}},[t,i,u.tabs,u.selectedIndex]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(u.selectedIndex);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{T.current=u.selectedIndex},[u.selectedIndex]);let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[u,{dispatch:c,change(p){T.current!==p&&b.current(p),T.current=p,c({type:0,index:p})}}],[u,c]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(zt.Provider,{value:y},E({props:{...a},slot:m,defaultTag:dl,name:"Tabs"}))}var fl="div";function ml(e){let[{selectedIndex:t,orientation:r}]=Le("Tab.List"),o={selectedIndex:t};return E({props:{...e,...{role:"tablist","aria-orientation":r}},slot:o,defaultTag:fl,name:"Tabs.List"})}var bl="button";function De(e){var C,R;let t=`headlessui-tabs-tab-${A()}`,[{selectedIndex:r,tabs:o,panels:n,orientation:i,activation:a},{dispatch:l,change:s}]=Le(De.name),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=I(u,g=>{!g||l({type:7})});x(()=>(l({type:3,tab:u}),()=>l({type:4,tab:u})),[l,u]);let m=o.indexOf(u),b=m===r,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{let v=o.map(h=>h.current).filter(Boolean);if(g.key===" "||g.key==="Enter"){g.preventDefault(),g.stopPropagation(),s(m);return}switch(g.key){case"Home":case"PageUp":return g.preventDefault(),g.stopPropagation(),M(v,1);case"End":case"PageDown":return g.preventDefault(),g.stopPropagation(),M(v,8)}return S(i,{vertical(){if(g.key==="ArrowUp")return M(v,2|16);if(g.key==="ArrowDown")return M(v,4|16)},horizontal(){if(g.key==="ArrowLeft")return M(v,2|16);if(g.key==="ArrowRight")return M(v,4|16)}})},[o,i,m,s]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var g;(g=u.current)==null||g.focus()},[u]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var g;(g=u.current)==null||g.focus(),s(m)},[s,m,u]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:b}),[b]),d={ref:c,onKeyDown:T,onFocus:a==="manual"?y:p,onClick:p,id:t,role:"tab",type:U(e,u),"aria-controls":(R=(C=n[m])==null?void 0:C.current)==null?void 0:R.id,"aria-selected":b,tabIndex:b?0:-1};return E({props:{...e,...d},slot:f,defaultTag:bl,name:"Tabs.Tab"})}var Tl="div";function yl(e){let[{selectedIndex:t}]=Le("Tab.Panels"),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:t}),[t]);return E({props:e,slot:r,defaultTag:Tl,name:"Tabs.Panels"})}var gl="div",Pl=1|2;function xl(e){var T,y;let[{selectedIndex:t,tabs:r,panels:o},{dispatch:n}]=Le("Tab.Panel"),i=`headlessui-tabs-panel-${A()}`,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=I(a,p=>{!p||n({type:7})});x(()=>(n({type:5,panel:a}),()=>n({type:6,panel:a})),[n,a]);let s=o.indexOf(a),u=s===t,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:u}),[u]),m={ref:l,id:i,role:"tabpanel","aria-labelledby":(y=(T=r[s])==null?void 0:T.current)==null?void 0:y.id,tabIndex:u?0:-1};return E({props:{...e,...m},slot:c,defaultTag:gl,features:Pl,visible:u,name:"Tabs.Panel"})}De.Group=cl;De.List=ml;De.Panels=yl;De.Panel=xl;function Bo(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e.current=!1},[]),e.current}function No(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Yt(e,...t){e&&t.length>0&&e.classList.add(...t)}function ut(e,...t){e&&t.length>0&&e.classList.remove(...t)}function El(e,t){let r=k();if(!e)return r.dispose;let{transitionDuration:o,transitionDelay:n}=getComputedStyle(e),[i,a]=[o,n].map(l=>{let[s=0]=l.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return s});return i!==0?r.setTimeout(()=>{t("finished")},i+a):t("finished"),r.add(()=>t("cancelled")),r.dispose}function Xt(e,t,r,o,n,i){let a=k(),l=i!==void 0?No(i):()=>{};return ut(e,...n),Yt(e,...t,...r),a.nextFrame(()=>{ut(e,...r),Yt(e,...o),a.add(El(e,s=>(ut(e,...o,...t),Yt(e,...n),l(s))))}),a.add(()=>ut(e,...t,...r,...o,...n)),a.add(()=>l("cancelled")),a.dispose}function le(e=""){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>e.split(" ").filter(t=>t.trim().length>1),[e])}var dt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);dt.displayName="TransitionContext";function Cl(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dt);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Sl(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ct);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}var ct=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ct.displayName="NestingContext";function ft(e){return"children"in e?ft(e.children):e.current.filter(({state:t})=>t==="visible").length>0}function $o(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),o=Be();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e},[e]);let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((a,l=1)=>{var u;let s=r.current.findIndex(({id:c})=>c===a);s!==-1&&(S(l,{[0](){r.current.splice(s,1)},[1](){r.current[s].state="hidden"}}),!ft(r)&&o.current&&((u=t.current)==null||u.call(t)))},[t,o,r]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(a=>{let l=r.current.find(({id:s})=>s===a);return l?l.state!=="visible"&&(l.state="visible"):r.current.push({id:a,state:"visible"}),()=>n(a,0)},[r,n]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:r,register:i,unregister:n}),[i,n,r])}function Al(){}var hl=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Qo(e){var r;let t={};for(let o of hl)t[o]=(r=e[o])!=null?r:Al;return t}function Ol(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Qo(e));return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=Qo(e)},[e]),t}var Il="div",qo=1;function zo(e){let{beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:n,enter:i,enterFrom:a,enterTo:l,entered:s,leave:u,leaveFrom:c,leaveTo:m,...b}=e,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[y,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("visible"),f=b.unmount?0:1,{show:d,appear:P,initial:C}=Cl(),{register:R,unregister:g}=Sl(),v=A(),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),O=$o(()=>{h.current||(p("hidden"),g(v),X.current.afterLeave())});x(()=>{if(!!v)return R(v)},[R,v]),x(()=>{if(f===1&&!!v){if(d&&y!=="visible"){p("visible");return}S(y,{hidden:()=>g(v),visible:()=>R(v)})}},[y,v,R,g,d,f]);let L=le(i),N=le(a),K=le(l),V=le(s),Fe=le(u),ge=le(c),we=le(m),X=Ol({beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:n}),F=q();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(F&&y==="visible"&&T.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[T,y,F]);let $=C&&!P;x(()=>{let bt=T.current;if(!!bt&&!$)return h.current=!0,d&&X.current.beforeEnter(),d||X.current.beforeLeave(),d?Xt(bt,L,N,K,V,Tt=>{h.current=!1,Tt==="finished"&&X.current.afterEnter()}):Xt(bt,Fe,ge,we,V,Tt=>{h.current=!1,Tt==="finished"&&(ft(O)||(p("hidden"),g(v),X.current.afterLeave()))})},[X,v,h,g,O,T,$,d,L,N,K,Fe,ge,we]);let H={ref:T},Pe=b;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ct.Provider,{value:O},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(y,{visible:0,hidden:1})},E({props:{...Pe,...H},defaultTag:Il,features:qo,visible:y==="visible",name:"Transition.Child"})))}function mt(e){let{show:t,appear:r=!1,unmount:o,...n}=e,i=_();if(t===void 0&&i!==null&&(t=S(i,{[0]:!0,[1]:!1})),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[a,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t?"visible":"hidden"),s=$o(()=>{l("hidden")}),u=Bo(),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:t,appear:r||!u,initial:u}),[t,r,u]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t?l("visible"):ft(s)||l("hidden")},[t,s]);let m={unmount:o};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ct.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(dt.Provider,{value:c},E({props:{...m,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(zo,{...m,...n})},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:qo,visible:a==="visible",name:"Transition"})))}mt.Child=function(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dt)!==null,o=_()!==null;return!r&&o?react__WEBPACK_IMPORTED_MODULE_0__.createElement(mt,{...t}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(zo,{...t})};mt.Root=mt;


/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CakeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CakeIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CakeIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CakeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyDollarIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CurrencyDollarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/GiftIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GiftIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GiftIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(GiftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/HomeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HomeIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HomeIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HomeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MenuIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TagIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TagIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TagIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TagIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserCircleIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UserIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UsersIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UsersIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UsersIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UsersIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/XIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckCircleIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExclamationIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ExclamationIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InformationCircleIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(InformationCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XCircleIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XCircleIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XIcon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XIcon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);