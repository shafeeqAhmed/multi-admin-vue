<template>
  <div>
    <b-row>
      <b-col class="col-md-6">
        <b-card class="main-content">
          <h5 class="card-title">
            Google Login Credential
          </h5>
          <validation-observer ref="simpleRules">
            <b-form
              ref="form"
              :style="{ height: trHeight }"
              class="repeater-form"
            >
              <br>
              <b-row>
                <!-- input text field -->
                <!-- Label -->
                <b-col md="12">
                  <b-form-group
                    label="Client ID*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="client-id"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="Gclientid"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Google Client Id"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="Client Secret*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Google client secret"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="GclientSecret"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Google Client Secret"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

              </b-row>

              <div class="text-lg-center mt-1">
                <b-button
                  class="submit"
                  variant="primary"
                  type="submit"
                  @click.prevent="validationForm"
                >
                  Submit
                </b-button>
              </div>
            </b-form>
          </validation-observer>
        </b-card>
      </b-col>
      <b-col class="col-md-6">
        <b-card class="main-content">
          <h5 class="card-title">
            Facebook Login Credential
          </h5>
          <b-row>
            <b-col class="col-md-12">
              <validation-observer ref="simpleRules1">
                <b-form
                  ref="Emilform"
                  :style="{ height: trHeight }"
                  class="repeater-form"
                >
                  <br>
                  <b-row>
                    <!-- input text field -->
                    <!-- Label -->

                    <b-col md="12">
                      <b-form-group
                        label="App ID*"
                        label-for="label-text-"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="app id"
                          rules="required"
                        >
                          <b-form-input
                            id="label-text"
                            v-model="Fappid"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Facebook App ID"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col md="12">
                      <b-form-group
                        label="App Secret*"
                        label-for="label-text-"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="app secret"
                          rules="required"
                        >
                          <b-form-input
                            id="label-text"
                            v-model="Fappsecret"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Facebook App Secret"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <div class="text-lg-center mt-1">
                    <b-button
                      class="submit"
                      variant="primary"
                      type="submit"
                      @click.prevent="Submitfacebbok"
                    >
                      Submit
                    </b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-col>

          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-md-6">
        <b-card class="main-content">
          <h5 class="card-title">
            Twitter Login Credential
          </h5>
          <validation-observer ref="simpleRules2">
            <b-form
              ref="form"
              :style="{ height: trHeight }"
              class="repeater-form"
            >
              <br>
              <b-row>
                <!-- input text field -->
                <!-- Label -->
                <b-col md="12">
                  <b-form-group
                    label="Client ID*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Twitter client id"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="Tclientid"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Twitter Client ID"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="Client Secret*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Twitter client secret"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="TclientSecret"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Twitter Client Secret"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

              </b-row>

              <div class="text-lg-center mt-1">
                <b-button
                  class="submit"
                  variant="primary"
                  type="submit"
                  @click.prevent="SubmitTwitter"
                >
                  Submit
                </b-button>
              </div>
            </b-form>
          </validation-observer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BRow,
  BCol,
  BButton,
  BCard,
  // BFormCheckbox,
} from 'bootstrap-vue'
// require styles

import {
  heightTransition,
} from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate'
import {
  required,
} from '@validations'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BCard,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {

      Gclientid: '',
      GclientSecret: '',
      Fappid: '',
      required,
      Fappsecret: '',
      Tclientid: '',
      TclientSecret: '',
      socail_media_login: '',

    }
  },

  mounted() {
    this.fetchSmtp()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('GOOGLE_CLIENT_ID', this.Gclientid)
          data.append('GOOGLE_CLIENT_SECRET', this.GclientSecret)

          this.$http.post('social_media_login/google-login-update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    Submitfacebbok() {
      this.$refs.simpleRules1.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('FACEBOOK_CLIENT_ID', this.Fappid)
          data.append('FACEBOOK_CLIENT_SECRET', this.Fappsecret)

          this.$http.post('social_media_login/facebook-login-update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    SubmitTwitter() {
      this.$refs.simpleRules2.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('TWITTER_CLIENT_ID', this.Tclientid)
          data.append('TWITTER_CLIENT_SECRET', this.TclientSecret)

          this.$http.post('social_media_login/twitter-login-update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    fetchSmtp() {
      this.$http.get('social-media-login/fetchRecords').then(response => {
        this.socail_media_login = response.data.data
        this.updateFields(this.socail_media_login)
      })
    },
    updateFields(socailmedialogin) {
      this.Gclientid = socailmedialogin.GOOGLE_CLIENT_ID
      this.GclientSecret = socailmedialogin.GOOGLE_CLIENT_SECRET
      this.Fappid = socailmedialogin.FACEBOOK_CLIENT_ID
      this.Fappsecret = socailmedialogin.FACEBOOK_CLIENT_SECRET
      this.Tclientid = socailmedialogin.TWITTER_CLIENT_ID
      this.TclientSecret = socailmedialogin.TWITTER_CLIENT_SECRET
    },
  },
}
</script>

<style lang="scss" scoped>

.uploadImage {
    width: 170px;
    height: 200px;
}

.btn-icon {
    color: #EA5A5B;
    margin-top: 6px;
}

.btn-icon:hover {
    cursor: pointer;
}

.submit {
    z-index: 1 !important;
    margin-bottom: 10% !important;
}

.repeater-form {
    overflow: hidden;
    transition: 0.35s height;
}
</style>
