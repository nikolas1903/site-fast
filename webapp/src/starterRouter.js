import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Hero.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/inicio",
      components: {
        header: Header,
        default: Starter,
        footer: Footer
      }
    }
  ]
});
