import PropTypes from 'prop-types';
import React from 'react';
import FavCard from '../FavCard';

function FavoriteCards({ favoriteRecipes }) {
  return (
    <div>
      { favoriteRecipes !== null && favoriteRecipes.length !== 0 ? (
        favoriteRecipes.map((recipe, index) => (
          <FavCard
            index={ index }
            key={ recipe.id }
            id={ recipe.id }
            type={ recipe.type }
            srcImg={ recipe.image }
            cardName={ recipe.name }
            nationality={ recipe.nationality }
            category={ recipe.category }
            alcoholic={ recipe.alcoholicOrNot }
          />
        ))) : null }
    </div>
  );
}

FavoriteCards.propTypes = {
  favoriteRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoriteCards;
