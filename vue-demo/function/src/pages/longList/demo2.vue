<template>
  <div id="app">
    <!--        1. 设置容器元素，view-list-->
    <div class="view-list" ref="viewList">
      <!--      2. 循环一个列表,新数据进行追加,下面增加一个loading条-->
      <div class="item" v-for="(item, index) in visibleData" :key="index">
        账号ID：{{ index }}
      </div>
      <div class="item" id="loading">加载中</div>
    </div>
  </div>
</template>

<script>
// function $(selector) {
//   return document.querySelector(selector);
// }
function getDataList() {
  let data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({ id: "item" + i, value: Math.random() * i });
  }
  return data;
}

export default {
  name: "App",
  components: {},
  data() {
    return {
      itemData: [],
      startIndex: 0,
      endIndex: 0,
      items: [],
      remain: 20
    };
  },
  methods: {
    // 获取随机数
    getRange() {
      let id = new Date().getTime();
      return Math.random() * id;
    },
    // 触发监听回调
    loadList(status) {
      console.log("status", status);
      status = status[0];
      let isShow = status.isIntersecting;
      if (isShow) {
        console.log("加载中 ---- ");
        for (let i = 10; i >= 0; i--) {
          this.itemData.push({ id: this.getRange() });
        }
      } else {
        console.log("不加载");
      }
    },

    // loadData(start, end) {
    //   const dd = getDataList().slice(start, end);
    //   console.log(dd)
    //   this.itemData = getDataList().slice(start, end);
    // },
  },
   computed: {
    //可见数据有哪些
    visibleData() {
      let start = this.startIndex - this.prevCount;
      let end = this.endIndex + this.nextCount;
      console.log('进入计算', this.items.slice(start, end))
      return this.items.slice(start, end);
    },
    //前面预留几个
    prevCount() {
      return Math.min(this.startIndex, this.remain);
    },
    //后面预留几个
    nextCount() {
      return Math.min(this.remain, this.items.length - this.endIndex);
    },
   },
  created() {
    // 3. 初始化循环渲染的列表
    // for (let i = 1000; i >= 0; i--) {
    //   this.itemData.push({ id: this.getRange() });
    // }
    this.items = getDataList()
  },
  mounted() {
    //    4. 挂载时，获取列表的容器元素，然后设置监听
    //  使用官方提供的新接口：https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
    /**
     * callback : 回调函数，可见时 和 不可见时，都触发
     * options ：配置参数，
     *      root ：根元素，默认是视图
     *      threshold ： 交叉比例。也就是在跟元素出现的比例
     */
    // 5. 初始化观察对象
    let count = Math.ceil(this.$refs.viewList.clientHeight / 60);
    // let startIndex = 0;
    // let endIndex = 0;
    console.log("count", count);
    this.endIndex = count
    // this.loadData(this.startIndex, count * 3);
    let io = new IntersectionObserver((entries) => {
      // this.loadData(startIndex, count);
      // this.itemData = this.data.slice(start, count);
      // 标志位元素进入视口
      console.log('entries[0]', entries[0])
      if (entries[0].isIntersecting) {
        // 更新列表数据起始和结束位置
        this.startIndex = this.startIndex + count;
        this.endIndex = this.startIndex + this.remain;
        if (this.endIndex >= this.items.length) {
          console.log('数据加载完取消观察')
          // 数据加载完取消观察
          io.unobserve(entries[0].target);
        }
        console.log(this.startIndex, this.endIndex)
        // requestAnimationFrame 由系统决定回调函数的执行时机
        // requestAnimationFrame(() => {
        // this.loadData(this.startIndex, this.endIndex);
        //   let num = Number(getDataList().length - startIndex);
        //   let info = ["还有", num, "条数据"];
        //   $(".top").innerText = info.join(" ");
        //   if (num - count <= 0) {
        //     $(".top").classList.add("out");
        //   }
        // });
      }
    });



    // let io = new IntersectionObserver(this.loadList, {});
    // 6. 获取被监听元素
    let viewList = document.getElementById("loading");
    // 7. 在观察对象上，监听 6 中获取的对象
    io.observe(viewList);
  },
};
</script>

<style>
.view-list {
  width: 100%;
  height: 500px;
  margin: 20px 0;
  overflow-x: scroll;
  background-color: rgba(0, 0, 255, 0.25);
}
.item {
  height: 50px;
  border: 1px gray solid;
  margin-bottom: 10px;
}
</style>
