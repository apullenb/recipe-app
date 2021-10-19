import React, { useState } from "react";
import ViewRecipe from "./ViewRecipe";

function Recipe(props) {
  const recipe = props.recipe.recipe;

  const [showHide, setShowHide] = useState("hide");

  const handleShowHide = () => {
    showHide === "hide" ? setShowHide("show") : setShowHide("hide");
  };

  return (
    <div className="">
      <h2>{recipe.label}</h2>
      <h4>Calories: {Math.floor(recipe.calories).toLocaleString()}</h4>
      <img src={recipe.image} alt={recipe.label} />
      <p>
        <button onClick={handleShowHide}>View Recipe</button>
      </p>
      <div className={showHide}>
        <ViewRecipe recipe={recipe} hide={handleShowHide} />
      </div>
    </div>
  );
}

export default Recipe;
