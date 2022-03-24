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
        <svg @click="$emit('goHomeDesk')" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -19 122.1 168.3" style="enable-background:new 0 0 122.1 148.3;" xml:space="preserve">

          <g id="bottom">
            <path id="Path_363" class="st0" d="M85.6,53.4c-83-33.6-82.9,92.7-82.9,92.7C25.8,80.9,96.3,56,96.3,56L85.6,53.4z" />
            <path id="Path_365" class="st1" d="M96.1,56c0,0-26.2-10.8-39.4-8.1c-11,12.3-17.4,28-18.1,44.5C38.6,92.4,64.9,67.5,96.1,56z" />
          </g>
          <path id="top" class="st2" d="M38.6,92.1c9.9-6.3,20.7-11,32.1-13.9c18.4-4.6,36.1-13.7,45.5-37.3c7.6-19.3,0-39.6,0-39.6
	s-7.2,32-36.4,45.6S38.6,92.1,38.6,92.1z" />
        </svg>
      </div>
    </div>

    <div class="navigation d-none d-lg-block" :class="{active: deskMenuOpen}">
      <div class="header">
        <div class="site-logo" :class="{hover: hover}">
          <svg @click="$emit('goHomeDesk')" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -19 122.1 168.3" style="enable-background:new 0 0 122.1 148.3;" xml:space="preserve">

            <g id="bottom">
              <path id="Path_363" class="st0" d="M85.6,53.4c-83-33.6-82.9,92.7-82.9,92.7C25.8,80.9,96.3,56,96.3,56L85.6,53.4z" />
              <path id="Path_365" class="st1" d="M96.1,56c0,0-26.2-10.8-39.4-8.1c-11,12.3-17.4,28-18.1,44.5C38.6,92.4,64.9,67.5,96.1,56z" />
            </g>
            <path id="top" class="st2" d="M38.6,92.1c9.9-6.3,20.7-11,32.1-13.9c18.4-4.6,36.1-13.7,45.5-37.3c7.6-19.3,0-39.6,0-39.6
	s-7.2,32-36.4,45.6S38.6,92.1,38.6,92.1z" />
          </svg>
        </div>
      </div>
      <!-- Content -->
      <div class="content d-flex justify-content-end" :class="{hide: deskMenuOpen === false}">
        <div class="menu-link">
          <router-link class="nav-link font-weight-bold" to="/about">
            <span class="about" @click="$emit('pageShift')"><span>Ab</span><span>out</span></span>
          </router-link>
          <router-link class="nav-link font-weight-bold" to="/project">
            <span class="project" @click="$emit('pageShift')"><span>Pro</span><span>ject</span></span>
          </router-link>
          <router-link class="nav-link font-weight-bold" to="/contact">
            <span class="contact" @click="$emit('pageShift')"><span>Con</span><span>tact</span></span>
          </router-link>
          <div class="nav-link d-flex">
            <a class="social-icon facebook mr-3" target="_blank" href="https://www.facebook.com/profile.php?id=100006741066468">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
            </a>
            <a class="social-icon linkedin" target="_blank" href="https://www.linkedin.com/in/liang-wu-b16952149/">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />
            </a>
          </div>
        </div>
        <p class="fixed-bottom mb-4">{{ new Date().getFullYear() }} created by Liang. All rights reserved.</p>
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
  background: #ecf0f1;
  z-index: -1;
}

.menu-text {
  color: $mid-gray;
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

  // change logo color when .hover applied
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

.bghover {
  background: $green;
}

.header {
  width: 90px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;

  .site-logo {
    position: absolute;
    top: 30px;
    width: 100%;
    z-index: 1000;

    svg {
      margin: auto;
      display: block;
      width: auto;
      height: 69px;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0, 0.1, 0.32, 1.01);
      @include break-min(992px) {
        &:hover #top {
          animation-duration: 3s;
          animation-name: animateLogo;
          animation-iteration-count: infinite;
          transform-origin: 60% 30%;
          animation-timing-function: cubic-bezier(0.42, 0, 0, 0.99);
        }

        &:hover #Path_363 {
          animation-duration: 3s;
          animation-name: animateColor;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.42, 0, 0, 0.99);
        }

        &:hover #Path_365 {
          animation-duration: 3s;
          animation-name: animateColorTwo;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.42, 0, 0, 0.99);
        }
      }
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
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;
  background: $green;
  opacity: 0;
  z-index: 1000;
  overflow: hidden;
  pointer-events: none;
  -webkit-transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s 0.5s;
  transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s 0.5s;

  .st0 {
    fill: #bbe4fd !important;
  }
  .st1 {
    fill: #125884 !important;
  }
  .st2 {
    fill: #2996db !important;
  }

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
    // position: relative;
    display: inline-block;
    font-size: 1.8rem;
    transition: all 0.4s cubic-bezier(1, 0, 0.58, 0.97);
  }

  .about span:nth-child(1) {
    position: relative;
    z-index: 10;
  }

  .about,
  .project,
  .contact {
    transition: margin 0.4s cubic-bezier(1, 0, 0.58, 0.97);
  }

  // parallel effects
  .about:hover span:nth-child(1),
  .about:focus span:nth-child(1) {
    color: $dark-green;
    transform: translate(7px, -7px);
  }

  .about:hover span:nth-child(2),
  .about:focus span:nth-child(2) {
    transform: translate(-22px, 2px);
  }

  .about:hover, .about:focus {
    margin-bottom: 10px;
  }

  .project:hover span:nth-child(1),  .project:focus span:nth-child(1){
    color: $dark-green;
    transform: translate(10px, 7px);
  }

  .project:hover span:nth-child(2), .project:focus span:nth-child(2) {
    transform: translate(-32px, -5px);
  }

  .project:hover, .project:focus {
    margin: 10px 0;
  }

  .contact:hover span:nth-child(1), .contact:focus span:nth-child(1) {
    transform: translate(10px, 7px);
  }

  .contact:hover span:nth-child(2), .contact:focus span:nth-child(2) {
    color: $dark-green;
    transform: translate(-32px, -5px);
  }

  .contact:hover, .contact:focus {
    margin: 10px 0;
  }

  // Social media button
  .social-icon {
    width: 50px;
    height: 50px;
    border-radius: 28%;
    background: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 34px -5px rgb(0 0 0 / 10%);
  }

  .fa-facebook-f,
  .fa-linkedin-in {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1em;
    width: auto;
  }

  .fa-facebook-f {
    color: #3b5998;
  }

  .fa-linkedin-in {
    color: #0e76a8;
  }

  .social-icon::before {
    content: "";
    width: 139%;
    height: 139%;
    position: absolute;
    transform: rotate(45deg);
    top: 90%;
    left: -110%;
  }

  .facebook::before {
    background: #3b5998;
  }

  .linkedin::before {
    background: #0e76a8;
  }

  // Social button hover effect
  .social-icon,
  .social-icon::before,
  .fa-facebook-f,
  .fa-linkedin-in {
    transition: all 0.35s;
    transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }

  .social-icon:hover::before,
  .social-icon:focus::before {
    top: -20%;
    left: -10%;
  }

  .social-icon:hover .fa-facebook-f,
  .social-icon:hover .fa-linkedin-in,
  .social-icon:focus .fa-facebook-f,
  .social-icon:focus .fa-linkedin-in {
    color: #fff;
    width: auto;
    height: 1.2em;
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

////////// ******** Animation **********/////////////
@keyframes animateLogo {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-45deg);
    fill: #2996db;
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes animateColor {
  0% {
    fill: #bdc3c9;
  }

  50% {
    fill: #bbe4fd;
  }

  100% {
    fill: #bdc3c9;
  }
}

@keyframes animateColorTwo {
  0% {
    fill: #3c853f;
  }

  50% {
    fill: #125884;
  }

  100% {
    fill: #3c853f;
  }
}
</style>