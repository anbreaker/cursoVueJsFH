import axios from 'axios';
import { ref } from 'vue';

export const usePokemon = (pokemonId = '1') => {
  const pokemon = ref();
  const isLoading = ref(true);
  const errorMessage = ref();

  const searchPokemon = async (id) => {
    try {
      if (!id) return;

      isLoading.value = true;
      errorMessage.value = null;

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      pokemon.value = data;
      errorMessage.value = null;
    } catch (error) {
      console.log(error);
      errorMessage.value = 'Loading error...';
    }

    isLoading.value = false;
  };

  searchPokemon(pokemonId);

  return {
    errorMessage,
    isLoading,
    pokemon,
    searchPokemon,
  };
};
