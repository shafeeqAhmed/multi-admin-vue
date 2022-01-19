<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Header Setting</h4>
              <hr>
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Header Logo"
                      label-for="h-logo"
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
                        <div class="text-center mt-2">
                          <feather-icon
                            icon="CameraIcon"
                            size="25"
                          /><br>
                          <span>Upload Image4</span>
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
                  <b-col cols="12">
                    <b-form-group
                      label="Show Language Switcher ?"
                      label-for="h-refundable"
                      label-cols-md="4"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch2"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch2"
                        >Toggle this switch element</label>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Show Currency Switcher?"
                      label-for="currency"
                      label-cols-md="4"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch3"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch3"
                        >Toggle this switch element</label>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Enable sticky header?"
                      label-for="sticky"
                      label-cols-md="4"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch4"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch4"
                        >Toggle this switch element</label>
                      </div>
                    </b-form-group>
                    <hr>
                  </b-col>
                  <b-col cols="12">
                    <b-row>
                      <b-col cols="12">
                        <h5>Header Nav Menu</h5>
                      </b-col>
                      <b-col cols="4">
                        <b-form-input placeholder="Daily Deals" />
                      </b-col>
                      <b-col cols="8 d-flex justify-content-between">
                        <b-form-input
                          placeholder="Daily Deals"
                          class="inputs"
                        />
                        <b-button
                          variant="outline-danger"
                          class="btn-icon rounded-circle"
                        >
                          <feather-icon icon="XIcon" />
                        </b-button>
                      </b-col>
                      <!-- <b-col cols="1">

                      </b-col> --> </b-row><br>
                    <b-row>
                      <b-col cols="4">
                        <b-form-input placeholder="Daily Deals" />
                      </b-col>
                      <b-col cols="8 d-flex justify-content-between">
                        <b-form-input
                          placeholder="Daily Deals"
                          class="inputs"
                        />
                        <b-button
                          variant="outline-danger"
                          class="btn-icon rounded-circle"
                        >
                          <feather-icon icon="XIcon" />
                        </b-button>
                      </b-col> </b-row><br>
                    <b-row>
                      <b-col cols="4">
                        <b-form-input placeholder="Daily Deals" />
                      </b-col>
                      <b-col cols="8 d-flex justify-content-between">
                        <b-form-input
                          placeholder="Daily Deals"
                          class="inputs"
                        />
                        <b-button
                          variant="outline-danger"
                          class="btn-icon rounded-circle"
                        >
                          <feather-icon icon="XIcon" />
                        </b-button>
                      </b-col> </b-row><br>
                    <b-row>
                      <b-col cols="12">
                        <b-button>
                          Add New
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                    >
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
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
  BForm,
  BImg,
  BFormFile,
  BButtonClose,
  BButton,
  // BFormTextarea,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BRow,
    BButton,
    BCol,
    BFormGroup,
    BButtonClose,
    BFormInput,
    BForm,
    BImg,
    // BFormTextarea,
    // vSelect,
    BFormFile,
  },
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
}
</script>

<style scoped>

.inputs {
  width: 90% !important;
}

.upload {
  background-color: #f4f4f4;
  height: 140px;
  width: 30%;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 30%;
  height: 140px;
}

.primary-icon {
  margin-top: 85px;
}

.btnRemover{
  position: relative;
}

.remover{
  position: absolute;
  top: 0px;
  left: 175px;
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

.border {
  border: 1px !important;
  border-radius: 0px !important;
  border-style: dashed !important;
}

@media screen and (max-width: 768px) {
  .inputs {
    width: 80% !important;
  }
}

@media screen and (max-width: 408px) {
  .inputs {
    width: 70% !important;
  }
}
</style>
