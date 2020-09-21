import Vue from "vue";
import VueRouter from "vue-router";
import Entrance from "../views/Entrance.vue";
import Memory from "../views/Memory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Entrance",
    component: Entrance
  },
  {
    path: "/memory",
    name: "Memory",
    component: Memory
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
