(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{375:function(e,t,s){"use strict";s.r(t);var a=s(8),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("由于学习的需要,我要配置个本地邮件服务器.虽然找到了一篇很详细的资料,但是在配置过程中还是遇到了这样那样的问题.\n写篇文章记下来自己的学习过程,毕竟好记性不如烂笔头嘛.")]),e._v(" "),s("h2",{attrs:{id:"详细教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细教程"}},[e._v("#")]),e._v(" 详细教程")]),e._v(" "),s("p",[e._v("Google 一下便找到了一个十分详细的教程,分享给大家:"),s("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-configure-a-mail-server-using-postfix-dovecot-mysql-and-spamassasin",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Configure a Mail Server Using Postfix, Dovecot, MySQL, and SpamAssasin"),s("OutboundLink")],1),e._v("\n教程虽然很详细,但难免有不理解和差错的地方.下面就讲下我遇到的问题:")]),e._v(" "),s("h2",{attrs:{id:"dovecot-证书问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dovecot-证书问题"}},[e._v("#")]),e._v(" Dovecot 证书问题")]),e._v(" "),s("p",[e._v("教程上设置的证书位置是:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssl_cert = </etc/ssl/certs/dovecot.pem\nssl_key = </etc/ssl/private/dovecot.pem\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("但实际上是空的 需要手动 copy 过去,默认存储的位置是:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssl_cert = /etc/dovecot/dovecot.pem\nssl_key = /etc/dovecot/private/dovecot.pem\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"查看日志发现读取配置出错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看日志发现读取配置出错"}},[e._v("#")]),e._v(" 查看日志发现读取配置出错")]),e._v(" "),s("p",[e._v("出错信息如下:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dovecot: lmtp(11504): Fatal: Error reading configuration: Invalid settings: postmaster_address setting not given\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("查到相关资料"),s("a",{attrs:{href:"https://github.com/mail-in-a-box/mailinabox/issues/31",target:"_blank",rel:"noopener noreferrer"}},[e._v("Invalid settings: postmaster_address setting not given"),s("OutboundLink")],1),e._v("\n简单来说就是在"),s("code",[e._v("/etc/dovecot/dovecot.conf")]),e._v("文件内添加一行 "),s("code",[e._v("postmaster_address=postmaster at DOMAIN")]),e._v(" 即可")]),e._v(" "),s("h2",{attrs:{id:"重启-dovecot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启-dovecot"}},[e._v("#")]),e._v(" 重启 Dovecot")]),e._v(" "),s("p",[e._v("当我们执行 "),s("code",[e._v("service dovecot restart")]),e._v(" 时,发现根本没有这个 service."),s("br"),e._v("\n其实 dovecot 已经在运行了,我们只需执行 "),s("code",[e._v("dovecot reload")]),e._v(" 即可")]),e._v(" "),s("h2",{attrs:{id:"邮件无法发送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邮件无法发送"}},[e._v("#")]),e._v(" 邮件无法发送")]),e._v(" "),s("p",[e._v("日志输出如下:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("B0E4F26077E: to=<root@example.jp>, orig_to=<root>, relay=none, delay=6780, delays=6780/0/0.09/0, dsn=5.4.4, status=bounced (Host or domain name not found. Name service error for name=example.jp type=AAAA: Host not found)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个问题是因为 Postfix 默认启用了 IPv6 并且优先级比 IPv4 要高,所以需要在配置文件 "),s("code",[e._v("/etc/postfix/main.cf")]),e._v("里面设置\n"),s("code",[e._v("inet_protocols = ipv4")]),e._v(" 这样就关闭 IPv6 了.即可解决问题.")]),e._v(" "),s("p",[e._v("大概就是遇到这么多问题了,最后祝愿大家圣诞节快乐~")])])}),[],!1,null,null,null);t.default=r.exports}}]);