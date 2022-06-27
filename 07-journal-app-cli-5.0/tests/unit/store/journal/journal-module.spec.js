import { createStore } from 'vuex';

import journal from '@/modules/daybook/store/journal';
import { journalState } from '../../../../tests/mock-data/test-journal-state';

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });

describe('Vuex - Testing Journal Module', () => {
  //Basics

  test('Init State should be initialized', () => {
    const store = createVuexStore(journalState);

    const { isLoading, entries } = store.state.journal;

    expect(isLoading).toBeFalsy();
    expect(entries).toEqual(journalState.entries);
  });
});
