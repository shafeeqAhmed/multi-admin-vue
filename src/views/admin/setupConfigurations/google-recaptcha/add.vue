<template>
  <div>
    <b-row>
      <b-col class="col-md-6">
        <b-card class="main-content">
          <h5 class="card-title">
            Google reCAPTCHA Setting
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
                    label="Google reCAPTCHA*"
                    label-for="label-text-"
                  >
                      <b-form-checkbox
                        v-model="v2_status"
                        switch
                      />
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="Site KEY*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Site Key"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="v2_site_key"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Site Key"
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
            Google reCAPTCHA V3 Setting
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
                        label="Google reCAPTCHA V3*"
                        label-for="label-text-"
                      >
                        <b-form-checkbox
                          v-model="v3_status"
                          switch
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="12">
                      <b-form-group
                        label="Site KEY*"
                        label-for="label-text-"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Site Key"
                          rules="required"
                        >
                          <b-form-input
                            id="label-text"
                            v-model="v3_siteKey"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Facebook App Secret"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col md="12">
                      <b-form-group
                        label="SECRET KEY*"
                        label-for="label-text-"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="SECRET KEY"
                          rules="required"
                        >
                          <b-form-input
                            id="label-text"
                            v-model="v3_secret_key"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Secret Key"
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
                      @click.prevent="SubmitV3captcha"
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
  BFormCheckbox,
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
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {

      required,
      v2_site_key: '',
      v2_status: false,
      v3_status: false,
      v3_siteKey: '',
      v3_secret_key: '',
      recaptcha: '',

    }
  },

  mounted() {
    this.fetchrecaptcha()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('v2_status', this.v2_status)
          data.append('CAPTCHA_KEY', this.v2_site_key)

          this.$http.post('recaptcha/v2-update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    SubmitV3captcha() {
      this.$refs.simpleRules1.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('CAPTCHA_SITE_KEY', this.v3_siteKey)
          data.append('v3_status', this.v3_status)
          data.append('CAPTCHA_SECRET_KEY', this.v3_secret_key)

          this.$http.post('recaptcha/v3-update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    fetchrecaptcha() {
      this.$http.get('recaptcha/fetchRecords').then(response => {
        this.recaptcha = response.data.data
        this.updateFields(this.recaptcha)
      })
    },
    updateFields(recaptcha) {
      this.v2_site_key = recaptcha.CAPTCHA_KEY
      this.v3_siteKey = recaptcha.CAPTCHA_SITE_KEY
      this.v3_secret_key = recaptcha.CAPTCHA_SECRET_KEY
      this.v2_status = recaptcha.captchav2_status === '1' ? 'true' : false
      this.v3_status = recaptcha.captchav3_status === '1' ? 'true' : false
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
