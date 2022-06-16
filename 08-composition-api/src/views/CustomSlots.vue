<template>
  <h1>Slots!</h1>

  <button @click="openOrCloseModal">Open Modal</button>

  <Modal v-if="isModalOpen" title="Title Modal" @on:close="openOrCloseModal">
    <template v-slot:header>
      <h1>Hello Modal</h1>
    </template>

    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quas?</p>
    </template>

    <template v-slot:footer>
      <button @click="openOrCloseModal">Close Modal</button>
    </template>

    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>
  </Modal>
</template>

<script>
  import Modal from '@/components/Modal.vue';
  import { useModal } from '@/composables/useModal';

  export default {
    components: {
      Modal,
    },

    setup() {
      const { isModalOpen, openOrCloseModal } = useModal();

      return {
        isModalOpen,
        openOrCloseModal,
      };
    },
  };
</script>

<style scoped>
  button {
    background-color: #64b687;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #42815e;
    transition: 0.3s ease-in-out;
  }
</style>
