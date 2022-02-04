import React, { useContext, useState } from 'react';
import '../../style/style.css';
import GlobalContext from '../../Context/GlobalContext';

function BtnStart() {
  const { favorite: isFinish } = useContext(GlobalContext);

  const [isStart, setIsStart] = useState(true);
  return (
    <button
      className="BtnStart"
      type="submit"
      data-testid="start-recipe-btn"
      hidden={ !isFinish }
      onClick={ () => setIsStart(!isFinish) }
    >
      { isStart ? 'Start Recipe' : 'Continue Recipe'}
    </button>
  );
}

export default BtnStart;
