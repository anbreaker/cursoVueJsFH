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

  <button @click="openOrCloseModal">Create TODO</button>

  <Modal v-if="isModalOpen" @on:close="openOrCloseModal">
    <template v-slot:header>
      <h1>New Task</h1>
    </template>

    <template v-slot:body>
      <form
        type="text"
        @submit.prevent="
          createTodo(newTodoText);
          isModalOpen = false;
        "
      >
        <input type="text" placeholder="New Task" v-model="newTodoText" />
        <br />
        <br />
        <!-- TODO Clean Input!! -->
        <button type="submit">Create Task</button>
      </form>

      <span class="close-modal" @click="openOrCloseModal">X</span>
    </template>
  </Modal>
</template>

<script>
  import { ref } from 'vue';

  import { useTodos } from '@/composables/useTodos.js';
  import Modal from '@/components/Modal.vue';
  import { useModal } from '@/composables/useModal';

  export default {
    components: { Modal },

    setup() {
      const {
        all,
        completed,
        currentTab,
        createTodo,
        getTodoByTab,
        pending,
        toggleTodo,
      } = useTodos();

      const { isModalOpen, openOrCloseModal } = useModal();

      return {
        isModalOpen,
        openOrCloseModal,

        all,
        completed,
        createTodo,
        currentTab,
        getTodoByTab,
        pending,
        toggleTodo,
        createTodo,

        newTodoText: ref(''),
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

  .close-modal {
    color: crimson;
    cursor: pointer;
    display: block;
    position: relative;
    right: -157px;
    top: -135px;
  }

  .close-modal:hover {
    transform: scale(1.2);
  }

  .completed {
    text-decoration: line-through;
  }
</style>
