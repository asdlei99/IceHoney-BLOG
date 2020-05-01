(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{388:function(n,a,r){"use strict";r.r(a);var e=r(8),s=Object(e.a)({},(function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("虽然我已经开发了两款专门为 Aria2 用的下载插件,但是我发现还是有同学不会用 Aria2c 这么好的东西呢~\n于是还是写一篇文章来好好的介绍下吧~")]),n._v(" "),r("h2",{attrs:{id:"安装-aria2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-aria2"}},[n._v("#")]),n._v(" 安装 Aria2")]),n._v(" "),r("p",[r("a",{attrs:{href:"http://aria2.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Aria2 官网"),r("OutboundLink")],1),n._v(",通过官网应该能找到各个系统的下载包啦~\nLinux 用户可以直接通过包管理器进行下载安装,OSX 我就没有经验了...Win 用户直接下载对应的 ZIP 包就可以了")]),n._v(" "),r("h2",{attrs:{id:"配置-aria2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-aria2"}},[n._v("#")]),n._v(" 配置 Aria2")]),n._v(" "),r("p",[n._v("Aria2 有两种下载模式,一种是命令行下载模式,一种是 RPC Server 模式.前者不建议使用,后者的使用方式很方便.\nRPC 模式就是启动之后什么也不做,等着通过 RPC 接口接受下载请求.下载完也不会退出,一直等待.\n使用命令行加参数的方式配置 Aria2 非常不推荐,建议使用配置文件的方式,下面贴出我的配置文件.")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("#用户名\n#rpc-user=user\n#密码\n#rpc-passwd=passwd\n#上面的认证方式不建议使用,建议使用下面的token方式\n#设置加密的密钥\n#rpc-secret=token\n#允许rpc\nenable-rpc=true\n#允许所有来源, web界面跨域权限需要\nrpc-allow-origin-all=true\n#允许外部访问，false的话只监听本地端口\nrpc-listen-all=true\n#RPC端口, 仅当默认端口被占用时修改\n#rpc-listen-port=6800\n#最大同时下载数(任务数), 路由建议值: 3\nmax-concurrent-downloads=5\n#断点续传\ncontinue=true\n#同服务器连接数\nmax-connection-per-server=5\n#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要\nmin-split-size=10M\n#单文件最大线程数, 路由建议值: 5\nsplit=10\n#下载速度限制\nmax-overall-download-limit=0\n#单文件速度限制\nmax-download-limit=0\n#上传速度限制\nmax-overall-upload-limit=0\n#单文件速度限制\nmax-upload-limit=0\n#断开速度过慢的连接\n#lowest-speed-limit=0\n#验证用，需要1.16.1之后的release版本\n#referer=*\n#文件保存路径, 默认为当前启动位置\ndir=/home/acgotaku/Downloads\n#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本\n#disk-cache=0\n#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)\n#enable-mmap=true\n#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长\n#所需时间 none < falloc ? trunc << prealloc, falloc和trunc需要文件系统和内核支持\nfile-allocation=prealloc\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br"),r("span",{staticClass:"line-number"},[n._v("16")]),r("br"),r("span",{staticClass:"line-number"},[n._v("17")]),r("br"),r("span",{staticClass:"line-number"},[n._v("18")]),r("br"),r("span",{staticClass:"line-number"},[n._v("19")]),r("br"),r("span",{staticClass:"line-number"},[n._v("20")]),r("br"),r("span",{staticClass:"line-number"},[n._v("21")]),r("br"),r("span",{staticClass:"line-number"},[n._v("22")]),r("br"),r("span",{staticClass:"line-number"},[n._v("23")]),r("br"),r("span",{staticClass:"line-number"},[n._v("24")]),r("br"),r("span",{staticClass:"line-number"},[n._v("25")]),r("br"),r("span",{staticClass:"line-number"},[n._v("26")]),r("br"),r("span",{staticClass:"line-number"},[n._v("27")]),r("br"),r("span",{staticClass:"line-number"},[n._v("28")]),r("br"),r("span",{staticClass:"line-number"},[n._v("29")]),r("br"),r("span",{staticClass:"line-number"},[n._v("30")]),r("br"),r("span",{staticClass:"line-number"},[n._v("31")]),r("br"),r("span",{staticClass:"line-number"},[n._v("32")]),r("br"),r("span",{staticClass:"line-number"},[n._v("33")]),r("br"),r("span",{staticClass:"line-number"},[n._v("34")]),r("br"),r("span",{staticClass:"line-number"},[n._v("35")]),r("br"),r("span",{staticClass:"line-number"},[n._v("36")]),r("br"),r("span",{staticClass:"line-number"},[n._v("37")]),r("br"),r("span",{staticClass:"line-number"},[n._v("38")]),r("br"),r("span",{staticClass:"line-number"},[n._v("39")]),r("br"),r("span",{staticClass:"line-number"},[n._v("40")]),r("br"),r("span",{staticClass:"line-number"},[n._v("41")]),r("br"),r("span",{staticClass:"line-number"},[n._v("42")]),r("br"),r("span",{staticClass:"line-number"},[n._v("43")]),r("br"),r("span",{staticClass:"line-number"},[n._v("44")]),r("br"),r("span",{staticClass:"line-number"},[n._v("45")]),r("br"),r("span",{staticClass:"line-number"},[n._v("46")]),r("br")])]),r("p",[n._v("小白用户可以直接 copy 我的配置文件保存成 aria2.conf 进行使用."),r("br"),n._v("\n然后在终端里面输入 "),r("code",[n._v("aria2c --conf-path=<PATH>")]),n._v("\n注意 PATH 必须是绝对路径."),r("br"),n._v("\n例如: "),r("code",[n._v("D:\\aria2\\aria2.conf")]),n._v(" 可以使用 "),r("code",[n._v("-D")]),n._v(" 参数使 Aria2 在后台运行,即使关闭终端也不会停止运行.\nWin 下可以把这个命令行保存成 bat 文件进行运行.注意路径不需要使用引号括起来.")]),n._v(" "),r("p",[n._v("接下来是如何管理 Aria2 的下载任务了,推荐使用 binux 菊苣的"),r("a",{attrs:{href:"http://binux.github.io/yaaw/",target:"_blank",rel:"noopener noreferrer"}},[n._v("YAAW"),r("OutboundLink")],1),n._v(",超级好用,下载打开即用."),r("br"),n._v("\n懒得下载的话可以使用"),r("a",{attrs:{href:"http://binux.github.io/yaaw/demo/",target:"_blank",rel:"noopener noreferrer"}},[n._v("在线版"),r("OutboundLink")],1),n._v(",只需在设置里面修改下 RPC PATH 为 "),r("code",[n._v("http://localhost:6800/jsonrpc")])]),n._v(" "),r("h2",{attrs:{id:"百度网盘插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#百度网盘插件"}},[n._v("#")]),n._v(" 百度网盘插件")]),n._v(" "),r("p",[n._v("我开发的百度网盘插件已经发布到"),r("a",{attrs:{href:"http://goo.gl/bPpaAS",target:"_blank",rel:"noopener noreferrer"}},[n._v("Web Store"),r("OutboundLink")],1),n._v("了,无法翻墙的同学可以去"),r("a",{attrs:{href:"https://github.com/acgotaku/BaiduExporter/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("Github"),r("OutboundLink")],1),n._v("下载安装包进行安装.安装之后打开"),r("a",{attrs:{href:"http://pan.baidu.com/disk/home",target:"_blank",rel:"noopener noreferrer"}},[n._v("百度网盘"),r("OutboundLink")],1),n._v("会发现在我的设备按钮的\n右侧多了一个导出下载按钮,如果你使用的是默认配置的话那么选中要下载的文件之后点击"),r("code",[n._v("ARIA2 RPC")]),n._v("即可导出到 Aria2 进行下载,前提是你已经开启了 Aria2 的 RPC 模式.")]),n._v(" "),r("h2",{attrs:{id:"_115-网盘插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_115-网盘插件"}},[n._v("#")]),n._v(" 115 网盘插件")]),n._v(" "),r("p",[r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/115exporter/ojafklbojgenkohhdgdjeaepnbjffdjf",target:"_blank",rel:"noopener noreferrer"}},[n._v("115 网盘插件"),r("OutboundLink")],1),n._v("刚刚发布功能还不完善,可能还有未知的 BUG,我后续会进行优化和开发的.安装之后打开"),r("a",{attrs:{href:"http://115.com/?mode=wangpan",target:"_blank",rel:"noopener noreferrer"}},[n._v("115 网盘"),r("OutboundLink")],1),n._v(",\n会发现多了一个 "),r("code",[n._v("设置导出按钮")]),n._v(" 的按钮.点击这个按钮之后会提示设置成功的,然后把鼠标移动到要下载的文件上会出现 "),r("code",[n._v("导出下载")]),n._v(" 的按钮,\n点击即可导出到 Aria2 下载.")]),n._v(" "),r("p",[n._v("参考: "),r("a",{attrs:{href:"http://blog.binux.me/2012/12/aria2-examples/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Aria2 下载示例"),r("OutboundLink")],1)]),n._v(" "),r("p",[n._v("如果有不懂的可以在"),r("a",{attrs:{href:"https://github.com/acgotaku",target:"_blank",rel:"noopener noreferrer"}},[n._v("Github"),r("OutboundLink")],1),n._v("和"),r("a",{attrs:{href:"https://plus.google.com/u/0/+%E9%9B%AA%E6%9C%88%E7%A7%8B%E6%B0%B4%E9%85%B1/posts",target:"_blank",rel:"noopener noreferrer"}},[n._v("Google+"),r("OutboundLink")],1),n._v("上联系我~")])])}),[],!1,null,null,null);a.default=s.exports}}]);