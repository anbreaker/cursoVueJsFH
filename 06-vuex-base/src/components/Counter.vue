<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.counter.count }}</h2>
    <h2>Count Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>
    <hr />
    <h1>mapState - Vuex</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>mapState - LastMutation: {{ lastMutation }}</h2>

    <h2>
      Direct Getter Square Value: {{ $store.getters["counter/squareCount"] }}
    </h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },

    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
    ...mapState("counter", ["count", "lastMutation", "isLoading"])
  },

  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },

    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },

    // ...mapActions("counter", ["incrementRandomInt"])
    ...mapActions("counter", {
      randomInt: "incrementRandomInt"
    })
  }
};
</script>

<style scoped>
button {
  background-color: #41b883;
  color: azure;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
}

button:disabled {
  background-color: #34473f;
}
</style>
