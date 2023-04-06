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
    meta: {
      name: "Hello,  Thái",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
      name: "Hello,  Thái",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
      name: "Hello,  Thái",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      name: "Profile",
      leading: false,
    },
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      name: "Hello,  Thái",
      leading: true,
    },
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      name: "Hello,  Thái",
      leading: true,
    },
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      name: "Hello,  Thái",
      leading: true,
    },
    beforeEnter: requireAuth,
    component: () =>
      import(
        /* webpackChunkName: "new-transaction" */ "../views/new-transaction.vue"
      ),
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
