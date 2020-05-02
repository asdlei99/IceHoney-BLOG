(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{340:function(e,t,a){"use strict";a.r(t);var s=a(8),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("好吧，这次博客的更新稍微有点迟到了。因为自己各种忙着考驾照什么的，不过新的一年又要有新的开始了。最近买了 VPS 也就开始折腾起来了，讲讲如何用 letsencrypt 来给自己的网站颁发不要钱的证书，而且最近还支持通配符的二级域名了，想怎么开子网站都行！！！")]),e._v(" "),a("h2",{attrs:{id:"dehydrated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dehydrated"}},[e._v("#")]),e._v(" dehydrated")]),e._v(" "),a("p",[e._v("浏览器的证书签名的步骤实在是很麻烦，所以有位热心的学生做了一个自动化脚本，可以自动生成脚本并且可以和其他脚本一起使用。达到一键签名证书。")]),e._v(" "),a("h2",{attrs:{id:"letsencrypt-cloudflare-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#letsencrypt-cloudflare-hook"}},[e._v("#")]),e._v(" letsencrypt-cloudflare-hook")]),e._v(" "),a("p",[e._v("我把自己的 DNS 服务托管到 cloudflare 上，还可以使用 cloudflare 提供免费的 CDN 服务。最重要的一点是 cloudflare 有 API 接口。利用这个接口就可以自动完成 DNS-01 challenge。简单的来说，就是通过添加一条 DNS 记录来证明自己对这个域名的所有权，才能给这个域名颁发证书。")]),e._v(" "),a("h2",{attrs:{id:"安装过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[e._v("#")]),e._v(" 安装过程")]),e._v(" "),a("p",[e._v("知道了这两个工具之后，我们就可以开始配置证书了。具体的流程都写在项目的"),a("a",{attrs:{href:"https://github.com/kappataumu/letsencrypt-cloudflare-hook/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),a("OutboundLink")],1),e._v("里面了。我这里主要是讲述下遇到的坑，首先我自己的服务器环境是 CentOS7，使用的是默认的 python2 的环境。需要安装"),a("code",[e._v("cryptography")]),e._v("的库才能顺利完成编译。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gcc libffi-devel python-devel openssl-devel\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("其次，配置环境最好保存在"),a("code",[e._v("dehydrated/config")]),e._v("里，这样就没必要每次都设置环境变量。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"export CF_EMAIL=user@example.com"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" config\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"export CF_KEY=K9uX2HyUjeWg5AhAb"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" config\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"export CF_DEBUG=true"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" config\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("CF_KEY 就是 cloudflare 里面的 Global API Key，替换一下就好了。因为我们要配置的域名包含所有的二级域名，所以需要新建一个"),a("code",[e._v("dehydrated/domains.txt")]),e._v("文件，并写入：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("icehoney.me *.icehoney.me\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这样就会对主域名和所有二级域名生效。")]),e._v(" "),a("p",[e._v("之后再执行命令，"),a("code",[e._v("./dehydrated -c -t dns-01 -k 'hooks/cloudflare/hook.py'")]),e._v("。如果没有问题就可以看到成功生成的日志。")]),e._v(" "),a("p",[e._v("参考：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/lukas2511/dehydrated",target:"_blank",rel:"noopener noreferrer"}},[e._v("dehydrated"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kappataumu/letsencrypt-cloudflare-hook",target:"_blank",rel:"noopener noreferrer"}},[e._v("letsencrypt-cloudflare-hook"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/22073516/failed-to-install-python-cryptography-package-with-pip-and-setup-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Failed to install Python Cryptography package with PIP and setup.py\nAsk Question"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);