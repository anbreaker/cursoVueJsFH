// export const myMutations = (state)=>{

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];

  state.isLoading = false;
};

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries];
};

export const updateEntry = (state, entry) => {
  const idx = state.entries.map((entry) => entry.id).indexOf(entry.id);

  state.entries[idx] = entry;
};
