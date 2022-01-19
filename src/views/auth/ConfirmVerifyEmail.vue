/* eslint-disable */
<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Vuexy
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
          Please wait your Email is in verification process! 🕵🏻‍♀️
        </h2>
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
import { BLink, BImg } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    VuexyLogo,
    BLink,
    BImg,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/error.svg'),
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
  mounted() {
    const url = `/email/verify/${this.$route.params.id}/${this.$route.params.hash}?expires=${this.$route.query.expires}&signature=${this.$route.query.signature}`
    this.verifyEmail(url)
  },
  methods: {
    verifyEmail(url) {
      // eslint-disable-next-line no-unused-vars
      this.$http.post(url).then(response => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        userData.verifyKey = true
        localStorage.setItem('userData', JSON.stringify(userData))
        this.toastSuccess(response.data.message)
        this.activate()
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
    },
    activate() {
      setTimeout(() => this.$router.push('/'), 2000)
    },
  },

}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
