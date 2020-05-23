(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{414:function(t,s,n){"use strict";n.r(s);var a=n(8),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("使用 Vue 的数据双向绑定功能可以很方便的完成表单的数据收集和提交，再也不用自己手动监听事件和收集数据了。但同时自动化输入也变得复杂起来。")]),t._v(" "),n("h2",{attrs:{id:"传统表单自动化输入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#传统表单自动化输入"}},[t._v("#")]),t._v(" 传统表单自动化输入")]),t._v(" "),n("p",[t._v("对于传统的表单我们可以很简单的自动化输入过程，例如"),n("code",[t._v("checkbox")]),t._v("和"),n("code",[t._v("input")]),t._v("元素，我们可以自动选中和输入内容：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.checkbox'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("checked "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("当用户提交的时候，程序会读取相应元素的值，然后填充到请求里。")]),t._v(" "),n("h2",{attrs:{id:"vue-组件自动化输入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件自动化输入"}},[t._v("#")]),t._v(" Vue 组件自动化输入")]),t._v(" "),n("p",[t._v("这里我们以现在流行的"),n("a",{attrs:{href:"https://element.eleme.io/#/en-US",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element"),n("OutboundLink")],1),t._v("为例子演示如何自动化输入。用过 Vue 的人都知道， "),n("code",[t._v("v-model")]),t._v("是用来进行双向绑定的。它的原理是：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom-input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n    <input\n      v-bind:value="value"\n      v-on:input="$emit(\'input\', $event.target.value)"\n    >\n  ')]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("到这里，我们就知道了通过"),n("code",[t._v("$emit('input', value)")]),t._v("的方式，可以绑定想要输入的值，直接使用传统方式修改"),n("code",[t._v("input")]),t._v("元素的值，有时候不会触发"),n("code",[t._v("input")]),t._v("事件，所以不是一个可行的办法。")]),t._v(" "),n("p",[t._v("接下来，我们讲下如何选中元素并调用"),n("code",[t._v("$emit")]),t._v("，例子是 Vue 官网的"),n("a",{attrs:{href:"https://element.eleme.io/#/en-US/component/input",target:"_blank",rel:"noopener noreferrer"}},[t._v("搜索框"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.el-input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("在"),n("code",[t._v("console")]),t._v("里输入这两行代码，你会发现搜索框里被填入了"),n("code",[t._v("Hello World")]),t._v("。Vue 实例被隐藏到了 DOM 中，只要知道如何访问 Vue 然好调用"),n("code",[t._v("$emit")]),t._v("，问题就迎刃而解。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("现在的前端框架用起来方便，但也隐藏了大量细节。导致做自动化的时候不知道如何下手，尝试修改元素的值，但发现提交的时候还是没有带上正确的数值。这时候就需要思考框架绑定数据的本质是什么，\n弄清了本质，其实做起来发现更简单！")])])}),[],!1,null,null,null);s.default=e.exports}}]);