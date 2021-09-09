<template>
  <div>
    <SharesChart :chartData="sharesData"></SharesChart>
    <hr>
    <AreaChart :chartData="areaData"></AreaChart>
    <hr>
    <BarChart :chartData="barChartData"></BarChart>
  </div>
</template>

<script>
import BarChart from '@/components/echart-components/BarChart'
import SharesChart from '@/components/echart-components/SharesChart'
import AreaChart from '@/components/echart-components/AreaChart'
export default {
  data() {
    return {
      // 柱状图数据
      barChartData: {
        days: ['11.21', '11.22', '11.23', '11.24', '11.25', '11.26', '11.27'],
        data1: [100, 120, 161, 134, 105, 160, 165],
        data2: [120, 82, 91, 154, 162, 140, 145]
      },
      sharesData: {},
      areaData: {
        days: ["7月26日", "7月28日", "7月23日", "8月1日", "8月3日", "8月5日", "8月7日"],
        data: [140, 232, 101, 264, 90, 340, 250]
      }
    };
  },
  components: {
    BarChart,
    SharesChart,
    AreaChart
  },
  mounted() {
    // this.sharesData = 
  },
  methods: {
  },
};
</script>

<style scoped>
  #main {
    width: 400px;
    height: 400px;
  }
</style>
