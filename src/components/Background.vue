<template>
  <div
    class="background-wrap"
    :class="{ shrink: this.$route.path === '/project' }"
  >
    <transition
      name="page-shift"
      enter-active-class="animate__animated animate__slideInLeft animate__faster"
      leave-active-class="animate__animated animate__slideOutRight animate__faster"
    >
      <div v-if="show" class="overlay"></div>
    </transition>
    <navigation :menuOpen="menuOpen" @pageShift="pageShift"></navigation>
    <div class="navbar" :class="{ 'change-color': menuOpen }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35.31"
        height="30.665"
        viewBox="0 0 35.31 30.665"
        class="logo"
      >
        <g id="Group_182" data-name="Group 182" transform="translate(-72 -81)">
          <path
            id="Path_294"
            data-name="Path 294"
            d="M287.422,319.461"
            transform="translate(-198.854 -220.121)"
            fill="#3ecc28"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="Path_295"
            data-name="Path 295"
            d="M417.93,348.9"
            transform="translate(-319.325 -247.297)"
            fill="#3ecc28"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="Path_296"
            data-name="Path 296"
            d="M256.7,104.846l-1.237-7.775A50.918,50.918,0,0,1,259,104.826"
            transform="translate(-169.441 -14.765)"
            fill="#3ecc28"
          />
          <path
            id="Path_297"
            data-name="Path 297"
            d="M376.618,288.02"
            transform="translate(-281.19 -191.098)"
            fill="#3ecc28"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="Path_298"
            data-name="Path 298"
            d="M288.559,336.942"
            transform="translate(-199.904 -236.258)"
            fill="#3ecc28"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="Path_299"
            data-name="Path 299"
            d="M221.156,336.942"
            transform="translate(-137.685 -236.258)"
            fill="#3ecc28"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="Path_300"
            data-name="Path 300"
            d="M82.693,188.374s-1.344-3.911-1.769-5.033a5.291,5.291,0,0,1-1.149-6.419,8.851,8.851,0,0,1,3.115-6.188s-2.438-3.413-4.888-3.562a2.824,2.824,0,0,1,1.5,2.164c-1.083-.715-4.821,1.8-7.5-.433.75,1.947,4.285,3.055,4.877,5.625.568,2.464-1.3-.462-3.752,0,1.638.92,3.377,2.813,3.564,4.111a5.462,5.462,0,0,1-.938,3.894c1.5.433,3.189.216,3.752,1.731s-4.314-.216-6.19,2.38c3-.865,3.939-.433,4.877.216s2.063.216,3,.433a2.753,2.753,0,0,1,1.5,1.082"
            transform="translate(0 -80.909)"
            fill="#3ecc28"
          />
          <path
            id="Path_301"
            data-name="Path 301"
            d="M293,279"
            transform="translate(-204.003 -182.772)"
            fill="#3ecc28"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Path_302"
            data-name="Path 302"
            d="M176.34,89.33a10.222,10.222,0,0,0-4.088.563C170.123,86.819,166,81,166,81l3.906,10.657A12.258,12.258,0,0,0,167,97.052a4.711,4.711,0,0,1,4.137-2.52,5.47,5.47,0,0,1,4.137,2.357l8.422-1.138.117,5.132a3.012,3.012,0,0,1,2.211-1.027C186.058,98.6,182.727,89.817,176.34,89.33Z"
            transform="translate(-86.36)"
            fill="#3ecc28"
          />
          <path
            id="Path_303"
            data-name="Path 303"
            d="M311.693,333.32a4.213,4.213,0,0,1-2.235.935c-3.17.326-6.583-4.387-6.583-4.387l.04,2.154-5.283-1.217a3.208,3.208,0,0,0-3.089-2.275,5.893,5.893,0,0,1-1.056,2.926s0,1.219.051,4.416c3.219-1.111,7.834,1.107,8.078,1.514s.082,1.138-.812,2.032c1.869-.488,2.113-1.464,2.559-1.63a5.864,5.864,0,0,1,2.651-.019c3.341.383,2.674,1.972,1.536,2.7,1.951-.163,3.006-2.521,3.332-2.114.569.65-.327,2.459-.327,2.459a5.263,5.263,0,0,0,2.2-4C313.075,333.889,311.693,333.32,311.693,333.32Zm-3.21,2.644c-.643-.386-.465-1.284.244-.975a3.884,3.884,0,0,0,2.032-.081c.29-.056.275.346.081.569A1.968,1.968,0,0,1,308.483,335.965Z"
            transform="translate(-205.49 -229.153)"
            fill="#3ecc28"
          />
        </g>
      </svg>
      <h6 class="font-weight-bold my-0" style="color: #3ecc28">
        {{ navbarHeader }}
      </h6>
      <div class="nav-icon" :class="{ open: menuOpen }" @click="expandMenu()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div :class="{ 'navbar-background': true }"></div>

    <div class="main">
      <div class="container-fluid">
        <div class="social-icon" :class="positionObj">
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
      show: false,
      changeColor: "change-color",
    };
  },
  components: {
    FontAwesomeIcon,
    Navigation,
  },
  computed: {
    positionObj: function () {
      return {
        "icon-position": this.$route.path === "/about",
        remove: this.$route.path != "/about" && this.$route.path != "/",
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
      this.show = !this.show;
      const _this = this;
      setTimeout(function () {
        _this.menuOpen = !_this.menuOpen;
        callback();
      }, 500);

      function callback() {
        setTimeout(function () {
          _this.show = !_this.show;
        }, 500);
      }
    },
    scrollStatus: function () {
      if (this.menuOpen == true) {
        document.body.style.overflow = "hidden";
      } else if (this.menuOpen == false) {
        document.body.style.overflow = "unset";
      }
    },
    expandMenu: function () {
      this.menuOpen = !this.menuOpen;
      // this.scrollStatus();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
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

  .change-color {
    border-bottom: 1px solid $white !important;
    .logo path {
      fill: $white;
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
  }

  .navbar-background {
    @extend .navbar;
    top: 0;
    border: 0;
    background: $black;
    z-index: 333;
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

    .icon-position {
      left: 15px;
      right: auto;
    }

    .remove {
      display: none;
    }
  }
}
</style>
