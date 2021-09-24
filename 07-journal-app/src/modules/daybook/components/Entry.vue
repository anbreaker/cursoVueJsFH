<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <!-- Title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div>

    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] // prettier-ignore

export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },

    // TODO refactor this functions
    day() {
      const date = new Date(this.entry.date);

      return date.getDate();
    },

    month() {
      const date = new Date(this.entry.date);

      return months[date.getMonth()];
    },

    yearDay() {
      const date = new Date(this.entry.date);

      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>