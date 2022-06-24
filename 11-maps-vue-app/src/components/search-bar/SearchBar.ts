import { defineComponent, ref, computed } from 'vue';

import { usePlacesStore } from '@/composables';
import SearchResults from '../search-result/SearchResults.vue';

export default defineComponent({
  name: 'SearchBar',
  components: { SearchResults },

  setup() {
    const { searchPlacesByTerm } = usePlacesStore();

    const debounceTimeOut = ref<number>();
    const debounceValue = ref<string>('');

    return {
      searchTerm: computed({
        get() {
          return debounceValue.value;
        },

        set(value: string) {
          if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

          debounceTimeOut.value = setTimeout(() => {
            debounceValue.value = value;

            searchPlacesByTerm(debounceValue.value);
          }, 500);
        },
      }),
    };
  },
});
