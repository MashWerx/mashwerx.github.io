(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[38],{106:function(e,t,s){"use strict";t.a=s.p+"static/media/shopify.89d8c130.svg"},108:function(e,t,s){"use strict";t.a=s.p+"static/media/spotify.482c49d0.svg"},125:function(e,t,s){"use strict";var a=s(9),c=s(10),i=s(14),n=s(12),r=s(11),l=s(0),o=s.n(l),m=s(75),d=s(76),j=s(109),b=s.n(j),h=s(1),u=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?c.setState({itemCount:3,cols:4}):window.outerWidth<=970&&c.setState({itemCount:1,cols:12})},c.state={cols:4,step1:!0,step2:!1},c.updateWindowSize.bind(Object(i.a)(c)),c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)(m.a,{className:"justify-content-center",children:Object(h.jsxs)(d.a,{lg:"12",className:"mt-4",children:[Object(h.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(h.jsx)("div",{className:"tiny-slide",children:Object(h.jsx)(m.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,s){return s>=0&&s<=2?Object(h.jsx)(d.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null})):this.props.reviews.map((function(t,s){return s>=3&&s<=5?Object(h.jsx)(d.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null}))})})}),Object(h.jsxs)("div",{className:"tns-nav",children:[Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),s}(l.Component);t.a=u},149:function(e,t,s){"use strict";var a=s(3),c=s(8),i=s(0),n=s.n(i),r=s(7),l=s.n(r),o=s(43),m=s.n(o),d=s(44),j={tag:d.tagPropType,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,s=e.cssModule,i=e.top,r=e.bottom,l=e.tag,o=Object(c.a)(e,["className","cssModule","top","bottom","tag"]),j="card-img";i&&(j="card-img-top"),r&&(j="card-img-bottom");var b=Object(d.mapToCssModules)(m()(t,j),s);return n.a.createElement(l,Object(a.a)({},o,{className:b}))};b.propTypes=j,b.defaultProps={tag:"img"},t.a=b},153:function(e,t,s){"use strict";var a=s(3),c=s(8),i=s(0),n=s.n(i),r=s(7),l=s.n(r),o=s(43),m=s.n(o),d=s(44),j={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,s=e.cssModule,i=e.row,r=e.disabled,l=e.check,o=e.inline,j=e.tag,b=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=Object(d.mapToCssModules)(m()(t,!!i&&"row",l?"form-check":"form-group",!(!l||!o)&&"form-check-inline",!(!l||!r)&&"disabled"),s);return"fieldset"===j&&(b.disabled=r),n.a.createElement(j,Object(a.a)({},b,{className:h}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},155:function(e,t,s){"use strict";t.a=s.p+"static/media/01.3be58610.jpg"},195:function(e,t,s){"use strict";var a=s(3),c=s(8),i=s(0),n=s.n(i),r=s(7),l=s.n(r),o=s(43),m=s.n(o),d=s(44),j={body:l.a.bool,bottom:l.a.bool,children:l.a.node,className:l.a.string,cssModule:l.a.object,heading:l.a.bool,left:l.a.bool,list:l.a.bool,middle:l.a.bool,object:l.a.bool,right:l.a.bool,tag:d.tagPropType,top:l.a.bool},b=function(e){var t,s=e.body,i=e.bottom,r=e.className,l=e.cssModule,o=e.heading,j=e.left,b=e.list,h=e.middle,u=e.object,x=e.right,p=e.tag,O=e.top,g=Object(c.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=o?"h4":g.href?"a":g.src||u?"img":b?"ul":"div";var f=p||t,N=Object(d.mapToCssModules)(m()(r,{"media-body":s,"media-heading":o,"media-left":j,"media-right":x,"media-top":O,"media-bottom":i,"media-middle":h,"media-object":u,"media-list":b,media:!s&&!o&&!j&&!x&&!O&&!i&&!h&&!u&&!b}),l);return n.a.createElement(f,Object(a.a)({},g,{className:N}))};b.propTypes=j,t.a=b},196:function(e,t,s){"use strict";t.a=s.p+"static/media/02.697b47ef.jpg"},197:function(e,t,s){"use strict";t.a=s.p+"static/media/03.1b601f78.jpg"},253:function(e,t,s){"use strict";var a=s(3),c=s(8),i=s(0),n=s.n(i),r=s(7),l=s.n(r),o=s(43),m=s.n(o),d=s(44),j={tag:d.tagPropType,wrapTag:d.tagPropType,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},b=function(e){var t,s=e.className,i=e.cssModule,r=e.children,l=e.toggle,o=e.tag,j=e.wrapTag,b=e.closeAriaLabel,h=e.charCode,u=e.close,x=Object(c.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=Object(d.mapToCssModules)(m()(s,"modal-header"),i);if(!u&&l){var O="number"===typeof h?String.fromCharCode(h):h;t=n.a.createElement("button",{type:"button",onClick:l,className:Object(d.mapToCssModules)("close",i),"aria-label":b},n.a.createElement("span",{"aria-hidden":"true"},O))}return n.a.createElement(j,Object(a.a)({},x,{className:p}),n.a.createElement(o,{className:Object(d.mapToCssModules)("modal-title",i)},r),u||t)};b.propTypes=j,b.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=b},255:function(e,t,s){"use strict";var a=s(9),c=s(10),i=s(12),n=s(11),r=s(0),l=s.n(r),o=s(76),m=s(62),d=s(149),j=s(68),b=s(13),h=s(1),u=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:this.props.blogs.map((function(e,t){return Object(h.jsx)(o.a,{lg:"4",md:"6",className:"mt-4 pt-2",name:"blog",children:Object(h.jsxs)(m.a,{className:"blog rounded border-0 shadow",children:[Object(h.jsxs)("div",{className:"position-relative",children:[Object(h.jsx)(d.a,{top:!0,src:e.image,className:"rounded-top",alt:""}),Object(h.jsx)("div",{className:"overlay rounded-top bg-dark"})]}),Object(h.jsxs)(j.a,{className:"content",children:[Object(h.jsx)("h5",{children:Object(h.jsx)(b.b,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(h.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(h.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(h.jsx)("li",{className:"list-inline-item me-2  mb-0",children:Object(h.jsxs)(b.b,{to:"#",className:"text-muted like",children:[Object(h.jsx)("i",{className:"uil uil-heart me-1"}),e.like]})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsxs)(b.b,{to:"#",className:"text-muted comments",children:[Object(h.jsx)("i",{className:"uil uil-comment me-1"}),e.comment]})})]}),Object(h.jsxs)(b.b,{to:"/page-blog-detail",className:"text-muted readmore",children:["Read More ",Object(h.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})]}),Object(h.jsxs)("div",{className:"author",children:[Object(h.jsxs)("small",{className:"text-light user d-block",children:[Object(h.jsx)("i",{className:"mdi mdi-account"})," ",e.autor]}),Object(h.jsxs)("small",{className:"text-light date",children:[Object(h.jsx)("i",{className:"mdi mdi-calendar-check"})," ",e.date]})]})]})},t)}))})}}]),s}(r.Component);t.a=u},438:function(e,t,s){"use strict";t.a=s.p+"static/media/ab02.ca16f93a.jpg"},453:function(e,t,s){"use strict";t.a=s.p+"static/media/ab01.d5ba2214.jpg"},454:function(e,t,s){"use strict";t.a=s.p+"static/media/ab03.46a7a322.jpg"},48:function(e,t,s){"use strict";var a=s(9),c=s(10),i=s(12),n=s(11),r=s(0),l=s.n(r),o=s(75),m=s(76),d=s(1),j=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)(l.a.Fragment,{children:Object(d.jsx)(o.a,{className:"justify-content-center",children:Object(d.jsx)(m.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(d.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(d.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(d.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(d.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),s}(r.Component);t.a=j},520:function(e,t,s){"use strict";var a=s(9),c=s(10),i=s(12),n=s(11),r=s(0),l=s.n(r),o=s(74),m=s(75),d=s(76),j=s(98),b=s(96),h=s(97),u=s(99),x=s(106),p=s(108),O=s(1),g=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={partners:[{image:j.a},{image:b.a},{image:h.a},{image:u.a},{image:x.a},{image:p.a}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)("section",{className:"py-4 border-bottom border-top",children:Object(O.jsx)(o.a,{children:Object(O.jsx)(m.a,{className:"justify-content-center",children:this.state.partners.map((function(e,t){return Object(O.jsx)(d.a,{lg:2,md:2,xs:6,className:"text-center py-4",children:Object(O.jsx)("img",{src:e.image,className:"avatar avatar-ex-sm",alt:"Landrick"})},t)}))})})})})}}]),s}(r.Component);t.a=g},527:function(e,t,s){"use strict";t.a=s.p+"static/media/1.6faa0375.jpg"},53:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,s){"use strict";t.a=s.p+"static/media/02.7df14e12.jpg"},59:function(e,t,s){"use strict";t.a=s.p+"static/media/03.ba5f8794.jpg"},599:function(e,t,s){"use strict";t.a=s.p+"static/media/2.fafe4ada.jpg"},60:function(e,t,s){"use strict";t.a=s.p+"static/media/04.35463172.jpg"},600:function(e,t,s){"use strict";t.a=s.p+"static/media/3.0dcbbe55.jpg"},601:function(e,t,s){"use strict";t.a=s.p+"static/media/4.a06d7704.jpg"},602:function(e,t,s){"use strict";t.a=s.p+"static/media/5.35e2b3d3.jpg"},603:function(e,t,s){"use strict";t.a=s.p+"static/media/6.5076f3f1.jpg"},73:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"},862:function(e,t,s){"use strict";s.r(t);var a=s(9),c=s(10),i=s(12),n=s(11),r=s(0),l=s.n(r),o=s(14),m=s(74),d=s(75),j=s(76),b=s(105),h=s(93),u=s(153),x=s(107),p=s(13),O=s(18),g=s.n(O),f=s(91),N=s.n(f),v=(s(92),s.p+"static/media/hero.127a13a4.jpg"),w=s(1),y=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={isOpen:!1},c.openModal=c.openModal.bind(Object(o.a)(c)),c}return Object(c.a)(s,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsxs)("section",{className:"section pt-5 pb-0 mt-4",children:[Object(w.jsx)(m.a,{fluid:!0,className:"mt-md-1 px-0 px-md-3",children:Object(w.jsx)("div",{className:"rounded bg-light py-5 px-3 px-sm-0",children:Object(w.jsx)(d.a,{children:Object(w.jsx)(m.a,{children:Object(w.jsxs)(d.a,{className:"align-items-center",children:[Object(w.jsx)(j.a,{lg:7,md:6,xs:12,children:Object(w.jsxs)("div",{className:"title-heading",children:[Object(w.jsx)(b.a,{color:"primary",className:"alert-pills shadow",role:"alert",children:Object(w.jsxs)("span",{className:"content",children:[" ","Are you ready to learn online ?"]})}),Object(w.jsxs)("h1",{className:"heading mb-3",children:["Start Online Learning ",Object(w.jsx)("br",{})," With"," ",Object(w.jsx)("span",{className:"text-primary",children:": Landrick"})]}),Object(w.jsx)("p",{className:"para-desc text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(w.jsx)("div",{className:"subcribe-form mt-4 pt-2",children:Object(w.jsx)(h.a,{className:"ms-0",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)("input",{type:"text",id:"course",name:"name",className:"rounded",placeholder:"Search your course"}),Object(w.jsxs)(x.a,{color:"primary",type:"submit",children:["Search"," ",Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:"search",className:"fea icon-sm"})})]})]})})})]})}),Object(w.jsx)(j.a,{lg:5,md:6,xs:12,className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(w.jsxs)("div",{className:"position-relative",children:[Object(w.jsx)("img",{src:v,className:"rounded img-fluid mx-auto d-block",alt:"Landrick"}),Object(w.jsx)("div",{className:"play-icon",children:Object(w.jsx)(p.b,{to:"#",onClick:this.openModal,className:"play-btn video-play-icon",children:Object(w.jsx)("i",{className:"mdi mdi-play text-primary rounded-circle bg-white shadow"})})})]})})]})})})})}),Object(w.jsx)(N.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"99025203",onClose:function(){return e.setState({isOpen:!1})}})]})})}}]),s}(r.Component),k=s(62),C=s(68),M=s(48),S=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={courses:[{icon:"edit",title:"Designing",link:"#"},{icon:"feather",title:"Development",link:"#"},{icon:"music",title:"Music",link:"#"},{icon:"camera",title:"Photography",link:"#"},{icon:"shield",title:"Marketing",link:"#"},{icon:"monitor",title:"IT & Software",link:"#"},{icon:"bar-chart-2",title:"Business",link:"#"},{icon:"activity",title:"Health & Fitness",link:"#"}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsx)("section",{className:"section",children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(M.a,{title:"Get a choice of your course",desc:" that can provide everything you need to generate awareness, drive traffic, connect"}),Object(w.jsxs)(d.a,{children:[this.state.courses.map((function(e,t){return Object(w.jsx)(j.a,{lg:3,md:4,xs:12,className:"mt-4 pt-2",children:Object(w.jsx)(k.a,{className:"explore-feature border-0 rounded text-center bg-white",children:Object(w.jsxs)(C.a,{className:"py-5",children:[Object(w.jsx)("div",{className:"icon rounded-circle shadow-lg d-inline-block",children:Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:e.icon,className:"fea"})})}),Object(w.jsxs)("div",{className:"content mt-3",children:[Object(w.jsx)("h5",{children:Object(w.jsx)(p.b,{to:e.link,className:"title text-dark",children:e.title})}),Object(w.jsx)(p.b,{to:e.link,className:"text-muted small",children:"Learn More"})]})]})})},t)})),Object(w.jsx)(j.a,{xs:12,children:Object(w.jsx)("div",{className:"text-center mt-4 pt-2",children:Object(w.jsxs)(p.b,{to:"#",className:"btn btn-primary",children:["See More Courses"," ",Object(w.jsx)("i",{className:"uil uil-arrow-right align-middle"})]})})})]})]})})})}}]),s}(r.Component),L=s(520),T=s(268),P=s(253),I=s(266),D=s(195),A=s(453),E=s(438),W=s(454),F=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).openModalMap=function(e,t){c.setState({isOpen1:!c.state.isOpen1,branchName:e,location:t})},c.state={isOpen1:!1,isOpen:!1,branchName:"U.S.A",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",branches:[{title:"U.S.A.",desc:"Long Street, WS, US",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"},{title:"China",desc:"Wuhan, China",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"},{title:"India",desc:"Channai, India",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"}]},c.openModal=c.openModal.bind(Object(o.a)(c)),c.openModalMap.bind(Object(o.a)(c)),c}return Object(c.a)(s,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsx)(m.a,{children:Object(w.jsxs)(d.a,{className:"align-items-center",children:[Object(w.jsx)(j.a,{lg:6,md:12,children:Object(w.jsxs)(d.a,{className:"align-items-center",children:[Object(w.jsxs)(j.a,{lg:6,md:6,className:"mt-4 mt-lg-0 pt-2 pt-lg-0",children:[Object(w.jsx)(k.a,{className:"work-container work-modern overflow-hidden rounded border-0 shadow-lg",children:Object(w.jsxs)(C.a,{className:"p-0",children:[Object(w.jsx)("img",{src:A.a,className:"img-fluid",alt:"work"}),Object(w.jsx)("div",{className:"overlay-work bg-dark"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(p.b,{to:"#",className:"title text-white d-block fw-bold",children:"Web Development"}),Object(w.jsx)("small",{className:"text-light",children:"IT & Software"})]})]})}),Object(w.jsx)("div",{className:"mt-4 pt-2 text-end d-none d-md-block",children:Object(w.jsxs)(p.b,{to:"#",className:"btn btn-primary",children:["See More"," ",Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:"chevron-right",className:"fea icon-sm"})})]})})]}),Object(w.jsx)(j.a,{lg:6,md:6,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(j.a,{lg:12,md:12,className:"mt-4 mt-lg-0 pt-2 pt-lg-0",children:Object(w.jsx)(k.a,{className:"work-container work-modern overflow-hidden rounded border-0 shadow-lg",children:Object(w.jsxs)(C.a,{className:"p-0",children:[Object(w.jsx)("img",{src:E.a,className:"img-fluid",alt:"work"}),Object(w.jsx)("div",{className:"overlay-work bg-dark"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(p.b,{to:"#",className:"title text-white d-block fw-bold",children:"Michanical Engineer"}),Object(w.jsx)("small",{className:"text-light",children:"Engineering"})]})]})})}),Object(w.jsx)(j.a,{lg:12,md:12,className:"mt-4 pt-2",children:Object(w.jsx)(k.a,{className:"work-container work-modern overflow-hidden rounded border-0 shadow-lg",children:Object(w.jsxs)(C.a,{className:"p-0",children:[Object(w.jsx)("img",{src:W.a,className:"img-fluid",alt:"work"}),Object(w.jsx)("div",{className:"overlay-work bg-dark"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(p.b,{to:"#",className:"title text-white d-block fw-bold",children:"Chartered Accountant"}),Object(w.jsx)("small",{className:"text-light",children:"C.A."})]})]})})})]})})]})}),Object(w.jsx)(j.a,{lg:6,md:12,className:"mt-4 mt-lg-0 pt- pt-lg-0",children:Object(w.jsxs)("div",{className:"ms-lg-4",children:[Object(w.jsxs)("div",{className:"section-title mb-4 pb-2",children:[Object(w.jsx)("h4",{className:"title mb-4",children:"About Our Story"}),Object(w.jsxs)("p",{className:"text-muted para-desc",children:["Start working with"," ",Object(w.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(w.jsx)("p",{className:"text-muted para-desc mb-0",children:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words."})]}),Object(w.jsx)("h5",{children:"Our Branches :"}),Object(w.jsx)(d.a,{children:this.state.branches.map((function(t,s){return Object(w.jsx)(j.a,{md:6,xs:12,className:"mt-4",children:Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)("i",{className:"uil uil-map-marker text-muted h3"}),Object(w.jsxs)("div",{className:"content ms-2",children:[Object(w.jsx)("h5",{className:"mb-0",children:Object(w.jsx)(p.b,{onClick:function(){return e.openModalMap(t.title,t.location)},to:"#",className:"video-play-icon text-primary",children:t.title})}),Object(w.jsx)("p",{className:"text-muted mb-0",children:t.desc})]})]})},s)}))}),Object(w.jsxs)("div",{className:"mt-4 pt-2",children:[Object(w.jsxs)(p.b,{to:"https://1.envato.market/landrickreactjs",target:"_blank",className:"btn btn-primary m-1",children:["Read More"," ",Object(w.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]}),Object(w.jsx)(p.b,{to:"#",onClick:this.openModal,className:"btn btn-icon btn-pills btn-primary m-1 lightbox",children:Object(w.jsx)(g.a,{icon:"video",className:"icons"})}),Object(w.jsx)("span",{className:"fw-bold text-uppercase small align-middle ms-1",children:"Watch Now"})]})]})})]})}),Object(w.jsx)(N.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"99025203",onClose:function(){return e.setState({isOpen:!1})}}),Object(w.jsxs)(T.a,{size:"lg",isOpen:this.state.isOpen1,toggle:function(){return e.setState({isOpen1:!e.state.isOpen1})},children:[Object(w.jsxs)(P.a,{toggle:function(){return e.setState({isOpen1:!e.state.isOpen1})},children:[this.state.branchName," Branch Map"]}),Object(w.jsx)(I.a,{children:Object(w.jsx)("div",{className:"map",children:Object(w.jsx)("iframe",{title:"uniqueTitle",src:this.state.location,style:{border:"0"},allowFullScreen:!0})})})]}),Object(w.jsx)(m.a,{className:"mt-100 mt-60",children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(j.a,{lg:3,md:6,xs:12,children:Object(w.jsxs)(D.a,{className:"d-flex features feature-clean",children:[Object(w.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(w.jsx)("i",{className:"uil uil-airplay d-block rounded h3 mb-0"})}),Object(w.jsxs)("div",{className:"flex-1 content ms-3",children:[Object(w.jsx)("h5",{className:"mb-1",children:Object(w.jsx)(p.b,{to:"#",className:"text-dark",children:"Learners"})}),Object(w.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."})]})]})}),Object(w.jsx)(j.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(w.jsxs)(D.a,{className:"d-flex features feature-clean",children:[Object(w.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(w.jsx)("i",{className:"uil uil-bag d-block rounded h3 mb-0"})}),Object(w.jsxs)("div",{className:"flex-1 content ms-3",children:[Object(w.jsx)("h5",{className:"mb-1",children:Object(w.jsx)(p.b,{to:"#",className:"text-dark",children:"Teachers"})}),Object(w.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."})]})]})}),Object(w.jsx)(j.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2 mt-lg-0 pt-lg-0",children:Object(w.jsxs)(D.a,{className:"d-flex features feature-clean",children:[Object(w.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(w.jsx)("i",{className:"uil uil-star d-block rounded h3 mb-0"})}),Object(w.jsxs)("div",{className:"flex-1 content ms-3",children:[Object(w.jsx)("h5",{className:"mb-1",children:Object(w.jsx)(p.b,{to:"#",className:"text-dark",children:"Parents"})}),Object(w.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."})]})]})}),Object(w.jsx)(j.a,{lg:3,md:6,xs:12,className:"mt-4 pt-2 mt-lg-0 pt-lg-0",children:Object(w.jsxs)(D.a,{className:"d-flex features feature-clean",children:[Object(w.jsx)("div",{className:"icons text-primary text-center mx-auto",children:Object(w.jsx)("i",{className:"uil uil-at d-block rounded h3 mb-0"})}),Object(w.jsxs)("div",{className:"flex-1 content ms-3",children:[Object(w.jsx)("h5",{className:"mb-1",children:Object(w.jsx)(p.b,{to:"#",className:"text-dark",children:"Doners"})}),Object(w.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."})]})]})})]})})]})}}]),s}(r.Component),H=s(149),z=s(527),R=s(599),B=s(600),q=s(601),G=s(602),J=s(603),Y=s(53),$=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={courses:[{id:1,img:z.a,topic:"Design",title:"Program for Missionaries",desc:"The most well-known dummy text is the have originated in the 16th century.",lec:"25",time:"1h 30m",views:"3012",profImg:Y.a,name:"Dung Lewis",post:"Professor",price:"$11"},{id:1,img:R.a,topic:"Development",title:"Access to Higher Education",desc:"The most well-known dummy text is the have originated in the 16th century.",lec:"25",time:"1h 30m",views:"3012",profImg:Y.a,name:"Dung Lewis",post:"Professor",price:"$15"},{id:1,img:B.a,topic:"Software",title:"Educational Communication",desc:"The most well-known dummy text is the have originated in the 16th century.",lec:"25",time:"1h 30m",views:"3012",profImg:Y.a,name:"Dung Lewis",post:"Professor",price:"$19"},{id:1,img:q.a,topic:"Music",title:"Introduction to Epidemiology",desc:"The most well-known dummy text is the have originated in the 16th century.",lec:"25",time:"1h 30m",views:"3012",profImg:Y.a,name:"Dung Lewis",post:"Professor",price:"$9"},{id:1,img:G.a,topic:"Art & Fashion",title:"Good Clinical Practice",desc:"The most well-known dummy text is the have originated in the 16th century.",lec:"25",time:"1h 30m",views:"3012",profImg:Y.a,name:"Dung Lewis",post:"Professor",price:"$24"},{id:1,img:J.a,topic:"Programmer",title:"Social Computing",desc:"The most well-known dummy text is the have originated in the 16th century.",lec:"25",time:"1h 30m",views:"3012",profImg:Y.a,name:"Dung Lewis",post:"Professor",price:"$21"}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(w.jsx)(M.a,{title:"Popular Courses",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(w.jsx)(d.a,{children:this.state.courses.map((function(e,t){return Object(w.jsx)(j.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:Object(w.jsxs)(k.a,{className:"blog rounded border-0 shadow overflow-hidden",children:[Object(w.jsxs)("div",{className:"position-relative",children:[Object(w.jsx)(H.a,{top:!0,src:e.img,alt:"..."}),Object(w.jsx)("div",{className:"overlay bg-dark"}),Object(w.jsxs)("div",{className:"teacher d-flex align-items-center",children:[Object(w.jsx)("img",{src:e.profImg,className:"avatar avatar-md-sm rounded-circle shadow",alt:"Landrick"}),Object(w.jsxs)("div",{className:"ms-2",children:[Object(w.jsx)("h6",{className:"mb-0",children:Object(w.jsx)(p.b,{to:"#",className:"text-light user",children:e.name})}),Object(w.jsx)("p",{className:"text-light small my-0",children:e.post})]})]}),Object(w.jsx)("div",{className:"course-fee bg-white text-center shadow-lg rounded-circle",children:Object(w.jsx)("h6",{className:"text-primary fw-bold fee",children:e.price})})]}),Object(w.jsx)("div",{className:"position-relative",children:Object(w.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(w.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})}),Object(w.jsxs)(C.a,{className:"content",children:[Object(w.jsx)("small",{children:Object(w.jsx)(p.b,{to:"#",className:"text-primary h6",children:e.topic})}),Object(w.jsx)("h5",{className:"mt-2",children:Object(w.jsx)(p.b,{to:"#",className:"title text-dark",children:e.title})}),Object(w.jsx)("p",{className:"text-muted",children:e.desc}),Object(w.jsxs)(p.b,{to:"#",className:"text-primary",children:["Read More"," ",Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:"chevron-right",className:"fea icon-sm"})})]}),Object(w.jsxs)("ul",{className:"list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0",children:[Object(w.jsxs)("li",{className:"text-muted small",children:[Object(w.jsx)("i",{className:"uil uil-book-open text-info"}),e.lec," Lectures"]}),Object(w.jsxs)("li",{className:"text-muted small ms-3",children:[Object(w.jsx)("i",{className:"uil uil-clock text-warning"}),e.time]}),Object(w.jsxs)("li",{className:"text-muted small ms-3",children:[Object(w.jsx)("i",{className:"uil uil-eye text-primary"}),e.views]})]})]})]})},t)}))})]})})}}]),s}(r.Component),U=s(110),V=s(112),_=s.p+"static/media/cta.1eec3b76.jpg",K=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),c.setState({isOpen:!0})},c.state={isOpen:!1},c.handleSubmit.bind(Object(o.a)(c)),c}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsx)(m.a,{fluid:!0,className:"mt-100 mt-60",children:Object(w.jsx)("div",{className:"rounded py-md-5",style:{background:"url(".concat(_,") center center")},children:Object(w.jsx)(d.a,{className:"py-5",children:Object(w.jsx)(m.a,{children:Object(w.jsxs)(d.a,{className:"align-items-center px-3 px-sm-0",children:[Object(w.jsx)(j.a,{lg:8,md:6,xs:12,children:Object(w.jsxs)("div",{className:"section-title",children:[Object(w.jsx)("h4",{className:"display-4 h1 text-white title-dark mb-4",children:"Register Now !"}),Object(w.jsx)("p",{className:"text-light title-dark para-desc",children:"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."}),Object(w.jsx)("div",{className:"mt-4",children:Object(w.jsx)(p.b,{to:"#",className:"btn btn-primary",children:"Admission Now"})})]})}),Object(w.jsx)(j.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(w.jsx)(k.a,{className:"login_page shadow rounded border-0",children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)("h4",{className:"card-title",children:"Register Now"}),Object(w.jsx)(b.a,{isOpen:this.state.isOpen,toggle:function(){return e.setState({isOpen:!1})},color:"primary",children:"Data Submtted Successfully"}),Object(w.jsx)(h.a,{className:"login-form",onSubmit:this.handleSubmit,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(j.a,{md:12,children:Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsxs)(U.a,{className:"form-label",children:["Your Name :",Object(w.jsx)("span",{className:"text-danger",children:"*"})]}),Object(w.jsx)("div",{className:"form-icon position-relative",children:Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:"user",className:"fea icon-sm icons"})})}),Object(w.jsx)(V.a,{name:"name",id:"name",type:"text",className:"form-control ps-5",placeholder:"First Name :"})]})}),Object(w.jsx)(j.a,{md:12,children:Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsxs)(U.a,{className:"form-label",children:["Your Email :",Object(w.jsx)("span",{className:"text-danger",children:"*"})]}),Object(w.jsx)("div",{className:"form-icon position-relative",children:Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:"mail",className:"fea icon-sm icons"})})}),Object(w.jsx)(V.a,{name:"email",id:"email",type:"email",className:"form-control ps-5",placeholder:"Your email :"})]})}),Object(w.jsx)(j.a,{md:12,children:Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsxs)(U.a,{className:"form-label",children:["Your Phone no. :",Object(w.jsx)("span",{className:"text-danger",children:"*"})]}),Object(w.jsx)("div",{className:"form-icon position-relative",children:Object(w.jsx)("i",{children:Object(w.jsx)(g.a,{icon:"phone",className:"fea icon-sm icons"})})}),Object(w.jsx)(V.a,{name:"number",id:"number",type:"number",className:"form-control ps-5",placeholder:"Your phone no. :"})]})}),Object(w.jsx)(j.a,{md:12,children:Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsxs)("div",{className:"form-check",children:[Object(w.jsx)(V.a,{type:"checkbox",className:"form-check-input",id:"customCheck1"}),Object(w.jsxs)(U.a,{className:"form-check-label",htmlFor:"customCheck1",children:["I Accept"," ",Object(w.jsx)(p.b,{to:"#",className:"text-primary",children:"Terms And Condition"})]})]})})}),Object(w.jsx)(j.a,{md:12,children:Object(w.jsx)(x.a,{color:"primary",type:"submit",className:"w-100",children:"Register Now"})})]})})]})})})]})})})})})})}}]),s}(r.Component),Z=s(55),Q=s(59),X=s(60),ee=s(54),te=s(73),se=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={instructors:[{img:ee.a,name:"Krista John",post:"Professor"},{img:te.a,name:"Jack John",post:"Professor"},{img:Y.a,name:"Roger Jackson",post:"Professor"},{img:Z.a,name:"Luchhi Cina",post:"Professor"},{img:Q.a,name:"Sophiya Cally",post:"Professor"},{img:X.a,name:"Johnny English",post:"Professor"}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(w.jsx)(M.a,{title:"Our Instructor",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(w.jsx)(d.a,{children:this.state.instructors.map((function(e,t){return Object(w.jsx)(j.a,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)("img",{src:e.img,className:"avatar avatar-medium rounded-circle img-thumbnail",alt:"Landrick"}),Object(w.jsxs)("div",{className:"flex-1 content ms-3",children:[Object(w.jsx)("h5",{className:"mb-0",children:Object(w.jsx)(p.b,{to:"#",className:"text-dark",children:e.name})}),Object(w.jsx)("small",{className:"position text-muted",children:e.post})]})]})},t)}))})]})})}}]),s}(r.Component),ae=s(125),ce=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={reviews:[{id:1,img:Y.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:Z.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:Q.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:X.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:ee.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:te.a,name:"ill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(w.jsx)(M.a,{title:"What Students say ?",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(w.jsx)(ae.a,{reviews:this.state.reviews,colClass:"mt-4"})]})})}}]),s}(r.Component),ie=s(255),ne=s(155),re=s(196),le=s(197),oe=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={blogs:[{id:1,image:ne.a,title:"Design your apps in your own way",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:2,image:re.a,title:"How apps is changing the IT world",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:3,image:le.a,title:"Smartest Applications for Business",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsxs)(m.a,{className:"mt-100 mt-60",children:[Object(w.jsx)(M.a,{title:"Latest News",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(w.jsx)(d.a,{children:Object(w.jsx)(ie.a,{blogs:this.state.blogs})})]})})}}]),s}(r.Component),me=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsx)(y,{}),Object(w.jsx)(S,{}),Object(w.jsx)(L.a,{}),Object(w.jsxs)("section",{className:"section",children:[Object(w.jsx)(F,{}),Object(w.jsx)($,{}),Object(w.jsx)(K,{}),Object(w.jsx)(se,{}),Object(w.jsx)(ce,{}),Object(w.jsx)(oe,{})]})]})}}]),s}(r.Component);t.default=me},96:function(e,t,s){"use strict";t.a=s.p+"static/media/google.1bb5de27.svg"},97:function(e,t,s){"use strict";t.a=s.p+"static/media/lenovo.60fa5b6b.svg"},98:function(e,t,s){"use strict";t.a=s.p+"static/media/amazon.7c6888d1.svg"},99:function(e,t,s){"use strict";t.a=s.p+"static/media/paypal.69c7ddc5.svg"}}]);
//# sourceMappingURL=38.db38628e.chunk.js.map