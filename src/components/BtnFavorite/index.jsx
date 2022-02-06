import React, { useContext, useState, useEffect } from 'react';
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
    drinkDetails: { drinkDetails },
  } = useContext(GlobalContext);
  const initLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const infoProduct = window.location.href.includes('foods') ? details : drinkDetails;
  const id = window.location.href.includes('foods')
    ? infoProduct.idMeal : infoProduct.idDrink;

  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    if (initLocal) {
      setIsColor(initLocal.filter((e) => window.location.href.includes(e.id)).length > 0);
    }
  }, [initLocal]);

  const buildProduct = (type, payload) => {
    if (type === 'foods') {
      return {
        id,
        type: 'food',
        nationality: payload.strArea,
        category: payload.strCategory,
        alcoholicOrNot: '',
        name: payload.strMeal,
        image: payload.strMealThumb,
      };
    }
    return {
      id,
      type: 'drink',
      nationality: '',
      category: payload.strCategory,
      alcoholicOrNot: payload.strAlcoholic,
      name: payload.strDrink,
      image: payload.strDrinkThumb,
    };
  };

  const handleFavorite = (evt) => {
    evt.preventDefault();
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'))
      ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];
    const type = window.location.href.includes('foods') ? 'foods' : 'drinks';
    const favRecipe = buildProduct(type, infoProduct);
    if (getLocal.filter((e) => e.id === id).length < 1) {
      setIsColor(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...getLocal, favRecipe]));
    } else {
      setIsColor(false);
      localStorage.setItem('favoriteRecipes',
        JSON.stringify(getLocal.filter((e) => e.id !== id)));
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
