<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link :to="{ name: 'counter' }">Counter</router-link>
  </nav>
  <router-view />
</template>

<style>
  body {
    background-color: #2c3e50;
    color: aliceblue;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-size: 1.2rem;
    font-weight: bold;
    color: aliceblue;
    text-decoration: none;
    font-weight: bold;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
