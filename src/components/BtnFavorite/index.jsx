import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import handleLocalStorageFavoriteRecipes
from '../../helpers/handleLocalStorageFavoriteRecipes';
import '../../style/style.css';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
// import GlobalContext from '../../Context/GlobalContext';

function BtnFavorite({ recipeObj }) {
  // const {
  //   foodDetails: {
  //     details,
  //   },
  //   drinkDetails: { drinkDetails },
  // } = useContext(GlobalContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const initLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // const infoProduct = window.location.href.includes('foods') ? details : drinkDetails;
  // const id = window.location.href.includes('foods')
  //   ? infoProduct.idMeal : infoProduct.idDrink;
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    if (initLocal) {
      setIsColor(initLocal.filter((e) => window.location.href.includes(e.id)).length > 0);
    }
  }, [initLocal]);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      const localStorageRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (localStorageRecipes.some((recipe) => recipe.id === recipeObj.id)) {
        setIsFavorite(true);
      }
    }
  }, [recipeObj]);

  // const buildProduct = (type, payload) => {
  //   if (type === 'foods') {
  //     return {
  //       id,
  //       type: 'food',
  //       nationality: payload.strArea,
  //       category: payload.strCategory,
  //       alcoholicOrNot: '',
  //       name: payload.strMeal,
  //       image: payload.strMealThumb,
  //     };
  //   }
  //   return {
  //     id,
  //     type: 'drink',
  //     nationality: '',
  //     category: payload.strCategory,
  //     alcoholicOrNot: payload.strAlcoholic,
  //     name: payload.strDrink,
  //     image: payload.strDrinkThumb,
  //   };
  // };

  const handleFavorite = () => {
    // evt.preventDefault();
    // const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'))
    //   ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];
    // const type = window.location.href.includes('foods') ? 'foods' : 'drinks';
    // const favRecipe = buildProduct(type, infoProduct);
    // if (getLocal.filter((e) => e.id === id).length < 1) {
    //   setIsColor(true);
    //   localStorage.setItem('favoriteRecipes', JSON.stringify([...getLocal, favRecipe]));
    // } else {
    //   setIsColor(false);
    //   localStorage.setItem('favoriteRecipes',
    //     JSON.stringify(getLocal.filter((e) => e.id !== id)));
    // }
    setIsFavorite(!isFavorite);
    handleLocalStorageFavoriteRecipes(recipeObj);
  };

  if (isFavorite) {
    return (
      <button
        type="button"
        data-testid="favorite-btn"
        className="favorite-btn"
        onClick={ () => handleFavorite() }
        src="blackHeartIconwhiteHeartIcon"
      >
        <AiFillHeart className="fillHeart" size={ 35 } />
      </button>
    );
  }

  return (
    <button
      src={ isColor ? blackHeartIcon : whiteHeartIcon }
      type="submit"
      data-testid="favorite-btn"
      className="favorite-btn"
      onClick={ handleFavorite }
    >
      <AiOutlineHeart className="outlineHeart" size={ 35 } />
    </button>
  );
}

BtnFavorite.defaultProps = {
  recipeObj: [],
};

BtnFavorite.propTypes = {
  recipeObj: PropTypes.shape(
    PropTypes.string.isRequired,
  ),
};

export default BtnFavorite;
