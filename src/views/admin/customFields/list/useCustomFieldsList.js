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
    { key: 'title', sortable: true, label: 'Title' },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]

  const categoryType = ref('all')
  const perPage = ref(10)
  const totalRecords = ref(0)
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
      of: totalRecords.value,
    }
  })

  const refetchData = () => {
    refUserListTable.value.refresh()
  }
  const fetchRecords = (ctx, callback) => {
    store
      .dispatch('adminCutomFields/fetchRecords', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value === true ? 'desc' : 'asc',
      })
      .then(response => {
        const { fields } = response.data.data
        callback(fields.data)
        totalRecords.value = fields.total
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
