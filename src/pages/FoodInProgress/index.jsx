import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FoodIngredientsWithCheckboxes
from '../../components/FoodIngredientsWithCheckboxes';
import RecommendedDrinksCarousel from '../../components/RecommendedDrinksCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import { fetchDrinks } from '../../services/fetchDrinks';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';
import BtnShare from '../../components/BtnShare';
import BtnFavorite from '../../components/BtnFavorite';

function FoodInProgress(props) {
  const { startButton: { setIsStart } } = useContext(GlobalContext);
  const { foodDetails: { details } } = useContext(GlobalContext);
  const { foodDetails: { setDetails } } = useContext(GlobalContext);
  const { foodDetails: { setIngredients } } = useContext(GlobalContext);
  // const { foodDetails: { ingredients } } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
  // =================== inProgressRecipes ============
  const { inProgressRecipes: { setInProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes: { setInProgCocktails } } = useContext(GlobalContext);
  const { inProgressRecipes: { meals: inProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes } = useContext(GlobalContext);
  // =================== drinkRecommendations ================
  const { foodDetails: { setDrinkRecommendations } } = useContext(GlobalContext);
  // =================== routes ==============================
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();
  console.log(strCategory);
  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes')) {
      const localStorageData = localStorage.getItem('inProgressRecipes');
      const parsedData = JSON.parse(localStorageData);
      const inProgressRecipeMeals = parsedData.meals;
      const inProgressRecipeCocktails = parsedData.cocktails;
      setInProgMeals(inProgressRecipeMeals);
      setInProgCocktails(inProgressRecipeCocktails);
    }
    setIsStart(false);
  }, []);

  useEffect(() => {
    fetchFoodsDetailsForRecipeId(recipeId)
      .then(({ meals }) => {
        console.log({ meals });
        setDetails(meals[0]);
        const ingAndMeasure = formatIngredientList(meals[0]);
        setIngredients(ingAndMeasure);
      })
      .catch((error) => (console.log(error)));
  }, []);

  useEffect(() => {
    fetchDrinks()
      .then(({ drinks }) => {
        const MAX_DRINKS = 6;
        console.log(drinks);
        if (drinks.length > MAX_DRINKS) {
          const newDrinks = [...drinks];
          const firstSixDrinks = newDrinks.splice(0, MAX_DRINKS);
          console.log(firstSixDrinks);
          setDrinkRecommendations(firstSixDrinks);
        } else {
          setDrinkRecommendations(drinks);
        }
      });
  }, []);

  // const handleInProgressArray = (ingrNumber) => {
  //   if (inProgMeals[recipeId] !== undefined) {
  //     if (inProgMeals[recipeId].some((number) => number === ingrNumber)) {
  //       const filteredIngredients = [...inProgMeals[recipeId]
  //         .filter((number) => number !== ingrNumber)];
  //       return filteredIngredients;
  //     }
  //     const addNewIngredient = [...inProgMeals[recipeId], ingrNumber];
  //     const newUsedIngredients = [...addNewIngredient.sort((a, b) => a - b)];
  //     return newUsedIngredients;
  //   }
  //   return [ingrNumber];
  // };

  // const saveToGlobalProvider = (recipeId_, ingredientsArray_) => {
  //   const newMealsObj = {
  //     [recipeId_]: ingredientsArray_,
  //   };
  //   console.log('saveToGlobalProvider Test', newMealsObj);
  //   setInProgMeals(newMealsObj);
  // };

  useEffect(() => {
    const saveInProgressRecipesProviderToLocalStorage = () => {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    };
    saveInProgressRecipesProviderToLocalStorage();
  }, [inProgMeals[recipeId]]);

  // const hangleOnChange = (event) => {
  //   const ingredientNumber = (Number(event.target.value) + 1);
  //   const ingredientsArray = handleInProgressArray(ingredientNumber);
  //   saveToGlobalProvider(recipeId, ingredientsArray);
  // };

  // const handleCheckedBoxes = (index_) => {
  //   if (inProgMeals[recipeId] !== undefined) {
  //     return inProgMeals[recipeId]
  //       .some((ingNumb) => ingNumb === (index_ + 1));
  //   }
  //   return false;
  // };

  return (
    <div>
      <h1>FoodInProgress</h1>
      <img
        style={ { width: 100, display: 'flex', flexDirection: 'row' } }
        src={ details?.strMealThumb }
        data-testid="recipe-photo"
        alt="x"
      />

      <span data-testid="recipe-title">{strMeal !== undefined && strMeal}</span>

      <BtnShare />
      <BtnFavorite />

      <span data-testid="recipe-category">{strCategory}</span>

      {/* {ingredients !== undefined && (
        <ol>
          {ingredients.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                name={ item }
                id={ item }
                value={ index }
                checked={ handleCheckedBoxes(index) }
                onChange={ hangleOnChange }
              />
              {item}
            </li>
          ))}
        </ol>
      )} */}

      <FoodIngredientsWithCheckboxes recipeId={ recipeId } />

      <span data-testid="instructions">{strInstructions}</span>

      {pathname === `/foods/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedDrinksCarousel />
    </div>
  );
}

FoodInProgress.defaultProps = {
  match: true,
};

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }),
};

export default FoodInProgress;
