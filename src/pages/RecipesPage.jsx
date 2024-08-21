import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipeSearch from '../component/RecipeSearch/RecipeSearch';
import RecipeDetails from '../component/RecipeDetails/RecipeDetails';

const RecipesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeSearch />} />
      <Route path=":id" element={<RecipeDetails />} />
    </Routes>
  );
};

export default RecipesPage;