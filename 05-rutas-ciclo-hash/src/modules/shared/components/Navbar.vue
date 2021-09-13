<template>
  <div>
    <!-- <router-link :to="{ name: 'listPage' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">
      Pokemon por id
    </router-link>
    <router-link :to="{ name: 'aboutPage' }">About</router-link> -->
    <div class="inline">
      <CustomLink v-for="link in links" :key="link.to" :link="link" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "pokemons" },
        { to: "pokemon-id", name: "Id", id: 151 },
        { to: "pokemon-about", name: "About" },

        { to: "dbz-characters", name: "dbz-characters" },
        { to: "dbz-about", name: "dbz-about" },

        { to: "https://google.com", name: "Google" }
      ]
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import(/* webpackChunkName: "CustomLink" */ "./CustomLink.vue")
    )
  }
};
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

.inline {
  display: flex;
  justify-content: center;
}
</style>