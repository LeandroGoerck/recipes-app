import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MealCard from '../MealCard';

function CardList() {
  const { location: { pathname } } = useHistory();
  const { recipesList: { meals, drinks },
    requestAPI: { firstTwelveFoods } } = useContext(GlobalContext);

  const verificateFetchFood = () => {
    if (meals.length === 0) firstTwelveFoods();
  };

  useEffect(() => verificateFetchFood(), []);

  function handleList() {
    if (pathname !== '/drinks') {
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

    return (
      <div>
        {drinks.map((recipe, index) => (
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

  return (
    <div>
      {handleList()}
    </div>
  );
}

export default CardList;
