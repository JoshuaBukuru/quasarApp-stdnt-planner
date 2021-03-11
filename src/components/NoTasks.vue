<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="warning" color="primary" />
    </template>
    <h5>No tasks to do today!</h5>
    <br />
    Click the add task button below to add a task

    <template v-slot:action>
      <q-btn flat color="primary" label="Add task" @click="$emit('open')" />
    </template>
  </q-banner>
</template>

<script>
export default {
  props: ["alert"]
};
</script>

<style></style>
