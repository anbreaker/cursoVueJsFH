export const increment = (state) => {
  state.count++
  state.lastMutation = 'increment ' + 1
}

export const incrementBy = (state, value) => {
  state.count += value
  state.lastMutation = 'incrementBy ' + value

  state.lastRandomValue = value
}
export const setLoading = (state) => {
  state.isLoading = !state.isLoading
}
