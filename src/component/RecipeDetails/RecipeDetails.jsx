import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
          params: { i: id }
        });

        if (response.data && response.data.meals && response.data.meals.length > 0) {
          setRecipe(response.data.meals[0]);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError('An error occurred while fetching the recipe.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="recipe-details">
      {recipe ? (
        <>
          <h1>{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strSource}</p>
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {Object.keys(recipe)
                .filter(key => key.startsWith('strIngredient') && recipe[key])
                .map((ingredient, index) => (
                  <li key={index}>
                    {recipe[ingredient]} - {recipe[`strMeasure${index + 1}`]}
                  </li>
                ))}
            </ul>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
          </div>
        </>
      ) : (
        <p>No recipe found</p>
      )}
    </div>
  );
};

export default RecipeDetails;