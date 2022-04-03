<template>
  <div id="app">
    <transition enter-active-class="animate__animated animate__slideInDown animate__faster" leave-active-class="animate__animated animate__slideOutUp">
      <div v-if="showLoader" class="loader justify-content-center d-flex align-items-center font-weight-bold text-dark">
        <spinner></spinner>
      </div>
    </transition>

    <background ref="child" @goHome="goHome" :loaderStatus="showLoader"></background>
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
      showLoader: true,
    };
  },
  components: {
    Background,
    Spinner,
    // DesktopNav,
  },
  computed: {},
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
    const _this = this;
    setTimeout(function () {
      _this.showLoader = !_this.showLoader;
    }, 5000);

    // Make sure active pseduo class works on mobile
    addEventListener("touchstart", function() {},false);
  },
  destroyed() {
    removeEventListener("touchstart", function() {},false);
  }
};
</script>

<style lang="scss">
body {
  background: #ecf0f1;
  // background-image: radial-gradient(#247718 1.5px, transparent 1.5px);
  background-size: 30px 30px;
  background-position: center;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  // Prevent Zoom in gesture in mobile IOS safari and chorme
  touch-action: pan-x pan-y;
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
    position: fixed;
    z-index: 1100;
  }
}

.no-scroll {
  overflow: hidden;
}

.flickity-button {
  background: $green !important;
}
</style>
