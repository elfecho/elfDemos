const router = require('koa-router')()
const cheerio = require('cheerio')
const http = require('https')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

async function crawlingMKWImpl() {
  return new Promise((resolv) => {
    var strHtml = "";
    var results = [];
    http.get('https://www.imooc.com/search/?words=mongodb', function (res) {
      res.on('data', function (chunk) {//监听事件 传输
        strHtml += chunk;
      })
      res.on('end', function () {//数据传输完
        var $ = cheerio.load(strHtml);//cheerio模块开始处理 DOM处理
        $('.search-course-list > div').each((item, i) => {//遍历处理需要爬取的数据
          var job = {};
          //爬取内容时，一定要注意标签结构。按标签结构一层一层获取。
          job.title = $(i).find(".item-detail > a").text().trim();
          job.desc = $(i).find(".item-detail > p").text().trim();
          //当一个div中有多个span标签及其他标签且没有选择器时，就要选择下标获取。eq(0)表示处于第一个span标签的内容。
          job.teacher = $(i).find(".item-detail > div > span > a").eq(0).text().trim();
          job.class = $(i).find(".item-detail > div > span").eq(1).text().trim();
          job.viewsNumber = $(i).find(".item-detail > div > span").eq(2).text().trim();
          job.tag = $(i).find(".item-detail > div > a > span").text().trim();
          results.push(job);
        })
        console.log(results);
        resolv(results);
      })
    })
  })
}


router.get('/craw', async (ctx, next) => {
  ctx.body = await crawlingMKWImpl()
  
})


module.exports = router
