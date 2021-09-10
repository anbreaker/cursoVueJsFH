<template>
  <div>
    <Navbar />
    <img src="./assets/logo.png" alt="" />
    <router-view />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Navbar" */ "@/modules/shared/components/Navbar"
      )
    )
  }
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