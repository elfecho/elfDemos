<template>
  <div :class="className" :style="{ height: height, width: width, backgroundColor: backgroundColor }" />
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/line");
import chartResize from "./mixins/chart-resize";

export default {
  mixins:[chartResize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    backgroundColor: {
      type: String,
      default: "#161a1e",
    },
    // 父组件传递过来的图表数据
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // Echarts实例
      chart: null
    }
  },
  watch: {
    /* 如果图表数据是后台获取的，监听父组件中的数据变化，重新触发Echarts */
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    /* 图表初始化 */
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    /* 释放图表实例 */
    this.chart.dispose();
    /* dispose 会释放内部占用的一些资源和事件绑定，但是解除实例的引用我们是做不到的，所以需要重新赋值为null */
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions({ days, data } = {}) {
      const option = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "渐变堆叠面积图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: '#f6465d',
              color: '#ffffff',
            },
            lineStyle: {
              color: "#f6465d", // 竖线样式
              width: 1,
              opacity: 1,
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: days,
          axisLine: {
            show: false,
          },
          nameTextStyle: {
            fontSize:12,
            padding: [0, 0, 0, -30]
          },
          axisTick: { show: false },
        },
        yAxis: {
          offset: 18,
          splitLine: {
            show: false,
          },
          // 悬浮的横线提示
          axisPointer: {
            type: "line",
            label: {
              backgroundColor: '#f6465d',
              color: '#ffffff',
            },
            lineStyle: {
              color: "#f6465d", // 竖线样式
              width: 1,
              opacity: 1,
            },
          },
        },
        series: [
          {
            name: "USDT",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              color: '#00e7ce',
              width: 2
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#009183",
                },
                {
                  offset: 1,
                  color: "#1a1a1b",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data,
          },
        ],
      }
      this.chart.setOption(option)
    },
  },
};
</script>

<style scoped lang="scss"></style>
