import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BtnFavorite from '../../components/BtnFavorite';
import BtnShare from '../../components/BtnShare';
import FoodIngredientsWithCheckboxes
from '../../components/FoodIngredientsWithCheckboxes';
import RecommendedDrinksCarousel from '../../components/RecommendedDrinksCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import NewFavoriteRecipeObj from '../../helpers/NewFavoriteRecipeObj';
import { fetchDrinks } from '../../services/fetchDrinks';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';
// import BtnFinish from '../../components/BtnFinish';

function FoodInProgress(props) {
  const { startButton: { setIsStart } } = useContext(GlobalContext);
  const { foodDetails: { details } } = useContext(GlobalContext);
  const { foodDetails: { setDetails } } = useContext(GlobalContext);
  const { foodDetails: { setIngredients } } = useContext(GlobalContext);
  const { foodDetails: { ingredients } } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
  // =================== inProgressRecipes ============
  const { inProgressRecipes: { setInProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes: { setInProgCocktails } } = useContext(GlobalContext);
  const { inProgressRecipes: { meals: inProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes } = useContext(GlobalContext);
  // =================== drinkRecommendations ================
  const { foodDetails: { setDrinkRecommendations } } = useContext(GlobalContext);
  // =================== routes ==============================
  const { match: { params: { recipeId } } } = props;
  const [doneRecipe, setDoneRecipe] = useState([]);
  const { location: { pathname } } = useHistory();
  const history = useHistory();

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
    const catchDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipe([...catchDoneRecipes, {
      id: details.idMeal,
      type: 'food',
      nationality: details.strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: details.strMealThumb,
      doneDate: '09/02/2022',
      tags: [details.strTags],
    }]);
  }, []);

  useEffect(() => {
    fetchFoodsDetailsForRecipeId(recipeId)
      .then(({ meals }) => {
        setDetails(meals[0]);
        const ingAndMeasure = formatIngredientList(meals[0]);
        setIngredients(ingAndMeasure);
      })
      .catch((error) => (error));
  }, []);

  useEffect(() => {
    fetchDrinks()
      .then(({ drinks }) => {
        const MAX_DRINKS = 6;
        if (drinks.length > MAX_DRINKS) {
          const newDrinks = [...drinks];
          const firstSixDrinks = newDrinks.splice(0, MAX_DRINKS);
          setDrinkRecommendations(firstSixDrinks);
        } else {
          setDrinkRecommendations(drinks);
        }
      });
  }, []);

  useEffect(() => {
    const saveInProgressRecipesProviderToLocalStorage = () => {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    };
    saveInProgressRecipesProviderToLocalStorage();
  }, [inProgMeals[recipeId]]);

  const handleDisabled = () => {
    if (ingredients.length === inProgMeals[recipeId]?.length) return false;
    return true;
  };

  const handleFinishRecipe = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
    history.push('/done-recipes');
  };

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

      <span>
        <BtnShare />
        <BtnFavorite recipeObj={ NewFavoriteRecipeObj('food') } />
      </span>

      <span data-testid="recipe-category">{strCategory}</span>

      <FoodIngredientsWithCheckboxes recipeId={ recipeId } />

      <span data-testid="instructions">{strInstructions}</span>

      {pathname === `/foods/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedDrinksCarousel />
      {/* <BtnFinish /> */}
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ handleDisabled() }
        onClick={ handleFinishRecipe }
      >
        Finalizar receita
      </button>
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
