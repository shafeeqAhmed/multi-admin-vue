import { ref, watch, computed } from '@vue/composition-api'
// import router from '@/router'

// import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useSellerProductsList() {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'id', sortable: true, label: 'ID' },
    { key: 'url', label: 'Picture' },
    { key: 'title', sortable: true, label: 'Title' },
    { key: 'seller_name', sortable: true, label: 'Seller' },
    { key: 'category_name', sortable: true, label: 'Category' },
    { key: 'commission_rate', sortable: true, label: 'Comission' },
    { key: 'created_at', sortable: true, label: 'Created Time' },
    { key: 'variants', sortable: true, label: 'Total Variants' },
    { key: 'status', sortable: true, label: 'Status' },
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
      .dispatch('products/fetchSellerProductRecords', {
        type: type.value,
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value === true ? 'desc' : 'asc',
      })
      .then(response => {
        const { admin_products } = response.data.data
        callback(admin_products.data)
        totalRecords.value = admin_products.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching products list',
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
    if (status === 'pending') return 'warning'
    if (status === 'approved') return 'success'
    if (status === 'rejected') return 'danger'
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
