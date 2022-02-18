import PropTypes from 'prop-types';
import '../../style/style.css';
import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

function RecommendedDrinkCard({ index }) {
  const { foodDetails: { drinkRecommendations } } = useContext(GlobalContext);
  return (
    <div
      data-testid={ `${index}-recomendation-card` }
      className="item-carousel"
    >
      <img
        className="d-flex w-100 rounded-circle"
        src={ drinkRecommendations[index]?.strDrinkThumb }
        alt="ImageOne"
      />
      <span
        className="d-flex justify-content-center"
        data-testid={ `${index}-recomendation-title` }
      >
        { drinkRecommendations[index]?.strDrink }
      </span>
    </div>
  );
}

RecommendedDrinkCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default RecommendedDrinkCard;
