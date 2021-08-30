import { shallowMount, mount } from "@vue/test-utils"

import Counter from "@/components/Counter"

describe("Counter Component", () => {
  /*
  test("should be match with the snapshot", () => {
    const wrapper = shallowMount(Counter)

    expect(wrapper.html()).toMatchSnapshot()
  })
*/

  test('should have the default value "Counter"', () => {
    const wrapper = shallowMount(Counter)

    const h2 = wrapper.find("h1")
    console.log(h2)
  })
})
