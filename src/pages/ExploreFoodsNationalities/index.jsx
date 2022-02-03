import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import CardList from '../../components/CardList';

function ExploreFoodsNationalities() {
  return (
    <div>
      <Header>Explore Nationalities</Header>
      <Dropdown />
      <CardList />
      <Footer />
    </div>
  );
}

export default ExploreFoodsNationalities;
