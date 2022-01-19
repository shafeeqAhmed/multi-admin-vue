<template>
  <div>
    <b-row>
      <b-col md="12">
        <app-collapse :is-submited="true">
          <app-collapse-item
            title="Select Product Category"
            :is-visible="isOpenProductCollapse('category')"
          >
            <b-card class="categoryLoader">
              <hr>
              <div class="m-2">
                <!-- Category Card-->
                <b-row>
                  <b-col cols="12">
                    <b-breadcrumb>
                      <b-breadcrumb-item
                        v-for="(item, key) in breadCrum"
                        :key="key"
                        :active="item.active"
                        class="breadcrumbs"
                      >
                        {{ item.name }}
                      </b-breadcrumb-item>
                    </b-breadcrumb>
                    <b-spinner
                      v-if="loader"
                      label="Loading..."
                      variant="primary"
                      class="loader"
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <!-- Per Page -->
                  <b-col
                    cols="12"
                    md="6"
                  />
                </b-row>
              </div>
              <!-- Category selector-->
              <b-row
                ref="selector"
                class="d-flex flex-nowrap overflow-auto"
              >
                <b-col
                  lg="3"
                  md="6"
                  sm="12"
                >
                  <b-card class="border-light card-block scroll pt-1">
                    <b-form-input
                      placeholder="Search"
                      class="search"
                    />
                    <nav class="sidebar py-1 mb-4">
                      <ul
                        class="nav flex-column"
                        :select-size="6"
                      >
                        <li
                          v-for="(item, inedx) in parentCategories"
                          :key="inedx"
                          class="nav-item lists"
                          :class="{ selectedlist: item.isSelected }"
                          @click="
                            categoryChange({
                              id: item.id,
                              name: item.name,
                              type: 'parent',
                              ul: parentCategories,
                            })
                          "
                        >
                          {{ item.name }}
                          <feather-icon
                            v-if="item.child.length > 0"
                            icon="ChevronRightIcon"
                            class="float-right"
                          />
                        </li>
                      </ul>
                    </nav>
                  </b-card>
                </b-col>
                <b-col
                  v-for="list in listOfDropDowns"
                  :key="list.key"
                  lg="3"
                  md="6"
                  sm="12"
                >
                  <b-card class="border-light card-block">
                    <nav class="sidebar py-2 mb-4">
                      <ul
                        class="nav flex-column"
                        :select-size="6"
                      >
                        <li
                          v-for="(subList, index) in list.value"
                          :key="index"
                          ref="`chil-li-${subList.id}`"
                          :class="{ selectedlist: subList.isSelected }"
                          class="active lists"
                          @click="
                            categoryChange({
                              id: subList.id,
                              name: subList.name,
                              dropDownId: list.key,
                              type: 'child',
                              ul: list.value,
                            })
                          "
                        >
                          {{ subList.name }}
                          <feather-icon
                            v-if="subList.child.length > 0"
                            icon="ChevronRightIcon"
                            class="float-right"
                          />
                        </li>
                      </ul>
                    </nav>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </app-collapse-item>
        </app-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BBreadcrumb,
  BBreadcrumbItem,
  BSpinner,
} from 'bootstrap-vue'

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { ref } from '@vue/composition-api'
import store from '@/store'
// import productStoreModule from '../productStoreModule'

export default {
  components: {
    BFormInput,
    BCard,
    BRow,
    BCol,
    BSpinner,
    BBreadcrumb,
    BBreadcrumbItem,
    AppCollapse,
    AppCollapseItem,
  },
  // props: {
  //   loader: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  data() {
    return {}
  },
  computed: {
    parentCategories() {
      return store.getters['adminProduct/parentCategories']
    },
    breadCrum() {
      const breadCrum = store.getters['adminProduct/breadCrum']
      return breadCrum
    },
    listOfDropDowns() {
      return store.getters['adminProduct/listOfDropDowns']
    },
  },
  methods: {
    categoryChange(event) {
      this.updateDropDownList(event.ul, event.id)
      this.loader = true
      const payload = {
        id: event.id,
        dropDownId: event.dropDownId,
      }
      this.$emit('updateAttributes', [])
      this.$emit('updateCategoryId', event.id)
      // this.attributes = []
      // this.userData.category_id = event.id
      store.commit('adminProduct/updateFields', [])
      store
        .dispatch('adminProduct/getCategoryChild', payload)
        .then(response => {
          this.$refs.selector.scrollBy(1000, 0)
          const { childs } = response.data.data
          if (childs && childs.length === 0) {
            this.$emit('updateCategoryId', event.id)
            // this.userData.category_id = event.id
            this.loading = true
            window.scrollTo(0, 10000)
            store
              .dispatch('adminProduct/fetchCategoryCustomFields', event.id)
              .then(response2 => {
                this.$emit('updateCategoryId', event.id)
                this.$emit('updateAttributes', response2.data.data.attributes)
                // this.userData.category_id = event.id
                // this.attributes = response2.data.data.attributes
                if (response2.data.data.fields.length === 0) {
                  this.toastWarning(
                    'Sorry there is no custom field assign to this category',
                  )
                }
              })
          } else {
            store.commit('adminProduct/updateFields', [])
            this.loading = false
          }
          this.loader = false
        })
    },
    updateDropDownList(ul, id) {
      ul.forEach(li => {
        // un selected li item
        // eslint-disable-next-line no-param-reassign
        li.isSelected = false
        if (li.id === id) {
          // select list item
          // eslint-disable-next-line no-param-reassign
          li.isSelected = true
        }
      })
    },
  },
  setup() {
    const loader = ref(false)
    const getProductData = store.getters['adminProduct/getProductData']
    const payload = {
      id: getProductData.category_id,
    }
    // const USER_APP_STORE_MODULE_NAME = 'adminProduct'
    // if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, productStoreModule)
    // const { productId } = toRefs(props)
    store
      .dispatch('adminProduct/getCategoryBreadCrum', payload)
    store.dispatch('adminProduct/getParentCategory')
    return {
      loader,
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>

<style scoped>
.sidebar li {
  padding: 6px;
}

.sidebar li:hover {
  background: #0071ce;
  color: white;
}

.scroll {
  max-height: 350px;
  overflow-y: auto;
}

.search {
  position: sticky; /* The magic */
  z-index: 1; /* Ensure it stays on top of other player divs */
  top: 0px; /* Where it should stick to */
}

.card-block {
  height: 300px;
}

.cursor {
  cursor: pointer;
}

.selectedlist {
  background-color: #0071ce;
  color: white;
}
.breadcrumbs {
  font-weight: bolder;
  font-size: 17px;
}
.lists {
  cursor: pointer;
}
.categoryLoader {
  position: relative;
}
.loader {
  position: absolute;
  top: 170px;
  left: 454px;
  z-index: 100;
}
@media screen and (max-width: 540px) {
  .card-block {
    width: 180px;
  }
}
</style>
