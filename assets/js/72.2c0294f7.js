(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{337:function(e,r,s){"use strict";s.r(r);var t=s(8),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("现在的前端开发主流是 PWA，简而言之就是像 App 一样使用。基于 PWA 技术可以离线访问，并且可以添加程序到菜单里。离线技术使用的是比较成熟的 Service Workers。但是配合 CDN 就有很多不得不注意的事情。")]),e._v(" "),s("h2",{attrs:{id:"cdn-部署静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn-部署静态资源"}},[e._v("#")]),e._v(" CDN 部署静态资源")]),e._v(" "),s("p",[e._v("现代化前端开发主要是把 CSS，JS，图片等静态资源放在 CDN 上有效提高载入速度。把静态 HTML 文件放在服务器上，有利于更新网站最新状态，例如进入维护状态，直接把静态 HTML 文件替换为维护页面即可。")]),e._v(" "),s("h2",{attrs:{id:"同源策略问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略问题"}},[e._v("#")]),e._v(" 同源策略问题")]),e._v(" "),s("p",[e._v("正常情况下，资源文件和主网站不在同一个域名下，例如主网站是"),s("code",[e._v("icehoney.me")]),e._v("，资源网站是"),s("code",[e._v("static.icehoney.me")]),e._v("。当然了，资源文件使用 GET 方法浏览器自动载入，没有任何问题。但是注册 Service Worker 的 JS 文件是不能放在 CDN 上的，因为这是官方的规定。个人理解是出于安全因素的考虑。所以我们在主服务器上不仅要放静态的 HTML 文件，还要放一个 serive-worker.js 文件。")]),e._v(" "),s("h2",{attrs:{id:"svg-symbol-的使用问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg-symbol-的使用问题"}},[e._v("#")]),e._v(" SVG symbol 的使用问题")]),e._v(" "),s("p",[e._v("现在前端的开发针对很多小图标，都是采用 SVG 的方式来引用。其中 SVG symbol 特别好用，可以在页面里嵌入一个 inline 的 SVG，然后在其他对方使用"),s("code",[e._v("<use>")]),e._v("标签来引用。但是对于放在 CDN 上的 SVG 文件，不能直接使用下面的形式：")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("use xlink"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("href"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://static.icehoney.me/icon.svg#china"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("如果引用 CDN 的 SVG 浏览器会报错，解决方案是使用"),s("code",[e._v("svg-inline-loader")]),e._v("，手动在文档里面注入 SVG 文件。"),s("code",[e._v("document.body.insertAdjacentHTML")]),e._v(" 方法可以注入 inline 的 SVG。")]),e._v(" "),s("h2",{attrs:{id:"workbox-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workbox-配置"}},[e._v("#")]),e._v(" Workbox 配置")]),e._v(" "),s("p",[e._v("首先，PWA 项目的路由都是由前端来处理，所以我们需要使用"),s("code",[e._v("navigateFallback")]),e._v("保证不管导航到哪个路由都能映射到缓存的 HTML 文件。然后是使用"),s("code",[e._v("runtimeCaching")]),e._v("配置缓存服务器请求。")]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("由于 Service Workers 的导入使得 CDN 部署变得有些麻烦，不过这些问题好在都能找到解决方案。还有一点是 Chrome 的 Network 面板里的 offline 模式不能测试 Service Workers 的离线。需要自己手动拔网线才能测试。")]),e._v(" "),s("h2",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[e._v("#")]),e._v(" 引用")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/w3c/ServiceWorker/issues/940",target:"_blank",rel:"noopener noreferrer"}},[e._v("Is it possible to serve service workers from CDN/remote origin?"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Workbox webpack Plugins"),s("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);