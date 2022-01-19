/* eslint-disable no-unused-vars */
<template>
  <div>
    <div
      v-for="(field, index) in filedList"
      :key="`card-${index}`"
      class="mb-2"
    >
      <!-- <b-card v-if="field.hidden === 1"> -->
      <!-- <b-card> -->
      <app-collapse :is-submited="field.collapse.submit">
        <app-collapse-item
          :title="field.title"
          :is-visible="field.collapse.open"
        >
          <b-row>
            <b-col md="12">
              <validation-observer :ref="`simpleRules${index}`">
                <b-form enctype="multipart/form-data">
                  <b-row>
                    <b-col
                      v-for="(input, InputIndex) in field.fields"
                      :key="`input-field-${InputIndex}`"
                      cols="12"
                    >
                      <b-form-group
                        :label="input.label"
                        :label-for="`input-${field.title}-${InputIndex}`"
                        label-cols-md="4"
                      >
                        <validation-provider
                          #default="{ errors }"
                          :name="input.label"
                          :rules="{ required: input.requredField }"
                        >
                          <b-form-input
                            v-if="input.type === 'text'"
                            :id="`input-${field.title}-${InputIndex}`"
                            v-model="input.name"
                            :state="errors.length > 0 ? false : null"
                            :placeholder="input.placeHolder"
                          />
                          <v-select
                            v-else-if="input.type === 'select'"
                            :id="`input-${field.title}-${InputIndex}`"
                            v-model="input.select"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="input.selectOptions"
                            :state="errors.length > 0 ? false : null"
                            :multiple="input.multiple"
                            text-field="title"
                            value-field="title"
                            label="title"
                          />
                          <b-form-file
                            v-else-if="input.type === 'file'"
                            :id="`input-${field.title}-${InputIndex}`"
                            v-model="input.name"
                            accept="image/*"
                            :multiple="input.multiple"
                            :state="errors.length > 0 ? false : null"
                            @change="
                              previewImage($event, input, input.multiple)
                            "
                          />
                          <div
                            v-if="input.type === 'file'"
                            class="mb-1"
                          >
                            <div class="clearfix row">
                              <div
                                v-for="(src, fileIndex) in input.select"
                                :key="fileIndex"
                                class="col-3 ImageRemover mt-1"
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
                                  @click="removeImage(input, fileIndex)"
                                />
                                <div class="border">
                                  <b-img
                                    :src="src"
                                    :height="150"
                                    class="display-image"
                                  />
                                </div>
                              </div>
                              <!-- <div class="text-right">
                                       <b-badge
                                          class="cursor"
                                          variant="danger"
                                          @click="removeImage(input)"
                                        >
                                           <feather-icon
                                             icon="Trash2Icon"
                                             class="mr-25"
                                           />

                                        <span>Remove</span>

                                      </b-badge>
                                </div> -->
                            </div>
                          </div>
                          <b-form-radio-group
                            v-else-if="input.type === 'radio'"
                            :id="`input-${field.title}-${InputIndex}`"
                            v-model="input.name"
                            :state="errors.length > 0 ? false : null"
                            :options="input.radioOptions"
                            value-field="text"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col class="col-md-12 text-right">
                      <b-button
                        variant="primary"
                        :disabled="field.collapse.loader"
                        @click="
                          validationForm(field, index, `simpleRules${index}`)
                        "
                      >
                        <b-spinner
                          v-if="field.collapse.loader"
                          small
                        />
                        Submit
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </validation-observer>
            </b-col>
          </b-row>
        </app-collapse-item>
      </app-collapse>
      <!-- </b-card> -->
    </div>
  </div>
</template>

<script>
import {
  // BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BFormFile,
  BFormRadioGroup,
  BImg,
  BButtonClose,
  BButton,
  BSpinner,
  // BFormRadio,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { required } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// pakistan
export default {
  components: {
    // BCard,
    BFormFile,
    AppCollapse,
    AppCollapseItem,
    BRow,
    BCol,
    ValidationProvider,
    BFormGroup,
    BFormInput,
    BForm,
    vSelect,
    ValidationObserver,
    BFormRadioGroup,
    BImg,
    BButtonClose,
    BButton,
    BSpinner,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    // eslint-disable-next-line vue/prop-name-casing
    productId: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      file: [],
      selected: '',
      required,
    }
  },
  computed: {
    filedList() {
      this.fields.forEach((field, index) => {
        if (!this.isValidObject(field.collapse)) {
          // eslint-disable-next-line no-param-reassign
          field.collapse = JSON.parse(field.collapse)
          if (index === 0) {
            // eslint-disable-next-line no-param-reassign
            field.collapse.open = true
          }
        }
      })
      return this.fields
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    previewImage(event, input, _multiple) {
      const selectInput = input
      // eslint-ignor-next-line
      const file = event.target.files
      // assign all the file to name attribute of file
      selectInput.name = Array.from(file)
      // eslint-disable-next-line no-alert
      for (let i = 0; i < selectInput.name.length; i += 1) {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(selectInput.name[i])
        fileReader.addEventListener('load', () => {
          // assing all the file url to the select attribute of file
          if (!_multiple) {
            // eslint-disable-next-line no-unused-expressions
            if (selectInput.select.length > 0) {
              selectInput.select = []
            }
          }
          selectInput.select.push(fileReader.result)
        })
      }
    },
    removeImage(input, index) {
      // we can not apply direct operation on function parameter so assign theme an other parameter
      const selectInput = input
      let selectFileNames = selectInput.name
      if (Array.isArray(selectFileNames)) {
        selectFileNames.splice(index, 1)
      } else {
        selectFileNames = []
      }
      selectInput.select.splice(index, 1)
      // selectInput.name = selectFileNames
    },
    submit() {
      // console.log(submitInput)
      const data = new FormData()
      data.append('data', JSON.stringify(data))
      this.$http.post('fields/store', data).then(() => {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notification',
            icon: 'BellIcon',
            text: '👋 this is the message',
            variant: 'success',
          },
        })
      })
    },
    validationForm(field, index, formdata) {
      const form = new FormData()
      form.append('fields', JSON.stringify(field))
      form.append('product_id', this.productId)
      form.append('category_id', this.categoryId)
      // eslint-disable-next-line no-undef
      this.$refs[formdata][0].validate().then(success => {
        if (success) {
          // eslint-disable-next-line no-param-reassign
          field.collapse.loader = true
          // eslint-disable-next-line no-param-reassign
          this.$http
            .post('products/update-custom-field', form)
            .then(response => {
              // const { data } = response
              // eslint-disable-next-line no-param-reassign
              field.collapse.loader = false
              // if (data.status) {
              // eslint-disable-next-line no-param-reassign
              field.collapse.submit = true
              // eslint-disable-next-line no-param-reassign
              field.collapse.open = false
              let nextIndex = index
              nextIndex += 1
              if (this.fields[nextIndex]) {
                this.fields[nextIndex].collapse.open = true
              }
              // eslint-disable-next-line no-plusplus
              if (index === --this.fields.length) {
                this.updateMenu('variation', { open: true, submit: false })
              }
              this.toastSuccess(response.data.message)
              // } else {
              //   this.errorAlert(data.message)
              // }
              // this.$store.commit('adminProduct/showNextField', payload.index)
            })
            .catch(error => {
              // eslint-disable-next-line no-param-reassign
              field.collapse.loader = false
              this.toastDanger(
                'There is a Error in Your Product Information Form',
              )
              this.$refs.refFormObserver.setErrors(error.response.data.errors)
            })
          // .then(() => {
          //   // eslint-disable-next-line no-param-reassign
          // })
        }
      })
    },
    nextField(index) {
      this.$store.commit('adminProduct/showNextField', index)
    },
    collapseObject(obj) {
      return JSON.parse(obj)
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";

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
  cursor: pointer;
}
.ImageRemover {
  position: relative;
}
.remover {
  position: absolute;
  top: 2px;
  font-size: 34px;
  font-weight: bolder;
  color: black;
  right: 18px;
  padding: 7px;
}

.remover:hover {
  color: red;
}

.display-image {
  width: 100%;
}
</style>
