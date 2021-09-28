<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">Nothing Selected</h1>
  </div>
  <FloatingActionButton @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    )
  },

  methods: {
    createNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>