<template>
  <h1>Vuex - Counter</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Count Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomValue" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>lastRandomValue: {{ lastRandomValue }}</h2>

  <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('counter', [
      'count',
      'lastMutation',
      'lastRandomValue',
      'isLoading',
    ]),
    // ...mapState({
    //   count: (state) => state.count,
    // //  lastMutation: (state) => state.lastMutation,
    //   lastMutation: 'lastMutation',
    // }),

    countComputed() {
      return this.$store.state.counter.count
    },
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
    },
    ...mapActions('counter', ['incrementRandomValue']),
  },
}
</script>

<style scoped>
button {
  background-color: #41b883;
  border-radius: 5px;
  border: none;
  color: aliceblue;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
  padding: 10px;
}

button:hover {
  background-color: #2c9f67;
}

button:disabled {
  background-color: #34473f;
}
</style>
