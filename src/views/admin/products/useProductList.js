import { ref, watch, computed } from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'
import router from '@/router'

// import { title } from '@core/utils/filter'

// Notification

export default function useCategoriesList() {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'id', sortable: true, label: 'id' },
    { key: 'name', sortable: true, label: 'name' },
    { key: 'commission_rate', sortable: true, label: 'comission' },
    { key: 'banner', label: 'Image' },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const childTableColumns = [
    { key: 'id', sortable: true, label: 'id' },
    { key: 'name', sortable: true, label: 'name' },
    { key: 'parent', sortable: true, label: 'parent' },
    { key: 'commission_rate', sortable: true, label: 'comission' },
    { key: 'banner', label: 'Image' },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const categoryType = ref('all')
  const perPage = ref(10)
  const totalUsers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [5, 10, 25, 50, 100]
  const searchQuery = ref('')
  const searchCategory = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const subChilds = ref([])
  const breadCrum = ref('')
  const dataMeta = computed(() => {
    const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value,
    }
  })

  const refetchData = () => {
    refUserListTable.value.refresh()
  }
  const fetchRecords = (ctx, callback) => {
    store
      .dispatch('admin-categories/fetchRecords', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value === true ? 'desc' : 'asc',
        role: roleFilter.value,
        plan: planFilter.value,
        type: categoryType.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { categories } = response.data.data
        callback(categories.data)
        totalUsers.value = categories.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching users list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }
  const categorychildRequest = () => {
    const { id } = store.state.common.parentCategory
    if (id) {
      store.dispatch('admin-categories/getCategoryParents', id)
        .then(response => {
          subChilds.value = response.data.data.childs
          breadCrum.value = response.data.data.breadCrum
        })
    }
  }
  const searchCategories = () => {
    store
      .dispatch('admin-categories/fetchRecords', {
        q: searchCategory.value,
      })
      .then(response => {
        subChilds.value = response.data.data.categories.data
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching users list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }
  watch([currentPage, categoryType, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
  })
  watch([searchCategory], () => {
    searchCategories()
  })
  const updateParentCategory = function (payload) {
    store.commit('common/UPDATE_PARENT_CATEGORY', payload)
    router.push({ name: 'admin-add-sub-category' })
  }
  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*
  const resolveUserRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolveUserRoleIcon = role => {
    if (role === 'subscriber') return 'UserIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'UserIcon'
  }

  const resolveUserStatusVariant = status => {
    if (status === 0) return 'danger'
    if (status === 1) return 'success'
    return 'success'
  }
  const resolveUserStatusText = status => {
    if (status === 0) return 'disabled'
    if (status === 1) return 'active'
    return 'active'
  }

  return {
    fetchRecords,
    tableColumns,
    childTableColumns,
    categoryType,
    perPage,
    currentPage,
    totalUsers,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refUserListTable,

    resolveUserRoleVariant,
    resolveUserRoleIcon,
    resolveUserStatusVariant,
    resolveUserStatusText,
    refetchData,
    updateParentCategory,
    categorychildRequest,

    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
    searchCategory,
    subChilds,
    breadCrum,
  }
}
