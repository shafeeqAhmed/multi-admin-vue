/* eslint-disable vue/no-parsing-error */
<template>
  <b-row>
    <b-col md="12">
      <!------------------------------------------------------------------------->
      <!----------------------Product Information-------------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>General</h4>
            <hr>
            <validation-observer ref="general">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Frontend Website Name"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Frontend Website Name"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.front_website_name"
                          :state="errors.length > 0 ? false : null"
                          placeholder="MultiJunction"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col
                    cols="12"
                    style="display:none;"
                  >
                    <b-form-group
                      label="Site Motto"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Site Motto"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.site_moto"
                          :state="errors.length > 0 ? false : null"
                          placeholder="Online Market Place"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Site Icon"
                      label-for="siteIcon"
                      label-cols-sm="4"
                    >
                      <validation-provider
                        name="Site Icon"
                      >
                        <!-- code from ProductImages -->

                        <b-col
                          md="3"
                          class="pl-lg-0"
                        >
                          <b-form-file
                            id="image3"
                            v-model="data.general.site_icon.file"
                            class="file"
                            @change="previewImage($event, data.general.site_icon)"
                          />
                          <div
                            v-if="data.general.site_icon.src === ''"
                            class="aspect-ratio-box border pl-0 pr-0 upload pointer"
                            @click="chooseFile('image3')"
                          >
                            <b-avatar
                              :square="true"
                              variant="light"
                              target="_blank"
                              class="pointer aspect-ratio avatar"
                            >
                              <feather-icon
                                icon="CameraIcon"
                                size="50"
                                class="camera"
                              />
                            </b-avatar>
                          </div>
                          <div
                            v-else
                            class="aspect-ratio-box"
                          >
                            <b-avatar
                              :square="true"
                              :src="data.general.site_icon.src"
                              target="_blank"
                              class="pointer aspect-ratio avatar"
                            />
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
                              @click="removeImage(data.general.site_icon)"
                            />
                          </div>
                        </b-col>
                        <b-col md="5" />
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col
                    cols="12"
                    style="display:none;"
                  >
                    <b-form-group
                      label="Website Base Color"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Website Base Color"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.website_base_color"
                          placeholder="#37654"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        <span class="color"> Hexa code color</span>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col
                    cols="12"
                    style="display:none;"
                  >
                    <b-form-group
                      label="Website Base Hover Color"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Website Base Hover Color"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.general.website_base_hover_color"
                          :state="errors.length > 0 ? false : null"
                          placeholder="#346719"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        <span class="color"> Hexa code color</span>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('general')"
                    >
                      <b-spinner
                        v-if="getLoader('loaderOne')"
                        small
                      />
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer>
          </b-col>
        </b-row>
      </b-card>

      <!------------------------------------------------------------------------->
      <!-------------------------------Global SEO-------------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>Global SEO</h4>
            <hr>
            <validation-observer ref="global_seo">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Title"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Meta Title"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.globalSeo.meta_title"
                          placeholder="Meta Title"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Description"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Meta Description"
                        rules="required"
                      >
                        <b-form-input
                          v-model="data.globalSeo.meta_description"
                          placeholder="Description"
                          :state="errors.length > 0 ? false : null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Keywords"
                      label-cols-md="4"
                      label-for="keywords"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Keywords"
                        rules="required"
                      >
                        <b-form-tags
                          v-model="data.globalSeo.keywords"
                          input-id="keywords"
                          separator=" ,;"
                          placeholder="Enter new tags separated by space, comma or semicolon"
                          no-add-on-enter
                          :state="true"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <span class="color"> Separate with coma</span>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Meta Image"
                      label-for="metaImage"
                      label-cols-sm="4"
                    >
                      <validation-provider
                        name="Meta Image"
                      >

                        <!-- code from ProductImages -->
                        <b-col
                          md="3"
                          class="pl-lg-0"
                        >
                          <b-form-file
                            id="image4"
                            v-model="data.globalSeo.meta_image.file"
                            class="file"
                            @change="previewImage($event, data.globalSeo.meta_image)"
                          />
                          <div
                            v-if="data.globalSeo.meta_image.src === ''"
                            class="aspect-ratio-box border pl-0 pr-0 upload pointer"
                            @click="chooseFile('image4')"
                          >
                            <b-avatar
                              :square="true"
                              variant="light"
                              target="_blank"
                              class="pointer aspect-ratio avatar"
                            >
                              <feather-icon
                                icon="CameraIcon"
                                size="50"
                                class="camera"
                              />
                            </b-avatar>
                          </div>
                          <div
                            v-else
                            class="aspect-ratio-box"
                          >
                            <b-avatar
                              :square="true"
                              :src="data.globalSeo.meta_image.src"
                              target="_blank"
                              class="pointer aspect-ratio avatar"
                            />
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
                              @click="removeImage(data.globalSeo.meta_image)"
                            />
                          </div>
                        </b-col>
                        <b-col md="5" />
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('global_seo')"
                    >
                      <b-spinner
                        v-if="getLoader('loaderTwo')"
                        small
                      />
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer>
          </b-col>
        </b-row>
      </b-card>

      <!------------------------------------------------------------------------->
      <!-----------------------------Cookies Agreement--------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>Cookies Agreement</h4>
            <hr>
            <validation-observer ref="cookies_agreement">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Cookies Agreement Text"
                      label-cols-md="4"
                    >
                      <quill-editor
                        ref="myQuillEditor"
                        v-model="data.coookiesAgreement.cookies_agreement_text"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Show Cookies Agreement"
                      label-cols-md="4"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          id="customSwitch4"
                          v-model="data.coookiesAgreement.show_cookies_agreemeent"
                          type="checkbox"
                          class="custom-control-input"
                        >
                        <label
                          class="custom-control-label"
                          for="customSwitch4"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('cookies_agreement')"
                    >
                      <b-spinner
                        v-if="getLoader('loaderThree')"
                        small
                      />
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer></b-col>
        </b-row>
      </b-card>

      <!------------------------------------------------------------------------->
      <!---------------------------------Custom Script--------------------------->
      <!------------------------------------------------------------------------->

      <b-card>
        <b-row>
          <b-col md="12">
            <h4>Custom Script</h4>
            <hr>
            <validation-observer ref="custom_script">
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Header custom script-before </head>"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Header Textarea"
                        rules="required"
                      >
                        <b-form-textarea
                          id="textarea-default"
                          v-model="data.customScript.header_custom_script"
                          :state="errors.length > 0 ? false : null"
                          placeholder="Textarea"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Footer custom script-before </body>"
                      label-cols-md="4"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Footer Textarea"
                        rules="required"
                      >
                        <b-form-textarea
                          id="textarea-default-1"
                          v-model="data.customScript.footer_custom_script"
                          :state="errors.length > 0 ? false : null"
                          placeholder="Textarea"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click.prevent="submit('custom_script')"
                    >
                      <b-spinner
                        v-if="getLoader('loaderFoure')"
                        small
                      />
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </validation-observer>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BFormFile,
  BButton,
  BFormTextarea,
  BButtonClose,
  BSpinner,
  BFormTags,
  BAvatar,
} from 'bootstrap-vue'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import { required } from '@validations'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import StoreModule from './StoreModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    quillEditor,
    BFormGroup,
    BFormInput,
    BForm,
    BFormFile,
    BButton,
    BFormTextarea,
    ValidationProvider,
    ValidationObserver,
    BButtonClose,
    BFormTags,
    BSpinner,
    BAvatar,
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
      required,
    }
  },
  mounted() {
    this.updateFields('general')
    this.updateFields('global_seo')
    this.updateFields('cookies_agreement')
    this.updateFields('custom_script')
  },
  methods: {
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
    submit(form) {
      // eslint-disable-next-line dot-notation
      this.$refs[form].validate().then(success => {
        if (success) {
          // module is also use for query string variable
          const payload = { module: form }
          if (form === 'general') {
            this.updateLoader('loaderOne', true)
            const general = this.convertObjectInfoFormData(this.data.general)
            general.set('site_icon', this.data.general.site_icon.file)
            payload.data = general
          }
          if (form === 'global_seo') {
            this.updateLoader('loaderTwo', true)
            const globalSeo = this.convertObjectInfoFormData(this.data.globalSeo)
            globalSeo.set('meta_image', this.data.globalSeo.meta_image.file)
            payload.data = globalSeo
          }
          if (form === 'cookies_agreement') {
            this.updateLoader('loaderThree', true)
            payload.data = this.convertObjectInfoFormData(this.data.coookiesAgreement)
          }
          if (form === 'custom_script') {
            this.updateLoader('loaderFoure', true)
            payload.data = this.convertObjectInfoFormData(this.data.customScript)
          }
          // send axios request
          store.dispatch('adminWebsiteSettings/updateWebsiteSettings', payload)
            .then(response => {
              const { data } = response
              if (data.status) {
                this.successAlert(data.message)
              } else {
                this.errorAlert(data.message)
              }
            })
            .catch(error => {
              this.toastDanger('There is a Error in Your Product Information Form')
              this.$refs[form].setErrors(error.response.data.errors)
            })
            .then(() => {
              // this.loginLoader = false
              this.updateLoader('loaderOne', false)
              this.updateLoader('loaderTwo', false)
              this.updateLoader('loaderThree', false)
              this.updateLoader('loaderFoure', false)
            })
        }
      })
    },
    updateFields(module) {
      this.$http.get(`/admin/website/${module}`).then(response => {
        const responseData = response.data
        const { settings } = response.data.data
        if (responseData.status) {
          if (module === 'general') {
            this.data.general.front_website_name = settings.front_website_name
            this.data.general.site_moto = settings.site_moto
            this.data.general.site_icon.src = settings.site_icon
            this.data.general.website_base_color = settings.website_base_color
            this.data.general.website_base_hover_color = settings.website_base_hover_color
          } else if (module === 'global_seo') {
            this.data.globalSeo.meta_title = settings.meta_title
            this.data.globalSeo.meta_description = settings.meta_description
            this.data.globalSeo.keywords = settings.keywords.split(',')
            this.data.globalSeo.meta_image.src = settings.meta_image
          } else if (module === 'cookies_agreement') {
            this.data.coookiesAgreement.cookies_agreement_text = settings.cookies_agreement_text
            this.data.coookiesAgreement.show_cookies_agreemeent = settings.show_cookies_agreemeent === 'true'
          } else if (module === 'custom_script') {
            this.data.customScript.header_custom_script = settings.header_custom_script
            this.data.customScript.footer_custom_script = settings.footer_custom_script
          }
        } else {
          this.errorAlert(responseData.message)
        }
      })
        .catch(error => {
          this.toastDanger('There is a Error in Your Product Information Form')
          this.$refs[module].setErrors(error.response.data.errors)
        })
    },
  },
  setup() {
    // index of the custom field card
    const USER_APP_STORE_MODULE_NAME = 'adminWebsiteSettings'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)
    // destroy store module
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })
    const blankData = {
      general: {
        front_website_name: '',
        site_moto: '',
        site_icon: { file: [], src: '' },
        website_base_color: '',
        website_base_hover_color: '',
      },
      globalSeo: {
        meta_title: '',
        meta_description: '',
        keywords: [],
        meta_image: { file: [], src: '' },
      },
      coookiesAgreement: {
        cookies_agreement_text: '',
        show_cookies_agreemeent: false,
      },
      customScript: {
        header_custom_script: '',
        footer_custom_script: '',
      },
    }
    const data = ref(JSON.parse(JSON.stringify(blankData)))
    const resetData = () => {
      data.value = JSON.parse(JSON.stringify(blankData))
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetData,
    )
    return {
      data,
      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
}
</script>
<style scoped>
/* .color {
  font-size: 11px;
} */
/* .image-btn{
  position: relative;
}
.remover{
  position: absolute;
  top: 0px;
  left: 145px;
}

.upload {
  background-color: #f4f4f4;
  height: 145px;
  width:25%;
}

.upload span {
  font-size: 10px;
  font-weight: bolder;
}

.imgs {
  width: 25%;
  height: 145px;
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
} */

.searchProduct {
  margin-top: 7px;
}
.file {
  display: none;
}
.camera{
 color: #7F7C8A;
}
.avatar-primary{
  background-color: #EAEAEA;
  border: 1px black;
  border-radius: 0px;
  border-style: dashed;
}
.avatar{
  object-fit: contain;
  position: relative;
  background-color: #EAEAEA;
  border: 1px black;
  border-radius: 0px;
  border-style: dashed;
  object-fit: cover;
}
.remover{
  position: absolute;
  font-size: 35px;
  top: -5px;
  right: 0px;
}
.aspect-ratio-box {
  position: relative;
}
.aspect-ratio-box::after {
  display: block;
  content: "";
  /* 16:9 aspect ratio */
  padding-bottom: 100%;
}
.aspect-ratio{
   /* Image should match parent box size */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.aspect-ratio-box1 {
  position: relative;
}
.aspect-ratio-box1::after {
  display: block;
  content: "";
  /* 16:9 aspect ratio */
  padding-bottom: 100%;
}
.aspect-ratio1{
   /* Image should match parent box size */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 104%;
}
</style>
