(this["webpackJsonpreact-komponenter"]=this["webpackJsonpreact-komponenter"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),i=c(4),o=c.n(i),j=(c(10),c(2));c(11),c(12);var l=function(e){return Object(n.jsxs)("div",{style:{backgroundColor:e.color},className:"colorbox",children:[Object(n.jsx)("img",{src:e.icon}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("p",{children:e.text})]})]})};c(13);function a(e){return Object(n.jsxs)("article",{className:"travel",children:[Object(n.jsx)("img",{src:"./Travel/travel.png"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{children:"TRAVEL"}),Object(n.jsx)("h1",{children:"Surfing in Maldives"}),Object(n.jsx)("p",{children:"It\u2019s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."})]})]})}c(14);function d(){return Object(n.jsxs)("article",{className:"outdoor",children:[Object(n.jsx)("img",{src:"./Outdoor/outdoor.png"}),Object(n.jsxs)("section",{children:[Object(n.jsx)("button",{children:"LEISURE"}),Object(n.jsx)("h1",{children:"Outdoor Experience"}),Object(n.jsx)("p",{children:"It\u2019s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."}),Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"./Outdoor/outdoorSmall1.png"}),Object(n.jsx)("img",{src:"./Outdoor/outdoorSmall2.png"}),Object(n.jsx)("img",{src:"./Outdoor/outdoorSmall3.png"})]})]})]})}c(15);function b(e){return Object(n.jsxs)("article",{className:"collection",children:[Object(n.jsx)("img",{className:"image",src:e.image}),Object(n.jsx)("h2",{children:e.collection}),Object(n.jsxs)("section",{children:[Object(n.jsx)("img",{src:e.icon}),Object(n.jsx)("h1",{children:e.title}),Object(n.jsx)("p",{children:e.author})]})]})}c(16);function u(e){return Object(n.jsxs)("article",{class:"card",children:[Object(n.jsx)("img",{src:e.image}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{color:e.color},children:e.title}),Object(n.jsx)("p",{children:e.text})]})]})}c(17);function O(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("./News/news.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("article",{className:"news",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"LATEST NEWS"})}),c.map((function(e){return Object(n.jsx)(u,{image:e.image,title:e.title,text:e.text,color:e.color})})),Object(n.jsx)("footer",{children:Object(n.jsx)("h2",{children:"MORE NEWS"})})]})})}c(18);function h(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("./SmallNews/smallNews.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(n.jsx)("div",{class:"smallNews",children:c.map((function(e){return Object(n.jsx)(u,{image:e.image,title:e.title,text:e.text,color:e.color})}))})}c(19);function x(){return Object(n.jsxs)("div",{className:"slider",children:[Object(n.jsx)("img",{className:"background",src:"./Slider/image1.png"}),Object(n.jsxs)("div",{className:"sliderTop",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"./Slider/logo.png"}),Object(n.jsx)("h3",{children:"THE NEW YORK TIMES"})]}),Object(n.jsx)("img",{className:"sliderLogo",src:"./Slider/heart.png"})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"sliderContent",children:[Object(n.jsx)("h1",{children:"Must see places for summer"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam"})]}),Object(n.jsxs)("div",{className:"sliderRange",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})]})]})}c(20);function m(e){return Object(n.jsxs)("article",{className:"imageCard",children:[Object(n.jsx)("img",{src:e.image}),Object(n.jsx)("h1",{style:{color:e.color},children:e.title}),Object(n.jsx)("p",{children:e.text})]})}c(21);function f(){return Object(n.jsxs)("div",{className:"vr",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Virtual Reality"}),Object(n.jsx)("img",{src:"./Vr/icon.png"})]}),Object(n.jsx)("img",{className:"vrImage",src:"./Vr/image1.png"}),Object(n.jsx)("h3",{children:"TECHNOLOGY"})]})}c(22);function g(e){return Object(n.jsxs)("div",{className:"colorboxSmall",style:{backgroundColor:e.color},children:[Object(n.jsx)("img",{src:e.icon}),Object(n.jsx)("h1",{children:e.title})]})}c(23);function p(e){return Object(n.jsxs)("div",{className:"digest",style:{borderBottom:e.border},children:[Object(n.jsx)("div",{style:{backgroundColor:e.color},children:Object(n.jsx)("p",{children:e.number})}),Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("p",{children:e.text})]})}c(24);function v(e){return Object(n.jsxs)("div",{className:"readMore",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"./ReadMore/icon.png"}),Object(n.jsx)("h2",{children:"THE NEW YORK TIMES"})]}),Object(n.jsx)("p",{style:{color:e.textColor},children:e.text}),Object(n.jsx)("button",{style:{color:e.color,border:e.border},children:"READ MORE"})]})}var N=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)([]),o=Object(j.a)(i,2),u=o[0],N=o[1],S=Object(s.useState)([]),C=Object(j.a)(S,2),w=(C[0],C[1]),E=Object(s.useState)([]),T=Object(j.a)(E,2),y=T[0],I=T[1],M=Object(s.useState)([]),R=Object(j.a)(M,2),k=R[0],A=R[1],L=Object(s.useState)([]),F=Object(j.a)(L,2),B=F[0],D=F[1],W=Object(s.useState)([]),V=Object(j.a)(W,2),H=V[0],Y=V[1],q=Object(s.useState)([]),z=Object(j.a)(q,2),G=z[0],J=z[1];return Object(s.useEffect)((function(){fetch("./Colorbox/colorbox.json").then((function(e){return e.json()})).then((function(e){r(e)})),fetch("./Collection/collection.json").then((function(e){return e.json()})).then((function(e){N(e)})),fetch("./News/news.json").then((function(e){return e.json()})).then((function(e){w(e)})),fetch("./NewsCards/newsCards.json").then((function(e){return e.json()})).then((function(e){I(e)})),fetch("./NewsCardsBottom/newsCardsBottom.json").then((function(e){return e.json()})).then((function(e){A(e)})),fetch("./ColorboxSmall/colorboxSmall.json").then((function(e){return e.json()})).then((function(e){D(e)})),fetch("./Digest/digest.json").then((function(e){return e.json()})).then((function(e){Y(e)})),fetch("./ReadMore/readMore.json").then((function(e){return e.json()})).then((function(e){J(e)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)(a,{}),Object(n.jsx)(d,{})]}),Object(n.jsx)("div",{className:"colorboxContainer",children:c.map((function(e){return Object(n.jsx)(l,{icon:e.icon,title:e.title,text:e.text,color:e.color})}))}),Object(n.jsx)("div",{className:"collectionContainer",children:u.map((function(e){return Object(n.jsx)(b,{collection:e.collection,image:e.image,icon:e.icon,title:e.title,author:e.author})}))}),Object(n.jsxs)("div",{className:"newsContainer",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(h,{}),Object(n.jsx)("div",{className:"newsContainerCards",children:y.map((function(e){return Object(n.jsx)(m,{image:e.image,title:e.title,text:e.text,color:e.color})}))})]}),Object(n.jsx)(O,{})]}),Object(n.jsxs)("section",{className:"bottom",children:[Object(n.jsxs)("div",{children:[k.map((function(e){return Object(n.jsx)(m,{image:e.image,title:e.title,text:e.text,color:e.color})})),Object(n.jsx)(f,{}),Object(n.jsx)("section",{className:"smallCardContainer",children:B.map((function(e){return Object(n.jsx)(g,{icon:e.icon,title:e.title,color:e.color})}))})]}),Object(n.jsxs)("div",{className:"newsDigest",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"NEWS DIGEST"})}),Object(n.jsx)("section",{children:H.map((function(e){return Object(n.jsx)(p,{color:e.color,number:e.number,title:e.title,text:e.text,border:e.border})}))})]}),Object(n.jsx)("div",{children:G.map((function(e){return Object(n.jsx)(v,{color:e.color,border:e.border,textColor:e.textColor,text:e.text})}))})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),S()}],[[25,1,2]]]);
//# sourceMappingURL=main.3a1a9672.chunk.js.map