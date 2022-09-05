

var https = require('https')

const convert = function (listStr) {
  var bodyObj = JSON.parse(listStr)
  return JSON.stringify({
    data: [
      {
        "type": "singlePic",
        "data": {
          "articleUrl": bodyObj.data[0].article_url,
          "title": bodyObj.data[0].title,
          "id": "i6727634212259643916",
          "imageList": bodyObj.data[0].image_list
        }
      }
    ]
  })
}

const getList = function () {
  return new Promise((resolve, reject) => {
    https
      .get('https://m.toutiao.com/list/?tag=__all__&max_time=0&min_behot_time=0&ac=wap&count=20&format=json_raw&_signature=IEYCcAAAQrlcYWc2jAGMqyBGAm&i=&as=A136925F53D7622&cp=62F38716B2F2CE1&aid=1698',
        function (list) {
          let body = ''
          list.on('data', chunk => {
            body += chunk
          }).on('end', () => {
            resolve(body)
          }).on('error', () => {
            reject()
          })
        })
  })
}

module.exports = {
  getList,
  convert
}