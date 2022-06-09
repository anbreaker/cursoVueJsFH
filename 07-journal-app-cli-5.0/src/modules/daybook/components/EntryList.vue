<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search Entry..." />
    </div>
  </div>

  <div class="entry-scrollarea">
    <Entry v-for="item in 100" :key="item" />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  export default {
    components: {
      Entry: defineAsyncComponent(() => import('./Entry.vue')),
    },
  };
</script>

<style lang="scss" scoped>
  input {
    margin: 0.5rem 0 0.5rem 0;
  }
  .entry-list-container {
    border-right: 1px solid #2c3e50;

    // height: calc(100vh - 56px);
  }

  .entry-scrollarea {
    height: calc(100vh - 120px);
    overflow-y: scroll;
  }

  .entry-scrollarea::-webkit-scrollbar {
    width: 7px;
  }

  .entry-scrollarea::-webkit-scrollbar-track {
    background-color: darkgrey;
  }
  .entry-scrollarea::-webkit-scrollbar-thumb {
    background: #8070d4;
    border-radius: 100px;
    border: 6px solid rgba(0, 0, 0, 0.2);
  }
</style>
