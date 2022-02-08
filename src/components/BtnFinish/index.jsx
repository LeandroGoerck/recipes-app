import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';

function BtnFinish() {
  const { buttonFinish: { setIsFinish } } = useContext(GlobalContext);
  const history = useHistory();

  function handleFinish() {
    setIsFinish(true);
    history.goBack();
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
