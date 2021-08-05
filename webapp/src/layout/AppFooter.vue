<template>
    <footer class="footer has-cards">
        
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Agradeçemos sua visita!</h3>
                    <h4 class="mb-0 font-weight-light">Vamos manter contato por outras plataformas?</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://instagram.com/studioweb.digital"
                       class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Siga a gente!">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <!-- <a target="_blank" rel="noopener" href="https://twitter.com/studioweb.digital"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Siga a gente!">
                        <i class="fa fa-twitter"></i>
                    </a> -->
                    <!-- <a target="_blank" rel="noopener" href="https://www.facebook.com/studioweb.digital"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Siga a gente!">
                        <i class="fa fa-facebook-square"></i>
                    </a> -->
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://studioweb.digital" target="_blank" rel="noopener">Studio Web Digital - Desenvolvimento de Softwares</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link to="/inicio" class="nav-link" target="_blank" rel="noopener">Studio Web Digital</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/sobre-nos" class="nav-link" target="_blank" rel="noopener">Sobre Nós</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin" class="nav-link" target="_blank" rel="noopener">Painel de Administradores</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
