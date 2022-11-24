const https = require('https');
const fs = require('fs')
// const mkdirp = require('mkdirp')
const path = require('path')


let url = 'https://filetranscode-1252524126.file.myqcloud.com/file_transcode/04ofqmk8hsh31vqfjhcc_tiw/picture/'


for (let i = 1; i <= 268; i++) {
  const filePath = path.join('./imgs', `${i}.jpg`)
  let data = ''
  let uri = url + i + '.jpg'
  https.get(uri, res => {
    res.setEncoding('binary');

    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      fs.writeFile(filePath, data, 'binary', (err) => {
        if (err) throw err
        console.log(i, 'img download success');
      })
    })
  })
}