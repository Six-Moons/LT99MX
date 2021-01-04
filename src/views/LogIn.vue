<template>
  <div class="login bg-light">
    <div class="row">
      <div class="col-sm">
        <h2>Crear Cuenta</h2>
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
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="registration-name-group"
            label="Nombre:"
            label-for="registration-name"
          >
            <b-form-input
              id="registration-name"
              v-model="registrationData.name"
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
export default {
  name: "LogIn",
  data() {
    return {
      name: "",
      registrationData: {
        email: "",
        name: "",
        username: "",
        state: null,
        password: "",
        passwordConfirmation: "",
      },
      loginData: {
        email: "",
        password: "",
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
      imgs: [
        { src: require("@/assets/imgs/schezo.png"), alt: "Imagen de Schezo" },
        { src: require("@/assets/imgs/arle.png"), alt: "Imagen de Arle" },
        { src: require("@/assets/imgs/feli.png"), alt: "Imagen de Feli" },
        { src: require("@/assets/imgs/rulue.png"), alt: "Imagen de Rulue" },
      ],
      img: "",
    };
  },
  methods: {
    registrationSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.registrationData));
    },
    loginSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.loginData));
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