import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import handleLocalStorageFavoriteRecipes
from '../../helpers/handleLocalStorageFavoriteRecipes';
import '../../style/style.css';

function BtnFavorite({ recipeObj }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      const localStorageRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (localStorageRecipes.some((recipe) => recipe.id === recipeObj.id)) {
        setIsFavorite(true);
      }
    }
  }, [recipeObj]);

  const handleFavorite = () => {
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
        <AiFillHeart className="fillHeart" />
      </button>
    );
  }

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      className="favorite-btn"
      onClick={ () => handleFavorite() }
      src="whiteHeartIconblackHeartIcon"
    >
      <AiOutlineHeart className="outlineHeart" />
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
