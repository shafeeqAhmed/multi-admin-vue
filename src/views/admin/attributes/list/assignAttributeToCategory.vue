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
            cols="6"
          >
            <h3>
              <strong>
                {{ fieldTitle }}
              </strong>
            </h3>
          </b-col>
          <!-- Search -->
          <b-col
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
          </b-col>
        </b-row>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">
                  Select
                </th>
                <th scope="col">
                  Last Category
                </th>
                <th scope="col">
                  Category ID
                </th>
                <th scope="col">
                  bread Crum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in rows"
                :key="index"
              >
                <td style="vertical-align:middle;">
                  <b-form-checkbox
                    :checked="parseInt(row.attribute_status )=== 1"
                    @change="assignCategory(row.id, $event)"
                  />
                </td>
                <td>
                  {{ row.name }}
                </td>
                <td>
                  {{ row.id }}
                </td>
                <td>
                  <b-breadcrumb
                    class="breadcrumb-chevron mb-0"
                    :items="convertStringToBread(row.bread_crumbs)"
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
  BFormInput,
  // BButton,
  BBreadcrumb,
  BFormCheckbox,
} from 'bootstrap-vue'
import router from '@/router'
// Notification
// Notification
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
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
      fieldTitle: '',
      searchQuery: '',
      rows: [],
      selected: [],
    }
  },
  watch: {
    searchQuery(query) {
      this.getCategories(query)
    },
  },
  created() {
    this.getField()
  },
  methods: {
    getCategories(query) {
      if (query) {
        this.$http.get(`category-breadcrum-search-attribute/${query}/${router.currentRoute.params.id}`)
          .then(response => {
            this.rows = response.data.data.categories
          })
      }
    },
    getField() {
      this.$http.get(`attributes/${router.currentRoute.params.id}`)
        .then(response => {
          this.fieldTitle = response.data.data.attribute.title
        })
    },
    convertStringToBread(bread) {
      const list = bread.split('>').map(name => ({
        text: name,
      }))
      return list
    },
    assignCategory(categoryId, status) {
      const data = new FormData()
      data.append('attribute_id', router.currentRoute.params.id)
      data.append('category_id', categoryId)
      data.append('status', status === true ? 1 : 0)
      this.$http.post('/attribute/assign-to-category', data)
        .then(response => {
          this.toastSuccess(response.data.message)
        })
    },
  },
}

</script>
