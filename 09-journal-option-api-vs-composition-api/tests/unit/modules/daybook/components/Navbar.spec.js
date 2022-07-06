import { shallowMount } from '@vue/test-utils';

import Navbar from '@/modules/daybook/components/Navbar.vue';
import { createVuexStore } from '../../../../../tests/mock-data/mock-store';

describe('Navbar Component tests', () => {
  const store = createVuexStore({
    user: {
      name: 'anbreaker',
      email: 'test@test.com',
    },

    status: 'authenticated',
    idToken: 'abc',
    refreshToken: 'xyz',
  });

  test('must display the component correctly', () => {
    const wrapper = shallowMount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should be close logout', async () => {
    const wrapper = shallowMount(Navbar, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('button').trigger('click');

    // TODO to be continued...
    expect(wrapper.router.push).toHaveBeenCalledWith();

    expect(store.state.auth).toEqual({
      idToken: null,
      refreshToken: null,
      status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
    });
  });
});
