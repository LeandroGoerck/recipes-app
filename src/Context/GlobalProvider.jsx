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
  const [filteredIngredient, setFilteredIngredient] = useState('');
  const [filteredDrinkIngredient, setFilteredDrinkIngredient] = useState('');
  // =================== Favorite ================
  const [isFavorite, setIsFavorite] = useState(false);
  const [favList, setFavList] = useState([]);
  // =================== Save Link ================
  const [saveLink, setSaveLink] = useState();
  // =================== Button Finish ================
  const [isFinish, setIsFinish] = useState(false);
  // =================== Button Start ================
  const [isStart, setIsStart] = useState(false);
  const [getLocal, setGetLocal] = useState([]);
  // =================== FoodDetails ================
  const [details, setDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [drinkRecommendations, setDrinkRecommendations] = useState([]);
  // =================== DrinkDetails ===============
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [mealRecommendations, setMealRecommendations] = useState([]);
  // ================= IngredientList ===============
  const [ingredientsX, setIngredientsX] = useState([]);
  const [drinksIngredientsX, setDrinksIngredientsX] = useState([]);
  // =================== Explore ====================
  const [nationalities, setNationalities] = useState([]);
  // =================== Favorites Recipes ==========
  const [favoriteRecipes, setFavoritesRecipes] = useState([]);
  // =================== In Progress Recipes ============
  const [inProgCocktails, setInProgCocktails] = useState([]);
  const [inProgMeals, setInProgMeals] = useState([]);
  // =================== Done Recipes ==========
  const [doneList, setDoneList] = useState([]);
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
    startButton: {
      isStart,
      setIsStart,
      getLocal,
      setGetLocal,
    },
    favorite: {
      isFavorite,
      setIsFavorite,
      favList,
      setFavList,
    },
    buttonFinish: {
      isFinish,
      setIsFinish,
    },
    recipesList: {
      meals,
      setMeals,
      drinks,
      setDrinks,
      canShow,
      setCanShow,
      filteredIngredient,
      setFilteredIngredient,
      filteredDrinkIngredient,
      setFilteredDrinkIngredient,
    },
    shareLink: {
      saveLink,
      setSaveLink,
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
    ingredientsList: {
      ingredientsX,
      setIngredientsX,
      drinksIngredientsX,
      setDrinksIngredientsX,
    },
    explore: {
      nationalities,
      setNationalities,
    },
    requestAPI: {
      firstTwelveFoods,
    },
    favRecipes: {
      favoriteRecipes,
      setFavoritesRecipes,
    },
    inProgressRecipes: {
      cocktails: inProgCocktails,
      meals: inProgMeals,
      setInProgCocktails,
      setInProgMeals,
    },
    doneRecipes: {
      doneList,
      setDoneList,
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
