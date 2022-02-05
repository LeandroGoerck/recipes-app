import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShareIcon from '../../images/shareIcon.svg';
import { Simg, Scard, Stitle } from '../../style/CardList';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';

const copy = require('clipboard-copy');

function RecipeDoneCard({ recipe, index }) {
  const {
    name,
    image,
    type,
    nationality,
    category,
    alcoholicOrNot,
    id,
    doneDate,
    tags } = recipe;

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const ONE_SECOND = 1000;
    setTimeout(() => setShowText(false), ONE_SECOND);
  }, [showText]);

  const copyURL = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setShowText(true);
  };

  return (
    <Scard>
      <Link to={ `/${type}s/${id}` }>
        <Simg
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt="imagem da receita"
        />
        <strong data-testid={ `${index}-horizontal-name` }>
          {name}
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
            {alcoholicOrNot}
          </Stitle>)
      }
      <i data-testid={ `${index}-horizontal-done-date` }>{doneDate}</i>
      {tags.map((tag) => (
        <Stitle key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
          {tag}
        </Stitle>
      ))}
      { showText && <span>Link copied!</span>}
      <ButtonGeneric ClickEvent={ copyURL }>
        <img
          src={ ShareIcon }
          alt="share"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </ButtonGeneric>
    </Scard>
  );
}

RecipeDoneCard.propTypes = {
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    nationality: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeDoneCard;
