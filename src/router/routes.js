const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginUser.vue") }],
  },
  {
    path: "/cadastroFilme",
    name: "CadastroFilme",
    component: () => import("../pages/CadastroFilme.vue"),
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
