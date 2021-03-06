---
title: 关于JavaScript跨域请求的相关知识
date: 2016-03-21 14:33
comments: true
archives: 2016
tags:
  - js
---

2016 年已经过了 3 个月了,还没来得及更新博客...实在是惭愧惭愧...最近确实也很忙,一边要打工,一边要写论文,一边还要找工作...

最近百度的导出插件出了点小问题,导致很多人无法正常和 Aria2c 通讯.经过仔细的分析,发现问题出在跨域请求上,接下来就要详细说说 JavaScript 的跨域请求.

## JavaScript 跨域请求

跨域请求指得是发起请求的资源所在域不同于该请求所指向资源所在的域的 HTTP 请求.最常见的就是跨域载入图片,我们可以看到很多网站主站和网站所使用的图片
是不同的域名的.这样做的好处是请求图片的时候不会发送主站的 Cookies,因为不同域名嘛.而且还可以减少主站的服务器压力.但载入图片使用的是 GET 方法,比较简单.

## 跨域 POST 请求

我们经常使用 POST 请求发送各种指令数据,因为 POST 发送的数据没有长度限制.我们还可以在发送数据之前修改请求头,发送各种自定义的 HTTP Request Headers.但是
在跨域请求的时候 POST 的请求头被严格限制,被允许设置的请求头只有:

```
- Accept
- Accept-Language
- Content-Language
- Content-Type
```

并且允许的 Content-Type 只有一下三种:

```
- application/x-www-form-urlencoded
- multipart/form-data
- text/plain
```

## Preflighted requests

当我们发送的请求不满足上面的条件时,就必须发送预请求给目的站点,来查明这个跨站请求对于目的站点是不是安全可接受的。以下条件会触发预请求的发送:

- 请求以 GET, HEAD 或者 POST 以外的方法发起请求。或者使用 POST，但请求数据为 application/x-www-form-urlencoded, multipart/form-data 或者 text/plain 以外的数据类型。比如说，用 POST 发送数据类型为 application/xml 或者 text/xml 的 XML 数据的请求。
- 使用自定义请求头（例如 Aria2c 的验证使用的 Authorization）

## 结论

本次 BUG 的出现,是由于代码验证不规范,对于不需要用户名和密码验证的 RPC 地址.仍然发送自定义的 Authorization 验证头.导致触发 OPTIONS 请求,但是本身不支持验证的 Aria2c 客户端无法识别 OPTIONS 请求,只能返回 500 错误.导致通讯失败,至此 BUG 分析完毕.

## 参考:

[HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

[HTTP/1.1: Method Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
