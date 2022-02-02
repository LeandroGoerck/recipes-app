import React, { useEffect, useContext } from 'react';
import { fetchFoodsNationalities } from '../../services/fetchFoods';
import GlobalContext from '../../Context/GlobalContext';

function DropDown() {
  const { explore: { setNationalities, nationalities } } = useContext(GlobalContext);

  const fetchNationalities = () => {
    fetchFoodsNationalities()
      .then(({ meals }) => setNationalities(meals));
  };

  useEffect(() => {
    fetchNationalities();
  }, []);

  return (
    <div>
      <select data-testid="explore-by-nationality-dropdown" name="nationalities">
        {nationalities.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea }>{strArea}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
