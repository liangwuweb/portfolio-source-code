<template>
  <transition
    name="slide"
    enter-active-class="animate__animated animate__slideInLeft animate__faster"
    leave-active-class="animate__animated animate__slideOutLeft animate__faster"
  >
    <div v-if="menuOpen" class="nav-menu">
      <div class="container" style="height: 100%">
        <div class="row" style="height: inherit">
          <div class="col-12 d-flex flex-column justify-content-center">
            <router-link class="nav-link font-weight-bold" to="/about"
              ><span @click="$emit('pageShift')">About</span></router-link
            >
            <router-link class="nav-link font-weight-bold" to="/work"
              ><span @click="$emit('pageShift')">Work</span></router-link
            >
            <router-link class="nav-link font-weight-bold" to="/contact"
              ><span @click="$emit('pageShift')">Contact</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "navigation",
  props: ["menuOpen"],
};
</script>

<style scoped lang="scss" >
.nav-menu {
  height: 100%;
  width: 100%;
  background: #3ecc28;
  position: absolute;
  z-index: 777;
  overflow: hidden;

  .nav-link {
    font-size: 1.25rem;
    color: #fff;

    &:hover {
      text-decoration: none;
      color: #fff;
    }

    span {
      position: relative;
    }

    span::before {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      top: 50%;
      margin-top: -0.5px;
      background: #292929;
    }

    span::before {
      left: -10px;
    }

    span:hover::before {
      background: #292929;
      width: calc(100% + 20px);
      transition: width 0.2s cubic-bezier(1, 0, 0.58, 0.97);
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