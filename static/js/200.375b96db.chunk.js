(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[200,201],{201:function(e,t,n){"use strict";var a=function(){};e.exports=a},254:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(7)),o=n(0),i=a(o),u=a(n(201)),s=a(n(256));function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,o=t.easingFn,i=t.end,u=t.formattingFn,l=t.prefix,c=t.separator,p=t.start,d=t.suffix,f=t.useEasing;return new s(e,p,i,a,r,{decimal:n,easingFn:o,formattingFn:u,separator:c,prefix:l,suffix:d,useEasing:f,useGrouping:!!c})},g=function(e){function t(){var e,n;l(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return p(y(n=h(this,(e=f(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"===typeof n.props.children&&u(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),b(n.containerRef.current,n.props)})),p(y(n),"pauseResume",(function(){var e=y(n),t=e.reset,a=e.restart,r=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:a,update:r})})),p(y(n),"reset",(function(){var e=y(n),t=e.pauseResume,a=e.restart,r=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:a,update:r})})),p(y(n),"restart",(function(){n.reset(),n.start()})),p(y(n),"start",(function(){var e=y(n),t=e.pauseResume,a=e.reset,r=e.restart,o=e.update,i=n.props,u=i.delay,s=i.onEnd,l=i.onStart,c=function(){return n.instance.start((function(){return s({pauseResume:t,reset:a,start:r,update:o})}))};u>0?n.timeoutId=setTimeout(c,1e3*u):c(),l({pauseResume:t,reset:a,update:o})})),p(y(n),"update",(function(e){var t=y(n),a=t.pauseResume,r=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:a,reset:r,start:o})})),p(y(n),"containerRef",i.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.redraw,u=t.duration,s=t.separator,l=t.decimals,c=t.decimal;return u!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||o!==e.prefix||s!==e.separator||l!==e.decimals||c!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.duration,u=t.separator,s=t.decimals,l=t.decimal,c=t.preserveValue;i===e.duration&&a===e.start&&r===e.suffix&&o===e.prefix&&u===e.separator&&s===e.decimals&&l===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(c||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,o=this.pauseResume,u=this.reset,s=this.restart,l=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:o,reset:u,start:s,update:l}):i.createElement("span",{className:n,ref:r,style:a})}}])&&c(n.prototype,a),r&&c(n,r),t}(o.Component);p(g,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),p(g,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var w={innerHTML:null};t.default=g,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g.defaultProps,{},e),n=t.start,a=t.formattingFn,r=v(o.useState("function"===typeof a?a(n):n),2),i=r[0],u=r[1],s=o.useRef(null),l=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=b(w,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);u(e)},e}();return s.current=n,n},c=function(){var e=t.onReset;l().reset(),e({pauseResume:m,start:f,update:y})},f=function e(){var n=t.onStart,a=t.onEnd;l().reset(),l().start((function(){a({pauseResume:m,reset:c,start:e,update:y})})),n({pauseResume:m,reset:c,update:y})},m=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:c,start:f,update:y})},y=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:m,reset:c,start:f})};return o.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:m,reset:c,update:y}),l().start((function(){clearTimeout(r),a({pauseResume:m,reset:c,start:f,update:y})}))}),1e3*e);return c}),[]),{countUp:i,start:f,pauseResume:m,reset:c,update:y}}},256:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,o){function i(e){var t,n,a,r,o,i,u=e<0;if(e=Math.abs(e).toFixed(l.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(r="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(r=l.options.separator+r),r=n[i-o-1]+r;n=r}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]}))),(u?"-":"")+l.options.prefix+n+a+l.options.suffix}function u(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:u,formattingFn:i,prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var c in l.options)o.hasOwnProperty(c)&&null!==o[c]&&(l.options[c]=o[c]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var p=0,d=["webkit","moz","ms","o"],f=0;f<d.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[d[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[f]+"CancelAnimationFrame"]||window[d[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-p)),r=window.setTimeout((function(){e(n+a)}),a);return p=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),s(l.startVal)&&s(l.endVal)?(l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(r)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(!s(e=Number(e)))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=i(n(0)),o=i(n(104));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return r.default.createElement(o.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?r.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},r.default.createElement("div",{className:e.props.classNames.modalVideoBody},r.default.createElement("div",{className:e.props.classNames.modalVideoInner},r.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},r.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||r.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(r.default.Component);t.default=u,u.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},92:function(e,t,n){}}]);
//# sourceMappingURL=200.375b96db.chunk.js.map