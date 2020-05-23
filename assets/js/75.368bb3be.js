(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{346:function(r,t,e){"use strict";e.r(t);var a=e(8),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("说实话，最近前端开发的事情并不是很多。所以自己也慢慢开始做后端开发，逐渐向全沾工程师靠拢。现在的开发工作，分工分明，后端也只需要专注 API 的请求与返回就好了。")]),r._v(" "),e("h2",{attrs:{id:"api-文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-文档"}},[r._v("#")]),r._v(" API 文档")]),r._v(" "),e("p",[r._v("使用"),e("a",{attrs:{href:"https://apiblueprint.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("API Blueprint"),e("OutboundLink")],1),r._v("作为 API 规范，并使用"),e("a",{attrs:{href:"https://github.com/calderalabs/rspec_api_blueprint",target:"_blank",rel:"noopener noreferrer"}},[r._v("RSpec API Blueprint"),e("OutboundLink")],1),r._v("来自动生成文档。\n生成的 Markdown 文件，可以很方便的转换成网页便于客户端开发。例如这个工具"),e("a",{attrs:{href:"https://github.com/danielgtaylor/aglio",target:"_blank",rel:"noopener noreferrer"}},[r._v("aglio"),e("OutboundLink")],1),r._v("。")]),r._v(" "),e("h2",{attrs:{id:"后端开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端开发"}},[r._v("#")]),r._v(" 后端开发")]),r._v(" "),e("p",[r._v("现在采用的开发技术框架是 Ruby on Rails。不得不吐嘈一句，Ruby on Rails 在日本真是压倒性的流行。Ruby on Rails 还是 MVC 架构，原生支持 RESTful API。但我觉得下一代的接口标准应该是 facebook 推出的"),e("a",{attrs:{href:"https://github.com/facebook/graphql",target:"_blank",rel:"noopener noreferrer"}},[r._v("GraphQL"),e("OutboundLink")],1),r._v("，不过先阶段 RESTful API 也足够了。")]),r._v(" "),e("h3",{attrs:{id:"models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[r._v("#")]),r._v(" Models")]),r._v(" "),e("p",[r._v("Models 主要是用来描述数据库结构，表与表之间的关系。还可以定义对数据库操作的方法，数据之间复杂的业务逻辑基本都是放在这里。")]),r._v(" "),e("h3",{attrs:{id:"views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[r._v("#")]),r._v(" Views")]),r._v(" "),e("p",[r._v("Views 主要是用来定义相应的数据的格式，把数据整合成统一的 JSON 标准供客户端使用。")]),r._v(" "),e("h3",{attrs:{id:"controllers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#controllers"}},[r._v("#")]),r._v(" Controllers")]),r._v(" "),e("p",[r._v("Controllers 是请求的入口，用来定义请求的参数，并接收请求进行参数的过滤处理。然后调用 Models 里定义的方法完成数据的操作，并调用 Views 来完成数据的响应。")]),r._v(" "),e("h2",{attrs:{id:"权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[r._v("#")]),r._v(" 权限管理")]),r._v(" "),e("p",[r._v("权限管理是一件非常复杂的事情，定义某个接口在什么条件下可以调用，需要检查用户是什么身份。所以推荐是使用现有的成熟框架来进行管理。这里使用"),e("a",{attrs:{href:"https://github.com/varvet/pundit",target:"_blank",rel:"noopener noreferrer"}},[r._v("pundit"),e("OutboundLink")],1),r._v("来管理各个请求的权限检查。")]),r._v(" "),e("h2",{attrs:{id:"软删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软删除"}},[r._v("#")]),r._v(" 软删除")]),r._v(" "),e("p",[r._v("在实际的项目中，我们需要进行软删除操作。例如用户加入了某个组织，以组织成员的身份发表了文章。当用户退出这个组织的时候，我们并不能直接删除数据库记录。否则无法显示文章的作者。这时候我们就需要软删除操作，对用户来说这条记录已经消失了。但对开发者来说，这条记录还是需要的。我们也使用框架来解决这个问题，这里采用的是"),e("a",{attrs:{href:"https://github.com/rubysherpas/paranoia",target:"_blank",rel:"noopener noreferrer"}},[r._v("Paranoia"),e("OutboundLink")],1),r._v("。")]),r._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[r._v("#")]),r._v(" 测试")]),r._v(" "),e("p",[r._v("后端开发是偏向于纯逻辑的开发，所以测试非常重要。正常情况下的输入输出非常简单，代码的 80%都是需要考虑到各种各样的边界条件。需要考虑到用户的各种不同情况下的操作，给出合适的错误提示。所以需要完善的测试来覆盖所有场景，这里采用的是 e2e 测试，模拟请求，测试后端服务器的响应输出是否符合预期。采用的测试框架是"),e("a",{attrs:{href:"https://github.com/rspec/rspec-rails",target:"_blank",rel:"noopener noreferrer"}},[r._v("rspec-rails"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("参考：")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://guides.rubyonrails.org/v5.1/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Ruby on Rails Guides"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);