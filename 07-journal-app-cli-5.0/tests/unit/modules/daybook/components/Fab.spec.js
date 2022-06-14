import { shallowMount } from '@vue/test-utils';

import Fab from '@/modules/daybook/components/Fab.vue';

describe('Fab Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Fab);
  });
  test('should display the default icon', () => {
    // fa-plus
    const icon = wrapper.find('i');

    expect(icon.classes()).toContain('fa-plus');
  });

  test('must show the icon for each argument', () => {
    // fa-circle
    const wrapper = shallowMount(Fab, {
      props: {
        icon: 'fa-circle',
      },
    });

    const icon = wrapper.find('i');
    expect(icon.classes()).toContain('fa-circle');
  });

  test('must emit the on:click event on click', () => {
    // wrapper.emmited('on:click')

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted('on:click')).toHaveLength(1);
  });
});
