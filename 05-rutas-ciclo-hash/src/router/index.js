import { createRouter, createWebHashHistory } from 'vue-router'

const listPage = () =>
  import(/* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage")
const aboutPage = () =>
  import(/* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage")
const pokemonPage = () =>
  import(/* webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage")
const notFound = () =>
  import(/* webpackChunkName: "NoPageFound" */ "../modules/shared/pages/NoPageFound")

const routes = [
  {
    name: "listPage",
    component: listPage,
    path: "/",
  },
  {
    name: "aboutPage",
    component: aboutPage,
    path: "/about",
  },
  {
    name: "pokemon-id",
    component: pokemonPage,
    path: "/:id",
    props: (route) => {
      const id = Number(route.params.id)

      return isNaN(id) ? { id: 1 } : { id }
    },
  },
  {
    name: "notFound",
    component: notFound,
    path: "/:pathMatch(.*)*",
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
