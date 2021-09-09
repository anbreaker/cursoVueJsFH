import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))

  return pokemonsArr.map((_item, index) => index + 1)
}

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)

  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))

  return pokemons
}

const getPokemonsNames = async ([pokemon1, pokemon2, pokemon3, pokemon4] = []) => {
  // const response = await pokemonApi.get(`/1`)
  // console.log(response)

  const promiseArr = [
    pokemonApi.get(`/${pokemon1}`),
    pokemonApi.get(`/${pokemon2}`),
    pokemonApi.get(`/${pokemon3}`),
    pokemonApi.get(`/${pokemon4}`),
  ]

  const [p1, p2, p3, p4] = await Promise.all(promiseArr)

  return [
    {
      name: p1.data.name,
      id: pokemon1,
    },
    {
      name: p2.data.name,
      id: pokemon2,
    },
    {
      name: p3.data.name,
      id: pokemon3,
    },
    {
      name: p4.data.name,
      id: pokemon4,
    },
  ]
}

export default getPokemonOptions
