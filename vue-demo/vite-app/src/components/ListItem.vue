<template inherit-attrs="false">
  <li @click="handleDelete(index)">{{item}}</li>
</template>

<script setup>
import { defineProps, defineEmit, useContext } from "vue";

const props = defineProps({
  item: String,
  index: Number
})

const emit = defineEmit(['handleDelete'])

const ctx = useContext()
console.log('ctx:::', ctx, ctx.props)

// 导出给组件实例【作用：保证当前组件的封装性】
ctx.expose({
  getName() {
    return '子组件导出'
  },
  count: 1
})

const handleDelete = (index) => {
  emit('handleDelete', index)
}

console.log(ctx)
</script>

<style>

</style>