function F() {

}

let f = new F()

console.log(f.__proto__ === F.prototype)  // true
console.log(F.prototype.__proto__ === Object.prototype) // true


