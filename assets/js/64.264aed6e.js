(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{353:function(s,e,a){"use strict";a.r(e);var t=a(8),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("社畜也快半年了，说实话工作确实没有学生生活有趣。每天基本都是坐在电脑前写代码，可能我是那种更喜欢新鲜生活的人吧。对于重复的生活很容易就厌倦了，但生活由不得自己，上班的理由很简单，仅仅是因为穷。学生时代写代码基本都是一个人单干，但进入公司就开始正式的团队协作，也算是学到很多团队合作的知识了吧。特别是利用 Github 进行高效的合作开发。")]),s._v(" "),a("h2",{attrs:{id:"github-协作开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-协作开发"}},[s._v("#")]),s._v(" Github 协作开发")]),s._v(" "),a("p",[s._v("首先是切换到需要开发的分支，这里我们假设要在"),a("code",[s._v("dev")]),s._v("分支上进行开发。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后，在 dev 分支上建立属于自己的分支。命名可以以功能命名也可以用解决的 issue 命名。例如："),a("code",[s._v("dev-add-page dev-issue20")]),s._v("，之后再切换到自己建立的分支。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev-issue20\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev-issue20\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样，就可以在自己分支上开发了，开发之后 push 到服务器上，在请求"),a("code",[s._v("pull request")]),s._v("进行合并操作，在"),a("code",[s._v("pull request")]),s._v("的时候，可以让同事来进行代码 review 保证开发质量。")]),s._v(" "),a("p",[s._v("协作要用到的 Github 命令很简单，之后再说说经常用的其他命令。例如，当我们写了半天发现自己在错误的分支上进行了开发，该怎么处理呢？我们可以使用"),a("code",[s._v("git stash")]),s._v("命令来把临时修改隐藏起来。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev-issue20\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果我们不小心在 dev 分支上直接进行了开发，可以使用上面的命令迅速把自己的修改切换到自己的分支上。")]),s._v(" "),a("p",[s._v("还有一种情况是，我们在自己的分支上进行开发的过程中，"),a("code",[s._v("dev")]),s._v("分支上合并了其他同时的代码，我们需要和"),a("code",[s._v("dev")]),s._v("分支保持一致。这时可以使用"),a("code",[s._v("git pull origin dev")]),s._v("分支来同步其他同事的代码，避免自己的代码和主分支产生冲突。")]),s._v(" "),a("p",[s._v("自己的分支在上传到服务器并合并之后通常服务器会删掉这个分支，但本地还是会保留。我们需要定期删掉自己本地已经合并的分支，这里推荐使用下面的命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --merged "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(^\\*|master|dev)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("正则表达式里面是不需要删除的分支。")]),s._v(" "),a("p",[s._v("有时候发现某个分支做的功能被砍掉了，然后需要删掉这个分支。可以使用下面的命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -d origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("分别删掉远程服务器和本地的分支。")]),s._v(" "),a("p",[s._v("有时候发现自己写的思路是错的，需要舍弃现在所有的修改，可以使用"),a("code",[s._v("reset")]),s._v("命令来重置。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当然这个操作比较危险，你应该慎用。")]),s._v(" "),a("p",[s._v("当你需要移除所有新加的文件，但这些文件还没加入库当中。你可以使用"),a("code",[s._v("clean")]),s._v("命令来清除所有新加文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("目前经常使用的就是这么多，如果大家有更好的学习"),a("code",[s._v("Git")]),s._v("命令的推荐资料，欢迎留言。谢谢！")]),s._v(" "),a("p",[s._v("参考：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/6127328/how-can-i-delete-all-git-branches-which-have-been-merged",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stack Overflow"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/geeeeeeeeek/git-recipes",target:"_blank",rel:"noopener noreferrer"}},[s._v("高质量的 Git 中文教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pro Git"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);