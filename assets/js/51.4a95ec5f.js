(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{393:function(t,a,e){"use strict";e.r(a);var s=e(9),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("V 社的 steam 平台在 Linux 下出了这么多年还是没解决输入法的问题.本身官方也就只支持 Ubuntu,所以在其它发行版也就难免会有各种各样的问题.容我慢慢道来")]),t._v(" "),e("h2",{attrs:{id:"alt-键无法发信号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alt-键无法发信号"}},[t._v("#")]),t._v(" Alt 键无法发信号")]),t._v(" "),e("p",[t._v("Dota2 只能通过 Alt 和鼠标左键的配合发信号.无法像 Dota 一样可以单纯使用鼠标发信号.但是有些用户可能发现自己无法发信号.\n原因在于你使用的窗口管理器已经为 Alt 和鼠标左键绑定了事件,所以你得取消窗口管理器的事件绑定,例如 openbox 需要修改配置文件 rc.xml 找到鼠标事件并注释掉事件绑定的内容.")]),t._v(" "),e("h2",{attrs:{id:"双显卡启动游戏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双显卡启动游戏"}},[t._v("#")]),t._v(" 双显卡启动游戏")]),t._v(" "),e("p",[t._v("对于很多双显卡的机器,平时运行使用集显但是在玩游戏的时候肯定要使用独显才能充分享受游戏的乐趣.所以启动游戏的时候就必须设置启动参数才行.\n启动参数设置为"),e("code",[t._v("vblank_mode=0 primusrun %command%")]),t._v(" 前提是你要装上 primusrun.")]),t._v(" "),e("h2",{attrs:{id:"dota2-没声音"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dota2-没声音"}},[t._v("#")]),t._v(" Dota2 没声音")]),t._v(" "),e("p",[t._v("如果你只使用的 ALSA 没使用 PulseAudio 可能会遇到这个问题,原因是因为 Steam 自己的库文件和系统的冲突.只要把 Steam 的相关 ALSA 库删掉即可.\n删掉下面的文件夹 和 "),e("code",[t._v("libasound.so.*")]),t._v("即可搞定.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("~/.steam/steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/\n~/.steam/steam/ubuntu12_32/steam-runtime/amd64/usr/lib/x86_64-linux-gnu/\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Steam#Launching_games_with_custom_commands.2C_such_as_Bumblebee.2FPrimus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Steam"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Steam/Game-specific_troubleshooting#Dota_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dota 2"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);