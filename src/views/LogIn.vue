<template>
  <div class="login bg-light">
    <b-alert v-model="showAlert" variant="danger" dismissible>
      Las contraseñas no coinciden
    </b-alert>
    <div class="row">
      <div class="col-sm">
        <h2>Crear Cuenta</h2>
        <b-form @submit="registrationSubmit">
          <b-form-group
            id="registration-name-group"
            label="Nombre:"
            label-for="registration-name"
          >
            <b-form-input
              id="registration-name"
              v-model="registrationData.nombre"
              placeholder="Nombre(s)"
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
            id="registration-telephone-group"
            label="Celular"
            label-for="registration-telephone"
            description="Necesitamos tu teléfono para poder agregarte al grupo de Whatsapp por donde se pasarán los códigos."
          >
            <b-form-input
              id="registration-telephone"
              placeholder="Número de teléfono"
              type="tel"
              v-model="registrationData.telefono"
              required
            ></b-form-input>
          </b-form-group>

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
              v-model="registrationData.estado"
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

          <div class="form-btns">
            <b-button type="submit" variant="primary">Registrarse</b-button>
          </div>
        </b-form>
      </div>
      <div class="col-sm">
        <h2>Iniciar Sesión</h2>
        <b-form @submit="loginSubmit">
          <b-form-group
            id="login-email-group"
            label="Correo:"
            label-for="login-email"
          >
            <b-form-input
              id="login-email"
              v-model="loginData.email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="login-password-group"
            label="Contraseña:"
            label-for="login-password"
          >
            <b-form-input
              id="login-password"
              placeholder="Contraseña"
              v-model="loginData.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <div class="form-btns">
            <b-button type="submit" variant="primary">Iniciar Sesión</b-button>
          </div>
        </b-form>
      </div>
      <div id="waifu">
        <img :src="img.src" :alt="img.alt" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import { registerUser, loginUser } from "../reqs/auth";
import router from "../router";

export default {
  name: "LogIn",
  data() {
    return {
      name: "",
      registrationData: {
        email: "hocwilo@wojonooh.fr",
        nombre: "Adelaide Olson",
        username: "hocwilo",
        telefono: "4753131220",
        estado: null,
        password: "nO9lIyRL",
        passwordConfirmation: "nO9lIyRL",
      },
      loginData: {
        email: "hocwilo@wojonooh.fr",
        password: "nO9lIyRL",
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
      imgs: [
        { src: require("@/assets/imgs/schezo.png"), alt: "Imagen de Schezo" },
        { src: require("@/assets/imgs/arle.png"), alt: "Imagen de Arle" },
        { src: require("@/assets/imgs/feli.png"), alt: "Imagen de Feli" },
        { src: require("@/assets/imgs/rulue.png"), alt: "Imagen de Rulue" },
      ],
      img: "",
      showAlert: false,
    };
  },

  methods: {
    async registrationSubmit(event) {
      event.preventDefault();
      if (
        this.registrationData.password !==
        this.registrationData.passwordConfirmation
      ) {
        this.showAlert = true;
        return;
      }
      const status = await registerUser(this.registrationData);
      if (status === "Authenticated") {
        this.$emit("loggedIn", true);
        router.push("/");
      }
    },
    async loginSubmit(event) {
      event.preventDefault();
      const status = await loginUser(this.loginData);
      if (status === "Authenticated") {
        this.$emit("loggedIn", true);
        router.push("/");
      }
    },
  },
  mounted() {
    this.img = this.imgs[Math.floor(Math.random() * this.imgs.length)];
  },
};
</script>

<style scoped>
.login {
  padding: 5em 3em 0;
  background-color: var(--light);
}

.form-btns {
  text-align: center;
}

#waifu {
  position: absolute;
  right: 3em;
  bottom: 3em;
  height: 30vh;
  width: 30vh;
}
</style>