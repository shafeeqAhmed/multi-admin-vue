<template>

  <div>
    <!-- <category-list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :role-options="roleOptions"
      :plan-options="planOptions"
      :selected-form-data="{}"
      @refetch-data="refetchData"
    /> -->
    <!-- Filters -->
    <!-- <users-list-filters
      :role-filter.sync="roleFilter"
      :plan-filter.sync="planFilter"
      :status-filter.sync="statusFilter"
      :role-options="roleOptions"
      :plan-options="planOptions"
      :status-options="statusOptions"
    /> -->

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
                @click="addCategory"
              >
                <span class="text-nowrap">Add Sub Category</span>
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
        :fields="childTableColumns"
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
            <small class="text-muted"> C-{{ data.item.id }}</small>
          </b-media>
        </template>

        <!-- Column: Name -->
        <template #cell(name)="data">
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
        </template>
        <!-- Column: parent name -->
        <template #cell(parent)="data">
          <b-media vertical-align="center">
            {{ data.item.parent.name }}
          </b-media>
        </template>

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
            <b-dropdown-item :to="{ name: 'admin-allocated-attributes-to-category', params: { id: data.item.id } }">
              <feather-icon icon="PlusIcon" />
              <span class="align-middle ml-50">Allocated Attribute</span>
            </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'admin-allocated-custom-field-to-category', params: { id: data.item.id } }">
              <feather-icon icon="PlusIcon" />
              <span class="align-middle ml-50">Allocated Fields</span>
            </b-dropdown-item>
            <b-dropdown-item @click="updateParentCategory(data.item)">
              <feather-icon icon="PlusIcon" />
              <span class="align-middle ml-50">Add Sub Category</span>
            </b-dropdown-item>

            <b-dropdown-item @click="edit(data.item.id)">
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
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
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
  BCard, BRow, BCol, BFormInput, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import store from '@/store'
import router from '@/router'
// import UsersListFilters from './UsersListFilters.vue'
import useCategoriesList from './useCategoriesList'
import categoryStoreModule from '../categoryStoreModule'

export default {
  components: {
    // UsersListFilters,
    // CategoryListAddNew,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BTable,
    BMedia,
    BBadge,
    BAvatar,
    BLink,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'admin-categories'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, categoryStoreModule)

    // UnRegister on leave
    // onUnmounted(() => {
    //   if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    // })
    const isAddNewUserSidebarActive = ref(false)
    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const planOptions = [
      { label: 'Basic', value: 'basic' },
      { label: 'Company', value: 'company' },
      { label: 'Enterprise', value: 'enterprise' },
      { label: 'Team', value: 'team' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]
    const {
      fetchRecords,
      childTableColumns,
      categoryType,
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
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
      resolveUserStatusText,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = useCategoriesList()
    categoryType.value = 'sub'

    const edit = id => {
      const record = store.getters['admin-categories/getRecordById'](id)
      store.commit('admin-categories/updateRecord', record)
      store.dispatch('admin-categories/fetchRecord', record.parent_id)
        .then(response => {
          store.commit('common/UPDATE_PARENT_CATEGORY', response.data.data.category)
          router.push({ name: 'admin-add-sub-category' })
        })
    }
    const destory = id => {
      store.dispatch('admin-categories/destoryRecord', id)
        .then(() => {
          // console.log(response.data)
        })
    }

    const addCategory = () => {
      isAddNewUserSidebarActive.value = true
      store.commit('admin-categories/updateRecord', {})
    }
    return {

      // Sidebar
      isAddNewUserSidebarActive,

      fetchRecords,
      childTableColumns,
      categoryType,
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
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
      resolveUserStatusText,
      roleOptions,
      planOptions,
      statusOptions,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
      edit,
      addCategory,
      destory,
      updateParentCategory,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
