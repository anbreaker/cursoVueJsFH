import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
  //   test('debe de hacer match con el snapshot', () => {
  //     const wrapper = shallowMount(Counter);

  //     expect(wrapper.html()).toMatchSnapshot();
  //   });

  test('h2 debe de tener el valor por defecto "Counter"', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();

    const h2Value = wrapper.find('h2').text();

    expect(h2Value).toBe('Counter');
  });

  test('el valor por defecto debe de ser 100 en el p', async () => {
    const wrapper = shallowMount(Counter);
    // const pTags = wrapper.findAll('p')

    // expect segundo p === 100
    // expect( pTags[1].text() ).toBe('100')

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe('100');
  });

  test('debe incrementar y decrementar el contador', async () => {
    const wrapper = shallowMount(Counter);

    const increaseBtn = wrapper.find('button');

    await increaseBtn.trigger('click');
    let value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('101');

    const decreaseBtn = wrapper.findAll('button')[1];

    await decreaseBtn.trigger('click');
    await decreaseBtn.trigger('click');
    value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('99');
  });
});
