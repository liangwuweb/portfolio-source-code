<template>
  <div class="project-wrap position-absolute w-100">
    <div class="container">
      <!-- Video card -->
      <transition-group @beforeEnter="beforeEnter" @enter="enter">
        <div v-for="(project, index) in projects" :key="project.name" class="video-card row mx-0" @click="showModal(project)" :data-index="index">
          <div class="col-12 mb-2 project" :style="{
            backgroundImage:
              'url(' + require('@/assets/' + project.image) + ')',
            backgroundPosition: project.position
          }"></div>
          <div class="info d-flex justify-content-between align-items-baseline w-100">
            <span class="font-weight-bold">{{ project.name }}</span>
            <svg id="nextbutton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.402 9.456">
              <path id="Path_164" data-name="Path 164" d="M4.341,0,0,4.341,4.341,8.752" transform="translate(4.697 9.103) rotate(180)" fill="none" stroke="#f5f5f5" stroke-width="1" />
            </svg>
          </div>
        </div>
      </transition-group>

      <!-- Modal -->
      <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster" @after-enter="showVideoDialog = true">
        <div v-if="showVideoModal" class="modal d-block" tabindex="-1" role="dialog">
          <transition enter-active-class="animate__animated animate__fadeInDown animate__faster" leave-active-class="animate__animated animate__fadeOutUp animate__faster">
            <div v-if="showVideoDialog" class="modal-dialog mb-5" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="videoSrc" id="video" allow="accelerometer; autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div class="close" @click="hideModal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.322" height="15.322" viewBox="0 0 15.322 15.322">
                      <g id="Component_3_1" data-name="Component 3 – 1" transform="translate(0.354 0.354)">
                        <line id="Line_5" data-name="Line 5" x2="14.615" y2="14.615" fill="none" stroke="#f5f5f5" stroke-width="1" />
                        <line id="Line_6" data-name="Line 6" x1="14.615" y2="14.615" fill="none" stroke="#f5f5f5" stroke-width="1" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="modal-body text-left">
                  <h5 class="font-weight-bold modal-title mb-1 mt-4">
                    {{projectTitle}}
                  </h5>
                  <p>
                    {{description}}
                  </p>

                  <div @click="lanuchSite" class="btn btn-primary font-weight-bold">
                    Launch Site
                  </div>

                </div>
                <div class="modal-footer">
                  <div class="anchor position-absolute d-flex justify-content-center">
                    <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
                      <popover name="first" class="position-absolute">
                        Woops, Wu is working on this feature
                        <font-awesome-icon :icon="{prefix: 'fa', iconName:'spinner'}" spin />
                      </popover>
                    </transition>
                  </div>

                  <div v-popover.top="{ name: 'first'}" class="btn btn-primary btn-switch font-weight-bold">
                    <font-awesome-icon :icon="{prefix: 'fa', iconName: 'arrow-left'}" transform="grow-4" :style="{marginRight: '10px', marginTop: '-2px'}" />
                    PREV
                  </div>

                  <span class="line m-0 position-absolute"></span>
                  <div class="anchor-2 position-absolute d-flex justify-content-center">
                    <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
                      <popover name="second" class="position-absolute">
                        Woops, Wu is working on this feature
                        <font-awesome-icon :icon="{prefix: 'fa', iconName:'spinner'}" spin />
                      </popover>
                    </transition>
                  </div>
                  <div v-popover.top="{ name: 'second'}" class="btn btn-primary btn-switch font-weight-bold">
                    NEXT
                    <font-awesome-icon :icon="{prefix: 'fa', iconName: 'arrow-right'}" transform="grow-4" :style="{marginLeft: '10px', marginTop: '-2px'}" />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "project",
  data: function () {
    return {
      projects: [],
      showVideoModal: false,
      showVideoDialog: false,
      projectTitle: "",
      description: "",
      videoSrc: "",
      siteLink: "",
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    showModal: function (project) {
      this.projectTitle = project.name;
      this.description = project.description;
      this.videoSrc = project.videoSrc;
      this.siteLink = project.siteLink;
      this.showVideoModal = true;
    },
    hideModal: function () {
      this.projectTitle = "";
      this.description = "";
      this.videoSrc = "";
      this.siteLink = "";
      this.showVideoModal = false;
      this.showVideoDialog = false;
    },
    lanuchSite: function () {
      window.open(this.siteLink, "_blank");
    },
    beforeEnter: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 200;
      setTimeout(function () {
        el.className = "video-card row mx-0 animate__animated animate__fadeInUp";
      }, delay);
    },
  },
  mounted() {
    axios.get("./data/project-list.json").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<style scoped lang="scss">
.project-wrap {
  .container {
    margin-top: 87px;

    .video-card {
      margin-bottom: 35px;
      cursor: pointer;

      //Mobile interaction for the video card
      &:active {
        color: $green;
      }
      &:active path {
        stroke: $green;
      }

      .project {
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .project {
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

    .info {
      span {
        font-size: 0.9rem;
      }
      svg {
        width: 6.34px;
        height: 12.78px;
      }
    }

    .modal-body {
      p {
        font-size: 0.9rem;
      }
    }

    .modal-footer {
      padding: 0;
      .btn-switch {
        margin: 0;
        padding: 15px 0;
        width: 50%;
        font-size: 0.7rem;
        @include break-max(991px) {
          &:active {
            z-index: 999;
            outline-color: $green-outline;
          }
        }

        @include break-min(992px) {
          &:hover {
            z-index: 999;
            outline-color: $green-outline;
          }
        }
      }

      .line {
        width: 2px;
        height: 46px;
        background: scale-color($dark-green, $alpha: -30%);
        left: 50%;
        bottom: 0px;
      }

      .anchor {
        width: 50%;
        height: 10px;
        margin: 0;
        left: 0;
        bottom: 46px;
        align-items: flex-end;
      }

      .anchor-2 {
        @extend .anchor;
        left: auto;
        right: 0;
      }
    }
  }
}

[data-popover="first"] {
  &::before {
    border-top: 6px solid $bg-black !important;
  }
  font-weight: 700;
  background: $bg-black;
  color: $green;
  font-size: 0.8rem;
  padding: 10px 30px;
  border-radius: 17px;
  top: auto !important;
  left: auto !important;
}

[data-popover="second"] {
  @extend [data-popover="first"];
}

@include break-max(575px) {
  [data-popover="first"] {
    width: 140px !important;
    padding: 10px 20px;
  }

  [data-popover="second"] {
    @extend [data-popover="first"];
  }
}
</style>
