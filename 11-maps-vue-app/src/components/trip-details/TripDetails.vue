<template>
  <div class="trip-container column" v-if="distance">
    <div class="col">
      Distance:
      <b>{{ distance }} km</b>
    </div>
    <div class="col">
      Duration:
      <b>{{ duration }} minutes</b>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { useMapStore } from '@/composables';

  export default defineComponent({
    name: 'TripDetails',

    setup() {
      const { duration, distance } = useMapStore();

      return {
        duration,
        distance,
      };
    },
  });
</script>

<style scoped>
  .trip-container {
    background-color: aliceblue;
    border-radius: 0.625rem;
    bottom: 2.2rem;
    box-shadow: 0rem 0.625rem 0.625rem rgba(0, 0, 0, 0.2);
    font-size: 1.2rem;
    left: 1.25rem;
    padding: 0.5rem;
    position: fixed;
    width: 20rem;
  }

  b {
    color: #42b983;
  }
</style>
