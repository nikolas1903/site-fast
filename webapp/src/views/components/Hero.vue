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
    
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center" style="margin-top: -13%">
          <div class="col-lg-8 text-center pt-lg">
 
            <img
              src="../../assets/images/logoNome.png"
              style="width: 360px"
              class="img-fluid"
            />
            <p class="lead text-white mt-4 mb-5">
              Desenvolvendo de forma rápida a identidade visual da sua empresa!
            </p>
            <div class="btn-wrapper">
              <router-link to="/portfolio">
              <base-button
                tag="a"
                href="#"
                class="mb-3 mb-sm-0"
                type="info"
                icon="fa fa-book"
              >
                Portfólio
              </base-button>
              </router-link>

              
              <router-link to="/orcamento">
              <base-button
                tag="a"
                href="#"
                style="margin-left: 2%"
                class="mb-3 mb-sm-0"
                type="white"
                icon="fa fa-dollar"
              >
                Faça um Orçamento
              </base-button>
              </router-link>
              
            </div>
          </div>
        </div>
        <!-- <div
          class="row align-items-center justify-content-around stars-and-coded"
        >
          <div class="col-sm-4">
            <span class="text-white alpha-7 ml-3">Star us on</span>
            <a
              href="https://github.com/creativetimofficial/argon-design-system"
              target="_blank"
              title="Support us on Github"
            >
              <img
                src="img/brand/github-white-slim.png"
                style="height: 22px; margin-top: -3px"
              />
            </a>
          </div>
          <div class="col-sm-4 mt-4 mt-sm-0 text-right">
            <span class="text-white alpha-7">Desenvolvido por:</span>
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              title="Creative Tim - Premium Bootstrap Themes and Templates"
            >
              <img
                src="../../assets/images/logoNome.png"
                class="ml-3"
                style="height: 150px"
              />
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
