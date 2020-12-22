import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faLinkedinIn);

import Home from "./components/Home"
import About from "./components/About"


Vue.use(VueRouter);
Vue.config.productionTip = false;


const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Home
    },
    {
      path: "/about",
      component: About
    }
  ]
}); 

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
