import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import GlobalContext from '../../Context/GlobalContext';
import { fetchDrinks, fetchCategoryDrinks } from '../../services/fetchDrinks';
import Categories from '../../components/Categories';

function Drinks() {
  const { recipesList: { setDrinks } } = useContext(GlobalContext);

  useEffect(() => {
    fetchDrinks()
      .then(({ drinks }) => {
        const TWELVE = 12;
        const firstTwelveDrinks = drinks.splice(0, TWELVE);
        setDrinks(firstTwelveDrinks);
      });
  }, []);

  return (
    <div>
      <Header>Drinks</Header>
      <Categories fetchCategories={ fetchCategoryDrinks } topicRecipe="drinks" />
      <CardList />
      <Footer />
    </div>
  );
}

export default Drinks;
