import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import RecommendedDrinkCard from '../RecommendedDrinkCard';
import '../../style/style.css';

function RecommendedDrinksCarousel() {
  const INTERVAL_TIME = 50000;
  return (
    <Carousel
      indicators={ false }
      style={ { display: 'block',
        width: 300,
        padding: 3,
        border: 'none' } }
    >
      <Carousel.Item interval={ INTERVAL_TIME }>
        <div
          className="d-flex flex-row w-100"
        >
          <RecommendedDrinkCard index={ 0 } style={ { border: 'none' } } />
          <RecommendedDrinkCard index={ 1 } className="item-carousel" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={ INTERVAL_TIME }>
        <div className="d-flex flex-row w-100">
          <RecommendedDrinkCard index={ 2 } />
          <RecommendedDrinkCard index={ 3 } />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={ INTERVAL_TIME }>
        <div className="d-flex flex-row w-100">
          <RecommendedDrinkCard index={ 4 } />
          <RecommendedDrinkCard index={ 5 } />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default RecommendedDrinksCarousel;
