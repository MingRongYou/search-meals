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
  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = 'ABCDFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(()=>store.state.mealsByLetter);

watch(route,()=>{
  store.dispatch('searchMealsByLetter',route.params.letter)
})

onMounted(()=>{
  store.dispatch('searchMealsByLetter',route.params.letter)
});
</script>