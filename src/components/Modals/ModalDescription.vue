<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="description"
      label="Enter description"
      @input="$emit('update:description', $event)"
      color="secondary"
      class="col"
      :rules="[val => !!val || 'Field is required']"
    >
      <template v-slot:append>
        <q-icon
          v-if="description"
          name="close"
          @click="$emit('update:description', '')"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["description"]
};
</script>

<style></style>
