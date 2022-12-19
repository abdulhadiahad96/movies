<script setup>
import Layout from '../../layouts/Layout.vue'
import Discover from './Discover.vue'
import SlideItem from './SlideItem.vue'

import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const store = useStore()
const slides = computed(() => store.state.slides.data)

onBeforeMount(() => {
  store.dispatch('slides/getData')
})

const settings = {
  itemsToShow: 1,
  snapAlign: "center"
}

const breakpoints = {
  700: {
    itemsToShow: 1,
    snapAlign: "center"
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "center"
  }
}

</script>

<template>
  <Layout>
    <div class="app-home">
      <div class="app-slider dark:bg-slate-900">
        <div class="pt-14 pb-12">
          <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true">
            <Slide v-for="slideItem in slides" :key="slideItem.id">
              <div class="carousel__item">
                <SlideItem :slideItem="slideItem"></SlideItem>
              </div>
            </Slide>
      
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
      <Discover></Discover>
    </div>
  </Layout>
</template>