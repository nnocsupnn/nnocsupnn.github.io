(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{32:function(e,n,t){e.exports=t(48)},40:function(e,n,t){e.exports=t.p+"static/media/bg-image.d078968b.jpg"},41:function(e,n,t){},42:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),l=t.n(o),c=t(5),i=t(6);function m(){var e=Object(c.a)(["\n    @import url('https://fonts.googleapis.com/css?family=VT323');\n    @import \"~video-react/styles/scss/video-react\";\n    \n    body {\n        padding-left: 120px;\n        padding-right: 120px;\n        font-family: 'VT323', monospace;\n        background: url(",") fixed center no-repeat;\n        background-size: cover;\n        color: #fff !important;\n        height: 100vh;\n    }\n\n    textarea {\n        resize: none;\n        max-width: 100%;\n        max-height: 500px;\n        height: 200px;\n    }\n\n    .jumbotron {\n        background: transparent;\n    }\n\n    html {\n       \n    }\n\n    .container {\n        margin-top: 70px;\n        padding-bottom: 100px;\n    }\n\n    .footer {\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        margin-top: 100px;\n        width: 100%;\n        height: 40px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(32,32,32, 0.5);\n        color: white;\n     }\n\n     .fa {\n        padding: 10px;\n        font-size: 10px;\n        width: 33px;\n        text-align: center;\n        text-decoration: none;\n        margin: 5px 2px;\n    }\n\n    .fa:hover {\n        opacity: 0.7;\n        color:white;\n        text-decoration: none;\n    }\n\n    .fa-facebook {\n        background: #3B5998;\n        color: white;\n    }\n    .fa-instagram {\n        background: #125688;\n        color: white;\n    }\n    .fa-google {\n        background: #dd4b39;\n        color: white;\n    }\n    \n    .fa-linkedin {\n        background: #0077B5;\n        color: white;\n    }\n\n    .fa-github {\n        background: #333333;\n        color: white;\n    }\n\n    body {\n        padding-left: 0;\n        padding-right: 0;\n        width: 100%;\n    }\n\n    ul {\n        list-style: none !important;\n    }\n    \n    .popup-content {\n        width: 33% !important;\n        border-radius: 1em;\n        background: linear-gradient(to right bottom, transparent, 45%, #26282b, #333) !important;\n        color: #fff;\n        font-size: 30px !important;\n        text-align: center;\n        height: 33% !important;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n    }\n\n    @media screen and (max-width: 768px) {\n        #headerName h1 {\n            font-size: 24px !important;    \n        }\n        \n        .popup-content {\n            width: 95% !important;\n            height: 40% !important;\n        }\n    }\n"]);return m=function(){return e},e}var s=Object(i.a)(m(),t(40)),u=t(20),d=t(21),p=t(23),f=t(22),g=t(24),b=t(50),h=t(51),E=t(31);function v(){var e=Object(c.a)(["\n    color: yellow;\n"]);return v=function(){return e},e}function x(){var e=Object(c.a)(["\n    padding-top: 30px;\n    text-align: center;\n"]);return x=function(){return e},e}function w(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-left: 50%;\n    margin-right: 50%;\n"]);return w=function(){return e},e}function k(){var e=Object(c.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 8px dotted white;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    animation: PreLoading 1s ease-in-out infinite;\n    top: 45%;\n    transform: translateY(50%);\n    position: absolute;\n\n    @keyframes PreLoading {\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"]);return k=function(){return e},e}function O(){var e=Object(c.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 8px solid rgb(78, 78, 78);\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    animation: Loading 1s ease infinite;\n    top: 45%;\n    transform: translateY(50%);\n    position: absolute;\n\n    @keyframes Loading {\n        from {\n            transform: rotate(360deg);\n        }\n\n        to {\n            transform: rotate(0deg);\n        }\n    }\n"]);return O=function(){return e},e}var y=i.b.div(O()),j=i.b.div(k()),N=i.b.div(w());i.b.h3(x()),i.b.span(v());function z(e){e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement(y,null),r.a.createElement(j,null)))}var _=t(17),C=t(49);t(41),t(42);function F(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.clicked},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))}var L=t(7),P=t(8);function T(){var e=Object(c.a)(["\n\t\n"]);return T=function(){return e},e}var H=r.a.createElement(L.a,{icon:P.f}),A=i.b.div(T());function B(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",null,r.a.createElement(F,{clicked:e.triggerDrawer})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement(_.a,{to:"/"},r.a.createElement(A,null,H))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(C.a,{to:"/projects",activeClassName:"nav-active"},r.a.createElement(L.a,{icon:P.c})," PROJECTS")),r.a.createElement("li",null,r.a.createElement(C.a,{to:"/contact",activeClassName:"nav-active"},r.a.createElement(L.a,{icon:P.a})," CONTACT")),r.a.createElement("li",null,r.a.createElement(C.a,{to:"/about",activeClassName:"nav-active"},r.a.createElement(L.a,{icon:P.e})," ABOUT"))))))}t(46);var D=function(e){var n="side-drawer";return e.show&&(n="side-drawer open"),r.a.createElement("nav",{className:n},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(_.a,{to:"/"},"Projects")),r.a.createElement("li",null,r.a.createElement(_.a,{to:"/"},"Contacts")),r.a.createElement("li",null,r.a.createElement(_.a,{to:"/"},"About"))))};t(47);function S(e){return r.a.createElement("div",{className:"backdrop",onClick:e.clicked})}var G=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,115))}),J=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(3),t.e(6)]).then(t.bind(null,116))}),I=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,119))}),U=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,117))}),V=Object(a.lazy)(function(){return t.e(9).then(t.bind(null,118))}),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{triggerDrawer:e}),r.a.createElement("div",{className:"container"},"404 PAGE NOT FOUND"))},R=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{target:"_blank",href:"http://facebook.com/nnocsupnn",className:"fa fa-facebook",title:"Facebook"},r.a.createElement(r.a.Fragment,null)),r.a.createElement("a",{target:"_blank",href:"https://instagram.com/nnocsupnn",className:"fa fa-instagram",title:"Instagram"},r.a.createElement(r.a.Fragment,null)),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/nnocsupnn/",className:"fa fa-linkedin",title:"Linkedin"},r.a.createElement(r.a.Fragment,null)),r.a.createElement("a",{target:"_blank",href:"mailto:nincas21@gmail.com",className:"fa fa-google",title:"Gmail"},r.a.createElement(r.a.Fragment,null)),r.a.createElement("a",{target:"_blank",href:"https://github.com/nincas",className:"fa fa-github",title:"Github"},r.a.createElement(r.a.Fragment,null)))},q=function(e){function n(){var e;return Object(u.a)(this,n),(e=Object(p.a)(this,Object(f.a)(n).call(this))).drawerClickHandler=function(){e.setState(function(e){return{drawerOpen:!e.drawerOpen}})},e.backdropClickHandler=function(){e.setState({drawerOpen:!1})},e.lazyLoader=function(n){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.state.drawerOpen&&(t=r.a.createElement(S,{clicked:e.backdropClickHandler})),function(l){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(z,{name:o})},r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{triggerDrawer:e.drawerClickHandler}),r.a.createElement(D,{show:e.state.drawerOpen}),t,r.a.createElement(n,l),r.a.createElement(R,null)))}},e.state={drawerOpen:!1},e}return Object(g.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:this.lazyLoader(G,"home")}),r.a.createElement(E.a,{exact:!0,path:"/projects",component:this.lazyLoader(J,"projects")}),r.a.createElement(E.a,{exact:!0,path:"/contact",component:this.lazyLoader(I,"contact")}),r.a.createElement(E.a,{exact:!0,path:"/about",component:this.lazyLoader(U,"about")}),r.a.createElement(E.a,{path:"/project/:id",component:this.lazyLoader(V)}),r.a.createElement(E.a,{component:Y.bind(this,this.drawerClickHandler)}))))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(q,null)),document.getElementById("root"))}},[[32,2,4]]]);
//# sourceMappingURL=main.e4991856.chunk.js.map