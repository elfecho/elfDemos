<template>
  <div>
    <virtalList :size="40" :remain="8" :items="items" :varlable="true">
      <!-- 获得scope的数据 -->
      <itemL slot-scope="{ item }" :item="item"></itemL>
    </virtalList>
  </div>
</template>

<script>
import Mock from "mockjs";
// import virtalList from '@/components/virtalList'
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    let items = [];
    for (var i = 0; i < 500; i++) {
      //使用mock.js进行生成数据
      items.push({ id: i, value: Mock.Random.sentence(5, 50) });
    }
    console.log(items)
  },
};
</script>

<style scoped lang="scss"></style>
