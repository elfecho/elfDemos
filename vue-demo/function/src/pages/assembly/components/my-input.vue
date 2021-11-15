<template>
  <div>
    <el-input
      ref="myInput"
      v-model="innerVal"
      v-bind="$attrs"
      @input="$emit('input', $event)"
      v-on="$listeners"
    >
      <!-- 具名插槽 -->
      <!-- <template v-for="(_, slotName) in $slots" #[slotName]>
        <slot :name="slotName"></slot>
      </template> -->
      <!-- 作用域插槽 -->
      <slot v-for="(_, slotName) in $slots" :name="slotName" :slot="slotName"></slot>
      <template v-for="(_, slotName) in $scopedSlots" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="slotProps"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerVal: this.value,
    };
  },
  inheritAttrs: false,
  created() {
    console.log(this.$slots)
  },
  props: {
    customType: {
      dafault: 'a',
      validator: prop => ['a', 'b', 'c'].includes(prop)
    }
  },
  watch: {
    value() {
      if (this.value !== this.innerVal) {
        this.innerVal = this.value;
      }
    },
  },
  methods: {
    focus() {
      this.$refs.myInput.focus()
    }
  },
};
</script>

<style scoped lang="scss"></style>
