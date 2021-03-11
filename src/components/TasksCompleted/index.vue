<template>
  <q-list
    v-if="Object.keys(tasksCompleted).length"
    bordered
    class="rounded-borders"
    padding
  >
    <q-item-label header
      ><div class="comp"><h5>Tasks completed</h5></div></q-item-label
    >
    <hr />
    <Task
      v-for="(task, key) in tasksCompleted"
      :key="key"
      :id="key"
      :task="task"
    />
  </q-list>
</template>

<script>
import Task from "../Task";
export default {
  props: ["tasksCompleted"],
  components: {
    Task
  }
};
</script>

<style lang="scss">
.comp {
  background-color: $primary;
  padding: 20px;
  margin: 2px;
  color: white;
  border-radius: 5px;
}
</style>
