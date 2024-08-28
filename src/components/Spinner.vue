<template>
  <ul>
    <li>L</li>
    <li>O</li>
    <li>A</li>
    <li>D</li>
    <li>I</li>
    <li>N</li>
    <li>G</li>
    <li>.</li>
    <li>.</li>
    <li>.</li>
  </ul>
</template>

<script>
export default {
  name: "spinner",
};
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;

  li {
    font-weight: 900;
    list-style-type: none;
    color: $dark-gray;
    font-size: 1.2rem;
    letter-spacing: 5px;
    animation: loading 2s linear infinite;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }

    &:nth-child(4) {
      animation-delay: 0.6s;
    }

    &:nth-child(5) {
      animation-delay: 0.8s;
    }

    &:nth-child(6) {
      animation-delay: 1.0s;
    }

    &:nth-child(7) {
      animation-delay: 1.2s;
    }

    &:nth-child(8) {
      animation-delay: 1.4s;
    }

    &:nth-child(9) {
      animation-delay: 1.6s;
    }

    &:nth-child(10) {
      animation-delay: 1.8s;
    }
  }
}

@keyframes loading {
  0% {
    color: $dark-gray;
    text-shadow: none;
  }

  90% {
    color: $dark-gray;
    text-shadow: none;
  }

  100% {
    color: $green;
    text-shadow: 0 0 7px $green, 0 0 50px $dark-green;
  }
}
</style>