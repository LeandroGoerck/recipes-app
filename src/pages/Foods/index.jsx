import React, { useEffect, useContext } from 'react';
// import { GiMeal } from 'react-icons/gi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import GlobalContext from '../../Context/GlobalContext';
import Categories from '../../components/Categories';

function Foods() {
  const { requestAPI: { firstTwelveFoods } } = useContext(GlobalContext);

  useEffect(() => firstTwelveFoods(), []);

  return (
    <>
      <Header>Foods</Header>
      {/* <GiMeal className="food-icon" size={ 120 } /> */}
      <Categories />
      <CardList />
      <Footer />
    </>
  );
}

export default Foods;
