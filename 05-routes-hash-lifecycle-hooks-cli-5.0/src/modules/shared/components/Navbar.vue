<template>
  <div>
    <router-link to="/">Pokemon List</router-link>
    <router-link to="/id">Pokemon by ID</router-link>
    <router-link to="/about">Pokemon About</router-link>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  div {
    padding: 0 30px;
  }

  div a {
    font-weight: bold;
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
  }

  div .router-link-exact-active {
    color: #42b983;
  }
</style>
