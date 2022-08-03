<template>
  <div class="col-2 q-mr-lg q-my-lg search">
    <q-input
      outlined
      debounce="200"
      color="primary"
      v-model="search"
      clearable
      label="Filters *"
      hint="You can search by number, email, date... (Show console JS)"
    >
      <template v-slot:append>
        <span class="las la-search"></span>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchComponent",

  props: {
    rows: {
      type: Array as any,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    let search = ref("");
    let dataRows = ref(props.rows);

    const filterSearch = () => {
      dataRows.value = props.rows;

      const lowerSearch = search.value ? search.value.toLowerCase() : "";
      const filteredRows = dataRows.value.filter((row: any) => {
        let s1_values = Object.values(row);

        //  Important, we filter values removing null values
        s1_values = s1_values.filter((text) => text);

        let s1_lower = s1_values.map((item: any) =>
          item.toString().toLowerCase()
        );

        for (let val = 0; val < s1_lower.length; val++) {
          if (s1_lower[val].includes(lowerSearch)) {
            return row;
          }
        }
      });
      dataRows.value = [...filteredRows];

      emit("filteredResult", dataRows.value);
    };

    watch(search, () => {
      filterSearch();
    });

    return {
      filterSearch,
      search,
    };
  },
});
</script>

<style scoped>
.search {
  margin-left: 0;
  margin-top: 3.5rem;
  max-width: 600px;
}
</style>
