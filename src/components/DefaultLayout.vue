<template>
  <div class="bg-gray-100 h-full">
    <navbar></navbar>
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>