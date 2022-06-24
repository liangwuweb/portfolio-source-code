<template>
  <div class="background-wrap" :class="{ shrink: this.$route.path === '/project' }">
    <desktop-nav :deskMenuOpen="menuOpen" @toggleDeskMenu="toggleMenu()" @pageShift="pageShift" @goHomeDesk="goHomeDesk"></desktop-nav>
    <navigation :menuOpen="menuOpen" @pageShift="pageShift"></navigation>
    <div class="navbar d-lg-none" :class="{ 'change-color': menuOpen }">
      <!-- <svg @click="$emit('goHome')" xmlns="http://www.w3.org/2000/svg" width="35.31" height="30.665" viewBox="0 0 35.31 30.665" class="logo">
        <g id="Group_182" data-name="Group 182" transform="translate(-72 -81)">
          <path id="Path_294" data-name="Path 294" d="M287.422,319.461" transform="translate(-198.854 -220.121)" fill="#3ecc28" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
          <path id="Path_295" data-name="Path 295" d="M417.93,348.9" transform="translate(-319.325 -247.297)" fill="#3ecc28" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
          <path id="Path_296" data-name="Path 296" d="M256.7,104.846l-1.237-7.775A50.918,50.918,0,0,1,259,104.826" transform="translate(-169.441 -14.765)" fill="#3ecc28" />
          <path id="Path_297" data-name="Path 297" d="M376.618,288.02" transform="translate(-281.19 -191.098)" fill="#3ecc28" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
          <path id="Path_298" data-name="Path 298" d="M288.559,336.942" transform="translate(-199.904 -236.258)" fill="#3ecc28" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
          <path id="Path_299" data-name="Path 299" d="M221.156,336.942" transform="translate(-137.685 -236.258)" fill="#3ecc28" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
          <path id="Path_300" data-name="Path 300" d="M82.693,188.374s-1.344-3.911-1.769-5.033a5.291,5.291,0,0,1-1.149-6.419,8.851,8.851,0,0,1,3.115-6.188s-2.438-3.413-4.888-3.562a2.824,2.824,0,0,1,1.5,2.164c-1.083-.715-4.821,1.8-7.5-.433.75,1.947,4.285,3.055,4.877,5.625.568,2.464-1.3-.462-3.752,0,1.638.92,3.377,2.813,3.564,4.111a5.462,5.462,0,0,1-.938,3.894c1.5.433,3.189.216,3.752,1.731s-4.314-.216-6.19,2.38c3-.865,3.939-.433,4.877.216s2.063.216,3,.433a2.753,2.753,0,0,1,1.5,1.082" transform="translate(0 -80.909)" fill="#3ecc28" />
          <path id="Path_301" data-name="Path 301" d="M293,279" transform="translate(-204.003 -182.772)" fill="#3ecc28" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
          <path id="Path_302" data-name="Path 302" d="M176.34,89.33a10.222,10.222,0,0,0-4.088.563C170.123,86.819,166,81,166,81l3.906,10.657A12.258,12.258,0,0,0,167,97.052a4.711,4.711,0,0,1,4.137-2.52,5.47,5.47,0,0,1,4.137,2.357l8.422-1.138.117,5.132a3.012,3.012,0,0,1,2.211-1.027C186.058,98.6,182.727,89.817,176.34,89.33Z" transform="translate(-86.36)" fill="#3ecc28" />
          <path id="Path_303" data-name="Path 303" d="M311.693,333.32a4.213,4.213,0,0,1-2.235.935c-3.17.326-6.583-4.387-6.583-4.387l.04,2.154-5.283-1.217a3.208,3.208,0,0,0-3.089-2.275,5.893,5.893,0,0,1-1.056,2.926s0,1.219.051,4.416c3.219-1.111,7.834,1.107,8.078,1.514s.082,1.138-.812,2.032c1.869-.488,2.113-1.464,2.559-1.63a5.864,5.864,0,0,1,2.651-.019c3.341.383,2.674,1.972,1.536,2.7,1.951-.163,3.006-2.521,3.332-2.114.569.65-.327,2.459-.327,2.459a5.263,5.263,0,0,0,2.2-4C313.075,333.889,311.693,333.32,311.693,333.32Zm-3.21,2.644c-.643-.386-.465-1.284.244-.975a3.884,3.884,0,0,0,2.032-.081c.29-.056.275.346.081.569A1.968,1.968,0,0,1,308.483,335.965Z" transform="translate(-205.49 -229.153)" fill="#3ecc28" />
        </g>
      </svg> -->
      <svg @click="$emit('goHome')" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -19 122.1 168.3" style="enable-background:new 0 0 122.1 148.3;" xml:space="preserve">

        <g id="bottom">
          <path id="Path_363" class="st0" d="M85.6,53.4c-83-33.6-82.9,92.7-82.9,92.7C25.8,80.9,96.3,56,96.3,56L85.6,53.4z" />
          <path id="Path_365" class="st1" d="M96.1,56c0,0-26.2-10.8-39.4-8.1c-11,12.3-17.4,28-18.1,44.5C38.6,92.4,64.9,67.5,96.1,56z" />
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
        if (this.showLoader === true) {
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
<style  scoped lang="scss">
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
