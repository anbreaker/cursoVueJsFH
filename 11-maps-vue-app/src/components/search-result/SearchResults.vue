<script lang="ts" src="./SearchResults" />

<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading...</h5>
    <span>Waiting please...</span>
  </div>

  <ul v-if="places.length > 0" class="list-group mt-3">
    <li
      class="list-group-item list-group-item-action"
      v-for="place in places"
      :key="place.id"
      :class="{ active: place.id === activePlace }"
      @click="onPlaceClicked(place)"
    >
      <h5>{{ place.text }}</h5>
      <p>{{ place.place_name }}</p>
      <div align="right">
        <button
          class="btn btn-sm btn-outline-primary"
          :class="place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary'"
        >
          Directions
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  li {
    cursor: pointer;
  }

  h5 {
    font-size: 0.9rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
  }
</style>
