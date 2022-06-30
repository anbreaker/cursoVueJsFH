import { createStore } from 'vuex';
import { shallowMount } from '@vue/test-utils';

import EntryView from '@/modules/daybook/views/EntryView.vue';

import journal from '@/modules/daybook/store/journal';
import { journalState } from '../../../../mock-data/test-journal-state';

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });

describe('testing EntryView Component', () => {
  const store = createVuexStore(journalState);

  const mockRouter = {
    push: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = shallowMount(EntryView, {
      props: {
        id: journalState.entries[1].id,
      },

      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });
  });

  test('must remove the user because the id does not exist', () => {
    const wrapper = shallowMount(EntryView, {
      props: {
        id: 'This id not exists',
      },

      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });

    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' });
  });

  test('must display the entry correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    expect(mockRouter.push).not.toHaveBeenCalled();
  });
});
