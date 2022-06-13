// export const myMutations = (state)=>{

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];

  state.isLoading = false;
};

export const addEntry = (state) => {
  //
};

export const updateEntries = (state) => {
  //
};
