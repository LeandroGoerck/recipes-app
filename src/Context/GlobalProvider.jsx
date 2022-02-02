import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import { fetchFoods } from '../services/fetchFoods';

function GlobalProvider({ children }) {
  // =================== Login ======================
  const [email, setEmail] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const [password, setPassword] = useState('');
  // =================== SearchBar ==================
  const [displayInputSearch, setDisplayInputSearch] = useState(false);
  // =================== RecipesList ================
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [canShow, setCanShow] = useState(false);
  // =================== Explore ================
  const [nationalities, setNationalities] = useState([]);
  // =================== Request Api ============
  const firstTwelveFoods = () => {
    fetchFoods()
      .then((data) => {
        const TWELVE = 12;
        const firstTwelve = data.meals.slice(0, TWELVE);
        setMeals(firstTwelve);
      });
  };

  const contextValue = {
    login: {
      email,
      setEmail,
      btnLogin,
      setBtnLogin,
      password,
      setPassword,
    },
    searchBar: {
      displayInputSearch,
      setDisplayInputSearch,
    },
    recipesList: {
      meals,
      setMeals,
      drinks,
      setDrinks,
      canShow,
      setCanShow,
    },
    explore: {
      nationalities,
      setNationalities,
    },
    requestAPI: {
      firstTwelveFoods,
    },
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
