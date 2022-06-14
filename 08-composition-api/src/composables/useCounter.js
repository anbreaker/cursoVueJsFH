import { ref } from 'vue';

export const useCounter = (initialValue = 5) => {
  const counter = ref(initialValue);

  return {
    counter,

    decrease: () => counter.value--,
    increase: () => counter.value++,
  };
};
