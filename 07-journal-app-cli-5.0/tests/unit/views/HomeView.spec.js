import { shallowMount } from '@vue/test-utils';

import HomeView from '@/views/HomeView.vue';

describe('HomeView Component', () => {
  test('should be match with the snapshot', () => {
    const wrapper = shallowMount(<HomeView />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('click on the button should redirect to "no-entry".', () => {
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = shallowMount(HomeView, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    wrapper.find('button').trigger('click');

    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' });
  });
});
