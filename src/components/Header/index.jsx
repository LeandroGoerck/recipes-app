import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import globalContext from '../../Context/globalContext';
import SearchBar from '../SearchBar';

function Header({ children, displayIconSearch }) {
  const {
    searchBar: { displayInputSearch, setDisplayInputSearch },
  } = useContext(globalContext);

  return (
    <>
      <header>
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile icon" />
        </Link>
        <p data-testid="page-title">{children}</p>
        {displayIconSearch !== false && (
          <button
            onClick={ () => setDisplayInputSearch(!displayInputSearch) }
            type="button"
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Search icon"
            />
          </button>
        )}
      </header>
      <SearchBar />
    </>
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
