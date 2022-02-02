import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import GlobalContext from '../../Context/GlobalContext';
import { fetchFoods, fetchCategoryFoods } from '../../services/fetchFoods';
import Categories from '../../components/Categories';

function Foods() {
  const { recipesList: { setMeals } } = useContext(GlobalContext);
  useEffect(() => {
    fetchFoods()
      .then(({ meals }) => {
        const TWELVE = 12;
        const firstTwelveFoods = meals.slice(0, TWELVE);
        setMeals(firstTwelveFoods);
      });
  }, []);
  return (
    <div>
      <Header>Foods</Header>
      <Categories fetchCategories={ fetchCategoryFoods } topicRecipe="meals" />
      <CardList />
      <Footer />
    </div>
  );
}

export default Foods;
