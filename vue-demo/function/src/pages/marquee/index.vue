<template>
  <div class="marquee">
    <marquee :content="options.marquee" :key="0"></marquee>
    <marquee :content="options.marquee1" :key="1"></marquee>
  </div>
</template>
<script>
import Marquee from "@/components/marqueeWrap";
export default {
  components: {
    Marquee,
  },
  data() {
    return {
      options: {
        marquee: '阿中阿中勇敢飞',
        marquee1: '阿中阿中勇敢飞，中华儿女永相随~~~阿中阿中勇敢飞，中华儿女永相随~~~'
      }
    };
  },
};
</script>
<style scoped>
.marquee {
  width: 544px;
  padding-left: 100p;
  padding-right: 30px;
  line-height: 50px;
  margin: 0 auto 28px;
  color: #000;
  box-sizing: border-box;
  border: 1px solid #f2b0ab;
  border-radius: 26px;
  /* background: url(../img/sound.png) no-repeat 42px center / 35px 35px; */
}
</style>
