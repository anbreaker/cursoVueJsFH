<template>
  <div>
    <div v-if="!pokemon">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <h1>Who is this Pokemon?</h1>

      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArr" @selectionPokemon="checkAnswer" />

      <div class="center" v-if="showAnswer">
        <h2>{{ message }}</h2>
        <button @click="newGame">New Game</button>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)

      this.pokemon = this.pokemonArr[rndInt]
    },

    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      if (selectedId === this.pokemon.id)
        this.message = `Correct!, is ${this.pokemon.name}`
      else
        this.message = `Opps!, the correct pokemon is ${this.pokemon.name.replace(
          /^\w/,
          (c) => c.toUpperCase()
        )}`
    },

    newGame() {
      this.pokemonArr = []
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.mixPokemonArray()
    },
  },

  mounted() {
    this.mixPokemonArray()
  },
  beforeUnmount() {
    this.newGame()
  },
}
</script>

<style scoped>
h1,
h2 {
  display: flex;
  justify-content: center;
  color: aliceblue;
}
button {
  display: block;
  margin: 0 auto;
}
</style>
