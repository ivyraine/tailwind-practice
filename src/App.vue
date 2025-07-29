<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <NavBar />
  <RouterView />
  <Footer /> -->

  <router-view v-slot="{Component,route}">
      <component :is="Component" :key="route.path"></component>
  </router-view>

</template>

