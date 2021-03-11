<template>
  <q-page class="q-pa-md body–dark">
    <NoTasks
      :alert="alert"
      v-if="!Object.keys(tasksTodo).length"
      @open="alert = true"
    />
    <TasksTodo :tasksTodo="tasksTodo" />
    <hr />
    <TasksCompleted :tasksCompleted="tasksCompleted" />
    <hr />
    <div class="fixed-bottom text-center q-my-xl">
      <q-btn
        @click="alert = true"
        size="24px"
        round
        color="negative "
        icon="add"
      >
      </q-btn>
    </div>

    <q-dialog rounded v-model="alert">
      <AddTask @close="alert = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import AddTask from "../components/Modals/AddTask";
import TasksTodo from "../components/TasksTodo";
import TasksCompleted from "../components/TasksCompleted";
import NoTasks from "../components/NoTasks";
import { mapGetters } from "vuex";
export default {
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]) //first parameter accepts the module followed by the getter function
  },
  data() {
    return {
      alert: false
    };
  }
};
</script>

<style scoped>
.q-my-xl {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
