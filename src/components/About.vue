<template>
  <transition enter-active-class="animate__animated animate__fadeInDown">
    <div v-if="showAbout" class="about-wrap position-absolute w-100">
      <div class="wrap">
        <div class="container">
          <div class="row align-items-md-center">
            <div class="col-12 col-md-7 offset-md-1 col-lg-6 offset-lg-2 col-xl-7">
              <h1 class="font-weight-bold header d-none d-lg-block text-left pl-lg-3 pl-xl-0 mb-3">About Me</h1>
              <p class="text-left px-lg-3 px-xl-0">
                Hi, I’m <span>Liang Wu</span>. I am an <span>Web Developer based in Wisconsin</span>. Driven by
                passion & curiosity, I try to learn & <span>discover new things</span> everyday.</br> I
                have got some days in advertising but I am <span>fond of UI Design</span>. I also
                make photographies and illustrations.</br> <span>Pandy fan</span>, I know exhaustively
                all GIF about the guys!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "about",
  data: function () {
    return {
      showAbout: false,
    };
  },
  components: {},
  mounted() {
    const _this = this;
    setTimeout(function () {
      _this.showAbout = !_this.showAbout;
    }, 500);
  },
};
</script>

<style scoped lang="scss">
.about-wrap {
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .wrap {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 666;

    .container {
      @include break-max(767px) {
        margin-top: 87px;
      }
      height: calc(100% - 50px);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      .row {
        height: inherit;
      }

      .header {
        color: $green;
      }

      p {
        line-height: 28px;
        span {
          font-weight: 700;
        }
        @include break-max(767px) {
          margin-top: 26px;
        }
        @include break-between(768px, 991px) {
          font-size: 1.3rem;
          line-height: 41px;
        }
        @include break-min(992px) {
          font-size: 1.3rem;
          line-height: 41px;
        }
      }
    }
  }
}
</style>