import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import MealCard from '../MealCard';
import { fetchFoods } from '../../services/fetchFoods';

function CardList() {
  const { location: { pathname } } = useHistory();
  const { recipesList: { meals, drinks, setMeals } } = useContext(GlobalContext);

  const verificateFetchFood = () => {
    if (meals.length === 0) {
      fetchFoods()
        .then((data) => {
          const TWELVE = 12;
          const firstTwelveFoods = data.meals.slice(0, TWELVE);
          setMeals(firstTwelveFoods);
        });
    }
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
