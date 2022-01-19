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
                  AT - {{ row.id }}
                </td>
                <td>
                  {{ row.title }}
                </td>
                <td>
                  <b-badge
                    pill
                    :variant="`light-${resolveUserStatusVariant(row.category_attribute_status)}`"
                    class="text-capitalize"
                  >
                    {{ resolveUserStatusText(row.category_attribute_status) }}
                  </b-badge>
                </td>
                <td>
                  <b-form-checkbox
                    :checked="row.category_attribute_status === 1"
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
import useList from './useList'

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
      this.getData(categoryId)
    }
  },
  methods: {
    getData(categoryId) {
      this.$http.get(`category/${categoryId}/attributes`)
        .then(response => {
          this.rows = response.data.data.attributes
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
      data.append('attribute_id', row.id)
      data.append('category_id', this.$router.currentRoute.params.id)
      data.append('status', status === true ? 1 : 0)
      this.$http.post('attribute/assign-to-category', data)
        .then(response => {
          this.toastSuccess(response.data.message)
          this.getData(this.$router.currentRoute.params.id)
        })
        .catch(() => {
          this.toastDanger('Something is going wrong please try again')
        })
    },
  },
  setup() {
    const {
      // UI
      resolveUserStatusVariant,
      resolveUserStatusText,
    } = useList()
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
