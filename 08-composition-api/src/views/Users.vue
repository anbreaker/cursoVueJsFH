<template>
  <h2 v-if="isLoading">Waiting please...</h2>

  <h2 v-else>Users</h2>

  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ firts_name, last_name, email, id } in users" :key="id">
        <h4>{{ firts_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="previousPage">Back</button>
  <button @click="nextPage">Next</button>
  <span>Page: {{ currentPage }}</span>
</template>

<script>
  import { useUsers } from '../composables/useUsers';

  export default {
    setup() {
      const { currentPage, errorMessage, isLoading, nextPage, previousPage, users } =
        useUsers();

      return {
        currentPage,
        errorMessage,
        isLoading,
        nextPage,
        previousPage,
        users,
      };
    },
  };
</script>

<style scoped>
  h2 {
    text-align: center;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  ul {
    width: 250px;
    list-style: none;
  }

  span {
    display: block;
  }
</style>
