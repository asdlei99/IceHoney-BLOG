---
title: 扇贝单词助手发布
date: 2014-10-30 18:30
comments: true
archives: 2014
tags:
  - notes
---

最近受菊苣[binux](https://plus.google.com/u/0/+RoyBinux/)的要求,希望能开发一款扇贝网的[单词助手](https://chrome.google.com/webstore/detail/shanbayhelper/mbekldhkbpihlaogjpclihoobhoakcic),可以标记任意页面上已经背过的单词.项目源码在[Github](https://github.com/acgotaku/ShanBayHelper).
然后我就趁着国庆就开坑了,binux 也给了我很多参考资料.因为之前也开发过 Chrome 的扩展,所以对 Chrome 提供的 API 比较熟悉.这里就介绍下使用的相关的 JavaScript 的知识吧~

## Promise

Promise 是用来处理大量的异步操作,因为异步操作不能直接 return 返回值,必须进行回调.所以就会导致很多异步操作在一起不断的进行嵌套,这样实在是很不优雅的代码书写方式.代码首先是用来跟人读的,其次才是可以运行.使用 Promise 就可以把多个异步操作的返回值以数组的形式返回来,然后再进行回调.语言描述不好,还是上例子吧.

```js
function get_cookie(site, name) {
  return new Promise(function(resolve, reject) {
    chrome.cookies.get({ url: site, name: name }, function(cookies) {
      if (cookies) {
        var data = cookies.name + '=' + cookies.value;
        resolve(data);
      } else {
        reject();
      }
    });
  });
}
```

Chrome 的 API 全部是异步操作,所以我一开始使用 return 的时候并没有得到值.把回调函数封装到一个 Promise 对象里面,然后传入两个参数 resolve,reject 分别代表异步操作成功执行或失败需要调用的函数.

```js
var site1 = 'http://pan.baidu.com/';
var name1 = 'BDUSS';
var site2 = 'http://pcs.baidu.com/';
var name2 = 'pcsett';
Promise.all([get_cookie(site1, name1), get_cookie(site2, name2)]).then(
  function(value) {
    console.log(value);
  },
  function() {}
);
```

这里我们需要调用两次异步操作,一般情况的话需要函数嵌套,但是使用 Promise 对象的话,只需要在 then 里面需要写上 resolve 和 reject 需要的执行函数,
传入的 value 就是两次异步操作的返回值数组.然后就可以进行相关的处理.代码就变得清晰有条理.

## 参考

[Promise 文档](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)

[Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
