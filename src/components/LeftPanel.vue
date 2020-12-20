<template>
  <div class="left-panel">
    <div class="logo-div">
      <img
        src="../assets/logo.png"
        alt="Logo Liga Tetris 99 México"
        class="img-fluid"
      />
    </div>
    <ul class="nav-sidebar list-unstyled panel-nav">
      <router-link to="/" v-slot="{ href, navigate, isExactActive }">
        <li :class="[isExactActive && 'active']" class="red">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/6/61/Tetromino_Z.svg"
                width="1em"
                height="1em"
              />
            </svg>
            Tetris
          </a>
        </li>
      </router-link>
      <router-link to="/rankings" v-slot="{ href, navigate, isExactActive }">
        <li :class="[isExactActive && 'active']" class="orange">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/a/aa/Tetromino_L.svg"
                width="1em"
                height="1em"
              />
            </svg>
            Rankings
          </a>
        </li>
      </router-link>
      <router-link to="/noticias" v-slot="{ href, navigate, isExactActive }">
        <li :class="[isExactActive && 'active']" class="yellow">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/f/fc/Tetromino_O.svg"
                width="1em"
                height="1em"
              />
            </svg>
            Noticias
          </a>
        </li>
      </router-link>
      <router-link to="/faq" v-slot="{ href, navigate, isExactActive }">
        <li :class="[isExactActive && 'active']" class="green">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/d/d3/Tetromino_S.svg"
                width="1em"
                height="1em"
              />
            </svg>
            FAQ/Comentarios
          </a>
        </li>
      </router-link>
      <router-link to="/donaciones" v-slot="{ href, navigate, isExactActive }">
        <li :class="[isExactActive && 'active']" class="blue">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/f/fd/Tetromino_J.svg"
                width="1em"
                height="1em"
              />
            </svg>
            Donaciones
          </a>
        </li>
      </router-link>
      <router-link
        v-if="session"
        to="/mi-cuenta"
        v-slot="{ href, navigate, isExactActive }"
      >
        <li :class="[isExactActive && 'active']" class="purple">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/4/41/Tetromino_T.svg"
                width="1em"
                height="1em"
              />
            </svg>
            Mi cuenta
          </a>
        </li>
      </router-link>
      <router-link
        v-if="!session"
        to="/log-in"
        v-slot="{ href, navigate, isExactActive }"
      >
        <li :class="[isExactActive && 'active']" class="purple">
          <a :href="href" @click="navigate">
            <svg width="1em" height="1em" class="rotate">
              <image
                xlink:href="https://upload.wikimedia.org/wikipedia/commons/4/41/Tetromino_T.svg"
                width="1em"
                height="1em"
              />
            </svg>
            Iniciar sesión
          </a>
        </li>
      </router-link>
    </ul>
    <div class="logout">
      <a class="btn btn-lg btn-danger logout-btn" href="#Logout"
        >Cerrar Sesión</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftPanel",
  props: ["session"],
};
</script>

<style scoped>
.logout-btn {
  border-radius: 9999px;
  width: 100%;
}

.logo-div {
  width: 5vh;
  height: 5vh;
  margin-left: 2.5vh;
  margin-top: 1em;
}

.red.active,
.red:hover {
  background-color: var(--red);
  border-radius: 9999px;
}

.orange.active,
.orange:hover {
  background-color: var(--orange);
  border-radius: 9999px;
}

.yellow.active,
.yellow:hover,
.yellow.active > a,
.yellow:hover > a {
  background-color: var(--yellow);
  color: var(--dark);
  border-radius: 9999px;
}

.green.active,
.green:hover {
  background-color: var(--green);
  border-radius: 9999px;
}

.blue.active,
.blue:hover {
  background-color: var(--blue);
  border-radius: 9999px;
}

.purple.active,
.purple:hover {
  background-color: var(--purple);
  border-radius: 9999px;
}

.left-panel {
  font-family: "HomepageBaukasten-bold";
  height: 100vh;
  transition: all 0.3s;
  background-color: var(--dark);
}

li {
  width: 24vw;
  margin-left: 0em;
}

ul.panel-nav {
  list-style-type: none;
}

ul.logout {
  list-style-type: none;
}

ul.panel-nav > li > a {
  text-decoration: none;
  font-size: 3vh;
  display: block;
  padding-bottom: 0.5em;
  padding-left: 1em;
  color: var(--light);
}

a,
a:hover,
a:focus {
  /* color: inherit; */
  text-decoration: none;
  transition: all 0.3s;
}

.panel-nav {
  padding-top: 5%;
}

.logout {
  position: fixed;
  bottom: 1rem;
  font-size: 1.5rem;
  color: #fff;
  width: 11rem;
  margin-left: calc(12.5vw - 6rem);
}

a:hover > .rotate {
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
