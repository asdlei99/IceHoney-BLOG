(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{372:function(e,t,a){"use strict";a.r(t);var i=a(8),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("工作确实是两点一线的生活。而且偶尔还加班，不过也算是正规的做一些东西了，个人成长来说也还不错。很多稍微有深度的知识也有所接触。于是想写点东西记录下自己的成长。以后再回顾的时候也算有所收获。")]),e._v(" "),a("h2",{attrs:{id:"css-层叠水平"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-层叠水平"}},[e._v("#")]),e._v(" CSS 层叠水平")]),e._v(" "),a("p",[e._v("CSS 的层叠看起来很简单，可以通过"),a("code",[e._v("z-index")]),e._v("来进行调整，但是实际上并没有那么简单。层叠水平总共有 7 阶，我们实际在使用中的时候要充分考虑。")]),e._v(" "),a("ol",[a("li",[e._v("形成堆叠上下文环境的元素的背景与边框")]),e._v(" "),a("li",[e._v("拥有负 z-index 的子堆叠上下文元素 （负的越高越堆叠层级越低）")]),e._v(" "),a("li",[e._v("正常流式布局，非 inline-block，无 position 定位（static 除外）的子元素")]),e._v(" "),a("li",[e._v("无 position 定位（static 除外）的 float 浮动元素")]),e._v(" "),a("li",[e._v("正常流式布局， inline-block 元素，无 position 定位（static 除外）的子元素（包括 display:table 和 display:inline ）")]),e._v(" "),a("li",[e._v("拥有 z-index:0 的子堆叠上下文元素")]),e._v(" "),a("li",[e._v("拥有正 z-index: 的子堆叠上下文元素（正的越低越堆叠层级越低）")])]),e._v(" "),a("p",[e._v("这里有个重点概念是堆叠上下文，那么元素是如何形成堆叠上下文呢？")]),e._v(" "),a("ol",[a("li",[e._v("根元素 (HTML)")]),e._v(" "),a("li",[e._v('z-index 值不为 "auto"的 绝对/相对定位')]),e._v(" "),a("li",[e._v('一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex')]),e._v(" "),a("li",[e._v("opacity 属性值小于 1 的元素")]),e._v(" "),a("li",[e._v('transform 属性值不为 "none"的元素')]),e._v(" "),a("li",[e._v('mix-blend-mode 属性值不为 "normal"的元素')]),e._v(" "),a("li",[e._v("filter 值不为“none”的元素")]),e._v(" "),a("li",[e._v("perspective 值不为“none”的元素")]),e._v(" "),a("li",[e._v('isolation 属性被设置为 "isolate"的元素')]),e._v(" "),a("li",[e._v("position: fixed")]),e._v(" "),a("li",[e._v("在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值")]),e._v(" "),a("li",[e._v('-webkit-overflow-scrolling 属性被设置 "touch"的元素')])]),e._v(" "),a("p",[e._v("如果符合上面规则，会形成层叠上下文。层叠上下文的背景一定是最下面的，想要通过"),a("code",[e._v("z-index")]),e._v("来调整浮动在其他元素上方是不可能的。")]),e._v(" "),a("h2",{attrs:{id:"dom-ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-ready"}},[e._v("#")]),e._v(" DOM Ready")]),e._v(" "),a("p",[e._v("如果巧妙的在 DOM 加载完成之后来执行 JS 呢，最简单的方法是把 JS 放在 body 的最下方。但这样处理有些麻烦，最简单的方法是使用"),a("code",[e._v("setTimeout")]),e._v("方法，设置延迟时间为 0。延迟时间为 0 并不意味着这段代码会立即执行，而是等到所有 JS 加载和执行完毕，DOM 也加载完毕的时候才执行。")]),e._v(" "),a("h2",{attrs:{id:"safari-scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safari-scroll"}},[e._v("#")]),e._v(" Safari Scroll")]),e._v(" "),a("p",[e._v("手机版 Safari 在滑动的时候如果有动画执行，会导致整个页面空白。当滑动结束的时候才会渲染。我们不得不采用给所有元素添加"),a("code",[e._v("transform: translate3d(0,0,0)")]),e._v("属性，\n来使 Safari 强制使用 GPU 加速。")]),e._v(" "),a("h2",{attrs:{id:"css-动画性能加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-动画性能加速"}},[e._v("#")]),e._v(" CSS 动画性能加速")]),e._v(" "),a("p",[e._v("CSS 动画尽量使用"),a("code",[e._v("transform: translate3d(0,0,0)")]),e._v("来实现，因为 ransform3d api 会强制开启 GPU 加速提高页面的流畅度。在公司的项目中，从使用"),a("code",[e._v("background-position")]),e._v("进行动画效果换成"),a("code",[e._v("transform")]),e._v("之后，动画流畅度得到了显著的改善。")]),e._v(" "),a("p",[e._v("参考：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/9807620/ipad-safari-scrolling-causes-html-elements-to-disappear-and-reappear-with-a-dela",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context",target:"_blank",rel:"noopener noreferrer"}},[e._v("The stacking context"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("层叠顺序（stacking level）与堆栈上下文（stacking context）知多少？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);