import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BtnFavorite from '../../components/BtnFavorite';
import BtnShare from '../../components/BtnShare';
// import BtnFinish from '../../components/BtnFinish';
import DrinkIngredientsWithCheckboxes
from '../../components/DrinkIngredientsWithCheckboxes';
import RecommendedFoodsCarousel from '../../components/RecommendedFoodsCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import NewFavoriteRecipeObj from '../../helpers/NewFavoriteRecipeObj';
import { fetchDrinkDetailsForRecipeId } from '../../services/fetchDrinks';
import { fetchFoods } from '../../services/fetchFoods';

function DrinkInProgress(props) {
  const { drinkDetails: { drinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkIngredients } } = useContext(GlobalContext);
  const { drinkDetails: { drinkIngredients } } = useContext(GlobalContext);
  const { strDrink, strAlcoholic, strInstructions } = drinkDetails;
  // =================== inProgressRecipes ============
  const { inProgressRecipes: { setInProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes: { setInProgCocktails } } = useContext(GlobalContext);
  const { inProgressRecipes: { cocktails: inProgCocktails } } = useContext(GlobalContext);
  const { inProgressRecipes } = useContext(GlobalContext);
  // =================== mealRecommendations ================
  const { drinkDetails: { setMealRecommendations } } = useContext(GlobalContext);
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();
  const history = useHistory();
  const [doneRecipe, setDoneRecipe] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes')) {
      const localStorageData = localStorage.getItem('inProgressRecipes');
      const parsedData = JSON.parse(localStorageData);
      const inProgressRecipeMeals = parsedData.meals;
      const inProgressRecipeCocktails = parsedData.cocktails;
      setInProgMeals(inProgressRecipeMeals);
      setInProgCocktails(inProgressRecipeCocktails);
    }
    const catchDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipe([...catchDoneRecipes, {
      id: drinkDetails.idDrink,
      type: 'drink',
      nationality: drinkDetails.strArea,
      category: drinkDetails.strCategory,
      alcoholicOrNot: drinkDetails.strAlcoholic,
      name: strDrink,
      image: drinkDetails.strDrinkThumb,
      doneDate: '09/02/2022',
      tags: [drinkDetails.strTags],
    }]);
  }, []);

  useEffect(() => {
    fetchDrinkDetailsForRecipeId(recipeId)
      .then(({ drinks }) => {
        setDrinkDetails(drinks[0]);
        // console.log(drinks[0]);
        const ingAndMeasure = formatIngredientList(drinks[0]);
        setDrinkIngredients(ingAndMeasure);
      })
      .catch((error) => (console.log(error)));

    fetchFoods()
      .then(({ meals }) => {
        const MAX_MEALS = 6;
        if (meals.length > MAX_MEALS) {
          const newMeals = [...meals];
          const firstSixMeals = newMeals.splice(0, MAX_MEALS);
          setMealRecommendations(firstSixMeals);
        } else {
          setMealRecommendations(meals);
        }
      });
  }, []);

  useEffect(() => {
    const saveInProgressRecipesProviderToLocalStorage = () => {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    };
    saveInProgressRecipesProviderToLocalStorage();
  }, [inProgCocktails[recipeId]]);

  const handleDisabled = () => {
    if (drinkIngredients.length === inProgCocktails[recipeId]?.length) return false;
    return true;
  };

  const handleFinishRecipe = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
    history.push('/done-recipes');
  };

  return (
    <div>
      {console.log(drinkDetails)}
      <h1>DrinkInProgress</h1>
      <img
        style={ { width: 100, display: 'flex', flexDirection: 'row' } }
        src={ drinkDetails?.strDrinkThumb }
        data-testid="recipe-photo"
        alt="x"
      />

      <span
        data-testid="recipe-title"
      >
        {strDrink !== undefined && strDrink}
      </span>
      <span>
        <BtnShare />
        <BtnFavorite recipeObj={ NewFavoriteRecipeObj('drink') } />
      </span>
      <span data-testid="recipe-category">{strAlcoholic}</span>
      <DrinkIngredientsWithCheckboxes recipeId={ recipeId } />
      <span data-testid="instructions">{strInstructions}</span>
      {pathname === `/drinks/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedFoodsCarousel />
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

DrinkInProgress.defaultProps = {
  match: true,
};

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }),
};

export default DrinkInProgress;
