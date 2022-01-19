/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <!--        <vuexy-logo />-->
        <b-img :src="require('@/assets/images/logo/multi.png')" />
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Register V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title class="mb-1">
            Welcome to Multijunction! 🚀
          </b-card-title>
          <b-card-text class="mb-2">
            Make your app management easy and fun!
          </b-card-text>

          <!-- form -->
          <validation-observer
            ref="registerForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-register-form mt-2"
              @submit.prevent="register"
            >
              <!-- username -->
              <b-form-group
                label="Username"
                label-for="register-username"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Username"
                  vid="username"
                  rules="required"
                >
                  <b-form-input
                    id="register-username"
                    v-model="username"
                    name="register-username"
                    :state="errors.length > 0 ? false:null"
                    placeholder="johndoe"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- email -->
              <b-form-group
                label="Email"
                label-for="register-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="register-email"
                    v-model="userEmail"
                    name="register-email"
                    :state="errors.length > 0 ? false:null"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group
                label-for="register-password"
                label="Password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="password"
                  vid="password"
                  rules="required|password"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="register-password"
                      v-model="password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false:null"
                      name="register-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!--Confirm password -->
              <b-form-group
                label-for="register-confirm-password"
                label="Confirm Password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Confirm-Password"
                  vid="confirm-password"
                  rules="required|confirmed:password"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="register-confirm-password"
                      v-model="password_confirmation"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false:null"
                      name="register-confirm-password"
                      placeholder="Confirm Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-form-group>
                <b-form-checkbox
                  id="register-privacy-policy"
                  v-model="status"
                  name="checkbox-1"
                  required
                >
                  I agree to
                  <b-link>privacy policy & terms</b-link>
                </b-form-checkbox>
              </b-form-group>

              <b-button
                variant="primary"
                block
                type="submit"
                :disabled="invalid"
              >
                <b-spinner
                  v-if="getLoader('loaderOne')"
                  small
                />
                Sign up
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <span>Already have an account?</span>
            <b-link :to="{name:'auth-login'}">
              <span>&nbsp;Sign in instead</span>
            </b-link>
          </p>

        </b-col>
      </b-col>
    <!-- /Register-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
// import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BSpinner, BCol, BLink, BButton, BForm, BFormCheckbox, BFormGroup, BFormInput, BInputGroup, BInputGroupAppend, BImg, BCardTitle, BCardText,
} from 'bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import {
  // eslint-disable-next-line no-unused-vars
  required, email, password, confirmed,
} from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'

export default {
  components: {
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    // validations
    ValidationProvider,
    BSpinner,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      username: '',
      userEmail: '',
      password: '',
      password_confirmation: '',
      sideImg: require('@/assets/images/pages/register-v2.svg'),
      // validation
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    register() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          this.updateLoader('loaderOne', true)
          useJwt.register({
            name: this.username,
            email: this.userEmail,
            password: this.password,
            terms: this.status,
            password_confirmation: this.password_confirmation,
          })
            .then(() => {
              this.$bvToast.toast('You are register successfully!', {
                // eslint-disable-next-line no-undef
                title: 'Success',
                variant: 'success',
                solid: true,
              })
              this.$router.push('/login').catch(() => {})
            })
            .catch(error => {
              this.$refs.registerForm.setErrors(error.response.data.errors)
            })
            .then(() => {
              // this.loginLoader = false
              this.updateLoader('loaderOne', false)
            })
        }
      })
    },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
