<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :clickable="clicked"
    v-ripple
    :class="task.completed && 'bg-secondary'"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="task.completed && 'text-strikethrough'">
        {{ task.name }}
      </q-item-label>
      <q-item-label caption>
        {{ task.description }}
      </q-item-label>
      <q-separator spaced />
    </q-item-section>
    <q-item-section v-if="task.dueDate" side top>
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" name="event" size="18px"></q-icon>
        </div>

        <div class="column">
          <div class="row justify-end">{{ task.dueDate }}</div>

          <small class="row justify-end">{{ task.dueTime }}</small>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          round
          dense
          color="primary"
          @click.stop="showEditTask = true"
          icon="edit"
        >
        </q-btn>
        <q-btn
          @click.stop="promptToDelete"
          round
          dense
          color="red"
          icon="delete"
        >
        </q-btn>
      </div>

      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="primary" text-color="white" />
            <span class="q-ml-sm">Are you sure you want to delete this?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Yes"
              color="primary"
              v-close-popup
              @click="deleteTask(id)"
            />
            <q-btn flat label="No" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-item-section>
    <q-dialog rounded v-model="showEditTask">
      <EditTask @close="showEditTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
import EditTask from "../Modals/EditTask";
export default {
  props: ["task", "id"],
  components: {
    EditTask
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.confirm = true;
    }
  },
  data() {
    return {
      clicked: true,
      confirm: false,
      showEditTask: false
    };
  }
};
</script>

<style></style>
