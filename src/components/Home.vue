<template>
  <transition enter-active-class="animate__animated animate__fadeIn">
    <div v-if="showHome" class="homepage-wrap position-absolute w-100">
      <div class="wrap d-flex align-items-center justify-content-center">
        <h4 class="font-weight-bold">
          Hi, I am <span style="color: #3ecc28">Liang Wu</span>
        </h4>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "home",
  data: function () {
    return {
      showHome: false,
    };
  },
  components: {},
  mounted() {
    const _this = this;
    setTimeout(function () {
      _this.showHome = !_this.showHome;
    }, 500);
  },
};
</script>

<style scoped lang="scss">
.homepage-wrap {
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .wrap {
    width: inherit;
    height: 100%;
    z-index: 666;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  h4 {
    color: $mid-gray;
    @include break-min(992px) {
      font-size: 1.8rem;
    }
  }
}
</style>