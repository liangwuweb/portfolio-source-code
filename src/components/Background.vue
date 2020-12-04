<template>
  <div class="outer-wrap">
    <div v-if="menuOpen">
      <navigation></navigation>
    </div>

    <div class="navbar">
      <img src="../assets/logo.svg" alt="logo" />
      <div
        class="nav-icon"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="main">
      <div class="wrap d-flex align-items-center justify-content-center">
        <h4 class="font-weight-bold">
          Some thing to <span style="color: #3ecc28">say</span>
        </h4>
      </div>
      <div class="container-fluid">
        <div class="social-icon">
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'facebook-f' }"
          />
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navigation from "./Navigation";

export default {
  name: "background",
  data: function () {
    return {
      menuOpen: false,
    };
  },
  components: {
    FontAwesomeIcon,
    Navigation,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
.outer-wrap {
  background: #292929;
  height: 100vh;
  color: #fff;

  .navbar {
    height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid #3ecc28;
    position: fixed;
    width: 100%;
    z-index: 888;

    .nav-icon {
      width: 30px;
      height: 9px;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        height: 1px;
        width: 100%;
        background: #3ecc28;
        border-radius: 0px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        cursor: pointer;
        &:nth-of-type(1) {
          top: 0;
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          top: 4px;
        }
        &:nth-of-type(4) {
          top: 8px;
        }
      }
    }

    .open {
      span:nth-of-type(1) {
        top: 4px;
        width: 0%;
        left: 50%;
      }

      span:nth-of-type(2) {
        transform: rotate(45deg);
      }

      span:nth-of-type(3) {
        transform: rotate(-45deg);
      }

      span:nth-of-type(4) {
        top: 4px;
        width: 0%;
        left: 50%;
      }
    }
  }
}

.main {
  height: 100%;
  height: calc(100vh - 50px);
  bottom: 0;
  position: absolute;
  right: 0;
  left: 0;

  .wrap {
    width: inherit;
    height: 100%;
    z-index: 666;
    position: relative;
  }

  .container-fluid {
    height: calc(100vh - 50px);
    background-image: radial-gradient(#247718 1.5px, transparent 1.5px);
    background-size: 30px 30px;
    background-position: center;
    position: absolute;
    bottom: 0;

    .social-icon {
      position: absolute;
      bottom: 20px;
      right: 15px;
      cursor: pointer;
      z-index: 666;

      .fa-facebook-f {
        margin-right: 30px;
      }
    }
  }
}
</style>
