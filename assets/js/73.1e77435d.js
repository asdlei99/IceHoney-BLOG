(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{389:function(e,t,r){"use strict";r.r(t);var o=r(9),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("现在的前后端开发已经完全分离，后端服务器和前端服务器分别部署在不同的服务器。同时也对应不同的域名，所以跨域请求领域方面的知识也需要补充。")]),e._v(" "),r("h2",{attrs:{id:"跨域请求添加-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求添加-header"}},[e._v("#")]),e._v(" 跨域请求添加 header")]),e._v(" "),r("p",[e._v("我们都知道，出于安全考虑，JS 是有同源策略限制。所以，我们在对其他域名发起请求的时候需要添加 http header。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Access-Control-Allow-Origin: *\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("这个参数的值只能为星号或者具体的网址，星号代表所有网站。")]),e._v(" "),r("h2",{attrs:{id:"跨域请求添加-cookie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求添加-cookie"}},[e._v("#")]),e._v(" 跨域请求添加 cookie")]),e._v(" "),r("p",[e._v("JS 跨域请求有两个 API 可以使用，"),r("code",[e._v("XMLHttpRequest")]),e._v("和"),r("code",[e._v("fetch")]),e._v("。"),r("code",[e._v("XMLHttpRequest")]),e._v("会默认带上 cookies，但是"),r("code",[e._v("fetch")]),e._v("默认不会带上。如果需要带上 cookies，需要把"),r("code",[e._v("withCredentials")]),e._v("设置为"),r("code",[e._v("true")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"跨域请求服务器设置-cookie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求服务器设置-cookie"}},[e._v("#")]),e._v(" 跨域请求服务器设置 cookie")]),e._v(" "),r("p",[e._v("我们都知道服务器设置 cookie 是通过"),r("code",[e._v("set-cookie")]),e._v("的 http header 来完成。浏览器会读取这个信息设置 cookie。但是对于跨与请求，默认是无效的。我们需要再添加一个 http header。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Access-Control-Allow-Credentials: true\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("当设置了这个 http header，"),r("code",[e._v("Access-Control-Allow-Origin")]),e._v("就不能设置为星号了，必须指定具体的网址。我们必须指定"),r("code",[e._v("withCredentials")]),e._v("为"),r("code",[e._v("true")]),e._v("并且"),r("code",[e._v("Access-Control-Allow-Credentials")]),e._v("为"),r("code",[e._v("true")]),e._v("的时候，服务器返回的"),r("code",[e._v("set-cookie")]),e._v("才会生效。")]),e._v(" "),r("p",[e._v("参考：")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("Access-Control-Allow-Credentials"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);