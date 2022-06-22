import store from '@/store';

export const isAuthenticated = async (to, from, next) => {
  const { ok } = await store.dispatch('auth/checkAuthentication');

  ok ? next() : next({ name: 'login' });
};
