import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import { fetchDrinkDetailsForRecipeId } from '../../services/fetchDrinks';
import { fetchFoodsForName } from '../../services/fetchFoods';

function DrinksDetails(props) {
  const { drinkDetails: { drinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkDetails } } = useContext(GlobalContext);
  const { drinkDetails: { setDrinkIngredients } } = useContext(GlobalContext);
  const { drinkDetails: { drinkIngredients } } = useContext(GlobalContext);
  const { strDrink, strAlcoholic, strInstructions } = drinkDetails;
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();

  const formatIngredientList = (data) => {
    const ingredientKeys = Object
      .keys(data).filter((item) => item?.includes('strIngredient'));
    const measureKeys = Object
      .keys(data).filter((item) => item?.includes('strMeasure'));

    const ingredientsValues = ingredientKeys?.map((key) => (data[key]))
      .filter((item) => item !== '');

    const measureValues = measureKeys?.map((key) => (data[key]))
      .filter((item) => item !== '');

    const ingAndMeasure = ingredientsValues
      .map((ingr, index) => (`${[ingr]} - ${measureValues[index]}`));
    return ingAndMeasure;
  };

  useEffect(() => {
    fetchDrinkDetailsForRecipeId(recipeId)
      .then(({ drinks }) => {
        setDrinkDetails(drinks[0]);
        const ingAndMeasure = formatIngredientList(drinks[0]);
        setDrinkIngredients(ingAndMeasure);
      });
  }, []);

  useEffect(() => {
    fetchFoodsForName('')
      .then(({ meals }) => {
        console.log(meals);
      });
  }, []);

  const testArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  console.log(testArray);
  return (
    <div>
      <h1>DrinksDetails</h1>
      <p>{pathname}</p>
      <p>{recipeId}</p>

      <img data-testid="recipe-photo" alt="x" />

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

      {pathname === `/drinks/${recipeId}` && (<iFrame data-testid="video">Video</iFrame>)}

      <div data-testid="0-recomendation-card">Recomendations</div>

      <button type="button" data-testid="start-recipe-btn">
        Iniciar receita
      </button>
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
