<template>
  <div v-for="(task, index) in tasks" :key="task">
    <TaskItem
      :task="task"
      :moveRight="
        this.moveRight
          ? () => {
              if (this.moveRight) this.moveRight(index);
            }
          : undefined
      "
      :moveLeft="
        this.moveLeft
          ? () => {
              if (this.moveLeft) this.moveLeft(index);
            }
          : undefined
      "
      :remove="() => remove(index)"
      class="task-item"
    />
  </div>
</template>

<script lang='ts'>
import { Options, prop, Vue } from "vue-class-component";
import { Task } from "../data";
import TaskItem from "./TaskItem.vue";

class Props {
  tasks: Task[] = prop({ required: true });
  moveLeft?: (index: number) => void = prop({ required: false });
  moveRight?: (index: number) => void = prop({ required: false });
}

@Options({
  components: {
    TaskItem,
  },
})
export default class TaskList extends Vue.with(Props) {
  remove(index: number): void {
    console.log("Deleted", this.tasks[index]);
    this.tasks.splice(index, 1);
  }
}
</script>

<style lang="scss">
.task-item {
  margin: 20px 20px;
}
</style>