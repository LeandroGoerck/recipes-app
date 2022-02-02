import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import IngredientCard from '../IngredientCard';
import MealCard from '../MealCard';
import { ScardList } from '../../style/CardList';

function CardList() {
  const { location: { pathname } } = useHistory();
  const {
    recipesList: { meals, drinks },
    ingredientsList: { ingredients, drinksIngredients } } = useContext(GlobalContext);
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

    if (pathname === '/explore/drinks/ingredients') {
      return (
        <div>
          {drinksIngredients.map((ingredient, index) => (
            <IngredientCard
              key={ index }
              ingredientCardId={ `${index}-ingredient-card` }
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
