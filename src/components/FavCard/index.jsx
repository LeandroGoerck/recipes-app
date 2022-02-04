import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import ShareIcon from '../../images/shareIcon.svg';
import DesfavoriteIcon from '../../images/blackHeartIcon.svg';
import { Simg, Scard, Stitle } from '../../style/CardList';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';
import Context from '../../Context/GlobalContext';

const copy = require('clipboard-copy');

function Card({ cardName, srcImg, type, index, nationality, category, alcoholic, id }) {
  const [showText, setShowText] = useState(false);

  const { favRecipes: { favoriteRecipes, setFavoritesRecipes } } = useContext(Context);

  useEffect(() => {
    const ONE_SECOND = 1000;
    setTimeout(() => setShowText(false), ONE_SECOND);
  }, [showText]);

  const copyURL = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setShowText(true);
  };

  const desfavoriteRecipe = () => {
    const filterFavorites = favoriteRecipes
      .filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filterFavorites));
    setFavoritesRecipes(filterFavorites);
  };

  return (
    <Scard>
      <Link to={ `/${type}s/${id}` }>
        <Simg
          data-testid={ `${index}-horizontal-image` }
          src={ srcImg }
          alt="imagem da receita"
        />
        <strong data-testid={ `${index}-horizontal-name` }>
          {cardName}
        </strong>
      </Link>
      {
        type === 'food' && (
          <Stitle
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${nationality} - ${category}`}
          </Stitle>)
      }
      {
        type === 'drink' && (
          <Stitle data-testid={ `${index}-horizontal-top-text` }>
            {alcoholic}
          </Stitle>)
      }
      { showText && <span>Link copied!</span>}
      <ButtonGeneric ClickEvent={ copyURL }>
        <img
          src={ ShareIcon }
          alt="share"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </ButtonGeneric>
      <ButtonGeneric ClickEvent={ desfavoriteRecipe }>
        <img
          src={ DesfavoriteIcon }
          alt="desfavorite"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </ButtonGeneric>
    </Scard>
  );
}

Card.propTypes = {
  alcoholic: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  nationality: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
