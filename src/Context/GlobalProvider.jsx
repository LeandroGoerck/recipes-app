import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

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
  // ================= IngredientList ===============
  const [ingredients, setIngredients] = useState([]);

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
    ingredientsList: {
      ingredients,
      setIngredients,
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
