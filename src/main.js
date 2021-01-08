import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "animate.css/animate.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn, faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faChevronRight, faArrowRight, faArrowLeft, faSpinner} from '@fortawesome/free-solid-svg-icons';

library.add(faFacebookF, faLinkedinIn, faFacebookSquare,faLinkedin, faChevronRight,faArrowRight, faArrowLeft, faSpinner);

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";


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
    },
    {
      path: "/project",
      component: Project
    },
    {
      path: "/contact",
      component: Contact
    }
  ]
}); 

import Popover from 'vue-js-popover';
Vue.use(Popover);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
