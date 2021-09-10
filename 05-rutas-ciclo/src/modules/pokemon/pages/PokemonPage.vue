<template>
  <h1>Pokemon Page with id #{{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      id: null
    };
  },
  created() {
    const { id } = this.$route.params;
    this.id = id;

    console.log(this.id);
  }
};
</script>