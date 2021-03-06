---
title: 关于CSS解决高度自适应和宽度自适应的问题
date: 2013-03-10 19:09
comments: true
archives: 2013
tags:
  - CSS
---

今天在做一个地图的 web 应用,这是个大坑...首先开始设计首页,于是开始山寨谷歌地图了 =.=
设计出来基本的 div 框架之后,想做到地图界面宽度和高度自动适应浏览器.之前做网站
的需求都是固定宽度和高度的.于是我变开始折腾了.

## 自适应宽度

自适应宽度的难处在于网页里有超过两个并列的 div,如果两列都是变宽的话就直接按比例设置
就好了,关键在于 1 列需要固定宽度另外一列需要自适应.我遇到的就是后者,具体情况是第一列需
要固定宽度 350px,第二列的宽度是 100%-350px,最简单的方法是设置第二列的宽度是 width: -webkit-calc(100% - 350px);
但是这个方法的适用性不太好,由于我用的 Archlinux,也不好测试 IE 是否支持,估计是不可能支持的吧.
另外一个方法是设置第一个 div 的属性为 float:left;这样第一列的 div 就脱离整个文档流,第二个 div 直接
设置 margin-left: 350px;即可.

## 自适应高度

自适应高度遇到的问题也是上面有一个固定高度为 142px 的 div,下面的 div 的高度为 100%-142px.
同样可以设置高度为 height: -webkit-calc(100% - 142px);
另外一种方法是把 div 设置成 position: absolute;脱离文档流,然后设置 top:142px; bottom:0px;即可
另外附上截图:
![](https://lh6.googleusercontent.com/-9ChxAWRUJgg/UTxvXThY7dI/AAAAAAAARAw/Y3huY7wxMc8/s918/2013-03-10-193136_1366x768_scrot.png)
![](https://lh3.googleusercontent.com/-kIjIH-kxSGo/UTxvXEI2L-I/AAAAAAAARA4/UP_MerAyvSE/s918/2013-03-10-193130_1366x768_scrot.png)
