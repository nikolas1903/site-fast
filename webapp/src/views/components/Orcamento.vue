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
      <div class="container" style="margin-top: -22%">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="text-center mt-5">
              <h2>Faça seu Orçamento!</h2>
            </div>

            <div class="mt-4 py-5">
              <form @submit.prevent="cadastrar">
                <b-row>
                  <b-col md="6">
                    <b-form-group
                      name="Nome"
                      type="text"
                      label="Nome Completo:"
                    >
                      <b-form-input
                        type="text"
                        maxlength="50"
                        v-model="orcamento.nome"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="3">
                    <b-form-group
                      name="cpf"
                      type="text"
                      id="fieldset-1"
                      label="CPF:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        name="cpf"
                        type="text"
                        maxlength="14"
                        v-model="orcamento.cpf"
                        v-mask="'###.###.###-##'"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="3">
                    <b-form-group
                      name="celular"
                      type="text"
                      id="fieldset-1"
                      label="Telefone Celular:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        maxlength="16"
                        v-mask="'(##) # ####-####'"
                        name="celular"
                        v-model="orcamento.telefone"
                        type="text"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="4">
                    <b-form-group
                      name="email"
                      type="text"
                      id="fieldset-1"
                      label="E-Mail:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        type="text"
                        maxlength="40"
                        name="email"
                        v-model="orcamento.email"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="4">
                    <b-form-group
                      name="ramo"
                      type="text"
                      id="fieldset-1"
                      label="Ramo do seu Negócio:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        name="ramo"
                        v-model="orcamento.ramo"
                        maxlength="50"
                        type="text"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="4">
                    <b-form-group
                      name="empresa"
                      type="text"
                      id="fieldset-1"
                      label="Nome da Empresa:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        name="empresa"
                        v-model="orcamento.nomeEmpresa"
                        maxlength="50"
                        type="text"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="4">
                    <b-form-group label="Templates Preferidos:">
                      <b-form-checkbox-group
                        id="checkboxTemplates"
                        v-model="orcamento.templates"
                        name="templates"
                        type="text"
                      >
                        <b-form-checkbox value=" Vegas"
                          >Template Advogado Vegas</b-form-checkbox
                        >
                        <b-form-checkbox value=" Texas"
                          >Template Advogado Texas</b-form-checkbox
                        >
                        <b-form-checkbox value=" Washington"
                          >Template Advogado Washington</b-form-checkbox
                        >
                        <b-form-checkbox value=" London"
                          >Template General London</b-form-checkbox
                        >
                        <b-form-checkbox value=" Paris"
                          >Template Now Paris</b-form-checkbox
                        >
                        <b-form-checkbox value=" Dubai"
                          >Template Argon Dubai</b-form-checkbox
                        >
                        <b-form-checkbox value=" Roma"
                          >Template Mirko Roma</b-form-checkbox
                        >
                        <b-form-checkbox value=" Miami"
                          >Template LandMark Miami</b-form-checkbox
                        >
                        <b-form-checkbox value=" Milao"
                          >Template Spify Milão</b-form-checkbox
                        >
                        <b-form-checkbox value=" Cancun"
                          >Template Restaurant Cancun</b-form-checkbox
                        >
                        <b-form-checkbox value=" Madrid"
                          >Template Favison Madrid</b-form-checkbox
                        >
                        <b-form-checkbox value=" Moscou"
                          >Template Gym Moscou</b-form-checkbox
                        >
                      </b-form-checkbox-group>
                    </b-form-group>
                  </b-col>

                  <b-col md="8">
                    <b-form-group label="Alguma sugestão para a StudioWeb?">
                      <b-form-textarea
                        id="textarea"
                        type="text"
                        name="sugestao"
                        maxlength="500"
                        placeholder="Escreva algo..."
                        rows="5"
                        max-rows="6"
                        v-model="orcamento.sugestao"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="text-center" style="margin-top: 4%">
                  <button class="btn-1" type="submit">
                    Solicitar Orçamento
                  </button>
                </div>
              </form>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>



<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import OrcamentoService from "../../services/orcamentos";

export default {
  data() {
    return {
      selected: [],
      options: [],
      orcamento: {
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        ramo: "",
        nomeEmpresa: "",
        templates: [],
        sugestao: "",
      },
    };
  },
  methods: {
    cadastrar() {
      OrcamentoService.cadastrar(this.orcamento).then((response) => {
        if (response.data.success == true) {
          this.$toastr.s(response.data.message);

          this.$router.push("/sucesso");
        } else {
          this.$toastr.e(response.data.message);
        }
      });
    },
  },
  components: {
    Tabs,
    TabPane,
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.btn-1 {
  background-color: #330968;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
}
</style>