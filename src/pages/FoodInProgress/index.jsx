import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendedDrinksCarousel from '../../components/RecommendedDrinksCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import { fetchDrinks } from '../../services/fetchDrinks';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';

function FoodInProgress(props) {
  const { foodDetails: { details } } = useContext(GlobalContext);
  const { foodDetails: { setDetails } } = useContext(GlobalContext);
  const { foodDetails: { setIngredients } } = useContext(GlobalContext);
  const { foodDetails: { ingredients } } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
  // =================== inProgressRecipes ============
  // const [usedIngredients, setUsedIngredients] = useState([]);
  const { inProgressRecipes: { setInProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes: { setInProgCocktails } } = useContext(GlobalContext);
  const { inProgressRecipes: { meals: inProgMeals } } = useContext(GlobalContext);
  const { inProgressRecipes } = useContext(GlobalContext);
  // const [canSaveToLocalStore, setCanSaveToLocalStore] = useState(false);
  // =================== drinkRecommendations ================
  // const { foodDetails: { drinkRecommendations } } = useContext(GlobalContext);
  const { foodDetails: { setDrinkRecommendations } } = useContext(GlobalContext);
  // const { strDrink } = drinkRecommendations;
  // =================== routes ==============================
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    // console.log('reading from localStorage');
    if (localStorage.getItem('inProgressRecipes')) {
      const localStorageData = localStorage.getItem('inProgressRecipes');
      const parsedData = JSON.parse(localStorageData);
      const inProgressRecipeMeals = parsedData.meals;
      const inProgressRecipeCocktails = parsedData.cocktails;
      setInProgMeals(inProgressRecipeMeals);
      setInProgCocktails(inProgressRecipeCocktails);
      // console.log(inProgressRecipeMeals);
      // console.log(inProgressRecipeCocktails);
    }
  }, []);

  useEffect(() => {
    // console.log(recipeId);
    // console.log('fetchFoodsDetailsForRecipeId', recipeId);
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

  const handleInProgressArray = (ingrNumber) => {
    if (inProgMeals[recipeId] !== undefined) {
      if (inProgMeals[recipeId].some((number) => number === ingrNumber)) {
        const filteredIngredients = [...inProgMeals[recipeId]
          .filter((number) => number !== ingrNumber)];
        // setUsedIngredients(() => filteredIngredients);
        return filteredIngredients;
      }
      const addNewIngredient = [...inProgMeals[recipeId], ingrNumber];
      const newUsedIngredients = [...addNewIngredient.sort((a, b) => a - b)];
      // setUsedIngredients(() => newUsedIngredients);
      return newUsedIngredients;
    }
    return [ingrNumber];
  };

  const saveToGlobalProvider = (recipeId_, ingredientsArray_) => {
    const newMealsObj = {
      [recipeId_]: ingredientsArray_,
    };
    console.log('saveToGlobalProvider Test', newMealsObj);
    setInProgMeals(newMealsObj);
  };

  useEffect(() => {
    const saveInProgressRecipesProviderToLocalStorage = () => {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    };
    saveInProgressRecipesProviderToLocalStorage();
  }, [inProgMeals[recipeId]]);

  const hangleOnChange = (event) => {
    const ingredientNumber = (Number(event.target.value) + 1);
    const ingredientsArray = handleInProgressArray(ingredientNumber);
    saveToGlobalProvider(recipeId, ingredientsArray);
  };

  const handleCheckedBoxes = (index_) => {
    if (inProgMeals[recipeId] !== undefined) {
      return inProgMeals[recipeId]
        .some((ingNumb) => ingNumb === (index_ + 1));
    }
    return false;
  };

  return (
    <div>
      <h1>FoodDetails</h1>
      <p>{pathname}</p>
      <p>{recipeId}</p>

      <img
        style={ { width: 100, display: 'flex', flexDirection: 'row' } }
        src={ details?.strMealThumb }
        data-testid="recipe-photo"
        alt="x"
      />

      <span data-testid="recipe-title">{strMeal !== undefined && strMeal}</span>

      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>

      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>

      <span data-testid="recipe-category">{strCategory}</span>

      {ingredients !== undefined && (
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
      )}

      <span data-testid="instructions">{strInstructions}</span>

      {pathname === `/foods/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedDrinksCarousel />

      <button type="button" data-testid="finish-recipe-btn">
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
