<script setup>
import Layout from '../../layouts/Layout.vue'
import Filter from './Filter.vue'
import List from './List.vue';

import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const movies = computed(() => store.state.movies.data)
onBeforeMount(() => {
  store.dispatch('movies/getData')
})
</script>

<template>
  <Layout>
    <div class="app-movies">
      <div class="discover dark:bg-slate-900 mb-40">
        <div class="relative">
          <div class="discover-bg absolute top-0 left-0 right-0 h-96"></div>
        </div>
        <div class="relative top-24">
          <div class="container mx-auto px-4">
            <div class="discover-header mb-8 flex place-items-end justify-between">
              <div class="discover-title">
                <h1 class="text-4xl font-semibold">Movies</h1>
              </div>
            </div>
            <div class="discover-body flex flex-wrap">
              <div class="w-full lg:w-1/5 mb-5 lg:pr-7">
                <Filter></Filter>
              </div>
              <div class="w-full lg:w-4/5 mb-5">
                <List :grid="'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'" :movies="movies"></List>
                <div class="flex items-center justify-center py-6">
                  <button type="button" class="py-2 px-6 bg-red-600 text-white rounded-3xl">Read More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.discover .discover-title::before {
  display: block;
  content: '';
  width: 112px;
  height: 6px;
  margin-bottom: 15px;
  background-color: #E74C3C;
}
.discover-bg {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>