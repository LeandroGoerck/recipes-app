import React from 'react';
import PropTypes from 'prop-types';

function IngredientCard({ ingredientCardId, cardImgId, imgSrc, imgStr, cardName }) {
  return (
    <div data-testid={ ingredientCardId }>
      <img src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
      <span data-testid={ cardName }>{imgStr}</span>
    </div>
  );
}

IngredientCard.propTypes = {
  cardImgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStr: PropTypes.string.isRequired,
  ingredientCardId: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default IngredientCard;
