(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{418:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("自从 2012 年四月买 VPS...到现在已经算是一年多了吧.在此感谢琴对我的帮助和指导.没有琴的指导我也不会折腾和配置 VPS.\n期间一点一点的成长都离不开大家的帮助.不过对琴的过度依赖,使我一度成为伸手党...真是十分抱歉 QAQ\n现在写一篇日志记录下 apache2 的配置方法也可以留着自己以后进行参考.")]),s._v(" "),e("h2",{attrs:{id:"安装-apache-套装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-apache-套装"}},[s._v("#")]),s._v(" 安装 apache 套装")]),s._v(" "),e("p",[s._v("首先安装 lamp"),e("code",[s._v("sudo apt-get install lamp-server^")]),s._v("PHP 开发和服务器运行环境首选 LAMP 组合，即 Linux+Apache+Mysql+Php/Perl/Python，能最优化服务器性能")]),s._v(" "),e("h2",{attrs:{id:"开启相关模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启相关模块"}},[s._v("#")]),s._v(" 开启相关模块")]),s._v(" "),e("p",[s._v("启用 mod_rewrite 模块")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2enmod rewrite\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启用 mod_proxy 模块")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2enmod proxy\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2enmod proxy_http\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("启用 SSL 模块")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2enmod ssl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("a2xx 系列的命令共有 a2dismod、a2enmod、a2dissite、a2ensite，作用分别是禁用模块、启用模块、停用站点、启用站点这些命令简单得连--help 选项都没有，只能运行看提示。其作用也很简单，就是在/etc/apache2/mods-enabled 和/etc/apache2/sites-enabled 里面建立或删除相对应的 x-available 目录里面的模块的链接。")]),s._v(" "),e("h2",{attrs:{id:"具体相关配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体相关配置"}},[s._v("#")]),s._v(" 具体相关配置")]),s._v(" "),e("p",[s._v("服务器资源一般很高贵,大家都会挂很多独立站点的.apache2 默认存放网站的目录是 /var/www\n配置文件储存在 /etc/apache2 主配置文件在 apache2.conf 其中这个配置文件包含了 sites-enabled 目录\n这个目录是主要储存配置文件的地方 配置文件以 000-default 000-default-ssl 这种命名方式进行命名.\n这两个文件是对 http 和 https 进行默认配置.下面我们来看看这两个默认配置\nvim 000-default")]),s._v(" "),e("div",{staticClass:"language-apacheconf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" *"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAdmin")]),s._v(" acgotaku311@email.me\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerName")]),s._v(" _default_\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("DocumentRoot")]),s._v(" /var/www/default\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" /")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" FollowSymLinks\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" /var/www/default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" Indexes FollowSymLinks MultiViews\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("allow")]),s._v(",deny\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("allow")]),s._v(" from all\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ScriptAlias")]),s._v(" /cgi-bin/ /usr/lib/cgi-bin/\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/cgi-bin"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" +ExecCGI -MultiViews +SymLinksIfOwnerMatch\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("allow")]),s._v(",deny\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Allow")]),s._v(" from all\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ErrorLog")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${APACHE_LOG_DIR}")]),s._v("/error.log\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Possible values include: debug, info, notice, warn, error, crit,")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alert, emerg.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LogLevel")]),s._v(" warn\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("CustomLog")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${APACHE_LOG_DIR}")]),s._v("/access.log combined\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Alias")]),s._v(" /doc/ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/doc/"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/doc/"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" Indexes MultiViews FollowSymLinks\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("deny")]),s._v(",allow\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Deny")]),s._v(" from all\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Allow")]),s._v(" from 127.0.0.0/255.0.0.0 ::1/128\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br")])]),e("p",[s._v("第一行指定的是服务使用的端口\n第二行 ServerAdmin 写的是服务器管理员的邮箱\n第三行 ServerName 写的是服务器的名字 "),e("em",[s._v("default")]),s._v(" 代表默认使用这个即服务器名字找不到对应的配置文件时时候此配置文件\n第四行 DocumentRoot 写的是网站的根目录,即输入网址映射到服务器具体的哪个站点\nDirectory 子节点是对具体目录进行配置 我们主要是对网站根目录进行权限的配置\n其中主要说明的是 AllowOverride 选项 AllowOverride 控制那些被放置在.htaccess 文件中的指令\n其余的配置基本不需要关心. vim 000-default-ssl")]),s._v(" "),e("div",{staticClass:"language-apacheconf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" mod_ssl.c")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" *"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("443")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAdmin")]),s._v(" acgotaku311@email.me\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerName")]),s._v("  _default_\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("DocumentRoot")]),s._v(" /var/www/default\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" /")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" FollowSymLinks\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" /var/www/default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" Indexes FollowSymLinks MultiViews\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" All\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("allow")]),s._v(",deny\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("allow")]),s._v(" from all\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ScriptAlias")]),s._v(" /cgi-bin/ /usr/lib/cgi-bin/\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/cgi-bin"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" +ExecCGI -MultiViews +SymLinksIfOwnerMatch\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("allow")]),s._v(",deny\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Allow")]),s._v(" from all\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ErrorLog")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${APACHE_LOG_DIR}")]),s._v("/error.log\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Possible values include: debug, info, notice, warn, error, crit,")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alert, emerg.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LogLevel")]),s._v(" warn\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("CustomLog")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${APACHE_LOG_DIR}")]),s._v("/ssl_access.log combined\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Alias")]),s._v(" /doc/ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/doc/"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/doc/"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" Indexes MultiViews FollowSymLinks\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("deny")]),s._v(",allow\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Deny")]),s._v(" from all\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Allow")]),s._v(" from 127.0.0.0/255.0.0.0 ::1/128\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   SSL Engine Switch:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   Enable/Disable SSL for this virtual host.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLEngine")]),s._v(" on\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLCertificateFile")]),s._v("    /etc/apache2/ssl/ssl.crt\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLCertificateKeyFile")]),s._v(" /etc/apache2/ssl/ssl.key\n\n\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("FilesMatch")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\.(cgi|shtml|phtml|php)$"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLOptions")]),s._v(" +StdEnvVars\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("FilesMatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" /usr/lib/cgi-bin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLOptions")]),s._v(" +StdEnvVars\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("BrowserMatch")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [17-9]"')]),s._v(" ssl-unclean-shutdown\n\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br")])]),e("p",[s._v("SSL 模块就是多了一个证书的设置 其余的基本不变.")]),s._v(" "),e("p",[s._v("其它站点基本就是拷贝默认的配置文件修改 ServerName 和 DocumentRoot 即可.")]),s._v(" "),e("h2",{attrs:{id:"关于-ssl-证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于-ssl-证书"}},[s._v("#")]),s._v(" 关于 SSL 证书")]),s._v(" "),e("p",[s._v("生成 SSl 证书命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("openssl genrsa -des3 -out ssl.key "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后他会要求你输入这个 key 文件的密码。不推荐输入。 但是生成时候必须输入密码。你可以输入后 再删掉。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ssl.key xxx.key\nopenssl rsa -in xxx.key -out ssl.key\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" xxx.key\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后根据这个 key 文件生成证书请求文件"),e("code",[s._v("openssl req -new -key ssl.key -out ssl.csr")]),s._v("以上命令生成时候要填很多东西 一个个看着写吧（可以随便，毕竟这是自己生成的证书）最后根据这 2 个文件生成 crt 证书文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("openssl x509 -req -days "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("365")]),s._v(" -in ssl.csr -signkey ssl.key -out ssl.crt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里 365 是证书有效期 推荐 3650 哈哈。这个大家随意。最后使用到的文件是 key 和 crt 文件。")]),s._v(" "),e("p",[s._v("这里生成的证书是不受信任的...我们可以在[StartSSL(http://www.startssl.com/)上申请免费的证书.不过免费时间是一年,并且只能对根域名和一个子域名生效.不过一年后可以重新\n注册,所以可以永远对根域名和一个子域名设置受信任的 SSl 证书.\n相关的申请教程在此"),e("a",{attrs:{href:"http://www.deepvps.com/apply-startssl-ssl-certificate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);