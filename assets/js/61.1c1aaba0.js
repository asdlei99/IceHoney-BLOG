(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{338:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("这应该是最长的一次博客断更吧。。。因为年后辞职加上来日本工作的原因。导致很长时间都没有更新自己的博客了。很是惭愧，本来定的目标就是每月一篇很简单的任务。但居然空档了这么长时间，这就是正所谓的生于忧患死于安乐吧。找到了工作就松懈了，所以今天又重新捡起来继续写。公司的新人课题是做一个简单的 CMS 网站，也算重新复习了一下网页制作吧，因为一直在写 JS 的项目，基本的 HTML 和 CSS 的设计都有点生疏了。。。")]),t._v(" "),s("h2",{attrs:{id:"css-一行多列设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-一行多列设计"}},[t._v("#")]),t._v(" CSS 一行多列设计")]),t._v(" "),s("p",[t._v("这是一个最基本的设计布局。在一行上有多列的内容，最简单的例子是导航栏。HTML 的大致结构是这样的：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("HTML/CSS"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("JavaScript"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CMS"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("默认的话，这三列内容是向下排列的，如何让它们横着排列呢？这时候有三种解决方案：第一，是采用"),s("code",[t._v("float")]),t._v("使得所有的"),s("code",[t._v("li")]),t._v("列表浮动表示在一行。但这时候记得使用"),s("code",[t._v("clear")]),t._v("去清除浮动属性。这种设计方案的好处是兼容性强，但新手容易处理不好"),s("code",[t._v("float")]),t._v("属性对布局的影响和忘记清除"),s("code",[t._v("float")]),t._v("属性。第二种解决方案是对"),s("code",[t._v("li")]),t._v("使用"),s("code",[t._v("display:inline-block;")]),t._v("使得"),s("code",[t._v("li")]),t._v("并排一行，这种方案的好处是容易理解和兼容性高。但如果"),s("code",[t._v("li")]),t._v("之间的 HTML 源代码有回车的话会导致相邻的"),s("code",[t._v("li")]),t._v("有很细微的间距。所以对像素级别的设计方案来说并不推荐。第三种方案是使用"),s("code",[t._v("flex")]),t._v("布局。这是目前来说最灵活的一种布局方案了，特别对于多屏幕自适应来说非常友好。但是对浏览器版本要求比较高，IE11 以下都不支持。所以这个简单的布局方案要根据自己的业务情况进行具体选择，并没有银弹。")]),t._v(" "),s("h2",{attrs:{id:"子-div-溢出方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子-div-溢出方案"}},[t._v("#")]),t._v(" 子 DIV 溢出方案")]),t._v(" "),s("p",[t._v("有些时候根据需求我们设计的子 DIV 要比父 DIV 超出一定范围，这时候要怎么设计才好呢？有时候会想到利用"),s("code",[t._v("position: relative;")]),t._v("来改变子 DIV 的文档流进行实现。但这种方式实在是不推荐，因为会影响父 DIV 在页面的布局。我建议的解决方案是使用"),s("code",[t._v("margin")]),t._v("来进行溢出，"),s("code",[t._v("margin")]),t._v("不仅可以输入正数，也可以使用负数。当使用负数的时候就会朝反方向扩展达到溢出的目的。")]),t._v(" "),s("h2",{attrs:{id:"多行文字垂直居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多行文字垂直居中"}},[t._v("#")]),t._v(" 多行文字垂直居中")]),t._v(" "),s("p",[t._v("实际开发中，我们经常会遇到这种常见的需求，对于一行文字来说，很简单，我们只要把"),s("code",[t._v("height")]),t._v("和"),s("code",[t._v("line-height")]),t._v("设置成一样的高度就可以了。但是对于多行文字的话，我们还是需要一些技巧的。首先，我们需要在文字外面再套一层元素进行设置。HTML 结构大致是这样：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("然后我们在"),s("code",[t._v("div")]),t._v("上设置"),s("code",[t._v("height")]),t._v("和"),s("code",[t._v("line-height")]),t._v("一样高，使得"),s("code",[t._v("span")]),t._v("元素保持垂直居中。然后再修改"),s("code",[t._v("span")]),t._v("元素的 CSS 属性，设置正常的 line-height 和"),s("code",[t._v("display: inline-block;")]),t._v("以及"),s("code",[t._v("vertical-align: middle;")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://davidwalsh.name/remove-whitespace-inline-block",target:"_blank",rel:"noopener noreferrer"}},[t._v("remove-whitespace-inline-block"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[t._v("display"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/CucuIonel/pen/espDH",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vertical align multiple lines of text"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);