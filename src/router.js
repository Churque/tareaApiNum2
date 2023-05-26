import { createRouter, createWebHistory } from "vue-router";
import pagInicial from "./pages/pajaros";
import segundaPag from "./pages/pajarosDos";

const routes = [
  {
    name: "pajaros",
    path: "/",
    component: pagInicial,
  },
  {
    name: "pokemon",
    path: "/pokemon",
    component: segundaPag,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
