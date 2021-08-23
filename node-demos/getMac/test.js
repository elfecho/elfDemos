let timer = null
try {
  timer = setInterval(() => {
    let macArr = []
    let interfaces = require('os').networkInterfaces()
    // console.log('mac========>', JSON.stringify(interfaces))
    let macSet = new Set()
    for (let key in interfaces) {
      interfaces[key].map(item => {
        macSet.add(item.mac)
      })
    }
    macArr = Array.from(macSet).map(item => item.toUpperCase().replace(/:/g, '-'))
    const mac = macArr.join('_')
    console.log('macArr', mac)
    if (macArr.length > 1) {
      clearInterval(timer)
    }
  }, 1000)  
} catch (error) {

}



// //获取机器mac地址
require('getmac').getMac(function (err, macAddress) {
  if (err) throw err
  var mac = macAddress //获取mac地址
  console.log(mac)
})

var macAddr = require('node-getmac');

console.log('macAddr', macAddr)