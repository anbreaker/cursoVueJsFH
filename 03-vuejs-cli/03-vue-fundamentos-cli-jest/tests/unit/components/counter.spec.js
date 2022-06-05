import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';
import { convertCompilerOptionsFromJson } from 'typescript';

describe('Counter Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  // test('Should match with the snapshot', () => {

  //   const wrapper= shallowMount(Counter);

  // expect(wrapper.element).toMatchSnapshot();
  // });

  test('Should match with the snapshot', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();

    const h2Value = wrapper.find('h2');

    expect(h2Value.text()).toBe('Counter');
  });

  test('Value should be 100 on <p>', () => {
    const value = wrapper.find('[data-testid="counter"]');

    expect(value.text()).toBe('100');
  });

  test('Should increment the value by 1', async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');

    await decreaseBtn.trigger('click');
    await decreaseBtn.trigger('click');

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe('101');
  });

  test('Should set the default value', () => {
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  test('Should display the property "title"', () => {
    const title = 'Counter Title';

    const wrapper = shallowMount(Counter, { props: { title } });

    expect(wrapper.find('h2').text()).toBe(title);
  });
});
