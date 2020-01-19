import Vue from "vue";
import VueRouter, { RouterOptions, Route } from "vue-router";

Vue.use(VueRouter);

import { RouteInterface, PositionInterface } from "./router-types";
// Layout
import Layout from "@/layout/index.vue";

// import Home from "../views/Home.vue";
// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export const constantRoutes: RouteInterface[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        name: "Home",
        meta: { title: "Home", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    name: "About",
    redirect: "/about/index",
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "about"*/ "@/views/About.vue"),
        name: "AboutIndex",
        meta: { title: "AboutIndex", icon: "about", affix: true }
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    alwaysShow: true, // will always show the root menu
    meta: {
      title: "Permission",
      icon: "lock",
      roles: ["admin", "editor"]
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/Permission.vue"),
        name: "PagePermission",
        meta: {
          title: "Page Permission",
          roles: ["admin"]
        }
      }
    ]
  }
];

function createRouter(): VueRouter {
  const options: RouterOptions = {
    mode: "history",
    // scrollBehavior: (): PositionInterface => ({ y: 0 }),
    routes: constantRoutes
  };
  return new VueRouter(options);
}

const router = createRouter();

export default router;
