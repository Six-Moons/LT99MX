<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="hide-lg">
      <b-navbar-brand to="/">LT99MX</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact-active-class="active">Tetris</b-nav-item>
          <b-nav-item to="/rankings" exact-active-class="active">
            Rankings
          </b-nav-item>
          <b-nav-item to="/noticias" exact-active-class="active">
            Noticias
          </b-nav-item>
          <b-nav-item to="/faq" exact-active-class="active">
            FAQ/Comentarios
          </b-nav-item>
          <b-nav-item to="/donaciones" exact-active-class="active">
            Donaciones
          </b-nav-item>
          <b-nav-item to="/mi-cuenta" exact-active-class="active">
            Mi cuenta
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="row">
      <left-panel class="col-3 hide-sm"></left-panel>
      <router-view class="col-lg-9" />
    </div>
  </div>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue";

export default {
  name: "App",
  components: { LeftPanel },
};
</script>
<style>
#app {
  overflow-x: hidden;
}

@font-face {
  font-family: "HomepageBaukasten";
  src: local("HomepageBaukasten"),
    url(./assets/fonts/HomepageBaukasten-Book.ttf) format("truetype");
}

@font-face {
  font-family: "HomepageBaukasten-bold";
  src: local("HomepageBaukasten-bold"),
    url(./assets/fonts/HomepageBaukasten-Bold.ttf) format("truetype");
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}

@media (max-width: 991px) {
  .hide-sm {
    display: none;
  }
}

@media (min-width: 992px) {
  .hide-lg {
    display: none !important;
  }
}
</style>

