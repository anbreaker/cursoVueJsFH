<template>
  <div class="entry-list-container">
    <div class="px-2 pt-1">
      <input type="text" class="form-control" placeholder="Search entry..." />
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="item in 100" :key="item"> </Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue"))
  }
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
}

.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: scroll;
  overflow: auto;
}

.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
