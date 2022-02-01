import PropTypes from 'prop-types';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Simg, SdivCard, SspanCard } from '../../style/CardList';

function MealCard({ recipeCardId, cardImgId, imgSrc, imgStr, cardName, recipeId }) {
  const { location: { pathname } } = useHistory();
  return (
    <Link to={ `${pathname}/${recipeId}` }>
      <SdivCard data-testid={ recipeCardId }>
        <Simg src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
        <SspanCard data-testid={ cardName }>{imgStr}</SspanCard>
      </SdivCard>
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
