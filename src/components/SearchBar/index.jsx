import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import globalContext from '../../Context/globalContext';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';
import InputGeneric from '../../subcomponents/InputGeneric';
import {
  fetchFoodsForIngredients,
  fetchFoodsForName,
  fetchFoodsForFirstLetter,
} from '../../services/fetchFoods';
import {
  fetchDrinksForIngredients,
  fetchDrinksForName,
  fetchDrinksForFirstLetter,
} from '../../services/fetchDrinks';

function SearchBar() {
  const { location: { pathname } } = useHistory();
  const { searchBar: { displayInputSearch } } = useContext(globalContext);
  const [radioValue, setRadioValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleRadioChange = ({ target }) => {
    setRadioValue(target.value);
  };

  const searchFoodForFilter = (filter) => {
    if (filter === 'ingredient') {
      fetchFoodsForIngredients(inputValue)
        .then(({ meals }) => console.log(meals));
    }
    if (filter === 'name') {
      fetchFoodsForName(inputValue)
        .then(({ meals }) => console.log(meals));
    }
    if (filter === 'first-letter') {
      if (inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      fetchFoodsForFirstLetter(inputValue)
        .then(({ meals }) => console.log(meals));
    }
  };

  const searchDrinksForFilter = (filter) => {
    if (filter === 'ingredient') {
      fetchDrinksForIngredients(inputValue)
        .then(({ drinks }) => console.log(drinks));
    }
    if (filter === 'name') {
      fetchDrinksForName(inputValue)
        .then(({ drinks }) => console.log(drinks));
    }
    if (filter === 'first-letter') {
      if (inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      fetchDrinksForFirstLetter(inputValue)
        .then(({ drinks }) => console.log(drinks));
    }
  };

  const handleClick = () => {
    if (pathname === '/foods') {
      searchFoodForFilter(radioValue);
    }
    if (pathname === '/drinks') {
      searchDrinksForFilter(radioValue);
    }
  };

  return (
    <section>
      {displayInputSearch !== false && (
        <InputGeneric
          TestId="search-input"
          Value={ inputValue }
          ChangeEvent={ handleInputChange }
          Placeholder="Search Recipe"
        />
      )}
      <InputGeneric
        Type="radio"
        TestId="ingredient-search-radio"
        Label="Ingredient"
        Name="filterRadio"
        Value="ingredient"
        ChangeEvent={ handleRadioChange }
      />
      <InputGeneric
        Type="radio"
        TestId="name-search-radio"
        Label="Name"
        Name="filterRadio"
        Value="name"
        ChangeEvent={ handleRadioChange }
      />
      <InputGeneric
        Type="radio"
        TestId="first-letter-search-radio"
        Label="First letter"
        Name="filterRadio"
        Value="first-letter"
        ChangeEvent={ handleRadioChange }
      />
      <ButtonGeneric TestId="exec-search-btn" Text="Search" ClickEvent={ handleClick } />
    </section>
  );
}

export default SearchBar;
