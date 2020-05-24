(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{403:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("项目开发中经常会遇到 CI 自动拉取 Github 库的情况，我们个人使用的时候会手动输入账户密码信息，但是针对 CI 来说，我们一般会把敏感的认证信息放在环境变量里。所以针对认证信息的自动输入，需要做一些处理。")]),s._v(" "),t("h2",{attrs:{id:"环境变量自动替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量自动替换"}},[s._v("#")]),s._v(" 环境变量自动替换")]),s._v(" "),t("p",[s._v("针对 Travis CI，我们一般把认证信息放在环境变量里，所以在执行 clone 其他 repo 的时候，可以先设置认证信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global url."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CI_USER_NAME}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CI_USER_TOKEN}")]),s._v('@github.com/"')]),s._v(".insteadOf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/"')]),s._v("'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样设置的话，会自动替换 git clone 的网址。")]),s._v(" "),t("h2",{attrs:{id:"url-里面写入认证信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-里面写入认证信息"}},[s._v("#")]),s._v(" URL 里面写入认证信息")]),s._v(" "),t("p",[s._v("有时候需要以另外一个身份进行 clone repo 的时候，会直接在 repo 的 URL 前面加上认证信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USER_NAME}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USER_TOKEN}")]),s._v("@github.com/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("repo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样可以很方便的 clone 信息，但是认证信息会存在当前库的 git config 文件里，有泄漏的风险。")]),s._v(" "),t("h2",{attrs:{id:"netrc-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netrc-设置"}},[s._v("#")]),s._v(" netrc 设置")]),s._v(" "),t("p",[s._v("netr 文件用于存储网站的认证信息，一般位置在"),t("code",[s._v("~/.netrc")]),s._v("。格式是：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("machine github.com\nlogin username\npassword xxxxxxx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("总共有这么三种省略认证信息的方式，根据实际情况选择自己方便的一种认证方式即可。")]),s._v(" "),t("p",[s._v("参考：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://qiita.com/azusanakano/items/8dc1d7e384b00239d4d9",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub でユーザ名・パスワード省略"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);