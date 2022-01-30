import PropTypes from 'prop-types';
import React from 'react';
import { Simg } from '../../style/CardList';

function MealCard({ recipeCardId, cardImgId, imgSrc, imgStr, cardName }) {
  return (
    <div data-testid={ recipeCardId }>
      <Simg src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
      <span data-testid={ cardName }>{imgStr}</span>
    </div>
  );
}

MealCard.propTypes = {
  cardImgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStr: PropTypes.string.isRequired,
  recipeCardId: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default MealCard;
