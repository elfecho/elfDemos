let target = {
  name: 'Tom',
  age: 24
}

let handler = {
  get(target, key) {
    console.log('getting ' + key);
    return target[key]
  },
  set(target, key, value) {
    console.log('setting ' + key);
    target[key] = value;
  }
}

// let proxy = new Proxy(target, handler);

// proxy.name
// proxy.age = 26



let targetEpt = {}
let proxyEpt = new Proxy(targetEpt, handler)

proxyEpt.name

proxyEpt.name = 'Tom'

proxyEpt.name

targetEpt