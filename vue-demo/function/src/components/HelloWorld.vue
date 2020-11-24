<template>
  <div class="hello">
    测试一些工具方法
    <countTo :startVal='startVal' :endVal='endVal' :decimals='endVal | decimalsFilter' :duration='3000'></countTo>
  </div>
</template>

<script>
import jiff from 'jiff'
import countTo from 'vue-count-to';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      startVal: 0,
      endVal: 2017.52,
      decimals: 2
    }
  },
  filters:{
    decimalsFilter(number){
      //这里判断这个输出的是几位小数位（自行处理）
      let len = number.toString().split(".").length > 1 ? number.toString().split(".")[1].length : 0
      if(len > 0){
        return len //这里返回插件要显示的几位小数
      }else{
        return 0
      }
    }
  },
  components: {
    countTo
  },
  created() {
    var a = [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' },
    ]

    var b = a.slice();
    b.splice(1, 1);
    b.push({ name: 'd' });


    console.log('a::', a)
    console.log('b::', b)
    // Generate diff (ie JSON Patch) from a to b
    var patch = jiff.diff(a, b);
    // [{"op":"add","path":"/3","value":{"name":"d"}},{"op":"remove","path":"/1"}]
    console.log(JSON.stringify(patch), patch);

    var patched = jiff.patch(patch, a);

    // [{"name":"a"},{"name":"c"},{"name":"d"}]
    console.log(JSON.stringify(patched));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
