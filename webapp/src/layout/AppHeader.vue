<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img
          src="../assets/images/logoNome.png"
          alt="logo"
          style="height: 250px"
        />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://studioweb.digital"
          >
            <img src="../assets/images/logoNome.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <router-link
          to="/sobre-nos"
          slot="title"
          class="nav-link"
          role="button"
        >
          <i class="ni ni-ui-04 d-lg-none"></i>
          <span class="nav-link-inner--text">Sobre Nós</span>
        </router-link>

        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Conteúdo</span>
          </a>
          <router-link to="/landing" class="dropdown-item">Landing</router-link>
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <router-link to="/login" class="dropdown-item">Login</router-link>
          <router-link to="/register" class="dropdown-item"
            >Register</router-link
          >
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/studioweb.digital"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Siga-nos no Instagram!"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>

        <!-- <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/studioweb.digital"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Siga-nos no Twitter!"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li> -->

        <!-- <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/studioweb.digital"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Siga-nos no Facebook!"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li> -->

        <li class="nav-item d-none d-lg-block ml-lg-4">
          <router-link
            to="/fale-conosco"
            rel="noopener"
            class="btn btn-neutral btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-headphones mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Fale conosco!</span>
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style>
</style>
