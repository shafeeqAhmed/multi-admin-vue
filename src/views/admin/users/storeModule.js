import axios from '@axios'

export default {
  namespaced: true,
  state: {
    records: {},
    record: {},
  },
  getters: {
    records(state) {
      return state.records.fields.data
    },
    getRecordById: state => id => state.records.fields.data.find(record => record.id === id),
    record(state) {
      return state.record
    },
  },
  mutations: {
    updateRecords(state, payload) {
      state.records = payload
    },
    updateRecord(state, payload) {
      state.record = payload
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    fetchRecords(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/admin/users', { params: queryParams })
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
  },
}
