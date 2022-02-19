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
import BtnBack from '../../components/BtnBack';
import { SdivDetails, Simg, Stitle, Sicons } from '../../style/Details';

function FoodDetails(props) {
  const {
    foodDetails: { details,
      setDetails,
      setIngredients,
      ingredients,
      setDrinkRecommendations,
    },
    startButton: { getLocal, setGetLocal },
  } = useContext(GlobalContext);
  const { strMeal, strCategory, strInstructions } = details;
  // =================== routes ==============================
  const { match: { params: { recipeId } } } = props;
  const { location: { pathname } } = useHistory();

  // Lógica construida com ajuda do grupo 8
  const createEmbedYouTubeURL = (url) => {
    const videoId = url.split('https://www.youtube.com/watch?v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    if (getLocal.length !== 0) {
      setGetLocal(JSON.parse(localStorage.getItem('startRecipes')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLocal]);

  useEffect(() => {
    fetchFoodsDetailsForRecipeId(recipeId)
      .then(({ meals }) => {
        setDetails(meals[0]);
        const ingAndMeasure = formatIngredientList(meals[0]);
        setIngredients(ingAndMeasure);
      })
      .catch((error) => (console.error(error)));
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
        <BtnBack />
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

      {pathname === `/foods/${recipeId}` && details.strYoutube && (
        <iframe
          width="340"
          height="200"
          title="frametitle"
          data-testid="video"
          src={ createEmbedYouTubeURL(details.strYoutube) }
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
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
