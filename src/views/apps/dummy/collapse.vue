<template>
  <div>
    <b-card>
      <app-collapse>
        <app-collapse-item title="Dynamic Form">
          <b-row>
            <b-col md="12">
              <b-form @submit.prevent>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Product Name"
                      label-for="h-product-name"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-product-name"
                        placeholder="Product Name"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Category"
                      label-for="h-category"
                      label-cols-md="4"
                    >
                      <v-select :options="['Canada', 'United States']" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Brand"
                      label-for="h-brand"
                      label-cols-md="4"
                    >
                      <v-select :options="['Canada', 'United States']" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Minimum Quality"
                      label-for="h-quality"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-quality"
                        type="number"
                        placeholder="Minimum Quality (Numbers)"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Tags"
                      label-for="h-tag"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-tag"
                        type="text"
                        placeholder="Type and hit enter to add tag"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Barcode"
                      label-for="h-barcode"
                      label-cols-md="4"
                    >
                      <b-form-input
                        id="h-barcode"
                        type="text"
                        placeholder="Barcode"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Choose File"
                      label-for="h-barcode"
                      label-cols-md="4"
                    >
                      <b-form-file
                        v-model="file"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-checkbox
                      v-model="selected"
                      value="A"
                    >
                      Checked
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </app-collapse-item>
      </app-collapse>
    </b-card>
    {{ dyncamicFields }}
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormGroup, BFormInput, BForm, BFormCheckbox, BFormFile,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
// import {
//   toRefs,
// } from '@vue/composition-api'

export default {
  components: {
    BCard,
    BFormFile,
    AppCollapse,
    AppCollapseItem,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BFormCheckbox,
    vSelect,
  },
  props: {
    title: String,
  },
  data() {
    return {
      file: '',
      selected: '',
    }
  },
  setup(props) {
    // const { dynamicFields } = toRefs(props)
    // console.log(dynamicFields)
    console.log(props)
  },
}
</script>
