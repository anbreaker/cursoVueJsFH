import { shallowMount, mount } from '@vue/test-utils';

import Counter from '@/components/Counter';

describe('Counter Component', () => {
  // test('should be match with the snapshot', () => {
  //   const wrapper = shallowMount(Counter);

  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  test('should have the default value "Counter"', () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.find('h2').exists()).toBe(true);

    const h2Value = wrapper.find('h2').text();

    expect(h2Value).toBe('Custom Counter');
  });
});
