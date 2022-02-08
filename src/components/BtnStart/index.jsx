import PropTypes, { string } from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../style/style.css';
import GlobalContext from '../../Context/GlobalContext';

function BtnStart(props) {
  const { getLocal } = props;
  const { location: { pathname } } = useHistory();
  const {
    buttonFinish: { isFinish },
    startButton: { isStart, setIsStart },
    foodDetails: { details },
    drinkDetails: { drinkDetails },
  } = useContext(GlobalContext);
  const history = useHistory();
  const infoProduct = window.location.href.includes('foods') ? details : drinkDetails;
  const id = window.location.href.includes('foods')
    ? infoProduct.idMeal : infoProduct.idDrink;

  useEffect(() => {
    if (getLocal.length !== 0) {
      setIsStart(getLocal.includes(id));
    }
  }, [getLocal]);

  function handleStart() {
    localStorage?.setItem('startRecipes', JSON.stringify([...getLocal, id]));
    history.push(`${pathname}/in-progress`);
  }

  return (
    !isFinish && (
      <button
        className="BtnStart"
        type="submit"
        data-testid="start-recipe-btn"
        onClick={ handleStart }
      >
        {isStart ? 'Continue Recipe' : 'Start Recipe'}
      </button>)
  );
}

BtnStart.propTypes = {
  getLocal: PropTypes.arrayOf(string).isRequired,
};

export default BtnStart;
