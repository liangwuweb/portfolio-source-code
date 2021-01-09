<template>
  <div id="app">
    <transition enter-active-class="animate__animated animate__slideInDown animate__faster" leave-active-class="animate__animated animate__slideOutUp">
      <div v-if="showLoader" class="loader justify-content-center d-flex align-items-center font-weight-bold text-dark">
        <spinner></spinner>
      </div>
    </transition>

    <background ref="child" @goHome="goHome"></background>
    <!-- The main section will not render when showLoader is true -->
    <div v-if="!showLoader" class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Background from "./components/Background";
import Spinner from "./components/Spinner";

export default {
  name: "App",
  data: function () {
    return {
      showLoader: true,
    };
  },
  components: {
    Background,
    Spinner
  },
  computed: {},
  methods: {
    goHome: function () {
      console.log(this.$refs.child.menuOpen);
      this.showLoader = true;
      const _this = this;
      setTimeout(() => {
        if (_this.showLoader === true) {
          _this.showLoader = !_this.showLoader;
        }
      }, 3000);
      setTimeout(() => {
        this.$refs.child.menuOpen = false;
        location.href = "http://localhost:8089/#/";
      }, 500);
    },
  },
  mounted() {
    const _this = this;
    setTimeout(function () {
      _this.showLoader = !_this.showLoader;
    }, 5000);
  }
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

  .loader {
    background: $bg-black;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
}

.no-scroll {
  overflow: hidden;
}
</style>
