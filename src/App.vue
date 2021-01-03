<template>
  <div id="app">
    <background></background>
    <router-view></router-view>
  </div>
</template>

<script>
import Background from "./components/Background";

export default {
  name: "App",
  data: function() {
    return {
    }
  },
  components: {
    Background,
  },
  computed: {
  },
};
</script>

<style lang="scss">
body {
    background: #292929 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  width: 100%;
  height: 100vh;
}

.no-scroll {
  overflow: hidden;
}
</style>
