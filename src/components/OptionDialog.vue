<template>
  <div id="dialog-container">
    <div id="dialog-box">
      <div id="close-icon" @click="close(undefined)">
        <CloseIcon :title="'Close'" />
      </div>
      <div id="new-item-div">
        <h1>New Item</h1>
      </div>
      <div style="flex: auto; display: flex; flex-direction: column">
        <label for="title">Title</label>
        <input
          name="title"
          type="text"
          maxlength="50"
          v-model="title"
          style="padding: 0px 10px"
        />
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          type="text"
          maxlength="300"
          v-model="description"
        />
      </div>
      <div id="option-buttons">
        <span id="cancel-button" @click="close()">Cancel</span>
        <span id="save-button" @click="close({title, description})">Save</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";
import CloseIcon from "../assets/close.vue";
import { Task } from "../data";

class Props {
  close: (result?: Task) => void = prop({ required: true });
}

@Options({
  components: { CloseIcon },
})
export default class OptionDialog extends Vue.with(Props) {
  title = "";
  description = "";
}
</script>

<style>
#dialog-container {
  position:fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(0 0 0 / 28%);
  overflow:auto;
}
#dialog-box {
  color: #fff;
  margin: 30px auto;
  width: 60%;
  height: 60%;
  min-width: 500px;
  min-height: 700px;
  border: #298280 solid 0.4vh;
  border-radius: 2vh;
  padding: 10px 15px;
  background: #0f4342;
  display: flex;
  flex-direction: column;
}

#new-item-div {
  font-size: 1.8em;
  border-bottom: #0db180 solid 3px;
  margin-bottom: 20px;
}

#close-icon {
  border-radius: 100%;
  width: fit-content;
  height: fit-content;
  padding: 10px 10px 10px 10px;
  align-self: flex-end;
}

#close-icon:hover {
  background: #ffffff15;
}

input,
textarea {
  background: rgb(0, 0, 0);
}

label {
  font-size: 1.5em;
}

#description {
  flex: auto;
  resize: none;
  margin-bottom: 10px;
  padding: 10px 10px;
}

#option-buttons {
  align-self: flex-end;
}

#option-buttons > * {
  margin-left: 10px;
  margin-right: 10px;
  padding: 2px 4px;
}
#save-button {
  background: rgb(13, 138, 90);
  cursor: pointer;
}

#cancel-button {
  background: rgb(163, 63, 63);
  cursor: pointer;
}

</style>