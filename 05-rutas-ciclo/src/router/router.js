import { createRouter, createWebHistory } from "vue-router"

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
    name: "pokemonPage",
    component: pokemonPage,
    path: "/:id",
  },
  {
    name: "notFound",
    component: notFound,
    path: "/:pathMatch(.*)*",
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
