import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Simg, Scard, Stitle } from '../../style/CardList';
import GlobalContext from '../../Context/GlobalContext';

function MealCard({ testId, cardImgId, imgSrc, imgStr, cardName, recipeId }) {
  const { location: { pathname } } = useHistory();
  const {
    recipesList: { setFilteredIngredient, setFilteredDrinkIngredient },
  } = useContext(GlobalContext);

  const handleRoute = () => {
    if (pathname === '/explore/foods/nationalities') return `/foods/${recipeId}`;
    if (pathname === '/explore/foods/ingredients') return '/foods';
    if (pathname === '/explore/drinks/ingredients') return '/drinks';
    return `${pathname}/${recipeId}`;
  };

  const handleIngredientClick = (ingredientName) => {
    if (pathname === '/explore/foods/ingredients') {
      return setFilteredIngredient(ingredientName);
    }
    return setFilteredDrinkIngredient(ingredientName);
  };

  return (
    <Link
      to={ handleRoute() }
      onClick={ () => handleIngredientClick(imgStr) }
    >
      <Scard data-testid={ testId }>
        <Simg src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
        <Stitle data-testid={ cardName }>{imgStr}</Stitle>
      </Scard>
    </Link>
  );
}

MealCard.propTypes = {
  cardImgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStr: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default MealCard;
