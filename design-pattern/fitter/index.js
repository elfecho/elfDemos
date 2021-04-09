/**
 * name: 渲染器模式
 * author: junhao
*/

class GooleMap {
  show() {
    console.log('渲染谷歌地图')
  }
}

class BaiduMap {
  display() {
    console.log('渲染百度地图')
  }
}

// 定义适配器类, 对BaiduMap类进行封装
class BaiduMapAdapter {
  show() {
    var baiduMap = new BaiduMap()
    return baiduMap.display()
  }
}

function render(map) {
  if (map.show instanceof Function) {
    map.show()
  }
}

render(new GooleMap())  // 渲染谷歌地图
render(new BaiduMapAdapter())  // 渲染百度地图

// 适配器模式主要解决两个接口之间不匹配的问题，不会改变原有的接口，而是由一个对象对另一个对象的包装。
// 适配器模式符合开放封闭原则