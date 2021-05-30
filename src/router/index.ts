import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/HomeView/HomePage.vue";
import NotFound from "@/views/NotFound.vue";
import PartInfo from "@/views/PartsView/PartInfo.vue";
import BrowseParts from "@/views/PartsView/BrowseParts.vue";
import RobotPart from "@/views/PartsView/RobotPart.vue";
import SidebarStandard from "@/components/Sidebar/SidebarStandard.vue";
import SidebarBuild from "@/components/Sidebar/SidebarBuild.vue";
import RobotBuilder from "@/views/BuildView/RobotBuilder.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      sidebar: SidebarStandard
    },
  },
  {
    path: "/build",
    name: "Build",
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild
    },
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
    path: "/parts/browse-parts",
    name: "BrowseParts",
    component: BrowseParts,
    children: [
      {
        name: "RobotPart",
        path: ":part",
        component: RobotPart,
      },
    ],
  },
  {
    path: "/parts/:partType/:id",
    name: "Parts",
    component: PartInfo,
    props: (route) => ({
      ...route.params,
    }),
    beforeEnter(to, from, next) {
      const isValidId: any = (Number.isInteger(Number(to.params.id))) ? undefined : false;
      next(isValidId);
    }
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
