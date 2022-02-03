function fetchFoods() {
  return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFoodsNationalities() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFoodsForNationality(nationality) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchCategoryFoods() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFilterCategoryFoods(category) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((data) => data.meals)
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

function fetchFoodsDetailsForRecipeId(id) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

export {
  fetchFoods,
  fetchFoodsNationalities,
  fetchFoodsForNationality,
  fetchCategoryFoods,
  fetchFilterCategoryFoods,
  fetchFoodsForIngredients,
  fetchFoodsForName,
  fetchFoodsForFirstLetter,
  fetchFoodsDetailsForRecipeId,
};
