<script setup>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const categories = computed(() => store.state.categories.data)
onBeforeMount(() => {
  store.dispatch('categories/getData')
})

</script>

<template>
  <div class="dropdown inline-block relative">
    <button class="font-semibold py-2 px-4 rounded inline-flex items-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z" fill="white"/>
        <path d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z" fill="white"/>
        <path d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z" fill="white"/>
        <path d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z" fill="white"/>
      </svg>
      <span class="mx-2">CATEGORY</span>
    </button>
    <ul class="dropdown-menu text-slate-800  z-50 absolute hidden pt-1 shadow-lg">
      <li v-for="(category, i) in categories" :key="category.id">
        <router-link
          :to="{name: 'movies', query: {categories: category.slug}}"
          :class="'bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-40'"
          >
          {{ category.name.toUpperCase() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>