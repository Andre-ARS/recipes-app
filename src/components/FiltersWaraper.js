import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinks } from '../services/DrinksApi';
import { fetchFoods } from '../services/RecipesApi';

const FiltersWaraper = ({ pathName }) => {
  const { categories, setFilterByCategory } = useContext(RecipesContext);
  const [lastFilter, setlastFilter] = useState('');

  const handleClick = async (name) => {
    if (name !== lastFilter) {
      let filteredData;
      if (pathName === '/foods') {
        filteredData = await fetchFoods('filter', name);
      } else {
        filteredData = await fetchDrinks('filter', name);
      }
      setFilterByCategory(filteredData);
      setlastFilter(name);
    } else {
      setFilterByCategory('');
      setlastFilter('');
    }
  };

  return (
    <div>
      { categories.length > 0
          && (
            <button
              type="button"
              data-testid="All-category-filter"
              onClick={ () => {
                setFilterByCategory('');
                setlastFilter('');
              } }
            >
              All
            </button>)}

      { categories.map(({ strCategory }, i) => {
        const FILTER_LIMIT = 5;
        if (i < FILTER_LIMIT) {
          return (
            <button
              type="button"
              data-testid={ `${strCategory}-category-filter` }
              key={ strCategory }
              onClick={ () => handleClick(strCategory) }
            >
              { strCategory }
            </button>
          );
        }
        return null;
      }) }
    </div>
  );
};

FiltersWaraper.propTypes = {
  pathName: PropTypes.string,
}.isRequired;

export default FiltersWaraper;
