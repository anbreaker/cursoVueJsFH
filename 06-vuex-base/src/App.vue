<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

const lazyCounter = () =>
  import(/* webpackChunkName: "Counter" */ "@/components/Counter");

export default {
  name: "App",

  components: { Counter: defineAsyncComponent(lazyCounter) }
};
</script>

<style>
body {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
}
</style>
