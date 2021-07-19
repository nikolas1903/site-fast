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
                  <a href="https://instagram.com/studioweb.digital" target="_blank">
                    <img
                      v-lazy="'img/theme/4918050.jpg'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a href="https://instagram.com/studioweb.digital">
                  <base-button type="info" size="sm" class="mr-4"
                    >Seguir</base-button
                  >
                  </a>
                  <a href="https://instagram.com/studioweb.digital">
                  <base-button  type="default" size="sm" class="float-right"
                    >Mensagem</base-button
                  >
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">28</span>
                    <span class="description">Publicações</span>
                  </div>
                  <div>
                    <span class="heading">1.670</span>
                    <span class="description">Seguidores</span>
                  </div>
                  <div>
                    <span class="heading">21</span>
                    <span class="description">Seguindo</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>Studio Web</h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-1"></i>Porto Alegre, Rio Grande do
                Sul
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>Desenvolvimento de
                Aplicações Web
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>Desenvolvimento de
                Aplicativos Mobile
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <h2 class="mb-4">Quem Somos?</h2>
                  <p>
                    Somos uma agência digital especializada no desenvolvimento
                    de sites, apps e sistemas Web, ajudando sua empresa a ter
                    maior visibilidade dentro do mercado.<br /><br />
                    Nós da Studio Web Digital, dispomos de sólidos conhecimentos e
                    planejamento para projetos Web e Mobile, e contamos com um
                    time capacitado e forte para fazer o seu negócio bombar
                    ainda mais!
                  </p>
                  <hr />
                </div>
              </div>
              <div class="container" style="width: 70%">
                <!-- <tabs fill class="flex-column flex-md-row">
                  <card shadow slot-scope="{ activeTabIndex }">
                    <tab-pane key="tab1">
                      <template slot="title">
                        <i class="fa fa-check-circle"></i> Missão
                      </template>

                      <p class="description">
                        Promover soluções de qualidade, experiências inovadoras, com ética, comprometimento e respeito, visando reconhecimento nacional na área que nos encontramos.
                      </p>
                    </tab-pane>

                    <tab-pane key="tab2">
                      <template slot="title">
                        <i class="fa fa-lightbulb-o"></i> Visão
                      </template>

                      <p class="description">
                        Maecenas metus dui, placerat sit amet imperdiet ut, feugiat vel erat. Nulla ut neque dolor. Aliquam ac justo in nulla rutrum dapibus. Maecenas lacinia ligula non risus commodo vehicula. Etiam efficitur accumsan lectus. Vestibulum quis massa feugiat turpis fringilla consectetur. Aliquam ut magna nulla. Donec accumsan ex turpis, a mattis turpis dapibus ac. Aliquam erat volutpat. Integer mattis nibh ligula, quis convallis erat commodo vel. Maecenas feugiat feugiat felis, a venenatis est pharetra vitae. Praesent congue velit id pretium iaculis.
                      </p>
                    </tab-pane>

                    <tab-pane key="tab3">
                      <template slot="title">
                        <i class="fa fa-heart"> </i> Valores
                      </template>

                      <p class="description" >
                        • Responsabilidade;<br>
                        • Ética;<br>
                        • Criatividade;<br>
                        • Agilidade;<br>
                      </p>
                    </tab-pane>
                  </card>
                </tabs> -->
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
  components: {
    Tabs,
    TabPane,
  },
};
</script>
<style>
</style>
