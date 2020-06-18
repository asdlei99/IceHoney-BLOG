(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{395:function(e,t,r){"use strict";r.r(t);var a=r(9),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("前端由于历史原因，基本上没有组件的概念，原生的 HTML 元素提供的功能非常简陋，所以都需要开发者自己实现或者定制组件。这次讲讲双 Slider 的实现。")]),e._v(" "),r("h2",{attrs:{id:"技术选型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[e._v("#")]),e._v(" 技术选型")]),e._v(" "),r("p",[e._v("目前比较流行的 Vue 的组件库是"),r("a",{attrs:{href:"https://element.eleme.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Element"),r("OutboundLink")],1),e._v(" 和 "),r("a",{attrs:{href:"https://www.iviewui.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("View UI"),r("OutboundLink")],1),e._v("。这两个组件库都使用了最常用的方法，使用"),r("code",[e._v("div")]),e._v("或者"),r("code",[e._v("span")]),e._v("，元素模拟滑动条，监听事件，并处理滑动。但是 HTML 元素本身提供了"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",target:"_blank",rel:"noopener noreferrer"}},[e._v("Range"),r("OutboundLink")],1),e._v("标签，我们可以修改下样式来使用，这样就避免自己直接处理事件监听，也可以减少浏览器兼容性问题。")]),e._v(" "),r("h2",{attrs:{id:"样式定制化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#样式定制化"}},[e._v("#")]),e._v(" 样式定制化")]),e._v(" "),r("p",[e._v("目前针对 Range 元素的样式定制化还没有纳入 Web 标准，所以在处理起来稍微花点功夫。首先，我们需要修改默认的滑块样式。使用的 CSS 选择器是"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-slider-thumb",target:"_blank",rel:"noopener noreferrer"}},[e._v("-webkit-slider-thumb"),r("OutboundLink")],1),e._v("。由于未纳入标准，需要使用浏览器前缀才行。这里我们可以借助 "),r("a",{attrs:{href:"https://github.com/jonathantneal/postcss-input-range",target:"_blank",rel:"noopener noreferrer"}},[e._v("postcss-input-range"),r("OutboundLink")],1),e._v(" 插件来完成这项工作。")]),e._v(" "),r("h2",{attrs:{id:"双-slider-实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双-slider-实现"}},[e._v("#")]),e._v(" 双 Slider 实现")]),e._v(" "),r("p",[e._v("HTML 本身只提供了单滑块，要想实现双 Slider，只能两个叠加在一起了，并且需要自己实现 Slider 的选中范围，因为目前的 css selector 并不能达到这种效果。如何动态的控制 Slider 的显示长度呢？当然可以计算出目前的选中百分比，通过 css variables 来达到更新样式的效果。")]),e._v(" "),r("h2",{attrs:{id:"slider-滑动规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slider-滑动规则"}},[e._v("#")]),e._v(" Slider 滑动规则")]),e._v(" "),r("p",[e._v("当然，我们左边的滑块不能滑过右边的滑块，这是基本常识。这里就需要监听"),r("code",[e._v("input")]),e._v(" 事件，当超出范围的时候，强制把值重置回合法值就可以了。")]),e._v(" "),r("h2",{attrs:{id:"实现效果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现效果"}},[e._v("#")]),e._v(" 实现效果")]),e._v(" "),r("p",{staticClass:"codepen",staticStyle:{height:"349px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"349","data-theme-id":"dark","data-default-tab":"js,result","data-user":"acgotaku","data-slug-hash":"LYGZQva","data-pen-title":"Slider"}},[r("span",[e._v("See the Pen "),r("a",{attrs:{href:"https://codepen.io/acgotaku/pen/LYGZQva"}},[e._v("\n  Slider")]),e._v(" by 雪月秋水 ("),r("a",{attrs:{href:"https://codepen.io/acgotaku"}},[e._v("@acgotaku")]),e._v(")\n  on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])]),e._v(" "),r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("能用原生 HTML 标签来解决的问题，尽量还是不要自己实现事件监听了。这样性能也会更好，兼容性上也不会太差。")])])}),[],!1,null,null,null);t.default=s.exports}}]);