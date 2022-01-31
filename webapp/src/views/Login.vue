<template>
  <section class="section-hero section-shaped my-0">
    <div class="shape shape-style-1 shape-primary">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5" style="margin-top: 20%">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center text-muted mb-4">
                <small>Painel de Administradores</small>
              </div>
              <form @submit.prevent="logar">
                <b-form-input
                  alternative
                  class="mb-3"
                  placeholder="Usuário"
                  required
                  name="usuario"
                  v-model="login.login"
                >
                </b-form-input>
                <b-form-input
                  alternative
                  type="password"
                  placeholder="Senha"
                  name="senha"
                  required
                  v-model="login.senha"
                >
                </b-form-input>

                <div class="text-center">
                  <button class="btn-2">Login</button>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Usuario from "../services/usuario";

export default {
  data() {
    return {
      login: {
        login: "",
        senha: "",
      },
    };
  },

  methods: {
    logar() {
      Usuario.login(this.login).then((response) => {
        if (response.data.success == true) {
          this.$toastr.s(response.data.message);
          localStorage.setItem("ACCESS_GRANTEED", "ACCESS_GRANTEED");
          this.$router.push("/orcamentos");
        } else {
          this.$toastr.e(response.data.message);
          this.login.senha = "";
          this.login.login = "";
          localStorage.setItem("ACCESS_GRANTEED", "ACCESS_DENIED");
        }
      });
    },
  },
};
</script>
<style>
.btn-2 {
  background-color: #330968;
  border: none;
  margin-top: 10%;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 8px;
}
</style>
