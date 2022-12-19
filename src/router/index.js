import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Movies from '../views/movies/Movies.vue'
import MoviesDetail from '../views/movies/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/categories/:slug?',
    name: 'categories',
    component: Home,
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
  },
  {
    path: '/movies/:slug',
    name: 'moviesDetail',
    component: MoviesDetail,
    params: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router