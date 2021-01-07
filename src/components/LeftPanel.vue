<template>
  <div id="left-panel">
    <div class="logo-div">
      <img
        src="../assets/logo.png"
        alt="Logo Liga Tetris 99 México"
        class="img-fluid"
      />
    </div>
    <b-nav vertical id="nav">
      <b-nav-item exact-active-class="active" to="/" link-classes="text-light">
        <div class="nav-div red show-xl">
          <tetromino :href="svgs.Z"></tetromino> Tetris
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-house-fill class="nav-icon i-red"></b-icon-house-fill>
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/rankings"
        link-classes="text-light"
      >
        <div class="nav-div orange show-xl">
          <tetromino :href="svgs.L"></tetromino> Rankings
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-trophy-fill class="nav-icon i-orange"></b-icon-trophy-fill>
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active text-dark"
        to="/noticias"
        link-classes="text-light"
      >
        <div class="nav-div yellow show-xl">
          <tetromino :href="svgs.O"></tetromino> Noticias
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-newspaper class="nav-icon i-yellow"></b-icon-newspaper>
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/faq"
        link-classes="text-light"
      >
        <div class="nav-div green show-xl">
          <tetromino :href="svgs.S"></tetromino> FAQ/Comentarios
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-question class="nav-icon i-green"></b-icon-question>
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/donaciones"
        link-classes="text-light"
      >
        <div class="nav-div blue show-xl">
          <tetromino :href="svgs.J"></tetromino> Donaciones
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-credit-card-fill
            class="nav-icon i-blue"
          ></b-icon-credit-card-fill>
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/mi-cuenta"
        link-classes="text-light"
        v-show="session"
      >
        <div id="mi-cuenta-link" class="nav-div purple show-xl">
          <tetromino :href="svgs.T"></tetromino> Mi cuenta
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-person-fill class="nav-icon i-purple"></b-icon-person-fill>
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/log-in"
        link-classes="text-light"
        v-show="!session"
      >
        <div id="iniciar-sesion-link" class="nav-div purple show-xl">
          <tetromino :href="svgs.T"></tetromino> Iniciar sesión
        </div>
        <div class="hide-xs hide-xl">
          <b-icon-person-fill class="nav-icon i-purple"></b-icon-person-fill>
        </div>
      </b-nav-item>
    </b-nav>
    <div class="show-xl logout">
      <a class="btn btn-lg btn-danger logout-btn" href="#Logout">
        Cerrar Sesión
      </a>
    </div>
  </div>
</template>

<script>
import Tetromino from "./Tetromino.vue";
export default {
  components: { Tetromino },
  name: "LeftPanel",
  props: ["session"],
  data() {
    return {
      svgs: {
        Z: require("@/assets/tetrominos/Z.svg"),
        L: require("@/assets/tetrominos/L.svg"),
        O: require("@/assets/tetrominos/O.svg"),
        S: require("@/assets/tetrominos/S.svg"),
        J: require("@/assets/tetrominos/J.svg"),
        T: require("@/assets/tetrominos/T.svg"),
      },
    };
  },
};
</script>

<style scoped>
#left-panel {
  height: 100vh;
}

@media (min-width: 1200px) {
  #nav {
    font-size: 1.7vw;
    color: var(--light);
  }
}

.logo-div {
  width: 3.4vw;
  height: 3.4vw;
  margin-left: 2.5vh;
  margin-top: 1em;
}

.logout {
  position: fixed;
  bottom: 1rem;
  font-size: 1.5rem;
  color: #fff;
  margin-left: calc(12.5vw - 4em);
  /* text-align: center; */
}

.logout-btn {
  border-radius: 9999px;
  width: 9em;
}

.nav-div {
  /* border-radius: 9999px; */
  padding-left: 0.5em;
}

.nav-icon {
  width: 3.4vw;
  height: 3.4vw;
}

#nav li:hover > a > .red,
.active > .red {
  background-color: var(--red);
}

#nav li:hover > a > div > .i-red,
.active > div > .i-red {
  fill: var(--red);
}

#nav li:hover > a > .orange,
.active > .orange {
  background-color: var(--orange);
}

#nav li:hover > a > div > .i-orange,
.active > div > .i-orange {
  fill: var(--orange);
}

#nav li:hover > a > .yellow,
.active > .yellow {
  background-color: var(--yellow);
  color: var(--dark);
}

#nav li:hover > a > div > .i-yellow,
.active > div > .i-yellow {
  fill: var(--yellow);
}

#nav li:hover > a > .green,
.active > .green {
  background-color: var(--green);
}

#nav li:hover > a > div > .i-green,
.active > div > .i-green {
  fill: var(--green);
}

#nav li:hover > a > .blue,
.active > .blue {
  background-color: var(--blue);
}

#nav li:hover > a > div > .i-blue,
.active > div > .i-blue {
  fill: var(--blue);
}

#nav li:hover > a > .purple,
.active > .purple {
  background-color: var(--purple);
}

#nav li:hover > a > div > .i-purple,
.active > div > .i-purple {
  fill: var(--purple);
}

#nav li:hover > a > div > .rotate {
  animation: 0.5s linear 0s 1 normal rotate_tetromino;
}

@keyframes rotate_tetromino {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>