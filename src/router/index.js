import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Auth guards
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  // console.log("Before enter router: ", user);

  if (!user) next({ name: "Login", params: {} });
  else next();
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
