<template>
  <button v-if="isBtnReady" class="btn btn-primary location" @click="onMyLocationClicked">
    Go to my Location
  </button>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';

  import { usePlacesStore, useMapStore } from '@/composables';

  export default defineComponent({
    name: 'MyLocationBtn',

    setup() {
      const { isUserLocationReady, userLocation } = usePlacesStore();
      const { map, isMapReady } = useMapStore();

      return {
        isBtnReady: computed<boolean>(
          () => isUserLocationReady.value && isMapReady.value
        ),

        onMyLocationClicked: () => {
          map.value?.flyTo({
            center: userLocation.value,
            zoom: 14,
          });
        },
      };
    },
  });
</script>

<style scoped>
  .location {
    position: fixed;
    top: 1.875rem;
    right: 1.875rem;
  }
</style>
