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
            </b-row>
            <div class="text-lg-center mt-1">
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
  // BFormCheckbox,
} from 'bootstrap-vue'
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
    ValidationProvider,
    ValidationObserver,
    // BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      category: '',
      title: '',
      keywords: '',
      required,
      recordId: 0,
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
      this.$http.get(`Bcategory/fetchRecord/${id}`).then(response => {
        this.category = response.data.data.Bcategory
        console.log(this.category)
        this.updateFields(this.category)
      })
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('category_name', this.title)
          if (this.recordId === 0) {
            this.$http.post('blog_category/add', data).then(response => {
              if (response.data.status) {
                this.successAlert(response.data.message)
                this.$router.push({ name: 'admin-blogs-categories-list' })
              } else {
                this.errorAlert(response.data.message)
              }
            })
          } else {
            data.append('_method', 'post')
            this.$http.post(`Bcategory/update/${this.recordId}`, data, {
              headers: {
                'Access-Control-Allow-Origin': '*',
              },
            }).then(response => {
              this.successAlert(response.data.message)
              this.$router.push({ name: 'admin-blogs-categories-list' })
            })
          }
        }
      })
    },
    updateFields(category) {
      this.title = category.category_name
      this.recordId = category.id
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
