<template>
  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(()=>store.state.mealsByIngredient);
onMounted(()=>{
  //store.dispatch('searchMealsByIngredient',route.params.ingredient)
  console.log('Route params:', route.params.ingredient);
  if (route.params.ingredient) {
    store.dispatch('searchMealsByIngredient', route.params.ingredient);
  } else {
    console.error('Ingredient parameter is missing.');
  }
})
</script>
