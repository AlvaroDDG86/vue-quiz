import { useUserStore } from "./../store/user.store";
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
    meta: {
      needUser: true,
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("@/views/Resume.vue"),
    meta: {
      needUser: true,
    },
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: () => import("@/views/NetworkError.vue"),
  },
  { path: "/:pathMatch(.*)*", component: () => import("@/views/NotFound.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.needUser && userStore.name === "") {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
