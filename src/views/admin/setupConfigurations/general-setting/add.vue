<template>
  <b-card class="main-content">
    <b-row>
      <b-col class="col-md-12">
        <validation-observer ref="simpleRules">
          <b-form
            ref="form"
            :style="{ height: trHeight }"
            class="repeater-form"
          >
            <br>
            <b-row>
              <!-- input text field -->
              <!-- Label -->
              <b-col md="12">
                <b-form-group
                  label="System Name*"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="site name"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="site_name"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Site Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <!-- banner -->
                <!-- <validation-provider
            #default="{ errors }"
            name="Label"
            rules="required"
          > -->
                <b-form-group
                  label="System Logo - White"
                  label-for="label-text-"
                >
                  <b-form-file
                    id="banner"
                    @change="handleImageSelected"
                  />
                </b-form-group>
                <!-- <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider> -->
              </b-col>
              <b-col md="4">
                <b-form-group
                  v-if="Object.keys(imageUrl).length > 0"
                >
                  <img
                    :src="imageUrl"
                    class="uploadImage"
                  >
                  <br>
                  <b-badge
                    class="cursor"
                    variant="danger"
                    @click="removeImage"
                  >
                    <feather-icon
                      icon="Trash2Icon"
                      class="mr-25"
                    />
                    <span>Remove</span>
                  </b-badge>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <p>Will be used in admin panel side menu</p>
              </b-col>
              <b-col md="12">
                <!-- banner -->
                <!-- <validation-provider
            #default="{ errors }"
            name="Label"
            rules="required"
          > -->
                <b-form-group
                  label="System Logo - Black"
                  label-for="label-text-"
                >
                  <b-form-file
                    id="metaimage"
                    @change="handleImageSelectedOne"
                  />
                </b-form-group>
                <!-- <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider> -->
              </b-col>
              <b-col md="4">
                <b-form-group
                  v-if="Object.keys(imageUrlOne).length > 0"
                >
                  <img
                    :src="imageUrlOne"
                    class="uploadImage"
                  >
                  <br>
                  <b-badge
                    class="cursor"
                    variant="danger"
                    @click="removeImageOne"
                  >
                    <feather-icon
                      icon="Trash2Icon"
                      class="mr-25"
                    />
                    <span>Remove</span>
                  </b-badge>
                </b-form-group>
              </b-col>
              <p>Will be used in admin panel topbar in mobile + Admin login page</p>
              <b-col md="12">
                <b-form-group
                  label="Admin login page background"
                  label-for="label-text-"
                >
                  <b-form-file
                    id="metaimage1"
                    @change="handleImageSelectedTwo"
                  />
                </b-form-group>
                <!-- <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider> -->
              </b-col>
              <b-col md="4">
                <b-form-group
                  v-if="Object.keys(imageUrlTwo).length > 0"
                >
                  <img
                    :src="imageUrlTwo"
                    class="uploadImage"
                  >
                  <br>
                  <b-badge
                    class="cursor"
                    variant="danger"
                    @click="removeImageTwo"
                  >
                    <feather-icon
                      icon="Trash2Icon"
                      class="mr-25"
                    />
                    <span>Remove</span>
                  </b-badge>
                </b-form-group>
              </b-col>
            </b-row>
            <div
              class="text-lg-center mt-1"
            >
              <b-button
                class="submit"
                variant="primary"
                type="submit"
                @click.prevent="validationForm"
              >
                Submit
              </b-button>
            </div>
          </b-form>
        </validation-observer>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BRow,
  BCol,
  BButton,
  BCard,
  BBadge,
  BFormFile,
//   BFormSelect,
//   BFormSelectOption,
  // BFormCheckbox,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import useUploadImage from '@/commonFunction/useUploadImage'
import useUploadImageOne from '@/commonFunction/useUploadImageOne'
import useUploadImageTwo from '@/commonFunction/useUploadImageTwo'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BCard,
    ValidationProvider,
    ValidationObserver,
    BBadge,
    BFormFile,
    // BFormSelect,
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      site_name: '',
      system_logo_white: '',
      system_logo_black: '',
      admin_login_background: '',
      required,
      setting: '',
    }
  },
  setup() {
    // const blankUserData = {
    //   banner: [],
    // }
    const {
      imageFile, imageUrl, handleImageSelected, removeImage,
    } = useUploadImage()
    const {
      imageFileOne, imageUrlOne, handleImageSelectedOne, removeImageOne,
    } = useUploadImageOne()
    const {
      imageFileTwo, imageUrlTwo, handleImageSelectedTwo, removeImageTwo,
    } = useUploadImageTwo()
    return {
      handleImageSelected,
      imageFile,
      imageUrl,
      removeImage,
      handleImageSelectedOne,
      imageFileOne,
      imageUrlOne,
      removeImageOne,
      imageFileTwo,
      imageUrlTwo,
      handleImageSelectedTwo,
      removeImageTwo,

      // state,
    }
  },
  mounted() {
    this.fetchsetting()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('site_name', this.site_name)
          data.append('system_logo_black', this.imageFileOne)
          data.append('system_logo_white', this.imageFile)
          data.append('admin_login_background', this.imageFileTwo)
          this.$http.post('setting/update', data).then(response => {
            if (response.data.status) {
              this.successAlert(response.data.message)
            } else {
              this.errorAlert(response.data.message)
            }
          })
        }
      })
    },
    updateFields(setting) {
      this.site_name = setting.site_name
      this.imageUrl = setting.system_logo_white
      this.imageUrlOne = setting.system_logo_black
      this.imageUrlTwo = setting.admin_login_background
    },
    fetchsetting() {
      this.$http.get('setting/fetchRecords').then(response => {
        this.setting = response.data.data
        this.updateFields(this.setting)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content{
    width:50%;
    margin:auto;
}
.uploadImage{
  width: 170px;
height: 200px;
}
.btn-icon{
color: #EA5A5B;
margin-top: 6px;
}
.btn-icon:hover{
cursor: pointer;
}
.submit{
z-index: 1 !important;
margin-bottom: 10% !important;
}
.repeater-form {
  overflow: hidden;
  transition: 0.35s height;
}
</style>
