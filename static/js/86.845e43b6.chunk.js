(this.webpackJsonpMashwerx=this.webpackJsonpMashwerx||[]).push([[86],{106:function(e,t,a){"use strict";t.a=a.p+"static/media/shopify.89d8c130.svg"},108:function(e,t,a){"use strict";t.a=a.p+"static/media/spotify.482c49d0.svg"},125:function(e,t,a){"use strict";var s=a(9),i=a(10),c=a(14),n=a(12),r=a(11),l=a(0),o=a.n(l),d=a(75),m=a(76),j=a(109),b=a.n(j),u=a(1),h=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).updateWindowSize=function(){window.outerWidth>=1230||window.outerWidth>=970&&window.outerWidth<1230?i.setState({itemCount:3,cols:4}):window.outerWidth<=970&&i.setState({itemCount:1,cols:12})},i.state={cols:4,step1:!0,step2:!1},i.updateWindowSize.bind(Object(c.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowSize)}},{key:"render",value:function(){var e=this;return Object(u.jsx)(o.a.Fragment,{children:Object(u.jsx)(d.a,{className:"justify-content-center",children:Object(u.jsxs)(m.a,{lg:"12",className:"mt-4",children:[Object(u.jsx)("div",{id:"customer-testi",className:"tiny-three-item",children:Object(u.jsx)("div",{className:"tiny-slide",children:Object(u.jsx)(d.a,{children:!0===this.state.step1?this.props.reviews.map((function(t,a){return a>=0&&a<=2?Object(u.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(u.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(u.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(u.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(u.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px"}),Object(u.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(u.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(u.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},a):null})):this.props.reviews.map((function(t,a){return a>=3&&a<=5?Object(u.jsx)(m.a,{md:e.state.cols,className:"mb-1",children:Object(u.jsxs)("div",{className:"d-flex client-testi",name:"clientsreview",children:[Object(u.jsx)("img",{src:t.img,style:{height:65,width:65},className:"avatar avatar-small client-image rounded shadow",alt:""}),Object(u.jsxs)("div",{className:"flex-1 content p-3 shadow rounded bg-white position-relative",children:[Object(u.jsx)(b.a,{items:3,rating:t.rating,starRatedColor:"#F17425",numberOfStars:5,name:"rating",starDimension:"15px",starSpacing:"3px",className:"mb-0"}),Object(u.jsxs)("p",{className:"text-muted mt-2",children:['" ',t.desc,' "']}),Object(u.jsxs)("h6",{className:"text-primary",children:["- ",t.name," ",Object(u.jsx)("small",{className:"text-muted",children:t.post})]})]})]})},a):null}))})})}),Object(u.jsxs)("div",{className:"tns-nav",children:[Object(u.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!0,step2:!1})},className:this.state.step1?"tns-nav-active":"tns-nav-inactive"}),Object(u.jsx)("button",{type:"button",onClick:function(){e.setState({step1:!1,step2:!0})},className:this.state.step2?"tns-nav-active":"tns-nav-inactive"})]})]})})})}}]),a}(l.Component);t.a=h},155:function(e,t,a){"use strict";t.a=a.p+"static/media/01.3be58610.jpg"},196:function(e,t,a){"use strict";t.a=a.p+"static/media/02.697b47ef.jpg"},197:function(e,t,a){"use strict";t.a=a.p+"static/media/03.1b601f78.jpg"},255:function(e,t,a){"use strict";var s=a(9),i=a(10),c=a(12),n=a(11),r=a(0),l=a.n(r),o=a(76),d=a(62),m=a(149),j=a(68),b=a(13),u=a(1),h=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)(l.a.Fragment,{children:this.props.blogs.map((function(e,t){return Object(u.jsx)(o.a,{lg:"4",md:"6",className:"mt-4 pt-2",name:"blog",children:Object(u.jsxs)(d.a,{className:"blog rounded border-0 shadow",children:[Object(u.jsxs)("div",{className:"position-relative",children:[Object(u.jsx)(m.a,{top:!0,src:e.image,className:"rounded-top",alt:""}),Object(u.jsx)("div",{className:"overlay rounded-top bg-dark"})]}),Object(u.jsxs)(j.a,{className:"content",children:[Object(u.jsx)("h5",{children:Object(u.jsx)(b.c,{to:"#",className:"card-title title text-dark",children:e.title})}),Object(u.jsxs)("div",{className:"post-meta d-flex justify-content-between mt-3",children:[Object(u.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(u.jsx)("li",{className:"list-inline-item me-2  mb-0",children:Object(u.jsxs)(b.c,{to:"#",className:"text-muted like",children:[Object(u.jsx)("i",{className:"uil uil-heart me-1"}),e.like]})}),Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsxs)(b.c,{to:"#",className:"text-muted comments",children:[Object(u.jsx)("i",{className:"uil uil-comment me-1"}),e.comment]})})]}),Object(u.jsxs)(b.c,{to:"/page-blog-detail",className:"text-muted readmore",children:["Read More ",Object(u.jsx)("i",{className:"mdi mdi-chevron-right"})]})]})]}),Object(u.jsxs)("div",{className:"author",children:[Object(u.jsxs)("small",{className:"text-light user d-block",children:[Object(u.jsx)("i",{className:"mdi mdi-account"})," ",e.autor]}),Object(u.jsxs)("small",{className:"text-light date",children:[Object(u.jsx)("i",{className:"mdi mdi-calendar-check"})," ",e.date]})]})]})},t)}))})}}]),a}(r.Component);t.a=h},48:function(e,t,a){"use strict";var s=a(9),i=a(10),c=a(12),n=a(11),r=a(0),l=a.n(r),o=a(75),d=a(76),m=a(1),j=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)(l.a.Fragment,{children:Object(m.jsx)(o.a,{className:"justify-content-center",children:Object(m.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(m.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(m.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(m.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:["Start working with"," ",Object(m.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ",this.props.desc," "]})]})})})})}}]),a}(r.Component);t.a=j},53:function(e,t,a){"use strict";t.a=a.p+"static/media/01.6ac85de7.jpg"},54:function(e,t,a){"use strict";t.a=a.p+"static/media/05.a7ab2c82.jpg"},55:function(e,t,a){"use strict";t.a=a.p+"static/media/02.7df14e12.jpg"},59:function(e,t,a){"use strict";t.a=a.p+"static/media/03.ba5f8794.jpg"},60:function(e,t,a){"use strict";t.a=a.p+"static/media/04.35463172.jpg"},73:function(e,t,a){"use strict";t.a=a.p+"static/media/06.7365b7fa.jpg"},839:function(e,t,a){"use strict";a.r(t);var s=a(9),i=a(10),c=a(12),n=a(11),r=a(0),l=a.n(r),o=a(74),d=a(75),m=a(76),j=a(437),b=a(14),u=a(13),h=a(93),p=a(107),x=a(18),O=a.n(x),g=a(446),v=a.n(g),f=(a(442),a(443),a(91)),N=a.n(f),y=(a(92),a.p+"static/media/bg01.f8fb19aa.jpg"),w=a.p+"static/media/bg02.182c8bcf.jpg",k=a.p+"static/media/bg03.9df60589.jpg",C=a(1),S=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).ele=function(e){return 1===e?Object(C.jsx)(l.a.Fragment,{children:Object(C.jsx)("div",{className:"mt-4 pt-2 animated fadeInUpBig animation-delay-11",children:Object(C.jsxs)(u.c,{to:"#",className:"btn btn-primary mt-2",children:[Object(C.jsx)("i",{className:"uil uil-envelope"}),"Get Started"]})})}):2===e?Object(C.jsx)(l.a.Fragment,{children:Object(C.jsx)("div",{className:"text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11",children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)("input",{type:"email",id:"email",name:"email",className:"rounded",placeholder:"E-mail",required:!0}),Object(C.jsx)(p.a,{type:"submit",color:"primary",children:"Book Space"})]})})}):Object(C.jsx)(l.a.Fragment,{children:Object(C.jsxs)("div",{className:"mt-4 pt-2 animated fadeInUpBig animation-delay-11",children:[Object(C.jsx)(u.c,{to:"#",onClick:function(){return i.setState({isOpen:!0})},id:"playbtn",className:"btn btn-icon btn-pills btn-primary m-1 lightbox",children:Object(C.jsx)(O.a,{icon:"video",className:"icons"})}),Object(C.jsx)("span",{className:"fw-bold text-uppercase small text-light title-dark align-middle ms-1",children:"Watch Now"})]})})},i.state={isOpen:!1,items:[{id:1,image:y,subtitle:"Private office and Co-working space for $19",title:"Coworking  Space For a Success",desc:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."},{id:2,image:w,subtitle:"The Best Coworking in The City",title:"Office Space in Vietnam",desc:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."},{id:3,image:k,subtitle:"Our Space for You",title:"Own Your Office For A Day",desc:"At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate."}]},i.openModal=i.openModal.bind(Object(b.a)(i)),i}return Object(i.a)(a,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("slick-slide"),t=0;t<3;t++)0===t&&(e[t].style.backgroundImage="url(".concat(y,")")),1===t&&(e[t].style.backgroundImage="url(".concat(w,")")),2===t&&(e[t].style.backgroundImage="url(".concat(k,")"))}},{key:"render",value:function(){var e=this;return Object(C.jsx)(l.a.Fragment,{children:Object(C.jsxs)("section",{className:"main-slider",children:[Object(C.jsx)(v.a,Object(j.a)(Object(j.a)({className:"slides"},{autoplay:!0,infinite:!0,autoplaySpeed:1500,slidesToShow:1,slidesToScroll:1,fade:!0,draggable:!0,pauseOnHover:!0}),{},{children:this.state.items.map((function(t,a){return Object(C.jsxs)("div",{className:"bg-home d-flex align-items-center",style:{backgroundImage:"url(".concat(t.image,")")},children:[Object(C.jsx)("div",{className:"bg-overlay"}),Object(C.jsx)(o.a,{children:Object(C.jsx)(d.a,{className:"justify-content-center",children:Object(C.jsx)(m.a,{lg:"12",className:"text-center",children:Object(C.jsxs)("div",{className:"title-heading mt-4",children:[Object(C.jsx)("h6",{className:"text-light para-dark animated fadeInDownBig animation-delay-1",children:t.subtitle}),Object(C.jsx)("h1",{className:"heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3",children:t.title}),Object(C.jsx)("p",{className:"para-desc text-light para-dark mx-auto animated fadeInUpBig animation-delay-7",children:t.desc}),e.ele(t.id)]})})})})]},a)}))})),Object(C.jsx)(N.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"99025203",onClose:function(){return e.setState({isOpen:!1})}})]})})}}]),a}(r.Component),I=a.p+"static/media/about.bcb172d4.jpg",L=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(C.jsx)(l.a.Fragment,{children:Object(C.jsx)("section",{className:"section",children:Object(C.jsx)(o.a,{children:Object(C.jsxs)(d.a,{className:"align-items-center",children:[Object(C.jsx)(m.a,{lg:"5",md:"6",xs:"12",children:Object(C.jsx)("img",{src:I,className:"img-fluid rounded",alt:""})}),Object(C.jsx)(m.a,{lg:"7",md:"6",xs:"12",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(C.jsxs)("div",{className:"section-title ms-lg-4",children:[Object(C.jsx)("h4",{className:"title mb-4",children:"About Our Community"}),Object(C.jsxs)("p",{className:"text-muted",children:["Start working with"," ",Object(C.jsx)("span",{className:"text-primary fw-bold",children:"Landrick Space"})," ","that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century."]}),Object(C.jsx)(u.c,{to:"#",className:"btn btn-primary mt-3",children:"Join now"})]})})]})})})})}}]),a}(r.Component),B=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(C.jsx)(l.a.Fragment,{children:this.props.services.map((function(e,t){return Object(C.jsx)(m.a,{lg:"3",md:"4",xs:"6",className:"mt-4 pt-2",children:Object(C.jsxs)("div",{className:"features text-center pt-3 pb-3",children:[Object(C.jsx)("i",{className:e.icon}),Object(C.jsx)("div",{className:"content mt-3",children:Object(C.jsx)("h5",{className:"title-2",children:e.title})})]})},t)}))})}}]),a}(r.Component),E=a(48),M=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={services:[{icon:"uil uil-wifi h1 text-primary",title:"Fast Internet"},{icon:"uil uil-print h1 text-primary",title:"Printer & Fax"},{icon:"uil uil-restaurant h1 text-primary",title:"Modern Kitchen"},{icon:"uil uil-clock h1 text-primary",title:"24 Hr Access"},{icon:"uil uil-envelope-alt h1 text-primary",title:"Mail Service"},{icon:"uil uil-calendar-alt h1 text-primary",title:"Events Space"},{icon:"uil uil-user-arrows h1 text-primary",title:"Conference Rooms"},{icon:"uil uil-coffee h1 text-primary",title:"Organic Tea & Coffee"}]},i}return Object(i.a)(a,[{key:"render",value:function(){return Object(C.jsx)(l.a.Fragment,{children:Object(C.jsx)("section",{className:"section bg-light",children:Object(C.jsxs)(o.a,{children:[Object(C.jsx)(E.a,{title:"Your Comfort is Our Priority",desc:" that can provide everything you need to generate awareness, drive traffic, connect"}),Object(C.jsx)(d.a,{children:Object(C.jsx)(B,{services:this.state.services})})]})})})}}]),a}(r.Component),F=a(62),D=a(68),T=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(C.jsx)(l.a.Fragment,{children:this.props.pricings.map((function(e,t){return Object(C.jsx)(m.a,{md:"3",xs:"12",className:"mt-4 pt-2",children:Object(C.jsxs)(F.a,{className:e.isActive?"pricing-rates best-plan rounded shadow text-center border-0":"pricing-rates best-plan rounded bg-light text-center border-0",children:[e.isActive?Object(C.jsx)("div",{className:"ribbon ribbon-right ribbon-warning overflow-hidden",children:Object(C.jsx)("span",{className:"text-center d-block shadow small h6",children:"Best"})}):null,Object(C.jsxs)(D.a,{className:"py-5",children:[Object(C.jsx)("img",{src:e.image,className:"mb-4",height:"50",alt:""}),Object(C.jsx)("h6",{className:"title text-uppercase mb-4",children:e.title}),Object(C.jsxs)("div",{className:"d-flex justify-content-center mb-4",children:[Object(C.jsx)("span",{className:"h4 mb-0 mt-2",children:"$"}),Object(C.jsx)("span",{className:"price h1 mb-0",children:e.price}),Object(C.jsxs)("span",{className:"h4 align-self-end mb-1",children:["/",e.duration]})]}),Object(C.jsx)("p",{className:"text-muted",children:e.desc}),Object(C.jsx)(u.c,{to:"#",className:"btn btn-outline-primary btn-sm mt-4",children:e.btnName})]})]})},t)}))})}}]),a}(r.Component),A=a.p+"static/media/cta.786bcd6a.jpg",W=a.p+"static/media/lightbulb.4c93e07b.svg",q=a.p+"static/media/table.36ded99a.svg",z=a.p+"static/media/star.de55e211.svg",U=a.p+"static/media/start-up.15d48147.svg",P=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={pricings:[{id:1,title:"MEMBER",image:W,price:"19",duration:"mo",desc:"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",btnName:"Buy Now"},{id:2,title:"DESK",image:q,price:"39",duration:"mo",desc:"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",btnName:"Get Started",isActive:!0},{id:3,title:"DEDICATED",image:z,price:"49",duration:"mo",desc:"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",btnName:"Get Started"},{id:4,title:"OFFICE",image:U,price:"59",duration:"mo",desc:"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",btnName:"Try It Now"}],isOpen:!1},i.openModal=i.openModal.bind(Object(b.a)(i)),i}return Object(i.a)(a,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return Object(C.jsx)(l.a.Fragment,{children:Object(C.jsxs)("section",{className:"section",children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(F.a,{className:" bg-light rounded border-0 overflow-hidden",children:Object(C.jsxs)(d.a,{className:"g-0 align-items-center",children:[Object(C.jsx)(m.a,{lg:"6",children:Object(C.jsx)("img",{src:A,className:"rounded img-fluid",alt:""})}),Object(C.jsx)(m.a,{lg:"6",className:"text-center",children:Object(C.jsxs)(D.a,{className:"section-title p-md-5",children:[Object(C.jsx)(u.c,{onClick:this.openModal,to:"#",className:"play-btn mt-0 border border-light text-center video-play-icon",children:Object(C.jsx)("i",{children:Object(C.jsx)(O.a,{icon:"play",className:"fea icon-ex-md text-dark"})})}),Object(C.jsx)(N.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"287684225",onClose:function(){return e.setState({isOpen:!1})}}),Object(C.jsx)("h4",{className:"title mb-4 mt-4",children:"We Are Creative Dreamers and Co-workers"}),Object(C.jsx)("p",{className:"text-muted mx-auto para-desc mb-0",children:"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."})]})})]})})}),Object(C.jsxs)(o.a,{className:"mt-100 mt-60",children:[Object(C.jsx)(E.a,{title:"Choose The Pricing Plan",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(C.jsx)(d.a,{className:"align-items-center",children:Object(C.jsx)(T,{pricings:this.state.pricings})})]})]})})}}]),a}(r.Component),Y=a(125),R=a(255),G=a(53),H=a(55),J=a(59),K=a(60),$=a(54),V=a(73),Q=a(155),X=a(196),Z=a(197),_=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={reviews:[{id:1,img:G.a,name:"Thomas Israel",post:"C.E.O",desc:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",rating:5},{id:2,img:H.a,name:"Barbara McIntosh",post:"M.D",desc:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",rating:4},{id:3,img:J.a,name:"Carl Oliver",post:"P.A",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",rating:3},{id:4,img:K.a,name:"Christa Smith",post:"Manager",desc:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",rating:5},{id:5,img:$.a,name:"Dean Tolle",post:"Developer",desc:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",rating:5},{id:6,img:V.a,name:"ill Webb",post:"Designer",desc:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",rating:4}],blogs:[{id:1,image:Q.a,title:"Design your apps in your own way",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:2,image:X.a,title:"How apps is changing the IT world",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"},{id:3,image:Z.a,title:"Smartest Applications for Business",like:"33",comment:"08",autor:"Calvin Carlo",date:"13th August, 2019"}]},i}return Object(i.a)(a,[{key:"render",value:function(){return Object(C.jsx)(l.a.Fragment,{children:Object(C.jsxs)("section",{className:"section bg-light",children:[Object(C.jsxs)(o.a,{children:[Object(C.jsx)(E.a,{title:"Trusted Co-workers",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(C.jsx)(Y.a,{reviews:this.state.reviews,colClass:"mt-4"})]}),Object(C.jsxs)(o.a,{className:"mt-100 mt-60",children:[Object(C.jsx)(E.a,{title:"Latest News & Events",desc:" that can provide everything you need to generate awareness, drive traffic, connect."}),Object(C.jsx)(d.a,{children:Object(C.jsx)(R.a,{blogs:this.state.blogs})})]})]})})}}]),a}(r.Component),ee=a(105),te=a(110),ae=a(112),se=a.p+"static/media/bg04.5226c551.jpg",ie=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={Contactvisible:!1,isOpen:!1},i.handleSubmit=i.handleSubmit.bind(Object(b.a)(i)),i.openModal=i.openModal.bind(Object(b.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({Contactvisible:!0})}},{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return Object(C.jsx)(l.a.Fragment,{children:Object(C.jsxs)("section",{className:"section",style:{background:"url(".concat(se,") center center")},children:[Object(C.jsx)("div",{className:"bg-overlay"}),Object(C.jsxs)(o.a,{children:[Object(C.jsxs)(d.a,{className:"align-items-center",children:[Object(C.jsx)(m.a,{lg:"8",md:"7",children:Object(C.jsxs)("div",{className:"section-title me-lg-4",children:[Object(C.jsx)("h4",{className:"title title-dark text-light mb-4",children:"We are Built for Business \u2013 Explore Us Today !"}),Object(C.jsxs)("p",{className:"text-light para-dark para-desc mb-0",children:["Start working with"," ",Object(C.jsx)("span",{className:"text-success fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]}),Object(C.jsxs)("div",{className:"mt-4 pt-2",children:[Object(C.jsx)(u.c,{to:"#",className:"btn btn-primary mb-2 m-1",children:"Install Now"}),Object(C.jsx)(u.c,{to:"#",onClick:this.openModal,className:"btn btn-icon btn-pills btn-primary m-1 lightbox",children:Object(C.jsx)(O.a,{icon:"video",className:"icons"})}),Object(C.jsx)("span",{className:"fw-bold text-uppercase small text-light title-dark align-middle ms-1",children:"Watch Now"})]})]})}),Object(C.jsx)(m.a,{lg:"4",md:"5",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(C.jsx)(F.a,{className:"rounded shadow border-0",children:Object(C.jsxs)(D.a,{children:[Object(C.jsx)("h5",{className:"text-center",children:"Become A Member"}),Object(C.jsx)(ee.a,{color:"primary",isOpen:this.state.Contactvisible,toggle:function(){e.setState({Contactvisible:!e.state.Contactvisible})},children:"Data sended successfully."}),Object(C.jsx)(h.a,{onSubmit:this.handleSubmit,children:Object(C.jsxs)(d.a,{className:"mt-4",children:[Object(C.jsx)(m.a,{lg:"12",children:Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsxs)(te.a,{className:"form-label",children:["Your Name ",Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)("div",{className:"form-icon position-relative",children:Object(C.jsx)(O.a,{icon:"user",className:"fea icon-sm icons"})}),Object(C.jsx)(ae.a,{name:"name",id:"name3",type:"text",className:"form-control ps-5",placeholder:"Name",required:!0})]})}),Object(C.jsx)(m.a,{lg:"12",children:Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsxs)(te.a,{className:"form-label",children:["Your Email ",Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)("div",{className:"form-icon position-relative",children:Object(C.jsx)(O.a,{icon:"mail",className:"fea icon-sm icons"})}),Object(C.jsx)(ae.a,{type:"email",id:"email3",className:"form-control ps-5",placeholder:"Email",name:"email",required:!0})]})}),Object(C.jsx)(m.a,{md:"12",children:Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsxs)(te.a,{className:"form-label",children:["Your Phone no. :",Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)("div",{className:"form-icon position-relative",children:Object(C.jsx)(O.a,{icon:"phone",className:"fea icon-sm icons"})}),Object(C.jsx)(ae.a,{name:"number",id:"number",type:"number",className:"form-control ps-5",placeholder:"phone no. :",required:!0})]})}),Object(C.jsx)(m.a,{lg:"12",className:"mb-0",children:Object(C.jsx)("div",{className:"d-grid",children:Object(C.jsx)(p.a,{color:"primary",children:"Started now"})})})]})})]})})})]}),Object(C.jsx)(N.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"287684225",onClose:function(){return e.setState({isOpen:!1})}})]})]})})}}]),a}(r.Component),ce=a(98),ne=a(96),re=a(97),le=a(99),oe=a(106),de=a(108),me=function(e){Object(c.a)(a,e);var t=Object(n.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?(document.getElementById("topnav").classList.add("nav-sticky"),document.getElementById("buyButton").className="btn btn-primary"):(document.getElementById("topnav").classList.remove("nav-sticky"),document.getElementById("buyButton").className="btn btn-light")},i.state={partners:[{image:ce.a},{image:ne.a},{image:re.a},{image:le.a},{image:oe.a},{image:de.a}]},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",document.getElementById("top-menu").classList.add("nav-light"),document.getElementById("buyButton").className="btn btn-light",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(C.jsxs)(l.a.Fragment,{children:[Object(C.jsx)(S,{}),Object(C.jsx)("section",{className:"py-5 border-bottom border-top",children:Object(C.jsxs)(o.a,{children:[Object(C.jsx)(d.a,{className:"justify-content-center",children:Object(C.jsx)(m.a,{xs:12,className:"text-center",children:Object(C.jsx)("h5",{children:"Trusted client by over 10,000+ of the world\u2019s"})})}),Object(C.jsxs)(d.a,{className:"mt-5 justify-content-center",children:[Object(C.jsx)(m.a,{id:"partner1",lg:"2",md:"2",xs:"6",className:"text-center",children:Object(C.jsx)("img",{src:ce.a,className:"avatar avatar-ex-sm",alt:""})}),Object(C.jsx)(m.a,{id:"partner2",lg:"2",md:"2",xs:"6",className:"text-center",children:Object(C.jsx)("img",{src:ne.a,className:"avatar avatar-ex-sm",alt:""})}),Object(C.jsx)(m.a,{id:"partner3",lg:"2",md:"2",xs:"6",className:"text-center  mt-4 mt-sm-0",children:Object(C.jsx)("img",{src:re.a,className:"avatar avatar-ex-sm",alt:""})}),Object(C.jsx)(m.a,{id:"partner4",lg:"2",md:"2",xs:"6",className:"text-center  mt-4 mt-sm-0",children:Object(C.jsx)("img",{src:le.a,className:"avatar avatar-ex-sm",alt:""})}),Object(C.jsx)(m.a,{id:"partner5",lg:"2",md:"2",xs:"6",className:"text-center  mt-4 mt-sm-0",children:Object(C.jsx)("img",{src:oe.a,className:"avatar avatar-ex-sm",alt:""})}),Object(C.jsx)(m.a,{id:"partner6",lg:"2",md:"2",xs:"6",className:"text-center  mt-4 mt-sm-0",children:Object(C.jsx)("img",{src:de.a,className:"avatar avatar-ex-sm",alt:""})})]})]})}),Object(C.jsx)(L,{}),Object(C.jsx)(M,{}),Object(C.jsx)(P,{}),Object(C.jsx)(_,{}),Object(C.jsx)(ie,{})]})}}]),a}(r.Component);t.default=me},96:function(e,t,a){"use strict";t.a=a.p+"static/media/google.1bb5de27.svg"},97:function(e,t,a){"use strict";t.a=a.p+"static/media/lenovo.60fa5b6b.svg"},98:function(e,t,a){"use strict";t.a=a.p+"static/media/amazon.7c6888d1.svg"},99:function(e,t,a){"use strict";t.a=a.p+"static/media/paypal.69c7ddc5.svg"}}]);
//# sourceMappingURL=86.845e43b6.chunk.js.map