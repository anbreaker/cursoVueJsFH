const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        name: "typography",
        component: () =>
          import(/* webpackChunkName: "typography" */ "pages/Typography.vue"),
      },
      {
        path: "flex",
        name: "flex",
        component: () =>
          import(/* webpackChunkName: "flex" */ "pages/Flex.vue"),
      },
      {
        path: "dialogs",
        name: "dialogs",
        component: () =>
          import(/* webpackChunkName: "dialogs" */ "pages/Dialogs.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () =>
          import(/* webpackChunkName: "forms" */ "pages/Forms.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () =>
          import(/* webpackChunkName: "search" */ "pages/SearchPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
