import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faLinkedinIn);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
