<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">09</span>
      <span class="mx-1 fs-5">June</span>
      <span class="mx-2 fw-light">2022, Thursday</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad itaque voluptatem,
      exercitationem amet nam hic, neque culpa ex sint aliquid! Dolorum dolore nisi quis
      eveniet nobis, voluptatum excepturi nostrum.
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2 ease-in;

    &:hover {
      background-color: lighten($color: black, $amount: 30);
    }

    .entry-description {
      font-size: 0.8rem;
    }
  }
</style>
