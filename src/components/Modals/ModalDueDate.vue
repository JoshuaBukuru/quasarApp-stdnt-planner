<template>
  <div class="row q-mb-sm">
    <q-input
      filled
      :value="dueDate"
      mask="date"
      label="Enter date"
      @input="$emit('update:dueDate', $event)"
      color="secondary"
      :rules="['date']"
      class="col"
      outlined
    >
      <template v-slot:append>
        <q-icon
          v-if="dueDate"
          name="close"
          @click="$emit('update:dueDate', '')"
          class="cursor-pointer"
        />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date :value="dueDate" @input="$emit('update:dueDate', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="secondary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueDate"]
};
</script>

<style></style>
