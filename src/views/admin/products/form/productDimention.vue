<template>
  <div>
    <b-row>
      <b-col md="12">
        <app-collapse :is-submited="isSubmitProductCollapse('dimention')">
          <app-collapse-item
            title="Product Description"
            :is-visible="isOpenProductCollapse('dimention')"
          >
            <b-card>
              <hr>
              <b-row>
                <b-col md="12">
                  <b-form @submit.prevent>
                    <b-row>
                      <!-- Width -->
                      <b-col md="12">
                        <b-form-group
                          label="Short Description*"
                          label-for="label-text-"
                        >
                          <quill-editor
                            ref="myQuillEditor_short"
                            v-model="dimention.short_description"
                          />
                        </b-form-group>
                      </b-col>
                      <b-col cols="12">
                        <b-form-group
                          label="Long Description"
                          label-for="v-weight"
                        >
                          <quill-editor
                            ref="myQuillEditor_long"
                            v-model="dimention.long_description"
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
  // BFormFile,
  // BImg,
  // BButtonClose,
  BButton,
  BSpinner,
  // BFormInput,
  // BFormInvalidFeedback,

} from 'bootstrap-vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { quillEditor } from 'vue-quill-editor'
import store from '@/store'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BSpinner,
    BForm,
    quillEditor,
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
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  methods: {
    submit() {
      store.commit('common/UPDATE_LOADER', { loader: 'loaderTwo', value: true })
      this.dimention.product_id = this.productId
      this.$http.post('products/update-description', this.dimention).then(response => {
        const { data } = response
        if (data.status) {
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
          store.commit('common/UPDATE_LOADER', { loader: 'loaderTwo', value: false })
        })
    },

  },
  setup(props) {
    const { productId } = toRefs(props)
    const blankDimention = {
      product_id: 0,
      short_description: null,
      long_description: null,
    }
    const dimention = ref(JSON.parse(JSON.stringify(blankDimention)))
    const resetdimention = () => {
      dimention.value = JSON.parse(JSON.stringify(blankDimention))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetdimention,
    )
    dimention.value.product_id = productId.value
    /* const getProductData = store.getters['adminProduct/getProductData']
    dimention.value.product_id = getProductData.id
    dimention.value.width = getProductData.width
    dimention.value.height = getProductData.height
    */
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
