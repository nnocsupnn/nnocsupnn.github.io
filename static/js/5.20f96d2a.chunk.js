(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{115:function(t,e,n){t.exports=n(116)},116:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(117),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},117:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",l="object"===typeof t,s=e.regeneratorRuntime;if(s)l&&(t.exports=s);else{(s=e.regeneratorRuntime=l?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==r&&o.call(y,i)&&(v=y);var b=j.prototype=x.prototype=Object.create(v);O.prototype=b.constructor=j,j.constructor=O,j[u]=O.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[c]=function(){return this},s.AsyncIterator=k,s.async=function(t,e,n,r){var o=new k(w(t,e,n,r));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function w(t,e,n,r){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new G(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return R()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=E(t,e,n);if("normal"===u.type){if(r=n.done?m:h,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=m,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function E(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function O(){}function j(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,r){function a(){return new Promise(function(e,a){!function e(n,r,a,i){var c=E(t[n],t,r);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,i)})}i(c.arg)}(n,r,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=E(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},123:function(t,e,n){"use strict";n.r(e);var r=n(115),o=n.n(r);function a(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}var i=n(18),c=n(19),u=n(21),l=n(20),s=n(22),f=n(5),h=n(0),p=n.n(h),m=n(6),d=(n(7),n(8),n(55));function v(){var t=Object(f.a)(["\n    text-decoration: none;\n    color: #fff;\n    text-transform: uppercase;\n    font-size: 16px;\n    background: #0077B5;\n    margin: 5px;\n\tpadding: 5px;\n\tborder-radius: 5px;\n"]);return v=function(){return t},t}function g(){var t=Object(f.a)(["\n    height: 100px;\n\tborder-radius: 50%;\n\tborder: 1px solid #00ced1;\n\tmargin: 0px 10px;\n"]);return g=function(){return t},t}function y(){var t=Object(f.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-position: center;\n  \tbackground-size: cover;\n  \t\n  \ta:hover {\n  \t    color: #fff;\n  \t    text-decoration: none;\n  \t}\n"]);return y=function(){return t},t}function b(){var t=Object(f.a)(["\n    border-bottom: 1px solid #fff;\n    width: auto;\n    text-decoration: none;\n    padding-top: 10px;\n"]);return b=function(){return t},t}function w(){var t=Object(f.a)(["\n    font-size: 18px;\n"]);return w=function(){return t},t}function E(){var t=Object(f.a)(["\n    color: red;\n"]);return E=function(){return t},t}function x(){var t=Object(f.a)(["\n\twidth: 100%;\n\tbackground: rgb(32, 32, 32, 0.5);\n    overflow: hidden;\n    text-align: center;\n    font-size: 24px;\n"]);return x=function(){return t},t}function O(){var t=Object(f.a)(["\n\theight: 100%;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 15px 0;\n"]);return O=function(){return t},t}function j(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\ttext-transform: uppercase;\n"]);return j=function(){return t},t}function L(){var t=Object(f.a)(["\n\tanimation: left 1s ease-in-out;\n\n\t@keyframes left {\n\t\tfrom {\n\t\t\ttransform: translateX(100%);\n\t\t}\n\n\t\tto {\n\t\t\ttransform: translateX(0);\n\t\t}\n\t}\n"]);return L=function(){return t},t}var k=m.b.h1(L()),_=m.b.div(j()),P=(m.b.div(O()),m.b.div(x())),S=m.b.span(E()),G=m.b.span(w()),N=m.b.div(b()),R=m.b.div(y()),T=m.b.img(g()),F=m.b.a(v()),D=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={github:{}},n}return Object(s.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){var t,e=this;(t=o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/nincas");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.setState({github:r});case 7:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)})}).bind(this)()}},{key:"render",value:function(){return p.a.createElement("div",{className:"container"},p.a.createElement(d.Helmet,null,p.a.createElement("title",null,"About")),p.a.createElement(P,null,p.a.createElement(k,null,"ABOUT >>")),p.a.createElement("br",null),p.a.createElement(R,null,p.a.createElement(T,{src:this.state.github.avatar_url})),p.a.createElement(R,null,p.a.createElement(F,{href:"https://"+this.state.github.blog,target:"_blank"},"BLOG"),p.a.createElement(F,{href:"https://facebook.com/nnocsupnn",target:"_blank"},this.state.github.name),p.a.createElement(F,{href:this.state.github.repos_url,target:"_blank"},"REPOS")),p.a.createElement(_,null,p.a.createElement(P,null,"Graduated from ",p.a.createElement(S,null,"Tarlac State University."),p.a.createElement("br",null),p.a.createElement(S,null,"Experiences"),p.a.createElement(N,null,p.a.createElement(S,null,"Pasig, One San Miguel - 2017/18"),p.a.createElement("ul",null,p.a.createElement("li",null,"IT Desktop/Programmer"))),p.a.createElement(N,null,p.a.createElement(S,null,"Makati - 2018/19"),p.a.createElement("ul",null,p.a.createElement("li",null,"Software Developer"),p.a.createElement("li",null,"Sr Software Developer"))),p.a.createElement(N,null,p.a.createElement(S,null,"Taguig, BGC - 2019"),p.a.createElement("ul",null,p.a.createElement("li",null,"Full Stack Developer"))),p.a.createElement(G,{className:"fa fa-code"}),p.a.createElement(S,null,"Programming Languages"),p.a.createElement("br",null),"Javascript",p.a.createElement("br",null),"PHP",p.a.createElement("br",null),"C#",p.a.createElement("br",null),"Python",p.a.createElement("br",null),"Dart")))}}]),e}(p.a.Component);e.default=D}}]);
//# sourceMappingURL=5.20f96d2a.chunk.js.map