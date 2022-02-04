import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendedDrinksCarousel from '../../components/RecommendedDrinksCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import { fetchDrinks } from '../../services/fetchDrinks';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';
import BtnStart from '../../components/BtnStart';
import BtnShare from '../../components/BtnShare';
import BtnFavorite from '../../components/BtnFavorite';

function FoodDetails(props) {
  const { foodDetails: { details } } = useContext(GlobalContext);
  const { foodDetails: { setDetails } } = useContext(GlobalContext);
  const { foodDetails: { setIngredients } } = useContext(GlobalContext);
  const { foodDetails: { ingredients } } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
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
    console.log(recipeId);
    console.log('fetchFoodsDetailsForRecipeId', recipeId);
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

  return (
    <div>
      <h1>FoodDetails</h1>
      <img
        style={ { width: 100, display: 'flex', flexDirection: 'row' } }
        src={ details?.strMealThumb }
        data-testid="recipe-photo"
        alt="x"
      />

      <span data-testid="recipe-title">{strMeal !== undefined && strMeal}</span>

      <span>
        <BtnShare />
        <BtnFavorite />
      </span>

      <span data-testid="recipe-category">{strCategory}</span>

      {ingredients !== undefined && (
        <ul>
          {ingredients.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <span data-testid="instructions">{strInstructions}</span>

      {pathname === `/foods/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedDrinksCarousel />
      <BtnStart />
    </div>
  );
}

FoodDetails.defaultProps = {
  match: true,
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }),
};

export default FoodDetails;
