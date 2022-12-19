import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    data: [],
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
    async getData (context) {
      return axios
        .get('/api/movies')
        .then((resp) => {
          context.commit("setData", resp.data.data)
        })
    },
    async fetchBySlug (context, slug) {
      return await axios
        .get(`/api/movies/${slug}`)
    },
    async getRecomendationMovies () {
      return await axios
        .get(`/api/movies-recomendation`)
    }
  },
}