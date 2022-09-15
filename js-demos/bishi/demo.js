// 1.对下面数组进行排重，并按 升序 排序，代码尽量简练:
const array = ['2', 'b', '9', 'a', '7', '3', '4', 'b', '6', '4'];
function handle(arr) {
  return Array.from(new Set(arr.sort()))
}
const output = handle(array); // output: ['2', '3', '4', '6', '7', '9', 'a', 'b']


// 3. 写一个提取 URL 参数的 js 方法，例如：url="https://alibaba.com?a=1&b=2&c=3#/abc/def?a=2&b=3&c=4"
// 要求：只识别queryParam，排除 hash 的干扰
const url = "https://alibaba.com?a=1&b=2&c=3#/abc/def?a=2&b=3&c=4"
// funObj = (val) => {
//   let strs = val.split('&'), obj = {}
//   for (let i = 0; i < strs.length; i++) {
//     obj[strs[i].split('=')[0]] = strs[i].split('=')[1]
//   }
//   console.log('obj==>', obj)
// }
// function getParamFromURL(url, key) {
//   if (url.indexOf('#') !== -1) {
//     // 一种#的前面有? ,一种#前面没?没参数
//     if (url.indexOf('?') !== -1) {
//       if (url.indexOf('#') > url.indexOf('?') && url.indexOf('?') != url.lastIndexOf('?')) {
//         // #的前面有?
//         let str = url.substr(url.indexOf('?') + 1, url.indexOf('#') + 1)
//         let str2 = url.substr(url.lastIndexOf('?') + 1)
//         console.log('str==>', str, 'str2==>', str2)
//         funObj(str)
//         funObj(str2)
//       }
//       if (url.indexOf('#') < url.indexOf('?')) {
//         // #前面没?没参数
//         let str = url.substr(url.indexOf('?') + 1)
//         console.log(str)
//         funObj(str)
//       }
//     }
//   }
// }
function getParamFromURL(url) {
  let askIdx = url.indexOf('?'),
    wellIdx = url.indexOf('#'),
    askText = '',
    wellText = '';
  wellIdx === -1 ? wellIdx = url.length : null;
  wellText = url.substring(wellIdx + 1);
  if (askIdx > -1) {
    askText = url.substring(askIdx + 1, wellIdx)
  }
  let obj = {};
  wellText.length > 0 ? obj['HASH'] = wellText : null;
  if (askText) {
    askText.split('&').forEach(item => {
      let arr = item.split('='),
        key = arr[0],
        val = arr[1];
      obj[key] = val;
    })
  }
  return obj
}

const a = getParamFromURL(url)
console.log('a', a)


// 在 im 中，聊天内容经常会遇到给对方发送链接地址的情况，请编写一道正则表达式，最大限度的匹配对方聊天内容中的 url。
// // 举例： // Apple says: 今天我淘到了一个宝贝，你也看一下感觉很适合你 https://detail.tmall.com/item.htm?id=577359445691&spm=a1z10.10649-b-s.0.0.335e225cy94dcW ，种草的话，下单吧！
// 要求：仅仅识别 tmall.com 以及 taobao.com 这两个域名下的链接
function getUrlFromWords(text) {
  const bool = /(https|http):\/\/[A-Za-z]+.((tmall.com)|(taobao.com))\/[A-Za-z]+.(htm|html)\?id=[0-9]+&spm=[a-zA-Z0-9.-]+/g
  return bool.test(text)
}

const res = getUrlFromWords('https://detail.tmall.com/item.htm?id=577359445691&spm=a1z10.10649-b-s.0.0.335e225cy94dcW')
console.log('res', res)