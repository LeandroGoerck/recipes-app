import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SbuttonExplore, SdivExplore } from '../../style/Explore';

function Explore() {
  const history = useHistory();

  return (
    <div>
      <Header displayIconSearch={ false }>Explore</Header>
      <SdivExplore>
        <SbuttonExplore
          data-testid="explore-foods"
          type="button"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </SbuttonExplore>
        <SbuttonExplore
          data-testid="explore-drinks"
          type="button"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </SbuttonExplore>
      </SdivExplore>
      <Footer />
    </div>
  );
}

export default Explore;
