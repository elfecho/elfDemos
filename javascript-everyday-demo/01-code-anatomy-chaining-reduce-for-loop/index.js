// 需求
// input
// [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
// output
// [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

let files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];

// for of
function forLoops() {
  const result = []
  for(let file of files) {
    fileName = file.trim()
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`
      result.push(filePath)
    }
  }
  console.log(result)
  return result
}

// reduce
function reduceWay() {
  const filePaths = files.reduce((result, file) => {
    fileName = file.trim()
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`
      result.push(filePath)
    }
    return result
  }, [])
  console.log(filePaths)
  return filePaths
}

// 链式调用
function chain() {
  const filePaths = files
    .map(file => file.trim())
    .filter(Boolean)
    .map(fileName => `~/cool_app/${fileName}`)

  console.log(filePaths)
  return filePaths
}



// forLoops()
// reduceWay()
chain()
