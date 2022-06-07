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

    const picture = wrapper.find('pokemonpicture-stub')
    const options = wrapper.find('pokemonoptions-stub')

    expect(picture.exists()).toBeTruthy()
    expect(options.exists()).toBeTruthy()

    expect(picture.attributes('pokemonid')).toBe('5')
    expect(options.attributes('pokemons')).toBeTruthy()
  })
})
