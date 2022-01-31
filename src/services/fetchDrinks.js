function fetchDrinks() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchFilterCategoryDrinks(category) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
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

export {
  fetchDrinks,
  fetchCategoryDrinks,
  fetchFilterCategoryDrinks,
  fetchDrinksForIngredients,
  fetchDrinksForName,
  fetchDrinksForFirstLetter,
};
