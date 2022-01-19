<template>
  <div>
    <div class="text-center">
      <b-spinner
        v-if="false"
        variant="primary"
        label="Text Centered"
      />
    </div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

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
              />
            </div>
          </b-col>
        </b-row>
      </div>
      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="fetchRecords"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >
        <!-- Column: id -->
        <template #cell(id)="data">
          <b-media vertical-align="center">
            <small class="text-muted"> P-{{ data.item.id }}</small>
          </b-media>
        </template>
        <!-- Column: Name -->
        <template #cell(name)="data">
          <small class="text-muted">{{ data.item.name }} </small>
        </template>
        <!-- Column: Email -->
        <template #cell(title)="data">
          <small class="text-muted">{{ data.item.title }} </small>
        </template>
        <!-- Column: Role Name -->
        <template #cell(msin)="data">
          <small class="text-muted">{{ data.item.msin }} </small>
        </template>
        <template #cell(qty)="data">
          <small class="text-muted">{{ data.item.qty }} </small>
        </template>
        <template #cell(list_status)="data">
          <small class="text-muted">{{ data.item.list_status }} </small>
        </template>
        <template #cell(status)="data">
          <b-form-checkbox
            :checked="data.item.status == 'active'"
            class="ml-1"
            switch
            @change="updateStatus($event,data.item.id)"
          />
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'pending')" >
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">In Progress</span>
            </b-dropdown-item>
             <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'approved')">
              <feather-icon icon="EditIcon"   />
              <span class="align-middle ml-50">Approved</span>
            </b-dropdown-item>
             <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'rejected')">
              <feather-icon icon="EditIcon"   />
              <span class="align-middle ml-50">Rejected</span>
            </b-dropdown-item>
             <b-dropdown-item  @click.prevent="changeListStatus(data.item.id,'disabled')" >
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Disabled</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span
              class="text-muted"
            >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
              {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRecords"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </b-col>
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
  BTable,
  BMedia,
  BDropdown,
  BDropdownItem,
  BPagination,
  BSpinner,
  BFormCheckbox,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import axios from '@axios'
import { avatarText } from '@core/utils/filter'
import router from '@/router'
import store from '@/store'
// import { ref } from '@vue/composition-api'
// import UsersListFilters from './UsersListFilters.vue'
import useList from './useList'
import storeModule from '../storeModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BTable,
    BMedia,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
    BSpinner,
    BFormCheckbox,
  },
  data() {
    return {
    }
  },
  methods: {
    async fetchDownloadData() {
      const response = await this.$http.get('category/all/record')
      return response.data
    },
    updateStatus(status, id) {
      const data = new FormData()

      data.append('id', id)
      data.append('status', status === true ? 'active' : 'inactive')
      this.$http.post('admin/products/vendor-product-status', data)
        .then(response => {
          this.toastSuccess(response.data.message)
        })
        .catch(() => {
          this.toastDanger('Something is going wrong please try again')
        })
    },
    changeListStatus(id, status) {
      const data = new FormData()
      data.append('id', id)
      data.append('list_status', status)
      axios.post('vendor_product/change_list_status', data)
        .then(response => {
          console.log(response)
          this.refetchData()
        })
        .catch(() => {
          this.toastDanger('Something is going wrong please try again')
        })
    },
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'vendor_products'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, storeModule)

    // UnRegister on leave
    // onUnmounted(() => {
    //   if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    // })
    const {
      fetchRecords,
      tableColumns,
      perPage,
      currentPage,
      totalRecords,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,
      // UI
      resolveUserStatusVariant,
      resolveUserStatusText,
      type,
    } = useList()
    type.value = 'customer'
    const edit = id => {
      const record = store.getters['adminCutomFields/getRecordById'](id)
      store.commit('adminCutomFields/updateRecord', record)
      router.push({ name: 'admin-add-custom-field' })
    }
    const add = () => {
      store.commit('adminCutomFields/updateRecord', {})
      router.push({ name: 'admin-add-custom-field' })
    }
    const destory = id => {
      store.dispatch('adminCutomFields/destoryRecord', id).then(() => {
        // console.log(response.data)
      })
    }

    return {
      // Sidebar

      fetchRecords,
      tableColumns,
      perPage,
      currentPage,
      totalRecords,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolveUserStatusVariant,
      resolveUserStatusText,
      edit,
      add,
      destory,
      type,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
.cursor {
  cursor: pointer;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
