(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{353:function(t,a,r){"use strict";r.r(a);var e=r(8),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("工作也算是稳定了，不过理想和现实的差距还是很大。程序员的职责是把枯燥的工作自动化，而不是去进行重复劳动。最近在写 JavaScript 程序的时候，遇到了很多对象相关的操作。所以写点东西来总结下这半个月的成长。")]),t._v(" "),r("h2",{attrs:{id:"javascript-对象复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-对象复制"}},[t._v("#")]),t._v(" JavaScript 对象复制")]),t._v(" "),r("p",[t._v("JavaScript 对象默认全部是拷贝引用，也就是所谓的浅拷贝。所以我们在对象操作的时候，要记住是否需要进行拷贝。一般我们使用对象的时候，都是需要对其某个属性进行修改。所以正确的写法是：")]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bar "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("， c"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("d"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("bar"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfoo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 1, b: 2， c: {d: 10}}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[t._v("这样就同时进行拷贝和修改。注意这里使用的是 JavaScript 的 es6 语法。如果要在浏览器运行，你需要 "),r("a",{attrs:{href:"https://babeljs.io/repl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),r("OutboundLink")],1),t._v(" 来进行转换。注意，如果对象里面还有对象的话，这种方式也仅仅是浅拷贝。深拷贝必须遍历所有属性进行复制，在效率上有很大问题，所以我们尽量不要去用深度拷贝来解决问题。\n这里对象的复制是使用的"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.assign"),r("OutboundLink")],1),t._v(" 针对对象的简单类型可以进行复制，但是对象还是引用。如果实际的应用场景确实需要进行深度拷贝，可以使用"),r("a",{attrs:{href:"https://lodash.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash"),r("OutboundLink")],1),t._v("。提供了很多常用的类库。")]),t._v(" "),r("h2",{attrs:{id:"javascript-数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-数组"}},[t._v("#")]),t._v(" JavaScript 数组")]),t._v(" "),r("p",[t._v("针对数组，现在已经不推荐用 for 循环来进行处理了，请使用数组的"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank",rel:"noopener noreferrer"}},[t._v("map"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("filter"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank",rel:"noopener noreferrer"}},[t._v("reduce"),r("OutboundLink")],1),t._v("来处理数组的操作。相信这三个方法足以满足需求。")]),t._v(" "),r("h2",{attrs:{id:"javascript-开发规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-开发规范"}},[t._v("#")]),t._v(" JavaScript 开发规范")]),t._v(" "),r("p",[t._v("现在 JavaScript 已经是 es6 的时代，所以我们也需要顺应时代学习新知识。这里我建议大家读读 airbnb 的"),r("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Style Guide"),r("OutboundLink")],1),t._v("。这里不仅教会你正确的编码格式，更多的是优秀的写法。如何合理的拷贝对象，遍历数组等等。")]),t._v(" "),r("p",[t._v("目前就写到这里，工作之后并没有多少成长。写博客都发呆了很久该写什么。。。")])])}),[],!1,null,null,null);a.default=s.exports}}]);