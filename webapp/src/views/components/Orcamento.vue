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
              <!-- <div>
                <i class="ni education_hat mr-2"></i>Desenvolvimento de
                Aplicativos Mobile
              </div> -->
            </div>

            <div class="mt-4 py-5">
              <b-row>
                <b-col md="6">
                  <b-form-group
                    name="nome"
                    id="fieldset-1"
                    label="Nome Completo:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="nome"
                      :state="state"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="3">
                  <b-form-group
                    name="cpf"
                    maxlength="14"
                    id="fieldset-1"
                    v-mask="'###.###.###-##'"
                    label="CPF:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="cpf"
                      :state="state"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="3">
                  <b-form-group
                    name="celular"
                    id="fieldset-1"
                    label="Telefone Celular:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="celular"
                      :state="state"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="4">
                  <b-form-group
                    name="email"
                    id="fieldset-1"
                    label="E-Mail:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="email"
                      :state="state"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="4">
                  <b-form-group
                    name="name"
                    id="fieldset-1"
                    label="Ramo do seu Negócio:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="name"
                      :state="state"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="4">
                  <b-form-group
                    name="empresa"
                    id="fieldset-1"
                    label="Nome da Empresa:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="empresa"
                      :state="state"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="4">
                  <b-form-group label="Templates Preferidos:">
                    <b-form-checkbox-group
                      id="checkboxTemplates"
                      v-model="selected"
                      name="templates"
                    >
                      <b-form-checkbox value="vegas"
                        >Template Las Vegas</b-form-checkbox
                      >
                      <b-form-checkbox value="losAngeles"
                        >Template Los Angeles</b-form-checkbox
                      >
                      <b-form-checkbox value="washington"
                        >Template Washington</b-form-checkbox
                      >
                      <b-form-checkbox value="texas"
                        >Template Texas</b-form-checkbox
                      >
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-col>

                <b-col md="8">
                <b-form-group label="Alguma sugestão para a StudioWeb?">
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Escreva algo..."
                    rows="5"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                </b-col>
              </b-row>
              <div class="text-center" style="margin-top: 4%">
              <base-button class="btn-1" type="primary"
                >Solicitar Orçamento</base-button
              >
              </div>
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
export default {
  data() {
    return {
      selected: [],
      options: [
        { text: "Template Vegas", value: "vegas" },
        { text: "Template Los Angeles", value: "losAngeles" },
        { text: "Template Washington", value: "washington" },
        { text: "Template Texas", value: "texas" },
      ],
    };
  },
  components: {
    Tabs,
    TabPane,
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
