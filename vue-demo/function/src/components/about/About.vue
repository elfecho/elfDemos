<template>
  <div>
    <h2>这个是About组件</h2>
    <ul>
      <li>
        名字：{{this.username}}
      </li>
      <li>
        年龄：{{this.age}}
      </li>
    </ul>
    <!-- 将组建所有的props传递给子组件 -->
    <AboutChlid v-bind="$props">
      <template v-slot="slotProps">
        <!-- slotProps 名字可自定义 -->
        {{slotProps.website.title}}
      </template>
    </AboutChlid>

  </div>
</template>

<script>
import AboutChlid from './AboutChlid'
export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log('this.$props about', this.$props)
  },
  components: {
    AboutChlid
  },
  props: ['username', 'age']
}
</script>

<style scoped lang ="scss">

</style>
