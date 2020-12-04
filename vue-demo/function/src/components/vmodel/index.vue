<template>
  <div>
    <input 
      type="text"
      :value="text"
      @input="$emit('change', $event.target.value)"
    >
    <!-- 
        注意：
        第一， 上面使用 :value 而没用 v-model
        第二， 上面的change 和 model.event 对应起来即可，名字可自定义
     -->
  </div>
</template>

<script>
export default {
  model: {
    prop: 'text', // 对应到 props text
    event: 'change'
  },
  props: {
    text: String
  }
}
</script>

