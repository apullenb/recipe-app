import React from 'react'

function Recipe(props) {
    const recipe = props.recipe.recipe
    return (
        <div>
            <h2>{recipe.label}</h2>
            <p>Calories: {Math.floor(recipe.calories)}</p>
            <img src={recipe.image} alt={recipe.image} />
            
        </div>
    )
}

export default Recipe
