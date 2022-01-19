<template>
  <b-card>

    <!-- overview -->
    <b-media no-body>
      <b-media-aside>
        <b-link>
          <b-img
            ref="previewEl"
            :src="optionsLocal.avatar"
            height="80"
          />
        </b-link>
        <!--/ avatar -->
      </b-media-aside>

      <b-media-body class="mt-75 ml-75">
        <div>
          <h4>
            UNI
            <span>
              <b-badge variant="primary">
                Account Active
              </b-badge>
            </span>
          </h4>
          <p>Seller ID 4678732</p>
          <p>Register 20 April 2018</p>
          <p>This account will be charge monthly subscription fee</p>
        </div>
      </b-media-body>
    </b-media>
    <hr>
    <!--/ overview -->

    <!-- out of office -->
    <div class="row">
      <div class="col-md-3">
        <h5>Out of Office</h5>
      </div>
      <div class="col-md-9 d-flex justify-content-between">
        <div>
          <small>Enable these settings in the event that leadtime <br>orders
            cannot be processed for a specific period of
            time.</small>
          <input
            v-if="overviewEdit"
            type="date"
            class="form-control w-75"
          ><br>
          <a
            href="#"
            class="font-weight-bold"
          >Set out of office dates</a><br>
          <b-button variant="primary">
            Save Changes
          </b-button>
        </div>
        <div>
          <span class="overviewOptions">
            <b-button
              v-if="overviewBtn"
              variant="success"
              class="btn-icon rounded-circle"
              @click.prevent="overview"
            >
              <feather-icon icon="EditIcon" />
            </b-button>
            <b-button
              v-else
              variant="danger"
              class="btn-icon rounded-circle"
              @click.prevent="overviewRemove"
            >
              <feather-icon icon="DeleteIcon" />
            </b-button>
          </span>
        </div>
      </div>
    </div><hr>

    <div class="row">
      <div class="col-md-3">
        <h5>Leadtime Status</h5>
      </div>
      <div class="col-md-9">
        <div>
          <small>This account has the option to fulfill leadtime
            orders</small>
        </div>
      </div>
    </div><hr>

    <div class="row">
      <div class="col-md-3">
        <h5>Account Status</h5>
      </div>
      <div class="col-md-9">
        <div>
          <small>Stop Selling on Martfury</small>
        </div>
      </div>
    </div>

  </b-card>
</template>

<script>
import {
  BButton,
  BBadge,
  // BForm,
  // BFormGroup,
  // BFormInput,
  // BRow,
  // BCol,
  // BAlert,
  BCard,
  BMedia,
  BMediaAside,
  BMediaBody,
  BLink,
  BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BButton,
    // BForm,
    BImg,
    BBadge,
    // BFormFile,
    // BFormGroup,
    // BFormInput,
    // BRow,
    // BCol,
    // BAlert,
    BCard,
    // BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
  },
  directives: {
    Ripple,
  },
  props: {
    generalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      optionsLocal: JSON.parse(JSON.stringify(this.generalData)),
      profileFile: null,

      overviewEdit: false,
      overviewBtn: true,
      overviewlist: true,
    }
  },
  methods: {
    resetForm() {
      this.optionsLocal = JSON.parse(JSON.stringify(this.generalData))
    },
    overview() {
      this.overviewEdit = true
      this.overviewBtn = false
      this.overviewlist = false
    },
    overviewRemove() {
      this.overviewBtn = true
      this.overviewEdit = false
      this.overviewlist = true
    },
  },
  setup() {
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

    return {
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
}
</script>
