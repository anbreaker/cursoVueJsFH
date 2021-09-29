// export const myMutation = (state) => {

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]

  state.isLoading = false
}

export const updateEntry = (state, entry) => {
  const idx = state.entries.map((itm) => itm.id).indexOf(entry.id)

  state.entries[idx] = entry
}

export const addEntry = (state, entry) => {
  // state -> entries -> la nueva entrada al inicio del array
  state.entries = [entry, ...state.entries]
}

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id)
}
