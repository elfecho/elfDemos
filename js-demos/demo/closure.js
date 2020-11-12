
// helper.log(1)
function makeAdder(x) {
  // 参数 `x` 是一个内部变量

  // 内部函数 `add()` 使用 `x`，所以它对 `x` 拥有一个“闭包”
  function add(y) {
    return y + x;
  };

  return add;
}

// `plusOne` 得到一个指向内部函数 `add(..)` 的引用，
// `add()` 函数拥有对外部 `makeAdder(..)` 的参数 `x`
// 的闭包
var plusOne = makeAdder( 1 );

// `plusTen` 得到一个指向内部函数 `add(..)` 的引用，
// `add()` 函数拥有对外部 `makeAdder(..)` 的参数 `x`
// 的闭包
var plusTen = makeAdder( 10 );

// log(plusOne( 3 ));   // 4  <-- 1 + 3
// log(plusOne( 41 ));    // 42 <-- 1 + 41

// log(plusTen( 13 ));    // 23 <-- 10 + 13


function foo() {
  console.log( this.bar );
}

var bar = "global";
var obj1 = {
  bar: "obj1",
  foo: foo
}
var obj2 = {
  bar: "obj2"
}

foo()
obj1.foo()
foo.call(obj2)
new foo()
