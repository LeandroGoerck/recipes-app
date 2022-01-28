import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header({ children, displayIconSearch }) {
  return (
    <header>
      <Link to="/profile">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile icon" />
      </Link>
      <p data-testid="page-title">{children}</p>
      {displayIconSearch !== false && (
        <img data-testid="search-top-btn" src={ searchIcon } alt="Search icon" />)}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
  displayIconSearch: PropTypes.bool.isRequired,
};

export default Header;
