import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RecipeSearch.css';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Filter states
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');

  // Fetch categories, areas, and ingredients on mount
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const categoryResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        const areaResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const ingredientResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');

        setCategories(categoryResponse.data.categories);
        setAreas(areaResponse.data.meals);
        setIngredients(ingredientResponse.data.meals);
      } catch (err) {
        setError('An error occurred while fetching filters.');
      }
    };

    fetchFilters();
  }, []);

  const handleSearch = async (searchQuery = '') => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php', {
        params: {
          s: searchQuery || query,
        },
      });

      if (response.data && response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
      }
    } catch (err) {
      setError('An error occurred while fetching recipes.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedArea(''); // Reset area filter
    setSelectedIngredient(''); // Reset ingredient filter
    if (category) {
      await handleSearch(category);
    } else {
      await handleSearch(); // Clear search if no category is selected
    }
  };

  const handleAreaChange = async (event) => {
    const area = event.target.value;
    setSelectedArea(area);
    setSelectedCategory(''); // Reset category filter
    setSelectedIngredient(''); // Reset ingredient filter
    if (area) {
      await handleSearch(area);
    } else {
      await handleSearch(); // Clear search if no area is selected
    }
  };

  const handleIngredientChange = async (event) => {
    const ingredient = event.target.value;
    setSelectedIngredient(ingredient);
    setSelectedCategory(''); // Reset category filter
    setSelectedArea(''); // Reset area filter
    if (ingredient) {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          i: ingredient,
        },
      });

      if (response.data && response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
      }
    } else {
      await handleSearch(); // Clear search if no ingredient is selected
    }
  };

  return (
    <div className="recipe-search">
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter recipe name"
      />
      <button onClick={() => handleSearch()} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="error">{error}</p>}

      <div className="filter-group">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>

        <select value={selectedArea} onChange={handleAreaChange}>
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
        </select>

        <select value={selectedIngredient} onChange={handleIngredientChange}>
          <option value="">Select Ingredient</option>
          {ingredients.map((ingredient) => (
            <option key={ingredient.idIngredient} value={ingredient.strIngredient}>
              {ingredient.strIngredient}
            </option>
          ))}
        </select>
      </div>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strCategory}</p>
            <p>{recipe.strArea}</p>
            <Link to={`/recipes/${recipe.idMeal}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;