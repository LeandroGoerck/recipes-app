import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';
import { fetchFilterCategoryDrinks } from '../../services/fetchDrinks';
import { fetchFilterCategoryFoods } from '../../services/fetchFoods';
import Loading from '../Loading';

function Categories({ fetchCategories, topicRecipe }) {
  const { recipesList: { setMeals, setDrinks },
    requestAPI: { loading, setLoading } } = useContext(GlobalContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        const listCategories = topicRecipe;
        const FIVE = 5;
        setCategories(data[listCategories].splice(0, FIVE));
      });
  }, []);

  function handleFilterCategory(strCategory) {
    if (topicRecipe === 'drinks') {
      setLoading(true);
      fetchFilterCategoryDrinks(strCategory).then((data) => {
        const TWELVE = 12;
        const firstTwelveDrinks = data.splice(0, TWELVE);
        setDrinks(firstTwelveDrinks);
        setLoading(false);
      });
    } else {
      fetchFilterCategoryFoods(strCategory).then((data) => {
        setLoading(true);
        const TWELVE = 12;
        const firstTwelveFoods = data.splice(0, TWELVE);
        setMeals(firstTwelveFoods);
        setLoading(false);
      });
    }
  }

  return (
    loading ? <Loading /> : (
      <div className="categories">
        {categories.map(({ strCategory }) => {
          const btnCategory = (
            <button
              type="button"
              data-testid={ `${strCategory}-category-filter` }
              key={ strCategory }
              onClick={ () => handleFilterCategory(strCategory) }
            >
              { strCategory }
            </button>);
          return btnCategory;
        })}
      </div>
    ));
}

Categories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  topicRecipe: PropTypes.string.isRequired,
};

export default Categories;
