<template>
  <div class="project-wrap position-absolute">

    <div class="container-lg">
      <div class="row">
        <!-- <div class="col-lg-3 offset-lg-1 pl-0"> -->
        <h1 class="font-weight-bold header d-none d-lg-block text-left mb-4">Project</h1>
        <!-- </div> -->
      </div>

      <!-- Video card -->
      <div class="row justify-content-center justify-content-lg-start">
        <card v-for="(project, index) in projects" @showModal="showModal(project)" :data-image="require('@/assets/' + project.image)" :key="project.name" :data-index="index" >
          <h1 slot="header">{{project.name}}</h1>
        </card>
      </div>

      
      <!-- Modal -->
      <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster" @after-enter="showVideoDialog = true">
        <div v-if="showVideoModal" class="modal d-block" tabindex="-1" role="dialog" @click="closeModal($event)">
          <transition enter-active-class="animate__animated animate__fadeInDown animate__faster" leave-active-class="animate__animated animate__fadeOutUp animate__faster">
            <div v-if="showVideoDialog" class="modal-dialog mb-5" role="document">
              
              <div class="modal-content">
                <div class="modal-header">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :class="{'d-none': videoSrc === null}" :src="videoSrc" id="video" allow="accelerometer; autoplay; encrypted-media" allowfullscreen></iframe>
                    <img class="img-fluid image" :class="{'d-none': imageSrc === undefined}" :src="imageSrc != undefined ? require('@/assets/' + imageSrc) : ''">
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
import Card from "./Card";

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
      imageSrc: "",
      siteLink: "",
    };
  },
  components: {
    FontAwesomeIcon,
    Card,
  },
  computed: {},
  methods: {
    staticPosition: function () {
      if (window.innerWidth >= 768) {
        this.projects.forEach((project) => {
          project.staticPosition = project.position.md;
        });
      } else {
        this.projects.forEach((project) => {
          project.staticPosition = project.position.sm;
        });
      }
    },
    resizePosition: function () {
      if (window.innerWidth >= 768) {
        this.projects.forEach((project) => {
          project.resizePosition = project.position.md;
        });
      } else {
        this.projects.forEach((project) => {
          project.resizePosition = project.position.sm;
        });
      }
    },
    staticSize: function () {
      if (window.innerWidth >= 768) {
        this.projects.forEach((project) => {
          project.staticSize = project.size.md;
        });
      } else {
        this.projects.forEach((project) => {
          project.staticSize = project.size.sm;
        });
      }
    },
    resizeSize: function () {
      if (window.innerWidth >= 768) {
        this.projects.forEach((project) => {
          project.resizeSize = project.size.md;
        });
      } else {
        this.projects.forEach((project) => {
          project.resizeSize = project.size.sm;
        });
      }
    },
    showModal: function (project) {
      this.projectTitle = project.name;
      this.description = project.description;
      this.videoSrc = project.videoSrc;
      this.imageSrc = project.imageSrc;
      this.siteLink = project.siteLink;
      this.showVideoModal = true;
      
      // get the id of this project, using the id to find the index of the project in the projects array
      const projectId = project.id;
      const currentIndex = Number(this.projects.findIndex((item) => item.id === project.id));
      //console.log(Number(currentIndex) - 1)

      // get prev and next index
      const prevIndex = Number(currentIndex) - 1;
      const nextIndex = Number(currentIndex) + 1;
      console.log(`Prev index: ${prevIndex}; Next index ${nextIndex}`)
    },
    hideModal: function () {
      this.projectTitle = "";
      this.description = "";
      this.videoSrc = "";
      this.siteLink = "";
      this.showVideoModal = false;
      this.showVideoDialog = false;
    },
    closeModal: function(event) {
      if (event.target.classList[0] === 'modal') {
        //alert('It\'s modal');
        this.hideModal();
      }
    },
    lanuchSite: function () {
      window.open(this.siteLink, "_blank");
    },

  },
  mounted() {
    axios.get("./data/project-list.json").then((response) => {
      this.projects = response.data.map((item) => {
        item.staticPosition = {};
        item.resizePosition = {};
        item.staticSize = {};
        item.resizeSize = {};
        return item;
      });
      this.staticPosition();
      this.staticSize();
      //console.log(this.projects);
    });

    this.$nextTick(function () {
      window.addEventListener("resize", this.resizePosition);
      window.addEventListener("resize", this.resizeSize);

      //initialize
      this.resizePosition();
      this.resizeSize();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizePosition);
    window.removeEventListener("resize", this.resizeSize);
  },
};
</script>

<style scoped lang="scss">
.opacity-0 {
  opacity: 0;
  margin-top: 500px;
}

.project-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .container-lg {
    margin-top: 87px;
    @include break-between(768px, 1199px) {
      margin-top: 100px;
    }
    @include break-min(1200px) {
      margin-top: 50px;
    }
    .header {
      color: $green;
      margin-left: 30px;
    }

    .row {
      @include break-min(1200px) {
        margin-left: 50px;
      }

      @include break-between(992px, 1200px) {
        margin-left: 100px;
      }
    }

    .video-card {
      margin-bottom: 35px;
      cursor: pointer;
      @include break-min(992px) {
        &:nth-of-type(3n + 1) {
          margin-left: 8.3333333333%;
        }
      }
      @include break-min(768px) {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }

      //Mobile interaction for the video card
      &:active {
        color: $green;
      }
      &:active path {
        stroke: $green;
      }

      .parent {
        overflow: hidden;
        &::before {
          content: "";
          width: 100%;
          height: 70px;
          background: $green;
          position: absolute;
          z-index: 111;
          opacity: 0.25;
          left: 0;

          @include break-min(768px) {
            width: calc(100% - 30px);
            left: 15px;
            height: auto;
            padding-top: calc(100% - 30px);
            top: 0;
          }
        }
      }

      .project {
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-transition: transform 0.5s;
        -moz-transition: transform 0.5s;
        -o-transition: transform 0.5s;
        transition: transform 0.5s;
        @include break-min(768px) {
          background-size: 280%;
        }
      }
      @include break-min(992px) {
        &:hover .project {
          -ms-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -webkit-transform: scale(1.2);
          -o-transform: scale(1.2);
          transform: scale(1.2);
          &::before {
            @include break-min(768px) {
              padding-top: 100%;
              transition: none !important;
            }
          }
        }
      }
    }

    .project {
      width: 100%;
      height: 70px;
      background: #ccc;

      @include break-min(768px) {
        height: auto;
        padding-top: 100%;
      }
    }

    .info {
      span {
        font-size: 0.9rem;
        font-family: "Gotham Pro Medium";
        @include break-min(768px) {
          font-size: 1rem;
        }
      }
      svg {
        width: 6.34px;
        height: 12.78px;
      }
    }

    .image {
      position: absolute;
      top: 0;
      left: 0;
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
