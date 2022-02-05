import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

function BtnFinish() {
  const { favorite: { setIsFinish } } = useContext(GlobalContext);

  function handleFinish() {
    setIsFinish(true);
  }

  return (
    <button
      type="submit"
      data-testid="finish-recipe-btn"
      onClick={ handleFinish }
    >
      Finish Recipe
    </button>
  );
}

export default BtnFinish;
