import Vue from "vue";
import Router from "vue-router";
import Hero from "./views/components/Hero.vue";
import Portfolio from "./views/components/Portfolio.vue";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import SobreNos from "./views/components/SobreNos.vue";
import FaleConosco from "./views/components/FaleConosco.vue";
import Sucesso from "./views/components/Sucesso.vue";
import Login from "./views/Login.vue";
import CreateOrcamento from "./views/components/Orcamento.vue"
import ListOrcamento from "./views/ListOrcamento.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./App"), //webpackChunkName app
      redirect: "/inicio",
      meta: { requiresAuth: false },
      children: [
        {
          path: "/inicio",
          components: {
            header: AppHeader,
            default: Hero,
            footer: AppFooter
          }
        },
        {
          path: "/sobre-nos",
          components: {
            header: AppHeader,
            default: SobreNos,
            footer: AppFooter
          }
        },
        {
          path: "/fale-conosco",
          components: {
            header: AppHeader,
            default: FaleConosco,
            footer: AppFooter
          }
        },
        {
          path: "/portfolio",
          components: {
            header: AppHeader,
            default: Portfolio,
            footer: AppFooter
          }
        },
        {
          path: "/sucesso",
          components: {
            header: AppHeader,
            default: Sucesso,
            footer: AppFooter
          }
        },
        {
          path: "/login",
          components: {
            default: Login,
          }
        },
        {
          path: "/orcamento",
          components: {
            header: AppHeader,
            default: CreateOrcamento,
            footer: AppFooter
          }
        },
        {
          path: "/orcamentos",
          components: {
            header: AppHeader,
            default: ListOrcamento,
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
