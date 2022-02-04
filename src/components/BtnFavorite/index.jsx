import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import '../../style/style.css';

function BtnFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      className="favorite-btn"
      onClick={ () => handleFavorite() }
    >
      {isFavorite ? <AiFillHeart className="fillHeart" />
        : <AiOutlineHeart className="outlineHeart" />}
    </button>
  );
}

export default BtnFavorite;
