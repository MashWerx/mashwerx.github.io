/*! For license information please see 49.a6ca57b9.chunk.js.LICENSE.txt */
(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[49],{102:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},m=function(e){var t=e.className,n=e.listClassName,r=e.cssModule,o=e.children,c=e.tag,l=e.listTag,p=e["aria-label"],m=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(d.mapToCssModules)(u()(t),r),b=Object(d.mapToCssModules)(u()("breadcrumb",n),r);return i.a.createElement(c,Object(a.a)({},m,{className:f,"aria-label":p}),i.a.createElement(l,{className:b},o))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},103:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.active,o=e.tag,c=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(d.mapToCssModules)(u()(t,!!r&&"active","breadcrumb-item"),n);return i.a.createElement(o,Object(a.a)({},c,{className:l,"aria-current":r?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},153:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.row,o=e.disabled,c=e.check,l=e.inline,p=e.tag,m=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.mapToCssModules)(u()(t,!!r&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!o)&&"disabled"),n);return"fieldset"===p&&(m.disabled=o),i.a.createElement(p,Object(a.a)({},m,{className:f}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},158:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:d.tagPropType,listTag:d.tagPropType,"aria-label":c.a.string},m=function(e){var t,n=e.className,r=e.listClassName,o=e.cssModule,c=e.size,l=e.tag,p=e.listTag,m=e["aria-label"],f=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(d.mapToCssModules)(u()(n),o),h=Object(d.mapToCssModules)(u()(r,"pagination",((t={})["pagination-"+c]=!!c,t)),o);return i.a.createElement(l,{className:b,"aria-label":m},i.a.createElement(p,Object(a.a)({},f,{className:h})))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=m},159:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:d.tagPropType},m=function(e){var t=e.active,n=e.className,r=e.cssModule,o=e.disabled,c=e.tag,l=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),p=Object(d.mapToCssModules)(u()(n,"page-item",{active:t,disabled:o}),r);return i.a.createElement(c,Object(a.a)({},l,{className:p}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},160:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:d.tagPropType},m=function(e){var t,n=e.className,r=e.cssModule,o=e.next,c=e.previous,l=e.first,p=e.last,m=e.tag,f=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(d.mapToCssModules)(u()(n,"page-link"),r);c?t="Previous":o?t="Next":l?t="First":p&&(t="Last");var h,j=e["aria-label"]||t;c?h="\u2039":o?h="\u203a":l?h="\xab":p&&(h="\xbb");var g=e.children;return g&&Array.isArray(g)&&0===g.length&&(g=null),f.href||"a"!==m||(m="button"),(c||o||l||p)&&(g=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},g||h),i.a.createElement("span",{className:"sr-only",key:"sr"},j)]),i.a.createElement(m,Object(a.a)({},f,{className:b,"aria-label":j}),g)};m.propTypes=p,m.defaultProps={tag:"a"},t.a=m},43:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var i=s.apply(null,a);i&&e.push(i)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},436:function(e,t,n){"use strict";t.a=n.p+"static/media/Circleci.ce330ee2.svg"},44:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return o})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return p})),n.d(t,"omit",(function(){return m})),n.d(t,"pick",(function(){return f})),n.d(t,"warnOnce",(function(){return h})),n.d(t,"deprecated",(function(){return j})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return y})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return x})),n.d(t,"TransitionPropTypeKeys",(function(){return N})),n.d(t,"TransitionStatuses",(function(){return w})),n.d(t,"keyCodes",(function(){return M})),n.d(t,"PopperPlacements",(function(){return T})),n.d(t,"canUseDOM",(function(){return E})),n.d(t,"isReactRefObj",(function(){return C})),n.d(t,"toNumber",(function(){return P})),n.d(t,"isObject",(function(){return S})),n.d(t,"isFunction",(function(){return A})),n.d(t,"findDOMElements",(function(){return I})),n.d(t,"isArrayOrNodeList",(function(){return R})),n.d(t,"getTarget",(function(){return D})),n.d(t,"defaultToggleEvents",(function(){return L})),n.d(t,"addMultipleEventListeners",(function(){return F})),n.d(t,"focusableElements",(function(){return $}));var a,s=n(7),r=n.n(s);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function o(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&o(n+e)}function d(e){a=e}function p(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function m(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function f(e,t){for(var n,a=Array.isArray(t)?t:[t],s=a.length,r={};s>0;)r[n=a[s-=1]]=e[n];return r}var b={};function h(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function j(e,t){return function(n,a,s){null!==n[a]&&"undefined"!==typeof n[a]&&h('"'+a+'" property of "'+s+'" has been deprecated.\n'+t);for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];return e.apply(void 0,[n,a,s].concat(i))}}var g="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof g))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var y=r.a.oneOfType([r.a.string,r.a.func,v,r.a.shape({current:r.a.any})]),O=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},M={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],E=!("undefined"===typeof window||!window.document||!window.document.createElement);function C(e){return!(!e||"object"!==typeof e)&&"current"in e}function k(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===k(e))return NaN;if(S(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=S(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function S(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!S(e))return!1;var t=k(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function I(e){if(C(e))return e.current;if(A(e))return e();if("string"===typeof e&&E){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function R(e){return null!==e&&(Array.isArray(e)||E&&"number"===typeof e.length)}function D(e,t){var n=I(e);return t?R(n)?n:null===n?[]:[n]:R(n)?n[0]:n}var L=["touchstart","click"];function F(e,t,n,a){var s=e;R(s)||(s=[s]);var r=n;if("string"===typeof r&&(r=r.split(/\s+/)),!R(s)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(s,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(s,(function(n){n.removeEventListener(e,t,a)}))}))}}var $=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},46:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},460:function(e,t,n){"use strict";t.a=n.p+"static/media/Discord.59a3ca55.svg"},461:function(e,t,n){"use strict";t.a=n.p+"static/media/Eslint.3d0e408a.svg"},462:function(e,t,n){"use strict";t.a=n.p+"static/media/Gitlab.dd87947f.svg"},472:function(e,t,n){"use strict";t.a=n.p+"static/media/Mg.295fca81.svg"},473:function(e,t,n){"use strict";t.a=n.p+"static/media/Twilio.d681833a.svg"},474:function(e,t,n){"use strict";t.a=n.p+"static/media/Udemy.3666668c.svg"},475:function(e,t,n){"use strict";t.a=n.p+"static/media/Webhooks.7a0c5aba.svg"},62:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,n=e.cssModule,r=e.color,o=e.body,c=e.inverse,l=e.outline,p=e.tag,m=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(u()(t,"card",!!c&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),n);return i.a.createElement(p,Object(a.a)({},f,{className:b,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},74:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.fluid,o=e.tag,c=Object(s.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===r?l="container-fluid":r&&(l="container-"+r);var p=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(o,Object(a.a)({},c,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},75:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,o=e.tag,c=e.form,l=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(t,n){var a=e[t];if(delete p[t],a){var s=!n;m.push(s?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var f=Object(d.mapToCssModules)(u()(t,r?"no-gutters":null,c?"form-row":"row",m),n);return i.a.createElement(o,Object(a.a)({},p,{className:f}))};b.propTypes=m,b.defaultProps=f,t.a=b},76:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(0),i=n.n(r),o=n(7),c=n.n(o),l=n(43),u=n.n(l),d=n(44),p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),f={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,r=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var s=e[t];if(delete c[t],s||""===s){var r=!a;if(Object(d.isObject)(s)){var i,o=r?"-":"-"+t+"-",p=h(r,t,s.size);l.push(Object(d.mapToCssModules)(u()(((i={})[p]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i)),n))}else{var m=h(r,t,s);l.push(m)}}})),l.length||l.push("col");var p=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(o,Object(a.a)({},c,{className:p}))};j.propTypes=f,j.defaultProps=b,t.a=j},796:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(10),r=n(12),i=n(11),o=n(0),c=n.n(o),l=n(13),u=n(74),d=n(75),p=n(76),m=n(93),f=n(153),b=n(62),h=n(158),j=n(159),g=n(160),v=n(84),y=n(436),O=n(472),x=n(473),N=n(474),w=n(475),M=n(460),T=n(461),E=n(462),C=n(1),k=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},s.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Page",link:"#"},{id:3,name:"CAREERS",link:"#"},{id:4,name:"COMPANIES"}],companydetails:[{id:1,img:y.a,title:"CircleCi",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:2,img:O.a,title:"Mg",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:3,img:x.a,title:"Twilio",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:4,img:N.a,title:"Udemy",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:5,img:w.a,title:"Webhooks",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:6,img:M.a,title:"Discord",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:7,img:T.a,title:"Eslint",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"},{id:8,img:E.a,title:"Gitlab",subtitle:"Internet Services",heading:"Company Details :",location:"San Francisco",company:" circleci.com",revenue:" $ 5M / Annual",employees:"200"}]},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(C.jsxs)(c.a.Fragment,{children:[Object(C.jsx)(v.a,{title:"All Companies",pathItems:this.state.pathItems}),Object(C.jsx)("div",{className:"position-relative",children:Object(C.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(C.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(C.jsx)("section",{className:"section",children:Object(C.jsxs)(u.a,{children:[Object(C.jsxs)(d.a,{className:"align-items-center",children:[Object(C.jsx)(p.a,{lg:9,md:8,children:Object(C.jsx)("div",{className:"section-title",children:Object(C.jsx)("h6",{className:"mb-0",children:"Showing 1 \u2013 8 of 10 results"})})}),Object(C.jsx)(p.a,{lg:3,md:4,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(C.jsx)(m.a,{className:"custom-form",children:Object(C.jsx)(f.a,{className:"mb-0",children:Object(C.jsxs)("select",{className:"form-select form-control",id:"Sortbylist-job",children:[Object(C.jsx)("option",{children:"All Companies"}),Object(C.jsx)("option",{children:"Popular"}),Object(C.jsx)("option",{children:"Newest"})]})})})})]}),Object(C.jsxs)(d.a,{children:[this.state.companydetails.map((function(e,t){return Object(C.jsx)(p.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:Object(C.jsxs)(b.a,{className:"company-list border-0 rounded shadow bg-white",children:[Object(C.jsxs)("div",{className:"text-center py-5 border-bottom",children:[Object(C.jsx)("img",{src:e.img,className:"avatar avatar-small mx-auto rounded-circle d-block mb-3",alt:""}),Object(C.jsx)(l.c,{to:"page-job-company",className:"text-dark h5 name",children:e.title}),Object(C.jsx)("p",{className:"text-muted mt-1 mb-0",children:e.subtitle})]}),Object(C.jsxs)("div",{className:"p-4",children:[Object(C.jsx)("h5",{children:e.heading}),Object(C.jsxs)("ul",{className:"list-unstyled mb-4",children:[Object(C.jsxs)("li",{className:"h6",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-map-pin fea icon-sm text-warning me-2",children:[Object(C.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),Object(C.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),Object(C.jsx)("span",{className:"text-muted",children:"Location :"})," ",e.location]}),Object(C.jsxs)("li",{className:"h6",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-link fea icon-sm text-warning me-2",children:[Object(C.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),Object(C.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),Object(C.jsx)("span",{className:"text-muted",children:"Comapny :"})," ",e.company]}),Object(C.jsxs)("li",{className:"h6",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-dollar-sign fea icon-sm text-warning me-2",children:[Object(C.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),Object(C.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),Object(C.jsx)("span",{className:"text-muted",children:"Revenue :"})," ",e.revenue]}),Object(C.jsxs)("li",{className:"h6",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-users fea icon-sm text-warning me-2",children:[Object(C.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),Object(C.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(C.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),Object(C.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Object(C.jsx)("span",{className:"text-muted",children:"No. of employees :"})," ",e.employees]})]}),Object(C.jsxs)(l.c,{to:"page-job-company",className:"btn btn-block btn-soft-primary",children:["View Detail"," ",Object(C.jsx)("i",{"data-feather":"arrow-right",className:"fea icon-sm"})]})]})]})},t)})),Object(C.jsx)(p.a,{xs:12,className:"mt-4 pt-2",children:Object(C.jsxs)(h.a,{listClassName:"justify-content-center mb-0",children:[Object(C.jsx)(j.a,{children:Object(C.jsx)(g.a,{to:"#",previous:!0,children:"Prev"})}),Object(C.jsx)(j.a,{active:!0,children:Object(C.jsx)(g.a,{to:"#",children:"1"})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(g.a,{to:"#",children:"2"})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(g.a,{to:"#",children:"3"})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(g.a,{to:"#",next:!0,children:"Next"})})]})})]})]})})]})}}]),n}(o.Component);t.default=k},84:function(e,t,n){"use strict";var a=n(9),s=n(10),r=n(12),i=n(11),o=n(0),c=n.n(o),l=n(13),u=n(74),d=n(75),p=n(76),m=n(102),f=n(103),b=n(1),h=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.pathItems.length;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(d.a,{className:"justify-content-center",children:Object(b.jsx)(p.a,{lg:"12",className:"text-center",children:Object(b.jsxs)("div",{className:"page-next-level",children:[this.props.title?Object(b.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,Object(b.jsx)("div",{className:"page-next",children:Object(b.jsx)("nav",{className:"d-inline-block",children:Object(b.jsx)(m.a,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(t,n){return t.id!==e?Object(b.jsx)(f.a,{children:Object(b.jsx)(l.c,{to:t.link,className:"text-uppercase fw-bold text-dark me-1",children:t.name})},n):Object(b.jsx)(f.a,{active:!0,"aria-current":"page",children:t.name},n)}))})})})]})})})})})})}}]),n}(o.Component);t.a=h},93:function(e,t,n){"use strict";var a=n(3),s=n(8),r=n(46),i=n(4),o=n(0),c=n.n(o),l=n(7),u=n.n(l),d=n(43),p=n.n(d),m=n(44),f={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.submit=n.submit.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.inline,i=e.tag,o=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(p()(t,!!r&&"form-inline"),n);return c.a.createElement(i,Object(a.a)({},l,{ref:o,className:u}))},t}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=49.a6ca57b9.chunk.js.map