<template>
  <div class="task">
    <div class="item-toolbar">
      <div
        class="toolbar-icon"
        v-if="moveLeft"
        @click="if (moveLeft) moveLeft();"
      >
        <img
          src="../assets/arrowLeft.svg"
          alt="Move to next"
          title="Move to next"
        />
      </div>
      <div class="toolbar-icon" @click="remove()">
        <CloseIcon :desiredWidth="'20px'" :desiredHeight="'20px'" />
      </div>
      <div
        class="toolbar-icon"
        v-if="moveRight"
        @click="if (moveRight) moveRight();"
      >
        <img
          src="../assets/arrowRight.svg"
          alt="Move to previous"
          title="Move to previous"
        />
      </div>
    </div>
    <span class="task-text" style="font-size: 25pt">{{ task.title }}</span>
    <span class="task-text" style="font-size: 16pt">{{
      task.description
    }}</span>
  </div>
</template>

<script lang="ts">
import { Task } from "@/data";
import { Options, Vue, prop } from "vue-class-component";
import CloseIcon from "../assets/close.vue";

class Props {
  task: Task = prop({ required: true });
  moveLeft?: () => void = prop({ required: false });
  moveRight?: () => void = prop({ required: false });
  remove: () => void = prop({ required: true });
}

@Options({ components: { CloseIcon } })
export default class TaskItem extends Vue.with(Props) {}
</script>

<style lang="scss" scope>
$kote: 0.3vmax;
.task {
  background: #07484b;
  border: 0.2em solid #07484b;
  border-radius: 2em;
  text-align: start;
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.task:hover {
  background: #5c5c5c34;
}

$horizontal-margins: 0.5em;
$vertical-margins: 0px;
.task-text {
  margin-right: 25px;
  margin-left: 25px;
  padding-top: 2px;
  padding-bottom: 2px;
  float: left;
  color: #25aa88;
  word-break: break-all;
}

.toolbar-icon {
  border-radius: 100%;
  width: fit-content;
  height: fit-content;
  padding: 5px 5px 5px 5px;
  margin: auto 0;
}



.toolbar-icon:hover {
  background: rgba(255, 255, 255, 0.116);
}

.item-toolbar {
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-top: 0.1em;
  align-self: flex-end;
  display: flex;
}
</style>