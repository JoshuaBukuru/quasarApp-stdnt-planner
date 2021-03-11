<template>
  <q-card style="width: 600px; max-width: 80vw;">
    <ModalHeaderTask> Add Task </ModalHeaderTask>
    <form @submit.prevent="formSubmit">
      <q-card-section class="q-pt-none">
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <ModalDescription :description.sync="taskToSubmit.description" />
        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" />
        <ModalDueTime
          :dueDate.sync="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Save" color="secondary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalHeaderTask from "./ModalHeaderTask";
import ModalTaskName from "./ModalTaskName";
import ModalDueDate from "./ModalDueDate";
import ModalDescription from "./ModalDescription";
import ModalDueTime from "./ModalDueTime";
export default {
  components: {
    ModalHeaderTask,
    ModalTaskName,
    ModalDueDate,
    ModalDescription,
    ModalDueTime
  },
  data() {
    return {
      taskToSubmit: {
        name: "",
        description: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    formSubmit() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close"); //creates an event called close
    }
  }
};
</script>

<style></style>
