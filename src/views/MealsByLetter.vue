<template>
  <div class="flex gap-2 justify-center mt-2">
    <router-link 
      :to="{name:'byLetter', params:{letter}}" 
      v-for="letter of letters" 
      :key="letter"
    >
      {{letter}}
    </router-link>
  </div>
</template>
<script setup>
const letters = 'ABCDFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>