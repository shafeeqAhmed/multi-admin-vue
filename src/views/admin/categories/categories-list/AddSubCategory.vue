<template>
  <div class="container-fluid">
    <b-card>
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <b-col cols="12">
            <b-breadcrumb>
              <b-breadcrumb-item
                v-for="(item, key) in breadCrum"
                :key="key"
                class="breadCrum"
                :active="item.active"
                @click="getChild(item)"
              >
                {{ item.name }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </b-col>
        </b-row>
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
          />

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchCategory"
                class="d-inline-block mr-1"
                placeholder="Search..."
                :debounce="500"
              />
              <!-- <b-button
                variant="primary"
                @click="addCategory"
              >
                <span class="text-nowrap">Add Sub Category</span>
              </b-button> -->
            </div>
          </b-col>
        </b-row>
      </div>
      <transition name="slide-fade">
        <div
          v-if="Object.keys(subChilds).length"
          class="SubCategoryRow"
        >
          <div
            v-for="item in subChilds"
            :key="item.id"
            class="cursor categoryColumns"
            tabindex="0"
            @click="getChild(item)"
          >
            <span class="ml-1"> {{ item.name }} - {{ item.id }} </span>
          </div>
        </div>
      </transition>

      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2 form"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <!-- Category Name -->
          <validation-provider
            #default="validationContext"
            name="name"
            rules="required"
          >
            <b-form-group
              label="Category Name"
              label-for="category-name"
            >
              <b-form-input
                id="category-name"
                v-model="userData.name"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="John Doe"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- <small class="text-danger">{{ errors[0] }}</small> -->
          </validation-provider>

          <!-- Comission Rate -->
          <validation-provider
            #default="validationContext"
            name="commission_rate"
            rules="required"
          >
            <b-form-group
              label="Comission Rate"
              label-for="commission_rate"
            >
              <b-form-input
                id="commission_rate"
                v-model="userData.commission_rate"
                type="number"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- banner -->
          <validation-provider
            #default="validationContext"
            name="banner"
          >
            <b-form-group
              label="Banner"
              label-for="banner"
            >
              <b-form-file
                id="banner"
                :state="getValidationState(validationContext)"
                @change="handleImageSelected"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <b-form-group v-if="Object.keys(imageUrl).length > 0">
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
          <!-- icon -->
          <validation-provider
            #default="validationContext"
            name="icon"
          >
            <b-form-group
              label="Icon"
              label-for="icon"
            >
              <b-form-file
                id="icon"
                :state="getValidationState(validationContext)"
                @change="handleImageSelectedOne"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <b-form-group v-if="Object.keys(imageUrlOne).length > 0">
            <img
              :src="imageUrlOne"
              class="uploadImage"
            ><br>
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
          <!-- meta title -->
          <validation-provider
            #default="validationContext"
            name="meta_title"
          >
            <b-form-group
              label="Meta Title"
              label-for="meta_title"
            >
              <b-form-textarea
                id="meta_title"
                v-model="userData.meta_title"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- meta description -->
          <validation-provider
            #default="validationContext"
            name="meta_description"
          >
            <b-form-group
              label="Meta Description"
              label-for="meta_description"
            >
              <b-form-textarea
                id="meta_description"
                v-model="userData.meta_description"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Status -->
          <validation-provider
            #default="validationContext"
            name="status"
            rules="required"
          >
            <b-form-group
              label="Status"
              label-for="status"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.status"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="statusOptions"
                :clearable="false"
                input-id="status"
                :reduce="label => label.value"
              />
              <b-form-invalid-feedback
                :state="getValidationState(validationContext)"
              >
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-1"
              type="submit"
              :disabled="isDisabled"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              :to="{ name: 'admin-category-list' }"
            >
              Cancel
            </b-button>
          </div>
        </b-form>
      </validation-observer>
    </b-card>
  </div>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BButton,
  BFormFile,
  BFormTextarea,
  BBadge,
  BCard,
  BRow,
  BCol,
  BBreadcrumb,
  BBreadcrumbItem,
} from 'bootstrap-vue'

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref, onMounted } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import router from '@/router'
import store from '@/store'
import useUploadImage from '@/commonFunction/useUploadImage'
import useUploadImageOne from '@/commonFunction/useUploadImageOne'
import categoryStoreModule from '../categoryStoreModule'
import useCategoriesList from './useCategoriesList'

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    BFormFile,
    BFormTextarea,
    vSelect,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
    BBadge,
    BCard,
    BRow,
    BCol,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      required,
      alphaNum,
      email,
    }
  },
  computed: {
    grandParent() {
      return `${store.state.common.parentCategory.name} > `
    },
  },
  setup() {
    const isActiveSubCategoryTabs = ref(false)
    const USER_APP_STORE_MODULE_NAME = 'admin-categories'
    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, categoryStoreModule)
    const {
      categorychildRequest,
      subChilds,
      searchCategory,
      breadCrum,
    } = useCategoriesList()
    const blankUserData = {
      parent_id: '',
      name: '',
      commission_rate: '',
      banner: [],
      icon: [],
      featured: 0,
      meta_title: '',
      meta_description: '',
      bread_crumbs: '',
      status: { value: 1, label: 'Enabled' },
    }
    const actionType = ref('add')
    const isDisabled = ref(false)
    const recordId = ref(0)
    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }
    const statusOptions = ref([
      { value: 1, label: 'Enabled' },
      { value: 0, label: 'Disabled' },
    ])
    const {
      imageFile,
      imageUrl,
      handleImageSelected,
      removeImage,
    } = useUploadImage()
    const {
      imageFileOne,
      imageUrlOne,
      handleImageSelectedOne,
      removeImageOne,
    } = useUploadImageOne()
    const getChild = payload => {
      store.commit('common/UPDATE_PARENT_CATEGORY', payload)
      categorychildRequest()
    }
    onMounted(() => {
      if (store.state.common.parentCategory.id === 0) {
        router.push({ name: 'admin-category-list' })
      }
      const editRecord = store.getters['admin-categories/record']
      if (Object.keys(editRecord).length > 0) {
        // we edit record then we should update the parent category of record instead of edited record id
        recordId.value = editRecord.id
        actionType.value = 'update'
        userData.value.name = editRecord.name
        userData.value.commission_rate = editRecord.commission_rate
        userData.value.imageUrl = editRecord.banner
        imageUrl.value = editRecord.banner
        imageUrlOne.value = editRecord.icon
        userData.value.meta_title = editRecord.meta_title
        userData.value.meta_description = editRecord.meta_description
        const selectedOption = statusOptions.value.find(
          status => status.value === editRecord.status,
        )
        userData.value.status = selectedOption.label
      } else {
        userData.value.commission_rate = store.state.common.parentCategory.commission_rate
      }
      categorychildRequest()
    })
    // onUnmounted(() => {
    //   if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    // })
    // eslint-disable-next-line func-names
    const onSubmit = function () {
      isDisabled.value = true
      userData.value.banner = imageFile.value
      userData.value.icon = imageFileOne.value
      userData.value.parent_id = store.state.common.parentCategory.id
      userData.value.bread_crumbs = JSON.stringify(breadCrum.value)
      if (userData.value.status === 'Enabled') {
        userData.value.status = 1
      } else if (userData.value.status === 'Disabled') {
        userData.value.status = 0
      }
      if (this.isValidObject(userData.value.status)) {
        userData.value.status = userData.value.status.value
      }
      const data = new FormData()
      Object.keys(userData.value).forEach(key => {
        data.set(key, userData.value[key])
      })
      if (actionType.value === 'add') {
        store
          .dispatch('admin-categories/addRecord', data)
          .then(response => {
            userData.value.imageUrl = ''
            userData.value.imageUrlOne = ''
            if (response.data.status) {
              this.$swal({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
              categorychildRequest()
            } else {
              this.$swal({
                title: 'Error!',
                text: response.data.message,
                icon: 'warning',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
            }
            router.push({ name: 'admin-sub-category-list' })
          })
          .catch(error => {
            // handle error
            this.$refs.refFormObserver.setErrors(error.response.data.errors)
            // console.log(error.response.data.errors)
          })
          .then(() => {
            // always executed
            isDisabled.value = false
          })
      } else {
        data.append('_method', 'put')
        const payload = {
          data,
          id: recordId.value,
        }
        store
          .dispatch('admin-categories/updateRecord', payload)
          .then(response => {
            userData.value.imageUrl = ''
            userData.value.imageUrlOne = ''
            if (response.data.status) {
              this.$swal({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
            } else {
              this.$swal({
                title: 'Something is going wrong!',
                text: response.data.message,
                icon: 'warning',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })
            }
            router.push({ name: 'admin-sub-category-list' })
          })
          .catch(error => {
            // handle error
            this.$refs.refFormObserver.setErrors(error.response.data.errors)
            // console.log(error.response.data.errors)
            // console.log(error.response.data)
            // console.log(error.response)
          })
          .then(() => {
            // always executed
            isDisabled.value = false
          })
      }
    }
    const { refFormObserver, getValidationState, resetForm } = formValidation(
      resetuserData,
    )
    return {
      userData,
      onSubmit,
      refFormObserver,
      getValidationState,
      resetForm,
      statusOptions,
      handleImageSelected,
      imageFile,
      imageUrl,
      removeImage,
      handleImageSelectedOne,
      imageFileOne,
      imageUrlOne,
      removeImageOne,
      isDisabled,
      isActiveSubCategoryTabs,
      subChilds,
      getChild,
      categorychildRequest,
      searchCategory,
      breadCrum,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
.uploadImage {
  height: 300px;
  width: 300px;
}
.cursor {
  cursor: pointer;
}
.SubCategoryRow {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 0px;
}
.breadCrum{
  font-weight: bolder;
  font-size: 17px;
}
.categoryColumns:hover {
  background-color: #107cd3;
}
.categoryColumns:focus {
  background-color: #107cd3;
}
.categoryColumns {
  flex: 0 0 15%;
  /* The important bit. This percentage decides your columns.
            The percent can be px. It just represents your minimum starting width.
             */
  margin: 1px;
  background: #49a7f4;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: left;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
