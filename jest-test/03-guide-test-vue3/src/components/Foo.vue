<template>
  <div>
    Foo
    <Bar></Bar>
  </div>
</template>

<script>
import Bar from "./Bar.vue";
export default {
  name: "Foo",
  data() {
    return {};
  },
  components: {
    Bar,
  },
};
</script>

<style scoped></style>
