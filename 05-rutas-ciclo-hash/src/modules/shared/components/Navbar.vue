<template>
  <div>
    <router-link to="/">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
      >Pokemon por id</router-link
    >
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: aliceblue;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 1rem;
}

a.router-link-exact-active {
  color: #42b893;
}
</style>