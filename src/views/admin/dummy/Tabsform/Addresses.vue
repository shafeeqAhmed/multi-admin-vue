<template>
  <b-card>
    <!-- Business Addresses -->
    <div
      v-if="businesslist"
      class="row"
    >
      <div class="col-md-4">
        <h5>Business Address</h5>
      </div>
      <div class="col-md-8 d-flex justify-content-between">
        <div>
          <small>37 Promo Road<br>shop 2 Promina Road<br>Konmpton
            Park,South Africa
          </small>
        </div>
        <div>
          <span>
            <b-button
              v-if="businessBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="business"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="businessEdit"
      class="row"
    >
      <div class="col-md-3">
        <h5>Business Address</h5>
      </div>
      <div class="col-md-9">
        <span>
          <b-button
            variant="danger"
            class="btn-icon rounded-circle float-right"
            @click.prevent="businessRemove"
          >
            <feather-icon icon="DeleteIcon" />
          </b-button>
        </span>
        <form>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group">
                <label>Recipient Name</label>
                <input
                  placeholder="Recipient Name"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Street/Unit/Building Number</label>
                <input
                  placeholder="Street/Unit/Building Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Street Name</label>
                <input
                  placeholder="Account Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Suburb</label>
                <input
                  placeholder="Suburb"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>City</label>
                <input
                  placeholder="City"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Country</label>
                <input
                  placeholder="Branch Code"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Postal Code</label>
                <input
                  placeholder="Postal Code"
                  class="form-control"
                >
              </div>
              <b-button variant="primary">
                Save
              </b-button>
            </div>
          </div>
        </form>
      </div>
    </div><hr>

    <!-- Billing Addresses -->
    <div
      v-if="billinglist"
      class="row"
    >
      <div class="col-md-4">
        <h5>Billing Address</h5>
      </div>
      <div
        class="col-md-8 d-flex justify-content-between"
      >
        <div>
          <small>37 Promo Road<br>shop 2 Promina Road<br>Konmpton
            Park,South Africa
          </small>
        </div>
        <div>
          <span>
            <b-button
              v-if="billingBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="billing"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="billingEdit"
      class="row"
    >
      <div class="col-md-3">
        <h5>Billing Address</h5>
      </div>
      <div class="col-md-9">
        <span>
          <b-button
            variant="danger"
            class="btn-icon rounded-circle float-right"
            @click.prevent="billingRemove"
          >
            <feather-icon icon="DeleteIcon" />
          </b-button>
        </span>
        <form>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group">
                <label>Recipient Name</label>
                <input
                  placeholder="Recipient Name"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Street/Unit/Building Number</label>
                <input
                  placeholder="Street/Unit/Building Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Street Name</label>
                <input
                  placeholder="Account Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Suburb</label>
                <input
                  placeholder="Suburb"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>City</label>
                <input
                  placeholder="City"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Country</label>
                <input
                  placeholder="Branch Code"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Postal Code</label>
                <input
                  placeholder="Postal Code"
                  class="form-control"
                >
              </div>
              <b-button variant="primary">
                Save
              </b-button>
            </div>
          </div>
        </form>
      </div>
    </div><hr>

    <!-- warehouse Addresses -->
    <div
      v-if="warehouselist"
      class="row"
    >
      <div class="col-md-4">
        <h5>Warehouse Address</h5>
      </div>
      <div
        class="col-md-8 d-flex justify-content-between"
      >
        <div>
          <small>37 Promo Road<br>shop 2 Promina Road<br>Konmpton
            Park,South Africa
          </small>
        </div>
        <div>
          <span>
            <b-button
              v-if="warehouseBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="warehouse"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="warehouseEdit"
      class="row"
    >
      <div class="col-md-3">
        <h5>Warehouse Address</h5>
      </div>
      <div class="col-md-9">
        <span>
          <b-button
            variant="danger"
            class="btn-icon rounded-circle float-right"
            @click.prevent="warehouseRemove"
          >
            <feather-icon icon="DeleteIcon" />
          </b-button>
        </span>
        <form>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group">
                <label>Recipient Name</label>
                <input
                  placeholder="Recipient Name"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Street/Unit/Building Number</label>
                <input
                  placeholder="Street/Unit/Building Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Street Name</label>
                <input
                  placeholder="Account Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Suburb</label>
                <input
                  placeholder="Suburb"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>City</label>
                <input
                  placeholder="City"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Country</label>
                <input
                  placeholder="Branch Code"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Postal Code</label>
                <input
                  placeholder="Postal Code"
                  class="form-control"
                >
              </div>
              <b-button variant="primary">
                Save
              </b-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </b-card>
</template>

<script>
import {
  BButton,
  // BForm,
  // BFormGroup,
  // BFormInput,
  // BRow,
  // BCol,
  BCard,
  // BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButton,
    // BForm,
    // BFormGroup,
    // BFormInput,
    // BRow,
    // BCol,
    BCard,
    // BFormTextarea,
    // vSelect,
    // flatPickr,
    // Cleave,
  },
  directives: {
    Ripple,
  },
  props: {
    informationData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.informationData)),

      businessEdit: false,
      businessBtn: true,
      businesslist: true,

      billingEdit: false,
      billingBtn: true,
      billinglist: true,

      warehouseEdit: false,
      warehouseBtn: true,
      warehouselist: true,
    }
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.informationData))
    },
    business() {
      this.businessEdit = true
      this.businessBtn = false
      this.businesslist = false
    },
    businessRemove() {
      this.businessBtn = true
      this.businessEdit = false
      this.businesslist = true
    },
    billing() {
      this.billingEdit = true
      this.billingBtn = false
      this.billinglist = false
    },
    billingRemove() {
      this.billingBtn = true
      this.billingEdit = false
      this.billinglist = true
    },
    warehouse() {
      this.warehouseEdit = true
      this.warehouseBtn = false
      this.warehouselist = false
    },
    warehouseRemove() {
      this.warehouseBtn = true
      this.warehouseEdit = false
      this.warehouselist = true
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
