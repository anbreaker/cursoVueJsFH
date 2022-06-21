import { useStore } from 'vuex';

export const useAuth = () => {
  const store = useStore();

  const createUser = async (user) => {
    const response = await store.dispatch('auth/createUser', user);

    return response;
  };

  return {
    createUser,
  };
};
