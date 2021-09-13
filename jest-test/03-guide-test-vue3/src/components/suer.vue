<template>
  <div>
    <input type="text" v-model="input" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped lang="scss"></style>
