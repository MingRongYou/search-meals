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
  <div>
    <pre>
      {{ meals }}
    </pre>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const letters = 'ABCDFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(()=>store.state.mealsByLetter);

onMounted(()=>{
  store.dispatch('searchMealsByLetter',route.params.letter)
});
</script>