(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{319:function(e,t,n){"use strict";n.r(t);var o=n(3);var r=n(4),a=n(0),i=n.n(a),l=n(325),s=n(330),u=n(326),c=n(22),f=n(328),d=n(100),p=n.n(d),m=n(387),h=n.n(m),v=[{title:"Discord with C++",description:i.a.createElement(i.a.Fragment,null,"Use the Discord API with software already written in C++.")},{title:"Modular",description:i.a.createElement(i.a.Fragment,null,"Can be optionality customized by using different objects for WebScokets, HTTPS, I/O, etc.")},{title:"Portable",description:i.a.createElement(i.a.Fragment,null,"As long as your platform or environment can use the internet and run C++11 code, then Sleepy Discord can run on it.")}];function b(e){var t=e.imageUrl,n=void 0===t?"":t,o=e.title,r=e.description,a=Object(f.a)(n);return i.a.createElement("div",{className:Object(l.a)("col col--4",p.a.feature)},a&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:p.a.featureImage,src:a,alt:o})),i.a.createElement("h3",null,o),i.a.createElement("p",null,r))}var g=function(e,t){this.imageURL=e,this.blur=t},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=new g("img/Untitled.jpg",!0),n.handleLoaded=n.handleLoaded.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.handleLoaded=function(){var e=this;"img/Untitled.jpg"===this.state.imageURL?this.setState((function(e,t){return new g("img/UntitledHigh.webp",e.blur)})):"img/UntitledHigh.webp"===this.state.imageURL?this.setState((function(t,n){return window.setTimeout((function(){e.setState((function(e,t){return new g("img/360-degree_Panorama_of_the_Southern_Sky_edit.webp",e.blur)}))}),250),new g(e.state.imageURL,!1)})):window.setTimeout((function(){e.setState((function(e,t){return new g("img/360-degree_Panorama_of_the_Southern_Sky_edit1high.webp",e.blur)}))}),500)},n.render=function(){return i.a.createElement("img",{className:Object(l.a)("header-image",this.state.blur?"blur4x":"unblur"),src:this.state.imageURL,onLoad:this.handleLoaded,height:4230,width:4230})},t}(i.a.Component);t.default=function(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e;return i.a.createElement(s.a,{description:"C++ library for Discord."},i.a.createElement("div",{className:"vertical-flex"},i.a.createElement("header",{className:Object(l.a)(p.a.heroBanner,"front-header")},i.a.createElement("div",{className:"back-header"},i.a.createElement(h.a,{height:4320,once:!0,placeholder:i.a.createElement("img",{className:"header-image blur4x",src:"img/Untitled.jpg",height:4230,width:4230})},i.a.createElement(y,null))),i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},t.title),i.a.createElement("p",{className:"hero__subtitle"},t.tagline),i.a.createElement("div",{className:p.a.buttons},i.a.createElement(u.a,{className:Object(l.a)("button button--outline button--secondary button--lg",p.a.getStarted),to:Object(f.a)("docs/")},"Get Started")))),i.a.createElement("main",{className:"front-page-content"},v&&v.length>0&&i.a.createElement("section",{className:p.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},v.map((function(e,t){return i.a.createElement(b,Object(o.a)({key:t},e))}))))))))}},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=f(r),i=f(n(1)),l=n(388),s=f(n(389)),u=f(n(390)),c=f(n(391));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,b=0,g=0,y="data-lazyload-listened",w=[],E=[],_=!1;try{var O=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,O)}catch(S){}var N=!!_&&{capture:!1,passive:!0},j=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,a=void 0,i=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.left,a=l.height,i=l.width}catch(S){o=h,r=v,a=g,i=b}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),f=Math.max(r,0),d=Math.min(s,o+a)-c,p=Math.min(u,r+i)-f,m=void 0,y=void 0,w=void 0,E=void 0;try{var _=n.getBoundingClientRect();m=_.top,y=_.left,w=_.height,E=_.width}catch(S){m=h,y=v,w=g,E=b}var O=m-c,N=y-f,j=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-j[0]<=d&&O+w+j[1]>=0&&N-j[0]<=p&&N+E+j[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(S){n=h,o=g}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+o+i[1]>=0}(e))?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){E.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),E=[]},L=function(){for(var e=0;e<w.length;++e){var t=w[e];j(t)}C()},P=void 0,T=null,U=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===P||"debounce"===P&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",T,N),(0,l.off)(window,"resize",T,N),T=null),T||(void 0!==this.props.debounce?(T=(0,u.default)(L,"number"==typeof this.props.debounce?this.props.debounce:300),P="debounce"):void 0!==this.props.throttle?(T=(0,c.default)(L,"number"==typeof this.props.throttle?this.props.throttle:300),P="throttle"):T=L),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(y)+1;1===r&&o.addEventListener("scroll",T,N),o.setAttribute(y,r)}}else if(0===w.length||n){var a=this.props,i=a.scroll,f=a.resize;i&&(0,l.on)(e,"scroll",T,N),f&&(0,l.on)(window,"resize",T,N)}w.push(this),j(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",T,N),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!=typeof window&&((0,l.off)(window,"resize",T,N),(0,l.off)(window,"scroll",T,N))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,i=e.classNamePrefix,l=e.style;return a.default.createElement("div",{className:i+"-wrapper "+r,ref:this.setRef,style:l},this.visible?n:o||a.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(r.Component);U.propTypes={className:i.default.string,classNamePrefix:i.default.string,once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool,style:i.default.object},U.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var k=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){d(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+k(t),e}return m(r,n),o(r,[{key:"render",value:function(){return a.default.createElement(U,e,a.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=U,t.forceCheck=L,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}C()}},388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),a=r.position,i=r.overflow,l=r["overflow-x"],s=r["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,a=void 0,i=void 0,l=void 0,s=function s(){var u=+new Date-i;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(a,r),o||(a=null,r=null)))};return function(){a=this,r=arguments,i=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(a,r),a=null,r=null),l}}},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var a=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(r),r=setTimeout((function(){o=i,e.apply(a,l)}),t)):(o=i,e.apply(a,l))}}}}]);