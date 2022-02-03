import React, { useEffect, useContext } from 'react';
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
      <Categories />
      <CardList />
      <Footer />
    </>
  );
}

export default Foods;
