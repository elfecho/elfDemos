<template>
  <div>
    <virtalList :size="20" :remain="60" :items="items" :varlable="true">
      <!-- 获得scope的数据 -->
      <itemL slot-scope="{ item }" :item="item"></itemL>
    </virtalList>
  </div>
</template>

<script>
import Mock from "mockjs";
import virtalList from '@/components/virtalListDemo'
import itemL from './itemL'
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    virtalList,
    itemL
  },
  created() {
    let items = [];
    for (var i = 0; i < 50000; i++) {
      //使用mock.js进行生成数据
      items.push({ id: i, value: i + Mock.Random.sentence(2) });
    }
    this.items = items
    console.log(items)
  },
};
</script>

<style scoped lang="scss"></style>
