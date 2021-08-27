<template>
  <div>
    <h1>{{ title || customTitle }}</h1>

    <h4>{{ counter }} <sup>2</sup> = {{ squareCounter }}</h4>

    <div>
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",

  props: {
    title: String,

    start: {
      type: Number,
      default: 10,
      // required: true
    }
  },
  data() {
    return {
      counter: this.start
    };
  },

  methods: {
    getSquareValue() {
      console.log("getSquareValue");
      return this.counter * this.counter;
    },

    increase() {
      this.counter++;
    },

    decrease() {
      this.counter--;
    }
  },

  computed: {
    squareCounter() {
      console.log("squareCounter");
      return this.counter * this.counter;
    },

    customTitle() {
      return this.title || "Custom Counter";
    }
  }
};
</script>

<style scoped>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid azure;
  color: azure;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #d4d227;
  transition: 0.3s ease-in-out;
}
</style>