import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SdivExploreFoods from '../../style/ExploreFoodsDrinks';

function ExploreDrinks() {
  const history = useHistory();

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

        <button data-testid="explore-surprise" type="button">
          Surprise me!
        </button>
      </SdivExploreFoods>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
