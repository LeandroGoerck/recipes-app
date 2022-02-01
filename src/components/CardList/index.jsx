import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MealCard from '../MealCard';

function CardList() {
  const { location: { pathname } } = useHistory();
  const { recipesList: { meals, drinks } } = useContext(GlobalContext);
  function handleList() {
    if (pathname === '/foods') {
      return (
        meals.map((recipe, index) => (
          <MealCard
            key={ index }
            recipeCardId={ `${index}-recipe-card` }
            cardImgId={ `${index}-card-img` }
            imgSrc={ recipe.strMealThumb }
            imgStr={ recipe.strMeal }
            cardName={ `${index}-card-name` }
            recipeId={ recipe.idMeal }
          />
        ))
      );
    }

    if (pathname === '/drinks') {
      return (
        drinks.map((recipe, index) => (
          <MealCard
            key={ index }
            recipeCardId={ `${index}-recipe-card` }
            cardImgId={ `${index}-card-img` }
            imgSrc={ recipe.strDrinkThumb }
            imgStr={ recipe.strDrink }
            cardName={ `${index}-card-name` }
            recipeId={ recipe.idDrink }
          />
        ))
      );
    }
  }

  return (
    <div>
      {handleList()}
    </div>
  );
}

export default CardList;
