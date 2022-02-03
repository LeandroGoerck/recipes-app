import React, { useEffect, useContext } from 'react';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchDrinksIngredients } from '../../services/fetchIngredients';
import GlobalContext from '../../Context/GlobalContext';

function ExploreDrinksIngredients() {
  const { ingredientsList: { setDrinksIngredientsX } } = useContext(GlobalContext);
  useEffect(() => {
    fetchDrinksIngredients()
      .then(({ drinks }) => {
        const TWELVE = 12;
        const firstTwelveIngredients = drinks.splice(0, TWELVE);
        setDrinksIngredientsX(firstTwelveIngredients);
      });
  }, []);

  return (
    <div>
      <Header displayIconSearch={ false }>Explore Ingredients</Header>
      <CardList />
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
