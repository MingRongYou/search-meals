<template>
  <div class="flex flex-col p-8">

  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'


const meals = computed(()=> store.state.meals);
const ingredients = ref([]);

onMounted(async()=>{
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response);
  ingredients.value = response.data
});
</script>