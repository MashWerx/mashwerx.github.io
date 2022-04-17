/*! For license information please see 193.68ff565b.chunk.js.LICENSE.txt */
(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[193],{43:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},44:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return h})),n.d(t,"deprecated",(function(){return j})),n.d(t,"DOMElement",(function(){return g})),n.d(t,"targetPropType",(function(){return O})),n.d(t,"tagPropType",(function(){return v})),n.d(t,"TransitionTimeouts",(function(){return x})),n.d(t,"TransitionPropTypeKeys",(function(){return N})),n.d(t,"TransitionStatuses",(function(){return w})),n.d(t,"keyCodes",(function(){return E})),n.d(t,"PopperPlacements",(function(){return T})),n.d(t,"canUseDOM",(function(){return M})),n.d(t,"isReactRefObj",(function(){return A})),n.d(t,"toNumber",(function(){return k})),n.d(t,"isObject",(function(){return C})),n.d(t,"isFunction",(function(){return S})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return I})),n.d(t,"getTarget",(function(){return $})),n.d(t,"defaultToggleEvents",(function(){return G})),n.d(t,"addMultipleEventListeners",(function(){return F})),n.d(t,"focusableElements",(function(){return L}));var r,o=n(7),a=n.n(o);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var b={};function h(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function j(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&h('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];return e.apply(void 0,[n,r,o].concat(i))}}var y="object"===typeof window&&window.Element||function(){};function g(e,t,n){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var O=a.a.oneOfType([a.a.string,a.a.func,g,a.a.shape({current:a.a.any})]),v=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function k(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(C(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=C(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!C(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(A(e))return e.current;if(S(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function $(e,t){var n=D(e);return t?I(n)?n:null===n?[]:[n]:I(n)?n[0]:n}var G=["touchstart","click"];function F(e,t,n,r){var o=e;I(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!I(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var L=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},74:function(e,t,n){"use strict";var r=n(3),o=n(8),a=n(0),i=n.n(a),s=n(7),c=n.n(s),l=n(43),u=n.n(l),d=n(44),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.fluid,s=e.tag,c=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===a?l="container-fluid":a&&(l="container-"+a);var f=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},75:function(e,t,n){"use strict";var r=n(3),o=n(8),a=n(0),i=n.n(a),s=n(7),c=n.n(s),l=n(43),u=n.n(l),d=n(44),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,c=e.form,l=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(u()(t,a?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(s,Object(r.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},76:function(e,t,n){"use strict";var r=n(3),o=n(8),a=n(0),i=n.n(a),s=n(7),c=n.n(s),l=n(43),u=n.n(l),d=n(44),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,a=e.widths,s=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];a.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(Object(d.isObject)(o)){var i,s=a?"-":"-"+t+"-",f=h(a,t,o.size);l.push(Object(d.mapToCssModules)(u()(((i={})[f]=o.size||""===o.size,i["order"+s+o.order]=o.order||0===o.order,i["offset"+s+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=h(a,t,o);l.push(p)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};j.propTypes=m,j.defaultProps=b,t.a=j},773:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(10),a=n(12),i=n(11),s=n(0),c=n.n(s),l=n(13),u=n(74),d=n(75),f=n(76),p=n(18),m=n.n(p),b=n(1),h=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("footer",{className:"footer footer-bar "+this.props.className,children:Object(b.jsx)(u.a,{className:"text-center",children:Object(b.jsxs)(d.a,{className:"align-items-center",children:[Object(b.jsx)(f.a,{sm:"6",children:Object(b.jsx)("div",{className:"text-sm-start",children:Object(b.jsxs)("p",{className:"mb-0",children:["\xa9 2020-21 Landrick. Develop by"," ",Object(b.jsx)("a",{href:"https://themesbrand.com/",target:"_blank",rel:"noopener noreferrer",className:"text-success",children:"Themesbrand"}),"."]})})}),Object(b.jsx)(f.a,{sm:"6",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("ul",{className:"list-unstyled social-icon text-sm-end mb-0",children:[Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)(l.b,{to:"#",className:"rounded me-1",children:Object(b.jsx)("i",{children:Object(b.jsx)(m.a,{icon:"facebook",className:"fea icon-sm fea-social"})})})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)(l.b,{to:"#",className:"rounded",children:Object(b.jsx)("i",{children:Object(b.jsx)(m.a,{icon:"instagram",className:"fea icon-sm fea-social"})})})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)(l.b,{to:"#",className:"rounded",children:Object(b.jsx)("i",{children:Object(b.jsx)(m.a,{icon:"twitter",className:"fea icon-sm fea-social"})})})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)(l.b,{to:"#",className:"rounded",children:Object(b.jsx)("i",{children:Object(b.jsx)(m.a,{icon:"linkedin",className:"fea icon-sm fea-social"})})})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)(l.b,{to:"#",className:"rounded",children:Object(b.jsx)("i",{children:Object(b.jsx)(m.a,{icon:"github",className:"fea icon-sm fea-social"})})})})]})})]})})})})}}]),n}(s.Component);t.default=h}}]);
//# sourceMappingURL=193.68ff565b.chunk.js.map