(this["webpackJsonpconsuming-apis"]=this["webpackJsonpconsuming-apis"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(25),a=n.n(i),o=(n(35),n(9)),r=n(2),j=(n(36),n(1)),l=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"nav-wrapper blue",children:[Object(j.jsx)(o.b,{to:"/",className:"brand-logo center",children:"Consuming APIs"}),Object(j.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/About",children:"About"})})]})]})})},d=n(15),b=n.n(d),h=n(28),u=n(30),p=function(e){var t=e.post;return Object(j.jsx)("div",{className:"post card",children:Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:t.title}),Object(j.jsx)("p",{children:t.body})]})},t.id)},x=function(e){var t=e.posts,n=e.isLoading;return t&&0!==t.length?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"list-head",children:"Posts"}),!n&&t.map((function(e){return Object(j.jsx)(p,{post:e},e.id)}))]}):Object(j.jsx)("p",{children:"No posts available."})},O=n(29),m=n.n(O);var f=function(){var e=Object(c.useState)({loading:!1,posts:null}),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({loading:!0}),"https://jsonplaceholder.typicode.com/posts",e.next=4,m.a.get("https://jsonplaceholder.typicode.com/posts");case 4:t=e.sent,s({loading:!1,posts:t.data.slice(0,5)});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(j.jsx)(x,{isLoading:n.loading,posts:n.posts})},g=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"About"}),Object(j.jsx)("h5",{children:"CPSC 2600 Assignment 6"})]})},v=function(){return Object(j.jsx)(c.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})," Page Not Found"]}),Object(j.jsx)("h5",{children:"Sorry, this page does not exist"})]})})};var N=function(){return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:f}),Object(j.jsx)(r.a,{exact:!0,path:"/About",component:g}),Object(j.jsx)(r.a,{component:v})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.6795fc1b.chunk.js.map