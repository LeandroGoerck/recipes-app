import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

function RecommendedFoodCard({ index }) {
  const { drinkDetails: { mealRecommendations } } = useContext(GlobalContext);
  return (
    <div
      data-testid={ `${index}-recomendation-card` }
      className="border border-light rounded-20 shadow p-3 mb-5"
    >
      <img
        className="d-flex w-100 rounded-circle"
        src={ mealRecommendations[index]?.strMealThumb }
        alt="ImageOne"
      />
      <span
        className="d-flex justify-content-center"
        data-testid={ `${index}-recomendation-title` }
      >
        { mealRecommendations[index]?.strMeal }
      </span>
    </div>
  );
}

RecommendedFoodCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default RecommendedFoodCard;
