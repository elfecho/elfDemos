<template>
  <div>
    <div class="content">
      <div
        class="list"
        :style="{ transform: 'translate(0,' + yPos + 'px)' }"
       
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      >
        <div class="item" v-for="(item, index) of list" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      yPos: 0,
      startPos: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(i + "  kkajsdfkl");
    }
    
    this.list = arr;
    
    console.log(this.list);
  },
  methods: {
    touchStart(e) {
      const touch = e.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
      // const { waitTime, singleHeight, singleWidth } = this.options
      this.startPos = {
        x: touch.pageX,
        y: touch.pageY,
      }; //取第一个touch的坐标值
      this.startPosY = this.yPos //记录touchStart时候的posY
      this.startPosX = this.xPos //记录touchStart时候的posX
    },
    touchMove(e) {
      const touch = e.targetTouches[0];
      this.endPos = {
        x: touch.pageX - this.startPos.x,
        y: touch.pageY - this.startPos.y,
      };
      this.yPos = this.startPosY + this.endPos.y
      console.log(this.yPos)
    },
    touchEnd() {
      // if (this.yPos >= 0) {
      //   const len = this.list.length;
      //   const y = (40 * len) / 2;
      //   this.yPos = -y;
      // }
    },
  },
};
</script>

<style scoped>
.content {
  overflow: hidden;
}
.list {
  /* transform: translateY(-100px); */
  overflow: hidden;
}
.list .item {
  line-height: 40px;
}
</style>
