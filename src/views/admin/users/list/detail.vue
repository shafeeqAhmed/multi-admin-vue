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
              <b-col cols="6">
                <b-form-group
                  label="Seller Name"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_name }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Email"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_email }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Phone No."
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_phone_number }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Mobile Number"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_mobile_number }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Company Name"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_company_name }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Status"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_request_status }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Standard"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_standard }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Website"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_website }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Social Media"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_social_media }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Monthly Revnue"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_monthly_revnue }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Business Registration No."
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_business_registration_no }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Business Owner First Name"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_business_owner_fname }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Business Last Name"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_business_owner_lname }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Business Owner Email"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_business_owner_email }}</label>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Total Products"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_total_products }}</label>
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group
                  label="Seller Product Description"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_product_description }}</label>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6">
                <b-form-group
                  label="Seller Comments"
                  label-for="label-text-"
                >
                  <label>{{ SellerDetail.seller_comments }}</label>
                </b-form-group>
              </b-col>
            </b-row>
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
  BRow,
  BCol,
  // BButton,
  BCard,
  // BFormCheckbox,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import { ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import StoreModule from '../storeModule'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    // BButton,
    BFormGroup,
    BCard,
    ValidationObserver,
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
      SellerDetail: {
        seller_name: null,
        seller_email: null,
        seller_phone_number: null,
        seller_mobile_number: null,
        seller_company_name: null,
        seller_standard: null,
        seller_website: null,
        seller_social_media: null,
        seller_monthly_revnue: null,
        seller_business_registration_no: null,
        seller_business_owner_fname: null,
        seller_business_owner_lname: null,
        seller_business_owner_email: null,
        seller_total_products: null,
        seller_product_description: null,
        seller_comments: null,
        seller_request_status: null,
        seller_request_id: 0,
      // eslint-disable-next-line comma-dangle
      }
    }
  },
  created() {
    const USER_APP_STORE_MODULE_NAME = 'seller_requests'
    // Register module
    if (!this.$store.hasModule(USER_APP_STORE_MODULE_NAME)) this.$store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

    const { id } = this.$router.currentRoute.params
    if (id) {
      this.$store.dispatch('seller_requests/fetchSellerRecord', { id }).then(response => {
        const { seller_request_detail } = response.data.data
        this.updateFields(seller_request_detail)
      })
    }
  },
  methods: {
    changeStatus(id, status) {
      const data = new FormData()
      data.append('id', id)
      data.append('seller_request_status', status)
      this.$http.post('seller_request/change_status', data).then(response => {
        if (response.data.status) {
          this.successAlert(response.data.message)
          this.$store.dispatch('seller_requests/fetchSellerRecord', { id }).then(response2 => {
            const { seller_request_detail } = response2.data.data
            this.updateFields(seller_request_detail)
          })
        } else {
          this.errorAlert(response.data.message)
        }
      })
    },
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
    updateFields(sellerRequestDetail) {
      this.SellerDetail.seller_name = sellerRequestDetail.seller_name
      this.SellerDetail.seller_email = sellerRequestDetail.seller_email
      this.SellerDetail.seller_mobile_number = sellerRequestDetail.seller_mobile_number
      this.SellerDetail.seller_mobile_number = sellerRequestDetail.seller_mobile_number
      this.SellerDetail.seller_company_name = sellerRequestDetail.seller_company_name
      this.SellerDetail.seller_standard = sellerRequestDetail.seller_standard
      this.SellerDetail.seller_website = sellerRequestDetail.seller_website
      this.SellerDetail.seller_social_media = sellerRequestDetail.seller_social_media
      this.SellerDetail.seller_monthly_revnue = sellerRequestDetail.seller_monthly_revnue
      this.SellerDetail.seller_business_registration_no = sellerRequestDetail.seller_business_registration_no
      this.SellerDetail.seller_business_owner_fname = sellerRequestDetail.seller_business_owner_fname
      this.SellerDetail.seller_business_owner_lname = sellerRequestDetail.seller_business_owner_lname
      this.SellerDetail.seller_business_owner_email = sellerRequestDetail.seller_business_owner_email
      this.SellerDetail.seller_total_products = sellerRequestDetail.seller_total_products
      this.SellerDetail.seller_product_description = sellerRequestDetail.seller_product_description
      this.SellerDetail.seller_comments = sellerRequestDetail.seller_comments
      this.SellerDetail.seller_request_status = sellerRequestDetail.seller_request_status
      this.SellerDetail.seller_request_id = sellerRequestDetail.id
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
