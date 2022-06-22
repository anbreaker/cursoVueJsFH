import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import { dayBookRouter } from '../modules/daybook/router';
import { authRouter } from '../modules/auth/router';
import { isAuthenticated } from '@/modules/auth/guards/authGuard';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView'),
  },
  {
    path: '/auth',
    ...authRouter,
  },
  {
    path: '/daybook',
    beforeEnter: [isAuthenticated],
    ...dayBookRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
