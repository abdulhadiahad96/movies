<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="dark:bg-slate-900 dark:text-gray-200">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>