import { ref, watch, computed } from '@vue/composition-api'
// import router from '@/router'

// import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useCategoriesList() {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'title', sortable: true, label: 'Title' },
    { key: 'actions' },
  ]

  const type = ref('seller')
  const perPage = ref(10)
  const totalRecords = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [5, 10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
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
      .dispatch('blogs/fetchRecords', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value === true ? 'desc' : 'asc',
      })
      .then(response => {
        const { blogs } = response.data.data
        callback(blogs.data)
        totalRecords.value = blogs.total
      })
      .catch(error => {
        console.log(error)
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching blogs list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }
  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })
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

    // Extra Filters
    breadCrum,
    type,
  }
}
