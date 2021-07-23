<template>
  <div>
    <section class="marquee-wrap" ref="wrap">
      <div
        class="marquee"
        ref="marquee"
        :style="{ animationDuration: duration }"
        v-if="isShow"
      >
        <span class="text-item">{{ content }}</span>
        <span class="text-item copy">{{ content }}</span>
      </div>
      <div class="text" v-else>{{ content }}</div>

      <div class="getWidth" ref="getwidth">{{ content }}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "marquee",
  props: {
    /* 跑马灯数据 */
    content: {
      type: String,
      default: "",
    },
    /* 跑马灯速度，数值越大速度越快 */
    speed: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      duration: 0,
      isShow: true,
    };
  },
  computed: {
    marqueeWrap() {
      return this.$refs.wrap;
    },
    getWidth() {
      return this.$refs.getwidth;
    },
  },
  mounted() {
    

    this.move();
  },
  methods: {
    move() {
      let maxWidth = this.marqueeWrap.clientWidth;
      let width = this.getWidth.scrollWidth;
      if (width < maxWidth) {
        this.isShow = false;
      } else {
        this.isShow = true;
        /* 跑马灯速度，使用跑马灯内容宽度 除以 速度 得到完整跑完一半内容的时间 */
        this.duration =
          this.$refs.marquee.getBoundingClientRect().width / this.speed + "s";
        this.$refs.marquee.style.webkitAnimationPlayState = "running";
      }
    },
  },
};
</script>

<style scoped>
.marquee-wrap {
  position: relative;
  overflow: hidden;
}
.marquee-wrap:after {
  content: "0";
  opacity: 0;
}
.marquee {
  position: absolute;
  /* font-size: 0; */
  white-space: nowrap;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.text-item {
  margin-right: 24px;
  font-size: 24px;
  /* 解决Font Boosting */
  -webkit-text-size-adjust: none;
  max-height: 999px;
  text-align: center;
}

.text {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 24px;
  max-height: 999px;
}

.text-item.setClass {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

.getWidth {
  word-break: keep-all;
  white-space: nowrap;
  position: absolute;
  opacity: 0;
  top: 0;
}
</style>
