import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RecipeSearch.css'; // Import stylów

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('public');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const appId = process.env.REACT_APP_EDAMAM_APP_ID;
  const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
        params: {
          type,
          q: query,
          app_id: appId,
          app_key: appKey,
        },
      });
      setRecipes(response.data.hits);
    } catch (err) {
      setError('An error occurred while fetching recipes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recipe-search">
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter recipe name or ingredient"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="public">Public</option>
        <option value="user">User</option>
        <option value="any">Any</option>
      </select>
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="recipe-list">
        {recipes.map((hit) => {
          const id = hit.recipe.uri.split("#")[1]; // Pobranie ID przepisu
          return (
            <div key={id} className="recipe-card">
              <h2>{hit.recipe.label}</h2>
              <img src={hit.recipe.image} alt={hit.recipe.label} />
              <p>{hit.recipe.source}</p>
              <Link to={`/recipes/recipe/${id}`}>View Details</Link> {/* Link do szczegółów */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeSearch;