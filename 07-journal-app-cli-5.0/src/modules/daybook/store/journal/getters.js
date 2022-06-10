// export const myGetters = (state)=>{
// 	return state.myState
// }

export const getEntriesByTerm =
  (state) =>
  (term = '') => {
    if (term.length === 0) return state.entries;

    return state.entries.filter((entry) =>
      entry.text.toLowerCase().includes(term.toLowerCase())
    );
  };

export const getEntryById = (state) => {
  //
};
