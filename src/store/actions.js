import axiosClient from '../axiosClient';
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
};
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
};
export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      console.log('API response data:', data);
      if (data.meals) {
        commit('setMealsByIngredients', data.meals);
      } else {
        console.warn('No meals found for ingredient:', ingredient);
      }
    })
    .catch((error) => {
      console.error('Error fetching meals:', error);
    });
};