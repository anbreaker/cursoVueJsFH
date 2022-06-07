import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from '@/helpers/getPokemonOptions'

import { pokemonArr } from '../mocks/pokemons.mock'

describe('getPokemonOptions', () => {
  test('should return an array of number', () => {
    const pokemon = getPokemons()

    expect(pokemon.length).toBe(650)
    expect(pokemon[0]).toBe(1)
    expect(pokemon[500]).toBe(501)
  })

  test('Should return an array of 4 pokemon with its name', async () => {
    const pokemons = await getPokemonsNames([1, 2, 3, 4])

    expect(pokemons).toStrictEqual(pokemonArr)
  })

  test('Should return an array mixed with numbers', async () => {
    const pokemons = await getPokemonOptions()

    expect(pokemons.length).toBe(4)

    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ])
  })
})
