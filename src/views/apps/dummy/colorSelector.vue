<template>
  <div>
    <b-row>
      <b-col md="12">
        <b-card>
          <h4>Color Selector</h4>
          <hr>
          <b-form @submit.prevent>
            <b-row>
              <b-col md="12">
                <b-form>
                  <b-row>
                    <!-- Primary Color -->
                    <b-col sm="2">
                      <b-form-group
                        label="Primary Color"
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Color Name -->
                    <b-col sm="2">
                      <b-form-group
                        label="Color Name"
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Secondary Color -->
                    <b-col sm="2">
                      <b-form-group
                        label="Secondary Color"
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Flat Size rug-size -->
                    <b-col sm="2">
                      <b-form-group
                        label="Flat Size rug-size"
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Barcode -->
                    <b-col sm="2">
                      <b-form-group
                        label="Barcode"
                      >
                        <b-form-input
                          placeholder="Barcode"
                        />
                      </b-form-group>
                    </b-col>

                    <!-- SKU -->
                    <b-col sm="2">
                      <b-form-group
                        label="SKU"
                      >
                        <b-form-input
                          placeholder="SKU"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col sm="12">
                      <h5 class="mb-1 mt-1">
                        An image, or set of images, is required for each unique variant color.
                      </h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="2">
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
                        <div class="text-center iconss">
                          <feather-icon
                            icon="CameraIcon"
                            size="15"
                            class="icon"
                          /><br>
                        </div>
                      </b-card>
                      <div
                        v-else
                        class="image-btn"
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
                          class="img-thumbnail imgs p-0"
                          :src="file4.src"
                          size="25"
                        />
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <!-- Primary Color -->
                    <b-col sm="2">
                      <b-form-group
                        label=""
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Color Name -->
                    <b-col sm="2">
                      <b-form-group
                        label=""
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Secondary Color -->
                    <b-col sm="2">
                      <b-form-group
                        label=""
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Flat Size rug-size -->
                    <b-col sm="2">
                      <b-form-group
                        label=""
                        placholder="Flat Size rug-size"
                      >
                        <v-select :options="['Canada', 'United States']" />
                      </b-form-group>
                    </b-col>

                    <!-- Barcode -->
                    <b-col sm="2">
                      <b-form-group
                        label=""
                      >
                        <b-form-input
                          placeholder="Barcode"
                        />
                      </b-form-group>
                    </b-col>

                    <!-- SKU -->
                    <b-col sm="2">
                      <b-form-group
                        label=""
                      >
                        <b-form-input
                          placeholder="SKU"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-form>
              </b-col>
              <b-col class="col-md-12 text-right">
                <b-button
                  variant="primary"
                  @click="submitImages"
                >
                  Submit
                </b-button>
              </b-col>
            </b-row>
          </b-form>
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
  BForm,
  BFormFile,
  BImg,
  BFormInput,
  BButtonClose,
  BButton,
} from 'bootstrap-vue'
// import { ref } from '@vue/composition-api'

import vSelect from 'vue-select'
// import flatPickr from 'vue-flatpickr-component'
// import useUploadImage from '@/commonFunction/useUploadImage'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    vSelect,
    BFormInput,
    BForm,
    BFormFile,
    BImg,
    BButtonClose,
    BButton,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      primary: {
        file: [],
        src: '',
        loading: false,
      },
      file1: {
        file: [],
        src: '',
        loading: false,
      },
      file2: {
        file: [],
        src: '',
        loading: false,
      },
      file3: {
        file: [],
        src: '',
        loading: false,
      },
      file4: {
        file: [],
        src: '',
        loading: false,
      },
      file5: {
        file: [],
        src: '',
        loading: false,
      },
      file6: {
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
    submitImages() {
      const data = new FormData()
      data.append('product_id', this.productId)
      data.append('primary', this.primary.file)
      data.append('file1', this.file1.file)
      data.append('file2', this.file2.file)
      data.append('file3', this.file3.file)
      data.append('file4', this.file4.file)
      data.append('file4', this.file5.file)
      data.append('file4', this.file6.file)

      this.$http.post('products/update-product-images', data)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

<style scoped>
.iconss{
  position: relative;
}

.icon{
  position: absolute;
  top:-10px;
  left: -10px;
}

.upload {
  background-color: #f4f4f4;
  height: 40px;
  width: 40px;
}

.image-btn{
  position: relative;
}
.remover{
  position: absolute;
  top: 0px;
  right: 3px;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 40px;
  height: 40px;
  border-radius: 0px;
}

.primary-icon {
  margin-top: 85px;
}

.primaryImage span {
  font-weight: bolder;
}

.banner {
  font-size: 11px;
}
.searchProduct {
  margin-top: 7px;
}
.file {
  display: none;
}
.previewImg {
  object-fit: cover;
}
.border {
  border: 1px !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}
</style>
