<template>
  <div>
    <b-row>
      <b-col md="12">
        <!------------------------------------------------------------------------->
        <!----------------------Flash Deal Information----------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <h4>Flash Deal Information</h4>
          <hr>
          <b-form @submit.prevent>
            <b-row>
              <b-col md="12">
                <b-form-group
                  label="Title"
                  label-for="h-Title"
                  label-cols-md="4"
                >
                  <b-form-input
                    id="h-Title"
                    placeholder="Title"
                  />
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Banner (1920x500)"
                  label-for="h-banner"
                  label-cols-md="4"
                >
                  <b-form-file
                    id="image4"
                    v-model="file4.file"
                    class="file"
                    @change="previewImage($event, file4)"
                  />
                  <b-card
                    v-if="file4.src === ''"
                    class="border pl-0 pr-0 upload pointer"
                    @click="chooseFile('image4')"
                  >
                    <div class="text-center">
                      <feather-icon
                        icon="CameraIcon"
                        size="25"
                      /><br>
                      <span>Upload Banner</span>
                    </div>
                  </b-card>
                  <div
                    v-else
                    class="btnRemover"
                  >
                    <b-button-close
                      v-wave="{
                        color: 'red',
                        easing: 'ease-out',
                        duration: 0.4,
                        initialOpacity: 0.3,
                        finalOpacity: 0.4,
                        cancellationPeriod: 75,
                      }"
                      class="remover"
                      @click="removeImage(file4)"
                    />
                    <b-img
                      class="img-thumbnail imgs imges p-0"
                      :src="file4.src"
                      size="25"
                    />
                  </div>
                </b-form-group>
              </b-col>

              <b-col md="12">
                <b-form-group
                  label="Date"
                  label-cols-md="4"
                />
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Product"
                  label-for="h-Product"
                  label-cols-md="4"
                >
                  <v-select :options="['Youtube', 'Dailymotion']" />
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </b-card>

        <!------------------------------------------------------------------------->
        <!--------------------------Search Product--------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="4">
              <h4 class="searchProduct">
                Search Product
              </h4>
            </b-col>
            <b-col md="8">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button variant="outline-primary">
                    <feather-icon icon="SearchIcon" />
                  </b-button>
                </b-input-group-prepend>
                <b-form-input placeholder="Button on both side" />
              </b-input-group>
            </b-col>
          </b-row>

          <hr>

          <!--------------------------Section 1--------------------------------->

          <b-card class="border-light">
            <b-row>
              <b-col md="8">
                <div class="d-flex">
                  <b-avatar
                    class=""
                    size="90px"
                    :src="
                      require('@/assets/images/portrait/small/avatar-s-20.jpg')
                    "
                  />
                  <b-nav class="mt-1 ml-lg-2">
                    <b-nav-item active>
                      Product ID
                    </b-nav-item>
                    <b-nav-item>TSIN No</b-nav-item>
                    <b-nav-item>Title</b-nav-item>
                    <b-nav-item>Qty</b-nav-item>
                    <b-nav-item>Status</b-nav-item>
                  </b-nav>
                </div>
              </b-col>
              <b-col md="4">
                <div class="text-right mt-1">
                  <b-button variant="primary">
                    Allocate
                  </b-button>
                  <b-dropdown
                    id="dropdown-1"
                    text="Auction"
                    variant="primary"
                    class="ml-lg-1"
                  >
                    <b-dropdown-item class="border-bottom-light">
                      Check
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Put
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Delete
                    </b-dropdown-item>
                    <b-dropdown-item>Adjust</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-col>
            </b-row>
          </b-card>

          <!--------------------------Section 2--------------------------------->

          <b-card class="border-light">
            <b-row>
              <b-col md="8">
                <div class="d-flex">
                  <b-avatar
                    size="90px"
                    :src="
                      require('@/assets/images/portrait/small/avatar-s-2.jpg')
                    "
                  />
                  <b-nav class="mt-1 ml-lg-2">
                    <b-nav-item active>
                      Product ID
                    </b-nav-item>
                    <b-nav-item>TSIN No</b-nav-item>
                    <b-nav-item>Title</b-nav-item>
                    <b-nav-item>Qty</b-nav-item>
                    <b-nav-item>Status</b-nav-item>
                  </b-nav>
                </div>
              </b-col>
              <b-col md="4">
                <div class="text-right mt-1">
                  <b-button variant="primary">
                    Allocate
                  </b-button>
                  <b-dropdown
                    id="dropdown-1"
                    text="Auction"
                    variant="primary"
                    class="ml-lg-1"
                  >
                    <b-dropdown-item class="border-bottom-light">
                      Check
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Put
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Delete
                    </b-dropdown-item>
                    <b-dropdown-item>Adjust</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-col>
            </b-row>
          </b-card>

          <!--------------------------Section 3--------------------------------->

          <b-card class="border-light">
            <b-row>
              <b-col md="8">
                <div class="d-flex">
                  <b-avatar
                    size="90px"
                    :src="
                      require('@/assets/images/portrait/small/avatar-s-7.jpg')
                    "
                  />
                  <b-nav class="mt-1 ml-lg-2">
                    <b-nav-item active>
                      Product ID
                    </b-nav-item>
                    <b-nav-item>TSIN No</b-nav-item>
                    <b-nav-item>Title</b-nav-item>
                    <b-nav-item>Qty</b-nav-item>
                    <b-nav-item>Status</b-nav-item>
                  </b-nav>
                </div>
              </b-col>
              <b-col md="4">
                <div class="text-right mt-1">
                  <b-button variant="primary">
                    Allocate
                  </b-button>
                  <b-dropdown
                    id="dropdown-1"
                    text="Auction"
                    variant="primary"
                    class="ml-lg-1"
                  >
                    <b-dropdown-item class="border-bottom-light">
                      Check
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Put
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Delete
                    </b-dropdown-item>
                    <b-dropdown-item>Adjust</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-col>
            </b-row>
          </b-card>

          <!--------------------------Section 4--------------------------------->

          <b-card class="border-light">
            <b-row>
              <b-col md="8">
                <div class="d-flex">
                  <b-avatar
                    size="90px"
                    :src="
                      require('@/assets/images/portrait/small/avatar-s-9.jpg')
                    "
                  />
                  <b-nav class="mt-1 ml-lg-2">
                    <b-nav-item active>
                      Product ID
                    </b-nav-item>
                    <b-nav-item>TSIN No</b-nav-item>
                    <b-nav-item>Title</b-nav-item>
                    <b-nav-item>Qty</b-nav-item>
                    <b-nav-item>Status</b-nav-item>
                  </b-nav>
                </div>
              </b-col>
              <b-col md="4">
                <div class="text-right">
                  <b-button variant="primary">
                    Allocate
                  </b-button>
                  <b-dropdown
                    id="dropdown-1"
                    text="Auction"
                    variant="primary"
                    class="ml-lg-1"
                  >
                    <b-dropdown-item class="border-bottom-light">
                      Check
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Put
                    </b-dropdown-item>
                    <b-dropdown-item class="border-bottom-light">
                      Delete
                    </b-dropdown-item>
                    <b-dropdown-item>Adjust</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormFile,
  BForm,
  BInputGroup,
  BInputGroupPrepend,
  BButton,
  BAvatar,
  BNav,
  BNavItem,
  BDropdownItem,
  BDropdown,
  BImg,
  BButtonClose,
  // BBadge,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
// import { DatePicker } from 'vue-time-date-range-picker/dist/vdprDatePicker'
// import flatPickr from 'vue-flatpickr-component'
// import useUploadImage from '@/commonFunction/useUploadImage'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BImg,
    // DatePicker,
    BFormGroup,
    BButtonClose,
    BFormInput,
    BForm,
    BFormFile,
    BInputGroup,
    BInputGroupPrepend,
    BButton,
    BAvatar,
    BNav,
    BNavItem,
    BDropdownItem,
    // DatePicker,
    BDropdown,
    // BBadge,
    vSelect,
    // Calendar,
    // flatPickr,
  },
  // props: {
  //   productId: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  data() {
    return {
      // primary: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      // file1: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      // file2: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      // file3: {
      //   file: [],
      //   src: '',
      //   loading: false,
      // },
      // range: {
      //   start: new Date(2020, 0, 6),
      //   end: new Date(2020, 0, 23),
      // },
      // masks: {
      //   input: 'YYYY-MM-DD h:mm A',
      // },
      file4: {
        file: [],
        src: '',
        loading: false,
      },
    }
  },
  methods: {
    // chooseFile(imageId) {
    //   document.getElementById(imageId).click()
    // },
    previewImage(event, primary) {
      const file = event.target.files[0]
      const imbObj = primary
      imbObj.file = file
      const fileReader = new FileReader()
      fileReader.readAsDataURL(imbObj.file)
      fileReader.addEventListener('load', () => {
        imbObj.src = fileReader.result
      })
    },
    removeImage(fileObject) {
      // eslint-disable-next-line no-param-reassign
      fileObject.file = []
      // eslint-disable-next-line no-param-reassign
      fileObject.src = ''
    },
    // submitImages() {
    //   const data = new FormData()
    //   data.append('product_id', this.productId)
    //   data.append('primary', this.primary.file)
    //   data.append('file1', this.file1.file)
    //   data.append('file2', this.file2.file)
    //   data.append('file3', this.file3.file)
    //   data.append('file4', this.file4.file)

    //   this.$http.post('products/update-product-images', data)
    // },
  },

  // setup() {
  //   const {
  //     imageFile, imageUrl, handleImageSelected, removeImage,
  //   } = useUploadImage()

  //   return {
  //     handleImageSelected,
  //     imageFile,
  //     imageUrl,
  //     removeImage,
  //   }
  // },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

<style scoped>
.upload {
  background-color: #f4f4f4;
  height: 15vh;
  border-radius: 0px;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 100%;
  height: 15vh;
  margin-bottom: 20px;
  border-radius: 0px !important;
}

.btnRemover {
  position: relative;
}

.remover {
  position: absolute;
  top: 0px;
  right: 5px;
}

.primaryImage span {
  font-weight: bolder;
}
.border {
  border: 1px !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}
.file {
  display: none;
}
.banner {
  font-size: 11px;
}
.searchProduct {
  margin-top: 7px;
}
</style>
