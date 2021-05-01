(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{326:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(3),c=t(7),a=(t(0),t(364)),i={title:"SleepyDiscord::EmbedThumbnail"},l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",id:"reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",isDocsHomePage:!1,title:"SleepyDiscord::EmbedThumbnail",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::EmbedProvider",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_provider"},next:{title:"SleepyDiscord::EmbedVideo",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_video"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function EmbedThumbnail",id:"function-embedthumbnail",children:[]},{value:"function EmbedThumbnail",id:"function-embedthumbnail-1",children:[]},{value:"function EmbedThumbnail",id:"function-embedthumbnail-2",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable url",id:"variable-url",children:[]},{value:"variable proxyUrl",id:"variable-proxyurl",children:[]},{value:"variable height",id:"variable-height",children:[]},{value:"variable width",id:"variable-width",children:[]}]}],u={toc:o};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inherits from ",Object(a.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(a.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(a.b)("h3",{id:"function-embedthumbnail"},"function EmbedThumbnail"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail() =default\n")),Object(a.b)("h3",{id:"function-embedthumbnail-1"},"function EmbedThumbnail"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail(\n    const json::Value & json\n)\n")),Object(a.b)("h3",{id:"function-embedthumbnail-2"},"function EmbedThumbnail"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail(\n    const nonstd::string_view & json\n)\n")),Object(a.b)("h3",{id:"function-empty"},"function empty"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool empty() const\n")),Object(a.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(a.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(a.b)("h3",{id:"variable-url"},"variable url"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string url;\n")),Object(a.b)("h3",{id:"variable-proxyurl"},"variable proxyUrl"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string proxyUrl;\n")),Object(a.b)("h3",{id:"variable-height"},"variable height"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t height = 0;\n")),Object(a.b)("h3",{id:"variable-width"},"variable width"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t width = 0;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  1 May 2021 at 00:12:54 UTC"))}b.isMDXComponent=!0},364:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),b=function(e){var n=c.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return c.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},p=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(t),p=r,m=s["".concat(i,".").concat(p)]||s[p]||d[p]||a;return t?c.a.createElement(m,l(l({ref:n},u),{},{components:t})):c.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);