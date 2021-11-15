<template>
  <div class="hj-carousel" @mouseenter="stop" @mouseleave="go">
    <transition-group name="list" tag="ul" ref="container">
      <li v-for="(item, index) in carouselInfo" :key="index" class="list-item"
          v-show="index === currentIndex"
          @webkitTransitionend="carouseTransition"
          :style="{backgroundImage: `url(${item.img})`}"
      >
        <!-- 轮播图文本介绍 -->
        <div class="wrapper intro-box">
          <div class="service-intro">
            <h2>{{item.title}}</h2>
            <p>{{item.intro_one}}</p>
            <p>{{item.intro_two}}</p>
            <router-link class="intro-btn" :to="item.target_url">查看</router-link>
          </div>
        </div>
      </li>
    </transition-group>
    <!-- 小圆点 -->
    <ol class="circles-items">
      <li v-for="(item,index) in carouselInfo.length" :key="index" :class="{'active':index===currentIndex}"
          @click="change(index)"></li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
  .hj-carousel {
    position: relative;
    width: 100%;
    height: 520px;
    .list-item {
      position: absolute;
      width: 1920px;
      height: 520px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-position: center center;
      background-size: cover;
      .intro-box {
        position: relative;
        height: 100%;
        .service-intro {
          width:418px;
          position: absolute;
          top: 152px;
          left: 58px;
          color: #FFF;
          h2 {
            height:53px;
            line-height:53px;
            font-size:38px;
            font-weight:500;
          }
          p {
            height: 34px;
            line-height: 34px;
            font-size:18px;
          }
          .intro-btn {
            display: block;
            margin-top: 33px;
            width:123px;
            height:40px;
            line-height: 40px;
            text-align: center;
            background:linear-gradient(360deg,rgba(228,39,53,1) 0%,rgba(235,121,101,1) 100%);
            box-shadow:0 5px 20px 0 rgba(230,2,19,0.5);
            border-radius:5px;
            color: #FFF;
            text-decoration: none;
          }
        }
      }
    }
    .circles-items {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 16px;
      z-index: 10;
      margin: 0 auto;
      text-align: center;
      font-size: 0;
      overflow: hidden;
      li {
        width: 10px;
        height: 10px;
        float: left;
        margin-right: 30px;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
        &.active {
          background-color: rgba(230, 2, 19, 1);
        }
      }
    }
  }

  .list-enter,
  .list-leave-to {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .list-leave-active,
  .list-enter-active {
    transition: all 1s linear;
  }


</style>

<script>
  export default {
    data() {
      return {
        carouselInfo: [
          {
            img: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%BD%AE%E6%92%AD%E5%9B%BE&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1763372925,2778934954&os=2631767475,940708559&simid=4277588516,611262326&pn=0&rn=1&di=96910&ln=1784&fr=&fmq=1634631887115_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fbpic.588ku.com%252Fback_origin_min_pic%252F19%252F04%252F16%252Fa84af3d5ddec6fc6bbcf4c4141064865.jpg%26refer%3Dhttp%253A%252F%252Fbpic.588ku.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1637223885%26t%3Dd4f12d7031aa63d80635f00330598e7e&rpstart=0&rpnum=0&adpicid=0&nojc=undefined',
            title: '新一代信息服务平台上线',
            intro_one: '助理合作伙伴 共创辉煌',
            intro_two: 'LOGO个性化定制、界面清晰、操作简单',
            target_url: '/1'
          },
          {
            img: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%BD%AE%E6%92%AD%E5%9B%BE&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1763372925,2778934954&os=2631767475,940708559&simid=4277588516,611262326&pn=0&rn=1&di=96910&ln=1784&fr=&fmq=1634631887115_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fbpic.588ku.com%252Fback_origin_min_pic%252F19%252F04%252F16%252Fa84af3d5ddec6fc6bbcf4c4141064865.jpg%26refer%3Dhttp%253A%252F%252Fbpic.588ku.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1637223885%26t%3Dd4f12d7031aa63d80635f00330598e7e&rpstart=0&rpnum=0&adpicid=0&nojc=undefined',
            title: '新二代信息服务平台上线',
            intro_one: '助理合作伙伴 共创辉煌',
            intro_two: 'LOGO个性化定制、界面清晰、操作简单',
            target_url: '/2'
          },
          {
            img: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%BD%AE%E6%92%AD%E5%9B%BE&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1763372925,2778934954&os=2631767475,940708559&simid=4277588516,611262326&pn=0&rn=1&di=96910&ln=1784&fr=&fmq=1634631887115_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fbpic.588ku.com%252Fback_origin_min_pic%252F19%252F04%252F16%252Fa84af3d5ddec6fc6bbcf4c4141064865.jpg%26refer%3Dhttp%253A%252F%252Fbpic.588ku.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1637223885%26t%3Dd4f12d7031aa63d80635f00330598e7e&rpstart=0&rpnum=0&adpicid=0&nojc=undefined',
            title: '新三代信息服务平台上线',
            intro_one: '助理合作伙伴 共创辉煌',
            intro_two: 'LOGO个性化定制、界面清晰、操作简单',
            target_url: '/3'
          },
          {
            img: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%BD%AE%E6%92%AD%E5%9B%BE&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1763372925,2778934954&os=2631767475,940708559&simid=4277588516,611262326&pn=0&rn=1&di=96910&ln=1784&fr=&fmq=1634631887115_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fbpic.588ku.com%252Fback_origin_min_pic%252F19%252F04%252F16%252Fa84af3d5ddec6fc6bbcf4c4141064865.jpg%26refer%3Dhttp%253A%252F%252Fbpic.588ku.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1637223885%26t%3Dd4f12d7031aa63d80635f00330598e7e&rpstart=0&rpnum=0&adpicid=0&nojc=undefined',
            title: '新四代信息服务平台上线',
            intro_one: '助理合作伙伴 共创辉煌',
            intro_two: 'LOGO个性化定制、界面清晰、操作简单',
            target_url: '/4'
          }
        ],
        // 当前索引
        currentIndex: 0,
        // 定时器
        timer: '',
        // 小圆点开关
        begin: '',
      }
    },
    methods: {
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 3000)
      },
      stop() {
        clearInterval(this.timer);
        this.timer = null
      },
      change(index) {
        this.currentIndex = index
      },
      autoPlay() {
        this.currentIndex++;
        if (this.currentIndex > this.carouselInfo.length - 1) {
          this.currentIndex = 0
        }
      },
      carouseTransition() {
        this.begin = false;
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        if (this.begin) {
          return;
        }
        this.begin = true;
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 3000)
      });
    },
  }


</script>


