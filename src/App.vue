<template>
  <Toolbar class="toolbar" :addItem="openAddItem" />
  <div id="content">
    <div v-if="tasks" class="list-container">
      <div>
        <TaskList
          :tasks="tasks.toDo"
          :moveRight="(index) => move(index, tasks?.toDo, tasks?.inProgress)"
        />
      </div>
      <div>
        <TaskList
          :tasks="tasks.inProgress"
          :moveLeft="(index) => move(index, tasks?.inProgress, tasks?.toDo)"
          :moveRight="(index) => move(index, tasks?.inProgress, tasks?.done)"
        />
      </div>
      <div>
        <TaskList
          :tasks="tasks.done"
          :moveLeft="(index) => move(index, tasks?.done, tasks?.inProgress)"
        />
      </div>
    </div>
  </div>
  <OptionDialog v-if="dialogVisible" :close="parceAddItem" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TaskList from "./components/TasksList.vue";
import Toolbar from "./components/Toolbar.vue";
import * as Data from "./data";
import OptionDialog from "./components/OptionDialog.vue";

@Options({
  components: {
    TaskList,
    Toolbar,
    OptionDialog,
  },
})
export default class App extends Vue {
  tasks: Data.Tasks | null = null;
  dialogVisible = false;

  beforeCreate(): void {
    Data.fetchData().then((t) => (this.tasks = t));
    console.log("Setup ");
  }

  mounted(): void {
    Data.fetchData().then((t) => {
      this.tasks = t;
      console.log("Data loaded");
      console.log(t);
    });
    console.log("Mount ");

    window.onbeforeunload = () => {
      if (this.tasks) Data.saveData(this.tasks);
    };
  }

  openAddItem(): void {
    this.dialogVisible = true;
  }

  async parceAddItem(task?: Data.Task): Promise<void> {
    if (task && this.tasks) {
      this.tasks.toDo.push(task);
    }
    this.dialogVisible = false;
    console.log("Tasks ", this.tasks);
    console.log("Added ", task);
  }
  move(index: number, from?: Data.Task[], to?: Data.Task[]): void {
    if (from == undefined || to == undefined) {
      // Impossible. Done so that vetur won't complain about undefined tasks
      throw new Error("From or to arrays were undefined");
    }
    to.push(from.splice(index, 1)[0]);
    console.log(this.tasks);
  }
}
</script>

<style lang="scss">

$toolbarsize: 30pt;
.list-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: table;
  table-layout: fixed;
  min-width: 1000px;
  min-height: 300px;
}

.list-container > * {
  display: table-cell;
}

.toolbar {
  height: $toolbarsize;
  width: 100%;
  background: #053030;
  position: fixed;
  top: 0;
  left: 0;
}

#content {
  padding-top: $toolbarsize;
  flex: auto;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
}

body {
  height: 100%;
  background: #062d2d;
}

html {
  height: 100%;
}
</style>