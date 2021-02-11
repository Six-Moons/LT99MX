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
            <div class="text-center">
              {{ name }} -
              {{ stateOptions.filter((elt) => elt.value === state)[0].text }}
            </div>
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
              :src="profile_data.photo_url"
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
            @change="updateAvatarSrc"
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
              id="profile-telephone-group"
              label="Celular:"
              label-for="profile-telephone"
            >
              <b-form-input
                id="profile-telephone"
                v-model="profile_data.telephone"
                type="tel"
                placeholder="Número de teléfono"
                :value="telephone"
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
import { getUserData, updateUserData, uploadUserPicture } from "../reqs/user";

export default {
  name: "Profile",
  components: { RightPanel },
  data() {
    return {
      username: null,
      email: null,
      favorite_badge: null,
      photo_url: null,
      name: null,
      state: null,
      description: null,
      telephone: null,
      recentMatches: [
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
      ],
      profile_data: {
        username: null,
        email: null,
        state: null,
        password: null,
        passwordConfirmation: null,
        description: null,
        telephone: null,
        photo_url: null,
      },
      stateOptions: [
        { text: "-- Selecciona uno -- ", value: null, disabled: true },
        { text: "Aguascalientes", value: "Aguascalientes" },
        { text: "Baja California", value: "BajaCalifornia" },
        { text: "Baja California Sur", value: "BajaCaliforniaSur" },
        { text: "Campeche", value: "Campeche" },
        { text: "Chiapas", value: "Chiapas" },
        { text: "Chihuahua", value: "Chihuahua" },
        { text: "Ciudad de México", value: "CiudadDeMexico" },
        { text: "Coahuila", value: "Coahuila" },
        { text: "Colima", value: "Colima" },
        { text: "Durango", value: "Durango" },
        { text: "Estado de México", value: "EstadoDeMexico" },
        { text: "Guanajuato", value: "Guanajuato" },
        { text: "Guerrero", value: "Guerrero" },
        { text: "Hidalgo", value: "Hidalgo" },
        { text: "Jalisco", value: "Jalisco" },
        { text: "Michoacán", value: "Michoacan" },
        { text: "Morelos", value: "Morelos" },
        { text: "Nayarit", value: "Nayarit" },
        { text: "Nuevo León", value: "NuevoLeon" },
        { text: "Oaxaca", value: "Oaxaca" },
        { text: "Puebla", value: "Puebla" },
        { text: "Querétaro", value: "Queretaro" },
        { text: "Quintana Roo", value: "QuintanaRoo" },
        { text: "San Luis Potosí", value: "SanLuisPotosi" },
        { text: "Sinaloa", value: "Sinaloa" },
        { text: "Sonora", value: "Sonora" },
        { text: "Tabasco", value: "Tabasco" },
        { text: "Tamaulipas", value: "Tamaulipas" },
        { text: "Tlaxcala", value: "Tlaxcala" },
        { text: "Veracruz", value: "Veracruz" },
        { text: "Yucatán", value: "Yucatan" },
        { text: "Zacatecas", value: "Zacatecas" },
        "Otro",
      ],
      photo_file: null,
    };
  },
  async mounted() {
    const userData = await getUserData();
    this.fillUserData(userData);
  },
  methods: {
    fillUserData(data) {
      this.profile_data.username = this.username = data.username;
      this.email = this.profile_data.email = data.email;
      this.telephone = this.profile_data.telephone = data.telefono;
      this.favorite_badge = data.insigniaFavorita;
      this.profile_data.name = this.name = data.nombre;
      this.profile_data.state = this.state = data.estado;
      this.profile_data.description = this.description = data.descripcion;
      this.photo_url = this.profile_data.photo_url =
        process.env.VUE_APP_API_URL +
        data.fotoDePerfil.formats.small.url.substring(1);
    },
    changePhoto() {
      document.querySelector("#photo-input").click();
    },
    updateAvatarSrc() {
      this.profile_data.photo_url = URL.createObjectURL(
        document.querySelector("#photo-input").files[0]
      );
    },
    validateChanged(edited, original) {
      return edited && edited !== original && edited !== "";
    },
    async saveEdits() {
      const changedData = {};

      if (this.photo_file) {
        const newPictureData = await uploadUserPicture(this.photo_file);
        this.photo_url =
          process.env.VUE_APP_API_URL +
          newPictureData.formats.small.url.substring(1);
        changedData.fotoDePerfil = newPictureData;
      }

      if (this.validateChanged(this.profile_data.username, this.username))
        changedData.username = this.profile_data.username;

      if (this.validateChanged(this.profile_data.email, this.email))
        changedData.email = this.profile_data.email;

      if (this.validateChanged(this.profile_data.telephone, this.telephone))
        changedData.telefono = this.profile_data.telephone;

      if (this.validateChanged(this.profile_data.state, this.state))
        changedData.estado = this.profile_data.state;

      if (
        this.profile_data.password &&
        this.profile_data.password === this.profile_data.passwordConfirmation
      )
        changedData.password = this.profile_data.password;

      if (this.validateChanged(this.profile_data.description, this.description))
        changedData.descripcion = this.profile_data.description;

      if (Object.keys(changedData).length) {
        await updateUserData(changedData);
      }

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
