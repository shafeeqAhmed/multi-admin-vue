<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <b-col
            cols="12"
          >
            <b-breadcrumb
              class="breadcrumb-chevron mb-0"
              :items="convertStringToBread(bread_crumbs)"
            />
          </b-col>
          <!-- Search -->
          <!-- <b-col
            cols="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search "
                debounce="400"
              />
            </div>
          </b-col> -->
        </b-row>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">
                  ID
                </th>
                <th scope="col">
                  Title
                </th>
                <th scope="col">
                  Status
                </th>
                <th scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in rows"
                :key="index"
              >
                <td style="vertical-align:middle;">
                  CF - {{ row.custom_field_id }}
                </td>
                <td>
                  {{ row.title }}
                </td>
                <td>
                  <b-badge
                    pill
                    :variant="`light-${resolveUserStatusVariant(row.status)}`"
                    class="text-capitalize"
                  >
                    {{ resolveUserStatusText(row.status) }}
                  </b-badge>
                </td>
                <td>
                  <b-form-checkbox
                    :checked="row.status === 1"
                    @change="assignCategory(row, $event)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mx-2 mb-2 mt-1">
        <b-row>
          <!-- Pagination -->
          <b-col
            cols="12"
          />
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
import {
  BCard,
  BRow,
  BCol,
  // BFormInput,
  // BButton,
  BBreadcrumb,
  BFormCheckbox,
  BBadge,
} from 'bootstrap-vue'
import router from '@/router'
// Notification
// Notification
import useCustomFieldsList from './useCustomFieldsList'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    // BFormInput,
    BBadge,
    // BButton,
    BFormCheckbox,
    // BMedia,
    // BAvatar,
    // BLink,
    // BBadge,
    // BDropdown,
    // BDropdownItem,
    BBreadcrumb,
    // BSpinner,
  },
  data() {
    return {
      searchQuery: '',
      rows: [],
      selected: [],
      bread_crumbs: '',
      allSelected: false,
    }
  },
  watch: {
    searchQuery(query) {
      this.getCategories(query)
    },
  },
  created() {
    const categoryId = this.$router.currentRoute.params.id
    if (categoryId) {
      this.getCategoryFields(categoryId)
    }
  },
  methods: {
    getCategoryFields(categoryId) {
      this.$http.get(`category/${categoryId}/field`)
        .then(response => {
          this.rows = response.data.data.fields
          this.bread_crumbs = response.data.data.breadCrumb
        })
    },
    getCategories(query) {
      if (query) {
        this.$http.get(`category-breadcrum-search/${query}/${router.currentRoute.params.id}`)
          .then(response => {
            this.rows = response.data.data.categories
          })
      }
    },
    convertStringToBread(bread) {
      const list = bread.split('>').map(name => ({
        text: name,
      }))
      return list
    },
    assignCategory(row, status) {
      const data = new FormData()
      data.append('custom_field_id', row.custom_field_id)
      data.append('category_id', row.category_id)
      data.append('status', status === true ? 1 : 0)
      this.$http.post('fields/assign-to-category', data)
        .then(response => {
          this.toastSuccess(response.data.message)
          this.getCategoryFields(this.$router.currentRoute.params.id)
        })
    },
  },
  setup() {
    const {
      // UI
      resolveUserStatusVariant,
      resolveUserStatusText,
    } = useCustomFieldsList()

    return {
      resolveUserStatusVariant,
      resolveUserStatusText,
    }
  },
}

</script>
<style scoped>
.breadcrumb-chevron{
  font-weight: bold;
  font-size: 17px;
}
</style>
