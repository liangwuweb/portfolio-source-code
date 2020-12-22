<template>
  <div id="app">
    <!-- <h1>{{ $route.path }}</h1> -->
    <background></background>
    <router-view></router-view>
  </div>
</template>

<script>
import Background from "./components/Background";

export default {
  name: "App",
  components: {
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
