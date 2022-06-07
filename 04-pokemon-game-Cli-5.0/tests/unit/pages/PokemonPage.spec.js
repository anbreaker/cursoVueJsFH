import { shallowMount } from '@vue/test-utils'

import PokemonPage from '@/pages/PokemonPage'

describe('PokemonPage Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })
  test('should first', () => {
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
})
