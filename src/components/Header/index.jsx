import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header({ children }) {
  return (
    <header>
      <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile icon" />
      <p data-testid="page-title">{children}</p>
      <img data-testid="search-top-btn" src={ searchIcon } alt="Search icon" />
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
