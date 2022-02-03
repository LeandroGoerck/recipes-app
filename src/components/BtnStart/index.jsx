import React from 'react';
import '../../style/style.css';

function BtnStart() {
  return (
    <button
      className="BtnStart"
      type="submit"
      data-testid="start-recipe-btn"
    >
      Start Recipe
    </button>
  );
}

export default BtnStart;
