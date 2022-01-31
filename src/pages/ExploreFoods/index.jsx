import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SdivExploreFoods, SbuttonExplore } from '../../style/ExploreFoodsDrinks';
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
        <SbuttonExplore
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </SbuttonExplore>

        <SbuttonExplore
          data-testid="explore-by-nationality"
          type="button"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </SbuttonExplore>

        <SbuttonExplore
          data-testid="explore-surprise"
          type="button"
          onClick={ () => generateRandomMeal() }
        >
          Surprise me!
        </SbuttonExplore>
      </SdivExploreFoods>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
