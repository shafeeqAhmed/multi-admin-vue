<template>
  <b-card>
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
                  label="Title"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="title"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Title"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Link"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="link"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Slug"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Add Contant"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <quill-editor
                      ref="myQuillEditor"
                      v-model="content"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
            </b-row>
            <h6>Seo Fields</h6>
            <b-row>
              <b-col md="12">
                <b-form-group
                  label="Meta Title"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="meta_title"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Title"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Meta Description"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-textarea
                      id="label-text"
                      v-model="meta_description"
                      :state="errors.length > 0 ? false : null"
                      placeholder="Description"
                      rows="3"
                      max-rows="6"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Keyword"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="keywords"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Keyword,Keyword"
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
                  label="Meta Image"
                  label-for="label-text-"
                >
                  <b-form-file
                    id="mataimage"
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
              <!-- <b-col md="12">
                <b-form-group
                  label="File Allowed ?"
                  label-for="label-text-"
                >
                  <div class="demo-inline-spacing">
                    <b-form-checkbox
                      v-model="is_file_able"
                      name="check-button"
                      switch
                      inline
                    />
                  </div>
                </b-form-group>
              </b-col> -->
            </b-row>
            <div class="text-lg-right mt-1">
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
  BFormTextarea,
  BBadge,
  BFormFile,
  // BFormCheckbox,
} from 'bootstrap-vue'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import store from '@/store'
import useUploadImage from '@/commonFunction/useUploadImage'
import StoreModule from '../storeModule'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BCard,
    BFormTextarea,
    ValidationProvider,
    ValidationObserver,
    quillEditor,
    BBadge,
    BFormFile,
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      title: '',
      link: '',
      meta_title: '',
      meta_description: '',
      keywords: '',
      is_file_able: false,
      required,
      status: 'Active',
      recordId: 0,
      page: '',
      content: '',
    }
  },
  setup() {
    // const blankUserData = {
    //   banner: [],
    // }
    const {
      imageFile, imageUrl, handleImageSelected, removeImage,
    } = useUploadImage()
    return {
      handleImageSelected,
      imageFile,
      imageUrl,
      removeImage,
      // state,
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  created() {
    const USER_APP_STORE_MODULE_NAME = 'pages'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

    const { id } = this.$router.currentRoute.params
    if (id) {
      this.$http.get(`page/fetchRecord/${id}`).then(response => {
        this.page = response.data.data.page
        console.log(this.page)
        this.updateFields(this.page)
      })
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('title', this.title)
          data.append('slug', this.link)
          data.append('meta_title', this.meta_title)
          data.append('meta_description', this.meta_description)
          data.append('keywords', this.keywords)
          data.append('meta_image', this.imageFile)
          data.append('content', this.content)
          if (this.recordId === 0) {
            this.$http.post('page/add', data).then(response => {
              if (response.data.status) {
                this.successAlert(response.data.message)
                this.$router.push({ name: 'admin-website-settings-pages' })
              } else {
                this.errorAlert(response.data.message)
              }
            })
          } else {
            data.append('_method', 'post')
            this.$http.post(`page/update-page-2/${this.recordId}`, data, {
              headers: {
                'Access-Control-Allow-Origin': '*',
              },
            }).then(response => {
              this.$bvToast.toast(response.data.message, {
                title: 'Success',
                variant: 'success',
                solid: true,
              })
              this.$router.push({ name: 'admin-website-settings-pages' })
            })
          }
        }
      })
    },
    updateFields(page) {
      this.title = page.title
      this.link = page.slug
      this.meta_title = page.meta_title
      this.meta_description = page.meta_description
      this.keywords = page.keywords
      this.recordId = page.id
      this.content = page.content
      this.imageUrl = page.meta_image
    },
  },
}
</script>

<style lang="scss" scoped>
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
