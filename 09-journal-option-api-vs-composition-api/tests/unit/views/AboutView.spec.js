import { shallowMount } from '@vue/test-utils';

import AboutView from '@/views/AboutView.vue';

describe('AboutView Component', () => {
  test('should be match with the snapshot', () => {
    const wrapper = shallowMount(<AboutView />);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
