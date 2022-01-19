import axios from '@axios'

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    updateWebsiteSettings(ctx, payload) {
      return new Promise((resolve, reject) => {
        const { module, data } = payload
        axios
          .post(`/admin/website/${module}`, data)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
