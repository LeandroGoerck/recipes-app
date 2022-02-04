import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';
import GlobalContext from '../../Context/GlobalContext';

function ButtonFilters({ favoriteStorage }) {
  const { favRecipes: { setFavoritesRecipes } } = useContext(GlobalContext);

  const handleFilterAll = () => {
    setFavoritesRecipes(favoriteStorage);
  };

  const handleFilterFood = () => {
    const filterFoods = favoriteStorage.filter((recipe) => recipe.type === 'food');
    setFavoritesRecipes(filterFoods);
  };

  const handleFilterDrink = () => {
    const filterDrinks = favoriteStorage.filter((recipe) => recipe.type === 'drink');
    setFavoritesRecipes(filterDrinks);
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
};

export default ButtonFilters;
