import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';

import { useMapStore, usePlacesStore } from '@/composables';

export default defineComponent({
  name: 'MapView',

  setup() {
    const mapElement = ref<HTMLDivElement>();

    const { userLocation, isUserLocationReady } = usePlacesStore();

    const { setMap } = useMapStore();

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Div Element does not exits');
      if (!userLocation.value) throw new Error('User Lcation is not available');

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID or ref
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15,
      });

      const myLocationPopup = new Mapboxgl.Popup({ offset: [0, -35] }).setLngLat(
        userLocation.value
      ).setHTML(`
        <h4>I am Here.</h4> 
        <p>${userLocation.value}</p> 
      `);

      const myLocationMarker = new Mapboxgl.Marker({ color: 'crimson' })
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);

      // TODO Set map in Vuex
      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(
      isUserLocationReady,
      () => {
        if (isUserLocationReady.value) initMap();
      }
      // { immediate: true }
    );

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
