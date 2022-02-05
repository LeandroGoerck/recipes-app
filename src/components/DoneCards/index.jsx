import PropTypes from 'prop-types';
import React from 'react';
import RecipeDoneCard from '../RecipeDoneCard';

function DoneCards({ doneList }) {
  return (
    <div>
      { doneList !== null && doneList.length !== 0 ? (
        doneList.map((recipe, index) => (
          <RecipeDoneCard
            key={ recipe.id }
            index={ index }
            recipe={ recipe }
          />
        ))) : null }
    </div>
  );
}

DoneCards.propTypes = {
  doneList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DoneCards;
