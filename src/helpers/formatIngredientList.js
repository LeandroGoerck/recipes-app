const formatIngredientList = (data) => {
  const ingredientKeys = Object
    .keys(data).filter((item) => item.includes('strIngredient'));
  const measureKeys = Object
    .keys(data).filter((item) => item.includes('strMeasure'));

  const ingredientsValues = ingredientKeys.map((key) => (data[key]))
    .filter((item) => item !== '' && item !== null);

  const measureValues = measureKeys.map((key) => (data[key]))
    .filter((item) => item !== '' && item !== null);

  const ingAndMeasure = ingredientsValues
    .map((ingr, index) => (`${[ingr]} - ${measureValues[index]}`));
  return ingAndMeasure;
};

export default formatIngredientList;
