import { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';

const NewFavoriteRecipeObj = (drinkOrFood) => {
  const { foodDetails: { details } } = useContext(GlobalContext);
  const { drinkDetails: { drinkDetails } } = useContext(GlobalContext);
  if (drinkOrFood === 'drink') {
    const newRecipeObj = {
      id: drinkDetails?.idDrink,
      type: 'drink',
      nationality: '',
      category: drinkDetails?.strCategory,
      alcoholicOrNot: drinkDetails?.strAlcoholic,
      name: drinkDetails?.strDrink,
      image: drinkDetails?.strDrinkThumb,
    };
    return newRecipeObj;
  }

  if (drinkOrFood === 'food') {
    const newRecipeObj = {
      id: details?.idMeal,
      type: 'food',
      nationality: details?.strArea,
      category: details?.strCategory,
      alcoholicOrNot: '',
      name: details?.strMeal,
      image: details?.strMealThumb,
    };
    return newRecipeObj;
  }
};

export default NewFavoriteRecipeObj;
