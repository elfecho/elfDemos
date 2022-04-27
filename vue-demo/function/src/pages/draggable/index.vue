<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable :list="list1" group="people" @change="log">
        <transition-group class="list-group">
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </transition-group>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable :list="list2" group="people" @change="log">
        <transition-group class="list-group2">
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </transition-group>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
    };
  },
  methods: {
    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned",
      };
    },
    log: function (evt) {
      window.console.log(evt);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.col-3 {
  margin-right: 100px;
}
.list-group-item {
  cursor: move;
}
.list-group {
  display: flex;
  width: 700px;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-top: -20px;
  .list-group-item {
    width: calc(30% - 20px);
    height: 200px;
    border: 1px solid #09f;
    margin-left: 20px;
    margin-top: 20px;
    background: #fff;
  }
}
.list-group2 {
  height: 700px;
  padding: 0 30px;
  display: block;
  border: 1px solid #000;
  .list-group-item {
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    margin-top: 5px;
    background: gray;
  }
}
</style>