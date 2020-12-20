<template>
  <div class="login bg-light">
    <div class="row">
      <div class="col-sm">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Correo:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Nombre(s)"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Nombre de usuario:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              placeholder="Nombre de usuario"
              v-model="form.username"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Estado:" label-for="input-6">
            <b-form-select
              id="input-6"
              v-model="form.state"
              :options="stateOptions"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Contraseña:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              placeholder="Contraseña"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Confirmar contraseña:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              placeholder="Confirmar contraseña"
              v-model="form.passwordConf"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
      <div class="col-sm">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Correo:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="Contraseña:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              placeholder="Contraseña"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      form: {
        email: "",
        name: "",
        username: "",
        state: null,
        password: "",
        passwordConf: "",
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
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.login {
  padding: 5em 3em 0;
}
body {
  background-color: var(--light);
}
</style>