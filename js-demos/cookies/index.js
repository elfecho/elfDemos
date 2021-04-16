
document.cookie = 'username=elfecho;'

const get = document.querySelector('.get')
const set = document.querySelector('.set')
const keyValue = document.querySelector('#keyValue')
const inputValue = document.querySelector('#inputValue')
const cookieList = document.querySelector('#cookieList')
const refresh = document.querySelector('.refresh')


getListDom()
function getListDom() {
  cookieList.innerHTML = ''
  const frag = document.createDocumentFragment()
  const arr = document.cookie.split(';')
  for(let i = 0; i < arr.length; i ++) {
    const li = document.createElement('li')
    // li.innerHTML = arr[i].match(/(\S*)=/)[1] + ': ' + arr[i].match(/=(\S*)/)[1]
    li.innerHTML = arr[i].replace('=', ': ');
    frag.appendChild(li)
  }
  cookieList.appendChild(frag)
}
// 获取cookie
get.addEventListener('click', () => {
  if (!keyValue.value) return 
  const username = getCookie(keyValue.value)
  console.log(username)

})
// 设置cookie
set.addEventListener('click', () => {
  if (!keyValue.value) return 
  setCookie(keyValue.value, inputValue.value, 's100')
  const li = document.createElement('li')
  li.innerHTML = `<li>${keyValue.value}: ${inputValue.value}</li>`
  cookieList.appendChild(li)
})

// 删除cookie
cookieList.addEventListener('click', (e) => {
  if(e.target && e.target.nodeName.toUpperCase() === 'LI') {
    const c = e.target.innerHTML
    console.log(c)
    const cookieName = c.match(/(\S*):/)[1]
    delCookie(cookieName)
    getListDom()
  }
})

// refresh 
setInterval(() => {
  getListDom()
}, 5000)