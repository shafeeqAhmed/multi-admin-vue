<template>
  <div>
    <b-card class="main-content">
      <b-row>
        <b-col class="col-md-12">
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
                    label="Customers"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="customers"
                      rules="required"
                    >

                      <v-select
                        v-model="useremail"
                        placeholder="Select customers"
                        :reduce="useroption => useroption.email"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        multiple
                        label="email"
                        :options="useroption"
                        :close-on-select="false"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="12">

                  <b-form-group
                    label="Subscribers"
                    label-for="label-text-"
                  >

                    <validation-provider
                      #default="{ errors }"
                      name="subscriber"
                      rules="required"
                    >

                      <v-select
                        v-model="subs_email"
                        placeholder="Select Subscriber"
                        :reduce="subscriberoption => subscriberoption.email"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        multiple
                        label="email"
                        :options="subscriberoption"
                        :close-on-select="false"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group
                    label="subject*"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="subject"
                      rules="required"
                    >
                      <b-form-input
                        id="label-text"
                        v-model="subject"
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
                    label="Description"
                    label-for="label-text-"
                  >
                    <validation-provider
                      #default="{ errors }"
                      name="discription"
                      rules="required"
                    >
                      <quill-editor
                        ref="myQuillEditor"
                        v-model="description"
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
        </b-col>
      </b-row>
    </b-card>
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
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import vSelect from 'vue-select'
import {
  quillEditor,
} from 'vue-quill-editor'
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
import store from '@/store'
import StoreModule from './storeModule'

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
    quillEditor,
    // BFormCheckbox,
    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      useremail: [],
      required,
      subs_email: [],
      subject: '',
      description: '',
      useroption: '',
      subscriberoption: '',

    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  created() {
    const USER_APP_STORE_MODULE_NAME = 'newsletters'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)
  },
  mounted() {
    this.fetchusers()
    this.fetchsubscribers()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
                    const data = new FormData()
          data.append('useremail', JSON.stringify(this.useremail))
          data.append('subs_email', JSON.stringify(this.subs_email))
          data.append('subject', this.subject)
          data.append('description', this.description)

          this.$http.post('newsletters/newsletter-email', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },

    fetchusers() {
      this.$http.get('marketing/users-fetchRecords').then(response => {
        this.useroption = response.data.data.user
      })
    },
    fetchsubscribers() {
      this.$http.get('marketing/subscribers-fetchRecords').then(response => {
        this.subscriberoption = response.data.data.subscribers
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
    width: 50%;
    margin: auto;
}

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
