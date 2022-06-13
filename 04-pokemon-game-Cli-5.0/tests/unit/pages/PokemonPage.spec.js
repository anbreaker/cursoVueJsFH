import { shallowMount, mount } from '@vue/test-utils'

import PokemonPage from '@/pages/PokemonPage'
import { pokemonArr } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })
  test('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('must call mixPokemonArray on Mount', () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonArray'
    )

    // to mount component after call methods
    shallowMount(PokemonPage)

    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })

  test('Should match the snapshot, when pokemons is loaded', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArr,
          pokemon: pokemonArr[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  // TODO this test is not working
  test('Must show the components PokemonPicture and PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArr,
          pokemon: pokemonArr[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })

    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')

    expect(picture.exists()).toBeTruthy()
    expect(options.exists()).toBeTruthy()

    expect(picture.attributes('pokemonid')).toBe('1')
    expect(options.attributes('pokemons')).toBeTruthy()
  })

  test('Must show the components PokemonPicture and PokemonOptions', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArr,
          pokemon: pokemonArr[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })

    await wrapper.vm.checkAnswer(1)

    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe(`Correct!, is ${pokemonArr[0].name}`)

    await wrapper.vm.checkAnswer(10)
    expect(wrapper.vm.message).toBe(
      `Opps!, the correct pokemon is ${pokemonArr[0].name.replace(/^\w/, (c) =>
        c.toUpperCase()
      )}`
    )
  })
})
