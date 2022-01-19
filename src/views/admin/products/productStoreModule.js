import axios from '@axios'

export default {
  namespaced: true,
  state: {
    records: {},
    record: {},
    parentCategories: {},
    listOfDropDowns: [],
    breadCrum: [],
    fields: [],
    submitedFields: [],
    productItems: {},
    menu: {
      info: {
        submit: false,
        open: true,
      },
      dimention: {
        submit: false,
        open: false,
      },
      category: {
        submit: false,
        open: false,
      },
      video: {
        submit: false,
        open: false,
      },
      images: {
        submit: false,
        open: false,
      },
      variation: {
        submit: false,
        open: false,
      },
    },
  },
  getters: {
    records(state) {
      if (Object.keys(state.records).length > 0) {
        return state.records.categories.data
      }
      return state.records
    },
    getProductData(state) {
      if (Object.keys(state.productItems).length > 0) {
        return state.productItems.product
      }
      return state.records
    },
    getProductVarients(state) {
      if (Object.keys(state.productItems).length > 0) {
        return state.productItems.variantAttributes
      }
      return state.records
    },
    getRecordById: state => id => state.records.categories.data.find(record => record.id === id),
    record(state) {
      return state.record
    },
    parentCategories: state => state.parentCategories,
    breadCrum: state => state.breadCrum,
    listOfDropDowns: state => state.listOfDropDowns,

  },
  mutations: {
    updateRecords(state, payload) {
      state.records = payload
    },
    updateRecord(state, payload) {
      state.record = payload
    },
    updateparentCategories(state, payload) {
      state.parentCategories = payload
    },
    updateBreadCrum(state, payload) {
      state.breadCrum = payload.breadCrum
    },
    updateListOfDropDowns(state, payload) {
      // update bread crum
      state.breadCrum = payload.breadCrum
      // get list of dropdown form state which store after response
      const { listOfDropDowns } = state
      // find index of the selected dropdopw
      let dropdownIndex = listOfDropDowns.findIndex(list => list.key === payload.dropDownId)
      dropdownIndex += 1
      if (payload.childs.length > 0) {
        const arr = {
          key: payload.parent_id,
          value: payload.childs,
        }
        if (listOfDropDowns.length > 0) {
          if (payload.dropDownId === undefined) {
            listOfDropDowns.splice(0)
          } else {
            listOfDropDowns.splice(dropdownIndex)
          }
          const index = listOfDropDowns.findIndex(list => list.key === payload.parent_id)
          if (index === -1) {
            listOfDropDowns.push(arr)
          } else {
            listOfDropDowns.splice(index)
          }
        } else {
          listOfDropDowns.splice(0)
          listOfDropDowns.push(arr)
        }
      } else {
        listOfDropDowns.splice(dropdownIndex)
      }
    },
    updateFields(state, payload) {
      state.fields = payload
    },
    updateProductItems(state, payload) {
      state.productItems = payload
    },
    showNextField(state, index) {
      let tmpIndex = index
      tmpIndex += 1
      console.log(tmpIndex)
      if (tmpIndex < state.fields.length) {
        state.fields[tmpIndex].hidden = 1
      }
    },
    /* eslint no-param-reassign: "error" */
    updateSubmitedCustomFields(state, payload) {
      state.updateSubmitedCustomFields = payload
    },
    updateMenu(state, payload) {
      state.menu[payload.menu].submit = payload.submit
      state.menu[payload.menu].open = payload.open
    },
    resetMenu(state) {
      Object.entries(state.menu).forEach((m, index) => {
        if (index === 0) {
          m[1].open = true
        } else {
          m[1].open = false
        }
        m[1].submit = false
      })
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    fetchSellerProductRecords(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/admin/product-seller', { params: queryParams })
          .then(response => {
            // ctx.commit('updateRecords', response.data.data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchRecords(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/products', { params: queryParams })
          .then(response => {
            ctx.commit('updateRecords', response.data.data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchRecord(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/user/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addRecord(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/categories', userData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateRecord(ctx, payload) {
      return new Promise((resolve, reject) => {
        const { id, data } = payload
        axios
          // .post(`catt/update/${id}`, data)
          .post(`/categories/${id}`, data)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    destoryRecord(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`categories/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // useable end point
    getParentCategory(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get('/category/parent/record')
          .then(response => {
            ctx.commit('updateparentCategories', response.data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getCategoryChild(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`category-child/${payload.id}`)
          .then(response => {
            const { data } = response.data
            data.dropDownId = payload.dropDownId
            ctx.commit('updateListOfDropDowns', data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getCategoryBreadCrum(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`category-child/${payload.id}`)
          .then(response => {
            const { data } = response.data
            ctx.commit('updateBreadCrum', data)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchCategoryCustomFields(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`fields/${id}/category`)
          .then(response => {
            // const fff = response.data.data.fields.map(field => field.fields = JSON.parse(field.fields))
            const fields = response.data.data.fields.map(field => {
              const tempField = field
              tempField.fields = JSON.parse(field.fields)
              return tempField
            })
            // show first custom field
            if (fields.length > 0) {
              fields[0].hidden = 1
            }
            ctx.commit('updateFields', fields)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    addProduct(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/products', payload)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateMenu(ctx, payload) {
      ctx.commit('updateMenu', payload)
    },
  },
}
