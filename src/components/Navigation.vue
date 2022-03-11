<template>
  <transition name="slide" enter-active-class="animate__animated animate__slideInLeft animate__faster" leave-active-class="animate__animated animate__slideOutLeft animate__faster">
    <div v-if="menuOpen" class="nav-menu d-lg-none">
      <div class="container" style="height: 100%">
        <div class="row" style="height: inherit">
          <div class="col-12 d-flex flex-column justify-content-center">
            <router-link class="nav-link font-weight-bold" to="/about"><span @click="$emit('pageShift')">About</span></router-link>
            <router-link class="nav-link font-weight-bold" to="/project"><span @click="$emit('pageShift')">Project</span></router-link>
            <router-link class="nav-link font-weight-bold" to="/contact"><span @click="$emit('pageShift')">Contact</span></router-link>
            <div class="nav-link d-flex justify-content-center">
              <a class="facebook mr-3" target="_blank" href="https://www.facebook.com/profile.php?id=100006741066468">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
              </a>
              <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/liang-wu-b16952149/">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />
              </a>
            </div>
          </div>
        </div>
        <p class="fixed-bottom mb-4">{{ new Date().getFullYear() }} created by Liang. All rights reserved.</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navigation",
  props: ["menuOpen"],
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped lang="scss" >
.nav-menu {
  height: 100%;
  width: 100%;
  background: $green;
  position: fixed;
  z-index: 780;
  overflow: hidden;

  .nav-link {
    font-size: 1.25rem;
    color: $white;

    &:hover {
      text-decoration: none;
      color: $white;
    }

    span {
      position: relative;
      & {
        @include break-min(768px) {
          font-size: 1.8rem;
        }
      }
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

    @include break-max(991px) {
      span:active::before {
        background: $black;
        width: calc(100% + 20px);
        transition: width 0.1s ease-in;
      }
    }

    @include break-min(992px) {
      span:hover::before {
        background: $black;
        width: calc(100% + 20px);
        transition: width 0.2s cubic-bezier(1, 0, 0.58, 0.97);
      }
    }

    // social media button
    a {
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

    a::before {
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

    // Social button hover effects
    a,
    a::before,
    .fa-facebook-f,
    .fa-linkedin-in {
      transition: all 0.35s;
      transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
    }

    a:hover::before,
    a:focus::before {
      top: -20%;
      left: -10%;
    }

    a:hover .fa-facebook-f,
    a:hover .fa-linkedin-in,
    a:focus .fa-facebook-f,
    a:focus .fa-linkedin-in {
      color: #fff;
      width: auto;
      height: 1.2em;
    }
  }

  @include break-min(992px) {
    .router-link-exact-active {
      span::before {
        width: calc(100% + 20px);
      }
    }
  }

  @include break-max(991px) {
    .router-link-exact-active {
      span::before {
        animation: strike-nav 0.1s ease-in;
      }
      span::before {
        width: calc(100% + 20px);
      }
    }
  }

  p {
    font-size: 0.7rem;
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