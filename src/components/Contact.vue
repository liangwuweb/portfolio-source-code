<template>
  <div class="contact-wrap">

    <transition enter-active-class="animate__animated animate__fadeInDown">
      <div v-if="showContact" class="container">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-6 order-lg-0">
            <h1 class="font-weight-bold header d-none d-lg-block text-left mb-3">Contact Me</h1>
            <div class="container-md">
              <!-- Contact Information Section -->
              <div class="list">
                <div class="list-item">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />
                  <a href="https://linkedin.com/in/liang-wu-b16952149" target="_blank">
                    linkedin.com/in/liang-wu-b16952149
                  </a>
                </div>
                <div class="list-item">
                  <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'phone-alt' }" />
                  +1 3047106378
                </div>
                <div class="list-item">
                  <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'envelope' }" />
                  liangwu@uwm.edu
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "contact",
  data: function () {
    return {
      name: "",
      email: "",
      message: "",
      showModal: false,
      showContent: false,
      showContact: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    process: function () {
      let name = this.name;
      let email = this.email;
      let message = this.message;

      this.name = "";
      this.email = "";
      this.message = "";

      this.sendMail(name, email, message);
    },
    sendMail: function (name, email, message) {
      Email.send({
        SecureToken: "565e4f8e-a3ff-44b1-b76a-4e3aba251b9d",
        To: "wl1664209734@gmail.com",
        From: "wl1664209734@gmail.com",
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> message: ${message}`,
      }).then(() => {
        this.showModal = true;
      });
    },
  },
  mounted() {
    const _this = this;
    setTimeout(function () {
      _this.showContact = !_this.showContact;
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.contact-wrap {
  height: calc(100% - 50px);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(7.8, 7.8, 7.8, 0.6);
    z-index: 999;
  }

  .card {
    border-radius: 0;
    background: $dark-gray;
    margin-top: 100px;
    border: 0;
    font-size: 0.9rem;

    .card-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: $green;
    }
  }

  .header {
    color: $green;
  }

  .list {
    color: #666;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px; // Space between each item

    .list-item {
      display: flex;
      align-items: center; // Aligns icon and text vertically
      gap: 10px; // Space between icon and text

      a {
        color: #0077b5; // LinkedIn blue color, customize as needed
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      font-awesome-icon {
        font-size: 1.2rem; // Adjust icon size
        color: #555; // Default color for icons
      }
    }

  }

  .row {
    padding-top: 140px;
  }

  .notes {
    margin-top: 130px;
    font-size: 0.9rem;
    color: $mid-gray;

    @include break-min(992px) {
      margin-top: 74px;
    }
  }
}
</style>