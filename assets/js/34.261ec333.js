(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{350:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("最近在开发的网站基本上全是使用弹出的对话框（Modal）来进行 UI 交互的，所以对于 Modal 的处理也算积攒了一点经验。便想写下来供自己以后参考和学习。说实话，在目前响应式布局的主流开发方式下，Modal 非常不适合作为一个良好的交互方式。因为对于手机触屏用户非常不友好。当然，我开发的这个网站也没有考虑手机用户。当前的主流方式还是采用 SPA，JS 软路由切换页面来交互才是正解。")]),t._v(" "),s("h2",{attrs:{id:"modal-元素的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modal-元素的位置"}},[t._v("#")]),t._v(" Modal 元素的位置")]),t._v(" "),s("p",[t._v("弹出对话框的方式基本是把对话框的"),s("code",[t._v("z-index")]),t._v("设置的比当前页面元素高，然后使用"),s("code",[t._v("opacity: 0.5")]),t._v("来半透明进行遮罩。但是，需要使用 Modal 的内容最好放在 body 的下层，而不是嵌套了好多层的某个 div 里面，因为子元素的"),s("code",[t._v("z-index")]),t._v("是不可能大于父元素的，会导致在某些情况下，其他元素比当前的 Modal"),s("code",[t._v("z-index")]),t._v("更高。")]),t._v(" "),s("h2",{attrs:{id:"modal-滚动条问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modal-滚动条问题"}},[t._v("#")]),t._v(" Modal 滚动条问题")]),t._v(" "),s("p",[t._v("很多情况下，弹出的 Modal 内容过多导致会产生滚动条。这时如果不处理好会导致出现双重滚动条。一条是页面本身的内容过多产生的滚动条，还有一条是 Modal 自身的。双重滚动条还有一个问题是当你在 Modal 里面进行滚动的时候，页面内容本身也会被滚动，这会导致关闭 Modal 的时候发现页面的位置已不是打开的位置了，用户体验非常不好。这时候有两种解决方案。")]),t._v(" "),s("p",[t._v("第一个方案是页面本身采用"),s("code",[t._v("position:fixed")]),t._v("进行固定，并用 JS 记住滚动位置，但必须保持页面本身和 Modal 是并列关系。例：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("这样，Modal 采用"),s("code",[t._v("position:absolute")]),t._v("定位，当内容过长就会自动出现滚动条。但是当关闭 Modal 的时候，必须把网页内容的"),s("code",[t._v("position:fixed")]),t._v("属性去除，并用 JS 滚动到当初打开 Modal 的位置。如果 Modal 是透明的，那就必须在打开 Modal 的时候设置网页内容的"),s("code",[t._v("top")]),t._v("和"),s("code",[t._v("left")]),t._v("属性来保持位置不变。")]),t._v(" "),s("p",[t._v("第二个方案是，网页内容采用"),s("code",[t._v("overflow: hidden")]),t._v("来隐藏滚动条。Modal 采用"),s("code",[t._v("position：fixed")]),t._v("方案进行定位，但是这时候 Modal 不得不设置"),s("code",[t._v("overflow： auto")]),t._v("来进行滚动。\n第二个方案对于网页内容和 Modal 的位置并没有特殊的要求，比较灵活，而且不需要 JS 的介入。")]),t._v(" "),s("h2",{attrs:{id:"浏览器重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器重绘"}},[t._v("#")]),t._v(" 浏览器重绘")]),t._v(" "),s("p",[t._v("在一个方案中，由于网页内容被设置成了"),s("code",[t._v("position:fixed")]),t._v("，滚动条自然消失。所以滚动位置回到了浏览器的最上面才对。但是有时候遇到打开"),s("code",[t._v("Modal")]),t._v("的时候发现 Modal 打开之后滚动条不在最上方，这时候的原因是因为我们虽然设置了 CSS 进行了变更，但是浏览器没有进行重新绘制，我们可以使用会导致浏览器重绘的 JS API 来让浏览器更新滚动条信息，使得打开的 Modal 处于浏览器的最上方。")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Force reflow"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);