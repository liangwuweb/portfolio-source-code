<template>
  <div class="card-wrap" @click="$emit('showModal')" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave" ref="card">
    <div class="card" :style="cardStyle">
      <div class="tag" :class="statusClass">
        {{ status }}
      </div>
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["dataImage", "status"],
  data: function () {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  },
  computed: {
    mousePX: function () {
      return this.mouseX / this.width;
    },
    mousePY: function () {
      return this.mouseY / this.height;
    },
    cardStyle: function () {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform: function () {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage: function () {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
    statusClass() {
      // Conditionally apply a class based on the status prop
      return this.status === "completed" ? "bg-green" : "bg-red";
    }
  },
  methods: {
    handleMouseMove: function (e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter: function () {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave: function () {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
};
</script>

<style scoped lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #bcaaa4;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}

h1 {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-wrap {
  margin: 30px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }

    .card-info {
      transition: 0.6s $hoverEasing;
    }

    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }

    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }

    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba($green, 0.2) 0 0 40px 5px, rgba($green, 1) 0 0 0 3px,
        rgba(black, 0.66) 0 30px 60px 0;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: $dark-green;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
  box-sizing: initial;
}

.card-info {
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 20px;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 130%;
    background-image: linear-gradient(to bottom,
        transparent 0%,
        rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Gotham Pro Regular";
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}

.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #60cf33;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  z-index: 666;
}

.bg-red {
  background-color: #cf6a33;
}

.bg-green {
  background-color: #60cf33;
}
</style>