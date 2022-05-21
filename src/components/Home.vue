<template>

  <div v-if="showHome" class="homepage-wrap position-absolute w-100">
    <div class="wrap d-flex align-items-center justify-content-center">
      <h4 class="font-weight-bold">
        <span class="intro-txt">{{ firstTypeValue }}</span>
        <span ref="txtType" class="txt-type" data-wait="3000" data-words='["Liang Wu", "Full Stack Developer"]'>
          <span class="txt">{{ typeValue }}</span>
        </span>
      </h4>
    </div>

    <canvas ref="canvas" id="c" :width="getWidth" :height="getHeight"></canvas>
  </div>

</template>


<script>
import { Plus } from "../_Plus";

export default {
  name: "home",
  data: function () {
    return {
      showHome: true,
      words: ["Liang Wu", "Full Stack Developer"],
      waitTime: 1000,
      typeValue: "",
      wordIndex: 0,
      isDeleting: false,
      firstTypeValue: "",
      introString: "Hi, I am ",
      signs: [],
      mouse: { x: 0, y: 0 },
      gridLength: 10,
      mouseMoved: false,
      mouseOver: false,
    };
  },
  components: {},
  computed: {
    getWidth: function () {
      return window.innerWidth;
    },
    getHeight: function () {
      return window.innerHeight;
    },
  },
  methods: {
    // This function produce the "Hi, I am " part
    firstTypeWriter: function () {
      if (this.firstTypeValue === "Hi, I am ") {
        // When "Hi, I am" finishes, continue to next words by return typeWriter() as a callback function
        return this.typeWriter();
      }

      this.firstTypeValue = this.introString.substring(
        0,
        this.firstTypeValue.length + 1
      );
      setTimeout(this.firstTypeWriter, 150);
    },
    // This function produce the "Liang Wu" & "Full stack Developer" part
    typeWriter: function () {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // console.log(this.wordIndex);

      // Get full text of current word
      const fullTxt = this.words[current];

      //check if deleting
      if (this.isDeleting) {
        // Remove Char
        this.typeValue = fullTxt.substring(0, this.typeValue.length - 1);
      } else {
        // Add Char
        this.typeValue = fullTxt.substring(0, this.typeValue.length + 1);
      }

      // Init Type speed
      let typeSpeed = 150;

      if (this.isDeleting) {
        typeSpeed /= 3;
      }

      // End the loop at the second completion of "Liang Wu"
      if (
        !this.isDeleting &&
        this.typeValue === "Liang Wu" &&
        this.wordIndex === 2
      ) {
        // end the loop
        return "end";
      }

      // If word is complete
      if (!this.isDeleting && this.typeValue === fullTxt) {
        // Make pause at end
        typeSpeed = this.waitTime;
        //Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.typeValue === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
      }

      setTimeout(this.typeWriter, typeSpeed);
    },
    createGridArray() {
      const c = this.$refs.canvas;
      
      // For loop to create the grid array
      for (let i = 0; i <= this.gridLength; i++) {
        // create an empty array
        this.signs[i] = [];

        // create 9 Plus obj and put them in the empty array
        for (let j = 0; j <= this.gridLength; j++) {
          const sign = new Plus();

          sign.left = (c.width / this.gridLength) * i;
          sign.top = (c.height / this.gridLength) * j;

          sign.width = 10;
          sign.height = 10;

          this.signs[i][j] = sign;
        }
      }
    },
    draw() {
      // if (mouseOver && mouseMoved) {
      //   caculateIconPosition();
      //   mouseMoved = false;
      // }

      const c = this.$refs.canvas;
      const ctx = c.getContext("2d");

      // Clear canvas
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.save();
      // draw a 10 X 10 grid, with 8 X 8 icon grid in the middle
      ctx.beginPath();

      for (let i = 0; i <= this.gridLength; i++) {
        for (let j = 0; j <= this.gridLength; j++) {
          const sign = this.signs[i][j];
          //console.log(sign);

          sign.draw(ctx);
        }
      }
      ctx.closePath();
      ctx.restore();
      ctx.strokeStyle = "#4caf50";
      ctx.stroke();
    },
  },
  mounted() {
    // const _this = this;
    // setTimeout(function () {
    //   _this.showHome = !_this.showHome;
    // }, 500);

    //console.log(plus);
    // Event Listener
    // Use GSAP ticker to call draw function on every frame that will draw signs to the canvas
    //TweenLite.ticker.addEventListener("tick", this.draw);
    // c.addEventListener("mousemove", mouseMove);
    // c.addEventListener("mouseleave", reset);
    // c.addEventListener("mouseover", function () {
    //   mouseOver = true;
    // });

    // canvas resize based on window resize
    // window.addEventListener("resize", canvasResize);

  
    this.createGridArray();
    console.log(this.signs);

    TweenLite.ticker.addEventListener("tick", this.draw);

    setTimeout(this.firstTypeWriter, 2000);
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
    position: relative;
    height: 29px;

    &::after {
      content: "";
      width: 6px;
      height: 100%;
      background: rgb(73, 207, 33);
      animation: blink 1s linear infinite;
      position: absolute;
    }

    .txt-type > .txt {
      color: rgb(73, 207, 33);
    }

    canvas {
      background: #ecf0f1;
      touch-action: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    @include break-min(992px) {
      font-size: 1.8rem;
    }
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>