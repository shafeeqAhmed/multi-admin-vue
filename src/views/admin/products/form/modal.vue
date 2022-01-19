<template>
  <div>
    <!-- button -->
    <!-- <b-button
      id="toggle-btn"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-prevent-closing
      variant="outline-primary"
    >
      Open Modal
    </b-button> -->

    <!-- modal data -->
    <div class="mt-2">
      <p>Submitted Names:</p>
      <div v-if="submittedNames.length === 0">
        --
      </div>
      <b-list-group
        v-else
      >
        <b-list-group-item
          v-for="(data,index) in submittedNames"
          :key="index"
        >
          {{ data }}
        </b-list-group-item>
      </b-list-group>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-prevent-closing"
      ref="my-modal"
      title="Update Variants"
      ok-title="Submit"
      cancel-variant="outline-secondary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          label="Variant Price"
        >
          <span class="d-flex justify-content-between">
            <b-form-input
              placeholder="Variant Price"
              class="variantInputs"
            />
            <!-- {{ selectedColors }} -->
            <b-form-checkbox
              v-model="isVariantColorEnabled"
              name="check-button"
              class="switches"
              switch
            />
          </span>
        </b-form-group>
        <b-form-group
          label="SKU"
        >
          <span class="d-flex justify-content-between">
            <b-form-input
              placeholder="SKU"
              class="variantInputs"
            />
            <!-- {{ selectedColors }} -->
            <b-form-checkbox
              v-model="isVariantColorEnabled"
              name="check-button"
              class="switches"
              switch
            />
          </span>
        </b-form-group>
        <b-form-group
          label="Quantity"
        >
          <span class="d-flex justify-content-between">
            <b-form-input
              placeholder="Quantity"
              class="variantInputs"
            />
            <!-- {{ selectedColors }} -->
            <b-form-checkbox
              v-model="isVariantColorEnabled"
              name="check-button"
              class="switches"
              switch
            />
          </span>
        </b-form-group>
        <b-form-group
          label="All"
          label-cols="1"
        >
          <!-- {{ selectedColors }} -->
          <b-form-checkbox
            v-model="isVariantColorEnabled"
            class="switches"
            name="check-button"
            switch
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BFormGroup, BFormInput, BModal, VBModal, BListGroup, BListGroupItem, BFormCheckbox,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BButton,
    BFormGroup,
    BFormInput,
    BListGroup,
    BListGroupItem,
    BFormCheckbox,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data: () => ({
    name: '',
    nameState: null,
    submittedNames: [],
    isVariantColorEnabled: '',
  }),
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
      })
    },
  },
}
</script>
<style scoped>
.variantInputs{
    width: 85%;
}
.switches{
    margin-top: 9px;
}
</style>
