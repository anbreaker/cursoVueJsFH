import pokemonApi from '@/api/pokemonApi';
import axios from 'axios';

describe('pokemonApi', () => {
  test('should be defined baseUrl Axios', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });
});
