import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';

function DrinkIngredientsWithCheckboxes(props) {
  const { recipeId } = props;
  const { inProgressRecipes: { setInProgCocktails } } = useContext(GlobalContext);
  const { inProgressRecipes: { cocktails: inProgCocktails } } = useContext(GlobalContext);
  const { drinkDetails: { ingredients } } = useContext(GlobalContext);

  const handleInProgressArray = (ingrNumber) => {
    if (inProgCocktails[recipeId] !== undefined) {
      if (inProgCocktails[recipeId].some((number) => number === ingrNumber)) {
        const filteredIngredients = [...inProgCocktails[recipeId]
          .filter((number) => number !== ingrNumber)];
        return filteredIngredients;
      }
      const addNewIngredient = [...inProgCocktails[recipeId], ingrNumber];
      const newUsedIngredients = [...addNewIngredient.sort((a, b) => a - b)];
      return newUsedIngredients;
    }
    return [ingrNumber];
  };

  const saveToGlobalProvider = (recipeId_, ingredientsArray_) => {
    const newDrinksObj = {
      [recipeId_]: ingredientsArray_,
    };
    console.log('saveToGlobalProvider Test', newDrinksObj);
    setInProgCocktails(newDrinksObj);
  };

  const handleOnChange = (event) => {
    const ingredientNumber = (Number(event.target.value) + 1);
    console.log('ingredientNumber');
    const ingredientsArray = handleInProgressArray(ingredientNumber);
    saveToGlobalProvider(recipeId, ingredientsArray);
  };

  const handleCheckedBoxes = (index_) => {
    if (inProgCocktails[recipeId] !== undefined) {
      return inProgCocktails[recipeId]
        .some((ingNumb) => ingNumb === (index_ + 1));
    }
    return false;
  };

  return (
    <div>
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
                onChange={ handleOnChange }
              />
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

DrinkIngredientsWithCheckboxes.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default DrinkIngredientsWithCheckboxes;
