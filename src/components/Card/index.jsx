import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Simg, Scard, Stitle } from '../../style/CardList';

function Card({ testId, cardImgId, imgSrc, imgStr, cardName, recipeId }) {
  const { location: { pathname } } = useHistory();

  const handleRoute = () => {
    if (pathname !== '/explore/foods/nationalities') return `${pathname}/${recipeId}`;
    return `/foods/${recipeId}`;
  };

  return (
    <Link
      to={ handleRoute() }
    >
      <Scard data-testid={ testId }>
        <Simg src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
        <Stitle data-testid={ cardName }>{imgStr}</Stitle>
      </Scard>
    </Link>
  );
}

Card.propTypes = {
  cardImgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStr: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default Card;
