import React, { useContext, useState } from 'react';
import globalContext from '../../Context/globalContext';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';
import InputGeneric from '../../subcomponents/InputGeneric';

function SearchBar() {
  const { searchBar: { displayInputSearch } } = useContext(globalContext);
  const [radioValue, setRadioValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleRadioChange = ({ target }) => {
    setRadioValue(target.value);
  };

  const handleClick = () => {
    console.log(radioValue);
  };

  return (
    <form>
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
    </form>
  );
}

export default SearchBar;
