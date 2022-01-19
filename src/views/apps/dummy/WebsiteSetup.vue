<template>
  <b-row>
    <b-col md="12">
      <validation-observer ref="simpleRules">
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
                            :state="errors.length > 0 ? false : null"
                            placeholder="MultiJunction"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
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
                        label-cols-md="4"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Site Icon"
                          rules="required"
                        >
                          <b-form-file
                            :state="errors.length > 0 ? false : null"
                            placeholder="1 File Selected"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
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
                            placeholder="#37654"
                            :state="errors.length > 0 ? false : null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                          <span class="color"> Hexa code color</span>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
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
                        @click.prevent="validationForm"
                      >
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
                            placeholder="MultiJunction"
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
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Keywords"
                          rules="required"
                        >
                          <b-form-input
                            :state="errors.length > 0 ? false : null"
                            placeholder="Multi Junction,Daily Deals,Daily Special,Deals of the Week,OnedayOnly,Online shop."
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <span class="color"> Separate with coma</span>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
                      <b-form-group
                        label="Meta Image"
                        label-cols-md="4"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Meta Image"
                          rules="required"
                        >
                          <b-form-file
                            placeholder="Choose File"
                            :state="errors.length > 0 ? false : null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
                      <b-button
                        variant="primary"
                        class="float-right"
                        @click.prevent="validationForm"
                      >
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
                          v-model="content"
                          @blur="onEditorBlur($event)"
                          @focus="onEditorFocus($event)"
                          @ready="onEditorReady($event)"
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
                            type="checkbox"
                            class="custom-control-input"
                          >
                          <label
                            class="custom-control-label"
                            for="customSwitch4"
                          >Toggle this switch element</label>
                        </div>
                      </b-form-group>
                    </b-col>
                    <b-col cols="12">
                      <b-button
                        variant="primary"
                        class="float-right"
                      >
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
                            id="textarea-default"
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
                        @click.prevent="validationForm"
                      >
                        Update
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </validation-observer>
            </b-col>
          </b-row>
        </b-card>
      </validation-observer>
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
} from 'bootstrap-vue'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import { required } from '@validations'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

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
  },
  data() {
    return {
      required,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>
<style scoped>
.color {
  font-size: 11px;
}
</style>
