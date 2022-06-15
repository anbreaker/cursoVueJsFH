<template>
  <h1>Pokemon View</h1>
  <h1 v-if="!pokemon && !errorMessage">Searching Pokemon...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'search-pokemon' }">
      <button>Back</button>
    </router-link>
  </template>
</template>

<script>
  import { watch } from 'vue';
  import { useRoute, onBeforeRouteLeave } from 'vue-router';

  import { usePokemon } from '../composables/usePokemon';

  export default {
    setup() {
      const route = useRoute();

      const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(
        route.params.id
      );

      watch(
        () => route.params.id,
        () => searchPokemon(route.params.id)
      );

      onBeforeRouteLeave(() => {
        const answer = window.confirm('Are you sure you want to leave?');

        if (!answer) return false;
      });

      return { errorMessage, isLoading, pokemon };
    },
  };
</script>

<style scoped></style>
