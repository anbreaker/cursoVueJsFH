import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
  // test('Should match with the snapshot', () => {

  //   const wrapper= shallowMount(Counter);

  // expect(wrapper.element).toMatchSnapshot();
  // });

  test('Should match with the snapshot', () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.find('h2').exists()).toBeTruthy();

    const h2Value = wrapper.find('h2');

    expect(h2Value.text()).toBe('Counter');
  });
});
