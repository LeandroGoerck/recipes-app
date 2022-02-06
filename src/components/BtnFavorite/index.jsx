import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import GlobalContext from '../../Context/GlobalContext';
import '../../style/style.css';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function BtnFavorite() {
  const {
    foodDetails: {
      details,
    },
  } = useContext(GlobalContext);
  const initLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const { idMeal } = details;
  const [isColor, setIsColor] = useState(false);
  // const { id } = useParams();

  useEffect(() => {
    if (initLocal) {
      setIsColor(initLocal.filter((e) => window.location.href.includes(e.id)).length > 0);
    }
  }, []);

  const handleFavorite = (evt) => {
    evt.preventDefault();
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favRecipe = {
      id: idMeal,
      type: details.strCategory,
      nationality: details.strArea,
      alcoholicOrNot: details.strAlcoholic ? details.strAlcoholic : '',
      name: details.strMeal,
      image: details.strMealThumb,
    };
    if (getLocal.filter((e) => e.id === idMeal).length < 1) {
      setIsColor(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...getLocal, favRecipe]));
    } else {
      setIsColor(false);
      localStorage.setItem('favoriteRecipes',
        JSON.stringify(getLocal.filter((e) => e.id !== idMeal)));
    }
  };
  return (
    <button
      src={ isColor ? blackHeartIcon : whiteHeartIcon }
      type="submit"
      data-testid="favorite-btn"
      className="favorite-btn"
      onClick={ handleFavorite }
    >
      {isColor ? <AiFillHeart className="fillHeart" />
        : <AiOutlineHeart className="outlineHeart" />}
    </button>
  );
}

export default BtnFavorite;
