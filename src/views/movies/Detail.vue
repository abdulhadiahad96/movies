<script setup>
import Layout from '../../layouts/Layout.vue'

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import List from './List.vue';

const route = useRoute()
const store = useStore()
const recomendations = ref()
const movie = ref()

store.dispatch('movies/fetchBySlug', route.params.slug).then(resp => movie.value = resp.data.data)
store.dispatch('movies/getRecomendationMovies').then(resp => recomendations.value = resp.data.data)
</script>

<template>
  <Layout>
    <div v-if="movie" class="app-detail w-full">
      <div class="wallpaper z-0 absolute top-0 left-0 right-0 h-56">
        <img :src="movie.wallpaper" class="w-full opacity-30" alt="Wallpaper">
      </div>
      <div class="z-10 relative left-0 right-0">
        <div class="container mx-auto px-4 lg:mt-56">
          <div class="flex flex-col lg:flex-row">
            <img class=" w-full h-full lg:h-auto  object-cover lg:w-48" :src="movie.image" alt="" />
            <div class="flex flex-col justify-start py-6 lg:px-6 ">
              <h5 class="text-gray-200 text-lg font-medium mb-2">{{ movie.year }}</h5>
              <h5 class="text-gray-200 text-4xl font-semibold mb-2">{{ movie.title }}</h5>
              <div class="flex justify-start">
                <div class="text-gray-200" v-for="(category, i) in movie.categories" :key="category.id">
                  <router-link
                    :to="{name: 'categories', params: { slug: category.slug }}"
                    class="hover:text-orange-600"
                  >
                    {{ (i > 0 ? ', ' : '') + category.name }} 
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-0 relative top-0 lg:-top-36 left-0 right-0 h-auto">
        <div class="backdrop-opacity-10 backdrop-invert bg-black/60 lg:h-20 min-h-20 w-full">
          <div class="container mx-auto px-4 h-full">
            <div class="flex flex-col lg:flex-wrap lg:items-center py-4 -mx-1 lg:-mx-4 h-full">
              <div class="h-full flex items-center flex-row align-middle lg:pl-9 lg:ml-48">
                <div class="flex items-center mr-4">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0815 1.13274C13.4286 0.326776 14.5714 0.326779 14.9185 1.13274L18.0912 8.50027C18.236 8.83645 18.5529 9.06667 18.9173 9.10047L26.9047 9.84128C27.7785 9.92232 28.1316 11.0091 27.4724 11.5883L21.4459 16.8825C21.1709 17.124 21.0499 17.4966 21.1303 17.8536L22.894 25.679C23.087 26.535 22.1625 27.2067 21.4079 26.7587L14.5106 22.6632C14.1958 22.4763 13.8042 22.4763 13.4894 22.6632L6.59208 26.7587C5.83755 27.2067 4.91305 26.535 5.10599 25.679L6.86967 17.8536C6.95015 17.4965 6.82911 17.124 6.55413 16.8825L0.527634 11.5883C-0.131628 11.0091 0.2215 9.92232 1.09527 9.84128L9.08266 9.10047C9.44711 9.06667 9.76399 8.83645 9.90876 8.50027L13.0815 1.13274Z" fill="#FFB802"/>
                  </svg>
                </div>
                <div class="text-4xl font-semibold">
                  {{ movie.ratting.toFixed(1) }}
                </div>
              </div>
              <div class="h-full flex gap-x-4 lg:grap-x-0 lg:flex-col lg:px-12 lg:pl-4">
                <div class="text-md text-gray-400">USER SCORE</div>
                <div class="text-md text-gray-200">{{ movie.score }} VOTES</div>
              </div>
              <div class="h-full flex gap-x-4 lg:grap-x-0 lg:flex-col lg:px-12 lg:border-l-2">
                <div class="text-md text-gray-400">STATUS</div>
                <div class="text-md text-gray-200">{{ movie.status }}</div>
              </div>
              <div class="h-full flex gap-x-4 lg:grap-x-0 lg:flex-col lg:px-12 lg:border-l-2">
                <div class="text-md text-gray-400">LANGUAGE</div>
                <div class="text-md text-gray-200">{{ movie.language }}</div>
              </div>
              <div class="h-full flex gap-x-4 lg:grap-x-0 lg:flex-col lg:px-12 lg:border-l-2">
                <div class="text-md text-gray-400">BUDGET</div>
                <div class="text-md text-gray-200">${{ movie.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</div>
              </div>
              <div class="h-full flex gap-x-4 lg:grap-x-0 lg:flex-col lg:px-12 lg:border-l-2">
                <div class="text-md text-gray-400">PRODUCTION</div>
                <div class="text-md text-gray-200">{{ movie.production }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white h-auto w-full">
          <div class="container mx-auto px-4 py-4 h-full">
            <div class="lg:ml-48 lg:pl-6">
              <div class="text-orange-500 font-semibold">Overview</div>
              <div class="text-slate-800">{{ movie.description }}</div>
            </div>
            <div class="flex flex-col mt-8">
              <div class="text-orange-500 font-semibold">Review</div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 flex items-center">
                <div class="card bg-gray-50 border rounded-lg p-6 shadow-lg">
                  <div class="card-header flex items-center justify-between">
                    <div class="flex gap-4">
                      <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" fill="#1E232B" fill-opacity="0.21"/>
                        </svg>
                      </div>
                      <div>
                        <div class="flex flex-col">
                          <div class="text-slate-800 font-semibold text-lg">SWITCH.</div>
                          <div class="text-slate-800">December 18, 2020</div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row gap-1 items-center bg-gray-200 p-2 rounded-xl">
                      <div class="self-start">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.58155 1.13274C6.92863 0.326777 8.07137 0.326779 8.41845 1.13274L9.56338 3.79138C9.70816 4.12756 10.025 4.35778 10.3895 4.39158L13.2718 4.65891C14.1456 4.73995 14.4987 5.82676 13.8394 6.40591L11.6647 8.31637C11.3897 8.55794 11.2687 8.93044 11.3492 9.28751L11.9856 12.1114C12.1786 12.9674 11.2541 13.6391 10.4995 13.1911L8.01056 11.7132C7.69584 11.5263 7.30416 11.5263 6.98944 11.7132L4.50046 13.1911C3.74593 13.6391 2.82144 12.9674 3.01437 12.1114L3.65082 9.28751C3.73129 8.93044 3.61026 8.55794 3.33527 8.31637L1.16056 6.40591C0.501297 5.82676 0.854425 4.73995 1.7282 4.65891L4.61051 4.39158C4.97497 4.35778 5.29184 4.12756 5.43662 3.79138L6.58155 1.13274Z" fill="#FFB802"/>
                        </svg>
                      </div>
                      <div class="text-slate-800 font-semibold text-4xl">7.0</div>
                    </div>
                  </div>
                  <div class="card-body text-slate-800 pt-4">
                    <p>It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos</p> 
                  </div>
                </div>
                <div class="card bg-gray-50 border rounded-lg p-6 shadow-lg">
                  <div class="card-header flex items-center justify-between">
                    <div class="flex gap-4">
                      <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" fill="#1E232B" fill-opacity="0.21"/>
                        </svg>
                      </div>
                      <div>
                        <div class="flex flex-col">
                          <div class="text-slate-800 font-semibold text-lg">msbreviews</div>
                          <div class="text-slate-800">December 18, 2020</div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row gap-1 items-center bg-gray-200 p-2 rounded-xl">
                      <div class="self-start">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.58155 1.13274C6.92863 0.326777 8.07137 0.326779 8.41845 1.13274L9.56338 3.79138C9.70816 4.12756 10.025 4.35778 10.3895 4.39158L13.2718 4.65891C14.1456 4.73995 14.4987 5.82676 13.8394 6.40591L11.6647 8.31637C11.3897 8.55794 11.2687 8.93044 11.3492 9.28751L11.9856 12.1114C12.1786 12.9674 11.2541 13.6391 10.4995 13.1911L8.01056 11.7132C7.69584 11.5263 7.30416 11.5263 6.98944 11.7132L4.50046 13.1911C3.74593 13.6391 2.82144 12.9674 3.01437 12.1114L3.65082 9.28751C3.73129 8.93044 3.61026 8.55794 3.33527 8.31637L1.16056 6.40591C0.501297 5.82676 0.854425 4.73995 1.7282 4.65891L4.61051 4.39158C4.97497 4.35778 5.29184 4.12756 5.43662 3.79138L6.58155 1.13274Z" fill="#FFB802"/>
                        </svg>
                      </div>
                      <div class="text-slate-800 font-semibold text-4xl">7.0</div>
                    </div>
                  </div>
                  <div class="card-body text-slate-800 pt-4">
                    <p>If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com</p>
                    <p>The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only</p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-0 relative top-0 lg:-top-36 left-0 right-0 h-auto bg-slate-900">
        <div class="container mx-auto px-6 pt-12 pb-6">
          <div class="text-gray-200 font-semibold py-6">RECOMMENDATION MOVIES</div>
          <List :movies="recomendations"></List>
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


</style>