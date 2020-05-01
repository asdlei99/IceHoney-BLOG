(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{348:function(e,r,t){"use strict";t.r(r);var a=t(8),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("不知不觉，2018 年的春节也要来临了。今年只是元旦回家了，春节并不打算回家。回家曾经是一件美好的事情，不知从何时开始，却是那么的揪心。最近也有读很多关于性能优化和底层的前端知识。不想就此停滞，只能不断前进。")]),e._v(" "),t("h2",{attrs:{id:"浏览器渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染"}},[e._v("#")]),e._v(" 浏览器渲染")]),e._v(" "),t("p",[e._v("我们都知道，现在主流显示器的频率是 60Hz，也就是 1 秒要刷新 60 次。这样才能保持画面的流畅，特别是玩游戏的时候，我们非常在意帧数。前端开发也是一样，所以我们每一项操作都最好在 10 毫秒之内完成，否则会产生所谓的卡吨现象，影响用户体验。")]),e._v(" "),t("h2",{attrs:{id:"渲染过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[e._v("#")]),e._v(" 渲染过程")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg",alt:"render pipeline"}})]),e._v(" "),t("p",[e._v("浏览器的渲染主要是分为 5 个步骤，我们需要了解这些知识才能编写性能更好的代码。")]),e._v(" "),t("ol",[t("li",[e._v("JavaScript 我们经常使用 JS 来实现一些复杂的视觉效果，数据排序，DOM 操作等等。")]),e._v(" "),t("li",[e._v("样式计算 此过程是根据样式匹配选择器来计算哪些元素应用哪些 CSS 规则的过程。不过浏览器会对常用的选择器进行性能优化，例如类选择器。")]),e._v(" "),t("li",[e._v("布局 在知道每个元素的应用规则之后，浏览器开始计算所需要的空间大小以及其处在屏幕的位置。网页的布局中，一个元素的变化会影响到其他元素的位置。例如 Body 的宽度变窄之后其子元素的宽度也都会发生变化。")]),e._v(" "),t("li",[e._v("绘制 绘制是填充像素的过程。它涉及绘出文本、颜色、图像、边框和阴影，基本上包括元素的每个可视部分。绘制一般是在多个表面（通常称为层）上完成的。")]),e._v(" "),t("li",[e._v("合成 由于页面的各部分可能被绘制到多层，由此它们需要按正确顺序绘制到屏幕上，以便正确渲染页面。对于与另一元素重叠的元素来说，这点特别重要，因为一个错误可能使一个元素错误地出现在另一个元素的上层。")])]),e._v(" "),t("h2",{attrs:{id:"js-css-样式-布局-绘制-合成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-css-样式-布局-绘制-合成"}},[e._v("#")]),e._v(" JS / CSS > 样式 > 布局 > 绘制 > 合成")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg",alt:"render pipeline"}})]),e._v(" "),t("p",[e._v("如果修改了元素的布局属性，也就是改变了元素的几何属性（例如宽度，高度）。那么浏览器就必须检查所有元素，然后重新排版页面。任何受影响的部分都要重新绘制，再重新合成。")]),e._v(" "),t("h2",{attrs:{id:"js-css-样式-绘制-合成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-css-样式-绘制-合成"}},[e._v("#")]),e._v(" JS / CSS > 样式 > 绘制 > 合成")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-no-layout.jpg",alt:"render pipeline no layout"}})]),e._v(" "),t("p",[e._v("如果之修改了元素的绘制属性，例如背景图片或者文字颜色，并不会对其他元素的布局造成影响。浏览器会跳过布局，但仍然执行绘制。")]),e._v(" "),t("h2",{attrs:{id:"js-css-样式-合成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-css-样式-合成"}},[e._v("#")]),e._v(" JS / CSS > 样式 > 合成")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-no-layout-paint.jpg",alt:"render pipeline no layout"}})]),e._v(" "),t("p",[e._v("目前既不要绘制也不要布局的属性只有"),t("code",[e._v("transform")]),e._v("属性和"),t("code",[e._v("opacity")]),e._v("属性。所以在实现 CSS 动画的时候，优先使用这两个属性。")]),e._v(" "),t("p",[e._v("如何查询 CSS 属性触发上面 3 个流程的哪一个，可以去"),t("a",{attrs:{href:"https://csstriggers.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Triggers"),t("OutboundLink")],1),e._v(" 查询。")]),e._v(" "),t("p",[e._v("参考：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rendering/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rendering Performance"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);