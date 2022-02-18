import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
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
import { SdivDetails, Simg, Stitle, Sicons } from '../../style/Details';
import BtnBack from '../../components/BtnBack';

function DrinksDetails(props) {
  const { drinkDetails: { drinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkIngredients } } = useContext(GlobalContext);
  const { drinkDetails: { drinkIngredients } } = useContext(GlobalContext);
  const { strDrink, strAlcoholic, strInstructions } = drinkDetails;
  // =================== mealRecommendations ================
  const { drinkDetails: { setMealRecommendations },
    startButton: { getLocal, setGetLocal },
  } = useContext(GlobalContext);
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    if (getLocal.length !== 0) {
      setGetLocal(JSON.parse(localStorage.getItem('startRecipes')));
    }
  }, [getLocal]);

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
    <SdivDetails>
      <Simg
        src={ drinkDetails?.strDrinkThumb }
        data-testid="recipe-photo"
        alt="x"
      />

      <Stitle
        data-testid="recipe-title"
      >
        {strDrink !== undefined && strDrink}
      </Stitle>

      <Sicons>
        <BtnBack />
        <BtnShare />
        <BtnFavorite recipeObj={ NewFavoriteRecipeObj('drink') } />
      </Sicons>

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

      <div className="instructions-div">
        <span data-testid="instructions">{strInstructions}</span>
      </div>

      {pathname === `/drinks/${recipeId}` && (
        <iframe title="frametitle" data-testid="video">
          Video
        </iframe>
      )}

      <RecommendedFoodsCarousel />
      <BtnStart getLocal={ getLocal } />
    </SdivDetails>
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
