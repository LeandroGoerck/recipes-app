import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import GlobalContext from '../../Context/GlobalContext';
import { fetchCategoryFoods } from '../../services/fetchFoods';
import Categories from '../../components/Categories';

function Foods() {
  const { requestAPI: { firstTwelveFoods } } = useContext(GlobalContext);

  useEffect(() => firstTwelveFoods(), []);

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
