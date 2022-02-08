const handleFavorite = (evt) => {
  evt.preventDefault();
  handleLocalStorageFavoriteRecipes(recipeObj);
  const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'))
    ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];
  const type = window.location.href.includes('foods') ? 'foods' : 'drinks';
  const favRecipe = buildProduct(type, infoProduct);
  if (getLocal.filter((e) => e.id === id).length < 1) {
    setIsColor(true);
    localStorage.setItem('favoriteRecipes', JSON.stringify([...getLocal, favRecipe]));
  } else {
    setIsColor(false);
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(getLocal.filter((e) => e.id !== id)));
  }
};

export default handleFavorite;
