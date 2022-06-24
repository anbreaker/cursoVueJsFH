import { defineComponent, ref, watch } from 'vue';

import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces/places';

export default defineComponent({
  name: 'SearchResults',

  setup() {
    const { isLoadingPlaces, places } = usePlacesStore();

    const { map, setPlacesMarkers } = useMapStore();

    const activePlace = ref('');

    watch(places, (newPlaces) => {
      activePlace.value = '';

      setPlacesMarkers(newPlaces);
    });

    return {
      activePlace,

      isLoadingPlaces,
      places,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;

        const [lng, lat] = place.center;

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 14,
        });
      },
    };
  },
});
