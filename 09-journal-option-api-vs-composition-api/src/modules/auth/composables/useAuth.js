import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
  const store = useStore();

  const createUser = async (user) => {
    const response = await store.dispatch('auth/createUser', user);

    return response;
  };

  const loginUser = async (user) => {
    const response = await store.dispatch('auth/loginUser', user);

    return response;
  };

  const checkAuthentication = async () => {
    const response = await store.dispatch('auth/checkAuthentication');

    return response;
  };

  return {
    checkAuthentication,
    createUser,
    loginUser,

    authStatus: computed(() => store.getters['auth/currentState']),
  };
};
