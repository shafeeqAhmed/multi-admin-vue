<template>
  <b-card class="profileCard">
    <div
      v-if="profilelist"
      class="row"
    >
      <div class="col-md-3">
        <h5>Your Profile</h5>
      </div>
      <div
        class="col-md-9 d-flex justify-content-lg-between justify-content-md-between"
      >
        <div>
          <strong>Full Name</strong><br>
          <small>Nawaz Arif</small><br><br>
          <strong>Role/Title</strong><br>
          <small>Director</small><br><br>
          <strong>Email</strong><br>
          <small>unibista@gmail.com</small><br><br>
          <strong>Mobile Number</strong><br>
          <small>+2708092370</small>
        </div>
        <div>
          <span class="mr-lg-1">
            <b-badge variant="warning">Account Owner</b-badge>
          </span>
          <span class="mr-lg-1">
            <b-badge variant="primary">Primary Contact</b-badge>
          </span>
          <span class="profileOptions">
            <b-button
              v-if="profileBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="profile"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="profileEdit"
      class="row"
    >
      <div class="col-md-3">
        <h5>Your Details</h5>
        <div class="mt-3">
          <b-badge variant="warning">
            Account Owner
          </b-badge><br><br>
          <small>
            Your are the account owner and have permision to edit the
            details of this account. Additional users will have limited
            permisions to view and edit the account information.
          </small>
        </div>
        <div class="mt-4">
          <b-badge variant="primary">
            Primary Contact
          </b-badge><br><br>
          <small>
            This is the primary contact for all operational
            communication.The account owner can select one user as
            primary contact.
          </small>
        </div>
      </div>
      <div class="col-md-9">
        <span class="profileCross">
          <b-button
            variant="danger"
            class="btn-icon rounded-circle float-right"
            @click.prevent="profRemove"
          >
            <feather-icon icon="DeleteIcon" />
          </b-button>
        </span>
        <form>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group">
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Role/Title</label>
                <input
                  placeholder="Account Number"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input
                  placeholder="Branch Code"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Mobile No.</label>
                <input
                  placeholder="Branch Code"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Landline No.</label>
                <input
                  placeholder="Branch Code"
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
    <hr>

    <div class="row">
      <div class="col-md-3">
        <h5>Password</h5>
      </div>
      <div class="col-md-9 d-flex justify-content-between">
        <div>
          <small>*************</small>
        </div>
        <div>
          <span> Reset Password </span>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import {
  BButton,
  // BRow,
  // BCol,
  BBadge,
  BCard,
  // BFormCheckbox,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    // BRow,
    // BCol,
    BBadge,
    BCard,
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  props: {
    notificationData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.notificationData)),

      profileEdit: false,
      profileBtn: true,
      profilelist: true,

    }
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.socialData))
    },
    profile() {
      this.profileEdit = true
      this.profileBtn = false
      this.profilelist = false
    },
    profRemove() {
      this.profileBtn = true
      this.profileEdit = false
      this.profilelist = true
    },
  },
}
</script>
<style scoped>
@media screen and (max-width: 540px) {
  .profileCard{
    position: relative;
  }
    .profileOptions {
        position: absolute;
        right: 0px;
        top: -38px;
    }

    .profileCross {
        position: absolute;
        right: 0px;
        top: -320px;
    }
}
</style>
