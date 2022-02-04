import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendedFoodsCarousel from '../../components/RecommendedFoodsCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import { fetchDrinkDetailsForRecipeId } from '../../services/fetchDrinks';
import { fetchFoods } from '../../services/fetchFoods';

function DrinkInProgress(props) {
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

  useEffect(() => {
    fetchDrinkDetailsForRecipeId(recipeId)
      .then(({ drinks }) => {
        setDrinkDetails(drinks[0]);
        console.log(drinks[0]);
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
      <h1>DrinkInProgress</h1>
      <p>{pathname}</p>
      <p>{recipeId}</p>

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

      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>

      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>

      <span data-testid="recipe-category">{strAlcoholic}</span>

      {drinkIngredients !== undefined && (
        <ol>
          {drinkIngredients.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <input type="checkbox" name={ item } id={ item } />
              {item}
            </li>
          ))}
        </ol>
      )}

      <span data-testid="instructions">{strInstructions}</span>

      {pathname === `/drinks/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedFoodsCarousel />

      <button type="button" data-testid="finish-recipe-btn">
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
