<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Change ironman</button>
    <button @click="changeHulk">Change hulk</button>

    <!-- <h3>Ironman is alive: {{ ironmanIsAlive }}</h3> -->
    <h3>Hulk is alive: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';

  export default {
    name: 'HomeView',
    setup() {
      const ironman = ref({ name: 'Tony', age: 50 });
      const hulk = reactive({ name: 'Bruce', age: 50 });

      // const ironmanIsAlive = reactive(false);
      const hulkIsAlive = ref(true);

      const changeStatus = () => {
        hulkIsAlive.value = !hulkIsAlive.value;

        // ironmanIsAlive = !ironmanIsAlive; // error better work with ref
      };

      return {
        ironman,
        hulk,

        // ironmanIsAlive,
        hulkIsAlive,

        changeStatus,

        changeIronman: () => {
          ironman.value.name = 'Tony Starks';
          ironman.value.age = '55';
        },
        changeHulk: () => {
          hulk.name = 'Bruce Banner';
          hulk.age = '45';
        },
      };
    },
  };
</script>
