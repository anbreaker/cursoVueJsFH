<template>
  <h1>About Page</h1>
  <h2>Lifecycle Hooks</h2>
  <hr />
  <h3>{{ name }}</h3>
  <button @click="onChangeName">Change Name</button>
</template>

<script>
  export default {
    data() {
      return {
        name: 'anbreaker',
      };
    },
    methods: {
      onChangeName() {
        this.name = 'Magalí';
      },
    },

    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      // Util for http request
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
    },
    beforeUnmount() {
      console.log('beforeUnmount');
    },
    unmounted() {
      console.log('unmounted');
    },
    errorCaptured: () => {
      console.log('errorCaptured');
    },
    renderTracked() {
      console.log('renderTracked');
    },
    renderTriggered() {
      console.log('renderTriggered');
    },
  };
</script>
