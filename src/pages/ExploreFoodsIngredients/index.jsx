import React, { useEffect, useContext } from 'react';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchFoodsIngredients } from '../../services/fetchIngredients';
import GlobalContext from '../../Context/GlobalContext';

function ExploreFoodsIngredients() {
  const { ingredientsList: { setIngredientsX } } = useContext(GlobalContext);
  useEffect(() => {
    fetchFoodsIngredients()
      .then(({ meals }) => {
        const TWELVE = 12;
        const firstTwelveIngredients = meals.splice(0, TWELVE);
        setIngredientsX(firstTwelveIngredients);
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

export default ExploreFoodsIngredients;
