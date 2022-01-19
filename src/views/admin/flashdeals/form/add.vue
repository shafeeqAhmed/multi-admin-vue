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
                  label="Title *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Title"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="title"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Title"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Background Color (Hexa-code) *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Background color"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="background_color"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="#FFFFFF"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <!-- banner -->
                <!-- <validation-provider
            #default="{ errors }"
            name="Label"
            rules="required"
          > -->
                <b-form-group
                  label="Banner (1300x650)"
                  label-for="label-text-"
                >
                  <b-form-file
                    id="banner"
                    @change="handleImageSelected"
                  />
                </b-form-group>
                <!-- <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider> -->
              </b-col>

              <b-col md="4">
                <b-form-group
                  v-if="Object.keys(imageUrl).length > 0"
                >
                  <img
                    :src="imageUrl"
                    class="uploadImage"
                  >
                  <br>
                  <b-badge
                    class="cursor"
                    variant="danger"
                    @click="removeImage"
                  >
                    <feather-icon
                      icon="Trash2Icon"
                      class="mr-25"
                    />
                    <span>Remove</span>
                  </b-badge>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Products"
                  label-for="label-text-"
                >
                  <p style="color:red">
                    Red title products are not buyable
                  </p>
                  <p style="color:blue">
                    Blue title products are already in other deal
                  </p>
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <v-select
                      v-model="selectedproduct"
                      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                      label="title"
                      placeholder="Select Products"
                      autocomplete="on"
                      :options="products"
                      :taggable="true"
                      multiple
                      :reduce="products => products.id"
                      @input="selectproduct"
                      @change="selectproduct"
                    >
                      <template v-slot:option="product">
                        <span
                          v-if="checkdealProduct(product.id)==true"
                          class="text-primary"
                        > {{ product.title }}
                        </span>
                        <span
                          v-else-if="checkOutofStock(product.id)==true"
                          class="text-danger"
                        > {{ product.title }}
                        </span>
                        <span
                          v-else
                        > {{ product.title }}
                        </span>
                      </template>
                    </v-select>
                    <!-- <b-form-select
                      v-if="products"
                      id="label-text"
                      v-model="products"
                      class="mt-0"
                      placeholder="Select Status"
                    >
                      <b-form-select-option>
                        Select Product
                      </b-form-select-option>
                      <b-form-select-option
                        v-for="product in products"
                        :key="product.id"
                        :value="product.id"
                      >
                        {{ product.title }}
                      </b-form-select-option>
                    </b-form-select> -->
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Timer Status"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-checkbox
                      v-model="timer_status"
                      switch
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="From Date*"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="From Date"
                    rules="required"
                  >
                    <flat-pickr
                      v-model="fromdate"
                      class="form-control"
                      :config="{ enableTime: true,dateFormat: 'Y-m-d H:i'}"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="To Date*"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="To Date"
                    rules="required"
                  >
                    <flat-pickr
                      v-model="todate"
                      class="form-control"
                      :config="{ enableTime: true,dateFormat: 'Y-m-d H:i'}"
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
            </b-row>

            <div
              v-if="recordId"
              class="text-lg-center mt-1"
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
            <div
              v-else
              class="text-lg-left mt-1"
            >
              <b-button
                class="submit"
                variant="primary"
                type="submit"
                @click.prevent="validationForm"
              >
                Submit
              </b-button>

            </div>
            <b-card v-if="TableProduct">
              <div
                class="table-responsive"
              >
                <table
                  class="table table-bordered"
                >
                  <thead>
                    <tr>
                      <th>msin</th>
                      <th>Image</th>
                      <th scope="col">
                        Product
                      </th>
                      <th scope="col">
                        Qty
                      </th>
                      <th scope="col">
                        Base Price
                      </th>
                      <th scope="col">
                        Discount
                      </th>
                      <th scope="col">
                        Sale Price
                      </th>
                      <th scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="product in TableProduct"
                      :key="product.id"
                    >
                      <td>{{ product.msin }}</td>
                      <td>
                        <b-media vertical-align="center">
                          <template
                            v-if="product.images[0]"
                            #aside
                          >
                            <b-avatar
                              size="60"
                              :src="product.images[0].url"
                              :href="product.images[0].url"
                              :square="true"
                              target="_blank"
                              alt="assets/images/placeHolder/categoryIcon.png"
                              :text="avatarText(product.title)"
                            />
                          </template>
                          <template
                            v-else
                            #aside
                          >
                            <b-avatar
                              size="60"
                              :square="true"
                              alt="assets/images/placeHolder/categoryIcon.png"
                              :text="avatarText(product.title)"
                            />
                          </template>
                        </b-media></td>
                      <td> <small>{{ product.title }}</small></td>
                      <td><small>{{ product.qty }}</small></td>
                      <td><small>{{ product.price }}</small></td>
                      <td><b-form-input
                        id="label-text"
                        v-model="product.discount"
                        type="text"
                      /></td>
                      <td><b-form-input
                        id="label-text"
                        size="sm"
                        type="text"
                        :value="(product.price - product.discount) || 0"
                      /></td>
                      <td> <b-dropdown
                        variant="link"
                        no-caret
                        :right="$store.state.appConfig.isRTL"
                      >
                        <template #button-content>
                          <feather-icon
                            icon="MoreVerticalIcon"
                            size="16"
                            class="align-middle text-body"
                          />
                        </template>
                        <b-dropdown-item @click="edit(product.id)">
                          <feather-icon icon="EditIcon" />
                          <span class="align-middle ml-50">Edit</span>
                        </b-dropdown-item>

                        <b-dropdown-item @click="destory(product.id)">
                          <feather-icon icon="TrashIcon" />
                          <span class="align-middle ml-50">Delete</span>
                        </b-dropdown-item>
                      </b-dropdown></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card>
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
  BBadge,
  BFormFile,
  BFormCheckbox,
  BAvatar,
  BMedia,
  BDropdown,
  BDropdownItem,

} from 'bootstrap-vue'

import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
// import { codeBasic } from './code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import { avatarText } from '@core/utils/filter'
import store from '@/store'
import useUploadImage from '@/commonFunction/useUploadImage'
import useUploadImageOne from '@/commonFunction/useUploadImageOne'
import StoreModule from '../flashdealsStoreModule'

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
    BBadge,
    BFormFile,
    BFormCheckbox,
    vSelect,
    flatPickr,
    BAvatar,
    BMedia,
    BDropdown,
    BDropdownItem,
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      title: '',
      required,
      recordId: 0,
      flashdeal: '',
      products: [],
      slug: '',
      timer_status: 0,
      background_color: '',
      selectedproduct: '',
      fromdate: '',
      todate: '',
      TableProduct: '',
      dealProducts: [],
      outofstock: [],
    }
  },
  setup() {
    // const blankUserData = {
    //   banner: [],
    // }
    const {
      imageFile, imageUrl, handleImageSelected, removeImage,
    } = useUploadImage()
    const {
      imageFileOne, imageUrlOne, handleImageSelectedOne, removeImageOne,
    } = useUploadImageOne()
    return {
      handleImageSelected,
      imageFile,
      imageUrl,
      removeImage,
      handleImageSelectedOne,
      imageFileOne,
      imageUrlOne,
      removeImageOne,
      avatarText,
      // state,
    }
  },
  created() {
    const USER_APP_STORE_MODULE_NAME = 'flashdeal'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

    const { id } = this.$router.currentRoute.params

    if (id) {
      this.recordId = id
      this.$http.get(`flashdeal/${id}/edit`).then(response => {
        this.flashdeal = response.data.data.flashdeal
        console.log(response.data.data.product_ids)
        this.selectedproduct = response.data.data.product_ids
        this.TableProduct = response.data.data.products
        this.updateFields(this.flashdeal)
      })
    }
  },
  mounted() {
    this.fetchproducts()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('title', this.title)
          data.append('background_color', this.background_color)
          data.append('timer_status', this.timer_status)
          data.append('start_date', this.fromdate)
          data.append('end_date', this.todate)
          data.append('banner', this.imageFile)
          data.append('TableProduct', JSON.stringify(this.TableProduct))
          if (this.recordId === 0) {
            this.$http.post('flashdeal', data).then(response => {
              if (response.data.status) {
                this.successAlert(response.data.message)
                this.$router.push({ name: 'admin-flashdeals-list' })
              } else {
                this.errorAlert(response.data.message)
              }
            })
          } else {
            data.append('_method', 'post')
            this.$http.post(`flashdeal/update/${this.recordId}`, data, {
              headers: {
                'Access-Control-Allow-Origin': '*',
              },
            }).then(response => {
              this.$bvToast.toast(response.data.message, {
                title: 'Success',
                variant: 'success',
                solid: true,
              })
              this.$router.push({ name: 'admin-flashdeals-list' })
            })
          }
        }
      })
    },
    checkdealProduct(id) {
      if (!this.dealProducts.some(data => data === id)) {
        console.log('false')
        return false
      }
      console.log('true')
      return true
    },
    checkOutofStock(id) {
      if (!this.outofstock.some(data => data === id)) {
        console.log('false')
        return false
      }
      console.log('true')
      return true
    },
    updateFields(flashdeal) {
      this.title = flashdeal.title
      this.background_color = flashdeal.background_color
      this.timer_status = flashdeal.timer_status === 1 ? 'true' : false
      this.fromdate = flashdeal.start_date
      this.todate = flashdeal.end_date
      this.imageUrl = flashdeal.banner
      this.recordId = flashdeal.id
    },
    fetchproducts() {
      this.$http.get('flashdeal/fetchproducts').then(response => {
        this.products = response.data.data.products
        this.dealProducts = response.data.data.dealProducts
        this.outofstock = response.data.data.outofstock
      })
    },
    selectproduct(products) {
      const data = new FormData()
      data.append('products_id', products)
      if (this.recordId !== 0) {
        data.append('flash_deal_id', this.recordId)
      } else {
        data.append('flash_deal_id', '')
      }
      this.$http.post('products/fetchDetail', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }).then(response => {
        this.TableProduct = response.data.data.products
        console.log(response.data.data.products)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.uploadImage{
  height: 128px;
  object-fit: contain;
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
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
