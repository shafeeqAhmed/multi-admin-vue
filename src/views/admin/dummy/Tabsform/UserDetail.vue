<template>
  <b-card class="userCard">
    <div
      v-if="userlist"
      class="row"
    >
      <div class="col-md-3">
        <h5>
          Ali Gulzaar
          <span>
            <b-badge variant="info">You</b-badge>
          </span>
        </h5>
      </div>
      <div
        class="col-md-9 d-flex justify-content-lg-between justify-content-md-between "
      >
        <div>
          <small>Director</small><br>
          <small>unibastia@gmail.com</small><br>
          <small>+2778420255</small>
        </div>
        <div>
          <span class="mr-lg-1">
            <b-badge variant="warning">Account Owner</b-badge>
          </span>
          <span class="mr-lg-1">
            <b-badge variant="primary">Primary Contact</b-badge>
          </span>
          <span class="userOptions">
            <b-button
              v-if="userBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="user"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="userEdit"
      class="row"
    >
      <div class="col-md-3">
        <h5>User Details</h5>
      </div>
      <div class="col-md-9">
        <span class="userCross">
          <b-button
            variant="danger"
            class="btn-icon rounded-circle float-right"
            @click.prevent="userRemove"
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
      userEdit: false,
      userBtn: true,
      userlist: true,
    }
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.socialData))
    },
    user() {
      this.userEdit = true
      this.userBtn = false
      this.userlist = false
    },
    userRemove() {
      this.userBtn = true
      this.userEdit = false
      this.userlist = true
    },
  },
}
</script>
<style scoped>
@media screen and (max-width: 540px) {
  .userCard{
    position: relative;
  }
    .userOptions {
        position: absolute;
        right: 0px;
        top: -43px;
    }

    .userCross {
        position: absolute;
        right: 0px;
        top: -38px;
    }
}
</style>
