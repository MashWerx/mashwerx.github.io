/*! For license information please see 84.a2df6150.chunk.js.LICENSE.txt */
(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[84],{237:function(e,t,a){"use strict";var n=a(3),s=a(47),i=a(8),c=a(0),r=a.n(c),l=a(7),o=a.n(l),d=a(43),u=a.n(d),m=a(44);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:m.tagPropType,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barStyle:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},p=function(e){var t=e.children,a=e.className,s=e.barClassName,c=e.cssModule,l=e.value,o=e.min,d=e.max,b=e.animated,f=e.striped,p=e.color,h=e.bar,O=e.multi,g=e.tag,x=e.style,y=e.barStyle,N=e.barAriaValueText,v=e.barAriaLabelledBy,w=Object(i.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),E=Object(m.toNumber)(l)/Object(m.toNumber)(d)*100,T=Object(m.mapToCssModules)(u()(a,"progress"),c),M={className:Object(m.mapToCssModules)(u()("progress-bar",h&&a||s,b?"progress-bar-animated":null,p?"bg-"+p:null,f||b?"progress-bar-striped":null),c),style:j(j(j({},h?x:{}),y),{},{width:E+"%"}),role:"progressbar","aria-valuenow":l,"aria-valuemin":o,"aria-valuemax":d,"aria-valuetext":N,"aria-labelledby":v,children:t};return h?r.a.createElement(g,Object(n.a)({},w,M)):r.a.createElement(g,Object(n.a)({},w,{style:x,className:T}),O?t:r.a.createElement("div",M))};p.propTypes=f,p.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},t.a=p},43:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var c=s.apply(null,n);c&&e.push(c)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var r in n)a.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},44:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return c})),a.d(t,"setScrollbarWidth",(function(){return r})),a.d(t,"isBodyOverflowing",(function(){return l})),a.d(t,"getOriginalBodyPadding",(function(){return o})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return u})),a.d(t,"mapToCssModules",(function(){return m})),a.d(t,"omit",(function(){return b})),a.d(t,"pick",(function(){return j})),a.d(t,"warnOnce",(function(){return p})),a.d(t,"deprecated",(function(){return h})),a.d(t,"DOMElement",(function(){return g})),a.d(t,"targetPropType",(function(){return x})),a.d(t,"tagPropType",(function(){return y})),a.d(t,"TransitionTimeouts",(function(){return N})),a.d(t,"TransitionPropTypeKeys",(function(){return v})),a.d(t,"TransitionStatuses",(function(){return w})),a.d(t,"keyCodes",(function(){return E})),a.d(t,"PopperPlacements",(function(){return T})),a.d(t,"canUseDOM",(function(){return M})),a.d(t,"isReactRefObj",(function(){return k})),a.d(t,"toNumber",(function(){return A})),a.d(t,"isObject",(function(){return C})),a.d(t,"isFunction",(function(){return S})),a.d(t,"findDOMElements",(function(){return L})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return B})),a.d(t,"defaultToggleEvents",(function(){return D})),a.d(t,"addMultipleEventListeners",(function(){return R})),a.d(t,"focusableElements",(function(){return F}));var n,s=a(7),i=a.n(s);function c(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function r(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=c(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;l()&&r(a+e)}function u(e){n=e}function m(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function b(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function j(e,t){for(var a,n=Array.isArray(t)?t:[t],s=n.length,i={};s>0;)i[a=n[s-=1]]=e[a];return i}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function h(e,t){return function(a,n,s){null!==a[n]&&"undefined"!==typeof a[n]&&p('"'+n+'" property of "'+s+'" has been deprecated.\n'+t);for(var i=arguments.length,c=new Array(i>3?i-3:0),r=3;r<i;r++)c[r-3]=arguments[r];return e.apply(void 0,[a,n,s].concat(c))}}var O="object"===typeof window&&window.Element||function(){};function g(e,t,a){if(!(e[t]instanceof O))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var x=i.a.oneOfType([i.a.string,i.a.func,g,i.a.shape({current:i.a.any})]),y=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),N={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function k(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function A(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(C(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=C(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!C(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function L(e){if(k(e))return e.current;if(S(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function B(e,t){var a=L(e);return t?I(a)?a:null===a?[]:[a]:I(a)?a[0]:a}var D=["touchstart","click"];function R(e,t,a,n){var s=e;I(s)||(s=[s]);var i=a;if("string"===typeof i&&(i=i.split(/\s+/)),!I(s)||"function"!==typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(s,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(s,(function(a){a.removeEventListener(e,t,n)}))}))}}var F=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},456:function(e,t,a){"use strict";t.a=a.p+"static/media/bg.7fe61454.png"},47:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},501:function(e,t,a){"use strict";t.a=a.p+"static/media/07.e3f0e9f9.jpg"},502:function(e,t,a){"use strict";t.a=a.p+"static/media/08.28396265.jpg"},53:function(e,t,a){"use strict";t.a=a.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,a){"use strict";t.a=a.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,a){"use strict";t.a=a.p+"static/media/02.7df14e12.jpg"},59:function(e,t,a){"use strict";t.a=a.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,a){"use strict";t.a=a.p+"static/media/04.35463172.jpg"},62:function(e,t,a){"use strict";var n=a(3),s=a(8),i=a(0),c=a.n(i),r=a(7),l=a.n(r),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,i=e.color,r=e.body,l=e.inverse,o=e.outline,m=e.tag,b=e.innerRef,j=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.mapToCssModules)(d()(t,"card",!!l&&"text-white",!!r&&"card-body",!!i&&(o?"border":"bg")+"-"+i),a);return c.a.createElement(m,Object(n.a)({},j,{className:f,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},68:function(e,t,a){"use strict";var n=a(3),s=a(8),i=a(0),c=a.n(i),r=a(7),l=a.n(r),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,r=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(d()(t,"card-body"),a);return c.a.createElement(r,Object(n.a)({},l,{className:o,ref:i}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},73:function(e,t,a){"use strict";t.a=a.p+"static/media/06.7365b7fa.jpg"},74:function(e,t,a){"use strict";var n=a(3),s=a(8),i=a(0),c=a.n(i),r=a(7),l=a.n(r),o=a(43),d=a.n(o),u=a(44),m={tag:u.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,i=e.fluid,r=e.tag,l=Object(s.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===i?o="container-fluid":i&&(o="container-"+i);var m=Object(u.mapToCssModules)(d()(t,o),a);return c.a.createElement(r,Object(n.a)({},l,{className:m}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},75:function(e,t,a){"use strict";var n=a(3),s=a(8),i=a(0),c=a.n(i),r=a(7),l=a.n(r),o=a(43),d=a.n(o),u=a(44),m=l.a.oneOfType([l.a.number,l.a.string]),b={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,r=e.tag,l=e.form,o=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];o.forEach((function(t,a){var n=e[t];if(delete m[t],n){var s=!a;b.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var j=Object(u.mapToCssModules)(d()(t,i?"no-gutters":null,l?"form-row":"row",b),a);return c.a.createElement(r,Object(n.a)({},m,{className:j}))};f.propTypes=b,f.defaultProps=j,t.a=f},76:function(e,t,a){"use strict";var n=a(3),s=a(8),i=a(0),c=a.n(i),r=a(7),l=a.n(r),o=a(43),d=a.n(o),u=a(44),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),j={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,i=e.widths,r=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];i.forEach((function(t,n){var s=e[t];if(delete l[t],s||""===s){var i=!n;if(Object(u.isObject)(s)){var c,r=i?"-":"-"+t+"-",m=p(i,t,s.size);o.push(Object(u.mapToCssModules)(d()(((c={})[m]=s.size||""===s.size,c["order"+r+s.order]=s.order||0===s.order,c["offset"+r+s.offset]=s.offset||0===s.offset,c)),a))}else{var b=p(i,t,s);o.push(b)}}})),o.length||o.push("col");var m=Object(u.mapToCssModules)(d()(t,o),a);return c.a.createElement(r,Object(n.a)({},l,{className:m}))};h.propTypes=j,h.defaultProps=f,t.a=h},785:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(10),i=a(12),c=a(11),r=a(0),l=a.n(r),o=a(13),d=a(74),u=a(75),m=a(76),b=a(62),j=a(68),f=a(237),p=a(18),h=a.n(p),O=a(456),g=a(54),x=a(53),y=a(55),N=a(59),v=a(60),w=a(73),E=a(501),T=a(502),M=a(1),k=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={members:[{id:1,img:x.a},{id:2,img:y.a},{id:3,img:N.a},{id:4,img:v.a},{id:5,img:g.a},{id:6,img:w.a},{id:7,img:E.a},{id:8,img:T.a}],widgets:[{id:1,icon:"uil uil-dashboard",className:"navbar-item account-menu px-0",title:"Profile",link:"/page-profile"},{id:2,icon:"uil uil-users-alt",className:"navbar-item account-menu px-0 mt-2 active",title:"Members",link:"/page-members"},{id:3,icon:"uil uil-file",className:"navbar-item account-menu px-0 mt-2",title:"Portfolio",link:"/page-works"},{id:4,icon:"uil uil-envelope-star",className:"navbar-item account-menu px-0 mt-2",title:"Messages",link:"/page-messages"},{id:5,icon:"uil uil-transaction",className:"navbar-item account-menu px-0 mt-2",title:"Payments",link:"/page-payments"},{id:6,icon:"uil uil-setting",className:"navbar-item account-menu px-0 mt-2",title:"Settings",link:"/page-profile-edit"},{id:7,icon:"uil uil-dashboard",className:"navbar-item account-menu px-0 mt-2",title:"Logout",link:"/auth-login-three"}]},e.scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("topnav").classList.add("nav-sticky"),document.getElementById("buyButton").className="btn btn-primary"):(document.getElementById("topnav").classList.remove("nav-sticky"),document.getElementById("buyButton").className="btn btn-light")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),document.getElementById("buyButton").className="btn btn-light",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(M.jsxs)(l.a.Fragment,{children:[Object(M.jsx)("section",{className:"bg-profile d-table w-100 bg-primary",style:{background:"url(".concat(O.a,") center center")},children:Object(M.jsx)(d.a,{children:Object(M.jsx)(u.a,{children:Object(M.jsx)(m.a,{lg:"12",children:Object(M.jsx)(b.a,{className:"public-profile border-0 rounded shadow",style:{zIndex:"1"},children:Object(M.jsx)(j.a,{children:Object(M.jsxs)(u.a,{className:"align-items-center",children:[Object(M.jsx)(m.a,{lg:"2",md:"3",className:"text-md-start text-center",children:Object(M.jsx)("img",{src:g.a,className:"avatar avatar-large rounded-circle shadow d-block mx-auto",alt:""})}),Object(M.jsx)(m.a,{lg:"10",md:"9",children:Object(M.jsxs)(u.a,{className:"align-items-end",children:[Object(M.jsxs)(m.a,{md:"7",className:"text-md-start text-center mt-4 mt-sm-0",children:[Object(M.jsx)("h3",{className:"title mb-0",children:"Krista Joseph"}),Object(M.jsx)("small",{className:"text-muted h6 me-2",children:"Web Developer"}),Object(M.jsxs)("ul",{className:"list-inline mb-0 mt-3",children:[Object(M.jsx)("li",{className:"list-inline-item me-2",children:Object(M.jsxs)(o.c,{to:"#",className:"text-muted",title:"Linkedin",children:[Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"instagram",className:"fea icon-sm me-2"})}),"krista_joseph"]})}),Object(M.jsx)("li",{className:"list-inline-item ms-1",children:Object(M.jsxs)(o.c,{to:"#",className:"text-muted",title:"Skype",children:[Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"linkedin",className:"fea icon-sm me-2"})}),"krista_joseph"]})})]})]}),Object(M.jsx)(m.a,{md:"5",className:"text-md-end text-center",children:Object(M.jsxs)("ul",{className:"list-unstyled social-icon social mb-0 mt-4",children:[Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"user-plus",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"message-circle",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"bell",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"/page-profile-edit",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"settings",className:"fea icon-sm fea-social"})})})})]})})]})})]})})})})})})}),Object(M.jsx)("section",{className:"section mt-60",children:Object(M.jsx)(d.a,{className:"mt-lg-3",children:Object(M.jsxs)(u.a,{children:[Object(M.jsx)(m.a,{lg:"4",md:"6",xs:"12",className:"d-lg-block d-none",children:Object(M.jsxs)("div",{className:"sidebar sticky-bar p-4 rounded shadow",children:[Object(M.jsxs)("div",{className:"widget",children:[Object(M.jsx)("h5",{className:"widget-title",children:"Followers :"}),Object(M.jsxs)("div",{className:"row mt-4",children:[Object(M.jsxs)("div",{className:"col-6 text-center",children:[Object(M.jsx)(h.a,{icon:"user-plus",className:"fea icon-ex-md text-primary mb-1"}),Object(M.jsx)("h5",{className:"mb-0",children:"2588"}),Object(M.jsx)("p",{className:"text-muted mb-0",children:"Followers"})]}),Object(M.jsxs)("div",{className:"col-6 text-center",children:[Object(M.jsx)(h.a,{icon:"users",className:"fea icon-ex-md text-primary mb-1"}),Object(M.jsx)("h5",{className:"mb-0",children:"454"}),Object(M.jsx)("p",{className:"text-muted mb-0",children:"Following"})]})]})]}),Object(M.jsxs)("div",{className:"widget mt-4 pt-2",children:[Object(M.jsx)("h5",{className:"widget-title",children:"Projects :"}),Object(M.jsxs)("div",{className:"progress-box mt-4",children:[Object(M.jsx)("h6",{className:"title text-muted",children:"Progress"}),Object(M.jsx)(f.a,{value:50,color:"primary",barClassName:"position-relative",children:Object(M.jsx)("div",{className:"progress-value d-block text-muted h6",children:"24 / 48"})})]})]}),Object(M.jsx)("div",{className:"widget mt-4",children:Object(M.jsx)("ul",{className:"list-unstyled sidebar-nav mb-0",id:"navmenu-nav",children:this.state.widgets.map((function(e,t){return Object(M.jsx)("li",{className:e.className,children:Object(M.jsxs)(o.c,{to:e.link,className:"navbar-link d-flex rounded shadow align-items-center py-2 px-4",children:[Object(M.jsx)("span",{className:"h4 mb-0",children:Object(M.jsx)("i",{className:e.icon})}),Object(M.jsx)("h6",{className:"mb-0 ms-2",children:e.title})]})},t)}))})}),Object(M.jsxs)("div",{className:"widget mt-4 pt-2",children:[Object(M.jsx)("h5",{className:"widget-title",children:"Follow me :"}),Object(M.jsxs)("ul",{className:"list-unstyled social-icon mb-0 mt-4",children:[Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"github",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"youtube",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item me-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"gitlab",className:"fea icon-sm fea-social"})})})})]})]})]})}),Object(M.jsx)(m.a,{lg:8,xs:12,children:Object(M.jsxs)("div",{className:"rounded shadow p-4",children:[Object(M.jsx)("h5",{children:"Members:"}),Object(M.jsx)(u.a,{children:this.state.members.map((function(e,t){return Object(M.jsx)(m.a,{lg:6,md:4,className:"mt-4 pt-2",children:Object(M.jsxs)("div",{className:"text-center",children:[Object(M.jsx)("img",{src:e.img,className:"avatar avatar-medium shadow-lg rounded-pill",alt:""}),Object(M.jsxs)("div",{className:"content mt-3",children:[Object(M.jsx)(o.c,{to:"#",className:"h5 text-dark",children:"Calvin Carlo"}),Object(M.jsxs)("ul",{className:"list-unstyled social-icon social mb-0 mt-2",children:[Object(M.jsx)("li",{className:"list-inline-item ms-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item ms-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item ms-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})}),Object(M.jsx)("li",{className:"list-inline-item ms-1",children:Object(M.jsx)(o.c,{to:"#",className:"rounded",children:Object(M.jsx)("i",{children:Object(M.jsx)(h.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})})]}),Object(M.jsxs)(o.c,{to:"#",className:"btn btn-primary",children:[Object(M.jsx)("i",{className:"uil uil-envelope"})," ","Send Message"]})]})]})},t)}))})]})})]})})})]})}}]),a}(r.Component);t.default=k}}]);
//# sourceMappingURL=84.a2df6150.chunk.js.map