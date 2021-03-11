import Vue from "vue";
import { uid } from "quasar";
//import { forEach } from "core-js/core/array";
const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      description: "buy groceries",
      dueDate: "2019/05/12",
      dueTime: "18:30",
      completed: false
    },
    ID2: {
      name: "Get bananas",
      description: "Eat healthy",
      dueDate: "2019/04/12",
      dueTime: "13:30",
      completed: false
    },
    ID3: {
      name: "Get chicken",
      description: "Chicken is great for the heart",
      dueDate: "2019/03/12",
      dueTime: "12:30",
      completed: false
    }
  }
  /*
  tasks: [
    {
      id: 1,
      name: "Go to shop",
      description: "buy groceries",
      dueDate: "2019/05/12",
      dueTime: "18:30",
      completed: false
    },
    {
      id: 2,
      name: "Get bananas",
      description: "Eat healthy",
      dueDate: "2019/04/12",
      dueTime: "13:30",
      completed: false
    },
    {
      id: 3,
      name: "Get chicken",
      description: "Chicken is great for the heart",
      dueDate: "2019/03/12",
      dueTime: "12:30",
      completed: false
    }
  ]*/
};
const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    //console.log("deleted", id);
    Vue.delete(state.tasks, id); //makes delete reactive
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task); //makes setting a task reactive (visualize on web)
  }
};
const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    commit("addTask", payload);
  }
};
const getters = {
  tasksTodo: state => {
    let tasks = {};

    //console.log(Object.keys(state.tasks));
    Object.keys(state.tasks).forEach(key => {
      const task = state.tasks[key];
      //console.log("task: ", task);
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    console.log(tasks);
    return tasks;
  },
  tasksCompleted: state => {
    let tasks = {};

    //console.log(Object.keys(state.tasks));
    Object.keys(state.tasks).forEach(key => {
      const task = state.tasks[key];
      //console.log("task: ", task);
      if (task.completed) {
        tasks[key] = task;
      }
    });
    console.log(tasks);
    return tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
