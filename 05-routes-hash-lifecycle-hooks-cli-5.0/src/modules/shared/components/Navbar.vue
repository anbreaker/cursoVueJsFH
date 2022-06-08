<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 81 } }">
      Pokemon by ID
    </router-link>
    <router-link :to="{ name: 'about' }">Pokemon About</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  export default {
    data() {
      return {
        links: [
          { to: 'pokemon-home', name: 'Pokemons' },
          { to: 'pokemon-id', name: 'Pokemons By Id', id: 4 },
          { to: 'pokemon-about', name: 'About' },

          { to: 'dbz-characters', name: 'Characters' },
          { to: 'dbz-about', name: 'DBZ-About' },

          { to: 'https://google.com', name: 'Google' },
        ],
      };
    },
    components: {
      CustomLink: defineAsyncComponent(() =>
        import(/* webpackChunkName: "CustomLink" */ './CustomLink')
      ),
    },
  };
</script>

<style scoped>
  div {
    padding: 0 30px;
    margin-bottom: 2rem;
  }

  div a {
    font-weight: bold;
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
  }

  /* div .router-link-exact-active {
    color: #42b983;
  } */
</style>
