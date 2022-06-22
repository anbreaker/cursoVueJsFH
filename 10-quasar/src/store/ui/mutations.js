export function someMutation(/* state */) {}

export const toggleSideMenu = (state) => {
  state.isSideMenuOpen = !state.isSideMenuOpen;
};
