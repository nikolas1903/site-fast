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
              <h6>Editar Orçamentos:</h6>
              <div class="row justify-content-center">
                <div class="col-lg-12">

                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orcamentos: [],
      fieldsOrcamento: [
        { key: "actions", label: "Ações" },
        { key: "nome", label: "Nome" },
        { key: "cpf", label: "CPF" },
        { key: "celular", label: "Celular" },
        { key: "email", label: "E-Mail" },
        { key: "ramo", label: "Ramo" },
        { key: "empresa", label: "Empresa" },
        { key: "templates", label: "Templates" },
        { key: "sugestao", label: "Sugestão" },
      ],
    };
  },
};
</script>
<style>
</style>
