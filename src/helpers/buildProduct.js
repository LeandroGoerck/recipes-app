const buildProduct = (type, payload) => {
  if (type === 'foods') {
    return {
      id,
      type: 'food',
      nationality: payload.strArea,
      category: payload.strCategory,
      alcoholicOrNot: '',
      name: payload.strMeal,
      image: payload.strMealThumb,
    };
  }
  return {
    id,
    type: 'drink',
    nationality: '',
    category: payload.strCategory,
    alcoholicOrNot: payload.strAlcoholic,
    name: payload.strDrink,
    image: payload.strDrinkThumb,
  };
};

export default buildProduct;
