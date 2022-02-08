import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import ButtonFilters from '../../components/ButtonFilters';
import FavoriteCards from '../../components/FavoriteCards';
import GlobalContext from '../../Context/GlobalContext';

function FavoriteRecipes() {
  const {
    favRecipes: { favoriteRecipes, setFavoritesRecipes } } = useContext(GlobalContext);
  const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => setFavoritesRecipes(favoriteStorage), []);

  return (
    <>
      <Header displayIconSearch={ false }>Favorite Recipes</Header>
      <ButtonFilters favoriteStorage={ favoriteStorage } />
      <FavoriteCards favoriteRecipes={ favoriteRecipes } />
    </>
  );
}

export default FavoriteRecipes;
