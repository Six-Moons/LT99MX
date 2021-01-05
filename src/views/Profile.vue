<template>
  <div class="profile">
    <div class="row">
      <div id="profile-area" class="col-lg-8">
        <!-- <h1>Perfil</h1> -->
        <div class="row">
          <div class="col-7 row">
            <div id="username" class="col-sm-8">{{ username }}</div>
            <div class="col-sm-4">{{ favorite_badge }}</div>
            <hr />
          </div>
          <div class="col-5 foo hide-sm">
            <button
              id="edit-profile"
              class="btn btn-primary"
              v-b-modal.profile-editor
            >
              Editar
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-7">
            <div>
              <b-img
                :src="photo_url"
                fluid
                rounded
                :alt="`Foto de ${username}`"
              ></b-img>
            </div>
            <hr />
            <div class="text-center">{{ name }} - {{ state }}</div>
            <hr />
          </div>
          <div class="col-sm-5">
            <div>Ranking</div>
            <hr />
            <div>
              Partidas recientes
              <b-table :items="recentMatches"></b-table>
            </div>
            <hr />
            <div>Insignias</div>
            <hr />
          </div>
        </div>
        <div>
          Descripción
          <p>{{ description }}</p>
        </div>
        <div class="foo hide-lg">
          <button id="edit-profile" class="btn btn-primary">Editar</button>
        </div>
        <b-modal id="profile-editor" title="Editar perfil">
          <div>
            <b-avatar
              button
              @click="changePhoto"
              :src="photo_url"
              size="6rem"
            ></b-avatar>
          </div>
          <b-form-file
            id="photo-input"
            v-model="photoFile"
            class="hidden"
            accept="image/*"
            plain
          ></b-form-file>
          <b-form @submit="registrationSubmit">
            <b-form-group
              id="registration-email-group"
              label="Correo:"
              label-for="registration-email"
            >
              <b-form-input
                id="registration-email"
                v-model="registrationData.email"
                type="email"
                placeholder="correo@ejemplo.com"
                :value="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="registration-username-group"
              label="Nombre de usuario:"
              label-for="registration-username"
            >
              <b-form-input
                id="registration-username"
                placeholder="Nombre de usuario"
                v-model="registrationData.username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="registration-state-group"
              label="Estado:"
              label-for="registration-state"
            >
              <b-form-select
                id="registration-state"
                v-model="registrationData.state"
                :options="stateOptions"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="registration-password-group"
              label="Contraseña:"
              label-for="registration-password"
            >
              <b-form-input
                id="registration-password"
                placeholder="Contraseña"
                v-model="registrationData.password"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="registration-password-confirmation-group"
              label="Confirmar contraseña:"
              label-for="registration-password-confirmation"
            >
              <b-form-input
                id="registration-password-confirmation"
                placeholder="Confirmar contraseña"
                v-model="registrationData.passwordConfirmation"
                type="password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-modal>
      </div>
      <right-panel class="col-4 hide-sm"></right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from "../components/RightPanel.vue";

export default {
  name: "Profile",
  components: { RightPanel },
  data() {
    return {
      username: "AAAAAAAAAAAA",
      favorite_badge: "🥇",
      photo_url:
        "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/cat-breading11.jpg",
      name: "Fulano Pérez",
      state: "Tlaxcala",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula quam diam, sit amet egestas nisi volutpat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac neque id enim volutpat dapibus facilisis sed diam. Donec lorem mi, auctor vel nisl eu, sagittis efficitur massa. Maecenas ac. ",
      recentMatches: [
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
      ],
      registrationData: {
        email: "cuchicuchi42@gmail.com",
        username: "",
        state: null,
        password: "",
        passwordConfirmation: "",
      },
      stateOptions: [
        { text: "-- Selecciona uno -- ", value: null, disabled: true },
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Ciudad de México",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas",
        "Otro",
      ],
      photoFile: null,
    };
  },
  mounted() {
    this.registrationData.username = this.username;
    this.registrationData.state = this.state;
  },
  methods: {
    changePhoto() {
      console.log("AAAAAAAAAAAA");
      document.querySelector("#photo-input").click();
    },
  },
};
</script>

<style scoped>
.foo {
  text-align: right;
}

#profile-area {
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 1.5em 3em;
  background-color: var(--light);
}

#profile-area::-webkit-scrollbar {
  display: none;
}

#username {
  font-size: 3vh;
}

@media (max-width: 576px) {
  .profile {
    margin-top: 3em;
  }
}
</style>
