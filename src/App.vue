<template>
  <div id="app">
    <background></background>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Background from "./components/Background";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    Background,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 100vh;
}
</style>
