import { createStore } from "vuex"

import counterStore from "./counter/counter"

export default createStore({
  modules: {
    counter: counterStore,
  },
})
