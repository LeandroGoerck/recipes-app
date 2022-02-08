import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';

import Categories from '../../components/Categories';

function Drinks() {
  return (
    <div>
      <Header>Drinks</Header>
      <Categories />
      <CardList />
      <Footer />
    </div>
  );
}

export default Drinks;
