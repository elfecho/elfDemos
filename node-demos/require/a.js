module.exports = {
  name: 'hello'
}


setTimeout(() => {
  module.exports.name = 'world'
})