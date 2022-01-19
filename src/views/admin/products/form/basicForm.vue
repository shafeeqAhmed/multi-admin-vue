<template>
  <div>
    <b-row>
      <b-col md="12">
        <app-collapse :is-submited="isSubmitProductCollapse('info')">
          <app-collapse-item
            title="Product Information"
            :is-visible="isOpenProductCollapse('info')"
          >
            <b-card>
              <hr>
              <validation-observer
                #default="{ handleSubmit }"
                ref="refFormObserver"
              >
                <!-- Form -->
                <b-form
                  class="p-2"
                  @submit.prevent="handleSubmit(onSubmit)"
                  @reset.prevent="resetForm"
                >
                  <!-- Product Title-->
                  <validation-provider
                    #default="validationContext"
                    name="title"
                    rules="required"
                  >
                    <b-form-group
                      label="Title"
                      label-for="title"
                    >
                      <b-form-input
                        id="title"
                        v-model="userData.title"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Product Title"
                      />

                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                    <!-- <small class="text-danger">{{ errors[0] }}</small> -->
                  </validation-provider>

                  <!-- Sub Title Product Sub Title-->
                  <validation-provider
                    #default="validationContext"
                    name="sub_title"
                  >
                    <b-form-group
                      label="Sub Title"
                      label-for="sub-title"
                    >
                      <b-form-input
                        id="sub-title"
                        v-model="userData.sub_title"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Sub Title"
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- Price-->
                  <validation-provider
                    #default="validationContext"
                    name="price"
                    rules="required"
                  >
                    <b-form-group
                      label="Price"
                      label-for="price"
                    >
                      <b-form-input
                        id="price"
                        v-model="userData.price"
                        type="number"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Product Price"
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- selling Price-->
                  <validation-provider
                    #default="validationContext"
                    name="Selling Price"
                    rules="required"
                  >
                    <b-form-group
                      label="Selling Pricce"
                      label-for="selling_price"
                    >
                      <b-form-input
                        id="selling_price"
                        v-model="userData.selling_price"
                        type="number"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Selling Price"
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- cost-->
                  <validation-provider
                    #default="validationContext"
                    name="cost"
                    rules="required"
                  >
                    <b-form-group
                      label="Cost"
                      label-for="cost"
                    >
                      <b-form-input
                        id="cost"
                        v-model="userData.cost"
                        type="number"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Product Cost"
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- Quantity-->
                  <validation-provider
                    #default="validationContext"
                    name="qty"
                    rules="required"
                  >
                    <b-form-group
                      label="Qty"
                      label-for="Qty"
                    >
                      <b-form-input
                        id="qty"
                        v-model="userData.qty"
                        type="number"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Qty"
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- Low quantity alert-->
                  <validation-provider
                    #default="validationContext"
                    name="Low Quantity Alert"
                    rules="required"
                  >
                    <b-form-group
                      label="Low Qty"
                      label-for="low_qty_alert"
                    >
                      <b-form-input
                        id="low_qty_alert"
                        v-model="userData.low_qty_alert"
                        type="number"
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Low Qty Alert"
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <b-col class="col-md-12 text-right pr-lg-0">
                    <b-button
                      variant="primary"
                      @click="submit"
                    >
                      <b-spinner
                        v-if="getLoader('loaderOne')"
                        small
                      />
                      Submit
                    </b-button>
                  </b-col>
                </b-form>
              </validation-observer>
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
  // BFormFile,
  // BImg,
  // BButtonClose,
  BButton,
  BFormInput,
  BFormInvalidFeedback,
  BSpinner,

} from 'bootstrap-vue'

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
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
    BForm,
    // BFormFile,
    // BImg,
    // BButtonClose,
    BButton,
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormInvalidFeedback,
    AppCollapse,
    AppCollapseItem,
    BSpinner,
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

  methods: {
    submit() {
      // eslint-disable-next-line no-undef
      // this.notification()
      // this.$loading.show()
      this.$refs.refFormObserver.validate().then(success => {
        if (success) {
          store.commit('common/UPDATE_LOADER', { loader: 'loaderOne', value: true })
          this.$http.post('products', this.userData).then(response => {
            const { data } = response
            if (data.status) {
              this.userData.product_id = data.data.product.id
              this.$emit('basicFormData', data.data.product)
              this.updateMenu('info', { open: false, submit: true })
              this.updateMenu('dimention', { open: true, submit: false })
              // this.toastSuccess(data.message)
            } else {
              this.toastSuccess(data.message)
            }
            // this.$store.commit('adminProduct/showNextField', payload.index)
          })
            .catch(error => {
              this.toastDanger('There is a Error in Your Product Information Form')
              this.$refs.refFormObserver.setErrors(error.response.data.errors)
            })
            .then(() => {
              // this.loginLoader = false
              store.commit('common/UPDATE_LOADER', { loader: 'loaderOne', value: false })
            })
        }
      })
    },
  },
  setup(props) {
    const { productId } = toRefs(props)
    const blankUserData = {
      product_id: '',
      title: '',
      sub_title: '',
      price: '',
      cost: '',
      selling_price: '',
      qty: '',
      low_qty_alert: '',
    }
    // const editProduct = store.state.adminProduct.productItems.product
    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetuserData,
    )
    userData.value.product_id = productId.value
    // const getProductData = store.getters['adminProduct/getProductData']
    // userData.value.product_id = getProductData.id
    // userData.value.title = getProductData.title
    // userData.value.sub_title = getProductData.sub_title

    return {
      userData,
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
