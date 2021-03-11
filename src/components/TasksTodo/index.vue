<template>
  <q-list
    v-if="Object.keys(tasksTodo).length"
    bordered
    class="rounded-borders"
    padding
  >
    <q-item-label header
      ><div class="comp"><h5>Tasks todo</h5></div></q-item-label
    >
    <hr />
    <Task v-for="(task, key) in tasksTodo" :key="key" :id="key" :task="task" />
  </q-list>
</template>

<script>
import Task from "../Task";
export default {
  props: ["tasksTodo"],
  components: {
    Task
  }
};
</script>

<style></style>
