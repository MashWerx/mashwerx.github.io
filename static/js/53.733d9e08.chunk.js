(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[53],{155:function(e,t,s){"use strict";t.a=s.p+"static/media/01.3be58610.jpg"},196:function(e,t,s){"use strict";t.a=s.p+"static/media/02.697b47ef.jpg"},197:function(e,t,s){"use strict";t.a=s.p+"static/media/03.1b601f78.jpg"},252:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(1),d=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsxs)(l.a.Fragment,{children:[this.props.children?this.props.children:Object(o.jsx)("h4",{className:"title mb-4",children:this.props.title}),Object(o.jsxs)("p",{className:"text-muted",children:["You can combine all the ",Object(o.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," "," ",this.props.desc," "]}),Object(o.jsx)("ul",{className:"list-unstyled text-muted",name:"featurelines",children:this.props.features.map((function(t,s){return Object(o.jsxs)("li",{className:"mb-0",children:[Object(o.jsx)("span",{className:"text-primary h5 me-2",children:Object(o.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},s)}))})]})}}]),s}(r.Component);t.a=d},255:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(76),d=s(62),m=s(149),j=s(68),u=s(13),b=s(1),h=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(b.jsx)(l.a.Fragment,{children:this.props.blogs.map((function(e,t){return Object(b.jsx)(o.a,{lg:"4",md:"6",className:"mt-4 pt-2",name:"blog",children:Object(b.jsxs)(d.a,{className:"blog rounded border-0 shadow",children:[Object(b.jsxs)("div",{className:"position-relative",children:[Object(b.jsx)(m.a,{top:!0,src:e.image,className:"rounded-top",alt:""}),Object(b.jsx)("div",{className:"overlay rounded-top bg-dark"})]}),Object(b.jsxs)(j.a,{className:"content",children:[Object(b.jsx)("h5",{children:Object(b.jsx)(u.c,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(b.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(b.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(b.jsx)("li",{className:"list-inline-item me-2  mb-0",children:Object(b.jsxs)(u.c,{to:"#",className:"text-muted like",children:[Object(b.jsx)("i",{className:"uil uil-heart me-1"}),e.like]})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsxs)(u.c,{to:"#",className:"text-muted comments",children:[Object(b.jsx)("i",{className:"uil uil-comment me-1"}),e.comment]})})]}),Object(b.jsxs)(u.c,{to:"/page-blog-detail",className:"text-muted readmore",children:["Read More ",Object(b.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})]}),Object(b.jsxs)("div",{className:"author",children:[Object(b.jsxs)("small",{className:"text-light user d-block",children:[Object(b.jsx)("i",{className:"mdi mdi-account"})," ",e.autor]}),Object(b.jsxs)("small",{className:"text-light date",children:[Object(b.jsx)("i",{className:"mdi mdi-calendar-check"})," ",e.date]})]})]})},t)}))})}}]),s}(r.Component);t.a=h},257:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(75),d=s(76),m=s(1),j=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{children:this.props.featureArray.map((function(t,s){return Object(m.jsx)(d.a,{md:4,xs:12,name:"featurebox",children:Object(m.jsxs)("div",{className:e.props.isCenter?"features text-center":"features mt-5",children:[Object(m.jsx)("div",{className:"image position-relative d-inline-block",children:Object(m.jsx)("i",{className:t.icon})}),Object(m.jsxs)("div",{className:"content mt-4",children:[Object(m.jsx)("h5",{children:t.title}),Object(m.jsx)("p",{className:"text-muted mb-0",children:t.description})]})]})},s)}))})})}}]),s}(r.Component);t.a=j},451:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(13),d=s(76),m=s(62),j=s(68),u=s(1),b=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)(l.a.Fragment,{children:this.props.pricings.map((function(e,t){return Object(u.jsx)(d.a,{name:"pricing",lg:"3",md:"6",xs:"12",className:"mt-4 pt-2",children:Object(u.jsxs)(m.a,{name:"pricingbox",className:e.isActive?"pricing-rates business-rate shadow bg-white border-0 rounded":"pricing-rates business-rate bg-light shadow border-0 rounded",children:[e.isActive&&Object(u.jsx)("div",{className:"ribbon ribbon-right ribbon-warning overflow-hidden",children:Object(u.jsx)("span",{className:"text-center d-block shadow small h6",children:"Best"})}),Object(u.jsxs)(j.a,{children:[Object(u.jsx)("h6",{className:(e.isActive,"title fw-bold text-uppercase text-primary mb-4"),children:e.title}),Object(u.jsxs)("div",{className:"d-flex mb-4",name:"pricingsection",children:[Object(u.jsx)("span",{className:"h4 mb-0 mt-2",children:"$"}),Object(u.jsx)("span",{className:"price h1 mb-0",children:e.price}),Object(u.jsxs)("span",{className:"h4 align-self-end mb-1",children:["/",e.duration]})]}),Object(u.jsx)("ul",{className:"list-unstyled mb-0 ps-0",children:e.features.map((function(e,t){return Object(u.jsxs)("li",{className:"h6 text-muted mb-0",children:[Object(u.jsx)("span",{className:"text-primary h5 me-2",children:Object(u.jsx)("i",{className:"uil uil-check-circle align-middle"})}),e.title]},t)}))}),Object(u.jsx)(o.c,{to:"",className:"btn btn-primary mt-4",children:e.buttonText})]})]})},t)}))})}}]),s}(r.Component);t.a=b},471:function(e,t,s){"use strict";t.a=s.p+"static/media/user.124786e3.svg"},478:function(e,t,s){"use strict";t.a=s.p+"static/media/calendar.0ec6f848.svg"},48:function(e,t,s){"use strict";var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(75),d=s(76),m=s(1),j=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(m.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(m.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),s}(r.Component);t.a=j},512:function(e,t,s){"use strict";t.a=s.p+"static/media/Mobile_notification_SVG.03a47a07.svg"},515:function(e,t,s){"use strict";t.a=s.p+"static/media/sand-clock.4e026b5f.svg"},517:function(e,t,s){"use strict";t.a=s.p+"static/media/3.c1d54869.jpg"},53:function(e,t,s){"use strict";t.a=s.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,s){"use strict";t.a=s.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,s){"use strict";t.a=s.p+"static/media/02.7df14e12.jpg"},575:function(e,t,s){"use strict";t.a=s.p+"static/media/pen.376f53c9.svg"},576:function(e,t,s){"use strict";t.a=s.p+"static/media/video.2e38bf51.svg"},577:function(e,t,s){"use strict";t.a=s.p+"static/media/intellectual.b0a451ca.svg"},59:function(e,t,s){"use strict";t.a=s.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,s){"use strict";t.a=s.p+"static/media/04.35463172.jpg"},73:function(e,t,s){"use strict";t.a=s.p+"static/media/06.7365b7fa.jpg"},880:function(e,t,s){"use strict";s.r(t);var a=s(9),i=s(10),n=s(12),c=s(11),r=s(0),l=s.n(r),o=s(13),d=s(74),m=s(75),j=s(76),u=s.p+"static/media/enterprise.13a663b6.png",b=s(1),h=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsxs)("section",{className:"bg-half-260 bg-primary d-table w-100",style:{background:"url(".concat(u,") center center")},children:[Object(b.jsx)("div",{className:"bg-overlay"}),Object(b.jsx)(d.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(j.a,{xs:12,children:Object(b.jsxs)("div",{className:"title-heading text-center mt-4",children:[Object(b.jsx)("h1",{className:"display-4 title-dark fw-bold text-white mb-3",children:"Starting in Strong Way"}),Object(b.jsx)("p",{className:"para-desc mx-auto text-white-50",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."}),Object(b.jsx)("div",{className:"mt-4 pt-2",children:Object(b.jsxs)(o.c,{to:"#",className:"btn btn-primary",children:[Object(b.jsx)("i",{className:"uil uil-envelope"})," Get Started"]})})]})})})})]}),Object(b.jsx)("div",{className:"position-relative",children:Object(b.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(b.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),x=s(14),p=s(62),O=s(68),g=s(105),f=s(93),v=s(110),y=s(112),N=s(107),w=s(18),k=s.n(w),I=s(48),C=s(252),L=s(257),S=s(575),E=s(576),T=s(577),F=s(471),A=s(478),B=s(515),M=s(512),D=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={features:[{id:1,icon:"uil uil-edit-alt h1 text-primary",imgUrl:S.a,title:"Design & Development",description:"Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper."},{id:2,icon:"uil uil-vector-square h1 text-primary",imgUrl:E.a,title:"Management & Marketing",description:"Allegedly, a Latin scholar established the origin of the text by established compiling unusual word."},{id:3,icon:"uil uil-file-search-alt h1 text-primary",imgUrl:T.a,title:"Stratagy & Research",description:"It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today."},{id:4,icon:"uil uil-airplay h1 text-primary",imgUrl:F.a,title:"Easy To Use",description:"Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper."},{id:5,icon:"uil uil-calendar-alt h1 text-primary",imgUrl:A.a,title:"Daily Reports",description:"Allegedly, a Latin scholar established the origin of the text by compiling unusual established word."},{id:6,icon:"uil uil-clock h1 text-primary",imgUrl:B.a,title:"Real Time Zone",description:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today."}],features_lines:[{title:"Digital Marketing Solutions for Tomorrow"},{title:"Our Talented & Experienced Marketing Agency"},{title:"Create your own skin to match your brand"}],Contactvisible:!1},i.handleSubmit=i.handleSubmit.bind(Object(x.a)(i)),i}return Object(i.a)(s,[{key:"componentDidMount",value:function(){for(var e=document.getElementsByName("featurebox"),t=0;t<e.length;t++)e[t].classList.add("mt-5")}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({Contactvisible:!0})}},{key:"render",value:function(){var e=this;return Object(b.jsx)(l.a.Fragment,{children:Object(b.jsxs)("section",{className:"section",children:[Object(b.jsxs)(d.a,{children:[Object(b.jsx)(I.a,{title:"What We Do ?",desc:" that can provide everything you need to generate awareness, drive traffic, connect"}),Object(b.jsx)(L.a,{featureArray:this.state.features,isCenter:!0})]}),Object(b.jsx)(d.a,{className:"mt-100 mt-60",children:Object(b.jsxs)(m.a,{className:"align-items-center",children:[Object(b.jsx)(j.a,{lg:"7",md:{size:6,order:1},xs:{order:2},className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)(C.a,{desc:"Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.",features:this.state.features_lines,class:"",children:Object(b.jsxs)("h4",{className:"title mb-4",children:["Speed up your development ",Object(b.jsx)("br",{})," with"," ",Object(b.jsx)("span",{className:"text-primary",children:"Landrick."})]})}),Object(b.jsxs)(o.c,{to:"#",className:"mt-3 h6 text-primary",children:["Find Out More ",Object(b.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})]})}),Object(b.jsx)(j.a,{lg:"5",md:{size:6,order:2},xs:{order:1},children:Object(b.jsx)(p.a,{className:"rounded border-0 shadow ms-lg-5",children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)("img",{src:M.a,alt:""}),Object(b.jsxs)("div",{className:"content mt-4 pt-2",children:[Object(b.jsx)(g.a,{color:"primary",isOpen:this.state.Contactvisible,toggle:function(){e.setState({Contactvisible:!e.state.Contactvisible})},children:"Contact details send successfully."}),Object(b.jsx)(f.a,{onSubmit:this.handleSubmit,children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(j.a,{lg:"12",children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsxs)(v.a,{className:"form-label",children:["Name : ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("div",{className:"form-icon position-relative",children:Object(b.jsx)("i",{children:Object(b.jsx)(k.a,{icon:"user",className:"fea icon-sm icons"})})}),Object(b.jsx)(y.a,{type:"text",className:"form-control ps-5",placeholder:"Name",name:"name",required:!0})]})}),Object(b.jsx)(j.a,{lg:"12",children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsxs)(v.a,{className:"form-label",children:["Email : ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("div",{className:"form-icon position-relative",children:Object(b.jsx)("i",{children:Object(b.jsx)(k.a,{icon:"mail",className:"fea icon-sm icons"})})}),Object(b.jsx)(y.a,{type:"email",className:"form-control ps-5",placeholder:"Email",name:"email",required:!0})]})}),Object(b.jsx)(j.a,{lg:"12",children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsxs)(v.a,{className:"form-label",children:["Password :"," ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("div",{className:"form-icon position-relative",children:Object(b.jsx)("i",{children:Object(b.jsx)(k.a,{icon:"lock",className:"fea icon-sm icons"})})}),Object(b.jsx)(y.a,{type:"password",className:"form-control ps-5",placeholder:"Password",required:!0})]})}),Object(b.jsx)(j.a,{lg:"12",className:"mt-2 mb-0",children:Object(b.jsx)(N.a,{color:"primary",type:"submit",className:"w-100",children:"Download"})})]})})]})]})})})]})})]})})}}]),s}(r.Component),H=s(109),U=s.n(H),q=s(157),V=s(119),R=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={activeIndex:0},i.onExiting=i.onExiting.bind(Object(x.a)(i)),i.onExited=i.onExited.bind(Object(x.a)(i)),i.next=i.next.bind(Object(x.a)(i)),i.previous=i.previous.bind(Object(x.a)(i)),i.goToIndex=i.goToIndex.bind(Object(x.a)(i)),i}return Object(i.a)(s,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.clients.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.clients.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)(l.a.Fragment,{children:Object(b.jsx)(q.a,{activeIndex:this.state.activeIndex,next:this.next,previous:this.previous,children:this.props.clients.map((function(t,s){return Object(b.jsx)(V.a,{onExiting:e.onExiting(),onExited:e.onExited(),children:Object(b.jsxs)("div",{className:"customer-testi text-center mx-4",children:[Object(b.jsx)("img",{src:t.image,style:{height:65,width:65},className:"img-fluid avatar avatar-small rounded-circle mx-auto shadow",alt:""}),Object(b.jsxs)("p",{className:"text-light para-dark h5 font-weight-normal fst-italic mt-4",children:['" ',t.desc,' "']}),Object(b.jsx)(U.a,{rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",className:"list-unstyled mb-0"}),Object(b.jsxs)("h6",{className:"text-light title-dark mt-1",children:["- ",t.name,Object(b.jsx)("small",{className:"text-muted ms-1",children:t.post})]})]},s)},s+1)}))})})}}]),s}(r.Component),W=s(517),Z=s(53),_=s(55),G=s(59),J=s(60),P=s(54),z=s(73),Y=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={clients:[{id:1,image:Z.a,name:"Thomas Israel",rating:5,desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."},{id:2,image:_.a,name:"Carl Oliver",rating:4,desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.."},{id:3,image:G.a,name:"Barbara McIntosh",rating:3.5,desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."},{id:4,image:J.a,name:"Jill Webb",rating:4.5,desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find"},{id:5,image:P.a,name:" Dean Tolle",rating:5,desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories."},{id:6,image:z.a,name:"Christa Smith",rating:5,desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."}]},i}return Object(i.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsxs)("section",{className:"section",style:{background:"url(".concat(W.a,") center center")},children:[Object(b.jsx)("div",{className:"bg-overlay"}),Object(b.jsx)(d.a,{children:Object(b.jsx)(m.a,{className:"py-5 justify-content-center",children:Object(b.jsx)(j.a,{lg:"8",className:"text-center",children:Object(b.jsx)(R,{clients:this.state.clients,items:1})})})})]}),Object(b.jsx)("div",{className:"position-relative",children:Object(b.jsx)("div",{className:"shape overflow-hidden text-white",children:Object(b.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),$=s(451),K=s(255),Q=s(155),X=s(196),ee=s(197),te=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={pricings:[{id:1,title:"Free",price:0,duration:"mo",buttonText:"Buy Now",btnLink:"",features:[{title:"Full Access"},{title:"Source Files"}]},{id:2,title:"Starter",price:39,duration:"mo",buttonText:"Get Started",btnLink:"",isActive:!0,features:[{title:"Full Access"},{title:"Source Files"},{title:"Free Appointments"}]},{id:3,title:"PROFESSIONAL",price:59,duration:"mo",buttonText:"Try It Now",btnLink:"",features:[{title:"Full Access"},{title:"Source Files"},{title:"1 Domain Free"},{title:"Enhanced Security"}]},{id:4,title:"ULTIMATE",price:79,duration:"mo",buttonText:"Started Now",btnLink:"",features:[{title:"Full Access"},{title:"Enhanced Security"},{title:"Source Files"},{title:"1 Domain Free"},{title:"Free Installment"}]}],blogs:[{id:1,image:Q.a,title:"Design your apps in your own way",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:2,image:X.a,title:"How apps is changing the IT world",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:3,image:ee.a,title:"Smartest Applications for Business",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"}]},i}return Object(i.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsxs)("section",{className:"section",children:[Object(b.jsxs)(d.a,{children:[Object(b.jsx)(I.a,{title:"Charge your creative inspiration",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(b.jsx)(m.a,{id:"pricing",children:Object(b.jsx)($.a,{pricings:this.state.pricings})})]}),Object(b.jsxs)(d.a,{className:"mt-100 mt-60",children:[Object(b.jsx)(I.a,{title:"Latest News",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(b.jsx)(m.a,{children:Object(b.jsx)(K.a,{blogs:this.state.blogs})})]}),Object(b.jsxs)(d.a,{className:"mt-100 mt-60",children:[Object(b.jsx)(I.a,{title:"Schedule a demo with us",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(b.jsx)(m.a,{className:"justify-content-center mt-4",children:Object(b.jsx)(j.a,{lg:"7",md:"10",children:Object(b.jsx)("div",{className:"subcribe-form",children:Object(b.jsxs)("form",{className:"ms-0",children:[Object(b.jsx)("input",{type:"email",id:"email",name:"email",className:"bg-white shadow rounded-pill",placeholder:"E-mail :"}),Object(b.jsxs)("button",{type:"submit",className:"btn btn-pills btn-primary",children:["Submit ",Object(b.jsx)("i",{className:"uil uil-angle-right-b align-middle"})]})]})})})})]})]}),Object(b.jsx)("div",{className:"position-relative",children:Object(b.jsx)("div",{className:"shape overflow-hidden text-footer",children:Object(b.jsx)("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})})})})]})}}]),s}(r.Component),se=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("topnav").classList.add("nav-sticky"),document.getElementById("buyButton").className="btn btn-primary"):(document.getElementById("topnav").classList.remove("nav-sticky"),document.getElementById("buyButton").className="btn btn-light")},i.state={},i}return Object(i.a)(s,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),document.getElementById("buyButton").className="btn btn-light",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(b.jsxs)(l.a.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(D,{}),Object(b.jsx)(Y,{}),Object(b.jsx)(te,{})]})}}]),s}(r.Component);t.default=se}}]);
//# sourceMappingURL=53.733d9e08.chunk.js.map