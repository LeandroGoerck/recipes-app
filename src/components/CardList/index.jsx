import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MealCard from '../MealCard';

function CardList() {
  const { location: { pathname } } = useHistory();
  const { recipesList } = useContext(GlobalContext);

  function handleList() {
    const LIST_LIMIT = 12;
    if (pathname === '/foods') {
      return (
        <div>
          {recipesList.meals.slice(0, LIST_LIMIT).map((recipe, index) => (
            <MealCard
              key={ index }
              recipeCardId={ `${index}-recipe-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ recipe.strMealThumb }
              imgStr={ recipe.strMeal }
              cardName={ `${index}-card-name` }
            />
          ))}
        </div>
      );
    }

    if (pathname === '/drinks') {
      return (
        <div>
          {recipesList.drinks.slice(0, LIST_LIMIT).map((recipe, index) => (
            <MealCard
              key={ index }
              recipeCardId={ `${index}-recipe-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ recipe.strDrinkThumb }
              imgStr={ recipe.strDrink }
              cardName={ `${index}-card-name` }
            />
          ))}
        </div>
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
