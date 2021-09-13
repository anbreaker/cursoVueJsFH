<template>
  <div>
    <a
      v-if="isExternalLink"
      :href="link.to"
      target="_blanck"
      :class="'normal-link'"
    >
      {{ link.name }}
    </a>
    <router-link v-else :to="routeObject" v-slot="{ isActive }">
      <a :class="isActive ? 'is-active' : 'normal-link'">
        {{ link.name }}
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  },

  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },

    routeObject() {
      return this.link.id === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { id: this.link.id } };
    }
  }
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: aliceblue;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 1rem;
}

.is-active {
  color: #42b893;
}

.normal-link {
  color: #c6c5c5;
}
</style>