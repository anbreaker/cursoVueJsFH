<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Search Component</span>
    <q-separator spaced />

    <h3>Filter</h3>

    <SearchComponent
      :rows="tableEnquestesWithoutService"
      @filteredResult="filteredResult"
    />

    <div class="row justify-center">
      <p>{{ tableEnquestesForFilterService }}</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

import SearchComponent from "../components/SearchComponent.vue";
import { mockData } from "../utils/mockSearch";

export default defineComponent({
  name: "SearchPage",

  components: { SearchComponent },

  setup() {
    const tableEnquestesWithoutService = ref();
    const tableEnquestesForFilterService = ref();

    onMounted(() => {
      tableEnquestesWithoutService.value = mockData;
    });

    const filteredResult = (event) => {
      tableEnquestesForFilterService.value = event;

      console.log(tableEnquestesForFilterService.value);
    };

    return {
      filteredResult,
      tableEnquestesWithoutService,
      tableEnquestesForFilterService,
    };
  },
});
</script>
