(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{315:function(e,n,c){"use strict";c.r(n),c.d(n,"frontMatter",(function(){return i})),c.d(n,"metadata",(function(){return o})),c.d(n,"toc",(function(){return a})),c.d(n,"default",(function(){return p}));var t=c(3),r=c(7),s=(c(0),c(323)),i={title:"SleepyDiscord::GenericMessageReceiver"},o={unversionedId:"reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",id:"reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",isDocsHomePage:!1,title:"SleepyDiscord::GenericMessageReceiver",description:"Inherited by SleepyDiscord::VoiceConnection",source:"@site/docs/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver.md",slug:"/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::GenericCompression",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_compression"},next:{title:"SleepyDiscord::GenericScheduleHandler",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler"}},a=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ~GenericMessageReceiver",id:"function-genericmessagereceiver",children:[]},{value:"function initialize",id:"function-initialize",children:[]},{value:"function handleFailToConnect",id:"function-handlefailtoconnect",children:[]},{value:"function processMessage",id:"function-processmessage",children:[]},{value:"function processCloseCode",id:"function-processclosecode",children:[]},{value:"function processMessage",id:"function-processmessage-1",children:[]}]},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"function getRetryDelay",id:"function-getretrydelay",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable connection",id:"variable-connection",children:[]}]},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"variable consecutiveReconnectsCount",id:"variable-consecutivereconnectscount",children:[]},{value:"variable reconnectTimer",id:"variable-reconnecttimer",children:[]}]}],l={toc:a};function p(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,c,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Inherited by ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client"},"SleepyDiscord::BaseDiscordClient"),", ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection"},"SleepyDiscord::VoiceConnection")),Object(s.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(s.b)("h3",{id:"function-genericmessagereceiver"},"function ~GenericMessageReceiver"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"virtual ~GenericMessageReceiver() =default\n")),Object(s.b)("h3",{id:"function-initialize"},"function initialize"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void initialize()\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection#function-initialize"},"SleepyDiscord::VoiceConnection::initialize")),Object(s.b)("h3",{id:"function-handlefailtoconnect"},"function handleFailToConnect"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void handleFailToConnect()\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-handlefailtoconnect"},"SleepyDiscord::BaseDiscordClient::handleFailToConnect")),Object(s.b)("h3",{id:"function-processmessage"},"function processMessage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void processMessage(\n    const std::string & message\n) =0\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection#function-processmessage"},"SleepyDiscord::VoiceConnection::processMessage"),", ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-processmessage"},"SleepyDiscord::BaseDiscordClient::processMessage")),Object(s.b)("h3",{id:"function-processclosecode"},"function processCloseCode"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void processCloseCode(\n    const int16_t \n)\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection#function-processclosecode"},"SleepyDiscord::VoiceConnection::processCloseCode"),", ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-processclosecode"},"SleepyDiscord::BaseDiscordClient::processCloseCode")),Object(s.b)("h3",{id:"function-processmessage-1"},"function processMessage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void processMessage(\n    const WebSocketMessage message\n)\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-processmessage"},"SleepyDiscord::BaseDiscordClient::processMessage")),Object(s.b)("h2",{id:"protected-functions-documentation"},"Protected Functions Documentation"),Object(s.b)("h3",{id:"function-getretrydelay"},"function getRetryDelay"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"inline const time_t getRetryDelay()\n")),Object(s.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(s.b)("h3",{id:"variable-connection"},"variable connection"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"WebsocketConnection connection;\n")),Object(s.b)("h2",{id:"protected-attributes-documentation"},"Protected Attributes Documentation"),Object(s.b)("h3",{id:"variable-consecutivereconnectscount"},"variable consecutiveReconnectsCount"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"int consecutiveReconnectsCount = 0;\n")),Object(s.b)("h3",{id:"variable-reconnecttimer"},"variable reconnectTimer"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"Timer reconnectTimer;\n")),Object(s.b)("hr",null),Object(s.b)("p",null,"Updated on 24 February 2021 at 18:19:59 UTC"))}p.isMDXComponent=!0},323:function(e,n,c){"use strict";c.d(n,"a",(function(){return d})),c.d(n,"b",(function(){return m}));var t=c(0),r=c.n(t);function s(e,n,c){return n in e?Object.defineProperty(e,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[n]=c,e}function i(e,n){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),c.push.apply(c,t)}return c}function o(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?i(Object(c),!0).forEach((function(n){s(e,n,c[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(c,n))}))}return e}function a(e,n){if(null==e)return{};var c,t,r=function(e,n){if(null==e)return{};var c,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)c=s[t],n.indexOf(c)>=0||(r[c]=e[c]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)c=s[t],n.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),c=n;return e&&(c="function"==typeof e?e(n):o(o({},n),e)),c},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var c=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(c),b=t,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||s;return c?r.a.createElement(m,o(o({ref:n},l),{},{components:c})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var c=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=c.length,i=new Array(s);i[0]=b;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var l=2;l<s;l++)i[l]=c[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,c)}b.displayName="MDXCreateElement"}}]);