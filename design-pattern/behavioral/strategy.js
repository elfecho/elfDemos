var fnA = function (val) {
  return val * 1
}

var fnB = function (val) {
  return val * 2
}

var fnC = function (val) {
  return val * 3
}


var calculate = function (fn, val) {
  return fn(val)
}

console.log(calculate(fnA, 100))// 100
console.log(calculate(fnB, 100))// 200
console.log(calculate(fnC, 100))// 300
