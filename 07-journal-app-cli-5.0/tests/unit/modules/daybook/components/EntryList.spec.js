import { createStore } from 'vuex';
import { shallowMount } from '@vue/test-utils';

import EntryList from '@/modules/daybook/components/EntryList.vue';
import journal from '@/modules/daybook/store/journal';

import { journalState } from '../../../../../tests/mock-data/test-journal-state';

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });

describe('test Components EntryList', () => {
  const store = createVuexStore(journalState);

  const mockRouter = {
    push: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = shallowMount(EntryList, {
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });
  });

  test('should call the getEntriesByTerm without a term and display 2 entries', () => {
    expect(wrapper.findAll('entry-stub').length).toBe(2);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('must call the getEntriesByTerm and filter the entries', async () => {
    const input = wrapper.find('input');
    await input.setValue('second');

    expect(wrapper.findAll('entry-stub').length).toBe(1);
  });

  test('the button again should redirect to /new', () => {
    wrapper.find('button').trigger('click');

    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'entry',
      params: { id: 'new' },
    });
  });
});
