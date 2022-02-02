import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Simg } from '../../style/CardList';

function MealCard({ recipeCardId, cardImgId, imgSrc, imgStr, cardName, recipeId }) {
  const { location: { pathname } } = useHistory();
  return (
    <Link
      to={ pathname !== '/explore/foods/nationalities' ? (
        `${pathname}/${recipeId}`) : `/foods/${recipeId}` }
    >
      <div data-testid={ recipeCardId }>
        <Simg src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
        <span data-testid={ cardName }>{imgStr}</span>
      </div>
    </Link>
  );
}

MealCard.propTypes = {
  cardImgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStr: PropTypes.string.isRequired,
  recipeCardId: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default MealCard;
