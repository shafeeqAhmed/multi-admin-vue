<template>
  <b-card>
    <div
      v-if="bankinglist"
      class="row"
    >
      <div class="col-md-3">
        <h5>Account Information</h5>
        <small>Only the account owner can update these details</small>
      </div>
      <div class="col-md-9 d-flex justify-content-between">
        <div>
          <strong>Full Name</strong><br>
          <small>Amir Shahbaz</small><br><br>
          <strong>Bank</strong><br>
          <small>Standard Bank</small><br><br>
          <strong>Account Number</strong><br>
          <small>10201778420255</small><br><br>
          <strong>Branch Code</strong><br>
          <small>420255</small><br><br>
          <small>debit-order-form.pdf</small>
        </div>
        <div>
          <span class="bankingOptions">
            <b-button
              v-if="bankingBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="banking"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="bankingEdit"
      class="row"
    >
      <div class="col-md-3">
        <h5>Account Information</h5>
        <small>Only the account owner can update these details</small>
      </div>
      <div class="col-md-9">
        <span class="bankingCross">
          <b-button
            variant="danger"
            class="btn-icon rounded-circle float-right"
            @click.prevent="bankingRemove"
          >
            <feather-icon icon="DeleteIcon" />
          </b-button>
        </span>
        <form>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group">
                <label>Full Name</label>
                <input
                  placeholder="Full Name"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Bank</label>
                <input
                  placeholder="Bank"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Account Number</label>
                <input
                  placeholder="Account Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Branch Code</label>
                <input
                  placeholder="Branch Code"
                  class="form-control"
                >
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <strong>Debit Order Form</strong><br>
              <small>We require a new debit order form with update banking
                details</small><br>
              <small>If you do not have this form, You can download it here</small>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="d-flex justify-content-center drag-drop-upload mt-1">
                <div>Select or drag file to upload</div>
              </div>
              <b-button
                variant="primary"
                class="mt-1"
              >
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
  // BCardText,
  // BLink,
  // BAvatar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    // BForm,
    // BFormGroup,
    // BFormInput,
    // BRow,
    // BCol,
    BCard,
    // BCardText,
    // BLink,
    // BAvatar,
  },
  directives: {
    Ripple,
  },
  props: {
    socialData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.socialData)),

      bankingEdit: false,
      bankingBtn: true,
      bankinglist: true,
    }
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.socialData))
    },
    banking() {
      this.bankingEdit = true
      this.bankingBtn = false
      this.bankinglist = false
    },
    bankingRemove() {
      this.bankingBtn = true
      this.bankingEdit = false
      this.bankinglist = true
    },
  },
}
</script>
<style scoped>
.drag-drop-upload {
    border: 1px solid #f1f2f6 !important;
    padding: 50px !important;
    background-color: #f1f2f6 !important;
}
</style>
