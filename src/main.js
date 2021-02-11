import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueSimpleMarkdown from "vue-simple-markdown";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSimpleMarkdown);

import "@/assets/style.scss";
import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
