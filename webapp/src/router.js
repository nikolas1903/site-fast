import Vue from "vue";
import Router from "vue-router";
import Hero from "./views/components/Hero.vue";
import Portfolio from "./views/components/Portfolio.vue";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import QuemSomos from "./views/components/QuemSomos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "open",
  routes: [
    {
      path: "/",
      component: () => import("./App"), //webpackChunkName app
      redirect: "/inicio",
      meta: { requiresAuth: false },
      children: [
        {
          path: "/inicio",
          name: "components",
          components: {
            header: AppHeader,
            default: Hero,
            footer: AppFooter
          }
        },

        {
          path: "/sobre-nos",
          name: "components",
          components: {
            header: AppHeader,
            default: QuemSomos,
            footer: AppFooter
          }
        },

        {
          path: "/portfolio",
          name: "components",
          components: {
            header: AppHeader,
            default: Portfolio,
            footer: AppFooter
          }
        },
      ],
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
