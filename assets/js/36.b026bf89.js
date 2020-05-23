(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{402:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("突然发现百度网盘又更新 API 了....明明 UI 一点都没有更新.我严重怀疑这个前端工程师是有多寂寞...\n没事就更新 JS...这已经是我观察发现的第三次更新了...每次都导致我的 aria2c 导出脚本失效...")]),t._v(" "),a("p",[t._v("于是我又苦苦寻找新版的 JS 到底是怎么实现下载的,虽说可以直接操纵 DOM 获取选中的文件的 fs_id 信息\n然后 POST 数据获取 dlink(下载地址),但是这样怎么也不够优雅啊...因为百度自己的 JS 肯定实现了这部分内容\n于是我便花了更多的时间找 API,但是百度那既压缩又混淆的 JS 代码真是读起来特带劲啊(我绝对不是抖 M)")]),t._v(" "),a("p",[t._v("于是说一下百度的新版 API 吧:")]),t._v(" "),a("h2",{attrs:{id:"toast-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toast-模块"}},[t._v("#")]),t._v(" Toast 模块")]),t._v(" "),a("p",[t._v("新版 API 把每个功能全部模块化,声明某个模块的方法是使用 require 方法.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("SetMessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Toast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'common:widget/toast/toast.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obtain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    toastMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obtain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sticky"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("于是我便封装了一个函数用来实现消息提示.")]),t._v(" "),a("h2",{attrs:{id:"data-center-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-center-模块"}},[t._v("#")]),t._v(" data-center 模块")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" File "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'common:widget/data-center/data-center.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" File"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'selectedList'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v('data-center 模块可以获取选择的文件的 fs_id,通过传入 fs_id 可以获取 dlink.\nFile.get("selectedItemList")可以获取选择的文件的 DOM 结构.')]),t._v(" "),a("h2",{attrs:{id:"commonservice-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonservice-模块"}},[t._v("#")]),t._v(" commonService 模块")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'common:widget/commonService/commonService.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDlink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("File"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'selectedList'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dlink'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aria2_rpc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("commonService 模块有很多实用的功能,但是我们目前只需要这么一个就足够了,有需要的可以自己研究下.getDlink 接受三个参数.第一个是\n每个要下载的文件的 fs_id,多个文件是数组的字符串方式传入,第二个是获取 dlink 的类型,总共有三个类型 batsh,dlink,nolimit,第一个类型\n是把传入的多个文件合并成一个压缩包进行下载,返回一个 dlink,第二个是单独获取每个文件的 dlink,第三个还没有尝试过.第三个参数是回调函数\n会传入 POST 之后获取的 json 数据.")]),t._v(" "),a("h2",{attrs:{id:"设置-ua"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-ua"}},[t._v("#")]),t._v(" 设置 UA")]),t._v(" "),a("p",[t._v("因为我现在还没找到怎么获取选择的文件名的列表,所以在 aria2c 的时候无法手动指定文件名.貌似不写 UA 的情况下会被限速.\n设置 chrome 的 UA 文件名会被 encode,所以 aria2c 的时候设置 UA 为百度云管家的 UA")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'netdisk;4.4.0.6;PC;PC-Windows;6.2.9200;WindowsBaiduYunGuanJia'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"设置-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-cookie"}},[t._v("#")]),t._v(" 设置 cookie")]),t._v(" "),a("p",[t._v("百度云盘升级之后仅仅只有 dlink 还不行,还需要一个 name 为"),a("code",[t._v("BDUSS")]),t._v("的 cookie.\n但是这个 cookie 被设置为 http only,所以 JS 是无论如何也获取不到的.目前只能采用手动设置的方法.\n还好这个 cookie 每个用户基本都是唯一的,设置一次永久使用,否则真是麻烦.")]),t._v(" "),a("p",[t._v("完整版实现"),a("a",{attrs:{href:"https://gist.github.com/acgotaku/29d1fbe3dbf777c25254",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);