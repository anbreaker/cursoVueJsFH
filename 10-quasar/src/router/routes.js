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
          import(/* webpackChunkName: "Typography" */ "pages/Typography.vue"),
      },
      {
        path: "flex",
        name: "flex",
        component: () =>
          import(/* webpackChunkName: "flex" */ "pages/Flex.vue"),
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
