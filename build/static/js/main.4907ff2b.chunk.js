(this["webpackJsonpintegral-bootstrap-redux"]=this["webpackJsonpintegral-bootstrap-redux"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(30),r=n.n(a),s=n(57),o=n(13),i=n(7),u=n(52),l=n(53),d=n(59),j=n(58),m=n(1),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:"Contact page"})}}]),n}(c.Component),O=n(10),h=n.n(O),p=n(18),g=n(5),f=n(11),_=n.n(f),x={URL:"https://intshop.herokuapp.com",URLSearch:"https://intshop.herokuapp.com",HOME:"/",CONTACT:"/contact",CATEGORIES:"/categories",PRODUCT:"/product",PRODUCT_CODE:"/product/product_code",API_PRODUCTS:"api/products",PRODUCTS_LIST:"/products",API_PRODUCTS_FILTER:"api/products_filter",SEARCH:"search",FEEDBACK:"/feedback",API_FILTERS_ALL:"api/filters_all"},v=x;n(87);var y=function(e){var t=e.elem;return Object(m.jsxs)("div",{className:"containerMainCard",children:[Object(m.jsxs)("p",{children:["\xa0 \xa0 \u041a\u043e\u0434: ",t.product_code]}),Object(m.jsx)(o.b,{className:"mainCardBoxImg",to:"".concat(v.PRODUCT,"/").concat(t.productID),children:Object(m.jsx)("img",{className:"imgMainCard",src:t.large_image,alt:t.product_code})}),Object(m.jsxs)("div",{className:"mainCardBoxText",children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsxs)("p",{children:[t.retail_price_uah," \u0433\u0440\u043d."]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"button",className:"mainCardBoxButton",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})]})},N=n(22);var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARR_PRODUCTS":return Object(N.a)(t.payload.list);default:return e}},S=(n(89),n(17)),k=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(v.URL,"/").concat(v.API_FILTERS_ALL,"/").concat(t)).then((function(e){return e.json()})).then((function(e){return e})).catch().finally();case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();n(90);var w=function(e){var t=e.elem,n=e.checked,a=e.handleChange,r=Object(c.useState)(!1),s=Object(g.a)(r,2),o=s[0],i=s[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:"filterCategoryButtonName",onClick:function(){return i(!o)},children:t.name}),Object(m.jsx)(m.Fragment,{children:o&&t.filters.map((function(e){return Object(m.jsxs)("button",{className:"",children:[Object(m.jsx)("span",{className:"",children:e.name}),Object(m.jsx)("input",{className:"inputFilterCategoryName",id:e.filterID,completed:n,type:"checkbox",checked:n,onChange:a})]},e.filterID)}))})]})};n(91);var T=function(e){var t=e.category,n=Object(c.useState)({}),a=Object(g.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)([]),u=Object(g.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(g.a)(j,2),O=b[0],h=b[1],p=Object(c.useState)(""),f=Object(g.a)(p,2),_=f[0],v=f[1];Object(c.useEffect)((function(){k(t).then((function(e){return{status:e.status,result:e.result.map((function(e){return Object(S.a)(Object(S.a)({},e),{},{filters:e.filters.map((function(e){return Object(S.a)(Object(S.a)({},e),{},{completed:!1})}))})}))}})).then((function(e){return s(e)}))}),[t]);var y=function(e){r&&s({status:r.status,result:r.result.map((function(t){return Object(S.a)(Object(S.a)({},t),{},{filters:t.filters.map((function(t){return t.filterID===e.target.id?Object(S.a)(Object(S.a)({},t),{},{completed:e.target.checked}):Object(S.a)({},t)}))})}))})};Object(c.useEffect)((function(){if(1===r.status){var e=[];r.result.map((function(t){return t.filters.map((function(t){if(!0===t.completed)return e.push(t.filterID),t}))})),d(e)}}),[r]),Object(c.useEffect)((function(){var e=l.reduce((function(e,t){return e+"".concat(t,"/")}),""),t=l.reduce((function(e,t){return e+"&filters[]=".concat(t)}),"");h(e),v(t)}),[l]);var N=Object(i.i)().categoryNum,C=Object(i.g)();return Object(c.useEffect)((function(){C.push({pathname:"".concat(x.PRODUCTS_LIST,"/").concat(N,"/").concat(O)})}),[_,N,C,O]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"filterList_BoxUl",children:1===r.status&&r.result.map((function(e){return Object(m.jsx)("li",{className:"",children:Object(m.jsx)("label",{children:Object(m.jsx)(w,{elem:e,handleChange:y,checked:r[e.id]})},e.optionID)},e.optionID)}))})})};var A=function(){var e=Object(c.useState)(0),t=Object(g.a)(e,1)[0],n=Object(c.useState)(!1),a=Object(g.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(!1),u=Object(g.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(!1),b=Object(g.a)(j,2),O=b[0],f=b[1],x=Object(c.useReducer)(C,[]),N=Object(g.a)(x,2),S=N[0],k=N[1],w=Object(i.i)().categoryNum,A=Object(i.h)();return Object(c.useEffect)((function(){var e=_.a.CancelToken.source();return function(){var n=Object(p.a)(h.a.mark((function n(){var c,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),s(!1),n.prev=2,n.next=5,_()("".concat(v.URL,"/api/products/").concat(w,"/").concat(t),{cancelToken:e.token});case 5:c=n.sent,console.log("AxiosCancel: got response products"),a=c.data.list,k({type:"GET_ARR_PRODUCTS",payload:{list:a}}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),_.a.isCancel(n.t0)&&console.log("AxiosCancel: caught cancel products"),s(!0);case 15:d(!1);case 16:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(){return n.apply(this,arguments)}}()().then((function(e){return e})),function(){console.log("AxiosCancel: unmounting products"),e.cancel()}}),[t,w]),Object(c.useEffect)((function(){var e=A.pathname.split("/").slice(3,-1).reduce((function(e,t){return e+"&filters[]=".concat(t)}),"");if(e){var t=_.a.CancelToken.source();return function(){var n=Object(p.a)(h.a.mark((function n(){var c,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),s(!1),n.prev=2,n.next=5,_()("".concat(v.URL,"/api/products_filter/").concat(w,"/").concat(e),{cancelToken:t.token});case 5:c=n.sent,console.log("AxiosCancel: got response products"),a=c.data.list,k({type:"GET_ARR_PRODUCTS",payload:{list:a}}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),_.a.isCancel(n.t0)&&console.log("AxiosCancel: caught cancel products"),s(!0);case 15:d(!1);case 16:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(){return n.apply(this,arguments)}}()().then((function(e){return e})),function(){console.log("AxiosCancel: unmounting products"),t.cancel()}}}),[A,w]),Object(m.jsxs)(m.Fragment,{children:[l&&Object(m.jsx)("div",{className:"",children:Object(m.jsx)("div",{className:"",children:Object(m.jsx)("span",{className:"",children:"LOADING!"})})}),r&&Object(m.jsx)("div",{children:"Something went wrong ..."}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(){return f(!O)},children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(m.jsx)("div",{className:"wrapperFilCat",children:O&&Object(m.jsx)(T,{category:w})})]}),!l&&Object(m.jsx)("div",{className:"wrapperFilCat",children:S.length>0&&S.map((function(e){return Object(m.jsx)(y,{elem:e},e.productID)}))})]})};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getProduct":return Object(S.a)({},t.payload.data);default:return e}};n(92),n(93);var R=function(e){var t=e.elem;return console.log("element",t),Object(m.jsxs)("section",{className:"",children:[Object(m.jsx)("div",{className:"",children:Object(m.jsx)("img",{className:"productImgDetails",src:"".concat(t.large_image),alt:"".concat(t.articul)})}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("p",{children:"PRODUCT!!!"})})]})};var E=function(){var e=Object(c.useState)(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(g.a)(r,2),o=s[0],u=s[1],l=Object(i.i)().someIdProduct,d=Object(c.useReducer)(L,[]),j=Object(g.a)(d,2),b=j[0],O=j[1];return console.log("product",b),Object(c.useEffect)((function(){var e=_.a.CancelToken.source();return function(){var t=Object(p.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),a(!1),t.prev=2,t.next=5,_()("".concat(v.URL,"/api/product/").concat(l),{cancelToken:e.token});case 5:n=t.sent,console.log("AxiosCancel: got response products"),c=n.data,O({type:"getProduct",payload:{data:c}}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),_.a.isCancel(t.t0)&&console.log("AxiosCancel: caught cancel products"),a(!0);case 15:u(!1);case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}()().then((function(e){return e})),function(){console.log("AxiosCancel: unmounting products"),e.cancel()}}),[l]),Object(m.jsxs)("article",{children:[n&&Object(m.jsx)("div",{children:"Something went wrong ..."}),o&&Object(m.jsx)("div",{className:"wrapperProduct",children:"LOADING!2"}),Object(m.jsx)(R,{elem:b})]})},I=(n(94),n(95),function(){return Object(m.jsx)("div",{className:"",children:Object(m.jsx)("span",{children:"Place sticky footer content here."})})});n(96);var B=function(e){var t=e.list,n=e.open;return Object(m.jsx)("ul",{className:n?"addListUl_menu__sub-list":"addListUlBlock_menu__sub-list",children:n&&t.map((function(e,t){return Object(m.jsx)("li",{className:"addListLi_menu__sub-list",children:Object(m.jsx)(o.b,{to:"".concat(v.PRODUCTS_LIST,"/").concat(e.category_number),className:"addList_button addList_button--pipaluk addList_button--inverted  addList_button--round-s addList_button--text-thick",children:e.name})},"ItemsName + ".concat(t))}))})},D=(n(97),function(e){var t=e.id,n=e.category,a=e.list,r=Object(c.useState)(!1),s=Object(g.a)(r,2),o=s[0],i=s[1],u=function(){i(!o)};return Object(m.jsxs)("div",{className:"dropBox",children:[Object(m.jsx)("button",{onClick:function(){return u()},className:"drop__button drop__button--pipaluk drop__button--inverted  drop__button--round-s drop__button--text-thick",children:n}),Object(m.jsx)(B,{idRL:t,list:a,open:o}),o&&Object(m.jsx)("div",{className:"drop__outer",onClick:function(){return u()},children:Object(m.jsx)("div",{className:"drop__inner",children:Object(m.jsx)("label",{className:"drop__label",children:"Back"})})})]})}),P=n(33),U=(n(98),[{name:"\u041e \u043a\u043e\u043c\u0430\u043f\u0430\u043d\u0438\u0438",link:"/about",id:"about"},{name:"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b",link:"/certificate",id:"certificate"},{name:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e",link:"/cooperation",id:"cooperation"},{name:"\u041e\u0442\u0437\u044b\u0432\u044b",link:"/reviews",id:"reviews"},{name:"\u0412\u0438\u0434\u0435\u043e",link:"/video",id:"video"},{name:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f",link:"/warranty",id:"warranty"},{name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",link:"/contact",id:"contact"}]),F=n.p+"static/media/logo-61x61.5dbaf8d9.jpg";var M=function(){var e=document.querySelector(".menu__icon"),t=document.querySelector(".menu__body");document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")};var G=function(){var e=Object(c.useState)(null),t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=document.querySelector("._touch");a(!!e)}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.b,{to:x.HOME,children:Object(m.jsx)("img",{className:"header__logo",src:F,alt:"Integral"})}),Object(m.jsxs)("div",{className:"header__menu menu",children:[Object(m.jsx)("div",{className:"menu__icon",children:Object(m.jsx)("span",{})}),Object(m.jsxs)("nav",{className:"menu__body",children:[!n&&Object(m.jsx)("ul",{id:"menu__list",className:"menu__list",children:Object(m.jsxs)("li",{children:[Object(m.jsx)(o.b,{to:"/",className:"menu__link",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"}),Object(m.jsx)("span",{className:"menu__arrow"}),Object(m.jsx)("ul",{className:"menu__sub-list",children:P.category.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)(D,{category:e.category,list:e.list})},"li + ".concat(t))}))})]})}),n&&Object(m.jsx)("ul",{id:"menu__list-touch",className:"menu__list-touch",children:Object(m.jsx)("li",{onClick:function(){return M()},children:U.map((function(e,t){return Object(m.jsx)(o.b,{id:e.id,to:"".concat(e.link),className:"menu__link",children:e.name},t)}))})})]})]})]})},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addItems":return Object(N.a)(t.payload.item);default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"textSearchWord":return t.payload.text;default:return e}},q=n(111),W=n(113),X=n(112),J=n(106),K=n(107),Q=n(108),Z=n(109),z=n(110),Y=(n(99),n(100),[{img:"https://i.ibb.co/S7dR2xL/2011446.jpg"},{img:"https://i.ibb.co/B2G5BPj/2011834.jpg"},{img:"https://i.ibb.co/4W3K1TZ/2011273.jpg"},{img:"https://i.ibb.co/7jh3tgb/2011498.jpg"},{img:"https://i.ibb.co/TqM32yB/2011474.jpg"},{img:"https://i.ibb.co/jg0N6mX/2010948.jpg"}]);X.a.use([J.a,K.a,Q.a,Z.a,z.a]);var $=function(){var e=Object(c.useState)(null),t=Object(g.a)(e,1)[0],n=Object(c.useState)(null),a=Object(g.a)(n,1)[0],r=[];return Y.map((function(e,t){return r.push(Object(m.jsx)(q.a,{tag:"li","data-swiper-autoplay":"4000",children:Object(m.jsx)("img",{src:e.img,alt:"Slide ".concat(t),className:"imgBoxCarouse"})},"Slider-".concat(t)))})),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(W.a,{id:"sliders-top",wrapperTag:"ul",tag:"section",spaceBetween:0,slidesPerView:1,pagination:!0,autoplay:!0,thumbs:{swiper:t},controller:{control:a},children:r})})},ee=(n(101),n(56));n(102);var te=function(e){var t=e.toggleForm,n=Object(c.useState)(!1),a=Object(g.a)(n,2),r=a[0],s=a[1];function o(){s(!0),i.resetForm(),t()}var i=Object(ee.a)({initialValues:{firstName:"",lastName:"",phone:"",email:"",message:""},onSubmit:function(){var e=Object(p.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.stringify(t,null,2),(c=new Headers).append("Access-Control-Allow-Origin","*"),c.append("Access-Control-Allow-Headers","Content-Type"),c.append("Content-Type","application/x-www-form-urlencoded"),fetch("https://sending-feedback-form.herokuapp.com/send",{method:"POST",headers:c,body:n}).then((function(e){return e})).catch((function(e){return console.error("error",e)})).finally(o());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"formBack__wrapper animated bounceInLeft",children:[Object(m.jsxs)("div",{className:"formBack__company-info",children:[Object(m.jsx)("h3",{children:"Integral"}),Object(m.jsxs)("ul",{className:"formBack__Ul",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("i",{className:"fa fa-road"})," \u0433. \u0425\u0435\u0440\u0441\u043e\u043d"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("i",{className:"fa fa-phone"})," (066) 911-0347"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("i",{className:"fa fa-envelope"})," info@intshop.store"]})]})]}),Object(m.jsxs)("div",{className:"formBack__contact",children:[Object(m.jsx)("h3",{children:"\u0424\u043e\u0440\u043c\u0430 \u0441\u0432\u044f\u0437\u0438"}),Object(m.jsxs)("form",{id:"myForm",onSubmit:i.handleSubmit,children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"firstName",children:"\u0418\u043c\u044f"}),Object(m.jsx)("input",{id:"firstName",name:"firstName",type:"text",onChange:i.handleChange,value:i.values.firstName})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"lastName",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(m.jsx)("input",{id:"lastName",name:"lastName",type:"text",onChange:i.handleChange,value:i.values.lastName})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"phone",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(m.jsx)("input",{id:"phone",name:"phone",type:"text",onChange:i.handleChange,value:i.values.phone})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{id:"email",name:"email",type:"email",onChange:i.handleChange,value:i.values.email})]}),Object(m.jsxs)("p",{className:"formBack__full",children:[Object(m.jsx)("label",{htmlFor:"message",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(m.jsx)("textarea",{id:"message",name:"message",type:"text",onChange:i.handleChange,value:i.values.message})]}),Object(m.jsx)("p",{className:"formBack__full",children:Object(m.jsx)("button",{disabled:r,id:"butSub",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})]})})},ne=function(){var e=Object(c.useState)(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(g.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(""),l=Object(g.a)(u,2),d=l[0],j=l[1],b=Object(c.useReducer)(H,[]),O=Object(g.a)(b,2),f=O[0],x=O[1],N=Object(c.useReducer)(V,""),C=Object(g.a)(N,2),S=C[0],k=C[1];Object(c.useEffect)((function(){var e=_.a.CancelToken.source();return function(){var t=Object(p.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a(!0),i(!1),S){t.next=6;break}return x({type:"addItems",payload:{item:[]}}),a(!1),t.abrupt("return");case 6:return t.prev=6,t.next=9,_()("".concat(v.URLSearch,"/api/").concat(v.SEARCH,"/").concat(S),{cancelToken:e.token});case 9:n=t.sent,console.log("AxiosCancel: got response"),c=n.data.item,console.log(c),x({type:"addItems",payload:{item:c}}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(6),_.a.isCancel(t.t0)&&console.log("AxiosCancel: caught cancel"),i(!0);case 20:a(!1);case 21:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(){return t.apply(this,arguments)}}()().then((function(e){return e})),function(){console.log("AxiosCancel: unmounting"),e.cancel()}}),[S]);var w=Object(c.useState)(null),T=Object(g.a)(w,2),A=T[0],L=T[1];Object(c.useEffect)((function(){var e=document.querySelector("._touch");L(!e)}),[A]);var R=Object(c.useState)(!1),E=Object(g.a)(R,2),I=E[0],B=E[1],U=Object(c.useState)(!1),F=Object(g.a)(U,2),M=F[0],G=F[1];return Object(m.jsxs)(m.Fragment,{children:[o&&Object(m.jsx)("div",{children:"Something went wrong ..."}),Object(m.jsx)("div",{className:"appContainer",children:Object(m.jsx)($,{})}),Object(m.jsx)("div",{className:"main__searchGlobal",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),k({type:"textSearchWord",payload:{text:d}})},children:Object(m.jsx)("input",{type:"text",placeholder:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a...","aria-label":"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a...",value:d,onChange:function(e){return j(e.target.value)}})})}),!A&&Object(m.jsx)("ul",{id:"menu__listMain",className:"menu__listMain",children:Object(m.jsxs)("li",{className:"containerMain",children:[Object(m.jsx)("button",{onClick:function(){B(!I)},className:"menu__button menu__button--pipaluk menu__button--round-s",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"}),Object(m.jsx)("span",{className:"menu__arrowMain"}),Object(m.jsx)("ul",{className:I?"menu__sub-listUlMain":"menu__sub-listUlMainBlock",children:P.category.map((function(e,t){return Object(m.jsx)("li",{className:"menu__sub-listLiMain",children:Object(m.jsx)(D,{category:e.category,list:e.list})},"li + ".concat(t))}))})]})}),Object(m.jsxs)("div",{className:"containerListCard",children:[n&&Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("span",{children:"Loading..."})})}),!n&&f.length>0&&f[0].map((function(e,t){return Object(m.jsx)(y,{elem:e},"mainCard-".concat(t))}))]}),Object(m.jsx)("button",{onClick:function(){return G(!M)},className:"menu__button menu__button--pipaluk menu__button--round-s",children:"\u0444\u043e\u0440\u043c\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u044b\u0432\u044f\u0437\u0438"}),M&&Object(m.jsx)("div",{className:M?"main__FormVisible":"main__FormBlock",children:Object(m.jsx)(te,{toggleForm:M})})]})};var ce=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"wrapperA",children:[Object(m.jsxs)("div",{className:"wrapperHT",children:[Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("div",{className:"header__container",children:Object(m.jsx)(G,{})})}),Object(m.jsx)("main",{className:"page",children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{exact:!0,path:x.HOME,children:Object(m.jsx)(ne,{})}),Object(m.jsx)(i.b,{exact:!0,path:x.CONTACT,children:Object(m.jsx)(b,{})}),Object(m.jsx)(i.b,{path:"".concat(x.PRODUCTS_LIST,"/:categoryNum"),children:Object(m.jsx)(A,{})}),Object(m.jsx)(i.b,{path:"".concat(x.PRODUCT,"/:someIdProduct"),children:Object(m.jsx)(E,{})}),Object(m.jsx)(i.a,{to:x.HOME})]})})]}),Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)(I,{})})]})})},ae=n(27),re=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_BOOTS_LOADING_FALSE":return t.payload.mainBootsloadingSpinnerFalse;case"MAIN_BOOTS_LOADING_TRUE":return t.payload.mainBootsloadingSpinnerTrue;default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARR_MAIN_BOOTS":return t.payload.arrMaBo;default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIEW_CAT_PROD_IS_LOADING_TOGGLE":return!e;default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_LOADING_TOGGLE":return t.payload.searchLoadingToggle;default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARR_SEARCH":return Object(N.a)(t.payload.isArraySP);default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getMain":return Object(N.a)(t.payload.main);default:return e}},de=Object(ae.b)({arrSearchReducer:ue,itemsReducer:H,mainReducer:le,forGetArrProductsReducer:C,textSearchQueryValue:V,mainBootsLoadingSpinner:re,arrMaBo:se,isLoadingVCP:oe,arrProducts:C,isLoadingSearch:ie}),je=Object(ae.c)(de,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(103);r.a.render(Object(m.jsx)(s.a,{store:je,children:Object(m.jsx)(ce,{})}),document.getElementById("root")),function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};if(e.any()){document.body.classList.add("_touch");for(var t=document.querySelectorAll(".arrow"),n=function(e){var n=t[e];n.addEventListener("click",(function(){n.parentElement.classList.toggle("_active")}))},c=0;c<t.length;c++)n(c)}else document.body.classList.add("_pc");var a=document.querySelector(".menu__icon");a&&a.addEventListener("click",(function(){M()}))}()},33:function(e){e.exports=JSON.parse('{"category":[{"category":"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438","list":[{"name":"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438","category_number":"1191"},{"name":"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0434\u043b\u044f \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u043e\u0432","category_number":"1211"},{"name":"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u043a \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u043c","category_number":"1233"},{"name":"\u0417\u0430\u043f\u0447\u0430\u0441\u0442\u0438 \u0434\u043b\u044f \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u043e\u0432","category_number":"8568"},{"name":"\u0421\u0443\u043c\u043a\u0438 \u043a \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u043c","category_number":"1204"},{"name":"\u0420\u044e\u043a\u0437\u0430\u043a\u0438 \u043a \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u043c","category_number":"1205"},{"name":"\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u043e\u0432","category_number":"1471"},{"name":"\u041c\u0430\u0442\u0440\u0438\u0446\u044f \u0434\u043e \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430","category_number":"8516"},{"name":"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0430\u043c\u044f\u0442\u0438 \u043a \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u043c","category_number":"1237"},{"name":"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438, \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u044b","category_number":"1181"}]},{"category":"\u041f\u043b\u0430\u043d\u0448\u0435\u0442\u044b","list":[{"name":"\u041f\u043b\u0430\u043d\u0448\u0435\u0442\u044b","category_number":"1192"},{"name":"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u043e\u0432","category_number":"7981"},{"name":"\u0427\u0435\u0445\u043b\u044b \u043a \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430\u043c","category_number":"1207"},{"name":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043a\u043d\u0438\u0433\u0438","category_number":"1194"},{"name":"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438, \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u044b","category_number":"1181"}]},{"category":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b","list":[{"name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b","category_number":"1053"},{"name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b, \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b","category_number":"1331"},{"name":"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0430\u043c\u044f\u0442\u0438 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430","category_number":"1334"},{"name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0435 \u0438\u0433\u0440\u044b","category_number":"1418"},{"name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0435 \u0438\u0433\u0440\u044b \u0414\u043e\u043f. \u0440\u0430\u0437\u0434\u0435\u043b","category_number":"8366"},{"name":"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0442\u043e\u0440\u044b","category_number":"1547"},{"name":"\u041a\u0440\u0435\u0441\u043b\u043e \u0438\u0433\u0440\u043e\u0432\u043e\u0435","category_number":"8230"},{"name":"\u041a\u0440\u0435\u0441\u043b\u0430","category_number":"7453"}]},{"category":"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435","list":[{"name":"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f \u041f\u041a","category_number":"1330"},{"name":"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u043a \u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u043c","category_number":"1233"},{"name":"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0442\u043e\u0440\u044b","category_number":"1547"},{"name":"\u041a\u0440\u0435\u0441\u043b\u043e \u0438\u0433\u0440\u043e\u0432\u043e\u0435","category_number":"8230"}]},{"category":"C\u0432\u044f\u0437\u044c, \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f","list":[{"name":"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b, \u0441\u0432\u044f\u0437\u044c, \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f","category_number":"1266"},{"name":"\u0420\u0435\u043c\u0435\u0448\u043a\u0438 \u043a \u0441\u043c\u0430\u0440\u0442 \u0447\u0430\u0441\u0430\u043c \u0438 \u0431\u0440\u0430\u0441\u043b\u0435\u0442\u0430\u043c","category_number":"8520"},{"name":"\u0421\u043c\u0430\u0440\u0442-\u0427\u0435\u0445\u043e\u043b \u043e\u0442 \u0441\u043e\u043b\u043d\u0446\u0430","category_number":"8375"}]},{"category":"\u041f\u0440\u0438\u043d\u0442\u0435\u0440\u044b","list":[{"name":"\u041f\u0440\u0438\u043d\u0442\u0435\u0440\u044b","category_number":"7820"},{"name":"3D-\u041f\u0440\u0438\u043d\u0442\u0435\u0440","category_number":"8220"},{"name":"\u0421\u0442\u0440\u0443\u0439\u043d\u044b\u0439 \u043f\u0440\u0438\u043d\u0442\u0435\u0440","category_number":"1193"},{"name":"\u041b\u0430\u0437\u0435\u0440\u043d\u044b\u0439 \u043f\u0440\u0438\u043d\u0442\u0435\u0440","category_number":"8170"},{"name":"\u041c\u0430\u0442\u0440\u0438\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043d\u0442\u0435\u0440","category_number":"8171"},{"name":"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0424\u043e\u0442\u043e\u043f\u0440\u0438\u043d\u0442\u0435\u0440","category_number":"8228"},{"name":"\u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u044b \u043a \u043f\u0440\u0438\u043d\u0442\u0435\u0440\u0430\u043c","category_number":"7902"},{"name":"\u041a\u0430\u0431\u0435\u043b\u0438 \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u0442\u0435\u0440\u0430","category_number":"7903"},{"name":"\u041f\u0440\u0438\u043d\u0442\u0435\u0440 \u044d\u0442\u0438\u043a\u0435\u0442\u043e\u043a","category_number":"7939"},{"name":"\u041f\u0440\u0438\u043d\u0442\u0435\u0440 \u0447\u0435\u043a\u043e\u0432","category_number":"7938"},{"name":"\u041f\u0440\u0438\u043d\u0442\u0435\u0440 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0445 \u043a\u0430\u0440\u0442","category_number":"7937"}]},{"category":"\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435","list":[{"name":"\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435","category_number":"1392"},{"name":"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0441\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435","category_number":"1561"},{"name":"\u041f\u0430\u0441\u0441\u0438\u0432\u043d\u043e\u0435 \u0441\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435","category_number":"1564"}]},{"category":"\u0422\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u044b, \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0440\u044b","list":[{"name":"\u0422\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u044b \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0440\u044b","category_number":"1098"},{"name":"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u043a \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0430\u043c","category_number":"7815"},{"name":"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u043a \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0430\u043c \u0438 \u0434\u0440\u0443\u0433\u043e\u0435","category_number":"1099"},{"name":"\u041a\u0430\u0431\u0435\u043b\u044c \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u0438\u043e\u043d\u043d\u044b\u0439","category_number":"8407"},{"name":"\u0413\u0430\u0434\u0436\u0435\u0442\u044b (HI-TECH)","category_number":"8162"}]},{"category":"\u0413\u0430\u0440\u043d\u0438\u0442\u0443\u0440\u0430","list":[{"name":"\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 \u0438 \u0433\u0430\u0440\u043d\u0438\u0442\u0443\u0440\u044b","category_number":"1365"},{"name":"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u043a \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0430\u043c \u0438 \u0434\u0440\u0443\u0433\u043e\u0435","category_number":"1099"}]},{"category":"\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430","list":[{"name":"\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430","category_number":"7302"},{"name":"\u041c\u0435\u043b\u043a\u0430\u044f \u0431\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430","category_number":"7275"},{"name":"\u041a\u0440\u0443\u043f\u043d\u0430\u044f \u0431\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430","category_number":"7442"}]}]}')},87:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.4907ff2b.chunk.js.map