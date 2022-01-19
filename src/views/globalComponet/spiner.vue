<template>
  <div
    v-if="isActive"
    class="d-flex flex-wrap"
  >
    <b-spinner
      v-for="variant in variants"
      :key="variant"
      :variant="variant"
      class="mr-1"
      type="grow"
    />
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
  }),
}
</script>
