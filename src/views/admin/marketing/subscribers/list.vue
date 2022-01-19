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
        ref="refSubscribersListTable"
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
        <!-- Column: Commision -->
        <template #cell(email)="data">
          <small>{{ data.item.email }} </small>
        </template>
        <template #cell(created_at)="data">
          <small>{{ data.item.created_at }} </small>
        </template>
        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-link href="#"  @click="destory(data.item.id)">
            <feather-icon icon="DeleteIcon" />
          </b-link>
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
  BLink,
  // BDropdownItem,
  BPagination,
  BSpinner,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { avatarText } from '@core/utils/filter'
import store from '@/store'
// import { ref } from '@vue/composition-api'
// import UsersListFilters from './UsersListFilters.vue'
import marketingList from './marketingList'
import storeModule from './storeModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BTable,
    // BDropdownItem,
    BPagination,
    vSelect,
    BSpinner,
    BLink,
  },

  setup() {
    const USER_APP_STORE_MODULE_NAME = 'subscribers'

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
      refSubscribersListTable,
      refetchData,
      // UI
      resolveUserStatusVariant,
      resolveUserStatusText,
      type,
    } = marketingList()
    const destory = id => {
      store.dispatch('subscribers/destoryRecord', id).then(() => {
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
      refSubscribersListTable,
      refetchData,
      // Filter
      avatarText,
      // UI
      destory,
      resolveUserStatusVariant,
      resolveUserStatusText,
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
