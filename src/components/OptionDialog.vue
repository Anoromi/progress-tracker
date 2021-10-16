<template>
  <div id="dialog-container">
    <div id="dialog-box">
      <div id="new-item-div">
        <div id="close-icon" @click="close(undefined)">
          <CloseIcon :title="'Close'" />
        </div>
        <h1>New Item</h1>
      </div>
      <div style="flex: auto; display: flex; flex-direction: column">
        <div>
        <label for="title">Title </label>
        <f1 id="title-error"> {{ titleAdditionalMessage }}</f1>
        </div>
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
          maxlength="500"
          v-model="description"
        />
      </div>
      <div id="option-buttons">
        <span id="cancel-button" @click="close()">Cancel</span>
        <span id="save-button" @click="checkAndClose()">Save</span>
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
  titleAdditionalMessage = "";

  checkAndClose(): void {
    if (this.title == "") this.titleAdditionalMessage = "nessesary field";
    else {
      this.close({ title: this.title, description: this.description });
    }
  }
}
</script>

<style>
#dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(0 0 0 / 28%);
  overflow: auto;
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
  float: right;
}

#close-icon:hover {
  background: #ffffff15;
}

#title-error {
  color: rgb(189, 20, 20);
  font-size: 1.5em;
  margin-left: 10px;
}

input,
textarea {
  background: rgb(19, 30, 48);
  color: white;
  border: rgb(34, 144, 148) solid 0.5px;
  font-size: 25pt;
}

label {
  font-size: 1.5em;
}

#description {
  flex: auto;
  resize: none;
  margin-bottom: 10px;
  padding: 13px 20px;
  border-radius: 50px;
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
  font-size: 20pt;
}

#cancel-button {
  background: rgb(163, 63, 63);
  cursor: pointer;
  font-size: 20pt;
}
</style>