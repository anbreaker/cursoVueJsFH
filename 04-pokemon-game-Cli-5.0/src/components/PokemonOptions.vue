<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selectionPokemon', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  /* Pokemon Options */
  ul {
    list-style-type: none;
  }
  li {
    background-color: cadetblue;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: aliceblue;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 3px;
    text-align: center;
    width: 250px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .options-container {
    display: flex;
    justify-content: center;
  }
</style>
