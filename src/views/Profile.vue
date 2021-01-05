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
        <div class="foo show-xs">
          <button
            id="edit-profile"
            class="btn btn-primary"
            v-b-modal.profile-editor
          >
            Editar
          </button>
        </div>
        <b-modal
          id="profile-editor"
          title="Editar perfil"
          cancel-title="Cancelar"
          ok-title="Guardar"
          ok-variant="success"
          @ok="saveEdits"
        >
          <div>
            <b-avatar
              button
              @click="changePhoto"
              :src="photo_url"
              size="6rem"
              badge-variant="dark"
            >
              <template #badge>
                <b-icon-pencil-fill></b-icon-pencil-fill>
              </template>
            </b-avatar>
          </div>
          <b-form-file
            id="photo-input"
            v-model="photo_file"
            class="hidden"
            accept="image/*"
            plain
          ></b-form-file>
          <div>
            <b-form-group
              id="profile-username-group"
              label="Nombre de usuario:"
              label-for="profile-username"
            >
              <b-form-input
                id="profile-username"
                placeholder="Nombre de usuario"
                v-model="profile_data.username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="profile-email-group"
              label="Correo:"
              label-for="profile-email"
            >
              <b-form-input
                id="profile-email"
                v-model="profile_data.email"
                type="email"
                placeholder="correo@ejemplo.com"
                :value="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="profile-state-group"
              label="Estado:"
              label-for="profile-state"
            >
              <b-form-select
                id="profile-state"
                v-model="profile_data.state"
                :options="stateOptions"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="profile-password-group"
              label="Contraseña:"
              label-for="profile-password"
            >
              <b-form-input
                id="profile-password"
                placeholder="Contraseña"
                v-model="profile_data.password"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="profile-password-confirmation-group"
              label="Confirmar contraseña:"
              label-for="profile-password-confirmation"
            >
              <b-form-input
                id="profile-password-confirmation"
                placeholder="Confirmar contraseña"
                v-model="profile_data.passwordConfirmation"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="profile-password-confirmation-group"
              label="Descripción:"
              label-for="profile-description"
            >
              <b-textarea
                id="profile-description"
                v-model="profile_data.description"
                placeholder="Descripción"
                max-rows="8"
              ></b-textarea>
            </b-form-group>
          </div>
        </b-modal>
      </div>
      <right-panel class="col-4 show-xl"></right-panel>
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
      photo_url: "http://placekitten.com/460/460",
      name: "Fulano Pérez",
      state: "Tlaxcala",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula quam diam, sit amet egestas nisi volutpat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac neque id enim volutpat dapibus facilisis sed diam. Donec lorem mi, auctor vel nisl eu, sagittis efficitur massa. Maecenas ac. ",
      recentMatches: [
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
      ],
      profile_data: {
        email: "cuchicuchi42@gmail.com",
        username: "",
        state: null,
        password: "",
        passwordConfirmation: "",
        description: "",
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
      photo_file: null,
    };
  },
  mounted() {
    this.profile_data.username = this.username;
    this.profile_data.state = this.state;
    this.profile_data.description = this.description;
  },
  methods: {
    changePhoto() {
      document.querySelector("#photo-input").click();
    },
    saveEdits() {
      console.log("Changes saved");

      // Change to corresponding POST requests ONCE BACK END IS READY
      this.username = this.profile_data.username;
      this.state = this.profile_data.state;
      this.description = this.profile_data.description;
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
