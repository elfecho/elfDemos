<template>
  <div>
    {{ greetting }}
  </div>
</template>

<script>
export default {
  name: "Greetting",
  data() {
    return {
      greetting: "Vue without TDD",
    };
  },
};
</script>

<style scoped></style>
