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
  // =================== FoodDetails ================
  const [details, setDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [drinkRecommendations, setDrinkRecommendations] = useState([]);
  // =================== DrinkDetails ================
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [mealRecommendations, setMealRecommendations] = useState([]);

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
    foodDetails: {
      details,
      setDetails,
      ingredients,
      setIngredients,
      drinkRecommendations,
      setDrinkRecommendations,
    },
    drinkDetails: {
      drinkDetails,
      setDrinkDetails,
      drinkIngredients,
      setDrinkIngredients,
      mealRecommendations,
      setMealRecommendations,
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
