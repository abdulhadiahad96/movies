<script setup>
import { ref } from 'vue';
import DropdownCategory from './DropdownCategory.vue';
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="app-header z-50 relative top-0 right-0 left-0">
    <nav
      class="
        container
        px-6
        py-4
        mx-auto
        lg:flex lg:justify-between lg:items-center
      "
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between">
          <div class="mr-8">
            <router-link
              to="/"
              class="
                text-xl
                font-bold
                text-gray-200
                lg:text-2xl
                hover:text-orange-600
              "
              >
              <svg width="113" height="31" viewBox="0 0 113 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.0093 7.75004L30.2305 0H37.7881V27.125C37.7881 29.2562 36.0876 31 34.0093 31H19.8637L27.3917 26.5428C28.067 26.1427 28.4829 25.4039 28.4829 24.6031C28.4829 23.803 28.0672 23.0642 27.3917 22.664L12.624 13.9226C12.2858 13.7223 11.9095 13.623 11.5319 13.623C11.1545 13.623 10.7782 13.7226 10.4405 13.9228C9.76431 14.3225 9.3486 15.0618 9.3486 15.8623V31H3.77881C1.70046 31 0 29.2562 0 27.125V3.87499C0 1.74375 1.70046 0 3.77881 0H5.66821L9.44702 7.75004H15.1152L11.3364 0H15.1152L18.8941 7.75004H24.5623L20.7834 0H24.5623L28.3411 7.75004H34.0093Z" fill="white"/>
                <path d="M63.0722 14.8557L60.9777 0.934662H58.0299L54.3451 9.48619L50.6604 0.934662H47.7319L45.5986 14.8557H48.5852L49.9234 5.78717L53.9766 14.8358H54.6942L58.7475 5.78717L60.0856 14.8557H63.0722Z" fill="white"/>
                <path d="M69.0028 15.174C72.2415 15.174 74.6657 12.7279 74.6657 9.48623C74.6657 6.24462 72.2415 3.81836 69.0028 3.81836C65.7641 3.81836 63.3398 6.24462 63.3398 9.48623C63.3398 12.7279 65.7641 15.174 69.0028 15.174ZM69.0028 12.4295C67.3737 12.4295 66.2101 11.2363 66.2101 9.48623C66.2101 7.75605 67.3737 6.54291 69.0028 6.54291C70.6318 6.54291 71.7954 7.75605 71.7954 9.48623C71.7954 11.2363 70.6318 12.4295 69.0028 12.4295Z" fill="white"/>
                <path d="M80.6844 15.174C83.9231 15.174 86.3473 12.7279 86.3473 9.48623C86.3473 6.24462 83.9231 3.81836 80.6844 3.81836C77.4457 3.81836 75.0215 6.24462 75.0215 9.48623C75.0215 12.7279 77.4457 15.174 80.6844 15.174ZM80.6844 12.4295C79.0553 12.4295 77.8917 11.2363 77.8917 9.48623C77.8917 7.75605 79.0553 6.54291 80.6844 6.54291C82.3135 6.54291 83.4771 7.75605 83.4771 9.48623C83.4771 11.2363 82.3135 12.4295 80.6844 12.4295Z" fill="white"/>
                <path d="M93.8877 4.11667L91.3665 11.3159L88.8066 4.11667H85.7812L90.0478 14.8558H92.6659L96.8161 4.11667H93.8877Z" fill="white"/>
                <path d="M97.3784 2.68477H100.19V0H97.3784V2.68477ZM97.3784 14.8558H100.21V4.11666H97.3784V14.8558Z" fill="white"/>
                <path d="M112.101 9.46634C112.101 6.36392 109.89 3.81836 106.671 3.81836C103.568 3.81836 101.241 6.2645 101.241 9.48623C101.241 12.708 103.587 15.174 106.671 15.174C109.115 15.174 111.112 13.6824 111.868 11.3357H108.901C108.475 12.1113 107.66 12.5886 106.671 12.5886C105.294 12.5886 104.363 11.7733 104.111 10.3016H112.043C112.082 10.0232 112.101 9.74477 112.101 9.46634H112.101ZM106.671 6.30425C107.951 6.30425 108.862 7.02021 109.27 8.33277H104.189C104.518 7.05999 105.41 6.30425 106.671 6.30425Z" fill="white"/>
                <path d="M55.7996 16.7608H45.3077V19.5649H49.0894V30.6818H52.0179V19.5649H55.7996V16.7608Z" fill="#E74C3C"/>
                <path d="M56.4625 18.5109H59.2745V15.8261H56.4625V18.5109ZM56.4625 30.6819H59.2939V19.9428H56.4625V30.6819Z" fill="#E74C3C"/>
                <path d="M72.9305 19.704C71.5924 19.704 70.4094 20.3802 69.6918 21.4143C69.0712 20.3404 67.9852 19.704 66.647 19.704C65.4058 19.704 64.2616 20.3205 63.5247 21.2751L63.001 19.9427H61.0229V30.6818H63.8543V24.8747C63.8543 23.2042 64.6107 22.2496 65.8907 22.2496C66.8991 22.2496 67.4422 23.0053 67.4422 24.4372V30.6818H70.196V24.8747C70.196 23.2042 70.9524 22.2496 72.213 22.2496C73.2409 22.2496 73.7839 23.0053 73.7839 24.4372V30.6818H76.6153V23.9599C76.6153 21.4342 75.1026 19.704 72.9305 19.704Z" fill="#E74C3C"/>
                <path d="M88.397 25.2924C88.397 22.19 86.1861 19.6444 82.9668 19.6444C79.8638 19.6444 77.5366 22.0905 77.5366 25.3123C77.5366 28.534 79.8832 31 82.9668 31C85.4104 31 87.408 29.5085 88.1643 27.1618H85.1971C84.7704 27.9374 83.9559 28.4147 82.9668 28.4147C81.5899 28.4147 80.659 27.5993 80.4069 26.1276H88.3388C88.3777 25.8492 88.3969 25.5708 88.3969 25.2924H88.397ZM82.9668 22.1303C84.2468 22.1303 85.1583 22.8463 85.5656 24.1588H80.4844C80.8141 22.886 81.7062 22.1303 82.9668 22.1303Z" fill="#E74C3C"/>
              </svg>
            </router-link>
          </div>
          <div class="flex items-center justify-center">
            <form class="form-search" action="">
              <div class="flex dark:text-gray-200">
                <button type="button" class="flex items-center justify-center px-4 rounded-l-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_21_3)">
                      <path d="M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.895 4 2.01 4.895 2.01 6L2 18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V4H18Z" fill="white" fill-opacity="0.17"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_21_3">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <input type="text" class="search px-4 py-2 w-80" placeholder="Find Movie">
                <button type="button" class="flex items-center justify-center px-4 rounded-r-md">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7656 9.3125C11.2344 8.575 11.5094 7.7 11.5094 6.75938C11.5094 4.13125 9.38125 2 6.75625 2C4.12812 2 2 4.13125 2 6.75938C2 9.3875 4.12813 11.5188 6.75313 11.5188C7.70625 11.5188 8.59375 11.2375 9.3375 10.7563L9.55313 10.6062L12.9469 14L14 12.9281L10.6094 9.53438L10.7656 9.3125ZM9.41875 4.1C10.1281 4.80937 10.5188 5.75312 10.5188 6.75625C10.5188 7.75937 10.1281 8.70313 9.41875 9.4125C8.70937 10.1219 7.76562 10.5125 6.7625 10.5125C5.75937 10.5125 4.81562 10.1219 4.10625 9.4125C3.39687 8.70313 3.00625 7.75937 3.00625 6.75625C3.00625 5.75312 3.39687 4.80937 4.10625 4.1C4.81562 3.39062 5.75937 3 6.7625 3C7.76562 3 8.70937 3.39062 9.41875 4.1Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex lg:hidden">
          <button
            type="button"
            class="
              text-gray-200
              hover:text-orange-600
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0
        "
      >
        <li class="text-gray-200 hover:text-orange-600 text-sm">
          <DropdownCategory></DropdownCategory>
        </li>
        <li class="text-gray-200 hover:text-orange-600 text-sm">
          <router-link
            :to="{name: 'movies'}"
          >
            MOVIES
          </router-link>
        </li>
        <li class="text-gray-200 hover:text-orange-600 text-sm">TV SHOWS</li>
        <li class="text-gray-200 hover:text-orange-600 text-sm">LOGIN</li>
      </ul>
    </nav>
  </div>
</template>

<style>
.app-header .form-search button, 
.app-header .form-search input {
  background: rgba(0, 0, 0, 0.13);
}
.app-header .form-search input:focus {
  outline: none;
}
@media (max-width: 768px) {
  .app-header .form-search input {
    width: 150px;
  }
}
</style>