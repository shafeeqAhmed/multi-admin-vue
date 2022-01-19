<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="12">
          <h4>Product Price + Stock</h4>
          <hr>
          <!--Table-->
          <div class="table-responsive">
            <table class="table  table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">
                    Variant
                  </th>
                  <th scope="col">
                    Variant Price
                  </th>
                  <th scope="col">
                    SKU
                  </th>
                  <th scope="col">
                    Quantity
                  </th>
                  <th scope="col">
                    Photo
                  </th>
                  <th scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <td>
                    {{ product[0].title }}
                  </td>
                  <td class="pl-1 pr-1">
                    <b-form-input
                      v-model="product[1].price"
                      type="number"
                      min="1"
                    />
                  </td>
                  <td class="pl-1 pr-1">
                    <b-form-input
                      v-model="product[2].sku"
                      type="text"
                    />
                  </td>
                  <td>
                    <b-form-input
                      v-model="product[3].qty"
                      type="number"
                      min="1"
                    />
                  </td>
                  <td class="pl-1 pr-1">
                    <b-form-file
                      v-model="product[4].photos"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                    />
                  </td>
                  <td>
                    <b-button-close
                      class="text-danger pointer"
                    ><feather-icon
                      icon="TrashIcon"
                      @click="removeItem(index)"
                    /></b-button-close>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BFormFile,
  BButtonClose,

} from 'bootstrap-vue'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BFormFile,
    BButtonClose,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      file: [],
      isVariantColorEnabled: false,
      selectedColors: [],
      selectedAttributes: [],
    }
  },
  methods: {
    submit() {
      this.video.product_id = this.productId
      this.$http.post('products/update-video', this.video).then(response => {
        const { data } = response
        if (data.status) {
          this.successAlert(data.message)
        } else {
          this.errorAlert(data.message)
        }
      })
        .catch(() => {
          this.toastDanger('There is a Error in Your Product Information Form')
          // this.$refs.refFormObserver.setErrors(error.response.data.errors)
        })
    },
    checkBoxChange(event) {
      if (event) {
        this.selectedColors = []
      }
    },
    removeItem(index) {
      // eslint-disable-next-line no-unused-expressions
      this.products[index].splice(index, 1)
      this.toastSuccess('item removed form list successfyll!')
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
