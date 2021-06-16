var Koa = require('koa'),
  router = require('koa-router')(),
  views = require('koa-views'),
  path = require('path'),
  KoaStatic = require('koa-static')

var app = new Koa();

const staticPath = './static'

app.use(KoaStatic('./'));

//配置模板引擎中间件  --第三方中间件
//app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
app.use(views('views', {
  extension: 'ejs'  /*应用ejs模板引擎*/
}))

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

//写一个中间件配置公共的信息
app.use(async (ctx, next) => {
  ctx.state.userinfo = '张三';

  await next();/*继续向下匹配路由*/
})

router.get('/', async (ctx) => {
  let title = "你好ejs";
  let list = ['11111', '22222', '33333'];
  let content = "<h2>这是一个h2</h2>";
  let num = 12;
  await ctx.render('index', {
    title: title,
    list,
    content,
    num
  });
})

router.get('/news', async (ctx) => {
  //ctx.body='这是一个新闻';
  let title = "你好ejs";
  let list = ['11111', '22222', '33333'];
  let content = "<h2>这是一个h2</h2>";
  let num = 12;
  await ctx.render('news', {
    title,
    list: list,
    content: content,
    num: num
  })
})



router.get('/engine', async (ctx) => {
  
  const work = {
    "id": 1,
    "title": "标题",
    "description": "描述",
    "cover_image_url": "",
    "pages": [
        {
            "uuid": 1621235988442,
            "title": "",
            "elements": [
                {
                    "name": "lbp-background",
                    "pluginType": "lbp-background",
                    "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                    "pluginProps": {
                        "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                        "imgSrc": "",
                        "backgroundColor": "rgba(255, 255, 255, 0.2)",
                        "waterMarkText": "水印文字",
                        "waterMarkFontSize": 16,
                        "waterMarkRotate": 10,
                        "waterMarkColor": "rgba(184, 184, 184, 0.2)"
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 100,
                        "height": 40,
                        "zindex": 1,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-picture",
                    "pluginType": "lbp-picture",
                    "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                    "pluginProps": {
                        "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                        "imgSrc": "",
                        "fillType": "contain"
                    },
                    "commonStyle": {
                        "top": 0,
                        "left": 0,
                        "width": 320,
                        "height": 568,
                        "zindex": 2,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_cde5e1d3-7166-3ca5-1b2d-182c9967beca",
                    "pluginProps": {
                        "uuid": "lbp-text_cde5e1d3-7166-3ca5-1b2d-182c9967beca",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h1><strong style=\"color: rgb(230, 0, 0);\">库客<span class=\"ql-cursor\">﻿</span>音乐</strong></h1>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 54,
                        "left": 100,
                        "width": 218,
                        "height": 118.5,
                        "zindex": 3,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInDown",
                            "duration": 1,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "justRotate",
                            "duration": 2,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "zoomOutLeft",
                            "duration": 1,
                            "delay": 1,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_783b4f8f-287c-7214-4d79-1c669ef98b2a",
                    "pluginProps": {
                        "uuid": "lbp-text_783b4f8f-287c-7214-4d79-1c669ef98b2a",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h3>双<strong>击修改文字</strong></h3>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 34,
                        "left": 24,
                        "width": 100,
                        "height": 40,
                        "zindex": 4,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInLeft",
                            "duration": 1,
                            "delay": 1,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                }
            ]
        },
        {
            "uuid": 1621237565968,
            "title": "",
            "elements": [
                {
                    "name": "lbp-background",
                    "pluginType": "lbp-background",
                    "uuid": "lbp-background_fedfc78c-da6f-9b3c-bec6-d37a0546e16f",
                    "pluginProps": {
                        "uuid": "lbp-background_fedfc78c-da6f-9b3c-bec6-d37a0546e16f",
                        "imgSrc": "",
                        "backgroundColor": "rgba(255, 255, 255, 0.2)",
                        "waterMarkText": "水印文字",
                        "waterMarkFontSize": 16,
                        "waterMarkRotate": 10,
                        "waterMarkColor": "rgba(184, 184, 184, 0.2)"
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 100,
                        "height": 40,
                        "zindex": 1,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_8dce7fa1-fd59-67c3-e8a8-e58d2260a81c",
                    "pluginProps": {
                        "uuid": "lbp-text_8dce7fa1-fd59-67c3-e8a8-e58d2260a81c",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h1><strong style=\"color: rgb(240, 102, 102);\"><em><u>双击修改文字</u></em></strong></h1>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 190,
                        "height": 108,
                        "zindex": 2,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInUp",
                            "duration": 1,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                }
            ]
        },
        {
            "uuid": 1621318058717,
            "title": "",
            "elements": [
                {
                    "name": "lbp-background",
                    "pluginType": "lbp-background",
                    "uuid": "lbp-background_58ed7174-b064-97ce-09a5-4994073f529a",
                    "pluginProps": {
                        "uuid": "lbp-background_58ed7174-b064-97ce-09a5-4994073f529a",
                        "imgSrc": "",
                        "backgroundColor": "rgba(255, 255, 255, 0.2)",
                        "waterMarkText": "水印文字",
                        "waterMarkFontSize": 16,
                        "waterMarkRotate": 10,
                        "waterMarkColor": "rgba(184, 184, 184, 0.2)"
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 100,
                        "height": 40,
                        "zindex": 1,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-qq-map",
                    "pluginType": "lbp-qq-map",
                    "uuid": "lbp-qq-map_206f3564-ff40-e6dc-fa6a-c1f213ccfe73",
                    "pluginProps": {
                        "uuid": "lbp-qq-map_206f3564-ff40-e6dc-fa6a-c1f213ccfe73",
                        "labelContent": "",
                        "zoomLevel": 12,
                        "qqMapKey": "GENBZ-G5S3J-7OLFW-FLBX4-WVEMK-SOBL4",
                        "poi": {
                            "latLng": {
                                "lat": 39.90469,
                                "lng": 116.40717
                            },
                            "name": "北京市",
                            "type": 4
                        }
                    },
                    "commonStyle": {
                        "top": 334,
                        "left": 46,
                        "width": 252,
                        "height": 131,
                        "zindex": 2,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "zoomInUp",
                            "duration": 1,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "justRotate",
                            "duration": 1,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                }
            ]
        },
        {
            "uuid": 1621319532736,
            "title": "",
            "elements": [
                {
                    "name": "lbp-background",
                    "pluginType": "lbp-background",
                    "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                    "pluginProps": {
                        "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                        "imgSrc": "",
                        "backgroundColor": "rgba(255, 255, 255, 0.2)",
                        "waterMarkText": "水印文字",
                        "waterMarkFontSize": 16,
                        "waterMarkRotate": 10,
                        "waterMarkColor": "rgba(184, 184, 184, 0.2)"
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 100,
                        "height": 40,
                        "zindex": 1,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-picture",
                    "pluginType": "lbp-picture",
                    "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                    "pluginProps": {
                        "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                        "imgSrc": "",
                        "fillType": "contain"
                    },
                    "commonStyle": {
                        "top": 0,
                        "left": 0,
                        "width": 320,
                        "height": 568,
                        "zindex": 2,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                }
            ]
        },
        {
            "uuid": 1621330643090,
            "title": "",
            "elements": [
                {
                    "name": "lbp-background",
                    "pluginType": "lbp-background",
                    "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                    "pluginProps": {
                        "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                        "imgSrc": "",
                        "backgroundColor": "rgba(255, 255, 255, 0.2)",
                        "waterMarkText": "水印文字",
                        "waterMarkFontSize": 16,
                        "waterMarkRotate": 10,
                        "waterMarkColor": "rgba(184, 184, 184, 0.2)"
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 100,
                        "height": 40,
                        "zindex": 1,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-picture",
                    "pluginType": "lbp-picture",
                    "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                    "pluginProps": {
                        "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                        "imgSrc": "",
                        "fillType": "contain"
                    },
                    "commonStyle": {
                        "top": 0,
                        "left": 0,
                        "width": 320,
                        "height": 568,
                        "zindex": 2,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_cde5e1d3-7166-3ca5-1b2d-182c9967beca",
                    "pluginProps": {
                        "uuid": "lbp-text_cde5e1d3-7166-3ca5-1b2d-182c9967beca",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h1><strong style=\"color: rgb(230, 0, 0);\">库客<span class=\"ql-cursor\">﻿</span>音乐</strong></h1>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 54,
                        "left": 100,
                        "width": 218,
                        "height": 118.5,
                        "zindex": 3,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInDown",
                            "duration": 1,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "bounce",
                            "duration": 2,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "zoomOutLeft",
                            "duration": 1,
                            "delay": 1,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_783b4f8f-287c-7214-4d79-1c669ef98b2a",
                    "pluginProps": {
                        "uuid": "lbp-text_783b4f8f-287c-7214-4d79-1c669ef98b2a",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h3>双<strong>击修改文字</strong></h3>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 34,
                        "left": 24,
                        "width": 100,
                        "height": 40,
                        "zindex": 4,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInLeft",
                            "duration": 1,
                            "delay": 1,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                }
            ]
        },
        {
            "uuid": 1621330643258,
            "title": "",
            "elements": [
                {
                    "name": "lbp-background",
                    "pluginType": "lbp-background",
                    "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                    "pluginProps": {
                        "uuid": "lbp-background_004c6dfe-68e5-b445-9ccc-6ec9d83d81ab",
                        "imgSrc": "",
                        "backgroundColor": "rgba(255, 255, 255, 0.2)",
                        "waterMarkText": "水印文字",
                        "waterMarkFontSize": 16,
                        "waterMarkRotate": 10,
                        "waterMarkColor": "rgba(184, 184, 184, 0.2)"
                    },
                    "commonStyle": {
                        "top": 100,
                        "left": 100,
                        "width": 100,
                        "height": 40,
                        "zindex": 1,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-picture",
                    "pluginType": "lbp-picture",
                    "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                    "pluginProps": {
                        "uuid": "lbp-picture_83ce450d-0def-ac2b-5e68-82a0dc14b2c7",
                        "imgSrc": "",
                        "fillType": "contain"
                    },
                    "commonStyle": {
                        "top": 0,
                        "left": 0,
                        "width": 320,
                        "height": 568,
                        "zindex": 2,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": []
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_cde5e1d3-7166-3ca5-1b2d-182c9967beca",
                    "pluginProps": {
                        "uuid": "lbp-text_cde5e1d3-7166-3ca5-1b2d-182c9967beca",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h1><strong style=\"color: rgb(230, 0, 0);\">库客<span class=\"ql-cursor\">﻿</span>音乐</strong></h1>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 54,
                        "left": 100,
                        "width": 218,
                        "height": 118.5,
                        "zindex": 3,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInDown",
                            "duration": 1,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "bounce",
                            "duration": 2,
                            "delay": 0,
                            "interationCount": 1,
                            "infinite": false
                        },
                        {
                            "type": "zoomOutLeft",
                            "duration": 1,
                            "delay": 1,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                },
                {
                    "name": "lbp-text",
                    "pluginType": "lbp-text",
                    "uuid": "lbp-text_783b4f8f-287c-7214-4d79-1c669ef98b2a",
                    "pluginProps": {
                        "uuid": "lbp-text_783b4f8f-287c-7214-4d79-1c669ef98b2a",
                        "backgroundColor": "rgba(0, 0, 0, 0)",
                        "borderWidth": 0,
                        "borderRadius": 10,
                        "borderColor": "#000000",
                        "text": "<h3>双<strong>击修改文字</strong></h3>",
                        "editorMode": "preview",
                        "isEditingElement": false
                    },
                    "commonStyle": {
                        "top": 34,
                        "left": 24,
                        "width": 100,
                        "height": 40,
                        "zindex": 4,
                        "textAlign": "center",
                        "color": "#000000",
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "fontSize": 14,
                        "margin": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "padding": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            }
                        },
                        "border": {
                            "top": {
                                "value": 0,
                                "unit": "px"
                            },
                            "right": {
                                "value": 0,
                                "unit": "px"
                            },
                            "bottom": {
                                "value": 0,
                                "unit": "px"
                            },
                            "left": {
                                "value": 0,
                                "unit": "px"
                            },
                            "color": {
                                "value": "#000"
                            },
                            "style": {
                                "value": "solid"
                            }
                        },
                        "border-style": "solid",
                        "boxModelPart": ""
                    },
                    "events": [],
                    "methodList": [],
                    "scripts": [],
                    "animations": [
                        {
                            "type": "bounceInLeft",
                            "duration": 1,
                            "delay": 1,
                            "interationCount": 1,
                            "infinite": false
                        }
                    ]
                }
            ]
        }
    ],
    "is_publish": true,
    "is_template": false,
    "page_mode": "h5_swipper",
    "height": 651,
    "width": 320,
    "published_at": "2021-05-17T07:19:48.463Z",
    "created_by": null,
    "updated_by": null,
    "created_at": "2021-05-17T07:19:48.479Z",
    "updated_at": "2021-05-19T07:38:46.723Z",
    "datasources": []
  }
  console.log('work:::', work)
  await ctx.render('engine', {
    work
  })
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);