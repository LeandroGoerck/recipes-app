import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import { fetchFoodsDetailsForRecipeId } from '../../services/fetchFoods';

function FoodDetails(props) {
  const { foodDetails: { setDetails } } = useContext(GlobalContext);
  const { foodDetails: { setIngredients } } = useContext(GlobalContext);
  const { foodDetails: { ingredients } } = useContext(GlobalContext);
  const { match } = props;
  const { params } = match;
  const { recipeId } = params;
  const { location: { pathname } } = useHistory();

  const formatIngredientList = (data) => {
    const ingredientKeys = Object
      .keys(data[0]).filter((item) => item?.includes('strIngredient'));
    const measureKeys = Object
      .keys(data[0]).filter((item) => item?.includes('strMeasure'));

    const ingredientsValues = ingredientKeys?.map((key) => (data[0][key]))
      .filter((item) => item !== '');

    const measureValues = measureKeys?.map((key) => (data[0][key]))
      .filter((item) => item !== '');

    const ingAndMeasure = ingredientsValues
      .map((ingr, index) => (`${[ingr]} - ${measureValues[index]}`));
    return ingAndMeasure;
  };

  useEffect(() => {
    const TEST_NUMBER = 52977;
    fetchFoodsDetailsForRecipeId(TEST_NUMBER)
      .then(({ meals }) => {
        setDetails(meals);
        const ingAndMeasure = formatIngredientList(meals);
        setIngredients(ingAndMeasure);
      });
  }, []);

  return (
    <div>
      <h1>FoodDetails</h1>
      <p>{pathname}</p>
      <p>{recipeId}</p>
      <img data-testid="recipe-photo" alt="x" />
      <span data-testid="recipe-title" />
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <span data-testid="recipe-category" />
      {ingredients !== undefined && (
        <ul>
          {ingredients.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${'index'}-ingredient-name-and-measure` }
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <span data-testid={ `${'index'}-ingredient-name-and-measure` } />
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

// function PhotoVideoComp(){
//   return(
//      props.match.params.videoId === 'video' ? VideoComp:PhotoComp
//   )

//   }
// export default PhotoVideoComp

// componentDidMount() {
//   const { match } = this.props;
//   const { id } = match.params;
//   getMusics(id).then((music) => {
//     this.setState({ musics: music });
//   });
//   getFavoriteSongs()
//     .then((favMusics) => {
//       this.setState({ favoriteMusics: favMusics });
//     });
// }

// A foto deve possuir o atributo data-testid="recipe-photo";
// O título deve possuir o atributo data-testid="recipe-title";
// O botão de compartilhar deve possuir o atributo data-testid="share-btn";
// O botão de favoritar deve possuir o atributo data-testid="favorite-btn";
// O texto da categoria deve possuir o atributo data-testid="recipe-category";
// Os ingredientes devem possuir o atributo data-testid="${index}-ingredient-name-and-measure";
// O texto de instruções deve possuir o atributo data-testid="instructions";
// O vídeo, presente somente na tela de comidas, deve possuir o atributo data-testid="video";
// O card de receitas recomendadas deve possuir o atributo data-testid="${index}-recomendation-card";
// O botão de iniciar receita deve possuir o atributo data-testid="start-recipe-btn";
