
let interfaces = require('os').networkInterfaces()
console.log('mac========>', JSON.stringify(interfaces), interfaces)

// //获取机器mac地址
require('getmac').getMac(function (err, macAddress) {
  if (err) throw err
  var mac = macAddress //获取mac地址
  console.log(mac)
})