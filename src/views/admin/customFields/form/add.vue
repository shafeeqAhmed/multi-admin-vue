<template>
  <b-card>
    <b-row>
      <b-col class="col-md-12">
        <!-- {{ fields }} -->
        <div class="text-lg-right">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            @click="repeateAgain('text')"
          >
            <feather-icon icon="PlusIcon" />
            <span>Text Input</span>
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="ml-1"
            @click="repeateAgain('select')"
          >
            <feather-icon icon="PlusIcon" />
            <span>Select</span>
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="ml-1"
            @click="repeateAgain('radio')"
          >
            <feather-icon icon="PlusIcon" />
            <span>Radio</span>
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="ml-1"
            @click="repeateAgain('file')"
          >
            <feather-icon icon="PlusIcon" />
            <span>File</span>
          </b-button>
        </div>
        <validation-observer ref="simpleRules">
          <b-form-group
            label="Heading"
            label-for="Heading"
            class="mt-1"
          >
            <validation-provider
              #default="{ errors }"
              name="title"
              rules="required"
            >
              <b-form-input
                id="label-heading"
                v-model="title"
                type="text"
                :state="errors.length > 0 ? false : null"
                placeholder="Group Heading"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
          <b-form
            ref="form"
            :style="{ height: trHeight }"
            class="repeater-form"
            @submit.prevent="repeateAgain"
          >
            <draggable v-model="fields">
              <transition-group
                type="transition"
                name="flip-list"
              >
                <div
                  v-for="(item, index) in fields"
                  :id="item.id"
                  :key="`row-${index}`"
                  ref="row"
                >
                  <br>
                  <!-- {{ item.id }} -->
                  <!-- Row Text Input -->
                  <b-row v-if="item.type === 'text'">
                    <!-- input text field -->
                    <!-- Label -->
                    <b-col md="3">
                      <b-form-group
                        label="Input Text Field Label"
                        label-for="`label-text-${item.id}`"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Label"
                          rules="required"
                        >
                          <b-form-input
                            id="`label-text-${item.id}`"
                            v-model="item.label"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Label"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <!-- Place Holder -->
                    <b-col md="4">
                      <b-form-group
                        label="Place Holder"
                        label-for="`place-holder-${item.id}`"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Placeholder"
                          rules="required"
                        >
                          <b-form-input
                            id="`plcae-holder-${item.id}`"
                            v-model="item.placeHolder"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Place holder"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <!-- required selector -->
                    <b-col md="3">
                      <b-form-group
                        label="Required"
                        label-for="`required-select-text-${item.id}`"
                      >
                        <b-form-select
                          id="`required-select-text-${item.id}`"
                          v-model="item.requredField"
                          :options="requiredOptions"
                          class="mt-0"
                        />
                      </b-form-group>
                    </b-col>
                    <!-- Remove Button -->
                    <b-col
                      cols="2"
                      class="mb-50"
                    >
                      <b-button
                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                        variant="outline-danger"
                        class="mt-0 mt-md-2"
                        @click="removeItem(index)"
                      >
                        <feather-icon
                          icon="XIcon"
                          class="mr-25"
                        />
                        <span>Delete</span>
                      </b-button>
                    </b-col>
                    <b-col cols="12">
                      <hr>
                    </b-col>
                  </b-row>
                  <!-- select option input  -->
                  <b-row v-else-if="item.type === 'select'">
                    <b-col cols="3">
                      <b-form-group
                        label="Select Multiple"
                        label-for="`multiple-select-multiple-${item.id}`"
                      >
                        <b-form-select
                          id="`required-select-multiple-${item.id}`"
                          v-model="item.multiple"
                          :options="requiredOptions"
                          class="mt-0"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col cols="4">
                      <b-form-group
                        label="Select Label"
                        label-for="`label-select-${item.id}`"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Select Label"
                          rules="required"
                        >
                          <b-form-input
                            id="`label-select-${item.id}`"
                            v-model="item.label"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Label"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-row>
                        <b-col cols="12">
                          <b-form-group
                            v-for="(option, selectIndex) in item.selectOptions"
                            :key="selectIndex"
                            label="Option"
                            label-for="`label-select-${selectIndex}`"
                          >
                            <div class="d-flex">
                              <validation-provider
                                #default="{ errors }"
                                name="option"
                                rules="required"
                              >
                                <b-form-input
                                  id="`label-select-${selectIndex}`"
                                  v-model="option.title"
                                  type="text"
                                  placeholder="Option"
                                  class="w-90"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                              </validation-provider>
                              <span
                                class="btn-icon ml-1"
                                @click="
                                  removeOptionItem(index, selectIndex, 'select')
                                "
                              ><feather-icon icon="XIcon" /></span>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="12">
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            @click="repeatAgainOption(index, 'select')"
                          >
                            <feather-icon
                              icon="PlusIcon"
                              class="mr-25"
                            />
                            <span>Options</span>
                          </b-button>
                        </b-col>
                        <b-col cols="12">
                          <hr>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col md="3">
                      <b-form-group
                        label="Required"
                        label-for="`required-select-select-${item.id}`"
                      >
                        <b-form-select
                          id="`required-select-select-${item.id}`"
                          v-model="item.requredField"
                          :options="requiredOptions"
                          class="mt-0"
                        />
                      </b-form-group>
                    </b-col>
                    <!-- Remove Button -->
                    <b-col
                      cols="2"
                      class="mb-50"
                    >
                      <b-button
                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                        variant="outline-danger"
                        class="mt-0 mt-md-2"
                        @click="removeItem(index)"
                      >
                        <feather-icon
                          icon="XIcon"
                          class="mr-25"
                        />
                        <span>Delete</span>
                      </b-button>
                    </b-col>
                    <b-col cols="12">
                      <hr>
                    </b-col>
                  </b-row>
                  <!-- select option input  -->
                  <b-row v-else-if="item.type === 'radio'">
                    <b-col cols="3" />
                    <b-col cols="4">
                      <b-form-group
                        label="Radio Label"
                        label-for="`label-select-${item.id}`"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Radio Label"
                          rules="required"
                        >
                          <b-form-input
                            id="`label-select-${item.id}`"
                            v-model="item.label"
                            type="text"
                            :state="errors.length > 0 ? false : null"
                            placeholder="Label"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-row>
                        <b-col cols="12">
                          <b-form-group
                            v-for="(option, selectIndex) in item.radioOptions"
                            :key="selectIndex"
                            label="Option"
                            label-for="`label-select-${selectIndex}`"
                          >
                            <div class="d-flex">
                              <validation-provider
                                #default="{ errors }"
                                name="Radio option"
                                rules="required"
                              >
                                <b-form-input
                                  id="`label-select-${selectIndex}`"
                                  v-model="option.text"
                                  :state="errors.length > 0 ? false : null"
                                  type="text"
                                  placeholder="Option"
                                  class="w-90"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                              </validation-provider>
                              <span
                                class="btn-icon ml-1"
                                @click="removeOptionItem(index, selectIndex, 'radio')"
                              ><feather-icon icon="XIcon" /></span>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="12">
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            @click="repeatAgainOption(index, 'radio')"
                          >
                            <feather-icon
                              icon="PlusIcon"
                              class="mr-25"
                            />
                            <span>Radio Option</span>
                          </b-button>
                        </b-col>
                        <b-col cols="12">
                          <hr>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col md="3">
                      <b-form-group
                        label="Required"
                        label-for="`required-select-file-${item.id}`"
                      >
                        <b-form-select
                          id="`required-select-file-${item.id}`"
                          v-model="item.requredField"
                          :options="requiredOptions"
                          class="mt-0"
                        />
                      </b-form-group>
                    </b-col>
                    <!-- Remove Button -->
                    <b-col
                      cols="2"
                      class="mb-50"
                    >
                      <b-button
                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                        variant="outline-danger"
                        class="mt-0 mt-md-2"
                        @click="removeItem(index)"
                      >
                        <feather-icon
                          icon="XIcon"
                          class="mr-25"
                        />
                        <span>Delete</span>
                      </b-button>
                    </b-col>
                    <b-col cols="12">
                      <hr>
                    </b-col>
                  </b-row>
                  <!-- select Files  -->
                  <b-row v-else-if="item.type === 'file'">
                    <b-col cols="3">
                      <b-form-group
                        label="File Multiple"
                        label-for="`multiple-select-file-${item.id}`"
                      >
                        <b-form-select
                          id="`multiple-select-file-${item.id}`"
                          v-model="item.multiple"
                          :options="requiredOptions"
                          class="mt-0"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col cols="4">
                      <b-form-group
                        label="File Label"
                        label-for="`label-select-${item.id}`"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="File Label"
                          rules="required"
                        >
                          <b-form-input
                            id="`label-select-${item.id}`"
                            v-model="item.label"
                            :state="errors.length > 0 ? false : null"
                            type="text"
                            placeholder="Label"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                      <b-row>
                        <b-col cols="12">
                          <hr>
                        </b-col>
                      </b-row>
                    </b-col>
                    <!-- required selector -->
                    <b-col md="3">
                      <b-form-group
                        label="Required"
                        label-for="`required-select-${item.id}`"
                      >
                        <b-form-select
                          id="`required-select-file-${item.id}`"
                          v-model="item.requredField"
                          :options="requiredOptions"
                          class="mt-0"
                        />
                      </b-form-group>
                    </b-col>
                    <!-- Remove Button -->
                    <b-col
                      cols="2"
                      class="mb-50"
                    >
                      <b-button
                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                        variant="outline-danger"
                        class="mt-0 mt-md-2"
                        @click="removeItem(index)"
                      >
                        <feather-icon
                          icon="XIcon"
                          class="mr-25"
                        />
                        <span>Delete</span>
                      </b-button>
                    </b-col>
                    <b-col cols="12">
                      <hr>
                    </b-col>
                  </b-row>
                </div>
              </transition-group>
            </draggable>
            <v-select
              v-model="selected"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              :clearable="false"
              input-id="status"
              lablel="active"
              :reduce="label => label.value"
            />
            <div class="text-lg-right mt-1">
              <b-button
                class="submit"
                variant="primary"
                type="submit"
                @click="validationForm"
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
  BFormSelect,
  BCard,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
// import { codeBasic } from './code'
import draggable from 'vuedraggable'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import vSelect from 'vue-select'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormSelect,
    draggable,
    BCard,
    ValidationProvider,
    ValidationObserver,
    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      selected: '',
      statusOptions: [
        { value: 1, label: 'Enabled' },
        { value: 0, label: 'Disabled' },
      ],
      fields: [
        {
          id: 1,
          label: '',
          name: '',
          placeHolder: '',
          requredField: false,
          type: 'text',
        },
      ],
      nextTodoId: 1,
      requiredOptions: [
        { value: true, text: 'Yes' },
        { value: false, text: 'No' },
      ],
      title: '',
      collapse: { open: false, submit: false, loader: false },
      required,
      recordId: 0,
    }
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
    const editRecord = this.$store.getters['adminCutomFields/record']
    if (Object.keys(editRecord).length > 0) {
      this.fields = JSON.parse(editRecord.fields)
      this.title = editRecord.title
      this.nextTodoId = Object.keys(editRecord).length
      this.recordId = editRecord.id
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    repeatAgainOption(listIndex, type) {
      if (type === 'select') {
        this.fields[listIndex].selectOptions.push({ title: '' })
      }
      if (type === 'radio') {
        this.fields[listIndex].radioOptions.push({ text: '', value: '' })
      }
      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeOptionItem(index, optionIndex, type) {
      if (type === 'select') {
        this.fields[index].selectOptions.splice(optionIndex, 1)
      }
      if (type === 'radio') {
        this.fields[index].radioOptions.splice(optionIndex, 1)
      }
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    repeateAgain(type) {
      this.nextTodoId += 1
      const list = {
        id: this.nextTodoId,
        label: '',
        placeHolder: '',
        requredField: false,
        type,
      }
      if (type === 'text') {
        list.name = ''
      }
      if (type === 'select') {
        list.selectOptions = [{ title: '' }]
        list.select = []
        list.multiple = false
      }
      if (type === 'radio') {
        list.radioOptions = [{ text: '', value: '' }]
        list.selectedRadio = ''
      }
      if (type === 'file') {
        list.name = []
        list.select = []
        list.multiple = false
      }
      this.fields.push(list)
      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
        this.initTrHeight()
      })
    },
    removeItem(index) {
      this.fields.splice(index, 1)
      if (this.$refs.row.length > 1) {
        this.trTrimHeight(this.$refs.row[0].offsetHeight)
      }
      this.$nextTick(() => {
        if (this.$refs.row.length > 1) {
          this.trAddHeight(this.$refs.row[0].offsetHeight)
        }
      })
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          const data = new FormData()
          data.append('title', this.title)
          data.append('fields', JSON.stringify(this.fields))
          data.append('collapse', JSON.stringify(this.collapse))
          data.append('status', this.status)
          if (this.recordId === 0) {
            this.$http.post('fields', data).then(response => {
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
                this.$router.push({ name: 'admin-custom-field-list' })
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
            })
          } else {
            data.append('_method', 'put')
            this.$http.post(`/fields/${this.recordId}`, data).then(response => {
              this.$bvToast.toast(response.data.message, {
                title: 'Success',
                variant: 'success',
                solid: true,
              })
              this.$router.push({ name: 'admin-custom-field-list' })
            })
          }
        }
      })
    },
    // addNameToFields() {
    //   const tempFields = this.fields.map(field => {
    //     const temp = field
    //     temp.name = ''
    //     return temp
    //   })
    //   this.fields = tempFields
    // },
    // toCamelCase(str) {
    //   return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    // },
  },
}
</script>

<style lang="scss" scoped>
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
