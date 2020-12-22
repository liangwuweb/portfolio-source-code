<template>
  <div class="homepage-wrap position-absolute w-100">
    <div class="wrap d-flex align-items-center justify-content-center">
      <h4 class="font-weight-bold">
        Some thing to <span style="color: #3ecc28">say</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
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
}
</style>