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

  // Mutation
  test('mutation: setEntries', () => {
    const store = createVuexStore({ isLoading: true, entries: [] });

    store.commit('journal/setEntries', journalState.entries);
    expect(store.state.journal.entries.length).toBe(2);

    store.commit('journal/setEntries', journalState.entries);
    expect(store.state.journal.entries.length).toBe(4);

    expect(store.state.journal.isLoading).toBeFalsy();
  });

  test('mutation: updateEntry', () => {
    const store = createVuexStore(journalState);

    const updateEntry = {
      id: '-N4hKD2-n_7O-uv1REHY',
      date: 1627077227978,
      text: 'Hello Mock Data test +info testing',
    };

    store.commit('journal/updateEntry', updateEntry);

    expect(store.state.journal.entries.length).toBe(2);
    // expect(store.state.journal.entries[0]).toEqual(updateEntry);

    expect(
      store.state.journal.entries.find((entry) => entry.id === updateEntry.id)
    ).toEqual(updateEntry);
  });

  test('mutations: addEntry, deleteEntry', () => {
    // Create Store
    const store = createVuexStore(journalState);

    const addEntry = {
      id: 'ABC-123',
      date: 1627077227978,
      text: 'Hello Mock testing',
    };

    store.commit('journal/addEntry', addEntry);

    expect(store.state.journal.entries.length).toBe(3);

    expect(store.state.journal.entries.find((entry) => entry.id === addEntry.id)).toEqual(
      addEntry
    );

    store.commit('journal/deleteEntry', addEntry.id);

    expect(store.state.journal.entries.length).toBe(2);

    expect(
      store.state.journal.entries.find((entry) => entry.id === addEntry.id)
    ).toBeFalsy();
  });

  // Getters
  test('getters: getEntriesByTerm, getEntryById', () => {
    const store = createVuexStore(journalState);

    const [entry1, entry2] = journalState.entries;

    expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2);
    expect(store.getters['journal/getEntriesByTerm']('second').length).toBe(1);

    expect(store.getters['journal/getEntriesByTerm']('second')).toEqual([entry2]);

    expect(store.getters['journal/getEntryById']('-N4hKD2-n_7O-uv1REHY')).toEqual(entry1);
  });

  // Actions
});
