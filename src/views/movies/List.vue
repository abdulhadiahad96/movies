<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  movies: {
    type: Object,
    required: true
  },
  grid: {
    type: String,
    default: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
  }
})
</script>

<template>
  <div class="movie-list">
    <div :class="'grid gap-8 flex items-center justify-start' + props.grid">
      <div v-for="movie in props.movies" :key="movie.id">
        <div class="movie-item overflow-hidden">
          <div class="relative">
            <div class="absolute top-0 right-0">
              <div class="flex items-center backdrop-opacity-10 backdrop-invert bg-black/60 py-1 px-3">
                <div class="text-gray-200 font-semibold text-lg">{{ movie.ratting.toFixed(1) }}</div>
              </div>
            </div>
            <div>
              <router-link :to="{name: 'moviesDetail', params: {slug: movie.slug}}">
                <img alt="Placeholder" class="block h-auto w-full" :src="movie.image">
              </router-link>
            </div>
          </div>
          <div class="flex flex-col leading-tight mt-2">
            <h1 class="text-lg truncate">
              <router-link 
                :to="{name: 'moviesDetail', params: {slug: movie.slug}}"
                :class="'no-underline hover:underline'">
                {{ movie.title }}
              </router-link>
            </h1>
            <p class="text-gray-400">
              {{ movie.year }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>