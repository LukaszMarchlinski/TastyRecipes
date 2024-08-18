import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Pobierz ID z parametrów URL

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                // Sprawdź, czy id jest poprawne
                if (!id) {
                    throw new Error('Invalid recipe ID');
                }

                // Sprawdź, czy API Edamam wymaga pełnego URI lub tylko ID
                const formattedId = id.startsWith('recipe_') ? id : `recipe_${id}`;
                
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${formattedId}`, {
                    params: {
                        app_id: process.env.REACT_APP_EDAMAM_APP_ID,
                        app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
                    }
                });
                setRecipe(response.data.recipe);
            } catch (err) {
                console.error('Error fetching recipe:', err.response ? err.response.data : err.message);
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
        <div>
            {recipe ? (
                <>
                    <h1>{recipe.label}</h1>
                    <img src={recipe.image} alt={recipe.label} />
                    <p>{recipe.source}</p>
                    {/* Dodaj inne informacje o przepisie */}
                </>
            ) : (
                <p>No recipe found</p>
            )}
        </div>
    );
};

export default RecipeDetails;