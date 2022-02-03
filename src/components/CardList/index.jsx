import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import Card from '../Card';
import { ScardList } from '../../style/CardList';

function CardList() {
  const { location: { pathname } } = useHistory();
  const {
    recipesList: { meals, drinks },
    ingredientsList: { ingredientsX, drinksIngredientsX },
    requestAPI: { firstTwelveFoods } } = useContext(GlobalContext);

  const verificateFetchFood = () => {
    if (meals.length === 0) firstTwelveFoods();
  };

  useEffect(() => verificateFetchFood(), []);

  function handleList() {
    if (pathname === '/foods' || pathname === '/explore/foods/nationalities') {
      return (
        <div>
          {meals.map((recipe, index) => (
            <Card
              key={ index }
              testId={ `${index}-recipe-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ recipe.strMealThumb }
              imgStr={ recipe.strMeal }
              cardName={ `${index}-card-name` }
              recipeId={ recipe.idMeal }
            />
          ))}
        </div>
      );
    }

    if (pathname === '/drinks') {
      return (
        <div>
          {drinks.map((recipe, index) => (
            <Card
              key={ index }
              testId={ `${index}-recipe-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ recipe.strDrinkThumb }
              imgStr={ recipe.strDrink }
              cardName={ `${index}-card-name` }
              recipeId={ recipe.idDrink }
            />
          ))}
        </div>
      );
    }

    if (pathname === '/explore/foods/ingredients') {
      return (
        <div>
          {ingredientsX.map((ingredient, index) => (
            <Card
              key={ index }
              testId={ `${index}-ingredient-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              imgStr={ ingredient.strIngredient }
              cardName={ `${index}-card-name` }
            />
          ))}
        </div>
      );
    }

    if (pathname === '/explore/drinks/ingredients') {
      return (
        <div>
          {drinksIngredientsX.map((ingredient, index) => (
            <Card
              key={ index }
              testId={ `${index}-ingredient-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              imgStr={ ingredient.strIngredient1 }
              cardName={ `${index}-card-name` }
            />
          ))}
        </div>
      );
    }
  }

  return (
    <ScardList>
      {handleList()}
    </ScardList>
  );
}

export default CardList;
