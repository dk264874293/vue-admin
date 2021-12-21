import { createRouter, createWebHashHistory } from "./grouter";
import Home from "../pages/Home/index.vue";
import About from "../pages/About/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

console.log("router", router);

export default router;
