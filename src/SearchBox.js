import React, { useState } from "react";
import config from "./config";
import Recipes from "./Recipes";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const [recipes, setRecipes] = useState("");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${config.REACT_APP_ID}&app_key=${config.REACT_APP_KEY}&diet=high-fiber&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div>
      <div className="search-block">
        <h3>Enter Ingredient to Search: </h3>
        <input
          className="search"
          type="text"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={getRecipes}>Find Recipes</button>
      </div>
      {recipes.length > 0 && <Recipes recipes={recipes} />}
    </div>
  );
}

export default SearchBox;
