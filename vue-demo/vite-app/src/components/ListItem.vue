<template>
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

const handleDelete = (index) => {
  emit('handleDelete', index)
}

console.log(ctx)
</script>

<style>

</style>