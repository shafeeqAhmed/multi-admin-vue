<template>
  <div>
    <app-collapse :is-submited="isSubmitProductCollapse('video')">
      <app-collapse-item
        title="Product Videos"
        :is-visible="isOpenProductCollapse('video')"
      >
        <b-card>
          <hr>
          <b-row>
            <b-col md="12">
              <!-- <h4>Product Videos</h4>
              <hr> -->
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Video Provider"
                      label-for="h-video"
                      label-cols-md="4"
                    >
                      <v-select
                        v-model="video.video_provider"
                        :options="['Youtube', 'Dailymotion']"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Video Link"
                      label-for="h-barcode"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-barcode"
                        v-model="video.video_url"
                        type="text"
                        placeholder="Youtube"
                      />
                      <span
                        class="files"
                      >Use proper link without parameter. Don't use short show
                        links</span>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-col class="col-md-12 text-right pr-lg-0">
                  <b-button
                    variant="primary"
                    @click="submit"
                  >
                    <b-spinner
                      v-if="getLoader('loaderThree')"
                      small
                    />
                    Submit
                  </b-button>
                </b-col>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </app-collapse-item>
    </app-collapse>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BSpinner,
  BFormGroup,
  BForm,
  BFormInput,
  // BFormFile,
  // BImg,
  // BButtonClose,
  BButton,
  // BFormInput,
  // BFormInvalidFeedback,

} from 'bootstrap-vue'
import vSelect from 'vue-select'

// import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref } from '@vue/composition-api'
import {
  required, alphaNum, email,
} from '@validations'
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
    BForm,
    BFormInput,
    BSpinner,
    // BFormFile,
    // BImg,
    // BButtonClose,
    BButton,
    vSelect,
    AppCollapse,
    AppCollapseItem,
    // ValidationProvider,
    // ValidationObserver,
    // BFormInput,
    // BFormInvalidFeedback,
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
      store.commit('common/UPDATE_LOADER', { loader: 'loaderThree', value: true })
      this.video.product_id = this.productId
      this.$http.post('products/update-video', this.video).then(response => {
        const { data } = response
        if (data.status) {
          // this.successAlert(data.message)
          this.updateMenu('video', { open: false, submit: true })
          this.updateMenu('images', { open: true, submit: false })
        } else {
          this.errorAlert(data.message)
        }
      })
        .catch(() => {
          this.toastDanger('There is a Error in Your Product Information Form')
          // this.$refs.refFormObserver.setErrors(error.response.data.errors)
        })
        .then(() => {
          // this.loginLoader = false
          store.commit('common/UPDATE_LOADER', { loader: 'loaderThree', value: false })
        })
    },
  },
  setup() {
    const blankVideo = {
      product_id: 0,
      video_provider: '',
      video_url: '',
    }
    const video = ref(JSON.parse(JSON.stringify(blankVideo)))
    const resetvideo = () => {
      video.value = JSON.parse(JSON.stringify(blankVideo))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetvideo,
    )

    return {
      video,
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
