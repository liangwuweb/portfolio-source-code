<template>
  <div class="about-wrap position-absolute w-100">
    <div class="wrap">
      <div class="container">
        <p class="text-left">
          Hi, I’m <span>Liang Wu</span>. I am an <span>Web Developer based in Wisconsin</span>. Driven by
          passion & curiosity, I try to learn & <span>discover new things</span> everyday.</br> I
          have got some days in advertising but I am <span>fond of UI Design</span>. I also
          make photographies and illustrations.</br> <span>Pandy fan</span>, I know exhaustively
          all GIF about the guys!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function () {
    return {
      navbarHeader: "About",
    };
  },
  components: {},
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
      margin-top: 87px;
      p {
        line-height: 28px;
        span {
          font-weight: 700;
        }
      }
    }
  }
}
</style>