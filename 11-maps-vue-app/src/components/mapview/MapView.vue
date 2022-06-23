<script lang="ts" src="./MapView.ts" />

<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Waiting please...</h3>
      <span>Positioning...</span>
    </div>
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapElement" />
</template>

<style scoped>
  .loading-map {
    background-color: rgba(0, 0, 0, 0.8);
    color: aliceblue;
    height: 100vh;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 100;
  }

  .map-container {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #9cc0f9;
  }
</style>
