import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    data: []
  }),

  getters: {
    data: state => state.data
  },

  mutations: {
    setData (state, data) {
      state.data = data
    }
  },

  actions: {
    async getData ({ commit }) {
      await axios
        .get('/api/slides')
        .then((resp) => {
          commit("setData", resp.data.data);
        })
    }
  },
}