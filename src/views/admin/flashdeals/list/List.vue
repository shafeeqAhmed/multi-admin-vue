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
                @click="add"
              >
                <span class="text-nowrap">Add Flash Deals</span>
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
        <!-- Column: title -->
        <template #cell(title)="data">
          <small class="text-bold">{{ data.item.title }} </small>
        </template>
        <!-- Column: banner -->
        <template #cell(banner)="data">
          <b-media vertical-align="center">
            <template
              v-if="data.item.banner"
              #aside
            >
              <b-avatar
                size="60"
                :src="data.item.banner"
                :href="data.item.banner"
                :square="true"
                target="_blank"
                alt="assets/images/placeHolder/categoryIcon.png"
                :text="avatarText(data.item.banner)"
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
                :text="avatarText(data.item.banner)"
              />
            </template>
          </b-media>
        </template>
        <!-- Column: start date -->
        <template #cell(start_date)="data">
          <small class="text-muted">{{ data.item.start_date }} </small>
        </template>
        <!-- Column: end date -->
        <template #cell(end_date)="data">
          <small class="text-muted">{{ data.item.end_date }} </small>
        </template>
        <!-- Column: Status -->
        <template #cell(status)="data">
          <!--  <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ resolveUserStatusText(data.item.status) }}
          </b-badge> -->
          <b-form-checkbox
            :checked="data.item.status == 1"
            switch
            @change="updatestatus($event,data.item.id)"
          />
        </template>
        <!-- Column: Banner -->
        <template #cell(featured)="data">
          <b-form-checkbox
            :checked="data.item.featured == 1"
            switch
            @change="updatefeatured($event,data.item.id)"
          />
        </template>
        <template #cell(slug)="data">
          <b-link
            :href="`https://multijunction.co.za/flash-deal/${data.item.slug}`"
            target="_blank"
          >
            <small>https://multijunction.co.za/flash-deal/{{ data.item.slug }} </small>
          </b-link>
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
            <b-dropdown-item :to="{ name: 'admin-flashdeals-edit', params: { id: data.item.id } }">

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
  BDropdown,
  // BDropdownItem,
  BPagination,
  BSpinner,
  BLink,
  BFormCheckbox,
  BDropdownItem,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { avatarText } from '@core/utils/filter'
import router from '@/router'
import store from '@/store'
// import { ref } from '@vue/composition-api'
// import UsersListFilters from './UsersListFilters.vue'
import useList from './flashdealsList'
import storeModule from '../flashdealsStoreModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BDropdown,
    // BDropdownItem,
    BPagination,
    vSelect,
    BSpinner,
    BLink,
    BFormCheckbox,
    BDropdownItem,
  },
  data() {
    return {
      renderComponent: true,
    }
  },
  methods: {
    updatestatus(status, id) {
      const data = new FormData()
      data.append('id', id)
      data.append('status', status === true ? 1 : 0)
      this.$http.post('flashdeal/update_status', data)
        .then(response => {
          this.toastSuccess(response.data.message)
        })
        .catch(() => {
          this.toastDanger('Something is going wrong please try again')
        })
    },
    updatefeatured(featured, id) {
      const data = new FormData()
      data.append('id', id)
      data.append('featured', featured === true ? 1 : 0)
      this.$http.post('flashdeal/update_featured', data)
        .then(response => {
          this.toastSuccess(response.data.message)
        })
        .catch(() => {
          this.toastDanger('Something is going wrong please try again')
        })
    },
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'flashdeals'

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
    } = useList()
    type.value = 'customer'
    const edit = id => {
      const record = store.getters['flashdeals/getRecordById'](id)
      store.commit('flashdeals/updateRecord', record)
      router.push({ name: 'admin-flashdeals-add' })
    }
    const add = () => {
      router.push({ name: 'admin-flashdeals-add' })
    }
    const toast = useToast()
    const destory = id => {
      store.dispatch('flashdeals/destoryRecord', id).then(response => {
        console.log(response.data)
        toast({
          component: ToastificationContent,
          props: {
            title: response.data.message,
            icon: 'CheckIcon',
            variant: 'success',
          },
        })
        this.renderComponent = false
        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true
        })
      })
        .catch(() => {
          toast({
            component: ToastificationContent,
            props: {
              title: 'Something went wrong',
              icon: 'CheckIcon',
              variant: 'success',
            },
          })
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
