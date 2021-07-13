import Vue from "vue";
import Router from "vue-router";
import Hero from "./views/components/Hero.vue";
import Portfolio from "./views/components/Portfolio.vue";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import SobreNos from "./views/components/SobreNos.vue";
import FaleConosco from "./views/components/FaleConosco.vue";
import Orcamento from "./views/components/Orcamento.vue"
import Sucesso from "./views/components/Sucesso.vue";

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
            default: SobreNos,
            footer: AppFooter
          }
        },

        {
          path: "/fale-conosco",
          name: "components",
          components: {
            header: AppHeader,
            default: FaleConosco,
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

        {
          path: "/orcamento",
          name: "components",
          components: {
            header: AppHeader,
            default: Orcamento,
            footer: AppFooter
          }
        },

        {
          path: "/sucesso",
          name: "components",
          components: {
            header: AppHeader,
            default: Sucesso,
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
