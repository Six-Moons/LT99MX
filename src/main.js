import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/style.css';
import router from './router';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
