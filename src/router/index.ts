import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/HomeView/HomePage.vue";
import NotFound from "@/views/NotFound.vue";
import PartInfo from "@/views/PartsView/PartInfo.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/build",
    name: "Build",
    component: () =>
      import(
        /* webpackChunkName: "build" */ "@/views/BuildView/RobotBuilder.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView/About.vue"),
  },
  {
    path: '/parts',
    name: 'Parts',
    component: PartInfo,
    props: (route) => ({
      ...route.params
    })
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
