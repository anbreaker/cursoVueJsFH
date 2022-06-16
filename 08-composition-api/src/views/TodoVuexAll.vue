<template>
  <h1>Thanos' to-do list</h1>

  <h4>Pending Todos: {{ pending.length }}</h4>
  <hr />
  <h4>Todos: {{ all.length }}</h4>
  <h4>Completed Tasks: {{ completed.length }}</h4>

  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Todos
  </button>
  <button @click="currentTab = 'pending'" :class="{ active: currentTab === 'pending' }">
    Pending
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completed
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodoByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {
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
      };
    },
  };
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
  }

  ul {
    width: 300px;
    text-align: left;
  }

  li {
    font-size: 1.2rem;
    cursor: pointer;
  }

  button {
    background-color: #64b687;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #42815e;
    transition: 0.3s ease-in-out;
  }

  .active {
    background-color: #326146;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
