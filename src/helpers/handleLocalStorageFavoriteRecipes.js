const handleLocalStorageFavoriteRecipes = (recipeObj_) => {
  console.log(recipeObj_);

  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipeObj_]));
  } else {
    const localStorageRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localStorageRecipes.some((recipe) => recipe.id === recipeObj_.id)) {
      const filteredStorage = localStorageRecipes
        .filter((recipe) => recipe.id !== recipeObj_.id);
      localStorage.setItem('favoriteRecipes', JSON
        .stringify([...filteredStorage]));
    } else {
      localStorage.setItem('favoriteRecipes', JSON
        .stringify([...localStorageRecipes, recipeObj_]));
    }
  }
};

export default handleLocalStorageFavoriteRecipes;
