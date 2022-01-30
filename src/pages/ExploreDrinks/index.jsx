import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SdivExploreFoods from '../../style/ExploreFoodsDrinks';
import { fetchRandomDrink } from '../../services/fetchRandom';

function ExploreDrinks() {
  const history = useHistory();

  async function generateRandomDrink() {
    const api = await fetchRandomDrink();
    const { idDrink } = api.drinks[0];
    return history.push(history.push(`/drinks/${idDrink}`));
  }

  return (
    <div>
      <Header displayIconSearch={ false }>Explore Drinks</Header>
      <SdivExploreFoods>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>

        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ generateRandomDrink }
        >
          Surprise me!
        </button>
      </SdivExploreFoods>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
