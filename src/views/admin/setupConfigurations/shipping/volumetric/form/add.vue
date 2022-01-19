<template>
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
                  label="MIN WEIGHT *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="min_weight"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="MIN WEIGHT"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>

              <b-col md="12">
                <b-form-group
                  label="MAX WEIGHT *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="max_weight"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="MAX WEIGHT"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="DEFAULT PRICE *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="default_price"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="DEFAULT PRICE"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="PRICE PER KG *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="per_kg_price"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="MAX WEIGHT"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>

            </b-row>

            <div

              class="text-lg-left mt-1"
            >
              <b-button
                class="submit"
                variant="primary"
                type="submit"
                @click.prevent="validationForm"
              >
                Update
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
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import store from '@/store'
import StoreModule from '../storeModule'

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

    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      min_weight: '',
      max_weight: '',
      default_price: '',
      per_kg_price: '',
      required,
      volumatric: '',
      recordId: 0,
    }
  },

  created() {
    const USER_APP_STORE_MODULE_NAME = 'volumatric'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

    const { id } = this.$router.currentRoute.params
    this.recordId = id
    if (id) {
      this.$http.get(`volumatric/fetchRecord/${id}`).then(response => {
        this.volumatric = response.data.data.volumetric
        this.updateFields(this.volumatric)
      })
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('min_weight', this.min_weight)
          data.append('max_weight', this.max_weight)
          data.append('default_price', this.default_price)
          data.append('per_kg_price', this.per_kg_price)

          data.append('_method', 'post')
          this.$http.post(`volumatric/update/${this.recordId}`, data, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          }).then(response => {
            this.$bvToast.toast(response.data.message, {
              title: 'Success',
              variant: 'success',
              solid: true,
            })
            this.$router.push({ name: 'volumetric-weight' })
          })
        }
      })
    },
    updateFields(volumatric) {
      this.min_weight = volumatric.min_weight
      this.max_weight = volumatric.max_weight
      this.default_price = volumatric.default_price
      this.per_kg_price = volumatric.per_kg_price
    },

  },
}
</script>

<style lang="scss" scoped>
.main-content{
    width:50%;
    margin:auto;
}
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
