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
  beforeAll(async () => {
    const { data } = await authApi.post(':signInWithPassword', {
      email: 'test@test.com',
      password: '123456',
      returnSecureToken: true,
    });

    localStorage.setItem('idToken', data.idToken);
  });

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
  test('actions: loadEntries', async () => {
    const store = createVuexStore({ isLoading: true, entries: [] });

    await store.dispatch('journal/loadEntries');

    expect(store.state.journal.entries.length).toBe(2);
  });

  test('actions: updateEntry', async () => {
    const store = createVuexStore(journalState);

    const updatedEntry = {
      id: '-N4hKD2-n_7O-uv1REHY',
      date: 1627077227978,
      text: 'Hello Mock Data test +info testing',
      otherField: true, //test
    };

    await store.dispatch('journal/updateEntry', updatedEntry);

    expect(store.state.journal.entries.length).toBe(2);

    expect(
      store.state.journal.entries.find((entry) => entry.id === updatedEntry.id)
    ).toEqual({
      id: '-N4hKD2-n_7O-uv1REHY',
      date: 1627077227978,
      text: 'Hello Mock Data test +info testing',
    });
  });

  test('actions: createEntry && deleteEntry', async () => {
    const store = createVuexStore(journalState);

    const newEntry = {
      id: '-N4hKD2-n_7O-uv1REHY',
      date: 1627077227978,
      text: 'New Entry testing mock',
    };

    const idEntryFirebase = await store.dispatch('journal/createEntry', newEntry);

    expect(typeof idEntryFirebase).toBe('string');

    expect(
      store.state.journal.entries.find((entry) => entry.id === idEntryFirebase)
    ).toBeTruthy();

    await store.dispatch('journal/deleteEntry', idEntryFirebase);

    expect(
      store.state.journal.entries.find((entry) => entry.id === idEntryFirebase)
    ).toBeFalsy();
  });
});
