import React, { useContext } from 'react';
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
    favorite: {
      isFavorite,
      setIsFavorite,
      // setFavList,
    } } = useContext(GlobalContext);

  const handleFavorite = (evt) => {
    evt.preventDefault();
    setIsFavorite(!isFavorite);
    const { idMeal } = details;
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favRecipe = {
      id: idMeal,
      type: details.strCategory,
      nationality: details.strArea,
      alcoholicOrNot: details.strAlcoholic ? details.strAlcoholic : '',
      name: details.strMeal,
      image: details.strMealThumb,
    };
    if (getLocal.id !== idMeal) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(favRecipe));
    }
  };
  return (
    <button
      src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
      type="submit"
      data-testid="favorite-btn"
      className="favorite-btn"
      onClick={ handleFavorite }
    >
      {isFavorite ? <AiFillHeart className="fillHeart" />
        : <AiOutlineHeart className="outlineHeart" />}
    </button>
  );
}

export default BtnFavorite;
