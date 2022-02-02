function fetchFoodsIngredients() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

function fetchDrinksIngredients() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .catch((error) => global.alert(error));
}

export {
  fetchFoodsIngredients,
  fetchDrinksIngredients,
};
