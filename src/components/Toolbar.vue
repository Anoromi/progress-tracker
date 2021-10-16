<template>
  <div>
    <span class="add-item" @click="addItem()">+ Add item</span>
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class Props {
  addItem: () => void = prop({ required: true });
}

@Options({})
export default class Toolbar extends Vue.with(Props) {}
</script>

<style>
.add-item {
  float: right;
  margin-right: 10px;
  color: #2bbcaf;
  font-size: 20pt;
  cursor:pointer;
}
.add-item:hover {
  background: #ffffff0d;
}


</style>