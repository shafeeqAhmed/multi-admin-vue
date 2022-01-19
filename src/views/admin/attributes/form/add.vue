<template>
  <b-card>
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
                  label="Attribute Name"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="title"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Attribute Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <!-- <b-col md="12">
                <b-form-group
                  label="File Allowed ?"
                  label-for="label-text-"
                >
                  <div class="demo-inline-spacing">
                    <b-form-checkbox
                      v-model="is_file_able"
                      name="check-button"
                      switch
                      inline
                    />
                  </div>
                </b-form-group>
              </b-col> -->
              <b-col cols="12">
                <v-select
                  v-model="status"
                  placeholder="Select Status"
                  :options="['Active', 'Disabled']"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :close-on-select="true"
                />
              </b-col>
            </b-row>
            <div class="text-lg-right mt-1">
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
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import vSelect from 'vue-select'
import StoreModule from '../StoreModule'

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
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      title: '',
      is_file_able: false,
      required,
      status: 'Active',
      recordId: 0,
    }
  },
  created() {
    const USER_APP_STORE_MODULE_NAME = 'adminAttributes'
    // Register module
    if (!this.$store.hasModule(USER_APP_STORE_MODULE_NAME)) this.$store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

    const { id } = this.$router.currentRoute.params
    if (id) {
      this.$store.dispatch('adminAttributes/fetchRecord', { id }).then(response => {
        const { attribute } = response.data.data
        this.updateFields(attribute)
      })
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('title', this.title)
          data.append('status', this.status)
          data.append('is_file_able', this.is_file_able)
          if (this.recordId === 0) {
            this.$http.post('attributes', data).then(response => {
              if (response.data.status) {
                this.successAlert(response.data.message)
                this.$router.push({ name: 'admin-attributes-list' })
              } else {
                this.errorAlert(response.data.message)
              }
            })
          } else {
            data.append('_method', 'put')
            this.$http.post(`/attributes/${this.recordId}`, data).then(response => {
              this.$bvToast.toast(response.data.message, {
                title: 'Success',
                variant: 'success',
                solid: true,
              })
              this.$router.push({ name: 'admin-attributes-list' })
            })
          }
        }
      })
    },
    updateFields(attribute) {
      this.title = attribute.title
      this.is_file_able = attribute.is_file_able
      this.status = attribute.status === 1 ? 'Active' : 'Diabled'
      this.recordId = attribute.id
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-icon{
color: #EA5A5B;
margin-top: 6px;
}
.btn-icon:hover{
cursor: pointer;
}
.submit{
z-index: 1 !important;
margin-bottom: 10% !important;
}
.repeater-form {
  overflow: hidden;
  transition: 0.35s height;
}
</style>
