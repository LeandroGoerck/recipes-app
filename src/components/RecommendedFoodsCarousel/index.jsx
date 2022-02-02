import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import RecommendedFoodCard from '../RecommendedFoodCard';

function RecommendedFoodsCarousel() {
  const INTERVAL_TIME = 1000;
  return (
    <Carousel
      indicators={ false }
      style={ { display: 'block', width: 300, padding: 3 } }
    >
      <Carousel.Item interval={ INTERVAL_TIME }>
        <div className="d-flex flex-row w-100">
          <RecommendedFoodCard index={ 0 } />
          <RecommendedFoodCard index={ 1 } />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={ INTERVAL_TIME }>
        <div className="d-flex flex-row w-100">
          <RecommendedFoodCard index={ 2 } />
          <RecommendedFoodCard index={ 3 } />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={ INTERVAL_TIME }>
        <div className="d-flex flex-row w-100">
          <RecommendedFoodCard index={ 4 } />
          <RecommendedFoodCard index={ 5 } />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default RecommendedFoodsCarousel;
