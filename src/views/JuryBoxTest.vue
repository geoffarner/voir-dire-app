<template>
  <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
    <p>Jury Pool Test</p>
    <div
      v-for="item in getList(1)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
    <p>Jury Box</p>
    <div
      v-for="item in getList(2)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div class="drop-zone" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
    <p>Jury Alternate</p>
    <div
      v-for="item in getList(3)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import axios from "axios";

export default {
  setup() {
    const items = ref([
      { id: 0, title: "Juror A", list: 1 },
      { id: 1, title: "Juror B", list: 1 },
      { id: 2, title: "Juror C", list: 1 },
    ]);

    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
    };

    return {
      getList,
      startDrag,
      onDrop,
    };
  },
};
</script>
<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #105e09;
  padding: 50px;
  min-height: 20px;
}

.drag-el {
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 5px;
  margin-bottom: 20px;
}
.drag-el:nth-last-of-type(1) {
  margin-bottom: 5;
}
</style>
