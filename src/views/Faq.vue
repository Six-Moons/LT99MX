<template>
  <div id="faq">
    <div class="row">
      <div id="preguntas" class="col-md-7 col-lg-8 bg-light">
        <div>Preguntas Frecuentes </div>
        <div class="row">
          <div class="col">
            <h2>Ola</h2>
            <p>ghjkl;'\'</p>
          </div>

          <div class="col">
            hola
            <img src="../assets/puntuaciones.jpeg"
              class="img-fluid"
              alt="Tabla de puntuaciones"
            >
          </div>
        </div>

        <div>p;a</div>
      </div>
      <right-panel class="col-5 col-lg-4 hide-sm"></right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from "../components/RightPanel.vue";

export default {
  name: "Faq",
  components: {
    RightPanel,
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  #faq {
    margin-top: 3em;
    
  }
}
</style>
