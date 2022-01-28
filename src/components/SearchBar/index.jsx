import React, { useContext } from 'react';
import globalContext from '../../Context/globalContext';

function SearchBar() {
  const { searchBar: { displayInputSearch } } = useContext(globalContext);

  return (
    <div>
      {displayInputSearch !== false && <input data-testid="search-input" type="text" />}
    </div>
  );
}

export default SearchBar;
