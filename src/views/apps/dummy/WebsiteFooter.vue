<template>
  <div>
    <b-row>
      <b-col cols="12">
        <!------------------------------------------------------------------------->
        <!-----------------------------Footer Widget------------------------------->
        <!------------------------------------------------------------------------->

        <b-card>
          <b-row>
            <b-col md="12">
              <h4>Footer Widget</h4>
              <hr>
            </b-col>
            <b-col md="12">
              <b-row>
                <!------------------------------------------------------------------------->
                <!-----------------------------About Widget-------------------------------->
                <!------------------------------------------------------------------------->
                <b-col md="6">
                  <validation-observer ref="simpleRules">
                    <b-form>
                      <b-card class="border-light">
                        <h5>About Widget</h5>
                        <hr>
                        <b-form-group
                          label="Footer Logo"
                          label-for="Footer"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Footer Logo"
                            rules="required"
                          >
                            <b-form-file
                              id="image4"
                              v-model="file4.file"
                              :state="errors.length > 0 ? false : null"
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
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-form-group
                          label="About Description"
                          label-for="Footer"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="About Description"
                            rules="required"
                          >
                            <b-form-input
                              placeholder="About Description"
                              :state="errors.length > 0 ? false : null"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>
                        <b-button
                          variant="primary"
                          class="float-right"
                          @click.prevent="validationForm"
                        >
                          update
                        </b-button>
                      </b-card>
                    </b-form>
                  </validation-observer>
                </b-col>
                <!------------------------------------------------------------------------->
                <!----------------------Content Info Widget-------------------------------->
                <!------------------------------------------------------------------------->

                <b-col md="6">
                  <validation-observer ref="simpleRules1">
                    <b-form>
                      <b-card class="border-light">
                        <h5>Contact Info Widget</h5>
                        <hr>
                        <b-form-group
                          label="Contact Address"
                          label-for="address"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Contact Address"
                            rules="required"
                          >
                            <b-form-input
                              id="address"
                              :state="errors.length > 0 ? false : null"
                              placeholder="Street # 27 London"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-form-group
                          label="Contact Phone"
                          label-for="phone"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Contact Phone"
                            rules="required"
                          >
                            <b-form-input
                              id="phone"
                              :state="errors.length > 0 ? false : null"
                              placeholder="99238404"
                              type="number"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-form-group
                          label="Contact Email"
                          label-for="email"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Contact Email"
                            rules="required"
                          >
                            <b-form-input
                              id="email"
                              placeholder="support@gmail.com"
                              :state="errors.length > 0 ? false : null"
                              type="email"
                            />
                            <small class="text-danger">{{
                              errors[0]
                            }}</small>
                          </validation-provider>
                        </b-form-group>

                        <b-button
                          variant="primary"
                          class="float-right"
                          @click.prevent="validationForm1"
                        >
                          update
                        </b-button>
                      </b-card>
                    </b-form>
                  </validation-observer>
                </b-col>

                <!------------------------------------------------------------------------->
                <!----------------------Link Widget One------------------------------------>
                <!------------------------------------------------------------------------->

                <b-col md="12">
                  <validation-observer ref="simpleRules2">
                    <b-form>
                      <b-card class="border-light">
                        <b-row>
                          <b-col cols="12">
                            <h5>Link Widget One</h5>
                            <hr>
                          </b-col>
                          <b-col cols="12">
                            <b-form-group
                              label="Title"
                              label-for="email"
                            >
                              <validation-provider
                                #default="{ errors }"
                                name="Title"
                                rules="required"
                              >

                                <b-form-input
                                  placeholder="Title"
                                  :state="errors.length > 0 ? false : null"
                                /><br>
                                <small class="text-danger">{{
                                  errors[0]
                                }}</small>
                              </validation-provider>
                            </b-form-group>
                          </b-col>
                          <b-col cols="12">
                            <p>Links</p>
                            <b-row>
                              <b-col cols="4">
                                <b-form-input placeholder="Instagram" />
                              </b-col>
                              <b-col cols="8 d-flex justify-content-between">
                                <b-form-input
                                  placeholder="https://www.instagram.com"
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
                                <b-form-input placeholder="Facebook" />
                              </b-col>
                              <b-col cols="8 d-flex justify-content-between">
                                <b-form-input
                                  placeholder="https://www.facebook.com"
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
                                <b-form-input placeholder="YouTube" />
                              </b-col>
                              <b-col cols="8 d-flex justify-content-between">
                                <b-form-input
                                  placeholder="https://www.youtube.com"
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
                              @click.prevent="validationForm2"
                            >
                              Update
                            </b-button>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-form>
                  </validation-observer>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>

        <!------------------------------------------------------------------------->
        <!-----------------------------Footer Bottom------------------------------->
        <!------------------------------------------------------------------------->
        <validation-observer ref="simpleRules3">
          <b-form>
            <b-card>
              <b-row>
                <b-col md="12">
                  <h4>Footer Bottom</h4>
                  <hr>
                </b-col>
                <b-col md="12">
                  <!------------------------------------------------------------------------->
                  <!--------------------------Copyright Widget------------------------------->
                  <!------------------------------------------------------------------------->

                  <b-card class="border-light">
                    <h5>Copyright Widget</h5>
                    <hr>

                    <b-form-group
                      label="About Description"
                      label-for="Footer"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Description"
                        rules="required"
                      >
                        <b-form-input
                          placeholder="About Description"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-card>

                  <!------------------------------------------------------------------------->
                  <!--------------------------Social Links Widget---------------------------->
                  <!------------------------------------------------------------------------->

                  <b-card class="border-light">
                    <h5>Social Links Widget</h5>
                    <hr>

                    <b-form-group
                      label="Show Language Switcher ?"
                      label-for="h-refundable"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Language Switcher"
                        rules="required"
                      >
                        <div class="custom-control custom-switch">
                          <input
                            id="customSwitch6"
                            type="checkbox"
                            :state="errors.length > 0 ? false : null"
                            class="custom-control-input"
                          >
                          <label
                            class="custom-control-label"
                            for="customSwitch6"
                          >
                            Toggle this switch element
                          </label>
                        </div>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Facebook"
                        rules="required"
                      >
                        <label>Social Links</label><br>
                        <b-input-group class="mt-1">
                          <b-input-group-prepend is-text>
                            <feather-icon icon="FacebookIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            placeholder="Search"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Twitter"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="TwitterIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            placeholder="Search"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Instagram"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="InstagramIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            placeholder="Search"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Youtube"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="YoutubeIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            placeholder="Search"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-form-group>
                      <validation-provider
                        #default="{ errors }"
                        name="Linkedin"
                        rules="required"
                      >
                        <b-input-group>
                          <b-input-group-prepend is-text>
                            <feather-icon icon="LinkedinIcon" />
                          </b-input-group-prepend>
                          <b-form-input
                            placeholder="Search"
                            :state="errors.length > 0 ? false : null"
                          />
                        </b-input-group>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-card>

                  <b-card class="border-light">
                    <h5>Payment Method Widget</h5>
                    <hr>
                    <b-form-group
                      label="Payment Methods"
                      label-for="payment"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Payment Method"
                        rules="required"
                      >
                        <b-form-file
                          id="image3"
                          v-model="file3.file"
                          :state="errors.length > 0 ? false : null"
                          class="file"
                          @change="previewImage($event, file3)"
                        />s
                        <b-card
                          v-if="file3.src === ''"
                          class="border pl-0 pr-0 upload3 pointer"
                          @click="chooseFile('image3')"
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
                            @click="removeImage(file3)"
                          />
                          <b-img
                            class="img-thumbnail imges p-0"
                            :src="file3.src"
                            size="25"
                          />
                        </div>
                        <small class="text-danger">{{
                          errors[0]
                        }}</small>
                      </validation-provider>
                    </b-form-group>

                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="validationForm3"
                    >
                      update
                    </b-button>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </b-form>
        </validation-observer>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BInputGroupPrepend,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BForm,
  BImg,
  BButtonClose,
  BFormFile,
  BButton,
  // BFormTextarea,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'

export default {
  components: {
    BCard,
    BRow,
    BButton,
    BCol,
    BImg,
    BButtonClose,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    ValidationProvider,
    ValidationObserver,
    BForm,
    // BFormTextarea,
    // vSelect,
    BFormFile,
  },
  data() {
    return {
      required,
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
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
    validationForm1() {
      this.$refs.simpleRules1.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
    validationForm2() {
      this.$refs.simpleRules2.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
    validationForm3() {
      this.$refs.simpleRules3.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
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
.border-light {
  background-color: #f7f7f7;
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

.upload3 {
  background-color: #f4f4f4;
  height: 140px;
  width: 20%;
}

.imges {
  width: 20%;
  height: 140px;
}

.primary-icon {
  margin-top: 85px;
}

.btnRemover {
  position: relative;
}

.remover {
  position: absolute;
  top: 0px;
  left: 5px;
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

.inputs {
  width: 90% !important;
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
