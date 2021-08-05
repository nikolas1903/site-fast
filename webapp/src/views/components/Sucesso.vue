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
      <div class="container" style="margin-top: -25%">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="text-center mt-5">
              <h2 class="display-3">Agradecemos seu contato! </h2>
              <!-- <div>
                <i class="ni education_hat mr-2"></i>Desenvolvimento de
                Aplicativos Mobile
              </div> -->
            </div>
            <hr />
            <div class="text-center mt-4 py-5">
              <img
                style="margin-top: -8%; height: 200px"
                src="../../assets/images/service_4.gif"
              />
              <p class="lead text-muted">Em até dois dias úteis entraremos em contato <br>com seu orçamento completo!</p>
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
