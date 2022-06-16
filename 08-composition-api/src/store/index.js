import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Collecting the stones of infinity', completed: false },
      { id: 2, text: 'Soul stone', completed: true },
      { id: 3, text: 'Stone of power', completed: true },
      { id: 4, text: 'Reality stone', completed: false },
      { id: 5, text: 'Get new minions', completed: false },
    ],
  },

  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todo) => !todo.completed);
    },

    allTodos: (state, getters, rootState) => {
      // console.log({ state, getters, rootState });
      return [...state.todos];
    },

    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => todo.completed);
    },

    getTodoByTab: (_, getters) => (currentTab) => {
      switch (currentTab) {
        case 'all':
          return getters.allTodos;
        case 'pending':
          return getters.pendingTodos;
        case 'completed':
          return getters.completedTodos;
      }
    },
  },

  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
  },

  actions: {},

  modules: {},
});
