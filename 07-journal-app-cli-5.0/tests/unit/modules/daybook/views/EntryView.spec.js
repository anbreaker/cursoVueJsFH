import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Swal from 'sweetalert2';

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

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
  showLoading: jest.fn(),
  close: jest.fn(),
}));

describe('testing EntryView Component', () => {
  const store = createVuexStore(journalState);

  store.dispatch = jest.fn();

  const mockRouter = {
    push: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = shallowMount(EntryView, {
      props: {
        id: '-N4hKD2-n_7O-uv1REHY',
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

  test('should be delete entry and go out', async () => {
    await Swal.fire.mockReturnValueOnce(Promise.resolve({ isConfirmed: true }));

    wrapper.find('.btn-danger').trigger('click');

    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    expect(store.dispatch).toHaveBeenCalledWith(
      'journal/deleteEntry',
      '-N4hKD2-n_7O-uv1REHY'
    );
  });
});
