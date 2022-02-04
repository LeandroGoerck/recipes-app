import React from 'react';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';

function ButtonFilters() {
  return (
    <div>
      <ButtonGeneric TestId="filter-by-all-btn">All</ButtonGeneric>
      <ButtonGeneric TestId="filter-by-food-btn">Food</ButtonGeneric>
      <ButtonGeneric TestId="filter-by-drink-btn">Drinks</ButtonGeneric>
    </div>
  );
}

export default ButtonFilters;
