import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import IngredientCard from '../IngredientCard';
import MealCard from '../MealCard';

function CardList() {
  const { location: { pathname } } = useHistory();
  const { recipesList: { meals, drinks } } = useContext(GlobalContext);
  const { ingredientsList: { ingredients } } = useContext(GlobalContext);
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
          />
        ))
      );
    }

    if (pathname === '/drinks') {
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

    if (pathname === '/explore/foods/ingredients') {
      return (
        <div>
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={ index }
              ingredientCardId={ `${index}-ingredient-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              imgStr={ ingredient.strIngredient }
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
