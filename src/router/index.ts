import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () => import("@/views/Quiz.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("@/views/Resume.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
