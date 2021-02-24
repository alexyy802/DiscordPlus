(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(323)),s={title:"sleepy_discord/zlib-ng_compression.cpp"},c={unversionedId:"reference/Files/zlib-ng__compression_8cpp",id:"reference/Files/zlib-ng__compression_8cpp",isDocsHomePage:!1,title:"sleepy_discord/zlib-ng_compression.cpp",description:"Namespaces",source:"@site/docs/reference/Files/zlib-ng__compression_8cpp.md",slug:"/reference/Files/zlib-ng__compression_8cpp",permalink:"/sleepy-discord/docs/reference/Files/zlib-ng__compression_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/websocketpp_websocket.h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8h"},next:{title:"include/sleepy_discord/zlib-ng_compression.h",permalink:"/sleepy-discord/docs/reference/Files/zlib-ng__compression_8h"}},i=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'#include "zlib-ng_compression.h"\n\nnamespace SleepyDiscord {\n    ZLibCompression::ZLibCompression() {\n        stream = zng_stream{};\n        memset(&stream, 0, sizeof(stream));\n        statusCode = zng_inflateInit(&stream);\n        if (statusCode != Z_OK) {\n            zng_inflateEnd(&stream);\n        }\n        if (output.empty()) //since are using back(), we need at least one buffer in the output\n            output.emplace_back(); //make a new output buffer\n    }\n\n    void ZLibCompression::uncompress(const std::string& compressed) {\n        std::lock_guard<std::mutex> lock(mutex);\n\n        stream.next_in = reinterpret_cast<const uint8_t*>(compressed.c_str());\n        stream.avail_in = static_cast<uint32_t>(compressed.length());\n\n        statusCode = Z_BUF_ERROR;\n        do {\n            Output::Buffer& buffer = output.back();\n            Output::Data& data = buffer.first;\n            std::size_t& size = buffer.second;\n\n            stream.next_out = reinterpret_cast<uint8_t*>(data.data() + size);\n            stream.avail_out = static_cast<uint32_t>(data.size() - size);\n\n            statusCode = zng_inflate(&stream, Z_SYNC_FLUSH);\n\n            auto oldSize = size;\n            size = data.size() - stream.avail_out;\n            auto deltaSize = size - oldSize;\n\n            if (statusCode == Z_STREAM_END) {\n                statusCode = zng_inflateReset(&stream);\n            }\n            else if (deltaSize == 0) { //if did anything\n                if (stream.avail_out == 0)\n                    output.emplace_back(); //needs more memory\n                else //notthing left to do for now\n                    break;\n            }\n        } while (statusCode == Z_OK || statusCode == Z_BUF_ERROR);\n    }\n\n    void ZLibCompression::getOutput(std::string& uncompressedOut) {\n        std::lock_guard<std::mutex> lock(mutex);\n        if (output.empty())\n            return;\n        std::size_t totalSize = 0;\n        {\n            const Output::Buffer& lastBuffer = output.back();\n            const auto lastBufferSize = lastBuffer.second;\n            totalSize += lastBufferSize;\n            totalSize += (output.size() - 1) * Output::chunkSize; //add size of full chucks\n        }\n\n        uncompressedOut.reserve(totalSize); //allocate memory for string\n        for (Output::Buffer& buffer : output) {\n            Output::Data& data = buffer.first;\n            const std::size_t size = buffer.second;\n\n            uncompressedOut.append(data.data(), size);\n        }\n\n        //reset output for next getOutput\n        //since as long as we are connected to Discord, Discord will send us at least a\n        //heartbeat ack. So, it might be better to keep the first buffer allocated in memory\n        //to avoid doing another memory allocation.\n        output.resize(1);\n        output.back().second = 0;\n    }\n}\n')),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on 24 February 2021 at 18:20:00 UTC"))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);