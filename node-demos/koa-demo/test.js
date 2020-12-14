// async function f1() {
//   return 'hello'
// }
// console.log(f1())

async function func1() {
  try {
    func2()
  } catch (error) {
    console.log('捕捉到异常')
  }
}

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject('error')
    }, 1000)
  })
  
}

func1()