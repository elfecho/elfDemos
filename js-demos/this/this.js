// 'use strict'
function a() {
  console.log(this)
}
a() // 默认情况下是window, 严格模式下是undefined

function b(){
  var user = "追梦子";
  console.log(this.user); //undefined
  console.log(this);　　//Window
}
window.b();


var o = {
  user: '追梦人',
  fn: function() {
    console.log(this.user);  //追梦子
  }
}

o.fn()

var fn = function(a) {
  this.a = a
  if (a) {
    a += this.a
  }
  return a
}(function(a, b) {
  return a
}(3, 4))

