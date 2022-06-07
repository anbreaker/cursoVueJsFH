import { shallowMount } from '@vue/test-utils'

import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture Component', () => {
  test('Should match the snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should show the hidden image and the pokemon 150', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    })

    const image1 = wrapper.find('img')

    expect(image1.exists()).toBeTruthy()
    // TODO - check image 2 is hidden

    expect(image1.classes('hidden-pokemon')).toBeTruthy()

    expect(image1.attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/undefined.svg'
    )
  })

  test('Should show the pokemon if showPokemon is set to true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    })

    const image1 = wrapper.find('#img1')

    expect(image1.exists()).toBeTruthy()

    expect(image1.classes('hidden-pokemon')).toBe(true)
    expect(image1.classes('fade-in')).toBe(false)
  })
})
