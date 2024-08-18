import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeSearch from '../component/RecipeSearch/RecipeSearch'; // Import komponentu wyszukiwania przepisów
import RecipeDetails from '../component/RecipeDetails/RecipeDetails'; // Import komponentu szczegółów przepisu

const RecipesPage = () => {
    return (
        <div>
            <h1>Recipes</h1>
            <Routes>
                <Route path="/" element={<RecipeSearch />} />
                <Route path="recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </div>
    );
};

export default RecipesPage;