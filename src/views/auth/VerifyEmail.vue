<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Multi Junction
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <b-input-group-append is-text>
        <feather-icon
          class="cursor-pointer"
          :icon="passwordToggleIcon"
          @click="resendVerificationEmail"
        />
      </b-input-group-append>

      <div class="w-100 text-center">
        <h2 class="mb-1">
          Your email is not verified Yet! 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.

        </p>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :disabled="isDisabled"
          @click="resendVerificationEmail"
          @mouseleave="isDisabled = false"
        >
          <feather-icon
            icon="UserIcon"
            class="mr-50"
          />
          <span class="align-middle">Resend Verification Email</span>
        </b-button>

        <!-- image -->
        <b-img
          fluid
          :src="imgUrl"
          alt="Error page"
        />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BButton, BImg } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    VuexyLogo,
    BLink,
    BButton,
    BImg,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/error.svg'),
      isDisabled: false,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/error-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  methods: {
    resendVerificationEmail() {
      this.isDisabled = true
      // eslint-disable-next-line no-unused-vars
      this.$http.post('email/verification-notification').then(response => {
        this.isDisabled = false

        this.$swal({
          title: 'Good job!',
          text: response.data.message,
          icon: 'success',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      })
        .catch(() => {
          this.isDisabled = false
          this.$swal({
            title: 'Error!',
            text: 'Something is going wrong please try again!',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
            buttonsStyling: false,
          })
        })
        .then(() => {
          this.isDisabled = false
        })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>

  function newFunction(userData) {
    return console.log(userData)
  }
