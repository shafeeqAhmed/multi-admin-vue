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
              <!-- <b-button
                variant="primary"
                @click="add"
              >
                <span class="text-nowrap">Add Product</span>
              </b-button> -->
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

        <!-- Column: url -->
        <template #cell(url)="data">
          <b-media vertical-align="center">
            <template
              v-if="data.item.images[0]"
              #aside
            >
              <b-avatar
                size="60"
                :src="data.item.images[0].url"
                :href="data.item.images[0].url"
                :square="true"
                target="_blank"
                alt="assets/images/placeHolder/categoryIcon.png"
                :text="avatarText(data.item.name)"
              />
            </template>
            <template
              v-else
              #aside
            >
              <b-avatar
                size="60"
                :square="true"
                alt="assets/images/placeHolder/categoryIcon.png"
                :text="avatarText(data.item.name)"
              />
            </template>
          </b-media>
        </template>
        <!-- Column: Title -->
        <template #cell(title)="data">
          <b-link
            :href="`https://customer-staging.multijunction.online/product/${data.item.slug}`"
            target="_blank"
          >
            <small class="text-muted">{{ data.item.title }} </small>
          </b-link>
        </template>
        <!-- Column: seller name -->
        <template #cell(seller_name)="data">
          <small class="text-muted">{{ data.item.seller_name }} </small>
        </template>
        <!-- Column: Category -->
        <template #cell(category_name)="data">
          <small class="text-muted">{{ data.item.category_name }} </small>
        </template>
        <!-- Column: Comission -->
        <template #cell(commission_rate)="data">
          <small class="text-muted">{{ data.item.commission_rate }} % </small>
        </template>
        <!-- Column: Created At -->
        <template #cell(created_at)="data">
          <small class="text-muted">{{ data.item.created_at }} </small>
        </template>
        <!-- Column: variants -->
        <template #cell(variants)="data">
          <small class="text-muted">{{ data.item.variants.length }} </small>
        </template>
        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
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
            <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'pending')">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">In Progress</span>
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'approved')">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Approved</span>
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'rejected')">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Rejected</span>
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="changeListStatus(data.item.id,'disabled')">
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
  // BButton,
  BTable,
  BMedia,
  BAvatar,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BSpinner,
  BLink,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'
import store from '@/store'
// import { ref } from '@vue/composition-api'
// import UsersListFilters from './UsersListFilters.vue'
import useSellerProductList from './useSellerProductList'
import storeModule from '../../productStoreModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    // BButton,
    BTable,
    BMedia,
    BBadge,
    BAvatar,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
    BSpinner,
    BLink,
  },
  data() {
    return {
    }
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'products'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, storeModule)
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
    } = useSellerProductList()
    type.value = 'customer'
    const edit = id => {
      const record = store.getters['adminCutomFields/getRecordById'](id)
      store.commit('adminCutomFields/updateRecord', record)
      router.push({ name: 'admin-add-custom-field' })
    }
    const add = () => {
      store.commit('adminCutomFields/updateRecord', {})
      router.push({ name: 'admin-add-product' })
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
  methods: {
    changeListStatus(id, status) {
      const data = new FormData()
      data.append('id', id)
      data.append('status', status)
      console.log(id)
      axios.post('seller_product/change_status', data)
        .then(response => {
          console.log(response)
          this.refetchData()
        })
        .catch(() => {
          this.toastDanger('Something is going wrong please try again')
        })
    },
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
