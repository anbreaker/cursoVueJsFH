<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <h1>Hello world</h1>
    </li> -->

    <slot v-for="user in users" :user="user" :key="user.id"></slot>
  </ul>
</template>

<script>
  export default {
    props: {
      users: {
        type: Array,
        required: true,
      },
    },

    setup() {
      return {};
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>
