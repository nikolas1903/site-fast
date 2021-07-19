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
              <form action="https://api.staticforms.xyz/submit" method="POST">
              <input type="hidden" name="accessKey" value="eb172090-6ae5-4b51-9759-bdf00d2a8de0"> 
              <input type="hidden" name="redirectTo" value="https://sitestudioweb.herokuapp.com/">
                <b-row>
                  <b-col md="6">
                    <b-form-group
                      name="Nome"
                      type="text"
                      id="fieldset-1"
                      label="Nome Completo:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        type="text" 
                        maxlength="50"
                        name="$name"
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
                        name="$cpf"
                        type="text"
                        maxlength="14"
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
                        name="$celular"
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
                        name="$ramo"
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
                        name="$empresa"
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
                        name="$templates"
                        type="text"
                      >
                        <b-form-checkbox value="vegas"
                          >Template Advogado Vegas</b-form-checkbox
                        >
                        <b-form-checkbox value="texas"
                          >Template Advogado Texas</b-form-checkbox
                        >
                        <b-form-checkbox value="washington"
                          >Template Advogado Washington</b-form-checkbox
                        >
                        <b-form-checkbox value="london"
                          >Template General London</b-form-checkbox
                        >
                        <b-form-checkbox value="paris"
                          >Template Now Paris</b-form-checkbox
                        >
                        <b-form-checkbox value="dubai"
                          >Template Argon Dubai</b-form-checkbox
                        >
                        <b-form-checkbox value="roma"
                          >Template Mirko Roma</b-form-checkbox
                        >
                        <b-form-checkbox value="miami"
                          >Template LandMark Miami</b-form-checkbox
                        >
                        <b-form-checkbox value="milao"
                          >Template Spify Milão</b-form-checkbox
                        >
                        <b-form-checkbox value="cancun"
                          >Template Restaurant Cancun</b-form-checkbox
                        >
                        <b-form-checkbox value="madrid"
                          >Template Favison Madrid</b-form-checkbox
                        >
                        <b-form-checkbox value="moscou"
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
                        name="$sugestao"
                        maxlength="500"
                        placeholder="Escreva algo..."
                        rows="5"
                        max-rows="6"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="text-center" style="margin-top: 4%">
                <button
                  style="
                    background-color: #330968;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                  "
                  class="btn-1"
                  type="submit"
                  >Solicitar Orçamento</button
                >
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
export default {
  data() {
    return {
      selected: [],
      options: [],
    };
  },
  components: {
    Tabs,
    TabPane,
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
