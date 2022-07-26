function* gen1() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const g1 = gen1()
var a
a = g1.next();//{value:1,done:false}
a = g1.next();//{value:2,done:false}
a = g1.next();//{value:3,done:false}
a = g1.next();//{value:4,done:false}
a = g1.next();//{value:undefined,done:tue}
a = g1.next();//{value:undefined,done:true}
