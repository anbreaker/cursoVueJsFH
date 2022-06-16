import { ref } from 'vue';

export const useModal = () => {
  const isModalOpen = ref(false);

  return {
    isModalOpen,

    openOrCloseModal: () => {
      isModalOpen.value = !isModalOpen.value;
    },
  };
};
