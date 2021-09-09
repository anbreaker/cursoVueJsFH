<template>
  <div>
    <h1>Who is this Pokemon?</h1>

    <PokemonPicture :pokemonId="1" :showPokemon="true" />
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions
  }
};
</script>

<style lang="scss" scoped>
</style>