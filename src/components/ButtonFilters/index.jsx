import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';
import GlobalContext from '../../Context/GlobalContext';

function ButtonFilters({ favoriteStorage, doneStorage }) {
  const {
    favRecipes: { setFavoritesRecipes },
    doneRecipes: { setDoneList },
  } = useContext(GlobalContext);
  const { location: { pathname } } = useHistory();
  const adressFavorite = '/favorite-recipes';
  const adressDone = '/done-recipes';

  const handleFilterAll = () => {
    if (pathname === adressFavorite) {
      setFavoritesRecipes(favoriteStorage);
    }
    if (pathname === adressDone) {
      setDoneList(doneStorage);
    }
  };

  const handleFilterFood = () => {
    if (pathname === adressFavorite) {
      const filterFoods = favoriteStorage.filter((recipe) => recipe.type === 'food');
      setFavoritesRecipes(filterFoods);
    }
    if (pathname === adressDone) {
      const filterFoods = doneStorage.filter((recipe) => recipe.type === 'food');
      setDoneList(filterFoods);
    }
  };

  const handleFilterDrink = () => {
    if (pathname === adressFavorite) {
      const filterDrinks = favoriteStorage.filter((recipe) => recipe.type === 'drink');
      setFavoritesRecipes(filterDrinks);
    }
    if (pathname === adressDone) {
      const filterDrinks = doneStorage.filter((recipe) => recipe.type === 'drink');
      setDoneList(filterDrinks);
    }
  };

  return (
    <div>
      <ButtonGeneric TestId="filter-by-all-btn" ClickEvent={ handleFilterAll }>
        All
      </ButtonGeneric>
      <ButtonGeneric TestId="filter-by-food-btn" ClickEvent={ handleFilterFood }>
        Food
      </ButtonGeneric>
      <ButtonGeneric TestId="filter-by-drink-btn" ClickEvent={ handleFilterDrink }>
        Drinks
      </ButtonGeneric>
    </div>
  );
}

ButtonFilters.propTypes = {
  favoriteStorage: PropTypes.arrayOf(PropTypes.object).isRequired,
  doneStorage: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonFilters;
