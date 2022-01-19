/* eslint-disable vue/no-unused-components */
<template>
  <div>
    <app-collapse :is-submited="isSubmitProductCollapse('variation')">
      <app-collapse-item
        title="Product Varaiations"
        :is-visible="isOpenProductCollapse('variation')"
      >
        <b-card>
          <hr>
          <b-row>
            <b-col md="12">
              <!-- <h4>Product Variations</h4> -->
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Colors"
                      label-for="h-colors"
                      label-cols-md="4"
                    >
                      <span class="d-flex justify-content-between ml-1">
                        <b-form-tags
                          v-model="selectedColors"
                          input-id="tags-remove-on-delete"
                          :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
                          separator=" "
                          placeholder="Enter new tags separated by space"
                          remove-on-delete
                          class="mb-2"
                          :disabled="!isVariantColorEnabled"
                          @input="updateVariants"
                        />
                        <!-- <v-select
                          v-model="selectedColors"
                          class="colorSelect"
                          placeholder="Select Colors"
                          :disabled="!isVariantColorEnabled"
                          multiple
                          :options="['Black', 'Red', 'Blue', 'Green', 'Yellow','Brown','Off White','Orange','sky blue','red blue','light green']"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :close-on-select="true"
                          @input="updateVariants"
                        /> -->
                        <!-- {{ selectedColors }} -->
                        <b-form-checkbox
                          v-model="isVariantColorEnabled"
                          class="ml-1"
                          name="check-button"
                          switch
                          @change="checkBoxColorChange($event)"
                        />
                      </span>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Color Image"
                      label-for="color-image"
                      label-cols-md="4"
                    >
                      <div class="d-flex flex-wrap">
                        <div
                          v-for="(color, index) in selectedColorsWithImages"
                          :key="index"
                          class="avatarImage"
                        >
                          <validation-provider
                            #default="validationContext"
                            rules="required"
                          >
                            <small class="text-muted">{{ color.color }}</small>
                            <b-form-file
                              :id="`image-${index}`"
                              v-model="color.photo.file"
                              class="hide-file-input"
                              :state="getValidationState(validationContext) === true ? true : false"
                              @change="previewImage($event, color)"
                            />
                            <div
                              v-if="color.photo.src === ''"
                              @click="chooseFile(`image-${index}`)"
                            >
                              <b-avatar
                                size="140"
                                :text="avatarText(color.color)"
                                :square="true"
                                variant="light"
                                target="_blank"
                                class="m-1 pointer avatar"
                                :class="{ 'required-avatar': color.isRequired }"
                              >
                                <feather-icon
                                  icon="CameraIcon"
                                  size="50"
                                  class="camera"
                                />
                              </b-avatar>
                            </div>
                            <div
                              v-else
                            >
                              <b-avatar
                                size="140"
                                :text="avatarText(color.color)"
                                :square="true"
                                :src="color.photo.src"
                                target="_blank"
                                class="m-1 pointer avatar-else-img"
                                :class="{ 'required-avatar': color.isRequired }"
                              />
                              <b-button-close
                                v-wave="{
                                  color: 'red',
                                  easing: 'ease-out',
                                  duration: 0.4,
                                  initialOpacity: 0.3,
                                  finalOpacity: 0.4,
                                  cancellationPeriod: 75,
                                }"
                                class="remover"
                                @click="removeImage(color)"
                              />
                            </div>
                          </validation-provider>
                        </div>
                      </div>
                    </b-form-group>
                  </b-col>
                  <!-- <br>
              <b-form-group>

              </b-form-group>-->
                  <b-col cols="12">
                    <b-form-group
                      label="Attributes"
                      label-for="h-attributes"
                      label-cols-md="4"
                    >
                      <v-select
                        v-model="selectedAttributes"
                        placeholder="Select Attributes"
                        multiple
                        :options="attributes"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        text-field="title"
                        value-field="title"
                        label="title"
                        @input="updateVariants"
                      />
                    </b-form-group>
                  </b-col>
                  <span
                    class="files ml-1"
                  >Choose the attributes of this product and then input value
                    of each attributes</span>
                  <b-col
                    v-for="(attribute, index) in selectedAttributes"
                    :key="index"
                    cols="12"
                    class="mt-1"
                  >
                    <b-form-group
                      :label="attribute.title"
                      label-for="`${attribute.label}-${index}`"
                      label-cols-md="4"
                    >
                      <b-form-tags
                        v-model="attribute.tags"
                        input-id="`${attribute.label}-${index}`"
                        separator=" ,;"
                        placeholder="Enter new tags separated by space, comma or semicolon"
                        no-add-on-enter
                        class="mb-1"
                        :state="true"
                        @input="updateVariants"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
        <!--  product stock and price -->
        <b-card class="mt-1">
          <b-row>
            <b-col md="12">
              <h4>Product Price + Stock</h4>
              <hr>
              <validation-observer
                ref="productVariantionObserver"
              >
                <b-form>
                  <!-- <b-row> -->
                  <!-- pricing tabe with qty -->
                  <!-- Market Place -->
                  <!-- <b-col
                      v-if="totalSelectedAttributes === 0"
                      cols="12"
                    >
                      <validation-provider
                        #default="validationContext"
                        name="Market Price"
                        rules="required"
                      >
                        <b-form-group
                          label="Market price"
                          label-cols-md="4"
                        >
                          <b-form-input
                            v-model="makeet_price"
                            type="number"
                            value="0"
                            :state="getValidationState(validationContext)"
                          />
                          <b-form-invalid-feedback>
                            {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </validation-provider>
                    </b-col> -->

                  <!-- Product Cost (Optional) -->
                  <!-- <b-col
                      v-if="totalSelectedAttributes === 0"
                      cols="12"
                    >
                      <b-form-group
                        label="Product Cost (Optional)"
                        label-cols-md="4"
                      >
                        <b-form-input
                          v-model="product_cost"
                          type="number"
                          value="0"
                        />
                      </b-form-group>
                    </b-col> -->

                  <!-- Selling price -->
                  <!-- <b-col
                      v-if="totalSelectedAttributes === 0"
                      cols="12"
                    >
                      <validation-provider
                        #default="validationContext"
                        name="Selling price"
                        rules="required"
                      >
                        <b-form-group
                          label="Selling price"
                          label-cols-md="4"
                        >
                          <b-form-input
                            v-model="selling_price"
                            type="number"
                            :state="getValidationState(validationContext)"
                          />
                          <b-form-invalid-feedback>
                            {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </validation-provider>
                    </b-col> -->
                  <!-- only qty input -->
                  <!-- Quantity -->
                  <!-- <b-col
                      v-if="totalSelectedColors === 0 && totalSelectedAttributes === 0"
                      cols="12"
                    >
                      <validation-provider
                        #default="validationContext"
                        name="Quantity"
                        rules="required"
                      >
                        <b-form-group
                          label="Quantity"
                          label-cols-md="4"
                        >
                          <b-form-input
                            v-model="qty"
                            type="number"
                            :state="getValidationState(validationContext)"
                          />
                          <b-form-invalid-feedback>
                            {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </validation-provider>
                    </b-col> -->
                  <!-- </b-row> -->
                  <!--Table-->
                  <div
                    v-if="totalProducts > 0"
                    class="table-responsive"
                  >
                    <table class="table  table-bordered text-center responsive">
                      <thead>
                        <tr>
                          <th scope="col">
                            <b-form-checkbox
                              id="selectAll"
                              v-model="selectAll"
                              name="selectAll"
                              :value="true"
                              :unchecked-value="false"
                              @change="selectAllCheckbox($event)"
                            >
                              Select
                            </b-form-checkbox>
                          </th>
                          <th scope="col">
                            Variant
                          </th>
                          <th scope="col">
                            Photo
                          </th>
                          <th scope="col">
                            Price
                            <feather-icon
                              icon="Edit2Icon"
                              class="ml-1 pointer toggle-btn"
                              @click="togglePopup()"
                            />
                          </th>
                          <th scope="col">
                            SKU
                            <feather-icon
                              icon="Edit2Icon"
                              class="ml-1 toggle-btn pointer"
                              @click="togglePopup()"
                            />
                          </th>
                          <th scope="col">
                            Quantity
                            <feather-icon
                              icon="Edit2Icon"
                              class="ml-1 toggle-btn pointer"
                              @click="togglePopup()"
                            />
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
                          <td class="align-items-center">
                            <b-form-checkbox
                              :id="`checkbox-${index}`"
                              v-model="checkBoxRecord"
                              :name="`checkbox-${index}`"
                              :value="index"
                              unchecked-value="not_accepted"
                            />
                          </td>
                          <td>
                            {{ product[0].title }}
                          </td>
                          <td>
                            <b-avatar
                              size="70"
                              :text="avatarText(product[4].color)"
                              :src="product[4].photo.src"
                              :square="true"
                              target="_blank"
                              class="pointer"
                            />
                          <!-- <b-form-file
                            v-model="product[4].photo.file"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                          /> -->
                          </td>
                          <td class="pl-1 pr-1">
                            <validation-provider
                              #default="validationContext"
                              rules="required"
                            >
                              <b-form-input
                                v-model="product[1].selling_price"
                                type="number"
                                min="1"
                                :state="getValidationState(validationContext)"
                              />
                            </validation-provider>
                          </td>
                          <td class="pl-1 pr-1 sku">
                            <validation-provider
                              #default="validationContext"
                              rules="required"
                            >
                              <b-form-input
                                v-model="product[2].sku"
                                type="text"
                                placeholder="SKU"
                                :state="getValidationState(validationContext)"
                              />
                            </validation-provider>
                          </td>
                          <td>
                            <validation-provider
                              #default="validationContext"
                              rules="required"
                            >
                              <b-form-input
                                v-model="product[3].qty"
                                type="number"
                                min="1"
                                :state="getValidationState(validationContext)"
                              />
                            </validation-provider>
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
                  <b-col class="col-md-12 text-right pr-lg-0">
                    <b-button
                      variant="primary"
                      @click="submit"
                    >
                      <b-spinner
                        v-if="getLoader('loaderSix')"
                        small
                        submit
                        b-button
                      />
                      Submit
                    </b-button>
                  </b-col>
                </b-form>
              </validation-observer>
            </b-col>
          </b-row>
        </b-card>
      </app-collapse-item>
    </app-collapse>
    <!-- modal -->
    <b-modal
      id="modal-prevent-closing"
      ref="my-modal"
      title="Update Variants"
      ok-title="Submit"
      cancel-variant="outline-secondary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          label="Variant Price"
        >
          <span class="d-flex justify-content-between">
            <b-form-input
              v-model="modal.selling_price"
              placeholder="Variant Price"
              class="variantInputs"
            />
          </span>
        </b-form-group>
        <!-- <b-form-group
          label="SKU"
        >
          <span class="d-flex justify-content-between">
            <b-form-input
              v-model="modal.sku"
              placeholder="SKU"
              class="variantInputs"
            />
          </span>
        </b-form-group> -->
        <b-form-group
          label="Quantity"
        >
          <span class="d-flex justify-content-between">
            <b-form-input
              v-model="modal.qty"
              placeholder="Quantity"
              class="variantInputs"
            />
          </span>
        </b-form-group>
        <!-- <b-form-groupm
          label="All"
          label-cols="1"
        > -->
        <!-- {{ selectedColors }} -->
        <!-- <b-form-checkbox
            v-model="modal.allSwitch"
            class="switches"
            name="check-button"
            switch
            @input="selectModalSwitch('all', $event)"
          /> -->
        <!-- </b-form-group> -->
      </form>
    </b-modal>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BForm,
  BFormCheckbox,
  BFormTags,
  BFormInput,
  BButtonClose,
  BFormFile,
  BAvatar,
  BSpinner,
  BButton,
  // BFormInvalidFeedback,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { avatarText } from '@core/utils/filter'

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import store from '@/store'
// import { ref } from '@vue/composition-api'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BForm,
    BFormCheckbox,
    vSelect,
    BFormTags,
    BFormInput,
    BButtonClose,
    // eslint-disable-next-line vue/no-unused-components
    BFormFile,
    BSpinner,
    AppCollapse,
    AppCollapseItem,
    BAvatar,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    ValidationProvider,
    ValidationObserver,
    // BFormInput,
    // BFormInvalidFeedback,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
    attributes: {
      type: Array,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      isVariantColorEnabled: false,
      selectedColors: [],
      selectedColorsWithImages: [],
      selectedAttributes: [],
      variantsList: [],
      products: [],
      makeet_price: '',
      product_cost: '',
      selling_price: '',
      qty: '',
      checkBoxRecord: [],
      selectAll: false,
      modalVariantPrice: 0,
      modalVariantSku: '',
      modalVariantQty: 0,
      modal: {
        selling_price: 0,
        sku: '',
        qty: 0,
        priceSwitch: true,
        skuSwitch: true,
        qtySwitch: true,
        allSwitch: true,
      },
    }
  },
  computed: {
    totalSelectedColors() {
      return this.selectedColors.length
    },
    totalSelectedAttributes() {
      return this.selectedAttributes.length
    },
    totalProducts() {
      return this.products.length
    },
  },
  watch: {
    selectedColors(val, oldVal) {
      if (this.selectedColorsWithImages.length === 0) {
        // if first color selected
        this.selectedColorsWithImages = val.map(color => (
          {
            color,
            photo: { file: [], src: '' },
            isRequired: false,
          }
        ))
      } else {
        // if selected color is not empty
        // eslint-disable-next-line no-unused-vars
        let addedColor = []
        // eslint-disable-next-line no-unused-vars
        let removedColor = []
        // if new color added in the array then find new element form the array
        if (val.length > oldVal.length) {
          addedColor = val.filter(x => !oldVal.includes(x))
        } else {
          // if element remove from the array then old val length will be greater from new one
          // find the removed element from the array
          removedColor = oldVal.filter(x => !val.includes(x))
        }
        // if new color added in array
        if (addedColor.length > 0) {
          const newColorObject = addedColor.map(color => (
            {
              color,
              photo: { file: [], src: '' },
              isRequired: false,
            }
          ))
          this.selectedColorsWithImages.push(newColorObject[0])
        } else if (removedColor.length > 0) {
        // if color remove form the array
          const index = this.selectedColorsWithImages.findIndex(color => color.color === removedColor[0])
          this.selectedColorsWithImages.splice(index, 1)
        }
      }
    },
    selectedAttributes(val, oldVal) {
      const addedColor = val.filter(x => !oldVal.includes(x))
      if (addedColor.length > 0) {
        addedColor[0].tags = []
      }
    },
  },
  methods: {
    // eslint-disable-next-line consistent-return
    submit() {
      // validation color image
      let imageUploade = false
      this.selectedColorsWithImages.forEach(color => {
        if (color.photo.src === '') {
          // eslint-disable-next-line no-param-reassign
          color.isRequired = true
          // eslint-disable-next-line no-const-assign
          imageUploade = true
        } else {
          store.commit('common/UPDATE_LOADER', { loader: 'loaderSix', value: true })
        }
      })
      if (imageUploade) {
        this.warningAlert('Please Upload Color Images')
        return false
      }
      // validate variation inputs
      this.$refs.productVariantionObserver.validate().then(success => {
        if (success) {
          // eslint-disable-next-line no-alert
          const products = this.products.map(product => (
            {
              title: `${this.productTitle} - ${product[0].title}`,
              selling_price: product[1].selling_price,
              sku: product[2].sku,
              qty: product[3].qty,
              color: product[4].color,
              variant_attribute: product[5].variant_attribute,
            }
          ))
          const images = this.selectedColorsWithImages.map(image => (
            {
              color: image.color,
              image: image.photo.src,
            }
          ))
          this.video.product_id = this.productId
          const attributes = []
          this.selectedAttributes.forEach(list => {
            console.log(list)
            if (this.isEmptyObject(list.tags)) {
              attributes.push({ title: list.title, tags: list.tags })
            }
          })
          attributes.push({ title: 'Colors', tags: images })
          // eslint-disable-next-line no-const-assign
          // attributes = JSON.stringify(attributes)
          const payload = {
            images,
            products,
            attributes,
            product_id: this.productId,
            category_id: this.categoryId,
          }
          this.$http
            .post('products/variant', payload)
            .then(response => {
              const { data } = response
              if (data.status) {
                this.toastSuccess(data.message)
                this.updateMenu('variation', { open: false, submit: true })
              } else {
                this.errorAlert(data.message)
              }
            })
            .catch(error => {
              this.toastDanger('There is a Error in Your Product Information Form')
              console.log(error)
              // this.$refs.refFormObserver.setErrors(error.response.data.errors)
            })
            .then(() => {
              // this.loginLoader = false
              store.commit('common/UPDATE_LOADER', { loader: 'loaderSix', value: false })
            })
        }
      })
    },
    checkBoxColorChange(event) {
      if (event) {
      //   this.selectedColors = []
      }
    },
    updateVariants() {
      this.variantsList = []
      if (this.selectedColors.length > 0) {
        this.variantsList.push(this.selectedColors)
      }
      // let isPosible = false
      this.selectedAttributes.forEach(attribute => {
        if (attribute.tags && attribute.tags.length > 0) {
          this.variantsList.push(attribute.tags)
          // isPosible = true
        }
      })
      // if (isPosible && this.selectedColors.length > 0) {
      this.$http
        .post('products/make-combination', this.variantsList)
        .then(response => {
          if (response.data.status) {
            const combinations = response.data.data.combinations.map(combination => [
              { title: combination.join('-'), isRequired: true },
              { selling_price: '', isRequired: true },
              { sku: `${this.productTitle} - ${combination.join('-')}`, isRequired: true },
              { qty: '', isRequired: true },
              {
                photo: { file: [], src: '' }, isRequired: false, isFileAble: false, color: '',
              },
              {
                variant_attribute: JSON.stringify(combination),
              },
            ])
            // check title of the varint if it is contain color or fileable
            combinations.forEach(variant => {
              const combinationList = variant[0].title.split('-')
              combinationList.forEach(list => {
                if (this.selectedColors.includes(list)) {
                  // eslint-disable-next-line no-param-reassign
                  variant[4].isFileAble = true
                  // eslint-disable-next-line no-param-reassign
                  variant[4].color = list
                }
              })
            })
            this.products = combinations
            this.selectedColorsWithImages.forEach(color => {
              if (color.photo.src !== '') {
                // eslint-disable-next-line no-param-reassign
                this.products.forEach(product => {
                  if (product[4].color === color.color) {
                  // eslint-disable-next-line no-param-reassign
                    product[4].photo.src = color.photo.src
                  }
                })
              }
            })
            // this.$emit('combinations', combinations)
          }
        })
      // }
    },
    removeItem(index) {
      this.products.splice(index, 1)
      this.toastSuccess('item removed form list successfyll!')
    },
    previewImage(event, color) {
      const file = event.target.files[0]
      const imbObj = color.photo
      imbObj.file = file
      const fileReader = new FileReader()
      fileReader.readAsDataURL(imbObj.file)
      fileReader.addEventListener('load', () => {
        imbObj.src = fileReader.result
        this.products.forEach(product => {
          if (color.color === product[4].color) {
            // eslint-disable-next-line no-param-reassign
            product[4].photo.src = fileReader.result
          }
        })
      })
    },
    removeImage(color) {
      // eslint-disable-next-line no-param-reassign
      color.photo.file = []
      // eslint-disable-next-line no-param-reassign
      color.photo.src = ''
      this.products.forEach(product => {
        if (color.color === product[4].color) {
          // eslint-disable-next-line no-param-reassign
          product[4].photo.src = ''
          // eslint-disable-next-line no-param-reassign
        }
      })
    },
    selectAllCheckbox(event) {
      this.checkBoxRecord = []
      if (event) {
        this.products.forEach((item, index) => {
          this.checkBoxRecord.push(index)
        })
      }
    },
    resetModal() {
      this.modal.selling_price = ''
      this.modal.sku = ''
      this.modal.qty = ''
    },
    // eslint-disable-next-line consistent-return
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      if (!this.checkBoxRecord.length) {
        this.toastWarning('Please Select Variants')
        return false
      }
      this.checkBoxRecord.forEach(productIndex => {
        // update following variant input field if it is true
        this.products[productIndex][1].selling_price = this.modal.selling_price
        // this.products[productIndex][2].sku = this.modal.sku
        this.products[productIndex][3].qty = this.modal.qty
      })
    },
    togglePopup() {
      this.resetModal()
      this.$refs['my-modal'].toggle('.toggle-btn')
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

    const getProductVarients = store.getters['adminProduct/getProductVarients']
    console.log(getProductVarients)
    return {
      video,
      refFormObserver,
      getValidationState,
      resetForm,
      avatarText,
    }
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
<style scoped>
.colorSelect {
  width: 90%;
}
.avatarImage{
  position: relative;
}
.avatar-else-img{
  margin-top: 20px !important;
}
.remover{
  position: absolute;
  font-size: 35px;
  top: 13px;
  right: 16px;
}
.camera{
 color: #7F7C8A;
}
.avatar{
  background-color: #EAEAEA !important;
  margin-top: 20px !important;
  border: 1px black !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}
.required-avatar{
  border-color: red !important;
}
.text-muted{
  font-weight: bold;
  position: absolute;
  top: -2px;
  left: 14px;
}
.sku{
  min-width: 300px;
}
</style>
