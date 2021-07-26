<template>
  <div>
    <!-- 能滚动的盒子 -->
    <div class="viewport" ref="viewport" @scroll="handlScroll">
      <!-- 滚动条 -->
      <!-- <div class="scroll-bar" ref="scrollbar"></div> -->
      <!-- 列表位置 -->
      <div
        class="scroll-list"
        :style="{ transform: `translate3d(0,${offset}px,0)` }"
      >
        <div
          v-for="item in visibleData"
          ref="items"
          :key="item.id"
          :vid="item.id"
        >
          <!-- 通过插槽传出去 -->
          <slot :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: Number, //当前每一项的高度
    remain: Number, //可见多少个
    items: Array, //当前项目
  },
  data() {
    return {
      offset: 0,
      start: 0,
      end: 0,
    };
  },
  computed: {
    //可见数据有哪些
    visibleData() {
      let start = this.start - this.prevCount;
      let end = this.end + this.nextCount;
      return this.items.slice(start, end);
    },
    //前面预留几个
    prevCount() {
      return Math.min(this.start, this.remain);
    },
    //后面预留几个
    nextCount() {
      return Math.min(this.remain, this.items.length - this.end);
    },
  },
  mounted() {
    console.log('this.items', this.items)
    this.$refs.viewport.style.height = this.size * this.remain + "px"; //当前的一项高度*显示的项目高度
    // this.$refs.scrollbar.style.height = this.items.length * this.size + "px"; //当前总长度*当前的项目高度
  },
  methods: {
    handlScroll(e) {
      console.log(e.target.scrollTop)
      this.start = Math.floor(e.target.scrollTop / this.size); //列表开始的位置应该额等于滚动的位置/列表的高度
      this.end = this.start + this.remain; //要渲染列表结束的位置等于列表开始的位置加上每一页数据展示的高度
      //如果前面有预留渲染，应该把这个位置向上移动
      this.offset = this.start * this.size - this.prevCount * this.size;
    },
  },
};
</script>

<style scoped>
.viewport {
  overflow-y: scroll;
  position: relative;
}
.scroll-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
