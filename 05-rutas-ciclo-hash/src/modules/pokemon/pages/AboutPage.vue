<template>
  <div>
    <h1>About Page</h1>
    <hr />
    <h2>{{ name }}</h2>
    <button @click="onChangeName">Change Name</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "anbreaker"
    };
  },
  methods: {
    onChangeName() {
      // console.log("OnChange");
      this.name = "Magali";
    }
  },

  // Lifecycle hooks
  beforeCreate() {
    console.log("beforeCreate 1");
  },

  created() {
    this.name = "Jess";
    console.log("created 2");
    // Peticiones HTTP
  },

  beforeMount() {
    console.log("beforeMount 3");
  },

  mounted() {
    console.log("mounted 4");
  },

  beforeMount() {
    console.log("beforeMount 5");
  },

  updated() {
    console.log("updated 6");
  },

  activated() {
    console.log("activated 7");
  },

  deactivated() {
    console.log("deactivated 8");
  },

  beforeUnmount() {
    console.log("beforeUnmount 9");
  },

  unmounted() {
    console.log("unmounted 10");
  },

  errorCaptured: () => {
    console.log("errorCaptured 11");
  },

  renderTracked() {
    console.log("renderTracked 12");
  },

  renderTriggered() {
    console.log("renderTriggered 13");
  }
};
</script>
