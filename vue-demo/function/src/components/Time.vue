<template>
  <div>
    <div class="chart-m-l-c">
      <label>诉讼参与人总数</label>
      <div class="count">
        <b v-for="(item, index) in prosecutorArr" :key="index">
          <div :style="{top: -item*40+'px'}">
            <i v-for="(ic, indexc) in 10" :key="indexc">{{ic-1}}</i>
          </div>
        </b>
      </div>
      <span>人</span>
      <span class="iconfont icon-8" @click="refreshLeft"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prosecutorArr: ['0','0','0','0','0','0','0','0'],
      //这里的数字数组是个8位数，只是占位，不能直接使用，看需求有可能是10位或11、12、20等等
      numbers: '59832'
      //这个参数是后台传给我们的，也不能直接使用，需要转换
    }
  },
  methods:{
    PrefixInteger(num, length) { //给数字前面补零 比如‘59832’补成8位即位‘00059832’
      return (Array(length).join('0') + num).slice(-length);
    },
    getRandomNumber (min, max) { //为了看效果，refreshLeft触发增加数字看效果，和后台数据过来效果一样，不管增加或减少
        return Math.floor(Math.random() * (max - min + 1) + min)
    },
    plusNPrAll(){ //为了看效果，点击上面html中的iconfont触发，refreshLeft方法（我真啰嗦~）
      const res = this.PrefixInteger(this.numbers,8)
      this.prosecutorArr = res.toString().split('')
    },
    refreshLeft(){ //刷新数据，我这里因为静态看效果，联调时将请求写在里面就好了
      this.numbers = parseInt(this.numbers)+ this.getRandomNumber(1, 100)
      this.plusNPrAll()
    }
  },
  mounted() {
    this.plusNPrAll()
  },
}
</script>

<style scoped lang ="scss">
.chart-m-l-c{
	width: 100%;
	height: 60px;
	padding: 10px 0;
	float: left;
	label{
		line-height: 40px;
		float: left;
		font-size: 13px;
		font-weight: 600;
	}
	.count{
		height: 60px;
		float: left;
		padding: 0 5px;
		b{
			width: 24px;
			height: 40px;
			float: left;
			border: 1px solid #ddd;
			color: #000;
			text-align: center;
			line-height: 40px;
			margin: 0 2px;
			position: relative;
			z-index: 3;
			overflow: hidden;
			div{
				width: 100%;
				height: 400px;
				position: absolute;
				left: 0;
				top: 0;
				transition: all .8s ease-in-out;
				i{
					width: 100%;
					height: 40px;
					float: left;
					font-style: normal;
					font-size: 18px;
					color: #333;
				}
			}
		}
	}
	span{
		line-height: 40px;
		float: left;
	}
	span.iconfont{
		width: 40px;
		height: 40px;
		line-height: 40px;
		float: right;
		text-align: center;
		cursor: pointer;
		color: #0071ff;
	}
	span.iconfont:hover{
		color: #5ec2a6;
	}
}
</style>
