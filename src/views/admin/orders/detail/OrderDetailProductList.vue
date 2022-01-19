<template>

  <div class="checkout-items">

    <div
      v-for="(seller, index) in order.sellers"
      :key="index"
    >
      <h4>
        {{ seller.seller_name }}
      </h4>
      <b-card
        v-for="(sellerProduct, productIndex) in seller.order_detail"
        :key="productIndex"
        class="ecommerce-card"
        no-body
        :style="backgroundColor(index)"
      >

        <!-- Product Image -->
        <div class="item-img">
          <b-link>
            <b-img
              :src="sellerProduct.product_image"
              :alt="`${sellerProduct.prodcut_title}-${sellerProduct.id}`"
            />
          </b-link>
        </div>

        <!-- Product Details: Card Body -->
        <b-card-body>
          <div class="item-name">
            <h6 class="mb-0">
              <b-link class="text-body">
                {{ sellerProduct.product_title }}
              </b-link>
            </h6>
            <span class="item-company">By <b-link class="company-name">dummy brand </b-link></span>
            <div class="item-rating">
              <ul class="unstyled-list list-inline">
                <li
                  v-for="star in 5"
                  :key="star"
                  class="ratings-list-item"
                  :class="{'ml-25': star-1}"
                >
                  <feather-icon
                    icon="StarIcon"
                    size="16"
                    class="fill-current text-warning "
                  />
                </li>
              </ul>
            </div>
          </div>
          <span class="text-success mb-1">In Stock</span>
          <div class="item-quantity">
            <span class="quantity-title">Qty:</span>
            <b-form-spinbutton
              v-model="sellerProduct.product_qty"
              size="sm"
              class="ml-75"
              inline
              :disabled="true"
            />
          </div>
          <span class="delivery-date text-muted">Delivery by {{ sellerProduct.created_at }} </span>
          <span class="text-success">11% off offers Available</span>
        </b-card-body>

        <!-- Product Options/Actions -->
        <div class="item-options text-center">
          <div class="item-wrapper">
            <div class="item-cost">
              <h4 class="item-price">
                {{ sellerProduct.product_qty }} * {{ sellerProduct.product_amount }} = R {{ sellerProduct.product_qty*sellerProduct.product_amount }}
              </h4>
              <!-- <p
                v-if="product.hasFreeShipping"
                class="card-text shipping"
              > -->
              <b-badge
                pill
                variant="light-success"
              >
                {{ sellerProduct.order_status }}
              </b-badge>
              <!-- </p> -->
            </div>
          </div>
          <b-button
            variant="light"
            class="mt-1 remove-wishlist"
            @click="statusChange(sellerProduct.id,'In Progress')"
          >
            <feather-icon
              icon="XIcon"
              class="mr-50"
            />
            <span>Remove</span>
          </b-button>
          <b-button
            variant="primary"
            class="btn-cart move-cart"
            @click="statusChange(sellerProduct.id,'Completed')"
          >

            <feather-icon
              icon="CheckIcon"
              class="mr-50"
              :class="{'fill-current': true }"
            />
            <span
              class="text-nowrap"
            >Complete</span>
          </b-button>
        </div>
      </b-card>

    </div>
  </div>

</template>

<script>
import {
  BCard, BCardBody, BLink, BImg, BButton, BBadge, BFormSpinbutton,
} from 'bootstrap-vue'
// import { ref, oncompu } from '@vue/composition-api'
// import { formatDate } from '@core/utils/filter'
// import store from '@/store'
// import { useEcommerce, useEcommerceUi } from '../useEcommerce'

export default {
  components: {
    BCard, BCardBody, BLink, BImg, BButton, BBadge, BFormSpinbutton,
  },
  data() {
    return {
      products: [
        {
          id: 27,
          name: 'Apple Watch Series 5',
          slug: 'apple-watch-series-5-27',
          brand: 'Apple',
          price: 339.99,
          image: '/img/1.3b312012.png',
          hasFreeShipping: true,
          rating: 4,
          description: 'On Retina display that never sleeps, so it’s easy to see the time and other important information, without\n raising or tapping the display. New location features, from a built-in compass to current elevation, help users\n better navigate their day, while international emergency calling1 allows customers to call emergency services\n directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available\n in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.',
          isInWishlist: false,
          qty: 1,
          shippingDate: '2021-08-28T20:58:13.029Z',
          offers: 2,
          discountPercentage: 21,
        },
      ],
      colors: [
        'Lavender',
        'LavenderBlush',
        'LawnGreen',
        'LemonChiffon',
        'LightBlue',
        'LightCoral',
        'LightCyan',
        'LightGoldenRodYellow',
        'LightGray',
        'LightGrey',
        'LightGreen',
        'LightPink',
        'LightSalmon',
        'LightSeaGreen',
        'LightSkyBlue',
        'LightSlateGray',
        'LightSlateGrey',
        'LightSteelBlue',
      ],
    }
  },
  computed: {
    order() {
      return this.$store.state.order.record
    },
  },
  methods: {
    backgroundColor(index) {
      return `background:${this.colors[index]}`
    },
    statusChange(id, type) {
      const payload = {
        id,
        order_status: type,
      }
      this.$store.dispatch('order/changeStatus', payload)
    },

  },
}
</script>

<style>

</style>
