<template>
  <div class="background-wrap" :class="{ shrink: this.$route.path === '/project' }">
    <desktop-nav :deskMenuOpen="menuOpen" @toggleDeskMenu="toggleMenu()" @pageShift="pageShift"
      @goHomeDesk="goHomeDesk"></desktop-nav>
    <navigation :menuOpen="menuOpen" @pageShift="pageShift"></navigation>
    <div class="navbar d-lg-none" :class="{ 'change-color': menuOpen }">
      <svg @click="$emit('goHome')" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -19 122.1 168.3"
        style="enable-background:new 0 0 122.1 148.3;" xml:space="preserve">

        <g id="bottom">
          <path id="Path_363" class="st0"
            d="M85.6,53.4c-83-33.6-82.9,92.7-82.9,92.7C25.8,80.9,96.3,56,96.3,56L85.6,53.4z" />
          <path id="Path_365" class="st1"
            d="M96.1,56c0,0-26.2-10.8-39.4-8.1c-11,12.3-17.4,28-18.1,44.5C38.6,92.4,64.9,67.5,96.1,56z" />
        </g>
        <path id="top" class="st2" d="M38.6,92.1c9.9-6.3,20.7-11,32.1-13.9c18.4-4.6,36.1-13.7,45.5-37.3c7.6-19.3,0-39.6,0-39.6
	s-7.2,32-36.4,45.6S38.6,92.1,38.6,92.1z" />
      </svg>
      <h6 class="font-weight-bold my-0" style="color: rgb(96 207 51)">
        {{ navbarHeader }}
      </h6>
      <div class="nav-icon" :class="{ open: menuOpen }" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-background d-lg-none"></div>

    <div class="main">
      <div class="container-md">
        <div class="social-icon d-block d-flex flex-md-column  justify-content-between" :class="positionObj">
          <a class="github" href="https://github.com/liangwuweb" target="_blank">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
          </a>
          <a class="linkedin" href="https://www.linkedin.com/in/liang-wu-b16952149/" target="_blank">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navigation from "./Navigation";
import DesktopNav from "./DesktopNav";

export default {
  name: "background",
  data: function () {
    return {
      menuOpen: false,
      show: false,
      changeColor: "change-color",
    };
  },
  components: {
    FontAwesomeIcon,
    Navigation,
    DesktopNav,
  },
  computed: {
    positionObj: function () {
      return {
        // hide social icon on about and project page
        remove:
          (this.$route.path != "/about" &&
            this.$route.path != "/" &&
            this.$route.path != "/contact") ||
          this.$route.path === "/about",
      };
    },
    navbarHeader: function () {
      let headerName = this.$route.path;
      headerName = headerName.substring(1);
      headerName = headerName.charAt(0).toUpperCase() + headerName.slice(1);
      return headerName;
    },
  },
  methods: {
    pageShift: function () {
      const _this = this;
      setTimeout(function () {
        if (_this.menuOpen === true) {
          _this.menuOpen = !_this.menuOpen;
        } else {
          _this.menuOpen = _this.menuOpen;
        }
      }, 300);
    },
    scrollStatus: function () {
      if (this.menuOpen == true) {
        document.body.style.overflow = "hidden";
      } else if (this.menuOpen == false) {
        document.body.style.overflow = "unset";
      }
    },
    toggleMenu: function () {
      this.menuOpen = !this.menuOpen;
      // this.scrollStatus();
    },
    goHomeDesk: function () {
      console.log(this.$parent.showLoader);
      this.$parent.showLoader = true;
      setTimeout(() => {
        if (this.$parent.showLoader === true) {
          this.$parent.showLoader = !this.$parent.showLoader;
        }
      }, 3000);
      setTimeout(() => {
        this.menuOpen = false;
        location.href = window.origin;
      }, 500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loader {
  background: $white;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.background-wrap {
  height: 100vh;
  color: $white;

  .overlay {
    background: $white;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .logo {
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0, 0.1, 0.32, 1.01);

    &:hover {
      //transform: scale(1.2);
      transform: translateX(8px);
    }
  }

  .change-color {
    border-bottom: 1px solid $white !important;

    .st0 {
      fill: #bbe4fd !important;
    }

    .st1 {
      fill: #125884 !important;
    }

    .st2 {
      fill: #2996db !important;
    }
  }

  .navbar {
    height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid $green;
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
        background: $green;
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
      span {
        background: $white;
      }

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

    h6 {
      @include break-min(768px) {
        font-size: 1.15rem;
      }
    }

    svg {
      width: auto;
      height: 44.32px;
      cursor: pointer;
    }

    .st0 {
      fill: #bdc3c9;
    }

    .st1 {
      fill: #3c853f;
    }

    .st2 {
      fill: rgb(62, 204, 40);
    }
  }

  .navbar-background {
    @extend .navbar;
    top: 0;
    border: 0;
    background: #ecf0f1;
    z-index: 668;
  }
}

.shrink {
  height: 0;
}

.main {
  height: 100%;
  height: calc(100vh - 50px);
  bottom: 0;
  position: absolute;
  right: 0;
  left: 0;

  .container-md {
    height: calc(100vh - 50px);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    .social-icon {
      position: fixed;
      bottom: 20px;
      right: 15px;
      cursor: pointer;
      z-index: 777;

      @include break-min(768px) {
        right: 40px !important;
        left: auto !important;
        height: 114px;
        top: 50%;
        transform: translate(0%, -50%);
      }

      a {
        width: 50px;
        height: 50px;
        border-radius: 28%;
        background: #fff;
        position: relative;
        overflow: hidden;
        box-shadow: 0 5px 34px -5px rgb(0 0 0 / 10%);
      }

      a::before {
        content: "";
        width: 139%;
        height: 139%;
        position: absolute;
        transform: rotate(45deg);
        top: 90%;
        left: -110%;
      }

      .facebook {
        @include break-max(768px) {
          margin-right: 15px;
        }
      }

      // .facebook::before {
      //   background: #3b5998;
      // }

      .github::before {
        background: #161617;
      }

      .linkedin::before {
        background: #0e76a8;
      }

      // .fa-facebook-f {
      //   margin-right: 30px;
      //   color: #3b5998;
      //   height: 1.2em;
      //   width: auto;
      // }

      .fa-github {
        margin-right: 30px;
        color: #161617;
        height: 1.3em;
        width: auto;
      }

      .fa-linkedin-in {
        color: #0e76a8;
        height: 1.2em;
        width: auto;
      }

      .fa-github,
      .fa-linkedin-in {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      a,
      a::before,
      .fa-github,
      .fa-linkedin-in {
        transition: all 0.35s;
        transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
      }

      a:hover::before,
      a:focus::before {
        top: -20%;
        left: -10%;
      }

      @mixin hover-effects {
        color: #fff;
        width: auto;
      }

      a:hover .fa-linkedin-in,
      a:focus .fa-linkedin-in {
        height: 1.37em;
        @include hover-effects();
      }

      a:hover .fa-github,
      a:focus .fa-github {
        height: 1.4em;
        @include hover-effects();
      }
    }

    .icon-position {
      left: 15px;
      right: auto;
    }

    .remove {
      display: none !important;
    }
  }
}
</style>
