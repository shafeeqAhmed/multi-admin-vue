<template>
  <b-tabs
    vertical
    content-class="col-12 col-md-9 mt-1 mt-md-0"
    pills
    nav-wrapper-class="col-md-3 col-12"
    nav-class="nav-left"
  >

    <!-- general tab -->
    <b-tab active>

      <!-- title -->
      <template #title>
        <feather-icon
          icon="EyeIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Overview</span>
      </template>

      <over-view
        v-if="options.general"
        :general-data="options.general"
      />
    </b-tab>
    <!--/ general tab -->

    <!-- change password tab -->
    <b-tab>

      <!-- title -->
      <template #title>
        <feather-icon
          icon="MonitorIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Business</span>
      </template>

      <business />
    </b-tab>
    <!--/ change password tab -->

    <!-- info -->
    <b-tab>

      <!-- title -->
      <template #title>
        <feather-icon
          icon="MapPinIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Addresses</span>
      </template>

      <addresses
        v-if="options.info"
        :information-data="options.info"
      />
    </b-tab>

    <!-- social links -->
    <b-tab>

      <!-- title -->
      <template #title>
        <feather-icon
          icon="CreditCardIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Banking Details</span>
      </template>

      <banking-detail
        v-if="options.social"
        :social-data="options.social"
      />
    </b-tab>

    <!-- notification -->
    <b-tab>

      <!-- title -->
      <template #title>
        <feather-icon
          icon="UserIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">User Details</span>
      </template>

      <user-detail
        v-if="options.notification"
        :notification-data="options.notification"
      />
    </b-tab>

    <!-- notification -->
    <b-tab>

      <!-- title -->
      <template #title>
        <feather-icon
          icon="UsersIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Profile</span>
      </template>

      <profile
        v-if="options.notification"
        :notification-data="options.notification"
      />
    </b-tab>

  </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'
import OverView from './OverView.vue'
import Business from './Business.vue'
import Addresses from './Addresses.vue'
import BankingDetail from './BankingDetail.vue'
import UserDetail from './UserDetail.vue'
import Profile from './Profile.vue'

export default {
  components: {
    BTabs,
    BTab,
    OverView,
    Business,
    Addresses,
    BankingDetail,
    UserDetail,
    Profile,
  },
  data() {
    return {
      options: {},
    }
  },
  beforeCreate() {
    this.$http.get('/account-setting/data').then(res => { this.options = res.data })
  },
}
</script>
