import React, { useState, useContext, useEffect } from 'react';
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

  const searchFoodForFilter = (filter) => {
    if (filter === 'ingredient') {
      fetchFoodsForIngredients(inputValue)
        .then(({ meals }) => {
          console.log(meals);
          recipesList.setMeals(meals);
        });
    }
    if (filter === 'name') {
      fetchFoodsForName(inputValue)
        .then(({ meals }) => {
          console.log(meals);
          recipesList.setMeals(meals);
        });
    }
    if (filter === 'first-letter') {
      if (inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      fetchFoodsForFirstLetter(inputValue)
        .then(({ meals }) => {
          console.log(meals);
          recipesList.setMeals(meals);
        });
    }
  };

  const searchDrinksForFilter = (filter) => {
    if (filter === 'ingredient') {
      fetchDrinksForIngredients(inputValue)
        .then(({ drinks }) => {
          console.log(drinks);
          recipesList.setDrinks(drinks);
        });
    }
    if (filter === 'name') {
      fetchDrinksForName(inputValue)
        .then(({ drinks }) => {
          console.log(drinks);
          recipesList.setDrinks(drinks);
        });
    }
    if (filter === 'first-letter') {
      if (inputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      fetchDrinksForFirstLetter(inputValue)
        .then(({ drinks }) => {
          console.log(drinks);
          recipesList.setDrinks(drinks);
        });
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

  useEffect(() => {
    const handleRedirectToMealDetails = () => {
      if (recipesList.meals !== [] && recipesList.meals.length === 1) {
        history.push(`/foods/${recipesList.meals[0].idMeal}`);
      }
    };
    handleRedirectToMealDetails();
  }, [recipesList.meals]);

  useEffect(() => {
    const handleRedirectToDrinkDetails = () => {
      if (recipesList.drinks !== [] && recipesList.drinks.length === 1) {
        history.push(`/drinks/${recipesList.drinks[0].idDrink}`);
      }
    };
    handleRedirectToDrinkDetails();
  }, [recipesList.drinks]);

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
