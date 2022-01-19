<template>
  <div>
    <b-row>
      <b-col md="12">
        <app-collapse :is-submited="isSubmitProductCollapse('dimention')">
          <app-collapse-item
            title="Product Dimensions"
            :is-visible="isOpenProductCollapse('dimention')"
          >
            <b-card>
              <hr>
              <b-row>
                <b-col md="12">
                  <!-- <h4>Product Dimensions</h4>
              <hr> -->
                  <b-form @submit.prevent>
                    <b-row>
                      <!-- Width -->
                      <b-col cols="12">
                        <b-form-group
                          label="Width (cm)"
                          label-for="v-width"
                        >
                          <b-form-input
                            id="v-width"
                            v-model="dimention.width"
                            type="number"
                            :state="true"
                          />
                        </b-form-group>
                      </b-col>

                      <!-- Height -->
                      <b-col cols="12">
                        <b-form-group
                          label="Height (cm)"
                          label-for="v-height"
                        >
                          <b-form-input
                            id="v-height"
                            v-model="dimention.height"
                            type="number"
                            :state="true"
                          />
                        </b-form-group>
                      </b-col>

                      <!-- Length -->
                      <b-col cols="12">
                        <b-form-group
                          label="Length (cm)"
                          label-for="v-length"
                        >
                          <b-form-input
                            id="v-length"
                            v-model="dimention.length"
                            type="number"
                            :state="true"
                          />
                        </b-form-group>
                      </b-col>

                      <!-- Volumetric Weight -->
                      <!-- <b-col cols="12">
                        <b-form-group
                          label="Volumetric Weight"
                          label-for="v-Vweight"
                        >
                          <b-form-input
                            id="v-Vweight"
                            v-model="volummetricWeight"
                            type="number"
                            :state="true"
                            :disabled="true"
                          />
                        </b-form-group>
                      </b-col> -->

                      <!-- Weight -->
                      <b-col cols="12">
                        <b-form-group
                          label="Weight"
                          label-for="v-weight"
                        >
                          <b-form-input
                            id="v-weight"
                            v-model="dimention.weight"
                            type="number"
                            :state="true"
                          />
                        </b-form-group>
                      </b-col>
                      <b-col class="col-md-12 text-right">
                        <b-button
                          variant="primary"
                          @click="submit"
                        >
                          <b-spinner
                            v-if="getLoader('loaderTwo')"
                            small
                          />
                          Submit
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-form>
                </b-col>
              </b-row>
            </b-card>
          </app-collapse-item>
        </app-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BForm,
  BFormInput,
  // BFormFile,
  // BImg,
  // BButtonClose,
  BButton,
  BSpinner,
  // BFormInput,
  // BFormInvalidFeedback,

} from 'bootstrap-vue'
// import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import store from '@/store'
// import { ref } from '@vue/composition-api'

// import vSelect from 'vue-select'
// import flatPickr from 'vue-flatpickr-component'
// import useUploadImage from '@/commonFunction/useUploadImage'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BSpinner,
    BForm,
    BFormInput,
    // BFormFile,
    // BImg,
    // BButtonClose,
    BButton,
    // ValidationProvider,
    // ValidationObserver,
    // BFormInput,
    // BFormInvalidFeedback,
    AppCollapse,
    AppCollapseItem,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      required,
      alphaNum,
      email,
    }
  },
  computed: {
    volummetricWeight() {
      return (this.dimention.width * this.dimention.height * this.dimention.length) / 5000
    },
  },
  methods: {
    submit() {
      store.commit('common/UPDATE_LOADER', { loader: 'loaderTwo', value: true })
      this.dimention.product_id = this.productId
      this.$http.post('products/update-dimention', this.dimention).then(response => {
        const { data } = response
        if (data.status) {
          // this.toastSuccess(data.message)
          this.updateMenu('dimention', { open: false, submit: true })
          this.updateMenu('video', { open: true, submit: false })
        } else {
          this.toastSuccess(data.message)
        }
      })
        .catch(error => {
          this.toastDanger('There is a Error in Your Product Information Form')
          this.$refs.refFormObserver.setErrors(error.response.data.errors)
        })
        .then(() => {
          // this.loginLoader = false
          store.commit('common/UPDATE_LOADER', { loader: 'loaderTwo', value: false })
        })
    },

  },
  setup(props) {
    const { productId } = toRefs(props)
    const blankDimention = {
      product_id: 0,
      width: 1,
      height: 1,
      length: 1,
      volumetric_weight: 1,
      weight: 1,
    }
    const dimention = ref(JSON.parse(JSON.stringify(blankDimention)))
    const resetdimention = () => {
      dimention.value = JSON.parse(JSON.stringify(blankDimention))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetdimention,
    )
    dimention.value.product_id = productId.value
    const getProductData = store.getters['adminProduct/getProductData']
    dimention.value.product_id = getProductData.id
    dimention.value.width = getProductData.width
    dimention.value.height = getProductData.height
    dimention.value.length = getProductData.length
    dimention.value.volumetric_weight = getProductData.volumetric_weight
    dimention.value.weight = getProductData.weight
    return {
      dimention,
      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
