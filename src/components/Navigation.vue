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
            <a class="font-weight-bold mb-3" href="#"><span>About</span></a>
            <a class="font-weight-bold mb-3" href="#"><span>Work</span></a>
            <a class="font-weight-bold" href="#"><span>Contact</span></a>
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

  .col-12 {
    padding-bottom: 260px;
  }

  a {
    font-size: 1.25rem;
    color: #fff;

    &:hover {
      text-decoration: none;
      color: #fff;
    }

    span {
      position: relative;
    }

    span:before {
      content: "";
      position: absolute;
      width: 0%;
      height: 3px;
      top: 50%;
      margin-top: -0.5px;
      background: #292929;
    }

    span:before {
      left: -20%;
    }

    span:hover:before {
      background: #292929;
      width: 140%;
      transition: width 0.2s cubic-bezier(1, 0, 0.58, 0.97);
    }
  }
}

// .slide-leave-to,
// .slide-enter {
//   transform: translateX(-100%);
// }

// .slide-enter-to,
// .slide-leave {
//   transform: translateX(0);
// }

// .slide-enter-active,
// .slide-leave-active {
//   transition: all 0.5s ease;
// }
</style>