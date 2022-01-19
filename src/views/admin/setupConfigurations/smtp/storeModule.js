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
          .get('shipping/volumetric', { params: queryParams })
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
          .get(`/subscribers/fetchRecords/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

  },
}
