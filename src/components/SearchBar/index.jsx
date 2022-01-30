import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
import { Sinput, SdivSearch } from '../../style/SearchBar';
import GlobalContext from '../../Context/GlobalContext';

function SearchBar() {
  const { location: { pathname } } = useHistory();
  const history = useHistory();
  const [radioValue, setRadioValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { recipesList } = useContext(GlobalContext);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleRadioChange = ({ target }) => {
    setRadioValue(target.value);
  };

  const handleConditions = (listArray, option) => {
    const LIST_LIMIT = 12;
    console.log(listArray);
    if (listArray !== null && listArray.length === 1) {
      if (option === 'meals') {
        history.push(`/foods/${listArray[0].idMeal}`);
      } else if (option === 'drinks') {
        history.push(`/drinks/${listArray[0].idDrink}`);
      }
    }
    if (listArray !== null && listArray.length <= LIST_LIMIT) {
      return listArray;
    } if (listArray !== null && listArray.length > LIST_LIMIT) {
      return listArray.slice(0, LIST_LIMIT);
    }
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return [];
  };

  const searchFoodForFilter = (filter) => {
    if (filter === 'ingredient') {
      fetchFoodsForIngredients(inputValue)
        .then(({ meals }) => recipesList.setMeals(handleConditions(meals, 'meals')));
    }
    if (filter === 'name') {
      fetchFoodsForName(inputValue)
        .then(({ meals }) => recipesList.setMeals(handleConditions(meals, 'meals')));
    }
    if (filter === 'first-letter') {
      if (inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      fetchFoodsForFirstLetter(inputValue)
        .then(({ meals }) => recipesList.setMeals(handleConditions(meals, 'meals')));
    }
  };

  const searchDrinksForFilter = (filter) => {
    if (filter === 'ingredient') {
      fetchDrinksForIngredients(inputValue)
        .then(({ drinks }) => recipesList.setDrinks(handleConditions(drinks, 'drinks')));
    }
    if (filter === 'name') {
      fetchDrinksForName(inputValue)
        .then(({ drinks }) => recipesList.setDrinks(handleConditions(drinks, 'drinks')));
    }
    if (filter === 'first-letter') {
      if (inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      fetchDrinksForFirstLetter(inputValue)
        .then(({ drinks }) => recipesList.setDrinks(handleConditions(drinks, 'drinks')));
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
    <>
      <SdivSearch>
        <Sinput
          data-testid="search-input"
          value={ inputValue }
          onChange={ handleInputChange }
          placeholder="Search Recipe"
        />
        <ButtonGeneric
          TestId="exec-search-btn"
          Text="Search"
          ClickEvent={ handleClick }
        />
      </SdivSearch>
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
    </>
  );
}

export default SearchBar;
