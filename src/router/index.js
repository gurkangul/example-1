import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueMeta from 'vue-meta'
import store from '../store'

Vue.use(VueRouter);
Vue.use(VueMeta)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { name: "home" }
  },
  {
    path: "/about",
    name: "About",
    meta: { name: "about", requiresAuth: true },
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { name: "contact", requiresAuth: true },
    component: () =>
      import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, store?.getters)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user = store?.getters?.getUser
    if (user) {
      next()
    } else {
      next({
        path: '/',
      })
    }
  }
  else {
    next()
  }
})


export default router;
