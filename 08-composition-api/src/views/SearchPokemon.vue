<template>
  <h1>Search Pokemon: {{ pokemonId }}</h1>

  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Pokemon Number"
      v-model="pokemonId"
      ref="textSearchId"
    />
  </form>
  <br />
  <span>Press enter to search</span>
</template>

<script>
  import { ref, onActivated } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      const router = useRouter();

      const pokemonId = ref(1);
      const textSearchId = ref();

      // References on Composition API
      onActivated(() => {
        textSearchId.value.select(); // .focus()
      });

      return {
        pokemonId,
        textSearchId,

        onSubmit: () => {
          router.push({ name: 'pokemon-id', params: { id: pokemonId.value } });
        },
      };
    },
  };
</script>

<style lang="scss" scoped></style>
