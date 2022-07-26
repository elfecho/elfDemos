function* gen() {
  let a = true;
  yield 1
  yield 2
  yield 3
  if (a) {
    return 4
  }
  yield 5
}

const g = gen()
var a
a = g.next();//{value:1,done:false}
a = g.next();//{value:2,done:false}
a = g.next();//{value:3,done:false}
a = g.next();//{value:4,done:true}
a = g.next();//{value:undefined,done:tue}
a = g.next();//{value:undefined,done:true}