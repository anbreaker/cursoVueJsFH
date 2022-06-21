<template>
  <h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
  <router-view v-else></router-view>
</template>

<script>
  import { useAuth } from './modules/auth/composables/useAuth';

  export default {
    setup() {
      const { authStatus, checkAuthentication } = useAuth();

      checkAuthentication();

      return { authStatus };
    },
  };
</script>

<style scoped>
  html,
  body {
    background-color: #2a226b;
  }
  #app {
    color: aliceblue;
  }
</style>
