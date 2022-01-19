<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Category
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>
      <!-- BODY -->
      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
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
          <b-form-group
            v-if="Object.keys(imageUrlOne).length > 0"
          >
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
                lablel="label"
                :reduce="label => label.value"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
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
              <b-spinner
                v-if="getLoader('loaderOne')"
                small
              />
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>

        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BSpinner, BButton, BFormFile, BFormTextarea, BBadge,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  ref, onBeforeUpdate, toRefs,
} from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import store from '@/store'
import useUploadImage from '@/commonFunction/useUploadImage'
import useUploadImageOne from '@/commonFunction/useUploadImageOne'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BSpinner,
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
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
    selectedFormData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      required,
      alphaNum,
      email,
    }
  },
  setup(props, { emit }) {
    const { isAddNewUserSidebarActive } = toRefs(props)
    const blankUserData = {
      parent_id: 0,
      name: '',
      comission_rate: '',
      banner: [],
      icon: [],
      featured: 0,
      meta_title: '',
      meta_description: '',
      bread_crumbs: '',
      status: '',
    }
    const actionType = ref('add')
    const isDisabled = ref(false)
    const recordId = ref(0)
    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }
    const {
      imageFile, imageUrl, handleImageSelected, removeImage,
    } = useUploadImage()
    const {
      imageFileOne, imageUrlOne, handleImageSelectedOne, removeImageOne,
    } = useUploadImageOne()
    // eslint-disable-next-line func-names
    const onSubmit = function () {
      store.commit('common/UPDATE_LOADER', { loader: 'loaderOne', value: true })
      isDisabled.value = true
      userData.value.banner = imageFile.value
      userData.value.icon = imageFileOne.value
      userData.value.bread_crumbs = userData.value.name
      if (this.isValidObject(userData.value.status)) {
        userData.value.status = userData.value.status.value
      }
      const data = new FormData()
      Object.keys(userData.value).forEach(key => {
        data.set(key, userData.value[key])
      })
      if (actionType.value === 'add') {
        store.commit('common/UPDATE_LOADER', { loader: 'loaderOne', value: true })
        store.dispatch('admin-categories/addRecord', data)
          .then(response => {
            userData.value.imageUrl = ''
            userData.value.imageUrlOne = ''
            if (response.data.status) {
              this.toastSuccess(response.data.message)
              emit('refetch-data')
              emit('update:is-add-new-user-sidebar-active', false)
              // this.$swal({
              //   title: 'Success!',
              //   text: response.data.message,
              //   icon: 'success',
              //   customClass: {
              //     confirmButton: 'btn btn-primary',
              //   },
              //   buttonsStyling: false,
              // })
            } else {
              this.toastDanger(response.data.message)
              // this.$swal({
              //   title: 'Error!',
              //   text: response.data.message,
              //   icon: 'danger',
              //   customClass: {
              //     confirmButton: 'btn btn-primary',
              //   },
              //   buttonsStyling: false,
              // })
            }
          })
          .catch(error => {
            // handle error
            this.$refs.refFormObserver.setErrors(error.response.data.errors)
          })
          .then(() => {
          // always executed
            isDisabled.value = false
            store.commit('common/UPDATE_LOADER', { loader: 'loaderOne', value: false })
          })
      } else {
        data.append('_method', 'put')
        const payload = {
          data,
          id: recordId.value,
        }
        store.dispatch('admin-categories/updateRecord', payload)
          .then(response => {
            emit('refetch-data')
            emit('update:is-add-new-user-sidebar-active', false)
            userData.value.imageUrl = ''
            userData.value.imageUrlOne = ''
            if (response.data.status) {
              this.toastSuccess(response.data.message)
            } else {
              this.toastDanger(response.data.message)
              // this.$swal({
              //   title: 'Error!',
              //   text: response.data.message,
              //   icon: 'danger',
              //   customClass: {
              //     confirmButton: 'btn btn-primary',
              //   },
              //   buttonsStyling: false,
              // })
            }
          })
          .catch(error => {
          // handle error
            this.$refs.refFormObserver.setErrors(error.response.data.errors)
          })
          .then(() => {
          // always executed
            isDisabled.value = false
            store.commit('common/UPDATE_LOADER', { loader: 'loaderOne', value: false })
          })
      }
    }
    const statusOptions = [
      { value: 1, label: 'Enabled' },
      { value: 0, label: 'Disabled' },
    ]
    onBeforeUpdate(() => {
      isDisabled.value = false
      const editRecord = store.state['admin-categories'].record
      if (Object.keys(editRecord).length > 0 && isAddNewUserSidebarActive.value) {
        userData.value.name = editRecord.name
        userData.value.commission_rate = editRecord.commission_rate
        imageUrl.value = editRecord.banner
        imageUrlOne.value = editRecord.icon
        userData.value.featured = editRecord.featured
        userData.value.meta_title = editRecord.meta_title
        userData.value.meta_description = editRecord.meta_description
        const selectedOption = statusOptions.find(status => status.value === editRecord.status)
        userData.value.status = selectedOption
        recordId.value = editRecord.id
        actionType.value = 'update'
      } else {
        actionType.value = 'add'
      }
      if (Object.keys(editRecord).length === 0 && isAddNewUserSidebarActive.value) {
        imageUrl.value = []
        imageUrlOne.value = []
      }
    })
    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetuserData)
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
      // state,
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
   width: 100%;
}
.cursor {
  cursor: pointer
}
</style>
