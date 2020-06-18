(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{359:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("来到日本导师的研究方向是计算机图形学，由于我比较擅长 Web 开发，便选择了 WebGL 进行图形渲染的研究课题。学习了大半年，也该写点东西介绍下自己对 WebGL 的理解，如有错误，欢迎批评指正。")]),t._v(" "),a("h2",{attrs:{id:"webgl-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl-介绍"}},[t._v("#")]),t._v(" WebGL 介绍")]),t._v(" "),a("p",[t._v("WebGL 是基于 OpenGL ES 2.0 文档进行开发的，所以想了解相关 API 的话，直接查阅官方的"),a("a",{attrs:{href:"https://www.khronos.org/registry/gles/specs/2.0/es_full_spec_2.0.25.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenGL ES 2.0 文档"),a("OutboundLink")],1),t._v("即可.WebGL 的一大优势是可以使用 GPU 资源来进行图形渲染和相关的计算，但是使用 GPU 资源的话必须使用对于 GPU 友好的语言来进行编写，WebGL 使用"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/OpenGL_Shading_Language",target:"_blank",rel:"noopener noreferrer"}},[t._v("GLSL"),a("OutboundLink")],1),t._v("来编写用于 GPU 渲染的着色器。\nJavaScript 主要负责整个渲染流程的控制和 GPU 与 CPU 之间的数据交互，繁重的坐标变换计算全部交给 GPU 来处理。")]),t._v(" "),a("h2",{attrs:{id:"webgl-渲染管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl-渲染管道"}},[t._v("#")]),t._v(" WebGL 渲染管道")]),t._v(" "),a("h3",{attrs:{id:"获取-webgl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-webgl"}},[t._v("#")]),t._v(" 获取 WebGL")]),t._v(" "),a("p",[t._v("WebGL 是基于 canvas 画布来进行渲染的，首先我们要使用"),a("code",[t._v("getContext")]),t._v("方法来获取 gl 对象。并判断浏览器是否支持 WebGL.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'experimental-webgl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webgl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WebGL is supported")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WebGL is not supported")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"顶点着色器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶点着色器"}},[t._v("#")]),t._v(" 顶点着色器")]),t._v(" "),a("p",[t._v("WebGL 只支持绘制基本图元，复杂的图形也是有基本图元组合而成的，基本图元包括点、线段或三角形。三角形是最经常用来使用的，因为 3D 空间中的任何 3 个点都是一个三角形的顶点。顶点着色器一般用写在 HTML 中，并标上 HTML 无法识别的 type,这样浏览器就不会解释执行。\n顶点的 X,Y,Z 轴的取值范围全部是-1 到 1 之间，所以要注意变换坐标。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vs"')]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-vertex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  attribute vec3 position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uniform   mat4 mvpMatrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      gl_Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mvpMatrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("前面的 mvpMatrix 矩阵是坐标变换用的，因为我们在实际渲染可能要应用到很多的矩阵变换以渲染到屏幕上。这部分知识可以看看基本的图形学相关书籍，我看的是《DIRECTX.9.0.3D 游戏开发编程基础》，里面介绍了相关的矩阵概念和数学知识。顶点着色器负责绘制图元的顶点信息，接下来就要使用片段着色器绘制相关的颜色信息。")]),t._v(" "),a("h3",{attrs:{id:"片段着色器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#片段着色器"}},[t._v("#")]),t._v(" 片段着色器")]),t._v(" "),a("p",[t._v("片段着色器接收到顶点着色器的顶点信息并在此位置绘制相应的颜色值。颜色的取值范围是 0 到 1.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-fragment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("使用片段着色器可以给相应的顶点设置颜色值，在顶点与顶点之间的位置使用插值法设置颜色值。")]),t._v(" "),a("p",[t._v("渲染管道可以参考这张比较形象的流程图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.tutorialspoint.com/webgl/images/webgl_graphics_pipeline.jpg",alt:"WebGl Pipeline"}})]),t._v(" "),a("h2",{attrs:{id:"texture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#texture"}},[t._v("#")]),t._v(" texture")]),t._v(" "),a("p",[t._v("GPU 运算里面有个非常常用的数据结构，那就是 texture，既可以存储图片数据，也可以存储 frame 数据。对于离屏渲染非常重要，不过在 GPU 运算里面非常重要的一点是一个变量不能既作为输入有作为输出。\n在 CPU 运算里面我们经常写： "),a("code",[t._v("a=a+1")]),t._v(" 但是在 GPU 运算里面是不能这样操作的，需要有一个临时变量存储输出的值，然后再传入到最终变量中。类似于："),a("code",[t._v("b=a+1;a=b")]),t._v("这样。所以对于动画渲染，我们需要使用两个 framebuffer\n相互交换进行渲染。")]),t._v(" "),a("h2",{attrs:{id:"离屏渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离屏渲染"}},[t._v("#")]),t._v(" 离屏渲染")]),t._v(" "),a("p",[t._v("对于复杂的图形渲染，可能一次描绘无法完成最终效果，这时候我们可以把渲染的中间效果存储到 framebuffer 里面，再下一次渲染的时候继续使用，只需要简单的在渲染之前绑定 framebuffer 即可。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindFramebuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FRAMEBUFFER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FboHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"相关学习资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关学习资料"}},[t._v("#")]),t._v(" 相关学习资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebGL MDN"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wgld.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebGL 開発支援サイト"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://blog.csdn.net/column/details/webgl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebGL 入门"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);