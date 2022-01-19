<template>
  <div>
    <b-row>
      <b-col class="col-md-6">
        <b-card class="main-content">
          <h5 class="card-title">
            SMTP Settings
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
                    label="Type"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="type"
                      rules="required"
                    >

                      <v-select
                        v-model="type"
                        placeholder="Select Type"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="smtp"
                        :options="['smtp','Sendmail','Mailgun' ]"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="Mail Host*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="mailhost"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="mailhost"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Mail Host"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="MAIL PORT*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="port"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="myport"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Subject"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="MAIL USERNAME*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="username"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="username"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Mail Username"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="MAIL PASSWORD*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="password"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="Mail Password"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col><b-col md="12">
                  <b-form-group
                    label="MAIL ENCRYPTION*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="encryption"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="mail_encryption"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="MAIL ENCRYPTION"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="MAIL FROM ADDRESS*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="email"
                      rules="email"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="from_mail_address"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="MAIL FROM ADDRESS"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="MAIL FROM NAME*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="Label"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="from_name"
                        :state="errors.length > 0 ? false : null"
                        type="text"
                        placeholder="NAME"
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
            Test SMTP configuration
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
                        label="Email*"
                        label-for="label-text-"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Label"
                          rules="required"
                        >
                          <b-form-input
                            id="label-text"
                            v-model="email"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Email"
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
                      @click.prevent="sendemail"
                    >
                      Submit
                    </b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-col>

          </b-row>
        </b-card>
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0 h6">
              Instruction
            </h5>
          </div>
          <div class="card-body">
            <p class="text-danger">
              Please be carefull when you are configuring SMTP. For incorrect configuration you will get error at the time of order place, new registration, sending newsletter.
            </p>
            <h6 class="text-muted">
              For Non-SSL
            </h6>
            <ul class="list-group">
              <li class="list-group-item text-dark">
                Select sendmail for Mail Driver if you face any issue after configuring smtp as Mail Driver
              </li>
              <li class="list-group-item text-dark">
                Set Mail Host according to your server Mail Client Manual Settings
              </li>
              <li class="list-group-item text-dark">
                Set Mail port as 587
              </li>
              <li class="list-group-item text-dark">
                Set Mail Encryption as ssl if you face issue with tls
              </li>
            </ul>
            <br>
            <h6 class="text-muted">
              For SSL
            </h6>
            <ul class="list-group mar-no">
              <li class="list-group-item text-dark">
                Select sendmail for Mail Driver if you face any issue after configuring smtp as Mail Driver
              </li>
              <li class="list-group-item text-dark">
                Set Mail Host according to your server Mail Client Manual Settings
              </li>
              <li class="list-group-item text-dark">
                Set Mail port as 465
              </li>
              <li class="list-group-item text-dark">
                Set Mail Encryption as ssl
              </li>
            </ul>
          </div>
        </div>
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

import vSelect from 'vue-select'

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

    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {

      type: '',
      mailhost: '',
      myport: '',
      username: '',
      password: '',
      mail_encryption: '',
      from_mail_address: '',
      from_name: '',
      smtp: '',
      email: '',
      required,
      recordId: '',

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
          data.append('MAIL_MAILER', this.type)
          data.append('MAIL_HOST', this.mailhost)
          data.append('MAIL_PORT', this.myport)
          data.append('MAIL_USERNAME', this.username)
          data.append('MAIL_PASSWORD', this.password)
          data.append('MAIL_ENCRYPTION', this.mail_encryption)
          data.append('MAIL_FROM_ADDRESS', this.from_mail_address)
          data.append('MAIL_FROM_NAME', this.from_name)

          this.$http.post('smtp/smtp-update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    sendemail() {
      this.$refs.simpleRules1.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('email', this.email)

          this.$http.post('smtp/send_email', data).then(response => {
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
      this.$http.get('smtp/smtp-fetchRecords').then(response => {
        this.smtp = response.data.data
        this.updateFields(this.smtp)
      })
    },
    updateFields(smtp) {
      this.type = smtp.type
      this.mailhost = smtp.mailhost
      this.myport = smtp.myport
      this.username = smtp.username
      this.password = smtp.password
      this.mail_encryption = smtp.mail_encryption
      this.from_mail_address = smtp.from_mail_address
      this.from_name = smtp.from_name
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
