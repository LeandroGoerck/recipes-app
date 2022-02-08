import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import {
  fetchDrinks,
  fetchFilterCategoryDrinks,
  fetchCategoryDrinks,
  fetchDrinksForIngredients,
} from '../../services/fetchDrinks';
import {
  fetchFoods,
  fetchFilterCategoryFoods,
  fetchCategoryFoods,
  fetchFoodsForIngredients,
} from '../../services/fetchFoods';
import { Scategories, Scategory } from '../../style/Categories';

function Categories() {
  const { location: { pathname } } = useHistory();

  //  ================== Contexto ================
  const {
    recipesList: {
      setMeals,
      setDrinks,
      filteredIngredient,
      setFilteredIngredient,
      filteredDrinkIngredient,
      setFilteredDrinkIngredient,
    },
  } = useContext(GlobalContext);

  // =================== State ===================
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState({ filter: false, category: '' });

  // =================== Categorias ==============
  const handleCategories = () => {
    if (pathname === '/foods') {
      fetchCategoryFoods()
        .then(({ meals }) => {
          const FIVE = 5;
          const firstFiveCategories = meals.slice(0, FIVE);
          setCategories(firstFiveCategories);
        });
    } else {
      fetchCategoryDrinks()
        .then(({ drinks }) => {
          const FIVE = 5;
          const firstFiveCategories = drinks.slice(0, FIVE);
          setCategories(firstFiveCategories);
        });
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  // ================== Filtro por Categoria =================
  const handleSearchFilterCategory = () => {
    if (pathname === '/drinks') {
      fetchFilterCategoryDrinks(filterCategory.category).then((data) => {
        const TWELVE = 12;
        const firstTwelveDrinks = data.slice(0, TWELVE);
        setDrinks(firstTwelveDrinks);
      });
    } else {
      fetchFilterCategoryFoods(filterCategory.category).then((data) => {
        const TWELVE = 12;
        const firstTwelveFoods = data.slice(0, TWELVE);
        setMeals(firstTwelveFoods);
      });
    }
  };

  const handleNoFilter = () => {
    if (pathname === '/foods') {
      fetchFoods()
        .then(({ meals }) => {
          const TWELVE = 12;
          const firstTwelveFoods = meals.slice(0, TWELVE);
          setMeals(firstTwelveFoods);
        });
    } else {
      fetchDrinks()
        .then(({ drinks }) => {
          const TWELVE = 12;
          const firstTwelveDrinks = drinks.slice(0, TWELVE);
          setDrinks(firstTwelveDrinks);
        });
    }
  };

  const handleFoodIngredient = (filteredIngredientName) => {
    fetchFoodsForIngredients(filteredIngredientName)
      .then(({ meals }) => setMeals(meals));
  };

  const handleDrinkIngredient = (filteredIngredientName) => {
    fetchDrinksForIngredients(filteredIngredientName)
      .then(({ drinks }) => {
        const TWELVE = 12;
        const filteredTwelveDrinks = drinks.slice(0, TWELVE);
        setDrinks(filteredTwelveDrinks);
      });
  };

  useEffect(() => {
    if (filteredIngredient) {
      handleFoodIngredient(filteredIngredient);
      setFilteredIngredient('');
    } else if (filteredDrinkIngredient) {
      handleDrinkIngredient(filteredDrinkIngredient);
      setFilteredDrinkIngredient('');
    } else if (filterCategory.filter === false) {
      handleNoFilter();
    } else {
      handleSearchFilterCategory();
    }
  }, [filterCategory]);

  const handleClick = (strCategory) => {
    if (strCategory === 'All' || filterCategory.category === strCategory) {
      setFilterCategory({ filter: false, category: '' });
    } else {
      setFilterCategory({ filter: true, category: strCategory });
    }
  };

  return (
    <Scategories>
      {categories.map(({ strCategory }) => {
        const btnCategory = (
          <Scategory
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
            onClick={ () => handleClick(strCategory) }
          >
            { strCategory }
          </Scategory>);
        return btnCategory;
      })}
      <Scategory
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleClick('All') }
      >
        All
      </Scategory>
    </Scategories>
  );
}

export default Categories;
