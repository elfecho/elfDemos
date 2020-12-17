
module.exports = {
  // prod
  environment:'dev',
  database: {
    dbName: 'new-island',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456'
  },
  security: {
    secretKey: "f&5E3InF0Nh9*4%@",
    expiresIn: 60*60*24*30
  },
  wx: {
    appId: 'wx6f82132a4ceaa5de',
    appSecret: 'd77d3f0936afb81d51c675776d0c9116',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}
