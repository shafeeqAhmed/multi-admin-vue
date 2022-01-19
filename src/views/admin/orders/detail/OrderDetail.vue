<template>
  <div>
    <form-wizard
      ref="refFormWizard"
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Submit"
      back-button-text="Previous"
      hide-buttons
      class="checkout-form-wizard steps-transparent"
    >
      <!-- account detail tab -->
      <tab-content
        title="Oder Detail"
        icon="feather icon-shopping-cart"
      >
        <!-- <e-commerce-checkout-step-cart /> -->
        <order-list-and-calculation-wraper />
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
// import { ref } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import OrderListAndCalculationWraper from './OrderListAndCalculationWraper.vue'
import StoreModule from '../StoreModule'

export default {
  components: {
    // 3rd Party
    FormWizard,
    TabContent,

    // SFC
    OrderListAndCalculationWraper,
  },
  setup() {
    console.log(router.currentRoute.params.order_no)
    const USER_APP_STORE_MODULE_NAME = 'order'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)
    store.dispatch('order/fetchRecord', router.currentRoute.params.order_no)
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '~@core/scss/base/pages/app-ecommerce.scss';
@import '~vue-form-wizard/dist/vue-form-wizard.min.css';
</style>

<style lang="scss" scoped>
.checkout-form-wizard ::v-deep {
  .wizard-tab-content {
    box-shadow: none !important;
    background: transparent !important;
    padding: 0;
  }
}
</style>
