<script setup>

import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const categories = computed(() => store.state.categories.data)
onBeforeMount(() => {
  store.dispatch('categories/getData')
})
</script>
<template>
  <div class="filter dark:bg-slate-900 rounded-lg">
    <div class="filter-sort">
      <div class="filter-sort-header border-b border-slate-800 p-4">
        <h1 class="filter-sort-title font-semibold text-base">Sort Result By</h1>
      </div>
      <div class="filter-sort-body border-slate-800 p-4">
        <div class="filter-sort-select">
          <select class="w-full dark:bg-slate-800 px-4 py-3 rounded">
            <option value="Popularity Ascending" selected>Popularity Ascending</option>
            <option value="Popularity Descending">Popularity Descending</option>
            <option value="Release Date Ascending">Release Date Ascending</option>
            <option value="Release Date Descending">Release Date Descending</option>
            <option value="Rating Ascending">Rating Ascending</option>
            <option value="Rating Descending">Rating Descending</option>
          </select>
        </div>
      </div>
    </div>
    <div class="filter-genre">
      <div class="filter-genre-header border-t border-b border-slate-800 p-4">
        <h1 class="filter-genre-title font-semibold text-base">Genres</h1>
      </div>
      <div class="filter-genre-body border-slate-800 p-4">
        <div class="filter-genre-list">
          <ul>
            <li v-for="category in categories" :key="category.id">
              <div class="flex justify-between">
                <label :for="'category-'+category.id">{{ category.name }}</label>
                <div class="text-white"><input type="checkbox" :id="'category-'+category.id" :value="category.id" :checked="category.id == 1" class="accent-orange-600" /></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>