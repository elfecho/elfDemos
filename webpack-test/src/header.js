function Header() {
  var dom = document.getElementById('root')
  var header = document.createElement('div')
  header.innerText = 'head'
  dom.append(header)
}

// export default Header
module.exports = Header