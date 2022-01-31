<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <img
                    v-lazy="'img/theme/4918050.jpg'"
                    class="rounded-circle"
                  />
                </div>
              </div>
            </div>
            <br /><br /><br /><br />
            <div class="text-center mt-5">
              <h3>Painel de Administradores</h3>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <h6>Orçamentos Pendentes:</h6>

              <div class="row justify-content-center">




              <!-- <b-table striped hover :items="orcamentos"></b-table> -->
<table class="table" style="margin-top: 2%">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Nome Empresa</th>
      <th scope="col">Telefone</th>
      <th scope="col">Templates</th>
      <th scope="col">Data de Cadastro</th>
    </tr>
  </thead>

                <tbody>
                <tr v-for="orcamento of orcamentos" :key="orcamento.id">
                <td>{{ orcamento.id }}</td>
                <td>{{ orcamento.nome }}</td>
                <td>{{ orcamento.nomeEmpresa }}</td>
                <td>{{ orcamento.telefone }}</td>
                <td>{{ orcamento.templates }}</td>
                <td>{{ new Date(orcamento.dataCriacao).toLocaleString() }}</td>
                </tr>
                </tbody>
</table>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import Tab from '../components/Tabs/Tab.vue';
import Orcamentos from "../services/orcamentos";

export default {
  data() {
    return {
      orcamentos: []
    };
  },
  mounted() {
    
    if(localStorage.getItem('ACCESS_GRANTEED') != "ACCESS_GRANTEED"){
      this.$toastr.e("Usuário sem permissão de acesso! Realize o Login e tente novamente.");
      this.$router.push('/inicio')
    }
    Orcamentos.listar().then((response) => {
      console.log(response.data.data);
      this.orcamentos = response.data.data;
    });
  },
};
</script>
<style>
</style>
