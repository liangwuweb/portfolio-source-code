<template>
  <div id="app">
    <transition enter-active-class="animate__animated animate__slideInDown animate__faster" leave-active-class="animate__animated animate__slideOutUp">
      <div v-if="showLoader" class="loader justify-content-center d-flex align-items-center font-weight-bold text-dark">
        <spinner></spinner>
      </div>
    </transition>

    <!-- <desktop-nav ref="secondChild"></desktop-nav> -->
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
// import DesktopNav from "./components/DesktopNav";

export default {
  name: "App",
  data: function () {
    return {
      //default is true
      showLoader: false,
    };
  },
  components: {
    Background,
    Spinner,
    // DesktopNav,
  },
  computed: {
  },
  methods: {
    goHome: function () {
      console.log(this.$refs.child.menuOpen);
      console.log(window.origin);
      this.showLoader = true;
      setTimeout(() => {
        if (this.showLoader === true) {
          this.showLoader = !this.showLoader;
        }
      }, 3000);
      setTimeout(() => {
        this.$refs.child.menuOpen = false;
        location.href = window.origin;
      }, 500);
    },
  },
  mounted() {
    // const _this = this;
    // setTimeout(function () {
    //   _this.showLoader = !_this.showLoader;
    // }, 5000);
  },
};
</script>

<style lang="scss">
body {
  background: #292929;
  background-image: radial-gradient(#247718 1.5px, transparent 1.5px);
  background-size: 30px 30px;
  background-position: center;
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
