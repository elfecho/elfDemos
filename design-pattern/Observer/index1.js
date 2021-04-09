/**
 * name: 观察者模式 [先订阅后发布]
 * author: junhao
*/

class Event {
  constructor() {
    this.eventTypeObj = {}
  }
  on(eventType, fn) {
    if (!this.eventTypeObj[eventType]) {
      // 按照不同的订阅事件类型，存储不同的订阅回调
      this.eventTypeObj[eventType] = []
    }
    this.eventTypeObj[eventType].push(fn)
  }
  emit() {
    // 可以理解为arguments借用shift方法
    var eventType = Array.prototype.shift.call(arguments)
    console.log('emit0', this.eventTypeObj, arguments)
    var eventList = this.eventTypeObj[eventType]
    for (var i = 0; i < eventList.length; i++) {
      // eventList[i].apply(eventList[i], arguments)
      eventList[i](...arguments)
    }
  }
  remove(eventType, fn) {
    // 如果使用remove方法，fn为函数名称，不能是匿名函数
    var eventTypeList = this.eventTypeObj[eventType]
    if (!eventTypeList) {
      // 如果没有被人订阅改事件，直接返回
      return false
    }
    if (!fn) {
      // 如果没有传入取消订阅的回调函数，则改订阅类型的事件全部取消
      eventTypeList && (eventTypeList.length = 0)
    } else {
      for (var i = 0; i < eventTypeList.length; i++) {
        if (eventTypeList[i] === fn) {
          eventTypeList.splice(i, 1)
          // 删除之后，i--保证下轮循环不会漏掉没有被遍历到的函数名
          i--;
        }
      }
    }
  }
}
var handleFn = function (data) {
  console.log(data)
}
var event = new Event()
event.on('click', handleFn)
event.emit('click', '1')   // 1
event.emit('click', '3')   // 1
event.remove('click', handleFn)
event.emit('click', '2')  // 不打印