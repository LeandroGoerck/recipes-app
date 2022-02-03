import React, { useEffect, useContext, useState } from 'react';
import {
  fetchFoodsNationalities,
  fetchFoodsForNationality } from '../../services/fetchFoods';
import GlobalContext from '../../Context/GlobalContext';

function DropDown() {
  const { explore: { setNationalities, nationalities },
    recipesList: { setMeals },
    requestAPI: { firstTwelveFoods } } = useContext(GlobalContext);
  const [nationality, setNationality] = useState('');

  const fetchNationalities = () => {
    fetchFoodsNationalities()
      .then(({ meals }) => setNationalities(meals));
  };

  const foodsForNationality = () => {
    fetchFoodsForNationality(nationality)
      .then(({ meals }) => {
        const TWELVE = 12;
        if (meals !== undefined) {
          const firstTwelve = meals.slice(0, TWELVE);
          setMeals(firstTwelve);
        }
      });
  };

  const filterNationality = () => {
    if (nationality === 'All') {
      firstTwelveFoods();
    } else {
      foodsForNationality();
    }
  };

  useEffect(() => {
    filterNationality();
  }, [nationality]);

  useEffect(() => {
    fetchNationalities();
  }, []);

  const handleChangeNationality = ({ target: { value } }) => {
    setNationality(value);
  };

  return (
    <div style={ { marginTop: '200px' } }>
      <label htmlFor="explore-by-nationality-dropdown">
        Nationality
        <select
          id="explore-by-nationality-dropdown"
          data-testid="explore-by-nationality-dropdown"
          onChange={ handleChangeNationality }
          value={ nationality }
        >
          <option data-testid="All-option">All</option>
          { nationalities !== undefined ? nationalities.map(({ strArea }) => (
            <option data-testid={ `${strArea}-option` } key={ strArea }>{strArea}</option>
          )) : null}
        </select>
      </label>
    </div>
  );
}

export default DropDown;
