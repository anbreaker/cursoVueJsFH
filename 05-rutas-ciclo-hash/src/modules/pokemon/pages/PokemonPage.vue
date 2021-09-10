<template>
  <div>
    <h1>
      Pokemon Page with id <span>#{{ id }}</span>
    </h1>

    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" alt="pokemon.name" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // id: this.$route.params.id,
      pokemon: null
    };
  },

  created() {
    // const { id } = this.$route.params;
    // this.id = id;
    // console.log(this.id);
    // console.log(this.$attrs);
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        this.pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then(response => response.json());

        // console.log(this.pokemon);
      } catch (error) {
        console.log(error);
        this.$router.push("/");
        console.log("Id not correct!");
      }
    }
  },
  watch: {
    id() {
      console.log("entra el wtch");
      console.log(this.id);
      this.getPokemon();
    }
  }
};
</script>