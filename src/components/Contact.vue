<template>
  <div class="contact-wrap">
    <!-- <div class="demo"></div> -->
    <transition name="fade" enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster" @after-enter="showContent = true">
      <div v-if="showModal" class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-8 offset-2">
              <transition name="fade" enter-active-class="animate__animated animate__fadeInDown animate__faster" leave-active-class="animate__animated animate__fadeOutUp animate__faster" @after-leave="showModal = false">
                <div v-if="showContent" class="card">
                  <div class="card-body">
                    <h5 class="card-title">The app says</h5>
                    <p class="card-text">Message sent successful!</p>
                    <button @click="showContent = false" class="btn btn-primary font-weight-bold">
                      OK
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition enter-active-class="animate__animated animate__fadeInDown">
      <div v-if="showContact" class="container">
        <form id="contact-form" @submit.prevent="process">
          <div class="form-group">
            <input type="text" class="form-control" name="name" v-model="name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" v-model="email" placeholder="Your email" required />
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" v-model="message" placeholder="What can we help you with?" required />
          </div>
          <button type="submit" class="btn btn-primary font-weight-bold">
            Submit
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import Email from "../smtp";

export default {
  name: "contact",
  data: function () {
    return {
      name: "",
      email: "",
      message: "",
      showModal: false,
      showContent: false,
      showContact: false
    };
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
  }
};
</script>

<style lang="scss" scoped>
.contact-wrap {
  // Sass Color Module
  // .demo{
  //   width:100px;
  //   height:100px;
  //   //background: transparentize(#F05353, .5);
  //   background: scale-color($green, $saturation: -20%);
  //   // background: scale-color($green, $alpha: -30%)
  // }

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

  form {
    margin-top: 50px;
    text-align: left;
  }

  .form-control {
    border: 0;
    border-radius: 0;
    background: $dark-gray;
    color: #f5f5f5;
    font-size: 0.8rem;
    padding: 1.25rem 0.75rem;
    transition: outline 0.45s ease-in;
    outline: 3px solid #3ecc2800;
    &:focus {
      outline: 3px solid #3ecc2888;
      box-shadow: none;
    }
  }
}
</style>