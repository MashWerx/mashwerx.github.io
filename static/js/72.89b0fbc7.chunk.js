(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[72],{106:function(e,t,s){"use strict";t.a=s.p+"static/media/shopify.89d8c130.svg"},108:function(e,t,s){"use strict";t.a=s.p+"static/media/spotify.482c49d0.svg"},125:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(14),c=s(12),r=s(11),l=s(0),o=s.n(l),m=s(75),d=s(76),j=s(109),u=s.n(j),h=s(1),b=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?i.setState({itemCount:3,cols:4}):window.outerWidth<=970&&i.setState({itemCount:1,cols:12})},i.state={cols:4,step1:!0,step2:!1},i.updateWindowSize.bind(Object(n.a)(i)),i}return Object(i.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)(m.a,{className:"justify-content-center",children:Object(h.jsxs)(d.a,{lg:"12",className:"mt-4",children:[Object(h.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(h.jsx)("div",{className:"tiny-slide",children:Object(h.jsx)(m.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,s){return s>=0&&s<=2?Object(h.jsx)(d.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(u.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null})):this.props.reviews.map((function(t,s){return s>=3&&s<=5?Object(h.jsx)(d.a,{md:e.state.cols,className:"mb-1",children:Object(h.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(h.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(h.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(h.jsx)(u.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(h.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(h.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(h.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},s):null}))})})}),Object(h.jsxs)("div",{className:"tns-nav",children:[Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),s}(l.Component);t.a=b},252:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(1),m=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsxs)(l.a.Fragment,{children:[this.props.children?this.props.children:Object(o.jsx)("h4",{className:"title mb-4",children:this.props.title}),Object(o.jsxs)("p",{className:"text-muted",children:["You can combine all the ",Object(o.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," "," ",this.props.desc," "]}),Object(o.jsx)("ul",{className:"list-unstyled text-muted",name:"featurelines",children:this.props.features.map((function(t,s){return Object(o.jsxs)("li",{className:"mb-0",children:[Object(o.jsx)("span",{className:"text-primary h5 me-2",children:Object(o.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},s)}))})]})}}]),s}(r.Component);t.a=m},257:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(75),m=s(76),d=s(1),j=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(d.jsx)(l.a.Fragment,{children:Object(d.jsx)(o.a,{children:this.props.featureArray.map((function(t,s){return Object(d.jsx)(m.a,{md:4,xs:12,name:"featurebox",children:Object(d.jsxs)("div",{className:e.props.isCenter?"features text-center":"features mt-5",children:[Object(d.jsx)("div",{className:"image position-relative d-inline-block",children:Object(d.jsx)("i",{className:t.icon})}),Object(d.jsxs)("div",{className:"content mt-4",children:[Object(d.jsx)("h5",{children:t.title}),Object(d.jsx)("p",{className:"text-muted mb-0",children:t.description})]})]})},s)}))})})}}]),s}(r.Component);t.a=j},471:function(e,t,s){"use strict";t.a=s.p+"static/media/user.124786e3.svg"},478:function(e,t,s){"use strict";t.a=s.p+"static/media/calendar.0ec6f848.svg"},48:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(75),m=s(76),d=s(1),j=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsx)(l.a.Fragment,{children:Object(d.jsx)(o.a,{className:"justify-content-center",children:Object(d.jsx)(m.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(d.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(d.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(d.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(d.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),s}(r.Component);t.a=j},515:function(e,t,s){"use strict";t.a=s.p+"static/media/sand-clock.4e026b5f.svg"},53:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,s){"use strict";t.a=s.p+"static/media/02.7df14e12.jpg"},574:function(e,t,s){"use strict";t.a=s.p+"static/media/classic02.2399a891.png"},59:function(e,t,s){"use strict";t.a=s.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,s){"use strict";t.a=s.p+"static/media/04.35463172.jpg"},73:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"},874:function(e,t,s){"use strict";s.r(t);var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(74),m=s(75),d=s(76),j=s(471),u=s(478),h=s(515),b=s(98),p=s(96),x=s(97),O=s(99),g=s(106),f=s(108),v=s(13),N=s.p+"static/media/home-shape.2c2a6ab1.png",y=s.p+"static/media/home.039a29fb.png",w=s(1),k=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(w.jsx)(l.a.Fragment,{children:Object(w.jsx)("section",{className:"bg-home d-flex align-items-center",style:{background:"url(".concat(N,")"),backgroundPosition:"center center",height:"auto"},id:"home",children:Object(w.jsx)(o.a,{children:Object(w.jsx)(m.a,{className:"justify-content-center",children:Object(w.jsxs)(d.a,{lg:"12",className:"text-center mt-0 mt-md-5 pt-0 pt-md-5",children:[Object(w.jsxs)("div",{className:"title-heading margin-top-100",children:[Object(w.jsx)("h1",{className:"heading mb-3",children:"Build fast, released quickly."}),Object(w.jsx)("p",{className:"para-desc mx-auto text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(w.jsx)("div",{className:"mt-4 pt-2",children:Object(w.jsxs)(v.c,{to:"#about",className:"btn btn-primary",children:["Start Free Trial ",Object(w.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]}),Object(w.jsx)("div",{className:"home-dashboard",children:Object(w.jsx)("img",{src:y,alt:"",className:"img-fluid"})})]})})})})})}}]),s}(r.Component),C=s(48),L=s(257),S=s(574),T=s.p+"static/media/app_development_SVG.5374a95f.svg",F=s(252),I=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={features:[{title:"Digital Marketing Solutions for Tomorrow"},{title:"Create your own skin to match your brand"}],features2:[{title:"Digital Marketing Solutions for Tomorrow"},{title:"Create your own skin to match your brand"}]},i}return Object(i.a)(s,[{key:"render",value:function(){return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsx)(o.a,{className:"mt-100 mt-60",children:Object(w.jsxs)(m.a,{className:"align-items-center",children:[Object(w.jsx)(d.a,{lg:6,md:6,children:Object(w.jsx)("img",{src:S.a,className:"img-fluid shadow rounded",alt:""})}),Object(w.jsx)(d.a,{lg:6,md:6,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(w.jsxs)("div",{className:"section-title ms-lg-5",children:[Object(w.jsx)(F.a,{title:"Great Product Analytics With Real Problem",desc:"Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.",features:this.state.features,class:""}),Object(w.jsxs)(v.c,{to:"#",className:"mt-3 h6 text-primary",children:["Find Out More ",Object(w.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})})]})}),Object(w.jsx)(o.a,{className:"mt-100 mt-60",children:Object(w.jsxs)(m.a,{className:"align-items-center",children:[Object(w.jsx)(d.a,{lg:7,md:{size:6,order:1},xs:{order:2},className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(w.jsxs)("div",{className:"section-title me-lg-5",children:[Object(w.jsx)(F.a,{title:"Get Notified About Importent Email",desc:"This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.",features:this.state.features2,class:""}),Object(w.jsxs)(v.c,{to:"#",className:"mt-3 h6 text-primary",children:["Find Out More ",Object(w.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})}),Object(w.jsx)(d.a,{lg:"5",md:{size:6,order:2},xs:{order:1},children:Object(w.jsx)("img",{src:T,alt:""})})]})})]})}}]),s}(r.Component),W=s(125),D=s(53),M=s(55),z=s(59),E=s(60),A=s(54),B=s(73),U=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={reviews:[{id:1,img:D.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:M.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:z.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:E.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:A.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:B.a,name:"ill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}]},i}return Object(i.a)(s,[{key:"render",value:function(){return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsxs)(o.a,{className:"mt-100 mt-60",children:[Object(w.jsx)(m.a,{className:"justify-content-center",children:Object(w.jsx)(d.a,{xs:12,className:"text-center",children:Object(w.jsxs)("div",{className:"section-title mb-4 pb-2",children:[Object(w.jsxs)("h4",{className:"title mb-4",children:["Whats Our Clients Said About"," ",Object(w.jsx)("span",{className:"text-primary",children:"Landrick"})," Project"]}),Object(w.jsxs)("p",{className:"text-muted para-desc mx-auto mb-0",children:["Start working with"," ",Object(w.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})})}),Object(w.jsx)(W.a,{reviews:this.state.reviews,colClass:"mt-4"})]}),Object(w.jsx)(o.a,{className:"pb-lg-4 mb-md-5 mb-4 mt-100 mt-60",children:Object(w.jsx)(m.a,{className:"justify-content-center",children:Object(w.jsx)(d.a,{xs:"12",className:"text-center",children:Object(w.jsxs)("div",{className:"section-title",children:[Object(w.jsx)("h4",{className:"title mb-4",children:"See everything about your employee at one place."}),Object(w.jsxs)("p",{className:"text-muted para-desc mx-auto mb-0",children:["Start working with"," ",Object(w.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(w.jsxs)("div",{className:"mt-4",children:[Object(w.jsx)(v.c,{to:"#",className:"btn btn-primary mt-2 me-2",children:"Get Started Now"}),Object(w.jsx)(v.c,{to:"#",className:"btn btn-outline-primary mt-2",children:"Free Trial"})]})]})})})})]})}}]),s}(r.Component),G=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},i.state={partners:[{image:b.a},{image:p.a},{image:x.a},{image:O.a},{image:g.a},{image:f.a}]},i}return Object(i.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0);for(var e=document.getElementsByClassName("features"),t=0;t<e.length;t++)e[t].classList.remove("mt-5")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){var e=[{id:1,icon:"uil uil-airplay h1 text-primary",title:"Easy To Use",description:"Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper. ",imgUrl:j.a},{id:2,icon:"uil uil-calendar-alt h1 text-primary",title:"Daily Reports",description:"Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",imgUrl:u.a},{id:3,icon:"uil uil-clock h1 text-primary",title:"Real Time Zone",description:"It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",imgUrl:h.a}];return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsx)(k,{}),Object(w.jsx)("section",{className:"section bg-light mt-0 mt-md-5",children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(C.a,{title:"Our Trusted Clients",desc:"that can provide everything you need to generate awareness, drive traffic, connect."}),Object(w.jsx)(m.a,{className:"justify-content-center",children:this.state.partners.map((function(e,t){return Object(w.jsx)(d.a,{lg:2,md:2,xs:6,className:"text-center mt-4 pt-2",children:Object(w.jsx)("img",{src:e.image,className:"avatar avatar-ex-sm",alt:"Landrick"})},t)}))})]})}),Object(w.jsxs)("section",{className:"section",children:[Object(w.jsx)(o.a,{children:Object(w.jsx)(L.a,{featureArray:e,isCenter:!1})}),Object(w.jsx)(I,{}),Object(w.jsx)(U,{})]}),Object(w.jsx)("div",{className:"position-relative",children:Object(w.jsx)("div",{className:"shape overflow-hidden text-footer",children:Object(w.jsx)("svg",{viewBox:"0 0 2880 250",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M720 125L2160 0H2880V250H0V125H720Z",fill:"currentColor"})})})})]})}}]),s}(r.Component);t.default=G},96:function(e,t,s){"use strict";t.a=s.p+"static/media/google.1bb5de27.svg"},97:function(e,t,s){"use strict";t.a=s.p+"static/media/lenovo.60fa5b6b.svg"},98:function(e,t,s){"use strict";t.a=s.p+"static/media/amazon.7c6888d1.svg"},99:function(e,t,s){"use strict";t.a=s.p+"static/media/paypal.69c7ddc5.svg"}}]);
//# sourceMappingURL=72.89b0fbc7.chunk.js.map