import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SdivExploreFoods from '../../style/ExploreFoodsDrinks';
import { fetchRandomMeal } from '../../services/fetchRandom';

function ExploreFoods() {
  const history = useHistory();

  async function generateRandomMeal() {
    const api = await fetchRandomMeal();
    const { idMeal } = api.meals[0];
    return history.push(history.push(`/foods/${idMeal}`));
  }

  return (
    <div>
      <Header displayIconSearch={ false }>Explore Foods</Header>
      <SdivExploreFoods>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>

        <button
          data-testid="explore-by-nationality"
          type="button"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>

        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ generateRandomMeal }
        >
          Surprise me!
        </button>
      </SdivExploreFoods>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
