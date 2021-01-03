<template>
  <div class="project-wrap position-absolute w-100">
    <div class="container">
      <!-- Video card -->
      <div class="video-card row mx-0">
        <div class="col-12 mb-2 project-one">
        </div>
        <div
          class="info d-flex justify-content-between align-items-baseline w-100"
        >
          <span class="font-weight-bold">Project One</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.402 9.456">
            <path
              id="Path_164"
              data-name="Path 164"
              d="M4.341,0,0,4.341,4.341,8.752"
              transform="translate(4.697 9.103) rotate(180)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
      <!-- Video card -->
      <div class="video-card row mx-0">
        <div class="col-12 mb-2 project-two"></div>
        <div
          class="info d-flex justify-content-between align-items-baseline w-100"
        >
          <span class="font-weight-bold">Project Two</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.402 9.456">
            <path
              id="Path_164"
              data-name="Path 164"
              d="M4.341,0,0,4.341,4.341,8.752"
              transform="translate(4.697 9.103) rotate(180)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
      <!-- Video card -->
      <div class="video-card row mx-0">
        <div class="col-12 mb-2 project-three"></div>
        <div
          class="info d-flex justify-content-between align-items-baseline w-100"
        >
          <span class="font-weight-bold">Project Three</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.402 9.456">
            <path
              id="Path_164"
              data-name="Path 164"
              d="M4.341,0,0,4.341,4.341,8.752"
              transform="translate(4.697 9.103) rotate(180)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
      <!-- Video card -->
      <div class="video-card row mx-0">
        <div class="col-12 mb-2 project-four"></div>
        <div
          class="info d-flex justify-content-between align-items-baseline w-100"
        >
          <span class="font-weight-bold">Project Four</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.402 9.456">
            <path
              id="Path_164"
              data-name="Path 164"
              d="M4.341,0,0,4.341,4.341,8.752"
              transform="translate(4.697 9.103) rotate(180)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "project",
  data: function () {
    return {};
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped lang="scss">
.project-wrap {
  .container {
    margin-top: 87px;

    .video-card {
      margin-bottom: 35px;

      //Mobile interaction for the video card
      &:active {
        color: $green;
      }
      &:active path {
        stroke: $green;
      }

      .project-one {
        background-image: url("../assets/stout.jpg");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      .project-two {
        @extend .project-one;
        background-image: url("../assets/drew.jpg");
        background-position: top;
      }

      .project-three {
        @extend .project-one;
        background-image: url("../assets/wheel.jpg");
      }

       .project-four {
        @extend .project-one;
        background-image: url("../assets/map.jpg");
      }
    }

    .col-12 {
      width: 100%;
      height: 70px;
      background: #ccc;

      &::before {
        content: "";
        width: 100%;
        height: 70px;
        background: $green;
        position: absolute;
        z-index: 111;
        opacity: 0.25;
        left: 0;
      }
    }

    span {
      font-size: 0.9rem;
    }

    svg {
      width: 6.34px;
      height: 12.78px;
    }
  }
}
</style>