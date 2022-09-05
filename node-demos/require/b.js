const a = require('./a')

console.log('a.name', a.name)

setTimeout(() => {
  const newA = require('./a')
  console.log('a.name::', newA.name)
}, 3000) 