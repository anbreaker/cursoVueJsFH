<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.count }}</h2>
    <h2>Count Computed: {{ countComputed }}</h2>

    <button>+1</button>
    <button>+5</button>
    <button>Random</button>
    <hr />
    <h1>mapState - Vuex</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>mapState - LastMutation: {{ lastMutation }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.count;
    },

    // ...mapState(["count"])
    ...mapState({
      count: state => state.count,
      lastMutation: state => state.lastMutation
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
</style>
