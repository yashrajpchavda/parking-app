!function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=0,c=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"e6c71",3:"62c75"}[e]+".css",l=n.p+i,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var a=(p=u[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(a===i||a===l))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var p;if((a=(p=s[c]).getAttribute("data-href"))===i||a===l)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||l,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=l,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=l);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"bbe4d",3:"bfcd7"}[e]+".esm.js"}(e);var a=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var a=u;n(n.s="mdyV")}({GFNa:function(){},QfWi:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function i(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(u).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function u(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function c(){var e;return""+((e=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:b).pathname||"")+(e.search||"")}function a(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=m.length;t--;)if(m[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),y&&y[t]?y[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<m.length;n++)!0===m[n].routeTo(e)&&(t=!0);for(var r=g.length;r--;)g[r](e);return t}function p(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(t)}}function f(e){if(0==e.button)return p(e.currentTarget||e.target||this),_(e)}function _(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(p(t))return _(e)}}while(t=t.parentNode)}}n.r(t);n("GFNa");var h=n("hosL"),v={},y=null,m=[],g=[],b={},k=!1,C=function(e){function t(t){e.call(this,t),t.history&&(y=t.history),this.state={url:t.url||c()},k||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),k=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(h.f)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},t.prototype.componentWillMount=function(){m.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;y&&(this.unlisten=y.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),m.splice(m.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(i).sort(o).map((function(e){var o=function(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var p=Math.max(e.length,t.length),f=0;f<p;f++)if(t[f]&&":"===t[f].charAt(0)){var _=t[f].replace(/(^:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||v)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),m=e[f]||"";if(!m&&!y&&(d.indexOf("?")<0||h)){r=!1;break}if(u[_]=decodeURIComponent(m),h||y){u[_]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}(t,e.props.path,e.props);if(o){if(!1!==n){var i={url:t,matches:o};return r(i,o),delete i.ref,delete i.key,Object(h.b)(e,i)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(h.f)(n),o,!0),l=i[0]||null;this._didRoute=!!l;var u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:l})),l},t}(h.a),O=function(e){return Object(h.c)("a",r({onClick:f},e))};C.subscribers=g,C.getCurrentUrl=c,C.route=a,C.Router=C,C.Route=function(e){return Object(h.c)(e.component,e)},C.Link=O;var w=n("ySiU"),S=n.n(w),j=()=>Object(h.d)("header",{class:S.a.header},Object(h.d)("h1",null,"Preact App"),Object(h.d)("nav",null,Object(h.d)(O,{activeClassName:S.a.active,href:"/"},"Home"),Object(h.d)(O,{activeClassName:S.a.active,href:"/profile"},"Me"),Object(h.d)(O,{activeClassName:S.a.active,href:"/profile/john"},"John"))),x=function(e){function t(){var t,n;h.a.call(this),this.componentWillMount=()=>{t=this.base=this.nextBase||this.__b,e(e=>{this.setState({child:e.default||e})})},this.shouldComponentUpdate=(e,r)=>(n=(r=void 0===r.child)&&void 0===n&&t?3===t.nodeType?t.data:Object(h.d)(t.nodeName,{dangerouslySetInnerHTML:{__html:t.innerHTML}}):"",!r),this.render=(e,t)=>t.child?Object(h.d)(t.child,e):n}return(t.prototype=new h.a).constructor=t,t},P=x((function(e){n.e(2).then(function(){e(n("+1Jk"))}.bind(null,n)).catch(n.oe)})),U=x((function(e){n.e(3).then(function(){e(n("BM80"))}.bind(null,n)).catch(n.oe)}));t.default=class extends h.a{constructor(){super(...arguments),this.handleRoute=e=>{this.currentUrl=e.url}}render(){return Object(h.d)("div",{id:"app"},Object(h.d)(j,null),Object(h.d)(C,{onChange:this.handleRoute},Object(h.d)(P,{path:"/"}),Object(h.d)(U,{path:"/profile/",user:"me"}),Object(h.d)(U,{path:"/profile/:user"})))}}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,i,u,c,a=arguments;if(t=r({},t),arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(a[o]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===t[i]&&(t[i]=e.defaultProps[i]);return c=t.key,null!=(u=t.ref)&&delete t.ref,null!=c&&delete t.key,l(e,t,c,u)}function l(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return j.vnode&&j.vnode(o),o}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function a(e,t){if(null==t)return e.__p?a(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?a(e):null}function s(e){var t,n;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&1===x.push(e)||U!==j.debounceRendering)&&(U=j.debounceRendering,(j.debounceRendering||P)(f))}function f(){var e,t,n,o,i,l,u,c;for(x.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=x.pop();)e.__d&&(n=void 0,o=void 0,l=(i=(t=e).__v).__e,u=t.__P,c=t.u,t.u=!1,u&&(n=[],o=m(u,i,r({},i),t.__n,void 0!==u.ownerSVGElement,null,n,c,null==l?a(i):l),g(n,i),o!=l&&s(i)))}function _(e,t,n,r,i,l,u,c,s){var p,f,_,h,v,y,g,b=n&&n.__k||A,O=b.length;if(c==T&&(c=null!=l?l[0]:O?a(n,0):null),p=0,t.__k=d(t.__k,(function(n){if(null!=n){if(n.__p=t,n.__b=t.__b+1,null===(_=b[p])||_&&n.key==_.key&&n.type===_.type)b[p]=void 0;else for(f=0;f<O;f++){if((_=b[f])&&n.key==_.key&&n.type===_.type){b[f]=void 0;break}_=null}if(h=m(e,n,_=_||T,r,i,l,u,null,c,s),(f=n.ref)&&_.ref!=f&&(g||(g=[])).push(f,n.__c||h,n),null!=h){if(null==y&&(y=h),null!=n.l)h=n.l,n.l=null;else if(l==_||h!=c||null==h.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(h);else{for(v=c,f=0;(v=v.nextSibling)&&f<O;f+=2)if(v==h)break e;e.insertBefore(h,c)}"option"==t.type&&(e.value="")}c=h.nextSibling,"function"==typeof t.type&&(t.l=h)}}return p++,n})),t.__e=y,null!=l&&"function"!=typeof t.type)for(p=l.length;p--;)null!=l[p]&&o(l[p]);for(p=O;p--;)null!=b[p]&&C(b[p],b[p]);if(g)for(p=0;p<g.length;p++)k(g[p],g[++p],g[++p])}function d(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)d(e[r],t,n);else n.push(t?t(function(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return l(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=l(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}(e)):e);return n}function h(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===N.test(t)?n+"px":null==n?"":n}function v(e,t,n,r,o){var i,l,u,c,a;if("key"===(t=o?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)n&&l in n||h(i,l,"");if(n)for(u in n)r&&n[u]===r[u]||h(i,u,n[u])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,y,c),(e.t||(e.t={}))[t]=n):e.removeEventListener(t,y,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){return this.t[e.type](j.event?j.event(e):e)}function m(e,t,n,o,i,l,a,s,p,f){var h,v,y,m,g,k,C,w,S,x,P=t.type;if(void 0!==t.constructor)return null;(h=j.__b)&&h(t);try{e:if("function"==typeof P){if(w=t.props,S=(h=P.contextType)&&o[h.__c],x=h?S?S.props.value:h.__p:o,n.__c?C=(v=t.__c=n.__c).__p=v.__E:("prototype"in P&&P.prototype.render?t.__c=v=new P(w,x):(t.__c=v=new c(w,x),v.constructor=P,v.render=O),S&&S.sub(v),v.props=w,v.state||(v.state={}),v.context=x,v.__n=o,y=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&r(v.__s==v.state?v.__s=r({},v.__s):v.__s,P.getDerivedStateFromProps(w,v.__s)),y)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&a.push(v);else{if(null==P.getDerivedStateFromProps&&null==s&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(w,x),!s&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(w,v.__s,x)){for(v.props=w,v.state=v.__s,v.__d=!1,v.__v=t,t.__e=null!=p?p!==n.__e?p:n.__e:null,t.__k=n.__k,h=0;h<t.__k.length;h++)t.__k[h]&&(t.__k[h].__p=t);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(w,v.__s,x)}for(m=v.props,g=v.state,v.context=x,v.props=w,v.state=v.__s,(h=j.__r)&&h(t),v.__d=!1,v.__v=t,v.__P=e,h=v.render(v.props,v.state,v.context),t.__k=d(null!=h&&h.type==u&&null==h.key?h.props.children:h),null!=v.getChildContext&&(o=r(r({},o),v.getChildContext())),y||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(m,g)),_(e,t,n,o,i,l,a,p,f),v.base=t.__e;h=v.__h.pop();)v.__s&&(v.state=v.__s),h.call(v);y||null==m||null==v.componentDidUpdate||v.componentDidUpdate(m,g,k),C&&(v.__E=v.__p=null)}else t.__e=b(n.__e,t,n,o,i,l,a,f);(h=j.diffed)&&h(t)}catch(e){j.__e(e,t,n)}return t.__e}function g(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(e){j.__e(e,n.__v)}j.__c&&j.__c(t)}function b(e,t,n,r,o,i,l,u){var c,a,s,p,f=n.props,d=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&(null===t.type?3===a.nodeType:a.localName===t.type)){e=a,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null}return null===t.type?f!==d&&(null!=i&&(i[i.indexOf(e)]=null),e.data=d):t!==n&&(null!=i&&(i=A.slice.call(e.childNodes)),s=(f=n.props||T).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,u||(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||"")),function(e,t,n,r,o){var i;for(i in n)i in t||v(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||v(e,i,t[i],n[i],r)}(e,d,f,o,u),t.__k=t.props.children,p||_(e,t,n,r,"foreignObject"!==t.type&&o,i,l,T,u),u||("value"in d&&void 0!==d.value&&d.value!==e.value&&(e.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==e.checked&&(e.checked=d.checked))),e}function k(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){j.__e(e,n)}}function C(e,t,n){var r,i,l;if(j.unmount&&j.unmount(e),(r=e.ref)&&k(r,null,t),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.l=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){j.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&C(r[l],t,n);null!=i&&o(i)}function O(e,t,n){return this.constructor(e,n)}function w(e,t,n){var r,o,l;j.__p&&j.__p(e,t),o=(r=n===L)?null:n&&n.__k||t.__k,e=i(u,null,[e]),l=[],m(t,r?t.__k=e:(n||t).__k=e,o||T,T,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:A.slice.call(t.childNodes),l,!1,n||T,r),g(l,e)}function S(e,t){return t=r(r({},e.props),t),arguments.length>2&&(t.children=A.slice.call(arguments,2)),l(e.type,t,t.key||e.key,t.ref||e.ref)}n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return S})),n.d(t,"f",(function(){return d}));var j,x,P,U,L,T={},A=[],N=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;j={},c.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=r({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&r(n,e),null!=e&&this.__v&&(this.u=!1,t&&this.__h.push(t),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,p(this))},c.prototype.render=u,x=[],P="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U=j.debounceRendering,j.__e=function(e,t){for(var n;t=t.__p;)if((n=t.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return p(n.__E=n)}catch(t){e=t}throw e},L=T},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof o(n("QfWi"))){var i=document.body.firstElementChild;0,(()=>{var e=o(n("QfWi")),t={},l=document.querySelector('[type="__PREACT_CLI_DATA__"]');l&&(t=JSON.parse(l.innerHTML).preRenderData);var u={preRenderData:t};i=Object(r.e)(Object(r.d)(e,{CLI_DATA:u}),document.body,i)})()}},ySiU:function(e){e.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.e7e91.esm.js.map