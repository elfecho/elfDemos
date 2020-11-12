<template>
  <div class="hello">
    测试一些工具方法
  </div>
</template>

<script>
import jiff from 'jiff'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {

    }
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
