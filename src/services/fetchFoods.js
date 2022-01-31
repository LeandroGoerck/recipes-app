function fetchFoods() {
  return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchCategoryFoods() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFoodsForIngredients(ingredient) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFoodsForName(name) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFoodsForFirstLetter(firstLetter) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFoodsDetailsForRecipeId(recipeId) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

export {
  fetchFoods,
  fetchCategoryFoods,
  fetchFoodsForIngredients,
  fetchFoodsForName,
  fetchFoodsForFirstLetter,
  fetchFoodsDetailsForRecipeId,
};
