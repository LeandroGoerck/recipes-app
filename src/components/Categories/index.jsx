import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonGeneric from '../../subcomponents/ButtonGeneric';

function Categories({ fetchCategories, topicRecipe }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        const listCategories = topicRecipe;
        const FIVE = 5;
        setCategories(data[listCategories].splice(0, FIVE));
      });
  }, []);

  return (
    <div>
      {categories.map(({ strCategory }) => {
        const btnCategory = (
          <ButtonGeneric
            TestId={ `${strCategory}-category-filter` }
            key={ strCategory }
            Text={ strCategory }
          />);
        return btnCategory;
      })}
    </div>
  );
}

Categories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  topicRecipe: PropTypes.string.isRequired,
};

export default Categories;
