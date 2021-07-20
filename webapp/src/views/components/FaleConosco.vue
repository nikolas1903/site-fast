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
      <div class="container" style="margin-top: -8%">

        <div class="px-4">
          <div class="mt-4 py-5">
            <form action="https://api.staticforms.xyz/submit" method="POST">
              <input
                type="hidden"
                name="accessKey"
                value="eb172090-6ae5-4b51-9759-bdf00d2a8de0"
              />
              <input
                type="hidden"
                name="redirectTo"
                value="https://sitestudioweb.herokuapp.com/"
              />
              <b-row>
                <b-col md="6">
                  <b-form-group
                    name="Nome"
                    type="text"
                    id="fieldset-1"
                    label="Nome: "
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
              </b-row>
              <b-row>
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

                <b-col md="3">
                  <b-form-group
                    name="email"
                    type="mail"
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
              </b-row>

              <b-row>
                <b-col md="6">
                  <b-form-group label="Digite uma mensagem para nós!">
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

              <div>
                <button
                  style="
                    background-color: #330968;
                    border: none;
                    color: white;

                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 15px;
                    border-radius: 12px;
                    width: 80px;
                    height: 40px;
                  "
                  class="btn-1"
                  type="submit"
                >
                  Enviar!
                </button>
              </div>
            </form>
          </div>
        </div>
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
