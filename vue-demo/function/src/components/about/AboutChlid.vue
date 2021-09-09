<template>
  <div>
    <h2>这个是AboutChlid组件</h2>
    <slot :website="website">
      {{website.subTitle}}
    </slot>
    <ul>
      <li>
        名字：{{this.username}}
      </li>
      <li>
        年龄：{{this.age}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      website: {
        url: 'http://wangEditor.com/',
        title: 'wangEditor',
        subTitle: '轻量级富文本编辑器'
      }
    }
  },
  mounted() {
    console.log('this.$props', this.$props)
  },
  props: ['username', 'age']
}
</script>

<style scoped lang ="scss">

</style>
