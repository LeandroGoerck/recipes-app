import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../../style/style.css';
import GlobalContext from '../../Context/GlobalContext';

function BtnStart() {
  const {
    favorite: isFinish,
    startButton: { isStart, setIsStart },
  } = useContext(GlobalContext);

  const history = useHistory();
  const { location: { pathname } } = useHistory();

  function handleStart() {
    setIsStart(!isFinish);
    history.push(`${pathname}/in-progress`);
  }

  return (
    <button
      className="BtnStart"
      type="submit"
      data-testid="start-recipe-btn"
      hidden={ !isFinish }
      onClick={ handleStart }
    >
      { isStart ? 'Start Recipe' : 'Continue Recipe'}
    </button>
  );
}

export default BtnStart;
