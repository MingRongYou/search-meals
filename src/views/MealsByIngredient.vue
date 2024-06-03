<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
    <MealItem 
      v-for="meal of meals" 
      :key="meal.idMeal" 
      :meal="meal" >
    </MealItem>
  </div>
  <div>
  <div v-if="meals && meals.length === 0" class="flex justify-center text-gray-600">
    There are no meals
  </div>

  <pre>
    {{ meals }}
  </pre>
   
  </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(()=>{store.state.mealsByIngredient});
console.log(meals.value);

onMounted(()=>{
  store.dispatch('searchMealsByIngredient',route.params.ingredient)
})
</script>
