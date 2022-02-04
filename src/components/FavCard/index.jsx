import PropTypes from 'prop-types';
import React from 'react';
import ShareIcon from '../../images/shareIcon.svg';
import DesfavoriteIcon from '../../images/blackHeartIcon.svg';
import { Simg, Scard, Stitle } from '../../style/CardList';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';

function Card({ cardName, srcImg, type, index, nationality, category, alcoholicOrNot }) {
  return (
    <Scard>
      <Simg
        data-testid={ `${index}-horizontal-image` }
        src={ srcImg }
        alt="imagem da receita"
      />
      <strong data-testid={ `${index}-horizontal-name` }>
        {cardName}
      </strong>
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
            {alcoholicOrNot}
          </Stitle>)
      }
      <ButtonGeneric>
        <img
          src={ ShareIcon }
          alt="share"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </ButtonGeneric>
      <ButtonGeneric>
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
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  srcImg: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
};

export default Card;
