(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{382:function(t,s,n){"use strict";n.r(s);var a=n(8),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("计算机字节序这个问题,最近被老师反复提到.我也在本科阶段折腾交叉编译的时候遇到过.并且这个问题貌似也是面试的时候一个常见问题,所以还是写下来比较好.")]),t._v(" "),n("p",[t._v("字节序顾名思义就是计算机中字节的存储顺序.目前最常见的就是大端字节序和小端字节序.貌似百科里面又有一个中端字节序...(不过确实很少见)")]),t._v(" "),n("h2",{attrs:{id:"大端字节序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大端字节序"}},[t._v("#")]),t._v(" 大端字节序")]),t._v(" "),n("p",[t._v("按照最高位字节(包含最高位,即 MSB,的字节)至最低位字节(包含最低位,即 LSB,的字节)的顺序,存放在连续的地址中.")]),t._v(" "),n("p",[t._v("采用这种机制的处理器有 IBM3700 系列,和绝大多数的 RISC 处理(我的路由器就是)")]),t._v(" "),n("h2",{attrs:{id:"小端字节序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小端字节序"}},[t._v("#")]),t._v(" 小端字节序")]),t._v(" "),n("p",[t._v("按照最低位字节(包含 LSB 的字节)至最高位字节(包含 MSB 的字节)的顺序,存放在连续的地址中.")]),t._v(" "),n("p",[t._v("采用这种机制的处理器最常见的就是 Intel 系列处理器")]),t._v(" "),n("h2",{attrs:{id:"判断字节序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断字节序"}},[t._v("#")]),t._v(" 判断字节序")]),t._v(" "),n("p",[t._v("当然字节序不能完全靠处理器来判断,因为有些处理器可能既支持大端字节序又支持小端字节序\n最好用的方式还是用个程序跑一跑,实践是检验整理的唯一标准.")]),t._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#include <stdio.h>\nint main()\n{\n\t\tunsigned int x = 0x12345678;\n\t\tchar *p = (char *)&x;\n\t\tint i;\n\t\tfor (i = 0; i < sizeof(x); i++){\n\t\t\t\tprintf("%.2x ", *p++);\n\t\t}\n\t\tprintf("\\n");\n\t\treturn 0;\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("上面的一段 C 程序就可以检验字节序,"),n("br"),t._v("\n如果输出是：12 34 56 78,那么 CPU 是大端字节序."),n("br"),t._v("\n如果输出时：78 56 34 12,那么 CPU 是小端字节序."),n("br"),t._v("\n输出证明,大端字节序更适合人类阅读.")]),t._v(" "),n("h2",{attrs:{id:"涉及字节序的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#涉及字节序的问题"}},[t._v("#")]),t._v(" 涉及字节序的问题")]),t._v(" "),n("p",[t._v("谈到字节序问题,是因为网络编程的时候如果双方的字节序不一样肯定会出问题的.本人在交叉编译学校的校园网程序的时候就是遇到了这个问题,因为字节序的不同,导致发送的数据包是相反的.后来在老师的点拨下才得以解决.")])])}),[],!1,null,null,null);s.default=r.exports}}]);