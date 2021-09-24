<template>
  <div class="entry-list-container">
    <div class="px-2 pt-1">
      <input
        type="text"
        class="form-control"
        placeholder="Search entry..."
        v-model="term"
      />
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry">
      </Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue"))
  },

  data() {
    return {
      term: ""
    };
  },

  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),

    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    }
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
