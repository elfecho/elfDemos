<template>
  <div class="container">
    <button @click="switchLanguage">切换中英文</button>

    <!-- <h4>{{ $t("nav.home") }}</h4> -->
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <span v-text="$t(`nav.${item}`)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["home", "monitor", "analyze", "alarm", "maintenance"],
    };
  },
  beforeMount() {
    this.switchLanguage();
  },

  created() {
    console.log(this.$i18n.t("hello"));
  },

  methods: {
    switchLanguage() {
      this.$i18n.locale =
        this.$i18n.locale == "zh"
          ? (this.$i18n.locale = "en")
          : (this.$i18n.locale = "zh");
    },
  },
};
</script>
<style scoped>
  .container {
    margin-top: 30px;
  }
</style>
