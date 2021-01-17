<template>
  <div class="desktop-nav-wrap">

    <div class="desktop-navbar d-none d-lg-block" :class="{hover: hover}">
      <div class="nav-icon" @mouseenter="hover = true" @mouseleave="hover =false" @click="$emit('toggleDeskMenu')">
        <div class="menu-text font-weight-bold">Menu</div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="header d-none d-lg-block position-fixed">
      <div class="site-logo" :class="{hover: hover, hide: deskMenuOpen}">
        <svg @click="$emit('goHomeDesk')" xmlns="http://www.w3.org/2000/svg" width="35.31" height="30.665" viewBox="0 0 35.31 30.665">
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
        </svg>
      </div>
    </div>

    <div class="navigation d-none d-lg-block" :class="{active: deskMenuOpen}">
      <div class="header">
        <div class="site-logo" :class="{hover: hover}">
          <svg @click="$emit('goHomeDesk')" xmlns="http://www.w3.org/2000/svg" width="35.31" height="30.665" viewBox="0 0 35.31 30.665">
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
          </svg>
        </div>
      </div>
      <!-- Content -->
      <div class="content d-flex justify-content-end" :class="{hide: deskMenuOpen === false}">
        <div class="menu-link">
          <router-link class="nav-link font-weight-bold" to="/about"><span @click="$emit('pageShift')">About</span></router-link>
          <router-link class="nav-link font-weight-bold" to="/project"><span @click="$emit('pageShift')">Project</span></router-link>
          <router-link class="nav-link font-weight-bold" to="/contact"><span @click="$emit('pageShift')">Contact</span></router-link>
          <div class="nav-link">
            <a class="social-icon mr-3" target="_blank" href="https://www.facebook.com/profile.php?id=100006741066468">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" />
            </a>
            <a class="social-icon" target="_blank" href="https://www.linkedin.com/in/liang-wu-b16952149/">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
            </a>
          </div>
        </div>
        <p class="fixed-bottom mb-4">2021 created by Liang. All rights reserved.</p>
      </div>

      <div class="close-btn">
        <svg @click="$emit('toggleDeskMenu')" :class="{hide: deskMenuOpen === false}" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35.704 35.704">
          <g id="Group_60" data-name="Group 60" transform="translate(-289.623 -2.54)">
            <rect id="Rectangle_5" data-name="Rectangle 5" width="48.864" height="1.629" transform="translate(289.623 37.092) rotate(-45)" fill="#f5f5f5" />
            <rect id="Rectangle_7" data-name="Rectangle 7" width="48.864" height="1.629" transform="translate(290.775 2.54) rotate(45)" fill="#f5f5f5" />
          </g>
        </svg>
      </div>
    </div>

    <div class="desktop-navbar-background d-none d-lg-block" :class="{'bghover': hover}"></div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "desktop-nav",
  props: ["deskMenuOpen"],
  data: function () {
    return {
      hover: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.desktop-navbar {
  width: 90px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  -webkit-transition: color 0.2s 0.2s, background 0.5s, width 0.5s ease-in;
  transition: color 0.2s 0.2s, background 0.5s, width 0.5s ease-in;

  .nav-icon {
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    font-size: 0;
    cursor: pointer;
    height: 50px;
    width: 12px;

    span {
      position: absolute;
      display: block;
      width: 1px;
      background: $green;
      -webkit-transition: background 0.2s 0.2s, left 0.3s;
      transition: background 0.2s 0.2s, left 0.3s;
      margin-right: 3px;
      height: 100%;
      top: 0;

      &:nth-of-type(1) {
        left: 3px;
      }
      &:nth-of-type(2) {
        left: 8px;
      }
      &:nth-of-type(3) {
        left: 8px;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -200%;
      width: 500%;
      height: 100%;
    }
  }
}

.desktop-navbar-background {
  @extend .desktop-navbar;
  background: $black;
  z-index: -1;
}

.menu-text {
  color: $white;
  font-family: "Gotham Pro Medium";
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 12px;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  margin-left: 20px;
  pointer-events: none;
  -webkit-transition: all 0.2s 0.2s;
  transition: all 0.2s 0.2s;
}

.hover {
  span {
    background: $white !important;
    &:nth-of-type(1) {
      left: 10px !important;
    }
    &:nth-of-type(2) {
      left: 5px !important;
    }
    &:nth-of-type(3) {
      left: 0px !important;
    }
  }
  .menu-text {
    visibility: hidden;
    opacity: 0;
  }
  svg path {
    fill: $white;
  }
}

.bghover {
  background: $green;
}

.header {
  width: 90px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .site-logo {
    position: absolute;
    top: 30px;
    width: 100%;
    z-index: 1000;
    svg {
      margin: auto;
      display: block;
      width: 51.5px;
      height: 41.73px;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0, 0.1, 0.32, 1.01);
      @include break-min(992px) {
        &:hover {
          transform: translateX(8px);
        }
      }
    }
  }
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;
  background: $green;
  opacity: 0;
  z-index: 999;
  overflow: hidden;
  pointer-events: none;
  -webkit-transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s 0.5s;
  transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s 0.5s;

  .close-btn {
    width: 90px;
    position: absolute;
    left: auto;
    right: 3%;
    top: 50%;
    transform: translateY(-15px);

    svg {
      cursor: pointer;
      -webkit-transition: -webkit-transform 0.5s;
      transition: transform 0.5s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
}

.active {
  pointer-events: auto;
  opacity: 1;
  width: 100%;
  height: 100%;
  -webkit-transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0s 0s;
  transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0s 0s;

  .header {
    right: 3%;
    left: auto;
    svg path {
      fill: $white;
    }
  }
}

// Hide the header logo when menu open
.hide {
  opacity: 0;
}

.content {
  position: relative;
  width: calc(75% - 90px);
  margin: auto;
  padding-top: 1px;
  .menu-link {
    padding-top: 120px;
    padding-right: 80px;
  }
  p {
    font-size: 0.7rem;
  }
}

.nav-link {
  font-size: 1.25rem;
  color: $white;
  text-align: left;

  &:hover {
    text-decoration: none;
    color: $white;
  }

  span {
    position: relative;
    font-size: 1.8rem;
  }

  //Strike through effects
  span::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    top: 50%;
    margin-top: -0.5px;
    background: $black;
  }

  span::before {
    left: -10px;
  }

  span:hover::before {
    background: $black;
    width: calc(100% + 20px);
    transition: width 0.2s cubic-bezier(1, 0, 0.58, 0.97);
  }

  .social-icon {
    color: $white;
    font-size: 2rem;
    @include break-min(992px) {
      &:hover {
        svg path {
          fill: $black;
        }
      }
    }
  }
}

.router-link-exact-active {
  span::before {
    animation: strike-nav 0.2s;
  }
  span::before {
    width: calc(100% + 20px);
  }
}

@keyframes strike-nav {
  from {
    width: 0;
  }
  to {
    width: calc(100% + 20px);
  }
}
</style>