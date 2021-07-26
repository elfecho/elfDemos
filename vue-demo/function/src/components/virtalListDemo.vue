<template>
  <div>
    <!-- 能滚动的盒子 -->
    <!-- @scroll="handlScroll" -->
    <div class="viewport" ref="viewport">
      <!-- 滚动条 -->
      <!-- <div class="scroll-bar" ref="scrollbar"></div> -->
      <!-- 列表位置 -->
      <div
        class="scroll-list"
        :style="{ transform: `translate3d(0,${offset}px,0)` }"
      >
        <div id="topLoading"></div>
        <div
          v-for="item in visibleData"
          ref="items"
          :key="item.id"
          :vid="item.id"
        >
          <!-- 通过插槽传出去 -->
          <slot :item="item"></slot>
        </div>
        <div id="loading"></div>
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
    console.log("this.items", this.items);
    this.$refs.viewport.style.height = this.size * this.remain + "px"; //当前的一项高度*显示的项目高度\
    let count = Math.ceil(this.$refs.viewport.clientHeight / this.size);
    // this.$refs.scrollbar.style.height = this.items.length * this.size + "px"; //当前总长度*当前的项目高度
    let io = new IntersectionObserver((entries) => {
      console.log("entries", entries, entries[0].target.id === "topLoading");
      if (entries[0].isIntersecting) {
        if (entries[0].target.id === "loading") {
          console.log("触底了");
          this.start = this.start + count; //列表开始的位置应该额等于滚动的位置/列表的高度
          this.end = this.start + this.remain;
          this.offset = this.start * this.size - this.prevCount * this.size;
        }
        if (entries[0].target.id === "topLoading") {
          console.log("到达顶部");
          if (this.start != 0) {
            this.offset = this.start * this.size - this.nextCount * this.size;
            this.end = this.start;
            this.start = this.start - count;
            
            
          }
        }
      }
    });

    let topLoading = document.getElementById("topLoading");
    io.observe(topLoading);
    let viewList = document.getElementById("loading");

    // 7. 在观察对象上，监听 6 中获取的对象

    io.observe(viewList);
  },
  methods: {
    handlScroll(e) {
      console.log(e.target.scrollTop);
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
