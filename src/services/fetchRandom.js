async function fetchRandomMeal() {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
}

async function fetchRandomDrink() {
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
}

export {
  fetchRandomMeal,
  fetchRandomDrink,
};
