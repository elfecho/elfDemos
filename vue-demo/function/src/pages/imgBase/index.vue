<template>
  <div>
    <h3>单张图片转base64</h3>
    <img :src="dataURL" alt="">
    <h3>多张图片转base64</h3>
    
    <img :src="item" v-for="(item, index) in base64Datas" :key="index" alt="">
  </div>
</template>

<script>
export default {
  name: 'ImgBase',
  data() {
    return {
      dataURL: '',
      base64Datas: [],
      dataList: [
        'http://image.kuke.com/images/audio/cata200/P/PTC5186041.jpg',
        'http://image.kuke.com/images/audio/cata200/E/EUCD2252.jpg',
        'http://image.kuke.com/images/audio/cata200/E/EUCD2051.jpg',
        'http://image.kuke.com/images/audio/cata200/E/EUCD2050.jpg',
      ]
    }
  },
  created() {
    this.imageUrlToBase64()
    this.onloadImg(this.dataList, 0, this.dataList.length)
  },
  methods: {
    //异步执行
		imageUrlToBase64() {
			//一定要设置为let，不然图片不显示
			let image = new Image();
	
			//解决跨域问题
			image.setAttribute('crossOrigin', 'anonymous');
      // image.crossOrigin = 'anonymous'
			
			let imageUrl = "http://image.kuke.com/images/audio/cata200/E/EUCD2252.jpg";
			image.src = imageUrl
	
			// let that = this;
			//image.onload为异步加载
			image.onload = () => {
				var canvas = document.createElement("canvas");
				canvas.width = image.width;
				canvas.height = image.height;
				var context = canvas.getContext('2d');
				context.drawImage(image, 0, 0, image.width, image.height);
				
				var quality = 0.8;
				//这里的dataurl就是base64类型
				this.dataURL = canvas.toDataURL("image/jpeg", quality);//使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
        // console.log('dataURL', dataURL)
			}
		},
    //采用递归同步执行
		onloadImg(data, i, len) {
	
			//一定要设置为let，不然图片不显示
			let image = new Image();
	
			//解决跨域问题
			image.setAttribute('crossOrigin', 'anonymous');
			
			let imageUrl = data[i]
			image.src = imageUrl
	
			let that = this;
			//image.onload为异步加载
			image.onload = async () => {
				var canvas = document.createElement("canvas");
				canvas.width = image.width;
				canvas.height = image.height;
				var context = canvas.getContext('2d');
				context.drawImage(image, 0, 0, image.width, image.height);
				
				var quality = 0.8;
				//这里的dataurl就是base64类型
				var dataURL = await canvas.toDataURL("image/jpeg", quality);//使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
				console.log('dataURL', dataURL)
				//数组存放图片base64
				that.base64Datas.push(dataURL);
				
				//递归执行图片url转base64
				i = i + 1;
				if (i <= len) {
					that.onloadImg(data, i, len)
				}
			
			}
		},
  },
}
</script>

<style scoped lang ="scss">

</style>
