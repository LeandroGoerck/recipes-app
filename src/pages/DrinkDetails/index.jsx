import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendedFoodsCarousel from '../../components/RecommendedFoodsCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import NewFavoriteRecipeObj from '../../helpers/NewFavoriteRecipeObj';
import { fetchDrinkDetailsForRecipeId } from '../../services/fetchDrinks';
import { fetchFoods } from '../../services/fetchFoods';
import BtnStart from '../../components/BtnStart';
import BtnFavorite from '../../components/BtnFavorite';
import BtnShare from '../../components/BtnShare';

function DrinksDetails(props) {
  const { drinkDetails: { drinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkIngredients } } = useContext(GlobalContext);
  const { drinkDetails: { drinkIngredients } } = useContext(GlobalContext);
  const { strDrink, strAlcoholic, strInstructions } = drinkDetails;
  // =================== mealRecommendations ================
  const { drinkDetails: { setMealRecommendations } } = useContext(GlobalContext);
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();

  const [getLocal, setGetLocal] = useState([]);

  useEffect(() => {
    setGetLocal(JSON.parse(localStorage.getItem('startRecipes')));
  }, []);

  useEffect(() => {
    fetchDrinkDetailsForRecipeId(recipeId)
      .then(({ drinks }) => {
        setDrinkDetails(drinks[0]);
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

  return (
    <div>
      <h1>DrinksDetails</h1>

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

      {drinkIngredients !== undefined && (
        <ul>
          {drinkIngredients.map((item, index) => (
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

      {pathname === `/drinks/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedFoodsCarousel />
      <BtnStart getLocal={ getLocal } />
    </div>
  );
}

DrinksDetails.defaultProps = {
  match: true,
};

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }),
};

export default DrinksDetails;
