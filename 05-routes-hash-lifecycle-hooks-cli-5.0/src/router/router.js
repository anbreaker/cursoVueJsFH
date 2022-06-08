import { createRouter, createWebHashHistory } from 'vue-router';

// Pokemon
const listPage = () =>
  import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage');
const aboutPage = () =>
  import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage');
const pokemonPage = () =>
  import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage');
const notFound = () =>
  import(/* webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NotFoundPage');
const pokemonLayout = () =>
  import(
    /*webpackChunkName: "pokemonLayout"*/ '../modules/pokemon/layouts/PokemonLayout'
  );

// Dragon Ball Z

const dbzLayout = () =>
  import(/* webpackChunkName: "dbzLayout" */ '../modules/dbz/layouts/DragonBallLayout');
const dbzAbout = () =>
  import(/* webpackChunkName: "dbzAbout" */ '../modules/dbz/pages/About');
const dbzCharacters = () =>
  import(/* webpackChunkName: "dbzCharacters" */ '../modules/dbz/pages/Characters');

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },

  {
    name: 'pokemon',
    component: pokemonLayout,
    path: '/pokemon',
    children: [
      {
        component: listPage,
        name: 'pokemon-home',
        path: 'home',
      },
      {
        component: aboutPage,
        name: 'pokemon-about',
        path: 'about',
      },
      {
        component: pokemonPage,
        name: 'pokemon-id',
        path: 'pokemonid/:id',
        props: (route) => {
          const id = Number(route.params.id);

          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: '',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },

  // DBZ Layout

  {
    name: 'dbz',
    component: dbzLayout,
    path: '/dbz',
    children: [
      {
        component: dbzAbout,
        name: 'dbz-about',
        path: 'home',
      },
      {
        component: dbzCharacters,
        name: 'dbz-characters',
        path: 'characters',
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' },
      },
    ],
  },

  {
    name: 'notFound',
    component: notFound,
    path: '/:pathMatch(.*)*',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Guard Global Sync
/*
router.beforeEach((to, from, next) => {
  console.log({ to, from, next });

  const random = Math.random() * 100;

  if (random > 50) {
    console.log(random, 'Guard Authentication');
    next();
  } else {
    console.log(random, 'Guard Authentication Failed');
    next({ name: 'pokemon-home' });
  }
});
*/

const canAccess = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log(random, 'Authentication - CanAccess');
      resolve(true);
    } else {
      console.log(random, 'Authentication Failed - CanAccess');
      resolve(false);
    }
  });
};

router.beforeEach(async (to, from, next) => {
  const authorized = await canAccess();

  authorized ? next() : next({ name: 'pokemon-home' });
});

export default router;
