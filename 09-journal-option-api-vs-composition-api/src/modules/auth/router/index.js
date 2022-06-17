export const authRouter = {
  name: 'auth',
  component: () =>
    import(/* webpackChunkName: "AuthLayout" */ '@/modules/auth/layouts/AuthLayout.vue'),
  children: [
    {
      name: 'login',
      path: '',
      component: () =>
        import(/* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue'),
    },
    {
      name: 'register',
      path: '/register',
      component: () =>
        import(/* webpackChunkName: "Register" */ '@/modules/auth/views/Register.vue'),
    },
  ],
};
