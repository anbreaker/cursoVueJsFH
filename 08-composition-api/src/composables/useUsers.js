import { ref } from 'vue';
import axios from 'axios';

export const useUsers = () => {
  const users = ref([]);
  const currentPage = ref(1);
  const errorMessage = ref();
  const isLoading = ref(true);

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1;

    isLoading.value = true;

    try {
      const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);

      if (data.data.length > 0) {
        users.value = data.data;

        currentPage.value = page;

        errorMessage.value = null;
      } else if (currentPage.value > 0) {
        errorMessage.value = 'No more users';
      }

      isLoading.value = false;
    } catch (e) {
      errorMessage.value = e.message;
    }
  };

  getUsers(1);

  return {
    users,
    currentPage,
    errorMessage,
    isLoading,

    nextPage: () => getUsers(currentPage.value + 1),
    previousPage: () => getUsers(currentPage.value - 1),
  };
};
