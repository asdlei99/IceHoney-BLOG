(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{358:function(t,e,a){"use strict";a.r(e);var r=a(8),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我发现自己博客没次开头都是在说近况和废话。这次也不例外。哈哈哈，工作也算顺畅，顺便总结下最近的前端开发的技术栈来回顾下这半年学到的知识。")]),t._v(" "),a("h2",{attrs:{id:"html-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-开发"}},[t._v("#")]),t._v(" HTML 开发")]),t._v(" "),a("p",[t._v("对于大型项目，直接书写 HTML 代码是一个非常繁琐和头疼的事情，因为 HTML 需要闭合，每次找匹配的 HTML 标签都要非常花功夫。所以现在的开发都是使用预处理器来书写代码，例如主流的"),a("a",{attrs:{href:"https://github.com/pugjs/pug",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pug"),a("OutboundLink")],1),t._v("，通过缩进来控制元素的嵌套，还支持多种语法。非常适合大型项目的开发，再也不用担心修改代码的时候出现 HTML 元素标签没有闭合的情况发生了。而且还规避了一些语法错误，例如在"),a("code",[t._v("p")]),t._v("标签里嵌入"),a("code",[t._v("block")]),t._v("元素是非法的。如果强行嵌入的话，你会发现生成的 HTML 代码是错误的。")]),t._v(" "),a("h2",{attrs:{id:"css-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-开发"}},[t._v("#")]),t._v(" CSS 开发")]),t._v(" "),a("p",[t._v("CSS 开发更多的需要是良好的模块化功能和合理的作用域。这时候也需要通过预处理器来进行操作，推荐使用"),a("a",{attrs:{href:"http://sass-lang.com/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCSS"),a("OutboundLink")],1),t._v("。这里很多人对"),a("code",[t._v("sass")]),t._v("和"),a("code",[t._v("scss")]),t._v("之间的区别有疑问。简单的来说，"),a("code",[t._v("SCSS")]),t._v("的格式更接近 CSS，所以比较容易上手。但是"),a("code",[t._v("SASS")]),t._v("是通过缩进来书写的，对新手不太友好。所以建议大家使用"),a("code",[t._v("SCSS")]),t._v("来书写模块化代码。")]),t._v(" "),a("h2",{attrs:{id:"javascript-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-开发"}},[t._v("#")]),t._v(" JavaScript 开发")]),t._v(" "),a("p",[t._v("现在主流的浏览器支持的 JavaScript 版本是 es5。但是众所周知，JavaScript(es5)有很多陷阱和缺点，例如"),a("code",[t._v("this")]),t._v("指针问题和异步处理等等。基于原型连的继承对于面向对象开发者来说也很不友好。所以推荐使用"),a("a",{attrs:{href:"http://es6-features.org/#Constants",target:"_blank",rel:"noopener noreferrer"}},[t._v("es6"),a("OutboundLink")],1),t._v("来书写代码。可以使用基于"),a("code",[t._v("class")]),t._v("的继承，和解决"),a("code",[t._v("this")]),t._v("指针问题。而且还能使用"),a("code",[t._v("import")]),t._v("进行模块化开发。虽然只是语法糖，但也提升了开发效率。")]),t._v(" "),a("h2",{attrs:{id:"自动化构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建工具"}},[t._v("#")]),t._v(" 自动化构建工具")]),t._v(" "),a("p",[t._v("我们使用了预处理器来书写代码，并使用新版本的"),a("code",[t._v("es6")]),t._v("语法。但是目前浏览器并不支持直接解析这些内容。所以我们需要构建化工具来处理从 Pug 生成 HTML，从 SCSS 生成 CSS，把 es6 语法的 JavaScript 转换成 es5 语法。对于 SPA 网站推荐使用"),a("code",[t._v("webpack")]),t._v("，而对于普通网站的构建推荐使用"),a("code",[t._v("Gulp")]),t._v("。这里区别开的原因是，"),a("code",[t._v("webpack")]),t._v("必须指定入口文件，但是"),a("code",[t._v("Gulp")]),t._v("只需要指定需要处理的文件或文件夹就可以了，支持通配符匹配。对于多页面的传统网站来说非常便利。")]),t._v(" "),a("h2",{attrs:{id:"浏览器兼容处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容处理"}},[t._v("#")]),t._v(" 浏览器兼容处理")]),t._v(" "),a("p",[t._v("这是每个前端工程师最头疼的地方了，因为每个浏览器支持程度都不一样。在使用比较新的 API 记得去"),a("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Can I use"),a("OutboundLink")],1),t._v("查看下各个浏览器的支持情况，如果实在是需要这个功能的话，那就只能去寻找"),a("code",[t._v("polyfill")]),t._v("了。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/8397852/why-p-tag-cant-contain-div-tag-inside-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why p tag can't contain div tag"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);