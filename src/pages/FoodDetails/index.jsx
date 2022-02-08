import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendedDrinksCarousel from '../../components/RecommendedDrinksCarousel';
import GlobalContext from '../../Context/GlobalContext';
import formatIngredientList from '../../helpers/formatIngredientList';
import NewFavoriteRecipeObj from '../../helpers/NewFavoriteRecipeObj';
import { fetchDrinks } from '../../services/fetchDrinks';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';
import BtnStart from '../../components/BtnStart';
import BtnShare from '../../components/BtnShare';
import BtnFavorite from '../../components/BtnFavorite';
import { SdivDetails, Simg, Stitle, Sicons } from '../../style/Details';

function FoodDetails(props) {
  const { foodDetails: { details } } = useContext(GlobalContext);
  const { foodDetails: { setDetails } } = useContext(GlobalContext);
  const { foodDetails: { setIngredients } } = useContext(GlobalContext);
  const { foodDetails: { ingredients } } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
  // =================== drinkRecommendations ================
  const { foodDetails: { setDrinkRecommendations } } = useContext(GlobalContext);
  // =================== routes ==============================
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    fetchFoodsDetailsForRecipeId(recipeId)
      .then(({ meals }) => {
        setDetails(meals[0]);
        const ingAndMeasure = formatIngredientList(meals[0]);
        setIngredients(ingAndMeasure);
      })
      .catch((error) => (console.error(error)));
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
    <SdivDetails>
      <Simg
        src={ details?.strMealThumb }
        data-testid="recipe-photo"
        alt="x"
        className="recipe-details-img"
      />

      <Stitle data-testid="recipe-title">{strMeal !== undefined && strMeal}</Stitle>

      <Sicons>
        <BtnShare />
        <BtnFavorite recipeObj={ NewFavoriteRecipeObj('food') } />
      </Sicons>

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

      <div className="instructions-div">
        <span data-testid="instructions">{strInstructions}</span>
      </div>

      {pathname === `/foods/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedDrinksCarousel />
      <BtnStart />
    </SdivDetails>
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
