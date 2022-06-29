import { shallowMount } from '@vue/test-utils';

import Entry from '@/modules/daybook/components/Entry.vue';

import { journalState } from '../../../../../tests/mock-data/test-journal-state';

describe('testing Entry Component', () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = shallowMount(Entry, {
    props: {
      entry: journalState.entries[0],
    },

    global: {
      mocks: {
        $router: mockRouter,
      },
    },
  });

  test('should be match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('click on the button should redirect to "entry-container".', () => {
    const entryContainer = wrapper.find('.entry-container');

    entryContainer.trigger('click');

    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'entry',
      params: {
        id: journalState.entries[0].id,
      },
    });
  });

  test('should be test computed properties', () => {
    expect(wrapper.vm.day).toBe(23);
    expect(wrapper.vm.month).toBe('July');
    expect(wrapper.vm.yearDay).toBe('2021, Friday');
  });
});
