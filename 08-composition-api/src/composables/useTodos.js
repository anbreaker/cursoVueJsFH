import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export const useTodos = () => {
  const store = useStore();

  const currentTab = ref('all');

  return {
    currentTab,

    // Methods
    pending: computed(() => store.getters['pendingTodos']),
    all: computed(() => store.getters['allTodos']),
    completed: computed(() => store.getters['completedTodos']),
    getTodoByTab: computed(() => store.getters['getTodoByTab'](currentTab.value)),

    toggleTodo: (id) => store.commit('toggleTodo', id),
    createTodo: (text) => store.commit('createTodo', text),
  };
};
