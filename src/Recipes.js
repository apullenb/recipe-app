import React from "react";
import Recipe from "./Recipe";

function Recipes(props) {
  
  return (
    <div className="recipes-block">
      {props.recipes &&
        props.recipes.map((recipe, i) => {
          return (
            <div className="recipe-box" key={i}>
              <Recipe recipe={recipe} />
            </div>
          );
        })}
    </div>
  );
}

export default Recipes;
