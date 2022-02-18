import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import '../../style/style.css';
import styled from 'styled-components';
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
import ButtonBack from '../../components/BtnBack';

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
  // const [doneRecipe, setDoneRecipe] = useState([]);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchFoodsDetailsForRecipeId(recipeId)
      .then(({ meals }) => {
        setDetails(meals[0]);
        const ingAndMeasure = formatIngredientList(meals[0]);
        setIngredients(ingAndMeasure);
      })
      .catch((error) => (error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const saveInProgressRecipesProviderToLocalStorage = () => {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    };
    saveInProgressRecipesProviderToLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inProgMeals[recipeId]]);

  const handleDisabled = () => {
    if (ingredients.length === inProgMeals[recipeId]?.length) return false;
    return true;
  };

  const Simg = styled.img`
    width: 100vw;
    height: 55vh;
  `;

  return (
    <div>
      <Simg
        src={ details?.strMealThumb }
        data-testid="recipe-photo"
        alt="Image food"
      />

      <span
        data-testid="recipe-title"
        className="title-recipes"
      >
        {strMeal !== undefined && strMeal}
      </span>

      <span className="container-button">
        <ButtonBack />
        <BtnShare />
        <BtnFavorite recipeObj={ NewFavoriteRecipeObj('food') } />
      </span>
      <hr className="line-separation" />

      <span
        data-testid="recipe-category"
        className="category-name"
      >
        Catergory:
        <p className="name-category">
          {strCategory}
        </p>
      </span>
      <hr className="line-separation" />

      <h2 className="sub-title">Ingredients</h2>
      <FoodIngredientsWithCheckboxes recipeId={ recipeId } />

      <h2 className="sub-title">Instructions</h2>
      <div
        data-testid="instructions"
        className="instructions-container"
      >
        {strInstructions}
      </div>

      <h2 className="sub-title">Recommendations</h2>
      {pathname === `/foods/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <div className="carousel-container">
        <RecommendedDrinksCarousel />
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="btn-finish"
        disabled={ handleDisabled() }
        onClick={ () => history.goBack() }
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
