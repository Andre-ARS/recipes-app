import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import IngredientsCard from './IngredientsCard';
import { fetchDrinksIngredients,
  fetchDrinksImages, fetchDrinksListByIngredient } from '../services/IngredientsApi';

function ExploreDrinksIngredients() {
  const { ingredientsList,
    setFilterbyIngredient } = useContext(RecipesContext);

  useEffect(() => {
    const getIngredients = async () => {
      const drinkObj = (await fetchDrinksIngredients());
      const { strIngredient1 } = drinkObj;
      setFilterbyIngredient(strIngredient1);
    };
    getIngredients();
  });

  const fetchIngredientsData = async (ingredient) => {
    const getData = await fetchDrinksListByIngredient(ingredient);
    const filteredCards = setFilterbyIngredient(getData);
    return filteredCards;
  };

  return (
    <section>
      {ingredientsList.map(({ strIngredient1 }, index) => {
        const CARD_LIMIT = 12;
        if (index < CARD_LIMIT) {
          return (
            <Link
              to="/drinks"
              key={ index }
              onClick={ () => fetchIngredientsData(strIngredient1) }
            >

              <IngredientsCard
                name={ strIngredient1 }
                index={ index }
                src={ fetchDrinksImages(strIngredient1) }
              />
            </Link>
          );
        }
        return null;
      })}
    </section>
  );
}

export default ExploreDrinksIngredients;
