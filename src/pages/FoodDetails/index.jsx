import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendedDrinksCarousel from '../../components/RecommendedDrinksCarousel';
import GlobalContext from '../../Context/GlobalContext';
import { fetchDrinks } from '../../services/fetchDrinks';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';
import BtnStart from '../../components/BtnStart';
import BtnShare from '../../components/BtnShare';
import BtnFavorite from '../../components/BtnFavorite';

function FoodDetails(props) {
  const {
    foodDetails: { details,
      setDetails,
      setIngredients,
      ingredients,
      setDrinkRecommendations,
    } } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
  // =================== routes ==============================
  const { match: { params: { recipeId } } } = props;
  const { location: { pathname } } = useHistory();

  const [getLocal, setGetLocal] = useState([]);

  const formatIngredientList = (data) => {
    const ingredientKeys = Object
      .keys(data).filter((item) => item.includes('strIngredient'));
    const measureKeys = Object
      .keys(data).filter((item) => item.includes('strMeasure'));

    const ingredientsValues = ingredientKeys.map((key) => (data[key]))
      .filter((item) => item !== '');

    const measureValues = measureKeys.map((key) => (data[key]))
      .filter((item) => item !== '');

    const ingAndMeasure = ingredientsValues
      .map((ingr, index) => (`${[ingr]} - ${measureValues[index]}`));
    return ingAndMeasure;
  };

  useEffect(() => {
    setGetLocal(JSON.parse(localStorage.getItem('startRecipes')));
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
      <BtnStart getLocal={ getLocal } />
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
