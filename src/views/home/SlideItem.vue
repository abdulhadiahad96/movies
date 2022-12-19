<script setup>
const props = defineProps({
  slideItem: Object,
})
</script>

<template>
  <div class="slides-item">
    <div class="slides-container">
      <div class="slides-card">
        <div class="slides-card-header">
          <div class="slides-card-rating">
            <div class="inline-block align-middle mr-2">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84818 2.13274C8.19526 1.32678 9.338 1.32678 9.68509 2.13274L10.7225 4.54183C10.8673 4.87801 11.1842 5.10823 11.5487 5.14203L14.1604 5.38427C15.0342 5.46531 15.3873 6.55212 14.7281 7.13127L12.7575 8.86241C12.4825 9.10398 12.3615 9.47648 12.4419 9.83355L13.0186 12.3924C13.2116 13.2484 12.2871 13.9201 11.5325 13.4721L9.27719 12.1329C8.96247 11.946 8.5708 11.946 8.25607 12.1329L6.00072 13.4721C5.24619 13.9201 4.32169 13.2484 4.51463 12.3924L5.09133 9.83355C5.17181 9.47648 5.05077 9.10398 4.77579 8.86241L2.8052 7.13127C2.14594 6.55212 2.49906 5.46531 3.37284 5.38427L5.98461 5.14203C6.34907 5.10823 6.66594 4.87801 6.81072 4.54183L7.84818 2.13274Z" fill="#FFB802"/>
              </svg>
            </div>
            <div class="inline-block align-middle font-bold">{{ slideItem.ratting.toFixed(1) }}</div>
          </div>
          <div class="slides-card-title font-bold">{{ slideItem.title }}</div>
          <div class="slides-card-tags py-2">
            <div class="inline-block align-middle">{{ slideItem.year }}</div>
            <div class="inline-block align-middle px-2">
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.24099" cy="3.24102" r="3.24102" fill="white" fill-opacity="0.5"/>
              </svg>
            </div>
            <div class="inline-block align-middle" v-for="(category, i) in slideItem.categories" :key="category.id">
              <router-link
                :to="{name: 'categories', params: { slug: category.slug }}"
                class="hover:text-orange-600"
              >
                {{ (i > 0 ? ', ' : '') + category.name }} 
              </router-link>
            </div>
          </div>
        </div>
        <div class="slides-card-body">
          {{ slideItem.description }}
        </div>
      </div>
      <div class="slides-image align-middle">
        <img :src="slideItem.image" alt="img" />
      </div>
    </div>
  </div>
</template>

<style>
.slides-item {
  width: 100%;
  height: 364.61px;
  padding: 0 20px;
}
.slides-container {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.slides-container .slides-image {
  position: relative;
}
.slides-container .slides-image,
.slides-container img {
  width: 243.08px;
  height: 364.61px;
}
.slides-card {
  background: black;
  width: 100%;
  padding: 20px 20px 20px 263.08px;
  text-align: left;
  position: absolute;
  top: 16.5px;
  bottom: 16.5px;
  left: 0;
  right: 0;
  overflow-y: hidden;
}
.slides-card-rating {
  font-size: 18px;
}
.slides-card-title {
  font-size: 28px;
}
.slides-card-tags {
  font-size: 16px;
}
.slides-card-body {
  font-size: 12px;
}

.app-slider .carousel__slide {
  min-width: 581.25px;
}
@media (max-width: 768px) {
  .app-slider .carousel__slide {
    min-width: 100%;
  }
}
.app-slider .carousel__item {
	min-height: 364.61px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.app-slider .carousel__pagination {
  margin-top: 50px;
}
.app-slider .carousel__pagination-button::after {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}
.app-slider .carousel__pagination-button:hover::after {
  background-color: rgba(255, 255, 255, 0.5);
}
.app-slider .carousel__pagination-button--active:hover::after,
.app-slider .carousel__pagination-button--active::after {
  background-color: rgba(231, 76, 60, 1);
}
.app-slider .carousel__pagination-button:hover::after, 
.app-slider .carousel__pagination-button--active::after {
  width: 60px;
  border-radius: 6px;
}
</style>