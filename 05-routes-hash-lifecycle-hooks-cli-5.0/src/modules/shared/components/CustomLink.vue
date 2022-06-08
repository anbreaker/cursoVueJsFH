<template>
  <a
    v-if="isExternalLink"
    class="normal-link"
    :href="link.to"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ link.name }}
  </a>

  <router-link v-else class="" :to="link.to" v-slot="{ href, isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link'" :href="href">{{ link.name }}</a>
  </router-link>
</template>

<script>
  export default {
    props: {
      link: {
        type: Object,
        required: true,
      },
    },

    computed: {
      isExternalLink() {
        return this.link.to.startsWith('http');
      },
    },
  };
</script>

<style scoped>
  .is-active {
    color: #42b983;
  }
  .normal-link {
    color: aliceblue;
  }
</style>
