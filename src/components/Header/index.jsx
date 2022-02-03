import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';
import {
  Stitle,
  Sdiv,
  Sheader,
  Simg,
  SinvDiv,
  SbuttonSearch,
  SdivBarSearch,
} from '../../style/Header';

function Header({ children, displayIconSearch }) {
  const [displayInputSearch, setDisplayInputSearch] = useState(false);
  return (
    <Sheader>
      <Sdiv>
        <Link to="/profile">
          <Simg data-testid="profile-top-btn" src={ profileIcon } alt="Profile icon" />
        </Link>
        <Stitle data-testid="page-title">{children}</Stitle>
        {displayIconSearch !== false ? (
          <SbuttonSearch
            onClick={ () => setDisplayInputSearch(!displayInputSearch) }
            type="button"
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Search icon"
            />
          </SbuttonSearch>)
          : (<SinvDiv />)}
      </Sdiv>
      <SdivBarSearch>
        {displayInputSearch !== false
          && <SearchBar /> }
      </SdivBarSearch>
    </Sheader>
  );
}

Header.defaultProps = {
  displayIconSearch: true,
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
  displayIconSearch: PropTypes.bool,
};

export default Header;
