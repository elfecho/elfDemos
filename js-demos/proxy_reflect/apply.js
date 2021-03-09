// function sub (a, b) {
//   return  a - b;
// }
// let handler = {
//   apply: function(target, ctx, args) {
//     console.log('handle apply');
//     return Reflect.apply(...arguments)
//   }
// }
// let proxy = new Proxy(sub, handler)

// proxy(2, 1)

//

let  handler = {
  has: function(target, propKey){
      console.log("handle has");
      return propKey in target;
  }
}
let exam = {name: "Tom"}
let proxy = new Proxy(exam, handler)
console.log('name' in proxy, proxy)