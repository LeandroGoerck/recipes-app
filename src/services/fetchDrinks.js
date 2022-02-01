function fetchDrinks() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchCategoryDrinks() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchDrinksForIngredients(ingredient) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchDrinksForName(name) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchDrinksForFirstLetter(firstLetter) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchDrinkDetailsForRecipeId(recipeId) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

export {
  fetchDrinks,
  fetchCategoryDrinks,
  fetchDrinksForIngredients,
  fetchDrinksForName,
  fetchDrinksForFirstLetter,
  fetchDrinkDetailsForRecipeId,
};
