<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="show-xs"
      fixed="top"
    >
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
      <left-panel
        class="col-1 col-xl-3 bg-dark hide-xs"
        :session="loggedIn"
        @loggedOut="updateSession"
      ></left-panel>
      <router-view class="col-sm-11 col-xl-9" @loggedIn="updateSession" />
    </div>
  </div>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue";
import { checkAuthenticated } from "./reqs/user";

export default {
  name: "App",
  components: { LeftPanel },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    updateSession(authenticated) {
      this.loggedIn = authenticated;
      console.log("Here");
    },
  },
  async created() {
    this.loggedIn = await checkAuthenticated();
  },
};
</script>

<style>
#app {
  overflow-x: hidden;
}

table.table-hover tbody tr:hover {
  background-color: var(--red);
  color: var(--light);
}
</style>
