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
      <b-nav-item
        exact-active-class="active"
        to="/"
        link-classes="red text-light"
      >
        <div><tetromino :href="svgs.Z"></tetromino> Tetris</div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/rankings"
        link-classes="orange text-light"
      >
        <div><tetromino :href="svgs.L"></tetromino> Rankings</div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active text-dark"
        to="/noticias"
        link-classes="yellow text-light"
      >
        <div><tetromino :href="svgs.O"></tetromino> Noticias</div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/faq"
        link-classes="green text-light"
      >
        <div><tetromino :href="svgs.S"></tetromino> FAQ/Comentarios</div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/donaciones"
        link-classes="blue text-light"
      >
        <div><tetromino :href="svgs.J"></tetromino> Donaciones</div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/mi-cuenta"
        link-classes="purple text-light"
        v-show="session"
      >
        <div id="mi-cuenta-link">
          <tetromino :href="svgs.T"></tetromino> Mi cuenta
        </div>
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        to="/log-in"
        link-classes="purple text-light"
        v-show="!session"
      >
        <div id="iniciar-sesion-link">
          <tetromino :href="svgs.T"></tetromino> Iniciar sesión
        </div>
      </b-nav-item>
    </b-nav>
    <div class="logout">
      <a class="btn btn-lg btn-danger logout-btn" href="#Logout"
        >Cerrar Sesión</a
      >
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
        Z:
          "https://upload.wikimedia.org/wikipedia/commons/6/61/Tetromino_Z.svg",
        L:
          "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tetromino_L.svg",
        O:
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Tetromino_O.svg",
        S:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tetromino_S.svg",
        J:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Tetromino_J.svg",
        T:
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Tetromino_T.svg",
      },
    };
  },
};
</script>

<style scoped>
#left-panel {
  height: 100vh;
}

.logo-div {
  width: 5vh;
  height: 5vh;
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

#nav {
  font-size: 1.7vw;
  color: var(--light);
  margin-left: 3vw;
}

.red > div {
  width: 9vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#nav li:hover > a.red > div,
.active.red > div {
  background-color: var(--red);
}

.orange > div {
  width: 12vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#nav li:hover > a.orange > div,
.active.orange > div {
  background-color: var(--orange);
}

.yellow > div {
  width: 11vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#nav li:hover > a.yellow > div,
.active.yellow > div {
  background-color: var(--yellow);
}

.green > div {
  width: 19.5vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#nav li:hover > a.green > div,
.active.green > div {
  background-color: var(--green);
}

.blue > div {
  width: 14.5vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#nav li:hover > a.blue > div,
.active.blue > div {
  background-color: var(--blue);
}

#mi-cuenta-link {
  width: 12.5vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#iniciar-sesion-link {
  width: 15.5vw;
  border-radius: 9999px;
  padding-left: 0.5em;
}

#nav li:hover > a.purple > div,
.active.purple > div {
  background-color: var(--purple);
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