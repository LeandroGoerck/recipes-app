import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../../style/style.css';
import GlobalContext from '../../Context/GlobalContext';

function BtnStart() {
  const { location: { pathname } } = useHistory();
  const history = useHistory();
  const {
    favorite: isFinish,
    startButton: { isStart },
  } = useContext(GlobalContext);

  function handleStart() {
    history.push(`${pathname}/in-progress`);
  }

  return (
    <button
      className="BtnStart"
      type="submit"
      data-testid="start-recipe-btn"
      hidden={ !isFinish }
      onClick={ handleStart }
      style={ { display: isFinish ? 'initial' : 'none' } }
    >
      { isStart ? 'Start Recipe' : 'Continue Recipe'}
    </button>
  );
}

export default BtnStart;
