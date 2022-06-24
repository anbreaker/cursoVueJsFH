<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="search-bar-container">
    <input
      type="text"
      class="form-control"
      placeholder="Search Locations..."
      v-model="searchTerm"
    />

    <SearchResults />
  </div>
</template>

<style scoped>
  .search-bar-container {
    background-color: aliceblue;
    border-radius: 0.32rem;
    box-shadow: 0 0.32rem 0.625rem rgba(0, 0, 0, 0.2);
    left: 1.875rem;
    position: fixed;
    top: 1.875rem;
    width: 18rem;
    overflow: hidden;
    padding: 0.2rem;
  }
</style>
