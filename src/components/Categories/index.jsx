import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import {
  fetchDrinks,
  fetchFilterCategoryDrinks,
  fetchCategoryDrinks,
} from '../../services/fetchDrinks';
import {
  fetchFoods,
  fetchFilterCategoryFoods,
  fetchCategoryFoods,
} from '../../services/fetchFoods';
import { SdivCategories, SbuttonCategories } from '../../style/Categories';

function Categories() {
  const { location: { pathname } } = useHistory();

  //  ================== Contexto ================
  const { recipesList: { setMeals, setDrinks },
    requestAPI: { setLoading } } = useContext(GlobalContext);

  // =================== State ===================
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState({ filter: false, category: '' });

  // =================== Categorias ==============
  const handleCategories = () => {
    if (pathname === '/foods') {
      setLoading(true);
      fetchCategoryFoods()
        .then(({ meals }) => {
          const FIVE = 5;
          const firstFiveCategories = meals.slice(0, FIVE);
          setCategories(firstFiveCategories);
          setLoading(false);
        });
    } else {
      setLoading(true);
      fetchCategoryDrinks()
        .then(({ drinks }) => {
          const FIVE = 5;
          const firstFiveCategories = drinks.slice(0, FIVE);
          setCategories(firstFiveCategories);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  // ================== Filtro por Categoria =================
  const handleSearchFilterCategory = () => {
    if (pathname === '/drinks') {
      setLoading(true);
      fetchFilterCategoryDrinks(filterCategory.category).then((data) => {
        const TWELVE = 12;
        const firstTwelveDrinks = data.slice(0, TWELVE);
        setDrinks(firstTwelveDrinks);
        setLoading(false);
      });
    } else {
      fetchFilterCategoryFoods(filterCategory.category).then((data) => {
        setLoading(true);
        const TWELVE = 12;
        const firstTwelveFoods = data.slice(0, TWELVE);
        setMeals(firstTwelveFoods);
        setLoading(false);
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

  useEffect(() => {
    if (filterCategory.filter === false) {
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
    <SdivCategories>
      {categories.map(({ strCategory }) => {
        const btnCategory = (
          <SbuttonCategories
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
            onClick={ () => handleClick(strCategory) }
          >
            { strCategory }
          </SbuttonCategories>);
        return btnCategory;
      })}
      <SbuttonCategories
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleClick('All') }
      >
        All
      </SbuttonCategories>
    </SdivCategories>
  );
}

export default Categories;
