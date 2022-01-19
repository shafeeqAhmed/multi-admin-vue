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
                  label="Blog Title *"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="blog title"
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
                  label="Category"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="blog category"
                    rules="required"
                  >
                    <b-form-select
                      v-if="categoriesOption"
                      id="label-text"
                      v-model="blogcategory"
                      class="mt-0"
                    >
                      <b-form-select-option
                        v-for="category in categoriesOption"
                        :key="category.id"
                        :value="category.id"
                      >
                        {{ category.category_name }}
                      </b-form-select-option>
                    </b-form-select>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Status"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="status"
                    rules="required"
                  >
                    <b-form-select
                      id="label-text"
                      v-model="status"
                      class="mt-0"
                    >
                      <b-form-select-option :value="1">
                        active
                      </b-form-select-option>
                      <b-form-select-option :value="0">
                        block
                      </b-form-select-option>
                    </b-form-select>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  label="Slug*"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="slug"
                    rules="required"
                  >
                    <b-form-input
                      id="label-text"
                      v-model="slug"
                      :state="errors.length > 0 ? false : null"
                      type="text"
                      placeholder="Slug"
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
                  label="Banner (1300x650)"
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
                <b-form-group
                  label="Short Description*"
                  label-for="label-text-"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Label"
                    rules="required"
                  >
                    <b-form-textarea
                      id="label-text"
                      v-model="short_description"
                      :state="errors.length > 0 ? false : null"
                      placeholder="Short Description"
                      rows="3"
                      max-rows="6"
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
            <div
              v-if="recordId==0"
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
            <div
              v-if="recordId"
              class="text-lg-center mt-1"
            >
              <b-button
                class="submit"
                variant="primary"
                type="submit"
                @click.prevent="validationForm"
              >
                Update
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
  BFormSelect,
  BFormSelectOption,
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
import useUploadImageOne from '@/commonFunction/useUploadImageOne'
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
    BFormSelect,
    BFormSelectOption,
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      title: '',
      meta_title: '',
      meta_description: '',
      keywords: '',
      is_file_able: false,
      required,
      recordId: 0,
      blogs: '',
      content: '',
      categoriesOption: '',
      blogcategory: '',
      slug: '',
      status: 0,
      short_description: '',
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
    return {
      handleImageSelected,
      imageFile,
      imageUrl,
      removeImage,
      handleImageSelectedOne,
      imageFileOne,
      imageUrlOne,
      removeImageOne,
      // state,
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  created() {
    const USER_APP_STORE_MODULE_NAME = 'blogs'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

    const { id } = this.$router.currentRoute.params
    if (id) {
      this.$http.get(`blogs/fetchRecord/${id}`).then(response => {
        this.blogs = response.data.data.blogs
        console.log(this.blogs.banner)
        this.updateFields(this.blogs)
      })
    }
  },
  mounted() {
    this.fetchcategories()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('title', this.title)
          data.append('slug', this.slug)
          data.append('status', this.status)
          data.append('category_id', this.blogcategory)
          data.append('meta_title', this.meta_title)
          data.append('short_description', this.short_description)
          data.append('meta_description', this.meta_description)
          data.append('meta_img', this.imageFileOne)
          data.append('meta_keywords', this.keywords)
          data.append('banner', this.imageFile)
          data.append('description', this.content)
          if (this.recordId === 0) {
            this.$http.post('blog/add', data).then(response => {
              if (response.data.status) {
                this.successAlert(response.data.message)
                this.$router.push({ name: 'admin-blogs-list' })
              } else {
                this.errorAlert(response.data.message)
              }
            })
          } else {
            data.append('_method', 'post')
            this.$http.post(`blogs/update/${this.recordId}`, data, {
              headers: {
                'Access-Control-Allow-Origin': '*',
              },
            }).then(response => {
              this.$bvToast.toast(response.data.message, {
                title: 'Success',
                variant: 'success',
                solid: true,
              })
              this.$router.push({ name: 'admin-blogs-list' })
            })
          }
        }
      })
    },
    updateFields(blogs) {
      this.title = blogs.title
      this.slug = blogs.slug
      this.status = blogs.status
      this.meta_title = blogs.meta_title
      this.short_description = blogs.short_description
      this.meta_description = blogs.meta_description
      this.keywords = blogs.meta_keywords
      this.recordId = blogs.id
      this.content = blogs.description
      this.imageUrl = blogs.banner
      this.imageUrlOne = blogs.meta_img
      this.blogcategory = blogs.category_id
    },
    fetchcategories() {
      this.$http.get('Bcategory/fetchRecords').then(response => {
        this.categoriesOption = response.data.data.Bcategory.data
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
