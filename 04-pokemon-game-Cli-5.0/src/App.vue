<template>
  <div>
    <PokemonPage />
  </div>
</template>

<script>
import PokemonPage from "@/pages/PokemonPage"

export default {
  name: "App",
  components: {
    PokemonPage,
  },
}
</script>

<style>
body {
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin-top: 60px;
}
</style>
