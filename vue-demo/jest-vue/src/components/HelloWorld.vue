<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onClick">click me</button>
    <h2 v-show="GLOBAL.logined">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject: ['GLOBAL'],
  data() {
    return {
      msg: 'Hello Jest',
    };
  },
  methods: {
    onClick() {
      this.msg = 'new message';
    },
  },
  // props: {
  //   msg: String
  // }
}
</script>
