(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[64],{106:function(e,t,a){"use strict";t.a=a.p+"static/media/shopify.89d8c130.svg"},107:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(46),i=a(4),r=a(0),o=a.n(r),l=a(7),d=a.n(l),m=a(43),b=a.n(m),j=a(44),u={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:j.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,i=e.className,r=e.close,l=e.cssModule,d=e.color,m=e.outline,u=e.size,p=e.tag,h=e.innerRef,g=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(m?"-outline":"")+"-"+d,f=Object(j.mapToCssModules)(b()(i,{close:r},r||"btn",r||O,!!u&&"btn-"+u,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===p&&(p="a");var x=r?"Close":null;return o.a.createElement(p,Object(s.a)({type:"button"===p&&g.onClick?"button":void 0},g,{className:f,ref:h,onClick:this.onClick,"aria-label":a||x}))},t}(o.a.Component);p.propTypes=u,p.defaultProps={color:"secondary",tag:"button"},t.a=p},108:function(e,t,a){"use strict";t.a=a.p+"static/media/spotify.482c49d0.svg"},110:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(43),d=a.n(l),m=a(44),b=o.a.oneOfType([o.a.number,o.a.string]),j=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:b,order:b,offset:b})]),u={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:o.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,n=e.hidden,r=e.widths,o=e.tag,l=e.check,b=e.size,j=e.for,u=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];r.forEach((function(t,s){var c=e[t];if(delete u[t],c||""===c){var n,i=!s;if(Object(m.isObject)(c)){var r,o=i?"-":"-"+t+"-";n=h(i,t,c.size),p.push(Object(m.mapToCssModules)(d()(((r={})[n]=c.size||""===c.size,r["order"+o+c.order]=c.order||0===c.order,r["offset"+o+c.offset]=c.offset||0===c.offset,r))),a)}else n=h(i,t,c),p.push(n)}}));var g=Object(m.mapToCssModules)(d()(t,!!n&&"sr-only",!!l&&"form-check-label",!!b&&"col-form-label-"+b,p,!!p.length&&"col-form-label"),a);return i.a.createElement(o,Object(s.a)({htmlFor:j},u,{className:g}))};g.propTypes=u,g.defaultProps=p,t.a=g},153:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(43),d=a.n(l),m=a(44),b={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},j=function(e){var t=e.className,a=e.cssModule,n=e.row,r=e.disabled,o=e.check,l=e.inline,b=e.tag,j=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),u=Object(m.mapToCssModules)(d()(t,!!n&&"row",o?"form-check":"form-group",!(!o||!l)&&"form-check-inline",!(!o||!r)&&"disabled"),a);return"fieldset"===b&&(j.disabled=r),i.a.createElement(b,Object(s.a)({},j,{className:u}))};j.propTypes=b,j.defaultProps={tag:"div"},t.a=j},253:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(43),d=a.n(l),m=a(44),b={tag:m.tagPropType,wrapTag:m.tagPropType,toggle:o.a.func,className:o.a.string,cssModule:o.a.object,children:o.a.node,closeAriaLabel:o.a.string,charCode:o.a.oneOfType([o.a.string,o.a.number]),close:o.a.object},j=function(e){var t,a=e.className,n=e.cssModule,r=e.children,o=e.toggle,l=e.tag,b=e.wrapTag,j=e.closeAriaLabel,u=e.charCode,p=e.close,h=Object(c.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(m.mapToCssModules)(d()(a,"modal-header"),n);if(!p&&o){var O="number"===typeof u?String.fromCharCode(u):u;t=i.a.createElement("button",{type:"button",onClick:o,className:Object(m.mapToCssModules)("close",n),"aria-label":j},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(b,Object(s.a)({},h,{className:g}),i.a.createElement(l,{className:Object(m.mapToCssModules)("modal-title",n)},r),p||t)};j.propTypes=b,j.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=j},258:function(e,t,a){"use strict";t.a=a.p+"static/media/2.183f34cb.jpg"},259:function(e,t,a){"use strict";t.a=a.p+"static/media/3.1a057574.jpg"},264:function(e,t,a){"use strict";t.a=a.p+"static/media/1.812bb19e.jpg"},265:function(e,t,a){"use strict";t.a=a.p+"static/media/4.e0c71c30.jpg"},435:function(e,t,a){"use strict";t.a=a.p+"static/media/6.6775924a.jpg"},440:function(e,t,a){"use strict";t.a=a.p+"static/media/5.2461b67b.jpg"},48:function(e,t,a){"use strict";var s=a(9),c=a(10),n=a(12),i=a(11),r=a(0),o=a.n(r),l=a(75),d=a(76),m=a(1),b=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)(o.a.Fragment,{children:Object(m.jsx)(l.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(m.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(m.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),a}(r.Component);t.a=b},517:function(e,t,a){"use strict";t.a=a.p+"static/media/3.c1d54869.jpg"},579:function(e,t,a){"use strict";var s=a(9),c=a(10),n=a(12),i=a(11),r=a(0),o=a.n(r),l=a(13),d=a(76),m=a(62),b=a(68),j=a(1),u=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.processes.length;return Object(j.jsx)(o.a.Fragment,{children:this.props.processes.map((function(t,a){return Object(j.jsx)(d.a,{md:"4",className:"mt-4 pt-2",children:Object(j.jsx)(m.a,{className:"work-process border-0 rounded shadow",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)("h4",{className:"title",children:t.title}),Object(j.jsx)("p",{className:"text-muted para",children:t.desc}),Object(j.jsxs)(l.c,{to:t.link,className:"text-primary",children:["Read more ",Object(j.jsx)("i",{className:"mdi mdi-chevron-right"})]}),Object(j.jsxs)("ul",{className:"list-unstyled d-flex justify-content-between mb-0 mt-2",children:[Object(j.jsxs)("li",{className:"step h1 mb-0 fw-bold",children:["Step ",a+1,"."]}),Object(j.jsx)("li",{className:"step-icon",children:Object(j.jsx)("i",{className:a+1===e?"mdi mdi-check-all mdi-36px":"mdi mdi-chevron-double-right mdi-36px"})})]})]})})},a)}))})}}]),a}(r.Component);t.a=u},62:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(43),d=a.n(l),m=a(44),b={tag:m.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},j=function(e){var t=e.className,a=e.cssModule,n=e.color,r=e.body,o=e.inverse,l=e.outline,b=e.tag,j=e.innerRef,u=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.mapToCssModules)(d()(t,"card",!!o&&"text-white",!!r&&"card-body",!!n&&(l?"border":"bg")+"-"+n),a);return i.a.createElement(b,Object(s.a)({},u,{className:p,ref:j}))};j.propTypes=b,j.defaultProps={tag:"div"},t.a=j},68:function(e,t,a){"use strict";var s=a(3),c=a(8),n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(43),d=a.n(l),m=a(44),b={tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},j=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,r=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),l=Object(m.mapToCssModules)(d()(t,"card-body"),a);return i.a.createElement(r,Object(s.a)({},o,{className:l,ref:n}))};j.propTypes=b,j.defaultProps={tag:"div"},t.a=j},891:function(e,t,a){"use strict";a.r(t);var s=a(9),c=a(10),n=a(12),i=a(11),r=a(0),o=a.n(r),l=a(74),d=a(75),m=a(76),b=a(98),j=a(96),u=a(97),p=a(99),h=a(106),g=a(108),O=a(14),f=a(62),x=a(68),v=a(268),N=a(253),y=a(266),k=a(93),w=a(153),T=a(110),M=a(112),C=a(107),L=a(13),E=a(18),P=a.n(E),z=a(48),R=a(579),F=a(264),S=a(258),U=a(259),A=a(265),B=a(440),I=a(435),D=a(1),W=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).openModal=function(){c.setState({isOpen:!c.state.isOpen})},c.state={processes:[{id:1,title:"Discuss The Project",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"},{id:2,title:"Develop & Elaborate",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"},{id:3,title:"Final Approvement",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"}],works:[{imageUrl:F.a,title:"Iphone mockup",subtitle:"Branding"},{imageUrl:S.a,title:"Mockup Collection",subtitle:"Mockup"},{imageUrl:U.a,title:"Abstract images",subtitle:"Abstract"},{imageUrl:A.a,title:"Yellow bg with Books",subtitle:"Books"},{imageUrl:B.a,title:"Company V-card",subtitle:"V-card"},{imageUrl:I.a,title:"Mockup box with paints",subtitle:"Photography"}],isOpen:!1},c.openModal.bind(Object(O.a)(c)),c}return Object(c.a)(a,[{key:"render",value:function(){return Object(D.jsxs)(o.a.Fragment,{children:[Object(D.jsxs)("section",{className:"section",children:[Object(D.jsxs)(l.a,{children:[Object(D.jsx)(z.a,{title:"Work Process",desc:"that can provide everything you need to generate awareness, drive traffic, connect"}),Object(D.jsx)(d.a,{children:Object(D.jsx)(R.a,{processes:this.state.processes})})]}),Object(D.jsxs)(l.a,{className:"mt-100 pt-50",children:[Object(D.jsx)(z.a,{title:"Our Latest Projects",desc:"that can provide everything you need to generate awareness, drive traffic, connect"}),Object(D.jsx)(d.a,{children:this.state.works.map((function(e,t){return Object(D.jsx)(m.a,{lg:"6",md:"6",className:"mt-4 pt-2",children:Object(D.jsx)(f.a,{className:"border-0 work-container work-classic",children:Object(D.jsxs)(x.a,{className:"p-0",children:[Object(D.jsx)(L.c,{to:"page-work-detail",children:Object(D.jsx)("img",{src:e.imageUrl,className:"img-fluid rounded work-image",alt:"work"})}),Object(D.jsxs)("div",{className:"content pt-3",children:[Object(D.jsx)("h5",{className:"mb-0",children:Object(D.jsx)(L.c,{to:"page-work-detail",className:"text-dark title",children:e.title})}),Object(D.jsx)("h6",{className:"text-muted tag mb-0",children:e.subtitle})]})]})})},t)}))}),Object(D.jsx)(d.a,{className:"justify-content-center",children:Object(D.jsx)(m.a,{xs:"12",className:"text-center mt-4 pt-2",children:Object(D.jsxs)(L.c,{to:"page-work-modern",className:"btn btn-primary",children:["See More ",Object(D.jsx)("i",{className:"mdi mdi-arrow-right"})]})})})]}),Object(D.jsx)(l.a,{className:"mt-100 mt-60",children:Object(D.jsx)(d.a,{className:"justify-content-center",children:Object(D.jsx)(m.a,{xs:"12",className:"text-center",children:Object(D.jsxs)("div",{className:"section-title",children:[Object(D.jsx)("h4",{className:"title mb-4",children:"See everything about your workplace"}),Object(D.jsxs)("p",{className:"text-muted para-desc mx-auto mb-0",children:["Start working with"," ",Object(D.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(D.jsxs)("div",{className:"mt-3",children:[Object(D.jsxs)("a",{href:"https://1.envato.market/landrickreactjs",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mt-2 me-2",children:["Buy Now"," ",Object(D.jsx)("span",{className:"badge rounded-pill bg-danger ms-2",children:"v3.1"})]}),Object(D.jsxs)(L.c,{to:"#",className:"btn btn-outline-primary mt-2 ms-1",onClick:this.openModal,children:[Object(D.jsx)("i",{className:"mdi mdi-account-check-outline"})," Free Trial"]})]})]})})})})]}),Object(D.jsxs)(v.a,{isOpen:this.state.isOpen,role:"dialog",centered:!0,children:[Object(D.jsx)(N.a,{toggle:this.openModal,children:"15 Days Free Trail"}),Object(D.jsx)(y.a,{children:Object(D.jsx)("div",{className:"bg-white p-3 rounded box-shadow",children:Object(D.jsx)(k.a,{children:Object(D.jsxs)(d.a,{children:[Object(D.jsx)(m.a,{lg:12,children:Object(D.jsxs)(w.a,{className:"position-relative",children:[Object(D.jsxs)(T.a,{className:"form-label",children:["Name : ",Object(D.jsx)("span",{className:"text-danger",children:"*"})]}),Object(D.jsx)("i",{children:Object(D.jsx)(P.a,{icon:"user",className:"fea icon-sm icons"})}),Object(D.jsx)(M.a,{type:"text",className:"form-control ps-5",placeholder:"Name",name:"name",required:""})]})}),Object(D.jsx)(m.a,{lg:12,children:Object(D.jsxs)(w.a,{className:"position-relative",children:[Object(D.jsxs)(T.a,{className:"form-label",children:["Email : ",Object(D.jsx)("span",{className:"text-danger",children:"*"})]}),Object(D.jsx)("i",{children:Object(D.jsx)(P.a,{icon:"mail",className:"fea icon-sm icons"})}),Object(D.jsx)(M.a,{type:"email",className:"form-control ps-5",placeholder:"Email",name:"email",required:""})]})}),Object(D.jsx)(m.a,{lg:12,children:Object(D.jsxs)(w.a,{className:"position-relative",children:[Object(D.jsxs)(T.a,{className:"form-label",children:["Password : ",Object(D.jsx)("span",{className:"text-danger",children:"*"})]}),Object(D.jsx)("i",{children:Object(D.jsx)(P.a,{icon:"lock",className:"fea icon-sm icons"})}),Object(D.jsx)(M.a,{type:"password",className:"form-control ps-5",placeholder:"Password",required:""})]})}),Object(D.jsx)(m.a,{lg:12,className:"mt-2 mb-0",children:Object(D.jsx)(C.a,{color:"primary",block:!0,children:"Login"})})]})})})})]})]})}}]),a}(r.Component),q=a(517),Y=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(D.jsx)(o.a.Fragment,{children:Object(D.jsx)("section",{className:"bg-half-170 d-table w-100",style:{background:"url(".concat(q.a,") center center")},id:"home",children:Object(D.jsx)(l.a,{children:Object(D.jsx)(d.a,{className:"position-relative align-items-center pt-4",children:Object(D.jsx)(m.a,{lg:{size:7,offset:5},children:Object(D.jsxs)("div",{className:"title-heading studio-home bg-white rounded shadow mt-5",children:[Object(D.jsxs)("h1",{className:"heading mb-3",children:["Present Your Work With"," ",Object(D.jsx)("span",{className:"text-primary",children:"Landrick"})," Studio"]}),Object(D.jsx)("p",{className:"para-desc text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(D.jsxs)("div",{className:"mt-4",children:[Object(D.jsxs)(L.c,{to:"/page-contact-one",className:"btn btn-primary mt-2 me-2",children:[Object(D.jsx)("i",{className:"uil uil-phone"})," Get Started"]}),Object(D.jsxs)(L.c,{to:"/documentation",className:"btn btn-outline-primary mt-2 ms-1",children:[Object(D.jsx)("i",{className:"uil uil-book-alt"})," Documentation"]})]})]})})})})})})}}]),a}(r.Component),J=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},c.state={partners:[{image:b.a},{image:j.a},{image:u.a},{image:p.a},{image:h.a},{image:g.a}]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("topnav").classList.add("bg-white"),window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(D.jsxs)(o.a.Fragment,{children:[Object(D.jsx)(Y,{}),Object(D.jsx)("section",{className:"py-4 bg-light",children:Object(D.jsx)(l.a,{children:Object(D.jsx)(d.a,{className:"justify-content-center",children:this.state.partners.map((function(e,t){return Object(D.jsx)(m.a,{lg:2,md:2,xs:6,className:"text-center py-4",children:Object(D.jsx)("img",{src:e.image,className:"avatar avatar-ex-sm",alt:"Landrick"})},t)}))})})}),Object(D.jsx)(W,{})]})}}]),a}(r.Component);t.default=J},96:function(e,t,a){"use strict";t.a=a.p+"static/media/google.1bb5de27.svg"},97:function(e,t,a){"use strict";t.a=a.p+"static/media/lenovo.60fa5b6b.svg"},98:function(e,t,a){"use strict";t.a=a.p+"static/media/amazon.7c6888d1.svg"},99:function(e,t,a){"use strict";t.a=a.p+"static/media/paypal.69c7ddc5.svg"}}]);
//# sourceMappingURL=64.3a707481.chunk.js.map