/*! For license information please see 114.8126666e.chunk.js.LICENSE.txt */
(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[114],{110:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(0),r=s.n(c),i=s(7),l=s.n(i),o=s(43),d=s.n(o),m=s(44),u=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:u,order:u,offset:u})]),j={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:m.tagPropType,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,s){return!0===s||""===s?e?"col":"col-"+t:"auto"===s?e?"col-auto":"col-"+t+"-auto":e?"col-"+s:"col-"+t+"-"+s},p=function(e){var t=e.className,s=e.cssModule,c=e.hidden,i=e.widths,l=e.tag,o=e.check,u=e.size,b=e.for,j=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];i.forEach((function(t,a){var n=e[t];if(delete j[t],n||""===n){var c,r=!a;if(Object(m.isObject)(n)){var i,l=r?"-":"-"+t+"-";c=h(r,t,n.size),f.push(Object(m.mapToCssModules)(d()(((i={})[c]=n.size||""===n.size,i["order"+l+n.order]=n.order||0===n.order,i["offset"+l+n.offset]=n.offset||0===n.offset,i))),s)}else c=h(r,t,n),f.push(c)}}));var p=Object(m.mapToCssModules)(d()(t,!!c&&"sr-only",!!o&&"form-check-label",!!u&&"col-form-label-"+u,f,!!f.length&&"col-form-label"),s);return r.a.createElement(l,Object(a.a)({htmlFor:b},j,{className:p}))};p.propTypes=j,p.defaultProps=f,t.a=p},43:function(e,t,s){var a;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var i in a)s.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},44:function(e,t,s){"use strict";s.r(t),s.d(t,"getScrollbarWidth",(function(){return r})),s.d(t,"setScrollbarWidth",(function(){return i})),s.d(t,"isBodyOverflowing",(function(){return l})),s.d(t,"getOriginalBodyPadding",(function(){return o})),s.d(t,"conditionallyUpdateScrollbar",(function(){return d})),s.d(t,"setGlobalCssModule",(function(){return m})),s.d(t,"mapToCssModules",(function(){return u})),s.d(t,"omit",(function(){return b})),s.d(t,"pick",(function(){return j})),s.d(t,"warnOnce",(function(){return h})),s.d(t,"deprecated",(function(){return p})),s.d(t,"DOMElement",(function(){return O})),s.d(t,"targetPropType",(function(){return g})),s.d(t,"tagPropType",(function(){return N})),s.d(t,"TransitionTimeouts",(function(){return v})),s.d(t,"TransitionPropTypeKeys",(function(){return y})),s.d(t,"TransitionStatuses",(function(){return w})),s.d(t,"keyCodes",(function(){return T})),s.d(t,"PopperPlacements",(function(){return E})),s.d(t,"canUseDOM",(function(){return k})),s.d(t,"isReactRefObj",(function(){return M})),s.d(t,"toNumber",(function(){return A})),s.d(t,"isObject",(function(){return P})),s.d(t,"isFunction",(function(){return R})),s.d(t,"findDOMElements",(function(){return S})),s.d(t,"isArrayOrNodeList",(function(){return D})),s.d(t,"getTarget",(function(){return F})),s.d(t,"defaultToggleEvents",(function(){return L})),s.d(t,"addMultipleEventListeners",(function(){return z})),s.d(t,"focusableElements",(function(){return q}));var a,n=s(7),c=s.n(n);function r(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function i(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=r(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],s=t?parseInt(t.style.paddingRight||0,10):0;l()&&i(s+e)}function m(e){a=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function b(e,t){var s={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(s[a]=e[a])})),s}function j(e,t){for(var s,a=Array.isArray(t)?t:[t],n=a.length,c={};n>0;)c[s=a[n-=1]]=e[s];return c}var f={};function h(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function p(e,t){return function(s,a,n){null!==s[a]&&"undefined"!==typeof s[a]&&h('"'+a+'" property of "'+n+'" has been deprecated.\n'+t);for(var c=arguments.length,r=new Array(c>3?c-3:0),i=3;i<c;i++)r[i-3]=arguments[i];return e.apply(void 0,[s,a,n].concat(r))}}var x="object"===typeof window&&window.Element||function(){};function O(e,t,s){if(!(e[t]instanceof x))return new Error("Invalid prop `"+t+"` supplied to `"+s+"`. Expected prop to be an instance of Element. Validation failed.")}var g=c.a.oneOfType([c.a.string,c.a.func,O,c.a.shape({current:c.a.any})]),N=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},y=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},E=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function A(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(P(e)){var s="function"===typeof e.valueOf?e.valueOf():e;e=P(s)?""+s:s}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function P(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function R(e){if(!P(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function S(e){if(M(e))return e.current;if(R(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function D(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function F(e,t){var s=S(e);return t?D(s)?s:null===s?[]:[s]:D(s)?s[0]:s}var L=["touchstart","click"];function z(e,t,s,a){var n=e;D(n)||(n=[n]);var c=s;if("string"===typeof c&&(c=c.split(/\s+/)),!D(n)||"function"!==typeof t||!Array.isArray(c))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(c,(function(e){Array.prototype.forEach.call(n,(function(s){s.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(c,(function(e){Array.prototype.forEach.call(n,(function(s){s.removeEventListener(e,t,a)}))}))}}var q=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},46:function(e,t,s){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s.d(t,"a",(function(){return a}))},53:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},542:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var a=s(9),n=s(10),c=s(12),r=s(11),i=s(0),l=s.n(i),o=s(13),d=s(76),m=s(62),u=s(68),b=s(110),j=s(18),f=s.n(j),h=s(1),p=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)(d.a,{lg:4,className:"mt-4 mt-lg-0 pt-2 pt-lg-0",children:Object(h.jsx)(m.a,{className:"border-0 sidebar sticky-bar rounded shadow bg-light",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)("div",{className:"widget mb-4 pb-2",children:Object(h.jsx)("div",{className:"widget",children:Object(h.jsx)("form",{role:"search",method:"get",id:"searchform",children:Object(h.jsxs)("div",{className:"input-group mb-3 border rounded",children:[Object(h.jsx)("input",{type:"text",className:"form-control border-0",name:"s",id:"s",placeholder:"Search Keywords..."}),Object(h.jsx)("button",{type:"submit",className:"input-group-text bg-white border-0",id:"searchsubmit",children:Object(h.jsx)("i",{className:"uil uil-search"})})]})})})}),Object(h.jsxs)("div",{className:"widget mb-4 pb-2",children:[Object(h.jsx)("h5",{className:"widget-title",children:"Login"}),Object(h.jsx)("form",{className:"login-form mt-4",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(d.a,{lg:12,children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsxs)(b.a,{className:"form-label",children:["Your Email ",Object(h.jsx)("span",{className:"text-danger",children:"*"})]}),Object(h.jsxs)("div",{className:"form-icon position-relative",children:[Object(h.jsx)(f.a,{icon:"user",className:"fea icon-sm icons"}),Object(h.jsx)("input",{type:"email",className:"form-control ps-5",placeholder:"Email",name:"email",required:""})]})]})}),Object(h.jsx)(d.a,{lg:12,children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsxs)(b.a,{className:"form-label",children:["Password ",Object(h.jsx)("span",{className:"text-danger",children:"*"})]}),Object(h.jsxs)("div",{className:"form-icon position-relative",children:[Object(h.jsx)(f.a,{icon:"lock",className:"fea icon-sm icons"}),Object(h.jsx)("input",{type:"password",className:"form-control ps-5",placeholder:"Password",required:""})]})]})}),Object(h.jsx)(d.a,{lg:12,children:Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)("input",{type:"checkbox",className:"form-check-input",id:"customCheck1"}),Object(h.jsx)(b.a,{className:"form-check-label",for:"customCheck1",children:"Remember me"})]})}),Object(h.jsx)("p",{className:"forgot-pass mb-0",children:Object(h.jsx)(o.b,{to:"auth-re-password-three",className:"text-dark fw-bold",children:"Forgot password ?"})})]})}),Object(h.jsx)(d.a,{lg:12,className:"mb-0",children:Object(h.jsx)("div",{className:"d-grid",children:Object(h.jsx)("button",{className:"btn btn-primary",children:"Sign in"})})}),Object(h.jsx)(d.a,{sx:12,className:"text-center",children:Object(h.jsxs)("p",{className:"mb-0 mt-4",children:[Object(h.jsx)("small",{className:"text-dark me-2",children:"Don't have an account ?"})," ",Object(h.jsx)("a",{href:"auth-signup-three",className:"text-dark fw-bold",children:"Sign Up"})]})})]})})]}),Object(h.jsxs)("div",{className:"widget mb-4 pb-2",children:[Object(h.jsx)("h5",{className:"widget-title",children:"Recent Replies"}),Object(h.jsxs)("ul",{className:"list-unstyled mb-0 mt-4",children:[Object(h.jsxs)("li",{className:"text-muted small h6",children:[Object(h.jsx)(f.a,{icon:"user",className:"fea icon-sm"}),Object(h.jsx)(o.b,{to:"#",className:"text-dark ms-2",children:"Ameliya"})," ","on"," ",Object(h.jsx)(o.b,{to:"#",className:"text-primary",children:"Privacy policy"})]}),Object(h.jsxs)("li",{className:"text-muted small h6",children:[Object(h.jsx)(f.a,{icon:"user",className:"fea icon-sm"}),Object(h.jsx)(o.b,{to:"#",className:"text-dark ms-2",children:"Crista"})," ","on"," ",Object(h.jsx)(o.b,{to:"#",className:"text-primary",children:"HTML Template hosts"})]}),Object(h.jsxs)("li",{className:"text-muted small h6",children:[Object(h.jsx)(f.a,{icon:"user",className:"fea icon-sm"}),Object(h.jsx)(o.b,{to:"#",className:"text-dark ms-2",children:"John"})," ","on"," ",Object(h.jsx)(o.b,{to:"#",className:"text-primary",children:"Specific error messages"})]}),Object(h.jsxs)("li",{className:"text-muted small h6",children:[Object(h.jsx)(f.a,{icon:"user",className:"fea icon-sm"}),Object(h.jsx)(o.b,{to:"#",className:"text-dark ms-2",children:"Jafrin"})," ","on"," ",Object(h.jsx)(o.b,{to:"#",className:"text-primary",children:"Network administration"})]}),Object(h.jsxs)("li",{className:"text-muted small h6 mb-0",children:[Object(h.jsx)(f.a,{icon:"user",className:"fea icon-sm"}),Object(h.jsx)(o.b,{to:"#",className:"text-dark ms-2",children:"Harry"})," ","on"," ",Object(h.jsx)(o.b,{to:"#",className:"text-primary",children:"Customized template options"})]})]})]}),Object(h.jsxs)("div",{className:"widget",children:[Object(h.jsx)("h5",{className:"widget-title",children:"Follow us"}),Object(h.jsxs)("ul",{className:"list-unstyled social-icon social mb-0 mt-4",children:[Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})," ",Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})," ",Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})," ",Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})," ",Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"github",className:"fea icon-sm fea-social"})})})," ",Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"youtube",className:"fea icon-sm fea-social"})})})," ",Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)(o.b,{to:"#",className:"rounded",children:Object(h.jsx)(f.a,{icon:"gitlab",className:"fea icon-sm fea-social"})})})]})]})]})})})})}}]),s}(i.Component)},62:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(0),r=s.n(c),i=s(7),l=s.n(i),o=s(43),d=s.n(o),m=s(44),u={tag:m.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,s=e.cssModule,c=e.color,i=e.body,l=e.inverse,o=e.outline,u=e.tag,b=e.innerRef,j=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.mapToCssModules)(d()(t,"card",!!l&&"text-white",!!i&&"card-body",!!c&&(o?"border":"bg")+"-"+c),s);return r.a.createElement(u,Object(a.a)({},j,{className:f,ref:b}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},68:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(0),r=s.n(c),i=s(7),l=s.n(i),o=s(43),d=s.n(o),m=s(44),u={tag:m.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,s=e.cssModule,c=e.innerRef,i=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.mapToCssModules)(d()(t,"card-body"),s);return r.a.createElement(i,Object(a.a)({},l,{className:o,ref:c}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},73:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"},74:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(0),r=s.n(c),i=s(7),l=s.n(i),o=s(43),d=s.n(o),m=s(44),u={tag:m.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,s=e.cssModule,c=e.fluid,i=e.tag,l=Object(n.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===c?o="container-fluid":c&&(o="container-"+c);var u=Object(m.mapToCssModules)(d()(t,o),s);return r.a.createElement(i,Object(a.a)({},l,{className:u}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},75:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(0),r=s.n(c),i=s(7),l=s.n(i),o=s(43),d=s.n(o),m=s(44),u=l.a.oneOfType([l.a.number,l.a.string]),b={tag:m.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,s=e.cssModule,c=e.noGutters,i=e.tag,l=e.form,o=e.widths,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];o.forEach((function(t,s){var a=e[t];if(delete u[t],a){var n=!s;b.push(n?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var j=Object(m.mapToCssModules)(d()(t,c?"no-gutters":null,l?"form-row":"row",b),s);return r.a.createElement(i,Object(a.a)({},u,{className:j}))};f.propTypes=b,f.defaultProps=j,t.a=f},76:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(0),r=s.n(c),i=s(7),l=s.n(i),o=s(43),d=s.n(o),m=s(44),u=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),j={tag:m.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,s){return!0===s||""===s?e?"col":"col-"+t:"auto"===s?e?"col-auto":"col-"+t+"-auto":e?"col-"+s:"col-"+t+"-"+s},p=function(e){var t=e.className,s=e.cssModule,c=e.widths,i=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];c.forEach((function(t,a){var n=e[t];if(delete l[t],n||""===n){var c=!a;if(Object(m.isObject)(n)){var r,i=c?"-":"-"+t+"-",u=h(c,t,n.size);o.push(Object(m.mapToCssModules)(d()(((r={})[u]=n.size||""===n.size,r["order"+i+n.order]=n.order||0===n.order,r["offset"+i+n.offset]=n.offset||0===n.offset,r)),s))}else{var b=h(c,t,n);o.push(b)}}})),o.length||o.push("col");var u=Object(m.mapToCssModules)(d()(t,o),s);return r.a.createElement(i,Object(a.a)({},l,{className:u}))};p.propTypes=j,p.defaultProps=f,t.a=p},819:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return v}));var a=s(9),n=s(10),c=s(12),r=s(11),i=s(0),l=s.n(i),o=s(13),d=s(74),m=s(75),u=s(76),b=s(93),j=s(110),f=s(53),h=s(54),p=s(73),x=s(18),O=s.n(x),g=s(542),N=s(1),v=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},e}return Object(n.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(N.jsxs)(l.a.Fragment,{children:[Object(N.jsx)("section",{className:"bg-half bg-light d-table w-100",children:Object(N.jsx)(d.a,{children:Object(N.jsx)("div",{className:"row justify-content-center",children:Object(N.jsx)("div",{className:"col-lg-12 text-center",children:Object(N.jsxs)("div",{className:"page-next-level",children:[Object(N.jsx)("h4",{className:"title",children:" Author Comments "}),Object(N.jsx)("div",{className:"page-next",children:Object(N.jsx)("nav",{"aria-label":"breadcrumb",className:"d-inline-block",children:Object(N.jsxs)("ul",{className:"breadcrumb bg-white rounded shadow mb-0",children:[Object(N.jsx)("li",{className:"breadcrumb-item",children:Object(N.jsx)("a",{href:"index",children:"Landrick"})}),Object(N.jsx)("li",{className:"breadcrumb-item",children:Object(N.jsx)("a",{href:"forums",children:"Forums"})}),Object(N.jsx)("li",{className:"breadcrumb-item",children:Object(N.jsx)("a",{href:"forums-topic",children:"Forums Topic"})}),Object(N.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Comments"})]})})})]})})})})}),Object(N.jsx)("div",{className:"position-relative",children:Object(N.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(N.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(N.jsx)("section",{className:"section",children:Object(N.jsx)(d.a,{children:Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(u.a,{lg:8,children:[Object(N.jsxs)("div",{className:"rounded shadow",children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between p-4 bg-light",children:[Object(N.jsx)("h6",{className:"mb-0",children:"Author"}),Object(N.jsx)("h6",{className:"mb-0",children:"Date"})]}),Object(N.jsxs)("div",{className:"p-4",children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(o.b,{className:"pe-3",to:"#",children:Object(N.jsx)("img",{src:f.a,className:"img-fluid avatar avatar-md-sm rounded-circle shadow",alt:"img"})}),Object(N.jsxs)("div",{className:"flex-1 commentor-detail",children:[Object(N.jsx)("h6",{className:"mb-0",children:Object(N.jsx)(o.b,{to:"#",className:"media-heading text-dark",children:"Calvin Carlo"})}),Object(N.jsx)("small",{className:"text-muted",children:"Author"})]})]}),Object(N.jsxs)("small",{className:"text-muted",children:["16th August, 2019 ",Object(N.jsx)("br",{})," at 03:44 pm"]})]}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)("p",{className:"text-muted mb-0",children:"\" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available.\""})})]}),Object(N.jsxs)("div",{className:"p-4 border-top",children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(o.b,{className:"pe-3",to:"#",children:Object(N.jsx)("img",{src:h.a,className:"img-fluid avatar avatar-md-sm rounded-circle shadow",alt:"img"})}),Object(N.jsxs)("div",{className:"flex-1 commentor-detail",children:[Object(N.jsx)("h6",{className:"mb-0",children:Object(N.jsx)(o.b,{to:"#",className:"media-heading text-dark",children:"Crista Joseph"})}),Object(N.jsx)("small",{className:"text-muted",children:"Author"})]})]}),Object(N.jsxs)("small",{className:"text-muted",children:["16th August, 2019 ",Object(N.jsx)("br",{})," at 03:44 pm"]})]}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)("p",{className:"text-muted mb-0",children:"\" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available.\""})})]}),Object(N.jsxs)("div",{className:"p-4 border-top",children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(o.b,{className:"pe-3",to:"#",children:Object(N.jsx)("img",{src:p.a,className:"img-fluid avatar avatar-md-sm rounded-circle shadow",alt:"img"})}),Object(N.jsxs)("div",{className:"flex-1 commentor-detail",children:[Object(N.jsx)("h6",{className:"mb-0",children:Object(N.jsx)(o.b,{to:"#",className:"media-heading text-dark",children:"George Meta"})}),Object(N.jsx)("small",{className:"text-muted",children:"Author"})]})]}),Object(N.jsxs)("small",{className:"text-muted",children:["16th August, 2019 ",Object(N.jsx)("br",{})," at 03:44 pm"]})]}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)("p",{className:"text-muted mb-0",children:"\" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available.\""})})]})]}),Object(N.jsx)("div",{className:"mt-4 pt-2",children:Object(N.jsx)("div",{className:"rounded shadow p-4",children:Object(N.jsx)(b.a,{className:"login-form",children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(u.a,{lg:12,children:Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsxs)(j.a,{className:"form-label",children:["Your Email ",Object(N.jsx)("span",{className:"text-danger",children:"*"})]}),Object(N.jsxs)("div",{className:"form-icon position-relative",children:[Object(N.jsx)(O.a,{icon:"user",className:"fea icon-sm icons"}),Object(N.jsx)("input",{type:"email",className:"form-control ps-5",placeholder:"Email",name:"email",required:""})]})]})}),Object(N.jsx)(u.a,{lg:12,children:Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsxs)(j.a,{className:"form-label",children:["Password ",Object(N.jsx)("span",{className:"text-danger",children:"*"})]}),Object(N.jsxs)("div",{className:"form-icon position-relative",children:[Object(N.jsx)(O.a,{icon:"lock",className:"fea icon-sm icons"}),Object(N.jsx)("input",{type:"password",className:"form-control ps-5",placeholder:"Password",required:""})]})]})}),Object(N.jsx)(u.a,{lg:12,children:Object(N.jsx)("div",{className:"d-flex justify-content-between",children:Object(N.jsx)("div",{className:"mb-3",children:Object(N.jsxs)("div",{className:"form-check",children:[Object(N.jsx)("input",{type:"checkbox",className:"form-check-input",id:"customCheck2"}),Object(N.jsx)("label",{className:"form-check-label",htmlFor:"customCheck2",children:"Remember me"})]})})})}),Object(N.jsx)(u.a,{lg:12,className:"mb-0",children:Object(N.jsx)("div",{className:"d-grid",children:Object(N.jsx)("button",{className:"btn btn-primary",children:"Login Now"})})})]})})})})]}),Object(N.jsx)(g.a,{})]})})})]})}}]),s}(i.Component)},93:function(e,t,s){"use strict";var a=s(3),n=s(8),c=s(46),r=s(4),i=s(0),l=s.n(i),o=s(7),d=s.n(o),m=s(43),u=s.n(m),b=s(44),j={children:d.a.node,inline:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var s;return(s=e.call(this,t)||this).getRef=s.getRef.bind(Object(c.a)(s)),s.submit=s.submit.bind(Object(c.a)(s)),s}Object(r.a)(t,e);var s=t.prototype;return s.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},s.submit=function(){this.ref&&this.ref.submit()},s.render=function(){var e=this.props,t=e.className,s=e.cssModule,c=e.inline,r=e.tag,i=e.innerRef,o=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(b.mapToCssModules)(u()(t,!!c&&"form-inline"),s);return l.a.createElement(r,Object(a.a)({},o,{ref:i,className:d}))},t}(i.Component);f.propTypes=j,f.defaultProps={tag:"form"},t.a=f}}]);
//# sourceMappingURL=114.8126666e.chunk.js.map