// const qiniu = require('qiniu')
// var accessKey = 'ZtosRi5rjXnErSRXRmwtSnaqWNmunYq7nLx6z7yl';
// var secretKey = 'ijanJmhI7tQmYJWDD4f6ZaAgVW0mxLfRCWpjryhM';

//引入七牛依赖
const qiniu = require("qiniu");
//客户端调用接口，生成token
let accessKey = 'hjdeYdfssw882iHUI92390HIhleiwaha7892ihg';
let secretKey = 'jaiolh80HJHu9ww79ewjkhhfdsan8329hailhu';
// var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

// let options = {
//   scope: 'https://storage.infinitus.com.cn/bucket/bup-operation-private/cert/202003/18404-10_20200226DA.pdf' //七牛资源目录
// };
// let putPolicy = new qiniu.rs.PutPolicy(options);
// let uploadToken = putPolicy.publicDownloadUrl(mac);
// console.log(uploadToken);

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var config = new qiniu.conf.Config();
var bucketManager = new qiniu.rs.BucketManager(mac, config);
var privateBucketDomain = 'https://storage.infinitus.com.cn/bucket/bup-operation-private%2Fcert%2F202003%2F18404-10_20200226DA.pdf';
var deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
var privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, '', deadline);

console.log(privateDownloadUrl)