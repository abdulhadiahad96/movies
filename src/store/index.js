import { createStore } from 'vuex'
import categories from './modules/categories'
import movies from './modules/movies'
import slides from './modules/slides'

const store = createStore({
  modules: {
    categories,
    movies,
    slides,
  },
})

export default store