import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

let data = {
  user: null,
};

Vue.use(BootstrapVue);

new Vue({
  data,
  router,
  render: (h) => h(App),
}).$mount("#app");
