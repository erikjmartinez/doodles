import Vue from "vue";
import VueRouter from "vue-router";
import VueScrollactive from "vue-scrollactive";
import Home from "../views/Home.vue";

[VueRouter, VueScrollactive].forEach(plugin => Vue.use(plugin));
// Vue.use(VueRouter);
// Vue.use(VueScrollactive);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    // IMPORTANT
    // This route must stay at the bottom as the astrek says to match the route with anything
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "Not Found" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  linkExactActiveClass: "active-tab",
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
