/*! For license information please see 92.bccd63e6.chunk.js.LICENSE.txt */
(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[92],{155:function(e,t,a){"use strict";t.a=a.p+"static/media/01.3be58610.jpg"},196:function(e,t,a){"use strict";t.a=a.p+"static/media/02.697b47ef.jpg"},237:function(e,t,a){"use strict";var s=a(3),n=a(47),c=a(8),i=a(0),r=a.n(i),l=a(7),o=a.n(l),d=a(43),m=a.n(d),u=a(44);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:u.tagPropType,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barStyle:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},h=function(e){var t=e.children,a=e.className,n=e.barClassName,i=e.cssModule,l=e.value,o=e.min,d=e.max,j=e.animated,x=e.striped,h=e.color,p=e.bar,f=e.multi,O=e.tag,g=e.style,N=e.barStyle,y=e.barAriaValueText,v=e.barAriaLabelledBy,w=Object(c.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),E=Object(u.toNumber)(l)/Object(u.toNumber)(d)*100,T=Object(u.mapToCssModules)(m()(a,"progress"),i),k={className:Object(u.mapToCssModules)(m()("progress-bar",p&&a||n,j?"progress-bar-animated":null,h?"bg-"+h:null,x||j?"progress-bar-striped":null),i),style:b(b(b({},p?g:{}),N),{},{width:E+"%"}),role:"progressbar","aria-valuenow":l,"aria-valuemin":o,"aria-valuemax":d,"aria-valuetext":y,"aria-labelledby":v,children:t};return p?r.a.createElement(O,Object(s.a)({},w,k)):r.a.createElement(O,Object(s.a)({},w,{style:g,className:T}),f?t:r.a.createElement("div",k))};h.propTypes=x,h.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},t.a=h},43:function(e,t,a){var s;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var c=typeof s;if("string"===c||"number"===c)e.push(s);else if(Array.isArray(s)){if(s.length){var i=n.apply(null,s);i&&e.push(i)}}else if("object"===c)if(s.toString===Object.prototype.toString)for(var r in s)a.call(s,r)&&s[r]&&e.push(r);else e.push(s.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()},436:function(e,t,a){"use strict";t.a=a.p+"static/media/Circleci.ce330ee2.svg"},44:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return i})),a.d(t,"setScrollbarWidth",(function(){return r})),a.d(t,"isBodyOverflowing",(function(){return l})),a.d(t,"getOriginalBodyPadding",(function(){return o})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return m})),a.d(t,"mapToCssModules",(function(){return u})),a.d(t,"omit",(function(){return j})),a.d(t,"pick",(function(){return b})),a.d(t,"warnOnce",(function(){return h})),a.d(t,"deprecated",(function(){return p})),a.d(t,"DOMElement",(function(){return O})),a.d(t,"targetPropType",(function(){return g})),a.d(t,"tagPropType",(function(){return N})),a.d(t,"TransitionTimeouts",(function(){return y})),a.d(t,"TransitionPropTypeKeys",(function(){return v})),a.d(t,"TransitionStatuses",(function(){return w})),a.d(t,"keyCodes",(function(){return E})),a.d(t,"PopperPlacements",(function(){return T})),a.d(t,"canUseDOM",(function(){return k})),a.d(t,"isReactRefObj",(function(){return M})),a.d(t,"toNumber",(function(){return C})),a.d(t,"isObject",(function(){return A})),a.d(t,"isFunction",(function(){return S})),a.d(t,"findDOMElements",(function(){return D})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return L})),a.d(t,"defaultToggleEvents",(function(){return B})),a.d(t,"addMultipleEventListeners",(function(){return R})),a.d(t,"focusableElements",(function(){return W}));var s,n=a(7),c=a.n(n);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function r(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;l()&&r(a+e)}function m(e){s=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=s),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function j(e,t){var a={};return Object.keys(e).forEach((function(s){-1===t.indexOf(s)&&(a[s]=e[s])})),a}function b(e,t){for(var a,s=Array.isArray(t)?t:[t],n=s.length,c={};n>0;)c[a=s[n-=1]]=e[a];return c}var x={};function h(e){x[e]||("undefined"!==typeof console&&console.error(e),x[e]=!0)}function p(e,t){return function(a,s,n){null!==a[s]&&"undefined"!==typeof a[s]&&h('"'+s+'" property of "'+n+'" has been deprecated.\n'+t);for(var c=arguments.length,i=new Array(c>3?c-3:0),r=3;r<c;r++)i[r-3]=arguments[r];return e.apply(void 0,[a,s,n].concat(i))}}var f="object"===typeof window&&window.Element||function(){};function O(e,t,a){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var g=c.a.oneOfType([c.a.string,c.a.func,O,c.a.shape({current:c.a.any})]),N=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function C(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(A(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=A(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var s=/^0b[01]+$/i.test(e);return s||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),s?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!A(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(M(e))return e.current;if(S(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function L(e,t){var a=D(e);return t?I(a)?a:null===a?[]:[a]:I(a)?a[0]:a}var B=["touchstart","click"];function R(e,t,a,s){var n=e;I(n)||(n=[n]);var c=a;if("string"===typeof c&&(c=c.split(/\s+/)),!I(n)||"function"!==typeof t||!Array.isArray(c))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(c,(function(e){Array.prototype.forEach.call(n,(function(a){a.addEventListener(e,t,s)}))})),function(){Array.prototype.forEach.call(c,(function(e){Array.prototype.forEach.call(n,(function(a){a.removeEventListener(e,t,s)}))}))}}var W=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},452:function(e,t,a){"use strict";t.a=a.p+"static/media/Codepen.12d9c194.svg"},456:function(e,t,a){"use strict";t.a=a.p+"static/media/bg.7fe61454.png"},462:function(e,t,a){"use strict";t.a=a.p+"static/media/Gitlab.dd87947f.svg"},47:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return s}))},54:function(e,t,a){"use strict";t.a=a.p+"static/media/05.a7ab2c82.jpg"},62:function(e,t,a){"use strict";var s=a(3),n=a(8),c=a(0),i=a.n(c),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u={tag:m.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},j=function(e){var t=e.className,a=e.cssModule,c=e.color,r=e.body,l=e.inverse,o=e.outline,u=e.tag,j=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),x=Object(m.mapToCssModules)(d()(t,"card",!!l&&"text-white",!!r&&"card-body",!!c&&(o?"border":"bg")+"-"+c),a);return i.a.createElement(u,Object(s.a)({},b,{className:x,ref:j}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j},68:function(e,t,a){"use strict";var s=a(3),n=a(8),c=a(0),i=a.n(c),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u={tag:m.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},j=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,r=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.mapToCssModules)(d()(t,"card-body"),a);return i.a.createElement(r,Object(s.a)({},l,{className:o,ref:c}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j},74:function(e,t,a){"use strict";var s=a(3),n=a(8),c=a(0),i=a.n(c),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u={tag:m.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,c=e.fluid,r=e.tag,l=Object(n.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===c?o="container-fluid":c&&(o="container-"+c);var u=Object(m.mapToCssModules)(d()(t,o),a);return i.a.createElement(r,Object(s.a)({},l,{className:u}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j},75:function(e,t,a){"use strict";var s=a(3),n=a(8),c=a(0),i=a.n(c),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u=l.a.oneOfType([l.a.number,l.a.string]),j={tag:m.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},b={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e){var t=e.className,a=e.cssModule,c=e.noGutters,r=e.tag,l=e.form,o=e.widths,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];o.forEach((function(t,a){var s=e[t];if(delete u[t],s){var n=!a;j.push(n?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var b=Object(m.mapToCssModules)(d()(t,c?"no-gutters":null,l?"form-row":"row",j),a);return i.a.createElement(r,Object(s.a)({},u,{className:b}))};x.propTypes=j,x.defaultProps=b,t.a=x},76:function(e,t,a){"use strict";var s=a(3),n=a(8),c=a(0),i=a.n(c),r=a(7),l=a.n(r),o=a(43),d=a.n(o),m=a(44),u=l.a.oneOfType([l.a.number,l.a.string]),j=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),b={tag:m.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:l.a.string,cssModule:l.a.object,widths:l.a.array},x={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},p=function(e){var t=e.className,a=e.cssModule,c=e.widths,r=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];c.forEach((function(t,s){var n=e[t];if(delete l[t],n||""===n){var c=!s;if(Object(m.isObject)(n)){var i,r=c?"-":"-"+t+"-",u=h(c,t,n.size);o.push(Object(m.mapToCssModules)(d()(((i={})[u]=n.size||""===n.size,i["order"+r+n.order]=n.order||0===n.order,i["offset"+r+n.offset]=n.offset||0===n.offset,i)),a))}else{var j=h(c,t,n);o.push(j)}}})),o.length||o.push("col");var u=Object(m.mapToCssModules)(d()(t,o),a);return i.a.createElement(r,Object(s.a)({},l,{className:u}))};p.propTypes=b,p.defaultProps=x,t.a=p},791:function(e,t,a){"use strict";a.r(t);var s=a(9),n=a(10),c=a(12),i=a(11),r=a(0),l=a.n(r),o=a(13),d=a(74),m=a(75),u=a(76),j=a(62),b=a(68),x=a(237),h=a(18),p=a.n(h),f=a(456),O=a(54),g=a(155),N=a(196),y=a(436),v=a(452),w=a(462),E=a(1),T=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={blogs:[{id:1,title:"Design your apps in your own way",image:g.a,likes:"33",blogComments:"08",author:"Krishta Joseph",date:"13th August, 2019"},{id:2,title:"How apps is changing the IT world",image:N.a,likes:"33",blogComments:"08",author:"Krishta Joseph",date:"13th August, 2019"}],experiences:[{id:1,image:y.a,designation:"Senior Web Developer",duration:"3 Years",companyName:"CircleCi",location:"London, UK"},{id:2,image:v.a,designation:"Web Designer",duration:"2 Years",companyName:"Codepen",location:"Washington D.C, USA"},{id:3,image:w.a,designation:"UI Designer",duration:"2 Years",companyName:"Gitlab",location:"Perth, Australia"}],widgets:[{id:1,icon:"uil uil-dashboard",className:"navbar-item account-menu px-0 active",title:"Profile",link:"/page-profile"},{id:2,icon:"uil uil-users-alt",className:"navbar-item account-menu px-0 mt-2",title:"Members",link:"/page-members"},{id:3,icon:"uil uil-file",className:"navbar-item account-menu px-0 mt-2",title:"Portfolio",link:"/page-works"},{id:4,icon:"uil uil-envelope-star",className:"navbar-item account-menu px-0 mt-2",title:"Messages",link:"/page-messages"},{id:5,icon:"uil uil-transaction",className:"navbar-item account-menu px-0 mt-2",title:"Payments",link:"/page-payments"},{id:6,icon:"uil uil-setting",className:"navbar-item account-menu px-0 mt-2",title:"Settings",link:"/page-profile-edit"},{id:7,icon:"uil uil-dashboard",className:"navbar-item account-menu px-0 mt-2",title:"Logout",link:"/auth-login-three"}]},e.scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("topnav").classList.add("nav-sticky"),document.getElementById("buyButton").className="btn btn-primary"):(document.getElementById("topnav").classList.remove("nav-sticky"),document.getElementById("buyButton").className="btn btn-light")},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),document.getElementById("buyButton").className="btn btn-light",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(E.jsxs)(l.a.Fragment,{children:[Object(E.jsx)("section",{className:"bg-profile d-table w-100 bg-primary",style:{background:"url(".concat(f.a,") center center")},children:Object(E.jsx)(d.a,{children:Object(E.jsx)(m.a,{children:Object(E.jsx)(u.a,{lg:"12",children:Object(E.jsx)(j.a,{className:"public-profile border-0 rounded shadow",style:{zIndex:"1"},children:Object(E.jsx)(b.a,{children:Object(E.jsxs)(m.a,{className:"align-items-center",children:[Object(E.jsx)(u.a,{lg:"2",md:"3",className:"text-md-start text-center",children:Object(E.jsx)("img",{src:O.a,className:"avatar avatar-large rounded-circle shadow d-block mx-auto",alt:""})}),Object(E.jsx)(u.a,{lg:"10",md:"9",children:Object(E.jsxs)(m.a,{className:"align-items-end",children:[Object(E.jsxs)(u.a,{md:"7",className:"text-md-start text-center mt-4 mt-sm-0",children:[Object(E.jsx)("h3",{className:"title mb-0",children:"Krista Joseph"}),Object(E.jsx)("small",{className:"text-muted h6 me-2",children:"Web Developer"}),Object(E.jsxs)("ul",{className:"list-inline mb-0 mt-3",children:[Object(E.jsx)("li",{className:"list-inline-item me-2",children:Object(E.jsxs)(o.c,{to:"#",className:"text-muted",title:"Linkedin",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"instagram",className:"fea icon-sm me-2"})}),"krista_joseph"]})}),Object(E.jsx)("li",{className:"list-inline-item ms-1",children:Object(E.jsxs)(o.c,{to:"#",className:"text-muted",title:"Skype",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"linkedin",className:"fea icon-sm me-2"})}),"krista_joseph"]})})]})]}),Object(E.jsx)(u.a,{md:"5",className:"text-md-end text-center",children:Object(E.jsxs)("ul",{className:"list-unstyled social-icon social mb-0 mt-4",children:[Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{className:"uil uil-user-plus align-middle"})})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{className:"uil uil-comment align-middle"})})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{className:"uil uil-bell align-middle"})})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"/page-profile-edit",className:"rounded",children:Object(E.jsx)("i",{className:"uil uil-cog align-middle"})})})]})})]})})]})})})})})})}),Object(E.jsx)("section",{className:"section mt-60",children:Object(E.jsx)(d.a,{className:"mt-lg-3",children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(u.a,{lg:"4",md:"6",xs:"12",className:"d-lg-block d-none",children:Object(E.jsxs)("div",{className:"sidebar sticky-bar p-4 rounded shadow",children:[Object(E.jsxs)("div",{className:"widget",children:[Object(E.jsx)("h5",{className:"widget-title",children:"Followers :"}),Object(E.jsxs)("div",{className:"row mt-4",children:[Object(E.jsxs)("div",{className:"col-6 text-center",children:[Object(E.jsx)(p.a,{icon:"user-plus",className:"fea icon-ex-md text-primary mb-1"}),Object(E.jsx)("h5",{className:"mb-0",children:"2588"}),Object(E.jsx)("p",{className:"text-muted mb-0",children:"Followers"})]}),Object(E.jsxs)("div",{className:"col-6 text-center",children:[Object(E.jsx)(p.a,{icon:"users",className:"fea icon-ex-md text-primary mb-1"}),Object(E.jsx)("h5",{className:"mb-0",children:"454"}),Object(E.jsx)("p",{className:"text-muted mb-0",children:"Following"})]})]})]}),Object(E.jsxs)("div",{className:"widget mt-4 pt-2",children:[Object(E.jsx)("h5",{className:"widget-title",children:"Projects :"}),Object(E.jsxs)("div",{className:"progress-box mt-4",children:[Object(E.jsx)("h6",{className:"title text-muted",children:"Progress"}),Object(E.jsx)(x.a,{value:50,color:"primary",barClassName:"position-relative",children:Object(E.jsx)("div",{className:"progress-value d-block text-muted h6",children:"24 / 48"})})]})]}),Object(E.jsx)("div",{className:"widget mt-4",children:Object(E.jsx)("ul",{className:"list-unstyled sidebar-nav mb-0",id:"navmenu-nav",children:this.state.widgets.map((function(e,t){return Object(E.jsx)("li",{className:e.className,children:Object(E.jsxs)(o.c,{to:e.link,className:"navbar-link d-flex rounded shadow align-items-center py-2 px-4",children:[Object(E.jsx)("span",{className:"h4 mb-0",children:Object(E.jsx)("i",{className:e.icon})}),Object(E.jsx)("h6",{className:"mb-0 ms-2",children:e.title})]})},t)}))})}),Object(E.jsxs)("div",{className:"widget mt-4 pt-2",children:[Object(E.jsx)("h5",{className:"widget-title",children:"Follow me :"}),Object(E.jsxs)("ul",{className:"list-unstyled social-icon mb-0 mt-4",children:[Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"github",className:"fea icon-sm fea-social"})})})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"youtube",className:"fea icon-sm fea-social"})})})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(o.c,{to:"#",className:"rounded",children:Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"gitlab",className:"fea icon-sm fea-social"})})})})]})]})]})}),Object(E.jsxs)(u.a,{lg:"8",md:"7",xs:"12",children:[Object(E.jsxs)("div",{className:"border-bottom pb-4",children:[Object(E.jsx)("h5",{children:"Krista Joseph"}),Object(E.jsx)("p",{className:"text-muted mb-0",children:"I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager."})]}),Object(E.jsx)("div",{className:"border-bottom pb-4",children:Object(E.jsxs)(m.a,{children:[Object(E.jsxs)(u.a,{md:"6",className:"mt-4",children:[Object(E.jsx)("h5",{children:"Personal Details :"}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsxs)("div",{className:"d-flex align-items-center",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"mail",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Email :"}),Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"kristajoseph0203@mail.com"})]})]}),Object(E.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"bookmark",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Skills :"}),Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"html"}),","," ",Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"css"}),","," ",Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"js"}),","," ",Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"mysql"})]})]}),Object(E.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"italic",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Language :"}),Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"English"}),","," ",Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"Japanese"}),","," ",Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"Chinese"})]})]}),Object(E.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"globe",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Website :"}),Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"www.kristajoseph.com"})]})]}),Object(E.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"gift",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Birthday :"}),Object(E.jsx)("p",{className:"text-muted mb-0",children:"2nd March, 1996"})]})]}),Object(E.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"map-pin",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Location :"}),Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"Beijing, China"})]})]}),Object(E.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(E.jsx)("i",{children:Object(E.jsx)(p.a,{icon:"phone",className:"fea icon-ex-md text-muted me-3"})}),Object(E.jsxs)("div",{className:"flex-1",children:[Object(E.jsx)("h6",{className:"text-primary mb-0",children:"Cell No :"}),Object(E.jsx)(o.c,{to:"#",className:"text-muted",children:"(+12) 1254-56-4896"})]})]})]})]}),Object(E.jsxs)(u.a,{lg:"6",className:"mt-4 pt-2 pt-sm-0",children:[Object(E.jsx)("h5",{children:"Experience :"}),this.state.experiences.map((function(e,t){return Object(E.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow mt-4",children:[Object(E.jsx)("img",{src:e.image,className:"avatar avatar-ex-sm",alt:""}),Object(E.jsxs)("div",{className:"flex-1 content ms-3",children:[Object(E.jsx)("h4",{className:"title mb-0",children:e.designation}),Object(E.jsxs)("p",{className:"text-muted mb-0",children:[e.duration," Experience"]}),Object(E.jsxs)("p",{className:"text-muted mb-0",children:[Object(E.jsx)(o.c,{to:"#",className:"text-primary",children:e.companyName})," ","@",e.location]})]})]},t)}))]})]})}),Object(E.jsx)("h5",{className:"mt-4 mb-0",children:"Posts & News :"}),Object(E.jsxs)(m.a,{children:[this.state.blogs.map((function(e,t){return Object(E.jsx)(u.a,{lg:"6",className:"mt-4 pt-2",children:Object(E.jsxs)(j.a,{className:"blog rounded border-0 shadow",children:[Object(E.jsxs)("div",{className:"position-relative",children:[Object(E.jsx)("img",{src:e.image,className:"card-img-top rounded-top",alt:""}),Object(E.jsx)("div",{className:"overlay rounded-top bg-dark"})]}),Object(E.jsxs)(b.a,{className:"content",children:[Object(E.jsx)("h5",{children:Object(E.jsx)(o.c,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(E.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(E.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(E.jsx)("li",{className:"list-inline-item me-2 mb-0",children:Object(E.jsxs)(o.c,{to:"#",className:"text-muted like",children:[Object(E.jsx)("i",{className:"uil uil-heart me-1"}),e.likes]})})," ",Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsxs)(o.c,{to:"#",className:"text-muted comments",children:[Object(E.jsx)("i",{className:"uil uil-comment me-1"}),e.blogComments]})})]}),Object(E.jsxs)(o.c,{to:"#",className:"text-muted readmore",children:["Read More"," ",Object(E.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})]})]}),Object(E.jsxs)("div",{className:"author",children:[Object(E.jsxs)("small",{className:"text-light user d-block",children:[Object(E.jsx)("i",{className:"uil uil-user"})," ",e.author]}),Object(E.jsxs)("small",{className:"text-light date",children:[Object(E.jsx)("i",{className:"uil uil-calendar-alt"})," ",e.date]})]})]})},t)})),Object(E.jsx)(u.a,{xs:"12",className:"mt-4 pt-2",children:Object(E.jsxs)(o.c,{to:"/page-blog",className:"btn btn-primary",children:["See More ",Object(E.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})})]})]})]})})})]})}}]),a}(r.Component);t.default=T}}]);
//# sourceMappingURL=92.bccd63e6.chunk.js.map