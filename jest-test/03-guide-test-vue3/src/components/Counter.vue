<template>
  <div>
    <button @click="handClick">Increment</button>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    let count = 1;
    const handClick = () => {
      emit("increment", {
        count,
        even: count % 2 === 0,
      });
      count++;
    };
    return {
      handClick,
    };
  },
};
</script>

<style scoped lang="scss"></style>
