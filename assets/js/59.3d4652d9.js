(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{354:function(e,t,v){"use strict";v.r(t);var s=v(8),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("最近心血来潮，想看个国漫。结果爱奇艺独播，还每集那么老长的广告，可是把我恶心的不要不要的。然后为了展现程序员的自我修养，我要分析下这个视频的源文件地址，直接观看，跳过广告！凭着我分析百度网盘的经验，花了三个晚上，总算搞定了。顺便分享下整个逆向分析过程，和大家学习。")]),e._v(" "),v("h2",{attrs:{id:"查看请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看请求"}},[e._v("#")]),e._v(" 查看请求")]),e._v(" "),v("p",[e._v("前端无论怎么样的操作，本质上都是向服务器发送请求，然后解析请求数据，展现在页面上。所以说逆向的切入点就是查看网络请求！因为我要分析视频的源 MP4 文件而不是 flash 文件，所以我把浏览器模拟成手机让爱奇艺载入手机版界面以便抓包获取 MP4 文件。切换成手机版很简单，只需要在 Chrome 上按 F12 打开开发人员工具，点击左上角的 "),v("code",[e._v("Toggle device toolbar")]),e._v("图标就可以切换成手机设备了，我选择模拟的设备是 Nexus 6P。这时候重新刷新页面，查看"),v("code",[e._v("NetWork")]),e._v("面板。里面会有这个页面载入发起的所有请求，我们重点找的是各种 JS 发起的请求和带参数的请求。最笨的办法就是一个请求一个请求看一遍，总有你需要的。")]),e._v(" "),v("h2",{attrs:{id:"分析请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分析请求"}},[e._v("#")]),e._v(" 分析请求")]),e._v(" "),v("p",[e._v("通过一个个查找，我们找到了一个请求返回了一个 JSONP 格式的数据，这个数据里面包含了 MP4 源文件的地址。注意，很多人分析请求的时候经常喜欢找 MP4 文件的请求，这个可以算是一个切入点。但是一般网站不会把视频网址固定死的，所以找到 MP4 请求并没有什么实际意义，而是一定有一个请求去向服务器索取真实的 MP4 地址，一般这个数据都是 JSON 格式的。所以只要耐心找，一定找得到的。很多请求都只不过是资源文件，所以很容易过滤掉的。")]),e._v(" "),v("p",[e._v("接下来就请看我们找到的这个关键请求：\n"),v("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/1191834/21312326/fd23902c-c5b0-11e6-8281-bb272dd95033.png",alt:"Request"}}),e._v("\n从这个请求的 Response 可以得知这是我们需要的请求，但这也只不过才是开始。我们知道了这个请求，就需要思考如何构造这个请求，来获取真实的 MP4 地址。一般请求的网址和路径都是固定的，所以我们的重点工作就是构造请求参数。\n这个请求总共有 17 个请求参数，真是够多的。但是我们不知道所有请求参数是否是必须的。有可能服务器只校验其中的几个参数，所以我们没有必要对每个参数都分析一遍。")]),e._v(" "),v("p",[e._v("这时候就需要拷贝下来这些参数来进行分析，在界面的左侧面板，右键单击之后会出现 "),v("code",[e._v("copy as cURL")]),e._v("菜单。这样我们就可以在 Linux 的终端里调试这个请求，你可以先拷贝到记事本上，然后修改请求之后再终端里跑一遍看看能否返回正常的数据。有些服务器也会对"),v("code",[e._v("Request Headers")]),e._v("进行校验，所以可以试试去掉相关的"),v("code",[e._v("headers")]),e._v("例如 cookie，UA。最终调试出可以得到合法数据的最简单请求。爱奇艺这个例子对"),v("code",[e._v("Request Headers")]),e._v("没有进行任何校验，反而对请求参数很苛刻，少一个都不行，最后我们会解释为什么爱奇艺对请求参数检查这么苛刻。")]),e._v(" "),v("h2",{attrs:{id:"逆向-js-文件找到相关请求如何构造"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#逆向-js-文件找到相关请求如何构造"}},[e._v("#")]),e._v(" 逆向 JS 文件找到相关请求如何构造")]),e._v(" "),v("p",[e._v("从上面我们知道了，这个请求只对参数进行了校验，"),v("code",[e._v("Request Headers")]),e._v("并不需要。那重点就是逆向 JS 找到如何构造参数即可。")]),e._v(" "),v("p",[e._v("通过"),v("code",[e._v("Sources")]),e._v("面板可以看到这个页面加载的所有 JS，但是这个看起来也太多了吧。所以这个不是方法，重点就是查找关键的 JS 文件。"),v("code",[e._v("Ctrl+Shift+F")]),e._v("可以查找所有的文件，所以我们可以利用搜索大法来找到关键的 JS 文件。一般也可以通过"),v("code",[e._v("Network")]),e._v("查看请求的触发者，但是很多封装之后的 JS，是无法通过请求追溯到构造的 JS 文件的。但是无论这个 JS 文件怎么压缩混淆，网址是必须要有的。所以我们搜索"),v("code",[e._v("cache.m.iqiyi.com/jp/tmts")]),e._v("就找到了关键的 JS 文件了！找到 JS 文件之后，会跳转到"),v("code",[e._v("Sources")]),e._v("面板，点击右下角的"),v("code",[e._v("{}")]),e._v("Pretty print 会把压缩的 JS 自动进行换行和排版，方便分析。这时候通过分析这个 JS 文件，我们就知道如何构造这个请求了。")]),e._v(" "),v("h2",{attrs:{id:"站在巨人的肩膀上"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#站在巨人的肩膀上"}},[e._v("#")]),e._v(" 站在巨人的肩膀上")]),e._v(" "),v("p",[e._v("我们没有必要每个参数都自己用 JS 实现一遍，因为人家已经实现好了，我们只要调用就好。这个请求的关键是"),v("code",[e._v("getTmtsVf")]),e._v("函数。这个函数对请求进行了哈希，添加了一个 vf 参数，所以我对参数进行了任何的修改都会导致请求非法。无论怎么实现的 JS，有些参数只能通过全局变量来共享，所以对于那些参数，我们可以直接使用。例如爱奇艺有个全局的"),v("code",[e._v("Q")]),e._v("变量，通过这个变量可以获得很多需要的参数。")]),e._v(" "),v("h2",{attrs:{id:"终极解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#终极解决方案"}},[e._v("#")]),e._v(" 终极解决方案")]),e._v(" "),v("p",[e._v("对参数的构造完全取决于最后个人对 JS 文件的理解的功底，能看懂压缩的 JS 的逻辑才能成功提取需要的请求参数。但也有些变态的 JS 文件很难理解，不进行动态调试分析的话很难明白。这时候我们就不得不请出 Chrome 的大杀器："),v("a",{attrs:{href:"https://developer.chrome.com/extensions/webRequest",target:"_blank",rel:"noopener noreferrer"}},[e._v("webRequest"),v("OutboundLink")],1),e._v("，通过这个 API，我们可以拦截请求并进行替换。我就使用这个 API 拦截了"),v("code",[e._v("app_movie.js")]),e._v("，注入了我带调试信息的 JS。你就可以随意的调试了。关于这个 API 的使用 DEMO，可能后续会放在我的 Github 上。")]),e._v(" "),v("h2",{attrs:{id:"写在最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),v("p",[e._v("其实可以分析桌面版本的 flash 视频，然后使用 B 站的这个"),v("a",{attrs:{href:"https://github.com/Bilibili/flv.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("flv.js"),v("OutboundLink")],1),e._v("来解决播放问题。最终我写了一个油猴脚本来一键输出 MP4 文件。有兴趣的可以私信我。")])])}),[],!1,null,null,null);t.default=r.exports}}]);