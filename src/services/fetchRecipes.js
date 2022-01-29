function fetchRecipesForIngredients(ingredient) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchRecipesForName(name) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchRecipesForFirstLetter(firstLetter) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

export {
  fetchRecipesForIngredients,
  fetchRecipesForName,
  fetchRecipesForFirstLetter,
};
