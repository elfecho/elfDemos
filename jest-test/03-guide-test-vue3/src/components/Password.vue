<template>
  <div>
    <input type="text" v-model="password" />
    <div v-if="error" data-test="error">{{ error }}</div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    minLength: {
      type: Number,
    },
  },
  setup(props) {
    const password = ref("password");
    const error = computed(() => {
      if (password.value.length < props.minLength) {
        return `密码不能少于 ${props.minLength} 位`;
      }
      return "";
    });

    return {
      error,
    };
  },
};
</script>

<style scoped lang="scss"></style>
