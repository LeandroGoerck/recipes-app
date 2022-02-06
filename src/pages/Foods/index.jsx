import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import Categories from '../../components/Categories';

function Foods() {
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
