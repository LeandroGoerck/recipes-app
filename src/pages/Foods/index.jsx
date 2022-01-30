import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import GlobalContext from '../../Context/GlobalContext';
import { fetchFoods } from '../../services/fetchFoods';

function Foods() {
  const { recipesList: { setMeals } } = useContext(GlobalContext);
  useEffect(() => {
    fetchFoods()
      .then(({ meals }) => {
        const TWELVE = 12;
        const firstTwelveFoods = meals.splice(0, TWELVE);
        setMeals(firstTwelveFoods);
      });
  }, []);
  return (
    <div>
      <Header>Foods</Header>
      <CardList />
      <Footer />
    </div>
  );
}

export default Foods;
