<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
                debounce="400"
              />
              <b-button
                variant="primary"
              >
                <span class="text-nowrap">Add Category</span>
              </b-button>
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
                  <span>Select</span><span><b-form-checkbox /></span>
                </th>
                <th scope="col">
                  Name
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
                <td>
                  <b-form-checkbox />
                </td>
                <td>
                  {{ row.name }}
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
  BButton,
  BBreadcrumb,
  BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
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
      items: [
        {
          text: 'Home',
        },
        {
          text: 'Library',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
      allSelected: false,
    }
  },
  watch: {
    searchQuery(query) {
      this.getCategories(query)
    },
  },
  methods: {
    getCategories(query) {
      this.$http.get(`category-breadcrum-search/${query}`)
        .then(response => {
          this.rows = response.data.data.categories
        })
    },
    convertStringToBread(bread) {
      const list = bread.split('>').map(name => ({
        text: name,
      }))
      return list
    },
  },
}
</script>
