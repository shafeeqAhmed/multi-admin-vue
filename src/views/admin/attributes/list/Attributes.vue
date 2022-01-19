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
              <b-button
                variant="primary"
                :to="{ name: 'admin-add-attribute' }"
              >
                <span class="text-nowrap">Add Attribute</span>
              </b-button>
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
            {{ data.item.fullName }}
            <small class="text-muted"> A-{{ data.item.id }}</small>
          </b-media>
        </template>

        <!-- Column: Name -->
        <!-- <template #cell(name)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="data.item.icon"
                :href="data.item.icon"
                :text="avatarText(data.item.name)"
                :variant="`light-${resolveUserRoleVariant(data.item.role)}`"
                :square="true"
                target="_blank"
              />
            </template>
            <b-link
              :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.name }}
            </b-link>
            <small class="text-muted">@{{ data.item.name }}</small>
          </b-media>
        </template> -->

        <!-- Column: Commision -->
        <template #cell(commission_rate)="data">
          <small class="text-muted">{{ data.item.commission_rate }} %</small>
        </template>
        <!-- Column: Banner -->
        <template #cell(banner)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="60"
                :src="data.item.banner"
                :href="data.item.banner"
                :square="true"
                target="_blank"
                alt="assets/images/placeHolder/categoryIcon.png"
                :text="avatarText(data.item.name)"
              />
            </template>
            <b-link
              :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            />
          </b-media>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ resolveUserStatusText(data.item.status) }}
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
            <b-dropdown-item :to="{ name: 'admin-assign-attribute-to-category', params: { id: data.item.id } }">
              <feather-icon icon="PlusIcon" />
              <span class="align-middle ml-50">Assign Attribute</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'admin-edit-attribute', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item @click="destory(data.item.id)">
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
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
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BSpinner,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
// import router from '@/router'
import { ref } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import store from '@/store'
// import UsersListFilters from './UsersListFilters.vue'
import useList from './useList'
import StoreModule from '../StoreModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BBadge,
    BAvatar,
    BLink,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
    BSpinner,
  },
  data() {
    return {
      jsonFields: {
        Name: 'name',
        Commission: 'commission_rate',
        Parent: {
          field: 'parent.name',
          // callback: value => value.name,
          // return `Landline Phone - ${value.landline}`;
        },
      },
    }
  },
  methods: {
    async fetchDownloadData() {
      const response = await this.$http.get('category/all/record')
      return response.data
    },

    startDownload() {
      this.loader = true
    },
    finishDownload() {
      this.loader = false
    },
    downloadFile(filename, text) {
      const element = document.createElement('a')
      element.setAttribute(
        'href',
        `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
      )
      element.setAttribute('download', filename)

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()
      window.open(element)

      // document.body.removeChild(element)
    },
  },
  setup() {
    const loader = ref(false)
    // const fileSelected = ref('')
    // const fileName = ref('categories.xls')
    // const fileType = ref('xls')
    const USER_APP_STORE_MODULE_NAME = 'adminAttributes'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, StoreModule)

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
      updateParentCategory,

      // UI
      resolveUserStatusVariant,
      resolveUserStatusText,
    } = useList()
    // function updateParentCategory(id, name) {
    //   const payload = {
    //     id,
    //     name,
    //   }
    //   store.commit('common/UPDATE_PARENT_CATEGORY', payload)
    //   router.push({ name: 'admin-add-sub-category' })
    // }
    // const edit = id => {
    //   const record = store.getters['adminCutomFields/getRecordById'](id)
    //   store.commit('adminCutomFields/updateRecord', record)
    //   router.push({ name: 'admin-edit-attribute', params: { id } })
    // }
    // const add = () => {
    //   router.push({ name: 'admin-add-attribute' })
    // }
    const destory = id => {
      store.dispatch('adminCutomFields/destoryRecord', id).then(() => {
      })
    }

    return {
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

      // Extra Filter
      // edit,
      // add,
      destory,
      updateParentCategory,
      loader,
      // fileSelected,
      // fileName,
      // fileType,
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
