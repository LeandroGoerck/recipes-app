import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';
import '../../style/style.css';

function FoodIngredientsWithCheckboxes(props) {
  const { recipeId } = props;

  const {
    inProgressRecipes: { setInProgMeals },
    inProgressRecipes: { meals: inProgMeals },
    foodDetails: { ingredients },
  } = useContext(GlobalContext);

  const handleInProgressArray = (ingrNumber) => {
    if (inProgMeals[recipeId] !== undefined) {
      if (inProgMeals[recipeId].some((number) => number === ingrNumber)) {
        const filteredIngredients = [...inProgMeals[recipeId]
          .filter((number) => number !== ingrNumber)];
        return filteredIngredients;
      }
      const addNewIngredient = [...inProgMeals[recipeId], ingrNumber];
      const newUsedIngredients = [...addNewIngredient.sort((a, b) => a - b)];
      return newUsedIngredients;
    }
    return [ingrNumber];
  };

  const saveToGlobalProvider = (recipeId_, ingredientsArray_) => {
    const newMealsObj = {
      [recipeId_]: ingredientsArray_,
    };
    setInProgMeals(newMealsObj);
  };

  const handleOnChange = (event) => {
    const ingredientNumber = (Number(event.target.value) + 1);
    const ingredientsArray = handleInProgressArray(ingredientNumber);
    saveToGlobalProvider(recipeId, ingredientsArray);
  };

  const handleCheckedBoxes = (index_) => {
    if (inProgMeals[recipeId] !== undefined) {
      return inProgMeals[recipeId]
        .some((ingNumb) => ingNumb === (index_ + 1));
    }
    return false;
  };

  return (
    <div className="container-ingredients">
      {ingredients !== undefined && (
        <ol className="ingredients-list">
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

FoodIngredientsWithCheckboxes.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default FoodIngredientsWithCheckboxes;
