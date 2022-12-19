<script setup>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import List from '../movies/List.vue';

const store = useStore()
const movies = computed(() => store.state.movies.data)
onBeforeMount(() => {
  store.dispatch('movies/getData')
})
</script>

<template>
  <div class="discover dark:bg-slate-900 mb-40">
    <div class="relative">
      <div class="discover-bg absolute top-0 left-0 right-0 h-96"></div>
    </div>
    <div class="relative top-24">
      <div class="container mx-auto px-4">
        <div class="discover-header mb-8 flex place-items-end justify-between">
          <div class="discover-title">
            <h1 class="text-4xl font-semibold">Discover Movies</h1>
          </div>
          <div class="discover-sort">
            <button type="button" class="dark:bg-red-600 text-green-200 text-sm whitespace-nowrap font-semibold mx-3 py-2 px-6 rounded-2xl">Popularity</button>
            <button type="button" class="dark:bg-slate-900 text-green-200 text-sm whitespace-nowrap font-semibold ml-3 py-2 px-6 rounded-2xl">Release Date</button>
          </div>
        </div>
        <div class="discover-body flex flex-wrap">
          <div class="w-full">
            <List :movies="movies.slice(0, 10)"></List>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
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