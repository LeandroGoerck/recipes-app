import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import GlobalContext from '../../Context/GlobalContext';
import ButtonFilters from '../../components/ButtonFilters';
import DoneCards from '../../components/DoneCards';

function DoneRecipes() {
  const {
    doneRecipes: { doneList, setDoneList } } = useContext(GlobalContext);
  const doneStorage = JSON.parse(localStorage.getItem('doneRecipes'));

  useEffect(() => setDoneList(doneStorage), []);

  return (
    <>
      <Header displayIconSearch={ false }>Done Recipes</Header>
      <ButtonFilters doneStorage={ doneStorage } />
      <DoneCards doneList={ doneList } />
    </>
  );
}

export default DoneRecipes;
